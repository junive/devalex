import java.awt.Color;
import java.awt.Graphics;

public class RectArr extends Rectangle
{
	static final int arh=10;
	static final int arl=10;
	
	public RectArr(int x,int y, int longueur,int largeur, Color contour)
	{
		super(x,y,longueur,largeur,contour);		
    }
	
	public void dessine(Graphics g)
	{
		g.setColor(super.contour);
		g.drawRoundRect(super.x,super.y,super.longueur,super.largeur,arl,arh);
	}
}
