(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();var Ju={exports:{}},ta={},ed={exports:{}},ht={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sm;function v0(){if(Sm)return ht;Sm=1;var o=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),g=Symbol.iterator;function _(N){return N===null||typeof N!="object"?null:(N=g&&N[g]||N["@@iterator"],typeof N=="function"?N:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,T={};function S(N,ne,Ne){this.props=N,this.context=ne,this.refs=T,this.updater=Ne||y}S.prototype.isReactComponent={},S.prototype.setState=function(N,ne){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,ne,"setState")},S.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function x(){}x.prototype=S.prototype;function D(N,ne,Ne){this.props=N,this.context=ne,this.refs=T,this.updater=Ne||y}var I=D.prototype=new x;I.constructor=D,M(I,S.prototype),I.isPureReactComponent=!0;var C=Array.isArray,G=Object.prototype.hasOwnProperty,O={current:null},U={key:!0,ref:!0,__self:!0,__source:!0};function j(N,ne,Ne){var Z,ce={},Me=null,ve=null;if(ne!=null)for(Z in ne.ref!==void 0&&(ve=ne.ref),ne.key!==void 0&&(Me=""+ne.key),ne)G.call(ne,Z)&&!U.hasOwnProperty(Z)&&(ce[Z]=ne[Z]);var Te=arguments.length-2;if(Te===1)ce.children=Ne;else if(1<Te){for(var Ue=Array(Te),Qe=0;Qe<Te;Qe++)Ue[Qe]=arguments[Qe+2];ce.children=Ue}if(N&&N.defaultProps)for(Z in Te=N.defaultProps,Te)ce[Z]===void 0&&(ce[Z]=Te[Z]);return{$$typeof:o,type:N,key:Me,ref:ve,props:ce,_owner:O.current}}function b(N,ne){return{$$typeof:o,type:N.type,key:ne,ref:N.ref,props:N.props,_owner:N._owner}}function R(N){return typeof N=="object"&&N!==null&&N.$$typeof===o}function z(N){var ne={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(Ne){return ne[Ne]})}var oe=/\/+/g;function ee(N,ne){return typeof N=="object"&&N!==null&&N.key!=null?z(""+N.key):ne.toString(36)}function de(N,ne,Ne,Z,ce){var Me=typeof N;(Me==="undefined"||Me==="boolean")&&(N=null);var ve=!1;if(N===null)ve=!0;else switch(Me){case"string":case"number":ve=!0;break;case"object":switch(N.$$typeof){case o:case e:ve=!0}}if(ve)return ve=N,ce=ce(ve),N=Z===""?"."+ee(ve,0):Z,C(ce)?(Ne="",N!=null&&(Ne=N.replace(oe,"$&/")+"/"),de(ce,ne,Ne,"",function(Qe){return Qe})):ce!=null&&(R(ce)&&(ce=b(ce,Ne+(!ce.key||ve&&ve.key===ce.key?"":(""+ce.key).replace(oe,"$&/")+"/")+N)),ne.push(ce)),1;if(ve=0,Z=Z===""?".":Z+":",C(N))for(var Te=0;Te<N.length;Te++){Me=N[Te];var Ue=Z+ee(Me,Te);ve+=de(Me,ne,Ne,Ue,ce)}else if(Ue=_(N),typeof Ue=="function")for(N=Ue.call(N),Te=0;!(Me=N.next()).done;)Me=Me.value,Ue=Z+ee(Me,Te++),ve+=de(Me,ne,Ne,Ue,ce);else if(Me==="object")throw ne=String(N),Error("Objects are not valid as a React child (found: "+(ne==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":ne)+"). If you meant to render a collection of children, use an array instead.");return ve}function he(N,ne,Ne){if(N==null)return N;var Z=[],ce=0;return de(N,Z,"","",function(Me){return ne.call(Ne,Me,ce++)}),Z}function se(N){if(N._status===-1){var ne=N._result;ne=ne(),ne.then(function(Ne){(N._status===0||N._status===-1)&&(N._status=1,N._result=Ne)},function(Ne){(N._status===0||N._status===-1)&&(N._status=2,N._result=Ne)}),N._status===-1&&(N._status=0,N._result=ne)}if(N._status===1)return N._result.default;throw N._result}var le={current:null},k={transition:null},ae={ReactCurrentDispatcher:le,ReactCurrentBatchConfig:k,ReactCurrentOwner:O};function re(){throw Error("act(...) is not supported in production builds of React.")}return ht.Children={map:he,forEach:function(N,ne,Ne){he(N,function(){ne.apply(this,arguments)},Ne)},count:function(N){var ne=0;return he(N,function(){ne++}),ne},toArray:function(N){return he(N,function(ne){return ne})||[]},only:function(N){if(!R(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},ht.Component=S,ht.Fragment=t,ht.Profiler=s,ht.PureComponent=D,ht.StrictMode=i,ht.Suspense=f,ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ae,ht.act=re,ht.cloneElement=function(N,ne,Ne){if(N==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+N+".");var Z=M({},N.props),ce=N.key,Me=N.ref,ve=N._owner;if(ne!=null){if(ne.ref!==void 0&&(Me=ne.ref,ve=O.current),ne.key!==void 0&&(ce=""+ne.key),N.type&&N.type.defaultProps)var Te=N.type.defaultProps;for(Ue in ne)G.call(ne,Ue)&&!U.hasOwnProperty(Ue)&&(Z[Ue]=ne[Ue]===void 0&&Te!==void 0?Te[Ue]:ne[Ue])}var Ue=arguments.length-2;if(Ue===1)Z.children=Ne;else if(1<Ue){Te=Array(Ue);for(var Qe=0;Qe<Ue;Qe++)Te[Qe]=arguments[Qe+2];Z.children=Te}return{$$typeof:o,type:N.type,key:ce,ref:Me,props:Z,_owner:ve}},ht.createContext=function(N){return N={$$typeof:c,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},N.Provider={$$typeof:a,_context:N},N.Consumer=N},ht.createElement=j,ht.createFactory=function(N){var ne=j.bind(null,N);return ne.type=N,ne},ht.createRef=function(){return{current:null}},ht.forwardRef=function(N){return{$$typeof:u,render:N}},ht.isValidElement=R,ht.lazy=function(N){return{$$typeof:m,_payload:{_status:-1,_result:N},_init:se}},ht.memo=function(N,ne){return{$$typeof:h,type:N,compare:ne===void 0?null:ne}},ht.startTransition=function(N){var ne=k.transition;k.transition={};try{N()}finally{k.transition=ne}},ht.unstable_act=re,ht.useCallback=function(N,ne){return le.current.useCallback(N,ne)},ht.useContext=function(N){return le.current.useContext(N)},ht.useDebugValue=function(){},ht.useDeferredValue=function(N){return le.current.useDeferredValue(N)},ht.useEffect=function(N,ne){return le.current.useEffect(N,ne)},ht.useId=function(){return le.current.useId()},ht.useImperativeHandle=function(N,ne,Ne){return le.current.useImperativeHandle(N,ne,Ne)},ht.useInsertionEffect=function(N,ne){return le.current.useInsertionEffect(N,ne)},ht.useLayoutEffect=function(N,ne){return le.current.useLayoutEffect(N,ne)},ht.useMemo=function(N,ne){return le.current.useMemo(N,ne)},ht.useReducer=function(N,ne,Ne){return le.current.useReducer(N,ne,Ne)},ht.useRef=function(N){return le.current.useRef(N)},ht.useState=function(N){return le.current.useState(N)},ht.useSyncExternalStore=function(N,ne,Ne){return le.current.useSyncExternalStore(N,ne,Ne)},ht.useTransition=function(){return le.current.useTransition()},ht.version="18.3.1",ht}var Mm;function Lf(){return Mm||(Mm=1,ed.exports=v0()),ed.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Em;function x0(){if(Em)return ta;Em=1;var o=Lf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(u,f,h){var m,g={},_=null,y=null;h!==void 0&&(_=""+h),f.key!==void 0&&(_=""+f.key),f.ref!==void 0&&(y=f.ref);for(m in f)i.call(f,m)&&!a.hasOwnProperty(m)&&(g[m]=f[m]);if(u&&u.defaultProps)for(m in f=u.defaultProps,f)g[m]===void 0&&(g[m]=f[m]);return{$$typeof:e,type:u,key:_,ref:y,props:g,_owner:s.current}}return ta.Fragment=t,ta.jsx=c,ta.jsxs=c,ta}var Tm;function y0(){return Tm||(Tm=1,Ju.exports=x0()),Ju.exports}var be=y0(),uc=Lf(),bl={},td={exports:{}},kn={},nd={exports:{}},id={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Am;function S0(){return Am||(Am=1,function(o){function e(k,ae){var re=k.length;k.push(ae);e:for(;0<re;){var N=re-1>>>1,ne=k[N];if(0<s(ne,ae))k[N]=ae,k[re]=ne,re=N;else break e}}function t(k){return k.length===0?null:k[0]}function i(k){if(k.length===0)return null;var ae=k[0],re=k.pop();if(re!==ae){k[0]=re;e:for(var N=0,ne=k.length,Ne=ne>>>1;N<Ne;){var Z=2*(N+1)-1,ce=k[Z],Me=Z+1,ve=k[Me];if(0>s(ce,re))Me<ne&&0>s(ve,ce)?(k[N]=ve,k[Me]=re,N=Me):(k[N]=ce,k[Z]=re,N=Z);else if(Me<ne&&0>s(ve,re))k[N]=ve,k[Me]=re,N=Me;else break e}}return ae}function s(k,ae){var re=k.sortIndex-ae.sortIndex;return re!==0?re:k.id-ae.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;o.unstable_now=function(){return a.now()}}else{var c=Date,u=c.now();o.unstable_now=function(){return c.now()-u}}var f=[],h=[],m=1,g=null,_=3,y=!1,M=!1,T=!1,S=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function I(k){for(var ae=t(h);ae!==null;){if(ae.callback===null)i(h);else if(ae.startTime<=k)i(h),ae.sortIndex=ae.expirationTime,e(f,ae);else break;ae=t(h)}}function C(k){if(T=!1,I(k),!M)if(t(f)!==null)M=!0,se(G);else{var ae=t(h);ae!==null&&le(C,ae.startTime-k)}}function G(k,ae){M=!1,T&&(T=!1,x(j),j=-1),y=!0;var re=_;try{for(I(ae),g=t(f);g!==null&&(!(g.expirationTime>ae)||k&&!z());){var N=g.callback;if(typeof N=="function"){g.callback=null,_=g.priorityLevel;var ne=N(g.expirationTime<=ae);ae=o.unstable_now(),typeof ne=="function"?g.callback=ne:g===t(f)&&i(f),I(ae)}else i(f);g=t(f)}if(g!==null)var Ne=!0;else{var Z=t(h);Z!==null&&le(C,Z.startTime-ae),Ne=!1}return Ne}finally{g=null,_=re,y=!1}}var O=!1,U=null,j=-1,b=5,R=-1;function z(){return!(o.unstable_now()-R<b)}function oe(){if(U!==null){var k=o.unstable_now();R=k;var ae=!0;try{ae=U(!0,k)}finally{ae?ee():(O=!1,U=null)}}else O=!1}var ee;if(typeof D=="function")ee=function(){D(oe)};else if(typeof MessageChannel<"u"){var de=new MessageChannel,he=de.port2;de.port1.onmessage=oe,ee=function(){he.postMessage(null)}}else ee=function(){S(oe,0)};function se(k){U=k,O||(O=!0,ee())}function le(k,ae){j=S(function(){k(o.unstable_now())},ae)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(k){k.callback=null},o.unstable_continueExecution=function(){M||y||(M=!0,se(G))},o.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<k?Math.floor(1e3/k):5},o.unstable_getCurrentPriorityLevel=function(){return _},o.unstable_getFirstCallbackNode=function(){return t(f)},o.unstable_next=function(k){switch(_){case 1:case 2:case 3:var ae=3;break;default:ae=_}var re=_;_=ae;try{return k()}finally{_=re}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(k,ae){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var re=_;_=k;try{return ae()}finally{_=re}},o.unstable_scheduleCallback=function(k,ae,re){var N=o.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?N+re:N):re=N,k){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=re+ne,k={id:m++,callback:ae,priorityLevel:k,startTime:re,expirationTime:ne,sortIndex:-1},re>N?(k.sortIndex=re,e(h,k),t(f)===null&&k===t(h)&&(T?(x(j),j=-1):T=!0,le(C,re-N))):(k.sortIndex=ne,e(f,k),M||y||(M=!0,se(G))),k},o.unstable_shouldYield=z,o.unstable_wrapCallback=function(k){var ae=_;return function(){var re=_;_=ae;try{return k.apply(this,arguments)}finally{_=re}}}}(id)),id}var wm;function M0(){return wm||(wm=1,nd.exports=S0()),nd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rm;function E0(){if(Rm)return kn;Rm=1;var o=Lf(),e=M0();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,l=1;l<arguments.length;l++)r+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,s={};function a(n,r){c(n,r),c(n+"Capture",r)}function c(n,r){for(s[n]=r,n=0;n<r.length;n++)i.add(r[n])}var u=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},g={};function _(n){return f.call(g,n)?!0:f.call(m,n)?!1:h.test(n)?g[n]=!0:(m[n]=!0,!1)}function y(n,r,l,d){if(l!==null&&l.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return d?!1:l!==null?!l.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function M(n,r,l,d){if(r===null||typeof r>"u"||y(n,r,l,d))return!0;if(d)return!1;if(l!==null)switch(l.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function T(n,r,l,d,p,v,E){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=d,this.attributeNamespace=p,this.mustUseProperty=l,this.propertyName=n,this.type=r,this.sanitizeURL=v,this.removeEmptyString=E}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){S[n]=new T(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];S[r]=new T(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){S[n]=new T(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){S[n]=new T(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){S[n]=new T(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){S[n]=new T(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){S[n]=new T(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){S[n]=new T(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){S[n]=new T(n,5,!1,n.toLowerCase(),null,!1,!1)});var x=/[\-:]([a-z])/g;function D(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(x,D);S[r]=new T(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(x,D);S[r]=new T(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(x,D);S[r]=new T(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){S[n]=new T(n,1,!1,n.toLowerCase(),null,!1,!1)}),S.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){S[n]=new T(n,1,!1,n.toLowerCase(),null,!0,!0)});function I(n,r,l,d){var p=S.hasOwnProperty(r)?S[r]:null;(p!==null?p.type!==0:d||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(M(r,l,p,d)&&(l=null),d||p===null?_(r)&&(l===null?n.removeAttribute(r):n.setAttribute(r,""+l)):p.mustUseProperty?n[p.propertyName]=l===null?p.type===3?!1:"":l:(r=p.attributeName,d=p.attributeNamespace,l===null?n.removeAttribute(r):(p=p.type,l=p===3||p===4&&l===!0?"":""+l,d?n.setAttributeNS(d,r,l):n.setAttribute(r,l))))}var C=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,G=Symbol.for("react.element"),O=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),j=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),z=Symbol.for("react.context"),oe=Symbol.for("react.forward_ref"),ee=Symbol.for("react.suspense"),de=Symbol.for("react.suspense_list"),he=Symbol.for("react.memo"),se=Symbol.for("react.lazy"),le=Symbol.for("react.offscreen"),k=Symbol.iterator;function ae(n){return n===null||typeof n!="object"?null:(n=k&&n[k]||n["@@iterator"],typeof n=="function"?n:null)}var re=Object.assign,N;function ne(n){if(N===void 0)try{throw Error()}catch(l){var r=l.stack.trim().match(/\n( *(at )?)/);N=r&&r[1]||""}return`
`+N+n}var Ne=!1;function Z(n,r){if(!n||Ne)return"";Ne=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(Q){var d=Q}Reflect.construct(n,[],r)}else{try{r.call()}catch(Q){d=Q}n.call(r.prototype)}else{try{throw Error()}catch(Q){d=Q}n()}}catch(Q){if(Q&&d&&typeof Q.stack=="string"){for(var p=Q.stack.split(`
`),v=d.stack.split(`
`),E=p.length-1,L=v.length-1;1<=E&&0<=L&&p[E]!==v[L];)L--;for(;1<=E&&0<=L;E--,L--)if(p[E]!==v[L]){if(E!==1||L!==1)do if(E--,L--,0>L||p[E]!==v[L]){var F=`
`+p[E].replace(" at new "," at ");return n.displayName&&F.includes("<anonymous>")&&(F=F.replace("<anonymous>",n.displayName)),F}while(1<=E&&0<=L);break}}}finally{Ne=!1,Error.prepareStackTrace=l}return(n=n?n.displayName||n.name:"")?ne(n):""}function ce(n){switch(n.tag){case 5:return ne(n.type);case 16:return ne("Lazy");case 13:return ne("Suspense");case 19:return ne("SuspenseList");case 0:case 2:case 15:return n=Z(n.type,!1),n;case 11:return n=Z(n.type.render,!1),n;case 1:return n=Z(n.type,!0),n;default:return""}}function Me(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case U:return"Fragment";case O:return"Portal";case b:return"Profiler";case j:return"StrictMode";case ee:return"Suspense";case de:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case z:return(n.displayName||"Context")+".Consumer";case R:return(n._context.displayName||"Context")+".Provider";case oe:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case he:return r=n.displayName||null,r!==null?r:Me(n.type)||"Memo";case se:r=n._payload,n=n._init;try{return Me(n(r))}catch{}}return null}function ve(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Me(r);case 8:return r===j?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Te(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ue(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Qe(n){var r=Ue(n)?"checked":"value",l=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),d=""+n[r];if(!n.hasOwnProperty(r)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var p=l.get,v=l.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return p.call(this)},set:function(E){d=""+E,v.call(this,E)}}),Object.defineProperty(n,r,{enumerable:l.enumerable}),{getValue:function(){return d},setValue:function(E){d=""+E},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function Dt(n){n._valueTracker||(n._valueTracker=Qe(n))}function vt(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var l=r.getValue(),d="";return n&&(d=Ue(n)?n.checked?"true":"false":n.value),n=d,n!==l?(r.setValue(n),!0):!1}function Ft(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function B(n,r){var l=r.checked;return re({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??n._wrapperState.initialChecked})}function Sn(n,r){var l=r.defaultValue==null?"":r.defaultValue,d=r.checked!=null?r.checked:r.defaultChecked;l=Te(r.value!=null?r.value:l),n._wrapperState={initialChecked:d,initialValue:l,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function pt(n,r){r=r.checked,r!=null&&I(n,"checked",r,!1)}function dt(n,r){pt(n,r);var l=Te(r.value),d=r.type;if(l!=null)d==="number"?(l===0&&n.value===""||n.value!=l)&&(n.value=""+l):n.value!==""+l&&(n.value=""+l);else if(d==="submit"||d==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?It(n,r.type,l):r.hasOwnProperty("defaultValue")&&It(n,r.type,Te(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function Ye(n,r,l){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var d=r.type;if(!(d!=="submit"&&d!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,l||r===n.value||(n.value=r),n.defaultValue=r}l=n.name,l!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,l!==""&&(n.name=l)}function It(n,r,l){(r!=="number"||Ft(n.ownerDocument)!==n)&&(l==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+l&&(n.defaultValue=""+l))}var Xe=Array.isArray;function P(n,r,l,d){if(n=n.options,r){r={};for(var p=0;p<l.length;p++)r["$"+l[p]]=!0;for(l=0;l<n.length;l++)p=r.hasOwnProperty("$"+n[l].value),n[l].selected!==p&&(n[l].selected=p),p&&d&&(n[l].defaultSelected=!0)}else{for(l=""+Te(l),r=null,p=0;p<n.length;p++){if(n[p].value===l){n[p].selected=!0,d&&(n[p].defaultSelected=!0);return}r!==null||n[p].disabled||(r=n[p])}r!==null&&(r.selected=!0)}}function A(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return re({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function $(n,r){var l=r.value;if(l==null){if(l=r.children,r=r.defaultValue,l!=null){if(r!=null)throw Error(t(92));if(Xe(l)){if(1<l.length)throw Error(t(93));l=l[0]}r=l}r==null&&(r=""),l=r}n._wrapperState={initialValue:Te(l)}}function pe(n,r){var l=Te(r.value),d=Te(r.defaultValue);l!=null&&(l=""+l,l!==n.value&&(n.value=l),r.defaultValue==null&&n.defaultValue!==l&&(n.defaultValue=l)),d!=null&&(n.defaultValue=""+d)}function ge(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function ue(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ge(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?ue(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Ae,Fe=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,l,d,p){MSApp.execUnsafeLocalFunction(function(){return n(r,l,d,p)})}:n}(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(Ae=Ae||document.createElement("div"),Ae.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Ae.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function ut(n,r){if(r){var l=n.firstChild;if(l&&l===n.lastChild&&l.nodeType===3){l.nodeValue=r;return}}n.textContent=r}var Se={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ke=["Webkit","ms","Moz","O"];Object.keys(Se).forEach(function(n){ke.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),Se[r]=Se[n]})});function Ke(n,r,l){return r==null||typeof r=="boolean"||r===""?"":l||typeof r!="number"||r===0||Se.hasOwnProperty(n)&&Se[n]?(""+r).trim():r+"px"}function Je(n,r){n=n.style;for(var l in r)if(r.hasOwnProperty(l)){var d=l.indexOf("--")===0,p=Ke(l,r[l],d);l==="float"&&(l="cssFloat"),d?n.setProperty(l,p):n[l]=p}}var ze=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ft(n,r){if(r){if(ze[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function it(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bt=null;function W(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var we=null,ie=null,fe=null;function Ie(n){if(n=zo(n)){if(typeof we!="function")throw Error(t(280));var r=n.stateNode;r&&(r=Wa(r),we(n.stateNode,n.type,r))}}function Pe(n){ie?fe?fe.push(n):fe=[n]:ie=n}function rt(){if(ie){var n=ie,r=fe;if(fe=ie=null,Ie(n),r)for(n=0;n<r.length;n++)Ie(r[n])}}function Bt(n,r){return n(r)}function Qt(){}var Et=!1;function Dn(n,r,l){if(Et)return n(r,l);Et=!0;try{return Bt(n,r,l)}finally{Et=!1,(ie!==null||fe!==null)&&(Qt(),rt())}}function Mn(n,r){var l=n.stateNode;if(l===null)return null;var d=Wa(l);if(d===null)return null;l=d[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(d=!d.disabled)||(n=n.type,d=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!d;break e;default:n=!1}if(n)return null;if(l&&typeof l!="function")throw Error(t(231,r,typeof l));return l}var ms=!1;if(u)try{var ir={};Object.defineProperty(ir,"passive",{get:function(){ms=!0}}),window.addEventListener("test",ir,ir),window.removeEventListener("test",ir,ir)}catch{ms=!1}function Li(n,r,l,d,p,v,E,L,F){var Q=Array.prototype.slice.call(arguments,3);try{r.apply(l,Q)}catch(_e){this.onError(_e)}}var Di=!1,Or=null,Br=!1,rr=null,Ea={onError:function(n){Di=!0,Or=n}};function gs(n,r,l,d,p,v,E,L,F){Di=!1,Or=null,Li.apply(Ea,arguments)}function Ta(n,r,l,d,p,v,E,L,F){if(gs.apply(this,arguments),Di){if(Di){var Q=Or;Di=!1,Or=null}else throw Error(t(198));Br||(Br=!0,rr=Q)}}function xi(n){var r=n,l=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,r.flags&4098&&(l=r.return),n=r.return;while(n)}return r.tag===3?l:null}function Aa(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function wa(n){if(xi(n)!==n)throw Error(t(188))}function Mc(n){var r=n.alternate;if(!r){if(r=xi(n),r===null)throw Error(t(188));return r!==n?null:n}for(var l=n,d=r;;){var p=l.return;if(p===null)break;var v=p.alternate;if(v===null){if(d=p.return,d!==null){l=d;continue}break}if(p.child===v.child){for(v=p.child;v;){if(v===l)return wa(p),n;if(v===d)return wa(p),r;v=v.sibling}throw Error(t(188))}if(l.return!==d.return)l=p,d=v;else{for(var E=!1,L=p.child;L;){if(L===l){E=!0,l=p,d=v;break}if(L===d){E=!0,d=p,l=v;break}L=L.sibling}if(!E){for(L=v.child;L;){if(L===l){E=!0,l=v,d=p;break}if(L===d){E=!0,d=v,l=p;break}L=L.sibling}if(!E)throw Error(t(189))}}if(l.alternate!==d)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?n:r}function Ra(n){return n=Mc(n),n!==null?Ca(n):null}function Ca(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=Ca(n);if(r!==null)return r;n=n.sibling}return null}var w=e.unstable_scheduleCallback,X=e.unstable_cancelCallback,J=e.unstable_shouldYield,te=e.unstable_requestPaint,H=e.unstable_now,ye=e.unstable_getCurrentPriorityLevel,Re=e.unstable_ImmediatePriority,De=e.unstable_UserBlockingPriority,Oe=e.unstable_NormalPriority,et=e.unstable_LowPriority,tt=e.unstable_IdlePriority,je=null,st=null;function At(n){if(st&&typeof st.onCommitFiberRoot=="function")try{st.onCommitFiberRoot(je,n,void 0,(n.current.flags&128)===128)}catch{}}var wt=Math.clz32?Math.clz32:qe,Ht=Math.log,yt=Math.LN2;function qe(n){return n>>>=0,n===0?32:31-(Ht(n)/yt|0)|0}var jt=64,xt=4194304;function cn(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function ri(n,r){var l=n.pendingLanes;if(l===0)return 0;var d=0,p=n.suspendedLanes,v=n.pingedLanes,E=l&268435455;if(E!==0){var L=E&~p;L!==0?d=cn(L):(v&=E,v!==0&&(d=cn(v)))}else E=l&~p,E!==0?d=cn(E):v!==0&&(d=cn(v));if(d===0)return 0;if(r!==0&&r!==d&&!(r&p)&&(p=d&-d,v=r&-r,p>=v||p===16&&(v&4194240)!==0))return r;if(d&4&&(d|=l&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=d;0<r;)l=31-wt(r),p=1<<l,d|=n[l],r&=~p;return d}function En(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function kr(n,r){for(var l=n.suspendedLanes,d=n.pingedLanes,p=n.expirationTimes,v=n.pendingLanes;0<v;){var E=31-wt(v),L=1<<E,F=p[E];F===-1?(!(L&l)||L&d)&&(p[E]=En(L,r)):F<=r&&(n.expiredLanes|=L),v&=~L}}function Nt(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Tn(){var n=jt;return jt<<=1,!(jt&4194240)&&(jt=64),n}function hn(n){for(var r=[],l=0;31>l;l++)r.push(n);return r}function qt(n,r,l){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-wt(r),n[r]=l}function pn(n,r){var l=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var d=n.eventTimes;for(n=n.expirationTimes;0<l;){var p=31-wt(l),v=1<<p;r[p]=0,d[p]=-1,n[p]=-1,l&=~v}}function zr(n,r){var l=n.entangledLanes|=r;for(n=n.entanglements;l;){var d=31-wt(l),p=1<<d;p&r|n[d]&r&&(n[d]|=r),l&=~p}}var mt=0;function Jf(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var eh,Ec,th,nh,ih,Tc=!1,ba=[],sr=null,or=null,ar=null,To=new Map,Ao=new Map,lr=[],z_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function rh(n,r){switch(n){case"focusin":case"focusout":sr=null;break;case"dragenter":case"dragleave":or=null;break;case"mouseover":case"mouseout":ar=null;break;case"pointerover":case"pointerout":To.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ao.delete(r.pointerId)}}function wo(n,r,l,d,p,v){return n===null||n.nativeEvent!==v?(n={blockedOn:r,domEventName:l,eventSystemFlags:d,nativeEvent:v,targetContainers:[p]},r!==null&&(r=zo(r),r!==null&&Ec(r)),n):(n.eventSystemFlags|=d,r=n.targetContainers,p!==null&&r.indexOf(p)===-1&&r.push(p),n)}function H_(n,r,l,d,p){switch(r){case"focusin":return sr=wo(sr,n,r,l,d,p),!0;case"dragenter":return or=wo(or,n,r,l,d,p),!0;case"mouseover":return ar=wo(ar,n,r,l,d,p),!0;case"pointerover":var v=p.pointerId;return To.set(v,wo(To.get(v)||null,n,r,l,d,p)),!0;case"gotpointercapture":return v=p.pointerId,Ao.set(v,wo(Ao.get(v)||null,n,r,l,d,p)),!0}return!1}function sh(n){var r=Hr(n.target);if(r!==null){var l=xi(r);if(l!==null){if(r=l.tag,r===13){if(r=Aa(l),r!==null){n.blockedOn=r,ih(n.priority,function(){th(l)});return}}else if(r===3&&l.stateNode.current.memoizedState.isDehydrated){n.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Pa(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var l=wc(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(l===null){l=n.nativeEvent;var d=new l.constructor(l.type,l);bt=d,l.target.dispatchEvent(d),bt=null}else return r=zo(l),r!==null&&Ec(r),n.blockedOn=l,!1;r.shift()}return!0}function oh(n,r,l){Pa(n)&&l.delete(r)}function V_(){Tc=!1,sr!==null&&Pa(sr)&&(sr=null),or!==null&&Pa(or)&&(or=null),ar!==null&&Pa(ar)&&(ar=null),To.forEach(oh),Ao.forEach(oh)}function Ro(n,r){n.blockedOn===r&&(n.blockedOn=null,Tc||(Tc=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,V_)))}function Co(n){function r(p){return Ro(p,n)}if(0<ba.length){Ro(ba[0],n);for(var l=1;l<ba.length;l++){var d=ba[l];d.blockedOn===n&&(d.blockedOn=null)}}for(sr!==null&&Ro(sr,n),or!==null&&Ro(or,n),ar!==null&&Ro(ar,n),To.forEach(r),Ao.forEach(r),l=0;l<lr.length;l++)d=lr[l],d.blockedOn===n&&(d.blockedOn=null);for(;0<lr.length&&(l=lr[0],l.blockedOn===null);)sh(l),l.blockedOn===null&&lr.shift()}var _s=C.ReactCurrentBatchConfig,Ia=!0;function G_(n,r,l,d){var p=mt,v=_s.transition;_s.transition=null;try{mt=1,Ac(n,r,l,d)}finally{mt=p,_s.transition=v}}function W_(n,r,l,d){var p=mt,v=_s.transition;_s.transition=null;try{mt=4,Ac(n,r,l,d)}finally{mt=p,_s.transition=v}}function Ac(n,r,l,d){if(Ia){var p=wc(n,r,l,d);if(p===null)Gc(n,r,d,La,l),rh(n,d);else if(H_(p,n,r,l,d))d.stopPropagation();else if(rh(n,d),r&4&&-1<z_.indexOf(n)){for(;p!==null;){var v=zo(p);if(v!==null&&eh(v),v=wc(n,r,l,d),v===null&&Gc(n,r,d,La,l),v===p)break;p=v}p!==null&&d.stopPropagation()}else Gc(n,r,d,null,l)}}var La=null;function wc(n,r,l,d){if(La=null,n=W(d),n=Hr(n),n!==null)if(r=xi(n),r===null)n=null;else if(l=r.tag,l===13){if(n=Aa(r),n!==null)return n;n=null}else if(l===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return La=n,null}function ah(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ye()){case Re:return 1;case De:return 4;case Oe:case et:return 16;case tt:return 536870912;default:return 16}default:return 16}}var cr=null,Rc=null,Da=null;function lh(){if(Da)return Da;var n,r=Rc,l=r.length,d,p="value"in cr?cr.value:cr.textContent,v=p.length;for(n=0;n<l&&r[n]===p[n];n++);var E=l-n;for(d=1;d<=E&&r[l-d]===p[v-d];d++);return Da=p.slice(n,1<d?1-d:void 0)}function Na(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function Ua(){return!0}function ch(){return!1}function Hn(n){function r(l,d,p,v,E){this._reactName=l,this._targetInst=p,this.type=d,this.nativeEvent=v,this.target=E,this.currentTarget=null;for(var L in n)n.hasOwnProperty(L)&&(l=n[L],this[L]=l?l(v):v[L]);return this.isDefaultPrevented=(v.defaultPrevented!=null?v.defaultPrevented:v.returnValue===!1)?Ua:ch,this.isPropagationStopped=ch,this}return re(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Ua)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Ua)},persist:function(){},isPersistent:Ua}),r}var vs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Cc=Hn(vs),bo=re({},vs,{view:0,detail:0}),X_=Hn(bo),bc,Pc,Po,Fa=re({},bo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Lc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Po&&(Po&&n.type==="mousemove"?(bc=n.screenX-Po.screenX,Pc=n.screenY-Po.screenY):Pc=bc=0,Po=n),bc)},movementY:function(n){return"movementY"in n?n.movementY:Pc}}),uh=Hn(Fa),j_=re({},Fa,{dataTransfer:0}),Y_=Hn(j_),q_=re({},bo,{relatedTarget:0}),Ic=Hn(q_),K_=re({},vs,{animationName:0,elapsedTime:0,pseudoElement:0}),$_=Hn(K_),Z_=re({},vs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Q_=Hn(Z_),J_=re({},vs,{data:0}),dh=Hn(J_),ev={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},tv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},nv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function iv(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=nv[n])?!!r[n]:!1}function Lc(){return iv}var rv=re({},bo,{key:function(n){if(n.key){var r=ev[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=Na(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?tv[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Lc,charCode:function(n){return n.type==="keypress"?Na(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Na(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),sv=Hn(rv),ov=re({},Fa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fh=Hn(ov),av=re({},bo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Lc}),lv=Hn(av),cv=re({},vs,{propertyName:0,elapsedTime:0,pseudoElement:0}),uv=Hn(cv),dv=re({},Fa,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),fv=Hn(dv),hv=[9,13,27,32],Dc=u&&"CompositionEvent"in window,Io=null;u&&"documentMode"in document&&(Io=document.documentMode);var pv=u&&"TextEvent"in window&&!Io,hh=u&&(!Dc||Io&&8<Io&&11>=Io),ph=" ",mh=!1;function gh(n,r){switch(n){case"keyup":return hv.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _h(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var xs=!1;function mv(n,r){switch(n){case"compositionend":return _h(r);case"keypress":return r.which!==32?null:(mh=!0,ph);case"textInput":return n=r.data,n===ph&&mh?null:n;default:return null}}function gv(n,r){if(xs)return n==="compositionend"||!Dc&&gh(n,r)?(n=lh(),Da=Rc=cr=null,xs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return hh&&r.locale!=="ko"?null:r.data;default:return null}}var _v={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function vh(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!_v[n.type]:r==="textarea"}function xh(n,r,l,d){Pe(d),r=Ha(r,"onChange"),0<r.length&&(l=new Cc("onChange","change",null,l,d),n.push({event:l,listeners:r}))}var Lo=null,Do=null;function vv(n){Oh(n,0)}function Oa(n){var r=Ts(n);if(vt(r))return n}function xv(n,r){if(n==="change")return r}var yh=!1;if(u){var Nc;if(u){var Uc="oninput"in document;if(!Uc){var Sh=document.createElement("div");Sh.setAttribute("oninput","return;"),Uc=typeof Sh.oninput=="function"}Nc=Uc}else Nc=!1;yh=Nc&&(!document.documentMode||9<document.documentMode)}function Mh(){Lo&&(Lo.detachEvent("onpropertychange",Eh),Do=Lo=null)}function Eh(n){if(n.propertyName==="value"&&Oa(Do)){var r=[];xh(r,Do,n,W(n)),Dn(vv,r)}}function yv(n,r,l){n==="focusin"?(Mh(),Lo=r,Do=l,Lo.attachEvent("onpropertychange",Eh)):n==="focusout"&&Mh()}function Sv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Oa(Do)}function Mv(n,r){if(n==="click")return Oa(r)}function Ev(n,r){if(n==="input"||n==="change")return Oa(r)}function Tv(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var si=typeof Object.is=="function"?Object.is:Tv;function No(n,r){if(si(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var l=Object.keys(n),d=Object.keys(r);if(l.length!==d.length)return!1;for(d=0;d<l.length;d++){var p=l[d];if(!f.call(r,p)||!si(n[p],r[p]))return!1}return!0}function Th(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Ah(n,r){var l=Th(n);n=0;for(var d;l;){if(l.nodeType===3){if(d=n+l.textContent.length,n<=r&&d>=r)return{node:l,offset:r-n};n=d}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=Th(l)}}function wh(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?wh(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function Rh(){for(var n=window,r=Ft();r instanceof n.HTMLIFrameElement;){try{var l=typeof r.contentWindow.location.href=="string"}catch{l=!1}if(l)n=r.contentWindow;else break;r=Ft(n.document)}return r}function Fc(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function Av(n){var r=Rh(),l=n.focusedElem,d=n.selectionRange;if(r!==l&&l&&l.ownerDocument&&wh(l.ownerDocument.documentElement,l)){if(d!==null&&Fc(l)){if(r=d.start,n=d.end,n===void 0&&(n=r),"selectionStart"in l)l.selectionStart=r,l.selectionEnd=Math.min(n,l.value.length);else if(n=(r=l.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var p=l.textContent.length,v=Math.min(d.start,p);d=d.end===void 0?v:Math.min(d.end,p),!n.extend&&v>d&&(p=d,d=v,v=p),p=Ah(l,v);var E=Ah(l,d);p&&E&&(n.rangeCount!==1||n.anchorNode!==p.node||n.anchorOffset!==p.offset||n.focusNode!==E.node||n.focusOffset!==E.offset)&&(r=r.createRange(),r.setStart(p.node,p.offset),n.removeAllRanges(),v>d?(n.addRange(r),n.extend(E.node,E.offset)):(r.setEnd(E.node,E.offset),n.addRange(r)))}}for(r=[],n=l;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<r.length;l++)n=r[l],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var wv=u&&"documentMode"in document&&11>=document.documentMode,ys=null,Oc=null,Uo=null,Bc=!1;function Ch(n,r,l){var d=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Bc||ys==null||ys!==Ft(d)||(d=ys,"selectionStart"in d&&Fc(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),Uo&&No(Uo,d)||(Uo=d,d=Ha(Oc,"onSelect"),0<d.length&&(r=new Cc("onSelect","select",null,r,l),n.push({event:r,listeners:d}),r.target=ys)))}function Ba(n,r){var l={};return l[n.toLowerCase()]=r.toLowerCase(),l["Webkit"+n]="webkit"+r,l["Moz"+n]="moz"+r,l}var Ss={animationend:Ba("Animation","AnimationEnd"),animationiteration:Ba("Animation","AnimationIteration"),animationstart:Ba("Animation","AnimationStart"),transitionend:Ba("Transition","TransitionEnd")},kc={},bh={};u&&(bh=document.createElement("div").style,"AnimationEvent"in window||(delete Ss.animationend.animation,delete Ss.animationiteration.animation,delete Ss.animationstart.animation),"TransitionEvent"in window||delete Ss.transitionend.transition);function ka(n){if(kc[n])return kc[n];if(!Ss[n])return n;var r=Ss[n],l;for(l in r)if(r.hasOwnProperty(l)&&l in bh)return kc[n]=r[l];return n}var Ph=ka("animationend"),Ih=ka("animationiteration"),Lh=ka("animationstart"),Dh=ka("transitionend"),Nh=new Map,Uh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ur(n,r){Nh.set(n,r),a(r,[n])}for(var zc=0;zc<Uh.length;zc++){var Hc=Uh[zc],Rv=Hc.toLowerCase(),Cv=Hc[0].toUpperCase()+Hc.slice(1);ur(Rv,"on"+Cv)}ur(Ph,"onAnimationEnd"),ur(Ih,"onAnimationIteration"),ur(Lh,"onAnimationStart"),ur("dblclick","onDoubleClick"),ur("focusin","onFocus"),ur("focusout","onBlur"),ur(Dh,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Fo));function Fh(n,r,l){var d=n.type||"unknown-event";n.currentTarget=l,Ta(d,r,void 0,n),n.currentTarget=null}function Oh(n,r){r=(r&4)!==0;for(var l=0;l<n.length;l++){var d=n[l],p=d.event;d=d.listeners;e:{var v=void 0;if(r)for(var E=d.length-1;0<=E;E--){var L=d[E],F=L.instance,Q=L.currentTarget;if(L=L.listener,F!==v&&p.isPropagationStopped())break e;Fh(p,L,Q),v=F}else for(E=0;E<d.length;E++){if(L=d[E],F=L.instance,Q=L.currentTarget,L=L.listener,F!==v&&p.isPropagationStopped())break e;Fh(p,L,Q),v=F}}}if(Br)throw n=rr,Br=!1,rr=null,n}function kt(n,r){var l=r[Kc];l===void 0&&(l=r[Kc]=new Set);var d=n+"__bubble";l.has(d)||(Bh(r,n,2,!1),l.add(d))}function Vc(n,r,l){var d=0;r&&(d|=4),Bh(l,n,d,r)}var za="_reactListening"+Math.random().toString(36).slice(2);function Oo(n){if(!n[za]){n[za]=!0,i.forEach(function(l){l!=="selectionchange"&&(bv.has(l)||Vc(l,!1,n),Vc(l,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[za]||(r[za]=!0,Vc("selectionchange",!1,r))}}function Bh(n,r,l,d){switch(ah(r)){case 1:var p=G_;break;case 4:p=W_;break;default:p=Ac}l=p.bind(null,r,l,n),p=void 0,!ms||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(p=!0),d?p!==void 0?n.addEventListener(r,l,{capture:!0,passive:p}):n.addEventListener(r,l,!0):p!==void 0?n.addEventListener(r,l,{passive:p}):n.addEventListener(r,l,!1)}function Gc(n,r,l,d,p){var v=d;if(!(r&1)&&!(r&2)&&d!==null)e:for(;;){if(d===null)return;var E=d.tag;if(E===3||E===4){var L=d.stateNode.containerInfo;if(L===p||L.nodeType===8&&L.parentNode===p)break;if(E===4)for(E=d.return;E!==null;){var F=E.tag;if((F===3||F===4)&&(F=E.stateNode.containerInfo,F===p||F.nodeType===8&&F.parentNode===p))return;E=E.return}for(;L!==null;){if(E=Hr(L),E===null)return;if(F=E.tag,F===5||F===6){d=v=E;continue e}L=L.parentNode}}d=d.return}Dn(function(){var Q=v,_e=W(l),xe=[];e:{var me=Nh.get(n);if(me!==void 0){var Le=Cc,He=n;switch(n){case"keypress":if(Na(l)===0)break e;case"keydown":case"keyup":Le=sv;break;case"focusin":He="focus",Le=Ic;break;case"focusout":He="blur",Le=Ic;break;case"beforeblur":case"afterblur":Le=Ic;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Le=uh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Le=Y_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Le=lv;break;case Ph:case Ih:case Lh:Le=$_;break;case Dh:Le=uv;break;case"scroll":Le=X_;break;case"wheel":Le=fv;break;case"copy":case"cut":case"paste":Le=Q_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Le=fh}var Ve=(r&4)!==0,Kt=!Ve&&n==="scroll",q=Ve?me!==null?me+"Capture":null:me;Ve=[];for(var V=Q,K;V!==null;){K=V;var Ee=K.stateNode;if(K.tag===5&&Ee!==null&&(K=Ee,q!==null&&(Ee=Mn(V,q),Ee!=null&&Ve.push(Bo(V,Ee,K)))),Kt)break;V=V.return}0<Ve.length&&(me=new Le(me,He,null,l,_e),xe.push({event:me,listeners:Ve}))}}if(!(r&7)){e:{if(me=n==="mouseover"||n==="pointerover",Le=n==="mouseout"||n==="pointerout",me&&l!==bt&&(He=l.relatedTarget||l.fromElement)&&(Hr(He)||He[Ni]))break e;if((Le||me)&&(me=_e.window===_e?_e:(me=_e.ownerDocument)?me.defaultView||me.parentWindow:window,Le?(He=l.relatedTarget||l.toElement,Le=Q,He=He?Hr(He):null,He!==null&&(Kt=xi(He),He!==Kt||He.tag!==5&&He.tag!==6)&&(He=null)):(Le=null,He=Q),Le!==He)){if(Ve=uh,Ee="onMouseLeave",q="onMouseEnter",V="mouse",(n==="pointerout"||n==="pointerover")&&(Ve=fh,Ee="onPointerLeave",q="onPointerEnter",V="pointer"),Kt=Le==null?me:Ts(Le),K=He==null?me:Ts(He),me=new Ve(Ee,V+"leave",Le,l,_e),me.target=Kt,me.relatedTarget=K,Ee=null,Hr(_e)===Q&&(Ve=new Ve(q,V+"enter",He,l,_e),Ve.target=K,Ve.relatedTarget=Kt,Ee=Ve),Kt=Ee,Le&&He)t:{for(Ve=Le,q=He,V=0,K=Ve;K;K=Ms(K))V++;for(K=0,Ee=q;Ee;Ee=Ms(Ee))K++;for(;0<V-K;)Ve=Ms(Ve),V--;for(;0<K-V;)q=Ms(q),K--;for(;V--;){if(Ve===q||q!==null&&Ve===q.alternate)break t;Ve=Ms(Ve),q=Ms(q)}Ve=null}else Ve=null;Le!==null&&kh(xe,me,Le,Ve,!1),He!==null&&Kt!==null&&kh(xe,Kt,He,Ve,!0)}}e:{if(me=Q?Ts(Q):window,Le=me.nodeName&&me.nodeName.toLowerCase(),Le==="select"||Le==="input"&&me.type==="file")var We=xv;else if(vh(me))if(yh)We=Ev;else{We=Sv;var $e=yv}else(Le=me.nodeName)&&Le.toLowerCase()==="input"&&(me.type==="checkbox"||me.type==="radio")&&(We=Mv);if(We&&(We=We(n,Q))){xh(xe,We,l,_e);break e}$e&&$e(n,me,Q),n==="focusout"&&($e=me._wrapperState)&&$e.controlled&&me.type==="number"&&It(me,"number",me.value)}switch($e=Q?Ts(Q):window,n){case"focusin":(vh($e)||$e.contentEditable==="true")&&(ys=$e,Oc=Q,Uo=null);break;case"focusout":Uo=Oc=ys=null;break;case"mousedown":Bc=!0;break;case"contextmenu":case"mouseup":case"dragend":Bc=!1,Ch(xe,l,_e);break;case"selectionchange":if(wv)break;case"keydown":case"keyup":Ch(xe,l,_e)}var Ze;if(Dc)e:{switch(n){case"compositionstart":var nt="onCompositionStart";break e;case"compositionend":nt="onCompositionEnd";break e;case"compositionupdate":nt="onCompositionUpdate";break e}nt=void 0}else xs?gh(n,l)&&(nt="onCompositionEnd"):n==="keydown"&&l.keyCode===229&&(nt="onCompositionStart");nt&&(hh&&l.locale!=="ko"&&(xs||nt!=="onCompositionStart"?nt==="onCompositionEnd"&&xs&&(Ze=lh()):(cr=_e,Rc="value"in cr?cr.value:cr.textContent,xs=!0)),$e=Ha(Q,nt),0<$e.length&&(nt=new dh(nt,n,null,l,_e),xe.push({event:nt,listeners:$e}),Ze?nt.data=Ze:(Ze=_h(l),Ze!==null&&(nt.data=Ze)))),(Ze=pv?mv(n,l):gv(n,l))&&(Q=Ha(Q,"onBeforeInput"),0<Q.length&&(_e=new dh("onBeforeInput","beforeinput",null,l,_e),xe.push({event:_e,listeners:Q}),_e.data=Ze))}Oh(xe,r)})}function Bo(n,r,l){return{instance:n,listener:r,currentTarget:l}}function Ha(n,r){for(var l=r+"Capture",d=[];n!==null;){var p=n,v=p.stateNode;p.tag===5&&v!==null&&(p=v,v=Mn(n,l),v!=null&&d.unshift(Bo(n,v,p)),v=Mn(n,r),v!=null&&d.push(Bo(n,v,p))),n=n.return}return d}function Ms(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function kh(n,r,l,d,p){for(var v=r._reactName,E=[];l!==null&&l!==d;){var L=l,F=L.alternate,Q=L.stateNode;if(F!==null&&F===d)break;L.tag===5&&Q!==null&&(L=Q,p?(F=Mn(l,v),F!=null&&E.unshift(Bo(l,F,L))):p||(F=Mn(l,v),F!=null&&E.push(Bo(l,F,L)))),l=l.return}E.length!==0&&n.push({event:r,listeners:E})}var Pv=/\r\n?/g,Iv=/\u0000|\uFFFD/g;function zh(n){return(typeof n=="string"?n:""+n).replace(Pv,`
`).replace(Iv,"")}function Va(n,r,l){if(r=zh(r),zh(n)!==r&&l)throw Error(t(425))}function Ga(){}var Wc=null,Xc=null;function jc(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Yc=typeof setTimeout=="function"?setTimeout:void 0,Lv=typeof clearTimeout=="function"?clearTimeout:void 0,Hh=typeof Promise=="function"?Promise:void 0,Dv=typeof queueMicrotask=="function"?queueMicrotask:typeof Hh<"u"?function(n){return Hh.resolve(null).then(n).catch(Nv)}:Yc;function Nv(n){setTimeout(function(){throw n})}function qc(n,r){var l=r,d=0;do{var p=l.nextSibling;if(n.removeChild(l),p&&p.nodeType===8)if(l=p.data,l==="/$"){if(d===0){n.removeChild(p),Co(r);return}d--}else l!=="$"&&l!=="$?"&&l!=="$!"||d++;l=p}while(l);Co(r)}function dr(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function Vh(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var l=n.data;if(l==="$"||l==="$!"||l==="$?"){if(r===0)return n;r--}else l==="/$"&&r++}n=n.previousSibling}return null}var Es=Math.random().toString(36).slice(2),yi="__reactFiber$"+Es,ko="__reactProps$"+Es,Ni="__reactContainer$"+Es,Kc="__reactEvents$"+Es,Uv="__reactListeners$"+Es,Fv="__reactHandles$"+Es;function Hr(n){var r=n[yi];if(r)return r;for(var l=n.parentNode;l;){if(r=l[Ni]||l[yi]){if(l=r.alternate,r.child!==null||l!==null&&l.child!==null)for(n=Vh(n);n!==null;){if(l=n[yi])return l;n=Vh(n)}return r}n=l,l=n.parentNode}return null}function zo(n){return n=n[yi]||n[Ni],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ts(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Wa(n){return n[ko]||null}var $c=[],As=-1;function fr(n){return{current:n}}function zt(n){0>As||(n.current=$c[As],$c[As]=null,As--)}function Ot(n,r){As++,$c[As]=n.current,n.current=r}var hr={},mn=fr(hr),Nn=fr(!1),Vr=hr;function ws(n,r){var l=n.type.contextTypes;if(!l)return hr;var d=n.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===r)return d.__reactInternalMemoizedMaskedChildContext;var p={},v;for(v in l)p[v]=r[v];return d&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=p),p}function Un(n){return n=n.childContextTypes,n!=null}function Xa(){zt(Nn),zt(mn)}function Gh(n,r,l){if(mn.current!==hr)throw Error(t(168));Ot(mn,r),Ot(Nn,l)}function Wh(n,r,l){var d=n.stateNode;if(r=r.childContextTypes,typeof d.getChildContext!="function")return l;d=d.getChildContext();for(var p in d)if(!(p in r))throw Error(t(108,ve(n)||"Unknown",p));return re({},l,d)}function ja(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||hr,Vr=mn.current,Ot(mn,n),Ot(Nn,Nn.current),!0}function Xh(n,r,l){var d=n.stateNode;if(!d)throw Error(t(169));l?(n=Wh(n,r,Vr),d.__reactInternalMemoizedMergedChildContext=n,zt(Nn),zt(mn),Ot(mn,n)):zt(Nn),Ot(Nn,l)}var Ui=null,Ya=!1,Zc=!1;function jh(n){Ui===null?Ui=[n]:Ui.push(n)}function Ov(n){Ya=!0,jh(n)}function pr(){if(!Zc&&Ui!==null){Zc=!0;var n=0,r=mt;try{var l=Ui;for(mt=1;n<l.length;n++){var d=l[n];do d=d(!0);while(d!==null)}Ui=null,Ya=!1}catch(p){throw Ui!==null&&(Ui=Ui.slice(n+1)),w(Re,pr),p}finally{mt=r,Zc=!1}}return null}var Rs=[],Cs=0,qa=null,Ka=0,Kn=[],$n=0,Gr=null,Fi=1,Oi="";function Wr(n,r){Rs[Cs++]=Ka,Rs[Cs++]=qa,qa=n,Ka=r}function Yh(n,r,l){Kn[$n++]=Fi,Kn[$n++]=Oi,Kn[$n++]=Gr,Gr=n;var d=Fi;n=Oi;var p=32-wt(d)-1;d&=~(1<<p),l+=1;var v=32-wt(r)+p;if(30<v){var E=p-p%5;v=(d&(1<<E)-1).toString(32),d>>=E,p-=E,Fi=1<<32-wt(r)+p|l<<p|d,Oi=v+n}else Fi=1<<v|l<<p|d,Oi=n}function Qc(n){n.return!==null&&(Wr(n,1),Yh(n,1,0))}function Jc(n){for(;n===qa;)qa=Rs[--Cs],Rs[Cs]=null,Ka=Rs[--Cs],Rs[Cs]=null;for(;n===Gr;)Gr=Kn[--$n],Kn[$n]=null,Oi=Kn[--$n],Kn[$n]=null,Fi=Kn[--$n],Kn[$n]=null}var Vn=null,Gn=null,Vt=!1,oi=null;function qh(n,r){var l=ei(5,null,null,0);l.elementType="DELETED",l.stateNode=r,l.return=n,r=n.deletions,r===null?(n.deletions=[l],n.flags|=16):r.push(l)}function Kh(n,r){switch(n.tag){case 5:var l=n.type;return r=r.nodeType!==1||l.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,Vn=n,Gn=dr(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,Vn=n,Gn=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(l=Gr!==null?{id:Fi,overflow:Oi}:null,n.memoizedState={dehydrated:r,treeContext:l,retryLane:1073741824},l=ei(18,null,null,0),l.stateNode=r,l.return=n,n.child=l,Vn=n,Gn=null,!0):!1;default:return!1}}function eu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function tu(n){if(Vt){var r=Gn;if(r){var l=r;if(!Kh(n,r)){if(eu(n))throw Error(t(418));r=dr(l.nextSibling);var d=Vn;r&&Kh(n,r)?qh(d,l):(n.flags=n.flags&-4097|2,Vt=!1,Vn=n)}}else{if(eu(n))throw Error(t(418));n.flags=n.flags&-4097|2,Vt=!1,Vn=n}}}function $h(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Vn=n}function $a(n){if(n!==Vn)return!1;if(!Vt)return $h(n),Vt=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!jc(n.type,n.memoizedProps)),r&&(r=Gn)){if(eu(n))throw Zh(),Error(t(418));for(;r;)qh(n,r),r=dr(r.nextSibling)}if($h(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var l=n.data;if(l==="/$"){if(r===0){Gn=dr(n.nextSibling);break e}r--}else l!=="$"&&l!=="$!"&&l!=="$?"||r++}n=n.nextSibling}Gn=null}}else Gn=Vn?dr(n.stateNode.nextSibling):null;return!0}function Zh(){for(var n=Gn;n;)n=dr(n.nextSibling)}function bs(){Gn=Vn=null,Vt=!1}function nu(n){oi===null?oi=[n]:oi.push(n)}var Bv=C.ReactCurrentBatchConfig;function Ho(n,r,l){if(n=l.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var d=l.stateNode}if(!d)throw Error(t(147,n));var p=d,v=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===v?r.ref:(r=function(E){var L=p.refs;E===null?delete L[v]:L[v]=E},r._stringRef=v,r)}if(typeof n!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,n))}return n}function Za(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function Qh(n){var r=n._init;return r(n._payload)}function Jh(n){function r(q,V){if(n){var K=q.deletions;K===null?(q.deletions=[V],q.flags|=16):K.push(V)}}function l(q,V){if(!n)return null;for(;V!==null;)r(q,V),V=V.sibling;return null}function d(q,V){for(q=new Map;V!==null;)V.key!==null?q.set(V.key,V):q.set(V.index,V),V=V.sibling;return q}function p(q,V){return q=Mr(q,V),q.index=0,q.sibling=null,q}function v(q,V,K){return q.index=K,n?(K=q.alternate,K!==null?(K=K.index,K<V?(q.flags|=2,V):K):(q.flags|=2,V)):(q.flags|=1048576,V)}function E(q){return n&&q.alternate===null&&(q.flags|=2),q}function L(q,V,K,Ee){return V===null||V.tag!==6?(V=Yu(K,q.mode,Ee),V.return=q,V):(V=p(V,K),V.return=q,V)}function F(q,V,K,Ee){var We=K.type;return We===U?_e(q,V,K.props.children,Ee,K.key):V!==null&&(V.elementType===We||typeof We=="object"&&We!==null&&We.$$typeof===se&&Qh(We)===V.type)?(Ee=p(V,K.props),Ee.ref=Ho(q,V,K),Ee.return=q,Ee):(Ee=Sl(K.type,K.key,K.props,null,q.mode,Ee),Ee.ref=Ho(q,V,K),Ee.return=q,Ee)}function Q(q,V,K,Ee){return V===null||V.tag!==4||V.stateNode.containerInfo!==K.containerInfo||V.stateNode.implementation!==K.implementation?(V=qu(K,q.mode,Ee),V.return=q,V):(V=p(V,K.children||[]),V.return=q,V)}function _e(q,V,K,Ee,We){return V===null||V.tag!==7?(V=Qr(K,q.mode,Ee,We),V.return=q,V):(V=p(V,K),V.return=q,V)}function xe(q,V,K){if(typeof V=="string"&&V!==""||typeof V=="number")return V=Yu(""+V,q.mode,K),V.return=q,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case G:return K=Sl(V.type,V.key,V.props,null,q.mode,K),K.ref=Ho(q,null,V),K.return=q,K;case O:return V=qu(V,q.mode,K),V.return=q,V;case se:var Ee=V._init;return xe(q,Ee(V._payload),K)}if(Xe(V)||ae(V))return V=Qr(V,q.mode,K,null),V.return=q,V;Za(q,V)}return null}function me(q,V,K,Ee){var We=V!==null?V.key:null;if(typeof K=="string"&&K!==""||typeof K=="number")return We!==null?null:L(q,V,""+K,Ee);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case G:return K.key===We?F(q,V,K,Ee):null;case O:return K.key===We?Q(q,V,K,Ee):null;case se:return We=K._init,me(q,V,We(K._payload),Ee)}if(Xe(K)||ae(K))return We!==null?null:_e(q,V,K,Ee,null);Za(q,K)}return null}function Le(q,V,K,Ee,We){if(typeof Ee=="string"&&Ee!==""||typeof Ee=="number")return q=q.get(K)||null,L(V,q,""+Ee,We);if(typeof Ee=="object"&&Ee!==null){switch(Ee.$$typeof){case G:return q=q.get(Ee.key===null?K:Ee.key)||null,F(V,q,Ee,We);case O:return q=q.get(Ee.key===null?K:Ee.key)||null,Q(V,q,Ee,We);case se:var $e=Ee._init;return Le(q,V,K,$e(Ee._payload),We)}if(Xe(Ee)||ae(Ee))return q=q.get(K)||null,_e(V,q,Ee,We,null);Za(V,Ee)}return null}function He(q,V,K,Ee){for(var We=null,$e=null,Ze=V,nt=V=0,on=null;Ze!==null&&nt<K.length;nt++){Ze.index>nt?(on=Ze,Ze=null):on=Ze.sibling;var Rt=me(q,Ze,K[nt],Ee);if(Rt===null){Ze===null&&(Ze=on);break}n&&Ze&&Rt.alternate===null&&r(q,Ze),V=v(Rt,V,nt),$e===null?We=Rt:$e.sibling=Rt,$e=Rt,Ze=on}if(nt===K.length)return l(q,Ze),Vt&&Wr(q,nt),We;if(Ze===null){for(;nt<K.length;nt++)Ze=xe(q,K[nt],Ee),Ze!==null&&(V=v(Ze,V,nt),$e===null?We=Ze:$e.sibling=Ze,$e=Ze);return Vt&&Wr(q,nt),We}for(Ze=d(q,Ze);nt<K.length;nt++)on=Le(Ze,q,nt,K[nt],Ee),on!==null&&(n&&on.alternate!==null&&Ze.delete(on.key===null?nt:on.key),V=v(on,V,nt),$e===null?We=on:$e.sibling=on,$e=on);return n&&Ze.forEach(function(Er){return r(q,Er)}),Vt&&Wr(q,nt),We}function Ve(q,V,K,Ee){var We=ae(K);if(typeof We!="function")throw Error(t(150));if(K=We.call(K),K==null)throw Error(t(151));for(var $e=We=null,Ze=V,nt=V=0,on=null,Rt=K.next();Ze!==null&&!Rt.done;nt++,Rt=K.next()){Ze.index>nt?(on=Ze,Ze=null):on=Ze.sibling;var Er=me(q,Ze,Rt.value,Ee);if(Er===null){Ze===null&&(Ze=on);break}n&&Ze&&Er.alternate===null&&r(q,Ze),V=v(Er,V,nt),$e===null?We=Er:$e.sibling=Er,$e=Er,Ze=on}if(Rt.done)return l(q,Ze),Vt&&Wr(q,nt),We;if(Ze===null){for(;!Rt.done;nt++,Rt=K.next())Rt=xe(q,Rt.value,Ee),Rt!==null&&(V=v(Rt,V,nt),$e===null?We=Rt:$e.sibling=Rt,$e=Rt);return Vt&&Wr(q,nt),We}for(Ze=d(q,Ze);!Rt.done;nt++,Rt=K.next())Rt=Le(Ze,q,nt,Rt.value,Ee),Rt!==null&&(n&&Rt.alternate!==null&&Ze.delete(Rt.key===null?nt:Rt.key),V=v(Rt,V,nt),$e===null?We=Rt:$e.sibling=Rt,$e=Rt);return n&&Ze.forEach(function(_0){return r(q,_0)}),Vt&&Wr(q,nt),We}function Kt(q,V,K,Ee){if(typeof K=="object"&&K!==null&&K.type===U&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case G:e:{for(var We=K.key,$e=V;$e!==null;){if($e.key===We){if(We=K.type,We===U){if($e.tag===7){l(q,$e.sibling),V=p($e,K.props.children),V.return=q,q=V;break e}}else if($e.elementType===We||typeof We=="object"&&We!==null&&We.$$typeof===se&&Qh(We)===$e.type){l(q,$e.sibling),V=p($e,K.props),V.ref=Ho(q,$e,K),V.return=q,q=V;break e}l(q,$e);break}else r(q,$e);$e=$e.sibling}K.type===U?(V=Qr(K.props.children,q.mode,Ee,K.key),V.return=q,q=V):(Ee=Sl(K.type,K.key,K.props,null,q.mode,Ee),Ee.ref=Ho(q,V,K),Ee.return=q,q=Ee)}return E(q);case O:e:{for($e=K.key;V!==null;){if(V.key===$e)if(V.tag===4&&V.stateNode.containerInfo===K.containerInfo&&V.stateNode.implementation===K.implementation){l(q,V.sibling),V=p(V,K.children||[]),V.return=q,q=V;break e}else{l(q,V);break}else r(q,V);V=V.sibling}V=qu(K,q.mode,Ee),V.return=q,q=V}return E(q);case se:return $e=K._init,Kt(q,V,$e(K._payload),Ee)}if(Xe(K))return He(q,V,K,Ee);if(ae(K))return Ve(q,V,K,Ee);Za(q,K)}return typeof K=="string"&&K!==""||typeof K=="number"?(K=""+K,V!==null&&V.tag===6?(l(q,V.sibling),V=p(V,K),V.return=q,q=V):(l(q,V),V=Yu(K,q.mode,Ee),V.return=q,q=V),E(q)):l(q,V)}return Kt}var Ps=Jh(!0),ep=Jh(!1),Qa=fr(null),Ja=null,Is=null,iu=null;function ru(){iu=Is=Ja=null}function su(n){var r=Qa.current;zt(Qa),n._currentValue=r}function ou(n,r,l){for(;n!==null;){var d=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,d!==null&&(d.childLanes|=r)):d!==null&&(d.childLanes&r)!==r&&(d.childLanes|=r),n===l)break;n=n.return}}function Ls(n,r){Ja=n,iu=Is=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&r&&(Fn=!0),n.firstContext=null)}function Zn(n){var r=n._currentValue;if(iu!==n)if(n={context:n,memoizedValue:r,next:null},Is===null){if(Ja===null)throw Error(t(308));Is=n,Ja.dependencies={lanes:0,firstContext:n}}else Is=Is.next=n;return r}var Xr=null;function au(n){Xr===null?Xr=[n]:Xr.push(n)}function tp(n,r,l,d){var p=r.interleaved;return p===null?(l.next=l,au(r)):(l.next=p.next,p.next=l),r.interleaved=l,Bi(n,d)}function Bi(n,r){n.lanes|=r;var l=n.alternate;for(l!==null&&(l.lanes|=r),l=n,n=n.return;n!==null;)n.childLanes|=r,l=n.alternate,l!==null&&(l.childLanes|=r),l=n,n=n.return;return l.tag===3?l.stateNode:null}var mr=!1;function lu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function np(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function ki(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function gr(n,r,l){var d=n.updateQueue;if(d===null)return null;if(d=d.shared,Tt&2){var p=d.pending;return p===null?r.next=r:(r.next=p.next,p.next=r),d.pending=r,Bi(n,l)}return p=d.interleaved,p===null?(r.next=r,au(d)):(r.next=p.next,p.next=r),d.interleaved=r,Bi(n,l)}function el(n,r,l){if(r=r.updateQueue,r!==null&&(r=r.shared,(l&4194240)!==0)){var d=r.lanes;d&=n.pendingLanes,l|=d,r.lanes=l,zr(n,l)}}function ip(n,r){var l=n.updateQueue,d=n.alternate;if(d!==null&&(d=d.updateQueue,l===d)){var p=null,v=null;if(l=l.firstBaseUpdate,l!==null){do{var E={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};v===null?p=v=E:v=v.next=E,l=l.next}while(l!==null);v===null?p=v=r:v=v.next=r}else p=v=r;l={baseState:d.baseState,firstBaseUpdate:p,lastBaseUpdate:v,shared:d.shared,effects:d.effects},n.updateQueue=l;return}n=l.lastBaseUpdate,n===null?l.firstBaseUpdate=r:n.next=r,l.lastBaseUpdate=r}function tl(n,r,l,d){var p=n.updateQueue;mr=!1;var v=p.firstBaseUpdate,E=p.lastBaseUpdate,L=p.shared.pending;if(L!==null){p.shared.pending=null;var F=L,Q=F.next;F.next=null,E===null?v=Q:E.next=Q,E=F;var _e=n.alternate;_e!==null&&(_e=_e.updateQueue,L=_e.lastBaseUpdate,L!==E&&(L===null?_e.firstBaseUpdate=Q:L.next=Q,_e.lastBaseUpdate=F))}if(v!==null){var xe=p.baseState;E=0,_e=Q=F=null,L=v;do{var me=L.lane,Le=L.eventTime;if((d&me)===me){_e!==null&&(_e=_e.next={eventTime:Le,lane:0,tag:L.tag,payload:L.payload,callback:L.callback,next:null});e:{var He=n,Ve=L;switch(me=r,Le=l,Ve.tag){case 1:if(He=Ve.payload,typeof He=="function"){xe=He.call(Le,xe,me);break e}xe=He;break e;case 3:He.flags=He.flags&-65537|128;case 0:if(He=Ve.payload,me=typeof He=="function"?He.call(Le,xe,me):He,me==null)break e;xe=re({},xe,me);break e;case 2:mr=!0}}L.callback!==null&&L.lane!==0&&(n.flags|=64,me=p.effects,me===null?p.effects=[L]:me.push(L))}else Le={eventTime:Le,lane:me,tag:L.tag,payload:L.payload,callback:L.callback,next:null},_e===null?(Q=_e=Le,F=xe):_e=_e.next=Le,E|=me;if(L=L.next,L===null){if(L=p.shared.pending,L===null)break;me=L,L=me.next,me.next=null,p.lastBaseUpdate=me,p.shared.pending=null}}while(!0);if(_e===null&&(F=xe),p.baseState=F,p.firstBaseUpdate=Q,p.lastBaseUpdate=_e,r=p.shared.interleaved,r!==null){p=r;do E|=p.lane,p=p.next;while(p!==r)}else v===null&&(p.shared.lanes=0);qr|=E,n.lanes=E,n.memoizedState=xe}}function rp(n,r,l){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var d=n[r],p=d.callback;if(p!==null){if(d.callback=null,d=l,typeof p!="function")throw Error(t(191,p));p.call(d)}}}var Vo={},Si=fr(Vo),Go=fr(Vo),Wo=fr(Vo);function jr(n){if(n===Vo)throw Error(t(174));return n}function cu(n,r){switch(Ot(Wo,r),Ot(Go,n),Ot(Si,Vo),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:Ge(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=Ge(r,n)}zt(Si),Ot(Si,r)}function Ds(){zt(Si),zt(Go),zt(Wo)}function sp(n){jr(Wo.current);var r=jr(Si.current),l=Ge(r,n.type);r!==l&&(Ot(Go,n),Ot(Si,l))}function uu(n){Go.current===n&&(zt(Si),zt(Go))}var Gt=fr(0);function nl(n){for(var r=n;r!==null;){if(r.tag===13){var l=r.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if(r.flags&128)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var du=[];function fu(){for(var n=0;n<du.length;n++)du[n]._workInProgressVersionPrimary=null;du.length=0}var il=C.ReactCurrentDispatcher,hu=C.ReactCurrentBatchConfig,Yr=0,Wt=null,Jt=null,rn=null,rl=!1,Xo=!1,jo=0,kv=0;function gn(){throw Error(t(321))}function pu(n,r){if(r===null)return!1;for(var l=0;l<r.length&&l<n.length;l++)if(!si(n[l],r[l]))return!1;return!0}function mu(n,r,l,d,p,v){if(Yr=v,Wt=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,il.current=n===null||n.memoizedState===null?Gv:Wv,n=l(d,p),Xo){v=0;do{if(Xo=!1,jo=0,25<=v)throw Error(t(301));v+=1,rn=Jt=null,r.updateQueue=null,il.current=Xv,n=l(d,p)}while(Xo)}if(il.current=al,r=Jt!==null&&Jt.next!==null,Yr=0,rn=Jt=Wt=null,rl=!1,r)throw Error(t(300));return n}function gu(){var n=jo!==0;return jo=0,n}function Mi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return rn===null?Wt.memoizedState=rn=n:rn=rn.next=n,rn}function Qn(){if(Jt===null){var n=Wt.alternate;n=n!==null?n.memoizedState:null}else n=Jt.next;var r=rn===null?Wt.memoizedState:rn.next;if(r!==null)rn=r,Jt=n;else{if(n===null)throw Error(t(310));Jt=n,n={memoizedState:Jt.memoizedState,baseState:Jt.baseState,baseQueue:Jt.baseQueue,queue:Jt.queue,next:null},rn===null?Wt.memoizedState=rn=n:rn=rn.next=n}return rn}function Yo(n,r){return typeof r=="function"?r(n):r}function _u(n){var r=Qn(),l=r.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var d=Jt,p=d.baseQueue,v=l.pending;if(v!==null){if(p!==null){var E=p.next;p.next=v.next,v.next=E}d.baseQueue=p=v,l.pending=null}if(p!==null){v=p.next,d=d.baseState;var L=E=null,F=null,Q=v;do{var _e=Q.lane;if((Yr&_e)===_e)F!==null&&(F=F.next={lane:0,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),d=Q.hasEagerState?Q.eagerState:n(d,Q.action);else{var xe={lane:_e,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null};F===null?(L=F=xe,E=d):F=F.next=xe,Wt.lanes|=_e,qr|=_e}Q=Q.next}while(Q!==null&&Q!==v);F===null?E=d:F.next=L,si(d,r.memoizedState)||(Fn=!0),r.memoizedState=d,r.baseState=E,r.baseQueue=F,l.lastRenderedState=d}if(n=l.interleaved,n!==null){p=n;do v=p.lane,Wt.lanes|=v,qr|=v,p=p.next;while(p!==n)}else p===null&&(l.lanes=0);return[r.memoizedState,l.dispatch]}function vu(n){var r=Qn(),l=r.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var d=l.dispatch,p=l.pending,v=r.memoizedState;if(p!==null){l.pending=null;var E=p=p.next;do v=n(v,E.action),E=E.next;while(E!==p);si(v,r.memoizedState)||(Fn=!0),r.memoizedState=v,r.baseQueue===null&&(r.baseState=v),l.lastRenderedState=v}return[v,d]}function op(){}function ap(n,r){var l=Wt,d=Qn(),p=r(),v=!si(d.memoizedState,p);if(v&&(d.memoizedState=p,Fn=!0),d=d.queue,xu(up.bind(null,l,d,n),[n]),d.getSnapshot!==r||v||rn!==null&&rn.memoizedState.tag&1){if(l.flags|=2048,qo(9,cp.bind(null,l,d,p,r),void 0,null),sn===null)throw Error(t(349));Yr&30||lp(l,r,p)}return p}function lp(n,r,l){n.flags|=16384,n={getSnapshot:r,value:l},r=Wt.updateQueue,r===null?(r={lastEffect:null,stores:null},Wt.updateQueue=r,r.stores=[n]):(l=r.stores,l===null?r.stores=[n]:l.push(n))}function cp(n,r,l,d){r.value=l,r.getSnapshot=d,dp(r)&&fp(n)}function up(n,r,l){return l(function(){dp(r)&&fp(n)})}function dp(n){var r=n.getSnapshot;n=n.value;try{var l=r();return!si(n,l)}catch{return!0}}function fp(n){var r=Bi(n,1);r!==null&&ui(r,n,1,-1)}function hp(n){var r=Mi();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Yo,lastRenderedState:n},r.queue=n,n=n.dispatch=Vv.bind(null,Wt,n),[r.memoizedState,n]}function qo(n,r,l,d){return n={tag:n,create:r,destroy:l,deps:d,next:null},r=Wt.updateQueue,r===null?(r={lastEffect:null,stores:null},Wt.updateQueue=r,r.lastEffect=n.next=n):(l=r.lastEffect,l===null?r.lastEffect=n.next=n:(d=l.next,l.next=n,n.next=d,r.lastEffect=n)),n}function pp(){return Qn().memoizedState}function sl(n,r,l,d){var p=Mi();Wt.flags|=n,p.memoizedState=qo(1|r,l,void 0,d===void 0?null:d)}function ol(n,r,l,d){var p=Qn();d=d===void 0?null:d;var v=void 0;if(Jt!==null){var E=Jt.memoizedState;if(v=E.destroy,d!==null&&pu(d,E.deps)){p.memoizedState=qo(r,l,v,d);return}}Wt.flags|=n,p.memoizedState=qo(1|r,l,v,d)}function mp(n,r){return sl(8390656,8,n,r)}function xu(n,r){return ol(2048,8,n,r)}function gp(n,r){return ol(4,2,n,r)}function _p(n,r){return ol(4,4,n,r)}function vp(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function xp(n,r,l){return l=l!=null?l.concat([n]):null,ol(4,4,vp.bind(null,r,n),l)}function yu(){}function yp(n,r){var l=Qn();r=r===void 0?null:r;var d=l.memoizedState;return d!==null&&r!==null&&pu(r,d[1])?d[0]:(l.memoizedState=[n,r],n)}function Sp(n,r){var l=Qn();r=r===void 0?null:r;var d=l.memoizedState;return d!==null&&r!==null&&pu(r,d[1])?d[0]:(n=n(),l.memoizedState=[n,r],n)}function Mp(n,r,l){return Yr&21?(si(l,r)||(l=Tn(),Wt.lanes|=l,qr|=l,n.baseState=!0),r):(n.baseState&&(n.baseState=!1,Fn=!0),n.memoizedState=l)}function zv(n,r){var l=mt;mt=l!==0&&4>l?l:4,n(!0);var d=hu.transition;hu.transition={};try{n(!1),r()}finally{mt=l,hu.transition=d}}function Ep(){return Qn().memoizedState}function Hv(n,r,l){var d=yr(n);if(l={lane:d,action:l,hasEagerState:!1,eagerState:null,next:null},Tp(n))Ap(r,l);else if(l=tp(n,r,l,d),l!==null){var p=wn();ui(l,n,d,p),wp(l,r,d)}}function Vv(n,r,l){var d=yr(n),p={lane:d,action:l,hasEagerState:!1,eagerState:null,next:null};if(Tp(n))Ap(r,p);else{var v=n.alternate;if(n.lanes===0&&(v===null||v.lanes===0)&&(v=r.lastRenderedReducer,v!==null))try{var E=r.lastRenderedState,L=v(E,l);if(p.hasEagerState=!0,p.eagerState=L,si(L,E)){var F=r.interleaved;F===null?(p.next=p,au(r)):(p.next=F.next,F.next=p),r.interleaved=p;return}}catch{}finally{}l=tp(n,r,p,d),l!==null&&(p=wn(),ui(l,n,d,p),wp(l,r,d))}}function Tp(n){var r=n.alternate;return n===Wt||r!==null&&r===Wt}function Ap(n,r){Xo=rl=!0;var l=n.pending;l===null?r.next=r:(r.next=l.next,l.next=r),n.pending=r}function wp(n,r,l){if(l&4194240){var d=r.lanes;d&=n.pendingLanes,l|=d,r.lanes=l,zr(n,l)}}var al={readContext:Zn,useCallback:gn,useContext:gn,useEffect:gn,useImperativeHandle:gn,useInsertionEffect:gn,useLayoutEffect:gn,useMemo:gn,useReducer:gn,useRef:gn,useState:gn,useDebugValue:gn,useDeferredValue:gn,useTransition:gn,useMutableSource:gn,useSyncExternalStore:gn,useId:gn,unstable_isNewReconciler:!1},Gv={readContext:Zn,useCallback:function(n,r){return Mi().memoizedState=[n,r===void 0?null:r],n},useContext:Zn,useEffect:mp,useImperativeHandle:function(n,r,l){return l=l!=null?l.concat([n]):null,sl(4194308,4,vp.bind(null,r,n),l)},useLayoutEffect:function(n,r){return sl(4194308,4,n,r)},useInsertionEffect:function(n,r){return sl(4,2,n,r)},useMemo:function(n,r){var l=Mi();return r=r===void 0?null:r,n=n(),l.memoizedState=[n,r],n},useReducer:function(n,r,l){var d=Mi();return r=l!==void 0?l(r):r,d.memoizedState=d.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},d.queue=n,n=n.dispatch=Hv.bind(null,Wt,n),[d.memoizedState,n]},useRef:function(n){var r=Mi();return n={current:n},r.memoizedState=n},useState:hp,useDebugValue:yu,useDeferredValue:function(n){return Mi().memoizedState=n},useTransition:function(){var n=hp(!1),r=n[0];return n=zv.bind(null,n[1]),Mi().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,l){var d=Wt,p=Mi();if(Vt){if(l===void 0)throw Error(t(407));l=l()}else{if(l=r(),sn===null)throw Error(t(349));Yr&30||lp(d,r,l)}p.memoizedState=l;var v={value:l,getSnapshot:r};return p.queue=v,mp(up.bind(null,d,v,n),[n]),d.flags|=2048,qo(9,cp.bind(null,d,v,l,r),void 0,null),l},useId:function(){var n=Mi(),r=sn.identifierPrefix;if(Vt){var l=Oi,d=Fi;l=(d&~(1<<32-wt(d)-1)).toString(32)+l,r=":"+r+"R"+l,l=jo++,0<l&&(r+="H"+l.toString(32)),r+=":"}else l=kv++,r=":"+r+"r"+l.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},Wv={readContext:Zn,useCallback:yp,useContext:Zn,useEffect:xu,useImperativeHandle:xp,useInsertionEffect:gp,useLayoutEffect:_p,useMemo:Sp,useReducer:_u,useRef:pp,useState:function(){return _u(Yo)},useDebugValue:yu,useDeferredValue:function(n){var r=Qn();return Mp(r,Jt.memoizedState,n)},useTransition:function(){var n=_u(Yo)[0],r=Qn().memoizedState;return[n,r]},useMutableSource:op,useSyncExternalStore:ap,useId:Ep,unstable_isNewReconciler:!1},Xv={readContext:Zn,useCallback:yp,useContext:Zn,useEffect:xu,useImperativeHandle:xp,useInsertionEffect:gp,useLayoutEffect:_p,useMemo:Sp,useReducer:vu,useRef:pp,useState:function(){return vu(Yo)},useDebugValue:yu,useDeferredValue:function(n){var r=Qn();return Jt===null?r.memoizedState=n:Mp(r,Jt.memoizedState,n)},useTransition:function(){var n=vu(Yo)[0],r=Qn().memoizedState;return[n,r]},useMutableSource:op,useSyncExternalStore:ap,useId:Ep,unstable_isNewReconciler:!1};function ai(n,r){if(n&&n.defaultProps){r=re({},r),n=n.defaultProps;for(var l in n)r[l]===void 0&&(r[l]=n[l]);return r}return r}function Su(n,r,l,d){r=n.memoizedState,l=l(d,r),l=l==null?r:re({},r,l),n.memoizedState=l,n.lanes===0&&(n.updateQueue.baseState=l)}var ll={isMounted:function(n){return(n=n._reactInternals)?xi(n)===n:!1},enqueueSetState:function(n,r,l){n=n._reactInternals;var d=wn(),p=yr(n),v=ki(d,p);v.payload=r,l!=null&&(v.callback=l),r=gr(n,v,p),r!==null&&(ui(r,n,p,d),el(r,n,p))},enqueueReplaceState:function(n,r,l){n=n._reactInternals;var d=wn(),p=yr(n),v=ki(d,p);v.tag=1,v.payload=r,l!=null&&(v.callback=l),r=gr(n,v,p),r!==null&&(ui(r,n,p,d),el(r,n,p))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var l=wn(),d=yr(n),p=ki(l,d);p.tag=2,r!=null&&(p.callback=r),r=gr(n,p,d),r!==null&&(ui(r,n,d,l),el(r,n,d))}};function Rp(n,r,l,d,p,v,E){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(d,v,E):r.prototype&&r.prototype.isPureReactComponent?!No(l,d)||!No(p,v):!0}function Cp(n,r,l){var d=!1,p=hr,v=r.contextType;return typeof v=="object"&&v!==null?v=Zn(v):(p=Un(r)?Vr:mn.current,d=r.contextTypes,v=(d=d!=null)?ws(n,p):hr),r=new r(l,v),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=ll,n.stateNode=r,r._reactInternals=n,d&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=p,n.__reactInternalMemoizedMaskedChildContext=v),r}function bp(n,r,l,d){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(l,d),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(l,d),r.state!==n&&ll.enqueueReplaceState(r,r.state,null)}function Mu(n,r,l,d){var p=n.stateNode;p.props=l,p.state=n.memoizedState,p.refs={},lu(n);var v=r.contextType;typeof v=="object"&&v!==null?p.context=Zn(v):(v=Un(r)?Vr:mn.current,p.context=ws(n,v)),p.state=n.memoizedState,v=r.getDerivedStateFromProps,typeof v=="function"&&(Su(n,r,v,l),p.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(r=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),r!==p.state&&ll.enqueueReplaceState(p,p.state,null),tl(n,l,p,d),p.state=n.memoizedState),typeof p.componentDidMount=="function"&&(n.flags|=4194308)}function Ns(n,r){try{var l="",d=r;do l+=ce(d),d=d.return;while(d);var p=l}catch(v){p=`
Error generating stack: `+v.message+`
`+v.stack}return{value:n,source:r,stack:p,digest:null}}function Eu(n,r,l){return{value:n,source:null,stack:l??null,digest:r??null}}function Tu(n,r){try{console.error(r.value)}catch(l){setTimeout(function(){throw l})}}var jv=typeof WeakMap=="function"?WeakMap:Map;function Pp(n,r,l){l=ki(-1,l),l.tag=3,l.payload={element:null};var d=r.value;return l.callback=function(){ml||(ml=!0,ku=d),Tu(n,r)},l}function Ip(n,r,l){l=ki(-1,l),l.tag=3;var d=n.type.getDerivedStateFromError;if(typeof d=="function"){var p=r.value;l.payload=function(){return d(p)},l.callback=function(){Tu(n,r)}}var v=n.stateNode;return v!==null&&typeof v.componentDidCatch=="function"&&(l.callback=function(){Tu(n,r),typeof d!="function"&&(vr===null?vr=new Set([this]):vr.add(this));var E=r.stack;this.componentDidCatch(r.value,{componentStack:E!==null?E:""})}),l}function Lp(n,r,l){var d=n.pingCache;if(d===null){d=n.pingCache=new jv;var p=new Set;d.set(r,p)}else p=d.get(r),p===void 0&&(p=new Set,d.set(r,p));p.has(l)||(p.add(l),n=o0.bind(null,n,r,l),r.then(n,n))}function Dp(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function Np(n,r,l,d,p){return n.mode&1?(n.flags|=65536,n.lanes=p,n):(n===r?n.flags|=65536:(n.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(r=ki(-1,1),r.tag=2,gr(l,r,1))),l.lanes|=1),n)}var Yv=C.ReactCurrentOwner,Fn=!1;function An(n,r,l,d){r.child=n===null?ep(r,null,l,d):Ps(r,n.child,l,d)}function Up(n,r,l,d,p){l=l.render;var v=r.ref;return Ls(r,p),d=mu(n,r,l,d,v,p),l=gu(),n!==null&&!Fn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~p,zi(n,r,p)):(Vt&&l&&Qc(r),r.flags|=1,An(n,r,d,p),r.child)}function Fp(n,r,l,d,p){if(n===null){var v=l.type;return typeof v=="function"&&!ju(v)&&v.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(r.tag=15,r.type=v,Op(n,r,v,d,p)):(n=Sl(l.type,null,d,r,r.mode,p),n.ref=r.ref,n.return=r,r.child=n)}if(v=n.child,!(n.lanes&p)){var E=v.memoizedProps;if(l=l.compare,l=l!==null?l:No,l(E,d)&&n.ref===r.ref)return zi(n,r,p)}return r.flags|=1,n=Mr(v,d),n.ref=r.ref,n.return=r,r.child=n}function Op(n,r,l,d,p){if(n!==null){var v=n.memoizedProps;if(No(v,d)&&n.ref===r.ref)if(Fn=!1,r.pendingProps=d=v,(n.lanes&p)!==0)n.flags&131072&&(Fn=!0);else return r.lanes=n.lanes,zi(n,r,p)}return Au(n,r,l,d,p)}function Bp(n,r,l){var d=r.pendingProps,p=d.children,v=n!==null?n.memoizedState:null;if(d.mode==="hidden")if(!(r.mode&1))r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ot(Fs,Wn),Wn|=l;else{if(!(l&1073741824))return n=v!==null?v.baseLanes|l:l,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,Ot(Fs,Wn),Wn|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},d=v!==null?v.baseLanes:l,Ot(Fs,Wn),Wn|=d}else v!==null?(d=v.baseLanes|l,r.memoizedState=null):d=l,Ot(Fs,Wn),Wn|=d;return An(n,r,p,l),r.child}function kp(n,r){var l=r.ref;(n===null&&l!==null||n!==null&&n.ref!==l)&&(r.flags|=512,r.flags|=2097152)}function Au(n,r,l,d,p){var v=Un(l)?Vr:mn.current;return v=ws(r,v),Ls(r,p),l=mu(n,r,l,d,v,p),d=gu(),n!==null&&!Fn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~p,zi(n,r,p)):(Vt&&d&&Qc(r),r.flags|=1,An(n,r,l,p),r.child)}function zp(n,r,l,d,p){if(Un(l)){var v=!0;ja(r)}else v=!1;if(Ls(r,p),r.stateNode===null)ul(n,r),Cp(r,l,d),Mu(r,l,d,p),d=!0;else if(n===null){var E=r.stateNode,L=r.memoizedProps;E.props=L;var F=E.context,Q=l.contextType;typeof Q=="object"&&Q!==null?Q=Zn(Q):(Q=Un(l)?Vr:mn.current,Q=ws(r,Q));var _e=l.getDerivedStateFromProps,xe=typeof _e=="function"||typeof E.getSnapshotBeforeUpdate=="function";xe||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(L!==d||F!==Q)&&bp(r,E,d,Q),mr=!1;var me=r.memoizedState;E.state=me,tl(r,d,E,p),F=r.memoizedState,L!==d||me!==F||Nn.current||mr?(typeof _e=="function"&&(Su(r,l,_e,d),F=r.memoizedState),(L=mr||Rp(r,l,L,d,me,F,Q))?(xe||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(r.flags|=4194308)):(typeof E.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=d,r.memoizedState=F),E.props=d,E.state=F,E.context=Q,d=L):(typeof E.componentDidMount=="function"&&(r.flags|=4194308),d=!1)}else{E=r.stateNode,np(n,r),L=r.memoizedProps,Q=r.type===r.elementType?L:ai(r.type,L),E.props=Q,xe=r.pendingProps,me=E.context,F=l.contextType,typeof F=="object"&&F!==null?F=Zn(F):(F=Un(l)?Vr:mn.current,F=ws(r,F));var Le=l.getDerivedStateFromProps;(_e=typeof Le=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(L!==xe||me!==F)&&bp(r,E,d,F),mr=!1,me=r.memoizedState,E.state=me,tl(r,d,E,p);var He=r.memoizedState;L!==xe||me!==He||Nn.current||mr?(typeof Le=="function"&&(Su(r,l,Le,d),He=r.memoizedState),(Q=mr||Rp(r,l,Q,d,me,He,F)||!1)?(_e||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(d,He,F),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(d,He,F)),typeof E.componentDidUpdate=="function"&&(r.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof E.componentDidUpdate!="function"||L===n.memoizedProps&&me===n.memoizedState||(r.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||L===n.memoizedProps&&me===n.memoizedState||(r.flags|=1024),r.memoizedProps=d,r.memoizedState=He),E.props=d,E.state=He,E.context=F,d=Q):(typeof E.componentDidUpdate!="function"||L===n.memoizedProps&&me===n.memoizedState||(r.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||L===n.memoizedProps&&me===n.memoizedState||(r.flags|=1024),d=!1)}return wu(n,r,l,d,v,p)}function wu(n,r,l,d,p,v){kp(n,r);var E=(r.flags&128)!==0;if(!d&&!E)return p&&Xh(r,l,!1),zi(n,r,v);d=r.stateNode,Yv.current=r;var L=E&&typeof l.getDerivedStateFromError!="function"?null:d.render();return r.flags|=1,n!==null&&E?(r.child=Ps(r,n.child,null,v),r.child=Ps(r,null,L,v)):An(n,r,L,v),r.memoizedState=d.state,p&&Xh(r,l,!0),r.child}function Hp(n){var r=n.stateNode;r.pendingContext?Gh(n,r.pendingContext,r.pendingContext!==r.context):r.context&&Gh(n,r.context,!1),cu(n,r.containerInfo)}function Vp(n,r,l,d,p){return bs(),nu(p),r.flags|=256,An(n,r,l,d),r.child}var Ru={dehydrated:null,treeContext:null,retryLane:0};function Cu(n){return{baseLanes:n,cachePool:null,transitions:null}}function Gp(n,r,l){var d=r.pendingProps,p=Gt.current,v=!1,E=(r.flags&128)!==0,L;if((L=E)||(L=n!==null&&n.memoizedState===null?!1:(p&2)!==0),L?(v=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(p|=1),Ot(Gt,p&1),n===null)return tu(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(r.mode&1?n.data==="$!"?r.lanes=8:r.lanes=1073741824:r.lanes=1,null):(E=d.children,n=d.fallback,v?(d=r.mode,v=r.child,E={mode:"hidden",children:E},!(d&1)&&v!==null?(v.childLanes=0,v.pendingProps=E):v=Ml(E,d,0,null),n=Qr(n,d,l,null),v.return=r,n.return=r,v.sibling=n,r.child=v,r.child.memoizedState=Cu(l),r.memoizedState=Ru,n):bu(r,E));if(p=n.memoizedState,p!==null&&(L=p.dehydrated,L!==null))return qv(n,r,E,d,L,p,l);if(v){v=d.fallback,E=r.mode,p=n.child,L=p.sibling;var F={mode:"hidden",children:d.children};return!(E&1)&&r.child!==p?(d=r.child,d.childLanes=0,d.pendingProps=F,r.deletions=null):(d=Mr(p,F),d.subtreeFlags=p.subtreeFlags&14680064),L!==null?v=Mr(L,v):(v=Qr(v,E,l,null),v.flags|=2),v.return=r,d.return=r,d.sibling=v,r.child=d,d=v,v=r.child,E=n.child.memoizedState,E=E===null?Cu(l):{baseLanes:E.baseLanes|l,cachePool:null,transitions:E.transitions},v.memoizedState=E,v.childLanes=n.childLanes&~l,r.memoizedState=Ru,d}return v=n.child,n=v.sibling,d=Mr(v,{mode:"visible",children:d.children}),!(r.mode&1)&&(d.lanes=l),d.return=r,d.sibling=null,n!==null&&(l=r.deletions,l===null?(r.deletions=[n],r.flags|=16):l.push(n)),r.child=d,r.memoizedState=null,d}function bu(n,r){return r=Ml({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function cl(n,r,l,d){return d!==null&&nu(d),Ps(r,n.child,null,l),n=bu(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function qv(n,r,l,d,p,v,E){if(l)return r.flags&256?(r.flags&=-257,d=Eu(Error(t(422))),cl(n,r,E,d)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(v=d.fallback,p=r.mode,d=Ml({mode:"visible",children:d.children},p,0,null),v=Qr(v,p,E,null),v.flags|=2,d.return=r,v.return=r,d.sibling=v,r.child=d,r.mode&1&&Ps(r,n.child,null,E),r.child.memoizedState=Cu(E),r.memoizedState=Ru,v);if(!(r.mode&1))return cl(n,r,E,null);if(p.data==="$!"){if(d=p.nextSibling&&p.nextSibling.dataset,d)var L=d.dgst;return d=L,v=Error(t(419)),d=Eu(v,d,void 0),cl(n,r,E,d)}if(L=(E&n.childLanes)!==0,Fn||L){if(d=sn,d!==null){switch(E&-E){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=p&(d.suspendedLanes|E)?0:p,p!==0&&p!==v.retryLane&&(v.retryLane=p,Bi(n,p),ui(d,n,p,-1))}return Xu(),d=Eu(Error(t(421))),cl(n,r,E,d)}return p.data==="$?"?(r.flags|=128,r.child=n.child,r=a0.bind(null,n),p._reactRetry=r,null):(n=v.treeContext,Gn=dr(p.nextSibling),Vn=r,Vt=!0,oi=null,n!==null&&(Kn[$n++]=Fi,Kn[$n++]=Oi,Kn[$n++]=Gr,Fi=n.id,Oi=n.overflow,Gr=r),r=bu(r,d.children),r.flags|=4096,r)}function Wp(n,r,l){n.lanes|=r;var d=n.alternate;d!==null&&(d.lanes|=r),ou(n.return,r,l)}function Pu(n,r,l,d,p){var v=n.memoizedState;v===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:d,tail:l,tailMode:p}:(v.isBackwards=r,v.rendering=null,v.renderingStartTime=0,v.last=d,v.tail=l,v.tailMode=p)}function Xp(n,r,l){var d=r.pendingProps,p=d.revealOrder,v=d.tail;if(An(n,r,d.children,l),d=Gt.current,d&2)d=d&1|2,r.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Wp(n,l,r);else if(n.tag===19)Wp(n,l,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}d&=1}if(Ot(Gt,d),!(r.mode&1))r.memoizedState=null;else switch(p){case"forwards":for(l=r.child,p=null;l!==null;)n=l.alternate,n!==null&&nl(n)===null&&(p=l),l=l.sibling;l=p,l===null?(p=r.child,r.child=null):(p=l.sibling,l.sibling=null),Pu(r,!1,p,l,v);break;case"backwards":for(l=null,p=r.child,r.child=null;p!==null;){if(n=p.alternate,n!==null&&nl(n)===null){r.child=p;break}n=p.sibling,p.sibling=l,l=p,p=n}Pu(r,!0,l,null,v);break;case"together":Pu(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function ul(n,r){!(r.mode&1)&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function zi(n,r,l){if(n!==null&&(r.dependencies=n.dependencies),qr|=r.lanes,!(l&r.childLanes))return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,l=Mr(n,n.pendingProps),r.child=l,l.return=r;n.sibling!==null;)n=n.sibling,l=l.sibling=Mr(n,n.pendingProps),l.return=r;l.sibling=null}return r.child}function Kv(n,r,l){switch(r.tag){case 3:Hp(r),bs();break;case 5:sp(r);break;case 1:Un(r.type)&&ja(r);break;case 4:cu(r,r.stateNode.containerInfo);break;case 10:var d=r.type._context,p=r.memoizedProps.value;Ot(Qa,d._currentValue),d._currentValue=p;break;case 13:if(d=r.memoizedState,d!==null)return d.dehydrated!==null?(Ot(Gt,Gt.current&1),r.flags|=128,null):l&r.child.childLanes?Gp(n,r,l):(Ot(Gt,Gt.current&1),n=zi(n,r,l),n!==null?n.sibling:null);Ot(Gt,Gt.current&1);break;case 19:if(d=(l&r.childLanes)!==0,n.flags&128){if(d)return Xp(n,r,l);r.flags|=128}if(p=r.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),Ot(Gt,Gt.current),d)break;return null;case 22:case 23:return r.lanes=0,Bp(n,r,l)}return zi(n,r,l)}var jp,Iu,Yp,qp;jp=function(n,r){for(var l=r.child;l!==null;){if(l.tag===5||l.tag===6)n.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===r)break;for(;l.sibling===null;){if(l.return===null||l.return===r)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},Iu=function(){},Yp=function(n,r,l,d){var p=n.memoizedProps;if(p!==d){n=r.stateNode,jr(Si.current);var v=null;switch(l){case"input":p=B(n,p),d=B(n,d),v=[];break;case"select":p=re({},p,{value:void 0}),d=re({},d,{value:void 0}),v=[];break;case"textarea":p=A(n,p),d=A(n,d),v=[];break;default:typeof p.onClick!="function"&&typeof d.onClick=="function"&&(n.onclick=Ga)}ft(l,d);var E;l=null;for(Q in p)if(!d.hasOwnProperty(Q)&&p.hasOwnProperty(Q)&&p[Q]!=null)if(Q==="style"){var L=p[Q];for(E in L)L.hasOwnProperty(E)&&(l||(l={}),l[E]="")}else Q!=="dangerouslySetInnerHTML"&&Q!=="children"&&Q!=="suppressContentEditableWarning"&&Q!=="suppressHydrationWarning"&&Q!=="autoFocus"&&(s.hasOwnProperty(Q)?v||(v=[]):(v=v||[]).push(Q,null));for(Q in d){var F=d[Q];if(L=p!=null?p[Q]:void 0,d.hasOwnProperty(Q)&&F!==L&&(F!=null||L!=null))if(Q==="style")if(L){for(E in L)!L.hasOwnProperty(E)||F&&F.hasOwnProperty(E)||(l||(l={}),l[E]="");for(E in F)F.hasOwnProperty(E)&&L[E]!==F[E]&&(l||(l={}),l[E]=F[E])}else l||(v||(v=[]),v.push(Q,l)),l=F;else Q==="dangerouslySetInnerHTML"?(F=F?F.__html:void 0,L=L?L.__html:void 0,F!=null&&L!==F&&(v=v||[]).push(Q,F)):Q==="children"?typeof F!="string"&&typeof F!="number"||(v=v||[]).push(Q,""+F):Q!=="suppressContentEditableWarning"&&Q!=="suppressHydrationWarning"&&(s.hasOwnProperty(Q)?(F!=null&&Q==="onScroll"&&kt("scroll",n),v||L===F||(v=[])):(v=v||[]).push(Q,F))}l&&(v=v||[]).push("style",l);var Q=v;(r.updateQueue=Q)&&(r.flags|=4)}},qp=function(n,r,l,d){l!==d&&(r.flags|=4)};function Ko(n,r){if(!Vt)switch(n.tailMode){case"hidden":r=n.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?n.tail=null:l.sibling=null;break;case"collapsed":l=n.tail;for(var d=null;l!==null;)l.alternate!==null&&(d=l),l=l.sibling;d===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:d.sibling=null}}function _n(n){var r=n.alternate!==null&&n.alternate.child===n.child,l=0,d=0;if(r)for(var p=n.child;p!==null;)l|=p.lanes|p.childLanes,d|=p.subtreeFlags&14680064,d|=p.flags&14680064,p.return=n,p=p.sibling;else for(p=n.child;p!==null;)l|=p.lanes|p.childLanes,d|=p.subtreeFlags,d|=p.flags,p.return=n,p=p.sibling;return n.subtreeFlags|=d,n.childLanes=l,r}function $v(n,r,l){var d=r.pendingProps;switch(Jc(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _n(r),null;case 1:return Un(r.type)&&Xa(),_n(r),null;case 3:return d=r.stateNode,Ds(),zt(Nn),zt(mn),fu(),d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null),(n===null||n.child===null)&&($a(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&!(r.flags&256)||(r.flags|=1024,oi!==null&&(Vu(oi),oi=null))),Iu(n,r),_n(r),null;case 5:uu(r);var p=jr(Wo.current);if(l=r.type,n!==null&&r.stateNode!=null)Yp(n,r,l,d,p),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!d){if(r.stateNode===null)throw Error(t(166));return _n(r),null}if(n=jr(Si.current),$a(r)){d=r.stateNode,l=r.type;var v=r.memoizedProps;switch(d[yi]=r,d[ko]=v,n=(r.mode&1)!==0,l){case"dialog":kt("cancel",d),kt("close",d);break;case"iframe":case"object":case"embed":kt("load",d);break;case"video":case"audio":for(p=0;p<Fo.length;p++)kt(Fo[p],d);break;case"source":kt("error",d);break;case"img":case"image":case"link":kt("error",d),kt("load",d);break;case"details":kt("toggle",d);break;case"input":Sn(d,v),kt("invalid",d);break;case"select":d._wrapperState={wasMultiple:!!v.multiple},kt("invalid",d);break;case"textarea":$(d,v),kt("invalid",d)}ft(l,v),p=null;for(var E in v)if(v.hasOwnProperty(E)){var L=v[E];E==="children"?typeof L=="string"?d.textContent!==L&&(v.suppressHydrationWarning!==!0&&Va(d.textContent,L,n),p=["children",L]):typeof L=="number"&&d.textContent!==""+L&&(v.suppressHydrationWarning!==!0&&Va(d.textContent,L,n),p=["children",""+L]):s.hasOwnProperty(E)&&L!=null&&E==="onScroll"&&kt("scroll",d)}switch(l){case"input":Dt(d),Ye(d,v,!0);break;case"textarea":Dt(d),ge(d);break;case"select":case"option":break;default:typeof v.onClick=="function"&&(d.onclick=Ga)}d=p,r.updateQueue=d,d!==null&&(r.flags|=4)}else{E=p.nodeType===9?p:p.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=ue(l)),n==="http://www.w3.org/1999/xhtml"?l==="script"?(n=E.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof d.is=="string"?n=E.createElement(l,{is:d.is}):(n=E.createElement(l),l==="select"&&(E=n,d.multiple?E.multiple=!0:d.size&&(E.size=d.size))):n=E.createElementNS(n,l),n[yi]=r,n[ko]=d,jp(n,r,!1,!1),r.stateNode=n;e:{switch(E=it(l,d),l){case"dialog":kt("cancel",n),kt("close",n),p=d;break;case"iframe":case"object":case"embed":kt("load",n),p=d;break;case"video":case"audio":for(p=0;p<Fo.length;p++)kt(Fo[p],n);p=d;break;case"source":kt("error",n),p=d;break;case"img":case"image":case"link":kt("error",n),kt("load",n),p=d;break;case"details":kt("toggle",n),p=d;break;case"input":Sn(n,d),p=B(n,d),kt("invalid",n);break;case"option":p=d;break;case"select":n._wrapperState={wasMultiple:!!d.multiple},p=re({},d,{value:void 0}),kt("invalid",n);break;case"textarea":$(n,d),p=A(n,d),kt("invalid",n);break;default:p=d}ft(l,p),L=p;for(v in L)if(L.hasOwnProperty(v)){var F=L[v];v==="style"?Je(n,F):v==="dangerouslySetInnerHTML"?(F=F?F.__html:void 0,F!=null&&Fe(n,F)):v==="children"?typeof F=="string"?(l!=="textarea"||F!=="")&&ut(n,F):typeof F=="number"&&ut(n,""+F):v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&v!=="autoFocus"&&(s.hasOwnProperty(v)?F!=null&&v==="onScroll"&&kt("scroll",n):F!=null&&I(n,v,F,E))}switch(l){case"input":Dt(n),Ye(n,d,!1);break;case"textarea":Dt(n),ge(n);break;case"option":d.value!=null&&n.setAttribute("value",""+Te(d.value));break;case"select":n.multiple=!!d.multiple,v=d.value,v!=null?P(n,!!d.multiple,v,!1):d.defaultValue!=null&&P(n,!!d.multiple,d.defaultValue,!0);break;default:typeof p.onClick=="function"&&(n.onclick=Ga)}switch(l){case"button":case"input":case"select":case"textarea":d=!!d.autoFocus;break e;case"img":d=!0;break e;default:d=!1}}d&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return _n(r),null;case 6:if(n&&r.stateNode!=null)qp(n,r,n.memoizedProps,d);else{if(typeof d!="string"&&r.stateNode===null)throw Error(t(166));if(l=jr(Wo.current),jr(Si.current),$a(r)){if(d=r.stateNode,l=r.memoizedProps,d[yi]=r,(v=d.nodeValue!==l)&&(n=Vn,n!==null))switch(n.tag){case 3:Va(d.nodeValue,l,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Va(d.nodeValue,l,(n.mode&1)!==0)}v&&(r.flags|=4)}else d=(l.nodeType===9?l:l.ownerDocument).createTextNode(d),d[yi]=r,r.stateNode=d}return _n(r),null;case 13:if(zt(Gt),d=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Vt&&Gn!==null&&r.mode&1&&!(r.flags&128))Zh(),bs(),r.flags|=98560,v=!1;else if(v=$a(r),d!==null&&d.dehydrated!==null){if(n===null){if(!v)throw Error(t(318));if(v=r.memoizedState,v=v!==null?v.dehydrated:null,!v)throw Error(t(317));v[yi]=r}else bs(),!(r.flags&128)&&(r.memoizedState=null),r.flags|=4;_n(r),v=!1}else oi!==null&&(Vu(oi),oi=null),v=!0;if(!v)return r.flags&65536?r:null}return r.flags&128?(r.lanes=l,r):(d=d!==null,d!==(n!==null&&n.memoizedState!==null)&&d&&(r.child.flags|=8192,r.mode&1&&(n===null||Gt.current&1?en===0&&(en=3):Xu())),r.updateQueue!==null&&(r.flags|=4),_n(r),null);case 4:return Ds(),Iu(n,r),n===null&&Oo(r.stateNode.containerInfo),_n(r),null;case 10:return su(r.type._context),_n(r),null;case 17:return Un(r.type)&&Xa(),_n(r),null;case 19:if(zt(Gt),v=r.memoizedState,v===null)return _n(r),null;if(d=(r.flags&128)!==0,E=v.rendering,E===null)if(d)Ko(v,!1);else{if(en!==0||n!==null&&n.flags&128)for(n=r.child;n!==null;){if(E=nl(n),E!==null){for(r.flags|=128,Ko(v,!1),d=E.updateQueue,d!==null&&(r.updateQueue=d,r.flags|=4),r.subtreeFlags=0,d=l,l=r.child;l!==null;)v=l,n=d,v.flags&=14680066,E=v.alternate,E===null?(v.childLanes=0,v.lanes=n,v.child=null,v.subtreeFlags=0,v.memoizedProps=null,v.memoizedState=null,v.updateQueue=null,v.dependencies=null,v.stateNode=null):(v.childLanes=E.childLanes,v.lanes=E.lanes,v.child=E.child,v.subtreeFlags=0,v.deletions=null,v.memoizedProps=E.memoizedProps,v.memoizedState=E.memoizedState,v.updateQueue=E.updateQueue,v.type=E.type,n=E.dependencies,v.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),l=l.sibling;return Ot(Gt,Gt.current&1|2),r.child}n=n.sibling}v.tail!==null&&H()>Os&&(r.flags|=128,d=!0,Ko(v,!1),r.lanes=4194304)}else{if(!d)if(n=nl(E),n!==null){if(r.flags|=128,d=!0,l=n.updateQueue,l!==null&&(r.updateQueue=l,r.flags|=4),Ko(v,!0),v.tail===null&&v.tailMode==="hidden"&&!E.alternate&&!Vt)return _n(r),null}else 2*H()-v.renderingStartTime>Os&&l!==1073741824&&(r.flags|=128,d=!0,Ko(v,!1),r.lanes=4194304);v.isBackwards?(E.sibling=r.child,r.child=E):(l=v.last,l!==null?l.sibling=E:r.child=E,v.last=E)}return v.tail!==null?(r=v.tail,v.rendering=r,v.tail=r.sibling,v.renderingStartTime=H(),r.sibling=null,l=Gt.current,Ot(Gt,d?l&1|2:l&1),r):(_n(r),null);case 22:case 23:return Wu(),d=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==d&&(r.flags|=8192),d&&r.mode&1?Wn&1073741824&&(_n(r),r.subtreeFlags&6&&(r.flags|=8192)):_n(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function Zv(n,r){switch(Jc(r),r.tag){case 1:return Un(r.type)&&Xa(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return Ds(),zt(Nn),zt(mn),fu(),n=r.flags,n&65536&&!(n&128)?(r.flags=n&-65537|128,r):null;case 5:return uu(r),null;case 13:if(zt(Gt),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));bs()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return zt(Gt),null;case 4:return Ds(),null;case 10:return su(r.type._context),null;case 22:case 23:return Wu(),null;case 24:return null;default:return null}}var dl=!1,vn=!1,Qv=typeof WeakSet=="function"?WeakSet:Set,Be=null;function Us(n,r){var l=n.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(d){Yt(n,r,d)}else l.current=null}function Lu(n,r,l){try{l()}catch(d){Yt(n,r,d)}}var Kp=!1;function Jv(n,r){if(Wc=Ia,n=Rh(),Fc(n)){if("selectionStart"in n)var l={start:n.selectionStart,end:n.selectionEnd};else e:{l=(l=n.ownerDocument)&&l.defaultView||window;var d=l.getSelection&&l.getSelection();if(d&&d.rangeCount!==0){l=d.anchorNode;var p=d.anchorOffset,v=d.focusNode;d=d.focusOffset;try{l.nodeType,v.nodeType}catch{l=null;break e}var E=0,L=-1,F=-1,Q=0,_e=0,xe=n,me=null;t:for(;;){for(var Le;xe!==l||p!==0&&xe.nodeType!==3||(L=E+p),xe!==v||d!==0&&xe.nodeType!==3||(F=E+d),xe.nodeType===3&&(E+=xe.nodeValue.length),(Le=xe.firstChild)!==null;)me=xe,xe=Le;for(;;){if(xe===n)break t;if(me===l&&++Q===p&&(L=E),me===v&&++_e===d&&(F=E),(Le=xe.nextSibling)!==null)break;xe=me,me=xe.parentNode}xe=Le}l=L===-1||F===-1?null:{start:L,end:F}}else l=null}l=l||{start:0,end:0}}else l=null;for(Xc={focusedElem:n,selectionRange:l},Ia=!1,Be=r;Be!==null;)if(r=Be,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,Be=n;else for(;Be!==null;){r=Be;try{var He=r.alternate;if(r.flags&1024)switch(r.tag){case 0:case 11:case 15:break;case 1:if(He!==null){var Ve=He.memoizedProps,Kt=He.memoizedState,q=r.stateNode,V=q.getSnapshotBeforeUpdate(r.elementType===r.type?Ve:ai(r.type,Ve),Kt);q.__reactInternalSnapshotBeforeUpdate=V}break;case 3:var K=r.stateNode.containerInfo;K.nodeType===1?K.textContent="":K.nodeType===9&&K.documentElement&&K.removeChild(K.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ee){Yt(r,r.return,Ee)}if(n=r.sibling,n!==null){n.return=r.return,Be=n;break}Be=r.return}return He=Kp,Kp=!1,He}function $o(n,r,l){var d=r.updateQueue;if(d=d!==null?d.lastEffect:null,d!==null){var p=d=d.next;do{if((p.tag&n)===n){var v=p.destroy;p.destroy=void 0,v!==void 0&&Lu(r,l,v)}p=p.next}while(p!==d)}}function fl(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&n)===n){var d=l.create;l.destroy=d()}l=l.next}while(l!==r)}}function Du(n){var r=n.ref;if(r!==null){var l=n.stateNode;switch(n.tag){case 5:n=l;break;default:n=l}typeof r=="function"?r(n):r.current=n}}function $p(n){var r=n.alternate;r!==null&&(n.alternate=null,$p(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[yi],delete r[ko],delete r[Kc],delete r[Uv],delete r[Fv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Zp(n){return n.tag===5||n.tag===3||n.tag===4}function Qp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Zp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Nu(n,r,l){var d=n.tag;if(d===5||d===6)n=n.stateNode,r?l.nodeType===8?l.parentNode.insertBefore(n,r):l.insertBefore(n,r):(l.nodeType===8?(r=l.parentNode,r.insertBefore(n,l)):(r=l,r.appendChild(n)),l=l._reactRootContainer,l!=null||r.onclick!==null||(r.onclick=Ga));else if(d!==4&&(n=n.child,n!==null))for(Nu(n,r,l),n=n.sibling;n!==null;)Nu(n,r,l),n=n.sibling}function Uu(n,r,l){var d=n.tag;if(d===5||d===6)n=n.stateNode,r?l.insertBefore(n,r):l.appendChild(n);else if(d!==4&&(n=n.child,n!==null))for(Uu(n,r,l),n=n.sibling;n!==null;)Uu(n,r,l),n=n.sibling}var un=null,li=!1;function _r(n,r,l){for(l=l.child;l!==null;)Jp(n,r,l),l=l.sibling}function Jp(n,r,l){if(st&&typeof st.onCommitFiberUnmount=="function")try{st.onCommitFiberUnmount(je,l)}catch{}switch(l.tag){case 5:vn||Us(l,r);case 6:var d=un,p=li;un=null,_r(n,r,l),un=d,li=p,un!==null&&(li?(n=un,l=l.stateNode,n.nodeType===8?n.parentNode.removeChild(l):n.removeChild(l)):un.removeChild(l.stateNode));break;case 18:un!==null&&(li?(n=un,l=l.stateNode,n.nodeType===8?qc(n.parentNode,l):n.nodeType===1&&qc(n,l),Co(n)):qc(un,l.stateNode));break;case 4:d=un,p=li,un=l.stateNode.containerInfo,li=!0,_r(n,r,l),un=d,li=p;break;case 0:case 11:case 14:case 15:if(!vn&&(d=l.updateQueue,d!==null&&(d=d.lastEffect,d!==null))){p=d=d.next;do{var v=p,E=v.destroy;v=v.tag,E!==void 0&&(v&2||v&4)&&Lu(l,r,E),p=p.next}while(p!==d)}_r(n,r,l);break;case 1:if(!vn&&(Us(l,r),d=l.stateNode,typeof d.componentWillUnmount=="function"))try{d.props=l.memoizedProps,d.state=l.memoizedState,d.componentWillUnmount()}catch(L){Yt(l,r,L)}_r(n,r,l);break;case 21:_r(n,r,l);break;case 22:l.mode&1?(vn=(d=vn)||l.memoizedState!==null,_r(n,r,l),vn=d):_r(n,r,l);break;default:_r(n,r,l)}}function em(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var l=n.stateNode;l===null&&(l=n.stateNode=new Qv),r.forEach(function(d){var p=l0.bind(null,n,d);l.has(d)||(l.add(d),d.then(p,p))})}}function ci(n,r){var l=r.deletions;if(l!==null)for(var d=0;d<l.length;d++){var p=l[d];try{var v=n,E=r,L=E;e:for(;L!==null;){switch(L.tag){case 5:un=L.stateNode,li=!1;break e;case 3:un=L.stateNode.containerInfo,li=!0;break e;case 4:un=L.stateNode.containerInfo,li=!0;break e}L=L.return}if(un===null)throw Error(t(160));Jp(v,E,p),un=null,li=!1;var F=p.alternate;F!==null&&(F.return=null),p.return=null}catch(Q){Yt(p,r,Q)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)tm(r,n),r=r.sibling}function tm(n,r){var l=n.alternate,d=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(ci(r,n),Ei(n),d&4){try{$o(3,n,n.return),fl(3,n)}catch(Ve){Yt(n,n.return,Ve)}try{$o(5,n,n.return)}catch(Ve){Yt(n,n.return,Ve)}}break;case 1:ci(r,n),Ei(n),d&512&&l!==null&&Us(l,l.return);break;case 5:if(ci(r,n),Ei(n),d&512&&l!==null&&Us(l,l.return),n.flags&32){var p=n.stateNode;try{ut(p,"")}catch(Ve){Yt(n,n.return,Ve)}}if(d&4&&(p=n.stateNode,p!=null)){var v=n.memoizedProps,E=l!==null?l.memoizedProps:v,L=n.type,F=n.updateQueue;if(n.updateQueue=null,F!==null)try{L==="input"&&v.type==="radio"&&v.name!=null&&pt(p,v),it(L,E);var Q=it(L,v);for(E=0;E<F.length;E+=2){var _e=F[E],xe=F[E+1];_e==="style"?Je(p,xe):_e==="dangerouslySetInnerHTML"?Fe(p,xe):_e==="children"?ut(p,xe):I(p,_e,xe,Q)}switch(L){case"input":dt(p,v);break;case"textarea":pe(p,v);break;case"select":var me=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!v.multiple;var Le=v.value;Le!=null?P(p,!!v.multiple,Le,!1):me!==!!v.multiple&&(v.defaultValue!=null?P(p,!!v.multiple,v.defaultValue,!0):P(p,!!v.multiple,v.multiple?[]:"",!1))}p[ko]=v}catch(Ve){Yt(n,n.return,Ve)}}break;case 6:if(ci(r,n),Ei(n),d&4){if(n.stateNode===null)throw Error(t(162));p=n.stateNode,v=n.memoizedProps;try{p.nodeValue=v}catch(Ve){Yt(n,n.return,Ve)}}break;case 3:if(ci(r,n),Ei(n),d&4&&l!==null&&l.memoizedState.isDehydrated)try{Co(r.containerInfo)}catch(Ve){Yt(n,n.return,Ve)}break;case 4:ci(r,n),Ei(n);break;case 13:ci(r,n),Ei(n),p=n.child,p.flags&8192&&(v=p.memoizedState!==null,p.stateNode.isHidden=v,!v||p.alternate!==null&&p.alternate.memoizedState!==null||(Bu=H())),d&4&&em(n);break;case 22:if(_e=l!==null&&l.memoizedState!==null,n.mode&1?(vn=(Q=vn)||_e,ci(r,n),vn=Q):ci(r,n),Ei(n),d&8192){if(Q=n.memoizedState!==null,(n.stateNode.isHidden=Q)&&!_e&&n.mode&1)for(Be=n,_e=n.child;_e!==null;){for(xe=Be=_e;Be!==null;){switch(me=Be,Le=me.child,me.tag){case 0:case 11:case 14:case 15:$o(4,me,me.return);break;case 1:Us(me,me.return);var He=me.stateNode;if(typeof He.componentWillUnmount=="function"){d=me,l=me.return;try{r=d,He.props=r.memoizedProps,He.state=r.memoizedState,He.componentWillUnmount()}catch(Ve){Yt(d,l,Ve)}}break;case 5:Us(me,me.return);break;case 22:if(me.memoizedState!==null){rm(xe);continue}}Le!==null?(Le.return=me,Be=Le):rm(xe)}_e=_e.sibling}e:for(_e=null,xe=n;;){if(xe.tag===5){if(_e===null){_e=xe;try{p=xe.stateNode,Q?(v=p.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none"):(L=xe.stateNode,F=xe.memoizedProps.style,E=F!=null&&F.hasOwnProperty("display")?F.display:null,L.style.display=Ke("display",E))}catch(Ve){Yt(n,n.return,Ve)}}}else if(xe.tag===6){if(_e===null)try{xe.stateNode.nodeValue=Q?"":xe.memoizedProps}catch(Ve){Yt(n,n.return,Ve)}}else if((xe.tag!==22&&xe.tag!==23||xe.memoizedState===null||xe===n)&&xe.child!==null){xe.child.return=xe,xe=xe.child;continue}if(xe===n)break e;for(;xe.sibling===null;){if(xe.return===null||xe.return===n)break e;_e===xe&&(_e=null),xe=xe.return}_e===xe&&(_e=null),xe.sibling.return=xe.return,xe=xe.sibling}}break;case 19:ci(r,n),Ei(n),d&4&&em(n);break;case 21:break;default:ci(r,n),Ei(n)}}function Ei(n){var r=n.flags;if(r&2){try{e:{for(var l=n.return;l!==null;){if(Zp(l)){var d=l;break e}l=l.return}throw Error(t(160))}switch(d.tag){case 5:var p=d.stateNode;d.flags&32&&(ut(p,""),d.flags&=-33);var v=Qp(n);Uu(n,v,p);break;case 3:case 4:var E=d.stateNode.containerInfo,L=Qp(n);Nu(n,L,E);break;default:throw Error(t(161))}}catch(F){Yt(n,n.return,F)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function e0(n,r,l){Be=n,nm(n)}function nm(n,r,l){for(var d=(n.mode&1)!==0;Be!==null;){var p=Be,v=p.child;if(p.tag===22&&d){var E=p.memoizedState!==null||dl;if(!E){var L=p.alternate,F=L!==null&&L.memoizedState!==null||vn;L=dl;var Q=vn;if(dl=E,(vn=F)&&!Q)for(Be=p;Be!==null;)E=Be,F=E.child,E.tag===22&&E.memoizedState!==null?sm(p):F!==null?(F.return=E,Be=F):sm(p);for(;v!==null;)Be=v,nm(v),v=v.sibling;Be=p,dl=L,vn=Q}im(n)}else p.subtreeFlags&8772&&v!==null?(v.return=p,Be=v):im(n)}}function im(n){for(;Be!==null;){var r=Be;if(r.flags&8772){var l=r.alternate;try{if(r.flags&8772)switch(r.tag){case 0:case 11:case 15:vn||fl(5,r);break;case 1:var d=r.stateNode;if(r.flags&4&&!vn)if(l===null)d.componentDidMount();else{var p=r.elementType===r.type?l.memoizedProps:ai(r.type,l.memoizedProps);d.componentDidUpdate(p,l.memoizedState,d.__reactInternalSnapshotBeforeUpdate)}var v=r.updateQueue;v!==null&&rp(r,v,d);break;case 3:var E=r.updateQueue;if(E!==null){if(l=null,r.child!==null)switch(r.child.tag){case 5:l=r.child.stateNode;break;case 1:l=r.child.stateNode}rp(r,E,l)}break;case 5:var L=r.stateNode;if(l===null&&r.flags&4){l=L;var F=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":F.autoFocus&&l.focus();break;case"img":F.src&&(l.src=F.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var Q=r.alternate;if(Q!==null){var _e=Q.memoizedState;if(_e!==null){var xe=_e.dehydrated;xe!==null&&Co(xe)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}vn||r.flags&512&&Du(r)}catch(me){Yt(r,r.return,me)}}if(r===n){Be=null;break}if(l=r.sibling,l!==null){l.return=r.return,Be=l;break}Be=r.return}}function rm(n){for(;Be!==null;){var r=Be;if(r===n){Be=null;break}var l=r.sibling;if(l!==null){l.return=r.return,Be=l;break}Be=r.return}}function sm(n){for(;Be!==null;){var r=Be;try{switch(r.tag){case 0:case 11:case 15:var l=r.return;try{fl(4,r)}catch(F){Yt(r,l,F)}break;case 1:var d=r.stateNode;if(typeof d.componentDidMount=="function"){var p=r.return;try{d.componentDidMount()}catch(F){Yt(r,p,F)}}var v=r.return;try{Du(r)}catch(F){Yt(r,v,F)}break;case 5:var E=r.return;try{Du(r)}catch(F){Yt(r,E,F)}}}catch(F){Yt(r,r.return,F)}if(r===n){Be=null;break}var L=r.sibling;if(L!==null){L.return=r.return,Be=L;break}Be=r.return}}var t0=Math.ceil,hl=C.ReactCurrentDispatcher,Fu=C.ReactCurrentOwner,Jn=C.ReactCurrentBatchConfig,Tt=0,sn=null,$t=null,dn=0,Wn=0,Fs=fr(0),en=0,Zo=null,qr=0,pl=0,Ou=0,Qo=null,On=null,Bu=0,Os=1/0,Hi=null,ml=!1,ku=null,vr=null,gl=!1,xr=null,_l=0,Jo=0,zu=null,vl=-1,xl=0;function wn(){return Tt&6?H():vl!==-1?vl:vl=H()}function yr(n){return n.mode&1?Tt&2&&dn!==0?dn&-dn:Bv.transition!==null?(xl===0&&(xl=Tn()),xl):(n=mt,n!==0||(n=window.event,n=n===void 0?16:ah(n.type)),n):1}function ui(n,r,l,d){if(50<Jo)throw Jo=0,zu=null,Error(t(185));qt(n,l,d),(!(Tt&2)||n!==sn)&&(n===sn&&(!(Tt&2)&&(pl|=l),en===4&&Sr(n,dn)),Bn(n,d),l===1&&Tt===0&&!(r.mode&1)&&(Os=H()+500,Ya&&pr()))}function Bn(n,r){var l=n.callbackNode;kr(n,r);var d=ri(n,n===sn?dn:0);if(d===0)l!==null&&X(l),n.callbackNode=null,n.callbackPriority=0;else if(r=d&-d,n.callbackPriority!==r){if(l!=null&&X(l),r===1)n.tag===0?Ov(am.bind(null,n)):jh(am.bind(null,n)),Dv(function(){!(Tt&6)&&pr()}),l=null;else{switch(Jf(d)){case 1:l=Re;break;case 4:l=De;break;case 16:l=Oe;break;case 536870912:l=tt;break;default:l=Oe}l=mm(l,om.bind(null,n))}n.callbackPriority=r,n.callbackNode=l}}function om(n,r){if(vl=-1,xl=0,Tt&6)throw Error(t(327));var l=n.callbackNode;if(Bs()&&n.callbackNode!==l)return null;var d=ri(n,n===sn?dn:0);if(d===0)return null;if(d&30||d&n.expiredLanes||r)r=yl(n,d);else{r=d;var p=Tt;Tt|=2;var v=cm();(sn!==n||dn!==r)&&(Hi=null,Os=H()+500,$r(n,r));do try{r0();break}catch(L){lm(n,L)}while(!0);ru(),hl.current=v,Tt=p,$t!==null?r=0:(sn=null,dn=0,r=en)}if(r!==0){if(r===2&&(p=Nt(n),p!==0&&(d=p,r=Hu(n,p))),r===1)throw l=Zo,$r(n,0),Sr(n,d),Bn(n,H()),l;if(r===6)Sr(n,d);else{if(p=n.current.alternate,!(d&30)&&!n0(p)&&(r=yl(n,d),r===2&&(v=Nt(n),v!==0&&(d=v,r=Hu(n,v))),r===1))throw l=Zo,$r(n,0),Sr(n,d),Bn(n,H()),l;switch(n.finishedWork=p,n.finishedLanes=d,r){case 0:case 1:throw Error(t(345));case 2:Zr(n,On,Hi);break;case 3:if(Sr(n,d),(d&130023424)===d&&(r=Bu+500-H(),10<r)){if(ri(n,0)!==0)break;if(p=n.suspendedLanes,(p&d)!==d){wn(),n.pingedLanes|=n.suspendedLanes&p;break}n.timeoutHandle=Yc(Zr.bind(null,n,On,Hi),r);break}Zr(n,On,Hi);break;case 4:if(Sr(n,d),(d&4194240)===d)break;for(r=n.eventTimes,p=-1;0<d;){var E=31-wt(d);v=1<<E,E=r[E],E>p&&(p=E),d&=~v}if(d=p,d=H()-d,d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3e3>d?3e3:4320>d?4320:1960*t0(d/1960))-d,10<d){n.timeoutHandle=Yc(Zr.bind(null,n,On,Hi),d);break}Zr(n,On,Hi);break;case 5:Zr(n,On,Hi);break;default:throw Error(t(329))}}}return Bn(n,H()),n.callbackNode===l?om.bind(null,n):null}function Hu(n,r){var l=Qo;return n.current.memoizedState.isDehydrated&&($r(n,r).flags|=256),n=yl(n,r),n!==2&&(r=On,On=l,r!==null&&Vu(r)),n}function Vu(n){On===null?On=n:On.push.apply(On,n)}function n0(n){for(var r=n;;){if(r.flags&16384){var l=r.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var d=0;d<l.length;d++){var p=l[d],v=p.getSnapshot;p=p.value;try{if(!si(v(),p))return!1}catch{return!1}}}if(l=r.child,r.subtreeFlags&16384&&l!==null)l.return=r,r=l;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Sr(n,r){for(r&=~Ou,r&=~pl,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var l=31-wt(r),d=1<<l;n[l]=-1,r&=~d}}function am(n){if(Tt&6)throw Error(t(327));Bs();var r=ri(n,0);if(!(r&1))return Bn(n,H()),null;var l=yl(n,r);if(n.tag!==0&&l===2){var d=Nt(n);d!==0&&(r=d,l=Hu(n,d))}if(l===1)throw l=Zo,$r(n,0),Sr(n,r),Bn(n,H()),l;if(l===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,Zr(n,On,Hi),Bn(n,H()),null}function Gu(n,r){var l=Tt;Tt|=1;try{return n(r)}finally{Tt=l,Tt===0&&(Os=H()+500,Ya&&pr())}}function Kr(n){xr!==null&&xr.tag===0&&!(Tt&6)&&Bs();var r=Tt;Tt|=1;var l=Jn.transition,d=mt;try{if(Jn.transition=null,mt=1,n)return n()}finally{mt=d,Jn.transition=l,Tt=r,!(Tt&6)&&pr()}}function Wu(){Wn=Fs.current,zt(Fs)}function $r(n,r){n.finishedWork=null,n.finishedLanes=0;var l=n.timeoutHandle;if(l!==-1&&(n.timeoutHandle=-1,Lv(l)),$t!==null)for(l=$t.return;l!==null;){var d=l;switch(Jc(d),d.tag){case 1:d=d.type.childContextTypes,d!=null&&Xa();break;case 3:Ds(),zt(Nn),zt(mn),fu();break;case 5:uu(d);break;case 4:Ds();break;case 13:zt(Gt);break;case 19:zt(Gt);break;case 10:su(d.type._context);break;case 22:case 23:Wu()}l=l.return}if(sn=n,$t=n=Mr(n.current,null),dn=Wn=r,en=0,Zo=null,Ou=pl=qr=0,On=Qo=null,Xr!==null){for(r=0;r<Xr.length;r++)if(l=Xr[r],d=l.interleaved,d!==null){l.interleaved=null;var p=d.next,v=l.pending;if(v!==null){var E=v.next;v.next=p,d.next=E}l.pending=d}Xr=null}return n}function lm(n,r){do{var l=$t;try{if(ru(),il.current=al,rl){for(var d=Wt.memoizedState;d!==null;){var p=d.queue;p!==null&&(p.pending=null),d=d.next}rl=!1}if(Yr=0,rn=Jt=Wt=null,Xo=!1,jo=0,Fu.current=null,l===null||l.return===null){en=1,Zo=r,$t=null;break}e:{var v=n,E=l.return,L=l,F=r;if(r=dn,L.flags|=32768,F!==null&&typeof F=="object"&&typeof F.then=="function"){var Q=F,_e=L,xe=_e.tag;if(!(_e.mode&1)&&(xe===0||xe===11||xe===15)){var me=_e.alternate;me?(_e.updateQueue=me.updateQueue,_e.memoizedState=me.memoizedState,_e.lanes=me.lanes):(_e.updateQueue=null,_e.memoizedState=null)}var Le=Dp(E);if(Le!==null){Le.flags&=-257,Np(Le,E,L,v,r),Le.mode&1&&Lp(v,Q,r),r=Le,F=Q;var He=r.updateQueue;if(He===null){var Ve=new Set;Ve.add(F),r.updateQueue=Ve}else He.add(F);break e}else{if(!(r&1)){Lp(v,Q,r),Xu();break e}F=Error(t(426))}}else if(Vt&&L.mode&1){var Kt=Dp(E);if(Kt!==null){!(Kt.flags&65536)&&(Kt.flags|=256),Np(Kt,E,L,v,r),nu(Ns(F,L));break e}}v=F=Ns(F,L),en!==4&&(en=2),Qo===null?Qo=[v]:Qo.push(v),v=E;do{switch(v.tag){case 3:v.flags|=65536,r&=-r,v.lanes|=r;var q=Pp(v,F,r);ip(v,q);break e;case 1:L=F;var V=v.type,K=v.stateNode;if(!(v.flags&128)&&(typeof V.getDerivedStateFromError=="function"||K!==null&&typeof K.componentDidCatch=="function"&&(vr===null||!vr.has(K)))){v.flags|=65536,r&=-r,v.lanes|=r;var Ee=Ip(v,L,r);ip(v,Ee);break e}}v=v.return}while(v!==null)}dm(l)}catch(We){r=We,$t===l&&l!==null&&($t=l=l.return);continue}break}while(!0)}function cm(){var n=hl.current;return hl.current=al,n===null?al:n}function Xu(){(en===0||en===3||en===2)&&(en=4),sn===null||!(qr&268435455)&&!(pl&268435455)||Sr(sn,dn)}function yl(n,r){var l=Tt;Tt|=2;var d=cm();(sn!==n||dn!==r)&&(Hi=null,$r(n,r));do try{i0();break}catch(p){lm(n,p)}while(!0);if(ru(),Tt=l,hl.current=d,$t!==null)throw Error(t(261));return sn=null,dn=0,en}function i0(){for(;$t!==null;)um($t)}function r0(){for(;$t!==null&&!J();)um($t)}function um(n){var r=pm(n.alternate,n,Wn);n.memoizedProps=n.pendingProps,r===null?dm(n):$t=r,Fu.current=null}function dm(n){var r=n;do{var l=r.alternate;if(n=r.return,r.flags&32768){if(l=Zv(l,r),l!==null){l.flags&=32767,$t=l;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{en=6,$t=null;return}}else if(l=$v(l,r,Wn),l!==null){$t=l;return}if(r=r.sibling,r!==null){$t=r;return}$t=r=n}while(r!==null);en===0&&(en=5)}function Zr(n,r,l){var d=mt,p=Jn.transition;try{Jn.transition=null,mt=1,s0(n,r,l,d)}finally{Jn.transition=p,mt=d}return null}function s0(n,r,l,d){do Bs();while(xr!==null);if(Tt&6)throw Error(t(327));l=n.finishedWork;var p=n.finishedLanes;if(l===null)return null;if(n.finishedWork=null,n.finishedLanes=0,l===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var v=l.lanes|l.childLanes;if(pn(n,v),n===sn&&($t=sn=null,dn=0),!(l.subtreeFlags&2064)&&!(l.flags&2064)||gl||(gl=!0,mm(Oe,function(){return Bs(),null})),v=(l.flags&15990)!==0,l.subtreeFlags&15990||v){v=Jn.transition,Jn.transition=null;var E=mt;mt=1;var L=Tt;Tt|=4,Fu.current=null,Jv(n,l),tm(l,n),Av(Xc),Ia=!!Wc,Xc=Wc=null,n.current=l,e0(l),te(),Tt=L,mt=E,Jn.transition=v}else n.current=l;if(gl&&(gl=!1,xr=n,_l=p),v=n.pendingLanes,v===0&&(vr=null),At(l.stateNode),Bn(n,H()),r!==null)for(d=n.onRecoverableError,l=0;l<r.length;l++)p=r[l],d(p.value,{componentStack:p.stack,digest:p.digest});if(ml)throw ml=!1,n=ku,ku=null,n;return _l&1&&n.tag!==0&&Bs(),v=n.pendingLanes,v&1?n===zu?Jo++:(Jo=0,zu=n):Jo=0,pr(),null}function Bs(){if(xr!==null){var n=Jf(_l),r=Jn.transition,l=mt;try{if(Jn.transition=null,mt=16>n?16:n,xr===null)var d=!1;else{if(n=xr,xr=null,_l=0,Tt&6)throw Error(t(331));var p=Tt;for(Tt|=4,Be=n.current;Be!==null;){var v=Be,E=v.child;if(Be.flags&16){var L=v.deletions;if(L!==null){for(var F=0;F<L.length;F++){var Q=L[F];for(Be=Q;Be!==null;){var _e=Be;switch(_e.tag){case 0:case 11:case 15:$o(8,_e,v)}var xe=_e.child;if(xe!==null)xe.return=_e,Be=xe;else for(;Be!==null;){_e=Be;var me=_e.sibling,Le=_e.return;if($p(_e),_e===Q){Be=null;break}if(me!==null){me.return=Le,Be=me;break}Be=Le}}}var He=v.alternate;if(He!==null){var Ve=He.child;if(Ve!==null){He.child=null;do{var Kt=Ve.sibling;Ve.sibling=null,Ve=Kt}while(Ve!==null)}}Be=v}}if(v.subtreeFlags&2064&&E!==null)E.return=v,Be=E;else e:for(;Be!==null;){if(v=Be,v.flags&2048)switch(v.tag){case 0:case 11:case 15:$o(9,v,v.return)}var q=v.sibling;if(q!==null){q.return=v.return,Be=q;break e}Be=v.return}}var V=n.current;for(Be=V;Be!==null;){E=Be;var K=E.child;if(E.subtreeFlags&2064&&K!==null)K.return=E,Be=K;else e:for(E=V;Be!==null;){if(L=Be,L.flags&2048)try{switch(L.tag){case 0:case 11:case 15:fl(9,L)}}catch(We){Yt(L,L.return,We)}if(L===E){Be=null;break e}var Ee=L.sibling;if(Ee!==null){Ee.return=L.return,Be=Ee;break e}Be=L.return}}if(Tt=p,pr(),st&&typeof st.onPostCommitFiberRoot=="function")try{st.onPostCommitFiberRoot(je,n)}catch{}d=!0}return d}finally{mt=l,Jn.transition=r}}return!1}function fm(n,r,l){r=Ns(l,r),r=Pp(n,r,1),n=gr(n,r,1),r=wn(),n!==null&&(qt(n,1,r),Bn(n,r))}function Yt(n,r,l){if(n.tag===3)fm(n,n,l);else for(;r!==null;){if(r.tag===3){fm(r,n,l);break}else if(r.tag===1){var d=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof d.componentDidCatch=="function"&&(vr===null||!vr.has(d))){n=Ns(l,n),n=Ip(r,n,1),r=gr(r,n,1),n=wn(),r!==null&&(qt(r,1,n),Bn(r,n));break}}r=r.return}}function o0(n,r,l){var d=n.pingCache;d!==null&&d.delete(r),r=wn(),n.pingedLanes|=n.suspendedLanes&l,sn===n&&(dn&l)===l&&(en===4||en===3&&(dn&130023424)===dn&&500>H()-Bu?$r(n,0):Ou|=l),Bn(n,r)}function hm(n,r){r===0&&(n.mode&1?(r=xt,xt<<=1,!(xt&130023424)&&(xt=4194304)):r=1);var l=wn();n=Bi(n,r),n!==null&&(qt(n,r,l),Bn(n,l))}function a0(n){var r=n.memoizedState,l=0;r!==null&&(l=r.retryLane),hm(n,l)}function l0(n,r){var l=0;switch(n.tag){case 13:var d=n.stateNode,p=n.memoizedState;p!==null&&(l=p.retryLane);break;case 19:d=n.stateNode;break;default:throw Error(t(314))}d!==null&&d.delete(r),hm(n,l)}var pm;pm=function(n,r,l){if(n!==null)if(n.memoizedProps!==r.pendingProps||Nn.current)Fn=!0;else{if(!(n.lanes&l)&&!(r.flags&128))return Fn=!1,Kv(n,r,l);Fn=!!(n.flags&131072)}else Fn=!1,Vt&&r.flags&1048576&&Yh(r,Ka,r.index);switch(r.lanes=0,r.tag){case 2:var d=r.type;ul(n,r),n=r.pendingProps;var p=ws(r,mn.current);Ls(r,l),p=mu(null,r,d,n,p,l);var v=gu();return r.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Un(d)?(v=!0,ja(r)):v=!1,r.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,lu(r),p.updater=ll,r.stateNode=p,p._reactInternals=r,Mu(r,d,n,l),r=wu(null,r,d,!0,v,l)):(r.tag=0,Vt&&v&&Qc(r),An(null,r,p,l),r=r.child),r;case 16:d=r.elementType;e:{switch(ul(n,r),n=r.pendingProps,p=d._init,d=p(d._payload),r.type=d,p=r.tag=u0(d),n=ai(d,n),p){case 0:r=Au(null,r,d,n,l);break e;case 1:r=zp(null,r,d,n,l);break e;case 11:r=Up(null,r,d,n,l);break e;case 14:r=Fp(null,r,d,ai(d.type,n),l);break e}throw Error(t(306,d,""))}return r;case 0:return d=r.type,p=r.pendingProps,p=r.elementType===d?p:ai(d,p),Au(n,r,d,p,l);case 1:return d=r.type,p=r.pendingProps,p=r.elementType===d?p:ai(d,p),zp(n,r,d,p,l);case 3:e:{if(Hp(r),n===null)throw Error(t(387));d=r.pendingProps,v=r.memoizedState,p=v.element,np(n,r),tl(r,d,null,l);var E=r.memoizedState;if(d=E.element,v.isDehydrated)if(v={element:d,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},r.updateQueue.baseState=v,r.memoizedState=v,r.flags&256){p=Ns(Error(t(423)),r),r=Vp(n,r,d,l,p);break e}else if(d!==p){p=Ns(Error(t(424)),r),r=Vp(n,r,d,l,p);break e}else for(Gn=dr(r.stateNode.containerInfo.firstChild),Vn=r,Vt=!0,oi=null,l=ep(r,null,d,l),r.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(bs(),d===p){r=zi(n,r,l);break e}An(n,r,d,l)}r=r.child}return r;case 5:return sp(r),n===null&&tu(r),d=r.type,p=r.pendingProps,v=n!==null?n.memoizedProps:null,E=p.children,jc(d,p)?E=null:v!==null&&jc(d,v)&&(r.flags|=32),kp(n,r),An(n,r,E,l),r.child;case 6:return n===null&&tu(r),null;case 13:return Gp(n,r,l);case 4:return cu(r,r.stateNode.containerInfo),d=r.pendingProps,n===null?r.child=Ps(r,null,d,l):An(n,r,d,l),r.child;case 11:return d=r.type,p=r.pendingProps,p=r.elementType===d?p:ai(d,p),Up(n,r,d,p,l);case 7:return An(n,r,r.pendingProps,l),r.child;case 8:return An(n,r,r.pendingProps.children,l),r.child;case 12:return An(n,r,r.pendingProps.children,l),r.child;case 10:e:{if(d=r.type._context,p=r.pendingProps,v=r.memoizedProps,E=p.value,Ot(Qa,d._currentValue),d._currentValue=E,v!==null)if(si(v.value,E)){if(v.children===p.children&&!Nn.current){r=zi(n,r,l);break e}}else for(v=r.child,v!==null&&(v.return=r);v!==null;){var L=v.dependencies;if(L!==null){E=v.child;for(var F=L.firstContext;F!==null;){if(F.context===d){if(v.tag===1){F=ki(-1,l&-l),F.tag=2;var Q=v.updateQueue;if(Q!==null){Q=Q.shared;var _e=Q.pending;_e===null?F.next=F:(F.next=_e.next,_e.next=F),Q.pending=F}}v.lanes|=l,F=v.alternate,F!==null&&(F.lanes|=l),ou(v.return,l,r),L.lanes|=l;break}F=F.next}}else if(v.tag===10)E=v.type===r.type?null:v.child;else if(v.tag===18){if(E=v.return,E===null)throw Error(t(341));E.lanes|=l,L=E.alternate,L!==null&&(L.lanes|=l),ou(E,l,r),E=v.sibling}else E=v.child;if(E!==null)E.return=v;else for(E=v;E!==null;){if(E===r){E=null;break}if(v=E.sibling,v!==null){v.return=E.return,E=v;break}E=E.return}v=E}An(n,r,p.children,l),r=r.child}return r;case 9:return p=r.type,d=r.pendingProps.children,Ls(r,l),p=Zn(p),d=d(p),r.flags|=1,An(n,r,d,l),r.child;case 14:return d=r.type,p=ai(d,r.pendingProps),p=ai(d.type,p),Fp(n,r,d,p,l);case 15:return Op(n,r,r.type,r.pendingProps,l);case 17:return d=r.type,p=r.pendingProps,p=r.elementType===d?p:ai(d,p),ul(n,r),r.tag=1,Un(d)?(n=!0,ja(r)):n=!1,Ls(r,l),Cp(r,d,p),Mu(r,d,p,l),wu(null,r,d,!0,n,l);case 19:return Xp(n,r,l);case 22:return Bp(n,r,l)}throw Error(t(156,r.tag))};function mm(n,r){return w(n,r)}function c0(n,r,l,d){this.tag=n,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=d,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ei(n,r,l,d){return new c0(n,r,l,d)}function ju(n){return n=n.prototype,!(!n||!n.isReactComponent)}function u0(n){if(typeof n=="function")return ju(n)?1:0;if(n!=null){if(n=n.$$typeof,n===oe)return 11;if(n===he)return 14}return 2}function Mr(n,r){var l=n.alternate;return l===null?(l=ei(n.tag,r,n.key,n.mode),l.elementType=n.elementType,l.type=n.type,l.stateNode=n.stateNode,l.alternate=n,n.alternate=l):(l.pendingProps=r,l.type=n.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=n.flags&14680064,l.childLanes=n.childLanes,l.lanes=n.lanes,l.child=n.child,l.memoizedProps=n.memoizedProps,l.memoizedState=n.memoizedState,l.updateQueue=n.updateQueue,r=n.dependencies,l.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},l.sibling=n.sibling,l.index=n.index,l.ref=n.ref,l}function Sl(n,r,l,d,p,v){var E=2;if(d=n,typeof n=="function")ju(n)&&(E=1);else if(typeof n=="string")E=5;else e:switch(n){case U:return Qr(l.children,p,v,r);case j:E=8,p|=8;break;case b:return n=ei(12,l,r,p|2),n.elementType=b,n.lanes=v,n;case ee:return n=ei(13,l,r,p),n.elementType=ee,n.lanes=v,n;case de:return n=ei(19,l,r,p),n.elementType=de,n.lanes=v,n;case le:return Ml(l,p,v,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case R:E=10;break e;case z:E=9;break e;case oe:E=11;break e;case he:E=14;break e;case se:E=16,d=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=ei(E,l,r,p),r.elementType=n,r.type=d,r.lanes=v,r}function Qr(n,r,l,d){return n=ei(7,n,d,r),n.lanes=l,n}function Ml(n,r,l,d){return n=ei(22,n,d,r),n.elementType=le,n.lanes=l,n.stateNode={isHidden:!1},n}function Yu(n,r,l){return n=ei(6,n,null,r),n.lanes=l,n}function qu(n,r,l){return r=ei(4,n.children!==null?n.children:[],n.key,r),r.lanes=l,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function d0(n,r,l,d,p){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=hn(0),this.expirationTimes=hn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=hn(0),this.identifierPrefix=d,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function Ku(n,r,l,d,p,v,E,L,F){return n=new d0(n,r,l,L,F),r===1?(r=1,v===!0&&(r|=8)):r=0,v=ei(3,null,null,r),n.current=v,v.stateNode=n,v.memoizedState={element:d,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},lu(v),n}function f0(n,r,l){var d=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:O,key:d==null?null:""+d,children:n,containerInfo:r,implementation:l}}function gm(n){if(!n)return hr;n=n._reactInternals;e:{if(xi(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Un(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var l=n.type;if(Un(l))return Wh(n,l,r)}return r}function _m(n,r,l,d,p,v,E,L,F){return n=Ku(l,d,!0,n,p,v,E,L,F),n.context=gm(null),l=n.current,d=wn(),p=yr(l),v=ki(d,p),v.callback=r??null,gr(l,v,p),n.current.lanes=p,qt(n,p,d),Bn(n,d),n}function El(n,r,l,d){var p=r.current,v=wn(),E=yr(p);return l=gm(l),r.context===null?r.context=l:r.pendingContext=l,r=ki(v,E),r.payload={element:n},d=d===void 0?null:d,d!==null&&(r.callback=d),n=gr(p,r,E),n!==null&&(ui(n,p,E,v),el(n,p,E)),E}function Tl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function vm(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var l=n.retryLane;n.retryLane=l!==0&&l<r?l:r}}function $u(n,r){vm(n,r),(n=n.alternate)&&vm(n,r)}function h0(){return null}var xm=typeof reportError=="function"?reportError:function(n){console.error(n)};function Zu(n){this._internalRoot=n}Al.prototype.render=Zu.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));El(n,r,null,null)},Al.prototype.unmount=Zu.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;Kr(function(){El(null,n,null,null)}),r[Ni]=null}};function Al(n){this._internalRoot=n}Al.prototype.unstable_scheduleHydration=function(n){if(n){var r=nh();n={blockedOn:null,target:n,priority:r};for(var l=0;l<lr.length&&r!==0&&r<lr[l].priority;l++);lr.splice(l,0,n),l===0&&sh(n)}};function Qu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function wl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function ym(){}function p0(n,r,l,d,p){if(p){if(typeof d=="function"){var v=d;d=function(){var Q=Tl(E);v.call(Q)}}var E=_m(r,d,n,0,null,!1,!1,"",ym);return n._reactRootContainer=E,n[Ni]=E.current,Oo(n.nodeType===8?n.parentNode:n),Kr(),E}for(;p=n.lastChild;)n.removeChild(p);if(typeof d=="function"){var L=d;d=function(){var Q=Tl(F);L.call(Q)}}var F=Ku(n,0,!1,null,null,!1,!1,"",ym);return n._reactRootContainer=F,n[Ni]=F.current,Oo(n.nodeType===8?n.parentNode:n),Kr(function(){El(r,F,l,d)}),F}function Rl(n,r,l,d,p){var v=l._reactRootContainer;if(v){var E=v;if(typeof p=="function"){var L=p;p=function(){var F=Tl(E);L.call(F)}}El(r,E,n,p)}else E=p0(l,r,n,p,d);return Tl(E)}eh=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var l=cn(r.pendingLanes);l!==0&&(zr(r,l|1),Bn(r,H()),!(Tt&6)&&(Os=H()+500,pr()))}break;case 13:Kr(function(){var d=Bi(n,1);if(d!==null){var p=wn();ui(d,n,1,p)}}),$u(n,1)}},Ec=function(n){if(n.tag===13){var r=Bi(n,134217728);if(r!==null){var l=wn();ui(r,n,134217728,l)}$u(n,134217728)}},th=function(n){if(n.tag===13){var r=yr(n),l=Bi(n,r);if(l!==null){var d=wn();ui(l,n,r,d)}$u(n,r)}},nh=function(){return mt},ih=function(n,r){var l=mt;try{return mt=n,r()}finally{mt=l}},we=function(n,r,l){switch(r){case"input":if(dt(n,l),r=l.name,l.type==="radio"&&r!=null){for(l=n;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<l.length;r++){var d=l[r];if(d!==n&&d.form===n.form){var p=Wa(d);if(!p)throw Error(t(90));vt(d),dt(d,p)}}}break;case"textarea":pe(n,l);break;case"select":r=l.value,r!=null&&P(n,!!l.multiple,r,!1)}},Bt=Gu,Qt=Kr;var m0={usingClientEntryPoint:!1,Events:[zo,Ts,Wa,Pe,rt,Gu]},ea={findFiberByHostInstance:Hr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},g0={bundleType:ea.bundleType,version:ea.version,rendererPackageName:ea.rendererPackageName,rendererConfig:ea.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Ra(n),n===null?null:n.stateNode},findFiberByHostInstance:ea.findFiberByHostInstance||h0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Cl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Cl.isDisabled&&Cl.supportsFiber)try{je=Cl.inject(g0),st=Cl}catch{}}return kn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=m0,kn.createPortal=function(n,r){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Qu(r))throw Error(t(200));return f0(n,r,null,l)},kn.createRoot=function(n,r){if(!Qu(n))throw Error(t(299));var l=!1,d="",p=xm;return r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(d=r.identifierPrefix),r.onRecoverableError!==void 0&&(p=r.onRecoverableError)),r=Ku(n,1,!1,null,null,l,!1,d,p),n[Ni]=r.current,Oo(n.nodeType===8?n.parentNode:n),new Zu(r)},kn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Ra(r),n=n===null?null:n.stateNode,n},kn.flushSync=function(n){return Kr(n)},kn.hydrate=function(n,r,l){if(!wl(r))throw Error(t(200));return Rl(null,n,r,!0,l)},kn.hydrateRoot=function(n,r,l){if(!Qu(n))throw Error(t(405));var d=l!=null&&l.hydratedSources||null,p=!1,v="",E=xm;if(l!=null&&(l.unstable_strictMode===!0&&(p=!0),l.identifierPrefix!==void 0&&(v=l.identifierPrefix),l.onRecoverableError!==void 0&&(E=l.onRecoverableError)),r=_m(r,null,n,1,l??null,p,!1,v,E),n[Ni]=r.current,Oo(n),d)for(n=0;n<d.length;n++)l=d[n],p=l._getVersion,p=p(l._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[l,p]:r.mutableSourceEagerHydrationData.push(l,p);return new Al(r)},kn.render=function(n,r,l){if(!wl(r))throw Error(t(200));return Rl(null,n,r,!1,l)},kn.unmountComponentAtNode=function(n){if(!wl(n))throw Error(t(40));return n._reactRootContainer?(Kr(function(){Rl(null,null,n,!1,function(){n._reactRootContainer=null,n[Ni]=null})}),!0):!1},kn.unstable_batchedUpdates=Gu,kn.unstable_renderSubtreeIntoContainer=function(n,r,l,d){if(!wl(l))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Rl(n,r,l,!1,d)},kn.version="18.3.1-next-f1338f8080-20240426",kn}var Cm;function T0(){if(Cm)return td.exports;Cm=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),td.exports=E0(),td.exports}var bm;function A0(){if(bm)return bl;bm=1;var o=T0();return bl.createRoot=o.createRoot,bl.hydrateRoot=o.hydrateRoot,bl}var w0=A0();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Df="171",R0=0,Pm=1,C0=2,$g=1,b0=2,qi=3,er=0,zn=1,Ai=2,Nr=0,ro=1,Im=2,Lm=3,Dm=4,P0=5,ls=100,I0=101,L0=102,D0=103,N0=104,U0=200,F0=201,O0=202,B0=203,zd=204,Hd=205,k0=206,z0=207,H0=208,V0=209,G0=210,W0=211,X0=212,j0=213,Y0=214,Vd=0,Gd=1,Wd=2,lo=3,Xd=4,jd=5,Yd=6,qd=7,Zg=0,q0=1,K0=2,Ur=0,$0=1,Z0=2,Q0=3,J0=4,ex=5,tx=6,nx=7,Nm="attached",ix="detached",Qg=300,co=301,uo=302,Kd=303,$d=304,_c=306,fo=1e3,Lr=1001,dc=1002,Pn=1003,Jg=1004,da=1005,Yn=1006,ic=1007,$i=1008,tr=1009,e_=1010,t_=1011,ga=1012,Nf=1013,fs=1014,gi=1015,ya=1016,Uf=1017,Ff=1018,ho=1020,n_=35902,i_=1021,r_=1022,ii=1023,s_=1024,o_=1025,so=1026,po=1027,Of=1028,Bf=1029,a_=1030,kf=1031,zf=1033,rc=33776,sc=33777,oc=33778,ac=33779,Zd=35840,Qd=35841,Jd=35842,ef=35843,tf=36196,nf=37492,rf=37496,sf=37808,of=37809,af=37810,lf=37811,cf=37812,uf=37813,df=37814,ff=37815,hf=37816,pf=37817,mf=37818,gf=37819,_f=37820,vf=37821,lc=36492,xf=36494,yf=36495,l_=36283,Sf=36284,Mf=36285,Ef=36286,rx=2200,sx=2201,ox=2202,_a=2300,va=2301,rd=2302,to=2400,no=2401,fc=2402,Hf=2500,ax=2501,lx=0,c_=1,Tf=2,cx=3200,ux=3201,u_=0,dx=1,Ir="",fn="srgb",Ln="srgb-linear",hc="linear",Ut="srgb",ks=7680,Um=519,fx=512,hx=513,px=514,d_=515,mx=516,gx=517,_x=518,vx=519,Af=35044,Fm="300 es",Zi=2e3,pc=2001;class ps{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const a=s.indexOf(t);a!==-1&&s.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let a=0,c=s.length;a<c;a++)s[a].call(this,e);e.target=null}}}const xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Om=1234567;const ha=Math.PI/180,mo=180/Math.PI;function _i(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(xn[o&255]+xn[o>>8&255]+xn[o>>16&255]+xn[o>>24&255]+"-"+xn[e&255]+xn[e>>8&255]+"-"+xn[e>>16&15|64]+xn[e>>24&255]+"-"+xn[t&63|128]+xn[t>>8&255]+"-"+xn[t>>16&255]+xn[t>>24&255]+xn[i&255]+xn[i>>8&255]+xn[i>>16&255]+xn[i>>24&255]).toLowerCase()}function gt(o,e,t){return Math.max(e,Math.min(t,o))}function Vf(o,e){return(o%e+e)%e}function xx(o,e,t,i,s){return i+(o-e)*(s-i)/(t-e)}function yx(o,e,t){return o!==e?(t-o)/(e-o):0}function pa(o,e,t){return(1-t)*o+t*e}function Sx(o,e,t,i){return pa(o,e,1-Math.exp(-t*i))}function Mx(o,e=1){return e-Math.abs(Vf(o,e*2)-e)}function Ex(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*(3-2*o))}function Tx(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*o*(o*(o*6-15)+10))}function Ax(o,e){return o+Math.floor(Math.random()*(e-o+1))}function wx(o,e){return o+Math.random()*(e-o)}function Rx(o){return o*(.5-Math.random())}function Cx(o){o!==void 0&&(Om=o);let e=Om+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function bx(o){return o*ha}function Px(o){return o*mo}function Ix(o){return(o&o-1)===0&&o!==0}function Lx(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function Dx(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function Nx(o,e,t,i,s){const a=Math.cos,c=Math.sin,u=a(t/2),f=c(t/2),h=a((e+i)/2),m=c((e+i)/2),g=a((e-i)/2),_=c((e-i)/2),y=a((i-e)/2),M=c((i-e)/2);switch(s){case"XYX":o.set(u*m,f*g,f*_,u*h);break;case"YZY":o.set(f*_,u*m,f*g,u*h);break;case"ZXZ":o.set(f*g,f*_,u*m,u*h);break;case"XZX":o.set(u*m,f*M,f*y,u*h);break;case"YXY":o.set(f*y,u*m,f*M,u*h);break;case"ZYZ":o.set(f*M,f*y,u*m,u*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function pi(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Lt(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const Ux={DEG2RAD:ha,RAD2DEG:mo,generateUUID:_i,clamp:gt,euclideanModulo:Vf,mapLinear:xx,inverseLerp:yx,lerp:pa,damp:Sx,pingpong:Mx,smoothstep:Ex,smootherstep:Tx,randInt:Ax,randFloat:wx,randFloatSpread:Rx,seededRandom:Cx,degToRad:bx,radToDeg:Px,isPowerOfTwo:Ix,ceilPowerOfTwo:Lx,floorPowerOfTwo:Dx,setQuaternionFromProperEuler:Nx,normalize:Lt,denormalize:pi};class Mt{constructor(e=0,t=0){Mt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(gt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(gt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),a=this.x-e.x,c=this.y-e.y;return this.x=a*i-c*s+e.x,this.y=a*s+c*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class at{constructor(e,t,i,s,a,c,u,f,h){at.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,a,c,u,f,h)}set(e,t,i,s,a,c,u,f,h){const m=this.elements;return m[0]=e,m[1]=s,m[2]=u,m[3]=t,m[4]=a,m[5]=f,m[6]=i,m[7]=c,m[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,a=this.elements,c=i[0],u=i[3],f=i[6],h=i[1],m=i[4],g=i[7],_=i[2],y=i[5],M=i[8],T=s[0],S=s[3],x=s[6],D=s[1],I=s[4],C=s[7],G=s[2],O=s[5],U=s[8];return a[0]=c*T+u*D+f*G,a[3]=c*S+u*I+f*O,a[6]=c*x+u*C+f*U,a[1]=h*T+m*D+g*G,a[4]=h*S+m*I+g*O,a[7]=h*x+m*C+g*U,a[2]=_*T+y*D+M*G,a[5]=_*S+y*I+M*O,a[8]=_*x+y*C+M*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],c=e[4],u=e[5],f=e[6],h=e[7],m=e[8];return t*c*m-t*u*h-i*a*m+i*u*f+s*a*h-s*c*f}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],c=e[4],u=e[5],f=e[6],h=e[7],m=e[8],g=m*c-u*h,_=u*f-m*a,y=h*a-c*f,M=t*g+i*_+s*y;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/M;return e[0]=g*T,e[1]=(s*h-m*i)*T,e[2]=(u*i-s*c)*T,e[3]=_*T,e[4]=(m*t-s*f)*T,e[5]=(s*a-u*t)*T,e[6]=y*T,e[7]=(i*f-h*t)*T,e[8]=(c*t-i*a)*T,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,a,c,u){const f=Math.cos(a),h=Math.sin(a);return this.set(i*f,i*h,-i*(f*c+h*u)+c+e,-s*h,s*f,-s*(-h*c+f*u)+u+t,0,0,1),this}scale(e,t){return this.premultiply(sd.makeScale(e,t)),this}rotate(e){return this.premultiply(sd.makeRotation(-e)),this}translate(e,t){return this.premultiply(sd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const sd=new at;function f_(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function xa(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Fx(){const o=xa("canvas");return o.style.display="block",o}const Bm={};function eo(o){o in Bm||(Bm[o]=!0,console.warn(o))}function Ox(o,e,t){return new Promise(function(i,s){function a(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:s();break;case o.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:i()}}setTimeout(a,t)})}function Bx(o){const e=o.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function kx(o){const e=o.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const km=new at().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),zm=new at().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function zx(){const o={enabled:!0,workingColorSpace:Ln,spaces:{},convert:function(s,a,c){return this.enabled===!1||a===c||!a||!c||(this.spaces[a].transfer===Ut&&(s.r=Qi(s.r),s.g=Qi(s.g),s.b=Qi(s.b)),this.spaces[a].primaries!==this.spaces[c].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Ut&&(s.r=oo(s.r),s.g=oo(s.g),s.b=oo(s.b))),s},fromWorkingColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},toWorkingColorSpace:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ir?hc:this.spaces[s].transfer},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,c){return s.copy(this.spaces[a].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return o.define({[Ln]:{primaries:e,whitePoint:i,transfer:hc,toXYZ:km,fromXYZ:zm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:fn},outputColorSpaceConfig:{drawingBufferColorSpace:fn}},[fn]:{primaries:e,whitePoint:i,transfer:Ut,toXYZ:km,fromXYZ:zm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:fn}}}),o}const St=zx();function Qi(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function oo(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let zs;class Hx{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{zs===void 0&&(zs=xa("canvas")),zs.width=e.width,zs.height=e.height;const i=zs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=zs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=xa("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),a=s.data;for(let c=0;c<a.length;c++)a[c]=Qi(a[c]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Qi(t[i]/255)*255):t[i]=Qi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Vx=0;class h_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Vx++}),this.uuid=_i(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let c=0,u=s.length;c<u;c++)s[c].isDataTexture?a.push(od(s[c].image)):a.push(od(s[c]))}else a=od(s);i.url=a}return t||(e.images[this.uuid]=i),i}}function od(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Hx.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Gx=0;class ln extends ps{constructor(e=ln.DEFAULT_IMAGE,t=ln.DEFAULT_MAPPING,i=Lr,s=Lr,a=Yn,c=$i,u=ii,f=tr,h=ln.DEFAULT_ANISOTROPY,m=Ir){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gx++}),this.uuid=_i(),this.name="",this.source=new h_(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=c,this.anisotropy=h,this.format=u,this.internalFormat=null,this.type=f,this.offset=new Mt(0,0),this.repeat=new Mt(1,1),this.center=new Mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new at,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Qg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case fo:e.x=e.x-Math.floor(e.x);break;case Lr:e.x=e.x<0?0:1;break;case dc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case fo:e.y=e.y-Math.floor(e.y);break;case Lr:e.y=e.y<0?0:1;break;case dc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=Qg;ln.DEFAULT_ANISOTROPY=1;class Ct{constructor(e=0,t=0,i=0,s=1){Ct.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,a=this.w,c=e.elements;return this.x=c[0]*t+c[4]*i+c[8]*s+c[12]*a,this.y=c[1]*t+c[5]*i+c[9]*s+c[13]*a,this.z=c[2]*t+c[6]*i+c[10]*s+c[14]*a,this.w=c[3]*t+c[7]*i+c[11]*s+c[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,a;const f=e.elements,h=f[0],m=f[4],g=f[8],_=f[1],y=f[5],M=f[9],T=f[2],S=f[6],x=f[10];if(Math.abs(m-_)<.01&&Math.abs(g-T)<.01&&Math.abs(M-S)<.01){if(Math.abs(m+_)<.1&&Math.abs(g+T)<.1&&Math.abs(M+S)<.1&&Math.abs(h+y+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const I=(h+1)/2,C=(y+1)/2,G=(x+1)/2,O=(m+_)/4,U=(g+T)/4,j=(M+S)/4;return I>C&&I>G?I<.01?(i=0,s=.707106781,a=.707106781):(i=Math.sqrt(I),s=O/i,a=U/i):C>G?C<.01?(i=.707106781,s=0,a=.707106781):(s=Math.sqrt(C),i=O/s,a=j/s):G<.01?(i=.707106781,s=.707106781,a=0):(a=Math.sqrt(G),i=U/a,s=j/a),this.set(i,s,a,t),this}let D=Math.sqrt((S-M)*(S-M)+(g-T)*(g-T)+(_-m)*(_-m));return Math.abs(D)<.001&&(D=1),this.x=(S-M)/D,this.y=(g-T)/D,this.z=(_-m)/D,this.w=Math.acos((h+y+x-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this.z=gt(this.z,e.z,t.z),this.w=gt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this.z=gt(this.z,e,t),this.w=gt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(gt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Wx extends ps{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ct(0,0,e,t),this.scissorTest=!1,this.viewport=new Ct(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const a=new ln(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);a.flipY=!1,a.generateMipmaps=i.generateMipmaps,a.internalFormat=i.internalFormat,this.textures=[];const c=i.count;for(let u=0;u<c;u++)this.textures[u]=a.clone(),this.textures[u].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new h_(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class hs extends Wx{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class p_ extends ln{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=Lr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Xx extends ln{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=Lr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vi{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,a,c,u){let f=i[s+0],h=i[s+1],m=i[s+2],g=i[s+3];const _=a[c+0],y=a[c+1],M=a[c+2],T=a[c+3];if(u===0){e[t+0]=f,e[t+1]=h,e[t+2]=m,e[t+3]=g;return}if(u===1){e[t+0]=_,e[t+1]=y,e[t+2]=M,e[t+3]=T;return}if(g!==T||f!==_||h!==y||m!==M){let S=1-u;const x=f*_+h*y+m*M+g*T,D=x>=0?1:-1,I=1-x*x;if(I>Number.EPSILON){const G=Math.sqrt(I),O=Math.atan2(G,x*D);S=Math.sin(S*O)/G,u=Math.sin(u*O)/G}const C=u*D;if(f=f*S+_*C,h=h*S+y*C,m=m*S+M*C,g=g*S+T*C,S===1-u){const G=1/Math.sqrt(f*f+h*h+m*m+g*g);f*=G,h*=G,m*=G,g*=G}}e[t]=f,e[t+1]=h,e[t+2]=m,e[t+3]=g}static multiplyQuaternionsFlat(e,t,i,s,a,c){const u=i[s],f=i[s+1],h=i[s+2],m=i[s+3],g=a[c],_=a[c+1],y=a[c+2],M=a[c+3];return e[t]=u*M+m*g+f*y-h*_,e[t+1]=f*M+m*_+h*g-u*y,e[t+2]=h*M+m*y+u*_-f*g,e[t+3]=m*M-u*g-f*_-h*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,a=e._z,c=e._order,u=Math.cos,f=Math.sin,h=u(i/2),m=u(s/2),g=u(a/2),_=f(i/2),y=f(s/2),M=f(a/2);switch(c){case"XYZ":this._x=_*m*g+h*y*M,this._y=h*y*g-_*m*M,this._z=h*m*M+_*y*g,this._w=h*m*g-_*y*M;break;case"YXZ":this._x=_*m*g+h*y*M,this._y=h*y*g-_*m*M,this._z=h*m*M-_*y*g,this._w=h*m*g+_*y*M;break;case"ZXY":this._x=_*m*g-h*y*M,this._y=h*y*g+_*m*M,this._z=h*m*M+_*y*g,this._w=h*m*g-_*y*M;break;case"ZYX":this._x=_*m*g-h*y*M,this._y=h*y*g+_*m*M,this._z=h*m*M-_*y*g,this._w=h*m*g+_*y*M;break;case"YZX":this._x=_*m*g+h*y*M,this._y=h*y*g+_*m*M,this._z=h*m*M-_*y*g,this._w=h*m*g-_*y*M;break;case"XZY":this._x=_*m*g-h*y*M,this._y=h*y*g-_*m*M,this._z=h*m*M+_*y*g,this._w=h*m*g+_*y*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],a=t[8],c=t[1],u=t[5],f=t[9],h=t[2],m=t[6],g=t[10],_=i+u+g;if(_>0){const y=.5/Math.sqrt(_+1);this._w=.25/y,this._x=(m-f)*y,this._y=(a-h)*y,this._z=(c-s)*y}else if(i>u&&i>g){const y=2*Math.sqrt(1+i-u-g);this._w=(m-f)/y,this._x=.25*y,this._y=(s+c)/y,this._z=(a+h)/y}else if(u>g){const y=2*Math.sqrt(1+u-i-g);this._w=(a-h)/y,this._x=(s+c)/y,this._y=.25*y,this._z=(f+m)/y}else{const y=2*Math.sqrt(1+g-i-u);this._w=(c-s)/y,this._x=(a+h)/y,this._y=(f+m)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,a=e._z,c=e._w,u=t._x,f=t._y,h=t._z,m=t._w;return this._x=i*m+c*u+s*h-a*f,this._y=s*m+c*f+a*u-i*h,this._z=a*m+c*h+i*f-s*u,this._w=c*m-i*u-s*f-a*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,a=this._z,c=this._w;let u=c*e._w+i*e._x+s*e._y+a*e._z;if(u<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,u=-u):this.copy(e),u>=1)return this._w=c,this._x=i,this._y=s,this._z=a,this;const f=1-u*u;if(f<=Number.EPSILON){const y=1-t;return this._w=y*c+t*this._w,this._x=y*i+t*this._x,this._y=y*s+t*this._y,this._z=y*a+t*this._z,this.normalize(),this}const h=Math.sqrt(f),m=Math.atan2(h,u),g=Math.sin((1-t)*m)/h,_=Math.sin(t*m)/h;return this._w=c*g+this._w*_,this._x=i*g+this._x*_,this._y=s*g+this._y*_,this._z=a*g+this._z*_,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(e=0,t=0,i=0){Y.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Hm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Hm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*s,this.y=a[1]*t+a[4]*i+a[7]*s,this.z=a[2]*t+a[5]*i+a[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,a=e.elements,c=1/(a[3]*t+a[7]*i+a[11]*s+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*s+a[12])*c,this.y=(a[1]*t+a[5]*i+a[9]*s+a[13])*c,this.z=(a[2]*t+a[6]*i+a[10]*s+a[14])*c,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,a=e.x,c=e.y,u=e.z,f=e.w,h=2*(c*s-u*i),m=2*(u*t-a*s),g=2*(a*i-c*t);return this.x=t+f*h+c*g-u*m,this.y=i+f*m+u*h-a*g,this.z=s+f*g+a*m-c*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s,this.y=a[1]*t+a[5]*i+a[9]*s,this.z=a[2]*t+a[6]*i+a[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this.z=gt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this.z=gt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(gt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,a=e.z,c=t.x,u=t.y,f=t.z;return this.x=s*f-a*u,this.y=a*c-i*f,this.z=i*u-s*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ad.copy(this).projectOnVector(e),this.sub(ad)}reflect(e){return this.sub(ad.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(gt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ad=new Y,Hm=new vi;class nr{constructor(e=new Y(1/0,1/0,1/0),t=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(di.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(di.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=di.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let c=0,u=a.count;c<u;c++)e.isMesh===!0?e.getVertexPosition(c,di):di.fromBufferAttribute(a,c),di.applyMatrix4(e.matrixWorld),this.expandByPoint(di);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Pl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Pl.copy(i.boundingBox)),Pl.applyMatrix4(e.matrixWorld),this.union(Pl)}const s=e.children;for(let a=0,c=s.length;a<c;a++)this.expandByObject(s[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,di),di.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(na),Il.subVectors(this.max,na),Hs.subVectors(e.a,na),Vs.subVectors(e.b,na),Gs.subVectors(e.c,na),Tr.subVectors(Vs,Hs),Ar.subVectors(Gs,Vs),Jr.subVectors(Hs,Gs);let t=[0,-Tr.z,Tr.y,0,-Ar.z,Ar.y,0,-Jr.z,Jr.y,Tr.z,0,-Tr.x,Ar.z,0,-Ar.x,Jr.z,0,-Jr.x,-Tr.y,Tr.x,0,-Ar.y,Ar.x,0,-Jr.y,Jr.x,0];return!ld(t,Hs,Vs,Gs,Il)||(t=[1,0,0,0,1,0,0,0,1],!ld(t,Hs,Vs,Gs,Il))?!1:(Ll.crossVectors(Tr,Ar),t=[Ll.x,Ll.y,Ll.z],ld(t,Hs,Vs,Gs,Il))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,di).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(di).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Vi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Vi=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],di=new Y,Pl=new nr,Hs=new Y,Vs=new Y,Gs=new Y,Tr=new Y,Ar=new Y,Jr=new Y,na=new Y,Il=new Y,Ll=new Y,es=new Y;function ld(o,e,t,i,s){for(let a=0,c=o.length-3;a<=c;a+=3){es.fromArray(o,a);const u=s.x*Math.abs(es.x)+s.y*Math.abs(es.y)+s.z*Math.abs(es.z),f=e.dot(es),h=t.dot(es),m=i.dot(es);if(Math.max(-Math.max(f,h,m),Math.min(f,h,m))>u)return!1}return!0}const jx=new nr,ia=new Y,cd=new Y;class Ci{constructor(e=new Y,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):jx.setFromPoints(e).getCenter(i);let s=0;for(let a=0,c=e.length;a<c;a++)s=Math.max(s,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ia.subVectors(e,this.center);const t=ia.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(ia,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(cd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ia.copy(e.center).add(cd)),this.expandByPoint(ia.copy(e.center).sub(cd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Gi=new Y,ud=new Y,Dl=new Y,wr=new Y,dd=new Y,Nl=new Y,fd=new Y;class vc{constructor(e=new Y,t=new Y(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Gi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Gi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Gi.copy(this.origin).addScaledVector(this.direction,t),Gi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){ud.copy(e).add(t).multiplyScalar(.5),Dl.copy(t).sub(e).normalize(),wr.copy(this.origin).sub(ud);const a=e.distanceTo(t)*.5,c=-this.direction.dot(Dl),u=wr.dot(this.direction),f=-wr.dot(Dl),h=wr.lengthSq(),m=Math.abs(1-c*c);let g,_,y,M;if(m>0)if(g=c*f-u,_=c*u-f,M=a*m,g>=0)if(_>=-M)if(_<=M){const T=1/m;g*=T,_*=T,y=g*(g+c*_+2*u)+_*(c*g+_+2*f)+h}else _=a,g=Math.max(0,-(c*_+u)),y=-g*g+_*(_+2*f)+h;else _=-a,g=Math.max(0,-(c*_+u)),y=-g*g+_*(_+2*f)+h;else _<=-M?(g=Math.max(0,-(-c*a+u)),_=g>0?-a:Math.min(Math.max(-a,-f),a),y=-g*g+_*(_+2*f)+h):_<=M?(g=0,_=Math.min(Math.max(-a,-f),a),y=_*(_+2*f)+h):(g=Math.max(0,-(c*a+u)),_=g>0?a:Math.min(Math.max(-a,-f),a),y=-g*g+_*(_+2*f)+h);else _=c>0?-a:a,g=Math.max(0,-(c*_+u)),y=-g*g+_*(_+2*f)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,g),s&&s.copy(ud).addScaledVector(Dl,_),y}intersectSphere(e,t){Gi.subVectors(e.center,this.origin);const i=Gi.dot(this.direction),s=Gi.dot(Gi)-i*i,a=e.radius*e.radius;if(s>a)return null;const c=Math.sqrt(a-s),u=i-c,f=i+c;return f<0?null:u<0?this.at(f,t):this.at(u,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,a,c,u,f;const h=1/this.direction.x,m=1/this.direction.y,g=1/this.direction.z,_=this.origin;return h>=0?(i=(e.min.x-_.x)*h,s=(e.max.x-_.x)*h):(i=(e.max.x-_.x)*h,s=(e.min.x-_.x)*h),m>=0?(a=(e.min.y-_.y)*m,c=(e.max.y-_.y)*m):(a=(e.max.y-_.y)*m,c=(e.min.y-_.y)*m),i>c||a>s||((a>i||isNaN(i))&&(i=a),(c<s||isNaN(s))&&(s=c),g>=0?(u=(e.min.z-_.z)*g,f=(e.max.z-_.z)*g):(u=(e.max.z-_.z)*g,f=(e.min.z-_.z)*g),i>f||u>s)||((u>i||i!==i)&&(i=u),(f<s||s!==s)&&(s=f),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Gi)!==null}intersectTriangle(e,t,i,s,a){dd.subVectors(t,e),Nl.subVectors(i,e),fd.crossVectors(dd,Nl);let c=this.direction.dot(fd),u;if(c>0){if(s)return null;u=1}else if(c<0)u=-1,c=-c;else return null;wr.subVectors(this.origin,e);const f=u*this.direction.dot(Nl.crossVectors(wr,Nl));if(f<0)return null;const h=u*this.direction.dot(dd.cross(wr));if(h<0||f+h>c)return null;const m=-u*wr.dot(fd);return m<0?null:this.at(m/c,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class lt{constructor(e,t,i,s,a,c,u,f,h,m,g,_,y,M,T,S){lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,a,c,u,f,h,m,g,_,y,M,T,S)}set(e,t,i,s,a,c,u,f,h,m,g,_,y,M,T,S){const x=this.elements;return x[0]=e,x[4]=t,x[8]=i,x[12]=s,x[1]=a,x[5]=c,x[9]=u,x[13]=f,x[2]=h,x[6]=m,x[10]=g,x[14]=_,x[3]=y,x[7]=M,x[11]=T,x[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new lt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/Ws.setFromMatrixColumn(e,0).length(),a=1/Ws.setFromMatrixColumn(e,1).length(),c=1/Ws.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*c,t[9]=i[9]*c,t[10]=i[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,a=e.z,c=Math.cos(i),u=Math.sin(i),f=Math.cos(s),h=Math.sin(s),m=Math.cos(a),g=Math.sin(a);if(e.order==="XYZ"){const _=c*m,y=c*g,M=u*m,T=u*g;t[0]=f*m,t[4]=-f*g,t[8]=h,t[1]=y+M*h,t[5]=_-T*h,t[9]=-u*f,t[2]=T-_*h,t[6]=M+y*h,t[10]=c*f}else if(e.order==="YXZ"){const _=f*m,y=f*g,M=h*m,T=h*g;t[0]=_+T*u,t[4]=M*u-y,t[8]=c*h,t[1]=c*g,t[5]=c*m,t[9]=-u,t[2]=y*u-M,t[6]=T+_*u,t[10]=c*f}else if(e.order==="ZXY"){const _=f*m,y=f*g,M=h*m,T=h*g;t[0]=_-T*u,t[4]=-c*g,t[8]=M+y*u,t[1]=y+M*u,t[5]=c*m,t[9]=T-_*u,t[2]=-c*h,t[6]=u,t[10]=c*f}else if(e.order==="ZYX"){const _=c*m,y=c*g,M=u*m,T=u*g;t[0]=f*m,t[4]=M*h-y,t[8]=_*h+T,t[1]=f*g,t[5]=T*h+_,t[9]=y*h-M,t[2]=-h,t[6]=u*f,t[10]=c*f}else if(e.order==="YZX"){const _=c*f,y=c*h,M=u*f,T=u*h;t[0]=f*m,t[4]=T-_*g,t[8]=M*g+y,t[1]=g,t[5]=c*m,t[9]=-u*m,t[2]=-h*m,t[6]=y*g+M,t[10]=_-T*g}else if(e.order==="XZY"){const _=c*f,y=c*h,M=u*f,T=u*h;t[0]=f*m,t[4]=-g,t[8]=h*m,t[1]=_*g+T,t[5]=c*m,t[9]=y*g-M,t[2]=M*g-y,t[6]=u*m,t[10]=T*g+_}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Yx,e,qx)}lookAt(e,t,i){const s=this.elements;return Xn.subVectors(e,t),Xn.lengthSq()===0&&(Xn.z=1),Xn.normalize(),Rr.crossVectors(i,Xn),Rr.lengthSq()===0&&(Math.abs(i.z)===1?Xn.x+=1e-4:Xn.z+=1e-4,Xn.normalize(),Rr.crossVectors(i,Xn)),Rr.normalize(),Ul.crossVectors(Xn,Rr),s[0]=Rr.x,s[4]=Ul.x,s[8]=Xn.x,s[1]=Rr.y,s[5]=Ul.y,s[9]=Xn.y,s[2]=Rr.z,s[6]=Ul.z,s[10]=Xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,a=this.elements,c=i[0],u=i[4],f=i[8],h=i[12],m=i[1],g=i[5],_=i[9],y=i[13],M=i[2],T=i[6],S=i[10],x=i[14],D=i[3],I=i[7],C=i[11],G=i[15],O=s[0],U=s[4],j=s[8],b=s[12],R=s[1],z=s[5],oe=s[9],ee=s[13],de=s[2],he=s[6],se=s[10],le=s[14],k=s[3],ae=s[7],re=s[11],N=s[15];return a[0]=c*O+u*R+f*de+h*k,a[4]=c*U+u*z+f*he+h*ae,a[8]=c*j+u*oe+f*se+h*re,a[12]=c*b+u*ee+f*le+h*N,a[1]=m*O+g*R+_*de+y*k,a[5]=m*U+g*z+_*he+y*ae,a[9]=m*j+g*oe+_*se+y*re,a[13]=m*b+g*ee+_*le+y*N,a[2]=M*O+T*R+S*de+x*k,a[6]=M*U+T*z+S*he+x*ae,a[10]=M*j+T*oe+S*se+x*re,a[14]=M*b+T*ee+S*le+x*N,a[3]=D*O+I*R+C*de+G*k,a[7]=D*U+I*z+C*he+G*ae,a[11]=D*j+I*oe+C*se+G*re,a[15]=D*b+I*ee+C*le+G*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],a=e[12],c=e[1],u=e[5],f=e[9],h=e[13],m=e[2],g=e[6],_=e[10],y=e[14],M=e[3],T=e[7],S=e[11],x=e[15];return M*(+a*f*g-s*h*g-a*u*_+i*h*_+s*u*y-i*f*y)+T*(+t*f*y-t*h*_+a*c*_-s*c*y+s*h*m-a*f*m)+S*(+t*h*g-t*u*y-a*c*g+i*c*y+a*u*m-i*h*m)+x*(-s*u*m-t*f*g+t*u*_+s*c*g-i*c*_+i*f*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],c=e[4],u=e[5],f=e[6],h=e[7],m=e[8],g=e[9],_=e[10],y=e[11],M=e[12],T=e[13],S=e[14],x=e[15],D=g*S*h-T*_*h+T*f*y-u*S*y-g*f*x+u*_*x,I=M*_*h-m*S*h-M*f*y+c*S*y+m*f*x-c*_*x,C=m*T*h-M*g*h+M*u*y-c*T*y-m*u*x+c*g*x,G=M*g*f-m*T*f-M*u*_+c*T*_+m*u*S-c*g*S,O=t*D+i*I+s*C+a*G;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/O;return e[0]=D*U,e[1]=(T*_*a-g*S*a-T*s*y+i*S*y+g*s*x-i*_*x)*U,e[2]=(u*S*a-T*f*a+T*s*h-i*S*h-u*s*x+i*f*x)*U,e[3]=(g*f*a-u*_*a-g*s*h+i*_*h+u*s*y-i*f*y)*U,e[4]=I*U,e[5]=(m*S*a-M*_*a+M*s*y-t*S*y-m*s*x+t*_*x)*U,e[6]=(M*f*a-c*S*a-M*s*h+t*S*h+c*s*x-t*f*x)*U,e[7]=(c*_*a-m*f*a+m*s*h-t*_*h-c*s*y+t*f*y)*U,e[8]=C*U,e[9]=(M*g*a-m*T*a-M*i*y+t*T*y+m*i*x-t*g*x)*U,e[10]=(c*T*a-M*u*a+M*i*h-t*T*h-c*i*x+t*u*x)*U,e[11]=(m*u*a-c*g*a-m*i*h+t*g*h+c*i*y-t*u*y)*U,e[12]=G*U,e[13]=(m*T*s-M*g*s+M*i*_-t*T*_-m*i*S+t*g*S)*U,e[14]=(M*u*s-c*T*s-M*i*f+t*T*f+c*i*S-t*u*S)*U,e[15]=(c*g*s-m*u*s+m*i*f-t*g*f-c*i*_+t*u*_)*U,this}scale(e){const t=this.elements,i=e.x,s=e.y,a=e.z;return t[0]*=i,t[4]*=s,t[8]*=a,t[1]*=i,t[5]*=s,t[9]*=a,t[2]*=i,t[6]*=s,t[10]*=a,t[3]*=i,t[7]*=s,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),a=1-i,c=e.x,u=e.y,f=e.z,h=a*c,m=a*u;return this.set(h*c+i,h*u-s*f,h*f+s*u,0,h*u+s*f,m*u+i,m*f-s*c,0,h*f-s*u,m*f+s*c,a*f*f+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,a,c){return this.set(1,i,a,0,e,1,c,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,a=t._x,c=t._y,u=t._z,f=t._w,h=a+a,m=c+c,g=u+u,_=a*h,y=a*m,M=a*g,T=c*m,S=c*g,x=u*g,D=f*h,I=f*m,C=f*g,G=i.x,O=i.y,U=i.z;return s[0]=(1-(T+x))*G,s[1]=(y+C)*G,s[2]=(M-I)*G,s[3]=0,s[4]=(y-C)*O,s[5]=(1-(_+x))*O,s[6]=(S+D)*O,s[7]=0,s[8]=(M+I)*U,s[9]=(S-D)*U,s[10]=(1-(_+T))*U,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let a=Ws.set(s[0],s[1],s[2]).length();const c=Ws.set(s[4],s[5],s[6]).length(),u=Ws.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),e.x=s[12],e.y=s[13],e.z=s[14],fi.copy(this);const h=1/a,m=1/c,g=1/u;return fi.elements[0]*=h,fi.elements[1]*=h,fi.elements[2]*=h,fi.elements[4]*=m,fi.elements[5]*=m,fi.elements[6]*=m,fi.elements[8]*=g,fi.elements[9]*=g,fi.elements[10]*=g,t.setFromRotationMatrix(fi),i.x=a,i.y=c,i.z=u,this}makePerspective(e,t,i,s,a,c,u=Zi){const f=this.elements,h=2*a/(t-e),m=2*a/(i-s),g=(t+e)/(t-e),_=(i+s)/(i-s);let y,M;if(u===Zi)y=-(c+a)/(c-a),M=-2*c*a/(c-a);else if(u===pc)y=-c/(c-a),M=-c*a/(c-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return f[0]=h,f[4]=0,f[8]=g,f[12]=0,f[1]=0,f[5]=m,f[9]=_,f[13]=0,f[2]=0,f[6]=0,f[10]=y,f[14]=M,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(e,t,i,s,a,c,u=Zi){const f=this.elements,h=1/(t-e),m=1/(i-s),g=1/(c-a),_=(t+e)*h,y=(i+s)*m;let M,T;if(u===Zi)M=(c+a)*g,T=-2*g;else if(u===pc)M=a*g,T=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return f[0]=2*h,f[4]=0,f[8]=0,f[12]=-_,f[1]=0,f[5]=2*m,f[9]=0,f[13]=-y,f[2]=0,f[6]=0,f[10]=T,f[14]=-M,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ws=new Y,fi=new lt,Yx=new Y(0,0,0),qx=new Y(1,1,1),Rr=new Y,Ul=new Y,Xn=new Y,Vm=new lt,Gm=new vi;class Ri{constructor(e=0,t=0,i=0,s=Ri.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,a=s[0],c=s[4],u=s[8],f=s[1],h=s[5],m=s[9],g=s[2],_=s[6],y=s[10];switch(t){case"XYZ":this._y=Math.asin(gt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-m,y),this._z=Math.atan2(-c,a)):(this._x=Math.atan2(_,h),this._z=0);break;case"YXZ":this._x=Math.asin(-gt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(u,y),this._z=Math.atan2(f,h)):(this._y=Math.atan2(-g,a),this._z=0);break;case"ZXY":this._x=Math.asin(gt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-g,y),this._z=Math.atan2(-c,h)):(this._y=0,this._z=Math.atan2(f,a));break;case"ZYX":this._y=Math.asin(-gt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(_,y),this._z=Math.atan2(f,a)):(this._x=0,this._z=Math.atan2(-c,h));break;case"YZX":this._z=Math.asin(gt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-m,h),this._y=Math.atan2(-g,a)):(this._x=0,this._y=Math.atan2(u,y));break;case"XZY":this._z=Math.asin(-gt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(_,h),this._y=Math.atan2(u,a)):(this._x=Math.atan2(-m,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Vm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Vm,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Gm.setFromEuler(this),this.setFromQuaternion(Gm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ri.DEFAULT_ORDER="XYZ";class m_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Kx=0;const Wm=new Y,Xs=new vi,Wi=new lt,Fl=new Y,ra=new Y,$x=new Y,Zx=new vi,Xm=new Y(1,0,0),jm=new Y(0,1,0),Ym=new Y(0,0,1),qm={type:"added"},Qx={type:"removed"},js={type:"childadded",child:null},hd={type:"childremoved",child:null};class Xt extends ps{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Kx++}),this.uuid=_i(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xt.DEFAULT_UP.clone();const e=new Y,t=new Ri,i=new vi,s=new Y(1,1,1);function a(){i.setFromEuler(t,!1)}function c(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new lt},normalMatrix:{value:new at}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=Xt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new m_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Xs.setFromAxisAngle(e,t),this.quaternion.multiply(Xs),this}rotateOnWorldAxis(e,t){return Xs.setFromAxisAngle(e,t),this.quaternion.premultiply(Xs),this}rotateX(e){return this.rotateOnAxis(Xm,e)}rotateY(e){return this.rotateOnAxis(jm,e)}rotateZ(e){return this.rotateOnAxis(Ym,e)}translateOnAxis(e,t){return Wm.copy(e).applyQuaternion(this.quaternion),this.position.add(Wm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Xm,e)}translateY(e){return this.translateOnAxis(jm,e)}translateZ(e){return this.translateOnAxis(Ym,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Wi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Fl.copy(e):Fl.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),ra.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wi.lookAt(ra,Fl,this.up):Wi.lookAt(Fl,ra,this.up),this.quaternion.setFromRotationMatrix(Wi),s&&(Wi.extractRotation(s.matrixWorld),Xs.setFromRotationMatrix(Wi),this.quaternion.premultiply(Xs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(qm),js.child=e,this.dispatchEvent(js),js.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Qx),hd.child=e,this.dispatchEvent(hd),hd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Wi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Wi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Wi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(qm),js.child=e,this.dispatchEvent(js),js.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const c=this.children[i].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let a=0,c=s.length;a<c;a++)s[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ra,e,$x),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ra,Zx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let a=0,c=s.length;a<c;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(u=>({boxInitialized:u.boxInitialized,boxMin:u.box.min.toArray(),boxMax:u.box.max.toArray(),sphereInitialized:u.sphereInitialized,sphereRadius:u.sphere.radius,sphereCenter:u.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function a(u,f){return u[f.uuid]===void 0&&(u[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const f=u.shapes;if(Array.isArray(f))for(let h=0,m=f.length;h<m;h++){const g=f[h];a(e.shapes,g)}else a(e.shapes,f)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let f=0,h=this.material.length;f<h;f++)u.push(a(e.materials,this.material[f]));s.material=u}else s.material=a(e.materials,this.material);if(this.children.length>0){s.children=[];for(let u=0;u<this.children.length;u++)s.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let u=0;u<this.animations.length;u++){const f=this.animations[u];s.animations.push(a(e.animations,f))}}if(t){const u=c(e.geometries),f=c(e.materials),h=c(e.textures),m=c(e.images),g=c(e.shapes),_=c(e.skeletons),y=c(e.animations),M=c(e.nodes);u.length>0&&(i.geometries=u),f.length>0&&(i.materials=f),h.length>0&&(i.textures=h),m.length>0&&(i.images=m),g.length>0&&(i.shapes=g),_.length>0&&(i.skeletons=_),y.length>0&&(i.animations=y),M.length>0&&(i.nodes=M)}return i.object=s,i;function c(u){const f=[];for(const h in u){const m=u[h];delete m.metadata,f.push(m)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Xt.DEFAULT_UP=new Y(0,1,0);Xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const hi=new Y,Xi=new Y,pd=new Y,ji=new Y,Ys=new Y,qs=new Y,Km=new Y,md=new Y,gd=new Y,_d=new Y,vd=new Ct,xd=new Ct,yd=new Ct;class mi{constructor(e=new Y,t=new Y,i=new Y){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),hi.subVectors(e,t),s.cross(hi);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(e,t,i,s,a){hi.subVectors(s,t),Xi.subVectors(i,t),pd.subVectors(e,t);const c=hi.dot(hi),u=hi.dot(Xi),f=hi.dot(pd),h=Xi.dot(Xi),m=Xi.dot(pd),g=c*h-u*u;if(g===0)return a.set(0,0,0),null;const _=1/g,y=(h*f-u*m)*_,M=(c*m-u*f)*_;return a.set(1-y-M,M,y)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,ji)===null?!1:ji.x>=0&&ji.y>=0&&ji.x+ji.y<=1}static getInterpolation(e,t,i,s,a,c,u,f){return this.getBarycoord(e,t,i,s,ji)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(a,ji.x),f.addScaledVector(c,ji.y),f.addScaledVector(u,ji.z),f)}static getInterpolatedAttribute(e,t,i,s,a,c){return vd.setScalar(0),xd.setScalar(0),yd.setScalar(0),vd.fromBufferAttribute(e,t),xd.fromBufferAttribute(e,i),yd.fromBufferAttribute(e,s),c.setScalar(0),c.addScaledVector(vd,a.x),c.addScaledVector(xd,a.y),c.addScaledVector(yd,a.z),c}static isFrontFacing(e,t,i,s){return hi.subVectors(i,t),Xi.subVectors(e,t),hi.cross(Xi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hi.subVectors(this.c,this.b),Xi.subVectors(this.a,this.b),hi.cross(Xi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return mi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return mi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,a){return mi.getInterpolation(e,this.a,this.b,this.c,t,i,s,a)}containsPoint(e){return mi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return mi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,a=this.c;let c,u;Ys.subVectors(s,i),qs.subVectors(a,i),md.subVectors(e,i);const f=Ys.dot(md),h=qs.dot(md);if(f<=0&&h<=0)return t.copy(i);gd.subVectors(e,s);const m=Ys.dot(gd),g=qs.dot(gd);if(m>=0&&g<=m)return t.copy(s);const _=f*g-m*h;if(_<=0&&f>=0&&m<=0)return c=f/(f-m),t.copy(i).addScaledVector(Ys,c);_d.subVectors(e,a);const y=Ys.dot(_d),M=qs.dot(_d);if(M>=0&&y<=M)return t.copy(a);const T=y*h-f*M;if(T<=0&&h>=0&&M<=0)return u=h/(h-M),t.copy(i).addScaledVector(qs,u);const S=m*M-y*g;if(S<=0&&g-m>=0&&y-M>=0)return Km.subVectors(a,s),u=(g-m)/(g-m+(y-M)),t.copy(s).addScaledVector(Km,u);const x=1/(S+T+_);return c=T*x,u=_*x,t.copy(i).addScaledVector(Ys,c).addScaledVector(qs,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const g_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Cr={h:0,s:0,l:0},Ol={h:0,s:0,l:0};function Sd(o,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?o+(e-o)*6*t:t<1/2?e:t<2/3?o+(e-o)*6*(2/3-t):o}class ot{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=fn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,St.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=St.workingColorSpace){return this.r=e,this.g=t,this.b=i,St.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=St.workingColorSpace){if(e=Vf(e,1),t=gt(t,0,1),i=gt(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,c=2*i-a;this.r=Sd(c,a,e+1/3),this.g=Sd(c,a,e),this.b=Sd(c,a,e-1/3)}return St.toWorkingColorSpace(this,s),this}setStyle(e,t=fn){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const c=s[1],u=s[2];switch(c){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=s[1],c=a.length;if(c===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=fn){const i=g_[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Qi(e.r),this.g=Qi(e.g),this.b=Qi(e.b),this}copyLinearToSRGB(e){return this.r=oo(e.r),this.g=oo(e.g),this.b=oo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=fn){return St.fromWorkingColorSpace(yn.copy(this),e),Math.round(gt(yn.r*255,0,255))*65536+Math.round(gt(yn.g*255,0,255))*256+Math.round(gt(yn.b*255,0,255))}getHexString(e=fn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=St.workingColorSpace){St.fromWorkingColorSpace(yn.copy(this),t);const i=yn.r,s=yn.g,a=yn.b,c=Math.max(i,s,a),u=Math.min(i,s,a);let f,h;const m=(u+c)/2;if(u===c)f=0,h=0;else{const g=c-u;switch(h=m<=.5?g/(c+u):g/(2-c-u),c){case i:f=(s-a)/g+(s<a?6:0);break;case s:f=(a-i)/g+2;break;case a:f=(i-s)/g+4;break}f/=6}return e.h=f,e.s=h,e.l=m,e}getRGB(e,t=St.workingColorSpace){return St.fromWorkingColorSpace(yn.copy(this),t),e.r=yn.r,e.g=yn.g,e.b=yn.b,e}getStyle(e=fn){St.fromWorkingColorSpace(yn.copy(this),e);const t=yn.r,i=yn.g,s=yn.b;return e!==fn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Cr),this.setHSL(Cr.h+e,Cr.s+t,Cr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Cr),e.getHSL(Ol);const i=pa(Cr.h,Ol.h,t),s=pa(Cr.s,Ol.s,t),a=pa(Cr.l,Ol.l,t);return this.setHSL(i,s,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*s,this.g=a[1]*t+a[4]*i+a[7]*s,this.b=a[2]*t+a[5]*i+a[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const yn=new ot;ot.NAMES=g_;let Jx=0;class wi extends ps{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jx++}),this.uuid=_i(),this.name="",this.type="Material",this.blending=ro,this.side=er,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zd,this.blendDst=Hd,this.blendEquation=ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ot(0,0,0),this.blendAlpha=0,this.depthFunc=lo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Um,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ks,this.stencilZFail=ks,this.stencilZPass=ks,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ro&&(i.blending=this.blending),this.side!==er&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==zd&&(i.blendSrc=this.blendSrc),this.blendDst!==Hd&&(i.blendDst=this.blendDst),this.blendEquation!==ls&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==lo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Um&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ks&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ks&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ks&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(a){const c=[];for(const u in a){const f=a[u];delete f.metadata,c.push(f)}return c}if(t){const a=s(e.textures),c=s(e.images);a.length>0&&(i.textures=a),c.length>0&&(i.images=c)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let a=0;a!==s;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class us extends wi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ri,this.combine=Zg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Zt=new Y,Bl=new Mt;class In{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Af,this.updateRanges=[],this.gpuType=gi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Bl.fromBufferAttribute(this,t),Bl.applyMatrix3(e),this.setXY(t,Bl.x,Bl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix3(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=pi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Lt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=pi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=pi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=pi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=pi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array),s=Lt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,a){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array),s=Lt(s,this.array),a=Lt(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Af&&(e.usage=this.usage),e}}class __ extends In{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class v_ extends In{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Ji extends In{constructor(e,t,i){super(new Float32Array(e),t,i)}}let ey=0;const ti=new lt,Md=new Xt,Ks=new Y,jn=new nr,sa=new nr,an=new Y;class bi extends ps{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ey++}),this.uuid=_i(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(f_(e)?v_:__)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new at().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ti.makeRotationFromQuaternion(e),this.applyMatrix4(ti),this}rotateX(e){return ti.makeRotationX(e),this.applyMatrix4(ti),this}rotateY(e){return ti.makeRotationY(e),this.applyMatrix4(ti),this}rotateZ(e){return ti.makeRotationZ(e),this.applyMatrix4(ti),this}translate(e,t,i){return ti.makeTranslation(e,t,i),this.applyMatrix4(ti),this}scale(e,t,i){return ti.makeScale(e,t,i),this.applyMatrix4(ti),this}lookAt(e){return Md.lookAt(e),Md.updateMatrix(),this.applyMatrix4(Md.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ks).negate(),this.translate(Ks.x,Ks.y,Ks.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,a=e.length;s<a;s++){const c=e[s];i.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Ji(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const a=e[s];t.setXYZ(s,a.x,a.y,a.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new nr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const a=t[i];jn.setFromBufferAttribute(a),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,jn.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,jn.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(jn.min),this.boundingBox.expandByPoint(jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ci);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(e){const i=this.boundingSphere.center;if(jn.setFromBufferAttribute(e),t)for(let a=0,c=t.length;a<c;a++){const u=t[a];sa.setFromBufferAttribute(u),this.morphTargetsRelative?(an.addVectors(jn.min,sa.min),jn.expandByPoint(an),an.addVectors(jn.max,sa.max),jn.expandByPoint(an)):(jn.expandByPoint(sa.min),jn.expandByPoint(sa.max))}jn.getCenter(i);let s=0;for(let a=0,c=e.count;a<c;a++)an.fromBufferAttribute(e,a),s=Math.max(s,i.distanceToSquared(an));if(t)for(let a=0,c=t.length;a<c;a++){const u=t[a],f=this.morphTargetsRelative;for(let h=0,m=u.count;h<m;h++)an.fromBufferAttribute(u,h),f&&(Ks.fromBufferAttribute(e,h),an.add(Ks)),s=Math.max(s,i.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new In(new Float32Array(4*i.count),4));const c=this.getAttribute("tangent"),u=[],f=[];for(let j=0;j<i.count;j++)u[j]=new Y,f[j]=new Y;const h=new Y,m=new Y,g=new Y,_=new Mt,y=new Mt,M=new Mt,T=new Y,S=new Y;function x(j,b,R){h.fromBufferAttribute(i,j),m.fromBufferAttribute(i,b),g.fromBufferAttribute(i,R),_.fromBufferAttribute(a,j),y.fromBufferAttribute(a,b),M.fromBufferAttribute(a,R),m.sub(h),g.sub(h),y.sub(_),M.sub(_);const z=1/(y.x*M.y-M.x*y.y);isFinite(z)&&(T.copy(m).multiplyScalar(M.y).addScaledVector(g,-y.y).multiplyScalar(z),S.copy(g).multiplyScalar(y.x).addScaledVector(m,-M.x).multiplyScalar(z),u[j].add(T),u[b].add(T),u[R].add(T),f[j].add(S),f[b].add(S),f[R].add(S))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let j=0,b=D.length;j<b;++j){const R=D[j],z=R.start,oe=R.count;for(let ee=z,de=z+oe;ee<de;ee+=3)x(e.getX(ee+0),e.getX(ee+1),e.getX(ee+2))}const I=new Y,C=new Y,G=new Y,O=new Y;function U(j){G.fromBufferAttribute(s,j),O.copy(G);const b=u[j];I.copy(b),I.sub(G.multiplyScalar(G.dot(b))).normalize(),C.crossVectors(O,b);const z=C.dot(f[j])<0?-1:1;c.setXYZW(j,I.x,I.y,I.z,z)}for(let j=0,b=D.length;j<b;++j){const R=D[j],z=R.start,oe=R.count;for(let ee=z,de=z+oe;ee<de;ee+=3)U(e.getX(ee+0)),U(e.getX(ee+1)),U(e.getX(ee+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new In(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let _=0,y=i.count;_<y;_++)i.setXYZ(_,0,0,0);const s=new Y,a=new Y,c=new Y,u=new Y,f=new Y,h=new Y,m=new Y,g=new Y;if(e)for(let _=0,y=e.count;_<y;_+=3){const M=e.getX(_+0),T=e.getX(_+1),S=e.getX(_+2);s.fromBufferAttribute(t,M),a.fromBufferAttribute(t,T),c.fromBufferAttribute(t,S),m.subVectors(c,a),g.subVectors(s,a),m.cross(g),u.fromBufferAttribute(i,M),f.fromBufferAttribute(i,T),h.fromBufferAttribute(i,S),u.add(m),f.add(m),h.add(m),i.setXYZ(M,u.x,u.y,u.z),i.setXYZ(T,f.x,f.y,f.z),i.setXYZ(S,h.x,h.y,h.z)}else for(let _=0,y=t.count;_<y;_+=3)s.fromBufferAttribute(t,_+0),a.fromBufferAttribute(t,_+1),c.fromBufferAttribute(t,_+2),m.subVectors(c,a),g.subVectors(s,a),m.cross(g),i.setXYZ(_+0,m.x,m.y,m.z),i.setXYZ(_+1,m.x,m.y,m.z),i.setXYZ(_+2,m.x,m.y,m.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)an.fromBufferAttribute(e,t),an.normalize(),e.setXYZ(t,an.x,an.y,an.z)}toNonIndexed(){function e(u,f){const h=u.array,m=u.itemSize,g=u.normalized,_=new h.constructor(f.length*m);let y=0,M=0;for(let T=0,S=f.length;T<S;T++){u.isInterleavedBufferAttribute?y=f[T]*u.data.stride+u.offset:y=f[T]*m;for(let x=0;x<m;x++)_[M++]=h[y++]}return new In(_,m,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new bi,i=this.index.array,s=this.attributes;for(const u in s){const f=s[u],h=e(f,i);t.setAttribute(u,h)}const a=this.morphAttributes;for(const u in a){const f=[],h=a[u];for(let m=0,g=h.length;m<g;m++){const _=h[m],y=e(_,i);f.push(y)}t.morphAttributes[u]=f}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let u=0,f=c.length;u<f;u++){const h=c[u];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const h in f)f[h]!==void 0&&(e[h]=f[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const f in i){const h=i[f];e.data.attributes[f]=h.toJSON(e.data)}const s={};let a=!1;for(const f in this.morphAttributes){const h=this.morphAttributes[f],m=[];for(let g=0,_=h.length;g<_;g++){const y=h[g];m.push(y.toJSON(e.data))}m.length>0&&(s[f]=m,a=!0)}a&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere={center:u.center.toArray(),radius:u.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const h in s){const m=s[h];this.setAttribute(h,m.clone(t))}const a=e.morphAttributes;for(const h in a){const m=[],g=a[h];for(let _=0,y=g.length;_<y;_++)m.push(g[_].clone(t));this.morphAttributes[h]=m}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let h=0,m=c.length;h<m;h++){const g=c[h];this.addGroup(g.start,g.count,g.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const $m=new lt,ts=new vc,kl=new Ci,Zm=new Y,zl=new Y,Hl=new Y,Vl=new Y,Ed=new Y,Gl=new Y,Qm=new Y,Wl=new Y;class qn extends Xt{constructor(e=new bi,t=new us){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=s.length;a<c;a++){const u=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,a=i.morphAttributes.position,c=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const u=this.morphTargetInfluences;if(a&&u){Gl.set(0,0,0);for(let f=0,h=a.length;f<h;f++){const m=u[f],g=a[f];m!==0&&(Ed.fromBufferAttribute(g,e),c?Gl.addScaledVector(Ed,m):Gl.addScaledVector(Ed.sub(t),m))}t.add(Gl)}return t}raycast(e,t){const i=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),kl.copy(i.boundingSphere),kl.applyMatrix4(a),ts.copy(e.ray).recast(e.near),!(kl.containsPoint(ts.origin)===!1&&(ts.intersectSphere(kl,Zm)===null||ts.origin.distanceToSquared(Zm)>(e.far-e.near)**2))&&($m.copy(a).invert(),ts.copy(e.ray).applyMatrix4($m),!(i.boundingBox!==null&&ts.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ts)))}_computeIntersections(e,t,i){let s;const a=this.geometry,c=this.material,u=a.index,f=a.attributes.position,h=a.attributes.uv,m=a.attributes.uv1,g=a.attributes.normal,_=a.groups,y=a.drawRange;if(u!==null)if(Array.isArray(c))for(let M=0,T=_.length;M<T;M++){const S=_[M],x=c[S.materialIndex],D=Math.max(S.start,y.start),I=Math.min(u.count,Math.min(S.start+S.count,y.start+y.count));for(let C=D,G=I;C<G;C+=3){const O=u.getX(C),U=u.getX(C+1),j=u.getX(C+2);s=Xl(this,x,e,i,h,m,g,O,U,j),s&&(s.faceIndex=Math.floor(C/3),s.face.materialIndex=S.materialIndex,t.push(s))}}else{const M=Math.max(0,y.start),T=Math.min(u.count,y.start+y.count);for(let S=M,x=T;S<x;S+=3){const D=u.getX(S),I=u.getX(S+1),C=u.getX(S+2);s=Xl(this,c,e,i,h,m,g,D,I,C),s&&(s.faceIndex=Math.floor(S/3),t.push(s))}}else if(f!==void 0)if(Array.isArray(c))for(let M=0,T=_.length;M<T;M++){const S=_[M],x=c[S.materialIndex],D=Math.max(S.start,y.start),I=Math.min(f.count,Math.min(S.start+S.count,y.start+y.count));for(let C=D,G=I;C<G;C+=3){const O=C,U=C+1,j=C+2;s=Xl(this,x,e,i,h,m,g,O,U,j),s&&(s.faceIndex=Math.floor(C/3),s.face.materialIndex=S.materialIndex,t.push(s))}}else{const M=Math.max(0,y.start),T=Math.min(f.count,y.start+y.count);for(let S=M,x=T;S<x;S+=3){const D=S,I=S+1,C=S+2;s=Xl(this,c,e,i,h,m,g,D,I,C),s&&(s.faceIndex=Math.floor(S/3),t.push(s))}}}}function ty(o,e,t,i,s,a,c,u){let f;if(e.side===zn?f=i.intersectTriangle(c,a,s,!0,u):f=i.intersectTriangle(s,a,c,e.side===er,u),f===null)return null;Wl.copy(u),Wl.applyMatrix4(o.matrixWorld);const h=t.ray.origin.distanceTo(Wl);return h<t.near||h>t.far?null:{distance:h,point:Wl.clone(),object:o}}function Xl(o,e,t,i,s,a,c,u,f,h){o.getVertexPosition(u,zl),o.getVertexPosition(f,Hl),o.getVertexPosition(h,Vl);const m=ty(o,e,t,i,zl,Hl,Vl,Qm);if(m){const g=new Y;mi.getBarycoord(Qm,zl,Hl,Vl,g),s&&(m.uv=mi.getInterpolatedAttribute(s,u,f,h,g,new Mt)),a&&(m.uv1=mi.getInterpolatedAttribute(a,u,f,h,g,new Mt)),c&&(m.normal=mi.getInterpolatedAttribute(c,u,f,h,g,new Y),m.normal.dot(i.direction)>0&&m.normal.multiplyScalar(-1));const _={a:u,b:f,c:h,normal:new Y,materialIndex:0};mi.getNormal(zl,Hl,Vl,_.normal),m.face=_,m.barycoord=g}return m}class Sa extends bi{constructor(e=1,t=1,i=1,s=1,a=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:a,depthSegments:c};const u=this;s=Math.floor(s),a=Math.floor(a),c=Math.floor(c);const f=[],h=[],m=[],g=[];let _=0,y=0;M("z","y","x",-1,-1,i,t,e,c,a,0),M("z","y","x",1,-1,i,t,-e,c,a,1),M("x","z","y",1,1,e,i,t,s,c,2),M("x","z","y",1,-1,e,i,-t,s,c,3),M("x","y","z",1,-1,e,t,i,s,a,4),M("x","y","z",-1,-1,e,t,-i,s,a,5),this.setIndex(f),this.setAttribute("position",new Ji(h,3)),this.setAttribute("normal",new Ji(m,3)),this.setAttribute("uv",new Ji(g,2));function M(T,S,x,D,I,C,G,O,U,j,b){const R=C/U,z=G/j,oe=C/2,ee=G/2,de=O/2,he=U+1,se=j+1;let le=0,k=0;const ae=new Y;for(let re=0;re<se;re++){const N=re*z-ee;for(let ne=0;ne<he;ne++){const Ne=ne*R-oe;ae[T]=Ne*D,ae[S]=N*I,ae[x]=de,h.push(ae.x,ae.y,ae.z),ae[T]=0,ae[S]=0,ae[x]=O>0?1:-1,m.push(ae.x,ae.y,ae.z),g.push(ne/U),g.push(1-re/j),le+=1}}for(let re=0;re<j;re++)for(let N=0;N<U;N++){const ne=_+N+he*re,Ne=_+N+he*(re+1),Z=_+(N+1)+he*(re+1),ce=_+(N+1)+he*re;f.push(ne,Ne,ce),f.push(Ne,Z,ce),k+=6}u.addGroup(y,k,b),y+=k,_+=le}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function go(o){const e={};for(const t in o){e[t]={};for(const i in o[t]){const s=o[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Cn(o){const e={};for(let t=0;t<o.length;t++){const i=go(o[t]);for(const s in i)e[s]=i[s]}return e}function ny(o){const e=[];for(let t=0;t<o.length;t++)e.push(o[t].clone());return e}function x_(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:St.workingColorSpace}const iy={clone:go,merge:Cn};var ry=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Fr extends wi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ry,this.fragmentShader=sy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=go(e.uniforms),this.uniformsGroups=ny(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const c=this.uniforms[s].value;c&&c.isTexture?t.uniforms[s]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[s]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[s]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[s]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[s]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[s]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[s]={type:"m4",value:c.toArray()}:t.uniforms[s]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class y_ extends Xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=Zi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const br=new Y,Jm=new Mt,eg=new Mt;class bn extends y_{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=mo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ha*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return mo*2*Math.atan(Math.tan(ha*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){br.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(br.x,br.y).multiplyScalar(-e/br.z),br.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(br.x,br.y).multiplyScalar(-e/br.z)}getViewSize(e,t){return this.getViewBounds(e,Jm,eg),t.subVectors(eg,Jm)}setViewOffset(e,t,i,s,a,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ha*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,a=-.5*s;const c=this.view;if(this.view!==null&&this.view.enabled){const f=c.fullWidth,h=c.fullHeight;a+=c.offsetX*s/f,t-=c.offsetY*i/h,s*=c.width/f,i*=c.height/h}const u=this.filmOffset;u!==0&&(a+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const $s=-90,Zs=1;class oy extends Xt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new bn($s,Zs,e,t);s.layers=this.layers,this.add(s);const a=new bn($s,Zs,e,t);a.layers=this.layers,this.add(a);const c=new bn($s,Zs,e,t);c.layers=this.layers,this.add(c);const u=new bn($s,Zs,e,t);u.layers=this.layers,this.add(u);const f=new bn($s,Zs,e,t);f.layers=this.layers,this.add(f);const h=new bn($s,Zs,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,a,c,u,f]=t;for(const h of t)this.remove(h);if(e===Zi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===pc)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,c,u,f,h,m]=this.children,g=e.getRenderTarget(),_=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const T=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,a),e.setRenderTarget(i,1,s),e.render(t,c),e.setRenderTarget(i,2,s),e.render(t,u),e.setRenderTarget(i,3,s),e.render(t,f),e.setRenderTarget(i,4,s),e.render(t,h),i.texture.generateMipmaps=T,e.setRenderTarget(i,5,s),e.render(t,m),e.setRenderTarget(g,_,y),e.xr.enabled=M,i.texture.needsPMREMUpdate=!0}}class S_ extends ln{constructor(e,t,i,s,a,c,u,f,h,m){e=e!==void 0?e:[],t=t!==void 0?t:co,super(e,t,i,s,a,c,u,f,h,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ay extends hs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new S_(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Yn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Sa(5,5,5),a=new Fr({name:"CubemapFromEquirect",uniforms:go(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:zn,blending:Nr});a.uniforms.tEquirect.value=t;const c=new qn(s,a),u=t.minFilter;return t.minFilter===$i&&(t.minFilter=Yn),new oy(1,10,this).update(e,c),t.minFilter=u,c.geometry.dispose(),c.material.dispose(),this}clear(e,t,i,s){const a=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,i,s);e.setRenderTarget(a)}}class ly extends Xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ri,this.environmentIntensity=1,this.environmentRotation=new Ri,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class cy{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Af,this.updateRanges=[],this.version=0,this.uuid=_i()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,a=this.stride;s<a;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_i()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_i()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Rn=new Y;class Gf{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Rn.fromBufferAttribute(this,t),Rn.applyMatrix4(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Rn.fromBufferAttribute(this,t),Rn.applyNormalMatrix(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Rn.fromBufferAttribute(this,t),Rn.transformDirection(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=pi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Lt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=pi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=pi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=pi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=pi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array),s=Lt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array),s=Lt(s,this.array),a=Lt(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=a,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[s+a])}return new In(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Gf(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[s+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const tg=new Y,ng=new Ct,ig=new Ct,uy=new Y,rg=new lt,jl=new Y,Td=new Ci,sg=new lt,Ad=new vc;class dy extends qn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Nm,this.bindMatrix=new lt,this.bindMatrixInverse=new lt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new nr),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,jl),this.boundingBox.expandByPoint(jl)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ci),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,jl),this.boundingSphere.expandByPoint(jl)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Td.copy(this.boundingSphere),Td.applyMatrix4(s),e.ray.intersectsSphere(Td)!==!1&&(sg.copy(s).invert(),Ad.copy(e.ray).applyMatrix4(sg),!(this.boundingBox!==null&&Ad.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ad)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ct,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);const a=1/e.manhattanLength();a!==1/0?e.multiplyScalar(a):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Nm?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===ix?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,s=this.geometry;ng.fromBufferAttribute(s.attributes.skinIndex,e),ig.fromBufferAttribute(s.attributes.skinWeight,e),tg.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let a=0;a<4;a++){const c=ig.getComponent(a);if(c!==0){const u=ng.getComponent(a);rg.multiplyMatrices(i.bones[u].matrixWorld,i.boneInverses[u]),t.addScaledVector(uy.copy(tg).applyMatrix4(rg),c)}}return t.applyMatrix4(this.bindMatrixInverse)}}class M_ extends Xt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class E_ extends ln{constructor(e=null,t=1,i=1,s,a,c,u,f,h=Pn,m=Pn,g,_){super(null,c,u,f,h,m,s,a,g,_),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const og=new lt,fy=new lt;class Wf{constructor(e=[],t=[]){this.uuid=_i(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new lt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new lt;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let a=0,c=e.length;a<c;a++){const u=e[a]?e[a].matrixWorld:fy;og.multiplyMatrices(u,t[a]),og.toArray(i,a*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Wf(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new E_(t,e,e,ii,gi);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){const a=e.bones[i];let c=t[a];c===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",a),c=new M_),this.bones.push(c),this.boneInverses.push(new lt().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let s=0,a=t.length;s<a;s++){const c=t[s];e.bones.push(c.uuid);const u=i[s];e.boneInverses.push(u.toArray())}return e}}class wf extends In{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Qs=new lt,ag=new lt,Yl=[],lg=new nr,hy=new lt,oa=new qn,aa=new Ci;class py extends qn{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new wf(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,hy)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new nr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Qs),lg.copy(e.boundingBox).applyMatrix4(Qs),this.boundingBox.union(lg)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ci),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Qs),aa.copy(e.boundingSphere).applyMatrix4(Qs),this.boundingSphere.union(aa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,a=i.length+1,c=e*a+1;for(let u=0;u<i.length;u++)i[u]=s[c+u]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(oa.geometry=this.geometry,oa.material=this.material,oa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),aa.copy(this.boundingSphere),aa.applyMatrix4(i),e.ray.intersectsSphere(aa)!==!1))for(let a=0;a<s;a++){this.getMatrixAt(a,Qs),ag.multiplyMatrices(i,Qs),oa.matrixWorld=ag,oa.raycast(e,Yl);for(let c=0,u=Yl.length;c<u;c++){const f=Yl[c];f.instanceId=a,f.object=this,t.push(f)}Yl.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new wf(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new E_(new Float32Array(s*this.count),s,this.count,Of,gi));const a=this.morphTexture.source.data.data;let c=0;for(let h=0;h<i.length;h++)c+=i[h];const u=this.geometry.morphTargetsRelative?1:1-c,f=s*e;a[f]=u,a.set(i,f+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}const wd=new Y,my=new Y,gy=new at;class os{constructor(e=new Y(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=wd.subVectors(i,t).cross(my.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(wd),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||gy.getNormalMatrix(e),s=this.coplanarPoint(wd).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ns=new Ci,ql=new Y;class Xf{constructor(e=new os,t=new os,i=new os,s=new os,a=new os,c=new os){this.planes=[e,t,i,s,a,c]}set(e,t,i,s,a,c){const u=this.planes;return u[0].copy(e),u[1].copy(t),u[2].copy(i),u[3].copy(s),u[4].copy(a),u[5].copy(c),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Zi){const i=this.planes,s=e.elements,a=s[0],c=s[1],u=s[2],f=s[3],h=s[4],m=s[5],g=s[6],_=s[7],y=s[8],M=s[9],T=s[10],S=s[11],x=s[12],D=s[13],I=s[14],C=s[15];if(i[0].setComponents(f-a,_-h,S-y,C-x).normalize(),i[1].setComponents(f+a,_+h,S+y,C+x).normalize(),i[2].setComponents(f+c,_+m,S+M,C+D).normalize(),i[3].setComponents(f-c,_-m,S-M,C-D).normalize(),i[4].setComponents(f-u,_-g,S-T,C-I).normalize(),t===Zi)i[5].setComponents(f+u,_+g,S+T,C+I).normalize();else if(t===pc)i[5].setComponents(u,g,T,I).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ns.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ns.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ns)}intersectsSprite(e){return ns.center.set(0,0,0),ns.radius=.7071067811865476,ns.applyMatrix4(e.matrixWorld),this.intersectsSphere(ns)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(ql.x=s.normal.x>0?e.max.x:e.min.x,ql.y=s.normal.y>0?e.max.y:e.min.y,ql.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ql)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class T_ extends wi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ot(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const mc=new Y,gc=new Y,cg=new lt,la=new vc,Kl=new Ci,Rd=new Y,ug=new Y;class jf extends Xt{constructor(e=new bi,t=new T_){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,a=t.count;s<a;s++)mc.fromBufferAttribute(t,s-1),gc.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=mc.distanceTo(gc);e.setAttribute("lineDistance",new Ji(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,a=e.params.Line.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Kl.copy(i.boundingSphere),Kl.applyMatrix4(s),Kl.radius+=a,e.ray.intersectsSphere(Kl)===!1)return;cg.copy(s).invert(),la.copy(e.ray).applyMatrix4(cg);const u=a/((this.scale.x+this.scale.y+this.scale.z)/3),f=u*u,h=this.isLineSegments?2:1,m=i.index,_=i.attributes.position;if(m!==null){const y=Math.max(0,c.start),M=Math.min(m.count,c.start+c.count);for(let T=y,S=M-1;T<S;T+=h){const x=m.getX(T),D=m.getX(T+1),I=$l(this,e,la,f,x,D);I&&t.push(I)}if(this.isLineLoop){const T=m.getX(M-1),S=m.getX(y),x=$l(this,e,la,f,T,S);x&&t.push(x)}}else{const y=Math.max(0,c.start),M=Math.min(_.count,c.start+c.count);for(let T=y,S=M-1;T<S;T+=h){const x=$l(this,e,la,f,T,T+1);x&&t.push(x)}if(this.isLineLoop){const T=$l(this,e,la,f,M-1,y);T&&t.push(T)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=s.length;a<c;a++){const u=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}}function $l(o,e,t,i,s,a){const c=o.geometry.attributes.position;if(mc.fromBufferAttribute(c,s),gc.fromBufferAttribute(c,a),t.distanceSqToSegment(mc,gc,Rd,ug)>i)return;Rd.applyMatrix4(o.matrixWorld);const f=e.ray.origin.distanceTo(Rd);if(!(f<e.near||f>e.far))return{distance:f,point:ug.clone().applyMatrix4(o.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:o}}const dg=new Y,fg=new Y;class _y extends jf{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,a=t.count;s<a;s+=2)dg.fromBufferAttribute(t,s),fg.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+dg.distanceTo(fg);e.setAttribute("lineDistance",new Ji(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class vy extends jf{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class A_ extends wi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ot(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const hg=new lt,Rf=new vc,Zl=new Ci,Ql=new Y;class xy extends Xt{constructor(e=new bi,t=new A_){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,a=e.params.Points.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Zl.copy(i.boundingSphere),Zl.applyMatrix4(s),Zl.radius+=a,e.ray.intersectsSphere(Zl)===!1)return;hg.copy(s).invert(),Rf.copy(e.ray).applyMatrix4(hg);const u=a/((this.scale.x+this.scale.y+this.scale.z)/3),f=u*u,h=i.index,g=i.attributes.position;if(h!==null){const _=Math.max(0,c.start),y=Math.min(h.count,c.start+c.count);for(let M=_,T=y;M<T;M++){const S=h.getX(M);Ql.fromBufferAttribute(g,S),pg(Ql,S,f,s,e,t,this)}}else{const _=Math.max(0,c.start),y=Math.min(g.count,c.start+c.count);for(let M=_,T=y;M<T;M++)Ql.fromBufferAttribute(g,M),pg(Ql,M,f,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=s.length;a<c;a++){const u=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}}function pg(o,e,t,i,s,a,c){const u=Rf.distanceSqToPoint(o);if(u<t){const f=new Y;Rf.closestPointToPoint(o,f),f.applyMatrix4(i);const h=s.ray.origin.distanceTo(f);if(h<s.near||h>s.far)return;a.push({distance:h,distanceToRay:Math.sqrt(u),point:f,index:e,face:null,faceIndex:null,barycoord:null,object:c})}}class ds extends Xt{constructor(){super(),this.isGroup=!0,this.type="Group"}}class w_ extends ln{constructor(e,t,i,s,a,c,u,f,h,m=so){if(m!==so&&m!==po)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&m===so&&(i=fs),i===void 0&&m===po&&(i=ho),super(null,s,a,c,u,f,m,i,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=u!==void 0?u:Pn,this.minFilter=f!==void 0?f:Pn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class xc extends bi{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const a=e/2,c=t/2,u=Math.floor(i),f=Math.floor(s),h=u+1,m=f+1,g=e/u,_=t/f,y=[],M=[],T=[],S=[];for(let x=0;x<m;x++){const D=x*_-c;for(let I=0;I<h;I++){const C=I*g-a;M.push(C,-D,0),T.push(0,0,1),S.push(I/u),S.push(1-x/f)}}for(let x=0;x<f;x++)for(let D=0;D<u;D++){const I=D+h*x,C=D+h*(x+1),G=D+1+h*(x+1),O=D+1+h*x;y.push(I,C,O),y.push(C,G,O)}this.setIndex(y),this.setAttribute("position",new Ji(M,3)),this.setAttribute("normal",new Ji(T,3)),this.setAttribute("uv",new Ji(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xc(e.width,e.height,e.widthSegments,e.heightSegments)}}class Yf extends wi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=u_,this.normalScale=new Mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ri,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Pi extends Yf{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Mt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return gt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ot(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ot(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ot(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class yy extends wi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Sy extends wi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Jl(o,e,t){return!o||!t&&o.constructor===e?o:typeof e.BYTES_PER_ELEMENT=="number"?new e(o):Array.prototype.slice.call(o)}function My(o){return ArrayBuffer.isView(o)&&!(o instanceof DataView)}function Ey(o){function e(s,a){return o[s]-o[a]}const t=o.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function mg(o,e,t){const i=o.length,s=new o.constructor(i);for(let a=0,c=0;c!==i;++a){const u=t[a]*e;for(let f=0;f!==e;++f)s[c++]=o[u+f]}return s}function R_(o,e,t,i){let s=1,a=o[0];for(;a!==void 0&&a[i]===void 0;)a=o[s++];if(a===void 0)return;let c=a[i];if(c!==void 0)if(Array.isArray(c))do c=a[i],c!==void 0&&(e.push(a.time),t.push.apply(t,c)),a=o[s++];while(a!==void 0);else if(c.toArray!==void 0)do c=a[i],c!==void 0&&(e.push(a.time),c.toArray(t,t.length)),a=o[s++];while(a!==void 0);else do c=a[i],c!==void 0&&(e.push(a.time),t.push(c)),a=o[s++];while(a!==void 0)}class Ma{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,s=t[i],a=t[i-1];e:{t:{let c;n:{i:if(!(e<s)){for(let u=i+2;;){if(s===void 0){if(e<a)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===u)break;if(a=s,s=t[++i],e<s)break t}c=t.length;break n}if(!(e>=a)){const u=t[1];e<u&&(i=2,a=u);for(let f=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===f)break;if(s=a,a=t[--i-1],e>=a)break t}c=i,i=0;break n}break e}for(;i<c;){const u=i+c>>>1;e<t[u]?c=u:i=u+1}if(s=t[i],a=t[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,s)}return this.interpolate_(i,a,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,a=e*s;for(let c=0;c!==s;++c)t[c]=i[a+c];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Ty extends Ma{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:to,endingEnd:to}}intervalChanged_(e,t,i){const s=this.parameterPositions;let a=e-2,c=e+1,u=s[a],f=s[c];if(u===void 0)switch(this.getSettings_().endingStart){case no:a=e,u=2*t-i;break;case fc:a=s.length-2,u=t+s[a]-s[a+1];break;default:a=e,u=i}if(f===void 0)switch(this.getSettings_().endingEnd){case no:c=e,f=2*i-t;break;case fc:c=1,f=i+s[1]-s[0];break;default:c=e-1,f=t}const h=(i-t)*.5,m=this.valueSize;this._weightPrev=h/(t-u),this._weightNext=h/(f-i),this._offsetPrev=a*m,this._offsetNext=c*m}interpolate_(e,t,i,s){const a=this.resultBuffer,c=this.sampleValues,u=this.valueSize,f=e*u,h=f-u,m=this._offsetPrev,g=this._offsetNext,_=this._weightPrev,y=this._weightNext,M=(i-t)/(s-t),T=M*M,S=T*M,x=-_*S+2*_*T-_*M,D=(1+_)*S+(-1.5-2*_)*T+(-.5+_)*M+1,I=(-1-y)*S+(1.5+y)*T+.5*M,C=y*S-y*T;for(let G=0;G!==u;++G)a[G]=x*c[m+G]+D*c[h+G]+I*c[f+G]+C*c[g+G];return a}}class C_ extends Ma{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const a=this.resultBuffer,c=this.sampleValues,u=this.valueSize,f=e*u,h=f-u,m=(i-t)/(s-t),g=1-m;for(let _=0;_!==u;++_)a[_]=c[h+_]*g+c[f+_]*m;return a}}class Ay extends Ma{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class Ii{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Jl(t,this.TimeBufferType),this.values=Jl(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Jl(e.times,Array),values:Jl(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Ay(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new C_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ty(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case _a:t=this.InterpolantFactoryMethodDiscrete;break;case va:t=this.InterpolantFactoryMethodLinear;break;case rd:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return _a;case this.InterpolantFactoryMethodLinear:return va;case this.InterpolantFactoryMethodSmooth:return rd}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){const i=this.times,s=i.length;let a=0,c=s-1;for(;a!==s&&i[a]<e;)++a;for(;c!==-1&&i[c]>t;)--c;if(++c,a!==0||c!==s){a>=c&&(c=Math.max(c,1),a=c-1);const u=this.getValueSize();this.times=i.slice(a,c),this.values=this.values.slice(a*u,c*u)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,s=this.values,a=i.length;a===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let c=null;for(let u=0;u!==a;u++){const f=i[u];if(typeof f=="number"&&isNaN(f)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,u,f),e=!1;break}if(c!==null&&c>f){console.error("THREE.KeyframeTrack: Out of order keys.",this,u,f,c),e=!1;break}c=f}if(s!==void 0&&My(s))for(let u=0,f=s.length;u!==f;++u){const h=s[u];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,u,h),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===rd,a=e.length-1;let c=1;for(let u=1;u<a;++u){let f=!1;const h=e[u],m=e[u+1];if(h!==m&&(u!==1||h!==e[0]))if(s)f=!0;else{const g=u*i,_=g-i,y=g+i;for(let M=0;M!==i;++M){const T=t[g+M];if(T!==t[_+M]||T!==t[y+M]){f=!0;break}}}if(f){if(u!==c){e[c]=e[u];const g=u*i,_=c*i;for(let y=0;y!==i;++y)t[_+y]=t[g+y]}++c}}if(a>0){e[c]=e[a];for(let u=a*i,f=c*i,h=0;h!==i;++h)t[f+h]=t[u+h];++c}return c!==e.length?(this.times=e.slice(0,c),this.values=t.slice(0,c*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Ii.prototype.TimeBufferType=Float32Array;Ii.prototype.ValueBufferType=Float32Array;Ii.prototype.DefaultInterpolation=va;class yo extends Ii{constructor(e,t,i){super(e,t,i)}}yo.prototype.ValueTypeName="bool";yo.prototype.ValueBufferType=Array;yo.prototype.DefaultInterpolation=_a;yo.prototype.InterpolantFactoryMethodLinear=void 0;yo.prototype.InterpolantFactoryMethodSmooth=void 0;class b_ extends Ii{}b_.prototype.ValueTypeName="color";class _o extends Ii{}_o.prototype.ValueTypeName="number";class wy extends Ma{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const a=this.resultBuffer,c=this.sampleValues,u=this.valueSize,f=(i-t)/(s-t);let h=e*u;for(let m=h+u;h!==m;h+=4)vi.slerpFlat(a,0,c,h-u,c,h,f);return a}}class vo extends Ii{InterpolantFactoryMethodLinear(e){return new wy(this.times,this.values,this.getValueSize(),e)}}vo.prototype.ValueTypeName="quaternion";vo.prototype.InterpolantFactoryMethodSmooth=void 0;class So extends Ii{constructor(e,t,i){super(e,t,i)}}So.prototype.ValueTypeName="string";So.prototype.ValueBufferType=Array;So.prototype.DefaultInterpolation=_a;So.prototype.InterpolantFactoryMethodLinear=void 0;So.prototype.InterpolantFactoryMethodSmooth=void 0;class xo extends Ii{}xo.prototype.ValueTypeName="vector";class Cf{constructor(e="",t=-1,i=[],s=Hf){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=_i(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,s=1/(e.fps||1);for(let c=0,u=i.length;c!==u;++c)t.push(Cy(i[c]).scale(s));const a=new this(e.name,e.duration,t,e.blendMode);return a.uuid=e.uuid,a}static toJSON(e){const t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let a=0,c=i.length;a!==c;++a)t.push(Ii.toJSON(i[a]));return s}static CreateFromMorphTargetSequence(e,t,i,s){const a=t.length,c=[];for(let u=0;u<a;u++){let f=[],h=[];f.push((u+a-1)%a,u,(u+1)%a),h.push(0,1,0);const m=Ey(f);f=mg(f,1,m),h=mg(h,1,m),!s&&f[0]===0&&(f.push(a),h.push(h[0])),c.push(new _o(".morphTargetInfluences["+t[u].name+"]",f,h).scale(1/i))}return new this(e,-1,c)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const s={},a=/^([\w-]*?)([\d]+)$/;for(let u=0,f=e.length;u<f;u++){const h=e[u],m=h.name.match(a);if(m&&m.length>1){const g=m[1];let _=s[g];_||(s[g]=_=[]),_.push(h)}}const c=[];for(const u in s)c.push(this.CreateFromMorphTargetSequence(u,s[u],t,i));return c}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(g,_,y,M,T){if(y.length!==0){const S=[],x=[];R_(y,S,x,M),S.length!==0&&T.push(new g(_,S,x))}},s=[],a=e.name||"default",c=e.fps||30,u=e.blendMode;let f=e.length||-1;const h=e.hierarchy||[];for(let g=0;g<h.length;g++){const _=h[g].keys;if(!(!_||_.length===0))if(_[0].morphTargets){const y={};let M;for(M=0;M<_.length;M++)if(_[M].morphTargets)for(let T=0;T<_[M].morphTargets.length;T++)y[_[M].morphTargets[T]]=-1;for(const T in y){const S=[],x=[];for(let D=0;D!==_[M].morphTargets.length;++D){const I=_[M];S.push(I.time),x.push(I.morphTarget===T?1:0)}s.push(new _o(".morphTargetInfluence["+T+"]",S,x))}f=y.length*c}else{const y=".bones["+t[g].name+"]";i(xo,y+".position",_,"pos",s),i(vo,y+".quaternion",_,"rot",s),i(xo,y+".scale",_,"scl",s)}}return s.length===0?null:new this(a,f,s,u)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,s=e.length;i!==s;++i){const a=this.tracks[i];t=Math.max(t,a.times[a.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Ry(o){switch(o.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return _o;case"vector":case"vector2":case"vector3":case"vector4":return xo;case"color":return b_;case"quaternion":return vo;case"bool":case"boolean":return yo;case"string":return So}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+o)}function Cy(o){if(o.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Ry(o.type);if(o.times===void 0){const t=[],i=[];R_(o.keys,t,i,"value"),o.times=t,o.values=i}return e.parse!==void 0?e.parse(o):new e(o.name,o.times,o.values,o.interpolation)}const Dr={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(this.files[o]=e)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class P_{constructor(e,t,i){const s=this;let a=!1,c=0,u=0,f;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(m){u++,a===!1&&s.onStart!==void 0&&s.onStart(m,c,u),a=!0},this.itemEnd=function(m){c++,s.onProgress!==void 0&&s.onProgress(m,c,u),c===u&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(m){s.onError!==void 0&&s.onError(m)},this.resolveURL=function(m){return f?f(m):m},this.setURLModifier=function(m){return f=m,this},this.addHandler=function(m,g){return h.push(m,g),this},this.removeHandler=function(m){const g=h.indexOf(m);return g!==-1&&h.splice(g,2),this},this.getHandler=function(m){for(let g=0,_=h.length;g<_;g+=2){const y=h[g],M=h[g+1];if(y.global&&(y.lastIndex=0),y.test(m))return M}return null}}}const by=new P_;class Mo{constructor(e){this.manager=e!==void 0?e:by,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,a){i.load(e,s,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Mo.DEFAULT_MATERIAL_NAME="__DEFAULT";const Yi={};class Py extends Error{constructor(e,t){super(e),this.response=t}}class I_ extends Mo{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=Dr.get(e);if(a!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(a),this.manager.itemEnd(e)},0),a;if(Yi[e]!==void 0){Yi[e].push({onLoad:t,onProgress:i,onError:s});return}Yi[e]=[],Yi[e].push({onLoad:t,onProgress:i,onError:s});const c=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),u=this.mimeType,f=this.responseType;fetch(c).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;const m=Yi[e],g=h.body.getReader(),_=h.headers.get("X-File-Size")||h.headers.get("Content-Length"),y=_?parseInt(_):0,M=y!==0;let T=0;const S=new ReadableStream({start(x){D();function D(){g.read().then(({done:I,value:C})=>{if(I)x.close();else{T+=C.byteLength;const G=new ProgressEvent("progress",{lengthComputable:M,loaded:T,total:y});for(let O=0,U=m.length;O<U;O++){const j=m[O];j.onProgress&&j.onProgress(G)}x.enqueue(C),D()}},I=>{x.error(I)})}}});return new Response(S)}else throw new Py(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(f){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(m=>new DOMParser().parseFromString(m,u));case"json":return h.json();default:if(u===void 0)return h.text();{const g=/charset="?([^;"\s]*)"?/i.exec(u),_=g&&g[1]?g[1].toLowerCase():void 0,y=new TextDecoder(_);return h.arrayBuffer().then(M=>y.decode(M))}}}).then(h=>{Dr.add(e,h);const m=Yi[e];delete Yi[e];for(let g=0,_=m.length;g<_;g++){const y=m[g];y.onLoad&&y.onLoad(h)}}).catch(h=>{const m=Yi[e];if(m===void 0)throw this.manager.itemError(e),h;delete Yi[e];for(let g=0,_=m.length;g<_;g++){const y=m[g];y.onError&&y.onError(h)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Iy extends Mo{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,c=Dr.get(e);if(c!==void 0)return a.manager.itemStart(e),setTimeout(function(){t&&t(c),a.manager.itemEnd(e)},0),c;const u=xa("img");function f(){m(),Dr.add(e,this),t&&t(this),a.manager.itemEnd(e)}function h(g){m(),s&&s(g),a.manager.itemError(e),a.manager.itemEnd(e)}function m(){u.removeEventListener("load",f,!1),u.removeEventListener("error",h,!1)}return u.addEventListener("load",f,!1),u.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(u.crossOrigin=this.crossOrigin),a.manager.itemStart(e),u.src=e,u}}class Ly extends Mo{constructor(e){super(e)}load(e,t,i,s){const a=new ln,c=new Iy(this.manager);return c.setCrossOrigin(this.crossOrigin),c.setPath(this.path),c.load(e,function(u){a.image=u,a.needsUpdate=!0,t!==void 0&&t(a)},i,s),a}}class yc extends Xt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ot(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Cd=new lt,gg=new Y,_g=new Y;class qf{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Mt(512,512),this.map=null,this.mapPass=null,this.matrix=new lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xf,this._frameExtents=new Mt(1,1),this._viewportCount=1,this._viewports=[new Ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;gg.setFromMatrixPosition(e.matrixWorld),t.position.copy(gg),_g.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(_g),t.updateMatrixWorld(),Cd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Cd),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Cd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Dy extends qf{constructor(){super(new bn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=mo*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,a=e.distance||t.far;(i!==t.fov||s!==t.aspect||a!==t.far)&&(t.fov=i,t.aspect=s,t.far=a,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Ny extends yc{constructor(e,t,i=0,s=Math.PI/3,a=0,c=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.target=new Xt,this.distance=i,this.angle=s,this.penumbra=a,this.decay=c,this.map=null,this.shadow=new Dy}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const vg=new lt,ca=new Y,bd=new Y;class Uy extends qf{constructor(){super(new bn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Mt(4,2),this._viewportCount=6,this._viewports=[new Ct(2,1,1,1),new Ct(0,1,1,1),new Ct(3,1,1,1),new Ct(1,1,1,1),new Ct(3,0,1,1),new Ct(1,0,1,1)],this._cubeDirections=[new Y(1,0,0),new Y(-1,0,0),new Y(0,0,1),new Y(0,0,-1),new Y(0,1,0),new Y(0,-1,0)],this._cubeUps=[new Y(0,1,0),new Y(0,1,0),new Y(0,1,0),new Y(0,1,0),new Y(0,0,1),new Y(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,a=e.distance||i.far;a!==i.far&&(i.far=a,i.updateProjectionMatrix()),ca.setFromMatrixPosition(e.matrixWorld),i.position.copy(ca),bd.copy(i.position),bd.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(bd),i.updateMatrixWorld(),s.makeTranslation(-ca.x,-ca.y,-ca.z),vg.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vg)}}class Fy extends yc{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Uy}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Kf extends y_{constructor(e=-1,t=1,i=1,s=-1,a=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=a,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,a,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=i-e,c=i+e,u=s+t,f=s-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=h*this.view.offsetX,c=a+h*this.view.width,u-=m*this.view.offsetY,f=u-m*this.view.height}this.projectionMatrix.makeOrthographic(a,c,u,f,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Oy extends qf{constructor(){super(new Kf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class L_ extends yc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.target=new Xt,this.shadow=new Oy}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class By extends yc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class ma{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,s=e.length;i<s;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class ky extends Mo{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,c=Dr.get(e);if(c!==void 0){if(a.manager.itemStart(e),c.then){c.then(h=>{t&&t(h),a.manager.itemEnd(e)}).catch(h=>{s&&s(h)});return}return setTimeout(function(){t&&t(c),a.manager.itemEnd(e)},0),c}const u={};u.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",u.headers=this.requestHeader;const f=fetch(e,u).then(function(h){return h.blob()}).then(function(h){return createImageBitmap(h,Object.assign(a.options,{colorSpaceConversion:"none"}))}).then(function(h){return Dr.add(e,h),t&&t(h),a.manager.itemEnd(e),h}).catch(function(h){s&&s(h),Dr.remove(e),a.manager.itemError(e),a.manager.itemEnd(e)});Dr.add(e,f),a.manager.itemStart(e)}}class zy extends bn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Hy{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=xg(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=xg();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function xg(){return performance.now()}class Vy{constructor(e,t,i){this.binding=e,this.valueSize=i;let s,a,c;switch(t){case"quaternion":s=this._slerp,a=this._slerpAdditive,c=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(i*6),this._workIndex=5;break;case"string":case"bool":s=this._select,a=this._select,c=this._setAdditiveIdentityOther,this.buffer=new Array(i*5);break;default:s=this._lerp,a=this._lerpAdditive,c=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(i*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=a,this._setIdentity=c,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const i=this.buffer,s=this.valueSize,a=e*s+s;let c=this.cumulativeWeight;if(c===0){for(let u=0;u!==s;++u)i[a+u]=i[u];c=t}else{c+=t;const u=t/c;this._mixBufferRegion(i,a,0,u,s)}this.cumulativeWeight=c}accumulateAdditive(e){const t=this.buffer,i=this.valueSize,s=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,i),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,i=this.buffer,s=e*t+t,a=this.cumulativeWeight,c=this.cumulativeWeightAdditive,u=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,a<1){const f=t*this._origIndex;this._mixBufferRegion(i,s,f,1-a,t)}c>0&&this._mixBufferRegionAdditive(i,s,this._addIndex*t,1,t);for(let f=t,h=t+t;f!==h;++f)if(i[f]!==i[f+t]){u.setValue(i,s);break}}saveOriginalState(){const e=this.binding,t=this.buffer,i=this.valueSize,s=i*this._origIndex;e.getValue(t,s);for(let a=i,c=s;a!==c;++a)t[a]=t[s+a%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let i=e;i<t;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[t+i]=this.buffer[e+i]}_select(e,t,i,s,a){if(s>=.5)for(let c=0;c!==a;++c)e[t+c]=e[i+c]}_slerp(e,t,i,s){vi.slerpFlat(e,t,e,t,e,i,s)}_slerpAdditive(e,t,i,s,a){const c=this._workIndex*a;vi.multiplyQuaternionsFlat(e,c,e,t,e,i),vi.slerpFlat(e,t,e,t,e,c,s)}_lerp(e,t,i,s,a){const c=1-s;for(let u=0;u!==a;++u){const f=t+u;e[f]=e[f]*c+e[i+u]*s}}_lerpAdditive(e,t,i,s,a){for(let c=0;c!==a;++c){const u=t+c;e[u]=e[u]+e[i+c]*s}}}const $f="\\[\\]\\.:\\/",Gy=new RegExp("["+$f+"]","g"),Zf="[^"+$f+"]",Wy="[^"+$f.replace("\\.","")+"]",Xy=/((?:WC+[\/:])*)/.source.replace("WC",Zf),jy=/(WCOD+)?/.source.replace("WCOD",Wy),Yy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Zf),qy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Zf),Ky=new RegExp("^"+Xy+jy+Yy+qy+"$"),$y=["material","materials","bones","map"];class Zy{constructor(e,t,i){const s=i||Pt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,a=i.length;s!==a;++s)i[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class Pt{constructor(e,t,i){this.path=t,this.parsedPath=i||Pt.parseTrackName(t),this.node=Pt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new Pt.Composite(e,t,i):new Pt(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Gy,"")}static parseTrackName(e){const t=Ky.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const a=i.nodeName.substring(s+1);$y.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(a){for(let c=0;c<a.length;c++){const u=a[c];if(u.name===t||u.uuid===t)return u;const f=i(u.children);if(f)return f}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,s=t.propertyName;let a=t.propertyIndex;if(e||(e=Pt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let h=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let m=0;m<e.length;m++)if(e[m].name===h){h=m;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(h!==void 0){if(e[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}const c=e[s];if(c===void 0){const h=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",e);return}let u=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?u=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(u=this.Versioning.MatrixWorldNeedsUpdate);let f=this.BindingType.Direct;if(a!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[a]!==void 0&&(a=e.morphTargetDictionary[a])}f=this.BindingType.ArrayElement,this.resolvedProperty=c,this.propertyIndex=a}else c.fromArray!==void 0&&c.toArray!==void 0?(f=this.BindingType.HasFromToArray,this.resolvedProperty=c):Array.isArray(c)?(f=this.BindingType.EntireArray,this.resolvedProperty=c):this.propertyName=s;this.getValue=this.GetterByBindingType[f],this.setValue=this.SetterByBindingTypeAndVersioning[f][u]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Pt.Composite=Zy;Pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Pt.prototype.GetterByBindingType=[Pt.prototype._getValue_direct,Pt.prototype._getValue_array,Pt.prototype._getValue_arrayElement,Pt.prototype._getValue_toArray];Pt.prototype.SetterByBindingTypeAndVersioning=[[Pt.prototype._setValue_direct,Pt.prototype._setValue_direct_setNeedsUpdate,Pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_array,Pt.prototype._setValue_array_setNeedsUpdate,Pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_arrayElement,Pt.prototype._setValue_arrayElement_setNeedsUpdate,Pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_fromArray,Pt.prototype._setValue_fromArray_setNeedsUpdate,Pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Qy{constructor(e,t,i=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=i,this.blendMode=s;const a=t.tracks,c=a.length,u=new Array(c),f={endingStart:to,endingEnd:to};for(let h=0;h!==c;++h){const m=a[h].createInterpolant(null);u[h]=m,m.settings=f}this._interpolantSettings=f,this._interpolants=u,this._propertyBindings=new Array(c),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=sx,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,i){if(e.fadeOut(t),this.fadeIn(t),i){const s=this._clip.duration,a=e._clip.duration,c=a/s,u=s/a;e.warp(1,c,t),this.warp(u,1,t)}return this}crossFadeTo(e,t,i){return e.crossFadeFrom(this,t,i)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,i){const s=this._mixer,a=s.time,c=this.timeScale;let u=this._timeScaleInterpolant;u===null&&(u=s._lendControlInterpolant(),this._timeScaleInterpolant=u);const f=u.parameterPositions,h=u.sampleValues;return f[0]=a,f[1]=a+i,h[0]=e/c,h[1]=t/c,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,i,s){if(!this.enabled){this._updateWeight(e);return}const a=this._startTime;if(a!==null){const f=(e-a)*i;f<0||i===0?t=0:(this._startTime=null,t=i*f)}t*=this._updateTimeScale(e);const c=this._updateTime(t),u=this._updateWeight(e);if(u>0){const f=this._interpolants,h=this._propertyBindings;switch(this.blendMode){case ax:for(let m=0,g=f.length;m!==g;++m)f[m].evaluate(c),h[m].accumulateAdditive(u);break;case Hf:default:for(let m=0,g=f.length;m!==g;++m)f[m].evaluate(c),h[m].accumulate(s,u)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const i=this._weightInterpolant;if(i!==null){const s=i.evaluate(e)[0];t*=s,e>i.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const i=this._timeScaleInterpolant;if(i!==null){const s=i.evaluate(e)[0];t*=s,e>i.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,i=this.loop;let s=this.time+e,a=this._loopCount;const c=i===ox;if(e===0)return a===-1?s:c&&(a&1)===1?t-s:s;if(i===rx){a===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(a===-1&&(e>=0?(a=0,this._setEndings(!0,this.repetitions===0,c)):this._setEndings(this.repetitions===0,!0,c)),s>=t||s<0){const u=Math.floor(s/t);s-=t*u,a+=Math.abs(u);const f=this.repetitions-a;if(f<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(f===1){const h=e<0;this._setEndings(h,!h,c)}else this._setEndings(!1,!1,c);this._loopCount=a,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:u})}}else this.time=s;if(c&&(a&1)===1)return t-s}return s}_setEndings(e,t,i){const s=this._interpolantSettings;i?(s.endingStart=no,s.endingEnd=no):(e?s.endingStart=this.zeroSlopeAtStart?no:to:s.endingStart=fc,t?s.endingEnd=this.zeroSlopeAtEnd?no:to:s.endingEnd=fc)}_scheduleFading(e,t,i){const s=this._mixer,a=s.time;let c=this._weightInterpolant;c===null&&(c=s._lendControlInterpolant(),this._weightInterpolant=c);const u=c.parameterPositions,f=c.sampleValues;return u[0]=a,f[0]=t,u[1]=a+e,f[1]=i,this}}const Jy=new Float32Array(1);class eS extends ps{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const i=e._localRoot||this._root,s=e._clip.tracks,a=s.length,c=e._propertyBindings,u=e._interpolants,f=i.uuid,h=this._bindingsByRootAndName;let m=h[f];m===void 0&&(m={},h[f]=m);for(let g=0;g!==a;++g){const _=s[g],y=_.name;let M=m[y];if(M!==void 0)++M.referenceCount,c[g]=M;else{if(M=c[g],M!==void 0){M._cacheIndex===null&&(++M.referenceCount,this._addInactiveBinding(M,f,y));continue}const T=t&&t._propertyBindings[g].binding.parsedPath;M=new Vy(Pt.create(i,y,T),_.ValueTypeName,_.getValueSize()),++M.referenceCount,this._addInactiveBinding(M,f,y),c[g]=M}u[g].resultBuffer=M.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const i=(e._localRoot||this._root).uuid,s=e._clip.uuid,a=this._actionsByClip[s];this._bindAction(e,a&&a.knownActions[0]),this._addInactiveAction(e,s,i)}const t=e._propertyBindings;for(let i=0,s=t.length;i!==s;++i){const a=t[i];a.useCount++===0&&(this._lendBinding(a),a.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let i=0,s=t.length;i!==s;++i){const a=t[i];--a.useCount===0&&(a.restoreOriginalState(),this._takeBackBinding(a))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,i){const s=this._actions,a=this._actionsByClip;let c=a[t];if(c===void 0)c={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,a[t]=c;else{const u=c.knownActions;e._byClipCacheIndex=u.length,u.push(e)}e._cacheIndex=s.length,s.push(e),c.actionByRoot[i]=e}_removeInactiveAction(e){const t=this._actions,i=t[t.length-1],s=e._cacheIndex;i._cacheIndex=s,t[s]=i,t.pop(),e._cacheIndex=null;const a=e._clip.uuid,c=this._actionsByClip,u=c[a],f=u.knownActions,h=f[f.length-1],m=e._byClipCacheIndex;h._byClipCacheIndex=m,f[m]=h,f.pop(),e._byClipCacheIndex=null;const g=u.actionByRoot,_=(e._localRoot||this._root).uuid;delete g[_],f.length===0&&delete c[a],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let i=0,s=t.length;i!==s;++i){const a=t[i];--a.referenceCount===0&&this._removeInactiveBinding(a)}}_lendAction(e){const t=this._actions,i=e._cacheIndex,s=this._nActiveActions++,a=t[s];e._cacheIndex=s,t[s]=e,a._cacheIndex=i,t[i]=a}_takeBackAction(e){const t=this._actions,i=e._cacheIndex,s=--this._nActiveActions,a=t[s];e._cacheIndex=s,t[s]=e,a._cacheIndex=i,t[i]=a}_addInactiveBinding(e,t,i){const s=this._bindingsByRootAndName,a=this._bindings;let c=s[t];c===void 0&&(c={},s[t]=c),c[i]=e,e._cacheIndex=a.length,a.push(e)}_removeInactiveBinding(e){const t=this._bindings,i=e.binding,s=i.rootNode.uuid,a=i.path,c=this._bindingsByRootAndName,u=c[s],f=t[t.length-1],h=e._cacheIndex;f._cacheIndex=h,t[h]=f,t.pop(),delete u[a],Object.keys(u).length===0&&delete c[s]}_lendBinding(e){const t=this._bindings,i=e._cacheIndex,s=this._nActiveBindings++,a=t[s];e._cacheIndex=s,t[s]=e,a._cacheIndex=i,t[i]=a}_takeBackBinding(e){const t=this._bindings,i=e._cacheIndex,s=--this._nActiveBindings,a=t[s];e._cacheIndex=s,t[s]=e,a._cacheIndex=i,t[i]=a}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let i=e[t];return i===void 0&&(i=new C_(new Float32Array(2),new Float32Array(2),1,Jy),i.__cacheIndex=t,e[t]=i),i}_takeBackControlInterpolant(e){const t=this._controlInterpolants,i=e.__cacheIndex,s=--this._nActiveControlInterpolants,a=t[s];e.__cacheIndex=s,t[s]=e,a.__cacheIndex=i,t[i]=a}clipAction(e,t,i){const s=t||this._root,a=s.uuid;let c=typeof e=="string"?Cf.findByName(s,e):e;const u=c!==null?c.uuid:e,f=this._actionsByClip[u];let h=null;if(i===void 0&&(c!==null?i=c.blendMode:i=Hf),f!==void 0){const g=f.actionByRoot[a];if(g!==void 0&&g.blendMode===i)return g;h=f.knownActions[0],c===null&&(c=h._clip)}if(c===null)return null;const m=new Qy(this,c,t,i);return this._bindAction(m,h),this._addInactiveAction(m,u,a),m}existingAction(e,t){const i=t||this._root,s=i.uuid,a=typeof e=="string"?Cf.findByName(i,e):e,c=a?a.uuid:e,u=this._actionsByClip[c];return u!==void 0&&u.actionByRoot[s]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let i=t-1;i>=0;--i)e[i].stop();return this}update(e){e*=this.timeScale;const t=this._actions,i=this._nActiveActions,s=this.time+=e,a=Math.sign(e),c=this._accuIndex^=1;for(let h=0;h!==i;++h)t[h]._update(s,e,a,c);const u=this._bindings,f=this._nActiveBindings;for(let h=0;h!==f;++h)u[h].apply(c);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,i=e.uuid,s=this._actionsByClip,a=s[i];if(a!==void 0){const c=a.knownActions;for(let u=0,f=c.length;u!==f;++u){const h=c[u];this._deactivateAction(h);const m=h._cacheIndex,g=t[t.length-1];h._cacheIndex=null,h._byClipCacheIndex=null,g._cacheIndex=m,t[m]=g,t.pop(),this._removeInactiveBindingsForAction(h)}delete s[i]}}uncacheRoot(e){const t=e.uuid,i=this._actionsByClip;for(const c in i){const u=i[c].actionByRoot,f=u[t];f!==void 0&&(this._deactivateAction(f),this._removeInactiveAction(f))}const s=this._bindingsByRootAndName,a=s[t];if(a!==void 0)for(const c in a){const u=a[c];u.restoreOriginalState(),this._removeInactiveBinding(u)}}uncacheAction(e,t){const i=this.existingAction(e,t);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}}function yg(o,e,t,i){const s=tS(i);switch(t){case i_:return o*e;case s_:return o*e;case o_:return o*e*2;case Of:return o*e/s.components*s.byteLength;case Bf:return o*e/s.components*s.byteLength;case a_:return o*e*2/s.components*s.byteLength;case kf:return o*e*2/s.components*s.byteLength;case r_:return o*e*3/s.components*s.byteLength;case ii:return o*e*4/s.components*s.byteLength;case zf:return o*e*4/s.components*s.byteLength;case rc:case sc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case oc:case ac:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Qd:case ef:return Math.max(o,16)*Math.max(e,8)/4;case Zd:case Jd:return Math.max(o,8)*Math.max(e,8)/2;case tf:case nf:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case rf:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case sf:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case of:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case af:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case lf:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case cf:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case uf:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case df:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case ff:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case hf:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case pf:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case mf:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case gf:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case _f:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case vf:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case lc:case xf:case yf:return Math.ceil(o/4)*Math.ceil(e/4)*16;case l_:case Sf:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Mf:case Ef:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function tS(o){switch(o){case tr:case e_:return{byteLength:1,components:1};case ga:case t_:case ya:return{byteLength:2,components:1};case Uf:case Ff:return{byteLength:2,components:4};case fs:case Nf:case gi:return{byteLength:4,components:1};case n_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Df}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Df);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function D_(){let o=null,e=!1,t=null,i=null;function s(a,c){t(a,c),i=o.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=o.requestAnimationFrame(s),e=!0)},stop:function(){o.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){o=a}}}function nS(o){const e=new WeakMap;function t(u,f){const h=u.array,m=u.usage,g=h.byteLength,_=o.createBuffer();o.bindBuffer(f,_),o.bufferData(f,h,m),u.onUploadCallback();let y;if(h instanceof Float32Array)y=o.FLOAT;else if(h instanceof Uint16Array)u.isFloat16BufferAttribute?y=o.HALF_FLOAT:y=o.UNSIGNED_SHORT;else if(h instanceof Int16Array)y=o.SHORT;else if(h instanceof Uint32Array)y=o.UNSIGNED_INT;else if(h instanceof Int32Array)y=o.INT;else if(h instanceof Int8Array)y=o.BYTE;else if(h instanceof Uint8Array)y=o.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:_,type:y,bytesPerElement:h.BYTES_PER_ELEMENT,version:u.version,size:g}}function i(u,f,h){const m=f.array,g=f.updateRanges;if(o.bindBuffer(h,u),g.length===0)o.bufferSubData(h,0,m);else{g.sort((y,M)=>y.start-M.start);let _=0;for(let y=1;y<g.length;y++){const M=g[_],T=g[y];T.start<=M.start+M.count+1?M.count=Math.max(M.count,T.start+T.count-M.start):(++_,g[_]=T)}g.length=_+1;for(let y=0,M=g.length;y<M;y++){const T=g[y];o.bufferSubData(h,T.start*m.BYTES_PER_ELEMENT,m,T.start,T.count)}f.clearUpdateRanges()}f.onUploadCallback()}function s(u){return u.isInterleavedBufferAttribute&&(u=u.data),e.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const f=e.get(u);f&&(o.deleteBuffer(f.buffer),e.delete(u))}function c(u,f){if(u.isInterleavedBufferAttribute&&(u=u.data),u.isGLBufferAttribute){const m=e.get(u);(!m||m.version<u.version)&&e.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}const h=e.get(u);if(h===void 0)e.set(u,t(u,f));else if(h.version<u.version){if(h.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,u,f),h.version=u.version}}return{get:s,remove:a,update:c}}var iS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,sS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,oS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,aS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,lS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,uS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,dS=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,fS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,pS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,gS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,_S=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,vS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,xS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,SS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,MS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ES=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,TS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,AS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,wS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,RS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,CS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,bS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,PS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,IS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,LS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,DS="gl_FragColor = linearToOutputTexel( gl_FragColor );",NS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,US=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,FS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,OS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,BS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,zS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,HS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,VS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,GS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,WS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,XS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,YS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,KS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,$S=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ZS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,QS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,JS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,eM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,tM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,nM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,iM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,rM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,oM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,aM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,cM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,uM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,fM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_M=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,xM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,SM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,MM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,EM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,TM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,AM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,wM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,RM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,CM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,PM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,IM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,LM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,DM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,NM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,UM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,FM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,OM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,BM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,kM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,zM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,HM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,VM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,GM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,WM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,XM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,jM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,YM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,KM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,$M=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ZM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,QM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,JM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,eE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,tE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const nE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,iE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,aE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,cE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,uE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,dE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,fE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,mE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,_E=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,SE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ME=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,EE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,TE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,AE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,RE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,IE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,LE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,DE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,NE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,UE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ct={alphahash_fragment:iS,alphahash_pars_fragment:rS,alphamap_fragment:sS,alphamap_pars_fragment:oS,alphatest_fragment:aS,alphatest_pars_fragment:lS,aomap_fragment:cS,aomap_pars_fragment:uS,batching_pars_vertex:dS,batching_vertex:fS,begin_vertex:hS,beginnormal_vertex:pS,bsdfs:mS,iridescence_fragment:gS,bumpmap_pars_fragment:_S,clipping_planes_fragment:vS,clipping_planes_pars_fragment:xS,clipping_planes_pars_vertex:yS,clipping_planes_vertex:SS,color_fragment:MS,color_pars_fragment:ES,color_pars_vertex:TS,color_vertex:AS,common:wS,cube_uv_reflection_fragment:RS,defaultnormal_vertex:CS,displacementmap_pars_vertex:bS,displacementmap_vertex:PS,emissivemap_fragment:IS,emissivemap_pars_fragment:LS,colorspace_fragment:DS,colorspace_pars_fragment:NS,envmap_fragment:US,envmap_common_pars_fragment:FS,envmap_pars_fragment:OS,envmap_pars_vertex:BS,envmap_physical_pars_fragment:KS,envmap_vertex:kS,fog_vertex:zS,fog_pars_vertex:HS,fog_fragment:VS,fog_pars_fragment:GS,gradientmap_pars_fragment:WS,lightmap_pars_fragment:XS,lights_lambert_fragment:jS,lights_lambert_pars_fragment:YS,lights_pars_begin:qS,lights_toon_fragment:$S,lights_toon_pars_fragment:ZS,lights_phong_fragment:QS,lights_phong_pars_fragment:JS,lights_physical_fragment:eM,lights_physical_pars_fragment:tM,lights_fragment_begin:nM,lights_fragment_maps:iM,lights_fragment_end:rM,logdepthbuf_fragment:sM,logdepthbuf_pars_fragment:oM,logdepthbuf_pars_vertex:aM,logdepthbuf_vertex:lM,map_fragment:cM,map_pars_fragment:uM,map_particle_fragment:dM,map_particle_pars_fragment:fM,metalnessmap_fragment:hM,metalnessmap_pars_fragment:pM,morphinstance_vertex:mM,morphcolor_vertex:gM,morphnormal_vertex:_M,morphtarget_pars_vertex:vM,morphtarget_vertex:xM,normal_fragment_begin:yM,normal_fragment_maps:SM,normal_pars_fragment:MM,normal_pars_vertex:EM,normal_vertex:TM,normalmap_pars_fragment:AM,clearcoat_normal_fragment_begin:wM,clearcoat_normal_fragment_maps:RM,clearcoat_pars_fragment:CM,iridescence_pars_fragment:bM,opaque_fragment:PM,packing:IM,premultiplied_alpha_fragment:LM,project_vertex:DM,dithering_fragment:NM,dithering_pars_fragment:UM,roughnessmap_fragment:FM,roughnessmap_pars_fragment:OM,shadowmap_pars_fragment:BM,shadowmap_pars_vertex:kM,shadowmap_vertex:zM,shadowmask_pars_fragment:HM,skinbase_vertex:VM,skinning_pars_vertex:GM,skinning_vertex:WM,skinnormal_vertex:XM,specularmap_fragment:jM,specularmap_pars_fragment:YM,tonemapping_fragment:qM,tonemapping_pars_fragment:KM,transmission_fragment:$M,transmission_pars_fragment:ZM,uv_pars_fragment:QM,uv_pars_vertex:JM,uv_vertex:eE,worldpos_vertex:tE,background_vert:nE,background_frag:iE,backgroundCube_vert:rE,backgroundCube_frag:sE,cube_vert:oE,cube_frag:aE,depth_vert:lE,depth_frag:cE,distanceRGBA_vert:uE,distanceRGBA_frag:dE,equirect_vert:fE,equirect_frag:hE,linedashed_vert:pE,linedashed_frag:mE,meshbasic_vert:gE,meshbasic_frag:_E,meshlambert_vert:vE,meshlambert_frag:xE,meshmatcap_vert:yE,meshmatcap_frag:SE,meshnormal_vert:ME,meshnormal_frag:EE,meshphong_vert:TE,meshphong_frag:AE,meshphysical_vert:wE,meshphysical_frag:RE,meshtoon_vert:CE,meshtoon_frag:bE,points_vert:PE,points_frag:IE,shadow_vert:LE,shadow_frag:DE,sprite_vert:NE,sprite_frag:UE},Ce={common:{diffuse:{value:new ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new at}},envmap:{envMap:{value:null},envMapRotation:{value:new at},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new at}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new at}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new at},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new at},normalScale:{value:new Mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new at},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new at}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new at}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new at}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0},uvTransform:{value:new at}},sprite:{diffuse:{value:new ot(16777215)},opacity:{value:1},center:{value:new Mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}}},Ti={basic:{uniforms:Cn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:ct.meshbasic_vert,fragmentShader:ct.meshbasic_frag},lambert:{uniforms:Cn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new ot(0)}}]),vertexShader:ct.meshlambert_vert,fragmentShader:ct.meshlambert_frag},phong:{uniforms:Cn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new ot(0)},specular:{value:new ot(1118481)},shininess:{value:30}}]),vertexShader:ct.meshphong_vert,fragmentShader:ct.meshphong_frag},standard:{uniforms:Cn([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag},toon:{uniforms:Cn([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new ot(0)}}]),vertexShader:ct.meshtoon_vert,fragmentShader:ct.meshtoon_frag},matcap:{uniforms:Cn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:ct.meshmatcap_vert,fragmentShader:ct.meshmatcap_frag},points:{uniforms:Cn([Ce.points,Ce.fog]),vertexShader:ct.points_vert,fragmentShader:ct.points_frag},dashed:{uniforms:Cn([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ct.linedashed_vert,fragmentShader:ct.linedashed_frag},depth:{uniforms:Cn([Ce.common,Ce.displacementmap]),vertexShader:ct.depth_vert,fragmentShader:ct.depth_frag},normal:{uniforms:Cn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:ct.meshnormal_vert,fragmentShader:ct.meshnormal_frag},sprite:{uniforms:Cn([Ce.sprite,Ce.fog]),vertexShader:ct.sprite_vert,fragmentShader:ct.sprite_frag},background:{uniforms:{uvTransform:{value:new at},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ct.background_vert,fragmentShader:ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new at}},vertexShader:ct.backgroundCube_vert,fragmentShader:ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ct.cube_vert,fragmentShader:ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ct.equirect_vert,fragmentShader:ct.equirect_frag},distanceRGBA:{uniforms:Cn([Ce.common,Ce.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ct.distanceRGBA_vert,fragmentShader:ct.distanceRGBA_frag},shadow:{uniforms:Cn([Ce.lights,Ce.fog,{color:{value:new ot(0)},opacity:{value:1}}]),vertexShader:ct.shadow_vert,fragmentShader:ct.shadow_frag}};Ti.physical={uniforms:Cn([Ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new at},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new at},clearcoatNormalScale:{value:new Mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new at},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new at},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new at},sheen:{value:0},sheenColor:{value:new ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new at},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new at},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new at},transmissionSamplerSize:{value:new Mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new at},attenuationDistance:{value:0},attenuationColor:{value:new ot(0)},specularColor:{value:new ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new at},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new at},anisotropyVector:{value:new Mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new at}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag};const ec={r:0,b:0,g:0},is=new Ri,FE=new lt;function OE(o,e,t,i,s,a,c){const u=new ot(0);let f=a===!0?0:1,h,m,g=null,_=0,y=null;function M(I){let C=I.isScene===!0?I.background:null;return C&&C.isTexture&&(C=(I.backgroundBlurriness>0?t:e).get(C)),C}function T(I){let C=!1;const G=M(I);G===null?x(u,f):G&&G.isColor&&(x(G,1),C=!0);const O=o.xr.getEnvironmentBlendMode();O==="additive"?i.buffers.color.setClear(0,0,0,1,c):O==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(o.autoClear||C)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function S(I,C){const G=M(C);G&&(G.isCubeTexture||G.mapping===_c)?(m===void 0&&(m=new qn(new Sa(1,1,1),new Fr({name:"BackgroundCubeMaterial",uniforms:go(Ti.backgroundCube.uniforms),vertexShader:Ti.backgroundCube.vertexShader,fragmentShader:Ti.backgroundCube.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(O,U,j){this.matrixWorld.copyPosition(j.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(m)),is.copy(C.backgroundRotation),is.x*=-1,is.y*=-1,is.z*=-1,G.isCubeTexture&&G.isRenderTargetTexture===!1&&(is.y*=-1,is.z*=-1),m.material.uniforms.envMap.value=G,m.material.uniforms.flipEnvMap.value=G.isCubeTexture&&G.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(FE.makeRotationFromEuler(is)),m.material.toneMapped=St.getTransfer(G.colorSpace)!==Ut,(g!==G||_!==G.version||y!==o.toneMapping)&&(m.material.needsUpdate=!0,g=G,_=G.version,y=o.toneMapping),m.layers.enableAll(),I.unshift(m,m.geometry,m.material,0,0,null)):G&&G.isTexture&&(h===void 0&&(h=new qn(new xc(2,2),new Fr({name:"BackgroundMaterial",uniforms:go(Ti.background.uniforms),vertexShader:Ti.background.vertexShader,fragmentShader:Ti.background.fragmentShader,side:er,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=G,h.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,h.material.toneMapped=St.getTransfer(G.colorSpace)!==Ut,G.matrixAutoUpdate===!0&&G.updateMatrix(),h.material.uniforms.uvTransform.value.copy(G.matrix),(g!==G||_!==G.version||y!==o.toneMapping)&&(h.material.needsUpdate=!0,g=G,_=G.version,y=o.toneMapping),h.layers.enableAll(),I.unshift(h,h.geometry,h.material,0,0,null))}function x(I,C){I.getRGB(ec,x_(o)),i.buffers.color.setClear(ec.r,ec.g,ec.b,C,c)}function D(){m!==void 0&&(m.geometry.dispose(),m.material.dispose()),h!==void 0&&(h.geometry.dispose(),h.material.dispose())}return{getClearColor:function(){return u},setClearColor:function(I,C=1){u.set(I),f=C,x(u,f)},getClearAlpha:function(){return f},setClearAlpha:function(I){f=I,x(u,f)},render:T,addToRenderList:S,dispose:D}}function BE(o,e){const t=o.getParameter(o.MAX_VERTEX_ATTRIBS),i={},s=_(null);let a=s,c=!1;function u(R,z,oe,ee,de){let he=!1;const se=g(ee,oe,z);a!==se&&(a=se,h(a.object)),he=y(R,ee,oe,de),he&&M(R,ee,oe,de),de!==null&&e.update(de,o.ELEMENT_ARRAY_BUFFER),(he||c)&&(c=!1,C(R,z,oe,ee),de!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(de).buffer))}function f(){return o.createVertexArray()}function h(R){return o.bindVertexArray(R)}function m(R){return o.deleteVertexArray(R)}function g(R,z,oe){const ee=oe.wireframe===!0;let de=i[R.id];de===void 0&&(de={},i[R.id]=de);let he=de[z.id];he===void 0&&(he={},de[z.id]=he);let se=he[ee];return se===void 0&&(se=_(f()),he[ee]=se),se}function _(R){const z=[],oe=[],ee=[];for(let de=0;de<t;de++)z[de]=0,oe[de]=0,ee[de]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:oe,attributeDivisors:ee,object:R,attributes:{},index:null}}function y(R,z,oe,ee){const de=a.attributes,he=z.attributes;let se=0;const le=oe.getAttributes();for(const k in le)if(le[k].location>=0){const re=de[k];let N=he[k];if(N===void 0&&(k==="instanceMatrix"&&R.instanceMatrix&&(N=R.instanceMatrix),k==="instanceColor"&&R.instanceColor&&(N=R.instanceColor)),re===void 0||re.attribute!==N||N&&re.data!==N.data)return!0;se++}return a.attributesNum!==se||a.index!==ee}function M(R,z,oe,ee){const de={},he=z.attributes;let se=0;const le=oe.getAttributes();for(const k in le)if(le[k].location>=0){let re=he[k];re===void 0&&(k==="instanceMatrix"&&R.instanceMatrix&&(re=R.instanceMatrix),k==="instanceColor"&&R.instanceColor&&(re=R.instanceColor));const N={};N.attribute=re,re&&re.data&&(N.data=re.data),de[k]=N,se++}a.attributes=de,a.attributesNum=se,a.index=ee}function T(){const R=a.newAttributes;for(let z=0,oe=R.length;z<oe;z++)R[z]=0}function S(R){x(R,0)}function x(R,z){const oe=a.newAttributes,ee=a.enabledAttributes,de=a.attributeDivisors;oe[R]=1,ee[R]===0&&(o.enableVertexAttribArray(R),ee[R]=1),de[R]!==z&&(o.vertexAttribDivisor(R,z),de[R]=z)}function D(){const R=a.newAttributes,z=a.enabledAttributes;for(let oe=0,ee=z.length;oe<ee;oe++)z[oe]!==R[oe]&&(o.disableVertexAttribArray(oe),z[oe]=0)}function I(R,z,oe,ee,de,he,se){se===!0?o.vertexAttribIPointer(R,z,oe,de,he):o.vertexAttribPointer(R,z,oe,ee,de,he)}function C(R,z,oe,ee){T();const de=ee.attributes,he=oe.getAttributes(),se=z.defaultAttributeValues;for(const le in he){const k=he[le];if(k.location>=0){let ae=de[le];if(ae===void 0&&(le==="instanceMatrix"&&R.instanceMatrix&&(ae=R.instanceMatrix),le==="instanceColor"&&R.instanceColor&&(ae=R.instanceColor)),ae!==void 0){const re=ae.normalized,N=ae.itemSize,ne=e.get(ae);if(ne===void 0)continue;const Ne=ne.buffer,Z=ne.type,ce=ne.bytesPerElement,Me=Z===o.INT||Z===o.UNSIGNED_INT||ae.gpuType===Nf;if(ae.isInterleavedBufferAttribute){const ve=ae.data,Te=ve.stride,Ue=ae.offset;if(ve.isInstancedInterleavedBuffer){for(let Qe=0;Qe<k.locationSize;Qe++)x(k.location+Qe,ve.meshPerAttribute);R.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let Qe=0;Qe<k.locationSize;Qe++)S(k.location+Qe);o.bindBuffer(o.ARRAY_BUFFER,Ne);for(let Qe=0;Qe<k.locationSize;Qe++)I(k.location+Qe,N/k.locationSize,Z,re,Te*ce,(Ue+N/k.locationSize*Qe)*ce,Me)}else{if(ae.isInstancedBufferAttribute){for(let ve=0;ve<k.locationSize;ve++)x(k.location+ve,ae.meshPerAttribute);R.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let ve=0;ve<k.locationSize;ve++)S(k.location+ve);o.bindBuffer(o.ARRAY_BUFFER,Ne);for(let ve=0;ve<k.locationSize;ve++)I(k.location+ve,N/k.locationSize,Z,re,N*ce,N/k.locationSize*ve*ce,Me)}}else if(se!==void 0){const re=se[le];if(re!==void 0)switch(re.length){case 2:o.vertexAttrib2fv(k.location,re);break;case 3:o.vertexAttrib3fv(k.location,re);break;case 4:o.vertexAttrib4fv(k.location,re);break;default:o.vertexAttrib1fv(k.location,re)}}}}D()}function G(){j();for(const R in i){const z=i[R];for(const oe in z){const ee=z[oe];for(const de in ee)m(ee[de].object),delete ee[de];delete z[oe]}delete i[R]}}function O(R){if(i[R.id]===void 0)return;const z=i[R.id];for(const oe in z){const ee=z[oe];for(const de in ee)m(ee[de].object),delete ee[de];delete z[oe]}delete i[R.id]}function U(R){for(const z in i){const oe=i[z];if(oe[R.id]===void 0)continue;const ee=oe[R.id];for(const de in ee)m(ee[de].object),delete ee[de];delete oe[R.id]}}function j(){b(),c=!0,a!==s&&(a=s,h(a.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:u,reset:j,resetDefaultState:b,dispose:G,releaseStatesOfGeometry:O,releaseStatesOfProgram:U,initAttributes:T,enableAttribute:S,disableUnusedAttributes:D}}function kE(o,e,t){let i;function s(h){i=h}function a(h,m){o.drawArrays(i,h,m),t.update(m,i,1)}function c(h,m,g){g!==0&&(o.drawArraysInstanced(i,h,m,g),t.update(m,i,g))}function u(h,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,h,0,m,0,g);let y=0;for(let M=0;M<g;M++)y+=m[M];t.update(y,i,1)}function f(h,m,g,_){if(g===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let M=0;M<h.length;M++)c(h[M],m[M],_[M]);else{y.multiDrawArraysInstancedWEBGL(i,h,0,m,0,_,0,g);let M=0;for(let T=0;T<g;T++)M+=m[T]*_[T];t.update(M,i,1)}}this.setMode=s,this.render=a,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function zE(o,e,t,i){let s;function a(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");s=o.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function c(U){return!(U!==ii&&i.convert(U)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function u(U){const j=U===ya&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==tr&&i.convert(U)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==gi&&!j)}function f(U){if(U==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const m=f(h);m!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",m,"instead."),h=m);const g=t.logarithmicDepthBuffer===!0,_=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),M=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=o.getParameter(o.MAX_TEXTURE_SIZE),S=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),x=o.getParameter(o.MAX_VERTEX_ATTRIBS),D=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),I=o.getParameter(o.MAX_VARYING_VECTORS),C=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),G=M>0,O=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:f,textureFormatReadable:c,textureTypeReadable:u,precision:h,logarithmicDepthBuffer:g,reverseDepthBuffer:_,maxTextures:y,maxVertexTextures:M,maxTextureSize:T,maxCubemapSize:S,maxAttributes:x,maxVertexUniforms:D,maxVaryings:I,maxFragmentUniforms:C,vertexTextures:G,maxSamples:O}}function HE(o){const e=this;let t=null,i=0,s=!1,a=!1;const c=new os,u=new at,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(g,_){const y=g.length!==0||_||i!==0||s;return s=_,i=g.length,y},this.beginShadows=function(){a=!0,m(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(g,_){t=m(g,_,0)},this.setState=function(g,_,y){const M=g.clippingPlanes,T=g.clipIntersection,S=g.clipShadows,x=o.get(g);if(!s||M===null||M.length===0||a&&!S)a?m(null):h();else{const D=a?0:i,I=D*4;let C=x.clippingState||null;f.value=C,C=m(M,_,I,y);for(let G=0;G!==I;++G)C[G]=t[G];x.clippingState=C,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=D}};function h(){f.value!==t&&(f.value=t,f.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function m(g,_,y,M){const T=g!==null?g.length:0;let S=null;if(T!==0){if(S=f.value,M!==!0||S===null){const x=y+T*4,D=_.matrixWorldInverse;u.getNormalMatrix(D),(S===null||S.length<x)&&(S=new Float32Array(x));for(let I=0,C=y;I!==T;++I,C+=4)c.copy(g[I]).applyMatrix4(D,u),c.normal.toArray(S,C),S[C+3]=c.constant}f.value=S,f.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,S}}function VE(o){let e=new WeakMap;function t(c,u){return u===Kd?c.mapping=co:u===$d&&(c.mapping=uo),c}function i(c){if(c&&c.isTexture){const u=c.mapping;if(u===Kd||u===$d)if(e.has(c)){const f=e.get(c).texture;return t(f,c.mapping)}else{const f=c.image;if(f&&f.height>0){const h=new ay(f.height);return h.fromEquirectangularTexture(o,c),e.set(c,h),c.addEventListener("dispose",s),t(h.texture,c.mapping)}else return null}}return c}function s(c){const u=c.target;u.removeEventListener("dispose",s);const f=e.get(u);f!==void 0&&(e.delete(u),f.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}const io=4,Sg=[.125,.215,.35,.446,.526,.582],cs=20,Pd=new Kf,Mg=new ot;let Id=null,Ld=0,Dd=0,Nd=!1;const as=(1+Math.sqrt(5))/2,Js=1/as,Eg=[new Y(-as,Js,0),new Y(as,Js,0),new Y(-Js,0,as),new Y(Js,0,as),new Y(0,as,-Js),new Y(0,as,Js),new Y(-1,1,-1),new Y(1,1,-1),new Y(-1,1,1),new Y(1,1,1)];class Tg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Id=this._renderer.getRenderTarget(),Ld=this._renderer.getActiveCubeFace(),Dd=this._renderer.getActiveMipmapLevel(),Nd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,s,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Id,Ld,Dd),this._renderer.xr.enabled=Nd,e.scissorTest=!1,tc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===co||e.mapping===uo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Id=this._renderer.getRenderTarget(),Ld=this._renderer.getActiveCubeFace(),Dd=this._renderer.getActiveMipmapLevel(),Nd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Yn,minFilter:Yn,generateMipmaps:!1,type:ya,format:ii,colorSpace:Ln,depthBuffer:!1},s=Ag(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ag(e,t,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=GE(a)),this._blurMaterial=WE(a,e,t)}return s}_compileMaterial(e){const t=new qn(this._lodPlanes[0],e);this._renderer.compile(t,Pd)}_sceneToCubeUV(e,t,i,s){const u=new bn(90,1,t,i),f=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],m=this._renderer,g=m.autoClear,_=m.toneMapping;m.getClearColor(Mg),m.toneMapping=Ur,m.autoClear=!1;const y=new us({name:"PMREM.Background",side:zn,depthWrite:!1,depthTest:!1}),M=new qn(new Sa,y);let T=!1;const S=e.background;S?S.isColor&&(y.color.copy(S),e.background=null,T=!0):(y.color.copy(Mg),T=!0);for(let x=0;x<6;x++){const D=x%3;D===0?(u.up.set(0,f[x],0),u.lookAt(h[x],0,0)):D===1?(u.up.set(0,0,f[x]),u.lookAt(0,h[x],0)):(u.up.set(0,f[x],0),u.lookAt(0,0,h[x]));const I=this._cubeSize;tc(s,D*I,x>2?I:0,I,I),m.setRenderTarget(s),T&&m.render(M,u),m.render(e,u)}M.geometry.dispose(),M.material.dispose(),m.toneMapping=_,m.autoClear=g,e.background=S}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===co||e.mapping===uo;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wg());const a=s?this._cubemapMaterial:this._equirectMaterial,c=new qn(this._lodPlanes[0],a),u=a.uniforms;u.envMap.value=e;const f=this._cubeSize;tc(t,0,0,3*f,2*f),i.setRenderTarget(t),i.render(c,Pd)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let a=1;a<s;a++){const c=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),u=Eg[(s-a-1)%Eg.length];this._blur(e,a-1,a,c,u)}t.autoClear=i}_blur(e,t,i,s,a){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,i,s,"latitudinal",a),this._halfBlur(c,e,i,i,s,"longitudinal",a)}_halfBlur(e,t,i,s,a,c,u){const f=this._renderer,h=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,g=new qn(this._lodPlanes[s],h),_=h.uniforms,y=this._sizeLods[i]-1,M=isFinite(a)?Math.PI/(2*y):2*Math.PI/(2*cs-1),T=a/M,S=isFinite(a)?1+Math.floor(m*T):cs;S>cs&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${cs}`);const x=[];let D=0;for(let U=0;U<cs;++U){const j=U/T,b=Math.exp(-j*j/2);x.push(b),U===0?D+=b:U<S&&(D+=2*b)}for(let U=0;U<x.length;U++)x[U]=x[U]/D;_.envMap.value=e.texture,_.samples.value=S,_.weights.value=x,_.latitudinal.value=c==="latitudinal",u&&(_.poleAxis.value=u);const{_lodMax:I}=this;_.dTheta.value=M,_.mipInt.value=I-i;const C=this._sizeLods[s],G=3*C*(s>I-io?s-I+io:0),O=4*(this._cubeSize-C);tc(t,G,O,3*C,2*C),f.setRenderTarget(t),f.render(g,Pd)}}function GE(o){const e=[],t=[],i=[];let s=o;const a=o-io+1+Sg.length;for(let c=0;c<a;c++){const u=Math.pow(2,s);t.push(u);let f=1/u;c>o-io?f=Sg[c-o+io-1]:c===0&&(f=0),i.push(f);const h=1/(u-2),m=-h,g=1+h,_=[m,m,g,m,g,g,m,m,g,g,m,g],y=6,M=6,T=3,S=2,x=1,D=new Float32Array(T*M*y),I=new Float32Array(S*M*y),C=new Float32Array(x*M*y);for(let O=0;O<y;O++){const U=O%3*2/3-1,j=O>2?0:-1,b=[U,j,0,U+2/3,j,0,U+2/3,j+1,0,U,j,0,U+2/3,j+1,0,U,j+1,0];D.set(b,T*M*O),I.set(_,S*M*O);const R=[O,O,O,O,O,O];C.set(R,x*M*O)}const G=new bi;G.setAttribute("position",new In(D,T)),G.setAttribute("uv",new In(I,S)),G.setAttribute("faceIndex",new In(C,x)),e.push(G),s>io&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Ag(o,e,t){const i=new hs(o,e,t);return i.texture.mapping=_c,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function tc(o,e,t,i,s){o.viewport.set(e,t,i,s),o.scissor.set(e,t,i,s)}function WE(o,e,t){const i=new Float32Array(cs),s=new Y(0,1,0);return new Fr({name:"SphericalGaussianBlur",defines:{n:cs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Qf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Nr,depthTest:!1,depthWrite:!1})}function wg(){return new Fr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Nr,depthTest:!1,depthWrite:!1})}function Rg(){return new Fr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Nr,depthTest:!1,depthWrite:!1})}function Qf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function XE(o){let e=new WeakMap,t=null;function i(u){if(u&&u.isTexture){const f=u.mapping,h=f===Kd||f===$d,m=f===co||f===uo;if(h||m){let g=e.get(u);const _=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==_)return t===null&&(t=new Tg(o)),g=h?t.fromEquirectangular(u,g):t.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),g.texture;if(g!==void 0)return g.texture;{const y=u.image;return h&&y&&y.height>0||m&&y&&s(y)?(t===null&&(t=new Tg(o)),g=h?t.fromEquirectangular(u):t.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),u.addEventListener("dispose",a),g.texture):null}}}return u}function s(u){let f=0;const h=6;for(let m=0;m<h;m++)u[m]!==void 0&&f++;return f===h}function a(u){const f=u.target;f.removeEventListener("dispose",a);const h=e.get(f);h!==void 0&&(e.delete(f),h.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:c}}function jE(o){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=o.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&eo("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function YE(o,e,t,i){const s={},a=new WeakMap;function c(g){const _=g.target;_.index!==null&&e.remove(_.index);for(const M in _.attributes)e.remove(_.attributes[M]);_.removeEventListener("dispose",c),delete s[_.id];const y=a.get(_);y&&(e.remove(y),a.delete(_)),i.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function u(g,_){return s[_.id]===!0||(_.addEventListener("dispose",c),s[_.id]=!0,t.memory.geometries++),_}function f(g){const _=g.attributes;for(const y in _)e.update(_[y],o.ARRAY_BUFFER)}function h(g){const _=[],y=g.index,M=g.attributes.position;let T=0;if(y!==null){const D=y.array;T=y.version;for(let I=0,C=D.length;I<C;I+=3){const G=D[I+0],O=D[I+1],U=D[I+2];_.push(G,O,O,U,U,G)}}else if(M!==void 0){const D=M.array;T=M.version;for(let I=0,C=D.length/3-1;I<C;I+=3){const G=I+0,O=I+1,U=I+2;_.push(G,O,O,U,U,G)}}else return;const S=new(f_(_)?v_:__)(_,1);S.version=T;const x=a.get(g);x&&e.remove(x),a.set(g,S)}function m(g){const _=a.get(g);if(_){const y=g.index;y!==null&&_.version<y.version&&h(g)}else h(g);return a.get(g)}return{get:u,update:f,getWireframeAttribute:m}}function qE(o,e,t){let i;function s(_){i=_}let a,c;function u(_){a=_.type,c=_.bytesPerElement}function f(_,y){o.drawElements(i,y,a,_*c),t.update(y,i,1)}function h(_,y,M){M!==0&&(o.drawElementsInstanced(i,y,a,_*c,M),t.update(y,i,M))}function m(_,y,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,y,0,a,_,0,M);let S=0;for(let x=0;x<M;x++)S+=y[x];t.update(S,i,1)}function g(_,y,M,T){if(M===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let x=0;x<_.length;x++)h(_[x]/c,y[x],T[x]);else{S.multiDrawElementsInstancedWEBGL(i,y,0,a,_,0,T,0,M);let x=0;for(let D=0;D<M;D++)x+=y[D]*T[D];t.update(x,i,1)}}this.setMode=s,this.setIndex=u,this.render=f,this.renderInstances=h,this.renderMultiDraw=m,this.renderMultiDrawInstances=g}function KE(o){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,c,u){switch(t.calls++,c){case o.TRIANGLES:t.triangles+=u*(a/3);break;case o.LINES:t.lines+=u*(a/2);break;case o.LINE_STRIP:t.lines+=u*(a-1);break;case o.LINE_LOOP:t.lines+=u*a;break;case o.POINTS:t.points+=u*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function $E(o,e,t){const i=new WeakMap,s=new Ct;function a(c,u,f){const h=c.morphTargetInfluences,m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=m!==void 0?m.length:0;let _=i.get(u);if(_===void 0||_.count!==g){let R=function(){j.dispose(),i.delete(u),u.removeEventListener("dispose",R)};var y=R;_!==void 0&&_.texture.dispose();const M=u.morphAttributes.position!==void 0,T=u.morphAttributes.normal!==void 0,S=u.morphAttributes.color!==void 0,x=u.morphAttributes.position||[],D=u.morphAttributes.normal||[],I=u.morphAttributes.color||[];let C=0;M===!0&&(C=1),T===!0&&(C=2),S===!0&&(C=3);let G=u.attributes.position.count*C,O=1;G>e.maxTextureSize&&(O=Math.ceil(G/e.maxTextureSize),G=e.maxTextureSize);const U=new Float32Array(G*O*4*g),j=new p_(U,G,O,g);j.type=gi,j.needsUpdate=!0;const b=C*4;for(let z=0;z<g;z++){const oe=x[z],ee=D[z],de=I[z],he=G*O*4*z;for(let se=0;se<oe.count;se++){const le=se*b;M===!0&&(s.fromBufferAttribute(oe,se),U[he+le+0]=s.x,U[he+le+1]=s.y,U[he+le+2]=s.z,U[he+le+3]=0),T===!0&&(s.fromBufferAttribute(ee,se),U[he+le+4]=s.x,U[he+le+5]=s.y,U[he+le+6]=s.z,U[he+le+7]=0),S===!0&&(s.fromBufferAttribute(de,se),U[he+le+8]=s.x,U[he+le+9]=s.y,U[he+le+10]=s.z,U[he+le+11]=de.itemSize===4?s.w:1)}}_={count:g,texture:j,size:new Mt(G,O)},i.set(u,_),u.addEventListener("dispose",R)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)f.getUniforms().setValue(o,"morphTexture",c.morphTexture,t);else{let M=0;for(let S=0;S<h.length;S++)M+=h[S];const T=u.morphTargetsRelative?1:1-M;f.getUniforms().setValue(o,"morphTargetBaseInfluence",T),f.getUniforms().setValue(o,"morphTargetInfluences",h)}f.getUniforms().setValue(o,"morphTargetsTexture",_.texture,t),f.getUniforms().setValue(o,"morphTargetsTextureSize",_.size)}return{update:a}}function ZE(o,e,t,i){let s=new WeakMap;function a(f){const h=i.render.frame,m=f.geometry,g=e.get(f,m);if(s.get(g)!==h&&(e.update(g),s.set(g,h)),f.isInstancedMesh&&(f.hasEventListener("dispose",u)===!1&&f.addEventListener("dispose",u),s.get(f)!==h&&(t.update(f.instanceMatrix,o.ARRAY_BUFFER),f.instanceColor!==null&&t.update(f.instanceColor,o.ARRAY_BUFFER),s.set(f,h))),f.isSkinnedMesh){const _=f.skeleton;s.get(_)!==h&&(_.update(),s.set(_,h))}return g}function c(){s=new WeakMap}function u(f){const h=f.target;h.removeEventListener("dispose",u),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:c}}const N_=new ln,Cg=new w_(1,1),U_=new p_,F_=new Xx,O_=new S_,bg=[],Pg=[],Ig=new Float32Array(16),Lg=new Float32Array(9),Dg=new Float32Array(4);function Eo(o,e,t){const i=o[0];if(i<=0||i>0)return o;const s=e*t;let a=bg[s];if(a===void 0&&(a=new Float32Array(s),bg[s]=a),e!==0){i.toArray(a,0);for(let c=1,u=0;c!==e;++c)u+=t,o[c].toArray(a,u)}return a}function tn(o,e){if(o.length!==e.length)return!1;for(let t=0,i=o.length;t<i;t++)if(o[t]!==e[t])return!1;return!0}function nn(o,e){for(let t=0,i=e.length;t<i;t++)o[t]=e[t]}function Sc(o,e){let t=Pg[e];t===void 0&&(t=new Int32Array(e),Pg[e]=t);for(let i=0;i!==e;++i)t[i]=o.allocateTextureUnit();return t}function QE(o,e){const t=this.cache;t[0]!==e&&(o.uniform1f(this.addr,e),t[0]=e)}function JE(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;o.uniform2fv(this.addr,e),nn(t,e)}}function eT(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(tn(t,e))return;o.uniform3fv(this.addr,e),nn(t,e)}}function tT(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;o.uniform4fv(this.addr,e),nn(t,e)}}function nT(o,e){const t=this.cache,i=e.elements;if(i===void 0){if(tn(t,e))return;o.uniformMatrix2fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,i))return;Dg.set(i),o.uniformMatrix2fv(this.addr,!1,Dg),nn(t,i)}}function iT(o,e){const t=this.cache,i=e.elements;if(i===void 0){if(tn(t,e))return;o.uniformMatrix3fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,i))return;Lg.set(i),o.uniformMatrix3fv(this.addr,!1,Lg),nn(t,i)}}function rT(o,e){const t=this.cache,i=e.elements;if(i===void 0){if(tn(t,e))return;o.uniformMatrix4fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,i))return;Ig.set(i),o.uniformMatrix4fv(this.addr,!1,Ig),nn(t,i)}}function sT(o,e){const t=this.cache;t[0]!==e&&(o.uniform1i(this.addr,e),t[0]=e)}function oT(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;o.uniform2iv(this.addr,e),nn(t,e)}}function aT(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;o.uniform3iv(this.addr,e),nn(t,e)}}function lT(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;o.uniform4iv(this.addr,e),nn(t,e)}}function cT(o,e){const t=this.cache;t[0]!==e&&(o.uniform1ui(this.addr,e),t[0]=e)}function uT(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;o.uniform2uiv(this.addr,e),nn(t,e)}}function dT(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;o.uniform3uiv(this.addr,e),nn(t,e)}}function fT(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;o.uniform4uiv(this.addr,e),nn(t,e)}}function hT(o,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s);let a;this.type===o.SAMPLER_2D_SHADOW?(Cg.compareFunction=d_,a=Cg):a=N_,t.setTexture2D(e||a,s)}function pT(o,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||F_,s)}function mT(o,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||O_,s)}function gT(o,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||U_,s)}function _T(o){switch(o){case 5126:return QE;case 35664:return JE;case 35665:return eT;case 35666:return tT;case 35674:return nT;case 35675:return iT;case 35676:return rT;case 5124:case 35670:return sT;case 35667:case 35671:return oT;case 35668:case 35672:return aT;case 35669:case 35673:return lT;case 5125:return cT;case 36294:return uT;case 36295:return dT;case 36296:return fT;case 35678:case 36198:case 36298:case 36306:case 35682:return hT;case 35679:case 36299:case 36307:return pT;case 35680:case 36300:case 36308:case 36293:return mT;case 36289:case 36303:case 36311:case 36292:return gT}}function vT(o,e){o.uniform1fv(this.addr,e)}function xT(o,e){const t=Eo(e,this.size,2);o.uniform2fv(this.addr,t)}function yT(o,e){const t=Eo(e,this.size,3);o.uniform3fv(this.addr,t)}function ST(o,e){const t=Eo(e,this.size,4);o.uniform4fv(this.addr,t)}function MT(o,e){const t=Eo(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,t)}function ET(o,e){const t=Eo(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,t)}function TT(o,e){const t=Eo(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,t)}function AT(o,e){o.uniform1iv(this.addr,e)}function wT(o,e){o.uniform2iv(this.addr,e)}function RT(o,e){o.uniform3iv(this.addr,e)}function CT(o,e){o.uniform4iv(this.addr,e)}function bT(o,e){o.uniform1uiv(this.addr,e)}function PT(o,e){o.uniform2uiv(this.addr,e)}function IT(o,e){o.uniform3uiv(this.addr,e)}function LT(o,e){o.uniform4uiv(this.addr,e)}function DT(o,e,t){const i=this.cache,s=e.length,a=Sc(t,s);tn(i,a)||(o.uniform1iv(this.addr,a),nn(i,a));for(let c=0;c!==s;++c)t.setTexture2D(e[c]||N_,a[c])}function NT(o,e,t){const i=this.cache,s=e.length,a=Sc(t,s);tn(i,a)||(o.uniform1iv(this.addr,a),nn(i,a));for(let c=0;c!==s;++c)t.setTexture3D(e[c]||F_,a[c])}function UT(o,e,t){const i=this.cache,s=e.length,a=Sc(t,s);tn(i,a)||(o.uniform1iv(this.addr,a),nn(i,a));for(let c=0;c!==s;++c)t.setTextureCube(e[c]||O_,a[c])}function FT(o,e,t){const i=this.cache,s=e.length,a=Sc(t,s);tn(i,a)||(o.uniform1iv(this.addr,a),nn(i,a));for(let c=0;c!==s;++c)t.setTexture2DArray(e[c]||U_,a[c])}function OT(o){switch(o){case 5126:return vT;case 35664:return xT;case 35665:return yT;case 35666:return ST;case 35674:return MT;case 35675:return ET;case 35676:return TT;case 5124:case 35670:return AT;case 35667:case 35671:return wT;case 35668:case 35672:return RT;case 35669:case 35673:return CT;case 5125:return bT;case 36294:return PT;case 36295:return IT;case 36296:return LT;case 35678:case 36198:case 36298:case 36306:case 35682:return DT;case 35679:case 36299:case 36307:return NT;case 35680:case 36300:case 36308:case 36293:return UT;case 36289:case 36303:case 36311:case 36292:return FT}}class BT{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=_T(t.type)}}class kT{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=OT(t.type)}}class zT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let a=0,c=s.length;a!==c;++a){const u=s[a];u.setValue(e,t[u.id],i)}}}const Ud=/(\w+)(\])?(\[|\.)?/g;function Ng(o,e){o.seq.push(e),o.map[e.id]=e}function HT(o,e,t){const i=o.name,s=i.length;for(Ud.lastIndex=0;;){const a=Ud.exec(i),c=Ud.lastIndex;let u=a[1];const f=a[2]==="]",h=a[3];if(f&&(u=u|0),h===void 0||h==="["&&c+2===s){Ng(t,h===void 0?new BT(u,o,e):new kT(u,o,e));break}else{let g=t.map[u];g===void 0&&(g=new zT(u),Ng(t,g)),t=g}}}class cc{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const a=e.getActiveUniform(t,s),c=e.getUniformLocation(t,a.name);HT(a,c,this)}}setValue(e,t,i,s){const a=this.map[t];a!==void 0&&a.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let a=0,c=t.length;a!==c;++a){const u=t[a],f=i[u.id];f.needsUpdate!==!1&&u.setValue(e,f.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,a=e.length;s!==a;++s){const c=e[s];c.id in t&&i.push(c)}return i}}function Ug(o,e,t){const i=o.createShader(e);return o.shaderSource(i,t),o.compileShader(i),i}const VT=37297;let GT=0;function WT(o,e){const t=o.split(`
`),i=[],s=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let c=s;c<a;c++){const u=c+1;i.push(`${u===e?">":" "} ${u}: ${t[c]}`)}return i.join(`
`)}const Fg=new at;function XT(o){St._getMatrix(Fg,St.workingColorSpace,o);const e=`mat3( ${Fg.elements.map(t=>t.toFixed(4))} )`;switch(St.getTransfer(o)){case hc:return[e,"LinearTransferOETF"];case Ut:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function Og(o,e,t){const i=o.getShaderParameter(e,o.COMPILE_STATUS),s=o.getShaderInfoLog(e).trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const c=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+WT(o.getShaderSource(e),c)}else return s}function jT(o,e){const t=XT(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function YT(o,e){let t;switch(e){case $0:t="Linear";break;case Z0:t="Reinhard";break;case Q0:t="Cineon";break;case J0:t="ACESFilmic";break;case tx:t="AgX";break;case nx:t="Neutral";break;case ex:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+o+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const nc=new Y;function qT(){St.getLuminanceCoefficients(nc);const o=nc.x.toFixed(4),e=nc.y.toFixed(4),t=nc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function KT(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fa).join(`
`)}function $T(o){const e=[];for(const t in o){const i=o[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function ZT(o,e){const t={},i=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const a=o.getActiveAttrib(e,s),c=a.name;let u=1;a.type===o.FLOAT_MAT2&&(u=2),a.type===o.FLOAT_MAT3&&(u=3),a.type===o.FLOAT_MAT4&&(u=4),t[c]={type:a.type,location:o.getAttribLocation(e,c),locationSize:u}}return t}function fa(o){return o!==""}function Bg(o,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function kg(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const QT=/^[ \t]*#include +<([\w\d./]+)>/gm;function bf(o){return o.replace(QT,eA)}const JT=new Map;function eA(o,e){let t=ct[e];if(t===void 0){const i=JT.get(e);if(i!==void 0)t=ct[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return bf(t)}const tA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zg(o){return o.replace(tA,nA)}function nA(o,e,t,i){let s="";for(let a=parseInt(e);a<parseInt(t);a++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function Hg(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function iA(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===$g?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===b0?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===qi&&(e="SHADOWMAP_TYPE_VSM"),e}function rA(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case co:case uo:e="ENVMAP_TYPE_CUBE";break;case _c:e="ENVMAP_TYPE_CUBE_UV";break}return e}function sA(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case uo:e="ENVMAP_MODE_REFRACTION";break}return e}function oA(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Zg:e="ENVMAP_BLENDING_MULTIPLY";break;case q0:e="ENVMAP_BLENDING_MIX";break;case K0:e="ENVMAP_BLENDING_ADD";break}return e}function aA(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function lA(o,e,t,i){const s=o.getContext(),a=t.defines;let c=t.vertexShader,u=t.fragmentShader;const f=iA(t),h=rA(t),m=sA(t),g=oA(t),_=aA(t),y=KT(t),M=$T(a),T=s.createProgram();let S,x,D=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(fa).join(`
`),S.length>0&&(S+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(fa).join(`
`),x.length>0&&(x+=`
`)):(S=[Hg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fa).join(`
`),x=[Hg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+m:"",t.envMap?"#define "+g:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ur?"#define TONE_MAPPING":"",t.toneMapping!==Ur?ct.tonemapping_pars_fragment:"",t.toneMapping!==Ur?YT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ct.colorspace_pars_fragment,jT("linearToOutputTexel",t.outputColorSpace),qT(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(fa).join(`
`)),c=bf(c),c=Bg(c,t),c=kg(c,t),u=bf(u),u=Bg(u,t),u=kg(u,t),c=zg(c),u=zg(u),t.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,x=["#define varying in",t.glslVersion===Fm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Fm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const I=D+S+c,C=D+x+u,G=Ug(s,s.VERTEX_SHADER,I),O=Ug(s,s.FRAGMENT_SHADER,C);s.attachShader(T,G),s.attachShader(T,O),t.index0AttributeName!==void 0?s.bindAttribLocation(T,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(T,0,"position"),s.linkProgram(T);function U(z){if(o.debug.checkShaderErrors){const oe=s.getProgramInfoLog(T).trim(),ee=s.getShaderInfoLog(G).trim(),de=s.getShaderInfoLog(O).trim();let he=!0,se=!0;if(s.getProgramParameter(T,s.LINK_STATUS)===!1)if(he=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(s,T,G,O);else{const le=Og(s,G,"vertex"),k=Og(s,O,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(T,s.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+oe+`
`+le+`
`+k)}else oe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",oe):(ee===""||de==="")&&(se=!1);se&&(z.diagnostics={runnable:he,programLog:oe,vertexShader:{log:ee,prefix:S},fragmentShader:{log:de,prefix:x}})}s.deleteShader(G),s.deleteShader(O),j=new cc(s,T),b=ZT(s,T)}let j;this.getUniforms=function(){return j===void 0&&U(this),j};let b;this.getAttributes=function(){return b===void 0&&U(this),b};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(T,VT)),R},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(T),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=GT++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=G,this.fragmentShader=O,this}let cA=0;class uA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),a=this._getShaderStage(i),c=this._getShaderCacheForMaterial(e);return c.has(s)===!1&&(c.add(s),s.usedTimes++),c.has(a)===!1&&(c.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new dA(e),t.set(e,i)),i}}class dA{constructor(e){this.id=cA++,this.code=e,this.usedTimes=0}}function fA(o,e,t,i,s,a,c){const u=new m_,f=new uA,h=new Set,m=[],g=s.logarithmicDepthBuffer,_=s.vertexTextures;let y=s.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(b){return h.add(b),b===0?"uv":`uv${b}`}function S(b,R,z,oe,ee){const de=oe.fog,he=ee.geometry,se=b.isMeshStandardMaterial?oe.environment:null,le=(b.isMeshStandardMaterial?t:e).get(b.envMap||se),k=le&&le.mapping===_c?le.image.height:null,ae=M[b.type];b.precision!==null&&(y=s.getMaxPrecision(b.precision),y!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",y,"instead."));const re=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,N=re!==void 0?re.length:0;let ne=0;he.morphAttributes.position!==void 0&&(ne=1),he.morphAttributes.normal!==void 0&&(ne=2),he.morphAttributes.color!==void 0&&(ne=3);let Ne,Z,ce,Me;if(ae){const Et=Ti[ae];Ne=Et.vertexShader,Z=Et.fragmentShader}else Ne=b.vertexShader,Z=b.fragmentShader,f.update(b),ce=f.getVertexShaderID(b),Me=f.getFragmentShaderID(b);const ve=o.getRenderTarget(),Te=o.state.buffers.depth.getReversed(),Ue=ee.isInstancedMesh===!0,Qe=ee.isBatchedMesh===!0,Dt=!!b.map,vt=!!b.matcap,Ft=!!le,B=!!b.aoMap,Sn=!!b.lightMap,pt=!!b.bumpMap,dt=!!b.normalMap,Ye=!!b.displacementMap,It=!!b.emissiveMap,Xe=!!b.metalnessMap,P=!!b.roughnessMap,A=b.anisotropy>0,$=b.clearcoat>0,pe=b.dispersion>0,ge=b.iridescence>0,ue=b.sheen>0,Ge=b.transmission>0,Ae=A&&!!b.anisotropyMap,Fe=$&&!!b.clearcoatMap,ut=$&&!!b.clearcoatNormalMap,Se=$&&!!b.clearcoatRoughnessMap,ke=ge&&!!b.iridescenceMap,Ke=ge&&!!b.iridescenceThicknessMap,Je=ue&&!!b.sheenColorMap,ze=ue&&!!b.sheenRoughnessMap,ft=!!b.specularMap,it=!!b.specularColorMap,bt=!!b.specularIntensityMap,W=Ge&&!!b.transmissionMap,we=Ge&&!!b.thicknessMap,ie=!!b.gradientMap,fe=!!b.alphaMap,Ie=b.alphaTest>0,Pe=!!b.alphaHash,rt=!!b.extensions;let Bt=Ur;b.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(Bt=o.toneMapping);const Qt={shaderID:ae,shaderType:b.type,shaderName:b.name,vertexShader:Ne,fragmentShader:Z,defines:b.defines,customVertexShaderID:ce,customFragmentShaderID:Me,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:y,batching:Qe,batchingColor:Qe&&ee._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&ee.instanceColor!==null,instancingMorph:Ue&&ee.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:ve===null?o.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:Ln,alphaToCoverage:!!b.alphaToCoverage,map:Dt,matcap:vt,envMap:Ft,envMapMode:Ft&&le.mapping,envMapCubeUVHeight:k,aoMap:B,lightMap:Sn,bumpMap:pt,normalMap:dt,displacementMap:_&&Ye,emissiveMap:It,normalMapObjectSpace:dt&&b.normalMapType===dx,normalMapTangentSpace:dt&&b.normalMapType===u_,metalnessMap:Xe,roughnessMap:P,anisotropy:A,anisotropyMap:Ae,clearcoat:$,clearcoatMap:Fe,clearcoatNormalMap:ut,clearcoatRoughnessMap:Se,dispersion:pe,iridescence:ge,iridescenceMap:ke,iridescenceThicknessMap:Ke,sheen:ue,sheenColorMap:Je,sheenRoughnessMap:ze,specularMap:ft,specularColorMap:it,specularIntensityMap:bt,transmission:Ge,transmissionMap:W,thicknessMap:we,gradientMap:ie,opaque:b.transparent===!1&&b.blending===ro&&b.alphaToCoverage===!1,alphaMap:fe,alphaTest:Ie,alphaHash:Pe,combine:b.combine,mapUv:Dt&&T(b.map.channel),aoMapUv:B&&T(b.aoMap.channel),lightMapUv:Sn&&T(b.lightMap.channel),bumpMapUv:pt&&T(b.bumpMap.channel),normalMapUv:dt&&T(b.normalMap.channel),displacementMapUv:Ye&&T(b.displacementMap.channel),emissiveMapUv:It&&T(b.emissiveMap.channel),metalnessMapUv:Xe&&T(b.metalnessMap.channel),roughnessMapUv:P&&T(b.roughnessMap.channel),anisotropyMapUv:Ae&&T(b.anisotropyMap.channel),clearcoatMapUv:Fe&&T(b.clearcoatMap.channel),clearcoatNormalMapUv:ut&&T(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&T(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ke&&T(b.iridescenceMap.channel),iridescenceThicknessMapUv:Ke&&T(b.iridescenceThicknessMap.channel),sheenColorMapUv:Je&&T(b.sheenColorMap.channel),sheenRoughnessMapUv:ze&&T(b.sheenRoughnessMap.channel),specularMapUv:ft&&T(b.specularMap.channel),specularColorMapUv:it&&T(b.specularColorMap.channel),specularIntensityMapUv:bt&&T(b.specularIntensityMap.channel),transmissionMapUv:W&&T(b.transmissionMap.channel),thicknessMapUv:we&&T(b.thicknessMap.channel),alphaMapUv:fe&&T(b.alphaMap.channel),vertexTangents:!!he.attributes.tangent&&(dt||A),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,pointsUvs:ee.isPoints===!0&&!!he.attributes.uv&&(Dt||fe),fog:!!de,useFog:b.fog===!0,fogExp2:!!de&&de.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:g,reverseDepthBuffer:Te,skinning:ee.isSkinnedMesh===!0,morphTargets:he.morphAttributes.position!==void 0,morphNormals:he.morphAttributes.normal!==void 0,morphColors:he.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:ne,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:b.dithering,shadowMapEnabled:o.shadowMap.enabled&&z.length>0,shadowMapType:o.shadowMap.type,toneMapping:Bt,decodeVideoTexture:Dt&&b.map.isVideoTexture===!0&&St.getTransfer(b.map.colorSpace)===Ut,decodeVideoTextureEmissive:It&&b.emissiveMap.isVideoTexture===!0&&St.getTransfer(b.emissiveMap.colorSpace)===Ut,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Ai,flipSided:b.side===zn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:rt&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(rt&&b.extensions.multiDraw===!0||Qe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Qt.vertexUv1s=h.has(1),Qt.vertexUv2s=h.has(2),Qt.vertexUv3s=h.has(3),h.clear(),Qt}function x(b){const R=[];if(b.shaderID?R.push(b.shaderID):(R.push(b.customVertexShaderID),R.push(b.customFragmentShaderID)),b.defines!==void 0)for(const z in b.defines)R.push(z),R.push(b.defines[z]);return b.isRawShaderMaterial===!1&&(D(R,b),I(R,b),R.push(o.outputColorSpace)),R.push(b.customProgramCacheKey),R.join()}function D(b,R){b.push(R.precision),b.push(R.outputColorSpace),b.push(R.envMapMode),b.push(R.envMapCubeUVHeight),b.push(R.mapUv),b.push(R.alphaMapUv),b.push(R.lightMapUv),b.push(R.aoMapUv),b.push(R.bumpMapUv),b.push(R.normalMapUv),b.push(R.displacementMapUv),b.push(R.emissiveMapUv),b.push(R.metalnessMapUv),b.push(R.roughnessMapUv),b.push(R.anisotropyMapUv),b.push(R.clearcoatMapUv),b.push(R.clearcoatNormalMapUv),b.push(R.clearcoatRoughnessMapUv),b.push(R.iridescenceMapUv),b.push(R.iridescenceThicknessMapUv),b.push(R.sheenColorMapUv),b.push(R.sheenRoughnessMapUv),b.push(R.specularMapUv),b.push(R.specularColorMapUv),b.push(R.specularIntensityMapUv),b.push(R.transmissionMapUv),b.push(R.thicknessMapUv),b.push(R.combine),b.push(R.fogExp2),b.push(R.sizeAttenuation),b.push(R.morphTargetsCount),b.push(R.morphAttributeCount),b.push(R.numDirLights),b.push(R.numPointLights),b.push(R.numSpotLights),b.push(R.numSpotLightMaps),b.push(R.numHemiLights),b.push(R.numRectAreaLights),b.push(R.numDirLightShadows),b.push(R.numPointLightShadows),b.push(R.numSpotLightShadows),b.push(R.numSpotLightShadowsWithMaps),b.push(R.numLightProbes),b.push(R.shadowMapType),b.push(R.toneMapping),b.push(R.numClippingPlanes),b.push(R.numClipIntersection),b.push(R.depthPacking)}function I(b,R){u.disableAll(),R.supportsVertexTextures&&u.enable(0),R.instancing&&u.enable(1),R.instancingColor&&u.enable(2),R.instancingMorph&&u.enable(3),R.matcap&&u.enable(4),R.envMap&&u.enable(5),R.normalMapObjectSpace&&u.enable(6),R.normalMapTangentSpace&&u.enable(7),R.clearcoat&&u.enable(8),R.iridescence&&u.enable(9),R.alphaTest&&u.enable(10),R.vertexColors&&u.enable(11),R.vertexAlphas&&u.enable(12),R.vertexUv1s&&u.enable(13),R.vertexUv2s&&u.enable(14),R.vertexUv3s&&u.enable(15),R.vertexTangents&&u.enable(16),R.anisotropy&&u.enable(17),R.alphaHash&&u.enable(18),R.batching&&u.enable(19),R.dispersion&&u.enable(20),R.batchingColor&&u.enable(21),b.push(u.mask),u.disableAll(),R.fog&&u.enable(0),R.useFog&&u.enable(1),R.flatShading&&u.enable(2),R.logarithmicDepthBuffer&&u.enable(3),R.reverseDepthBuffer&&u.enable(4),R.skinning&&u.enable(5),R.morphTargets&&u.enable(6),R.morphNormals&&u.enable(7),R.morphColors&&u.enable(8),R.premultipliedAlpha&&u.enable(9),R.shadowMapEnabled&&u.enable(10),R.doubleSided&&u.enable(11),R.flipSided&&u.enable(12),R.useDepthPacking&&u.enable(13),R.dithering&&u.enable(14),R.transmission&&u.enable(15),R.sheen&&u.enable(16),R.opaque&&u.enable(17),R.pointsUvs&&u.enable(18),R.decodeVideoTexture&&u.enable(19),R.decodeVideoTextureEmissive&&u.enable(20),R.alphaToCoverage&&u.enable(21),b.push(u.mask)}function C(b){const R=M[b.type];let z;if(R){const oe=Ti[R];z=iy.clone(oe.uniforms)}else z=b.uniforms;return z}function G(b,R){let z;for(let oe=0,ee=m.length;oe<ee;oe++){const de=m[oe];if(de.cacheKey===R){z=de,++z.usedTimes;break}}return z===void 0&&(z=new lA(o,R,b,a),m.push(z)),z}function O(b){if(--b.usedTimes===0){const R=m.indexOf(b);m[R]=m[m.length-1],m.pop(),b.destroy()}}function U(b){f.remove(b)}function j(){f.dispose()}return{getParameters:S,getProgramCacheKey:x,getUniforms:C,acquireProgram:G,releaseProgram:O,releaseShaderCache:U,programs:m,dispose:j}}function hA(){let o=new WeakMap;function e(c){return o.has(c)}function t(c){let u=o.get(c);return u===void 0&&(u={},o.set(c,u)),u}function i(c){o.delete(c)}function s(c,u,f){o.get(c)[u]=f}function a(){o=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:a}}function pA(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function Vg(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function Gg(){const o=[];let e=0;const t=[],i=[],s=[];function a(){e=0,t.length=0,i.length=0,s.length=0}function c(g,_,y,M,T,S){let x=o[e];return x===void 0?(x={id:g.id,object:g,geometry:_,material:y,groupOrder:M,renderOrder:g.renderOrder,z:T,group:S},o[e]=x):(x.id=g.id,x.object=g,x.geometry=_,x.material=y,x.groupOrder=M,x.renderOrder=g.renderOrder,x.z=T,x.group=S),e++,x}function u(g,_,y,M,T,S){const x=c(g,_,y,M,T,S);y.transmission>0?i.push(x):y.transparent===!0?s.push(x):t.push(x)}function f(g,_,y,M,T,S){const x=c(g,_,y,M,T,S);y.transmission>0?i.unshift(x):y.transparent===!0?s.unshift(x):t.unshift(x)}function h(g,_){t.length>1&&t.sort(g||pA),i.length>1&&i.sort(_||Vg),s.length>1&&s.sort(_||Vg)}function m(){for(let g=e,_=o.length;g<_;g++){const y=o[g];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:t,transmissive:i,transparent:s,init:a,push:u,unshift:f,finish:m,sort:h}}function mA(){let o=new WeakMap;function e(i,s){const a=o.get(i);let c;return a===void 0?(c=new Gg,o.set(i,[c])):s>=a.length?(c=new Gg,a.push(c)):c=a[s],c}function t(){o=new WeakMap}return{get:e,dispose:t}}function gA(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Y,color:new ot};break;case"SpotLight":t={position:new Y,direction:new Y,color:new ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Y,color:new ot,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Y,skyColor:new ot,groundColor:new ot};break;case"RectAreaLight":t={color:new ot,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return o[e.id]=t,t}}}function _A(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=t,t}}}let vA=0;function xA(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function yA(o){const e=new gA,t=_A(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new Y);const s=new Y,a=new lt,c=new lt;function u(h){let m=0,g=0,_=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let y=0,M=0,T=0,S=0,x=0,D=0,I=0,C=0,G=0,O=0,U=0;h.sort(xA);for(let b=0,R=h.length;b<R;b++){const z=h[b],oe=z.color,ee=z.intensity,de=z.distance,he=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)m+=oe.r*ee,g+=oe.g*ee,_+=oe.b*ee;else if(z.isLightProbe){for(let se=0;se<9;se++)i.probe[se].addScaledVector(z.sh.coefficients[se],ee);U++}else if(z.isDirectionalLight){const se=e.get(z);if(se.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const le=z.shadow,k=t.get(z);k.shadowIntensity=le.intensity,k.shadowBias=le.bias,k.shadowNormalBias=le.normalBias,k.shadowRadius=le.radius,k.shadowMapSize=le.mapSize,i.directionalShadow[y]=k,i.directionalShadowMap[y]=he,i.directionalShadowMatrix[y]=z.shadow.matrix,D++}i.directional[y]=se,y++}else if(z.isSpotLight){const se=e.get(z);se.position.setFromMatrixPosition(z.matrixWorld),se.color.copy(oe).multiplyScalar(ee),se.distance=de,se.coneCos=Math.cos(z.angle),se.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),se.decay=z.decay,i.spot[T]=se;const le=z.shadow;if(z.map&&(i.spotLightMap[G]=z.map,G++,le.updateMatrices(z),z.castShadow&&O++),i.spotLightMatrix[T]=le.matrix,z.castShadow){const k=t.get(z);k.shadowIntensity=le.intensity,k.shadowBias=le.bias,k.shadowNormalBias=le.normalBias,k.shadowRadius=le.radius,k.shadowMapSize=le.mapSize,i.spotShadow[T]=k,i.spotShadowMap[T]=he,C++}T++}else if(z.isRectAreaLight){const se=e.get(z);se.color.copy(oe).multiplyScalar(ee),se.halfWidth.set(z.width*.5,0,0),se.halfHeight.set(0,z.height*.5,0),i.rectArea[S]=se,S++}else if(z.isPointLight){const se=e.get(z);if(se.color.copy(z.color).multiplyScalar(z.intensity),se.distance=z.distance,se.decay=z.decay,z.castShadow){const le=z.shadow,k=t.get(z);k.shadowIntensity=le.intensity,k.shadowBias=le.bias,k.shadowNormalBias=le.normalBias,k.shadowRadius=le.radius,k.shadowMapSize=le.mapSize,k.shadowCameraNear=le.camera.near,k.shadowCameraFar=le.camera.far,i.pointShadow[M]=k,i.pointShadowMap[M]=he,i.pointShadowMatrix[M]=z.shadow.matrix,I++}i.point[M]=se,M++}else if(z.isHemisphereLight){const se=e.get(z);se.skyColor.copy(z.color).multiplyScalar(ee),se.groundColor.copy(z.groundColor).multiplyScalar(ee),i.hemi[x]=se,x++}}S>0&&(o.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ce.LTC_FLOAT_1,i.rectAreaLTC2=Ce.LTC_FLOAT_2):(i.rectAreaLTC1=Ce.LTC_HALF_1,i.rectAreaLTC2=Ce.LTC_HALF_2)),i.ambient[0]=m,i.ambient[1]=g,i.ambient[2]=_;const j=i.hash;(j.directionalLength!==y||j.pointLength!==M||j.spotLength!==T||j.rectAreaLength!==S||j.hemiLength!==x||j.numDirectionalShadows!==D||j.numPointShadows!==I||j.numSpotShadows!==C||j.numSpotMaps!==G||j.numLightProbes!==U)&&(i.directional.length=y,i.spot.length=T,i.rectArea.length=S,i.point.length=M,i.hemi.length=x,i.directionalShadow.length=D,i.directionalShadowMap.length=D,i.pointShadow.length=I,i.pointShadowMap.length=I,i.spotShadow.length=C,i.spotShadowMap.length=C,i.directionalShadowMatrix.length=D,i.pointShadowMatrix.length=I,i.spotLightMatrix.length=C+G-O,i.spotLightMap.length=G,i.numSpotLightShadowsWithMaps=O,i.numLightProbes=U,j.directionalLength=y,j.pointLength=M,j.spotLength=T,j.rectAreaLength=S,j.hemiLength=x,j.numDirectionalShadows=D,j.numPointShadows=I,j.numSpotShadows=C,j.numSpotMaps=G,j.numLightProbes=U,i.version=vA++)}function f(h,m){let g=0,_=0,y=0,M=0,T=0;const S=m.matrixWorldInverse;for(let x=0,D=h.length;x<D;x++){const I=h[x];if(I.isDirectionalLight){const C=i.directional[g];C.direction.setFromMatrixPosition(I.matrixWorld),s.setFromMatrixPosition(I.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(S),g++}else if(I.isSpotLight){const C=i.spot[y];C.position.setFromMatrixPosition(I.matrixWorld),C.position.applyMatrix4(S),C.direction.setFromMatrixPosition(I.matrixWorld),s.setFromMatrixPosition(I.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(S),y++}else if(I.isRectAreaLight){const C=i.rectArea[M];C.position.setFromMatrixPosition(I.matrixWorld),C.position.applyMatrix4(S),c.identity(),a.copy(I.matrixWorld),a.premultiply(S),c.extractRotation(a),C.halfWidth.set(I.width*.5,0,0),C.halfHeight.set(0,I.height*.5,0),C.halfWidth.applyMatrix4(c),C.halfHeight.applyMatrix4(c),M++}else if(I.isPointLight){const C=i.point[_];C.position.setFromMatrixPosition(I.matrixWorld),C.position.applyMatrix4(S),_++}else if(I.isHemisphereLight){const C=i.hemi[T];C.direction.setFromMatrixPosition(I.matrixWorld),C.direction.transformDirection(S),T++}}}return{setup:u,setupView:f,state:i}}function Wg(o){const e=new yA(o),t=[],i=[];function s(m){h.camera=m,t.length=0,i.length=0}function a(m){t.push(m)}function c(m){i.push(m)}function u(){e.setup(t)}function f(m){e.setupView(t,m)}const h={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:h,setupLights:u,setupLightsView:f,pushLight:a,pushShadow:c}}function SA(o){let e=new WeakMap;function t(s,a=0){const c=e.get(s);let u;return c===void 0?(u=new Wg(o),e.set(s,[u])):a>=c.length?(u=new Wg(o),c.push(u)):u=c[a],u}function i(){e=new WeakMap}return{get:t,dispose:i}}const MA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,EA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function TA(o,e,t){let i=new Xf;const s=new Mt,a=new Mt,c=new Ct,u=new yy({depthPacking:ux}),f=new Sy,h={},m=t.maxTextureSize,g={[er]:zn,[zn]:er,[Ai]:Ai},_=new Fr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Mt},radius:{value:4}},vertexShader:MA,fragmentShader:EA}),y=_.clone();y.defines.HORIZONTAL_PASS=1;const M=new bi;M.setAttribute("position",new In(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new qn(M,_),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$g;let x=this.type;this.render=function(O,U,j){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||O.length===0)return;const b=o.getRenderTarget(),R=o.getActiveCubeFace(),z=o.getActiveMipmapLevel(),oe=o.state;oe.setBlending(Nr),oe.buffers.color.setClear(1,1,1,1),oe.buffers.depth.setTest(!0),oe.setScissorTest(!1);const ee=x!==qi&&this.type===qi,de=x===qi&&this.type!==qi;for(let he=0,se=O.length;he<se;he++){const le=O[he],k=le.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",le,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);const ae=k.getFrameExtents();if(s.multiply(ae),a.copy(k.mapSize),(s.x>m||s.y>m)&&(s.x>m&&(a.x=Math.floor(m/ae.x),s.x=a.x*ae.x,k.mapSize.x=a.x),s.y>m&&(a.y=Math.floor(m/ae.y),s.y=a.y*ae.y,k.mapSize.y=a.y)),k.map===null||ee===!0||de===!0){const N=this.type!==qi?{minFilter:Pn,magFilter:Pn}:{};k.map!==null&&k.map.dispose(),k.map=new hs(s.x,s.y,N),k.map.texture.name=le.name+".shadowMap",k.camera.updateProjectionMatrix()}o.setRenderTarget(k.map),o.clear();const re=k.getViewportCount();for(let N=0;N<re;N++){const ne=k.getViewport(N);c.set(a.x*ne.x,a.y*ne.y,a.x*ne.z,a.y*ne.w),oe.viewport(c),k.updateMatrices(le,N),i=k.getFrustum(),C(U,j,k.camera,le,this.type)}k.isPointLightShadow!==!0&&this.type===qi&&D(k,j),k.needsUpdate=!1}x=this.type,S.needsUpdate=!1,o.setRenderTarget(b,R,z)};function D(O,U){const j=e.update(T);_.defines.VSM_SAMPLES!==O.blurSamples&&(_.defines.VSM_SAMPLES=O.blurSamples,y.defines.VSM_SAMPLES=O.blurSamples,_.needsUpdate=!0,y.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new hs(s.x,s.y)),_.uniforms.shadow_pass.value=O.map.texture,_.uniforms.resolution.value=O.mapSize,_.uniforms.radius.value=O.radius,o.setRenderTarget(O.mapPass),o.clear(),o.renderBufferDirect(U,null,j,_,T,null),y.uniforms.shadow_pass.value=O.mapPass.texture,y.uniforms.resolution.value=O.mapSize,y.uniforms.radius.value=O.radius,o.setRenderTarget(O.map),o.clear(),o.renderBufferDirect(U,null,j,y,T,null)}function I(O,U,j,b){let R=null;const z=j.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(z!==void 0)R=z;else if(R=j.isPointLight===!0?f:u,o.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0){const oe=R.uuid,ee=U.uuid;let de=h[oe];de===void 0&&(de={},h[oe]=de);let he=de[ee];he===void 0&&(he=R.clone(),de[ee]=he,U.addEventListener("dispose",G)),R=he}if(R.visible=U.visible,R.wireframe=U.wireframe,b===qi?R.side=U.shadowSide!==null?U.shadowSide:U.side:R.side=U.shadowSide!==null?U.shadowSide:g[U.side],R.alphaMap=U.alphaMap,R.alphaTest=U.alphaTest,R.map=U.map,R.clipShadows=U.clipShadows,R.clippingPlanes=U.clippingPlanes,R.clipIntersection=U.clipIntersection,R.displacementMap=U.displacementMap,R.displacementScale=U.displacementScale,R.displacementBias=U.displacementBias,R.wireframeLinewidth=U.wireframeLinewidth,R.linewidth=U.linewidth,j.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const oe=o.properties.get(R);oe.light=j}return R}function C(O,U,j,b,R){if(O.visible===!1)return;if(O.layers.test(U.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&R===qi)&&(!O.frustumCulled||i.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,O.matrixWorld);const ee=e.update(O),de=O.material;if(Array.isArray(de)){const he=ee.groups;for(let se=0,le=he.length;se<le;se++){const k=he[se],ae=de[k.materialIndex];if(ae&&ae.visible){const re=I(O,ae,b,R);O.onBeforeShadow(o,O,U,j,ee,re,k),o.renderBufferDirect(j,null,ee,re,O,k),O.onAfterShadow(o,O,U,j,ee,re,k)}}}else if(de.visible){const he=I(O,de,b,R);O.onBeforeShadow(o,O,U,j,ee,he,null),o.renderBufferDirect(j,null,ee,he,O,null),O.onAfterShadow(o,O,U,j,ee,he,null)}}const oe=O.children;for(let ee=0,de=oe.length;ee<de;ee++)C(oe[ee],U,j,b,R)}function G(O){O.target.removeEventListener("dispose",G);for(const j in h){const b=h[j],R=O.target.uuid;R in b&&(b[R].dispose(),delete b[R])}}}const AA={[Vd]:Gd,[Wd]:Yd,[Xd]:qd,[lo]:jd,[Gd]:Vd,[Yd]:Wd,[qd]:Xd,[jd]:lo};function wA(o,e){function t(){let W=!1;const we=new Ct;let ie=null;const fe=new Ct(0,0,0,0);return{setMask:function(Ie){ie!==Ie&&!W&&(o.colorMask(Ie,Ie,Ie,Ie),ie=Ie)},setLocked:function(Ie){W=Ie},setClear:function(Ie,Pe,rt,Bt,Qt){Qt===!0&&(Ie*=Bt,Pe*=Bt,rt*=Bt),we.set(Ie,Pe,rt,Bt),fe.equals(we)===!1&&(o.clearColor(Ie,Pe,rt,Bt),fe.copy(we))},reset:function(){W=!1,ie=null,fe.set(-1,0,0,0)}}}function i(){let W=!1,we=!1,ie=null,fe=null,Ie=null;return{setReversed:function(Pe){if(we!==Pe){const rt=e.get("EXT_clip_control");we?rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.ZERO_TO_ONE_EXT):rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.NEGATIVE_ONE_TO_ONE_EXT);const Bt=Ie;Ie=null,this.setClear(Bt)}we=Pe},getReversed:function(){return we},setTest:function(Pe){Pe?ve(o.DEPTH_TEST):Te(o.DEPTH_TEST)},setMask:function(Pe){ie!==Pe&&!W&&(o.depthMask(Pe),ie=Pe)},setFunc:function(Pe){if(we&&(Pe=AA[Pe]),fe!==Pe){switch(Pe){case Vd:o.depthFunc(o.NEVER);break;case Gd:o.depthFunc(o.ALWAYS);break;case Wd:o.depthFunc(o.LESS);break;case lo:o.depthFunc(o.LEQUAL);break;case Xd:o.depthFunc(o.EQUAL);break;case jd:o.depthFunc(o.GEQUAL);break;case Yd:o.depthFunc(o.GREATER);break;case qd:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}fe=Pe}},setLocked:function(Pe){W=Pe},setClear:function(Pe){Ie!==Pe&&(we&&(Pe=1-Pe),o.clearDepth(Pe),Ie=Pe)},reset:function(){W=!1,ie=null,fe=null,Ie=null,we=!1}}}function s(){let W=!1,we=null,ie=null,fe=null,Ie=null,Pe=null,rt=null,Bt=null,Qt=null;return{setTest:function(Et){W||(Et?ve(o.STENCIL_TEST):Te(o.STENCIL_TEST))},setMask:function(Et){we!==Et&&!W&&(o.stencilMask(Et),we=Et)},setFunc:function(Et,Dn,Mn){(ie!==Et||fe!==Dn||Ie!==Mn)&&(o.stencilFunc(Et,Dn,Mn),ie=Et,fe=Dn,Ie=Mn)},setOp:function(Et,Dn,Mn){(Pe!==Et||rt!==Dn||Bt!==Mn)&&(o.stencilOp(Et,Dn,Mn),Pe=Et,rt=Dn,Bt=Mn)},setLocked:function(Et){W=Et},setClear:function(Et){Qt!==Et&&(o.clearStencil(Et),Qt=Et)},reset:function(){W=!1,we=null,ie=null,fe=null,Ie=null,Pe=null,rt=null,Bt=null,Qt=null}}}const a=new t,c=new i,u=new s,f=new WeakMap,h=new WeakMap;let m={},g={},_=new WeakMap,y=[],M=null,T=!1,S=null,x=null,D=null,I=null,C=null,G=null,O=null,U=new ot(0,0,0),j=0,b=!1,R=null,z=null,oe=null,ee=null,de=null;const he=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let se=!1,le=0;const k=o.getParameter(o.VERSION);k.indexOf("WebGL")!==-1?(le=parseFloat(/^WebGL (\d)/.exec(k)[1]),se=le>=1):k.indexOf("OpenGL ES")!==-1&&(le=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),se=le>=2);let ae=null,re={};const N=o.getParameter(o.SCISSOR_BOX),ne=o.getParameter(o.VIEWPORT),Ne=new Ct().fromArray(N),Z=new Ct().fromArray(ne);function ce(W,we,ie,fe){const Ie=new Uint8Array(4),Pe=o.createTexture();o.bindTexture(W,Pe),o.texParameteri(W,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(W,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let rt=0;rt<ie;rt++)W===o.TEXTURE_3D||W===o.TEXTURE_2D_ARRAY?o.texImage3D(we,0,o.RGBA,1,1,fe,0,o.RGBA,o.UNSIGNED_BYTE,Ie):o.texImage2D(we+rt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Ie);return Pe}const Me={};Me[o.TEXTURE_2D]=ce(o.TEXTURE_2D,o.TEXTURE_2D,1),Me[o.TEXTURE_CUBE_MAP]=ce(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[o.TEXTURE_2D_ARRAY]=ce(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Me[o.TEXTURE_3D]=ce(o.TEXTURE_3D,o.TEXTURE_3D,1,1),a.setClear(0,0,0,1),c.setClear(1),u.setClear(0),ve(o.DEPTH_TEST),c.setFunc(lo),pt(!1),dt(Pm),ve(o.CULL_FACE),B(Nr);function ve(W){m[W]!==!0&&(o.enable(W),m[W]=!0)}function Te(W){m[W]!==!1&&(o.disable(W),m[W]=!1)}function Ue(W,we){return g[W]!==we?(o.bindFramebuffer(W,we),g[W]=we,W===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=we),W===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=we),!0):!1}function Qe(W,we){let ie=y,fe=!1;if(W){ie=_.get(we),ie===void 0&&(ie=[],_.set(we,ie));const Ie=W.textures;if(ie.length!==Ie.length||ie[0]!==o.COLOR_ATTACHMENT0){for(let Pe=0,rt=Ie.length;Pe<rt;Pe++)ie[Pe]=o.COLOR_ATTACHMENT0+Pe;ie.length=Ie.length,fe=!0}}else ie[0]!==o.BACK&&(ie[0]=o.BACK,fe=!0);fe&&o.drawBuffers(ie)}function Dt(W){return M!==W?(o.useProgram(W),M=W,!0):!1}const vt={[ls]:o.FUNC_ADD,[I0]:o.FUNC_SUBTRACT,[L0]:o.FUNC_REVERSE_SUBTRACT};vt[D0]=o.MIN,vt[N0]=o.MAX;const Ft={[U0]:o.ZERO,[F0]:o.ONE,[O0]:o.SRC_COLOR,[zd]:o.SRC_ALPHA,[G0]:o.SRC_ALPHA_SATURATE,[H0]:o.DST_COLOR,[k0]:o.DST_ALPHA,[B0]:o.ONE_MINUS_SRC_COLOR,[Hd]:o.ONE_MINUS_SRC_ALPHA,[V0]:o.ONE_MINUS_DST_COLOR,[z0]:o.ONE_MINUS_DST_ALPHA,[W0]:o.CONSTANT_COLOR,[X0]:o.ONE_MINUS_CONSTANT_COLOR,[j0]:o.CONSTANT_ALPHA,[Y0]:o.ONE_MINUS_CONSTANT_ALPHA};function B(W,we,ie,fe,Ie,Pe,rt,Bt,Qt,Et){if(W===Nr){T===!0&&(Te(o.BLEND),T=!1);return}if(T===!1&&(ve(o.BLEND),T=!0),W!==P0){if(W!==S||Et!==b){if((x!==ls||C!==ls)&&(o.blendEquation(o.FUNC_ADD),x=ls,C=ls),Et)switch(W){case ro:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Im:o.blendFunc(o.ONE,o.ONE);break;case Lm:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Dm:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case ro:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Im:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case Lm:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Dm:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}D=null,I=null,G=null,O=null,U.set(0,0,0),j=0,S=W,b=Et}return}Ie=Ie||we,Pe=Pe||ie,rt=rt||fe,(we!==x||Ie!==C)&&(o.blendEquationSeparate(vt[we],vt[Ie]),x=we,C=Ie),(ie!==D||fe!==I||Pe!==G||rt!==O)&&(o.blendFuncSeparate(Ft[ie],Ft[fe],Ft[Pe],Ft[rt]),D=ie,I=fe,G=Pe,O=rt),(Bt.equals(U)===!1||Qt!==j)&&(o.blendColor(Bt.r,Bt.g,Bt.b,Qt),U.copy(Bt),j=Qt),S=W,b=!1}function Sn(W,we){W.side===Ai?Te(o.CULL_FACE):ve(o.CULL_FACE);let ie=W.side===zn;we&&(ie=!ie),pt(ie),W.blending===ro&&W.transparent===!1?B(Nr):B(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),c.setFunc(W.depthFunc),c.setTest(W.depthTest),c.setMask(W.depthWrite),a.setMask(W.colorWrite);const fe=W.stencilWrite;u.setTest(fe),fe&&(u.setMask(W.stencilWriteMask),u.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),u.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),It(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?ve(o.SAMPLE_ALPHA_TO_COVERAGE):Te(o.SAMPLE_ALPHA_TO_COVERAGE)}function pt(W){R!==W&&(W?o.frontFace(o.CW):o.frontFace(o.CCW),R=W)}function dt(W){W!==R0?(ve(o.CULL_FACE),W!==z&&(W===Pm?o.cullFace(o.BACK):W===C0?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Te(o.CULL_FACE),z=W}function Ye(W){W!==oe&&(se&&o.lineWidth(W),oe=W)}function It(W,we,ie){W?(ve(o.POLYGON_OFFSET_FILL),(ee!==we||de!==ie)&&(o.polygonOffset(we,ie),ee=we,de=ie)):Te(o.POLYGON_OFFSET_FILL)}function Xe(W){W?ve(o.SCISSOR_TEST):Te(o.SCISSOR_TEST)}function P(W){W===void 0&&(W=o.TEXTURE0+he-1),ae!==W&&(o.activeTexture(W),ae=W)}function A(W,we,ie){ie===void 0&&(ae===null?ie=o.TEXTURE0+he-1:ie=ae);let fe=re[ie];fe===void 0&&(fe={type:void 0,texture:void 0},re[ie]=fe),(fe.type!==W||fe.texture!==we)&&(ae!==ie&&(o.activeTexture(ie),ae=ie),o.bindTexture(W,we||Me[W]),fe.type=W,fe.texture=we)}function $(){const W=re[ae];W!==void 0&&W.type!==void 0&&(o.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function pe(){try{o.compressedTexImage2D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ge(){try{o.compressedTexImage3D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ue(){try{o.texSubImage2D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ge(){try{o.texSubImage3D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ae(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Fe(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ut(){try{o.texStorage2D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Se(){try{o.texStorage3D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ke(){try{o.texImage2D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ke(){try{o.texImage3D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Je(W){Ne.equals(W)===!1&&(o.scissor(W.x,W.y,W.z,W.w),Ne.copy(W))}function ze(W){Z.equals(W)===!1&&(o.viewport(W.x,W.y,W.z,W.w),Z.copy(W))}function ft(W,we){let ie=h.get(we);ie===void 0&&(ie=new WeakMap,h.set(we,ie));let fe=ie.get(W);fe===void 0&&(fe=o.getUniformBlockIndex(we,W.name),ie.set(W,fe))}function it(W,we){const fe=h.get(we).get(W);f.get(we)!==fe&&(o.uniformBlockBinding(we,fe,W.__bindingPointIndex),f.set(we,fe))}function bt(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),c.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),m={},ae=null,re={},g={},_=new WeakMap,y=[],M=null,T=!1,S=null,x=null,D=null,I=null,C=null,G=null,O=null,U=new ot(0,0,0),j=0,b=!1,R=null,z=null,oe=null,ee=null,de=null,Ne.set(0,0,o.canvas.width,o.canvas.height),Z.set(0,0,o.canvas.width,o.canvas.height),a.reset(),c.reset(),u.reset()}return{buffers:{color:a,depth:c,stencil:u},enable:ve,disable:Te,bindFramebuffer:Ue,drawBuffers:Qe,useProgram:Dt,setBlending:B,setMaterial:Sn,setFlipSided:pt,setCullFace:dt,setLineWidth:Ye,setPolygonOffset:It,setScissorTest:Xe,activeTexture:P,bindTexture:A,unbindTexture:$,compressedTexImage2D:pe,compressedTexImage3D:ge,texImage2D:ke,texImage3D:Ke,updateUBOMapping:ft,uniformBlockBinding:it,texStorage2D:ut,texStorage3D:Se,texSubImage2D:ue,texSubImage3D:Ge,compressedTexSubImage2D:Ae,compressedTexSubImage3D:Fe,scissor:Je,viewport:ze,reset:bt}}function RA(o,e,t,i,s,a,c){const u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Mt,m=new WeakMap;let g;const _=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(P,A){return y?new OffscreenCanvas(P,A):xa("canvas")}function T(P,A,$){let pe=1;const ge=Xe(P);if((ge.width>$||ge.height>$)&&(pe=$/Math.max(ge.width,ge.height)),pe<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const ue=Math.floor(pe*ge.width),Ge=Math.floor(pe*ge.height);g===void 0&&(g=M(ue,Ge));const Ae=A?M(ue,Ge):g;return Ae.width=ue,Ae.height=Ge,Ae.getContext("2d").drawImage(P,0,0,ue,Ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+ue+"x"+Ge+")."),Ae}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),P;return P}function S(P){return P.generateMipmaps}function x(P){o.generateMipmap(P)}function D(P){return P.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?o.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function I(P,A,$,pe,ge=!1){if(P!==null){if(o[P]!==void 0)return o[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ue=A;if(A===o.RED&&($===o.FLOAT&&(ue=o.R32F),$===o.HALF_FLOAT&&(ue=o.R16F),$===o.UNSIGNED_BYTE&&(ue=o.R8)),A===o.RED_INTEGER&&($===o.UNSIGNED_BYTE&&(ue=o.R8UI),$===o.UNSIGNED_SHORT&&(ue=o.R16UI),$===o.UNSIGNED_INT&&(ue=o.R32UI),$===o.BYTE&&(ue=o.R8I),$===o.SHORT&&(ue=o.R16I),$===o.INT&&(ue=o.R32I)),A===o.RG&&($===o.FLOAT&&(ue=o.RG32F),$===o.HALF_FLOAT&&(ue=o.RG16F),$===o.UNSIGNED_BYTE&&(ue=o.RG8)),A===o.RG_INTEGER&&($===o.UNSIGNED_BYTE&&(ue=o.RG8UI),$===o.UNSIGNED_SHORT&&(ue=o.RG16UI),$===o.UNSIGNED_INT&&(ue=o.RG32UI),$===o.BYTE&&(ue=o.RG8I),$===o.SHORT&&(ue=o.RG16I),$===o.INT&&(ue=o.RG32I)),A===o.RGB_INTEGER&&($===o.UNSIGNED_BYTE&&(ue=o.RGB8UI),$===o.UNSIGNED_SHORT&&(ue=o.RGB16UI),$===o.UNSIGNED_INT&&(ue=o.RGB32UI),$===o.BYTE&&(ue=o.RGB8I),$===o.SHORT&&(ue=o.RGB16I),$===o.INT&&(ue=o.RGB32I)),A===o.RGBA_INTEGER&&($===o.UNSIGNED_BYTE&&(ue=o.RGBA8UI),$===o.UNSIGNED_SHORT&&(ue=o.RGBA16UI),$===o.UNSIGNED_INT&&(ue=o.RGBA32UI),$===o.BYTE&&(ue=o.RGBA8I),$===o.SHORT&&(ue=o.RGBA16I),$===o.INT&&(ue=o.RGBA32I)),A===o.RGB&&$===o.UNSIGNED_INT_5_9_9_9_REV&&(ue=o.RGB9_E5),A===o.RGBA){const Ge=ge?hc:St.getTransfer(pe);$===o.FLOAT&&(ue=o.RGBA32F),$===o.HALF_FLOAT&&(ue=o.RGBA16F),$===o.UNSIGNED_BYTE&&(ue=Ge===Ut?o.SRGB8_ALPHA8:o.RGBA8),$===o.UNSIGNED_SHORT_4_4_4_4&&(ue=o.RGBA4),$===o.UNSIGNED_SHORT_5_5_5_1&&(ue=o.RGB5_A1)}return(ue===o.R16F||ue===o.R32F||ue===o.RG16F||ue===o.RG32F||ue===o.RGBA16F||ue===o.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function C(P,A){let $;return P?A===null||A===fs||A===ho?$=o.DEPTH24_STENCIL8:A===gi?$=o.DEPTH32F_STENCIL8:A===ga&&($=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===fs||A===ho?$=o.DEPTH_COMPONENT24:A===gi?$=o.DEPTH_COMPONENT32F:A===ga&&($=o.DEPTH_COMPONENT16),$}function G(P,A){return S(P)===!0||P.isFramebufferTexture&&P.minFilter!==Pn&&P.minFilter!==Yn?Math.log2(Math.max(A.width,A.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?A.mipmaps.length:1}function O(P){const A=P.target;A.removeEventListener("dispose",O),j(A),A.isVideoTexture&&m.delete(A)}function U(P){const A=P.target;A.removeEventListener("dispose",U),R(A)}function j(P){const A=i.get(P);if(A.__webglInit===void 0)return;const $=P.source,pe=_.get($);if(pe){const ge=pe[A.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&b(P),Object.keys(pe).length===0&&_.delete($)}i.remove(P)}function b(P){const A=i.get(P);o.deleteTexture(A.__webglTexture);const $=P.source,pe=_.get($);delete pe[A.__cacheKey],c.memory.textures--}function R(P){const A=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(A.__webglFramebuffer[pe]))for(let ge=0;ge<A.__webglFramebuffer[pe].length;ge++)o.deleteFramebuffer(A.__webglFramebuffer[pe][ge]);else o.deleteFramebuffer(A.__webglFramebuffer[pe]);A.__webglDepthbuffer&&o.deleteRenderbuffer(A.__webglDepthbuffer[pe])}else{if(Array.isArray(A.__webglFramebuffer))for(let pe=0;pe<A.__webglFramebuffer.length;pe++)o.deleteFramebuffer(A.__webglFramebuffer[pe]);else o.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&o.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&o.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let pe=0;pe<A.__webglColorRenderbuffer.length;pe++)A.__webglColorRenderbuffer[pe]&&o.deleteRenderbuffer(A.__webglColorRenderbuffer[pe]);A.__webglDepthRenderbuffer&&o.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const $=P.textures;for(let pe=0,ge=$.length;pe<ge;pe++){const ue=i.get($[pe]);ue.__webglTexture&&(o.deleteTexture(ue.__webglTexture),c.memory.textures--),i.remove($[pe])}i.remove(P)}let z=0;function oe(){z=0}function ee(){const P=z;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),z+=1,P}function de(P){const A=[];return A.push(P.wrapS),A.push(P.wrapT),A.push(P.wrapR||0),A.push(P.magFilter),A.push(P.minFilter),A.push(P.anisotropy),A.push(P.internalFormat),A.push(P.format),A.push(P.type),A.push(P.generateMipmaps),A.push(P.premultiplyAlpha),A.push(P.flipY),A.push(P.unpackAlignment),A.push(P.colorSpace),A.join()}function he(P,A){const $=i.get(P);if(P.isVideoTexture&&Ye(P),P.isRenderTargetTexture===!1&&P.version>0&&$.__version!==P.version){const pe=P.image;if(pe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z($,P,A);return}}t.bindTexture(o.TEXTURE_2D,$.__webglTexture,o.TEXTURE0+A)}function se(P,A){const $=i.get(P);if(P.version>0&&$.__version!==P.version){Z($,P,A);return}t.bindTexture(o.TEXTURE_2D_ARRAY,$.__webglTexture,o.TEXTURE0+A)}function le(P,A){const $=i.get(P);if(P.version>0&&$.__version!==P.version){Z($,P,A);return}t.bindTexture(o.TEXTURE_3D,$.__webglTexture,o.TEXTURE0+A)}function k(P,A){const $=i.get(P);if(P.version>0&&$.__version!==P.version){ce($,P,A);return}t.bindTexture(o.TEXTURE_CUBE_MAP,$.__webglTexture,o.TEXTURE0+A)}const ae={[fo]:o.REPEAT,[Lr]:o.CLAMP_TO_EDGE,[dc]:o.MIRRORED_REPEAT},re={[Pn]:o.NEAREST,[Jg]:o.NEAREST_MIPMAP_NEAREST,[da]:o.NEAREST_MIPMAP_LINEAR,[Yn]:o.LINEAR,[ic]:o.LINEAR_MIPMAP_NEAREST,[$i]:o.LINEAR_MIPMAP_LINEAR},N={[fx]:o.NEVER,[vx]:o.ALWAYS,[hx]:o.LESS,[d_]:o.LEQUAL,[px]:o.EQUAL,[_x]:o.GEQUAL,[mx]:o.GREATER,[gx]:o.NOTEQUAL};function ne(P,A){if(A.type===gi&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===Yn||A.magFilter===ic||A.magFilter===da||A.magFilter===$i||A.minFilter===Yn||A.minFilter===ic||A.minFilter===da||A.minFilter===$i)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(P,o.TEXTURE_WRAP_S,ae[A.wrapS]),o.texParameteri(P,o.TEXTURE_WRAP_T,ae[A.wrapT]),(P===o.TEXTURE_3D||P===o.TEXTURE_2D_ARRAY)&&o.texParameteri(P,o.TEXTURE_WRAP_R,ae[A.wrapR]),o.texParameteri(P,o.TEXTURE_MAG_FILTER,re[A.magFilter]),o.texParameteri(P,o.TEXTURE_MIN_FILTER,re[A.minFilter]),A.compareFunction&&(o.texParameteri(P,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(P,o.TEXTURE_COMPARE_FUNC,N[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Pn||A.minFilter!==da&&A.minFilter!==$i||A.type===gi&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||i.get(A).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");o.texParameterf(P,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy}}}function Ne(P,A){let $=!1;P.__webglInit===void 0&&(P.__webglInit=!0,A.addEventListener("dispose",O));const pe=A.source;let ge=_.get(pe);ge===void 0&&(ge={},_.set(pe,ge));const ue=de(A);if(ue!==P.__cacheKey){ge[ue]===void 0&&(ge[ue]={texture:o.createTexture(),usedTimes:0},c.memory.textures++,$=!0),ge[ue].usedTimes++;const Ge=ge[P.__cacheKey];Ge!==void 0&&(ge[P.__cacheKey].usedTimes--,Ge.usedTimes===0&&b(A)),P.__cacheKey=ue,P.__webglTexture=ge[ue].texture}return $}function Z(P,A,$){let pe=o.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(pe=o.TEXTURE_2D_ARRAY),A.isData3DTexture&&(pe=o.TEXTURE_3D);const ge=Ne(P,A),ue=A.source;t.bindTexture(pe,P.__webglTexture,o.TEXTURE0+$);const Ge=i.get(ue);if(ue.version!==Ge.__version||ge===!0){t.activeTexture(o.TEXTURE0+$);const Ae=St.getPrimaries(St.workingColorSpace),Fe=A.colorSpace===Ir?null:St.getPrimaries(A.colorSpace),ut=A.colorSpace===Ir||Ae===Fe?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,A.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,A.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);let Se=T(A.image,!1,s.maxTextureSize);Se=It(A,Se);const ke=a.convert(A.format,A.colorSpace),Ke=a.convert(A.type);let Je=I(A.internalFormat,ke,Ke,A.colorSpace,A.isVideoTexture);ne(pe,A);let ze;const ft=A.mipmaps,it=A.isVideoTexture!==!0,bt=Ge.__version===void 0||ge===!0,W=ue.dataReady,we=G(A,Se);if(A.isDepthTexture)Je=C(A.format===po,A.type),bt&&(it?t.texStorage2D(o.TEXTURE_2D,1,Je,Se.width,Se.height):t.texImage2D(o.TEXTURE_2D,0,Je,Se.width,Se.height,0,ke,Ke,null));else if(A.isDataTexture)if(ft.length>0){it&&bt&&t.texStorage2D(o.TEXTURE_2D,we,Je,ft[0].width,ft[0].height);for(let ie=0,fe=ft.length;ie<fe;ie++)ze=ft[ie],it?W&&t.texSubImage2D(o.TEXTURE_2D,ie,0,0,ze.width,ze.height,ke,Ke,ze.data):t.texImage2D(o.TEXTURE_2D,ie,Je,ze.width,ze.height,0,ke,Ke,ze.data);A.generateMipmaps=!1}else it?(bt&&t.texStorage2D(o.TEXTURE_2D,we,Je,Se.width,Se.height),W&&t.texSubImage2D(o.TEXTURE_2D,0,0,0,Se.width,Se.height,ke,Ke,Se.data)):t.texImage2D(o.TEXTURE_2D,0,Je,Se.width,Se.height,0,ke,Ke,Se.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){it&&bt&&t.texStorage3D(o.TEXTURE_2D_ARRAY,we,Je,ft[0].width,ft[0].height,Se.depth);for(let ie=0,fe=ft.length;ie<fe;ie++)if(ze=ft[ie],A.format!==ii)if(ke!==null)if(it){if(W)if(A.layerUpdates.size>0){const Ie=yg(ze.width,ze.height,A.format,A.type);for(const Pe of A.layerUpdates){const rt=ze.data.subarray(Pe*Ie/ze.data.BYTES_PER_ELEMENT,(Pe+1)*Ie/ze.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ie,0,0,Pe,ze.width,ze.height,1,ke,rt)}A.clearLayerUpdates()}else t.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ie,0,0,0,ze.width,ze.height,Se.depth,ke,ze.data)}else t.compressedTexImage3D(o.TEXTURE_2D_ARRAY,ie,Je,ze.width,ze.height,Se.depth,0,ze.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else it?W&&t.texSubImage3D(o.TEXTURE_2D_ARRAY,ie,0,0,0,ze.width,ze.height,Se.depth,ke,Ke,ze.data):t.texImage3D(o.TEXTURE_2D_ARRAY,ie,Je,ze.width,ze.height,Se.depth,0,ke,Ke,ze.data)}else{it&&bt&&t.texStorage2D(o.TEXTURE_2D,we,Je,ft[0].width,ft[0].height);for(let ie=0,fe=ft.length;ie<fe;ie++)ze=ft[ie],A.format!==ii?ke!==null?it?W&&t.compressedTexSubImage2D(o.TEXTURE_2D,ie,0,0,ze.width,ze.height,ke,ze.data):t.compressedTexImage2D(o.TEXTURE_2D,ie,Je,ze.width,ze.height,0,ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?W&&t.texSubImage2D(o.TEXTURE_2D,ie,0,0,ze.width,ze.height,ke,Ke,ze.data):t.texImage2D(o.TEXTURE_2D,ie,Je,ze.width,ze.height,0,ke,Ke,ze.data)}else if(A.isDataArrayTexture)if(it){if(bt&&t.texStorage3D(o.TEXTURE_2D_ARRAY,we,Je,Se.width,Se.height,Se.depth),W)if(A.layerUpdates.size>0){const ie=yg(Se.width,Se.height,A.format,A.type);for(const fe of A.layerUpdates){const Ie=Se.data.subarray(fe*ie/Se.data.BYTES_PER_ELEMENT,(fe+1)*ie/Se.data.BYTES_PER_ELEMENT);t.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,fe,Se.width,Se.height,1,ke,Ke,Ie)}A.clearLayerUpdates()}else t.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Se.width,Se.height,Se.depth,ke,Ke,Se.data)}else t.texImage3D(o.TEXTURE_2D_ARRAY,0,Je,Se.width,Se.height,Se.depth,0,ke,Ke,Se.data);else if(A.isData3DTexture)it?(bt&&t.texStorage3D(o.TEXTURE_3D,we,Je,Se.width,Se.height,Se.depth),W&&t.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Se.width,Se.height,Se.depth,ke,Ke,Se.data)):t.texImage3D(o.TEXTURE_3D,0,Je,Se.width,Se.height,Se.depth,0,ke,Ke,Se.data);else if(A.isFramebufferTexture){if(bt)if(it)t.texStorage2D(o.TEXTURE_2D,we,Je,Se.width,Se.height);else{let ie=Se.width,fe=Se.height;for(let Ie=0;Ie<we;Ie++)t.texImage2D(o.TEXTURE_2D,Ie,Je,ie,fe,0,ke,Ke,null),ie>>=1,fe>>=1}}else if(ft.length>0){if(it&&bt){const ie=Xe(ft[0]);t.texStorage2D(o.TEXTURE_2D,we,Je,ie.width,ie.height)}for(let ie=0,fe=ft.length;ie<fe;ie++)ze=ft[ie],it?W&&t.texSubImage2D(o.TEXTURE_2D,ie,0,0,ke,Ke,ze):t.texImage2D(o.TEXTURE_2D,ie,Je,ke,Ke,ze);A.generateMipmaps=!1}else if(it){if(bt){const ie=Xe(Se);t.texStorage2D(o.TEXTURE_2D,we,Je,ie.width,ie.height)}W&&t.texSubImage2D(o.TEXTURE_2D,0,0,0,ke,Ke,Se)}else t.texImage2D(o.TEXTURE_2D,0,Je,ke,Ke,Se);S(A)&&x(pe),Ge.__version=ue.version,A.onUpdate&&A.onUpdate(A)}P.__version=A.version}function ce(P,A,$){if(A.image.length!==6)return;const pe=Ne(P,A),ge=A.source;t.bindTexture(o.TEXTURE_CUBE_MAP,P.__webglTexture,o.TEXTURE0+$);const ue=i.get(ge);if(ge.version!==ue.__version||pe===!0){t.activeTexture(o.TEXTURE0+$);const Ge=St.getPrimaries(St.workingColorSpace),Ae=A.colorSpace===Ir?null:St.getPrimaries(A.colorSpace),Fe=A.colorSpace===Ir||Ge===Ae?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,A.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,A.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);const ut=A.isCompressedTexture||A.image[0].isCompressedTexture,Se=A.image[0]&&A.image[0].isDataTexture,ke=[];for(let fe=0;fe<6;fe++)!ut&&!Se?ke[fe]=T(A.image[fe],!0,s.maxCubemapSize):ke[fe]=Se?A.image[fe].image:A.image[fe],ke[fe]=It(A,ke[fe]);const Ke=ke[0],Je=a.convert(A.format,A.colorSpace),ze=a.convert(A.type),ft=I(A.internalFormat,Je,ze,A.colorSpace),it=A.isVideoTexture!==!0,bt=ue.__version===void 0||pe===!0,W=ge.dataReady;let we=G(A,Ke);ne(o.TEXTURE_CUBE_MAP,A);let ie;if(ut){it&&bt&&t.texStorage2D(o.TEXTURE_CUBE_MAP,we,ft,Ke.width,Ke.height);for(let fe=0;fe<6;fe++){ie=ke[fe].mipmaps;for(let Ie=0;Ie<ie.length;Ie++){const Pe=ie[Ie];A.format!==ii?Je!==null?it?W&&t.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ie,0,0,Pe.width,Pe.height,Je,Pe.data):t.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ie,ft,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):it?W&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ie,0,0,Pe.width,Pe.height,Je,ze,Pe.data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ie,ft,Pe.width,Pe.height,0,Je,ze,Pe.data)}}}else{if(ie=A.mipmaps,it&&bt){ie.length>0&&we++;const fe=Xe(ke[0]);t.texStorage2D(o.TEXTURE_CUBE_MAP,we,ft,fe.width,fe.height)}for(let fe=0;fe<6;fe++)if(Se){it?W&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,ke[fe].width,ke[fe].height,Je,ze,ke[fe].data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,ft,ke[fe].width,ke[fe].height,0,Je,ze,ke[fe].data);for(let Ie=0;Ie<ie.length;Ie++){const rt=ie[Ie].image[fe].image;it?W&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ie+1,0,0,rt.width,rt.height,Je,ze,rt.data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ie+1,ft,rt.width,rt.height,0,Je,ze,rt.data)}}else{it?W&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Je,ze,ke[fe]):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,ft,Je,ze,ke[fe]);for(let Ie=0;Ie<ie.length;Ie++){const Pe=ie[Ie];it?W&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ie+1,0,0,Je,ze,Pe.image[fe]):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ie+1,ft,Je,ze,Pe.image[fe])}}}S(A)&&x(o.TEXTURE_CUBE_MAP),ue.__version=ge.version,A.onUpdate&&A.onUpdate(A)}P.__version=A.version}function Me(P,A,$,pe,ge,ue){const Ge=a.convert($.format,$.colorSpace),Ae=a.convert($.type),Fe=I($.internalFormat,Ge,Ae,$.colorSpace),ut=i.get(A),Se=i.get($);if(Se.__renderTarget=A,!ut.__hasExternalTextures){const ke=Math.max(1,A.width>>ue),Ke=Math.max(1,A.height>>ue);ge===o.TEXTURE_3D||ge===o.TEXTURE_2D_ARRAY?t.texImage3D(ge,ue,Fe,ke,Ke,A.depth,0,Ge,Ae,null):t.texImage2D(ge,ue,Fe,ke,Ke,0,Ge,Ae,null)}t.bindFramebuffer(o.FRAMEBUFFER,P),dt(A)?u.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,pe,ge,Se.__webglTexture,0,pt(A)):(ge===o.TEXTURE_2D||ge>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,pe,ge,Se.__webglTexture,ue),t.bindFramebuffer(o.FRAMEBUFFER,null)}function ve(P,A,$){if(o.bindRenderbuffer(o.RENDERBUFFER,P),A.depthBuffer){const pe=A.depthTexture,ge=pe&&pe.isDepthTexture?pe.type:null,ue=C(A.stencilBuffer,ge),Ge=A.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ae=pt(A);dt(A)?u.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ae,ue,A.width,A.height):$?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ae,ue,A.width,A.height):o.renderbufferStorage(o.RENDERBUFFER,ue,A.width,A.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ge,o.RENDERBUFFER,P)}else{const pe=A.textures;for(let ge=0;ge<pe.length;ge++){const ue=pe[ge],Ge=a.convert(ue.format,ue.colorSpace),Ae=a.convert(ue.type),Fe=I(ue.internalFormat,Ge,Ae,ue.colorSpace),ut=pt(A);$&&dt(A)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,ut,Fe,A.width,A.height):dt(A)?u.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,ut,Fe,A.width,A.height):o.renderbufferStorage(o.RENDERBUFFER,Fe,A.width,A.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Te(P,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(o.FRAMEBUFFER,P),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pe=i.get(A.depthTexture);pe.__renderTarget=A,(!pe.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),he(A.depthTexture,0);const ge=pe.__webglTexture,ue=pt(A);if(A.depthTexture.format===so)dt(A)?u.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,ge,0,ue):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,ge,0);else if(A.depthTexture.format===po)dt(A)?u.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,ge,0,ue):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,ge,0);else throw new Error("Unknown depthTexture format")}function Ue(P){const A=i.get(P),$=P.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==P.depthTexture){const pe=P.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),pe){const ge=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,pe.removeEventListener("dispose",ge)};pe.addEventListener("dispose",ge),A.__depthDisposeCallback=ge}A.__boundDepthTexture=pe}if(P.depthTexture&&!A.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");Te(A.__webglFramebuffer,P)}else if($){A.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(t.bindFramebuffer(o.FRAMEBUFFER,A.__webglFramebuffer[pe]),A.__webglDepthbuffer[pe]===void 0)A.__webglDepthbuffer[pe]=o.createRenderbuffer(),ve(A.__webglDepthbuffer[pe],P,!1);else{const ge=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ue=A.__webglDepthbuffer[pe];o.bindRenderbuffer(o.RENDERBUFFER,ue),o.framebufferRenderbuffer(o.FRAMEBUFFER,ge,o.RENDERBUFFER,ue)}}else if(t.bindFramebuffer(o.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=o.createRenderbuffer(),ve(A.__webglDepthbuffer,P,!1);else{const pe=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ge=A.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ge),o.framebufferRenderbuffer(o.FRAMEBUFFER,pe,o.RENDERBUFFER,ge)}t.bindFramebuffer(o.FRAMEBUFFER,null)}function Qe(P,A,$){const pe=i.get(P);A!==void 0&&Me(pe.__webglFramebuffer,P,P.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),$!==void 0&&Ue(P)}function Dt(P){const A=P.texture,$=i.get(P),pe=i.get(A);P.addEventListener("dispose",U);const ge=P.textures,ue=P.isWebGLCubeRenderTarget===!0,Ge=ge.length>1;if(Ge||(pe.__webglTexture===void 0&&(pe.__webglTexture=o.createTexture()),pe.__version=A.version,c.memory.textures++),ue){$.__webglFramebuffer=[];for(let Ae=0;Ae<6;Ae++)if(A.mipmaps&&A.mipmaps.length>0){$.__webglFramebuffer[Ae]=[];for(let Fe=0;Fe<A.mipmaps.length;Fe++)$.__webglFramebuffer[Ae][Fe]=o.createFramebuffer()}else $.__webglFramebuffer[Ae]=o.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){$.__webglFramebuffer=[];for(let Ae=0;Ae<A.mipmaps.length;Ae++)$.__webglFramebuffer[Ae]=o.createFramebuffer()}else $.__webglFramebuffer=o.createFramebuffer();if(Ge)for(let Ae=0,Fe=ge.length;Ae<Fe;Ae++){const ut=i.get(ge[Ae]);ut.__webglTexture===void 0&&(ut.__webglTexture=o.createTexture(),c.memory.textures++)}if(P.samples>0&&dt(P)===!1){$.__webglMultisampledFramebuffer=o.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(o.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let Ae=0;Ae<ge.length;Ae++){const Fe=ge[Ae];$.__webglColorRenderbuffer[Ae]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,$.__webglColorRenderbuffer[Ae]);const ut=a.convert(Fe.format,Fe.colorSpace),Se=a.convert(Fe.type),ke=I(Fe.internalFormat,ut,Se,Fe.colorSpace,P.isXRRenderTarget===!0),Ke=pt(P);o.renderbufferStorageMultisample(o.RENDERBUFFER,Ke,ke,P.width,P.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ae,o.RENDERBUFFER,$.__webglColorRenderbuffer[Ae])}o.bindRenderbuffer(o.RENDERBUFFER,null),P.depthBuffer&&($.__webglDepthRenderbuffer=o.createRenderbuffer(),ve($.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ue){t.bindTexture(o.TEXTURE_CUBE_MAP,pe.__webglTexture),ne(o.TEXTURE_CUBE_MAP,A);for(let Ae=0;Ae<6;Ae++)if(A.mipmaps&&A.mipmaps.length>0)for(let Fe=0;Fe<A.mipmaps.length;Fe++)Me($.__webglFramebuffer[Ae][Fe],P,A,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Fe);else Me($.__webglFramebuffer[Ae],P,A,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0);S(A)&&x(o.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ge){for(let Ae=0,Fe=ge.length;Ae<Fe;Ae++){const ut=ge[Ae],Se=i.get(ut);t.bindTexture(o.TEXTURE_2D,Se.__webglTexture),ne(o.TEXTURE_2D,ut),Me($.__webglFramebuffer,P,ut,o.COLOR_ATTACHMENT0+Ae,o.TEXTURE_2D,0),S(ut)&&x(o.TEXTURE_2D)}t.unbindTexture()}else{let Ae=o.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Ae=P.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),t.bindTexture(Ae,pe.__webglTexture),ne(Ae,A),A.mipmaps&&A.mipmaps.length>0)for(let Fe=0;Fe<A.mipmaps.length;Fe++)Me($.__webglFramebuffer[Fe],P,A,o.COLOR_ATTACHMENT0,Ae,Fe);else Me($.__webglFramebuffer,P,A,o.COLOR_ATTACHMENT0,Ae,0);S(A)&&x(Ae),t.unbindTexture()}P.depthBuffer&&Ue(P)}function vt(P){const A=P.textures;for(let $=0,pe=A.length;$<pe;$++){const ge=A[$];if(S(ge)){const ue=D(P),Ge=i.get(ge).__webglTexture;t.bindTexture(ue,Ge),x(ue),t.unbindTexture()}}}const Ft=[],B=[];function Sn(P){if(P.samples>0){if(dt(P)===!1){const A=P.textures,$=P.width,pe=P.height;let ge=o.COLOR_BUFFER_BIT;const ue=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ge=i.get(P),Ae=A.length>1;if(Ae)for(let Fe=0;Fe<A.length;Fe++)t.bindFramebuffer(o.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Fe,o.RENDERBUFFER,null),t.bindFramebuffer(o.FRAMEBUFFER,Ge.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Fe,o.TEXTURE_2D,null,0);t.bindFramebuffer(o.READ_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),t.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ge.__webglFramebuffer);for(let Fe=0;Fe<A.length;Fe++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ge|=o.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ge|=o.STENCIL_BUFFER_BIT)),Ae){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ge.__webglColorRenderbuffer[Fe]);const ut=i.get(A[Fe]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,ut,0)}o.blitFramebuffer(0,0,$,pe,0,0,$,pe,ge,o.NEAREST),f===!0&&(Ft.length=0,B.length=0,Ft.push(o.COLOR_ATTACHMENT0+Fe),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Ft.push(ue),B.push(ue),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,B)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Ft))}if(t.bindFramebuffer(o.READ_FRAMEBUFFER,null),t.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ae)for(let Fe=0;Fe<A.length;Fe++){t.bindFramebuffer(o.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Fe,o.RENDERBUFFER,Ge.__webglColorRenderbuffer[Fe]);const ut=i.get(A[Fe]).__webglTexture;t.bindFramebuffer(o.FRAMEBUFFER,Ge.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Fe,o.TEXTURE_2D,ut,0)}t.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&f){const A=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[A])}}}function pt(P){return Math.min(s.maxSamples,P.samples)}function dt(P){const A=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Ye(P){const A=c.render.frame;m.get(P)!==A&&(m.set(P,A),P.update())}function It(P,A){const $=P.colorSpace,pe=P.format,ge=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||$!==Ln&&$!==Ir&&(St.getTransfer($)===Ut?(pe!==ii||ge!==tr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),A}function Xe(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(h.width=P.naturalWidth||P.width,h.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(h.width=P.displayWidth,h.height=P.displayHeight):(h.width=P.width,h.height=P.height),h}this.allocateTextureUnit=ee,this.resetTextureUnits=oe,this.setTexture2D=he,this.setTexture2DArray=se,this.setTexture3D=le,this.setTextureCube=k,this.rebindTextures=Qe,this.setupRenderTarget=Dt,this.updateRenderTargetMipmap=vt,this.updateMultisampleRenderTarget=Sn,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=dt}function CA(o,e){function t(i,s=Ir){let a;const c=St.getTransfer(s);if(i===tr)return o.UNSIGNED_BYTE;if(i===Uf)return o.UNSIGNED_SHORT_4_4_4_4;if(i===Ff)return o.UNSIGNED_SHORT_5_5_5_1;if(i===n_)return o.UNSIGNED_INT_5_9_9_9_REV;if(i===e_)return o.BYTE;if(i===t_)return o.SHORT;if(i===ga)return o.UNSIGNED_SHORT;if(i===Nf)return o.INT;if(i===fs)return o.UNSIGNED_INT;if(i===gi)return o.FLOAT;if(i===ya)return o.HALF_FLOAT;if(i===i_)return o.ALPHA;if(i===r_)return o.RGB;if(i===ii)return o.RGBA;if(i===s_)return o.LUMINANCE;if(i===o_)return o.LUMINANCE_ALPHA;if(i===so)return o.DEPTH_COMPONENT;if(i===po)return o.DEPTH_STENCIL;if(i===Of)return o.RED;if(i===Bf)return o.RED_INTEGER;if(i===a_)return o.RG;if(i===kf)return o.RG_INTEGER;if(i===zf)return o.RGBA_INTEGER;if(i===rc||i===sc||i===oc||i===ac)if(c===Ut)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===rc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===sc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===oc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ac)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===rc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===sc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===oc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ac)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Zd||i===Qd||i===Jd||i===ef)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===Zd)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Qd)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Jd)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ef)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===tf||i===nf||i===rf)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(i===tf||i===nf)return c===Ut?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===rf)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===sf||i===of||i===af||i===lf||i===cf||i===uf||i===df||i===ff||i===hf||i===pf||i===mf||i===gf||i===_f||i===vf)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(i===sf)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===of)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===af)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===lf)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===cf)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===uf)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===df)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ff)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===hf)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===pf)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===mf)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===gf)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===_f)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===vf)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===lc||i===xf||i===yf)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(i===lc)return c===Ut?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===xf)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===yf)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===l_||i===Sf||i===Mf||i===Ef)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(i===lc)return a.COMPRESSED_RED_RGTC1_EXT;if(i===Sf)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Mf)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ef)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ho?o.UNSIGNED_INT_24_8:o[i]!==void 0?o[i]:null}return{convert:t}}const bA={type:"move"};class Fd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ds,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ds,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ds,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,a=null,c=null;const u=this._targetRay,f=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){c=!0;for(const T of e.hand.values()){const S=t.getJointPose(T,i),x=this._getHandJoint(h,T);S!==null&&(x.matrix.fromArray(S.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=S.radius),x.visible=S!==null}const m=h.joints["index-finger-tip"],g=h.joints["thumb-tip"],_=m.position.distanceTo(g.position),y=.02,M=.005;h.inputState.pinching&&_>y+M?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&_<=y-M&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1));u!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&a!==null&&(s=a),s!==null&&(u.matrix.fromArray(s.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,s.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(s.linearVelocity)):u.hasLinearVelocity=!1,s.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(s.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(bA)))}return u!==null&&(u.visible=s!==null),f!==null&&(f.visible=a!==null),h!==null&&(h.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ds;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const PA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,IA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class LA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new ln,a=e.properties.get(s);a.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Fr({vertexShader:PA,fragmentShader:IA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new qn(new xc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class DA extends ps{constructor(e,t){super();const i=this;let s=null,a=1,c=null,u="local-floor",f=1,h=null,m=null,g=null,_=null,y=null,M=null;const T=new LA,S=t.getContextAttributes();let x=null,D=null;const I=[],C=[],G=new Mt;let O=null;const U=new bn;U.viewport=new Ct;const j=new bn;j.viewport=new Ct;const b=[U,j],R=new zy;let z=null,oe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ce=I[Z];return ce===void 0&&(ce=new Fd,I[Z]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(Z){let ce=I[Z];return ce===void 0&&(ce=new Fd,I[Z]=ce),ce.getGripSpace()},this.getHand=function(Z){let ce=I[Z];return ce===void 0&&(ce=new Fd,I[Z]=ce),ce.getHandSpace()};function ee(Z){const ce=C.indexOf(Z.inputSource);if(ce===-1)return;const Me=I[ce];Me!==void 0&&(Me.update(Z.inputSource,Z.frame,h||c),Me.dispatchEvent({type:Z.type,data:Z.inputSource}))}function de(){s.removeEventListener("select",ee),s.removeEventListener("selectstart",ee),s.removeEventListener("selectend",ee),s.removeEventListener("squeeze",ee),s.removeEventListener("squeezestart",ee),s.removeEventListener("squeezeend",ee),s.removeEventListener("end",de),s.removeEventListener("inputsourceschange",he);for(let Z=0;Z<I.length;Z++){const ce=C[Z];ce!==null&&(C[Z]=null,I[Z].disconnect(ce))}z=null,oe=null,T.reset(),e.setRenderTarget(x),y=null,_=null,g=null,s=null,D=null,Ne.stop(),i.isPresenting=!1,e.setPixelRatio(O),e.setSize(G.width,G.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){a=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){u=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||c},this.setReferenceSpace=function(Z){h=Z},this.getBaseLayer=function(){return _!==null?_:y},this.getBinding=function(){return g},this.getFrame=function(){return M},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(x=e.getRenderTarget(),s.addEventListener("select",ee),s.addEventListener("selectstart",ee),s.addEventListener("selectend",ee),s.addEventListener("squeeze",ee),s.addEventListener("squeezestart",ee),s.addEventListener("squeezeend",ee),s.addEventListener("end",de),s.addEventListener("inputsourceschange",he),S.xrCompatible!==!0&&await t.makeXRCompatible(),O=e.getPixelRatio(),e.getSize(G),s.renderState.layers===void 0){const ce={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:a};y=new XRWebGLLayer(s,t,ce),s.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),D=new hs(y.framebufferWidth,y.framebufferHeight,{format:ii,type:tr,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil})}else{let ce=null,Me=null,ve=null;S.depth&&(ve=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ce=S.stencil?po:so,Me=S.stencil?ho:fs);const Te={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:a};g=new XRWebGLBinding(s,t),_=g.createProjectionLayer(Te),s.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),D=new hs(_.textureWidth,_.textureHeight,{format:ii,type:tr,depthTexture:new w_(_.textureWidth,_.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(f),h=null,c=await s.requestReferenceSpace(u),Ne.setContext(s),Ne.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function he(Z){for(let ce=0;ce<Z.removed.length;ce++){const Me=Z.removed[ce],ve=C.indexOf(Me);ve>=0&&(C[ve]=null,I[ve].disconnect(Me))}for(let ce=0;ce<Z.added.length;ce++){const Me=Z.added[ce];let ve=C.indexOf(Me);if(ve===-1){for(let Ue=0;Ue<I.length;Ue++)if(Ue>=C.length){C.push(Me),ve=Ue;break}else if(C[Ue]===null){C[Ue]=Me,ve=Ue;break}if(ve===-1)break}const Te=I[ve];Te&&Te.connect(Me)}}const se=new Y,le=new Y;function k(Z,ce,Me){se.setFromMatrixPosition(ce.matrixWorld),le.setFromMatrixPosition(Me.matrixWorld);const ve=se.distanceTo(le),Te=ce.projectionMatrix.elements,Ue=Me.projectionMatrix.elements,Qe=Te[14]/(Te[10]-1),Dt=Te[14]/(Te[10]+1),vt=(Te[9]+1)/Te[5],Ft=(Te[9]-1)/Te[5],B=(Te[8]-1)/Te[0],Sn=(Ue[8]+1)/Ue[0],pt=Qe*B,dt=Qe*Sn,Ye=ve/(-B+Sn),It=Ye*-B;if(ce.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(It),Z.translateZ(Ye),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Te[10]===-1)Z.projectionMatrix.copy(ce.projectionMatrix),Z.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{const Xe=Qe+Ye,P=Dt+Ye,A=pt-It,$=dt+(ve-It),pe=vt*Dt/P*Xe,ge=Ft*Dt/P*Xe;Z.projectionMatrix.makePerspective(A,$,pe,ge,Xe,P),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function ae(Z,ce){ce===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ce.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let ce=Z.near,Me=Z.far;T.texture!==null&&(T.depthNear>0&&(ce=T.depthNear),T.depthFar>0&&(Me=T.depthFar)),R.near=j.near=U.near=ce,R.far=j.far=U.far=Me,(z!==R.near||oe!==R.far)&&(s.updateRenderState({depthNear:R.near,depthFar:R.far}),z=R.near,oe=R.far),U.layers.mask=Z.layers.mask|2,j.layers.mask=Z.layers.mask|4,R.layers.mask=U.layers.mask|j.layers.mask;const ve=Z.parent,Te=R.cameras;ae(R,ve);for(let Ue=0;Ue<Te.length;Ue++)ae(Te[Ue],ve);Te.length===2?k(R,U,j):R.projectionMatrix.copy(U.projectionMatrix),re(Z,R,ve)};function re(Z,ce,Me){Me===null?Z.matrix.copy(ce.matrixWorld):(Z.matrix.copy(Me.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ce.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ce.projectionMatrix),Z.projectionMatrixInverse.copy(ce.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=mo*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(_===null&&y===null))return f},this.setFoveation=function(Z){f=Z,_!==null&&(_.fixedFoveation=Z),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=Z)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(R)};let N=null;function ne(Z,ce){if(m=ce.getViewerPose(h||c),M=ce,m!==null){const Me=m.views;y!==null&&(e.setRenderTargetFramebuffer(D,y.framebuffer),e.setRenderTarget(D));let ve=!1;Me.length!==R.cameras.length&&(R.cameras.length=0,ve=!0);for(let Ue=0;Ue<Me.length;Ue++){const Qe=Me[Ue];let Dt=null;if(y!==null)Dt=y.getViewport(Qe);else{const Ft=g.getViewSubImage(_,Qe);Dt=Ft.viewport,Ue===0&&(e.setRenderTargetTextures(D,Ft.colorTexture,_.ignoreDepthValues?void 0:Ft.depthStencilTexture),e.setRenderTarget(D))}let vt=b[Ue];vt===void 0&&(vt=new bn,vt.layers.enable(Ue),vt.viewport=new Ct,b[Ue]=vt),vt.matrix.fromArray(Qe.transform.matrix),vt.matrix.decompose(vt.position,vt.quaternion,vt.scale),vt.projectionMatrix.fromArray(Qe.projectionMatrix),vt.projectionMatrixInverse.copy(vt.projectionMatrix).invert(),vt.viewport.set(Dt.x,Dt.y,Dt.width,Dt.height),Ue===0&&(R.matrix.copy(vt.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),ve===!0&&R.cameras.push(vt)}const Te=s.enabledFeatures;if(Te&&Te.includes("depth-sensing")){const Ue=g.getDepthInformation(Me[0]);Ue&&Ue.isValid&&Ue.texture&&T.init(e,Ue,s.renderState)}}for(let Me=0;Me<I.length;Me++){const ve=C[Me],Te=I[Me];ve!==null&&Te!==void 0&&Te.update(ve,ce,h||c)}N&&N(Z,ce),ce.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ce}),M=null}const Ne=new D_;Ne.setAnimationLoop(ne),this.setAnimationLoop=function(Z){N=Z},this.dispose=function(){}}}const rs=new Ri,NA=new lt;function UA(o,e){function t(S,x){S.matrixAutoUpdate===!0&&S.updateMatrix(),x.value.copy(S.matrix)}function i(S,x){x.color.getRGB(S.fogColor.value,x_(o)),x.isFog?(S.fogNear.value=x.near,S.fogFar.value=x.far):x.isFogExp2&&(S.fogDensity.value=x.density)}function s(S,x,D,I,C){x.isMeshBasicMaterial||x.isMeshLambertMaterial?a(S,x):x.isMeshToonMaterial?(a(S,x),g(S,x)):x.isMeshPhongMaterial?(a(S,x),m(S,x)):x.isMeshStandardMaterial?(a(S,x),_(S,x),x.isMeshPhysicalMaterial&&y(S,x,C)):x.isMeshMatcapMaterial?(a(S,x),M(S,x)):x.isMeshDepthMaterial?a(S,x):x.isMeshDistanceMaterial?(a(S,x),T(S,x)):x.isMeshNormalMaterial?a(S,x):x.isLineBasicMaterial?(c(S,x),x.isLineDashedMaterial&&u(S,x)):x.isPointsMaterial?f(S,x,D,I):x.isSpriteMaterial?h(S,x):x.isShadowMaterial?(S.color.value.copy(x.color),S.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function a(S,x){S.opacity.value=x.opacity,x.color&&S.diffuse.value.copy(x.color),x.emissive&&S.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(S.map.value=x.map,t(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.bumpMap&&(S.bumpMap.value=x.bumpMap,t(x.bumpMap,S.bumpMapTransform),S.bumpScale.value=x.bumpScale,x.side===zn&&(S.bumpScale.value*=-1)),x.normalMap&&(S.normalMap.value=x.normalMap,t(x.normalMap,S.normalMapTransform),S.normalScale.value.copy(x.normalScale),x.side===zn&&S.normalScale.value.negate()),x.displacementMap&&(S.displacementMap.value=x.displacementMap,t(x.displacementMap,S.displacementMapTransform),S.displacementScale.value=x.displacementScale,S.displacementBias.value=x.displacementBias),x.emissiveMap&&(S.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,S.emissiveMapTransform)),x.specularMap&&(S.specularMap.value=x.specularMap,t(x.specularMap,S.specularMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest);const D=e.get(x),I=D.envMap,C=D.envMapRotation;I&&(S.envMap.value=I,rs.copy(C),rs.x*=-1,rs.y*=-1,rs.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(rs.y*=-1,rs.z*=-1),S.envMapRotation.value.setFromMatrix4(NA.makeRotationFromEuler(rs)),S.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=x.reflectivity,S.ior.value=x.ior,S.refractionRatio.value=x.refractionRatio),x.lightMap&&(S.lightMap.value=x.lightMap,S.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,S.lightMapTransform)),x.aoMap&&(S.aoMap.value=x.aoMap,S.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,S.aoMapTransform))}function c(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,x.map&&(S.map.value=x.map,t(x.map,S.mapTransform))}function u(S,x){S.dashSize.value=x.dashSize,S.totalSize.value=x.dashSize+x.gapSize,S.scale.value=x.scale}function f(S,x,D,I){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.size.value=x.size*D,S.scale.value=I*.5,x.map&&(S.map.value=x.map,t(x.map,S.uvTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function h(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.rotation.value=x.rotation,x.map&&(S.map.value=x.map,t(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function m(S,x){S.specular.value.copy(x.specular),S.shininess.value=Math.max(x.shininess,1e-4)}function g(S,x){x.gradientMap&&(S.gradientMap.value=x.gradientMap)}function _(S,x){S.metalness.value=x.metalness,x.metalnessMap&&(S.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,S.metalnessMapTransform)),S.roughness.value=x.roughness,x.roughnessMap&&(S.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,S.roughnessMapTransform)),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)}function y(S,x,D){S.ior.value=x.ior,x.sheen>0&&(S.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),S.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(S.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,S.sheenColorMapTransform)),x.sheenRoughnessMap&&(S.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,S.sheenRoughnessMapTransform))),x.clearcoat>0&&(S.clearcoat.value=x.clearcoat,S.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(S.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,S.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(S.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===zn&&S.clearcoatNormalScale.value.negate())),x.dispersion>0&&(S.dispersion.value=x.dispersion),x.iridescence>0&&(S.iridescence.value=x.iridescence,S.iridescenceIOR.value=x.iridescenceIOR,S.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(S.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,S.iridescenceMapTransform)),x.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),x.transmission>0&&(S.transmission.value=x.transmission,S.transmissionSamplerMap.value=D.texture,S.transmissionSamplerSize.value.set(D.width,D.height),x.transmissionMap&&(S.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,S.transmissionMapTransform)),S.thickness.value=x.thickness,x.thicknessMap&&(S.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=x.attenuationDistance,S.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(S.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(S.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=x.specularIntensity,S.specularColor.value.copy(x.specularColor),x.specularColorMap&&(S.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,S.specularColorMapTransform)),x.specularIntensityMap&&(S.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,S.specularIntensityMapTransform))}function M(S,x){x.matcap&&(S.matcap.value=x.matcap)}function T(S,x){const D=e.get(x).light;S.referencePosition.value.setFromMatrixPosition(D.matrixWorld),S.nearDistance.value=D.shadow.camera.near,S.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function FA(o,e,t,i){let s={},a={},c=[];const u=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function f(D,I){const C=I.program;i.uniformBlockBinding(D,C)}function h(D,I){let C=s[D.id];C===void 0&&(M(D),C=m(D),s[D.id]=C,D.addEventListener("dispose",S));const G=I.program;i.updateUBOMapping(D,G);const O=e.render.frame;a[D.id]!==O&&(_(D),a[D.id]=O)}function m(D){const I=g();D.__bindingPointIndex=I;const C=o.createBuffer(),G=D.__size,O=D.usage;return o.bindBuffer(o.UNIFORM_BUFFER,C),o.bufferData(o.UNIFORM_BUFFER,G,O),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,I,C),C}function g(){for(let D=0;D<u;D++)if(c.indexOf(D)===-1)return c.push(D),D;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(D){const I=s[D.id],C=D.uniforms,G=D.__cache;o.bindBuffer(o.UNIFORM_BUFFER,I);for(let O=0,U=C.length;O<U;O++){const j=Array.isArray(C[O])?C[O]:[C[O]];for(let b=0,R=j.length;b<R;b++){const z=j[b];if(y(z,O,b,G)===!0){const oe=z.__offset,ee=Array.isArray(z.value)?z.value:[z.value];let de=0;for(let he=0;he<ee.length;he++){const se=ee[he],le=T(se);typeof se=="number"||typeof se=="boolean"?(z.__data[0]=se,o.bufferSubData(o.UNIFORM_BUFFER,oe+de,z.__data)):se.isMatrix3?(z.__data[0]=se.elements[0],z.__data[1]=se.elements[1],z.__data[2]=se.elements[2],z.__data[3]=0,z.__data[4]=se.elements[3],z.__data[5]=se.elements[4],z.__data[6]=se.elements[5],z.__data[7]=0,z.__data[8]=se.elements[6],z.__data[9]=se.elements[7],z.__data[10]=se.elements[8],z.__data[11]=0):(se.toArray(z.__data,de),de+=le.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,oe,z.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(D,I,C,G){const O=D.value,U=I+"_"+C;if(G[U]===void 0)return typeof O=="number"||typeof O=="boolean"?G[U]=O:G[U]=O.clone(),!0;{const j=G[U];if(typeof O=="number"||typeof O=="boolean"){if(j!==O)return G[U]=O,!0}else if(j.equals(O)===!1)return j.copy(O),!0}return!1}function M(D){const I=D.uniforms;let C=0;const G=16;for(let U=0,j=I.length;U<j;U++){const b=Array.isArray(I[U])?I[U]:[I[U]];for(let R=0,z=b.length;R<z;R++){const oe=b[R],ee=Array.isArray(oe.value)?oe.value:[oe.value];for(let de=0,he=ee.length;de<he;de++){const se=ee[de],le=T(se),k=C%G,ae=k%le.boundary,re=k+ae;C+=ae,re!==0&&G-re<le.storage&&(C+=G-re),oe.__data=new Float32Array(le.storage/Float32Array.BYTES_PER_ELEMENT),oe.__offset=C,C+=le.storage}}}const O=C%G;return O>0&&(C+=G-O),D.__size=C,D.__cache={},this}function T(D){const I={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(I.boundary=4,I.storage=4):D.isVector2?(I.boundary=8,I.storage=8):D.isVector3||D.isColor?(I.boundary=16,I.storage=12):D.isVector4?(I.boundary=16,I.storage=16):D.isMatrix3?(I.boundary=48,I.storage=48):D.isMatrix4?(I.boundary=64,I.storage=64):D.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",D),I}function S(D){const I=D.target;I.removeEventListener("dispose",S);const C=c.indexOf(I.__bindingPointIndex);c.splice(C,1),o.deleteBuffer(s[I.id]),delete s[I.id],delete a[I.id]}function x(){for(const D in s)o.deleteBuffer(s[D]);c=[],s={},a={}}return{bind:f,update:h,dispose:x}}class OA{constructor(e={}){const{canvas:t=Fx(),context:i=null,depth:s=!0,stencil:a=!1,alpha:c=!1,antialias:u=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:h=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:g=!1,reverseDepthBuffer:_=!1}=e;this.isWebGLRenderer=!0;let y;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=i.getContextAttributes().alpha}else y=c;const M=new Uint32Array(4),T=new Int32Array(4);let S=null,x=null;const D=[],I=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=fn,this.toneMapping=Ur,this.toneMappingExposure=1;const C=this;let G=!1,O=0,U=0,j=null,b=-1,R=null;const z=new Ct,oe=new Ct;let ee=null;const de=new ot(0);let he=0,se=t.width,le=t.height,k=1,ae=null,re=null;const N=new Ct(0,0,se,le),ne=new Ct(0,0,se,le);let Ne=!1;const Z=new Xf;let ce=!1,Me=!1;const ve=new lt,Te=new lt,Ue=new Y,Qe=new Ct,Dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let vt=!1;function Ft(){return j===null?k:1}let B=i;function Sn(w,X){return t.getContext(w,X)}try{const w={alpha:!0,depth:s,stencil:a,antialias:u,premultipliedAlpha:f,preserveDrawingBuffer:h,powerPreference:m,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Df}`),t.addEventListener("webglcontextlost",fe,!1),t.addEventListener("webglcontextrestored",Ie,!1),t.addEventListener("webglcontextcreationerror",Pe,!1),B===null){const X="webgl2";if(B=Sn(X,w),B===null)throw Sn(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let pt,dt,Ye,It,Xe,P,A,$,pe,ge,ue,Ge,Ae,Fe,ut,Se,ke,Ke,Je,ze,ft,it,bt,W;function we(){pt=new jE(B),pt.init(),it=new CA(B,pt),dt=new zE(B,pt,e,it),Ye=new wA(B,pt),dt.reverseDepthBuffer&&_&&Ye.buffers.depth.setReversed(!0),It=new KE(B),Xe=new hA,P=new RA(B,pt,Ye,Xe,dt,it,It),A=new VE(C),$=new XE(C),pe=new nS(B),bt=new BE(B,pe),ge=new YE(B,pe,It,bt),ue=new ZE(B,ge,pe,It),Je=new $E(B,dt,P),Se=new HE(Xe),Ge=new fA(C,A,$,pt,dt,bt,Se),Ae=new UA(C,Xe),Fe=new mA,ut=new SA(pt),Ke=new OE(C,A,$,Ye,ue,y,f),ke=new TA(C,ue,dt),W=new FA(B,It,dt,Ye),ze=new kE(B,pt,It),ft=new qE(B,pt,It),It.programs=Ge.programs,C.capabilities=dt,C.extensions=pt,C.properties=Xe,C.renderLists=Fe,C.shadowMap=ke,C.state=Ye,C.info=It}we();const ie=new DA(C,B);this.xr=ie,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const w=pt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=pt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(w){w!==void 0&&(k=w,this.setSize(se,le,!1))},this.getSize=function(w){return w.set(se,le)},this.setSize=function(w,X,J=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}se=w,le=X,t.width=Math.floor(w*k),t.height=Math.floor(X*k),J===!0&&(t.style.width=w+"px",t.style.height=X+"px"),this.setViewport(0,0,w,X)},this.getDrawingBufferSize=function(w){return w.set(se*k,le*k).floor()},this.setDrawingBufferSize=function(w,X,J){se=w,le=X,k=J,t.width=Math.floor(w*J),t.height=Math.floor(X*J),this.setViewport(0,0,w,X)},this.getCurrentViewport=function(w){return w.copy(z)},this.getViewport=function(w){return w.copy(N)},this.setViewport=function(w,X,J,te){w.isVector4?N.set(w.x,w.y,w.z,w.w):N.set(w,X,J,te),Ye.viewport(z.copy(N).multiplyScalar(k).round())},this.getScissor=function(w){return w.copy(ne)},this.setScissor=function(w,X,J,te){w.isVector4?ne.set(w.x,w.y,w.z,w.w):ne.set(w,X,J,te),Ye.scissor(oe.copy(ne).multiplyScalar(k).round())},this.getScissorTest=function(){return Ne},this.setScissorTest=function(w){Ye.setScissorTest(Ne=w)},this.setOpaqueSort=function(w){ae=w},this.setTransparentSort=function(w){re=w},this.getClearColor=function(w){return w.copy(Ke.getClearColor())},this.setClearColor=function(){Ke.setClearColor.apply(Ke,arguments)},this.getClearAlpha=function(){return Ke.getClearAlpha()},this.setClearAlpha=function(){Ke.setClearAlpha.apply(Ke,arguments)},this.clear=function(w=!0,X=!0,J=!0){let te=0;if(w){let H=!1;if(j!==null){const ye=j.texture.format;H=ye===zf||ye===kf||ye===Bf}if(H){const ye=j.texture.type,Re=ye===tr||ye===fs||ye===ga||ye===ho||ye===Uf||ye===Ff,De=Ke.getClearColor(),Oe=Ke.getClearAlpha(),et=De.r,tt=De.g,je=De.b;Re?(M[0]=et,M[1]=tt,M[2]=je,M[3]=Oe,B.clearBufferuiv(B.COLOR,0,M)):(T[0]=et,T[1]=tt,T[2]=je,T[3]=Oe,B.clearBufferiv(B.COLOR,0,T))}else te|=B.COLOR_BUFFER_BIT}X&&(te|=B.DEPTH_BUFFER_BIT),J&&(te|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",fe,!1),t.removeEventListener("webglcontextrestored",Ie,!1),t.removeEventListener("webglcontextcreationerror",Pe,!1),Ke.dispose(),Fe.dispose(),ut.dispose(),Xe.dispose(),A.dispose(),$.dispose(),ue.dispose(),bt.dispose(),W.dispose(),Ge.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",ms),ie.removeEventListener("sessionend",ir),Li.stop()};function fe(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),G=!0}function Ie(){console.log("THREE.WebGLRenderer: Context Restored."),G=!1;const w=It.autoReset,X=ke.enabled,J=ke.autoUpdate,te=ke.needsUpdate,H=ke.type;we(),It.autoReset=w,ke.enabled=X,ke.autoUpdate=J,ke.needsUpdate=te,ke.type=H}function Pe(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function rt(w){const X=w.target;X.removeEventListener("dispose",rt),Bt(X)}function Bt(w){Qt(w),Xe.remove(w)}function Qt(w){const X=Xe.get(w).programs;X!==void 0&&(X.forEach(function(J){Ge.releaseProgram(J)}),w.isShaderMaterial&&Ge.releaseShaderCache(w))}this.renderBufferDirect=function(w,X,J,te,H,ye){X===null&&(X=Dt);const Re=H.isMesh&&H.matrixWorld.determinant()<0,De=Aa(w,X,J,te,H);Ye.setMaterial(te,Re);let Oe=J.index,et=1;if(te.wireframe===!0){if(Oe=ge.getWireframeAttribute(J),Oe===void 0)return;et=2}const tt=J.drawRange,je=J.attributes.position;let st=tt.start*et,At=(tt.start+tt.count)*et;ye!==null&&(st=Math.max(st,ye.start*et),At=Math.min(At,(ye.start+ye.count)*et)),Oe!==null?(st=Math.max(st,0),At=Math.min(At,Oe.count)):je!=null&&(st=Math.max(st,0),At=Math.min(At,je.count));const wt=At-st;if(wt<0||wt===1/0)return;bt.setup(H,te,De,J,Oe);let Ht,yt=ze;if(Oe!==null&&(Ht=pe.get(Oe),yt=ft,yt.setIndex(Ht)),H.isMesh)te.wireframe===!0?(Ye.setLineWidth(te.wireframeLinewidth*Ft()),yt.setMode(B.LINES)):yt.setMode(B.TRIANGLES);else if(H.isLine){let qe=te.linewidth;qe===void 0&&(qe=1),Ye.setLineWidth(qe*Ft()),H.isLineSegments?yt.setMode(B.LINES):H.isLineLoop?yt.setMode(B.LINE_LOOP):yt.setMode(B.LINE_STRIP)}else H.isPoints?yt.setMode(B.POINTS):H.isSprite&&yt.setMode(B.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)yt.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(pt.get("WEBGL_multi_draw"))yt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const qe=H._multiDrawStarts,jt=H._multiDrawCounts,xt=H._multiDrawCount,cn=Oe?pe.get(Oe).bytesPerElement:1,ri=Xe.get(te).currentProgram.getUniforms();for(let En=0;En<xt;En++)ri.setValue(B,"_gl_DrawID",En),yt.render(qe[En]/cn,jt[En])}else if(H.isInstancedMesh)yt.renderInstances(st,wt,H.count);else if(J.isInstancedBufferGeometry){const qe=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,jt=Math.min(J.instanceCount,qe);yt.renderInstances(st,wt,jt)}else yt.render(st,wt)};function Et(w,X,J){w.transparent===!0&&w.side===Ai&&w.forceSinglePass===!1?(w.side=zn,w.needsUpdate=!0,gs(w,X,J),w.side=er,w.needsUpdate=!0,gs(w,X,J),w.side=Ai):gs(w,X,J)}this.compile=function(w,X,J=null){J===null&&(J=w),x=ut.get(J),x.init(X),I.push(x),J.traverseVisible(function(H){H.isLight&&H.layers.test(X.layers)&&(x.pushLight(H),H.castShadow&&x.pushShadow(H))}),w!==J&&w.traverseVisible(function(H){H.isLight&&H.layers.test(X.layers)&&(x.pushLight(H),H.castShadow&&x.pushShadow(H))}),x.setupLights();const te=new Set;return w.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const ye=H.material;if(ye)if(Array.isArray(ye))for(let Re=0;Re<ye.length;Re++){const De=ye[Re];Et(De,J,H),te.add(De)}else Et(ye,J,H),te.add(ye)}),I.pop(),x=null,te},this.compileAsync=function(w,X,J=null){const te=this.compile(w,X,J);return new Promise(H=>{function ye(){if(te.forEach(function(Re){Xe.get(Re).currentProgram.isReady()&&te.delete(Re)}),te.size===0){H(w);return}setTimeout(ye,10)}pt.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let Dn=null;function Mn(w){Dn&&Dn(w)}function ms(){Li.stop()}function ir(){Li.start()}const Li=new D_;Li.setAnimationLoop(Mn),typeof self<"u"&&Li.setContext(self),this.setAnimationLoop=function(w){Dn=w,ie.setAnimationLoop(w),w===null?Li.stop():Li.start()},ie.addEventListener("sessionstart",ms),ie.addEventListener("sessionend",ir),this.render=function(w,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(X),X=ie.getCamera()),w.isScene===!0&&w.onBeforeRender(C,w,X,j),x=ut.get(w,I.length),x.init(X),I.push(x),Te.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),Z.setFromProjectionMatrix(Te),Me=this.localClippingEnabled,ce=Se.init(this.clippingPlanes,Me),S=Fe.get(w,D.length),S.init(),D.push(S),ie.enabled===!0&&ie.isPresenting===!0){const ye=C.xr.getDepthSensingMesh();ye!==null&&Di(ye,X,-1/0,C.sortObjects)}Di(w,X,0,C.sortObjects),S.finish(),C.sortObjects===!0&&S.sort(ae,re),vt=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,vt&&Ke.addToRenderList(S,w),this.info.render.frame++,ce===!0&&Se.beginShadows();const J=x.state.shadowsArray;ke.render(J,w,X),ce===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset();const te=S.opaque,H=S.transmissive;if(x.setupLights(),X.isArrayCamera){const ye=X.cameras;if(H.length>0)for(let Re=0,De=ye.length;Re<De;Re++){const Oe=ye[Re];Br(te,H,w,Oe)}vt&&Ke.render(w);for(let Re=0,De=ye.length;Re<De;Re++){const Oe=ye[Re];Or(S,w,Oe,Oe.viewport)}}else H.length>0&&Br(te,H,w,X),vt&&Ke.render(w),Or(S,w,X);j!==null&&(P.updateMultisampleRenderTarget(j),P.updateRenderTargetMipmap(j)),w.isScene===!0&&w.onAfterRender(C,w,X),bt.resetDefaultState(),b=-1,R=null,I.pop(),I.length>0?(x=I[I.length-1],ce===!0&&Se.setGlobalState(C.clippingPlanes,x.state.camera)):x=null,D.pop(),D.length>0?S=D[D.length-1]:S=null};function Di(w,X,J,te){if(w.visible===!1)return;if(w.layers.test(X.layers)){if(w.isGroup)J=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(X);else if(w.isLight)x.pushLight(w),w.castShadow&&x.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Z.intersectsSprite(w)){te&&Qe.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Te);const Re=ue.update(w),De=w.material;De.visible&&S.push(w,Re,De,J,Qe.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Z.intersectsObject(w))){const Re=ue.update(w),De=w.material;if(te&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Qe.copy(w.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),Qe.copy(Re.boundingSphere.center)),Qe.applyMatrix4(w.matrixWorld).applyMatrix4(Te)),Array.isArray(De)){const Oe=Re.groups;for(let et=0,tt=Oe.length;et<tt;et++){const je=Oe[et],st=De[je.materialIndex];st&&st.visible&&S.push(w,Re,st,J,Qe.z,je)}}else De.visible&&S.push(w,Re,De,J,Qe.z,null)}}const ye=w.children;for(let Re=0,De=ye.length;Re<De;Re++)Di(ye[Re],X,J,te)}function Or(w,X,J,te){const H=w.opaque,ye=w.transmissive,Re=w.transparent;x.setupLightsView(J),ce===!0&&Se.setGlobalState(C.clippingPlanes,J),te&&Ye.viewport(z.copy(te)),H.length>0&&rr(H,X,J),ye.length>0&&rr(ye,X,J),Re.length>0&&rr(Re,X,J),Ye.buffers.depth.setTest(!0),Ye.buffers.depth.setMask(!0),Ye.buffers.color.setMask(!0),Ye.setPolygonOffset(!1)}function Br(w,X,J,te){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[te.id]===void 0&&(x.state.transmissionRenderTarget[te.id]=new hs(1,1,{generateMipmaps:!0,type:pt.has("EXT_color_buffer_half_float")||pt.has("EXT_color_buffer_float")?ya:tr,minFilter:$i,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:St.workingColorSpace}));const ye=x.state.transmissionRenderTarget[te.id],Re=te.viewport||z;ye.setSize(Re.z,Re.w);const De=C.getRenderTarget();C.setRenderTarget(ye),C.getClearColor(de),he=C.getClearAlpha(),he<1&&C.setClearColor(16777215,.5),C.clear(),vt&&Ke.render(J);const Oe=C.toneMapping;C.toneMapping=Ur;const et=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),x.setupLightsView(te),ce===!0&&Se.setGlobalState(C.clippingPlanes,te),rr(w,J,te),P.updateMultisampleRenderTarget(ye),P.updateRenderTargetMipmap(ye),pt.has("WEBGL_multisampled_render_to_texture")===!1){let tt=!1;for(let je=0,st=X.length;je<st;je++){const At=X[je],wt=At.object,Ht=At.geometry,yt=At.material,qe=At.group;if(yt.side===Ai&&wt.layers.test(te.layers)){const jt=yt.side;yt.side=zn,yt.needsUpdate=!0,Ea(wt,J,te,Ht,yt,qe),yt.side=jt,yt.needsUpdate=!0,tt=!0}}tt===!0&&(P.updateMultisampleRenderTarget(ye),P.updateRenderTargetMipmap(ye))}C.setRenderTarget(De),C.setClearColor(de,he),et!==void 0&&(te.viewport=et),C.toneMapping=Oe}function rr(w,X,J){const te=X.isScene===!0?X.overrideMaterial:null;for(let H=0,ye=w.length;H<ye;H++){const Re=w[H],De=Re.object,Oe=Re.geometry,et=te===null?Re.material:te,tt=Re.group;De.layers.test(J.layers)&&Ea(De,X,J,Oe,et,tt)}}function Ea(w,X,J,te,H,ye){w.onBeforeRender(C,X,J,te,H,ye),w.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),H.onBeforeRender(C,X,J,te,w,ye),H.transparent===!0&&H.side===Ai&&H.forceSinglePass===!1?(H.side=zn,H.needsUpdate=!0,C.renderBufferDirect(J,X,te,H,w,ye),H.side=er,H.needsUpdate=!0,C.renderBufferDirect(J,X,te,H,w,ye),H.side=Ai):C.renderBufferDirect(J,X,te,H,w,ye),w.onAfterRender(C,X,J,te,H,ye)}function gs(w,X,J){X.isScene!==!0&&(X=Dt);const te=Xe.get(w),H=x.state.lights,ye=x.state.shadowsArray,Re=H.state.version,De=Ge.getParameters(w,H.state,ye,X,J),Oe=Ge.getProgramCacheKey(De);let et=te.programs;te.environment=w.isMeshStandardMaterial?X.environment:null,te.fog=X.fog,te.envMap=(w.isMeshStandardMaterial?$:A).get(w.envMap||te.environment),te.envMapRotation=te.environment!==null&&w.envMap===null?X.environmentRotation:w.envMapRotation,et===void 0&&(w.addEventListener("dispose",rt),et=new Map,te.programs=et);let tt=et.get(Oe);if(tt!==void 0){if(te.currentProgram===tt&&te.lightsStateVersion===Re)return xi(w,De),tt}else De.uniforms=Ge.getUniforms(w),w.onBeforeCompile(De,C),tt=Ge.acquireProgram(De,Oe),et.set(Oe,tt),te.uniforms=De.uniforms;const je=te.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(je.clippingPlanes=Se.uniform),xi(w,De),te.needsLights=Mc(w),te.lightsStateVersion=Re,te.needsLights&&(je.ambientLightColor.value=H.state.ambient,je.lightProbe.value=H.state.probe,je.directionalLights.value=H.state.directional,je.directionalLightShadows.value=H.state.directionalShadow,je.spotLights.value=H.state.spot,je.spotLightShadows.value=H.state.spotShadow,je.rectAreaLights.value=H.state.rectArea,je.ltc_1.value=H.state.rectAreaLTC1,je.ltc_2.value=H.state.rectAreaLTC2,je.pointLights.value=H.state.point,je.pointLightShadows.value=H.state.pointShadow,je.hemisphereLights.value=H.state.hemi,je.directionalShadowMap.value=H.state.directionalShadowMap,je.directionalShadowMatrix.value=H.state.directionalShadowMatrix,je.spotShadowMap.value=H.state.spotShadowMap,je.spotLightMatrix.value=H.state.spotLightMatrix,je.spotLightMap.value=H.state.spotLightMap,je.pointShadowMap.value=H.state.pointShadowMap,je.pointShadowMatrix.value=H.state.pointShadowMatrix),te.currentProgram=tt,te.uniformsList=null,tt}function Ta(w){if(w.uniformsList===null){const X=w.currentProgram.getUniforms();w.uniformsList=cc.seqWithValue(X.seq,w.uniforms)}return w.uniformsList}function xi(w,X){const J=Xe.get(w);J.outputColorSpace=X.outputColorSpace,J.batching=X.batching,J.batchingColor=X.batchingColor,J.instancing=X.instancing,J.instancingColor=X.instancingColor,J.instancingMorph=X.instancingMorph,J.skinning=X.skinning,J.morphTargets=X.morphTargets,J.morphNormals=X.morphNormals,J.morphColors=X.morphColors,J.morphTargetsCount=X.morphTargetsCount,J.numClippingPlanes=X.numClippingPlanes,J.numIntersection=X.numClipIntersection,J.vertexAlphas=X.vertexAlphas,J.vertexTangents=X.vertexTangents,J.toneMapping=X.toneMapping}function Aa(w,X,J,te,H){X.isScene!==!0&&(X=Dt),P.resetTextureUnits();const ye=X.fog,Re=te.isMeshStandardMaterial?X.environment:null,De=j===null?C.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Ln,Oe=(te.isMeshStandardMaterial?$:A).get(te.envMap||Re),et=te.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,tt=!!J.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),je=!!J.morphAttributes.position,st=!!J.morphAttributes.normal,At=!!J.morphAttributes.color;let wt=Ur;te.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(wt=C.toneMapping);const Ht=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,yt=Ht!==void 0?Ht.length:0,qe=Xe.get(te),jt=x.state.lights;if(ce===!0&&(Me===!0||w!==R)){const qt=w===R&&te.id===b;Se.setState(te,w,qt)}let xt=!1;te.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==jt.state.version||qe.outputColorSpace!==De||H.isBatchedMesh&&qe.batching===!1||!H.isBatchedMesh&&qe.batching===!0||H.isBatchedMesh&&qe.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&qe.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&qe.instancing===!1||!H.isInstancedMesh&&qe.instancing===!0||H.isSkinnedMesh&&qe.skinning===!1||!H.isSkinnedMesh&&qe.skinning===!0||H.isInstancedMesh&&qe.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&qe.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&qe.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&qe.instancingMorph===!1&&H.morphTexture!==null||qe.envMap!==Oe||te.fog===!0&&qe.fog!==ye||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==Se.numPlanes||qe.numIntersection!==Se.numIntersection)||qe.vertexAlphas!==et||qe.vertexTangents!==tt||qe.morphTargets!==je||qe.morphNormals!==st||qe.morphColors!==At||qe.toneMapping!==wt||qe.morphTargetsCount!==yt)&&(xt=!0):(xt=!0,qe.__version=te.version);let cn=qe.currentProgram;xt===!0&&(cn=gs(te,X,H));let ri=!1,En=!1,kr=!1;const Nt=cn.getUniforms(),Tn=qe.uniforms;if(Ye.useProgram(cn.program)&&(ri=!0,En=!0,kr=!0),te.id!==b&&(b=te.id,En=!0),ri||R!==w){Ye.buffers.depth.getReversed()?(ve.copy(w.projectionMatrix),Bx(ve),kx(ve),Nt.setValue(B,"projectionMatrix",ve)):Nt.setValue(B,"projectionMatrix",w.projectionMatrix),Nt.setValue(B,"viewMatrix",w.matrixWorldInverse);const pn=Nt.map.cameraPosition;pn!==void 0&&pn.setValue(B,Ue.setFromMatrixPosition(w.matrixWorld)),dt.logarithmicDepthBuffer&&Nt.setValue(B,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&Nt.setValue(B,"isOrthographic",w.isOrthographicCamera===!0),R!==w&&(R=w,En=!0,kr=!0)}if(H.isSkinnedMesh){Nt.setOptional(B,H,"bindMatrix"),Nt.setOptional(B,H,"bindMatrixInverse");const qt=H.skeleton;qt&&(qt.boneTexture===null&&qt.computeBoneTexture(),Nt.setValue(B,"boneTexture",qt.boneTexture,P))}H.isBatchedMesh&&(Nt.setOptional(B,H,"batchingTexture"),Nt.setValue(B,"batchingTexture",H._matricesTexture,P),Nt.setOptional(B,H,"batchingIdTexture"),Nt.setValue(B,"batchingIdTexture",H._indirectTexture,P),Nt.setOptional(B,H,"batchingColorTexture"),H._colorsTexture!==null&&Nt.setValue(B,"batchingColorTexture",H._colorsTexture,P));const hn=J.morphAttributes;if((hn.position!==void 0||hn.normal!==void 0||hn.color!==void 0)&&Je.update(H,J,cn),(En||qe.receiveShadow!==H.receiveShadow)&&(qe.receiveShadow=H.receiveShadow,Nt.setValue(B,"receiveShadow",H.receiveShadow)),te.isMeshGouraudMaterial&&te.envMap!==null&&(Tn.envMap.value=Oe,Tn.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),te.isMeshStandardMaterial&&te.envMap===null&&X.environment!==null&&(Tn.envMapIntensity.value=X.environmentIntensity),En&&(Nt.setValue(B,"toneMappingExposure",C.toneMappingExposure),qe.needsLights&&wa(Tn,kr),ye&&te.fog===!0&&Ae.refreshFogUniforms(Tn,ye),Ae.refreshMaterialUniforms(Tn,te,k,le,x.state.transmissionRenderTarget[w.id]),cc.upload(B,Ta(qe),Tn,P)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(cc.upload(B,Ta(qe),Tn,P),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&Nt.setValue(B,"center",H.center),Nt.setValue(B,"modelViewMatrix",H.modelViewMatrix),Nt.setValue(B,"normalMatrix",H.normalMatrix),Nt.setValue(B,"modelMatrix",H.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){const qt=te.uniformsGroups;for(let pn=0,zr=qt.length;pn<zr;pn++){const mt=qt[pn];W.update(mt,cn),W.bind(mt,cn)}}return cn}function wa(w,X){w.ambientLightColor.needsUpdate=X,w.lightProbe.needsUpdate=X,w.directionalLights.needsUpdate=X,w.directionalLightShadows.needsUpdate=X,w.pointLights.needsUpdate=X,w.pointLightShadows.needsUpdate=X,w.spotLights.needsUpdate=X,w.spotLightShadows.needsUpdate=X,w.rectAreaLights.needsUpdate=X,w.hemisphereLights.needsUpdate=X}function Mc(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(w,X,J){Xe.get(w.texture).__webglTexture=X,Xe.get(w.depthTexture).__webglTexture=J;const te=Xe.get(w);te.__hasExternalTextures=!0,te.__autoAllocateDepthBuffer=J===void 0,te.__autoAllocateDepthBuffer||pt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),te.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,X){const J=Xe.get(w);J.__webglFramebuffer=X,J.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(w,X=0,J=0){j=w,O=X,U=J;let te=!0,H=null,ye=!1,Re=!1;if(w){const Oe=Xe.get(w);if(Oe.__useDefaultFramebuffer!==void 0)Ye.bindFramebuffer(B.FRAMEBUFFER,null),te=!1;else if(Oe.__webglFramebuffer===void 0)P.setupRenderTarget(w);else if(Oe.__hasExternalTextures)P.rebindTextures(w,Xe.get(w.texture).__webglTexture,Xe.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const je=w.depthTexture;if(Oe.__boundDepthTexture!==je){if(je!==null&&Xe.has(je)&&(w.width!==je.image.width||w.height!==je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(w)}}const et=w.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(Re=!0);const tt=Xe.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(tt[X])?H=tt[X][J]:H=tt[X],ye=!0):w.samples>0&&P.useMultisampledRTT(w)===!1?H=Xe.get(w).__webglMultisampledFramebuffer:Array.isArray(tt)?H=tt[J]:H=tt,z.copy(w.viewport),oe.copy(w.scissor),ee=w.scissorTest}else z.copy(N).multiplyScalar(k).floor(),oe.copy(ne).multiplyScalar(k).floor(),ee=Ne;if(Ye.bindFramebuffer(B.FRAMEBUFFER,H)&&te&&Ye.drawBuffers(w,H),Ye.viewport(z),Ye.scissor(oe),Ye.setScissorTest(ee),ye){const Oe=Xe.get(w.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+X,Oe.__webglTexture,J)}else if(Re){const Oe=Xe.get(w.texture),et=X||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Oe.__webglTexture,J||0,et)}b=-1},this.readRenderTargetPixels=function(w,X,J,te,H,ye,Re){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=Xe.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Re!==void 0&&(De=De[Re]),De){Ye.bindFramebuffer(B.FRAMEBUFFER,De);try{const Oe=w.texture,et=Oe.format,tt=Oe.type;if(!dt.textureFormatReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!dt.textureTypeReadable(tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=w.width-te&&J>=0&&J<=w.height-H&&B.readPixels(X,J,te,H,it.convert(et),it.convert(tt),ye)}finally{const Oe=j!==null?Xe.get(j).__webglFramebuffer:null;Ye.bindFramebuffer(B.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(w,X,J,te,H,ye,Re){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=Xe.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Re!==void 0&&(De=De[Re]),De){const Oe=w.texture,et=Oe.format,tt=Oe.type;if(!dt.textureFormatReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!dt.textureTypeReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(X>=0&&X<=w.width-te&&J>=0&&J<=w.height-H){Ye.bindFramebuffer(B.FRAMEBUFFER,De);const je=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,je),B.bufferData(B.PIXEL_PACK_BUFFER,ye.byteLength,B.STREAM_READ),B.readPixels(X,J,te,H,it.convert(et),it.convert(tt),0);const st=j!==null?Xe.get(j).__webglFramebuffer:null;Ye.bindFramebuffer(B.FRAMEBUFFER,st);const At=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Ox(B,At,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,je),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,ye),B.deleteBuffer(je),B.deleteSync(At),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,X=null,J=0){w.isTexture!==!0&&(eo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),X=arguments[0]||null,w=arguments[1]);const te=Math.pow(2,-J),H=Math.floor(w.image.width*te),ye=Math.floor(w.image.height*te),Re=X!==null?X.x:0,De=X!==null?X.y:0;P.setTexture2D(w,0),B.copyTexSubImage2D(B.TEXTURE_2D,J,0,0,Re,De,H,ye),Ye.unbindTexture()};const Ra=B.createFramebuffer(),Ca=B.createFramebuffer();this.copyTextureToTexture=function(w,X,J=null,te=null,H=0,ye=null){w.isTexture!==!0&&(eo("WebGLRenderer: copyTextureToTexture function signature has changed."),te=arguments[0]||null,w=arguments[1],X=arguments[2],ye=arguments[3]||0,J=null),ye===null&&(H!==0?(eo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ye=H,H=0):ye=0);let Re,De,Oe,et,tt,je,st,At,wt;const Ht=w.isCompressedTexture?w.mipmaps[ye]:w.image;if(J!==null)Re=J.max.x-J.min.x,De=J.max.y-J.min.y,Oe=J.isBox3?J.max.z-J.min.z:1,et=J.min.x,tt=J.min.y,je=J.isBox3?J.min.z:0;else{const hn=Math.pow(2,-H);Re=Math.floor(Ht.width*hn),De=Math.floor(Ht.height*hn),w.isDataArrayTexture?Oe=Ht.depth:w.isData3DTexture?Oe=Math.floor(Ht.depth*hn):Oe=1,et=0,tt=0,je=0}te!==null?(st=te.x,At=te.y,wt=te.z):(st=0,At=0,wt=0);const yt=it.convert(X.format),qe=it.convert(X.type);let jt;X.isData3DTexture?(P.setTexture3D(X,0),jt=B.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(P.setTexture2DArray(X,0),jt=B.TEXTURE_2D_ARRAY):(P.setTexture2D(X,0),jt=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,X.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,X.unpackAlignment);const xt=B.getParameter(B.UNPACK_ROW_LENGTH),cn=B.getParameter(B.UNPACK_IMAGE_HEIGHT),ri=B.getParameter(B.UNPACK_SKIP_PIXELS),En=B.getParameter(B.UNPACK_SKIP_ROWS),kr=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,Ht.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Ht.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,et),B.pixelStorei(B.UNPACK_SKIP_ROWS,tt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,je);const Nt=w.isDataArrayTexture||w.isData3DTexture,Tn=X.isDataArrayTexture||X.isData3DTexture;if(w.isDepthTexture){const hn=Xe.get(w),qt=Xe.get(X),pn=Xe.get(hn.__renderTarget),zr=Xe.get(qt.__renderTarget);Ye.bindFramebuffer(B.READ_FRAMEBUFFER,pn.__webglFramebuffer),Ye.bindFramebuffer(B.DRAW_FRAMEBUFFER,zr.__webglFramebuffer);for(let mt=0;mt<Oe;mt++)Nt&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Xe.get(w).__webglTexture,H,je+mt),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Xe.get(X).__webglTexture,ye,wt+mt)),B.blitFramebuffer(et,tt,Re,De,st,At,Re,De,B.DEPTH_BUFFER_BIT,B.NEAREST);Ye.bindFramebuffer(B.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(H!==0||w.isRenderTargetTexture||Xe.has(w)){const hn=Xe.get(w),qt=Xe.get(X);Ye.bindFramebuffer(B.READ_FRAMEBUFFER,Ra),Ye.bindFramebuffer(B.DRAW_FRAMEBUFFER,Ca);for(let pn=0;pn<Oe;pn++)Nt?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,hn.__webglTexture,H,je+pn):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,hn.__webglTexture,H),Tn?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,qt.__webglTexture,ye,wt+pn):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,qt.__webglTexture,ye),H!==0?B.blitFramebuffer(et,tt,Re,De,st,At,Re,De,B.COLOR_BUFFER_BIT,B.NEAREST):Tn?B.copyTexSubImage3D(jt,ye,st,At,wt+pn,et,tt,Re,De):B.copyTexSubImage2D(jt,ye,st,At,et,tt,Re,De);Ye.bindFramebuffer(B.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Tn?w.isDataTexture||w.isData3DTexture?B.texSubImage3D(jt,ye,st,At,wt,Re,De,Oe,yt,qe,Ht.data):X.isCompressedArrayTexture?B.compressedTexSubImage3D(jt,ye,st,At,wt,Re,De,Oe,yt,Ht.data):B.texSubImage3D(jt,ye,st,At,wt,Re,De,Oe,yt,qe,Ht):w.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,ye,st,At,Re,De,yt,qe,Ht.data):w.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,ye,st,At,Ht.width,Ht.height,yt,Ht.data):B.texSubImage2D(B.TEXTURE_2D,ye,st,At,Re,De,yt,qe,Ht);B.pixelStorei(B.UNPACK_ROW_LENGTH,xt),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,cn),B.pixelStorei(B.UNPACK_SKIP_PIXELS,ri),B.pixelStorei(B.UNPACK_SKIP_ROWS,En),B.pixelStorei(B.UNPACK_SKIP_IMAGES,kr),ye===0&&X.generateMipmaps&&B.generateMipmap(jt),Ye.unbindTexture()},this.copyTextureToTexture3D=function(w,X,J=null,te=null,H=0){return w.isTexture!==!0&&(eo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),J=arguments[0]||null,te=arguments[1]||null,w=arguments[2],X=arguments[3],H=arguments[4]||0),eo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,X,J,te,H)},this.initRenderTarget=function(w){Xe.get(w).__webglFramebuffer===void 0&&P.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?P.setTextureCube(w,0):w.isData3DTexture?P.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?P.setTexture2DArray(w,0):P.setTexture2D(w,0),Ye.unbindTexture()},this.resetState=function(){O=0,U=0,j=null,Ye.reset(),bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=St._getDrawingBufferColorSpace(e),t.unpackColorSpace=St._getUnpackColorSpace()}}function Xg(o,e){if(e===lx)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),o;if(e===Tf||e===c_){let t=o.getIndex();if(t===null){const c=[],u=o.getAttribute("position");if(u!==void 0){for(let f=0;f<u.count;f++)c.push(f);o.setIndex(c),t=o.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),o}const i=t.count-2,s=[];if(e===Tf)for(let c=1;c<=i;c++)s.push(t.getX(0)),s.push(t.getX(c)),s.push(t.getX(c+1));else for(let c=0;c<i;c++)c%2===0?(s.push(t.getX(c)),s.push(t.getX(c+1)),s.push(t.getX(c+2))):(s.push(t.getX(c+2)),s.push(t.getX(c+1)),s.push(t.getX(c)));s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const a=o.clone();return a.setIndex(s),a.clearGroups(),a}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),o}class BA extends Mo{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new GA(t)}),this.register(function(t){return new WA(t)}),this.register(function(t){return new JA(t)}),this.register(function(t){return new ew(t)}),this.register(function(t){return new tw(t)}),this.register(function(t){return new jA(t)}),this.register(function(t){return new YA(t)}),this.register(function(t){return new qA(t)}),this.register(function(t){return new KA(t)}),this.register(function(t){return new VA(t)}),this.register(function(t){return new $A(t)}),this.register(function(t){return new XA(t)}),this.register(function(t){return new QA(t)}),this.register(function(t){return new ZA(t)}),this.register(function(t){return new zA(t)}),this.register(function(t){return new nw(t)}),this.register(function(t){return new iw(t)})}load(e,t,i,s){const a=this;let c;if(this.resourcePath!=="")c=this.resourcePath;else if(this.path!==""){const h=ma.extractUrlBase(e);c=ma.resolveURL(h,this.path)}else c=ma.extractUrlBase(e);this.manager.itemStart(e);const u=function(h){s?s(h):console.error(h),a.manager.itemError(e),a.manager.itemEnd(e)},f=new I_(this.manager);f.setPath(this.path),f.setResponseType("arraybuffer"),f.setRequestHeader(this.requestHeader),f.setWithCredentials(this.withCredentials),f.load(e,function(h){try{a.parse(h,c,function(m){t(m),a.manager.itemEnd(e)},u)}catch(m){u(m)}},i,u)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let a;const c={},u={},f=new TextDecoder;if(typeof e=="string")a=JSON.parse(e);else if(e instanceof ArrayBuffer)if(f.decode(new Uint8Array(e,0,4))===B_){try{c[_t.KHR_BINARY_GLTF]=new rw(e)}catch(g){s&&s(g);return}a=JSON.parse(c[_t.KHR_BINARY_GLTF].content)}else a=JSON.parse(f.decode(e));else a=e;if(a.asset===void 0||a.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const h=new _w(a,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});h.fileLoader.setRequestHeader(this.requestHeader);for(let m=0;m<this.pluginCallbacks.length;m++){const g=this.pluginCallbacks[m](h);g.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),u[g.name]=g,c[g.name]=!0}if(a.extensionsUsed)for(let m=0;m<a.extensionsUsed.length;++m){const g=a.extensionsUsed[m],_=a.extensionsRequired||[];switch(g){case _t.KHR_MATERIALS_UNLIT:c[g]=new HA;break;case _t.KHR_DRACO_MESH_COMPRESSION:c[g]=new sw(a,this.dracoLoader);break;case _t.KHR_TEXTURE_TRANSFORM:c[g]=new ow;break;case _t.KHR_MESH_QUANTIZATION:c[g]=new aw;break;default:_.indexOf(g)>=0&&u[g]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+g+'".')}}h.setExtensions(c),h.setPlugins(u),h.parse(i,s)}parseAsync(e,t){const i=this;return new Promise(function(s,a){i.parse(e,t,s,a)})}}function kA(){let o={};return{get:function(e){return o[e]},add:function(e,t){o[e]=t},remove:function(e){delete o[e]},removeAll:function(){o={}}}}const _t={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class zA{constructor(e){this.parser=e,this.name=_t.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){const a=t[i];a.extensions&&a.extensions[this.name]&&a.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,a.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let s=t.cache.get(i);if(s)return s;const a=t.json,f=((a.extensions&&a.extensions[this.name]||{}).lights||[])[e];let h;const m=new ot(16777215);f.color!==void 0&&m.setRGB(f.color[0],f.color[1],f.color[2],Ln);const g=f.range!==void 0?f.range:0;switch(f.type){case"directional":h=new L_(m),h.target.position.set(0,0,-1),h.add(h.target);break;case"point":h=new Fy(m),h.distance=g;break;case"spot":h=new Ny(m),h.distance=g,f.spot=f.spot||{},f.spot.innerConeAngle=f.spot.innerConeAngle!==void 0?f.spot.innerConeAngle:0,f.spot.outerConeAngle=f.spot.outerConeAngle!==void 0?f.spot.outerConeAngle:Math.PI/4,h.angle=f.spot.outerConeAngle,h.penumbra=1-f.spot.innerConeAngle/f.spot.outerConeAngle,h.target.position.set(0,0,-1),h.add(h.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+f.type)}return h.position.set(0,0,0),h.decay=2,Ki(h,f),f.intensity!==void 0&&(h.intensity=f.intensity),h.name=t.createUniqueName(f.name||"light_"+e),s=Promise.resolve(h),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,a=i.json.nodes[e],u=(a.extensions&&a.extensions[this.name]||{}).light;return u===void 0?null:this._loadLight(u).then(function(f){return i._getNodeRef(t.cache,u,f)})}}class HA{constructor(){this.name=_t.KHR_MATERIALS_UNLIT}getMaterialType(){return us}extendParams(e,t,i){const s=[];e.color=new ot(1,1,1),e.opacity=1;const a=t.pbrMetallicRoughness;if(a){if(Array.isArray(a.baseColorFactor)){const c=a.baseColorFactor;e.color.setRGB(c[0],c[1],c[2],Ln),e.opacity=c[3]}a.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",a.baseColorTexture,fn))}return Promise.all(s)}}class VA{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=s.extensions[this.name].emissiveStrength;return a!==void 0&&(t.emissiveIntensity=a),Promise.resolve()}}class GA{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Pi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],c=s.extensions[this.name];if(c.clearcoatFactor!==void 0&&(t.clearcoat=c.clearcoatFactor),c.clearcoatTexture!==void 0&&a.push(i.assignTexture(t,"clearcoatMap",c.clearcoatTexture)),c.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=c.clearcoatRoughnessFactor),c.clearcoatRoughnessTexture!==void 0&&a.push(i.assignTexture(t,"clearcoatRoughnessMap",c.clearcoatRoughnessTexture)),c.clearcoatNormalTexture!==void 0&&(a.push(i.assignTexture(t,"clearcoatNormalMap",c.clearcoatNormalTexture)),c.clearcoatNormalTexture.scale!==void 0)){const u=c.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Mt(u,u)}return Promise.all(a)}}class WA{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_DISPERSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Pi}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=s.extensions[this.name];return t.dispersion=a.dispersion!==void 0?a.dispersion:0,Promise.resolve()}}class XA{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Pi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],c=s.extensions[this.name];return c.iridescenceFactor!==void 0&&(t.iridescence=c.iridescenceFactor),c.iridescenceTexture!==void 0&&a.push(i.assignTexture(t,"iridescenceMap",c.iridescenceTexture)),c.iridescenceIor!==void 0&&(t.iridescenceIOR=c.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),c.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=c.iridescenceThicknessMinimum),c.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=c.iridescenceThicknessMaximum),c.iridescenceThicknessTexture!==void 0&&a.push(i.assignTexture(t,"iridescenceThicknessMap",c.iridescenceThicknessTexture)),Promise.all(a)}}class jA{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Pi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[];t.sheenColor=new ot(0,0,0),t.sheenRoughness=0,t.sheen=1;const c=s.extensions[this.name];if(c.sheenColorFactor!==void 0){const u=c.sheenColorFactor;t.sheenColor.setRGB(u[0],u[1],u[2],Ln)}return c.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=c.sheenRoughnessFactor),c.sheenColorTexture!==void 0&&a.push(i.assignTexture(t,"sheenColorMap",c.sheenColorTexture,fn)),c.sheenRoughnessTexture!==void 0&&a.push(i.assignTexture(t,"sheenRoughnessMap",c.sheenRoughnessTexture)),Promise.all(a)}}class YA{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Pi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],c=s.extensions[this.name];return c.transmissionFactor!==void 0&&(t.transmission=c.transmissionFactor),c.transmissionTexture!==void 0&&a.push(i.assignTexture(t,"transmissionMap",c.transmissionTexture)),Promise.all(a)}}class qA{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Pi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],c=s.extensions[this.name];t.thickness=c.thicknessFactor!==void 0?c.thicknessFactor:0,c.thicknessTexture!==void 0&&a.push(i.assignTexture(t,"thicknessMap",c.thicknessTexture)),t.attenuationDistance=c.attenuationDistance||1/0;const u=c.attenuationColor||[1,1,1];return t.attenuationColor=new ot().setRGB(u[0],u[1],u[2],Ln),Promise.all(a)}}class KA{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Pi}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=s.extensions[this.name];return t.ior=a.ior!==void 0?a.ior:1.5,Promise.resolve()}}class $A{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Pi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],c=s.extensions[this.name];t.specularIntensity=c.specularFactor!==void 0?c.specularFactor:1,c.specularTexture!==void 0&&a.push(i.assignTexture(t,"specularIntensityMap",c.specularTexture));const u=c.specularColorFactor||[1,1,1];return t.specularColor=new ot().setRGB(u[0],u[1],u[2],Ln),c.specularColorTexture!==void 0&&a.push(i.assignTexture(t,"specularColorMap",c.specularColorTexture,fn)),Promise.all(a)}}class ZA{constructor(e){this.parser=e,this.name=_t.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Pi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],c=s.extensions[this.name];return t.bumpScale=c.bumpFactor!==void 0?c.bumpFactor:1,c.bumpTexture!==void 0&&a.push(i.assignTexture(t,"bumpMap",c.bumpTexture)),Promise.all(a)}}class QA{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Pi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],c=s.extensions[this.name];return c.anisotropyStrength!==void 0&&(t.anisotropy=c.anisotropyStrength),c.anisotropyRotation!==void 0&&(t.anisotropyRotation=c.anisotropyRotation),c.anisotropyTexture!==void 0&&a.push(i.assignTexture(t,"anisotropyMap",c.anisotropyTexture)),Promise.all(a)}}class JA{constructor(e){this.parser=e,this.name=_t.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const a=s.extensions[this.name],c=t.options.ktx2Loader;if(!c){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,a.source,c)}}class ew{constructor(e){this.parser=e,this.name=_t.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,s=i.json,a=s.textures[e];if(!a.extensions||!a.extensions[t])return null;const c=a.extensions[t],u=s.images[c.source];let f=i.textureLoader;if(u.uri){const h=i.options.manager.getHandler(u.uri);h!==null&&(f=h)}return this.detectSupport().then(function(h){if(h)return i.loadTextureImage(e,c.source,f);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class tw{constructor(e){this.parser=e,this.name=_t.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,s=i.json,a=s.textures[e];if(!a.extensions||!a.extensions[t])return null;const c=a.extensions[t],u=s.images[c.source];let f=i.textureLoader;if(u.uri){const h=i.options.manager.getHandler(u.uri);h!==null&&(f=h)}return this.detectSupport().then(function(h){if(h)return i.loadTextureImage(e,c.source,f);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class nw{constructor(e){this.name=_t.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const s=i.extensions[this.name],a=this.parser.getDependency("buffer",s.buffer),c=this.parser.options.meshoptDecoder;if(!c||!c.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return a.then(function(u){const f=s.byteOffset||0,h=s.byteLength||0,m=s.count,g=s.byteStride,_=new Uint8Array(u,f,h);return c.decodeGltfBufferAsync?c.decodeGltfBufferAsync(m,g,_,s.mode,s.filter).then(function(y){return y.buffer}):c.ready.then(function(){const y=new ArrayBuffer(m*g);return c.decodeGltfBuffer(new Uint8Array(y),m,g,_,s.mode,s.filter),y})})}else return null}}class iw{constructor(e){this.name=_t.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const s=t.meshes[i.mesh];for(const h of s.primitives)if(h.mode!==ni.TRIANGLES&&h.mode!==ni.TRIANGLE_STRIP&&h.mode!==ni.TRIANGLE_FAN&&h.mode!==void 0)return null;const c=i.extensions[this.name].attributes,u=[],f={};for(const h in c)u.push(this.parser.getDependency("accessor",c[h]).then(m=>(f[h]=m,f[h])));return u.length<1?null:(u.push(this.parser.createNodeMesh(e)),Promise.all(u).then(h=>{const m=h.pop(),g=m.isGroup?m.children:[m],_=h[0].count,y=[];for(const M of g){const T=new lt,S=new Y,x=new vi,D=new Y(1,1,1),I=new py(M.geometry,M.material,_);for(let C=0;C<_;C++)f.TRANSLATION&&S.fromBufferAttribute(f.TRANSLATION,C),f.ROTATION&&x.fromBufferAttribute(f.ROTATION,C),f.SCALE&&D.fromBufferAttribute(f.SCALE,C),I.setMatrixAt(C,T.compose(S,x,D));for(const C in f)if(C==="_COLOR_0"){const G=f[C];I.instanceColor=new wf(G.array,G.itemSize,G.normalized)}else C!=="TRANSLATION"&&C!=="ROTATION"&&C!=="SCALE"&&M.geometry.setAttribute(C,f[C]);Xt.prototype.copy.call(I,M),this.parser.assignFinalMaterial(I),y.push(I)}return m.isGroup?(m.clear(),m.add(...y),m):y[0]}))}}const B_="glTF",ua=12,jg={JSON:1313821514,BIN:5130562};class rw{constructor(e){this.name=_t.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,ua),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==B_)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-ua,a=new DataView(e,ua);let c=0;for(;c<s;){const u=a.getUint32(c,!0);c+=4;const f=a.getUint32(c,!0);if(c+=4,f===jg.JSON){const h=new Uint8Array(e,ua+c,u);this.content=i.decode(h)}else if(f===jg.BIN){const h=ua+c;this.body=e.slice(h,h+u)}c+=u}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class sw{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=_t.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,s=this.dracoLoader,a=e.extensions[this.name].bufferView,c=e.extensions[this.name].attributes,u={},f={},h={};for(const m in c){const g=Pf[m]||m.toLowerCase();u[g]=c[m]}for(const m in e.attributes){const g=Pf[m]||m.toLowerCase();if(c[m]!==void 0){const _=i.accessors[e.attributes[m]],y=ao[_.componentType];h[g]=y.name,f[g]=_.normalized===!0}}return t.getDependency("bufferView",a).then(function(m){return new Promise(function(g,_){s.decodeDracoFile(m,function(y){for(const M in y.attributes){const T=y.attributes[M],S=f[M];S!==void 0&&(T.normalized=S)}g(y)},u,h,Ln,_)})})}}class ow{constructor(){this.name=_t.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class aw{constructor(){this.name=_t.KHR_MESH_QUANTIZATION}}class k_ extends Ma{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,a=e*s*3+s;for(let c=0;c!==s;c++)t[c]=i[a+c];return t}interpolate_(e,t,i,s){const a=this.resultBuffer,c=this.sampleValues,u=this.valueSize,f=u*2,h=u*3,m=s-t,g=(i-t)/m,_=g*g,y=_*g,M=e*h,T=M-h,S=-2*y+3*_,x=y-_,D=1-S,I=x-_+g;for(let C=0;C!==u;C++){const G=c[T+C+u],O=c[T+C+f]*m,U=c[M+C+u],j=c[M+C]*m;a[C]=D*G+I*O+S*U+x*j}return a}}const lw=new vi;class cw extends k_{interpolate_(e,t,i,s){const a=super.interpolate_(e,t,i,s);return lw.fromArray(a).normalize().toArray(a),a}}const ni={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},ao={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Yg={9728:Pn,9729:Yn,9984:Jg,9985:ic,9986:da,9987:$i},qg={33071:Lr,33648:dc,10497:fo},Od={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Pf={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Pr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},uw={CUBICSPLINE:void 0,LINEAR:va,STEP:_a},Bd={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function dw(o){return o.DefaultMaterial===void 0&&(o.DefaultMaterial=new Yf({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:er})),o.DefaultMaterial}function ss(o,e,t){for(const i in t.extensions)o[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function Ki(o,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(o.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function fw(o,e,t){let i=!1,s=!1,a=!1;for(let h=0,m=e.length;h<m;h++){const g=e[h];if(g.POSITION!==void 0&&(i=!0),g.NORMAL!==void 0&&(s=!0),g.COLOR_0!==void 0&&(a=!0),i&&s&&a)break}if(!i&&!s&&!a)return Promise.resolve(o);const c=[],u=[],f=[];for(let h=0,m=e.length;h<m;h++){const g=e[h];if(i){const _=g.POSITION!==void 0?t.getDependency("accessor",g.POSITION):o.attributes.position;c.push(_)}if(s){const _=g.NORMAL!==void 0?t.getDependency("accessor",g.NORMAL):o.attributes.normal;u.push(_)}if(a){const _=g.COLOR_0!==void 0?t.getDependency("accessor",g.COLOR_0):o.attributes.color;f.push(_)}}return Promise.all([Promise.all(c),Promise.all(u),Promise.all(f)]).then(function(h){const m=h[0],g=h[1],_=h[2];return i&&(o.morphAttributes.position=m),s&&(o.morphAttributes.normal=g),a&&(o.morphAttributes.color=_),o.morphTargetsRelative=!0,o})}function hw(o,e){if(o.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)o.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(o.morphTargetInfluences.length===t.length){o.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)o.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function pw(o){let e;const t=o.extensions&&o.extensions[_t.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+kd(t.attributes):e=o.indices+":"+kd(o.attributes)+":"+o.mode,o.targets!==void 0)for(let i=0,s=o.targets.length;i<s;i++)e+=":"+kd(o.targets[i]);return e}function kd(o){let e="";const t=Object.keys(o).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+o[t[i]]+";";return e}function If(o){switch(o){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function mw(o){return o.search(/\.jpe?g($|\?)/i)>0||o.search(/^data\:image\/jpeg/)===0?"image/jpeg":o.search(/\.webp($|\?)/i)>0||o.search(/^data\:image\/webp/)===0?"image/webp":o.search(/\.ktx2($|\?)/i)>0||o.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const gw=new lt;class _w{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new kA,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=-1,a=!1,c=-1;if(typeof navigator<"u"){const u=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(u)===!0;const f=u.match(/Version\/(\d+)/);s=i&&f?parseInt(f[1],10):-1,a=u.indexOf("Firefox")>-1,c=a?u.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&s<17||a&&c<98?this.textureLoader=new Ly(this.options.manager):this.textureLoader=new ky(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new I_(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,s=this.json,a=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(c){return c._markDefs&&c._markDefs()}),Promise.all(this._invokeAll(function(c){return c.beforeRoot&&c.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(c){const u={scene:c[0][s.scene||0],scenes:c[0],animations:c[1],cameras:c[2],asset:s.asset,parser:i,userData:{}};return ss(a,u,s),Ki(u,s),Promise.all(i._invokeAll(function(f){return f.afterRoot&&f.afterRoot(u)})).then(function(){for(const f of u.scenes)f.updateMatrixWorld();e(u)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,a=t.length;s<a;s++){const c=t[s].joints;for(let u=0,f=c.length;u<f;u++)e[c[u]].isBone=!0}for(let s=0,a=e.length;s<a;s++){const c=e[s];c.mesh!==void 0&&(this._addNodeRef(this.meshCache,c.mesh),c.skin!==void 0&&(i[c.mesh].isSkinnedMesh=!0)),c.camera!==void 0&&this._addNodeRef(this.cameraCache,c.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const s=i.clone(),a=(c,u)=>{const f=this.associations.get(c);f!=null&&this.associations.set(u,f);for(const[h,m]of c.children.entries())a(m,u.children[h])};return a(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const s=e(t[i]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let s=0;s<t.length;s++){const a=e(t[s]);a&&i.push(a)}return i}getDependency(e,t){const i=e+":"+t;let s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(a){return a.loadNode&&a.loadNode(t)});break;case"mesh":s=this._invokeOne(function(a){return a.loadMesh&&a.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(a){return a.loadBufferView&&a.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(a){return a.loadMaterial&&a.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(a){return a.loadTexture&&a.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(a){return a.loadAnimation&&a.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(a){return a!=this&&a.getDependency&&a.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(a,c){return i.getDependency(e,c)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[_t.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(a,c){i.load(ma.resolveURL(t.uri,s.path),a,void 0,function(){c(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const s=t.byteLength||0,a=t.byteOffset||0;return i.slice(a,a+s)})}loadAccessor(e){const t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const c=Od[s.type],u=ao[s.componentType],f=s.normalized===!0,h=new u(s.count*c);return Promise.resolve(new In(h,c,f))}const a=[];return s.bufferView!==void 0?a.push(this.getDependency("bufferView",s.bufferView)):a.push(null),s.sparse!==void 0&&(a.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),a.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(a).then(function(c){const u=c[0],f=Od[s.type],h=ao[s.componentType],m=h.BYTES_PER_ELEMENT,g=m*f,_=s.byteOffset||0,y=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,M=s.normalized===!0;let T,S;if(y&&y!==g){const x=Math.floor(_/y),D="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+x+":"+s.count;let I=t.cache.get(D);I||(T=new h(u,x*y,s.count*y/m),I=new cy(T,y/m),t.cache.add(D,I)),S=new Gf(I,f,_%y/m,M)}else u===null?T=new h(s.count*f):T=new h(u,_,s.count*f),S=new In(T,f,M);if(s.sparse!==void 0){const x=Od.SCALAR,D=ao[s.sparse.indices.componentType],I=s.sparse.indices.byteOffset||0,C=s.sparse.values.byteOffset||0,G=new D(c[1],I,s.sparse.count*x),O=new h(c[2],C,s.sparse.count*f);u!==null&&(S=new In(S.array.slice(),S.itemSize,S.normalized)),S.normalized=!1;for(let U=0,j=G.length;U<j;U++){const b=G[U];if(S.setX(b,O[U*f]),f>=2&&S.setY(b,O[U*f+1]),f>=3&&S.setZ(b,O[U*f+2]),f>=4&&S.setW(b,O[U*f+3]),f>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}S.normalized=M}return S})}loadTexture(e){const t=this.json,i=this.options,a=t.textures[e].source,c=t.images[a];let u=this.textureLoader;if(c.uri){const f=i.manager.getHandler(c.uri);f!==null&&(u=f)}return this.loadTextureImage(e,a,u)}loadTextureImage(e,t,i){const s=this,a=this.json,c=a.textures[e],u=a.images[t],f=(u.uri||u.bufferView)+":"+c.sampler;if(this.textureCache[f])return this.textureCache[f];const h=this.loadImageSource(t,i).then(function(m){m.flipY=!1,m.name=c.name||u.name||"",m.name===""&&typeof u.uri=="string"&&u.uri.startsWith("data:image/")===!1&&(m.name=u.uri);const _=(a.samplers||{})[c.sampler]||{};return m.magFilter=Yg[_.magFilter]||Yn,m.minFilter=Yg[_.minFilter]||$i,m.wrapS=qg[_.wrapS]||fo,m.wrapT=qg[_.wrapT]||fo,m.generateMipmaps=!m.isCompressedTexture&&m.minFilter!==Pn&&m.minFilter!==Yn,s.associations.set(m,{textures:e}),m}).catch(function(){return null});return this.textureCache[f]=h,h}loadImageSource(e,t){const i=this,s=this.json,a=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(g=>g.clone());const c=s.images[e],u=self.URL||self.webkitURL;let f=c.uri||"",h=!1;if(c.bufferView!==void 0)f=i.getDependency("bufferView",c.bufferView).then(function(g){h=!0;const _=new Blob([g],{type:c.mimeType});return f=u.createObjectURL(_),f});else if(c.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const m=Promise.resolve(f).then(function(g){return new Promise(function(_,y){let M=_;t.isImageBitmapLoader===!0&&(M=function(T){const S=new ln(T);S.needsUpdate=!0,_(S)}),t.load(ma.resolveURL(g,a.path),M,void 0,y)})}).then(function(g){return h===!0&&u.revokeObjectURL(f),Ki(g,c),g.userData.mimeType=c.mimeType||mw(c.uri),g}).catch(function(g){throw console.error("THREE.GLTFLoader: Couldn't load texture",f),g});return this.sourceCache[e]=m,m}assignTexture(e,t,i,s){const a=this;return this.getDependency("texture",i.index).then(function(c){if(!c)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(c=c.clone(),c.channel=i.texCoord),a.extensions[_t.KHR_TEXTURE_TRANSFORM]){const u=i.extensions!==void 0?i.extensions[_t.KHR_TEXTURE_TRANSFORM]:void 0;if(u){const f=a.associations.get(c);c=a.extensions[_t.KHR_TEXTURE_TRANSFORM].extendTexture(c,u),a.associations.set(c,f)}}return s!==void 0&&(c.colorSpace=s),e[t]=c,c})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const s=t.attributes.tangent===void 0,a=t.attributes.color!==void 0,c=t.attributes.normal===void 0;if(e.isPoints){const u="PointsMaterial:"+i.uuid;let f=this.cache.get(u);f||(f=new A_,wi.prototype.copy.call(f,i),f.color.copy(i.color),f.map=i.map,f.sizeAttenuation=!1,this.cache.add(u,f)),i=f}else if(e.isLine){const u="LineBasicMaterial:"+i.uuid;let f=this.cache.get(u);f||(f=new T_,wi.prototype.copy.call(f,i),f.color.copy(i.color),f.map=i.map,this.cache.add(u,f)),i=f}if(s||a||c){let u="ClonedMaterial:"+i.uuid+":";s&&(u+="derivative-tangents:"),a&&(u+="vertex-colors:"),c&&(u+="flat-shading:");let f=this.cache.get(u);f||(f=i.clone(),a&&(f.vertexColors=!0),c&&(f.flatShading=!0),s&&(f.normalScale&&(f.normalScale.y*=-1),f.clearcoatNormalScale&&(f.clearcoatNormalScale.y*=-1)),this.cache.add(u,f),this.associations.set(f,this.associations.get(i))),i=f}e.material=i}getMaterialType(){return Yf}loadMaterial(e){const t=this,i=this.json,s=this.extensions,a=i.materials[e];let c;const u={},f=a.extensions||{},h=[];if(f[_t.KHR_MATERIALS_UNLIT]){const g=s[_t.KHR_MATERIALS_UNLIT];c=g.getMaterialType(),h.push(g.extendParams(u,a,t))}else{const g=a.pbrMetallicRoughness||{};if(u.color=new ot(1,1,1),u.opacity=1,Array.isArray(g.baseColorFactor)){const _=g.baseColorFactor;u.color.setRGB(_[0],_[1],_[2],Ln),u.opacity=_[3]}g.baseColorTexture!==void 0&&h.push(t.assignTexture(u,"map",g.baseColorTexture,fn)),u.metalness=g.metallicFactor!==void 0?g.metallicFactor:1,u.roughness=g.roughnessFactor!==void 0?g.roughnessFactor:1,g.metallicRoughnessTexture!==void 0&&(h.push(t.assignTexture(u,"metalnessMap",g.metallicRoughnessTexture)),h.push(t.assignTexture(u,"roughnessMap",g.metallicRoughnessTexture))),c=this._invokeOne(function(_){return _.getMaterialType&&_.getMaterialType(e)}),h.push(Promise.all(this._invokeAll(function(_){return _.extendMaterialParams&&_.extendMaterialParams(e,u)})))}a.doubleSided===!0&&(u.side=Ai);const m=a.alphaMode||Bd.OPAQUE;if(m===Bd.BLEND?(u.transparent=!0,u.depthWrite=!1):(u.transparent=!1,m===Bd.MASK&&(u.alphaTest=a.alphaCutoff!==void 0?a.alphaCutoff:.5)),a.normalTexture!==void 0&&c!==us&&(h.push(t.assignTexture(u,"normalMap",a.normalTexture)),u.normalScale=new Mt(1,1),a.normalTexture.scale!==void 0)){const g=a.normalTexture.scale;u.normalScale.set(g,g)}if(a.occlusionTexture!==void 0&&c!==us&&(h.push(t.assignTexture(u,"aoMap",a.occlusionTexture)),a.occlusionTexture.strength!==void 0&&(u.aoMapIntensity=a.occlusionTexture.strength)),a.emissiveFactor!==void 0&&c!==us){const g=a.emissiveFactor;u.emissive=new ot().setRGB(g[0],g[1],g[2],Ln)}return a.emissiveTexture!==void 0&&c!==us&&h.push(t.assignTexture(u,"emissiveMap",a.emissiveTexture,fn)),Promise.all(h).then(function(){const g=new c(u);return a.name&&(g.name=a.name),Ki(g,a),t.associations.set(g,{materials:e}),a.extensions&&ss(s,g,a),g})}createUniqueName(e){const t=Pt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,s=this.primitiveCache;function a(u){return i[_t.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(u,t).then(function(f){return Kg(f,u,t)})}const c=[];for(let u=0,f=e.length;u<f;u++){const h=e[u],m=pw(h),g=s[m];if(g)c.push(g.promise);else{let _;h.extensions&&h.extensions[_t.KHR_DRACO_MESH_COMPRESSION]?_=a(h):_=Kg(new bi,h,t),s[m]={primitive:h,promise:_},c.push(_)}}return Promise.all(c)}loadMesh(e){const t=this,i=this.json,s=this.extensions,a=i.meshes[e],c=a.primitives,u=[];for(let f=0,h=c.length;f<h;f++){const m=c[f].material===void 0?dw(this.cache):this.getDependency("material",c[f].material);u.push(m)}return u.push(t.loadGeometries(c)),Promise.all(u).then(function(f){const h=f.slice(0,f.length-1),m=f[f.length-1],g=[];for(let y=0,M=m.length;y<M;y++){const T=m[y],S=c[y];let x;const D=h[y];if(S.mode===ni.TRIANGLES||S.mode===ni.TRIANGLE_STRIP||S.mode===ni.TRIANGLE_FAN||S.mode===void 0)x=a.isSkinnedMesh===!0?new dy(T,D):new qn(T,D),x.isSkinnedMesh===!0&&x.normalizeSkinWeights(),S.mode===ni.TRIANGLE_STRIP?x.geometry=Xg(x.geometry,c_):S.mode===ni.TRIANGLE_FAN&&(x.geometry=Xg(x.geometry,Tf));else if(S.mode===ni.LINES)x=new _y(T,D);else if(S.mode===ni.LINE_STRIP)x=new jf(T,D);else if(S.mode===ni.LINE_LOOP)x=new vy(T,D);else if(S.mode===ni.POINTS)x=new xy(T,D);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+S.mode);Object.keys(x.geometry.morphAttributes).length>0&&hw(x,a),x.name=t.createUniqueName(a.name||"mesh_"+e),Ki(x,a),S.extensions&&ss(s,x,S),t.assignFinalMaterial(x),g.push(x)}for(let y=0,M=g.length;y<M;y++)t.associations.set(g[y],{meshes:e,primitives:y});if(g.length===1)return a.extensions&&ss(s,g[0],a),g[0];const _=new ds;a.extensions&&ss(s,_,a),t.associations.set(_,{meshes:e});for(let y=0,M=g.length;y<M;y++)_.add(g[y]);return _})}loadCamera(e){let t;const i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new bn(Ux.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new Kf(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Ki(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let s=0,a=t.joints.length;s<a;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){const a=s.pop(),c=s,u=[],f=[];for(let h=0,m=c.length;h<m;h++){const g=c[h];if(g){u.push(g);const _=new lt;a!==null&&_.fromArray(a.array,h*16),f.push(_)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[h])}return new Wf(u,f)})}loadAnimation(e){const t=this.json,i=this,s=t.animations[e],a=s.name?s.name:"animation_"+e,c=[],u=[],f=[],h=[],m=[];for(let g=0,_=s.channels.length;g<_;g++){const y=s.channels[g],M=s.samplers[y.sampler],T=y.target,S=T.node,x=s.parameters!==void 0?s.parameters[M.input]:M.input,D=s.parameters!==void 0?s.parameters[M.output]:M.output;T.node!==void 0&&(c.push(this.getDependency("node",S)),u.push(this.getDependency("accessor",x)),f.push(this.getDependency("accessor",D)),h.push(M),m.push(T))}return Promise.all([Promise.all(c),Promise.all(u),Promise.all(f),Promise.all(h),Promise.all(m)]).then(function(g){const _=g[0],y=g[1],M=g[2],T=g[3],S=g[4],x=[];for(let D=0,I=_.length;D<I;D++){const C=_[D],G=y[D],O=M[D],U=T[D],j=S[D];if(C===void 0)continue;C.updateMatrix&&C.updateMatrix();const b=i._createAnimationTracks(C,G,O,U,j);if(b)for(let R=0;R<b.length;R++)x.push(b[R])}return new Cf(a,void 0,x)})}createNodeMesh(e){const t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(a){const c=i._getNodeRef(i.meshCache,s.mesh,a);return s.weights!==void 0&&c.traverse(function(u){if(u.isMesh)for(let f=0,h=s.weights.length;f<h;f++)u.morphTargetInfluences[f]=s.weights[f]}),c})}loadNode(e){const t=this.json,i=this,s=t.nodes[e],a=i._loadNodeShallow(e),c=[],u=s.children||[];for(let h=0,m=u.length;h<m;h++)c.push(i.getDependency("node",u[h]));const f=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([a,Promise.all(c),f]).then(function(h){const m=h[0],g=h[1],_=h[2];_!==null&&m.traverse(function(y){y.isSkinnedMesh&&y.bind(_,gw)});for(let y=0,M=g.length;y<M;y++)m.add(g[y]);return m})}_loadNodeShallow(e){const t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const a=t.nodes[e],c=a.name?s.createUniqueName(a.name):"",u=[],f=s._invokeOne(function(h){return h.createNodeMesh&&h.createNodeMesh(e)});return f&&u.push(f),a.camera!==void 0&&u.push(s.getDependency("camera",a.camera).then(function(h){return s._getNodeRef(s.cameraCache,a.camera,h)})),s._invokeAll(function(h){return h.createNodeAttachment&&h.createNodeAttachment(e)}).forEach(function(h){u.push(h)}),this.nodeCache[e]=Promise.all(u).then(function(h){let m;if(a.isBone===!0?m=new M_:h.length>1?m=new ds:h.length===1?m=h[0]:m=new Xt,m!==h[0])for(let g=0,_=h.length;g<_;g++)m.add(h[g]);if(a.name&&(m.userData.name=a.name,m.name=c),Ki(m,a),a.extensions&&ss(i,m,a),a.matrix!==void 0){const g=new lt;g.fromArray(a.matrix),m.applyMatrix4(g)}else a.translation!==void 0&&m.position.fromArray(a.translation),a.rotation!==void 0&&m.quaternion.fromArray(a.rotation),a.scale!==void 0&&m.scale.fromArray(a.scale);return s.associations.has(m)||s.associations.set(m,{}),s.associations.get(m).nodes=e,m}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],s=this,a=new ds;i.name&&(a.name=s.createUniqueName(i.name)),Ki(a,i),i.extensions&&ss(t,a,i);const c=i.nodes||[],u=[];for(let f=0,h=c.length;f<h;f++)u.push(s.getDependency("node",c[f]));return Promise.all(u).then(function(f){for(let m=0,g=f.length;m<g;m++)a.add(f[m]);const h=m=>{const g=new Map;for(const[_,y]of s.associations)(_ instanceof wi||_ instanceof ln)&&g.set(_,y);return m.traverse(_=>{const y=s.associations.get(_);y!=null&&g.set(_,y)}),g};return s.associations=h(a),a})}_createAnimationTracks(e,t,i,s,a){const c=[],u=e.name?e.name:e.uuid,f=[];Pr[a.path]===Pr.weights?e.traverse(function(_){_.morphTargetInfluences&&f.push(_.name?_.name:_.uuid)}):f.push(u);let h;switch(Pr[a.path]){case Pr.weights:h=_o;break;case Pr.rotation:h=vo;break;case Pr.position:case Pr.scale:h=xo;break;default:switch(i.itemSize){case 1:h=_o;break;case 2:case 3:default:h=xo;break}break}const m=s.interpolation!==void 0?uw[s.interpolation]:va,g=this._getArrayFromAccessor(i);for(let _=0,y=f.length;_<y;_++){const M=new h(f[_]+"."+Pr[a.path],t.array,g,m);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(M),c.push(M)}return c}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=If(t.constructor),s=new Float32Array(t.length);for(let a=0,c=t.length;a<c;a++)s[a]=t[a]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const s=this instanceof vo?cw:k_;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function vw(o,e,t){const i=e.attributes,s=new nr;if(i.POSITION!==void 0){const u=t.json.accessors[i.POSITION],f=u.min,h=u.max;if(f!==void 0&&h!==void 0){if(s.set(new Y(f[0],f[1],f[2]),new Y(h[0],h[1],h[2])),u.normalized){const m=If(ao[u.componentType]);s.min.multiplyScalar(m),s.max.multiplyScalar(m)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const a=e.targets;if(a!==void 0){const u=new Y,f=new Y;for(let h=0,m=a.length;h<m;h++){const g=a[h];if(g.POSITION!==void 0){const _=t.json.accessors[g.POSITION],y=_.min,M=_.max;if(y!==void 0&&M!==void 0){if(f.setX(Math.max(Math.abs(y[0]),Math.abs(M[0]))),f.setY(Math.max(Math.abs(y[1]),Math.abs(M[1]))),f.setZ(Math.max(Math.abs(y[2]),Math.abs(M[2]))),_.normalized){const T=If(ao[_.componentType]);f.multiplyScalar(T)}u.max(f)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(u)}o.boundingBox=s;const c=new Ci;s.getCenter(c.center),c.radius=s.min.distanceTo(s.max)/2,o.boundingSphere=c}function Kg(o,e,t){const i=e.attributes,s=[];function a(c,u){return t.getDependency("accessor",c).then(function(f){o.setAttribute(u,f)})}for(const c in i){const u=Pf[c]||c.toLowerCase();u in o.attributes||s.push(a(i[c],u))}if(e.indices!==void 0&&!o.index){const c=t.getDependency("accessor",e.indices).then(function(u){o.setIndex(u)});s.push(c)}return St.workingColorSpace!==Ln&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${St.workingColorSpace}" not supported.`),Ki(o,e),vw(o,e,t),Promise.all(s).then(function(){return e.targets!==void 0?fw(o,e.targets,t):o})}const xw=o=>{const e=new By(4210752);o.add(e);const t=new L_(16777215,.8);t.position.set(1,1,1),o.add(t)};class yw{constructor(e){this.canvas=e,this.scene=new ly,this.scene.background=new ot(0),this.camera=new bn(75,window.innerWidth/window.innerHeight,.1,1e3),this.camera.position.z=5,this.renderer=new OA({canvas:this.canvas,antialias:!1,alpha:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.object=null,this.mixer=null,this.clock=new Hy,this.currentAction=null,this.actions=[],this.loadingManager=new P_,this.loadingManager.onStart=()=>{this.showLoading(!0)},this.loadingManager.onLoad=()=>{this.showLoading(!1)},this.loadingManager.onProgress=(t,i,s)=>{console.log(`Loading: ${t}, ${i} / ${s}`)},this.loadingManager.onError=t=>{console.error(`Error loading: ${t}`)}}init(){xw(this.scene),this.loadObject(),this.animate(),window.addEventListener("scroll",this.handleScroll.bind(this)),window.addEventListener("resize",this.updateRendererSize.bind(this))}loadObject(){new BA(this.loadingManager).load("terbaru.glb",t=>{this.object=t.scene,this.object.scale.set(40,40,40),this.camera.position.set(0,45,30),this.scene.add(this.object),t.animations.length&&(this.mixer=new eS(this.object),this.actions=t.animations.map(i=>this.mixer.clipAction(i)),this.actions.length>0&&(this.currentAction=this.actions[0],this.currentAction.play()))},void 0,t=>{console.error("Failed to load object:",t)})}showLoading(e){const t=document.getElementById("loading-screen");e?t.style.display="flex":t.style.display="none"}handleScroll(){if(!this.object)return;const e=window.scrollY,t=document.documentElement.scrollHeight,i=window.innerHeight,a=e/(t-i)*Math.PI*2,c=2;this.object.position.x=Math.sin(a)*c,this.object.position.y=Math.cos(a-Math.PI/2)*c,this.object.rotation.y=a}updateRendererSize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}animate(){requestAnimationFrame(this.animate.bind(this));const e=this.clock.getDelta();this.mixer&&this.mixer.update(e),this.renderer.render(this.scene,this.camera)}cleanup(){window.removeEventListener("scroll",this.handleScroll),window.removeEventListener("resize",this.updateRendererSize)}}const Sw=()=>{const[o,e]=uc.useState(!1),t=()=>{e(!o)};return be.jsxs("div",{className:"navigation",children:[be.jsx("div",{className:`menuToggle ${o?"active":""}`,onClick:t,children:be.jsx("div",{className:"menu-content",children:be.jsx("i",{className:"fas fa-bars"})})}),be.jsx("div",{className:`menu ${o?"active":""}`,children:be.jsxs("ul",{children:[be.jsx("li",{style:{"--i":"0.1s"},children:be.jsxs("a",{href:"https://www.instagram.com/node_alvan/",children:[be.jsx("i",{className:"fab fa-instagram"})," Instagram"]})}),be.jsx("li",{style:{"--i":"0.2s"},children:be.jsxs("a",{href:"#",children:[be.jsx("i",{className:"fas fa-phone-alt"})," Call"]})}),be.jsx("li",{style:{"--i":"0.3s"},children:be.jsxs("a",{href:"https://www.universitasbumigora.ac.id/",children:[be.jsx("i",{className:"fas fa-university"})," University"]})})]})})]})},Mw=()=>{const o=uc.useRef(null);return uc.useEffect(()=>{const e=new yw(o.current);return e.init(),()=>{e.cleanup()}},[]),be.jsxs("div",{className:"stack",children:[be.jsxs("div",{className:"section section-1",children:[be.jsxs("div",{id:"loading-screen",children:[be.jsx("div",{id:"loading-spinner"}),be.jsx("p",{children:"Memuat data..."})]}),be.jsx("p",{id:"node-alvan",className:"animated-text",children:"Node Alvan"}),be.jsx("p",{className:"animated-text",children:"Scroll down to rotate the Camera"}),be.jsx(Sw,{}),be.jsx("div",{className:"audio-container",children:be.jsx("audio",{id:"audio",autoPlay:!0,loop:!0,children:be.jsx("source",{src:"music/Billie_Eilish_-_Hotline_Bling__instrumental_a_slowed__[_YouConvert.net.mp3",type:"audio/mp3"})})})]}),be.jsxs("div",{className:"section section-2",children:[be.jsx("h2",{className:"animated-text",children:"私について"}),be.jsx("h2",{className:"animated-text",children:"About Me"}),be.jsx("div",{className:"column",children:be.jsx("p",{className:"animated-text",children:"I am a passionate Mobile and Web Developer with experience in building responsive websites and user-friendly mobile applications. I specialize in creating innovative solutions that deliver seamless digital experiences."})}),be.jsx("div",{className:"column2",children:be.jsx("p",{className:"animated-text",children:"私は情熱を持ったモバイルおよびウェブ開発者であり、レスポンシブなウェブサイトやユーザーフレンドリーなモバイルアプリケーションの構築経験があります。シームレスなデジタル体験を提供する革新的なソリューションの開発を専門としています。"})})]}),be.jsxs("div",{className:"section section-3",children:[be.jsxs("div",{className:"profile-column",children:[be.jsx("h3",{children:"My Profile"}),be.jsx("p",{children:"This is a profile picture."}),be.jsx("div",{className:"card",children:be.jsxs("div",{className:"gallery",children:[be.jsx("img",{src:"album/fotoku.png",alt:"Profile"}),be.jsx("img",{src:"album/coding3.png",alt:"Profile"}),be.jsx("img",{src:"album/coding2.png",alt:"Profile"})]})})]}),be.jsx("div",{className:"experience-column",children:be.jsxs("div",{className:"container",children:[be.jsxs("h1",{children:["My ",be.jsx("span",{children:"Timeline"})]}),be.jsxs("div",{className:"timeline-block timeline-block-left",children:[be.jsx("div",{className:"marker"}),be.jsxs("div",{className:"timeline-content",children:[be.jsx("h3",{children:"March 2022 - April 2023"}),be.jsx("span",{children:"Flutter"}),be.jsx("p",{children:"Developing and maintaining web applications using Flutter and other related technologies. Collaborating with cross-functional teams, including designers, product managers, and other developers, to create high-quality products."})]})]}),be.jsxs("div",{className:"timeline-block timeline-block-right",children:[be.jsx("div",{className:"marker"}),be.jsxs("div",{className:"timeline-content",children:[be.jsx("h3",{children:"April 2023 - Sep 2024"}),be.jsx("span",{children:"React.Js"}),be.jsx("p",{children:"Developing and maintaining web applications using React.js and other related technologies. Collaborating with cross-functional teams, including designers, product managers, and other developers, to create high-quality products."})]})]})]})})]}),be.jsxs("div",{className:"section section-4",children:[be.jsx("h2",{className:"animated-text",children:"Contact Me"}),be.jsxs("form",{id:"contactForm",children:[be.jsxs("div",{className:"input-group",children:[be.jsx("label",{htmlFor:"name",children:"Name"}),be.jsx("input",{type:"text",id:"name",name:"name",placeholder:"Your Name",required:!0})]}),be.jsxs("div",{className:"input-group",children:[be.jsx("label",{htmlFor:"email",children:"Email"}),be.jsx("input",{type:"email",id:"email",name:"email",placeholder:"Your Email",required:!0})]}),be.jsxs("div",{className:"input-group",children:[be.jsx("label",{htmlFor:"message",children:"Message"}),be.jsx("textarea",{id:"message",name:"message",placeholder:"Your Message",rows:"4",required:!0})]}),be.jsx("button",{type:"submit",children:"Submit"})]}),be.jsx("p",{id:"confirmationMessage",className:"message"})]}),be.jsx("canvas",{ref:o,className:"canvas"})]})};w0.createRoot(document.getElementById("root")).render(be.jsx(uc.StrictMode,{children:be.jsx(Mw,{})}));
