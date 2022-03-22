import java.awt.Color;
import java.awt.Graphics;
import java.io.Serializable;

public abstract class Figure implements  Serializable
{	

	protected int x;
	protected int y;
    protected int longueur;
    protected int largeur;
    protected Color contour,fond;
   
    public Figure(int x,int y, int longueur,int largeur, Color contour) //constructeur
    {
    	this.x=x;
    	this.y=y;
    	this.longueur=longueur;
    	this.largeur=largeur;
    	this.contour=contour;
    }
    
    public void setPosition(int x, int y) //modifie la position
    {
    	this.x=x;
    	this.y=y;
    }
    
    public void setDimension(int longueur, int largeur) //modifie la longueur et la largeur
	{
    	this.longueur=longueur;
    	this.largeur=largeur;
	}
    
    public void setCouleurCont(Color col) //Change la couleur
    	{this.contour=col;}
    
    public void setCouleurFond(Color col)//Change la couleur
		{this.fond=col;}
    
    public abstract void dessine(Graphics g);//Dessine la figure
 
    public String toString() //afiche les infos
    	{return(+this.x+" "+this.y+" "+this.longueur+" "+this.largeur);}
	
}
