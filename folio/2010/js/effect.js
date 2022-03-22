// JavaScript Document
onload = function() {init();}




var current_id = "corps_home";
var current_id_menu = "menu_home";
var current_sous_id = "corps_cv_infos";
var current_sous_id_menu = "menu_cv_infos";
var isSliding = false;

function setClass(id, new_class) {
	if (document.all) document.getElementById(id).className = new_class;
		else document.getElementById(id).setAttribute("class", new_class);
}

function init() {
		blindUpSousInit("menu_cv_infos", "corps_cv_infos");
		blindUpSousInit("menu_cv_etude", "corps_cv_etude");
		blindUpSousInit("menu_cv_xp", "corps_cv_xp");
		blindUpSousInit("menu_cv_comp", "corps_cv_comp");
		blindUpSousInit("menu_cv_gout", "corps_cv_gout");
		blindUpInit("menu_home", "corps_home");
		blindUpInit("menu_cv", "corps_cv");
		blindUpInit("menu_motiv", "corps_motiv");
		blindUpInit("menu_etude", "corps_etude");
		//blindUpInit("menu_stage", "corps_stage");
		blindUpInit("menu_prof", "corps_prof");
		//blindUpInit("menu_volon", "corps_volon");
		blindUpInit("menu_perso", "corps_perso");
		Effect.BlindDown(current_id, { duration: 1.0 });
		setClass(current_id_menu, "menu_sec_visited");
		setClass(current_sous_id_menu, "menu_sec_visited");
}


function blindUpInit(id_menu, id_corps) {
	//document.getElementById(id_corps).style.height = parseInt(document.documentElement.clientHeight)-85 +"px";
	document.getElementById(id_menu).onclick = function() {
		if(!isSliding) {
			if (current_id_menu != id_menu)setClass(id_menu, "menu_sec_visited");
			blindUpExe(id_menu, current_id, id_corps);
		}
		
	}
}
// Va dérouler la page vers le haut, puis, terminé, dérouler la nouvelle page vers bas
function blindUpExe(id_menu, id_hide, id_show) {
	setClass(current_id_menu, "menu_sec_visited")
	if (current_id_menu != id_menu) setClass(current_id_menu, "menu_sec"); // Verif de pas toucher au menu en cours
	
	Effect.BlindUp(id_hide, 
				  {duration: 1.0 , 
					   beforeStart: function() {
							isSliding = true;
					   }, afterFinish: function() {
							Effect.BlindDown(id_show, {
								duration: 1.0, 
								afterFinish: function() {
									if(id_show == "corps_cv")
										Effect.Appear(current_sous_id, { duration: 1.0, afterFinish: function() {isSliding = false;}});
									else isSliding = false;
									if(id_hide == "corps_cv") document.getElementById(current_sous_id).style.display="none";
								}
						});
							current_id = id_show;
							current_id_menu = id_menu;}
				  });	
}

function blindUpSousInit(id_menu, id_corps) {
	document.getElementById(id_menu).onclick = function() {
		if(!isSliding) {
			if (current_sous_id_menu != id_menu)setClass(id_menu, "menu_sec_visited");
			blindUpSousExe(id_menu, current_sous_id, id_corps);
		}
		
	}
}

function blindUpSousExe(id_menu, id_hide, id_show) {
	setClass(current_sous_id_menu, "menu_sec_visited")
	if (current_sous_id_menu != id_menu) setClass(current_sous_id_menu, "menu_sous"); 
	Effect.DropOut(id_hide, 
				  {duration: 1.0 , 
				   beforeStart: function() {
						isSliding = true;},
				   afterFinish: function() {
						Effect.Appear(id_show, { duration: 1.0, afterFinish: function() {isSliding = false;}});
						current_sous_id = id_show;
						current_sous_id_menu = id_menu;}
				  });	
}