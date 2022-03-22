// not very clean but simple
// the function can be run in the HTML for faster display
onload = function() {
	initMenu();
	change_img();
	//document.getElementById("flag_contain").parentNode.removeChild(document.getElementById("flag_contain"));
	//document.getElementById("flags_id").appendChild(document.getElementById("flag_contain"));
	
	if (siteUrl !== undefined) {
		imgs[0]=siteUrl+ gorrios + "/image/child_1.gif";
		imgs[1]=siteUrl+ gorrios + "/image/child_2.gif";
		imgs[2]=siteUrl+ gorrios + "/image/child_3.gif";
		imgs[3]=siteUrl+ gorrios + "/image/child_4.gif";
		imgs[4]=siteUrl+ gorrios + "/image/child_5.gif";
		imgs[5]=siteUrl+ gorrios + "/image/child_6.gif";
	}


	function change_img() {
		document.getElementById("img_shot").src = imgs[cpt_img];
		setOpacity(document.getElementById("img_shot"), cpt_opc);
		cpt_img++;
		if (cpt_img >= imgs.length) {
			cpt_img = 0;
		}
		setTimeout(function() {change_img_opac(false);}, 4000);
	}

	function change_img_opac(up) {
		if (up) cpt_opc = cpt_opc + 0.05;
			else cpt_opc = cpt_opc - 0.05;
		setOpacity(document.getElementById("img_shot"), cpt_opc);
		if (cpt_opc >=0 && cpt_opc <= 0.75) {
				setTimeout(function() {change_img_opac(up);}, 50);
		} else if (!up){
			change_img();
			change_img_opac(true);
		}
	}

}


var imgs=new Array();
var cpt_img = 0, cpt_opc = 0.75;





var xm = -100;
var ym = 0;
var nx = 0;
var ny = 0;
var nw = 0;
var nh = 0;

id = function(o)
{
	return document.getElementById(o);
}

px = function (x)
{
	return ''.concat(Math.round(x), 'px');
}

function resize()
{
	var o = id("screen");
	nx = o.offsetLeft;
	ny = o.offsetTop;
	nw = o.offsetWidth;
	nh = o.offsetHeight;
	ssi.resize();
}
onresize = resize;

document.onmousemove = function(e)
{
	if (window.event) e = window.event;
	xm = (e.x || e.clientX) - nw * .5 - nx;
	ym = (e.y || e.clientY) - nh * .5 - ny;
}

