package main;
import java.util.ArrayList;
import java.util.Collections;

class ViewSpot {
	private Control ctrl;
	private Spot spot;
	private Bud bud;
	
	public ViewSpot(Control ctrl) {
		this.ctrl = ctrl;
	}
	
	public void control() { // Refresh all model when setting after view
		this.spot = this.ctrl.spot();
		this.bud = this.spot.bud();
	}
	
	public void showConfig() {
		control();
		System.out.println(
			bud.name() + " -> TEMP : "+ (int) bud.util() 
					   + " (x " + spot.sizeSelected() + ")"
					   + " --- Basic : "+ (int)  bud.sumUtilBasic()
			+ " \n__ UTIL ROGS :"  + " min : " + (int) spot.rog().utilItemPurge()
					 + " / " + (int) spot.rog().utilItem()
					 + " (x " + spot.rog().sizeSelected() + ")"
			+ " \n__ UTIL CRAFT : " + spot.craft().utilItemPurge()
					 + " / " + spot.craft().utilItem()
					 + " (x " + spot.craft().sizeSelected() + ")"
			+ " \n__ UTIL SIDI : " + (int) spot.sidi().util() + " (x " + spot.sidi().sizeSelected() +")"
			+ " \n__ STATS : count Blank " + bud.blankStats().size() + " / Basic : " + bud.mergeBasicStats().size()
			+ " \n__ OLD SEARCH : "+ (int) ( bud.util() - spot.craft().utilPurge() - spot.bud().sumUtilCustom() )  
					+ " = ( " + (int) spot.rog().util() 
					+ " + Sidi " + (int) spot.sidi().util()
					+ " + Craft Less " + (int) (spot.craft().utilLess() * spot.craft().sizeSelected()) 
					+ " - Custom " + (int) spot.bud().sumUtilCustom() +" )" 
		);
	}
	
	public void showSpots() {
		control();
		System.out.println( "\n Spot Size Selected : "+ spot.size() );
		for (int i = 0; i < spot.size(); i++) {
			System.out.println( i + " : " + spot.get(i) );
		}

	}

}

class ViewMarket {	
	private Control ctrl;
	private Spot spot;
	private Market market;
	
	private int[] filterUtils;
	
	public ViewMarket(Control ctrl) {
		this.ctrl = ctrl;
	}
	
	public void control() { // Refresh all model when setting after view
		this.spot = this.ctrl.spot();
		this.market = this.ctrl.market();
	}
		
	public void filterUtils(int[] values) {
		this.filterUtils = values;
	}
	
	private void marketMessage(ItemRog rog, int position) {
		control();
		String txt = "["+(position)+"]";
		txt = txt + rog.name()  + " ["+ rog.stats().get(0).name()+ " : ";
		txt = txt + rog.stats().get(0).value() +"] ----> "+ ToolStats.sumUtilSingle(rog.stats());

		for (int i = 0; i < rog.specialInfos().size(); i++) {
			txt = txt + " / " + rog.specialInfos().get(i);
		}
		
		System.out.println(txt);
	}
	
	public boolean showMarket() {
		control();
		System.out.println("\n");
		for (int i = 0; i < market.garbages().size(); i++) {
			if (i == 1 || i == 3) continue; // really dirty here ! To correct ASAP
			ArrayList<Item> items = market.garbages().get(i);
			Collections.sort(items, COMPARE.ITEM_NAME);
			float minUtil = spot.isWeapon(i) ? filterUtils[1] :  filterUtils[0] ;
			for (int j = 0; j <  items.size(); j++) {
				ItemRog rog = (ItemRog) items.get(j);
				int position = market.indexInGarbagesByName(rog);
				float utilUsefull = spot.bud().sumUtilUsefull(rog.stats());
				if ( utilUsefull >= minUtil ) this.marketMessage(rog, position);
			}
		}
		return false;
	}

	
	public void showPurges() {
		control();
		System.out.println("\n");
		for (int i = 0; i < market.purges().size(); i++) {
			//if (i == 1 || i == 3)  continue; // Ugly again here
			int spotId = spot.rog().spotIds().get(i);
			System.out.println( "Total "+ spot.names()[spotId]
								+ " : " + market.purges().get(i).size() ); 
		}
	}
}

class ViewTemplateThread implements Runnable {
	public ViewTemplate view;
	
   public ViewTemplateThread(ViewTemplate view) {
	   this.view = view;
   }

