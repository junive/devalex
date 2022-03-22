<SCRIPT LANGUAGE="php">
/////////////////////////////////////////////////////////////////////////////
////                     COMPTEUR DE TELECHARGEMENTS(Version base unique)////
////                      <16/10/00 Version 2.00>                        ////
////                      (c) <spineau@teaser.fr>                        ////
/////////////////////////////////////////////////////////////////////////////
////  Param�tre en entr�e : $F        : nom du fichier � t�l�charger (doit )
////                                    obligatoirement �tre dans le m�me
////                                    r�pertoire que le script.
////                        $P        : Si $P>0 aligne sur $P caract�res avec le contenu
////                                    de $C
////                        $C        : Caract�re � utiliser pour formater la chaine.
////
////  Appel du script     : Voir doc
/////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////
Function Align($num="0",$P,$C=" "){
////////////////////////////////////////////////////////////////////////////
   // Aligne un nombre sur $P caract�res avec le contenu de $C
   If ($P<>""):
      $str=$num;
      for ($x=strlen($str);$x<$P;$x++){
          $str=$C.$str;
      }
      return $str;
    Endif;
}
///-------------------------------------------------------------------------
Function af($F="",$P=6,$C="0"){
PrintCompteur($F,$P,$C);
}
///-------------------------------------------------------------------------
Function PrintCompteur($F="",$P=6,$C="0"){
Global $BASE;
IF (strlen($BASE)>0):
   If ($BASE[strlen($BASE)-1]<>"/"):
      $BASE.="/";
   Endif;
Endif;
$HandleVT=@dbmopen($BASE."countdb","r");
If ($HandleVT):
   If (dbmexists($HandleVT,$F)):
      $Val=dbmfetch($HandleVT,$F);
      Echo Align($Val,$P,$C);
   Else:
      echo Align("0",$P,$C);
   Endif;
   @dbmclose($HandleVT);
Else:
   echo Align("?",$P,"?");
Endif;
}
</SCRIPT>