import java.awt.BorderLayout;
import java.awt.Color;
import java.awt.Dimension;
import java.sql.*;
import java.util.Vector;

import javax.swing.*;

public class ResultatAffich extends JPanel
{

	private JPanel Pa;
	private Box hBox,hBox2,hBox3,vBox;
	private Vector vLigne1,vLigne2, vColonne1 = new Vector(), vColonne2 = new Vector(),nomColonne1=new Vector(),nomColonne2=new Vector();
	private Vector vLigne3,vLigne4, vColonne3 = new Vector(), vColonne4 = new Vector(),nomColonne3=new Vector(),nomColonne4=new Vector();
	private Vector vLigne5,vLigne6, vColonne5 = new Vector(), vColonne6 = new Vector(),nomColonne5=new Vector(),nomColonne6=new Vector();
	private JTable jTable1,jTable2,jTable3,jTable4,jTable5,jTable6;
	private int rentabilite=0,totalCharge=0,totalProduit=0,Final=0;


	
	public ResultatAffich(BalanceFinaleAffich bal,String date)
	{
		super();
		
		setDoubleBuffered(true);
		setLayout(new BorderLayout(5,5));
		Pa=new JPanel();
		Pa.getGraphics();
		add(Pa,BorderLayout.CENTER);

		
		
		  
		   
		    nomColonne1.add("CHARGES");
		    nomColonne1.add("Total");
		    nomColonne2.add("PRODUITS");
		    nomColonne2.add("Total");
		    nomColonne3.add("Final PRODUITS");
		    nomColonne3.add("");
		    nomColonne4.add("Final CHARGES");
		    nomColonne4.add("");
		    nomColonne5.add("TOTAL PRODUITS");
		    nomColonne5.add("");
		    nomColonne6.add("TOTAL CHARGES");
		    nomColonne6.add("");
		    
		    vLigne1 = new Vector(); 
			vLigne1.add("CHARGES D'EXPLOITATIONS : ");
			vLigne1.add("");
			vColonne1.add(vLigne1);
	   
		   for (int i=0;i<65;i++)
		   {
			 if ((bal.numeroCompte(i)>=600)&&(bal.numeroCompte(i)<660)||(bal.numeroCompte(i)>=60)&&(bal.numeroCompte(i)<66))  
			 {
					
						
					
				vLigne1 = new Vector(); 
				   vLigne1.add(bal.nomDeCompte(i));
				
				   vLigne1.add(""+(bal.debitDesComptes(i)+bal.creditDesComptes(i)));
				   vColonne1.add(vLigne1);	 
			 }
		   }
		   vLigne1 = new Vector(); 
		   vLigne1.add("");
		   vLigne1.add("");
		   vColonne1.add(vLigne1);	
		   
		   
		   
		   vLigne2 = new Vector(); 
		   vLigne2.add("PDT D'EXPLOITATIONS : ");
		   vLigne2.add("");
		   vColonne2.add(vLigne2); 
		   
		   
		   
		   for (int i=0;i<65;i++)
		   {
			 if ((bal.numeroCompte(i)>=700)&&(bal.numeroCompte(i)<760))  
			 {
				 
				   vLigne2 = new Vector(); 
				   vLigne2.add(bal.nomDeCompte(i));
				   vLigne2.add(""+(bal.debitDesComptes(i)+bal.creditDesComptes(i)));
				   vColonne2.add(vLigne2);	 
			 }
		   }
		   
		   vLigne2 = new Vector(); 
		   vLigne2.add("");
		   vLigne2.add("");
		   vColonne2.add(vLigne2);
		   
		   
		    vLigne1 = new Vector(); 
			vLigne1.add("CHARGES FINANCIERES : ");
			vLigne1.add("");
			vColonne1.add(vLigne1);
	   
		   for (int i=0;i<65;i++)
		   {
			 if ((bal.numeroCompte(i)>=660)&&(bal.numeroCompte(i)<670))  
			 {
				 vLigne1 = new Vector(); 
				   vLigne1.add(bal.nomDeCompte(i));
				   vLigne1.add(""+(bal.debitDesComptes(i)+bal.creditDesComptes(i)));
				   vColonne1.add(vLigne1);	 
			 }
		   }
		    
		   vLigne2 = new Vector(); 
		   vLigne2.add("PDT FINANCIERS : ");
		   vLigne2.add("");
		   vColonne2.add(vLigne2); 
		   
		   
		   
		   
		   for (int i=0;i<70;i++)
		   {
			 if ((bal.numeroCompte(i)>=760)&&(bal.numeroCompte(i)<770))  
			 {
				 vLigne2 = new Vector(); 
				   vLigne2.add(bal.nomDeCompte(i));
				   vLigne2.add(""+(bal.debitDesComptes(i)+bal.creditDesComptes(i)));
				   vColonne2.add(vLigne2);	 
			 }
		   }
		   vLigne1 = new Vector(); 
		   vLigne1.add("");
		   vLigne1.add("");
		   vColonne1.add(vLigne1); 
		   vLigne2 = new Vector(); 
		   vLigne2.add("");
		   vLigne2.add("");
		   vColonne2.add(vLigne2);
		   
		   vLigne1 = new Vector(); 
			vLigne1.add("CHARGES EXCEPTIONNELLES : ");
			vLigne1.add("");
			vColonne1.add(vLigne1);
	   
		   for (int i=0;i<65;i++)
		   {
			 if ((bal.numeroCompte(i)>=670)&&(bal.numeroCompte(i)<700))  
			 {
				 vLigne1 = new Vector(); 
				   vLigne1.add(bal.nomDeCompte(i));
				   vLigne1.add(""+(bal.debitDesComptes(i)+bal.creditDesComptes(i)));
				   vColonne1.add(vLigne1);	 
			 }
		   }
		    
		   vLigne2 = new Vector(); 
		   vLigne2.add("PDT EXCEPTIONNELS : ");
		   vLigne2.add("");
		   vColonne2.add(vLigne2); 
		   
		   jTable1= new JTable(vColonne1,nomColonne1);
	   	   

		   for (int i=0;i<75;i++)
		   {
			 if ((bal.numeroCompte(i)>=770)&&(bal.numeroCompte(i)<800))  
			 {
				 vLigne2 = new Vector(); 
				   vLigne2.add(bal.nomDeCompte(i));
				   vLigne2.add(""+(bal.debitDesComptes(i)+bal.creditDesComptes(i)));
				   vColonne2.add(vLigne2);	 
			 }
		   }
		   
		   jTable2= new JTable(vColonne2,nomColonne2);
		   
		   for (int i=0;i<75;i++)
		   {
			   if ((bal.numeroCompte(i)>=600)&&(bal.numeroCompte(i)<700)||(bal.numeroCompte(i)>=60)&&(bal.numeroCompte(i)<70))  
				 {
			   totalCharge+=bal.debitDesComptes(i)+bal.creditDesComptes(i);
				 }
		   }
		   
		   for (int i=0;i<75;i++)
		   {
			   if ((bal.numeroCompte(i)>=700)&&(bal.numeroCompte(i)<800))  
				 {
			   totalProduit+=bal.debitDesComptes(i)+bal.creditDesComptes(i);
				 }
		   }
		   
		   vLigne5 = new Vector(); 
		   vLigne5.add("");
		   vLigne5.add(""+totalCharge);
		   vColonne5.add(vLigne5);
		   
		   vLigne6 = new Vector(); 
		   vLigne6.add("");
		   vLigne6.add(""+totalProduit);
		   vColonne6.add(vLigne6); 

		   

		rentabilite+=totalCharge+totalProduit;
		
		   
		   
		   if (rentabilite>0)
		   { 
			   vLigne5 = new Vector(); 
			   vLigne5.add("Bénéfice");
			   vLigne5.add(""+rentabilite);
			   vColonne5.add(vLigne5); 
		   }
		   else if (rentabilite<0)
		   {
			   vLigne6 = new Vector(); 
			   vLigne6.add("Perte");
			   vLigne6.add(""+rentabilite);
			   vColonne6.add(vLigne6);
		   }
		   jTable5= new JTable(vColonne5,nomColonne5);
	   	   jTable6= new JTable(vColonne6,nomColonne6);

		   vLigne3 = new Vector(); 
		   vLigne3.add("Total : ");	   
		   vLigne4 = new Vector();
		   vLigne4.add("Total : ");
		   
		   if (rentabilite>0)
		   {
		   vLigne3.add(""+(totalCharge-rentabilite));
		   vLigne4.add(""+totalProduit);
		   }
		   else if (rentabilite<0)
		   {
		   vLigne3.add(""+totalCharge); 
		   vLigne4.add(""+(totalProduit-rentabilite));   
		   }
		   
		   vColonne3.add(vLigne3); 
		   vColonne4.add(vLigne4); 
		   

	   	   jTable3= new JTable(vColonne3,nomColonne3);
	   	   jTable4= new JTable(vColonne4,nomColonne4);

		hBox=Box.createHorizontalBox();
		hBox.setPreferredSize(new Dimension(600, 400));
		
		hBox2= Box.createHorizontalBox();
	    hBox2.setPreferredSize(new Dimension(600,50));
	    
	    hBox3= Box.createHorizontalBox();
	    hBox3.setPreferredSize(new Dimension(600, 70));
	    
	    vBox= Box.createVerticalBox();
	    vBox.setPreferredSize(new Dimension(600, 500));
	    vBox.setBorder(BorderFactory.createLineBorder(Color.blue, 1));    
		vBox.setBorder(BorderFactory.createTitledBorder("Compte de résultat"+date));	
	
		
		JScrollPane jS1 = new JScrollPane(jTable1);
		jS1.setPreferredSize(new Dimension(600,200));
		hBox.add(jS1); 
		JScrollPane jS2 = new JScrollPane(jTable2);
		jS2.setPreferredSize(new Dimension(600,200));
		hBox.add(jS2);
		JScrollPane jS3 = new JScrollPane(jTable3);
		jS3.setPreferredSize(new Dimension(600,50));
		hBox2.add(jS3); 
		JScrollPane jS4 = new JScrollPane(jTable4);
		jS4.setPreferredSize(new Dimension(600,50));
		hBox2.add(jS4);
		JScrollPane jS5 = new JScrollPane(jTable5);
		jS3.setPreferredSize(new Dimension(600,50));
		hBox3.add(jS5); 
		JScrollPane jS6 = new JScrollPane(jTable6);
		jS4.setPreferredSize(new Dimension(600,50));
		hBox3.add(jS6);
		
	    vBox.add(hBox);
	    vBox.add(hBox3);
	    vBox.add(hBox2);
		
		setVisible(true);
		
	}
	
	public void affiche()
	{
		Pa.add(vBox);	
	}
	
	
	public int getResultat()
	{
		return rentabilite;
	}
}