	public void run() {
        try { 
			//System.out.println ("Thread " +  Thread.currentThread().getId() +  " is running"); 	
			view.setCurrentThread(view.currentThread() + 1); // Need before to avoid retard thread
			view.searchTemplates(view.currentThread());
		} catch (Exception e)   { 
			e.printStackTrace();
            System.out.println ("Exception in Thread is caught : "+ e.getMessage()); 
        } finally { // Start new Thread on each bracers
			if (view.currentThread() < view.endThread() ) this.run();
			 else System.out.println("End Compile: " +  view.getEndTime());
		}
	}
}

class ViewTemplate {	
	private Control ctrl;
	private Compile compile;
	private Zenk zenk;
	private int currentThread = -1;
	
	private long startTime = System.nanoTime();
	
	public ViewTemplate(Control ctrl) {
		this.ctrl = ctrl;
	}
	
	public void control() { // Refresh all model when setting after view
		this.compile = ctrl.compile();
		this.compile.setViewTemplate(this);  // need to refresh view in real time
		this.zenk = ctrl.zenk();
	}

	public int currentThread() { return this.currentThread; }
	public void setCurrentThread(int value) { this.currentThread = value; }		
	public int endThread() { return compile.market.purges().get(0).size() - 1; }

	public void searchTemplates() { 	// Shortcut keeping only the start thread number
		control();
		compile.refreshCalculs(); // Refresh all calculs before compiling
		//for (int i = 0; i < this.endThread() + 1; i++) { compile.searchTemplates(i); }
		int cores =  Runtime.getRuntime().availableProcessors();
		for (int i = 0; i < cores; i++) {
			ViewTemplateThread tmp = new ViewTemplateThread(this);
			Thread thread = new Thread(tmp);
			thread.start();
		}
	}
	
	public void searchTemplates(int startThread) {
		compile.searchTemplates(startThread);
	}

	public long getEndTime() {
		long endTime = System.nanoTime();
		long timeElapsed = endTime - startTime;
		return timeElapsed / 1000000;
	}

	public void showCompilePosition(int current, int total, Item rog) {
		//long endTime = System.nanoTime();
		//long timeElapsed = endTime - startTime;
		
		System.out.println("Loop "+current+"/"+total +" : "+ rog.name()
							+" ---> : "+ToolStats.sumUtilSingle(rog.stats())+"--- Time: " +  this.getEndTime());
	}
	
	// Should be template in arguments
	public void showSkip(float waste, float util, String mp, int estim100) {
		System.out.println("SKIP ---> Util Temp : " + (util - waste)+" // Waste : "+waste+" // MP : "+mp + " [" + estim100 + "]");
	}
	
	
	public void showTemplate(Template template) {
		System.out.println("\n");
		String txt1 = "_________ Template : "+ template.id()
					+ " ____ Util : " + (template.util() - template.waste())
					+ " ____  WASTED : " + template.waste()
					+ " ____  Miss : " + template.cut();
					//+" ________ Imbues : "+res.imbue();
		System.out.println(txt1);

		int count100 = compile.numb100(template.crafts());
		int numb99 = (template.crafts().size() - count100);
		String txt2 = " _________________________________"
					+ "[ MP : "+ count100 
					+" / 99% : " + numb99 +" ] "
					+ " _________________________________";
		System.out.println(txt2);

		for (int i = 0; i < template.rogs().size(); i++) {
			Item rog = template.rogs().get(i);
			String spotName = compile.spot().names()[rog.spotId()];
			//ArrayList<Item> items = compile.market().garbages().get(rog.spotId());
			int position = compile.market().indexInGarbagesByName(rog);
			String txt3 = spotName + " : [" + position +   "] " +  rog.name() 
						+ " ["+rog.stats().get(0).name() + " : " + (int) rog.stats().get(0).value() + "]"
						+ " ------> " + ToolStats.sumUtilSingle(rog.stats()) + " ";

			if (rog instanceof ItemRog) {
				ItemRog speRog = (ItemRog) rog;
				for (int j = 0; j < speRog.specialInfos().size(); j++) {
					txt3 = txt3 + " / " + speRog.specialInfos().get(j);
				}
			}
			
			System.out.println(txt3);
		}
		
		System.out.println("\n");
	}
	
	public void createTemplateXml(Template template) {
		this.zenk.writeTemplate(template);
	}
}