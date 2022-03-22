import javax.swing.*;

import java.awt.*;
import java.sql.*;
import java.util.Vector;


public class JournalAffich extends JPanel
{
	final private String drivers = "com.mysql.cj.jdbc.Driver";
	final private String url = "jdbc:mysql://localhost:3306/gestion";
	final private String user = "junive";
	final private String pass = "password";
	private JPanel Pa;
	private Box vBox;
	private String tabAffich[],tabIndex [],index[];
	private JLabel affichage;
	private int cptAffich=0;
	private ResultSet requeteAffich;
	private Statement stat ;
	private Connection connex;
	private Date date;
	private Vector vColonne = new Vector(),nomColonne=new Vector();
	private int debit,credit,cpt;
	private JTable jTable1;
	
	public JournalAffich(String jo,String mo,String an)
	{super();

		setDoubleBuffered(true);
		setLayout(new BorderLayout(5,5));
		tabAffich=new String[50];
		tabIndex=new String[50];
		Pa=new JPanel();

		add(Pa,BorderLayout.CENTER);
		
		java.text.SimpleDateFormat f = new java.text.SimpleDateFormat("dd MMMMM yyyy"); 
		try {		  
		    Class.forName(drivers);
		    connex = DriverManager.getConnection(url , user, pass);
		    stat = connex.createStatement();
		    requeteAffich= stat.executeQuery("SELECT * FROM Journal j WHERE j.Index<>'Balance' AND year(j.Dat)="+an+" AND month(j.Dat)="+mo + " "+jo+" ORDER BY j.Dat,j.Index") ;
		    nomColonne.add("Date");
		    nomColonne.add("N° Compte");
		    nomColonne.add("Nom Compte");
		    nomColonne.add("N° Facture");
		    nomColonne.add("Libellé opération");
		    nomColonne.add("Débit");
		    nomColonne.add("Crédit");
		    cpt = 1;
		    index = new String[1000];
		    index[0]="";
		    	
		    while(requeteAffich.next() )  		    	
		    { 	
		    	index[cpt]=  requeteAffich.getString("Index");
		    	date = requeteAffich.getDate("Dat");
		    	debit=requeteAffich.getInt("Debit");
				credit=requeteAffich.getInt("Credit");
		    	Vector vLigne = new Vector(); 
		    	vLigne.add(f.format(date));
		    	vLigne.add(requeteAffich.getString("NumC"));
				vLigne.add(requeteAffich.getString("NomC"));
				
				if (index[cpt].equals(index[cpt-1]))
					{
					vLigne.add("");
					}
				else
					{
					vLigne.add(""+index[cpt]);
					}
				vLigne.add(requeteAffich.getString("Libelle"));
				vLigne.add(""+debit);
				vLigne.add(""+credit);
				vColonne.add(vLigne); 
				cpt++;
		    } 
		    jTable1= new JTable(vColonne,nomColonne);

		    stat.close(); }
			catch (SQLException ez){ System.err.println(ez.getMessage());}
			catch (ClassNotFoundException er) {System.err.println(er.getMessage());}
			
		vBox=Box.createVerticalBox();
		//vBox.setPreferredSize(new Dimension(600, 500));
		vBox.setBorder(BorderFactory.createLineBorder(Color.blue, 1));    
	    
		
		if (date!=null)
	    {vBox.setBorder(BorderFactory.createTitledBorder("Journal au "+f.format(date)));}
		else
		{vBox.setBorder(BorderFactory.createTitledBorder("Journal "));}	
	

		JScrollPane jS=new JScrollPane(jTable1);
		//jS.setPreferredSize(new Dimension(300,300));
	    vBox.add(jS);
		Pa.add(vBox);	
		setVisible(true);
		

	}
	
	

	
	public int getMaxLigne()
	{
		return cptAffich;
	}

	
}
