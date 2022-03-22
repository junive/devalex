import java.awt.BorderLayout;
import java.awt.Color;
import java.awt.Dimension;
import java.sql.*;
import java.util.Vector;

import javax.swing.*;

public class BilanAffich extends JPanel
{

	private JPanel Pa;
	private Box hBox,hBox2,vBox;
	private Vector vLigne1,vLigne2, vColonne1 = new Vector(), vColonne2 = new Vector(),nomColonne1=new Vector(),nomColonne2=new Vector();
	private Vector vLigne3,vLigne4, vColonne3 = new Vector(), vColonne4 = new Vector(),nomColonne3=new Vector(),nomColonne4=new Vector();
	private JTable jTable1,jTable2,jTable3,jTable4;
	private int totalImmo=0,totalPropre=0,totalDette=0,totalCirculant=0,totalActif=0,totalPassif=0,rentabilite=0,totalCharge=0,totalProduit=0,Final=0;


	
	public BilanAffich(BalanceFinaleAffich bal,ResultatAffich res, String jo, String mo, String an)
	{
		super();
		
		setDoubleBuffered(true);
		setLayout(new BorderLayout(5,5));
		Pa=new JPanel();
		

		
		Pa.getGraphics();
		add(Pa,BorderLayout.CENTER);

		
		
		  
		   
		    nomColonne1.add("ACTIF");
		    nomColonne1.add("");
		    nomColonne2.add("PASSIF");
		    nomColonne2.add("");
		    nomColonne3.add("TOTAL ACTIF");
		    nomColonne3.add("");
		    nomColonne4.add("TOTAL PASSIF");
		    nomColonne4.add("");
 
		    
		    vLigne1 = new Vector(); 
			vLigne1.add("ACTIF IMMOBILISE : ");
			vLigne1.add("");
			vColonne1.add(vLigne1);
	   
		   for (int i=0;i<65;i++)
		   {
			 if ((bal.numeroCompte(i)>=200)&&(bal.numeroCompte(i)<300)||(bal.numeroCompte(i)>=20)&&(bal.numeroCompte(i)<30))  
			 {
					
						
					
				   vLigne1 = new Vector(); 
				   vLigne1.add(bal.nomDeCompte(i));
				   vLigne1.add(""+(bal.debitDesComptes(i)+bal.creditDesComptes(i)));
				   vColonne1.add(vLigne1);	
				   totalImmo+=bal.debitDesComptes(i)+bal.creditDesComptes(i);
			 }
		   }
		   vLigne1 = new Vector(); 
		   vLigne1.add("");
		   vLigne1.add("");
		   vColonne1.add(vLigne1);
		   
		   vLigne1 = new Vector(); 
		   vLigne1.add("TOT. Actif immobilisé : ");
		   vLigne1.add(""+totalImmo);
		   vColonne1.add(vLigne1);
		   
		   
		   
		   vLigne2 = new Vector(); 
		   vLigne2.add("CAPITAUX PROPRES : ");
		   vLigne2.add("");
		   vColonne2.add(vLigne2); 
		   
		   
		   
		   for (int i=0;i<65;i++)
		   {
			 if ((bal.numeroCompte(i)>=100)&&(bal.numeroCompte(i)<160))  
			 {
				 
				   vLigne2 = new Vector(); 
				   vLigne2.add(bal.nomDeCompte(i));
				   vLigne2.add(""+(bal.debitDesComptes(i)+bal.creditDesComptes(i)));
				   vColonne2.add(vLigne2);	 
				   totalPropre+=bal.debitDesComptes(i)+bal.creditDesComptes(i);
			 }
		   }
		   vLigne2 = new Vector(); 
		   vLigne2.add("Résultat ");
		   vLigne2.add(""+res.getResultat());
		   vColonne2.add(vLigne2);  
		   
		   
		   totalPropre+=res.getResultat();
		   
		   vLigne2 = new Vector(); 
		   vLigne2.add("");
		   vLigne2.add("");
		   vColonne2.add(vLigne2);
		   
		   vLigne2 = new Vector(); 
		   vLigne2.add("TOT. Capitaux propres : ");
		   vLigne2.add(""+totalPropre);
		   vColonne2.add(vLigne2);  
		   
		   vLigne1 = new Vector(); 
		   vLigne1.add("");
		   vLigne1.add("");
		   vColonne1.add(vLigne1);
		   
		    vLigne1 = new Vector(); 
			vLigne1.add("ACTIF CIRCULANT : ");
			vLigne1.add("");
			vColonne1.add(vLigne1);
	   
		   for (int i=0;i<65;i++)
		   {
			 if ((bal.numeroCompte(i)>=300)&&(bal.numeroCompte(i)<400)||(bal.numeroCompte(i)>=30)&&(bal.numeroCompte(i)<40)||
				 (bal.numeroCompte(i)>=500)&&(bal.numeroCompte(i)<600)||(bal.numeroCompte(i)>=50)&&(bal.numeroCompte(i)<60)||
				 (bal.numeroCompte(i)==411)||(bal.numeroCompte(i)==44567))  
			 {
				if (bal.numeroCompte(i)==512)
				{	if (bal.debitDesComptes(i)+bal.creditDesComptes(i)<=0)
					{
					vLigne1 = new Vector(); 
					   vLigne1.add(bal.nomDeCompte(i));
					   vLigne1.add(""+(bal.debitDesComptes(i)+bal.creditDesComptes(i)));
					   vColonne1.add(vLigne1);
					   totalCirculant+=bal.debitDesComptes(i)+bal.creditDesComptes(i);
					}
				}
				else
				{
				 vLigne1 = new Vector(); 
				   vLigne1.add(bal.nomDeCompte(i));
				   vLigne1.add(""+(bal.debitDesComptes(i)+bal.creditDesComptes(i)));
				   vColonne1.add(vLigne1);
				   totalCirculant+=bal.debitDesComptes(i)+bal.creditDesComptes(i);
				}
				 
				 /**
				 else
				 {
					 if (!boolTVA)
					 	{
						 vLigne1 = new Vector(); 
						   vLigne1.add(bal.nomDeCompte(i));
						   vLigne1.add(""+(bal.debitDesComptes(i)+bal.creditDesComptes(i)));
						   vColonne1.add(vLigne1);
						   totalCirculant+=bal.debitDesComptes(i)+bal.creditDesComptes(i);
					 	}
				 }
				 */
			 }
		   }
		   vLigne1 = new Vector(); 
		   vLigne1.add("");
		   vLigne1.add("");
		   vColonne1.add(vLigne1); 
		   
		   vLigne1 = new Vector(); 
		   vLigne1.add("TOT. Actif Circulant : ");
		   vLigne1.add(""+totalCirculant);
		   vColonne1.add(vLigne1);
		   
		   vLigne2 = new Vector(); 
		   vLigne2.add("");
		   vLigne2.add("");
		   vColonne2.add(vLigne2);
		   
		   vLigne2 = new Vector(); 
		   vLigne2.add("DETTES : ");
		   vLigne2.add("");
		   vColonne2.add(vLigne2); 
		   
		   
		   
		   
		   for (int i=0;i<65;i++)
		   {
			 if ((bal.numeroCompte(i)>=160)&&(bal.numeroCompte(i)<200)||(bal.numeroCompte(i)>=400)&&(bal.numeroCompte(i)<411)||
		(bal.numeroCompte(i)>=412)&&(bal.numeroCompte(i)<500)||	(bal.numeroCompte(i)==512)||	 
			(bal.numeroCompte(i)>=4000)&&(bal.numeroCompte(i)<5000)||(bal.numeroCompte(i)==44551))  
			 {
					if (bal.numeroCompte(i)==512)
					{	if (bal.debitDesComptes(i)+bal.creditDesComptes(i)>0)
						{
						vLigne2 = new Vector(); 
						   vLigne2.add(bal.nomDeCompte(i));
						   vLigne2.add(""+(bal.debitDesComptes(i)+bal.creditDesComptes(i)));
						   vColonne2.add(vLigne2);
						   totalDette+=bal.debitDesComptes(i)+bal.creditDesComptes(i);
						}
					}
					else
					{	
				 vLigne2 = new Vector(); 
				   vLigne2.add(bal.nomDeCompte(i));
				   vLigne2.add(""+(bal.debitDesComptes(i)+bal.creditDesComptes(i)));
				   vColonne2.add(vLigne2);
				   totalDette+=bal.debitDesComptes(i)+bal.creditDesComptes(i);	
					}
				 /**
				 else
				 {
					 if (boolTVA)
				 	{
					 vLigne2 = new Vector(); 
					 vLigne2.add(bal.nomDeCompte(i));
					 vLigne2.add(""+(bal.debitDesComptes(i)+bal.creditDesComptes(i)));
					  vColonne2.add(vLigne2);
					  totalDette+=bal.debitDesComptes(i)+bal.creditDesComptes(i);
				 	}
				 } */
			 }
		   }
		    
		   vLigne2 = new Vector(); 
		   vLigne2.add("");
		   vLigne2.add("");
		   vColonne2.add(vLigne2);
		   
		   vLigne2 = new Vector(); 
		   vLigne2.add("TOT. Dettes : ");
		   vLigne2.add(""+totalDette);
		   vColonne2.add(vLigne2); 
		    
		   for (int i=0;i<65;i++)
		   {
			   if ((bal.numeroCompte(i)>=600)&&(bal.numeroCompte(i)<700)||(bal.numeroCompte(i)>=60)&&(bal.numeroCompte(i)<70))  
				 {
			   totalCharge+=bal.debitDesComptes(i)+bal.creditDesComptes(i);
				 }
		   }
		   
		   for (int i=0;i<65;i++)
		   {
			   if ((bal.numeroCompte(i)>=700)&&(bal.numeroCompte(i)<800))  
				 {
			   totalProduit+=bal.debitDesComptes(i)+bal.creditDesComptes(i);
				 }
		   }

		   rentabilite+=totalCharge+totalProduit;
		
		   totalActif=totalImmo+totalCirculant;
		   totalPassif=totalPropre+totalDette;
		   
		   vLigne3 = new Vector(); 
		   vLigne3.add("");	   
		   vLigne3.add(""+totalActif);
		   vColonne3.add(vLigne3);
		   
		   
		   vLigne4 = new Vector();
		   vLigne4.add("");
		   vLigne4.add(""+totalPassif);
		   vColonne4.add(vLigne4);
		   
		   
		   
		   
		   
		   
		   
	   		jTable1= new JTable(vColonne1,nomColonne1);
	   		jTable2= new JTable(vColonne2,nomColonne2);
	   		jTable3= new JTable(vColonne3,nomColonne3);
	   		jTable4= new JTable(vColonne4,nomColonne4);	
	   		
		hBox=Box.createHorizontalBox();
		hBox.setPreferredSize(new Dimension(600, 325));
		hBox2=Box.createHorizontalBox();
		hBox2.setPreferredSize(new Dimension(600, 100));
		
		vBox=Box.createVerticalBox();
		vBox.setBorder(BorderFactory.createLineBorder(Color.blue, 1));
	    vBox.setBorder(BorderFactory.createTitledBorder("Bilan"));
	    vBox.setPreferredSize(new Dimension(600, 550));	
	    
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
	    
	    vBox.add(hBox);
	    vBox.add(hBox2);
	    
	    Pa.add(vBox);
		
		
		setVisible(true);
		
	}
	
	public int getResultat()
	{
		return rentabilite;
	}
}
