import javax.swing.*;

import java.awt.*;
import java.sql.*;
import java.util.Vector;


public class GrandLivreAffich extends JPanel
{
	final private String drivers = "com.mysql.cj.jdbc.Driver";
	final private String url = "jdbc:mysql://localhost:3306/gestion";
	final private String user = "junive";
	final private String pass = "password";
	private JPanel Pa;
	private Box vBox;
	private String tabAffich[];
	private JLabel affichage;
	private int cptAffich=0,totalDebit=0,totalCredit=0,total=0,debit=0,credit=0;
	private ResultSet requeteAffich;
	private Statement stat ;
	private Connection connex;
	private Date date; 
	private Vector vColonne = new Vector(),nomColonne=new Vector();
	private JTable jTable1;
	
	public GrandLivreAffich(String mo, String an, int num)
	{super();

		setDoubleBuffered(true);
		setLayout(new BorderLayout(5,5));
		tabAffich=new String[50];
		Pa=new JPanel();
		add(Pa,BorderLayout.CENTER);
		java.text.SimpleDateFormat f = new java.text.SimpleDateFormat("dd MMMMM yyyy"); 

		try {		  
		   Class.forName(drivers);
		   connex = DriverManager.getConnection(url, user, pass);
		   stat = connex.createStatement();
		   requeteAffich= stat.executeQuery("SELECT * FROM Journal j WHERE j.Index<>'Balance' AND year(Dat)="+an+" AND month(Dat)="+mo+"   AND NumC='"+num+"' ORDER BY Dat");// AND NumC='"+num+"' ORDER BY Dat") ;
		   nomColonne.add("Date Opération");
		   nomColonne.add("Libellé");
		   nomColonne.add("Débit");
		   nomColonne.add("Crédit");

		   while(requeteAffich.next() )
		   {
		   date=requeteAffich.getDate("Dat");
		   debit=requeteAffich.getInt("Debit");
		   credit=requeteAffich.getInt("Credit");
		   Vector vLigne = new Vector();
		   vLigne.add(f.format(date));
		   vLigne.add(requeteAffich.getString("Libelle"));
		   vLigne.add(""+debit);
		   vLigne.add(""+credit);
		   vColonne.add(vLigne);  	
		   totalCredit+=credit;
		   totalDebit-=debit;
		   total= totalCredit+totalDebit;
		   } 
		   Vector vLigne = new Vector(); 
		   vLigne.add("");
		   vLigne.add("TOTAUX :");
		   vLigne.add("Total Debit : "+ totalDebit);
		   vLigne.add("Total Crédit : "+totalCredit);
		   vColonne.add(vLigne); 
		   
		   Vector vLigne1 = new Vector(); 
		   vLigne1.add("");
		   vLigne1.add("TOTAL :");
		   vLigne1.add("");
		   vLigne1.add(""+total);
		   vColonne.add(vLigne1); 
		   
		   jTable1= new JTable(vColonne,nomColonne);
		   
		   	stat.close();}
			catch (SQLException ez){ System.err.println(ez.getMessage());}
			catch (ClassNotFoundException er) {System.err.println(er.getMessage());}
	
		vBox=Box.createVerticalBox();
		vBox.setPreferredSize(new Dimension(600, 500));
		vBox.setBorder(BorderFactory.createLineBorder(Color.blue, 1));    
	    vBox.setBorder(BorderFactory.createTitledBorder("Grand Livre du "+mo+"-"+an));

		
	    int i=0;
	    while (tabAffich[i]!=null)
		{
			//ON règle ici l'affichage comme on le sens ;)
			affichage=new JLabel(tabAffich[i]);
			vBox.add(affichage);
			i++;
		} 
	    vBox.add(Box.createVerticalStrut(15));
	    vBox.add(new JScrollPane(jTable1));
	    Pa.add(vBox);	
		setVisible(true);
	}
	
	
	public int getMaxLigne()
	{
		return cptAffich;
	}

	
}
