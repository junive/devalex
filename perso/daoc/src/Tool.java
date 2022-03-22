package main;
import java.util.*;

class COMPARE {
	
	static Comparator<Stat> IMBUE_POINT = new Comparator<Stat>() {         
		public int compare(Stat stat1, Stat stat2) {
			Imbue imb1 =  (Imbue) stat1;
			Imbue imb2 =  (Imbue) stat2;
			return Float.compare(imb1.imbuePoint(), imb2.imbuePoint());         
    } };
	
	static Comparator<Item> ITEM_NAME = new Comparator<Item>() {         
		public int compare(Item item1, Item item2) {             
			return (int) (item1.name().compareToIgnoreCase(item2.name()));         
    } };
	
}


class ToolStats {
	
	static float sumUtilSingle(ArrayList<Stat> stats) { // Return the util of each stats
		//return (float) stats.stream().mapToDouble(Stat::util).sum(); // That is shit slow !!!!
		float util = 0;
		for (int i = 0; i < stats.size(); i++) {
			util = util + stats.get(i).util();
		}
		return util;
	}
	
	static int getIndexById(ArrayList<Stat> stats, int statId) {
		for (int i = 0; i < stats.size(); i++) {
			if (stats.get(i).id() == statId) return i;
		}
		return -1;
	}


	static boolean hasSameId(ArrayList<Stat> stats, int statId) {
		for (int i = 0; i < stats.size(); i++) {
			if (stats.get(i).id() == statId) return true;
		}
		return false;
	}

	static int countById(ArrayList<Stat> stats, int id) {
		int cpt = 0;
		for (int i = 0; i < stats.size(); i++) { 
			if ( stats.get(i).id() == id ) cpt++;
		}
		return cpt++;
	}
}

class ToolTab {

	static int getIdByName(String[] tab, String name) {
		for (int i = 0; i < tab.length; i++) {
			if ( name.indexOf( tab[i] ) > -1) return i;
		}
		return -1;
	}
	
	static int compareId(int[] tab, int id) {
		for (int i = 0; i < tab.length; i++) {
			if ( tab[i] == id ) return i;
		}
		return -1;
	}
	
	static int compareIdObj(Object[] tab, int id) {
		for (int i = 0; i < tab.length; i++) {
			if ((int) tab[i] == id) return i;
		}
		return -1;
	}
}