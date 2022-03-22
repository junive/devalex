package main;
import java.util.ArrayList;

class Control {
	// Instantiate Models here avoiding null erros ans allow to create your views where ever you want
	// If your view is empty, you'll understand faster than a null pointer exception...
	private CentralData data = new CentralData();
	private Storage storage = new Storage();
	private Bud bud = new Bud();
	private Spot spot = new Spot();
	private ChatLogFile log = new ChatLogFile();
	private Market market = new Market();
	private Compile compile = new Compile();
	private Zenk zenk = new Zenk();

	// For view acess
	public CentralData data() { return this.data; }
	public Spot spot() { return this.spot; }
	public Bud bud() { return this.bud; }
	public ChatLogFile log() { return this.log; }
	public Compile compile() { return this.compile; }
	public Market market() { return this.market; }	
	public Zenk zenk() { return this.zenk; }	

	public void loadTest(int budId) {
		//this.loadUser(0);
		this.loadBlankUser();
		this.loadBud(budId);
		this.loadSpotDefault();
		this.loadChatLog();
		this.loadMarket();
		this.loadCompile();	
		this.loadZenk();	
	}
	
	// init a stored UserTable or the default one
	public void loadUser(int index) {
		this.storage.load(); // retrieve all datas from storage
		this.data.setUser( this.getUsers().get(index) ); // Link all tables together
	}
	
	public void loadBlankUser() {
		this.data.setUser( new User() );
	}
	
	// Return the list of UserTable
	public ArrayList<User> getUsers() {
		return this.storage.users();
	}
	
	// If want to refresh the current profile by default one
	public void resetUser(int index) {
		this.storage.clear(index);
		this.loadUser(index);
	}
	
	// When click on button save
	public void saveUser(String name) {
		data.user().name = name; // Rewrite the name each time
		data.user().garbages = market.garbages();
		data.user().templates = compile.templates();
		this.storage.save();
	}
	
	// To add a new profile
	public void createUser(String name) {
		this.storage.create(name);
		this.loadUser( this.getUsers().size()-1 );
	}

	public void loadBud(int budId) {
		this.bud = data.bud().getBud(budId);
	}
	
	public void loadChatLog() {
		this.log = data.file().getChatLog();
	}
	public void loadMarket() { 
		this.market = data.market().getMarket();
		this.market.setSpot(spot);
		this.market.setGarbages( data.file().getGarbage(log) );
	}
	
	public void loadCompile() {
		this.compile = data.compile().getCompile();
		this.compile.setMarket(market);
		this.compile.setSpot(spot);
		this.compile.setClonesStat(data.compile().getClonesStat());
	}
	
	// Load only typues and get utils from spot
	public void loadSpot() {
		this.spot = data.spot().getSpot(bud.id());
		this.spot.setBud(bud);
	}

	// Remove all spot and set the default ones 
	public void loadSpotDefault() {
		this.spot = data.spot().getSpotDefault(bud.id());
		this.spot.setBud(bud);
	}
	
	// All informations to create ou Zenk xml to export in software
	public void loadZenk() {
		this.zenk = data.zenk().getZenk(bud.id());
		this.zenk.setSpot(spot);
	}
	
		
	public void calculPurges() {
		this.market.calculPurges();
	}

	// Only for view Ex : select all available Craft/Rog/Sidis spot
	public String[] getSpotTypeNames() {
		return this.data.spot().getTypeNames();
	}

	// Only for view Ex: select a craft but not Rog according to getSpotTypes()
	public int[] getSpotTypesAllowed(int typeId) {
		return this.data.spot().getTypesAllowed(typeId);
	}

	// Only for view Ex : get All Left Hand of bud set in this controler
	public ArrayList<Item> getSidiItems(int spotId) {
		return this.data.item().getSidis(spotId);
	}

	public void loadSidiChest() {
		int itemId = data.item().getSidiChestId(bud.id());
		this.addSidiItemById(itemId);
	}

	// Return from view Ex : select the Sidi Azure and return the id here
	public void addSidiItemById(int itemId) {
		Item sidi = data.item().getSidi(itemId, bud.id());
		bud.addSidiItem(sidi); // Need to remove a sidi with same spotId
		spot.set(sidi.spotId(), sidi.type().id());
	}
	
	public void setWeaponUtil(float value) {
		this.market.setWeaponUtil(value);
	}
	
	public void selectSpotById(int spotId, int typeId) {
		this.spot.set(spotId, typeId);
	}
	
	public void setCustomStats(int values[][]) {
		data.item().setStats(bud.customItem(), values);
	}
	
	public void setCustomItem(int itemId) {
		Item custom = data.item().getCustom(itemId);
		bud.setCustomItem(custom);
	}
	
	public void clearCustom() {
		Item custom = data.item().getEmptyCustom();
		bud.setCustomItem(custom);
	}
	
	public void setCompileLimits(int[] values) {
		data.compile().setLimits(compile, values);
	}
	
	public void refreshBasicStats() {
		ArrayList<Stat> blanks = data.item().getBlankStats(bud.id());
		bud.setBlankStats( blanks ); // Refresh blanks
		bud.setBasicStats( blanks ); // Refresh basics
	}
	
	public void setStatSelect(int statId, boolean select) {
		data.stat().setStatBudSelect(statId, bud.id(), select);
		this.refreshBasicStats();
	}
	
	public void setUnitedStat(int statId, boolean unit) {
		data.item().setUnitedBudStat(statId, bud.id(), unit);
		this.refreshBasicStats();
	}

}