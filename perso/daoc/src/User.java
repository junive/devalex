package main;
 import java.util.*;
 import java.io.*;
 
 // All that will be stored, the less stuff, the better
class User {
	public String name;
	public TableBud tabBud = new TableBud();
	public TableCompile tabCompile = new TableCompile();
	public TableMarket tabMarket = new TableMarket();
	public TableStatType tabStatType = new TableStatType();
	public TableStat tabStat = new TableStat();
	public TableBlank tabBlank = new TableBlank();
	public TableRog tabRog = new TableRog();
	public TableCraft tabCraft = new TableCraft();
	public TableSidi tabSidi = new TableSidi();
	public TableSpot tabSpot = new TableSpot();
	public TableCustom tabCustom = new TableCustom();
	public TableFile tabFile = new TableFile();
	public TableXml tabXml = new TableXml();
	public ArrayList<ArrayList<Item>> garbages = new ArrayList<ArrayList<Item>>();
	public ArrayList<Template> templates = new ArrayList<Template>();
}

// Shortcut to avoid having user.tabToto everywhere
class ShortTable {
	private User user;
	
	public ShortTable() { }
	public ShortTable(User user) { 
		this.user = user; 
	}

	public TableBud bud() {
		return user.tabBud;
	}
	
	public TableCompile compile(){
		return user.tabCompile;
	}
	
	public TableMarket market() {
		return user.tabMarket;
	}
	
	public TableStatType statType() {
		return user.tabStatType;
	}
	
	public TableStat stat() {
		return user.tabStat;
	}
	
	public TableBlank blank() {
		return user.tabBlank;
	}
	
	public TableRog rog() {
		return user.tabRog;
	}
	
	public TableCraft craft() {
		return user.tabCraft;
	}
	
	public TableSidi sidi() {
		return user.tabSidi;
	}
	
	public TableSpot spot() {
		return user.tabSpot;
	}
	
	public TableCustom custom() {
		return user.tabCustom;
	}
	
	public TableFile file() {
		return user.tabFile;
	}
	
	public TableXml xml() {
		return user.tabXml;
	}
}


 class Storage {
	private TableUser tabData = new TableUser();
	private ArrayList<User> users = new ArrayList<User>(); // List to store in file

	public ArrayList<User> users() {  return this.users;  }

	// Control will manage all methods that doesn't need to be stored
	public User create(String name) {
		User user = new User();
		user.name = name;
		this.users.add(user);
		this.save();
		return user;
	}

	// Retrieve all tables from our storage, and put them in controler for safety reason
	public void load()  {
		/*	File f = new File(tabData.fileName);
		if (f.isFile() && f.canRead()) {
			
			try (InputStream file = new FileInputStream(tabData.fileName);
				ObjectInputStream reader = new ObjectInputStream(file) ) {
				while (file.available() > 0) { // check file is not empty
					Object obj = reader.readObject();
					if (obj instanceof List) {
						List<User> list =  (List<User>) obj; 
						for (int i = 0; i < list.size(); i++) {
							if (list.get(i) instanceof User) {
								this.users.add( (User) list.get(i));
							}
						}
					}
				}
				reader.close();
			} catch (IOException | ClassNotFoundException  e) { e.printStackTrace(); } 
		} else this.create(tabData.emptyName); // Create the first UserTable
		*/
	}

	public void remove(int index) {
		this.users.remove(index);
		this.save();
	}

	public boolean save()  {
		File f = new File(tabData.fileName);
		if (f.isFile() && f.canRead()) f.delete(); // clean the file
		try (OutputStream file = new FileOutputStream(tabData.fileName);
			ObjectOutputStream writer = new ObjectOutputStream(file) ) {
			writer.writeObject(this.users);
			writer.close();
		} catch (IOException e) { e.printStackTrace(); }
		return true;
	}
	
	public void clear() {
		this.users = new ArrayList<User>();
		this.save();
	}
	
	public void clear(int index) {
		User user = this.users.get(index);
		this.users.set( index, this.create(user.name) );
		this.save();	
	}
}
