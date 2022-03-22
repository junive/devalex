(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"ProjetCV_HTML5 Canvas_atlas_", frames: [[0,0,600,500],[784,0,180,30],[602,0,180,30],[602,32,180,30],[0,502,992,208],[505,821,498,106],[0,712,503,107],[505,712,503,107],[0,821,503,107]]}
];


// symbols:



(lib.Background = function() {
	this.initialize(ss["ProjetCV_HTML5 Canvas_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Boutoncontact2 = function() {
	this.initialize(ss["ProjetCV_HTML5 Canvas_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.BoutonCV2 = function() {
	this.initialize(ss["ProjetCV_HTML5 Canvas_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Boutonloisirs2 = function() {
	this.initialize(ss["ProjetCV_HTML5 Canvas_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_267 = function() {
	this.initialize(ss["ProjetCV_HTML5 Canvas_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Panneauinfobienvenue = function() {
	this.initialize(ss["ProjetCV_HTML5 Canvas_atlas_"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Panneauinfocontact = function() {
	this.initialize(ss["ProjetCV_HTML5 Canvas_atlas_"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.PanneauinfoCV = function() {
	this.initialize(ss["ProjetCV_HTML5 Canvas_atlas_"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.PanneauinfoLoisirs = function() {
	this.initialize(ss["ProjetCV_HTML5 Canvas_atlas_"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.MouvPanneauloisirs = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_5 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(5).call(this.frame_5).wait(2));

	// Calque_1
	this.instance = new lib.PanneauinfoLoisirs();
	this.instance.parent = this;
	this.instance.setTransform(-251.5,-4.5,1,0.0841);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleY:0.2336,y:-12.5},0).wait(1).to({scaleY:0.4578,y:-24.5},0).wait(1).to({scaleY:0.6637,y:-35.5},0).wait(1).to({scaleY:0.8876,y:-47.5},0).wait(1).to({scaleY:1.0004,y:-53.55},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-251.5,-53.5,503,107);


(lib.MouvPanneauCV = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_5 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(5).call(this.frame_5).wait(2));

	// Calque_1
	this.instance = new lib.PanneauinfoCV();
	this.instance.parent = this;
	this.instance.setTransform(-251.5,-4.5,1,0.0841);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleY:0.2336,y:-12.5},0).wait(1).to({scaleY:0.4578,y:-24.5},0).wait(1).to({scaleY:0.6637,y:-35.5},0).wait(1).to({scaleY:0.8876,y:-47.5},0).wait(1).to({scaleY:1.0004,y:-53.55},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-251.5,-53.5,503,107);


(lib.MouvPanneauContact = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_5 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(5).call(this.frame_5).wait(1));

	// Calque_1
	this.instance = new lib.Panneauinfocontact();
	this.instance.parent = this;
	this.instance.setTransform(-251.5,-4.5,1,0.0841);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleY:0.2336,y:-12.5},0).wait(1).to({scaleY:0.4578,y:-24.5},0).wait(1).to({scaleY:0.6637,y:-35.5},0).wait(1).to({scaleY:0.8876,y:-47.5},0).wait(1).to({scaleY:1.0004,y:-53.55},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-251.5,-53.5,503,107);


(lib.MouvBoutonLoisirs = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque_1
	this.instance = new lib.Boutonloisirs2();
	this.instance.parent = this;
	this.instance.setTransform(-83,-11.5,1,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleY:0.4644,y:-6.5},0).wait(1).to({scaleY:0.0709,skewX:180,y:1.6},0).wait(1).to({scaleY:0.5003,y:8},0).wait(1).to({scaleY:0.7701,y:11.95},0).wait(1).to({scaleY:1.1713,y:17.85},0).wait(1).to({scaleY:0.7797,y:12.15},0).wait(1).to({scaleY:0.4477,y:7.2},0).wait(1).to({scaleX:1.0111,scaleY:0.1178,x:-84,y:2.3},0).wait(1).to({scaleX:1,scaleY:0.4695,skewX:0,x:-83,y:-6.5},0).wait(1).to({scaleY:0.7286,y:-10.3},0).wait(1).to({scaleY:1.066,y:-15.3},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84,-17.3,182,35.2);


(lib.MouvBoutonCV = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// C_V_
	this.instance = new lib.BoutonCV2();
	this.instance.parent = this;
	this.instance.setTransform(-83,-11.5,1,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleY:0.4644,y:-6.5},0).wait(1).to({scaleY:0.0709,skewX:180,y:1.6},0).wait(1).to({scaleY:0.5003,y:8},0).wait(1).to({scaleY:0.969,y:14.9},0).wait(1).to({scaleY:1.1713,y:17.85},0).wait(1).to({scaleY:0.7797,y:12.15},0).wait(1).to({scaleY:0.4477,y:7.2},0).wait(1).to({scaleY:0.1178,y:2.3},0).wait(1).to({scaleY:0.4705,skewX:0,y:-6.5},0).wait(1).to({scaleY:0.7968,y:-11.3},0).wait(1).to({scaleY:1.066,y:-15.3},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-83,-17.3,180,35.2);


(lib.MouvBoutonContact = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque_1
	this.instance = new lib.Boutoncontact2();
	this.instance.parent = this;
	this.instance.setTransform(-83,-11.5,1,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleY:0.4644,y:-6.5},0).wait(1).to({scaleY:0.0709,skewX:180,y:1.6},0).wait(1).to({scaleY:0.5003,y:8},0).wait(1).to({scaleY:0.7701,y:11.95},0).wait(1).to({scaleY:1.1713,y:17.85},0).wait(1).to({scaleY:0.7797,y:12.15},0).wait(1).to({scaleY:0.4477,y:7.2},0).wait(1).to({scaleX:1.0111,scaleY:0.1178,x:-84,y:2.3},0).wait(1).to({scaleX:1,scaleY:0.4695,skewX:0,x:-83,y:-6.5},0).wait(1).to({scaleY:0.7286,y:-10.3},0).wait(1).to({scaleY:1.066,y:-15.3},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84,-17.3,182,35.2);


(lib.Loisirs = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// P.loisir
	this.instance = new lib.MouvPanneauloisirs();
	this.instance.parent = this;
	this.instance.setTransform(9.35,-202.65);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// B.Loisirs
	this.instance_1 = new lib.Boutonloisirs2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-87.55,-15.5);

	this.instance_2 = new lib.MouvBoutonLoisirs();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-0.45,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[]},1).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-242.1,-207.1,503,221.6);


(lib.Contact = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// B.Contact
	this.instance = new lib.MouvPanneauContact();
	this.instance.parent = this;
	this.instance.setTransform(6.35,-256.65);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// P.Contact
	this.instance_1 = new lib.Boutoncontact2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-93.05,-16);

	this.instance_2 = new lib.MouvBoutonContact();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-5.55,-2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[]},1).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-245.1,-261.1,503,275.1);


(lib.CV = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// P.CV
	this.Panneauinfo = new lib.MouvPanneauCV();
	this.Panneauinfo.name = "Panneauinfo";
	this.Panneauinfo.parent = this;
	this.Panneauinfo.setTransform(15.35,-145.65);
	this.Panneauinfo._off = true;

	this.timeline.addTween(cjs.Tween.get(this.Panneauinfo).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// B.CV
	this.instance = new lib.BoutonCV2();
	this.instance.parent = this;
	this.instance.setTransform(-83,-14.5);

	this.instance_1 = new lib.MouvBoutonCV();
	this.instance_1.parent = this;
	this.instance_1.setTransform(5,2.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[]},1).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-236.1,-150.1,503,165.6);


// stage content:
(lib.ProjetCV_HTML5Canvas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* LienCV.onRelease = function(){
		    getURL("CV.html");
		};
		
		LienLoisirs.onRelease = function(){
		    getURL("Loisirs.html");
		};
		
		LienContact.onRelease = function(){
		    getURL("Contact.html");
		};*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Bouton_CV
	this.LienCV = new lib.CV();
	this.LienCV.addEventListener("mousedown", function(event) {
		document.location.href = "CV.html";
	});
	this.LienCV.name = "LienCV";
	this.LienCV.parent = this;
	this.LienCV.setTransform(286.1,255.5);
	new cjs.ButtonHelper(this.LienCV, 0, 1, 2, false, new lib.CV(), 3);

	this.timeline.addTween(cjs.Tween.get(this.LienCV).wait(2));

	// Bouton_Loisirs
	this.LienLoisirs = new lib.Loisirs();
	this.LienLoisirs.addEventListener("mousedown", function(event) {
		document.location.href = "Loisirs.html";
	});
	this.LienLoisirs.name = "LienLoisirs";
	this.LienLoisirs.parent = this;
	this.LienLoisirs.setTransform(290.65,311.5);
	new cjs.ButtonHelper(this.LienLoisirs, 0, 1, 2, false, new lib.Loisirs(), 3);

	this.timeline.addTween(cjs.Tween.get(this.LienLoisirs).wait(2));

	// Bouton_Contact
	this.LienContact = new lib.Contact();
	this.LienContact.addEventListener("mousedown", function(event) {
		document.location.href = "Contact.html";
	});
	this.LienContact.name = "LienContact";
	this.LienContact.parent = this;
	this.LienContact.setTransform(296.15,368);
	new cjs.ButtonHelper(this.LienContact, 0, 1, 2, false, new lib.Contact(), 3);

	this.timeline.addTween(cjs.Tween.get(this.LienContact).wait(2));

	// Bienvenue
	this.instance = new lib.CachedTexturedBitmap_267();
	this.instance.parent = this;
	this.instance.setTransform(52.85,58.85,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// Fond
	this.instance_1 = new lib.Background();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(300,250,300,250);
// library properties:
lib.properties = {
	id: 'A83BEAAD6E9B1E45A0D085ED7FF39155',
	width: 600,
	height: 500,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/ProjetCV_HTML5 Canvas_atlas_.png", id:"ProjetCV_HTML5 Canvas_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['A83BEAAD6E9B1E45A0D085ED7FF39155'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;