import java.awt.BorderLayout;
import java.awt.Color;

import javax.swing.*;

public class SelectionDate extends JPanel
{
	private JPanel Pa;
	private JComboBox jour,mois,annee;
	
	public SelectionDate()
	{
		setLayout(new BorderLayout(5,5));
		Pa=new JPanel();
		add(Pa,BorderLayout.CENTER);
		Pa.setBackground(Color.white);
		
		mois=new JComboBox();
		for(int i=1;i<10;i++)
		{mois.addItem("0"+i);}
		mois.addItem("10");
		mois.addItem("11");
		mois.addItem("12");
		
		annee=new JComboBox();
		annee.addItem("2006");
		annee.addItem("2007");
		annee.addItem("2008");
		annee.addItem("2009");
		
		jour=new JComboBox();
		for(int i=1;i<10;i++)
		{jour.addItem("0"+i);}
		for(int i=10;i<=31;i++)
		{jour.addItem(i+"");}
		
	}
	
	public void affichJour()
	{
		Pa.add(jour);
	}
	
	public void affichMois()
	{
		Pa.add(mois);
	}
	public void affichAnnee()
	{
		Pa.add(annee);
	}
	
	public String getJour()
	{
		return jour.getSelectedItem().toString();
	}
	
	public String getMois()
	{
		return mois.getSelectedItem().toString();
	}
	
	public String getAnnee()
	{
		return annee.getSelectedItem().toString();
	}
	

	

}
