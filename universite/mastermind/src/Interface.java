import javax.swing.*;

import java.awt.*;
import java.awt.event.*;
	
public class Interface extends JFrame implements ActionListener
{
	private JTextField joueur1;
	private JPanel panneau ;	
	private JLabel texto1,bienvenue,joueurVerif;
	private Container cont;	
	private JMenuBar Barre;
	private JMenu Fichier,Informations;
	private JMenuItem Nouveau,sauvegarder,ouvrir, debutant,moyen, interme, evil,Quitter,Regle,about;
	private JButton validDebut,validOui,validNon;
	private NouveauJeu jeu;
	private JFrame frameNouveau,difficulte[];
	private int nivo=1;
	
	public Interface()
	{super();}

	public void jeuInterface()
	{
		// On initialise 
		difficulte=new JFrame[5];
		cont=getContentPane();
		cont.setLayout(new BorderLayout(5,5));
		panneau=new JPanel();
		difficulte[0]=new JFrame();
		difficulte[0].setLocation(200,50);
		difficulte[0].setSize(500,200);
		difficulte[0].setTitle("MasterMind");
		panneau.setBackground(Color.white);
		
		//Menu
		Barre=new JMenuBar();
		Fichier=new JMenu("Fichier");
		sauvegarder=new JMenuItem("Sauvegarder");
		ouvrir=new JMenuItem("Ouvrir");
		Informations=new JMenu("Infos");
		Nouveau=new JMenuItem("Nouveau");
		
		Quitter=new JMenuItem("Quitter");
		Regle=new JMenuItem("Règle");
		debutant=new JMenuItem("Débutant");
		moyen =new JMenuItem("Moyen");
		interme=new JMenuItem("Intermédiaire");
		evil=new JMenuItem("Evil");
		about=new JMenuItem("About");
			
		// Ajout du Menu
		Barre.add(Fichier);
		Barre.add(Informations);
		Fichier.add(Nouveau);
		Fichier.add(ouvrir);
		Fichier.addSeparator();
		Fichier.add(sauvegarder);
		Fichier.addSeparator();
		Fichier.add(debutant);
		Fichier.add(moyen);
		Fichier.add(interme);
		Fichier.add(evil);
		Fichier.addSeparator();
		Fichier.add(Quitter);
		Informations.add(Regle);
		Informations.addSeparator();
		Informations.add(about);
		
		// Actions
		Fichier.addActionListener(this);
		ouvrir.addActionListener(this);
		sauvegarder.addActionListener(this);
		Nouveau.addActionListener(this);
		Quitter.addActionListener(this);
		Regle.addActionListener(this);
		debutant.addActionListener(this);
		moyen.addActionListener(this);
		interme.addActionListener(this);
		evil.addActionListener(this);
		about.addActionListener(this);
		
		//	On rentre les noms
		bienvenue =new JLabel("Bienvenue sur MASTERMIND!") ;
		texto1=new JLabel("JOUEUR : ");
		joueur1=new JTextField("");
		joueurVerif =new JLabel() ;
		
		//Bouton de Validation de début de partie
		validDebut=new JButton("Valider");	
		validDebut.addActionListener(this);	
	
		//On insère dans des box pour ordonner
		Box hBox1=Box.createHorizontalBox();	
		hBox1.add(texto1);   
		hBox1.add(joueur1);  

		Box vBox= Box.createVerticalBox(); 
		vBox.setAlignmentY(CENTER_ALIGNMENT);
		vBox.add(bienvenue);
		vBox.add(Box.createVerticalStrut(10));
		vBox.add(hBox1);
		vBox.add(Box.createVerticalStrut(10));
		vBox.add(validDebut);
		vBox.add(Box.createVerticalStrut(10));
		vBox.add(new JLabel("Niveau Débutant"));
		vBox.add(Box.createVerticalStrut(10));
		vBox.add(joueurVerif);

		panneau.add(vBox);
		cont.add(Barre,BorderLayout.NORTH);
		cont.add(panneau,BorderLayout.CENTER);
		difficulte[0].add(cont);
	
		//Sortie Propre
		difficulte[0].addWindowListener(new WindowAdapter()
		{public void windowClosing(WindowEvent e){
			System.exit(0);}});
	
		ouvrir.setEnabled(false);
		Nouveau.setEnabled(false);
		sauvegarder.setEnabled(false);
		difficulte[0].setVisible(true);
		
	}
	
	//On va vérifier si le nom est bien rentré
	public boolean verifNom()
	{
		if (joueur1.getText().equals(""))
		{joueurVerif.setText("Veuillez rentrez un nom");return false;}
		else {return true;}			
	}
	
	public int getNiveau()
	{return nivo;}
	
