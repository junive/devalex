<SCRIPT LANGUAGE="php">
/////////////////////////////////////////////////////////////////////////////
////                     COMPTEUR DE TELECHARGEMENTS (Version base unique)///
////                      <15/10/00 Version 2.00>                        ////
////                      (c) <spineau@teaser.fr>                        ////
/////////////////////////////////////////////////////////////////////////////
////  Param�tre en entr�e : $F        : nom du fichier � t�l�charger (doit )
////                                    obligatoirement �tre dans le m�me
////                                    r�pertoire que le script.
////                        $I        : Valeur initiale du compteur
////  Appel du script     : <A HREF="dn.php?F=toto.zip&I=val_cpt">
/////////////////////////////////////////////////////////////////////////////
$HandleVT=@dbmopen("countdb","w");
If (!$HandleVT):
   $HandleVT=dbmopen("countdb","n");
Endif;
If (dbmexists($HandleVT,$F)):
   $PredVal=0;
   $PredVal=dbmfetch($HandleVT,$F);
   $NewVal=$PredVal+1;
   dbmreplace($HandleVT,$F,$NewVal);
Else:
   If ($I==""):
      $I=1;
   Endif;
   dbmInsert($HandleVT,$F,$I);
Endif;
@dbmclose($HandleVT);
Header("Location: ".$F);
Exit("");
</SCRIPT>