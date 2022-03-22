import java.awt.*;

import javax.swing.*;

public class BalanceInitiale extends JPanel {

	private JPanel panneau;
	private BorderLayout Bords;
	
	public BalanceInitiale()
	{
		panneau=new JPanel();		
		Bords=new BorderLayout(5,5);
		
		BalanceAffich b=new BalanceAffich();
		b.setPreferredSize(new Dimension(600, 610)); 
		panneau.add(b);
		add(panneau,BorderLayout.CENTER);
		setVisible(true);
	}
}
