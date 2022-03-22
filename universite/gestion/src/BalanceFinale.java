import javax.swing.*;

import java.awt.*;
import java.awt.event.*;

public class BalanceFinale extends JFrame implements ActionListener
{
	private JPanel Pa;
	private Container conte;
	private JButton valider;
	private BalanceFinaleAffich j;
	private SelectionDate selecDate;
	private JLabel dat,espace;
	
	public BalanceFinale()
	{   super();
		this.setResizable(false);
	
		setLayout(new BorderLayout(5,5));
		conte=getContentPane();
		Pa=new JPanel();
		selecDate=new SelectionDate();
		selecDate.affichJour();
		selecDate.affichMois();
		selecDate.affichAnnee();

		//Bouton de validation d'insertion
		valider=new JButton("Valider");
		valider.addActionListener(this);
		
		setLocation(50,50);
		setSize(700,700);
		setTitle("Balance Finale");
		
		dat = new JLabel("                 Date de la Balance:     ");
		espace = new JLabel("           ");
		
		Pa.add(dat);
		Pa.add(selecDate);
		Pa.add(espace);
		Pa.add(valider);
		add(Pa);
       	
		//Affichage du journal
		j=new BalanceFinaleAffich(selecDate.getJour(),selecDate.getMois(),selecDate.getAnnee(), null);
		j.afficher();
		j.setPreferredSize(new Dimension(700, 600));    
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
		j=new BalanceFinaleAffich(selecDate.getJour(),selecDate.getMois(),selecDate.getAnnee(),null);
		j.afficher();
		j.setPreferredSize(new Dimension(700,600));
        conte.add(j, BorderLayout.SOUTH);
       
        j.revalidate(); 
        
        //on rafraichit le message d'erreur et le solde  
         
	
		}
	}
}
