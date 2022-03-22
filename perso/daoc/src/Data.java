package main;
import java.util.*;
import java.io.*;

abstract class Data {
	protected ShortTable tab; // Shortcut Ex : user.tabSpot == tab.spot()
	protected User user;
	protected CentralData data;
	
	public void setUser(User user) {
		this.user = user;
		this.tab = new ShortTable(user);
	}
	
	public void setCentralData(CentralData data) {
		this.data = data;
	}
}

class CentralData {
	private User user;
	private DataStat stat = new DataStat();
	private DataBud bud = new DataBud();
	private DataSpot spot = new DataSpot();
	private DataItem item = new DataItem();
	private DataFile file = new DataFile();
	private DataMarket market = new DataMarket();
	private DataTemplate template = new DataTemplate();
	private DataCompile compile = new DataCompile();
	private DataZenk zenk = new DataZenk();	
	
	public DataStat stat() { return this.stat ;}
	public DataBud bud() { return this.bud ;}
	public DataSpot spot() { return this.spot ;}
	public DataItem item() { return this.item ;}
	public DataFile file() { return this.file ;}
	public DataMarket market() { return this.market ;}
	public DataTemplate template() { return this.template ;}
	public DataCompile compile() { return this.compile ;}
	public DataZenk zenk() { return this.zenk ;}
	
	public User user() { return this.user(); }
	public void setUser(User user) {
		this.user = user;
		// Set the user's table to each datas
		this.stat.setUser(this.user);
		this.bud.setUser(this.user);
		this.spot.setUser(this.user);
		this.item.setUser(this.user);
		this.file.setUser(this.user);
		this.market.setUser(this.user);
		this.template.setUser(this.user);
		this.compile.setUser(this.user);
		this.zenk.setUser(this.user);
		// Link all data together Ex DataItem can use a DataStat
		this.stat.setCentralData(this);
		this.bud.setCentralData(this);
		this.spot.setCentralData(this);
		this.item.setCentralData(this);
		this.file.setCentralData(this);
		this.market.setCentralData(this);
		this.template.setCentralData(this);
		this.compile.setCentralData(this);
		this.zenk.setCentralData(this);
	}
}

class DataStat extends Data {

	public Stat getStat(int statId, int value) {
		Stat model = new Stat();
		model.setId(statId);
		model.setValue(value);
		TableStat tabStat = tab.stat();
		for (int i = 0; i < tabStat.def.length; i++) {
			if (statId != i) continue;
			model.setName( (String) tabStat.def[i][1][1]);
			model.setZenkName( (String) tabStat.def[i][1][2]);
			model.setType( this.getType( (int) tabStat.def[i][1][0]));
		}
		return model;
	}

	public Stat getStatByName(String name, int value) {
		TableStat tabStat = tab.stat();
		for (int i = 0; i < tabStat.def.length; i++) {
			String statName = (String) tabStat.def[i][1][1];
			if (name.indexOf( statName ) == -1 ) continue;
			return this.getStat(i, value);
		}
		return null;
	}

	public ArrayList<Stat> getStats(int[][] values) {
		ArrayList<Stat> stats = new ArrayList<Stat>();
		for (int i = 0; i < values[0].length; i++) {
			stats.add( this.getStat( (int) values[0][i], (int) values[1][i] ) );
		}
		return stats;
	}
	
	public StatType getType(int typeId) {
		StatType model = new StatType();
		model.setId(typeId);
		model.setMax(tab.statType().maxs[typeId]);
		model.setSingle(tab.statType().singles[typeId]);
		model.setName(tab.statType().names[typeId]);
		return model;
	}
	
	
	public void setStatBudSelect(int statId, int budId, boolean select) {
		int index  = ToolTab.compareIdObj(tab.stat().def[statId][2], budId);
		tab.stat().def[statId][3][index] = select;
	}
	
}
	
class DataSpot extends Data {
	
	// Blank spot with the bud selected
	public Spot getSpot(int budId) {
		Spot model = new Spot(this.getSpotNames(), tab.spot().clearId);
		model.setWeapons(this.getWeapons(budId));
		// Set the utilLess, max imbue per spot, etc..
		model.setCraft(this.getCraftType(budId));
		model.setRog(this.getRogType(budId));
		model.setSidi(this.getSidiType(budId));
		return model;
	}
	
