package main;
import java.util.Collections; 
import java.util.ArrayList;


abstract class CompileInfo { // All requirement to store in database
	protected Market market;
	protected Spot spot;
	protected ArrayList<Template> templates = new ArrayList<Template>();
	protected CloneStat[] clones; // List because of StatType... 
	protected ViewTemplate view;  // need to refresh our view in real time
	protected int maxResult, maxCraft100, maxWasted;

	public Market market() {
		return this.market;
	}
	
	public void setMarket(Market market) {
		this.market = market;
	}
	
	public Spot spot() {
		return this.spot; 
	}
	
	public void setSpot(Spot spot) {
		this.spot = spot;
	}
	
	 // To show in real time the results
	public ViewTemplate view() {
		return this.view;
	}
	public void setViewTemplate(ViewTemplate view) {
		this.view = view;
	}
	
	// will convert stats to imbues
	public CloneStat[] clones() {
		return this.clones;
	} 
	public void setClonesStat(CloneStat[] clones) {
		this.clones = clones;
	}
	
	// Maximum of template to show
	public int maxResult() {
		return this.maxResult;
	}
	
	public void setMaxResult(int value) {
		this.maxResult = value; 
	}
	
	 // Maximum number of craft 100% to swhow
	public int maxCraft100() {
		return this.maxCraft100;
	}
	public void setMaxCraft100(int value) {
		this.maxCraft100 = value;
	}
	
	// maximum of wasted util to search template
	public int maxWasted() {
		return this.maxWasted;
	} 
	
	public void setMaxWasted(int value) {
		this.maxWasted = value;
	}
	
	public ArrayList<Template> templates() {
		return this.templates;
	}
	
	public void setTemplates(ArrayList<Template> temps) {
		this.templates = temps;
	}
}


 
// All calulated stuff will be here before compile
class Compile extends CompileInfo { 
	private int numbCrafts = 0, numbRogs = 0; // shortcut
	private ArrayList<Stat> basicStats; // Shortcut
	private float utilMinRogs = 0; // Shortcut

	public void refreshCalculs() {
		this.basicStats = spot.bud().mergeBasicStats(); // Init all basics stats (Custom, sidi)
		this.utilMinRogs = spot.rog().util(); // Total of util needed to find rogs
		this.numbCrafts = spot.craft().sizeSelected();
		this.numbRogs = spot.rog().sizeSelected();
		this.market.setUsefullUtilOnRogs();
	}
	
	public ArrayList<Stat> removeDuplicateId(ArrayList<Stat> stats) {
		ArrayList<Stat> cleans = new ArrayList<Stat>();
		for (int i = 0; i < stats.size(); i++) { 
			Stat stat = stats.get(i);
			if ( ToolStats.hasSameId( cleans, stat.id() ) ) continue;
			cleans.add(stat);
		}
		return cleans;
	}
	
	private int indexInBasics(Stat stat) {
		for (int i = 0; i < this.basicStats.size(); i++) {
			Stat basic =  this.basicStats.get(i);
			if ( basic.hasEquivalent(stat.id()) ) return i;
		}
		return -1;
	}
	
	// Return the sum of usefull values, used in compile to check the waste
	private int sumValues(ArrayList<Stat> stats, Stat basic) {
		//return stats.stream().filter(s -> s.id() == statId).mapToInt(s -> s.value()).sum();
		int value = 0;
		for (int i = 0; i < stats.size(); i++) {
			Stat stat = stats.get(i);
			if ( ! basic.hasEquivalent(stat.id()) ) continue;
			value = value + stat.value();
		}
		return value;
	}
	
