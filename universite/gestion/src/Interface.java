import javax.swing.*;
import java.awt.*;
import java.awt.event.*;


public class Interface extends JFrame implements ActionListener
{
	
	private BorderLayout bord;
	private Container cont;	
	private JPanel panneau;
	private JMenuBar barre;
	private JMenu fichier,journal,grandLivre,balance,compteResultat,bilan,planComptable;
	private JMenuItem nouveau,quitter,ajouterJournal,afficherJournal,afficherGrandLivre,
	balanceInitiale,balanceFinale,afficherCompteResultat,afficherBilan,afficherPlanComptable;	
	
		public Interface() 
		{
		super();
		this.setResizable(false);
		
		cont=getContentPane();
		bord=new BorderLayout(5,5);
		panneau=new JPanel();
		
		panneau.setBackground(Color.white);
		setLocation(100,100);
		setSize(600,600);
		setTitle("Gestion Compta 2006");	
		JButton b=new JButton();
		ImageIcon fem= new ImageIcon("femme.JPG");


		
		
		//Menu
		barre=new JMenuBar();
		fichier=new JMenu("Fichier");
		nouveau=new JMenuItem("Nouveau");
		quitter=new JMenuItem("Quitter");
		
		journal=new JMenu("Journal");
		ajouterJournal=new JMenuItem("Ajouter");
		afficherJournal=new JMenuItem("Afficher");
		
		grandLivre=new JMenu("Grand Livre");
		afficherGrandLivre=new JMenuItem("Afficher Livre");
		
		balance=new JMenu("Balance");
		balanceInitiale=new JMenuItem("Initiale");
		balanceFinale=new JMenuItem("Finale");
		
		compteResultat=new JMenu("Compte de Résultat");
		afficherCompteResultat=new JMenuItem("Afficher Compte");
		
		bilan=new JMenu("Bilan");
		afficherBilan=new JMenuItem("Afficher Bilan");
		planComptable=new JMenu("Plan Comptable");
		afficherPlanComptable=new JMenuItem("Afficher Plan");
		
		// Ajout du Menu
		barre.add(fichier);
		fichier.add(nouveau);
	
		fichier.add(quitter);
		
		barre.add(journal);
		journal.add(ajouterJournal);
		journal.add(afficherJournal);
		
		barre.add(grandLivre);
		grandLivre.add(afficherGrandLivre);
		
		barre.add(balance);
		balance.add(balanceInitiale);
		balance.add(balanceFinale);
		
		barre.add(compteResultat);
		compteResultat.add(afficherCompteResultat);
		
		barre.add(bilan);
		bilan.add(afficherBilan);
		
		barre.add(planComptable);
		planComptable.add(afficherPlanComptable);
		
		// Actions
		fichier.addActionListener(this);
		nouveau.addActionListener(this);
		
		quitter.addActionListener(this);
		
		journal.addActionListener(this);
		ajouterJournal.addActionListener(this);
		afficherJournal.addActionListener(this);
		
		grandLivre.addActionListener(this);
		afficherGrandLivre.addActionListener(this);
			
		balance.addActionListener(this);
		balanceInitiale.addActionListener(this);
		balanceFinale.addActionListener(this);
		
		compteResultat.addActionListener(this);
		afficherCompteResultat.addActionListener(this);
			
		bilan.addActionListener(this);
		afficherBilan.addActionListener(this);
		
		planComptable.addActionListener(this);
		afficherPlanComptable.addActionListener(this);
		
		//On insère dans le conteneur le menu en nord
		JLabel fond=new JLabel();
		fond.setIcon(fem);
		panneau.add(fond);
		cont.add(barre,BorderLayout.NORTH);
		cont.add(panneau,BorderLayout.CENTER);
		//Sortie Propre
		addWindowListener(new WindowAdapter()
		{public void windowClosing(WindowEvent e){
		System.exit(0);}});

		setVisible(true);
		}
	

	
	public void actionPerformed(ActionEvent e)
	{

		if(e.getSource() == nouveau)
		{Nouveau n=new Nouveau();}
			
		
		if(e.getSource() == quitter)
		{System.exit(0);}

		if(e.getSource() == journal)
		{}
		
		if(e.getSource() == ajouterJournal)
		{AjoutJournal Aj=new AjoutJournal();}
		
		if(e.getSource() == afficherJournal)
		{AffichageJournal a=new AffichageJournal();}
		
		if(e.getSource() == grandLivre)
		{}
		
		if(e.getSource() == afficherGrandLivre)
		{GrandLivre g=new GrandLivre();}
		
		if(e.getSource() == balance)
		{}
		
		if(e.getSource() == balanceInitiale)
		{BalanceInitiale b=new BalanceInitiale();
		panneau.setVisible(false);
		cont.add(b,BorderLayout.CENTER);
		}
		if(e.getSource() == balanceFinale)
		{BalanceFinale b=new BalanceFinale();}
		
		if(e.getSource() == compteResultat)
		{}
		
		if(e.getSource() == afficherCompteResultat)
		{Resultat r=new Resultat();}
		
		if(e.getSource() == bilan)
		{}

		if(e.getSource() == afficherBilan)
		{Bilan bi=new Bilan();}
		
		if(e.getSource() == planComptable)
		{}
		
		if(e.getSource() == afficherPlanComptable)
		{PlanComptable plan=new PlanComptable();}

	}

}

