/*! (C) WebReflection Mit Style License */function JPEGEncoder(e){function t(e){var t=[16,11,10,16,24,40,51,61,12,12,14,19,26,58,60,55,14,13,16,24,40,57,69,56,14,17,22,29,51,87,80,62,18,22,37,56,68,109,103,77,24,35,55,64,81,104,113,92,49,64,78,87,103,121,120,101,72,92,95,98,112,100,103,99];for(var n=0;n<64;n++){var r=E((t[n]*e+50)/100);r<1?r=1:r>255&&(r=255),S[z[n]]=r}var i=[17,18,24,47,99,99,99,99,18,21,26,66,99,99,99,99,24,26,56,99,99,99,99,99,47,66,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99];for(var s=0;s<64;s++){var o=E((i[s]*e+50)/100);o<1?o=1:o>255&&(o=255),x[z[s]]=o}var u=[1,1.387039845,1.306562965,1.175875602,1,.785694958,.5411961,.275899379],a=0;for(var f=0;f<8;f++)for(var l=0;l<8;l++)T[a]=1/(S[z[a]]*u[f]*u[l]*8),N[a]=1/(x[z[a]]*u[f]*u[l]*8),a++}function n(e,t){var n=0,r=0,i=new Array;for(var s=1;s<=16;s++){for(var o=1;o<=e[s];o++)i[t[r]]=[],i[t[r]][0]=n,i[t[r]][1]=s,r++,n++;n*=2}return i}function r(){C=n(W,X),k=n(J,K),L=n(V,$),A=n(Q,G)}function i(){var e=1,t=2;for(var n=1;n<=15;n++){for(var r=e;r<t;r++)M[32767+r]=n,O[32767+r]=[],O[32767+r][1]=n,O[32767+r][0]=r;for(var i=-(t-1);i<=-e;i++)M[32767+i]=n,O[32767+i]=[],O[32767+i][1]=n,O[32767+i][0]=t-1+i;e<<=1,t<<=1}}function s(){for(var e=0;e<256;e++)R[e]=19595*e,R[e+256>>0]=38470*e,R[e+512>>0]=7471*e+32768,R[e+768>>0]=-11059*e,R[e+1024>>0]=-21709*e,R[e+1280>>0]=32768*e+8421375,R[e+1536>>0]=-27439*e,R[e+1792>>0]=-5329*e}function o(e){var t=e[0],n=e[1]-1;while(n>=0)t&1<<n&&(H|=1<<B),n--,B--,B<0&&(H==255?(u(255),u(0)):u(H),B=7,H=0)}function u(e){P.push(q[e])}function a(e){u(e>>8&255),u(e&255)}function f(e,t){var n,r,i,s,o,u,a,f,l=0,c;const h=8,p=64;for(c=0;c<h;++c){n=e[l],r=e[l+1],i=e[l+2],s=e[l+3],o=e[l+4],u=e[l+5],a=e[l+6],f=e[l+7];var d=n+f,v=n-f,m=r+a,g=r-a,y=i+u,b=i-u,w=s+o,E=s-o,S=d+w,x=d-w,T=m+y,N=m-y;e[l]=S+T,e[l+4]=S-T;var C=(N+x)*.707106781;e[l+2]=x+C,e[l+6]=x-C,S=E+b,T=b+g,N=g+v;var k=(S-N)*.382683433,L=.5411961*S+k,A=1.306562965*N+k,O=T*.707106781,M=v+O,D=v-O;e[l+5]=D+L,e[l+3]=D-L,e[l+1]=M+A,e[l+7]=M-A,l+=8}l=0;for(c=0;c<h;++c){n=e[l],r=e[l+8],i=e[l+16],s=e[l+24],o=e[l+32],u=e[l+40],a=e[l+48],f=e[l+56];var P=n+f,H=n-f,B=r+a,j=r-a,F=i+u,I=i-u,q=s+o,R=s-o,U=P+q,z=P-q,W=B+F,X=B-F;e[l]=U+W,e[l+32]=U-W;var V=(X+z)*.707106781;e[l+16]=z+V,e[l+48]=z-V,U=R+I,W=I+j,X=j+H;var $=(U-X)*.382683433,J=.5411961*U+$,K=1.306562965*X+$,Q=W*.707106781,G=H+Q,Y=H-Q;e[l+40]=Y+J,e[l+24]=Y-J,e[l+8]=G+K,e[l+56]=G-K,l++}var Z;for(c=0;c<p;++c)Z=e[c]*t[c],_[c]=Z>0?Z+.5|0:Z-.5|0;return _}function l(){a(65504),a(16),u(74),u(70),u(73),u(70),u(0),u(1),u(1),u(0),a(1),a(1),u(0),u(0)}function c(e,t){a(65472),a(17),u(8),a(t),a(e),u(3),u(1),u(17),u(0),u(2),u(17),u(1),u(3),u(17),u(1)}function h(){a(65499),a(132),u(0);for(var e=0;e<64;e++)u(S[e]);u(1);for(var t=0;t<64;t++)u(x[t])}function p(){a(65476),a(418),u(0);for(var e=0;e<16;e++)u(W[e+1]);for(var t=0;t<=11;t++)u(X[t]);u(16);for(var n=0;n<16;n++)u(V[n+1]);for(var r=0;r<=161;r++)u($[r]);u(1);for(var i=0;i<16;i++)u(J[i+1]);for(var s=0;s<=11;s++)u(K[s]);u(17);for(var o=0;o<16;o++)u(Q[o+1]);for(var f=0;f<=161;f++)u(G[f])}function d(){a(65498),a(12),u(3),u(1),u(0),u(2),u(17),u(3),u(17),u(0),u(63),u(0)}function v(e,t,n,r,i){var s=i[0],u=i[240],a;const l=16,c=63,h=64;var p=f(e,t);for(var d=0;d<h;++d)D[z[d]]=p[d];var v=D[0]-n;n=D[0],v==0?o(r[0]):(a=32767+v,o(r[M[a]]),o(O[a]));var m=63;for(;m>0&&D[m]==0;m--);if(m==0)return o(s),n;var g=1,y;while(g<=m){var b=g;for(;D[g]==0&&g<=m;++g);var w=g-b;if(w>=l){y=w>>4;for(var E=1;E<=y;++E)o(u);w&=15}a=32767+D[g],o(i[(w<<4)+M[a]]),o(O[a]),g++}return m!=c&&o(s),n}function m(){var e=String.fromCharCode;for(var t=0;t<256;t++)q[t]=e(t)}function g(e){e<=0&&(e=1),e>100&&(e=100);if(U==e)return;var n=0;e<50?n=Math.floor(5e3/e):n=Math.floor(200-e*2),t(n),U=e,console.log("Quality set to: "+e+"%")}function y(){var t=(new Date).getTime();e||(e=50),m(),r(),i(),s(),g(e);var n=(new Date).getTime()-t;console.log("Initialization "+n+"ms")}var b=this,w=Math.round,E=Math.floor,S=new Array(64),x=new Array(64),T=new Array(64),N=new Array(64),C,k,L,A,O=new Array(65535),M=new Array(65535),_=new Array(64),D=new Array(64),P=[],H=0,B=7,j=new Array(64),F=new Array(64),I=new Array(64),q=new Array(256),R=new Array(2048),U,z=[0,1,5,6,14,15,27,28,2,4,7,13,16,26,29,42,3,8,12,17,25,30,41,43,9,11,18,24,31,40,44,53,10,19,23,32,39,45,52,54,20,22,33,38,46,51,55,60,21,34,37,47,50,56,59,61,35,36,48,49,57,58,62,63],W=[0,0,1,5,1,1,1,1,1,1,0,0,0,0,0,0,0],X=[0,1,2,3,4,5,6,7,8,9,10,11],V=[0,0,2,1,3,3,2,4,3,5,5,4,4,0,0,1,125],$=[1,2,3,0,4,17,5,18,33,49,65,6,19,81,97,7,34,113,20,50,129,145,161,8,35,66,177,193,21,82,209,240,36,51,98,114,130,9,10,22,23,24,25,26,37,38,39,40,41,42,52,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,225,226,227,228,229,230,231,232,233,234,241,242,243,244,245,246,247,248,249,250],J=[0,0,3,1,1,1,1,1,1,1,1,1,0,0,0,0,0],K=[0,1,2,3,4,5,6,7,8,9,10,11],Q=[0,0,2,1,2,4,4,3,4,7,5,4,4,0,1,2,119],G=[0,1,2,3,17,4,5,33,49,6,18,65,81,7,97,113,19,34,50,129,8,20,66,145,161,177,193,9,35,51,82,240,21,98,114,209,10,22,36,52,225,37,241,23,24,25,26,38,39,40,41,42,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,130,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,226,227,228,229,230,231,232,233,234,242,243,244,245,246,247,248,249,250];this.encode=function(e,t,n){var r=(new Date).getTime();t&&g(t),P=new Array,H=0,B=7,a(65496),l(),h(),c(e.width,e.height),p(),d();var i=0,s=0,u=0;H=0,B=7,this.encode.displayName="_encode_";var f=e.data,m=e.width,y=e.height,b=m*4,w=m*3,E,S=0,x,O,M,_,D,q,U,z;while(S<y){E=0;while(E<b){_=b*S+E,D=_,q=-1,U=0;for(z=0;z<64;z++)U=z>>3,q=(z&7)*4,D=_+U*b+q,S+U>=y&&(D-=b*(S+1+U-y)),E+q>=b&&(D-=E+q-b+4),x=f[D++],O=f[D++],M=f[D++],j[z]=(R[x]+R[O+256>>0]+R[M+512>>0]>>16)-128,F[z]=(R[x+768>>0]+R[O+1024>>0]+R[M+1280>>0]>>16)-128,I[z]=(R[x+1280>>0]+R[O+1536>>0]+R[M+1792>>0]>>16)-128;i=v(j,T,i,C,L),s=v(F,N,s,k,A),u=v(I,N,u,k,A),E+=32}S+=8}if(B>=0){var W=[];W[1]=B+1,W[0]=(1<<B+1)-1,o(W)}a(65497);if(n){var X=P.length,V=new Uint8Array(X);for(var $=0;$<X;$++)V[$]=P[$].charCodeAt();P=[];var J=(new Date).getTime()-r;return console.log("Encoding time: "+J+"ms"),V}var K="data:image/jpeg;base64,"+btoa(P.join(""));P=[];var J=(new Date).getTime()-r;return console.log("Encoding time: "+J+"ms"),K},y()}(function(e,t,n,r){"use strict";function i(e,t){for(var n=0,r=e.length;n<r;n++)v(e[n],t)}function s(e){for(var t=0,n=e.length,r;t<n;t++)r=e[t],dt(r,M[u(r)])}function o(e){return function(t){K(t)&&(v(t,e),i(t.querySelectorAll(_),e))}}function u(e){var t=e.getAttribute("is"),n=e.nodeName.toUpperCase(),r=P.call(O,t?k+t.toUpperCase():C+n);return t&&-1<r&&!a(n,t)?-1:r}function a(e,t){return-1<_.indexOf(e+'[is="'+t+'"]')}function f(e){var t=e.currentTarget,n=e.attrChange,r=e.prevValue,i=e.newValue;at&&t.attributeChangedCallback&&e.attrName!=="style"&&t.attributeChangedCallback(e.attrName,n===e[w]?null:r,n===e[S]?null:i)}function l(e){var t=o(e);return function(e){rt.push(t,e.target)}}function c(e){ut&&(ut=!1,e.currentTarget.removeEventListener(T,c)),i((e.target||t).querySelectorAll(_),e.detail===y?y:g),J&&d()}function h(e,t){var n=this;Y.call(n,e,t),ft.call(n,{target:n})}function p(e,t){X(e,t),ht?ht.observe(e,tt):(ot&&(e.setAttribute=h,e[m]=ct(e),e.addEventListener(N,ft)),e.addEventListener(x,f)),e.createdCallback&&at&&(e.created=!0,e.createdCallback(),e.created=!1)}function d(){for(var e,t=0,n=Q.length;t<n;t++)e=Q[t],D.contains(e)||(Q.splice(t,1),v(e,y))}function v(e,t){var n,r=u(e);-1<r&&(pt(e,M[r]),r=0,t===g&&!e[g]?(e[y]=!1,e[g]=!0,r=1,J&&P.call(Q,e)<0&&Q.push(e)):t===y&&!e[y]&&(e[g]=!1,e[y]=!0,r=1),r&&(n=e[t+"Callback"])&&n.call(e))}if(r in t)return;var m="__"+r+(Math.random()*1e5>>0),g="attached",y="detached",b="extends",w="ADDITION",E="MODIFICATION",S="REMOVAL",x="DOMAttrModified",T="DOMContentLoaded",N="DOMSubtreeModified",C="<",k="=",L=/^[A-Z][A-Z0-9]*(?:-[A-Z0-9]+)+$/,A=["ANNOTATION-XML","COLOR-PROFILE","FONT-FACE","FONT-FACE-SRC","FONT-FACE-URI","FONT-FACE-FORMAT","FONT-FACE-NAME","MISSING-GLYPH"],O=[],M=[],_="",D=t.documentElement,P=O.indexOf||function(e){for(var t=this.length;t--&&this[t]!==e;);return t},H=n.prototype,B=H.hasOwnProperty,j=H.isPrototypeOf,F=n.defineProperty,I=n.getOwnPropertyDescriptor,q=n.getOwnPropertyNames,R=n.getPrototypeOf,U=n.setPrototypeOf,z=!!n.__proto__,W=n.create||function vt(e){return e?(vt.prototype=e,new vt):this},X=U||(z?function(e,t){return e.__proto__=t,e}:q&&I?function(){function e(e,t){for(var n,r=q(t),i=0,s=r.length;i<s;i++)n=r[i],B.call(e,n)||F(e,n,I(t,n))}return function(t,n){do e(t,n);while((n=R(n))&&!j.call(n,t));return t}}():function(e,t){for(var n in t)e[n]=t[n];return e}),V=e.MutationObserver||e.WebKitMutationObserver,$=(e.HTMLElement||e.Element||e.Node).prototype,J=!j.call($,D),K=J?function(e){return e.nodeType===1}:function(e){return j.call($,e)},Q=J&&[],G=$.cloneNode,Y=$.setAttribute,Z=$.removeAttribute,et=t.createElement,tt=V&&{attributes:!0,characterData:!0,attributeOldValue:!0},nt=V||function(e){ot=!1,D.removeEventListener(x,nt)},rt,it=e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||e.msRequestAnimationFrame||function(e){setTimeout(e,10)},st=!1,ot=!0,ut=!0,at=!0,ft,lt,ct,ht,pt,dt;U||z?(pt=function(e,t){j.call(t,e)||p(e,t)},dt=p):(pt=function(e,t){e[m]||(e[m]=n(!0),p(e,t))},dt=pt),J?(ot=!1,function(){var e=I($,"addEventListener"),t=e.value,n=function(e){var t=new CustomEvent(x,{bubbles:!0});t.attrName=e,t.prevValue=this.getAttribute(e),t.newValue=null,t[S]=t.attrChange=2,Z.call(this,e),this.dispatchEvent(t)},r=function(e,t){var n=this.hasAttribute(e),r=n&&this.getAttribute(e),i=new CustomEvent(x,{bubbles:!0});Y.call(this,e,t),i.attrName=e,i.prevValue=n?r:null,i.newValue=t,n?i[E]=i.attrChange=1:i[w]=i.attrChange=0,this.dispatchEvent(i)},i=function(e){var t=e.currentTarget,n=t[m],r=e.propertyName,i;n.hasOwnProperty(r)&&(n=n[r],i=new CustomEvent(x,{bubbles:!0}),i.attrName=n.name,i.prevValue=n.value||null,i.newValue=n.value=t[r]||null,i.prevValue==null?i[w]=i.attrChange=0:i[E]=i.attrChange=1,t.dispatchEvent(i))};e.value=function(e,s,o){e===x&&this.attributeChangedCallback&&this.setAttribute!==r&&(this[m]={className:{name:"class",value:this.className}},this.setAttribute=r,this.removeAttribute=n,t.call(this,"propertychange",i)),t.call(this,e,s,o)},F($,"addEventListener",e)}()):V||(D.addEventListener(x,nt),D.setAttribute(m,1),D.removeAttribute(m),ot&&(ft=function(e){var t=this,n,r,i;if(t===e.target){n=t[m],t[m]=r=ct(t);for(i in r){if(!(i in n))return lt(0,t,i,n[i],r[i],w);if(r[i]!==n[i])return lt(1,t,i,n[i],r[i],E)}for(i in n)if(!(i in r))return lt(2,t,i,n[i],r[i],S)}},lt=function(e,t,n,r,i,s){var o={attrChange:e,currentTarget:t,attrName:n,prevValue:r,newValue:i};o[s]=e,f(o)},ct=function(e){for(var t,n,r={},i=e.attributes,s=0,o=i.length;s<o;s++)t=i[s],n=t.name,n!=="setAttribute"&&(r[n]=t.value);return r})),t[r]=function(e,n){v=e.toUpperCase(),st||(st=!0,V?(ht=function(e,t){function n(e,t){for(var n=0,r=e.length;n<r;t(e[n++]));}return new V(function(r){for(var i,s,o=0,u=r.length;o<u;o++)i=r[o],i.type==="childList"?(n(i.addedNodes,e),n(i.removedNodes,t)):(s=i.target,at&&s.attributeChangedCallback&&i.attributeName!=="style"&&s.attributeChangedCallback(i.attributeName,i.oldValue,s.getAttribute(i.attributeName)))})}(o(g),o(y)),ht.observe(t,{childList:!0,subtree:!0})):(rt=[],it(function m(){while(rt.length)rt.shift().call(null,rt.shift());it(m)}),t.addEventListener("DOMNodeInserted",l(g)),t.addEventListener("DOMNodeRemoved",l(y))),t.addEventListener(T,c),t.addEventListener("readystatechange",c),t.createElement=function(e,n){var r=et.apply(t,arguments),i=""+e,s=P.call(O,(n?k:C)+(n||i).toUpperCase()),o=-1<s;return n&&(r.setAttribute("is",n=n.toLowerCase()),o&&(o=a(i.toUpperCase(),n))),at=!t.createElement.innerHTMLHelper,o&&dt(r,M[s]),r},$.cloneNode=function(e){var t=G.call(this,!!e),n=u(t);return-1<n&&dt(t,M[n]),e&&s(t.querySelectorAll(_)),t});if(-2<P.call(O,k+v)+P.call(O,C+v))throw new Error("A "+e+" type is already registered");if(!L.test(v)||-1<P.call(A,v))throw new Error("The type "+e+" is invalid");var r=function(){return h?t.createElement(p,v):t.createElement(p)},f=n||H,h=B.call(f,b),p=h?n[b].toUpperCase():v,d=O.push((h?k:C)+v)-1,v;return _=_.concat(_.length?",":"",h?p+'[is="'+e.toLowerCase()+'"]':p),r.prototype=M[d]=B.call(f,"prototype")?f.prototype:W($),i(t.querySelectorAll(_),g),r}})(window,document,Object,"registerElement"),function(e){function t(e){var t=[],n=[],r=[],s=Object.is||function(e,t){return e===t?e!==0||1/e==1/t:e!=e&&t!=t},o=function(e){if(e!=e||e===0)for(var t=this.length;t--&&!s(this[t],e););else t=[].indexOf.call(this,e);return t},u=function(e,t){var n=0;return Object.create({},{next:{value:function(){if(n<e.items().length)switch(t){case"keys":return e.keys()[n++];case"values":return e.values()[n++];case"keys+values":return[].slice.call(e.items()[n++]);default:throw new TypeError("Invalid iterator type")}throw new Error("Stop Iteration")}},iterator:{value:function(){return this}},toString:{value:function(){return"[object Map Iterator]"}}})},a=function(e,i){var s=o.call(n,e);s>-1?(t[s][1]=i,r[s]=i):(t.push([e,i]),n.push(e),r.push(i))},f=function(e){if(e.length!==2)throw new TypeError("Invalid iterable passed to Map constructor");a(e[0],e[1])};if(Array.isArray(e))e.forEach(f);else if(e!==undefined)throw new TypeError("Invalid Map");return Object.create(i,{items:{value:function(){return[].slice.call(t)}},keys:{value:function(){return[].slice.call(n)}},values:{value:function(){return[].slice.call(r)}},has:{value:function(e){var t=o.call(n,e);return t>-1}},get:{value:function(e){var t=o.call(n,e);return t>-1?r[t]:undefined}},set:{value:a},size:{get:function(){return t.length}},clear:{value:function(){n.length=r.length=t.length=0}},"delete":{value:function(e){var i=o.call(n,e);return i>-1?(n.splice(i,1),r.splice(i,1),t.splice(i,1),!0):!1}},forEach:{value:function(e){function t(){try{return n.next()}catch(e){return undefined}}if(typeof e!="function")throw new TypeError("Invalid callback function given to forEach");var n=this.iterator(),r=t(),i=t();while(r!==undefined)e.apply(arguments[1],[r[1],r[0],this]),r=i,i=t()}},iterator:{value:function(){return new u(this,"keys+values")}},toString:{value:function(){return"[Object Map]"}}})}var n=e=="undefined",r=n?this:global,e=n?{}:exports,i=t.prototype;t.prototype=i=t(),r.Map=e.Map=r.Map||t}.call(this,typeof exports),function(){"use strict";function e(e){return typeof e=="function"||typeof e=="object"&&e!==null}function t(e){return typeof e=="function"}function n(e){return typeof e=="object"&&e!==null}function r(e){W=e}function i(e){X=e}function s(){var e=process.nextTick,t=process.versions.node.match(/^(?:(\d+)\.)?(?:(\d+)\.)?(\*|\d+)$/);return Array.isArray(t)&&t[1]==="0"&&t[2]==="10"&&(e=setImmediate),function(){e(l)}}function o(){return function(){z(l)}}function u(){var e=0,t=new J(l),n=document.createTextNode("");return t.observe(n,{characterData:!0}),function(){n.data=e=++e%2}}function a(){var e=new MessageChannel;return e.port1.onmessage=l,function(){e.port2.postMessage(0)}}function f(){return function(){setTimeout(l,1)}}function l(){for(var e=0;e<R;e+=2){var t=G[e],n=G[e+1];t(n),G[e]=undefined,G[e+1]=undefined}R=0}function c(){try{var e=require,t=e("vertx");return z=t.runOnLoop||t.runOnContext,o()}catch(n){return f()}}function h(){}function p(){return new TypeError("You cannot resolve a promise with itself")}function d(){return new TypeError("A promises callback cannot return that same promise.")}function v(e){try{return e.then}catch(t){return nt.error=t,nt}}function m(e,t,n,r){try{e.call(t,n,r)}catch(i){return i}}function g(e,t,n){X(function(e){var r=!1,i=m(n,t,function(n){if(r)return;r=!0,t!==n?w(e,n):S(e,n)},function(t){if(r)return;r=!0,x(e,t)},"Settle: "+(e._label||" unknown promise"));!r&&i&&(r=!0,x(e,i))},e)}function y(e,t){t._state===et?S(e,t._result):t._state===tt?x(e,t._result):T(t,undefined,function(t){w(e,t)},function(t){x(e,t)})}function b(e,n){if(n.constructor===e.constructor)y(e,n);else{var r=v(n);r===nt?x(e,nt.error):r===undefined?S(e,n):t(r)?g(e,n,r):S(e,n)}}function w(t,n){t===n?x(t,p()):e(n)?b(t,n):S(t,n)}function E(e){e._onerror&&e._onerror(e._result),N(e)}function S(e,t){if(e._state!==Z)return;e._result=t,e._state=et,e._subscribers.length!==0&&X(N,e)}function x(e,t){if(e._state!==Z)return;e._state=tt,e._result=t,X(E,e)}function T(e,t,n,r){var i=e._subscribers,s=i.length;e._onerror=null,i[s]=t,i[s+et]=n,i[s+tt]=r,s===0&&e._state&&X(N,e)}function N(e){var t=e._subscribers,n=e._state;if(t.length===0)return;var r,i,s=e._result;for(var o=0;o<t.length;o+=3)r=t[o],i=t[o+n],r?L(n,r,i,s):i(s);e._subscribers.length=0}function C(){this.error=null}function k(e,t){try{return e(t)}catch(n){return rt.error=n,rt}}function L(e,n,r,i){var s=t(r),o,u,a,f;if(s){o=k(r,i),o===rt?(f=!0,u=o.error,o=null):a=!0;if(n===o){x(n,d());return}}else o=i,a=!0;n._state===Z&&(s&&a?w(n,o):f?x(n,u):e===et?S(n,o):e===tt&&x(n,o))}function A(e,t){try{t(function(t){w(e,t)},function(t){x(e,t)})}catch(n){x(e,n)}}function O(e,t){var n=this;n._instanceConstructor=e,n.promise=new e(h),n._validateInput(t)?(n._input=t,n.length=t.length,n._remaining=t.length,n._init(),n.length===0?S(n.promise,n._result):(n.length=n.length||0,n._enumerate(),n._remaining===0&&S(n.promise,n._result))):x(n.promise,n._validationError())}function M(e){return(new it(this,e)).promise}function _(e){function t(e){w(i,e)}function n(e){x(i,e)}var r=this,i=new r(h);if(!q(e))return x(i,new TypeError("You must pass an array to race.")),i;var s=e.length;for(var o=0;i._state===Z&&o<s;o++)T(r.resolve(e[o]),undefined,t,n);return i}function D(e){var t=this;if(e&&typeof e=="object"&&e.constructor===t)return e;var n=new t(h);return w(n,e),n}function P(e){var t=this,n=new t(h);return x(n,e),n}function H(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function B(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function j(e){this._id=ft++,this._state=undefined,this._result=undefined,this._subscribers=[],h!==e&&(t(e)||H(),this instanceof j||B(),A(this,e))}function F(){var e;if(typeof global!="undefined")e=global;else if(typeof self!="undefined")e=self;else try{e=Function("return this")()}catch(t){throw new Error("polyfill failed because global object is unavailable in this environment")}var n=e.Promise;if(n&&Object.prototype.toString.call(n.resolve())==="[object Promise]"&&!n.cast)return;e.Promise=lt}var I;Array.isArray?I=Array.isArray:I=function(e){return Object.prototype.toString.call(e)==="[object Array]"};var q=I,R=0,U={}.toString,z,W,X=function(e,t){G[R]=e,G[R+1]=t,R+=2,R===2&&(W?W(l):Y())},V=typeof window!="undefined"?window:undefined,$=V||{},J=$.MutationObserver||$.WebKitMutationObserver,K=typeof process!="undefined"&&{}.toString.call(process)==="[object process]",Q=typeof Uint8ClampedArray!="undefined"&&typeof importScripts!="undefined"&&typeof MessageChannel!="undefined",G=new Array(1e3),Y;K?Y=s():J?Y=u():Q?Y=a():V===undefined&&typeof require=="function"?Y=c():Y=f();var Z=void 0,et=1,tt=2,nt=new C,rt=new C;O.prototype._validateInput=function(e){return q(e)},O.prototype._validationError=function(){return new Error("Array Methods must be provided an Array")},O.prototype._init=function(){this._result=new Array(this.length)};var it=O;O.prototype._enumerate=function(){var e=this,t=e.length,n=e.promise,r=e._input;for(var i=0;n._state===Z&&i<t;i++)e._eachEntry(r[i],i)},O.prototype._eachEntry=function(e,t){var r=this,i=r._instanceConstructor;n(e)?e.constructor===i&&e._state!==Z?(e._onerror=null,r._settledAt(e._state,t,e._result)):r._willSettleAt(i.resolve(e),t):(r._remaining--,r._result[t]=e)},O.prototype._settledAt=function(e,t,n){var r=this,i=r.promise;i._state===Z&&(r._remaining--,e===tt?x(i,n):r._result[t]=n),r._remaining===0&&S(i,r._result)},O.prototype._willSettleAt=function(e,t){var n=this;T(e,undefined,function(e){n._settledAt(et,t,e)},function(e){n._settledAt(tt,t,e)})};var st=M,ot=_,ut=D,at=P,ft=0,lt=j;j.all=st,j.race=ot,j.resolve=ut,j.reject=at,j._setScheduler=r,j._setAsap=i,j._asap=X,j.prototype={constructor:j,then:function(e,t){var n=this,r=n._state;if(r===et&&!e||r===tt&&!t)return this;var i=new this.constructor(h),s=n._result;if(r){var o=arguments[r-1];X(function(){L(r,i,o,s)})}else T(n,i,e,t);return i},"catch":function(e){return this.then(null,e)}};var ct=F,ht={Promise:lt,polyfill:ct};typeof define=="function"&&define.amd?define(function(){return ht}):typeof module!="undefined"&&module.exports?module.exports=ht:typeof this!="undefined"&&(this.ES6Promise=ht),ct()}.call(this),function(){function e(e,t,n){e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent&&e.attachEvent("on"+t,n)}function t(e){return!!e.exifdata}function r(e,t){t=t||e.match(/^data\:([^\;]+)\;base64,/mi)[1]||"",e=e.replace(/^data\:([^\;]+)\;base64,/gmi,"");var n=atob(e),r=n.length,i=new ArrayBuffer(r),s=new Uint8Array(i);for(var o=0;o<r;o++)s[o]=n.charCodeAt(o);return i}function i(e,t){var n=new XMLHttpRequest;n.open("GET",e,!0),n.responseType="blob",n.onload=function(e){(this.status==200||this.status===0)&&t(this.response)},n.send()}function s(e,t){function n(n){var r=o(n),i=u(n);e.exifdata=r||{},e.iptcdata=i||{},t&&t.call(e)}if(e.src)if(/^data\:/i.test(e.src)){var s=r(e.src);n(s)}else if(/^blob\:/i.test(e.src)){var a=new FileReader;a.onload=function(e){n(e.target.result)},i(e.src,function(e){a.readAsArrayBuffer(e)})}else{var f=new XMLHttpRequest;f.onload=function(){if(this.status!=200&&this.status!==0)throw"Could not load image";n(f.response),f=null},f.open("GET",e.src,!0),f.responseType="arraybuffer",f.send(null)}else if(window.FileReader&&(e instanceof window.Blob||e instanceof window.File)){var a=new FileReader;a.onload=function(e){p&&console.log("Got file of length "+e.target.result.byteLength),n(e.target.result)},a.readAsArrayBuffer(e)}}function o(e){var t=new DataView(e);p&&console.log("Got file of length "+e.byteLength);if(t.getUint8(0)!=255||t.getUint8(1)!=216)return p&&console.log("Not a valid JPEG"),!1;var n=2,r=e.byteLength,i;while(n<r){if(t.getUint8(n)!=255)return p&&console.log("Not a valid marker at offset "+n+", found: "+t.getUint8(n)),!1;i=t.getUint8(n+1),p&&console.log(i);if(i==225)return p&&console.log("Found 0xFFE1 marker"),h(t,n+4,t.getUint16(n+2)-2);n+=2+t.getUint16(n+2)}}function u(e){var t=new DataView(e);p&&console.log("Got file of length "+e.byteLength);if(t.getUint8(0)!=255||t.getUint8(1)!=216)return p&&console.log("Not a valid JPEG"),!1;var n=2,r=e.byteLength,i=function(e,t){return e.getUint8(t)===56&&e.getUint8(t+1)===66&&e.getUint8(t+2)===73&&e.getUint8(t+3)===77&&e.getUint8(t+4)===4&&e.getUint8(t+5)===4};while(n<r){if(i(t,n)){var s=t.getUint8(n+7);s%2!==0&&(s+=1),s===0&&(s=4);var o=n+8+s,u=t.getUint16(n+6+s);return a(e,o,u)}n++}}function a(e,t,n){var r=new DataView(e),i={},s,o,u,a,f,l=t;while(l<t+n)r.getUint8(l)===28&&r.getUint8(l+1)===2&&(a=r.getUint8(l+2),a in w&&(u=r.getInt16(l+3),f=u+5,o=w[a],s=c(r,l+5,u),i.hasOwnProperty(o)?i[o]instanceof Array?i[o].push(s):i[o]=[i[o],s]:i[o]=s)),l++;return i}function f(e,t,n,r,i){var s=e.getUint16(n,!i),o={},u,a,f;for(f=0;f<s;f++)u=n+f*12+2,a=r[e.getUint16(u,!i)],!a&&p&&console.log("Unknown tag: "+e.getUint16(u,!i)),o[a]=l(e,u,t,n,i);return o}function l(e,t,n,r,i){var s=e.getUint16(t+2,!i),o=e.getUint32(t+4,!i),u=e.getUint32(t+8,!i)+n,a,f,l,h,p,d;switch(s){case 1:case 7:if(o==1)return e.getUint8(t+8,!i);a=o>4?u:t+8,f=[];for(h=0;h<o;h++)f[h]=e.getUint8(a+h);return f;case 2:return a=o>4?u:t+8,c(e,a,o-1);case 3:if(o==1)return e.getUint16(t+8,!i);a=o>2?u:t+8,f=[];for(h=0;h<o;h++)f[h]=e.getUint16(a+2*h,!i);return f;case 4:if(o==1)return e.getUint32(t+8,!i);f=[];for(h=0;h<o;h++)f[h]=e.getUint32(u+4*h,!i);return f;case 5:if(o==1)return p=e.getUint32(u,!i),d=e.getUint32(u+4,!i),l=new Number(p/d),l.numerator=p,l.denominator=d,l;f=[];for(h=0;h<o;h++)p=e.getUint32(u+8*h,!i),d=e.getUint32(u+4+8*h,!i),f[h]=new Number(p/d),f[h].numerator=p,f[h].denominator=d;return f;case 9:if(o==1)return e.getInt32(t+8,!i);f=[];for(h=0;h<o;h++)f[h]=e.getInt32(u+4*h,!i);return f;case 10:if(o==1)return e.getInt32(u,!i)/e.getInt32(u+4,!i);f=[];for(h=0;h<o;h++)f[h]=e.getInt32(u+8*h,!i)/e.getInt32(u+4+8*h,!i);return f}}function c(e,t,r){var i="";for(n=t;n<t+r;n++)i+=String.fromCharCode(e.getUint8(n));return i}function h(e,t){if(c(e,t,4)!="Exif")return p&&console.log("Not valid EXIF data! "+c(e,t,4)),!1;var n,r,i,s,o,u=t+6;if(e.getUint16(u)==18761)n=!1;else{if(e.getUint16(u)!=19789)return p&&console.log("Not valid TIFF data! (no 0x4949 or 0x4D4D)"),!1;n=!0}if(e.getUint16(u+2,!n)!=42)return p&&console.log("Not valid TIFF data! (no 0x002A)"),!1;var a=e.getUint32(u+4,!n);if(a<8)return p&&console.log("Not valid TIFF data! (First offset less than 8)",e.getUint32(u+4,!n)),!1;r=f(e,u,u+a,g,n);if(r.ExifIFDPointer){s=f(e,u,u+r.ExifIFDPointer,m,n);for(i in s){switch(i){case"LightSource":case"Flash":case"MeteringMode":case"ExposureProgram":case"SensingMethod":case"SceneCaptureType":case"SceneType":case"CustomRendered":case"WhiteBalance":case"GainControl":case"Contrast":case"Saturation":case"Sharpness":case"SubjectDistanceRange":case"FileSource":s[i]=b[i][s[i]];break;case"ExifVersion":case"FlashpixVersion":s[i]=String.fromCharCode(s[i][0],s[i][1],s[i][2],s[i][3]);break;case"ComponentsConfiguration":s[i]=b.Components[s[i][0]]+b.Components[s[i][1]]+b.Components[s[i][2]]+b.Components[s[i][3]]}r[i]=s[i]}}if(r.GPSInfoIFDPointer){o=f(e,u,u+r.GPSInfoIFDPointer,y,n);for(i in o){switch(i){case"GPSVersionID":o[i]=o[i][0]+"."+o[i][1]+"."+o[i][2]+"."+o[i][3]}r[i]=o[i]}}return r}var p=!1,d=this,v=function(e){if(e instanceof v)return e;if(!(this instanceof v))return new v(e);this.EXIFwrapped=e};typeof exports!="undefined"?(typeof module!="undefined"&&module.exports&&(exports=module.exports=v),exports.EXIF=v):d.EXIF=v;var m=v.Tags={36864:"ExifVersion",40960:"FlashpixVersion",40961:"ColorSpace",40962:"PixelXDimension",40963:"PixelYDimension",37121:"ComponentsConfiguration",37122:"CompressedBitsPerPixel",37500:"MakerNote",37510:"UserComment",40964:"RelatedSoundFile",36867:"DateTimeOriginal",36868:"DateTimeDigitized",37520:"SubsecTime",37521:"SubsecTimeOriginal",37522:"SubsecTimeDigitized",33434:"ExposureTime",33437:"FNumber",34850:"ExposureProgram",34852:"SpectralSensitivity",34855:"ISOSpeedRatings",34856:"OECF",37377:"ShutterSpeedValue",37378:"ApertureValue",37379:"BrightnessValue",37380:"ExposureBias",37381:"MaxApertureValue",37382:"SubjectDistance",37383:"MeteringMode",37384:"LightSource",37385:"Flash",37396:"SubjectArea",37386:"FocalLength",41483:"FlashEnergy",41484:"SpatialFrequencyResponse",41486:"FocalPlaneXResolution",41487:"FocalPlaneYResolution",41488:"FocalPlaneResolutionUnit",41492:"SubjectLocation",41493:"ExposureIndex",41495:"SensingMethod",41728:"FileSource",41729:"SceneType",41730:"CFAPattern",41985:"CustomRendered",41986:"ExposureMode",41987:"WhiteBalance",41988:"DigitalZoomRation",41989:"FocalLengthIn35mmFilm",41990:"SceneCaptureType",41991:"GainControl",41992:"Contrast",41993:"Saturation",41994:"Sharpness",41995:"DeviceSettingDescription",41996:"SubjectDistanceRange",40965:"InteroperabilityIFDPointer",42016:"ImageUniqueID"},g=v.TiffTags={256:"ImageWidth",257:"ImageHeight",34665:"ExifIFDPointer",34853:"GPSInfoIFDPointer",40965:"InteroperabilityIFDPointer",258:"BitsPerSample",259:"Compression",262:"PhotometricInterpretation",274:"Orientation",277:"SamplesPerPixel",284:"PlanarConfiguration",530:"YCbCrSubSampling",531:"YCbCrPositioning",282:"XResolution",283:"YResolution",296:"ResolutionUnit",273:"StripOffsets",278:"RowsPerStrip",279:"StripByteCounts",513:"JPEGInterchangeFormat",514:"JPEGInterchangeFormatLength",301:"TransferFunction",318:"WhitePoint",319:"PrimaryChromaticities",529:"YCbCrCoefficients",532:"ReferenceBlackWhite",306:"DateTime",270:"ImageDescription",271:"Make",272:"Model",305:"Software",315:"Artist",33432:"Copyright"},y=v.GPSTags={0:"GPSVersionID",1:"GPSLatitudeRef",2:"GPSLatitude",3:"GPSLongitudeRef",4:"GPSLongitude",5:"GPSAltitudeRef",6:"GPSAltitude",7:"GPSTimeStamp",8:"GPSSatellites",9:"GPSStatus",10:"GPSMeasureMode",11:"GPSDOP",12:"GPSSpeedRef",13:"GPSSpeed",14:"GPSTrackRef",15:"GPSTrack",16:"GPSImgDirectionRef",17:"GPSImgDirection",18:"GPSMapDatum",19:"GPSDestLatitudeRef",20:"GPSDestLatitude",21:"GPSDestLongitudeRef",22:"GPSDestLongitude",23:"GPSDestBearingRef",24:"GPSDestBearing",25:"GPSDestDistanceRef",26:"GPSDestDistance",27:"GPSProcessingMethod",28:"GPSAreaInformation",29:"GPSDateStamp",30:"GPSDifferential"},b=v.StringValues={ExposureProgram:{0:"Not defined",1:"Manual",2:"Normal program",3:"Aperture priority",4:"Shutter priority",5:"Creative program",6:"Action program",7:"Portrait mode",8:"Landscape mode"},MeteringMode:{0:"Unknown",1:"Average",2:"CenterWeightedAverage",3:"Spot",4:"MultiSpot",5:"Pattern",6:"Partial",255:"Other"},LightSource:{0:"Unknown",1:"Daylight",2:"Fluorescent",3:"Tungsten (incandescent light)",4:"Flash",9:"Fine weather",10:"Cloudy weather",11:"Shade",12:"Daylight fluorescent (D 5700 - 7100K)",13:"Day white fluorescent (N 4600 - 5400K)",14:"Cool white fluorescent (W 3900 - 4500K)",15:"White fluorescent (WW 3200 - 3700K)",17:"Standard light A",18:"Standard light B",19:"Standard light C",20:"D55",21:"D65",22:"D75",23:"D50",24:"ISO studio tungsten",255:"Other"},Flash:{0:"Flash did not fire",1:"Flash fired",5:"Strobe return light not detected",7:"Strobe return light detected",9:"Flash fired, compulsory flash mode",13:"Flash fired, compulsory flash mode, return light not detected",15:"Flash fired, compulsory flash mode, return light detected",16:"Flash did not fire, compulsory flash mode",24:"Flash did not fire, auto mode",25:"Flash fired, auto mode",29:"Flash fired, auto mode, return light not detected",31:"Flash fired, auto mode, return light detected",32:"No flash function",65:"Flash fired, red-eye reduction mode",69:"Flash fired, red-eye reduction mode, return light not detected",71:"Flash fired, red-eye reduction mode, return light detected",73:"Flash fired, compulsory flash mode, red-eye reduction mode",77:"Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",79:"Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",89:"Flash fired, auto mode, red-eye reduction mode",93:"Flash fired, auto mode, return light not detected, red-eye reduction mode",95:"Flash fired, auto mode, return light detected, red-eye reduction mode"},SensingMethod:{1:"Not defined",2:"One-chip color area sensor",3:"Two-chip color area sensor",4:"Three-chip color area sensor",5:"Color sequential area sensor",7:"Trilinear sensor",8:"Color sequential linear sensor"},SceneCaptureType:{0:"Standard",1:"Landscape",2:"Portrait",3:"Night scene"},SceneType:{1:"Directly photographed"},CustomRendered:{0:"Normal process",1:"Custom process"},WhiteBalance:{0:"Auto white balance",1:"Manual white balance"},GainControl:{0:"None",1:"Low gain up",2:"High gain up",3:"Low gain down",4:"High gain down"},Contrast:{0:"Normal",1:"Soft",2:"Hard"},Saturation:{0:"Normal",1:"Low saturation",2:"High saturation"},Sharpness:{0:"Normal",1:"Soft",2:"Hard"},SubjectDistanceRange:{0:"Unknown",1:"Macro",2:"Close view",3:"Distant view"},FileSource:{3:"DSC"},Components:{0:"",1:"Y",2:"Cb",3:"Cr",4:"R",5:"G",6:"B"}},w={120:"caption",110:"credit",25:"keywords",55:"dateCreated",80:"byline",85:"bylineTitle",122:"captionWriter",105:"headline",116:"copyright",15:"category"};v.getData=function(e,n){return(e instanceof Image||e instanceof HTMLImageElement)&&!e.complete?!1:(t(e)?n&&n.call(e):s(e,n),!0)},v.getTag=function(e,n){if(!t(e))return;return e.exifdata[n]},v.getAllTags=function(e){if(!t(e))return{};var n,r=e.exifdata,i={};for(n in r)r.hasOwnProperty(n)&&(i[n]=r[n]);return i},v.pretty=function(e){if(!t(e))return"";var n,r=e.exifdata,i="";for(n in r)r.hasOwnProperty(n)&&(typeof r[n]=="object"?r[n]instanceof Number?i+=n+" : "+r[n]+" ["+r[n].numerator+"/"+r[n].denominator+"]\r\n":i+=n+" : ["+r[n].length+" values]\r\n":i+=n+" : "+r[n]+"\r\n");return i},v.readFromBinaryFile=function(e){return o(e)},typeof define=="function"&&define.amd&&define("exif-js",[],function(){return v})}.call(this),function(){function e(e){var t=
e.naturalWidth,n=e.naturalHeight;if(t*n>1048576){var r=document.createElement("canvas");r.width=r.height=1;var i=r.getContext("2d");return i.drawImage(e,-t+1,0),i.getImageData(0,0,1,1).data[3]===0}return!1}function t(e,t,n){var r=document.createElement("canvas");r.width=1,r.height=n;var i=r.getContext("2d");i.drawImage(e,0,0);var s=i.getImageData(0,0,1,n).data,o=0,u=n,a=n;while(a>o){var f=s[(a-1)*4+3];f===0?u=a:o=a,a=u+o>>1}var l=a/n;return l===0?1:l}function n(e,t,n){var i=document.createElement("canvas");return r(e,i,t,n),i.toDataURL("image/jpeg",t.quality||.8)}function r(n,r,s,o){var u=n.naturalWidth,a=n.naturalHeight;if(!(u+a))return;var f=s.width,l=s.height,c=r.getContext("2d");c.save(),i(r,c,f,l,s.orientation);var h=e(n);h&&(u/=2,a/=2);var p=1024,d=document.createElement("canvas");d.width=d.height=p;var v=d.getContext("2d"),m=o?t(n,u,a):1,g=Math.ceil(p*f/u),y=Math.ceil(p*l/a/m),b=0,w=0;while(b<a){var E=0,S=0;while(E<u)v.clearRect(0,0,p,p),v.drawImage(n,-E,-b),c.drawImage(d,0,0,p,p,S,w,g,y),E+=p,S+=g;b+=p,w+=y}c.restore(),d=v=null}function i(e,t,n,r,i){switch(i){case 5:case 6:case 7:case 8:e.width=r,e.height=n;break;default:e.width=n,e.height=r}switch(i){case 2:t.translate(n,0),t.scale(-1,1);break;case 3:t.translate(n,r),t.rotate(Math.PI);break;case 4:t.translate(0,r),t.scale(1,-1);break;case 5:t.rotate(.5*Math.PI),t.scale(1,-1);break;case 6:t.rotate(.5*Math.PI),t.translate(0,-r);break;case 7:t.rotate(.5*Math.PI),t.translate(n,-r),t.scale(-1,1);break;case 8:t.rotate(-0.5*Math.PI),t.translate(-n,0);break;default:}}function s(e){if(window.Blob&&e instanceof Blob){if(!o)throw Error("No createObjectURL function found to create blob url");var t=new Image;t.src=o.createObjectURL(e),this.blob=e,e=t}if(!e.naturalWidth&&!e.naturalHeight){var n=this;e.onload=e.onerror=function(){var e=n.imageLoadListeners;if(e){n.imageLoadListeners=null;for(var t=0,r=e.length;t<r;t++)e[t]()}},this.imageLoadListeners=[]}this.srcImage=e}var o=window.URL&&window.URL.createObjectURL?window.URL:window.webkitURL&&window.webkitURL.createObjectURL?window.webkitURL:null;s.prototype.render=function(e,t,i){if(this.imageLoadListeners){var s=this;this.imageLoadListeners.push(function(){s.render(e,t,i)});return}t=t||{};var u=this.srcImage.naturalWidth,a=this.srcImage.naturalHeight,f=t.width,l=t.height,c=t.maxWidth,h=t.maxHeight,p=!this.blob||this.blob.type==="image/jpeg";f&&!l?l=a*f/u<<0:l&&!f?f=u*l/a<<0:(f=u,l=a),c&&f>c&&(f=c,l=a*f/u<<0),h&&l>h&&(l=h,f=u*l/a<<0);var d={width:f,height:l};for(var v in t)d[v]=t[v];var m=e.tagName.toLowerCase();m==="img"?e.src=n(this.srcImage,d,p):m==="canvas"&&r(this.srcImage,e,d,p),typeof this.onrender=="function"&&this.onrender(e),i&&i(),this.blob&&(this.blob=null,o.revokeObjectURL(this.srcImage.src))},typeof define=="function"&&define.amd?define([],function(){return s}):this.MegaPixImage=s}();