(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"CV_HTML5 Canvas_atlas_", frames: [[0,0,600,500],[1669,0,130,20],[602,477,130,20],[1537,0,130,20],[734,477,130,20],[866,477,130,20],[1273,0,130,20],[572,502,570,475],[1144,477,570,475],[602,0,570,475],[1174,0,97,131],[1405,0,130,20],[998,477,130,20],[0,502,570,475]]}
];


// symbols:



(lib.Background = function() {
	this.initialize(ss["CV_HTML5 Canvas_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Connaissancesboutons1 = function() {
	this.initialize(ss["CV_HTML5 Canvas_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Connaissancesboutons2 = function() {
	this.initialize(ss["CV_HTML5 Canvas_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Expérienceboutons1 = function() {
	this.initialize(ss["CV_HTML5 Canvas_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Expérienceboutons2 = function() {
	this.initialize(ss["CV_HTML5 Canvas_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Formationboutons1 = function() {
	this.initialize(ss["CV_HTML5 Canvas_atlas_"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Formationboutons2 = function() {
	this.initialize(ss["CV_HTML5 Canvas_atlas_"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.PanneauExperience = function() {
	this.initialize(ss["CV_HTML5 Canvas_atlas_"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.PanneauFormations = function() {
	this.initialize(ss["CV_HTML5 Canvas_atlas_"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.PanneauxConnaissances = function() {
	this.initialize(ss["CV_HTML5 Canvas_atlas_"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Photomoi = function() {
	this.initialize(ss["CV_HTML5 Canvas_atlas_"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Présentationbouton1 = function() {
	this.initialize(ss["CV_HTML5 Canvas_atlas_"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.PrésentationBouton2 = function() {
	this.initialize(ss["CV_HTML5 Canvas_atlas_"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.PrésentationPanneau = function() {
	this.initialize(ss["CV_HTML5 Canvas_atlas_"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.MouvPresention = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	
	// timeline functions:
	this.frame_13 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(13).call(this.frame_13).wait(1));

	// Présentation
	this.instance = new lib.PrésentationBouton2();
	this.instance.parent = this;
	this.instance.setTransform(-65,-10.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14));

	// Photo
	this.instance_1 = new lib.Photomoi();
	this.instance_1.parent = this;
	this.instance_1.setTransform(111.85,-141,1,0.0317);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(8).to({_off:false},0).wait(1).to({scaleY:0.2149,y:-141.25},0).wait(1).to({scaleY:0.3911,y:-141.5},0).wait(1).to({scaleY:0.5813,y:-141.75},0).wait(1).to({scaleY:0.7222,y:-141.95},0).wait(1).to({scaleY:0.8628,y:-142.15},0).wait(1));

	// Panneau
	this.instance_2 = new lib.PrésentationPanneau();
	this.instance_2.parent = this;
	this.instance_2.setTransform(65,-1.15,1,0.0265);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({scaleY:0.0947,y:-13.9},0).wait(1).to({scaleY:0.1774,y:-29.4},0).wait(1).to({scaleY:0.2797,y:-48.55},0).wait(1).to({scaleY:0.3868,y:-68.65},0).wait(1).to({scaleY:0.5085,y:-91.45},0).wait(1).to({scaleY:0.601,y:-108.85},0).wait(1).to({scaleY:0.7421,y:-135.3},0).wait(1).to({scaleX:1.0204,scaleY:0.9398,x:64.8,y:-175.5},0).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-65,-175.5,711.4,446.4);


(lib.MouvFormations = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_8 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(8).call(this.frame_8).wait(1));

	// Panneau
	this.instance = new lib.PanneauFormations();
	this.instance.parent = this;
	this.instance.setTransform(65,-1.15,1,0.0265);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleY:0.0947,y:-13.9},0).wait(1).to({scaleY:0.1774,y:-29.4},0).wait(1).to({scaleY:0.2797,y:-48.55},0).wait(1).to({scaleY:0.3868,y:-68.65},0).wait(1).to({scaleY:0.5085,y:-91.45},0).wait(1).to({scaleY:0.601,y:-108.85},0).wait(1).to({scaleY:0.7421,y:-135.3},0).wait(1).to({scaleX:1.0203,scaleY:0.9418,x:64.8,y:-175.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(64.8,-175.5,581.6,447.4);


(lib.MouvExperi = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_8 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(8).call(this.frame_8).wait(1));

	// PAnneau
	this.instance = new lib.PanneauExperience();
	this.instance.parent = this;
	this.instance.setTransform(65,-1.15,1,0.0265);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleY:0.0947,y:-13.9},0).wait(1).to({scaleY:0.1774,y:-29.4},0).wait(1).to({scaleY:0.2797,y:-48.55},0).wait(1).to({scaleY:0.3868,y:-68.65},0).wait(1).to({scaleY:0.5085,y:-91.45},0).wait(1).to({scaleY:0.601,y:-108.85},0).wait(1).to({scaleY:0.7421,y:-135.3},0).wait(1).to({scaleX:1.0203,scaleY:0.9418,x:64.8,y:-175.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(64.8,-175.5,581.6,447.4);


(lib.MouvConnaissance = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_8 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(8).call(this.frame_8).wait(1));

	// Panneau
	this.instance = new lib.PanneauxConnaissances();
	this.instance.parent = this;
	this.instance.setTransform(65,-1.15,1,0.0265);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleY:0.0947,y:-13.9},0).wait(1).to({scaleY:0.1774,y:-29.4},0).wait(1).to({scaleY:0.2797,y:-48.55},0).wait(1).to({scaleY:0.3868,y:-68.65},0).wait(1).to({scaleY:0.5085,y:-91.45},0).wait(1).to({scaleY:0.601,y:-108.85},0).wait(1).to({scaleY:0.7421,y:-135.3},0).wait(1).to({scaleX:1.0203,scaleY:0.9418,x:64.8,y:-175.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(64.8,-175.5,581.6,447.4);


(lib.BoutonPrésentation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.instance = new lib.Présentationbouton1();
	this.instance.parent = this;
	this.instance.setTransform(-2.65,-7.65);

	this.instance_1 = new lib.MouvPresention();
	this.instance_1.parent = this;
	this.instance_1.setTransform(68,1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[]},1).to({state:[{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.6,-9,705.6,22.4);


(lib.BoutonFormation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.instance = new lib.Formationboutons1();
	this.instance.parent = this;
	this.instance.setTransform(2.3,-8.65);

	this.instance_1 = new lib.MouvFormations();
	this.instance_1.parent = this;
	this.instance_1.setTransform(71,-27.5);

	this.instance_2 = new lib.Formationboutons2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(6,-8.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_2},{t:this.instance_1}]},1).to({state:[]},1).to({state:[{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-28.6,706,40);


(lib.BoutonExperienc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.instance = new lib.Expérienceboutons1();
	this.instance.parent = this;
	this.instance.setTransform(-39.6,-11.35);

	this.instance_1 = new lib.MouvExperi();
	this.instance_1.parent = this;
	this.instance_1.setTransform(28.35,-56.45);

	this.instance_2 = new lib.Expérienceboutons2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-36.65,-11.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_2},{t:this.instance_1}]},1).to({state:[]},1).to({state:[{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.6,-57.6,703,66.3);


(lib.BoutonConnaissance = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.instance = new lib.Connaissancesboutons1();
	this.instance.parent = this;
	this.instance.setTransform(-65.05,-10);

	this.instance_1 = new lib.Connaissancesboutons2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-60.65,-9.65);

	this.instance_2 = new lib.MouvConnaissance();
	this.instance_2.parent = this;
	this.instance_2.setTransform(5.35,-91);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_2},{t:this.instance_1}]},1).to({state:[]},1).to({state:[{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-65,-92.1,705.4,102.5);


// stage content:
(lib.CV_HTML5Canvas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		this.stop();
		/* Conn.onRollOver = function() {
			nextframe() ;
		};*/
		/* Conn.onRollOver = function() {
			nextframe() ;
		};*/
		/* Exp.onRollOver = function() {
			nextframe() ;
		};*/
		/* Formation.onRollOver = function() {
			nextframe() ;
		};*/
		/* Formation.onRollOver = function() {
			nextframe() ;
		};*/
		/* Pre.onRollOver = function() {
			nextframe() ;
		};*/
		/* stop() ;*/
	}
	this.frame_15 = function() {
		this.stop();
		/* stop()*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1).call(this.frame_15).wait(1));

	// Conn
	this.Conn = new lib.BoutonConnaissance();
	this.Conn.name = "Conn";
	this.Conn.parent = this;
	this.Conn.setTransform(77.4,239,0.8104,0.8659);
	this.Conn._off = true;
	new cjs.ButtonHelper(this.Conn, 0, 1, 2, false, new lib.BoutonConnaissance(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Conn).wait(14).to({_off:false},0).wait(2));

	// Connaissances
	this.instance = new lib.BoutonConnaissance();
	this.instance.parent = this;
	this.instance.setTransform(77.4,239,0.8104,0.8659);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.BoutonConnaissance(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},14).wait(2));

	// XP
	this.instance_1 = new lib.Expérienceboutons1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(24.7,204.15,0.8104,0.8659);

	this.Exp = new lib.BoutonExperienc();
	this.Exp.name = "Exp";
	this.Exp.parent = this;
	this.Exp.setTransform(56.75,213.2,0.8104,0.8659);
	new cjs.ButtonHelper(this.Exp, 0, 1, 2, false, new lib.BoutonExperienc(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.Exp}]},14).wait(2));

	// Form
	this.Formation = new lib.BoutonFormation();
	this.Formation.name = "Formation";
	this.Formation.parent = this;
	this.Formation.setTransform(22.8,185.95,0.8104,0.8659);
	this.Formation._off = true;
	new cjs.ButtonHelper(this.Formation, 0, 1, 2, false, new lib.BoutonFormation(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Formation).wait(14).to({_off:false},0).wait(2));

	// Formation
	this.instance_2 = new lib.BoutonFormation();
	this.instance_2.parent = this;
	this.instance_2.setTransform(22.8,185.95,0.8104,0.8659);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 2, false, new lib.BoutonFormation(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},14).wait(2));

	// __Presentation
	this.instance_3 = new lib.PrésentationBouton2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(29.6,152.4,0.8104,0.8659);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},15).wait(1));

	// __Presentation
	this.Pre = new lib.BoutonPrésentation();
	this.Pre.name = "Pre";
	this.Pre.parent = this;
	this.Pre.setTransform(31.7,159.1,0.8104,0.8659);
	this.Pre._off = true;
	new cjs.ButtonHelper(this.Pre, 0, 1, 2, false, new lib.BoutonPrésentation(), 3);

	this.timeline.addTween(cjs.Tween.get(this.Pre).wait(14).to({_off:false},0).wait(1).to({x:26.85},0).wait(1));

	// Mouv_Presentation
	this.instance_4 = new lib.PrésentationPanneau();
	this.instance_4.parent = this;
	this.instance_4.setTransform(134.95,181.15,0.8104,0.0238);

	this.instance_5 = new lib.Photomoi();
	this.instance_5.parent = this;
	this.instance_5.setTransform(169.05,32,0.8254,0.0291);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4},{t:this.instance_5,p:{scaleY:0.0291,x:169.05,y:32}}]},1).to({state:[{t:this.instance_4},{t:this.instance_5,p:{scaleY:0.1973,x:167.45,y:28.9}}]},1).to({state:[{t:this.instance_4},{t:this.instance_5,p:{scaleY:0.3589,x:167.15,y:28.7}}]},1).to({state:[{t:this.instance_4},{t:this.instance_5,p:{scaleY:0.5335,x:166.8,y:26.8}}]},1).to({state:[{t:this.instance_4},{t:this.instance_5,p:{scaleY:0.6628,x:166.8,y:27.5}}]},1).to({state:[{t:this.instance_4},{t:this.instance_5,p:{scaleY:0.7918,x:167.45,y:28.05}}]},1).to({state:[]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({scaleY:0.0848,y:169.65},0).wait(1).to({scaleY:0.1589,y:155.85},0).wait(1).to({scaleY:0.2506,y:138.7},0).wait(1).to({scaleY:0.3465,y:120.6},0).wait(1).to({scaleY:0.4556,y:100.25},0).wait(1).to({scaleY:0.5384,y:84.65},0).wait(1).to({scaleY:0.6648,y:61.05},0).wait(1).to({scaleX:0.8254,scaleY:0.8375,y:14.3},0).wait(6).to({_off:true},1).wait(1));

	// Fond
	this.instance_6 = new lib.Background();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-1.4,-6.35,1.0797,0.974);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(321.1,229.7,325.29999999999995,251);
// library properties:
lib.properties = {
	id: '88E7C8E83BAF3B42AC8ADEB9462A3469',
	width: 645,
	height: 472,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/CV_HTML5 Canvas_atlas_.png", id:"CV_HTML5 Canvas_atlas_"}
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
an.compositions['88E7C8E83BAF3B42AC8ADEB9462A3469'] = {
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