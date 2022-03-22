import javax.swing.*;

import java.awt.*;
import java.sql.*;
import java.awt.event.*;

public class AffichageJournal extends JFrame implements ActionListener
{
	private JPanel Pa;
	private JLabel dat,espace;
	private Container conte;
	private JButton valider;
	private JournalAffich j;
	private SelectionDate selecDate;
	
	public AffichageJournal()
	{   super();
		
		this.setResizable(false);
		setLayout(new BorderLayout(5,5));
		conte=getContentPane();
		Pa=new JPanel();
		selecDate=new SelectionDate();
		selecDate.affichMois();
		selecDate.affichAnnee();
		//Initialisation des composants de la balance initiale

		
		
		//Bouton de validation d'insertion
		valider=new JButton("Valider");
		valider.addActionListener(this);
		
		setLocation(50,50);
		setSize(600,600);
		setTitle("Affichage du journal");
		
		dat = new JLabel("        Date :   ");
		espace = new JLabel("           ");
		
		Pa.add(dat);
		Pa.add(selecDate);
		Pa.add(espace);
		Pa.add(valider);
		add(Pa);
       	
		//Affichage du journal
		j=new JournalAffich("","00","0000"); 
		
		j.setPreferredSize(new Dimension(600, 500));    
		conte.add(j,BorderLayout.SOUTH);

		setVisible(true);		
	}
	

	public void actionPerformed(ActionEvent e)
	{ Object source = e.getSource();	
	
		if(source == valider)
		{
		
		synchronized(this) 
     	  {try {wait(1000);}
	    	catch(InterruptedException ex){ ex.printStackTrace(); }} 
     	  
     	  //On instancie l'affichage des insertions
		j=new JournalAffich("",selecDate.getMois(),selecDate.getAnnee()); 
        j.setPreferredSize(new Dimension(600,500));
        conte.add(j, BorderLayout.SOUTH);
       
        j.revalidate(); 
        
        //on rafraichit le message d'erreur et le solde  
         
	
		}
	}
}
