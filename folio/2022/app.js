var qs = function(elem) {
	return document.querySelector(elem);
}

// Replace the tag of an element
var createElem = function(oldElem) {
	if (!oldElem) return null;
	let tagName = oldElem.getAttribute("tag");
	let elem = document.createElement(tagName);
	for ( const attr of oldElem.attributes) {
		if (attr.name == "tag") continue;
		elem.setAttribute(attr.name, attr.value);
	}
	elem.innerHTML = oldElem.innerHTML;
	return elem
}

var fadeOut = function(elem) {
	//console.log(elem);
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.05) {
            clearInterval(timer);
			op = 0;
            elem.style.display = 'none';
        }
        elem.style.opacity = op;
        op = op - 0.03;
    }, 5);
}

var fadeIn = function(elem) {
    var op = 0;  // initial opacity
    elem.style.display = 'flex';
    var timer = setInterval(function () {
        if (op >= 1)  {
			clearInterval(timer);
			op = 1;
		}
        elem.style.opacity = op;
        op = op + 0.03;
    }, 5);
}

// Change background of nav bar on scroll
var toogleNavScroll = function() {
	let isScroll = (window.scrollY > window.innerHeight - 55);
	let nav = qs("#nav").classList;
	if (isScroll)  {  nav.remove("bg-transparent"); }
     else nav.add("bg-transparent");
}


class Figure {
	
	constructor(datas) {
		this.figures = this.getFigures(datas);
		this.figureInterface = qs( "#folio_figure_interface");
	}
	
	getFigures(datas) {
		let figs = [];
		for (let i = 0; i < datas.children.length; i++) { // Section
			figs[i] = {};
			for ( const elem of Array.from(datas.children[i].children) ) { 
				figs[i][elem.getAttribute("tag")] = elem;
			}
		}
		return figs;
	}
	
	addFigures(container, showBody) {
		for (let i=0; i < this.figures.length; i++) {
			let figure = this.figures[i];
			let figureElem = this.figureInterface.cloneNode(true);
			
			figureElem.setAttribute("id", container.getAttribute("id") + i);
			let child = figureElem.firstElementChild;
			
			child.appendChild(createElem(figure["figcaption"]));
			child.appendChild(createElem(figure["img"]));

			figureElem.onclick = () => { 
				let pop = figure["sub"] ? new OpenSub(figure) :  new OpenMedia(figure);
				pop.box.close.onclick = () => { 
					pop.hide(showBody); 
				}
				pop.show(showBody);
			};
			container.appendChild(figureElem);
		}
	}
}

class OpenBox {
	
	constructor(figure) {
		this.box = {};
		this.figure = figure;
		this.title = createElem(figure["figcaption"]);
		this.descript = createElem(figure["aside"]);
	}

	appendTitle() {
		this.box.title.innerHTML = "";
		this.box.title.appendChild(this.title);
	}
	
	appendDescript() {
		this.box.descript.innerHTML = "";
		if (this.descript) this.box.descript.appendChild(this.descript);
	}
	
	// Open the portfolio pop up 
	show(show) {
		this.appendTitle();
		this.appendDescript();
		if (!show) this.hideBody();
		fadeIn( this.box.container );
	}
	
	hide(show) {
	
		fadeOut( this.box.container );
		if (!show) this.showBody();
		this.box.content="";
	}
	
	showBody() {
		qs("#nav").style.display = 'flex';
		document.body.style.overflow = 'auto';
		//document.body.style.filter: "blur(1.5rem)";
	}
	
	hideBody() {
		qs("#nav").style.display = 'none';
		document.body.style.overflow = 'hidden';
	}
}

class OpenSub extends OpenBox {
	
	constructor(figure) {
		super(figure);
		this.box = {
			container : qs("#sub"),
			title : qs("#sub_top_title"),
			close : qs("#sub_top_close"),
			descript : qs("#sub_aside"),
			content : qs("#sub_content")
		}
	}
	
	appendFigures() {
		this.box.content.innerHTML = "";
		let sub = new Figure(this.figure["sub"]);
		sub.addFigures(this.box.content, true);
	}
	
	show() {
		this.appendFigures();
		super.show();
	}

}

class OpenMedia extends OpenBox {
	
	constructor(figure) {
		super(figure);
		this.media = this.createMedia(figure);;
		this.box = {
			container : qs("#pop"),
			title : qs("#pop_top_title"),
			close : qs("#pop_top_close"),
			descript : qs("#pop_aside"),
			media : qs("#pop_media"),
			loader : qs("#pop_loader")
		}
	}
	
	isVideo() {
		return this.figure["video"];
	}
	
	createMedia() {
		if (this.isVideo()) { 
			let source = createElem(this.figure["source"]);
			let video = createElem(this.figure["video"]);
			video.appendChild(source);
			return video;
		} else return createElem(this.figure["iframe"]);
		return null;
	}
	
	appendMedia() {
		this.box.media.innerHTML = "";
		this.box.loader.style.display = 'flex'; // Add loader
		this.box.media.appendChild(this.media);

		let afterLoad = () => { this.box.loader.style.display = 'none'; } // Remove loader
		if ( this.isVideo() )  this.media.onloadeddata = () => { afterLoad(); }   // On video
		 else this.media.onload = () => { afterLoad(); } // On iframe
	}
	
	hide(show) {
		super.hide(show);
		this.box.media.innerHTML="";
	}
	
	show(show) {
		this.appendMedia();
		super.show(show);
	}
	

}

// Your code to run since DOM is loaded and ready
document.addEventListener("DOMContentLoaded", (event) => { 
	//addToFolioAllImages(qs( "#folio_box"), qs("#folio_data"));
	let folio = new Figure(qs("#folio_data"));
	folio.addFigures(qs( "#folio_box"));

	let hobbies = new Figure(qs("#hobbies_data"));
	hobbies.addFigures(qs( "#hobbies_box"));
	
	toogleNavScroll(); // Correct bug when nav is loading in the middle of page
});

window.addEventListener('scroll', (event) => {
	toogleNavScroll();
});


