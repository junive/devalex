package main;
import java.util.*;

class StatType  { // Skill / Resists / HP ...
	private String name = "";
	private int id = -1, max = 0;
	private float single = 0;
	
	public int id() {
		return this.id;
	}
	
	public void setId(int id) {
		this.id = id;
	}
	
	public String name() {
		return this.name;
	}
	
	public void setName(String name) {
		this.name = name;
	}
	
	// Max value that a player can have EX : Resist 26/26%
	public int max() {
		return this.max;
	}
	
	public void setMax(int max) {
		this.max = max;
	}
	
	// Util for a single value EX : 2 single * 5% cold = 10 util;
	public float single() {
		return this.single;
	}
	
	public void setSingle(float single) {
		this.single = single;
	}
}

class Stat { // A simple class that create a Stat
	private StatType type;
	private int id = -1, value = 0; 
	private Stat equivalent; // use when creating imbues
	private String name = "", zenkName = "";
	private boolean united = false, selected = false;
	
	public int id() {
		return this.id;
	}
	
	public void setId(int id) {
		this.id = id;
	}
	
	 // Skill / Resists, etc...
	public StatType type() {
		return this.type;
	}
	
	public void setType(StatType type) {
		this.type = type;
	}
	
	// Dexterity / Cold ....
	public String name() {
		return this.name;
	}
	
	public void setName(String name) {
		this.name = name;
	}

	// +8 cold, +5 power, etc...
	public int value() {
		return this.value;
	} 
	
	public void setValue(int value) {
		this.value = value;
	}
	
	// The name that will be used on software Zenk Craft
	public String zenkName() {
		return this.zenkName;
	} 
	
	public void setZenkName(String name) {
		this.zenkName = name;
	}
	
	// Will separate All Magic Into Reju/Enchan or Instrument for bud
	public Stat equivalent() {
		return this.equivalent;
	} 
	
	public void setEquivalent(Stat stat) {
		this.equivalent = stat;
	}
	
	// (Reju/enchant/Smite) from Cleric will be united into one stat "All Magic"
	public boolean isUnited() {
		return this.united;
	} 
	
	public void setUnited(boolean is) {
		this.united = is;
	}
	
	public boolean isSelected() {
		return this.selected;
	} 
	
	public void setSelected(boolean is) {
		this.selected = is; 
	}

	public int maxValue() {
		return this.type.max();
	} // Shortcut
	
	public float singleUtil() {
		return this.type.single();
	} // Shortcut

	
	public float util() { // The number of util that a stat will give
		return this.singleUtil() * this.value() ; 
	}
	
	public boolean hasEquivalent(int id) { // id can be Instrument and stat.id All Magic
		return this.id() == id || (this.equivalent() != null && this.equivalent().id() == id);
	}
}

// The only diffence with our Stat is the imbue value, used to craft.
class Imbue extends Stat {
	private float imbuePoint = 0;
	
	// The imbue of our imbue, will help to fill our crafts
	public float imbuePoint() {
		return this.imbuePoint;
	}
	
	public void setImbuePoint(float point) {
		this.imbuePoint = point;
	}

}

// will help create to create an imbue depending on thoses limits
class CloneStat {
	protected float[] imbuePoints;
	protected int[] cutValues, craftValues;
	protected int typeId = -1;
	
	public int typeId() {
		return this.typeId;
	}
	
	public void setTypeId(int id) {
		this.typeId = id;
	}
	
	// The stat.values fixed for craft Ex Cold + 9 / + 11 / +13
	public int[] craftValues() {
		return this.craftValues;
	} 
	
	public void setCraftValues(int[] values) {
		this.craftValues = values;
	}
	
	// the imbue points that will help for to fill our Craft
	public float[] imbuePoints() {
		return this.imbuePoints;
	} 
	
	public void setImbuePoints(float[] points) {
		this.imbuePoints = points;
	}
	
	// EX Missing Cold 15% > 13%, then cut = 2
	public int[] cutValues() {
		return this.cutValues;
	} 
	
	public void setCutValues(int[]  cutValues) {
		this.cutValues = cutValues;
	}
	
	// return the index of our list of values
	public int getIndex(float value) {
		for (int i = 0; i <  this.craftValues().length; i++) {
			if ( this.craftValues()[i] >= value ) return i;
		}
		return -1;
	}

	// Normal number of cut EX Cold Missing = 16% then need 2 cut
	public int countCut(int value, int max) {
		int count = 0; // == Error if 0 output
		for (int i = 0; i < this.cutValues().length; i++) {	
			if ( (max - value) < this.cutValues()[i] ) count++;
		}
		return count;
	}
	
	public Imbue createImbueByIndex(Stat stat, int index) {
		Imbue imb = new Imbue();
		imb.setType(stat.type());
		imb.setUnited(stat.isUnited());

		if (index > -1) { // Ex Miss 18% cold = no index
			imb.setValue(this.craftValues()[index]);
			imb.setImbuePoint(this.imbuePoints()[index]);
		}
		
		// Take the stats for specifics user
		boolean isEquivalent = stat.equivalent() != null;
		int id = (isEquivalent) ? stat.equivalent().id() : stat.id();
		String name = (isEquivalent) ? stat.equivalent().name() : stat.name();
		String zenkName = (isEquivalent) ? stat.equivalent().zenkName() : stat.zenkName();
		
		imb.setId( id );
		imb.setName( name );
		imb.setZenkName( zenkName );
		
		return imb;
	}

