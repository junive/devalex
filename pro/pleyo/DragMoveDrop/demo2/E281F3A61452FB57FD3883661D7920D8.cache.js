(function(){var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var _,ow='com.alex_gorisse.client.',pw='com.alex_gorisse.gwt.dragmovedrop.',qw='com.google.gwt.core.client.',rw='com.google.gwt.lang.',sw='com.google.gwt.user.client.',tw='com.google.gwt.user.client.dnd.',uw='com.google.gwt.user.client.impl.',vw='com.google.gwt.user.client.ui.',ww='java.lang.',xw='java.util.';function nw(){}
function jr(a){return this===a;}
function kr(){return Er(this);}
function hr(){}
_=hr.prototype={};_.kb=jr;_.Eb=kr;_.Cd=ww+'Object';_.Bd=0;function eb(a){a.g=op(new mp());a.h=op(new mp());a.b=wm(new um(),'Move this bar');a.c=wm(new um(),'Move this bar');}
function fb(a){eb(a);return a;}
function hb(x){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w;t=Fk(new Ek());cp(t,950,700);dp(t,'jeDragOver');j=wm(new um(),'Move this bar');fp(j,'950');Am(j,(Al(),Cl));kg(j.h,'background','#99cccc');n=Bb(new ub(),j);hc(n,t);x.d=Fk(new Ek());kg(x.d.h,'background','#ffffcc');cp(x.d,350,450);dp(x.d,'jeDragOver2');fp(x.b,'350');Am(x.b,(Al(),Cl));kg(x.b.h,'background','#99cccc');xm(x.b,x);o=Bb(new ub(),x.b);hc(o,x.d);Fb(o,true);u=Fk(new Ek());kg(u.h,'background','#00ccff');dp(u,'jeDragOver');cp(u,200,200);k=wm(new um(),'Move this bar');fp(k,'200');Am(k,(Al(),Cl));kg(k.h,'background','#99cccc');p=Bb(new ub(),k);hc(p,u);Fb(p,true);dp(x.g,'jeDragOver');w=co(new ao(),x.g);cp(w,180,200);e=cd(new zc(),x.g,new z());d=cd(new zc(),x.h,new B());md(e,w);hd(e,true);for(g=0;g<9;g++){l=wm(new um(),'Move me in or out');xm(l,x);ym(l,x);m=Bb(new ub(),l);if(g<3){dp(l,'DragBox4');fc(m,Cn(),true);}if(g>=3&&g<6){Bm(l,'I go into my grand pa');dp(l,'DragBox3');fc(m,x.d,true);Fb(m,true);fd(d,l);}if(g>=6){dp(l,'DragBox1');Bm(l,'I copy into my grand pa');a=wm(new um(),"I'm a copy ");f=Bb(new ub(),a);fc(f,x.d,true);dp(a,'DragBox1');bc(m,a,Cn(),0,0);fd(d,a);}dd(e,l);pp(x.g,l);}bl(u,k,0,0);bl(u,w,2,30);bl(x.d,x.b,0,0);bl(x.d,u,50,50);x.e=Fk(new Ek());kg(x.e.h,'background','#ffcc99');cp(x.e,200,370);dp(x.e,'jeDragOver');fp(x.c,'200');kg(x.c.h,'background','#99cccc');xm(x.c,x);q=Bb(new ub(),x.c);hc(q,x.e);Fb(q,true);cp(x.h,200,350);sp(x.h,(Al(),Bl));fd(d,x.c);fd(d,x.b);fd(d,k);fd(d,j);fd(e,x.c);fd(e,x.b);fd(e,k);fd(e,j);v=co(new ao(),x.h);cp(v,200,350);for(h=0;h<1;h++){r=op(new mp());b=cd(new zc(),r,new D());ld(b,true);for(i=0;i<6;i++){s=op(new mp());c=cd(new zc(),s,new F());md(c,v);jd(c,true);for(g=0;g<3;g++){l=wm(new um(),'Move me in or out '+g);xm(l,x);m=Bb(new ub(),l);if(i==0){dp(l,'DragBox4');fc(m,Cn(),true);}if(i==1){dp(l,'DragBox0');Bm(l,'I move and go back '+g);fc(m,Cn(),true);Eb(m,true);}if(i==2){dp(l,'DragBox1');Bm(l,'I copy and go back '+g);a=wm(new um(),"I'm a copy "+g);f=Bb(new ub(),a);fc(f,Cn(),true);dp(a,'DragBox1');bc(m,a,Cn(),0,0);Eb(m,true);}if(i==3){dp(l,'DragBox5');Bm(l,'I copy in a cat '+g);a=nm(new fm(),'cat.jpg');f=Bb(new ub(),a);fc(f,Cn(),true);dp(a,'noSpace');bc(m,a,Cn(),25,25);jc(f,15);ic(f,15);}if(i==4){dp(l,'DragBox3');xm(l,x);Bm(l,'I go into my grand pa '+g);fc(m,t,true);Fb(m,true);}if(i==5){dp(l,'DragBox2');Bm(l,'I copy in our out '+g);a=wm(new um(),"I'm a copy "+g);f=Bb(new ub(),a);fc(f,Cn(),true);dp(a,'DragBox2');bc(m,a,Cn(),0,0);}ym(l,x);dd(c,l);pp(s,l);}dd(b,s);pp(r,s);}dd(d,r);pp(x.h,r);}bl(x.e,x.c,0,0);bl(x.e,v,0,20);bl(t,j,0,0);bl(t,x.d,100,30);bl(t,x.e,500,30);bl(Dn('myDrag'),t,50,50);cf(new bb());}
function ib(a,b){}
function jb(a,b,c){}
function kb(a,b){}
function lb(a,b){}
function mb(a,b,c){}
function nb(a,b){}
function ob(b,c,d){var a;a=ej(b);this.a++;tb(a.d.h,this.a);}
function sb(a,b){dp(a,this.f);}
function pb(a,b){this.f=Fo(a);dp(a,'Over');}
function qb(a,b){dp(a,this.f);}
function rb(a,b){}
function tb(a,b){a.style.zIndex=b;}
function y(){}
_=y.prototype=new hr();_.oc=ib;_.pc=jb;_.qc=kb;_.rc=lb;_.sc=mb;_.tc=nb;_.uc=ob;_.yc=sb;_.vc=pb;_.wc=qb;_.xc=rb;_.Cd=ow+'DragMove14';_.Bd=1;_.a=0;_.d=null;_.e=null;_.f='';function hi(a,b){}
function ei(a,b){}
function fi(a,b){}
function gi(a,b){}
function ci(){}
_=ci.prototype=new hr();_.yc=hi;_.vc=ei;_.wc=fi;_.xc=gi;_.Cd=tw+'DropListenerAdapter';_.Bd=2;function z(){}
_=z.prototype=new ci();_.Cd=ow+'DragMove14$1';_.Bd=3;function B(){}
_=B.prototype=new ci();_.Cd=ow+'DragMove14$2';_.Bd=4;function D(){}
_=D.prototype=new ci();_.Cd=ow+'DragMove14$3';_.Bd=5;function F(){}
_=F.prototype=new ci();_.Cd=ow+'DragMove14$4';_.Bd=6;function db(a){if(tf(a)==4){uf(a);}return true;}
function bb(){}
_=bb.prototype=new hr();_.zc=db;_.Cd=ow+'DragMove14$5';_.Bd=7;function Ab(a){a.m=wb(new vb(),a);a.k=wm(new um(),'      ');}
function Bb(a,b){Ab(a);a.C=b;if(we(a.C,1)){ve(a.C,1).E(a);}a.n=ej(a.C);if(mc===null){mc=jv(new ou());}mc.bd(a.C,a);return a;}
function Cb(b,a){dc(b,ec(b));b.ld(b,ec(b).h,b.l,b.B,b.g,b.h,20,a);}
function Db(c,a,b){if(we(b,3)){al(ve(b,3),a);}else if(we(b,2)){rp(ve(b,2),a,c.d);}else if(we(b,4)){al(ve(b,4),a);}else{throw mr(new lr(),'Cannot insert into '+xd(b));}}
function Eb(b,a){b.a=a;}
function Fb(b,a){b.b=a;if(b.b){yi(b.n,false);}else{yi(b.n,true);}}
function cc(d,a,b,c){if(we(a,1)){d.p=a;ep(d.p,false);ve(d.p,1).E(d.m);d.q=d.n;d.n=ej(d.p);d.t=b;d.u=c;}}
function bc(e,b,a,c,d){e.j=a;cc(e,b,c,d);}
function dc(d,e){var a,b,c;b=null;a=e.h;if(d.j!==null){b=d.j;}else if(e.g!==null){b=e.g;}d.l=vf(a)-cj(a);d.B=wf(a)-dj(a);if(d.j!==Cn()&&b!==null){c=b.h;d.l-=vf(c)+cj(c);d.B-=wf(c)+dj(c);}}
function ec(a){return a.p!==null?a.p:a.C;}
function fc(c,b,a){c.c=a;c.o=b;}
function gc(d,b,c){var a;if(d.i&&we(c.g,2)){d.a=false;a=c.g;d.d=pc(c,a);kg(b.h,'position','static');Db(d,b,a);}}
function hc(a,b){zi(a.n,b);}
function ic(b,a){b.s=a;}
function jc(b,a){b.z=a;}
function kc(a,c,b){if(we(c,3)){al(ve(c,3),a);}else if(we(c,2)){rp(ve(c,2),a,b);}else if(we(c,4)){al(ve(c,4),a);}else{throw mr(new lr(),'Cannot insert into '+xd(c));}}
function lc(a){if(we(a,2)){return true;}else{return false;}}
function nc(b){if($doc.defaultView!=null){var c=$doc.defaultView.getComputedStyle(b,null);if(c!=null){var a=parseInt(c.getPropertyValue('border-bottom-width'));return a== -1?0:a;}}return 0;}
function oc(b){if($doc.defaultView!=null){var c=$doc.defaultView.getComputedStyle(b,null);if(c!=null){var a=parseInt(c.getPropertyValue('border-right-width'));return a== -1?0:a;}}return 0;}
function pc(a,b){if(we(b,2)){return rl(ve(b,2),a);}else{return (-1);}}
function qc(a,b){gc(this,a,b);if(this.A){ep(this.k,false);}}
function rc(a,b,c){if(this.a){Cb(this,false);}}
function sc(a,b){if(this.A){bp(this.k,fj(b.h)+'');gc(this,this.k,b);ep(this.k,true);}}
function tc(a,b){if(this.A){ep(this.k,false);}}
function uc(l,p,q){var a,b,c,d,e,f,g,h,i,j,k,m,n,o;if(this.v!=0){Bi(this.n,this.n.n+this.v);}if(this.w!=0){Ci(this.n,this.n.p-this.w);}if(this.z!=0){Di(this.n,this.n.q+this.z);}if(this.s!=0){Ai(this.n,this.n.c-this.s);}if(this.b){c=this.n.d.h;d=this.n.d.g.h;g=this.n.s-this.n.a;o=this.n.t-this.n.b;k=g+ij(d)-oc(d)-this.n.a;b=o+fj(d)-nc(d)-this.n.b;f=p+gj(c);j=k-ij(c);n=q+hj(c);a=b-fj(c);h=er(j,dr(g,f));i=er(a,dr(o,n));e=h+this.n.a-this.n.s;m=i+this.n.b-this.n.t;pj(this.n.d,e,m);}}
function vc(a,b){}
function wc(a,b,d){var c,e;dc(this,this.C);if(lc(this.C.g)){this.d=pc(this.C,this.C.g);}if(this.a){this.g=this.l;this.h=this.B;}if(this.c){this.e=this.l;this.f=this.B;this.r=this.C.g;this.j=this.o;dc(this,this.C);this.g=this.l;this.h=this.B;hq(this.C);pj(this.C,this.l,this.B);Db(this,this.C,this.j);}if(this.p!==null){ag(this.C.h);xi(this.q,null);wi(this.q,this.C,b,d);if(this.r===null){this.r=this.C.g;}Db(this,this.p,this.j);c=0;e=0;if(this.t!=0){c=b;}if(this.u!=0){e=d;}pj(this.p,this.l+(c-this.t),this.B+(e-this.u));ep(this.p,true);vi(this.n,this.p,b-(c-this.t),d-(e-this.u));eg(this.p.h);}}
function xc(){if(this.c){pj(this.C,this.e,this.f);this.j=null;if(lc(this.r)){kg(this.C.h,'position','static');}Db(this,this.C,this.r);}}
function yc(n,d,e,f,i,j,b,a){var g=(i-e)/b;var h=(j-f)/b;var k=e;var l=f;var c=0;function m(){k=k+g;l=l+h;d.style['left']=k;d.style['top']=l;if(c<b){setTimeout(m,1);c++;}else{d.style['left']=i;d.style['top']=j;if(a){d.style.display=false?'':'none';}n.cd();}}
m();}
function ub(){}
_=ub.prototype=new hr();_.oc=qc;_.pc=rc;_.qc=sc;_.rc=tc;_.sc=uc;_.tc=vc;_.uc=wc;_.cd=xc;_.ld=yc;_.Cd=pw+'DragSource';_.Bd=8;_.a=false;_.b=false;_.c=false;_.d=0;_.e=0;_.f=0;_.g=0;_.h=0;_.i=false;_.j=null;_.l=0;_.n=null;_.o=null;_.p=null;_.q=null;_.r=null;_.s=0;_.t=0;_.u=0;_.v=0;_.w=0;_.z=0;_.A=false;_.B=0;_.C=null;var mc=null;function ph(a,b){}
function qh(a,b,c){}
function rh(a,b){}
function sh(a,b){}
function th(a,b,c){}
function uh(a,b){}
function vh(a,b,c){}
function nh(){}
_=nh.prototype=new hr();_.oc=ph;_.pc=qh;_.qc=rh;_.rc=sh;_.sc=th;_.tc=uh;_.uc=vh;_.Cd=tw+'DragListenerAdapter';_.Bd=9;function wb(b,a){b.a=a;return b;}
function yb(a,b){gc(this.a,a,b);}
function zb(a,b,c){if(this.a.a){Cb(this.a,true);}}
function vb(){}
_=vb.prototype=new nh();_.oc=yb;_.pc=zb;_.Cd=pw+'DragSource$1';_.Bd=10;function ed(){ed=nw;pd=vm(new um());}
function bd(a){a.c=Bc(new Ac(),a);}
function cd(b,c,a){ed();bd(b);b.t=c;b.h=ji(new ii());ki(b.h,b,b.t);ki(b.h,a,b.t);if(od===null){od=jv(new ou());}od.bd(c,b.h);if(b.a===null){b.a=aw(new Fv());}return b;}
function dd(f,a){var b,c,d,e;f.e=true;if(we(a,5)){ve(a,5).F(f.c);}else if(od.fb(a)){ki(ve(od.Cb(a),6),f.c,a);}else{b=ji(new ii());ki(b,f.c,a);}if(f.d===null){f.d=aw(new Fv());}d=bj;for(e=ew(d);e.Db();){c=ve(e.kc(),6);if(c.a.kb(a)){bw(f.d,c);d.jd(c);break;}}}
function fd(b,a){bw(b.a,a);}
function hd(b,a){b.l=a;}
function gd(e,b,a){var c,d;d=b.g;if(e.l||e.m){if(lc(d)){c=pc(b,d);kg(a.h,'position','static');kc(a,d,c);}}}
function jd(b,a){b.m=a;}
function id(e,b,a){var c,d;d=b.g;if(e.m){hq(pd);if(lc(d)){c=pc(b,d);kg(pd.h,'position','static');bp(pd,Do(a)+'');fp(pd,Eo(a)+'');kc(pd,d,c);ep(pd,true);}}}
function kd(j,g,d){var a,b,c,e,f,h,i,k,l;h=g.h;l=wf(h);a=l+Do(g);f=vf(h);i=f+Eo(g);e=yf(d.h,'startLeft');k=yf(d.h,'startTop');c=er(a,dr(k,l));b=er(i,dr(e,f));if(c==a||c==l||b==f||b==i){return true;}else{return false;}}
function ld(b,a){b.k=true;}
function md(b,a){b.p=a;}
function nd(c){var a,b;for(b=ew(c.d);b.Db();){a=ve(b.kc(),6).a.h;fg(a,'startWidth',ij(a));fg(a,'startHeight',fj(a));fg(a,'startLeft',vf(a));fg(a,'startTop',wf(a));}}
function td(a,b){this.o=null;this.s=false;if(this.g!==null){if(aj(this.n,this.q,this.r,this.b,this.g)){mi(this.i,this.g,b);Ah(this.f,b,this.g);this.i=null;this.g=null;this.f=null;}}}
function qd(a,b){if(dw(this.a,b)){this.e=false;}else{this.e=true;}}
function rd(a,b){if(this.g!==null&&this.j){oi(this.i,this.g,b);Dh(this.f,b,this.g);this.g=null;this.i=null;this.j=false;}if(this.k){hq(pd);}this.o=null;this.s=false;this.f=null;}
function sd(d,e){var a,b,c;if(this.e){this.j=true;if(this.o===null){this.o=ej(e);this.f=this.o.f;}b=e;if(this.o.i){this.n=this.o.n;this.r=this.o.q;this.q=this.o.p;this.b=this.o.c;}if(this.g===null&&this.s){for(c=ew(this.d);c.Db();){this.i=ve(c.kc(),6);a=this.i.a;if(aj(this.n,this.q,this.r,this.b,a)&&b!==a){this.g=a;if(this.g!==null&&this.p!==null&&kd(this,this.p,this.g)){this.g=null;if(this.m){hq(pd);}}if(this.g!==null){ni(this.i,this.g,b);Ch(this.f,b,this.g);}break;}}}if(this.g!==null){if(aj(this.n,this.q,this.r,this.b,this.g)){pi(this.i,this.g,b);Fh(this.f,b,this.g);}else{oi(this.i,this.g,b);Dh(this.f,b,this.g);this.j=false;this.g=null;}}if(!this.s){nd(this);}this.s=this.o.m;}}
function zc(){}
_=zc.prototype=new hr();_.yc=td;_.vc=qd;_.wc=rd;_.xc=sd;_.Cd=pw+'DropTarget';_.Bd=11;_.a=null;_.b=0;_.d=null;_.e=false;_.f=null;_.g=null;_.h=null;_.i=null;_.j=false;_.k=false;_.l=false;_.m=false;_.n=0;_.o=null;_.p=null;_.q=0;_.r=0;_.s=false;_.t=null;var od=null,pd;function Bc(b,a){b.a=a;return b;}
function ad(a,b){gd(this.a,a,b);if(this.a.m){hq((ed(),pd));}}
function Dc(a,b){id(this.a,a,b);}
function Ec(a,b){}
function Fc(a,b){}
function Ac(){}
_=Ac.prototype=new hr();_.yc=ad;_.vc=Dc;_.wc=Ec;_.xc=Fc;_.Cd=pw+'DropTarget$1';_.Bd=12;function xd(a){return a==null?null:a.Cd;}
var yd=null;function Bd(a){return a==null?0:a.$H?a.$H:(a.$H=Dd());}
function Cd(a){return a==null?0:a.$H?a.$H:(a.$H=Dd());}
function Dd(){return ++Ed;}
var Ed=0;function as(b,a){a;return b;}
function Fr(){}
_=Fr.prototype=new hr();_.Cd=ww+'Throwable';_.Bd=13;function wq(b,a){as(b,a);return b;}
function vq(){}
_=vq.prototype=new Fr();_.Cd=ww+'Exception';_.Bd=14;function mr(b,a){wq(b,a);return b;}
function lr(){}
_=lr.prototype=new vq();_.Cd=ww+'RuntimeException';_.Bd=15;function ae(c,b,a){mr(c,'JavaScript '+b+' exception: '+a);return c;}
function Fd(){}
_=Fd.prototype=new lr();_.Cd=qw+'JavaScriptException';_.Bd=16;function ee(b,a){if(!we(a,7)){return false;}return ge(b,ve(a,7));}
function fe(a){return Bd(a);}
function he(a){return ee(this,a);}
function ge(a,b){return a===b;}
function ie(){return fe(this);}
function ce(){}
_=ce.prototype=new hr();_.kb=he;_.Eb=ie;_.Cd=qw+'JavaScriptObject';_.Bd=17;function ke(c,a,d,b,e){c.a=a;c.b=b;c.Cd=e;c.Bd=d;return c;}
function me(a,b,c){return a[b]=c;}
function ne(b,a){return b[a];}
function oe(a){return a.length;}
function qe(e,d,c,b,a){return pe(e,d,c,b,0,oe(b),a);}
function pe(j,i,g,c,e,a,b){var d,f,h;if((f=ne(c,e))<0){throw new fr();}h=ke(new je(),f,ne(i,e),ne(g,e),j);++e;if(e<a){j=j.wd(1);for(d=0;d<f;++d){me(h,d,pe(j,i,g,c,e,a,b));}}else{for(d=0;d<f;++d){me(h,d,b);}}return h;}
function re(a,b,c){if(c!==null&&a.b!=0&& !we(c,a.b)){throw new oq();}return me(a,b,c);}
function je(){}
_=je.prototype=new hr();_.Cd=rw+'Array';_.Bd=0;function ue(b,a){if(!b)return false;return !(!ze[b][a]);}
function ve(b,a){if(b!=null)ue(b.Bd,a)||ye();return b;}
function we(b,a){if(b==null)return false;return ue(b.Bd,a);}
function ye(){throw new rq();}
function xe(a){if(a!==null){throw new rq();}return a;}
function Ae(b,d){_=d.prototype;if(b&& !(b.Bd>=_.Bd)){var c=b.toString;for(var a in _){b[a]=_[a];}b.toString=c;}return b;}
var ze;function De(a){if(we(a,8)){return a;}return ae(new Fd(),Fe(a),Ee(a));}
function Ee(a){return a.message;}
function Fe(a){return a.name;}
function bf(){bf=nw;dg=yt(new xt());{Cf=new uj();zj(Cf);}}
function cf(a){bf();zt(dg,a);}
function df(b,a){bf();Cf.db(b,a);}
function ef(a,b){bf();return Cf.eb(a,b);}
function ff(){bf();return Cf.hb('div');}
function gf(){bf();return Cf.hb('img');}
function hf(){bf();return Cf.hb('tbody');}
function jf(){bf();return Cf.hb('td');}
function kf(){bf();return Cf.hb('tr');}
function lf(){bf();return Cf.hb('table');}
function nf(b,a,d){bf();var c;c=yd;{mf(b,a,d);}}
function mf(b,a,c){bf();if(a===cg){if(tf(b)==8192){cg=null;}}c.mc(b);}
function of(b,a){bf();Cf.lb(b,a);}
function pf(a){bf();return Cf.mb(a);}
function qf(a){bf();return Cf.nb(a);}
function rf(a){bf();return Cf.ob(a);}
function sf(a){bf();return Cf.pb(a);}
function tf(a){bf();return Cf.qb(a);}
function uf(a){bf();Cf.rb(a);}
function vf(a){bf();return Cf.sb(a);}
function wf(a){bf();return Cf.tb(a);}
function xf(a){bf();return Cf.ub(a);}
function zf(a,b){bf();return Cf.wb(a,b);}
function yf(a,b){bf();return Cf.vb(a,b);}
function Af(a){bf();return Cf.xb(a);}
function Bf(a){bf();return Cf.zb(a);}
function Df(c,a,b){bf();Cf.fc(c,a,b);}
function Ef(b,a){bf();return Cf.gc(b,a);}
function Ff(a){bf();var b,c;c=true;if(dg.vd()>0){b=ve(dg.Bb(dg.vd()-1),9);if(!(c=b.zc(a))){of(a,true);uf(a);}}return c;}
function ag(a){bf();if(cg!==null&&ef(a,cg)){cg=null;}Cf.dd(a);}
function bg(b,a){bf();Cf.ed(b,a);}
function eg(a){bf();cg=a;Cf.md(a);}
function gg(a,b,c){bf();Cf.od(a,b,c);}
function fg(a,b,c){bf();Cf.nd(a,b,c);}
function hg(a,b){bf();Cf.pd(a,b);}
function ig(a,b){bf();Cf.qd(a,b);}
function jg(a,b){bf();Cf.rd(a,b);}
function kg(b,a,c){bf();Cf.sd(b,a,c);}
function lg(a,b){bf();Aj(Cf,a,b);}
var Cf=null,cg=null,dg;function og(a){if(we(a,10)){return ef(this,ve(a,10));}return ee(Ae(this,mg),a);}
function pg(){return fe(Ae(this,mg));}
function mg(){}
_=mg.prototype=new ce();_.kb=og;_.Eb=pg;_.Cd=sw+'Element';_.Bd=18;function ug(a){return ee(Ae(this,qg),a);}
function vg(){return fe(Ae(this,qg));}
function qg(){}
_=qg.prototype=new ce();_.kb=ug;_.Eb=vg;_.Cd=sw+'Event';_.Bd=19;function Bg(){Bg=nw;Dg=yt(new xt());{Cg();}}
function Cg(){Bg();bh(new xg());}
var Dg;function zg(){while((Bg(),Dg).vd()>0){xe((Bg(),Dg).Bb(0)).Ed();}}
function Ag(){return null;}
function xg(){}
_=xg.prototype=new hr();_.Fc=zg;_.ad=Ag;_.Cd=sw+'Timer$1';_.Bd=20;function ah(){ah=nw;ch=yt(new xt());mh=yt(new xt());{ih();}}
function bh(a){ah();zt(ch,a);}
function dh(){ah();var a,b;for(a=ch.hc();a.Db();){b=ve(a.kc(),11);b.Fc();}}
function eh(){ah();var a,b,c,d;d=null;for(a=ch.hc();a.Db();){b=ve(a.kc(),11);c=b.ad();{d=c;}}return d;}
function fh(){ah();var a,b;for(a=mh.hc();a.Db();){b=xe(a.kc());null.Ed();}}
function gh(){ah();return $doc.documentElement.scrollLeft||$doc.body.scrollLeft;}
function hh(){ah();return $doc.documentElement.scrollTop||$doc.body.scrollTop;}
function ih(){ah();__gwt_initHandlers(function(){lh();},function(){return kh();},function(){jh();$wnd.onresize=null;$wnd.onbeforeclose=null;$wnd.onclose=null;});}
function jh(){ah();var a;a=yd;{dh();}}
function kh(){ah();var a;a=yd;{return eh();}}
function lh(){ah();var a;a=yd;{fh();}}
var ch,mh;function gs(d,a,b){var c;while(a.Db()){c=a.kc();if(b===null?c===null:b.kb(c)){return a;}}return null;}
function is(a){throw ds(new cs(),'add');}
function js(b){var a;a=gs(this,this.hc(),b);return a!==null;}
function ks(b){var a;a=gs(this,this.hc(),b);if(a!==null){a.gd();return true;}else{return false;}}
function fs(){}
_=fs.prototype=new hr();_.cb=is;_.gb=js;_.jd=ks;_.Cd=xw+'AbstractCollection';_.Bd=0;function us(b,a){throw ds(new cs(),'add');}
function vs(a){this.bb(this.vd(),a);return true;}
function ws(e){var a,b,c,d,f;if(e===this){return true;}if(!we(e,23)){return false;}f=ve(e,23);if(this.vd()!=f.vd()){return false;}c=this.hc();d=f.hc();while(c.Db()){a=c.kc();b=d.kc();if(!(a===null?b===null:a.kb(b))){return false;}}return true;}
function xs(){var a,b,c,d;c=1;a=31;b=this.hc();while(b.Db()){d=b.kc();c=31*c+(d===null?0:d.Eb());}return c;}
function ys(){return ns(new ms(),this);}
function zs(a){throw ds(new cs(),'remove');}
function ls(){}
_=ls.prototype=new fs();_.bb=us;_.cb=vs;_.kb=ws;_.Eb=xs;_.hc=ys;_.hd=zs;_.Cd=xw+'AbstractList';_.Bd=21;function aw(a){a.b=yt(new xt());return a;}
function bw(b,a){return zt(b.b,a);}
function dw(b,a){return Bt(b.b,a);}
function ew(a){return a.b.hc();}
function fw(a){return a.b.vd();}
function gw(a,b){this.b.bb(a,b);}
function hw(a){return bw(this,a);}
function iw(a){return dw(this,a);}
function jw(a){return this.b.Bb(a);}
function kw(){return ew(this);}
function lw(a){return Dt(this.b,a);}
function mw(){return fw(this);}
function Fv(){}
_=Fv.prototype=new ls();_.bb=gw;_.cb=hw;_.gb=iw;_.Bb=jw;_.hc=kw;_.hd=lw;_.vd=mw;_.Cd=xw+'Vector';_.Bd=22;_.b=null;function xh(a){aw(a);return a;}
function yh(b,a,c){if(b.a===null&&a!==null){b.a=si(new ri(),b,c);}if(a!==null){bw(b,a);}}
function Ah(e,c,d){var a,b;for(a=ew(e);a.Db();){b=ve(a.kc(),12);b.oc(c,d);}}
function Bh(d,c,e,f){var a,b;for(a=ew(d);a.Db();){b=ve(a.kc(),12);b.pc(c,e,f);}}
function Ch(e,c,d){var a,b;for(a=ew(e);a.Db();){b=ve(a.kc(),12);b.qc(c,d);}}
function Dh(e,c,d){var a,b;for(a=ew(e);a.Db();){b=ve(a.kc(),12);b.rc(c,d);}}
function Eh(d,c,e,f){var a,b;for(a=ew(d);a.Db();){b=ve(a.kc(),12);b.sc(c,e,f);}}
function Fh(e,c,d){var a,b;for(a=ew(e);a.Db();){b=ve(a.kc(),12);b.tc(c,d);}}
function ai(d,c,e,f){var a,b;for(a=ew(d);a.Db();){b=ve(a.kc(),12);b.uc(c,e,f);}}
function wh(){}
_=wh.prototype=new Fv();_.Cd=tw+'DragListenerCollection';_.Bd=23;_.a=null;function ji(a){aw(a);return a;}
function ki(b,a,c){if(a!==null){b.a=c;if(fw(b)==0){Fi(b);}bw(b,a);}}
function mi(e,c,d){var a,b;for(a=ew(e);a.Db();){b=ve(a.kc(),13);b.yc(c,d);}}
function ni(e,c,d){var a,b;for(a=ew(e);a.Db();){b=ve(a.kc(),13);b.vc(c,d);}}
function oi(e,c,d){var a,b;for(a=ew(e);a.Db();){b=ve(a.kc(),13);b.wc(c,d);}}
function pi(e,c,d){var a,b;for(a=ew(e);a.Db();){b=ve(a.kc(),13);b.xc(c,d);}}
function ii(){}
_=ii.prototype=new Fv();_.Cd=tw+'DropListenerCollection';_.Bd=24;_.a=null;function si(c,b,a){c.f=b;if(we(a,15)){ve(a,15).ab(c);if(jj===null){jj=jv(new ou());}jj.bd(a,c);}if(bj===null){bj=aw(new Fv());}return c;}
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
function Ei(d,c){var a,b;for(b=ew(c);b.Db();){a=ve(b.kc(),6).a.h;fg(a,'startWidth',ij(a));fg(a,'startHeight',fj(a));fg(a,'startLeft',vf(a));fg(a,'startTop',wf(a));}}
function Fi(a){if(bj===null){bj=aw(new Fv());}bw(bj,a);}
function aj(b,c,f,a,g){var d,e,h;h=g.h;d=yf(h,'startLeft');e=yf(h,'startTop');return a>e&&f<e+yf(h,'startHeight')&&c>d&&b<d+yf(h,'startWidth');}
function cj(b){if(navigator.userAgent.indexOf('Opera')!= -1){return -b.clientLeft;}else if($doc.defaultView!=null&&navigator.userAgent.indexOf('Safari')== -1){var c=$doc.defaultView.getComputedStyle(b,null);if(c!=null){var a=parseInt(c.getPropertyValue('border-left-width'));return a== -1?0:a;}}return 0;}
function dj(b){if(navigator.userAgent.indexOf('Opera')!= -1){return -b.clientTop;}else if($doc.defaultView!=null&&navigator.userAgent.indexOf('Safari')== -1){var c=$doc.defaultView.getComputedStyle(b,null);if(c!=null){var a=parseInt(c.getPropertyValue('border-top-width'));return a== -1?0:a;}}return 0;}
function ej(a){if(jj!==null&&jj.fb(a)){return ve(jj.Cb(a),14);}else{return null;}}
function fj(a){return parseInt(a.offsetHeight);}
function gj(a){return parseInt(a.offsetLeft);}
function hj(a){return parseInt(a.offsetTop);}
function ij(a){return parseInt(a.offsetWidth);}
function kj(a,b,c){vi(this,a,b,c);}
function lj(a){}
function mj(a){}
function nj(f,g,h){var a,c,d,e;try{if(this.m&&this.d!==null&&this.e!==null){eg(this.e.h);d=this.d.h;if(this.i){this.n=vf(d)+this.o;this.q=wf(d)+this.o;this.p=this.n+ij(d)-this.o;this.c=this.q+fj(d)-this.o;}Eh(this.f,this.e,g,h);if(this.j===null&& !this.r){for(e=ew(bj);e.Db();){this.k=ve(e.kc(),6);c=this.k.a;if(aj(this.n,this.p,this.q,this.c,c)&&this.d!==c){this.h=true;this.j=c;if(this.j!==null){Ch(this.f,this.e,this.j);ni(this.k,this.j,this.e);}break;}}}if(this.j!==null&&this.h){if(aj(this.n,this.p,this.q,this.c,this.j)){Fh(this.f,this.e,this.j);pi(this.k,this.j,this.e);}else{Dh(this.f,this.e,this.j);oi(this.k,this.j,this.e);this.j=null;}}if(this.g){pj(this.d,g+gj(d)+this.a-this.s,h+hj(d)+this.b-this.t);}if(this.r){Ei(this,bj);}this.r=false;}}catch(a){a=De(a);if(we(a,16)){a;ui(this,g,h);}else throw a;}}
function oj(a,b,c){wi(this,a,b,c);}
function pj(d,b,c){var a;a=d.h;kg(a,'position','absolute');kg(a,'left',b+'px');kg(a,'top',c+'px');}
function ri(){}
_=ri.prototype=new hr();_.Ac=kj;_.Bc=lj;_.Cc=mj;_.Dc=nj;_.Ec=oj;_.Cd=tw+'MouseDragGestureRecognizer';_.Bd=25;_.a=0;_.b=0;_.c=0;_.d=null;_.e=null;_.f=null;_.g=true;_.h=false;_.i=true;_.j=null;_.k=null;_.l=true;_.m=false;_.n=0;_.o=0;_.p=0;_.q=0;_.r=true;_.s=0;_.t=0;var bj=null,jj=null;function nk(b,a){b.appendChild(a);}
function ok(a){return $doc.createElement(a);}
function pk(b,a){b.cancelBubble=a;}
function qk(a){return a.clientX;}
function rk(a){return a.clientY;}
function sk(a){switch(a.type){case 'blur':return 4096;case 'change':return 1024;case 'click':return 1;case 'dblclick':return 2;case 'focus':return 2048;case 'keydown':return 128;case 'keypress':return 256;case 'keyup':return 512;case 'load':return 32768;case 'losecapture':return 8192;case 'mousedown':return 4;case 'mousemove':return 64;case 'mouseout':return 32;case 'mouseover':return 16;case 'mouseup':return 8;case 'scroll':return 16384;case 'error':return 65536;case 'mousewheel':return 131072;case 'DOMMouseScroll':return 131072;}}
function tk(b){var a=$doc.getElementById(b);return a||null;}
function vk(a,b){var c=a[b];return c==null?null:String(c);}
function uk(a,c){var b=parseInt(a[c]);if(!b){return 0;}return b;}
function wk(a){return a.__eventBits||0;}
function xk(b,a){b.removeChild(a);}
function zk(a,b,c){a[b]=c;}
function yk(a,b,c){a[b]=c;}
function Ak(a,b){a.__listener=b;}
function Bk(a,b){a.src=b;}
function Ck(a,b){while(a.firstChild){a.removeChild(a.firstChild);}if(b!=null){a.appendChild($doc.createTextNode(b));}}
function Dk(b,a,c){b.style[a]=c;}
function sj(){}
_=sj.prototype=new hr();_.db=nk;_.hb=ok;_.lb=pk;_.mb=qk;_.nb=rk;_.qb=sk;_.ub=tk;_.wb=vk;_.vb=uk;_.xb=wk;_.ed=xk;_.od=zk;_.nd=yk;_.pd=Ak;_.qd=Bk;_.rd=Ck;_.sd=Dk;_.Cd=uw+'DOMImpl';_.Bd=0;function ek(a){return a.relatedTarget?a.relatedTarget:null;}
function fk(a){return a.relatedTarget||null;}
function gk(a){a.preventDefault();}
function hk(a){var b=a.parentNode;if(b==null){return null;}if(b.nodeType!=1)b=null;return b||null;}
function ik(){$wnd.__dispatchCapturedMouseEvent=function(b){if($wnd.__dispatchCapturedEvent(b)){var a=$wnd.__captureElem;if(a&&a.__listener){nf(b,a,a.__listener);b.stopPropagation();}}};$wnd.__dispatchCapturedEvent=function(a){if(!Ff(a)){a.stopPropagation();a.preventDefault();return false;}return true;};$wnd.addEventListener('click',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('dblclick',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousedown',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mouseup',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousemove',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('mousewheel',$wnd.__dispatchCapturedMouseEvent,true);$wnd.addEventListener('keydown',$wnd.__dispatchCapturedEvent,true);$wnd.addEventListener('keyup',$wnd.__dispatchCapturedEvent,true);$wnd.addEventListener('keypress',$wnd.__dispatchCapturedEvent,true);$wnd.__dispatchEvent=function(a){if(this.__listener)nf(a,this,this.__listener);};$wnd.__captureElem=null;}
function jk(e,f,d){var c=0,b=e.firstChild,a=null;while(b){if(b.nodeType==1){if(c==d){a=b;break;}++c;}b=b.nextSibling;}e.insertBefore(f,a);}
function kk(a){$wnd.__captureElem=a;}
function lk(b,a){b.__eventBits=a;b.onclick=a&1?$wnd.__dispatchEvent:null;b.ondblclick=a&2?$wnd.__dispatchEvent:null;b.onmousedown=a&4?$wnd.__dispatchEvent:null;b.onmouseup=a&8?$wnd.__dispatchEvent:null;b.onmouseover=a&16?$wnd.__dispatchEvent:null;b.onmouseout=a&32?$wnd.__dispatchEvent:null;b.onmousemove=a&64?$wnd.__dispatchEvent:null;b.onkeydown=a&128?$wnd.__dispatchEvent:null;b.onkeypress=a&256?$wnd.__dispatchEvent:null;b.onkeyup=a&512?$wnd.__dispatchEvent:null;b.onchange=a&1024?$wnd.__dispatchEvent:null;b.onfocus=a&2048?$wnd.__dispatchEvent:null;b.onblur=a&4096?$wnd.__dispatchEvent:null;b.onlosecapture=a&8192?$wnd.__dispatchEvent:null;b.onscroll=a&16384?$wnd.__dispatchEvent:null;b.onload=a&32768?$wnd.__dispatchEvent:null;b.onerror=a&65536?$wnd.__dispatchEvent:null;b.onmousewheel=a&131072?$wnd.__dispatchEvent:null;}
function ck(){}
_=ck.prototype=new sj();_.ob=ek;_.pb=fk;_.rb=gk;_.zb=hk;_.ec=ik;_.fc=jk;_.md=kk;_.ud=lk;_.Cd=uw+'DOMImplStandard';_.Bd=0;function zj(a){ik.call(a);a.dc();}
function Aj(c,b,a){lk.call(c,b,a);c.td(b,a);}
function Bj(a,b){if(!a&& !b){return true;}else if(!a|| !b){return false;}return a.isSameNode(b);}
function Dj(){zj(this);}
function Cj(){$wnd.addEventListener('mouseout',function(b){var a=$wnd.__captureElem;if(a&& !b.relatedTarget){if('html'==b.target.tagName.toLowerCase()){var c=$doc.createEvent('MouseEvents');c.initMouseEvent('mouseup',true,true,$wnd,0,b.screenX,b.screenY,b.clientX,b.clientY,b.ctrlKey,b.altKey,b.shiftKey,b.metaKey,b.button,null);a.dispatchEvent(c);}}},true);$wnd.addEventListener('DOMMouseScroll',$wnd.__dispatchCapturedMouseEvent,true);}
function Ej(c,b){while(b){if(c.isSameNode(b)){return true;}try{b=b.parentNode;}catch(a){return false;}if(b&&b.nodeType!=1){b=null;}}return false;}
function Fj(a){if(a.isSameNode($wnd.__captureElem)){$wnd.__captureElem=null;}}
function bk(b,a){Aj(this,b,a);}
function ak(b,a){if(a&131072){b.addEventListener('DOMMouseScroll',$wnd.__dispatchEvent,false);}}
function tj(){}
_=tj.prototype=new ck();_.eb=Bj;_.ec=Dj;_.dc=Cj;_.gc=Ej;_.dd=Fj;_.ud=bk;_.td=ak;_.Cd=uw+'DOMImplMozilla';_.Bd=0;function wj(a){var d=$doc.defaultView.getComputedStyle(a,null);var b=a.getBoundingClientRect().x-Math.round(d.getPropertyCSSValue('border-left-width').getFloatValue(CSSPrimitiveValue.CSS_PX));var c=a;while(c){if(c.scrollLeft>0){b-=c.scrollLeft;}c=c.parentNode;}return b+$doc.body.scrollLeft+$doc.documentElement.scrollLeft;}
function xj(a){var c=$doc.defaultView.getComputedStyle(a,null);var d=a.getBoundingClientRect().y-Math.round(c.getPropertyCSSValue('border-top-width').getFloatValue(CSSPrimitiveValue.CSS_PX));var b=a;while(b){if(b.scrollTop>0){d-=b.scrollTop;}b=b.parentNode;}return d+$doc.body.scrollTop+$doc.documentElement.scrollTop;}
function uj(){}
_=uj.prototype=new tj();_.sb=wj;_.tb=xj;_.Cd=uw+'DOMImplMozillaOld';_.Bd=0;function Do(a){return yf(a.h,'offsetHeight');}
function Eo(a){return yf(a.h,'offsetWidth');}
function Fo(c){var a,b;a=hp(c.h);b=a.Fb(32);if(b>=0){return a.xd(0,b);}return a;}
function ap(b,a){if(b.h!==null){b.kd(b.h,a);}b.h=a;}
function bp(b,a){kg(b.h,'height',a);}
function cp(b,c,a){if(c>=0){fp(b,c+'px');}if(a>=0){bp(b,a+'px');}}
function dp(b,a){jp(b.h,a);}
function ep(a,b){kp(a.h,b);}
function fp(a,b){kg(a.h,'width',b);}
function gp(b,a){lg(b.h,a|Af(b.h));}
function hp(b){var a;a=zf(b,'className').yd();if(qr('',a)){a='gwt-nostyle';gg(b,'className',a);}return a;}
function ip(b,a){var c=b.parentNode;if(!c){return;}c.insertBefore(a,b);c.removeChild(b);}
function jp(a,b){if(a===null){throw mr(new lr(),'Null widget handle. If you are creating a composite, ensure that initWidget() has been called.');}b=b.yd();if(b.jc()==0){throw zq(new yq(),'Style names cannot be empty');}hp(a);lp(a,b);}
function kp(a,b){a.style.display=b?'':'none';}
function lp(c,f){var a=c.className;var h=a.indexOf(' ');if(h>=0){var g=a.substring(0,h);var e='',b=0;while(true){var d=a.indexOf(g,b);if(d== -1){e+=a.substring(b);break;}e+=a.substring(b,d);e+=f;b=d+g.length;}c.className=e;}else{c.className=f;}}
function Bo(){}
_=Bo.prototype=new hr();_.kd=ip;_.Cd=vw+'UIObject';_.Bd=0;_.h=null;function fq(a){if(a.f){throw Cq(new Bq(),"Should only call onAttach when the widget is detached from the browser's document");}a.f=true;hg(a.h,a);}
function gq(a){if(!a.f){throw Cq(new Bq(),"Should only call onDetach when the widget is attached to the browser's document");}{a.f=false;hg(a.h,null);}}
function hq(a){if(a.g!==null){a.g.id(a);}else if(a.g!==null){throw Cq(new Bq(),"This widget's parent does not implement HasWidgets");}}
function iq(b,a){if(b.f){hg(b.h,null);}ap(b,a);if(b.f){hg(a,b);}}
function jq(c,b){var a;a=c.g;c.g=b;if(b===null){if(a!==null&&a.f){c.nc();}}else if(b.f){c.lc();}}
function kq(){fq(this);}
function lq(a){}
function mq(){gq(this);}
function up(){}
_=up.prototype=new Bo();_.lc=kq;_.mc=lq;_.nc=mq;_.Cd=vw+'Widget';_.Bd=26;_.f=false;_.g=null;function mn(b,c,a){hq(c);if(a!==null){df(a,c.h);}jq(c,b);}
function on(b,c){var a;if(c.g!==b){throw zq(new yq(),'w is not a child of this panel');}a=c.h;jq(c,null);bg(Bf(a),a);}
function pn(c){var a,b;fq(c);for(b=c.hc();b.Db();){a=ve(b.kc(),18);a.lc();}}
function qn(c){var a,b;gq(c);for(b=c.hc();b.Db();){a=ve(b.kc(),18);a.nc();}}
function rn(a){on(this,a);}
function sn(){pn(this);}
function tn(){qn(this);}
function ln(){}
_=ln.prototype=new up();_.ib=rn;_.lc=sn;_.nc=tn;_.Cd=vw+'Panel';_.Bd=27;function nl(a){a.e=Cp(new vp(),a);}
function ol(a){nl(a);return a;}
function pl(b,c,a){return sl(b,c,a,b.e.c);}
function rl(b,a){return Fp(b.e,a);}
function sl(d,e,b,a){var c;if(a<0||a>d.e.c){throw new Eq();}c=rl(d,e);if(c==(-1)){hq(e);}else{d.id(e);if(c<a){a--;}}mn(d,e,b);aq(d.e,e,a);return a;}
function tl(a,b){if(!Ep(a.e,b)){return false;}a.ib(b);dq(a.e,b);return true;}
function ul(){return bq(this.e);}
function vl(a){return tl(this,a);}
function ml(){}
_=ml.prototype=new ln();_.hc=ul;_.id=vl;_.Cd=vw+'ComplexPanel';_.Bd=28;function Fk(a){ol(a);iq(a,ff());kg(a.h,'position','relative');kg(a.h,'overflow','hidden');return a;}
function al(a,b){pl(a,b,a.h);}
function bl(b,d,a,c){hq(d);dl(b,d,a,c);al(b,d);}
function dl(c,e,b,d){var a;a=e.h;if(b==(-1)&&d==(-1)){el(a);}else{kg(a,'position','absolute');kg(a,'left',b+'px');kg(a,'top',d+'px');}}
function el(a){kg(a,'left','');kg(a,'top','');kg(a,'position','static');}
function fl(a){on(this,a);el(a.h);}
function Ek(){}
_=Ek.prototype=new ml();_.ib=fl;_.Cd=vw+'AbsolutePanel';_.Bd=29;function hl(a){ol(a);a.d=lf();a.c=hf();df(a.d,a.c);iq(a,a.d);return a;}
function jl(a,b){if(b.g!==a){return null;}return Bf(b.h);}
function kl(c,d,a){var b;b=jl(c,d);if(b!==null){gg(b,'align',a.a);}}
function ll(c,d,a){var b;b=jl(c,d);if(b!==null){kg(b,'verticalAlign',a.a);}}
function gl(){}
_=gl.prototype=new ml();_.Cd=vw+'CellPanel';_.Bd=30;_.c=null;_.d=null;function Al(){Al=nw;Bl=yl(new xl(),'center');Cl=yl(new xl(),'left');yl(new xl(),'right');}
var Bl,Cl;function yl(b,a){b.a=a;return b;}
function xl(){}
_=xl.prototype=new hr();_.Cd=vw+'HasHorizontalAlignment$HorizontalAlignmentConstant';_.Bd=0;_.a=null;function bm(){bm=nw;Fl(new El(),'bottom');Fl(new El(),'middle');cm=Fl(new El(),'top');}
var cm;function Fl(a,b){a.a=b;return a;}
function El(){}
_=El.prototype=new hr();_.Cd=vw+'HasVerticalAlignment$VerticalAlignmentConstant';_.Bd=0;_.a=null;function om(){om=nw;jv(new ou());}
function nm(a,b){om();km(new im(),a,b);dp(a,'gwt-Image');return a;}
function pm(a){if(this.a===null){this.a=xh(new wh());}yh(this.a,a,this);}
function qm(a){if(this.b===null){this.b=ji(new ii());}ki(this.b,a,this);}
function rm(a){if(this.c===null){this.c=bn(new an());}zt(this.c,a);}
function sm(a){switch(tf(a)){case 1:{break;}case 4:case 8:case 64:case 16:case 32:{if(this.c!==null){fn(this.c,this,a);}break;}case 131072:break;case 32768:{break;}case 65536:{break;}}}
function fm(){}
_=fm.prototype=new up();_.E=pm;_.F=qm;_.ab=rm;_.mc=sm;_.Cd=vw+'Image';_.Bd=31;_.a=null;_.b=null;_.c=null;function gm(){}
_=gm.prototype=new hr();_.Cd=vw+'Image$State';_.Bd=0;function jm(b,a){iq(a,gf());gp(a,229501);return b;}
function km(b,a,c){jm(b,a);mm(b,a,c);return b;}
function mm(b,a,c){ig(a.h,c);}
function im(){}
_=im.prototype=new gm();_.Cd=vw+'Image$UnclippedState';_.Bd=0;function vm(a){iq(a,ff());gp(a,131197);dp(a,'gwt-Label');return a;}
function wm(b,a){vm(b);Bm(b,a);return b;}
function xm(b,a){if(b.a===null){b.a=xh(new wh());}yh(b.a,a,b);}
function ym(b,a){if(b.b===null){b.b=ji(new ii());}ki(b.b,a,b);}
function Am(b,a){kg(b.h,'textAlign',a.a);}
function Bm(b,a){jg(b.h,a);}
function Cm(a){xm(this,a);}
function Dm(a){ym(this,a);}
function Em(a){if(this.c===null){this.c=bn(new an());}zt(this.c,a);}
function Fm(a){switch(tf(a)){case 1:break;case 4:case 8:case 64:case 16:case 32:if(this.c!==null){fn(this.c,this,a);}break;case 131072:break;}}
function um(){}
_=um.prototype=new up();_.E=Cm;_.F=Dm;_.ab=Em;_.mc=Fm;_.Cd=vw+'Label';_.Bd=32;_.a=null;_.b=null;_.c=null;function yt(a){a.cc();return a;}
function zt(b,a){b.bb(b.vd(),a);return true;}
function Bt(b,a){return Ct(b,a)!=(-1);}
function Ct(b,a){return b.ac(a,0);}
function Dt(c,a){var b;b=c.Bb(a);c.fd(a,a+1);return b;}
function Et(c,d){var a=this.a;var b=this.b;var e=this.c;if(c+e==b){a[b]=d;this.b++;return;}if(c==0){a[--this.c]=d;return;}this.zd(c);a.splice(c+e,0,d);this.b++;}
function Ft(a){return zt(this,a);}
function au(a){return Bt(this,a);}
function bu(a,b){return a===null?b===null:a.kb(b);}
function cu(a){this.Ad(a);var b=this.c;return this.a[a+b];}
function du(e,d){var a=this.a;var f=this.c;var c=d+f;var b=this.b;while(c<b){if(bu(a[c],e)){return c-f;}++c;}return -1;}
function eu(a){throw Fq(new Eq(),'Size: '+this.vd()+' Index: '+a);}
function fu(){this.a=new Array();var a=1000000000;this.c=a;this.b=a;}
function hu(a){return Dt(this,a);}
function iu(b){var a;a=Ct(this,b);if(a==(-1)){return false;}Dt(this,a);return true;}
function gu(c,g){this.zd(c);this.zd(g);var a=this.a;var f=this.c;var b=this.b;if(c==0){for(var d=f;d<g+f;d++){delete a[d];}this.c+=g-c;}else if(g+f==b){for(var d=c+f;d<b;d++){delete a[d];}this.b=c+f;}else{var e=g-c;a.splice(c+f,e);this.b-=e;}}
function ju(){return this.b-this.c;}
function lu(b){var a=this.b;var c=this.c;if(b<0||b+c>=a){this.bc(b);}}
function ku(b){var a=this.b;var c=this.c;if(b<0||b+c>a){this.bc(b);}}
function xt(){}
_=xt.prototype=new ls();_.bb=Et;_.cb=Ft;_.gb=au;_.Bb=cu;_.ac=du;_.bc=eu;_.cc=fu;_.hd=hu;_.jd=iu;_.fd=gu;_.vd=ju;_.Ad=lu;_.zd=ku;_.Cd=xw+'ArrayList';_.Bd=33;_.a=null;_.b=0;_.c=0;function bn(a){yt(a);return a;}
function dn(d,c,e,f){var a,b;for(a=d.hc();a.Db();){b=ve(a.kc(),17);b.Ac(c,e,f);}}
function en(d,c){var a,b;for(a=d.hc();a.Db();){b=ve(a.kc(),17);b.Bc(c);}}
function fn(e,c,a){var b,d,f,g,h;d=c.h;g=pf(a)-vf(c.h)+yf(d,'scrollLeft')+gh();h=qf(a)-wf(c.h)+yf(d,'scrollTop')+hh();switch(tf(a)){case 4:dn(e,c,g,h);break;case 8:jn(e,c,g,h);break;case 64:hn(e,c,g,h);break;case 16:b=rf(a);if(!Ef(c.h,b)){en(e,c);}break;case 32:f=sf(a);if(!Ef(c.h,f)){gn(e,c);}break;}}
function gn(d,c){var a,b;for(a=d.hc();a.Db();){b=ve(a.kc(),17);b.Cc(c);}}
function hn(d,c,e,f){var a,b;for(a=d.hc();a.Db();){b=ve(a.kc(),17);b.Dc(c,e,f);}}
function jn(d,c,e,f){var a,b;for(a=d.hc();a.Db();){b=ve(a.kc(),17);b.Ec(c,e,f);}}
function an(){}
_=an.prototype=new xt();_.Cd=vw+'MouseListenerCollection';_.Bd=34;function An(){An=nw;Fn=jv(new ou());}
function zn(b,a){An();Fk(b);if(a===null){a=Bn();}iq(b,a);pn(b);return b;}
function Cn(){An();return Dn(null);}
function Dn(c){An();var a,b;b=ve(Fn.Cb(c),4);if(b!==null){return b;}a=null;if(c!==null){if(null===(a=xf(c))){return null;}}if(Fn.a==0){En();}Fn.bd(c,b=zn(new un(),a));return b;}
function Bn(){An();return $doc.body;}
function En(){An();bh(new vn());}
function un(){}
_=un.prototype=new Ek();_.Cd=vw+'RootPanel';_.Bd=35;var Fn;function xn(){var a,b;for(b=mv((An(),Fn)).hc();b.Db();){a=ve(b.kc(),4);if(a.f){qn(a);}}}
function yn(){return null;}
function vn(){}
_=vn.prototype=new hr();_.Fc=xn;_.ad=yn;_.Cd=vw+'RootPanel$1';_.Bd=36;function po(a){qo(a,ff());return a;}
function qo(b,a){iq(b,a);return b;}
function so(a,b){if(a.a===b){a.ib(b);a.a=null;return true;}return false;}
function to(a,b){if(a.a!==null){a.ib(a.a);}if(b!==null){mn(a,b,a.h);}a.a=b;}
function uo(){return ko(new io(),this);}
function vo(a){return so(this,a);}
function ho(){}
_=ho.prototype=new ln();_.hc=uo;_.id=vo;_.Cd=vw+'SimplePanel';_.Bd=37;_.a=null;function bo(a){po(a);fo(a,false);gp(a,16384);return a;}
function co(b,a){bo(b);to(b,a);return b;}
function fo(b,a){kg(b.h,'overflow',a?'scroll':'auto');}
function go(a){tf(a)==16384;}
function ao(){}
_=ao.prototype=new ho();_.mc=go;_.Cd=vw+'ScrollPanel';_.Bd=38;function jo(a){a.a=a.c.a!==null;}
function ko(b,a){b.c=a;jo(b);return b;}
function mo(){return this.a;}
function no(){if(!this.a||this.c.a===null){throw new Bv();}this.a=false;return this.b=this.c.a;}
function oo(){if(this.b!==null){so(this.c,this.b);}}
function io(){}
_=io.prototype=new hr();_.Db=mo;_.kc=no;_.gd=oo;_.Cd=vw+'SimplePanel$1';_.Bd=0;_.b=null;function np(a){a.a=(Al(),Cl);a.b=(bm(),cm);}
function op(a){hl(a);np(a);gg(a.d,'cellSpacing','0');gg(a.d,'cellPadding','0');return a;}
function pp(a,b){rp(a,b,a.e.c);}
function rp(c,e,a){var b,d;d=kf();b=jf();a=sl(c,e,b,a);df(d,b);Df(c.c,d,a);kl(c,e,c.a);ll(c,e,c.b);}
function sp(b,a){b.a=a;}
function tp(c){var a,b;if(c.g!==this){return false;}a=Bf(c.h);b=Bf(a);bg(this.c,b);tl(this,c);return true;}
function mp(){}
_=mp.prototype=new gl();_.id=tp;_.Cd=vw+'VerticalPanel';_.Bd=39;function Cp(b,a){b.b=a;b.a=qe('[Lcom.google.gwt.user.client.ui.Widget;',[0],[18],[4],null);return b;}
function Ep(a,b){return Fp(a,b)!=(-1);}
function Fp(b,c){var a;for(a=0;a<b.c;++a){if(b.a[a]===c){return a;}}return (-1);}
function aq(d,e,a){var b,c;if(a<0||a>d.c){throw new Eq();}if(d.c==d.a.a){c=qe('[Lcom.google.gwt.user.client.ui.Widget;',[0],[18],[d.a.a*2],null);for(b=0;b<d.a.a;++b){re(c,b,d.a[b]);}d.a=c;}++d.c;for(b=d.c-1;b>a;--b){re(d.a,b,d.a[b-1]);}re(d.a,a,e);}
function bq(a){return xp(new wp(),a);}
function cq(c,b){var a;if(b<0||b>=c.c){throw new Eq();}--c.c;for(a=b;a<c.c;++a){re(c.a,a,c.a[a+1]);}re(c.a,c.c,null);}
function dq(b,c){var a;a=Fp(b,c);if(a==(-1)){throw new Bv();}cq(b,a);}
function vp(){}
_=vp.prototype=new hr();_.Cd=vw+'WidgetCollection';_.Bd=0;_.a=null;_.b=null;_.c=0;function xp(b,a){b.b=a;return b;}
function zp(){return this.a<this.b.c-1;}
function Ap(){if(this.a>=this.b.c){throw new Bv();}return this.b.a[++this.a];}
function Bp(){if(this.a<0||this.a>=this.b.c){throw new Bq();}this.b.b.id(this.b.a[this.a--]);}
function wp(){}
_=wp.prototype=new hr();_.Db=zp;_.kc=Ap;_.gd=Bp;_.Cd=vw+'WidgetCollection$WidgetIterator';_.Bd=0;_.a=(-1);function oq(){}
_=oq.prototype=new lr();_.Cd=ww+'ArrayStoreException';_.Bd=40;function rq(){}
_=rq.prototype=new lr();_.Cd=ww+'ClassCastException';_.Bd=41;function zq(b,a){mr(b,a);return b;}
function yq(){}
_=yq.prototype=new lr();_.Cd=ww+'IllegalArgumentException';_.Bd=42;function Cq(b,a){mr(b,a);return b;}
function Bq(){}
_=Bq.prototype=new lr();_.Cd=ww+'IllegalStateException';_.Bd=43;function Fq(b,a){mr(b,a);return b;}
function Eq(){}
_=Eq.prototype=new lr();_.Cd=ww+'IndexOutOfBoundsException';_.Bd=44;function dr(a,b){return a>b?a:b;}
function er(a,b){return a<b?a:b;}
function fr(){}
_=fr.prototype=new lr();_.Cd=ww+'NegativeArraySizeException';_.Bd=45;function pr(){pr=nw;{tr();}}
function qr(b,a){if(!we(a,22))return false;return rr(b,a);}
function rr(a,b){pr();return a.toString()==b;}
function sr(d){pr();var a=vr[':'+d];if(a){return a;}a=0;var c=d.length;var b=c;while(--b>=0){a<<=1;a+=d.charCodeAt(b);}vr[':'+d]=a;return a;}
function tr(){pr();vr={};}
function ur(a){return qr(this,a);}
function wr(){return sr(this);}
function xr(a){return this.indexOf(String.fromCharCode(a));}
function yr(){return this.length;}
function zr(a){return this.substr(a,this.length-a);}
function Ar(a,b){return this.substr(a,b-a);}
function Br(){var a=this.replace(/^(\s*)/,'');var b=a.replace(/\s*$/,'');return b;}
_=String.prototype;_.kb=ur;_.Eb=wr;_.Fb=xr;_.jc=yr;_.wd=zr;_.xd=Ar;_.yd=Br;_.Cd=ww+'String';_.Bd=46;var vr=null;function Er(a){return Cd(a);}
function ds(b,a){mr(b,a);return b;}
function cs(){}
_=cs.prototype=new lr();_.Cd=ww+'UnsupportedOperationException';_.Bd=47;function ns(b,a){b.c=a;return b;}
function ps(a){return a.a<a.c.vd();}
function qs(){return ps(this);}
function rs(){if(!ps(this)){throw new Bv();}return this.c.Bb(this.b=this.a++);}
function ss(){if(this.b<0){throw new Bq();}this.c.hd(this.b);this.a=this.b;this.b=(-1);}
function ms(){}
_=ms.prototype=new hr();_.Db=qs;_.kc=rs;_.gd=ss;_.Cd=xw+'AbstractList$IteratorImpl';_.Bd=0;_.a=0;_.b=(-1);function lt(f,d,e){var a,b,c;for(b=tu(f.jb());dv(b);){a=ve(ev(b),25);c=a.yb();if(d===null?c===null:d.kb(c)){if(e){fv(b);}return a;}}return null;}
function mt(b){var a;a=b.jb();return Cs(new Bs(),b,a);}
function nt(a){return lt(this,a,false)!==null;}
function ot(d){var a,b,c,e,f,g,h;if(d===this){return true;}if(!we(d,24)){return false;}f=ve(d,24);c=mt(this);e=f.ic();if(!ut(c,e)){return false;}for(a=Es(c);ft(a);){b=gt(a);h=this.Cb(b);g=f.Cb(b);if(h===null?g!==null:!h.kb(g)){return false;}}return true;}
function pt(b){var a;a=lt(this,b,false);return a===null?null:a.Ab();}
function qt(){var a,b,c;b=0;for(c=tu(this.jb());dv(c);){a=ve(ev(c),25);b+=a.Eb();}return b;}
function rt(){return mt(this);}
function As(){}
_=As.prototype=new hr();_.fb=nt;_.kb=ot;_.Cb=pt;_.Eb=qt;_.ic=rt;_.Cd=xw+'AbstractMap';_.Bd=48;function ut(e,b){var a,c,d;if(b===e){return true;}if(!we(b,26)){return false;}c=ve(b,26);if(c.vd()!=e.vd()){return false;}for(a=c.hc();a.Db();){d=a.kc();if(!e.gb(d)){return false;}}return true;}
function vt(a){return ut(this,a);}
function wt(){var a,b,c;a=0;for(b=this.hc();b.Db();){c=b.kc();if(c!==null){a+=c.Eb();}}return a;}
function st(){}
_=st.prototype=new fs();_.kb=vt;_.Eb=wt;_.Cd=xw+'AbstractSet';_.Bd=49;function Cs(b,a,c){b.a=a;b.b=c;return b;}
function Es(b){var a;a=tu(b.b);return dt(new ct(),b,a);}
function Fs(a){return this.a.fb(a);}
function at(){return Es(this);}
function bt(){return this.b.a.a;}
function Bs(){}
_=Bs.prototype=new st();_.gb=Fs;_.hc=at;_.vd=bt;_.Cd=xw+'AbstractMap$1';_.Bd=50;function dt(b,a,c){b.a=c;return b;}
function ft(a){return a.a.Db();}
function gt(b){var a;a=ve(b.a.kc(),25);return a.yb();}
function ht(){return ft(this);}
function it(){return gt(this);}
function jt(){this.a.gd();}
function ct(){}
_=ct.prototype=new hr();_.Db=ht;_.kc=it;_.gd=jt;_.Cd=xw+'AbstractMap$2';_.Bd=0;function jv(a){a.ec();return a;}
function kv(c,b,a){c.D(b,a,1);}
function mv(a){var b;b=yt(new xt());kv(a,b,a.b);return b;}
function nv(k,h,l){var b=0;var c=1;var a=2;var j=this.b;for(var f in h){var e=null;if(f=='null'||f.charAt(f.length-1)=='S'){var i=null;if(l!=c&&f!='null'){i=f.substring(0,f.length-1);}if(l==b){e=i;}else if(l==c){e=j[f];}else if(l==a){e=qv(i,j[f]);}k.cb(e);}else{var d=j[f];for(var g in d){if(l!=a){e=d[g][l];}else{e=qv(d[g][0],d[g][1]);}k.cb(e);}}}}
function ov(a){if(we(a,22)){return ve(a,22)+'S';}else if(a===null){return 'null';}else{return null;}}
function pv(b){var a=ov(b);if(a==null){var c=sv(this,b);return c!=null;}else{return this.b[a]!==undefined;}}
function qv(a,b){return zu(new yu(),a,b);}
function rv(){return qu(new pu(),this);}
function sv(h,f){var a=0;var g=h.b;var e=f.Eb();var c=g[e];if(c!=null){for(var d in c){var b=c[d];if(b[a].kb(f)){return [e,d];}}}return null;}
function tv(g){var a=0;var b=1;var f=ov(g);if(f!=null){var d=this.b[f];if(d===undefined){return null;}else{return d;}}else{f=g.Eb();}var c=this.b[f];if(c==null){return null;}for(var e in c){if(c[e][a].kb(g)){return c[e][b];}}return null;}
function uv(){this.b=[];}
function vv(f,h){var a=0;var b=1;var g=null;var e=ov(f);if(e!=null){g=this.b[e];this.b[e]=h;if(g===undefined){this.a++;return null;}else{return g;}}else{e=f.Eb();}var c=this.b[e];if(c==null){c=[];this.b[e]=c;}for(var d in c){if(c[d][a].kb(f)){g=c[d][b];c[d]=[f,h];return g;}}this.a++;c[c.length]=[f,h];return null;}
function wv(e){var a=1;var g=this.b;var d=ov(e);var h=null;if(d!=null){h=g[d];delete g[d];if(h!==undefined){this.a--;return h;}else{return null;}}var f=sv(this,e);if(f==null){return null;}this.a--;var b=f[0];var c=f[1];var h=g[b][c][a];g[b].splice(c,1);if(g[b].length>0){return h;}delete g[b];return h;}
function ou(){}
_=ou.prototype=new As();_.D=nv;_.fb=pv;_.jb=rv;_.Cb=tv;_.ec=uv;_.bd=vv;_.jd=wv;_.Cd=xw+'HashMap';_.Bd=51;_.a=0;_.b=null;function qu(b,a){b.a=a;return b;}
function su(e,b){var a,c,d,f;a=ve(b,25);if(a!==null){d=a.yb();f=a.Ab();if(f!==null||e.a.fb(d)){c=e.a.Cb(d);if(f===null){return c===null;}else{return f.kb(c);}}}return false;}
function tu(a){return bv(new av(),a.a);}
function uu(a){return su(this,a);}
function vu(){return tu(this);}
function wu(a){var b;if(su(this,a)){b=ve(a,25).yb();this.a.jd(b);return true;}else{return false;}}
function xu(){return this.a.a;}
function pu(){}
_=pu.prototype=new st();_.gb=uu;_.hc=vu;_.jd=wu;_.vd=xu;_.Cd=xw+'HashMap$1';_.Bd=52;function zu(b,a,c){b.a=a;b.b=c;return b;}
function Bu(c,a,b){if(a===b){return true;}else if(a===null){return false;}else{return a.kb(b);}}
function Cu(a){var b;if(we(a,25)){b=ve(a,25);if(Bu(this,this.a,b.yb())&&Bu(this,this.b,b.Ab())){return true;}}return false;}
function Du(){return this.a;}
function Eu(){return this.b;}
function Fu(){var a,b;a=0;b=0;if(this.a!==null){a=this.a.Eb();}if(this.b!==null){b=this.b.Eb();}return a^b;}
function yu(){}
_=yu.prototype=new hr();_.kb=Cu;_.yb=Du;_.Ab=Eu;_.Eb=Fu;_.Cd=xw+'HashMap$EntryImpl';_.Bd=53;_.a=null;_.b=null;function bv(d,c){var a,b;d.c=c;a=yt(new xt());d.c.D(a,d.c.b,2);b=a.hc();d.a=b;return d;}
function dv(a){return a.a.Db();}
function ev(a){a.b=a.a.kc();return a.b;}
function fv(a){if(a.b===null){throw Cq(new Bq(),'Must call next() before remove().');}else{a.a.gd();a.c.jd(ve(a.b,25).yb());}}
function gv(){return dv(this);}
function hv(){return ev(this);}
function iv(){fv(this);}
function av(){}
_=av.prototype=new hr();_.Db=gv;_.kc=hv;_.gd=iv;_.Cd=xw+'HashMap$EntrySetImplIterator';_.Bd=0;_.a=null;_.b=null;function Bv(){}
_=Bv.prototype=new lr();_.Cd=xw+'NoSuchElementException';_.Bd=54;function nq(){hb(fb(new y()));}
function gwtOnLoad(b,d,c){$moduleName=d;$moduleBase=c;if(b)try{nq();}catch(a){b(d);}else{nq();}}
var ze=[{},{12:1,13:1},{13:1},{13:1},{13:1},{13:1},{13:1},{9:1},{12:1},{12:1},{12:1},{13:1},{13:1},{8:1},{8:1},{8:1},{8:1,16:1},{7:1},{7:1,10:1},{7:1},{11:1},{23:1},{23:1},{23:1},{6:1,23:1},{14:1,17:1},{18:1,19:1,20:1,21:1},{18:1,19:1,20:1,21:1},{18:1,19:1,20:1,21:1},{3:1,18:1,19:1,20:1,21:1},{18:1,19:1,20:1,21:1},{1:1,5:1,15:1,18:1,19:1,20:1,21:1},{1:1,5:1,15:1,18:1,19:1,20:1,21:1},{23:1},{23:1},{3:1,4:1,18:1,19:1,20:1,21:1},{11:1},{18:1,19:1,20:1,21:1},{18:1,19:1,20:1,21:1},{2:1,18:1,19:1,20:1,21:1},{8:1},{8:1},{8:1},{8:1},{8:1},{8:1},{22:1},{8:1},{24:1},{26:1},{26:1},{24:1},{26:1},{25:1},{8:1}];if (com_alex_gorisse_DragMove14) {  var __gwt_initHandlers = com_alex_gorisse_DragMove14.__gwt_initHandlers;  com_alex_gorisse_DragMove14.onScriptLoad(gwtOnLoad);}})();