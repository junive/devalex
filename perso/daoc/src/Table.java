package main;
class TableBud {
	public String[][] realm = { {"Albion", "Briton"}, {"Midgard", "Dwarf"}, {"Hibernia", "Celt"} };
	
	public Object[][] def = { // {Realm.id, Name, ROG UtilLess, CRAFT UtilLess }
		/*0*/  {0, "Infiltrator", 9f, 0f }, /*1*/  {0, "Cleric", 11f, 2.5f }, 
		/*2*/  {0, "Minstrel", 5f, 4.5f},   /*3*/  {0, "Cabalist", 5f, 2f},
		/*4*/  {0, "Necromancer", 5f, 2f},  /*5*/  {0, "Mercenary", 5f, 4.5f}, 
		/*6*/  {0, "Reaver", 8f, 2.8f},     /*7*/  {0, "Paladin", 9f, 0f},
		/*8*/  {0, "Friar", 5f, 0f},        /*9*/  {0, "Wizard", 5f, 2f}, 
		/*10*/ {0, "Theurgist", 5f, 2f},    /*11*/ {0, "Sorcerer", 5f, 2f}, 
		/*12*/ {0, "Scout", 8f, 0f} ,       /*13*/ {0, "Armsman", 5f, 3f},
		/*14*/ {1, "Berserker", 5f, 4.5f},  /*15*/ {1, "Bonedancer", 5f, 2f}, 
		/*16*/ {1, "Healer", 10f, 2.5f},    /*17*/ {1, "Hunter", 7f, 1f},
		/*18*/ {1, "Runemaster", 5f, 2f},   /*19*/ {1, "Savage", 5f, 3f}, 
		/*20*/ {1, "Shadowblade", 9f, 0f},  /*21*/ {1, "Shaman", 10f, 2.5f},
		/*22*/ {1, "Skald", 5f, 4.5f},      /*23*/ {1, "Spiritmaster", 5f, 2f}, 
		/*24*/ {1, "Thane", 5f, 4.5f},      /*25*/ {1, "Warrior", 5f, 2f}
	};
}

class TableCompile { 
	public int[] limits = {/*maxResult*/ 500, /*maxCraft100*/ 20, /* maxWaste*/  30}; 
}

class TableMarket {
	public float weaponUtil = 35;
}

class TableStatType {
	public String[] names = { /*0*/ "Resist", /*1*/ "H.P.", /*2*/ "Power", /*3*/ "Stat", /*4*/ "Skill" };
	public float[] singles = {2, 0.25f, 1, 0.667f, 5};
	public int[] maxs = {26, 200, 26, 75, 11 };
	
	public int[][] cuts = {/*0*/{13, 26}, /*1*/{48, 124, 200}, /*2*/ {13, 26}, /*3*/{19, 47, 75},  /*4*/ {5, 11} };
	public int[][] values = {/*0*/  {1, 2, 3, 5, 7, 9, 11, 13}, // craft value
							 /*1*/ {4, 12, 20, 28, 36, 44, 52, 60, 68, 76}, 
							 /*2*/ {1, 2, 3, 5, 7, 9, 11, 13},
							 /*3*/ {1, 4, 7, 10, 13, 16, 19, 22, 25, 28},
							 /*4*/ {1, 2, 3, 4, 5, 6} };
	public float[][] imbues = {/*0*/ {0.5f, 1, 2, 4, 6, 8, 10, 12} ,  // imbues point
							 /*1*/  {0.5f, 1.5f, 2.5f, 3.5f, 4.5f, 5.5f, 6.5f, 7.5f, 8.5f, 9.5f}, 
							 /*2*/  {0.5f, 1, 2, 4, 6, 8, 10, 12},
							 /*3*/  {0.5f, 1.5f, 2.5f, 3.5f, 4.5f, 5.5f, 6.5f, 7.5f, 8.5f, 9.5f},
							 /*4*/	{0.5f, 2.5f, 5, 7.5f, 10, 12.5f} } ;
}

