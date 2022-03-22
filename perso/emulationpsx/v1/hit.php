<?php
////////////// Compteur de téléchargment HitWall //////////////////////
/// On charge la base et on la tri par nombre de téléchargements   ////
Echo "<TABLE COLS=1 BORDER=0 CELLPADDING=6 CELLSPACING=0 WIDTH='320'><TR><TD BGCOLOR='BLUE'>";
Echo "<FONT COLOR='WHITE'><B><CENTER>Classement en date : ".date("d-m-Y H:i:s")."</CENTER></B></FONT>";
Echo "</TD></TR></TABLE>";
Echo "<TABLE COLS=2 BORDER=0 CELLPADDING=4 CELLSPACING=0 WIDTH='320' STYLE='border:thin solid #0601d7'><TR><TD BGCOLOR='BLUE'>";
IF (strlen($BASE)>0):
   If ($BASE[strlen($BASE)-1]<>"/"):
      $BASE.="/";
   Endif;
Endif;
$HandleVT=@dbmopen($BASE."countdb","r");
If ($HandleVT):
   $key = dbmfirstkey($HandleVT);
   while ($key) {
        $Valeur=dbmfetch($HandleVT, $key);
        $i=strlen($Valeur);
        while ($i<10){
          $Valeur=" ".$Valeur;
          $i++;
        }
        $Resultat[]=$Valeur."!".$key;
        $key = dbmnextkey($HandleVT, $key);
   }
   @dbmclose($HandleVT);
   rsort($Resultat);
   for ($i=0;$i<count($Resultat);$i++){
       $valeurs=explode("!",$Resultat[$i]);
       Echo "<TR>";
       Echo "<TD BGCOLOR='WHITE'><B>".$valeurs[1]."</TD>";
       Echo "<TD BGCOLOR='WHITE' ALIGN='RIGHT'><B>".Trim($valeurs[0])."</TD>";
       Echo "</TR>";
   }
Else:
   Echo "<TR><TD>Pas de classement pour le moment</TD><TD>&nbsp;</TD></TR>";
Endif;
echo "</TABLE>";
?>