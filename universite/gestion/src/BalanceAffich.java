import javax.swing.*;
import java.util.*;
import java.awt.*;
import java.sql.*;
import java.sql.Date;



public class BalanceAffich extends JPanel
{
	final private String drivers = "com.mysql.cj.jdbc.Driver";
	final private String url = "jdbc:mysql://localhost:3306/gestion";
	final private String user = "junive";
	final private String pass = "password";
	private JPanel Pa;
	private Box vBox;
	private Vector vColonne = new Vector(),nomColonne=new Vector();
	private JTable jTable1;
	private JLabel affichage;
	private int cptAffich=0,totalDebit=0,totalCredit=0,debit=0,credit=0;
	private Date date;

	
	public BalanceAffich()
	{
		super();
		
		setDoubleBuffered(true);
		setLayout(new BorderLayout(5,5));
		Pa=new JPanel();
		
		Pa.getGraphics();
		add(Pa,BorderLayout.CENTER);

		java.text.SimpleDateFormat f = new java.text.SimpleDateFormat("dd MMMMM yyyy"); 
		
		try {		  
		    Class.forName(drivers);
		    Connection connex = DriverManager.getConnection(url, user, pass);
		    Statement stat = connex.createStatement();
		    ResultSet requeteAffich= stat.executeQuery("SELECT * FROM BalanceIni1 ORDER BY ordre") ;
		    nomColonne.add("N° Compte");
		    nomColonne.add("Nom Compte");
		    nomColonne.add("Débit");
		    nomColonne.add("Crédit");
		    while(requeteAffich.next() ) 
		    {  
		       date = requeteAffich.getDate("Date");
			   debit=requeteAffich.getInt("Debit");
			   credit=requeteAffich.getInt("Credit");
			   Vector vLigne = new Vector(); 
			   vLigne.add(requeteAffich.getString("NumC"));
			   vLigne.add(requeteAffich.getString("NomC"));
			   vLigne.add(""+debit);
			   vLigne.add(""+credit);
			   totalDebit-=debit;
			   totalCredit+=credit;		
			   vColonne.add(vLigne);  		
		    } 
		   Vector vLigne = new Vector(); 
		   vLigne.add("");
		   vLigne.add("TOTAUX :");
		   vLigne.add("Total Debit : "+ totalDebit);
		   vLigne.add("Total Crédit : "+totalCredit);
		   vColonne.add(vLigne); 
		  
	   		jTable1= new JTable(vColonne,nomColonne);

		    stat.close(); }
			catch (SQLException ez){ System.err.println(ez.getMessage());}
			catch (ClassNotFoundException er) {System.err.println(er.getMessage());}
	
		vBox=Box.createVerticalBox();
		vBox.setPreferredSize(new Dimension(600, 550));
		vBox.setBorder(BorderFactory.createLineBorder(Color.blue, 1));
		
		if (date!=null)
	    {vBox.setBorder(BorderFactory.createTitledBorder("Balance Initiale au "+f.format(date)));}
		else
		{vBox.setBorder(BorderFactory.createTitledBorder("Balance Initiale "));}	
		 
	    vBox.add(new JScrollPane(jTable1));	
	    Pa.add(vBox);
		
		
		setVisible(true);
		
	}
	

	
}