class TableStat { // Bud.id Shortcut here
	private Object[] all = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
							21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38}; 
	private Object[] power = {1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 15, 16, 18, 21, 22, 23, 24};
	private Object[] magic = {1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 15, 16, 17, 18, 21, 22, 23, 24};
	private Object[] melee = {0, 2, 5, 6, 7, 8, 12, 13, 14, 17, 19, 20, 22, 24, 25};
	private Object[] dual = { 0, 5, 14, 20 };
	private Object[] archy = { 12, 17, 25 };
	private Object[] stealth = { 0, 2, 12, 17, 20 };
	private Object[] parry = { 5, 6, 7, 8, 13, 14, 19, 22, 24, 25 };
	private Object[] shield = { 5, 6, 7, 12, 13, 24, 25 };
	
	private Object[] select() { return new Object[] {true, true, true, true, true, true, true, true, true, true, true, true, true, true, true,
							true, true, true, true, true, true, true, true, true, true, true, true, true, true, true,
							true, true, true, true, true, true, true, true, true}; }
	private Object[] unselect() { return new Object[] {false, false, false , false, false, false, false , false, false, false, false , false,
							false, false, false , false, false, false, false , false, false, false, false , false, false ,
							false, false, false , false, false, false, false , false, false, false, false , false, false, false }; }
	
	public Object[][][] def = {  // {/*id*/ {typeId , chatLogName, zenkName, equivalent}; {budId}, {selected} 
	   
			// All rogs Stats here
			/*0*/  { {}, {0, "Crush", "Crush" }, all, select() },
			/*1*/  { {}, {0, "Thrust", "Thrust" }, all, select() },
			/*2*/  { {}, {0, "Slash", "Slash" }, all, select() },
			/*3*/  { {}, {0, "Heat", "Heat" }, all, select() },
			/*4*/  { {}, {0, "Cold", "Cold" }, all, select() },
			/*5*/  { {}, {0, "Matter","Matter" }, all, select() },
			/*6*/  { {}, {0, "Body", "Body" }, all, select() },
			/*7*/  { {}, {0, "Spirit", "Spirit" }, all, select() },
			/*8*/  { {}, {0, "Energy", "Energy" }, all, select() },
			/*9*/  { {}, {1, "Hits", "Hit Points" }, all, select() },
			/*10*/ { {}, {2, "Power", "Power" }, power, select() },
			/*11*/ { {}, {3, "Strength", "Strength" }, all, select() },
			/*12*/ { {}, {3, "Constitution", "Constitution" }, all, select() },
			/*13*/ { {}, {3, "Dexterity", "Dexterity" }, all, select() },
			/*14*/ { {}, {3, "Quickness", "Quickness" }, all, select() },
			/*15*/ { {}, {3, "Acuity", "Acuity" }, power, select() },
			/*16*/ { {}, {4, "ALL magic skills", "All Magic Skills" }, magic, select() },
			/*17*/ { {}, {4, "ALL melee weapon skills", "All Melee Skills" }, melee, select() },
			/*18*/ { {}, {4, "ALL dual wielding skills", "All Dual Wield Skills" }, dual, select() },
			/*19*/ { {}, {4, "ALL archery skills", "All Archery Skills" }, archy, select() },
			/*20*/ { {}, {4, "Stealth", "Stealth" }, stealth, select() },
			/*21*/ { {}, {4, "Envenom", "Envenom" }, { 0, 20 }, select() },
			/*22*/ { {}, {4, "Critical Strike", "Critical Strike" }, { 0, 20 }, select() },
			/*23*/ { {}, {4, "Parry", "Parry" }, parry, select() },
			/*24*/ { {}, {4, "Shields", "Shield" }, shield, select() },
			/*25*/ { {}, {4, "None", "None"}, { 1000 },  { true }  }, 
			/*26*/ { {}, {4, "None", "None" }, { 1000 }, { true } },
			/*27*/ { {}, {4, "Focus1", "Rejuvenation" }, { 3 }, { false } }, // Weapon less Caster
			/*28*/ { {}, {4, "Focus2", "Rejuvenation" }, { 3 }, { false } }, // Weapon less Caster
			/*29*/ { {}, {4, "Focus3", "Rejuvenation" }, { 3 }, { false } }, // Weapon less Caster
			
			// Acuity
			/*30*/ { {15}, {3, "Piety", "Piety"}, { 1, 6, 7, 8, 15, 16, 18, 21, 23, 24 }, select() },
			/*31*/ { {15}, {3, "Intelligence", "Intelligence"}, { 3, 4, 9, 10, 11 }, select() },
			/*32*/ { {15}, {3, "Charisma", "Charisma"}, { 2 }, select() },
			/*33*/ { {15}, {3, "Empathy", "Empathy"}, { 1000 }, { true } },
			/*34*/ { {15}, {3, "None", "None"}, { 1000 }, { false } },
			/*35*/ { {15}, {3, "None", "None"}, { 1000 }, { false } },
			
			// ALL MAGIC SKILLS
			
			// Albion
			/*36*/ { {16}, {4, "Instruments", "Instruments"}, { 2 },  { true } }, // Mins
			/*37*/ { {16}, {4, "Soulrending", "Soulrending" }, { 6 },  { true } }, // Reaver
			/*38*/ { {16}, {4, "Chants", "Chants" }, { 7 },  { true } }, // Pala
			/*39*/ { {16}, {4, "Rejuvenation", "Rejuvenation" }, { 1, 8 }, { false, true } }, // Cleric / Friar
			/*40*/ { {16}, {4, "Enhancement", "Enhancement" }, { 1, 8 }, { false, true } }, // Cleric / Friar
			/*41*/ { {16}, {4, "Smite", "Smite" }, { 1 }, { false } }, // Cleric 
			/*42*/ { {16}, {4, "Body Magic", "Body Magic" }, { 3, 11 }, { true, true } }, // Caba / Sorc
			/*43*/ { {16}, {4, "Matter Magic", "Matter Magic" }, { 3, 11 }, { true, true } }, // Caba // Sorc
			/*44*/ { {16}, {4, "Spirit Magic", "Spirit Magic" }, { 3 }, { true } }, // Caba
			/*45*/ { {16}, {4, "Mind Magic", "Mind Magic" }, { 11 }, { true } }, // Sorc
			/*46*/ { {16}, {4, "Deathsight", "Deathsight" }, { 4 }, { true } }, // Necro
			/*47*/ { {16}, {4, "Painworking", "Painworking" }, { 4 }, { true } }, // Necro
			/*48*/ { {16}, {4, "Death Servant", "Death Servant" }, { 4 }, { true } }, // Necro
			/*49*/ { {16}, {4, "Earth Magic", "Earth Magic" }, { 9, 10 }, { true, true } }, // Wiz / Theu
			/*50*/ { {16}, {4, "Cold Magic", "Cold Magic" }, { 9, 10 }, { true, true } }, // Wiz / Theu
			/*51*/ { {16}, {4, "Fire Magic", "Fire Magic" }, { 9 }, { true } }, // Wiz 
			/*52*/ { {16}, {4, "Wind Magic", "Wind Magic" }, { 10 }, { true } }, // Theu
			/*53*/ { {16}, {4, "None", "None" }, { 1000 }, { false } },
			/*54*/ { {16}, {4, "None", "None" }, { 1000 }, { false } },
			//Midgard
			/**/ { {16}, {4, "Drakness", "Drakness" }, { 15, 18, 23 }, { false, false, false } }, // Bone / Rune / Spirit
			/**/ { {16}, {4, "Suppression", "Suppression" }, { 15, 18, 23 }, { false, false, false } }, // Bone / Rune / Spirit
			/**/ { {16}, {4, "Bone Amy", "Bone Amy" }, { 15 }, { false} }, // Bone
			/**/ { {16}, {4, "Mending", "Mending" }, { 16, 21 }, { false, false } }, // Healer / Shaman
			/**/ { {16}, {4, "Augmentation", "Augmentation" }, { 16, 21 }, { false, false } }, // Healer / Shaman
			/**/ { {16}, {4, "Pacification", "Pacification" }, { 16 }, { false } }, // Healer
			/**/ { {16}, {4, "Beatscraft", "Beatscraft" }, { 17 }, { true } }, // Hunter
			/**/ { {16}, {4, "Runecarving", "Runecarving" }, { 18 }, { false } }, // Rune
			/**/ { {16}, {4, "Subterranean", "Subterranean" }, { 21 }, { false } }, // Shaman
			/**/ { {16}, {4, "Battlesongs", "Battlesongs" }, { 22 }, { true } }, // Skald
			/**/ { {16}, {4, "Summoning", "Summoning" }, { 23 }, { false } }, // Spirit
			/**/ { {16}, {4, "Stormcalling", "Stormcalling" }, { 24 }, { true } }, // Thane
			/**/ { {16}, {4, "None", "None" }, { 1000 }, { false } },
			/**/ { {16}, {4, "None", "None" }, { 1000 }, { false } },
			/**/ { {16}, {4, "None", "None" }, { 1000 }, { false } },
			
			// ALL MELEE SKILLS
			
			// Albion
			{ {17}, {4, "Thrust", "Thrust"}, { 0, 2, 5, 6, 7, 12, 13 },  select()  },
			{ {17}, {4, "Slash", "Slash"}, { 0, 2, 5, 6, 7, 12, 13 }, unselect() },
			{ {17}, {4, "Crush", "Crush"}, { 5, 6, 7, 13 }, { false, false, false, false } }, // Merc // Reaver / Pala / Arms
			{ {17}, {4, "Flexible", "Flexible"}, { 6 }, { false } }, // Reaver
			{ {17}, {4, "Polearms", "Polearms"}, { 13 }, { true } }, // Arms
			{ {17}, {4, "Two Handed", "Two Handed"}, { 7, 13 },  { true, false }  }, // Pala / Arms
			{ {17}, {4, "Staff", "Staff"}, { 8 }, { true } }, // Friar
			
			// Midgard
			{ {17}, {4, "Sword", "Sword"}, { 14, 17, 19, 20, 22, 24, 25 },  select()  },
			{ {17}, {4, "Axe", "Axe"}, { 14, 19, 20, 22, 24, 25 },  unselect()  },
			{ {17}, {4, "Hammer", "Hammer"}, { 14, 19, 22, 24, 25 },   { false, false, false, false, false}  },
			{ {17}, {4, "Spear", "Spear"}, {  17 },  { false } },
			{ {17}, {4, "Hand To Hand", "Hand To Hand" }, {19}, { false } }, // Savage
			
			// All Dual Wield
			{ {18}, {4, "Dual Wield", "Dual Wield"}, { 0, 5 },  { true, true } }, // Infi / Reaver
			{ {18}, {4, "Left Axe", "Left Axe"}, { 14, 20 },  { true, true } }, // Berserk / Shadow
			
			// All Archery Skills
			{ {19}, {4, "Longbow", "Longbow"}, { 12 }, { true } }, // Scout
			{ {19}, {4, "Crossbow", "Crossbow"}, { 13 }, { false }  }, // Arms
			{ {19}, {4, "Composite Bow", "Composite Bow"}, { 17 }, { true }  }, // Hunter
			{ {19}, {4, "Thrown Weapons", "Thrown Weapons"}, { 25 }, { false }  } // Warrior
	};
	
	
	
	public Object[][][] united = {  // bud.id, stat.id
		{  {16}, {1, 3, 4, 8, 9, 10, 11, 15, 16, 18, 21, 23}, select() }, // cut All Magic into multiple +1 in imbues
		{  {17}, {0, 6, 7, 13}, select() }
	};
		
	public int[] allone = { 16, 17, 18, 19 }; // stat.id
	public int[] hasChild = { 15, 16, 17, 18, 19 }; // stat.id
}