	// Refresh the spots by default bud
	public Spot getSpotDefault(int budId) {
		Spot model = this.getSpot(budId);
		TableSpot tabSpot = tab.spot();
		// Ex : 7 craft for cleric, 5 craft for infil, etc...
		for (int i = 0; i < tabSpot.budDef.length; i++) {
			if (ToolTab.compareId( tabSpot.budDef[i][1], budId) == -1) continue;
			for (int j = 0; j < tabSpot.budDef[i][2].length; j++) {
				model.set( tabSpot.budDef[i][2][j], tabSpot.budDef[i][0][0]);
			}
		}
		return model;
	}
	
	public String[] getSpotNames() {
		return this.tab.spot().names;
	}

	public String[] getTypeNames() {
		return this.tab.spot().typeNames;
	}
	
	// Only for view : allow rog/craft for Hand but only Rog for Ring
	public int[] getTypesAllowed(int typeId) {
		return this.tab.spot().allowedTypes[typeId];
	}
	
	public ArrayList<Integer> getWeapons(int budId) {
		TableSpot tabSpot = tab.spot();
		ArrayList<Integer> weapons = new ArrayList<Integer>();
		for (int i = 0; i < tabSpot.weapons.length; i++) {
			if (ToolTab.compareId(tabSpot.weapons[i][0], budId) == -1) continue;
			for (int j = 0; j < tabSpot.weapons[i][1].length; j++) {
				weapons.add(tabSpot.weapons[i][1][j]);
			}
		}
		return weapons;
	}
	
	/*
	public int countSidiSpot() {
		for (int i = 0; i < this.getSpotIds().length; i++) {
			for (int i = 0; i < tabBasic.sidis; i++) {
				int item = tabBasic.sidis[i];
				if (Tool.compareId(budId, item[0]) == -1) continue;
				 else if 
			}
		}
	}
	*/

	public SpotCraft getCraftType(int budId) {
		SpotCraft model = new SpotCraft();
		model.setType(data.item().getType(tab.craft().typeId));
		model.setUtilLess((float)tab.bud().def[budId][3]);
		model.setImbue100(tab.craft().imbue100);
		model.setImbue99(tab.craft().imbue99);
		model.setNumbSlot(tab.craft().numbSlot);
		model.setUtilMax(tab.craft().utilMax);
		return model;
	}
	
	public SpotRog getRogType(int budId) {
		SpotRog model = new SpotRog();
		model.setType(data.item().getType(tab.rog().typeId));
		model.setUtilLess((float)tab.bud().def[budId][2]);
		model.setUtilStaff(tab.rog().utilStaff);
		return model;
	}
	
	public SpotSidi getSidiType(int budId) {
		SpotSidi model = new SpotSidi();
		model.setType(data.item().getType(tab.sidi().typeId));
		return model;
	}
}


class DataItem extends Data {
	
	public ItemType getType(int typeId) {
		ItemType model = new ItemType();
		model.setId(typeId);
		model.setName(tab.spot().typeNames[typeId]);
		return model;
	}
	
	public void setStats(Item item, int[][] values) {
		 item.setStats( data.stat().getStats(values) );
	}
	
	public ItemRog createRog(int itemId, String name, int spotId, 
							ArrayList<Stat> stats, ArrayList<String> infos) {
		ItemRog model = new ItemRog();
		model.setId(itemId);
		model.setType( this.getType(tab.rog().typeId) );
		model.setName( name );
		model.setSpotId( spotId );
		model.setSepcialInfos( infos );
		model.setStats( stats );
		return model;
	}
	
	// Return a list of Rog created by its name and stats, with diffenriate spotId
	public ArrayList<Item> createRogs(String name, ArrayList<Stat> stats, ArrayList<String> infos) {
		int itemId = -1;
		for (int i = 0; i < tab.rog().names.length; i++) {
			if (ToolTab.getIdByName(tab.rog().names[i], name) == -1) continue;
			itemId = i;
			break;
		}
		if ( itemId == -1 ) return null;
		
		// Ex : ring with spotId 2 and ring with spotId 3
		ArrayList<Item> rogs = new ArrayList<Item>();
		for (int i = 0; i < tab.rog().spotsDef[itemId].length; i++) {
			int spotId = tab.rog().spotsDef[itemId][i];
			rogs.add( this.createRog(itemId, name, spotId, stats, infos) );
		}
		return rogs;
	}
	
