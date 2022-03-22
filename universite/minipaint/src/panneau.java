import java.awt.*;
import java.awt.event.MouseEvent;
import java.io.*;
import javax.swing.event.MouseInputListener;
import javax.swing.*;


public class panneau extends JPanel implements MouseInputListener
{

	private CollectionFigures monDessin;
	private Figure rectSelection; //rectangle de selection
	private int  posXdeb, posYdeb, posXfigure=0,posYfigure=0, typeFigure=0, typeMode=0, numFig=0,posX2figure=0,posY2figure=0;
	private Color couleurFond, couleurContour;
	private JLabel statusBar; //barre d'information
	private JPanel pan;
	private boolean select; //vérificateur de selection
	
	public panneau(CollectionFigures dessin) //Constructeur
	{		
		pan=new JPanel();
		addMouseListener(this);
		addMouseMotionListener(this);
		monDessin=dessin;
		statusBar=new JLabel("X : 0 Y : 0",JLabel.CENTER);
		statusBar.setPreferredSize(new Dimension(pan.getWidth(),30));
		statusBar.setOpaque(true);
		statusBar.setBackground(new Color(153,204,255));
		couleurFond=Color.BLUE;
		couleurContour=Color.BLUE;		
	}
	
	
	public void paintComponent(Graphics g) //on va dessinner tous composants
	{	
		super.paintComponent(g);
		monDessin.dessineTout(g);
		if (rectSelection!=null) rectSelection.dessine(g);
	}
	
	/** Options de dessins **/
	
	public void drawSelection(Figure fig) //Dessine un rectangle de selection autour d'un figure
	{
		if (jeSuisDroite(numFig)) 
			rectSelection= new Rectangle(fig.x-3,fig.y-3,(fig.longueur-fig.x)+6,(fig.largeur-fig.y)+6,Color.BLACK);
		else rectSelection= new Rectangle(fig.x-3,fig.y-3,fig.longueur+6,fig.largeur+6,Color.BLACK);
	}

	public void setTypeFigure(int type) //Selectionne le type de figure depuis le menu
		{this.typeFigure=type;}
	
	public void setTypeMode(int sel) //Selectionne le mode depuis le menu
		{this.typeMode=sel;}

	public void setCouleurContour(Color colC) //Modifie les couleurs de contour
		{this.couleurContour=colC;}

	public void setCouleurFond(Color colF) //Modifie les couleurs de fond
		{this.couleurFond=colF;}
		
	public JLabel getStatusBar() //renvoie la barre de status à fenetre 
		{return this.statusBar;}

	//Fonction de sauvegarde dans un fichier
	public void sauvFigure(File nom) throws IOException
	{
		ObjectOutputStream flotS = new ObjectOutputStream(new FileOutputStream(nom));
		flotS.writeObject(monDessin);
		flotS.close();
	}
	
	//Fonction d'ouverture de fichier
	public void ouvrirFigure(File nom) throws IOException, ClassNotFoundException 
	{
		ObjectInputStream flotE = new ObjectInputStream(new FileInputStream(nom));
		Object o = flotE.readObject();
		monDessin.setCollection((CollectionFigures) o); //On rappatrie la collection
		flotE.close();
		repaint();
	}
	
	/** Fin des options de dessins **/
	
	
	/** Options sur une figure sélectionnée **/
	
	public void supprimerSelection() //Supprime le rectangle de selection
		{if (rectSelection!=null) rectSelection=new Rectangle(0,0,0,0,null);}

	public void supprimerFigure() //supprume la figure sélectionné
		{if (typeMode==1&&rectSelection!=null) monDessin.supprimerFig(numFig);repaint();}

	public void annulerFigure() //supprime la dernière figure créée
		{monDessin.supprimerFig(monDessin.getCollection().size()-1);repaint();}
	
	public void redimensionner(int p1, int p2) //redimensionne la figure selectionné
		{getFig(numFig).setDimension(p1,p2);supprimerSelection();}
	
	public int getLargeur() //renvoie la largeur de la figure selectionnée
		{if (rectSelection!=null)return getFig(numFig).largeur; else return 0;}
	
	public int getLongueur() //renvoie la longueur de la figure selectionnée
		{if (rectSelection!=null) return getFig(numFig).longueur;else return 0;}
	
