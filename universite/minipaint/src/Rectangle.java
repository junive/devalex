import java.awt.Color;
import java.awt.Graphics;

public class Rectangle extends Figure
{
	public Rectangle(int x,int y, int longueur,int largeur, Color contour)
	{
		super(x,y,longueur,largeur,contour);
	}
	
	public void dessine(Graphics g)
	{
		g.setColor(super.contour);
		g.drawRect(super.x,super.y,super.longueur,super.largeur);	
	}
}