	public void validNouveauJeu()
	{
		//Initialisation du panneau de vérification
		frameNouveau=new JFrame();
		frameNouveau.setSize(100,150);
		frameNouveau.setLocation(500,50);
		JPanel panneauNouveau=new JPanel();	
		panneauNouveau.setBackground(Color.white);
		JLabel sure= new JLabel("Nouvelle Partie ?");
		validOui=new JButton("Oui");
		validNon=new JButton("Non");

		//Ajout des composants (boutons oui et non
		Box vBoxNouveau= Box.createVerticalBox();    
		vBoxNouveau.add(Box.createVerticalStrut(10));
		vBoxNouveau.add(sure);
	    vBoxNouveau.add(Box.createVerticalStrut(10));
	    vBoxNouveau.add(validOui);
	    vBoxNouveau.add(Box.createVerticalStrut(10));
	    vBoxNouveau.add(validNon);

		Container conten = new Container();
		conten=frameNouveau.getContentPane();
		panneauNouveau.add(vBoxNouveau);
		conten.add(panneauNouveau,BorderLayout.CENTER);
		frameNouveau.setVisible(true);
		
		//On instancie une nouvelle partie
		validOui.addActionListener(new ActionListener(){
		public void actionPerformed(ActionEvent ez)
			{if (ez.getSource() == validOui)
				{niveauJeu(getNiveau());
				jeu.setPositionJoueur(0);
				jeu.jouerDeNouveau();
				frameNouveau.dispose();}}   });
		
		//On enlève le panneau de vérification de nouveau jeu
		validNon.addActionListener(new ActionListener(){
		public void actionPerformed(ActionEvent ew)
			{if (ew.getSource() == validNon)
				{frameNouveau.dispose();}}	});
		
	}
	
	public void niveauJeu(int i)
	{
		//Comme le démineur, on retire l'ancienne partie et on en recrée une nouvelle	
		for (int j=0;j<5;j++)
			{if (difficulte[j]!=null)
				{difficulte[j].dispose();}}
		
		//Initialisation de la nouvelle JFrame
		difficulte[i]=new JFrame();
		difficulte[i].setTitle("MasterMind");
		difficulte[i].setSize(560,600);
		difficulte[i].setLocation(200,50);
		JPanel p=new JPanel();
		p.setLayout(new BorderLayout(5,5));
		
		//Initialisation du nouveau jeu
		jeu=new NouveauJeu();
		jeu.JouerInitialisation(joueur1.getText(),i);
		jeu.couleurAVerifier();
		jeu.setPreferredSize(new Dimension(500,500));
		jeu.setBackground(Color.white);
		
		//Ajout des composants
		p.add(jeu,BorderLayout.CENTER);
		difficulte[i].add(Barre,BorderLayout.NORTH);
		difficulte[i].add(p,BorderLayout.CENTER);

		//Sortie Propre
		difficulte[i].addWindowListener(new WindowAdapter()
		{public void windowClosing(WindowEvent e){
		System.exit(0);}});
		
		//Affichage des élements
		ouvrir.setEnabled(true);
		Nouveau.setEnabled(true);
		difficulte[i].setVisible(true);
		sauvegarder.setEnabled(true);
		
	}
	
	public void actionPerformed(ActionEvent e)
	{
	
	if(e.getSource() == Nouveau)
	{validNouveauJeu();}
	
	if (e.getSource() == ouvrir)
	{jeu.Ouvrir();}
	
	if (e.getSource() == sauvegarder)
	{jeu.Sauvegarde();}
	
	if((e.getSource() == validDebut)||(e.getSource() == debutant) )
	{ 
		if (verifNom())
		{nivo=1;validNouveauJeu();}	
	}

	
	if((e.getSource() == moyen) )
	{ 
		if (verifNom())
		{nivo=2;validNouveauJeu();}
	}

	
	if((e.getSource() == interme) )
	{
		if (verifNom())
		{nivo=3;validNouveauJeu();}
	}

	
	if(e.getSource() == evil)
	{
		if (verifNom())
		{nivo=4;validNouveauJeu();}
	}
	
	if(e.getSource() == Regle)
	{String t="Les Régles de ce jeu sont particulièrement simples :" +
			"                  il suffit de choisir une couleur à gauche et la " +
			"placer sur la ligne blanche.                                              " +
			" Une fois votre ligne entièrement remplie, cliquer sur le bouton Vérifier," +
			" pour compter le nombre de vos pions bien placés et mal placés";
	petiteFenetre("Règle du jeu",t,200);}

	
	if(e.getSource() == about)
	{String t="Mastermind Version 1.00 Finale       " +
			"         par Alexandre GORISSE                   " +
			" Copyright 2006 Montpellier";
	petiteFenetre("About Mastermind",t,100);}
	
	if(e.getSource() == Quitter)
	{System.exit(0);}
	
	}
	
	public void petiteFenetre(String titre,String texto,int hauteur)
	{
		JFrame fen=new JFrame();
		fen.setLayout(new BorderLayout(5,5));
		JPanel pan=new JPanel();
		
		JTextArea text=new JTextArea();
		text.setPreferredSize(new Dimension (200,200));
		text.setLineWrap(true);
		text.setEditable(false);
		text.setText(texto);
		text.setWrapStyleWord(true);
		
		pan.setBackground(Color.white);
		pan.add(text,BorderLayout.CENTER);

		fen.setLocation(250,250);
		fen.setSize(250,hauteur);
		fen.setTitle(titre);
		fen.add(pan,BorderLayout.CENTER);
		fen.setVisible(true);
	}

	

}