var ssi = {
	dx : 0,
	x0  : 0,
	y0  : 0,
	iz  : false,
	iL  : 0,
	rL  : 0,
	N   : 0,
	b0  : 0,
	b1  : 0,
	ov  : -1,
	NW  : 0,
	ims : 0,
	nxi : 0,
	nyi : 0,
	nxo : 0,
	nyo : 0,
	nho : 0,
	imgWidth  : 0,
	imgHeight : 0,
	borWidth  : 0,
	loaded    : false,

	iZoom : function ()
	{
		var o = id("rLinkZoom").style;
		if(!ssi.iz)
		{
			o.width  = px(ssi.nxi);
			o.height = px(ssi.nyi);
			ssi.iz = true;
			ssi.iResize();
			ssi.scroll();
		}
		else
		{
			ssi.iz = false;
			ssi.iResize();
			o.height = "100%";
			o.width  = "100%";
			o.left   = "0px";
			o.top    = "0px";
		}
	},

	slide : function ()
	{
		if(!ssi.iz && ssi.loaded)
		{
			ssi.dx -= xm * .014;
			if(ssi.dx > 0) ssi.dx -= ssi.NW; else if(ssi.dx < -ssi.NW) ssi.dx += ssi.NW;
		}
		ssi.b0.style.left = px(ssi.dx);
		ssi.b1.style.left = px(ssi.dx + ssi.NW);
		setTimeout(ssi.slide, 16);
	},

	scroll : function ()
	{
		if(ssi.iz)
		{
			ssi.xmo = Math.min(ssi.nwo, Math.max(0, ((-ssi.nxo + xm + nw * .5))));
			ssi.ymo = Math.min(ssi.nho, Math.max(0, ((-ssi.nyo + ym + nh * .5))));
			var x   = -ssi.xmo * (ssi.nxi / ssi.nwo) + ssi.xmo;
			var y   = -ssi.ymo * (ssi.nyi / ssi.nho) + ssi.ymo;
			ssi.x0 += ((ssi.x0 > x) ? -1 : 1) * Math.abs(ssi.x0 - x) * .1;
			ssi.y0 += ((ssi.y0 > y) ? -1 : 1) * Math.abs(ssi.y0 - y) * .1;
			ssi.rL.left = px(ssi.x0);
			ssi.rL.top  = px(ssi.y0);
			setTimeout(ssi.scroll, 16);
		}
	},

	iResize : function ()
	{
		if(ssi.iz)
		{
			ssi.nwo = Math.min(ssi.nxi, Math.round(98 * nw / 100));
			ssi.nxo = Math.round((nw - ssi.nwo) / 2);
		}
		else
		{
			ssi.nho = id("rLinkScreen").offsetHeight;
			ssi.nyo = id("rLinkScreen").offsetTop;
			ssi.nwo = Math.round((ssi.nxi / ssi.nyi) * ssi.nho);
			ssi.nxo = Math.round((nw - ssi.nwo) / 2);
		}
		if(ssi.nwo)
		{
			var o = id("rLinkScreen").style;
			o.width = px(ssi.nwo);
			o.left  = px(ssi.nxo);
		}
	},

	iBorder : function (o, i)
	{
		var o = o.getElementsByTagName("img");
		o[ssi.iL].className = "thumbOut";
		o[i].className  = "thumbOver";
	},

	disp : function (i, title, caption)
	{
		ssi.iBorder(ssi.b0, i);
		ssi.iBorder(ssi.b1, i);
		ssi.iL = i;
		if(ssi.iz) ssi.iZoom();
		id("rLinkTitle").innerHTML = title;
		id("rLinkCaption").innerHTML = caption;
		id("rLinkZoom").src = ssi.ims[i].src;
		ssi.nxi = ssi.ims[i].width;
		ssi.nyi = ssi.ims[i].height;
		ssi.iResize();
	},

	init : function (obj)
	{
		obj.innerHTML = id("source").innerHTML;
		var img = obj.getElementsByTagName("img");
		for(var i = 0; i < ssi.N; i++)
		{
			var o = img[i];
			o.className = "thumbOut";
			o.onmousedown = function () { return false; }
			o.onclick = function () { ssi.iZoom(); }
			o.i = i;
			o.onmouseover = function()
			{
				ssi.ov = this.i;
				ssi.disp(ssi.ov, ssi.ims[ssi.ov].title, ssi.ims[ssi.ov].alt);
			}
			o.alt   = "";
			o.title = "";
		}
	},

	oResize : function (obj)
	{
		var img = obj.getElementsByTagName("img");
		ssi.NW = 0;
		for(var i = 0; i < ssi.N; i++)
		{
			var o = img[i];
			if(o.complete)
			{
				o = o.style;
				var w = (ssi.ims[i].width / ssi.ims[i].height) * ssi.imgHeight;
				o.left = px(ssi.NW);
				ssi.NW += w +( 2 * ssi.borWidth);
				o.top    = px(0);
				o.width  = px(w);
				o.height = px(ssi.imgHeight);
				o.borderWidth   = px(ssi.borWidth);
			}
		}
	},

	resize : function ()
	{
		ssi.borWidth = Math.round(1.4 * nh / 100);
		ssi.imgHeight = id("banner").offsetHeight - (2 * ssi.borWidth);
		ssi.oResize(ssi.b0);
		ssi.oResize(ssi.b1);
		ssi.iResize();
		ssi.NW = Math.round(ssi.NW);
		if(!ssi.loaded) ssi.NW = nw;
		id("rLinkTitle").style.fontSize   = px(4 * nh / 100);
		id("rLinkCaption").style.fontSize = px(2 * nh / 100);
	},

	run : function ()
	{
		var o = id("banner").getElementsByTagName("span");
		ssi.b0 = o[0];
		ssi.b1 = o[1];
		ssi.init(ssi.b0);
		ssi.init(ssi.b1);
		resize();
		ssi.slide();
		ssi.images_load();
	},
	load : function ()
	{
		ssi.ims = id("source").getElementsByTagName("img");
		ssi.rL  = id("rLinkZoom").style;
		ssi.N   = ssi.ims.length;
		ssi.run();
	},
	images_load : function ()
	{
		var M = 0;
		for (var i = 0; i < ssi.N; i++)
		{
			if (ssi.ims[i].complete)
			{
				M++;
				resize();
				if (i == 0 && ssi.ov == -1) ssi.b0.getElementsByTagName("img")[0].onmouseover();
			}
		}
		if (M < ssi.N)
			setTimeout(ssi.images_load, 64);
		else
		{
			ssi.loaded = true;
			resize();
		}
	}
}
