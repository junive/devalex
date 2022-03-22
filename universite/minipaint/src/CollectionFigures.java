import java.awt.Graphics;
import java.io.Serializable;
import java.util.ArrayList;

public class CollectionFigures implements  Serializable
{

	private static final long serialVersionUID = 1L;
	private ArrayList<Figure> collection;
	
	public CollectionFigures() //Constructeur
		{this.collection = new ArrayList<Figure>();}

	public void ajoutFig(Figure i) //Ajout d'une figure à la liste
		{this.collection.add(i);}

	public void supprimerFig(int i) //suppression d'une figure de liste
		{this.collection.remove(i);}
	
	public void supprimmerToutesFig()  //supression de toutes les figures
		{this.collection.removeAll(collection);}
		
	public void dessineTout(Graphics g) //Dessine de toutes les figures
	{
		for(int i=0;i<this.collection.size();i++)
			{this.collection.get(i).dessine(g);}	
	}
	
	public ArrayList<Figure> getCollection() //Accesseur
		{return this.collection;}

	public void setCollection(CollectionFigures f) //modifie la liste
		{this.collection=f.getCollection();}
	
	public String toString() //Affiche des informations 
	{
		String s="";
			for(int i=0;i<this.collection.size();i++)
			{s += this.collection.get(i).toString()+"  ";}
		return s;
	}
	

	

}