	// Will check that last spots of Craft will not end with same stats
	public boolean hasSameCount(ArrayList<Stat> remainImbues, ArrayList<Stat> slots) {
		int cpt1 = 0, cpt2 = 0;
		int numbToFill = remainImbues.size() / spot.craft().numbSlot(); // 3 craft left to fill
		
		// Make sure we doesn't to have power and dext to fill == 3
		ArrayList<Stat> cleans = this.removeDuplicateId(remainImbues); 
		
		// Power+9/+9/+7 && Dext+22/+19/+22  = 3 stats left to fill for 3 crafts, then cpt = 2
		for (int i = 0; i < cleans.size(); i++) { // Need to check all stats
			if ( ToolStats.countById(remainImbues, cleans.get(i).id() ) == numbToFill ) cpt1++;
		}
		
		// Power+9 == 3 && No Dext == 0, then cpt = 1, we (power shouldn't be counted twice before making statsSlot)
		for (int i = 0; i < slots.size(); i++) {
			if ( ToolStats.countById(remainImbues, slots.get(i).id() ) == numbToFill ) cpt2++;
		}
		
		return cpt1 == cpt2; // the 4 slots have power AND Dext
	}
	
	// Estimate the number of MP according to stats before going to craft
	public int estimateNumb100(ArrayList<Stat> stats) {
		float points = this.calculImbuePoints(stats, numbCrafts),
			  imbue99 = spot.craft().imbue99(),
			  imbue100 = spot.craft().imbue100();
		int cpt = 0, increment = numbCrafts;

		while ( ( points / increment) >  imbue99 && cpt < numbCrafts ) {	
			points = points - imbue100;
			increment--;
			cpt++;
			if (increment == 0 && points > 0) cpt++;
		} 
		return cpt++;
	}
	
	// Calculate the real number of Master Piece, once crafted
	public int numb100(ArrayList<Item> crafts) {
		int cpt = 0;
		for (int i = 0; i < crafts.size(); i++) {
			float imbuePoints = this.calculImbuePoints(crafts.get(i).stats());
			if (imbuePoints >  spot.craft().imbue99()) cpt++;
		} 
		return cpt;
	}
		
	// We assume that we have filled all the slot before, else int could take float error;
	public float calculImbuePoints(ArrayList<Stat> dontMessStats, int numbCraft) {
		float total = 0;
		
		ArrayList<Stat> stats = new ArrayList<Stat>(dontMessStats);
		Collections.sort(stats, COMPARE.IMBUE_POINT);
		
		int doubleImbue = stats.size() - numbCraft;
		for (int i = 0; i < stats.size(); i++) {
			Imbue imb = (Imbue) stats.get(i);
			if (i >= doubleImbue) total = total + imb.imbuePoint()*2;
			 else total = total + imb.imbuePoint();
		}
		return total;
	}
	
	public float calculImbuePoints(ArrayList<Stat> stats) {
		return calculImbuePoints(stats, 1);
	}
	
	
	// Shortcut keeping only the start thread number
	public boolean searchTemplates(int startThread) {
		// else throw new NullPointerException("Starting Thread have never been to 0");
		return this.compilePurges(startThread, 0, 0, 0, new ArrayList<Item>());
	}
	
	// Very complicated here, but works !
	public boolean compilePurges(int startThread, int position, float previousUtil, 
								int previousIndex,  ArrayList<Item> previousRogs) {
		ArrayList<Item> purges = market.purges().get(position);
		int sizeAll = purges.size();
		int start = position == 0 ? startThread : 0;
		int end = position == 0 ? startThread + 1 : sizeAll;

		for (int i = start; i < end && i < sizeAll; i++) {
			if (templates.size() >= this.maxResult()-1) break; // Check Total of Template wanted
			Item rog = purges.get(i);
			
			ArrayList<Item> rogs = new ArrayList<Item>(); // Reinitiate the rogs on each loop
			for (int j = 0; j < position; j++) rogs.add(previousRogs.get(j));
			
			if (position == 0) view.showCompilePosition(i, sizeAll, rog);
			 //else if (rog.isSame(newRogs[position-1])) break; // Bracer1 != Bracer2
			// Bracer1 != Bracer2 : avoid to search again for the bracers at spot 1
			 else if (rog.id() == rogs.get(position-1).id() && previousIndex == i)  break;
				 	 
//if (position == 0 && i <9) continue;

			rogs.add(rog);
			
			// It adds the stats not wanted (infil with power), but first simple purge
			float util = previousUtil + rog.speedUtil(); // First simple purge

			// Check at last loop if we have matching template
			if (position == numbRogs-1) {
				// Need full utils here, purge was for selecting rogs
				if (util >= utilMinRogs) this.crafting(rogs, util);
			} else if (position < numbRogs-1) {
				this.compilePurges(startThread, position + 1, util, i, rogs);
			}
		}
		return false;
	}

