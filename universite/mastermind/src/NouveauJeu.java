import javax.swing.*;

import java.awt.*;
import java.awt.event.*;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class NouveauJeu extends JPanel implements ActionListener
{

	final private String  drivers = "sun.jdbc.odbc.JdbcOdbcDriver",  planC = "jdbc:odbc:Driver={Microsoft Access Driver (*.mdb)};DBQ=mastermind.mdb" ;
	private JPanel panneauJeu,panneauVerif;	
	private JButton verifier,Bouton[],couleur[],couleurAVerifier[];
	private int taille,nbCouleur,cases,positionJoueur=0,cptBienPlace,cptMalPlace,sauvegardeDiffuculte;
	private Color co=Color.white;
	private ImageIcon bienPlace,malPlace,aucun,attente,fondAttente,fondAPlacer;
	private Icon img=new ImageIcon("endroitAPlacer.gif");
	private JLabel coup, verif[];
	private Interface interfa;
	
	public NouveauJeu()
	{super();}
	
	public void JouerInitialisation(String nomJoueur,int difficulte)
	{
		if (difficulte==1)			
		{taille=40;nbCouleur=6;cases=4;}	
		if (difficulte==2)			
		{taille=40;nbCouleur=8;cases=4;}	
		if (difficulte==3)			
		{taille=60;nbCouleur=10;cases=6;}	
		if (difficulte==4)			
		{taille=60;nbCouleur=12;cases=6;}
		
		sauvegardeDiffuculte=difficulte; 
		interfa=new Interface(); //Juste pour obtenir la méthode petiteFenetre()
		setLayout(new BorderLayout(5,5));
		coup=new JLabel(" -- Coup N°1");
		JLabel lab1=new JLabel("Bienvenue sur MasterMind "+nomJoueur); 
	

		/* Panneau Principale */
		panneauJeu=new JPanel();	
		Bouton= new JButton[taille];
		panneauJeu.setLayout(new GridLayout(11,taille/10));
		fondAttente=new ImageIcon("attentePlace.gif");
	    fondAPlacer=new ImageIcon("endroitAPlacer.gif");

		for(int i=0;i<taille;i++)
		{	
			Bouton[i]= new JButton("");
			Bouton[i].addActionListener(this);
			panneauJeu.add(Bouton[i]);	
			Bouton[i].setMaximumSize(new java.awt.Dimension(60, 40));
			Bouton[i].setMinimumSize(new java.awt.Dimension(60, 40));
			Bouton[i].setBackground(Color.white);
		}
			
		for(int i=cases;i<taille;i++)
		{
			Bouton[i].setIcon(fondAttente);
			Bouton[i].setDisabledIcon(fondAttente);
			Bouton[i].setEnabled(false);
			Bouton[i].setBackground(Color.lightGray);
		}
	
		/* Couleur de gauche */
		verifier= new JButton("    Vérifier    ");
		verifier.addActionListener(this);
		couleur= new JButton[nbCouleur];	
		Box vBoxCouleur = Box.createVerticalBox();  
		
		for(int i=0;i<nbCouleur;i++)
		{
			couleur[i]= new JButton();
			couleur[i].addActionListener(this);
			ImageIcon c=new ImageIcon("couleur"+i+".gif");
			couleur[i].setMaximumSize(new java.awt.Dimension(60, 40));
			couleur[i].setMinimumSize(new java.awt.Dimension(60, 40));
			couleur[i].setIcon(c);
			couleur[i].setBackground(Color.blue);
			vBoxCouleur.add(couleur[i]);
		}
		vBoxCouleur.add(Box.createVerticalStrut(10));
		vBoxCouleur.add(verifier);
	
		couleur[0].setBackground(Color.orange);
		couleur[1].setBackground(Color.red);
		couleur[2].setBackground(Color.green);
		couleur[3].setBackground(Color.blue);
		couleur[4].setBackground(Color.cyan);
		couleur[5].setBackground(Color.yellow);
		if (nbCouleur>6)
		{couleur[6].setBackground(Color.pink);
		couleur[7].setBackground(Color.darkGray);}	
		if (nbCouleur>8)
		{couleur[8].setBackground(Color.MAGENTA);
		couleur[9].setBackground(Color.gray);}	
		if (nbCouleur>10)
		{couleur[10].setBackground(Color.BLACK);
		couleur[11].setBackground(Color.lightGray);}
		
		Box hBoxMessages = Box.createHorizontalBox();
		hBoxMessages.add(lab1);
		hBoxMessages.add(coup);
		
		
		/* Panneau de vérification à droite */
		panneauVerif=new JPanel();
		panneauVerif.setPreferredSize(new Dimension(200,100));
		panneauVerif.setLayout(new GridLayout(11,4));
		bienPlace=new ImageIcon("bienPlace.gif");
		malPlace=new ImageIcon("malPlace.gif");
		aucun=new ImageIcon("aucun.gif");
		attente=new ImageIcon("attente.gif");
		verif=new JLabel[taille];
		
		for(int i=0;i<taille;i++)
		{
			verif[i]=new JLabel("");
			verif[i].setIcon(attente);
			panneauVerif.add(verif[i]);
		}
		
		add(vBoxCouleur,BorderLayout.WEST);
		add(panneauJeu,BorderLayout.CENTER);
	    add(hBoxMessages,BorderLayout.SOUTH);
	    add(panneauVerif,BorderLayout.EAST);

		setVisible(true);	
	}
	
	
	public void actionPerformed(ActionEvent e)
	{
		for(int i=0;i<nbCouleur;i++)
		{
			if(e.getSource()==couleur[i])
			{
				img=couleur[i].getIcon();
				co=couleur[i].getBackground();
			}
		}
		
		for(int i=0;i<positionJoueur+cases&&i!=taille;i++)
		{		
			if(e.getSource()==Bouton[i])
			{ 
				Bouton[i].setIcon(img);
				Bouton[i].setBackground(co);
			}
		}
		
		
		
		if(e.getSource()==verifier&&positionJoueur+cases<=taille)
		{ 
			cptBienPlace=0;cptMalPlace=0;
			Icon imgTemp;
			verifPlace();
		
		
			//Bool qui va vérifier que toutes les cases sont remplies
			boolean remplie=true;
			for (int j=positionJoueur;j<positionJoueur+cases;j++)
			{
				if (Bouton[j].getBackground()==Color.white)
				{remplie=false;}	
			} 
		
			//Si la partie est gagnée
			if (gagner())
			{
				interfa.petiteFenetre("Gagné","Bravo, Vous avez gagné !",70);
				
				
				for (int i=0;i<cases;i++)
				{panneauJeu.add(couleurAVerifier[i]);}

				for (int i=positionJoueur;i<positionJoueur+cases&&i!=taille;i++)
				{Bouton[i].setEnabled(false);
				imgTemp=Bouton[i].getIcon();
				Bouton[i].setDisabledIcon(imgTemp);
				verif[i].setIcon(bienPlace);}
			
			}	
			else
			{	
				//Si toutes les cases ne sont pas remplies
				if (!remplie) 
				{
					interfa.petiteFenetre("Vérification","Veuillez Remplir toutes les cases",70);
				}
				else 
				{ 
					for (int i=positionJoueur;i<positionJoueur+cases&&i!=taille;i++)
					{					
					Bouton[i].setEnabled(false);
					imgTemp=Bouton[i].getIcon();
					Bouton[i].setDisabledIcon(imgTemp);
						
						if (cptBienPlace>0)
						{
							verif[i].setIcon(bienPlace);
							cptBienPlace--;
						}
						else if (cptMalPlace>0)
							{
							verif[i].setIcon(malPlace);
							cptMalPlace--;
							}
							else
							{
							verif[i].setIcon(aucun);	
							}
						
					}
			
					for (int i=positionJoueur+cases;i<positionJoueur+(cases*2)&&i!=taille;i++)
					{
						Bouton[i].setEnabled(true);
						Bouton[i].setIcon(fondAPlacer);
						Bouton[i].setBackground(Color.white);
						verif[i].setIcon(aucun);
					}
			
				positionJoueur=	positionJoueur+cases;
				coup.setText(" -- Coup N°"+(positionJoueur+cases)/cases);
			
					if (positionJoueur==taille)
					{interfa.petiteFenetre("Perdu","Désolé, Vous avez Perdu!",70);
					for (int i=0;i<cases;i++)
					{panneauJeu.add(couleurAVerifier[i]);}}
				}
			}
		}
		
	}
	
	public void couleurAVerifier()
	{   
	couleurAVerifier=new JButton[cases];
	int j;
	
		for (int i=0;i<cases;i++)
		{
			couleurAVerifier[i]=new JButton();
			j=(int)(Math.random()*nbCouleur); 
			couleurAVerifier[i].setBackground(couleur[j].getBackground());
			couleurAVerifier[i].setIcon(couleur[j].getIcon());			
		}
		
	}
	
	public boolean gagner()
	{
	boolean bool=true;

		for (int i=positionJoueur,j=0;i<positionJoueur+cases&&j<cases;i++,j++)
		{
			if (Bouton[i].getBackground()!=couleurAVerifier[j].getBackground()){bool=false;}
		}
	
	return bool;	
	}

	public void verifPlace()
	{
		
		boolean placeJoueur[]=new boolean[cases],placeCode[]=new boolean[cases];


		//on vérifie d'abord le nombre de bien placé
		for (int i=0,k=positionJoueur;i<cases&&k<positionJoueur+cases;i++,k++)
		{ 

			if (Bouton[k].getBackground()==couleurAVerifier[i].getBackground())
			{
				placeCode[i]=false;
				placeJoueur[i]=false;
				cptBienPlace+=1;		
			}
			else
			{
				placeCode[i]=true;	
				placeJoueur[i]=true;
			}
		}

		// Puis les mals placés
		for (int i=0;i<cases;i++)
		{		
					for (int k=0,h=positionJoueur;h<positionJoueur+cases;h++,k++)
					{

						if (couleurAVerifier[i].getBackground()==Bouton[h].getBackground()&&placeCode[i]&&placeJoueur[k])
						{
						cptMalPlace+=1;	
						placeJoueur[k]=false;
						placeCode[i]=false;	
						}
					}					
		}

	}
	
	
	public void jouerDeNouveau()
	{
		for(int i=0;i<cases;i++)
		{
			Bouton[i].setIcon(fondAPlacer);
			Bouton[i].setBackground(Color.white);
			Bouton[i].setEnabled(true);
			verif[i].setIcon(aucun);
		}
		
		for(int i=cases;i<taille;i++)
		{	
			Bouton[i].setEnabled(false);
		}
	coup.setText(" -- Coup N°1");
	}
	
	public void setPositionJoueur(int i)
	{
		this.positionJoueur=i;
	}

	
	public void Sauvegarde()
	{
		int requete1;

		try {		
			//Connexion à la base "mastermind"
		    Class.forName(drivers);
		    Connection connex = DriverManager.getConnection(planC);
		    Statement stat = connex.createStatement();
	    
		    //Insertion dans la base
		    for (int i=0;i<taille;i++)
			{  		    
		    	requete1= stat.executeUpdate("UPDATE Cours SET Bout='"+Bouton[i].getIcon().toString()+"' WHERE numCours="+i ) ;
		    	requete1= stat.executeUpdate("UPDATE Cours SET Back='"+Bouton[i].getBackground().toString()+"' WHERE numCours="+i ) ;
		    	requete1= stat.executeUpdate("UPDATE Cours SET Verif='"+verif[i].getIcon().toString()+"' WHERE numCours="+i ) ; 	
		    }
		    
		    for (int i=0;i<cases;i++)
		    {
		    	requete1= stat.executeUpdate("UPDATE Code SET CodeC='"+couleurAVerifier[i].getIcon().toString()+"' WHERE numCode="+i ) ;
		    	requete1= stat.executeUpdate("UPDATE Code SET BackC='"+couleurAVerifier[i].getBackground().toString()+"' WHERE numCode="+i ) ;
		    	requete1= stat.executeUpdate("UPDATE Code SET Difficult="+sauvegardeDiffuculte+" WHERE numCode=0");
		    	requete1= stat.executeUpdate("UPDATE Code SET Difficult="+positionJoueur+" WHERE numCode=1");
		    }
		    
		    stat.close(); }
			catch (SQLException ez){ System.err.println(ez.getMessage());}
			catch (ClassNotFoundException er) {System.err.println(er.getMessage());}	
	}
	
	public void Ouvrir()
	{
		
		String temp[]=new String[taille],tempPlace[]=new String[taille],
		tempBack[]=new String[taille],tempCode[]=new String[taille],tempCodeBack[]=new String[taille];
		int nivo=0, position=0;
		
		try {		
			
		    Class.forName(drivers);
		    Connection  connex = DriverManager.getConnection(planC);
		    Statement stat  = connex.createStatement();
		    ResultSet requete2= stat.executeQuery("SELECT * FROM Cours") ;
		   
		    //on récupère les infos de la base
		    int cpt=0;
		    while(requete2.next() )  		    	
		    {		
		    	if (cpt<taille)
		    	{
		    	temp[cpt]=requete2.getString("Bout");
		    	tempPlace[cpt]=requete2.getString("Verif");		    	
		    	tempBack[cpt]=requete2.getString("Back");		        	
		    	}
		    cpt++;
		    }
		   
		    Class.forName(drivers);
		    connex = DriverManager.getConnection(planC);
		    stat = connex.createStatement();
		    ResultSet requete3= stat.executeQuery("SELECT * FROM Code") ;
		   
		    int cpt1=0 ;
		    while(requete3.next() )  		    	
		    {	
		    	if (cpt1<cases)
		    	{
		    		tempCode[cpt1]=requete3.getString("CodeC");
		    		tempCodeBack[cpt1]=requete3.getString("BackC");
		    		if (cpt1==0){nivo=requete3.getInt("Difficult");}
		    		if (cpt1==1){position=requete3.getInt("Difficult");}
		    	} 
		    cpt1++;
		    }
		    
		    //Message si pas le bon level sélectionné pour l'ouverture
		    String tempory="";
	    	if(nivo==1) {tempory="débutant";}
	    	if(nivo==2) {tempory="moyen";}
	    	if(nivo==3) {tempory="Intermédiaire";}
	    	if(nivo==4) {tempory="Evil";}
		    
	    	//On réaplique sur note grille les boutons
		    if (sauvegardeDiffuculte== nivo)
		    {   
		    ImageIcon img;

		    	for (int i=0;i<taille;i++)
		    	{
		    	img=new ImageIcon(temp[i]);
		    		if(temp[i]!=null) 
		    			{
		    			verif[i].setIcon(new ImageIcon(tempPlace[i]));
		    			Bouton[i].setIcon(img);
		    			Bouton[i].setEnabled(false);
		    			Bouton[i].setDisabledIcon(img);
		    			Bouton[i].setBackground(Color.lightGray);	
		    			}
		   
		    		for  (int j=0;j<nbCouleur;j++)
		    		{
		    			//Comparaison des couleur crypté car impossible de récupérer le nom d'une couleur
		    			if (couleur[j].getBackground().toString().equals(tempBack[i].toString()))
		    			{
		    				Bouton[i].setBackground(couleur[j].getBackground());
		    			}
		    		}
		    
		    	}
		    	
		    	
		    	//Application du code de vérification
		    	for (int i=0;i<cases;i++)
		    	{
		    		if(tempCode[i]!=null) 
		    		{
		    			couleurAVerifier[i].setIcon(new ImageIcon(tempCode[i]));
		    		}	
		    		for  (int j=0;j<nbCouleur;j++)
		    		{
		    			if (couleur[j].getBackground().toString().equals(tempCodeBack[i].toString()))
		    				{
		    					couleurAVerifier[i].setBackground(couleur[j].getBackground());
		    				}
		    		}
		    	}

			
				//Réinitialisaton des 4 ou 6 boutons "A placer"
				for (int i=position;i<position+cases&&i!=taille;i++)
				{Bouton[i].setEnabled(true);}	
			
			positionJoueur=position;
			coup.setText(" -- Coup N°"+(position+(taille/10))/(taille/10));
		    }
		    else
		    { 
		    interfa.petiteFenetre("Mauvais Level","Veuillez séléctionnner le niveau '"+tempory+"' pour ouvrir votre partie",75);
		    }
		    
		    stat.close(); }
			catch (SQLException ez){ System.err.println(ez.getMessage());}
			catch (ClassNotFoundException er) {System.err.println(er.getMessage());}
	}
}
