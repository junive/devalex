import javax.swing.*;

import java.awt.*;
import java.awt.event.*;

public class Resultat extends JFrame implements ActionListener
{
	private JPanel Pa;
	private Container conte;
	private JButton valider;
	private BalanceFinaleAffich j;
	private ResultatAffich r;
	private SelectionDate selecDateDebut,selecDateFin;
	private String date;
	private JLabel datD,datF,espace;
	
	public Resultat()
	{   super();
		this.setResizable(false);
	
		setLayout(new BorderLayout(5,5));
		conte=getContentPane();
		Pa=new JPanel();
		selecDateDebut=new SelectionDate();
		selecDateDebut.affichJour();
		selecDateDebut.affichMois();
		selecDateDebut.affichAnnee();
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
		
		datD = new JLabel("                 Date Début:     ");
		datF = new JLabel("                 Date Fin:     ");
		espace = new JLabel("           ");
		
		Pa.add(datD);
		Pa.add(selecDateDebut);
		Pa.add(datF);
		Pa.add(selecDateFin);
		Pa.add(espace);
		Pa.add(valider);
		add(Pa);
       	
		//Affichage du journal
		j=new BalanceFinaleAffich(selecDateFin.getJour(),selecDateFin.getMois(),selecDateFin.getAnnee(),selecDateDebut.getAnnee()+"-"+selecDateDebut.getMois()+"-"+selecDateDebut.getJour());
		r= new ResultatAffich(j,"");
		r.affiche();
		r.setPreferredSize(new Dimension(600, 600));    
		conte.add(r,BorderLayout.SOUTH);

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
		j=new BalanceFinaleAffich(selecDateFin.getJour(),selecDateFin.getMois(),selecDateFin.getAnnee(),selecDateDebut.getAnnee()+"-"+selecDateDebut.getMois()+"-"+selecDateDebut.getJour());
		date=" du "+ selecDateDebut.getJour()+"/"+selecDateDebut.getMois()+"/"+selecDateDebut.getAnnee()+" au "+selecDateFin.getJour()+"/"+selecDateFin.getMois()+"/"+selecDateFin.getAnnee();
		r= new ResultatAffich(j,date);
		r.affiche();
		r.setPreferredSize(new Dimension(600, 600));  
        conte.add(r, BorderLayout.SOUTH);
       
        r.revalidate(); 
	
		}
	}
}
