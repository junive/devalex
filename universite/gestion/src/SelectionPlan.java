import javax.swing.*;

import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;


public class SelectionPlan extends JPanel implements ActionListener
{
	private JPanel Pa;	
	private JComboBox liste,listeCompte;
	private String verif,nomCompte;
	private JLabel message;
	private ConnexionPlan c;
	private int numCompte, ordre;;
	
	public SelectionPlan()
	{   super();
	
	//Connexion au plan comptable
	c=new ConnexionPlan();
	
	//Liste déroulante + son panneau
	setLayout(new BorderLayout(5,5));
	Pa=new JPanel();
	add(Pa,BorderLayout.CENTER);
	liste=new JComboBox();
	listeCompte=new JComboBox();
	
	message=new JLabel(c.getNumC(0)+" - "+c.getNomC(0));
	verif=c.getNumC(0)+" - "+c.getNomC(0);
	
	//Initilisation des sous comptes principaux
	listeCompte.addItem("1 - Capitaux");
	listeCompte.addItem("2 - Immobilisations");
	listeCompte.addItem("3 - Stocks");
	listeCompte.addItem("4 - Tiers");
	listeCompte.addItem("5 - Financiers");
	listeCompte.addItem("6 - Charges");
	listeCompte.addItem("7 - Produits");
	
	//Initilisation des sous comptes
	for (int i=0;i<=10;i++)
   {if ((c.getNumC(i)>=10)&&(c.getNumC(i)<20)||(c.getNumC(i)>=100)&&(c.getNumC(i)<200))
	  {liste.addItem(c.getNumC(i)+" - "+c.getNomC(i));}} 
	
	
			listeCompte.addActionListener(new ActionListener() 
			{
					public void actionPerformed(ActionEvent e)
					{ 	
					  if ((listeCompte.getSelectedIndex())==0||(listeCompte.getSelectedIndex()==1)||
						(listeCompte.getSelectedIndex()==2)||(listeCompte.getSelectedIndex()==3)||
						(listeCompte.getSelectedIndex()==4)||(listeCompte.getSelectedIndex()==5)||
						(listeCompte.getSelectedIndex()==6))
					  {  
					  //On Vide La liste des sous Comptes
					  while (liste.getItemCount()!=2)
					  {liste.removeItemAt(2);}  
					  }
					  
					  liste.removeItemAt(1); 
						
					  // Ajout des Capitaux
					  if (listeCompte.getSelectedIndex()==0)
					  {
						  for (int i=0;i<=10;i++)
						  {if ((c.getNumC(i)>=10)&&(c.getNumC(i)<20)||(c.getNumC(i)>=100)&&(c.getNumC(i)<200))
						  {liste.addItem(c.getNumC(i)+" - "+c.getNomC(i));}} 
					   
					   liste.removeItemAt(0); 
					   }
					  
					  //Ajout des Immobilisations
					  if (listeCompte.getSelectedIndex()==1)
					  { 
					        for (int i=3;i<20;i++)
					        {if ((c.getNumC(i)>=200)&&(c.getNumC(i)<300))
					        {liste.addItem(c.getNumC(i)+" - "+c.getNomC(i));}} 
				   
				       liste.removeItemAt(0);
					   }
					  
					  // Ajout des Stocks
					  if (listeCompte.getSelectedIndex()==2)
					  {
						  for (int i=0;i<=30;i++)
						  {if ((c.getNumC(i)>=30)&&(c.getNumC(i)<40)||(c.getNumC(i)>=300)&&(c.getNumC(i)<400))
						  {liste.addItem(c.getNumC(i)+" - "+c.getNomC(i));}} 
					   
					   liste.removeItemAt(0);
					   }
					  
					  if (listeCompte.getSelectedIndex()==3)
					  {
						  for (int i=0;i<70;i++)
						  {if ((c.getNumC(i)>=400)&&(c.getNumC(i)<500)||(c.getNumC(i)>=4000)&&(c.getNumC(i)<5000)||(c.getNumC(i)>=40000)&&(c.getNumC(i)<50000))
						  {liste.addItem(c.getNumC(i)+" - "+c.getNomC(i));}} 
					   
					   liste.removeItemAt(0);
					   }
					  
					  if (listeCompte.getSelectedIndex()==4)
					  {
						  for (int i=0;i<70;i++)
						  {if ((c.getNumC(i)>=50)&&(c.getNumC(i)<60)||(c.getNumC(i)>=500)&&(c.getNumC(i)<600))
						  {liste.addItem(c.getNumC(i)+" - "+c.getNomC(i));}} 
					   
					   liste.removeItemAt(0);
					   }
					  
					  if (listeCompte.getSelectedIndex()==5)
					  {
						  for (int i=0;i<70;i++)
						  {if ((c.getNumC(i)>=60)&&(c.getNumC(i)<70)||(c.getNumC(i)>=600)&&(c.getNumC(i)<700))
						  {liste.addItem(c.getNumC(i)+" - "+c.getNomC(i));}} 
					   
					   liste.removeItemAt(0);
					   }
					  
					  if (listeCompte.getSelectedIndex()==6)
					  {
						  for (int i=0;i<70;i++)
						  {if ((c.getNumC(i)>=700)&&(c.getNumC(i)<800)||(c.getNumC(i)>=70)&&(c.getNumC(i)<80))
						  {liste.addItem(c.getNumC(i)+" - "+c.getNomC(i));}} 
					   
					   liste.removeItemAt(0);
					   }
					  
					}
			});	
			
			liste.addActionListener(new ActionListener() 
					{
					public void actionPerformed(ActionEvent e)
						 {
						message.setText(" "+((JComboBox)e.getSource()).getSelectedItem());
						 verif=((JComboBox)e.getSource()).getSelectedItem().toString();
						 }
					});
			
	
			
			
	Pa.add(listeCompte);
	Pa.add(liste);

	setVisible(true);
	}
	
	public String getSelec()
	{return this.verif;}
	
	public JLabel getSelecEnCours()
	{return this.message;}
	
	public int getNumC()
	{
		for (int i=0;i<70;i++)
     	  {	
	    	if (liste.getSelectedItem().equals(c.getNumC(i)+" - "+c.getNomC(i))) 
	    	 {//On compare le menu séléctionner avec notre tableau   
	      			numCompte=c.getNumC(i); 
             }
     	  }	
		return numCompte;
	}
	
	public String getNomC()
	{
		for (int i=0;i<70;i++)
   	  {	
	    	if (liste.getSelectedItem().equals(c.getNumC(i)+" - "+c.getNomC(i))) 
	    	 {//On compare le menu séléctionner avec notre tableau   
	      			nomCompte=c.getNomC(i); 
	    	 }
   	  }	
		return nomCompte;
	}
	
	public int getOrdre()
	{ 
		for (int i=0;i<70;i++)
   	  {	
	    	if (liste.getSelectedItem().equals(c.getNumC(i)+" - "+c.getNomC(i))) 
	    	 {//On compare le menu séléctionner avec notre tableau   
	      			ordre=c.getOrdre(i); 
	    	 }
   	  }	
		return ordre;
	}
	
	public void actionPerformed(ActionEvent e){}
}
