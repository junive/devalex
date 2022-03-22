import javax.swing.*;

import java.awt.*;
import java.sql.*;
import java.awt.event.*;

public class GrandLivre extends JFrame implements ActionListener
{
	private JPanel Pa;
	private JLabel dat,cpts,espace;
	private Container conte;
	private JButton valider;
	private GrandLivreAffich g;
	private SelectionPlan selecPlan;
	private SelectionDate selecDate;
	
	public GrandLivre()
	{   super();
		this.setResizable(false);
		
		//Initialisation des objets  "Jcombobox" du plan;
		selecPlan=new SelectionPlan();
		selecDate=new SelectionDate();
			
		setLayout(new BorderLayout(5,5));
		conte=getContentPane();
		Pa=new JPanel();

		valider=new JButton("Valider");
		valider.addActionListener(this);
		
		setLocation(50,50);
		setSize(700,700);
		setTitle("Grand Livre");
		
		dat = new JLabel("           Date :   ");
		cpts = new JLabel("            N° Comptes :   ");
		espace = new JLabel("           ");
		
		selecDate.affichMois();
		selecDate.affichAnnee();
		
		Pa.add(dat);
		Pa.add(selecDate);
		Pa.add(cpts);
		Pa.add(selecPlan);
		Pa.add(espace);
		Pa.add(valider);
		add(Pa);
		
		g=new GrandLivreAffich("00","0000",00); 
		g.setPreferredSize(new Dimension(700, 600));    
		conte.add(g,BorderLayout.SOUTH);

		setVisible(true);		
	}

	

	public void actionPerformed(ActionEvent e)
	{ Object source = e.getSource();	

		if(source == valider)
		{			
	       	 //Syntaxe d'attente obligatoire car l'affichage prend un certain lapse de temps.		
	        synchronized(this){try {wait(1000);}
  		    catch(InterruptedException ex){ ex.printStackTrace(); }} 
	       
	  		g=new GrandLivreAffich(selecDate.getMois(),selecDate.getAnnee(),selecPlan.getNumC()); 
			g.setPreferredSize(new Dimension(700, 600));    
			conte.add(g,BorderLayout.SOUTH);
			g.revalidate(); 
		}

				
	}
	

}