	public Item getSidi(int itemId, int budId) {
		Item model = new Item();
		Object[][] items = tab.sidi().items[itemId];
		model.setId(itemId);
		model.setType( this.getType(tab.sidi().typeId) );
		model.setName( (String) items[2][0] );
		model.setSpotId( (int) items[1][0] );
		ArrayList<Stat> stats = new ArrayList<Stat>();
		for (int i = 0; i < items[3].length; i++) {
			int statId = (int) items[3][i];
			int value = (int) items[4][i];
			stats.add( data.stat().getStat( statId, value ) );
		}
		model.setStats(stats);
		return model;
	}
	
	// Return All Items related to the bud, no matter the spot
	public ArrayList<Item> getSidis(int budId) {
		return this.getSidis(budId, -1);
	}
	
	public ArrayList<Item> getSidis(int budId, int spotId) {
		ArrayList<Item> sidis = new ArrayList<Item>();
		for (int i = 0; i < tab.sidi().items.length ; i++) {
			Object[][] item = tab.sidi().items[i];
			if (ToolTab.compareIdObj(item[0], budId) == -1) continue;
			 else if (spotId != (int) item[1][0] && spotId != -1) continue;
			sidis.add( this.getSidi(i, budId) );	
		}
		return sidis;
	}
	
	// Ugly here, but nevermind
	public int getSidiChestId(int budId) {
		return this.getSidis(budId, 11).get(0).id();
	}
	
	// Check if a stat can be united to +1 all magic to all stats
	public boolean isUnitedStat(int statId, int budId) {
		TableStat tabStat = tab.stat();
		for (int i = 0; i < tabStat.united.length; i++) {
			if ( (int) tabStat.united[i][0][0] != statId) continue;
			int index = ToolTab.compareIdObj(tabStat.united[i][1], budId);
			return ( index > -1 && (boolean) tabStat.united[i][2][index] ); // Is selected
		}
		return false;
	}

	// For the view, to limit the stats that can be united
	public boolean isAllOne(int statId) {
		return ToolTab.compareId(tab.stat().allone, statId) > -1 ;
	}
	
	// Do not add the stat that have children
	public boolean hasChild(int statId, int budId) {
		int index = ToolTab.compareId(tab.stat().hasChild, statId);
		return index > -1 && ! this.isUnitedStat(statId, budId);
	}
	
	// Return all stats related to the bud, for the view
	public ArrayList<Stat> getViewStats(int budId) {
		ArrayList<Stat> stats = new ArrayList<Stat>();
		Object[][][] statDef = tab.stat().def;
		for (int i = 0; i < statDef.length; i++) {
			int index = ToolTab.compareIdObj(statDef[i][2], budId);
			if (index == -1) continue; // Check if stat is linked to bud
			Stat stat = this.createBlankStat(i, budId);
			stat.setSelected((boolean) statDef[i][3][index]);
			stats.add(stat);
		}
		return stats;
	}
	
	public boolean isSelectedStat(Object[][] def, int budId) {
		int index = ToolTab.compareIdObj(def[2], budId); // Check if stat is linked to bud
		return (index != -1) && ( (boolean) def[3][index] ); // Check if stat is selected
	}
	
	public Stat createBlankStat(int statId, int budId) {
		Stat model = data.stat().getStat(statId, 0);
		model.setUnited( this.isUnitedStat(statId, budId) );
		return model;
	}
	
	// It would be pointless to setSelected here because they are all true !
	public ArrayList<Stat> getBlankStats(int budId) {
		ArrayList<Stat> stats = new ArrayList<Stat>();
		Object[][][] def = tab.stat().def;

		// Add All master stats first (All Magic, etc...)
		for (int i = 0; i < def.length; i++) {
			if ( !this.isSelectedStat(def[i], budId) ) continue;
			int masterId = i;
			for (int j = 0; !isUnitedStat(masterId, budId) && j < def.length; j++) {
				if ( def[j][0].length == 0 ) continue; // Is a master Id
				 else if ( !this.isSelectedStat(def[j], budId) ) continue; // not bud.id or selected
				 else if ( masterId != (int) def[j][0][0] ) continue;  // do not match the masterId
				Stat stat = this.createBlankStat(masterId, budId);	
				stat.setEquivalent( data.stat().getStat( j, 0 ) );
				//System.out.println(stat.name());
				stats.add( stat );
			}
			
			// In case No child is selected, doesn't add all Magic / Acuity, except if united
			if (def[i][0].length > 0 || this.hasChild(masterId, budId)) continue; 
			//System.out.println(masterId);
			stats.add( this.createBlankStat( masterId, budId ) );
		}
		
		return stats;
	}
	
