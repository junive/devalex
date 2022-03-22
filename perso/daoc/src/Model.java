package main;
import java.util.*;
import java.io.*;


class Spot { // The basic model that will select all rogs / craft etc... 
	private ArrayList<Integer> spots; // get(i) == spotId
	private int clearId = -1;
	private String[] names;
	private ArrayList<Integer> weapons;
	private SpotRog rog; // Depend of SpotCraft and all Bud basic utils 
	private SpotCraft craft; // Depend only of bud total util
	private SpotSidi sidi;
	private Bud bud;
	
	public Spot() { } // For view only 
	
	// Will initiate the spots with spot unused
	public Spot(String[] names, int clearId) {
		this.setNames(names); // Init all spots
		this.setClearId(clearId);
		this.clear(); 
	}

	public Bud bud() { return this.bud; }
	public void setBud(Bud bud) {
		this.bud = bud;
		this.craft.init(this, bud);
		this.rog.init(this, bud, this.craft);
		this.sidi.init(this, bud);
	}

	public String[] names() {
		return this.names;
	}
	
	public void setNames(String[] names) {
		this.names = names;
	}
	
	public SpotRog rog() {
		return this.rog;
	}
	
	public void setRog(SpotRog rog) {
		this.rog = rog;
	}
	
	public SpotCraft craft() {
		return this.craft;
	}
	
	public void setCraft(SpotCraft craft) {
		this.craft = craft;
	}
	
	public SpotSidi sidi() {
		return this.sidi;
	}
	
	public void setSidi(SpotSidi sidi) {
		this.sidi = sidi;
	}
	
	public ArrayList<Integer> weapons() {
		return this.weapons;
	}
	
	public void setWeapons(ArrayList<Integer> spotIds) {
		this.weapons = spotIds;
	}
	
	public int clearId() {
		return this.clearId;
	}
	
	public void setClearId(int id) {
		this.clearId = id;
	}
	
	// Use to cacul the util from market or purge Rog
	public boolean isWeapon(int spotId) {
		for (int i = 0; i < this.weapons.size(); i++) {
			if ( this.weapons.get(i) == spotId ) return true;
		}
		return false;
	}
	
	public int get(int spotId) {
		return this.spots.get(spotId); 
	}
	
	public void set(int spotId, int typeId) {
		this.spots.set(spotId, typeId);
	}

	public int size() { // Full Size, even with unused spots
		return spots.size();
	}

	public int sizeSelected() { // Remove unsued spots
		return this.size() - this.sizeSelected(this.clearId);
	}

	public int sizeSelected(int typeId) { // Size of all type of items
		return Collections.frequency(spots, typeId); 
	}

	public void clear() { // put unused spot id
		this.spots = new ArrayList<Integer>();
		for (int i = 0; i < this.names().length; i++) {
			this.spots.add(this.clearId);
		}
	}
	
	public void clear(int spotId) { // clear the wanted spot
		spots.set(spotId, this.clearId);
	}
}

abstract class SpotType { // The spot Item wanted
	protected Spot spot;
	protected Bud bud;
	protected ItemType type; // Will need it to create Crafts
		
	public void init(Spot spot, Bud bud) {
		this.spot = spot;
		this.bud = bud;
	}
	
	abstract float utilItem(); // Util by Item
	abstract float util(); // Total of util that template need

	public ItemType type() { return this.type; }
	public void setType(ItemType type) { this.type = type; }

	public int sizeSelected() { 
		return spot.sizeSelected( this.type().id() );  
	}
	
	public ArrayList<Integer> spotIds() {
		ArrayList<Integer> spotIds = new ArrayList<Integer>();
		for (int i = 0; i < spot.size(); i++) {
			if (spot.get(i) != this.type().id()) continue;
			spotIds.add(i);
		}
		return spotIds;
	}
}

// Will be used to search rings at 60 util instead of medium 65 to make template
// Or search for less craft at 100% to increase speed
abstract class SpotTypeLess extends SpotType {
	private float utilLess;
	
	// Util to remove on each Item to purge or search less craft 100%
	public float utilLess() { 
		return this.utilLess;
	}
	
