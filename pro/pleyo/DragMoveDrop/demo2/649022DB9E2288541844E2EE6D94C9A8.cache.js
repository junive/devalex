(function(){var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var _,gw='com.alex_gorisse.client.',hw='com.alex_gorisse.gwt.dragmovedrop.',iw='com.google.gwt.core.client.',jw='com.google.gwt.lang.',kw='com.google.gwt.user.client.',lw='com.google.gwt.user.client.dnd.',mw='com.google.gwt.user.client.impl.',nw='com.google.gwt.user.client.ui.',ow='java.lang.',pw='java.util.';function fw(){}
function br(a){return this===a;}
function cr(){return wr(this);}
function Fq(){}
_=Fq.prototype={};_.ib=br;_.Cb=cr;_.yd=ow+'Object';_.xd=0;function eb(a){a.g=gp(new ep());a.h=gp(new ep());a.b=om(new mm(),'Move this bar');a.c=om(new mm(),'Move this bar');}
function fb(a){eb(a);return a;}
function hb(x){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w;t=xk(new wk());Ao(t,950,700);Bo(t,'jeDragOver');j=om(new mm(),'Move this bar');Do(j,'950');sm(j,(sl(),ul));kg(j.h,'background','#99cccc');n=Bb(new ub(),j);hc(n,t);x.d=xk(new wk());kg(x.d.h,'background','#ffffcc');Ao(x.d,350,450);Bo(x.d,'jeDragOver2');Do(x.b,'350');sm(x.b,(sl(),ul));kg(x.b.h,'background','#99cccc');pm(x.b,x);o=Bb(new ub(),x.b);hc(o,x.d);Fb(o,true);u=xk(new wk());kg(u.h,'background','#00ccff');Bo(u,'jeDragOver');Ao(u,200,200);k=om(new mm(),'Move this bar');Do(k,'200');sm(k,(sl(),ul));kg(k.h,'background','#99cccc');p=Bb(new ub(),k);hc(p,u);Fb(p,true);Bo(x.g,'jeDragOver');w=An(new yn(),x.g);Ao(w,180,200);e=cd(new zc(),x.g,new z());d=cd(new zc(),x.h,new B());md(e,w);hd(e,true);for(g=0;g<9;g++){l=om(new mm(),'Move me in or out');pm(l,x);qm(l,x);m=Bb(new ub(),l);if(g<3){Bo(l,'DragBox4');fc(m,un(),true);}if(g>=3&&g<6){tm(l,'I go into my grand pa');Bo(l,'DragBox3');fc(m,x.d,true);Fb(m,true);fd(d,l);}if(g>=6){Bo(l,'DragBox1');tm(l,'I copy into my grand pa');a=om(new mm(),"I'm a copy ");f=Bb(new ub(),a);fc(f,x.d,true);Bo(a,'DragBox1');bc(m,a,un(),0,0);fd(d,a);}dd(e,l);hp(x.g,l);}zk(u,k,0,0);zk(u,w,2,30);zk(x.d,x.b,0,0);zk(x.d,u,50,50);x.e=xk(new wk());kg(x.e.h,'background','#ffcc99');Ao(x.e,200,370);Bo(x.e,'jeDragOver');Do(x.c,'200');kg(x.c.h,'background','#99cccc');pm(x.c,x);q=Bb(new ub(),x.c);hc(q,x.e);Fb(q,true);Ao(x.h,200,350);kp(x.h,(sl(),tl));fd(d,x.c);fd(d,x.b);fd(d,k);fd(d,j);fd(e,x.c);fd(e,x.b);fd(e,k);fd(e,j);v=An(new yn(),x.h);Ao(v,200,350);for(h=0;h<1;h++){r=gp(new ep());b=cd(new zc(),r,new D());ld(b,true);for(i=0;i<6;i++){s=gp(new ep());c=cd(new zc(),s,new F());md(c,v);jd(c,true);for(g=0;g<3;g++){l=om(new mm(),'Move me in or out '+g);pm(l,x);m=Bb(new ub(),l);if(i==0){Bo(l,'DragBox4');fc(m,un(),true);}if(i==1){Bo(l,'DragBox0');tm(l,'I move and go back '+g);fc(m,un(),true);Eb(m,true);}if(i==2){Bo(l,'DragBox1');tm(l,'I copy and go back '+g);a=om(new mm(),"I'm a copy "+g);f=Bb(new ub(),a);fc(f,un(),true);Bo(a,'DragBox1');bc(m,a,un(),0,0);Eb(m,true);}if(i==3){Bo(l,'DragBox5');tm(l,'I copy in a cat '+g);a=fm(new Dl(),'cat.jpg');f=Bb(new ub(),a);fc(f,un(),true);Bo(a,'noSpace');bc(m,a,un(),25,25);jc(f,15);ic(f,15);}if(i==4){Bo(l,'DragBox3');pm(l,x);tm(l,'I go into my grand pa '+g);fc(m,t,true);Fb(m,true);}if(i==5){Bo(l,'DragBox2');tm(l,'I copy in our out '+g);a=om(new mm(),"I'm a copy "+g);f=Bb(new ub(),a);fc(f,un(),true);Bo(a,'DragBox2');bc(m,a,un(),0,0);}qm(l,x);dd(c,l);hp(s,l);}dd(b,s);hp(r,s);}dd(d,r);hp(x.h,r);}zk(x.e,x.c,0,0);zk(x.e,v,0,20);zk(t,j,0,0);zk(t,x.d,100,30);zk(t,x.e,500,30);zk(vn('myDrag'),t,50,50);cf(new bb());}
function ib(a,b){}
function jb(a,b,c){}
function kb(a,b){}
function lb(a,b){}
function mb(a,b,c){}
function nb(a,b){}
function ob(b,c,d){var a;a=ej(b);this.a++;tb(a.d.h,this.a);}
function sb(a,b){Bo(a,this.f);}
function pb(a,b){this.f=xo(a);Bo(a,'Over');}
function qb(a,b){Bo(a,this.f);}
function rb(a,b){}
function tb(a,b){a.style.zIndex=b;}
function y(){}
_=y.prototype=new Fq();_.lc=ib;_.mc=jb;_.nc=kb;_.oc=lb;_.pc=mb;_.qc=nb;_.rc=ob;_.vc=sb;_.sc=pb;_.tc=qb;_.uc=rb;_.yd=gw+'DragMove14';_.xd=1;_.a=0;_.d=null;_.e=null;_.f='';function hi(a,b){}
function ei(a,b){}
function fi(a,b){}
function gi(a,b){}
function ci(){}
_=ci.prototype=new Fq();_.vc=hi;_.sc=ei;_.tc=fi;_.uc=gi;_.yd=lw+'DropListenerAdapter';_.xd=2;function z(){}
_=z.prototype=new ci();_.yd=gw+'DragMove14$1';_.xd=3;function B(){}
_=B.prototype=new ci();_.yd=gw+'DragMove14$2';_.xd=4;function D(){}
_=D.prototype=new ci();_.yd=gw+'DragMove14$3';_.xd=5;function F(){}
_=F.prototype=new ci();_.yd=gw+'DragMove14$4';_.xd=6;function db(a){if(tf(a)==4){uf(a);}return true;}
function bb(){}
_=bb.prototype=new Fq();_.wc=db;_.yd=gw+'DragMove14$5';_.xd=7;function Ab(a){a.m=wb(new vb(),a);a.k=om(new mm(),'      ');}
function Bb(a,b){Ab(a);a.A=b;if(we(a.A,1)){ve(a.A,1).C(a);}a.n=ej(a.A);if(mc===null){mc=bv(new gu());}mc.Ec(a.A,a);return a;}
function Cb(b,a){dc(b,ec(b));b.id(b,ec(b).h,b.l,b.z,b.g,b.h,20,a);}
function Db(c,a,b){if(we(b,3)){yk(ve(b,3),a);}else if(we(b,2)){jp(ve(b,2),a,c.d);}else if(we(b,4)){yk(ve(b,4),a);}else{throw er(new dr(),'Cannot insert into '+xd(b));}}
function Eb(b,a){b.a=a;}
function Fb(b,a){b.b=a;if(b.b){yi(b.n,false);}else{yi(b.n,true);}}
function cc(d,a,b,c){if(we(a,1)){d.p=a;Co(d.p,false);ve(d.p,1).C(d.m);d.q=d.n;d.n=ej(d.p);d.t=b;d.u=c;}}
function bc(e,b,a,c,d){e.j=a;cc(e,b,c,d);}
function dc(d,e){var a,b,c;b=null;a=e.h;if(d.j!==null){b=d.j;}else if(e.g!==null){b=e.g;}d.l=vf(a)-cj(a);d.z=wf(a)-dj(a);if(d.j!==un()&&b!==null){c=b.h;d.l-=vf(c)+cj(c);d.z-=wf(c)+dj(c);}}
function ec(a){return a.p!==null?a.p:a.A;}
function fc(c,b,a){c.c=a;c.o=b;}
function gc(d,b,c){var a;if(d.i&&we(c.g,2)){d.a=false;a=c.g;d.d=pc(c,a);kg(b.h,'position','static');Db(d,b,a);}}
function hc(a,b){zi(a.n,b);}
function ic(b,a){b.s=a;}
function jc(b,a){b.x=a;}
function kc(a,c,b){if(we(c,3)){yk(ve(c,3),a);}else if(we(c,2)){jp(ve(c,2),a,b);}else if(we(c,4)){yk(ve(c,4),a);}else{throw er(new dr(),'Cannot insert into '+xd(c));}}
function lc(a){if(we(a,2)){return true;}else{return false;}}
function nc(b){if($doc.defaultView!=null){var c=$doc.defaultView.getComputedStyle(b,null);if(c!=null){var a=parseInt(c.getPropertyValue('border-bottom-width'));return a== -1?0:a;}}return 0;}
function oc(b){if($doc.defaultView!=null){var c=$doc.defaultView.getComputedStyle(b,null);if(c!=null){var a=parseInt(c.getPropertyValue('border-right-width'));return a== -1?0:a;}}return 0;}
function pc(a,b){if(we(b,2)){return jl(ve(b,2),a);}else{return (-1);}}
function qc(a,b){gc(this,a,b);if(this.y){Co(this.k,false);}}
function rc(a,b,c){if(this.a){Cb(this,false);}}
function sc(a,b){if(this.y){zo(this.k,fj(b.h)+'');gc(this,this.k,b);Co(this.k,true);}}
function tc(a,b){if(this.y){Co(this.k,false);}}
function uc(l,p,q){var a,b,c,d,e,f,g,h,i,j,k,m,n,o;if(this.v!=0){Bi(this.n,this.n.n+this.v);}if(this.w!=0){Ci(this.n,this.n.p-this.w);}if(this.x!=0){Di(this.n,this.n.q+this.x);}if(this.s!=0){Ai(this.n,this.n.c-this.s);}if(this.b){c=this.n.d.h;d=this.n.d.g.h;g=this.n.s-this.n.a;o=this.n.t-this.n.b;k=g+ij(d)-oc(d)-this.n.a;b=o+fj(d)-nc(d)-this.n.b;f=p+gj(c);j=k-ij(c);n=q+hj(c);a=b-fj(c);h=Cq(j,Bq(g,f));i=Cq(a,Bq(o,n));e=h+this.n.a-this.n.s;m=i+this.n.b-this.n.t;pj(this.n.d,e,m);}}
function vc(a,b){}
function wc(a,b,d){var c,e;dc(this,this.A);if(lc(this.A.g)){this.d=pc(this.A,this.A.g);}if(this.a){this.g=this.l;this.h=this.z;}if(this.c){this.e=this.l;this.f=this.z;this.r=this.A.g;this.j=this.o;dc(this,this.A);this.g=this.l;this.h=this.z;Fp(this.A);pj(this.A,this.l,this.z);Db(this,this.A,this.j);}if(this.p!==null){ag(this.A.h);xi(this.q,null);wi(this.q,this.A,b,d);if(this.r===null){this.r=this.A.g;}Db(this,this.p,this.j);c=0;e=0;if(this.t!=0){c=b;}if(this.u!=0){e=d;}pj(this.p,this.l+(c-this.t),this.z+(e-this.u));Co(this.p,true);vi(this.n,this.p,b-(c-this.t),d-(e-this.u));eg(this.p.h);}}
function xc(){if(this.c){pj(this.A,this.e,this.f);this.j=null;if(lc(this.r)){kg(this.A.h,'position','static');}Db(this,this.A,this.r);}}
function yc(n,d,e,f,i,j,b,a){var g=(i-e)/b;var h=(j-f)/b;var k=e;var l=f;var c=0;function m(){k=k+g;l=l+h;d.style['left']=k;d.style['top']=l;if(c<b){setTimeout(m,1);c++;}else{d.style['left']=i;d.style['top']=j;if(a){d.style.display=false?'':'none';}n.Fc();}}
m();}
function ub(){}
_=ub.prototype=new Fq();_.lc=qc;_.mc=rc;_.nc=sc;_.oc=tc;_.pc=uc;_.qc=vc;_.rc=wc;_.Fc=xc;_.id=yc;_.yd=hw+'DragSource';_.xd=8;_.a=false;_.b=false;_.c=false;_.d=0;_.e=0;_.f=0;_.g=0;_.h=0;_.i=false;_.j=null;_.l=0;_.n=null;_.o=null;_.p=null;_.q=null;_.r=null;_.s=0;_.t=0;_.u=0;_.v=0;_.w=0;_.x=0;_.y=false;_.z=0;_.A=null;var mc=null;function ph(a,b){}
function qh(a,b,c){}
function rh(a,b){}
function sh(a,b){}
function th(a,b,c){}
function uh(a,b){}
function vh(a,b,c){}
function nh(){}
_=nh.prototype=new Fq();_.lc=ph;_.mc=qh;_.nc=rh;_.oc=sh;_.pc=th;_.qc=uh;_.rc=vh;_.yd=lw+'DragListenerAdapter';_.xd=9;function wb(b,a){b.a=a;return b;}
function yb(a,b){gc(this.a,a,b);}
function zb(a,b,c){if(this.a.a){Cb(this.a,true);}}
function vb(){}
_=vb.prototype=new nh();_.lc=yb;_.mc=zb;_.yd=hw+'DragSource$1';_.xd=10;function ed(){ed=fw;pd=nm(new mm());}
function bd(a){a.c=Bc(new Ac(),a);}
function cd(b,c,a){ed();bd(b);b.t=c;b.h=ji(new ii());ki(b.h,b,b.t);ki(b.h,a,b.t);if(od===null){od=bv(new gu());}od.Ec(c,b.h);if(b.a===null){b.a=yv(new xv());}return b;}
function dd(f,a){var b,c,d,e;f.e=true;if(we(a,5)){ve(a,5).D(f.c);}else if(od.db(a)){ki(ve(od.Ab(a),6),f.c,a);}else{b=ji(new ii());ki(b,f.c,a);}if(f.d===null){f.d=yv(new xv());}d=bj;for(e=Cv(d);e.Bb();){c=ve(e.hc(),6);if(c.a.ib(a)){zv(f.d,c);d.gd(c);break;}}}
function fd(b,a){zv(b.a,a);}
function hd(b,a){b.l=a;}
function gd(e,b,a){var c,d;d=b.g;if(e.l||e.m){if(lc(d)){c=pc(b,d);kg(a.h,'position','static');kc(a,d,c);}}}
function jd(b,a){b.m=a;}
function id(e,b,a){var c,d;d=b.g;if(e.m){Fp(pd);if(lc(d)){c=pc(b,d);kg(pd.h,'position','static');zo(pd,vo(a)+'');Do(pd,wo(a)+'');kc(pd,d,c);Co(pd,true);}}}
function kd(j,g,d){var a,b,c,e,f,h,i,k,l;h=g.h;l=wf(h);a=l+vo(g);f=vf(h);i=f+wo(g);e=yf(d.h,'startLeft');k=yf(d.h,'startTop');c=Cq(a,Bq(k,l));b=Cq(i,Bq(e,f));if(c==a||c==l||b==f||b==i){return true;}else{return false;}}
function ld(b,a){b.k=true;}
function md(b,a){b.p=a;}
function nd(c){var a,b;for(b=Cv(c.d);b.Bb();){a=ve(b.hc(),6).a.h;fg(a,'startWidth',ij(a));fg(a,'startHeight',fj(a));fg(a,'startLeft',vf(a));fg(a,'startTop',wf(a));}}
function td(a,b){this.o=null;this.s=false;if(this.g!==null){if(aj(this.n,this.q,this.r,this.b,this.g)){mi(this.i,this.g,b);Ah(this.f,b,this.g);this.i=null;this.g=null;this.f=null;}}}
function qd(a,b){if(Bv(this.a,b)){this.e=false;}else{this.e=true;}}
function rd(a,b){if(this.g!==null&&this.j){oi(this.i,this.g,b);Dh(this.f,b,this.g);this.g=null;this.i=null;this.j=false;}if(this.k){Fp(pd);}this.o=null;this.s=false;this.f=null;}
function sd(d,e){var a,b,c;if(this.e){this.j=true;if(this.o===null){this.o=ej(e);this.f=this.o.f;}b=e;if(this.o.i){this.n=this.o.n;this.r=this.o.q;this.q=this.o.p;this.b=this.o.c;}if(this.g===null&&this.s){for(c=Cv(this.d);c.Bb();){this.i=ve(c.hc(),6);a=this.i.a;if(aj(this.n,this.q,this.r,this.b,a)&&b!==a){this.g=a;if(this.g!==null&&this.p!==null&&kd(this,this.p,this.g)){this.g=null;if(this.m){Fp(pd);}}if(this.g!==null){ni(this.i,this.g,b);Ch(this.f,b,this.g);}break;}}}if(this.g!==null){if(aj(this.n,this.q,this.r,this.b,this.g)){pi(this.i,this.g,b);Fh(this.f,b,this.g);}else{oi(this.i,this.g,b);Dh(this.f,b,this.g);this.j=false;this.g=null;}}if(!this.s){nd(this);}this.s=this.o.m;}}
function zc(){}
_=zc.prototype=new Fq();_.vc=td;_.sc=qd;_.tc=rd;_.uc=sd;_.yd=hw+'DropTarget';_.xd=11;_.a=null;_.b=0;_.d=null;_.e=false;_.f=null;_.g=null;_.h=null;_.i=null;_.j=false;_.k=false;_.l=false;_.m=false;_.n=0;_.o=null;_.p=null;_.q=0;_.r=0;_.s=false;_.t=null;var od=null,pd;function Bc(b,a){b.a=a;return b;}
function ad(a,b){gd(this.a,a,b);if(this.a.m){Fp((ed(),pd));}}
function Dc(a,b){id(this.a,a,b);}
function Ec(a,b){}
function Fc(a,b){}
function Ac(){}
_=Ac.prototype=new Fq();_.vc=ad;_.sc=Dc;_.tc=Ec;_.uc=Fc;_.yd=hw+'DropTarget$1';_.xd=12;function xd(a){return a==null?null:a.yd;}
var yd=null;function Bd(a){return a==null?0:a.$H?a.$H:(a.$H=Dd());}
function Cd(a){return a==null?0:a.$H?a.$H:(a.$H=Dd());}
function Dd(){return ++Ed;}
var Ed=0;function yr(b,a){a;return b;}
function xr(){}
_=xr.prototype=new Fq();_.yd=ow+'Throwable';_.xd=13;function oq(b,a){yr(b,a);return b;}
function nq(){}
_=nq.prototype=new xr();_.yd=ow+'Exception';_.xd=14;function er(b,a){oq(b,a);return b;}
function dr(){}
_=dr.prototype=new nq();_.yd=ow+'RuntimeException';_.xd=15;function ae(c,b,a){er(c,'JavaScript '+b+' exception: '+a);return c;}
function Fd(){}
_=Fd.prototype=new dr();_.yd=iw+'JavaScriptException';_.xd=16;function ee(b,a){if(!we(a,7)){return false;}return ge(b,ve(a,7));}
function fe(a){return Bd(a);}
function he(a){return ee(this,a);}
function ge(a,b){return a===b;}
function ie(){return fe(this);}
function ce(){}
_=ce.prototype=new Fq();_.ib=he;_.Cb=ie;_.yd=iw+'JavaScriptObject';_.xd=17;function ke(c,a,d,b,e){c.a=a;c.b=b;c.yd=e;c.xd=d;return c;}
function me(a,b,c){return a[b]=c;}
function ne(b,a){return b[a];}
function oe(a){return a.length;}
function qe(e,d,c,b,a){return pe(e,d,c,b,0,oe(b),a);}
function pe(j,i,g,c,e,a,b){var d,f,h;if((f=ne(c,e))<0){throw new Dq();}h=ke(new je(),f,ne(i,e),ne(g,e),j);++e;if(e<a){j=j.sd(1);for(d=0;d<f;++d){me(h,d,pe(j,i,g,c,e,a,b));}}else{for(d=0;d<f;++d){me(h,d,b);}}return h;}
function re(a,b,c){if(c!==null&&a.b!=0&& !we(c,a.b)){throw new gq();}return me(a,b,c);}
function je(){}
_=je.prototype=new Fq();_.yd=jw+'Array';_.xd=0;function ue(b,a){if(!b)return false;return !(!ze[b][a]);}
function ve(b,a){if(b!=null)ue(b.xd,a)||ye();return b;}
function we(b,a){if(b==null)return false;return ue(b.xd,a);}
function ye(){throw new jq();}
function xe(a){if(a!==null){throw new jq();}return a;}
function Ae(b,d){_=d.prototype;if(b&& !(b.xd>=_.xd)){var c=b.toString;for(var a in _){b[a]=_[a];}b.toString=c;}return b;}
var ze;function De(a){if(we(a,8)){return a;}return ae(new Fd(),Fe(a),Ee(a));}
function Ee(a){return a.message;}
function Fe(a){return a.name;}
function bf(){bf=fw;dg=qt(new pt());{Cf=new tj();Cf.bc();}}
function cf(a){bf();rt(dg,a);}
function df(b,a){bf();Cf.bb(b,a);}
function ef(a,b){bf();return Cf.cb(a,b);}
function ff(){bf();return Cf.fb('div');}
function gf(){bf();return Cf.fb('img');}
function hf(){bf();return Cf.fb('tbody');}
function jf(){bf();return Cf.fb('td');}
function kf(){bf();return Cf.fb('tr');}
function lf(){bf();return Cf.fb('table');}
function nf(b,a,d){bf();var c;c=yd;{mf(b,a,d);}}
function mf(b,a,c){bf();if(a===cg){if(tf(b)==8192){cg=null;}}c.jc(b);}
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
function Df(c,a,b){bf();Cf.cc(c,a,b);}
function Ef(b,a){bf();return Cf.dc(b,a);}
function Ff(a){bf();var b,c;c=true;if(dg.rd()>0){b=ve(dg.zb(dg.rd()-1),9);if(!(c=b.wc(a))){of(a,true);uf(a);}}return c;}
function ag(a){bf();if(cg!==null&&ef(a,cg)){cg=null;}Cf.ad(a);}
function bg(b,a){bf();Cf.bd(b,a);}
function eg(a){bf();cg=a;Cf.jd(a);}
function gg(a,b,c){bf();Cf.ld(a,b,c);}
function fg(a,b,c){bf();Cf.kd(a,b,c);}
function hg(a,b){bf();Cf.md(a,b);}
function ig(a,b){bf();Cf.nd(a,b);}
function jg(a,b){bf();Cf.od(a,b);}
function kg(b,a,c){bf();Cf.pd(b,a,c);}
function lg(a,b){bf();Cf.qd(a,b);}
var Cf=null,cg=null,dg;function og(a){if(we(a,10)){return ef(this,ve(a,10));}return ee(Ae(this,mg),a);}
function pg(){return fe(Ae(this,mg));}
function mg(){}
_=mg.prototype=new ce();_.ib=og;_.Cb=pg;_.yd=kw+'Element';_.xd=18;function ug(a){return ee(Ae(this,qg),a);}
function vg(){return fe(Ae(this,qg));}
function qg(){}
_=qg.prototype=new ce();_.ib=ug;_.Cb=vg;_.yd=kw+'Event';_.xd=19;function Bg(){Bg=fw;Dg=qt(new pt());{Cg();}}
function Cg(){Bg();bh(new xg());}
var Dg;function zg(){while((Bg(),Dg).rd()>0){xe((Bg(),Dg).zb(0)).Ad();}}
function Ag(){return null;}
function xg(){}
_=xg.prototype=new Fq();_.Cc=zg;_.Dc=Ag;_.yd=kw+'Timer$1';_.xd=20;function ah(){ah=fw;ch=qt(new pt());mh=qt(new pt());{ih();}}
function bh(a){ah();rt(ch,a);}
function dh(){ah();var a,b;for(a=ch.ec();a.Bb();){b=ve(a.hc(),11);b.Cc();}}
function eh(){ah();var a,b,c,d;d=null;for(a=ch.ec();a.Bb();){b=ve(a.hc(),11);c=b.Dc();{d=c;}}return d;}
function fh(){ah();var a,b;for(a=mh.ec();a.Bb();){b=xe(a.hc());null.Ad();}}
function gh(){ah();return $doc.documentElement.scrollLeft||$doc.body.scrollLeft;}
function hh(){ah();return $doc.documentElement.scrollTop||$doc.body.scrollTop;}
function ih(){ah();__gwt_initHandlers(function(){lh();},function(){return kh();},function(){jh();$wnd.onresize=null;$wnd.onbeforeclose=null;$wnd.onclose=null;});}
function jh(){ah();var a;a=yd;{dh();}}
function kh(){ah();var a;a=yd;{return eh();}}
function lh(){ah();var a;a=yd;{fh();}}
var ch,mh;function Er(d,a,b){var c;while(a.Bb()){c=a.hc();if(b===null?c===null:b.ib(c)){return a;}}return null;}
function as(a){throw Br(new Ar(),'add');}
function bs(b){var a;a=Er(this,this.ec(),b);return a!==null;}
function cs(b){var a;a=Er(this,this.ec(),b);if(a!==null){a.dd();return true;}else{return false;}}
function Dr(){}
_=Dr.prototype=new Fq();_.ab=as;_.eb=bs;_.gd=cs;_.yd=pw+'AbstractCollection';_.xd=0;function ms(b,a){throw Br(new Ar(),'add');}
function ns(a){this.F(this.rd(),a);return true;}
function os(e){var a,b,c,d,f;if(e===this){return true;}if(!we(e,23)){return false;}f=ve(e,23);if(this.rd()!=f.rd()){return false;}c=this.ec();d=f.ec();while(c.Bb()){a=c.hc();b=d.hc();if(!(a===null?b===null:a.ib(b))){return false;}}return true;}
function ps(){var a,b,c,d;c=1;a=31;b=this.ec();while(b.Bb()){d=b.hc();c=31*c+(d===null?0:d.Cb());}return c;}
function qs(){return fs(new es(),this);}
function rs(a){throw Br(new Ar(),'remove');}
function ds(){}
_=ds.prototype=new Dr();_.F=ms;_.ab=ns;_.ib=os;_.Cb=ps;_.ec=qs;_.ed=rs;_.yd=pw+'AbstractList';_.xd=21;function yv(a){a.b=qt(new pt());return a;}
function zv(b,a){return rt(b.b,a);}
function Bv(b,a){return tt(b.b,a);}
function Cv(a){return a.b.ec();}
function Dv(a){return a.b.rd();}
function Ev(a,b){this.b.F(a,b);}
function Fv(a){return zv(this,a);}
function aw(a){return Bv(this,a);}
function bw(a){return this.b.zb(a);}
function cw(){return Cv(this);}
function dw(a){return vt(this.b,a);}
function ew(){return Dv(this);}
function xv(){}
_=xv.prototype=new ds();_.F=Ev;_.ab=Fv;_.eb=aw;_.zb=bw;_.ec=cw;_.ed=dw;_.rd=ew;_.yd=pw+'Vector';_.xd=22;_.b=null;function xh(a){yv(a);return a;}
function yh(b,a,c){if(b.a===null&&a!==null){b.a=si(new ri(),b,c);}if(a!==null){zv(b,a);}}
function Ah(e,c,d){var a,b;for(a=Cv(e);a.Bb();){b=ve(a.hc(),12);b.lc(c,d);}}
function Bh(d,c,e,f){var a,b;for(a=Cv(d);a.Bb();){b=ve(a.hc(),12);b.mc(c,e,f);}}
function Ch(e,c,d){var a,b;for(a=Cv(e);a.Bb();){b=ve(a.hc(),12);b.nc(c,d);}}
function Dh(e,c,d){var a,b;for(a=Cv(e);a.Bb();){b=ve(a.hc(),12);b.oc(c,d);}}
function Eh(d,c,e,f){var a,b;for(a=Cv(d);a.Bb();){b=ve(a.hc(),12);b.pc(c,e,f);}}
function Fh(e,c,d){var a,b;for(a=Cv(e);a.Bb();){b=ve(a.hc(),12);b.qc(c,d);}}
function ai(d,c,e,f){var a,b;for(a=Cv(d);a.Bb();){b=ve(a.hc(),12);b.rc(c,e,f);}}
function wh(){}
_=wh.prototype=new xv();_.yd=lw+'DragListenerCollection';_.xd=23;_.a=null;function ji(a){yv(a);return a;}
function ki(b,a,c){if(a!==null){b.a=c;if(Dv(b)==0){Fi(b);}zv(b,a);}}
function mi(e,c,d){var a,b;for(a=Cv(e);a.Bb();){b=ve(a.hc(),13);b.vc(c,d);}}
function ni(e,c,d){var a,b;for(a=Cv(e);a.Bb();){b=ve(a.hc(),13);b.sc(c,d);}}
function oi(e,c,d){var a,b;for(a=Cv(e);a.Bb();){b=ve(a.hc(),13);b.tc(c,d);}}
function pi(e,c,d){var a,b;for(a=Cv(e);a.Bb();){b=ve(a.hc(),13);b.uc(c,d);}}
function ii(){}
_=ii.prototype=new xv();_.yd=lw+'DropListenerCollection';_.xd=24;_.a=null;function si(c,b,a){c.f=b;if(we(a,15)){ve(a,15).E(c);if(jj===null){jj=bv(new gu());}jj.Ec(a,c);}if(bj===null){bj=yv(new xv());}return c;}
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
function Ei(d,c){var a,b;for(b=Cv(c);b.Bb();){a=ve(b.hc(),6).a.h;fg(a,'startWidth',ij(a));fg(a,'startHeight',fj(a));fg(a,'startLeft',vf(a));fg(a,'startTop',wf(a));}}
function Fi(a){if(bj===null){bj=yv(new xv());}zv(bj,a);}
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
function nj(f,g,h){var a,c,d,e;try{if(this.m&&this.d!==null&&this.e!==null){eg(this.e.h);d=this.d.h;if(this.i){this.n=vf(d)+this.o;this.q=wf(d)+this.o;this.p=this.n+ij(d)-this.o;this.c=this.q+fj(d)-this.o;}Eh(this.f,this.e,g,h);if(this.j===null&& !this.r){for(e=Cv(bj);e.Bb();){this.k=ve(e.hc(),6);c=this.k.a;if(aj(this.n,this.p,this.q,this.c,c)&&this.d!==c){this.h=true;this.j=c;if(this.j!==null){Ch(this.f,this.e,this.j);ni(this.k,this.j,this.e);}break;}}}if(this.j!==null&&this.h){if(aj(this.n,this.p,this.q,this.c,this.j)){Fh(this.f,this.e,this.j);pi(this.k,this.j,this.e);}else{Dh(this.f,this.e,this.j);oi(this.k,this.j,this.e);this.j=null;}}if(this.g){pj(this.d,g+gj(d)+this.a-this.s,h+hj(d)+this.b-this.t);}if(this.r){Ei(this,bj);}this.r=false;}}catch(a){a=De(a);if(we(a,16)){a;ui(this,g,h);}else throw a;}}
function oj(a,b,c){wi(this,a,b,c);}
function pj(d,b,c){var a;a=d.h;kg(a,'position','absolute');kg(a,'left',b+'px');kg(a,'top',c+'px');}
function ri(){}
_=ri.prototype=new Fq();_.xc=kj;_.yc=lj;_.zc=mj;_.Ac=nj;_.Bc=oj;_.yd=lw+'MouseDragGestureRecognizer';_.xd=25;_.a=0;_.b=0;_.c=0;_.d=null;_.e=null;_.f=null;_.g=true;_.h=false;_.i=true;_.j=null;_.k=null;_.l=true;_.m=false;_.n=0;_.o=0;_.p=0;_.q=0;_.r=true;_.s=0;_.t=0;var bj=null,jj=null;function jk(b,a){b.appendChild(a);}
function kk(a){return $doc.createElement(a);}
function lk(b,a){b.cancelBubble=a;}
function mk(a){switch(a.type){case 'blur':return 4096;case 'change':return 1024;case 'click':return 1;case 'dblclick':return 2;case 'focus':return 2048;case 'keydown':return 128;case 'keypress':return 256;case 'keyup':return 512;case 'load':return 32768;case 'losecapture':return 8192;case 'mousedown':return 4;case 'mousemove':return 64;case 'mouseout':return 32;case 'mouseover':return 16;case 'mouseup':return 8;case 'scroll':return 16384;case 'error':return 65536;case 'mousewheel':return 131072;case 'DOMMouseScroll':return 131072;}}
function nk(b){var a=$doc.getElementById(b);return a||null;}
function pk(a,b){var c=a[b];return c==null?null:String(c);}
function ok(a,c){var b=parseInt(a[c]);if(!b){return 0;}return b;}
function qk(a){return a.__eventBits||0;}
function rk(b,a){b.removeChild(a);}
function tk(a,b,c){a[b]=c;}
function sk(a,b,c){a[b]=c;}
function uk(a,b){a.__listener=b;}
function vk(b,a,c){b.style[a]=c;}
function sj(){}
_=sj.prototype=new Fq();_.bb=jk;_.fb=kk;_.jb=lk;_.ob=mk;_.sb=nk;_.ub=pk;_.tb=ok;_.vb=qk;_.bd=rk;_.ld=tk;_.kd=sk;_.md=uk;_.pd=vk;_.yd=mw+'DOMImpl';_.xd=0;function vj(a,b){if(!a&& !b)return true;else if(!a|| !b)return false;return a.uniqueID==b.uniqueID;}
function wj(a){return a.clientX-Dj();}
function xj(a){return a.clientY-Ej();}
function yj(a){return a.fromElement?a.fromElement:null;}
function zj(a){return a.toElement||null;}
function Aj(a){a.returnValue=false;}
function Bj(a){var b=$doc.documentElement.scrollLeft||$doc.body.scrollLeft;return a.getBoundingClientRect().left+b-Dj();}
function Cj(a){var b=$doc.documentElement.scrollTop||$doc.body.scrollTop;return a.getBoundingClientRect().top+b-Ej();}
function Dj(){return $doc.documentElement.clientLeft||$doc.body.clientLeft;}
function Ej(){return $doc.documentElement.clientTop||$doc.body.clientTop;}
function Fj(a){var b=a.parentElement;return b||null;}
function ak(){try{$doc.execCommand('BackgroundImageCache',false,true);}catch(a){}this.a={};$wnd.__dispatchEvent=function(){if($wnd.event.returnValue==null){$wnd.event.returnValue=true;if(!Ff($wnd.event))return;}if(this.__listener)nf($wnd.event,this,this.__listener);};$wnd.__dispatchDblClickEvent=function(){var a=$doc.createEventObject();this.fireEvent('onclick',a);if(this.__eventBits&2)$wnd.__dispatchEvent.call(this);};$doc.body.onclick=$doc.body.onmousedown=$doc.body.onmouseup=$doc.body.onmousemove=$doc.body.onmousewheel=$doc.body.onkeydown=$doc.body.onkeypress=$doc.body.onkeyup=$doc.body.onfocus=$doc.body.onblur=$doc.body.ondblclick=$wnd.__dispatchEvent;}
function bk(c,a,b){if(b>=c.children.length)c.appendChild(a);else c.insertBefore(a,c.children[b]);}
function ck(b,a){while(a){if(b.uniqueID==a.uniqueID)return true;a=a.parentElement;}return false;}
function dk(a){a.releaseCapture();}
function ek(a){a.setCapture();}
function fk(g,k){var i=this.a;var j=i[k];if(j){j.__kids.push(g);g.__targetSrc=k;return;}g.src=k;if(g.complete){return;}var h=g.__kids=[];i[k]=g;var e=g.onload,d=g.onerror,c=g.onabort;g.onload=function(){f('onload');};g.onerror=function(){f('onerror');};g.onabort=function(){f('onabort');};function f(b){g.onload=e;g.onerror=d;g.onabort=c;delete i[k];window.setTimeout(function(){for(var a=0;a<h.length;++a){h[a].src=g.src;h[a].__targetSrc=null;}},0);if(g[b]){g[b]();}}
}
function gk(a,b){if(!b)b='';a.innerText=b;}
function hk(b,a){b.__eventBits=a;b.onclick=a&1?$wnd.__dispatchEvent:null;b.ondblclick=a&(1|2)?$wnd.__dispatchDblClickEvent:null;b.onmousedown=a&4?$wnd.__dispatchEvent:null;b.onmouseup=a&8?$wnd.__dispatchEvent:null;b.onmouseover=a&16?$wnd.__dispatchEvent:null;b.onmouseout=a&32?$wnd.__dispatchEvent:null;b.onmousemove=a&64?$wnd.__dispatchEvent:null;b.onkeydown=a&128?$wnd.__dispatchEvent:null;b.onkeypress=a&256?$wnd.__dispatchEvent:null;b.onkeyup=a&512?$wnd.__dispatchEvent:null;b.onchange=a&1024?$wnd.__dispatchEvent:null;b.onfocus=a&2048?$wnd.__dispatchEvent:null;b.onblur=a&4096?$wnd.__dispatchEvent:null;b.onlosecapture=a&8192?$wnd.__dispatchEvent:null;b.onscroll=a&16384?$wnd.__dispatchEvent:null;b.onload=a&32768?$wnd.__dispatchEvent:null;b.onerror=a&65536?$wnd.__dispatchEvent:null;b.onmousewheel=a&131072?$wnd.__dispatchEvent:null;}
function tj(){}
_=tj.prototype=new sj();_.cb=vj;_.kb=wj;_.lb=xj;_.mb=yj;_.nb=zj;_.pb=Aj;_.qb=Bj;_.rb=Cj;_.xb=Fj;_.bc=ak;_.cc=bk;_.dc=ck;_.ad=dk;_.jd=ek;_.nd=fk;_.od=gk;_.qd=hk;_.yd=mw+'DOMImplIE6';_.xd=0;_.a=null;function vo(a){return yf(a.h,'offsetHeight');}
function wo(a){return yf(a.h,'offsetWidth');}
function xo(c){var a,b;a=Fo(c.h);b=a.Db(32);if(b>=0){return a.td(0,b);}return a;}
function yo(b,a){if(b.h!==null){b.hd(b.h,a);}b.h=a;}
function zo(b,a){kg(b.h,'height',a);}
function Ao(b,c,a){if(c>=0){Do(b,c+'px');}if(a>=0){zo(b,a+'px');}}
function Bo(b,a){bp(b.h,a);}
function Co(a,b){cp(a.h,b);}
function Do(a,b){kg(a.h,'width',b);}
function Eo(b,a){lg(b.h,a|Af(b.h));}
function Fo(b){var a;a=zf(b,'className').ud();if(ir('',a)){a='gwt-nostyle';gg(b,'className',a);}return a;}
function ap(b,a){var c=b.parentNode;if(!c){return;}c.insertBefore(a,b);c.removeChild(b);}
function bp(a,b){if(a===null){throw er(new dr(),'Null widget handle. If you are creating a composite, ensure that initWidget() has been called.');}b=b.ud();if(b.gc()==0){throw rq(new qq(),'Style names cannot be empty');}Fo(a);dp(a,b);}
function cp(a,b){a.style.display=b?'':'none';}
function dp(c,f){var a=c.className;var h=a.indexOf(' ');if(h>=0){var g=a.substring(0,h);var e='',b=0;while(true){var d=a.indexOf(g,b);if(d== -1){e+=a.substring(b);break;}e+=a.substring(b,d);e+=f;b=d+g.length;}c.className=e;}else{c.className=f;}}
function to(){}
_=to.prototype=new Fq();_.hd=ap;_.yd=nw+'UIObject';_.xd=0;_.h=null;function Dp(a){if(a.f){throw uq(new tq(),"Should only call onAttach when the widget is detached from the browser's document");}a.f=true;hg(a.h,a);}
function Ep(a){if(!a.f){throw uq(new tq(),"Should only call onDetach when the widget is attached to the browser's document");}{a.f=false;hg(a.h,null);}}
function Fp(a){if(a.g!==null){a.g.fd(a);}else if(a.g!==null){throw uq(new tq(),"This widget's parent does not implement HasWidgets");}}
function aq(b,a){if(b.f){hg(b.h,null);}yo(b,a);if(b.f){hg(a,b);}}
function bq(c,b){var a;a=c.g;c.g=b;if(b===null){if(a!==null&&a.f){c.kc();}}else if(b.f){c.ic();}}
function cq(){Dp(this);}
function dq(a){}
function eq(){Ep(this);}
function mp(){}
_=mp.prototype=new to();_.ic=cq;_.jc=dq;_.kc=eq;_.yd=nw+'Widget';_.xd=26;_.f=false;_.g=null;function dn(b,c,a){Fp(c);if(a!==null){df(a,c.h);}bq(c,b);}
function fn(b,c){var a;if(c.g!==b){throw rq(new qq(),'w is not a child of this panel');}a=c.h;bq(c,null);bg(Bf(a),a);}
function gn(c){var a,b;Dp(c);for(b=c.ec();b.Bb();){a=ve(b.hc(),18);a.ic();}}
function hn(c){var a,b;Ep(c);for(b=c.ec();b.Bb();){a=ve(b.hc(),18);a.kc();}}
function jn(a){fn(this,a);}
function kn(){gn(this);}
function ln(){hn(this);}
function cn(){}
_=cn.prototype=new mp();_.gb=jn;_.ic=kn;_.kc=ln;_.yd=nw+'Panel';_.xd=27;function fl(a){a.e=up(new np(),a);}
function gl(a){fl(a);return a;}
function hl(b,c,a){return kl(b,c,a,b.e.c);}
function jl(b,a){return xp(b.e,a);}
function kl(d,e,b,a){var c;if(a<0||a>d.e.c){throw new wq();}c=jl(d,e);if(c==(-1)){Fp(e);}else{d.fd(e);if(c<a){a--;}}dn(d,e,b);yp(d.e,e,a);return a;}
function ll(a,b){if(!wp(a.e,b)){return false;}a.gb(b);Bp(a.e,b);return true;}
function ml(){return zp(this.e);}
function nl(a){return ll(this,a);}
function el(){}
_=el.prototype=new cn();_.ec=ml;_.fd=nl;_.yd=nw+'ComplexPanel';_.xd=28;function xk(a){gl(a);aq(a,ff());kg(a.h,'position','relative');kg(a.h,'overflow','hidden');return a;}
function yk(a,b){hl(a,b,a.h);}
function zk(b,d,a,c){Fp(d);Bk(b,d,a,c);yk(b,d);}
function Bk(c,e,b,d){var a;a=e.h;if(b==(-1)&&d==(-1)){Ck(a);}else{kg(a,'position','absolute');kg(a,'left',b+'px');kg(a,'top',d+'px');}}
function Ck(a){kg(a,'left','');kg(a,'top','');kg(a,'position','static');}
function Dk(a){fn(this,a);Ck(a.h);}
function wk(){}
_=wk.prototype=new el();_.gb=Dk;_.yd=nw+'AbsolutePanel';_.xd=29;function Fk(a){gl(a);a.d=lf();a.c=hf();df(a.d,a.c);aq(a,a.d);return a;}
function bl(a,b){if(b.g!==a){return null;}return Bf(b.h);}
function cl(c,d,a){var b;b=bl(c,d);if(b!==null){gg(b,'align',a.a);}}
function dl(c,d,a){var b;b=bl(c,d);if(b!==null){kg(b,'verticalAlign',a.a);}}
function Ek(){}
_=Ek.prototype=new el();_.yd=nw+'CellPanel';_.xd=30;_.c=null;_.d=null;function sl(){sl=fw;tl=ql(new pl(),'center');ul=ql(new pl(),'left');ql(new pl(),'right');}
var tl,ul;function ql(b,a){b.a=a;return b;}
function pl(){}
_=pl.prototype=new Fq();_.yd=nw+'HasHorizontalAlignment$HorizontalAlignmentConstant';_.xd=0;_.a=null;function zl(){zl=fw;xl(new wl(),'bottom');xl(new wl(),'middle');Al=xl(new wl(),'top');}
var Al;function xl(a,b){a.a=b;return a;}
function wl(){}
_=wl.prototype=new Fq();_.yd=nw+'HasVerticalAlignment$VerticalAlignmentConstant';_.xd=0;_.a=null;function gm(){gm=fw;bv(new gu());}
function fm(a,b){gm();cm(new am(),a,b);Bo(a,'gwt-Image');return a;}
function hm(a){if(this.a===null){this.a=xh(new wh());}yh(this.a,a,this);}
function im(a){if(this.b===null){this.b=ji(new ii());}ki(this.b,a,this);}
function jm(a){if(this.c===null){this.c=zm(new ym());}rt(this.c,a);}
function km(a){switch(tf(a)){case 1:{break;}case 4:case 8:case 64:case 16:case 32:{if(this.c!==null){Dm(this.c,this,a);}break;}case 131072:break;case 32768:{break;}case 65536:{break;}}}
function Dl(){}
_=Dl.prototype=new mp();_.C=hm;_.D=im;_.E=jm;_.jc=km;_.yd=nw+'Image';_.xd=31;_.a=null;_.b=null;_.c=null;function El(){}
_=El.prototype=new Fq();_.yd=nw+'Image$State';_.xd=0;function bm(b,a){aq(a,gf());Eo(a,229501);return b;}
function cm(b,a,c){bm(b,a);em(b,a,c);return b;}
function em(b,a,c){ig(a.h,c);}
function am(){}
_=am.prototype=new El();_.yd=nw+'Image$UnclippedState';_.xd=0;function nm(a){aq(a,ff());Eo(a,131197);Bo(a,'gwt-Label');return a;}
function om(b,a){nm(b);tm(b,a);return b;}
function pm(b,a){if(b.a===null){b.a=xh(new wh());}yh(b.a,a,b);}
function qm(b,a){if(b.b===null){b.b=ji(new ii());}ki(b.b,a,b);}
function sm(b,a){kg(b.h,'textAlign',a.a);}
function tm(b,a){jg(b.h,a);}
function um(a){pm(this,a);}
function vm(a){qm(this,a);}
function wm(a){if(this.c===null){this.c=zm(new ym());}rt(this.c,a);}
function xm(a){switch(tf(a)){case 1:break;case 4:case 8:case 64:case 16:case 32:if(this.c!==null){Dm(this.c,this,a);}break;case 131072:break;}}
function mm(){}
_=mm.prototype=new mp();_.C=um;_.D=vm;_.E=wm;_.jc=xm;_.yd=nw+'Label';_.xd=32;_.a=null;_.b=null;_.c=null;function qt(a){a.ac();return a;}
function rt(b,a){b.F(b.rd(),a);return true;}
function tt(b,a){return ut(b,a)!=(-1);}
function ut(b,a){return b.Eb(a,0);}
function vt(c,a){var b;b=c.zb(a);c.cd(a,a+1);return b;}
function wt(c,d){var a=this.a;var b=this.b;var e=this.c;if(c+e==b){a[b]=d;this.b++;return;}if(c==0){a[--this.c]=d;return;}this.vd(c);a.splice(c+e,0,d);this.b++;}
function xt(a){return rt(this,a);}
function yt(a){return tt(this,a);}
function zt(a,b){return a===null?b===null:a.ib(b);}
function At(a){this.wd(a);var b=this.c;return this.a[a+b];}
function Bt(e,d){var a=this.a;var f=this.c;var c=d+f;var b=this.b;while(c<b){if(zt(a[c],e)){return c-f;}++c;}return -1;}
function Ct(a){throw xq(new wq(),'Size: '+this.rd()+' Index: '+a);}
function Dt(){this.a=new Array();var a=1000000000;this.c=a;this.b=a;}
function Ft(a){return vt(this,a);}
function au(b){var a;a=ut(this,b);if(a==(-1)){return false;}vt(this,a);return true;}
function Et(c,g){this.vd(c);this.vd(g);var a=this.a;var f=this.c;var b=this.b;if(c==0){for(var d=f;d<g+f;d++){delete a[d];}this.c+=g-c;}else if(g+f==b){for(var d=c+f;d<b;d++){delete a[d];}this.b=c+f;}else{var e=g-c;a.splice(c+f,e);this.b-=e;}}
function bu(){return this.b-this.c;}
function du(b){var a=this.b;var c=this.c;if(b<0||b+c>=a){this.Fb(b);}}
function cu(b){var a=this.b;var c=this.c;if(b<0||b+c>a){this.Fb(b);}}
function pt(){}
_=pt.prototype=new ds();_.F=wt;_.ab=xt;_.eb=yt;_.zb=At;_.Eb=Bt;_.Fb=Ct;_.ac=Dt;_.ed=Ft;_.gd=au;_.cd=Et;_.rd=bu;_.wd=du;_.vd=cu;_.yd=pw+'ArrayList';_.xd=33;_.a=null;_.b=0;_.c=0;function zm(a){qt(a);return a;}
function Bm(d,c,e,f){var a,b;for(a=d.ec();a.Bb();){b=ve(a.hc(),17);b.xc(c,e,f);}}
function Cm(d,c){var a,b;for(a=d.ec();a.Bb();){b=ve(a.hc(),17);b.yc(c);}}
function Dm(e,c,a){var b,d,f,g,h;d=c.h;g=pf(a)-vf(c.h)+yf(d,'scrollLeft')+gh();h=qf(a)-wf(c.h)+yf(d,'scrollTop')+hh();switch(tf(a)){case 4:Bm(e,c,g,h);break;case 8:an(e,c,g,h);break;case 64:Fm(e,c,g,h);break;case 16:b=rf(a);if(!Ef(c.h,b)){Cm(e,c);}break;case 32:f=sf(a);if(!Ef(c.h,f)){Em(e,c);}break;}}
function Em(d,c){var a,b;for(a=d.ec();a.Bb();){b=ve(a.hc(),17);b.zc(c);}}
function Fm(d,c,e,f){var a,b;for(a=d.ec();a.Bb();){b=ve(a.hc(),17);b.Ac(c,e,f);}}
function an(d,c,e,f){var a,b;for(a=d.ec();a.Bb();){b=ve(a.hc(),17);b.Bc(c,e,f);}}
function ym(){}
_=ym.prototype=new pt();_.yd=nw+'MouseListenerCollection';_.xd=34;function sn(){sn=fw;xn=bv(new gu());}
function rn(b,a){sn();xk(b);if(a===null){a=tn();}aq(b,a);gn(b);return b;}
function un(){sn();return vn(null);}
function vn(c){sn();var a,b;b=ve(xn.Ab(c),4);if(b!==null){return b;}a=null;if(c!==null){if(null===(a=xf(c))){return null;}}if(xn.a==0){wn();}xn.Ec(c,b=rn(new mn(),a));return b;}
function tn(){sn();return $doc.body;}
function wn(){sn();bh(new nn());}
function mn(){}
_=mn.prototype=new wk();_.yd=nw+'RootPanel';_.xd=35;var xn;function pn(){var a,b;for(b=ev((sn(),xn)).ec();b.Bb();){a=ve(b.hc(),4);if(a.f){hn(a);}}}
function qn(){return null;}
function nn(){}
_=nn.prototype=new Fq();_.Cc=pn;_.Dc=qn;_.yd=nw+'RootPanel$1';_.xd=36;function ho(a){io(a,ff());return a;}
function io(b,a){aq(b,a);return b;}
function ko(a,b){if(a.a===b){a.gb(b);a.a=null;return true;}return false;}
function lo(a,b){if(a.a!==null){a.gb(a.a);}if(b!==null){dn(a,b,a.h);}a.a=b;}
function mo(){return bo(new Fn(),this);}
function no(a){return ko(this,a);}
function En(){}
_=En.prototype=new cn();_.ec=mo;_.fd=no;_.yd=nw+'SimplePanel';_.xd=37;_.a=null;function zn(a){ho(a);Cn(a,false);Eo(a,16384);return a;}
function An(b,a){zn(b);lo(b,a);return b;}
function Cn(b,a){kg(b.h,'overflow',a?'scroll':'auto');}
function Dn(a){tf(a)==16384;}
function yn(){}
_=yn.prototype=new En();_.jc=Dn;_.yd=nw+'ScrollPanel';_.xd=38;function ao(a){a.a=a.c.a!==null;}
function bo(b,a){b.c=a;ao(b);return b;}
function eo(){return this.a;}
function fo(){if(!this.a||this.c.a===null){throw new tv();}this.a=false;return this.b=this.c.a;}
function go(){if(this.b!==null){ko(this.c,this.b);}}
function Fn(){}
_=Fn.prototype=new Fq();_.Bb=eo;_.hc=fo;_.dd=go;_.yd=nw+'SimplePanel$1';_.xd=0;_.b=null;function fp(a){a.a=(sl(),ul);a.b=(zl(),Al);}
function gp(a){Fk(a);fp(a);gg(a.d,'cellSpacing','0');gg(a.d,'cellPadding','0');return a;}
function hp(a,b){jp(a,b,a.e.c);}
function jp(c,e,a){var b,d;d=kf();b=jf();a=kl(c,e,b,a);df(d,b);Df(c.c,d,a);cl(c,e,c.a);dl(c,e,c.b);}
function kp(b,a){b.a=a;}
function lp(c){var a,b;if(c.g!==this){return false;}a=Bf(c.h);b=Bf(a);bg(this.c,b);ll(this,c);return true;}
function ep(){}
_=ep.prototype=new Ek();_.fd=lp;_.yd=nw+'VerticalPanel';_.xd=39;function up(b,a){b.b=a;b.a=qe('[Lcom.google.gwt.user.client.ui.Widget;',[0],[18],[4],null);return b;}
function wp(a,b){return xp(a,b)!=(-1);}
function xp(b,c){var a;for(a=0;a<b.c;++a){if(b.a[a]===c){return a;}}return (-1);}
function yp(d,e,a){var b,c;if(a<0||a>d.c){throw new wq();}if(d.c==d.a.a){c=qe('[Lcom.google.gwt.user.client.ui.Widget;',[0],[18],[d.a.a*2],null);for(b=0;b<d.a.a;++b){re(c,b,d.a[b]);}d.a=c;}++d.c;for(b=d.c-1;b>a;--b){re(d.a,b,d.a[b-1]);}re(d.a,a,e);}
function zp(a){return pp(new op(),a);}
function Ap(c,b){var a;if(b<0||b>=c.c){throw new wq();}--c.c;for(a=b;a<c.c;++a){re(c.a,a,c.a[a+1]);}re(c.a,c.c,null);}
function Bp(b,c){var a;a=xp(b,c);if(a==(-1)){throw new tv();}Ap(b,a);}
function np(){}
_=np.prototype=new Fq();_.yd=nw+'WidgetCollection';_.xd=0;_.a=null;_.b=null;_.c=0;function pp(b,a){b.b=a;return b;}
function rp(){return this.a<this.b.c-1;}
function sp(){if(this.a>=this.b.c){throw new tv();}return this.b.a[++this.a];}
function tp(){if(this.a<0||this.a>=this.b.c){throw new tq();}this.b.b.fd(this.b.a[this.a--]);}
function op(){}
_=op.prototype=new Fq();_.Bb=rp;_.hc=sp;_.dd=tp;_.yd=nw+'WidgetCollection$WidgetIterator';_.xd=0;_.a=(-1);function gq(){}
_=gq.prototype=new dr();_.yd=ow+'ArrayStoreException';_.xd=40;function jq(){}
_=jq.prototype=new dr();_.yd=ow+'ClassCastException';_.xd=41;function rq(b,a){er(b,a);return b;}
function qq(){}
_=qq.prototype=new dr();_.yd=ow+'IllegalArgumentException';_.xd=42;function uq(b,a){er(b,a);return b;}
function tq(){}
_=tq.prototype=new dr();_.yd=ow+'IllegalStateException';_.xd=43;function xq(b,a){er(b,a);return b;}
function wq(){}
_=wq.prototype=new dr();_.yd=ow+'IndexOutOfBoundsException';_.xd=44;function Bq(a,b){return a>b?a:b;}
function Cq(a,b){return a<b?a:b;}
function Dq(){}
_=Dq.prototype=new dr();_.yd=ow+'NegativeArraySizeException';_.xd=45;function hr(){hr=fw;{lr();}}
function ir(b,a){if(!we(a,22))return false;return jr(b,a);}
function jr(a,b){hr();return a.toString()==b;}
function kr(d){hr();var a=nr[':'+d];if(a){return a;}a=0;var c=d.length;var b=c;while(--b>=0){a<<=1;a+=d.charCodeAt(b);}nr[':'+d]=a;return a;}
function lr(){hr();nr={};}
function mr(a){return ir(this,a);}
function or(){return kr(this);}
function pr(a){return this.indexOf(String.fromCharCode(a));}
function qr(){return this.length;}
function rr(a){return this.substr(a,this.length-a);}
function sr(a,b){return this.substr(a,b-a);}
function tr(){var a=this.replace(/^(\s*)/,'');var b=a.replace(/\s*$/,'');return b;}
_=String.prototype;_.ib=mr;_.Cb=or;_.Db=pr;_.gc=qr;_.sd=rr;_.td=sr;_.ud=tr;_.yd=ow+'String';_.xd=46;var nr=null;function wr(a){return Cd(a);}
function Br(b,a){er(b,a);return b;}
function Ar(){}
_=Ar.prototype=new dr();_.yd=ow+'UnsupportedOperationException';_.xd=47;function fs(b,a){b.c=a;return b;}
function hs(a){return a.a<a.c.rd();}
function is(){return hs(this);}
function js(){if(!hs(this)){throw new tv();}return this.c.zb(this.b=this.a++);}
function ks(){if(this.b<0){throw new tq();}this.c.ed(this.b);this.a=this.b;this.b=(-1);}
function es(){}
_=es.prototype=new Fq();_.Bb=is;_.hc=js;_.dd=ks;_.yd=pw+'AbstractList$IteratorImpl';_.xd=0;_.a=0;_.b=(-1);function dt(f,d,e){var a,b,c;for(b=lu(f.hb());Bu(b);){a=ve(Cu(b),25);c=a.wb();if(d===null?c===null:d.ib(c)){if(e){Du(b);}return a;}}return null;}
function et(b){var a;a=b.hb();return us(new ts(),b,a);}
function ft(a){return dt(this,a,false)!==null;}
function gt(d){var a,b,c,e,f,g,h;if(d===this){return true;}if(!we(d,24)){return false;}f=ve(d,24);c=et(this);e=f.fc();if(!mt(c,e)){return false;}for(a=ws(c);Ds(a);){b=Es(a);h=this.Ab(b);g=f.Ab(b);if(h===null?g!==null:!h.ib(g)){return false;}}return true;}
function ht(b){var a;a=dt(this,b,false);return a===null?null:a.yb();}
function it(){var a,b,c;b=0;for(c=lu(this.hb());Bu(c);){a=ve(Cu(c),25);b+=a.Cb();}return b;}
function jt(){return et(this);}
function ss(){}
_=ss.prototype=new Fq();_.db=ft;_.ib=gt;_.Ab=ht;_.Cb=it;_.fc=jt;_.yd=pw+'AbstractMap';_.xd=48;function mt(e,b){var a,c,d;if(b===e){return true;}if(!we(b,26)){return false;}c=ve(b,26);if(c.rd()!=e.rd()){return false;}for(a=c.ec();a.Bb();){d=a.hc();if(!e.eb(d)){return false;}}return true;}
function nt(a){return mt(this,a);}
function ot(){var a,b,c;a=0;for(b=this.ec();b.Bb();){c=b.hc();if(c!==null){a+=c.Cb();}}return a;}
function kt(){}
_=kt.prototype=new Dr();_.ib=nt;_.Cb=ot;_.yd=pw+'AbstractSet';_.xd=49;function us(b,a,c){b.a=a;b.b=c;return b;}
function ws(b){var a;a=lu(b.b);return Bs(new As(),b,a);}
function xs(a){return this.a.db(a);}
function ys(){return ws(this);}
function zs(){return this.b.a.a;}
function ts(){}
_=ts.prototype=new kt();_.eb=xs;_.ec=ys;_.rd=zs;_.yd=pw+'AbstractMap$1';_.xd=50;function Bs(b,a,c){b.a=c;return b;}
function Ds(a){return a.a.Bb();}
function Es(b){var a;a=ve(b.a.hc(),25);return a.wb();}
function Fs(){return Ds(this);}
function at(){return Es(this);}
function bt(){this.a.dd();}
function As(){}
_=As.prototype=new Fq();_.Bb=Fs;_.hc=at;_.dd=bt;_.yd=pw+'AbstractMap$2';_.xd=0;function bv(a){a.bc();return a;}
function cv(c,b,a){c.B(b,a,1);}
function ev(a){var b;b=qt(new pt());cv(a,b,a.b);return b;}
function fv(k,h,l){var b=0;var c=1;var a=2;var j=this.b;for(var f in h){var e=null;if(f=='null'||f.charAt(f.length-1)=='S'){var i=null;if(l!=c&&f!='null'){i=f.substring(0,f.length-1);}if(l==b){e=i;}else if(l==c){e=j[f];}else if(l==a){e=iv(i,j[f]);}k.ab(e);}else{var d=j[f];for(var g in d){if(l!=a){e=d[g][l];}else{e=iv(d[g][0],d[g][1]);}k.ab(e);}}}}
function gv(a){if(we(a,22)){return ve(a,22)+'S';}else if(a===null){return 'null';}else{return null;}}
function hv(b){var a=gv(b);if(a==null){var c=kv(this,b);return c!=null;}else{return this.b[a]!==undefined;}}
function iv(a,b){return ru(new qu(),a,b);}
function jv(){return iu(new hu(),this);}
function kv(h,f){var a=0;var g=h.b;var e=f.Cb();var c=g[e];if(c!=null){for(var d in c){var b=c[d];if(b[a].ib(f)){return [e,d];}}}return null;}
function lv(g){var a=0;var b=1;var f=gv(g);if(f!=null){var d=this.b[f];if(d===undefined){return null;}else{return d;}}else{f=g.Cb();}var c=this.b[f];if(c==null){return null;}for(var e in c){if(c[e][a].ib(g)){return c[e][b];}}return null;}
function mv(){this.b=[];}
function nv(f,h){var a=0;var b=1;var g=null;var e=gv(f);if(e!=null){g=this.b[e];this.b[e]=h;if(g===undefined){this.a++;return null;}else{return g;}}else{e=f.Cb();}var c=this.b[e];if(c==null){c=[];this.b[e]=c;}for(var d in c){if(c[d][a].ib(f)){g=c[d][b];c[d]=[f,h];return g;}}this.a++;c[c.length]=[f,h];return null;}
function ov(e){var a=1;var g=this.b;var d=gv(e);var h=null;if(d!=null){h=g[d];delete g[d];if(h!==undefined){this.a--;return h;}else{return null;}}var f=kv(this,e);if(f==null){return null;}this.a--;var b=f[0];var c=f[1];var h=g[b][c][a];g[b].splice(c,1);if(g[b].length>0){return h;}delete g[b];return h;}
function gu(){}
_=gu.prototype=new ss();_.B=fv;_.db=hv;_.hb=jv;_.Ab=lv;_.bc=mv;_.Ec=nv;_.gd=ov;_.yd=pw+'HashMap';_.xd=51;_.a=0;_.b=null;function iu(b,a){b.a=a;return b;}
function ku(e,b){var a,c,d,f;a=ve(b,25);if(a!==null){d=a.wb();f=a.yb();if(f!==null||e.a.db(d)){c=e.a.Ab(d);if(f===null){return c===null;}else{return f.ib(c);}}}return false;}
function lu(a){return zu(new yu(),a.a);}
function mu(a){return ku(this,a);}
function nu(){return lu(this);}
function ou(a){var b;if(ku(this,a)){b=ve(a,25).wb();this.a.gd(b);return true;}else{return false;}}
function pu(){return this.a.a;}
function hu(){}
_=hu.prototype=new kt();_.eb=mu;_.ec=nu;_.gd=ou;_.rd=pu;_.yd=pw+'HashMap$1';_.xd=52;function ru(b,a,c){b.a=a;b.b=c;return b;}
function tu(c,a,b){if(a===b){return true;}else if(a===null){return false;}else{return a.ib(b);}}
function uu(a){var b;if(we(a,25)){b=ve(a,25);if(tu(this,this.a,b.wb())&&tu(this,this.b,b.yb())){return true;}}return false;}
function vu(){return this.a;}
function wu(){return this.b;}
function xu(){var a,b;a=0;b=0;if(this.a!==null){a=this.a.Cb();}if(this.b!==null){b=this.b.Cb();}return a^b;}
function qu(){}
_=qu.prototype=new Fq();_.ib=uu;_.wb=vu;_.yb=wu;_.Cb=xu;_.yd=pw+'HashMap$EntryImpl';_.xd=53;_.a=null;_.b=null;function zu(d,c){var a,b;d.c=c;a=qt(new pt());d.c.B(a,d.c.b,2);b=a.ec();d.a=b;return d;}
function Bu(a){return a.a.Bb();}
function Cu(a){a.b=a.a.hc();return a.b;}
function Du(a){if(a.b===null){throw uq(new tq(),'Must call next() before remove().');}else{a.a.dd();a.c.gd(ve(a.b,25).wb());}}
function Eu(){return Bu(this);}
function Fu(){return Cu(this);}
function av(){Du(this);}
function yu(){}
_=yu.prototype=new Fq();_.Bb=Eu;_.hc=Fu;_.dd=av;_.yd=pw+'HashMap$EntrySetImplIterator';_.xd=0;_.a=null;_.b=null;function tv(){}
_=tv.prototype=new dr();_.yd=pw+'NoSuchElementException';_.xd=54;function fq(){hb(fb(new y()));}
function gwtOnLoad(b,d,c){$moduleName=d;$moduleBase=c;if(b)try{fq();}catch(a){b(d);}else{fq();}}
var ze=[{},{12:1,13:1},{13:1},{13:1},{13:1},{13:1},{13:1},{9:1},{12:1},{12:1},{12:1},{13:1},{13:1},{8:1},{8:1},{8:1},{8:1,16:1},{7:1},{7:1,10:1},{7:1},{11:1},{23:1},{23:1},{23:1},{6:1,23:1},{14:1,17:1},{18:1,19:1,20:1,21:1},{18:1,19:1,20:1,21:1},{18:1,19:1,20:1,21:1},{3:1,18:1,19:1,20:1,21:1},{18:1,19:1,20:1,21:1},{1:1,5:1,15:1,18:1,19:1,20:1,21:1},{1:1,5:1,15:1,18:1,19:1,20:1,21:1},{23:1},{23:1},{3:1,4:1,18:1,19:1,20:1,21:1},{11:1},{18:1,19:1,20:1,21:1},{18:1,19:1,20:1,21:1},{2:1,18:1,19:1,20:1,21:1},{8:1},{8:1},{8:1},{8:1},{8:1},{8:1},{22:1},{8:1},{24:1},{26:1},{26:1},{24:1},{26:1},{25:1},{8:1}];if (com_alex_gorisse_DragMove14) {  var __gwt_initHandlers = com_alex_gorisse_DragMove14.__gwt_initHandlers;  com_alex_gorisse_DragMove14.onScriptLoad(gwtOnLoad);}})();