	public boolean crafting(ArrayList<Item> rogs, float util) {
		int basicSize = basicStats.size();
		int[] missing = new int[basicSize];

		float waste = 0;
		 // we exclude all useless stats for bud, and save our missing ones for craft
		for (int i = 0; i < basicSize; i++) { // merge all stats
			Stat stat = basicStats.get(i);
			int	value = stat.value();
			for (int j = 0; j < rogs.size(); j++) {
				value = value + this.sumValues( rogs.get(j).stats(), stat );
			}
			int max = stat.maxValue(), miss = (max - value);
			if (value > max) waste = waste + ( (value - max) * stat.singleUtil()); // ex Cold 28/26
			if (waste > this.maxWasted()) return false; // Purge if too much template waste
			 // Ex : Magic/melee = +3, then miss 8, for only 5 craft to put +1 All Magic/Melee
			 else if (stat.isUnited() && miss > numbCrafts) return false; 
			//util = util + ( valueRogs * stat.singleUtil() ); // Total template util
			missing[i] =  miss ; 
		}
		
		// Big purge : 80% of results with wasted and usefull value for bud
		if ( (util - waste) <  utilMinRogs) return false; 
		
		// Create all the imbues that need to be craft
		ArrayList<Stat> cutImbues = new ArrayList<Stat>();
		for (int i = 0; i < basicSize; i++) {
			int value = missing[i];
			if ( value <= 0 ) continue; // If no need for craft
			Stat stat = basicStats.get(i);
			CloneStat clone = clones[stat.type().id()];
			cutImbues.addAll( clone.getImbues(stat, value) );
		}

		// Other purge, before counting the number of MP
		int cutSize = cutImbues.size();

		int numbMax = numbCrafts * spot.craft().numbSlot();
		if ( cutSize > numbMax ) return false; // Purge : 21 slot to craft when 20 available

		int rabSize = cutSize - (numbMax - cutSize);
			
		if (rabSize < cutSize) { // If 17/20 imbues then rab = 3
			// Increase the number of cut from orginals values, starting from highest vals
			// Tricky system indead imagine: Skill = 11, then skill = 3+3+3+2. Else, if normal cut 6 + 5 : 2+2+2+5 = not cool!
			Collections.sort(cutImbues, COMPARE.IMBUE_POINT); // Get Highest values first
			ArrayList<Integer> countRabs = new ArrayList<Integer>();
			for (int i = cutSize-1; i >= rabSize ; i--) { // numbmax = 24 then Loop start 23 --> 21 == 2 rab
				countRabs.add(cutImbues.get(i).id());
			}
			
			ArrayList<Stat> reCutImbues = new ArrayList<Stat>();
			for (int i = 0; i < cutSize; i++) { // Re Cut the biggest imbues 
				Imbue imbue = (Imbue) cutImbues.get(i);
				int countRab = Collections.frequency(countRabs, imbue.id());	
				if ( countRab == 0 ) reCutImbues.add(imbue); // Do need to cut again
				 else if ( ToolStats.hasSameId( reCutImbues, imbue.id() ) == false) { // Already reCut in previous loop
					int index = this.indexInBasics(imbue);
					int value = missing[index];
					Stat stat = basicStats.get(index);
					CloneStat clone = clones[stat.type().id()];
					reCutImbues.addAll( clone.getCutImbues( stat, value,  countRab ) );
				 }
			}
			cutImbues = reCutImbues;
		}
		
		int estimate100 = estimateNumb100(cutImbues);
		if ( estimate100 > numbCrafts ) return false;
	
		ArrayList<Item> crafts = fillCrafts(cutImbues, estimate100);
		int count100 = this.numb100(crafts);
		boolean errorOnfill = crafts.size() != numbCrafts; 
		boolean hasNumbMp = count100 <= this.maxCraft100();
		
		if (!hasNumbMp || errorOnfill) {
			float utilBasics = ToolStats.sumUtilSingle(basicStats);
			String fillText = errorOnfill ? "Error" : count100+"";
			view.showSkip(waste, (util + utilBasics), fillText , estimate100 );
			return false;
		}
		
		Template template = new Template();
		template.setId( this.templates.size() );
		templates.add(template);
		template.setTitle( (template.id() < 10) ? "0" + template.id() : "" +template.id() );
		template.setUtil(util);
		template.setWaste(waste);
		template.setSidis(spot.bud().sidiItems());
		template.setCut(cutSize);
		template.setRogs(rogs);
		template.setCrafts(crafts);
		view.showTemplate(template);
		view.createTemplateXml(template);
		
		
		//view.showTemplateBeforeCraft(basicStats, cutImbues, rogs, missing, clones, cutSize);
		return true;
	}
	
