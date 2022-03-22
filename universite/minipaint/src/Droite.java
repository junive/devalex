import java.awt.Color;
import java.awt.Graphics;

public class Droite extends Figure
{
	public Droite(int x,int y, int longueur,int largeur, Color contour)
	{
		super(x,y,longueur,largeur,contour);	
	}

	public void dessine(Graphics g)
	{
		g.setColor(super.contour);
		g.drawLine(super.x,super.y,super.longueur,super.largeur);	
	}
}
