/* Version: 24.12.2 - December 31, 2024 13:35:10 */
var r=ArrayBuffer,e=Uint8Array,t=Uint16Array,n=Int16Array,o=Int32Array,a=function(r,t,n){if(e.prototype.slice)return e.prototype.slice.call(r,t,n);(null==t||t<0)&&(t=0),(null==n||n>r.length)&&(n=r.length);var o=new e(n-t);return o.set(r.subarray(t,n)),o},i=function(r,t,n,o){if(e.prototype.fill)return e.prototype.fill.call(r,t,n,o);for((null==n||n<0)&&(n=0),(null==o||o>r.length)&&(o=r.length);n<o;++n)r[n]=t;return r},s=function(r,t,n,o){if(e.prototype.copyWithin)return e.prototype.copyWithin.call(r,t,n,o);for((null==n||n<0)&&(n=0),(null==o||o>r.length)&&(o=r.length);n<o;)r[t++]=r[n++]},c=["invalid zstd data","window size too large (>2046MB)","invalid block type","FSE accuracy too high","match distance too far back","unexpected EOF"],_=function(r,e,t){var n=new Error(e||c[r]);if(n.code=r,Error.captureStackTrace&&Error.captureStackTrace(n,_),!t)throw n;return n},u=function(r,e,t){for(var n=0,o=0;n<t;++n)o|=r[e++]<<(n<<3);return o},p=function(r,t){var n,a=r[0]|r[1]<<8|r[2]<<16;if(3126568==a&&253==r[3]){var i=r[4],s=i>>5&1,c=i>>2&1,p=3&i,f=i>>6;8&i&&_(0);var l=6-s,h=3==p?4:p,y=u(r,l,h),d=f?1<<f:s,b=u(r,l+=h,d)+(1==f&&256),v=b;if(!s){var m=1<<10+(r[5]>>3);v=m+(m>>3)*(7&r[5])}v>2145386496&&_(1);var w=new e((1==t?b||v:t?0:v)+12);return w[0]=1,w[4]=4,w[8]=8,{b:l+d,y:0,l:0,d:y,w:t&&1!=t?t:w.subarray(12),e:v,o:new o(w.buffer,0,3),u:b,c:c,m:Math.min(131072,v)}}if(25481893==(a>>4|r[3]<<20))return 8+(((n=r)[4]|n[5]<<8|n[6]<<16|n[7]<<24)>>>0);_(0)},f=function(r){for(var e=0;1<<e<=r;++e);return e-1},l=function(o,a,i){var s=4+(a<<3),c=5+(15&o[a]);c>i&&_(3);for(var u=1<<c,p=u,l=-1,h=-1,y=-1,d=u,b=new r(512+(u<<2)),v=new n(b,0,256),m=new t(b,0,256),w=new t(b,512,u),g=512+(u<<1),C=new e(b,g,u),E=new e(b,g+u);l<255&&p>0;){var A=f(p+1),B=s>>3,U=(1<<A+1)-1,P=(o[B]|o[B+1]<<8|o[B+2]<<16)>>(7&s)&U,x=(1<<A)-1,W=U-p-1,j=P&x;if(j<W?(s+=A,P=j):(s+=A+1,P>x&&(P-=W)),v[++l]=--P,-1==P?(p+=P,C[--d]=l):p-=P,!P)do{var k=s>>3;h=(o[k]|o[k+1]<<8)>>(7&s)&3,s+=2,l+=h}while(3==h)}(l>255||p)&&_(0);for(var z=0,I=(u>>1)+(u>>3)+3,S=u-1,H=0;H<=l;++H){var O=v[H];if(O<1)m[H]=-O;else for(y=0;y<O;++y){C[z]=H;do{z=z+I&S}while(z>=d)}}for(z&&_(0),y=0;y<u;++y){var X=m[C[y]]++,G=E[y]=c-f(X);w[y]=(X<<G)-u}return[s+7>>3,{b:c,s:C,n:E,t:w}]},h=l(new e([81,16,99,140,49,198,24,99,12,33,196,24,99,102,102,134,70,146,4]),0,6)[1],y=l(new e([33,20,196,24,99,140,33,132,16,66,8,33,132,16,66,8,33,68,68,68,68,68,68,68,68,36,9]),0,6)[1],d=l(new e([32,132,16,66,102,70,68,68,68,68,36,73,2]),0,5)[1],b=function(r,e){for(var t=r.length,n=new o(t),a=0;a<t;++a)n[a]=e,e+=1<<r[a];return n},v=new e(new o([0,0,0,0,16843009,50528770,134678020,202050057,269422093]).buffer,0,36),m=b(v,0),w=new e(new o([0,0,0,0,0,0,0,0,16843009,50528770,117769220,185207048,252579084,16]).buffer,0,53),g=b(w,3),C=function(r,e,t){var n=r.length,o=e.length,a=r[n-1],i=(1<<t.b)-1,s=-t.b;a||_(0);for(var c=0,u=t.b,p=(n<<3)-8+f(a)-u,l=-1;p>s&&l<o;){var h=p>>3;c=(c<<u|(r[h]|r[h+1]<<8|r[h+2]<<16)>>(7&p))&i,e[++l]=t.s[c],p-=u=t.n[c]}p==s&&l+1==o||_(0)},E=function(r,e,t){var n=6,o=e.length+3>>2,a=o<<1,i=o+a;C(r.subarray(n,n+=r[0]|r[1]<<8),e.subarray(0,o),t),C(r.subarray(n,n+=r[2]|r[3]<<8),e.subarray(o,a),t),C(r.subarray(n,n+=r[4]|r[5]<<8),e.subarray(a,i),t),C(r.subarray(n),e.subarray(i),t)},A=function(r,n,o){var s,c=n.b,u=r[c],p=u>>1&3;n.l=1&u;var b=u>>3|r[c+1]<<5|r[c+2]<<13,A=(c+=3)+b;if(1==p){if(c>=r.length)return;return n.b=c+1,o?(i(o,r[c],n.y,n.y+=b),o):i(new e(b),r[c])}if(!(A>r.length)){if(0==p)return n.b=A,o?(o.set(r.subarray(c,A),n.y),n.y+=b,o):a(r,c,A);if(2==p){var B=r[c],U=3&B,P=B>>2&3,x=B>>4,W=0,j=0;U<2?1&P?x|=r[++c]<<4|(2&P&&r[++c]<<12):x=B>>3:(j=P,P<2?(x|=(63&r[++c])<<4,W=r[c]>>6|r[++c]<<2):2==P?(x|=r[++c]<<4|(3&r[++c])<<12,W=r[c]>>2|r[++c]<<6):(x|=r[++c]<<4|(63&r[++c])<<12,W=r[c]>>6|r[++c]<<2|r[++c]<<10)),++c;var k=o?o.subarray(n.y,n.y+n.m):new e(n.m),z=k.length-x;if(0==U)k.set(r.subarray(c,c+=x),z);else if(1==U)i(k,r[c++],z);else{var I=n.h;if(2==U){var S=function(r,n){var o=0,a=-1,s=new e(292),c=r[n],u=s.subarray(0,256),p=s.subarray(256,268),h=new t(s.buffer,268);if(c<128){var y=l(r,n+1,6),d=y[0],b=y[1],v=d<<3,m=r[n+=c];m||_(0);for(var w=0,g=0,C=b.b,E=C,A=(++n<<3)-8+f(m);!((A-=C)<v);){var B=A>>3;if(w+=(r[B]|r[B+1]<<8)>>(7&A)&(1<<C)-1,u[++a]=b.s[w],(A-=E)<v)break;g+=(r[B=A>>3]|r[B+1]<<8)>>(7&A)&(1<<E)-1,u[++a]=b.s[g],C=b.n[w],w=b.t[w],E=b.n[g],g=b.t[g]}++a>255&&_(0)}else{for(a=c-127;o<a;o+=2){var U=r[++n];u[o]=U>>4,u[o+1]=15&U}++n}var P=0;for(o=0;o<a;++o)(k=u[o])>11&&_(0),P+=k&&1<<k-1;var x=f(P)+1,W=1<<x,j=W-P;for(j&j-1&&_(0),u[a++]=f(j)+1,o=0;o<a;++o){var k=u[o];++p[u[o]=k&&x+1-k]}var z=new e(W<<1),I=z.subarray(0,W),S=z.subarray(W);for(h[x]=0,o=x;o>0;--o){var H=h[o];i(S,o,H,h[o-1]=H+p[o]*(1<<x-o))}for(h[0]!=W&&_(0),o=0;o<a;++o){var O=u[o];if(O){var X=h[O];i(I,o,X,h[O]=X+(1<<x-O))}}return[n,{n:S,b:x,s:I}]}(r,c);W+=c-(c=S[0]),n.h=I=S[1]}else I||_(0);(j?E:C)(r.subarray(c,c+=W),k.subarray(z),I)}var H=r[c++];if(H){255==H?H=32512+(r[c++]|r[c++]<<8):H>127&&(H=H-128<<8|r[c++]);var O=r[c++];3&O&&_(0);for(var X=[y,d,h],G=2;G>-1;--G){var D=O>>2+(G<<1)&3;if(1==D){var K=new e([0,0,r[c++]]);X[G]={s:K.subarray(2,3),n:K.subarray(0,1),t:new t(K.buffer,0,1),b:0}}else 2==D?(c=(s=l(r,c,9-(1&G)))[0],X[G]=s[1]):3==D&&(n.t||_(0),X[G]=n.t[G])}var Y=n.t=X,R=Y[0],T=Y[1],N=Y[2],$=r[A-1];$||_(0);var L=(A<<3)-8+f($)-N.b,Z=L>>3,q=0,J=(r[Z]|r[Z+1]<<8)>>(7&L)&(1<<N.b)-1,M=(r[Z=(L-=T.b)>>3]|r[Z+1]<<8)>>(7&L)&(1<<T.b)-1,Q=(r[Z=(L-=R.b)>>3]|r[Z+1]<<8)>>(7&L)&(1<<R.b)-1;for(++H;--H;){var V=N.s[J],F=N.n[J],rr=R.s[Q],er=R.n[Q],tr=T.s[M],nr=T.n[M],or=1<<tr,ar=or+((r[Z=(L-=tr)>>3]|r[Z+1]<<8|r[Z+2]<<16|r[Z+3]<<24)>>>(7&L)&or-1);Z=(L-=w[rr])>>3;var ir=g[rr]+((r[Z]|r[Z+1]<<8|r[Z+2]<<16)>>(7&L)&(1<<w[rr])-1);Z=(L-=v[V])>>3;var sr=m[V]+((r[Z]|r[Z+1]<<8|r[Z+2]<<16)>>(7&L)&(1<<v[V])-1);if(Z=(L-=F)>>3,J=N.t[J]+((r[Z]|r[Z+1]<<8)>>(7&L)&(1<<F)-1),Z=(L-=er)>>3,Q=R.t[Q]+((r[Z]|r[Z+1]<<8)>>(7&L)&(1<<er)-1),Z=(L-=nr)>>3,M=T.t[M]+((r[Z]|r[Z+1]<<8)>>(7&L)&(1<<nr)-1),ar>3)n.o[2]=n.o[1],n.o[1]=n.o[0],n.o[0]=ar-=3;else{var cr=ar-(0!=sr);cr?(ar=3==cr?n.o[0]-1:n.o[cr],cr>1&&(n.o[2]=n.o[1]),n.o[1]=n.o[0],n.o[0]=ar):ar=n.o[0]}for(G=0;G<sr;++G)k[q+G]=k[z+G];z+=sr;var _r=(q+=sr)-ar;if(_r<0){var ur=-_r,pr=n.e+_r;for(ur>ir&&(ur=ir),G=0;G<ur;++G)k[q+G]=n.w[pr+G];q+=ur,ir-=ur,_r=0}for(G=0;G<ir;++G)k[q+G]=k[_r+G];q+=ir}if(q!=z)for(;z<k.length;)k[q++]=k[z++];else q=k.length;o?n.y+=q:k=a(k,0,q)}else if(o){if(n.y+=x,z)for(G=0;G<x;++G)k[G]=k[z+G]}else z&&(k=a(k,z));return n.b=A,k}_(2)}},B=function(r,t){if(1==r.length)return r[0];for(var n=new e(t),o=0,a=0;o<r.length;++o){var i=r[o];n.set(i,a),a+=i.length}return n};var U=("undefined"!=typeof document&&document.currentScript&&document.currentScript.src,function(r={}){var e,t,n=r;n.ready=new Promise(((r,n)=>{e=r,t=n}));var o=Object.assign({},n);console.log.bind(console);var a,i,s=console.error.bind(console);Object.assign(n,o),o=null,n.wasmBinary&&(a=n.wasmBinary),"object"!=typeof WebAssembly&&d("no native wasm support detected");var c,_=!1;function u(){var r=i.buffer;n.HEAP8=new Int8Array(r),n.HEAP16=new Int16Array(r),n.HEAPU8=c=new Uint8Array(r),n.HEAPU16=new Uint16Array(r),n.HEAP32=new Int32Array(r),n.HEAPU32=new Uint32Array(r),n.HEAPF32=new Float32Array(r),n.HEAPF64=new Float64Array(r)}var p=[],f=[],l=[],h=0,y=null;function d(r){s(r="Aborted("+r+")"),_=!0,r+=". Build with -sASSERTIONS for more info.";var e=new WebAssembly.RuntimeError(r);throw t(e),e}var b,v=r=>r.startsWith("data:application/octet-stream;base64,"),m=r=>r.startsWith("file://");function w(r){if(r==b&&a)return new Uint8Array(a);throw"both async and sync fetching of the wasm failed"}function g(r,e,t){return function(r){return Promise.resolve().then((()=>w(r)))}(r).then((r=>WebAssembly.instantiate(r,e))).then((r=>r)).then(t,(r=>{s(`failed to asynchronously prepare wasm: ${r}`),d(r)}))}v(b="base91lib.wasm")||(b=""+b);var C=r=>{for(;r.length>0;)r.shift()(n)},E=r=>{var e=(r-i.buffer.byteLength+65535)/65536;try{return i.grow(e),u(),1}catch(r){}},A="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0,B=(r,e)=>r?((r,e,t)=>{for(var n=e+t,o=e;r[o]&&!(o>=n);)++o;if(o-e>16&&r.buffer&&A)return A.decode(r.subarray(e,o));for(var a="";e<o;){var i=r[e++];if(128&i){var s=63&r[e++];if(192!=(224&i)){var c=63&r[e++];if((i=224==(240&i)?(15&i)<<12|s<<6|c:(7&i)<<18|s<<12|c<<6|63&r[e++])<65536)a+=String.fromCharCode(i);else{var _=i-65536;a+=String.fromCharCode(55296|_>>10,56320|1023&_)}}else a+=String.fromCharCode((31&i)<<6|s)}else a+=String.fromCharCode(i)}return a})(c,r,e):"",U={a:()=>{d("")},b:r=>{var e=c.length,t=2147483648;if((r>>>=0)>t)return!1;for(var n,o=1;o<=4;o*=2){var a=e*(1+.2/o);a=Math.min(a,r+100663296);var i=Math.min(t,(n=Math.max(r,a))+(65536-n%65536)%65536);if(E(i))return!0}return!1}},P=function(){var r,e,n,o;return h++,(r=a,e=b,n={a:U},o=function(r){!function(r,e){var t;P=r.exports,i=P.c,u(),t=P.d,f.unshift(t),function(r){if(0==--h&&y){var e=y;y=null,e()}}()}(r.instance)},r||"function"!=typeof WebAssembly.instantiateStreaming||v(e)||m(e)||"function"!=typeof fetch?g(e,n,o):fetch(e,{credentials:"same-origin"}).then((r=>WebAssembly.instantiateStreaming(r,n).then(o,(function(r){return s(`wasm streaming compile failed: ${r}`),s("falling back to ArrayBuffer instantiation"),g(e,n,o)}))))).catch(t),{}}();n._webidl_free=r=>(n._webidl_free=P.e)(r),n._webidl_malloc=r=>(n._webidl_malloc=P.f)(r);var x,W=n._emscripten_bind_VoidPtr___destroy___0=r=>(W=n._emscripten_bind_VoidPtr___destroy___0=P.g)(r),j=n._emscripten_bind_CBasE91_CBasE91_0=()=>(j=n._emscripten_bind_CBasE91_CBasE91_0=P.h)(),k=n._emscripten_bind_CBasE91_malloc_1=r=>(k=n._emscripten_bind_CBasE91_malloc_1=P.i)(r),z=n._emscripten_bind_CBasE91_free_1=r=>(z=n._emscripten_bind_CBasE91_free_1=P.j)(r),I=n._emscripten_bind_CBasE91_version_0=r=>(I=n._emscripten_bind_CBasE91_version_0=P.k)(r),S=n._emscripten_bind_CBasE91_reset_0=r=>(S=n._emscripten_bind_CBasE91_reset_0=P.l)(r),H=n._emscripten_bind_CBasE91_encode_3=(r,e,t,o)=>(H=n._emscripten_bind_CBasE91_encode_3=P.m)(r,e,t,o),O=n._emscripten_bind_CBasE91_encode_end_1=(r,e)=>(O=n._emscripten_bind_CBasE91_encode_end_1=P.n)(r,e),X=n._emscripten_bind_CBasE91_decode_3=(r,e,t,o)=>(X=n._emscripten_bind_CBasE91_decode_3=P.o)(r,e,t,o),G=n._emscripten_bind_CBasE91_decode_end_1=(r,e)=>(G=n._emscripten_bind_CBasE91_decode_end_1=P.p)(r,e),D=n._emscripten_bind_CBasE91___destroy___0=r=>(D=n._emscripten_bind_CBasE91___destroy___0=P.q)(r);function K(){h>0||(C(p),h>0||x||(x=!0,n.calledRun=!0,_||(C(f),e(n),C(l))))}function Y(){}function R(r){return(r||Y).__cache__}function T(r,e){var t=R(e),n=t[r];return n||((n=Object.create((e||Y).prototype)).ptr=r,t[r]=n)}function N(){throw"cannot construct a VoidPtr, no constructor in IDL"}function $(){this.ptr=j(),R($)[this.ptr]=this}return n.UTF8ToString=B,y=function r(){x||K(),x||(y=r)},K(),Y.prototype=Object.create(Y.prototype),Y.prototype.constructor=Y,Y.prototype.__class__=Y,Y.__cache__={},n.WrapperObject=Y,n.getCache=R,n.wrapPointer=T,n.castObject=function(r,e){return T(r.ptr,e)},n.NULL=T(0),n.destroy=function(r){if(!r.__destroy__)throw"Error: Cannot destroy object. (Did you create it yourself?)";r.__destroy__(),delete R(r.__class__)[r.ptr]},n.compare=function(r,e){return r.ptr===e.ptr},n.getPointer=function(r){return r.ptr},n.getClass=function(r){return r.__class__},N.prototype=Object.create(Y.prototype),N.prototype.constructor=N,N.prototype.__class__=N,N.__cache__={},n.VoidPtr=N,N.prototype.__destroy__=N.prototype.__destroy__=function(){var r=this.ptr;W(r)},$.prototype=Object.create(Y.prototype),$.prototype.constructor=$,$.prototype.__class__=$,$.__cache__={},n.CBasE91=$,$.prototype.malloc=$.prototype.malloc=function(r){return r&&"object"==typeof r&&(r=r.ptr),k(r)},$.prototype.free=$.prototype.free=function(r){r&&"object"==typeof r&&(r=r.ptr),z(r)},$.prototype.version=$.prototype.version=function(){var r=this.ptr;return B(I(r))},$.prototype.reset=$.prototype.reset=function(){var r=this.ptr;S(r)},$.prototype.encode=$.prototype.encode=function(r,e,t){var n=this.ptr;return r&&"object"==typeof r&&(r=r.ptr),e&&"object"==typeof e&&(e=e.ptr),t&&"object"==typeof t&&(t=t.ptr),H(n,r,e,t)},$.prototype.encode_end=$.prototype.encode_end=function(r){var e=this.ptr;return r&&"object"==typeof r&&(r=r.ptr),O(e,r)},$.prototype.decode=$.prototype.decode=function(r,e,t){var n=this.ptr;return r&&"object"==typeof r&&(r=r.ptr),e&&"object"==typeof e&&(e=e.ptr),t&&"object"==typeof t&&(t=t.ptr),X(n,r,e,t)},$.prototype.decode_end=$.prototype.decode_end=function(r){var e=this.ptr;return r&&"object"==typeof r&&(r=r.ptr),G(e,r)},$.prototype.__destroy__=$.prototype.__destroy__=function(){var r=this.ptr;D(r)},r.ready});let P,x,W;class j{constructor(r,e){this._module=r,this._exports=e}malloc_heapu8(r){return{ptr:this._exports.malloc(r),size:r}}free_heapu8(r){this._exports.free(r.ptr)}uint8_heapu8(r){const e=this.malloc_heapu8(r.byteLength);return this._module.HEAPU8.set(r,e.ptr),e}heapu8_view(r){return this._module.HEAPU8.subarray(r.ptr,r.ptr+r.size)}heapu8_uint8(r){return new Uint8Array([...this.heapu8_view(r)])}string_heapu8(r){const e=Uint8Array.from(r,(r=>r.charCodeAt(0)));return this.uint8_heapu8(e)}heapu8_string(r){const e=Array.from({length:r.size});return this._module.HEAPU8.subarray(r.ptr,r.ptr+r.size).forEach(((r,t)=>{e[t]=String.fromCharCode(r)})),e.join("")}}class k extends j{constructor(r){super(r,new r.CBasE91)}static load(){return W||(W=(x||(x=function(r){const e=function(r){const e=r.length,t=[];let n=0,o=0,a=-1;for(let i=0;i<e;i++){const e='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!#$%&()*+,./:;<=>?@[]^_`{|}~"'.indexOf(r[i]);if(-1!==e)if(a<0)a=e;else{a+=91*e,n|=a<<o,o+=(8191&a)>88?13:14;do{t.push(255&n),n>>=8,o-=8}while(o>7);a=-1}}return a>-1&&t.push(255&(n|a<<o)),new Uint8Array(t)}(r);return function(r,e){for(var t=0,n=[],o=+!e,a=0;r.length;){var i=p(r,o||e);if("object"==typeof i){for(o?(e=null,i.w.length==i.u&&(n.push(e=i.w),a+=i.u)):(n.push(e),i.e=0);!i.l;){var c=A(r,i,e);c||_(5),e?i.e=i.y:(n.push(c),a+=c.length,s(i.w,0,c.length),i.w.set(c,i.w.length-c.length))}t=i.b+4*i.c}else t=i;r=r.subarray(t)}return B(n,a)}(e)}('v7#aT)d=G[2Aymr6WVpIKbLFoIbx0IaEGHRsNRKK_,PzlE?I.aMvt.%jpII31}sV/)tXLa7erzui{}a~4c@W:dHX,q$!NTRs|7SPaX5Jfm^Ym+3=Dd;h0"PC=Ro.O`2^2.y*;v)?OKE2lrKW)5qvy+DYyZ^EGZQf%v^aB~Xjzk(^^/(nOX=aLQF]o}?>VcttowP~p%Kcy7xp<!]#WYBa1])s<NH/k#I:9eHRC8H+[%E,Prx7||Yh1sR0Yx/|)`kuiZL__s@/;w[8<#hXVr5~,dD}&jj{bap&/b/DrQg,1:/;m#y}P6cCS%|zMWiT|zCsIEfyQbrdI/w5q}Y;Sj#%QXtXGcVJJh"V(6;k"op{,B}!xh4EAu=rO`s9@f<]wrs&.4T~~f>B*i,pTM6X).ZiZd"3+d8CHSB}z`B/DO9G~[+zf3I/{`%GE7,:Ph1&9*;Ne@riCpb5}VyrPTo*~)Y:Cd49V%i09ZHgOFeQmG&ZaxbN$Sm~>m{Uqa2UthwCp0LX6j)<!cz@ZcA:5:jm.YmJEQPu6o6k9j;fH]+x2GV.ldW6J.:Y0z"7/vvRd6~nHk$eFKu#**P^g^&=42xo&j&18R1M5OejBb1M6wASZUdZej..8*sU,#D`~2K>qhhux;e%x.B0RO.2%>rwLJ{#{Pz>DskPqvtUfXu[XnP)Uso*59h|LqT5nR|r&0|&d6i[3SSR,/R6?tJS,/fMQ%{quU8!t,06&jSPyZhQGSW1Yc9`i9J~s!yOsweXf6:^6StehY5_FN26aZ(2&:OI93E:!|U;A(3]Si,<KRab`uUKD.Y+huT0Sm&x2;vV"^P])_okCWHi1/e1:iokp[{I8]P2xI`K&i!GIW5>9bqylX#9hn2s?30%/y6)>epe%1bhHDff^I)lJ0cX0#zBUl]lb5ohKna%^otD5BVj^GQjBp|e]Nc,k5>;8@X_^{6b5fRi)<R5m7ckk$#Q:/e1|&C:j9#7UpK(~<)9*{IeW)U8Z!km%In;b85_s:ootw0vrO|yn#$vG[$`"oIv#pQ2AXZm*gag:DWUf1v+lU8I.<hD94,y;:J/D#@Moz6eC}{p.2.K,a=yZx^a0`o*SPW<a2`s@OQ3}/8;?B<r,NrDr,ZZ<djhTTPIHG$r#e8Etbzs]8}h?3FOBS4~W{xX@bmZ!`fhgJd}<fK+OGiT)%)e)G}qG7ik[UN$4=,Ygdxrql[76=r$a%W~(#can8{$Kr>w[5+Yv#QK~[Jg_IqC)fUlE^VN0]uI,x{oEBA|4ayg~^[d|!}#@OWJNa6j3ke15{);L0Tk@xp%tyml"Q$qh}+[dOk&xqCoLspJ0v]4xk^L+0`Gfl~K:ksrpqRMZW3/amG[FxBHa~[f[o1%9QN)Sw)TP]9eeNs:5.,L+D2Q9/HoAxI93zG9~)!<j|[a!9SW{Ys%PN@G%z^fS9)D[P*3UxcNVmqW%Hq*^Hh>`EG[D}vlgfa?d,1rF8HxL@jDKUBuJ2I)_Ha/8m~((j}%>j5T8c+76E+U)!?bah=Z,Lbxd|c2DZ01PD(n4?kSf20{VKWp,mPJ6E%kD#4k+)3X8o~WIKsO`XHX8g[aa:Z$5Y"TWSqICY4Ei$cw#X29/=n<=^>[m0OYmPgz:<8EVfk_rdPt7y4bL^PDxt]A/h>2JtAA)0.Tc72zuNIzj$Jk_VSy7+bC~Y[>)UHRuu%F%t<hMEYi1WM)ATaCb""l=*mn0Ey"BS&WwW3;{9jH?XiN1BRA#m+CUR*K4)tilBC<O^SKXB}CL>]K>4T/}I3X%[_Hs)WcnO+u}hEaPD[W"X6arn;C$|rP3c7C0L~qs*IpoUs5?V}nU9c(q:vNHtdE4Vq<%IR,k2GhC0w#GIQ@6Bjjr]^7}_z/m:kb_H?`&g!JYulJK+Yf(ZygG0H+ob4I+}aC=PzCm^Aosaa&9?S~Ng.X7Z$*DKu~aV5bkj$x8/}%i;u^^[8:e@~R9oo?OCY+LnHcK+gf<*sM*<Q3F;gwUHWB%!q)UP1M3C@Z+nhzaD*6_1SGRTi,vod3yQB2e1wN)k3az[#N[MN16."pB&a^02!^Tg}=/=<p2s@G?&&Z~kb$R6YpcV)=A.F1y=7pq<ikAWT6g:B2g:pz`r*Lpx=U2Fk^>fvUn:9e*,?K%f[7Yx.^Q6,Y,<xO!NozkOO9(q8`*g#2,<J_EqK3BO:z=evnS7gG"wmU=1Bwnz%ZYK_alBb*HuTS4?1W,hrxdUASAGBwAYGaWc>M_zQCoiLA?zLj2<C^C@x?F$NUR)|;f`SA1*R6YYsTAso4".lLfI[xv9NuCY4XHNE7wl+91sKNq4u;^l11J>.,htlUq;F`S}rRWI{:FcG5zJxCy|xt>Z_njmP*_WV[|x"NT@gthfZG?2M>0&_W`Tx{[,}v:l0{{48f8]x}+d0;8korRyby"!?d.(G>S#9gJ>vr@p5eR2?r>M1GR2:C`Rfq|uc7P1j&P$k[I)qCq~_g%GWrGn*)p#1=BLnDwLGJr91BNc>rqg1>X]:Y?iiQJ/W,CaX?RjJ2b."/lV#}dx1:yUJ{]Ji=cC9Y;/^tz9gCN@;v9[/xQ7N6_>(1`^"ZG?HG[sLH%I)!0c.EZm8g{!ChMUA]*}xh?xu8kMr@,B}?mX&5Cnwpr~K"?U=~O^#fsP)<N3?:ycxm+rMEo_$,YfuE:NC7[PT`cG2z;X2sFXK(f~b$2t`{;EE+U=)|<8{<pWK4q&j!Myr;vR;f@I+a{J<kP0ng4NP}}/s6zZlU,^+uU1TW$4[YV_o{:CK51dhO``zdHz5)Z>H77]D)0CcUI>IXc*0zwDwm..8ft4O{L^P=vMk.6s.i=s$4{fC$a6OH(T<m95NC@RA?i!|v&afSTX[*":bk(.Qijl0}`#{=K;bAp0LGTU},&<Twm)|1EZqTKY~$/uDS8mWS,x#LhWZ~bg5bz$X&]&&@;lMaE"g/,8`tDo$=/P=Llipw_Mr_Xuxk1ge:Zj6f32mC7iB@XhVhP3IHw+SHs~$nK0ZD)c_}tVI)I"X(7#)m=Lf5tS>%oUm&g1oC6uTy[vOyWDP0CsRt[0,9:D,fC;&Sda@!C9)#!rB0q^l#^,KA&VnO3$c!;**EbPGQei4|.)}Qh9#8`(LH6AW2cEH&@(cb~*`Qk}vSC)S.YA>;Saq+{br]`BXO#R<|sApFo7@d@[B6)+A5{[MpEoGG?_G];/R(lL`OAD^p3B#A/8:/:U1<Pj`Bui?d<8.30b{Wf6lR8,_Es(hDT.7Ia}uE*aK+W0(iy+_IpZAU[cmxZ/J&Dj:i`mj#Cd>q9X),q7^Irme?uV+iWm14ZCJ<Ml^kSzJP&Wy@q5dQ45T1,:V@|Pxi=^_"z)$lu<>E?VY5z]f."B3,8<&MEJGy]BWK(K#+G&kp0o%9a6K`@:+zT>{X4sO>0RwkPW27fVzdam3H{NZOPXpL:jtOtE&2L!"P*Q(g$U>Q93#fs2{do}iX@nZo1lHsawN@|iAGLfrYN>>6w.V3$9)Vx4do`t+Y?Dlm*`I;r<2vlYV#1`X(;,3Utna%?7<kC2%ULgi_XRp,}${MKE=$vW9u&uky4Jo}Y.7efYH:dlG"h:aB3$jh#%wmpl+I%5z&|DGE^hU680#&uv`Acu7?W"#_kYE^Hvj4rBY55I[%YcCxF&t".yvkU0@N)yCz`;3XEN@khVBSbTl&>6Am=t2ntW{a"n6mD_^*b03DHFXD>mFFDi+kd$0%?WOQ^^;sJeM><d?cFJROU:FmgK&{AHd*(wlYq/A}rswpw"K5hCXIEZQ,QCqAg@krX)D_(h#J:S3]uB:Oe{Ztsd$zjcNHGgS~{W0/%=tR_!z|Y@L#zV;.}nidioemL;G64JfQe2U#8+CYEl,Ay?Y%[RTQJXQ]ZNkD/e>/Pj1k]%|`u|nOW[)FWWVZ]kWyc79,Hz*$1Ga6=0d];7..}8Wv]e6e:XMGR%FI+v$tD)":;|%DPU`OtCUyAIyj@^hc7|G6Od2i.U=Jwtr6K%~P1xz^p]u$sV9MLBI}FHc4UJ^WkQnx~)U2vanqB:v7v_yYO2:A4U`:"W1t$E|[%+9ZaC!w(+gn#cIP=~tt!1Zr?fU`x,N,<asDLKK.}h/t?4~$046lR=&dI&KLT|LNCa8R,hfRfAqOv;g0lGoM_3wg3h;/LtoN>iy2,$T0!?~_:sL<K;|c62+22!D|e@N/{4"I{ce5])|n*e?T)a9O5iSh.vbE0Qk3"z&}]ibxhn~s|ts2?|en[5?=a_dc9xhPPg>o6<Xx|8REW$"o~e2|sk>c=kxg*X}3INY9M#WH8%"S<F1fBH.2OvUX6DvT2kr%Mm;v:_@X3_5p@$<SK<7n`8sMlT`t#ypH+Q#@Pj8Q9t@iIm*1t[$[4u{1rg>yM/sB')),P||(P=U({wasmBinary:x,locateFile:void 0})),P).then((r=>new k(r)))),W}static unload(){P&&(P=void 0)}version(){return this._exports.version()}encode(r){this._exports.reset();const e=this.uint8_heapu8(r),t=this.malloc_heapu8(e.size+Math.ceil(e.size/4));t.size=this._exports.encode(e.ptr,e.size,t.ptr);let n=this.heapu8_string(t);return t.size=this._exports.encode_end(t.ptr),n+=this.heapu8_string(t),this.free_heapu8(t),this.free_heapu8(e),n}decode(r){this._exports.reset();const e=this.string_heapu8(r),t=this.malloc_heapu8(e.size);t.size=this._exports.decode(e.ptr,e.size,t.ptr);let n=this.heapu8_uint8(t);return t.size=this._exports.decode_end(t.ptr),n=new Uint8Array([...n,...this.heapu8_view(t)]),this.free_heapu8(t),this.free_heapu8(e),n}}export{k as Base91};
