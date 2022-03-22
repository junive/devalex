<?
//include($_SERVER['DOCUMENT_ROOT'] . $parentFold . $emuPsxV4 ."/emulateurs_playstation/connect_visite.php") ;
include($_SERVER['DOCUMENT_ROOT'] . $parentFold . $emuPsxV4 ."/emulateurs_playstation/infos.php") ;



$req="select * from psx_votes ORDER BY clic DESC";
$res=mysqli_query($db, $req);
while($ligne = mysqli_fetch_object ($res))
{
echo "<A HREF='".$siteUrl. $emuPsxV4 ."/emulateurs_playstation/redir.php?redirection=clic.php&id=$ligne->num'>$ligne->nom</A><br>";
echo "Téléchargé [$ligne->clic] fois<br>";
echo "<br>";
$moye=$ligne->moyenne;
if (($moye >=0)&&($moye<1.5))
{ print "<img src=\"../image/etoile2.jpg\" border=\"0\"><img src=\"../image/etoile1.jpg\" border=\"0\"><img src=\"../image/etoile1.jpg\" border=\"0\"><img src=\"../image/etoile1.jpg\" border=\"0\"><img src=\"../image/etoile1.jpg\" border=\"0\">"; }
if (($moye >=1.5)&&($moye<2.5))
{ print "<img src=\"../image/etoile2.jpg\" border=\"0\"><img src=\"../image/etoile2.jpg\" border=\"0\"><img src=\"../image/etoile1.jpg\" border=\"0\"><img src=\"../image/etoile1.jpg\" border=\"0\"><img src=\"../image/etoile1.jpg\" border=\"0\">"; } 
if (($moye >=2.5)&&($moye<3.5))
{ print "<img src=\"../image/etoile2.jpg\" border=\"0\"><img src=\"../image/etoile2.jpg\" border=\"0\"><img src=\"../image/etoile2.jpg\" border=\"0\"><img src=\"../image/etoile1.jpg\" border=\"0\"><img src=\"../image/etoile1.jpg\" border=\"0\">"; } 
if (($moye >=3.5)&&($moye<4.2))
{ print "<img src=\"../image/etoile2.jpg\" border=\"0\"><img src=\"../image/etoile2.jpg\" border=\"0\"><img src=\"../image/etoile2.jpg\" border=\"0\"><img src=\"../image/etoile2.jpg\" border=\"0\"><img src=\"../image/etoile1.jpg\" border=\"0\">"; } 
if (($moye >=4.2)&&($moye<=5))
{ print "<img src=\"../image/etoile2.jpg\" border=\"0\"><img src=\"../image/etoile2.jpg\" border=\"0\"><img src=\"../image/etoile2.jpg\" border=\"0\"><img src=\"../image/etoile2.jpg\" border=\"0\"><img src=\"../image/etoile2.jpg\" border=\"0\">"; } 
print " moy : ".$moye."";
echo "<br>";
echo "($ligne->votants votes)";
echo "<br>";

echo "--------------------------------------------------";
echo "<br><br>";
}

?>