	// + 1 To all magic skill
	public ArrayList<Stat> getUnitedImbues(Stat stat, int value) {  
		ArrayList<Stat> imbues = new ArrayList<Stat>();
		for (int i = 0; i < value; i++) {
			Imbue imb = this.createImbueByIndex(stat, -1);
			imb.setValue(1);
			imb.setImbuePoint(1); // force +1 all instead of 0.5 for +1 reju
			imbues.add(imb);
		}
		return imbues;
	}

	public ArrayList<Stat> getImbues(Stat stat, int value) {
		int numbCut = this.countCut(value, stat.maxValue());
		if (stat.isUnited()) {
			return this.getUnitedImbues(stat, value);
		} else if (numbCut == 1) {
			int index = this.getIndex(value);
			ArrayList<Stat> imbues = new ArrayList<Stat>();
			imbues.add(  this.createImbueByIndex(stat, index) );
			return imbues;
		} else if (numbCut > 1) {
			return this.getCutImbues(stat, value, 0); // No Rab here
		}
		return null;
	}

	// Return the list of index to create our StatImbue 
	public ArrayList<Stat> getCutImbues(Stat stat, int value, int numbRab) {
		int numbCut = this.countCut(value, stat.maxValue()) + numbRab;
		if (numbCut <= 1) return null; // If 25 / 24 slots, bad template
		
		ArrayList<Stat> imbues = new ArrayList<Stat>();
		 // CAREFULL : 7 / 2 = 3.0 but (float) 7 / 2 = 3.5...
		float valCut = (float) value / (float) numbCut;
		int index = this.getIndex(valCut);
		
		// if (stat.id() == 22 && value == 7) System.out.println(valCut);
		
		imbues.add( this.createImbueByIndex(stat, index) );
		
		int[] vals = this.craftValues();
		int size = vals.length;
		float increment = vals[size-1] - vals[size-2];
		float modus = ( vals[index] - valCut ) / increment;
		
		for (int i = 1; i <  numbCut; i++) {
			if (numbCut == 2) {
				if (modus >= 0.5) index--; // dext = 53 then val1 = 28, val2 = 25  
				// else break; // else  dext = 54 then val1 = 28, val2 = 28 
			} else if (numbCut == 3) {
				if (i == 1 && modus >= 0.66 ) index--; //  dext = 58 then val1 = 22, val2 = 19, val3 = 19
				 else if (i == 2 && modus >= 0.33 && modus < 0.66) index--; //  dext = 58 then val1 = 22, val2 = 22, val3 = 19
				// else if ( modus < 0.33 ) break; //dext = 64 then val1 = 22, val2 = 22, val3 = 22
			} else if (numbCut == 4) {
				if (i == 1 && modus >= 0.75) index--;
				 else if (i == 2 && modus >= 0.5 && modus < 0.75) index--;
				 else if (i == 3 && modus >= 0.25 &&  modus < 0.5) index--;
			}
			//System.out.println(value +"/"+name+"/"+numbCut+"/"+imb.getValues()[indexNext]);
			imbues.add( this.createImbueByIndex(stat, index) );
		}
		return imbues;
	}
 }



// "Rog", "Craft", etc...
class ItemType {
	private int id = -1;
	private String name = "";
	
	public int id() {
		return this.id;
	}
	
	public void setId(int id) {
		this.id = id;
	}
	
	public String name() {
		return this.name;
	}
	
	public void setName(String name) { 
		this.name = name;
	}
}

// List of all stats Ex rog.stats() + Function that item need
class Item {
	private ArrayList<Stat> stats;
	private ItemType type;
	private int id = -1, spotId = -1;
	private String name = "";
	private float speedUtil = 0;

	public Item() { // In case forgot to set stat
		this.setStats(new ArrayList<Stat>());
	} 
	
	public Item(ArrayList<Stat> stats) {
		this.setStats(stats);
	} // shortcut
	
	public ArrayList<Stat> stats() {
		return this.stats; 
	}
	
	public void setStats(ArrayList<Stat> stats) {
		this.stats = stats;
	}
	
	// Skill / Resists, etc...
	public ItemType type() {
		return this.type;
	} 
	
	public void setType(ItemType type) {
		this.type = type;
	}
	
	// Can be empty if we create new Craft, just help retrieving it from db
	public int id() {
		return this.id;
	} 
	
	public void setId(int id) {
		this.id = id;
	}
	
	// Also can be empty, mostly rogs need it
	public String name() {
		return this.name;
	} 
	
	public void setName(String name) {
		this.name = name;
	}	
	
	// Also can be empty : Ex ring that share same spot
	public int spotId() {
		return this.spotId;
	}
	
	public void setSpotId(int id) {
		this.spotId = id;
	}
	
	// Will be used to speed the compilation of rogs, that is it !
	public float speedUtil() {
		return this.speedUtil;
	}
	
	public void setSpeedUtil(float value) {
		this.speedUtil = value;
	}
}

class ItemRog extends Item {
	private ArrayList<String> specialInfos;
	
	// All Focus // All Magics to show on market
	public ArrayList<String> specialInfos() {
		return this.specialInfos; 
	}
	
	public void setSepcialInfos( ArrayList<String> infos ) { 
		this.specialInfos = infos;
	}
	
}