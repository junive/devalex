import javax.swing.*;

import java.awt.*;
import java.sql.*;
import java.awt.event.*;

public class AjoutJournal extends JFrame implements ActionListener
{
	final private String drivers = "com.mysql.cj.jdbc.Driver";
	final private String url = "jdbc:mysql://localhost:3306/gestion";
	final private String user = "junive";
	final private String pass = "password";
	private JPanel Pa;
	private Container conte;
	private JLabel erreur,numFact,lib,deb,cred,dat,cpts,espace;
	private JTextField debit,credit,index,libelle;
	private JButton valider;
	private Statement stat;
	private Connection connex;
	private int requete2, maxLigne=0;
	private JournalAffich j;
	private Box err;

	private SelectionPlan selecPlan;
	private SelectionDate selecDate;
	
	public AjoutJournal()
	{   super();
		this.setResizable(false);
		//Initialisation des objets "connexion" et "Jcombobox" du plan;
		
		selecPlan=new SelectionPlan();
		selecDate=new SelectionDate();
		selecDate.affichJour();
		selecDate.affichMois();
		selecDate.affichAnnee();	

		setLayout(new BorderLayout(5,5));
		conte=getContentPane();
		Pa=new JPanel();

		//Initialisation des composants de la balance initiale
		debit=new JTextField(10);
		credit=new JTextField(10);
		debit.setText("0");
		credit.setText("0");
		index=new JTextField(10);
		index.setText("Index / Facture");
		libelle=new JTextField(10);
		libelle.setText("Libelle");
		
		// Des erreurs
		erreur=new JLabel();
		err=Box.createHorizontalBox();
		err.add(erreur);
		
		//Bouton de validation d'insertion
		valider=new JButton("Valider");
		valider.addActionListener(this);
		
		setLocation(50,50);
		setSize(700,700);
		setTitle("Ajout dans le journal");
		
		numFact = new JLabel("N° Facture: ");
		lib = new JLabel("Libellé: ");
		deb = new JLabel("Débit : ");
		cred = new JLabel("Crédit : ");
		dat = new JLabel("Date : ");
		cpts = new JLabel("        N° Comptes :");
		espace = new JLabel("                    ");
		
		Pa.add(numFact);
		Pa.add(index);
		Pa.add(lib);
		Pa.add(libelle);
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
       	
		//Affichage du journal
		j=new JournalAffich("AND day(j.Dat)='" + selecDate.getJour()+"'",
								selecDate.getMois(), selecDate.getAnnee());
		
		j.setPreferredSize(new Dimension(650, 550));    
		conte.add(j,BorderLayout.SOUTH);

		setVisible(true);		
	}

	

	public void actionPerformed(ActionEvent e)
	{ Object source = e.getSource();	
		
		if(source == valider)
		{erreur.setText("");

		        		  try
		        		  {//On insére dans la base "Balance" grace aux tableaux
		        		   Class.forName(drivers);
		      		       connex = DriverManager.getConnection(url , user, pass);
		      		       stat = connex.createStatement();
		        		   String essai="INSERT INTO Journal j (j.ordre,j.Index,j.NomC,j.NumC,j.Dat,j.Libelle,j.Credit,j.sDebit)" +
		        		   	" VALUES ("+selecPlan.getOrdre()+",'"+index.getText()+"','"+selecPlan.getNomC()+"',"+selecPlan.getNumC()+
		        		   	",'"+selecDate.getJour()+"/"+selecDate.getMois()+"/"+selecDate.getAnnee()+
		        		   	"','"+libelle.getText()+"',"+credit.getText()+","+debit.getText()+")"; 
		      		       requete2 =stat.executeUpdate(essai); 
		      		       stat.close();	
	        		   
		        		  }
		        		  catch (SQLException ew){ System.err.println(ew.getMessage());}//System.err.println(ew.getMessage());}
		      			  catch (ClassNotFoundException er) { System.err.println(er.getMessage()); }//System.err.println(er.getMessage());}	

	       
	       	  //Syntaxe d'attente obligatoire ar l'insertion prend un certain laps de temps.		
	       	  synchronized(this) 
	       	  {try {wait(1000);}
  		    	catch(InterruptedException ex){ ex.printStackTrace(); }} 
	       	  
	       	  //On instancie l'affichage des insertions
	       	
	       	j=new JournalAffich("AND day(j.Dat)='" + selecDate.getJour() +"'",
									selecDate.getMois(), selecDate.getAnnee());
	       	 
	          j.setPreferredSize(new Dimension(650,550));
	          conte.add(j, BorderLayout.SOUTH);
	         
	          j.revalidate(); 

	          //on rafraichit le message d'erreur et le solde  
	          err.revalidate();          
	          debit.setText("0");
	          credit.setText("0");
		
		}

				
	}
	

}