	public void setUtilLess(float util) {
		this.utilLess = util;
	}
	
	public float utilPurge() { // Total of util
		return this.util() - ( this.utilLess() * super.sizeSelected() ); 
	}
	
	public float utilItemPurge() { // Util by Item
		return this.utilPurge() / super.sizeSelected(); 
	}
}

class SpotRog extends SpotTypeLess {
	private float utilStaff;
	private SpotCraft spotCraft;
	
	public void init(Spot spot, Bud bud, SpotCraft craft) {
		super.init(spot, bud);
		this.spotCraft = craft;
	}
	
	// The util to purge when a staff appear on garbage  EX : a Staff need 40 utils
	public float utilStaff() {
		return this.utilStaff;
	}
	
	public void setUtilStaff(float util) {
		this.utilStaff = util;
	}
	
	public float util() { // Total util needed to make template
		return bud.util() - this.spotCraft.utilPurge() - bud.sumUtilBasic(); 
	}
		
	public float utilItem() { 
		return this.util() / this.sizeSelected(); 
	}
}

class SpotCraft extends SpotTypeLess  {
	private int numbSlot;
	private float imbue100, imbue99, utilMax;
	
	public float utilMax() {
		return this.utilMax;
	}
	
	public void setUtilMax(float util) {
		this.utilMax = util;
	}
	
	public float imbue100() {
		return this.imbue100;
	}
	
	public void setImbue100(float util) {
		this.imbue100 = util;
	}
	
	public float imbue99() {
		return this.imbue99;
	}
	
	public void setImbue99(float util) {
		this.imbue99 = util;
	}
	
	public int numbSlot() {
		return this.numbSlot;
	}
	
	public void setNumbSlot(int value) {
		this.numbSlot = value;
	}
	
	public float util() { // Total of util needed for all crafts
		float util = (this.utilItem() > this.utilMax) ? this.utilMax : this.utilItem();
		return util * this.sizeSelected();
	}
	
	public float utilItem() {  
		return bud.util() / spot.sizeSelected(); // 993 / 14 = 70
	}
}

// Defined cannot be purged since they are untouchable items
class SpotSidi extends SpotType  {
	
	public float util() {
		float val = 0;
		for (int i = 0; i <  bud.sidiItems().size(); i++) {
			val = val + bud.sumUtilUsefull(  bud.sidiItems().get(i).stats() );
		}
		return val;
	}
	
	public float utilItem() {
		return this.util() /  bud.sidiItems().size();
	}
}


class Bud {
	protected int id = -1;
	protected String name = "", realName = "", raceName = "";
	protected ArrayList<Stat> blankStats; 
	protected ArrayList<Stat> basicStats; 
	protected Item customItem; 
	protected ArrayList<Item> sidiItems = new ArrayList<Item>();
	
	public int id() { return this.id; }
	public void setId(int id) {  this.id = id;  }
	
	// Reaver / Infiltrator / Minstrel....
	public String name() {
		return this.name;
	}
	
	public void setName(String name) {
		this.name = name;
	}
	
	// Albion / Midgard / Hibernia
	public String realName() {
		return this.realName;
	}
	
	public void setRealName(String name) {
		this.realName = name;
	}
	
	// Briton / Dwarf / Celt
	public String raceName() {
		return this.raceName;
	}
	
	public void setRaceName(String name) {
		this.raceName = name;
	}	
	
	// All Usefull stats for bud with value at 0
	public ArrayList<Stat> blankStats() {
		return this.blankStats;
	}
	
	public void setBlankStats(ArrayList<Stat> stats) {
		this.blankStats = stats;
	}
	
	// All stats manualy entered before to search less utils
	public Item customItem() {
		return this.customItem;
	}
	
	public void setCustomItem(Item item) {
		this.customItem = item;
	}
	
	 // All defined items
	public ArrayList<Item> sidiItems() {
		return this.sidiItems;
	}
	
	public void setSidiItems(ArrayList<Item> items) {
		this.sidiItems = items;
	}
	