class TableBlank {
	public int typeId = 5;
}

class TableRog {
	public int typeId = 1;
	public float utilStaff = 35; 

	public String[][] names = { {"Bracer"}, {"Ring"}, {"Cloak", "Mantle"}, {"Belt"}, {"Gem"}, {"Neck"}, 
								 {"Staff", "staff"}, {"Right Hand", "Basalt"}, {"Left Hand"}, {"Torso"},
								 {"Feet"}, {"Hands"}, {"Arms"}, {"Legs"}, {"Helmet"} };	
	
	// rog.id { spot.id1, spot.id2 }
	public int[][] spotsDef = { {0, 1}, {2, 3}, {4}, {5} , {6} , {7} , {8} , {9} , 
							{10} , {11} , {12} , {13} , {14} , {15} , {16} };
	
}

class TableCraft {
	public int typeId = 2;
	public float imbue100 = 37.5f, imbue99 = 33.5f, utilMax = 63.5f; // Do not touch that
	public int numbSlot = 4;
}


class TableSidi {	
	public int typeId = 3;
	
	public Object[][][] items = { // {bud.id}, {spot.id}, {name}, {stats.id}, {stats.values}
		// Sidi Chest
		/*0*/  { {0}, {11}, {"Celest1"}, {11, 13, 12, 20}, {22, 22, 15, 4}  }, 
		/*1*/  { {1}, {11}, {"Celest2"}, {11, 15, 13, 16}, {22, 22, 15, 3}  }, 
		/*2*/  { {2}, {11}, {"Celest3"}, {12, 15, 9, 16},  {22, 22, 40, 4}  },
		/*3*/  { {3, 9, 10}, {11}, {"Celest4"}, {13, 15, 4, 3},   {21, 21, 8, 8}   },
		/*4*/  { {4, 11}, {11}, {"Celest5"}, {13, 15, 6, 5},   {21, 21, 8, 8}   },
		/*5*/  { {5}, {11}, {"Celest6"}, {11, 13, 9, 23},  {21, 21, 60, 4}  },
		/*6*/  { {6}, {11}, {"Celest7"}, {12, 15, 16, 17}, {22, 22, 3, 4}   },
		/*7*/  { {7}, {11}, {"Celest8"}, {11, 12, 14, 17}, {21, 27, 15, 3}  },
		/*8*/  { {8}, {11}, {"Azure Prayerbound Robe"}, {13, 12, 23, 17}, {15, 15, 3, 4}   },
		/*9*/  { {13}, {11}, {"Defiled Sanquine Warplate"}, {9, 0, 23, 17}, {40, 6, 5, 3}   },
		/*10*/  { {12}, {11}, {"Sanguine Bowyers Vest"}, {9, 11, 13, 19}, {40, 22, 22, 4}   },
		
		/*11*/ { {5, 6, 7, 12, 13}, {10}, {"Crafted Shield"}, {24}, {8}  },
		/*12*/ { {6}, {10}, {"Dragonflame Protector"}, {1, 8, 24, 17}, {10, 10, 3, 4} } , 
		/*13*/ { {6}, {9},  {"Dark Knight's Fury"}, {/*11, 17, 23*/}, {/*30, 5, 5*/}  },
		/*14*/ { {3, 4}, {8},  {"Staff of incantation"}, {13, 15, 16}, {34, 34, 3}  },
		/*15*/ { {8}, {8},  {"Destiny Bubble Breaker"}, {/*13, 23, 17*/}, {/*30, 3, 6*/}   },
		/*16*/ { {7, 13}, {8}, {"Crafted Two hand"}, {25}, {8}  },
		/*17*/ { {19}, {8}, {"Crafted Hand To Hand"}, {26}, {8}  },
		/*18*/ { {12, 17}, {8}, {"Crafted Bow"}, {19}, {8}  },
		/*19*/ { {8}, {2}, {"Ring of Arcane Gestures"}, {11, 9, 15, 16}, {15, 56, 24, 5}  },
		/*20*/ { {7, 13}, {2}, {"Ring of Arcane Strength"}, {11, 13, 9, 17}, {24, 24, 68, 4}  },
		/*21*/  { {0}, {10}, {"Azure"}, {11, 17, 22, 20}, {15, 4, 4, 3}  },
		

		
		/*000000*/  { {12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38 }, {11}, {"Celest9"},  {11, 15, 13, 16}, {22, 22, 15, 3}  },
		
		
	};	
}

