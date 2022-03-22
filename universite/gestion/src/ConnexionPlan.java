import java.sql.*;

public class ConnexionPlan
{
	final private String drivers = "com.mysql.cj.jdbc.Driver";
	final private String url = "jdbc:mysql://localhost:3306/gestion";
	final private String user = "junive";
	final private String pass = "password";
	private ResultSet requete1;
	private Statement stat;
	private Connection connex;
	private int cpt=0,numC[],ordre[];
	private String nomC[];
	
	public ConnexionPlan()
	{
		numC=new int[70];
		nomC=new String[70];
		ordre=new int[70];
		
		try {
			//Connexion à la base "PlanCompable"
		    Class.forName(drivers);
		    connex = DriverManager.getConnection(url, user, pass);
		    stat = connex.createStatement();
		    requete1= stat.executeQuery("SELECT * FROM Plan ORDER BY ordre") ;

		    //On insère les comptes dans la liste déroulante
		    while(requete1.next() )  		    	
		    {nomC[cpt]=requete1.getString("Compte");	
		    numC[cpt]=requete1.getInt("num1"); 
		    ordre[cpt]=requete1.getInt("ordre");
		    cpt++;} 
		    
		    stat.close(); }
			catch (SQLException ez){ System.err.println("Error sql :" + ez.getMessage());}
			catch (ClassNotFoundException er) {System.err.println("Not found : " +er.getMessage());}
	}
	
	public String getNomC(int t)
	{return nomC[t];}
	
	public int getNumC(int t)
	{return numC[t];}
	
	public int getOrdre(int t)
	{return ordre[t];}
	
	
}
