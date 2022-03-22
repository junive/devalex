import java.awt.Color;
import java.awt.Graphics;

public class RectArrPlein extends RectPlein
{
	static final int arh=10;
	static final int arl=10;
	
	public RectArrPlein(int x,int y, int longueur,int largeur, Color contour, Color fond)
	{
		super(x,y,longueur,largeur,contour,fond);		
    }
	
	public void dessine(Graphics g)
	{
		g.setColor(super.contour);
		g.drawRoundRect(super.x,super.y,super.longueur,super.largeur,RectArrPlein.arl,RectArrPlein.arh);
		g.setColor(super.fond);
		g.fillRoundRect(super.x+1,super.y+1,super.longueur-1,super.largeur-1,arl-3,arh-3); //On centre le fond
	}
}
