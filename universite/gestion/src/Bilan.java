import javax.swing.*;

import java.awt.*;
import java.awt.event.*;

public class Bilan extends JFrame implements ActionListener
{
	private JPanel Pa;
	private Container conte;
	private JButton valider;
	private BalanceFinaleAffich j;
	private ResultatAffich r;
	private BilanAffich b;
	private SelectionDate selecDateFin;
	private String date;
	private JLabel datF,espace;
	
	public Bilan()
	{   super();
		this.setResizable(false);
	
		setLayout(new BorderLayout(5,5));
		conte=getContentPane();
		Pa=new JPanel();

		selecDateFin=new SelectionDate();
		selecDateFin.affichJour();
		selecDateFin.affichMois();
		selecDateFin.affichAnnee();
	
		//Bouton de validation d'insertion
		valider=new JButton("Valider");
		valider.addActionListener(this);
		
		setLocation(50,50);
		setSize(700,700);
		setTitle("Compte de résultat");
		
		datF = new JLabel("                 Date du Bilan:     ");
		espace = new JLabel("           ");
		
		Pa.add(datF);
		Pa.add(selecDateFin);
		Pa.add(espace);
		Pa.add(valider);
		
		add(Pa);
       	
		//Affichage du journal
		j=new BalanceFinaleAffich(selecDateFin.getJour(),selecDateFin.getMois(),selecDateFin.getAnnee(),null);
		r=new ResultatAffich(j,"");
		b= new BilanAffich(j,r,"","","");
		b.setPreferredSize(new Dimension(600, 600));    
		conte.add(b,BorderLayout.SOUTH);

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
		j=new BalanceFinaleAffich(selecDateFin.getJour(),selecDateFin.getMois(),selecDateFin.getAnnee(),null);
		date="au "+selecDateFin.getJour()+"/"+selecDateFin.getMois()+"/"+selecDateFin.getAnnee(); 
		r=new ResultatAffich(j,"");
		b= new BilanAffich(j,r,"","","");
		b.setPreferredSize(new Dimension(600, 600));  
        conte.add(b, BorderLayout.SOUTH);
       
        b.revalidate(); 
	
		}
	}
}
