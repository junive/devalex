package main;
/*
javac -d bin  *.java
cd bin
java MainDaoc
cd ..
*/


class MainDaoc { 
	// For Test to remember the id
	static String[] name = {/*0*/ "Infiltrator", /*1*/ "Cleric", /*2*/ "Minstrel", /*3 Theu/Wiz */ "Cabalist",
							/*4 Sorc */ "Necromancer", /*5*/ "Mercenary", /*6*/ "Reaver", /*7*/ "Paladin",  /*8*/ "Friar"};

    public static void main(String args[])  { 
    	System.out.println("Hello, World"); 
    	
		Control ctrl = new Control();
		
		ViewMarket viewMarket = new ViewMarket(ctrl);
		ViewSpot viewSpot = new ViewSpot(ctrl);
		ViewTemplate viewTemplate = new ViewTemplate(ctrl);

		ctrl.loadTest(1);
		viewMarket.filterUtils( new int[] { 65, 40 } ); // rog / staff
		ctrl.setCompileLimits(new int[] { 30, 2, 30 } ); // Max templates /  max MP / Max Wasted
		ctrl.setWeaponUtil(40); // staff purge
		
		ctrl.loadSidiChest();
		//ctrl.addSidiItemById(21);  // Infiltrator : Azure
		
		// ctrl.setUnitedStat(17, true); // No Melee +1
		ctrl.setCustomStats(new int[][] { {11}, {50} } );
		//// ctrl.setCustomStats(new int[][] { {11, 14}, {55, 75} } ); // Strenght / Quick
		// ctrl.setStatSelect(12, false); // Const
		 //ctrl.setStatSelect(10, false); // Power less
		 
		// Crafted Weapons
		 ctrl.selectSpotById(9, 0); // Crafted MH
		 ctrl.selectSpotById(10, 0); // Crafted OH
		// ctrl.selectSpotById(11, 2); // Crafted Chest



		// Caster Weapon less :
		//ctrl.setCustomItem(0); // Caster No Strength / Quickness
		//ctrl.selectSpotById(8, 0); //  WeaponLess
		//ctrl.setStatSelect(27, true); // Focus 1
		//ctrl.setStatSelect(28, true); // Focus 2
		//ctrl.setStatSelect(29, true); // Focus 3
		//ctrl.addSidiItemById(19); // Ring of arcane Gestures + 5 All magics
		//ctrl.setCustomStats(new int[][] { {27, 28, 29}, {10, 10, 10} } ); // All focus +1 imbue
		//ctrl.setCompileLimits(new int[] { 30, 5, 60 } ); // Max templates /  max MP / Max Wasted
		
		// Crafted Weapons
		// ctrl.selectSpotById(9, 2); // Crafted MH
		// ctrl.selectSpotById(10, 2); // Crafted OH
		
		// ctrl.addSidiItemById(21);  // Infiltrator : Azure
		// ctrl.addSidiItemById(11); // Crafted Shield +8
		
		// ctrl.addSidiItemById(13); // Reaver : Sword Dark Knight's Fury
		// ctrl.addSidiItemById(14); // Caster : Staff of incantation
		
		// Revear
		// ctrl.addSidiItemById(12); // Shield DragonFlame
		// ctrl.selectSpotById(9, 0); // Weapon less MH
		// ctrl.setStatSelect(10, false); // Power less
		
		// Friar : 
		// ctrl.setStatSelect(11, false); // Remove Strength useless for friar
		// ctrl.addSidiItemById(19); // Ring of arcane Gestures + 5 All magics
		// ctrl.selectSpotById(8, 0); // Friar : WeaponLess
		// ctrl.setUnitedStat(16, false); // Friar  : No magic +1
		
		// Arms
		// ctrl.selectSpotById(9, 0); // Weapon less MH
		// ctrl.addSidiItemById(11); // Crafted Shield +8
		// ctrl.addSidiItemById(20); // Ring +4 All Melee
		// ctrl.setUnitedStat(17, false); // No Melee +1
		
		// Paladin
		// ctrl.setStatSelect(32, false); // Remove Chants
		// ctrl.setStatSelect(25, false); // Remove Two hand
		// ctrl.setStatSelect(11, false); // remove Piety
		// ctrl.selectSpotById(9, 0); // Weapon less MH
		// ctrl.addSidiItemById(11); // Weapon less MH : Crafted Shield +8
		// ctrl.addSidiItemById(16); // Weapon less MH : Crafted Two hand +8 
		
		 //JFrame fenetre = new JFrame();
		//fenetre.setVisible(true);
		
		

		viewSpot.showConfig();
		//viewSpot.showSpots();
		
		ctrl.calculPurges();

		viewMarket.showMarket();
		viewMarket.showPurges();

		viewTemplate.searchTemplates();	
		
    }
	
} 