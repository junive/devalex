<?
include("infos.php") ;

if(isset($_POST['rate']))
	{header("Location: ../".$redirect);}	


if(isset($_POST['rate']))
{
     $vote = $_POST['rate'];
	  
	  	if($vote == "1"){$total += 1;} 
	  	if($vote == "2"){$total += 2;}	  
		if($vote == "3"){$total += 3;} 		
		if($vote == "4"){$total += 4;}
		if($vote == "5"){$total += 5;}
		
		$req="update psx_votes set total=$total where num=".$select;
        $res=mysqli_query($db, $req) or die ("requete invalide up compt");


		 if( ($vote == "1") || ($vote == "2") || ($vote == "3") || ($vote == "4") || ($vote == "5") )
		 {
		$votants+=1	;
		$req="update psx_votes set votants=$votants where num=".$select;
        $res=mysqli_query($db, $req) or die ("requete invalide up compt");
		
		// Calcul de la moyenne 
		$moy = ($total/$votants);
		$virg = round($moy*100);
		$moy= ($virg/100);
		$req="update psx_votes set moyenne=$moy where num=".$select;
        $res=mysqli_query($db, $req) or die ("requete invalide up compt");
		 }
		 
	print "Si la page ne se redirige pas automatiquement cliquer ici :\n";
 	print "<a href=<? echo $redirect ?>> Rediriger</a>\n\n";
 }

 if(isset($_POST['rate']))
	{header("Location: ../".$redirect);}	
 
// Affichage des étoiles 
if (($moyenne >=0)&&($moyenne<1.5))
{ print "<img src=\"../image/etoile2.jpg\" border=\"0\"><img src=\"../image/etoile1.jpg\" border=\"0\"><img src=\"../image/etoile1.jpg\" border=\"0\"><img src=\"../image/etoile1.jpg\" border=\"0\"><img src=\"../image/etoile1.jpg\" border=\"0\">"; }
if (($moyenne >=1.5)&&($moyenne<2.5))
{ print "<img src=\"../image/etoile2.jpg\" border=\"0\"><img src=\"../image/etoile2.jpg\" border=\"0\"><img src=\"../image/etoile1.jpg\" border=\"0\"><img src=\"../image/etoile1.jpg\" border=\"0\"><img src=\"../image/etoile1.jpg\" border=\"0\">"; } 
if (($moyenne >=2.5)&&($moyenne<3.5))
{ print "<img src=\"../image/etoile2.jpg\" border=\"0\"><img src=\"../image/etoile2.jpg\" border=\"0\"><img src=\"../image/etoile2.jpg\" border=\"0\"><img src=\"../image/etoile1.jpg\" border=\"0\"><img src=\"../image/etoile1.jpg\" border=\"0\">"; } 
if (($moyenne >=3.5)&&($moyenne<4.2))
{ print "<img src=\"../image/etoile2.jpg\" border=\"0\"><img src=\"../image/etoile2.jpg\" border=\"0\"><img src=\"../image/etoile2.jpg\" border=\"0\"><img src=\"../image/etoile2.jpg\" border=\"0\"><img src=\"../image/etoile1.jpg\" border=\"0\">"; } 
if (($moyenne >=4.2)&&($moyenne<=5))
{ print "<img src=\"../image/etoile2.jpg\" border=\"0\"><img src=\"../image/etoile2.jpg\" border=\"0\"><img src=\"../image/etoile2.jpg\" border=\"0\"><img src=\"../image/etoile2.jpg\" border=\"0\"><img src=\"../image/etoile2.jpg\" border=\"0\">"; } 
print " ".$moyenne." ";
print " (".$votants." votes)\n";






?>

<html>
<br><br>
<select  style="font-family: comic sans ms;font-size:12px;color:#000099;background-color: #C0CEF5;width:100px" name="rate" class="qsselect">
			<option name="vote" value="1">1 - Oubliette</option>
    		<option name="vote" value="2">2 - Bof</option>
   		 	<option name="vote" value="3" selected>3 - Moyen</option>
    		<option name="vote" value="4">4 - Bon</option>
    		<option name="vote" value="5">5 - Excellent</option>
 			</select>
<input type="submit" value=" VOTE " style="font-family: comic sans ms;font-size:12px; color:#000099; background-color:#C0CEF5; width:50" >

</html>