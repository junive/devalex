(function(){var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var _,lt='com.alex_gorisse.client.',mt='com.google.gwt.core.client.',nt='com.google.gwt.lang.',ot='com.google.gwt.user.client.',pt='com.google.gwt.user.client.dnd.',qt='com.google.gwt.user.client.impl.',rt='com.google.gwt.user.client.ui.',st='com.google.gwt.user.client.ui.impl.',tt='java.lang.',ut='java.util.';function kt(){}
function jo(a){return this===a;}
function ko(){return ap(this);}
function ho(){}
_=ho.prototype={};_.gb=jo;_.zb=ko;_.yd=tt+'Object';_.xd=0;function r(c){var a,b;b=vh(new uh());yl(b,'jeDragOver');xl(b,150,150);c.d=Ej(new Cj(),'First Drag Listener');c.e=Ej(new Cj(),'Second Drag Listener');c.f=Ej(new Cj(),'Drop Listener');c.g=vj(new nj(),'soleil_disque.jpg');wj(c.g,c);c.h=Dj(new Cj());xl(c.h,80,50);tl(c.h,'jeDragOver');ck(c.h,'Move or Drop me');ak(c.h,c);Fj(c.h,c);c.c=vj(new nj(),'poubelle.jpg');xj(c.c,c);c.j=cm(new am());yl(c.j,'jeDragOver');c.k=Ej(new Cj(),'Move this bar');vd(c.k.h,'background','#ffffcc');Fj(c.k,c);a=zf(c.k);sf(a,c.j);dm(c.j,c.k);dm(c.j,b);xh(b,ql(new ll()),10,10);xh(b,ci(new Ch(),'Button'),10,50);xh(b,Ej(new Cj(),"I'm Text"),10,100);xh(al(),c.d,320,20);xh(al(),c.e,320,45);xh(al(),c.g,120,160);xh(al(),c.j,450,150);xh(al(),c.c,450,500);xh(al(),c.h,150,500);xh(al(),c.f,350,650);mc(new n());}
function t(a,b){ck(this.e,"You've put the "+this.a+' into the '+this.b);}
function u(a,b,c){ck(this.d,'You have finished a drag with the '+this.a);this.i=true;}
function v(a,b){this.i=false;if(b===this.c){this.b='garbage';}else if(b===this.h){this.b='D&D Label';}ck(this.d,'The '+this.a+' has entered the '+this.b);}
function w(a,b){this.i=true;ck(this.e,'The '+this.a+' has exited the '+this.b);}
function x(a,b,c){if(this.i){ck(this.d,"you're moving the "+this.a);}this.i=false;}
function y(a,b){ck(this.e,'The '+this.a+' is over the '+this.b);}
function z(b,c,d){var a;if(b===this.k){this.a='Vertical Panel';}else if(b===this.g){this.a='sun picture';}else if(b===this.h){this.a='D&D Label';}ck(this.d,'you start a drag with the'+this.a);a=zf(b);s++;E(a.d.h,s);}
function D(a,b){ck(this.f,'The '+this.b+' is dropped by the '+this.a);}
function A(a,b){ck(this.f,'The '+this.b+' has been detected by the '+this.a);}
function B(a,b){ck(this.f,'The '+this.b+' has been exited by the '+this.a);}
function C(a,b){ck(this.f,'The '+this.b+' is being detected by the '+this.a);}
function E(a,b){a.style.zIndex=b;}
function m(){}
_=m.prototype=new ho();_.kc=t;_.lc=u;_.mc=v;_.nc=w;_.oc=x;_.pc=y;_.qc=z;_.uc=D;_.rc=A;_.sc=B;_.tc=C;_.yd=lt+'DragMove14';_.xd=1;_.a='';_.b='';_.c=null;_.d=null;_.e=null;_.f=null;_.g=null;_.h=null;_.i=true;_.j=null;_.k=null;var s=0;function p(a){if(Ec(a)==4){Fc(a);}return true;}
function n(){}
_=n.prototype=new ho();_.vc=p;_.yd=lt+'DragMove14$1';_.xd=2;var cb=null;function fb(a){return a==null?0:a.$H?a.$H:(a.$H=hb());}
function gb(a){return a==null?0:a.$H?a.$H:(a.$H=hb());}
function hb(){return ++ib;}
var ib=0;function cp(b,a){a;return b;}
function bp(){}
_=bp.prototype=new ho();_.yd=tt+'Throwable';_.xd=3;function zn(b,a){cp(b,a);return b;}
function yn(){}
_=yn.prototype=new bp();_.yd=tt+'Exception';_.xd=4;function mo(b,a){zn(b,a);return b;}
function lo(){}
_=lo.prototype=new yn();_.yd=tt+'RuntimeException';_.xd=5;function kb(c,b,a){mo(c,'JavaScript '+b+' exception: '+a);return c;}
function jb(){}
_=jb.prototype=new lo();_.yd=mt+'JavaScriptException';_.xd=6;function ob(b,a){if(!ac(a,1)){return false;}return qb(b,Fb(a,1));}
function pb(a){return fb(a);}
function rb(a){return ob(this,a);}
function qb(a,b){return a===b;}
function sb(){return pb(this);}
function mb(){}
_=mb.prototype=new ho();_.gb=rb;_.zb=sb;_.yd=mt+'JavaScriptObject';_.xd=7;function ub(c,a,d,b,e){c.a=a;c.b=b;e;c.xd=d;return c;}
function wb(a,b,c){return a[b]=c;}
function xb(b,a){return b[a];}
function yb(a){return a.length;}
function Ab(e,d,c,b,a){return zb(e,d,c,b,0,yb(b),a);}
function zb(j,i,g,c,e,a,b){var d,f,h;if((f=xb(c,e))<0){throw new fo();}h=ub(new tb(),f,xb(i,e),xb(g,e),j);++e;if(e<a){j=j.sd(1);for(d=0;d<f;++d){wb(h,d,zb(j,i,g,c,e,a,b));}}else{for(d=0;d<f;++d){wb(h,d,b);}}return h;}
function Bb(a,b,c){if(c!==null&&a.b!=0&& !ac(c,a.b)){throw new rn();}return wb(a,b,c);}
function tb(){}
_=tb.prototype=new ho();_.yd=nt+'Array';_.xd=0;function Eb(b,a){if(!b)return false;return !(!dc[b][a]);}
function Fb(b,a){if(b!=null)Eb(b.xd,a)||cc();return b;}
function ac(b,a){if(b==null)return false;return Eb(b.xd,a);}
function cc(){throw new un();}
function bc(a){if(a!==null){throw new un();}return a;}
function ec(b,d){_=d.prototype;if(b&& !(b.xd>=_.xd)){var c=b.toString;for(var a in _){b[a]=_[a];}b.toString=c;}return b;}
var dc;function hc(a){if(ac(a,2)){return a;}return kb(new jb(),jc(a),ic(a));}
function ic(a){return a.message;}
function jc(a){return a.name;}
function lc(){lc=kt;nd=zq(new yq());{gd=new jg();og(gd);}}
function mc(a){lc();Aq(nd,a);}
function nc(b,a){lc();gd.A(b,a);}
function oc(a,b){lc();return gd.C(a,b);}
function pc(){lc();return gd.ab('button');}
function qc(){lc();return gd.ab('div');}
function rc(){lc();return gd.ab('img');}
function sc(){lc();return gd.cb('text');}
function tc(){lc();return gd.ab('tbody');}
function uc(){lc();return gd.ab('td');}
function vc(){lc();return gd.ab('tr');}
function wc(){lc();return gd.ab('table');}
function yc(b,a,d){lc();var c;c=cb;{xc(b,a,d);}}
function xc(b,a,c){lc();if(a===md){if(Ec(b)==8192){md=null;}}c.ic(b);}
function zc(b,a){lc();gd.hb(b,a);}
function Ac(a){lc();return gd.ib(a);}
function Bc(a){lc();return gd.jb(a);}
function Cc(a){lc();return gd.kb(a);}
function Dc(a){lc();return gd.lb(a);}
function Ec(a){lc();return gd.mb(a);}
function Fc(a){lc();gd.nb(a);}
function ad(a){lc();return gd.ob(a);}
function bd(a){lc();return gd.pb(a);}
function dd(a,b){lc();return gd.rb(a,b);}
function cd(a,b){lc();return gd.qb(a,b);}
function ed(a){lc();return gd.sb(a);}
function fd(a){lc();return gd.ub(a);}
function hd(c,a,b){lc();gd.bc(c,a,b);}
function id(b,a){lc();return gd.cc(b,a);}
function jd(a){lc();var b,c;c=true;if(nd.rd()>0){b=Fb(nd.wb(nd.rd()-1),3);if(!(c=b.vc(a))){zc(a,true);Fc(a);}}return c;}
function kd(a){lc();if(md!==null&&oc(a,md)){md=null;}gd.Ec(a);}
function ld(b,a){lc();gd.Fc(b,a);}
function od(a){lc();md=a;gd.gd(a);}
function qd(a,b,c){lc();gd.id(a,b,c);}
function pd(a,b,c){lc();gd.hd(a,b,c);}
function rd(a,b){lc();gd.kd(a,b);}
function sd(a,b){lc();gd.ld(a,b);}
function td(a,b){lc();gd.md(a,b);}
function ud(a,b){lc();gd.nd(a,b);}
function vd(b,a,c){lc();gd.od(b,a,c);}
function wd(a,b){lc();pg(gd,a,b);}
var gd=null,md=null,nd;function zd(a){if(ac(a,4)){return oc(this,Fb(a,4));}return ob(ec(this,xd),a);}
function Ad(){return pb(ec(this,xd));}
function xd(){}
_=xd.prototype=new mb();_.gb=zd;_.zb=Ad;_.yd=ot+'Element';_.xd=8;function Fd(a){return ob(ec(this,Bd),a);}
function ae(){return pb(ec(this,Bd));}
function Bd(){}
_=Bd.prototype=new mb();_.gb=Fd;_.zb=ae;_.yd=ot+'Event';_.xd=9;function ge(){ge=kt;ie=zq(new yq());{he();}}
function he(){ge();me(new ce());}
var ie;function ee(){while((ge(),ie).rd()>0){bc((ge(),ie).wb(0)).Ad();}}
function fe(){return null;}
function ce(){}
_=ce.prototype=new ho();_.Bc=ee;_.Cc=fe;_.yd=ot+'Timer$1';_.xd=10;function le(){le=kt;ne=zq(new yq());xe=zq(new yq());{te();}}
function me(a){le();Aq(ne,a);}
function oe(){le();var a,b;for(a=ne.dc();a.yb();){b=Fb(a.gc(),5);b.Bc();}}
function pe(){le();var a,b,c,d;d=null;for(a=ne.dc();a.yb();){b=Fb(a.gc(),5);c=b.Cc();{d=c;}}return d;}
function qe(){le();var a,b;for(a=xe.dc();a.yb();){b=bc(a.gc());null.Ad();}}
function re(){le();return $doc.documentElement.scrollLeft||$doc.body.scrollLeft;}
function se(){le();return $doc.documentElement.scrollTop||$doc.body.scrollTop;}
function te(){le();__gwt_initHandlers(function(){we();},function(){return ve();},function(){ue();$wnd.onresize=null;$wnd.onbeforeclose=null;$wnd.onclose=null;});}
function ue(){le();var a;a=cb;{oe();}}
function ve(){le();var a;a=cb;{return pe();}}
function we(){le();var a;a=cb;{qe();}}
var ne,xe;function ip(d,a,b){var c;while(a.yb()){c=a.gc();if(b===null?c===null:b.gb(c)){return a;}}return null;}
function kp(a){throw fp(new ep(),'add');}
function lp(b){var a;a=ip(this,this.dc(),b);return a!==null;}
function hp(){}
_=hp.prototype=new ho();_.z=kp;_.E=lp;_.yd=ut+'AbstractCollection';_.xd=0;function vp(b,a){throw fp(new ep(),'add');}
function wp(a){this.w(this.rd(),a);return true;}
function xp(e){var a,b,c,d,f;if(e===this){return true;}if(!ac(e,19)){return false;}f=Fb(e,19);if(this.rd()!=f.rd()){return false;}c=this.dc();d=f.dc();while(c.yb()){a=c.gc();b=d.gc();if(!(a===null?b===null:a.gb(b))){return false;}}return true;}
function yp(){var a,b,c,d;c=1;a=31;b=this.dc();while(b.yb()){d=b.gc();c=31*c+(d===null?0:d.zb());}return c;}
function zp(){return op(new np(),this);}
function Ap(a){throw fp(new ep(),'remove');}
function mp(){}
_=mp.prototype=new hp();_.w=vp;_.z=wp;_.gb=xp;_.zb=yp;_.dc=zp;_.cd=Ap;_.yd=ut+'AbstractList';_.xd=11;function Es(a){a.b=zq(new yq());return a;}
function Fs(b,a){return Aq(b.b,a);}
function bt(a){return a.b.dc();}
function ct(a){return a.b.rd();}
function dt(a,b){this.b.w(a,b);}
function et(a){return Fs(this,a);}
function ft(a){return Cq(this.b,a);}
function gt(a){return this.b.wb(a);}
function ht(){return bt(this);}
function it(a){return Eq(this.b,a);}
function jt(){return ct(this);}
function Ds(){}
_=Ds.prototype=new mp();_.w=dt;_.z=et;_.E=ft;_.wb=gt;_.dc=ht;_.cd=it;_.rd=jt;_.yd=ut+'Vector';_.xd=12;_.b=null;function ze(a){Es(a);return a;}
function Ae(b,a,c){if(b.a===null&&a!==null){b.a=pf(new of(),b,c);}if(a!==null){Fs(b,a);}}
function Ce(e,c,d){var a,b;for(a=bt(e);a.yb();){b=Fb(a.gc(),6);b.kc(c,d);}}
function De(d,c,e,f){var a,b;for(a=bt(d);a.yb();){b=Fb(a.gc(),6);b.lc(c,e,f);}}
function Ee(e,c,d){var a,b;for(a=bt(e);a.yb();){b=Fb(a.gc(),6);b.mc(c,d);}}
function Fe(e,c,d){var a,b;for(a=bt(e);a.yb();){b=Fb(a.gc(),6);b.nc(c,d);}}
function af(d,c,e,f){var a,b;for(a=bt(d);a.yb();){b=Fb(a.gc(),6);b.oc(c,e,f);}}
function bf(e,c,d){var a,b;for(a=bt(e);a.yb();){b=Fb(a.gc(),6);b.pc(c,d);}}
function cf(d,c,e,f){var a,b;for(a=bt(d);a.yb();){b=Fb(a.gc(),6);b.qc(c,e,f);}}
function ye(){}
_=ye.prototype=new Ds();_.yd=pt+'DragListenerCollection';_.xd=13;_.a=null;function ff(a){Es(a);return a;}
function gf(b,a,c){if(a!==null){b.a=c;if(ct(b)==0){uf(b);}Fs(b,a);}}
function jf(e,c,d){var a,b;for(a=bt(e);a.yb();){b=Fb(a.gc(),7);b.uc(c,d);}}
function kf(e,c,d){var a,b;for(a=bt(e);a.yb();){b=Fb(a.gc(),7);b.rc(c,d);}}
function lf(e,c,d){var a,b;for(a=bt(e);a.yb();){b=Fb(a.gc(),7);b.sc(c,d);}}
function mf(e,c,d){var a,b;for(a=bt(e);a.yb();){b=Fb(a.gc(),7);b.tc(c,d);}}
function ef(){}
_=ef.prototype=new Ds();_.yd=pt+'DropListenerCollection';_.xd=14;_.a=null;function pf(c,b,a){c.f=b;if(ac(a,9)){Fb(a,9).v(c);if(Ef===null){Ef=hs(new or());}Ef.Dc(a,c);}if(wf===null){wf=Es(new Ds());}return c;}
function rf(a,b,c){a.m=false;a.h=false;a.r=true;if(a.j!==null&&a.e!==null){if(vf(a.n,a.p,a.q,a.c,a.j)){Ce(a.f,a.e,a.j);jf(a.k,a.j,a.e);a.k=null;a.j=null;}}if(a.e!==null){kd(a.e.h);De(a.f,a.e,b,c);a.e=null;}}
function sf(a,b){a.d=b;}
function tf(c){var a,b;for(b=bt(wf);b.yb();){a=Fb(b.gc(),11).a.h;pd(a,'startWidth',Df(a));pd(a,'startHeight',Af(a));pd(a,'startLeft',ad(a));pd(a,'startTop',bd(a));}}
function uf(a){if(wf===null){wf=Es(new Ds());}Fs(wf,a);}
function vf(b,c,f,a,g){var d,e,h;h=g.h;d=cd(h,'startLeft');e=cd(h,'startTop');return a>e&&f<e+cd(h,'startHeight')&&c>d&&b<d+cd(h,'startWidth');}
function xf(b){if($doc.defaultView!=null){var c=$doc.defaultView.getComputedStyle(b,null);if(c!=null){var a=parseInt(c.getPropertyValue('border-left-width'));return a== -1?0:a;}}return 0;}
function yf(b){if($doc.defaultView!=null){var c=$doc.defaultView.getComputedStyle(b,null);if(c!=null){var a=parseInt(c.getPropertyValue('border-top-width'));return a== -1?0:a;}}return 0;}
function zf(a){if(Ef!==null&&Ef.D(a)){return Fb(Ef.xb(a),8);}else{return null;}}
function Af(a){return parseInt(a.offsetHeight);}
function Bf(a){return parseInt(a.offsetLeft);}
function Cf(a){return parseInt(a.offsetTop);}
function Df(a){return parseInt(a.offsetWidth);}
function Ff(d,e,f){var a,c;try{this.m=true;this.e=d;if(this.e!==null){od(this.e.h);if(this.d===null){this.d=this.e;}if(this.l){this.s=e;this.t=f;c=this.d.g.h;this.a=xf(c);this.b=yf(c);}cf(this.f,this.e,e,f);}}catch(a){a=hc(a);if(ac(a,10)){a;rf(this,e,f);}else throw a;}}
function ag(a){}
function bg(a){}
function cg(f,g,h){var a,c,d,e;try{if(this.m&&this.d!==null&&this.e!==null){d=this.d.h;if(this.i){this.n=ad(d)+this.o;this.q=bd(d)+this.o;this.p=this.n+Df(d)-this.o;this.c=this.q+Af(d)-this.o;}af(this.f,this.e,g,h);if(this.j===null&& !this.r){for(e=bt(wf);e.yb();){this.k=Fb(e.gc(),11);c=this.k.a;if(vf(this.n,this.p,this.q,this.c,c)&&this.e!==c){this.h=true;this.j=c;if(this.j!==null){Ee(this.f,this.e,this.j);kf(this.k,this.j,this.e);}break;}}}if(this.j!==null&&this.h){if(vf(this.n,this.p,this.q,this.c,this.j)){bf(this.f,this.e,this.j);mf(this.k,this.j,this.e);}else{Fe(this.f,this.e,this.j);lf(this.k,this.j,this.e);this.j=null;}}if(this.g){eg(this.d,g+Bf(d)+this.a-this.s,h+Cf(d)+this.b-this.t);}if(this.r){tf(this);}this.r=false;}}catch(a){a=hc(a);if(ac(a,10)){a;rf(this,g,h);}else throw a;}}
function dg(c,d,e){var a;try{rf(this,d,e);}catch(a){a=hc(a);if(ac(a,10)){a;rf(this,d,e);}else throw a;}}
function eg(d,b,c){var a;a=d.h;vd(a,'position','absolute');vd(a,'left',b+'px');vd(a,'top',c+'px');}
function of(){}
_=of.prototype=new ho();_.wc=Ff;_.xc=ag;_.yc=bg;_.zc=cg;_.Ac=dg;_.yd=pt+'MouseDragGestureRecognizer';_.xd=15;_.a=0;_.b=0;_.c=0;_.d=null;_.e=null;_.f=null;_.g=true;_.h=false;_.i=true;_.j=null;_.k=null;_.l=true;_.m=false;_.n=0;_.o=0;_.p=0;_.q=0;_.r=true;_.s=0;_.t=0;var wf=null,Ef=null;function ch(b,a){b.appendChild(a);}
function dh(a){return $doc.createElement(a);}
function eh(b){var a=$doc.createElement('INPUT');a.type=b;return a;}
function fh(b,a){b.cancelBubble=a;}
function gh(a){return a.clientX;}
function hh(a){return a.clientY;}
function ih(a){switch(a.type){case 'blur':return 4096;case 'change':return 1024;case 'click':return 1;case 'dblclick':return 2;case 'focus':return 2048;case 'keydown':return 128;case 'keypress':return 256;case 'keyup':return 512;case 'load':return 32768;case 'losecapture':return 8192;case 'mousedown':return 4;case 'mousemove':return 64;case 'mouseout':return 32;case 'mouseover':return 16;case 'mouseup':return 8;case 'scroll':return 16384;case 'error':return 65536;case 'mousewheel':return 131072;case 'DOMMouseScroll':return 131072;}}
function kh(a,b){var c=a[b];return c==null?null:String(c);}
function jh(a,c){var b=parseInt(a[c]);if(!b){return 0;}return b;}
function lh(a){return a.__eventBits||0;}
function mh(b,a){b.removeChild(a);}
function oh(a,b,c){a[b]=c;}
function nh(a,b,c){a[b]=c;}
function ph(a,b){a.__listener=b;}
function qh(a,b){a.src=b;}
function rh(a,b){if(!b){b='';}a.innerHTML=b;}
function sh(a,b){while(a.firstChild){a.removeChild(a.firstChild);}if(b!=null){a.appendChild($doc.createTextNode(b));}}
function th(b,a,c){b.style[a]=c;}
function hg(){}
_=hg.prototype=new ho();_.A=ch;_.ab=dh;_.cb=eh;_.hb=fh;_.ib=gh;_.jb=hh;_.mb=ih;_.rb=kh;_.qb=jh;_.sb=lh;_.Fc=mh;_.id=oh;_.hd=nh;_.kd=ph;_.ld=qh;_.md=rh;_.nd=sh;_.od=th;_.yd=qt+'DOMImpl';_.xd=0;function zg(a){return a.relatedTarget?a.relatedTarget:null;}
function Ag(a){return a.relatedTarget||null;}
function Bg(a){a.preventDefault();}
function Cg(a){var b=a.parentNode;if(b==null){return null;}if(b.nodeType!=1)b=null;return b||null;}
function Dg(){$wnd.__dispatchCapturedMouseEvent=function(b){if($wnd.__dispatchCapturedEvent(b)){var a=$wnd.__captureElem;if(a&&a.__listener){yc(b,a,a.__listener);b.stopPropagation();}}};$wnd.__dispatchCapturedEvent=function(a){if(!jd(a)){a.stopPropagation();a.preventDefault();return false;}return true;};$wnd.addEventListener('click',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('dblclick',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousedown',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mouseup',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousemove',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousewheel',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('keydown',$wnd.__dispatchCapturedEvent,true);$wnd.addEventListener('keyup',$wnd.__dispatchCapturedEvent,true);$wnd.addEventListener('keypress',$wnd.__dispatchCapturedEvent,true);$wnd.__dispatchEvent=function(a){if(this.__listener)yc(a,this,this.__listener);};$wnd.__captureElem=null;}
function Eg(e,f,d){var c=0,b=e.firstChild,a=null;while(b){if(b.nodeType==1){if(c==d){a=b;break;}++c;}b=b.nextSibling;}e.insertBefore(f,a);}
function Fg(a){$wnd.__captureElem=a;}
function ah(b,a){b.__eventBits=a;b.onclick=a&1?$wnd.__dispatchEvent:null;b.ondblclick=a&2?$wnd.__dispatchEvent:null;b.onmousedown=a&4?$wnd.__dispatchEvent:null;b.onmouseup=a&8?$wnd.__dispatchEvent:null;b.onmouseover=a&16?$wnd.__dispatchEvent:null;b.onmouseout=a&32?$wnd.__dispatchEvent:null;b.onmousemove=a&64?$wnd.__dispatchEvent:null;b.onkeydown=a&128?$wnd.__dispatchEvent:null;b.onkeypress=a&256?$wnd.__dispatchEvent:null;b.onkeyup=a&512?$wnd.__dispatchEvent:null;b.onchange=a&1024?$wnd.__dispatchEvent:null;b.onfocus=a&2048?$wnd.__dispatchEvent:null;b.onblur=a&4096?$wnd.__dispatchEvent:null;b.onlosecapture=a&8192?$wnd.__dispatchEvent:null;b.onscroll=a&16384?$wnd.__dispatchEvent:null;b.onload=a&32768?$wnd.__dispatchEvent:null;b.onerror=a&65536?$wnd.__dispatchEvent:null;b.onmousewheel=a&131072?$wnd.__dispatchEvent:null;}
function xg(){}
_=xg.prototype=new hg();_.kb=zg;_.lb=Ag;_.nb=Bg;_.ub=Cg;_.ac=Dg;_.bc=Eg;_.gd=Fg;_.qd=ah;_.yd=qt+'DOMImplStandard';_.xd=0;function og(a){Dg.call(a);a.Fb();}
function pg(c,b,a){ah.call(c,b,a);c.pd(b,a);}
function qg(a,b){if(!a&& !b){return true;}else if(!a|| !b){return false;}return a.isSameNode(b);}
function sg(){og(this);}
function rg(){$wnd.addEventListener('mouseout',function(b){var a=$wnd.__captureElem;if(a&& !b.relatedTarget){if('html'==b.target.tagName.toLowerCase()){var c=$doc.createEvent('MouseEvents');c.initMouseEvent('mouseup',true,true,$wnd,0,b.screenX,b.screenY,b.clientX,b.clientY,b.ctrlKey,b.altKey,b.shiftKey,b.metaKey,b.button,null);a.dispatchEvent(c);}}},true);$wnd.addEventListener('DOMMouseScroll',$wnd.__dispatchCapturedMouseEvent,true);}
function tg(c,b){while(b){if(c.isSameNode(b)){return true;}try{b=b.parentNode;}catch(a){return false;}if(b&&b.nodeType!=1){b=null;}}return false;}
function ug(a){if(a.isSameNode($wnd.__captureElem)){$wnd.__captureElem=null;}}
function wg(b,a){pg(this,b,a);}
function vg(b,a){if(a&131072){b.addEventListener('DOMMouseScroll',$wnd.__dispatchEvent,false);}}
function ig(){}
_=ig.prototype=new xg();_.C=qg;_.ac=sg;_.Fb=rg;_.cc=tg;_.Ec=ug;_.qd=wg;_.pd=vg;_.yd=qt+'DOMImplMozilla';_.xd=0;function lg(a){var d=$doc.defaultView.getComputedStyle(a,null);var b=a.getBoundingClientRect().x-Math.round(d.getPropertyCSSValue('border-left-width').getFloatValue(CSSPrimitiveValue.CSS_PX));var c=a;while(c){if(c.scrollLeft>0){b-=c.scrollLeft;}c=c.parentNode;}return b+$doc.body.scrollLeft+$doc.documentElement.scrollLeft;}
function mg(a){var c=$doc.defaultView.getComputedStyle(a,null);var d=a.getBoundingClientRect().y-Math.round(c.getPropertyCSSValue('border-top-width').getFloatValue(CSSPrimitiveValue.CSS_PX));var b=a;while(b){if(b.scrollTop>0){d-=b.scrollTop;}b=b.parentNode;}return d+$doc.body.scrollTop+$doc.documentElement.scrollTop;}
function jg(){}
_=jg.prototype=new ig();_.ob=lg;_.pb=mg;_.yd=qt+'DOMImplMozillaOld';_.xd=0;function tl(b,a){El(b.h,a,true);}
function vl(b,a){if(b.h!==null){b.fd(b.h,a);}b.h=a;}
function wl(b,a){vd(b.h,'height',a);}
function xl(b,c,a){if(c>=0){zl(b,c+'px');}if(a>=0){wl(b,a+'px');}}
function yl(b,a){Dl(b.h,a);}
function zl(a,b){vd(a.h,'width',b);}
function Al(b,a){wd(b.h,a|ed(b.h));}
function Bl(b){var a;a=dd(b,'className').ud();if(qo('',a)){a='gwt-nostyle';qd(b,'className',a);}return a;}
function Cl(b,a){var c=b.parentNode;if(!c){return;}c.insertBefore(a,b);c.removeChild(b);}
function Dl(a,b){if(a===null){throw mo(new lo(),'Null widget handle. If you are creating a composite, ensure that initWidget() has been called.');}b=b.ud();if(b.fc()==0){throw Cn(new Bn(),'Style names cannot be empty');}Bl(a);Fl(a,b);}
function El(c,i,a){var b,d,e,f,g,h;if(c===null){throw mo(new lo(),'Null widget handle. If you are creating a composite, ensure that initWidget() has been called.');}i=i.ud();if(i.fc()==0){throw Cn(new Bn(),'Style names cannot be empty');}h=Bl(c);if(h===null){e=(-1);h='';}else{e=h.Bb(i);}while(e!=(-1)){if(e==0||h.B(e-1)==32){f=e+i.fc();g=h.fc();if(f==g||f<g&&h.B(f)==32){break;}}e=h.Cb(i,e+1);}if(a){if(e==(-1)){if(h.fc()>0){h+=' ';}qd(c,'className',h+i);}}else{if(e!=(-1)){if(e==0){throw Cn(new Bn(),'Cannot remove base style name');}b=h.td(0,e);d=h.sd(e+i.fc());qd(c,'className',b+d);}}}
function Fl(c,f){var a=c.className;var h=a.indexOf(' ');if(h>=0){var g=a.substring(0,h);var e='',b=0;while(true){var d=a.indexOf(g,b);if(d== -1){e+=a.substring(b);break;}e+=a.substring(b,d);e+=f;b=d+g.length;}c.className=e;}else{c.className=f;}}
function sl(){}
_=sl.prototype=new ho();_.fd=Cl;_.yd=rt+'UIObject';_.xd=0;_.h=null;function Am(a){if(a.f){throw Fn(new En(),"Should only call onAttach when the widget is detached from the browser's document");}a.f=true;rd(a.h,a);}
function Bm(a){if(!a.f){throw Fn(new En(),"Should only call onDetach when the widget is attached to the browser's document");}{a.f=false;rd(a.h,null);}}
function Cm(a){if(a.g!==null){a.g.dd(a);}else if(a.g!==null){throw Fn(new En(),"This widget's parent does not implement HasWidgets");}}
function Dm(b,a){if(b.f){rd(b.h,null);}vl(b,a);if(b.f){rd(a,b);}}
function Em(c,b){var a;a=c.g;c.g=b;if(b===null){if(a!==null&&a.f){c.jc();}}else if(b.f){c.hc();}}
function Fm(){Am(this);}
function an(a){}
function bn(){Bm(this);}
function cn(a){Dm(this,a);}
function hm(){}
_=hm.prototype=new sl();_.hc=Fm;_.ic=an;_.jc=bn;_.jd=cn;_.yd=rt+'Widget';_.xd=16;_.f=false;_.g=null;function qk(b,c,a){Cm(c);if(a!==null){nc(a,c.h);}Em(c,b);}
function sk(b,c){var a;if(c.g!==b){throw Cn(new Bn(),'w is not a child of this panel');}a=c.h;Em(c,null);ld(fd(a),a);}
function tk(c){var a,b;Am(c);for(b=c.dc();mm(b);){a=nm(b);a.hc();}}
function uk(c){var a,b;Bm(c);for(b=c.dc();mm(b);){a=nm(b);a.jc();}}
function vk(a){sk(this,a);}
function wk(){tk(this);}
function xk(){uk(this);}
function pk(){}
_=pk.prototype=new hm();_.eb=vk;_.hc=wk;_.jc=xk;_.yd=rt+'Panel';_.xd=17;function mi(a){a.e=rm(new im(),a);}
function ni(a){mi(a);return a;}
function oi(b,c,a){return ri(b,c,a,b.e.c);}
function qi(b,a){return um(b.e,a);}
function ri(d,e,b,a){var c;if(a<0||a>d.e.c){throw new bo();}c=qi(d,e);if(c==(-1)){Cm(e);}else{d.dd(e);if(c<a){a--;}}qk(d,e,b);vm(d.e,e,a);return a;}
function si(a,b){if(!tm(a.e,b)){return false;}a.eb(b);ym(a.e,b);return true;}
function ti(){return wm(this.e);}
function ui(a){return si(this,a);}
function li(){}
_=li.prototype=new pk();_.dc=ti;_.dd=ui;_.yd=rt+'ComplexPanel';_.xd=18;function vh(a){ni(a);a.jd(qc());vd(a.h,'position','relative');vd(a.h,'overflow','hidden');return a;}
function wh(a,b){oi(a,b,a.h);}
function xh(b,d,a,c){Cm(d);zh(b,d,a,c);wh(b,d);}
function zh(c,e,b,d){var a;a=e.h;if(b==(-1)&&d==(-1)){Ah(a);}else{vd(a,'position','absolute');vd(a,'left',b+'px');vd(a,'top',d+'px');}}
function Ah(a){vd(a,'left','');vd(a,'top','');vd(a,'position','static');}
function Bh(a){sk(this,a);Ah(a.h);}
function uh(){}
_=uh.prototype=new li();_.eb=Bh;_.yd=rt+'AbsolutePanel';_.xd=19;function xi(){xi=kt;nn(),pn;}
function wi(b,a){nn(),pn;zi(b,a);return b;}
function yi(b,a){switch(Ec(a)){case 1:break;case 4096:case 2048:break;case 128:case 512:case 256:break;}}
function zi(b,a){Dm(b,a);Al(b,7041);}
function Ai(a){yi(this,a);}
function Bi(a){zi(this,a);}
function vi(){}
_=vi.prototype=new hm();_.ic=Ai;_.jd=Bi;_.yd=rt+'FocusWidget';_.xd=20;function Eh(b,a){wi(b,a);return b;}
function ai(b,a){td(b.h,a);}
function Dh(){}
_=Dh.prototype=new vi();_.yd=rt+'ButtonBase';_.xd=21;function bi(a){Eh(a,pc());ei(a.h);yl(a,'gwt-Button');return a;}
function ci(b,a){bi(b);ai(b,a);return b;}
function ei(b){xi();if(b.type=='submit'){try{b.setAttribute('type','button');}catch(a){}}}
function Ch(){}
_=Ch.prototype=new Dh();_.yd=rt+'Button';_.xd=22;function gi(a){ni(a);a.d=wc();a.c=tc();nc(a.d,a.c);a.jd(a.d);return a;}
function ii(a,b){if(b.g!==a){return null;}return fd(b.h);}
function ji(c,d,a){var b;b=ii(c,d);if(b!==null){qd(b,'align',a.a);}}
function ki(c,d,a){var b;b=ii(c,d);if(b!==null){vd(b,'verticalAlign',a.a);}}
function fi(){}
_=fi.prototype=new li();_.yd=rt+'CellPanel';_.xd=23;_.c=null;_.d=null;function cj(){cj=kt;aj(new Fi(),'center');dj=aj(new Fi(),'left');aj(new Fi(),'right');}
var dj;function aj(b,a){b.a=a;return b;}
function Fi(){}
_=Fi.prototype=new ho();_.yd=rt+'HasHorizontalAlignment$HorizontalAlignmentConstant';_.xd=0;_.a=null;function jj(){jj=kt;hj(new gj(),'bottom');hj(new gj(),'middle');kj=hj(new gj(),'top');}
var kj;function hj(a,b){a.a=b;return a;}
function gj(){}
_=gj.prototype=new ho();_.yd=rt+'HasVerticalAlignment$VerticalAlignmentConstant';_.xd=0;_.a=null;function yj(){yj=kt;hs(new or());}
function vj(a,b){yj();sj(new qj(),a,b);yl(a,'gwt-Image');return a;}
function wj(b,a){if(b.a===null){b.a=ze(new ye());}Ae(b.a,a,b);}
function xj(b,a){if(b.b===null){b.b=ff(new ef());}gf(b.b,a,b);}
function zj(a){if(this.c===null){this.c=gk(new fk());}Aq(this.c,a);}
function Aj(a){switch(Ec(a)){case 1:{break;}case 4:case 8:case 64:case 16:case 32:{if(this.c!==null){kk(this.c,this,a);}break;}case 131072:break;case 32768:{break;}case 65536:{break;}}}
function nj(){}
_=nj.prototype=new hm();_.v=zj;_.ic=Aj;_.yd=rt+'Image';_.xd=24;_.a=null;_.b=null;_.c=null;function oj(){}
_=oj.prototype=new ho();_.yd=rt+'Image$State';_.xd=0;function rj(b,a){a.jd(rc());Al(a,229501);return b;}
function sj(b,a,c){rj(b,a);uj(b,a,c);return b;}
function uj(b,a,c){sd(a.h,c);}
function qj(){}
_=qj.prototype=new oj();_.yd=rt+'Image$UnclippedState';_.xd=0;function Dj(a){a.jd(qc());Al(a,131197);yl(a,'gwt-Label');return a;}
function Ej(b,a){Dj(b);ck(b,a);return b;}
function Fj(b,a){if(b.a===null){b.a=ze(new ye());}Ae(b.a,a,b);}
function ak(b,a){if(b.b===null){b.b=ff(new ef());}gf(b.b,a,b);}
function ck(b,a){ud(b.h,a);}
function dk(a){if(this.c===null){this.c=gk(new fk());}Aq(this.c,a);}
function ek(a){switch(Ec(a)){case 1:break;case 4:case 8:case 64:case 16:case 32:if(this.c!==null){kk(this.c,this,a);}break;case 131072:break;}}
function Cj(){}
_=Cj.prototype=new hm();_.v=dk;_.ic=ek;_.yd=rt+'Label';_.xd=25;_.a=null;_.b=null;_.c=null;function zq(a){a.Eb();return a;}
function Aq(b,a){b.w(b.rd(),a);return true;}
function Cq(b,a){return Dq(b,a)!=(-1);}
function Dq(b,a){return b.Ab(a,0);}
function Eq(c,a){var b;b=c.wb(a);c.ad(a,a+1);return b;}
function Fq(c,d){var a=this.a;var b=this.b;var e=this.c;if(c+e==b){a[b]=d;this.b++;return;}if(c==0){a[--this.c]=d;return;}this.vd(c);a.splice(c+e,0,d);this.b++;}
function ar(a){return Aq(this,a);}
function br(a){return Cq(this,a);}
function cr(a,b){return a===null?b===null:a.gb(b);}
function dr(a){this.wd(a);var b=this.c;return this.a[a+b];}
function er(e,d){var a=this.a;var f=this.c;var c=d+f;var b=this.b;while(c<b){if(cr(a[c],e)){return c-f;}++c;}return -1;}
function fr(a){throw co(new bo(),'Size: '+this.rd()+' Index: '+a);}
function gr(){this.a=new Array();var a=1000000000;this.c=a;this.b=a;}
function ir(a){return Eq(this,a);}
function hr(c,g){this.vd(c);this.vd(g);var a=this.a;var f=this.c;var b=this.b;if(c==0){for(var d=f;d<g+f;d++){delete a[d];}this.c+=g-c;}else if(g+f==b){for(var d=c+f;d<b;d++){delete a[d];}this.b=c+f;}else{var e=g-c;a.splice(c+f,e);this.b-=e;}}
function jr(){return this.b-this.c;}
function lr(b){var a=this.b;var c=this.c;if(b<0||b+c>=a){this.Db(b);}}
function kr(b){var a=this.b;var c=this.c;if(b<0||b+c>a){this.Db(b);}}
function yq(){}
_=yq.prototype=new mp();_.w=Fq;_.z=ar;_.E=br;_.wb=dr;_.Ab=er;_.Db=fr;_.Eb=gr;_.cd=ir;_.ad=hr;_.rd=jr;_.wd=lr;_.vd=kr;_.yd=ut+'ArrayList';_.xd=26;_.a=null;_.b=0;_.c=0;function gk(a){zq(a);return a;}
function ik(d,c,e,f){var a,b;for(a=d.dc();a.yb();){b=Fb(a.gc(),12);b.wc(c,e,f);}}
function jk(d,c){var a,b;for(a=d.dc();a.yb();){b=Fb(a.gc(),12);b.xc(c);}}
function kk(e,c,a){var b,d,f,g,h;d=c.h;g=Ac(a)-ad(c.h)+cd(d,'scrollLeft')+re();h=Bc(a)-bd(c.h)+cd(d,'scrollTop')+se();switch(Ec(a)){case 4:ik(e,c,g,h);break;case 8:nk(e,c,g,h);break;case 64:mk(e,c,g,h);break;case 16:b=Cc(a);if(!id(c.h,b)){jk(e,c);}break;case 32:f=Dc(a);if(!id(c.h,f)){lk(e,c);}break;}}
function lk(d,c){var a,b;for(a=d.dc();a.yb();){b=Fb(a.gc(),12);b.yc(c);}}
function mk(d,c,e,f){var a,b;for(a=d.dc();a.yb();){b=Fb(a.gc(),12);b.zc(c,e,f);}}
function nk(d,c,e,f){var a,b;for(a=d.dc();a.yb();){b=Fb(a.gc(),12);b.Ac(c,e,f);}}
function fk(){}
_=fk.prototype=new yq();_.yd=rt+'MouseListenerCollection';_.xd=27;function Ek(){Ek=kt;dl=hs(new or());}
function Dk(b,a){Ek();vh(b);if(a===null){a=Fk();}b.jd(a);tk(b);return b;}
function al(){Ek();return bl(null);}
function bl(c){Ek();var a,b;b=Fb(dl.xb(c),13);if(b!==null){return b;}a=null;if(dl.a==0){cl();}dl.Dc(c,b=Dk(new yk(),a));return b;}
function Fk(){Ek();return $doc.body;}
function cl(){Ek();me(new zk());}
function yk(){}
_=yk.prototype=new uh();_.yd=rt+'RootPanel';_.xd=28;var dl;function Bk(){var a,b;for(b=ks((Ek(),dl)).dc();b.yb();){a=Fb(b.gc(),13);if(a.f){uk(a);}}}
function Ck(){return null;}
function zk(){}
_=zk.prototype=new ho();_.Bc=Bk;_.Cc=Ck;_.yd=rt+'RootPanel$1';_.xd=29;function nl(b,a){wi(b,a);Al(b,1024);return b;}
function pl(a){var b;yi(this,a);b=Ec(a);}
function ml(){}
_=ml.prototype=new vi();_.ic=pl;_.yd=rt+'TextBoxBase';_.xd=30;function ql(a){nl(a,sc());yl(a,'gwt-TextBox');return a;}
function ll(){}
_=ll.prototype=new ml();_.yd=rt+'TextBox';_.xd=31;function bm(a){a.a=(cj(),dj);a.b=(jj(),kj);}
function cm(a){gi(a);bm(a);qd(a.d,'cellSpacing','0');qd(a.d,'cellPadding','0');return a;}
function dm(a,b){fm(a,b,a.e.c);}
function fm(c,e,a){var b,d;d=vc();b=uc();a=ri(c,e,b,a);nc(d,b);hd(c.c,d,a);ji(c,e,c.a);ki(c,e,c.b);}
function gm(c){var a,b;if(c.g!==this){return false;}a=fd(c.h);b=fd(a);ld(this.c,b);si(this,c);return true;}
function am(){}
_=am.prototype=new fi();_.dd=gm;_.yd=rt+'VerticalPanel';_.xd=32;function rm(b,a){b.b=a;b.a=Ab('[Lcom.google.gwt.user.client.ui.Widget;',[0],[15],[4],null);return b;}
function tm(a,b){return um(a,b)!=(-1);}
function um(b,c){var a;for(a=0;a<b.c;++a){if(b.a[a]===c){return a;}}return (-1);}
function vm(d,e,a){var b,c;if(a<0||a>d.c){throw new bo();}if(d.c==d.a.a){c=Ab('[Lcom.google.gwt.user.client.ui.Widget;',[0],[15],[d.a.a*2],null);for(b=0;b<d.a.a;++b){Bb(c,b,d.a[b]);}d.a=c;}++d.c;for(b=d.c-1;b>a;--b){Bb(d.a,b,d.a[b-1]);}Bb(d.a,a,e);}
function wm(a){return km(new jm(),a);}
function xm(c,b){var a;if(b<0||b>=c.c){throw new bo();}--c.c;for(a=b;a<c.c;++a){Bb(c.a,a,c.a[a+1]);}Bb(c.a,c.c,null);}
function ym(b,c){var a;a=um(b,c);if(a==(-1)){throw new zs();}xm(b,a);}
function im(){}
_=im.prototype=new ho();_.yd=rt+'WidgetCollection';_.xd=0;_.a=null;_.b=null;_.c=0;function km(b,a){b.b=a;return b;}
function mm(a){return a.a<a.b.c-1;}
function nm(a){if(a.a>=a.b.c){throw new zs();}return a.b.a[++a.a];}
function om(){return mm(this);}
function pm(){return nm(this);}
function qm(){if(this.a<0||this.a>=this.b.c){throw new En();}this.b.b.dd(this.b.a[this.a--]);}
function jm(){}
_=jm.prototype=new ho();_.yb=om;_.gc=pm;_.bd=qm;_.yd=rt+'WidgetCollection$WidgetIterator';_.xd=0;_.a=(-1);function nn(){nn=kt;on=gn(new en());pn=on!==null?mn(new dn()):on;}
function mn(a){nn();return a;}
function dn(){}
_=dn.prototype=new ho();_.yd=st+'FocusImpl';_.xd=0;var on,pn;function fn(a){a.F();a.bb();a.db();}
function gn(a){mn(a);fn(a);return a;}
function jn(){return function(a){if(this.parentNode.onblur){this.parentNode.onblur(a);}};}
function kn(){return function(a){if(this.parentNode.onfocus){this.parentNode.onfocus(a);}};}
function ln(){return function(){this.firstChild.focus();};}
function en(){}
_=en.prototype=new dn();_.F=jn;_.bb=kn;_.db=ln;_.yd=st+'FocusImplOld';_.xd=0;function rn(){}
_=rn.prototype=new lo();_.yd=tt+'ArrayStoreException';_.xd=33;function un(){}
_=un.prototype=new lo();_.yd=tt+'ClassCastException';_.xd=34;function Cn(b,a){mo(b,a);return b;}
function Bn(){}
_=Bn.prototype=new lo();_.yd=tt+'IllegalArgumentException';_.xd=35;function Fn(b,a){mo(b,a);return b;}
function En(){}
_=En.prototype=new lo();_.yd=tt+'IllegalStateException';_.xd=36;function co(b,a){mo(b,a);return b;}
function bo(){}
_=bo.prototype=new lo();_.yd=tt+'IndexOutOfBoundsException';_.xd=37;function fo(){}
_=fo.prototype=new lo();_.yd=tt+'NegativeArraySizeException';_.xd=38;function po(){po=kt;{to();}}
function qo(b,a){if(!ac(a,18))return false;return ro(b,a);}
function ro(a,b){po();return a.toString()==b;}
function so(d){po();var a=wo[':'+d];if(a){return a;}a=0;var c=d.length;var b=c;while(--b>=0){a<<=1;a+=d.charCodeAt(b);}wo[':'+d]=a;return a;}
function to(){po();wo={};}
function uo(a){return this.charCodeAt(a);}
function vo(a){return qo(this,a);}
function xo(){return so(this);}
function yo(a){return this.indexOf(a);}
function zo(a,b){return this.indexOf(a,b);}
function Ao(){return this.length;}
function Bo(a){return this.substr(a,this.length-a);}
function Co(a,b){return this.substr(a,b-a);}
function Do(){var a=this.replace(/^(\s*)/,'');var b=a.replace(/\s*$/,'');return b;}
_=String.prototype;_.B=uo;_.gb=vo;_.zb=xo;_.Bb=yo;_.Cb=zo;_.fc=Ao;_.sd=Bo;_.td=Co;_.ud=Do;_.yd=tt+'String';_.xd=39;var wo=null;function ap(a){return gb(a);}
function fp(b,a){mo(b,a);return b;}
function ep(){}
_=ep.prototype=new lo();_.yd=tt+'UnsupportedOperationException';_.xd=40;function op(b,a){b.c=a;return b;}
function qp(a){return a.a<a.c.rd();}
function rp(){return qp(this);}
function sp(){if(!qp(this)){throw new zs();}return this.c.wb(this.b=this.a++);}
function tp(){if(this.b<0){throw new En();}this.c.cd(this.b);this.a=this.b;this.b=(-1);}
function np(){}
_=np.prototype=new ho();_.yb=rp;_.gc=sp;_.bd=tp;_.yd=ut+'AbstractList$IteratorImpl';_.xd=0;_.a=0;_.b=(-1);function mq(f,d,e){var a,b,c;for(b=sr(f.fb());bs(b);){a=Fb(cs(b),21);c=a.tb();if(d===null?c===null:d.gb(c)){if(e){ds(b);}return a;}}return null;}
function nq(b){var a;a=b.fb();return Dp(new Cp(),b,a);}
function oq(a){return mq(this,a,false)!==null;}
function pq(d){var a,b,c,e,f,g,h;if(d===this){return true;}if(!ac(d,20)){return false;}f=Fb(d,20);c=nq(this);e=f.ec();if(!vq(c,e)){return false;}for(a=Fp(c);gq(a);){b=hq(a);h=this.xb(b);g=f.xb(b);if(h===null?g!==null:!h.gb(g)){return false;}}return true;}
function qq(b){var a;a=mq(this,b,false);return a===null?null:a.vb();}
function rq(){var a,b,c;b=0;for(c=sr(this.fb());bs(c);){a=Fb(cs(c),21);b+=a.zb();}return b;}
function sq(){return nq(this);}
function Bp(){}
_=Bp.prototype=new ho();_.D=oq;_.gb=pq;_.xb=qq;_.zb=rq;_.ec=sq;_.yd=ut+'AbstractMap';_.xd=41;function vq(e,b){var a,c,d;if(b===e){return true;}if(!ac(b,22)){return false;}c=Fb(b,22);if(c.rd()!=e.rd()){return false;}for(a=c.dc();a.yb();){d=a.gc();if(!e.E(d)){return false;}}return true;}
function wq(a){return vq(this,a);}
function xq(){var a,b,c;a=0;for(b=this.dc();b.yb();){c=b.gc();if(c!==null){a+=c.zb();}}return a;}
function tq(){}
_=tq.prototype=new hp();_.gb=wq;_.zb=xq;_.yd=ut+'AbstractSet';_.xd=42;function Dp(b,a,c){b.a=a;b.b=c;return b;}
function Fp(b){var a;a=sr(b.b);return eq(new dq(),b,a);}
function aq(a){return this.a.D(a);}
function bq(){return Fp(this);}
function cq(){return this.b.a.a;}
function Cp(){}
_=Cp.prototype=new tq();_.E=aq;_.dc=bq;_.rd=cq;_.yd=ut+'AbstractMap$1';_.xd=43;function eq(b,a,c){b.a=c;return b;}
function gq(a){return a.a.yb();}
function hq(b){var a;a=Fb(b.a.gc(),21);return a.tb();}
function iq(){return gq(this);}
function jq(){return hq(this);}
function kq(){this.a.bd();}
function dq(){}
_=dq.prototype=new ho();_.yb=iq;_.gc=jq;_.bd=kq;_.yd=ut+'AbstractMap$2';_.xd=0;function hs(a){a.ac();return a;}
function is(c,b,a){c.u(b,a,1);}
function ks(a){var b;b=zq(new yq());is(a,b,a.b);return b;}
function ls(k,h,l){var b=0;var c=1;var a=2;var j=this.b;for(var f in h){var e=null;if(f=='null'||f.charAt(f.length-1)=='S'){var i=null;if(l!=c&&f!='null'){i=f.substring(0,f.length-1);}if(l==b){e=i;}else if(l==c){e=j[f];}else if(l==a){e=os(i,j[f]);}k.z(e);}else{var d=j[f];for(var g in d){if(l!=a){e=d[g][l];}else{e=os(d[g][0],d[g][1]);}k.z(e);}}}}
function ms(a){if(ac(a,18)){return Fb(a,18)+'S';}else if(a===null){return 'null';}else{return null;}}
function ns(b){var a=ms(b);if(a==null){var c=qs(this,b);return c!=null;}else{return this.b[a]!==undefined;}}
function os(a,b){return xr(new wr(),a,b);}
function ps(){return qr(new pr(),this);}
function qs(h,f){var a=0;var g=h.b;var e=f.zb();var c=g[e];if(c!=null){for(var d in c){var b=c[d];if(b[a].gb(f)){return [e,d];}}}return null;}
function rs(g){var a=0;var b=1;var f=ms(g);if(f!=null){var d=this.b[f];if(d===undefined){return null;}else{return d;}}else{f=g.zb();}var c=this.b[f];if(c==null){return null;}for(var e in c){if(c[e][a].gb(g)){return c[e][b];}}return null;}
function ss(){this.b=[];}
function ts(f,h){var a=0;var b=1;var g=null;var e=ms(f);if(e!=null){g=this.b[e];this.b[e]=h;if(g===undefined){this.a++;return null;}else{return g;}}else{e=f.zb();}var c=this.b[e];if(c==null){c=[];this.b[e]=c;}for(var d in c){if(c[d][a].gb(f)){g=c[d][b];c[d]=[f,h];return g;}}this.a++;c[c.length]=[f,h];return null;}
function us(e){var a=1;var g=this.b;var d=ms(e);var h=null;if(d!=null){h=g[d];delete g[d];if(h!==undefined){this.a--;return h;}else{return null;}}var f=qs(this,e);if(f==null){return null;}this.a--;var b=f[0];var c=f[1];var h=g[b][c][a];g[b].splice(c,1);if(g[b].length>0){return h;}delete g[b];return h;}
function or(){}
_=or.prototype=new Bp();_.u=ls;_.D=ns;_.fb=ps;_.xb=rs;_.ac=ss;_.Dc=ts;_.ed=us;_.yd=ut+'HashMap';_.xd=44;_.a=0;_.b=null;function qr(b,a){b.a=a;return b;}
function sr(a){return Fr(new Er(),a.a);}
function tr(b){var a,c,d,e;a=Fb(b,21);if(a!==null){d=a.tb();e=a.vb();if(e!==null||this.a.D(d)){c=this.a.xb(d);if(e===null){return c===null;}else{return e.gb(c);}}}return false;}
function ur(){return sr(this);}
function vr(){return this.a.a;}
function pr(){}
_=pr.prototype=new tq();_.E=tr;_.dc=ur;_.rd=vr;_.yd=ut+'HashMap$1';_.xd=45;function xr(b,a,c){b.a=a;b.b=c;return b;}
function zr(c,a,b){if(a===b){return true;}else if(a===null){return false;}else{return a.gb(b);}}
function Ar(a){var b;if(ac(a,21)){b=Fb(a,21);if(zr(this,this.a,b.tb())&&zr(this,this.b,b.vb())){return true;}}return false;}
function Br(){return this.a;}
function Cr(){return this.b;}
function Dr(){var a,b;a=0;b=0;if(this.a!==null){a=this.a.zb();}if(this.b!==null){b=this.b.zb();}return a^b;}
function wr(){}
_=wr.prototype=new ho();_.gb=Ar;_.tb=Br;_.vb=Cr;_.zb=Dr;_.yd=ut+'HashMap$EntryImpl';_.xd=46;_.a=null;_.b=null;function Fr(d,c){var a,b;d.c=c;a=zq(new yq());d.c.u(a,d.c.b,2);b=a.dc();d.a=b;return d;}
function bs(a){return a.a.yb();}
function cs(a){a.b=a.a.gc();return a.b;}
function ds(a){if(a.b===null){throw Fn(new En(),'Must call next() before remove().');}else{a.a.bd();a.c.ed(Fb(a.b,21).tb());}}
function es(){return bs(this);}
function fs(){return cs(this);}
function gs(){ds(this);}
function Er(){}
_=Er.prototype=new ho();_.yb=es;_.gc=fs;_.bd=gs;_.yd=ut+'HashMap$EntrySetImplIterator';_.xd=0;_.a=null;_.b=null;function zs(){}
_=zs.prototype=new lo();_.yd=ut+'NoSuchElementException';_.xd=47;function qn(){r(new m());}
function gwtOnLoad(b,d,c){$moduleName=d;$moduleBase=c;if(b)try{qn();}catch(a){b(d);}else{qn();}}
var dc=[{},{6:1,7:1},{3:1},{2:1},{2:1},{2:1},{2:1,10:1},{1:1},{1:1,4:1},{1:1},{5:1},{19:1},{19:1},{19:1},{11:1,19:1},{8:1,12:1},{14:1,15:1,16:1,17:1},{14:1,15:1,16:1,17:1},{14:1,15:1,16:1,17:1},{14:1,15:1,16:1,17:1},{14:1,15:1,16:1,17:1},{14:1,15:1,16:1,17:1},{14:1,15:1,16:1,17:1},{14:1,15:1,16:1,17:1},{9:1,14:1,15:1,16:1,17:1},{9:1,14:1,15:1,16:1,17:1},{19:1},{19:1},{13:1,14:1,15:1,16:1,17:1},{5:1},{14:1,15:1,16:1,17:1},{14:1,15:1,16:1,17:1},{14:1,15:1,16:1,17:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{18:1},{2:1},{20:1},{22:1},{22:1},{20:1},{22:1},{21:1},{2:1}];if (com_alex_gorisse_DragMove14) {  var __gwt_initHandlers = com_alex_gorisse_DragMove14.__gwt_initHandlers;  com_alex_gorisse_DragMove14.onScriptLoad(gwtOnLoad);}})();