	// If last crafted item has imbue at 40, we increase number of MP.
	public ArrayList<Item> fillCrafts(ArrayList<Stat> allImbues, int increment100) {
		ArrayList<Item> crafts = new ArrayList<Item>();
		
		// Init the max number of imbues point wanted
		float points =  spot.craft().imbue100();
		if (increment100 == 0) points = spot.craft().imbue99();
		
		// A list of stats that will remove stats set on crafts
		
		ArrayList<Stat> remainImbues = new ArrayList<Stat>();
		ArrayList<Integer> remainSpots = spot.craft().spotIds();
		remainImbues.addAll(allImbues);
		Collections.sort(remainImbues, COMPARE.IMBUE_POINT); // Craft Biggest imbue first
		
		// Improve margin at 37 instead of 37.5 (or 33 instead 33.5)
		while (crafts.size() < numbCrafts && points > 0) {
			ArrayList<Stat> slots = this.fillSlots(new ArrayList<Stat>(), remainImbues, 0, points);
			if (slots != null) { // imbues matchimbues
				Item item = new Item(slots);
				item.setType(spot.craft().type());
				item.setSpotId(remainSpots.get(0)); // First arrive, first spot
				crafts.add( item ); // Fill our craft list
				remainSpots.remove(0); // Remove the spot set on item
				remainImbues.removeAll(slots); // Remove the stats from our list to fill
				if (crafts.size() == increment100) points =  spot.craft().imbue99(); // switch the max imbues to 33.5
			} else points = points - 0.5f; // decrease the number of imbues to match
		}

		//System.out.println(incrementCraft +" / " + numbCrafts + "______"+ crafts.size() + " / "+numbCrafts);
		boolean isFill = increment100 > numbCrafts || crafts.size() >= numbCrafts;
		return (isFill) ? crafts : this.fillCrafts(allImbues, increment100 + 1);
	}

	
	private ArrayList<Stat> fillSlots(ArrayList<Stat> previousSlots, 
				ArrayList<Stat> remainImbues, int incrementSlot, float points) {		
		if (incrementSlot >= spot.craft().numbSlot()) return null;
		
		for (int i = remainImbues.size() -1; i >= 0 ; i--) { // start from highest to fill them in priority			
			// Reinite the table on each loop, avoid old data on "hasSame"
			ArrayList<Stat> slots = new ArrayList<Stat>();
			for (int j = 0; j < incrementSlot; j++) slots.add( previousSlots.get(j) );
			
			// Check that imbue is not twice on the 4 slots
			if ( ToolStats.hasSameId( slots, remainImbues.get(i).id() ) ) continue;
			 else slots.add( remainImbues.get(i) );
			
			if (incrementSlot == 3) { // If all slots are filled
				float totalImbue = this.calculImbuePoints(slots);
				// check that last slots will not containe same stats	
				boolean hasLast = this.hasSameCount(remainImbues, slots); 
				if (totalImbue == points && hasLast) return slots;
			} else { // Will break all the loop if we find a match
				ArrayList<Stat> filled = this.fillSlots(slots, remainImbues, incrementSlot+1, points);
				if (filled != null) return filled;
			}
		}
		return null;
	}


}
