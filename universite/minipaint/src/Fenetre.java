import java.awt.*;

import javax.swing.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.WindowAdapter;
import java.awt.event.WindowEvent;
import java.io.*;

public class Fenetre extends JFrame implements ActionListener
{

	private JMenuItem droite, ovale, ovPlein, rectangle,rectArr, rectArrPlein, rectPlein, annuler, supprimer,
	carre,carrePlein, cercle, cerclePlein, sauv,ouvrir,nouveau, fermer, colCont, colFond, redimension;
	private JCheckBoxMenuItem  dessin, selection;
	private JMenu fich,edition,figure,col,mode, lesEllipses, lesRectangles, lesCarres, lesCercles  ;
	private panneau pan;
	private CollectionFigures maCollection;
	
	public Fenetre()
	{
		//Instance et initialisation des classes
		maCollection=new CollectionFigures();	
		pan=new panneau(maCollection);
		pan.setBackground(Color.WHITE);	
		pan.setTypeFigure(1); //Par défaut, le dessin est une droite
		
		//On créé nos menus
		JMenuBar barre=new JMenuBar();
		fich=new JMenu("Fichier");
		nouveau= new JMenuItem("Nouveau");
		ouvrir= new JMenuItem("Ouvrir");
		sauv= new JMenuItem("Enregistrer");
		fermer= new JMenuItem("Fermer");
		edition= new JMenu("Edition");
		annuler= new JMenuItem("Annuler");
		supprimer= new JMenuItem("Supprimer");
		redimension= new JMenuItem("Redimensionner");
		figure=new JMenu("Figure");		
		droite= new JMenuItem("Droite");		
		lesEllipses= new JMenu("Ellipses");
		ovale= new JMenuItem("Ovale Simple");
		ovPlein= new JMenuItem("Ovale Plein");	
		lesRectangles= new JMenu("Rectangles");
		rectangle= new JMenuItem("Rectangle Simple");
		rectPlein= new JMenuItem("Rectangle Plein");
		rectArr= new JMenuItem("Rectangle Arrondi");
		rectArrPlein= new JMenuItem("Rectangle Arrondi Plein");		
		lesCarres = new JMenu("Carres");
		carre= new JMenuItem("Carré Simple");
		carrePlein=new JMenuItem("Carré Plein");
		lesCercles = new JMenu("Cercles");
		cercle = new JMenuItem("Cercle Simple");	
		cerclePlein = new JMenuItem("Cercle Plein");
		col=new JMenu("Couleurs");
		colCont=new JMenuItem("Couleur Contour");
		colFond=new JMenuItem("Couleur Fond");
		mode=new JMenu("Mode");
		selection=new JCheckBoxMenuItem("Selection");
		dessin=new JCheckBoxMenuItem("Dessin");
			
		//On place les différents éléments de notre fenetre
		add(pan);
		setJMenuBar(barre);
		add(pan.getStatusBar(),BorderLayout.SOUTH); //Barre d'infos en bas	
		barre.add(fich);
		barre.add(edition);
		barre.add(figure);
		barre.add(col);
		barre.add(colCont);
		barre.add(mode);	
		fich.add(nouveau);
		fich.addSeparator();
		fich.add(ouvrir);
		fich.add(sauv);
		fich.addSeparator();
		fich.add(fermer);
		edition.add(annuler);
		edition.addSeparator();
		edition.add(supprimer);
		edition.add(redimension);
		figure.add(droite);		
		figure.add(lesEllipses);
		lesEllipses.add(ovale);
		lesEllipses.add(ovPlein);		
		figure.add(lesRectangles);
		lesRectangles.add(rectangle);
		lesRectangles.add(rectPlein);
		lesRectangles.add(rectArr);
		lesRectangles.add(rectArrPlein);	
		figure.add(lesCarres);
		lesCarres.add(carre);
		lesCarres.add(carrePlein);
		figure.add(lesCercles);
		lesCercles.add(cercle); 
		lesCercles.add(cerclePlein);
		col.add(colCont);
		col.add(colFond);		
		mode.add(selection);
		mode.add(dessin);

		//On implémente nos évènements	
		nouveau.addActionListener(this);
		ouvrir.addActionListener(this);
		sauv.addActionListener(this);
		fermer.addActionListener(this);
		annuler.addActionListener(this);
		supprimer.addActionListener(this);
		redimension.addActionListener(this);
		droite.addActionListener(this);
		ovale.addActionListener(this);
		ovPlein.addActionListener(this);
		rectangle.addActionListener(this);
		rectPlein.addActionListener(this);
		rectArr.addActionListener(this);
		rectArrPlein.addActionListener(this);
		carre.addActionListener(this);
		carrePlein.addActionListener(this);
		cercle.addActionListener(this);
		cerclePlein.addActionListener(this);
		colCont.addActionListener(this);
		colFond.addActionListener(this);
		selection.addActionListener(this); 
		dessin.addActionListener(this);
		
		//Sortie Propre
		addWindowListener
		(  		new WindowAdapter()
				{	public void windowClosing(WindowEvent e)
						{if(confirm())System.exit(0);} 
				}	
		);
		
		// Opérations sur la JFrame	
		setDefaultCloseOperation(JFrame.DO_NOTHING_ON_CLOSE);
		dessin.setState(true);
		setSize(600,600);
		setLocation(200,100);		
		setTitle("MiniDraw");
		setVisible(true);	
	}
	
	//Message de confirmation
	public boolean confirm()
	{
		int n = JOptionPane.showConfirmDialog(
				null,
				"Etes-vous sûre ?",
			    "Confirmation",
			    JOptionPane.YES_NO_OPTION);
		if(n==0) return true;
			else return false;
	}
	
