<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="fr" lang="fr">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />
		
		<link rel="stylesheet" type="text/css" href="redim.css" media="screen" />
		<script type="text/javascript" src="variable.js" charset="ISO-8859-1">	</script>
		<script type="text/javascript" src="raccourcis.js" charset="ISO-8859-1">	</script>
		<script type="text/javascript" src="menus.js" charset="ISO-8859-1">	</script>
		<script type="text/javascript" src="fonds.js" charset="ISO-8859-1">	</script>
		<script type="text/javascript" src="fenetre.js" charset="ISO-8859-1">	</script>
		<script type="text/javascript" src="dragdrop.js" charset="ISO-8859-1">	</script>
		<script type="text/javascript" src="initialise.js" charset="ISO-8859-1">	</script>
		<script type="text/javascript" src="fonction.js" charset="ISO-8859-1">	</script>
		<script type="text/javascript" src="ajax.js" charset="ISO-8859-1">	</script>
		<title>OS Web</title>
	</head>
	
	<body id="corps" marginheight="0" marginwidth="0" leftmargin="0" rightmargin="0" topmargin="0" bottommargin="0" onmousedown="droite(event);"  onclick="enleverMenuStart()" onmousemove="getPositionCurseur(event);if(verifBarreDedans){moveAllAction();}; resizeAllAction();" onmouseup="leaveAllAction();repositionneDansCadre();" onresize="repositionneBarre();">
		
		<!-- Conteneurs de fenêtre -->
		<div id="tomove4" style="font-size:12px;line-height:14px;" ondblclick="interieur()" onmousedown="downAction(this);" 
		onmousemove="moveAction(this)"; > Favoris<br />glisser<br />deposer</div> 
		<!-- barre de menu cachée -->
		<div id="barreMenuPetit" onmouseover="defilMenuGrand();"></div>
		<!-- barre de menu montrée -->
		<div id="barreMenuGrand"  
		onmouseover="barreMontre('barreMenuGrand');barreMontreReduit();" 	
		onmouseout="if(!verifBarreDroit){barreCacheMenuGrand()};barreMontreMenuGrand();"
		onmousedown="gardeClicDroit(event);barreCache('menuStart');">
		<!-- bouton start -->	
			<div style="position: absolute;" cellpadding="0" cellspacing="0" id="boutStart">
				<!--<form id="start" method="POST" style="margin:0;padding:0;">-->
					<div id="starto"  onclick="barreMontre('menuStart');opaciteMenuStart();verifMenuStart=true"  
					type="button"  ></div>
				<!--</form>-->
			</div>
		</div>	
		<!-- sous menu -->
		<div id="menuFichier"  style="cursor:default;" onmouseover="barreMontre('menuFichier');" onmouseout="barreCache('menuFichier');" ></div>
		<!-- icone de test -->		
		<div id="ic" style="font-size:12px;line-height:14px;" class="ic" ondblclick="createFenetreGrand(2);">Double<br>Clique</div>		
		<!-- menu du clic droit -->
		<div id="cadreClicDroit"  style="cursor:default; "></div>

		<script type="text/javascript">	
		/* Initialisation des différents éléments */
		//positionne('tomove4', '1400px', '100px');/////PA OUBLIERRRRR
			//positionne('ic', '30px', '30px');
			initialiseBarreMenu();
			isClicked = false;
  		</script>
	
	</body>
</html>