	// All stats of bud merged here, so not get()
	public void setBasicStats(ArrayList<Stat> stats) {
		this.basicStats = stats;
	}
	
	
	public float util() { // Setted to avoid useless calcul on compile loop
		float util = 0;
		for (int i = 0; i < blankStats.size(); i++) {
			Stat stat = blankStats.get(i);
			util = util + (stat.maxValue() * stat.singleUtil());
		}
		return util;
	}

	// Purge utility from Rog that bud don't need EX : Infiltrator and power +5
	public float sumUtilUsefull(ArrayList<Stat> stats) {
		float util = 0;
		for (int i = 0; i < this.blankStats().size(); i++) {
			Stat blank = this.blankStats().get(i);
			for (int j = 0; j < stats.size(); j++) {
				Stat stat = stats.get(j);
				if ( ! blank.hasEquivalent(stat.id()) ) continue;
				util = util + stat.util();
			}
		}
		return util;
	}
	
	// Shortcut to merge values from one stat list to an other
	private void mergeValues(ArrayList<Stat> stats) {
		for (int i = 0; i < this.basicStats.size(); i++) {
			Stat basic = this.basicStats.get(i);
			for (int j = 0; j < stats.size(); j++) {
				Stat stat = stats.get(j);
				if ( ! basic.hasEquivalent(stat.id()) ) continue;
				basic.setValue( basic.value() + stat.value() );
			}
		}
	}
	
	// Return all Custom/sidis stats merged, to speed up the compile
	// Didn't want to clone Blank stats, Easier to get a blank from Database
	public ArrayList<Stat> mergeBasicStats() {
		for (int i = 0; i < basicStats.size(); i++) {
			basicStats.get(i).setValue(0); // reinit the values
		}
		this.mergeValues(customItem.stats());
		for (int i = 0; i < sidiItems.size(); i++) {
			this.mergeValues(sidiItems.get(i).stats());
		}
		return basicStats;
	}
	
	public float sumUtilBasic() { // Basic Stats already have cut stats
		return ToolStats.sumUtilSingle( this.mergeBasicStats() );
	}
	
	public float sumUtilCustom() {
		return this.sumUtilUsefull( this.customItem().stats() );
	}
	
	// We can remove all Magic Skills or just te enchants and not reju the  from friar
	public void removeBlank(int id) {
		for (int i = 0; i < this.blankStats.size(); i++) {
			Stat blank = this.blankStats.get(i);
			if ( blank.hasEquivalent(id) ) this.blankStats.remove(i); 
		}
	}

	// Will add a sidi for our bud, replace if spot is already taken by other
	public void addSidiItem(Item item) {
		for (int i = 0; i < sidiItems.size(); i++) {
			int spotId = sidiItems.get(i).spotId();
			if ( spotId == item.spotId() ) sidiItems.set(i, item); // replace by SpotID
		}
		// If first time we add a sidi or sidi not set
		if (sidiItems.size() == 0 || sidiItems.indexOf(item) == -1) sidiItems.add(item);
	}
}

class Market {
	private Spot spot;
	private ArrayList<ArrayList<Item>> garbages = new ArrayList<ArrayList<Item>>();
	private ArrayList<ArrayList<Item>> purges = new ArrayList<ArrayList<Item>>();
	private float weaponUtil = 0; // Cannot be calculed, need to be set
	
	public Spot spot() {
		return this.spot;
	}
	
	public void setSpot(Spot spot) {
		this.spot = spot;
	}
	
	public ArrayList<ArrayList<Item>> garbages() {
		return this.garbages;
	}
	
	public void setGarbages(ArrayList<ArrayList<Item>> garbages) {
		this.garbages = garbages;
	}
	
	public ArrayList<ArrayList<Item>> purges() {
		return this.purges;
	}
	
	public void setPurges(ArrayList<ArrayList<Item>> purges) {
		this.purges = purges;
	}
	
	public float weaponUtil() {
		return this.weaponUtil;
	}
	
	public void setWeaponUtil(float util) {
		this.weaponUtil = util; 
	}

