<?
//include($_SERVER['DOCUMENT_ROOT'] . $parentFold . $emuPsxV4 ."/emulateurs_playstation/connect_visite.php") ;

$req="select * from psx_votes ORDER BY moyenne DESC";
$res=mysqli_query($db, $req);

$moyenne->$ligne->moyenne;

if (($moyenne >=0)&&($moyenne<1.5))
{ print "<img src=\"../image/etoile2.jpg\" border=\"0\"><img src=\".../image/etoile1.jpg\" border=\"0\"><img src=\"../image/etoile1.jpg\" border=\"0\"><img src=\"../image/etoile1.jpg\" border=\"0\"><img src=\"../image/etoile1.jpg\" border=\"0\">"; }
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
echo "<br>";
echo "--------------------------------------------------";
echo "<br>";



?>