	//Ici, on créé une méthode spécifique aux sélections, on aurait aussi bien pu créer des accesseurs pour numFig et rectSelection et les renvoyer à fenêtre...
	public void changerCouleurCont(Color col) //change la couleur d'un objet selectionné
		{if (typeMode==1&&rectSelection!=null)monDessin.getCollection().get(numFig).setCouleurCont(col); }

	public void changerCouleurFond(Color col) //change la couleur d'un objet selectionné
		{if (typeMode==1&&rectSelection!=null)monDessin.getCollection().get(numFig).setCouleurFond(col); }
	
	/** Fin des options de modification de la sélection **/
	

	
	/** Raccourcis internes à cette classe **/
	
	public Figure getDernier() //raccrourcis d'obtention de la dernière figure créées
		{return monDessin.getCollection().get(monDessin.getCollection().size()-1);}
	
	public Figure getFig(int i) //raccourcis d'obtention d'une figure
		{return monDessin.getCollection().get(i);}
	
	public boolean jeSuisDroite(int i) //On vérifie que l'objet séléectionné est une droite pour déplacer la figure par les coordonnées de 2 points
	{
		boolean toto=false;
		try {if (monDessin.getCollection().get(i).getClass()==Class.forName("Droite")) {toto=true;}}
		catch(ClassNotFoundException ex){System.out.println(ex.getMessage());}
		return toto;
	}

	public void afficheStatus(MouseEvent e) 
	{
		String mode="", typeDessin=""; // mode selection-dessin + Type de figure
		if (typeMode==1){mode= "Mode Selection";if(numFig<monDessin.getCollection().size()&&monDessin.getCollection().size()!=0) typeDessin=getFig(numFig).getClass().getName();} 
			else {mode= "Mode Dessin"; if(monDessin.getCollection().size()!=0)typeDessin=getDernier().getClass().getName();}
		statusBar.setText(typeDessin+" | "+mode+" X : "+e.getX()+" Y : "+e.getY());
		repaint();
	}
	
	// On vérifie que l'on selectionne le cadre formé par la droite
	public boolean selectionDroite(int i, MouseEvent e)
	{	
		int x1, x2, y1 , y2; 
		 
		 //On vérifie la position des deux extrêmités pour la comparaison 
		if ( getFig(i).longueur<=getFig(i).x ) {x1=getFig(i).longueur ;x2=getFig(i).x ;}
			else {x1=getFig(i).x; x2=getFig(i).longueur;} 	   
		if ( getFig(i).largeur<=getFig(i).y ) {y1=getFig(i).largeur ;y2=getFig(i).y  ;}
			else {y1=getFig(i).y ; y2=getFig(i).largeur;} 
	
		   //on returne vrai si on clique le cadre formée par la droite
			 return (!select && jeSuisDroite(i) //Pas dejà selectionné et Figure 'Droite'
					&& e.getX()>=x1 &&  e.getX()<=x2 //gauche et droite
					&& e.getY()>=y1  &&  e.getY()<= y2);//Haut et bas
	}
	
	/** Fin des racourcis **/
	
	
	/** Evènements de la souris **/
	