class TableSpot {
	
	public int clearId = 0;
	
	public String[]	names = {/*0*/ "L. Wrist", /*1*/ "R. Wrist", /*2*/ "L. Ring", /*3*/ "R. Ring",
							/*4*/ "Cloak", /*5*/ "Waist", /*6*/ "Jewelry", /*7*/ "Neck", /*8*/ "Two Handed", 
							/*9*/ "Right Hand", /*10*/ "Left Hand", /*11*/ "Torso", /*12*/ "Feet", 
							/*13*/ "Hands", /*14*/ "Arms", /*15*/ "Legs", /*16*/ "Helmet"};	
	
	String[] typeNames = { "Unused", "Rog", "Craft", "Sidi", "Custom", "Blank" }; // Type ID
	
	
	public int[][] allowedTypes = { // item.type.id / spot.id
		/*0*/ {},
		/*1*/ {0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 },
		/*2*/ {12, 13, 14, 15, 16, 11, 10, 9, 8 },
		/*3*/ {11, 10, 9, 8}
	};

	public int[][][] weapons = { // {bud.id / spot.id}
			{ {3, 4, 8, 9, 10, 11, 15, 18, 23}, {8} }, // Staff
			{ {0, 1, 2, 5, 6, 14, 16, 20, 21, 22, 24, 25}, {9, 10} }, // Righ/Left Hand
			{ {7, 12, 13, 17, 19}, {9, 10, 8} } // Righ/Left/Two Hand
	};
	
