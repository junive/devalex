(function(){var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var _,mw='com.alex_gorisse.client.',nw='com.alex_gorisse.gwt.dragmovedrop.',ow='com.google.gwt.core.client.',pw='com.google.gwt.lang.',qw='com.google.gwt.user.client.',rw='com.google.gwt.user.client.dnd.',sw='com.google.gwt.user.client.impl.',tw='com.google.gwt.user.client.ui.',uw='java.lang.',vw='java.util.';function lw(){}
function hr(a){return this===a;}
function ir(){return Cr(this);}
function fr(){}
_=fr.prototype={};_.ib=hr;_.Cb=ir;_.Ad=uw+'Object';_.zd=0;function eb(a){a.g=mp(new kp());a.h=mp(new kp());a.b=um(new sm(),'Move this bar');a.c=um(new sm(),'Move this bar');}
function fb(a){eb(a);return a;}
function hb(x){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w;t=Dk(new Ck());ap(t,950,700);bp(t,'jeDragOver');j=um(new sm(),'Move this bar');dp(j,'950');ym(j,(yl(),Al));kg(j.h,'background','#99cccc');n=Bb(new ub(),j);hc(n,t);x.d=Dk(new Ck());kg(x.d.h,'background','#ffffcc');ap(x.d,350,450);bp(x.d,'jeDragOver2');dp(x.b,'350');ym(x.b,(yl(),Al));kg(x.b.h,'background','#99cccc');vm(x.b,x);o=Bb(new ub(),x.b);hc(o,x.d);Fb(o,true);u=Dk(new Ck());kg(u.h,'background','#00ccff');bp(u,'jeDragOver');ap(u,200,200);k=um(new sm(),'Move this bar');dp(k,'200');ym(k,(yl(),Al));kg(k.h,'background','#99cccc');p=Bb(new ub(),k);hc(p,u);Fb(p,true);bp(x.g,'jeDragOver');w=ao(new En(),x.g);ap(w,180,200);e=cd(new zc(),x.g,new z());d=cd(new zc(),x.h,new B());md(e,w);hd(e,true);for(g=0;g<9;g++){l=um(new sm(),'Move me in or out');vm(l,x);wm(l,x);m=Bb(new ub(),l);if(g<3){bp(l,'DragBox4');fc(m,An(),true);}if(g>=3&&g<6){zm(l,'I go into my grand pa');bp(l,'DragBox3');fc(m,x.d,true);Fb(m,true);fd(d,l);}if(g>=6){bp(l,'DragBox1');zm(l,'I copy into my grand pa');a=um(new sm(),"I'm a copy ");f=Bb(new ub(),a);fc(f,x.d,true);bp(a,'DragBox1');bc(m,a,An(),0,0);fd(d,a);}dd(e,l);np(x.g,l);}Fk(u,k,0,0);Fk(u,w,2,30);Fk(x.d,x.b,0,0);Fk(x.d,u,50,50);x.e=Dk(new Ck());kg(x.e.h,'background','#ffcc99');ap(x.e,200,370);bp(x.e,'jeDragOver');dp(x.c,'200');kg(x.c.h,'background','#99cccc');vm(x.c,x);q=Bb(new ub(),x.c);hc(q,x.e);Fb(q,true);ap(x.h,200,350);qp(x.h,(yl(),zl));fd(d,x.c);fd(d,x.b);fd(d,k);fd(d,j);fd(e,x.c);fd(e,x.b);fd(e,k);fd(e,j);v=ao(new En(),x.h);ap(v,200,350);for(h=0;h<1;h++){r=mp(new kp());b=cd(new zc(),r,new D());ld(b,true);for(i=0;i<6;i++){s=mp(new kp());c=cd(new zc(),s,new F());md(c,v);jd(c,true);for(g=0;g<3;g++){l=um(new sm(),'Move me in or out '+g);vm(l,x);m=Bb(new ub(),l);if(i==0){bp(l,'DragBox4');fc(m,An(),true);}if(i==1){bp(l,'DragBox0');zm(l,'I move and go back '+g);fc(m,An(),true);Eb(m,true);}if(i==2){bp(l,'DragBox1');zm(l,'I copy and go back '+g);a=um(new sm(),"I'm a copy "+g);f=Bb(new ub(),a);fc(f,An(),true);bp(a,'DragBox1');bc(m,a,An(),0,0);Eb(m,true);}if(i==3){bp(l,'DragBox5');zm(l,'I copy in a cat '+g);a=lm(new dm(),'cat.jpg');f=Bb(new ub(),a);fc(f,An(),true);bp(a,'noSpace');bc(m,a,An(),25,25);jc(f,15);ic(f,15);}if(i==4){bp(l,'DragBox3');vm(l,x);zm(l,'I go into my grand pa '+g);fc(m,t,true);Fb(m,true);}if(i==5){bp(l,'DragBox2');zm(l,'I copy in our out '+g);a=um(new sm(),"I'm a copy "+g);f=Bb(new ub(),a);fc(f,An(),true);bp(a,'DragBox2');bc(m,a,An(),0,0);}wm(l,x);dd(c,l);np(s,l);}dd(b,s);np(r,s);}dd(d,r);np(x.h,r);}Fk(x.e,x.c,0,0);Fk(x.e,v,0,20);Fk(t,j,0,0);Fk(t,x.d,100,30);Fk(t,x.e,500,30);Fk(Bn('myDrag'),t,50,50);cf(new bb());}
function ib(a,b){}
function jb(a,b,c){}
function kb(a,b){}
function lb(a,b){}
function mb(a,b,c){}
function nb(a,b){}
function ob(b,c,d){var a;a=ej(b);this.a++;tb(a.d.h,this.a);}
function sb(a,b){bp(a,this.f);}
function pb(a,b){this.f=Do(a);bp(a,'Over');}
function qb(a,b){bp(a,this.f);}
function rb(a,b){}
function tb(a,b){a.style.zIndex=b;}
function y(){}
_=y.prototype=new fr();_.mc=ib;_.nc=jb;_.oc=kb;_.pc=lb;_.qc=mb;_.rc=nb;_.sc=ob;_.wc=sb;_.tc=pb;_.uc=qb;_.vc=rb;_.Ad=mw+'DragMove14';_.zd=1;_.a=0;_.d=null;_.e=null;_.f='';function hi(a,b){}
function ei(a,b){}
function fi(a,b){}
function gi(a,b){}
function ci(){}
_=ci.prototype=new fr();_.wc=hi;_.tc=ei;_.uc=fi;_.vc=gi;_.Ad=rw+'DropListenerAdapter';_.zd=2;function z(){}
_=z.prototype=new ci();_.Ad=mw+'DragMove14$1';_.zd=3;function B(){}
_=B.prototype=new ci();_.Ad=mw+'DragMove14$2';_.zd=4;function D(){}
_=D.prototype=new ci();_.Ad=mw+'DragMove14$3';_.zd=5;function F(){}
_=F.prototype=new ci();_.Ad=mw+'DragMove14$4';_.zd=6;function db(a){if(tf(a)==4){uf(a);}return true;}
function bb(){}
_=bb.prototype=new fr();_.xc=db;_.Ad=mw+'DragMove14$5';_.zd=7;function Ab(a){a.m=wb(new vb(),a);a.k=um(new sm(),'      ');}
function Bb(a,b){Ab(a);a.A=b;if(we(a.A,1)){ve(a.A,1).C(a);}a.n=ej(a.A);if(mc===null){mc=hv(new mu());}mc.Fc(a.A,a);return a;}
function Cb(b,a){dc(b,ec(b));b.jd(b,ec(b).h,b.l,b.z,b.g,b.h,20,a);}
function Db(c,a,b){if(we(b,3)){Ek(ve(b,3),a);}else if(we(b,2)){pp(ve(b,2),a,c.d);}else if(we(b,4)){Ek(ve(b,4),a);}else{throw kr(new jr(),'Cannot insert into '+xd(b));}}
function Eb(b,a){b.a=a;}
function Fb(b,a){b.b=a;if(b.b){yi(b.n,false);}else{yi(b.n,true);}}
function cc(d,a,b,c){if(we(a,1)){d.p=a;cp(d.p,false);ve(d.p,1).C(d.m);d.q=d.n;d.n=ej(d.p);d.t=b;d.u=c;}}
function bc(e,b,a,c,d){e.j=a;cc(e,b,c,d);}
function dc(d,e){var a,b,c;b=null;a=e.h;if(d.j!==null){b=d.j;}else if(e.g!==null){b=e.g;}d.l=vf(a)-cj(a);d.z=wf(a)-dj(a);if(d.j!==An()&&b!==null){c=b.h;d.l-=vf(c)+cj(c);d.z-=wf(c)+dj(c);}}
function ec(a){return a.p!==null?a.p:a.A;}
function fc(c,b,a){c.c=a;c.o=b;}
function gc(d,b,c){var a;if(d.i&&we(c.g,2)){d.a=false;a=c.g;d.d=pc(c,a);kg(b.h,'position','static');Db(d,b,a);}}
function hc(a,b){zi(a.n,b);}
function ic(b,a){b.s=a;}
function jc(b,a){b.x=a;}
function kc(a,c,b){if(we(c,3)){Ek(ve(c,3),a);}else if(we(c,2)){pp(ve(c,2),a,b);}else if(we(c,4)){Ek(ve(c,4),a);}else{throw kr(new jr(),'Cannot insert into '+xd(c));}}
function lc(a){if(we(a,2)){return true;}else{return false;}}
function nc(b){if($doc.defaultView!=null){var c=$doc.defaultView.getComputedStyle(b,null);if(c!=null){var a=parseInt(c.getPropertyValue('border-bottom-width'));return a== -1?0:a;}}return 0;}
function oc(b){if($doc.defaultView!=null){var c=$doc.defaultView.getComputedStyle(b,null);if(c!=null){var a=parseInt(c.getPropertyValue('border-right-width'));return a== -1?0:a;}}return 0;}
function pc(a,b){if(we(b,2)){return pl(ve(b,2),a);}else{return (-1);}}
function qc(a,b){gc(this,a,b);if(this.y){cp(this.k,false);}}
function rc(a,b,c){if(this.a){Cb(this,false);}}
function sc(a,b){if(this.y){Fo(this.k,fj(b.h)+'');gc(this,this.k,b);cp(this.k,true);}}
function tc(a,b){if(this.y){cp(this.k,false);}}
function uc(l,p,q){var a,b,c,d,e,f,g,h,i,j,k,m,n,o;if(this.v!=0){Bi(this.n,this.n.n+this.v);}if(this.w!=0){Ci(this.n,this.n.p-this.w);}if(this.x!=0){Di(this.n,this.n.q+this.x);}if(this.s!=0){Ai(this.n,this.n.c-this.s);}if(this.b){c=this.n.d.h;d=this.n.d.g.h;g=this.n.s-this.n.a;o=this.n.t-this.n.b;k=g+ij(d)-oc(d)-this.n.a;b=o+fj(d)-nc(d)-this.n.b;f=p+gj(c);j=k-ij(c);n=q+hj(c);a=b-fj(c);h=cr(j,br(g,f));i=cr(a,br(o,n));e=h+this.n.a-this.n.s;m=i+this.n.b-this.n.t;pj(this.n.d,e,m);}}
function vc(a,b){}
function wc(a,b,d){var c,e;dc(this,this.A);if(lc(this.A.g)){this.d=pc(this.A,this.A.g);}if(this.a){this.g=this.l;this.h=this.z;}if(this.c){this.e=this.l;this.f=this.z;this.r=this.A.g;this.j=this.o;dc(this,this.A);this.g=this.l;this.h=this.z;fq(this.A);pj(this.A,this.l,this.z);Db(this,this.A,this.j);}if(this.p!==null){ag(this.A.h);xi(this.q,null);wi(this.q,this.A,b,d);if(this.r===null){this.r=this.A.g;}Db(this,this.p,this.j);c=0;e=0;if(this.t!=0){c=b;}if(this.u!=0){e=d;}pj(this.p,this.l+(c-this.t),this.z+(e-this.u));cp(this.p,true);vi(this.n,this.p,b-(c-this.t),d-(e-this.u));eg(this.p.h);}}
function xc(){if(this.c){pj(this.A,this.e,this.f);this.j=null;if(lc(this.r)){kg(this.A.h,'position','static');}Db(this,this.A,this.r);}}
function yc(n,d,e,f,i,j,b,a){var g=(i-e)/b;var h=(j-f)/b;var k=e;var l=f;var c=0;function m(){k=k+g;l=l+h;d.style['left']=k;d.style['top']=l;if(c<b){setTimeout(m,1);c++;}else{d.style['left']=i;d.style['top']=j;if(a){d.style.display=false?'':'none';}n.ad();}}
m();}
function ub(){}
_=ub.prototype=new fr();_.mc=qc;_.nc=rc;_.oc=sc;_.pc=tc;_.qc=uc;_.rc=vc;_.sc=wc;_.ad=xc;_.jd=yc;_.Ad=nw+'DragSource';_.zd=8;_.a=false;_.b=false;_.c=false;_.d=0;_.e=0;_.f=0;_.g=0;_.h=0;_.i=false;_.j=null;_.l=0;_.n=null;_.o=null;_.p=null;_.q=null;_.r=null;_.s=0;_.t=0;_.u=0;_.v=0;_.w=0;_.x=0;_.y=false;_.z=0;_.A=null;var mc=null;function ph(a,b){}
function qh(a,b,c){}
function rh(a,b){}
function sh(a,b){}
function th(a,b,c){}
function uh(a,b){}
function vh(a,b,c){}
function nh(){}
_=nh.prototype=new fr();_.mc=ph;_.nc=qh;_.oc=rh;_.pc=sh;_.qc=th;_.rc=uh;_.sc=vh;_.Ad=rw+'DragListenerAdapter';_.zd=9;function wb(b,a){b.a=a;return b;}
function yb(a,b){gc(this.a,a,b);}
function zb(a,b,c){if(this.a.a){Cb(this.a,true);}}
function vb(){}
_=vb.prototype=new nh();_.mc=yb;_.nc=zb;_.Ad=nw+'DragSource$1';_.zd=10;function ed(){ed=lw;pd=tm(new sm());}
function bd(a){a.c=Bc(new Ac(),a);}
function cd(b,c,a){ed();bd(b);b.t=c;b.h=ji(new ii());ki(b.h,b,b.t);ki(b.h,a,b.t);if(od===null){od=hv(new mu());}od.Fc(c,b.h);if(b.a===null){b.a=Ev(new Dv());}return b;}
function dd(f,a){var b,c,d,e;f.e=true;if(we(a,5)){ve(a,5).D(f.c);}else if(od.db(a)){ki(ve(od.Ab(a),6),f.c,a);}else{b=ji(new ii());ki(b,f.c,a);}if(f.d===null){f.d=Ev(new Dv());}d=bj;for(e=cw(d);e.Bb();){c=ve(e.ic(),6);if(c.a.ib(a)){Fv(f.d,c);d.hd(c);break;}}}
function fd(b,a){Fv(b.a,a);}
function hd(b,a){b.l=a;}
function gd(e,b,a){var c,d;d=b.g;if(e.l||e.m){if(lc(d)){c=pc(b,d);kg(a.h,'position','static');kc(a,d,c);}}}
function jd(b,a){b.m=a;}
function id(e,b,a){var c,d;d=b.g;if(e.m){fq(pd);if(lc(d)){c=pc(b,d);kg(pd.h,'position','static');Fo(pd,Bo(a)+'');dp(pd,Co(a)+'');kc(pd,d,c);cp(pd,true);}}}
function kd(j,g,d){var a,b,c,e,f,h,i,k,l;h=g.h;l=wf(h);a=l+Bo(g);f=vf(h);i=f+Co(g);e=yf(d.h,'startLeft');k=yf(d.h,'startTop');c=cr(a,br(k,l));b=cr(i,br(e,f));if(c==a||c==l||b==f||b==i){return true;}else{return false;}}
function ld(b,a){b.k=true;}
function md(b,a){b.p=a;}
function nd(c){var a,b;for(b=cw(c.d);b.Bb();){a=ve(b.ic(),6).a.h;fg(a,'startWidth',ij(a));fg(a,'startHeight',fj(a));fg(a,'startLeft',vf(a));fg(a,'startTop',wf(a));}}
function td(a,b){this.o=null;this.s=false;if(this.g!==null){if(aj(this.n,this.q,this.r,this.b,this.g)){mi(this.i,this.g,b);Ah(this.f,b,this.g);this.i=null;this.g=null;this.f=null;}}}
function qd(a,b){if(bw(this.a,b)){this.e=false;}else{this.e=true;}}
function rd(a,b){if(this.g!==null&&this.j){oi(this.i,this.g,b);Dh(this.f,b,this.g);this.g=null;this.i=null;this.j=false;}if(this.k){fq(pd);}this.o=null;this.s=false;this.f=null;}
function sd(d,e){var a,b,c;if(this.e){this.j=true;if(this.o===null){this.o=ej(e);this.f=this.o.f;}b=e;if(this.o.i){this.n=this.o.n;this.r=this.o.q;this.q=this.o.p;this.b=this.o.c;}if(this.g===null&&this.s){for(c=cw(this.d);c.Bb();){this.i=ve(c.ic(),6);a=this.i.a;if(aj(this.n,this.q,this.r,this.b,a)&&b!==a){this.g=a;if(this.g!==null&&this.p!==null&&kd(this,this.p,this.g)){this.g=null;if(this.m){fq(pd);}}if(this.g!==null){ni(this.i,this.g,b);Ch(this.f,b,this.g);}break;}}}if(this.g!==null){if(aj(this.n,this.q,this.r,this.b,this.g)){pi(this.i,this.g,b);Fh(this.f,b,this.g);}else{oi(this.i,this.g,b);Dh(this.f,b,this.g);this.j=false;this.g=null;}}if(!this.s){nd(this);}this.s=this.o.m;}}
function zc(){}
_=zc.prototype=new fr();_.wc=td;_.tc=qd;_.uc=rd;_.vc=sd;_.Ad=nw+'DropTarget';_.zd=11;_.a=null;_.b=0;_.d=null;_.e=false;_.f=null;_.g=null;_.h=null;_.i=null;_.j=false;_.k=false;_.l=false;_.m=false;_.n=0;_.o=null;_.p=null;_.q=0;_.r=0;_.s=false;_.t=null;var od=null,pd;function Bc(b,a){b.a=a;return b;}
function ad(a,b){gd(this.a,a,b);if(this.a.m){fq((ed(),pd));}}
function Dc(a,b){id(this.a,a,b);}
function Ec(a,b){}
function Fc(a,b){}
function Ac(){}
_=Ac.prototype=new fr();_.wc=ad;_.tc=Dc;_.uc=Ec;_.vc=Fc;_.Ad=nw+'DropTarget$1';_.zd=12;function xd(a){return a==null?null:a.Ad;}
var yd=null;function Bd(a){return a==null?0:a.$H?a.$H:(a.$H=Dd());}
function Cd(a){return a==null?0:a.$H?a.$H:(a.$H=Dd());}
function Dd(){return ++Ed;}
var Ed=0;function Er(b,a){a;return b;}
function Dr(){}
_=Dr.prototype=new fr();_.Ad=uw+'Throwable';_.zd=13;function uq(b,a){Er(b,a);return b;}
function tq(){}
_=tq.prototype=new Dr();_.Ad=uw+'Exception';_.zd=14;function kr(b,a){uq(b,a);return b;}
function jr(){}
_=jr.prototype=new tq();_.Ad=uw+'RuntimeException';_.zd=15;function ae(c,b,a){kr(c,'JavaScript '+b+' exception: '+a);return c;}
function Fd(){}
_=Fd.prototype=new jr();_.Ad=ow+'JavaScriptException';_.zd=16;function ee(b,a){if(!we(a,7)){return false;}return ge(b,ve(a,7));}
function fe(a){return Bd(a);}
function he(a){return ee(this,a);}
function ge(a,b){return a===b;}
function ie(){return fe(this);}
function ce(){}
_=ce.prototype=new fr();_.ib=he;_.Cb=ie;_.Ad=ow+'JavaScriptObject';_.zd=17;function ke(c,a,d,b,e){c.a=a;c.b=b;c.Ad=e;c.zd=d;return c;}
function me(a,b,c){return a[b]=c;}
function ne(b,a){return b[a];}
function oe(a){return a.length;}
function qe(e,d,c,b,a){return pe(e,d,c,b,0,oe(b),a);}
function pe(j,i,g,c,e,a,b){var d,f,h;if((f=ne(c,e))<0){throw new dr();}h=ke(new je(),f,ne(i,e),ne(g,e),j);++e;if(e<a){j=j.ud(1);for(d=0;d<f;++d){me(h,d,pe(j,i,g,c,e,a,b));}}else{for(d=0;d<f;++d){me(h,d,b);}}return h;}
function re(a,b,c){if(c!==null&&a.b!=0&& !we(c,a.b)){throw new mq();}return me(a,b,c);}
function je(){}
_=je.prototype=new fr();_.Ad=pw+'Array';_.zd=0;function ue(b,a){if(!b)return false;return !(!ze[b][a]);}
function ve(b,a){if(b!=null)ue(b.zd,a)||ye();return b;}
function we(b,a){if(b==null)return false;return ue(b.zd,a);}
function ye(){throw new pq();}
function xe(a){if(a!==null){throw new pq();}return a;}
function Ae(b,d){_=d.prototype;if(b&& !(b.zd>=_.zd)){var c=b.toString;for(var a in _){b[a]=_[a];}b.toString=c;}return b;}
var ze;function De(a){if(we(a,8)){return a;}return ae(new Fd(),Fe(a),Ee(a));}
function Ee(a){return a.message;}
function Fe(a){return a.name;}
function bf(){bf=lw;dg=wt(new vt());{Cf=new tj();vj(Cf);}}
function cf(a){bf();xt(dg,a);}
function df(b,a){bf();Cf.bb(b,a);}
function ef(a,b){bf();return Cf.cb(a,b);}
function ff(){bf();return Cf.fb('div');}
function gf(){bf();return Cf.fb('img');}
function hf(){bf();return Cf.fb('tbody');}
function jf(){bf();return Cf.fb('td');}
function kf(){bf();return Cf.fb('tr');}
function lf(){bf();return Cf.fb('table');}
function nf(b,a,d){bf();var c;c=yd;{mf(b,a,d);}}
function mf(b,a,c){bf();if(a===cg){if(tf(b)==8192){cg=null;}}c.kc(b);}
function of(b,a){bf();Cf.jb(b,a);}
function pf(a){bf();return Cf.kb(a);}
function qf(a){bf();return Cf.lb(a);}
function rf(a){bf();return Cf.mb(a);}
function sf(a){bf();return Cf.nb(a);}
function tf(a){bf();return Cf.ob(a);}
function uf(a){bf();Cf.pb(a);}
function vf(a){bf();return Cf.qb(a);}
function wf(a){bf();return Cf.rb(a);}
function xf(a){bf();return Cf.sb(a);}
function zf(a,b){bf();return Cf.ub(a,b);}
function yf(a,b){bf();return Cf.tb(a,b);}
function Af(a){bf();return Cf.vb(a);}
function Bf(a){bf();return Cf.xb(a);}
function Df(c,a,b){bf();Cf.dc(c,a,b);}
function Ef(b,a){bf();return Cf.ec(b,a);}
function Ff(a){bf();var b,c;c=true;if(dg.td()>0){b=ve(dg.zb(dg.td()-1),9);if(!(c=b.xc(a))){of(a,true);uf(a);}}return c;}
function ag(a){bf();if(cg!==null&&ef(a,cg)){cg=null;}Cf.bd(a);}
function bg(b,a){bf();Cf.cd(b,a);}
function eg(a){bf();cg=a;Cf.kd(a);}
function gg(a,b,c){bf();Cf.md(a,b,c);}
function fg(a,b,c){bf();Cf.ld(a,b,c);}
function hg(a,b){bf();Cf.nd(a,b);}
function ig(a,b){bf();Cf.od(a,b);}
function jg(a,b){bf();Cf.pd(a,b);}
function kg(b,a,c){bf();Cf.qd(b,a,c);}
function lg(a,b){bf();wj(Cf,a,b);}
var Cf=null,cg=null,dg;function og(a){if(we(a,10)){return ef(this,ve(a,10));}return ee(Ae(this,mg),a);}
function pg(){return fe(Ae(this,mg));}
function mg(){}
_=mg.prototype=new ce();_.ib=og;_.Cb=pg;_.Ad=qw+'Element';_.zd=18;function ug(a){return ee(Ae(this,qg),a);}
function vg(){return fe(Ae(this,qg));}
function qg(){}
_=qg.prototype=new ce();_.ib=ug;_.Cb=vg;_.Ad=qw+'Event';_.zd=19;function Bg(){Bg=lw;Dg=wt(new vt());{Cg();}}
function Cg(){Bg();bh(new xg());}
var Dg;function zg(){while((Bg(),Dg).td()>0){xe((Bg(),Dg).zb(0)).Cd();}}
function Ag(){return null;}
function xg(){}
_=xg.prototype=new fr();_.Dc=zg;_.Ec=Ag;_.Ad=qw+'Timer$1';_.zd=20;function ah(){ah=lw;ch=wt(new vt());mh=wt(new vt());{ih();}}
function bh(a){ah();xt(ch,a);}
function dh(){ah();var a,b;for(a=ch.fc();a.Bb();){b=ve(a.ic(),11);b.Dc();}}
function eh(){ah();var a,b,c,d;d=null;for(a=ch.fc();a.Bb();){b=ve(a.ic(),11);c=b.Ec();{d=c;}}return d;}
function fh(){ah();var a,b;for(a=mh.fc();a.Bb();){b=xe(a.ic());null.Cd();}}
function gh(){ah();return $doc.documentElement.scrollLeft||$doc.body.scrollLeft;}
function hh(){ah();return $doc.documentElement.scrollTop||$doc.body.scrollTop;}
function ih(){ah();__gwt_initHandlers(function(){lh();},function(){return kh();},function(){jh();$wnd.onresize=null;$wnd.onbeforeclose=null;$wnd.onclose=null;});}
function jh(){ah();var a;a=yd;{dh();}}
function kh(){ah();var a;a=yd;{return eh();}}
function lh(){ah();var a;a=yd;{fh();}}
var ch,mh;function es(d,a,b){var c;while(a.Bb()){c=a.ic();if(b===null?c===null:b.ib(c)){return a;}}return null;}
function gs(a){throw bs(new as(),'add');}
function hs(b){var a;a=es(this,this.fc(),b);return a!==null;}
function is(b){var a;a=es(this,this.fc(),b);if(a!==null){a.ed();return true;}else{return false;}}
function ds(){}
_=ds.prototype=new fr();_.ab=gs;_.eb=hs;_.hd=is;_.Ad=vw+'AbstractCollection';_.zd=0;function ss(b,a){throw bs(new as(),'add');}
function ts(a){this.F(this.td(),a);return true;}
function us(e){var a,b,c,d,f;if(e===this){return true;}if(!we(e,23)){return false;}f=ve(e,23);if(this.td()!=f.td()){return false;}c=this.fc();d=f.fc();while(c.Bb()){a=c.ic();b=d.ic();if(!(a===null?b===null:a.ib(b))){return false;}}return true;}
function vs(){var a,b,c,d;c=1;a=31;b=this.fc();while(b.Bb()){d=b.ic();c=31*c+(d===null?0:d.Cb());}return c;}
function ws(){return ls(new ks(),this);}
function xs(a){throw bs(new as(),'remove');}
function js(){}
_=js.prototype=new ds();_.F=ss;_.ab=ts;_.ib=us;_.Cb=vs;_.fc=ws;_.fd=xs;_.Ad=vw+'AbstractList';_.zd=21;function Ev(a){a.b=wt(new vt());return a;}
function Fv(b,a){return xt(b.b,a);}
function bw(b,a){return zt(b.b,a);}
function cw(a){return a.b.fc();}
function dw(a){return a.b.td();}
function ew(a,b){this.b.F(a,b);}
function fw(a){return Fv(this,a);}
function gw(a){return bw(this,a);}
function hw(a){return this.b.zb(a);}
function iw(){return cw(this);}
function jw(a){return Bt(this.b,a);}
function kw(){return dw(this);}
function Dv(){}
_=Dv.prototype=new js();_.F=ew;_.ab=fw;_.eb=gw;_.zb=hw;_.fc=iw;_.fd=jw;_.td=kw;_.Ad=vw+'Vector';_.zd=22;_.b=null;function xh(a){Ev(a);return a;}
function yh(b,a,c){if(b.a===null&&a!==null){b.a=si(new ri(),b,c);}if(a!==null){Fv(b,a);}}
function Ah(e,c,d){var a,b;for(a=cw(e);a.Bb();){b=ve(a.ic(),12);b.mc(c,d);}}
function Bh(d,c,e,f){var a,b;for(a=cw(d);a.Bb();){b=ve(a.ic(),12);b.nc(c,e,f);}}
function Ch(e,c,d){var a,b;for(a=cw(e);a.Bb();){b=ve(a.ic(),12);b.oc(c,d);}}
function Dh(e,c,d){var a,b;for(a=cw(e);a.Bb();){b=ve(a.ic(),12);b.pc(c,d);}}
function Eh(d,c,e,f){var a,b;for(a=cw(d);a.Bb();){b=ve(a.ic(),12);b.qc(c,e,f);}}
function Fh(e,c,d){var a,b;for(a=cw(e);a.Bb();){b=ve(a.ic(),12);b.rc(c,d);}}
function ai(d,c,e,f){var a,b;for(a=cw(d);a.Bb();){b=ve(a.ic(),12);b.sc(c,e,f);}}
function wh(){}
_=wh.prototype=new Dv();_.Ad=rw+'DragListenerCollection';_.zd=23;_.a=null;function ji(a){Ev(a);return a;}
function ki(b,a,c){if(a!==null){b.a=c;if(dw(b)==0){Fi(b);}Fv(b,a);}}
function mi(e,c,d){var a,b;for(a=cw(e);a.Bb();){b=ve(a.ic(),13);b.wc(c,d);}}
function ni(e,c,d){var a,b;for(a=cw(e);a.Bb();){b=ve(a.ic(),13);b.tc(c,d);}}
function oi(e,c,d){var a,b;for(a=cw(e);a.Bb();){b=ve(a.ic(),13);b.uc(c,d);}}
function pi(e,c,d){var a,b;for(a=cw(e);a.Bb();){b=ve(a.ic(),13);b.vc(c,d);}}
function ii(){}
_=ii.prototype=new Dv();_.Ad=rw+'DropListenerCollection';_.zd=24;_.a=null;function si(c,b,a){c.f=b;if(we(a,15)){ve(a,15).E(c);if(jj===null){jj=hv(new mu());}jj.Fc(a,c);}if(bj===null){bj=Ev(new Dv());}return c;}
function ui(a,b,c){a.m=false;a.h=false;a.r=true;if(a.j!==null&&a.e!==null){if(aj(a.n,a.p,a.q,a.c,a.j)){Ah(a.f,a.e,a.j);mi(a.k,a.j,a.e);a.k=null;a.j=null;}}if(a.e!==null){ag(a.e.h);Bh(a.f,a.e,b,c);a.e=null;}}
function vi(e,d,f,g){var a,c;try{e.m=true;e.e=d;if(e.e!==null){eg(e.e.h);if(e.d===null){e.d=e.e;}if(e.l){e.s=f;e.t=g;c=e.d.g.h;e.a=cj(c);e.b=dj(c);}ai(e.f,e.e,f,g);}}catch(a){a=De(a);if(we(a,16)){a;ui(e,f,g);}else throw a;}}
function wi(d,c,e,f){var a;try{ui(d,e,f);}catch(a){a=De(a);if(we(a,16)){a;ui(d,e,f);}else throw a;}}
function zi(a,b){a.d=b;}
function xi(a,b){a.e=b;}
function yi(b,a){b.g=a;}
function Ai(b,a){b.c=a;}
function Bi(b,a){b.n=a;}
function Ci(b,a){b.p=a;}
function Di(b,a){b.q=a;}
function Ei(d,c){var a,b;for(b=cw(c);b.Bb();){a=ve(b.ic(),6).a.h;fg(a,'startWidth',ij(a));fg(a,'startHeight',fj(a));fg(a,'startLeft',vf(a));fg(a,'startTop',wf(a));}}
function Fi(a){if(bj===null){bj=Ev(new Dv());}Fv(bj,a);}
function aj(b,c,f,a,g){var d,e,h;h=g.h;d=yf(h,'startLeft');e=yf(h,'startTop');return a>e&&f<e+yf(h,'startHeight')&&c>d&&b<d+yf(h,'startWidth');}
function cj(b){if(navigator.userAgent.indexOf('Opera')!= -1){return -b.clientLeft;}else if($doc.defaultView!=null&&navigator.userAgent.indexOf('Safari')== -1){var c=$doc.defaultView.getComputedStyle(b,null);if(c!=null){var a=parseInt(c.getPropertyValue('border-left-width'));return a== -1?0:a;}}return 0;}
function dj(b){if(navigator.userAgent.indexOf('Opera')!= -1){return -b.clientTop;}else if($doc.defaultView!=null&&navigator.userAgent.indexOf('Safari')== -1){var c=$doc.defaultView.getComputedStyle(b,null);if(c!=null){var a=parseInt(c.getPropertyValue('border-top-width'));return a== -1?0:a;}}return 0;}
function ej(a){if(jj!==null&&jj.db(a)){return ve(jj.Ab(a),14);}else{return null;}}
function fj(a){return parseInt(a.offsetHeight);}
function gj(a){return parseInt(a.offsetLeft);}
function hj(a){return parseInt(a.offsetTop);}
function ij(a){return parseInt(a.offsetWidth);}
function kj(a,b,c){vi(this,a,b,c);}
function lj(a){}
function mj(a){}
function nj(f,g,h){var a,c,d,e;try{if(this.m&&this.d!==null&&this.e!==null){eg(this.e.h);d=this.d.h;if(this.i){this.n=vf(d)+this.o;this.q=wf(d)+this.o;this.p=this.n+ij(d)-this.o;this.c=this.q+fj(d)-this.o;}Eh(this.f,this.e,g,h);if(this.j===null&& !this.r){for(e=cw(bj);e.Bb();){this.k=ve(e.ic(),6);c=this.k.a;if(aj(this.n,this.p,this.q,this.c,c)&&this.d!==c){this.h=true;this.j=c;if(this.j!==null){Ch(this.f,this.e,this.j);ni(this.k,this.j,this.e);}break;}}}if(this.j!==null&&this.h){if(aj(this.n,this.p,this.q,this.c,this.j)){Fh(this.f,this.e,this.j);pi(this.k,this.j,this.e);}else{Dh(this.f,this.e,this.j);oi(this.k,this.j,this.e);this.j=null;}}if(this.g){pj(this.d,g+gj(d)+this.a-this.s,h+hj(d)+this.b-this.t);}if(this.r){Ei(this,bj);}this.r=false;}}catch(a){a=De(a);if(we(a,16)){a;ui(this,g,h);}else throw a;}}
function oj(a,b,c){wi(this,a,b,c);}
function pj(d,b,c){var a;a=d.h;kg(a,'position','absolute');kg(a,'left',b+'px');kg(a,'top',c+'px');}
function ri(){}
_=ri.prototype=new fr();_.yc=kj;_.zc=lj;_.Ac=mj;_.Bc=nj;_.Cc=oj;_.Ad=rw+'MouseDragGestureRecognizer';_.zd=25;_.a=0;_.b=0;_.c=0;_.d=null;_.e=null;_.f=null;_.g=true;_.h=false;_.i=true;_.j=null;_.k=null;_.l=true;_.m=false;_.n=0;_.o=0;_.p=0;_.q=0;_.r=true;_.s=0;_.t=0;var bj=null,jj=null;function lk(b,a){b.appendChild(a);}
function mk(a){return $doc.createElement(a);}
function nk(b,a){b.cancelBubble=a;}
function ok(a){return a.clientX;}
function pk(a){return a.clientY;}
function qk(a){switch(a.type){case 'blur':return 4096;case 'change':return 1024;case 'click':return 1;case 'dblclick':return 2;case 'focus':return 2048;case 'keydown':return 128;case 'keypress':return 256;case 'keyup':return 512;case 'load':return 32768;case 'losecapture':return 8192;case 'mousedown':return 4;case 'mousemove':return 64;case 'mouseout':return 32;case 'mouseover':return 16;case 'mouseup':return 8;case 'scroll':return 16384;case 'error':return 65536;case 'mousewheel':return 131072;case 'DOMMouseScroll':return 131072;}}
function rk(b){var a=$doc.getElementById(b);return a||null;}
function tk(a,b){var c=a[b];return c==null?null:String(c);}
function sk(a,c){var b=parseInt(a[c]);if(!b){return 0;}return b;}
function uk(a){return a.__eventBits||0;}
function vk(b,a){b.removeChild(a);}
function xk(a,b,c){a[b]=c;}
function wk(a,b,c){a[b]=c;}
function yk(a,b){a.__listener=b;}
function zk(a,b){a.src=b;}
function Ak(a,b){while(a.firstChild){a.removeChild(a.firstChild);}if(b!=null){a.appendChild($doc.createTextNode(b));}}
function Bk(b,a,c){b.style[a]=c;}
function sj(){}
_=sj.prototype=new fr();_.bb=lk;_.fb=mk;_.jb=nk;_.kb=ok;_.lb=pk;_.ob=qk;_.sb=rk;_.ub=tk;_.tb=sk;_.vb=uk;_.cd=vk;_.md=xk;_.ld=wk;_.nd=yk;_.od=zk;_.pd=Ak;_.qd=Bk;_.Ad=sw+'DOMImpl';_.zd=0;function ck(a){return a.relatedTarget?a.relatedTarget:null;}
function dk(a){return a.relatedTarget||null;}
function ek(a){a.preventDefault();}
function fk(a){var b=a.parentNode;if(b==null){return null;}if(b.nodeType!=1)b=null;return b||null;}
function gk(){$wnd.__dispatchCapturedMouseEvent=function(b){if($wnd.__dispatchCapturedEvent(b)){var a=$wnd.__captureElem;if(a&&a.__listener){nf(b,a,a.__listener);b.stopPropagation();}}};$wnd.__dispatchCapturedEvent=function(a){if(!Ff(a)){a.stopPropagation();a.preventDefault();return false;}return true;};$wnd.addEventListener('click',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('dblclick',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousedown',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mouseup',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousemove',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousewheel',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('keydown',$wnd.__dispatchCapturedEvent,true);$wnd.addEventListener('keyup',$wnd.__dispatchCapturedEvent,true);$wnd.addEventListener('keypress',$wnd.__dispatchCapturedEvent,true);$wnd.__dispatchEvent=function(a){if(this.__listener)nf(a,this,this.__listener);};$wnd.__captureElem=null;}
function hk(e,f,d){var c=0,b=e.firstChild,a=null;while(b){if(b.nodeType==1){if(c==d){a=b;break;}++c;}b=b.nextSibling;}e.insertBefore(f,a);}
function ik(a){$wnd.__captureElem=a;}
function jk(b,a){b.__eventBits=a;b.onclick=a&1?$wnd.__dispatchEvent:null;b.ondblclick=a&2?$wnd.__dispatchEvent:null;b.onmousedown=a&4?$wnd.__dispatchEvent:null;b.onmouseup=a&8?$wnd.__dispatchEvent:null;b.onmouseover=a&16?$wnd.__dispatchEvent:null;b.onmouseout=a&32?$wnd.__dispatchEvent:null;b.onmousemove=a&64?$wnd.__dispatchEvent:null;b.onkeydown=a&128?$wnd.__dispatchEvent:null;b.onkeypress=a&256?$wnd.__dispatchEvent:null;b.onkeyup=a&512?$wnd.__dispatchEvent:null;b.onchange=a&1024?$wnd.__dispatchEvent:null;b.onfocus=a&2048?$wnd.__dispatchEvent:null;b.onblur=a&4096?$wnd.__dispatchEvent:null;b.onlosecapture=a&8192?$wnd.__dispatchEvent:null;b.onscroll=a&16384?$wnd.__dispatchEvent:null;b.onload=a&32768?$wnd.__dispatchEvent:null;b.onerror=a&65536?$wnd.__dispatchEvent:null;b.onmousewheel=a&131072?$wnd.__dispatchEvent:null;}
function ak(){}
_=ak.prototype=new sj();_.mb=ck;_.nb=dk;_.pb=ek;_.xb=fk;_.cc=gk;_.dc=hk;_.kd=ik;_.sd=jk;_.Ad=sw+'DOMImplStandard';_.zd=0;function vj(a){gk.call(a);a.bc();}
function wj(c,b,a){jk.call(c,b,a);c.rd(b,a);}
function xj(a,b){if(!a&& !b){return true;}else if(!a|| !b){return false;}return a.isSameNode(b);}
function yj(a){return a.getBoundingClientRect().x-$doc.documentElement.getBoundingClientRect().x}
function zj(a){return a.getBoundingClientRect().y-$doc.documentElement.getBoundingClientRect().y}
function Bj(){vj(this);}
function Aj(){$wnd.addEventListener('mouseout',function(b){var a=$wnd.__captureElem;if(a&& !b.relatedTarget){if('html'==b.target.tagName.toLowerCase()){var c=$doc.createEvent('MouseEvents');c.initMouseEvent('mouseup',true,true,$wnd,0,b.screenX,b.screenY,b.clientX,b.clientY,b.ctrlKey,b.altKey,b.shiftKey,b.metaKey,b.button,null);a.dispatchEvent(c);}}},true);$wnd.addEventListener('DOMMouseScroll',$wnd.__dispatchCapturedMouseEvent,true);}
function Cj(c,b){while(b){if(c.isSameNode(b)){return true;}try{b=b.parentNode;}catch(a){return false;}if(b&&b.nodeType!=1){b=null;}}return false;}
function Dj(a){if(a.isSameNode($wnd.__captureElem)){$wnd.__captureElem=null;}}
function Fj(b,a){wj(this,b,a);}
function Ej(b,a){if(a&131072){b.addEventListener('DOMMouseScroll',$wnd.__dispatchEvent,false);}}
function tj(){}
_=tj.prototype=new ak();_.cb=xj;_.qb=yj;_.rb=zj;_.cc=Bj;_.bc=Aj;_.ec=Cj;_.bd=Dj;_.sd=Fj;_.rd=Ej;_.Ad=sw+'DOMImplMozilla';_.zd=0;function Bo(a){return yf(a.h,'offsetHeight');}
function Co(a){return yf(a.h,'offsetWidth');}
function Do(c){var a,b;a=fp(c.h);b=a.Db(32);if(b>=0){return a.vd(0,b);}return a;}
function Eo(b,a){if(b.h!==null){b.id(b.h,a);}b.h=a;}
function Fo(b,a){kg(b.h,'height',a);}
function ap(b,c,a){if(c>=0){dp(b,c+'px');}if(a>=0){Fo(b,a+'px');}}
function bp(b,a){hp(b.h,a);}
function cp(a,b){ip(a.h,b);}
function dp(a,b){kg(a.h,'width',b);}
function ep(b,a){lg(b.h,a|Af(b.h));}
function fp(b){var a;a=zf(b,'className').wd();if(or('',a)){a='gwt-nostyle';gg(b,'className',a);}return a;}
function gp(b,a){var c=b.parentNode;if(!c){return;}c.insertBefore(a,b);c.removeChild(b);}
function hp(a,b){if(a===null){throw kr(new jr(),'Null widget handle. If you are creating a composite, ensure that initWidget() has been called.');}b=b.wd();if(b.hc()==0){throw xq(new wq(),'Style names cannot be empty');}fp(a);jp(a,b);}
function ip(a,b){a.style.display=b?'':'none';}
function jp(c,f){var a=c.className;var h=a.indexOf(' ');if(h>=0){var g=a.substring(0,h);var e='',b=0;while(true){var d=a.indexOf(g,b);if(d== -1){e+=a.substring(b);break;}e+=a.substring(b,d);e+=f;b=d+g.length;}c.className=e;}else{c.className=f;}}
function zo(){}
_=zo.prototype=new fr();_.id=gp;_.Ad=tw+'UIObject';_.zd=0;_.h=null;function dq(a){if(a.f){throw Aq(new zq(),"Should only call onAttach when the widget is detached from the browser's document");}a.f=true;hg(a.h,a);}
function eq(a){if(!a.f){throw Aq(new zq(),"Should only call onDetach when the widget is attached to the browser's document");}{a.f=false;hg(a.h,null);}}
function fq(a){if(a.g!==null){a.g.gd(a);}else if(a.g!==null){throw Aq(new zq(),"This widget's parent does not implement HasWidgets");}}
function gq(b,a){if(b.f){hg(b.h,null);}Eo(b,a);if(b.f){hg(a,b);}}
function hq(c,b){var a;a=c.g;c.g=b;if(b===null){if(a!==null&&a.f){c.lc();}}else if(b.f){c.jc();}}
function iq(){dq(this);}
function jq(a){}
function kq(){eq(this);}
function sp(){}
_=sp.prototype=new zo();_.jc=iq;_.kc=jq;_.lc=kq;_.Ad=tw+'Widget';_.zd=26;_.f=false;_.g=null;function kn(b,c,a){fq(c);if(a!==null){df(a,c.h);}hq(c,b);}
function mn(b,c){var a;if(c.g!==b){throw xq(new wq(),'w is not a child of this panel');}a=c.h;hq(c,null);bg(Bf(a),a);}
function nn(c){var a,b;dq(c);for(b=c.fc();b.Bb();){a=ve(b.ic(),18);a.jc();}}
function on(c){var a,b;eq(c);for(b=c.fc();b.Bb();){a=ve(b.ic(),18);a.lc();}}
function pn(a){mn(this,a);}
function qn(){nn(this);}
function rn(){on(this);}
function jn(){}
_=jn.prototype=new sp();_.gb=pn;_.jc=qn;_.lc=rn;_.Ad=tw+'Panel';_.zd=27;function ll(a){a.e=Ap(new tp(),a);}
function ml(a){ll(a);return a;}
function nl(b,c,a){return ql(b,c,a,b.e.c);}
function pl(b,a){return Dp(b.e,a);}
function ql(d,e,b,a){var c;if(a<0||a>d.e.c){throw new Cq();}c=pl(d,e);if(c==(-1)){fq(e);}else{d.gd(e);if(c<a){a--;}}kn(d,e,b);Ep(d.e,e,a);return a;}
function rl(a,b){if(!Cp(a.e,b)){return false;}a.gb(b);bq(a.e,b);return true;}
function sl(){return Fp(this.e);}
function tl(a){return rl(this,a);}
function kl(){}
_=kl.prototype=new jn();_.fc=sl;_.gd=tl;_.Ad=tw+'ComplexPanel';_.zd=28;function Dk(a){ml(a);gq(a,ff());kg(a.h,'position','relative');kg(a.h,'overflow','hidden');return a;}
function Ek(a,b){nl(a,b,a.h);}
function Fk(b,d,a,c){fq(d);bl(b,d,a,c);Ek(b,d);}
function bl(c,e,b,d){var a;a=e.h;if(b==(-1)&&d==(-1)){cl(a);}else{kg(a,'position','absolute');kg(a,'left',b+'px');kg(a,'top',d+'px');}}
function cl(a){kg(a,'left','');kg(a,'top','');kg(a,'position','static');}
function dl(a){mn(this,a);cl(a.h);}
function Ck(){}
_=Ck.prototype=new kl();_.gb=dl;_.Ad=tw+'AbsolutePanel';_.zd=29;function fl(a){ml(a);a.d=lf();a.c=hf();df(a.d,a.c);gq(a,a.d);return a;}
function hl(a,b){if(b.g!==a){return null;}return Bf(b.h);}
function il(c,d,a){var b;b=hl(c,d);if(b!==null){gg(b,'align',a.a);}}
function jl(c,d,a){var b;b=hl(c,d);if(b!==null){kg(b,'verticalAlign',a.a);}}
function el(){}
_=el.prototype=new kl();_.Ad=tw+'CellPanel';_.zd=30;_.c=null;_.d=null;function yl(){yl=lw;zl=wl(new vl(),'center');Al=wl(new vl(),'left');wl(new vl(),'right');}
var zl,Al;function wl(b,a){b.a=a;return b;}
function vl(){}
_=vl.prototype=new fr();_.Ad=tw+'HasHorizontalAlignment$HorizontalAlignmentConstant';_.zd=0;_.a=null;function Fl(){Fl=lw;Dl(new Cl(),'bottom');Dl(new Cl(),'middle');am=Dl(new Cl(),'top');}
var am;function Dl(a,b){a.a=b;return a;}
function Cl(){}
_=Cl.prototype=new fr();_.Ad=tw+'HasVerticalAlignment$VerticalAlignmentConstant';_.zd=0;_.a=null;function mm(){mm=lw;hv(new mu());}
function lm(a,b){mm();im(new gm(),a,b);bp(a,'gwt-Image');return a;}
function nm(a){if(this.a===null){this.a=xh(new wh());}yh(this.a,a,this);}
function om(a){if(this.b===null){this.b=ji(new ii());}ki(this.b,a,this);}
function pm(a){if(this.c===null){this.c=Fm(new Em());}xt(this.c,a);}
function qm(a){switch(tf(a)){case 1:{break;}case 4:case 8:case 64:case 16:case 32:{if(this.c!==null){dn(this.c,this,a);}break;}case 131072:break;case 32768:{break;}case 65536:{break;}}}
function dm(){}
_=dm.prototype=new sp();_.C=nm;_.D=om;_.E=pm;_.kc=qm;_.Ad=tw+'Image';_.zd=31;_.a=null;_.b=null;_.c=null;function em(){}
_=em.prototype=new fr();_.Ad=tw+'Image$State';_.zd=0;function hm(b,a){gq(a,gf());ep(a,229501);return b;}
function im(b,a,c){hm(b,a);km(b,a,c);return b;}
function km(b,a,c){ig(a.h,c);}
function gm(){}
_=gm.prototype=new em();_.Ad=tw+'Image$UnclippedState';_.zd=0;function tm(a){gq(a,ff());ep(a,131197);bp(a,'gwt-Label');return a;}
function um(b,a){tm(b);zm(b,a);return b;}
function vm(b,a){if(b.a===null){b.a=xh(new wh());}yh(b.a,a,b);}
function wm(b,a){if(b.b===null){b.b=ji(new ii());}ki(b.b,a,b);}
function ym(b,a){kg(b.h,'textAlign',a.a);}
function zm(b,a){jg(b.h,a);}
function Am(a){vm(this,a);}
function Bm(a){wm(this,a);}
function Cm(a){if(this.c===null){this.c=Fm(new Em());}xt(this.c,a);}
function Dm(a){switch(tf(a)){case 1:break;case 4:case 8:case 64:case 16:case 32:if(this.c!==null){dn(this.c,this,a);}break;case 131072:break;}}
function sm(){}
_=sm.prototype=new sp();_.C=Am;_.D=Bm;_.E=Cm;_.kc=Dm;_.Ad=tw+'Label';_.zd=32;_.a=null;_.b=null;_.c=null;function wt(a){a.ac();return a;}
function xt(b,a){b.F(b.td(),a);return true;}
function zt(b,a){return At(b,a)!=(-1);}
function At(b,a){return b.Eb(a,0);}
function Bt(c,a){var b;b=c.zb(a);c.dd(a,a+1);return b;}
function Ct(c,d){var a=this.a;var b=this.b;var e=this.c;if(c+e==b){a[b]=d;this.b++;return;}if(c==0){a[--this.c]=d;return;}this.xd(c);a.splice(c+e,0,d);this.b++;}
function Dt(a){return xt(this,a);}
function Et(a){return zt(this,a);}
function Ft(a,b){return a===null?b===null:a.ib(b);}
function au(a){this.yd(a);var b=this.c;return this.a[a+b];}
function bu(e,d){var a=this.a;var f=this.c;var c=d+f;var b=this.b;while(c<b){if(Ft(a[c],e)){return c-f;}++c;}return -1;}
function cu(a){throw Dq(new Cq(),'Size: '+this.td()+' Index: '+a);}
function du(){this.a=new Array();var a=1000000000;this.c=a;this.b=a;}
function fu(a){return Bt(this,a);}
function gu(b){var a;a=At(this,b);if(a==(-1)){return false;}Bt(this,a);return true;}
function eu(c,g){this.xd(c);this.xd(g);var a=this.a;var f=this.c;var b=this.b;if(c==0){for(var d=f;d<g+f;d++){delete a[d];}this.c+=g-c;}else if(g+f==b){for(var d=c+f;d<b;d++){delete a[d];}this.b=c+f;}else{var e=g-c;a.splice(c+f,e);this.b-=e;}}
function hu(){return this.b-this.c;}
function ju(b){var a=this.b;var c=this.c;if(b<0||b+c>=a){this.Fb(b);}}
function iu(b){var a=this.b;var c=this.c;if(b<0||b+c>a){this.Fb(b);}}
function vt(){}
_=vt.prototype=new js();_.F=Ct;_.ab=Dt;_.eb=Et;_.zb=au;_.Eb=bu;_.Fb=cu;_.ac=du;_.fd=fu;_.hd=gu;_.dd=eu;_.td=hu;_.yd=ju;_.xd=iu;_.Ad=vw+'ArrayList';_.zd=33;_.a=null;_.b=0;_.c=0;function Fm(a){wt(a);return a;}
function bn(d,c,e,f){var a,b;for(a=d.fc();a.Bb();){b=ve(a.ic(),17);b.yc(c,e,f);}}
function cn(d,c){var a,b;for(a=d.fc();a.Bb();){b=ve(a.ic(),17);b.zc(c);}}
function dn(e,c,a){var b,d,f,g,h;d=c.h;g=pf(a)-vf(c.h)+yf(d,'scrollLeft')+gh();h=qf(a)-wf(c.h)+yf(d,'scrollTop')+hh();switch(tf(a)){case 4:bn(e,c,g,h);break;case 8:gn(e,c,g,h);break;case 64:fn(e,c,g,h);break;case 16:b=rf(a);if(!Ef(c.h,b)){cn(e,c);}break;case 32:f=sf(a);if(!Ef(c.h,f)){en(e,c);}break;}}
function en(d,c){var a,b;for(a=d.fc();a.Bb();){b=ve(a.ic(),17);b.Ac(c);}}
function fn(d,c,e,f){var a,b;for(a=d.fc();a.Bb();){b=ve(a.ic(),17);b.Bc(c,e,f);}}
function gn(d,c,e,f){var a,b;for(a=d.fc();a.Bb();){b=ve(a.ic(),17);b.Cc(c,e,f);}}
function Em(){}
_=Em.prototype=new vt();_.Ad=tw+'MouseListenerCollection';_.zd=34;function yn(){yn=lw;Dn=hv(new mu());}
function xn(b,a){yn();Dk(b);if(a===null){a=zn();}gq(b,a);nn(b);return b;}
function An(){yn();return Bn(null);}
function Bn(c){yn();var a,b;b=ve(Dn.Ab(c),4);if(b!==null){return b;}a=null;if(c!==null){if(null===(a=xf(c))){return null;}}if(Dn.a==0){Cn();}Dn.Fc(c,b=xn(new sn(),a));return b;}
function zn(){yn();return $doc.body;}
function Cn(){yn();bh(new tn());}
function sn(){}
_=sn.prototype=new Ck();_.Ad=tw+'RootPanel';_.zd=35;var Dn;function vn(){var a,b;for(b=kv((yn(),Dn)).fc();b.Bb();){a=ve(b.ic(),4);if(a.f){on(a);}}}
function wn(){return null;}
function tn(){}
_=tn.prototype=new fr();_.Dc=vn;_.Ec=wn;_.Ad=tw+'RootPanel$1';_.zd=36;function no(a){oo(a,ff());return a;}
function oo(b,a){gq(b,a);return b;}
function qo(a,b){if(a.a===b){a.gb(b);a.a=null;return true;}return false;}
function ro(a,b){if(a.a!==null){a.gb(a.a);}if(b!==null){kn(a,b,a.h);}a.a=b;}
function so(){return io(new go(),this);}
function to(a){return qo(this,a);}
function fo(){}
_=fo.prototype=new jn();_.fc=so;_.gd=to;_.Ad=tw+'SimplePanel';_.zd=37;_.a=null;function Fn(a){no(a);co(a,false);ep(a,16384);return a;}
function ao(b,a){Fn(b);ro(b,a);return b;}
function co(b,a){kg(b.h,'overflow',a?'scroll':'auto');}
function eo(a){tf(a)==16384;}
function En(){}
_=En.prototype=new fo();_.kc=eo;_.Ad=tw+'ScrollPanel';_.zd=38;function ho(a){a.a=a.c.a!==null;}
function io(b,a){b.c=a;ho(b);return b;}
function ko(){return this.a;}
function lo(){if(!this.a||this.c.a===null){throw new zv();}this.a=false;return this.b=this.c.a;}
function mo(){if(this.b!==null){qo(this.c,this.b);}}
function go(){}
_=go.prototype=new fr();_.Bb=ko;_.ic=lo;_.ed=mo;_.Ad=tw+'SimplePanel$1';_.zd=0;_.b=null;function lp(a){a.a=(yl(),Al);a.b=(Fl(),am);}
function mp(a){fl(a);lp(a);gg(a.d,'cellSpacing','0');gg(a.d,'cellPadding','0');return a;}
function np(a,b){pp(a,b,a.e.c);}
function pp(c,e,a){var b,d;d=kf();b=jf();a=ql(c,e,b,a);df(d,b);Df(c.c,d,a);il(c,e,c.a);jl(c,e,c.b);}
function qp(b,a){b.a=a;}
function rp(c){var a,b;if(c.g!==this){return false;}a=Bf(c.h);b=Bf(a);bg(this.c,b);rl(this,c);return true;}
function kp(){}
_=kp.prototype=new el();_.gd=rp;_.Ad=tw+'VerticalPanel';_.zd=39;function Ap(b,a){b.b=a;b.a=qe('[Lcom.google.gwt.user.client.ui.Widget;',[0],[18],[4],null);return b;}
function Cp(a,b){return Dp(a,b)!=(-1);}
function Dp(b,c){var a;for(a=0;a<b.c;++a){if(b.a[a]===c){return a;}}return (-1);}
function Ep(d,e,a){var b,c;if(a<0||a>d.c){throw new Cq();}if(d.c==d.a.a){c=qe('[Lcom.google.gwt.user.client.ui.Widget;',[0],[18],[d.a.a*2],null);for(b=0;b<d.a.a;++b){re(c,b,d.a[b]);}d.a=c;}++d.c;for(b=d.c-1;b>a;--b){re(d.a,b,d.a[b-1]);}re(d.a,a,e);}
function Fp(a){return vp(new up(),a);}
function aq(c,b){var a;if(b<0||b>=c.c){throw new Cq();}--c.c;for(a=b;a<c.c;++a){re(c.a,a,c.a[a+1]);}re(c.a,c.c,null);}
function bq(b,c){var a;a=Dp(b,c);if(a==(-1)){throw new zv();}aq(b,a);}
function tp(){}
_=tp.prototype=new fr();_.Ad=tw+'WidgetCollection';_.zd=0;_.a=null;_.b=null;_.c=0;function vp(b,a){b.b=a;return b;}
function xp(){return this.a<this.b.c-1;}
function yp(){if(this.a>=this.b.c){throw new zv();}return this.b.a[++this.a];}
function zp(){if(this.a<0||this.a>=this.b.c){throw new zq();}this.b.b.gd(this.b.a[this.a--]);}
function up(){}
_=up.prototype=new fr();_.Bb=xp;_.ic=yp;_.ed=zp;_.Ad=tw+'WidgetCollection$WidgetIterator';_.zd=0;_.a=(-1);function mq(){}
_=mq.prototype=new jr();_.Ad=uw+'ArrayStoreException';_.zd=40;function pq(){}
_=pq.prototype=new jr();_.Ad=uw+'ClassCastException';_.zd=41;function xq(b,a){kr(b,a);return b;}
function wq(){}
_=wq.prototype=new jr();_.Ad=uw+'IllegalArgumentException';_.zd=42;function Aq(b,a){kr(b,a);return b;}
function zq(){}
_=zq.prototype=new jr();_.Ad=uw+'IllegalStateException';_.zd=43;function Dq(b,a){kr(b,a);return b;}
function Cq(){}
_=Cq.prototype=new jr();_.Ad=uw+'IndexOutOfBoundsException';_.zd=44;function br(a,b){return a>b?a:b;}
function cr(a,b){return a<b?a:b;}
function dr(){}
_=dr.prototype=new jr();_.Ad=uw+'NegativeArraySizeException';_.zd=45;function nr(){nr=lw;{rr();}}
function or(b,a){if(!we(a,22))return false;return pr(b,a);}
function pr(a,b){nr();return a.toString()==b;}
function qr(d){nr();var a=tr[':'+d];if(a){return a;}a=0;var c=d.length;var b=c;while(--b>=0){a<<=1;a+=d.charCodeAt(b);}tr[':'+d]=a;return a;}
function rr(){nr();tr={};}
function sr(a){return or(this,a);}
function ur(){return qr(this);}
function vr(a){return this.indexOf(String.fromCharCode(a));}
function wr(){return this.length;}
function xr(a){return this.substr(a,this.length-a);}
function yr(a,b){return this.substr(a,b-a);}
function zr(){var a=this.replace(/^(\s*)/,'');var b=a.replace(/\s*$/,'');return b;}
_=String.prototype;_.ib=sr;_.Cb=ur;_.Db=vr;_.hc=wr;_.ud=xr;_.vd=yr;_.wd=zr;_.Ad=uw+'String';_.zd=46;var tr=null;function Cr(a){return Cd(a);}
function bs(b,a){kr(b,a);return b;}
function as(){}
_=as.prototype=new jr();_.Ad=uw+'UnsupportedOperationException';_.zd=47;function ls(b,a){b.c=a;return b;}
function ns(a){return a.a<a.c.td();}
function os(){return ns(this);}
function ps(){if(!ns(this)){throw new zv();}return this.c.zb(this.b=this.a++);}
function qs(){if(this.b<0){throw new zq();}this.c.fd(this.b);this.a=this.b;this.b=(-1);}
function ks(){}
_=ks.prototype=new fr();_.Bb=os;_.ic=ps;_.ed=qs;_.Ad=vw+'AbstractList$IteratorImpl';_.zd=0;_.a=0;_.b=(-1);function jt(f,d,e){var a,b,c;for(b=ru(f.hb());bv(b);){a=ve(cv(b),25);c=a.wb();if(d===null?c===null:d.ib(c)){if(e){dv(b);}return a;}}return null;}
function kt(b){var a;a=b.hb();return As(new zs(),b,a);}
function lt(a){return jt(this,a,false)!==null;}
function mt(d){var a,b,c,e,f,g,h;if(d===this){return true;}if(!we(d,24)){return false;}f=ve(d,24);c=kt(this);e=f.gc();if(!st(c,e)){return false;}for(a=Cs(c);dt(a);){b=et(a);h=this.Ab(b);g=f.Ab(b);if(h===null?g!==null:!h.ib(g)){return false;}}return true;}
function nt(b){var a;a=jt(this,b,false);return a===null?null:a.yb();}
function ot(){var a,b,c;b=0;for(c=ru(this.hb());bv(c);){a=ve(cv(c),25);b+=a.Cb();}return b;}
function pt(){return kt(this);}
function ys(){}
_=ys.prototype=new fr();_.db=lt;_.ib=mt;_.Ab=nt;_.Cb=ot;_.gc=pt;_.Ad=vw+'AbstractMap';_.zd=48;function st(e,b){var a,c,d;if(b===e){return true;}if(!we(b,26)){return false;}c=ve(b,26);if(c.td()!=e.td()){return false;}for(a=c.fc();a.Bb();){d=a.ic();if(!e.eb(d)){return false;}}return true;}
function tt(a){return st(this,a);}
function ut(){var a,b,c;a=0;for(b=this.fc();b.Bb();){c=b.ic();if(c!==null){a+=c.Cb();}}return a;}
function qt(){}
_=qt.prototype=new ds();_.ib=tt;_.Cb=ut;_.Ad=vw+'AbstractSet';_.zd=49;function As(b,a,c){b.a=a;b.b=c;return b;}
function Cs(b){var a;a=ru(b.b);return bt(new at(),b,a);}
function Ds(a){return this.a.db(a);}
function Es(){return Cs(this);}
function Fs(){return this.b.a.a;}
function zs(){}
_=zs.prototype=new qt();_.eb=Ds;_.fc=Es;_.td=Fs;_.Ad=vw+'AbstractMap$1';_.zd=50;function bt(b,a,c){b.a=c;return b;}
function dt(a){return a.a.Bb();}
function et(b){var a;a=ve(b.a.ic(),25);return a.wb();}
function ft(){return dt(this);}
function gt(){return et(this);}
function ht(){this.a.ed();}
function at(){}
_=at.prototype=new fr();_.Bb=ft;_.ic=gt;_.ed=ht;_.Ad=vw+'AbstractMap$2';_.zd=0;function hv(a){a.cc();return a;}
function iv(c,b,a){c.B(b,a,1);}
function kv(a){var b;b=wt(new vt());iv(a,b,a.b);return b;}
function lv(k,h,l){var b=0;var c=1;var a=2;var j=this.b;for(var f in h){var e=null;if(f=='null'||f.charAt(f.length-1)=='S'){var i=null;if(l!=c&&f!='null'){i=f.substring(0,f.length-1);}if(l==b){e=i;}else if(l==c){e=j[f];}else if(l==a){e=ov(i,j[f]);}k.ab(e);}else{var d=j[f];for(var g in d){if(l!=a){e=d[g][l];}else{e=ov(d[g][0],d[g][1]);}k.ab(e);}}}}
function mv(a){if(we(a,22)){return ve(a,22)+'S';}else if(a===null){return 'null';}else{return null;}}
function nv(b){var a=mv(b);if(a==null){var c=qv(this,b);return c!=null;}else{return this.b[a]!==undefined;}}
function ov(a,b){return xu(new wu(),a,b);}
function pv(){return ou(new nu(),this);}
function qv(h,f){var a=0;var g=h.b;var e=f.Cb();var c=g[e];if(c!=null){for(var d in c){var b=c[d];if(b[a].ib(f)){return [e,d];}}}return null;}
function rv(g){var a=0;var b=1;var f=mv(g);if(f!=null){var d=this.b[f];if(d===undefined){return null;}else{return d;}}else{f=g.Cb();}var c=this.b[f];if(c==null){return null;}for(var e in c){if(c[e][a].ib(g)){return c[e][b];}}return null;}
function sv(){this.b=[];}
function tv(f,h){var a=0;var b=1;var g=null;var e=mv(f);if(e!=null){g=this.b[e];this.b[e]=h;if(g===undefined){this.a++;return null;}else{return g;}}else{e=f.Cb();}var c=this.b[e];if(c==null){c=[];this.b[e]=c;}for(var d in c){if(c[d][a].ib(f)){g=c[d][b];c[d]=[f,h];return g;}}this.a++;c[c.length]=[f,h];return null;}
function uv(e){var a=1;var g=this.b;var d=mv(e);var h=null;if(d!=null){h=g[d];delete g[d];if(h!==undefined){this.a--;return h;}else{return null;}}var f=qv(this,e);if(f==null){return null;}this.a--;var b=f[0];var c=f[1];var h=g[b][c][a];g[b].splice(c,1);if(g[b].length>0){return h;}delete g[b];return h;}
function mu(){}
_=mu.prototype=new ys();_.B=lv;_.db=nv;_.hb=pv;_.Ab=rv;_.cc=sv;_.Fc=tv;_.hd=uv;_.Ad=vw+'HashMap';_.zd=51;_.a=0;_.b=null;function ou(b,a){b.a=a;return b;}
function qu(e,b){var a,c,d,f;a=ve(b,25);if(a!==null){d=a.wb();f=a.yb();if(f!==null||e.a.db(d)){c=e.a.Ab(d);if(f===null){return c===null;}else{return f.ib(c);}}}return false;}
function ru(a){return Fu(new Eu(),a.a);}
function su(a){return qu(this,a);}
function tu(){return ru(this);}
function uu(a){var b;if(qu(this,a)){b=ve(a,25).wb();this.a.hd(b);return true;}else{return false;}}
function vu(){return this.a.a;}
function nu(){}
_=nu.prototype=new qt();_.eb=su;_.fc=tu;_.hd=uu;_.td=vu;_.Ad=vw+'HashMap$1';_.zd=52;function xu(b,a,c){b.a=a;b.b=c;return b;}
function zu(c,a,b){if(a===b){return true;}else if(a===null){return false;}else{return a.ib(b);}}
function Au(a){var b;if(we(a,25)){b=ve(a,25);if(zu(this,this.a,b.wb())&&zu(this,this.b,b.yb())){return true;}}return false;}
function Bu(){return this.a;}
function Cu(){return this.b;}
function Du(){var a,b;a=0;b=0;if(this.a!==null){a=this.a.Cb();}if(this.b!==null){b=this.b.Cb();}return a^b;}
function wu(){}
_=wu.prototype=new fr();_.ib=Au;_.wb=Bu;_.yb=Cu;_.Cb=Du;_.Ad=vw+'HashMap$EntryImpl';_.zd=53;_.a=null;_.b=null;function Fu(d,c){var a,b;d.c=c;a=wt(new vt());d.c.B(a,d.c.b,2);b=a.fc();d.a=b;return d;}
function bv(a){return a.a.Bb();}
function cv(a){a.b=a.a.ic();return a.b;}
function dv(a){if(a.b===null){throw Aq(new zq(),'Must call next() before remove().');}else{a.a.ed();a.c.hd(ve(a.b,25).wb());}}
function ev(){return bv(this);}
function fv(){return cv(this);}
function gv(){dv(this);}
function Eu(){}
_=Eu.prototype=new fr();_.Bb=ev;_.ic=fv;_.ed=gv;_.Ad=vw+'HashMap$EntrySetImplIterator';_.zd=0;_.a=null;_.b=null;function zv(){}
_=zv.prototype=new jr();_.Ad=vw+'NoSuchElementException';_.zd=54;function lq(){hb(fb(new y()));}
function gwtOnLoad(b,d,c){$moduleName=d;$moduleBase=c;if(b)try{lq();}catch(a){b(d);}else{lq();}}
var ze=[{},{12:1,13:1},{13:1},{13:1},{13:1},{13:1},{13:1},{9:1},{12:1},{12:1},{12:1},{13:1},{13:1},{8:1},{8:1},{8:1},{8:1,16:1},{7:1},{7:1,10:1},{7:1},{11:1},{23:1},{23:1},{23:1},{6:1,23:1},{14:1,17:1},{18:1,19:1,20:1,21:1},{18:1,19:1,20:1,21:1},{18:1,19:1,20:1,21:1},{3:1,18:1,19:1,20:1,21:1},{18:1,19:1,20:1,21:1},{1:1,5:1,15:1,18:1,19:1,20:1,21:1},{1:1,5:1,15:1,18:1,19:1,20:1,21:1},{23:1},{23:1},{3:1,4:1,18:1,19:1,20:1,21:1},{11:1},{18:1,19:1,20:1,21:1},{18:1,19:1,20:1,21:1},{2:1,18:1,19:1,20:1,21:1},{8:1},{8:1},{8:1},{8:1},{8:1},{8:1},{22:1},{8:1},{24:1},{26:1},{26:1},{24:1},{26:1},{25:1},{8:1}];if (com_alex_gorisse_DragMove14) {  var __gwt_initHandlers = com_alex_gorisse_DragMove14.__gwt_initHandlers;  com_alex_gorisse_DragMove14.onScriptLoad(gwtOnLoad);}})();