import javax.swing.*;

import java.awt.*;
import java.sql.*;
import java.util.Vector;


public class BalanceFinaleAffich extends JPanel
{
	final private String drivers = "com.mysql.cj.jdbc.Driver";
	final private String url = "jdbc:mysql://localhost:3306/gestion";
	final private String user = "junive";
	final private String pass = "password";
	private JPanel Pa;
	private Box vBox;
	private String nomC[],distinctNomC[];
	private JLabel affichage;
	private int tC,tD,tSoldeC=0,tSoldeD=0,cptAffich=0,numC[],distinctNumC[],totalFinalDebit[],totalDebit[],totalFinalCredit[],totalCredit[],debit[],credit[];
	private boolean bool[];
	private Vector vColonne = new Vector(),nomColonne=new Vector();
	private Vector vColonne2 = new Vector(),nomColonne2=new Vector();
	private JTable jTable1;
	private JTable jTable2;
	
	public BalanceFinaleAffich(String jo, String m, String a, String superieur)
	{
		super();
	
		setDoubleBuffered(true);
		setLayout(new BorderLayout(5,5));
		Pa=new JPanel();
		credit=new int[200];
		debit=new int[200];
		totalCredit=new int[200];
		totalDebit=new int[200];
		totalFinalCredit=new int[200];
		totalFinalDebit=new int[200];
		distinctNumC=new int[200];
		distinctNomC=new String[200];
		numC=new int[200];
		nomC=new String[200];
		bool=new boolean[200];
		for (int i=0;i<200;i++)
		{
			bool[i]=true;
		}
		Pa.getGraphics();
		add(Pa,BorderLayout.CENTER);

		java.text.SimpleDateFormat f = new java.text.SimpleDateFormat("dd MMMMM yyyy"); 
		
			try {		  
			    Class.forName(drivers);
			    Connection connex = DriverManager.getConnection(url, user, pass);
			    Statement stat = connex.createStatement();
				String sqlText = "";
				if (superieur != null) {
					sqlText = "SELECT * FROM Journal j WHERE  j.Dat BETWEEN '"+superieur+"' AND '"+a+"-"+m+"-"+jo+"'  ORDER BY j.ordre";
				} else {
					sqlText = "SELECT * FROM Journal j WHERE  j.Dat = DATE '"+a+"-"+m+"-"+jo+"'  ORDER BY j.ordre";
				}

			    ResultSet requeteAffich= stat.executeQuery(sqlText) ;
			    nomColonne.add("N° Compte");
			    nomColonne.add("Nom Compte");
			    nomColonne.add("Débit");
			    nomColonne.add("Crédit");   
			    nomColonne.add("Solde Débit");
			    nomColonne.add("Solde Crédit");
				
			    while(requeteAffich.next() )  		    	
			    { 
				  debit[cptAffich]=requeteAffich.getInt("Debit");
				  credit[cptAffich]=requeteAffich.getInt("Credit");
				  numC[cptAffich]=requeteAffich.getInt("NumC");
				  nomC[cptAffich]=requeteAffich.getString("NomC");
				   
			    cptAffich++;
			  
			    } 
			    
			    stat.close(); }
				catch (SQLException ez){ System.err.println(ez.getMessage());}
				catch (ClassNotFoundException er) {System.err.println(er.getMessage());}
	
		int c[]=new int[200],d[]=new int[200],nu[]=new int[200];
		String no[]=new String[200];
		
		for (int i=0;i<199;i++)	
		{ 
			
			for (int j=0;j<199;j++)
			{

				if (numC[i]==numC[j])
				{
					if (bool[i]==true)
					{	
					d[i]-=debit[j];
					c[i]+=credit[j];
					nu[i]=numC[j];
					no[i]=nomC[j];
					bool[j]=false;
					}
				}
				
			}
			
		}

		for (int i=0;i<70;i++)
		{
			if (nu[i]!=nu[i+1])
			{
			distinctNumC[i]=nu[i];
			distinctNomC[i]=no[i];
			totalDebit[i]=d[i];
			totalCredit[i]=c[i];	
			}
			
			if (totalCredit[i]+totalDebit[i]<0)
			{totalFinalDebit[i]=totalCredit[i]+totalDebit[i];}
			else
			{totalFinalCredit[i]=totalCredit[i]+totalDebit[i];}
			
		tSoldeD+=totalFinalDebit[i];
		tSoldeC+=totalFinalCredit[i];
		tC+=totalCredit[i];
		tD+=totalDebit[i];
		}
		
		vBox=Box.createVerticalBox();
		vBox.setPreferredSize(new Dimension(575, 600));
		vBox.setBorder(BorderFactory.createLineBorder(Color.blue, 1));
		
		if (a!=null)
	    {vBox.setBorder(BorderFactory.createTitledBorder("Balance Finale au "+jo+"/"+m+"/"+a));}
		else
		{vBox.setBorder(BorderFactory.createTitledBorder("Balance Finale "));}	
		

		
		int k=0;

		while (nomC[k]!=null)
		{
			if (distinctNumC[k]!=0)
			{	
			Vector vLigne = new Vector(); 
			vLigne.add(""+numC[k]);
			vLigne.add(""+nomC[k]);
			vLigne.add(""+totalDebit[k]);
			vLigne.add(""+totalCredit[k]);
			vLigne.add(""+totalFinalDebit[k]);
			vLigne.add(""+totalFinalCredit[k]);
			vColonne.add(vLigne);
			}
		k++;
		}
		jTable1= new JTable(vColonne,nomColonne);
	    vBox.add(Box.createVerticalStrut(15));
	    
	    Vector vLigne = new Vector();
	    vLigne.add("");
	    vLigne.add("");
	    vLigne.add(""+tC);	
		vLigne.add(""+tD);
		vLigne.add(""+ tSoldeD);
		vLigne.add(""+ tSoldeC);

		vColonne2.add(vLigne);
		nomColonne2.add("");
		nomColonne2.add("");
		nomColonne2.add("Total Débit");
	    nomColonne2.add("Total Crédit");
	    nomColonne2.add("Total Solde Débit");
	    nomColonne2.add("Total Solde Débit");   
		
		jTable2= new JTable(vColonne2,nomColonne2);
		setVisible(true);
		
	}
	
	public void afficher()
	{
		JScrollPane jS = new JScrollPane(jTable1);
		jS.setPreferredSize(new Dimension(300,600));
		vBox.add(jS);
		JScrollPane jS2 = new JScrollPane(jTable2);
		jS2.setPreferredSize(new Dimension(300,50));
		vBox.add(jS2);	
		Pa.add(vBox);
			
	}
	
	public int numeroCompte(int i)
	{
		return distinctNumC[i];
	}
	
	public String nomDeCompte(int i)
	{
		return distinctNomC[i];
	}
	
	public int creditDesComptes(int i)
	{
		return totalFinalCredit[i];
	}
	
	public int debitDesComptes(int i)
	{
		return totalFinalDebit[i];
	}
	
}