	// Return the position an Item by his name from this items
	public int indexInGarbagesByName(Item item) {
		ArrayList<Item> items = this.garbages.get(item.spotId());
		int index = items.indexOf(item);
		if (index == -1) return -1;
		int cpt = 0;
		for (int i = 0; i < items.size() && i <= index; i++) {
			String name = items.get(i).name();
			if (name.indexOf( item.name() ) == -1) continue;
			cpt++;
		}
		return cpt;
	}
	
	// Purge the rogs in function of their utils and spot wanted
	public void calculPurges() {
		int size = spot.rog().sizeSelected();
		for (int i = 0; i < size; i++) this.purges().add(new ArrayList<Item>());
	
		for (int i = 0; i < size; i++) {
			// spotIds.size() = purges.size()
			int spotId = spot.rog().spotIds().get(i);	
			ArrayList<Item> garbs =  this.garbages().get(spotId);
			for (int j = 0; j < garbs.size(); j++) {
				ItemRog rog = (ItemRog) garbs.get(j);
				float minUtil = spot.rog().utilItemPurge();
				if ( spot.isWeapon(spotId) ) minUtil = this.weaponUtil();
				float utilUsefull = spot.bud().sumUtilUsefull(rog.stats());
				if ( utilUsefull < minUtil ) continue;
				this.purges().get(i).add(rog);
			}
		}
	}
	
	// Set the usefulll util on each rogs, for speed reason
	// Will take all cut stats too Ex 2X All Magic Cut in blank = 2X util from rog
	public void setUsefullUtilOnRogs() {
		for (int i = 0; i < this.purges().size(); i++) {
			ArrayList<Item> items = this.purges().get(i);
			for (int j = 0; j < items.size(); j++) {
				Item rog = items.get(j);
				rog.setSpeedUtil( spot.bud().sumUtilUsefull(rog.stats()) );
			}
		}
	}
}

class ChatLogFile {
	private String chatLogUrl;
	private String[] findStats, findRogs;
	private String[][] findInfos;
	
	public String chatLogUrl() {
		return this.chatLogUrl;
	}
	
	public void setChatLogUrl(String url) {
		this.chatLogUrl = url;
	}
	
	public String[] findStats() {
		return this.findStats;
	}
	
	public void setFindStats(String[] texts) {
		this.findStats = texts;
	}
	
	public String[] findRogs() {
		return this.findRogs;
	}
	
	public void setFindRogs(String[] texts) {
		this.findRogs = texts;
	}
	
	public String[][] findInfos() {
		return this.findInfos;
	}
	
	public void setFindInfos(String[][] texts) {
		this.findInfos = texts;
	}
}


class Template {
	private String title;
	private float waste = 0, util = 0;
	private int id = -1, cut = 0;
	private ArrayList<Item> rogs, sidis, crafts;
	
	public int id() {
		return this.id;
	}
	
	public void setId(int value) {
		this.id = value;
	}
	
	public String title() {
		return this.title;
	}
	
	public void setTitle(String title) {
		this.title = title;
	}
	
	public int cut() {
		return this.cut;
	}
	
	public void setCut(int value) {
		this.cut = value;
	}
	
	public float waste() {
		return this.waste;
	}
	
	public void setWaste(float value) {
		this.waste = value;
	}
	
	public float util() {
		return this.util;
	}
	
	public void setUtil(float util) {
		this.util = util;
	}
	
	public ArrayList<Item> sidis() {
		return this.sidis;
	}
	
	public void setSidis(ArrayList<Item>  items) {
		this.sidis = items;
	}
	
	public ArrayList<Item> rogs() {
		return this.rogs;
	}
	
	public void setRogs(ArrayList<Item> items) {
		this.rogs = items;
	}
	
	public ArrayList<Item> crafts() {
		return this.crafts;
	}
	
	public void setCrafts(ArrayList<Item> items) {
		this.crafts = items;
	}

}

class Zenk {
	private String[] replaces, sourceNames;
	private String templateFolder, zenkFile;
	private Spot spot;
	
	public String[] replaces() {
		return this.replaces;
	}
	
	public void setReplaces(String[] names) {
		this.replaces = names;
	}
	
	public String[] sourceNames() {
		return this.sourceNames;
	}
	
	public void setSourceNames(String[] names) {
		this.sourceNames = names;
	}
	
	public String templateFolder() {
		return this.templateFolder;
	}
	
