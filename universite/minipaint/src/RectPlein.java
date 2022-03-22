import java.awt.Color;
import java.awt.Graphics;

public class RectPlein extends Rectangle 
{

	
	public RectPlein(int x,int y, int longueur,int largeur, Color contour,Color fond)
	{
		super(x,y,longueur,largeur,contour);
		super.fond=fond;
	}

	public void dessine(Graphics g)
	{
		g.setColor(super.contour);
		g.drawRect(super.x,super.y,super.longueur,super.largeur);
		g.setColor(super.fond);
		g.fillRect(super.x+1,super.y+1,super.longueur-1,super.largeur-1);
	}
}