	// Remet le mode dessin lorsqu'on ira cliquer sur une figure
	public void modeDessin()
	{
		if(!dessin.getState())
			{
				pan.setTypeMode(0);
				pan.supprimerSelection();
				dessin.setState(true);	
				selection.setState(false);
			}
	}
	
	//Sauvegarde de dessins depuis un Jdialog
	public void sauvegarder()
	{
		JFileChooser choix = new JFileChooser();
		int rep= choix.showSaveDialog(this);
		
		if (rep==JFileChooser.APPROVE_OPTION)
		{
			File fich = choix.getSelectedFile();
				
			try
			{pan.sauvFigure(fich);}
			catch(IOException e)
			{
				e.printStackTrace();
				JOptionPane.showMessageDialog(null, "Erreur de Sauvegarde");
			}
		}
	}
	
	// Ouverture de dessins depuis un Jdialog
	public void ouvrir()
	{
		JFileChooser choix = new JFileChooser();
		int rep= choix.showOpenDialog(this);
		
		if (rep==JFileChooser.APPROVE_OPTION)
		{
			File fich = choix.getSelectedFile();
			// On ouvre le fichier	
			try {pan.ouvrirFigure(fich);}
				catch(IOException e)
					{JOptionPane.showMessageDialog(null, "Erreur d'ouverture");}
				catch(ClassNotFoundException e)
					{JOptionPane.showMessageDialog(null, "Erreur d'ouverture");}
		}
	}
	
	//Actions de tous nos menus
	public void actionPerformed(ActionEvent e)
	{
		
		if (e.getSource()==nouveau) //On va effacer tous nos dessins
			{ 
				if(confirm())
				{ 
					maCollection.supprimmerToutesFig();
					pan.supprimerSelection();
					repaint();
				}	
			}	
		
		if (e.getSource()==ouvrir) //Ouverture du fichier
			{this.ouvrir();pan.supprimerSelection();}
		
		if (e.getSource()==sauv) //Sauvegarde dans un fichier
			{this.sauvegarder();}

		if (e.getSource()==fermer) // Fermeture du programme
			{ if(confirm())System.exit(0);}
		
		if (e.getSource()==annuler) // On supprimer le dernier dessin créé
			{if(maCollection.getCollection().size()!=0)pan.annulerFigure(); pan.supprimerSelection(); }
		
		if (e.getSource()==supprimer) // On supprimer le dessin sélectionné
			{pan.supprimerFigure(); pan.supprimerSelection(); }
		
		if (e.getSource()==redimension) //On va redimensionner notre dessin (uniquement en largeur et longueur)
		{
			String lon="Longueur actuelle : "+pan.getLongueur();
			String lar="Longueur actuelle : "+pan.getLargeur();
			String reponse1=JOptionPane.showInputDialog(this,lon); //Dialogue de Longueur
			String reponse2=JOptionPane.showInputDialog(this,lar); //Dialogue de largeur
			//On récupère l'erreur de convertion String=>int
			try {pan.redimensionner(Integer.parseInt(reponse1),Integer.parseInt(reponse2));}
			catch (NumberFormatException ez){JOptionPane.showMessageDialog(null,ez.getMessage());}
		}
		
		/** On va sélection les types de figures souhaités et les appliquer **/
		if (e.getSource()==droite) 
			{pan.setTypeFigure(1);modeDessin();}
		
		if (e.getSource()==ovale)
			{pan.setTypeFigure(2);modeDessin();}
		
		if (e.getSource()==ovPlein)
			{pan.setTypeFigure(3);modeDessin();}
		
		if (e.getSource()==rectangle)
			{pan.setTypeFigure(4);modeDessin();}
		
		if (e.getSource()==rectPlein)
			{pan.setTypeFigure(5);modeDessin();}
		
		if (e.getSource()==rectArr)
			{pan.setTypeFigure(6);modeDessin();}
		
		if (e.getSource()==rectArrPlein)
			{pan.setTypeFigure(7);modeDessin();}
		
		if (e.getSource()==carre)
			{pan.setTypeFigure(8);modeDessin();}
		
		if (e.getSource()==carrePlein)
			{pan.setTypeFigure(9);modeDessin();}
		
		if (e.getSource()==cercle)
			{pan.setTypeFigure(10);modeDessin();}
		
		if (e.getSource()==cerclePlein)
			{pan.setTypeFigure(11);modeDessin();}
		/** Fin des sélections de types **/
		
		if (e.getSource()==colCont) //On va selectionenr et appliquer la couleur de contour
		{		
			Color coulC =  JColorChooser.showDialog(this, "Choix des couleurs du contour",Color.WHITE);	
			if (coulC!=null)
			{
				pan.setCouleurContour(coulC); // Si une figure que l'on va créé
				pan.changerCouleurCont(coulC); // Si c'est une figure sélectionnée
			}
		}
		
		if (e.getSource()==colFond)//On va selectionenr et appliquer la couleur de fond
		{	
			Color coulF =  JColorChooser.showDialog(this, "Choix des couleurs du fond",Color.WHITE);
			if (coulF!=null)
			{
				pan.setCouleurFond(coulF);
				pan.changerCouleurFond(coulF);
			}
		}
		
		if (e.getSource()==dessin) //On va sélectionner le mode dessin
			{
				pan.setTypeMode(0);
				pan.supprimerSelection();
				selection.setState(false);
				dessin.setState(true); //Cas où on Resélectionne le bouton -> évite de supprimer la sélection
			}
		
		if (e.getSource()==selection) //On va sélectionner le mode selection
			{
				pan.setTypeMode(1);
				dessin.setState(false);
				selection.setState(true); //Cas où on Resélectionne le bouton -> évite de supprimer la sélection  
			}		
	}
}
