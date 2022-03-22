import javax.swing.*;

import java.awt.*;
import java.sql.*;

import java.awt.event.*;
import java.awt.event.ActionListener;
import java.io.*;
import java.util.*;

public class PlanComptable extends JFrame 
{	private JPanel Pa;
	private BorderLayout Borde; 
	private Container conte;
	private JLabel text1,text2;
	private Box hBox,hBox2,vBox,petitVbox;
	private ConnexionPlan connex;
	private JTable jTable1;
	private JTable jTable2;
	private JTable jTable3;
	private JTable jTable4;
	private JTable jTable5;
	private JTable jTable6;
	private JTable jTable7;
	
	private Vector vColonne1 = new Vector(),nomColonne1=new Vector();
	private Vector vColonne2 = new Vector(),nomColonne2=new Vector();
	private Vector vColonne3 = new Vector(),nomColonne3=new Vector();
	private Vector vColonne4 = new Vector(),nomColonne4=new Vector();
	private Vector vColonne5 = new Vector(),nomColonne5=new Vector();
	private Vector vColonne6 = new Vector(),nomColonne6=new Vector();
	private Vector vColonne7 = new Vector(),nomColonne7=new Vector();
	
	
	
	public  PlanComptable() 
	{	
		this.setResizable(false);
		Borde=new BorderLayout(5,5);
		conte=getContentPane();
		Pa=new JPanel();
		setLocation(50,50);
		setSize(850,800);
		setTitle("Plan Comptable");
		Font f = new Font("Times New Roman", Font.BOLD,16);
		connex=new ConnexionPlan();
		
		nomColonne1.add("Capitaux");
		nomColonne1.add("1");
		nomColonne2.add("Immobilisations");
  	  	nomColonne2.add("2");   
  	  	nomColonne3.add("Stocks");
  	  	nomColonne3.add("3");
  	  	nomColonne4.add("Tiers");
  	  	nomColonne4.add("4");
  	  	nomColonne5.add("Financiers");
  	  	nomColonne5.add("5");
  	  	nomColonne6.add("Charges");
  	  	nomColonne6.add("6");
  	  	nomColonne7.add("Produits");
  	  	nomColonne7.add("7");
	  
		    hBox= Box.createHorizontalBox();
		    hBox.setPreferredSize(new Dimension(400, 275));
	   
		    hBox2= Box.createHorizontalBox();
		    hBox2.setPreferredSize(new Dimension(400, 475));
	
		    vBox= Box.createVerticalBox();
		    vBox.setPreferredSize(new Dimension(800, 750));
		    vBox.setBorder(BorderFactory.createLineBorder(Color.blue, 1));    
		    vBox.setBorder(BorderFactory.createTitledBorder("Plan comptable"));
		    petitVbox= Box.createVerticalBox();
		    
		    for (int i=0;i<65;i++)  
		  	 {

		      if (((connex.getOrdre(i))>0)&& ((connex.getOrdre(i))<=4))
		      {
		    	  Vector vLigne = new Vector(); 
		    	  vLigne.add(""+connex.getNumC(i));
		    	  vLigne.add(""+connex.getNomC(i));
		    	  vColonne1.add(vLigne);  
		      }
		      jTable1= new JTable(vColonne1,nomColonne1);
		      
		      if (((connex.getOrdre(i))>4)&& ((connex.getOrdre(i))<=13))
		      {
		    	  Vector vLigne = new Vector(); 
		    	  vLigne.add(""+connex.getNumC(i));
		    	  vLigne.add(""+connex.getNomC(i));
		    	  vColonne2.add(vLigne);  
		      }
		      jTable2= new JTable(vColonne2,nomColonne2); 
		      
		      if (((connex.getOrdre(i))>13)&& ((connex.getOrdre(i))<=16))
		      {
		    	  Vector vLigne = new Vector(); 
		    	  vLigne.add(""+connex.getNumC(i));
		    	  vLigne.add(""+connex.getNomC(i));
		    	  vColonne3.add(vLigne);  
		      }
		      jTable3= new JTable(vColonne3,nomColonne3); 
		      
		      if (((connex.getOrdre(i))>16)&& ((connex.getOrdre(i))<=31))
		      {
		    	  Vector vLigne = new Vector(); 
		    	  vLigne.add(""+connex.getNumC(i));
		    	  vLigne.add(""+connex.getNomC(i));
		    	  vColonne4.add(vLigne);  
		      }
		      jTable4= new JTable(vColonne4,nomColonne4); 
		      
		      if (((connex.getOrdre(i))>31)&& ((connex.getOrdre(i))<=34))
		      {
		    	  Vector vLigne = new Vector(); 
		    	  vLigne.add(""+connex.getNumC(i));
		    	  vLigne.add(""+connex.getNomC(i));
		    	  vColonne5.add(vLigne);  
		      }
		      jTable5= new JTable(vColonne5,nomColonne5); 
		      
		      if (((connex.getOrdre(i))>34)&& ((connex.getOrdre(i))<=57))
		      {
		    	  Vector vLigne = new Vector(); 
		    	  vLigne.add(""+connex.getNumC(i));
		    	  vLigne.add(""+connex.getNomC(i));
		    	  vColonne6.add(vLigne);  
		      }
		      jTable6= new JTable(vColonne6,nomColonne6); 
		      
		      if (((connex.getOrdre(i))>57)&& ((connex.getOrdre(i))<=65))
		      {
		    	  Vector vLigne = new Vector(); 
		    	  vLigne.add(""+connex.getNumC(i));
		    	  vLigne.add(""+connex.getNomC(i));
		    	  vColonne7.add(vLigne);  
		      }
		      jTable7= new JTable(vColonne7,nomColonne7); 

		   }
		      
			
		    JScrollPane jS1 = new JScrollPane(jTable1);
			jS1.setPreferredSize(new Dimension(200,100));
			petitVbox.add(jS1);
			JScrollPane jS3 = new JScrollPane(jTable3);
			jS3.setPreferredSize(new Dimension(200,67));
			petitVbox.add(jS3);
			hBox.add(petitVbox);
			JScrollPane jS2 = new JScrollPane(jTable2);
			jS2.setPreferredSize(new Dimension(200,163));
			hBox.add(jS2);

			JScrollPane jS4 = new JScrollPane(jTable4);
			jS4.setPreferredSize(new Dimension(200,100));
			hBox.add(jS4);
			JScrollPane jS5 = new JScrollPane(jTable5);
			jS5.setPreferredSize(new Dimension(200,100));
			hBox2.add(jS5);
			JScrollPane jS6 = new JScrollPane(jTable6);
			jS6.setPreferredSize(new Dimension(200,300));
			hBox2.add(jS6);
			JScrollPane jS7 = new JScrollPane(jTable7);
			jS7.setPreferredSize(new Dimension(200,100));
			hBox2.add(jS7);
			
			
			vBox.add(hBox);
			vBox.add(hBox2);
			Pa.add(vBox);
			add(Pa,BorderLayout.CENTER);
			setVisible(true);
  } 


}