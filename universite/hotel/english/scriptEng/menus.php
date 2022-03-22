<?PHP
// On va créer nos différents menus ici.
function menuClass($num, $url, $titre, $numMenu)
	{
		global $siteUrl, $europellier;
		//Si le numéro de la page est n'est pas le numéro du menu
		if ($numMenu!=$num)
		{
		//On créé notre menu
		echo " <tr onMouseOver=\"bouton$num.src = '".$siteUrl . $europellier."/image/point.gif'\" onMouseOut=\"bouton$num.src = '".$siteUrl . $europellier."/image/pixel.gif'\" > \n"; 	
		echo " <td width=\"20\" class=\"espace\">  \n ";
		echo " <img alt=\"\" src=\"".$siteUrl . $europellier."/image/pixel.gif\" width=\"19\" height=\"12\" border=0 name=\"bouton$num\"> \n";
		echo " </td> \n";
		echo " <td width=\"130\" height=\"20\" class=\"Menu\" > \n";
			//Si c'est le menu principale.
			if ($num==0)
			{
				echo " <a class=\"menus\" href=\"".$siteUrl . $europellier."/english/$url.php\">$titre </a>\n ";
			}
			//Sinon, on change la direction
			else
			{
				echo " <a class=\"menus\" href=\"".$siteUrl . $europellier."/english/Montpellier_Hotel_Eng/$url.php\">$titre </a>\n ";}
				echo " </td> </tr> \n";
			}
		//Si c'est le menu sélectionné, on va changer la couleur et afficher le point
		else 
		{
		echo " <tr><td width=\"20\" class=\"espace\"> \n";
        echo " <img alt=\"\" src=\"".$siteUrl . $europellier."/image/point.gif\" width=\"19\" height=\"12\" border=0 name=\"bouton$num\"> \n";
		echo " </td> ";
		echo " <td width=\"130\"  height=\"20\" class=\"Menu\" > \n";	
		echo " <a style=\"color:#fdbc37;\" class=\"menus\" href=\"".$siteUrl . $europellier."/english/Montpellier_Hotel_Eng/$url.php\">$titre</a> \n" ;		
		}
	}	
/**		
function menuSelect($num, $url, $titre)
		{
		echo "<tr><td width=\"20\" class=\"espace\"> \n";
        echo " <img alt=\"\" src=\"".$siteUrl . $europellier."/image/point.gif\" width=\"19\" height=\"12\" border=0 name=\"bouton$num\"> \n";
		echo " </td> ";
		echo " <td width=\"130\"  height=\"20\" class=\"Menu\" > \n";	
		if ($num==0)
		{echo " <a style=\"color:#fdbc37;\" class=\"menus\" href=\"".$siteUrl . $europellier."/$url.php\">$titre</a> \n" ;}
		else { " <a style=\"color:#fdbc37;\" class=\"menus\" href=\"".$siteUrl . $europellier."/Montpellier_Hotel/$url.php\">$titre</a> \n" ; }
		echo " </td></tr> \n";
		}
*/
?>
		