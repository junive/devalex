import java.awt.Color;
import java.awt.Graphics;

public class OvPlein extends Ovale 
{	
	
	public OvPlein(int x,int y, int longueur,int largeur, Color contour,Color fond)
	{
		super(x,y,longueur,largeur,contour);
		super.fond=fond;
    }
	
	public void dessine(Graphics g)
	{
		g.setColor(super.contour);
		g.drawOval(super.x,super.y,super.longueur,super.largeur);
		g.setColor(super.fond);
		g.fillOval(super.x+1,super.y+1,super.longueur-1,super.largeur-1);		
	}
}
