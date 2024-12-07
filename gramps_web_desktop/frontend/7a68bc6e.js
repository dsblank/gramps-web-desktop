/* Version: 24.12.0 - December 7, 2024 15:18:37 */
const t=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e=Symbol(),i=new Map;class r{constructor(t,i){if(this._$cssResult$=!0,i!==e)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let e=i.get(this.cssText);return t&&void 0===e&&(i.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const n=(t,...i)=>{const n=1===t.length?t[0]:i.reduce(((e,i,r)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[r+1]),t[0]);return new r(n,e)},a=t?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let i="";for(const e of t.cssRules)i+=e.cssText;return(t=>new r("string"==typeof t?t:t+"",e))(i)})(t):t;var s;const o=window.trustedTypes,l=o?o.emptyScript:"",c=window.reactiveElementPolyfillSupport,d={toAttribute(t,e){switch(e){case Boolean:t=t?l:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},h=(t,e)=>e!==t&&(e==e||t==t),p={attribute:!0,type:String,converter:d,reflect:!1,hasChanged:h};class u extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const r=this._$Eh(i,e);void 0!==r&&(this._$Eu.set(r,i),t.push(r))})),t}static createProperty(t,e=p){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,r=this.getPropertyDescriptor(t,i,e);void 0!==r&&Object.defineProperty(this.prototype,t,r)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(r){const n=this[t];this[e]=r,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||p}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eh(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$Eg)&&void 0!==e?e:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$Eg)||void 0===e||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])}))}createRenderRoot(){var e;const i=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,i)=>{t?e.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):i.forEach((t=>{const i=document.createElement("style"),r=window.litNonce;void 0!==r&&i.setAttribute("nonce",r),i.textContent=t.cssText,e.appendChild(i)}))})(i,this.constructor.elementStyles),i}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ES(t,e,i=p){var r,n;const a=this.constructor._$Eh(t,i);if(void 0!==a&&!0===i.reflect){const s=(null!==(n=null===(r=i.converter)||void 0===r?void 0:r.toAttribute)&&void 0!==n?n:d.toAttribute)(e,i.type);this._$Ei=t,null==s?this.removeAttribute(a):this.setAttribute(a,s),this._$Ei=null}}_$AK(t,e){var i,r,n;const a=this.constructor,s=a._$Eu.get(t);if(void 0!==s&&this._$Ei!==s){const t=a.getPropertyOptions(s),o=t.converter,l=null!==(n=null!==(r=null===(i=o)||void 0===i?void 0:i.fromAttribute)&&void 0!==r?r:"function"==typeof o?o:null)&&void 0!==n?n:d.fromAttribute;this._$Ei=s,this[s]=l(e,t.type),this._$Ei=null}}requestUpdate(t,e,i){let r=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||h)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Ei!==t&&(void 0===this._$E_&&(this._$E_=new Map),this._$E_.set(t,i))):r=!1),!this.isUpdatePending&&r&&(this._$Ep=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,e)=>this[e]=t)),this._$Et=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Eg)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){void 0!==this._$E_&&(this._$E_.forEach(((t,e)=>this._$ES(e,this[e],t))),this._$E_=void 0),this._$EU()}updated(t){}firstUpdated(t){}}var m;u.finalized=!0,u.elementProperties=new Map,u.elementStyles=[],u.shadowRootOptions={mode:"open"},null==c||c({ReactiveElement:u}),(null!==(s=globalThis.reactiveElementVersions)&&void 0!==s?s:globalThis.reactiveElementVersions=[]).push("1.1.1");const f=globalThis.trustedTypes,g=f?f.createPolicy("lit-html",{createHTML:t=>t}):void 0,_=`lit$${(Math.random()+"").slice(9)}$`,v="?"+_,y=`<${v}>`,b=document,x=(t="")=>b.createComment(t),w=t=>null===t||"object"!=typeof t&&"function"!=typeof t,k=Array.isArray,T=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,S=/-->/g,C=/>/g,E=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,$=/'/g,A=/"/g,I=/^(?:script|style|textarea)$/i,M=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),P=Symbol.for("lit-noChange"),R=Symbol.for("lit-nothing"),z=new WeakMap,D=(t,e,i)=>{var r,n;const a=null!==(r=null==i?void 0:i.renderBefore)&&void 0!==r?r:e;let s=a._$litPart$;if(void 0===s){const t=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:null;a._$litPart$=s=new N(e.insertBefore(x(),t),t,void 0,null!=i?i:{})}return s._$AI(t),s},j=b.createTreeWalker(b,129,null,!1);class O{constructor({strings:t,_$litType$:e},i){let r;this.parts=[];let n=0,a=0;const s=t.length-1,o=this.parts,[l,c]=((t,e)=>{const i=t.length-1,r=[];let n,a=2===e?"<svg>":"",s=T;for(let e=0;e<i;e++){const i=t[e];let o,l,c=-1,d=0;for(;d<i.length&&(s.lastIndex=d,l=s.exec(i),null!==l);)d=s.lastIndex,s===T?"!--"===l[1]?s=S:void 0!==l[1]?s=C:void 0!==l[2]?(I.test(l[2])&&(n=RegExp("</"+l[2],"g")),s=E):void 0!==l[3]&&(s=E):s===E?">"===l[0]?(s=null!=n?n:T,c=-1):void 0===l[1]?c=-2:(c=s.lastIndex-l[2].length,o=l[1],s=void 0===l[3]?E:'"'===l[3]?A:$):s===A||s===$?s=E:s===S||s===C?s=T:(s=E,n=void 0);const h=s===E&&t[e+1].startsWith("/>")?" ":"";a+=s===T?i+y:c>=0?(r.push(o),i.slice(0,c)+"$lit$"+i.slice(c)+_+h):i+_+(-2===c?(r.push(void 0),e):h)}const o=a+(t[i]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==g?g.createHTML(o):o,r]})(t,e);if(this.el=O.createElement(l,i),j.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(r=j.nextNode())&&o.length<s;){if(1===r.nodeType){if(r.hasAttributes()){const t=[];for(const e of r.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(_)){const i=c[a++];if(t.push(e),void 0!==i){const t=r.getAttribute(i.toLowerCase()+"$lit$").split(_),e=/([.?@])?(.*)/.exec(i);o.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?V:"?"===e[1]?Y:"@"===e[1]?Z:H})}else o.push({type:6,index:n})}for(const e of t)r.removeAttribute(e)}if(I.test(r.tagName)){const t=r.textContent.split(_),e=t.length-1;if(e>0){r.textContent=f?f.emptyScript:"";for(let i=0;i<e;i++)r.append(t[i],x()),j.nextNode(),o.push({type:2,index:++n});r.append(t[e],x())}}}else if(8===r.nodeType)if(r.data===v)o.push({type:2,index:n});else{let t=-1;for(;-1!==(t=r.data.indexOf(_,t+1));)o.push({type:7,index:n}),t+=_.length-1}n++}}static createElement(t,e){const i=b.createElement("template");return i.innerHTML=t,i}}function B(t,e,i=t,r){var n,a,s,o;if(e===P)return e;let l=void 0!==r?null===(n=i._$Cl)||void 0===n?void 0:n[r]:i._$Cu;const c=w(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(a=null==l?void 0:l._$AO)||void 0===a||a.call(l,!1),void 0===c?l=void 0:(l=new c(t),l._$AT(t,i,r)),void 0!==r?(null!==(s=(o=i)._$Cl)&&void 0!==s?s:o._$Cl=[])[r]=l:i._$Cu=l),void 0!==l&&(e=B(t,l._$AS(t,e.values),l,r)),e}class F{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:i},parts:r}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:b).importNode(i,!0);j.currentNode=n;let a=j.nextNode(),s=0,o=0,l=r[0];for(;void 0!==l;){if(s===l.index){let e;2===l.type?e=new N(a,a.nextSibling,this,t):1===l.type?e=new l.ctor(a,l.name,l.strings,this,t):6===l.type&&(e=new q(a,this,t)),this.v.push(e),l=r[++o]}s!==(null==l?void 0:l.index)&&(a=j.nextNode(),s++)}return n}m(t){let e=0;for(const i of this.v)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class N{constructor(t,e,i,r){var n;this.type=2,this._$AH=R,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=r,this._$Cg=null===(n=null==r?void 0:r.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=B(this,t,e),w(t)?t===R||null==t||""===t?(this._$AH!==R&&this._$AR(),this._$AH=R):t!==this._$AH&&t!==P&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.S(t):(t=>{var e;return k(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])})(t)?this.A(t):this.$(t)}M(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}S(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t))}$(t){this._$AH!==R&&w(this._$AH)?this._$AA.nextSibling.data=t:this.S(b.createTextNode(t)),this._$AH=t}T(t){var e;const{values:i,_$litType$:r}=t,n="number"==typeof r?this._$AC(t):(void 0===r.el&&(r.el=O.createElement(r.h,this.options)),r);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.m(i);else{const t=new F(n,this),e=t.p(this.options);t.m(i),this.S(e),this._$AH=t}}_$AC(t){let e=z.get(t.strings);return void 0===e&&z.set(t.strings,e=new O(t)),e}A(t){k(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,r=0;for(const n of t)r===e.length?e.push(i=new N(this.M(x()),this.M(x()),this,this.options)):i=e[r],i._$AI(n),r++;r<e.length&&(this._$AR(i&&i._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class H{constructor(t,e,i,r,n){this.type=1,this._$AH=R,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=R}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,r){const n=this.strings;let a=!1;if(void 0===n)t=B(this,t,e,0),a=!w(t)||t!==this._$AH&&t!==P,a&&(this._$AH=t);else{const r=t;let s,o;for(t=n[0],s=0;s<n.length-1;s++)o=B(this,r[i+s],e,s),o===P&&(o=this._$AH[s]),a||(a=!w(o)||o!==this._$AH[s]),o===R?t=R:t!==R&&(t+=(null!=o?o:"")+n[s+1]),this._$AH[s]=o}a&&!r&&this.k(t)}k(t){t===R?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class V extends H{constructor(){super(...arguments),this.type=3}k(t){this.element[this.name]=t===R?void 0:t}}const U=f?f.emptyScript:"";class Y extends H{constructor(){super(...arguments),this.type=4}k(t){t&&t!==R?this.element.setAttribute(this.name,U):this.element.removeAttribute(this.name)}}class Z extends H{constructor(t,e,i,r,n){super(t,e,i,r,n),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=B(this,t,e,0))&&void 0!==i?i:R)===P)return;const r=this._$AH,n=t===R&&r!==R||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,a=t!==R&&(r===R||n);n&&this.element.removeEventListener(this.name,this,r),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class q{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){B(this,t)}}const W=window.litHtmlPolyfillSupport;var G,X;null==W||W(O,N),(null!==(m=globalThis.litHtmlVersions)&&void 0!==m?m:globalThis.litHtmlVersions=[]).push("2.1.1");class K extends u{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=D(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return P}}K.finalized=!0,K._$litElement$=!0,null===(G=globalThis.litElementHydrateSupport)||void 0===G||G.call(globalThis,{LitElement:K});const J=globalThis.litElementPolyfillSupport;null==J||J({LitElement:K}),(null!==(X=globalThis.litElementVersions)&&void 0!==X?X:globalThis.litElementVersions=[]).push("3.1.1");var Q=function(t,e){return Q=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])},Q(t,e)};function tt(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function i(){this.constructor=t}Q(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}var et=function(){return et=Object.assign||function(t){for(var e,i=1,r=arguments.length;i<r;i++)for(var n in e=arguments[i])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t},et.apply(this,arguments)};function it(t,e,i,r){var n,a=arguments.length,s=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,r);else for(var o=t.length-1;o>=0;o--)(n=t[o])&&(s=(a<3?n(s):a>3?n(e,i,s):n(e,i))||s);return a>3&&s&&Object.defineProperty(e,i,s),s}function rt(t){var e="function"==typeof Symbol&&Symbol.iterator,i=e&&t[e],r=0;if(i)return i.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function nt(t,e){var i="function"==typeof Symbol&&t[Symbol.iterator];if(!i)return t;var r,n,a=i.call(t),s=[];try{for(;(void 0===e||e-- >0)&&!(r=a.next()).done;)s.push(r.value)}catch(t){n={error:t}}finally{try{r&&!r.done&&(i=a.return)&&i.call(a)}finally{if(n)throw n.error}}return s}"function"==typeof SuppressedError&&SuppressedError;const at=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:r}=e;return{kind:i,elements:r,finisher(e){window.customElements.define(t,e)}}})(t,e),st=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function ot(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):st(t,e)}function lt(t){return ot({...t,state:!0})}const ct=({finisher:t,descriptor:e})=>(i,r)=>{var n;if(void 0===r){const r=null!==(n=i.originalKey)&&void 0!==n?n:i.key,a=null!=e?{kind:"method",placement:"prototype",key:r,descriptor:e(i.key)}:{...i,key:r};return null!=t&&(a.finisher=function(e){t(e,r)}),a}{const n=i.constructor;void 0!==e&&Object.defineProperty(i,r,e(r)),null==t||t(n,r)}};function dt(t){return ct({finisher:(e,i)=>{Object.assign(e.prototype[i],t)}})}function ht(t,e){return ct({descriptor:i=>{const r={get(){var e,i;return null!==(i=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t))&&void 0!==i?i:null},enumerable:!0,configurable:!0};if(e){const e="symbol"==typeof i?Symbol():"__"+i;r.get=function(){var i,r;return void 0===this[e]&&(this[e]=null!==(r=null===(i=this.renderRoot)||void 0===i?void 0:i.querySelector(t))&&void 0!==r?r:null),this[e]}}return r}})}function pt(t){return ct({descriptor:e=>({async get(){var e;return await this.updateComplete,null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t)},enumerable:!0,configurable:!0})})}function ut(t,e,i){let r,n=t;return"object"==typeof t?(n=t.slot,r=t):r={flatten:e},null!=i||(i=""),ct({descriptor:t=>({get(){var t,e;const a="slot"+(n?`[name=${n}]`:":not([name])"),s=null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(a);let o=null!==(e=null==s?void 0:s.assignedNodes(r))&&void 0!==e?e:[];return i&&(o=o.filter((t=>t.nodeType===Node.ELEMENT_NODE&&t.matches(i)))),o},enumerable:!0,configurable:!0})})}(()=>{var t,e,i;const r=Symbol(),n=Symbol(),a=Symbol(),s=Symbol(),o=Symbol(),l=Symbol(),c=Symbol(),d=Symbol(),h=Symbol(),p=Symbol(),u=Symbol(),m=Symbol(),f=Symbol();class g{constructor(){this[t]=[],this[e]=[],this[i]=new Set}destructor(){this[h](this[a]);const t=this;t[r]=null,t[a]=null,t[n]=null}get top(){const t=this[r];return t[t.length-1]||null}push(t){t&&t!==this.top&&(this.remove(t),this[l](t),this[r].push(t))}remove(t){const e=this[r].indexOf(t);return-1!==e&&(this[r].splice(e,1),e===this[r].length&&this[l](this.top),!0)}pop(){const t=this.top;return t&&this.remove(t),t}has(t){return-1!==this[r].indexOf(t)}[(t=r,e=a,i=n,l)](t){const e=this[n],i=this[a];if(!t)return this[h](i),e.clear(),void(this[a]=[]);const r=this[p](t);if(r[r.length-1].parentNode!==document.body)throw Error("Non-connected element cannot be a blocking element");this[a]=r;const s=this[u](t);if(!i.length)return void this[d](r,s,e);let o=i.length-1,l=r.length-1;for(;o>0&&l>0&&i[o]===r[l];)o--,l--;i[o]!==r[l]&&this[c](i[o],r[l]),o>0&&this[h](i.slice(0,o)),l>0&&this[d](r.slice(0,l),s,null)}[c](t,e){const i=t[s];this[m](t)&&!t.inert&&(t.inert=!0,i.add(t)),i.has(e)&&(e.inert=!1,i.delete(e)),e[o]=t[o],e[s]=i,t[o]=void 0,t[s]=void 0}[h](t){for(const e of t){e[o].disconnect(),e[o]=void 0;const t=e[s];for(const e of t)e.inert=!1;e[s]=void 0}}[d](t,e,i){for(const r of t){const t=r.parentNode,n=t.children,a=new Set;for(let t=0;t<n.length;t++){const s=n[t];s===r||!this[m](s)||e&&e.has(s)||(i&&s.inert?i.add(s):(s.inert=!0,a.add(s)))}r[s]=a;const l=new MutationObserver(this[f].bind(this));r[o]=l;let c=t;const d=c;d.__shady&&d.host&&(c=d.host),l.observe(c,{childList:!0})}}[f](t){const e=this[a],i=this[n];for(const r of t){const t=r.target.host||r.target,n=t===document.body?e.length:e.indexOf(t),a=e[n-1],o=a[s];for(let t=0;t<r.removedNodes.length;t++){const e=r.removedNodes[t];if(e===a)return console.info("Detected removal of the top Blocking Element."),void this.pop();o.has(e)&&(e.inert=!1,o.delete(e))}for(let t=0;t<r.addedNodes.length;t++){const e=r.addedNodes[t];this[m](e)&&(i&&e.inert?i.add(e):(e.inert=!0,o.add(e)))}}}[m](t){return!1===/^(style|template|script)$/.test(t.localName)}[p](t){const e=[];let i=t;for(;i&&i!==document.body;)if(i.nodeType===Node.ELEMENT_NODE&&e.push(i),i.assignedSlot){for(;i=i.assignedSlot;)e.push(i);i=e.pop()}else i=i.parentNode||i.host;return e}[u](t){const e=t.shadowRoot;if(!e)return null;const i=new Set;let r,n,a;const s=e.querySelectorAll("slot");if(s.length&&s[0].assignedNodes)for(r=0;r<s.length;r++)for(a=s[r].assignedNodes({flatten:!0}),n=0;n<a.length;n++)a[n].nodeType===Node.ELEMENT_NODE&&i.add(a[n]);return i}}document.$blockingElements=new g})();var mt=function(){function t(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,i,r){return i&&t(e.prototype,i),r&&t(e,r),e}}();function ft(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}!function(){if("undefined"!=typeof window){var t=Array.prototype.slice,e=Element.prototype.matches||Element.prototype.msMatchesSelector,i=["a[href]","area[href]","input:not([disabled])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","details","summary","iframe","object","embed","[contenteditable]"].join(","),r=function(){function r(t,e){ft(this,r),this._inertManager=e,this._rootElement=t,this._managedNodes=new Set,this._rootElement.hasAttribute("aria-hidden")?this._savedAriaHidden=this._rootElement.getAttribute("aria-hidden"):this._savedAriaHidden=null,this._rootElement.setAttribute("aria-hidden","true"),this._makeSubtreeUnfocusable(this._rootElement),this._observer=new MutationObserver(this._onMutation.bind(this)),this._observer.observe(this._rootElement,{attributes:!0,childList:!0,subtree:!0})}return mt(r,[{key:"destructor",value:function(){this._observer.disconnect(),this._rootElement&&(null!==this._savedAriaHidden?this._rootElement.setAttribute("aria-hidden",this._savedAriaHidden):this._rootElement.removeAttribute("aria-hidden")),this._managedNodes.forEach((function(t){this._unmanageNode(t.node)}),this),this._observer=null,this._rootElement=null,this._managedNodes=null,this._inertManager=null}},{key:"_makeSubtreeUnfocusable",value:function(t){var e=this;o(t,(function(t){return e._visitNode(t)}));var i=document.activeElement;if(!document.body.contains(t)){for(var r=t,n=void 0;r;){if(r.nodeType===Node.DOCUMENT_FRAGMENT_NODE){n=r;break}r=r.parentNode}n&&(i=n.activeElement)}t.contains(i)&&(i.blur(),i===document.activeElement&&document.body.focus())}},{key:"_visitNode",value:function(t){if(t.nodeType===Node.ELEMENT_NODE){var r=t;r!==this._rootElement&&r.hasAttribute("inert")&&this._adoptInertRoot(r),(e.call(r,i)||r.hasAttribute("tabindex"))&&this._manageNode(r)}}},{key:"_manageNode",value:function(t){var e=this._inertManager.register(t,this);this._managedNodes.add(e)}},{key:"_unmanageNode",value:function(t){var e=this._inertManager.deregister(t,this);e&&this._managedNodes.delete(e)}},{key:"_unmanageSubtree",value:function(t){var e=this;o(t,(function(t){return e._unmanageNode(t)}))}},{key:"_adoptInertRoot",value:function(t){var e=this._inertManager.getInertRoot(t);e||(this._inertManager.setInert(t,!0),e=this._inertManager.getInertRoot(t)),e.managedNodes.forEach((function(t){this._manageNode(t.node)}),this)}},{key:"_onMutation",value:function(e,i){e.forEach((function(e){var i=e.target;if("childList"===e.type)t.call(e.addedNodes).forEach((function(t){this._makeSubtreeUnfocusable(t)}),this),t.call(e.removedNodes).forEach((function(t){this._unmanageSubtree(t)}),this);else if("attributes"===e.type)if("tabindex"===e.attributeName)this._manageNode(i);else if(i!==this._rootElement&&"inert"===e.attributeName&&i.hasAttribute("inert")){this._adoptInertRoot(i);var r=this._inertManager.getInertRoot(i);this._managedNodes.forEach((function(t){i.contains(t.node)&&r._manageNode(t.node)}))}}),this)}},{key:"managedNodes",get:function(){return new Set(this._managedNodes)}},{key:"hasSavedAriaHidden",get:function(){return null!==this._savedAriaHidden}},{key:"savedAriaHidden",set:function(t){this._savedAriaHidden=t},get:function(){return this._savedAriaHidden}}]),r}(),n=function(){function t(e,i){ft(this,t),this._node=e,this._overrodeFocusMethod=!1,this._inertRoots=new Set([i]),this._savedTabIndex=null,this._destroyed=!1,this.ensureUntabbable()}return mt(t,[{key:"destructor",value:function(){if(this._throwIfDestroyed(),this._node&&this._node.nodeType===Node.ELEMENT_NODE){var t=this._node;null!==this._savedTabIndex?t.setAttribute("tabindex",this._savedTabIndex):t.removeAttribute("tabindex"),this._overrodeFocusMethod&&delete t.focus}this._node=null,this._inertRoots=null,this._destroyed=!0}},{key:"_throwIfDestroyed",value:function(){if(this.destroyed)throw new Error("Trying to access destroyed InertNode")}},{key:"ensureUntabbable",value:function(){if(this.node.nodeType===Node.ELEMENT_NODE){var t=this.node;if(e.call(t,i)){if(-1===t.tabIndex&&this.hasSavedTabIndex)return;t.hasAttribute("tabindex")&&(this._savedTabIndex=t.tabIndex),t.setAttribute("tabindex","-1"),t.nodeType===Node.ELEMENT_NODE&&(t.focus=function(){},this._overrodeFocusMethod=!0)}else t.hasAttribute("tabindex")&&(this._savedTabIndex=t.tabIndex,t.removeAttribute("tabindex"))}}},{key:"addInertRoot",value:function(t){this._throwIfDestroyed(),this._inertRoots.add(t)}},{key:"removeInertRoot",value:function(t){this._throwIfDestroyed(),this._inertRoots.delete(t),0===this._inertRoots.size&&this.destructor()}},{key:"destroyed",get:function(){return this._destroyed}},{key:"hasSavedTabIndex",get:function(){return null!==this._savedTabIndex}},{key:"node",get:function(){return this._throwIfDestroyed(),this._node}},{key:"savedTabIndex",set:function(t){this._throwIfDestroyed(),this._savedTabIndex=t},get:function(){return this._throwIfDestroyed(),this._savedTabIndex}}]),t}(),a=function(){function i(t){if(ft(this,i),!t)throw new Error("Missing required argument; InertManager needs to wrap a document.");this._document=t,this._managedNodes=new Map,this._inertRoots=new Map,this._observer=new MutationObserver(this._watchForInert.bind(this)),l(t.head||t.body||t.documentElement),"loading"===t.readyState?t.addEventListener("DOMContentLoaded",this._onDocumentLoaded.bind(this)):this._onDocumentLoaded()}return mt(i,[{key:"setInert",value:function(t,e){if(e){if(this._inertRoots.has(t))return;var i=new r(t,this);if(t.setAttribute("inert",""),this._inertRoots.set(t,i),!this._document.body.contains(t))for(var n=t.parentNode;n;)11===n.nodeType&&l(n),n=n.parentNode}else{if(!this._inertRoots.has(t))return;this._inertRoots.get(t).destructor(),this._inertRoots.delete(t),t.removeAttribute("inert")}}},{key:"getInertRoot",value:function(t){return this._inertRoots.get(t)}},{key:"register",value:function(t,e){var i=this._managedNodes.get(t);return void 0!==i?i.addInertRoot(e):i=new n(t,e),this._managedNodes.set(t,i),i}},{key:"deregister",value:function(t,e){var i=this._managedNodes.get(t);return i?(i.removeInertRoot(e),i.destroyed&&this._managedNodes.delete(t),i):null}},{key:"_onDocumentLoaded",value:function(){t.call(this._document.querySelectorAll("[inert]")).forEach((function(t){this.setInert(t,!0)}),this),this._observer.observe(this._document.body||this._document.documentElement,{attributes:!0,subtree:!0,childList:!0})}},{key:"_watchForInert",value:function(i,r){var n=this;i.forEach((function(i){switch(i.type){case"childList":t.call(i.addedNodes).forEach((function(i){if(i.nodeType===Node.ELEMENT_NODE){var r=t.call(i.querySelectorAll("[inert]"));e.call(i,"[inert]")&&r.unshift(i),r.forEach((function(t){this.setInert(t,!0)}),n)}}),n);break;case"attributes":if("inert"!==i.attributeName)return;var r=i.target,a=r.hasAttribute("inert");n.setInert(r,a)}}),this)}}]),i}();if(!Element.prototype.hasOwnProperty("inert")){var s=new a(document);Object.defineProperty(Element.prototype,"inert",{enumerable:!0,get:function(){return this.hasAttribute("inert")},set:function(t){s.setInert(this,t)}})}}function o(t,e,i){if(t.nodeType==Node.ELEMENT_NODE){var r=t;e&&e(r);var n=r.shadowRoot;if(n)return void o(n,e);if("content"==r.localName){for(var a=r,s=a.getDistributedNodes?a.getDistributedNodes():[],l=0;l<s.length;l++)o(s[l],e);return}if("slot"==r.localName){for(var c=r,d=c.assignedNodes?c.assignedNodes({flatten:!0}):[],h=0;h<d.length;h++)o(d[h],e);return}}for(var p=t.firstChild;null!=p;)o(p,e),p=p.nextSibling}function l(t){if(!t.querySelector("style#inert-style, link#inert-style")){var e=document.createElement("style");e.setAttribute("id","inert-style"),e.textContent="\n[inert] {\n  pointer-events: none;\n  cursor: default;\n}\n\n[inert], [inert] * {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n",t.appendChild(e)}}}();var gt={ANIMATE:"mdc-drawer--animate",CLOSING:"mdc-drawer--closing",DISMISSIBLE:"mdc-drawer--dismissible",MODAL:"mdc-drawer--modal",OPEN:"mdc-drawer--open",OPENING:"mdc-drawer--opening",ROOT:"mdc-drawer"},_t={APP_CONTENT_SELECTOR:".mdc-drawer-app-content",CLOSE_EVENT:"MDCDrawer:closed",OPEN_EVENT:"MDCDrawer:opened",SCRIM_SELECTOR:".mdc-drawer-scrim",LIST_SELECTOR:".mdc-list,.mdc-deprecated-list",LIST_ITEM_ACTIVATED_SELECTOR:".mdc-list-item--activated,.mdc-deprecated-list-item--activated"},vt=function(){function t(t){void 0===t&&(t={}),this.adapter=t}return Object.defineProperty(t,"cssClasses",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{}},enumerable:!1,configurable:!0}),t.prototype.init=function(){},t.prototype.destroy=function(){},t}(),yt=function(t){function e(i){var r=t.call(this,et(et({},e.defaultAdapter),i))||this;return r.animationFrame=0,r.animationTimer=0,r}return tt(e,t),Object.defineProperty(e,"strings",{get:function(){return _t},enumerable:!1,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return gt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},elementHasClass:function(){return!1},notifyClose:function(){},notifyOpen:function(){},saveFocus:function(){},restoreFocus:function(){},focusActiveNavigationItem:function(){},trapFocus:function(){},releaseFocus:function(){}}},enumerable:!1,configurable:!0}),e.prototype.destroy=function(){this.animationFrame&&cancelAnimationFrame(this.animationFrame),this.animationTimer&&clearTimeout(this.animationTimer)},e.prototype.open=function(){var t=this;this.isOpen()||this.isOpening()||this.isClosing()||(this.adapter.addClass(gt.OPEN),this.adapter.addClass(gt.ANIMATE),this.runNextAnimationFrame((function(){t.adapter.addClass(gt.OPENING)})),this.adapter.saveFocus())},e.prototype.close=function(){!this.isOpen()||this.isOpening()||this.isClosing()||this.adapter.addClass(gt.CLOSING)},e.prototype.isOpen=function(){return this.adapter.hasClass(gt.OPEN)},e.prototype.isOpening=function(){return this.adapter.hasClass(gt.OPENING)||this.adapter.hasClass(gt.ANIMATE)},e.prototype.isClosing=function(){return this.adapter.hasClass(gt.CLOSING)},e.prototype.handleKeydown=function(t){var e=t.keyCode;("Escape"===t.key||27===e)&&this.close()},e.prototype.handleTransitionEnd=function(t){var e=gt.OPENING,i=gt.CLOSING,r=gt.OPEN,n=gt.ANIMATE,a=gt.ROOT;this.isElement(t.target)&&this.adapter.elementHasClass(t.target,a)&&(this.isClosing()?(this.adapter.removeClass(r),this.closed(),this.adapter.restoreFocus(),this.adapter.notifyClose()):(this.adapter.focusActiveNavigationItem(),this.opened(),this.adapter.notifyOpen()),this.adapter.removeClass(n),this.adapter.removeClass(e),this.adapter.removeClass(i))},e.prototype.opened=function(){},e.prototype.closed=function(){},e.prototype.runNextAnimationFrame=function(t){var e=this;cancelAnimationFrame(this.animationFrame),this.animationFrame=requestAnimationFrame((function(){e.animationFrame=0,clearTimeout(e.animationTimer),e.animationTimer=setTimeout(t,0)}))},e.prototype.isElement=function(t){return Boolean(t.classList)},e}(vt),bt=yt,xt=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return tt(e,t),e.prototype.handleScrimClick=function(){this.close()},e.prototype.opened=function(){this.adapter.trapFocus()},e.prototype.closed=function(){this.adapter.releaseFocus()},e}(yt);const wt=t=>t.nodeType===Node.ELEMENT_NODE;function kt(t){return{addClass:e=>{t.classList.add(e)},removeClass:e=>{t.classList.remove(e)},hasClass:e=>t.classList.contains(e)}}let Tt=!1;const St=()=>{},Ct={get passive(){return Tt=!0,!1}};document.addEventListener("x",St,Ct),document.removeEventListener("x",St);const Et=Tt,$t=(t=window.document)=>{let e=t.activeElement;const i=[];if(!e)return i;for(;e&&(i.push(e),e.shadowRoot);)e=e.shadowRoot.activeElement;return i},At=t=>{const e=$t();if(!e.length)return!1;const i=e[e.length-1],r=new Event("check-if-focused",{bubbles:!0,composed:!0});let n=[];const a=t=>{n=t.composedPath()};return document.body.addEventListener("check-if-focused",a),i.dispatchEvent(r),document.body.removeEventListener("check-if-focused",a),-1!==n.indexOf(t)};class It extends K{click(){if(this.mdcRoot)return this.mdcRoot.focus(),void this.mdcRoot.click();super.click()}createFoundation(){void 0!==this.mdcFoundation&&this.mdcFoundation.destroy(),this.mdcFoundationClass&&(this.mdcFoundation=new this.mdcFoundationClass(this.createAdapter()),this.mdcFoundation.init())}firstUpdated(){this.createFoundation()}}const Mt=t=>(e,i)=>{if(e.constructor._observers){if(!e.constructor.hasOwnProperty("_observers")){const t=e.constructor._observers;e.constructor._observers=new Map,t.forEach(((t,i)=>e.constructor._observers.set(i,t)))}}else{e.constructor._observers=new Map;const t=e.updated;e.updated=function(e){t.call(this,e),e.forEach(((t,e)=>{const i=this.constructor._observers.get(e);void 0!==i&&i.call(this,this[e],t)}))}}e.constructor._observers.set(i,t)},Lt=1,Pt=2,Rt=3,zt=4,Dt=t=>(...e)=>({_$litDirective$:t,values:e});class jt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}const Ot=Dt(class extends jt{constructor(t){var e;if(super(t),t.type!==Lt||"class"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){var i,r;if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.et=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in e)e[t]&&!(null===(i=this.et)||void 0===i?void 0:i.has(t))&&this.st.add(t);return this.render(e)}const n=t.element.classList;this.st.forEach((t=>{t in e||(n.remove(t),this.st.delete(t))}));for(const t in e){const i=!!e[t];i===this.st.has(t)||(null===(r=this.et)||void 0===r?void 0:r.has(t))||(i?(n.add(t),this.st.add(t)):(n.remove(t),this.st.delete(t)))}return P}}),Bt=document.$blockingElements;class Ft extends It{constructor(){super(...arguments),this._previousFocus=null,this.open=!1,this.hasHeader=!1,this.type=""}get mdcFoundationClass(){return"modal"===this.type?xt:bt}createAdapter(){return Object.assign(Object.assign({},kt(this.mdcRoot)),{elementHasClass:(t,e)=>t.classList.contains(e),saveFocus:()=>{this._previousFocus=this.getRootNode().activeElement},restoreFocus:()=>{this._previousFocus&&this._previousFocus.focus&&this._previousFocus.focus()},notifyClose:()=>{this.open=!1,this.dispatchEvent(new Event(_t.CLOSE_EVENT,{bubbles:!0,cancelable:!0}))},notifyOpen:()=>{this.open=!0,this.dispatchEvent(new Event(_t.OPEN_EVENT,{bubbles:!0,cancelable:!0}))},focusActiveNavigationItem:()=>{},trapFocus:()=>{Bt.push(this),this.appContent.inert=!0},releaseFocus:()=>{Bt.remove(this),this.appContent.inert=!1}})}_handleScrimClick(){this.mdcFoundation instanceof xt&&this.mdcFoundation.handleScrimClick()}render(){const t="dismissible"===this.type||"modal"===this.type,e="modal"===this.type,i=this.hasHeader?M`
      <div class="mdc-drawer__header">
        <h3 class="mdc-drawer__title"><slot name="title"></slot></h3>
        <h6 class="mdc-drawer__subtitle"><slot name="subtitle"></slot></h6>
        <slot name="header"></slot>
      </div>
      `:"";return M`
      <aside class="mdc-drawer ${Ot({"mdc-drawer--dismissible":t,"mdc-drawer--modal":e})}">
        ${i}
        <div class="mdc-drawer__content"><slot></slot></div>
      </aside>
      ${e?M`<div class="mdc-drawer-scrim"
                          @click="${this._handleScrimClick}"></div>`:""}
      <div class="mdc-drawer-app-content">
        <slot name="appContent"></slot>
      </div>
      `}firstUpdated(){this.mdcRoot.addEventListener("keydown",(t=>this.mdcFoundation.handleKeydown(t))),this.mdcRoot.addEventListener("transitionend",(t=>this.mdcFoundation.handleTransitionEnd(t)))}updated(t){t.has("type")&&this.createFoundation()}}it([ht(".mdc-drawer")],Ft.prototype,"mdcRoot",void 0),it([ht(".mdc-drawer-app-content")],Ft.prototype,"appContent",void 0),it([Mt((function(t){""!==this.type&&(t?this.mdcFoundation.open():this.mdcFoundation.close())})),ot({type:Boolean,reflect:!0})],Ft.prototype,"open",void 0),it([ot({type:Boolean})],Ft.prototype,"hasHeader",void 0),it([ot({reflect:!0})],Ft.prototype,"type",void 0);const Nt=n`.mdc-drawer{border-color:rgba(0, 0, 0, 0.12);background-color:#fff;background-color:var(--mdc-theme-surface, #fff);border-top-left-radius:0;border-top-right-radius:0;border-top-right-radius:var(--mdc-shape-large, 0);border-bottom-right-radius:0;border-bottom-right-radius:var(--mdc-shape-large, 0);border-bottom-left-radius:0;z-index:6;width:256px;display:flex;flex-direction:column;flex-shrink:0;box-sizing:border-box;height:100%;border-right-width:1px;border-right-style:solid;overflow:hidden;transition-property:transform;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.mdc-drawer .mdc-drawer__title{color:rgba(0, 0, 0, 0.87)}.mdc-drawer .mdc-deprecated-list-group__subheader{color:rgba(0, 0, 0, 0.6)}.mdc-drawer .mdc-drawer__subtitle{color:rgba(0, 0, 0, 0.6)}.mdc-drawer .mdc-deprecated-list-item__graphic{color:rgba(0, 0, 0, 0.6)}.mdc-drawer .mdc-deprecated-list-item{color:rgba(0, 0, 0, 0.87)}.mdc-drawer .mdc-deprecated-list-item--activated .mdc-deprecated-list-item__graphic{color:#6200ee}.mdc-drawer .mdc-deprecated-list-item--activated{color:rgba(98, 0, 238, 0.87)}[dir=rtl] .mdc-drawer,.mdc-drawer[dir=rtl]{border-top-left-radius:0;border-top-left-radius:var(--mdc-shape-large, 0);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:0;border-bottom-left-radius:var(--mdc-shape-large, 0)}.mdc-drawer .mdc-deprecated-list-item{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-drawer.mdc-drawer--open:not(.mdc-drawer--closing)+.mdc-drawer-app-content{margin-left:256px;margin-right:0}[dir=rtl] .mdc-drawer.mdc-drawer--open:not(.mdc-drawer--closing)+.mdc-drawer-app-content,.mdc-drawer.mdc-drawer--open:not(.mdc-drawer--closing)+.mdc-drawer-app-content[dir=rtl]{margin-left:0;margin-right:256px}[dir=rtl] .mdc-drawer,.mdc-drawer[dir=rtl]{border-right-width:0;border-left-width:1px;border-right-style:none;border-left-style:solid}.mdc-drawer .mdc-deprecated-list-item{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-subtitle2-font-size, 0.875rem);line-height:1.375rem;line-height:var(--mdc-typography-subtitle2-line-height, 1.375rem);font-weight:500;font-weight:var(--mdc-typography-subtitle2-font-weight, 500);letter-spacing:0.0071428571em;letter-spacing:var(--mdc-typography-subtitle2-letter-spacing, 0.0071428571em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle2-text-transform, inherit);height:calc(48px - 2 * 4px);margin:8px 8px;padding:0 8px}.mdc-drawer .mdc-deprecated-list-item:nth-child(1){margin-top:2px}.mdc-drawer .mdc-deprecated-list-item:nth-last-child(1){margin-bottom:0}.mdc-drawer .mdc-deprecated-list-group__subheader{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);display:block;margin-top:0;line-height:normal;margin:0;padding:0 16px}.mdc-drawer .mdc-deprecated-list-group__subheader::before{display:inline-block;width:0;height:24px;content:"";vertical-align:0}.mdc-drawer .mdc-deprecated-list-divider{margin:3px 0 4px}.mdc-drawer .mdc-deprecated-list-item__text,.mdc-drawer .mdc-deprecated-list-item__graphic{pointer-events:none}.mdc-drawer--animate{transform:translateX(-100%)}[dir=rtl] .mdc-drawer--animate,.mdc-drawer--animate[dir=rtl]{transform:translateX(100%)}.mdc-drawer--opening{transform:translateX(0);transition-duration:250ms}[dir=rtl] .mdc-drawer--opening,.mdc-drawer--opening[dir=rtl]{transform:translateX(0)}.mdc-drawer--closing{transform:translateX(-100%);transition-duration:200ms}[dir=rtl] .mdc-drawer--closing,.mdc-drawer--closing[dir=rtl]{transform:translateX(100%)}.mdc-drawer__header{flex-shrink:0;box-sizing:border-box;min-height:64px;padding:0 16px 4px}.mdc-drawer__title{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-headline6-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1.25rem;font-size:var(--mdc-typography-headline6-font-size, 1.25rem);line-height:2rem;line-height:var(--mdc-typography-headline6-line-height, 2rem);font-weight:500;font-weight:var(--mdc-typography-headline6-font-weight, 500);letter-spacing:0.0125em;letter-spacing:var(--mdc-typography-headline6-letter-spacing, 0.0125em);text-decoration:inherit;text-decoration:var(--mdc-typography-headline6-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-headline6-text-transform, inherit);display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-drawer__title::before{display:inline-block;width:0;height:36px;content:"";vertical-align:0}.mdc-drawer__title::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-drawer__subtitle{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);display:block;margin-top:0;line-height:normal;margin-bottom:0}.mdc-drawer__subtitle::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-drawer__content{height:100%;overflow-y:auto;-webkit-overflow-scrolling:touch}.mdc-drawer--dismissible{left:0;right:initial;display:none;position:absolute}[dir=rtl] .mdc-drawer--dismissible,.mdc-drawer--dismissible[dir=rtl]{left:initial;right:0}.mdc-drawer--dismissible.mdc-drawer--open{display:flex}.mdc-drawer-app-content{margin-left:0;margin-right:0;position:relative}[dir=rtl] .mdc-drawer-app-content,.mdc-drawer-app-content[dir=rtl]{margin-left:0;margin-right:0}.mdc-drawer--modal{box-shadow:0px 8px 10px -5px rgba(0, 0, 0, 0.2),0px 16px 24px 2px rgba(0, 0, 0, 0.14),0px 6px 30px 5px rgba(0,0,0,.12);left:0;right:initial;display:none;position:fixed}.mdc-drawer--modal+.mdc-drawer-scrim{background-color:rgba(0, 0, 0, 0.32)}[dir=rtl] .mdc-drawer--modal,.mdc-drawer--modal[dir=rtl]{left:initial;right:0}.mdc-drawer--modal.mdc-drawer--open{display:flex}.mdc-drawer-scrim{display:none;position:fixed;top:0;left:0;width:100%;height:100%;z-index:5;transition-property:opacity;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.mdc-drawer--open+.mdc-drawer-scrim{display:block}.mdc-drawer--animate+.mdc-drawer-scrim{opacity:0}.mdc-drawer--opening+.mdc-drawer-scrim{transition-duration:250ms;opacity:1}.mdc-drawer--closing+.mdc-drawer-scrim{transition-duration:200ms;opacity:0}.mdc-drawer-app-content{overflow:auto;flex:1}:host{display:flex;height:100%}.mdc-drawer{width:256px;width:var(--mdc-drawer-width, 256px)}.mdc-drawer.mdc-drawer--open:not(.mdc-drawer--closing)+.mdc-drawer-app-content{margin-left:256px;margin-left:var(--mdc-drawer-width, 256px);margin-right:0}[dir=rtl] .mdc-drawer.mdc-drawer--open:not(.mdc-drawer--closing)+.mdc-drawer-app-content,.mdc-drawer.mdc-drawer--open:not(.mdc-drawer--closing)+.mdc-drawer-app-content[dir=rtl]{margin-left:0;margin-right:256px;margin-right:var(--mdc-drawer-width, 256px)}`;let Ht=class extends Ft{};Ht.styles=[Nt],Ht=it([at("mwc-drawer")],Ht);var Vt={ACTIVE:"mdc-tab-indicator--active",FADE:"mdc-tab-indicator--fade",NO_TRANSITION:"mdc-tab-indicator--no-transition"},Ut={CONTENT_SELECTOR:".mdc-tab-indicator__content"},Yt=function(t){function e(i){return t.call(this,et(et({},e.defaultAdapter),i))||this}return tt(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return Vt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return Ut},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},computeContentClientRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},setContentStyleProperty:function(){}}},enumerable:!1,configurable:!0}),e.prototype.computeContentClientRect=function(){return this.adapter.computeContentClientRect()},e}(vt),Zt=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return tt(e,t),e.prototype.activate=function(){this.adapter.addClass(Yt.cssClasses.ACTIVE)},e.prototype.deactivate=function(){this.adapter.removeClass(Yt.cssClasses.ACTIVE)},e}(Yt),qt=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return tt(e,t),e.prototype.activate=function(t){if(t){var e=this.computeContentClientRect(),i=t.width/e.width,r=t.left-e.left;this.adapter.addClass(Yt.cssClasses.NO_TRANSITION),this.adapter.setContentStyleProperty("transform","translateX("+r+"px) scaleX("+i+")"),this.computeContentClientRect(),this.adapter.removeClass(Yt.cssClasses.NO_TRANSITION),this.adapter.addClass(Yt.cssClasses.ACTIVE),this.adapter.setContentStyleProperty("transform","")}else this.adapter.addClass(Yt.cssClasses.ACTIVE)},e.prototype.deactivate=function(){this.adapter.removeClass(Yt.cssClasses.ACTIVE)},e}(Yt);class Wt extends It{constructor(){super(...arguments),this.icon="",this.fade=!1}get mdcFoundationClass(){return this.fade?Zt:qt}render(){const t={"mdc-tab-indicator__content--icon":this.icon,"material-icons":this.icon,"mdc-tab-indicator__content--underline":!this.icon};return M`
      <span class="mdc-tab-indicator ${Ot({"mdc-tab-indicator--fade":this.fade})}">
        <span class="mdc-tab-indicator__content ${Ot(t)}">${this.icon}</span>
      </span>
      `}updated(t){t.has("fade")&&this.createFoundation()}createAdapter(){return Object.assign(Object.assign({},kt(this.mdcRoot)),{computeContentClientRect:()=>this.contentElement.getBoundingClientRect(),setContentStyleProperty:(t,e)=>this.contentElement.style.setProperty(t,e)})}computeContentClientRect(){return this.mdcFoundation.computeContentClientRect()}activate(t){this.mdcFoundation.activate(t)}deactivate(){this.mdcFoundation.deactivate()}}it([ht(".mdc-tab-indicator")],Wt.prototype,"mdcRoot",void 0),it([ht(".mdc-tab-indicator__content")],Wt.prototype,"contentElement",void 0),it([ot()],Wt.prototype,"icon",void 0),it([ot({type:Boolean})],Wt.prototype,"fade",void 0);const Gt=n`.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}.mdc-tab-indicator .mdc-tab-indicator__content--underline{border-color:#6200ee;border-color:var(--mdc-theme-primary, #6200ee)}.mdc-tab-indicator .mdc-tab-indicator__content--icon{color:#018786;color:var(--mdc-theme-secondary, #018786)}.mdc-tab-indicator .mdc-tab-indicator__content--underline{border-top-width:2px}.mdc-tab-indicator .mdc-tab-indicator__content--icon{height:34px;font-size:34px}.mdc-tab-indicator{display:flex;position:absolute;top:0;left:0;justify-content:center;width:100%;height:100%;pointer-events:none;z-index:1}.mdc-tab-indicator__content{transform-origin:left;opacity:0}.mdc-tab-indicator__content--underline{align-self:flex-end;box-sizing:border-box;width:100%;border-top-style:solid}.mdc-tab-indicator__content--icon{align-self:center;margin:0 auto}.mdc-tab-indicator--active .mdc-tab-indicator__content{opacity:1}.mdc-tab-indicator .mdc-tab-indicator__content{transition:250ms transform cubic-bezier(0.4, 0, 0.2, 1)}.mdc-tab-indicator--no-transition .mdc-tab-indicator__content{transition:none}.mdc-tab-indicator--fade .mdc-tab-indicator__content{transition:150ms opacity linear}.mdc-tab-indicator--active.mdc-tab-indicator--fade .mdc-tab-indicator__content{transition-delay:100ms}`;let Xt=class extends Wt{};function Kt(t,e){return(t.matches||t.webkitMatchesSelector||t.msMatchesSelector).call(t,e)}Xt.styles=[Gt],Xt=it([at("mwc-tab-indicator")],Xt);var Jt={BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation",ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded"},Qt={VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top"},te={DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,INITIAL_ORIGIN_SCALE:.6,PADDING:10,TAP_DELAY_MS:300};var ee=["touchstart","pointerdown","mousedown","keydown"],ie=["touchend","pointerup","mouseup","contextmenu"],re=[],ne=function(t){function e(i){var r=t.call(this,et(et({},e.defaultAdapter),i))||this;return r.activationAnimationHasEnded=!1,r.activationTimer=0,r.fgDeactivationRemovalTimer=0,r.fgScale="0",r.frame={width:0,height:0},r.initialSize=0,r.layoutFrame=0,r.maxRadius=0,r.unboundedCoords={left:0,top:0},r.activationState=r.defaultActivationState(),r.activationTimerCallback=function(){r.activationAnimationHasEnded=!0,r.runDeactivationUXLogicIfReady()},r.activateHandler=function(t){r.activateImpl(t)},r.deactivateHandler=function(){r.deactivateImpl()},r.focusHandler=function(){r.handleFocus()},r.blurHandler=function(){r.handleBlur()},r.resizeHandler=function(){r.layout()},r}return tt(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return Jt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return Qt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return te},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},browserSupportsCssVars:function(){return!0},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},containsEventTarget:function(){return!0},deregisterDocumentInteractionHandler:function(){},deregisterInteractionHandler:function(){},deregisterResizeHandler:function(){},getWindowPageOffset:function(){return{x:0,y:0}},isSurfaceActive:function(){return!0},isSurfaceDisabled:function(){return!0},isUnbounded:function(){return!0},registerDocumentInteractionHandler:function(){},registerInteractionHandler:function(){},registerResizeHandler:function(){},removeClass:function(){},updateCssVariable:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var t=this,i=this.supportsPressRipple();if(this.registerRootHandlers(i),i){var r=e.cssClasses,n=r.ROOT,a=r.UNBOUNDED;requestAnimationFrame((function(){t.adapter.addClass(n),t.adapter.isUnbounded()&&(t.adapter.addClass(a),t.layoutInternal())}))}},e.prototype.destroy=function(){var t=this;if(this.supportsPressRipple()){this.activationTimer&&(clearTimeout(this.activationTimer),this.activationTimer=0,this.adapter.removeClass(e.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer&&(clearTimeout(this.fgDeactivationRemovalTimer),this.fgDeactivationRemovalTimer=0,this.adapter.removeClass(e.cssClasses.FG_DEACTIVATION));var i=e.cssClasses,r=i.ROOT,n=i.UNBOUNDED;requestAnimationFrame((function(){t.adapter.removeClass(r),t.adapter.removeClass(n),t.removeCssVars()}))}this.deregisterRootHandlers(),this.deregisterDeactivationHandlers()},e.prototype.activate=function(t){this.activateImpl(t)},e.prototype.deactivate=function(){this.deactivateImpl()},e.prototype.layout=function(){var t=this;this.layoutFrame&&cancelAnimationFrame(this.layoutFrame),this.layoutFrame=requestAnimationFrame((function(){t.layoutInternal(),t.layoutFrame=0}))},e.prototype.setUnbounded=function(t){var i=e.cssClasses.UNBOUNDED;t?this.adapter.addClass(i):this.adapter.removeClass(i)},e.prototype.handleFocus=function(){var t=this;requestAnimationFrame((function(){return t.adapter.addClass(e.cssClasses.BG_FOCUSED)}))},e.prototype.handleBlur=function(){var t=this;requestAnimationFrame((function(){return t.adapter.removeClass(e.cssClasses.BG_FOCUSED)}))},e.prototype.supportsPressRipple=function(){return this.adapter.browserSupportsCssVars()},e.prototype.defaultActivationState=function(){return{activationEvent:void 0,hasDeactivationUXRun:!1,isActivated:!1,isProgrammatic:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1}},e.prototype.registerRootHandlers=function(t){var e,i;if(t){try{for(var r=rt(ee),n=r.next();!n.done;n=r.next()){var a=n.value;this.adapter.registerInteractionHandler(a,this.activateHandler)}}catch(t){e={error:t}}finally{try{n&&!n.done&&(i=r.return)&&i.call(r)}finally{if(e)throw e.error}}this.adapter.isUnbounded()&&this.adapter.registerResizeHandler(this.resizeHandler)}this.adapter.registerInteractionHandler("focus",this.focusHandler),this.adapter.registerInteractionHandler("blur",this.blurHandler)},e.prototype.registerDeactivationHandlers=function(t){var e,i;if("keydown"===t.type)this.adapter.registerInteractionHandler("keyup",this.deactivateHandler);else try{for(var r=rt(ie),n=r.next();!n.done;n=r.next()){var a=n.value;this.adapter.registerDocumentInteractionHandler(a,this.deactivateHandler)}}catch(t){e={error:t}}finally{try{n&&!n.done&&(i=r.return)&&i.call(r)}finally{if(e)throw e.error}}},e.prototype.deregisterRootHandlers=function(){var t,e;try{for(var i=rt(ee),r=i.next();!r.done;r=i.next()){var n=r.value;this.adapter.deregisterInteractionHandler(n,this.activateHandler)}}catch(e){t={error:e}}finally{try{r&&!r.done&&(e=i.return)&&e.call(i)}finally{if(t)throw t.error}}this.adapter.deregisterInteractionHandler("focus",this.focusHandler),this.adapter.deregisterInteractionHandler("blur",this.blurHandler),this.adapter.isUnbounded()&&this.adapter.deregisterResizeHandler(this.resizeHandler)},e.prototype.deregisterDeactivationHandlers=function(){var t,e;this.adapter.deregisterInteractionHandler("keyup",this.deactivateHandler);try{for(var i=rt(ie),r=i.next();!r.done;r=i.next()){var n=r.value;this.adapter.deregisterDocumentInteractionHandler(n,this.deactivateHandler)}}catch(e){t={error:e}}finally{try{r&&!r.done&&(e=i.return)&&e.call(i)}finally{if(t)throw t.error}}},e.prototype.removeCssVars=function(){var t=this,i=e.strings;Object.keys(i).forEach((function(e){0===e.indexOf("VAR_")&&t.adapter.updateCssVariable(i[e],null)}))},e.prototype.activateImpl=function(t){var e=this;if(!this.adapter.isSurfaceDisabled()){var i=this.activationState;if(!i.isActivated){var r=this.previousActivationEvent;if(!(r&&void 0!==t&&r.type!==t.type))i.isActivated=!0,i.isProgrammatic=void 0===t,i.activationEvent=t,i.wasActivatedByPointer=!i.isProgrammatic&&(void 0!==t&&("mousedown"===t.type||"touchstart"===t.type||"pointerdown"===t.type)),void 0!==t&&re.length>0&&re.some((function(t){return e.adapter.containsEventTarget(t)}))?this.resetActivationState():(void 0!==t&&(re.push(t.target),this.registerDeactivationHandlers(t)),i.wasElementMadeActive=this.checkElementMadeActive(t),i.wasElementMadeActive&&this.animateActivation(),requestAnimationFrame((function(){re=[],i.wasElementMadeActive||void 0===t||" "!==t.key&&32!==t.keyCode||(i.wasElementMadeActive=e.checkElementMadeActive(t),i.wasElementMadeActive&&e.animateActivation()),i.wasElementMadeActive||(e.activationState=e.defaultActivationState())})))}}},e.prototype.checkElementMadeActive=function(t){return void 0===t||"keydown"!==t.type||this.adapter.isSurfaceActive()},e.prototype.animateActivation=function(){var t=this,i=e.strings,r=i.VAR_FG_TRANSLATE_START,n=i.VAR_FG_TRANSLATE_END,a=e.cssClasses,s=a.FG_DEACTIVATION,o=a.FG_ACTIVATION,l=e.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal();var c="",d="";if(!this.adapter.isUnbounded()){var h=this.getFgTranslationCoordinates(),p=h.startPoint,u=h.endPoint;c=p.x+"px, "+p.y+"px",d=u.x+"px, "+u.y+"px"}this.adapter.updateCssVariable(r,c),this.adapter.updateCssVariable(n,d),clearTimeout(this.activationTimer),clearTimeout(this.fgDeactivationRemovalTimer),this.rmBoundedActivationClasses(),this.adapter.removeClass(s),this.adapter.computeBoundingRect(),this.adapter.addClass(o),this.activationTimer=setTimeout((function(){t.activationTimerCallback()}),l)},e.prototype.getFgTranslationCoordinates=function(){var t,e=this.activationState,i=e.activationEvent;return t=e.wasActivatedByPointer?function(t,e,i){if(!t)return{x:0,y:0};var r,n,a=e.x,s=e.y,o=a+i.left,l=s+i.top;if("touchstart"===t.type){var c=t;r=c.changedTouches[0].pageX-o,n=c.changedTouches[0].pageY-l}else{var d=t;r=d.pageX-o,n=d.pageY-l}return{x:r,y:n}}(i,this.adapter.getWindowPageOffset(),this.adapter.computeBoundingRect()):{x:this.frame.width/2,y:this.frame.height/2},{startPoint:t={x:t.x-this.initialSize/2,y:t.y-this.initialSize/2},endPoint:{x:this.frame.width/2-this.initialSize/2,y:this.frame.height/2-this.initialSize/2}}},e.prototype.runDeactivationUXLogicIfReady=function(){var t=this,i=e.cssClasses.FG_DEACTIVATION,r=this.activationState,n=r.hasDeactivationUXRun,a=r.isActivated;(n||!a)&&this.activationAnimationHasEnded&&(this.rmBoundedActivationClasses(),this.adapter.addClass(i),this.fgDeactivationRemovalTimer=setTimeout((function(){t.adapter.removeClass(i)}),te.FG_DEACTIVATION_MS))},e.prototype.rmBoundedActivationClasses=function(){var t=e.cssClasses.FG_ACTIVATION;this.adapter.removeClass(t),this.activationAnimationHasEnded=!1,this.adapter.computeBoundingRect()},e.prototype.resetActivationState=function(){var t=this;this.previousActivationEvent=this.activationState.activationEvent,this.activationState=this.defaultActivationState(),setTimeout((function(){return t.previousActivationEvent=void 0}),e.numbers.TAP_DELAY_MS)},e.prototype.deactivateImpl=function(){var t=this,e=this.activationState;if(e.isActivated){var i=et({},e);e.isProgrammatic?(requestAnimationFrame((function(){t.animateDeactivation(i)})),this.resetActivationState()):(this.deregisterDeactivationHandlers(),requestAnimationFrame((function(){t.activationState.hasDeactivationUXRun=!0,t.animateDeactivation(i),t.resetActivationState()})))}},e.prototype.animateDeactivation=function(t){var e=t.wasActivatedByPointer,i=t.wasElementMadeActive;(e||i)&&this.runDeactivationUXLogicIfReady()},e.prototype.layoutInternal=function(){var t=this;this.frame=this.adapter.computeBoundingRect();var i=Math.max(this.frame.height,this.frame.width);this.maxRadius=this.adapter.isUnbounded()?i:Math.sqrt(Math.pow(t.frame.width,2)+Math.pow(t.frame.height,2))+e.numbers.PADDING;var r=Math.floor(i*e.numbers.INITIAL_ORIGIN_SCALE);this.adapter.isUnbounded()&&r%2!=0?this.initialSize=r-1:this.initialSize=r,this.fgScale=""+this.maxRadius/this.initialSize,this.updateLayoutCssVars()},e.prototype.updateLayoutCssVars=function(){var t=e.strings,i=t.VAR_FG_SIZE,r=t.VAR_LEFT,n=t.VAR_TOP,a=t.VAR_FG_SCALE;this.adapter.updateCssVariable(i,this.initialSize+"px"),this.adapter.updateCssVariable(a,this.fgScale),this.adapter.isUnbounded()&&(this.unboundedCoords={left:Math.round(this.frame.width/2-this.initialSize/2),top:Math.round(this.frame.height/2-this.initialSize/2)},this.adapter.updateCssVariable(r,this.unboundedCoords.left+"px"),this.adapter.updateCssVariable(n,this.unboundedCoords.top+"px"))},e}(vt),ae=ne;const se=Dt(class extends jt{constructor(t){var e;if(super(t),t.type!==Lt||"style"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,i)=>{const r=t[i];return null==r?e:e+`${i=i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`}),"")}update(t,[e]){const{style:i}=t.element;if(void 0===this.ct){this.ct=new Set;for(const t in e)this.ct.add(t);return this.render(e)}this.ct.forEach((t=>{null==e[t]&&(this.ct.delete(t),t.includes("-")?i.removeProperty(t):i[t]="")}));for(const t in e){const r=e[t];null!=r&&(this.ct.add(t),t.includes("-")?i.setProperty(t,r):i[t]=r)}return P}});class oe extends It{constructor(){super(...arguments),this.primary=!1,this.accent=!1,this.unbounded=!1,this.disabled=!1,this.activated=!1,this.selected=!1,this.internalUseStateLayerCustomProperties=!1,this.hovering=!1,this.bgFocused=!1,this.fgActivation=!1,this.fgDeactivation=!1,this.fgScale="",this.fgSize="",this.translateStart="",this.translateEnd="",this.leftPos="",this.topPos="",this.mdcFoundationClass=ae}get isActive(){return Kt(this.parentElement||this,":active")}createAdapter(){return{browserSupportsCssVars:()=>!0,isUnbounded:()=>this.unbounded,isSurfaceActive:()=>this.isActive,isSurfaceDisabled:()=>this.disabled,addClass:t=>{switch(t){case"mdc-ripple-upgraded--background-focused":this.bgFocused=!0;break;case"mdc-ripple-upgraded--foreground-activation":this.fgActivation=!0;break;case"mdc-ripple-upgraded--foreground-deactivation":this.fgDeactivation=!0}},removeClass:t=>{switch(t){case"mdc-ripple-upgraded--background-focused":this.bgFocused=!1;break;case"mdc-ripple-upgraded--foreground-activation":this.fgActivation=!1;break;case"mdc-ripple-upgraded--foreground-deactivation":this.fgDeactivation=!1}},containsEventTarget:()=>!0,registerInteractionHandler:()=>{},deregisterInteractionHandler:()=>{},registerDocumentInteractionHandler:()=>{},deregisterDocumentInteractionHandler:()=>{},registerResizeHandler:()=>{},deregisterResizeHandler:()=>{},updateCssVariable:(t,e)=>{switch(t){case"--mdc-ripple-fg-scale":this.fgScale=e;break;case"--mdc-ripple-fg-size":this.fgSize=e;break;case"--mdc-ripple-fg-translate-end":this.translateEnd=e;break;case"--mdc-ripple-fg-translate-start":this.translateStart=e;break;case"--mdc-ripple-left":this.leftPos=e;break;case"--mdc-ripple-top":this.topPos=e}},computeBoundingRect:()=>(this.parentElement||this).getBoundingClientRect(),getWindowPageOffset:()=>({x:window.pageXOffset,y:window.pageYOffset})}}startPress(t){this.waitForFoundation((()=>{this.mdcFoundation.activate(t)}))}endPress(){this.waitForFoundation((()=>{this.mdcFoundation.deactivate()}))}startFocus(){this.waitForFoundation((()=>{this.mdcFoundation.handleFocus()}))}endFocus(){this.waitForFoundation((()=>{this.mdcFoundation.handleBlur()}))}startHover(){this.hovering=!0}endHover(){this.hovering=!1}waitForFoundation(t){this.mdcFoundation?t():this.updateComplete.then(t)}update(t){t.has("disabled")&&this.disabled&&this.endHover(),super.update(t)}render(){const t=this.activated&&(this.primary||!this.accent),e=this.selected&&(this.primary||!this.accent),i={"mdc-ripple-surface--accent":this.accent,"mdc-ripple-surface--primary--activated":t,"mdc-ripple-surface--accent--activated":this.accent&&this.activated,"mdc-ripple-surface--primary--selected":e,"mdc-ripple-surface--accent--selected":this.accent&&this.selected,"mdc-ripple-surface--disabled":this.disabled,"mdc-ripple-surface--hover":this.hovering,"mdc-ripple-surface--primary":this.primary,"mdc-ripple-surface--selected":this.selected,"mdc-ripple-upgraded--background-focused":this.bgFocused,"mdc-ripple-upgraded--foreground-activation":this.fgActivation,"mdc-ripple-upgraded--foreground-deactivation":this.fgDeactivation,"mdc-ripple-upgraded--unbounded":this.unbounded,"mdc-ripple-surface--internal-use-state-layer-custom-properties":this.internalUseStateLayerCustomProperties};return M`
        <div class="mdc-ripple-surface mdc-ripple-upgraded ${Ot(i)}"
          style="${se({"--mdc-ripple-fg-scale":this.fgScale,"--mdc-ripple-fg-size":this.fgSize,"--mdc-ripple-fg-translate-end":this.translateEnd,"--mdc-ripple-fg-translate-start":this.translateStart,"--mdc-ripple-left":this.leftPos,"--mdc-ripple-top":this.topPos})}"></div>`}}it([ht(".mdc-ripple-surface")],oe.prototype,"mdcRoot",void 0),it([ot({type:Boolean})],oe.prototype,"primary",void 0),it([ot({type:Boolean})],oe.prototype,"accent",void 0),it([ot({type:Boolean})],oe.prototype,"unbounded",void 0),it([ot({type:Boolean})],oe.prototype,"disabled",void 0),it([ot({type:Boolean})],oe.prototype,"activated",void 0),it([ot({type:Boolean})],oe.prototype,"selected",void 0),it([ot({type:Boolean})],oe.prototype,"internalUseStateLayerCustomProperties",void 0),it([lt()],oe.prototype,"hovering",void 0),it([lt()],oe.prototype,"bgFocused",void 0),it([lt()],oe.prototype,"fgActivation",void 0),it([lt()],oe.prototype,"fgDeactivation",void 0),it([lt()],oe.prototype,"fgScale",void 0),it([lt()],oe.prototype,"fgSize",void 0),it([lt()],oe.prototype,"translateStart",void 0),it([lt()],oe.prototype,"translateEnd",void 0),it([lt()],oe.prototype,"leftPos",void 0),it([lt()],oe.prototype,"topPos",void 0);const le=n`.mdc-ripple-surface{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity;position:relative;outline:none;overflow:hidden}.mdc-ripple-surface::before,.mdc-ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-ripple-surface::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-ripple-surface::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-ripple-surface.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface::before,.mdc-ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded],.mdc-ripple-upgraded--unbounded{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::after,.mdc-ripple-upgraded--unbounded::before,.mdc-ripple-upgraded--unbounded::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::before,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface::before,.mdc-ripple-surface::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-ripple-surface:hover::before,.mdc-ripple-surface.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;display:block}:host .mdc-ripple-surface{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;will-change:unset}.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary:hover::before,.mdc-ripple-surface--primary.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before,.mdc-ripple-surface--primary--activated::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--activated:hover::before,.mdc-ripple-surface--primary--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--primary--selected::before,.mdc-ripple-surface--primary--selected::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--selected:hover::before,.mdc-ripple-surface--primary--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent:hover::before,.mdc-ripple-surface--accent.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before,.mdc-ripple-surface--accent--activated::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--activated:hover::before,.mdc-ripple-surface--accent--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--accent--selected::before,.mdc-ripple-surface--accent--selected::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--selected:hover::before,.mdc-ripple-surface--accent--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--disabled{opacity:0}.mdc-ripple-surface--internal-use-state-layer-custom-properties::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties::after{background-color:#000;background-color:var(--mdc-ripple-hover-state-layer-color, #000)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:hover::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-state-layer-opacity, 0.04)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}`;let ce=class extends oe{};ce.styles=[le],ce=it([at("mwc-ripple")],ce);class de{constructor(t){this.startPress=e=>{t().then((t=>{t&&t.startPress(e)}))},this.endPress=()=>{t().then((t=>{t&&t.endPress()}))},this.startFocus=()=>{t().then((t=>{t&&t.startFocus()}))},this.endFocus=()=>{t().then((t=>{t&&t.endFocus()}))},this.startHover=()=>{t().then((t=>{t&&t.startHover()}))},this.endHover=()=>{t().then((t=>{t&&t.endHover()}))}}}var he={ACTIVE:"mdc-tab--active"},pe={ARIA_SELECTED:"aria-selected",CONTENT_SELECTOR:".mdc-tab__content",INTERACTED_EVENT:"MDCTab:interacted",RIPPLE_SELECTOR:".mdc-tab__ripple",TABINDEX:"tabIndex",TAB_INDICATOR_SELECTOR:".mdc-tab-indicator"},ue=function(t){function e(i){var r=t.call(this,et(et({},e.defaultAdapter),i))||this;return r.focusOnActivate=!0,r}return tt(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return he},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return pe},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setAttr:function(){},activateIndicator:function(){},deactivateIndicator:function(){},notifyInteracted:function(){},getOffsetLeft:function(){return 0},getOffsetWidth:function(){return 0},getContentOffsetLeft:function(){return 0},getContentOffsetWidth:function(){return 0},focus:function(){}}},enumerable:!1,configurable:!0}),e.prototype.handleClick=function(){this.adapter.notifyInteracted()},e.prototype.isActive=function(){return this.adapter.hasClass(he.ACTIVE)},e.prototype.setFocusOnActivate=function(t){this.focusOnActivate=t},e.prototype.activate=function(t){this.adapter.addClass(he.ACTIVE),this.adapter.setAttr(pe.ARIA_SELECTED,"true"),this.adapter.setAttr(pe.TABINDEX,"0"),this.adapter.activateIndicator(t),this.focusOnActivate&&this.adapter.focus()},e.prototype.deactivate=function(){this.isActive()&&(this.adapter.removeClass(he.ACTIVE),this.adapter.setAttr(pe.ARIA_SELECTED,"false"),this.adapter.setAttr(pe.TABINDEX,"-1"),this.adapter.deactivateIndicator())},e.prototype.computeDimensions=function(){var t=this.adapter.getOffsetWidth(),e=this.adapter.getOffsetLeft(),i=this.adapter.getContentOffsetWidth(),r=this.adapter.getContentOffsetLeft();return{contentLeft:e+r,contentRight:e+r+i,rootLeft:e,rootRight:e+t}},e}(vt);let me=0;class fe extends It{constructor(){super(...arguments),this.mdcFoundationClass=ue,this.label="",this.icon="",this.hasImageIcon=!1,this.isFadingIndicator=!1,this.minWidth=!1,this.isMinWidthIndicator=!1,this.indicatorIcon="",this.stacked=!1,this.focusOnActivate=!0,this._active=!1,this.initFocus=!1,this.shouldRenderRipple=!1,this.useStateLayerCustomProperties=!1,this.rippleElement=null,this.rippleHandlers=new de((()=>(this.shouldRenderRipple=!0,this.ripple.then((t=>this.rippleElement=t)),this.ripple)))}get active(){return this._active}connectedCallback(){this.dir=document.dir,super.connectedCallback()}firstUpdated(){super.firstUpdated(),this.id=this.id||"mdc-tab-"+ ++me}render(){const t={"mdc-tab--min-width":this.minWidth,"mdc-tab--stacked":this.stacked};let e=M``;(this.hasImageIcon||this.icon)&&(e=M`
        <span class="mdc-tab__icon material-icons"><slot name="icon">${this.icon}</slot></span>`);let i=M``;return this.label&&(i=M`
        <span class="mdc-tab__text-label">${this.label}</span>`),M`
      <button
        @click="${this.handleClick}"
        class="mdc-tab ${Ot(t)}"
        role="tab"
        aria-selected="false"
        tabindex="-1"
        @focus="${this.focus}"
        @blur="${this.handleBlur}"
        @mousedown="${this.handleRippleMouseDown}"
        @mouseenter="${this.handleRippleMouseEnter}"
        @mouseleave="${this.handleRippleMouseLeave}"
        @touchstart="${this.handleRippleTouchStart}"
        @touchend="${this.handleRippleDeactivate}"
        @touchcancel="${this.handleRippleDeactivate}">
        <span class="mdc-tab__content">
          ${e}
          ${i}
          ${this.isMinWidthIndicator?this.renderIndicator():""}
        </span>
        ${this.isMinWidthIndicator?"":this.renderIndicator()}
        ${this.renderRipple()}
      </button>`}renderIndicator(){return M`<mwc-tab-indicator
        .icon="${this.indicatorIcon}"
        .fade="${this.isFadingIndicator}"></mwc-tab-indicator>`}renderRipple(){return this.shouldRenderRipple?M`<mwc-ripple primary
        .internalUseStateLayerCustomProperties="${this.useStateLayerCustomProperties}"></mwc-ripple>`:""}createAdapter(){return Object.assign(Object.assign({},kt(this.mdcRoot)),{setAttr:(t,e)=>this.mdcRoot.setAttribute(t,e),activateIndicator:async t=>{await this.tabIndicator.updateComplete,this.tabIndicator.activate(t)},deactivateIndicator:async()=>{await this.tabIndicator.updateComplete,this.tabIndicator.deactivate()},notifyInteracted:()=>this.dispatchEvent(new CustomEvent(ue.strings.INTERACTED_EVENT,{detail:{tabId:this.id},bubbles:!0,composed:!0,cancelable:!0})),getOffsetLeft:()=>this.offsetLeft,getOffsetWidth:()=>this.mdcRoot.offsetWidth,getContentOffsetLeft:()=>this._contentElement.offsetLeft,getContentOffsetWidth:()=>this._contentElement.offsetWidth,focus:()=>{this.initFocus?this.initFocus=!1:this.mdcRoot.focus()}})}activate(t){t||(this.initFocus=!0),this.mdcFoundation?(this.mdcFoundation.activate(t),this.setActive(this.mdcFoundation.isActive())):this.updateComplete.then((()=>{this.mdcFoundation.activate(t),this.setActive(this.mdcFoundation.isActive())}))}deactivate(){this.mdcFoundation.deactivate(),this.setActive(this.mdcFoundation.isActive())}setActive(t){const e=this.active;e!==t&&(this._active=t,this.requestUpdate("active",e))}computeDimensions(){return this.mdcFoundation.computeDimensions()}computeIndicatorClientRect(){return this.tabIndicator.computeContentClientRect()}focus(){this.mdcRoot.focus(),this.handleFocus()}handleClick(){this.handleFocus(),this.mdcFoundation.handleClick()}handleFocus(){this.handleRippleFocus()}handleBlur(){this.handleRippleBlur()}handleRippleMouseDown(t){const e=()=>{window.removeEventListener("mouseup",e),this.handleRippleDeactivate()};window.addEventListener("mouseup",e),this.rippleHandlers.startPress(t)}handleRippleTouchStart(t){this.rippleHandlers.startPress(t)}handleRippleDeactivate(){this.rippleHandlers.endPress()}handleRippleMouseEnter(){this.rippleHandlers.startHover()}handleRippleMouseLeave(){this.rippleHandlers.endHover()}handleRippleFocus(){this.rippleHandlers.startFocus()}handleRippleBlur(){this.rippleHandlers.endFocus()}get isRippleActive(){var t;return(null===(t=this.rippleElement)||void 0===t?void 0:t.isActive)||!1}}fe.shadowRootOptions={mode:"open",delegatesFocus:!0},it([ht(".mdc-tab")],fe.prototype,"mdcRoot",void 0),it([ht("mwc-tab-indicator")],fe.prototype,"tabIndicator",void 0),it([ot()],fe.prototype,"label",void 0),it([ot()],fe.prototype,"icon",void 0),it([ot({type:Boolean})],fe.prototype,"hasImageIcon",void 0),it([ot({type:Boolean})],fe.prototype,"isFadingIndicator",void 0),it([ot({type:Boolean})],fe.prototype,"minWidth",void 0),it([ot({type:Boolean})],fe.prototype,"isMinWidthIndicator",void 0),it([ot({type:Boolean,reflect:!0,attribute:"active"})],fe.prototype,"active",null),it([ot()],fe.prototype,"indicatorIcon",void 0),it([ot({type:Boolean})],fe.prototype,"stacked",void 0),it([Mt((async function(t){await this.updateComplete,this.mdcFoundation.setFocusOnActivate(t)})),ot({type:Boolean})],fe.prototype,"focusOnActivate",void 0),it([ht(".mdc-tab__content")],fe.prototype,"_contentElement",void 0),it([lt()],fe.prototype,"shouldRenderRipple",void 0),it([lt()],fe.prototype,"useStateLayerCustomProperties",void 0),it([pt("mwc-ripple")],fe.prototype,"ripple",void 0),it([dt({passive:!0})],fe.prototype,"handleRippleTouchStart",null);const ge=n`.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}.mdc-tab{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-button-font-size, 0.875rem);line-height:2.25rem;line-height:var(--mdc-typography-button-line-height, 2.25rem);font-weight:500;font-weight:var(--mdc-typography-button-font-weight, 500);letter-spacing:0.0892857143em;letter-spacing:var(--mdc-typography-button-letter-spacing, 0.0892857143em);text-decoration:none;text-decoration:var(--mdc-typography-button-text-decoration, none);text-transform:uppercase;text-transform:var(--mdc-typography-button-text-transform, uppercase);position:relative}.mdc-tab .mdc-tab__text-label{color:rgba(0, 0, 0, 0.6)}.mdc-tab .mdc-tab__icon{color:rgba(0, 0, 0, 0.54);fill:currentColor}.mdc-tab.mdc-ripple-upgraded--background-focused.mdc-tab--active .mdc-tab__focus-ring,.mdc-tab:not(.mdc-ripple-upgraded):focus.mdc-tab--active .mdc-tab__focus-ring{pointer-events:none;border:2px solid transparent;border-radius:8px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc( 100% + -12px );width:calc( 100% + -8px );margin-top:-2px;z-index:2}@media screen and (forced-colors: active){.mdc-tab.mdc-ripple-upgraded--background-focused.mdc-tab--active .mdc-tab__focus-ring,.mdc-tab:not(.mdc-ripple-upgraded):focus.mdc-tab--active .mdc-tab__focus-ring{border-color:CanvasText}}.mdc-tab.mdc-ripple-upgraded--background-focused.mdc-tab--active .mdc-tab__focus-ring::after,.mdc-tab:not(.mdc-ripple-upgraded):focus.mdc-tab--active .mdc-tab__focus-ring::after{content:"";border:2px solid transparent;border-radius:10px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}@media screen and (forced-colors: active){.mdc-tab.mdc-ripple-upgraded--background-focused.mdc-tab--active .mdc-tab__focus-ring::after,.mdc-tab:not(.mdc-ripple-upgraded):focus.mdc-tab--active .mdc-tab__focus-ring::after{border-color:CanvasText}}.mdc-tab.mdc-ripple-upgraded--background-focused .mdc-tab__focus-ring,.mdc-tab:not(.mdc-ripple-upgraded):focus .mdc-tab__focus-ring{pointer-events:none;border:2px solid transparent;border-radius:8px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc( 100% + -8px );width:calc( 100% + -8px );z-index:2}@media screen and (forced-colors: active){.mdc-tab.mdc-ripple-upgraded--background-focused .mdc-tab__focus-ring,.mdc-tab:not(.mdc-ripple-upgraded):focus .mdc-tab__focus-ring{border-color:CanvasText}}.mdc-tab.mdc-ripple-upgraded--background-focused .mdc-tab__focus-ring::after,.mdc-tab:not(.mdc-ripple-upgraded):focus .mdc-tab__focus-ring::after{content:"";border:2px solid transparent;border-radius:10px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}@media screen and (forced-colors: active){.mdc-tab.mdc-ripple-upgraded--background-focused .mdc-tab__focus-ring::after,.mdc-tab:not(.mdc-ripple-upgraded):focus .mdc-tab__focus-ring::after{border-color:CanvasText}}.mdc-tab__content{position:relative}.mdc-tab__icon{width:24px;height:24px;font-size:24px}.mdc-tab--active .mdc-tab__text-label{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}.mdc-tab--active .mdc-tab__icon{color:#6200ee;color:var(--mdc-theme-primary, #6200ee);fill:currentColor}.mdc-tab{background:none}.mdc-tab{min-width:90px;padding-right:24px;padding-left:24px;display:flex;flex:1 0 auto;justify-content:center;box-sizing:border-box;margin:0;padding-top:0;padding-bottom:0;border:none;outline:none;text-align:center;white-space:nowrap;cursor:pointer;-webkit-appearance:none;z-index:1}.mdc-tab::-moz-focus-inner{padding:0;border:0}.mdc-tab--min-width{flex:0 1 auto}.mdc-tab__content{display:flex;align-items:center;justify-content:center;height:inherit;pointer-events:none}.mdc-tab__text-label{transition:150ms color linear;display:inline-block;line-height:1;z-index:2}.mdc-tab__icon{transition:150ms color linear;z-index:2}.mdc-tab--stacked .mdc-tab__content{flex-direction:column;align-items:center;justify-content:center}.mdc-tab--stacked .mdc-tab__text-label{padding-top:6px;padding-bottom:4px}.mdc-tab--active .mdc-tab__text-label,.mdc-tab--active .mdc-tab__icon{transition-delay:100ms}.mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon+.mdc-tab__text-label{padding-left:8px;padding-right:0}[dir=rtl] .mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon+.mdc-tab__text-label,.mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon+.mdc-tab__text-label[dir=rtl]{padding-left:0;padding-right:8px}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-tab{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-tab .mdc-tab__ripple::before,.mdc-tab .mdc-tab__ripple::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-tab .mdc-tab__ripple::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-tab .mdc-tab__ripple::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-tab.mdc-ripple-upgraded .mdc-tab__ripple::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-tab.mdc-ripple-upgraded .mdc-tab__ripple::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-tab.mdc-ripple-upgraded--unbounded .mdc-tab__ripple::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-tab.mdc-ripple-upgraded--foreground-activation .mdc-tab__ripple::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-tab.mdc-ripple-upgraded--foreground-deactivation .mdc-tab__ripple::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-tab .mdc-tab__ripple::before,.mdc-tab .mdc-tab__ripple::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-tab.mdc-ripple-upgraded .mdc-tab__ripple::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-tab .mdc-tab__ripple::before,.mdc-tab .mdc-tab__ripple::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-tab:hover .mdc-tab__ripple::before,.mdc-tab.mdc-ripple-surface--hover .mdc-tab__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-tab.mdc-ripple-upgraded--background-focused .mdc-tab__ripple::before,.mdc-tab:not(.mdc-ripple-upgraded):focus .mdc-tab__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-tab:not(.mdc-ripple-upgraded) .mdc-tab__ripple::after{transition:opacity 150ms linear}.mdc-tab:not(.mdc-ripple-upgraded):active .mdc-tab__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-tab.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-tab__ripple{position:absolute;top:0;left:0;width:100%;height:100%;overflow:hidden;will-change:transform,opacity}:host{outline:none;flex:1 0 auto;display:flex;justify-content:center;-webkit-tap-highlight-color:transparent}.mdc-tab{height:var(--mdc-tab-height, 48px);margin-left:0;margin-right:0;padding-right:var(--mdc-tab-horizontal-padding, 24px);padding-left:var(--mdc-tab-horizontal-padding, 24px)}.mdc-tab--stacked{height:var(--mdc-tab-stacked-height, 72px)}.mdc-tab::-moz-focus-inner{border:0}.mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon+.mdc-tab__text-label{padding-left:8px;padding-right:0}[dir=rtl] .mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon+.mdc-tab__text-label,.mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon+.mdc-tab__text-label[dir=rtl]{padding-left:0;padding-right:8px}.mdc-tab:not(.mdc-tab--active) .mdc-tab__text-label{color:var(--mdc-tab-text-label-color-default, rgba(0, 0, 0, 0.6))}.mdc-tab:not(.mdc-tab--active) .mdc-tab__icon{color:var(--mdc-tab-color-default, rgba(0, 0, 0, 0.54))}`;let _e=class extends fe{};_e.styles=[ge],_e=it([at("mwc-tab")],_e);var ve={ANIMATING:"mdc-tab-scroller--animating",SCROLL_AREA_SCROLL:"mdc-tab-scroller__scroll-area--scroll",SCROLL_TEST:"mdc-tab-scroller__test"},ye={AREA_SELECTOR:".mdc-tab-scroller__scroll-area",CONTENT_SELECTOR:".mdc-tab-scroller__scroll-content"},be=function(t){this.adapter=t},xe=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return tt(e,t),e.prototype.getScrollPositionRTL=function(){var t=this.adapter.getScrollAreaScrollLeft(),e=this.calculateScrollEdges().right;return Math.round(e-t)},e.prototype.scrollToRTL=function(t){var e=this.calculateScrollEdges(),i=this.adapter.getScrollAreaScrollLeft(),r=this.clampScrollValue(e.right-t);return{finalScrollPosition:r,scrollDelta:r-i}},e.prototype.incrementScrollRTL=function(t){var e=this.adapter.getScrollAreaScrollLeft(),i=this.clampScrollValue(e-t);return{finalScrollPosition:i,scrollDelta:i-e}},e.prototype.getAnimatingScrollPosition=function(t){return t},e.prototype.calculateScrollEdges=function(){return{left:0,right:this.adapter.getScrollContentOffsetWidth()-this.adapter.getScrollAreaOffsetWidth()}},e.prototype.clampScrollValue=function(t){var e=this.calculateScrollEdges();return Math.min(Math.max(e.left,t),e.right)},e}(be),we=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return tt(e,t),e.prototype.getScrollPositionRTL=function(t){var e=this.adapter.getScrollAreaScrollLeft();return Math.round(t-e)},e.prototype.scrollToRTL=function(t){var e=this.adapter.getScrollAreaScrollLeft(),i=this.clampScrollValue(-t);return{finalScrollPosition:i,scrollDelta:i-e}},e.prototype.incrementScrollRTL=function(t){var e=this.adapter.getScrollAreaScrollLeft(),i=this.clampScrollValue(e-t);return{finalScrollPosition:i,scrollDelta:i-e}},e.prototype.getAnimatingScrollPosition=function(t,e){return t-e},e.prototype.calculateScrollEdges=function(){var t=this.adapter.getScrollContentOffsetWidth();return{left:this.adapter.getScrollAreaOffsetWidth()-t,right:0}},e.prototype.clampScrollValue=function(t){var e=this.calculateScrollEdges();return Math.max(Math.min(e.right,t),e.left)},e}(be),ke=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return tt(e,t),e.prototype.getScrollPositionRTL=function(t){var e=this.adapter.getScrollAreaScrollLeft();return Math.round(e-t)},e.prototype.scrollToRTL=function(t){var e=this.adapter.getScrollAreaScrollLeft(),i=this.clampScrollValue(t);return{finalScrollPosition:i,scrollDelta:e-i}},e.prototype.incrementScrollRTL=function(t){var e=this.adapter.getScrollAreaScrollLeft(),i=this.clampScrollValue(e+t);return{finalScrollPosition:i,scrollDelta:e-i}},e.prototype.getAnimatingScrollPosition=function(t,e){return t+e},e.prototype.calculateScrollEdges=function(){return{left:this.adapter.getScrollContentOffsetWidth()-this.adapter.getScrollAreaOffsetWidth(),right:0}},e.prototype.clampScrollValue=function(t){var e=this.calculateScrollEdges();return Math.min(Math.max(e.right,t),e.left)},e}(be),Te=function(t){function e(i){var r=t.call(this,et(et({},e.defaultAdapter),i))||this;return r.isAnimating=!1,r}return tt(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return ve},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return ye},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{eventTargetMatchesSelector:function(){return!1},addClass:function(){},removeClass:function(){},addScrollAreaClass:function(){},setScrollAreaStyleProperty:function(){},setScrollContentStyleProperty:function(){},getScrollContentStyleValue:function(){return""},setScrollAreaScrollLeft:function(){},getScrollAreaScrollLeft:function(){return 0},getScrollContentOffsetWidth:function(){return 0},getScrollAreaOffsetWidth:function(){return 0},computeScrollAreaClientRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},computeScrollContentClientRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},computeHorizontalScrollbarHeight:function(){return 0}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var t=this.adapter.computeHorizontalScrollbarHeight();this.adapter.setScrollAreaStyleProperty("margin-bottom",-t+"px"),this.adapter.addScrollAreaClass(e.cssClasses.SCROLL_AREA_SCROLL)},e.prototype.getScrollPosition=function(){if(this.isRTL())return this.computeCurrentScrollPositionRTL();var t=this.calculateCurrentTranslateX();return this.adapter.getScrollAreaScrollLeft()-t},e.prototype.handleInteraction=function(){this.isAnimating&&this.stopScrollAnimation()},e.prototype.handleTransitionEnd=function(t){var i=t.target;this.isAnimating&&this.adapter.eventTargetMatchesSelector(i,e.strings.CONTENT_SELECTOR)&&(this.isAnimating=!1,this.adapter.removeClass(e.cssClasses.ANIMATING))},e.prototype.incrementScroll=function(t){0!==t&&this.animate(this.getIncrementScrollOperation(t))},e.prototype.incrementScrollImmediate=function(t){if(0!==t){var e=this.getIncrementScrollOperation(t);0!==e.scrollDelta&&(this.stopScrollAnimation(),this.adapter.setScrollAreaScrollLeft(e.finalScrollPosition))}},e.prototype.scrollTo=function(t){this.isRTL()?this.scrollToImplRTL(t):this.scrollToImpl(t)},e.prototype.getRTLScroller=function(){return this.rtlScrollerInstance||(this.rtlScrollerInstance=this.rtlScrollerFactory()),this.rtlScrollerInstance},e.prototype.calculateCurrentTranslateX=function(){var t=this.adapter.getScrollContentStyleValue("transform");if("none"===t)return 0;var e=/\((.+?)\)/.exec(t);if(!e)return 0;var i=nt(e[1].split(","),6);i[0],i[1],i[2],i[3];var r=i[4];return i[5],parseFloat(r)},e.prototype.clampScrollValue=function(t){var e=this.calculateScrollEdges();return Math.min(Math.max(e.left,t),e.right)},e.prototype.computeCurrentScrollPositionRTL=function(){var t=this.calculateCurrentTranslateX();return this.getRTLScroller().getScrollPositionRTL(t)},e.prototype.calculateScrollEdges=function(){return{left:0,right:this.adapter.getScrollContentOffsetWidth()-this.adapter.getScrollAreaOffsetWidth()}},e.prototype.scrollToImpl=function(t){var e=this.getScrollPosition(),i=this.clampScrollValue(t),r=i-e;this.animate({finalScrollPosition:i,scrollDelta:r})},e.prototype.scrollToImplRTL=function(t){var e=this.getRTLScroller().scrollToRTL(t);this.animate(e)},e.prototype.getIncrementScrollOperation=function(t){if(this.isRTL())return this.getRTLScroller().incrementScrollRTL(t);var e=this.getScrollPosition(),i=t+e,r=this.clampScrollValue(i);return{finalScrollPosition:r,scrollDelta:r-e}},e.prototype.animate=function(t){var i=this;0!==t.scrollDelta&&(this.stopScrollAnimation(),this.adapter.setScrollAreaScrollLeft(t.finalScrollPosition),this.adapter.setScrollContentStyleProperty("transform","translateX("+t.scrollDelta+"px)"),this.adapter.computeScrollAreaClientRect(),requestAnimationFrame((function(){i.adapter.addClass(e.cssClasses.ANIMATING),i.adapter.setScrollContentStyleProperty("transform","none")})),this.isAnimating=!0)},e.prototype.stopScrollAnimation=function(){this.isAnimating=!1;var t=this.getAnimatingScrollPosition();this.adapter.removeClass(e.cssClasses.ANIMATING),this.adapter.setScrollContentStyleProperty("transform","translateX(0px)"),this.adapter.setScrollAreaScrollLeft(t)},e.prototype.getAnimatingScrollPosition=function(){var t=this.calculateCurrentTranslateX(),e=this.adapter.getScrollAreaScrollLeft();return this.isRTL()?this.getRTLScroller().getAnimatingScrollPosition(e,t):e-t},e.prototype.rtlScrollerFactory=function(){var t=this.adapter.getScrollAreaScrollLeft();this.adapter.setScrollAreaScrollLeft(t-1);var e=this.adapter.getScrollAreaScrollLeft();if(e<0)return this.adapter.setScrollAreaScrollLeft(t),new we(this.adapter);var i=this.adapter.computeScrollAreaClientRect(),r=this.adapter.computeScrollContentClientRect(),n=Math.round(r.right-i.right);return this.adapter.setScrollAreaScrollLeft(t),n===e?new ke(this.adapter):new xe(this.adapter)},e.prototype.isRTL=function(){return"rtl"===this.adapter.getScrollContentStyleValue("direction")},e}(vt),Se=Te;class Ce extends It{constructor(){super(...arguments),this.mdcFoundationClass=Se,this._scrollbarHeight=-1}_handleInteraction(){this.mdcFoundation.handleInteraction()}_handleTransitionEnd(t){this.mdcFoundation.handleTransitionEnd(t)}render(){return M`
      <div class="mdc-tab-scroller">
        <div class="mdc-tab-scroller__scroll-area"
            @wheel="${this._handleInteraction}"
            @touchstart="${this._handleInteraction}"
            @pointerdown="${this._handleInteraction}"
            @mousedown="${this._handleInteraction}"
            @keydown="${this._handleInteraction}"
            @transitionend="${this._handleTransitionEnd}">
          <div class="mdc-tab-scroller__scroll-content"><slot></slot></div>
        </div>
      </div>
      `}createAdapter(){return Object.assign(Object.assign({},kt(this.mdcRoot)),{eventTargetMatchesSelector:(t,e)=>Kt(t,e),addScrollAreaClass:t=>this.scrollAreaElement.classList.add(t),setScrollAreaStyleProperty:(t,e)=>this.scrollAreaElement.style.setProperty(t,e),setScrollContentStyleProperty:(t,e)=>this.scrollContentElement.style.setProperty(t,e),getScrollContentStyleValue:t=>window.getComputedStyle(this.scrollContentElement).getPropertyValue(t),setScrollAreaScrollLeft:t=>this.scrollAreaElement.scrollLeft=t,getScrollAreaScrollLeft:()=>this.scrollAreaElement.scrollLeft,getScrollContentOffsetWidth:()=>this.scrollContentElement.offsetWidth,getScrollAreaOffsetWidth:()=>this.scrollAreaElement.offsetWidth,computeScrollAreaClientRect:()=>this.scrollAreaElement.getBoundingClientRect(),computeScrollContentClientRect:()=>this.scrollContentElement.getBoundingClientRect(),computeHorizontalScrollbarHeight:()=>(-1===this._scrollbarHeight&&(this.scrollAreaElement.style.overflowX="scroll",this._scrollbarHeight=this.scrollAreaElement.offsetHeight-this.scrollAreaElement.clientHeight,this.scrollAreaElement.style.overflowX=""),this._scrollbarHeight)})}getScrollPosition(){return this.mdcFoundation.getScrollPosition()}getScrollContentWidth(){return this.scrollContentElement.offsetWidth}incrementScrollPosition(t){this.mdcFoundation.incrementScroll(t)}scrollToPosition(t){this.mdcFoundation.scrollTo(t)}}it([ht(".mdc-tab-scroller")],Ce.prototype,"mdcRoot",void 0),it([ht(".mdc-tab-scroller__scroll-area")],Ce.prototype,"scrollAreaElement",void 0),it([ht(".mdc-tab-scroller__scroll-content")],Ce.prototype,"scrollContentElement",void 0),it([dt({passive:!0})],Ce.prototype,"_handleInteraction",null);const Ee=n`.mdc-tab-scroller{overflow-y:hidden}.mdc-tab-scroller.mdc-tab-scroller--animating .mdc-tab-scroller__scroll-content{transition:250ms transform cubic-bezier(0.4, 0, 0.2, 1)}.mdc-tab-scroller__test{position:absolute;top:-9999px;width:100px;height:100px;overflow-x:scroll}.mdc-tab-scroller__scroll-area{-webkit-overflow-scrolling:touch;display:flex;overflow-x:hidden}.mdc-tab-scroller__scroll-area::-webkit-scrollbar,.mdc-tab-scroller__test::-webkit-scrollbar{display:none}.mdc-tab-scroller__scroll-area--scroll{overflow-x:scroll}.mdc-tab-scroller__scroll-content{position:relative;display:flex;flex:1 0 auto;transform:none;will-change:transform}.mdc-tab-scroller--align-start .mdc-tab-scroller__scroll-content{justify-content:flex-start}.mdc-tab-scroller--align-end .mdc-tab-scroller__scroll-content{justify-content:flex-end}.mdc-tab-scroller--align-center .mdc-tab-scroller__scroll-content{justify-content:center}.mdc-tab-scroller--animating .mdc-tab-scroller__scroll-area{-webkit-overflow-scrolling:auto}:host{display:flex}.mdc-tab-scroller{flex:1}`;let $e=class extends Ce{};$e.styles=[Ee],$e=it([at("mwc-tab-scroller")],$e);var Ae={ARROW_LEFT_KEY:"ArrowLeft",ARROW_RIGHT_KEY:"ArrowRight",END_KEY:"End",ENTER_KEY:"Enter",HOME_KEY:"Home",SPACE_KEY:"Space",TAB_ACTIVATED_EVENT:"MDCTabBar:activated",TAB_SCROLLER_SELECTOR:".mdc-tab-scroller",TAB_SELECTOR:".mdc-tab"},Ie={ARROW_LEFT_KEYCODE:37,ARROW_RIGHT_KEYCODE:39,END_KEYCODE:35,ENTER_KEYCODE:13,EXTRA_SCROLL_AMOUNT:20,HOME_KEYCODE:36,SPACE_KEYCODE:32},Me=new Set;Me.add(Ae.ARROW_LEFT_KEY),Me.add(Ae.ARROW_RIGHT_KEY),Me.add(Ae.END_KEY),Me.add(Ae.HOME_KEY),Me.add(Ae.ENTER_KEY),Me.add(Ae.SPACE_KEY);var Le=new Map;Le.set(Ie.ARROW_LEFT_KEYCODE,Ae.ARROW_LEFT_KEY),Le.set(Ie.ARROW_RIGHT_KEYCODE,Ae.ARROW_RIGHT_KEY),Le.set(Ie.END_KEYCODE,Ae.END_KEY),Le.set(Ie.HOME_KEYCODE,Ae.HOME_KEY),Le.set(Ie.ENTER_KEYCODE,Ae.ENTER_KEY),Le.set(Ie.SPACE_KEYCODE,Ae.SPACE_KEY);var Pe=function(t){function e(i){var r=t.call(this,et(et({},e.defaultAdapter),i))||this;return r.useAutomaticActivation=!1,r}return tt(e,t),Object.defineProperty(e,"strings",{get:function(){return Ae},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return Ie},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{scrollTo:function(){},incrementScroll:function(){},getScrollPosition:function(){return 0},getScrollContentWidth:function(){return 0},getOffsetWidth:function(){return 0},isRTL:function(){return!1},setActiveTab:function(){},activateTabAtIndex:function(){},deactivateTabAtIndex:function(){},focusTabAtIndex:function(){},getTabIndicatorClientRectAtIndex:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},getTabDimensionsAtIndex:function(){return{rootLeft:0,rootRight:0,contentLeft:0,contentRight:0}},getPreviousActiveTabIndex:function(){return-1},getFocusedTabIndex:function(){return-1},getIndexOfTabById:function(){return-1},getTabListLength:function(){return 0},notifyTabActivated:function(){}}},enumerable:!1,configurable:!0}),e.prototype.setUseAutomaticActivation=function(t){this.useAutomaticActivation=t},e.prototype.activateTab=function(t){var e,i=this.adapter.getPreviousActiveTabIndex();this.indexIsInRange(t)&&t!==i&&(-1!==i&&(this.adapter.deactivateTabAtIndex(i),e=this.adapter.getTabIndicatorClientRectAtIndex(i)),this.adapter.activateTabAtIndex(t,e),this.scrollIntoView(t),this.adapter.notifyTabActivated(t))},e.prototype.handleKeyDown=function(t){var e=this.getKeyFromEvent(t);if(void 0!==e)if(this.isActivationKey(e)||t.preventDefault(),this.useAutomaticActivation){if(this.isActivationKey(e))return;var i=this.determineTargetFromKey(this.adapter.getPreviousActiveTabIndex(),e);this.adapter.setActiveTab(i),this.scrollIntoView(i)}else{var r=this.adapter.getFocusedTabIndex();if(this.isActivationKey(e))this.adapter.setActiveTab(r);else{i=this.determineTargetFromKey(r,e);this.adapter.focusTabAtIndex(i),this.scrollIntoView(i)}}},e.prototype.handleTabInteraction=function(t){this.adapter.setActiveTab(this.adapter.getIndexOfTabById(t.detail.tabId))},e.prototype.scrollIntoView=function(t){this.indexIsInRange(t)&&(0!==t?t!==this.adapter.getTabListLength()-1?this.isRTL()?this.scrollIntoViewImplRTL(t):this.scrollIntoViewImpl(t):this.adapter.scrollTo(this.adapter.getScrollContentWidth()):this.adapter.scrollTo(0))},e.prototype.determineTargetFromKey=function(t,e){var i=this.isRTL(),r=this.adapter.getTabListLength()-1,n=t;return e===Ae.END_KEY?n=r:e===Ae.ARROW_LEFT_KEY&&!i||e===Ae.ARROW_RIGHT_KEY&&i?n-=1:e===Ae.ARROW_RIGHT_KEY&&!i||e===Ae.ARROW_LEFT_KEY&&i?n+=1:n=0,n<0?n=r:n>r&&(n=0),n},e.prototype.calculateScrollIncrement=function(t,e,i,r){var n=this.adapter.getTabDimensionsAtIndex(e),a=n.contentLeft-i-r,s=n.contentRight-i-Ie.EXTRA_SCROLL_AMOUNT,o=a+Ie.EXTRA_SCROLL_AMOUNT;return e<t?Math.min(s,0):Math.max(o,0)},e.prototype.calculateScrollIncrementRTL=function(t,e,i,r,n){var a=this.adapter.getTabDimensionsAtIndex(e),s=n-a.contentLeft-i,o=n-a.contentRight-i-r+Ie.EXTRA_SCROLL_AMOUNT,l=s-Ie.EXTRA_SCROLL_AMOUNT;return e>t?Math.max(o,0):Math.min(l,0)},e.prototype.findAdjacentTabIndexClosestToEdge=function(t,e,i,r){var n=e.rootLeft-i,a=e.rootRight-i-r,s=n+a;return n<0||s<0?t-1:a>0||s>0?t+1:-1},e.prototype.findAdjacentTabIndexClosestToEdgeRTL=function(t,e,i,r,n){var a=n-e.rootLeft-r-i,s=n-e.rootRight-i,o=a+s;return a>0||o>0?t+1:s<0||o<0?t-1:-1},e.prototype.getKeyFromEvent=function(t){return Me.has(t.key)?t.key:Le.get(t.keyCode)},e.prototype.isActivationKey=function(t){return t===Ae.SPACE_KEY||t===Ae.ENTER_KEY},e.prototype.indexIsInRange=function(t){return t>=0&&t<this.adapter.getTabListLength()},e.prototype.isRTL=function(){return this.adapter.isRTL()},e.prototype.scrollIntoViewImpl=function(t){var e=this.adapter.getScrollPosition(),i=this.adapter.getOffsetWidth(),r=this.adapter.getTabDimensionsAtIndex(t),n=this.findAdjacentTabIndexClosestToEdge(t,r,e,i);if(this.indexIsInRange(n)){var a=this.calculateScrollIncrement(t,n,e,i);this.adapter.incrementScroll(a)}},e.prototype.scrollIntoViewImplRTL=function(t){var e=this.adapter.getScrollPosition(),i=this.adapter.getOffsetWidth(),r=this.adapter.getTabDimensionsAtIndex(t),n=this.adapter.getScrollContentWidth(),a=this.findAdjacentTabIndexClosestToEdgeRTL(t,r,e,i,n);if(this.indexIsInRange(a)){var s=this.calculateScrollIncrementRTL(t,a,e,i,n);this.adapter.incrementScroll(s)}},e}(vt);class Re extends It{constructor(){super(...arguments),this.mdcFoundationClass=Pe,this.activeIndex=0,this._previousActiveIndex=-1}_handleTabInteraction(t){this.mdcFoundation.handleTabInteraction(t)}_handleKeydown(t){this.mdcFoundation.handleKeyDown(t)}render(){return M`
      <div class="mdc-tab-bar" role="tablist"
          @MDCTab:interacted="${this._handleTabInteraction}"
          @keydown="${this._handleKeydown}">
        <mwc-tab-scroller><slot></slot></mwc-tab-scroller>
      </div>
      `}_getTabs(){return this.tabsSlot.assignedNodes({flatten:!0}).filter((t=>t instanceof fe))}_getTab(t){return this._getTabs()[t]}createAdapter(){return{scrollTo:t=>this.scrollerElement.scrollToPosition(t),incrementScroll:t=>this.scrollerElement.incrementScrollPosition(t),getScrollPosition:()=>this.scrollerElement.getScrollPosition(),getScrollContentWidth:()=>this.scrollerElement.getScrollContentWidth(),getOffsetWidth:()=>this.mdcRoot.offsetWidth,isRTL:()=>"rtl"===window.getComputedStyle(this.mdcRoot).getPropertyValue("direction"),setActiveTab:t=>this.mdcFoundation.activateTab(t),activateTabAtIndex:(t,e)=>{const i=this._getTab(t);void 0!==i&&i.activate(e),this._previousActiveIndex=t},deactivateTabAtIndex:t=>{const e=this._getTab(t);void 0!==e&&e.deactivate()},focusTabAtIndex:t=>{const e=this._getTab(t);void 0!==e&&e.focus()},getTabIndicatorClientRectAtIndex:t=>{const e=this._getTab(t);return void 0!==e?e.computeIndicatorClientRect():new DOMRect},getTabDimensionsAtIndex:t=>{const e=this._getTab(t);return void 0!==e?e.computeDimensions():{rootLeft:0,rootRight:0,contentLeft:0,contentRight:0}},getPreviousActiveTabIndex:()=>this._previousActiveIndex,getFocusedTabIndex:()=>{const t=this._getTabs(),e=this.getRootNode().activeElement;return t.indexOf(e)},getIndexOfTabById:t=>{const e=this._getTabs();for(let i=0;i<e.length;i++)if(e[i].id===t)return i;return-1},getTabListLength:()=>this._getTabs().length,notifyTabActivated:t=>{this.activeIndex=t,this.dispatchEvent(new CustomEvent(Pe.strings.TAB_ACTIVATED_EVENT,{detail:{index:t},bubbles:!0,cancelable:!0}))}}}firstUpdated(){}async getUpdateComplete(){const t=await super.getUpdateComplete();return await this.scrollerElement.updateComplete,void 0===this.mdcFoundation&&this.createFoundation(),t}scrollIndexIntoView(t){this.mdcFoundation.scrollIntoView(t)}}it([ht(".mdc-tab-bar")],Re.prototype,"mdcRoot",void 0),it([ht("mwc-tab-scroller")],Re.prototype,"scrollerElement",void 0),it([ht("slot")],Re.prototype,"tabsSlot",void 0),it([Mt((async function(){await this.updateComplete,this.activeIndex!==this._previousActiveIndex&&this.mdcFoundation.activateTab(this.activeIndex)})),ot({type:Number})],Re.prototype,"activeIndex",void 0);const ze=n`.mdc-tab-bar{width:100%}.mdc-tab{height:48px}.mdc-tab--stacked{height:72px}:host{display:block}.mdc-tab-bar{flex:1}mwc-tab{--mdc-tab-height: 48px;--mdc-tab-stacked-height: 72px}`;let De=class extends Re{};De.styles=[ze],De=it([at("mwc-tab-bar")],De);var je={FIXED_CLASS:"mdc-top-app-bar--fixed",FIXED_SCROLLED_CLASS:"mdc-top-app-bar--fixed-scrolled",SHORT_CLASS:"mdc-top-app-bar--short",SHORT_COLLAPSED_CLASS:"mdc-top-app-bar--short-collapsed",SHORT_HAS_ACTION_ITEM_CLASS:"mdc-top-app-bar--short-has-action-item"},Oe={DEBOUNCE_THROTTLE_RESIZE_TIME_MS:100,MAX_TOP_APP_BAR_HEIGHT:128},Be={ACTION_ITEM_SELECTOR:".mdc-top-app-bar__action-item",NAVIGATION_EVENT:"MDCTopAppBar:nav",NAVIGATION_ICON_SELECTOR:".mdc-top-app-bar__navigation-icon",ROOT_SELECTOR:".mdc-top-app-bar",TITLE_SELECTOR:".mdc-top-app-bar__title"},Fe=function(t){function e(i){return t.call(this,et(et({},e.defaultAdapter),i))||this}return tt(e,t),Object.defineProperty(e,"strings",{get:function(){return Be},enumerable:!1,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return je},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return Oe},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setStyle:function(){},getTopAppBarHeight:function(){return 0},notifyNavigationIconClicked:function(){},getViewportScrollY:function(){return 0},getTotalActionItems:function(){return 0}}},enumerable:!1,configurable:!0}),e.prototype.handleTargetScroll=function(){},e.prototype.handleWindowResize=function(){},e.prototype.handleNavigationClick=function(){this.adapter.notifyNavigationIconClicked()},e}(vt),Ne=function(t){function e(e){var i=t.call(this,e)||this;return i.wasDocked=!0,i.isDockedShowing=!0,i.currentAppBarOffsetTop=0,i.isCurrentlyBeingResized=!1,i.resizeThrottleId=0,i.resizeDebounceId=0,i.lastScrollPosition=i.adapter.getViewportScrollY(),i.topAppBarHeight=i.adapter.getTopAppBarHeight(),i}return tt(e,t),e.prototype.destroy=function(){t.prototype.destroy.call(this),this.adapter.setStyle("top","")},e.prototype.handleTargetScroll=function(){var t=Math.max(this.adapter.getViewportScrollY(),0),e=t-this.lastScrollPosition;this.lastScrollPosition=t,this.isCurrentlyBeingResized||(this.currentAppBarOffsetTop-=e,this.currentAppBarOffsetTop>0?this.currentAppBarOffsetTop=0:Math.abs(this.currentAppBarOffsetTop)>this.topAppBarHeight&&(this.currentAppBarOffsetTop=-this.topAppBarHeight),this.moveTopAppBar())},e.prototype.handleWindowResize=function(){var t=this;this.resizeThrottleId||(this.resizeThrottleId=setTimeout((function(){t.resizeThrottleId=0,t.throttledResizeHandler()}),Oe.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)),this.isCurrentlyBeingResized=!0,this.resizeDebounceId&&clearTimeout(this.resizeDebounceId),this.resizeDebounceId=setTimeout((function(){t.handleTargetScroll(),t.isCurrentlyBeingResized=!1,t.resizeDebounceId=0}),Oe.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)},e.prototype.checkForUpdate=function(){var t=-this.topAppBarHeight,e=this.currentAppBarOffsetTop<0,i=this.currentAppBarOffsetTop>t,r=e&&i;if(r)this.wasDocked=!1;else{if(!this.wasDocked)return this.wasDocked=!0,!0;if(this.isDockedShowing!==i)return this.isDockedShowing=i,!0}return r},e.prototype.moveTopAppBar=function(){if(this.checkForUpdate()){var t=this.currentAppBarOffsetTop;Math.abs(t)>=this.topAppBarHeight&&(t=-Oe.MAX_TOP_APP_BAR_HEIGHT),this.adapter.setStyle("top",t+"px")}},e.prototype.throttledResizeHandler=function(){var t=this.adapter.getTopAppBarHeight();this.topAppBarHeight!==t&&(this.wasDocked=!1,this.currentAppBarOffsetTop-=this.topAppBarHeight-t,this.topAppBarHeight=t),this.handleTargetScroll()},e}(Fe),He=Ne;const Ve=Et?{passive:!0}:void 0;class Ue extends It{constructor(){super(...arguments),this.centerTitle=!1,this.handleTargetScroll=()=>{this.mdcFoundation.handleTargetScroll()},this.handleNavigationClick=()=>{this.mdcFoundation.handleNavigationClick()}}get scrollTarget(){return this._scrollTarget||window}set scrollTarget(t){this.unregisterScrollListener();const e=this.scrollTarget;this._scrollTarget=t,this.updateRootPosition(),this.requestUpdate("scrollTarget",e),this.registerScrollListener()}updateRootPosition(){if(this.mdcRoot){const t=this.scrollTarget===window;this.mdcRoot.style.position=t?"":"absolute"}}render(){let t=M`<span class="mdc-top-app-bar__title"><slot name="title"></slot></span>`;return this.centerTitle&&(t=M`<section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-center">${t}</section>`),M`
      <header class="mdc-top-app-bar ${Ot(this.barClasses())}">
      <div class="mdc-top-app-bar__row">
        <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start" id="navigation">
          <slot name="navigationIcon"
            @click=${this.handleNavigationClick}></slot>
          ${this.centerTitle?null:t}
        </section>
        ${this.centerTitle?t:null}
        <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" id="actions" role="toolbar">
          <slot name="actionItems"></slot>
        </section>
      </div>
    </header>
    <div class="${Ot(this.contentClasses())}">
      <slot></slot>
    </div>
    `}createAdapter(){return Object.assign(Object.assign({},kt(this.mdcRoot)),{setStyle:(t,e)=>this.mdcRoot.style.setProperty(t,e),getTopAppBarHeight:()=>this.mdcRoot.clientHeight,notifyNavigationIconClicked:()=>{this.dispatchEvent(new Event(Be.NAVIGATION_EVENT,{bubbles:!0,cancelable:!0}))},getViewportScrollY:()=>this.scrollTarget instanceof Window?this.scrollTarget.pageYOffset:this.scrollTarget.scrollTop,getTotalActionItems:()=>this._actionItemsSlot.assignedNodes({flatten:!0}).length})}registerListeners(){this.registerScrollListener()}unregisterListeners(){this.unregisterScrollListener()}registerScrollListener(){this.scrollTarget.addEventListener("scroll",this.handleTargetScroll,Ve)}unregisterScrollListener(){this.scrollTarget.removeEventListener("scroll",this.handleTargetScroll)}firstUpdated(){super.firstUpdated(),this.updateRootPosition(),this.registerListeners()}disconnectedCallback(){super.disconnectedCallback(),this.unregisterListeners()}}it([ht(".mdc-top-app-bar")],Ue.prototype,"mdcRoot",void 0),it([ht('slot[name="actionItems"]')],Ue.prototype,"_actionItemsSlot",void 0),it([ot({type:Boolean})],Ue.prototype,"centerTitle",void 0),it([ot({type:Object})],Ue.prototype,"scrollTarget",null);class Ye extends Ue{constructor(){super(...arguments),this.mdcFoundationClass=He,this.prominent=!1,this.dense=!1,this.handleResize=()=>{this.mdcFoundation.handleWindowResize()}}barClasses(){return{"mdc-top-app-bar--dense":this.dense,"mdc-top-app-bar--prominent":this.prominent,"center-title":this.centerTitle}}contentClasses(){return{"mdc-top-app-bar--fixed-adjust":!this.dense&&!this.prominent,"mdc-top-app-bar--dense-fixed-adjust":this.dense&&!this.prominent,"mdc-top-app-bar--prominent-fixed-adjust":!this.dense&&this.prominent,"mdc-top-app-bar--dense-prominent-fixed-adjust":this.dense&&this.prominent}}registerListeners(){super.registerListeners(),window.addEventListener("resize",this.handleResize,Ve)}unregisterListeners(){super.unregisterListeners(),window.removeEventListener("resize",this.handleResize)}}it([ot({type:Boolean,reflect:!0})],Ye.prototype,"prominent",void 0),it([ot({type:Boolean,reflect:!0})],Ye.prototype,"dense",void 0);const Ze=n`.mdc-top-app-bar{background-color:#6200ee;background-color:var(--mdc-theme-primary, #6200ee);color:white;display:flex;position:fixed;flex-direction:column;justify-content:space-between;box-sizing:border-box;width:100%;z-index:4}.mdc-top-app-bar .mdc-top-app-bar__action-item,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon{color:#fff;color:var(--mdc-theme-on-primary, #fff)}.mdc-top-app-bar .mdc-top-app-bar__action-item::before,.mdc-top-app-bar .mdc-top-app-bar__action-item::after,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon::before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon::after{background-color:#fff;background-color:var(--mdc-ripple-color, var(--mdc-theme-on-primary, #fff))}.mdc-top-app-bar .mdc-top-app-bar__action-item:hover::before,.mdc-top-app-bar .mdc-top-app-bar__action-item.mdc-ripple-surface--hover::before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:hover::before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon.mdc-ripple-surface--hover::before{opacity:0.08;opacity:var(--mdc-ripple-hover-opacity, 0.08)}.mdc-top-app-bar .mdc-top-app-bar__action-item.mdc-ripple-upgraded--background-focused::before,.mdc-top-app-bar .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded):focus::before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon.mdc-ripple-upgraded--background-focused::before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-top-app-bar .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded)::after,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-top-app-bar .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded):active::after,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-top-app-bar .mdc-top-app-bar__action-item.mdc-ripple-upgraded,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-top-app-bar__row{display:flex;position:relative;box-sizing:border-box;width:100%;height:64px}.mdc-top-app-bar__section{display:inline-flex;flex:1 1 auto;align-items:center;min-width:0;padding:8px 12px;z-index:1}.mdc-top-app-bar__section--align-start{justify-content:flex-start;order:-1}.mdc-top-app-bar__section--align-end{justify-content:flex-end;order:1}.mdc-top-app-bar__title{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-headline6-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1.25rem;font-size:var(--mdc-typography-headline6-font-size, 1.25rem);line-height:2rem;line-height:var(--mdc-typography-headline6-line-height, 2rem);font-weight:500;font-weight:var(--mdc-typography-headline6-font-weight, 500);letter-spacing:0.0125em;letter-spacing:var(--mdc-typography-headline6-letter-spacing, 0.0125em);text-decoration:inherit;text-decoration:var(--mdc-typography-headline6-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-headline6-text-transform, inherit);padding-left:20px;padding-right:0;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;z-index:1}[dir=rtl] .mdc-top-app-bar__title,.mdc-top-app-bar__title[dir=rtl]{padding-left:0;padding-right:20px}.mdc-top-app-bar--short-collapsed{border-top-left-radius:0;border-top-right-radius:0;border-bottom-right-radius:24px;border-bottom-left-radius:0}[dir=rtl] .mdc-top-app-bar--short-collapsed,.mdc-top-app-bar--short-collapsed[dir=rtl]{border-top-left-radius:0;border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:24px}.mdc-top-app-bar--short{top:0;right:auto;left:0;width:100%;transition:width 250ms cubic-bezier(0.4, 0, 0.2, 1)}[dir=rtl] .mdc-top-app-bar--short,.mdc-top-app-bar--short[dir=rtl]{right:0;left:auto}.mdc-top-app-bar--short .mdc-top-app-bar__row{height:56px}.mdc-top-app-bar--short .mdc-top-app-bar__section{padding:4px}.mdc-top-app-bar--short .mdc-top-app-bar__title{transition:opacity 200ms cubic-bezier(0.4, 0, 0.2, 1);opacity:1}.mdc-top-app-bar--short-collapsed{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12);width:56px;transition:width 300ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-top-app-bar--short-collapsed .mdc-top-app-bar__title{display:none}.mdc-top-app-bar--short-collapsed .mdc-top-app-bar__action-item{transition:padding 150ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item{width:112px}.mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item .mdc-top-app-bar__section--align-end{padding-left:0;padding-right:12px}[dir=rtl] .mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item .mdc-top-app-bar__section--align-end,.mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item .mdc-top-app-bar__section--align-end[dir=rtl]{padding-left:12px;padding-right:0}.mdc-top-app-bar--dense .mdc-top-app-bar__row{height:48px}.mdc-top-app-bar--dense .mdc-top-app-bar__section{padding:0 4px}.mdc-top-app-bar--dense .mdc-top-app-bar__title{padding-left:12px;padding-right:0}[dir=rtl] .mdc-top-app-bar--dense .mdc-top-app-bar__title,.mdc-top-app-bar--dense .mdc-top-app-bar__title[dir=rtl]{padding-left:0;padding-right:12px}.mdc-top-app-bar--prominent .mdc-top-app-bar__row{height:128px}.mdc-top-app-bar--prominent .mdc-top-app-bar__title{align-self:flex-end;padding-bottom:2px}.mdc-top-app-bar--prominent .mdc-top-app-bar__action-item,.mdc-top-app-bar--prominent .mdc-top-app-bar__navigation-icon{align-self:flex-start}.mdc-top-app-bar--fixed{transition:box-shadow 200ms linear}.mdc-top-app-bar--fixed-scrolled{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12);transition:box-shadow 200ms linear}.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__row{height:96px}.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__section{padding:0 12px}.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__title{padding-left:20px;padding-right:0;padding-bottom:9px}[dir=rtl] .mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__title,.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__title[dir=rtl]{padding-left:0;padding-right:20px}.mdc-top-app-bar--fixed-adjust{padding-top:64px}.mdc-top-app-bar--dense-fixed-adjust{padding-top:48px}.mdc-top-app-bar--short-fixed-adjust{padding-top:56px}.mdc-top-app-bar--prominent-fixed-adjust{padding-top:128px}.mdc-top-app-bar--dense-prominent-fixed-adjust{padding-top:96px}@media(max-width: 599px){.mdc-top-app-bar__row{height:56px}.mdc-top-app-bar__section{padding:4px}.mdc-top-app-bar--short{transition:width 200ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-top-app-bar--short-collapsed{transition:width 250ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-top-app-bar--short-collapsed .mdc-top-app-bar__section--align-end{padding-left:0;padding-right:12px}[dir=rtl] .mdc-top-app-bar--short-collapsed .mdc-top-app-bar__section--align-end,.mdc-top-app-bar--short-collapsed .mdc-top-app-bar__section--align-end[dir=rtl]{padding-left:12px;padding-right:0}.mdc-top-app-bar--prominent .mdc-top-app-bar__title{padding-bottom:6px}.mdc-top-app-bar--fixed-adjust{padding-top:56px}}:host{display:block}.mdc-top-app-bar{color:#fff;color:var(--mdc-theme-on-primary, #fff);width:100%;width:var(--mdc-top-app-bar-width, 100%)}.mdc-top-app-bar--prominent #navigation ::slotted(*),.mdc-top-app-bar--prominent #actions ::slotted(*){align-self:flex-start}#navigation ::slotted(*),#actions ::slotted(*){--mdc-icon-button-ripple-opacity: 0.24}.mdc-top-app-bar--short-collapsed #actions ::slotted(*){transition:padding 150ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-top-app-bar__section--align-center{justify-content:center}.mdc-top-app-bar__section--align-center .mdc-top-app-bar__title{padding-left:0;padding-right:0}.center-title .mdc-top-app-bar__section--align-start,.center-title .mdc-top-app-bar__section--align-end{flex-basis:0}.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__section--align-center .mdc-top-app-bar__title{padding-left:0;padding-right:0}.mdc-top-app-bar--fixed-scrolled{box-shadow:var(--mdc-top-app-bar-fixed-box-shadow, 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12))}`;let qe=class extends Ye{};qe.styles=[Ze],qe=it([at("mwc-top-app-bar")],qe);const We=n`:host{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}`;let Ge=class extends K{render(){return M`<span><slot></slot></span>`}};function Xe(t,e,i){if(void 0!==e)return function(t,e,i){const r=t.constructor;if(!i){const t=`__${e}`;if(!(i=r.getPropertyDescriptor(e,t)))throw new Error("@ariaProperty must be used after a @property decorator")}const n=i;let a="";if(!n.set)throw new Error(`@ariaProperty requires a setter for ${e}`);if(t.dispatchWizEvent)return i;const s={configurable:!0,enumerable:!0,set(t){if(""===a){const t=r.getPropertyOptions(e);a="string"==typeof t.attribute?t.attribute:e}this.hasAttribute(a)&&this.removeAttribute(a),n.set.call(this,t)}};return n.get&&(s.get=function(){return n.get.call(this)}),s}(t,e,i);throw new Error("@ariaProperty only supports TypeScript Decorators")}Ge.styles=[We],Ge=it([at("mwc-icon")],Ge);const Ke=t=>null!=t?t:R;class Je extends K{constructor(){super(...arguments),this.raised=!1,this.unelevated=!1,this.outlined=!1,this.dense=!1,this.disabled=!1,this.trailingIcon=!1,this.fullwidth=!1,this.icon="",this.label="",this.expandContent=!1,this.shouldRenderRipple=!1,this.rippleHandlers=new de((()=>(this.shouldRenderRipple=!0,this.ripple)))}renderOverlay(){return M``}renderRipple(){const t=this.raised||this.unelevated;return this.shouldRenderRipple?M`<mwc-ripple class="ripple" .primary="${!t}" .disabled="${this.disabled}"></mwc-ripple>`:""}focus(){const t=this.buttonElement;t&&(this.rippleHandlers.startFocus(),t.focus())}blur(){const t=this.buttonElement;t&&(this.rippleHandlers.endFocus(),t.blur())}getRenderClasses(){return{"mdc-button--raised":this.raised,"mdc-button--unelevated":this.unelevated,"mdc-button--outlined":this.outlined,"mdc-button--dense":this.dense}}render(){return M`
      <button
          id="button"
          class="mdc-button ${Ot(this.getRenderClasses())}"
          ?disabled="${this.disabled}"
          aria-label="${this.label||this.icon}"
          aria-haspopup="${Ke(this.ariaHasPopup)}"
          @focus="${this.handleRippleFocus}"
          @blur="${this.handleRippleBlur}"
          @mousedown="${this.handleRippleActivate}"
          @mouseenter="${this.handleRippleMouseEnter}"
          @mouseleave="${this.handleRippleMouseLeave}"
          @touchstart="${this.handleRippleActivate}"
          @touchend="${this.handleRippleDeactivate}"
          @touchcancel="${this.handleRippleDeactivate}">
        ${this.renderOverlay()}
        ${this.renderRipple()}
        <span class="leading-icon">
          <slot name="icon">
            ${this.icon&&!this.trailingIcon?this.renderIcon():""}
          </slot>
        </span>
        <span class="mdc-button__label">${this.label}</span>
        <span class="slot-container ${Ot({flex:this.expandContent})}">
          <slot></slot>
        </span>
        <span class="trailing-icon">
          <slot name="trailingIcon">
            ${this.icon&&this.trailingIcon?this.renderIcon():""}
          </slot>
        </span>
      </button>`}renderIcon(){return M`
    <mwc-icon class="mdc-button__icon">
      ${this.icon}
    </mwc-icon>`}handleRippleActivate(t){const e=()=>{window.removeEventListener("mouseup",e),this.handleRippleDeactivate()};window.addEventListener("mouseup",e),this.rippleHandlers.startPress(t)}handleRippleDeactivate(){this.rippleHandlers.endPress()}handleRippleMouseEnter(){this.rippleHandlers.startHover()}handleRippleMouseLeave(){this.rippleHandlers.endHover()}handleRippleFocus(){this.rippleHandlers.startFocus()}handleRippleBlur(){this.rippleHandlers.endFocus()}}Je.shadowRootOptions={mode:"open",delegatesFocus:!0},it([Xe,ot({type:String,attribute:"aria-haspopup"})],Je.prototype,"ariaHasPopup",void 0),it([ot({type:Boolean,reflect:!0})],Je.prototype,"raised",void 0),it([ot({type:Boolean,reflect:!0})],Je.prototype,"unelevated",void 0),it([ot({type:Boolean,reflect:!0})],Je.prototype,"outlined",void 0),it([ot({type:Boolean})],Je.prototype,"dense",void 0),it([ot({type:Boolean,reflect:!0})],Je.prototype,"disabled",void 0),it([ot({type:Boolean,attribute:"trailingicon"})],Je.prototype,"trailingIcon",void 0),it([ot({type:Boolean,reflect:!0})],Je.prototype,"fullwidth",void 0),it([ot({type:String})],Je.prototype,"icon",void 0),it([ot({type:String})],Je.prototype,"label",void 0),it([ot({type:Boolean})],Je.prototype,"expandContent",void 0),it([ht("#button")],Je.prototype,"buttonElement",void 0),it([pt("mwc-ripple")],Je.prototype,"ripple",void 0),it([lt()],Je.prototype,"shouldRenderRipple",void 0),it([dt({passive:!0})],Je.prototype,"handleRippleActivate",null);const Qe=n`.mdc-button{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-button-font-size, 0.875rem);line-height:2.25rem;line-height:var(--mdc-typography-button-line-height, 2.25rem);font-weight:500;font-weight:var(--mdc-typography-button-font-weight, 500);letter-spacing:0.0892857143em;letter-spacing:var(--mdc-typography-button-letter-spacing, 0.0892857143em);text-decoration:none;text-decoration:var(--mdc-typography-button-text-decoration, none);text-transform:uppercase;text-transform:var(--mdc-typography-button-text-transform, uppercase)}.mdc-touch-target-wrapper{display:inline}.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:0;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);background-color:#fff;background-color:var(--mdc-elevation-overlay-color, #fff)}.mdc-button{position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;min-width:64px;border:none;outline:none;line-height:inherit;user-select:none;-webkit-appearance:none;overflow:visible;vertical-align:middle;background:transparent}.mdc-button .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-button::-moz-focus-inner{padding:0;border:0}.mdc-button:active{outline:none}.mdc-button:hover{cursor:pointer}.mdc-button:disabled{cursor:default;pointer-events:none}.mdc-button .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;position:relative;vertical-align:top}[dir=rtl] .mdc-button .mdc-button__icon,.mdc-button .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0}.mdc-button .mdc-button__label{position:relative}.mdc-button .mdc-button__focus-ring{display:none}@media screen and (forced-colors: active){.mdc-button.mdc-ripple-upgraded--background-focused .mdc-button__focus-ring,.mdc-button:not(.mdc-ripple-upgraded):focus .mdc-button__focus-ring{pointer-events:none;border:2px solid transparent;border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc( 100% + 4px );width:calc( 100% + 4px );display:block}}@media screen and (forced-colors: active)and (forced-colors: active){.mdc-button.mdc-ripple-upgraded--background-focused .mdc-button__focus-ring,.mdc-button:not(.mdc-ripple-upgraded):focus .mdc-button__focus-ring{border-color:CanvasText}}@media screen and (forced-colors: active){.mdc-button.mdc-ripple-upgraded--background-focused .mdc-button__focus-ring::after,.mdc-button:not(.mdc-ripple-upgraded):focus .mdc-button__focus-ring::after{content:"";border:2px solid transparent;border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}}@media screen and (forced-colors: active)and (forced-colors: active){.mdc-button.mdc-ripple-upgraded--background-focused .mdc-button__focus-ring::after,.mdc-button:not(.mdc-ripple-upgraded):focus .mdc-button__focus-ring::after{border-color:CanvasText}}.mdc-button .mdc-button__touch{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%)}.mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:0}[dir=rtl] .mdc-button__label+.mdc-button__icon,.mdc-button__label+.mdc-button__icon[dir=rtl]{margin-left:0;margin-right:8px}svg.mdc-button__icon{fill:currentColor}.mdc-button--touch{margin-top:6px;margin-bottom:6px}.mdc-button{padding:0 8px 0 8px}.mdc-button--unelevated{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);padding:0 16px 0 16px}.mdc-button--unelevated.mdc-button--icon-trailing{padding:0 12px 0 16px}.mdc-button--unelevated.mdc-button--icon-leading{padding:0 16px 0 12px}.mdc-button--raised{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);padding:0 16px 0 16px}.mdc-button--raised.mdc-button--icon-trailing{padding:0 12px 0 16px}.mdc-button--raised.mdc-button--icon-leading{padding:0 16px 0 12px}.mdc-button--outlined{border-style:solid;transition:border 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button--outlined .mdc-button__ripple{border-style:solid;border-color:transparent}.mdc-button{height:36px;border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button:not(:disabled){color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}.mdc-button:disabled{color:rgba(0, 0, 0, 0.38)}.mdc-button .mdc-button__icon{font-size:1.125rem;width:1.125rem;height:1.125rem}.mdc-button .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--raised,.mdc-button--unelevated{height:36px;border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){background-color:#6200ee;background-color:var(--mdc-theme-primary, #6200ee)}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{background-color:rgba(0, 0, 0, 0.12)}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){color:#fff;color:var(--mdc-theme-on-primary, #fff)}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{color:rgba(0, 0, 0, 0.38)}.mdc-button--raised .mdc-button__icon,.mdc-button--unelevated .mdc-button__icon{font-size:1.125rem;width:1.125rem;height:1.125rem}.mdc-button--raised .mdc-button__ripple,.mdc-button--unelevated .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--outlined{height:36px;border-radius:4px;border-radius:var(--mdc-shape-small, 4px);padding:0 15px 0 15px;border-width:1px}.mdc-button--outlined:not(:disabled){color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}.mdc-button--outlined:disabled{color:rgba(0, 0, 0, 0.38)}.mdc-button--outlined .mdc-button__icon{font-size:1.125rem;width:1.125rem;height:1.125rem}.mdc-button--outlined .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button--outlined:not(:disabled){border-color:rgba(0, 0, 0, 0.12)}.mdc-button--outlined:disabled{border-color:rgba(0, 0, 0, 0.12)}.mdc-button--outlined.mdc-button--icon-trailing{padding:0 11px 0 15px}.mdc-button--outlined.mdc-button--icon-leading{padding:0 15px 0 11px}.mdc-button--outlined .mdc-button__ripple{top:-1px;left:-1px;bottom:-1px;right:-1px;border-width:1px}.mdc-button--outlined .mdc-button__touch{left:calc(-1 * 1px);width:calc(100% + 2 * 1px)}.mdc-button--raised{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0,0,0,.12);transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button--raised:hover,.mdc-button--raised:focus{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12)}.mdc-button--raised:active{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12)}.mdc-button--raised:disabled{box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 0px 0px rgba(0,0,0,.12)}:host{display:inline-flex;outline:none;-webkit-tap-highlight-color:transparent;vertical-align:top}:host([fullwidth]){width:100%}:host([raised]),:host([unelevated]){--mdc-ripple-color:#fff;--mdc-ripple-focus-opacity:0.24;--mdc-ripple-hover-opacity:0.08;--mdc-ripple-press-opacity:0.24}.trailing-icon ::slotted(*),.trailing-icon .mdc-button__icon,.leading-icon ::slotted(*),.leading-icon .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;position:relative;vertical-align:top;font-size:1.125rem;height:1.125rem;width:1.125rem}[dir=rtl] .trailing-icon ::slotted(*),[dir=rtl] .trailing-icon .mdc-button__icon,[dir=rtl] .leading-icon ::slotted(*),[dir=rtl] .leading-icon .mdc-button__icon,.trailing-icon ::slotted(*[dir=rtl]),.trailing-icon .mdc-button__icon[dir=rtl],.leading-icon ::slotted(*[dir=rtl]),.leading-icon .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0}.trailing-icon ::slotted(*),.trailing-icon .mdc-button__icon{margin-left:8px;margin-right:0}[dir=rtl] .trailing-icon ::slotted(*),[dir=rtl] .trailing-icon .mdc-button__icon,.trailing-icon ::slotted(*[dir=rtl]),.trailing-icon .mdc-button__icon[dir=rtl]{margin-left:0;margin-right:8px}.slot-container{display:inline-flex;align-items:center;justify-content:center}.slot-container.flex{flex:auto}.mdc-button{flex:auto;overflow:hidden;padding-left:8px;padding-left:var(--mdc-button-horizontal-padding, 8px);padding-right:8px;padding-right:var(--mdc-button-horizontal-padding, 8px)}.mdc-button--raised{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12))}.mdc-button--raised:focus{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-focus, var(--mdc-button-raised-box-shadow-hover, 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)))}.mdc-button--raised:hover{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-hover, 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12))}.mdc-button--raised:active{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-active, 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12))}.mdc-button--raised:disabled{box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-disabled, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12))}.mdc-button--raised,.mdc-button--unelevated{padding-left:16px;padding-left:var(--mdc-button-horizontal-padding, 16px);padding-right:16px;padding-right:var(--mdc-button-horizontal-padding, 16px)}.mdc-button--outlined{border-width:1px;border-width:var(--mdc-button-outline-width, 1px);padding-left:calc(16px - 1px);padding-left:calc(var(--mdc-button-horizontal-padding, 16px) - var(--mdc-button-outline-width, 1px));padding-right:calc(16px - 1px);padding-right:calc(var(--mdc-button-horizontal-padding, 16px) - var(--mdc-button-outline-width, 1px))}.mdc-button--outlined:not(:disabled){border-color:rgba(0, 0, 0, 0.12);border-color:var(--mdc-button-outline-color, rgba(0, 0, 0, 0.12))}.mdc-button--outlined .ripple{top:calc(-1 * 1px);top:calc(-1 * var(--mdc-button-outline-width, 1px));left:calc(-1 * 1px);left:calc(-1 * var(--mdc-button-outline-width, 1px));right:initial;right:initial;border-width:1px;border-width:var(--mdc-button-outline-width, 1px);border-style:solid;border-color:transparent}[dir=rtl] .mdc-button--outlined .ripple,.mdc-button--outlined .ripple[dir=rtl]{left:initial;left:initial;right:calc(-1 * 1px);right:calc(-1 * var(--mdc-button-outline-width, 1px))}.mdc-button--dense{height:28px;margin-top:0;margin-bottom:0}.mdc-button--dense .mdc-button__touch{height:100%}:host([disabled]){pointer-events:none}:host([disabled]) .mdc-button{color:rgba(0, 0, 0, 0.38);color:var(--mdc-button-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-button--raised,:host([disabled]) .mdc-button--unelevated{background-color:rgba(0, 0, 0, 0.12);background-color:var(--mdc-button-disabled-fill-color, rgba(0, 0, 0, 0.12))}:host([disabled]) .mdc-button--outlined{border-color:rgba(0, 0, 0, 0.12);border-color:var(--mdc-button-disabled-outline-color, rgba(0, 0, 0, 0.12))}`;let ti=class extends Je{};ti.styles=[Qe],ti=it([at("mwc-button")],ti);var ei={NOTCH_ELEMENT_SELECTOR:".mdc-notched-outline__notch"},ii={NOTCH_ELEMENT_PADDING:8},ri={NO_LABEL:"mdc-notched-outline--no-label",OUTLINE_NOTCHED:"mdc-notched-outline--notched",OUTLINE_UPGRADED:"mdc-notched-outline--upgraded"},ni=function(t){function e(i){return t.call(this,et(et({},e.defaultAdapter),i))||this}return tt(e,t),Object.defineProperty(e,"strings",{get:function(){return ei},enumerable:!1,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return ri},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return ii},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},setNotchWidthProperty:function(){},removeNotchWidthProperty:function(){}}},enumerable:!1,configurable:!0}),e.prototype.notch=function(t){var i=e.cssClasses.OUTLINE_NOTCHED;t>0&&(t+=ii.NOTCH_ELEMENT_PADDING),this.adapter.setNotchWidthProperty(t),this.adapter.addClass(i)},e.prototype.closeNotch=function(){var t=e.cssClasses.OUTLINE_NOTCHED;this.adapter.removeClass(t),this.adapter.removeNotchWidthProperty()},e}(vt);class ai extends It{constructor(){super(...arguments),this.mdcFoundationClass=ni,this.width=0,this.open=!1,this.lastOpen=this.open}createAdapter(){return{addClass:t=>this.mdcRoot.classList.add(t),removeClass:t=>this.mdcRoot.classList.remove(t),setNotchWidthProperty:t=>this.notchElement.style.setProperty("width",`${t}px`),removeNotchWidthProperty:()=>this.notchElement.style.removeProperty("width")}}openOrClose(t,e){this.mdcFoundation&&(t&&void 0!==e?this.mdcFoundation.notch(e):this.mdcFoundation.closeNotch())}render(){this.openOrClose(this.open,this.width);const t=Ot({"mdc-notched-outline--notched":this.open});return M`
      <span class="mdc-notched-outline ${t}">
        <span class="mdc-notched-outline__leading"></span>
        <span class="mdc-notched-outline__notch">
          <slot></slot>
        </span>
        <span class="mdc-notched-outline__trailing"></span>
      </span>`}}it([ht(".mdc-notched-outline")],ai.prototype,"mdcRoot",void 0),it([ot({type:Number})],ai.prototype,"width",void 0),it([ot({type:Boolean,reflect:!0})],ai.prototype,"open",void 0),it([ht(".mdc-notched-outline__notch")],ai.prototype,"notchElement",void 0);const si=n`.mdc-notched-outline{display:flex;position:absolute;top:0;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] .mdc-notched-outline,.mdc-notched-outline[dir=rtl]{text-align:right}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{box-sizing:border-box;height:100%;border-top:1px solid;border-bottom:1px solid;pointer-events:none}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;width:12px}[dir=rtl] .mdc-notched-outline__leading,.mdc-notched-outline__leading[dir=rtl]{border-left:none;border-right:1px solid}.mdc-notched-outline__trailing{border-left:none;border-right:1px solid;flex-grow:1}[dir=rtl] .mdc-notched-outline__trailing,.mdc-notched-outline__trailing[dir=rtl]{border-left:1px solid;border-right:none}.mdc-notched-outline__notch{flex:0 0 auto;width:auto;max-width:calc(100% - 12px * 2)}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;max-width:100%}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:calc(100% / 0.75)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none}[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch,.mdc-notched-outline--notched .mdc-notched-outline__notch[dir=rtl]{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{display:none}:host{display:block;position:absolute;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] :host,:host([dir=rtl]){text-align:right}::slotted(.mdc-floating-label){display:inline-block;position:relative;top:17px;bottom:auto;max-width:100%}::slotted(.mdc-floating-label--float-above){text-overflow:clip}.mdc-notched-outline--upgraded ::slotted(.mdc-floating-label--float-above){max-width:calc(100% / 0.75)}.mdc-notched-outline .mdc-notched-outline__leading{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}[dir=rtl] .mdc-notched-outline .mdc-notched-outline__leading,.mdc-notched-outline .mdc-notched-outline__leading[dir=rtl]{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}@supports(top: max(0%)){.mdc-notched-outline .mdc-notched-outline__leading{width:max(12px, var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-notched-outline .mdc-notched-outline__notch{max-width:calc(100% - max(12px, var(--mdc-shape-small, 4px)) * 2)}}.mdc-notched-outline .mdc-notched-outline__trailing{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}[dir=rtl] .mdc-notched-outline .mdc-notched-outline__trailing,.mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl]{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{border-color:var(--mdc-notched-outline-border-color, var(--mdc-theme-primary, #6200ee));border-width:1px;border-width:var(--mdc-notched-outline-stroke-width, 1px)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:0;padding-top:var(--mdc-notched-outline-notch-offset, 0)}`;let oi=class extends ai{};var li,ci;oi.styles=[si],oi=it([at("mwc-notched-outline")],oi);const di=null!==(ci=null===(li=window.ShadyDOM)||void 0===li?void 0:li.inUse)&&void 0!==ci&&ci;class hi extends It{constructor(){super(...arguments),this.disabled=!1,this.containingForm=null,this.formDataListener=t=>{this.disabled||this.setFormData(t.formData)}}findFormElement(){if(!this.shadowRoot||di)return null;const t=this.getRootNode().querySelectorAll("form");for(const e of Array.from(t))if(e.contains(this))return e;return null}connectedCallback(){var t;super.connectedCallback(),this.containingForm=this.findFormElement(),null===(t=this.containingForm)||void 0===t||t.addEventListener("formdata",this.formDataListener)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this.containingForm)||void 0===t||t.removeEventListener("formdata",this.formDataListener),this.containingForm=null}click(){this.formElement&&!this.disabled&&(this.formElement.focus(),this.formElement.click())}firstUpdated(){super.firstUpdated(),this.shadowRoot&&this.mdcRoot.addEventListener("change",(t=>{this.dispatchEvent(new Event("change",t))}))}}hi.shadowRootOptions={mode:"open",delegatesFocus:!0},it([ot({type:Boolean})],hi.prototype,"disabled",void 0);var pi={LABEL_FLOAT_ABOVE:"mdc-floating-label--float-above",LABEL_REQUIRED:"mdc-floating-label--required",LABEL_SHAKE:"mdc-floating-label--shake",ROOT:"mdc-floating-label"},ui=function(t){function e(i){var r=t.call(this,et(et({},e.defaultAdapter),i))||this;return r.shakeAnimationEndHandler=function(){r.handleShakeAnimationEnd()},r}return tt(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return pi},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},getWidth:function(){return 0},registerInteractionHandler:function(){},deregisterInteractionHandler:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){this.adapter.registerInteractionHandler("animationend",this.shakeAnimationEndHandler)},e.prototype.destroy=function(){this.adapter.deregisterInteractionHandler("animationend",this.shakeAnimationEndHandler)},e.prototype.getWidth=function(){return this.adapter.getWidth()},e.prototype.shake=function(t){var i=e.cssClasses.LABEL_SHAKE;t?this.adapter.addClass(i):this.adapter.removeClass(i)},e.prototype.float=function(t){var i=e.cssClasses,r=i.LABEL_FLOAT_ABOVE,n=i.LABEL_SHAKE;t?this.adapter.addClass(r):(this.adapter.removeClass(r),this.adapter.removeClass(n))},e.prototype.setRequired=function(t){var i=e.cssClasses.LABEL_REQUIRED;t?this.adapter.addClass(i):this.adapter.removeClass(i)},e.prototype.handleShakeAnimationEnd=function(){var t=e.cssClasses.LABEL_SHAKE;this.adapter.removeClass(t)},e}(vt);const mi=Dt(class extends jt{constructor(t){switch(super(t),this.foundation=null,this.previousPart=null,t.type){case Lt:case Rt:break;default:throw new Error("FloatingLabel directive only support attribute and property parts")}}update(t,[e]){if(t!==this.previousPart){this.foundation&&this.foundation.destroy(),this.previousPart=t;const e=t.element;e.classList.add("mdc-floating-label");const i=(t=>({addClass:e=>t.classList.add(e),removeClass:e=>t.classList.remove(e),getWidth:()=>t.scrollWidth,registerInteractionHandler:(e,i)=>{t.addEventListener(e,i)},deregisterInteractionHandler:(e,i)=>{t.removeEventListener(e,i)}}))(e);this.foundation=new ui(i),this.foundation.init()}return this.render(e)}render(t){return this.foundation}});var fi={LINE_RIPPLE_ACTIVE:"mdc-line-ripple--active",LINE_RIPPLE_DEACTIVATING:"mdc-line-ripple--deactivating"},gi=function(t){function e(i){var r=t.call(this,et(et({},e.defaultAdapter),i))||this;return r.transitionEndHandler=function(t){r.handleTransitionEnd(t)},r}return tt(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return fi},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setStyle:function(){},registerEventHandler:function(){},deregisterEventHandler:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){this.adapter.registerEventHandler("transitionend",this.transitionEndHandler)},e.prototype.destroy=function(){this.adapter.deregisterEventHandler("transitionend",this.transitionEndHandler)},e.prototype.activate=function(){this.adapter.removeClass(fi.LINE_RIPPLE_DEACTIVATING),this.adapter.addClass(fi.LINE_RIPPLE_ACTIVE)},e.prototype.setRippleCenter=function(t){this.adapter.setStyle("transform-origin",t+"px center")},e.prototype.deactivate=function(){this.adapter.addClass(fi.LINE_RIPPLE_DEACTIVATING)},e.prototype.handleTransitionEnd=function(t){var e=this.adapter.hasClass(fi.LINE_RIPPLE_DEACTIVATING);"opacity"===t.propertyName&&e&&(this.adapter.removeClass(fi.LINE_RIPPLE_ACTIVE),this.adapter.removeClass(fi.LINE_RIPPLE_DEACTIVATING))},e}(vt);const _i=Dt(class extends jt{constructor(t){switch(super(t),this.previousPart=null,this.foundation=null,t.type){case Lt:case Rt:return;default:throw new Error("LineRipple only support attribute and property parts.")}}update(t,e){if(this.previousPart!==t){this.foundation&&this.foundation.destroy(),this.previousPart=t;const e=t.element;e.classList.add("mdc-line-ripple");const i=(t=>({addClass:e=>t.classList.add(e),removeClass:e=>t.classList.remove(e),hasClass:e=>t.classList.contains(e),setStyle:(e,i)=>t.style.setProperty(e,i),registerEventHandler:(e,i)=>{t.addEventListener(e,i)},deregisterEventHandler:(e,i)=>{t.removeEventListener(e,i)}}))(e);this.foundation=new gi(i),this.foundation.init()}return this.render()}render(){return this.foundation}});var vi={ARIA_CONTROLS:"aria-controls",ARIA_DESCRIBEDBY:"aria-describedby",INPUT_SELECTOR:".mdc-text-field__input",LABEL_SELECTOR:".mdc-floating-label",LEADING_ICON_SELECTOR:".mdc-text-field__icon--leading",LINE_RIPPLE_SELECTOR:".mdc-line-ripple",OUTLINE_SELECTOR:".mdc-notched-outline",PREFIX_SELECTOR:".mdc-text-field__affix--prefix",SUFFIX_SELECTOR:".mdc-text-field__affix--suffix",TRAILING_ICON_SELECTOR:".mdc-text-field__icon--trailing"},yi={DISABLED:"mdc-text-field--disabled",FOCUSED:"mdc-text-field--focused",HELPER_LINE:"mdc-text-field-helper-line",INVALID:"mdc-text-field--invalid",LABEL_FLOATING:"mdc-text-field--label-floating",NO_LABEL:"mdc-text-field--no-label",OUTLINED:"mdc-text-field--outlined",ROOT:"mdc-text-field",TEXTAREA:"mdc-text-field--textarea",WITH_LEADING_ICON:"mdc-text-field--with-leading-icon",WITH_TRAILING_ICON:"mdc-text-field--with-trailing-icon",WITH_INTERNAL_COUNTER:"mdc-text-field--with-internal-counter"},bi={LABEL_SCALE:.75},xi=["pattern","min","max","required","step","minlength","maxlength"],wi=["color","date","datetime-local","month","range","time","week"],ki=["mousedown","touchstart"],Ti=["click","keydown"],Si=function(t){function e(i,r){void 0===r&&(r={});var n=t.call(this,et(et({},e.defaultAdapter),i))||this;return n.isFocused=!1,n.receivedUserInput=!1,n.valid=!0,n.useNativeValidation=!0,n.validateOnValueChange=!0,n.helperText=r.helperText,n.characterCounter=r.characterCounter,n.leadingIcon=r.leadingIcon,n.trailingIcon=r.trailingIcon,n.inputFocusHandler=function(){n.activateFocus()},n.inputBlurHandler=function(){n.deactivateFocus()},n.inputInputHandler=function(){n.handleInput()},n.setPointerXOffset=function(t){n.setTransformOrigin(t)},n.textFieldInteractionHandler=function(){n.handleTextFieldInteraction()},n.validationAttributeChangeHandler=function(t){n.handleValidationAttributeChange(t)},n}return tt(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return yi},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return vi},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return bi},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"shouldAlwaysFloat",{get:function(){var t=this.getNativeInput().type;return wi.indexOf(t)>=0},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"shouldFloat",{get:function(){return this.shouldAlwaysFloat||this.isFocused||!!this.getValue()||this.isBadInput()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"shouldShake",{get:function(){return!this.isFocused&&!this.isValid()&&!!this.getValue()},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!0},setInputAttr:function(){},removeInputAttr:function(){},registerTextFieldInteractionHandler:function(){},deregisterTextFieldInteractionHandler:function(){},registerInputInteractionHandler:function(){},deregisterInputInteractionHandler:function(){},registerValidationAttributeChangeHandler:function(){return new MutationObserver((function(){}))},deregisterValidationAttributeChangeHandler:function(){},getNativeInput:function(){return null},isFocused:function(){return!1},activateLineRipple:function(){},deactivateLineRipple:function(){},setLineRippleTransformOrigin:function(){},shakeLabel:function(){},floatLabel:function(){},setLabelRequired:function(){},hasLabel:function(){return!1},getLabelWidth:function(){return 0},hasOutline:function(){return!1},notchOutline:function(){},closeOutline:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var t,e,i,r;this.adapter.hasLabel()&&this.getNativeInput().required&&this.adapter.setLabelRequired(!0),this.adapter.isFocused()?this.inputFocusHandler():this.adapter.hasLabel()&&this.shouldFloat&&(this.notchOutline(!0),this.adapter.floatLabel(!0),this.styleFloating(!0)),this.adapter.registerInputInteractionHandler("focus",this.inputFocusHandler),this.adapter.registerInputInteractionHandler("blur",this.inputBlurHandler),this.adapter.registerInputInteractionHandler("input",this.inputInputHandler);try{for(var n=rt(ki),a=n.next();!a.done;a=n.next()){var s=a.value;this.adapter.registerInputInteractionHandler(s,this.setPointerXOffset)}}catch(e){t={error:e}}finally{try{a&&!a.done&&(e=n.return)&&e.call(n)}finally{if(t)throw t.error}}try{for(var o=rt(Ti),l=o.next();!l.done;l=o.next()){s=l.value;this.adapter.registerTextFieldInteractionHandler(s,this.textFieldInteractionHandler)}}catch(t){i={error:t}}finally{try{l&&!l.done&&(r=o.return)&&r.call(o)}finally{if(i)throw i.error}}this.validationObserver=this.adapter.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler),this.setcharacterCounter(this.getValue().length)},e.prototype.destroy=function(){var t,e,i,r;this.adapter.deregisterInputInteractionHandler("focus",this.inputFocusHandler),this.adapter.deregisterInputInteractionHandler("blur",this.inputBlurHandler),this.adapter.deregisterInputInteractionHandler("input",this.inputInputHandler);try{for(var n=rt(ki),a=n.next();!a.done;a=n.next()){var s=a.value;this.adapter.deregisterInputInteractionHandler(s,this.setPointerXOffset)}}catch(e){t={error:e}}finally{try{a&&!a.done&&(e=n.return)&&e.call(n)}finally{if(t)throw t.error}}try{for(var o=rt(Ti),l=o.next();!l.done;l=o.next()){s=l.value;this.adapter.deregisterTextFieldInteractionHandler(s,this.textFieldInteractionHandler)}}catch(t){i={error:t}}finally{try{l&&!l.done&&(r=o.return)&&r.call(o)}finally{if(i)throw i.error}}this.adapter.deregisterValidationAttributeChangeHandler(this.validationObserver)},e.prototype.handleTextFieldInteraction=function(){var t=this.adapter.getNativeInput();t&&t.disabled||(this.receivedUserInput=!0)},e.prototype.handleValidationAttributeChange=function(t){var e=this;t.some((function(t){return xi.indexOf(t)>-1&&(e.styleValidity(!0),e.adapter.setLabelRequired(e.getNativeInput().required),!0)})),t.indexOf("maxlength")>-1&&this.setcharacterCounter(this.getValue().length)},e.prototype.notchOutline=function(t){if(this.adapter.hasOutline()&&this.adapter.hasLabel())if(t){var e=this.adapter.getLabelWidth()*bi.LABEL_SCALE;this.adapter.notchOutline(e)}else this.adapter.closeOutline()},e.prototype.activateFocus=function(){this.isFocused=!0,this.styleFocused(this.isFocused),this.adapter.activateLineRipple(),this.adapter.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter.floatLabel(this.shouldFloat),this.styleFloating(this.shouldFloat),this.adapter.shakeLabel(this.shouldShake)),!this.helperText||!this.helperText.isPersistent()&&this.helperText.isValidation()&&this.valid||this.helperText.showToScreenReader()},e.prototype.setTransformOrigin=function(t){if(!this.isDisabled()&&!this.adapter.hasOutline()){var e=t.touches,i=e?e[0]:t,r=i.target.getBoundingClientRect(),n=i.clientX-r.left;this.adapter.setLineRippleTransformOrigin(n)}},e.prototype.handleInput=function(){this.autoCompleteFocus(),this.setcharacterCounter(this.getValue().length)},e.prototype.autoCompleteFocus=function(){this.receivedUserInput||this.activateFocus()},e.prototype.deactivateFocus=function(){this.isFocused=!1,this.adapter.deactivateLineRipple();var t=this.isValid();this.styleValidity(t),this.styleFocused(this.isFocused),this.adapter.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter.floatLabel(this.shouldFloat),this.styleFloating(this.shouldFloat),this.adapter.shakeLabel(this.shouldShake)),this.shouldFloat||(this.receivedUserInput=!1)},e.prototype.getValue=function(){return this.getNativeInput().value},e.prototype.setValue=function(t){if(this.getValue()!==t&&(this.getNativeInput().value=t),this.setcharacterCounter(t.length),this.validateOnValueChange){var e=this.isValid();this.styleValidity(e)}this.adapter.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter.floatLabel(this.shouldFloat),this.styleFloating(this.shouldFloat),this.validateOnValueChange&&this.adapter.shakeLabel(this.shouldShake))},e.prototype.isValid=function(){return this.useNativeValidation?this.isNativeInputValid():this.valid},e.prototype.setValid=function(t){this.valid=t,this.styleValidity(t);var e=!t&&!this.isFocused&&!!this.getValue();this.adapter.hasLabel()&&this.adapter.shakeLabel(e)},e.prototype.setValidateOnValueChange=function(t){this.validateOnValueChange=t},e.prototype.getValidateOnValueChange=function(){return this.validateOnValueChange},e.prototype.setUseNativeValidation=function(t){this.useNativeValidation=t},e.prototype.isDisabled=function(){return this.getNativeInput().disabled},e.prototype.setDisabled=function(t){this.getNativeInput().disabled=t,this.styleDisabled(t)},e.prototype.setHelperTextContent=function(t){this.helperText&&this.helperText.setContent(t)},e.prototype.setLeadingIconAriaLabel=function(t){this.leadingIcon&&this.leadingIcon.setAriaLabel(t)},e.prototype.setLeadingIconContent=function(t){this.leadingIcon&&this.leadingIcon.setContent(t)},e.prototype.setTrailingIconAriaLabel=function(t){this.trailingIcon&&this.trailingIcon.setAriaLabel(t)},e.prototype.setTrailingIconContent=function(t){this.trailingIcon&&this.trailingIcon.setContent(t)},e.prototype.setcharacterCounter=function(t){if(this.characterCounter){var e=this.getNativeInput().maxLength;if(-1===e)throw new Error("MDCTextFieldFoundation: Expected maxlength html property on text input or textarea.");this.characterCounter.setCounterValue(t,e)}},e.prototype.isBadInput=function(){return this.getNativeInput().validity.badInput||!1},e.prototype.isNativeInputValid=function(){return this.getNativeInput().validity.valid},e.prototype.styleValidity=function(t){var i=e.cssClasses.INVALID;if(t?this.adapter.removeClass(i):this.adapter.addClass(i),this.helperText){if(this.helperText.setValidity(t),!this.helperText.isValidation())return;var r=this.helperText.isVisible(),n=this.helperText.getId();r&&n?this.adapter.setInputAttr(vi.ARIA_DESCRIBEDBY,n):this.adapter.removeInputAttr(vi.ARIA_DESCRIBEDBY)}},e.prototype.styleFocused=function(t){var i=e.cssClasses.FOCUSED;t?this.adapter.addClass(i):this.adapter.removeClass(i)},e.prototype.styleDisabled=function(t){var i=e.cssClasses,r=i.DISABLED,n=i.INVALID;t?(this.adapter.addClass(r),this.adapter.removeClass(n)):this.adapter.removeClass(r),this.leadingIcon&&this.leadingIcon.setDisabled(t),this.trailingIcon&&this.trailingIcon.setDisabled(t)},e.prototype.styleFloating=function(t){var i=e.cssClasses.LABEL_FLOATING;t?this.adapter.addClass(i):this.adapter.removeClass(i)},e.prototype.getNativeInput=function(){return(this.adapter?this.adapter.getNativeInput():null)||{disabled:!1,maxLength:-1,required:!1,type:"input",validity:{badInput:!1,valid:!0},value:""}},e}(vt),Ci=Si;const Ei=t=>void 0===t.strings,$i={},Ai=Dt(class extends jt{constructor(t){if(super(t),t.type!==Rt&&t.type!==Lt&&t.type!==zt)throw Error("The `live` directive is not allowed on child or event bindings");if(!Ei(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===P||e===R)return e;const i=t.element,r=t.name;if(t.type===Rt){if(e===i[r])return P}else if(t.type===zt){if(!!e===i.hasAttribute(r))return P}else if(t.type===Lt&&i.getAttribute(r)===e+"")return P;return((t,e=$i)=>{t._$AH=e})(t),e}}),Ii=["touchstart","touchmove","scroll","mousewheel"],Mi=(t={})=>{const e={};for(const i in t)e[i]=t[i];return Object.assign({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1},e)};class Li extends hi{constructor(){super(...arguments),this.mdcFoundationClass=Ci,this.value="",this.type="text",this.placeholder="",this.label="",this.icon="",this.iconTrailing="",this.disabled=!1,this.required=!1,this.minLength=-1,this.maxLength=-1,this.outlined=!1,this.helper="",this.validateOnInitialRender=!1,this.validationMessage="",this.autoValidate=!1,this.pattern="",this.min="",this.max="",this.step=null,this.size=null,this.helperPersistent=!1,this.charCounter=!1,this.endAligned=!1,this.prefix="",this.suffix="",this.name="",this.readOnly=!1,this.autocapitalize="",this.outlineOpen=!1,this.outlineWidth=0,this.isUiValid=!0,this.focused=!1,this._validity=Mi(),this.validityTransform=null}get validity(){return this._checkValidity(this.value),this._validity}get willValidate(){return this.formElement.willValidate}get selectionStart(){return this.formElement.selectionStart}get selectionEnd(){return this.formElement.selectionEnd}focus(){const t=new CustomEvent("focus");this.formElement.dispatchEvent(t),this.formElement.focus()}blur(){const t=new CustomEvent("blur");this.formElement.dispatchEvent(t),this.formElement.blur()}select(){this.formElement.select()}setSelectionRange(t,e,i){this.formElement.setSelectionRange(t,e,i)}update(t){t.has("autoValidate")&&this.mdcFoundation&&this.mdcFoundation.setValidateOnValueChange(this.autoValidate),t.has("value")&&"string"!=typeof this.value&&(this.value=`${this.value}`),super.update(t)}setFormData(t){this.name&&t.append(this.name,this.value)}render(){const t=this.charCounter&&-1!==this.maxLength,e=!!this.helper||!!this.validationMessage||t,i={"mdc-text-field--disabled":this.disabled,"mdc-text-field--no-label":!this.label,"mdc-text-field--filled":!this.outlined,"mdc-text-field--outlined":this.outlined,"mdc-text-field--with-leading-icon":this.icon,"mdc-text-field--with-trailing-icon":this.iconTrailing,"mdc-text-field--end-aligned":this.endAligned};return M`
      <label class="mdc-text-field ${Ot(i)}">
        ${this.renderRipple()}
        ${this.outlined?this.renderOutline():this.renderLabel()}
        ${this.renderLeadingIcon()}
        ${this.renderPrefix()}
        ${this.renderInput(e)}
        ${this.renderSuffix()}
        ${this.renderTrailingIcon()}
        ${this.renderLineRipple()}
      </label>
      ${this.renderHelperText(e,t)}
    `}updated(t){t.has("value")&&void 0!==t.get("value")&&(this.mdcFoundation.setValue(this.value),this.autoValidate&&this.reportValidity())}renderRipple(){return this.outlined?"":M`
      <span class="mdc-text-field__ripple"></span>
    `}renderOutline(){return this.outlined?M`
      <mwc-notched-outline
          .width=${this.outlineWidth}
          .open=${this.outlineOpen}
          class="mdc-notched-outline">
        ${this.renderLabel()}
      </mwc-notched-outline>`:""}renderLabel(){return this.label?M`
      <span
          .floatingLabelFoundation=${mi(this.label)}
          id="label">${this.label}</span>
    `:""}renderLeadingIcon(){return this.icon?this.renderIcon(this.icon):""}renderTrailingIcon(){return this.iconTrailing?this.renderIcon(this.iconTrailing,!0):""}renderIcon(t,e=!1){return M`<i class="material-icons mdc-text-field__icon ${Ot({"mdc-text-field__icon--leading":!e,"mdc-text-field__icon--trailing":e})}">${t}</i>`}renderPrefix(){return this.prefix?this.renderAffix(this.prefix):""}renderSuffix(){return this.suffix?this.renderAffix(this.suffix,!0):""}renderAffix(t,e=!1){return M`<span class="mdc-text-field__affix ${Ot({"mdc-text-field__affix--prefix":!e,"mdc-text-field__affix--suffix":e})}">
        ${t}</span>`}renderInput(t){const e=-1===this.minLength?void 0:this.minLength,i=-1===this.maxLength?void 0:this.maxLength,r=this.autocapitalize?this.autocapitalize:void 0,n=this.validationMessage&&!this.isUiValid,a=this.label?"label":void 0,s=t?"helper-text":void 0,o=this.focused||this.helperPersistent||n?"helper-text":void 0;return M`
      <input
          aria-labelledby=${Ke(a)}
          aria-controls="${Ke(s)}"
          aria-describedby="${Ke(o)}"
          class="mdc-text-field__input"
          type="${this.type}"
          .value="${Ai(this.value)}"
          ?disabled="${this.disabled}"
          placeholder="${this.placeholder}"
          ?required="${this.required}"
          ?readonly="${this.readOnly}"
          minlength="${Ke(e)}"
          maxlength="${Ke(i)}"
          pattern="${Ke(this.pattern?this.pattern:void 0)}"
          min="${Ke(""===this.min?void 0:this.min)}"
          max="${Ke(""===this.max?void 0:this.max)}"
          step="${Ke(null===this.step?void 0:this.step)}"
          size="${Ke(null===this.size?void 0:this.size)}"
          name="${Ke(""===this.name?void 0:this.name)}"
          inputmode="${Ke(this.inputMode)}"
          autocapitalize="${Ke(r)}"
          @input="${this.handleInputChange}"
          @focus="${this.onInputFocus}"
          @blur="${this.onInputBlur}">`}renderLineRipple(){return this.outlined?"":M`
      <span .lineRippleFoundation=${_i()}></span>
    `}renderHelperText(t,e){const i=this.validationMessage&&!this.isUiValid,r={"mdc-text-field-helper-text--persistent":this.helperPersistent,"mdc-text-field-helper-text--validation-msg":i},n=this.focused||this.helperPersistent||i?void 0:"true",a=i?this.validationMessage:this.helper;return t?M`
      <div class="mdc-text-field-helper-line">
        <div id="helper-text"
             aria-hidden="${Ke(n)}"
             class="mdc-text-field-helper-text ${Ot(r)}"
             >${a}</div>
        ${this.renderCharCounter(e)}
      </div>`:""}renderCharCounter(t){const e=Math.min(this.value.length,this.maxLength);return t?M`
      <span class="mdc-text-field-character-counter"
            >${e} / ${this.maxLength}</span>`:""}onInputFocus(){this.focused=!0}onInputBlur(){this.focused=!1,this.reportValidity()}checkValidity(){const t=this._checkValidity(this.value);if(!t){const t=new Event("invalid",{bubbles:!1,cancelable:!0});this.dispatchEvent(t)}return t}reportValidity(){const t=this.checkValidity();return this.mdcFoundation.setValid(t),this.isUiValid=t,t}_checkValidity(t){const e=this.formElement.validity;let i=Mi(e);if(this.validityTransform){const e=this.validityTransform(t,i);i=Object.assign(Object.assign({},i),e),this.mdcFoundation.setUseNativeValidation(!1)}else this.mdcFoundation.setUseNativeValidation(!0);return this._validity=i,this._validity.valid}setCustomValidity(t){this.validationMessage=t,this.formElement.setCustomValidity(t)}handleInputChange(){this.value=this.formElement.value}createAdapter(){return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},this.getRootAdapterMethods()),this.getInputAdapterMethods()),this.getLabelAdapterMethods()),this.getLineRippleAdapterMethods()),this.getOutlineAdapterMethods())}getRootAdapterMethods(){return Object.assign({registerTextFieldInteractionHandler:(t,e)=>this.addEventListener(t,e),deregisterTextFieldInteractionHandler:(t,e)=>this.removeEventListener(t,e),registerValidationAttributeChangeHandler:t=>{const e=new MutationObserver((e=>{t((t=>t.map((t=>t.attributeName)).filter((t=>t)))(e))}));return e.observe(this.formElement,{attributes:!0}),e},deregisterValidationAttributeChangeHandler:t=>t.disconnect()},kt(this.mdcRoot))}getInputAdapterMethods(){return{getNativeInput:()=>this.formElement,setInputAttr:()=>{},removeInputAttr:()=>{},isFocused:()=>!!this.shadowRoot&&this.shadowRoot.activeElement===this.formElement,registerInputInteractionHandler:(t,e)=>this.formElement.addEventListener(t,e,{passive:t in Ii}),deregisterInputInteractionHandler:(t,e)=>this.formElement.removeEventListener(t,e)}}getLabelAdapterMethods(){return{floatLabel:t=>this.labelElement&&this.labelElement.floatingLabelFoundation.float(t),getLabelWidth:()=>this.labelElement?this.labelElement.floatingLabelFoundation.getWidth():0,hasLabel:()=>Boolean(this.labelElement),shakeLabel:t=>this.labelElement&&this.labelElement.floatingLabelFoundation.shake(t),setLabelRequired:t=>{this.labelElement&&this.labelElement.floatingLabelFoundation.setRequired(t)}}}getLineRippleAdapterMethods(){return{activateLineRipple:()=>{this.lineRippleElement&&this.lineRippleElement.lineRippleFoundation.activate()},deactivateLineRipple:()=>{this.lineRippleElement&&this.lineRippleElement.lineRippleFoundation.deactivate()},setLineRippleTransformOrigin:t=>{this.lineRippleElement&&this.lineRippleElement.lineRippleFoundation.setRippleCenter(t)}}}async getUpdateComplete(){var t;const e=await super.getUpdateComplete();return await(null===(t=this.outlineElement)||void 0===t?void 0:t.updateComplete),e}firstUpdated(){var t;super.firstUpdated(),this.mdcFoundation.setValidateOnValueChange(this.autoValidate),this.validateOnInitialRender&&this.reportValidity(),null===(t=this.outlineElement)||void 0===t||t.updateComplete.then((()=>{var t;this.outlineWidth=(null===(t=this.labelElement)||void 0===t?void 0:t.floatingLabelFoundation.getWidth())||0}))}getOutlineAdapterMethods(){return{closeOutline:()=>this.outlineElement&&(this.outlineOpen=!1),hasOutline:()=>Boolean(this.outlineElement),notchOutline:t=>{this.outlineElement&&!this.outlineOpen&&(this.outlineWidth=t,this.outlineOpen=!0)}}}async layout(){await this.updateComplete;const t=this.labelElement;if(!t)return void(this.outlineOpen=!1);const e=!!this.label&&!!this.value;if(t.floatingLabelFoundation.float(e),!this.outlined)return;this.outlineOpen=e,await this.updateComplete;const i=t.floatingLabelFoundation.getWidth();this.outlineOpen&&(this.outlineWidth=i,await this.updateComplete)}}it([ht(".mdc-text-field")],Li.prototype,"mdcRoot",void 0),it([ht("input")],Li.prototype,"formElement",void 0),it([ht(".mdc-floating-label")],Li.prototype,"labelElement",void 0),it([ht(".mdc-line-ripple")],Li.prototype,"lineRippleElement",void 0),it([ht("mwc-notched-outline")],Li.prototype,"outlineElement",void 0),it([ht(".mdc-notched-outline__notch")],Li.prototype,"notchElement",void 0),it([ot({type:String})],Li.prototype,"value",void 0),it([ot({type:String})],Li.prototype,"type",void 0),it([ot({type:String})],Li.prototype,"placeholder",void 0),it([ot({type:String}),Mt((function(t,e){void 0!==e&&this.label!==e&&this.layout()}))],Li.prototype,"label",void 0),it([ot({type:String})],Li.prototype,"icon",void 0),it([ot({type:String})],Li.prototype,"iconTrailing",void 0),it([ot({type:Boolean,reflect:!0})],Li.prototype,"disabled",void 0),it([ot({type:Boolean})],Li.prototype,"required",void 0),it([ot({type:Number})],Li.prototype,"minLength",void 0),it([ot({type:Number})],Li.prototype,"maxLength",void 0),it([ot({type:Boolean,reflect:!0}),Mt((function(t,e){void 0!==e&&this.outlined!==e&&this.layout()}))],Li.prototype,"outlined",void 0),it([ot({type:String})],Li.prototype,"helper",void 0),it([ot({type:Boolean})],Li.prototype,"validateOnInitialRender",void 0),it([ot({type:String})],Li.prototype,"validationMessage",void 0),it([ot({type:Boolean})],Li.prototype,"autoValidate",void 0),it([ot({type:String})],Li.prototype,"pattern",void 0),it([ot({type:String})],Li.prototype,"min",void 0),it([ot({type:String})],Li.prototype,"max",void 0),it([ot({type:String})],Li.prototype,"step",void 0),it([ot({type:Number})],Li.prototype,"size",void 0),it([ot({type:Boolean})],Li.prototype,"helperPersistent",void 0),it([ot({type:Boolean})],Li.prototype,"charCounter",void 0),it([ot({type:Boolean})],Li.prototype,"endAligned",void 0),it([ot({type:String})],Li.prototype,"prefix",void 0),it([ot({type:String})],Li.prototype,"suffix",void 0),it([ot({type:String})],Li.prototype,"name",void 0),it([ot({type:String})],Li.prototype,"inputMode",void 0),it([ot({type:Boolean})],Li.prototype,"readOnly",void 0),it([ot({type:String})],Li.prototype,"autocapitalize",void 0),it([lt()],Li.prototype,"outlineOpen",void 0),it([lt()],Li.prototype,"outlineWidth",void 0),it([lt()],Li.prototype,"isUiValid",void 0),it([lt()],Li.prototype,"focused",void 0),it([dt({passive:!0})],Li.prototype,"handleInputChange",null);const Pi=n`.mdc-floating-label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);position:absolute;left:0;-webkit-transform-origin:left top;transform-origin:left top;line-height:1.15rem;text-align:left;text-overflow:ellipsis;white-space:nowrap;cursor:text;overflow:hidden;will-change:transform;transition:transform 150ms cubic-bezier(0.4, 0, 0.2, 1),color 150ms cubic-bezier(0.4, 0, 0.2, 1)}[dir=rtl] .mdc-floating-label,.mdc-floating-label[dir=rtl]{right:0;left:auto;-webkit-transform-origin:right top;transform-origin:right top;text-align:right}.mdc-floating-label--float-above{cursor:auto}.mdc-floating-label--required::after{margin-left:1px;margin-right:0px;content:"*"}[dir=rtl] .mdc-floating-label--required::after,.mdc-floating-label--required[dir=rtl]::after{margin-left:0;margin-right:1px}.mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-standard 250ms 1}@keyframes mdc-floating-label-shake-float-above-standard{0%{transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-106%) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-106%) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}}.mdc-line-ripple::before,.mdc-line-ripple::after{position:absolute;bottom:0;left:0;width:100%;border-bottom-style:solid;content:""}.mdc-line-ripple::before{border-bottom-width:1px}.mdc-line-ripple::before{z-index:1}.mdc-line-ripple::after{transform:scaleX(0);border-bottom-width:2px;opacity:0;z-index:2}.mdc-line-ripple::after{transition:transform 180ms cubic-bezier(0.4, 0, 0.2, 1),opacity 180ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-line-ripple--active::after{transform:scaleX(1);opacity:1}.mdc-line-ripple--deactivating::after{opacity:0}.mdc-notched-outline{display:flex;position:absolute;top:0;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] .mdc-notched-outline,.mdc-notched-outline[dir=rtl]{text-align:right}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{box-sizing:border-box;height:100%;border-top:1px solid;border-bottom:1px solid;pointer-events:none}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;width:12px}[dir=rtl] .mdc-notched-outline__leading,.mdc-notched-outline__leading[dir=rtl]{border-left:none;border-right:1px solid}.mdc-notched-outline__trailing{border-left:none;border-right:1px solid;flex-grow:1}[dir=rtl] .mdc-notched-outline__trailing,.mdc-notched-outline__trailing[dir=rtl]{border-left:1px solid;border-right:none}.mdc-notched-outline__notch{flex:0 0 auto;width:auto;max-width:calc(100% - 12px * 2)}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;max-width:100%}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:calc(100% / 0.75)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none}[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch,.mdc-notched-outline--notched .mdc-notched-outline__notch[dir=rtl]{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{display:none}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-text-field--filled{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity}.mdc-text-field--filled .mdc-text-field__ripple::before,.mdc-text-field--filled .mdc-text-field__ripple::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-text-field--filled .mdc-text-field__ripple::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-text-field--filled .mdc-text-field__ripple::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-text-field--filled.mdc-ripple-upgraded .mdc-text-field__ripple::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-text-field--filled.mdc-ripple-upgraded .mdc-text-field__ripple::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-text-field--filled.mdc-ripple-upgraded--unbounded .mdc-text-field__ripple::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-text-field--filled.mdc-ripple-upgraded--foreground-activation .mdc-text-field__ripple::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-text-field--filled.mdc-ripple-upgraded--foreground-deactivation .mdc-text-field__ripple::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-text-field--filled .mdc-text-field__ripple::before,.mdc-text-field--filled .mdc-text-field__ripple::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-text-field--filled.mdc-ripple-upgraded .mdc-text-field__ripple::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-text-field__ripple{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.mdc-text-field{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:0;border-bottom-left-radius:0;display:inline-flex;align-items:baseline;padding:0 16px;position:relative;box-sizing:border-box;overflow:hidden;will-change:opacity,transform,color}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-floating-label{color:rgba(0, 0, 0, 0.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input{color:rgba(0, 0, 0, 0.87)}@media all{.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder{color:rgba(0, 0, 0, 0.54)}}@media all{.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder{color:rgba(0, 0, 0, 0.54)}}.mdc-text-field .mdc-text-field__input{caret-color:#6200ee;caret-color:var(--mdc-theme-primary, #6200ee)}.mdc-text-field:not(.mdc-text-field--disabled)+.mdc-text-field-helper-line .mdc-text-field-helper-text{color:rgba(0, 0, 0, 0.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field-character-counter,.mdc-text-field:not(.mdc-text-field--disabled)+.mdc-text-field-helper-line .mdc-text-field-character-counter{color:rgba(0, 0, 0, 0.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__icon--leading{color:rgba(0, 0, 0, 0.54)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__icon--trailing{color:rgba(0, 0, 0, 0.54)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__affix--prefix{color:rgba(0, 0, 0, 0.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__affix--suffix{color:rgba(0, 0, 0, 0.6)}.mdc-text-field .mdc-floating-label{top:50%;transform:translateY(-50%);pointer-events:none}.mdc-text-field__input{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);height:28px;transition:opacity 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);width:100%;min-width:0;border:none;border-radius:0;background:none;appearance:none;padding:0}.mdc-text-field__input::-ms-clear{display:none}.mdc-text-field__input::-webkit-calendar-picker-indicator{display:none}.mdc-text-field__input:focus{outline:none}.mdc-text-field__input:invalid{box-shadow:none}@media all{.mdc-text-field__input::placeholder{transition:opacity 67ms 0ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0}}@media all{.mdc-text-field__input:-ms-input-placeholder{transition:opacity 67ms 0ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0}}@media all{.mdc-text-field--no-label .mdc-text-field__input::placeholder,.mdc-text-field--focused .mdc-text-field__input::placeholder{transition-delay:40ms;transition-duration:110ms;opacity:1}}@media all{.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder,.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder{transition-delay:40ms;transition-duration:110ms;opacity:1}}.mdc-text-field__affix{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);height:28px;transition:opacity 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0;white-space:nowrap}.mdc-text-field--label-floating .mdc-text-field__affix,.mdc-text-field--no-label .mdc-text-field__affix{opacity:1}@supports(-webkit-hyphens: none){.mdc-text-field--outlined .mdc-text-field__affix{align-items:center;align-self:center;display:inline-flex;height:100%}}.mdc-text-field__affix--prefix{padding-left:0;padding-right:2px}[dir=rtl] .mdc-text-field__affix--prefix,.mdc-text-field__affix--prefix[dir=rtl]{padding-left:2px;padding-right:0}.mdc-text-field--end-aligned .mdc-text-field__affix--prefix{padding-left:0;padding-right:12px}[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__affix--prefix,.mdc-text-field--end-aligned .mdc-text-field__affix--prefix[dir=rtl]{padding-left:12px;padding-right:0}.mdc-text-field__affix--suffix{padding-left:12px;padding-right:0}[dir=rtl] .mdc-text-field__affix--suffix,.mdc-text-field__affix--suffix[dir=rtl]{padding-left:0;padding-right:12px}.mdc-text-field--end-aligned .mdc-text-field__affix--suffix{padding-left:2px;padding-right:0}[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__affix--suffix,.mdc-text-field--end-aligned .mdc-text-field__affix--suffix[dir=rtl]{padding-left:0;padding-right:2px}.mdc-text-field--filled{height:56px}.mdc-text-field--filled .mdc-text-field__ripple::before,.mdc-text-field--filled .mdc-text-field__ripple::after{background-color:rgba(0, 0, 0, 0.87);background-color:var(--mdc-ripple-color, rgba(0, 0, 0, 0.87))}.mdc-text-field--filled:hover .mdc-text-field__ripple::before,.mdc-text-field--filled.mdc-ripple-surface--hover .mdc-text-field__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-text-field--filled.mdc-ripple-upgraded--background-focused .mdc-text-field__ripple::before,.mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-text-field--filled::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}.mdc-text-field--filled:not(.mdc-text-field--disabled){background-color:whitesmoke}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.42)}.mdc-text-field--filled:not(.mdc-text-field--disabled):hover .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.87)}.mdc-text-field--filled .mdc-line-ripple::after{border-bottom-color:#6200ee;border-bottom-color:var(--mdc-theme-primary, #6200ee)}.mdc-text-field--filled .mdc-floating-label{left:16px;right:initial}[dir=rtl] .mdc-text-field--filled .mdc-floating-label,.mdc-text-field--filled .mdc-floating-label[dir=rtl]{left:initial;right:16px}.mdc-text-field--filled .mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input{height:100%}.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label{display:none}.mdc-text-field--filled.mdc-text-field--no-label::before{display:none}@supports(-webkit-hyphens: none){.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__affix{align-items:center;align-self:center;display:inline-flex;height:100%}}.mdc-text-field--outlined{height:56px;overflow:visible}.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-37.25px) scale(1)}.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) scale(0.75)}.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined 250ms 1}@keyframes mdc-floating-label-shake-float-above-text-field-outlined{0%{transform:translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75)}}.mdc-text-field--outlined .mdc-text-field__input{height:100%}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.38)}.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.87)}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing{border-color:#6200ee;border-color:var(--mdc-theme-primary, #6200ee)}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}[dir=rtl] .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading[dir=rtl]{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}@supports(top: max(0%)){.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading{width:max(12px, var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch{max-width:calc(100% - max(12px, var(--mdc-shape-small, 4px)) * 2)}}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}[dir=rtl] .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing,.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl]{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}@supports(top: max(0%)){.mdc-text-field--outlined{padding-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined{padding-right:max(16px, var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined+.mdc-text-field-helper-line{padding-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}@supports(top: max(0%)){.mdc-text-field--outlined+.mdc-text-field-helper-line{padding-right:max(16px, var(--mdc-shape-small, 4px))}}.mdc-text-field--outlined.mdc-text-field--with-leading-icon{padding-left:0}@supports(top: max(0%)){.mdc-text-field--outlined.mdc-text-field--with-leading-icon{padding-right:max(16px, var(--mdc-shape-small, 4px))}}[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-leading-icon,.mdc-text-field--outlined.mdc-text-field--with-leading-icon[dir=rtl]{padding-right:0}@supports(top: max(0%)){[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-leading-icon,.mdc-text-field--outlined.mdc-text-field--with-leading-icon[dir=rtl]{padding-left:max(16px, var(--mdc-shape-small, 4px))}}.mdc-text-field--outlined.mdc-text-field--with-trailing-icon{padding-right:0}@supports(top: max(0%)){.mdc-text-field--outlined.mdc-text-field--with-trailing-icon{padding-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-trailing-icon,.mdc-text-field--outlined.mdc-text-field--with-trailing-icon[dir=rtl]{padding-left:0}@supports(top: max(0%)){[dir=rtl] .mdc-text-field--outlined.mdc-text-field--with-trailing-icon,.mdc-text-field--outlined.mdc-text-field--with-trailing-icon[dir=rtl]{padding-right:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}.mdc-text-field--outlined.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon{padding-left:0;padding-right:0}.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:1px}.mdc-text-field--outlined .mdc-text-field__ripple::before,.mdc-text-field--outlined .mdc-text-field__ripple::after{background-color:transparent;background-color:var(--mdc-ripple-color, transparent)}.mdc-text-field--outlined .mdc-floating-label{left:4px;right:initial}[dir=rtl] .mdc-text-field--outlined .mdc-floating-label,.mdc-text-field--outlined .mdc-floating-label[dir=rtl]{left:initial;right:4px}.mdc-text-field--outlined .mdc-text-field__input{display:flex;border:none !important;background-color:transparent}.mdc-text-field--outlined .mdc-notched-outline{z-index:1}.mdc-text-field--textarea{flex-direction:column;align-items:center;width:auto;height:auto;padding:0;transition:none}.mdc-text-field--textarea .mdc-floating-label{top:19px}.mdc-text-field--textarea .mdc-floating-label:not(.mdc-floating-label--float-above){transform:none}.mdc-text-field--textarea .mdc-text-field__input{flex-grow:1;height:auto;min-height:1.5rem;overflow-x:hidden;overflow-y:auto;box-sizing:border-box;resize:none;padding:0 16px;line-height:1.5rem}.mdc-text-field--textarea.mdc-text-field--filled::before{display:none}.mdc-text-field--textarea.mdc-text-field--filled .mdc-floating-label--float-above{transform:translateY(-10.25px) scale(0.75)}.mdc-text-field--textarea.mdc-text-field--filled .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-textarea-filled 250ms 1}@keyframes mdc-floating-label-shake-float-above-textarea-filled{0%{transform:translateX(calc(0 - 0%)) translateY(-10.25px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-10.25px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-10.25px) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-10.25px) scale(0.75)}}.mdc-text-field--textarea.mdc-text-field--filled .mdc-text-field__input{margin-top:23px;margin-bottom:9px}.mdc-text-field--textarea.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input{margin-top:16px;margin-bottom:16px}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:0}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-27.25px) scale(1)}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--textarea.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-24.75px) scale(0.75)}.mdc-text-field--textarea.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--textarea.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-textarea-outlined 250ms 1}@keyframes mdc-floating-label-shake-float-above-textarea-outlined{0%{transform:translateX(calc(0 - 0%)) translateY(-24.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-24.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-24.75px) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-24.75px) scale(0.75)}}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-text-field__input{margin-top:16px;margin-bottom:16px}.mdc-text-field--textarea.mdc-text-field--outlined .mdc-floating-label{top:18px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field__input{margin-bottom:2px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter{align-self:flex-end;padding:0 16px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter::after{display:inline-block;width:0;height:16px;content:"";vertical-align:-16px}.mdc-text-field--textarea.mdc-text-field--with-internal-counter .mdc-text-field-character-counter::before{display:none}.mdc-text-field__resizer{align-self:stretch;display:inline-flex;flex-direction:column;flex-grow:1;max-height:100%;max-width:100%;min-height:56px;min-width:fit-content;min-width:-moz-available;min-width:-webkit-fill-available;overflow:hidden;resize:both}.mdc-text-field--filled .mdc-text-field__resizer{transform:translateY(-1px)}.mdc-text-field--filled .mdc-text-field__resizer .mdc-text-field__input,.mdc-text-field--filled .mdc-text-field__resizer .mdc-text-field-character-counter{transform:translateY(1px)}.mdc-text-field--outlined .mdc-text-field__resizer{transform:translateX(-1px) translateY(-1px)}[dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer,.mdc-text-field--outlined .mdc-text-field__resizer[dir=rtl]{transform:translateX(1px) translateY(-1px)}.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input,.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter{transform:translateX(1px) translateY(1px)}[dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input,[dir=rtl] .mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter,.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field__input[dir=rtl],.mdc-text-field--outlined .mdc-text-field__resizer .mdc-text-field-character-counter[dir=rtl]{transform:translateX(-1px) translateY(1px)}.mdc-text-field--with-leading-icon{padding-left:0;padding-right:16px}[dir=rtl] .mdc-text-field--with-leading-icon,.mdc-text-field--with-leading-icon[dir=rtl]{padding-left:16px;padding-right:0}.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 48px);left:48px;right:initial}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label,.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label[dir=rtl]{left:initial;right:48px}.mdc-text-field--with-leading-icon.mdc-text-field--filled .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 64px / 0.75)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label{left:36px;right:initial}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label[dir=rtl]{left:initial;right:36px}.mdc-text-field--with-leading-icon.mdc-text-field--outlined :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-37.25px) translateX(-32px) scale(1)}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-37.25px) translateX(32px) scale(1)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) translateX(-32px) scale(0.75)}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl],.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-34.75px) translateX(32px) scale(0.75)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined-leading-icon 250ms 1}@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon{0%{transform:translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 32px)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 32px)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75)}}[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--shake,.mdc-text-field--with-leading-icon.mdc-text-field--outlined[dir=rtl] .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined-leading-icon 250ms 1}@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon-rtl{0%{transform:translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - -32px)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - -32px)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75)}}.mdc-text-field--with-trailing-icon{padding-left:16px;padding-right:0}[dir=rtl] .mdc-text-field--with-trailing-icon,.mdc-text-field--with-trailing-icon[dir=rtl]{padding-left:0;padding-right:16px}.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 64px)}.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 64px / 0.75)}.mdc-text-field--with-trailing-icon.mdc-text-field--outlined :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon{padding-left:0;padding-right:0}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label{max-width:calc(100% - 96px)}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--filled .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 96px / 0.75)}.mdc-text-field-helper-line{display:flex;justify-content:space-between;box-sizing:border-box}.mdc-text-field+.mdc-text-field-helper-line{padding-right:16px;padding-left:16px}.mdc-form-field>.mdc-text-field+label{align-self:flex-start}.mdc-text-field--focused:not(.mdc-text-field--disabled) .mdc-floating-label{color:rgba(98, 0, 238, 0.87)}.mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--focused .mdc-notched-outline__trailing{border-width:2px}.mdc-text-field--focused+.mdc-text-field-helper-line .mdc-text-field-helper-text:not(.mdc-text-field-helper-text--validation-msg){opacity:1}.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:2px}.mdc-text-field--focused.mdc-text-field--outlined.mdc-text-field--textarea .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:0}.mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-floating-label{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--invalid+.mdc-text-field-helper-line .mdc-text-field-helper-text--validation-msg{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid .mdc-text-field__input{caret-color:#b00020;caret-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__icon--trailing{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-text-field--invalid+.mdc-text-field-helper-line .mdc-text-field-helper-text--validation-msg{opacity:1}.mdc-text-field--disabled{pointer-events:none}.mdc-text-field--disabled .mdc-text-field__input{color:rgba(0, 0, 0, 0.38)}@media all{.mdc-text-field--disabled .mdc-text-field__input::placeholder{color:rgba(0, 0, 0, 0.38)}}@media all{.mdc-text-field--disabled .mdc-text-field__input:-ms-input-placeholder{color:rgba(0, 0, 0, 0.38)}}.mdc-text-field--disabled .mdc-floating-label{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-helper-text{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled .mdc-text-field-character-counter,.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-character-counter{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled .mdc-text-field__icon--leading{color:rgba(0, 0, 0, 0.3)}.mdc-text-field--disabled .mdc-text-field__icon--trailing{color:rgba(0, 0, 0, 0.3)}.mdc-text-field--disabled .mdc-text-field__affix--prefix{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled .mdc-text-field__affix--suffix{color:rgba(0, 0, 0, 0.38)}.mdc-text-field--disabled .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.06)}.mdc-text-field--disabled .mdc-notched-outline__leading,.mdc-text-field--disabled .mdc-notched-outline__notch,.mdc-text-field--disabled .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.06)}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__input::placeholder{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__input:-ms-input-placeholder{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-floating-label{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-helper-text{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field-character-counter,.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-character-counter{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__icon--leading{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__icon--trailing{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__affix--prefix{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-text-field__affix--suffix{color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-line-ripple::before{border-bottom-color:GrayText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-text-field--disabled .mdc-notched-outline__leading,.mdc-text-field--disabled .mdc-notched-outline__notch,.mdc-text-field--disabled .mdc-notched-outline__trailing{border-color:GrayText}}@media screen and (forced-colors: active){.mdc-text-field--disabled .mdc-text-field__input{background-color:Window}.mdc-text-field--disabled .mdc-floating-label{z-index:1}}.mdc-text-field--disabled .mdc-floating-label{cursor:default}.mdc-text-field--disabled.mdc-text-field--filled{background-color:#fafafa}.mdc-text-field--disabled.mdc-text-field--filled .mdc-text-field__ripple{display:none}.mdc-text-field--disabled .mdc-text-field__input{pointer-events:auto}.mdc-text-field--end-aligned .mdc-text-field__input{text-align:right}[dir=rtl] .mdc-text-field--end-aligned .mdc-text-field__input,.mdc-text-field--end-aligned .mdc-text-field__input[dir=rtl]{text-align:left}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__input,[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__input,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix{direction:ltr}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--prefix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--prefix{padding-left:0;padding-right:2px}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--suffix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--suffix{padding-left:12px;padding-right:0}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__icon--leading,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__icon--leading{order:1}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--suffix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--suffix{order:2}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__input,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__input{order:3}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__affix--prefix,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__affix--prefix{order:4}[dir=rtl] .mdc-text-field--ltr-text .mdc-text-field__icon--trailing,.mdc-text-field--ltr-text[dir=rtl] .mdc-text-field__icon--trailing{order:5}[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__input,.mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__input{text-align:right}[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__affix--prefix,.mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__affix--prefix{padding-right:12px}[dir=rtl] .mdc-text-field--ltr-text.mdc-text-field--end-aligned .mdc-text-field__affix--suffix,.mdc-text-field--ltr-text.mdc-text-field--end-aligned[dir=rtl] .mdc-text-field__affix--suffix{padding-left:2px}.mdc-text-field-helper-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit);display:block;margin-top:0;line-height:normal;margin:0;opacity:0;will-change:opacity;transition:opacity 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-text-field-helper-text::before{display:inline-block;width:0;height:16px;content:"";vertical-align:0}.mdc-text-field-helper-text--persistent{transition:none;opacity:1;will-change:initial}.mdc-text-field-character-counter{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit);display:block;margin-top:0;line-height:normal;margin-left:auto;margin-right:0;padding-left:16px;padding-right:0;white-space:nowrap}.mdc-text-field-character-counter::before{display:inline-block;width:0;height:16px;content:"";vertical-align:0}[dir=rtl] .mdc-text-field-character-counter,.mdc-text-field-character-counter[dir=rtl]{margin-left:0;margin-right:auto}[dir=rtl] .mdc-text-field-character-counter,.mdc-text-field-character-counter[dir=rtl]{padding-left:0;padding-right:16px}.mdc-text-field__icon{align-self:center;cursor:pointer}.mdc-text-field__icon:not([tabindex]),.mdc-text-field__icon[tabindex="-1"]{cursor:default;pointer-events:none}.mdc-text-field__icon svg{display:block}.mdc-text-field__icon--leading{margin-left:16px;margin-right:8px}[dir=rtl] .mdc-text-field__icon--leading,.mdc-text-field__icon--leading[dir=rtl]{margin-left:8px;margin-right:16px}.mdc-text-field__icon--trailing{padding:12px;margin-left:0px;margin-right:0px}[dir=rtl] .mdc-text-field__icon--trailing,.mdc-text-field__icon--trailing[dir=rtl]{margin-left:0px;margin-right:0px}.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}:host{display:inline-flex;flex-direction:column;outline:none}.mdc-text-field{width:100%}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.42);border-bottom-color:var(--mdc-text-field-idle-line-color, rgba(0, 0, 0, 0.42))}.mdc-text-field:not(.mdc-text-field--disabled):hover .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.87);border-bottom-color:var(--mdc-text-field-hover-line-color, rgba(0, 0, 0, 0.87))}.mdc-text-field.mdc-text-field--disabled .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.06);border-bottom-color:var(--mdc-text-field-disabled-line-color, rgba(0, 0, 0, 0.06))}.mdc-text-field.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-text-field__input{direction:inherit}mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-text-field-outlined-idle-border-color, rgba(0, 0, 0, 0.38) )}:host(:not([disabled]):hover) :not(.mdc-text-field--invalid):not(.mdc-text-field--focused) mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-text-field-outlined-hover-border-color, rgba(0, 0, 0, 0.87) )}:host(:not([disabled])) .mdc-text-field:not(.mdc-text-field--outlined){background-color:var(--mdc-text-field-fill-color, whitesmoke)}:host(:not([disabled])) .mdc-text-field.mdc-text-field--invalid mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-text-field-error-color, var(--mdc-theme-error, #b00020) )}:host(:not([disabled])) .mdc-text-field.mdc-text-field--invalid+.mdc-text-field-helper-line .mdc-text-field-character-counter,:host(:not([disabled])) .mdc-text-field.mdc-text-field--invalid .mdc-text-field__icon{color:var(--mdc-text-field-error-color, var(--mdc-theme-error, #b00020))}:host(:not([disabled])) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label,:host(:not([disabled])) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label::after{color:var(--mdc-text-field-label-ink-color, rgba(0, 0, 0, 0.6))}:host(:not([disabled])) .mdc-text-field.mdc-text-field--focused mwc-notched-outline{--mdc-notched-outline-stroke-width: 2px}:host(:not([disabled])) .mdc-text-field.mdc-text-field--focused:not(.mdc-text-field--invalid) mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-text-field-focused-label-color, var(--mdc-theme-primary, rgba(98, 0, 238, 0.87)) )}:host(:not([disabled])) .mdc-text-field.mdc-text-field--focused:not(.mdc-text-field--invalid) .mdc-floating-label{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host(:not([disabled])) .mdc-text-field .mdc-text-field__input{color:var(--mdc-text-field-ink-color, rgba(0, 0, 0, 0.87))}:host(:not([disabled])) .mdc-text-field .mdc-text-field__input::placeholder{color:var(--mdc-text-field-label-ink-color, rgba(0, 0, 0, 0.6))}:host(:not([disabled])) .mdc-text-field-helper-line .mdc-text-field-helper-text:not(.mdc-text-field-helper-text--validation-msg),:host(:not([disabled])) .mdc-text-field-helper-line:not(.mdc-text-field--invalid) .mdc-text-field-character-counter{color:var(--mdc-text-field-label-ink-color, rgba(0, 0, 0, 0.6))}:host([disabled]) .mdc-text-field:not(.mdc-text-field--outlined){background-color:var(--mdc-text-field-disabled-fill-color, #fafafa)}:host([disabled]) .mdc-text-field.mdc-text-field--outlined mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-text-field-outlined-disabled-border-color, rgba(0, 0, 0, 0.06) )}:host([disabled]) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label,:host([disabled]) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label::after{color:var(--mdc-text-field-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-text-field .mdc-text-field__input,:host([disabled]) .mdc-text-field .mdc-text-field__input::placeholder{color:var(--mdc-text-field-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-text-field-helper-line .mdc-text-field-helper-text,:host([disabled]) .mdc-text-field-helper-line .mdc-text-field-character-counter{color:var(--mdc-text-field-disabled-ink-color, rgba(0, 0, 0, 0.38))}`;let Ri=class extends Li{};Ri.styles=[Pi],Ri=it([at("mwc-textfield")],Ri);class zi extends K{constructor(){super(...arguments),this.disabled=!1,this.icon="",this.shouldRenderRipple=!1,this.rippleHandlers=new de((()=>(this.shouldRenderRipple=!0,this.ripple)))}renderRipple(){return this.shouldRenderRipple?M`
            <mwc-ripple
                .disabled="${this.disabled}"
                unbounded>
            </mwc-ripple>`:""}focus(){const t=this.buttonElement;t&&(this.rippleHandlers.startFocus(),t.focus())}blur(){const t=this.buttonElement;t&&(this.rippleHandlers.endFocus(),t.blur())}render(){return M`<button
        class="mdc-icon-button mdc-icon-button--display-flex"
        aria-label="${this.ariaLabel||this.icon}"
        aria-haspopup="${Ke(this.ariaHasPopup)}"
        ?disabled="${this.disabled}"
        @focus="${this.handleRippleFocus}"
        @blur="${this.handleRippleBlur}"
        @mousedown="${this.handleRippleMouseDown}"
        @mouseenter="${this.handleRippleMouseEnter}"
        @mouseleave="${this.handleRippleMouseLeave}"
        @touchstart="${this.handleRippleTouchStart}"
        @touchend="${this.handleRippleDeactivate}"
        @touchcancel="${this.handleRippleDeactivate}"
    >${this.renderRipple()}
    ${this.icon?M`<i class="material-icons">${this.icon}</i>`:""}
    <span
      ><slot></slot
    ></span>
  </button>`}handleRippleMouseDown(t){const e=()=>{window.removeEventListener("mouseup",e),this.handleRippleDeactivate()};window.addEventListener("mouseup",e),this.rippleHandlers.startPress(t)}handleRippleTouchStart(t){this.rippleHandlers.startPress(t)}handleRippleDeactivate(){this.rippleHandlers.endPress()}handleRippleMouseEnter(){this.rippleHandlers.startHover()}handleRippleMouseLeave(){this.rippleHandlers.endHover()}handleRippleFocus(){this.rippleHandlers.startFocus()}handleRippleBlur(){this.rippleHandlers.endFocus()}}it([ot({type:Boolean,reflect:!0})],zi.prototype,"disabled",void 0),it([ot({type:String})],zi.prototype,"icon",void 0),it([Xe,ot({type:String,attribute:"aria-label"})],zi.prototype,"ariaLabel",void 0),it([Xe,ot({type:String,attribute:"aria-haspopup"})],zi.prototype,"ariaHasPopup",void 0),it([ht("button")],zi.prototype,"buttonElement",void 0),it([pt("mwc-ripple")],zi.prototype,"ripple",void 0),it([lt()],zi.prototype,"shouldRenderRipple",void 0),it([dt({passive:!0})],zi.prototype,"handleRippleMouseDown",null),it([dt({passive:!0})],zi.prototype,"handleRippleTouchStart",null);const Di=n`.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}.mdc-icon-button{font-size:24px;width:48px;height:48px;padding:12px}.mdc-icon-button .mdc-icon-button__focus-ring{display:none}.mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{display:block;max-height:48px;max-width:48px}@media screen and (forced-colors: active){.mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{pointer-events:none;border:2px solid transparent;border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:100%;width:100%}}@media screen and (forced-colors: active)and (forced-colors: active){.mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{border-color:CanvasText}}@media screen and (forced-colors: active){.mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring::after,.mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring::after{content:"";border:2px solid transparent;border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}}@media screen and (forced-colors: active)and (forced-colors: active){.mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring::after,.mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring::after{border-color:CanvasText}}.mdc-icon-button.mdc-icon-button--reduced-size .mdc-icon-button__ripple{width:40px;height:40px;margin-top:4px;margin-bottom:4px;margin-right:4px;margin-left:4px}.mdc-icon-button.mdc-icon-button--reduced-size.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-icon-button.mdc-icon-button--reduced-size:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{max-height:40px;max-width:40px}.mdc-icon-button .mdc-icon-button__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}.mdc-icon-button:disabled{color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-disabled-on-light, rgba(0, 0, 0, 0.38))}.mdc-icon-button svg,.mdc-icon-button img{width:24px;height:24px}.mdc-icon-button{display:inline-block;position:relative;box-sizing:border-box;border:none;outline:none;background-color:transparent;fill:currentColor;color:inherit;text-decoration:none;cursor:pointer;user-select:none;z-index:0;overflow:visible}.mdc-icon-button .mdc-icon-button__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}.mdc-icon-button:disabled{cursor:default;pointer-events:none}.mdc-icon-button--display-flex{align-items:center;display:inline-flex;justify-content:center}.mdc-icon-button__icon{display:inline-block}.mdc-icon-button__icon.mdc-icon-button__icon--on{display:none}.mdc-icon-button--on .mdc-icon-button__icon{display:none}.mdc-icon-button--on .mdc-icon-button__icon.mdc-icon-button__icon--on{display:inline-block}.mdc-icon-button__link{height:100%;left:0;outline:none;position:absolute;top:0;width:100%}.mdc-icon-button{display:inline-block;position:relative;box-sizing:border-box;border:none;outline:none;background-color:transparent;fill:currentColor;color:inherit;text-decoration:none;cursor:pointer;user-select:none;z-index:0;overflow:visible}.mdc-icon-button .mdc-icon-button__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}.mdc-icon-button:disabled{cursor:default;pointer-events:none}.mdc-icon-button--display-flex{align-items:center;display:inline-flex;justify-content:center}.mdc-icon-button__icon{display:inline-block}.mdc-icon-button__icon.mdc-icon-button__icon--on{display:none}.mdc-icon-button--on .mdc-icon-button__icon{display:none}.mdc-icon-button--on .mdc-icon-button__icon.mdc-icon-button__icon--on{display:inline-block}.mdc-icon-button__link{height:100%;left:0;outline:none;position:absolute;top:0;width:100%}:host{display:inline-block;outline:none}:host([disabled]){pointer-events:none}.mdc-icon-button i,.mdc-icon-button svg,.mdc-icon-button img,.mdc-icon-button ::slotted(*){display:block}:host{--mdc-ripple-color: currentcolor;-webkit-tap-highlight-color:transparent}:host,.mdc-icon-button{vertical-align:top}.mdc-icon-button{width:var(--mdc-icon-button-size, 48px);height:var(--mdc-icon-button-size, 48px);padding:calc( (var(--mdc-icon-button-size, 48px) - var(--mdc-icon-size, 24px)) / 2 )}.mdc-icon-button i,.mdc-icon-button svg,.mdc-icon-button img,.mdc-icon-button ::slotted(*){display:block;width:var(--mdc-icon-size, 24px);height:var(--mdc-icon-size, 24px)}`;let ji=class extends zi{};ji.styles=[Di],ji=it([at("mwc-icon-button")],ji);class Oi extends K{constructor(){super(...arguments),this.value="",this.group=null,this.tabindex=-1,this.disabled=!1,this.twoline=!1,this.activated=!1,this.graphic=null,this.multipleGraphics=!1,this.hasMeta=!1,this.noninteractive=!1,this.selected=!1,this.shouldRenderRipple=!1,this._managingList=null,this.boundOnClick=this.onClick.bind(this),this._firstChanged=!0,this._skipPropRequest=!1,this.rippleHandlers=new de((()=>(this.shouldRenderRipple=!0,this.ripple))),this.listeners=[{target:this,eventNames:["click"],cb:()=>{this.onClick()}},{target:this,eventNames:["mouseenter"],cb:this.rippleHandlers.startHover},{target:this,eventNames:["mouseleave"],cb:this.rippleHandlers.endHover},{target:this,eventNames:["focus"],cb:this.rippleHandlers.startFocus},{target:this,eventNames:["blur"],cb:this.rippleHandlers.endFocus},{target:this,eventNames:["mousedown","touchstart"],cb:t=>{const e=t.type;this.onDown("mousedown"===e?"mouseup":"touchend",t)}}]}get text(){const t=this.textContent;return t?t.trim():""}render(){const t=this.renderText(),e=this.graphic?this.renderGraphic():M``,i=this.hasMeta?this.renderMeta():M``;return M`
      ${this.renderRipple()}
      ${e}
      ${t}
      ${i}`}renderRipple(){return this.shouldRenderRipple?M`
      <mwc-ripple
        .activated=${this.activated}>
      </mwc-ripple>`:this.activated?M`<div class="fake-activated-ripple"></div>`:""}renderGraphic(){const t={multi:this.multipleGraphics};return M`
      <span class="mdc-deprecated-list-item__graphic material-icons ${Ot(t)}">
        <slot name="graphic"></slot>
      </span>`}renderMeta(){return M`
      <span class="mdc-deprecated-list-item__meta material-icons">
        <slot name="meta"></slot>
      </span>`}renderText(){const t=this.twoline?this.renderTwoline():this.renderSingleLine();return M`
      <span class="mdc-deprecated-list-item__text">
        ${t}
      </span>`}renderSingleLine(){return M`<slot></slot>`}renderTwoline(){return M`
      <span class="mdc-deprecated-list-item__primary-text">
        <slot></slot>
      </span>
      <span class="mdc-deprecated-list-item__secondary-text">
        <slot name="secondary"></slot>
      </span>
    `}onClick(){this.fireRequestSelected(!this.selected,"interaction")}onDown(t,e){const i=()=>{window.removeEventListener(t,i),this.rippleHandlers.endPress()};window.addEventListener(t,i),this.rippleHandlers.startPress(e)}fireRequestSelected(t,e){if(this.noninteractive)return;const i=new CustomEvent("request-selected",{bubbles:!0,composed:!0,detail:{source:e,selected:t}});this.dispatchEvent(i)}connectedCallback(){super.connectedCallback(),this.noninteractive||this.setAttribute("mwc-list-item","");for(const t of this.listeners)for(const e of t.eventNames)t.target.addEventListener(e,t.cb,{passive:!0})}disconnectedCallback(){super.disconnectedCallback();for(const t of this.listeners)for(const e of t.eventNames)t.target.removeEventListener(e,t.cb);this._managingList&&(this._managingList.debouncedLayout?this._managingList.debouncedLayout(!0):this._managingList.layout(!0))}firstUpdated(){const t=new Event("list-item-rendered",{bubbles:!0,composed:!0});this.dispatchEvent(t)}}it([ht("slot")],Oi.prototype,"slotElement",void 0),it([pt("mwc-ripple")],Oi.prototype,"ripple",void 0),it([ot({type:String})],Oi.prototype,"value",void 0),it([ot({type:String,reflect:!0})],Oi.prototype,"group",void 0),it([ot({type:Number,reflect:!0})],Oi.prototype,"tabindex",void 0),it([ot({type:Boolean,reflect:!0}),Mt((function(t){t?this.setAttribute("aria-disabled","true"):this.setAttribute("aria-disabled","false")}))],Oi.prototype,"disabled",void 0),it([ot({type:Boolean,reflect:!0})],Oi.prototype,"twoline",void 0),it([ot({type:Boolean,reflect:!0})],Oi.prototype,"activated",void 0),it([ot({type:String,reflect:!0})],Oi.prototype,"graphic",void 0),it([ot({type:Boolean})],Oi.prototype,"multipleGraphics",void 0),it([ot({type:Boolean})],Oi.prototype,"hasMeta",void 0),it([ot({type:Boolean,reflect:!0}),Mt((function(t){t?(this.removeAttribute("aria-checked"),this.removeAttribute("mwc-list-item"),this.selected=!1,this.activated=!1,this.tabIndex=-1):this.setAttribute("mwc-list-item","")}))],Oi.prototype,"noninteractive",void 0),it([ot({type:Boolean,reflect:!0}),Mt((function(t){const e=this.getAttribute("role"),i="gridcell"===e||"option"===e||"row"===e||"tab"===e;i&&t?this.setAttribute("aria-selected","true"):i&&this.setAttribute("aria-selected","false"),this._firstChanged?this._firstChanged=!1:this._skipPropRequest||this.fireRequestSelected(t,"property")}))],Oi.prototype,"selected",void 0),it([lt()],Oi.prototype,"shouldRenderRipple",void 0),it([lt()],Oi.prototype,"_managingList",void 0);const Bi=n`:host{cursor:pointer;user-select:none;-webkit-tap-highlight-color:transparent;height:48px;display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:var(--mdc-list-side-padding, 16px);padding-right:var(--mdc-list-side-padding, 16px);outline:none;height:48px;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host:focus{outline:none}:host([activated]){color:#6200ee;color:var(--mdc-theme-primary, #6200ee);--mdc-ripple-color: var( --mdc-theme-primary, #6200ee )}:host([activated]) .mdc-deprecated-list-item__graphic{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host([activated]) .fake-activated-ripple::before{position:absolute;display:block;top:0;bottom:0;left:0;right:0;width:100%;height:100%;pointer-events:none;z-index:1;content:"";opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12);background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-deprecated-list-item__graphic{flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;display:inline-flex}.mdc-deprecated-list-item__graphic ::slotted(*){flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;width:100%;height:100%;text-align:center}.mdc-deprecated-list-item__meta{width:var(--mdc-list-item-meta-size, 24px);height:var(--mdc-list-item-meta-size, 24px);margin-left:auto;margin-right:0;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-item__meta.multi{width:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:var(--mdc-list-item-meta-size, 24px);line-height:var(--mdc-list-item-meta-size, 24px)}.mdc-deprecated-list-item__meta ::slotted(.material-icons),.mdc-deprecated-list-item__meta ::slotted(mwc-icon){line-height:var(--mdc-list-item-meta-size, 24px) !important}.mdc-deprecated-list-item__meta ::slotted(:not(.material-icons):not(mwc-icon)){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit)}[dir=rtl] .mdc-deprecated-list-item__meta,.mdc-deprecated-list-item__meta[dir=rtl]{margin-left:0;margin-right:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:100%;height:100%}.mdc-deprecated-list-item__text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-deprecated-list-item__text ::slotted([for]),.mdc-deprecated-list-item__text[for]{pointer-events:none}.mdc-deprecated-list-item__primary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;margin-bottom:-20px;display:block}.mdc-deprecated-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-deprecated-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-deprecated-list-item__secondary-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;display:block}.mdc-deprecated-list-item__secondary-text::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-deprecated-list--dense .mdc-deprecated-list-item__secondary-text{font-size:inherit}* ::slotted(a),a{color:inherit;text-decoration:none}:host([twoline]){height:72px}:host([twoline]) .mdc-deprecated-list-item__text{align-self:flex-start}:host([disabled]),:host([noninteractive]){cursor:default;pointer-events:none}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*){opacity:.38}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__primary-text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__secondary-text ::slotted(*){color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-deprecated-list-item__secondary-text ::slotted(*){color:rgba(0, 0, 0, 0.54);color:var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, 0.54))}.mdc-deprecated-list-item__graphic ::slotted(*){background-color:transparent;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-icon-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-group__subheader ::slotted(*){color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 40px);height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 40px);line-height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 40px) !important}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){border-radius:50%}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic,:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic,:host([graphic=control]) .mdc-deprecated-list-item__graphic{margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 16px)}[dir=rtl] :host([graphic=avatar]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=medium]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=large]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=control]) .mdc-deprecated-list-item__graphic,:host([graphic=avatar]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=medium]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=large]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=control]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 16px);margin-right:0}:host([graphic=icon]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 24px);height:var(--mdc-list-item-graphic-size, 24px);margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 32px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 24px);line-height:var(--mdc-list-item-graphic-size, 24px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 24px) !important}[dir=rtl] :host([graphic=icon]) .mdc-deprecated-list-item__graphic,:host([graphic=icon]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 32px);margin-right:0}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:56px}:host([graphic=medium]:not([twoLine])),:host([graphic=large]:not([twoLine])){height:72px}:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 56px);height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic.multi,:host([graphic=large]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(*),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 56px);line-height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 56px) !important}:host([graphic=large]){padding-left:0px}`;let Fi=class extends Oi{};Fi.styles=[Bi],Fi=it([at("mwc-list-item")],Fi);var Ni={UNKNOWN:"Unknown",BACKSPACE:"Backspace",ENTER:"Enter",SPACEBAR:"Spacebar",PAGE_UP:"PageUp",PAGE_DOWN:"PageDown",END:"End",HOME:"Home",ARROW_LEFT:"ArrowLeft",ARROW_UP:"ArrowUp",ARROW_RIGHT:"ArrowRight",ARROW_DOWN:"ArrowDown",DELETE:"Delete",ESCAPE:"Escape",TAB:"Tab"},Hi=new Set;Hi.add(Ni.BACKSPACE),Hi.add(Ni.ENTER),Hi.add(Ni.SPACEBAR),Hi.add(Ni.PAGE_UP),Hi.add(Ni.PAGE_DOWN),Hi.add(Ni.END),Hi.add(Ni.HOME),Hi.add(Ni.ARROW_LEFT),Hi.add(Ni.ARROW_UP),Hi.add(Ni.ARROW_RIGHT),Hi.add(Ni.ARROW_DOWN),Hi.add(Ni.DELETE),Hi.add(Ni.ESCAPE),Hi.add(Ni.TAB);var Vi=8,Ui=13,Yi=32,Zi=33,qi=34,Wi=35,Gi=36,Xi=37,Ki=38,Ji=39,Qi=40,tr=46,er=27,ir=9,rr=new Map;rr.set(Vi,Ni.BACKSPACE),rr.set(Ui,Ni.ENTER),rr.set(Yi,Ni.SPACEBAR),rr.set(Zi,Ni.PAGE_UP),rr.set(qi,Ni.PAGE_DOWN),rr.set(Wi,Ni.END),rr.set(Gi,Ni.HOME),rr.set(Xi,Ni.ARROW_LEFT),rr.set(Ki,Ni.ARROW_UP),rr.set(Ji,Ni.ARROW_RIGHT),rr.set(Qi,Ni.ARROW_DOWN),rr.set(tr,Ni.DELETE),rr.set(er,Ni.ESCAPE),rr.set(ir,Ni.TAB);var nr,ar,sr=new Set;function or(t){var e=t.key;if(Hi.has(e))return e;var i=rr.get(t.keyCode);return i||Ni.UNKNOWN}sr.add(Ni.PAGE_UP),sr.add(Ni.PAGE_DOWN),sr.add(Ni.END),sr.add(Ni.HOME),sr.add(Ni.ARROW_LEFT),sr.add(Ni.ARROW_UP),sr.add(Ni.ARROW_RIGHT),sr.add(Ni.ARROW_DOWN);var lr="mdc-list-item--activated",cr="mdc-list-item",dr="mdc-list-item--disabled",hr="mdc-list-item--selected",pr="mdc-list-item__text",ur="mdc-list-item__primary-text",mr="mdc-list";(nr={})[""+lr]="mdc-list-item--activated",nr[""+cr]="mdc-list-item",nr[""+dr]="mdc-list-item--disabled",nr[""+hr]="mdc-list-item--selected",nr[""+ur]="mdc-list-item__primary-text",nr[""+mr]="mdc-list";var fr=((ar={})[""+lr]="mdc-deprecated-list-item--activated",ar[""+cr]="mdc-deprecated-list-item",ar[""+dr]="mdc-deprecated-list-item--disabled",ar[""+hr]="mdc-deprecated-list-item--selected",ar[""+pr]="mdc-deprecated-list-item__text",ar[""+ur]="mdc-deprecated-list-item__primary-text",ar[""+mr]="mdc-deprecated-list",ar),gr={ACTION_EVENT:"MDCList:action",SELECTION_CHANGE_EVENT:"MDCList:selectionChange",ARIA_CHECKED:"aria-checked",ARIA_CHECKED_CHECKBOX_SELECTOR:'[role="checkbox"][aria-checked="true"]',ARIA_CHECKED_RADIO_SELECTOR:'[role="radio"][aria-checked="true"]',ARIA_CURRENT:"aria-current",ARIA_DISABLED:"aria-disabled",ARIA_ORIENTATION:"aria-orientation",ARIA_ORIENTATION_HORIZONTAL:"horizontal",ARIA_ROLE_CHECKBOX_SELECTOR:'[role="checkbox"]',ARIA_SELECTED:"aria-selected",ARIA_INTERACTIVE_ROLES_SELECTOR:'[role="listbox"], [role="menu"]',ARIA_MULTI_SELECTABLE_SELECTOR:'[aria-multiselectable="true"]',CHECKBOX_RADIO_SELECTOR:'input[type="checkbox"], input[type="radio"]',CHECKBOX_SELECTOR:'input[type="checkbox"]',CHILD_ELEMENTS_TO_TOGGLE_TABINDEX:"\n    ."+cr+" button:not(:disabled),\n    ."+cr+" a,\n    ."+fr[cr]+" button:not(:disabled),\n    ."+fr[cr]+" a\n  ",DEPRECATED_SELECTOR:".mdc-deprecated-list",FOCUSABLE_CHILD_ELEMENTS:"\n    ."+cr+" button:not(:disabled),\n    ."+cr+" a,\n    ."+cr+' input[type="radio"]:not(:disabled),\n    .'+cr+' input[type="checkbox"]:not(:disabled),\n    .'+fr[cr]+" button:not(:disabled),\n    ."+fr[cr]+" a,\n    ."+fr[cr]+' input[type="radio"]:not(:disabled),\n    .'+fr[cr]+' input[type="checkbox"]:not(:disabled)\n  ',RADIO_SELECTOR:'input[type="radio"]',SELECTED_ITEM_SELECTOR:'[aria-selected="true"], [aria-current="true"]'},_r={UNSET_INDEX:-1,TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS:300};const vr=(t,e)=>t-e,yr=["input","button","textarea","select"];function br(t){return t instanceof Set}const xr=t=>{const e=t===_r.UNSET_INDEX?new Set:t;return br(e)?new Set(e):new Set([e])};class wr extends vt{constructor(t){super(Object.assign(Object.assign({},wr.defaultAdapter),t)),this.isMulti_=!1,this.wrapFocus_=!1,this.isVertical_=!0,this.selectedIndex_=_r.UNSET_INDEX,this.focusedItemIndex_=_r.UNSET_INDEX,this.useActivatedClass_=!1,this.ariaCurrentAttrValue_=null}static get strings(){return gr}static get numbers(){return _r}static get defaultAdapter(){return{focusItemAtIndex:()=>{},getFocusedElementIndex:()=>0,getListItemCount:()=>0,isFocusInsideList:()=>!1,isRootFocused:()=>!1,notifyAction:()=>{},notifySelected:()=>{},getSelectedStateForElementIndex:()=>!1,setDisabledStateForElementIndex:()=>{},getDisabledStateForElementIndex:()=>!1,setSelectedStateForElementIndex:()=>{},setActivatedStateForElementIndex:()=>{},setTabIndexForElementIndex:()=>{},setAttributeForElementIndex:()=>{},getAttributeForElementIndex:()=>null}}setWrapFocus(t){this.wrapFocus_=t}setMulti(t){this.isMulti_=t;const e=this.selectedIndex_;if(t){if(!br(e)){const t=e===_r.UNSET_INDEX;this.selectedIndex_=t?new Set:new Set([e])}}else if(br(e))if(e.size){const t=Array.from(e).sort(vr);this.selectedIndex_=t[0]}else this.selectedIndex_=_r.UNSET_INDEX}setVerticalOrientation(t){this.isVertical_=t}setUseActivatedClass(t){this.useActivatedClass_=t}getSelectedIndex(){return this.selectedIndex_}setSelectedIndex(t){this.isIndexValid_(t)&&(this.isMulti_?this.setMultiSelectionAtIndex_(xr(t)):this.setSingleSelectionAtIndex_(t))}handleFocusIn(t,e){e>=0&&this.adapter.setTabIndexForElementIndex(e,0)}handleFocusOut(t,e){e>=0&&this.adapter.setTabIndexForElementIndex(e,-1),setTimeout((()=>{this.adapter.isFocusInsideList()||this.setTabindexToFirstSelectedItem_()}),0)}handleKeydown(t,e,i){const r="ArrowLeft"===or(t),n="ArrowUp"===or(t),a="ArrowRight"===or(t),s="ArrowDown"===or(t),o="Home"===or(t),l="End"===or(t),c="Enter"===or(t),d="Spacebar"===or(t);if(this.adapter.isRootFocused())return void(n||l?(t.preventDefault(),this.focusLastElement()):(s||o)&&(t.preventDefault(),this.focusFirstElement()));let h,p=this.adapter.getFocusedElementIndex();if(!(-1===p&&(p=i,p<0))){if(this.isVertical_&&s||!this.isVertical_&&a)this.preventDefaultEvent(t),h=this.focusNextElement(p);else if(this.isVertical_&&n||!this.isVertical_&&r)this.preventDefaultEvent(t),h=this.focusPrevElement(p);else if(o)this.preventDefaultEvent(t),h=this.focusFirstElement();else if(l)this.preventDefaultEvent(t),h=this.focusLastElement();else if((c||d)&&e){const e=t.target;if(e&&"A"===e.tagName&&c)return;this.preventDefaultEvent(t),this.setSelectedIndexOnAction_(p,!0)}this.focusedItemIndex_=p,void 0!==h&&(this.setTabindexAtIndex_(h),this.focusedItemIndex_=h)}}handleSingleSelection(t,e,i){t!==_r.UNSET_INDEX&&(this.setSelectedIndexOnAction_(t,e,i),this.setTabindexAtIndex_(t),this.focusedItemIndex_=t)}focusNextElement(t){let e=t+1;if(e>=this.adapter.getListItemCount()){if(!this.wrapFocus_)return t;e=0}return this.adapter.focusItemAtIndex(e),e}focusPrevElement(t){let e=t-1;if(e<0){if(!this.wrapFocus_)return t;e=this.adapter.getListItemCount()-1}return this.adapter.focusItemAtIndex(e),e}focusFirstElement(){return this.adapter.focusItemAtIndex(0),0}focusLastElement(){const t=this.adapter.getListItemCount()-1;return this.adapter.focusItemAtIndex(t),t}setEnabled(t,e){this.isIndexValid_(t)&&this.adapter.setDisabledStateForElementIndex(t,!e)}preventDefaultEvent(t){const e=`${t.target.tagName}`.toLowerCase();-1===yr.indexOf(e)&&t.preventDefault()}setSingleSelectionAtIndex_(t,e=!0){this.selectedIndex_!==t&&(this.selectedIndex_!==_r.UNSET_INDEX&&(this.adapter.setSelectedStateForElementIndex(this.selectedIndex_,!1),this.useActivatedClass_&&this.adapter.setActivatedStateForElementIndex(this.selectedIndex_,!1)),e&&this.adapter.setSelectedStateForElementIndex(t,!0),this.useActivatedClass_&&this.adapter.setActivatedStateForElementIndex(t,!0),this.setAriaForSingleSelectionAtIndex_(t),this.selectedIndex_=t,this.adapter.notifySelected(t))}setMultiSelectionAtIndex_(t,e=!0){const i=((t,e)=>{const i=Array.from(t),r=Array.from(e),n={added:[],removed:[]},a=i.sort(vr),s=r.sort(vr);let o=0,l=0;for(;o<a.length||l<s.length;){const t=a[o],e=s[l];t!==e?void 0!==t&&(void 0===e||t<e)?(n.removed.push(t),o++):void 0!==e&&(void 0===t||e<t)&&(n.added.push(e),l++):(o++,l++)}return n})(xr(this.selectedIndex_),t);if(i.removed.length||i.added.length){for(const t of i.removed)e&&this.adapter.setSelectedStateForElementIndex(t,!1),this.useActivatedClass_&&this.adapter.setActivatedStateForElementIndex(t,!1);for(const t of i.added)e&&this.adapter.setSelectedStateForElementIndex(t,!0),this.useActivatedClass_&&this.adapter.setActivatedStateForElementIndex(t,!0);this.selectedIndex_=t,this.adapter.notifySelected(t,i)}}setAriaForSingleSelectionAtIndex_(t){this.selectedIndex_===_r.UNSET_INDEX&&(this.ariaCurrentAttrValue_=this.adapter.getAttributeForElementIndex(t,gr.ARIA_CURRENT));const e=null!==this.ariaCurrentAttrValue_,i=e?gr.ARIA_CURRENT:gr.ARIA_SELECTED;this.selectedIndex_!==_r.UNSET_INDEX&&this.adapter.setAttributeForElementIndex(this.selectedIndex_,i,"false");const r=e?this.ariaCurrentAttrValue_:"true";this.adapter.setAttributeForElementIndex(t,i,r)}setTabindexAtIndex_(t){this.focusedItemIndex_===_r.UNSET_INDEX&&0!==t?this.adapter.setTabIndexForElementIndex(0,-1):this.focusedItemIndex_>=0&&this.focusedItemIndex_!==t&&this.adapter.setTabIndexForElementIndex(this.focusedItemIndex_,-1),this.adapter.setTabIndexForElementIndex(t,0)}setTabindexToFirstSelectedItem_(){let t=0;"number"==typeof this.selectedIndex_&&this.selectedIndex_!==_r.UNSET_INDEX?t=this.selectedIndex_:br(this.selectedIndex_)&&this.selectedIndex_.size>0&&(t=Math.min(...this.selectedIndex_)),this.setTabindexAtIndex_(t)}isIndexValid_(t){if(t instanceof Set){if(!this.isMulti_)throw new Error("MDCListFoundation: Array of index is only supported for checkbox based list");if(0===t.size)return!0;{let e=!1;for(const i of t)if(e=this.isIndexInRange_(i),e)break;return e}}if("number"==typeof t){if(this.isMulti_)throw new Error("MDCListFoundation: Expected array of index for checkbox based list but got number: "+t);return t===_r.UNSET_INDEX||this.isIndexInRange_(t)}return!1}isIndexInRange_(t){const e=this.adapter.getListItemCount();return t>=0&&t<e}setSelectedIndexOnAction_(t,e,i){if(this.adapter.getDisabledStateForElementIndex(t))return;let r=t;if(this.isMulti_&&(r=new Set([t])),this.isIndexValid_(r)){if(this.isMulti_)this.toggleMultiAtIndex(t,i,e);else if(e||i)this.setSingleSelectionAtIndex_(t,e);else{this.selectedIndex_===t&&this.setSingleSelectionAtIndex_(_r.UNSET_INDEX)}e&&this.adapter.notifyAction(t)}}toggleMultiAtIndex(t,e,i=!0){let r=!1;r=void 0===e?!this.adapter.getSelectedStateForElementIndex(t):e;const n=xr(this.selectedIndex_);r?n.add(t):n.delete(t),this.setMultiSelectionAtIndex_(n,i)}}const kr=t=>t.hasAttribute("mwc-list-item");function Tr(){const t=this.itemsReadyResolver;this.itemsReady=new Promise((t=>this.itemsReadyResolver=t)),t()}class Sr extends It{constructor(){super(),this.mdcAdapter=null,this.mdcFoundationClass=wr,this.activatable=!1,this.multi=!1,this.wrapFocus=!1,this.itemRoles=null,this.innerRole=null,this.innerAriaLabel=null,this.rootTabbable=!1,this.previousTabindex=null,this.noninteractive=!1,this.itemsReadyResolver=()=>{},this.itemsReady=Promise.resolve([]),this.items_=[];const t=function(t,e=50){let i;return function(r=!0){clearTimeout(i),i=setTimeout((()=>{t(r)}),e)}}(this.layout.bind(this));this.debouncedLayout=(e=!0)=>{Tr.call(this),t(e)}}async getUpdateComplete(){const t=await super.getUpdateComplete();return await this.itemsReady,t}get items(){return this.items_}updateItems(){var t;const e=null!==(t=this.assignedElements)&&void 0!==t?t:[],i=[];for(const t of e)kr(t)&&(i.push(t),t._managingList=this),t.hasAttribute("divider")&&!t.hasAttribute("role")&&t.setAttribute("role","separator");this.items_=i;const r=new Set;if(this.items_.forEach(((t,e)=>{this.itemRoles?t.setAttribute("role",this.itemRoles):t.removeAttribute("role"),t.selected&&r.add(e)})),this.multi)this.select(r);else{const t=r.size?r.entries().next().value[1]:-1;this.select(t)}const n=new Event("items-updated",{bubbles:!0,composed:!0});this.dispatchEvent(n)}get selected(){const t=this.index;if(!br(t))return-1===t?null:this.items[t];const e=[];for(const i of t)e.push(this.items[i]);return e}get index(){return this.mdcFoundation?this.mdcFoundation.getSelectedIndex():-1}render(){const t=null===this.innerRole?void 0:this.innerRole,e=null===this.innerAriaLabel?void 0:this.innerAriaLabel,i=this.rootTabbable?"0":"-1";return M`
      <!-- @ts-ignore -->
      <ul
          tabindex=${i}
          role="${Ke(t)}"
          aria-label="${Ke(e)}"
          class="mdc-deprecated-list"
          @keydown=${this.onKeydown}
          @focusin=${this.onFocusIn}
          @focusout=${this.onFocusOut}
          @request-selected=${this.onRequestSelected}
          @list-item-rendered=${this.onListItemConnected}>
        <slot></slot>
        ${this.renderPlaceholder()}
      </ul>
    `}renderPlaceholder(){var t;const e=null!==(t=this.assignedElements)&&void 0!==t?t:[];return void 0!==this.emptyMessage&&0===e.length?M`
        <mwc-list-item noninteractive>${this.emptyMessage}</mwc-list-item>
      `:null}firstUpdated(){super.firstUpdated(),this.items.length||(this.mdcFoundation.setMulti(this.multi),this.layout())}onFocusIn(t){if(this.mdcFoundation&&this.mdcRoot){const e=this.getIndexOfTarget(t);this.mdcFoundation.handleFocusIn(t,e)}}onFocusOut(t){if(this.mdcFoundation&&this.mdcRoot){const e=this.getIndexOfTarget(t);this.mdcFoundation.handleFocusOut(t,e)}}onKeydown(t){if(this.mdcFoundation&&this.mdcRoot){const e=this.getIndexOfTarget(t),i=t.target,r=kr(i);this.mdcFoundation.handleKeydown(t,r,e)}}onRequestSelected(t){if(this.mdcFoundation){let e=this.getIndexOfTarget(t);if(-1===e&&(this.layout(),e=this.getIndexOfTarget(t),-1===e))return;if(this.items[e].disabled)return;const i=t.detail.selected,r=t.detail.source;this.mdcFoundation.handleSingleSelection(e,"interaction"===r,i),t.stopPropagation()}}getIndexOfTarget(t){const e=this.items,i=t.composedPath();for(const t of i){let i=-1;if(wt(t)&&kr(t)&&(i=e.indexOf(t)),-1!==i)return i}return-1}createAdapter(){return this.mdcAdapter={getListItemCount:()=>this.mdcRoot?this.items.length:0,getFocusedElementIndex:this.getFocusedItemIndex,getAttributeForElementIndex:(t,e)=>{if(!this.mdcRoot)return"";const i=this.items[t];return i?i.getAttribute(e):""},setAttributeForElementIndex:(t,e,i)=>{if(!this.mdcRoot)return;const r=this.items[t];r&&r.setAttribute(e,i)},focusItemAtIndex:t=>{const e=this.items[t];e&&e.focus()},setTabIndexForElementIndex:(t,e)=>{const i=this.items[t];i&&(i.tabindex=e)},notifyAction:t=>{const e={bubbles:!0,composed:!0};e.detail={index:t};const i=new CustomEvent("action",e);this.dispatchEvent(i)},notifySelected:(t,e)=>{const i={bubbles:!0,composed:!0};i.detail={index:t,diff:e};const r=new CustomEvent("selected",i);this.dispatchEvent(r)},isFocusInsideList:()=>At(this),isRootFocused:()=>{const t=this.mdcRoot;return t.getRootNode().activeElement===t},setDisabledStateForElementIndex:(t,e)=>{const i=this.items[t];i&&(i.disabled=e)},getDisabledStateForElementIndex:t=>{const e=this.items[t];return!!e&&e.disabled},setSelectedStateForElementIndex:(t,e)=>{const i=this.items[t];i&&(i.selected=e)},getSelectedStateForElementIndex:t=>{const e=this.items[t];return!!e&&e.selected},setActivatedStateForElementIndex:(t,e)=>{const i=this.items[t];i&&(i.activated=e)}},this.mdcAdapter}selectUi(t,e=!1){const i=this.items[t];i&&(i.selected=!0,i.activated=e)}deselectUi(t){const e=this.items[t];e&&(e.selected=!1,e.activated=!1)}select(t){this.mdcFoundation&&this.mdcFoundation.setSelectedIndex(t)}toggle(t,e){this.multi&&this.mdcFoundation.toggleMultiAtIndex(t,e)}onListItemConnected(t){const e=t.target;this.layout(-1===this.items.indexOf(e))}layout(t=!0){t&&this.updateItems();const e=this.items[0];for(const t of this.items)t.tabindex=-1;e&&(this.noninteractive?this.previousTabindex||(this.previousTabindex=e):e.tabindex=0),this.itemsReadyResolver()}getFocusedItemIndex(){if(!this.mdcRoot)return-1;if(!this.items.length)return-1;const t=$t();if(!t.length)return-1;for(let e=t.length-1;e>=0;e--){const i=t[e];if(kr(i))return this.items.indexOf(i)}return-1}focusItemAtIndex(t){for(const t of this.items)if(0===t.tabindex){t.tabindex=-1;break}this.items[t].tabindex=0,this.items[t].focus()}focus(){const t=this.mdcRoot;t&&t.focus()}blur(){const t=this.mdcRoot;t&&t.blur()}}it([ot({type:String})],Sr.prototype,"emptyMessage",void 0),it([ht(".mdc-deprecated-list")],Sr.prototype,"mdcRoot",void 0),it([ut("",!0,"*")],Sr.prototype,"assignedElements",void 0),it([ut("",!0,'[tabindex="0"]')],Sr.prototype,"tabbableElements",void 0),it([ot({type:Boolean}),Mt((function(t){this.mdcFoundation&&this.mdcFoundation.setUseActivatedClass(t)}))],Sr.prototype,"activatable",void 0),it([ot({type:Boolean}),Mt((function(t,e){this.mdcFoundation&&this.mdcFoundation.setMulti(t),void 0!==e&&this.layout()}))],Sr.prototype,"multi",void 0),it([ot({type:Boolean}),Mt((function(t){this.mdcFoundation&&this.mdcFoundation.setWrapFocus(t)}))],Sr.prototype,"wrapFocus",void 0),it([ot({type:String}),Mt((function(t,e){void 0!==e&&this.updateItems()}))],Sr.prototype,"itemRoles",void 0),it([ot({type:String})],Sr.prototype,"innerRole",void 0),it([ot({type:String})],Sr.prototype,"innerAriaLabel",void 0),it([ot({type:Boolean})],Sr.prototype,"rootTabbable",void 0),it([ot({type:Boolean,reflect:!0}),Mt((function(t){var e,i;if(t){const t=null!==(i=null===(e=this.tabbableElements)||void 0===e?void 0:e[0])&&void 0!==i?i:null;this.previousTabindex=t,t&&t.setAttribute("tabindex","-1")}else!t&&this.previousTabindex&&(this.previousTabindex.setAttribute("tabindex","0"),this.previousTabindex=null)}))],Sr.prototype,"noninteractive",void 0);const Cr=n`@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{display:block}.mdc-deprecated-list{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);line-height:1.75rem;line-height:var(--mdc-typography-subtitle1-line-height, 1.75rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);line-height:1.5rem;margin:0;padding:8px 0;list-style-type:none;color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));padding:var(--mdc-list-vertical-padding, 8px) 0}.mdc-deprecated-list:focus{outline:none}.mdc-deprecated-list-item{height:48px}.mdc-deprecated-list--dense{padding-top:4px;padding-bottom:4px;font-size:.812rem}.mdc-deprecated-list ::slotted([divider]){height:0;margin:0;border:none;border-bottom-width:1px;border-bottom-style:solid;border-bottom-color:rgba(0, 0, 0, 0.12)}.mdc-deprecated-list ::slotted([divider][padded]){margin:0 var(--mdc-list-side-padding, 16px)}.mdc-deprecated-list ::slotted([divider][inset]){margin-left:var(--mdc-list-inset-margin, 72px);margin-right:0;width:calc( 100% - var(--mdc-list-inset-margin, 72px) )}[dir=rtl] .mdc-deprecated-list ::slotted([divider][inset]),.mdc-deprecated-list ::slotted([divider][inset][dir=rtl]){margin-left:0;margin-right:var(--mdc-list-inset-margin, 72px)}.mdc-deprecated-list ::slotted([divider][inset][padded]){width:calc( 100% - var(--mdc-list-inset-margin, 72px) - var(--mdc-list-side-padding, 16px) )}.mdc-deprecated-list--dense ::slotted([mwc-list-item]){height:40px}.mdc-deprecated-list--dense ::slotted([mwc-list]){--mdc-list-item-graphic-size: 20px}.mdc-deprecated-list--two-line.mdc-deprecated-list--dense ::slotted([mwc-list-item]),.mdc-deprecated-list--avatar-list.mdc-deprecated-list--dense ::slotted([mwc-list-item]){height:60px}.mdc-deprecated-list--avatar-list.mdc-deprecated-list--dense ::slotted([mwc-list]){--mdc-list-item-graphic-size: 36px}:host([noninteractive]){pointer-events:none;cursor:default}.mdc-deprecated-list--dense ::slotted(.mdc-deprecated-list-item__primary-text){display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-deprecated-list--dense ::slotted(.mdc-deprecated-list-item__primary-text)::before{display:inline-block;width:0;height:24px;content:"";vertical-align:0}.mdc-deprecated-list--dense ::slotted(.mdc-deprecated-list-item__primary-text)::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}`;let Er=class extends Sr{};Er.styles=[Cr],Er=it([at("mwc-list")],Er);var $r,Ar,Ir={ANCHOR:"mdc-menu-surface--anchor",ANIMATING_CLOSED:"mdc-menu-surface--animating-closed",ANIMATING_OPEN:"mdc-menu-surface--animating-open",FIXED:"mdc-menu-surface--fixed",IS_OPEN_BELOW:"mdc-menu-surface--is-open-below",OPEN:"mdc-menu-surface--open",ROOT:"mdc-menu-surface"},Mr={CLOSED_EVENT:"MDCMenuSurface:closed",CLOSING_EVENT:"MDCMenuSurface:closing",OPENED_EVENT:"MDCMenuSurface:opened",OPENING_EVENT:"MDCMenuSurface:opening",FOCUSABLE_ELEMENTS:["button:not(:disabled)",'[href]:not([aria-disabled="true"])',"input:not(:disabled)","select:not(:disabled)","textarea:not(:disabled)",'[tabindex]:not([tabindex="-1"]):not([aria-disabled="true"])'].join(", ")},Lr={TRANSITION_OPEN_DURATION:120,TRANSITION_CLOSE_DURATION:75,MARGIN_TO_EDGE:32,ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO:.67,TOUCH_EVENT_WAIT_MS:30};!function(t){t[t.BOTTOM=1]="BOTTOM",t[t.CENTER=2]="CENTER",t[t.RIGHT=4]="RIGHT",t[t.FLIP_RTL=8]="FLIP_RTL"}($r||($r={})),function(t){t[t.TOP_LEFT=0]="TOP_LEFT",t[t.TOP_RIGHT=4]="TOP_RIGHT",t[t.BOTTOM_LEFT=1]="BOTTOM_LEFT",t[t.BOTTOM_RIGHT=5]="BOTTOM_RIGHT",t[t.TOP_START=8]="TOP_START",t[t.TOP_END=12]="TOP_END",t[t.BOTTOM_START=9]="BOTTOM_START",t[t.BOTTOM_END=13]="BOTTOM_END"}(Ar||(Ar={}));var Pr=function(t){function e(i){var r=t.call(this,et(et({},e.defaultAdapter),i))||this;return r.isSurfaceOpen=!1,r.isQuickOpen=!1,r.isHoistedElement=!1,r.isFixedPosition=!1,r.isHorizontallyCenteredOnViewport=!1,r.maxHeight=0,r.openBottomBias=0,r.openAnimationEndTimerId=0,r.closeAnimationEndTimerId=0,r.animationRequestId=0,r.anchorCorner=Ar.TOP_START,r.originCorner=Ar.TOP_START,r.anchorMargin={top:0,right:0,bottom:0,left:0},r.position={x:0,y:0},r}return tt(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return Ir},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return Mr},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return Lr},enumerable:!1,configurable:!0}),Object.defineProperty(e,"Corner",{get:function(){return Ar},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},hasAnchor:function(){return!1},isElementInContainer:function(){return!1},isFocused:function(){return!1},isRtl:function(){return!1},getInnerDimensions:function(){return{height:0,width:0}},getAnchorDimensions:function(){return null},getWindowDimensions:function(){return{height:0,width:0}},getBodyDimensions:function(){return{height:0,width:0}},getWindowScroll:function(){return{x:0,y:0}},setPosition:function(){},setMaxHeight:function(){},setTransformOrigin:function(){},saveFocus:function(){},restoreFocus:function(){},notifyClose:function(){},notifyClosing:function(){},notifyOpen:function(){},notifyOpening:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var t=e.cssClasses,i=t.ROOT,r=t.OPEN;if(!this.adapter.hasClass(i))throw new Error(i+" class required in root element.");this.adapter.hasClass(r)&&(this.isSurfaceOpen=!0)},e.prototype.destroy=function(){clearTimeout(this.openAnimationEndTimerId),clearTimeout(this.closeAnimationEndTimerId),cancelAnimationFrame(this.animationRequestId)},e.prototype.setAnchorCorner=function(t){this.anchorCorner=t},e.prototype.flipCornerHorizontally=function(){this.originCorner=this.originCorner^$r.RIGHT},e.prototype.setAnchorMargin=function(t){this.anchorMargin.top=t.top||0,this.anchorMargin.right=t.right||0,this.anchorMargin.bottom=t.bottom||0,this.anchorMargin.left=t.left||0},e.prototype.setIsHoisted=function(t){this.isHoistedElement=t},e.prototype.setFixedPosition=function(t){this.isFixedPosition=t},e.prototype.isFixed=function(){return this.isFixedPosition},e.prototype.setAbsolutePosition=function(t,e){this.position.x=this.isFinite(t)?t:0,this.position.y=this.isFinite(e)?e:0},e.prototype.setIsHorizontallyCenteredOnViewport=function(t){this.isHorizontallyCenteredOnViewport=t},e.prototype.setQuickOpen=function(t){this.isQuickOpen=t},e.prototype.setMaxHeight=function(t){this.maxHeight=t},e.prototype.setOpenBottomBias=function(t){this.openBottomBias=t},e.prototype.isOpen=function(){return this.isSurfaceOpen},e.prototype.open=function(){var t=this;this.isSurfaceOpen||(this.adapter.notifyOpening(),this.adapter.saveFocus(),this.isQuickOpen?(this.isSurfaceOpen=!0,this.adapter.addClass(e.cssClasses.OPEN),this.dimensions=this.adapter.getInnerDimensions(),this.autoposition(),this.adapter.notifyOpen()):(this.adapter.addClass(e.cssClasses.ANIMATING_OPEN),this.animationRequestId=requestAnimationFrame((function(){t.dimensions=t.adapter.getInnerDimensions(),t.autoposition(),t.adapter.addClass(e.cssClasses.OPEN),t.openAnimationEndTimerId=setTimeout((function(){t.openAnimationEndTimerId=0,t.adapter.removeClass(e.cssClasses.ANIMATING_OPEN),t.adapter.notifyOpen()}),Lr.TRANSITION_OPEN_DURATION)})),this.isSurfaceOpen=!0))},e.prototype.close=function(t){var i=this;if(void 0===t&&(t=!1),this.isSurfaceOpen){if(this.adapter.notifyClosing(),this.isQuickOpen)return this.isSurfaceOpen=!1,t||this.maybeRestoreFocus(),this.adapter.removeClass(e.cssClasses.OPEN),this.adapter.removeClass(e.cssClasses.IS_OPEN_BELOW),void this.adapter.notifyClose();this.adapter.addClass(e.cssClasses.ANIMATING_CLOSED),requestAnimationFrame((function(){i.adapter.removeClass(e.cssClasses.OPEN),i.adapter.removeClass(e.cssClasses.IS_OPEN_BELOW),i.closeAnimationEndTimerId=setTimeout((function(){i.closeAnimationEndTimerId=0,i.adapter.removeClass(e.cssClasses.ANIMATING_CLOSED),i.adapter.notifyClose()}),Lr.TRANSITION_CLOSE_DURATION)})),this.isSurfaceOpen=!1,t||this.maybeRestoreFocus()}},e.prototype.handleBodyClick=function(t){var e=t.target;this.adapter.isElementInContainer(e)||this.close()},e.prototype.handleKeydown=function(t){var e=t.keyCode;("Escape"===t.key||27===e)&&this.close()},e.prototype.autoposition=function(){var t;this.measurements=this.getAutoLayoutmeasurements();var i=this.getoriginCorner(),r=this.getMenuSurfaceMaxHeight(i),n=this.hasBit(i,$r.BOTTOM)?"bottom":"top",a=this.hasBit(i,$r.RIGHT)?"right":"left",s=this.getHorizontalOriginOffset(i),o=this.getVerticalOriginOffset(i),l=this.measurements,c=l.anchorSize,d=l.surfaceSize,h=((t={})[a]=s,t[n]=o,t);c.width/d.width>Lr.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO&&(a="center"),(this.isHoistedElement||this.isFixedPosition)&&this.adjustPositionForHoistedElement(h),this.adapter.setTransformOrigin(a+" "+n),this.adapter.setPosition(h),this.adapter.setMaxHeight(r?r+"px":""),this.hasBit(i,$r.BOTTOM)||this.adapter.addClass(e.cssClasses.IS_OPEN_BELOW)},e.prototype.getAutoLayoutmeasurements=function(){var t=this.adapter.getAnchorDimensions(),e=this.adapter.getBodyDimensions(),i=this.adapter.getWindowDimensions(),r=this.adapter.getWindowScroll();return t||(t={top:this.position.y,right:this.position.x,bottom:this.position.y,left:this.position.x,width:0,height:0}),{anchorSize:t,bodySize:e,surfaceSize:this.dimensions,viewportDistance:{top:t.top,right:i.width-t.right,bottom:i.height-t.bottom,left:t.left},viewportSize:i,windowScroll:r}},e.prototype.getoriginCorner=function(){var t,i,r=this.originCorner,n=this.measurements,a=n.viewportDistance,s=n.anchorSize,o=n.surfaceSize,l=e.numbers.MARGIN_TO_EDGE;this.hasBit(this.anchorCorner,$r.BOTTOM)?(t=a.top-l+this.anchorMargin.bottom,i=a.bottom-l-this.anchorMargin.bottom):(t=a.top-l+this.anchorMargin.top,i=a.bottom-l+s.height-this.anchorMargin.top),!(i-o.height>0)&&t>i+this.openBottomBias&&(r=this.setBit(r,$r.BOTTOM));var c,d,h=this.adapter.isRtl(),p=this.hasBit(this.anchorCorner,$r.FLIP_RTL),u=this.hasBit(this.anchorCorner,$r.RIGHT)||this.hasBit(r,$r.RIGHT),m=!1;(m=h&&p?!u:u)?(c=a.left+s.width+this.anchorMargin.right,d=a.right-this.anchorMargin.right):(c=a.left+this.anchorMargin.left,d=a.right+s.width-this.anchorMargin.left);var f=c-o.width>0,g=d-o.width>0,_=this.hasBit(r,$r.FLIP_RTL)&&this.hasBit(r,$r.RIGHT);return g&&_&&h||!f&&_?r=this.unsetBit(r,$r.RIGHT):(f&&m&&h||f&&!m&&u||!g&&c>=d)&&(r=this.setBit(r,$r.RIGHT)),r},e.prototype.getMenuSurfaceMaxHeight=function(t){if(this.maxHeight>0)return this.maxHeight;var i=this.measurements.viewportDistance,r=0,n=this.hasBit(t,$r.BOTTOM),a=this.hasBit(this.anchorCorner,$r.BOTTOM),s=e.numbers.MARGIN_TO_EDGE;return n?(r=i.top+this.anchorMargin.top-s,a||(r+=this.measurements.anchorSize.height)):(r=i.bottom-this.anchorMargin.bottom+this.measurements.anchorSize.height-s,a&&(r-=this.measurements.anchorSize.height)),r},e.prototype.getHorizontalOriginOffset=function(t){var e=this.measurements.anchorSize,i=this.hasBit(t,$r.RIGHT),r=this.hasBit(this.anchorCorner,$r.RIGHT);if(i){var n=r?e.width-this.anchorMargin.left:this.anchorMargin.right;return this.isHoistedElement||this.isFixedPosition?n-(this.measurements.viewportSize.width-this.measurements.bodySize.width):n}return r?e.width-this.anchorMargin.right:this.anchorMargin.left},e.prototype.getVerticalOriginOffset=function(t){var e=this.measurements.anchorSize,i=this.hasBit(t,$r.BOTTOM),r=this.hasBit(this.anchorCorner,$r.BOTTOM);return i?r?e.height-this.anchorMargin.top:-this.anchorMargin.bottom:r?e.height+this.anchorMargin.bottom:this.anchorMargin.top},e.prototype.adjustPositionForHoistedElement=function(t){var e,i,r=this.measurements,n=r.windowScroll,a=r.viewportDistance,s=r.surfaceSize,o=r.viewportSize,l=Object.keys(t);try{for(var c=rt(l),d=c.next();!d.done;d=c.next()){var h=d.value,p=t[h]||0;!this.isHorizontallyCenteredOnViewport||"left"!==h&&"right"!==h?(p+=a[h],this.isFixedPosition||("top"===h?p+=n.y:"bottom"===h?p-=n.y:"left"===h?p+=n.x:p-=n.x),t[h]=p):t[h]=(o.width-s.width)/2}}catch(t){e={error:t}}finally{try{d&&!d.done&&(i=c.return)&&i.call(c)}finally{if(e)throw e.error}}},e.prototype.maybeRestoreFocus=function(){var t=this,e=this.adapter.isFocused(),i=this.adapter.getOwnerDocument?this.adapter.getOwnerDocument():document,r=i.activeElement&&this.adapter.isElementInContainer(i.activeElement);(e||r)&&setTimeout((function(){t.adapter.restoreFocus()}),Lr.TOUCH_EVENT_WAIT_MS)},e.prototype.hasBit=function(t,e){return Boolean(t&e)},e.prototype.setBit=function(t,e){return t|e},e.prototype.unsetBit=function(t,e){return t^e},e.prototype.isFinite=function(t){return"number"==typeof t&&isFinite(t)},e}(vt),Rr=Pr;const zr={TOP_LEFT:Ar.TOP_LEFT,TOP_RIGHT:Ar.TOP_RIGHT,BOTTOM_LEFT:Ar.BOTTOM_LEFT,BOTTOM_RIGHT:Ar.BOTTOM_RIGHT,TOP_START:Ar.TOP_START,TOP_END:Ar.TOP_END,BOTTOM_START:Ar.BOTTOM_START,BOTTOM_END:Ar.BOTTOM_END};class Dr extends It{constructor(){super(...arguments),this.mdcFoundationClass=Rr,this.absolute=!1,this.fullwidth=!1,this.fixed=!1,this.x=null,this.y=null,this.quick=!1,this.open=!1,this.stayOpenOnBodyClick=!1,this.bitwiseCorner=Ar.TOP_START,this.previousMenuCorner=null,this.menuCorner="START",this.corner="TOP_START",this.styleTop="",this.styleLeft="",this.styleRight="",this.styleBottom="",this.styleMaxHeight="",this.styleTransformOrigin="",this.anchor=null,this.previouslyFocused=null,this.previousAnchor=null,this.onBodyClickBound=()=>{}}render(){return this.renderSurface()}renderSurface(){const t=this.getRootClasses(),e=this.getRootStyles();return M`
      <div
          class=${Ot(t)}
          style="${se(e)}"
          @keydown=${this.onKeydown}
          @opened=${this.registerBodyClick}
          @closed=${this.deregisterBodyClick}>
        ${this.renderContent()}
      </div>`}getRootClasses(){return{"mdc-menu-surface":!0,"mdc-menu-surface--fixed":this.fixed,"mdc-menu-surface--fullwidth":this.fullwidth}}getRootStyles(){return{top:this.styleTop,left:this.styleLeft,right:this.styleRight,bottom:this.styleBottom,"max-height":this.styleMaxHeight,"transform-origin":this.styleTransformOrigin}}renderContent(){return M`<slot></slot>`}createAdapter(){return Object.assign(Object.assign({},kt(this.mdcRoot)),{hasAnchor:()=>!!this.anchor,notifyClose:()=>{const t=new CustomEvent("closed",{bubbles:!0,composed:!0});this.open=!1,this.mdcRoot.dispatchEvent(t)},notifyClosing:()=>{const t=new CustomEvent("closing",{bubbles:!0,composed:!0});this.mdcRoot.dispatchEvent(t)},notifyOpen:()=>{const t=new CustomEvent("opened",{bubbles:!0,composed:!0});this.open=!0,this.mdcRoot.dispatchEvent(t)},notifyOpening:()=>{const t=new CustomEvent("opening",{bubbles:!0,composed:!0});this.mdcRoot.dispatchEvent(t)},isElementInContainer:()=>!1,isRtl:()=>!!this.mdcRoot&&"rtl"===getComputedStyle(this.mdcRoot).direction,setTransformOrigin:t=>{this.mdcRoot&&(this.styleTransformOrigin=t)},isFocused:()=>At(this),saveFocus:()=>{const t=$t(),e=t.length;e||(this.previouslyFocused=null),this.previouslyFocused=t[e-1]},restoreFocus:()=>{this.previouslyFocused&&"focus"in this.previouslyFocused&&this.previouslyFocused.focus()},getInnerDimensions:()=>{const t=this.mdcRoot;return t?{width:t.offsetWidth,height:t.offsetHeight}:{width:0,height:0}},getAnchorDimensions:()=>{const t=this.anchor;return t?t.getBoundingClientRect():null},getBodyDimensions:()=>({width:document.body.clientWidth,height:document.body.clientHeight}),getWindowDimensions:()=>({width:window.innerWidth,height:window.innerHeight}),getWindowScroll:()=>({x:window.pageXOffset,y:window.pageYOffset}),setPosition:t=>{this.mdcRoot&&(this.styleLeft="left"in t?`${t.left}px`:"",this.styleRight="right"in t?`${t.right}px`:"",this.styleTop="top"in t?`${t.top}px`:"",this.styleBottom="bottom"in t?`${t.bottom}px`:"")},setMaxHeight:async t=>{this.mdcRoot&&(this.styleMaxHeight=t,await this.updateComplete,this.styleMaxHeight=`var(--mdc-menu-max-height, ${t})`)}})}onKeydown(t){this.mdcFoundation&&this.mdcFoundation.handleKeydown(t)}onBodyClick(t){if(this.stayOpenOnBodyClick)return;-1===t.composedPath().indexOf(this)&&this.close()}registerBodyClick(){this.onBodyClickBound=this.onBodyClick.bind(this),document.body.addEventListener("click",this.onBodyClickBound,{passive:!0,capture:!0})}deregisterBodyClick(){document.body.removeEventListener("click",this.onBodyClickBound,{capture:!0})}onOpenChanged(t,e){this.mdcFoundation&&(t?this.mdcFoundation.open():void 0!==e&&this.mdcFoundation.close())}close(){this.open=!1}show(){this.open=!0}}it([ht(".mdc-menu-surface")],Dr.prototype,"mdcRoot",void 0),it([ht("slot")],Dr.prototype,"slotElement",void 0),it([ot({type:Boolean}),Mt((function(t){this.mdcFoundation&&!this.fixed&&this.mdcFoundation.setIsHoisted(t)}))],Dr.prototype,"absolute",void 0),it([ot({type:Boolean})],Dr.prototype,"fullwidth",void 0),it([ot({type:Boolean}),Mt((function(t){this.mdcFoundation&&!this.absolute&&this.mdcFoundation.setFixedPosition(t)}))],Dr.prototype,"fixed",void 0),it([ot({type:Number}),Mt((function(t){this.mdcFoundation&&null!==this.y&&null!==t&&(this.mdcFoundation.setAbsolutePosition(t,this.y),this.mdcFoundation.setAnchorMargin({left:t,top:this.y,right:-t,bottom:this.y}))}))],Dr.prototype,"x",void 0),it([ot({type:Number}),Mt((function(t){this.mdcFoundation&&null!==this.x&&null!==t&&(this.mdcFoundation.setAbsolutePosition(this.x,t),this.mdcFoundation.setAnchorMargin({left:this.x,top:t,right:-this.x,bottom:t}))}))],Dr.prototype,"y",void 0),it([ot({type:Boolean}),Mt((function(t){this.mdcFoundation&&this.mdcFoundation.setQuickOpen(t)}))],Dr.prototype,"quick",void 0),it([ot({type:Boolean,reflect:!0}),Mt((function(t,e){this.onOpenChanged(t,e)}))],Dr.prototype,"open",void 0),it([ot({type:Boolean})],Dr.prototype,"stayOpenOnBodyClick",void 0),it([lt(),Mt((function(t){this.mdcFoundation&&this.mdcFoundation.setAnchorCorner(t)}))],Dr.prototype,"bitwiseCorner",void 0),it([ot({type:String}),Mt((function(t){if(this.mdcFoundation){const e="START"===t||"END"===t,i=null===this.previousMenuCorner,r=!i&&t!==this.previousMenuCorner;e&&(r||i&&"END"===t)&&(this.bitwiseCorner=this.bitwiseCorner^$r.RIGHT,this.mdcFoundation.flipCornerHorizontally(),this.previousMenuCorner=t)}}))],Dr.prototype,"menuCorner",void 0),it([ot({type:String}),Mt((function(t){if(this.mdcFoundation&&t){let e=zr[t];"END"===this.menuCorner&&(e^=$r.RIGHT),this.bitwiseCorner=e}}))],Dr.prototype,"corner",void 0),it([lt()],Dr.prototype,"styleTop",void 0),it([lt()],Dr.prototype,"styleLeft",void 0),it([lt()],Dr.prototype,"styleRight",void 0),it([lt()],Dr.prototype,"styleBottom",void 0),it([lt()],Dr.prototype,"styleMaxHeight",void 0),it([lt()],Dr.prototype,"styleTransformOrigin",void 0);const jr=n`.mdc-menu-surface{display:none;position:absolute;box-sizing:border-box;max-width:calc(100vw - 32px);max-width:var(--mdc-menu-max-width, calc(100vw - 32px));max-height:calc(100vh - 32px);max-height:var(--mdc-menu-max-height, calc(100vh - 32px));margin:0;padding:0;transform:scale(1);transform-origin:top left;opacity:0;overflow:auto;will-change:transform,opacity;z-index:8;transition:opacity .03s linear,transform .12s cubic-bezier(0, 0, 0.2, 1),height 250ms cubic-bezier(0, 0, 0.2, 1);box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12);background-color:#fff;background-color:var(--mdc-theme-surface, #fff);color:#000;color:var(--mdc-theme-on-surface, #000);border-radius:4px;border-radius:var(--mdc-shape-medium, 4px);transform-origin-left:top left;transform-origin-right:top right}.mdc-menu-surface:focus{outline:none}.mdc-menu-surface--animating-open{display:inline-block;transform:scale(0.8);opacity:0}.mdc-menu-surface--open{display:inline-block;transform:scale(1);opacity:1}.mdc-menu-surface--animating-closed{display:inline-block;opacity:0;transition:opacity .075s linear}[dir=rtl] .mdc-menu-surface,.mdc-menu-surface[dir=rtl]{transform-origin-left:top right;transform-origin-right:top left}.mdc-menu-surface--anchor{position:relative;overflow:visible}.mdc-menu-surface--fixed{position:fixed}.mdc-menu-surface--fullwidth{width:100%}:host(:not([open])){display:none}.mdc-menu-surface{z-index:8;z-index:var(--mdc-menu-z-index, 8);min-width:112px;min-width:var(--mdc-menu-min-width, 112px)}`;let Or=class extends Dr{};Or.styles=[jr],Or=it([at("mwc-menu-surface")],Or);var Br,Fr={MENU_SELECTED_LIST_ITEM:"mdc-menu-item--selected",MENU_SELECTION_GROUP:"mdc-menu__selection-group",ROOT:"mdc-menu"},Nr={ARIA_CHECKED_ATTR:"aria-checked",ARIA_DISABLED_ATTR:"aria-disabled",CHECKBOX_SELECTOR:'input[type="checkbox"]',LIST_SELECTOR:".mdc-list,.mdc-deprecated-list",SELECTED_EVENT:"MDCMenu:selected",SKIP_RESTORE_FOCUS:"data-menu-item-skip-restore-focus"},Hr={FOCUS_ROOT_INDEX:-1};!function(t){t[t.NONE=0]="NONE",t[t.LIST_ROOT=1]="LIST_ROOT",t[t.FIRST_ITEM=2]="FIRST_ITEM",t[t.LAST_ITEM=3]="LAST_ITEM"}(Br||(Br={}));var Vr=function(t){function e(i){var r=t.call(this,et(et({},e.defaultAdapter),i))||this;return r.closeAnimationEndTimerId=0,r.defaultFocusState=Br.LIST_ROOT,r.selectedIndex=-1,r}return tt(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return Fr},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return Nr},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return Hr},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClassToElementAtIndex:function(){},removeClassFromElementAtIndex:function(){},addAttributeToElementAtIndex:function(){},removeAttributeFromElementAtIndex:function(){},getAttributeFromElementAtIndex:function(){return null},elementContainsClass:function(){return!1},closeSurface:function(){},getElementIndex:function(){return-1},notifySelected:function(){},getMenuItemCount:function(){return 0},focusItemAtIndex:function(){},focusListRoot:function(){},getSelectedSiblingOfItemAtIndex:function(){return-1},isSelectableItemAtIndex:function(){return!1}}},enumerable:!1,configurable:!0}),e.prototype.destroy=function(){this.closeAnimationEndTimerId&&clearTimeout(this.closeAnimationEndTimerId),this.adapter.closeSurface()},e.prototype.handleKeydown=function(t){var e=t.key,i=t.keyCode;("Tab"===e||9===i)&&this.adapter.closeSurface(!0)},e.prototype.handleItemAction=function(t){var e=this,i=this.adapter.getElementIndex(t);if(!(i<0)){this.adapter.notifySelected({index:i});var r="true"===this.adapter.getAttributeFromElementAtIndex(i,Nr.SKIP_RESTORE_FOCUS);this.adapter.closeSurface(r),this.closeAnimationEndTimerId=setTimeout((function(){var i=e.adapter.getElementIndex(t);i>=0&&e.adapter.isSelectableItemAtIndex(i)&&e.setSelectedIndex(i)}),Pr.numbers.TRANSITION_CLOSE_DURATION)}},e.prototype.handleMenuSurfaceOpened=function(){switch(this.defaultFocusState){case Br.FIRST_ITEM:this.adapter.focusItemAtIndex(0);break;case Br.LAST_ITEM:this.adapter.focusItemAtIndex(this.adapter.getMenuItemCount()-1);break;case Br.NONE:break;default:this.adapter.focusListRoot()}},e.prototype.setDefaultFocusState=function(t){this.defaultFocusState=t},e.prototype.getSelectedIndex=function(){return this.selectedIndex},e.prototype.setSelectedIndex=function(t){if(this.validatedIndex(t),!this.adapter.isSelectableItemAtIndex(t))throw new Error("MDCMenuFoundation: No selection group at specified index.");var e=this.adapter.getSelectedSiblingOfItemAtIndex(t);e>=0&&(this.adapter.removeAttributeFromElementAtIndex(e,Nr.ARIA_CHECKED_ATTR),this.adapter.removeClassFromElementAtIndex(e,Fr.MENU_SELECTED_LIST_ITEM)),this.adapter.addClassToElementAtIndex(t,Fr.MENU_SELECTED_LIST_ITEM),this.adapter.addAttributeToElementAtIndex(t,Nr.ARIA_CHECKED_ATTR,"true"),this.selectedIndex=t},e.prototype.setEnabled=function(t,e){this.validatedIndex(t),e?(this.adapter.removeClassFromElementAtIndex(t,dr),this.adapter.addAttributeToElementAtIndex(t,Nr.ARIA_DISABLED_ATTR,"false")):(this.adapter.addClassToElementAtIndex(t,dr),this.adapter.addAttributeToElementAtIndex(t,Nr.ARIA_DISABLED_ATTR,"true"))},e.prototype.validatedIndex=function(t){var e=this.adapter.getMenuItemCount();if(!(t>=0&&t<e))throw new Error("MDCMenuFoundation: No list item at specified index.")},e}(vt);class Ur extends It{constructor(){super(...arguments),this.mdcFoundationClass=Vr,this.listElement_=null,this.anchor=null,this.open=!1,this.quick=!1,this.wrapFocus=!1,this.innerRole="menu",this.innerAriaLabel=null,this.corner="TOP_START",this.x=null,this.y=null,this.absolute=!1,this.multi=!1,this.activatable=!1,this.fixed=!1,this.forceGroupSelection=!1,this.fullwidth=!1,this.menuCorner="START",this.stayOpenOnBodyClick=!1,this.defaultFocus="LIST_ROOT",this._listUpdateComplete=null}get listElement(){return this.listElement_||(this.listElement_=this.renderRoot.querySelector("mwc-list")),this.listElement_}get items(){const t=this.listElement;return t?t.items:[]}get index(){const t=this.listElement;return t?t.index:-1}get selected(){const t=this.listElement;return t?t.selected:null}render(){return this.renderSurface()}renderSurface(){const t=this.getSurfaceClasses();return M`
      <mwc-menu-surface
        ?hidden=${!this.open}
        .anchor=${this.anchor}
        .open=${this.open}
        .quick=${this.quick}
        .corner=${this.corner}
        .x=${this.x}
        .y=${this.y}
        .absolute=${this.absolute}
        .fixed=${this.fixed}
        .fullwidth=${this.fullwidth}
        .menuCorner=${this.menuCorner}
        ?stayOpenOnBodyClick=${this.stayOpenOnBodyClick}
        class=${Ot(t)}
        @closed=${this.onClosed}
        @opened=${this.onOpened}
        @keydown=${this.onKeydown}>
      ${this.renderList()}
    </mwc-menu-surface>`}getSurfaceClasses(){return{"mdc-menu":!0,"mdc-menu-surface":!0}}renderList(){const t="menu"===this.innerRole?"menuitem":"option",e=this.renderListClasses();return M`
      <mwc-list
          rootTabbable
          .innerAriaLabel=${this.innerAriaLabel}
          .innerRole=${this.innerRole}
          .multi=${this.multi}
          class=${Ot(e)}
          .itemRoles=${t}
          .wrapFocus=${this.wrapFocus}
          .activatable=${this.activatable}
          @action=${this.onAction}>
        <slot></slot>
      </mwc-list>`}renderListClasses(){return{"mdc-deprecated-list":!0}}createAdapter(){return{addClassToElementAtIndex:(t,e)=>{const i=this.listElement;if(!i)return;const r=i.items[t];r&&("mdc-menu-item--selected"===e?this.forceGroupSelection&&!r.selected&&i.toggle(t,!0):r.classList.add(e))},removeClassFromElementAtIndex:(t,e)=>{const i=this.listElement;if(!i)return;const r=i.items[t];r&&("mdc-menu-item--selected"===e?r.selected&&i.toggle(t,!1):r.classList.remove(e))},addAttributeToElementAtIndex:(t,e,i)=>{const r=this.listElement;if(!r)return;const n=r.items[t];n&&n.setAttribute(e,i)},removeAttributeFromElementAtIndex:(t,e)=>{const i=this.listElement;if(!i)return;const r=i.items[t];r&&r.removeAttribute(e)},getAttributeFromElementAtIndex:(t,e)=>{const i=this.listElement;if(!i)return null;const r=i.items[t];return r?r.getAttribute(e):null},elementContainsClass:(t,e)=>t.classList.contains(e),closeSurface:()=>{this.open=!1},getElementIndex:t=>{const e=this.listElement;return e?e.items.indexOf(t):-1},notifySelected:()=>{},getMenuItemCount:()=>{const t=this.listElement;return t?t.items.length:0},focusItemAtIndex:t=>{const e=this.listElement;if(!e)return;const i=e.items[t];i&&i.focus()},focusListRoot:()=>{this.listElement&&this.listElement.focus()},getSelectedSiblingOfItemAtIndex:t=>{const e=this.listElement;if(!e)return-1;const i=e.items[t];if(!i||!i.group)return-1;for(let r=0;r<e.items.length;r++){if(r===t)continue;const n=e.items[r];if(n.selected&&n.group===i.group)return r}return-1},isSelectableItemAtIndex:t=>{const e=this.listElement;if(!e)return!1;const i=e.items[t];return!!i&&i.hasAttribute("group")}}}onKeydown(t){this.mdcFoundation&&this.mdcFoundation.handleKeydown(t)}onAction(t){const e=this.listElement;if(this.mdcFoundation&&e){const i=t.detail.index,r=e.items[i];r&&this.mdcFoundation.handleItemAction(r)}}onOpened(){this.open=!0,this.mdcFoundation&&this.mdcFoundation.handleMenuSurfaceOpened()}onClosed(){this.open=!1}async getUpdateComplete(){await this._listUpdateComplete;return await super.getUpdateComplete()}async firstUpdated(){super.firstUpdated();const t=this.listElement;t&&(this._listUpdateComplete=t.updateComplete,await this._listUpdateComplete)}select(t){const e=this.listElement;e&&e.select(t)}close(){this.open=!1}show(){this.open=!0}getFocusedItemIndex(){const t=this.listElement;return t?t.getFocusedItemIndex():-1}focusItemAtIndex(t){const e=this.listElement;e&&e.focusItemAtIndex(t)}layout(t=!0){const e=this.listElement;e&&e.layout(t)}}it([ht(".mdc-menu")],Ur.prototype,"mdcRoot",void 0),it([ht("slot")],Ur.prototype,"slotElement",void 0),it([ot({type:Object})],Ur.prototype,"anchor",void 0),it([ot({type:Boolean,reflect:!0})],Ur.prototype,"open",void 0),it([ot({type:Boolean})],Ur.prototype,"quick",void 0),it([ot({type:Boolean})],Ur.prototype,"wrapFocus",void 0),it([ot({type:String})],Ur.prototype,"innerRole",void 0),it([ot({type:String})],Ur.prototype,"innerAriaLabel",void 0),it([ot({type:String})],Ur.prototype,"corner",void 0),it([ot({type:Number})],Ur.prototype,"x",void 0),it([ot({type:Number})],Ur.prototype,"y",void 0),it([ot({type:Boolean})],Ur.prototype,"absolute",void 0),it([ot({type:Boolean})],Ur.prototype,"multi",void 0),it([ot({type:Boolean})],Ur.prototype,"activatable",void 0),it([ot({type:Boolean})],Ur.prototype,"fixed",void 0),it([ot({type:Boolean})],Ur.prototype,"forceGroupSelection",void 0),it([ot({type:Boolean})],Ur.prototype,"fullwidth",void 0),it([ot({type:String})],Ur.prototype,"menuCorner",void 0),it([ot({type:Boolean})],Ur.prototype,"stayOpenOnBodyClick",void 0),it([ot({type:String}),Mt((function(t){this.mdcFoundation&&this.mdcFoundation.setDefaultFocusState(Br[t])}))],Ur.prototype,"defaultFocus",void 0);const Yr=n`mwc-list ::slotted([mwc-list-item]:not([twoline])),mwc-list ::slotted([noninteractive]:not([twoline])){height:var(--mdc-menu-item-height, 48px)}`;let Zr=class extends Ur{};Zr.styles=[Yr],Zr=it([at("mwc-menu")],Zr);class qr extends K{constructor(){super(...arguments),this.indeterminate=!1,this.progress=0,this.buffer=1,this.reverse=!1,this.closed=!1,this.stylePrimaryHalf="",this.stylePrimaryFull="",this.styleSecondaryQuarter="",this.styleSecondaryHalf="",this.styleSecondaryFull="",this.animationReady=!0,this.closedAnimationOff=!1,this.resizeObserver=null}connectedCallback(){super.connectedCallback(),this.rootEl&&this.attachResizeObserver()}render(){const t={"mdc-linear-progress--closed":this.closed,"mdc-linear-progress--closed-animation-off":this.closedAnimationOff,"mdc-linear-progress--indeterminate":this.indeterminate,"mdc-linear-progress--animation-ready":this.animationReady},e={"--mdc-linear-progress-primary-half":this.stylePrimaryHalf,"--mdc-linear-progress-primary-half-neg":""!==this.stylePrimaryHalf?`-${this.stylePrimaryHalf}`:"","--mdc-linear-progress-primary-full":this.stylePrimaryFull,"--mdc-linear-progress-primary-full-neg":""!==this.stylePrimaryFull?`-${this.stylePrimaryFull}`:"","--mdc-linear-progress-secondary-quarter":this.styleSecondaryQuarter,"--mdc-linear-progress-secondary-quarter-neg":""!==this.styleSecondaryQuarter?`-${this.styleSecondaryQuarter}`:"","--mdc-linear-progress-secondary-half":this.styleSecondaryHalf,"--mdc-linear-progress-secondary-half-neg":""!==this.styleSecondaryHalf?`-${this.styleSecondaryHalf}`:"","--mdc-linear-progress-secondary-full":this.styleSecondaryFull,"--mdc-linear-progress-secondary-full-neg":""!==this.styleSecondaryFull?`-${this.styleSecondaryFull}`:""},i={"flex-basis":this.indeterminate?"100%":100*this.buffer+"%"},r={transform:this.indeterminate?"scaleX(1)":`scaleX(${this.progress})`};return M`
      <div
          role="progressbar"
          class="mdc-linear-progress ${Ot(t)}"
          style="${se(e)}"
          dir="${Ke(this.reverse?"rtl":void 0)}"
          aria-label="${Ke(this.ariaLabel)}"
          aria-valuemin="0"
          aria-valuemax="1"
          aria-valuenow="${Ke(this.indeterminate?void 0:this.progress)}"
        @transitionend="${this.syncClosedState}">
        <div class="mdc-linear-progress__buffer">
          <div
            class="mdc-linear-progress__buffer-bar"
            style=${se(i)}>
          </div>
          <div class="mdc-linear-progress__buffer-dots"></div>
        </div>
        <div
            class="mdc-linear-progress__bar mdc-linear-progress__primary-bar"
            style=${se(r)}>
          <span class="mdc-linear-progress__bar-inner"></span>
        </div>
        <div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
          <span class="mdc-linear-progress__bar-inner"></span>
        </div>
      </div>`}update(t){!t.has("closed")||this.closed&&void 0!==t.get("closed")||this.syncClosedState(),super.update(t)}async firstUpdated(t){super.firstUpdated(t),this.attachResizeObserver()}syncClosedState(){this.closedAnimationOff=this.closed}updated(t){!t.has("indeterminate")&&t.has("reverse")&&this.indeterminate&&this.restartAnimation(),t.has("indeterminate")&&void 0!==t.get("indeterminate")&&this.indeterminate&&window.ResizeObserver&&this.calculateAndSetAnimationDimensions(this.rootEl.offsetWidth),super.updated(t)}disconnectedCallback(){this.resizeObserver&&(this.resizeObserver.disconnect(),this.resizeObserver=null),super.disconnectedCallback()}attachResizeObserver(){if(window.ResizeObserver)return this.resizeObserver=new window.ResizeObserver((t=>{if(this.indeterminate)for(const e of t)if(e.contentRect){const t=e.contentRect.width;this.calculateAndSetAnimationDimensions(t)}})),void this.resizeObserver.observe(this.rootEl);this.resizeObserver=null}calculateAndSetAnimationDimensions(t){const e=.8367142*t,i=2.00611057*t,r=.37651913*t,n=.84386165*t,a=1.60277782*t;this.stylePrimaryHalf=`${e}px`,this.stylePrimaryFull=`${i}px`,this.styleSecondaryQuarter=`${r}px`,this.styleSecondaryHalf=`${n}px`,this.styleSecondaryFull=`${a}px`,this.restartAnimation()}async restartAnimation(){this.animationReady=!1,await this.updateComplete,await new Promise(requestAnimationFrame),this.animationReady=!0,await this.updateComplete}open(){this.closed=!1}close(){this.closed=!0}}it([ht(".mdc-linear-progress")],qr.prototype,"rootEl",void 0),it([ot({type:Boolean,reflect:!0})],qr.prototype,"indeterminate",void 0),it([ot({type:Number})],qr.prototype,"progress",void 0),it([ot({type:Number})],qr.prototype,"buffer",void 0),it([ot({type:Boolean,reflect:!0})],qr.prototype,"reverse",void 0),it([ot({type:Boolean,reflect:!0})],qr.prototype,"closed",void 0),it([Xe,ot({attribute:"aria-label"})],qr.prototype,"ariaLabel",void 0),it([lt()],qr.prototype,"stylePrimaryHalf",void 0),it([lt()],qr.prototype,"stylePrimaryFull",void 0),it([lt()],qr.prototype,"styleSecondaryQuarter",void 0),it([lt()],qr.prototype,"styleSecondaryHalf",void 0),it([lt()],qr.prototype,"styleSecondaryFull",void 0),it([lt()],qr.prototype,"animationReady",void 0),it([lt()],qr.prototype,"closedAnimationOff",void 0);const Wr=n`@keyframes mdc-linear-progress-primary-indeterminate-translate{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(83.67142%);transform:translateX(var(--mdc-linear-progress-primary-half, 83.67142%))}100%{transform:translateX(200.611057%);transform:translateX(var(--mdc-linear-progress-primary-full, 200.611057%))}}@keyframes mdc-linear-progress-primary-indeterminate-scale{0%{transform:scaleX(0.08)}36.65%{animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);transform:scaleX(0.08)}69.15%{animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);transform:scaleX(0.661479)}100%{transform:scaleX(0.08)}}@keyframes mdc-linear-progress-secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(37.651913%);transform:translateX(var(--mdc-linear-progress-secondary-quarter, 37.651913%))}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(84.386165%);transform:translateX(var(--mdc-linear-progress-secondary-half, 84.386165%))}100%{transform:translateX(160.277782%);transform:translateX(var(--mdc-linear-progress-secondary-full, 160.277782%))}}@keyframes mdc-linear-progress-secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);transform:scaleX(0.08)}19.15%{animation-timing-function:cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);transform:scaleX(0.457104)}44.15%{animation-timing-function:cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);transform:scaleX(0.72796)}100%{transform:scaleX(0.08)}}@keyframes mdc-linear-progress-buffering{from{transform:rotate(180deg) translateX(-10px)}}@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(-83.67142%);transform:translateX(var(--mdc-linear-progress-primary-half-neg, -83.67142%))}100%{transform:translateX(-200.611057%);transform:translateX(var(--mdc-linear-progress-primary-full-neg, -200.611057%))}}@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(-37.651913%);transform:translateX(var(--mdc-linear-progress-secondary-quarter-neg, -37.651913%))}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(-84.386165%);transform:translateX(var(--mdc-linear-progress-secondary-half-neg, -84.386165%))}100%{transform:translateX(-160.277782%);transform:translateX(var(--mdc-linear-progress-secondary-full-neg, -160.277782%))}}@keyframes mdc-linear-progress-buffering-reverse{from{transform:translateX(-10px)}}.mdc-linear-progress{position:relative;width:100%;transform:translateZ(0);outline:1px solid transparent;overflow:hidden;transition:opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}@media screen and (forced-colors: active){.mdc-linear-progress{outline-color:CanvasText}}.mdc-linear-progress__bar{position:absolute;width:100%;height:100%;animation:none;transform-origin:top left;transition:transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-linear-progress__bar-inner{display:inline-block;position:absolute;width:100%;animation:none;border-top-style:solid}.mdc-linear-progress__buffer{display:flex;position:absolute;width:100%;height:100%}.mdc-linear-progress__buffer-dots{background-repeat:repeat-x;flex:auto;transform:rotate(180deg);animation:mdc-linear-progress-buffering 250ms infinite linear}.mdc-linear-progress__buffer-bar{flex:0 1 100%;transition:flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-linear-progress__primary-bar{transform:scaleX(0)}.mdc-linear-progress__secondary-bar{display:none}.mdc-linear-progress--indeterminate .mdc-linear-progress__bar{transition:none}.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar{left:-145.166611%}.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar{left:-54.888891%;display:block}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar{animation:mdc-linear-progress-primary-indeterminate-translate 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar>.mdc-linear-progress__bar-inner{animation:mdc-linear-progress-primary-indeterminate-scale 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar{animation:mdc-linear-progress-secondary-indeterminate-translate 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar>.mdc-linear-progress__bar-inner{animation:mdc-linear-progress-secondary-indeterminate-scale 2s infinite linear}[dir=rtl] .mdc-linear-progress:not([dir=ltr]) .mdc-linear-progress__bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]) .mdc-linear-progress__bar{right:0;-webkit-transform-origin:center right;transform-origin:center right}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar{animation-name:mdc-linear-progress-primary-indeterminate-translate-reverse}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar{animation-name:mdc-linear-progress-secondary-indeterminate-translate-reverse}[dir=rtl] .mdc-linear-progress:not([dir=ltr]) .mdc-linear-progress__buffer-dots,.mdc-linear-progress[dir=rtl]:not([dir=ltr]) .mdc-linear-progress__buffer-dots{animation:mdc-linear-progress-buffering-reverse 250ms infinite linear;transform:rotate(0)}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar{right:-145.166611%;left:auto}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar{right:-54.888891%;left:auto}.mdc-linear-progress--closed{opacity:0}.mdc-linear-progress--closed-animation-off .mdc-linear-progress__buffer-dots{animation:none}.mdc-linear-progress--closed-animation-off.mdc-linear-progress--indeterminate .mdc-linear-progress__bar,.mdc-linear-progress--closed-animation-off.mdc-linear-progress--indeterminate .mdc-linear-progress__bar .mdc-linear-progress__bar-inner{animation:none}.mdc-linear-progress__bar-inner{border-color:#6200ee;border-color:var(--mdc-theme-primary, #6200ee)}.mdc-linear-progress__buffer-dots{background-image:url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='none slice'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23e6e6e6'/%3E%3C/svg%3E")}.mdc-linear-progress__buffer-bar{background-color:#e6e6e6}.mdc-linear-progress{height:4px}.mdc-linear-progress__bar-inner{border-top-width:4px}.mdc-linear-progress__buffer-dots{background-size:10px 4px}:host{display:block}.mdc-linear-progress__buffer-bar{background-color:#e6e6e6;background-color:var(--mdc-linear-progress-buffer-color, #e6e6e6)}.mdc-linear-progress__buffer-dots{background-image:url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='none slice'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23e6e6e6'/%3E%3C/svg%3E");background-image:var(--mdc-linear-progress-buffering-dots-image, url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='none slice'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23e6e6e6'/%3E%3C/svg%3E"))}`;let Gr=class extends qr{};Gr.styles=[Wr],Gr=it([at("mwc-linear-progress")],Gr);var Xr={CLOSING:"mdc-snackbar--closing",OPEN:"mdc-snackbar--open",OPENING:"mdc-snackbar--opening"},Kr={ACTION_SELECTOR:".mdc-snackbar__action",ARIA_LIVE_LABEL_TEXT_ATTR:"data-mdc-snackbar-label-text",CLOSED_EVENT:"MDCSnackbar:closed",CLOSING_EVENT:"MDCSnackbar:closing",DISMISS_SELECTOR:".mdc-snackbar__dismiss",LABEL_SELECTOR:".mdc-snackbar__label",OPENED_EVENT:"MDCSnackbar:opened",OPENING_EVENT:"MDCSnackbar:opening",REASON_ACTION:"action",REASON_DISMISS:"dismiss",SURFACE_SELECTOR:".mdc-snackbar__surface"},Jr={DEFAULT_AUTO_DISMISS_TIMEOUT_MS:5e3,INDETERMINATE:-1,MAX_AUTO_DISMISS_TIMEOUT_MS:1e4,MIN_AUTO_DISMISS_TIMEOUT_MS:4e3,SNACKBAR_ANIMATION_CLOSE_TIME_MS:75,SNACKBAR_ANIMATION_OPEN_TIME_MS:150,ARIA_LIVE_DELAY_MS:1e3},Qr=Xr.OPENING,tn=Xr.OPEN,en=Xr.CLOSING,rn=Kr.REASON_ACTION,nn=Kr.REASON_DISMISS,an=function(t){function e(i){var r=t.call(this,et(et({},e.defaultAdapter),i))||this;return r.opened=!1,r.animationFrame=0,r.animationTimer=0,r.autoDismissTimer=0,r.autoDismissTimeoutMs=Jr.DEFAULT_AUTO_DISMISS_TIMEOUT_MS,r.closeOnEscape=!0,r}return tt(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return Xr},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return Kr},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return Jr},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},announce:function(){},notifyClosed:function(){},notifyClosing:function(){},notifyOpened:function(){},notifyOpening:function(){},removeClass:function(){}}},enumerable:!1,configurable:!0}),e.prototype.destroy=function(){this.clearAutoDismissTimer(),cancelAnimationFrame(this.animationFrame),this.animationFrame=0,clearTimeout(this.animationTimer),this.animationTimer=0,this.adapter.removeClass(Qr),this.adapter.removeClass(tn),this.adapter.removeClass(en)},e.prototype.open=function(){var t=this;this.clearAutoDismissTimer(),this.opened=!0,this.adapter.notifyOpening(),this.adapter.removeClass(en),this.adapter.addClass(Qr),this.adapter.announce(),this.runNextAnimationFrame((function(){t.adapter.addClass(tn),t.animationTimer=setTimeout((function(){var e=t.getTimeoutMs();t.handleAnimationTimerEnd(),t.adapter.notifyOpened(),e!==Jr.INDETERMINATE&&(t.autoDismissTimer=setTimeout((function(){t.close(nn)}),e))}),Jr.SNACKBAR_ANIMATION_OPEN_TIME_MS)}))},e.prototype.close=function(t){var e=this;void 0===t&&(t=""),this.opened&&(cancelAnimationFrame(this.animationFrame),this.animationFrame=0,this.clearAutoDismissTimer(),this.opened=!1,this.adapter.notifyClosing(t),this.adapter.addClass(Xr.CLOSING),this.adapter.removeClass(Xr.OPEN),this.adapter.removeClass(Xr.OPENING),clearTimeout(this.animationTimer),this.animationTimer=setTimeout((function(){e.handleAnimationTimerEnd(),e.adapter.notifyClosed(t)}),Jr.SNACKBAR_ANIMATION_CLOSE_TIME_MS))},e.prototype.isOpen=function(){return this.opened},e.prototype.getTimeoutMs=function(){return this.autoDismissTimeoutMs},e.prototype.setTimeoutMs=function(t){var e=Jr.MIN_AUTO_DISMISS_TIMEOUT_MS,i=Jr.MAX_AUTO_DISMISS_TIMEOUT_MS;if(!(t===Jr.INDETERMINATE||t<=i&&t>=e))throw new Error("\n        timeoutMs must be an integer in the range "+e+"–"+i+"\n        (or "+Jr.INDETERMINATE+" to disable), but got '"+t+"'");this.autoDismissTimeoutMs=t},e.prototype.getCloseOnEscape=function(){return this.closeOnEscape},e.prototype.setCloseOnEscape=function(t){this.closeOnEscape=t},e.prototype.handleKeyDown=function(t){("Escape"===t.key||27===t.keyCode)&&this.getCloseOnEscape()&&this.close(nn)},e.prototype.handleActionButtonClick=function(t){this.close(rn)},e.prototype.handleActionIconClick=function(t){this.close(nn)},e.prototype.clearAutoDismissTimer=function(){clearTimeout(this.autoDismissTimer),this.autoDismissTimer=0},e.prototype.handleAnimationTimerEnd=function(){this.animationTimer=0,this.adapter.removeClass(Xr.OPENING),this.adapter.removeClass(Xr.CLOSING)},e.prototype.runNextAnimationFrame=function(t){var e=this;cancelAnimationFrame(this.animationFrame),this.animationFrame=requestAnimationFrame((function(){e.animationFrame=0,clearTimeout(e.animationTimer),e.animationTimer=setTimeout(t,0)}))},e}(vt);const sn=(t,e)=>{var i,r;const n=t._$AN;if(void 0===n)return!1;for(const t of n)null===(r=(i=t)._$AO)||void 0===r||r.call(i,e,!1),sn(t,e);return!0},on=t=>{let e,i;do{if(void 0===(e=t._$AM))break;i=e._$AN,i.delete(t),t=e}while(0===(null==i?void 0:i.size))},ln=t=>{for(let e;e=t._$AM;t=e){let i=e._$AN;if(void 0===i)e._$AN=i=new Set;else if(i.has(t))break;i.add(t),hn(e)}};function cn(t){void 0!==this._$AN?(on(this),this._$AM=t,ln(this)):this._$AM=t}function dn(t,e=!1,i=0){const r=this._$AH,n=this._$AN;if(void 0!==n&&0!==n.size)if(e)if(Array.isArray(r))for(let t=i;t<r.length;t++)sn(r[t],!1),on(r[t]);else null!=r&&(sn(r,!1),on(r));else sn(this,t)}const hn=t=>{var e,i,r,n;t.type==Pt&&(null!==(e=(r=t)._$AP)&&void 0!==e||(r._$AP=dn),null!==(i=(n=t)._$AQ)&&void 0!==i||(n._$AQ=cn))};class pn extends jt{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,i){super._$AT(t,e,i),ln(this),this.isConnected=t._$AU}_$AO(t,e=!0){var i,r;t!==this.isConnected&&(this.isConnected=t,t?null===(i=this.reconnected)||void 0===i||i.call(this):null===(r=this.disconnected)||void 0===r||r.call(this)),e&&(sn(this,t),on(this))}setValue(t){if(Ei(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}const{ARIA_LIVE_DELAY_MS:un}=an.numbers;const mn=Dt(class extends pn{constructor(t){if(super(t),this.labelEl=null,this.timerId=null,this.previousPart=null,t.type!==Pt)throw new Error("AccessibleSnackbarLabel only supports child parts.")}update(t,[e,i]){var r;if(!i)return;if(null===this.labelEl){const i=document.createElement("div"),n=M`<div class="mdc-snackbar__label" role="status" aria-live="polite"></div>`;D(n,i);const a=i.firstElementChild;return a.textContent=e,null===(r=t.endNode)||void 0===r||r.parentNode.insertBefore(a,t.endNode),this.labelEl=a,a}const n=this.labelEl;n.setAttribute("aria-live","off"),n.textContent="";const a=document.createElement("span");return a.style.display="inline-block",a.style.width="0",a.style.height="1px",a.textContent=" ",n.appendChild(a),n.setAttribute("data-mdc-snackbar-label-text",e),null!==this.timerId&&clearTimeout(this.timerId),this.timerId=window.setTimeout((()=>{this.timerId=null,n.setAttribute("aria-live","polite"),n.removeAttribute("data-mdc-snackbar-label-text"),n.textContent=e,this.setValue(this.labelEl)}),un),n}render(t,e){return e?M`
      <div class="mdc-snackbar__label" role="status" aria-live="polite">${t}</div>`:M``}}),{OPENING_EVENT:fn,OPENED_EVENT:gn,CLOSING_EVENT:_n,CLOSED_EVENT:vn}=an.strings;class yn extends It{constructor(){super(...arguments),this.mdcFoundationClass=an,this.open=!1,this.timeoutMs=5e3,this.closeOnEscape=!1,this.labelText="",this.stacked=!1,this.leading=!1,this.reason=""}render(){const t={"mdc-snackbar--stacked":this.stacked,"mdc-snackbar--leading":this.leading};return M`
      <div class="mdc-snackbar ${Ot(t)}" @keydown="${this._handleKeydown}">
        <div class="mdc-snackbar__surface">
          ${mn(this.labelText,this.open)}
          <div class="mdc-snackbar__actions">
            <slot name="action" @click="${this._handleActionClick}"></slot>
            <slot name="dismiss" @click="${this._handleDismissClick}"></slot>
          </div>
        </div>
      </div>`}createAdapter(){return Object.assign(Object.assign({},kt(this.mdcRoot)),{announce:()=>{},notifyClosed:t=>{this.dispatchEvent(new CustomEvent(vn,{bubbles:!0,cancelable:!0,detail:{reason:t}}))},notifyClosing:t=>{this.open=!1,this.dispatchEvent(new CustomEvent(_n,{bubbles:!0,cancelable:!0,detail:{reason:t}}))},notifyOpened:()=>{this.dispatchEvent(new CustomEvent(gn,{bubbles:!0,cancelable:!0}))},notifyOpening:()=>{this.open=!0,this.dispatchEvent(new CustomEvent(fn,{bubbles:!0,cancelable:!0}))}})}show(){this.open=!0}close(t=""){this.reason=t,this.open=!1}firstUpdated(){super.firstUpdated(),this.open&&this.mdcFoundation.open()}_handleKeydown(t){this.mdcFoundation.handleKeyDown(t)}_handleActionClick(t){this.mdcFoundation.handleActionButtonClick(t)}_handleDismissClick(t){this.mdcFoundation.handleActionIconClick(t)}}it([ht(".mdc-snackbar")],yn.prototype,"mdcRoot",void 0),it([ht(".mdc-snackbar__label")],yn.prototype,"labelElement",void 0),it([ot({type:Boolean,reflect:!0}),Mt((function(t){this.mdcFoundation&&(t?this.mdcFoundation.open():(this.mdcFoundation.close(this.reason),this.reason=""))}))],yn.prototype,"open",void 0),it([Mt((function(t){this.mdcFoundation.setTimeoutMs(t)})),ot({type:Number})],yn.prototype,"timeoutMs",void 0),it([Mt((function(t){this.mdcFoundation.setCloseOnEscape(t)})),ot({type:Boolean})],yn.prototype,"closeOnEscape",void 0),it([ot({type:String})],yn.prototype,"labelText",void 0),it([ot({type:Boolean})],yn.prototype,"stacked",void 0),it([ot({type:Boolean})],yn.prototype,"leading",void 0);const bn=n`.mdc-snackbar{z-index:8;margin:8px;display:none;position:fixed;right:0;bottom:0;left:0;align-items:center;justify-content:center;box-sizing:border-box;pointer-events:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-snackbar__surface{background-color:#333333}.mdc-snackbar__label{color:rgba(255, 255, 255, 0.87)}.mdc-snackbar__surface{min-width:344px}@media(max-width: 480px),(max-width: 344px){.mdc-snackbar__surface{min-width:100%}}.mdc-snackbar__surface{max-width:672px}.mdc-snackbar__surface{box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 6px 10px 0px rgba(0, 0, 0, 0.14),0px 1px 18px 0px rgba(0,0,0,.12)}.mdc-snackbar__surface{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-snackbar--opening,.mdc-snackbar--open,.mdc-snackbar--closing{display:flex}.mdc-snackbar--open .mdc-snackbar__label,.mdc-snackbar--open .mdc-snackbar__actions{visibility:visible}.mdc-snackbar--leading{justify-content:flex-start}.mdc-snackbar--stacked .mdc-snackbar__label{padding-left:16px;padding-right:8px;padding-bottom:12px}[dir=rtl] .mdc-snackbar--stacked .mdc-snackbar__label,.mdc-snackbar--stacked .mdc-snackbar__label[dir=rtl]{padding-left:8px;padding-right:16px}.mdc-snackbar--stacked .mdc-snackbar__surface{flex-direction:column;align-items:flex-start}.mdc-snackbar--stacked .mdc-snackbar__actions{align-self:flex-end;margin-bottom:8px}.mdc-snackbar__surface{padding-left:0;padding-right:8px;display:flex;align-items:center;justify-content:flex-start;box-sizing:border-box;transform:scale(0.8);opacity:0}.mdc-snackbar__surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid transparent;border-radius:inherit;content:"";pointer-events:none}@media screen and (forced-colors: active){.mdc-snackbar__surface::before{border-color:CanvasText}}[dir=rtl] .mdc-snackbar__surface,.mdc-snackbar__surface[dir=rtl]{padding-left:8px;padding-right:0}.mdc-snackbar--open .mdc-snackbar__surface{transform:scale(1);opacity:1;pointer-events:auto;transition:opacity 150ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-snackbar--closing .mdc-snackbar__surface{transform:scale(1);transition:opacity 75ms 0ms cubic-bezier(0.4, 0, 1, 1)}.mdc-snackbar__label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);padding-left:16px;padding-right:8px;width:100%;flex-grow:1;box-sizing:border-box;margin:0;visibility:hidden;padding-top:14px;padding-bottom:14px}[dir=rtl] .mdc-snackbar__label,.mdc-snackbar__label[dir=rtl]{padding-left:8px;padding-right:16px}.mdc-snackbar__label::before{display:inline;content:attr(data-mdc-snackbar-label-text)}.mdc-snackbar__actions{display:flex;flex-shrink:0;align-items:center;box-sizing:border-box;visibility:hidden}.mdc-snackbar__action:not(:disabled){color:#bb86fc}.mdc-snackbar__action .mdc-button__ripple::before,.mdc-snackbar__action .mdc-button__ripple::after{background-color:#bb86fc;background-color:var(--mdc-ripple-color, #bb86fc)}.mdc-snackbar__action:hover .mdc-button__ripple::before,.mdc-snackbar__action.mdc-ripple-surface--hover .mdc-button__ripple::before{opacity:0.08;opacity:var(--mdc-ripple-hover-opacity, 0.08)}.mdc-snackbar__action.mdc-ripple-upgraded--background-focused .mdc-button__ripple::before,.mdc-snackbar__action:not(.mdc-ripple-upgraded):focus .mdc-button__ripple::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-snackbar__action:not(.mdc-ripple-upgraded) .mdc-button__ripple::after{transition:opacity 150ms linear}.mdc-snackbar__action:not(.mdc-ripple-upgraded):active .mdc-button__ripple::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-snackbar__action.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-snackbar__dismiss{color:rgba(255, 255, 255, 0.87)}.mdc-snackbar__dismiss .mdc-icon-button__ripple::before,.mdc-snackbar__dismiss .mdc-icon-button__ripple::after{background-color:rgba(255, 255, 255, 0.87);background-color:var(--mdc-ripple-color, rgba(255, 255, 255, 0.87))}.mdc-snackbar__dismiss:hover .mdc-icon-button__ripple::before,.mdc-snackbar__dismiss.mdc-ripple-surface--hover .mdc-icon-button__ripple::before{opacity:0.08;opacity:var(--mdc-ripple-hover-opacity, 0.08)}.mdc-snackbar__dismiss.mdc-ripple-upgraded--background-focused .mdc-icon-button__ripple::before,.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded):focus .mdc-icon-button__ripple::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded) .mdc-icon-button__ripple::after{transition:opacity 150ms linear}.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded):active .mdc-icon-button__ripple::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-snackbar__dismiss.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-snackbar__dismiss.mdc-snackbar__dismiss{width:36px;height:36px;padding:6px;font-size:18px}.mdc-snackbar__dismiss.mdc-snackbar__dismiss .mdc-icon-button__focus-ring{display:none}.mdc-snackbar__dismiss.mdc-snackbar__dismiss.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-snackbar__dismiss.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{display:block;max-height:36px;max-width:36px}@media screen and (forced-colors: active){.mdc-snackbar__dismiss.mdc-snackbar__dismiss.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-snackbar__dismiss.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{pointer-events:none;border:2px solid transparent;border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:100%;width:100%}}@media screen and (forced-colors: active)and (forced-colors: active){.mdc-snackbar__dismiss.mdc-snackbar__dismiss.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-snackbar__dismiss.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{border-color:CanvasText}}@media screen and (forced-colors: active){.mdc-snackbar__dismiss.mdc-snackbar__dismiss.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring::after,.mdc-snackbar__dismiss.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring::after{content:"";border:2px solid transparent;border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}}@media screen and (forced-colors: active)and (forced-colors: active){.mdc-snackbar__dismiss.mdc-snackbar__dismiss.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring::after,.mdc-snackbar__dismiss.mdc-snackbar__dismiss:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring::after{border-color:CanvasText}}.mdc-snackbar__dismiss.mdc-snackbar__dismiss.mdc-icon-button--reduced-size .mdc-icon-button__ripple{width:36px;height:36px;margin-top:0px;margin-bottom:0px;margin-right:0px;margin-left:0px}.mdc-snackbar__dismiss.mdc-snackbar__dismiss.mdc-icon-button--reduced-size.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-snackbar__dismiss.mdc-snackbar__dismiss.mdc-icon-button--reduced-size:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{max-height:36px;max-width:36px}.mdc-snackbar__dismiss.mdc-snackbar__dismiss .mdc-icon-button__touch{position:absolute;top:50%;height:36px;left:50%;width:36px;transform:translate(-50%, -50%)}.mdc-snackbar__action+.mdc-snackbar__dismiss{margin-left:8px;margin-right:0}[dir=rtl] .mdc-snackbar__action+.mdc-snackbar__dismiss,.mdc-snackbar__action+.mdc-snackbar__dismiss[dir=rtl]{margin-left:0;margin-right:8px}slot[name=action]::slotted(mwc-button){--mdc-theme-primary: var( --mdc-snackbar-action-color, #bb86fc )}slot[name=dismiss]::slotted(mwc-icon-button){--mdc-icon-size: 18px;--mdc-icon-button-size: 36px;color:rgba(255, 255, 255, 0.87);margin-left:8px;margin-right:0}[dir=rtl] slot[name=dismiss]::slotted(mwc-icon-button),::slotted(mwc-icon-buttonslot[name=dismiss][dir=rtl]){margin-left:0;margin-right:8px}`;let xn=class extends yn{};function wn(t){this.message=t}xn.styles=[bn],xn=it([at("mwc-snackbar")],xn),wn.prototype=new Error,wn.prototype.name="InvalidCharacterError";var kn="undefined"!=typeof window&&window.atob&&window.atob.bind(window)||function(t){var e=String(t).replace(/=+$/,"");if(e.length%4==1)throw new wn("'atob' failed: The string to be decoded is not correctly encoded.");for(var i,r,n=0,a=0,s="";r=e.charAt(a++);~r&&(i=n%4?64*i+r:r,n++%4)?s+=String.fromCharCode(255&i>>(-2*n&6)):0)r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(r);return s};function Tn(t){this.message=t}function Sn(t,e){if("string"!=typeof t)throw new Tn("Invalid token specified");var i=!0===(e=e||{}).header?0:1;try{return JSON.parse(function(t){var e=t.replace(/-/g,"+").replace(/_/g,"/");switch(e.length%4){case 0:break;case 2:e+="==";break;case 3:e+="=";break;default:throw"Illegal base64url string!"}try{return function(t){return decodeURIComponent(kn(t).replace(/(.)/g,(function(t,e){var i=e.charCodeAt(0).toString(16).toUpperCase();return i.length<2&&(i="0"+i),"%"+i})))}(e)}catch(t){return kn(e)}}(t.split(".")[i]))}catch(t){throw new Tn("Invalid token specified: "+t.message)}}Tn.prototype=new Error,Tn.prototype.name="InvalidTokenError";const Cn="";function En(){localStorage.removeItem("access_token"),localStorage.removeItem("access_token_expires"),localStorage.removeItem("refresh_token"),window.dispatchEvent(new CustomEvent("user:loggedout",{bubbles:!0,composed:!0}))}function $n(t,e){localStorage.setItem("access_token",t),localStorage.setItem("access_token_expires",e)}function An(){const t=localStorage.getItem("access_token");let e={};try{e=Sn(t)||{}}catch{e={}}return e.tree}function In(){const t=localStorage.getItem("access_token");if(!t||"1"===t)return null;try{return(Sn(t)||{}).permissions||{}}catch(t){return{}}}function Mn(){try{const t=localStorage.getItem("grampsjs_settings"),e=JSON.parse(t)||{},i=localStorage.getItem("grampsjs_settings_tree"),r=An()||"unknown",n=JSON.parse(i)?.[r]||{};return{...e,...n}}catch(t){return{}}}function Ln(t,e=!1){const i=e?"grampsjs_settings_tree":"grampsjs_settings",r=localStorage.getItem(i),n=JSON.parse(r)||{},a=An()||"unknown",s={...e?n?.[a]:n,...t},o=e?{[a]:s}:s;localStorage.setItem(i,JSON.stringify(o)),window.dispatchEvent(new CustomEvent("settings:changed",{bubbles:!0,composed:!0}))}function Pn(t){const e=An(),i=e?{[e]:t}:t,r=JSON.stringify(i);localStorage.setItem("recentObjects",r)}function Rn(){try{const t=localStorage.getItem("chatMessages"),e=JSON.parse(t),i=An();return i?e[i]:[]}catch(t){return[]}}function zn(t){const e=An();if(!e)return;const i=localStorage.getItem("chatMessages"),r={...JSON.parse(i),...{[e]:t}},n=JSON.stringify(r);localStorage.setItem("chatMessages",n)}async function Dn(t,e){try{const r=await fetch(`${Cn}/api/token/`,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({username:t,password:e})});if(401===r.status||403===r.status)throw new Error("Wrong username or password");if(200!==r.status)throw new Error(r.statusText||`Error ${r.status}`);const n=await r.json();if(void 0===n.access_token)return{error:"Access token missing in response"};if(void 0===n.refresh_token)return{error:"Refresh token missing in response"};const a=Date.now()+9e5;return $n(n.access_token,a),i=n.refresh_token,localStorage.setItem("refresh_token",i),{}}catch(t){return{error:t.message}}var i}async function jn(t=3){const e=localStorage.getItem("refresh_token");if(null===e)return{error:"No refresh token found!"};try{const i=await fetch(`${Cn}/api/token/refresh/`,{method:"POST",headers:{Authorization:`Bearer ${e}`,Accept:"application/json","Content-Type":"application/json"}});if(403===i.status||422===i.status)throw En(),new Error("Failed refreshing token");if(429===i.status&&t>0)return await new Promise((t=>setTimeout(t,1e3))),jn(t-1);const r=await i.json();if(void 0===r.access_token)throw new Error("Access token missing in response");const n=Date.now()+9e5;return $n(r.access_token,n),{}}catch(t){return{error:t.message}}}async function On(t,e=!0){const i=localStorage.getItem("access_token");let r={};null!==i&&(r={Authorization:`Bearer ${i}`});try{const i=await fetch(`${Cn}${t}`,{method:"GET",headers:r});let n;try{n=await i.json()}catch(t){n={}}if(401===i.status){if(null===localStorage.getItem("refresh_token"))throw new Error("Missing refresh token");const i=await jn();if("error"in i)throw new Error(i.error);return On(t,e)}if(403===i.status)throw new Error("Authorization error");if(200!==i.status)throw new Error(n?.error?.message||i.statusText||`Error ${i.status}`);return e?{data:n,total_count:i.headers.get("X-Total-Count"),etag:i.headers.get("ETag")}:{data:await i.text()}}catch(t){return t instanceof TypeError?{error:"Network error"}:{error:t.message}}}async function Bn(t,e,i,r=!0,n=!0,a=!1){const s=localStorage.getItem("access_token"),o={Accept:"application/json"};null!==s&&(o.Authorization=`Bearer ${s}`),r&&(o["Content-Type"]="application/json");try{const s=await fetch(`${Cn}${e}`,{method:t,headers:o,body:r?JSON.stringify(i):i});let l;try{l=await s.json()}catch(t){l={}}if(401===s.status){if(a)throw new Error(l.message);if(null===localStorage.getItem("refresh_token"))throw new Error("Missing refresh token");const s=await jn();if("error"in s)throw new Error(s.error);return Bn(t,e,i,r,n)}if(403===s.status)throw new Error("Not authorized");if(201!==s.status&&200!==s.status&&202!==s.status)throw new Error(l?.error?.message||s.statusText||`Error ${s.status}`);return n&&window.dispatchEvent(new CustomEvent("db:changed",{bubbles:!0,composed:!0})),202===s.status&&"task"in l?l:{data:l,total_count:s.headers.get("X-Total-Count"),etag:s.headers.get("ETag")}}catch(t){return{error:t.message}}}async function Fn(t,e,i=!0,r=!0){return Bn("PUT",t,e,i,r)}async function Nn(t,e,i=!0,r=!0,n=!1){return Bn("POST",t,e,i,r,n)}function Hn(t){const e=localStorage.getItem("access_token");return`${Cn}${t}?jwt=${e}`}function Vn(t,e=!1){const i=localStorage.getItem("access_token");if(null===i){const i=`${Cn}/api/media/${t}/file`;return e?`${i}?download=1`:i}const r=`${Cn}/api/media/${t}/file?jwt=${i}`;return e?`${r}&download=1`:r}function Un(t,e,i=!1){const r=localStorage.getItem("access_token");return null===r?`${Cn}/api/media/${t}/thumbnail/${e}?square=${i}`:`${Cn}/api/media/${t}/thumbnail/${e}?jwt=${r}&square=${i}`}function Yn(t,e,i,r=!1){const n=localStorage.getItem("access_token"),[a,s,o,l]=e;return null===n?`${Cn}/api/media/${t}/cropped/${a}/${s}/${o}/${l}/thumbnail/${i}?square=${r}`:`${Cn}/api/media/${t}/cropped/${a}/${s}/${o}/${l}/thumbnail/${i}?jwt=${n}&square=${r}`}async function Zn(t){return(await On(`/api/tasks/${t}`)).data}async function qn(t,e,i=1e3,r=1/0){const n=["FAILURE","REVOKED","SUCCESS"];let a=0,s={};for(;!n.includes(s.state)&&a<r;)s=await Zn(t),e(s),await new Promise((t=>setTimeout(t,i))),a+=1}function Wn(){try{const t=localStorage.getItem("bookmarks"),e=JSON.parse(t),i=An();return i?e[i]:{}}catch(t){return{}}}function Gn(){try{const t=localStorage.getItem("bookmarks");return JSON.parse(t)??{}}catch(t){return{}}}function Xn(){try{const t=localStorage.getItem("tasks");return JSON.parse(t)??{}}catch(t){return{}}}function Kn(t,e){const i=An(),r=Xn();if(r?.[i]?.[t]===e){delete r[i][t];const e=JSON.stringify(r);localStorage.setItem("tasks",e)}}const Jn=["ar","bg","br","ca","cs","da","de_AT","de","el","en_GB","en","eo","es","fi","fr","ga","he","hr","hu","is","it","ja","ko","lt","lv","mk","nb","nl","nn","pl","pt_BR","pt_PT","ro","ru","sk","sl","sq","sr","sv","ta","tr","uk","vi","zh_CN","zh_HK","zh_TW"],Qn={};async function ta(t){if(!(t in Qn)&&Jn.includes(t)){const e=await fetch(`/lang/${t}.json`);try{Qn[t]=await e.json()}catch{}}return Qn[t]??{}}const ea=["_Back","_Bookmarks","_Delete","_Generate","_Media Type:","_Names","_Reports","_Save","Abbreviation","Abort changes?","About","Above the name","Add a new event","Add a new media object","Add an existing person as a child of the family","Add an existing repository","Add existing child to family","Add","Added","Address Note","Addresses","Adopted people","Adopted","Adult Christening","After","Age at death","Age","Agency","Ahnentafel Report","Aide","Album","Also Known As","Alternate Marriage","Ancestor Tree","and","Annulment","Apply","Archive","Association Note","Association","Associations","Attribute Note","Attributes","Audio","Author","Baptism","Bar Mitzvah","Bas Mitzvah","Before","between","Birth Date","Birth Date","Birth Name","Birth Place","Birth year","Birth","Birthday and Anniversary Report","Blessing","Bold","Book","Bookstore","Borough","Both","Bottom paper margin","Bride","Building","Burial","Calculated","Calendar","Call name","Call Number","Cancel","Card","Caste","Cause Of Death","Cause","Celebrant","Cemetery","Census","Check and Repair Database","Check and Repair","Check if a separate section is required.","Check Integrity","Child Reference Note","Children","Christening","Church","Citation","Citations having <count> notes","Citations with <count> media","Citations","City","Civil Union","Clear","Clergy","Collection","Color","Complete Individual Report","Complete","Con_fidence","Confidence:","Confidence","Confirmation","Connector","Country","Counts number of ancestors of selected person","County","Create and add a new note","Cremation","CSS filename to use, html format only","Custom","Dashboard","Database overview","Database Summary Report","Date","Death Date","Death Place","Death year","Death","default","Default","Degree","Delete","Deleted","Department","Descendant Report","Descendant Tree","Description","Detailed Ancestral Report","Detailed Descendant Report","Details","Disconnected people","District","Divorce Filing","Divorce","Do not include a title","Do not include any dates or places","Do not include any occupation","Do not include","Do not scale tree","done","Download","E-mail","Edit Citation","Edit Event","Edit Family","Edit Media Object","Edit Note","Edit Person","Edit Place","Edit Repository","Edit Source","Edit","Edited","Education","Elected","Electronic","Emigration","Enclosed By","Encloses","End of Line Report","Engagement","Entire Database","Error","Estimated","Event Note","Event Reference Editor","Event Reference Note","Event Type","Event","Events having <count> notes","Events with <count> media","Events with <count> sources","Events","Families having <count> notes","Families with <count> LDS events","Families with <count> media","Families with <count> sources","Families with incomplete events","Families","Family Descendant Tree","Family Group Report","Family Lines Graph","Family nick name","Family Note","Family Tree","Family","Fan Chart","Farm","Father","Female","Females","Feudal","Fiche","File","Film","Filter","First Communion","Foster","FTP","full circle","Full Name","Gallery","Gender","General","Generates documents in OpenDocument Text format (.odt).","Generates documents in plain text format (.txt).","Given name","Given","Godfather","Graduation","Gramps ID","Groom","Hamlet","High","Home Page","Home Person","Hourglass Graph","How to handle living people","Html code","Identification Number","Image","Immigration","Import Family Tree","Import","in","Informant","Inherited","Italic","Item count","Kinship Report","Language","Last changed","Latitude","LDS Note","Left paper margin","Library","Link","List of places to report on","Loading items...","Locality","Location","Longitude","Low","Magazine","Male","Males","Manuscript","Map","Marriage Banns","Marriage Contract","Marriage Date","Marriage License","Marriage Settlement","Marriage","Married Name","Married","Matrilineal","Matronymic","Max Ancestor Generations","Max Descendant Generations","Media Note","Media Object","Media Objects","Media Reference Note","Media with <count> sources","Media","Medical Information","Medium","Military Service","Mother","Municipality","Name Note","Name type","Name","National Origin","Naturalization","Neighborhood","New Citation","New Event","New Family","New Media","New Note","New Person","New Place","New Repository","New Source","New Tag","New","Newspaper","Next","Nick name","Nickname","No errors were found: the database has passed internal checks.","No generations of empty boxes for unknown ancestors","No Home Person set.","No items","Nobility Title","None","Normal","Not found","Not Related","Note Link Report","Note type:","Note","Notes","Number of Ancestors Report","Number of Children","Number of citations","Number of events","Number of families","Number of generations:","Number of individuals","Number of Marriages","Number of media","Number of notes","Number of people","Number of places","Number of repositories","Number of sources","Number of tags","Number","Occupation","OK","Options","Ordination","Other","Output file format.","Output file name. MANDATORY","Page","Paper orientation number.","Paper size name.","Parents","Parish","Participants","Partner","Password: ","Path","Patrilineal","Patronymic","PDF","People having <count> notes","People marked private","People missing parents","People not marked private","People with <count> addresses","People with <count> associations","People with <count> LDS events","People with <count> media","People with <count> sources","People with a nickname","People with an alternate name","People with children","People with incomplete events","People with incomplete names","people with media","People with multiple marriage records","People with no marriage records","People with unknown gender","People without a known birth date","People without a known death date","People","Person Details","Person Filters","Person Note","Person","Photo","Place Note","Place Report","Place with <count> sources","Place","Places having <count> notes","Places with <count> media","Places","Portrait","Preferences","Prefix","Previous","Primary","Priority","Private","Probate","Produces a complete report on the selected people","Produces a detailed ancestral report","Produces a detailed descendant report","Produces a family group report showing information on a set of parents and their children.","Produces a graphical ancestral tree","Produces a graphical calendar","Produces a graphical descendant tree around a family","Produces a graphical descendant tree","Produces a list of descendants of the active person","Produces a list of people with a specified tag","Produces a report of birthdays and anniversaries","Produces a textual ancestral report","Produces a textual end of line report","Produces a textual place report","Produces a textual report of kinship for a given person","Produces a timeline chart.","Produces an hourglass graph using Graphviz.","Produces family line graphs using Graphviz.","Produces fan charts","Produces relationship graphs using Graphviz.","Produces statistical bar and pie charts of the people in the database","Property","Provides a summary of the current database","Province","Pseudonym","Publication info","Quality","Range","Record is private","Record is public","Records Report","References","Refresh","Region","Regular","Relationship Graph","Relationship to _Father:","Relationship to _Mother:","Relationship to home person","Relationship to home person","Relationship type:","Relationship","Relationships","Religion","Report","Repositories","Repository Note","Repository Reference Note","Repository","Research","Reset","Residence","Retirement","Right paper margin","Role","Run","Safe","Second date","Select a file","Select a person as the father","Select a person as the mother","Select an existing media object","Select an existing note","Select an existing place","Select an existing source","Select the format to display names","Select...","Select","Selected","self","Set _Home Person","Share an existing event","Show Details","show people by generations","Shows some interesting records about people and families","Shows status of links in notes","Siblings","Size in cm","Social Security Number","Source Note","Source Reference Note","Source text","Source: Author","Source: Title","Source","Sources having <count> notes","Sources with <count> media","Sources with <count> Repository references","Sources","Span","Sponsored","Spouses","State","Statistics Charts","Statistics","Status","Stepchild","Street","Style name.","Suffix","Sunday","Surname origin type:","Surname","Surnames","System Information","Tag Report","Tag","Tags","Taken","Text","The centre person for the report","The format and language for dates, with examples","The number of characters per line","The number of generations to include in the report","The translation to be used for the report.","This field is mandatory","Time","Timeline Chart","Timeline","Title","To Do","Tombstone","Top Left","Top paper margin","Total size of media objects","Town","Transcript","Type","Underline","Undo","Unknown ","Unknown","Unmarried","Updating checksums on media","upright","Use Compression","Use Fathers Display format","Username: ","Value","Version","Very High","Very Low","Video","Village","Web Home","Web Search","Web site","Whether a line break should follow the name.","Whether to include Gramps IDs","Whether to include private data","Whether to restrict data on recently-dead people","Whether to start a new page after each generation.","white","Wife","Will","Witness","Zoom","Don't use call name","Father's Age","Mother's Age","Wives use husband's surname (from first family listed)"];var ia=1e3,ra=6e4,na=36e5,aa="millisecond",sa="second",oa="minute",la="hour",ca="day",da="week",ha="month",pa="quarter",ua="year",ma="date",fa="YYYY-MM-DDTHH:mm:ssZ",ga="Invalid Date",_a=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,va=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,ya={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},ba=function(t,e,i){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(i)+t},xa={s:ba,z:function(t){var e=-t.utcOffset(),i=Math.abs(e),r=Math.floor(i/60),n=i%60;return(e<=0?"+":"-")+ba(r,2,"0")+":"+ba(n,2,"0")},m:function t(e,i){if(e.date()<i.date())return-t(i,e);var r=12*(i.year()-e.year())+(i.month()-e.month()),n=e.clone().add(r,ha),a=i-n<0,s=e.clone().add(r+(a?-1:1),ha);return+(-(r+(i-n)/(a?n-s:s-n))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:ha,y:ua,w:da,d:ca,D:ma,h:la,m:oa,s:sa,ms:aa,Q:pa}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},wa="en",ka={};ka[wa]=ya;var Ta=function(t){return t instanceof $a},Sa=function(t,e,i){var r;if(!t)return wa;if("string"==typeof t)ka[t]&&(r=t),e&&(ka[t]=e,r=t);else{var n=t.name;ka[n]=t,r=n}return!i&&r&&(wa=r),r||!i&&wa},Ca=function(t,e){if(Ta(t))return t.clone();var i="object"==typeof e?e:{};return i.date=t,i.args=arguments,new $a(i)},Ea=xa;Ea.l=Sa,Ea.i=Ta,Ea.w=function(t,e){return Ca(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var $a=function(){function t(t){this.$L=Sa(t.locale,null,!0),this.parse(t)}var e=t.prototype;return e.parse=function(t){this.$d=function(t){var e=t.date,i=t.utc;if(null===e)return new Date(NaN);if(Ea.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(_a);if(r){var n=r[2]-1||0,a=(r[7]||"0").substring(0,3);return i?new Date(Date.UTC(r[1],n,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)):new Date(r[1],n,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},e.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},e.$utils=function(){return Ea},e.isValid=function(){return!(this.$d.toString()===ga)},e.isSame=function(t,e){var i=Ca(t);return this.startOf(e)<=i&&i<=this.endOf(e)},e.isAfter=function(t,e){return Ca(t)<this.startOf(e)},e.isBefore=function(t,e){return this.endOf(e)<Ca(t)},e.$g=function(t,e,i){return Ea.u(t)?this[e]:this.set(i,t)},e.unix=function(){return Math.floor(this.valueOf()/1e3)},e.valueOf=function(){return this.$d.getTime()},e.startOf=function(t,e){var i=this,r=!!Ea.u(e)||e,n=Ea.p(t),a=function(t,e){var n=Ea.w(i.$u?Date.UTC(i.$y,e,t):new Date(i.$y,e,t),i);return r?n:n.endOf(ca)},s=function(t,e){return Ea.w(i.toDate()[t].apply(i.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),i)},o=this.$W,l=this.$M,c=this.$D,d="set"+(this.$u?"UTC":"");switch(n){case ua:return r?a(1,0):a(31,11);case ha:return r?a(1,l):a(0,l+1);case da:var h=this.$locale().weekStart||0,p=(o<h?o+7:o)-h;return a(r?c-p:c+(6-p),l);case ca:case ma:return s(d+"Hours",0);case la:return s(d+"Minutes",1);case oa:return s(d+"Seconds",2);case sa:return s(d+"Milliseconds",3);default:return this.clone()}},e.endOf=function(t){return this.startOf(t,!1)},e.$set=function(t,e){var i,r=Ea.p(t),n="set"+(this.$u?"UTC":""),a=(i={},i[ca]=n+"Date",i[ma]=n+"Date",i[ha]=n+"Month",i[ua]=n+"FullYear",i[la]=n+"Hours",i[oa]=n+"Minutes",i[sa]=n+"Seconds",i[aa]=n+"Milliseconds",i)[r],s=r===ca?this.$D+(e-this.$W):e;if(r===ha||r===ua){var o=this.clone().set(ma,1);o.$d[a](s),o.init(),this.$d=o.set(ma,Math.min(this.$D,o.daysInMonth())).$d}else a&&this.$d[a](s);return this.init(),this},e.set=function(t,e){return this.clone().$set(t,e)},e.get=function(t){return this[Ea.p(t)]()},e.add=function(t,e){var i,r=this;t=Number(t);var n=Ea.p(e),a=function(e){var i=Ca(r);return Ea.w(i.date(i.date()+Math.round(e*t)),r)};if(n===ha)return this.set(ha,this.$M+t);if(n===ua)return this.set(ua,this.$y+t);if(n===ca)return a(1);if(n===da)return a(7);var s=(i={},i[oa]=ra,i[la]=na,i[sa]=ia,i)[n]||1,o=this.$d.getTime()+t*s;return Ea.w(o,this)},e.subtract=function(t,e){return this.add(-1*t,e)},e.format=function(t){var e=this,i=this.$locale();if(!this.isValid())return i.invalidDate||ga;var r=t||fa,n=Ea.z(this),a=this.$H,s=this.$m,o=this.$M,l=i.weekdays,c=i.months,d=function(t,i,n,a){return t&&(t[i]||t(e,r))||n[i].substr(0,a)},h=function(t){return Ea.s(a%12||12,t,"0")},p=i.meridiem||function(t,e,i){var r=t<12?"AM":"PM";return i?r.toLowerCase():r},u={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:Ea.s(o+1,2,"0"),MMM:d(i.monthsShort,o,c,3),MMMM:d(c,o),D:this.$D,DD:Ea.s(this.$D,2,"0"),d:String(this.$W),dd:d(i.weekdaysMin,this.$W,l,2),ddd:d(i.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(a),HH:Ea.s(a,2,"0"),h:h(1),hh:h(2),a:p(a,s,!0),A:p(a,s,!1),m:String(s),mm:Ea.s(s,2,"0"),s:String(this.$s),ss:Ea.s(this.$s,2,"0"),SSS:Ea.s(this.$ms,3,"0"),Z:n};return r.replace(va,(function(t,e){return e||u[t]||n.replace(":","")}))},e.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},e.diff=function(t,e,i){var r,n=Ea.p(e),a=Ca(t),s=(a.utcOffset()-this.utcOffset())*ra,o=this-a,l=Ea.m(this,a);return l=(r={},r[ua]=l/12,r[ha]=l,r[pa]=l/3,r[da]=(o-s)/6048e5,r[ca]=(o-s)/864e5,r[la]=o/na,r[oa]=o/ra,r[sa]=o/ia,r)[n]||o,i?l:Ea.a(l)},e.daysInMonth=function(){return this.endOf(ha).$D},e.$locale=function(){return ka[this.$L]},e.locale=function(t,e){if(!t)return this.$L;var i=this.clone(),r=Sa(t,e,!0);return r&&(i.$L=r),i},e.clone=function(){return Ea.w(this.$d,this)},e.toDate=function(){return new Date(this.valueOf())},e.toJSON=function(){return this.isValid()?this.toISOString():null},e.toISOString=function(){return this.$d.toISOString()},e.toString=function(){return this.$d.toUTCString()},t}(),Aa=$a.prototype;Ca.prototype=Aa,[["$ms",aa],["$s",sa],["$m",oa],["$H",la],["$W",ca],["$M",ha],["$y",ua],["$D",ma]].forEach((function(t){Aa[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),Ca.extend=function(t,e){return t.$i||(t(e,$a,Ca),t.$i=!0),Ca},Ca.locale=Sa,Ca.isDayjs=Ta,Ca.unix=function(t){return Ca(1e3*t)},Ca.en=ka[wa],Ca.Ls=ka,Ca.p={};var Ia=function(t,e,i){t=t||{};var r=e.prototype,n={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function a(t,e,i,n){return r.fromToBase(t,e,i,n)}i.en.relativeTime=n,r.fromToBase=function(e,r,a,s,o){for(var l,c,d,h=a.$locale().relativeTime||n,p=t.thresholds||[{l:"s",r:44,d:sa},{l:"m",r:89},{l:"mm",r:44,d:oa},{l:"h",r:89},{l:"hh",r:21,d:la},{l:"d",r:35},{l:"dd",r:25,d:ca},{l:"M",r:45},{l:"MM",r:10,d:ha},{l:"y",r:17},{l:"yy",d:ua}],u=p.length,m=0;m<u;m+=1){var f=p[m];f.d&&(l=s?i(e).diff(a,f.d,!0):a.diff(e,f.d,!0));var g=(t.rounding||Math.round)(Math.abs(l));if(d=l>0,g<=f.r||!f.r){g<=1&&m>0&&(f=p[m-1]);var _=h[f.l];o&&(g=o(""+g)),c="string"==typeof _?_.replace("%d",g):_(g,r,f.l,d);break}}if(r)return c;var v=d?h.future:h.past;return"function"==typeof v?v(c):v.replace("%s",c)},r.to=function(t,e){return a(t,e,this,!0)},r.from=function(t,e){return a(t,e,this)};var s=function(t){return t.$u?i.utc():i()};r.toNow=function(t){return this.to(s(this),t)},r.fromNow=function(t){return this.from(s(this),t)}},Ma="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z",La="M12 1A2.5 2.5 0 0 0 9.5 3.5A2.5 2.5 0 0 0 11 5.79V7H7A2 2 0 0 0 5 9V9.71A2.5 2.5 0 0 0 3.5 12A2.5 2.5 0 0 0 5 14.29V15H4A2 2 0 0 0 2 17V18.21A2.5 2.5 0 0 0 .5 20.5A2.5 2.5 0 0 0 3 23A2.5 2.5 0 0 0 5.5 20.5A2.5 2.5 0 0 0 4 18.21V17H8V18.21A2.5 2.5 0 0 0 6.5 20.5A2.5 2.5 0 0 0 9 23A2.5 2.5 0 0 0 11.5 20.5A2.5 2.5 0 0 0 10 18.21V17A2 2 0 0 0 8 15H7V14.29A2.5 2.5 0 0 0 8.5 12A2.5 2.5 0 0 0 7 9.71V9H17V9.71A2.5 2.5 0 0 0 15.5 12A2.5 2.5 0 0 0 17 14.29V15H16A2 2 0 0 0 14 17V18.21A2.5 2.5 0 0 0 12.5 20.5A2.5 2.5 0 0 0 15 23A2.5 2.5 0 0 0 17.5 20.5A2.5 2.5 0 0 0 16 18.21V17H20V18.21A2.5 2.5 0 0 0 18.5 20.5A2.5 2.5 0 0 0 21 23A2.5 2.5 0 0 0 23.5 20.5A2.5 2.5 0 0 0 22 18.21V17A2 2 0 0 0 20 15H19V14.29A2.5 2.5 0 0 0 20.5 12A2.5 2.5 0 0 0 19 9.71V9A2 2 0 0 0 17 7H13V5.79A2.5 2.5 0 0 0 14.5 3.5A2.5 2.5 0 0 0 12 1M12 2.5A1 1 0 0 1 13 3.5A1 1 0 0 1 12 4.5A1 1 0 0 1 11 3.5A1 1 0 0 1 12 2.5M6 11A1 1 0 0 1 7 12A1 1 0 0 1 6 13A1 1 0 0 1 5 12A1 1 0 0 1 6 11M18 11A1 1 0 0 1 19 12A1 1 0 0 1 18 13A1 1 0 0 1 17 12A1 1 0 0 1 18 11M3 19.5A1 1 0 0 1 4 20.5A1 1 0 0 1 3 21.5A1 1 0 0 1 2 20.5A1 1 0 0 1 3 19.5M9 19.5A1 1 0 0 1 10 20.5A1 1 0 0 1 9 21.5A1 1 0 0 1 8 20.5A1 1 0 0 1 9 19.5M15 19.5A1 1 0 0 1 16 20.5A1 1 0 0 1 15 21.5A1 1 0 0 1 14 20.5A1 1 0 0 1 15 19.5M21 19.5A1 1 0 0 1 22 20.5A1 1 0 0 1 21 21.5A1 1 0 0 1 20 20.5A1 1 0 0 1 21 19.5Z",Pa="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z",Ra="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z";const za=M`<svg
  height="24"
  width="24"
  viewBox="0 0 24 24"
>
  <path
    fill="#000000"
    d="M10,2H14L13.21,9.91L19.66,5.27L21.66,8.73L14.42,12L21.66,15.27L19.66,18.73L13.21,14.09L14,22H10L10.79,14.09L4.34,18.73L2.34,15.27L9.58,12L2.34,8.73L4.34,5.27L10.79,9.91L10,2Z"
  />
</svg>`,Da=M`<svg height="24" width="24" viewBox="0 0 24 24">
  <path fill="#000000" d="M10.5,2H13.5V8H19V11H13.5V22H10.5V11H5V8H10.5V2Z" />
</svg>`,ja=M`<svg height="24" width="24" viewBox="0 0 24 24">
  <path
    d="m8.748 6.4766c-3.0431 1e-6 -5.5234 2.4804-5.5234 5.5234 0 3.0431 2.4804 5.5234 5.5234 5.5234 0.93172 0 1.8089-0.23453 2.5801-0.64453-0.36367-0.29425-0.69179-0.62746-0.98242-0.99414-0.49253 0.2017-1.0307 0.31641-1.5977 0.31641-2.3282 0-4.2012-1.873-4.2012-4.2012 0-2.3282 1.873-4.2012 4.2012-4.2012 2.3282 0 4.2012 1.873 4.2012 4.2012 0 0.72003-0.19536 1.3855-0.51172 1.9766 0.26276 0.3773 0.60147 0.69303 0.99219 0.9375 0.53009-0.84757 0.8418-1.8439 0.8418-2.9141 0-3.0431-2.4804-5.5234-5.5234-5.5234zm6.5098 0c-0.93172 1e-7 -1.8089 0.23453-2.5801 0.64453 0.36367 0.29425 0.69179 0.62746 0.98242 0.99414 0.49253-0.2017 1.0307-0.31641 1.5977-0.31641 2.3282 2e-7 4.2012 1.873 4.2012 4.2012 0 2.3282-1.873 4.2012-4.2012 4.2012-2.3282 0-4.2012-1.873-4.2012-4.2012 0-0.72003 0.19536-1.3855 0.51172-1.9766-0.26276-0.3773-0.60147-0.69303-0.99219-0.9375-0.53009 0.84757-0.8418 1.8439-0.8418 2.9141 2e-7 3.0431 2.4804 5.5234 5.5234 5.5234 3.0431-2e-6 5.5234-2.4804 5.5234-5.5234 0-3.0431-2.4804-5.5234-5.5234-5.5234z"
  ></path>
</svg>`,Oa=M`<svg height="24" width="24" viewBox="0 0 24 24">
  <path
    fill="#000000"
    d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
  />
</svg>`,Ba=M`<svg
  height="24"
  width="24"
  viewBox="0 0 24 24"
>
  <path
    fill="#000000"
    d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"
  />
</svg>`,Fa=M`<svg
  height="24"
  width="24"
  viewBox="0 0 24 24"
>
  <path
    fill="#000000"
    d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
  />
</svg>`;function Na(t,e="#999999"){return M`<i
    ><svg height="24" width="24" viewBox="0 0 24 24">
      <path fill="${e}" d="${t}" /></svg
  ></i>`}function Ha(t,e="#999999",i=0,r=""){return M`<svg
    height="24"
    width="24"
    viewBox="0 0 24 24"
    slot="${r}"
    transform="rotate(${i})"
  >
    <path fill="${e}" d="${t}" />
  </svg>`}function Va(t,e="#999999"){return`data:image/svg+xml,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' height='24' width='24' viewBox='0 0 24 24'><path fill='${e}' d='${t}' /></svg>`)}`}function Ua(t,e=1){const i=/^#?([a-z\d]{4})([a-z\d]{4})([a-z\d]{4})$/i.exec(t);if(i){return`rgb(${parseInt(i[1],32)/255}, ${parseInt(i[2],32)/255}, ${parseInt(i[3],32)/255}, ${e})`}return null}function Ya(t,e=1){const i=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);if(i){return`rgb(${parseInt(i[1],16)}, ${parseInt(i[2],16)}, ${parseInt(i[3],16)}, ${e})`}return null}function Za(t,e){return void 0===e?"":e in t?t[e].replace("_",""):e.replace("_","")}function qa(t){return`${t.name_given||"…"} ${t.name_surname||"…"} ${t.name_suffix||""}`.trim()}function Wa(t){return`${t.prefix} ${t.surname} ${t.connector}`.trim()}function Ga(t,e={givenfirst:!0}){const i=t.primary_name?.suffix??"",r=t.primary_name?.first_name??"…",n=t.primary_name?.surname_list?.map(Wa)?.join(" ")??"…";return e.givenfirst?`${r} ${n} ${i}`.trim():`${n}, ${r} ${i}`.trim()}function Xa(t){return t.father||t.mother?`${qa(t.father||{})} & ${qa(t.mother||{})}`:""}function Ka(t){return t.source?.title?`${t.source?.title||""}\n          ${t.page?` (${t.page})`:""}`:""}function Ja(t,e=!0){return t.summary?M`${t.summary}${e&&t.date?` (${t.date})`:""}`:""}function Qa(t){return M`
    <span class="event">
      <mwc-icon class="inline ${"M"===t.sex?"male":"female"}"
        >person</mwc-icon
      >
      <a href="${""}/person/${t.gramps_id}"
        >${t.name_given||"…"}
        ${t.name_surname||"…"}</a
      >
    </span>
    ${t?.birth?.date?M` <span class="event"
          ><i>${za}</i> ${t.birth.date}</span
        >`:""}
    ${t?.death?.date?M` <span class="event"
          ><i>${Da}</i> ${t.death.date}</span
        >`:""}
  `}function ts(t,e){switch(e){case"person":return t?.primary_name?.first_name;case"event":return t.type;case"family":default:return"";case"place":return t?.name?.value||t.title;case"source":return t.title;case"repository":return t.name;case"citation":return t.page;case"media":return t.desc}}Ca.extend(Ia);const es={person:"person",family:"people",event:"event",place:"place",source:"bookmarks",citation:"bookmark",repository:"account_balance",note:"sticky_note_2",media:"photo",tag:"label"},is={person:"people",family:"families",event:"events",place:"places",source:"sources",citation:"citations",repository:"repositories",note:"notes",media:"media",tag:"tags"};function rs(t,e,i){switch(t){case"person":return`\n    ${e?.profile?.birth?.date?`* ${e.profile.birth.date}`:""}${e?.profile?.birth?.place&&e?.profile?.birth?.date?", ":""}${e?.profile?.birth?.place||""}\n    `;case"event":return`\n    ${e?.profile?.date||""}${e?.profile?.place&&e?.profile?.date?", ":""}${e?.profile?.place||""}\n    `;case"place":return`\n    ${e?.profile?.type?e.profile.type:""}\n    `;case"repository":return`\n    ${e.type?Za(i,e.type):""}\n    `;case"note":return e?.text?.string||"";case"media":return e.mime?.startsWith("audio")?Za(i,"Audio"):e.mime?.startsWith("video")?Za(i,"Video"):e.mime?.startsWith("image")?Za(i,"Image"):"application/pdf"===e.mime?Za(i,"PDF"):e.mime||"";default:return""}}function ns(t,e){return Ca.locale(("pt_PT"===e?"pt":e).toLowerCase().replace("_","-")),Ca.unix(t).fromNow()}function as(t,e){let i;return function(...r){clearTimeout(i),i=setTimeout((()=>{clearTimeout(i),t(...r)}),e)}}function ss(t,e,i){switch(e){case"person":return qa(t);case"event":return Ja(t,i);case"family":return Xa(t);case"place":case"repository":return t.name;case"source":return t.title;case"citation":return Ka(t);case"media":return t.desc;default:return""}}function os(t,e,i){t.dispatchEvent(new CustomEvent(e,{bubbles:!0,composed:!0,detail:i}))}function ls(){return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(t=>(t^crypto.getRandomValues(new Uint8Array(1))[0]&15>>t/4).toString(16)))}function cs(t,e,i){return 0===t&&0===e&&0===i?0:Math.ceil(2440587.5+Date.UTC(t,e-1,i)/864e5)}const ds={IsFemale:"Females",HasUnknownGender:"People with unknown gender",IsMale:"Males",HasAlternateName:"People with an alternate name",HasNickname:"People with a nickname",HaveAltFamilies:"Adopted people",HaveChildren:"People with children",IncompleteNames:"People with incomplete names",NeverMarried:"People with no marriage records",MultipleMarriages:"People with multiple marriage records",NoBirthdate:"People without a known birth date",NoDeathdate:"People without a known death date",PersonWithIncompleteEvent:"People with incomplete events",FamilyWithIncompleteEvent:"Families with incomplete events",PeoplePrivate:"People marked private",PeoplePublic:"People not marked private",MissingParent:"People missing parents",Disconnected:"Disconnected people"},hs={citations:{HasGallery:"Citations with <count> media",HasNote:"Citations having <count> notes"},events:{HasGallery:"Events with <count> media",HasNote:"Events having <count> notes",HasSourceCount:"Events with <count> sources"},families:{HasGallery:"Families with <count> media",HasNote:"Families having <count> notes",HasSourceCount:"Families with <count> sources"},media:{HasSourceCount:"Media with <count> sources"},notes:{},people:{HavePhotos:"People with <count> media",HasNote:"People having <count> notes",HasSourceCount:"People with <count> sources",HasAddress:"People with <count> addresses",HasAssociation:"People with <count> associations"},places:{HasGallery:"Places with <count> media",HasNote:"Places having <count> notes",HasSourceCount:"Place with <count> sources"},repositories:{},sources:{HasGallery:"Sources with <count> media",HasNote:"Sources having <count> notes",HasRepository:"Sources with <count> Repository references"}},ps={"image/":"Image","audio/":"Audio","video/":"Video","text/":"Text","application/pdf":"PDF"},us={0:"description",1:"pie_chart",5:"account_tree"};function ms(t,e){return t.length>0&&e.length>0&&t.every((t=>e.includes(t)))}function fs(t){const e=function(t){return"media"===t.object_type?t.object.handle:t.object?.media_list?.length?t.object.media_list[0].ref:""}(t),i=function(t){return t.object?.media_list?.length?t.object.media_list[0].rect:[]}(t);if(e)return M`<grampsjs-img
      handle="${e}"
      slot="graphic"
      circle
      square
      size="70"
      .rect="${i}"
      .mime=""
      ><mwc-icon class="placeholder"
        >${es[t.object_type]}</mwc-icon
      ></grampsjs-img
    >`;if("tag"===t.object_type){const e=t.object?.color?.length>7?Ua(t.object.color,.6):Ya(t.object.color,.6);return M`<mwc-icon slot="graphic" style="background-color:${e};"
      >${es[t.object_type]}</mwc-icon
    >`}return M`<mwc-icon slot="graphic"
    >${es[t.object_type]}</mwc-icon
  >`}function gs(t){"Enter"!==t.code&&"Space"!==t.code||(t.target.click(),t.preventDefault(),t.stopPropagation())}function _s(t){return void 0===t||6!==t.modifier&&("[0,0,0,false]"===JSON.stringify(t.dateval.slice(0,4))&&!(t.dateval.len>4&&"[0,0,0,false]"!==JSON.stringify(t.dateval.slice(4))))}const vs=/((?:^|\s)https?:\/\/[-A-Z0-9+&@#/%?=~_|!:,.;]*[-A-Z0-9+&@#/%=~_|])/gi;function ys(t,e=!0){if(e)return t.replace(vs,(t=>`<a href="${t}" target="_blank">${t}</a>`));const i=t.split(vs);return M`${i.map((t=>t.match(vs)?M`<a href="${t}" target="_blank">${t}</a>
          <md-icon class="linkicon"
            >${Ha("M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z","#0d47a1")}</md-icon
          > `:t))}`}function bs(t){if(void 0===t||_s(t)||6===t.modifier)return[void 0,void 0];let e=t.dateval[2],i=t.dateval[6]??e;return 2===t.calendar?(e-=3760,i-=3760):3===t.calendar?(e+=1791,i+=1791):4===t.calendar?(e+=621,i+=621):5===t.calendar&&(e=Math.floor(.97022*e+621.565),i=Math.floor(.97022*i+621.565)),[e,i]}var xs="يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),ws={1:"١",2:"٢",3:"٣",4:"٤",5:"٥",6:"٦",7:"٧",8:"٨",9:"٩",0:"٠"},ks={"١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","٠":"0"},Ts={name:"ar",weekdays:"الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysShort:"أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),weekdaysMin:"ح_ن_ث_ر_خ_ج_س".split("_"),months:xs,monthsShort:xs,weekStart:6,relativeTime:{future:"بعد %s",past:"منذ %s",s:"ثانية واحدة",m:"دقيقة واحدة",mm:"%d دقائق",h:"ساعة واحدة",hh:"%d ساعات",d:"يوم واحد",dd:"%d أيام",M:"شهر واحد",MM:"%d أشهر",y:"عام واحد",yy:"%d أعوام"},preparse:function(t){return t.replace(/[١٢٣٤٥٦٧٨٩٠]/g,(function(t){return ks[t]})).replace(/،/g,",")},postformat:function(t){return t.replace(/\d/g,(function(t){return ws[t]})).replace(/,/g,"،")},ordinal:function(t){return t},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"D/‏M/‏YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"}};Ca.locale(Ts,null,!0);var Ss={name:"bg",weekdays:"неделя_понеделник_вторник_сряда_четвъртък_петък_събота".split("_"),weekdaysShort:"нед_пон_вто_сря_чет_пет_съб".split("_"),weekdaysMin:"нд_пн_вт_ср_чт_пт_сб".split("_"),months:"януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември".split("_"),monthsShort:"янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек".split("_"),weekStart:1,ordinal:function(t){var e=t%100;if(e>10&&e<20)return t+"-ти";var i=t%10;return 1===i?t+"-ви":2===i?t+"-ри":7===i||8===i?t+"-ми":t+"-ти"},formats:{LT:"H:mm",LTS:"H:mm:ss",L:"D.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY H:mm",LLLL:"dddd, D MMMM YYYY H:mm"},relativeTime:{future:"след %s",past:"преди %s",s:"няколко секунди",m:"минута",mm:"%d минути",h:"час",hh:"%d часа",d:"ден",dd:"%d дена",M:"месец",MM:"%d месеца",y:"година",yy:"%d години"}};Ca.locale(Ss,null,!0);var Cs={name:"ca",weekdays:"Diumenge_Dilluns_Dimarts_Dimecres_Dijous_Divendres_Dissabte".split("_"),weekdaysShort:"Dg._Dl._Dt._Dc._Dj._Dv._Ds.".split("_"),weekdaysMin:"Dg_Dl_Dt_Dc_Dj_Dv_Ds".split("_"),months:"Gener_Febrer_Març_Abril_Maig_Juny_Juliol_Agost_Setembre_Octubre_Novembre_Desembre".split("_"),monthsShort:"Gen._Febr._Març_Abr._Maig_Juny_Jul._Ag._Set._Oct._Nov._Des.".split("_"),weekStart:1,formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM [de] YYYY",LLL:"D MMMM [de] YYYY [a les] H:mm",LLLL:"dddd D MMMM [de] YYYY [a les] H:mm",ll:"D MMM YYYY",lll:"D MMM YYYY, H:mm",llll:"ddd D MMM YYYY, H:mm"},relativeTime:{future:"d'aquí %s",past:"fa %s",s:"uns segons",m:"un minut",mm:"%d minuts",h:"una hora",hh:"%d hores",d:"un dia",dd:"%d dies",M:"un mes",MM:"%d mesos",y:"un any",yy:"%d anys"},ordinal:function(t){return""+t+(1===t||3===t?"r":2===t?"n":4===t?"t":"è")}};function Es(t){return t>1&&t<5&&1!=~~(t/10)}function $s(t,e,i,r){var n=t+" ";switch(i){case"s":return e||r?"pár sekund":"pár sekundami";case"m":return e?"minuta":r?"minutu":"minutou";case"mm":return e||r?n+(Es(t)?"minuty":"minut"):n+"minutami";case"h":return e?"hodina":r?"hodinu":"hodinou";case"hh":return e||r?n+(Es(t)?"hodiny":"hodin"):n+"hodinami";case"d":return e||r?"den":"dnem";case"dd":return e||r?n+(Es(t)?"dny":"dní"):n+"dny";case"M":return e||r?"měsíc":"měsícem";case"MM":return e||r?n+(Es(t)?"měsíce":"měsíců"):n+"měsíci";case"y":return e||r?"rok":"rokem";case"yy":return e||r?n+(Es(t)?"roky":"let"):n+"lety"}}Ca.locale(Cs,null,!0);var As={name:"cs",weekdays:"neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"),weekdaysShort:"ne_po_út_st_čt_pá_so".split("_"),weekdaysMin:"ne_po_út_st_čt_pá_so".split("_"),months:"leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_"),monthsShort:"led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_"),weekStart:1,yearStart:4,ordinal:function(t){return t+"."},formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd D. MMMM YYYY H:mm",l:"D. M. YYYY"},relativeTime:{future:"za %s",past:"před %s",s:$s,m:$s,mm:$s,h:$s,hh:$s,d:$s,dd:$s,M:$s,MM:$s,y:$s,yy:$s}};Ca.locale(As,null,!0);var Is={name:"da",weekdays:"søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),weekdaysShort:"søn._man._tirs._ons._tors._fre._lør.".split("_"),weekdaysMin:"sø._ma._ti._on._to._fr._lø.".split("_"),months:"januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"),monthsShort:"jan._feb._mar._apr._maj_juni_juli_aug._sept._okt._nov._dec.".split("_"),weekStart:1,ordinal:function(t){return t+"."},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd [d.] D. MMMM YYYY [kl.] HH:mm"},relativeTime:{future:"om %s",past:"%s siden",s:"få sekunder",m:"et minut",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dage",M:"en måned",MM:"%d måneder",y:"et år",yy:"%d år"}};Ca.locale(Is,null,!0);var Ms={s:"ein paar Sekunden",m:["eine Minute","einer Minute"],mm:"%d Minuten",h:["eine Stunde","einer Stunde"],hh:"%d Stunden",d:["ein Tag","einem Tag"],dd:["%d Tage","%d Tagen"],M:["ein Monat","einem Monat"],MM:["%d Monate","%d Monaten"],y:["ein Jahr","einem Jahr"],yy:["%d Jahre","%d Jahren"]};function Ls(t,e,i){var r=Ms[i];return Array.isArray(r)&&(r=r[e?0:1]),r.replace("%d",t)}var Ps={name:"de",weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),weekdaysShort:"So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),months:"Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jan_Feb_März_Apr_Mai_Juni_Juli_Aug_Sept_Okt_Nov_Dez".split("_"),ordinal:function(t){return t+"."},weekStart:1,yearStart:4,formats:{LTS:"HH:mm:ss",LT:"HH:mm",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd, D. MMMM YYYY HH:mm"},relativeTime:{future:"in %s",past:"vor %s",s:Ls,m:Ls,mm:Ls,h:Ls,hh:Ls,d:Ls,dd:Ls,M:Ls,MM:Ls,y:Ls,yy:Ls}};Ca.locale(Ps,null,!0);var Rs={name:"el",weekdays:"Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο".split("_"),weekdaysShort:"Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ".split("_"),weekdaysMin:"Κυ_Δε_Τρ_Τε_Πε_Πα_Σα".split("_"),months:"Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος".split("_"),monthsShort:"Ιαν_Φεβ_Μαρ_Απρ_Μαι_Ιουν_Ιουλ_Αυγ_Σεπτ_Οκτ_Νοε_Δεκ".split("_"),ordinal:function(t){return t},weekStart:1,relativeTime:{future:"σε %s",past:"πριν %s",s:"μερικά δευτερόλεπτα",m:"ένα λεπτό",mm:"%d λεπτά",h:"μία ώρα",hh:"%d ώρες",d:"μία μέρα",dd:"%d μέρες",M:"ένα μήνα",MM:"%d μήνες",y:"ένα χρόνο",yy:"%d χρόνια"},formats:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"}};Ca.locale(Rs,null,!0);var zs={name:"en-gb",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekStart:1,yearStart:4,relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},ordinal:function(t){var e=["th","st","nd","rd"],i=t%100;return"["+t+(e[(i-20)%10]||e[i]||e[0])+"]"}};Ca.locale(zs,null,!0);var Ds={name:"eo",weekdays:"dimanĉo_lundo_mardo_merkredo_ĵaŭdo_vendredo_sabato".split("_"),months:"januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro".split("_"),weekStart:1,weekdaysShort:"dim_lun_mard_merk_ĵaŭ_ven_sab".split("_"),monthsShort:"jan_feb_mar_apr_maj_jun_jul_aŭg_sep_okt_nov_dec".split("_"),weekdaysMin:"di_lu_ma_me_ĵa_ve_sa".split("_"),ordinal:function(t){return t},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"D[-a de] MMMM, YYYY",LLL:"D[-a de] MMMM, YYYY HH:mm",LLLL:"dddd, [la] D[-a de] MMMM, YYYY HH:mm"},relativeTime:{future:"post %s",past:"antaŭ %s",s:"sekundoj",m:"minuto",mm:"%d minutoj",h:"horo",hh:"%d horoj",d:"tago",dd:"%d tagoj",M:"monato",MM:"%d monatoj",y:"jaro",yy:"%d jaroj"}};Ca.locale(Ds,null,!0);var js={name:"es",monthsShort:"ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),weekdays:"domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),weekdaysShort:"dom._lun._mar._mié._jue._vie._sáb.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_sá".split("_"),months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),weekStart:1,formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY H:mm",LLLL:"dddd, D [de] MMMM [de] YYYY H:mm"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un año",yy:"%d años"},ordinal:function(t){return t+"º"}};function Os(t,e,i,r){var n={s:"muutama sekunti",m:"minuutti",mm:"%d minuuttia",h:"tunti",hh:"%d tuntia",d:"päivä",dd:"%d päivää",M:"kuukausi",MM:"%d kuukautta",y:"vuosi",yy:"%d vuotta",numbers:"nolla_yksi_kaksi_kolme_neljä_viisi_kuusi_seitsemän_kahdeksan_yhdeksän".split("_")},a={s:"muutaman sekunnin",m:"minuutin",mm:"%d minuutin",h:"tunnin",hh:"%d tunnin",d:"päivän",dd:"%d päivän",M:"kuukauden",MM:"%d kuukauden",y:"vuoden",yy:"%d vuoden",numbers:"nollan_yhden_kahden_kolmen_neljän_viiden_kuuden_seitsemän_kahdeksan_yhdeksän".split("_")},s=r&&!e?a:n,o=s[i];return t<10?o.replace("%d",s.numbers[t]):o.replace("%d",t)}Ca.locale(js,null,!0);var Bs={name:"fi",weekdays:"sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),weekdaysShort:"su_ma_ti_ke_to_pe_la".split("_"),weekdaysMin:"su_ma_ti_ke_to_pe_la".split("_"),months:"tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),monthsShort:"tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split("_"),ordinal:function(t){return t+"."},weekStart:1,yearStart:4,relativeTime:{future:"%s päästä",past:"%s sitten",s:Os,m:Os,mm:Os,h:Os,hh:Os,d:Os,dd:Os,M:Os,MM:Os,y:Os,yy:Os},formats:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD.MM.YYYY",LL:"D. MMMM[ta] YYYY",LLL:"D. MMMM[ta] YYYY, [klo] HH.mm",LLLL:"dddd, D. MMMM[ta] YYYY, [klo] HH.mm",l:"D.M.YYYY",ll:"D. MMM YYYY",lll:"D. MMM YYYY, [klo] HH.mm",llll:"ddd, D. MMM YYYY, [klo] HH.mm"}};Ca.locale(Bs,null,!0);var Fs={name:"fr",weekdays:"dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),weekdaysShort:"dim._lun._mar._mer._jeu._ven._sam.".split("_"),weekdaysMin:"di_lu_ma_me_je_ve_sa".split("_"),months:"janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),monthsShort:"janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},relativeTime:{future:"dans %s",past:"il y a %s",s:"quelques secondes",m:"une minute",mm:"%d minutes",h:"une heure",hh:"%d heures",d:"un jour",dd:"%d jours",M:"un mois",MM:"%d mois",y:"un an",yy:"%d ans"},ordinal:function(t){return""+t+(1===t?"er":"")}};Ca.locale(Fs,null,!0);var Ns={s:"מספר שניות",ss:"%d שניות",m:"דקה",mm:"%d דקות",h:"שעה",hh:"%d שעות",hh2:"שעתיים",d:"יום",dd:"%d ימים",dd2:"יומיים",M:"חודש",MM:"%d חודשים",MM2:"חודשיים",y:"שנה",yy:"%d שנים",yy2:"שנתיים"};function Hs(t,e,i){return(Ns[i+(2===t?"2":"")]||Ns[i]).replace("%d",t)}var Vs={name:"he",weekdays:"ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת".split("_"),weekdaysShort:"א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳".split("_"),weekdaysMin:"א׳_ב׳_ג׳_ד׳_ה׳_ו_ש׳".split("_"),months:"ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר".split("_"),monthsShort:"ינו_פבר_מרץ_אפר_מאי_יונ_יול_אוג_ספט_אוק_נוב_דצמ".split("_"),relativeTime:{future:"בעוד %s",past:"לפני %s",s:Hs,m:Hs,mm:Hs,h:Hs,hh:Hs,d:Hs,dd:Hs,M:Hs,MM:Hs,y:Hs,yy:Hs},ordinal:function(t){return t},format:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D [ב]MMMM YYYY",LLL:"D [ב]MMMM YYYY HH:mm",LLLL:"dddd, D [ב]MMMM YYYY HH:mm",l:"D/M/YYYY",ll:"D MMM YYYY",lll:"D MMM YYYY HH:mm",llll:"ddd, D MMM YYYY HH:mm"},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D [ב]MMMM YYYY",LLL:"D [ב]MMMM YYYY HH:mm",LLLL:"dddd, D [ב]MMMM YYYY HH:mm",l:"D/M/YYYY",ll:"D MMM YYYY",lll:"D MMM YYYY HH:mm",llll:"ddd, D MMM YYYY HH:mm"}};Ca.locale(Vs,null,!0);var Us="siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split("_"),Ys="siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_"),Zs=/D[oD]?(\[[^[\]]*\]|\s)+MMMM?/,qs=function(t,e){return Zs.test(e)?Us[t.month()]:Ys[t.month()]};qs.s=Ys,qs.f=Us;var Ws={name:"hr",weekdays:"nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),weekdaysShort:"ned._pon._uto._sri._čet._pet._sub.".split("_"),weekdaysMin:"ne_po_ut_sr_če_pe_su".split("_"),months:qs,monthsShort:"sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"),weekStart:1,formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},relativeTime:{future:"za %s",past:"prije %s",s:"sekunda",m:"minuta",mm:"%d minuta",h:"sat",hh:"%d sati",d:"dan",dd:"%d dana",M:"mjesec",MM:"%d mjeseci",y:"godina",yy:"%d godine"},ordinal:function(t){return t+"."}};Ca.locale(Ws,null,!0);var Gs={name:"hu",weekdays:"vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"),weekdaysShort:"vas_hét_kedd_sze_csüt_pén_szo".split("_"),weekdaysMin:"v_h_k_sze_cs_p_szo".split("_"),months:"január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"),monthsShort:"jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec".split("_"),ordinal:function(t){return t+"."},weekStart:1,relativeTime:{future:"%s múlva",past:"%s",s:function(t,e,i,r){return"néhány másodperc"+(r||e?"":"e")},m:function(t,e,i,r){return"egy perc"+(r||e?"":"e")},mm:function(t,e,i,r){return t+" perc"+(r||e?"":"e")},h:function(t,e,i,r){return"egy "+(r||e?"óra":"órája")},hh:function(t,e,i,r){return t+" "+(r||e?"óra":"órája")},d:function(t,e,i,r){return"egy "+(r||e?"nap":"napja")},dd:function(t,e,i,r){return t+" "+(r||e?"nap":"napja")},M:function(t,e,i,r){return"egy "+(r||e?"hónap":"hónapja")},MM:function(t,e,i,r){return t+" "+(r||e?"hónap":"hónapja")},y:function(t,e,i,r){return"egy "+(r||e?"év":"éve")},yy:function(t,e,i,r){return t+" "+(r||e?"év":"éve")}},formats:{LT:"H:mm",LTS:"H:mm:ss",L:"YYYY.MM.DD.",LL:"YYYY. MMMM D.",LLL:"YYYY. MMMM D. H:mm",LLLL:"YYYY. MMMM D., dddd H:mm"}};Ca.locale(Gs,null,!0);var Xs={name:"is",weekdays:"sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur".split("_"),months:"janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember".split("_"),weekStart:1,weekdaysShort:"sun_mán_þri_mið_fim_fös_lau".split("_"),monthsShort:"jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des".split("_"),weekdaysMin:"Su_Má_Þr_Mi_Fi_Fö_La".split("_"),ordinal:function(t){return t},formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] H:mm",LLLL:"dddd, D. MMMM YYYY [kl.] H:mm"}};Ca.locale(Xs,null,!0);var Ks={name:"it",weekdays:"domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato".split("_"),weekdaysShort:"dom_lun_mar_mer_gio_ven_sab".split("_"),weekdaysMin:"do_lu_ma_me_gi_ve_sa".split("_"),months:"gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),weekStart:1,monthsShort:"gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},relativeTime:{future:"tra %s",past:"%s fa",s:"qualche secondo",m:"un minuto",mm:"%d minuti",h:"un' ora",hh:"%d ore",d:"un giorno",dd:"%d giorni",M:"un mese",MM:"%d mesi",y:"un anno",yy:"%d anni"},ordinal:function(t){return t+"º"}};Ca.locale(Ks,null,!0);var Js={name:"ja",weekdays:"日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),weekdaysShort:"日_月_火_水_木_金_土".split("_"),weekdaysMin:"日_月_火_水_木_金_土".split("_"),months:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),ordinal:function(t){return t+"日"},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日 HH:mm",LLLL:"YYYY年M月D日 dddd HH:mm",l:"YYYY/MM/DD",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日(ddd) HH:mm"},meridiem:function(t){return t<12?"午前":"午後"},relativeTime:{future:"%s後",past:"%s前",s:"数秒",m:"1分",mm:"%d分",h:"1時間",hh:"%d時間",d:"1日",dd:"%d日",M:"1ヶ月",MM:"%dヶ月",y:"1年",yy:"%d年"}};Ca.locale(Js,null,!0);var Qs="sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"),to="sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_"),eo=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/,io=function(t,e){return eo.test(e)?Qs[t.month()]:to[t.month()]};io.s=to,io.f=Qs;var ro={name:"lt",weekdays:"sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"),weekdaysShort:"sek_pir_ant_tre_ket_pen_šeš".split("_"),weekdaysMin:"s_p_a_t_k_pn_š".split("_"),months:io,monthsShort:"sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),ordinal:function(t){return t+"."},weekStart:1,relativeTime:{future:"už %s",past:"prieš %s",s:"kelias sekundes",m:"minutę",mm:"%d minutes",h:"valandą",hh:"%d valandas",d:"dieną",dd:"%d dienas",M:"menesį",MM:"%d mėnesius",y:"metus",yy:"%d metus"},format:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"YYYY [m.] MMMM D [d.]",LLL:"YYYY [m.] MMMM D [d.], HH:mm [val.]",LLLL:"YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",l:"YYYY-MM-DD",ll:"YYYY [m.] MMMM D [d.]",lll:"YYYY [m.] MMMM D [d.], HH:mm [val.]",llll:"YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"YYYY [m.] MMMM D [d.]",LLL:"YYYY [m.] MMMM D [d.], HH:mm [val.]",LLLL:"YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",l:"YYYY-MM-DD",ll:"YYYY [m.] MMMM D [d.]",lll:"YYYY [m.] MMMM D [d.], HH:mm [val.]",llll:"YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"}};Ca.locale(ro,null,!0);var no={name:"nb",weekdays:"søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),weekdaysShort:"sø._ma._ti._on._to._fr._lø.".split("_"),weekdaysMin:"sø_ma_ti_on_to_fr_lø".split("_"),months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),ordinal:function(t){return t+"."},weekStart:1,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] HH:mm",LLLL:"dddd D. MMMM YYYY [kl.] HH:mm"},relativeTime:{future:"om %s",past:"%s siden",s:"noen sekunder",m:"ett minutt",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dager",M:"en måned",MM:"%d måneder",y:"ett år",yy:"%d år"}};Ca.locale(no,null,!0);var ao={name:"nl",weekdays:"zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),weekdaysShort:"zo._ma._di._wo._do._vr._za.".split("_"),weekdaysMin:"zo_ma_di_wo_do_vr_za".split("_"),months:"januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),monthsShort:"jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),ordinal:function(t){return t+"."},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD-MM-YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},relativeTime:{future:"over %s",past:"%s geleden",s:"een paar seconden",m:"een minuut",mm:"%d minuten",h:"een uur",hh:"%d uur",d:"een dag",dd:"%d dagen",M:"een maand",MM:"%d maanden",y:"een jaar",yy:"%d jaar"}};Ca.locale(ao,null,!0);var so={name:"nn",weekdays:"sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"),weekdaysShort:"sun_mån_tys_ons_tor_fre_lau".split("_"),weekdaysMin:"su_må_ty_on_to_fr_la".split("_"),months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),ordinal:function(t){return t+"."},weekStart:1,relativeTime:{future:"om %s",past:"for %s sidan",s:"nokre sekund",m:"eitt minutt",mm:"%d minutt",h:"ein time",hh:"%d timar",d:"ein dag",dd:"%d dagar",M:"ein månad",MM:"%d månadar",y:"eitt år",yy:"%d år"},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] H:mm",LLLL:"dddd D. MMMM YYYY [kl.] HH:mm"}};function oo(t){return t%10<5&&t%10>1&&~~(t/10)%10!=1}function lo(t,e,i){var r=t+" ";switch(i){case"m":return e?"minuta":"minutę";case"mm":return r+(oo(t)?"minuty":"minut");case"h":return e?"godzina":"godzinę";case"hh":return r+(oo(t)?"godziny":"godzin");case"MM":return r+(oo(t)?"miesiące":"miesięcy");case"yy":return r+(oo(t)?"lata":"lat")}}Ca.locale(so,null,!0);var co="stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_"),ho="styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"),po=/D MMMM/,uo=function(t,e){return po.test(e)?co[t.month()]:ho[t.month()]};uo.s=ho,uo.f=co;var mo={name:"pl",weekdays:"niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),weekdaysShort:"ndz_pon_wt_śr_czw_pt_sob".split("_"),weekdaysMin:"Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),months:uo,monthsShort:"sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),ordinal:function(t){return t+"."},weekStart:1,yearStart:4,relativeTime:{future:"za %s",past:"%s temu",s:"kilka sekund",m:lo,mm:lo,h:lo,hh:lo,d:"1 dzień",dd:"%d dni",M:"miesiąc",MM:lo,y:"rok",yy:lo},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"}};Ca.locale(mo,null,!0);var fo={name:"pt-br",weekdays:"Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"),weekdaysShort:"Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),weekdaysMin:"Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"),months:"Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"),monthsShort:"Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),ordinal:function(t){return t+"º"},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY [às] HH:mm",LLLL:"dddd, D [de] MMMM [de] YYYY [às] HH:mm"},relativeTime:{future:"em %s",past:"há %s",s:"poucos segundos",m:"um minuto",mm:"%d minutos",h:"uma hora",hh:"%d horas",d:"um dia",dd:"%d dias",M:"um mês",MM:"%d meses",y:"um ano",yy:"%d anos"}};Ca.locale(fo,null,!0);var go={name:"pt",weekdays:"Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"),weekdaysShort:"Dom_Seg_Ter_Qua_Qui_Sex_Sab".split("_"),weekdaysMin:"Do_2ª_3ª_4ª_5ª_6ª_Sa".split("_"),months:"Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"),monthsShort:"Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),ordinal:function(t){return t+"º"},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY [às] HH:mm",LLLL:"dddd, D [de] MMMM [de] YYYY [às] HH:mm"},relativeTime:{future:"em %s",past:"há %s",s:"alguns segundos",m:"um minuto",mm:"%d minutos",h:"uma hora",hh:"%d horas",d:"um dia",dd:"%d dias",M:"um mês",MM:"%d meses",y:"um ano",yy:"%d anos"}};Ca.locale(go,null,!0);var _o="января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"),vo="январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),yo="янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"),bo="янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_"),xo=/D[oD]?(\[[^[\]]*\]|\s)+MMMM?/;function wo(t,e,i){var r,n;return"m"===i?e?"минута":"минуту":t+" "+(r=+t,n={mm:e?"минута_минуты_минут":"минуту_минуты_минут",hh:"час_часа_часов",dd:"день_дня_дней",MM:"месяц_месяца_месяцев",yy:"год_года_лет"}[i].split("_"),r%10==1&&r%100!=11?n[0]:r%10>=2&&r%10<=4&&(r%100<10||r%100>=20)?n[1]:n[2])}var ko=function(t,e){return xo.test(e)?_o[t.month()]:vo[t.month()]};ko.s=vo,ko.f=_o;var To=function(t,e){return xo.test(e)?yo[t.month()]:bo[t.month()]};To.s=bo,To.f=yo;var So={name:"ru",weekdays:"воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),weekdaysShort:"вск_пнд_втр_срд_чтв_птн_сбт".split("_"),weekdaysMin:"вс_пн_вт_ср_чт_пт_сб".split("_"),months:ko,monthsShort:To,weekStart:1,yearStart:4,formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY г.",LLL:"D MMMM YYYY г., H:mm",LLLL:"dddd, D MMMM YYYY г., H:mm"},relativeTime:{future:"через %s",past:"%s назад",s:"несколько секунд",m:wo,mm:wo,h:"час",hh:wo,d:"день",dd:wo,M:"месяц",MM:wo,y:"год",yy:wo},ordinal:function(t){return t},meridiem:function(t){return t<4?"ночи":t<12?"утра":t<17?"дня":"вечера"}};function Co(t){return t>1&&t<5&&1!=~~(t/10)}function Eo(t,e,i,r){var n=t+" ";switch(i){case"s":return e||r?"pár sekúnd":"pár sekundami";case"m":return e?"minúta":r?"minútu":"minútou";case"mm":return e||r?n+(Co(t)?"minúty":"minút"):n+"minútami";case"h":return e?"hodina":r?"hodinu":"hodinou";case"hh":return e||r?n+(Co(t)?"hodiny":"hodín"):n+"hodinami";case"d":return e||r?"deň":"dňom";case"dd":return e||r?n+(Co(t)?"dni":"dní"):n+"dňami";case"M":return e||r?"mesiac":"mesiacom";case"MM":return e||r?n+(Co(t)?"mesiace":"mesiacov"):n+"mesiacmi";case"y":return e||r?"rok":"rokom";case"yy":return e||r?n+(Co(t)?"roky":"rokov"):n+"rokmi"}}Ca.locale(So,null,!0);var $o={name:"sk",weekdays:"nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"),weekdaysShort:"ne_po_ut_st_št_pi_so".split("_"),weekdaysMin:"ne_po_ut_st_št_pi_so".split("_"),months:"január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_"),monthsShort:"jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_"),weekStart:1,yearStart:4,ordinal:function(t){return t+"."},formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd D. MMMM YYYY H:mm",l:"D. M. YYYY"},relativeTime:{future:"za %s",past:"pred %s",s:Eo,m:Eo,mm:Eo,h:Eo,hh:Eo,d:Eo,dd:Eo,M:Eo,MM:Eo,y:Eo,yy:Eo}};Ca.locale($o,null,!0);var Ao={name:"sl",weekdays:"nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_"),months:"januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),weekStart:1,weekdaysShort:"ned._pon._tor._sre._čet._pet._sob.".split("_"),monthsShort:"jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),weekdaysMin:"ne_po_to_sr_če_pe_so".split("_"),ordinal:function(t){return t+"."},formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},relativeTime:{future:"čez %s",past:"pred %s",s:"nekaj sekund",m:"minuta",mm:"%d minut",h:"ura",hh:"%d ur",d:"dan",dd:"%d dni",M:"mesec",MM:"%d mesecev",y:"leto",yy:"%d let"}};Ca.locale(Ao,null,!0);var Io={name:"sq",weekdays:"E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë".split("_"),months:"Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor".split("_"),weekStart:1,weekdaysShort:"Die_Hën_Mar_Mër_Enj_Pre_Sht".split("_"),monthsShort:"Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj".split("_"),weekdaysMin:"D_H_Ma_Më_E_P_Sh".split("_"),ordinal:function(t){return t},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},relativeTime:{future:"në %s",past:"%s më parë",s:"disa sekonda",m:"një minutë",mm:"%d minuta",h:"një orë",hh:"%d orë",d:"një ditë",dd:"%d ditë",M:"një muaj",MM:"%d muaj",y:"një vit",yy:"%d vite"}};Ca.locale(Io,null,!0);var Mo={words:{m:["jedan minut","jednog minuta"],mm:["%d minut","%d minuta","%d minuta"],h:["jedan sat","jednog sata"],hh:["%d sat","%d sata","%d sati"],d:["jedan dan","jednog dana"],dd:["%d dan","%d dana","%d dana"],M:["jedan mesec","jednog meseca"],MM:["%d mesec","%d meseca","%d meseci"],y:["jednu godinu","jedne godine"],yy:["%d godinu","%d godine","%d godina"]},correctGrammarCase:function(t,e){return t%10>=1&&t%10<=4&&(t%100<10||t%100>=20)?t%10==1?e[0]:e[1]:e[2]},relativeTimeFormatter:function(t,e,i,r){var n=Mo.words[i];if(1===i.length)return"y"===i&&e?"jedna godina":r||e?n[0]:n[1];var a=Mo.correctGrammarCase(t,n);return"yy"===i&&e&&"%d godinu"===a?t+" godina":a.replace("%d",t)}},Lo={name:"sr",weekdays:"Nedelja_Ponedeljak_Utorak_Sreda_Četvrtak_Petak_Subota".split("_"),weekdaysShort:"Ned._Pon._Uto._Sre._Čet._Pet._Sub.".split("_"),weekdaysMin:"ne_po_ut_sr_če_pe_su".split("_"),months:"Januar_Februar_Mart_April_Maj_Jun_Jul_Avgust_Septembar_Oktobar_Novembar_Decembar".split("_"),monthsShort:"Jan._Feb._Mar._Apr._Maj_Jun_Jul_Avg._Sep._Okt._Nov._Dec.".split("_"),weekStart:1,relativeTime:{future:"za %s",past:"pre %s",s:"nekoliko sekundi",m:Mo.relativeTimeFormatter,mm:Mo.relativeTimeFormatter,h:Mo.relativeTimeFormatter,hh:Mo.relativeTimeFormatter,d:Mo.relativeTimeFormatter,dd:Mo.relativeTimeFormatter,M:Mo.relativeTimeFormatter,MM:Mo.relativeTimeFormatter,y:Mo.relativeTimeFormatter,yy:Mo.relativeTimeFormatter},ordinal:function(t){return t+"."},formats:{LT:"H:mm",LTS:"H:mm:ss",L:"D. M. YYYY.",LL:"D. MMMM YYYY.",LLL:"D. MMMM YYYY. H:mm",LLLL:"dddd, D. MMMM YYYY. H:mm"}};Ca.locale(Lo,null,!0);var Po={name:"sv",weekdays:"söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split("_"),weekdaysShort:"sön_mån_tis_ons_tor_fre_lör".split("_"),weekdaysMin:"sö_må_ti_on_to_fr_lö".split("_"),months:"januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),monthsShort:"jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),weekStart:1,yearStart:4,ordinal:function(t){var e=t%10;return"["+t+(1===e||2===e?"a":"e")+"]"},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [kl.] HH:mm",LLLL:"dddd D MMMM YYYY [kl.] HH:mm",lll:"D MMM YYYY HH:mm",llll:"ddd D MMM YYYY HH:mm"},relativeTime:{future:"om %s",past:"för %s sedan",s:"några sekunder",m:"en minut",mm:"%d minuter",h:"en timme",hh:"%d timmar",d:"en dag",dd:"%d dagar",M:"en månad",MM:"%d månader",y:"ett år",yy:"%d år"}};Ca.locale(Po,null,!0);var Ro={name:"ta",weekdays:"ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை".split("_"),months:"ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),weekdaysShort:"ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி".split("_"),monthsShort:"ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),weekdaysMin:"ஞா_தி_செ_பு_வி_வெ_ச".split("_"),ordinal:function(t){return t},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, HH:mm",LLLL:"dddd, D MMMM YYYY, HH:mm"},relativeTime:{future:"%s இல்",past:"%s முன்",s:"ஒரு சில விநாடிகள்",m:"ஒரு நிமிடம்",mm:"%d நிமிடங்கள்",h:"ஒரு மணி நேரம்",hh:"%d மணி நேரம்",d:"ஒரு நாள்",dd:"%d நாட்கள்",M:"ஒரு மாதம்",MM:"%d மாதங்கள்",y:"ஒரு வருடம்",yy:"%d ஆண்டுகள்"}};Ca.locale(Ro,null,!0);var zo={name:"tr",weekdays:"Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split("_"),weekdaysShort:"Paz_Pts_Sal_Çar_Per_Cum_Cts".split("_"),weekdaysMin:"Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_"),months:"Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split("_"),monthsShort:"Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split("_"),weekStart:1,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},relativeTime:{future:"%s sonra",past:"%s önce",s:"birkaç saniye",m:"bir dakika",mm:"%d dakika",h:"bir saat",hh:"%d saat",d:"bir gün",dd:"%d gün",M:"bir ay",MM:"%d ay",y:"bir yıl",yy:"%d yıl"},ordinal:function(t){return t+"."}};Ca.locale(zo,null,!0);var Do="січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_"),jo="січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_"),Oo=/D[oD]?(\[[^[\]]*\]|\s)+MMMM?/;function Bo(t,e,i){var r,n;return"m"===i?e?"хвилина":"хвилину":"h"===i?e?"година":"годину":t+" "+(r=+t,n={ss:e?"секунда_секунди_секунд":"секунду_секунди_секунд",mm:e?"хвилина_хвилини_хвилин":"хвилину_хвилини_хвилин",hh:e?"година_години_годин":"годину_години_годин",dd:"день_дні_днів",MM:"місяць_місяці_місяців",yy:"рік_роки_років"}[i].split("_"),r%10==1&&r%100!=11?n[0]:r%10>=2&&r%10<=4&&(r%100<10||r%100>=20)?n[1]:n[2])}var Fo=function(t,e){return Oo.test(e)?Do[t.month()]:jo[t.month()]};Fo.s=jo,Fo.f=Do;var No={name:"uk",weekdays:"неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"),weekdaysShort:"ндл_пнд_втр_срд_чтв_птн_сбт".split("_"),weekdaysMin:"нд_пн_вт_ср_чт_пт_сб".split("_"),months:Fo,monthsShort:"січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"),weekStart:1,relativeTime:{future:"за %s",past:"%s тому",s:"декілька секунд",m:Bo,mm:Bo,h:Bo,hh:Bo,d:"день",dd:Bo,M:"місяць",MM:Bo,y:"рік",yy:Bo},ordinal:function(t){return t},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY р.",LLL:"D MMMM YYYY р., HH:mm",LLLL:"dddd, D MMMM YYYY р., HH:mm"}};Ca.locale(No,null,!0);var Ho={name:"vi",weekdays:"chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy".split("_"),months:"tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split("_"),weekStart:1,weekdaysShort:"CN_T2_T3_T4_T5_T6_T7".split("_"),monthsShort:"Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"),weekdaysMin:"CN_T2_T3_T4_T5_T6_T7".split("_"),ordinal:function(t){return t},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM [năm] YYYY",LLL:"D MMMM [năm] YYYY HH:mm",LLLL:"dddd, D MMMM [năm] YYYY HH:mm",l:"DD/M/YYYY",ll:"D MMM YYYY",lll:"D MMM YYYY HH:mm",llll:"ddd, D MMM YYYY HH:mm"},relativeTime:{future:"%s tới",past:"%s trước",s:"vài giây",m:"một phút",mm:"%d phút",h:"một giờ",hh:"%d giờ",d:"một ngày",dd:"%d ngày",M:"một tháng",MM:"%d tháng",y:"một năm",yy:"%d năm"}};Ca.locale(Ho,null,!0);var Vo={name:"zh-cn",weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"周日_周一_周二_周三_周四_周五_周六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),ordinal:function(t,e){return"W"===e?t+"周":t+"日"},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日Ah点mm分",LLLL:"YYYY年M月D日ddddAh点mm分",l:"YYYY/M/D",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日dddd HH:mm"},relativeTime:{future:"%s内",past:"%s前",s:"几秒",m:"1 分钟",mm:"%d 分钟",h:"1 小时",hh:"%d 小时",d:"1 天",dd:"%d 天",M:"1 个月",MM:"%d 个月",y:"1 年",yy:"%d 年"},meridiem:function(t,e){var i=100*t+e;return i<600?"凌晨":i<900?"早上":i<1100?"上午":i<1300?"中午":i<1800?"下午":"晚上"}};Ca.locale(Vo,null,!0);var Uo={name:"zh-hk",months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"週日_週一_週二_週三_週四_週五_週六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),ordinal:function(t){return t+"日"},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日 HH:mm",LLLL:"YYYY年M月D日dddd HH:mm"},relativeTime:{future:"%s內",past:"%s前",s:"幾秒",m:"一分鐘",mm:"%d 分鐘",h:"一小時",hh:"%d 小時",d:"一天",dd:"%d 天",M:"一個月",MM:"%d 個月",y:"一年",yy:"%d 年"}};Ca.locale(Uo,null,!0);var Yo={name:"zh-tw",weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"週日_週一_週二_週三_週四_週五_週六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),ordinal:function(t){return t+"日"},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日 HH:mm",LLLL:"YYYY年M月D日dddd HH:mm",l:"YYYY/M/D",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日dddd HH:mm"},relativeTime:{future:"%s內",past:"%s前",s:"幾秒",m:"1 分鐘",mm:"%d 分鐘",h:"1 小時",hh:"%d 小時",d:"1 天",dd:"%d 天",M:"1 個月",MM:"%d 個月",y:"1 年",yy:"%d 年"}};Ca.locale(Yo,null,!0);var Zo,qo={CLOSING:"mdc-dialog--closing",OPEN:"mdc-dialog--open",OPENING:"mdc-dialog--opening",SCROLLABLE:"mdc-dialog--scrollable",SCROLL_LOCK:"mdc-dialog-scroll-lock",STACKED:"mdc-dialog--stacked",FULLSCREEN:"mdc-dialog--fullscreen",SCROLL_DIVIDER_HEADER:"mdc-dialog-scroll-divider-header",SCROLL_DIVIDER_FOOTER:"mdc-dialog-scroll-divider-footer",SURFACE_SCRIM_SHOWN:"mdc-dialog__surface-scrim--shown",SURFACE_SCRIM_SHOWING:"mdc-dialog__surface-scrim--showing",SURFACE_SCRIM_HIDING:"mdc-dialog__surface-scrim--hiding",SCRIM_HIDDEN:"mdc-dialog__scrim--hidden"},Wo={ACTION_ATTRIBUTE:"data-mdc-dialog-action",BUTTON_DEFAULT_ATTRIBUTE:"data-mdc-dialog-button-default",BUTTON_SELECTOR:".mdc-dialog__button",CLOSED_EVENT:"MDCDialog:closed",CLOSE_ACTION:"close",CLOSING_EVENT:"MDCDialog:closing",CONTAINER_SELECTOR:".mdc-dialog__container",CONTENT_SELECTOR:".mdc-dialog__content",DESTROY_ACTION:"destroy",INITIAL_FOCUS_ATTRIBUTE:"data-mdc-dialog-initial-focus",OPENED_EVENT:"MDCDialog:opened",OPENING_EVENT:"MDCDialog:opening",SCRIM_SELECTOR:".mdc-dialog__scrim",SUPPRESS_DEFAULT_PRESS_SELECTOR:["textarea",".mdc-menu .mdc-list-item",".mdc-menu .mdc-deprecated-list-item"].join(", "),SURFACE_SELECTOR:".mdc-dialog__surface"},Go={DIALOG_ANIMATION_CLOSE_TIME_MS:75,DIALOG_ANIMATION_OPEN_TIME_MS:150},Xo=function(){function t(){this.rafIDs=new Map}return t.prototype.request=function(t,e){var i=this;this.cancel(t);var r=requestAnimationFrame((function(r){i.rafIDs.delete(t),e(r)}));this.rafIDs.set(t,r)},t.prototype.cancel=function(t){var e=this.rafIDs.get(t);e&&(cancelAnimationFrame(e),this.rafIDs.delete(t))},t.prototype.cancelAll=function(){var t=this;this.rafIDs.forEach((function(e,i){t.cancel(i)}))},t.prototype.getQueue=function(){var t=[];return this.rafIDs.forEach((function(e,i){t.push(i)})),t},t}();!function(t){t.POLL_SCROLL_POS="poll_scroll_position",t.POLL_LAYOUT_CHANGE="poll_layout_change"}(Zo||(Zo={}));var Ko=function(t){function e(i){var r=t.call(this,et(et({},e.defaultAdapter),i))||this;return r.dialogOpen=!1,r.isFullscreen=!1,r.animationFrame=0,r.animationTimer=0,r.escapeKeyAction=Wo.CLOSE_ACTION,r.scrimClickAction=Wo.CLOSE_ACTION,r.autoStackButtons=!0,r.areButtonsStacked=!1,r.suppressDefaultPressSelector=Wo.SUPPRESS_DEFAULT_PRESS_SELECTOR,r.animFrame=new Xo,r.contentScrollHandler=function(){r.handleScrollEvent()},r.windowResizeHandler=function(){r.layout()},r.windowOrientationChangeHandler=function(){r.layout()},r}return tt(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return qo},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return Wo},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return Go},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addBodyClass:function(){},addClass:function(){},areButtonsStacked:function(){return!1},clickDefaultButton:function(){},eventTargetMatches:function(){return!1},getActionFromEvent:function(){return""},getInitialFocusEl:function(){return null},hasClass:function(){return!1},isContentScrollable:function(){return!1},notifyClosed:function(){},notifyClosing:function(){},notifyOpened:function(){},notifyOpening:function(){},releaseFocus:function(){},removeBodyClass:function(){},removeClass:function(){},reverseButtons:function(){},trapFocus:function(){},registerContentEventHandler:function(){},deregisterContentEventHandler:function(){},isScrollableContentAtTop:function(){return!1},isScrollableContentAtBottom:function(){return!1},registerWindowEventHandler:function(){},deregisterWindowEventHandler:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){this.adapter.hasClass(qo.STACKED)&&this.setAutoStackButtons(!1),this.isFullscreen=this.adapter.hasClass(qo.FULLSCREEN)},e.prototype.destroy=function(){this.animationTimer&&(clearTimeout(this.animationTimer),this.handleAnimationTimerEnd()),this.isFullscreen&&this.adapter.deregisterContentEventHandler("scroll",this.contentScrollHandler),this.animFrame.cancelAll(),this.adapter.deregisterWindowEventHandler("resize",this.windowResizeHandler),this.adapter.deregisterWindowEventHandler("orientationchange",this.windowOrientationChangeHandler)},e.prototype.open=function(t){var e=this;this.dialogOpen=!0,this.adapter.notifyOpening(),this.adapter.addClass(qo.OPENING),this.isFullscreen&&this.adapter.registerContentEventHandler("scroll",this.contentScrollHandler),t&&t.isAboveFullscreenDialog&&this.adapter.addClass(qo.SCRIM_HIDDEN),this.adapter.registerWindowEventHandler("resize",this.windowResizeHandler),this.adapter.registerWindowEventHandler("orientationchange",this.windowOrientationChangeHandler),this.runNextAnimationFrame((function(){e.adapter.addClass(qo.OPEN),e.adapter.addBodyClass(qo.SCROLL_LOCK),e.layout(),e.animationTimer=setTimeout((function(){e.handleAnimationTimerEnd(),e.adapter.trapFocus(e.adapter.getInitialFocusEl()),e.adapter.notifyOpened()}),Go.DIALOG_ANIMATION_OPEN_TIME_MS)}))},e.prototype.close=function(t){var e=this;void 0===t&&(t=""),this.dialogOpen&&(this.dialogOpen=!1,this.adapter.notifyClosing(t),this.adapter.addClass(qo.CLOSING),this.adapter.removeClass(qo.OPEN),this.adapter.removeBodyClass(qo.SCROLL_LOCK),this.isFullscreen&&this.adapter.deregisterContentEventHandler("scroll",this.contentScrollHandler),this.adapter.deregisterWindowEventHandler("resize",this.windowResizeHandler),this.adapter.deregisterWindowEventHandler("orientationchange",this.windowOrientationChangeHandler),cancelAnimationFrame(this.animationFrame),this.animationFrame=0,clearTimeout(this.animationTimer),this.animationTimer=setTimeout((function(){e.adapter.releaseFocus(),e.handleAnimationTimerEnd(),e.adapter.notifyClosed(t)}),Go.DIALOG_ANIMATION_CLOSE_TIME_MS))},e.prototype.showSurfaceScrim=function(){var t=this;this.adapter.addClass(qo.SURFACE_SCRIM_SHOWING),this.runNextAnimationFrame((function(){t.adapter.addClass(qo.SURFACE_SCRIM_SHOWN)}))},e.prototype.hideSurfaceScrim=function(){this.adapter.removeClass(qo.SURFACE_SCRIM_SHOWN),this.adapter.addClass(qo.SURFACE_SCRIM_HIDING)},e.prototype.handleSurfaceScrimTransitionEnd=function(){this.adapter.removeClass(qo.SURFACE_SCRIM_HIDING),this.adapter.removeClass(qo.SURFACE_SCRIM_SHOWING)},e.prototype.isOpen=function(){return this.dialogOpen},e.prototype.getEscapeKeyAction=function(){return this.escapeKeyAction},e.prototype.setEscapeKeyAction=function(t){this.escapeKeyAction=t},e.prototype.getScrimClickAction=function(){return this.scrimClickAction},e.prototype.setScrimClickAction=function(t){this.scrimClickAction=t},e.prototype.getAutoStackButtons=function(){return this.autoStackButtons},e.prototype.setAutoStackButtons=function(t){this.autoStackButtons=t},e.prototype.getSuppressDefaultPressSelector=function(){return this.suppressDefaultPressSelector},e.prototype.setSuppressDefaultPressSelector=function(t){this.suppressDefaultPressSelector=t},e.prototype.layout=function(){var t=this;this.animFrame.request(Zo.POLL_LAYOUT_CHANGE,(function(){t.layoutInternal()}))},e.prototype.handleClick=function(t){if(this.adapter.eventTargetMatches(t.target,Wo.SCRIM_SELECTOR)&&""!==this.scrimClickAction)this.close(this.scrimClickAction);else{var e=this.adapter.getActionFromEvent(t);e&&this.close(e)}},e.prototype.handleKeydown=function(t){var e="Enter"===t.key||13===t.keyCode;if(e&&!this.adapter.getActionFromEvent(t)){var i=t.composedPath?t.composedPath()[0]:t.target,r=!this.suppressDefaultPressSelector||!this.adapter.eventTargetMatches(i,this.suppressDefaultPressSelector);e&&r&&this.adapter.clickDefaultButton()}},e.prototype.handleDocumentKeydown=function(t){("Escape"===t.key||27===t.keyCode)&&""!==this.escapeKeyAction&&this.close(this.escapeKeyAction)},e.prototype.handleScrollEvent=function(){var t=this;this.animFrame.request(Zo.POLL_SCROLL_POS,(function(){t.toggleScrollDividerHeader(),t.toggleScrollDividerFooter()}))},e.prototype.layoutInternal=function(){this.autoStackButtons&&this.detectStackedButtons(),this.toggleScrollableClasses()},e.prototype.handleAnimationTimerEnd=function(){this.animationTimer=0,this.adapter.removeClass(qo.OPENING),this.adapter.removeClass(qo.CLOSING)},e.prototype.runNextAnimationFrame=function(t){var e=this;cancelAnimationFrame(this.animationFrame),this.animationFrame=requestAnimationFrame((function(){e.animationFrame=0,clearTimeout(e.animationTimer),e.animationTimer=setTimeout(t,0)}))},e.prototype.detectStackedButtons=function(){this.adapter.removeClass(qo.STACKED);var t=this.adapter.areButtonsStacked();t&&this.adapter.addClass(qo.STACKED),t!==this.areButtonsStacked&&(this.adapter.reverseButtons(),this.areButtonsStacked=t)},e.prototype.toggleScrollableClasses=function(){this.adapter.removeClass(qo.SCROLLABLE),this.adapter.isContentScrollable()&&(this.adapter.addClass(qo.SCROLLABLE),this.isFullscreen&&(this.toggleScrollDividerHeader(),this.toggleScrollDividerFooter()))},e.prototype.toggleScrollDividerHeader=function(){this.adapter.isScrollableContentAtTop()?this.adapter.hasClass(qo.SCROLL_DIVIDER_HEADER)&&this.adapter.removeClass(qo.SCROLL_DIVIDER_HEADER):this.adapter.addClass(qo.SCROLL_DIVIDER_HEADER)},e.prototype.toggleScrollDividerFooter=function(){this.adapter.isScrollableContentAtBottom()?this.adapter.hasClass(qo.SCROLL_DIVIDER_FOOTER)&&this.adapter.removeClass(qo.SCROLL_DIVIDER_FOOTER):this.adapter.addClass(qo.SCROLL_DIVIDER_FOOTER)},e}(vt),Jo=Ko;function Qo(t){return void 0===t&&(t=window),!!function(t){void 0===t&&(t=window);var e=!1;try{var i={get passive(){return e=!0,!1}},r=function(){};t.document.addEventListener("test",r,i),t.document.removeEventListener("test",r,i)}catch(t){e=!1}return e}(t)&&{passive:!0}}const tl=document.$blockingElements;class el extends It{constructor(){super(...arguments),this.hideActions=!1,this.stacked=!1,this.heading="",this.scrimClickAction="close",this.escapeKeyAction="close",this.open=!1,this.defaultAction="close",this.actionAttribute="dialogAction",this.initialFocusAttribute="dialogInitialFocus",this.initialSupressDefaultPressSelector="",this.mdcFoundationClass=Jo,this.boundHandleClick=null,this.boundHandleKeydown=null,this.boundHandleDocumentKeydown=null}set suppressDefaultPressSelector(t){this.mdcFoundation?this.mdcFoundation.setSuppressDefaultPressSelector(t):this.initialSupressDefaultPressSelector=t}get suppressDefaultPressSelector(){return this.mdcFoundation?this.mdcFoundation.getSuppressDefaultPressSelector():this.initialSupressDefaultPressSelector}get primaryButton(){let t=this.primarySlot.assignedNodes();t=t.filter((t=>t instanceof HTMLElement));const e=t[0];return e||null}emitNotification(t,e){const i=new CustomEvent(t,{detail:e?{action:e}:{}});this.dispatchEvent(i)}getInitialFocusEl(){const t=`[${this.initialFocusAttribute}]`,e=this.querySelector(t);if(e)return e;const i=this.primarySlot.assignedNodes({flatten:!0}),r=this.searchNodeTreesForAttribute(i,this.initialFocusAttribute);if(r)return r;const n=this.secondarySlot.assignedNodes({flatten:!0}),a=this.searchNodeTreesForAttribute(n,this.initialFocusAttribute);if(a)return a;const s=this.contentSlot.assignedNodes({flatten:!0});return this.searchNodeTreesForAttribute(s,this.initialFocusAttribute)}searchNodeTreesForAttribute(t,e){for(const i of t)if(i instanceof HTMLElement){if(i.hasAttribute(e))return i;{const t=i.querySelector(`[${e}]`);if(t)return t}}return null}createAdapter(){return Object.assign(Object.assign({},kt(this.mdcRoot)),{addBodyClass:()=>document.body.style.overflow="hidden",removeBodyClass:()=>document.body.style.overflow="",areButtonsStacked:()=>this.stacked,clickDefaultButton:()=>{const t=this.primaryButton;t&&t.click()},eventTargetMatches:(t,e)=>!!t&&Kt(t,e),getActionFromEvent:t=>{if(!t.target)return"";const e=function(t,e){if(t.closest)return t.closest(e);for(var i=t;i;){if(Kt(i,e))return i;i=i.parentElement}return null}(t.target,`[${this.actionAttribute}]`);return e&&e.getAttribute(this.actionAttribute)},getInitialFocusEl:()=>this.getInitialFocusEl(),isContentScrollable:()=>{const t=this.contentElement;return!!t&&t.scrollHeight>t.offsetHeight},notifyClosed:t=>this.emitNotification("closed",t),notifyClosing:t=>{this.closingDueToDisconnect||(this.open=!1),this.emitNotification("closing",t)},notifyOpened:()=>this.emitNotification("opened"),notifyOpening:()=>{this.open=!0,this.emitNotification("opening")},reverseButtons:()=>{},releaseFocus:()=>{tl.remove(this)},trapFocus:t=>{this.isConnected&&(tl.push(this),t&&t.focus())},registerContentEventHandler:(t,e)=>{this.contentElement.addEventListener(t,e)},deregisterContentEventHandler:(t,e)=>{this.contentElement.removeEventListener(t,e)},isScrollableContentAtTop:()=>{const t=this.contentElement;return!!t&&0===t.scrollTop},isScrollableContentAtBottom:()=>{const t=this.contentElement;return!!t&&Math.ceil(t.scrollHeight-t.scrollTop)===t.clientHeight},registerWindowEventHandler:(t,e)=>{window.addEventListener(t,e,Qo())},deregisterWindowEventHandler:(t,e)=>{window.removeEventListener(t,e,Qo())}})}render(){const t={[qo.STACKED]:this.stacked};let e=M``;this.heading&&(e=this.renderHeading());const i={"mdc-dialog__actions":!this.hideActions};return M`
    <div class="mdc-dialog ${Ot(t)}"
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="title"
        aria-describedby="content">
      <div class="mdc-dialog__container">
        <div class="mdc-dialog__surface">
          ${e}
          <div id="content" class="mdc-dialog__content">
            <slot id="contentSlot"></slot>
          </div>
          <footer
              id="actions"
              class="${Ot(i)}">
            <span>
              <slot name="secondaryAction"></slot>
            </span>
            <span>
             <slot name="primaryAction"></slot>
            </span>
          </footer>
        </div>
      </div>
      <div class="mdc-dialog__scrim"></div>
    </div>`}renderHeading(){return M`
      <h2 id="title" class="mdc-dialog__title">${this.heading}</h2>`}firstUpdated(){super.firstUpdated(),this.mdcFoundation.setAutoStackButtons(!0),this.initialSupressDefaultPressSelector?this.suppressDefaultPressSelector=this.initialSupressDefaultPressSelector:this.suppressDefaultPressSelector=[this.suppressDefaultPressSelector,"mwc-textarea","mwc-menu mwc-list-item","mwc-select mwc-list-item"].join(", "),this.boundHandleClick=this.mdcFoundation.handleClick.bind(this.mdcFoundation),this.boundHandleKeydown=this.mdcFoundation.handleKeydown.bind(this.mdcFoundation),this.boundHandleDocumentKeydown=this.mdcFoundation.handleDocumentKeydown.bind(this.mdcFoundation)}connectedCallback(){super.connectedCallback(),this.open&&this.mdcFoundation&&!this.mdcFoundation.isOpen()&&(this.setEventListeners(),this.mdcFoundation.open())}disconnectedCallback(){super.disconnectedCallback(),this.open&&this.mdcFoundation&&(this.removeEventListeners(),this.closingDueToDisconnect=!0,this.mdcFoundation.close(this.currentAction||this.defaultAction),this.closingDueToDisconnect=!1,this.currentAction=void 0,tl.remove(this))}forceLayout(){this.mdcFoundation.layout()}focus(){const t=this.getInitialFocusEl();t&&t.focus()}blur(){if(!this.shadowRoot)return;const t=this.shadowRoot.activeElement;if(t)t instanceof HTMLElement&&t.blur();else{const t=this.getRootNode(),e=t instanceof Document?t.activeElement:null;e instanceof HTMLElement&&e.blur()}}setEventListeners(){this.boundHandleClick&&this.mdcRoot.addEventListener("click",this.boundHandleClick),this.boundHandleKeydown&&this.mdcRoot.addEventListener("keydown",this.boundHandleKeydown,Qo()),this.boundHandleDocumentKeydown&&document.addEventListener("keydown",this.boundHandleDocumentKeydown,Qo())}removeEventListeners(){this.boundHandleClick&&this.mdcRoot.removeEventListener("click",this.boundHandleClick),this.boundHandleKeydown&&this.mdcRoot.removeEventListener("keydown",this.boundHandleKeydown),this.boundHandleDocumentKeydown&&document.removeEventListener("keydown",this.boundHandleDocumentKeydown)}close(){this.open=!1}show(){this.open=!0}}it([ht(".mdc-dialog")],el.prototype,"mdcRoot",void 0),it([ht('slot[name="primaryAction"]')],el.prototype,"primarySlot",void 0),it([ht('slot[name="secondaryAction"]')],el.prototype,"secondarySlot",void 0),it([ht("#contentSlot")],el.prototype,"contentSlot",void 0),it([ht(".mdc-dialog__content")],el.prototype,"contentElement",void 0),it([ht(".mdc-container")],el.prototype,"conatinerElement",void 0),it([ot({type:Boolean})],el.prototype,"hideActions",void 0),it([ot({type:Boolean}),Mt((function(){this.forceLayout()}))],el.prototype,"stacked",void 0),it([ot({type:String})],el.prototype,"heading",void 0),it([ot({type:String}),Mt((function(t){this.mdcFoundation.setScrimClickAction(t)}))],el.prototype,"scrimClickAction",void 0),it([ot({type:String}),Mt((function(t){this.mdcFoundation.setEscapeKeyAction(t)}))],el.prototype,"escapeKeyAction",void 0),it([ot({type:Boolean,reflect:!0}),Mt((function(t){this.mdcFoundation&&this.isConnected&&(t?(this.setEventListeners(),this.mdcFoundation.open()):(this.removeEventListeners(),this.mdcFoundation.close(this.currentAction||this.defaultAction),this.currentAction=void 0))}))],el.prototype,"open",void 0),it([ot()],el.prototype,"defaultAction",void 0),it([ot()],el.prototype,"actionAttribute",void 0),it([ot()],el.prototype,"initialFocusAttribute",void 0);const il=n`.mdc-dialog .mdc-dialog__surface{background-color:#fff;background-color:var(--mdc-theme-surface, #fff)}.mdc-dialog .mdc-dialog__scrim{background-color:rgba(0,0,0,.32)}.mdc-dialog .mdc-dialog__surface-scrim{background-color:rgba(0,0,0,.32)}.mdc-dialog .mdc-dialog__title{color:rgba(0,0,0,.87)}.mdc-dialog .mdc-dialog__content{color:rgba(0,0,0,.6)}.mdc-dialog .mdc-dialog__close{color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-dialog .mdc-dialog__close .mdc-icon-button__ripple::before,.mdc-dialog .mdc-dialog__close .mdc-icon-button__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, var(--mdc-theme-on-surface, #000))}.mdc-dialog .mdc-dialog__close:hover .mdc-icon-button__ripple::before,.mdc-dialog .mdc-dialog__close.mdc-ripple-surface--hover .mdc-icon-button__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-dialog .mdc-dialog__close.mdc-ripple-upgraded--background-focused .mdc-icon-button__ripple::before,.mdc-dialog .mdc-dialog__close:not(.mdc-ripple-upgraded):focus .mdc-icon-button__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-dialog .mdc-dialog__close:not(.mdc-ripple-upgraded) .mdc-icon-button__ripple::after{transition:opacity 150ms linear}.mdc-dialog .mdc-dialog__close:not(.mdc-ripple-upgraded):active .mdc-icon-button__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-dialog .mdc-dialog__close.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__title,.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__actions,.mdc-dialog.mdc-dialog--scrollable.mdc-dialog-scroll-divider-footer .mdc-dialog__actions{border-color:rgba(0,0,0,.12)}.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__title{border-bottom:1px solid rgba(0,0,0,.12);margin-bottom:0}.mdc-dialog.mdc-dialog-scroll-divider-header.mdc-dialog--fullscreen .mdc-dialog__header{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0,0,0,.12)}.mdc-dialog .mdc-dialog__surface{border-radius:4px;border-radius:var(--mdc-shape-medium, 4px)}.mdc-dialog__surface{box-shadow:0px 11px 15px -7px rgba(0, 0, 0, 0.2),0px 24px 38px 3px rgba(0, 0, 0, 0.14),0px 9px 46px 8px rgba(0,0,0,.12)}.mdc-dialog__title{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-headline6-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1.25rem;font-size:var(--mdc-typography-headline6-font-size, 1.25rem);line-height:2rem;line-height:var(--mdc-typography-headline6-line-height, 2rem);font-weight:500;font-weight:var(--mdc-typography-headline6-font-weight, 500);letter-spacing:0.0125em;letter-spacing:var(--mdc-typography-headline6-letter-spacing, 0.0125em);text-decoration:inherit;text-decoration:var(--mdc-typography-headline6-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-headline6-text-transform, inherit)}.mdc-dialog__content{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-body1-font-size, 1rem);line-height:1.5rem;line-height:var(--mdc-typography-body1-line-height, 1.5rem);font-weight:400;font-weight:var(--mdc-typography-body1-font-weight, 400);letter-spacing:0.03125em;letter-spacing:var(--mdc-typography-body1-letter-spacing, 0.03125em);text-decoration:inherit;text-decoration:var(--mdc-typography-body1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body1-text-transform, inherit)}.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:0;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);background-color:#fff;background-color:var(--mdc-elevation-overlay-color, #fff)}.mdc-dialog,.mdc-dialog__scrim{position:fixed;top:0;left:0;align-items:center;justify-content:center;box-sizing:border-box;width:100%;height:100%}.mdc-dialog{display:none;z-index:7;z-index:var(--mdc-dialog-z-index, 7)}.mdc-dialog .mdc-dialog__content{padding:20px 24px 20px 24px}.mdc-dialog .mdc-dialog__surface{min-width:280px}@media(max-width: 592px){.mdc-dialog .mdc-dialog__surface{max-width:calc(100vw - 32px)}}@media(min-width: 592px){.mdc-dialog .mdc-dialog__surface{max-width:560px}}.mdc-dialog .mdc-dialog__surface{max-height:calc(100% - 32px)}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-width:none}@media(max-width: 960px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:560px;width:560px}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}@media(max-width: 720px)and (max-width: 672px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{width:calc(100vw - 112px)}}@media(max-width: 720px)and (min-width: 672px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{width:560px}}@media(max-width: 720px)and (max-height: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:calc(100vh - 160px)}}@media(max-width: 720px)and (min-height: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:560px}}@media(max-width: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}@media(max-width: 720px)and (max-height: 400px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{height:100%;max-height:100vh;max-width:100vw;width:100vw;border-radius:0}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{order:-1;left:-12px}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__header{padding:0 16px 9px;justify-content:flex-start}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__title{margin-left:calc(16px - 2 * 12px)}}@media(max-width: 600px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{height:100%;max-height:100vh;max-width:100vw;width:100vw;border-radius:0}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{order:-1;left:-12px}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__header{padding:0 16px 9px;justify-content:flex-start}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__title{margin-left:calc(16px - 2 * 12px)}}@media(min-width: 960px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{width:calc(100vw - 400px)}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}.mdc-dialog.mdc-dialog__scrim--hidden .mdc-dialog__scrim{opacity:0}.mdc-dialog__scrim{opacity:0;z-index:-1}.mdc-dialog__container{display:flex;flex-direction:row;align-items:center;justify-content:space-around;box-sizing:border-box;height:100%;transform:scale(0.8);opacity:0;pointer-events:none}.mdc-dialog__surface{position:relative;display:flex;flex-direction:column;flex-grow:0;flex-shrink:0;box-sizing:border-box;max-width:100%;max-height:100%;pointer-events:auto;overflow-y:auto}.mdc-dialog__surface .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}[dir=rtl] .mdc-dialog__surface,.mdc-dialog__surface[dir=rtl]{text-align:right}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-dialog__surface{outline:2px solid windowText}}.mdc-dialog__surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:2px solid transparent;border-radius:inherit;content:"";pointer-events:none}@media screen and (forced-colors: active){.mdc-dialog__surface::before{border-color:CanvasText}}@media screen and (-ms-high-contrast: active),screen and (-ms-high-contrast: none){.mdc-dialog__surface::before{content:none}}.mdc-dialog__title{display:block;margin-top:0;position:relative;flex-shrink:0;box-sizing:border-box;margin:0 0 1px;padding:0 24px 9px}.mdc-dialog__title::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}[dir=rtl] .mdc-dialog__title,.mdc-dialog__title[dir=rtl]{text-align:right}.mdc-dialog--scrollable .mdc-dialog__title{margin-bottom:1px;padding-bottom:15px}.mdc-dialog--fullscreen .mdc-dialog__header{align-items:baseline;border-bottom:1px solid transparent;display:inline-flex;justify-content:space-between;padding:0 24px 9px;z-index:1}@media screen and (forced-colors: active){.mdc-dialog--fullscreen .mdc-dialog__header{border-bottom-color:CanvasText}}.mdc-dialog--fullscreen .mdc-dialog__header .mdc-dialog__close{right:-12px}.mdc-dialog--fullscreen .mdc-dialog__title{margin-bottom:0;padding:0;border-bottom:0}.mdc-dialog--fullscreen.mdc-dialog--scrollable .mdc-dialog__title{border-bottom:0;margin-bottom:0}.mdc-dialog--fullscreen .mdc-dialog__close{top:5px}.mdc-dialog--fullscreen.mdc-dialog--scrollable .mdc-dialog__actions{border-top:1px solid transparent}@media screen and (forced-colors: active){.mdc-dialog--fullscreen.mdc-dialog--scrollable .mdc-dialog__actions{border-top-color:CanvasText}}.mdc-dialog__content{flex-grow:1;box-sizing:border-box;margin:0;overflow:auto}.mdc-dialog__content>:first-child{margin-top:0}.mdc-dialog__content>:last-child{margin-bottom:0}.mdc-dialog__title+.mdc-dialog__content,.mdc-dialog__header+.mdc-dialog__content{padding-top:0}.mdc-dialog--scrollable .mdc-dialog__title+.mdc-dialog__content{padding-top:8px;padding-bottom:8px}.mdc-dialog__content .mdc-deprecated-list:first-child:last-child{padding:6px 0 0}.mdc-dialog--scrollable .mdc-dialog__content .mdc-deprecated-list:first-child:last-child{padding:0}.mdc-dialog__actions{display:flex;position:relative;flex-shrink:0;flex-wrap:wrap;align-items:center;justify-content:flex-end;box-sizing:border-box;min-height:52px;margin:0;padding:8px;border-top:1px solid transparent}@media screen and (forced-colors: active){.mdc-dialog__actions{border-top-color:CanvasText}}.mdc-dialog--stacked .mdc-dialog__actions{flex-direction:column;align-items:flex-end}.mdc-dialog__button{margin-left:8px;margin-right:0;max-width:100%;text-align:right}[dir=rtl] .mdc-dialog__button,.mdc-dialog__button[dir=rtl]{margin-left:0;margin-right:8px}.mdc-dialog__button:first-child{margin-left:0;margin-right:0}[dir=rtl] .mdc-dialog__button:first-child,.mdc-dialog__button:first-child[dir=rtl]{margin-left:0;margin-right:0}[dir=rtl] .mdc-dialog__button,.mdc-dialog__button[dir=rtl]{text-align:left}.mdc-dialog--stacked .mdc-dialog__button:not(:first-child){margin-top:12px}.mdc-dialog--open,.mdc-dialog--opening,.mdc-dialog--closing{display:flex}.mdc-dialog--opening .mdc-dialog__scrim{transition:opacity 150ms linear}.mdc-dialog--opening .mdc-dialog__container{transition:opacity 75ms linear,transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-dialog--closing .mdc-dialog__scrim,.mdc-dialog--closing .mdc-dialog__container{transition:opacity 75ms linear}.mdc-dialog--closing .mdc-dialog__container{transform:none}.mdc-dialog--open .mdc-dialog__scrim{opacity:1}.mdc-dialog--open .mdc-dialog__container{transform:none;opacity:1}.mdc-dialog--open.mdc-dialog__surface-scrim--shown .mdc-dialog__surface-scrim{opacity:1;z-index:1}.mdc-dialog--open.mdc-dialog__surface-scrim--hiding .mdc-dialog__surface-scrim{transition:opacity 75ms linear}.mdc-dialog--open.mdc-dialog__surface-scrim--showing .mdc-dialog__surface-scrim{transition:opacity 150ms linear}.mdc-dialog__surface-scrim{display:none;opacity:0;position:absolute;width:100%;height:100%}.mdc-dialog__surface-scrim--shown .mdc-dialog__surface-scrim,.mdc-dialog__surface-scrim--showing .mdc-dialog__surface-scrim,.mdc-dialog__surface-scrim--hiding .mdc-dialog__surface-scrim{display:block}.mdc-dialog-scroll-lock{overflow:hidden}.mdc-dialog--no-content-padding .mdc-dialog__content{padding:0}.mdc-dialog--sheet .mdc-dialog__close{right:12px;top:9px;position:absolute;z-index:1}#actions:not(.mdc-dialog__actions){display:none}.mdc-dialog__surface{box-shadow:var(--mdc-dialog-box-shadow, 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12))}@media(min-width: 560px){.mdc-dialog .mdc-dialog__surface{max-width:560px;max-width:var(--mdc-dialog-max-width, 560px)}}.mdc-dialog .mdc-dialog__scrim{background-color:rgba(0, 0, 0, 0.32);background-color:var(--mdc-dialog-scrim-color, rgba(0, 0, 0, 0.32))}.mdc-dialog .mdc-dialog__title{color:rgba(0, 0, 0, 0.87);color:var(--mdc-dialog-heading-ink-color, rgba(0, 0, 0, 0.87))}.mdc-dialog .mdc-dialog__content{color:rgba(0, 0, 0, 0.6);color:var(--mdc-dialog-content-ink-color, rgba(0, 0, 0, 0.6))}.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__title,.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__actions{border-color:rgba(0, 0, 0, 0.12);border-color:var(--mdc-dialog-scroll-divider-color, rgba(0, 0, 0, 0.12))}.mdc-dialog .mdc-dialog__surface{min-width:280px;min-width:var(--mdc-dialog-min-width, 280px)}.mdc-dialog .mdc-dialog__surface{max-height:var(--mdc-dialog-max-height, calc(100% - 32px))}#actions ::slotted(*){margin-left:8px;margin-right:0;max-width:100%;text-align:right}[dir=rtl] #actions ::slotted(*),#actions ::slotted(*[dir=rtl]){margin-left:0;margin-right:8px}[dir=rtl] #actions ::slotted(*),#actions ::slotted(*[dir=rtl]){text-align:left}.mdc-dialog--stacked #actions{flex-direction:column-reverse}.mdc-dialog--stacked #actions *:not(:last-child) ::slotted(*){flex-basis:.000000001px;margin-top:12px}`;let rl=class extends el{};rl.styles=[il],rl=it([at("mwc-dialog")],rl);window.customElements.define("grampsjs-list-item",class extends Fi{static get properties(){return{href:{type:String}}}static get styles(){return[super.styles,n`
        a {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
        }
      `]}render(){const t=super.render(),e=this.href?`${this.href}`:"";return M` ${this.renderRipple()}
      <a href=${e}> ${t} </a>`}});const nl=n`
  :host {
    --grampsjs-body-font-family: 'Inter var', sans-serif;
    --grampsjs-heading-font-family: 'Roboto Slab', serif;
    --md-ref-typeface-plain: 'Inter var', sans-serif;
    font-size: 18px;
    font-family: var(--grampsjs-body-font-family);
    font-weight: 300;
    --mdc-theme-primary: #6d4c41;
    --mdc-theme-on-primary: rgba(255, 255, 255, 0.95);
    --mdc-theme-secondary: #0277bd;
    --mdc-theme-on-secondary: rgba(255, 255, 255, 0.95);
    --mdc-theme-text-primary-on-background: rgba(0, 0, 0, 0.8);
    --mdc-theme-text-secondary-on-background: rgba(0, 0, 0, 0.45);
    --mdc-typography-font-family: var(--grampsjs-body-font-family);
    --color-boy: #64b5f6;
    --color-girl: #ef9a9a;
    --md-sys-color-primary: rgb(109 76 65);
    --md-sys-color-surface-tint: rgb(109 76 65);
    --md-sys-color-on-primary: rgb(255 255 255);
    --md-sys-color-primary-container: rgb(255 219 207);
    --md-sys-color-on-primary-container: rgb(57 12 0);
    --md-sys-color-secondary: rgb(49 98 141);
    --md-sys-color-on-secondary: rgb(255 255 255);
    --md-sys-color-secondary-container: rgb(207 229 255);
    --md-sys-color-on-secondary-container: rgb(0 29 52);
    --md-sys-color-tertiary: rgb(106 94 47);
    --md-sys-color-on-tertiary: rgb(255 255 255);
    --md-sys-color-tertiary-container: rgb(243 226 167);
    --md-sys-color-on-tertiary-container: rgb(34 27 0);
    --md-sys-color-error: rgb(186 26 26);
    --md-sys-color-on-error: rgb(255 255 255);
    --md-sys-color-error-container: rgb(255 218 214);
    --md-sys-color-on-error-container: rgb(65 0 2);
    --md-sys-color-background: rgb(255 248 246);
    --md-sys-color-on-background: rgb(35 25 23);
    --md-sys-color-surface: #fff;
    --md-sys-color-on-surface: rgb(35 25 23);
    --md-sys-color-surface-variant: rgb(245 222 215);
    --md-sys-color-on-surface-variant: rgb(83 67 63);
    --md-sys-color-outline: rgb(133 115 110);
    --md-sys-color-outline-variant: rgb(216 194 187);
    --md-sys-color-shadow: rgb(0 0 0);
    --md-sys-color-scrim: rgb(0 0 0);
    --md-sys-color-inverse-surface: rgb(57 46 43);
    --md-sys-color-inverse-on-surface: rgb(255 237 232);
    --md-sys-color-inverse-primary: rgb(255 181 156);
    --md-sys-color-primary-fixed: rgb(255 219 207);
    --md-sys-color-on-primary-fixed: rgb(57 12 0);
    --md-sys-color-primary-fixed-dim: rgb(255 181 156);
    --md-sys-color-on-primary-fixed-variant: rgb(114 53 32);
    --md-sys-color-secondary-fixed: rgb(207 229 255);
    --md-sys-color-on-secondary-fixed: rgb(0 29 52);
    --md-sys-color-secondary-fixed-dim: rgb(157 203 251);
    --md-sys-color-on-secondary-fixed-variant: rgb(18 74 115);
    --md-sys-color-tertiary-fixed: rgb(243 226 167);
    --md-sys-color-on-tertiary-fixed: rgb(34 27 0);
    --md-sys-color-tertiary-fixed-dim: rgb(214 198 141);
    --md-sys-color-on-tertiary-fixed-variant: rgb(81 70 26);
    --md-sys-color-surface-dim: rgb(232 214 209);
    --md-sys-color-surface-bright: rgb(255 248 246);
    --md-sys-color-surface-container-lowest: rgb(255 255 255);
    --md-sys-color-surface-container-low: rgb(255 241 237);
    --md-sys-color-surface-container: #fff;
    --md-sys-color-surface-container-high: #fff;
    --md-sys-color-surface-container-highest: #fff;
    --md-primary-tab-label-text-weight: 425;
    --md-primary-tab-label-text-size: 16px;
  }

  mwc-tab-bar {
    --mdc-typography-button-text-transform: none;
    --mdc-typography-button-font-weight: 400;
    --mdc-typography-button-letter-spacing: 0px;
    --mdc-typography-button-font-size: 16px;
    --mdc-tab-text-label-color-default: #6d4c41;
  }

  mwc-tab {
    flex-grow: 0;
  }

  label {
    display: inline-flex;
    place-items: center;
    gap: 12px;
    font-size: 15px;
    font-weight: 350;
    color: var(--md-sys-color-on-background, #000);
  }

  h2,
  h3,
  h4 {
    font-weight: 300;
    font-family: var(--grampsjs-heading-font-family);
  }

  h1 {
    font-weight: 400;
    font-family: var(--grampsjs-heading-font-family);
    font-size: 34px;
  }

  h2 {
    font-size: 32px;
    margin-top: 10px;
    margin-bottom: 30px;
  }

  h3 {
    font-size: 26px;
    margin-top: 30px;
    margin-bottom: 20px;
  }

  h4 {
    font-size: 20px;
  }

  h4.label {
    font-family: var(--grampsjs-body-font-family);
    font-size: 18px;
  }

  b,
  strong {
    font-weight: 600;
  }

  a:link,
  a:visited,
  span.link {
    color: #0d47a1;
    text-decoration: none;
  }

  a:hover,
  span.link:hover {
    color: #1976d2;
    text-decoration: underline;
    text-decoration-thickness: 1px;
    text-underline-offset: 0.2em;
  }

  .link {
    cursor: pointer;
  }

  .linkicon {
    --md-icon-size: 15px;
    margin-right: 8px;
    position: relative;
    bottom: -1px;
    opacity: 0.7;
  }

  .nopointer {
    pointer-events: none;
  }

  i svg {
    height: 1em;
    top: 0.125em;
    position: relative;
  }

  .md {
    font-weight: 400;
  }

  hr {
    border: 0;
    height: 0.5px;
    background: rgba(0, 0, 0, 0.4);
  }

  dt {
    font-size: 14px;
    color: rgba(0, 0, 0, 0.5);
    font-weight: 400;
    margin-bottom: 0.2em;
  }

  dd {
    margin: 0;
    padding: 0 0 1em 0;
  }

  dl div {
    float: left;
    margin-right: 3rem;
  }

  p {
    margin-top: 1.2em;
    margin-bottom: 1.2em;
  }

  h2 mwc-icon {
    color: rgba(0, 0, 0, 0.2);
    font-size: 1.05em;
    position: relative;
    top: 0.15em;
  }

  mwc-list {
    --mdc-list-item-graphic-margin: 16px;
  }

  mwc-list.large {
    --mdc-typography-subtitle1-color: rgba(0, 0, 0, 1);
    --mdc-typography-subtitle1-font-size: 18px;
    --mdc-typography-subtitle1-font-weight: 300;
    --mdc-typography-subtitle1-letter-spacing: -0.01em;
  }

  .avatar.skeleton {
    width: 44px;
    height: 44px;
    border-radius: 22px;
  }

  .float-right {
    float: right;
  }

  mwc-icon.inline {
    vertical-align: middle;
    size: 0.8em;
    padding-right: 0.2em;
    position: relative;
    bottom: auto;
    top: auto;
    color: rgba(0, 0, 0, 0.35);
  }

  mwc-icon.male {
    color: var(--color-boy);
  }

  mwc-icon.female {
    color: var(--color-girl);
  }

  .event {
    margin-right: 1em;
  }

  .event i svg path {
    fill: #999999;
  }

  .event i svg {
    height: 16px;
    width: auto;
  }

  .edit {
    color: var(--mdc-theme-secondary);
    --mdc-theme-primary: var(--mdc-theme-secondary);
    --mdc-theme-on-primary: var(--mdc-theme-on-secondary);
  }

  mwc-icon-button.large {
    --mdc-icon-size: 32px;
  }

  h2 .given-name {
    text-decoration: underline rgba(0, 0, 0, 0.6);
    text-underline-offset: 0.15em;
    text-decoration-thickness: 0.1rem;
  }

  span.skeleton {
    display: inline-block;
    background: #eee;
    background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
    opacity: 0.8;
    border-radius: 3px;
    background-size: 200% 100%;
    animation: 1.5s shine linear infinite;
  }

  .alert {
    background-color: rgba(109, 76, 65, 0.15);
    border-left: 4px solid rgba(109, 76, 65, 0.7);
    border-radius: 5px;
    padding: 0.8em 1em;
    font-size: 0.8em;
    color: rgba(0, 0, 0, 0.8);
    margin: 1.5em 0;
  }

  .alert.error {
    color: #bf360c;
    background-color: rgba(191, 54, 12, 0.2);
    border-left-color: rgba(191, 54, 12, 0.7);
  }

  .alert.warn {
    color: rgba(0, 0, 0, 0.5);
    background-color: rgba(251, 192, 45, 0.2);
    border-left-color: rgba(251, 192, 45, 0.7);
  }

  .success {
    color: #41ad49;
  }

  .error {
    color: #bf360c;
  }

  .warn {
    color: #f9a825;
  }

  @keyframes shine {
    to {
      background-position-x: -200%;
    }
  }

  grampsjs-task-progress-indicator.button {
    position: relative;
    top: 6px;
    left: 10px;
  }

  grampsjs-task-progress-indicator.button-left {
    position: relative;
    top: 6px;
    right: 10px;
  }

  h2.editable:hover {
    background-color: rgba(2, 119, 189, 0.2);
  }

  .monospace {
    font-family: 'Commit Mono';
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0.05);
    padding: 0.3em;
    font-size: 0.9em;
    color: rgb(125, 0, 0, 0.8);
  }

  @media (max-width: 768px) {
    :host {
      font-size: 16px;
    }

    h1 {
      font-size: 24px;
    }

    h2 {
      font-size: 24px;
    }

    h3 {
      font-size: 20px;
    }

    h4 {
      font-size: 18px;
    }
  }
`,al=t=>class extends t{static get properties(){return{strings:{type:Object}}}constructor(){super(),this.strings={}}_(t,...e){if(void 0===t)return"";let i=t;t in this.strings&&(i=this.strings[t]),i=i.replace("_","");for(let t=0;t<=e.length;t+=1)i=i.replace("%s",e[t]);return i}},sl=[["Person","/new_person","person"],["Family","/new_family","people"],["Event","/new_event","event"],["Place","/new_place","place"],["Source","/new_source","bookmarks"],["Citation","/new_citation","bookmark"],["Repository","/new_repository","account_balance"],["Note","/new_note","sticky_note_2"],["Media Object","/new_media","photo"],["Task","/new_task","task_alt"]];class ol extends(al(K)){static get styles(){return[nl,n`
        mwc-menu {
          --mdc-list-item-graphic-margin: 16px;
        }

        mwc-list-item.header {
          font-size: 14px;
          color: #666;
          font-weight: 400;
        }
      `]}render(){return M`
      <div style="position: relative;">
        <mwc-icon-button
          icon="add"
          @click="${this._handleClickAdd}"
          id="button_add"
        ></mwc-icon-button>
        <mwc-menu
          id="menu_add"
          corner="BOTTOM_RIGHT"
          menuCorner="END"
          x="0"
          y="0"
        >
          <mwc-list-item noninteractive class="header"
            >${this._("Add")}</mwc-list-item
          >
          <li divider role="separator"></li>
          ${sl.map((t=>this._menuItem(...t)))}
        </mwc-menu>
      </div>
    `}_menuItem(t,e,i){return M`
      <grampsjs-list-item href="${""}${e}" graphic="icon">
        <span>${this._(t)}</span>
        <mwc-icon slot="graphic">${i}</mwc-icon>
      </grampsjs-list-item>
    `}firstUpdated(){const t=this.shadowRoot.getElementById("button_add");this.shadowRoot.getElementById("menu_add").anchor=t}_handleClickAdd(){const t=this.shadowRoot.getElementById("menu_add");t.open=!t.open}}window.customElements.define("grampsjs-add-menu",ol);var ll="top",cl="bottom",dl="right",hl="left",pl="auto",ul=[ll,cl,dl,hl],ml="start",fl="end",gl="clippingParents",_l="viewport",vl="popper",yl="reference",bl=ul.reduce((function(t,e){return t.concat([e+"-"+ml,e+"-"+fl])}),[]),xl=[].concat(ul,[pl]).reduce((function(t,e){return t.concat([e,e+"-"+ml,e+"-"+fl])}),[]),wl=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function kl(t){return t?(t.nodeName||"").toLowerCase():null}function Tl(t){if(null==t)return window;if("[object Window]"!==t.toString()){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function Sl(t){return t instanceof Tl(t).Element||t instanceof Element}function Cl(t){return t instanceof Tl(t).HTMLElement||t instanceof HTMLElement}function El(t){return"undefined"!=typeof ShadowRoot&&(t instanceof Tl(t).ShadowRoot||t instanceof ShadowRoot)}var $l={name:"applyStyles",enabled:!0,phase:"write",fn:function(t){var e=t.state;Object.keys(e.elements).forEach((function(t){var i=e.styles[t]||{},r=e.attributes[t]||{},n=e.elements[t];Cl(n)&&kl(n)&&(Object.assign(n.style,i),Object.keys(r).forEach((function(t){var e=r[t];!1===e?n.removeAttribute(t):n.setAttribute(t,!0===e?"":e)})))}))},effect:function(t){var e=t.state,i={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,i.popper),e.styles=i,e.elements.arrow&&Object.assign(e.elements.arrow.style,i.arrow),function(){Object.keys(e.elements).forEach((function(t){var r=e.elements[t],n=e.attributes[t]||{},a=Object.keys(e.styles.hasOwnProperty(t)?e.styles[t]:i[t]).reduce((function(t,e){return t[e]="",t}),{});Cl(r)&&kl(r)&&(Object.assign(r.style,a),Object.keys(n).forEach((function(t){r.removeAttribute(t)})))}))}},requires:["computeStyles"]};function Al(t){return t.split("-")[0]}var Il=Math.max,Ml=Math.min,Ll=Math.round;function Pl(){var t=navigator.userAgentData;return null!=t&&t.brands&&Array.isArray(t.brands)?t.brands.map((function(t){return t.brand+"/"+t.version})).join(" "):navigator.userAgent}function Rl(){return!/^((?!chrome|android).)*safari/i.test(Pl())}function zl(t,e,i){void 0===e&&(e=!1),void 0===i&&(i=!1);var r=t.getBoundingClientRect(),n=1,a=1;e&&Cl(t)&&(n=t.offsetWidth>0&&Ll(r.width)/t.offsetWidth||1,a=t.offsetHeight>0&&Ll(r.height)/t.offsetHeight||1);var s=(Sl(t)?Tl(t):window).visualViewport,o=!Rl()&&i,l=(r.left+(o&&s?s.offsetLeft:0))/n,c=(r.top+(o&&s?s.offsetTop:0))/a,d=r.width/n,h=r.height/a;return{width:d,height:h,top:c,right:l+d,bottom:c+h,left:l,x:l,y:c}}function Dl(t){var e=zl(t),i=t.offsetWidth,r=t.offsetHeight;return Math.abs(e.width-i)<=1&&(i=e.width),Math.abs(e.height-r)<=1&&(r=e.height),{x:t.offsetLeft,y:t.offsetTop,width:i,height:r}}function jl(t,e){var i=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(i&&El(i)){var r=e;do{if(r&&t.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function Ol(t){return Tl(t).getComputedStyle(t)}function Bl(t){return["table","td","th"].indexOf(kl(t))>=0}function Fl(t){return((Sl(t)?t.ownerDocument:t.document)||window.document).documentElement}function Nl(t){return"html"===kl(t)?t:t.assignedSlot||t.parentNode||(El(t)?t.host:null)||Fl(t)}function Hl(t){return Cl(t)&&"fixed"!==Ol(t).position?t.offsetParent:null}function Vl(t){for(var e=Tl(t),i=Hl(t);i&&Bl(i)&&"static"===Ol(i).position;)i=Hl(i);return i&&("html"===kl(i)||"body"===kl(i)&&"static"===Ol(i).position)?e:i||function(t){var e=/firefox/i.test(Pl());if(/Trident/i.test(Pl())&&Cl(t)&&"fixed"===Ol(t).position)return null;var i=Nl(t);for(El(i)&&(i=i.host);Cl(i)&&["html","body"].indexOf(kl(i))<0;){var r=Ol(i);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||e&&"filter"===r.willChange||e&&r.filter&&"none"!==r.filter)return i;i=i.parentNode}return null}(t)||e}function Ul(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function Yl(t,e,i){return Il(t,Ml(e,i))}function Zl(t){return Object.assign({},{top:0,right:0,bottom:0,left:0},t)}function ql(t,e){return e.reduce((function(e,i){return e[i]=t,e}),{})}var Wl={name:"arrow",enabled:!0,phase:"main",fn:function(t){var e,i=t.state,r=t.name,n=t.options,a=i.elements.arrow,s=i.modifiersData.popperOffsets,o=Al(i.placement),l=Ul(o),c=[hl,dl].indexOf(o)>=0?"height":"width";if(a&&s){var d=function(t,e){return Zl("number"!=typeof(t="function"==typeof t?t(Object.assign({},e.rects,{placement:e.placement})):t)?t:ql(t,ul))}(n.padding,i),h=Dl(a),p="y"===l?ll:hl,u="y"===l?cl:dl,m=i.rects.reference[c]+i.rects.reference[l]-s[l]-i.rects.popper[c],f=s[l]-i.rects.reference[l],g=Vl(a),_=g?"y"===l?g.clientHeight||0:g.clientWidth||0:0,v=m/2-f/2,y=d[p],b=_-h[c]-d[u],x=_/2-h[c]/2+v,w=Yl(y,x,b),k=l;i.modifiersData[r]=((e={})[k]=w,e.centerOffset=w-x,e)}},effect:function(t){var e=t.state,i=t.options.element,r=void 0===i?"[data-popper-arrow]":i;null!=r&&("string"!=typeof r||(r=e.elements.popper.querySelector(r)))&&jl(e.elements.popper,r)&&(e.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Gl(t){return t.split("-")[1]}var Xl={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Kl(t){var e,i=t.popper,r=t.popperRect,n=t.placement,a=t.variation,s=t.offsets,o=t.position,l=t.gpuAcceleration,c=t.adaptive,d=t.roundOffsets,h=t.isFixed,p=s.x,u=void 0===p?0:p,m=s.y,f=void 0===m?0:m,g="function"==typeof d?d({x:u,y:f}):{x:u,y:f};u=g.x,f=g.y;var _=s.hasOwnProperty("x"),v=s.hasOwnProperty("y"),y=hl,b=ll,x=window;if(c){var w=Vl(i),k="clientHeight",T="clientWidth";if(w===Tl(i)&&"static"!==Ol(w=Fl(i)).position&&"absolute"===o&&(k="scrollHeight",T="scrollWidth"),n===ll||(n===hl||n===dl)&&a===fl)b=cl,f-=(h&&w===x&&x.visualViewport?x.visualViewport.height:w[k])-r.height,f*=l?1:-1;if(n===hl||(n===ll||n===cl)&&a===fl)y=dl,u-=(h&&w===x&&x.visualViewport?x.visualViewport.width:w[T])-r.width,u*=l?1:-1}var S,C=Object.assign({position:o},c&&Xl),E=!0===d?function(t,e){var i=t.x,r=t.y,n=e.devicePixelRatio||1;return{x:Ll(i*n)/n||0,y:Ll(r*n)/n||0}}({x:u,y:f},Tl(i)):{x:u,y:f};return u=E.x,f=E.y,l?Object.assign({},C,((S={})[b]=v?"0":"",S[y]=_?"0":"",S.transform=(x.devicePixelRatio||1)<=1?"translate("+u+"px, "+f+"px)":"translate3d("+u+"px, "+f+"px, 0)",S)):Object.assign({},C,((e={})[b]=v?f+"px":"",e[y]=_?u+"px":"",e.transform="",e))}var Jl={passive:!0};var Ql={left:"right",right:"left",bottom:"top",top:"bottom"};function tc(t){return t.replace(/left|right|bottom|top/g,(function(t){return Ql[t]}))}var ec={start:"end",end:"start"};function ic(t){return t.replace(/start|end/g,(function(t){return ec[t]}))}function rc(t){var e=Tl(t);return{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function nc(t){return zl(Fl(t)).left+rc(t).scrollLeft}function ac(t){var e=Ol(t),i=e.overflow,r=e.overflowX,n=e.overflowY;return/auto|scroll|overlay|hidden/.test(i+n+r)}function sc(t){return["html","body","#document"].indexOf(kl(t))>=0?t.ownerDocument.body:Cl(t)&&ac(t)?t:sc(Nl(t))}function oc(t,e){var i;void 0===e&&(e=[]);var r=sc(t),n=r===(null==(i=t.ownerDocument)?void 0:i.body),a=Tl(r),s=n?[a].concat(a.visualViewport||[],ac(r)?r:[]):r,o=e.concat(s);return n?o:o.concat(oc(Nl(s)))}function lc(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function cc(t,e,i){return e===_l?lc(function(t,e){var i=Tl(t),r=Fl(t),n=i.visualViewport,a=r.clientWidth,s=r.clientHeight,o=0,l=0;if(n){a=n.width,s=n.height;var c=Rl();(c||!c&&"fixed"===e)&&(o=n.offsetLeft,l=n.offsetTop)}return{width:a,height:s,x:o+nc(t),y:l}}(t,i)):Sl(e)?function(t,e){var i=zl(t,!1,"fixed"===e);return i.top=i.top+t.clientTop,i.left=i.left+t.clientLeft,i.bottom=i.top+t.clientHeight,i.right=i.left+t.clientWidth,i.width=t.clientWidth,i.height=t.clientHeight,i.x=i.left,i.y=i.top,i}(e,i):lc(function(t){var e,i=Fl(t),r=rc(t),n=null==(e=t.ownerDocument)?void 0:e.body,a=Il(i.scrollWidth,i.clientWidth,n?n.scrollWidth:0,n?n.clientWidth:0),s=Il(i.scrollHeight,i.clientHeight,n?n.scrollHeight:0,n?n.clientHeight:0),o=-r.scrollLeft+nc(t),l=-r.scrollTop;return"rtl"===Ol(n||i).direction&&(o+=Il(i.clientWidth,n?n.clientWidth:0)-a),{width:a,height:s,x:o,y:l}}(Fl(t)))}function dc(t,e,i,r){var n="clippingParents"===e?function(t){var e=oc(Nl(t)),i=["absolute","fixed"].indexOf(Ol(t).position)>=0&&Cl(t)?Vl(t):t;return Sl(i)?e.filter((function(t){return Sl(t)&&jl(t,i)&&"body"!==kl(t)})):[]}(t):[].concat(e),a=[].concat(n,[i]),s=a[0],o=a.reduce((function(e,i){var n=cc(t,i,r);return e.top=Il(n.top,e.top),e.right=Ml(n.right,e.right),e.bottom=Ml(n.bottom,e.bottom),e.left=Il(n.left,e.left),e}),cc(t,s,r));return o.width=o.right-o.left,o.height=o.bottom-o.top,o.x=o.left,o.y=o.top,o}function hc(t){var e,i=t.reference,r=t.element,n=t.placement,a=n?Al(n):null,s=n?Gl(n):null,o=i.x+i.width/2-r.width/2,l=i.y+i.height/2-r.height/2;switch(a){case ll:e={x:o,y:i.y-r.height};break;case cl:e={x:o,y:i.y+i.height};break;case dl:e={x:i.x+i.width,y:l};break;case hl:e={x:i.x-r.width,y:l};break;default:e={x:i.x,y:i.y}}var c=a?Ul(a):null;if(null!=c){var d="y"===c?"height":"width";switch(s){case ml:e[c]=e[c]-(i[d]/2-r[d]/2);break;case fl:e[c]=e[c]+(i[d]/2-r[d]/2)}}return e}function pc(t,e){void 0===e&&(e={});var i=e,r=i.placement,n=void 0===r?t.placement:r,a=i.strategy,s=void 0===a?t.strategy:a,o=i.boundary,l=void 0===o?gl:o,c=i.rootBoundary,d=void 0===c?_l:c,h=i.elementContext,p=void 0===h?vl:h,u=i.altBoundary,m=void 0!==u&&u,f=i.padding,g=void 0===f?0:f,_=Zl("number"!=typeof g?g:ql(g,ul)),v=p===vl?yl:vl,y=t.rects.popper,b=t.elements[m?v:p],x=dc(Sl(b)?b:b.contextElement||Fl(t.elements.popper),l,d,s),w=zl(t.elements.reference),k=hc({reference:w,element:y,strategy:"absolute",placement:n}),T=lc(Object.assign({},y,k)),S=p===vl?T:w,C={top:x.top-S.top+_.top,bottom:S.bottom-x.bottom+_.bottom,left:x.left-S.left+_.left,right:S.right-x.right+_.right},E=t.modifiersData.offset;if(p===vl&&E){var $=E[n];Object.keys(C).forEach((function(t){var e=[dl,cl].indexOf(t)>=0?1:-1,i=[ll,cl].indexOf(t)>=0?"y":"x";C[t]+=$[i]*e}))}return C}function uc(t,e){void 0===e&&(e={});var i=e,r=i.placement,n=i.boundary,a=i.rootBoundary,s=i.padding,o=i.flipVariations,l=i.allowedAutoPlacements,c=void 0===l?xl:l,d=Gl(r),h=d?o?bl:bl.filter((function(t){return Gl(t)===d})):ul,p=h.filter((function(t){return c.indexOf(t)>=0}));0===p.length&&(p=h);var u=p.reduce((function(e,i){return e[i]=pc(t,{placement:i,boundary:n,rootBoundary:a,padding:s})[Al(i)],e}),{});return Object.keys(u).sort((function(t,e){return u[t]-u[e]}))}var mc={name:"flip",enabled:!0,phase:"main",fn:function(t){var e=t.state,i=t.options,r=t.name;if(!e.modifiersData[r]._skip){for(var n=i.mainAxis,a=void 0===n||n,s=i.altAxis,o=void 0===s||s,l=i.fallbackPlacements,c=i.padding,d=i.boundary,h=i.rootBoundary,p=i.altBoundary,u=i.flipVariations,m=void 0===u||u,f=i.allowedAutoPlacements,g=e.options.placement,_=Al(g),v=l||(_===g||!m?[tc(g)]:function(t){if(Al(t)===pl)return[];var e=tc(t);return[ic(t),e,ic(e)]}(g)),y=[g].concat(v).reduce((function(t,i){return t.concat(Al(i)===pl?uc(e,{placement:i,boundary:d,rootBoundary:h,padding:c,flipVariations:m,allowedAutoPlacements:f}):i)}),[]),b=e.rects.reference,x=e.rects.popper,w=new Map,k=!0,T=y[0],S=0;S<y.length;S++){var C=y[S],E=Al(C),$=Gl(C)===ml,A=[ll,cl].indexOf(E)>=0,I=A?"width":"height",M=pc(e,{placement:C,boundary:d,rootBoundary:h,altBoundary:p,padding:c}),L=A?$?dl:hl:$?cl:ll;b[I]>x[I]&&(L=tc(L));var P=tc(L),R=[];if(a&&R.push(M[E]<=0),o&&R.push(M[L]<=0,M[P]<=0),R.every((function(t){return t}))){T=C,k=!1;break}w.set(C,R)}if(k)for(var z=function(t){var e=y.find((function(e){var i=w.get(e);if(i)return i.slice(0,t).every((function(t){return t}))}));if(e)return T=e,"break"},D=m?3:1;D>0;D--){if("break"===z(D))break}e.placement!==T&&(e.modifiersData[r]._skip=!0,e.placement=T,e.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function fc(t,e,i){return void 0===i&&(i={x:0,y:0}),{top:t.top-e.height-i.y,right:t.right-e.width+i.x,bottom:t.bottom-e.height+i.y,left:t.left-e.width-i.x}}function gc(t){return[ll,dl,cl,hl].some((function(e){return t[e]>=0}))}var _c={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(t){var e=t.state,i=t.options,r=t.name,n=i.offset,a=void 0===n?[0,0]:n,s=xl.reduce((function(t,i){return t[i]=function(t,e,i){var r=Al(t),n=[hl,ll].indexOf(r)>=0?-1:1,a="function"==typeof i?i(Object.assign({},e,{placement:t})):i,s=a[0],o=a[1];return s=s||0,o=(o||0)*n,[hl,dl].indexOf(r)>=0?{x:o,y:s}:{x:s,y:o}}(i,e.rects,a),t}),{}),o=s[e.placement],l=o.x,c=o.y;null!=e.modifiersData.popperOffsets&&(e.modifiersData.popperOffsets.x+=l,e.modifiersData.popperOffsets.y+=c),e.modifiersData[r]=s}};var vc={name:"preventOverflow",enabled:!0,phase:"main",fn:function(t){var e=t.state,i=t.options,r=t.name,n=i.mainAxis,a=void 0===n||n,s=i.altAxis,o=void 0!==s&&s,l=i.boundary,c=i.rootBoundary,d=i.altBoundary,h=i.padding,p=i.tether,u=void 0===p||p,m=i.tetherOffset,f=void 0===m?0:m,g=pc(e,{boundary:l,rootBoundary:c,padding:h,altBoundary:d}),_=Al(e.placement),v=Gl(e.placement),y=!v,b=Ul(_),x=function(t){return"x"===t?"y":"x"}(b),w=e.modifiersData.popperOffsets,k=e.rects.reference,T=e.rects.popper,S="function"==typeof f?f(Object.assign({},e.rects,{placement:e.placement})):f,C="number"==typeof S?{mainAxis:S,altAxis:S}:Object.assign({mainAxis:0,altAxis:0},S),E=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,$={x:0,y:0};if(w){if(a){var A,I="y"===b?ll:hl,M="y"===b?cl:dl,L="y"===b?"height":"width",P=w[b],R=P+g[I],z=P-g[M],D=u?-T[L]/2:0,j=v===ml?k[L]:T[L],O=v===ml?-T[L]:-k[L],B=e.elements.arrow,F=u&&B?Dl(B):{width:0,height:0},N=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},H=N[I],V=N[M],U=Yl(0,k[L],F[L]),Y=y?k[L]/2-D-U-H-C.mainAxis:j-U-H-C.mainAxis,Z=y?-k[L]/2+D+U+V+C.mainAxis:O+U+V+C.mainAxis,q=e.elements.arrow&&Vl(e.elements.arrow),W=q?"y"===b?q.clientTop||0:q.clientLeft||0:0,G=null!=(A=null==E?void 0:E[b])?A:0,X=P+Z-G,K=Yl(u?Ml(R,P+Y-G-W):R,P,u?Il(z,X):z);w[b]=K,$[b]=K-P}if(o){var J,Q="x"===b?ll:hl,tt="x"===b?cl:dl,et=w[x],it="y"===x?"height":"width",rt=et+g[Q],nt=et-g[tt],at=-1!==[ll,hl].indexOf(_),st=null!=(J=null==E?void 0:E[x])?J:0,ot=at?rt:et-k[it]-T[it]-st+C.altAxis,lt=at?et+k[it]+T[it]-st-C.altAxis:nt,ct=u&&at?function(t,e,i){var r=Yl(t,e,i);return r>i?i:r}(ot,et,lt):Yl(u?ot:rt,et,u?lt:nt);w[x]=ct,$[x]=ct-et}e.modifiersData[r]=$}},requiresIfExists:["offset"]};function yc(t,e,i){void 0===i&&(i=!1);var r,n,a=Cl(e),s=Cl(e)&&function(t){var e=t.getBoundingClientRect(),i=Ll(e.width)/t.offsetWidth||1,r=Ll(e.height)/t.offsetHeight||1;return 1!==i||1!==r}(e),o=Fl(e),l=zl(t,s,i),c={scrollLeft:0,scrollTop:0},d={x:0,y:0};return(a||!a&&!i)&&(("body"!==kl(e)||ac(o))&&(c=(r=e)!==Tl(r)&&Cl(r)?{scrollLeft:(n=r).scrollLeft,scrollTop:n.scrollTop}:rc(r)),Cl(e)?((d=zl(e,!0)).x+=e.clientLeft,d.y+=e.clientTop):o&&(d.x=nc(o))),{x:l.left+c.scrollLeft-d.x,y:l.top+c.scrollTop-d.y,width:l.width,height:l.height}}function bc(t){var e=new Map,i=new Set,r=[];function n(t){i.add(t.name),[].concat(t.requires||[],t.requiresIfExists||[]).forEach((function(t){if(!i.has(t)){var r=e.get(t);r&&n(r)}})),r.push(t)}return t.forEach((function(t){e.set(t.name,t)})),t.forEach((function(t){i.has(t.name)||n(t)})),r}function xc(t){var e;return function(){return e||(e=new Promise((function(i){Promise.resolve().then((function(){e=void 0,i(t())}))}))),e}}var wc={placement:"bottom",modifiers:[],strategy:"absolute"};function kc(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return!e.some((function(t){return!(t&&"function"==typeof t.getBoundingClientRect)}))}function Tc(t){void 0===t&&(t={});var e=t,i=e.defaultModifiers,r=void 0===i?[]:i,n=e.defaultOptions,a=void 0===n?wc:n;return function(t,e,i){void 0===i&&(i=a);var n={placement:"bottom",orderedModifiers:[],options:Object.assign({},wc,a),modifiersData:{},elements:{reference:t,popper:e},attributes:{},styles:{}},s=[],o=!1,l={state:n,setOptions:function(i){var o="function"==typeof i?i(n.options):i;c(),n.options=Object.assign({},a,n.options,o),n.scrollParents={reference:Sl(t)?oc(t):t.contextElement?oc(t.contextElement):[],popper:oc(e)};var d=function(t){var e=bc(t);return wl.reduce((function(t,i){return t.concat(e.filter((function(t){return t.phase===i})))}),[])}(function(t){var e=t.reduce((function(t,e){var i=t[e.name];return t[e.name]=i?Object.assign({},i,e,{options:Object.assign({},i.options,e.options),data:Object.assign({},i.data,e.data)}):e,t}),{});return Object.keys(e).map((function(t){return e[t]}))}([].concat(r,n.options.modifiers)));return n.orderedModifiers=d.filter((function(t){return t.enabled})),n.orderedModifiers.forEach((function(t){var e=t.name,i=t.options,r=void 0===i?{}:i,a=t.effect;if("function"==typeof a){var o=a({state:n,name:e,instance:l,options:r}),c=function(){};s.push(o||c)}})),l.update()},forceUpdate:function(){if(!o){var t=n.elements,e=t.reference,i=t.popper;if(kc(e,i)){n.rects={reference:yc(e,Vl(i),"fixed"===n.options.strategy),popper:Dl(i)},n.reset=!1,n.placement=n.options.placement,n.orderedModifiers.forEach((function(t){return n.modifiersData[t.name]=Object.assign({},t.data)}));for(var r=0;r<n.orderedModifiers.length;r++)if(!0!==n.reset){var a=n.orderedModifiers[r],s=a.fn,c=a.options,d=void 0===c?{}:c,h=a.name;"function"==typeof s&&(n=s({state:n,options:d,name:h,instance:l})||n)}else n.reset=!1,r=-1}}},update:xc((function(){return new Promise((function(t){l.forceUpdate(),t(n)}))})),destroy:function(){c(),o=!0}};if(!kc(t,e))return l;function c(){s.forEach((function(t){return t()})),s=[]}return l.setOptions(i).then((function(t){!o&&i.onFirstUpdate&&i.onFirstUpdate(t)})),l}}var Sc=Tc({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(t){var e=t.state,i=t.instance,r=t.options,n=r.scroll,a=void 0===n||n,s=r.resize,o=void 0===s||s,l=Tl(e.elements.popper),c=[].concat(e.scrollParents.reference,e.scrollParents.popper);return a&&c.forEach((function(t){t.addEventListener("scroll",i.update,Jl)})),o&&l.addEventListener("resize",i.update,Jl),function(){a&&c.forEach((function(t){t.removeEventListener("scroll",i.update,Jl)})),o&&l.removeEventListener("resize",i.update,Jl)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(t){var e=t.state,i=t.name;e.modifiersData[i]=hc({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(t){var e=t.state,i=t.options,r=i.gpuAcceleration,n=void 0===r||r,a=i.adaptive,s=void 0===a||a,o=i.roundOffsets,l=void 0===o||o,c={placement:Al(e.placement),variation:Gl(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:n,isFixed:"fixed"===e.options.strategy};null!=e.modifiersData.popperOffsets&&(e.styles.popper=Object.assign({},e.styles.popper,Kl(Object.assign({},c,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:s,roundOffsets:l})))),null!=e.modifiersData.arrow&&(e.styles.arrow=Object.assign({},e.styles.arrow,Kl(Object.assign({},c,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})},data:{}},$l,_c,mc,vc,Wl,{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(t){var e=t.state,i=t.name,r=e.rects.reference,n=e.rects.popper,a=e.modifiersData.preventOverflow,s=pc(e,{elementContext:"reference"}),o=pc(e,{altBoundary:!0}),l=fc(s,r),c=fc(o,n,a),d=gc(l),h=gc(c);e.modifiersData[i]={referenceClippingOffsets:l,popperEscapeOffsets:c,isReferenceHidden:d,hasPopperEscaped:h},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":d,"data-popper-escaped":h})}}]}),Cc="tippy-content",Ec="tippy-backdrop",$c="tippy-arrow",Ac="tippy-svg-arrow",Ic={passive:!0,capture:!0},Mc=function(){return document.body};function Lc(t,e,i){if(Array.isArray(t)){var r=t[e];return null==r?Array.isArray(i)?i[e]:i:r}return t}function Pc(t,e){var i={}.toString.call(t);return 0===i.indexOf("[object")&&i.indexOf(e+"]")>-1}function Rc(t,e){return"function"==typeof t?t.apply(void 0,e):t}function zc(t,e){return 0===e?t:function(r){clearTimeout(i),i=setTimeout((function(){t(r)}),e)};var i}function Dc(t){return[].concat(t)}function jc(t,e){-1===t.indexOf(e)&&t.push(e)}function Oc(t){return[].slice.call(t)}function Bc(t){return Object.keys(t).reduce((function(e,i){return void 0!==t[i]&&(e[i]=t[i]),e}),{})}function Fc(){return document.createElement("div")}function Nc(t){return["Element","Fragment"].some((function(e){return Pc(t,e)}))}function Hc(t){return Nc(t)?[t]:function(t){return Pc(t,"NodeList")}(t)?Oc(t):Array.isArray(t)?t:Oc(document.querySelectorAll(t))}function Vc(t,e){t.forEach((function(t){t&&(t.style.transitionDuration=e+"ms")}))}function Uc(t,e){t.forEach((function(t){t&&t.setAttribute("data-state",e)}))}function Yc(t,e,i){var r=e+"EventListener";["transitionend","webkitTransitionEnd"].forEach((function(e){t[r](e,i)}))}function Zc(t,e){for(var i=e;i;){var r;if(t.contains(i))return!0;i=null==i.getRootNode||null==(r=i.getRootNode())?void 0:r.host}return!1}var qc={isTouch:!1},Wc=0;function Gc(){qc.isTouch||(qc.isTouch=!0,window.performance&&document.addEventListener("mousemove",Xc))}function Xc(){var t=performance.now();t-Wc<20&&(qc.isTouch=!1,document.removeEventListener("mousemove",Xc)),Wc=t}function Kc(){var t,e=document.activeElement;if((t=e)&&t._tippy&&t._tippy.reference===t){var i=e._tippy;e.blur&&!i.state.isVisible&&e.blur()}}var Jc=!!("undefined"!=typeof window&&"undefined"!=typeof document)&&!!window.msCrypto,Qc=Object.assign({appendTo:Mc,aria:{content:"auto",expanded:"auto"},delay:0,duration:[300,250],getReferenceClientRect:null,hideOnClick:!0,ignoreAttributes:!1,interactive:!1,interactiveBorder:2,interactiveDebounce:0,moveTransition:"",offset:[0,10],onAfterUpdate:function(){},onBeforeUpdate:function(){},onCreate:function(){},onDestroy:function(){},onHidden:function(){},onHide:function(){},onMount:function(){},onShow:function(){},onShown:function(){},onTrigger:function(){},onUntrigger:function(){},onClickOutside:function(){},placement:"top",plugins:[],popperOptions:{},render:null,showOnCreate:!1,touch:!0,trigger:"mouseenter focus",triggerTarget:null},{animateFill:!1,followCursor:!1,inlinePositioning:!1,sticky:!1},{allowHTML:!1,animation:"fade",arrow:!0,content:"",inertia:!1,maxWidth:350,role:"tooltip",theme:"",zIndex:9999}),td=Object.keys(Qc);function ed(t){var e=(t.plugins||[]).reduce((function(e,i){var r,n=i.name,a=i.defaultValue;n&&(e[n]=void 0!==t[n]?t[n]:null!=(r=Qc[n])?r:a);return e}),{});return Object.assign({},t,e)}function id(t,e){var i=Object.assign({},e,{content:Rc(e.content,[t])},e.ignoreAttributes?{}:function(t,e){return(e?Object.keys(ed(Object.assign({},Qc,{plugins:e}))):td).reduce((function(e,i){var r=(t.getAttribute("data-tippy-"+i)||"").trim();if(!r)return e;if("content"===i)e[i]=r;else try{e[i]=JSON.parse(r)}catch(t){e[i]=r}return e}),{})}(t,e.plugins));return i.aria=Object.assign({},Qc.aria,i.aria),i.aria={expanded:"auto"===i.aria.expanded?e.interactive:i.aria.expanded,content:"auto"===i.aria.content?e.interactive?null:"describedby":i.aria.content},i}var rd=function(){return"innerHTML"};function nd(t,e){t[rd()]=e}function ad(t){var e=Fc();return!0===t?e.className=$c:(e.className=Ac,Nc(t)?e.appendChild(t):nd(e,t)),e}function sd(t,e){Nc(e.content)?(nd(t,""),t.appendChild(e.content)):"function"!=typeof e.content&&(e.allowHTML?nd(t,e.content):t.textContent=e.content)}function od(t){var e=t.firstElementChild,i=Oc(e.children);return{box:e,content:i.find((function(t){return t.classList.contains(Cc)})),arrow:i.find((function(t){return t.classList.contains($c)||t.classList.contains(Ac)})),backdrop:i.find((function(t){return t.classList.contains(Ec)}))}}function ld(t){var e=Fc(),i=Fc();i.className="tippy-box",i.setAttribute("data-state","hidden"),i.setAttribute("tabindex","-1");var r=Fc();function n(i,r){var n=od(e),a=n.box,s=n.content,o=n.arrow;r.theme?a.setAttribute("data-theme",r.theme):a.removeAttribute("data-theme"),"string"==typeof r.animation?a.setAttribute("data-animation",r.animation):a.removeAttribute("data-animation"),r.inertia?a.setAttribute("data-inertia",""):a.removeAttribute("data-inertia"),a.style.maxWidth="number"==typeof r.maxWidth?r.maxWidth+"px":r.maxWidth,r.role?a.setAttribute("role",r.role):a.removeAttribute("role"),i.content===r.content&&i.allowHTML===r.allowHTML||sd(s,t.props),r.arrow?o?i.arrow!==r.arrow&&(a.removeChild(o),a.appendChild(ad(r.arrow))):a.appendChild(ad(r.arrow)):o&&a.removeChild(o)}return r.className=Cc,r.setAttribute("data-state","hidden"),sd(r,t.props),e.appendChild(i),i.appendChild(r),n(t.props,t.props),{popper:e,onUpdate:n}}ld.$$tippy=!0;var cd=1,dd=[],hd=[];function pd(t,e){var i,r,n,a,s,o,l,c,d=id(t,Object.assign({},Qc,ed(Bc(e)))),h=!1,p=!1,u=!1,m=!1,f=[],g=zc(q,d.interactiveDebounce),_=cd++,v=(c=d.plugins).filter((function(t,e){return c.indexOf(t)===e})),y={id:_,reference:t,popper:Fc(),popperInstance:null,props:d,state:{isEnabled:!0,isVisible:!1,isDestroyed:!1,isMounted:!1,isShown:!1},plugins:v,clearDelayTimeouts:function(){clearTimeout(i),clearTimeout(r),cancelAnimationFrame(n)},setProps:function(e){if(y.state.isDestroyed)return;P("onBeforeUpdate",[y,e]),Y();var i=y.props,r=id(t,Object.assign({},i,Bc(e),{ignoreAttributes:!0}));y.props=r,U(),i.interactiveDebounce!==r.interactiveDebounce&&(D(),g=zc(q,r.interactiveDebounce));i.triggerTarget&&!r.triggerTarget?Dc(i.triggerTarget).forEach((function(t){t.removeAttribute("aria-expanded")})):r.triggerTarget&&t.removeAttribute("aria-expanded");z(),L(),w&&w(i,r);y.popperInstance&&(K(),Q().forEach((function(t){requestAnimationFrame(t._tippy.popperInstance.forceUpdate)})));P("onAfterUpdate",[y,e])},setContent:function(t){y.setProps({content:t})},show:function(){var t=y.state.isVisible,e=y.state.isDestroyed,i=!y.state.isEnabled,r=qc.isTouch&&!y.props.touch,n=Lc(y.props.duration,0,Qc.duration);if(t||e||i||r)return;if($().hasAttribute("disabled"))return;if(P("onShow",[y],!1),!1===y.props.onShow(y))return;y.state.isVisible=!0,E()&&(x.style.visibility="visible");L(),F(),y.state.isMounted||(x.style.transition="none");if(E()){var a=I();Vc([a.box,a.content],0)}o=function(){var t;if(y.state.isVisible&&!m){if(m=!0,x.offsetHeight,x.style.transition=y.props.moveTransition,E()&&y.props.animation){var e=I(),i=e.box,r=e.content;Vc([i,r],n),Uc([i,r],"visible")}R(),z(),jc(hd,y),null==(t=y.popperInstance)||t.forceUpdate(),P("onMount",[y]),y.props.animation&&E()&&function(t,e){H(t,e)}(n,(function(){y.state.isShown=!0,P("onShown",[y])}))}},function(){var t,e=y.props.appendTo,i=$();t=y.props.interactive&&e===Mc||"parent"===e?i.parentNode:Rc(e,[i]);t.contains(x)||t.appendChild(x);y.state.isMounted=!0,K()}()},hide:function(){var t=!y.state.isVisible,e=y.state.isDestroyed,i=!y.state.isEnabled,r=Lc(y.props.duration,1,Qc.duration);if(t||e||i)return;if(P("onHide",[y],!1),!1===y.props.onHide(y))return;y.state.isVisible=!1,y.state.isShown=!1,m=!1,h=!1,E()&&(x.style.visibility="hidden");if(D(),N(),L(!0),E()){var n=I(),a=n.box,s=n.content;y.props.animation&&(Vc([a,s],r),Uc([a,s],"hidden"))}R(),z(),y.props.animation?E()&&function(t,e){H(t,(function(){!y.state.isVisible&&x.parentNode&&x.parentNode.contains(x)&&e()}))}(r,y.unmount):y.unmount()},hideWithInteractivity:function(t){A().addEventListener("mousemove",g),jc(dd,g),g(t)},enable:function(){y.state.isEnabled=!0},disable:function(){y.hide(),y.state.isEnabled=!1},unmount:function(){y.state.isVisible&&y.hide();if(!y.state.isMounted)return;J(),Q().forEach((function(t){t._tippy.unmount()})),x.parentNode&&x.parentNode.removeChild(x);hd=hd.filter((function(t){return t!==y})),y.state.isMounted=!1,P("onHidden",[y])},destroy:function(){if(y.state.isDestroyed)return;y.clearDelayTimeouts(),y.unmount(),Y(),delete t._tippy,y.state.isDestroyed=!0,P("onDestroy",[y])}};if(!d.render)return y;var b=d.render(y),x=b.popper,w=b.onUpdate;x.setAttribute("data-tippy-root",""),x.id="tippy-"+y.id,y.popper=x,t._tippy=y,x._tippy=y;var k=v.map((function(t){return t.fn(y)})),T=t.hasAttribute("aria-expanded");return U(),z(),L(),P("onCreate",[y]),d.showOnCreate&&tt(),x.addEventListener("mouseenter",(function(){y.props.interactive&&y.state.isVisible&&y.clearDelayTimeouts()})),x.addEventListener("mouseleave",(function(){y.props.interactive&&y.props.trigger.indexOf("mouseenter")>=0&&A().addEventListener("mousemove",g)})),y;function S(){var t=y.props.touch;return Array.isArray(t)?t:[t,0]}function C(){return"hold"===S()[0]}function E(){var t;return!(null==(t=y.props.render)||!t.$$tippy)}function $(){return l||t}function A(){var t,e,i=$().parentNode;return i?null!=(e=Dc(i)[0])&&null!=(t=e.ownerDocument)&&t.body?e.ownerDocument:document:document}function I(){return od(x)}function M(t){return y.state.isMounted&&!y.state.isVisible||qc.isTouch||a&&"focus"===a.type?0:Lc(y.props.delay,t?0:1,Qc.delay)}function L(t){void 0===t&&(t=!1),x.style.pointerEvents=y.props.interactive&&!t?"":"none",x.style.zIndex=""+y.props.zIndex}function P(t,e,i){var r;(void 0===i&&(i=!0),k.forEach((function(i){i[t]&&i[t].apply(i,e)})),i)&&(r=y.props)[t].apply(r,e)}function R(){var e=y.props.aria;if(e.content){var i="aria-"+e.content,r=x.id;Dc(y.props.triggerTarget||t).forEach((function(t){var e=t.getAttribute(i);if(y.state.isVisible)t.setAttribute(i,e?e+" "+r:r);else{var n=e&&e.replace(r,"").trim();n?t.setAttribute(i,n):t.removeAttribute(i)}}))}}function z(){!T&&y.props.aria.expanded&&Dc(y.props.triggerTarget||t).forEach((function(t){y.props.interactive?t.setAttribute("aria-expanded",y.state.isVisible&&t===$()?"true":"false"):t.removeAttribute("aria-expanded")}))}function D(){A().removeEventListener("mousemove",g),dd=dd.filter((function(t){return t!==g}))}function j(e){if(!qc.isTouch||!u&&"mousedown"!==e.type){var i=e.composedPath&&e.composedPath()[0]||e.target;if(!y.props.interactive||!Zc(x,i)){if(Dc(y.props.triggerTarget||t).some((function(t){return Zc(t,i)}))){if(qc.isTouch)return;if(y.state.isVisible&&y.props.trigger.indexOf("click")>=0)return}else P("onClickOutside",[y,e]);!0===y.props.hideOnClick&&(y.clearDelayTimeouts(),y.hide(),p=!0,setTimeout((function(){p=!1})),y.state.isMounted||N())}}}function O(){u=!0}function B(){u=!1}function F(){var t=A();t.addEventListener("mousedown",j,!0),t.addEventListener("touchend",j,Ic),t.addEventListener("touchstart",B,Ic),t.addEventListener("touchmove",O,Ic)}function N(){var t=A();t.removeEventListener("mousedown",j,!0),t.removeEventListener("touchend",j,Ic),t.removeEventListener("touchstart",B,Ic),t.removeEventListener("touchmove",O,Ic)}function H(t,e){var i=I().box;function r(t){t.target===i&&(Yc(i,"remove",r),e())}if(0===t)return e();Yc(i,"remove",s),Yc(i,"add",r),s=r}function V(e,i,r){void 0===r&&(r=!1),Dc(y.props.triggerTarget||t).forEach((function(t){t.addEventListener(e,i,r),f.push({node:t,eventType:e,handler:i,options:r})}))}function U(){var t;C()&&(V("touchstart",Z,{passive:!0}),V("touchend",W,{passive:!0})),(t=y.props.trigger,t.split(/\s+/).filter(Boolean)).forEach((function(t){if("manual"!==t)switch(V(t,Z),t){case"mouseenter":V("mouseleave",W);break;case"focus":V(Jc?"focusout":"blur",G);break;case"focusin":V("focusout",G)}}))}function Y(){f.forEach((function(t){var e=t.node,i=t.eventType,r=t.handler,n=t.options;e.removeEventListener(i,r,n)})),f=[]}function Z(t){var e,i=!1;if(y.state.isEnabled&&!X(t)&&!p){var r="focus"===(null==(e=a)?void 0:e.type);a=t,l=t.currentTarget,z(),!y.state.isVisible&&Pc(t,"MouseEvent")&&dd.forEach((function(e){return e(t)})),"click"===t.type&&(y.props.trigger.indexOf("mouseenter")<0||h)&&!1!==y.props.hideOnClick&&y.state.isVisible?i=!0:tt(t),"click"===t.type&&(h=!i),i&&!r&&et(t)}}function q(t){var e=t.target,i=$().contains(e)||x.contains(e);if("mousemove"!==t.type||!i){var r=Q().concat(x).map((function(t){var e,i=null==(e=t._tippy.popperInstance)?void 0:e.state;return i?{popperRect:t.getBoundingClientRect(),popperState:i,props:d}:null})).filter(Boolean);(function(t,e){var i=e.clientX,r=e.clientY;return t.every((function(t){var e=t.popperRect,n=t.popperState,a=t.props.interactiveBorder,s=n.placement.split("-")[0],o=n.modifiersData.offset;if(!o)return!0;var l="bottom"===s?o.top.y:0,c="top"===s?o.bottom.y:0,d="right"===s?o.left.x:0,h="left"===s?o.right.x:0,p=e.top-r+l>a,u=r-e.bottom-c>a,m=e.left-i+d>a,f=i-e.right-h>a;return p||u||m||f}))})(r,t)&&(D(),et(t))}}function W(t){X(t)||y.props.trigger.indexOf("click")>=0&&h||(y.props.interactive?y.hideWithInteractivity(t):et(t))}function G(t){y.props.trigger.indexOf("focusin")<0&&t.target!==$()||y.props.interactive&&t.relatedTarget&&x.contains(t.relatedTarget)||et(t)}function X(t){return!!qc.isTouch&&C()!==t.type.indexOf("touch")>=0}function K(){J();var e=y.props,i=e.popperOptions,r=e.placement,n=e.offset,a=e.getReferenceClientRect,s=e.moveTransition,l=E()?od(x).arrow:null,c=a?{getBoundingClientRect:a,contextElement:a.contextElement||$()}:t,d={name:"$$tippy",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn:function(t){var e=t.state;if(E()){var i=I().box;["placement","reference-hidden","escaped"].forEach((function(t){"placement"===t?i.setAttribute("data-placement",e.placement):e.attributes.popper["data-popper-"+t]?i.setAttribute("data-"+t,""):i.removeAttribute("data-"+t)})),e.attributes.popper={}}}},h=[{name:"offset",options:{offset:n}},{name:"preventOverflow",options:{padding:{top:2,bottom:2,left:5,right:5}}},{name:"flip",options:{padding:5}},{name:"computeStyles",options:{adaptive:!s}},d];E()&&l&&h.push({name:"arrow",options:{element:l,padding:3}}),h.push.apply(h,(null==i?void 0:i.modifiers)||[]),y.popperInstance=Sc(c,x,Object.assign({},i,{placement:r,onFirstUpdate:o,modifiers:h}))}function J(){y.popperInstance&&(y.popperInstance.destroy(),y.popperInstance=null)}function Q(){return Oc(x.querySelectorAll("[data-tippy-root]"))}function tt(t){y.clearDelayTimeouts(),t&&P("onTrigger",[y,t]),F();var e=M(!0),r=S(),n=r[0],a=r[1];qc.isTouch&&"hold"===n&&a&&(e=a),e?i=setTimeout((function(){y.show()}),e):y.show()}function et(t){if(y.clearDelayTimeouts(),P("onUntrigger",[y,t]),y.state.isVisible){if(!(y.props.trigger.indexOf("mouseenter")>=0&&y.props.trigger.indexOf("click")>=0&&["mouseleave","mousemove"].indexOf(t.type)>=0&&h)){var e=M(!1);e?r=setTimeout((function(){y.state.isVisible&&y.hide()}),e):n=requestAnimationFrame((function(){y.hide()}))}}else N()}}function ud(t,e){void 0===e&&(e={});var i=Qc.plugins.concat(e.plugins||[]);document.addEventListener("touchstart",Gc,Ic),window.addEventListener("blur",Kc);var r=Object.assign({},e,{plugins:i}),n=Hc(t).reduce((function(t,e){var i=e&&pd(e,r);return i&&t.push(i),t}),[]);return Nc(t)?n[0]:n}ud.defaultProps=Qc,ud.setDefaultProps=function(t){Object.keys(t).forEach((function(e){Qc[e]=t[e]}))},ud.currentInput=qc,Object.assign({},$l,{effect:function(t){var e=t.state,i={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};Object.assign(e.elements.popper.style,i.popper),e.styles=i,e.elements.arrow&&Object.assign(e.elements.arrow.style,i.arrow)}}),ud.setDefaultProps({render:ld});window.customElements.define("grampsjs-tooltip",class extends K{static get styles(){return[n`
        :host {
          display: none;
        }
      `]}static get properties(){return{for:{type:String},target:{type:Object,attribute:!1},content:{type:String},strings:{type:Object},theme:{type:String},_tippy:{type:Object}}}constructor(){super(),this.for="",this.target={},this.content="",this.strings={},this.theme="",this._tippy={}}_getTarget(){const{parentNode:t}=this,e=this.getRootNode();let i;return i=this.for?e.querySelector(`#${this.for}`):t.nodeType===Node.DOCUMENT_FRAGMENT_NODE?e.host:t,i}firstUpdated(){this.target=this._getTarget(),this._initTippy()}updated(t){t.has("content")&&this.content&&this._tippy.setContent(this.content),t.has("strings")&&this._tippy.setContent(this.content||this.innerHTML)}_initTippy(){const t={content:this.innerHTML,allowHTML:!0};this.theme&&(t.theme=this.theme),this._tippy=ud(this.target,t)}render(){return M`<slot></slot>`}});class md extends(al(K)){static get styles(){return[nl,n`
        mwc-top-app-bar {
          --mdc-typography-headline6-font-family: var(
            --grampsjs-heading-font-family
          );
          --mdc-typography-headline6-font-weight: 400;
          --mdc-typography-headline6-font-size: 19px;
        }

        mwc-top-app-bar.edit {
          --mdc-theme-primary: var(--mdc-theme-secondary);
          --mdc-theme-on-primary: var(--mdc-theme-on-secondary);
        }
      `]}static get properties(){return{add:{type:Boolean},editMode:{type:Boolean},editTitle:{type:String},editDialogContent:{type:String},saveButton:{type:Boolean}}}constructor(){super(),this.add=!1,this.editMode=!1,this.editTitle="",this.editDialogContent="",this.saveButton=!1}render(){return M`
      <mwc-top-app-bar class="${Ot({edit:this.editMode})}">
        ${this.editMode?M`<mwc-icon-button
                slot="navigationIcon"
                icon="close"
                id="button-close"
                @click="${this._handleCloseIcon}"
              ></mwc-icon-button>
              <grampsjs-tooltip for="button-close" .strings="${this.strings}"
                >${this._("Stop editing")}</grampsjs-tooltip
              > `:M`<mwc-icon-button
              slot="navigationIcon"
              icon="menu"
              @click="${this._toggleDrawer}"
            ></mwc-icon-button>`}
        <div id="app-title" slot="title">
          ${this.editMode&&this.editTitle?this.editTitle:this._dbInfo?.database?.name||"Gramps Web"}
        </div>
        ${this.editMode?M`
                ${this.saveButton?M`
                      <mwc-icon-button
                        icon="save"
                        slot="actionItems"
                        id="button-save"
                        @click="${this._handleSaveIcon}"
                      ></mwc-icon-button>
                      <grampsjs-tooltip
                        for="button-save"
                        .strings="${this.strings}"
                        >${this._("_Save")}</grampsjs-tooltip
                      >
                    `:""}
                <mwc-icon-button
                  icon="delete"
                  slot="actionItems"
                  id="button-delete"
                  @click="${this._handleDeleteIcon}"
                ></mwc-icon-button>
                <grampsjs-tooltip for="button-delete" .strings="${this.strings}"
                  >${this._("_Delete")}</grampsjs-tooltip
                >
              `:M`
                ${this.add?M`
                      <grampsjs-add-menu
                        slot="actionItems"
                        .strings="${this.strings}"
                        id="button-add"
                      ></grampsjs-add-menu>
                      <grampsjs-tooltip
                        for="button-add"
                        .strings="${this.strings}"
                        >${this._("Add")}</grampsjs-tooltip
                      >
                    `:""}
                <mwc-icon-button
                  icon="account_circle"
                  slot="actionItems"
                  @click="${()=>this._handleNav("settings")}"
                  id="button-settings"
                ></mwc-icon-button>
                <grampsjs-tooltip
                  for="button-settings"
                  .strings="${this.strings}"
                  >${this._("Preferences")}</grampsjs-tooltip
                >
                <mwc-icon-button
                  icon="search"
                  slot="actionItems"
                  id="button-search"
                  @click="${()=>this._handleNav("search")}"
                ></mwc-icon-button>
                <grampsjs-tooltip for="button-search" .strings="${this.strings}"
                  >${this._("Search")}</grampsjs-tooltip
                >
              `}
      </mwc-top-app-bar>
      ${this.editDialogContent}
    `}_toggleDrawer(){os(this,"drawer:toggle")}_handleNav(t){os(this,"nav",{path:t})}_handleCloseIcon(){this.saveButton?this.editDialogContent=M`
        <mwc-dialog open @closed="${this._handleDialog}">
          <div>${this._("Abort changes?")}</div>
          <mwc-button slot="primaryAction" dialogAction="discard">
            ${this._("Discard")}
          </mwc-button>
          <mwc-button slot="secondaryAction" dialogAction="cancel">
            ${this._("Cancel")}
          </mwc-button>
        </mwc-dialog>
      `:this._editModeOff()}_handleDeleteIcon(){this.editDialogContent=M`
      <mwc-dialog open @closed="${this._handleDialog}">
        <div>${this._("Delete this object?")}</div>
        <mwc-button slot="primaryAction" dialogAction="delete">
          ${this._("_Delete")}
        </mwc-button>
        <mwc-button slot="secondaryAction" dialogAction="cancel">
          ${this._("Cancel")}
        </mwc-button>
      </mwc-dialog>
    `}_handleDialog(t){"discard"===t.detail.action?this._editModeOff():"delete"===t.detail.action&&this._deleteObject(),this.editDialogContent=""}_editModeOff(){os(this,"edit-mode:off",{})}_handleSaveIcon(){os(this,"edit-mode:save")}_disableEditMode(){this.editMode=!1}_enableEditMode(t){this.editMode=!0,this.editTitle=t.detail.title,this.saveButton=t.detail?.saveButton||!1}_deleteObject(){os(this,"edit-mode:delete")}connectedCallback(){super.connectedCallback(),window.addEventListener("edit-mode:on",(t=>this._enableEditMode(t))),window.addEventListener("edit-mode:off",(t=>this._disableEditMode(t)))}}window.customElements.define("grampsjs-app-bar",md);class fd extends K{constructor(){super(...arguments),this.indeterminate=!1,this.progress=0,this.density=0,this.closed=!1}open(){this.closed=!1}close(){this.closed=!0}render(){const t={"mdc-circular-progress--closed":this.closed,"mdc-circular-progress--indeterminate":this.indeterminate},e=48+4*this.density,i={width:`${e}px`,height:`${e}px`};return M`
      <div
        class="mdc-circular-progress ${Ot(t)}"
        style="${se(i)}"
        role="progressbar"
        aria-label="${Ke(this.ariaLabel)}"
        aria-valuemin="0"
        aria-valuemax="1"
        aria-valuenow="${Ke(this.indeterminate?void 0:this.progress)}">
        ${this.renderDeterminateContainer()}
        ${this.renderIndeterminateContainer()}
      </div>`}renderDeterminateContainer(){const t=48+4*this.density,e=t/2,i=this.density>=-3?18+11*this.density/6:12.5+5*(this.density+3)/4,r=6.2831852*i,n=(1-this.progress)*r,a=this.density>=-3?4+this.density*(1/3):3+(this.density+3)*(1/6);return M`
      <div class="mdc-circular-progress__determinate-container">
        <svg class="mdc-circular-progress__determinate-circle-graphic"
             viewBox="0 0 ${t} ${t}">
          <circle class="mdc-circular-progress__determinate-track"
                  cx="${e}" cy="${e}" r="${i}"
                  stroke-width="${a}"></circle>
          <circle class="mdc-circular-progress__determinate-circle"
                  cx="${e}" cy="${e}" r="${i}"
                  stroke-dasharray="${6.2831852*i}"
                  stroke-dashoffset="${n}"
                  stroke-width="${a}"></circle>
        </svg>
      </div>`}renderIndeterminateContainer(){return M`
      <div class="mdc-circular-progress__indeterminate-container">
        <div class="mdc-circular-progress__spinner-layer">
          ${this.renderIndeterminateSpinnerLayer()}
        </div>
      </div>`}renderIndeterminateSpinnerLayer(){const t=48+4*this.density,e=t/2,i=this.density>=-3?18+11*this.density/6:12.5+5*(this.density+3)/4,r=6.2831852*i,n=.5*r,a=this.density>=-3?4+this.density*(1/3):3+(this.density+3)*(1/6);return M`
        <div class="mdc-circular-progress__circle-clipper mdc-circular-progress__circle-left">
          <svg class="mdc-circular-progress__indeterminate-circle-graphic"
               viewBox="0 0 ${t} ${t}">
            <circle cx="${e}" cy="${e}" r="${i}"
                    stroke-dasharray="${r}"
                    stroke-dashoffset="${n}"
                    stroke-width="${a}"></circle>
          </svg>
        </div>
        <div class="mdc-circular-progress__gap-patch">
          <svg class="mdc-circular-progress__indeterminate-circle-graphic"
               viewBox="0 0 ${t} ${t}">
            <circle cx="${e}" cy="${e}" r="${i}"
                    stroke-dasharray="${r}"
                    stroke-dashoffset="${n}"
                    stroke-width="${.8*a}"></circle>
          </svg>
        </div>
        <div class="mdc-circular-progress__circle-clipper mdc-circular-progress__circle-right">
          <svg class="mdc-circular-progress__indeterminate-circle-graphic"
               viewBox="0 0 ${t} ${t}">
            <circle cx="${e}" cy="${e}" r="${i}"
                    stroke-dasharray="${r}"
                    stroke-dashoffset="${n}"
                    stroke-width="${a}"></circle>
          </svg>
        </div>`}update(t){super.update(t),t.has("progress")&&(this.progress>1&&(this.progress=1),this.progress<0&&(this.progress=0))}}it([ot({type:Boolean,reflect:!0})],fd.prototype,"indeterminate",void 0),it([ot({type:Number,reflect:!0})],fd.prototype,"progress",void 0),it([ot({type:Number,reflect:!0})],fd.prototype,"density",void 0),it([ot({type:Boolean,reflect:!0})],fd.prototype,"closed",void 0),it([Xe,ot({type:String,attribute:"aria-label"})],fd.prototype,"ariaLabel",void 0);const gd=n`.mdc-circular-progress__determinate-circle,.mdc-circular-progress__indeterminate-circle-graphic{stroke:#6200ee;stroke:var(--mdc-theme-primary, #6200ee)}.mdc-circular-progress__determinate-track{stroke:transparent}@keyframes mdc-circular-progress-container-rotate{to{transform:rotate(360deg)}}@keyframes mdc-circular-progress-spinner-layer-rotate{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}100%{transform:rotate(1080deg)}}@keyframes mdc-circular-progress-color-1-fade-in-out{from{opacity:.99}25%{opacity:.99}26%{opacity:0}89%{opacity:0}90%{opacity:.99}to{opacity:.99}}@keyframes mdc-circular-progress-color-2-fade-in-out{from{opacity:0}15%{opacity:0}25%{opacity:.99}50%{opacity:.99}51%{opacity:0}to{opacity:0}}@keyframes mdc-circular-progress-color-3-fade-in-out{from{opacity:0}40%{opacity:0}50%{opacity:.99}75%{opacity:.99}76%{opacity:0}to{opacity:0}}@keyframes mdc-circular-progress-color-4-fade-in-out{from{opacity:0}65%{opacity:0}75%{opacity:.99}90%{opacity:.99}to{opacity:0}}@keyframes mdc-circular-progress-left-spin{from{transform:rotate(265deg)}50%{transform:rotate(130deg)}to{transform:rotate(265deg)}}@keyframes mdc-circular-progress-right-spin{from{transform:rotate(-265deg)}50%{transform:rotate(-130deg)}to{transform:rotate(-265deg)}}.mdc-circular-progress{display:inline-flex;position:relative;direction:ltr;line-height:0;transition:opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-circular-progress__determinate-container,.mdc-circular-progress__indeterminate-circle-graphic,.mdc-circular-progress__indeterminate-container,.mdc-circular-progress__spinner-layer{position:absolute;width:100%;height:100%}.mdc-circular-progress__determinate-container{transform:rotate(-90deg)}.mdc-circular-progress__indeterminate-container{font-size:0;letter-spacing:0;white-space:nowrap;opacity:0}.mdc-circular-progress__determinate-circle-graphic,.mdc-circular-progress__indeterminate-circle-graphic{fill:transparent}.mdc-circular-progress__determinate-circle{transition:stroke-dashoffset 500ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-circular-progress__gap-patch{position:absolute;top:0;left:47.5%;box-sizing:border-box;width:5%;height:100%;overflow:hidden}.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic{left:-900%;width:2000%;transform:rotate(180deg)}.mdc-circular-progress__circle-clipper{display:inline-flex;position:relative;width:50%;height:100%;overflow:hidden}.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic{width:200%}.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{left:-100%}.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container{opacity:0}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{opacity:1}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{animation:mdc-circular-progress-container-rotate 1568.2352941176ms linear infinite}.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-1{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-1-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-2{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-2-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-3{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-3-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-4{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-4-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--closed{opacity:0}:host{display:inline-flex}.mdc-circular-progress__determinate-track{stroke:transparent;stroke:var(--mdc-circular-progress-track-color, transparent)}`;let _d=class extends fd{};_d.styles=[gd],_d=it([at("mwc-circular-progress")],_d);window.customElements.define("grampsjs-password-manager-polyfill",class extends K{createRenderRoot(){return document.body}styles(){return`\n    .password-manager-polyfill {\n      position: absolute;\n      top: ${(this.boundingRect?.y||19)+48}px;\n      left: calc(50% - ${(this.boundingRect?.width||360)/2}px);\n      width: ${this.boundingRect?.width||360}px;\n      opacity: 0;\n      z-index: -1;\n    }\n    .password-manager-polyfill input {\n      width: 100%;\n      height: 62px;\n      padding: 0;\n      border: 0;\n    }\n    .password-manager-polyfill input[type="submit"] {\n      width: 0;\n      height: 0;\n    }\n  `}static get properties(){return{credentials:{type:Object},boundingRect:{type:Object}}}constructor(){super(),this.credentials={}}render(){return M`
      <form
        class="password-manager-polyfill"
        aria-hidden="true"
        @submit=${this._handleSubmit}
      >
        <input
          tabindex="-1"
          id="username"
          autocapitalize="off"
          type="text"
          .value="${this.credentials.username||""}"
          @input=${this._valueChanged}
        />
        <input
          tabindex="-1"
          id="password"
          type="password"
          autocapitalize="off"
          .value="${this.credentials.password||""}"
          @input=${this._valueChanged}
        />
        <input type="submit" />
        <style>
          ${this.styles()}
        </style>
      </form>
    `}_handleSubmit(t){t.preventDefault(),os(this,"form-submitted")}_valueChanged(t){this.credentials={...this.credentials,[t.target.id]:t.target.value},os(this,"value-changed",{value:this.credentials})}});class vd extends(al(K)){static get styles(){return[nl,n`
        div#preview {
          margin-top: 25px;
        }

        img.img-preview {
          max-width: 300px;
          max-height: 300px;
        }

        .file-icon {
          color: rgba(0, 0, 0, 0.6);
          --mdc-icon-size: 100px;
        }

        span.filename {
          font-size: 0.8em;
          line-height: 36px;
          margin-left: 1em;
        }
      `]}static get properties(){return{file:{type:Object},imageUrl:{type:String},preview:{type:Boolean},filename:{type:Boolean},disabled:{type:Boolean},outlined:{type:Boolean},label:{type:String},accept:{type:String}}}constructor(){super(),this.file={},this.imageUrl="",this.preview=!1,this.filename=!1,this.disabled=!1,this.outlined=!1,this.label="",this.accept=void 0}render(){return M`
      <input
        id="input-upload"
        type="file"
        accept="${this.accept}"
        hidden
        @change="${this._handleInputChange}"
      />
      <mwc-button
        ?raised="${!this.outlined}"
        ?outlined="${this.outlined}"
        ?disabled="${this.disabled}"
        icon="upload"
        @click="${this._handleClickUpload}"
      >
        ${this.label||this._("Select a file")}
      </mwc-button>
      ${this.filename?this.renderFileName():""}
      ${this.preview?this.renderPreview():""}
    `}renderPreview(){return this.file.name?M`
      <div id="preview">
        ${this.file.type.startsWith("image")?this.renderImage():this.renderIcon()}
      </div>
    `:""}renderFileName(){return M`<span class="filename">${this.file.name}</span>`}renderImage(){return this.imageUrl?M` <img src="${this.imageUrl}" alt="" class="img-preview" /> `:""}renderIcon(){return M` <mwc-icon class="file-icon">insert_drive_file</mwc-icon> `}_handleClickUpload(){this.shadowRoot.getElementById("input-upload").click()}_handleInputChange(){const t=this.shadowRoot.getElementById("input-upload");if(t?.files?.length){this.imageUrl="",[this.file]=t.files;const e=new FileReader;e.onload=()=>{this.imageUrl=e.result},e.readAsDataURL(this.file),this.handleChange()}}async readAsJson(){return await async function(t){return new Promise(((e,i)=>{const r=new FileReader;r.onload=t=>{try{const i=JSON.parse(t.target.result);e(i)}catch(t){i(t)}},r.onerror=t=>i(t),r.readAsText(t)}))}(this.file)}reset(){this.file={},this.imageUrl="";this.shadowRoot.getElementById("input-upload").value=""}handleChange(){os(this,"formdata:changed",{data:this.file})}}window.customElements.define("grampsjs-form-upload",vd);class yd extends K{static get styles(){return[nl,n`
        .success {
          color: #41ad49;
        }

        .error {
          color: #bf360c;
        }

        .warn {
          color: #f9a825;
        }
      `]}static get properties(){return{progress:{type:Number},size:{type:Number},error:{type:Boolean},open:{type:Boolean},errorMessage:{type:String},infoMessage:{type:String}}}constructor(){super(),this.progress=-1,this.size=24,this.error=!1,this.open=!1,this.errorMessage="",this.infoMessage=""}reset(){this.progress=-1,this.error=!1,this.errorMessage="",this.infoMessage=""}render(){return this.open?this.error?this.renderError():this.progress<=-1?this.renderIndeterminate():this.progress>=1?this.renderSuccess():this.renderProgress():this.renderClosed()}_getDensity(){return-6+Math.round((this.size-24)/4)}renderClosed(){return M`
      <mwc-circular-progress closed density="${this._getDensity()}">
      </mwc-circular-progress>
    `}renderIndeterminate(){return M`
      <mwc-circular-progress
        indeterminate
        style="--mdc-theme-primary: rgba(0, 0, 0, 0.5);"
        density="${this._getDensity()}"
      >
      </mwc-circular-progress>
    `}renderProgress(){return M`
      <mwc-circular-progress
        progress="${Math.max(this.progress,.05)}"
        density="${this._getDensity()}"
        id="progress-determinate"
      >
      </mwc-circular-progress>
      ${this.infoMessage?M` <grampsjs-tooltip
            for="progress-determinate"
            content="${this.infoMessage}"
          ></grampsjs-tooltip>`:""}
    `}renderSuccess(){return M`
      <mwc-icon style="--mdc-icon-size: ${this.size}px;" class="success"
        >check_circle</mwc-icon
      >
    `}renderError(){return M`
      <mwc-icon
        id="error-icon"
        style="--mdc-icon-size: ${this.size}px;"
        class="error"
        >cancel</mwc-icon
      >
      ${this.errorMessage?M`
            <grampsjs-tooltip for="error-icon" theme="error"
              >${this.errorMessage}</grampsjs-tooltip
            >
          `:""}
    `}_handleClick(){os(this,"edit:action",{action:"updateProp",data:{private:!this.private}})}}window.customElements.define("grampsjs-progress-indicator",yd);const bd=-1,xd={"#email_host":"EMAIL_HOST","#email_port":"EMAIL_PORT","#email_user":"EMAIL_HOST_USER","#email_pw":"EMAIL_HOST_PASSWORD","#email_from":"DEFAULT_FROM_EMAIL","#base_url":"BASE_URL"};class wd extends(al(K)){static get styles(){return[nl,n`
        .container {
          margin-left: auto;
          margin-right: auto;
          max-width: 30em;
          overflow-x: hidden;
          word-wrap: break-word;
          padding: 3em 1.5em;
        }

        mwc-textfield {
          width: 100%;
          margin-bottom: 0.7em;
        }

        h1,
        h2,
        h3 {
          color: var(--mdc-theme-primary);
        }

        p {
          line-height: 1.6;
        }

        .progress {
          position: relative;
          top: 0.2em;
          margin-left: 0.5em;
        }
      `]}static get properties(){return{token:{type:String},stateUser:{type:Number},stateConfig:{type:Number},stateTree:{type:Number},_errorUser:{type:String},_errorConfig:{type:String},_errorTree:{type:String},_uploadHint:{type:String},_tree:{type:String}}}constructor(){super(),this.token="",this.stateUser=0,this.stateConfig=0,this.stateTree=0,this._errorUser="",this._errorConfig="",this._errorTree="",this._uploadHint="",this._tree=""}render(){return M`
      <div class="container">
        <div class="form">
          <h1>${this._("Welcome to Gramps Web")}</h1>

          <h3>
            ${this._("Create an admin account")}
            ${0!==this.stateUser?M`
                  <span class="icon">
                    ${Na(Ma,"#41AD49")}
                  </span>
                `:""}
          </h3>

          <p>${this._("Enter the details for the admin user.")}</p>

          <mwc-textfield
            @input="${this.checkValidity}"
            outlined
            required
            autocapitalize="off"
            id="username"
            label="${this._("Username")}"
            type="text"
          ></mwc-textfield>
          <mwc-textfield
            @input="${this.checkValidity}"
            outlined
            required
            autocapitalize="off"
            id="password"
            label="${this._("Password")}"
            type="password"
          ></mwc-textfield>
          <mwc-textfield
            @input="${this.checkValidity}"
            outlined
            required
            autocapitalize="off"
            id="email"
            label="${this._("E-mail")}"
            type="email"
          ></mwc-textfield>
          <mwc-textfield
            @input="${this.checkValidity}"
            outlined
            id="full_name"
            label="${this._("Full Name")}"
            type="text"
          ></mwc-textfield>

          ${this._tree?"":M`
                <h3>
                  ${this._("E-mail settings")}
                  ${0!==this.stateConfig?M`
                        <span class="icon">
                          ${Na(Ma,"#41AD49")}
                        </span>
                      `:""}
                </h3>

                <p>
                  ${this._("Optionally, enter existing IMAP credentials to enable e-mail notifications required e.g. for user registration.")}
                </p>

                <mwc-textfield
                  @input="${this.checkValidity}"
                  outlined
                  id="email_host"
                  label="${this._("SMTP host")}"
                  type="text"
                ></mwc-textfield>
                <mwc-textfield
                  @input="${this.checkValidity}"
                  outlined
                  id="email_port"
                  label="${this._("SMTP port")}"
                  type="text"
                  pattern="[0-9]+"
                ></mwc-textfield>
                <mwc-textfield
                  @input="${this.checkValidity}"
                  outlined
                  id="email_user"
                  label="${this._("SMTP user")}"
                  type="text"
                ></mwc-textfield>
                <mwc-textfield
                  @input="${this.checkValidity}"
                  outlined
                  id="email_pw"
                  label="${this._("SMTP password")}"
                  type="password"
                ></mwc-textfield>
                <mwc-textfield
                  @input="${this.checkValidity}"
                  outlined
                  id="email_from"
                  label="${this._("From address")}"
                  type="email"
                ></mwc-textfield>
                <mwc-textfield
                  @input="${this.checkValidity}"
                  outlined
                  id="base_url"
                  label="${this._("Gramps Web base URL")}"
                  type="url"
                  placeholder="https://grampsweb.mydomain.com"
                ></mwc-textfield>
              `}

          <h3>
            ${this._("Upload family tree")}
            ${0!==this.stateTree?M`
                  <span class="icon">
                    ${Na(Ma,"#41AD49")}
                  </span>
                `:""}
          </h3>

          <p>${this._("Optionally, upload existing family tree data.")}</p>

          <p>
            <grampsjs-form-upload
              .strings="${this.strings}"
              filename
              @formdata:changed="${this._handleUploadChanged}"
              ?disabled="${3===this.stateUser}"
            ></grampsjs-form-upload>
          </p>
          ${this._uploadHint?M`${this._uploadHint}`:""}

          <p style="margin-top: 2em;">
            ${this._("Need help? Check out ")}<a
              href="https://www.grampsweb.org/Deployment/"
              >${this._("the documentation")}</a
            >.
          </p>

          <h3>${this._("Submit")}</h3>

          <mwc-button
            raised
            label="${this._("Submit")}"
            type="submit"
            @click="${this._submit}"
            ?disabled=${1!==this.stateUser&&this.stateUser!==bd}
          >
          </mwc-button>

          <p>
            ${this._showProgress(this._("Creating owner account"),this.stateUser,this._errorUser)}
            ${this._tree?"":this._showProgress(this._("Storing configuration"),this.stateConfig,this._errorConfig)}
            ${this._showProgress(this._("Importing family tree"),this.stateTree,this._errorTree)}
          </p>

          <div
            style="visibility:${3===this.stateUser&&2!==this.stateConfig&&2!==this.stateTree?"visible":"hidden"};"
          >
            <mwc-button
              raised
              label="start"
              type="submit"
              id="start-btn"
              @click="${this._done}"
            >
            </mwc-button>
          </div>
        </div>
      </div>
    `}_showProgress(t,e,i){return M`
      <br />
      ${t}
      <span class="progress">
        <grampsjs-progress-indicator
          ?open="${0!==e&&1!==e}"
          ?error="${e===bd}"
          errorMessage="${e===bd?i:""}"
          progress="${3===e?1:-1}"
        ></grampsjs-progress-indicator>
      </span>
    `}async _submit(){const t=this.shadowRoot.querySelector("#username")?.value||"",e=this.shadowRoot.querySelector("#password")?.value||"",i=this.shadowRoot.querySelector("#email")?.value||"",r=this.shadowRoot.querySelector("#full_name")?.value||"";if(await this._submitUser(t,e,i,r),this.stateUser===bd)return;const n=await Dn(t,e);if("error"in n)return this.stateUser=bd,void(this._errorUser=n.error||"");if(1===this.stateConfig&&(await this._submitConfig(),this.stateConfig!==bd&&(this.stateConfig=3)),1===this.stateTree){const t=this.shadowRoot.querySelector("grampsjs-form-upload"),e=t.file.name.split(".").pop().toLowerCase();await this._submitTree(e,t.file)}}async _submitUser(t,e,i,r){this.stateUser=2;try{const n=await fetch(`${Cn}/api/users/${t}/create_owner/`,{method:"POST",headers:{Accept:"application/json",Authorization:`Bearer ${this.token}`,"Content-Type":"application/json"},body:JSON.stringify({password:e,email:i,full_name:r})});if(201===n.status){this.stateUser=3;const t=this.shadowRoot.querySelector("#start-btn");return void(t&&t.scrollIntoView({block:"start",behavior:"smooth"}))}const a=await n.json();if(this.stateUser=bd,409===n.status){(a?.error?.message||"").toLowerCase().includes("mail")?this._errorUser=this._("This e-mail address is already in use"):this._errorUser=this._("This user name is already in use")}else this._errorUser=a?.error?.message||""}catch(t){this.stateUser=bd,this._errorUser=`${t}`||""}}async _submitConfig(){this.stateConfig=2;for(const t of Object.keys(xd)){const e=xd[t],i=this.shadowRoot.querySelector(t);i&&i?.value&&await this._submitConfigSingle(e,i.value)}}async _submitConfigSingle(t,e){const i=await Fn(`/api/config/${t}/`,{value:e});"error"in i&&(this.stateConfig=bd,this._errorConfig=i.error||"")}async _submitTree(t,e){this.stateTree=2;const i=await Nn(`/api/importers/${t}/file`,e,!1);"error"in i?(this.stateTree=bd,this._errorTree=i.error||""):"task"in i?qn(i.task.id,(t=>{"SUCCESS"===t.state?this.stateTree=3:"FAILURE"!==t.state&&"REVOKED"!==t.state||(this.stateTree=bd,this._errorTree=t.state)})):this.stateTree=3}_done(){os(this,"firstrun:done")}_handleUploadChanged(){const t=this.shadowRoot.querySelector("grampsjs-form-upload");if(!t.file?.name)return this._uploadHint="",void(this.stateTree=0);const e=t.file.name.split(".").pop().toLowerCase();return["gpkg","gramps","gw","def","vcf","csv","ged"].includes(e)?"gpkg"===e?(this._uploadHint=M`<p class="alert error">
        ${this._("The Gramps package format (.gpkg) is currently not supported.")}
        ${this._("Please upload a file in Gramps XML (.gramps) format without media files.")}
      </p>`,void(this.stateTree=0)):(this._uploadHint="gramps"!==e?M`<p class="alert warn">
        ${this._("If you intend to synchronize an existing Gramps database with Gramps Web, use the Gramps XML (.gramps) format instead.")}
      </p>`:"",void(this.stateTree=1)):(this._uploadHint=M`<p class="alert error">
        ${this._("Unsupported format")}
      </p>`,void(this.stateTree=0))}checkValidity(){0===this.stateUser&&this._checkValidityUser()?this.stateUser=1:1!==this.stateUser||this._checkValidityUser()||(this.stateUser=0),0===this.stateConfig&&this._checkValidityConfig()?this.stateConfig=1:1!==this.stateConfig||this._checkValidityConfig()||(this.stateConfig=0)}_checkValidityUser(){const t=this.shadowRoot.getElementById("username"),e=this.shadowRoot.getElementById("password"),i=this.shadowRoot.getElementById("full_name"),r=this.shadowRoot.getElementById("email");return t?.validity?.valid&&e?.validity?.valid&&i?.validity?.valid&&r?.validity?.valid||!1}_checkValidityConfig(){const t=this.shadowRoot.getElementById("email_host"),e=this.shadowRoot.getElementById("email_port"),i=this.shadowRoot.getElementById("email_user"),r=this.shadowRoot.getElementById("email_pw"),n=this.shadowRoot.getElementById("email_from"),a=this.shadowRoot.getElementById("base_url");return t?.validity?.valid&&t?.value&&e?.validity?.valid&&e?.value&&i?.validity?.valid&&i?.value&&r?.validity?.valid&&r?.value&&n?.validity?.valid&&n?.value&&a?.validity?.valid&&a?.value||!1}updated(t){t.has("token")&&(this._tree=(Sn(this.token)||{}).tree||"")}}window.customElements.define("grampsjs-first-run",wd);class kd extends(al(K)){static get styles(){return[nl,n`
        #login-container {
          margin: auto;
          height: 100%;
          max-width: 20em;
        }

        #login-form {
          position: relative;
          top: 25vh;
        }

        #login-form mwc-textfield {
          width: 100%;
          margin-bottom: 0.7em;
        }

        #login-form mwc-button {
        }

        p.reset-link {
          padding-top: 1em;
          font-size: 0.9em;
        }

        p.success {
          padding-top: 1em;
          color: #4caf50;
          font-size: 1.2em;
          font-weight: 400;
          --mdc-icon-size: 1.6em;
          line-height: 1.4em;
          text-align: center;
        }

        mwc-circular-progress {
          --mdc-theme-primary: white;
        }
      `]}static get properties(){return{resetpw:{type:Boolean},register:{type:Boolean},isFormValid:{type:Boolean},credentials:{type:Object},tree:{type:String}}}constructor(){super(),this.resetpw=!1,this.register=!1,this.isFormValid=!1,this.credentials={},this.tree=""}render(){return this.resetpw?this._renderResetPw():this.register?this._renderRegister():this._renderLogin()}_renderLogin(){return M`
      <div id="login-container">
        <form
          id="login-form"
          action="${""}/"
          @keydown="${this._handleLoginKey}"
        >
          <mwc-textfield
            outlined
            autocapitalize="off"
            id="username"
            label="${this._("Username")}"
            @input="${this._credChanged}"
            @change="${this._credChanged}"
            value="${this.credentials.username||""}"
          ></mwc-textfield>
          <mwc-textfield
            outlined
            autocapitalize="off"
            id="password"
            label="${this._("Password")}"
            type="password"
            @input="${this._credChanged}"
            @change="${this._credChanged}"
            value="${this.credentials.password||""}"
          ></mwc-textfield>
          <mwc-button
            raised
            label="${this._("login")}"
            type="submit"
            @click="${this._submitLogin}"
          >
            <span slot="trailingIcon" style="display:none;">
              <mwc-circular-progress
                indeterminate
                density="-7"
                closed
                id="login-progress"
              >
              </mwc-circular-progress>
            </span>
          </mwc-button>
          <p class="reset-link">
            <span
              class="link"
              @click="${()=>{this.resetpw=!0}}"
              >${this._("Lost password?")}</span
            >
          </p>
          ${window.grampsjsConfig.hideRegisterLink?"":M`
                <p class="reset-link">
                  <span
                    class="link"
                    @click="${()=>{this.register=!0}}"
                    >${this._("Register new account")}</span
                  >
                </p>
              `}
        </form>
        <grampsjs-password-manager-polyfill
          .credentials=${this.credentials}
          @form-submitted=${this._submitLogin}
          @value-changed=${this._loginFormChanged}
        ></grampsjs-password-manager-polyfill>
      </div>
    `}firstUpdated(){const t=this.shadowRoot.querySelector("grampsjs-password-manager-polyfill");null!==t&&(t.boundingRect=this.getBoundingClientRect())}_credChanged(t){this.credentials={...this.credentials,[t.target.id]:t.target.value}}_renderResetPw(){return M`
      <div id="login-container">
        <form id="login-form" action="${""}/">
          <div id="inner-form">
            <mwc-textfield
              outlined
              autocapitalize="off"
              id="username"
              label="${this._("Username")}"
              type="text"
            ></mwc-textfield>
            <mwc-button
              raised
              label="${this._("reset password")}"
              type="submit"
              @click="${this._resetPw}"
            >
              <span slot="trailingIcon" style="display:none;">
                <mwc-circular-progress
                  indeterminate
                  density="-7"
                  closed
                  id="login-progress"
                >
                </mwc-circular-progress>
              </span>
            </mwc-button>
          </div>
          <p class="success" id="reset-success" style="display:none;">
            <mwc-icon>check_circle</mwc-icon><br />
            ${this._("A password reset link has been sent by e-mail.")}
          </p>
          <p class="reset-link">
            <span
              class="link"
              @click="${()=>{this.resetpw=!1}}"
              >${this._("_Back")}</span
            >
          </p>
        </form>
      </div>
    `}_renderRegister(){return M`
      <div id="login-container">
        <form
          id="login-form"
          action="${""}/"
          @keydown="${this._checkFormValid}"
        >
          <div id="inner-form">
            <mwc-textfield
              required
              outlined
              autocapitalize="off"
              id="username"
              label="${this._("Username")}"
              type="text"
            ></mwc-textfield>
            <mwc-textfield
              required
              outlined
              autocapitalize="off"
              id="password"
              label="${this._("Password")}"
              type="password"
            ></mwc-textfield>
            <mwc-textfield
              required
              outlined
              autocapitalize="off"
              id="email"
              label="${this._("E-mail")}"
              type="email"
            ></mwc-textfield>
            <mwc-textfield
              required
              outlined
              id="fullname"
              label="${this._("Full Name")}"
              type="text"
            ></mwc-textfield>
            <mwc-button
              raised
              label="${this._("Submit")}"
              type="submit"
              @click="${this._register}"
              ?disabled="${!this.isFormValid}"
            >
              <span slot="trailingIcon" style="display:none;">
                <mwc-circular-progress
                  indeterminate
                  density="-7"
                  closed
                  id="login-progress"
                >
                </mwc-circular-progress>
              </span>
            </mwc-button>
          </div>
          <p class="success" id="register-success" style="display:none;">
            <mwc-icon>check_circle</mwc-icon><br />
            ${this._("New account registered successfully.")}
            <br />
            ${this._("Please confirm your e-mail address by clicking the link in the e-mail you received and then wait for the tree owner to activate your account.")}
          </p>
          <p class="reset-link">
            ${this._("Already have an account?")}
            <span
              class="link"
              @click="${()=>{this.register=!1}}"
              >${this._("login")}</span
            >
          </p>
        </form>
      </div>
    `}_checkFormValid(){const t=Array.from(this.shadowRoot.querySelectorAll("mwc-textfield"));this.isFormValid=t.every((t=>t?.validity?.valid))}_handleLoginKey(t){"Enter"===t.code&&this._submitLogin()}async _submitLogin(){const t=this.shadowRoot.getElementById("login-progress");t.parentElement.style.display="block",t.closed=!1,Dn(this.credentials.username,this.credentials.password).then((e=>{"error"in e?(t.parentElement.style.display="none",t.closed=!0,this._showError(e.error)):document.location.href="/"}))}_loginFormChanged(t){this.credentials={...this.credentials,...t.detail.value}}async _resetPw(){const t=this.shadowRoot.getElementById("username");if(""===t.value)return void this._showError("Username must not be empty.");const e=await async function(t){try{const e=await fetch(`${Cn}/api/users/${t}/password/reset/trigger/`,{method:"POST",headers:{"Content-Type":"application/json"}});if(404===e.status)throw new Error("User not found or user has no e-mail address.");if(500===e.status)throw new Error("The server encountered an error while trying to send the e-mail.");if(201!==e.status&&202!==e.status)throw new Error(e.statusText||`Error ${e.status}`);return{}}catch(t){return{error:t.message}}}(t.value),i=this.shadowRoot.getElementById("inner-form"),r=this.shadowRoot.getElementById("reset-success");"error"in e?this._showError(e.error):(r.style.display="block",i.style.display="none")}async _register(){const t=this.shadowRoot.getElementById("username"),e=this.shadowRoot.getElementById("password"),i=this.shadowRoot.getElementById("email"),r=this.shadowRoot.getElementById("fullname"),n=this.tree||"",a=await async function(t,e,i,r,n){try{let a={password:e,email:i,full_name:r};a=n?{...a,tree:n}:a;const s=await fetch(`${Cn}/api/users/${t}/register/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});let o;try{o=await s.json()}catch(t){o={}}if(409===s.status)throw new Error("Username or e-mail already taken.");if(201!==s.status)throw new Error(o?.error?.message||`Error ${s.status}`);return{}}catch(t){return{error:t.message}}}(t.value,e.value,i.value,r.value,n),s=this.shadowRoot.getElementById("inner-form"),o=this.shadowRoot.getElementById("register-success");"error"in a?this._showError(a.error):(o.style.display="block",s.style.display="none")}_showError(t){os(this,"grampsjs:error",{message:t})}}window.customElements.define("grampsjs-login",kd);class Td extends(al(K)){static get styles(){return[nl,n`
        grampsjs-list-item span {
          color: #444;
        }
      `]}static get properties(){return{add:{type:Boolean},editMode:{type:Boolean},editTitle:{type:String},editDialogContent:{type:String},saveButton:{type:Boolean},canViewPrivate:{type:Boolean},canUseChat:{type:Boolean}}}constructor(){super(),this.add=!1,this.editMode=!1,this.editTitle="",this.editDialogContent="",this.saveButton=!1,this.canViewPrivate=!1,this.canUseChat=!1}render(){return M` <mwc-list>
      <grampsjs-list-item href="${""}/" graphic="icon">
        <span>${this._("Home Page")}</span>
        <mwc-icon slot="graphic">home</mwc-icon>
      </grampsjs-list-item>
      <grampsjs-list-item href="${""}/blog" graphic="icon">
        <span>${this._("Blog")}</span>
        <mwc-icon slot="graphic">rss_feed</mwc-icon>
      </grampsjs-list-item>
      <grampsjs-list-item href="${""}/people" graphic="icon">
        <span>${this._("Lists")}</span>
        <mwc-icon slot="graphic">list</mwc-icon>
      </grampsjs-list-item>
      <grampsjs-list-item href="${""}/map" graphic="icon">
        <span>${this._("Map")}</span>
        <mwc-icon slot="graphic">map</mwc-icon>
      </grampsjs-list-item>
      <grampsjs-list-item href="${""}/tree" graphic="icon">
        <span>${this._("Family Tree")}</span>
        <mwc-icon slot="graphic">${Na(La)}</mwc-icon>
      </grampsjs-list-item>
      ${this.canUseChat?M`
            <grampsjs-list-item href="${""}/chat" graphic="icon">
              <span>${this._("Chat")}</span>
              <mwc-icon slot="graphic">${Na("M12,3C17.5,3 22,6.58 22,11C22,15.42 17.5,19 12,19C10.76,19 9.57,18.82 8.47,18.5C5.55,21 2,21 2,21C4.33,18.67 4.7,17.1 4.75,16.5C3.05,15.07 2,13.13 2,11C2,6.58 6.5,3 12,3Z")}</mwc-icon>
            </grampsjs-list-item>
          `:""}
      <li divider padded role="separator"></li>
      <grampsjs-list-item href="${""}/recent" graphic="icon">
        <span>${this._("History")}</span>
        <mwc-icon slot="graphic">history</mwc-icon>
      </grampsjs-list-item>
      <grampsjs-list-item href="${""}/bookmarks" graphic="icon">
        <span>${this._("_Bookmarks")}</span>
        <mwc-icon slot="graphic">bookmark</mwc-icon>
      </grampsjs-list-item>
      <grampsjs-list-item href="${""}/tasks" graphic="icon">
        <span>${this._("Tasks")}</span>
        <mwc-icon slot="graphic">checklist</mwc-icon>
      </grampsjs-list-item>
      <grampsjs-list-item href="${""}/export" graphic="icon">
        <span>${this._("Export")}</span>
        <mwc-icon slot="graphic">download_file</mwc-icon>
      </grampsjs-list-item>
      <grampsjs-list-item href="${""}/reports" graphic="icon">
        <span>${this._("_Reports").replace("_","")}</span>
        <mwc-icon slot="graphic">menu_book</mwc-icon>
      </grampsjs-list-item>
      ${this.canViewPrivate?M`
            <grampsjs-list-item href="${""}/revisions" graphic="icon">
              <span>${this._("Revisions")}</span>
              <mwc-icon slot="graphic">commit</mwc-icon>
            </grampsjs-list-item>
          `:""}
    </mwc-list>`}}window.customElements.define("grampsjs-main-menu",Td);class Sd extends K{constructor(){super(...arguments),this.mini=!1,this.exited=!1,this.disabled=!1,this.extended=!1,this.showIconAtEnd=!1,this.reducedTouchTarget=!1,this.icon="",this.label="",this.shouldRenderRipple=!1,this.useStateLayerCustomProperties=!1,this.rippleHandlers=new de((()=>(this.shouldRenderRipple=!0,this.ripple)))}render(){const t=this.mini&&!this.reducedTouchTarget,e={"mdc-fab--mini":this.mini,"mdc-fab--touch":t,"mdc-fab--exited":this.exited,"mdc-fab--extended":this.extended,"icon-end":this.showIconAtEnd},i=this.label?this.label:this.icon;return M`<button
          class="mdc-fab ${Ot(e)}"
          ?disabled="${this.disabled}"
          aria-label="${i}"
          @mouseenter=${this.handleRippleMouseEnter}
          @mouseleave=${this.handleRippleMouseLeave}
          @focus=${this.handleRippleFocus}
          @blur=${this.handleRippleBlur}
          @mousedown=${this.handleRippleActivate}
          @touchstart=${this.handleRippleStartPress}
          @touchend=${this.handleRippleDeactivate}
          @touchcancel=${this.handleRippleDeactivate}><!--
        -->${this.renderBeforeRipple()}<!--
        -->${this.renderRipple()}<!--
        -->${this.showIconAtEnd?this.renderLabel():""}<!--
        --><span class="material-icons mdc-fab__icon"><!--
          --><slot name="icon">${this.icon}</slot><!--
       --></span><!--
        -->${this.showIconAtEnd?"":this.renderLabel()}<!--
        -->${this.renderTouchTarget()}<!--
      --></button>`}renderIcon(){return M``}renderTouchTarget(){const t=this.mini&&!this.reducedTouchTarget;return M`${t?M`<div class="mdc-fab__touch"></div>`:""}`}renderLabel(){const t=""!==this.label&&this.extended;return M`${t?M`<span class="mdc-fab__label">${this.label}</span>`:""}`}renderBeforeRipple(){return M``}renderRipple(){return this.shouldRenderRipple?M`<mwc-ripple class="ripple"
        .internalUseStateLayerCustomProperties="${this.useStateLayerCustomProperties}"
         ></mwc-ripple>`:""}handleRippleActivate(t){const e=()=>{window.removeEventListener("mouseup",e),this.handleRippleDeactivate()};window.addEventListener("mouseup",e),this.handleRippleStartPress(t)}handleRippleStartPress(t){this.rippleHandlers.startPress(t)}handleRippleDeactivate(){this.rippleHandlers.endPress()}handleRippleMouseEnter(){this.rippleHandlers.startHover()}handleRippleMouseLeave(){this.rippleHandlers.endHover()}handleRippleFocus(){this.rippleHandlers.startFocus()}handleRippleBlur(){this.rippleHandlers.endFocus()}}Sd.shadowRootOptions={mode:"open",delegatesFocus:!0},it([pt("mwc-ripple")],Sd.prototype,"ripple",void 0),it([ot({type:Boolean})],Sd.prototype,"mini",void 0),it([ot({type:Boolean})],Sd.prototype,"exited",void 0),it([ot({type:Boolean})],Sd.prototype,"disabled",void 0),it([ot({type:Boolean})],Sd.prototype,"extended",void 0),it([ot({type:Boolean})],Sd.prototype,"showIconAtEnd",void 0),it([ot({type:Boolean})],Sd.prototype,"reducedTouchTarget",void 0),it([ot()],Sd.prototype,"icon",void 0),it([ot()],Sd.prototype,"label",void 0),it([lt()],Sd.prototype,"shouldRenderRipple",void 0),it([lt()],Sd.prototype,"useStateLayerCustomProperties",void 0),it([dt({passive:!0})],Sd.prototype,"handleRippleStartPress",null);const Cd=n`:host .mdc-fab .material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}:host{outline:none;--mdc-ripple-color: currentcolor;user-select:none;-webkit-tap-highlight-color:transparent;display:inline-flex;-webkit-tap-highlight-color:transparent;display:inline-flex;outline:none;user-select:none}:host .mdc-touch-target-wrapper{display:inline}:host .mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:0;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);background-color:#fff;background-color:var(--mdc-elevation-overlay-color, #fff)}:host .mdc-fab{position:relative;display:inline-flex;position:relative;align-items:center;justify-content:center;box-sizing:border-box;width:56px;height:56px;padding:0;border:none;fill:currentColor;text-decoration:none;cursor:pointer;user-select:none;-moz-appearance:none;-webkit-appearance:none;overflow:visible;transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1),opacity 15ms linear 30ms,transform 270ms 0ms cubic-bezier(0, 0, 0.2, 1)}:host .mdc-fab .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}:host .mdc-fab::-moz-focus-inner{padding:0;border:0}:host .mdc-fab:hover{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12)}:host .mdc-fab.mdc-ripple-upgraded--background-focused,:host .mdc-fab:not(.mdc-ripple-upgraded):focus{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12)}:host .mdc-fab .mdc-fab__focus-ring{position:absolute}:host .mdc-fab.mdc-ripple-upgraded--background-focused .mdc-fab__focus-ring,:host .mdc-fab:not(.mdc-ripple-upgraded):focus .mdc-fab__focus-ring{pointer-events:none;border:2px solid transparent;border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc( 100% + 4px );width:calc( 100% + 4px )}@media screen and (forced-colors: active){:host .mdc-fab.mdc-ripple-upgraded--background-focused .mdc-fab__focus-ring,:host .mdc-fab:not(.mdc-ripple-upgraded):focus .mdc-fab__focus-ring{border-color:CanvasText}}:host .mdc-fab.mdc-ripple-upgraded--background-focused .mdc-fab__focus-ring::after,:host .mdc-fab:not(.mdc-ripple-upgraded):focus .mdc-fab__focus-ring::after{content:"";border:2px solid transparent;border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}@media screen and (forced-colors: active){:host .mdc-fab.mdc-ripple-upgraded--background-focused .mdc-fab__focus-ring::after,:host .mdc-fab:not(.mdc-ripple-upgraded):focus .mdc-fab__focus-ring::after{border-color:CanvasText}}:host .mdc-fab:active,:host .mdc-fab:focus:active{box-shadow:0px 7px 8px -4px rgba(0, 0, 0, 0.2),0px 12px 17px 2px rgba(0, 0, 0, 0.14),0px 5px 22px 4px rgba(0,0,0,.12)}:host .mdc-fab:active,:host .mdc-fab:focus{outline:none}:host .mdc-fab:hover{cursor:pointer}:host .mdc-fab>svg{width:100%}:host .mdc-fab--mini{width:40px;height:40px}:host .mdc-fab--extended{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-button-font-size, 0.875rem);line-height:2.25rem;line-height:var(--mdc-typography-button-line-height, 2.25rem);font-weight:500;font-weight:var(--mdc-typography-button-font-weight, 500);letter-spacing:0.0892857143em;letter-spacing:var(--mdc-typography-button-letter-spacing, 0.0892857143em);text-decoration:none;text-decoration:var(--mdc-typography-button-text-decoration, none);text-transform:uppercase;text-transform:var(--mdc-typography-button-text-transform, uppercase);border-radius:24px;padding-left:20px;padding-right:20px;width:auto;max-width:100%;height:48px;line-height:normal}:host .mdc-fab--extended .mdc-fab__ripple{border-radius:24px}:host .mdc-fab--extended .mdc-fab__icon{margin-left:calc(12px - 20px);margin-right:12px}[dir=rtl] :host .mdc-fab--extended .mdc-fab__icon,:host .mdc-fab--extended .mdc-fab__icon[dir=rtl]{margin-left:12px;margin-right:calc(12px - 20px)}:host .mdc-fab--extended .mdc-fab__label+.mdc-fab__icon{margin-left:12px;margin-right:calc(12px - 20px)}[dir=rtl] :host .mdc-fab--extended .mdc-fab__label+.mdc-fab__icon,:host .mdc-fab--extended .mdc-fab__label+.mdc-fab__icon[dir=rtl]{margin-left:calc(12px - 20px);margin-right:12px}:host .mdc-fab--touch{margin-top:4px;margin-bottom:4px;margin-right:4px;margin-left:4px}:host .mdc-fab--touch .mdc-fab__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}:host .mdc-fab::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid transparent;border-radius:inherit;content:"";pointer-events:none}@media screen and (forced-colors: active){:host .mdc-fab::before{border-color:CanvasText}}:host .mdc-fab__label{justify-content:flex-start;text-overflow:ellipsis;white-space:nowrap;overflow-x:hidden;overflow-y:visible}:host .mdc-fab__icon{transition:transform 180ms 90ms cubic-bezier(0, 0, 0.2, 1);fill:currentColor;will-change:transform}:host .mdc-fab .mdc-fab__icon{display:inline-flex;align-items:center;justify-content:center}:host .mdc-fab--exited{transform:scale(0);opacity:0;transition:opacity 15ms linear 150ms,transform 180ms 0ms cubic-bezier(0.4, 0, 1, 1)}:host .mdc-fab--exited .mdc-fab__icon{transform:scale(0);transition:transform 135ms 0ms cubic-bezier(0.4, 0, 1, 1)}:host .mdc-fab{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786);box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 6px 10px 0px rgba(0, 0, 0, 0.14),0px 1px 18px 0px rgba(0,0,0,.12)}:host .mdc-fab .mdc-fab__icon{width:24px;height:24px;font-size:24px}:host .mdc-fab,:host .mdc-fab:not(:disabled) .mdc-fab__icon,:host .mdc-fab:not(:disabled) .mdc-fab__label,:host .mdc-fab:disabled .mdc-fab__icon,:host .mdc-fab:disabled .mdc-fab__label{color:#fff;color:var(--mdc-theme-on-secondary, #fff)}:host .mdc-fab:not(.mdc-fab--extended){border-radius:50%}:host .mdc-fab:not(.mdc-fab--extended) .mdc-fab__ripple{border-radius:50%}:host .mdc-fab{position:relative;display:inline-flex;position:relative;align-items:center;justify-content:center;box-sizing:border-box;width:56px;height:56px;padding:0;border:none;fill:currentColor;text-decoration:none;cursor:pointer;user-select:none;-moz-appearance:none;-webkit-appearance:none;overflow:visible;transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1),opacity 15ms linear 30ms,transform 270ms 0ms cubic-bezier(0, 0, 0.2, 1)}:host .mdc-fab .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}:host .mdc-fab::-moz-focus-inner{padding:0;border:0}:host .mdc-fab:hover{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12)}:host .mdc-fab.mdc-ripple-upgraded--background-focused,:host .mdc-fab:not(.mdc-ripple-upgraded):focus{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12)}:host .mdc-fab .mdc-fab__focus-ring{position:absolute}:host .mdc-fab.mdc-ripple-upgraded--background-focused .mdc-fab__focus-ring,:host .mdc-fab:not(.mdc-ripple-upgraded):focus .mdc-fab__focus-ring{pointer-events:none;border:2px solid transparent;border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc( 100% + 4px );width:calc( 100% + 4px )}@media screen and (forced-colors: active){:host .mdc-fab.mdc-ripple-upgraded--background-focused .mdc-fab__focus-ring,:host .mdc-fab:not(.mdc-ripple-upgraded):focus .mdc-fab__focus-ring{border-color:CanvasText}}:host .mdc-fab.mdc-ripple-upgraded--background-focused .mdc-fab__focus-ring::after,:host .mdc-fab:not(.mdc-ripple-upgraded):focus .mdc-fab__focus-ring::after{content:"";border:2px solid transparent;border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}@media screen and (forced-colors: active){:host .mdc-fab.mdc-ripple-upgraded--background-focused .mdc-fab__focus-ring::after,:host .mdc-fab:not(.mdc-ripple-upgraded):focus .mdc-fab__focus-ring::after{border-color:CanvasText}}:host .mdc-fab:active,:host .mdc-fab:focus:active{box-shadow:0px 7px 8px -4px rgba(0, 0, 0, 0.2),0px 12px 17px 2px rgba(0, 0, 0, 0.14),0px 5px 22px 4px rgba(0,0,0,.12)}:host .mdc-fab:active,:host .mdc-fab:focus{outline:none}:host .mdc-fab:hover{cursor:pointer}:host .mdc-fab>svg{width:100%}:host .mdc-fab--mini{width:40px;height:40px}:host .mdc-fab--extended{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-button-font-size, 0.875rem);line-height:2.25rem;line-height:var(--mdc-typography-button-line-height, 2.25rem);font-weight:500;font-weight:var(--mdc-typography-button-font-weight, 500);letter-spacing:0.0892857143em;letter-spacing:var(--mdc-typography-button-letter-spacing, 0.0892857143em);text-decoration:none;text-decoration:var(--mdc-typography-button-text-decoration, none);text-transform:uppercase;text-transform:var(--mdc-typography-button-text-transform, uppercase);border-radius:24px;padding-left:20px;padding-right:20px;width:auto;max-width:100%;height:48px;line-height:normal}:host .mdc-fab--extended .mdc-fab__ripple{border-radius:24px}:host .mdc-fab--extended .mdc-fab__icon{margin-left:calc(12px - 20px);margin-right:12px}[dir=rtl] :host .mdc-fab--extended .mdc-fab__icon,:host .mdc-fab--extended .mdc-fab__icon[dir=rtl]{margin-left:12px;margin-right:calc(12px - 20px)}:host .mdc-fab--extended .mdc-fab__label+.mdc-fab__icon{margin-left:12px;margin-right:calc(12px - 20px)}[dir=rtl] :host .mdc-fab--extended .mdc-fab__label+.mdc-fab__icon,:host .mdc-fab--extended .mdc-fab__label+.mdc-fab__icon[dir=rtl]{margin-left:calc(12px - 20px);margin-right:12px}:host .mdc-fab--touch{margin-top:4px;margin-bottom:4px;margin-right:4px;margin-left:4px}:host .mdc-fab--touch .mdc-fab__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}:host .mdc-fab::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid transparent;border-radius:inherit;content:"";pointer-events:none}@media screen and (forced-colors: active){:host .mdc-fab::before{border-color:CanvasText}}:host .mdc-fab__label{justify-content:flex-start;text-overflow:ellipsis;white-space:nowrap;overflow-x:hidden;overflow-y:visible}:host .mdc-fab__icon{transition:transform 180ms 90ms cubic-bezier(0, 0, 0.2, 1);fill:currentColor;will-change:transform}:host .mdc-fab .mdc-fab__icon{display:inline-flex;align-items:center;justify-content:center}:host .mdc-fab--exited{transform:scale(0);opacity:0;transition:opacity 15ms linear 150ms,transform 180ms 0ms cubic-bezier(0.4, 0, 1, 1)}:host .mdc-fab--exited .mdc-fab__icon{transform:scale(0);transition:transform 135ms 0ms cubic-bezier(0.4, 0, 1, 1)}:host .mdc-fab .ripple{overflow:hidden}:host .mdc-fab:not(.mdc-fab--extended) .ripple{border-radius:50%}:host .mdc-fab.mdc-fab--extended .ripple{border-radius:24px}:host .mdc-fab .mdc-fab__label{z-index:0}:host .mdc-fab .mdc-fab__icon ::slotted(*){width:inherit;height:inherit;font-size:inherit}:host .mdc-fab--extended.mdc-fab--exited .mdc-fab__icon ::slotted(*){transform:scale(0);transition:transform 135ms 0ms cubic-bezier(0.4, 0, 1, 1)}:host .mdc-fab{padding-top:0px;padding-top:max(0px, var(--mdc-fab-focus-outline-width, 0px));padding-right:0px;padding-right:max(0px, var(--mdc-fab-focus-outline-width, 0px));padding-bottom:0px;padding-bottom:max(0px, var(--mdc-fab-focus-outline-width, 0px));padding-left:0px;padding-left:max(0px, var(--mdc-fab-focus-outline-width, 0px));box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-fab-box-shadow, 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12))}:host .mdc-fab:not(:disabled).mdc-ripple-upgraded--background-focused,:host .mdc-fab:not(:disabled):not(.mdc-ripple-upgraded):focus{border-color:initial;border-color:var(--mdc-fab-focus-outline-color, initial)}:host .mdc-fab:not(:disabled).mdc-ripple-upgraded--background-focused,:host .mdc-fab:not(:disabled):not(.mdc-ripple-upgraded):focus{border-style:solid;border-width:var(--mdc-fab-focus-outline-width, 0px);padding-top:0px;padding-top:max(calc(0px - var(--mdc-fab-focus-outline-width, 0px)), calc(calc(0px - var(--mdc-fab-focus-outline-width, 0px)) * -1));padding-right:0px;padding-right:max(calc(0px - var(--mdc-fab-focus-outline-width, 0px)), calc(calc(0px - var(--mdc-fab-focus-outline-width, 0px)) * -1));padding-bottom:0px;padding-bottom:max(calc(0px - var(--mdc-fab-focus-outline-width, 0px)), calc(calc(0px - var(--mdc-fab-focus-outline-width, 0px)) * -1));padding-left:0px;padding-left:max(calc(0px - var(--mdc-fab-focus-outline-width, 0px)), calc(calc(0px - var(--mdc-fab-focus-outline-width, 0px)) * -1))}:host .mdc-fab:hover,:host .mdc-fab:focus{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-fab-box-shadow, 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12))}:host .mdc-fab:active{box-shadow:0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-fab-box-shadow, 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12))}:host .mdc-fab .ripple{overflow:hidden}:host .mdc-fab .mdc-fab__label{z-index:0}:host .mdc-fab:not(.mdc-fab--extended) .ripple{border-radius:50%}:host .mdc-fab.mdc-fab--extended .ripple{border-radius:24px}:host .mdc-fab .mdc-fab__icon{width:24px;width:var(--mdc-icon-size, 24px);height:24px;height:var(--mdc-icon-size, 24px);font-size:24px;font-size:var(--mdc-icon-size, 24px);transition:transform 180ms 90ms cubic-bezier(0, 0, 0.2, 1);fill:currentColor;will-change:transform;display:inline-flex;align-items:center;justify-content:center}:host .mdc-fab.mdc-fab--extended{padding-top:0px;padding-top:max(0px, var(--mdc-fab-focus-outline-width, 0px));padding-right:20px;padding-right:max(var(--mdc-fab-extended-label-padding, 20px), var(--mdc-fab-focus-outline-width, 0px));padding-bottom:0px;padding-bottom:max(0px, var(--mdc-fab-focus-outline-width, 0px));padding-left:20px;padding-left:max(var(--mdc-fab-extended-label-padding, 20px), var(--mdc-fab-focus-outline-width, 0px))}:host .mdc-fab.mdc-fab--extended:not(:disabled).mdc-ripple-upgraded--background-focused,:host .mdc-fab.mdc-fab--extended:not(:disabled):not(.mdc-ripple-upgraded):focus{border-style:solid;border-width:var(--mdc-fab-focus-outline-width, 0px);padding-top:0px;padding-top:max(calc(0px - var(--mdc-fab-focus-outline-width, 0px)), calc(calc(0px - var(--mdc-fab-focus-outline-width, 0px)) * -1));padding-right:20px;padding-right:max(calc(var(--mdc-fab-extended-label-padding, 20px) - var(--mdc-fab-focus-outline-width, 0px)), calc(calc(var(--mdc-fab-extended-label-padding, 20px) - var(--mdc-fab-focus-outline-width, 0px)) * -1));padding-bottom:0px;padding-bottom:max(calc(0px - var(--mdc-fab-focus-outline-width, 0px)), calc(calc(0px - var(--mdc-fab-focus-outline-width, 0px)) * -1));padding-left:20px;padding-left:max(calc(var(--mdc-fab-extended-label-padding, 20px) - var(--mdc-fab-focus-outline-width, 0px)), calc(calc(var(--mdc-fab-extended-label-padding, 20px) - var(--mdc-fab-focus-outline-width, 0px)) * -1))}:host .mdc-fab.mdc-fab--extended.icon-end .mdc-fab__icon{margin-left:12px;margin-left:var(--mdc-fab-extended-icon-padding, 12px);margin-right:calc(12px - 20px);margin-right:calc(var(--mdc-fab-extended-icon-padding, 12px) - var(--mdc-fab-extended-label-padding, 20px))}[dir=rtl] :host .mdc-fab.mdc-fab--extended.icon-end .mdc-fab__icon,:host .mdc-fab.mdc-fab--extended.icon-end .mdc-fab__icon[dir=rtl]{margin-left:calc(12px - 20px);margin-left:calc(var(--mdc-fab-extended-icon-padding, 12px) - var(--mdc-fab-extended-label-padding, 20px));margin-right:12px;margin-right:var(--mdc-fab-extended-icon-padding, 12px)}`;let Ed=class extends Sd{};Ed.styles=[Cd],Ed=it([at("mwc-fab")],Ed);class $d extends(al(K)){static get styles(){return[nl,n`
        :host {
          margin: 25px 40px;
          background-color: #ffffff;
          --mdc-list-side-padding: 16px;
        }

        @media (max-width: 768px) {
          :host {
            margin: 25px 25px;
            --mdc-list-side-padding: 8px;
          }
        }
      `]}shouldUpdate(){return this.active}static get properties(){return{active:{type:Boolean},loading:{type:Boolean},error:{type:Boolean},settings:{type:Object},_errorMessage:{type:String},_hasFirstUpdated:{type:Boolean}}}constructor(){super(),this.active=!1,this.loading=!1,this.error=!1,this.settings={},this._errorMessage="",this._hasFirstUpdated=!1}render(){return this.error&&this.dispatchEvent(new CustomEvent("grampsjs:error",{bubbles:!0,composed:!0,detail:{message:this._errorMessage}})),this.renderContent()}firstUpdated(){this._hasFirstUpdated=!0}update(t){super.update(t),t.has("loading")&&(this.loading&&this.active?this.dispatchEvent(new CustomEvent("progress:on",{bubbles:!0,composed:!0})):!this.loading&&this.active&&this.dispatchEvent(new CustomEvent("progress:off",{bubbles:!0,composed:!0}))),t.has("active")&&(this.active?this.loading&&this.dispatchEvent(new CustomEvent("progress:on",{bubbles:!0,composed:!0})):this.dispatchEvent(new CustomEvent("progress:off",{bubbles:!0,composed:!0})))}}class Ad extends(al(K)){static get styles(){return[nl,n`
        .paging {
          font-size: 14px;
          font-size: 14px;
          margin-top: 50px;
          text-align: center;
        }

        .span {
          color: rgba(0, 0, 0, 0.9);
          padding: 0 0.5em;
        }

        mwc-button {
          --mdc-ripple-focus-opacity: 0;
          --mdc-theme-primary: rgba(0, 0, 0, 0.7);
        }

        .pagebtn {
          --mdc-button-horizontal-padding: 0;
        }

        mwc-icon.more {
          color: rgba(0, 0, 0, 0.2);
          position: relative;
          top: 0.35em;
        }
      `]}static get properties(){return{page:{type:Number},pages:{type:Number},link:{type:String}}}constructor(){super(),this.page=1,this.pages=-1}render(){return this.pages<=0?M``:M`
      <div class="paging">
        ${this._renderPrevBtn()} ${this._renderPageBtn(1)}
        ${this.pages>1?this._renderPageBtn(2):""}
        ${this.page-1>3?M`<mwc-icon class="more">more_horiz</mwc-icon>`:""}
        ${this.page-1>2&&this.page-1<this.pages-1?this._renderPageBtn(this.page-1):""}
        ${this.page>2&&this.page<this.pages-1?this._renderPageBtn(this.page):""}
        ${this.page+1>2&&this.page+1<this.pages-1?this._renderPageBtn(this.page+1):""}
        ${this.page+1<this.pages-2?M`<mwc-icon class="more">more_horiz</mwc-icon>`:""}
        ${this.pages>3?this._renderPageBtn(this.pages-1):""}
        ${this.pages>2?this._renderPageBtn(this.pages):""}
        ${this._renderNextBtn()}
        <div></div>
      </div>
    `}_renderPageBtn(t){return M`
      <mwc-button
        width="30px"
        class="pagebtn"
        ?disabled=${this.page===t}
        ?unelevated=${this.page===t}
        @click="${()=>this._changePage(t)}"
        label="${t}"
      >
      </mwc-button>
    `}_renderPrevBtn(){return M`
      <mwc-button
        icon="navigate_before"
        ?disabled=${1===this.page}
        @click="${()=>this._changePage(this.page-1)}"
        label="${this._("Previous")}"
      >
      </mwc-button>
    `}_renderNextBtn(){return M`
      <mwc-button
        icon="navigate_next"
        ?disabled=${this.page===this.pages}
        @click="${()=>this._changePage(this.page+1)}"
        label="${this._("Next")}"
        trailingIcon
      >
      </mwc-button>
    `}_changePage(t){t!==this.page&&(this.page=t,this._fireEvent())}_fireEvent(){this.dispatchEvent(new CustomEvent("page:changed",{bubbles:!0,composed:!0,detail:{page:this.page}}))}}window.customElements.define("grampsjs-pagination",Ad);var Id=["input","button","textarea","select"],Md=function(t){var e=t.target;if(e){var i=(""+e.tagName).toLowerCase();-1===Id.indexOf(i)&&t.preventDefault()}};function Ld(t,e){for(var i=new Map,r=0;r<t;r++){var n=e(r).trim();if(n){var a=n[0].toLowerCase();i.has(a)||i.set(a,[]),i.get(a).push({text:n.toLowerCase(),index:r})}}return i.forEach((function(t){t.sort((function(t,e){return t.index-e.index}))})),i}function Pd(t,e){var i,r=t.nextChar,n=t.focusItemAtIndex,a=t.sortedIndexByFirstChar,s=t.focusedItemIndex,o=t.skipFocus,l=t.isItemAtIndexDisabled;return clearTimeout(e.bufferClearTimeout),e.bufferClearTimeout=setTimeout((function(){!function(t){t.typeaheadBuffer=""}(e)}),_r.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS),e.typeaheadBuffer=e.typeaheadBuffer+r,i=1===e.typeaheadBuffer.length?function(t,e,i,r){var n=r.typeaheadBuffer[0],a=t.get(n);if(!a)return-1;if(n===r.currentFirstChar&&a[r.sortedIndexCursor].index===e){r.sortedIndexCursor=(r.sortedIndexCursor+1)%a.length;var s=a[r.sortedIndexCursor].index;if(!i(s))return s}r.currentFirstChar=n;var o,l=-1;for(o=0;o<a.length;o++)if(!i(a[o].index)){l=o;break}for(;o<a.length;o++)if(a[o].index>e&&!i(a[o].index)){l=o;break}if(-1!==l)return r.sortedIndexCursor=l,a[r.sortedIndexCursor].index;return-1}(a,s,l,e):function(t,e,i){var r=i.typeaheadBuffer[0],n=t.get(r);if(!n)return-1;var a=n[i.sortedIndexCursor];if(0===a.text.lastIndexOf(i.typeaheadBuffer,0)&&!e(a.index))return a.index;var s=(i.sortedIndexCursor+1)%n.length,o=-1;for(;s!==i.sortedIndexCursor;){var l=n[s],c=0===l.text.lastIndexOf(i.typeaheadBuffer,0),d=!e(l.index);if(c&&d){o=s;break}s=(s+1)%n.length}if(-1!==o)return i.sortedIndexCursor=o,n[i.sortedIndexCursor].index;return-1}(a,l,e),-1===i||o||n(i),i}function Rd(t){return t.typeaheadBuffer.length>0}var zd={ACTIVATED:"mdc-select--activated",DISABLED:"mdc-select--disabled",FOCUSED:"mdc-select--focused",INVALID:"mdc-select--invalid",MENU_INVALID:"mdc-select__menu--invalid",OUTLINED:"mdc-select--outlined",REQUIRED:"mdc-select--required",ROOT:"mdc-select",WITH_LEADING_ICON:"mdc-select--with-leading-icon"},Dd={ARIA_CONTROLS:"aria-controls",ARIA_DESCRIBEDBY:"aria-describedby",ARIA_SELECTED_ATTR:"aria-selected",CHANGE_EVENT:"MDCSelect:change",HIDDEN_INPUT_SELECTOR:'input[type="hidden"]',LABEL_SELECTOR:".mdc-floating-label",LEADING_ICON_SELECTOR:".mdc-select__icon",LINE_RIPPLE_SELECTOR:".mdc-line-ripple",MENU_SELECTOR:".mdc-select__menu",OUTLINE_SELECTOR:".mdc-notched-outline",SELECTED_TEXT_SELECTOR:".mdc-select__selected-text",SELECT_ANCHOR_SELECTOR:".mdc-select__anchor",VALUE_ATTR:"data-value"},jd={LABEL_SCALE:.75,UNSET_INDEX:-1,CLICK_DEBOUNCE_TIMEOUT_MS:330},Od=function(t){function e(i,r){void 0===r&&(r={});var n=t.call(this,et(et({},e.defaultAdapter),i))||this;return n.disabled=!1,n.isMenuOpen=!1,n.useDefaultValidation=!0,n.customValidity=!0,n.lastSelectedIndex=jd.UNSET_INDEX,n.clickDebounceTimeout=0,n.recentlyClicked=!1,n.leadingIcon=r.leadingIcon,n.helperText=r.helperText,n}return tt(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return zd},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return jd},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return Dd},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},activateBottomLine:function(){},deactivateBottomLine:function(){},getSelectedIndex:function(){return-1},setSelectedIndex:function(){},hasLabel:function(){return!1},floatLabel:function(){},getLabelWidth:function(){return 0},setLabelRequired:function(){},hasOutline:function(){return!1},notchOutline:function(){},closeOutline:function(){},setRippleCenter:function(){},notifyChange:function(){},setSelectedText:function(){},isSelectAnchorFocused:function(){return!1},getSelectAnchorAttr:function(){return""},setSelectAnchorAttr:function(){},removeSelectAnchorAttr:function(){},addMenuClass:function(){},removeMenuClass:function(){},openMenu:function(){},closeMenu:function(){},getAnchorElement:function(){return null},setMenuAnchorElement:function(){},setMenuAnchorCorner:function(){},setMenuWrapFocus:function(){},focusMenuItemAtIndex:function(){},getMenuItemCount:function(){return 0},getMenuItemValues:function(){return[]},getMenuItemTextAtIndex:function(){return""},isTypeaheadInProgress:function(){return!1},typeaheadMatchItem:function(){return-1}}},enumerable:!1,configurable:!0}),e.prototype.getSelectedIndex=function(){return this.adapter.getSelectedIndex()},e.prototype.setSelectedIndex=function(t,e,i){void 0===e&&(e=!1),void 0===i&&(i=!1),t>=this.adapter.getMenuItemCount()||(t===jd.UNSET_INDEX?this.adapter.setSelectedText(""):this.adapter.setSelectedText(this.adapter.getMenuItemTextAtIndex(t).trim()),this.adapter.setSelectedIndex(t),e&&this.adapter.closeMenu(),i||this.lastSelectedIndex===t||this.handleChange(),this.lastSelectedIndex=t)},e.prototype.setValue=function(t,e){void 0===e&&(e=!1);var i=this.adapter.getMenuItemValues().indexOf(t);this.setSelectedIndex(i,!1,e)},e.prototype.getValue=function(){var t=this.adapter.getSelectedIndex(),e=this.adapter.getMenuItemValues();return t!==jd.UNSET_INDEX?e[t]:""},e.prototype.getDisabled=function(){return this.disabled},e.prototype.setDisabled=function(t){this.disabled=t,this.disabled?(this.adapter.addClass(zd.DISABLED),this.adapter.closeMenu()):this.adapter.removeClass(zd.DISABLED),this.leadingIcon&&this.leadingIcon.setDisabled(this.disabled),this.disabled?this.adapter.removeSelectAnchorAttr("tabindex"):this.adapter.setSelectAnchorAttr("tabindex","0"),this.adapter.setSelectAnchorAttr("aria-disabled",this.disabled.toString())},e.prototype.openMenu=function(){this.adapter.addClass(zd.ACTIVATED),this.adapter.openMenu(),this.isMenuOpen=!0,this.adapter.setSelectAnchorAttr("aria-expanded","true")},e.prototype.setHelperTextContent=function(t){this.helperText&&this.helperText.setContent(t)},e.prototype.layout=function(){if(this.adapter.hasLabel()){var t=this.getValue().length>0,e=this.adapter.hasClass(zd.FOCUSED),i=t||e,r=this.adapter.hasClass(zd.REQUIRED);this.notchOutline(i),this.adapter.floatLabel(i),this.adapter.setLabelRequired(r)}},e.prototype.layoutOptions=function(){var t=this.adapter.getMenuItemValues().indexOf(this.getValue());this.setSelectedIndex(t,!1,!0)},e.prototype.handleMenuOpened=function(){if(0!==this.adapter.getMenuItemValues().length){var t=this.getSelectedIndex(),e=t>=0?t:0;this.adapter.focusMenuItemAtIndex(e)}},e.prototype.handleMenuClosing=function(){this.adapter.setSelectAnchorAttr("aria-expanded","false")},e.prototype.handleMenuClosed=function(){this.adapter.removeClass(zd.ACTIVATED),this.isMenuOpen=!1,this.adapter.isSelectAnchorFocused()||this.blur()},e.prototype.handleChange=function(){this.layout(),this.adapter.notifyChange(this.getValue()),this.adapter.hasClass(zd.REQUIRED)&&this.useDefaultValidation&&this.setValid(this.isValid())},e.prototype.handleMenuItemAction=function(t){this.setSelectedIndex(t,!0)},e.prototype.handleFocus=function(){this.adapter.addClass(zd.FOCUSED),this.layout(),this.adapter.activateBottomLine()},e.prototype.handleBlur=function(){this.isMenuOpen||this.blur()},e.prototype.handleClick=function(t){this.disabled||this.recentlyClicked||(this.setClickDebounceTimeout(),this.isMenuOpen?this.adapter.closeMenu():(this.adapter.setRippleCenter(t),this.openMenu()))},e.prototype.handleKeydown=function(t){if(!this.isMenuOpen&&this.adapter.hasClass(zd.FOCUSED)){var e=or(t)===Ni.ENTER,i=or(t)===Ni.SPACEBAR,r=or(t)===Ni.ARROW_UP,n=or(t)===Ni.ARROW_DOWN;if(!(t.ctrlKey||t.metaKey)&&(!i&&t.key&&1===t.key.length||i&&this.adapter.isTypeaheadInProgress())){var a=i?" ":t.key,s=this.adapter.typeaheadMatchItem(a,this.getSelectedIndex());return s>=0&&this.setSelectedIndex(s),void t.preventDefault()}(e||i||r||n)&&(this.openMenu(),t.preventDefault())}},e.prototype.notchOutline=function(t){if(this.adapter.hasOutline()){var e=this.adapter.hasClass(zd.FOCUSED);if(t){var i=jd.LABEL_SCALE,r=this.adapter.getLabelWidth()*i;this.adapter.notchOutline(r)}else e||this.adapter.closeOutline()}},e.prototype.setLeadingIconAriaLabel=function(t){this.leadingIcon&&this.leadingIcon.setAriaLabel(t)},e.prototype.setLeadingIconContent=function(t){this.leadingIcon&&this.leadingIcon.setContent(t)},e.prototype.getUseDefaultValidation=function(){return this.useDefaultValidation},e.prototype.setUseDefaultValidation=function(t){this.useDefaultValidation=t},e.prototype.setValid=function(t){this.useDefaultValidation||(this.customValidity=t),this.adapter.setSelectAnchorAttr("aria-invalid",(!t).toString()),t?(this.adapter.removeClass(zd.INVALID),this.adapter.removeMenuClass(zd.MENU_INVALID)):(this.adapter.addClass(zd.INVALID),this.adapter.addMenuClass(zd.MENU_INVALID)),this.syncHelperTextValidity(t)},e.prototype.isValid=function(){return this.useDefaultValidation&&this.adapter.hasClass(zd.REQUIRED)&&!this.adapter.hasClass(zd.DISABLED)?this.getSelectedIndex()!==jd.UNSET_INDEX&&(0!==this.getSelectedIndex()||Boolean(this.getValue())):this.customValidity},e.prototype.setRequired=function(t){t?this.adapter.addClass(zd.REQUIRED):this.adapter.removeClass(zd.REQUIRED),this.adapter.setSelectAnchorAttr("aria-required",t.toString()),this.adapter.setLabelRequired(t)},e.prototype.getRequired=function(){return"true"===this.adapter.getSelectAnchorAttr("aria-required")},e.prototype.init=function(){var t=this.adapter.getAnchorElement();t&&(this.adapter.setMenuAnchorElement(t),this.adapter.setMenuAnchorCorner(Ar.BOTTOM_START)),this.adapter.setMenuWrapFocus(!1),this.setDisabled(this.adapter.hasClass(zd.DISABLED)),this.syncHelperTextValidity(!this.adapter.hasClass(zd.INVALID)),this.layout(),this.layoutOptions()},e.prototype.blur=function(){this.adapter.removeClass(zd.FOCUSED),this.layout(),this.adapter.deactivateBottomLine(),this.adapter.hasClass(zd.REQUIRED)&&this.useDefaultValidation&&this.setValid(this.isValid())},e.prototype.syncHelperTextValidity=function(t){if(this.helperText){this.helperText.setValidity(t);var e=this.helperText.isVisible(),i=this.helperText.getId();e&&i?this.adapter.setSelectAnchorAttr(Dd.ARIA_DESCRIBEDBY,i):this.adapter.removeSelectAnchorAttr(Dd.ARIA_DESCRIBEDBY)}},e.prototype.setClickDebounceTimeout=function(){var t=this;clearTimeout(this.clickDebounceTimeout),this.clickDebounceTimeout=setTimeout((function(){t.recentlyClicked=!1}),jd.CLICK_DEBOUNCE_TIMEOUT_MS),this.recentlyClicked=!0},e}(vt);const Bd=(t={})=>{const e={};for(const i in t)e[i]=t[i];return Object.assign({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1},e)};class Fd extends hi{constructor(){super(...arguments),this.mdcFoundationClass=Od,this.disabled=!1,this.outlined=!1,this.label="",this.outlineOpen=!1,this.outlineWidth=0,this.value="",this.name="",this.selectedText="",this.icon="",this.menuOpen=!1,this.helper="",this.validateOnInitialRender=!1,this.validationMessage="",this.required=!1,this.naturalMenuWidth=!1,this.isUiValid=!0,this.fixedMenuPosition=!1,this.typeaheadState={bufferClearTimeout:0,currentFirstChar:"",sortedIndexCursor:0,typeaheadBuffer:""},this.sortedIndexByFirstChar=new Map,this.menuElement_=null,this.listeners=[],this.onBodyClickBound=()=>{},this._menuUpdateComplete=null,this.valueSetDirectly=!1,this.validityTransform=null,this._validity=Bd()}get items(){return this.menuElement_||(this.menuElement_=this.menuElement),this.menuElement_?this.menuElement_.items:[]}get selected(){const t=this.menuElement;return t?t.selected:null}get index(){const t=this.menuElement;return t?t.index:-1}get shouldRenderHelperText(){return!!this.helper||!!this.validationMessage}get validity(){return this._checkValidity(this.value),this._validity}render(){const t={"mdc-select--disabled":this.disabled,"mdc-select--no-label":!this.label,"mdc-select--filled":!this.outlined,"mdc-select--outlined":this.outlined,"mdc-select--with-leading-icon":!!this.icon,"mdc-select--required":this.required,"mdc-select--invalid":!this.isUiValid},e=this.label?"label":void 0,i=this.shouldRenderHelperText?"helper-text":void 0;return M`
      <div
          class="mdc-select ${Ot(t)}">
        <input
            class="formElement"
            name="${this.name}"
            .value="${this.value}"
            hidden
            ?disabled="${this.disabled}"
            ?required=${this.required}>
        <!-- @ts-ignore -->
        <div class="mdc-select__anchor"
            aria-autocomplete="none"
            role="combobox"
            aria-expanded=${this.menuOpen}
            aria-invalid=${!this.isUiValid}
            aria-haspopup="listbox"
            aria-labelledby=${Ke(e)}
            aria-required=${this.required}
            aria-describedby=${Ke(i)}
            @click=${this.onClick}
            @focus=${this.onFocus}
            @blur=${this.onBlur}
            @keydown=${this.onKeydown}>
          ${this.renderRipple()}
          ${this.outlined?this.renderOutline():this.renderLabel()}
          ${this.renderLeadingIcon()}
          <span class="mdc-select__selected-text-container">
            <span class="mdc-select__selected-text">${this.selectedText}</span>
          </span>
          <span class="mdc-select__dropdown-icon">
            <svg
                class="mdc-select__dropdown-icon-graphic"
                viewBox="7 10 10 5"
                focusable="false">
              <polygon
                  class="mdc-select__dropdown-icon-inactive"
                  stroke="none"
                  fill-rule="evenodd"
                  points="7 10 12 15 17 10">
              </polygon>
              <polygon
                  class="mdc-select__dropdown-icon-active"
                  stroke="none"
                  fill-rule="evenodd"
                  points="7 15 12 10 17 15">
              </polygon>
            </svg>
          </span>
          ${this.renderLineRipple()}
        </div>
        ${this.renderMenu()}
      </div>
      ${this.renderHelperText()}`}renderMenu(){const t=this.getMenuClasses();return M`
      <mwc-menu
        innerRole="listbox"
        wrapFocus
        class=" ${Ot(t)}"
        activatable
        .fullwidth=${!this.fixedMenuPosition&&!this.naturalMenuWidth}
        .open=${this.menuOpen}
        .anchor=${this.anchorElement}
        .fixed=${this.fixedMenuPosition}
        @selected=${this.onSelected}
        @opened=${this.onOpened}
        @closed=${this.onClosed}
        @items-updated=${this.onItemsUpdated}
        @keydown=${this.handleTypeahead}>
      ${this.renderMenuContent()}
    </mwc-menu>`}getMenuClasses(){return{"mdc-select__menu":!0,"mdc-menu":!0,"mdc-menu-surface":!0,"mdc-select__menu--invalid":!this.isUiValid}}renderMenuContent(){return M`<slot></slot>`}renderRipple(){return this.outlined?R:M`
      <span class="mdc-select__ripple"></span>
    `}renderOutline(){return this.outlined?M`
      <mwc-notched-outline
          .width=${this.outlineWidth}
          .open=${this.outlineOpen}
          class="mdc-notched-outline">
        ${this.renderLabel()}
      </mwc-notched-outline>`:R}renderLabel(){return this.label?M`
      <span
          .floatingLabelFoundation=${mi(this.label)}
          id="label">${this.label}</span>
    `:R}renderLeadingIcon(){return this.icon?M`<mwc-icon class="mdc-select__icon"><div>${this.icon}</div></mwc-icon>`:R}renderLineRipple(){return this.outlined?R:M`
      <span .lineRippleFoundation=${_i()}></span>
    `}renderHelperText(){if(!this.shouldRenderHelperText)return R;const t=this.validationMessage&&!this.isUiValid;return M`
        <p
          class="mdc-select-helper-text ${Ot({"mdc-select-helper-text--validation-msg":t})}"
          id="helper-text">${t?this.validationMessage:this.helper}</p>`}createAdapter(){return Object.assign(Object.assign({},kt(this.mdcRoot)),{activateBottomLine:()=>{this.lineRippleElement&&this.lineRippleElement.lineRippleFoundation.activate()},deactivateBottomLine:()=>{this.lineRippleElement&&this.lineRippleElement.lineRippleFoundation.deactivate()},hasLabel:()=>!!this.label,floatLabel:t=>{this.labelElement&&this.labelElement.floatingLabelFoundation.float(t)},getLabelWidth:()=>this.labelElement?this.labelElement.floatingLabelFoundation.getWidth():0,setLabelRequired:t=>{this.labelElement&&this.labelElement.floatingLabelFoundation.setRequired(t)},hasOutline:()=>this.outlined,notchOutline:t=>{this.outlineElement&&!this.outlineOpen&&(this.outlineWidth=t,this.outlineOpen=!0)},closeOutline:()=>{this.outlineElement&&(this.outlineOpen=!1)},setRippleCenter:t=>{if(this.lineRippleElement){this.lineRippleElement.lineRippleFoundation.setRippleCenter(t)}},notifyChange:async t=>{if(!this.valueSetDirectly&&t===this.value)return;this.valueSetDirectly=!1,this.value=t,await this.updateComplete;const e=new Event("change",{bubbles:!0});this.dispatchEvent(e)},setSelectedText:t=>this.selectedText=t,isSelectAnchorFocused:()=>{const t=this.anchorElement;if(!t)return!1;return t.getRootNode().activeElement===t},getSelectAnchorAttr:t=>{const e=this.anchorElement;return e?e.getAttribute(t):null},setSelectAnchorAttr:(t,e)=>{const i=this.anchorElement;i&&i.setAttribute(t,e)},removeSelectAnchorAttr:t=>{const e=this.anchorElement;e&&e.removeAttribute(t)},openMenu:()=>{this.menuOpen=!0},closeMenu:()=>{this.menuOpen=!1},addMenuClass:()=>{},removeMenuClass:()=>{},getAnchorElement:()=>this.anchorElement,setMenuAnchorElement:()=>{},setMenuAnchorCorner:()=>{const t=this.menuElement;t&&(t.corner="BOTTOM_START")},setMenuWrapFocus:t=>{const e=this.menuElement;e&&(e.wrapFocus=t)},focusMenuItemAtIndex:t=>{const e=this.menuElement;if(!e)return;const i=e.items[t];i&&i.focus()},getMenuItemCount:()=>{const t=this.menuElement;return t?t.items.length:0},getMenuItemValues:()=>{const t=this.menuElement;if(!t)return[];return t.items.map((t=>t.value))},getMenuItemTextAtIndex:t=>{const e=this.menuElement;if(!e)return"";const i=e.items[t];return i?i.text:""},getSelectedIndex:()=>this.index,setSelectedIndex:()=>{},isTypeaheadInProgress:()=>Rd(this.typeaheadState),typeaheadMatchItem:(t,e)=>{if(!this.menuElement)return-1;const i={focusItemAtIndex:t=>{this.menuElement.focusItemAtIndex(t)},focusedItemIndex:e||this.menuElement.getFocusedItemIndex(),nextChar:t,sortedIndexByFirstChar:this.sortedIndexByFirstChar,skipFocus:!1,isItemAtIndexDisabled:t=>this.items[t].disabled},r=Pd(i,this.typeaheadState);return-1!==r&&this.select(r),r}})}checkValidity(){const t=this._checkValidity(this.value);if(!t){const t=new Event("invalid",{bubbles:!1,cancelable:!0});this.dispatchEvent(t)}return t}reportValidity(){const t=this.checkValidity();return this.isUiValid=t,t}_checkValidity(t){const e=this.formElement.validity;let i=Bd(e);if(this.validityTransform){const e=this.validityTransform(t,i);i=Object.assign(Object.assign({},i),e)}return this._validity=i,this._validity.valid}setCustomValidity(t){this.validationMessage=t,this.formElement.setCustomValidity(t)}async getUpdateComplete(){await this._menuUpdateComplete;return await super.getUpdateComplete()}async firstUpdated(){const t=this.menuElement;if(t&&(this._menuUpdateComplete=t.updateComplete,await this._menuUpdateComplete),super.firstUpdated(),this.mdcFoundation.isValid=()=>!0,this.mdcFoundation.setValid=()=>{},this.mdcFoundation.setDisabled(this.disabled),this.validateOnInitialRender&&this.reportValidity(),!this.selected){!this.items.length&&this.slotElement&&this.slotElement.assignedNodes({flatten:!0}).length&&(await new Promise((t=>requestAnimationFrame(t))),await this.layout());const t=this.items.length&&""===this.items[0].value;if(!this.value&&t)return void this.select(0);this.selectByValue(this.value)}this.sortedIndexByFirstChar=Ld(this.items.length,(t=>this.items[t].text))}onItemsUpdated(){this.sortedIndexByFirstChar=Ld(this.items.length,(t=>this.items[t].text))}select(t){const e=this.menuElement;e&&e.select(t)}selectByValue(t){let e=-1;for(let i=0;i<this.items.length;i++){if(this.items[i].value===t){e=i;break}}this.valueSetDirectly=!0,this.select(e),this.mdcFoundation.handleChange()}disconnectedCallback(){super.disconnectedCallback();for(const t of this.listeners)t.target.removeEventListener(t.name,t.cb)}focus(){const t=new CustomEvent("focus"),e=this.anchorElement;e&&(e.dispatchEvent(t),e.focus())}blur(){const t=new CustomEvent("blur"),e=this.anchorElement;e&&(e.dispatchEvent(t),e.blur())}onFocus(){this.mdcFoundation&&this.mdcFoundation.handleFocus()}onBlur(){this.mdcFoundation&&this.mdcFoundation.handleBlur();const t=this.menuElement;t&&!t.open&&this.reportValidity()}onClick(t){if(this.mdcFoundation){this.focus();const e=t.target.getBoundingClientRect();let i=0;i="touches"in t?t.touches[0].clientX:t.clientX;const r=i-e.left;this.mdcFoundation.handleClick(r)}}onKeydown(t){const e=or(t)===Ni.ARROW_UP,i=or(t)===Ni.ARROW_DOWN;if(i||e){const r=e&&this.index>0,n=i&&this.index<this.items.length-1;return r?this.select(this.index-1):n&&this.select(this.index+1),t.preventDefault(),void this.mdcFoundation.openMenu()}this.mdcFoundation.handleKeydown(t)}handleTypeahead(t){if(!this.menuElement)return;const e=this.menuElement.getFocusedItemIndex(),i=wt(t.target)?t.target:null;!function(t,e){var i=t.event,r=t.isTargetListItem,n=t.focusedItemIndex,a=t.focusItemAtIndex,s=t.sortedIndexByFirstChar,o=t.isItemAtIndexDisabled,l="ArrowLeft"===or(i),c="ArrowUp"===or(i),d="ArrowRight"===or(i),h="ArrowDown"===or(i),p="Home"===or(i),u="End"===or(i),m="Enter"===or(i),f="Spacebar"===or(i);i.altKey||i.ctrlKey||i.metaKey||l||c||d||h||p||u||m||(f||1!==i.key.length?f&&(r&&Md(i),r&&Rd(e)&&Pd({focusItemAtIndex:a,focusedItemIndex:n,nextChar:" ",sortedIndexByFirstChar:s,skipFocus:!1,isItemAtIndexDisabled:o},e)):(Md(i),Pd({focusItemAtIndex:a,focusedItemIndex:n,nextChar:i.key.toLowerCase(),sortedIndexByFirstChar:s,skipFocus:!1,isItemAtIndexDisabled:o},e)))}({event:t,focusItemAtIndex:t=>{this.menuElement.focusItemAtIndex(t)},focusedItemIndex:e,isTargetListItem:!!i&&i.hasAttribute("mwc-list-item"),sortedIndexByFirstChar:this.sortedIndexByFirstChar,isItemAtIndexDisabled:t=>this.items[t].disabled},this.typeaheadState)}async onSelected(t){this.mdcFoundation||await this.updateComplete,this.mdcFoundation.handleMenuItemAction(t.detail.index);const e=this.items[t.detail.index];e&&(this.value=e.value)}onOpened(){this.mdcFoundation&&(this.menuOpen=!0,this.mdcFoundation.handleMenuOpened())}onClosed(){this.mdcFoundation&&(this.menuOpen=!1,this.mdcFoundation.handleMenuClosed())}setFormData(t){this.name&&null!==this.selected&&t.append(this.name,this.value)}async layout(t=!0){this.mdcFoundation&&this.mdcFoundation.layout(),await this.updateComplete;const e=this.menuElement;e&&e.layout(t);const i=this.labelElement;if(!i)return void(this.outlineOpen=!1);const r=!!this.label&&!!this.value;if(i.floatingLabelFoundation.float(r),!this.outlined)return;this.outlineOpen=r,await this.updateComplete;const n=i.floatingLabelFoundation.getWidth();this.outlineOpen&&(this.outlineWidth=n)}async layoutOptions(){this.mdcFoundation&&this.mdcFoundation.layoutOptions()}}it([ht(".mdc-select")],Fd.prototype,"mdcRoot",void 0),it([ht(".formElement")],Fd.prototype,"formElement",void 0),it([ht("slot")],Fd.prototype,"slotElement",void 0),it([ht("select")],Fd.prototype,"nativeSelectElement",void 0),it([ht("input")],Fd.prototype,"nativeInputElement",void 0),it([ht(".mdc-line-ripple")],Fd.prototype,"lineRippleElement",void 0),it([ht(".mdc-floating-label")],Fd.prototype,"labelElement",void 0),it([ht("mwc-notched-outline")],Fd.prototype,"outlineElement",void 0),it([ht(".mdc-menu")],Fd.prototype,"menuElement",void 0),it([ht(".mdc-select__anchor")],Fd.prototype,"anchorElement",void 0),it([ot({type:Boolean,attribute:"disabled",reflect:!0}),Mt((function(t){this.mdcFoundation&&this.mdcFoundation.setDisabled(t)}))],Fd.prototype,"disabled",void 0),it([ot({type:Boolean}),Mt((function(t,e){void 0!==e&&this.outlined!==e&&this.layout(!1)}))],Fd.prototype,"outlined",void 0),it([ot({type:String}),Mt((function(t,e){void 0!==e&&this.label!==e&&this.layout(!1)}))],Fd.prototype,"label",void 0),it([lt()],Fd.prototype,"outlineOpen",void 0),it([lt()],Fd.prototype,"outlineWidth",void 0),it([ot({type:String}),Mt((function(t){if(this.mdcFoundation){const e=null===this.selected&&!!t,i=this.selected&&this.selected.value!==t;(e||i)&&this.selectByValue(t),this.reportValidity()}}))],Fd.prototype,"value",void 0),it([ot()],Fd.prototype,"name",void 0),it([lt()],Fd.prototype,"selectedText",void 0),it([ot({type:String})],Fd.prototype,"icon",void 0),it([lt()],Fd.prototype,"menuOpen",void 0),it([ot({type:String})],Fd.prototype,"helper",void 0),it([ot({type:Boolean})],Fd.prototype,"validateOnInitialRender",void 0),it([ot({type:String})],Fd.prototype,"validationMessage",void 0),it([ot({type:Boolean})],Fd.prototype,"required",void 0),it([ot({type:Boolean})],Fd.prototype,"naturalMenuWidth",void 0),it([lt()],Fd.prototype,"isUiValid",void 0),it([ot({type:Boolean})],Fd.prototype,"fixedMenuPosition",void 0),it([dt({capture:!0})],Fd.prototype,"handleTypeahead",null);const Nd=n`.mdc-floating-label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);position:absolute;left:0;-webkit-transform-origin:left top;transform-origin:left top;line-height:1.15rem;text-align:left;text-overflow:ellipsis;white-space:nowrap;cursor:text;overflow:hidden;will-change:transform;transition:transform 150ms cubic-bezier(0.4, 0, 0.2, 1),color 150ms cubic-bezier(0.4, 0, 0.2, 1)}[dir=rtl] .mdc-floating-label,.mdc-floating-label[dir=rtl]{right:0;left:auto;-webkit-transform-origin:right top;transform-origin:right top;text-align:right}.mdc-floating-label--float-above{cursor:auto}.mdc-floating-label--required::after{margin-left:1px;margin-right:0px;content:"*"}[dir=rtl] .mdc-floating-label--required::after,.mdc-floating-label--required[dir=rtl]::after{margin-left:0;margin-right:1px}.mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-standard 250ms 1}@keyframes mdc-floating-label-shake-float-above-standard{0%{transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-106%) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-106%) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-line-ripple::before,.mdc-line-ripple::after{position:absolute;bottom:0;left:0;width:100%;border-bottom-style:solid;content:""}.mdc-line-ripple::before{border-bottom-width:1px}.mdc-line-ripple::before{z-index:1}.mdc-line-ripple::after{transform:scaleX(0);border-bottom-width:2px;opacity:0;z-index:2}.mdc-line-ripple::after{transition:transform 180ms cubic-bezier(0.4, 0, 0.2, 1),opacity 180ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-line-ripple--active::after{transform:scaleX(1);opacity:1}.mdc-line-ripple--deactivating::after{opacity:0}.mdc-notched-outline{display:flex;position:absolute;top:0;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] .mdc-notched-outline,.mdc-notched-outline[dir=rtl]{text-align:right}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{box-sizing:border-box;height:100%;border-top:1px solid;border-bottom:1px solid;pointer-events:none}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;width:12px}[dir=rtl] .mdc-notched-outline__leading,.mdc-notched-outline__leading[dir=rtl]{border-left:none;border-right:1px solid}.mdc-notched-outline__trailing{border-left:none;border-right:1px solid;flex-grow:1}[dir=rtl] .mdc-notched-outline__trailing,.mdc-notched-outline__trailing[dir=rtl]{border-left:1px solid;border-right:none}.mdc-notched-outline__notch{flex:0 0 auto;width:auto;max-width:calc(100% - 12px * 2)}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;max-width:100%}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:calc(100% / 0.75)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none}[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch,.mdc-notched-outline--notched .mdc-notched-outline__notch[dir=rtl]{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{display:none}.mdc-select{display:inline-flex;position:relative}.mdc-select:not(.mdc-select--disabled) .mdc-select__selected-text{color:rgba(0, 0, 0, 0.87)}.mdc-select.mdc-select--disabled .mdc-select__selected-text{color:rgba(0, 0, 0, 0.38)}.mdc-select:not(.mdc-select--disabled) .mdc-floating-label{color:rgba(0, 0, 0, 0.6)}.mdc-select:not(.mdc-select--disabled).mdc-select--focused .mdc-floating-label{color:rgba(98, 0, 238, 0.87)}.mdc-select.mdc-select--disabled .mdc-floating-label{color:rgba(0, 0, 0, 0.38)}.mdc-select:not(.mdc-select--disabled) .mdc-select__dropdown-icon{fill:rgba(0, 0, 0, 0.54)}.mdc-select:not(.mdc-select--disabled).mdc-select--focused .mdc-select__dropdown-icon{fill:#6200ee;fill:var(--mdc-theme-primary, #6200ee)}.mdc-select.mdc-select--disabled .mdc-select__dropdown-icon{fill:rgba(0, 0, 0, 0.38)}.mdc-select:not(.mdc-select--disabled)+.mdc-select-helper-text{color:rgba(0, 0, 0, 0.6)}.mdc-select.mdc-select--disabled+.mdc-select-helper-text{color:rgba(0, 0, 0, 0.38)}.mdc-select:not(.mdc-select--disabled) .mdc-select__icon{color:rgba(0, 0, 0, 0.54)}.mdc-select.mdc-select--disabled .mdc-select__icon{color:rgba(0, 0, 0, 0.38)}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-select.mdc-select--disabled .mdc-select__selected-text{color:GrayText}.mdc-select.mdc-select--disabled .mdc-select__dropdown-icon{fill:red}.mdc-select.mdc-select--disabled .mdc-floating-label{color:GrayText}.mdc-select.mdc-select--disabled .mdc-line-ripple::before{border-bottom-color:GrayText}.mdc-select.mdc-select--disabled .mdc-notched-outline__leading,.mdc-select.mdc-select--disabled .mdc-notched-outline__notch,.mdc-select.mdc-select--disabled .mdc-notched-outline__trailing{border-color:GrayText}.mdc-select.mdc-select--disabled .mdc-select__icon{color:GrayText}.mdc-select.mdc-select--disabled+.mdc-select-helper-text{color:GrayText}}.mdc-select .mdc-floating-label{top:50%;transform:translateY(-50%);pointer-events:none}.mdc-select .mdc-select__anchor{padding-left:16px;padding-right:0}[dir=rtl] .mdc-select .mdc-select__anchor,.mdc-select .mdc-select__anchor[dir=rtl]{padding-left:0;padding-right:16px}.mdc-select.mdc-select--with-leading-icon .mdc-select__anchor{padding-left:0;padding-right:0}[dir=rtl] .mdc-select.mdc-select--with-leading-icon .mdc-select__anchor,.mdc-select.mdc-select--with-leading-icon .mdc-select__anchor[dir=rtl]{padding-left:0;padding-right:0}.mdc-select .mdc-select__icon{width:24px;height:24px;font-size:24px}.mdc-select .mdc-select__dropdown-icon{width:24px;height:24px}.mdc-select .mdc-select__menu .mdc-deprecated-list-item{padding-left:16px;padding-right:16px}[dir=rtl] .mdc-select .mdc-select__menu .mdc-deprecated-list-item,.mdc-select .mdc-select__menu .mdc-deprecated-list-item[dir=rtl]{padding-left:16px;padding-right:16px}.mdc-select .mdc-select__menu .mdc-deprecated-list-item__graphic{margin-left:0;margin-right:12px}[dir=rtl] .mdc-select .mdc-select__menu .mdc-deprecated-list-item__graphic,.mdc-select .mdc-select__menu .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:12px;margin-right:0}.mdc-select__dropdown-icon{margin-left:12px;margin-right:12px;display:inline-flex;position:relative;align-self:center;align-items:center;justify-content:center;flex-shrink:0;pointer-events:none}.mdc-select__dropdown-icon .mdc-select__dropdown-icon-active,.mdc-select__dropdown-icon .mdc-select__dropdown-icon-inactive{position:absolute;top:0;left:0}.mdc-select__dropdown-icon .mdc-select__dropdown-icon-graphic{width:41.6666666667%;height:20.8333333333%}.mdc-select__dropdown-icon .mdc-select__dropdown-icon-inactive{opacity:1;transition:opacity 75ms linear 75ms}.mdc-select__dropdown-icon .mdc-select__dropdown-icon-active{opacity:0;transition:opacity 75ms linear}[dir=rtl] .mdc-select__dropdown-icon,.mdc-select__dropdown-icon[dir=rtl]{margin-left:12px;margin-right:12px}.mdc-select--activated .mdc-select__dropdown-icon .mdc-select__dropdown-icon-inactive{opacity:0;transition:opacity 49.5ms linear}.mdc-select--activated .mdc-select__dropdown-icon .mdc-select__dropdown-icon-active{opacity:1;transition:opacity 100.5ms linear 49.5ms}.mdc-select__anchor{width:200px;min-width:0;flex:1 1 auto;position:relative;box-sizing:border-box;overflow:hidden;outline:none;cursor:pointer}.mdc-select__anchor .mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-select__selected-text-container{display:flex;appearance:none;pointer-events:none;box-sizing:border-box;width:auto;min-width:0;flex-grow:1;height:28px;border:none;outline:none;padding:0;background-color:transparent;color:inherit}.mdc-select__selected-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);line-height:1.75rem;line-height:var(--mdc-typography-subtitle1-line-height, 1.75rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;width:100%;text-align:left}[dir=rtl] .mdc-select__selected-text,.mdc-select__selected-text[dir=rtl]{text-align:right}.mdc-select--invalid:not(.mdc-select--disabled) .mdc-floating-label{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-floating-label{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--invalid+.mdc-select-helper-text--validation-msg{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled) .mdc-select__dropdown-icon{fill:#b00020;fill:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-select__dropdown-icon{fill:#b00020;fill:var(--mdc-theme-error, #b00020)}.mdc-select--disabled{cursor:default;pointer-events:none}.mdc-select--with-leading-icon .mdc-select__menu .mdc-deprecated-list-item{padding-left:12px;padding-right:12px}[dir=rtl] .mdc-select--with-leading-icon .mdc-select__menu .mdc-deprecated-list-item,.mdc-select--with-leading-icon .mdc-select__menu .mdc-deprecated-list-item[dir=rtl]{padding-left:12px;padding-right:12px}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-select__menu::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid transparent;border-radius:inherit;content:"";pointer-events:none}}@media screen and (forced-colors: active)and (forced-colors: active),screen and (-ms-high-contrast: active)and (forced-colors: active){.mdc-select__menu::before{border-color:CanvasText}}.mdc-select__menu .mdc-deprecated-list .mdc-select__icon,.mdc-select__menu .mdc-list .mdc-select__icon{margin-left:0;margin-right:0}[dir=rtl] .mdc-select__menu .mdc-deprecated-list .mdc-select__icon,[dir=rtl] .mdc-select__menu .mdc-list .mdc-select__icon,.mdc-select__menu .mdc-deprecated-list .mdc-select__icon[dir=rtl],.mdc-select__menu .mdc-list .mdc-select__icon[dir=rtl]{margin-left:0;margin-right:0}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--activated,.mdc-select__menu .mdc-list .mdc-deprecated-list-item--selected,.mdc-select__menu .mdc-list .mdc-deprecated-list-item--activated{color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected .mdc-deprecated-list-item__graphic,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--activated .mdc-deprecated-list-item__graphic,.mdc-select__menu .mdc-list .mdc-deprecated-list-item--selected .mdc-deprecated-list-item__graphic,.mdc-select__menu .mdc-list .mdc-deprecated-list-item--activated .mdc-deprecated-list-item__graphic{color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-select__menu .mdc-list-item__start{display:inline-flex;align-items:center}.mdc-select__option{padding-left:16px;padding-right:16px}[dir=rtl] .mdc-select__option,.mdc-select__option[dir=rtl]{padding-left:16px;padding-right:16px}.mdc-select__one-line-option.mdc-list-item--with-one-line{height:48px}.mdc-select__two-line-option.mdc-list-item--with-two-lines{height:64px}.mdc-select__two-line-option.mdc-list-item--with-two-lines .mdc-list-item__start{margin-top:20px}.mdc-select__two-line-option.mdc-list-item--with-two-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-select__two-line-option.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before{display:inline-block;width:0;height:28px;content:"";vertical-align:0}.mdc-select__two-line-option.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-select__two-line-option.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end{display:block;margin-top:0;line-height:normal}.mdc-select__two-line-option.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before{display:inline-block;width:0;height:36px;content:"";vertical-align:0}.mdc-select__option-with-leading-content{padding-left:0;padding-right:12px}.mdc-select__option-with-leading-content.mdc-list-item{padding-left:0;padding-right:auto}[dir=rtl] .mdc-select__option-with-leading-content.mdc-list-item,.mdc-select__option-with-leading-content.mdc-list-item[dir=rtl]{padding-left:auto;padding-right:0}.mdc-select__option-with-leading-content .mdc-list-item__start{margin-left:12px;margin-right:0}[dir=rtl] .mdc-select__option-with-leading-content .mdc-list-item__start,.mdc-select__option-with-leading-content .mdc-list-item__start[dir=rtl]{margin-left:0;margin-right:12px}.mdc-select__option-with-leading-content .mdc-list-item__start{width:36px;height:24px}[dir=rtl] .mdc-select__option-with-leading-content,.mdc-select__option-with-leading-content[dir=rtl]{padding-left:12px;padding-right:0}.mdc-select__option-with-meta.mdc-list-item{padding-left:auto;padding-right:0}[dir=rtl] .mdc-select__option-with-meta.mdc-list-item,.mdc-select__option-with-meta.mdc-list-item[dir=rtl]{padding-left:0;padding-right:auto}.mdc-select__option-with-meta .mdc-list-item__end{margin-left:12px;margin-right:12px}[dir=rtl] .mdc-select__option-with-meta .mdc-list-item__end,.mdc-select__option-with-meta .mdc-list-item__end[dir=rtl]{margin-left:12px;margin-right:12px}.mdc-select--filled .mdc-select__anchor{height:56px;display:flex;align-items:baseline}.mdc-select--filled .mdc-select__anchor::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}.mdc-select--filled.mdc-select--no-label .mdc-select__anchor .mdc-select__selected-text::before{content:"​"}.mdc-select--filled.mdc-select--no-label .mdc-select__anchor .mdc-select__selected-text-container{height:100%;display:inline-flex;align-items:center}.mdc-select--filled.mdc-select--no-label .mdc-select__anchor::before{display:none}.mdc-select--filled .mdc-select__anchor{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:0;border-bottom-left-radius:0}.mdc-select--filled:not(.mdc-select--disabled) .mdc-select__anchor{background-color:whitesmoke}.mdc-select--filled.mdc-select--disabled .mdc-select__anchor{background-color:#fafafa}.mdc-select--filled:not(.mdc-select--disabled) .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.42)}.mdc-select--filled:not(.mdc-select--disabled):hover .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.87)}.mdc-select--filled:not(.mdc-select--disabled) .mdc-line-ripple::after{border-bottom-color:#6200ee;border-bottom-color:var(--mdc-theme-primary, #6200ee)}.mdc-select--filled.mdc-select--disabled .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.06)}.mdc-select--filled .mdc-floating-label{max-width:calc(100% - 64px)}.mdc-select--filled .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 64px / 0.75)}.mdc-select--filled .mdc-menu-surface--is-open-below{border-top-left-radius:0px;border-top-right-radius:0px}.mdc-select--filled.mdc-select--focused.mdc-line-ripple::after{transform:scale(1, 2);opacity:1}.mdc-select--filled .mdc-floating-label{left:16px;right:initial}[dir=rtl] .mdc-select--filled .mdc-floating-label,.mdc-select--filled .mdc-floating-label[dir=rtl]{left:initial;right:16px}.mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label{left:48px;right:initial}[dir=rtl] .mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label,.mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label[dir=rtl]{left:initial;right:48px}.mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label{max-width:calc(100% - 96px)}.mdc-select--filled.mdc-select--with-leading-icon .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 96px / 0.75)}.mdc-select--invalid:not(.mdc-select--disabled) .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled):hover .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled) .mdc-line-ripple::after{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-select--outlined{border:none}.mdc-select--outlined .mdc-select__anchor{height:56px}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--float-above{transform:translateY(-37.25px) scale(1)}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--float-above{font-size:.75rem}.mdc-select--outlined .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) scale(0.75)}.mdc-select--outlined .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined-56px 250ms 1}@keyframes mdc-floating-label-shake-float-above-select-outlined-56px{0%{transform:translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-34.75px) scale(0.75)}}.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}[dir=rtl] .mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading[dir=rtl]{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}@supports(top: max(0%)){.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading{width:max(12px, var(--mdc-shape-small, 4px))}}@supports(top: max(0%)){.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__notch{max-width:calc(100% - max(12px, var(--mdc-shape-small, 4px)) * 2)}}.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__trailing{border-top-left-radius:0;border-top-right-radius:4px;border-top-right-radius:var(--mdc-shape-small, 4px);border-bottom-right-radius:4px;border-bottom-right-radius:var(--mdc-shape-small, 4px);border-bottom-left-radius:0}[dir=rtl] .mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__trailing,.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl]{border-top-left-radius:4px;border-top-left-radius:var(--mdc-shape-small, 4px);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;border-bottom-left-radius:var(--mdc-shape-small, 4px)}@supports(top: max(0%)){.mdc-select--outlined .mdc-select__anchor{padding-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}[dir=rtl] .mdc-select--outlined .mdc-select__anchor,.mdc-select--outlined .mdc-select__anchor[dir=rtl]{padding-left:0}@supports(top: max(0%)){[dir=rtl] .mdc-select--outlined .mdc-select__anchor,.mdc-select--outlined .mdc-select__anchor[dir=rtl]{padding-right:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}@supports(top: max(0%)){.mdc-select--outlined+.mdc-select-helper-text{margin-left:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}[dir=rtl] .mdc-select--outlined+.mdc-select-helper-text,.mdc-select--outlined+.mdc-select-helper-text[dir=rtl]{margin-left:0}@supports(top: max(0%)){[dir=rtl] .mdc-select--outlined+.mdc-select-helper-text,.mdc-select--outlined+.mdc-select-helper-text[dir=rtl]{margin-right:max(16px, calc(var(--mdc-shape-small, 4px) + 4px))}}.mdc-select--outlined:not(.mdc-select--disabled) .mdc-select__anchor{background-color:transparent}.mdc-select--outlined.mdc-select--disabled .mdc-select__anchor{background-color:transparent}.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.38)}.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.87)}.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-width:2px}.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#6200ee;border-color:var(--mdc-theme-primary, #6200ee)}.mdc-select--outlined.mdc-select--disabled .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--disabled .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--disabled .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.06)}.mdc-select--outlined .mdc-select__anchor :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mdc-select--outlined .mdc-select__anchor{display:flex;align-items:baseline;overflow:visible}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined 250ms 1}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--float-above{transform:translateY(-37.25px) scale(1)}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--float-above{font-size:.75rem}.mdc-select--outlined .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) scale(0.75)}.mdc-select--outlined .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:1px}.mdc-select--outlined .mdc-select__anchor .mdc-select__selected-text::before{content:"​"}.mdc-select--outlined .mdc-select__anchor .mdc-select__selected-text-container{height:100%;display:inline-flex;align-items:center}.mdc-select--outlined .mdc-select__anchor::before{display:none}.mdc-select--outlined .mdc-select__selected-text-container{display:flex;border:none;z-index:1;background-color:transparent}.mdc-select--outlined .mdc-select__icon{z-index:2}.mdc-select--outlined .mdc-floating-label{line-height:1.15rem;left:4px;right:initial}[dir=rtl] .mdc-select--outlined .mdc-floating-label,.mdc-select--outlined .mdc-floating-label[dir=rtl]{left:initial;right:4px}.mdc-select--outlined.mdc-select--focused .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:2px}.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled) .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled) .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled) .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-width:2px}.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label{left:36px;right:initial}[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label,.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label[dir=rtl]{left:initial;right:36px}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--float-above{transform:translateY(-37.25px) translateX(-32px) scale(1)}[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--float-above,.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-37.25px) translateX(32px) scale(1)}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--float-above{font-size:.75rem}.mdc-select--outlined.mdc-select--with-leading-icon.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined.mdc-select--with-leading-icon .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) translateX(-32px) scale(0.75)}[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon.mdc-notched-outline--upgraded .mdc-floating-label--float-above,[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon .mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined.mdc-select--with-leading-icon.mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl],.mdc-select--outlined.mdc-select--with-leading-icon .mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl]{transform:translateY(-34.75px) translateX(32px) scale(0.75)}.mdc-select--outlined.mdc-select--with-leading-icon.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined.mdc-select--with-leading-icon .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined-leading-icon-56px 250ms 1}@keyframes mdc-floating-label-shake-float-above-select-outlined-leading-icon-56px{0%{transform:translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 32px)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 32px)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75)}}[dir=rtl] .mdc-select--outlined.mdc-select--with-leading-icon .mdc-floating-label--shake,.mdc-select--outlined.mdc-select--with-leading-icon[dir=rtl] .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-select-outlined-leading-icon-56px 250ms 1}@keyframes mdc-floating-label-shake-float-above-select-outlined-leading-icon-56px-rtl{0%{transform:translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - -32px)) translateY(-34.75px) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - -32px)) translateY(-34.75px) scale(0.75)}100%{transform:translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75)}}.mdc-select--outlined.mdc-select--with-leading-icon .mdc-select__anchor :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 96px)}.mdc-select--outlined .mdc-menu-surface{margin-bottom:8px}.mdc-select--outlined.mdc-select--no-label .mdc-menu-surface,.mdc-select--outlined .mdc-menu-surface--is-open-below{margin-bottom:0}.mdc-select__anchor{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity}.mdc-select__anchor .mdc-select__ripple::before,.mdc-select__anchor .mdc-select__ripple::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-select__anchor .mdc-select__ripple::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-select__anchor .mdc-select__ripple::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-select__anchor.mdc-ripple-upgraded .mdc-select__ripple::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-select__anchor.mdc-ripple-upgraded .mdc-select__ripple::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-select__anchor.mdc-ripple-upgraded--unbounded .mdc-select__ripple::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-select__anchor.mdc-ripple-upgraded--foreground-activation .mdc-select__ripple::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-select__anchor.mdc-ripple-upgraded--foreground-deactivation .mdc-select__ripple::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-select__anchor .mdc-select__ripple::before,.mdc-select__anchor .mdc-select__ripple::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-select__anchor.mdc-ripple-upgraded .mdc-select__ripple::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-select__anchor .mdc-select__ripple::before,.mdc-select__anchor .mdc-select__ripple::after{background-color:rgba(0, 0, 0, 0.87);background-color:var(--mdc-ripple-color, rgba(0, 0, 0, 0.87))}.mdc-select__anchor:hover .mdc-select__ripple::before,.mdc-select__anchor.mdc-ripple-surface--hover .mdc-select__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-select__anchor.mdc-ripple-upgraded--background-focused .mdc-select__ripple::before,.mdc-select__anchor:not(.mdc-ripple-upgraded):focus .mdc-select__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-select__anchor .mdc-select__ripple{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected .mdc-deprecated-list-item__ripple::before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected .mdc-deprecated-list-item__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, var(--mdc-theme-on-surface, #000))}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:hover .mdc-deprecated-list-item__ripple::before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-surface--hover .mdc-deprecated-list-item__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-upgraded--background-focused .mdc-deprecated-list-item__ripple::before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded):focus .mdc-deprecated-list-item__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded) .mdc-deprecated-list-item__ripple::after{transition:opacity 150ms linear}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded):active .mdc-deprecated-list-item__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected .mdc-list-item__ripple::before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected .mdc-list-item__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, var(--mdc-theme-on-surface, #000))}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:hover .mdc-list-item__ripple::before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-surface--hover .mdc-list-item__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-upgraded--background-focused .mdc-list-item__ripple::before,.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded):focus .mdc-list-item__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded) .mdc-list-item__ripple::after{transition:opacity 150ms linear}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected:not(.mdc-ripple-upgraded):active .mdc-list-item__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-select__menu .mdc-deprecated-list .mdc-deprecated-list-item--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-select-helper-text{margin:0;margin-left:16px;margin-right:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit);display:block;margin-top:0;line-height:normal}[dir=rtl] .mdc-select-helper-text,.mdc-select-helper-text[dir=rtl]{margin-left:16px;margin-right:16px}.mdc-select-helper-text::before{display:inline-block;width:0;height:16px;content:"";vertical-align:0}.mdc-select-helper-text--validation-msg{opacity:0;transition:opacity 180ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-select--invalid+.mdc-select-helper-text--validation-msg,.mdc-select-helper-text--validation-msg-persistent{opacity:1}.mdc-select--with-leading-icon .mdc-select__icon{display:inline-block;box-sizing:border-box;border:none;text-decoration:none;cursor:pointer;user-select:none;flex-shrink:0;align-self:center;background-color:transparent;fill:currentColor}.mdc-select--with-leading-icon .mdc-select__icon{margin-left:12px;margin-right:12px}[dir=rtl] .mdc-select--with-leading-icon .mdc-select__icon,.mdc-select--with-leading-icon .mdc-select__icon[dir=rtl]{margin-left:12px;margin-right:12px}.mdc-select__icon:not([tabindex]),.mdc-select__icon[tabindex="-1"]{cursor:default;pointer-events:none}.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}:host{display:inline-block;vertical-align:top;outline:none}.mdc-select{width:100%}[hidden]{display:none}.mdc-select__icon{z-index:2}.mdc-select--with-leading-icon{--mdc-list-item-graphic-margin: calc( 48px - var(--mdc-list-item-graphic-size, 24px) - var(--mdc-list-side-padding, 16px) )}.mdc-select .mdc-select__anchor .mdc-select__selected-text{overflow:hidden}.mdc-select .mdc-select__anchor *{display:inline-flex}.mdc-select .mdc-select__anchor .mdc-floating-label{display:inline-block}mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-select-outlined-idle-border-color, rgba(0, 0, 0, 0.38) );--mdc-notched-outline-notch-offset: 1px}:host(:not([disabled]):hover) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-select-outlined-hover-border-color, rgba(0, 0, 0, 0.87) )}:host(:not([disabled])) .mdc-select:not(.mdc-select--disabled) .mdc-select__selected-text{color:rgba(0, 0, 0, 0.87);color:var(--mdc-select-ink-color, rgba(0, 0, 0, 0.87))}:host(:not([disabled])) .mdc-select:not(.mdc-select--disabled) .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.42);border-bottom-color:var(--mdc-select-idle-line-color, rgba(0, 0, 0, 0.42))}:host(:not([disabled])) .mdc-select:not(.mdc-select--disabled):hover .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.87);border-bottom-color:var(--mdc-select-hover-line-color, rgba(0, 0, 0, 0.87))}:host(:not([disabled])) .mdc-select:not(.mdc-select--outlined):not(.mdc-select--disabled) .mdc-select__anchor{background-color:whitesmoke;background-color:var(--mdc-select-fill-color, whitesmoke)}:host(:not([disabled])) .mdc-select.mdc-select--invalid .mdc-select__dropdown-icon{fill:var(--mdc-select-error-dropdown-icon-color, var(--mdc-select-error-color, var(--mdc-theme-error, #b00020)))}:host(:not([disabled])) .mdc-select.mdc-select--invalid .mdc-floating-label,:host(:not([disabled])) .mdc-select.mdc-select--invalid .mdc-floating-label::after{color:var(--mdc-select-error-color, var(--mdc-theme-error, #b00020))}:host(:not([disabled])) .mdc-select.mdc-select--invalid mwc-notched-outline{--mdc-notched-outline-border-color: var(--mdc-select-error-color, var(--mdc-theme-error, #b00020))}.mdc-select__menu--invalid{--mdc-theme-primary: var(--mdc-select-error-color, var(--mdc-theme-error, #b00020))}:host(:not([disabled])) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-floating-label,:host(:not([disabled])) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-floating-label::after{color:rgba(0, 0, 0, 0.6);color:var(--mdc-select-label-ink-color, rgba(0, 0, 0, 0.6))}:host(:not([disabled])) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-select__dropdown-icon{fill:rgba(0, 0, 0, 0.54);fill:var(--mdc-select-dropdown-icon-color, rgba(0, 0, 0, 0.54))}:host(:not([disabled])) .mdc-select.mdc-select--focused mwc-notched-outline{--mdc-notched-outline-stroke-width: 2px;--mdc-notched-outline-notch-offset: 2px}:host(:not([disabled])) .mdc-select.mdc-select--focused:not(.mdc-select--invalid) mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-select-focused-label-color, var(--mdc-theme-primary, rgba(98, 0, 238, 0.87)) )}:host(:not([disabled])) .mdc-select.mdc-select--focused:not(.mdc-select--invalid) .mdc-select__dropdown-icon{fill:rgba(98,0,238,.87);fill:var(--mdc-select-focused-dropdown-icon-color, var(--mdc-theme-primary, rgba(98, 0, 238, 0.87)))}:host(:not([disabled])) .mdc-select.mdc-select--focused:not(.mdc-select--invalid) .mdc-floating-label{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host(:not([disabled])) .mdc-select.mdc-select--focused:not(.mdc-select--invalid) .mdc-floating-label::after{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host(:not([disabled])) .mdc-select-helper-text:not(.mdc-select-helper-text--validation-msg){color:var(--mdc-select-label-ink-color, rgba(0, 0, 0, 0.6))}:host([disabled]){pointer-events:none}:host([disabled]) .mdc-select:not(.mdc-select--outlined).mdc-select--disabled .mdc-select__anchor{background-color:#fafafa;background-color:var(--mdc-select-disabled-fill-color, #fafafa)}:host([disabled]) .mdc-select.mdc-select--outlined mwc-notched-outline{--mdc-notched-outline-border-color: var( --mdc-select-outlined-disabled-border-color, rgba(0, 0, 0, 0.06) )}:host([disabled]) .mdc-select .mdc-select__dropdown-icon{fill:rgba(0, 0, 0, 0.38);fill:var(--mdc-select-disabled-dropdown-icon-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-floating-label,:host([disabled]) .mdc-select:not(.mdc-select--invalid):not(.mdc-select--focused) .mdc-floating-label::after{color:rgba(0, 0, 0, 0.38);color:var(--mdc-select-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-select-helper-text{color:rgba(0, 0, 0, 0.38);color:var(--mdc-select-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-select__selected-text{color:rgba(0, 0, 0, 0.38);color:var(--mdc-select-disabled-ink-color, rgba(0, 0, 0, 0.38))}`;let Hd=class extends Fd{};Hd.styles=[Nd],Hd=it([at("mwc-select")],Hd);const Vd={fromAttribute:t=>null!==t&&(""===t||t),toAttribute:t=>"boolean"==typeof t?t?"":null:t};class Ud extends Li{constructor(){super(...arguments),this.rows=2,this.cols=20,this.charCounter=!1}render(){const t=this.charCounter&&-1!==this.maxLength,e=t&&"internal"===this.charCounter,i=t&&!e,r=!!this.helper||!!this.validationMessage||i,n={"mdc-text-field--disabled":this.disabled,"mdc-text-field--no-label":!this.label,"mdc-text-field--filled":!this.outlined,"mdc-text-field--outlined":this.outlined,"mdc-text-field--end-aligned":this.endAligned,"mdc-text-field--with-internal-counter":e};return M`
      <label class="mdc-text-field mdc-text-field--textarea ${Ot(n)}">
        ${this.renderRipple()}
        ${this.outlined?this.renderOutline():this.renderLabel()}
        ${this.renderInput()}
        ${this.renderCharCounter(e)}
        ${this.renderLineRipple()}
      </label>
      ${this.renderHelperText(r,i)}
    `}renderInput(){const t=this.label?"label":void 0,e=-1===this.minLength?void 0:this.minLength,i=-1===this.maxLength?void 0:this.maxLength,r=this.autocapitalize?this.autocapitalize:void 0;return M`
      <textarea
          aria-labelledby=${Ke(t)}
          class="mdc-text-field__input"
          .value="${Ai(this.value)}"
          rows="${this.rows}"
          cols="${this.cols}"
          ?disabled="${this.disabled}"
          placeholder="${this.placeholder}"
          ?required="${this.required}"
          ?readonly="${this.readOnly}"
          minlength="${Ke(e)}"
          maxlength="${Ke(i)}"
          name="${Ke(""===this.name?void 0:this.name)}"
          inputmode="${Ke(this.inputMode)}"
          autocapitalize="${Ke(r)}"
          @input="${this.handleInputChange}"
          @blur="${this.onInputBlur}">
      </textarea>`}}it([ht("textarea")],Ud.prototype,"formElement",void 0),it([ot({type:Number})],Ud.prototype,"rows",void 0),it([ot({type:Number})],Ud.prototype,"cols",void 0),it([ot({converter:Vd})],Ud.prototype,"charCounter",void 0);const Yd=n`.mdc-text-field{height:100%}.mdc-text-field__input{resize:none}`;let Zd=class extends Ud{};function qd(t,e,i){var r=function(t,e){var i=new Map;Wd.has(t)||Wd.set(t,{isEnabled:!0,getObservers:function(t){var e=i.get(t)||[];return i.has(t)||i.set(t,e),e},installedProperties:new Set});var r=Wd.get(t);if(r.installedProperties.has(e))return r;var n=function(t,e){var i,r=t;for(;r&&!(i=Object.getOwnPropertyDescriptor(r,e));)r=Object.getPrototypeOf(r);return i}(t,e)||{configurable:!0,enumerable:!0,value:t[e],writable:!0},a=et({},n),s=n.get,o=n.set;if("value"in n){delete a.value,delete a.writable;var l=n.value;s=function(){return l},n.writable&&(o=function(t){l=t})}s&&(a.get=function(){return s.call(this)});o&&(a.set=function(t){var i,n,a=s?s.call(this):t;if(o.call(this,t),r.isEnabled&&(!s||t!==a))try{for(var l=rt(r.getObservers(e)),c=l.next();!c.done;c=l.next()){(0,c.value)(t,a)}}catch(t){i={error:t}}finally{try{c&&!c.done&&(n=l.return)&&n.call(l)}finally{if(i)throw i.error}}});return r.installedProperties.add(e),Object.defineProperty(t,e,a),r}(t,e),n=r.getObservers(e);return n.push(i),function(){n.splice(n.indexOf(i),1)}}Zd.styles=[Pi,Yd],Zd=it([at("mwc-textarea")],Zd);var Wd=new WeakMap;var Gd,Xd,Kd=function(t){function e(e){var i=t.call(this,e)||this;return i.unobserves=new Set,i}return tt(e,t),e.prototype.destroy=function(){t.prototype.destroy.call(this),this.unobserve()},e.prototype.observe=function(t,e){var i,r,n=this,a=[];try{for(var s=rt(Object.keys(e)),o=s.next();!o.done;o=s.next()){var l=o.value,c=e[l].bind(this);a.push(this.observeProperty(t,l,c))}}catch(t){i={error:t}}finally{try{o&&!o.done&&(r=s.return)&&r.call(s)}finally{if(i)throw i.error}}var d=function(){var t,e;try{for(var i=rt(a),r=i.next();!r.done;r=i.next()){(0,r.value)()}}catch(e){t={error:e}}finally{try{r&&!r.done&&(e=i.return)&&e.call(i)}finally{if(t)throw t.error}}n.unobserves.delete(d)};return this.unobserves.add(d),d},e.prototype.observeProperty=function(t,e,i){return qd(t,e,i)},e.prototype.setObserversEnabled=function(t,e){!function(t,e){var i=Wd.get(t);i&&(i.isEnabled=e)}(t,e)},e.prototype.unobserve=function(){var t,e;try{for(var i=rt(function(t,e,i){if(i||2===arguments.length)for(var r,n=0,a=e.length;n<a;n++)!r&&n in e||(r||(r=Array.prototype.slice.call(e,0,n)),r[n]=e[n]);return t.concat(r||Array.prototype.slice.call(e))}([],nt(this.unobserves))),r=i.next();!r.done;r=i.next()){(0,r.value)()}}catch(e){t={error:e}}finally{try{r&&!r.done&&(e=i.return)&&e.call(i)}finally{if(t)throw t.error}}},e}(vt);!function(t){t.PROCESSING="mdc-switch--processing",t.SELECTED="mdc-switch--selected",t.UNSELECTED="mdc-switch--unselected"}(Gd||(Gd={})),function(t){t.RIPPLE=".mdc-switch__ripple"}(Xd||(Xd={}));var Jd=function(t){function e(e){var i=t.call(this,e)||this;return i.handleClick=i.handleClick.bind(i),i}return tt(e,t),e.prototype.init=function(){this.observe(this.adapter.state,{disabled:this.stopProcessingIfDisabled,processing:this.stopProcessingIfDisabled})},e.prototype.handleClick=function(){this.adapter.state.disabled||(this.adapter.state.selected=!this.adapter.state.selected)},e.prototype.stopProcessingIfDisabled=function(){this.adapter.state.disabled&&(this.adapter.state.processing=!1)},e}(Kd);!function(t){function e(){return null!==t&&t.apply(this,arguments)||this}tt(e,t),e.prototype.init=function(){t.prototype.init.call(this),this.observe(this.adapter.state,{disabled:this.onDisabledChange,processing:this.onProcessingChange,selected:this.onSelectedChange})},e.prototype.initFromDOM=function(){this.setObserversEnabled(this.adapter.state,!1),this.adapter.state.selected=this.adapter.hasClass(Gd.SELECTED),this.onSelectedChange(),this.adapter.state.disabled=this.adapter.isDisabled(),this.adapter.state.processing=this.adapter.hasClass(Gd.PROCESSING),this.setObserversEnabled(this.adapter.state,!0),this.stopProcessingIfDisabled()},e.prototype.onDisabledChange=function(){this.adapter.setDisabled(this.adapter.state.disabled)},e.prototype.onProcessingChange=function(){this.toggleClass(this.adapter.state.processing,Gd.PROCESSING)},e.prototype.onSelectedChange=function(){this.adapter.setAriaChecked(String(this.adapter.state.selected)),this.toggleClass(this.adapter.state.selected,Gd.SELECTED),this.toggleClass(!this.adapter.state.selected,Gd.UNSELECTED)},e.prototype.toggleClass=function(t,e){t?this.adapter.addClass(e):this.adapter.removeClass(e)}}(Jd);class Qd extends hi{constructor(){super(...arguments),this.processing=!1,this.selected=!1,this.ariaLabel="",this.ariaLabelledBy="",this.shouldRenderRipple=!1,this.rippleHandlers=new de((()=>(this.shouldRenderRipple=!0,this.ripple))),this.name="",this.value="on",this.mdcFoundationClass=Jd}setFormData(t){this.name&&this.selected&&t.append(this.name,this.value)}click(){var t,e;this.disabled||(null===(t=this.mdcRoot)||void 0===t||t.focus(),null===(e=this.mdcRoot)||void 0===e||e.click())}render(){return M`
      <button
        type="button"
        class="mdc-switch ${Ot(this.getRenderClasses())}"
        role="switch"
        aria-checked="${this.selected}"
        aria-label="${Ke(this.ariaLabel||void 0)}"
        aria-labelledby="${Ke(this.ariaLabelledBy||void 0)}"
        .disabled=${this.disabled}
        @click=${this.handleClick}
        @focus="${this.handleFocus}"
        @blur="${this.handleBlur}"
        @pointerdown="${this.handlePointerDown}"
        @pointerup="${this.handlePointerUp}"
        @pointerenter="${this.handlePointerEnter}"
        @pointerleave="${this.handlePointerLeave}"
      >
        <div class="mdc-switch__track"></div>
        <div class="mdc-switch__handle-track">
          ${this.renderHandle()}
        </div>
      </button>

      <input
        type="checkbox"
        aria-hidden="true"
        name="${this.name}"
        .checked=${this.selected}
        .value=${this.value}
      >
    `}getRenderClasses(){return{"mdc-switch--processing":this.processing,"mdc-switch--selected":this.selected,"mdc-switch--unselected":!this.selected}}renderHandle(){return M`
      <div class="mdc-switch__handle">
        ${this.renderShadow()}
        ${this.renderRipple()}
        <div class="mdc-switch__icons">
          ${this.renderOnIcon()}
          ${this.renderOffIcon()}
        </div>
      </div>
    `}renderShadow(){return M`
      <div class="mdc-switch__shadow">
        <div class="mdc-elevation-overlay"></div>
      </div>
    `}renderRipple(){return this.shouldRenderRipple?M`
        <div class="mdc-switch__ripple">
          <mwc-ripple
            internalUseStateLayerCustomProperties
            .disabled="${this.disabled}"
            unbounded>
          </mwc-ripple>
        </div>
      `:M``}renderOnIcon(){return M`
      <svg class="mdc-switch__icon mdc-switch__icon--on" viewBox="0 0 24 24">
        <path d="M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z" />
      </svg>
    `}renderOffIcon(){return M`
      <svg class="mdc-switch__icon mdc-switch__icon--off" viewBox="0 0 24 24">
        <path d="M20 13H4v-2h16v2z" />
      </svg>
    `}handleClick(){var t;null===(t=this.mdcFoundation)||void 0===t||t.handleClick()}handleFocus(){this.rippleHandlers.startFocus()}handleBlur(){this.rippleHandlers.endFocus()}handlePointerDown(t){t.target.setPointerCapture(t.pointerId),this.rippleHandlers.startPress(t)}handlePointerUp(){this.rippleHandlers.endPress()}handlePointerEnter(){this.rippleHandlers.startHover()}handlePointerLeave(){this.rippleHandlers.endHover()}createAdapter(){return{state:this}}}it([ot({type:Boolean})],Qd.prototype,"processing",void 0),it([ot({type:Boolean})],Qd.prototype,"selected",void 0),it([Xe,ot({type:String,attribute:"aria-label"})],Qd.prototype,"ariaLabel",void 0),it([Xe,ot({type:String,attribute:"aria-labelledby"})],Qd.prototype,"ariaLabelledBy",void 0),it([pt("mwc-ripple")],Qd.prototype,"ripple",void 0),it([lt()],Qd.prototype,"shouldRenderRipple",void 0),it([ot({type:String,reflect:!0})],Qd.prototype,"name",void 0),it([ot({type:String})],Qd.prototype,"value",void 0),it([ht("input")],Qd.prototype,"formElement",void 0),it([ht(".mdc-switch")],Qd.prototype,"mdcRoot",void 0),it([dt({passive:!0})],Qd.prototype,"handlePointerDown",null);const th=n`.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:0;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);background-color:#fff;background-color:var(--mdc-elevation-overlay-color, #fff)}.mdc-switch{align-items:center;background:none;border:none;cursor:pointer;display:inline-flex;flex-shrink:0;margin:0;outline:none;overflow:visible;padding:0;position:relative}.mdc-switch:disabled{cursor:default;pointer-events:none}.mdc-switch__track{overflow:hidden;position:relative;width:100%}.mdc-switch__track::before,.mdc-switch__track::after{border:1px solid transparent;border-radius:inherit;box-sizing:border-box;content:"";height:100%;left:0;position:absolute;width:100%}@media screen and (forced-colors: active){.mdc-switch__track::before,.mdc-switch__track::after{border-color:currentColor}}.mdc-switch__track::before{transition:transform 75ms 0ms cubic-bezier(0, 0, 0.2, 1);transform:translateX(0)}.mdc-switch__track::after{transition:transform 75ms 0ms cubic-bezier(0.4, 0, 0.6, 1);transform:translateX(-100%)}[dir=rtl] .mdc-switch__track::after,.mdc-switch__track[dir=rtl]::after{transform:translateX(100%)}.mdc-switch--selected .mdc-switch__track::before{transition:transform 75ms 0ms cubic-bezier(0.4, 0, 0.6, 1);transform:translateX(100%)}[dir=rtl] .mdc-switch--selected .mdc-switch__track::before,.mdc-switch--selected .mdc-switch__track[dir=rtl]::before{transform:translateX(-100%)}.mdc-switch--selected .mdc-switch__track::after{transition:transform 75ms 0ms cubic-bezier(0, 0, 0.2, 1);transform:translateX(0)}.mdc-switch__handle-track{height:100%;pointer-events:none;position:absolute;top:0;transition:transform 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);left:0;right:auto;transform:translateX(0)}[dir=rtl] .mdc-switch__handle-track,.mdc-switch__handle-track[dir=rtl]{left:auto;right:0}.mdc-switch--selected .mdc-switch__handle-track{transform:translateX(100%)}[dir=rtl] .mdc-switch--selected .mdc-switch__handle-track,.mdc-switch--selected .mdc-switch__handle-track[dir=rtl]{transform:translateX(-100%)}.mdc-switch__handle{display:flex;pointer-events:auto;position:absolute;top:50%;transform:translateY(-50%);left:0;right:auto}[dir=rtl] .mdc-switch__handle,.mdc-switch__handle[dir=rtl]{left:auto;right:0}.mdc-switch__handle::before,.mdc-switch__handle::after{border:1px solid transparent;border-radius:inherit;box-sizing:border-box;content:"";width:100%;height:100%;left:0;position:absolute;top:0;transition:background-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1),border-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);z-index:-1}@media screen and (forced-colors: active){.mdc-switch__handle::before,.mdc-switch__handle::after{border-color:currentColor}}.mdc-switch__shadow{border-radius:inherit;bottom:0;left:0;position:absolute;right:0;top:0}.mdc-elevation-overlay{bottom:0;left:0;right:0;top:0}.mdc-switch__ripple{left:50%;position:absolute;top:50%;transform:translate(-50%, -50%);z-index:-1}.mdc-switch:disabled .mdc-switch__ripple{display:none}.mdc-switch__icons{height:100%;position:relative;width:100%;z-index:1}.mdc-switch__icon{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0;opacity:0;transition:opacity 30ms 0ms cubic-bezier(0.4, 0, 1, 1)}.mdc-switch--selected .mdc-switch__icon--on,.mdc-switch--unselected .mdc-switch__icon--off{opacity:1;transition:opacity 45ms 30ms cubic-bezier(0, 0, 0.2, 1)}:host{display:inline-flex;outline:none}input{display:none}.mdc-switch{width:36px;width:var(--mdc-switch-track-width, 36px)}.mdc-switch.mdc-switch--selected:enabled .mdc-switch__handle::after{background:#6200ee;background:var(--mdc-switch-selected-handle-color, var(--mdc-theme-primary, #6200ee))}.mdc-switch.mdc-switch--selected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after{background:#310077;background:var(--mdc-switch-selected-hover-handle-color, #310077)}.mdc-switch.mdc-switch--selected:enabled:focus:not(:active) .mdc-switch__handle::after{background:#310077;background:var(--mdc-switch-selected-focus-handle-color, #310077)}.mdc-switch.mdc-switch--selected:enabled:active .mdc-switch__handle::after{background:#310077;background:var(--mdc-switch-selected-pressed-handle-color, #310077)}.mdc-switch.mdc-switch--selected:disabled .mdc-switch__handle::after{background:#424242;background:var(--mdc-switch-disabled-selected-handle-color, #424242)}.mdc-switch.mdc-switch--unselected:enabled .mdc-switch__handle::after{background:#616161;background:var(--mdc-switch-unselected-handle-color, #616161)}.mdc-switch.mdc-switch--unselected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after{background:#212121;background:var(--mdc-switch-unselected-hover-handle-color, #212121)}.mdc-switch.mdc-switch--unselected:enabled:focus:not(:active) .mdc-switch__handle::after{background:#212121;background:var(--mdc-switch-unselected-focus-handle-color, #212121)}.mdc-switch.mdc-switch--unselected:enabled:active .mdc-switch__handle::after{background:#212121;background:var(--mdc-switch-unselected-pressed-handle-color, #212121)}.mdc-switch.mdc-switch--unselected:disabled .mdc-switch__handle::after{background:#424242;background:var(--mdc-switch-disabled-unselected-handle-color, #424242)}.mdc-switch .mdc-switch__handle::before{background:#fff;background:var(--mdc-switch-handle-surface-color, var(--mdc-theme-surface, #fff))}.mdc-switch:enabled .mdc-switch__shadow{--mdc-elevation-box-shadow-for-gss:0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);box-shadow:0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-switch-handle-elevation, var(--mdc-elevation-box-shadow-for-gss))}.mdc-switch:disabled .mdc-switch__shadow{--mdc-elevation-box-shadow-for-gss:0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-switch-disabled-handle-elevation, var(--mdc-elevation-box-shadow-for-gss))}.mdc-switch .mdc-switch__focus-ring-wrapper,.mdc-switch .mdc-switch__handle{height:20px;height:var(--mdc-switch-handle-height, 20px)}.mdc-switch:disabled .mdc-switch__handle::after{opacity:0.38;opacity:var(--mdc-switch-disabled-handle-opacity, 0.38)}.mdc-switch .mdc-switch__handle{border-radius:10px;border-radius:var(--mdc-switch-handle-shape, 10px)}.mdc-switch .mdc-switch__handle{width:20px;width:var(--mdc-switch-handle-width, 20px)}.mdc-switch .mdc-switch__handle-track{width:calc(100% - 20px);width:calc(100% - var(--mdc-switch-handle-width, 20px))}.mdc-switch.mdc-switch--selected:enabled .mdc-switch__icon{fill:#fff;fill:var(--mdc-switch-selected-icon-color, var(--mdc-theme-on-primary, #fff))}.mdc-switch.mdc-switch--selected:disabled .mdc-switch__icon{fill:#fff;fill:var(--mdc-switch-disabled-selected-icon-color, var(--mdc-theme-on-primary, #fff))}.mdc-switch.mdc-switch--unselected:enabled .mdc-switch__icon{fill:#fff;fill:var(--mdc-switch-unselected-icon-color, var(--mdc-theme-on-primary, #fff))}.mdc-switch.mdc-switch--unselected:disabled .mdc-switch__icon{fill:#fff;fill:var(--mdc-switch-disabled-unselected-icon-color, var(--mdc-theme-on-primary, #fff))}.mdc-switch.mdc-switch--selected:disabled .mdc-switch__icons{opacity:0.38;opacity:var(--mdc-switch-disabled-selected-icon-opacity, 0.38)}.mdc-switch.mdc-switch--unselected:disabled .mdc-switch__icons{opacity:0.38;opacity:var(--mdc-switch-disabled-unselected-icon-opacity, 0.38)}.mdc-switch.mdc-switch--selected .mdc-switch__icon{width:18px;width:var(--mdc-switch-selected-icon-size, 18px);height:18px;height:var(--mdc-switch-selected-icon-size, 18px)}.mdc-switch.mdc-switch--unselected .mdc-switch__icon{width:18px;width:var(--mdc-switch-unselected-icon-size, 18px);height:18px;height:var(--mdc-switch-unselected-icon-size, 18px)}.mdc-switch .mdc-switch__ripple{height:48px;height:var(--mdc-switch-state-layer-size, 48px);width:48px;width:var(--mdc-switch-state-layer-size, 48px)}.mdc-switch .mdc-switch__track{height:14px;height:var(--mdc-switch-track-height, 14px)}.mdc-switch:disabled .mdc-switch__track{opacity:0.12;opacity:var(--mdc-switch-disabled-track-opacity, 0.12)}.mdc-switch:enabled .mdc-switch__track::after{background:#d7bbff;background:var(--mdc-switch-selected-track-color, #d7bbff)}.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::after{background:#d7bbff;background:var(--mdc-switch-selected-hover-track-color, #d7bbff)}.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::after{background:#d7bbff;background:var(--mdc-switch-selected-focus-track-color, #d7bbff)}.mdc-switch:enabled:active .mdc-switch__track::after{background:#d7bbff;background:var(--mdc-switch-selected-pressed-track-color, #d7bbff)}.mdc-switch:disabled .mdc-switch__track::after{background:#424242;background:var(--mdc-switch-disabled-selected-track-color, #424242)}.mdc-switch:enabled .mdc-switch__track::before{background:#e0e0e0;background:var(--mdc-switch-unselected-track-color, #e0e0e0)}.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::before{background:#e0e0e0;background:var(--mdc-switch-unselected-hover-track-color, #e0e0e0)}.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::before{background:#e0e0e0;background:var(--mdc-switch-unselected-focus-track-color, #e0e0e0)}.mdc-switch:enabled:active .mdc-switch__track::before{background:#e0e0e0;background:var(--mdc-switch-unselected-pressed-track-color, #e0e0e0)}.mdc-switch:disabled .mdc-switch__track::before{background:#424242;background:var(--mdc-switch-disabled-unselected-track-color, #424242)}.mdc-switch .mdc-switch__track{border-radius:7px;border-radius:var(--mdc-switch-track-shape, 7px)}.mdc-switch.mdc-switch--selected{--mdc-ripple-focus-state-layer-color:var(--mdc-switch-selected-focus-state-layer-color, var(--mdc-theme-primary, #6200ee));--mdc-ripple-focus-state-layer-opacity:var(--mdc-switch-selected-focus-state-layer-opacity, 0.12);--mdc-ripple-hover-state-layer-color:var(--mdc-switch-selected-hover-state-layer-color, var(--mdc-theme-primary, #6200ee));--mdc-ripple-hover-state-layer-opacity:var(--mdc-switch-selected-hover-state-layer-opacity, 0.04);--mdc-ripple-pressed-state-layer-color:var(--mdc-switch-selected-pressed-state-layer-color, var(--mdc-theme-primary, #6200ee));--mdc-ripple-pressed-state-layer-opacity:var(--mdc-switch-selected-pressed-state-layer-opacity, 0.1)}.mdc-switch.mdc-switch--selected:enabled:focus:not(:active){--mdc-ripple-hover-state-layer-color:var(--mdc-switch-selected-focus-state-layer-color, var(--mdc-theme-primary, #6200ee))}.mdc-switch.mdc-switch--selected:enabled:active{--mdc-ripple-hover-state-layer-color:var(--mdc-switch-selected-pressed-state-layer-color, var(--mdc-theme-primary, #6200ee))}.mdc-switch.mdc-switch--unselected{--mdc-ripple-focus-state-layer-color:var(--mdc-switch-unselected-focus-state-layer-color, #424242);--mdc-ripple-focus-state-layer-opacity:var(--mdc-switch-unselected-focus-state-layer-opacity, 0.12);--mdc-ripple-hover-state-layer-color:var(--mdc-switch-unselected-hover-state-layer-color, #424242);--mdc-ripple-hover-state-layer-opacity:var(--mdc-switch-unselected-hover-state-layer-opacity, 0.04);--mdc-ripple-pressed-state-layer-color:var(--mdc-switch-unselected-pressed-state-layer-color, #424242);--mdc-ripple-pressed-state-layer-opacity:var(--mdc-switch-unselected-pressed-state-layer-opacity, 0.1)}.mdc-switch.mdc-switch--unselected:enabled:focus:not(:active){--mdc-ripple-hover-state-layer-color:var(--mdc-switch-unselected-focus-state-layer-color, #424242)}.mdc-switch.mdc-switch--unselected:enabled:active{--mdc-ripple-hover-state-layer-color:var(--mdc-switch-unselected-pressed-state-layer-color, #424242)}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-switch:disabled .mdc-switch__handle::after{opacity:1;opacity:var(--mdc-switch-disabled-handle-opacity, 1)}.mdc-switch.mdc-switch--selected:enabled .mdc-switch__icon{fill:ButtonText;fill:var(--mdc-switch-selected-icon-color, ButtonText)}.mdc-switch.mdc-switch--selected:disabled .mdc-switch__icon{fill:GrayText;fill:var(--mdc-switch-disabled-selected-icon-color, GrayText)}.mdc-switch.mdc-switch--unselected:enabled .mdc-switch__icon{fill:ButtonText;fill:var(--mdc-switch-unselected-icon-color, ButtonText)}.mdc-switch.mdc-switch--unselected:disabled .mdc-switch__icon{fill:GrayText;fill:var(--mdc-switch-disabled-unselected-icon-color, GrayText)}.mdc-switch.mdc-switch--selected:disabled .mdc-switch__icons{opacity:1;opacity:var(--mdc-switch-disabled-selected-icon-opacity, 1)}.mdc-switch.mdc-switch--unselected:disabled .mdc-switch__icons{opacity:1;opacity:var(--mdc-switch-disabled-unselected-icon-opacity, 1)}.mdc-switch:disabled .mdc-switch__track{opacity:1;opacity:var(--mdc-switch-disabled-track-opacity, 1)}}`;let eh=class extends Qd{};eh.styles=[th],eh=it([at("mwc-switch")],eh);var ih={ROOT:"mdc-form-field"},rh={LABEL_SELECTOR:".mdc-form-field > label"},nh=function(t){function e(i){var r=t.call(this,et(et({},e.defaultAdapter),i))||this;return r.click=function(){r.handleClick()},r}return tt(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return ih},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return rh},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{activateInputRipple:function(){},deactivateInputRipple:function(){},deregisterInteractionHandler:function(){},registerInteractionHandler:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){this.adapter.registerInteractionHandler("click",this.click)},e.prototype.destroy=function(){this.adapter.deregisterInteractionHandler("click",this.click)},e.prototype.handleClick=function(){var t=this;this.adapter.activateInputRipple(),requestAnimationFrame((function(){t.adapter.deactivateInputRipple()}))},e}(vt);class ah extends It{constructor(){super(...arguments),this.alignEnd=!1,this.spaceBetween=!1,this.nowrap=!1,this.label="",this.mdcFoundationClass=nh}createAdapter(){return{registerInteractionHandler:(t,e)=>{this.labelEl.addEventListener(t,e)},deregisterInteractionHandler:(t,e)=>{this.labelEl.removeEventListener(t,e)},activateInputRipple:async()=>{const t=this.input;if(t instanceof hi){const e=await t.ripple;e&&e.startPress()}},deactivateInputRipple:async()=>{const t=this.input;if(t instanceof hi){const e=await t.ripple;e&&e.endPress()}}}}get input(){var t,e;return null!==(e=null===(t=this.slottedInputs)||void 0===t?void 0:t[0])&&void 0!==e?e:null}render(){const t={"mdc-form-field--align-end":this.alignEnd,"mdc-form-field--space-between":this.spaceBetween,"mdc-form-field--nowrap":this.nowrap};return M`
      <div class="mdc-form-field ${Ot(t)}">
        <slot></slot>
        <label class="mdc-label"
               @click="${this._labelClick}">${this.label}</label>
      </div>`}click(){this._labelClick()}_labelClick(){const t=this.input;t&&(t.focus(),t.click())}}it([ot({type:Boolean})],ah.prototype,"alignEnd",void 0),it([ot({type:Boolean})],ah.prototype,"spaceBetween",void 0),it([ot({type:Boolean})],ah.prototype,"nowrap",void 0),it([ot({type:String}),Mt((async function(t){var e;null===(e=this.input)||void 0===e||e.setAttribute("aria-label",t)}))],ah.prototype,"label",void 0),it([ht(".mdc-form-field")],ah.prototype,"mdcRoot",void 0),it([ut("",!0,"*")],ah.prototype,"slottedInputs",void 0),it([ht("label")],ah.prototype,"labelEl",void 0);const sh=n`.mdc-form-field{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));display:inline-flex;align-items:center;vertical-align:middle}.mdc-form-field>label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0;order:0}[dir=rtl] .mdc-form-field>label,.mdc-form-field>label[dir=rtl]{margin-left:auto;margin-right:0}[dir=rtl] .mdc-form-field>label,.mdc-form-field>label[dir=rtl]{padding-left:0;padding-right:4px}.mdc-form-field--nowrap>label{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.mdc-form-field--align-end>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px;order:-1}[dir=rtl] .mdc-form-field--align-end>label,.mdc-form-field--align-end>label[dir=rtl]{margin-left:0;margin-right:auto}[dir=rtl] .mdc-form-field--align-end>label,.mdc-form-field--align-end>label[dir=rtl]{padding-left:4px;padding-right:0}.mdc-form-field--space-between{justify-content:space-between}.mdc-form-field--space-between>label{margin:0}[dir=rtl] .mdc-form-field--space-between>label,.mdc-form-field--space-between>label[dir=rtl]{margin:0}:host{display:inline-flex}.mdc-form-field{width:100%}::slotted(*){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}::slotted(mwc-switch){margin-right:10px}[dir=rtl] ::slotted(mwc-switch),::slotted(mwc-switch[dir=rtl]){margin-left:10px}`;let oh=class extends ah{};oh.styles=[sh],oh=it([at("mwc-formfield")],oh);class lh extends(al(K)){static get styles(){return[nl,n`
        :host {
        }

        div.spacer {
          margin-top: 2em;
        }

        p.right {
          text-align: right;
        }

        mwc-textfield.fullwidth {
          width: 100%;
        }

        .hide {
          display: none;
        }

        mwc-icon-button {
          color: rgba(0, 0, 0, 0.5);
        }

        mwc-dialog {
          --mdc-dialog-max-width: 100vw;
          --mdc-dialog-min-width: 50vw;
        }
      `]}static get properties(){return{data:{type:Object},types:{type:Object},typesLocale:{type:Object},loadingTypes:{type:Boolean},isFormValid:{type:Boolean},new:{type:Boolean},dialogTitle:{type:String}}}constructor(){super(),this.data={},this.types={},this.typesLocale={},this.loadingTypes=!1,this.isFormValid=!1,this.new=!1,this.dialogTitle=""}_reset(){this.shadowRoot.querySelectorAll(["grampsjs-form-select-type","grampsjs-form-private","grampsjs-form-object-list","grampsjs-form-select-object","grampsjs-form-select-object-list","grampsjs-form-select-date","grampsjs-form-string","grampsjs-form-upload","grampsjs-form-name"].join(", ")).forEach((t=>t.reset())),this.shadowRoot.querySelectorAll("mwc-textfield").forEach((t=>{t.value=""}))}get isValid(){return!0}_areDateSelectValid(){let t=!0;return this.shadowRoot.querySelectorAll("grampsjs-form-select-date").forEach((e=>{e.isValid()||(t=!1)})),t}render(){return M`
      <mwc-dialog
        scrimClickAction=""
        escapeKeyAction=""
        heading="${this.dialogTitle}"
        open
      >
        <div @formdata:changed="${this._handleFormData}">
          ${this.renderForm()}
        </div>

        <mwc-button
          raised
          class="edit"
          style="margin:8px 16px 8px 8px"
          slot="primaryAction"
          dialogAction="ok"
          ?disabled="${!this.isValid}"
          @click="${this._handleDialogSave}"
        >
          ${this._("_Save")}
        </mwc-button>
        <mwc-button
          class="edit"
          style="margin:8px"
          slot="secondaryAction"
          dialogAction="cancel"
          @click="${this._handleDialogCancel}"
        >
          ${this._("Cancel")}
        </mwc-button>
      </mwc-dialog>
    `}_handleDialogSave(){os(this,"object:save",{data:this.data}),this._reset()}_handleDialogCancel(){os(this,"object:cancel"),this._reset()}_openDialog(){const t=this.shadowRoot.querySelector("mwc-dialog");null!==t&&(t.open=!0)}open(){this._openDialog()}updateTypeData(){this.loadingTypes=!0,On("/api/types/").then((t=>{"data"in t?this.types=t.data||{}:"error"in t&&os(this,"grampsjs:error",{message:t.error})})).then((()=>{On("/api/types/?locale=1").then((t=>{this.loadingTypes=!1,"data"in t?(this.typesLocale=t.data||{},this.error=!1):"error"in t&&os(this,"grampsjs:error",{message:t.error})}))}))}firstUpdated(){this.updateTypeData()}translateTypeName(t,e,i){const r=((this.types[t?"custom":"default"]||{})[e]||[]).indexOf(i);try{return this.typesLocale[t?"custom":"default"][e][r]}catch{return i}}_handleFormData(t){const e=t.composedPath()[0];if("private"===e.id&&(this.data={...this.data,private:t.detail.checked}),["author","pubinfo","abbrev","page","desc","title","description","path","value","lat","long","call_number","rel"].includes(e.id)&&(this.data={...this.data,[e.id]:t.detail.data}),["event-select-list","media-select-list","child-select-list","place-select-list","person-select-list","repository-select-list"].includes(e.id)){const[e]=t.detail.data;if(e)this.data={...this.data,ref:e};else{const{ref:t,...e}=this.data;this.data=e}}"source-list"===e.id&&(this.data={...this.data,source_handle:t.detail.data[0]}),"place-list"===e.id&&(this.data={...this.data,place:t.detail.data[0]}),"father-list"===e.id&&(this.data={...this.data,father_handle:t.detail.data[0]}),"mother-list"===e.id&&(this.data={...this.data,mother_handle:t.detail.data[0]}),"date"===e.id&&(this.data={...this.data,date:t.detail.data}),"event-role-type"===e.id&&(this.data={...this.data,role:{_class:"EventRoleType",string:t.detail.data}}),"source-media-type"===e.id&&(this.data={...this.data,media_type:{_class:"SourceMediaType",string:t.detail.data}}),"name-type"===e.id&&(this.data={...this.data,type:{_class:"NameType",string:t.detail.data}}),"note-type"===e.id&&(this.data={...this.data,type:{_class:"NoteType",string:t.detail.data}}),"place-type"===e.id&&(this.data={...this.data,place_type:{_class:"PlaceType",string:t.detail.data}}),"event-type"===e.id&&(this.data={...this.data,type:{_class:"EventType",string:t.detail.data}}),"child-frel"===e.id&&(this.data={...this.data,frel:{_class:"ChildRefType",string:t.detail.data}}),"child-mrel"===e.id&&(this.data={...this.data,mrel:{_class:"ChildRefType",string:t.detail.data}}),"child-mrel"===e.id&&(this.data={...this.data,mrel:{_class:"ChildRefType",string:t.detail.data}}),"note-select-list"===e.id&&(this.data=t.detail),"object-citation-list"===e.id&&(this.data={...this.data,citation_list:t.detail.data??[]}),"citation-select-list"===e.id&&(this.data=t.detail),"personref-citation-select-list"===e.id&&(this.data={...this.data,citation_list:t.detail.data}),"personref-note-select-list"===e.id&&(this.data={...this.data,note_list:t.detail.data}),"name"===e.id&&(this.data=t.detail.data),"srcattrtype"===e.id&&(this.data={...this.data,type:{_class:"SrcAttributeType",string:t.detail.data}}),"attrtype"===e.id&&(this.data={...this.data,type:{_class:"AttributeType",string:t.detail.data}}),"family-rel-type"===e.id&&(this.data={...this.data,type:{_class:"FamilyRelType",string:t.detail.data}}),"urltype"===e.id&&(this.data={...this.data,type:{_class:"UrlType",string:t.detail.data}}),"place-name-value"===e.id&&(this.data={...this.data,value:t.detail.data}),"attrvalue"===e.id&&(this.data={...this.data,value:t.detail.data}),t.preventDefault(),t.stopPropagation()}}window.customElements.define("grampsjs-img",class extends K{static get styles(){return[nl,n`
        img {
          max-width: 100%;
          max-height: 100vh;
        }

        .round {
          border-radius: 50%;
        }

        .bordered {
          box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.2);
        }

        .file-placeholder {
          width: 200px;
          height: 200px;
          background-color: rgba(200, 200, 200, 0.5);
          color: rgba(0, 0, 0, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          --mdc-icon-size: 130px;
        }
      `]}static get properties(){return{handle:{type:String},size:{type:Number},rect:{type:Array},circle:{type:Boolean},square:{type:Boolean},mime:{type:String},displayHeight:{type:Number},border:{type:Boolean},radius:{type:Number},_error:{type:Boolean}}}constructor(){super(),this.rect=[],this.circle=!1,this.square=!1,this.mime="",this.displayHeight=0,this.border=!1,this.radius=0,this._error=!1}_renderImageFull(){const t=this.displayHeight||"";return M`
      <img
        src="${Vn(this.handle)}"
        class=${Ot({round:this.circle,bordered:this.border})}
        @error=${this._errorHandler}
        alt=""
        height="${t}"
        style="${this.circle?"":`border-radius:${this.radius}px`}"
      />
    `}async reload(){this.mime.startsWith("image")&&(this._reloadImageUrl(Vn(this.handle)),this._reloadImageUrl(Un(this.handle,3*this.size,this.square)))}async _reloadImageUrl(t){await fetch(t,{cache:"reload",mode:"no-cors"}),this.renderRoot.querySelectorAll(`img[src='${t}']`).forEach((e=>{e.src=t}))}getBBox(){const t=this.shadowRoot.querySelector("img");return null===t?null:t.getBoundingClientRect()}_renderImage(){const t=this.displayHeight||"";return M`
      <img
        srcset="
          ${Un(this.handle,this.size,this.square)},
          ${Un(this.handle,1.5*this.size,this.square)} 1.5x,
          ${Un(this.handle,2*this.size,this.square)} 2x,
          ${Un(this.handle,3*this.size,this.square)} 3x
        "
        src="${Un(this.handle,3*this.size,this.square)}"
        class=${Ot({round:this.circle,bordered:this.border})}
        @error=${this._errorHandler}
        alt=""
        style="${this.circle?"":`border-radius:${this.radius}px`}"
        height="${t}"
      />
    `}_renderImageCropped(){const t=this.displayHeight||"";return M`<img
      srcset="
        ${Yn(this.handle,this.rect,this.size,this.square)},
        ${Yn(this.handle,this.rect,1.5*this.size,this.square)} 1.5x,
        ${Yn(this.handle,this.rect,2*this.size,this.square)} 2x,
        ${Yn(this.handle,this.rect,3*this.size,this.square)} 3x
      "
      src="${Yn(this.handle,this.rect,3*this.size,this.square)}"
      class="${this.circle?"round":""}"
      style="${this.circle?"":`border-radius:${this.radius}px`}"
      @error=${this._errorHandler}
      alt=""
      height="${t}"
    />`}renderBrokenImage(){return M`<img
      class=${Ot({round:this.circle,bordered:this.border})}
      height="${this.displayHeight||""}"
      style="${this.circle?"":`border-radius:${this.radius}px`}"
      src="data:image/svg+xml;base64,${"PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgcng9IjAiIHJ5PSIwIiBmaWxsLW9wYWNpdHk9Ii4xIiBmaWxsPSIjMDAwIi8+PHBhdGggZD0ibTE4Ljg4IDYuNjQ4OHY1LjAzNzdsLTIuMjkzNC0yLjMwMS0zLjA1NzggMy4wNjU1LTMuMDU3OC0zLjA1NzgtMy4wNTc4IDMuMDU3OC0yLjI5MzQtMi4zMDF2LTMuNTAxMmExLjUyODkgMS41Mjg5IDAgMCAxIDEuNTI4OS0xLjUyODloMTAuNzAyYTEuNTI4OSAxLjUyODkgMCAwIDEgMS41Mjg5IDEuNTI4OW0tMi4yOTM0IDQuOTA3OCAyLjI5MzQgMi4zMDF2My40OTM1YTEuNTI4OSAxLjUyODkgMCAwIDEtMS41Mjg5IDEuNTI4OWgtMTAuNzAyYTEuNTI4OSAxLjUyODkgMCAwIDEtMS41Mjg5LTEuNTI4OXYtNS4wMzAxbDIuMjkzNCAyLjI4NTcgMy4wNTc4LTMuMDU3OCAzLjA1NzggMy4wNTc4IiBmaWxsLW9wYWNpdHk9Ii4yNSIgIGZpbGw9IiMwMDAiLz48L3N2Zz4K"}"
      alt="Error"
    /> `}render(){return this._error?this.renderBrokenImage():this.mime.startsWith("audio")?this.displayHeight>0?M`
        <div class="file-placeholder">
          <mwc-icon>audio_file<mwc-icon>
        </div>`:this._renderAudio():this.mime.startsWith("video")?this._renderVideo():""===this.mime||this.mime.startsWith("image")||"application/pdf"===this.mime?0===this.size?this._renderFull():this._renderThumb():M`
      <div class="file-placeholder">
        <mwc-icon>insert_drive_file<mwc-icon>
      </div>`}_renderAudio(){return M`
      <audio controls>
        <source src="${Vn(this.handle)}" type="${this.mime}" />
        Your browser does not support the audio element.
      </audio>
    `}_renderVideo(){return M`
      <video
        ?controls=${0===this.displayHeight}
        height="${this.displayHeight>0?this.displayHeight:"auto"}"
      >
        <source src="${Vn(this.handle)}" type="${this.mime}" />
        Your browser does not support the video element.
      </video>
    `}_renderThumb(){return 0===this.rect.length?this._renderImage():this._renderImageCropped()}_renderFull(){return this.rect.length,this._renderImageFull()}_errorHandler(){this._error=!0}});class ch extends(al(K)){static get styles(){return[nl,n`
        mwc-icon-button {
          position: relative;
          top: -14px;
          left: -16px;
          --mdc-icon-size: 20px;
        }

        mwc-icon {
          background-color: rgba(0, 0, 0, 0.25);
          color: white;
        }

        mwc-icon.placeholder {
          width: 40px;
          height: 40px;
          line-height: 40px;
          border-radius: 50%;
        }
      `]}static get properties(){return{data:{type:Array},textEmpty:{type:String},activatable:{type:Boolean},selectable:{type:Boolean},linked:{type:Boolean},metaIcon:{type:String},date:{type:Boolean},noSep:{type:Boolean},loading:{type:Boolean},numberLoading:{type:Number},large:{type:Boolean}}}constructor(){super(),this.data=[],this.textEmpty="",this.activatable=!1,this.selectable=!1,this.linked=!1,this.metaIcon="",this.date=!1,this.noSep=!1,this.loading=!1,this.numberLoading=2,this.large=!1}render(){return this.loading?this.renderLoading():M`
      <mwc-list
        id="search-results"
        ?activatable="${this.activatable}"
        class="${Ot({large:this.large})}"
      >
        ${0===this.data.length&&this.textEmpty?M`
              <mwc-list-item noninteractive>
                <span>${this.textEmpty}</span>
              </mwc-list-item>
            `:""}
        ${this.data.map(((t,e,i)=>{const r=function(t,e,i){switch(t){case"person":return Ga(e);case"family":return M`${Xa(e.profile||{})||Za(i,"Family")}`;case"event":return M`${Ja(e.profile||{},i)||Za(i,e.type.string??e.type)}`;case"place":return M`${e?.profile?.name||e?.name?.value||e.title||t}`;case"source":case"repository":return M`${ts(e,t)||t}`;case"citation":return M`${Ka(e.profile||{})||Za(i,"Citation")}`;case"note":return M`${Za(i,e.type.string??e.type)||t}`;case"media":return M`${ts(e,t)||Za(i,"Media Object")}`;case"tag":return M`${e.name}`;default:return`unknown type: ${t}`}}(t.object_type,t.object,this.strings);return M`
            <mwc-list-item
              ?noninteractive="${!this.selectable&&!this.linked}"
              twoline
              graphic="avatar"
              @click="${()=>this._handleClick(t)}"
              @keydown="${this._handleKeyDown}"
              ?hasMeta=${""!==this.metaIcon}
            >
              ${fs(t)}
              <mwc-icon-button
                @click="${e=>this._handleMetaClick(e,t)}"
                icon="${this.metaIcon}"
                slot="meta"
              ></mwc-icon-button>
              ${t.loading?M`<span style="width:10em;" class="skeleton">&nbsp;</span>`:M`<span>${r}</span>`}
              ${t.loading?M`<span
                    slot="secondary"
                    style="width:10em;"
                    class="skeleton"
                    >&nbsp;</span
                  >`:M`<span slot="secondary"
                    >${this._renderSecondary(t)}</span
                  >`}
            </mwc-list-item>
            ${this.noSep||i.length-1===e?"":M`<li divider padded role="separator"></li>`}
          `}),this)}
      </mwc-list>
    `}renderLoading(){return M` <mwc-list>
      ${Array(this.numberLoading).fill(M`
          <mwc-list-item noninteractive twoline graphic="avatar">
            <span class="skeleton" style="width:15em;">&nbsp;</span>
            <span slot="secondary" class="skeleton" style="width:10em;"
              >&nbsp;</span
            >
            <span slot="graphic" class="skeleton avatar">&nbsp;</span>
          </mwc-list-item>
        `)}
    </mwc-list>`}_renderSecondary(t){if(this.date&&t.object?.change)return M`<grampsjs-timedelta
        timestamp="${t.object.change}"
        locale="${this.strings.__lang__}"
      ></grampsjs-timedelta>`;const e=rs(t.object_type,t.object,this.strings).trim();return e?.length?e:"tag"===t.object_type?this._("Tag"):t.object?.gramps_id||"..."}_handleMetaClick(t,e){t.preventDefault(),t.stopPropagation(),os(this,"search-result:metaClicked",e)}_handleClick(t){if(this.linked&&t.object_type&&t.object?.gramps_id){os(this,"nav",{path:`${t.object_type}/${t.object?.gramps_id}`})}os(this,"search-result:clicked",t)}_handleKeyDown(t){"Enter"===t.code&&(t.target.click(),t.preventDefault(),t.stopPropagation())}}window.customElements.define("grampsjs-search-result-list",ch);class dh extends(al(K)){static get styles(){return[nl,n`
        mwc-textfield.fullwidth {
          width: 100%;
        }
      `]}static get properties(){return{value:{type:String},label:{type:String},disabled:{type:Boolean},fullwidth:{type:Boolean},required:{type:Boolean},type:{type:String}}}constructor(){super(),this.value="",this.label="",this.disabled=!1,this.fullwidth=!1,this.required=!1,this.type="text"}render(){return M`
      <mwc-textfield
        @input="${this.handleChange}"
        label="${this.label}"
        value="${this.value}"
        type="${this.type}"
        ?disabled="${this.disabled}"
        ?required="${this.required}"
        class="${this.fullwidth?"fullwidth":""}"
      ></mwc-textfield>
    `}reset(){this.shadowRoot.querySelector("mwc-textfield").value=""}handleChange(){const t=this.shadowRoot.querySelector("mwc-textfield");null!==t&&os(this,"formdata:changed",{data:t.value})}isValid(){const t=this.shadowRoot.querySelector("mwc-textfield");return null===t||!!t?.validity?.valid}}window.customElements.define("grampsjs-form-string",dh);window.customElements.define("grampsjs-form-new-tag",class extends lh{static get properties(){return{searchRes:{type:Array},disableString:{type:Boolean},disableField:{type:Boolean},_selectedTag:{type:String},_tagName:{type:String},_tagColor:{type:String}}}constructor(){super(),this.searchRes=[],this.disableString=!1,this._selectedTag="",this._tagName="",this._tagColor=""}renderForm(){return M`
      <grampsjs-form-string
        @formdata:changed="${this._handleString}"
        ?disabled="${this.disableString}"
        fullwidth
        id="create"
        label="${this._("New Tag")}"
      >
      </grampsjs-form-string>
      <input
        type="color"
        id="color"
        @change="${this._handleColor}"
        list="presetColors"
      />
      <datalist id="presetColors">
        <option>#1f77b4</option>
        <option>#ff7f0e</option>
        <option>#2ca02c</option>
        <option>#d62728</option>
        <option>#9467bd</option>
        <option>#8c564b</option>
        <option>#e377c2</option>
        <option>#7f7f7f</option>
        <option>#bcbd22</option>
        <option>#17becf</option>
      </datalist>
      <grampsjs-search-result-list
        selectable
        activatable
        .data="${this.searchRes}"
        .strings="${this.strings}"
        @search-result:clicked="${this._handleSelected}"
      ></grampsjs-search-result-list>
    `}firstUpdated(){this._fetchData()}async _fetchData(){const t=`/api/tags/?locale=${this.strings?.__lang__||"en"}&profile=all&pagesize=100`,e=await On(t);"data"in e?this.searchRes=e.data?.map((t=>({object_type:"tag",object:t,handle:t.handle})))?.filter((t=>!this.data.includes(t.handle)))??[]:"error"in e&&(this.searchRes=[])}_handleString(t){this._tagName=t.detail.data}_handleColor(){const t=this.shadowRoot.getElementById("color");this._tagColor=t.value}async _handleDialogSave(){if(!this.disableString&&this._tagName){const t=await this._createNewTag();this.data=[...this.data,t]}else this._selectedTag&&!this.data.includes(this._selectedTag)&&(this.data=[...this.data,this._selectedTag]);super._handleDialogSave()}async _createNewTag(){const t={_class:"Tag",handle:ls(),name:this._tagName};return this._tagColor&&(t.color=this._tagColor),await Nn("/api/tags/",t),t.handle}_handleSelected(t){this.disableString=!0;const e=t.detail;this._selectedTag=e.handle}});class hh extends(al(K)){static get styles(){return[nl,n`
        :host {
          align-items: center;
          display: inline-flex;
        }

        .chip {
          font-size: 13px;
          font-weight: 400;
          font-family: var(--grampsjs-body-font-family);
          padding: 6px 14px;
          border-radius: 9999px;
          margin: 5px 5px;
          background-color: var(--mdc-theme-primary);
          color: rgba(255, 255, 255, 0.9);
          line-height: 18px;
        }

        .chip mwc-icon-button {
          margin-left: 4px;
          --mdc-icon-size: 14px;
          --mdc-icon-button-size: 18px;
        }

        .monospace {
          font-family: 'Commit Mono';
        }
      `]}static get properties(){return{label:{type:String},monospace:{type:Boolean}}}constructor(){super(),this.label="",this.monospace=!1}render(){return M`
      <span
        class="${Ot({monospace:this.monospace,chip:!0})}"
        id="filter-label"
        >${this.monospace&&this.label.length>20?M`${this.label.substring(0,20)}&hellip;`:this.label}<mwc-icon-button
          icon="clear"
          @click=${this._handleClear}
        ></mwc-icon-button
      ></span>
      ${this.monospace?M`<grampsjs-tooltip
            for="filter-label"
            content="${this.label}"
            theme="monospace"
          ></grampsjs-tooltip>`:""}
    `}_handleClear(){os(this,"filter-chip:clear")}}window.customElements.define("grampsjs-filter-chip",hh);const ph=t=>(e,i)=>{void 0!==i?i.addInitializer((()=>{customElements.define(t,e)})):customElements.define(t,e)},uh=globalThis,mh=uh.ShadowRoot&&(void 0===uh.ShadyCSS||uh.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,fh=Symbol(),gh=new WeakMap;class _h{constructor(t,e,i){if(this._$cssResult$=!0,i!==fh)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(mh&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=gh.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&gh.set(e,t))}return t}toString(){return this.cssText}}const vh=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,r)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[r+1]),t[0]);return new _h(i,t,fh)},yh=mh?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new _h("string"==typeof t?t:t+"",void 0,fh))(e)})(t):t,{is:bh,defineProperty:xh,getOwnPropertyDescriptor:wh,getOwnPropertyNames:kh,getOwnPropertySymbols:Th,getPrototypeOf:Sh}=Object,Ch=globalThis,Eh=Ch.trustedTypes,$h=Eh?Eh.emptyScript:"",Ah=Ch.reactiveElementPolyfillSupport,Ih=(t,e)=>t,Mh={toAttribute(t,e){switch(e){case Boolean:t=t?$h:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},Lh=(t,e)=>!bh(t,e),Ph={attribute:!0,type:String,converter:Mh,reflect:!1,hasChanged:Lh};Symbol.metadata??=Symbol("metadata"),Ch.litPropertyMetadata??=new WeakMap;class Rh extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Ph){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(t,i,e);void 0!==r&&xh(this.prototype,t,r)}}static getPropertyDescriptor(t,e,i){const{get:r,set:n}=wh(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return r?.call(this)},set(e){const a=r?.call(this);n.call(this,e),this.requestUpdate(t,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Ph}static _$Ei(){if(this.hasOwnProperty(Ih("elementProperties")))return;const t=Sh(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Ih("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ih("properties"))){const t=this.properties,e=[...kh(t),...Th(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(yh(t))}else void 0!==t&&e.push(yh(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$ES(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$E_??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$E_?.delete(t)}_$ES(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{if(mh)t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const i of e){const e=document.createElement("style"),r=uh.litNonce;void 0!==r&&e.setAttribute("nonce",r),e.textContent=i.cssText,t.appendChild(e)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$E_?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$E_?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e){const i=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,i);if(void 0!==r&&!0===i.reflect){const n=(void 0!==i.converter?.toAttribute?i.converter:Mh).toAttribute(e,i.type);this._$Em=t,null==n?this.removeAttribute(r):this.setAttribute(r,n),this._$Em=null}}_$AK(t,e){const i=this.constructor,r=i._$Eh.get(t);if(void 0!==r&&this._$Em!==r){const t=i.getPropertyOptions(r),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:Mh;this._$Em=r,this[r]=n.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,i,r=!1,n){if(void 0!==t){if(i??=this.constructor.getPropertyOptions(t),!(i.hasChanged??Lh)(r?n:this[t],e))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t)!0!==i.wrapped||this._$AL.has(e)||void 0===this[e]||this.C(e,this[e],i)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$E_?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$ET()}catch(e){throw t=!1,this._$ET(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$E_?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EO(t,this[t]))),this._$ET()}updated(t){}firstUpdated(t){}}Rh.elementStyles=[],Rh.shadowRootOptions={mode:"open"},Rh[Ih("elementProperties")]=new Map,Rh[Ih("finalized")]=new Map,Ah?.({ReactiveElement:Rh}),(Ch.reactiveElementVersions??=[]).push("2.0.2");const zh={attribute:!0,type:String,converter:Mh,reflect:!1,hasChanged:Lh},Dh=(t=zh,e,i)=>{const{kind:r,metadata:n}=i;let a=globalThis.litPropertyMetadata.get(n);if(void 0===a&&globalThis.litPropertyMetadata.set(n,a=new Map),a.set(i.name,t),"accessor"===r){const{name:r}=i;return{set(i){const n=e.get.call(this);e.set.call(this,i),this.requestUpdate(r,n,t)},init(e){return void 0!==e&&this.C(r,void 0,t),e}}}if("setter"===r){const{name:r}=i;return function(i){const n=this[r];e.call(this,i),this.requestUpdate(r,n,t)}}throw Error("Unsupported decorator location: "+r)};function jh(t){return(e,i)=>"object"==typeof i?Dh(t,e,i):((t,e,i)=>{const r=e.hasOwnProperty(i);return e.constructor.createProperty(i,r?{...t,wrapped:!0}:t),r?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}function Oh(t){return jh({...t,state:!0,attribute:!1})}const Bh=(t,e,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&"object"!=typeof e&&Object.defineProperty(t,e,i),i);function Fh(t,e){return(i,r,n)=>{const a=e=>e.renderRoot?.querySelector(t)??null;if(e){const{get:t,set:e}="object"==typeof r?i:n??(()=>{const t=Symbol();return{get(){return this[t]},set(e){this[t]=e}}})();return Bh(i,r,{get(){let i=t.call(this);return void 0===i&&(i=a(this),(null!==i||this.hasUpdated)&&e.call(this,i)),i}})}return Bh(i,r,{get(){return a(this)}})}}let Nh;function Hh(t){return(e,i)=>Bh(e,i,{async get(){return await this.updateComplete,this.renderRoot?.querySelector(t)??null}})}function Vh(t){return(e,i)=>{const{slot:r,selector:n}=t??{},a="slot"+(r?`[name=${r}]`:":not([name])");return Bh(e,i,{get(){const e=this.renderRoot?.querySelector(a),i=e?.assignedElements(t)??[];return void 0===n?i:i.filter((t=>t.matches(n)))}})}}function Uh(t){return(e,i)=>{const{slot:r}=t??{},n="slot"+(r?`[name=${r}]`:":not([name])");return Bh(e,i,{get(){const e=this.renderRoot?.querySelector(n);return e?.assignedNodes(t)??[]}})}}const Yh=globalThis,Zh=Yh.trustedTypes,qh=Zh?Zh.createPolicy("lit-html",{createHTML:t=>t}):void 0,Wh="$lit$",Gh=`lit$${(Math.random()+"").slice(9)}$`,Xh="?"+Gh,Kh=`<${Xh}>`,Jh=document,Qh=()=>Jh.createComment(""),tp=t=>null===t||"object"!=typeof t&&"function"!=typeof t,ep=Array.isArray,ip="[ \t\n\f\r]",rp=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,np=/-->/g,ap=/>/g,sp=RegExp(`>|${ip}(?:([^\\s"'>=/]+)(${ip}*=${ip}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),op=/'/g,lp=/"/g,cp=/^(?:script|style|textarea|title)$/i,dp=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),hp=Symbol.for("lit-noChange"),pp=Symbol.for("lit-nothing"),up=new WeakMap,mp=Jh.createTreeWalker(Jh,129);function fp(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==qh?qh.createHTML(e):e}const gp=(t,e)=>{const i=t.length-1,r=[];let n,a=2===e?"<svg>":"",s=rp;for(let e=0;e<i;e++){const i=t[e];let o,l,c=-1,d=0;for(;d<i.length&&(s.lastIndex=d,l=s.exec(i),null!==l);)d=s.lastIndex,s===rp?"!--"===l[1]?s=np:void 0!==l[1]?s=ap:void 0!==l[2]?(cp.test(l[2])&&(n=RegExp("</"+l[2],"g")),s=sp):void 0!==l[3]&&(s=sp):s===sp?">"===l[0]?(s=n??rp,c=-1):void 0===l[1]?c=-2:(c=s.lastIndex-l[2].length,o=l[1],s=void 0===l[3]?sp:'"'===l[3]?lp:op):s===lp||s===op?s=sp:s===np||s===ap?s=rp:(s=sp,n=void 0);const h=s===sp&&t[e+1].startsWith("/>")?" ":"";a+=s===rp?i+Kh:c>=0?(r.push(o),i.slice(0,c)+Wh+i.slice(c)+Gh+h):i+Gh+(-2===c?e:h)}return[fp(t,a+(t[i]||"<?>")+(2===e?"</svg>":"")),r]};class _p{constructor({strings:t,_$litType$:e},i){let r;this.parts=[];let n=0,a=0;const s=t.length-1,o=this.parts,[l,c]=gp(t,e);if(this.el=_p.createElement(l,i),mp.currentNode=this.el.content,2===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(r=mp.nextNode())&&o.length<s;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(Wh)){const e=c[a++],i=r.getAttribute(t).split(Gh),s=/([.?@])?(.*)/.exec(e);o.push({type:1,index:n,name:s[2],strings:i,ctor:"."===s[1]?wp:"?"===s[1]?kp:"@"===s[1]?Tp:xp}),r.removeAttribute(t)}else t.startsWith(Gh)&&(o.push({type:6,index:n}),r.removeAttribute(t));if(cp.test(r.tagName)){const t=r.textContent.split(Gh),e=t.length-1;if(e>0){r.textContent=Zh?Zh.emptyScript:"";for(let i=0;i<e;i++)r.append(t[i],Qh()),mp.nextNode(),o.push({type:2,index:++n});r.append(t[e],Qh())}}}else if(8===r.nodeType)if(r.data===Xh)o.push({type:2,index:n});else{let t=-1;for(;-1!==(t=r.data.indexOf(Gh,t+1));)o.push({type:7,index:n}),t+=Gh.length-1}n++}}static createElement(t,e){const i=Jh.createElement("template");return i.innerHTML=t,i}}function vp(t,e,i=t,r){if(e===hp)return e;let n=void 0!==r?i._$Co?.[r]:i._$Cl;const a=tp(e)?void 0:e._$litDirective$;return n?.constructor!==a&&(n?._$AO?.(!1),void 0===a?n=void 0:(n=new a(t),n._$AT(t,i,r)),void 0!==r?(i._$Co??=[])[r]=n:i._$Cl=n),void 0!==n&&(e=vp(t,n._$AS(t,e.values),n,r)),e}class yp{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,r=(t?.creationScope??Jh).importNode(e,!0);mp.currentNode=r;let n=mp.nextNode(),a=0,s=0,o=i[0];for(;void 0!==o;){if(a===o.index){let e;2===o.type?e=new bp(n,n.nextSibling,this,t):1===o.type?e=new o.ctor(n,o.name,o.strings,this,t):6===o.type&&(e=new Sp(n,this,t)),this._$AV.push(e),o=i[++s]}a!==o?.index&&(n=mp.nextNode(),a++)}return mp.currentNode=Jh,r}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class bp{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,r){this.type=2,this._$AH=pp,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=vp(this,t,e),tp(t)?t===pp||null==t||""===t?(this._$AH!==pp&&this._$AR(),this._$AH=pp):t!==this._$AH&&t!==hp&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>ep(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==pp&&tp(this._$AH)?this._$AA.nextSibling.data=t:this.$(Jh.createTextNode(t)),this._$AH=t}g(t){const{values:e,_$litType$:i}=t,r="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=_p.createElement(fp(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===r)this._$AH.p(e);else{const t=new yp(r,this),i=t.u(this.options);t.p(e),this.$(i),this._$AH=t}}_$AC(t){let e=up.get(t.strings);return void 0===e&&up.set(t.strings,e=new _p(t)),e}T(t){ep(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,r=0;for(const n of t)r===e.length?e.push(i=new bp(this.k(Qh()),this.k(Qh()),this,this.options)):i=e[r],i._$AI(n),r++;r<e.length&&(this._$AR(i&&i._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class xp{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,r,n){this.type=1,this._$AH=pp,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=pp}_$AI(t,e=this,i,r){const n=this.strings;let a=!1;if(void 0===n)t=vp(this,t,e,0),a=!tp(t)||t!==this._$AH&&t!==hp,a&&(this._$AH=t);else{const r=t;let s,o;for(t=n[0],s=0;s<n.length-1;s++)o=vp(this,r[i+s],e,s),o===hp&&(o=this._$AH[s]),a||=!tp(o)||o!==this._$AH[s],o===pp?t=pp:t!==pp&&(t+=(o??"")+n[s+1]),this._$AH[s]=o}a&&!r&&this.O(t)}O(t){t===pp?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class wp extends xp{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===pp?void 0:t}}class kp extends xp{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==pp)}}class Tp extends xp{constructor(t,e,i,r,n){super(t,e,i,r,n),this.type=5}_$AI(t,e=this){if((t=vp(this,t,e,0)??pp)===hp)return;const i=this._$AH,r=t===pp&&i!==pp||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==pp&&(i===pp||r);r&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class Sp{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){vp(this,t)}}const Cp=Yh.litHtmlPolyfillSupport;Cp?.(_p,bp),(Yh.litHtmlVersions??=[]).push("3.1.0");const Ep=(t,e,i)=>{const r=i?.renderBefore??e;let n=r._$litPart$;if(void 0===n){const t=i?.renderBefore??null;r._$litPart$=n=new bp(e.insertBefore(Qh(),t),t,void 0,i??{})}return n._$AI(t),n};class $p extends Rh{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Ep(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return hp}}$p._$litElement$=!0,$p.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:$p});const Ap=globalThis.litElementPolyfillSupport;Ap?.({LitElement:$p}),(globalThis.litElementVersions??=[]).push("4.0.2");const Ip=1,Mp=3,Lp=4,Pp=t=>(...e)=>({_$litDirective$:t,values:e});class Rp{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}const zp=Pp(class extends Rp{constructor(t){if(super(t),t.type!==Ip||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){if(void 0===this.it){this.it=new Set,void 0!==t.strings&&(this.st=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in e)e[t]&&!this.st?.has(t)&&this.it.add(t);return this.render(e)}const i=t.element.classList;for(const t of this.it)t in e||(i.remove(t),this.it.delete(t));for(const t in e){const r=!!e[t];r===this.it.has(t)||this.st?.has(t)||(r?(i.add(t),this.it.add(t)):(i.remove(t),this.it.delete(t)))}return hp}}),Dp="cubic-bezier(0.2, 0, 0, 1)",jp="cubic-bezier(.3,0,0,1)",Op="cubic-bezier(.3,0,.8,.15)";class Bp extends $p{constructor(){super(...arguments),this.disabled=!1,this.error=!1,this.focused=!1,this.label="",this.populated=!1,this.required=!1,this.resizable=!1,this.supportingText="",this.errorText="",this.count=-1,this.max=-1,this.hasStart=!1,this.hasEnd=!1,this.isAnimating=!1,this.refreshErrorAlert=!1,this.disableTransitions=!1}get counterText(){const t=this.count??-1,e=this.max??-1;return t<0||e<=0?"":`${t} / ${e}`}get supportingOrErrorText(){return this.error&&this.errorText?this.errorText:this.supportingText}reannounceError(){this.refreshErrorAlert=!0}update(t){t.has("disabled")&&void 0!==t.get("disabled")&&(this.disableTransitions=!0),this.disabled&&this.focused&&(t.set("focused",!0),this.focused=!1),this.animateLabelIfNeeded({wasFocused:t.get("focused"),wasPopulated:t.get("populated")}),super.update(t)}render(){const t=this.renderLabel(!0),e=this.renderLabel(!1),i=this.renderOutline?.(t),r={disabled:this.disabled,"disable-transitions":this.disableTransitions,error:this.error&&!this.disabled,focused:this.focused,"with-start":this.hasStart,"with-end":this.hasEnd,populated:this.populated,resizable:this.resizable,required:this.required,"no-label":!this.label};return dp`
      <div class="field ${zp(r)}">
        <div class="container-overflow">
          ${this.renderBackground?.()} ${this.renderIndicator?.()} ${i}
          <div class="container">
            <div class="start">
              <slot name="start"></slot>
            </div>
            <div class="middle">
              <div class="label-wrapper">
                ${e} ${i?pp:t}
              </div>
              <div class="content">
                <slot></slot>
              </div>
            </div>
            <div class="end">
              <slot name="end"></slot>
            </div>
          </div>
        </div>
        ${this.renderSupportingText()}
      </div>
    `}updated(t){(t.has("supportingText")||t.has("errorText")||t.has("count")||t.has("max"))&&this.updateSlottedAriaDescribedBy(),this.refreshErrorAlert&&requestAnimationFrame((()=>{this.refreshErrorAlert=!1})),this.disableTransitions&&requestAnimationFrame((()=>{this.disableTransitions=!1}))}renderSupportingText(){const{supportingOrErrorText:t,counterText:e}=this;if(!t&&!e)return pp;const i=dp`<span>${t}</span>`,r=e?dp`<span class="counter">${e}</span>`:pp,n=this.error&&this.errorText&&!this.refreshErrorAlert;return dp`
      <div class="supporting-text" role=${n?"alert":pp}>${i}${r}</div>
      <slot
        name="aria-describedby"
        @slotchange=${this.updateSlottedAriaDescribedBy}></slot>
    `}updateSlottedAriaDescribedBy(){for(const t of this.slottedAriaDescribedBy)Ep(dp`${this.supportingOrErrorText} ${this.counterText}`,t),t.setAttribute("hidden","")}renderLabel(t){if(!this.label)return pp;let e;e=t?this.focused||this.populated||this.isAnimating:!this.focused&&!this.populated&&!this.isAnimating;const i={hidden:!e,floating:t,resting:!t},r=`${this.label}${this.required?"*":""}`;return dp`
      <span class="label ${zp(i)}" aria-hidden=${!e}
        >${r}</span
      >
    `}animateLabelIfNeeded({wasFocused:t,wasPopulated:e}){if(!this.label)return;t??(t=this.focused),e??(e=this.populated);(t||e)!==(this.focused||this.populated)&&(this.isAnimating=!0,this.labelAnimation?.cancel(),this.labelAnimation=this.floatingLabelEl?.animate(this.getLabelKeyframes(),{duration:150,easing:Dp}),this.labelAnimation?.addEventListener("finish",(()=>{this.isAnimating=!1})))}getLabelKeyframes(){const{floatingLabelEl:t,restingLabelEl:e}=this;if(!t||!e)return[];const{x:i,y:r,height:n}=t.getBoundingClientRect(),{x:a,y:s,height:o}=e.getBoundingClientRect(),l=t.scrollWidth,c=e.scrollWidth,d=c/l,h=`translateX(${a-i}px) translateY(${s-r+Math.round((o-n*d)/2)}px) scale(${d})`,p="translateX(0) translateY(0) scale(1)",u=e.clientWidth,m=c>u?u/d+"px":"";return this.focused||this.populated?[{transform:h,width:m},{transform:p,width:m}]:[{transform:p,width:m},{transform:h,width:m}]}getSurfacePositionClientRect(){return this.containerEl.getBoundingClientRect()}}it([jh({type:Boolean})],Bp.prototype,"disabled",void 0),it([jh({type:Boolean})],Bp.prototype,"error",void 0),it([jh({type:Boolean})],Bp.prototype,"focused",void 0),it([jh()],Bp.prototype,"label",void 0),it([jh({type:Boolean})],Bp.prototype,"populated",void 0),it([jh({type:Boolean})],Bp.prototype,"required",void 0),it([jh({type:Boolean})],Bp.prototype,"resizable",void 0),it([jh({attribute:"supporting-text"})],Bp.prototype,"supportingText",void 0),it([jh({attribute:"error-text"})],Bp.prototype,"errorText",void 0),it([jh({type:Number})],Bp.prototype,"count",void 0),it([jh({type:Number})],Bp.prototype,"max",void 0),it([jh({type:Boolean,attribute:"has-start"})],Bp.prototype,"hasStart",void 0),it([jh({type:Boolean,attribute:"has-end"})],Bp.prototype,"hasEnd",void 0),it([Vh({slot:"aria-describedby"})],Bp.prototype,"slottedAriaDescribedBy",void 0),it([Oh()],Bp.prototype,"isAnimating",void 0),it([Oh()],Bp.prototype,"refreshErrorAlert",void 0),it([Oh()],Bp.prototype,"disableTransitions",void 0),it([Fh(".label.floating")],Bp.prototype,"floatingLabelEl",void 0),it([Fh(".label.resting")],Bp.prototype,"restingLabelEl",void 0),it([Fh(".container")],Bp.prototype,"containerEl",void 0);class Fp extends Bp{renderOutline(t){return dp`
      <div class="outline">
        <div class="outline-start"></div>
        <div class="outline-notch">
          <div class="outline-panel-inactive"></div>
          <div class="outline-panel-active"></div>
          <div class="outline-label">${t}</div>
        </div>
        <div class="outline-end"></div>
      </div>
    `}}const Np=vh`@layer styles{:host{--_bottom-space: var(--md-outlined-field-bottom-space, 16px);--_content-color: var(--md-outlined-field-content-color, var(--md-sys-color-on-surface, #1d1b20));--_content-font: var(--md-outlined-field-content-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_content-line-height: var(--md-outlined-field-content-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_content-size: var(--md-outlined-field-content-size, var(--md-sys-typescale-body-large-size, 1rem));--_content-weight: var(--md-outlined-field-content-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_disabled-content-color: var(--md-outlined-field-disabled-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-content-opacity: var(--md-outlined-field-disabled-content-opacity, 0.38);--_disabled-label-text-color: var(--md-outlined-field-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-outlined-field-disabled-label-text-opacity, 0.38);--_disabled-leading-content-color: var(--md-outlined-field-disabled-leading-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-content-opacity: var(--md-outlined-field-disabled-leading-content-opacity, 0.38);--_disabled-outline-color: var(--md-outlined-field-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-opacity: var(--md-outlined-field-disabled-outline-opacity, 0.12);--_disabled-outline-width: var(--md-outlined-field-disabled-outline-width, 1px);--_disabled-supporting-text-color: var(--md-outlined-field-disabled-supporting-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-supporting-text-opacity: var(--md-outlined-field-disabled-supporting-text-opacity, 0.38);--_disabled-trailing-content-color: var(--md-outlined-field-disabled-trailing-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-trailing-content-opacity: var(--md-outlined-field-disabled-trailing-content-opacity, 0.38);--_error-content-color: var(--md-outlined-field-error-content-color, var(--md-sys-color-on-surface, #1d1b20));--_error-focus-content-color: var(--md-outlined-field-error-focus-content-color, var(--md-sys-color-on-surface, #1d1b20));--_error-focus-label-text-color: var(--md-outlined-field-error-focus-label-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-leading-content-color: var(--md-outlined-field-error-focus-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-focus-outline-color: var(--md-outlined-field-error-focus-outline-color, var(--md-sys-color-error, #b3261e));--_error-focus-supporting-text-color: var(--md-outlined-field-error-focus-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-trailing-content-color: var(--md-outlined-field-error-focus-trailing-content-color, var(--md-sys-color-error, #b3261e));--_error-hover-content-color: var(--md-outlined-field-error-hover-content-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-label-text-color: var(--md-outlined-field-error-hover-label-text-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-leading-content-color: var(--md-outlined-field-error-hover-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-hover-outline-color: var(--md-outlined-field-error-hover-outline-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-supporting-text-color: var(--md-outlined-field-error-hover-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-hover-trailing-content-color: var(--md-outlined-field-error-hover-trailing-content-color, var(--md-sys-color-on-error-container, #410e0b));--_error-label-text-color: var(--md-outlined-field-error-label-text-color, var(--md-sys-color-error, #b3261e));--_error-leading-content-color: var(--md-outlined-field-error-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-outline-color: var(--md-outlined-field-error-outline-color, var(--md-sys-color-error, #b3261e));--_error-supporting-text-color: var(--md-outlined-field-error-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-trailing-content-color: var(--md-outlined-field-error-trailing-content-color, var(--md-sys-color-error, #b3261e));--_focus-content-color: var(--md-outlined-field-focus-content-color, var(--md-sys-color-on-surface, #1d1b20));--_focus-label-text-color: var(--md-outlined-field-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_focus-leading-content-color: var(--md-outlined-field-focus-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-outline-color: var(--md-outlined-field-focus-outline-color, var(--md-sys-color-primary, #6750a4));--_focus-outline-width: var(--md-outlined-field-focus-outline-width, 3px);--_focus-supporting-text-color: var(--md-outlined-field-focus-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-trailing-content-color: var(--md-outlined-field-focus-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-content-color: var(--md-outlined-field-hover-content-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-label-text-color: var(--md-outlined-field-hover-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-leading-content-color: var(--md-outlined-field-hover-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-outline-color: var(--md-outlined-field-hover-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-outline-width: var(--md-outlined-field-hover-outline-width, 1px);--_hover-supporting-text-color: var(--md-outlined-field-hover-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-trailing-content-color: var(--md-outlined-field-hover-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-color: var(--md-outlined-field-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-font: var(--md-outlined-field-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-outlined-field-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_label-text-padding-bottom: var(--md-outlined-field-label-text-padding-bottom, 8px);--_label-text-populated-line-height: var(--md-outlined-field-label-text-populated-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_label-text-populated-size: var(--md-outlined-field-label-text-populated-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_label-text-size: var(--md-outlined-field-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_label-text-weight: var(--md-outlined-field-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_leading-content-color: var(--md-outlined-field-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_leading-space: var(--md-outlined-field-leading-space, 16px);--_outline-color: var(--md-outlined-field-outline-color, var(--md-sys-color-outline, #79747e));--_outline-label-padding: var(--md-outlined-field-outline-label-padding, 4px);--_outline-width: var(--md-outlined-field-outline-width, 1px);--_supporting-text-color: var(--md-outlined-field-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_supporting-text-font: var(--md-outlined-field-supporting-text-font, var(--md-sys-typescale-body-small-font, var(--md-ref-typeface-plain, Roboto)));--_supporting-text-leading-space: var(--md-outlined-field-supporting-text-leading-space, 16px);--_supporting-text-line-height: var(--md-outlined-field-supporting-text-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_supporting-text-size: var(--md-outlined-field-supporting-text-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_supporting-text-top-space: var(--md-outlined-field-supporting-text-top-space, 4px);--_supporting-text-trailing-space: var(--md-outlined-field-supporting-text-trailing-space, 16px);--_supporting-text-weight: var(--md-outlined-field-supporting-text-weight, var(--md-sys-typescale-body-small-weight, var(--md-ref-typeface-weight-regular, 400)));--_top-space: var(--md-outlined-field-top-space, 16px);--_trailing-content-color: var(--md-outlined-field-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_trailing-space: var(--md-outlined-field-trailing-space, 16px);--_container-shape-start-start: var(--md-outlined-field-container-shape-start-start, var(--md-outlined-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-start-end: var(--md-outlined-field-container-shape-start-end, var(--md-outlined-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-end-end: var(--md-outlined-field-container-shape-end-end, var(--md-outlined-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-end-start: var(--md-outlined-field-container-shape-end-start, var(--md-outlined-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)))}.outline{border-color:var(--_outline-color);border-radius:inherit;display:flex;pointer-events:none;height:100%;position:absolute;width:100%;z-index:1}.outline-start::before,.outline-start::after,.outline-panel-inactive::before,.outline-panel-inactive::after,.outline-panel-active::before,.outline-panel-active::after,.outline-end::before,.outline-end::after{border:inherit;content:"";inset:0;position:absolute}.outline-start,.outline-end{border:inherit;border-radius:inherit;box-sizing:border-box;position:relative}.outline-start::before,.outline-start::after,.outline-end::before,.outline-end::after{border-bottom-style:solid;border-top-style:solid}.outline-start::after,.outline-end::after{opacity:0;transition:opacity 150ms cubic-bezier(0.2, 0, 0, 1)}.focused .outline-start::after,.focused .outline-end::after{opacity:1}.outline-start::before,.outline-start::after{border-inline-start-style:solid;border-inline-end-style:none;border-start-start-radius:inherit;border-start-end-radius:0;border-end-start-radius:inherit;border-end-end-radius:0;margin-inline-end:var(--_outline-label-padding)}.outline-end{flex-grow:1;margin-inline-start:calc(-1*var(--_outline-label-padding))}.outline-end::before,.outline-end::after{border-inline-start-style:none;border-inline-end-style:solid;border-start-start-radius:0;border-start-end-radius:inherit;border-end-start-radius:0;border-end-end-radius:inherit}.outline-notch{align-items:flex-start;border:inherit;display:flex;margin-inline-start:calc(-1*var(--_outline-label-padding));margin-inline-end:var(--_outline-label-padding);max-width:calc(100% - var(--_leading-space) - var(--_trailing-space));padding:0 var(--_outline-label-padding);position:relative}.no-label .outline-notch{display:none}.outline-panel-inactive,.outline-panel-active{border:inherit;border-bottom-style:solid;inset:0;position:absolute}.outline-panel-inactive::before,.outline-panel-inactive::after,.outline-panel-active::before,.outline-panel-active::after{border-top-style:solid;border-bottom:none;bottom:auto;transform:scaleX(1);transition:transform 150ms cubic-bezier(0.2, 0, 0, 1)}.outline-panel-inactive::before,.outline-panel-active::before{right:50%;transform-origin:top left}.outline-panel-inactive::after,.outline-panel-active::after{left:50%;transform-origin:top right}.populated .outline-panel-inactive::before,.populated .outline-panel-inactive::after,.populated .outline-panel-active::before,.populated .outline-panel-active::after,.focused .outline-panel-inactive::before,.focused .outline-panel-inactive::after,.focused .outline-panel-active::before,.focused .outline-panel-active::after{transform:scaleX(0)}.outline-panel-active{opacity:0;transition:opacity 150ms cubic-bezier(0.2, 0, 0, 1)}.focused .outline-panel-active{opacity:1}.outline-label{display:flex;max-width:100%;transform:translateY(calc(-100% + var(--_label-text-padding-bottom)))}.outline-start,.field:not(.with-start) .content ::slotted(*){padding-inline-start:max(var(--_leading-space),max(var(--_container-shape-start-start),var(--_container-shape-end-start)) + var(--_outline-label-padding))}.field:not(.with-start) .label-wrapper{margin-inline-start:max(var(--_leading-space),max(var(--_container-shape-start-start),var(--_container-shape-end-start)) + var(--_outline-label-padding))}.field:not(.with-end) .content ::slotted(*){padding-inline-end:max(var(--_trailing-space),max(var(--_container-shape-start-end),var(--_container-shape-end-end)))}.field:not(.with-end) .label-wrapper{margin-inline-end:max(var(--_trailing-space),max(var(--_container-shape-start-end),var(--_container-shape-end-end)))}.outline-start::before,.outline-end::before,.outline-panel-inactive,.outline-panel-inactive::before,.outline-panel-inactive::after{border-width:var(--_outline-width)}:hover .outline{border-color:var(--_hover-outline-color);color:var(--_hover-outline-color)}:hover .outline-start::before,:hover .outline-end::before,:hover .outline-panel-inactive,:hover .outline-panel-inactive::before,:hover .outline-panel-inactive::after{border-width:var(--_hover-outline-width)}.focused .outline{border-color:var(--_focus-outline-color);color:var(--_focus-outline-color)}.outline-start::after,.outline-end::after,.outline-panel-active,.outline-panel-active::before,.outline-panel-active::after{border-width:var(--_focus-outline-width)}.disabled .outline{border-color:var(--_disabled-outline-color);color:var(--_disabled-outline-color)}.disabled .outline-start,.disabled .outline-end,.disabled .outline-panel-inactive{opacity:var(--_disabled-outline-opacity)}.disabled .outline-start::before,.disabled .outline-end::before,.disabled .outline-panel-inactive,.disabled .outline-panel-inactive::before,.disabled .outline-panel-inactive::after{border-width:var(--_disabled-outline-width)}.error .outline{border-color:var(--_error-outline-color);color:var(--_error-outline-color)}.error:hover .outline{border-color:var(--_error-hover-outline-color);color:var(--_error-hover-outline-color)}.error.focused .outline{border-color:var(--_error-focus-outline-color);color:var(--_error-focus-outline-color)}.resizable .container{bottom:var(--_focus-outline-width);inset-inline-end:var(--_focus-outline-width);clip-path:inset(var(--_focus-outline-width) 0 0 var(--_focus-outline-width))}.resizable .container>*{top:var(--_focus-outline-width);inset-inline-start:var(--_focus-outline-width)}.resizable .container:dir(rtl){clip-path:inset(var(--_focus-outline-width) var(--_focus-outline-width) 0 0)}}@layer hcm{@media(forced-colors: active){.disabled .outline{border-color:GrayText;color:GrayText}.disabled :is(.outline-start,.outline-end,.outline-panel-inactive){opacity:1}}}
`,Hp=vh`:host{display:inline-flex;resize:both}.field{display:flex;flex:1;flex-direction:column;writing-mode:horizontal-tb;max-width:100%}.container-overflow{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-end-radius:var(--_container-shape-end-end);border-end-start-radius:var(--_container-shape-end-start);display:flex;height:100%;position:relative}.container{align-items:center;border-radius:inherit;display:flex;flex:1;max-height:100%;min-height:100%;min-width:min-content;position:relative}.field,.container-overflow{resize:inherit}.resizable:not(.disabled) .container{resize:inherit;overflow:hidden}.disabled{pointer-events:none}@layer styles{.start,.middle,.end{display:flex;box-sizing:border-box;height:100%;position:relative}.start{color:var(--_leading-content-color)}.end{color:var(--_trailing-content-color)}.start,.end{align-items:center;justify-content:center}.with-start .start,.with-end .end{min-width:48px}.with-start .start{margin-inline-end:4px}.with-end .end{margin-inline-start:4px}.middle{align-items:stretch;align-self:baseline;flex:1}.content{color:var(--_content-color);display:flex;flex:1;opacity:0;transition:opacity 83ms cubic-bezier(0.2, 0, 0, 1)}.no-label .content,.focused .content,.populated .content{opacity:1;transition-delay:67ms}:is(.disabled,.disable-transitions) .content{transition:none}.content ::slotted(*){all:unset;color:currentColor;font-family:var(--_content-font);font-size:var(--_content-size);line-height:var(--_content-line-height);font-weight:var(--_content-weight);width:100%;overflow-wrap:revert;white-space:revert}.content ::slotted(:not(textarea)){padding-top:var(--_top-space);padding-bottom:var(--_bottom-space)}.content ::slotted(textarea){margin-top:var(--_top-space);margin-bottom:var(--_bottom-space)}:hover .content{color:var(--_hover-content-color)}:hover .start{color:var(--_hover-leading-content-color)}:hover .end{color:var(--_hover-trailing-content-color)}.focused .content{color:var(--_focus-content-color)}.focused .start{color:var(--_focus-leading-content-color)}.focused .end{color:var(--_focus-trailing-content-color)}.disabled .content{color:var(--_disabled-content-color)}.disabled.no-label .content,.disabled.focused .content,.disabled.populated .content{opacity:var(--_disabled-content-opacity)}.disabled .start{color:var(--_disabled-leading-content-color);opacity:var(--_disabled-leading-content-opacity)}.disabled .end{color:var(--_disabled-trailing-content-color);opacity:var(--_disabled-trailing-content-opacity)}.error .content{color:var(--_error-content-color)}.error .start{color:var(--_error-leading-content-color)}.error .end{color:var(--_error-trailing-content-color)}.error:hover .content{color:var(--_error-hover-content-color)}.error:hover .start{color:var(--_error-hover-leading-content-color)}.error:hover .end{color:var(--_error-hover-trailing-content-color)}.error.focused .content{color:var(--_error-focus-content-color)}.error.focused .start{color:var(--_error-focus-leading-content-color)}.error.focused .end{color:var(--_error-focus-trailing-content-color)}}@layer hcm{@media(forced-colors: active){.disabled :is(.start,.content,.end){color:GrayText;opacity:1}}}@layer styles{.label{box-sizing:border-box;color:var(--_label-text-color);overflow:hidden;max-width:100%;text-overflow:ellipsis;white-space:nowrap;z-index:1;font-family:var(--_label-text-font);font-size:var(--_label-text-size);line-height:var(--_label-text-line-height);font-weight:var(--_label-text-weight);width:min-content}.label-wrapper{inset:0;pointer-events:none;position:absolute}.label.resting{position:absolute;top:var(--_top-space)}.label.floating{font-size:var(--_label-text-populated-size);line-height:var(--_label-text-populated-line-height);transform-origin:top left}.label.hidden{opacity:0}.no-label .label{display:none}.label-wrapper{inset:0;position:absolute;text-align:initial}:hover .label{color:var(--_hover-label-text-color)}.focused .label{color:var(--_focus-label-text-color)}.disabled .label{color:var(--_disabled-label-text-color)}.disabled .label:not(.hidden){opacity:var(--_disabled-label-text-opacity)}.error .label{color:var(--_error-label-text-color)}.error:hover .label{color:var(--_error-hover-label-text-color)}.error.focused .label{color:var(--_error-focus-label-text-color)}}@layer hcm{@media(forced-colors: active){.disabled .label:not(.hidden){color:GrayText;opacity:1}}}@layer styles{.supporting-text{color:var(--_supporting-text-color);display:flex;font-family:var(--_supporting-text-font);font-size:var(--_supporting-text-size);line-height:var(--_supporting-text-line-height);font-weight:var(--_supporting-text-weight);gap:16px;justify-content:space-between;padding-inline-start:var(--_supporting-text-leading-space);padding-inline-end:var(--_supporting-text-trailing-space);padding-top:var(--_supporting-text-top-space)}.supporting-text :nth-child(2){flex-shrink:0}:hover .supporting-text{color:var(--_hover-supporting-text-color)}.focus .supporting-text{color:var(--_focus-supporting-text-color)}.disabled .supporting-text{color:var(--_disabled-supporting-text-color);opacity:var(--_disabled-supporting-text-opacity)}.error .supporting-text{color:var(--_error-supporting-text-color)}.error:hover .supporting-text{color:var(--_error-hover-supporting-text-color)}.error.focus .supporting-text{color:var(--_error-focus-supporting-text-color)}}@layer hcm{@media(forced-colors: active){.disabled .supporting-text{color:GrayText;opacity:1}}}
`;let Vp=class extends Fp{};Vp.styles=[Hp,Np],Vp=it([ph("md-outlined-field")],Vp);const Up=Symbol.for(""),Yp=t=>{if(t?.r===Up)return t?._$litStatic$},Zp=(t,...e)=>({_$litStatic$:e.reduce(((e,i,r)=>e+(t=>{if(void 0!==t._$litStatic$)return t._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${t}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+t[r+1]),t[0]),r:Up}),qp=new Map,Wp=(t=>(e,...i)=>{const r=i.length;let n,a;const s=[],o=[];let l,c=0,d=!1;for(;c<r;){for(l=e[c];c<r&&void 0!==(a=i[c],n=Yp(a));)l+=n+e[++c],d=!0;c!==r&&o.push(a),s.push(l),c++}if(c===r&&s.push(e[r]),d){const t=s.join("$$lit$$");void 0===(e=qp.get(t))&&(s.raw=s,qp.set(t,e=s)),i=o}return t(e,...i)})(dp),Gp=vh`:host{--_caret-color: var(--md-outlined-text-field-caret-color, var(--md-sys-color-primary, #6750a4));--_disabled-input-text-color: var(--md-outlined-text-field-disabled-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-input-text-opacity: var(--md-outlined-text-field-disabled-input-text-opacity, 0.38);--_disabled-label-text-color: var(--md-outlined-text-field-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-outlined-text-field-disabled-label-text-opacity, 0.38);--_disabled-leading-icon-color: var(--md-outlined-text-field-disabled-leading-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-icon-opacity: var(--md-outlined-text-field-disabled-leading-icon-opacity, 0.38);--_disabled-outline-color: var(--md-outlined-text-field-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-opacity: var(--md-outlined-text-field-disabled-outline-opacity, 0.12);--_disabled-outline-width: var(--md-outlined-text-field-disabled-outline-width, 1px);--_disabled-supporting-text-color: var(--md-outlined-text-field-disabled-supporting-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-supporting-text-opacity: var(--md-outlined-text-field-disabled-supporting-text-opacity, 0.38);--_disabled-trailing-icon-color: var(--md-outlined-text-field-disabled-trailing-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-trailing-icon-opacity: var(--md-outlined-text-field-disabled-trailing-icon-opacity, 0.38);--_error-focus-caret-color: var(--md-outlined-text-field-error-focus-caret-color, var(--md-sys-color-error, #b3261e));--_error-focus-input-text-color: var(--md-outlined-text-field-error-focus-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-focus-label-text-color: var(--md-outlined-text-field-error-focus-label-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-leading-icon-color: var(--md-outlined-text-field-error-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-focus-outline-color: var(--md-outlined-text-field-error-focus-outline-color, var(--md-sys-color-error, #b3261e));--_error-focus-supporting-text-color: var(--md-outlined-text-field-error-focus-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-trailing-icon-color: var(--md-outlined-text-field-error-focus-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_error-hover-input-text-color: var(--md-outlined-text-field-error-hover-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-label-text-color: var(--md-outlined-text-field-error-hover-label-text-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-leading-icon-color: var(--md-outlined-text-field-error-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-hover-outline-color: var(--md-outlined-text-field-error-hover-outline-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-supporting-text-color: var(--md-outlined-text-field-error-hover-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-hover-trailing-icon-color: var(--md-outlined-text-field-error-hover-trailing-icon-color, var(--md-sys-color-on-error-container, #410e0b));--_error-input-text-color: var(--md-outlined-text-field-error-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-label-text-color: var(--md-outlined-text-field-error-label-text-color, var(--md-sys-color-error, #b3261e));--_error-leading-icon-color: var(--md-outlined-text-field-error-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-outline-color: var(--md-outlined-text-field-error-outline-color, var(--md-sys-color-error, #b3261e));--_error-supporting-text-color: var(--md-outlined-text-field-error-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-trailing-icon-color: var(--md-outlined-text-field-error-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_focus-input-text-color: var(--md-outlined-text-field-focus-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_focus-label-text-color: var(--md-outlined-text-field-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_focus-leading-icon-color: var(--md-outlined-text-field-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-outline-color: var(--md-outlined-text-field-focus-outline-color, var(--md-sys-color-primary, #6750a4));--_focus-outline-width: var(--md-outlined-text-field-focus-outline-width, 3px);--_focus-supporting-text-color: var(--md-outlined-text-field-focus-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-trailing-icon-color: var(--md-outlined-text-field-focus-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-input-text-color: var(--md-outlined-text-field-hover-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-label-text-color: var(--md-outlined-text-field-hover-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-leading-icon-color: var(--md-outlined-text-field-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-outline-color: var(--md-outlined-text-field-hover-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-outline-width: var(--md-outlined-text-field-hover-outline-width, 1px);--_hover-supporting-text-color: var(--md-outlined-text-field-hover-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-trailing-icon-color: var(--md-outlined-text-field-hover-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-color: var(--md-outlined-text-field-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_input-text-font: var(--md-outlined-text-field-input-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_input-text-line-height: var(--md-outlined-text-field-input-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_input-text-placeholder-color: var(--md-outlined-text-field-input-text-placeholder-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-prefix-color: var(--md-outlined-text-field-input-text-prefix-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-size: var(--md-outlined-text-field-input-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_input-text-suffix-color: var(--md-outlined-text-field-input-text-suffix-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-weight: var(--md-outlined-text-field-input-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_label-text-color: var(--md-outlined-text-field-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-font: var(--md-outlined-text-field-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-outlined-text-field-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_label-text-populated-line-height: var(--md-outlined-text-field-label-text-populated-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_label-text-populated-size: var(--md-outlined-text-field-label-text-populated-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_label-text-size: var(--md-outlined-text-field-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_label-text-weight: var(--md-outlined-text-field-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_leading-icon-color: var(--md-outlined-text-field-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_leading-icon-size: var(--md-outlined-text-field-leading-icon-size, 24px);--_outline-color: var(--md-outlined-text-field-outline-color, var(--md-sys-color-outline, #79747e));--_outline-width: var(--md-outlined-text-field-outline-width, 1px);--_supporting-text-color: var(--md-outlined-text-field-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_supporting-text-font: var(--md-outlined-text-field-supporting-text-font, var(--md-sys-typescale-body-small-font, var(--md-ref-typeface-plain, Roboto)));--_supporting-text-line-height: var(--md-outlined-text-field-supporting-text-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_supporting-text-size: var(--md-outlined-text-field-supporting-text-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_supporting-text-weight: var(--md-outlined-text-field-supporting-text-weight, var(--md-sys-typescale-body-small-weight, var(--md-ref-typeface-weight-regular, 400)));--_trailing-icon-color: var(--md-outlined-text-field-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_trailing-icon-size: var(--md-outlined-text-field-trailing-icon-size, 24px);--_container-shape-start-start: var(--md-outlined-text-field-container-shape-start-start, var(--md-outlined-text-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-start-end: var(--md-outlined-text-field-container-shape-start-end, var(--md-outlined-text-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-end-end: var(--md-outlined-text-field-container-shape-end-end, var(--md-outlined-text-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-end-start: var(--md-outlined-text-field-container-shape-end-start, var(--md-outlined-text-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_leading-space: var(--md-outlined-text-field-leading-space, 16px);--_trailing-space: var(--md-outlined-text-field-trailing-space, 16px);--_top-space: var(--md-outlined-text-field-top-space, 16px);--_bottom-space: var(--md-outlined-text-field-bottom-space, 16px);--_input-text-prefix-trailing-space: var(--md-outlined-text-field-input-text-prefix-trailing-space, 2px);--_input-text-suffix-leading-space: var(--md-outlined-text-field-input-text-suffix-leading-space, 2px);--_focus-caret-color: var(--md-outlined-text-field-focus-caret-color, var(--md-sys-color-primary, #6750a4));--md-outlined-field-bottom-space: var(--_bottom-space);--md-outlined-field-container-shape-end-end: var(--_container-shape-end-end);--md-outlined-field-container-shape-end-start: var(--_container-shape-end-start);--md-outlined-field-container-shape-start-end: var(--_container-shape-start-end);--md-outlined-field-container-shape-start-start: var(--_container-shape-start-start);--md-outlined-field-content-color: var(--_input-text-color);--md-outlined-field-content-font: var(--_input-text-font);--md-outlined-field-content-line-height: var(--_input-text-line-height);--md-outlined-field-content-size: var(--_input-text-size);--md-outlined-field-content-weight: var(--_input-text-weight);--md-outlined-field-disabled-content-color: var(--_disabled-input-text-color);--md-outlined-field-disabled-content-opacity: var(--_disabled-input-text-opacity);--md-outlined-field-disabled-label-text-color: var(--_disabled-label-text-color);--md-outlined-field-disabled-label-text-opacity: var(--_disabled-label-text-opacity);--md-outlined-field-disabled-leading-content-color: var(--_disabled-leading-icon-color);--md-outlined-field-disabled-leading-content-opacity: var(--_disabled-leading-icon-opacity);--md-outlined-field-disabled-outline-color: var(--_disabled-outline-color);--md-outlined-field-disabled-outline-opacity: var(--_disabled-outline-opacity);--md-outlined-field-disabled-outline-width: var(--_disabled-outline-width);--md-outlined-field-disabled-supporting-text-color: var(--_disabled-supporting-text-color);--md-outlined-field-disabled-supporting-text-opacity: var(--_disabled-supporting-text-opacity);--md-outlined-field-disabled-trailing-content-color: var(--_disabled-trailing-icon-color);--md-outlined-field-disabled-trailing-content-opacity: var(--_disabled-trailing-icon-opacity);--md-outlined-field-error-content-color: var(--_error-input-text-color);--md-outlined-field-error-focus-content-color: var(--_error-focus-input-text-color);--md-outlined-field-error-focus-label-text-color: var(--_error-focus-label-text-color);--md-outlined-field-error-focus-leading-content-color: var(--_error-focus-leading-icon-color);--md-outlined-field-error-focus-outline-color: var(--_error-focus-outline-color);--md-outlined-field-error-focus-supporting-text-color: var(--_error-focus-supporting-text-color);--md-outlined-field-error-focus-trailing-content-color: var(--_error-focus-trailing-icon-color);--md-outlined-field-error-hover-content-color: var(--_error-hover-input-text-color);--md-outlined-field-error-hover-label-text-color: var(--_error-hover-label-text-color);--md-outlined-field-error-hover-leading-content-color: var(--_error-hover-leading-icon-color);--md-outlined-field-error-hover-outline-color: var(--_error-hover-outline-color);--md-outlined-field-error-hover-supporting-text-color: var(--_error-hover-supporting-text-color);--md-outlined-field-error-hover-trailing-content-color: var(--_error-hover-trailing-icon-color);--md-outlined-field-error-label-text-color: var(--_error-label-text-color);--md-outlined-field-error-leading-content-color: var(--_error-leading-icon-color);--md-outlined-field-error-outline-color: var(--_error-outline-color);--md-outlined-field-error-supporting-text-color: var(--_error-supporting-text-color);--md-outlined-field-error-trailing-content-color: var(--_error-trailing-icon-color);--md-outlined-field-focus-content-color: var(--_focus-input-text-color);--md-outlined-field-focus-label-text-color: var(--_focus-label-text-color);--md-outlined-field-focus-leading-content-color: var(--_focus-leading-icon-color);--md-outlined-field-focus-outline-color: var(--_focus-outline-color);--md-outlined-field-focus-outline-width: var(--_focus-outline-width);--md-outlined-field-focus-supporting-text-color: var(--_focus-supporting-text-color);--md-outlined-field-focus-trailing-content-color: var(--_focus-trailing-icon-color);--md-outlined-field-hover-content-color: var(--_hover-input-text-color);--md-outlined-field-hover-label-text-color: var(--_hover-label-text-color);--md-outlined-field-hover-leading-content-color: var(--_hover-leading-icon-color);--md-outlined-field-hover-outline-color: var(--_hover-outline-color);--md-outlined-field-hover-outline-width: var(--_hover-outline-width);--md-outlined-field-hover-supporting-text-color: var(--_hover-supporting-text-color);--md-outlined-field-hover-trailing-content-color: var(--_hover-trailing-icon-color);--md-outlined-field-label-text-color: var(--_label-text-color);--md-outlined-field-label-text-font: var(--_label-text-font);--md-outlined-field-label-text-line-height: var(--_label-text-line-height);--md-outlined-field-label-text-populated-line-height: var(--_label-text-populated-line-height);--md-outlined-field-label-text-populated-size: var(--_label-text-populated-size);--md-outlined-field-label-text-size: var(--_label-text-size);--md-outlined-field-label-text-weight: var(--_label-text-weight);--md-outlined-field-leading-content-color: var(--_leading-icon-color);--md-outlined-field-leading-space: var(--_leading-space);--md-outlined-field-outline-color: var(--_outline-color);--md-outlined-field-outline-width: var(--_outline-width);--md-outlined-field-supporting-text-color: var(--_supporting-text-color);--md-outlined-field-supporting-text-font: var(--_supporting-text-font);--md-outlined-field-supporting-text-line-height: var(--_supporting-text-line-height);--md-outlined-field-supporting-text-size: var(--_supporting-text-size);--md-outlined-field-supporting-text-weight: var(--_supporting-text-weight);--md-outlined-field-top-space: var(--_top-space);--md-outlined-field-trailing-content-color: var(--_trailing-icon-color);--md-outlined-field-trailing-space: var(--_trailing-space)}
`,Xp={},Kp=Pp(class extends Rp{constructor(t){if(super(t),t.type!==Mp&&t.type!==Ip&&t.type!==Lp)throw Error("The `live` directive is not allowed on child or event bindings");if(!(t=>void 0===t.strings)(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===hp||e===pp)return e;const i=t.element,r=t.name;if(t.type===Mp){if(e===i[r])return hp}else if(t.type===Lp){if(!!e===i.hasAttribute(r))return hp}else if(t.type===Ip&&i.getAttribute(r)===e+"")return hp;return((t,e=Xp)=>{t._$AH=e})(t),e}}),Jp="important",Qp=" !"+Jp,tu=Pp(class extends Rp{constructor(t){if(super(t),t.type!==Ip||"style"!==t.name||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,i)=>{const r=t[i];return null==r?e:e+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`}),"")}update(t,[e]){const{style:i}=t.element;if(void 0===this.ut)return this.ut=new Set(Object.keys(e)),this.render(e);for(const t of this.ut)null==e[t]&&(this.ut.delete(t),t.includes("-")?i.removeProperty(t):i[t]=null);for(const t in e){const r=e[t];if(null!=r){this.ut.add(t);const e="string"==typeof r&&r.endsWith(Qp);t.includes("-")||e?i.setProperty(t,e?r.slice(0,-11):r,e?Jp:""):i[t]=r}}return hp}}),eu=["ariaAtomic","ariaAutoComplete","ariaBusy","ariaChecked","ariaColCount","ariaColIndex","ariaColSpan","ariaCurrent","ariaDisabled","ariaExpanded","ariaHasPopup","ariaHidden","ariaInvalid","ariaKeyShortcuts","ariaLabel","ariaLevel","ariaLive","ariaModal","ariaMultiLine","ariaMultiSelectable","ariaOrientation","ariaPlaceholder","ariaPosInSet","ariaPressed","ariaReadOnly","ariaRequired","ariaRoleDescription","ariaRowCount","ariaRowIndex","ariaRowSpan","ariaSelected","ariaSetSize","ariaSort","ariaValueMax","ariaValueMin","ariaValueNow","ariaValueText"];function iu(t){return t.replace("aria","aria-").replace(/Elements?/g,"").toLowerCase()}function ru(t){for(const e of eu)t.createProperty(e,{attribute:iu(e),reflect:!0});t.addInitializer((t=>{const e={hostConnected(){t.setAttribute("role","presentation")}};t.addController(e)}))}eu.map(iu);const nu={fromAttribute:t=>t??"",toAttribute:t=>t||null};function au(t,e){!e.bubbles||t.shadowRoot&&!e.composed||e.stopPropagation();const i=Reflect.construct(e.constructor,[e.type,e]),r=t.dispatchEvent(i);return r||e.preventDefault(),r}const su=Symbol("internals"),ou=Symbol("privateInternals");function lu(t){return class extends t{get[su](){return this[ou]||(this[ou]=this.attachInternals()),this[ou]}}}const cu=Symbol("createValidator"),du=Symbol("getValidityAnchor"),hu=Symbol("privateValidator"),pu=Symbol("privateSyncValidity"),uu=Symbol("privateCustomValidationMessage");function mu(t){var e;class i extends t{constructor(){super(...arguments),this[e]=""}get validity(){return this[pu](),this[su].validity}get validationMessage(){return this[pu](),this[su].validationMessage}get willValidate(){return this[pu](),this[su].willValidate}checkValidity(){return this[pu](),this[su].checkValidity()}reportValidity(){return this[pu](),this[su].reportValidity()}setCustomValidity(t){this[uu]=t,this[pu]()}requestUpdate(t,e,i){super.requestUpdate(t,e,i),this[pu]()}firstUpdated(t){super.firstUpdated(t),this[pu]()}[(e=uu,pu)](){this[hu]||(this[hu]=this[cu]());const{validity:t,validationMessage:e}=this[hu].getValidity(),i=!!this[uu],r=this[uu]||e;this[su].setValidity({...t,customError:i},r,this[du]()??void 0)}[cu](){throw new Error("Implement [createValidator]")}[du](){throw new Error("Implement [getValidityAnchor]")}}return i}const fu=Symbol("getFormValue"),gu=Symbol("getFormState");function _u(t){class e extends t{get form(){return this[su].form}get labels(){return this[su].labels}get name(){return this.getAttribute("name")??""}set name(t){this.setAttribute("name",t)}get disabled(){return this.hasAttribute("disabled")}set disabled(t){this.toggleAttribute("disabled",t)}attributeChangedCallback(t,e,i){if("name"!==t&&"disabled"!==t)super.attributeChangedCallback(t,e,i);else{const i="disabled"===t?null!==e:e;this.requestUpdate(t,i)}}requestUpdate(t,e,i){super.requestUpdate(t,e,i),this[su].setFormValue(this[fu](),this[gu]())}[fu](){throw new Error("Implement [getFormValue]")}[gu](){return this[fu]()}formDisabledCallback(t){this.disabled=t}}return e.formAssociated=!0,it([jh({noAccessor:!0})],e.prototype,"name",null),it([jh({type:Boolean,noAccessor:!0})],e.prototype,"disabled",null),e}const vu=Symbol("onReportValidity"),yu=Symbol("privateCleanupFormListeners"),bu=Symbol("privateDoNotReportInvalid"),xu=Symbol("privateIsSelfReportingValidity"),wu=Symbol("privateCallOnReportValidity");function ku(t){var e,i,r;class n extends t{constructor(...t){super(...t),this[e]=new AbortController,this[i]=!1,this[r]=!1,this.addEventListener("invalid",(t=>{!this[bu]&&t.isTrusted&&this.addEventListener("invalid",(()=>{this[wu](t)}),{once:!0})}),{capture:!0})}checkValidity(){this[bu]=!0;const t=super.checkValidity();return this[bu]=!1,t}reportValidity(){this[xu]=!0;const t=super.reportValidity();return t&&this[wu](null),this[xu]=!1,t}[(e=yu,i=bu,r=xu,wu)](t){const e=t?.defaultPrevented;if(e)return;this[vu](t);!e&&t?.defaultPrevented&&(this[xu]||function(t,e){if(!t)return!0;let i;for(const e of t.elements)if(e.matches(":invalid")){i=e;break}return i===e}(this[su].form,this))&&this.focus()}[vu](t){throw new Error("Implement [onReportValidity]")}formAssociatedCallback(t){super.formAssociatedCallback&&super.formAssociatedCallback(t),this[yu].abort(),t&&(this[yu]=new AbortController,function(t,e,i,r){const n=function(t){if(!Tu.has(t)){const e=new EventTarget;Tu.set(t,e);for(const i of["reportValidity","requestSubmit"]){const r=t[i];t[i]=function(){e.dispatchEvent(new Event("before"));const t=Reflect.apply(r,this,arguments);return e.dispatchEvent(new Event("after")),t}}}return Tu.get(t)}(e);let a,s=!1,o=!1;n.addEventListener("before",(()=>{o=!0,a=new AbortController,s=!1,t.addEventListener("invalid",(()=>{s=!0}),{signal:a.signal})}),{signal:r}),n.addEventListener("after",(()=>{o=!1,a?.abort(),s||i()}),{signal:r}),e.addEventListener("submit",(()=>{o||i()}),{signal:r})}(this,t,(()=>{this[wu](null)}),this[yu].signal))}}return n}const Tu=new WeakMap;class Su{constructor(t){this.getCurrentState=t,this.currentValidity={validity:{},validationMessage:""}}getValidity(){const t=this.getCurrentState();if(!(!this.prevState||!this.equals(this.prevState,t)))return this.currentValidity;const{validity:e,validationMessage:i}=this.computeValidity(t);return this.prevState=this.copy(t),this.currentValidity={validationMessage:i,validity:{badInput:e.badInput,customError:e.customError,patternMismatch:e.patternMismatch,rangeOverflow:e.rangeOverflow,rangeUnderflow:e.rangeUnderflow,stepMismatch:e.stepMismatch,tooLong:e.tooLong,tooShort:e.tooShort,typeMismatch:e.typeMismatch,valueMissing:e.valueMissing}},this.currentValidity}}class Cu extends Su{computeValidity({state:t,renderedControl:e}){let i=e;Eu(t)&&!i?(i=this.inputControl||document.createElement("input"),this.inputControl=i):i||(i=this.textAreaControl||document.createElement("textarea"),this.textAreaControl=i);const r=Eu(t)?i:null;if(r&&(r.type=t.type),i.value!==t.value&&(i.value=t.value),i.required=t.required,r){const e=t;e.pattern?r.pattern=e.pattern:r.removeAttribute("pattern"),e.min?r.min=e.min:r.removeAttribute("min"),e.max?r.max=e.max:r.removeAttribute("max"),e.step?r.step=e.step:r.removeAttribute("step")}return(t.minLength??-1)>-1?i.setAttribute("minlength",String(t.minLength)):i.removeAttribute("minlength"),(t.maxLength??-1)>-1?i.setAttribute("maxlength",String(t.maxLength)):i.removeAttribute("maxlength"),{validity:i.validity,validationMessage:i.validationMessage}}equals({state:t},{state:e}){const i=t.type===e.type&&t.value===e.value&&t.required===e.required&&t.minLength===e.minLength&&t.maxLength===e.maxLength;return Eu(t)&&Eu(e)?i&&t.pattern===e.pattern&&t.min===e.min&&t.max===e.max&&t.step===e.step:i}copy({state:t}){return{state:Eu(t)?this.copyInput(t):this.copyTextArea(t),renderedControl:null}}copyInput(t){const{type:e,pattern:i,min:r,max:n,step:a}=t;return{...this.copySharedState(t),type:e,pattern:i,min:r,max:n,step:a}}copyTextArea(t){return{...this.copySharedState(t),type:t.type}}copySharedState({value:t,required:e,minLength:i,maxLength:r}){return{value:t,required:e,minLength:i,maxLength:r}}}function Eu(t){return"textarea"!==t.type}const $u=ku(mu(_u(lu($p))));class Au extends $u{constructor(){super(...arguments),this.error=!1,this.errorText="",this.label="",this.required=!1,this.value="",this.prefixText="",this.suffixText="",this.hasLeadingIcon=!1,this.hasTrailingIcon=!1,this.supportingText="",this.textDirection="",this.rows=2,this.cols=20,this.inputMode="",this.max="",this.maxLength=-1,this.min="",this.minLength=-1,this.noSpinner=!1,this.pattern="",this.placeholder="",this.readOnly=!1,this.multiple=!1,this.step="",this.type="text",this.autocomplete="",this.dirty=!1,this.focused=!1,this.nativeError=!1,this.nativeErrorText=""}get selectionDirection(){return this.getInputOrTextarea().selectionDirection}set selectionDirection(t){this.getInputOrTextarea().selectionDirection=t}get selectionEnd(){return this.getInputOrTextarea().selectionEnd}set selectionEnd(t){this.getInputOrTextarea().selectionEnd=t}get selectionStart(){return this.getInputOrTextarea().selectionStart}set selectionStart(t){this.getInputOrTextarea().selectionStart=t}get valueAsNumber(){const t=this.getInput();return t?t.valueAsNumber:NaN}set valueAsNumber(t){const e=this.getInput();e&&(e.valueAsNumber=t,this.value=e.value)}get valueAsDate(){const t=this.getInput();return t?t.valueAsDate:null}set valueAsDate(t){const e=this.getInput();e&&(e.valueAsDate=t,this.value=e.value)}get hasError(){return this.error||this.nativeError}select(){this.getInputOrTextarea().select()}setRangeText(...t){this.getInputOrTextarea().setRangeText(...t),this.value=this.getInputOrTextarea().value}setSelectionRange(t,e,i){this.getInputOrTextarea().setSelectionRange(t,e,i)}stepDown(t){const e=this.getInput();e&&(e.stepDown(t),this.value=e.value)}stepUp(t){const e=this.getInput();e&&(e.stepUp(t),this.value=e.value)}reset(){this.dirty=!1,this.value=this.getAttribute("value")??"",this.nativeError=!1,this.nativeErrorText=""}attributeChangedCallback(t,e,i){"value"===t&&this.dirty||super.attributeChangedCallback(t,e,i)}render(){const t={disabled:this.disabled,error:!this.disabled&&this.hasError,textarea:"textarea"===this.type,"no-spinner":this.noSpinner};return dp`
      <span class="text-field ${zp(t)}">
        ${this.renderField()}
      </span>
    `}updated(t){const e=this.getInputOrTextarea().value;this.value!==e&&(this.value=e)}renderField(){return Wp`<${this.fieldTag}
      class="field"
      count=${this.value.length}
      ?disabled=${this.disabled}
      ?error=${this.hasError}
      error-text=${this.getErrorText()}
      ?focused=${this.focused}
      ?has-end=${this.hasTrailingIcon}
      ?has-start=${this.hasLeadingIcon}
      label=${this.label}
      max=${this.maxLength}
      ?populated=${!!this.value}
      ?required=${this.required}
      ?resizable=${"textarea"===this.type}
      supporting-text=${this.supportingText}
    >
      ${this.renderLeadingIcon()}
      ${this.renderInputOrTextarea()}
      ${this.renderTrailingIcon()}
      <div id="description" slot="aria-describedby"></div>
    </${this.fieldTag}>`}renderLeadingIcon(){return dp`
      <span class="icon leading" slot="start">
        <slot name="leading-icon" @slotchange=${this.handleIconChange}></slot>
      </span>
    `}renderTrailingIcon(){return dp`
      <span class="icon trailing" slot="end">
        <slot name="trailing-icon" @slotchange=${this.handleIconChange}></slot>
      </span>
    `}renderInputOrTextarea(){const t={direction:this.textDirection},e=this.ariaLabel||this.label||pp,i=this.autocomplete,r=(this.maxLength??-1)>-1,n=(this.minLength??-1)>-1;if("textarea"===this.type)return dp`
        <textarea
          class="input"
          style=${tu(t)}
          aria-describedby="description"
          aria-invalid=${this.hasError}
          aria-label=${e}
          autocomplete=${i||pp}
          ?disabled=${this.disabled}
          maxlength=${r?this.maxLength:pp}
          minlength=${n?this.minLength:pp}
          placeholder=${this.placeholder||pp}
          ?readonly=${this.readOnly}
          ?required=${this.required}
          rows=${this.rows}
          cols=${this.cols}
          .value=${Kp(this.value)}
          @change=${this.redispatchEvent}
          @focus=${this.handleFocusChange}
          @blur=${this.handleFocusChange}
          @input=${this.handleInput}
          @select=${this.redispatchEvent}></textarea>
      `;const a=this.renderPrefix(),s=this.renderSuffix(),o=this.inputMode;return dp`
      <div class="input-wrapper">
        ${a}
        <input
          class="input"
          style=${tu(t)}
          aria-describedby="description"
          aria-invalid=${this.hasError}
          aria-label=${e}
          autocomplete=${i||pp}
          ?disabled=${this.disabled}
          inputmode=${o||pp}
          max=${this.max||pp}
          maxlength=${r?this.maxLength:pp}
          min=${this.min||pp}
          minlength=${n?this.minLength:pp}
          pattern=${this.pattern||pp}
          placeholder=${this.placeholder||pp}
          ?readonly=${this.readOnly}
          ?required=${this.required}
          ?multiple=${this.multiple}
          step=${this.step||pp}
          type=${this.type}
          .value=${Kp(this.value)}
          @change=${this.redispatchEvent}
          @focus=${this.handleFocusChange}
          @blur=${this.handleFocusChange}
          @input=${this.handleInput}
          @select=${this.redispatchEvent} />
        ${s}
      </div>
    `}renderPrefix(){return this.renderAffix(this.prefixText,!1)}renderSuffix(){return this.renderAffix(this.suffixText,!0)}renderAffix(t,e){if(!t)return pp;return dp`<span class="${zp({suffix:e,prefix:!e})}">${t}</span>`}getErrorText(){return this.error?this.errorText:this.nativeErrorText}handleFocusChange(){this.focused=this.inputOrTextarea?.matches(":focus")??!1}handleInput(t){this.dirty=!0,this.value=t.target.value}redispatchEvent(t){au(this,t)}getInputOrTextarea(){return this.inputOrTextarea||(this.connectedCallback(),this.scheduleUpdate()),this.isUpdatePending&&this.scheduleUpdate(),this.inputOrTextarea}getInput(){return"textarea"===this.type?null:this.getInputOrTextarea()}handleIconChange(){this.hasLeadingIcon=this.leadingIcons.length>0,this.hasTrailingIcon=this.trailingIcons.length>0}[fu](){return this.value}formResetCallback(){this.reset()}formStateRestoreCallback(t){this.value=t}focus(){this.getInputOrTextarea().focus()}[cu](){return new Cu((()=>({state:this,renderedControl:this.inputOrTextarea})))}[du](){return this.inputOrTextarea}[vu](t){t?.preventDefault();const e=this.getErrorText();this.nativeError=!!t,this.nativeErrorText=this.validationMessage,e===this.getErrorText()&&this.field?.reannounceError()}}ru(Au),Au.shadowRootOptions={...$p.shadowRootOptions,delegatesFocus:!0},it([jh({type:Boolean,reflect:!0})],Au.prototype,"error",void 0),it([jh({attribute:"error-text"})],Au.prototype,"errorText",void 0),it([jh()],Au.prototype,"label",void 0),it([jh({type:Boolean,reflect:!0})],Au.prototype,"required",void 0),it([jh()],Au.prototype,"value",void 0),it([jh({attribute:"prefix-text"})],Au.prototype,"prefixText",void 0),it([jh({attribute:"suffix-text"})],Au.prototype,"suffixText",void 0),it([jh({type:Boolean,attribute:"has-leading-icon"})],Au.prototype,"hasLeadingIcon",void 0),it([jh({type:Boolean,attribute:"has-trailing-icon"})],Au.prototype,"hasTrailingIcon",void 0),it([jh({attribute:"supporting-text"})],Au.prototype,"supportingText",void 0),it([jh({attribute:"text-direction"})],Au.prototype,"textDirection",void 0),it([jh({type:Number})],Au.prototype,"rows",void 0),it([jh({type:Number})],Au.prototype,"cols",void 0),it([jh({reflect:!0})],Au.prototype,"inputMode",void 0),it([jh()],Au.prototype,"max",void 0),it([jh({type:Number})],Au.prototype,"maxLength",void 0),it([jh()],Au.prototype,"min",void 0),it([jh({type:Number})],Au.prototype,"minLength",void 0),it([jh({type:Boolean,attribute:"no-spinner"})],Au.prototype,"noSpinner",void 0),it([jh()],Au.prototype,"pattern",void 0),it([jh({reflect:!0,converter:nu})],Au.prototype,"placeholder",void 0),it([jh({type:Boolean,reflect:!0})],Au.prototype,"readOnly",void 0),it([jh({type:Boolean,reflect:!0})],Au.prototype,"multiple",void 0),it([jh()],Au.prototype,"step",void 0),it([jh({reflect:!0})],Au.prototype,"type",void 0),it([jh({reflect:!0})],Au.prototype,"autocomplete",void 0),it([Oh()],Au.prototype,"dirty",void 0),it([Oh()],Au.prototype,"focused",void 0),it([Oh()],Au.prototype,"nativeError",void 0),it([Oh()],Au.prototype,"nativeErrorText",void 0),it([Fh(".input")],Au.prototype,"inputOrTextarea",void 0),it([Fh(".field")],Au.prototype,"field",void 0),it([Vh({slot:"leading-icon"})],Au.prototype,"leadingIcons",void 0),it([Vh({slot:"trailing-icon"})],Au.prototype,"trailingIcons",void 0);class Iu extends Au{constructor(){super(...arguments),this.fieldTag=Zp`md-outlined-field`}}const Mu=vh`:host{display:inline-flex;outline:none;resize:both;text-align:start;-webkit-tap-highlight-color:rgba(0,0,0,0)}.text-field,.field{width:100%}.text-field{display:inline-flex}.field{cursor:text}.disabled .field{cursor:default}.text-field,.textarea .field{resize:inherit}.icon{color:currentColor;display:flex;fill:currentColor}.icon ::slotted(*){display:flex}[hasstart] .icon.leading{font-size:var(--_leading-icon-size);height:var(--_leading-icon-size);width:var(--_leading-icon-size)}[hasend] .icon.trailing{font-size:var(--_trailing-icon-size);height:var(--_trailing-icon-size);width:var(--_trailing-icon-size)}.input-wrapper{display:flex}.input-wrapper>*{all:inherit;padding:0}.input{caret-color:var(--_caret-color);overflow-x:hidden;text-align:inherit}.input::placeholder{color:currentColor;opacity:1}.input::-webkit-calendar-picker-indicator{display:none}.input::-webkit-search-decoration,.input::-webkit-search-cancel-button{display:none}@media(forced-colors: active){.input{background:none}}.no-spinner .input::-webkit-inner-spin-button,.no-spinner .input::-webkit-outer-spin-button{display:none}.no-spinner .input[type=number]{-moz-appearance:textfield}:focus-within .input{caret-color:var(--_focus-caret-color)}.error:focus-within .input{caret-color:var(--_error-focus-caret-color)}.text-field:not(.disabled) .prefix{color:var(--_input-text-prefix-color)}.text-field:not(.disabled) .suffix{color:var(--_input-text-suffix-color)}.text-field:not(.disabled) .input::placeholder{color:var(--_input-text-placeholder-color)}.prefix,.suffix{text-wrap:nowrap;width:min-content}.prefix{padding-inline-end:var(--_input-text-prefix-trailing-space)}.suffix{padding-inline-start:var(--_input-text-suffix-leading-space)}
`;let Lu=class extends Iu{constructor(){super(...arguments),this.fieldTag=Zp`md-outlined-field`}};Lu.styles=[Mu,Gp],Lu=it([ph("md-outlined-text-field")],Lu);class Pu extends $p{connectedCallback(){super.connectedCallback(),this.setAttribute("aria-hidden","true")}render(){return dp`<span class="shadow"></span>`}}const Ru=vh`:host,.shadow,.shadow::before,.shadow::after{border-radius:inherit;inset:0;position:absolute;transition-duration:inherit;transition-property:inherit;transition-timing-function:inherit}:host{display:flex;pointer-events:none;transition-property:box-shadow,opacity}.shadow::before,.shadow::after{content:"";transition-property:box-shadow,opacity;--_level: var(--md-elevation-level, 0);--_shadow-color: var(--md-elevation-shadow-color, var(--md-sys-color-shadow, #000))}.shadow::before{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 3,1) + 2*clamp(0,var(--_level) - 4,1))) calc(1px*(2*clamp(0,var(--_level),1) + clamp(0,var(--_level) - 2,1) + clamp(0,var(--_level) - 4,1))) 0px var(--_shadow-color);opacity:.3}.shadow::after{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 1,1) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(3*clamp(0,var(--_level),2) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(clamp(0,var(--_level),4) + 2*clamp(0,var(--_level) - 4,1))) var(--_shadow-color);opacity:.15}
`;let zu=class extends Pu{};zu.styles=[Ru],zu=it([ph("md-elevation")],zu);const Du=Symbol("attachableController");let ju;ju=new MutationObserver((t=>{for(const e of t)e.target[Du]?.hostConnected()}));class Ou{get htmlFor(){return this.host.getAttribute("for")}set htmlFor(t){null===t?this.host.removeAttribute("for"):this.host.setAttribute("for",t)}get control(){return this.host.hasAttribute("for")?this.htmlFor&&this.host.isConnected?this.host.getRootNode().querySelector(`#${this.htmlFor}`):null:this.currentControl||this.host.parentElement}set control(t){t?this.attach(t):this.detach()}constructor(t,e){this.host=t,this.onControlChange=e,this.currentControl=null,t.addController(this),t[Du]=this,ju?.observe(t,{attributeFilter:["for"]})}attach(t){t!==this.currentControl&&(this.setCurrentControl(t),this.host.removeAttribute("for"))}detach(){this.setCurrentControl(null),this.host.setAttribute("for","")}hostConnected(){this.setCurrentControl(this.control)}hostDisconnected(){this.setCurrentControl(null)}setCurrentControl(t){this.onControlChange(this.currentControl,t),this.currentControl=t}}const Bu=["focusin","focusout","pointerdown"];class Fu extends $p{constructor(){super(...arguments),this.visible=!1,this.inward=!1,this.attachableController=new Ou(this,this.onControlChange.bind(this))}get htmlFor(){return this.attachableController.htmlFor}set htmlFor(t){this.attachableController.htmlFor=t}get control(){return this.attachableController.control}set control(t){this.attachableController.control=t}attach(t){this.attachableController.attach(t)}detach(){this.attachableController.detach()}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-hidden","true")}handleEvent(t){if(!t[Nu]){switch(t.type){default:return;case"focusin":this.visible=this.control?.matches(":focus-visible")??!1;break;case"focusout":case"pointerdown":this.visible=!1}t[Nu]=!0}}onControlChange(t,e){for(const i of Bu)t?.removeEventListener(i,this),e?.addEventListener(i,this)}update(t){t.has("visible")&&this.dispatchEvent(new Event("visibility-changed")),super.update(t)}}it([jh({type:Boolean,reflect:!0})],Fu.prototype,"visible",void 0),it([jh({type:Boolean,reflect:!0})],Fu.prototype,"inward",void 0);const Nu=Symbol("handledByFocusRing"),Hu=vh`:host{animation-delay:0s,calc(var(--md-focus-ring-duration, 600ms)*.25);animation-duration:calc(var(--md-focus-ring-duration, 600ms)*.25),calc(var(--md-focus-ring-duration, 600ms)*.75);animation-timing-function:cubic-bezier(0.2, 0, 0, 1);box-sizing:border-box;color:var(--md-focus-ring-color, var(--md-sys-color-secondary, #625b71));display:none;pointer-events:none;position:absolute}:host([visible]){display:flex}:host(:not([inward])){animation-name:outward-grow,outward-shrink;border-end-end-radius:calc(var(--md-focus-ring-shape-end-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));border-end-start-radius:calc(var(--md-focus-ring-shape-end-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));border-start-end-radius:calc(var(--md-focus-ring-shape-start-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));border-start-start-radius:calc(var(--md-focus-ring-shape-start-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));inset:calc(-1*var(--md-focus-ring-outward-offset, 2px));outline:var(--md-focus-ring-width, 3px) solid currentColor}:host([inward]){animation-name:inward-grow,inward-shrink;border-end-end-radius:calc(var(--md-focus-ring-shape-end-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border-end-start-radius:calc(var(--md-focus-ring-shape-end-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border-start-end-radius:calc(var(--md-focus-ring-shape-start-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border-start-start-radius:calc(var(--md-focus-ring-shape-start-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border:var(--md-focus-ring-width, 3px) solid currentColor;inset:var(--md-focus-ring-inward-offset, 0px)}@keyframes outward-grow{from{outline-width:0}to{outline-width:var(--md-focus-ring-active-width, 8px)}}@keyframes outward-shrink{from{outline-width:var(--md-focus-ring-active-width, 8px)}}@keyframes inward-grow{from{border-width:0}to{border-width:var(--md-focus-ring-active-width, 8px)}}@keyframes inward-shrink{from{border-width:var(--md-focus-ring-active-width, 8px)}}@media(prefers-reduced-motion){:host{animation:none}}
`;let Vu=class extends Fu{};Vu.styles=[Hu],Vu=it([ph("md-focus-ring")],Vu);var Uu;!function(t){t[t.INACTIVE=0]="INACTIVE",t[t.TOUCH_DELAY=1]="TOUCH_DELAY",t[t.HOLDING=2]="HOLDING",t[t.WAITING_FOR_CLICK=3]="WAITING_FOR_CLICK"}(Uu||(Uu={}));const Yu=["click","contextmenu","pointercancel","pointerdown","pointerenter","pointerleave","pointerup"],Zu=window.matchMedia("(forced-colors: active)");class qu extends $p{constructor(){super(...arguments),this.disabled=!1,this.hovered=!1,this.pressed=!1,this.rippleSize="",this.rippleScale="",this.initialSize=0,this.state=Uu.INACTIVE,this.checkBoundsAfterContextMenu=!1,this.attachableController=new Ou(this,this.onControlChange.bind(this))}get htmlFor(){return this.attachableController.htmlFor}set htmlFor(t){this.attachableController.htmlFor=t}get control(){return this.attachableController.control}set control(t){this.attachableController.control=t}attach(t){this.attachableController.attach(t)}detach(){this.attachableController.detach()}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-hidden","true")}render(){const t={hovered:this.hovered,pressed:this.pressed};return dp`<div class="surface ${zp(t)}"></div>`}update(t){t.has("disabled")&&this.disabled&&(this.hovered=!1,this.pressed=!1),super.update(t)}handlePointerenter(t){this.shouldReactToEvent(t)&&(this.hovered=!0)}handlePointerleave(t){this.shouldReactToEvent(t)&&(this.hovered=!1,this.state!==Uu.INACTIVE&&this.endPressAnimation())}handlePointerup(t){if(this.shouldReactToEvent(t)){if(this.state!==Uu.HOLDING)return this.state===Uu.TOUCH_DELAY?(this.state=Uu.WAITING_FOR_CLICK,void this.startPressAnimation(this.rippleStartEvent)):void 0;this.state=Uu.WAITING_FOR_CLICK}}async handlePointerdown(t){if(this.shouldReactToEvent(t)){if(this.rippleStartEvent=t,!this.isTouch(t))return this.state=Uu.WAITING_FOR_CLICK,void this.startPressAnimation(t);this.checkBoundsAfterContextMenu&&!this.inBounds(t)||(this.checkBoundsAfterContextMenu=!1,this.state=Uu.TOUCH_DELAY,await new Promise((t=>{setTimeout(t,150)})),this.state===Uu.TOUCH_DELAY&&(this.state=Uu.HOLDING,this.startPressAnimation(t)))}}handleClick(){this.disabled||(this.state!==Uu.WAITING_FOR_CLICK?this.state===Uu.INACTIVE&&(this.startPressAnimation(),this.endPressAnimation()):this.endPressAnimation())}handlePointercancel(t){this.shouldReactToEvent(t)&&this.endPressAnimation()}handleContextmenu(){this.disabled||(this.checkBoundsAfterContextMenu=!0,this.endPressAnimation())}determineRippleSize(){const{height:t,width:e}=this.getBoundingClientRect(),i=Math.max(t,e),r=Math.max(.35*i,75),n=Math.floor(.2*i),a=Math.sqrt(e**2+t**2)+10;this.initialSize=n,this.rippleScale=""+(a+r)/n,this.rippleSize=`${n}px`}getNormalizedPointerEventCoords(t){const{scrollX:e,scrollY:i}=window,{left:r,top:n}=this.getBoundingClientRect(),a=e+r,s=i+n,{pageX:o,pageY:l}=t;return{x:o-a,y:l-s}}getTranslationCoordinates(t){const{height:e,width:i}=this.getBoundingClientRect(),r={x:(i-this.initialSize)/2,y:(e-this.initialSize)/2};let n;return n=t instanceof PointerEvent?this.getNormalizedPointerEventCoords(t):{x:i/2,y:e/2},n={x:n.x-this.initialSize/2,y:n.y-this.initialSize/2},{startPoint:n,endPoint:r}}startPressAnimation(t){if(!this.mdRoot)return;this.pressed=!0,this.growAnimation?.cancel(),this.determineRippleSize();const{startPoint:e,endPoint:i}=this.getTranslationCoordinates(t),r=`${e.x}px, ${e.y}px`,n=`${i.x}px, ${i.y}px`;this.growAnimation=this.mdRoot.animate({top:[0,0],left:[0,0],height:[this.rippleSize,this.rippleSize],width:[this.rippleSize,this.rippleSize],transform:[`translate(${r}) scale(1)`,`translate(${n}) scale(${this.rippleScale})`]},{pseudoElement:"::after",duration:450,easing:Dp,fill:"forwards"})}async endPressAnimation(){this.rippleStartEvent=void 0,this.state=Uu.INACTIVE;const t=this.growAnimation;let e=1/0;"number"==typeof t?.currentTime?e=t.currentTime:t?.currentTime&&(e=t.currentTime.to("ms").value),e>=225?this.pressed=!1:(await new Promise((t=>{setTimeout(t,225-e)})),this.growAnimation===t&&(this.pressed=!1))}shouldReactToEvent(t){if(this.disabled||!t.isPrimary)return!1;if(this.rippleStartEvent&&this.rippleStartEvent.pointerId!==t.pointerId)return!1;if("pointerenter"===t.type||"pointerleave"===t.type)return!this.isTouch(t);const e=1===t.buttons;return this.isTouch(t)||e}inBounds({x:t,y:e}){const{top:i,left:r,bottom:n,right:a}=this.getBoundingClientRect();return t>=r&&t<=a&&e>=i&&e<=n}isTouch({pointerType:t}){return"touch"===t}async handleEvent(t){if(!Zu?.matches)switch(t.type){case"click":this.handleClick();break;case"contextmenu":this.handleContextmenu();break;case"pointercancel":this.handlePointercancel(t);break;case"pointerdown":await this.handlePointerdown(t);break;case"pointerenter":this.handlePointerenter(t);break;case"pointerleave":this.handlePointerleave(t);break;case"pointerup":this.handlePointerup(t)}}onControlChange(t,e){for(const i of Yu)t?.removeEventListener(i,this),e?.addEventListener(i,this)}}it([jh({type:Boolean,reflect:!0})],qu.prototype,"disabled",void 0),it([Oh()],qu.prototype,"hovered",void 0),it([Oh()],qu.prototype,"pressed",void 0),it([Fh(".surface")],qu.prototype,"mdRoot",void 0);const Wu=vh`:host{display:flex;margin:auto;pointer-events:none}:host([disabled]){display:none}@media(forced-colors: active){:host{display:none}}:host,.surface{border-radius:inherit;position:absolute;inset:0;overflow:hidden}.surface{-webkit-tap-highlight-color:rgba(0,0,0,0)}.surface::before,.surface::after{content:"";opacity:0;position:absolute}.surface::before{background-color:var(--md-ripple-hover-color, var(--md-sys-color-on-surface, #1d1b20));inset:0;transition:opacity 15ms linear,background-color 15ms linear}.surface::after{background:radial-gradient(closest-side, var(--md-ripple-pressed-color, var(--md-sys-color-on-surface, #1d1b20)) max(100% - 70px, 65%), transparent 100%);transform-origin:center center;transition:opacity 375ms linear}.hovered::before{background-color:var(--md-ripple-hover-color, var(--md-sys-color-on-surface, #1d1b20));opacity:var(--md-ripple-hover-opacity, 0.08)}.pressed::after{opacity:var(--md-ripple-pressed-opacity, 0.12);transition-duration:105ms}
`;let Gu=class extends qu{};function Xu(t){t.addInitializer((t=>{const e=t;e.addEventListener("click",(async t=>{const{type:i,[su]:r}=e,{form:n}=r;n&&"button"!==i&&(await new Promise((t=>{setTimeout(t)})),t.defaultPrevented||("reset"!==i?(n.addEventListener("submit",(t=>{Object.defineProperty(t,"submitter",{configurable:!0,enumerable:!0,get:()=>e})}),{capture:!0,once:!0}),r.setFormValue(e.value),n.requestSubmit()):n.reset()))}))}))}function Ku(t){const e=new MouseEvent("click",{bubbles:!0});return t.dispatchEvent(e),e}function Ju(t){return t.currentTarget===t.target&&(t.composedPath()[0]===t.target&&(!t.target.disabled&&!function(t){const e=Qu;e&&(t.preventDefault(),t.stopImmediatePropagation());return async function(){Qu=!0,await null,Qu=!1}(),e}(t)))}Gu.styles=[Wu],Gu=it([ph("md-ripple")],Gu);let Qu=!1;const tm=lu($p);class em extends tm{get name(){return this.getAttribute("name")??""}set name(t){this.setAttribute("name",t)}get form(){return this[su].form}constructor(){super(),this.disabled=!1,this.href="",this.target="",this.trailingIcon=!1,this.hasIcon=!1,this.type="submit",this.value="",this.handleActivationClick=t=>{Ju(t)&&this.buttonElement&&(this.focus(),Ku(this.buttonElement))},this.addEventListener("click",this.handleActivationClick)}focus(){this.buttonElement?.focus()}blur(){this.buttonElement?.blur()}render(){const t=this.disabled&&!this.href,e=this.href?this.renderLink():this.renderButton(),i=this.href?"link":"button";return dp`
      ${this.renderElevationOrOutline?.()}
      <div class="background"></div>
      <md-focus-ring part="focus-ring" for=${i}></md-focus-ring>
      <md-ripple for=${i} ?disabled="${t}"></md-ripple>
      ${e}
    `}renderButton(){const{ariaLabel:t,ariaHasPopup:e,ariaExpanded:i}=this;return dp`<button
      id="button"
      class="button"
      ?disabled=${this.disabled}
      aria-label="${t||pp}"
      aria-haspopup="${e||pp}"
      aria-expanded="${i||pp}">
      ${this.renderContent()}
    </button>`}renderLink(){const{ariaLabel:t,ariaHasPopup:e,ariaExpanded:i}=this;return dp`<a
      id="link"
      class="button"
      aria-label="${t||pp}"
      aria-haspopup="${e||pp}"
      aria-expanded="${i||pp}"
      href=${this.href}
      target=${this.target||pp}
      >${this.renderContent()}
    </a>`}renderContent(){const t=dp`<slot
      name="icon"
      @slotchange="${this.handleSlotChange}"></slot>`;return dp`
      <span class="touch"></span>
      ${this.trailingIcon?pp:t}
      <span class="label"><slot></slot></span>
      ${this.trailingIcon?t:pp}
    `}handleSlotChange(){this.hasIcon=this.assignedIcons.length>0}}ru(em),Xu(em),em.formAssociated=!0,em.shadowRootOptions={mode:"open",delegatesFocus:!0},it([jh({type:Boolean,reflect:!0})],em.prototype,"disabled",void 0),it([jh()],em.prototype,"href",void 0),it([jh()],em.prototype,"target",void 0),it([jh({type:Boolean,attribute:"trailing-icon",reflect:!0})],em.prototype,"trailingIcon",void 0),it([jh({type:Boolean,attribute:"has-icon",reflect:!0})],em.prototype,"hasIcon",void 0),it([jh()],em.prototype,"type",void 0),it([jh({reflect:!0})],em.prototype,"value",void 0),it([Fh(".button")],em.prototype,"buttonElement",void 0),it([Vh({slot:"icon",flatten:!0})],em.prototype,"assignedIcons",void 0);class im extends em{renderElevationOrOutline(){return dp`<md-elevation part="elevation"></md-elevation>`}}const rm=vh`:host{--_container-color: var(--md-filled-button-container-color, var(--md-sys-color-primary, #6750a4));--_container-elevation: var(--md-filled-button-container-elevation, 0);--_container-height: var(--md-filled-button-container-height, 40px);--_container-shadow-color: var(--md-filled-button-container-shadow-color, var(--md-sys-color-shadow, #000));--_disabled-container-color: var(--md-filled-button-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-elevation: var(--md-filled-button-disabled-container-elevation, 0);--_disabled-container-opacity: var(--md-filled-button-disabled-container-opacity, 0.12);--_disabled-label-text-color: var(--md-filled-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-filled-button-disabled-label-text-opacity, 0.38);--_focus-container-elevation: var(--md-filled-button-focus-container-elevation, 0);--_focus-label-text-color: var(--md-filled-button-focus-label-text-color, var(--md-sys-color-on-primary, #fff));--_hover-container-elevation: var(--md-filled-button-hover-container-elevation, 1);--_hover-label-text-color: var(--md-filled-button-hover-label-text-color, var(--md-sys-color-on-primary, #fff));--_hover-state-layer-color: var(--md-filled-button-hover-state-layer-color, var(--md-sys-color-on-primary, #fff));--_hover-state-layer-opacity: var(--md-filled-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-filled-button-label-text-color, var(--md-sys-color-on-primary, #fff));--_label-text-font: var(--md-filled-button-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-filled-button-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-filled-button-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-filled-button-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_pressed-container-elevation: var(--md-filled-button-pressed-container-elevation, 0);--_pressed-label-text-color: var(--md-filled-button-pressed-label-text-color, var(--md-sys-color-on-primary, #fff));--_pressed-state-layer-color: var(--md-filled-button-pressed-state-layer-color, var(--md-sys-color-on-primary, #fff));--_pressed-state-layer-opacity: var(--md-filled-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-filled-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-filled-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-filled-button-focus-icon-color, var(--md-sys-color-on-primary, #fff));--_hover-icon-color: var(--md-filled-button-hover-icon-color, var(--md-sys-color-on-primary, #fff));--_icon-color: var(--md-filled-button-icon-color, var(--md-sys-color-on-primary, #fff));--_icon-size: var(--md-filled-button-icon-size, 18px);--_pressed-icon-color: var(--md-filled-button-pressed-icon-color, var(--md-sys-color-on-primary, #fff));--_container-shape-start-start: var(--md-filled-button-container-shape-start-start, var(--md-filled-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-start-end: var(--md-filled-button-container-shape-start-end, var(--md-filled-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-end: var(--md-filled-button-container-shape-end-end, var(--md-filled-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-start: var(--md-filled-button-container-shape-end-start, var(--md-filled-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_leading-space: var(--md-filled-button-leading-space, 24px);--_trailing-space: var(--md-filled-button-trailing-space, 24px);--_with-leading-icon-leading-space: var(--md-filled-button-with-leading-icon-leading-space, 16px);--_with-leading-icon-trailing-space: var(--md-filled-button-with-leading-icon-trailing-space, 24px);--_with-trailing-icon-leading-space: var(--md-filled-button-with-trailing-icon-leading-space, 24px);--_with-trailing-icon-trailing-space: var(--md-filled-button-with-trailing-icon-trailing-space, 16px)}
`,nm=vh`md-elevation{transition-duration:280ms}:host([disabled]) md-elevation{transition:none}md-elevation{--md-elevation-level: var(--_container-elevation);--md-elevation-shadow-color: var(--_container-shadow-color)}:host(:focus-within) md-elevation{--md-elevation-level: var(--_focus-container-elevation)}:host(:hover) md-elevation{--md-elevation-level: var(--_hover-container-elevation)}:host(:active) md-elevation{--md-elevation-level: var(--_pressed-container-elevation)}:host([disabled]) md-elevation{--md-elevation-level: var(--_disabled-container-elevation)}
`,am=vh`:host{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end);box-sizing:border-box;cursor:pointer;display:inline-flex;gap:8px;min-height:var(--_container-height);outline:none;padding-block:calc((var(--_container-height) - max(var(--_label-text-line-height),var(--_icon-size)))/2);padding-inline-start:var(--_leading-space);padding-inline-end:var(--_trailing-space);place-content:center;place-items:center;position:relative;font-family:var(--_label-text-font);font-size:var(--_label-text-size);line-height:var(--_label-text-line-height);font-weight:var(--_label-text-weight);text-overflow:ellipsis;text-wrap:nowrap;user-select:none;-webkit-tap-highlight-color:rgba(0,0,0,0);vertical-align:top;--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}md-focus-ring{--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}:host([disabled]){cursor:default;pointer-events:none}.button{border-radius:inherit;cursor:inherit;display:inline-flex;align-items:center;justify-content:center;border:none;outline:none;-webkit-appearance:none;vertical-align:middle;background:rgba(0,0,0,0);text-decoration:none;min-width:calc(64px - var(--_leading-space) - var(--_trailing-space));width:100%;z-index:0;height:100%;font:inherit;color:var(--_label-text-color);padding:0;gap:inherit;text-transform:inherit}.button::-moz-focus-inner{padding:0;border:0}:host(:hover) .button{color:var(--_hover-label-text-color)}:host(:focus-within) .button{color:var(--_focus-label-text-color)}:host(:active) .button{color:var(--_pressed-label-text-color)}.background{background-color:var(--_container-color);border-radius:inherit;inset:0;position:absolute}.label{overflow:hidden}:is(.button,.label,.label slot),.label ::slotted(*){text-overflow:inherit}:host([disabled]) .label{color:var(--_disabled-label-text-color);opacity:var(--_disabled-label-text-opacity)}:host([disabled]) .background{background-color:var(--_disabled-container-color);opacity:var(--_disabled-container-opacity)}@media(forced-colors: active){.background{border:1px solid CanvasText}:host([disabled]){--_disabled-icon-color: GrayText;--_disabled-icon-opacity: 1;--_disabled-container-opacity: 1;--_disabled-label-text-color: GrayText;--_disabled-label-text-opacity: 1}}:host([has-icon]:not([trailing-icon])){padding-inline-start:var(--_with-leading-icon-leading-space);padding-inline-end:var(--_with-leading-icon-trailing-space)}:host([has-icon][trailing-icon]){padding-inline-start:var(--_with-trailing-icon-leading-space);padding-inline-end:var(--_with-trailing-icon-trailing-space)}::slotted([slot=icon]){display:inline-flex;position:relative;writing-mode:horizontal-tb;fill:currentColor;flex-shrink:0;color:var(--_icon-color);font-size:var(--_icon-size);inline-size:var(--_icon-size);block-size:var(--_icon-size)}:host(:hover) ::slotted([slot=icon]){color:var(--_hover-icon-color)}:host(:focus-within) ::slotted([slot=icon]){color:var(--_focus-icon-color)}:host(:active) ::slotted([slot=icon]){color:var(--_pressed-icon-color)}:host([disabled]) ::slotted([slot=icon]){color:var(--_disabled-icon-color);opacity:var(--_disabled-icon-opacity)}.touch{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%)}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_container-height))/2) 0}:host([touch-target=none]) .touch{display:none}
`;let sm=class extends im{};sm.styles=[am,nm,rm],sm=it([ph("md-filled-button")],sm);class om extends(al(K)){static get styles(){return[nl,n`
        #button-container {
          --mdc-typography-button-font-size: 12px;
          margin: 12px 0;
        }

        #button-container div {
          border: 1px solid var(--mdc-theme-primary);
          opacity: 0.9;
          border-radius: 8px;
          display: inline-block;
          padding: 4px;
        }
      `]}render(){return M`
      <div id="button-container">
        <div>
          <slot></slot>
        </div>
      </div>
    `}}window.customElements.define("grampsjs-button-group",om);class lm extends(al(K)){static get styles(){return[nl,n`
        .filtermenu {
          display: inline;
        }

        .filtermenu > * {
          vertical-align: middle;
        }

        #filteroff {
          --mdc-icon-size: 20px;
          color: var(--mdc-theme-primary);
          margin-left: 10px;
          margin-right: 10px;
        }

        #input-gql-container {
          align-items: center;
          margin: 20px 0 30px 0;
          width: 100%;
        }

        #input-gql {
          --md-sys-color-surface-container-highest: #f5f5f5;
          --md-outlined-text-field-input-text-font: 'Commit Mono';
          --md-outlined-text-field-input-text-size: 15px;
          --md-outlined-text-field-container-shape: 8px;
          --md-outlined-text-field-top-space: 9px;
          --md-outlined-text-field-bottom-space: 9px;
          flex: 1;
          margin-right: 12px;
        }

        #input-gql-container span {
          align-self: flex-start;
          display: flex;
          align-items: center;
        }

        #input-gql-container md-filled-button {
          --md-filled-button-container-shape: 8px;
        }

        .hidden {
          display: none;
        }

        .flex {
          display: flex;
        }
      `]}static get properties(){return{filters:{type:Array},open:{type:Boolean},objectType:{type:String},query:{type:String},useGql:{type:Boolean},errorGql:{type:Boolean}}}constructor(){super(),this.filters=[],this.open=!1,this.objectType="",this.query="",this.useGql=!1,this.errorGql=!1}render(){return M`
      <div class="filtermenu">
        <mwc-button
          icon="filter_list"
          ?unelevated="${this.open}"
          @click="${this._handleFilterButton}"
          >${this._("filter")}</mwc-button
        >
        <mwc-icon-button
          id="filteroff"
          ?disabled="${0===this.filters.length&&""===this.query}"
          icon="filter_list_off"
          @click="${this._handleFilterOff}"
        ></mwc-icon-button>
        <grampsjs-tooltip for="filteroff" .strings="${this.strings}"
          >${this._("Clear all filters")}</grampsjs-tooltip
        >
        ${this._renderFilterChips()}
      </div>
      <div
        class="${Ot({hidden:!this.open})}"
        @filter:changed="${this._handleFilterChanged}"
      >
        <grampsjs-button-group>
          <mwc-button
            dense
            ?unelevated="${!this.useGql}"
            @click="${this._handleGqlClick}"
            >${this._("simple")}</mwc-button
          >
          <mwc-button
            dense
            ?unelevated="${this.useGql}"
            @click="${this._handleGqlClick}"
            >GQL</mwc-button
          >
        </grampsjs-button-group>

        <div
          class="${Ot({hidden:!this.useGql,flex:this.useGql})}"
          id="input-gql-container"
        >
          ${this._renderGql()}
        </div>

        <div class="${Ot({hidden:this.useGql})}">
          <slot></slot>
        </div>
      </div>
    `}_renderFilterChips(){return this.query?M`
        <grampsjs-filter-chip
          @filter-chip:clear="${this._handleFilterOff}"
          monospace
          label="${this.query}"
        ></grampsjs-filter-chip>
      `:this.filters.map(((t,e)=>M`
        <grampsjs-filter-chip
          label="${this.ruleToLabel(t)}"
          @filter-chip:clear="${()=>this._clearFilter(e)}"
        ></grampsjs-filter-chip>
      `))}_renderGql(){return M`
      <md-outlined-text-field
        id="input-gql"
        @keydown="${this._handleGqlKey}"
        @input="${this._handleGqlChange}"
        value="${this.query}"
        ?error="${this.errorGql}"
      >
        ${this.errorGql?Ha("M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z",null,0,"trailing-icon"):""}
        ></md-outlined-text-field
      >
      <span
        ><md-filled-button
          @click="${this._applyGql}"
          @keydown="${gs}"
          >${this._("Apply")}</md-filled-button
        ></span
      >
    `}_handleGqlKey(t){"Enter"===t.code?this._applyGql():"Escape"===t.code&&(this._clearGqlForm(),this._clearGqlError())}_clearGqlForm(){const t=this.renderRoot.querySelector("#input-gql");null!==t&&(t.value="")}_handleGqlChange(){this._clearGqlError()}_applyGql(){this._clearGqlError();const t=this.renderRoot.querySelector("#input-gql");null!==t&&(this.query=t.value,this._fireFiltersChanged())}_clearGqlError(){this.errorGql=!1}_clearFilter(t){this.filters=[...this.filters.slice(0,t),...this.filters.slice(t+1)],this._fireFiltersChanged()}_handleFilterButton(){this.open=!this.open}_handleFilterOff(){this.filters=[],this.query="",this._clearGqlError(),this._fireFiltersChanged()}_fireFiltersChanged(){os(this,"filters:changed",{filters:this.filters,query:this.query})}updated(t){t.has("filters")&&this.broadcastToChildren()}get _slottedChildren(){const t=this.shadowRoot.querySelector("slot");return t?t.assignedElements({flatten:!0}):[]}broadcastToChildren(){this._slottedChildren.forEach((t=>{t.filters=this.filters}))}async _handleGqlClick(){this.useGql=!this.useGql,(this.filters.length||this.query)&&(this.filters=[],this.query="",this._fireFiltersChanged()),this.filters=[],this.query="",this.useGql&&(await this.updateComplete,this.renderRoot.getElementById("input-gql").focus())}_handleFilterChanged(t){t.preventDefault(),t.stopPropagation();const e=t.detail?.filters?.rules,i=t.detail?.replace,r=i?this.filters.filter((t=>t.name!==i)):this.filters;e&&(this.filters=[...r,...e],this._fireFiltersChanged())}ruleToLabel(t){return"HasTag"===t.name?`${this._("Tag")}: ${t.values[0]}`:"HasMedia"===t.name&&""!==t.values[1]?`${this._("_Media Type:").replace(":","")}: ${this._(ps[t.values[1]])}`:"HasBirth"===t.name&&""!==t.values[0]?this._ruleToLabelSpan(t,"Birth year",0):"HasDeath"===t.name&&""!==t.values[0]?this._ruleToLabelSpan(t,"Death year",0):"HasData"===t.name&&""!==t.values[1]?this._ruleToLabelSpan(t,"Date",1):"HasType"===t.name?`${this._("Type")}: ${this._(t.values[0])}`:"HasRelType"===t.name?`${this._("Relationship type:")} ${this._(t.values[0])}`:t.name in ds?this._(ds[t.name]):t.name in hs[this.objectType]?this._(hs[this.objectType][t.name]).replace(/<[^>]+>/,""):JSON.stringify(t)}_ruleToLabelSpan(t,e,i){const r=t.values[i].match(/(\d+)[^\d]+(\d+)/);return 3===r.length?r[1]===r[2]?`${this._(e)}: ${r[1]}`:`${this._(e)}: ${r[1]}-${r[2]}`:JSON.stringify(t)}}window.customElements.define("grampsjs-filters",lm);class cm extends $d{static get styles(){return[super.styles,n`
        table {
          border-collapse: collapse;
          border-spacing: 0;
          font-size: 14px;
          margin-top: 20px;
          width: 100%;
        }

        th {
          padding: 12px 20px;
          font-size: 13px;
          color: #666;
          font-weight: 400;
          vertical-align: top;
          line-height: 24px;
        }

        td {
          padding: 12px 20px;
          height: 17px;
          line-height: 17px;
        }

        td > div {
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        th,
        td {
          border-bottom: 1px solid #e0e0e0;
          text-align: left;
          margin: 0;
        }

        table.linked tr:hover td {
          background-color: #f0f0f0;
          cursor: pointer;
        }

        table.linked tr.highlight td {
          font-weight: 400;
        }

        table.linked tr.highlight:hover td {
          background-color: white;
          cursor: auto;
        }

        td mwc-icon.inline {
          color: rgba(0, 0, 0, 0.25);
          font-size: 16px;
        }

        .sortbtn {
          margin-left: 1em;
          display: inline-block;
        }

        .sortbtn mwc-icon-button {
          --mdc-icon-button-size: 32px;
          position: relative;
          top: -4px;
        }

        .sortbtn mwc-icon-button svg {
          height: 20px;
          position: relative;
          top: -4px;
        }

        mwc-fab {
          position: fixed;
          bottom: 32px;
          right: 32px;
        }

        .hidden {
          display: none;
        }

        .viewbtn {
          float: right;
        }

        .viewbtn mwc-icon-button {
          color: var(--mdc-theme-primary);
        }
      `]}static get properties(){return{_data:{type:Array},_rawData:{type:Array},_columns:{type:Object},_totalCount:{type:Number},_page:{type:Number},_pages:{type:Number},_pageSize:{type:Number},_sort:{type:String},canAdd:{type:Boolean},_objectsName:{type:String},altView:{type:Boolean},_oldUrl:{type:String}}}constructor(){super(),this._data=[],this._rawData=[],this._totalCount=-1,this._page=1,this._pages=-1,this._pageSize=20,this._sort="",this.canAdd=!1,this._objectsName="",this.altView=!1,this._oldUrl=""}renderContent(){return M`
      ${this._renderFilter()}
      ${this.altView?this.renderAltView():M`
            <table class="linked">
              <tr>
                ${Object.keys(this._columns).map((t=>M`
                    <th>
                      ${this._(this._columns[t].title)}
                      ${this._renderSortBtn(t)}
                    </th>
                  `),this)}
              </tr>
              ${this._data.map((t=>M`
                  <tr @click=${()=>this._handleClick(t)}>
                    ${Object.keys(this._columns).map((e=>M` <td><div>${t[e]}</div></td> `),this)}
                  </tr>
                `))}
            </table>
          `}
      <grampsjs-pagination
        page="${this._page}"
        pages="${this._pages}"
        @page:changed="${this._handlePageChanged}"
        .strings="${this.strings}"
      ></grampsjs-pagination>

      ${this.canAdd?this.renderFab():""}
    `}renderAltView(){return""}_renderFilter(){return M`
      <grampsjs-filters
        @filters:changed="${this._handleFiltersChanged}"
        .strings="${this.strings}"
        objectType="${this._objectsName}"
        ?errorGql="${this.error}"
      >
        ${this.renderFilters()}
      </grampsjs-filters>
      <div class="viewbtn">${this._renderViewButton()}</div>

      <div
        class="${Ot({hidden:!this.filterOpen})}"
        @filter:changed="${this._handleFilterChanged}"
      ></div>
    `}_renderViewButton(){return""}renderFilters(){return M`
      <grampsjs-filter-tags .strings="${this.strings}"></grampsjs-filter-tags>
    `}renderFab(){return M` <mwc-fab icon="add" @click=${this._handleClickAdd}></mwc-fab> `}_handleFiltersChanged(){this._fetchData()}_handlePageChanged(t){this._page=t.detail.page}_handleClick(t){os(this,"nav",{path:this._getItemPath(t)})}_handleClickAdd(){os(this,"nav",{path:this._getAddPath()})}_renderSortBtn(t){const e=this._columns[t].sort;if(!e)return"";const i=this._sort.substring(1)===e,r=i&&"+"===this._sort.substring(0,1);return M` <div class="sortbtn ${i?"current-sort":""}">
      <mwc-icon-button
        @click="${()=>this._toggleSort(e,i,r)}"
        id="btn-sort-${t}"
      >
        ${this._renderSortIcon(i,r)}
      </mwc-icon-button>
      <grampsjs-tooltip for="btn-sort-${t}" .strings="${this.strings}"
        >${this._("Sort")}</grampsjs-tooltip
      >
    </div>`}_renderSortIcon(t,e){return t?Na(e?"M19 17H22L18 21L14 17H17V3H19M2 17H12V19H2M6 5V7H2V5M2 11H9V13H2V11Z":"M19 7H22L18 3L14 7H17V21H19M2 17H12V19H2M6 5V7H2V5M2 11H9V13H2V11Z","rgba(0, 0, 0, 0.6)"):Na("M18 21L14 17H17V7H14L18 3L22 7H19V17H22M2 19V17H12V19M2 13V11H9V13M2 7V5H6V7H2Z","rgba(0, 0, 0, 0.2)")}_toggleSort(t,e,i){this._sort=e&&i?`-${t}`:`+${t}`}get _filters(){return this.renderRoot.querySelector("grampsjs-filters")}get _fullUrl(){let t=`${this._fetchUrl}&page=${this._page}&pagesize=${this._pageSize}`;this._sort&&(t=`${t}&sort=${this._sort}`);const e=Object.values(this._filters.filters);e.length>0&&(t=`${t}&rules=${encodeURIComponent(JSON.stringify({rules:e}))}`);const i=this._filters.query;return i&&(t=`${t}&gql=${encodeURIComponent(i)}`),t}update(t){super.update(t),t.has("active")&&(this.filterOpen=!1),this._fullUrl!==this._oldUrl&&this._fetchData()}_fetchData(){this.loading=!0;const t=this._fullUrl;this._oldUrl=t,On(t).then((t=>{this.loading=!1,"data"in t?(this._errorMessage="",this.error=!1,this._rawData=t.data,this._data=t.data.map((t=>this._formatRow(t,this))),this._totalCount=t.total_count,this._pages=Math.ceil(this._totalCount/this._pageSize)):"error"in t&&(this.error=!0,this._errorMessage=t.error)}))}_formatRow(){return{}}_getItemPath(){return""}_getAddPath(){return""}}class dm extends(al(K)){static get styles(){return[nl,n`
        h3 {
          font-size: 14px;
          text-transform: uppercase;
          font-family: var(--grampsjs-body-font-family);
          font-weight: 500;
          color: var(--mdc-theme-primary);
          border-color: var(--mdc-theme-primary);
          border-bottom-width: 1px;
        }
      `]}static get properties(){return{filters:{type:Object},open:{type:Boolean},label:{type:String},rule:{type:String},dateIndex:{type:Number},numArgs:{type:Number},_yearFrom:{type:String},_yearUntil:{type:String},_serverLang:{type:String}}}constructor(){super(),this.filters=[],this.label="",this.rule="",this.open=!1,this.dateIndex=0,this.numArgs=3,this._yearFrom=null,this._yearUntil=(new Date).getFullYear(),this._serverLang=Mn().serverLang}render(){return M`
      <h3>${this._(this.label)}</h3>
      <mwc-textfield
        type="number"
        max="${(new Date).getFullYear()}"
        label="${this._("between")}"
        id="year_from"
        value="${this._yearFrom}"
        @input="${as((()=>this._handleYearFrom()),1e3)}"
      ></mwc-textfield>
      <mwc-textfield
        type="number"
        max="${(new Date).getFullYear()}"
        label="${this._("and")}"
        id="year_until"
        value="${this._yearUntil}"
        @input="${as((()=>this._handleYearUntil()),1e3)}"
      ></mwc-textfield>
    `}_handleYearFrom(){const t=this.renderRoot.querySelector("#year_from");t&&(this._yearFrom=t.value,this._checkValid())}_handleYearUntil(){const t=this.renderRoot.querySelector("#year_until");t&&(this._yearUntil=t.value,this._checkValid())}_checkValid(){!!this._yearFrom&&!!this._yearUntil&&this._yearUntil>=this._yearFrom&&this.applyFilter()}applyFilter(){const t=this.renderRoot.querySelector("#year_from")?.value,e=this.renderRoot.querySelector("#year_until")?.value;if(t&&e){const i=this._serverLang?function(t,e,i){const r={ar:"بين 1111 و 2222",bg:"между 1111 и 2222",ca:"entre 1111 i 2222",cs:"mezi 1111 a 2222",da:"mellem 1111 og 2222",de:"zwischen 1111 und 2222",el:"μεταξύ 1111 και 2222",en:"between 1111 and 2222",en_GB:"between 1111 and 2222",es:"entre 1111 y 2222",fi:"1111 ja 2222 välillä",fr:"entre 1111 et 2222",hr:"između 1111 i 2222",hu:"1111 és 2222 között",is:"milli 1111 og 2222",it:"tra 1111 e 2222",ja:"1111と2222の間",lt:"tarp 1111 ir 2222",nb:"mellom 1111 og 2222",nl:"tussen 1111 en 2222",nn:"mellom 1111 og 2222",pl:"między 1111 a 2222",pt_BR:"entre 1111 e 2222",pt_PT:"entre 1111 e 2222",ru:"между 1111 и 2222",sk:"medzi 1111 a 2222",sl:"med 1111 in 2222",sr:"између 1111 и 2222",sv:"mellan 1111 och 2222",uk:"між 1111 та 2222",zh_CN:" 介于 1111 与 2222 之间",zh_HK:" 介于 1111 与 2222 之间",zh_TW:" 介于 1111 与 2222 之间"};let n=r[i];if(!n){const t=Object.keys(r).filter((t=>t.startsWith(i)));if(0===t.length)return null;n=r[t[0]]}return n.replace("1111",t).replace("2222",e)}(t,e,this._serverLang):`from ${t} until ${e}`,r=Array(this.numArgs).fill("");r[this.dateIndex]=i;os(this,"filter:changed",{filters:{rules:[{name:this.rule,values:r}]},replace:this.rule})}}}window.customElements.define("grampsjs-filter-years",dm);class hm extends hi{constructor(){super(...arguments),this.checked=!1,this.indeterminate=!1,this.disabled=!1,this.name="",this.value="on",this.reducedTouchTarget=!1,this.animationClass="",this.shouldRenderRipple=!1,this.focused=!1,this.mdcFoundationClass=void 0,this.mdcFoundation=void 0,this.rippleElement=null,this.rippleHandlers=new de((()=>(this.shouldRenderRipple=!0,this.ripple.then((t=>this.rippleElement=t)),this.ripple)))}createAdapter(){return{}}update(t){const e=t.get("indeterminate"),i=t.get("checked"),r=t.get("disabled");if(void 0!==e||void 0!==i||void 0!==r){const t=this.calculateAnimationStateName(!!i,!!e,!!r),n=this.calculateAnimationStateName(this.checked,this.indeterminate,this.disabled);this.animationClass=`${t}-${n}`}super.update(t)}calculateAnimationStateName(t,e,i){return i?"disabled":e?"indeterminate":t?"checked":"unchecked"}renderRipple(){return this.shouldRenderRipple?this.renderRippleTemplate():""}renderRippleTemplate(){return M`<mwc-ripple
        .disabled="${this.disabled}"
        unbounded></mwc-ripple>`}render(){const t=this.indeterminate||this.checked,e={"mdc-checkbox--disabled":this.disabled,"mdc-checkbox--selected":t,"mdc-checkbox--touch":!this.reducedTouchTarget,"mdc-ripple-upgraded--background-focused":this.focused,"mdc-checkbox--anim-checked-indeterminate":"checked-indeterminate"==this.animationClass,"mdc-checkbox--anim-checked-unchecked":"checked-unchecked"==this.animationClass,"mdc-checkbox--anim-indeterminate-checked":"indeterminate-checked"==this.animationClass,"mdc-checkbox--anim-indeterminate-unchecked":"indeterminate-unchecked"==this.animationClass,"mdc-checkbox--anim-unchecked-checked":"unchecked-checked"==this.animationClass,"mdc-checkbox--anim-unchecked-indeterminate":"unchecked-indeterminate"==this.animationClass},i=this.indeterminate?"mixed":void 0;return M`
      <div class="mdc-checkbox mdc-checkbox--upgraded ${Ot(e)}">
        <input type="checkbox"
              class="mdc-checkbox__native-control"
              name="${Ke(this.name)}"
              aria-checked="${Ke(i)}"
              aria-label="${Ke(this.ariaLabel)}"
              aria-labelledby="${Ke(this.ariaLabelledBy)}"
              aria-describedby="${Ke(this.ariaDescribedBy)}"
              data-indeterminate="${this.indeterminate?"true":"false"}"
              ?disabled="${this.disabled}"
              .indeterminate="${this.indeterminate}"
              .checked="${this.checked}"
              .value="${this.value}"
              @change="${this.handleChange}"
              @focus="${this.handleFocus}"
              @blur="${this.handleBlur}"
              @mousedown="${this.handleRippleMouseDown}"
              @mouseenter="${this.handleRippleMouseEnter}"
              @mouseleave="${this.handleRippleMouseLeave}"
              @touchstart="${this.handleRippleTouchStart}"
              @touchend="${this.handleRippleDeactivate}"
              @touchcancel="${this.handleRippleDeactivate}">
        <div class="mdc-checkbox__background"
          @animationend="${this.resetAnimationClass}">
          <svg class="mdc-checkbox__checkmark"
              viewBox="0 0 24 24">
            <path class="mdc-checkbox__checkmark-path"
                  fill="none"
                  d="M1.73,12.91 8.1,19.28 22.79,4.59"></path>
          </svg>
          <div class="mdc-checkbox__mixedmark"></div>
        </div>
        ${this.renderRipple()}
      </div>`}setFormData(t){this.name&&this.checked&&t.append(this.name,this.value)}handleFocus(){this.focused=!0,this.handleRippleFocus()}handleBlur(){this.focused=!1,this.handleRippleBlur()}handleRippleMouseDown(t){const e=()=>{window.removeEventListener("mouseup",e),this.handleRippleDeactivate()};window.addEventListener("mouseup",e),this.rippleHandlers.startPress(t)}handleRippleTouchStart(t){this.rippleHandlers.startPress(t)}handleRippleDeactivate(){this.rippleHandlers.endPress()}handleRippleMouseEnter(){this.rippleHandlers.startHover()}handleRippleMouseLeave(){this.rippleHandlers.endHover()}handleRippleFocus(){this.rippleHandlers.startFocus()}handleRippleBlur(){this.rippleHandlers.endFocus()}handleChange(){this.checked=this.formElement.checked,this.indeterminate=this.formElement.indeterminate}resetAnimationClass(){this.animationClass=""}get isRippleActive(){var t;return(null===(t=this.rippleElement)||void 0===t?void 0:t.isActive)||!1}}it([ht(".mdc-checkbox")],hm.prototype,"mdcRoot",void 0),it([ht("input")],hm.prototype,"formElement",void 0),it([ot({type:Boolean,reflect:!0})],hm.prototype,"checked",void 0),it([ot({type:Boolean})],hm.prototype,"indeterminate",void 0),it([ot({type:Boolean,reflect:!0})],hm.prototype,"disabled",void 0),it([ot({type:String,reflect:!0})],hm.prototype,"name",void 0),it([ot({type:String})],hm.prototype,"value",void 0),it([Xe,ot({type:String,attribute:"aria-label"})],hm.prototype,"ariaLabel",void 0),it([Xe,ot({type:String,attribute:"aria-labelledby"})],hm.prototype,"ariaLabelledBy",void 0),it([Xe,ot({type:String,attribute:"aria-describedby"})],hm.prototype,"ariaDescribedBy",void 0),it([ot({type:Boolean})],hm.prototype,"reducedTouchTarget",void 0),it([lt()],hm.prototype,"animationClass",void 0),it([lt()],hm.prototype,"shouldRenderRipple",void 0),it([lt()],hm.prototype,"focused",void 0),it([pt("mwc-ripple")],hm.prototype,"ripple",void 0),it([dt({passive:!0})],hm.prototype,"handleRippleTouchStart",null);const pm=n`.mdc-checkbox{padding:calc((40px - 18px) / 2);padding:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);margin:calc((40px - 40px) / 2);margin:calc((var(--mdc-checkbox-touch-target-size, 40px) - 40px) / 2)}.mdc-checkbox .mdc-checkbox__ripple::before,.mdc-checkbox .mdc-checkbox__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-checkbox:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox.mdc-checkbox--selected:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox .mdc-checkbox__background{top:calc((40px - 18px) / 2);top:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);left:calc((40px - 18px) / 2);left:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2)}.mdc-checkbox .mdc-checkbox__native-control{top:calc((40px - 40px) / 2);top:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);right:calc((40px - 40px) / 2);right:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);left:calc((40px - 40px) / 2);left:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);width:40px;width:var(--mdc-checkbox-touch-target-size, 40px);height:40px;height:var(--mdc-checkbox-touch-target-size, 40px)}.mdc-checkbox .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}@keyframes mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786{0%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}50%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}}@keyframes mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786{0%,80%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}100%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}}.mdc-checkbox.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786}.mdc-checkbox.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786}.mdc-checkbox .mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.38);border-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:transparent;background-color:rgba(0, 0, 0, 0.38);background-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38))}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-touch-target-wrapper{display:inline}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:mdc-animation-deceleration-curve-timing-function;transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom}.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__focus-ring,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__focus-ring{pointer-events:none;border:2px solid transparent;border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:100%;width:100%}@media screen and (forced-colors: active){.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__focus-ring,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__focus-ring{border-color:CanvasText}}.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__focus-ring::after,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__focus-ring::after{content:"";border:2px solid transparent;border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}@media screen and (forced-colors: active){.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__focus-ring::after,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__focus-ring::after{border-color:CanvasText}}@media all and (-ms-high-contrast: none){.mdc-checkbox .mdc-checkbox__focus-ring{display:none}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-checkbox__mixedmark{margin:0 1px}}.mdc-checkbox--disabled{cursor:default;pointer-events:none}.mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:transparent;pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--upgraded .mdc-checkbox__checkmark{opacity:1}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear 0s;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear 0s;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background{transition:border-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit}.mdc-checkbox__native-control:disabled{cursor:default;pointer-events:none}.mdc-checkbox--touch{margin:calc((48px - 40px) / 2);margin:calc((var(--mdc-checkbox-state-layer-size, 48px) - var(--mdc-checkbox-state-layer-size, 40px)) / 2)}.mdc-checkbox--touch .mdc-checkbox__native-control{top:calc((40px - 48px) / 2);top:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);right:calc((40px - 48px) / 2);right:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);left:calc((40px - 48px) / 2);left:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);width:48px;width:var(--mdc-checkbox-state-layer-size, 48px);height:48px;height:var(--mdc-checkbox-state-layer-size, 48px)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark{transition:opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 180ms 0ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__mixedmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark-path,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__mixedmark{transition:none}:host{outline:none;display:inline-flex;-webkit-tap-highlight-color:transparent}:host([checked]),:host([indeterminate]){--mdc-ripple-color:var(--mdc-theme-secondary, #018786)}.mdc-checkbox .mdc-checkbox__background::before{content:none}`;let um=class extends hm{};um.styles=[pm],um=it([at("mwc-checkbox")],um);class mm extends(al(K)){static get styles(){return[nl,n`
        h3 {
          font-size: 14px;
          text-transform: uppercase;
          font-family: var(--grampsjs-body-font-family);
          font-weight: 500;
          color: var(--mdc-theme-primary);
          border-color: var(--mdc-theme-primary);
          border-bottom-width: 1px;
        }
      `]}static get properties(){return{filters:{type:Array},props:{type:Object},hasCount:{type:Boolean},label:{type:String}}}constructor(){super(),this.filters=[],this.props={},this.hasCount=!1,this.label="Properties"}render(){return M`
      <h3>${this._(this.label)}</h3>
      ${Object.keys(this.props).map((t=>M`
          <mwc-formfield
            label="${this._(this.props[t]||"").replace(/<[^>]+>/,"")}"
          >
            <mwc-checkbox
              id="${t}"
              @change="${this._handleChange}"
              ?checked="${this.filters.filter((e=>e.name===t)).length>0}"
            ></mwc-checkbox>
          </mwc-formfield>
        `))}
    `}_handleChange(t){const e=t.target.id,i=this.hasCount?{name:e,values:["0","greater than"]}:{name:e};os(this,"filter:changed",{filters:{rules:t.target.checked?[i]:[]},replace:e})}}window.customElements.define("grampsjs-filter-properties",mm);class fm extends(al(K)){static get styles(){return[nl]}static get properties(){return{loading:{type:Boolean},error:{type:Boolean},loadWithoutLocale:{type:Boolean},_errorMessage:{type:String},_data:{type:Object},_oldUrl:{type:String}}}constructor(){super(),this.loading=!0,this.error=!1,this.renderOnError=!1,this.loadWithoutLocale=!1,this._errorMessage="",this._data={},this._oldUrl="",this._boundUpdateData=this._updateData.bind(this),this._boundsHandleOnline=this._handleOnline.bind(this)}render(){return this.error&&(this.dispatchEvent(new CustomEvent("grampsjs:error",{bubbles:!0,composed:!0,detail:{message:this._errorMessage}})),!this.renderOnError)?"":this.loading?this.renderLoading():this.renderContent()}renderLoading(){return""}getUrl(){return""}update(t){super.update(t),this.getUrl()!==this._oldUrl&&this._updateData()}_updateData(t=!0){const e=this.getUrl();this._oldUrl=e,""!==e&&(t&&this._clearData(),this.loading=!0,On(e).then((t=>{this.loading=!1,"data"in t?(this._data={data:t.data},this.error=!1):"error"in t&&(this.error=!0,this._errorMessage=t.error)})))}_clearData(){this._data={}}_handleOnline(){this.error&&this._updateData()}connectedCallback(){super.connectedCallback(),window.addEventListener("db:changed",this._boundUpdateData),window.addEventListener("online",this._boundHandleOnline)}disconnectedCallback(){window.removeEventListener("online",this._boundHandleOnline),window.removeEventListener("db:changed",this._boundUpdateData),super.disconnectedCallback()}}window.customElements.define("grampsjs-filter-tags",class extends fm{static get styles(){return[nl,n`
        h3 {
          font-size: 14px;
          text-transform: uppercase;
          font-family: var(--grampsjs-body-font-family);
          font-weight: 500;
          color: var(--mdc-theme-primary);
          border-color: var(--mdc-theme-primary);
          border-bottom-width: 1px;
        }
      `]}static get properties(){return{filters:{type:Array}}}constructor(){super(),this.filters=[]}renderContent(){return M`
      <h3>${this._("Tags")}</h3>
      ${this._data.data.map((t=>M`
          <mwc-formfield label="${t.name}">
            <mwc-checkbox
              id="${t.handle}"
              @change="${this._handleChange}"
              ?checked="${this.filters.filter((t=>"HasTag"===t.name)).filter((e=>e.values[0]===t.name)).length>0}"
            ></mwc-checkbox>
          </mwc-formfield>
        `))}
    `}getUrl(){return"/api/tags/"}_handleChange(){os(this,"filter:changed",{filters:{rules:[...this.renderRoot.querySelectorAll("mwc-checkbox")].map((t=>this._checkboxToTag(t))).filter((t=>t.checked)).map((t=>({name:"HasTag",values:t.values})))},replace:"HasTag"})}_checkboxToTag(t){const e=t.id,[i]=this._data.data.filter((t=>t.handle===e));return{values:[i.name],checked:t.checked}}});window.customElements.define("grampsjs-view-people",class extends cm{constructor(){super(),this._columns={grampsId:{title:"Gramps ID",sort:"gramps_id"},surname:{title:"Surname",sort:"surname"},given:{title:"Given name",sort:""},birth:{title:"Birth Date",sort:"birth"},death:{title:"Death Date",sort:"death"},change:{title:"Last changed",sort:"change"}},this._objectsName="people"}get _fetchUrl(){return`/api/people/?locale=${this.strings?.__lang__||"en"}&profile=self&keys=gramps_id,profile,change`}_getItemPath(t){return`person/${t.grampsId}`}_getAddPath(){return"new_person"}_formatRow(t){return{grampsId:t.gramps_id,surname:t?.profile?.name_surname,given:t?.profile?.name_given,birth:t?.profile?.birth?.date,death:t?.profile?.death?.date,change:ns(t.change,this.strings.__lang__)}}renderFilters(){return M`
      <grampsjs-filter-years
        .strings="${this.strings}"
        label="Birth year"
        rule="HasBirth"
      >
      </grampsjs-filter-years>
      <grampsjs-filter-years
        .strings="${this.strings}"
        label="Death year"
        rule="HasDeath"
      >
      </grampsjs-filter-years>

      <grampsjs-filter-properties
        .strings="${this.strings}"
        .props="${ds}"
      ></grampsjs-filter-properties>

      <grampsjs-filter-properties
        hasCount
        .strings="${this.strings}"
        .props="${hs.people}"
        label="${this._("Associations")}"
      ></grampsjs-filter-properties>

      <grampsjs-filter-tags .strings="${this.strings}"></grampsjs-filter-tags>
    `}});window.customElements.define("grampsjs-view-families",class extends cm{constructor(){super(),this._columns={grampsId:{title:"Gramps ID",sort:"gramps_id"},father:{title:"Father",sort:"surname"},mother:{title:"Mother",sort:""},change:{title:"Last changed",sort:"change"}},this._objectsName="families"}get _fetchUrl(){return`/api/families/?locale=${this.strings?.__lang__||"en"}&profile=self&keys=gramps_id,profile,change`}_getItemPath(t){return`family/${t.grampsId}`}_getAddPath(){return"new_family"}renderFilters(){return M`
      <grampsjs-filter-type
        .strings="${this.strings}"
        label="${this._("Relationship type:").replace(":","")}"
        typeName="family_relation_types"
        rule="HasRelType"
      ></grampsjs-filter-type>

      <grampsjs-filter-properties
        hasCount
        .strings="${this.strings}"
        .props="${hs.families}"
        label="${this._("Associations")}"
      ></grampsjs-filter-properties>

      <grampsjs-filter-tags .strings="${this.strings}"></grampsjs-filter-tags>
    `}_formatRow(t){return{grampsId:t.gramps_id,father:`${t?.profile?.father?.name_surname||"…"}, ${t?.profile?.father?.name_given||"…"}`,mother:`${t?.profile?.mother?.name_surname||"…"}, ${t?.profile?.mother?.name_given||"…"}`,change:ns(t.change,this.strings.__lang__)}}});window.customElements.define("grampsjs-view-places",class extends cm{constructor(){super(),this._columns={grampsId:{title:"Gramps ID",sort:"gramps_id"},title:{title:"Name",sort:"title"},change:{title:"Last changed",sort:"change"}},this._objectsName="places"}get _fetchUrl(){return"/api/places/?keys=gramps_id,name,change"}_getItemPath(t){return`place/${t.grampsId}`}_getAddPath(){return"new_place"}renderFilters(){return M`
      <grampsjs-filter-properties
        hasCount
        .strings="${this.strings}"
        .props="${hs.places}"
        label="${this._("Associations")}"
      ></grampsjs-filter-properties>

      <grampsjs-filter-tags .strings="${this.strings}"></grampsjs-filter-tags>
    `}_formatRow(t){return{grampsId:t.gramps_id,title:t.name.value,change:ns(t.change,this.strings.__lang__)}}});const gm=Symbol("selection controller");class _m{constructor(){this.selected=null,this.ordered=null,this.set=new Set}}class vm{constructor(t){this.sets={},this.focusedSet=null,this.mouseIsDown=!1,this.updating=!1,t.addEventListener("keydown",(t=>{this.keyDownHandler(t)})),t.addEventListener("mousedown",(()=>{this.mousedownHandler()})),t.addEventListener("mouseup",(()=>{this.mouseupHandler()}))}static getController(t){const e=!("global"in t)||"global"in t&&t.global?document:t.getRootNode();let i=e[gm];return void 0===i&&(i=new vm(e),e[gm]=i),i}keyDownHandler(t){const e=t.target;"checked"in e&&this.has(e)&&("ArrowRight"==t.key||"ArrowDown"==t.key?this.selectNext(e):"ArrowLeft"!=t.key&&"ArrowUp"!=t.key||this.selectPrevious(e))}mousedownHandler(){this.mouseIsDown=!0}mouseupHandler(){this.mouseIsDown=!1}has(t){return this.getSet(t.name).set.has(t)}selectPrevious(t){const e=this.getOrdered(t),i=e.indexOf(t),r=e[i-1]||e[e.length-1];return this.select(r),r}selectNext(t){const e=this.getOrdered(t),i=e.indexOf(t),r=e[i+1]||e[0];return this.select(r),r}select(t){t.click()}focus(t){if(this.mouseIsDown)return;const e=this.getSet(t.name),i=this.focusedSet;this.focusedSet=e,i!=e&&e.selected&&e.selected!=t&&e.selected.focus()}isAnySelected(t){const e=this.getSet(t.name);for(const t of e.set)if(t.checked)return!0;return!1}getOrdered(t){const e=this.getSet(t.name);return e.ordered||(e.ordered=Array.from(e.set),e.ordered.sort(((t,e)=>t.compareDocumentPosition(e)==Node.DOCUMENT_POSITION_PRECEDING?1:0))),e.ordered}getSet(t){return this.sets[t]||(this.sets[t]=new _m),this.sets[t]}register(t){const e=t.name||t.getAttribute("name")||"",i=this.getSet(e);i.set.add(t),i.ordered=null}unregister(t){const e=this.getSet(t.name);e.set.delete(t),e.ordered=null,e.selected==t&&(e.selected=null)}update(t){if(this.updating)return;this.updating=!0;const e=this.getSet(t.name);if(t.checked){for(const i of e.set)i!=t&&(i.checked=!1);e.selected=t}if(this.isAnySelected(t))for(const t of e.set){if(void 0===t.formElementTabIndex)break;t.formElementTabIndex=t.checked?0:-1}this.updating=!1}}var ym={NATIVE_CONTROL_SELECTOR:".mdc-radio__native-control"},bm={DISABLED:"mdc-radio--disabled",ROOT:"mdc-radio"},xm=function(t){function e(i){return t.call(this,et(et({},e.defaultAdapter),i))||this}return tt(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return bm},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return ym},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},setNativeControlDisabled:function(){}}},enumerable:!1,configurable:!0}),e.prototype.setDisabled=function(t){var i=e.cssClasses.DISABLED;this.adapter.setNativeControlDisabled(t),t?this.adapter.addClass(i):this.adapter.removeClass(i)},e}(vt);class wm extends hi{constructor(){super(...arguments),this._checked=!1,this.useStateLayerCustomProperties=!1,this.global=!1,this.disabled=!1,this.value="on",this.name="",this.reducedTouchTarget=!1,this.mdcFoundationClass=xm,this.formElementTabIndex=0,this.focused=!1,this.shouldRenderRipple=!1,this.rippleElement=null,this.rippleHandlers=new de((()=>(this.shouldRenderRipple=!0,this.ripple.then((t=>{this.rippleElement=t})),this.ripple)))}get checked(){return this._checked}set checked(t){var e,i;const r=this._checked;t!==r&&(this._checked=t,this.formElement&&(this.formElement.checked=t),null===(e=this._selectionController)||void 0===e||e.update(this),!1===t&&(null===(i=this.formElement)||void 0===i||i.blur()),this.requestUpdate("checked",r),this.dispatchEvent(new Event("checked",{bubbles:!0,composed:!0})))}_handleUpdatedValue(t){this.formElement.value=t}renderRipple(){return this.shouldRenderRipple?M`<mwc-ripple unbounded accent
        .internalUseStateLayerCustomProperties="${this.useStateLayerCustomProperties}"
        .disabled="${this.disabled}"></mwc-ripple>`:""}get isRippleActive(){var t;return(null===(t=this.rippleElement)||void 0===t?void 0:t.isActive)||!1}connectedCallback(){super.connectedCallback(),this._selectionController=vm.getController(this),this._selectionController.register(this),this._selectionController.update(this)}disconnectedCallback(){this._selectionController.unregister(this),this._selectionController=void 0}focus(){this.formElement.focus()}createAdapter(){return Object.assign(Object.assign({},kt(this.mdcRoot)),{setNativeControlDisabled:t=>{this.formElement.disabled=t}})}handleFocus(){this.focused=!0,this.handleRippleFocus()}handleClick(){this.formElement.focus()}handleBlur(){this.focused=!1,this.formElement.blur(),this.rippleHandlers.endFocus()}setFormData(t){this.name&&this.checked&&t.append(this.name,this.value)}render(){const t={"mdc-radio--touch":!this.reducedTouchTarget,"mdc-ripple-upgraded--background-focused":this.focused,"mdc-radio--disabled":this.disabled};return M`
      <div class="mdc-radio ${Ot(t)}">
        <input
          tabindex="${this.formElementTabIndex}"
          class="mdc-radio__native-control"
          type="radio"
          name="${this.name}"
          aria-label="${Ke(this.ariaLabel)}"
          aria-labelledby="${Ke(this.ariaLabelledBy)}"
          .checked="${this.checked}"
          .value="${this.value}"
          ?disabled="${this.disabled}"
          @change="${this.changeHandler}"
          @focus="${this.handleFocus}"
          @click="${this.handleClick}"
          @blur="${this.handleBlur}"
          @mousedown="${this.handleRippleMouseDown}"
          @mouseenter="${this.handleRippleMouseEnter}"
          @mouseleave="${this.handleRippleMouseLeave}"
          @touchstart="${this.handleRippleTouchStart}"
          @touchend="${this.handleRippleDeactivate}"
          @touchcancel="${this.handleRippleDeactivate}">
        <div class="mdc-radio__background">
          <div class="mdc-radio__outer-circle"></div>
          <div class="mdc-radio__inner-circle"></div>
        </div>
        ${this.renderRipple()}
      </div>`}handleRippleMouseDown(t){const e=()=>{window.removeEventListener("mouseup",e),this.handleRippleDeactivate()};window.addEventListener("mouseup",e),this.rippleHandlers.startPress(t)}handleRippleTouchStart(t){this.rippleHandlers.startPress(t)}handleRippleDeactivate(){this.rippleHandlers.endPress()}handleRippleMouseEnter(){this.rippleHandlers.startHover()}handleRippleMouseLeave(){this.rippleHandlers.endHover()}handleRippleFocus(){this.rippleHandlers.startFocus()}changeHandler(){this.checked=this.formElement.checked}}it([ht(".mdc-radio")],wm.prototype,"mdcRoot",void 0),it([ht("input")],wm.prototype,"formElement",void 0),it([lt()],wm.prototype,"useStateLayerCustomProperties",void 0),it([ot({type:Boolean})],wm.prototype,"global",void 0),it([ot({type:Boolean,reflect:!0})],wm.prototype,"checked",null),it([ot({type:Boolean}),Mt((function(t){this.mdcFoundation.setDisabled(t)}))],wm.prototype,"disabled",void 0),it([ot({type:String}),Mt((function(t){this._handleUpdatedValue(t)}))],wm.prototype,"value",void 0),it([ot({type:String})],wm.prototype,"name",void 0),it([ot({type:Boolean})],wm.prototype,"reducedTouchTarget",void 0),it([ot({type:Number})],wm.prototype,"formElementTabIndex",void 0),it([lt()],wm.prototype,"focused",void 0),it([lt()],wm.prototype,"shouldRenderRipple",void 0),it([pt("mwc-ripple")],wm.prototype,"ripple",void 0),it([Xe,ot({attribute:"aria-label"})],wm.prototype,"ariaLabel",void 0),it([Xe,ot({attribute:"aria-labelledby"})],wm.prototype,"ariaLabelledBy",void 0),it([dt({passive:!0})],wm.prototype,"handleRippleTouchStart",null);const km=n`.mdc-touch-target-wrapper{display:inline}.mdc-radio{padding:calc((40px - 20px) / 2)}.mdc-radio .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:rgba(0, 0, 0, 0.54)}.mdc-radio .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:#018786;border-color:var(--mdc-theme-secondary, #018786)}.mdc-radio .mdc-radio__native-control:enabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:#018786;border-color:var(--mdc-theme-secondary, #018786)}.mdc-radio [aria-disabled=true] .mdc-radio__native-control:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:rgba(0, 0, 0, 0.38)}.mdc-radio [aria-disabled=true] .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:rgba(0, 0, 0, 0.38)}.mdc-radio [aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:rgba(0, 0, 0, 0.38)}.mdc-radio .mdc-radio__background::before{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-radio .mdc-radio__background::before{top:calc(-1 * (40px - 20px) / 2);left:calc(-1 * (40px - 20px) / 2);width:40px;height:40px}.mdc-radio .mdc-radio__native-control{top:calc((40px - 40px) / 2);right:calc((40px - 40px) / 2);left:calc((40px - 40px) / 2);width:40px;height:40px}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-radio.mdc-radio--disabled [aria-disabled=true] .mdc-radio__native-control:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio.mdc-radio--disabled .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:GrayText}.mdc-radio.mdc-radio--disabled [aria-disabled=true] .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio.mdc-radio--disabled .mdc-radio__native-control:disabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:GrayText}.mdc-radio.mdc-radio--disabled [aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio.mdc-radio--disabled .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:GrayText}}.mdc-radio{display:inline-block;position:relative;flex:0 0 auto;box-sizing:content-box;width:20px;height:20px;cursor:pointer;will-change:opacity,transform,border-color,color}.mdc-radio__background{display:inline-block;position:relative;box-sizing:border-box;width:20px;height:20px}.mdc-radio__background::before{position:absolute;transform:scale(0, 0);border-radius:50%;opacity:0;pointer-events:none;content:"";transition:opacity 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-radio__outer-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;border-width:2px;border-style:solid;border-radius:50%;transition:border-color 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-radio__inner-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;transform:scale(0, 0);border-width:10px;border-style:solid;border-radius:50%;transition:transform 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1),border-color 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-radio__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit;z-index:1}.mdc-radio--touch{margin-top:4px;margin-bottom:4px;margin-right:4px;margin-left:4px}.mdc-radio--touch .mdc-radio__native-control{top:calc((40px - 48px) / 2);right:calc((40px - 48px) / 2);left:calc((40px - 48px) / 2);width:48px;height:48px}.mdc-radio.mdc-ripple-upgraded--background-focused .mdc-radio__focus-ring,.mdc-radio:not(.mdc-ripple-upgraded):focus .mdc-radio__focus-ring{pointer-events:none;border:2px solid transparent;border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:100%;width:100%}@media screen and (forced-colors: active){.mdc-radio.mdc-ripple-upgraded--background-focused .mdc-radio__focus-ring,.mdc-radio:not(.mdc-ripple-upgraded):focus .mdc-radio__focus-ring{border-color:CanvasText}}.mdc-radio.mdc-ripple-upgraded--background-focused .mdc-radio__focus-ring::after,.mdc-radio:not(.mdc-ripple-upgraded):focus .mdc-radio__focus-ring::after{content:"";border:2px solid transparent;border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}@media screen and (forced-colors: active){.mdc-radio.mdc-ripple-upgraded--background-focused .mdc-radio__focus-ring::after,.mdc-radio:not(.mdc-ripple-upgraded):focus .mdc-radio__focus-ring::after{border-color:CanvasText}}.mdc-radio__native-control:checked+.mdc-radio__background,.mdc-radio__native-control:disabled+.mdc-radio__background{transition:opacity 120ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__outer-circle{transition:border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{transition:transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1),border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio--disabled{cursor:default;pointer-events:none}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle{transform:scale(0.5);transition:transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1),border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio__native-control:disabled+.mdc-radio__background,[aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background{cursor:default}.mdc-radio__native-control:focus+.mdc-radio__background::before{transform:scale(1);opacity:.12;transition:opacity 120ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}:host{display:inline-block;outline:none}.mdc-radio{vertical-align:bottom}.mdc-radio .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-unchecked-color, rgba(0, 0, 0, 0.54))}.mdc-radio [aria-disabled=true] .mdc-radio__native-control:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-color, rgba(0, 0, 0, 0.38))}.mdc-radio [aria-disabled=true] .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-color, rgba(0, 0, 0, 0.38))}.mdc-radio [aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:var(--mdc-radio-disabled-color, rgba(0, 0, 0, 0.38))}`;let Tm=class extends wm{};Tm.styles=[km],Tm=it([at("mwc-radio")],Tm);class Sm extends(al(K)){static get styles(){return[nl,n`
        h3 {
          font-size: 14px;
          text-transform: uppercase;
          font-family: var(--grampsjs-body-font-family);
          font-weight: 500;
          color: var(--mdc-theme-primary);
          border-color: var(--mdc-theme-primary);
          border-bottom-width: 1px;
        }
      `]}static get properties(){return{filters:{type:Array},label:{type:String},types:{type:Object},loadingTypes:{type:Boolean},typesLocale:{type:Object},typeName:{type:String},rule:{type:String}}}constructor(){super(),this.filters=[],this.label="",this.types={},this.typesLocale={},this.typeName="",this.loadingTypes=!1,this.rule="HasType"}render(){return M`
      <h3>${this.label||this._("Type")}</h3>
      <grampsjs-form-select-type
        id="type"
        noheading
        nocustom
        valueNonLocal
        label="${this.label||this._("Type")}"
        .strings="${this.strings}"
        typeName="${this.typeName}"
        defaultTypeName=""
        ?loadingTypes=${this.loadingTypes}
        .types="${this.types}"
        .typesLocale="${this.typesLocale}"
        @formdata:changed="${this._handleChange}"
      >
      </grampsjs-form-select-type>
    `}updateTypeData(){this.loadingTypes=!0,On("/api/types/").then((t=>{"data"in t?this.types=t.data||{}:"error"in t&&os(this,"grampsjs:error",{message:t.error})})).then((()=>{On("/api/types/?locale=1").then((t=>{this.loadingTypes=!1,"data"in t?(this.typesLocale=t.data||{},this.error=!1):"error"in t&&os(this,"grampsjs:error",{message:t.error})}))}))}firstUpdated(){this.updateTypeData()}_handleChange(t){const e=t.detail.data;os(this,"filter:changed",{filters:{rules:[{name:this.rule,values:[e]}]},replace:this.rule})}}window.customElements.define("grampsjs-filter-type",Sm);window.customElements.define("grampsjs-view-events",class extends cm{constructor(){super(),this._columns={grampsId:{title:"Gramps ID",sort:"gramps_id"},type:{title:"Event Type",sort:"type"},date:{title:"Date",sort:"date"},place:{title:"Place",sort:"place"},change:{title:"Last changed",sort:"change"}},this._objectsName="events"}get _fetchUrl(){return`/api/events/?locale=${this.strings?.__lang__||"en"}&profile=self&keys=gramps_id,profile,change`}_getItemPath(t){return`event/${t.grampsId}`}_getAddPath(){return"new_event"}renderFilters(){return M`
      <grampsjs-filter-years
        .strings="${this.strings}"
        dateIndex="1"
        numArgs="4"
        label="${this._("Event Year")}"
        rule="HasData"
      ></grampsjs-filter-years>

      <grampsjs-filter-type
        .strings="${this.strings}"
        label="${this._("Event Type")}"
        typeName="event_types"
      ></grampsjs-filter-type>

      <grampsjs-filter-properties
        hasCount
        .strings="${this.strings}"
        .props="${hs.events}"
        label="${this._("Associations")}"
      ></grampsjs-filter-properties>

      <grampsjs-filter-tags .strings="${this.strings}"></grampsjs-filter-tags>
    `}_formatRow(t){return{grampsId:t.gramps_id,type:t?.profile?.type,date:t?.profile?.date,place:t?.profile?.place,change:ns(t.change,this.strings.__lang__)}}});const Cm=["css","of","style"];class Em extends(al(K)){static get styles(){return[nl,n`
        .option {
          margin-bottom: 1em;
        }

        .label {
          margin-right: 1em;
          width: 20em;
          display: inline-block;
          font-size: 16px;
          line-height: 24px;
          vertical-align: middle;
          margin-bottom: 0.5em;
        }

        .form {
          vertical-align: middle;
        }

        mwc-textfield,
        mwc-select {
          min-width: 20em;
          max-width: 100%;
        }

        mwc-switch {
          --mdc-switch-selected-track-color: rgba(109, 76, 65, 0.3);
        }
      `]}static get properties(){return{optionsDict:{type:Array},optionsHelp:{type:Array},_options:{type:Object}}}constructor(){super(),this.optionsDict=[],this.optionsHelp=[],this._options={}}render(){return M`
      ${Object.keys(this.optionsDict).filter((t=>!Cm.includes(t))).map((t=>this._renderOption(t)))}
    `}_renderOption(t){const e=this.optionsHelp[t][2];return"Array"===e.constructor.name?2===e.length&&"False"===e.sort()[0]&&"True"===e.sort()[1]?this._renderBooleanOption(t):this._renderArrayOption(t):this._renderStringOption(t)}_renderBooleanOption(t){return M`
      <div class="option">
        <span class="label">${this._(this.optionsHelp[t][1])||t}</span>
        <span class="form">
          <mwc-switch
            id="${t}"
            ?selected="${"true"===this.optionsDict[t]}"
            @click="${this._handleSwitch}"
          >
          </mwc-switch>
        </span>
      </div>
    `}_renderArrayOption(t){return M`
      <div class="option">
        <span class="label">${this._(this.optionsHelp[t][1])||t}</span>
        <span class="form">
          <mwc-select id="${t}" @change="${this._handleSelect}">
            ${this.optionsHelp[t][2].map((e=>this._renderSelectItem(e,this.optionsDict[t])))}
          </mwc-select>
        </span>
      </div>
    `}_renderStringOption(t){const e=this._(this.optionsHelp[t][1])||t,i=this.optionsHelp[t][2];return M`
      <div class="option">
        <span class="label">${e}</span>
        <span class="form">
          <mwc-textfield
            @input="${this._handleText}"
            id="${t}"
            helper="${this._(i)}"
            helperPersistent
            type="${i.includes("A number")?"number":"text"}"
          ></mwc-textfield>
        </span>
      </div>
    `}_renderSelectItem(t,e){const i=t.split("\t"),r=i[0]===`${e}`||"pdf"===i[0];return M`
      <mwc-list-item value="${i[0]}" ?selected=${r}
        >${this._(1===i.length?i[0]:i[1])}</mwc-list-item
      >
    `}_handleSwitch(t){this._options={...this._options,[t.target.id]:t.target.selected?"True":"False"},os(this,"report-options:changed",this._options)}_handleSelect(t){this._options={...this._options,[t.target.id]:t.target.value},os(this,"report-options:changed",this._options)}_handleText(t){this._options={...this._options,[t.target.id]:t.target.value},os(this,"report-options:changed",this._options)}}window.customElements.define("grampsjs-report-options",Em);window.customElements.define("grampsjs-view-report",class extends $d{static get styles(){return[super.styles,n`
        :host {
          padding-bottom: 2em;
        }

        h2 mwc-icon-button {
          color: var(--mdc-theme-primary);
        }
      `]}static get properties(){return{reportId:{type:String},data:{type:Object},_queryUrl:{type:String},_options:{type:Object}}}constructor(){super(),this.reportId="",this.data={},this._queryUrl="",this._options={}}renderContent(){return"id"in this.data?M`
      <h2>
        <mwc-icon-button
          icon="arrow_back"
          @click="${this._handleBack}"
        ></mwc-icon-button>
        ${this._(this.data.name)}
      </h2>
      <dl style="clear:left;">
        <div>
          <dt>${this._("Description")}</dt>
          <dd>${this._(this.data.description)}</dd>
        </div>
        <div>
          <dt>${this._("Author")}</dt>
          <dd>${this.data.authors.join("")}</dd>
        </div>
        <div>
          <dt>${this._("Version")}</dt>
          <dd>${this.data.version}</dd>
        </div>
      </dl>
      <div style="clear:left;"></div>

      <h3>${this._("Options")}</h3>

      <grampsjs-report-options
        .optionsDict="${this.data.options_dict}"
        .optionsHelp="${this.data.options_help}"
        @report-options:changed="${this._handleOptionsChanged}"
        .strings="${this.strings}"
      ></grampsjs-report-options>

      <mwc-button unelevated @click="${this._handleSubmit}"
        >${this._("_Generate").replace("_","")}</mwc-button
      >
      <a download href="${this._queryUrl}" id="submitanchor" target="_blank"
        >&nbsp;</a
      >
    `:""}async _fetchData(){this.loading=!0;const t=await On(`/api/reports/${this.reportId}`);this.loading=!1,"data"in t?(this.error=!1,this.data=t.data):"error"in t&&(this.error=!0,this._errorMessage=t.error)}firstUpdated(){"__lang__"in this.strings&&this._fetchData(this.strings.__lang__),this._updateQueryUrl()}update(t){super.update(t),t.has("reportId")&&(this.data={},this._fetchData())}_updateQueryUrl(){const t=Object.keys(this._options).reduce(((t,e)=>(""!==this._options[e]&&(t[e]=`${this._options[e]}`),t)),{});this._queryUrl=function(t,e){const i=localStorage.getItem("access_token"),r=`options=${encodeURIComponent(JSON.stringify(e))}`;return null===i?`${Cn}/api/reports/${t}/file?${r}`:`${Cn}/api/reports/${t}/file?jwt=${i}&${r}`}(this.reportId,t)}_handleSubmit(){this.shadowRoot.querySelector("#submitanchor").click()}_handleOptionsChanged(t){this._options={...t.detail},this._updateQueryUrl()}_handleBack(){os(this,"nav",{path:"reports"})}});window.customElements.define("grampsjs-view-reports",class extends $d{static get styles(){return[super.styles,n`
        .hidden {
          display: none;
        }
      `]}static get properties(){return{data:{type:Array},_formData:{type:Object},_queryUrl:{type:String}}}constructor(){super(),this.data=[],this._formData={exporter:"gramps",options:{compress:!0}},this._queryUrl=""}renderContent(){return M`
      <h2>${this._("_Reports").replace("_","")}</h2>
      <mwc-list>
        ${this.data.map((t=>this._selectListItem(t)))}
      </mwc-list>
    `}_selectListItem(t){return M`
      <li divider role="separator" padded></li>
      <mwc-list-item
        twoline
        graphic="icon"
        @click="${()=>this._handleItemClick(t.id)}"
      >
        <mwc-icon slot="graphic"
          >${us[t.category]||"menu_book"}</mwc-icon
        >
        <span>${this._(t.name)}</span>
        <span slot="secondary">${this._(t.description)}</span>
      </mwc-list-item>
    `}_handleItemClick(t){os(this,"nav",{path:`report/${t}`})}async _fetchData(){this.loading=!0;const t=await On("/api/reports/");this.loading=!1,"data"in t?(this.error=!1,this.data=t.data):"error"in t&&(this.error=!0,this._errorMessage=t.error)}firstUpdated(){"__lang__"in this.strings&&this._fetchData(this.strings.__lang__)}connectedCallback(){super.connectedCallback(),window.addEventListener("language:changed",(t=>this._handleLanguageChanged(t)))}_handleLanguageChanged(t){this._hasFirstUpdated&&this._fetchData(t.detail.lang)}});window.customElements.define("grampsjs-view-sources",class extends cm{constructor(){super(),this._columns={grampsId:{title:"Gramps ID",sort:"gramps_id"},title:{title:"Title",sort:"title"},author:{title:"Author",sort:"author"},pubinfo:{title:"Publication info",sort:"pubinfo"},change:{title:"Last changed",sort:"change"}},this._objectsName="sources"}get _fetchUrl(){return"/api/sources/?keys=gramps_id,title,author,pubinfo,change"}_getItemPath(t){return`source/${t.grampsId}`}_getAddPath(){return"new_source"}renderFilters(){return M`
      <grampsjs-filter-properties
        hasCount
        .strings="${this.strings}"
        .props="${hs.sources}"
        label="${this._("Associations")}"
      ></grampsjs-filter-properties>

      <grampsjs-filter-tags .strings="${this.strings}"></grampsjs-filter-tags>
    `}_formatRow(t){return{grampsId:t.gramps_id,title:t.title,author:t.author,pubinfo:t.pubinfo,change:ns(t.change,this.strings.__lang__)}}});window.customElements.define("grampsjs-view-citations",class extends cm{constructor(){super(),this._columns={grampsId:{title:"Gramps ID",sort:"gramps_id"},sourceTitle:{title:"Source: Title",sort:""},page:{title:"Page",sort:""},change:{title:"Last changed",sort:"change"}},this._objectsName="citations"}get _fetchUrl(){return"/api/citations/?extend=source_handle&keys=gramps_id,extended,page,change"}_getItemPath(t){return`citation/${t.grampsId}`}_getAddPath(){return"new_citation"}renderFilters(){return M`
      <grampsjs-filter-properties
        hasCount
        .strings="${this.strings}"
        .props="${hs.citations}"
        label="${this._("Associations")}"
      ></grampsjs-filter-properties>

      <grampsjs-filter-tags .strings="${this.strings}"></grampsjs-filter-tags>
    `}_formatRow(t){return{grampsId:t.gramps_id,sourceTitle:t.extended.source?.title,page:t.page,change:ns(t.change,this.strings.__lang__)}}});window.customElements.define("grampsjs-view-repositories",class extends cm{constructor(){super(),this._columns={grampsId:{title:"Gramps ID",sort:"gramps_id"},name:{title:"Name",sort:"name"},type:{title:"Type",sort:"type"},change:{title:"Last changed",sort:"change"}}}get _fetchUrl(){return"/api/repositories/?keys=gramps_id,name,type,change"}_getItemPath(t){return`repository/${t.grampsId}`}_getAddPath(){return"new_repository"}_formatRow(t){return{grampsId:t.gramps_id,name:t.name,type:this._(t.type),change:ns(t.change,this.strings.__lang__)}}});window.customElements.define("grampsjs-view-notes",class extends cm{constructor(){super(),this._columns={grampsId:{title:"Gramps ID",sort:"gramps_id"},type:{title:"Type",sort:"type"},text:{title:"Text",sort:"text"},change:{title:"Last changed",sort:"change"}}}get _fetchUrl(){return"/api/notes/?keys=gramps_id,type,text,change"}_getItemPath(t){return`note/${t.grampsId}`}_getAddPath(){return"new_note"}_formatRow(t,e){return{grampsId:t.gramps_id,type:e._(t.type),text:t?.text?.string,change:ns(t.change,this.strings.__lang__)}}renderFilters(){return M`
      <grampsjs-filter-type
        .strings="${this.strings}"
        label="${this._("Note type:").replace(":","")}"
        typeName="note_types"
      ></grampsjs-filter-type>
    `}});class $m extends(al(K)){static get styles(){return[nl,n`
        h3 {
          font-size: 14px;
          text-transform: uppercase;
          font-family: var(--grampsjs-body-font-family);
          font-weight: 500;
          color: var(--mdc-theme-primary);
          border-color: var(--mdc-theme-primary);
          border-bottom-width: 1px;
        }
      `]}static get properties(){return{filters:{type:Array}}}constructor(){super(),this.filters=[]}render(){return M`
      <h3>${this._("_Media Type:").replace(":","")}</h3>
      ${Object.keys(ps).map((t=>M`
          <mwc-formfield label="${this._(ps[t])}">
            <mwc-radio
              id="${t}"
              @change="${this._handleChange}"
              ?checked="${this.filters.filter((e=>"HasMedia"===e.name&&e.values[1]===t)).length>0}"
            ></mwc-radio>
          </mwc-formfield>
        `))}
    `}_handleChange(t){os(this,"filter:changed",{filters:{rules:[{name:"HasMedia",values:["",t.target.id,"",""]}]},replace:"HasMedia"})}}window.customElements.define("grampsjs-filter-mime",$m);window.customElements.define("grampsjs-view-media-objects",class extends cm{static get styles(){return[super.styles,n`
        .tile {
          margin: 15px 5px;
          float: left;
          cursor: pointer;
          padding: 5px;
          width: 200px;
          height: 230px;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          position: relative;
        }

        .clear {
          clear: both;
          padding-bottom: 2em;
        }

        .tile span {
          color: #666;
          font-size: 15px;
          position: absolute;
          bottom: 0px;
          width: 200px;
          text-overflow: ellipsis;
          overflow: hidden;
        }
      `]}constructor(){super(),this._columns={grampsId:{title:"Gramps ID",sort:"gramps_id"},mime:{title:"Type",sort:"mime"},desc:{title:"Description",sort:"title"},change:{title:"Last changed",sort:"change"}},this._objectsName="media"}get _fetchUrl(){return"/api/media/?keys=gramps_id,mime,desc,change,handle"}_getItemPath(t){return`media/${t.grampsId}`}_getAddPath(){return"new_media"}renderFilters(){return M`
      <grampsjs-filter-mime .strings="${this.strings}"></grampsjs-filter-mime>

      <grampsjs-filter-properties
        hasCount
        .strings="${this.strings}"
        .props="${hs.media}"
        label="${this._("Associations")}"
      ></grampsjs-filter-properties>

      <grampsjs-filter-tags .strings="${this.strings}"></grampsjs-filter-tags>
    `}renderAltView(){return M`
      <div class="clear"></div>
      ${this._rawData.map((t=>this._renderTile(t)))}
      <div class="clear"></div>
    `}_renderTile(t){return t?M`<div class="tile">
      <grampsjs-img
        handle="${t.handle}"
        size="200"
        displayHeight="200"
        square
        mime="${t.mime}"
        @click="${()=>this._handleImageClick(t)}"
      ></grampsjs-img
      ><br /><span>${t.desc}</span>
    </div>`:""}_handleImageClick(t){os(this,"nav",{path:`media/${t.gramps_id}`})}_renderViewButton(){return M`
      <mwc-icon-button
        icon="${this.altView?"list":"grid_view"}"
        @click="${this._handleViewBtn}"
      ></mwc-icon-button>
    `}_handleViewBtn(){this.altView=!this.altView}_formatRow(t){return{grampsId:t.gramps_id,mime:t.mime,desc:t.desc,change:ns(t.change,this.strings.__lang__)}}});const Am=vh`:host{--_container-color: var(--md-filled-icon-button-container-color, var(--md-sys-color-primary, #6750a4));--_container-height: var(--md-filled-icon-button-container-height, 40px);--_container-width: var(--md-filled-icon-button-container-width, 40px);--_disabled-container-color: var(--md-filled-icon-button-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-opacity: var(--md-filled-icon-button-disabled-container-opacity, 0.12);--_disabled-icon-color: var(--md-filled-icon-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-filled-icon-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-filled-icon-button-focus-icon-color, var(--md-sys-color-on-primary, #fff));--_hover-icon-color: var(--md-filled-icon-button-hover-icon-color, var(--md-sys-color-on-primary, #fff));--_hover-state-layer-color: var(--md-filled-icon-button-hover-state-layer-color, var(--md-sys-color-on-primary, #fff));--_hover-state-layer-opacity: var(--md-filled-icon-button-hover-state-layer-opacity, 0.08);--_icon-color: var(--md-filled-icon-button-icon-color, var(--md-sys-color-on-primary, #fff));--_icon-size: var(--md-filled-icon-button-icon-size, 24px);--_pressed-icon-color: var(--md-filled-icon-button-pressed-icon-color, var(--md-sys-color-on-primary, #fff));--_pressed-state-layer-color: var(--md-filled-icon-button-pressed-state-layer-color, var(--md-sys-color-on-primary, #fff));--_pressed-state-layer-opacity: var(--md-filled-icon-button-pressed-state-layer-opacity, 0.12);--_selected-container-color: var(--md-filled-icon-button-selected-container-color, var(--md-sys-color-primary, #6750a4));--_toggle-selected-focus-icon-color: var(--md-filled-icon-button-toggle-selected-focus-icon-color, var(--md-sys-color-on-primary, #fff));--_toggle-selected-hover-icon-color: var(--md-filled-icon-button-toggle-selected-hover-icon-color, var(--md-sys-color-on-primary, #fff));--_toggle-selected-hover-state-layer-color: var(--md-filled-icon-button-toggle-selected-hover-state-layer-color, var(--md-sys-color-on-primary, #fff));--_toggle-selected-icon-color: var(--md-filled-icon-button-toggle-selected-icon-color, var(--md-sys-color-on-primary, #fff));--_toggle-selected-pressed-icon-color: var(--md-filled-icon-button-toggle-selected-pressed-icon-color, var(--md-sys-color-on-primary, #fff));--_toggle-selected-pressed-state-layer-color: var(--md-filled-icon-button-toggle-selected-pressed-state-layer-color, var(--md-sys-color-on-primary, #fff));--_unselected-container-color: var(--md-filled-icon-button-unselected-container-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_toggle-focus-icon-color: var(--md-filled-icon-button-toggle-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_toggle-hover-icon-color: var(--md-filled-icon-button-toggle-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_toggle-hover-state-layer-color: var(--md-filled-icon-button-toggle-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_toggle-icon-color: var(--md-filled-icon-button-toggle-icon-color, var(--md-sys-color-primary, #6750a4));--_toggle-pressed-icon-color: var(--md-filled-icon-button-toggle-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_toggle-pressed-state-layer-color: var(--md-filled-icon-button-toggle-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_container-shape-start-start: var(--md-filled-icon-button-container-shape-start-start, var(--md-filled-icon-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-start-end: var(--md-filled-icon-button-container-shape-start-end, var(--md-filled-icon-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-end: var(--md-filled-icon-button-container-shape-end-end, var(--md-filled-icon-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-start: var(--md-filled-icon-button-container-shape-end-start, var(--md-filled-icon-button-container-shape, var(--md-sys-shape-corner-full, 9999px)))}.icon-button{color:var(--_icon-color);--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}.icon-button:hover{color:var(--_hover-icon-color)}.icon-button:focus{color:var(--_focus-icon-color)}.icon-button:active{color:var(--_pressed-icon-color)}.icon-button:disabled{color:var(--_disabled-icon-color)}.icon-button::before{background-color:var(--_container-color);border-radius:inherit;content:"";inset:0;position:absolute;z-index:-1}.icon-button:disabled::before{background-color:var(--_disabled-container-color);opacity:var(--_disabled-container-opacity)}.icon-button:disabled .icon{opacity:var(--_disabled-icon-opacity)}.toggle-filled{--md-ripple-hover-color: var(--_toggle-hover-state-layer-color);--md-ripple-pressed-color: var(--_toggle-pressed-state-layer-color)}.toggle-filled:not(:disabled){color:var(--_toggle-icon-color)}.toggle-filled:not(:disabled):hover{color:var(--_toggle-hover-icon-color)}.toggle-filled:not(:disabled):focus{color:var(--_toggle-focus-icon-color)}.toggle-filled:not(:disabled):active{color:var(--_toggle-pressed-icon-color)}.toggle-filled:not(:disabled)::before{background-color:var(--_unselected-container-color)}.selected{--md-ripple-hover-color: var(--_toggle-selected-hover-state-layer-color);--md-ripple-pressed-color: var(--_toggle-selected-pressed-state-layer-color)}.selected:not(:disabled){color:var(--_toggle-selected-icon-color)}.selected:not(:disabled):hover{color:var(--_toggle-selected-hover-icon-color)}.selected:not(:disabled):focus{color:var(--_toggle-selected-focus-icon-color)}.selected:not(:disabled):active{color:var(--_toggle-selected-pressed-icon-color)}.selected:not(:disabled)::before{background-color:var(--_selected-container-color)}
`;function Im(t,e=!0){return e&&"rtl"===getComputedStyle(t).getPropertyValue("direction").trim()}const Mm=lu($p);class Lm extends Mm{constructor(){super(...arguments),this.disabled=!1,this.flipIconInRtl=!1,this.href="",this.target="",this.ariaLabelSelected="",this.toggle=!1,this.selected=!1,this.type="submit",this.value="",this.flipIcon=Im(this,this.flipIconInRtl)}get name(){return this.getAttribute("name")??""}set name(t){this.setAttribute("name",t)}get form(){return this[su].form}get labels(){return this[su].labels}willUpdate(){this.href&&(this.disabled=!1)}render(){const t=this.href?Zp`div`:Zp`button`,{ariaLabel:e,ariaHasPopup:i,ariaExpanded:r}=this,n=e&&this.ariaLabelSelected,a=this.toggle?this.selected:pp;let s=pp;return this.href||(s=n&&this.selected?this.ariaLabelSelected:e),Wp`<${t}
        class="icon-button ${zp(this.getRenderClasses())}"
        id="button"
        aria-label="${s||pp}"
        aria-haspopup="${!this.href&&i||pp}"
        aria-expanded="${!this.href&&r||pp}"
        aria-pressed="${a}"
        ?disabled="${!this.href&&this.disabled}"
        @click="${this.handleClick}">
        ${this.renderFocusRing()}
        ${this.renderRipple()}
        ${this.selected?pp:this.renderIcon()}
        ${this.selected?this.renderSelectedIcon():pp}
        ${this.renderTouchTarget()}
        ${this.href&&this.renderLink()}
  </${t}>`}renderLink(){const{ariaLabel:t}=this;return dp`
      <a
        class="link"
        id="link"
        href="${this.href}"
        target="${this.target||pp}"
        aria-label="${t||pp}"></a>
    `}getRenderClasses(){return{"flip-icon":this.flipIcon,selected:this.toggle&&this.selected}}renderIcon(){return dp`<span class="icon"><slot></slot></span>`}renderSelectedIcon(){return dp`<span class="icon icon--selected"
      ><slot name="selected"><slot></slot></slot
    ></span>`}renderTouchTarget(){return dp`<span class="touch"></span>`}renderFocusRing(){return dp`<md-focus-ring
      part="focus-ring"
      for=${this.href?"link":"button"}></md-focus-ring>`}renderRipple(){return dp`<md-ripple
      for=${this.href?"link":pp}
      ?disabled="${!this.href&&this.disabled}"></md-ripple>`}connectedCallback(){this.flipIcon=Im(this,this.flipIconInRtl),super.connectedCallback()}async handleClick(t){await 0,!this.toggle||this.disabled||t.defaultPrevented||(this.selected=!this.selected,this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0})))}}ru(Lm),Xu(Lm),Lm.formAssociated=!0,Lm.shadowRootOptions={mode:"open",delegatesFocus:!0},it([jh({type:Boolean,reflect:!0})],Lm.prototype,"disabled",void 0),it([jh({type:Boolean,attribute:"flip-icon-in-rtl"})],Lm.prototype,"flipIconInRtl",void 0),it([jh()],Lm.prototype,"href",void 0),it([jh()],Lm.prototype,"target",void 0),it([jh({attribute:"aria-label-selected"})],Lm.prototype,"ariaLabelSelected",void 0),it([jh({type:Boolean})],Lm.prototype,"toggle",void 0),it([jh({type:Boolean,reflect:!0})],Lm.prototype,"selected",void 0),it([jh()],Lm.prototype,"type",void 0),it([jh({reflect:!0})],Lm.prototype,"value",void 0),it([Oh()],Lm.prototype,"flipIcon",void 0);const Pm=vh`:host{display:inline-flex;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);height:var(--_container-height);width:var(--_container-width);justify-content:center}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_container-height))/2) max(0px,(48px - var(--_container-width))/2)}md-focus-ring{--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}:host([disabled]){pointer-events:none}.icon-button{place-items:center;background:none;border:none;box-sizing:border-box;cursor:pointer;display:flex;place-content:center;outline:none;padding:0;position:relative;text-decoration:none;user-select:none;z-index:0;flex:1;border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.icon ::slotted(*){font-size:var(--_icon-size);height:var(--_icon-size);width:var(--_icon-size);font-weight:inherit}md-ripple{z-index:-1;border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.flip-icon .icon{transform:scaleX(-1)}.icon{display:inline-flex}.link{height:100%;outline:none;position:absolute;width:100%}.touch{position:absolute;height:max(48px,100%);width:max(48px,100%)}:host([touch-target=none]) .touch{display:none}@media(forced-colors: active){:host([disabled]){--_disabled-icon-opacity: 1}}
`;let Rm=class extends Lm{getRenderClasses(){return{...super.getRenderClasses(),filled:!0,"toggle-filled":this.toggle}}};Rm.styles=[Pm,Am],Rm=it([ph("md-filled-icon-button")],Rm);class zm extends $p{render(){return dp`<slot></slot>`}connectedCallback(){super.connectedCallback();"false"!==this.getAttribute("aria-hidden")?this.setAttribute("aria-hidden","true"):this.removeAttribute("aria-hidden")}}const Dm=vh`:host{font-size:var(--md-icon-size, 24px);width:var(--md-icon-size, 24px);height:var(--md-icon-size, 24px);color:inherit;font-variation-settings:inherit;font-weight:400;font-family:var(--md-icon-font, Material Symbols Outlined);display:inline-flex;font-style:normal;place-items:center;place-content:center;line-height:1;overflow:hidden;letter-spacing:normal;text-transform:none;user-select:none;white-space:nowrap;word-wrap:normal;flex-shrink:0;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale}::slotted(svg){fill:currentColor}::slotted(*){height:100%;width:100%}
`;let jm=class extends zm{};jm.styles=[Dm],jm=it([ph("md-icon")],jm);class Om extends(al(K)){static get styles(){return[nl,n`
        .container {
          display: flex;
          align-items: end;
          justify-content: center;
        }

        md-outlined-text-field {
          flex: 1;
          --md-outlined-text-field-container-shape: 28px;
          --md-outlined-text-field-input-text-placeholder-color: #777;
          resize: none;
        }

        md-filled-icon-button.send {
          --md-filled-icon-button-container-color: rgba(109, 76, 65, 1);
          position: relative;
          margin-left: 16px;
          margin-top: 9px;
          margin-bottom: 9px;
          margin-right: 0;
          --md-filled-icon-button-icon-size: 22px;
          --md-filled-icon-button-state-layer-height: 66px;
          --md-filled-icon-button-state-layer-width: 66px;
        }
      `]}static get properties(){return{value:{type:String},maxRows:{type:Number},nRows:{type:Number},loading:{type:Boolean}}}constructor(){super(),this.value="",this.maxRows=5,this.nRows=1,this.loading=!1}render(){return M`
      <div class="container">
        <md-outlined-text-field
          type="textarea"
          rows="${this.nRows}"
          placeholder="${this._("Ask something about your ancestors")}"
          value="${this.value}"
          @input="${this._handleInput}"
          @keydown="${this._handleKey}"
        >
        </md-outlined-text-field>
        <md-filled-icon-button
          @click="${this._handleBtnClick}"
          class="send"
          ?disabled="${this.loading}"
        >
          <md-icon>${Ha("M2,21L23,12L2,3V10L17,12L2,14V21Z","#ffffff")}</md-icon>
        </md-filled-icon-button>
      </div>
    `}_handleBtnClick(){this._submit()}_handleKey(t){"Enter"!==t.code||t.shiftKey?"Escape"===t.code&&this._clear():(t.preventDefault(),t.stopPropagation(),this._submit())}_handleInput(){this.value=this.renderRoot.querySelector("md-outlined-text-field").value,this._updateNRows()}_clear(){const t=this.renderRoot.querySelector("md-outlined-text-field");null!==t&&(t.value="",this.value=""),this._updateNRows()}_submit(){this.value.trim()&&!this.loading&&(os(this,"chat:prompt",{message:this.value.trim()}),this._clear())}_updateNRows(){this.value||(this.nRows=1),this.nRows=Math.min(this.maxRows,this.value.split("\n").length)}focusInput(){const t=this.renderRoot.querySelector("md-outlined-text-field");null!==t&&t.focus()}}window.customElements.define("grampsjs-chat-prompt",Om);class Bm extends(al(K)){static get styles(){return[nl,n`
        .container {
          margin: 15px 0;
          font-size: 16px;
          line-height: 26px;
          font-weight: 340;
          clear: right;
          max-width: 90%;
          display: flex;
          align-items: flex-start;
        }

        .container.human {
          background-color: rgba(109, 76, 65, 0.12);
          color: rgba(27, 19, 16);
          padding: 10px 20px;
          border-radius: 16px;
          float: right;
          max-width: 70%;
          margin-right: 10px;
        }

        .container.alert {
          max-width: 70%;
          margin-left: auto;
          margin-right: auto;
          width: fit-content;
          border-radius: 16px;
          border: 0;
        }

        .slot-wrap {
          white-space: pre-wrap;
          flex-grow: 1;
          overflow: hidden;
        }

        .avatar {
          width: 35px;
          height: 35px;
          flex-shrink: 0;
        }

        .avatar md-icon {
          --md-icon-size: 20px;
          position: relative;
          top: 3px;
        }
      `]}static get properties(){return{type:{type:String}}}constructor(){super(),this.type="human"}render(){return M`
      <div
        class="${Ot({container:!0,human:"human"===this.type,ai:"ai"===this.type,alert:"error"===this.type,error:"error"===this.type})}"
      >
        ${"ai"===this.type?M`
              <div class="avatar">
                <md-icon>${Ha(La,"#999",270)}</md-icon>
              </div>
            `:""}
        <slot name="no-wrap"></slot>
        <!-- prettier-ignore -->
        <div class="slot-wrap"><slot></slot></div>
      </div>
    `}}function Fm(t){return new Promise((e=>setTimeout(e,t)))}window.customElements.define("grampsjs-chat-message",Bm);class Nm extends(al(K)){static get styles(){return[nl,n`
        :host {
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .outer {
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .container {
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          overflow: hidden;
          clear: left;
        }

        .conversation {
          flex: 1;
          overflow-y: auto;
          display: flex;
          flex-direction: column-reverse;
          padding: 0 10px 20px 10px;
        }

        .prompt {
          padding: 10px;
          flex-shrink: 0;
        }

        .loading {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 24px;
          width: 48px;
          font-size: 24px;
        }

        .dot {
          width: 8px;
          height: 8px;
          margin: 0 4px;
          background-color: #888;
          border-radius: 50%;
          animation: flash 1.4s infinite ease-in-out both;
        }

        .dot:nth-child(1) {
          animation-delay: -0.32s;
        }

        .dot:nth-child(2) {
          animation-delay: -0.16s;
        }

        @keyframes flash {
          0%,
          80%,
          100% {
            opacity: 0;
          }
          40% {
            opacity: 1;
          }
        }

        .clear-btn {
          position: relative;
          float: left;
          top: 20px;
          left: 0px;
          margin: 1px solid red;
        }
      `]}static get properties(){return{messages:{type:Array},loading:{type:Boolean}}}constructor(){super(),this.messages=Rn()||[],this.loading=!1}render(){return M`
    <div class="clear-btn">
        <mwc-button
          raised
          label="${this._("New")}"
          icon="clear_all"
          @click="${this._handleClear}"
          ?disabled=${0===this.messages.length}
        ></mwc-button>
        </div>
        <div class="outer">
          <div class="container">
            <div class="conversation">
              ${this.loading?M` <grampsjs-chat-message
                      type="ai"
                      .strings="${this.strings}"
                    >
                      <div class="loading" slot="no-wrap">
                        <div class="dot"></div>
                        <div class="dot"></div>
                        <div class="dot"></div></div
                    ></grampsjs-chat-message>`:""}
              ${this.messages.toReversed().map((t=>M`
                    <grampsjs-chat-message
                      type="${t.role}"
                      .strings="${this.strings}"
                      >${function(t){const e=/\[([^\]]+)\]\(([^)]+)\)/g,i=[];let r,n=0;for(;null!==(r=e.exec(t));)r.index>n&&i.push(t.substring(n,r.index)),i.push(M`<a href="${r[2]}">${r[1]}</a>`),n=e.lastIndex;return n<t.length&&i.push(t.substring(n)),i}(t.message)}</grampsjs-chat-message
                    >
                  `))}
            </div>
            <div class="prompt">
              <grampsjs-chat-prompt
                ?loading="${this.loading}"
                @chat:prompt="${this._handlePrompt}"
                .strings="${this.strings}"
              ></grampsjs-chat-prompt>
            </div>
          </div>
        </div>
      </div>
    `}async _addMessage(t,e){if(!t.message)return;const{messages:i}=this;if("ai"===t.role){const r=t.message.split(" "),n=r.length;for(let t=1;t<=n;t+=1)this.messages=[...i.slice(-(e-1)),{role:"ai",message:r.slice(0,t).join(" ")}],await Fm(Math.ceil(1e3/n))}else this.messages=[...i.slice(-(e-1)),t]}_handlePrompt(t){const e={role:"human",message:t.detail.message};this._addMessage(e,7),zn(this.messages),this._generateResponse()}async _generateResponse(){this.loading=!0;const t={query:this.messages[this.messages.length-1].message};this.messages.length>1&&(t.history=this.messages.slice(0,this.messages.length-1));const e=await Nn("/api/chat/",t);let i;i="error"in e||!e?.data?.response?{role:"error",message:this._(e.error)}:{role:"ai",message:e.data.response},this.loading=!1,await this._addMessage(i,6),zn(this.messages)}_handleClear(){this.messages=[],zn(this.messages)}_scrollToLastMessage(){const t=this.renderRoot.querySelector(".conversation");null!=t&&(t.scrollTop=t.scrollHeight)}focusInput(t=!0){const e=this.renderRoot.querySelector("grampsjs-chat-prompt");null!==e?e.focusInput():t&&setTimeout((()=>this.focusInput(!1)),500),this._scrollToLastMessage()}_handleStorage(){this.messages=Rn()}connectedCallback(){super.connectedCallback(),window.addEventListener("storage",(t=>this._handleStorage(t)))}}window.customElements.define("grampsjs-chat",Nm);window.customElements.define("grampsjs-view-chat",class extends $d{static get styles(){return[super.styles,n`
        :host {
          height: calc(100vh - 85px);
          margin-top: 0;
          margin-bottom: 0;
          display: flex;
          overflow: hidden;
        }
      `]}update(t){super.update(t),t.has("active")&&this._focus()}_focus(){this.active&&this.renderRoot.querySelector("grampsjs-chat").focusInput()}renderContent(){return M` <grampsjs-chat .strings="${this.strings}"></grampsjs-chat> `}firstUpdated(){this._focus()}});window.customElements.define("grampsjs-view-export",class extends $d{static get styles(){return[super.styles,n`
        .hidden {
          display: none;
        }

        p {
          line-height: 1.6em;
        }

        mwc-icon.inline {
          --mdc-icon-size: 1em;
          color: rgba(0, 0, 0, 0.5);
        }
      `]}static get properties(){return{data:{type:Array},_formData:{type:Object},_downloadUrl:{type:String},_mediaDownloadUrl:{type:String},_viewPrivate:{type:Boolean}}}constructor(){super(),this.data=[],this._formData={exporter:"gramps",options:{}},this._downloadUrl="",this._mediaDownloadUrl="",this._viewPrivate=!0}renderContent(){return M`
      <h2>${this._("Export")}</h2>
      <h3>${this._("Export your family tree")}</h3>

      <mwc-select @change=${this._handleSelect} style="min-width:30em;">
        ${this.data.map((t=>M`
            <mwc-list-item
              value="${t.extension}"
              ?selected="${"gramps"===t.extension}"
              >${t.name.replace("_","")}</mwc-list-item
            >
          `))}
      </mwc-select>
      ${this._getDescription()} ${this._renderWarning()}
      <p>
        <mwc-button
          raised
          @click="${this._generateExport}"
          ?disabled="${!this._formData.exporter}"
          >${this._("_Generate")}</mwc-button
        >
        <grampsjs-task-progress-indicator
          id="indicator-export"
          taskName="exportFile"
          class="button"
          size="20"
          pollInterval="0.2"
          @task:complete="${this._handleTaskComplete}"
        ></grampsjs-task-progress-indicator>
        <a
          download="${this._getFileName()}"
          href="${this._downloadUrl?Hn(this._downloadUrl):""}"
          id="downloadanchor"
          >&nbsp;</a
        >
      </p>

      <h3>${this._("Export your media files")}</h3>

      <p>${this._("Generate a ZIP archive with all media files.")}</p>

      ${this._renderWarning()}
      <p>
        <mwc-button raised @click="${this._generateMediaArchive}"
          >${this._("_Generate")}</mwc-button
        >
        <grampsjs-task-progress-indicator
          id="indicator-media"
          taskName="exportMedia"
          class="button"
          size="20"
          pollInterval="0.2"
          @task:complete="${this._handleMediaTaskComplete}"
        ></grampsjs-task-progress-indicator>
        <a
          download="grampsweb-media-export.zip"
          href="${this._mediaDownloadUrl?Hn(this._mediaDownloadUrl):""}"
          id="downloadanchor-media"
          >&nbsp;</a
        >
      </p>
    `}_renderWarning(){return this._viewPrivate?"":M`
      <p class="warn">
        <mwc-icon class="inline">warning</mwc-icon> ${this._("You do not have permissions to view private records, so the export will be incomplete.")}
      </p>
    `}_getFileName(){const t=this._formData.exporter;return t?`grampsweb-export.${t}`:"file"}_getDescription(){if(0===this.data.length)return"";const[t]=this.data.filter((t=>t.extension===this._formData.exporter));return t?M`<p>${t.description}</p>`:""}_handleSelect(t){this._formData={...this._formData,exporter:t.target.value}}_startDownload(){this.shadowRoot.querySelector("#downloadanchor").click()}_startMediaDownload(){this.shadowRoot.querySelector("#downloadanchor-media").click()}_getQueryUrl(){const t=this._formData.exporter,e=this._formData.options||{};return`/api/exporters/${t}/file?${new URLSearchParams(e).toString()}`}async _generateExport(){this._downloadUrl="";const t=this.renderRoot.querySelector("#indicator-export");t.reset(),t.open=!0;const e=this._getQueryUrl(),i=await Nn(e);"error"in i?(t.setError(),t.errorMessage=i.error):"task"in i?t.taskId=i.task?.id||"":(this._downloadUrl=i?.data?.url||"",t.setComplete())}async _generateMediaArchive(){this._mediaDownloadUrl="";const t=this.renderRoot.querySelector("#indicator-media");t.reset(),t.open=!0;const e=await Nn("/api/media/archive/");"error"in e?(t.setError(),t.errorMessage=e.error):"task"in e?t.taskId=e.task?.id||"":(this._downloadUrl=e?.data?.url||"",t.setComplete())}_handleTaskComplete(t){const{status:e}=t.detail,i=JSON.parse(e.result||{});this._downloadUrl=i?.url||""}_handleMediaTaskComplete(t){const{status:e}=t.detail,i=JSON.parse(e.result||{});this._mediaDownloadUrl=i?.url||""}async _fetchData(){this.loading=!0;const t=await On("/api/exporters/");this.loading=!1,"data"in t?(this.error=!1,this.data=t.data):"error"in t&&(this.error=!0,this._errorMessage=t.error)}firstUpdated(){"__lang__"in this.strings&&this._fetchData(this.strings.__lang__);const t=In();this._viewPrivate=t.includes("ViewPrivate")}updated(t){t.has("_downloadUrl")&&this._downloadUrl&&this._startDownload(),t.has("_mediaDownloadUrl")&&this._mediaDownloadUrl&&this._startMediaDownload()}connectedCallback(){super.connectedCallback(),window.addEventListener("language:changed",(t=>this._handleLanguageChanged(t)))}_handleLanguageChanged(t){this._hasFirstUpdated&&this._fetchData(t.detail.lang)}});const Hm={person:"Edit Person",family:"Edit Family",event:"Edit Event",place:"Edit Place",citation:"Edit Citation",source:"Edit Source",repository:"Edit Repository",media:"Edit Media Object",note:"Edit Note"};function Vm(t,e){return e<=0?t:[...t.slice(0,e-1),t[e],t[e-1],...t.slice(e+1)]}function Um(t,e){return e>=t.length-1?t:[...t.slice(0,e),t[e+1],t[e],...t.slice(e+2)]}class Ym extends $d{static get styles(){return[super.styles,n`
        :host {
        }

        mwc-fab {
          position: fixed;
          bottom: 32px;
          right: 32px;
        }
      `]}static get properties(){return{grampsId:{type:String},canEdit:{type:Boolean},edit:{type:Boolean},editDialogContent:{type:String},_data:{type:Object},_className:{type:String},_saveButton:{type:Boolean}}}constructor(){super(),this.canEdit=!1,this.edit=!1,this.editDialogContent="",this._data={},this._className="",this._saveButton=!1,this._boundDisableEditMode=this._disableEditMode.bind(this),this._boundDeleteSelf=this._deleteSelf.bind(this)}getUrl(){return""}renderContent(){return 0===Object.keys(this._data).length?(this.loading,M``):M`
      ${this.renderElement()}
      ${this.canEdit&&!this.edit?this.renderFab():""}
      ${this.editDialogContent}
    `}renderFab(){return M` <mwc-fab icon="edit" @click="${this._handleFab}"></mwc-fab> `}_handleFab(){this.edit=!0,os(this,"edit-mode:on",{title:this._(Hm[this._className]||"Edit"),saveButton:this._saveButton})}_disableEditMode(){this.edit=!1}renderElement(){return M``}connectedCallback(){super.connectedCallback(),window.addEventListener("edit-mode:off",this._boundDisableEditMode),window.addEventListener("edit-mode:delete",this._boundDeleteSelf),window.addEventListener("language:changed",this._handleLangChange.bind(this)),this.addEventListener("edit:action",this.handleEditAction.bind(this))}disconnectedCallback(){this.removeEventListener("edit:action",this.handleEditAction.bind(this)),window.removeEventListener("edit-mode:off",this._boundDisableEditMode),window.removeEventListener("edit-mode:delete",this._boundDeleteSelf),super.disconnectedCallback()}update(t){super.update(t),this.active&&t.has("grampsId")&&this._updateData(),!t.has("active")||!this.active||0!==Object.keys(this._data).length&&this._data.gramps_id===this.grampsId||this.loading||this._updateData()}_updateData(t=!0){""!==this._url&&void 0!==this.grampsId&&this.grampsId&&(t&&this._clearData(),this.loading=!0,On(this.getUrl()).then((t=>{this.loading=!1,"data"in t?([this._data]=t.data,this.error=!1,""!==this._className&&(this.dispatchEvent(new CustomEvent("object:loaded",{bubbles:!0,composed:!0,detail:{grampsId:this.grampsId,className:this._className}})),this._handleObjectLoaded(this._data))):"error"in t&&(this.error=!0,this._errorMessage=t.error)})))}_handleLangChange(t){this.active&&t.detail.lang===this.strings.__lang__&&this._updateData(!1)}_clearData(){this._data={}}_handleObjectLoaded(){}async _deleteSelf(){const{handle:t}=this._data,e=this._data.gramps_id,i=is[this._className];if(this.active&&i&&t){const r=`/api/${i}/${t}`,n=await async function(t,e=!0){return Bn("DELETE",t,null,!1,e)}(r,!1);"data"in n?(this.grampsId="",this._data={},os(this,"db:changed"),os(this,"nav",{path:""}),os(this,"transaction:undo",{message:this._("Object %s deleted.",e),transaction:n.data,redirect:`${this._className}/${e}`})):"error"in n&&os(this,"grampsjs:error",{message:n.error})}}handleEditAction(t){if("delEvent"===t.detail.action)this.delObjectByIndex(t.detail.index,this._data,this._className,"event_ref_list");else if("addEventRef"===t.detail.action)this.addObject(t.detail.data,this._data,this._className,"event_ref_list");else if("updateEventRef"===t.detail.action)this.updateObjectByIndex(t.detail.index,t.detail.data,this._data,this._className,"event_ref_list");else if("addPlaceRef"===t.detail.action)this.addObject(t.detail.data,this._data,this._className,"placeref_list");else if("addChildRef"===t.detail.action)this.addObject(t.detail.data,this._data,this._className,"child_ref_list");else if("addNoteRef"===t.detail.action)this.addHandle(t.detail.data.data[0],this._data,this._className,"note_list");else if("newCitation"===t.detail.action)this._postObject(t.detail.data,"citation").then((e=>{"data"in e&&this.addHandle(t.detail.data.handle,this._data,this._className,"citation_list")}));else if("newNote"===t.detail.action)this._postObject(t.detail.data,"note").then((e=>{"data"in e&&this.addHandle(t.detail.data.handle,this._data,this._className,"note_list")}));else if("newEvent"===t.detail.action){const{role:e,...i}=t.detail.data;this._postObject(i,"event").then((i=>{if("data"in i){const i={_class:"EventRef",ref:t.detail.data.handle,role:e};this.addObject(i,this._data,this._className,"event_ref_list")}}))}else"addCitation"===t.detail.action?this.addHandle(t.detail.data.data[0],this._data,this._className,"citation_list"):"addAttribute"===t.detail.action?this.addObject(t.detail.data,this._data,this._className,"attribute_list"):"addURL"===t.detail.action?this.addObject(t.detail.data,this._data,this._className,"urls"):"addAssociation"===t.detail.action?this.addObject(t.detail.data,this._data,this._className,"person_ref_list"):"delRepository"===t.detail.action?this.delObject(t.detail.handle,this._data,this._className,"reporef_list"):"addRepoRef"===t.detail.action?this.addObject(t.detail.data,this._data,this._className,"reporef_list"):"upRepository"===t.detail.action?this.moveObject(t.detail.handle,this._data,this._className,"reporef_list","up"):"downRepository"===t.detail.action?this.moveObject(t.detail.handle,this._data,this._className,"reporef_list","down"):"addMediaRef"===t.detail.action?this.addObject(t.detail.data,this._data,this._className,"media_list"):"updateMediaRef"===t.detail.action?this.updateObject(t.detail.data,this._data,this._className,"media_list"):"updateAttribute"===t.detail.action?this.updateObjectByIndex(t.detail.index,t.detail.data,this._data,this._className,"attribute_list"):"updateURL"===t.detail.action?this.updateObjectByIndex(t.detail.index,t.detail.data,this._data,this._className,"urls"):"updateAssociation"===t.detail.action?this.updateObjectByIndex(t.detail.index,t.detail.data,this._data,this._className,"person_ref_list"):"delNoteRef"===t.detail.action?this.delHandle(t.detail.handle,this._data,this._className,"note_list"):"delMediaRef"===t.detail.action?this.delObject(t.detail.handle,this._data,this._className,"media_list"):"delPlace"===t.detail.action?this.delObject(t.detail.handle,this._data,this._className,"placeref_list"):"delAttr"===t.detail.action?this.delObjectByIndex(t.detail.index,this._data,this._className,"attribute_list"):"delURL"===t.detail.action?this.delObjectByIndex(t.detail.index,this._data,this._className,"urls"):"delAssociation"===t.detail.action?this.delObjectByIndex(t.detail.index,this._data,this._className,"person_ref_list"):"upMediaRef"===t.detail.action?this.moveObject(t.detail.handle,this._data,this._className,"media_list","up"):"downMediaRef"===t.detail.action?this.moveObject(t.detail.handle,this._data,this._className,"media_list","down"):"upName"===t.detail.action?this.moveName(t.detail.handle,this._data,"up"):"downName"===t.detail.action?this.moveName(t.detail.handle,this._data,"down"):"delName"===t.detail.action?this.delName(t.detail.data,this._data):"addName"===t.detail.action?this.addObject(t.detail.data,this._data,this._className,"alternate_names"):"updateName"===t.detail.action?this.updateName(t.detail.data,this._data):"delChildRef"===t.detail.action?this.delObject(t.detail.handle,this._data,this._className,"child_ref_list"):"delCitation"===t.detail.action?this.delObjectByIndex(t.detail.index,this._data,this._className,"citation_list"):"upEvent"===t.detail.action?this.moveObject(t.detail.handle,this._data,this._className,"event_ref_list","up"):"downEvent"===t.detail.action?this.moveObject(t.detail.handle,this._data,this._className,"event_ref_list","down"):"upPlace"===t.detail.action?this.moveObject(t.detail.handle,this._data,this._className,"placeref_list","up"):"downPlace"===t.detail.action?this.moveObject(t.detail.handle,this._data,this._className,"placeref_list","down"):"upChildRef"===t.detail.action?this.moveObject(t.detail.handle,this._data,this._className,"child_ref_list","up"):"downChildRef"===t.detail.action?this.moveObject(t.detail.handle,this._data,this._className,"child_ref_list","down"):"upCitation"===t.detail.action?this.moveHandle(t.detail.handle,this._data,this._className,"citation_list","up"):"downCitation"===t.detail.action?this.moveHandle(t.detail.handle,this._data,this._className,"citation_list","down"):"updateProp"===t.detail.action?this.updateProp(this._data,this._className,t.detail.data):alert(JSON.stringify(t.detail))}delObject(t,e,i,r){return this._updateObject(e,i,(e=>(e[r]=e[r].filter((e=>e.ref!==t)),e)))}delObjectByIndex(t,e,i,r){return this._updateObject(e,i,(e=>(e[r]=e[r].filter(((e,i)=>i!==t)),e)))}delHandle(t,e,i,r){return this._updateObject(e,i,(e=>(e[r]=e[r].filter((e=>e!==t)),e)))}moveObject(t,e,i,r,n){return this._updateObject(e,i,(e=>{const i=(e[r].map((t=>t.ref))||[]).indexOf(t);return"up"===n?e[r]=Vm(e[r],i):"down"===n&&(e[r]=Um(e[r],i)),e}))}moveName(t,e,i){return this._updateObject(e,"person",(e=>{if(0===t&&"down"===i||1===t&&"up"===i){const t=e.primary_name;[e.primary_name]=e.alternate_names,e.alternate_names=[t,...e.alternate_names.slice(1)]}else t>=1&&("up"===i?e.alternate_names=Vm(e.alternate_names,t-1):"down"===i&&(e.alternate_names=Um(e.alternate_names,t-1)));return e}))}delName(t,e){const{index:i}=t;return this._updateObject(e,"person",(t=>(0===i?Object.keys(t.primary_name).filter((t=>"type"!==t)).forEach((e=>delete t.primary_name[e])):1===i?t.alternate_names=[...t.alternate_names.slice(1)]:i>1&&(t.alternate_names=[...t.alternate_names.slice(0,i-1),...t.alternate_names.slice(i)]),t)))}updateName(t,e){return this._updateObject(e,"person",(e=>(0===t.index?e.primary_name=t.name:1===t.index?e.alternate_names=[t.name,...e.alternate_names.slice(1)]:e.alternate_names=[...e.alternate_names.slice(0,t.index-1),t.name,...e.alternate_names.slice(t.index)],e)))}addObject(t,e,i,r){return this._updateObject(e,i,(e=>(e[r]=[...e[r],t],e)))}updateObject(t,e,i,r){return this._updateObject(e,i,(e=>{const i=e[r].map(((t,e)=>({ref:t.ref,index:e}))).filter((e=>e.ref===t.ref));return 0===i.length||(e[r]=e[r].map(((e,r)=>r===i[0].index?{...e,...t}:e))),e}))}updateObjectByIndex(t,e,i,r,n){return this._updateObject(i,r,(i=>(i[n]=i[n].map(((i,r)=>r===t?{...i,...e}:i)),i)))}addHandle(t,e,i,r){return this._updateObject(e,i,(e=>(e[r]=[...e[r],t],e)))}updateProp(t,e,i){return this._updateObject(t,e,(t=>({...t,...i})))}moveHandle(t,e,i,r,n){return this._updateObject(e,i,(e=>{const i=(e[r]||[]).indexOf(t);return"up"===n?e[r]=Vm(e[r],i):"down"===n&&(e[r]=Um(e[r],i)),e}))}async _postObject(t,e){return Nn(`/api/${is[e]}/`,t)}_updateObject(t,e,i){let{extended:r,profile:n,backlinks:a,formatted:s,...o}=t;var l;o={_class:(l=e,l.charAt(0).toUpperCase()+l.slice(1)),...o};Fn(`/api/${is[e]}/${t.handle}`,i(o)).then((()=>this._updateData(!1)))}}class Zm extends $d{static get styles(){return[super.styles,n`
        :host {
        }
      `]}static get properties(){return{grampsIds:{type:Array},dialogContent:{type:String},_data:{type:Array},edit:{type:Boolean}}}constructor(){super(),this.grampsIds=[],this.dialogContent="",this._data=[],this.edit=!1}getUrl(){return""}renderContent(){return 0===this._data.length?M`${this.edit?this.renderEdit():""}`:M`
      ${this.edit?this.renderEdit():""} ${this.renderElements()}
      ${this.dialogContent}
    `}renderEdit(){}renderElements(){return M``}update(t){super.update(t),this.active&&t.has("grampsIds")&&this._updateData()}_updateData(){""!==this._url&&(0===this.grampsIds.length?this._data=[]:(this._data=[],this.loading=!0,On(this.getUrl()).then((t=>{this.loading=!1,"data"in t?(this.error=!1,this._data=t.data.sort(((t,e)=>this.grampsIds.indexOf(t.gramps_id)-this.grampsIds.indexOf(e.gramps_id)))):"error"in t&&(this.error=!0,this._errorMessage=t.error)}))))}}window.customElements.define("grampsjs-note-content",class extends K{static get styles(){return[nl,n`
        :host {
          font-family: var(
            --grampsjs-note-font-family,
            var(--grampsjs-body-font-family)
          );
          font-size: var(--grampsjs-note-font-size, 17px);
          line-height: var(--grampsjs-note-line-height, 1.5em);
          color: var(--grampsjs-note-color, #000000);
        }

        .note {
          font-weight: 300;
          column-width: 30em;
          column-gap: 2em;
        }

        .note.frame {
          border: 1px solid rgba(0, 0, 0, 0.15);
          border-radius: 8px;
          padding: 20px 25px;
        }

        .note.frame p {
          margin: 2em 0em;
        }

        .note.frame p:first-child {
          margin-top: 0;
        }

        .note.frame p:last-child {
          margin-bottom: 0;
        }
      `]}static get properties(){return{grampsId:{type:String},content:{type:String},framed:{type:Boolean}}}constructor(){super(),this.framed=!1}render(){return M`
      <div class="note ${this.framed?"frame":""}" id="note-content"></div>
    `}updated(){this.shadowRoot.getElementById("note-content").innerHTML=ys(this.content)}});class qm extends(al(K)){static get styles(){return[nl,n`
        .hide {
          display: none;
        }
      `]}static get properties(){return{heading:{type:String},label:{type:String},typeName:{type:String},defaultTypeName:{type:String},types:{type:Object},typesLocale:{type:Object},disabled:{type:Boolean},loadingTypes:{type:Boolean},required:{type:Boolean},initialValue:{type:String},noheading:{type:Boolean},nocustom:{type:Boolean},valueNonLocal:{type:Boolean},_hasCustomType:{type:Boolean}}}constructor(){super(),this.types={},this.typesLocale={},this.typeName="",this.heading="",this.label="",this.defaultTypeName="General",this.disabled=!1,this.loadingTypes=!1,this.required=!1,this.initialValue="",this.noheading=!1,this.nocustom=!1,this._hasCustomType=!1}getTypes(t){const e=t?.default||{},i=t?.custom||{},r=this.typeName in e?e[this.typeName]:[],n=this.typeName in i?i[this.typeName]:[];return r.concat(n)}render(){const t=this.getTypes(this.types),e=this.getTypes(this.typesLocale);return M`
      ${this.noheading?"":M`<h4 class="label">${this.heading||this._("Type")}</h4>`}
      <p style="display: flex">
        <mwc-select
          style="width:100%"
          class="${Ot({hide:this._hasCustomType})}"
          ?required=${this.required&&!this._hasCustomType&&!this.nocustom}
          ?disabled=${this.loadingTypes||this._hasCustomType||this.disabled}
          validationMessage="${this._("This field is mandatory")}"
          @change="${this.handleChange}"
          label="${this.loadingTypes?this._("Loading items..."):this.label}"
          id="select-type"
        >
          ${t.includes(this.defaultTypeName)||t.includes(this.initialValue)?"":M`<mwc-list-item value="" selected></mwc-list-item>`}
          ${this.loadingTypes?"":t.map(((i,r)=>M`
                  <mwc-list-item
                    value="${this.valueNonLocal?t[r]:e[r]}"
                    ?selected="${this.initialValue&&i===this.initialValue||!this.initialValue&&i===this.defaultTypeName}"
                    >${this._(i)}</mwc-list-item
                  >
                `))}
        </mwc-select>
        ${this.nocustom||!this._hasCustomType?"":M`
              <mwc-textfield
                ?disabled="${this.disabled}"
                style="width:100%"
                ?required=${this.required}
                validationMessage="${this._("This field is mandatory")}"
                @input="${this.handleChange}"
                label="${this.loadingTypes?this._("Loading items..."):`${this.label} ${this._("Custom")}`}"
                id="custom-type"
              >
              </mwc-textfield>
            `}
        ${this.nocustom?"":M`
              <mwc-icon-button
                style="margin-left: 8px"
                icon="${this._hasCustomType?"remove":"add"}"
                id="button-switch-type"
                @click="${this.switchTypeInput}"
                ?disabled="${this.disabled}"
              ></mwc-icon-button>
              <grampsjs-tooltip
                for="button-switch-type"
                content="${this._hasCustomType?this._("Switch to default type"):this._("Add custom type")}"
                .strings="${this.strings}"
              ></grampsjs-tooltip>
            `}
      </p>
    `}switchTypeInput(){if(!this._hasCustomType){this.shadowRoot.getElementById("select-type").value=null}this._hasCustomType=!this._hasCustomType}reset(){const t=this.getTypes(this.types),e=this.getTypes(this.typesLocale),i=t.indexOf("General"),r=this.shadowRoot.getElementById("select-type"),n=this.valueNonLocal?t[i]:e[i];r.value=-1===i?null:n,this._hasCustomType=!1}handleChange(t){const e=t.target.value;this.dispatchEvent(new CustomEvent("formdata:changed",{bubbles:!0,composed:!0,detail:{data:e}}))}isValid(){const t=this.shadowRoot.getElementById("select-type"),e=this.shadowRoot.getElementById("custom-type");if(null===t||this._hasCustomType&&null===e)return!1;try{return this._hasCustomType?e?.validity?.valid:t?.validity?.valid}catch{return!1}}}window.customElements.define("grampsjs-form-select-type",qm);const Wm={place:"Select an existing place",source:"Select an existing source",media:"Select an existing media object",event:"Share an existing event",note:"Select an existing note"};class Gm extends(al(K)){static get styles(){return[nl,n`
        mwc-menu {
          --mdc-menu-min-width: 200px;
          --mdc-menu-max-width: 400px;
        }

        .container {
          padding: 8px 16px;
        }

        mwc-textfield.rounded {
          --mdc-shape-small: 28px;
        }
      `]}static get properties(){return{objectType:{type:String},objects:{type:Array},data:{type:Array},multiple:{type:Boolean},fixedMenuPosition:{type:Boolean},label:{type:String},disabled:{type:Boolean}}}constructor(){super(),this.objectType="",this.objects=[],this.data=[],this.multiple=!1,this.fixedMenuPosition=!1,this.label="",this.disabled=!1}render(){return M`
      <div style="position:relative;">
        <mwc-button
          raised
          ?disabled="${this.disabled}"
          label="${this.label||this._(Wm[this.objectType])||this._("Select")}"
          id="button"
          @click="${this._handleBtnClick}"
          icon="add_link"
        ></mwc-button>

        <mwc-menu
          ?fixed="${this.fixedMenuPosition}"
          id="menu-search-results"
          corner="BOTTOM_LEFT"
          menuCorner="START"
          x="0"
          y="0"
          defaultFocus="NONE"
        >
          <div class="container">
            <mwc-textfield
              outlined
              icon="search"
              id="textfield"
              class="rounded"
              @input="${as((()=>this._handleInput()),500)}"
              style="width:100%;"
            ></mwc-textfield>
          </div>
          <grampsjs-search-result-list
            selectable
            .data="${this.data}"
            .strings="${this.strings}"
            @search-result:clicked="${this._handleSelected}"
          ></grampsjs-search-result-list>
        </mwc-menu>
      </div>
    `}reset(){this.objects=[],this._clearBox(),this.data=[]}_handleInput(){this._fetchData()}_handleList(){return this.objects.map((t=>t.handle))}_handleSelected(t){const e=t.detail,i=this._handleList();this.multiple?i.includes(e.handle)||(this.objects=[...this.objects,e],this._closeMenu(),os(this,"select-object:changed",{objects:this.objects})):(this.objects=[e],this._closeMenu(),os(this,"select-object:changed",{objects:this.objects}))}async _handleBtnClick(){this._fetchData(),this.shadowRoot.getElementById("menu-search-results").open=!0;const t=this.shadowRoot.getElementById("textfield");t.value="",t.disabled=!1,await t.updateComplete,t.focus()}async _fetchData(){const t=this.shadowRoot.getElementById("textfield"),e=this.shadowRoot.querySelector("grampsjs-search-result-list");e.textEmpty=M`<mwc-circular-progress
      indeterminate
      density="-3"
    ></mwc-circular-progress>`;const i=this._getFetchUrl(t.value),r=await On(i);"data"in r?(this.data=r.data.filter((t=>!this._handleList().includes(t.handle))),this.shadowRoot.getElementById("menu-search-results").open=!0,e.textEmpty=this._("Not found")):"error"in r&&(this.data=[],e.textEmpty=this._("Error"))}_getFetchUrl(t){if(window._oldSearchBackend)return t?`/api/search/?locale=${this.strings?.__lang__||"en"}&profile=all&query=${encodeURIComponent(`${t}* AND type:${this.objectType||"*"}`)}&profile=all&page=1&pagesize=20`:`/api/search/?sort=-change&locale=${this.strings?.__lang__||"en"}&profile=all&query=${encodeURIComponent(`type:${this.objectType||"*"}`)}&profile=all&page=1&pagesize=20`;let e=`/api/search/?locale=${this.strings?.__lang__||"en"}&profile=all&page=1&pagesize=20`;return e=t?`${e}&query=${encodeURIComponent(`${t}*`)}`:`${e}&sort=-change&query=${encodeURIComponent("*")}`,this.objectType&&(e=`${e}&type=${this.objectType}`),e}firstUpdated(){const t=this.shadowRoot.getElementById("button");this.shadowRoot.getElementById("menu-search-results").anchor=t}_closeMenu(){this.shadowRoot.getElementById("menu-search-results").open=!1}_clearBox(){this.shadowRoot.getElementById("textfield").value=""}}window.customElements.define("grampsjs-form-select-object",Gm);class Xm extends(al(K)){static get styles(){return[nl,n`
        mwc-icon-button {
          vertical-align: middle;
          color: rgba(0, 0, 0, 0.4);
          --mdc-theme-text-disabled-on-light: rgba(0, 0, 0, 0.15);
        }
      `]}static get properties(){return{objects:{type:Array},selectedIndex:{type:Number},reorder:{type:Boolean},deletable:{type:Boolean}}}constructor(){super(),this.objectType=!1,this.objects=[],this.selectedIndex=-1,this.reorder=!1,this.deletable=!1}render(){const t=0===this.objects.length,e=1===this.objects.length,i=this.selectedIndex<0;return t?M``:M`
      <div class="buttons">
        ${this.deletable?M`
              <mwc-icon-button
                icon="delete"
                ?disabled="${i}"
                @click="${this._handleDelete}"
              ></mwc-icon-button>
            `:""}
        ${this.reorder?M`<mwc-icon-button
                icon="arrow_upward"
                ?disabled="${i||e||0===this.selectedIndex}"
                @click="${this._handleUp}"
              ></mwc-icon-button>
              <mwc-icon-button
                icon="arrow_downward"
                ?disabled="${i||e||this.selectedIndex===this.objects.length-1}"
                @click="${this._handleDown}"
              ></mwc-icon-button>`:""}
      </div>
      <grampsjs-search-result-list
        ?activatable="${this.deletable||this.reorder}"
        ?selectable="${this.deletable||this.reorder}"
        @action="${this._handleSelected}"
        .data="${this.objects}"
        .strings="${this.strings}"
      ></grampsjs-search-result-list>
    `}_handleSelected(t){this.selectedIndex=t.detail.index}_handleDelete(){this.objects=[...this.objects].filter(((t,e)=>e!==this.selectedIndex)),this.selectedIndex+1>this.objects.length&&(this.selectedIndex=-1),this._handleChange()}_handleUp(){const t=this.selectedIndex;1===t?this.objects=[this.objects[1],this.objects[0],...this.objects.slice(2)]:t>1&&(this.objects=[...this.objects.slice(0,t-1),this.objects[t],this.objects[t-1],...this.objects.slice(t+1)]),this._handleChange()}_handleDown(){const t=this.objects.length,e=this.selectedIndex;0===e?this.objects=[this.objects[1],this.objects[0],...this.objects.slice(2)]:e<t-1&&(this.objects=[...this.objects.slice(0,e),this.objects[e+1],this.objects[e],...this.objects.slice(e+2)])}_handleChange(){os(this,"object-list:changed",{objects:this.objects})}reset(){this.objects=[]}_handleList(){return this.objects.map((t=>t.handle))}update(t){super.update(t),t.has("objects")&&os(this,"formdata:changed",{data:this._handleList()})}}window.customElements.define("grampsjs-form-object-list",Xm);class Km extends(al(K)){static get styles(){return[nl]}static get properties(){return{objectType:{type:String},objectsInitial:{type:Array},label:{type:String},multiple:{type:Boolean},notDeletable:{type:Boolean},fixedMenuPosition:{type:Boolean}}}constructor(){super(),this.objectType="",this.objectsInitial=[],this.label="",this.multiple=!1,this.notDeletable=!1,this.fixedMenuPosition=!1}render(){return M`
      <p>
        <grampsjs-form-object-list
          @object-list:changed="${this._handleObjectListChanged}"
          .strings="${this.strings}"
          id="${this.id}-list"
          ?reorder="${this.multiple}"
          ?deletable="${!this.notDeletable}"
        ></grampsjs-form-object-list>
      </p>
      <p>
        <grampsjs-form-select-object
          ?fixedMenuPosition="${this.fixedMenuPosition}"
          @select-object:changed="${this._handleSelectObjectsChanged}"
          objectType="${this.objectType}"
          .strings="${this.strings}"
          id="${this.id}-select"
          label="${this.label}"
          ?multiple="${this.multiple}"
        ></grampsjs-form-select-object>
      </p>
    `}firstUpdated(){const t=this.shadowRoot.querySelector("grampsjs-form-object-list"),e=this.shadowRoot.querySelector("grampsjs-form-select-object");this.objectsInitial.length>0&&(t.objects=this.objectsInitial,e.objects=this.objectsInitial,this.objectsInitial.map(((t,e)=>this._fetchObjectIfNeeded(t,e))))}async _fetchObjectIfNeeded(t,e){if(!t.object||!Object.keys(t.object).length){On(`/api/${is[this.objectType]}/${t.handle}?extend=all&profile=all&locale=${this.strings?.__lang__||"en"}`).then((i=>{if("data"in i){const r=this.shadowRoot.querySelector("grampsjs-form-object-list"),n=this.shadowRoot.querySelector("grampsjs-form-select-object"),a=[...r.objects];a[e]={...t,object:i.data},r.objects=[...a],n.objects=[...a]}}))}}_handleSelectObjectsChanged(t){this.shadowRoot.querySelector("grampsjs-form-object-list").objects=t.detail.objects}_handleObjectListChanged(t){this.shadowRoot.querySelector("grampsjs-form-select-object").objects=t.detail.objects}reset(){this.shadowRoot.querySelectorAll("grampsjs-form-object-list, grampsjs-form-select-object").forEach((t=>t.reset()))}}window.customElements.define("grampsjs-form-select-object-list",Km);window.customElements.define("grampsjs-form-noteref",class extends lh{renderForm(){return M`
      <grampsjs-form-select-object-list
        fixedMenuPosition
        style="min-height: 300px;"
        objectType="note"
        .strings="${this.strings}"
        id="note-select"
        label="${this._("Select")}"
        class="edit"
      ></grampsjs-form-select-object-list>
    `}});class Jm extends Su{computeValidity(t){return this.checkboxControl||(this.checkboxControl=document.createElement("input"),this.checkboxControl.type="checkbox"),this.checkboxControl.checked=t.checked,this.checkboxControl.required=t.required,{validity:this.checkboxControl.validity,validationMessage:this.checkboxControl.validationMessage}}equals(t,e){return t.checked===e.checked&&t.required===e.required}copy({checked:t,required:e}){return{checked:t,required:e}}}const Qm=mu(_u(lu($p)));class tf extends Qm{constructor(){super(),this.selected=!1,this.icons=!1,this.showOnlySelectedIcon=!1,this.required=!1,this.value="on",this.addEventListener("click",(t=>{Ju(t)&&this.input&&(this.focus(),Ku(this.input))}))}render(){return dp`
      <div class="switch ${zp(this.getRenderClasses())}">
        <input
          id="switch"
          class="touch"
          type="checkbox"
          role="switch"
          aria-label=${this.ariaLabel||pp}
          ?checked=${this.selected}
          ?disabled=${this.disabled}
          ?required=${this.required}
          @input=${this.handleInput}
          @change=${this.handleChange} />

        <md-focus-ring part="focus-ring" for="switch"></md-focus-ring>
        <span class="track"> ${this.renderHandle()} </span>
      </div>
    `}getRenderClasses(){return{selected:this.selected,unselected:!this.selected,disabled:this.disabled}}renderHandle(){const t={"with-icon":this.showOnlySelectedIcon?this.selected:this.icons};return dp`
      ${this.renderTouchTarget()}
      <span class="handle-container">
        <md-ripple for="switch" ?disabled="${this.disabled}"></md-ripple>
        <span class="handle ${zp(t)}">
          ${this.shouldShowIcons()?this.renderIcons():dp``}
        </span>
      </span>
    `}renderIcons(){return dp`
      <div class="icons">
        ${this.renderOnIcon()}
        ${this.showOnlySelectedIcon?dp``:this.renderOffIcon()}
      </div>
    `}renderOnIcon(){return dp`
      <slot class="icon icon--on" name="on-icon">
        <svg viewBox="0 0 24 24">
          <path
            d="M9.55 18.2 3.65 12.3 5.275 10.675 9.55 14.95 18.725 5.775 20.35 7.4Z" />
        </svg>
      </slot>
    `}renderOffIcon(){return dp`
      <slot class="icon icon--off" name="off-icon">
        <svg viewBox="0 0 24 24">
          <path
            d="M6.4 19.2 4.8 17.6 10.4 12 4.8 6.4 6.4 4.8 12 10.4 17.6 4.8 19.2 6.4 13.6 12 19.2 17.6 17.6 19.2 12 13.6Z" />
        </svg>
      </slot>
    `}renderTouchTarget(){return dp`<span class="touch"></span>`}shouldShowIcons(){return this.icons||this.showOnlySelectedIcon}handleInput(t){const e=t.target;this.selected=e.checked}handleChange(t){au(this,t)}[fu](){return this.selected?this.value:null}[gu](){return String(this.selected)}formResetCallback(){this.selected=this.hasAttribute("selected")}formStateRestoreCallback(t){this.selected="true"===t}[cu](){return new Jm((()=>({checked:this.selected,required:this.required})))}[du](){return this.input}}ru(tf),tf.shadowRootOptions={mode:"open",delegatesFocus:!0},it([jh({type:Boolean})],tf.prototype,"selected",void 0),it([jh({type:Boolean})],tf.prototype,"icons",void 0),it([jh({type:Boolean,attribute:"show-only-selected-icon"})],tf.prototype,"showOnlySelectedIcon",void 0),it([jh({type:Boolean})],tf.prototype,"required",void 0),it([jh()],tf.prototype,"value",void 0),it([Fh("input")],tf.prototype,"input",void 0);const ef=vh`@layer styles, hcm;@layer styles{:host{display:inline-flex;outline:none;vertical-align:top;-webkit-tap-highlight-color:rgba(0,0,0,0);cursor:pointer}:host([disabled]){cursor:default}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--md-switch-track-height, 32px))/2) 0px}md-focus-ring{--md-focus-ring-shape-start-start: var(--md-switch-track-shape-start-start, var(--md-switch-track-shape, var(--md-sys-shape-corner-full, 9999px)));--md-focus-ring-shape-start-end: var(--md-switch-track-shape-start-end, var(--md-switch-track-shape, var(--md-sys-shape-corner-full, 9999px)));--md-focus-ring-shape-end-end: var(--md-switch-track-shape-end-end, var(--md-switch-track-shape, var(--md-sys-shape-corner-full, 9999px)));--md-focus-ring-shape-end-start: var(--md-switch-track-shape-end-start, var(--md-switch-track-shape, var(--md-sys-shape-corner-full, 9999px)))}.switch{align-items:center;display:inline-flex;flex-shrink:0;position:relative;width:var(--md-switch-track-width, 52px);height:var(--md-switch-track-height, 32px);border-start-start-radius:var(--md-switch-track-shape-start-start, var(--md-switch-track-shape, var(--md-sys-shape-corner-full, 9999px)));border-start-end-radius:var(--md-switch-track-shape-start-end, var(--md-switch-track-shape, var(--md-sys-shape-corner-full, 9999px)));border-end-end-radius:var(--md-switch-track-shape-end-end, var(--md-switch-track-shape, var(--md-sys-shape-corner-full, 9999px)));border-end-start-radius:var(--md-switch-track-shape-end-start, var(--md-switch-track-shape, var(--md-sys-shape-corner-full, 9999px)))}input{appearance:none;height:48px;outline:none;margin:0;position:absolute;width:100%;z-index:1;cursor:inherit}:host([touch-target=none]) input{display:none}}@layer styles{.track{position:absolute;width:100%;height:100%;box-sizing:border-box;border-radius:inherit;display:flex;justify-content:center;align-items:center}.track::before{content:"";display:flex;position:absolute;height:100%;width:100%;border-radius:inherit;box-sizing:border-box;transition-property:opacity,background-color;transition-timing-function:linear;transition-duration:67ms}.disabled .track{background-color:rgba(0,0,0,0);border-color:rgba(0,0,0,0)}.disabled .track::before,.disabled .track::after{transition:none;opacity:var(--md-switch-disabled-track-opacity, 0.12)}.disabled .track::before{background-clip:content-box}.selected .track::before{background-color:var(--md-switch-selected-track-color, var(--md-sys-color-primary, #6750a4))}.selected:hover .track::before{background-color:var(--md-switch-selected-hover-track-color, var(--md-sys-color-primary, #6750a4))}.selected:focus-within .track::before{background-color:var(--md-switch-selected-focus-track-color, var(--md-sys-color-primary, #6750a4))}.selected:active .track::before{background-color:var(--md-switch-selected-pressed-track-color, var(--md-sys-color-primary, #6750a4))}.selected.disabled .track{background-clip:border-box}.selected.disabled .track::before{background-color:var(--md-switch-disabled-selected-track-color, var(--md-sys-color-on-surface, #1d1b20))}.unselected .track::before{background-color:var(--md-switch-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));border-color:var(--md-switch-track-outline-color, var(--md-sys-color-outline, #79747e));border-style:solid;border-width:var(--md-switch-track-outline-width, 2px)}.unselected:hover .track::before{background-color:var(--md-switch-hover-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));border-color:var(--md-switch-hover-track-outline-color, var(--md-sys-color-outline, #79747e))}.unselected:focus-visible .track::before{background-color:var(--md-switch-focus-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));border-color:var(--md-switch-focus-track-outline-color, var(--md-sys-color-outline, #79747e))}.unselected:active .track::before{background-color:var(--md-switch-pressed-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));border-color:var(--md-switch-pressed-track-outline-color, var(--md-sys-color-outline, #79747e))}.unselected.disabled .track::before{background-color:var(--md-switch-disabled-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));border-color:var(--md-switch-disabled-track-outline-color, var(--md-sys-color-on-surface, #1d1b20))}}@layer hcm{@media(forced-colors: active){.selected .track::before{background:ButtonText;border-color:ButtonText}.disabled .track::before{border-color:GrayText;opacity:1}.disabled.selected .track::before{background:GrayText}}}@layer styles{.handle-container{display:flex;place-content:center;place-items:center;position:relative;transition:margin 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275)}.selected .handle-container{margin-inline-start:calc(var(--md-switch-track-width, 52px) - var(--md-switch-track-height, 32px))}.unselected .handle-container{margin-inline-end:calc(var(--md-switch-track-width, 52px) - var(--md-switch-track-height, 32px))}.disabled .handle-container{transition:none}.handle{border-start-start-radius:var(--md-switch-handle-shape-start-start, var(--md-switch-handle-shape, var(--md-sys-shape-corner-full, 9999px)));border-start-end-radius:var(--md-switch-handle-shape-start-end, var(--md-switch-handle-shape, var(--md-sys-shape-corner-full, 9999px)));border-end-end-radius:var(--md-switch-handle-shape-end-end, var(--md-switch-handle-shape, var(--md-sys-shape-corner-full, 9999px)));border-end-start-radius:var(--md-switch-handle-shape-end-start, var(--md-switch-handle-shape, var(--md-sys-shape-corner-full, 9999px)));height:var(--md-switch-handle-height, 16px);width:var(--md-switch-handle-width, 16px);transform-origin:center;transition-property:height,width;transition-duration:250ms,250ms;transition-timing-function:cubic-bezier(0.2, 0, 0, 1),cubic-bezier(0.2, 0, 0, 1);z-index:0}.handle::before{content:"";display:flex;inset:0;position:absolute;border-radius:inherit;box-sizing:border-box;transition:background-color 67ms linear}.disabled .handle,.disabled .handle::before{transition:none}.selected .handle{height:var(--md-switch-selected-handle-height, 24px);width:var(--md-switch-selected-handle-width, 24px)}.handle.with-icon{height:var(--md-switch-with-icon-handle-height, 24px);width:var(--md-switch-with-icon-handle-width, 24px)}.selected:not(.disabled):active .handle,.unselected:not(.disabled):active .handle{height:var(--md-switch-pressed-handle-height, 28px);width:var(--md-switch-pressed-handle-width, 28px);transition-timing-function:linear;transition-duration:100ms}.selected .handle::before{background-color:var(--md-switch-selected-handle-color, var(--md-sys-color-on-primary, #fff))}.selected:hover .handle::before{background-color:var(--md-switch-selected-hover-handle-color, var(--md-sys-color-primary-container, #eaddff))}.selected:focus-within .handle::before{background-color:var(--md-switch-selected-focus-handle-color, var(--md-sys-color-primary-container, #eaddff))}.selected:active .handle::before{background-color:var(--md-switch-selected-pressed-handle-color, var(--md-sys-color-primary-container, #eaddff))}.selected.disabled .handle::before{background-color:var(--md-switch-disabled-selected-handle-color, var(--md-sys-color-surface, #fef7ff));opacity:var(--md-switch-disabled-selected-handle-opacity, 1)}.unselected .handle::before{background-color:var(--md-switch-handle-color, var(--md-sys-color-outline, #79747e))}.unselected:hover .handle::before{background-color:var(--md-switch-hover-handle-color, var(--md-sys-color-on-surface-variant, #49454f))}.unselected:focus-within .handle::before{background-color:var(--md-switch-focus-handle-color, var(--md-sys-color-on-surface-variant, #49454f))}.unselected:active .handle::before{background-color:var(--md-switch-pressed-handle-color, var(--md-sys-color-on-surface-variant, #49454f))}.unselected.disabled .handle::before{background-color:var(--md-switch-disabled-handle-color, var(--md-sys-color-on-surface, #1d1b20));opacity:var(--md-switch-disabled-handle-opacity, 0.38)}md-ripple{border-radius:var(--md-switch-state-layer-shape, var(--md-sys-shape-corner-full, 9999px));height:var(--md-switch-state-layer-size, 40px);inset:unset;width:var(--md-switch-state-layer-size, 40px)}.selected md-ripple{--md-ripple-hover-color: var(--md-switch-selected-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--md-ripple-pressed-color: var(--md-switch-selected-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--md-ripple-hover-opacity: var(--md-switch-selected-hover-state-layer-opacity, 0.08);--md-ripple-pressed-opacity: var(--md-switch-selected-pressed-state-layer-opacity, 0.12)}.unselected md-ripple{--md-ripple-hover-color: var(--md-switch-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-pressed-color: var(--md-switch-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-hover-opacity: var(--md-switch-hover-state-layer-opacity, 0.08);--md-ripple-pressed-opacity: var(--md-switch-pressed-state-layer-opacity, 0.12)}}@layer hcm{@media(forced-colors: active){.unselected .handle::before{background:ButtonText}.disabled .handle::before{opacity:1}.disabled.unselected .handle::before{background:GrayText}}}@layer styles{.icons{position:relative;height:100%;width:100%}.icon{position:absolute;inset:0;margin:auto;display:flex;align-items:center;justify-content:center;fill:currentColor;transition:fill 67ms linear,opacity 33ms linear,transform 167ms cubic-bezier(0.2, 0, 0, 1);opacity:0}.disabled .icon{transition:none}.selected .icon--on,.unselected .icon--off{opacity:1}.unselected .handle:not(.with-icon) .icon--on{transform:rotate(-45deg)}.icon--off{width:var(--md-switch-icon-size, 16px);height:var(--md-switch-icon-size, 16px);color:var(--md-switch-icon-color, var(--md-sys-color-surface-container-highest, #e6e0e9))}.unselected:hover .icon--off{color:var(--md-switch-hover-icon-color, var(--md-sys-color-surface-container-highest, #e6e0e9))}.unselected:focus-within .icon--off{color:var(--md-switch-focus-icon-color, var(--md-sys-color-surface-container-highest, #e6e0e9))}.unselected:active .icon--off{color:var(--md-switch-pressed-icon-color, var(--md-sys-color-surface-container-highest, #e6e0e9))}.unselected.disabled .icon--off{color:var(--md-switch-disabled-icon-color, var(--md-sys-color-surface-container-highest, #e6e0e9));opacity:var(--md-switch-disabled-icon-opacity, 0.38)}.icon--on{width:var(--md-switch-selected-icon-size, 16px);height:var(--md-switch-selected-icon-size, 16px);color:var(--md-switch-selected-icon-color, var(--md-sys-color-on-primary-container, #21005d))}.selected:hover .icon--on{color:var(--md-switch-selected-hover-icon-color, var(--md-sys-color-on-primary-container, #21005d))}.selected:focus-within .icon--on{color:var(--md-switch-selected-focus-icon-color, var(--md-sys-color-on-primary-container, #21005d))}.selected:active .icon--on{color:var(--md-switch-selected-pressed-icon-color, var(--md-sys-color-on-primary-container, #21005d))}.selected.disabled .icon--on{color:var(--md-switch-disabled-selected-icon-color, var(--md-sys-color-on-surface, #1d1b20));opacity:var(--md-switch-disabled-selected-icon-opacity, 0.38)}}@layer hcm{@media(forced-colors: active){.icon--off{fill:Canvas}.icon--on{fill:ButtonText}.disabled.unselected .icon--off,.disabled.selected .icon--on{opacity:1}.disabled .icon--on{fill:GrayText}}}
`;let rf=class extends tf{};rf.styles=[ef],rf=it([ph("md-switch")],rf);class nf extends(al(K)){static get styles(){return[nl,n``]}static get properties(){return{checked:{type:Boolean},disabled:{type:Boolean}}}constructor(){super(),this.checked=!1,this.disabled=!1}render(){return M`
      <label>
        ${this._("Private")}
        <md-switch
          icons
          @change="${this.handleChange}"
          ?selected="${this.checked}"
          ?disabled="${this.disabled}"
        >
          <svg viewBox="0 0 24 24" slot="on-icon">
            <path d="${"M12,17A2,2 0 0,0 14,15C14,13.89 13.1,13 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V10C4,8.89 4.9,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z"}" />
          </svg>
          <svg viewBox="0 0 24 24" slot="off-icon">
            <path d="${"M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V10A2,2 0 0,1 6,8H15V6A3,3 0 0,0 12,3A3,3 0 0,0 9,6H7A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,17A2,2 0 0,0 14,15A2,2 0 0,0 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17Z"}" />
          </svg>
        </md-switch>
      </label>
    `}reset(){this.checked=!1}handleChange(t){this.checked=t.target.selected,this.dispatchEvent(new CustomEvent("formdata:changed",{bubbles:!0,composed:!0,detail:{checked:this.checked}}))}}function af(t){return!!["bold","italic","underline","superscript"].includes(t)}function sf(t,e){let i=`${t}`;return e.forEach((t=>{i=function(t,e){const[i,r]=e;return"bold"===i?`<b>${t}</b>`:"italic"===i?`<i>${t}</i>`:"underline"===i?`<u>${t}</u>`:"fontface"===i?`<span style="font-family:${r}">${t}</span>`:"fontsize"===i?`<span style="font-size:${r}px;">${t}</span>`:"fontcolor"===i?`<span style="color:${r}">${t}</span>`:"highlight"===i?`<span style="background-color:${r}">${t}</span>`:"superscript"===i?`<sup>${t}</sup>`:"link"===i?`<a href="${r}">${t}</a>`:`[${i} ${r}]${t}[/${i}]`}(i,t)})),i}function of(t,e){let i=0,r=!1;return e.childNodes.forEach((e=>{if(e===t&&(r=!0),!r)if(e.hasChildNodes()){const[n,a]=of(t,e);i+=n,r=a}else e.nodeType!==Node.COMMENT_NODE&&(i+=e.textContent.length)})),[i,r]}function lf(t,e){let i=0,r=!1,n=null;return t.childNodes.forEach((t=>{r||t.nodeType!==Node.COMMENT_NODE&&(i+=t.textContent.length,i>=e&&(r=!0,n=t))})),null!==n&&n.hasChildNodes()?lf(n,e-(i-n.textContent.length)):n}window.customElements.define("grampsjs-form-private",nf);class cf extends(al(K)){static get styles(){return[nl,n`
        .note {
          font-family: var(
            --grampsjs-note-font-family,
            var(--grampsjs-body-font-family)
          );
          font-size: var(--grampsjs-note-font-size, 17px);
          line-height: var(--grampsjs-note-line-height, 1.5em);
          color: var(--grampsjs-note-color, #000000);
          white-space: pre-wrap;
        }

        .framed {
          border: 1px solid var(--mdc-theme-secondary);
          border-radius: 8px;
          padding: 20px 25px;
        }

        mwc-icon-button {
          color: rgba(0, 0, 0, 0.5);
        }

        #controls {
          margin: 0.7em 0;
        }

        a {
          pointer-events: none;
        }
      `]}static get properties(){return{data:{type:Object},cursorPosition:{type:Array},_dialogContent:{type:String},_html:{type:String}}}constructor(){super(),this.data={_class:"StyledText",string:"",tags:[]},this.cursorPosition=[0],this._dialogContent="",this._html=""}reset(){this.data={_class:"StyledText",string:"",tags:[]},this.cursorPosition=[0]}render(){return M`
      <div id="controls">
        <mwc-icon-button
          id="btn-bold"
          icon="format_bold"
          @click="${()=>this._handleFormat("bold")}"
        ></mwc-icon-button>
        <grampsjs-tooltip for="btn-bold" .strings="${this.strings}"
          >${this._("Bold")}</grampsjs-tooltip
        >
        <mwc-icon-button
          id="btn-italic"
          icon="format_italic"
          @click="${()=>this._handleFormat("italic")}"
        ></mwc-icon-button>
        <grampsjs-tooltip for="btn-italic" .strings="${this.strings}"
          >${this._("Italic")}</grampsjs-tooltip
        >
        <mwc-icon-button
          id="btn-underline"
          icon="format_underlined"
          @click="${()=>this._handleFormat("underline")}"
        ></mwc-icon-button>
        <grampsjs-tooltip for="btn-underline" .strings="${this.strings}"
          >${this._("Underline")}</grampsjs-tooltip
        >
        <mwc-icon-button
          id="btn-link"
          icon="link"
          @click="${()=>this._handleFormat("link")}"
        ></mwc-icon-button>
        <grampsjs-tooltip for="btn-link" .strings="${this.strings}"
          >${this._("Link")}</grampsjs-tooltip
        >
      </div>
      <!-- display: inline -->
      <div
        id="editor-content"
        class="note framed"
        contenteditable="true"
        @beforeinput="${this._handleBeforeInput}"
        @compositionend="${this._handleCompositionEnd}"
        .innerHTML="${Ai(this._html)}"
      ></div>
      ${this._renderLinkDialog()}
    `}get _editorDiv(){return this.renderRoot.getElementById("editor-content")}_handleBeforeInput(t){if(t.preventDefault(),t.stopPropagation(),["insertText","insertParagraph","insertLineBreak","deleteContentBackward","deleteContentForward","insertFromPaste","deleteByCut","formatBold","formatItalic","formatUnderline"].includes(t.inputType)){const i=this.shadowRoot.querySelector("div.note"),[r]=t.getTargetRanges(),n=of(r.startContainer,i)[0];if("insertText"===t.inputType){if(r.startOffset!==r.endOffset){const t=of(r.endContainer,i)[0];this._deleteText(n+r.startOffset,t+r.endOffset),this.cursorPosition=[n+r.startOffset]}this._insertText(t.data,n+r.startOffset),this.cursorPosition=[n+r.startOffset+t.data.length]}if("insertFromPaste"===t.inputType){const i=(e=t.dataTransfer.getData("text/plain"),(new DOMParser).parseFromString(e,"text/html").body.textContent||"");this._insertText(i,n+r.startOffset),this.cursorPosition=[n+r.startOffset+i.length]}else if("insertParagraph"===t.inputType)this._insertText("\n\n",n+r.startOffset),this.cursorPosition=[n+r.startOffset+2];else if("insertLineBreak"===t.inputType)this._insertText("\n",n+r.startOffset),this.cursorPosition=[n+r.startOffset+1];else if(["deleteContentBackward","deleteContentForward","deleteByCut"].includes(t.inputType)){const t=of(r.endContainer,i)[0];this._deleteText(n+r.startOffset,t+r.endOffset),this.cursorPosition=[n+r.startOffset]}else"formatBold"===t.inputType?this._handleFormat("bold"):"formatItalic"===t.inputType?this._handleFormat("italic"):"formatUnderline"===t.inputType&&this._handleFormat("underline")}else console.log(t);var e;this.handleChange()}_handleCompositionEnd(t){t.preventDefault(),t.stopPropagation();const e=this.shadowRoot.getSelection?this.shadowRoot.getSelection().getRangeAt(0):document.getSelection().getRangeAt(0),i=of(e.startContainer,this._editorDiv)[0];this._insertText(t.data,i+e.startOffset),this.cursorPosition=[i+e.startOffset]}_handleLink(t){this._dialogContent=M`
      <p>
        <mwc-textfield
          id="linkurl"
          label="URL"
          style="width:100%"
        ></mwc-textfield>
      </p>
      <p>
        <grampsjs-form-select-object
          fixedMenuPosition
          @select-object:changed="${this._handleSelectObjectsChanged}"
          .strings="${this.strings}"
          id="link-select"
          label="${this._("Select")}"
        ></grampsjs-form-select-object>
      </p>

      <mwc-button
        slot="primaryAction"
        dialogAction="ok"
        @click="${()=>this._handleDialogSave(t)}"
      >
        ${this._("_Save")}
      </mwc-button>
      <mwc-button
        slot="secondaryAction"
        dialogAction="cancel"
        @click="${this._handleDialogCancel}"
      >
        ${this._("Cancel")}
      </mwc-button>
    `,this._openDialog()}_handleSelectObjectsChanged(t){const e=this.shadowRoot.querySelector("#linkurl");if(null===e)return;const[i]=t.detail.objects;var r;i.handle&&(e.value=`gramps://${r=i.object_type,`${r.charAt(0).toUpperCase()}${r.slice(1)}`}/handle/${i.handle}`)}_handleDialogSave(t){const e=this.shadowRoot.querySelector("#linkurl");if(null===e)return;const{value:i}=e;i&&(this._removeTag("link",t),this._insertTag("link",t,i),this.handleChange()),this._dialogContent=""}_handleDialogCancel(){this._dialogContent=""}_renderLinkDialog(){return M` <mwc-dialog> ${this._dialogContent} </mwc-dialog> `}_openDialog(){const t=this.shadowRoot.querySelector("mwc-dialog");null!==t&&(t.open=!0)}_handleFormat(t){const e=this.shadowRoot.querySelector("div.note"),i=this.shadowRoot.getSelection?this.shadowRoot.getSelection().getRangeAt(0):document.getSelection().getRangeAt(0),r=of(i.startContainer,e)[0],n=of(i.endContainer,e)[0],a=[r+i.startOffset,n+i.endOffset];af(t)?this._hasTag(t,a)?this._removeTag(t,a):this._insertTag(t,a):"link"===t&&(this._hasTag(t,a)?this._removeTag(t,a):this._handleLink(a)),this.cursorPosition=a,this.handleChange()}handleChange(){os(this,"formdata:changed",{data:this.data})}_insertTag(t,e,i=null){this.data={...this.data,tags:this._cleanTags([...this.data.tags,{name:t,ranges:[e],value:i}])}}_hasTag(t,e){const i=this._cleanTags(this.data.tags).filter((e=>e.name===t));if(void 0===i||0===i.length)return!1;const r=[].concat.apply([],i.map((t=>t.ranges||[]))).sort(((t,e)=>t[0]-e[0]));let n=0;for(let t=0;t<r.length;t+=1)if(r[t][1]<=e[0]);else if(n+=Math.max(0,Math.min(r[t][1],e[1])-Math.max(r[t][0],e[0])),r[t][0]>=e[1])break;return n===e[1]-e[0]}_removeTag(t,e){e[1]<=e[0]||(this.data={...this.data,tags:this._cleanTags([...this.data.tags.filter((e=>e.name!==t)),...this.data.tags.filter((e=>e.name===t)).map((t=>({...t,ranges:t.ranges.reduce(((t,i)=>i[0]>=e[1]||i[1]<=e[0]?[...t,i]:i[0]>=e[0]&&i[1]<=e[1]?t:i[0]<e[0]&&i[1]>e[1]?[...t,[i[0],e[0]],[e[1],i[1]]]:i[0]>=e[0]?[...t,[e[1],i[1]]]:i[1]<=e[1]?[...t,[i[0],e[0]]]:t),[])})))])})}_cleanTags(t){let e=[];return[...new Set(t.map((t=>t.name)))].forEach((i=>{const r=t.filter((t=>t.name===i));e=af(i)?[...e,...this._cleanTagsBool(r)]:[...e,...this._cleanTagsNonBool(r)]})),e}_cleanTagsBool(t){if(0===t.length)return[];const{name:e}=t[0],i=t.reduce(((t,e)=>[...t,...e.ranges]),[]).sort(((t,e)=>t[0]-e[0])).filter((t=>t[1]>t[0])).reduce(((t,e)=>{const i=t.length;if(i>0&&e[0]<=t[i-1][1]){const r=[t[i-1][0],Math.max(e[1],t[i-1][1])];return[...t.slice(0,-1),r]}return[...t,e]}),[]);return[{name:e,ranges:i,value:null}]}_cleanTagsNonBool(t){return 0===t.length?[]:t.map((t=>({...t,ranges:t.ranges.filter((t=>t[0]<t[1]))}))).filter((t=>t.ranges.length>0))}_insertText(t,e){this.data={...this.data,string:this.data.string.slice(0,e)+t+this.data.string.slice(e),tags:this._cleanTags(this.data.tags.map((i=>({...i,ranges:i.ranges.map((i=>i.map((i=>i<e?i:i+t.length))))}))))}}_deleteText(t,e){const i=e-t;i<=0||(this.data={...this.data,string:this.data.string.slice(0,t)+this.data.string.slice(e),tags:this._cleanTags(this.data.tags.map((r=>({...r,ranges:r.ranges.map((r=>r.map((r=>r<t?r:r>e?r-i:t))))}))))})}updated(t){t.has("data")&&(this._html=this._getHtml());const e=this.shadowRoot.querySelector("div.note"),i=lf(e,this.cursorPosition[0]);if(null!==i){const t=of(i,e)[0];if(1===this.cursorPosition.length)this._setCursor(i,this.cursorPosition[0]-t);else{const r=lf(e,this.cursorPosition[1]);if(null!==r){const n=of(r,e)[0];this._setSelection(i,this.cursorPosition[0]-t,r,this.cursorPosition[1]-n)}}}}_setCursor(t,e){document.getSelection().collapse(t,e)}_setSelection(t,e,i,r){const n=window.getSelection();n.rangeCount>0&&n.removeAllRanges();const a=document.createRange();a.setStart(t,e),a.setEnd(i,r),n.addRange(a)}_getTagArray(){const t=this.data.tags||[],e=[];return t.forEach((t=>{t.ranges.forEach((i=>{e.push([i[0],"start",t.name,t.value]),e.push([i[1],"end",t.name,t.value])}))})),e.sort(((t,e)=>t[0]-e[0])),e}_getHtml(){let t="";const e=this._getTagArray();let i=[],r=0;return e.forEach((e=>{const[n,a,s,o]=e;t=`${t}${n>r?sf(this.data.string.slice(r,n),i):""}`,"start"===a?i.push([s,o]):i=i.filter((t=>t[0]!==s)),r=n})),t=`${t}${sf(this.data.string.slice(r),i)}`,t}_handleSaveButton(){os(this,"edit:action",{action:"updateProp",data:{text:this.data}}),os(this,"edit-mode:off")}connectedCallback(){super.connectedCallback(),window.addEventListener("edit-mode:save",this._handleSaveButton.bind(this))}disconnectedCallback(){window.removeEventListener("edit-mode:save",this._handleSaveButton.bind(this)),super.disconnectedCallback()}}window.customElements.define("grampsjs-editor",cf);const df=t=>class extends t{renderForm(){return M`
        <p>
          <grampsjs-editor
            @formdata:changed="${this.handleEditor}"
            @keydown="${t=>t.stopImmediatePropagation()}"
            id="note-editor"
          ></grampsjs-editor>
        </p>

        <grampsjs-form-select-type
          id="select-note-type"
          .strings="${this.strings}"
          ?loadingTypes="${this.loadingTypes}"
          typeName="note_types"
          defaultTypeName="General"
          .types="${this.types}"
          .typesLocale="${this.typesLocale}"
        >
        </grampsjs-form-select-type>

        <div class="spacer"></div>
        <grampsjs-form-private
          id="private"
          .strings="${this.strings}"
        ></grampsjs-form-private>
      `}};class hf extends(df(lh)){static get styles(){return[super.styles,n`
        mwc-dialog {
          --mdc-dialog-max-width: min(1200px, 95vw);
          --mdc-dialog-min-width: min(1200px, 95vw);
          --mdc-dialog-max-height: 95vh;
        }
      `]}constructor(){super(),this.data={_class:"Note",text:{_class:"StyledText",string:""}}}checkFormValidity(){const t=this.shadowRoot.querySelector("grampsjs-editor");this.isFormValid=""!==t.data.string.trim()}handleEditor(t){this.checkFormValidity(),this.data={...this.data,text:t.detail.data}}_handleFormData(t){this.checkFormValidity();const e=t.composedPath()[0];"select-note-type"===e.id&&(this.data={...this.data,type:{_class:"NoteType",string:t.detail.data}}),"private"===e.id&&(this.data={...this.data,private:t.detail.checked})}}window.customElements.define("grampsjs-form-new-note",hf);window.customElements.define("grampsjs-view-object-notes",class extends Zm{static get styles(){return[super.styles,n`
        :host {
          margin: 0;
        }

        mwc-button {
          margin-top: 1em;
          margin-bottom: 2em;
        }
      `]}getUrl(){if(0===this.grampsIds.length)return"";const t={function:"or",rules:this.grampsIds.map((t=>({name:"HasIdOf",values:[t]})))},e={link_format:"/{obj_class}/{gramps_id}"};return`/api/notes/?locale=${this.strings?.__lang__||"en"}&profile=all&extend=all&formats=html&rules=${encodeURIComponent(JSON.stringify(t))}&format_options=${encodeURIComponent(JSON.stringify(e))}`}renderElements(){return M` ${this._data.map((t=>this.renderNote(t)))} `}renderEdit(){return M`
      <div>
        <mwc-icon-button
          class="edit"
          icon="add_link"
          @click="${this._handleShareClick}"
        ></mwc-icon-button>
        <mwc-icon-button
          class="edit"
          icon="add"
          @click="${this._handleAddClick}"
        ></mwc-icon-button>
        ${this.dialogContent}
      </div>
    `}_handleAddClick(){this.dialogContent=M`
      <grampsjs-form-new-note
        @object:save="${this._handleNewNoteSave}"
        @object:cancel="${this._handleNoteCancel}"
        .strings="${this.strings}"
        dialogTitle="${this._("Create and add a new note")}"
      >
      </grampsjs-form-new-note>
    `}_handleShareClick(){this.dialogContent=M`
      <grampsjs-form-noteref
        new
        @object:save="${this._handleNoteRefSave}"
        @object:cancel="${this._handleNoteCancel}"
        .strings="${this.strings}"
        objType="${this.objType}"
        dialogTitle=${this._("Select an existing note")}
      >
      </grampsjs-form-noteref>
    `}renderNote(t){return M`
      <grampsjs-note-content
        framed
        grampsId="${t.gramps_id}"
        content="${t?.formatted?.html||t?.text?.string}"
      ></grampsjs-note-content>

      ${this.edit?M`
            <mwc-icon-button
              class="edit"
              icon="delete"
              @click="${()=>this._handleNoteRefDel(t.handle)}"
            ></mwc-icon-button>
          `:M`<mwc-button
            outlined
            label="${this._("Details")}"
            @click="${()=>this._handleButtonClick(t.gramps_id)}"
          >
          </mwc-button>`}
    `}_handleNoteRefDel(t){os(this,"edit:action",{action:"delNoteRef",handle:t})}_handleNewNoteSave(t){os(this,"edit:action",{action:"newNote",data:{handle:ls(),...t.detail.data}}),t.preventDefault(),t.stopPropagation(),this.dialogContent=""}_handleNoteRefSave(t){os(this,"edit:action",{action:"addNoteRef",...t.detail}),t.preventDefault(),t.stopPropagation(),this.dialogContent=""}_handleNoteCancel(){this.dialogContent=""}_handleButtonClick(t){this.dispatchEvent(new CustomEvent("nav",{bubbles:!0,composed:!0,detail:{path:`note/${t}`}}))}});class pf extends(al(K)){static get styles(){return[nl,n`
        mwc-list,
        mwc-list > * {
          --mdc-ripple-color: transparent;
        }

        mwc-list > * {
          transition: background-color 0.1s, color 0.1s;
        }

        mwc-list[activatable] [selected] {
          background-color: rgba(2, 119, 189, 0.5);
        }

        mwc-list[activatable] [mwc-list-item]:not([selected]):hover,
        mwc-list[activatable] [mwc-list-item]:not([selected]):focus {
          background-color: rgba(2, 119, 189, 0.1);
        }

        mwc-list[activatable] [mwc-list-item]:not([selected]):active {
          background-color: rgba(2, 119, 189, 0.2);
        }

        mwc-list[activatable] [mwc-list-item][selected]:hover,
        mwc-list[activatable] [mwc-list-item][selected]:focus {
          background-color: rgba(2, 119, 189, 0.4);
          color: rgba(0, 0, 0, 0.9);
        }

        mwc-list[activatable] [mwc-list-item][selected]:active {
          background-color: rgba(2, 119, 189, 0.3);
        }

        mwc-icon-button {
          --mdc-theme-text-disabled-on-light: rgba(0, 0, 0, 0.25);
        }

        mwc-icon {
          background-color: rgba(0, 0, 0, 0.25);
          color: white;
        }

        mwc-icon.placeholder {
          width: 40px;
          height: 40px;
          line-height: 40px;
          border-radius: 50%;
        }
      `]}static get properties(){return{data:{type:Array},edit:{type:Boolean},objType:{type:String},dialogContent:{type:String},dialogTitle:{type:String},hasAdd:{type:Boolean},hasShare:{type:Boolean},hasEdit:{type:Boolean},hasReorder:{type:Boolean},_selectedIndex:{type:Number}}}constructor(){super(),this.data=[],this.edit=!1,this.objType="",this.dialogContent="",this.dialogTitle="",this.hasAdd=!0,this.hasShare=!1,this.hasEdit=!1,this.hasReorder=!1,this._selectedIndex=-1}render(){return M`
      ${0!==Object.keys(this.data).length||this.edit?M`
            ${this.edit?this._renderActionBtns():""}
            <mwc-list
              ?activatable="${this.edit}"
              @action="${this._handleSelected}"
            >
              ${this.sortData([...this.data]).map(((t,e,i)=>this.row(t,e,i)))}
            </mwc-list>
          `:""}
      ${this.dialogContent}
    `}_handleSelected(t){this._selectedIndex=t.detail.index}sortData(t){return t}row(t,e,i){return""}_renderActionBtns(){return M`
      ${this.hasShare?M`
            <mwc-icon-button
              class="edit"
              icon="add_link"
              @click="${this._handleShare}"
            ></mwc-icon-button>
          `:""}
      ${this.hasAdd?M`
            <mwc-icon-button
              class="edit"
              icon="add"
              @click="${this._handleAdd}"
            ></mwc-icon-button>
          `:""}
      ${this.hasEdit?M`
            <mwc-icon-button
              ?disabled="${-1===this._selectedIndex}"
              class="edit"
              icon="edit"
              @click="${this._handleEdit}"
            ></mwc-icon-button>
          `:""}
      ${this.hasReorder?M`
            <mwc-icon-button
              ?disabled="${-1===this._selectedIndex||0===this._selectedIndex}"
              class="edit"
              icon="arrow_upward"
              @click="${this._handleUp}"
            ></mwc-icon-button>
            <mwc-icon-button
              ?disabled="${-1===this._selectedIndex||this._selectedIndex===this.data.length-1}"
              class="edit"
              icon="arrow_downward"
              @click="${this._handleDown}"
            ></mwc-icon-button>
          `:""}
      <mwc-icon-button
        ?disabled="${-1===this._selectedIndex}"
        class="edit"
        icon="delete"
        @click="${this._handleDelete}"
      ></mwc-icon-button>
    `}updated(t){t.has("edit")&&(this._selectedIndex=-1,this.dialogContent="")}_handleActionClick(t,e,i){os(this,"edit:action",{action:e,handle:i}),t.preventDefault(),t.stopPropagation()}}window.customElements.define("grampsjs-form-citation",class extends lh{renderForm(){return M`
      <grampsjs-form-select-object-list
        notDeletable
        fixedMenuPosition
        style="min-height: 300px;"
        objectType="citation"
        .strings="${this.strings}"
        id="citation-select"
        label="${this._("Select")}"
        class="edit"
      ></grampsjs-form-select-object-list>
    `}});const uf={0:"Very Low",1:"Low",2:"Normal",3:"High",4:"Very High"};window.customElements.define("grampsjs-form-new-citation",class extends lh{constructor(){super(),this.data={_class:"Citation",confidence:2}}renderForm(){return M`
      <h4 class="label">${this._("Source")}</h4>
      <grampsjs-form-select-object-list
        fixedMenuPosition
        style="min-height: 300px;"
        id="source"
        objectType="source"
        .strings="${this.strings}"
      ></grampsjs-form-select-object-list>

      <h4 class="label">${this._("Page")}</h4>
      <p>
        <grampsjs-form-string fullwidth id="page"></grampsjs-form-string>
      </p>

      <h4 class="label">${this._("Date")}</h4>
      <p>
        <grampsjs-form-select-date id="date" .strings="${this.strings}">
        </grampsjs-form-select-date>
      </p>

      <h4 class="label">${this._("Confidence")}</h4>
      <mwc-select id="select-confidence" @change="${this.handleConfidence}">
        ${Object.keys(uf).map((t=>M`
            <mwc-list-item
              value="${t}"
              ?selected="${t==this.data.confidence}"
              >${this._(uf[t])}</mwc-list-item
            >
          `))}
      </mwc-select>

      <div class="spacer"></div>
      <grampsjs-form-private
        id="private"
        .strings="${this.strings}"
      ></grampsjs-form-private>
    `}handleConfidence(t){this.data={...this.data,confidence:parseInt(t.target.value,10)}}get isValid(){return!!this.data.source_handle&&this._areDateSelectValid()}});window.customElements.define("grampsjs-source-citations",class extends pf{constructor(){super(),this.objType="Citation"}row(t){return M`
      <mwc-list-item
        twoline
        graphic="avatar"
        ?hasMeta="${this.edit}"
        @click="${()=>this._handleClick(t.gramps_id)}"
      >
        ${t?.profile?.source?.title||this._("Source")}
        <span slot="secondary"> ${t.page||t.gramps_id} </span>
        ${fs({object:t,object_type:"citation"})}
      </mwc-list-item>
    `}_handleClick(t){this.edit||t===this.grampsId||this.dispatchEvent(new CustomEvent("nav",{bubbles:!0,composed:!0,detail:{path:this._getItemPath(t)}}))}_getItemPath(t){return`citation/${t}`}_handleAdd(){this.dialogContent=M`
      <grampsjs-form-new-citation
        new
        @object:save="${this._handleCitSave}"
        @object:cancel="${this._handleCitCancel}"
        .strings="${this.strings}"
        dialogTitle=${this._("New Citation")}
      >
      </grampsjs-form-new-citation>
    `}_handleShare(){this.dialogContent=M`
      <grampsjs-form-citation
        new
        @object:save="${this._handleShareCitSave}"
        @object:cancel="${this._handleCitCancel}"
        .strings="${this.strings}"
        dialogTitle=${this._("Select an existing citation")}
      >
      </grampsjs-form-citation>
    `}_handleCitSave(t){os(this,"edit:action",{action:"newCitation",data:{handle:ls(),...t.detail.data}}),t.preventDefault(),t.stopPropagation(),this.dialogContent=""}_handleShareCitSave(t){os(this,"edit:action",{action:"addCitation",data:t.detail.data}),t.preventDefault(),t.stopPropagation(),this.dialogContent=""}_handleDelete(t){os(this,"edit:action",{action:"delCitation",index:this._selectedIndex}),t.preventDefault(),t.stopPropagation()}_handleCitCancel(){this.dialogContent=""}});var mf,ff;window.customElements.define("grampsjs-view-source-citations",class extends Zm{static get styles(){return[super.styles,n`
        :host {
          margin: 0;
        }
      `]}getUrl(){const t={function:"or",rules:this.grampsIds.map((t=>({name:"HasIdOf",values:[t]})))};return`/api/citations/?locale=${this.strings?.__lang__||"en"}&profile=all&extend=all&rules=${encodeURIComponent(JSON.stringify(t))}`}renderElements(){return M`
      <grampsjs-source-citations
        hasShare
        .data="${this._data}"
        ?edit="${this.edit}"
        .strings="${this.strings}"
      >
      </grampsjs-source-citations>
      <link rel="stylesheet" href="leaflet.css" />
      <link rel="stylesheet" href="L.Control.Locate.min.css" />

      <div
        class="mapcontainer"
        style="width:${this.width}; height:${this.height};"
      >
        <div id="${this.mapid}" style="z-index: 0; width: 100%; height: 100%;">
          <slot> </slot>
        </div>
      </div>
    `}static get styles(){return[]}static get properties(){return{height:{type:String},width:{type:String},latitude:{type:Number},longitude:{type:Number},year:{type:Number},mapid:{type:String},zoom:{type:Number},latMin:{type:Number},latMax:{type:Number},longMin:{type:Number},longMax:{type:Number},layerSwitcher:{type:Boolean},locateControl:{type:Boolean},_map:{type:Object},_glMap:{type:Object},_layercontrol:{type:Object},_currentLayer:{type:String}}}constructor(){super(),this.height="500px",this.width="100%",this.zoom=13,this.mapid="mapid",this.latitude=0,this.longitude=0,this.year=-1,this.latMin=0,this.latMax=0,this.longMin=0,this.longMax=0,this.layerSwitcher=!1,this._currentLayer="OpenStreetMap"}firstUpdated(){const t=this.shadowRoot.getElementById(this.mapid);0===this.latMin&&0===this.latMax?this._map=new Ey.Map(t,{zoomControl:!1}).setView([this.latitude,this.longitude],this.zoom):this._map=new Ey.Map(t,{zoomControl:!1}).fitBounds([[this.latMin,this.longMin],[this.latMax,this.longMax]]);const e={...$y,...window.grampsjsConfig},i=new Ey.TileLayer(e.leafletTileUrl,{attribution:e.leafletTileAttribution,tileSize:e.leafletTileSize,zoomOffset:e.leafletZoomOffset,maxZoom:19,zoomControl:!1});i.addTo(this._map),this._gl=Ey.maplibreGL({style:e.glStyle,attribution:e.glAttribution}),this._map.addControl(Ey.control.zoom({position:"bottomright"})),this.locateControl&&this._map.addControl(Ey.control.locate({position:"bottomright",drawCircle:!1})),this._layercontrol=Ey.control.layers({OpenHistoricalMap:this._gl,OpenStreetMap:i},null,{position:"bottomleft"}),this.layerSwitcher&&this._map.addControl(this._layercontrol),this._map.on("baselayerchange",(t=>this._handleBaseLayerChange(t))),this._map.invalidateSize(!1),this._map.on("moveend",(t=>this._handleMoveEnd(t)))}_handleBaseLayerChange(t){if(this._currentLayer=t.name,"OpenHistoricalMap"===this._currentLayer){const t=this._gl.getMaplibreMap();t.on("styledata",(()=>t.filterByDate(`${this.year}`)))}os(this,"map:layerchange",{layer:this._currentLayer})}_handleMoveEnd(t){os(this,"map:moveend",{bounds:t.target.getBounds()})}panTo(t,e){void 0!==this._map&&this._map.panTo(new Ey.latLng(t,e))}updated(t){t.has("year")&&this.year>0&&"OpenHistoricalMap"===this._currentLayer?this._gl.getMaplibreMap().filterByDate(`${this.year}`):void 0!==this._map&&(t.has("latitude")||t.has("longitude")||t.has("mapid")||t.has("zoom"))&&(0===this.latMin&&0===this.latMax?(this._map.setZoom(this.zoom),this._map.panTo(new Ey.latLng(this.latitude,this.longitude))):this._map.fitBounds([[this.latMin,this.longMin],[this.latMax,this.longMax]]),this._map.invalidateSize(!1))}});class Ay extends(al(K)){static get styles(){return[nl,n`
        .timeline-event {
          padding: 0.8em;
          display: grid;
          grid-gap: 15px;
          grid-template-columns: 150px minmax(150px, 1fr);
          background-color: #fff;
          color: #444;
        }

        .timeline-event.highlighted {
          background-color: #efebe9;
          border-radius: 6px;
        }

        .timeline-date-age {
          text-align: right;
          opacity: 0.75;
        }

        .timeline-age {
          font-weight: 400;
        }

        .timeline-detail {
        }

        span {
          display: block;
          margin-bottom: 0.2em;
          vertical-align: middle;
        }

        .timeline-label,
        .timeline-date {
          font-family: var(--grampsjs-heading-font-family);
          font-weight: 400;
          font-size: 18px;
          color: rgba(0, 0, 0, 0.8);
          margin-bottom: 0.4em;
        }

        .timeline-place,
        .timeline-description,
        .timeline-person,
        .timeline-age {
          display: block;
          font-family: var(--grampsjs-body-font-family);
          font-size: 17px;
        }

        .timeline-place,
        .timeline-description,
        .timeline-person {
          font-weight: 300;
        }

        .timeline-detail mwc-icon {
          --mdc-icon-size: 1em;
          color: rgba(0, 0, 0, 0.25);
          margin-right: 0.2em;
          position: relative;
          top: 0.13em;
        }

        .timeline-button {
          margin-top: 0.5em;
          visibility: hidden;
        }

        .timeline-event.highlighted .timeline-button {
          visibility: visible;
        }

        #timeline {
        }

        #map {
          display: none;
        }

        @media (min-width: 768px) {
          #map {
            height: calc(100vh - 64px);
            position: sticky;
            top: 64px;
            display: block;
          }

          #container {
            display: grid;
            grid-gap: 8px;
            grid-template-columns: 420px 1fr;
          }
        }
      `]}static get properties(){return{data:{type:Array},highlightedId:{type:String}}}constructor(){super(),this.data=[],this.highlightedId=""}render(){return 0===this.data.length?M``:M`
      <div id="container">
        <div id="timeline">${this.data.map(this.renderEvent,this)}</div>
        <div id="map">
          ${this.data.map((t=>t.place?.lat||t.place?.long)).filter(Boolean).length>0?M` ${this.renderMap()} `:""}
        </div>
      </div>
    `}renderMap(){const t=this._getMapCorners();return M`
      <grampsjs-map
        latMin="${t[0][0]}"
        longMin="${t[0][1]}"
        latMax="${t[1][0]}"
        longMax="${t[1][1]}"
        layerSwitcher
        mapid="timeline-map"
        id="timeline-map"
        @marker:clicked="${this._handleMapClick}"
      >
        ${this.data.map((t=>t.place?.lat&&t.place?.long?M`
            <grampsjs-map-marker
              latitude="${t.place.lat}"
              longitude="${t.place.long}"
              markerId="${t.gramps_id}"
              opacity="${t.gramps_id===this.highlightedId?1:.5}"
            >
            </grampsjs-map-marker>
          `:""),this)}
      </grampsjs-map>
    `}_getMapCorners(){if(0===this.data.length)return[0,0];const t=this.data.filter((t=>t?.place?.lat||t?.place?.lat));if(0===t.length)return[[0,0],[0,0]];const e=t.map((t=>t.place.lat||0)),i=t.map((t=>t.place.long||0));return[[Math.min(...e),Math.min(...i)],[Math.max(...e),Math.max(...i)]]}renderEvent(t){return M`
      <div
        id="event-${t.gramps_id}"
        class=${Ot({"timeline-event":!0,highlighted:t.gramps_id===this.highlightedId})}
        @mouseover="${()=>this._handleMouseOver(t)}"
        @focus="${()=>this._handleMouseOver(t)}"
        @touchstart="${()=>this._handleMouseOver(t)}"
      >
        <div class="timeline-date-age">
          <span class="timeline-date">${t.date}</span>
          <span class="timeline-age">${t.age}</span>
        </div>
        <div class="timeline-detail">
          <span class="timeline-label"
            >${t.label}
            ${t.role&&![this._("Family"),this._("Primary")].includes(t.role)?M`(${t.role})`:""}
          </span>
          ${t.description?M`
                <span class="timeline-description">${t.description}</span>
              `:""}
          ${t.place?.name?M`
                <span class="timeline-place"
                  ><mwc-icon class="person">place</mwc-icon> ${t.place.name}</span
                >
              `:""}
          ${t.person?.name_given||t.person?.name_surname?M`
                <span class="timeline-person"
                  ><mwc-icon class="person">person</mwc-icon> ${t.person?.name_given||M`&hellip;`}
                  ${t.person?.name_surname||M`&hellip;`}</span
                >
              `:""}

          <span class="timeline-button">
            <mwc-button
              dense
              outlined
              label="${this._("Details")}"
              @click="${()=>this._handleButtonClick(t.gramps_id)}"
            >
            </mwc-button>
          </span>
        </div>
      </div>
    `}_handleMouseOver(t){const e=t.gramps_id,i=t?.place?.lat,r=t?.place?.long;if(this.highlightedId=e,i||r){this.shadowRoot.getElementById("timeline-map").panTo(i,r)}}_handleMapClick(t){if(t.detail?.markerId){this.highlightedId=t.detail.markerId,this._scrollToId(`event-${t.detail.markerId}`);const e=t.detail?.latitude,i=t.detail?.longitude;if(e||i){this.shadowRoot.getElementById("timeline-map").panTo(e,i)}}}_handleButtonClick(t){this.dispatchEvent(new CustomEvent("nav",{bubbles:!0,composed:!0,detail:{path:`event/${t}`}}))}_scrollToId(t){const e=this.shadowRoot.getElementById(t);e&&e.scrollIntoView({behavior:"smooth",block:"center"})}}window.customElements.define("grampsjs-person-timeline",Ay);function Iy(t){for(var e=t.length/6|0,i=new Array(e),r=0;r<e;)i[r]="#"+t.slice(6*r,6*++r);return i}window.customElements.define("grampsjs-view-person-timeline",class extends $d{static get styles(){return[super.styles,n`
        :host {
          margin: 0;
        }
      `]}static get properties(){return{handle:{type:String},_data:{type:Array}}}constructor(){super(),this.handle="",this._data=[]}renderContent(){return 0===this._data.length?(this.loading,M``):this.renderElements()}renderElements(){return M`
      <grampsjs-person-timeline
        .data="${this._data}"
        .strings="${this.strings}"
      >
      </grampsjs-person-timeline>
        svg a {
          text-decoration: none !important;
        }

        div#container {
          display: inline-block;
          max-width: 800px;
          vertical-align: top;
          margin-bottom: 20px;
        }

        div#legend {
          display: inline-block;
          vertical-align: top;
          padding: 0;
          font-size: 15px;
          font-weight: 330;
          margin-left: 20px;
        }

        #legend ul {
          list-style-type: none;
          padding: 0;
          margin: 0;
        }

        #legend ul li {
          padding: 4px;
          margin: 0;
          cursor: pointer;
        }

        #legend ul li.muted {
          opacity: 0.3;
        }

        span.dot {
          display: inline-block;
          width: 11px;
          height: 11px;
          border-radius: 3px;
          margin-right: 8px;
          opacity: 0.9;
        }

        @keyframes pulse {
          0% {
            opacity: 0.1;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0.1;
          }
        }

        div.loading svg {
          animation: pulse 1.5s linear infinite;
        }
      `]}static get properties(){return{data:{type:Array},width:{type:String},selected:{type:Number},person:{type:Object},loading:{type:Boolean}}}constructor(){super(),this.data=[],this.width=600,this.selected=-1,this.person={},this.loading=!1}render(){return M`${this.renderChart()} `}renderChart(){let{data:t}=this;return this.selected>=0&&(t=t.map(((t,e)=>e===this.selected?t:{segments:[],handle:t.handle}))),M`
      <div id="container" class="${Ot({loading:this.loading})}">
        ${kk(t,{width:this.width})}
      </div>
      <div id="legend">${this.renderLegend()}</div>
    `}_getNameFromHandle(t){let e=(this.person?.extended?.people||[]).filter((e=>e.handle===t));return 0===e.length?"":(e=e[0],Ga(e))}renderLegend(){return M`<ul>
      ${this.data.map(((t,e)=>M`
          <li
            @click="${t=>this._handleLegendClick(t,e)}"
            @keydown="${gs}"
            class="${Ot({muted:this.selected>-1&&this.selected!==e})}"
            id="legend-item-${e}"
          >
            <span class="dot" style="background-color:${Py[e]};"></span
            >${this._getNameFromHandle(t.handle)}
          </li>
        `))}
    </ul> `}updated(t){(t.has("data")||t.has("selected")||t.has("width"))&&this._updateTooltips()}_updateTooltips(){this.data.map((t=>t.segments.map((e=>{const i=`rect-segment-${t.handle}-${e.start}-${e.stop}`,r=this.renderRoot.getElementById(i);return r&&ud(r,{content:`\n            ${this._getNameFromHandle(t.handle)}<br/>\n            ${e.cM?`<b>${(new Intl.NumberFormat).format(e.cM)} cM</b>`:""}${e.cM&&e.SNPs?",":""}\n            ${e.SNPs?`${e.SNPs} SNPs`:""}\n            ${e.cM||e.SNPs?"<br/>":""}\n            ${(new Intl.NumberFormat).format(e.start)}&ndash;${(new Intl.NumberFormat).format(e.stop)}<br/>\n            ${t.ancestor_profiles?.length?`${this._("Common ancestors")}: ${t.ancestor_profiles.map((t=>`${t.name_given} ${t.name_surname}`)).join(", ")}<br/>`:""}\n            ${t.relation?`${this._("Relationship")}: ${t.relation}`:""}\n            `,allowHTML:!0}),null}))))}_handleLegendClick(t,e){this.selected=this.selected===e?-1:e,t.preventDefault(),t.stopPropagation()}firstUpdated(){const t=this.renderRoot.getElementById("container");this.handleResize(),new ResizeObserver((()=>this.handleResize())).observe(t)}handleResize(){const t=this.renderRoot.getElementById("container");this.width=t.offsetWidth-45}}window.customElements.define("grampsjs-chromosome-browser",Tk);class Sk extends(al(K)){static get styles(){return[nl,n`
        .match {
          border-top: 1px solid rgba(0, 0, 0, 0.1);
          padding: 0 20px;
        }

        .match:last-child {
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        }
        .head {
          display: inline-block;
          margin-right: 2em;
          vertical-align: middle;
          width: 10rem;
          padding: 20px 0;
        }

        .name {
          font-weight: 350;
          font-size: 17px;
        }

        dl {
          display: inline-block;
          vertical-align: middle;
        }

        dd {
          font-size: 15px;
        }
      `]}static get properties(){return{data:{type:Array},person:{type:Object},loading:{type:Boolean}}}constructor(){super(),this.data=[],this.person={},this.loading=!1}render(){return this.loading?this.renderLoading():M`
      <table>
        ${this.data.filter((t=>t.segments&&t.segments.length>0)).map((t=>this._personCard(t)))}
      </table>
    `}renderLoading(){const t=this.person?.person_ref_list?.filter((t=>"DNA"===t.rel))?.length??1;return M`
      <table>
        ${[...Array(t).keys()].map((()=>M`
            <div class="match">
              <div class="head">
                <span class="name">
                  <span class="skeleton" style="width: 7em; height: 1.2em;"
                    >&nbsp;</span
                  >
                </span>
              </div>
              <dl>
                <div>
                  <dt>${this._("Relationship")}</dt>
                  <dd>
                    <span class="skeleton" style="width: 7em;">&nbsp;</span>
                  </dd>
                </div>
                <div>
                  <dt>${this._("Shared DNA")}</dt>
                  <dd>
                    <span class="skeleton" style="width: 3em;">&nbsp;</span>
                  </dd>
                </div>
                <div>
                  <dt>${this._("Shared Segments")}</dt>
                  <dd>
                    <span class="skeleton" style="width: 2em;">&nbsp;</span>
                  </dd>
                </div>
                <div>
                  <dt>${this._("Largest Segment")}</dt>
                  <dd>
                    <span class="skeleton" style="width: 3em;">&nbsp;</span>
                  </dd>
                </div>
              </dl>
            </div>
          `))}
      </table>
    `}_personCard(t){return M`
      <div class="match">
        <div class="head">
          <span class="name">
            <a href="/person/${this._getGidFromHandle(t.handle)}"
              >${this._getNameFromHandle(t.handle)}</a
            ></span
          >
        </div>
        <dl>
          <div>
            <dt>${this._("Relationship")}</dt>
            <dd>${t.relation||this._("Unknown")}</dd>
          </div>
          <div>
            <dt>${this._("Shared DNA")}</dt>
            <dd>
              ${t.segments.reduce(((t,e)=>t+e.cM),0).toFixed(1)}
              cM
            </dd>
          </div>
          <div>
            <dt>${this._("Shared Segments")}</dt>
            <dd>${t.segments.length}</dd>
          </div>
          <div>
            <dt>${this._("Largest Segment")}</dt>
            <dd>
              ${t.segments.reduce(((t,e)=>Math.max(t,e.cM)),0).toFixed(1)}
              cM
            </dd>
          </div>
        </dl>
      </div>
    `}_getNameFromHandle(t){let e=(this.person?.extended?.people||[]).filter((e=>e.handle===t));return 0===e.length?"":(e=e[0],Ga(e))}_getGidFromHandle(t){let e=(this.person?.extended?.people||[]).filter((e=>e.handle===t));return 0===e.length?"":(e=e[0],e.gramps_id)}}window.customElements.define("grampsjs-dna-matches",Sk);window.customElements.define("grampsjs-view-person-dna",class extends $d{static get styles(){return[super.styles,n`
        :host {
          margin: 0;
        }

        h3 {
          margin: 1.2em 0;
        }
      `]}static get properties(){return{handle:{type:String},_data:{type:Array},person:{type:Object}}}constructor(){super(),this.handle="",this._data=[],this.person={}}renderContent(){return this.renderElements()}renderElements(){return M`
      <h3>${this._("Matches")}</h3>
      <grampsjs-dna-matches
        .data="${this._data}"
        .strings="${this.strings}"
        .person="${this.person}"
        ?loading="${this.loading}"
      ></grampsjs-dna-matches>
      <h3>${this._("Chromosome Browser")}</h3>
      <grampsjs-chromosome-browser
        .data="${this._data}"
        .strings="${this.strings}"
        .person="${this.person}"
        ?loading="${this.loading}"
      ></grampsjs-chromosome-browser>
    `}update(t){super.update(t),this.active&&t.has("handle")&&this._updateData()}get _url(){return`/api/people/${this.handle}/dna/matches?locale=${this.strings.__lang__||"en"}`}_updateData(){this.handle&&(this._data=[],this.loading=!0,On(this._url).then((t=>{this.loading=!1,"data"in t?(this.error=!1,this._data=t.data):"error"in t&&(this.error=!0,this._errorMessage=t.error)})))}});class Ck extends(al(K)){static get styles(){return[nl,n`
        dl {
          clear: left;
        }

        dl > div {
          float: none;
        }

        dl > div > dt {
          display: inline-block;
          width: 10em;
          margin-right: 1em;
          text-align: right;
        }

        dl > div > dd {
          display: inline-block;
        }
      `]}static get properties(){return{data:{type:Object}}}constructor(){super(),this.data={}}render(){return 0===Object.keys(this.data).length?"":M`
    ${this.data.map((t=>M`
        <dl>
          ${t?.date?.dateval?M`
                <div>
                  <dt>${this._("Date")}</dt>
                  <dd>${this._toDate(t?.date?.dateval)}</dd>
                </div>
              `:""}
          ${t.street?M`
                <div>
                  <dt>${this._("Street")}</dt>
                  <dd>${t.street}</dd>
                </div>
              `:""}
          ${t.locality?M`
                <div>
                  <dt>${this._("Locality")}</dt>
                  <dd>${t.locality}</dd>
                </div>
              `:""}
          ${t.city?M`
                <div>
                  <dt>${this._("City")}</dt>
                  <dd>${t.city}</dd>
                </div>
              `:""}
          ${t.county?M`
                <div>
                  <dt>${this._("County")}</dt>
                  <dd>${t.county}</dd>
                </div>
              `:""}
          ${t.state?M`
                <div>
                  <dt>${this._("State")}</dt>
                  <dd>${t.state}</dd>
                </div>
              `:""}
          ${t.country?M`
                <div>
                  <dt>${this._("Country")}</dt>
                  <dd>${t.country}</dd>
                </div>
              `:""}
        </dl>
      `))}
      </table>
    `}_toDate(t){try{return`${t[2]}-${t[1]}-${t[0]}`}catch{return""}}}window.customElements.define("grampsjs-addresses",Ck);window.customElements.define("grampsjs-form-edit-association",class extends lh{static get properties(){return{person:{type:Object},personProfile:{type:Object}}}constructor(){super(),this.person={},this.personProfile={}}renderForm(){return M`
      <h4 class="label">${this._("Person")}</h4>
      <p>
        <grampsjs-form-select-object-list
          fixedMenuPosition
          style="min-height: 300px;"
          objectType="person"
          .strings="${this.strings}"
          id="person-select"
          label="${this._("Select")}"
          .objectsInitial="${this.data.ref?[{object_type:"person",object:this.person,handle:this.data.ref}]:[]}"
          class="edit"
        ></grampsjs-form-select-object-list>
      </p>

      <p>
        <grampsjs-form-string
          required
          fullwidth
          id="rel"
          @formdata:changed="${this._handleFormData}"
          label="${this._("Association")}"
          .strings="${this.strings}"
          .data="${this.data}"
          value="${this.data?.rel||""}"
        >
        </grampsjs-form-string>
      </p>

      <h4 class="label">${this._("Citations")}</h4>
      <p>
        <grampsjs-form-select-object-list
          multiple
          fixedMenuPosition
          style="min-height: 300px;"
          objectType="citation"
          .strings="${this.strings}"
          id="personref-citation-select"
          label="${this._("Select")}"
          .objectsInitial="${this.data.citation_list&&this.data.citation_list.length?this.data.citation_list.map((t=>({object_type:"citation",object:{},handle:t}))):[]}"
          class="edit"
        ></grampsjs-form-select-object-list>
      </p>

      <h4 class="label">${this._("Notes")}</h4>
      <p>
        <grampsjs-form-select-object-list
          multiple
          fixedMenuPosition
          style="min-height: 300px;"
          objectType="note"
          .strings="${this.strings}"
          id="personref-note-select"
          label="${this._("Select")}"
          .objectsInitial="${this.data.note_list&&this.data.note_list.length?this.data.note_list.map((t=>({object_type:"note",object:{},handle:t}))):[]}"
          class="edit"
        ></grampsjs-form-select-object-list>
      </p>
    `}get isValid(){return this.data.rel&&this.data.ref}});window.customElements.define("grampsjs-associations",class extends pf{static get properties(){return{extended:{type:Array}}}row(t,e){return M`
      <mwc-list-item
        twoline
        graphic="avatar"
        ?hasMeta="${this.edit}"
        @click="${()=>this._handleClick(this.extended[e])}"
        >${Ga(this.extended[e])}
        <span slot="secondary">${this._(t.rel)}</span>
        <mwc-icon slot="graphic">group</mwc-icon>
      </mwc-list-item>
    `}_handleClick(t){this.edit||os(this,"nav",{path:this._getItemPath(t.gramps_id)})}_getItemPath(t){return`person/${t}`}_handleAdd(){this.dialogContent=M`
      <grampsjs-form-edit-association
        new
        @object:save="${this._handleAssocSave}"
        @object:cancel="${this._handleDialogCancel}"
        .strings="${this.strings}"
      >
      </grampsjs-form-edit-association>
    `}_handleEdit(){const t=this.data[this._selectedIndex],e=this.extended[this._selectedIndex];this.dialogContent=M`
      <grampsjs-form-edit-association
        @object:save="${this._handleAssocSaveEdit}"
        @object:cancel="${this._handleDialogCancel}"
        .strings="${this.strings}"
        .data="${t}"
        .person="${e}"
      >
      </grampsjs-form-edit-association>
    `}_handleDelete(){os(this,"edit:action",{action:"delAssociation",index:this._selectedIndex})}_handleAssocSave(t){os(this,"edit:action",{action:"addAssociation",data:t.detail.data}),t.preventDefault(),t.stopPropagation(),this.dialogContent=""}_handleAssocSaveEdit(t){os(this,"edit:action",{action:"updateAssociation",data:t.detail.data,index:this._selectedIndex}),t.preventDefault(),t.stopPropagation(),this.dialogContent=""}_handleDialogCancel(){this.dialogContent=""}});window.customElements.define("grampsjs-form-edit-attribute",class extends lh{static get properties(){return{source:{type:Boolean}}}constructor(){super(),this.source=!1}renderForm(){return M`
      <grampsjs-form-select-type
        required
        id="${this.source?"srcattrtype":"attrtype"}"
        heading="${this._("Type")}"
        .strings="${this.strings}"
        typeName="attribute_types"
        ?loadingTypes=${this.loadingTypes}
        .types="${this.types}"
        .typesLocale="${this.typesLocale}"
        .data="${this.data}"
        initialValue=${this.data?.type?.string||""}
      >
      </grampsjs-form-select-type>
      <grampsjs-form-string
        required
        fullwidth
        id="attrvalue"
        @formdata:changed="${this._handleFormData}"
        label="${this._("Value")}"
        .strings="${this.strings}"
        .data="${this.data}"
        value="${this.data?.value||""}"
      >
      </grampsjs-form-string>
    `}});window.customElements.define("grampsjs-attributes",class extends pf{static get styles(){return[super.styles,n`
        mwc-list-item {
          cursor: default;
        }

        mwc-list-item[hasMeta] {
          cursor: pointer;
        }
      `]}static get properties(){return{source:{type:Boolean}}}constructor(){super(),this.source=!1}row(t){return M`
      <mwc-list-item twoline graphic="avatar" ?hasMeta="${this.edit}">
        ${this.edit?t.value:ys(t.value,!1)}
        <span slot="secondary">${this._(t.type)}</span>
        <mwc-icon slot="graphic">info</mwc-icon>
      </mwc-list-item>
    `}_handleAdd(){this.dialogContent=M`
      <grampsjs-form-edit-attribute
        ?source="${this.source}"
        new
        @object:save="${this._handleAttrSave}"
        @object:cancel="${this._handleAttrCancel}"
        .strings="${this.strings}"
      >
      </grampsjs-form-edit-attribute>
    `}_handleEdit(){const t=this.data[this._selectedIndex],e={type:{_class:this.source?"SrcAttributeType":"AttributeType",string:t.type||""},value:t.value||""};this.dialogContent=M`
      <grampsjs-form-edit-attribute
        ?source="${this.source}"
        @object:save="${this._handleAttrSaveEdit}"
        @object:cancel="${this._handleAttrCancel}"
        .strings="${this.strings}"
        .data="${e}"
      >
      </grampsjs-form-edit-attribute>
    `}_handleDelete(){os(this,"edit:action",{action:"delAttr",index:this._selectedIndex})}_handleAttrSave(t){os(this,"edit:action",{action:"addAttribute",data:t.detail.data}),t.preventDefault(),t.stopPropagation(),this.dialogContent=""}_handleAttrSaveEdit(t){os(this,"edit:action",{action:"updateAttribute",data:t.detail.data,index:this._selectedIndex}),t.preventDefault(),t.stopPropagation(),this.dialogContent=""}_handleAttrCancel(){this.dialogContent=""}});class Ek extends(al(K)){static get styles(){return[nl,n`
        :host {
          font-size: 14px;
          font-weight: 450;
          color: rgba(0, 0, 0, 0.45);
        }

        mwc-icon {
          font-size: 18px;
          top: 4px;
          position: relative;
          color: rgba(0, 0, 0, 0.4);
        }

        mwc-icon-button {
          --mdc-icon-size: 16px;
          --mdc-icon-button-size: 28px;
          position: relative;
        }
      `]}static get properties(){return{href:{type:String}}}constructor(){super(),this.href=""}render(){return M`
      <mwc-icon-button
        id="share-icon"
        icon="share"
        @click="${this._handleShareClick}"
        @keydown="${gs}"
      ></mwc-icon-button>
      <grampsjs-tooltip for="share-icon"
        >${this._("Copy URL")}</grampsjs-tooltip
      >
    `}_handleShareClick(){const t=this.href;if(navigator.share)navigator.share({url:t});else{const e=document.createElement("input");e.value=t,document.body.appendChild(e),e.select(),navigator.clipboard.writeText(t).finally((()=>{document.body.removeChild(e)}));const i=this.renderRoot.getElementById("share-icon");i.icon="done",setTimeout((()=>{i.icon="share"}),1e3)}}}window.customElements.define("grampsjs-share-url",Ek);class $k extends(al(K)){static get styles(){return[nl]}static get properties(){return{endpoint:{type:String},handle:{type:String},bookmarked:{type:Boolean}}}constructor(){super(),this.endpoint="",this.handle="",this.bookmarked=!1}render(){return M`
      <mwc-icon-button
        icon="${this.bookmarked?"bookmark":"bookmark_border"}"
        @click="${this._handleClick}"
        @keydown="${gs}"
        id="btn-star"
      ></mwc-icon-button>
      <grampsjs-tooltip
        for="btn-star"
        content="${this.bookmarked?this._("Remove bookmark"):this._("Bookmark this")}"
      ></grampsjs-tooltip>
    `}_handleClick(){this.bookmarked?this._handleUnmark():this._handleMark()}_handleUnmark(){!function(t,e){const i=An(),r=Gn();if(r?.[i]?.[t]){r[i][t]=[...r[i][t].filter((t=>t!==e))];const n=JSON.stringify(r);localStorage.setItem("bookmarks",n)}}(this.endpoint,this.handle),os(this,"bookmark:changed"),this.bookmarked=!1}_handleMark(){!function(t,e){const i=An(),r=Gn();Object.hasOwn(r,i)?Object.hasOwn(r[i],t)?r[i][t]=[...r[i][t].filter((t=>t!==e)),e]:r[i]={...r[i],[t]:[e]}:r[i]={[t]:[e]};const n=JSON.stringify(r);localStorage.setItem("bookmarks",n)}(this.endpoint,this.handle),os(this,"bookmark:changed"),this.bookmarked=!0}update(t){super.update(t),(t.has("handle")||t.has("endpoint"))&&this._updateStatus()}_updateStatus(){this.bookmarked=function(t,e){const i=Wn();return!!i?.[t]?.includes(e)}(this.endpoint,this.handle)}}window.customElements.define("grampsjs-bookmark-button",$k);class Ak extends(al(K)){static get styles(){return[nl,n`
        .breadcrumb {
          font-size: 14px;
          font-weight: 450;
          color: rgba(0, 0, 0, 0.45);
          margin-bottom: 18px;
        }

        .breadcrumb a:link,
        a:visited {
          color: rgba(0, 0, 0, 0.45);
          text-decoration: none;
          border-radius: 3px;
          padding: 4px 7px;
        }

        .breadcrumb a:hover {
          color: rgba(0, 0, 0, 0.45);
          text-decoration: none;
          background-color: rgba(0, 0, 0, 0.05);
        }

        .breadcrumb .dark {
        }

        .breadcrumb mwc-icon {
          font-size: 18px;
          top: 4px;
          position: relative;
          color: rgba(0, 0, 0, 0.4);
        }

        .breadcrumb .action-buttons {
          margin-left: 1rem;
        }

        .breadcrumb .action-buttons mwc-icon-button {
          --mdc-icon-size: 16px;
          --mdc-icon-button-size: 28px;
          position: relative;
          top: -3px;
          color: rgba(0, 0, 0, 0.4);
        }

        .breadcrumb .action-buttons mwc-icon-button.edit {
          color: var(--mdc-theme-secondary);
        }

        .breadcrumb .action-buttons mwc-icon-button#btn-star {
          --mdc-icon-size: 20px;
          --mdc-icon-button-size: 28px;
          position: relative;
          top: -3px;
        }

        .breadcrumb .action-buttons grampsjs-share-url,
        .breadcrumb .action-buttons grampsjs-bookmark-button {
          --mdc-icon-size: 16px;
          --mdc-icon-button-size: 28px;
          position: relative;
          top: -3px;
        }

        .breadcrumb .action-buttons grampsjs-bookmark-button {
          --mdc-icon-size: 17px;
          top: -2px;
        }
      `]}static get properties(){return{data:{type:Object},edit:{type:Boolean},objectsName:{type:String},objectEndpoint:{type:String},objectIcon:{type:String},hideBookmark:{type:Boolean},hideLock:{type:Boolean}}}constructor(){super(),this.data={},this.edit=!1,this.objectsName="",this.objectEndpoint="",this.objectIcon="",this.hideBookmark=!1,this.hideLock=!1}render(){return M`
      <div class="breadcrumb">
        <mwc-icon>${this.objectIcon}</mwc-icon>
        <a href="/${this._getObjectsLink()}">${this._(this.objectsName)}</a>
        <mwc-icon>chevron_right</mwc-icon>
        <span class="dark">${this.data.gramps_id}</span>
        <span class="action-buttons">
          ${this.hideLock?"":M`
                <span id="wrap-btn-private">
                  <mwc-icon-button
                    icon="${this.data.private?"lock_outline":"lock_open"}"
                    ?disabled="${!this.edit}"
                    @click="${this._handlePrivacyClick}"
                    @keydown="${gs}"
                    class="edit"
                    id="btn-private"
                  ></mwc-icon-button>
                </span>
                <grampsjs-tooltip
                  for="wrap-btn-private"
                  content="${this.data.private?this._("Record is private"):this._("Record is public")}"
                ></grampsjs-tooltip>
              `}
          ${this.hideBookmark?"":M`
                <grampsjs-bookmark-button
                  .strings="${this.strings}"
                  handle="${this.data.handle}"
                  endpoint="${this.objectEndpoint}"
                ></grampsjs-bookmark-button>
              `}
          <grampsjs-share-url
            href="${document.URL}"
            .strings="${this.strings}"
          ></grampsjs-share-url>
        </span>
      </div>
    `}_getObjectsLink(){return"Media Objects"===this.objectsName?"medialist":this.objectsName.toLowerCase()}_handlePrivacyClick(){os(this,"edit:action",{action:"updateProp",data:{private:!this.data.private}})}}window.customElements.define("grampsjs-breadcrumbs",Ak);class Ik extends(al(K)){static get styles(){return[nl,n`
        table {
          font-size: 15px;
          margin-top: 20px;
          border-collapse: collapse;
          border-spacing: 0;
        }

        th {
          font-size: 14px;
          color: #666;
          font-weight: 400;
        }

        th,
        td {
          padding: 14px 20px;
          border-bottom: 1px solid #e0e0e0;
          text-align: left;
          margin: 0;
        }

        table.linked tr:hover td {
          background-color: #f0f0f0;
          cursor: pointer;
        }

        table.linked tr.highlight td {
          font-weight: 400;
        }

        table.linked tr.highlight:hover td {
          background-color: white;
          cursor: auto;
        }

        td mwc-icon.inline {
          color: rgba(0, 0, 0, 0.25);
          font-size: 16px;
        }

        td mwc-icon-button {
          --mdc-icon-size: 20px;
          --mdc-icon-button-size: 36px;
          margin: -2px 0px;
        }

        @media (max-width: 768px) {
          table {
            font-size: 14px;
          }

          th {
            font-size: 12px;