	public Item getEmptyCustom() {
		Item model = new Item();
		model.setType( this.getType(tab.custom().typeId) );
		model.setId(-1);
		return model;
	}
	
	public Item getCustom(int itemId) {
		Item model = this.getEmptyCustom();
		model.setId(itemId);
		model.setName( (String) tab.custom().items[itemId][0][0] );
		Object[][] items = tab.custom().items[itemId];
		ArrayList<Stat> stats = new ArrayList<Stat>();
		for (int i = 0; i < items[1].length; i++) {
			int statId = (int) items[1][i];
			int value = (int) items[2][i];
			stats.add( data.stat().getStat(statId, value) );
		}
		model.setStats(stats);
		return model;
	}

	public void setUnitedBudStat(int statId, int budId, boolean select) {
		TableStat tabStat = tab.stat();

		for (int i = 0; i < tabStat.united.length; i++) {
			if ( (int) tabStat.united[i][0][0] != statId) continue;
			int index = ToolTab.compareIdObj(tabStat.united[i][1], budId);
			tabStat.united[i][2][index] = select;
		}

	}


}


class DataBud extends Data {
	
	public Bud getBud(int budId) {
		TableBud bud = tab.bud();
		int realmId = (int) bud.def[budId][0];
		Bud model = new Bud();
		model.setId(budId);
		model.setRealName(bud.realm[realmId][0]);
		model.setRaceName(bud.realm[realmId][1]);
		model.setName( (String) bud.def[budId][1] );
		model.setBlankStats(data.item().getBlankStats(budId));
		model.setBasicStats(data.item().getBlankStats(budId));
		model.setCustomItem(data.item().getEmptyCustom()); // Custom with no stats
		return model;
	}
}


class DataMarket extends Data {
	
	public Market getMarket() {
		Market model = new Market();
		model.setWeaponUtil(tab.market().weaponUtil);
		model.setGarbages(user.garbages);
		return model;	
	}
	
}

class DataTemplate extends Data {
	
	public Template getTemplate() {
		Template model = new Template();
		return model;	
	}
}


class DataCompile extends Data {

	public Compile getCompile() {
		Compile model = new Compile();
		this.setLimits(model, tab.compile().limits);
		model.setTemplates(user.templates);
		return model;	
	}
	
	public void setLimits(Compile model, int[] values) {
		model.setMaxResult(values[0]);
		model.setMaxCraft100(values[1]);
		model.setMaxWasted(values[2]);
	}
	
	public CloneStat getCloneStat(int typeId) {
		CloneStat model = new CloneStat(); 
		model.setTypeId(typeId);
		model.setCraftValues(tab.statType().values[typeId]);
		model.setImbuePoints(tab.statType().imbues[typeId]);
		model.setCutValues(tab.statType().cuts[typeId]);
		return model;
	}
	
	public CloneStat[] getClonesStat() {
		int size = tab.statType().names.length;
		CloneStat[] models =  new CloneStat[size]; 
		for (int i = 0; i < size; i++) {
			models[i] = this.getCloneStat(i);
		}
		return models;
	}
	
}


class DataZenk extends Data {
	
	public Zenk getZenk(int budId) {
		Zenk model = new Zenk();
		//model.setConvertNames(this.getConvertNames(budId));
		model.setSourceNames(tab.xml().sourceNames);
		model.setReplaces(tab.xml().zenkReplaces);
		model.setTemplateFolder(tab.xml().zenkFolder);
		model.setZenkFile(tab.xml().zenkFile);
		return model;		
	}

	
}


class DataFile extends Data {

	public ChatLogFile getChatLog() {
		ChatLogFile model = new ChatLogFile();
		model.setChatLogUrl(tab.file().chatLogUrl);
		model.setFindStats(tab.file().findStats);
		model.setFindRogs(tab.file().findRogs);
		model.setFindInfos(tab.file().findInfos);
		return model;
	}
	
	private static boolean isSame(Item item1, Item item2) {
		return ( item1.name().equals( item2.name() )  // Ring != Bracer
				&& item1.stats().size() == item2.stats().size() // Ring1 have 4 != Ring2 have 6
				&& ToolStats.sumUtilSingle( item1.stats() ) == ToolStats.sumUtilSingle( item2.stats() )  // Ring1 util 55 !=  Ring2 util 65
				&& item1.stats().get(0).name().equals( item2.stats().get(0).name() )   // First Dexterity != Strength
				&& item1.stats().get(0).value() == item2.stats().get(0).value() ); // First Dexterity +12 != Dexterity +14
	}
	