	public int[][][] budDef = { // { spotType.id } {bud.id}, {spot.id}
			// Spot Rog
			{ {1}, {0, 1, 2, 5, 6, 7, 12, 13, 14, 16, 17, 19, 20, 21, 22, 24, 25}, { 0, 1, 2, 3, 4, 5, 6, 7 } }, // 8 rogs
			{ {1}, {3, 4, 8, 9, 10, 11, 15, 18, 23 }, { 0, 1, 2, 3, 4, 5, 6, 7, 8 } }, // 9 rogs + staff
			// Spot Craft 
			{ {2}, {0, 3, 4, 5, 8, 9, 10, 11, 12, 14, 15, 18, 19, 20, 23}, { 11, 12, 13, 14, 15, 16} }, // 5 crafts + chest
			{ {2}, {2, 6, 17, 22}, {9, 11, 12, 13, 14, 15, 16} }, // 6 crafts + chest
			{ {2}, {1, 7, 13, 16, 21, 24, 25}, {9, 10, 11, 12, 13, 14, 15, 16} } // 7 crafts + chest
	};
}


class TableCustom {	
	int typeId = 4;
	public Object[][][] items = { // {name, stat.id, value}
		/*0*/ { {"Strenght/quick uncap"}, {11, 14}, {75, 75}  }
	};
}


class TableFile {
	public String chatLogUrl = "src/main/examples/chat.log";
	public String[] findStats = {" \\|\\ ", "Total Utility: ", "Single Skill Utility: ",  ": \\+", "%", " %", " pts"};
	public String[] findRogs = {" <Begin Info:", ">", " <End Info>"};
	public String[][] findInfos =  {{"- ALL spell lines: 50 lvls", "- ALL spell "}, {"ALL magic skills:", " \\|\\ ALL "} };
}

class TableXml {
	public String zenkFolder = "src/main/zenk/";
	public String zenkFile = "src/main/examples/ModelZenk.znk";
	public String[] zenkReplaces = {"REPLACE_NAME", "REPLACE_ID", "REPLACE_WEAPON", "REPLACE_REALM",  "REPLACE_RACE" };
	public String[] sourceNames = { /*Unuse*/ "", /*Rog*/  "Merchant", /*Craft*/ "Spellcraft", /*Sidi*/"ROG" } ;
}

class TableUser {
	public String fileName = "Save.ser";
	public String emptyName = "Profile 1";
}


