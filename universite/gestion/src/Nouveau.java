import javax.swing.*;

import java.awt.*;
import java.sql.*;
import java.awt.event.*;

public class Nouveau extends JFrame implements ActionListener
{
	final private String drivers = "com.mysql.cj.jdbc.Driver";
	final private String url = "jdbc:mysql://localhost:3306/gestion";
	final private String user = "junive";
	final private String pass = "password";
	private JPanel Pa;
	private Container conte;
	private JLabel erreur,deb,cred,dat,cat,cpts,espace;
	private JTextField debit,credit;
	private JButton valider;
	private Statement stat;
	private Connection connex;
	private int requete2;
	private BalanceAffich b;
	private Box err;
	private SelectionPlan selecPlan;
	private SelectionDate selecDate;
	
	public Nouveau()
	{   super();
		this.setResizable(false);
	
		//Initialisation des objets "connexion" et "Jcombobox" du plan;
		selecPlan=new SelectionPlan();
		selecDate=new SelectionDate();
		
		setLayout(new BorderLayout(5,5));
		conte=getContentPane();
		
		Pa=new JPanel();

		//Initialisation des composants de la balance initiale
		debit=new JTextField(10);
		credit=new JTextField(10);
		debit.setText("0");
		credit.setText("0");
		
		deb = new JLabel("        Débit :   ");
		cred = new JLabel("       Crédit :   ");
		dat = new JLabel("        Date :   ");
		cpts = new JLabel("   N° Comptes :");
		espace = new JLabel("           ");
		
		selecDate.affichJour();
		selecDate.affichMois();
		selecDate.affichAnnee();
		// Des erreurs
		erreur=new JLabel();
		err=Box.createHorizontalBox();
		err.add(erreur);
		
		//Bouton de validation d'insertion
		valider=new JButton("Valider");
		valider.addActionListener(this);
		
		setLocation(50,50);
		setSize(700,700);
		setTitle("Nouveau");
		
		Pa.add(deb);
		Pa.add(debit);
		Pa.add(cred);
		Pa.add(credit);
		Pa.add(dat);
		Pa.add(selecDate);
		Pa.add(cpts);
		Pa.add(selecPlan);
		Pa.add(espace);
		Pa.add(valider);
		Pa.add(err);
		
		add(Pa);
       	
		//Affichage de la balance
		b=new BalanceAffich(); 
		b.setPreferredSize(new Dimension(500, 550));    
		conte.add(b,BorderLayout.SOUTH);
		
		setVisible(true);		
	}

	

	public void actionPerformed(ActionEvent e)
	{ Object source = e.getSource();	
		
		if(source == valider)
		{erreur.setText("");
			

		        		 
   		  try
		        		  {//On insére dans la base "Balance" grace aux tableaux
		        		   Class.forName(drivers);
		      		       connex = DriverManager.getConnection(url, user, pass);
		      		       stat = connex.createStatement();
		        		   String essai="INSERT INTO BalanceIni1  VALUES ("+selecPlan.getNumC()+", '"+selecPlan.getNomC()+
		        		   "',"+selecPlan.getOrdre() +",'"+debit.getText()+"', '"+credit.getText()+"', '"+selecDate.getJour()+"/"+selecDate.getMois()+"/"+selecDate.getAnnee()+"')";
		      		       requete2 =stat.executeUpdate(essai); 	  
		    		        
		        		   stat.close();
		        		  }
		        		  catch (SQLException ew){ erreur.setText("Opération déjà enregistrée");}//System.err.println(ew.getMessage());}
		      			  catch (ClassNotFoundException er) { erreur.setText("Opération déjà enregistrée"); }//System.err.println(er.getMessage());}	

		      			  if (erreur.getText()!="Opération déjà enregistrée")
		      			  {
		      			  		try
		      			  		{
		      			  			Class.forName(drivers);
		      			  			connex = DriverManager.getConnection(url);
		      			  			stat = connex.createStatement();
		      			  			String toto="INSERT INTO Journal j (j.ordre,j.Index,j.NomC,j.NumC,j.Dat,j.Credit,j.Debit) " +
												"VALUES ("+selecPlan.getOrdre()+",'Balance','"+selecPlan.getNomC()
		      			  						+"', "+selecPlan.getNumC()+",'"+selecDate.getJour()+"/"+selecDate.getMois()
												+"/"+selecDate.getAnnee()+"', '"+credit.getText()+"', '"+debit.getText()+"')";
		      			  			requete2 =stat.executeUpdate(toto);
		      			  			stat.close();	
		      			  
		      			  		}
		      			  		catch (SQLException ew){ System.err.println(ew.getMessage());}
		      			  		catch (ClassNotFoundException er) { System.err.println(er.getMessage()); }

		      			  }
	       	  //Syntaxe d'attente obligatoire ar l'insertion prend un certain laps de temps.		
	       	  synchronized(this) 
	       	  {try {wait(1000);}
  		    	catch(InterruptedException ex){ ex.printStackTrace(); }} 
	       	  
	       	  //On instancie l'affichage des insertions
		      b = new BalanceAffich();
	          b.setPreferredSize(new Dimension(500,550));
	          conte.add(b, BorderLayout.SOUTH);
	          b.revalidate(); 
	           
	          //on rafraichit le message d'erreur et le solde  
	          err.revalidate();          
	          debit.setText("0");
	          credit.setText("0");

			
		}

				
	}
}