	// Make sure we do not add the same Rog twice from chat.log
	private static boolean isSameIn(ArrayList<Item> items1, ItemRog item2) {
		for (int i = 0; i < items1.size(); i++) {
			if ( isSame( items1.get(i), item2 ) ) return true;
		}
		return false; // If items1 empty, do have nothing to compare
	}
	
	public ArrayList<ArrayList<Item>> getGarbage(ChatLogFile log) {
		ArrayList<ArrayList<Item>> garbage = new ArrayList<ArrayList<Item>>();
		
		// Init our garbage with the spot ids
		String[] spotNames = data.spot().getSpotNames();
		for (int i = 0; i < spotNames.length; i++) garbage.add(new ArrayList<Item>());
		
		try {
			File myObj = new File(log.chatLogUrl());
			Scanner myReader = new Scanner(myObj);
			
			while (myReader.hasNextLine()) {
				String line = myReader.nextLine();
				
				if (line.indexOf( log.findRogs()[0] ) == -1) continue;  // Cut " <Begin Info:"
				String[] beginInfo = line.split( log.findRogs()[0] ); // Cut " <Begin Info:"
				String title = beginInfo[1].split( log.findRogs()[1] )[0]; // Cut  ">"
				
				ArrayList<Stat> stats = new ArrayList<Stat>();
				ArrayList<String> infos = new ArrayList<String>();
				while (myReader.hasNextLine()) {
					String checkLine = myReader.nextLine();
					if (checkLine.indexOf( log.findRogs()[2] ) == -1 ) { // Cut " <End Info>"
						Stat stat = this.getStatByLine( checkLine, log );
						String info = this.getInfoByLine( checkLine, log );
						if (stat != null) stats.add( stat );
						if (info != null) infos.add( info );
					} else { // Create our rog when recup stats is done
						if (stats.size() == 0) break; // info is not mandatory compare to stats
						ArrayList<Item> rogs = data.item().createRogs(title, stats, infos);
						// Will add the rogs found to garbage by spot id 
						for (int i = 0; rogs != null && i < rogs.size(); i++) {
							ItemRog rog =  (ItemRog) rogs.get(i);
							ArrayList<Item> garbs = garbage.get( rog.spotId() );
							if ( !isSameIn(garbs, rog) ) garbs.add(rog);
						}
						break;
					}
				}
			}
			myReader.close();
			
		} catch (FileNotFoundException e) {
			System.out.println("An error reading chat.log occurred.");
			e.printStackTrace();
		}
		
		return garbage;	
	}
	
	public Stat getStatByLine(String line, ChatLogFile log) {
		String[] textStat = line.split(  log.findStats()[0] ); // Cut "|"
		String[] textTotals = line.split( log.findStats()[1] ); // Cut "Total Utility"
		String[] textSingles = line.split( log.findStats()[2]); // Cut "Single Skill Utility:"
		
		if (textStat.length > 1) {
			String[] statLine = textStat[1].split( log.findStats()[3] ); // Cut ": +"
			String statName = statLine[0];
			String statValue = "0";
			if (statLine[1].indexOf( log.findStats()[4] ) > -1) { // Cut "%"
				statValue = statLine[1].split( log.findStats()[5] )[0]; // Cut " %" Tricky here with space...
			} else { // Points Pts
				statValue = statLine[1].split( log.findStats()[6] )[0]; // Cut " pts"
			}
			
			return data.stat().getStatByName(statName, Integer.parseInt(statValue));
		} else if (textSingles.length > 1) {
			//rog.util = Float.parseFloat(textSingles[1]);
		} else if (textTotals.length > 1) {
			//rog.util = Float.parseFloat(textTotals[1]);
		}
		
		return null;
	}
	
	// All Focus+1 Spec, All Magic, etc..
	public String getInfoByLine(String line, ChatLogFile log) {
		for (int i = 0; i < log.findInfos().length; i++) {
			if (line.indexOf(log.findInfos()[i][0]) == -1) continue;
			String[] txts = line.split( log.findInfos()[i][1] );
			return txts[1];
		}
		return null;
	}
}