	//On instancie ici nos figures, en effet, cela nous permet de pourvoir dessiner notre figure grâce au mousedragged
	public void mousePressed(MouseEvent e) 
	{	
		//on les réutilise pour le Drag
		posXdeb=e.getX(); 
		posYdeb=e.getY();	
		if(typeMode==0)	//Mode Dessin
		{
			switch(typeFigure) //On instancie nos figures (pour les carrées et cercles, on applique la même longueur à la largeur d'un rectangle ou une éllipse
			{
				case(1) :monDessin.ajoutFig(new Droite(posXdeb,posYdeb,posXdeb,posYdeb,this.couleurContour));repaint();break;
				case(2) :monDessin.ajoutFig(new Ovale(posXdeb,posYdeb,0,0,this.couleurContour));repaint();break;
				case(3) :monDessin.ajoutFig(new OvPlein(posXdeb,posYdeb,0,0,this.couleurContour, this.couleurFond));repaint();break;
				case(4) :monDessin.ajoutFig(new Rectangle(posXdeb,posYdeb,0,0,this.couleurContour));repaint();break;
				case(5) :monDessin.ajoutFig(new RectPlein(posXdeb,posYdeb,0,0,this.couleurContour, this.couleurFond));repaint();break;
				case(6) :monDessin.ajoutFig(new RectArr(posXdeb,posYdeb,0,0,this.couleurContour));repaint();break;			
				case(7) :monDessin.ajoutFig(new RectArrPlein(posXdeb,posYdeb,0,0,this.couleurContour, this.couleurFond));repaint();break;				
				case(8) :monDessin.ajoutFig(new Rectangle(posXdeb,posYdeb,0,0,this.couleurContour));repaint();break;
				case(9) :monDessin.ajoutFig(new RectPlein(posXdeb,posYdeb,0,0,this.couleurContour, this.couleurFond));repaint();break;
				case(10) :monDessin.ajoutFig(new Ovale(posXdeb,posYdeb,0,0,this.couleurContour));repaint();break;
				case(11) :monDessin.ajoutFig(new OvPlein(posXdeb,posYdeb,0,0,this.couleurContour, this.couleurFond));repaint();break;
			}
		}
		else if (typeMode==1) //Mode Sélection
		{
			for (int i=monDessin.getCollection().size()-1;i>=0;i--)
			{ //On recherche où est la figure sélectionné par rapport à ses coordonnées
				if( !select && !jeSuisDroite(i)
						&& getFig(i).x<=e.getX()&&getFig(i).x+getFig(i).longueur>=e.getX()
						&& getFig(i).y<=e.getY()&&getFig(i).y+getFig(i).largeur>=e.getY()
						|| selectionDroite(i,e) )
				{
					numFig=i; //Numéro de figure séletionné 
					posXfigure=getFig(numFig).x;
					posYfigure=getFig(numFig).y;
					posX2figure=getFig(numFig).longueur; //pour les droites
					posY2figure=getFig(numFig).largeur; //pour les droites
					drawSelection(getFig(numFig)); //Rectangle de selection
					select=true;
					break;	
				}
			}
		}
	
	}
	
	public void mouseReleased(MouseEvent e) 
		{select=false;}


	public void mouseDragged(MouseEvent e) 
	{		
		afficheStatus(e);
		if(typeMode==0)	
		{
			// On va régler les positions normales et inversées
			if (typeFigure!=1) //Si ce n'est pas une droite
			{
				int posX=( e.getX()<posXdeb ) ? e.getX() : posXdeb ; //Soit la position en cours, soit la position fixe de début
				int posY=( e.getY()<posYdeb ) ? e.getY() : posYdeb ;
				getDernier().setPosition( posX,posY );		   
			}
			
			//On va appliquer la largeur et la longueur
			if (typeFigure==1) //Si c'est une droite
			{getDernier().setDimension(Math.abs(posXdeb+(e.getX()-posXdeb)),Math.abs(posYdeb+(e.getY()-posYdeb)));}
			else if(typeFigure>=8&&typeFigure<=11) //Si c'est un carré ou un cercle
				 {getDernier().setDimension( Math.abs(e.getY()-posYdeb) , Math.abs(e.getY()-posYdeb) );}		
				else if (typeFigure!=0) //Tout le reste
					 {getDernier().setDimension( Math.abs(e.getX()-posXdeb) , Math.abs(e.getY()-posYdeb) );}
		}
		else if (typeMode==1) //On va déplacer la figure en fonction des coord. de la souris
		{
			if(select)
			{		
				getFig(numFig).setPosition(e.getX()-(posXdeb-posXfigure),e.getY()-(posYdeb-posYfigure));
				rectSelection.setPosition(e.getX()-(posXdeb-posXfigure)-3,e.getY()-(posYdeb-posYfigure)-3);
				if (jeSuisDroite(numFig)) //On bouge X2(longueur) et Y2(largeur si c'est une droite
					{getFig(numFig).setDimension(e.getX()-(posXdeb-posX2figure),e.getY()-(posYdeb-posY2figure));}
			}
		}
		repaint();			
	}

	public void mouseMoved(MouseEvent e) 
		{afficheStatus(e);} //On affiche en temps réels les informations

	public void mouseEntered(MouseEvent arg0){}
	public void mouseExited(MouseEvent arg0){}
	public void mouseClicked(MouseEvent e) {}

	
}