	public void setTemplateFolder(String name) {
		this.templateFolder = name;
	}	
	
	public String zenkFile() {
		return this.zenkFile;
	}
	
	public void setZenkFile(String name) {
		this.zenkFile = name;
	}
	
	public Spot spot() {
		return this.spot;
	}
	
	public void setSpot(Spot spot) {
		this.spot = spot;
	}
		
	public void writeTemplate(Template template) {
		try {
			File myObj = new File(this.zenkFile());
			Scanner myReader = new Scanner(myObj);
			FileWriter fw1 = new FileWriter(this.templateFolder()+"Template_"+template.title()+".znk"); 
			BufferedWriter bw1 = new BufferedWriter(fw1);
			
			while (myReader.hasNextLine()) {
				String line = myReader.nextLine();			
				ArrayList<Item> items = new ArrayList<Item>();
				items.addAll(template.rogs());
				items.addAll(template.sidis());
				items.addAll(template.crafts());	
				String itemText = this.getItemText(line, items);
				
				String rep0 = replaces()[0]; // REPLACE_NAME
				String rep1 = replaces()[1]; // REPLACE_ID
				String rep2 = replaces()[2]; // REPLACE_WEAPON
				String rep3 = replaces()[3]; // REPLACE_REALM
				String rep4 = replaces()[4]; // REPLACE_RACE
				
				if ( itemText.equals("NULL") == false ) {
					bw1.write(itemText);
				} else if ( line.indexOf( rep0 ) > -1 ) { 
					bw1.write( line.replace( rep0, spot.bud().name() ) +"\n" );
				} else if ( line.indexOf( rep1 ) > -1 ) { 
					bw1.write( line.replace( rep1 , "Template_"+template.title() ) +"\n");
				} else if ( line.indexOf( rep2 ) > -1 ) { 
					int weaponId = spot.weapons().get(0); // Ugly here but tired
					String weaponName = spot.names()[weaponId];
					bw1.write( line.replace( rep2, weaponName )+"\n");
				} else if ( line.indexOf( rep3 ) > -1 ) { 
					bw1.write( line.replace( rep3 , spot.bud().realName() ) +"\n");
				} else if ( line.indexOf( rep4 ) > -1 ) { 
					bw1.write( line.replace( rep4 , spot.bud().raceName() ) +"\n");
				} else bw1.write(line+"\n");
			}
			myReader.close();
			bw1.close();
			
		} catch (FileNotFoundException e) { e.printStackTrace(); 
		} catch (IOException o) { o.printStackTrace(); }
	}
	
	// We write all the items into XML
	public String getItemText(String line, ArrayList<Item> items) {
		for (int i = 0; i < items.size(); i++) {
			Item item = items.get(i);
			String name = spot.names()[item.spotId()];
			if (line.indexOf(name) == -1) continue;
			return this.getStatsText(item);
		}
		return "NULL";
	}
	
	public String getStatsText(Item item) {
		String text = this.getTitleCanva(item);
		for (int i = 0; i < item.stats().size(); i++) {
			Stat stat =  item.stats().get(i);
			text = text + this.getStatCanva(stat);
		}
		return text;
	}

	public String getTitleCanva(Item item) {
		String source = this.sourceNames()[item.type().id()];
		String spotName = spot.names()[item.spotId()];
		 
		return "\n<sourceType>"+source+"</sourceType>\n<allowedPosition>"+spotName+"</allowedPosition>\n"
					+"<itemName>"+item.name()+"</itemName>\n<itemNotes />\n<numFeathers>0</numFeathers>\n"
					+"<level>51</level>\n<quality>99</quality>\n<itemEnabled>true</itemEnabled>\n"
					+"<AT_itemIncluded>true</AT_itemIncluded>\n<stats>\n";
	}
	
	public String getStatCanva(Stat stat) {
		return "<StatEntry>\n<bonusType>"+stat.type().name()+"</bonusType>\n<bonusAttribute>"
					+stat.zenkName()+"</bonusAttribute>\n<bonusAmount>"+stat.value()+"</bonusAmount>\n</StatEntry>\n";
	}
}