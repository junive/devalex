function getParent(element, parentTagName) {
	if (!element) return null;
		else if (element.nodeType == 1 && element.tagName.toLowerCase() == parentTagName.toLowerCase())
			return element;
				else return getParent(element.parentNode, parentTagName);
}

function submit_element(my_name) {
	document.getElementsByName(my_name)[0].click();
}

function put_the_value(my_obj, my_hidden_name, my_value) {
	getParent(my_obj, "form").elements[my_hidden_name].value = my_value;
}

function put_the_value_from_last(my_obj,  my_value, index_last) {
	my_hid = getParent(my_obj, "form").getElementsByTagName("input");
	my_hid[my_hid.length - 1 - index_last].value = my_value;
}

function initTinyMCE() {
	tinyMCE.init({
			// General options
			mode : "textareas",
			theme : "advanced",
			plugins : "safari,pagebreak,style,layer,table,save,advhr,advimage,advlink,emotions,iespell,inlinepopups,insertdatetime,preview,media,searchreplace,print,contextmenu,paste,directionality,fullscreen,noneditable,visualchars,nonbreaking,xhtmlxtras,template, php", 
	
			// Theme options
			theme_advanced_buttons1 : "save,newdocument,|,bold,italic,underline,strikethrough,|,justifyleft,justifycenter,justifyright,justifyfull,styleselect,formatselect,fontselect,fontsizeselect",
			theme_advanced_buttons2 : "cut,copy,paste,pastetext,pasteword,|,search,replace,|,bullist,numlist,|,outdent,indent,blockquote,|,undo,redo,|,link,unlink,anchor,image,cleanup,help,code,|,insertdate,inserttime,preview,|,forecolor,backcolor",
			theme_advanced_buttons3 : "tablecontrols,|,hr,removeformat,visualaid,|,sub,sup,|,charmap,emotions,iespell,media,advhr,|,print,|,ltr,rtl,|,fullscreen",
			theme_advanced_buttons4 : "insertlayer,moveforward,movebackward,absolute,|,styleprops,|,cite,abbr,acronym,del,ins,attribs,|,visualchars,nonbreaking,template,pagebreak",
			theme_advanced_toolbar_location : "top",
			theme_advanced_toolbar_align : "left",
			theme_advanced_statusbar_location : "bottom",
			theme_advanced_resizing : true,
			extended_valid_elements : "iframe[src|width|height|name|align]",
			// Example content CSS (should be your site CSS)
			content_css : "css/content.css",
	
			// Drop lists for link/image/media/template dialogs
			template_external_list_url : "lists/template_list.js",
			external_link_list_url : "lists/link_list.js",
			external_image_list_url : "lists/image_list.js",
			media_external_list_url : "lists/media_list.js",
	
			// Replace values for the template plugin
			template_replace_values : {
				username : "Some User",
				staffid : "991234"
			}
		});
		
		
}