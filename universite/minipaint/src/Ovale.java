import java.awt.Color;
import java.awt.Graphics;

public class Ovale extends Figure 
{
	
	public Ovale(int x,int y, int longueur,int largeur, Color contour)
	{
		super(x,y,longueur,largeur,contour);
	}

	public void dessine(Graphics g)
	{
		g.setColor(super.contour);
		g.drawOval(super.x,super.y,super.longueur,super.largeur);
	}
}