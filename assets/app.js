var ET=Object.create;var I_=Object.defineProperty;var AT=Object.getOwnPropertyDescriptor;var wT=Object.getOwnPropertyNames;var RT=Object.getPrototypeOf,CT=Object.prototype.hasOwnProperty;var Wi=(e,t)=>()=>{try{return t||e((t={exports:{}}).exports,t),t.exports}catch(n){throw t=0,n}};var NT=(e,t,n,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of wT(t))!CT.call(e,s)&&s!==n&&I_(e,s,{get:()=>t[s],enumerable:!(i=AT(t,s))||i.enumerable});return e};var vs=(e,t,n)=>(n=e!=null?ET(RT(e)):{},NT(t||!e||!e.__esModule?I_(n,"default",{value:e,enumerable:!0}):n,e));var X_=Wi(Oe=>{"use strict";function Jd(e,t){var n=e.length;e.push(t);t:for(;0<n;){var i=n-1>>>1,s=e[i];if(0<ru(s,t))e[i]=t,e[n]=s,n=i;else break t}}function qi(e){return e.length===0?null:e[0]}function lu(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;t:for(var i=0,s=e.length,a=s>>>1;i<a;){var r=2*(i+1)-1,o=e[r],l=r+1,c=e[l];if(0>ru(o,n))l<s&&0>ru(c,o)?(e[i]=c,e[l]=n,i=l):(e[i]=o,e[r]=n,i=r);else if(l<s&&0>ru(c,n))e[i]=c,e[l]=n,i=l;else break t}}return t}function ru(e,t){var n=e.sortIndex-t.sortIndex;return n!==0?n:e.id-t.id}Oe.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(O_=performance,Oe.unstable_now=function(){return O_.now()}):(qd=Date,P_=qd.now(),Oe.unstable_now=function(){return qd.now()-P_});var O_,qd,P_,ys=[],Js=[],DT=1,mi=null,wn=3,Kd=!1,dl=!1,pl=!1,Qd=!1,F_=typeof setTimeout=="function"?setTimeout:null,H_=typeof clearTimeout=="function"?clearTimeout:null,B_=typeof setImmediate<"u"?setImmediate:null;function ou(e){for(var t=qi(Js);t!==null;){if(t.callback===null)lu(Js);else if(t.startTime<=e)lu(Js),t.sortIndex=t.expirationTime,Jd(ys,t);else break;t=qi(Js)}}function jd(e){if(pl=!1,ou(e),!dl)if(qi(ys)!==null)dl=!0,Or||(Or=!0,Ir());else{var t=qi(Js);t!==null&&$d(jd,t.startTime-e)}}var Or=!1,ml=-1,G_=5,V_=-1;function k_(){return Qd?!0:!(Oe.unstable_now()-V_<G_)}function Yd(){if(Qd=!1,Or){var e=Oe.unstable_now();V_=e;var t=!0;try{t:{dl=!1,pl&&(pl=!1,H_(ml),ml=-1),Kd=!0;var n=wn;try{e:{for(ou(e),mi=qi(ys);mi!==null&&!(mi.expirationTime>e&&k_());){var i=mi.callback;if(typeof i=="function"){mi.callback=null,wn=mi.priorityLevel;var s=i(mi.expirationTime<=e);if(e=Oe.unstable_now(),typeof s=="function"){mi.callback=s,ou(e),t=!0;break e}mi===qi(ys)&&lu(ys),ou(e)}else lu(ys);mi=qi(ys)}if(mi!==null)t=!0;else{var a=qi(Js);a!==null&&$d(jd,a.startTime-e),t=!1}}break t}finally{mi=null,wn=n,Kd=!1}t=void 0}}finally{t?Ir():Or=!1}}}var Ir;typeof B_=="function"?Ir=function(){B_(Yd)}:typeof MessageChannel<"u"?(Zd=new MessageChannel,z_=Zd.port2,Zd.port1.onmessage=Yd,Ir=function(){z_.postMessage(null)}):Ir=function(){F_(Yd,0)};var Zd,z_;function $d(e,t){ml=F_(function(){e(Oe.unstable_now())},t)}Oe.unstable_IdlePriority=5;Oe.unstable_ImmediatePriority=1;Oe.unstable_LowPriority=4;Oe.unstable_NormalPriority=3;Oe.unstable_Profiling=null;Oe.unstable_UserBlockingPriority=2;Oe.unstable_cancelCallback=function(e){e.callback=null};Oe.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G_=0<e?Math.floor(1e3/e):5};Oe.unstable_getCurrentPriorityLevel=function(){return wn};Oe.unstable_next=function(e){switch(wn){case 1:case 2:case 3:var t=3;break;default:t=wn}var n=wn;wn=t;try{return e()}finally{wn=n}};Oe.unstable_requestPaint=function(){Qd=!0};Oe.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=wn;wn=e;try{return t()}finally{wn=n}};Oe.unstable_scheduleCallback=function(e,t,n){var i=Oe.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?i+n:i):n=i,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=n+s,e={id:DT++,callback:t,priorityLevel:e,startTime:n,expirationTime:s,sortIndex:-1},n>i?(e.sortIndex=n,Jd(Js,e),qi(ys)===null&&e===qi(Js)&&(pl?(H_(ml),ml=-1):pl=!0,$d(jd,n-i))):(e.sortIndex=s,Jd(ys,e),dl||Kd||(dl=!0,Or||(Or=!0,Ir()))),e};Oe.unstable_shouldYield=k_;Oe.unstable_wrapCallback=function(e){var t=wn;return function(){var n=wn;wn=t;try{return e.apply(this,arguments)}finally{wn=n}}}});var q_=Wi((nL,W_)=>{"use strict";W_.exports=X_()});var av=Wi(Vt=>{"use strict";var np=Symbol.for("react.transitional.element"),LT=Symbol.for("react.portal"),UT=Symbol.for("react.fragment"),IT=Symbol.for("react.strict_mode"),OT=Symbol.for("react.profiler"),PT=Symbol.for("react.consumer"),BT=Symbol.for("react.context"),zT=Symbol.for("react.forward_ref"),FT=Symbol.for("react.suspense"),HT=Symbol.for("react.memo"),Q_=Symbol.for("react.lazy"),GT=Symbol.for("react.activity"),VT=Symbol.for("react.view_transition"),Y_=Symbol.iterator;function kT(e){return e===null||typeof e!="object"?null:(e=Y_&&e[Y_]||e["@@iterator"],typeof e=="function"?e:null)}var j_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$_=Object.assign,tv={};function Br(e,t,n){this.props=e,this.context=t,this.refs=tv,this.updater=n||j_}Br.prototype.isReactComponent={};Br.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Br.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ev(){}ev.prototype=Br.prototype;function ip(e,t,n){this.props=e,this.context=t,this.refs=tv,this.updater=n||j_}var sp=ip.prototype=new ev;sp.constructor=ip;$_(sp,Br.prototype);sp.isPureReactComponent=!0;var Z_=Array.isArray;function ep(){}var Ce={H:null,A:null,T:null,S:null},nv=Object.prototype.hasOwnProperty;function ap(e,t,n){var i=n.ref;return{$$typeof:np,type:e,key:t,ref:i!==void 0?i:null,props:n}}function XT(e,t){return ap(e.type,t,e.props)}function rp(e){return typeof e=="object"&&e!==null&&e.$$typeof===np}function WT(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var J_=/\/+/g;function tp(e,t){return typeof e=="object"&&e!==null&&e.key!=null?WT(""+e.key):t.toString(36)}function qT(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(ep,ep):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function Pr(e,t,n,i,s){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var r=!1;if(e===null)r=!0;else switch(a){case"bigint":case"string":case"number":r=!0;break;case"object":switch(e.$$typeof){case np:case LT:r=!0;break;case Q_:return r=e._init,Pr(r(e._payload),t,n,i,s)}}if(r)return s=s(e),r=i===""?"."+tp(e,0):i,Z_(s)?(n="",r!=null&&(n=r.replace(J_,"$&/")+"/"),Pr(s,t,n,"",function(c){return c})):s!=null&&(rp(s)&&(s=XT(s,n+(s.key==null||e&&e.key===s.key?"":(""+s.key).replace(J_,"$&/")+"/")+r)),t.push(s)),1;r=0;var o=i===""?".":i+":";if(Z_(e))for(var l=0;l<e.length;l++)i=e[l],a=o+tp(i,l),r+=Pr(i,t,n,a,s);else if(l=kT(e),typeof l=="function")for(e=l.call(e),l=0;!(i=e.next()).done;)i=i.value,a=o+tp(i,l++),r+=Pr(i,t,n,a,s);else if(a==="object"){if(typeof e.then=="function")return Pr(qT(e),t,n,i,s);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return r}function cu(e,t,n){if(e==null)return e;var i=[],s=0;return Pr(e,i,"","",function(a){return t.call(n,a,s++)}),i}function YT(e){if(e._status===-1){var t=e._result,n=t();n.then(function(i){(e._status===0||e._status===-1)&&(e._status=1,e._result=i,n.status===void 0&&(n.status="fulfilled",n.value=i))},function(i){(e._status===0||e._status===-1)&&(e._status=2,e._result=i,n.status===void 0&&(n.status="rejected",n.reason=i))}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var K_=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function iv(e){var t=Ce.T,n={};n.types=t!==null?t.types:null,Ce.T=n;try{var i=e(),s=Ce.S;s!==null&&s(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(ep,K_)}catch(a){K_(a)}finally{t!==null&&n.types!==null&&(t.types=n.types),Ce.T=t}}function sv(e){var t=Ce.T;if(t!==null){var n=t.types;n===null?t.types=[e]:n.indexOf(e)===-1&&n.push(e)}else iv(sv.bind(null,e))}var ZT={map:cu,forEach:function(e,t,n){cu(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return cu(e,function(){t++}),t},toArray:function(e){return cu(e,function(t){return t})||[]},only:function(e){if(!rp(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Vt.Activity=GT;Vt.Children=ZT;Vt.Component=Br;Vt.Fragment=UT;Vt.Profiler=OT;Vt.PureComponent=ip;Vt.StrictMode=IT;Vt.Suspense=FT;Vt.ViewTransition=VT;Vt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Ce;Vt.__COMPILER_RUNTIME={__proto__:null,c:function(e){return Ce.H.useMemoCache(e)}};Vt.addTransitionType=sv;Vt.cache=function(e){return function(){return e.apply(null,arguments)}};Vt.cacheSignal=function(){return null};Vt.cloneElement=function(e,t,n){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var i=$_({},e.props),s=e.key;if(t!=null)for(a in t.key!==void 0&&(s=""+t.key),t)!nv.call(t,a)||a==="key"||a==="__self"||a==="__source"||a==="ref"&&t.ref===void 0||(i[a]=t[a]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var r=Array(a),o=0;o<a;o++)r[o]=arguments[o+2];i.children=r}return ap(e.type,s,i)};Vt.createContext=function(e){return e={$$typeof:BT,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:PT,_context:e},e};Vt.createElement=function(e,t,n){var i,s={},a=null;if(t!=null)for(i in t.key!==void 0&&(a=""+t.key),t)nv.call(t,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(s[i]=t[i]);var r=arguments.length-2;if(r===1)s.children=n;else if(1<r){for(var o=Array(r),l=0;l<r;l++)o[l]=arguments[l+2];s.children=o}if(e&&e.defaultProps)for(i in r=e.defaultProps,r)s[i]===void 0&&(s[i]=r[i]);return ap(e,a,s)};Vt.createRef=function(){return{current:null}};Vt.forwardRef=function(e){return{$$typeof:zT,render:e}};Vt.isValidElement=rp;Vt.lazy=function(e){return{$$typeof:Q_,_payload:{_status:-1,_result:e},_init:YT}};Vt.memo=function(e,t){return{$$typeof:HT,type:e,compare:t===void 0?null:t}};Vt.startTransition=iv;Vt.unstable_useCacheRefresh=function(){return Ce.H.useCacheRefresh()};Vt.use=function(e){return Ce.H.use(e)};Vt.useActionState=function(e,t,n){return Ce.H.useActionState(e,t,n)};Vt.useCallback=function(e,t){return Ce.H.useCallback(e,t)};Vt.useContext=function(e){return Ce.H.useContext(e)};Vt.useDebugValue=function(){};Vt.useDeferredValue=function(e,t){return Ce.H.useDeferredValue(e,t)};Vt.useEffect=function(e,t){return Ce.H.useEffect(e,t)};Vt.useEffectEvent=function(e){return Ce.H.useEffectEvent(e)};Vt.useId=function(){return Ce.H.useId()};Vt.useImperativeHandle=function(e,t,n){return Ce.H.useImperativeHandle(e,t,n)};Vt.useInsertionEffect=function(e,t){return Ce.H.useInsertionEffect(e,t)};Vt.useLayoutEffect=function(e,t){return Ce.H.useLayoutEffect(e,t)};Vt.useMemo=function(e,t){return Ce.H.useMemo(e,t)};Vt.useOptimistic=function(e,t){return Ce.H.useOptimistic(e,t)};Vt.useReducer=function(e,t,n){return Ce.H.useReducer(e,t,n)};Vt.useRef=function(e){return Ce.H.useRef(e)};Vt.useState=function(e){return Ce.H.useState(e)};Vt.useSyncExternalStore=function(e,t,n){return Ce.H.useSyncExternalStore(e,t,n)};Vt.useTransition=function(){return Ce.H.useTransition()};Vt.version="19.3.0"});var gl=Wi((sL,rv)=>{"use strict";rv.exports=av()});var cv=Wi(Rn=>{"use strict";var JT=gl();function lv(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Ks(){}var On={d:{f:Ks,r:function(){throw Error(lv(522))},D:Ks,C:Ks,L:Ks,m:Ks,X:Ks,S:Ks,M:Ks},p:0,findDOMNode:null},KT=Symbol.for("react.portal"),QT=Symbol.for("react.recoverable"),ov=Symbol.for("react.optimistic_key");function jT(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:KT,key:i==null?null:i===ov?ov:""+i,children:e,containerInfo:t,implementation:n}}var _l=JT.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function uu(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}Rn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=On;Rn.browser=function(e){return{$$typeof:QT,_reason:e}};Rn.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(lv(299));return jT(e,t,null,n)};Rn.flushSync=function(e){var t=_l.T,n=On.p;try{if(_l.T=null,On.p=2,e)return e()}finally{_l.T=t,On.p=n,On.d.f()}};Rn.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,On.d.C(e,t))};Rn.prefetchDNS=function(e){typeof e=="string"&&On.d.D(e)};Rn.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var n=t.as,i=uu(n,t.crossOrigin),s=typeof t.integrity=="string"?t.integrity:void 0,a=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;n==="style"?On.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:i,integrity:s,fetchPriority:a}):n==="script"&&On.d.X(e,{crossOrigin:i,integrity:s,fetchPriority:a,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};Rn.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var n=uu(t.as,t.crossOrigin);On.d.M(e,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0})}}else t==null&&On.d.M(e)};Rn.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var n=t.as,i=uu(n,t.crossOrigin);On.d.L(e,n,{crossOrigin:i,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};Rn.preloadModule=function(e,t){if(typeof e=="string")if(t){var n=uu(t.as,t.crossOrigin);On.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0})}else On.d.m(e)};Rn.requestFormReset=function(e){On.d.r(e)};Rn.unstable_batchedUpdates=function(e,t){return e(t)};Rn.useFormState=function(e,t,n){return _l.H.useFormState(e,t,n)};Rn.useFormStatus=function(){return _l.H.useHostTransitionStatus()};Rn.version="19.3.0"});var fv=Wi((rL,hv)=>{"use strict";function uv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(uv)}catch(e){console.error(e)}}uv(),hv.exports=cv()});var jM=Wi(Wh=>{"use strict";var sn=q_(),Qy=gl(),$T=fv();function Q(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function jy(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function sc(e){for(var t=e,n=t;n&&!n.alternate;)t=n,(t.flags&4098)!==0&&(e=t.return),n=t.return;for(;t.return;)t=t.return;return t.tag===3?e:null}function $y(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function tx(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function dv(e){if(sc(e)!==e)throw Error(Q(188))}function tE(e){var t=e.alternate;if(!t){if(t=sc(e),t===null)throw Error(Q(188));return t!==e?null:e}for(var n=e,i=t;;){var s=n.return;if(s===null)break;var a=s.alternate;if(a===null){if(i=s.return,i!==null){n=i;continue}break}if(s.child===a.child){for(a=s.child;a;){if(a===n)return dv(s),e;if(a===i)return dv(s),t;a=a.sibling}throw Error(Q(188))}if(n.return!==i.return)n=s,i=a;else{for(var r=!1,o=s.child;o;){if(o===n){r=!0,n=s,i=a;break}if(o===i){r=!0,i=s,n=a;break}o=o.sibling}if(!r){for(o=a.child;o;){if(o===n){r=!0,n=a,i=s;break}if(o===i){r=!0,i=a,n=s;break}o=o.sibling}if(!r)throw Error(Q(189))}}if(n.alternate!==i)throw Error(Q(190))}if(n.tag!==3)throw Error(Q(188));return n.stateNode.current===n?e:t}function ex(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=ex(e),t!==null)return t;e=e.sibling}return null}function Zn(e,t,n,i,s,a){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&n(e,i,s,a)||(e.tag!==22||e.memoizedState===null)&&(t||e.tag!==5&&e.tag!==27)&&Zn(e.child,t,n,i,s,a))return!0;e=e.sibling}return!1}function dr(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function pv(e){var t=!1;for(e=e.return;e!==null&&(e.tag===4&&(t=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return t}function nx(e){var t=[null,null],n=dr(e);return n===null||ix(t,e,n.child,{foundSelf:!1}),t}function ix(e,t,n,i){for(;n!==null;){if(n===t)i.foundSelf=!0;else if(n.tag===5||n.tag===27||n.tag===6){if(i.foundSelf)return e[1]=n,!0;e[0]=n}else if((n.tag!==22||n.memoizedState===null)&&ix(e,t,n.child,i))return!0;n=n.sibling}return!1}function nn(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(Q(559))}}var Xr=null,zp=null;function eE(e,t,n){return e===n?!0:e===t?(Xr=e,!0):!1}function nE(e,t,n){return e===n?(zp=e,!1):e===t?(zp!==null&&(Xr=e),!0):!1}function mv(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function Fp(e,t,n){for(var i=0,s=e;s;s=n(s))i++;s=0;for(var a=t;a;a=n(a))s++;for(;0<i-s;)e=n(e),i--;for(;0<s-i;)t=n(t),s--;for(;i--;){if(e===t||t!==null&&e===t.alternate)return e;e=n(e),t=n(t)}return null}var we=Object.assign,iE=Symbol.for("react.element"),hu=Symbol.for("react.transitional.element"),Tl=Symbol.for("react.portal"),Wr=Symbol.for("react.fragment"),sx=Symbol.for("react.strict_mode"),Hp=Symbol.for("react.profiler"),ax=Symbol.for("react.consumer"),ji=Symbol.for("react.context"),Jm=Symbol.for("react.forward_ref"),Gp=Symbol.for("react.suspense"),Vp=Symbol.for("react.suspense_list"),Km=Symbol.for("react.memo"),ta=Symbol.for("react.lazy"),kp=Symbol.for("react.activity"),sE=Symbol.for("react.legacy_hidden"),aE=Symbol.for("react.memo_cache_sentinel"),Xp=Symbol.for("react.view_transition"),rE=Symbol.for("react.recoverable"),gv=Symbol.iterator;function vl(e){return e===null||typeof e!="object"?null:(e=gv&&e[gv]||e["@@iterator"],typeof e=="function"?e:null)}var oE=Symbol.for("react.client.reference");function Wp(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===oE?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Wr:return"Fragment";case Hp:return"Profiler";case sx:return"StrictMode";case Gp:return"Suspense";case Vp:return"SuspenseList";case kp:return"Activity";case Xp:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case Tl:return"Portal";case ji:return e.displayName||"Context";case ax:return(e._context.displayName||"Context")+".Consumer";case Jm:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Km:return t=e.displayName||null,t!==null?t:Wp(e.type)||"Memo";case ta:t=e._payload,e=e._init;try{return Wp(e(t))}catch{}}return null}var El=Array.isArray,It=Qy.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,me=$T.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,tr={pending:!1,data:null,method:null,action:null},qp=[],qr=-1;function as(e){return{current:e}}function xn(e){0>qr||(e.current=qp[qr],qp[qr]=null,qr--)}function Le(e,t){qr++,qp[qr]=e.current,e.current=t}var ns=as(null),Vl=as(null),ca=as(null),Qu=as(null);function ju(e,t){switch(Le(ca,t),Le(Vl,e),Le(ns,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Ny(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Ny(t),e=wM(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}xn(ns),Le(ns,e)}function fo(){xn(ns),xn(Vl),xn(ca)}function Yp(e){var t=e.memoizedState;t!==null&&(bo._currentValue=t.memoizedState,Le(Qu,e)),t=ns.current;var n=wM(t,e.type);t!==n&&(Le(Vl,e),Le(ns,n))}function $u(e){Vl.current===e&&(xn(ns),xn(Vl)),Qu.current===e&&(xn(Qu),bo._currentValue=tr)}var op,_v;function js(e){if(op===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);op=t&&t[1]||"",_v=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+op+e+_v}var lp=!1;function cp(e,t){if(!e||lp)return"";lp=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var p=function(){throw Error()};if(Object.defineProperty(p.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(p,[])}catch(_){var u=_}Reflect.construct(e,[],p)}else{try{p.call()}catch(_){u=_}p=!1;try{var d=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),p=!0,new e}finally{p&&(d!==void 0?Object.defineProperty(e.prototype,"props",d):delete e.prototype.props)}}}else{try{throw Error()}catch(_){u=_}(p=e())&&typeof p.catch=="function"&&p.catch(function(){})}}catch(_){if(_&&u&&typeof _.stack=="string")return[_.stack,u.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var a=i.DetermineComponentFrameRoot(),r=a[0],o=a[1];if(r&&o){var l=r.split(`
`),c=o.split(`
`);for(s=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;s<c.length&&!c[s].includes("DetermineComponentFrameRoot");)s++;if(i===l.length||s===c.length)for(i=l.length-1,s=c.length-1;1<=i&&0<=s&&l[i]!==c[s];)s--;for(;1<=i&&0<=s;i--,s--)if(l[i]!==c[s]){if(i!==1||s!==1)do if(i--,s--,0>s||l[i]!==c[s]){var h=`
`+l[i].replace(" at new "," at ");return e.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",e.displayName)),h}while(1<=i&&0<=s);break}}}finally{lp=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?js(n):""}function lE(e,t){switch(e.tag){case 26:case 27:case 5:return js(e.type);case 16:return js("Lazy");case 13:return e.child!==t&&t!==null?js("Suspense Fallback"):js("Suspense");case 19:return js("SuspenseList");case 0:case 15:return cp(e.type,!1);case 11:return cp(e.type.render,!1);case 1:return cp(e.type,!0);case 31:return js("Activity");case 30:return js("ViewTransition");default:return""}}function vv(e){try{var t="",n=null;do t+=lE(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var Zp=Object.prototype.hasOwnProperty,Qm=sn.unstable_scheduleCallback,up=sn.unstable_cancelCallback,cE=sn.unstable_shouldYield,uE=sn.unstable_requestPaint,si=sn.unstable_now,hE=sn.unstable_getCurrentPriorityLevel,rx=sn.unstable_ImmediatePriority,ox=sn.unstable_UserBlockingPriority,th=sn.unstable_NormalPriority,fE=sn.unstable_LowPriority,lx=sn.unstable_IdlePriority,dE=sn.log,pE=sn.unstable_setDisableYieldValue,ac=null,ai=null;function ia(e){if(typeof dE=="function"&&pE(e),ai&&typeof ai.setStrictMode=="function")try{ai.setStrictMode(ac,e)}catch{}}var ri=Math.clz32?Math.clz32:_E,mE=Math.log,gE=Math.LN2;function _E(e){return e>>>=0,e===0?32:31-(mE(e)/gE|0)|0}var fu=256,du=262144,pu=4194304;function Ja(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ah(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var s=0,a=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var o=i&134217727;return o!==0?(i=o&~a,i!==0?s=Ja(i):(r&=o,r!==0?s=Ja(r):n||(n=o&~e,n!==0&&(s=Ja(n))))):(o=i&~a,o!==0?s=Ja(o):r!==0?s=Ja(r):n||(n=i&~e,n!==0&&(s=Ja(n)))),s===0?0:t!==0&&t!==s&&(t&a)===0&&(a=s&-s,n=t&-t,a>=n||a===32&&(n&4194048)!==0)?t:s}function rc(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function cx(e,t){(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var i=31-ri(n),s=1<<i;t|=e[i],n&=~s}return t}function vE(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ux(){var e=pu;return pu<<=1,(pu&62914560)===0&&(pu=4194304),e}function hp(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function oc(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function yE(e,t,n,i,s,a){var r=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var o=e.entanglements,l=e.expirationTimes,c=e.hiddenUpdates;for(n=r&~n;0<n;){var h=31-ri(n),p=1<<h;o[h]=0,l[h]=-1;var u=c[h];if(u!==null)for(c[h]=null,h=0;h<u.length;h++){var d=u[h];d!==null&&(d.lane&=-536870913)}n&=~p}i!==0&&hx(e,i,0),a!==0&&s===0&&e.tag!==0&&(e.suspendedLanes|=a&~(r&~t))}function hx(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-ri(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function fx(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-ri(n),s=1<<i;s&t|e[i]&t&&(e[i]|=t),n&=~s}}function dx(e,t){var n=t&-t;return n=(n&42)!==0?1:jm(n),(n&(e.suspendedLanes|t))!==0?0:n}function jm(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function $m(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function px(){var e=me.p;return e!==0?e:(e=window.event,e===void 0?32:JM(e.type))}function yv(e,t){var n=me.p;try{return me.p=e,t()}finally{me.p=n}}var Ls=Math.random().toString(36).slice(2),vn="__reactFiber$"+Ls,Jn="__reactProps$"+Ls,Ao="__reactContainer$"+Ls,xv="__reactEvents$"+Ls,xE="__reactListeners$"+Ls,SE="__reactHandles$"+Ls,Sv="__reactResources$"+Ls,lc="__reactMarker$"+Ls,eh="__reactLoad$"+Ls;function wh(e){delete e[vn],delete e[Jn],delete e[xE],delete e[SE]}function ja(e){var t;if(t=e[vn])return t;for(var n=e.parentNode;n;){if(t=n[Ao]||n[vn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=zy(e);e!==null;){if(n=e[vn])return n;e=zy(e)}return t}e=n,n=e.parentNode}return null}function wo(e){if(e=e[vn]||e[Ao]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Al(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(Q(33))}function no(e){var t=e[Sv];return t||(t=e[Sv]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function hn(e){e[lc]=!0}function mx(e){e[eh]=void 0}var gx=new Set,_x={};function pr(e,t){po(e,t),po(e+"Capture",t)}function po(e,t){for(_x[e]=t,e=0;e<t.length;e++)gx.add(t[e])}var ME=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Mv={},bv={};function bE(e){return Zp.call(bv,e)?!0:Zp.call(Mv,e)?!1:ME.test(e)?bv[e]=!0:(Mv[e]=!0,!1)}var he=!1;function Tv(){var e=he;return he=!1,e}function Lu(e,t,n){if(bE(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,n)}}function mu(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,n)}}function xs(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,i)}}function ti(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function vx(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function TE(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var s=i.get,a=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(r){n=""+r,a.call(this,r)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(r){n=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Jp(e){if(!e._valueTracker){var t=vx(e)?"checked":"value";e._valueTracker=TE(e,t,""+e[t])}}function yx(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=vx(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}var EE=/[\n"\\]/g;function xi(e){return e.replace(EE,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Kp(e,t,n,i,s,a,r,o){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+ti(t)):e.value!==""+ti(t)&&(e.value=""+ti(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?r==="number"&&e.value==t?fp(e,ti(e.value)):fp(e,ti(t)):n!=null?fp(e,ti(n)):i!=null&&e.removeAttribute("value"),s==null&&a!=null&&(e.defaultChecked=!!a),s!=null&&(e.checked=s&&typeof s!="function"&&typeof s!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+ti(o):e.removeAttribute("name")}function xx(e,t,n,i,s,a,r,o){if(a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"&&(e.type=a),t!=null||n!=null){if(!(a!=="submit"&&a!=="reset"||t!=null)){Jp(e);return}n=n!=null?""+ti(n):"",t=t!=null?""+ti(t):n,o||t===e.value||(e.value=t),e.defaultValue=t}i=i??s,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=o?e.checked:!!i,e.defaultChecked=!!i,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r),Jp(e)}function fp(e,t){e.defaultValue!==""+t&&(e.defaultValue=""+t)}function io(e,t,n,i){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&i&&(e[n].defaultSelected=!0)}else{for(n=""+ti(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,i&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function Sx(e,t,n){if(t!=null&&(t=""+ti(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+ti(n):""}function Mx(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(Q(92));if(El(i)){if(1<i.length)throw Error(Q(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=ti(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),Jp(e)}function mo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var AE=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ev(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||AE.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function bx(e,t,n){if(t!=null&&typeof t!="object")throw Error(Q(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="",he=!0);for(var s in t)i=t[s],t.hasOwnProperty(s)&&n[s]!==i&&(Ev(e,s,i),he=!0)}else for(var a in t)t.hasOwnProperty(a)&&Ev(e,a,t[a])}function tg(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wE=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),RE=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Uu(e){return RE.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function $i(){}var Qp=null;function eg(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Yr=null,so=null;function Av(e){var t=wo(e);if(t&&(e=t.stateNode)){var n=e[Jn]||null;t:switch(e=t.stateNode,t.type){case"input":if(Kp(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+xi(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var s=i[Jn]||null;if(!s)throw Error(Q(90));Kp(i,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&yx(i)}break t;case"textarea":Sx(e,n.value,n.defaultValue);break t;case"select":t=n.value,t!=null&&io(e,!!n.multiple,t,!1)}}}var dp=!1;function Tx(e,t,n){if(dp)return e(t,n);dp=!0;try{var i=e(t);return i}finally{if(dp=!1,(Yr!==null||so!==null)&&(Gh(),Yr&&(t=Yr,e=so,so=Yr=null,Av(t),e)))for(t=0;t<e.length;t++)Av(e[t])}}function kl(e,t){var n=e.stateNode;if(n===null)return null;var i=n[Jn]||null;if(i===null)return null;n=i[t];t:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break t;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(Q(231,t,typeof n));return n}var As=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),jp=!1;if(As)try{zr={},Object.defineProperty(zr,"passive",{get:function(){jp=!0}}),window.addEventListener("test",zr,zr),window.removeEventListener("test",zr,zr)}catch{jp=!1}var zr,sa=null,ng=null,Iu=null;function Ex(){if(Iu)return Iu;var e,t=ng,n=t.length,i,s="value"in sa?sa.value:sa.textContent,a=s.length;for(e=0;e<n&&t[e]===s[e];e++);var r=n-e;for(i=1;i<=r&&t[n-i]===s[a-i];i++);return Iu=s.slice(e,1<i?1-i:void 0)}function Ou(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function gu(){return!0}function wv(){return!1}function Fn(e){function t(n,i,s,a,r){this._reactName=n,this._targetInst=s,this.type=i,this.nativeEvent=a,this.target=r,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(a):a[o]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?gu:wv,this.isPropagationStopped=wv,this}return we(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=gu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=gu)},persist:function(){},isPersistent:gu}),t}var Ta={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Rh=Fn(Ta),cc=we({},Ta,{view:0,detail:0}),CE=Fn(cc),pp,mp,yl,Ch=we({},cc,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ig,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==yl&&(yl&&e.type==="mousemove"?(pp=e.screenX-yl.screenX,mp=e.screenY-yl.screenY):mp=pp=0,yl=e),pp)},movementY:function(e){return"movementY"in e?e.movementY:mp}}),Rv=Fn(Ch),NE=we({},Ch,{dataTransfer:0}),DE=Fn(NE),LE=we({},cc,{relatedTarget:0}),gp=Fn(LE),UE=we({},Ta,{animationName:0,elapsedTime:0,pseudoElement:0}),IE=Fn(UE),OE=we({},Ta,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),PE=Fn(OE),BE=we({},Ta,{data:0}),Cv=Fn(BE),zE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},FE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},HE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function GE(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=HE[e])?!!t[e]:!1}function ig(){return GE}var VE=we({},cc,{key:function(e){if(e.key){var t=zE[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ou(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?FE[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ig,charCode:function(e){return e.type==="keypress"?Ou(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ou(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),kE=Fn(VE),XE=we({},Ch,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Nv=Fn(XE),WE=we({},Ta,{submitter:0}),qE=Fn(WE),YE=we({},cc,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ig}),ZE=Fn(YE),JE=we({},Ta,{propertyName:0,elapsedTime:0,pseudoElement:0}),KE=Fn(JE),QE=we({},Ch,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),jE=Fn(QE),$E=we({},Ta,{newState:0,oldState:0,source:0}),tA=Fn($E),eA=[9,13,27,32],sg=As&&"CompositionEvent"in window,Cl=null;As&&"documentMode"in document&&(Cl=document.documentMode);var nA=As&&"TextEvent"in window&&!Cl,Ax=As&&(!sg||Cl&&8<Cl&&11>=Cl),Dv=" ",Lv=!1;function wx(e,t){switch(e){case"keyup":return eA.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Rx(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Zr=!1;function iA(e,t){switch(e){case"compositionend":return Rx(t);case"keypress":return t.which!==32?null:(Lv=!0,Dv);case"textInput":return e=t.data,e===Dv&&Lv?null:e;default:return null}}function sA(e,t){if(Zr)return e==="compositionend"||!sg&&wx(e,t)?(e=Ex(),Iu=ng=sa=null,Zr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ax&&t.locale!=="ko"?null:t.data;default:return null}}var aA={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Uv(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!aA[e.type]:t==="textarea"}function Cx(e,t,n,i){Yr?so?so.push(i):so=[i]:Yr=i,t=bh(t,"onChange"),0<t.length&&(n=new Rh("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var Nl=null,Xl=null;function rA(e){TM(e,0)}function Nh(e){var t=Al(e);if(yx(t))return e}function Iv(e,t){if(e==="change")return t}var Nx=!1;As&&(As?(vu="oninput"in document,vu||(_p=document.createElement("div"),_p.setAttribute("oninput","return;"),vu=typeof _p.oninput=="function"),_u=vu):_u=!1,Nx=_u&&(!document.documentMode||9<document.documentMode));var _u,vu,_p;function Ov(){Nl&&(Nl.detachEvent("onpropertychange",Dx),Xl=Nl=null)}function Dx(e){if(e.propertyName==="value"&&Nh(Xl)){var t=[];Cx(t,Xl,e,eg(e)),Tx(rA,t)}}function oA(e,t,n){e==="focusin"?(Ov(),Nl=t,Xl=n,Nl.attachEvent("onpropertychange",Dx)):e==="focusout"&&Ov()}function lA(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Nh(Xl)}function cA(e,t){if(e==="click")return Nh(t)}function uA(e,t){if(e==="input"||e==="change")return Nh(t)}function hA(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var li=typeof Object.is=="function"?Object.is:hA;function Wl(e,t){if(li(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var s=n[i];if(!Zp.call(t,s)||!li(e[s],t[s]))return!1}return!0}function $p(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Pv(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Bv(e,t){var n=Pv(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=Pv(n)}}function Lx(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Lx(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ux(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=$p(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=$p(e.document)}return t}function ag(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var fA=As&&"documentMode"in document&&11>=document.documentMode,Jr=null,tm=null,Dl=null,em=!1;function zv(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;em||Jr==null||Jr!==$p(i)||(i=Jr,"selectionStart"in i&&ag(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Dl&&Wl(Dl,i)||(Dl=i,i=bh(tm,"onSelect"),0<i.length&&(t=new Rh("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=Jr)))}function Ya(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Kr={animationend:Ya("Animation","AnimationEnd"),animationiteration:Ya("Animation","AnimationIteration"),animationstart:Ya("Animation","AnimationStart"),transitionrun:Ya("Transition","TransitionRun"),transitionstart:Ya("Transition","TransitionStart"),transitioncancel:Ya("Transition","TransitionCancel"),transitionend:Ya("Transition","TransitionEnd")},vp={},Ix={};As&&(Ix=document.createElement("div").style,"AnimationEvent"in window||(delete Kr.animationend.animation,delete Kr.animationiteration.animation,delete Kr.animationstart.animation),"TransitionEvent"in window||delete Kr.transitionend.transition);function mr(e){if(vp[e])return vp[e];if(!Kr[e])return e;var t=Kr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ix)return vp[e]=t[n];return e}var Ox=mr("animationend"),Px=mr("animationiteration"),Bx=mr("animationstart"),dA=mr("transitionrun"),pA=mr("transitionstart"),mA=mr("transitioncancel"),zx=mr("transitionend"),Fx=new Map,nm="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");nm.push("scrollEnd");function Ii(e,t){Fx.set(e,t),pr(t,[e])}var gA=0;function ws(e,t){if(e.name!=null&&e.name!=="auto")return e.name;if(t.autoName!==null)return t.autoName;e=Ui.identifierPrefix;var n=gA++;return e="_"+e+"t_"+n.toString(32)+"_",t.autoName=e}function Fv(e){if(e==null||typeof e=="string")return e;var t=null,n=ho;if(n!==null)for(var i=0;i<n.length;i++){var s=e[n[i]];if(s!=null){if(s==="none")return"none";t=t==null?s:t+(" "+s)}}return t??e.default}function Us(e,t){return e=Fv(e),t=Fv(t),t==null?e==="auto"?null:e:t==="auto"?null:t}var nh=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},_i=[],Qr=0,rg=0;function Dh(){for(var e=Qr,t=rg=Qr=0;t<e;){var n=_i[t];_i[t++]=null;var i=_i[t];_i[t++]=null;var s=_i[t];_i[t++]=null;var a=_i[t];if(_i[t++]=null,i!==null&&s!==null){var r=i.pending;r===null?s.next=s:(s.next=r.next,r.next=s),i.pending=s}a!==0&&Hx(n,s,a)}}function Lh(e,t,n,i){_i[Qr++]=e,_i[Qr++]=t,_i[Qr++]=n,_i[Qr++]=i,rg|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function og(e,t,n,i){return Lh(e,t,n,i),ih(e)}function gr(e,t){return Lh(e,null,null,t),ih(e)}function Hx(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var s=!1,a=e.return;a!==null;)a.childLanes|=n,i=a.alternate,i!==null&&(i.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(s=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,s&&t!==null&&(s=31-ri(n),e=a.hiddenUpdates,i=e[s],i===null?e[s]=[t]:i.push(t),t.lane=n|536870912),a):null}function ih(e){if(50<Gl)throw Gl=0,Wu=null,Error(Q(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var jr={};function _A(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qn(e,t,n,i){return new _A(e,t,n,i)}function lg(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ts(e,t){var n=e.alternate;return n===null?(n=qn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&1206910976,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Gx(e,t){e.flags&=1206910978;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Pu(e,t,n,i,s,a){var r=0;if(i=e,typeof i=="function")lg(i)&&(r=1);else if(typeof i=="string")r=kw(e,n,ns.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(i){case kp:return e=qn(31,n,t,s),e.elementType=kp,e.lanes=a,e;case Wr:return er(n.children,s,a,t);case sx:r=8,s|=24;break;case Hp:return e=qn(12,n,t,s|2),e.elementType=Hp,e.lanes=a,e;case Gp:return e=qn(13,n,t,s),e.elementType=Gp,e.lanes=a,e;case Vp:return e=qn(19,n,t,s),e.elementType=Vp,e.lanes=a,e;case sE:case Xp:return e=s|32,e=qn(30,n,t,e),e.elementType=Xp,e.lanes=a,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case ji:r=10;break t;case ax:r=9;break t;case Jm:r=11;break t;case Km:r=14;break t;case ta:r=16,i=null;break t}r=29,n=Error(Q(130,e===null?"null":typeof e,"")),i=null}return t=qn(r,n,t,s),t.elementType=e,t.type=i,t.lanes=a,t}function er(e,t,n,i){return e=qn(7,e,i,t),e.lanes=n,e}function yp(e,t,n){return e=qn(6,e,null,t),e.lanes=n,e}function Vx(e){var t=qn(18,null,null,0);return t.stateNode=e,t}function xp(e,t,n){return t=qn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Hv=new WeakMap;function Si(e,t){if(typeof e=="object"&&e!==null){var n=Hv.get(e);return n!==void 0?n:(t={value:e,source:t,stack:vv(t)},Hv.set(e,t),t)}return{value:e,source:t,stack:vv(t)}}var $r=[],to=0,sh=null,ql=0,vi=[],yi=0,ya=null,ts=1,es="";function Ms(e,t){$r[to++]=ql,$r[to++]=sh,sh=e,ql=t}function kx(e,t,n){vi[yi++]=ts,vi[yi++]=es,vi[yi++]=ya,ya=e;var i=ts;e=es;var s=32-ri(i)-1;i&=~(1<<s),n+=1;var a=32-ri(t)+s;if(30<a){var r=s-s%5;a=(i&(1<<r)-1).toString(32),i>>=r,s-=r,ts=1<<32-ri(t)+s|n<<s|i,es=a+e}else ts=1<<a|n<<s|i,es=e}function Uh(e){e.return!==null&&(Ms(e,1),kx(e,1,0))}function cg(e){for(;e===sh;)sh=$r[--to],$r[to]=null,ql=$r[--to],$r[to]=null;for(;e===ya;)ya=vi[--yi],vi[yi]=null,es=vi[--yi],vi[yi]=null,ts=vi[--yi],vi[yi]=null}function Xx(e,t){vi[yi++]=ts,vi[yi++]=es,vi[yi++]=ya,ts=t.id,es=t.overflow,ya=e}var fn=null,De=null,$t=!1,ua=null,Mi=!1,im=Error(Q(519));function xa(e){var t=Error(Q(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Yl(Si(t,e)),im}function Gv(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[vn]=e,t[Jn]=i,n){case"dialog":te("cancel",t),te("close",t);break;case"iframe":case"object":case"embed":te("load",t);break;case"video":case"audio":for(n=0;n<Ql.length;n++)te(Ql[n],t);break;case"source":te("error",t);break;case"img":case"image":case"link":te("error",t),te("load",t);break;case"details":te("toggle",t);break;case"input":te("invalid",t),xx(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":te("invalid",t);break;case"textarea":te("invalid",t),Mx(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||AM(t.textContent,n)?(i.popover!=null&&(te("beforetoggle",t),te("toggle",t)),i.onScroll!=null&&te("scroll",t),i.onScrollEnd!=null&&te("scrollend",t),i.onClick!=null&&(t.onclick=$i),t=!0):t=!1,t||xa(e,!0)}function ah(e){for(fn=e.return;fn;)switch(fn.tag){case 5:case 31:case 13:Mi=!1;return;case 27:case 3:Mi=!0;return;default:fn=fn.return}}function Fr(e){if(e!==fn)return!1;if(!$t)return ah(e),$t=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Gm(e.type,e.memoizedProps)),n=!n),n&&De&&xa(e),ah(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(Q(317));De=By(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(Q(317));De=By(e)}else t===27?(t=De,Ea(e.type)?(e=Wm,Wm=null,De=e):De=t):De=fn?bi(e.stateNode.nextSibling):null;return!0}function ar(){De=fn=null,$t=!1}function Sp(){var e=ua;return e!==null&&(Xn===null?Xn=e:Xn.push.apply(Xn,e),ua=null),e}function Yl(e){ua===null?ua=[e]:ua.push(e)}var sm=as(null),_r=null,bs=null;function aa(e,t,n){Le(sm,t._currentValue),t._currentValue=n}function Es(e){e._currentValue=sm.current,xn(sm)}function Bu(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function am(e,t,n,i){var s=e.child;for(s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){var r=s.child;a=a.firstContext;t:for(;a!==null;){var o=a;a=s;for(var l=0;l<t.length;l++)if(o.context===t[l]){a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),Bu(a.return,n,e),i||(r=null);break t}a=o.next}}else if(s.tag===18){if(r=s.return,r===null)throw Error(Q(341));r.lanes|=n,a=r.alternate,a!==null&&(a.lanes|=n),Bu(r,n,e),r=null}else s.tag===13&&s.memoizedState!==null&&s.memoizedState.dehydrated===null?(s.lanes|=n,r=s.alternate,r!==null&&(r.lanes|=n),Bu(s.return,n,e),r=s.child,r=r!==null?r.sibling:null):r=s.child;if(r!==null)r.return=s;else for(r=s;r!==null;){if(r===e){r=null;break}if(s=r.sibling,s!==null){s.return=r.return,r=s;break}r=r.return}s=r}}function rr(e,t,n,i){e=null;for(var s=t,a=!1;s!==null;){if(!a){if((s.flags&524288)!==0)a=!0;else if((s.flags&262144)!==0)break}if(s.tag===10){var r=s.alternate;if(r===null)throw Error(Q(387));if(r=r.memoizedProps,r!==null){var o=s.type;li(s.pendingProps.value,r.value)||(e!==null?e.push(o):e=[o])}}else if(s===Qu.current){if(r=s.alternate,r===null)throw Error(Q(387));r.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(e!==null?e.push(bo):e=[bo])}s=s.return}return e!==null&&am(t,e,n,i),t.flags|=262144,e!==null}function rh(e){for(e=e.firstContext;e!==null;){if(!li(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function or(e){_r=e,bs=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function yn(e){return Wx(_r,e)}function yu(e,t){return _r===null&&or(e),Wx(e,t)}function Wx(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},bs===null){if(e===null)throw Error(Q(308));bs=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else bs=bs.next=t;return n}var vA=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},yA=sn.unstable_scheduleCallback,xA=sn.unstable_NormalPriority,Je={$$typeof:ji,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ug(){return{controller:new vA,data:new Map,refCount:0}}function uc(e){e.refCount--,e.refCount===0&&yA(xA,function(){e.controller.abort()})}function Vv(e,t){if((e.pendingLanes&4194048)!==0){var n=e.transitionTypes;for(n===null&&(n=e.transitionTypes=[]),e=0;e<t.length;e++){var i=t[e];n.indexOf(i)===-1&&n.push(i)}}}var wl=null;function SA(e){var t=e.transitionTypes;return e.transitionTypes=null,t}var Ll=null,rm=0,lr=0,ao=null;function MA(e,t){if(Ll===null){var n=Ll=[];rm=0,lr=zg(),ao={status:"pending",value:void 0,then:function(i){n.push(i)}}}return rm++,t.then(kv,kv),t}function kv(){if(--rm===0&&(wl=null,Ll!==null)){ao!==null&&(ao.status="fulfilled");var e=Ll;Ll=null,lr=0,ao=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function bA(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(s){n.push(s)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var s=0;s<n.length;s++)(0,n[s])(t)},function(s){for(i.status="rejected",i.reason=s,s=0;s<n.length;s++)(0,n[s])(void 0)}),i}var Xv=It.S;It.S=function(e,t){if(cM=si(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&MA(e,t),wl!==null)for(var n=xo;n!==null;)Vv(n,wl),n=n.next;if(n=e.types,n!==null){for(var i=xo;i!==null;)Vv(i,n),i=i.next;if(lr!==0){i=wl,i===null&&(i=wl=[]);for(var s=0;s<n.length;s++){var a=n[s];i.indexOf(a)===-1&&i.push(a)}}}Xv!==null&&Xv(e,t)};var nr=as(null);function hg(){var e=nr.current;return e!==null?e:Ae.pooledCache}function zu(e,t){t===null?Le(nr,nr.current):Le(nr,t.pool)}function qx(){var e=hg();return e===null?null:{parent:Je._currentValue,pool:e}}var Ro=Error(Q(460)),fg=Error(Q(474)),Ih=Error(Q(542)),oh={then:function(){}};function Wv(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Yx(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then($i,$i),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Yv(e),e===void 0&&!("reason"in t)?Error(Q(600)):e;default:if(typeof t.status=="string")t.then($i,$i);else{if(e=Ae,e!==null&&100<e.shellSuspendCounter)throw Error(Q(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var s=t;s.status="fulfilled",s.value=i}},function(i){if(t.status==="pending"){var s=t;s.status="rejected",s.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Yv(e),e}throw ir=t,Ro}}function Ka(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(ir=n,Ro):n}}var ir=null;function qv(){if(ir===null)throw Error(Q(459));var e=ir;return ir=null,e}function Yv(e){if(e===Ro||e===Ih)throw Error(Q(483))}var ro=null,Zl=0;function xu(e){var t=Zl;return Zl+=1,ro===null&&(ro=[]),Yx(ro,e,t)}function Qs(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Su(e,t){throw t.$$typeof===iE?Error(Q(525)):(e=Object.prototype.toString.call(t),Error(Q(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Zx(e){function t(f,m){if(e){var y=f.deletions;y===null?(f.deletions=[m],f.flags|=16):y.push(m)}}function n(f,m){if(!e)return null;for(;m!==null;)t(f,m),m=m.sibling;return null}function i(f){for(var m=new Map;f!==null;)f.key===null?m.set(f.index,f):m.set(f.key,f),f=f.sibling;return m}function s(f,m){return f=Ts(f,m),f.index=0,f.sibling=null,f}function a(f,m,y){return f.index=y,e?(y=f.alternate,y!==null?(y=y.index,y<m?(f.flags|=2,m):y):(f.flags|=134217730,m)):(f.flags|=1048576,m)}function r(f){return e&&f.alternate===null&&(f.flags|=134217730),f}function o(f,m,y,x){return m===null||m.tag!==6?(m=yp(y,f.mode,x),m.return=f,m):(m=s(m,y),m.return=f,m)}function l(f,m,y,x){var E=y.type;return E===Wr?(f=h(f,m,y.props.children,x,y.key),Qs(f,y),f):m!==null&&(m.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===ta&&Ka(E)===m.type)?(m=s(m,y.props),Qs(m,y),m.return=f,m):(m=Pu(y.type,y.key,y.props,null,f.mode,x),Qs(m,y),m.return=f,m)}function c(f,m,y,x){return m===null||m.tag!==4||m.stateNode.containerInfo!==y.containerInfo||m.stateNode.implementation!==y.implementation?(m=xp(y,f.mode,x),m.return=f,m):(m=s(m,y.children||[]),m.return=f,m)}function h(f,m,y,x,E){return m===null||m.tag!==7?(m=er(y,f.mode,x,E),m.return=f,m):(m=s(m,y),m.return=f,m)}function p(f,m,y){if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return m=yp(""+m,f.mode,y),m.return=f,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case hu:return y=Pu(m.type,m.key,m.props,null,f.mode,y),Qs(y,m),y.return=f,y;case Tl:return m=xp(m,f.mode,y),m.return=f,m;case ta:return m=Ka(m),p(f,m,y)}if(El(m)||vl(m))return m=er(m,f.mode,y,null),m.return=f,m;if(typeof m.then=="function")return p(f,xu(m),y);if(m.$$typeof===ji)return p(f,yu(f,m),y);Su(f,m)}return null}function u(f,m,y,x){var E=m!==null?m.key:null;if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return E!==null?null:o(f,m,""+y,x);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case hu:return y.key===E?l(f,m,y,x):null;case Tl:return y.key===E?c(f,m,y,x):null;case ta:return y=Ka(y),u(f,m,y,x)}if(El(y)||vl(y))return E!==null?null:h(f,m,y,x,null);if(typeof y.then=="function")return u(f,m,xu(y),x);if(y.$$typeof===ji)return u(f,m,yu(f,y),x);Su(f,y)}return null}function d(f,m,y,x,E){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return f=f.get(y)||null,o(m,f,""+x,E);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case hu:return f=f.get(x.key===null?y:x.key)||null,l(m,f,x,E);case Tl:return f=f.get(x.key===null?y:x.key)||null,c(m,f,x,E);case ta:return x=Ka(x),d(f,m,y,x,E)}if(El(x)||vl(x))return f=f.get(y)||null,h(m,f,x,E,null);if(typeof x.then=="function")return d(f,m,y,xu(x),E);if(x.$$typeof===ji)return d(f,m,y,yu(m,x),E);Su(m,x)}return null}function _(f,m,y,x){for(var E=null,A=null,v=m,T=m=0,I=null;v!==null&&T<y.length;T++){v.index>T?(I=v,v=null):I=v.sibling;var R=u(f,v,y[T],x);if(R===null){v===null&&(v=I);break}e&&v&&R.alternate===null&&t(f,v),m=a(R,m,T),A===null?E=R:A.sibling=R,A=R,v=I}if(T===y.length)return n(f,v),$t&&Ms(f,T),E;if(v===null){for(;T<y.length;T++)v=p(f,y[T],x),v!==null&&(m=a(v,m,T),A===null?E=v:A.sibling=v,A=v);return $t&&Ms(f,T),E}for(v=i(v);T<y.length;T++)I=d(v,f,T,y[T],x),I!==null&&(e&&(R=I.alternate,R!==null&&v.delete(R.key===null?T:R.key)),m=a(I,m,T),A===null?E=I:A.sibling=I,A=I);return e&&v.forEach(function(N){return t(f,N)}),$t&&Ms(f,T),E}function S(f,m,y,x){if(y==null)throw Error(Q(151));for(var E=null,A=null,v=m,T=m=0,I=null,R=y.next();v!==null&&!R.done;T++,R=y.next()){v.index>T?(I=v,v=null):I=v.sibling;var N=u(f,v,R.value,x);if(N===null){v===null&&(v=I);break}e&&v&&N.alternate===null&&t(f,v),m=a(N,m,T),A===null?E=N:A.sibling=N,A=N,v=I}if(R.done)return n(f,v),$t&&Ms(f,T),E;if(v===null){for(;!R.done;T++,R=y.next())R=p(f,R.value,x),R!==null&&(m=a(R,m,T),A===null?E=R:A.sibling=R,A=R);return $t&&Ms(f,T),E}for(v=i(v);!R.done;T++,R=y.next())R=d(v,f,T,R.value,x),R!==null&&(e&&(I=R.alternate,I!==null&&v.delete(I.key===null?T:I.key)),m=a(R,m,T),A===null?E=R:A.sibling=R,A=R);return e&&v.forEach(function(O){return t(f,O)}),$t&&Ms(f,T),E}function g(f,m,y,x){if(typeof y=="object"&&y!==null&&y.type===Wr&&y.key===null&&y.props.ref===void 0&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case hu:t:{for(var E=y.key;m!==null;){if(m.key===E){if(E=y.type,E===Wr){if(m.tag===7){n(f,m.sibling),x=s(m,y.props.children),Qs(x,y),x.return=f,f=x;break t}}else if(m.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===ta&&Ka(E)===m.type){n(f,m.sibling),x=s(m,y.props),Qs(x,y),x.return=f,f=x;break t}n(f,m);break}else t(f,m);m=m.sibling}y.type===Wr?(x=er(y.props.children,f.mode,x,y.key),Qs(x,y),x.return=f,f=x):(x=Pu(y.type,y.key,y.props,null,f.mode,x),Qs(x,y),x.return=f,f=x)}return r(f);case Tl:t:{for(E=y.key;m!==null;){if(m.key===E)if(m.tag===4&&m.stateNode.containerInfo===y.containerInfo&&m.stateNode.implementation===y.implementation){n(f,m.sibling),x=s(m,y.children||[]),x.return=f,f=x;break t}else{n(f,m);break}else t(f,m);m=m.sibling}x=xp(y,f.mode,x),x.return=f,f=x}return r(f);case ta:return y=Ka(y),g(f,m,y,x)}if(El(y))return _(f,m,y,x);if(vl(y)){if(E=vl(y),typeof E!="function")throw Error(Q(150));return y=E.call(y),S(f,m,y,x)}if(typeof y.then=="function")return g(f,m,xu(y),x);if(y.$$typeof===ji)return g(f,m,yu(f,y),x);Su(f,y)}return typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint"?(y=""+y,m!==null&&m.tag===6?(n(f,m.sibling),x=s(m,y),x.return=f,f=x):(n(f,m),x=yp(y,f.mode,x),x.return=f,f=x),r(f)):n(f,m)}return function(f,m,y,x){try{Zl=0;var E=g(f,m,y,x);return ro=null,E}catch(v){if(v===Ro||v===Ih)throw v;var A=qn(29,v,null,f.mode);return A.lanes=x,A.return=f,A}}}var cr=Zx(!0),Jx=Zx(!1),ea=!1;function dg(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function om(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ha(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function fa(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(pe&2)!==0){var s=i.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),i.pending=t,t=ih(e),Hx(e,null,n),t}return Lh(e,i,t,n),ih(e)}function Ul(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,fx(e,n)}}function Mp(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var s=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var r={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?s=a=r:a=a.next=r,n=n.next}while(n!==null);a===null?s=a=t:a=a.next=t}else s=a=t;n={baseState:i.baseState,firstBaseUpdate:s,lastBaseUpdate:a,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var lm=!1;function Il(){if(lm){var e=ao;if(e!==null)throw e}}function Ol(e,t,n,i){lm=!1;var s=e.updateQueue;ea=!1;var a=s.firstBaseUpdate,r=s.lastBaseUpdate,o=s.shared.pending;if(o!==null){s.shared.pending=null;var l=o,c=l.next;l.next=null,r===null?a=c:r.next=c,r=l;var h=e.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==r&&(o===null?h.firstBaseUpdate=c:o.next=c,h.lastBaseUpdate=l))}if(a!==null){var p=s.baseState;r=0,h=c=l=null,o=a;do{var u=o.lane&-536870913,d=u!==o.lane;if(d?(ae&u)===u:(i&u)===u){u!==0&&u===lr&&(lm=!0),h!==null&&(h=h.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var _=e,S=o;u=t;var g=n;switch(S.tag){case 1:if(_=S.payload,typeof _=="function"){p=_.call(g,p,u);break t}p=_;break t;case 3:_.flags=_.flags&-65537|128;case 0:if(_=S.payload,u=typeof _=="function"?_.call(g,p,u):_,u==null)break t;p=we({},p,u);break t;case 2:ea=!0}}u=o.callback,u!==null&&(e.flags|=64,d&&(e.flags|=8192),d=s.callbacks,d===null?s.callbacks=[u]:d.push(u))}else d={lane:u,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(c=h=d,l=p):h=h.next=d,r|=u;if(o=o.next,o===null){if(o=s.shared.pending,o===null)break;d=o,o=d.next,d.next=null,s.lastBaseUpdate=d,s.shared.pending=null}}while(!0);h===null&&(l=p),s.baseState=l,s.firstBaseUpdate=c,s.lastBaseUpdate=h,a===null&&(s.shared.lanes=0),ba|=r,e.lanes=r,e.memoizedState=p}}function Kx(e,t){if(typeof e!="function")throw Error(Q(191,e));e.call(t)}function Qx(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Kx(n[e],t)}var Sa=as(null),lh=as(0);function Zv(e,t){e=Ds,Le(lh,e),Le(Sa,t),Ds=e|t.baseLanes}function cm(){Le(lh,Ds),Le(Sa,Sa.current)}function pg(){Ds=lh.current,xn(Sa),xn(lh)}var bn=as(null),Cn=null;function da(e){var t=e.alternate;Le(Sn,Sn.current&1),Le(bn,e),Cn===null&&(t===null||Sa.current!==null||t.memoizedState!==null)&&(Cn=e)}function um(e){Le(Sn,Sn.current),Le(bn,e),Cn===null&&(Cn=e)}function jx(e){e.tag===22?(Le(Sn,Sn.current),Le(bn,e),Cn===null&&(Cn=e)):pa()}function pa(){Le(Sn,Sn.current),Le(bn,bn.current)}function ei(e){xn(bn),Cn===e&&(Cn=null),xn(Sn)}var Sn=as(0);function Jl(e,t){Le(bn,bn.current),Le(Sn,t)}function mg(e){xn(Sn),xn(bn),Cn===e&&(Cn=null)}function ch(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Xm(n)||Vg(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!=="independent"){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Rs=0,Xt=null,Te=null,Ze=null,uh=!1,oo=!1,ur=!1,hh=0,Kl=0,lo=null,TA=0;function Ve(){throw Error(Q(321))}function gg(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!li(e[n],t[n]))return!1;return!0}function _g(e,t,n,i,s,a){return Rs=a,Xt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,It.H=e===null||e.memoizedState===null?CS:NS,ur=!1,a=n(i,s),ur=!1,oo&&(a=tS(t,n,i,s)),$x(e),a}function $x(e){It.H=fh;var t=Te!==null&&Te.next!==null;if(Rs=0,Ze=Te=Xt=null,uh=!1,Kl=0,lo=null,t)throw Error(Q(300));e===null||Ke||(e=e.dependencies,e!==null&&rh(e)&&(Ke=!0))}function tS(e,t,n,i){Xt=e;var s=0;do{if(oo&&(lo=null),Kl=0,oo=!1,25<=s)throw Error(Q(301));if(s+=1,Ze=Te=null,e.updateQueue!=null){var a=e.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}It.H=LA,a=t(n,i)}while(oo);return a}function EA(){var e=It.H,t=e.useState()[0];return t=typeof t.then=="function"?hc(t):t,e=e.useState()[0],(Te!==null?Te.memoizedState:null)!==e&&(Xt.flags|=1024),t}function vg(){var e=hh!==0;return hh=0,e}function yg(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function xg(e){if(uh){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}uh=!1}Rs=0,Ze=Te=Xt=null,oo=!1,Kl=hh=0,lo=null}function zn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ze===null?Xt.memoizedState=Ze=e:Ze=Ze.next=e,Ze}function Xe(){if(Te===null){var e=Xt.alternate;e=e!==null?e.memoizedState:null}else e=Te.next;var t=Ze===null?Xt.memoizedState:Ze.next;if(t!==null)Ze=t,Te=e;else{if(e===null)throw Xt.alternate===null?Error(Q(467)):Error(Q(310));Te=e,e={memoizedState:Te.memoizedState,baseState:Te.baseState,baseQueue:Te.baseQueue,queue:Te.queue,next:null},Ze===null?Xt.memoizedState=Ze=e:Ze=Ze.next=e}return Ze}function Oh(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function hc(e){var t=Kl;return Kl+=1,lo===null&&(lo=[]),e=Yx(lo,e,t),t=Xt,(Ze===null?t.memoizedState:Ze.next)===null&&(t=t.alternate,It.H=t===null||t.memoizedState===null?CS:NS),e}function Ph(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return hc(e);if(e.$$typeof===rE)return;if(e.$$typeof===ji)return yn(e)}throw Error(Q(438,String(e)))}function Sg(e){var t=null,n=Xt.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=Xt.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(s){return s.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Oh(),Xt.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=aE;return t.index++,n}function Cs(e,t){return typeof t=="function"?t(e):t}function Fu(e){var t=Xe();return Mg(t,Te,e)}function Mg(e,t,n){var i=e.queue;if(i===null)throw Error(Q(311));i.lastRenderedReducer=n;var s=e.baseQueue,a=i.pending;if(a!==null){if(s!==null){var r=s.next;s.next=a.next,a.next=r}t.baseQueue=s=a,i.pending=null}if(a=e.baseState,s===null)e.memoizedState=a;else{t=s.next;var o=r=null,l=null,c=t,h=!1;do{var p=c.lane&-536870913;if(p!==c.lane?(ae&p)===p:(Rs&p)===p){var u=c.revertLane;if(u===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),p===lr&&(h=!0);else if((Rs&u)===u){c=c.next,u===lr&&(h=!0);continue}else p={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=p,r=a):l=l.next=p,Xt.lanes|=u,ba|=u;p=c.action,ur&&n(a,p),a=c.hasEagerState?c.eagerState:n(a,p)}else u={lane:p,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=u,r=a):l=l.next=u,Xt.lanes|=p,ba|=p;c=c.next}while(c!==null&&c!==t);if(l===null?r=a:l.next=o,!li(a,e.memoizedState)&&(Ke=!0,h&&(n=ao,n!==null)))throw n;e.memoizedState=a,e.baseState=r,e.baseQueue=l,i.lastRenderedState=a}return s===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function bp(e){var t=Xe(),n=t.queue;if(n===null)throw Error(Q(311));n.lastRenderedReducer=e;var i=n.dispatch,s=n.pending,a=t.memoizedState;if(s!==null){n.pending=null;var r=s=s.next;do a=e(a,r.action),r=r.next;while(r!==s);li(a,t.memoizedState)||(Ke=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,i]}function eS(e,t,n){var i=Xt,s=Xe(),a=$t;if(a){if(n===void 0)throw Error(Q(407));n=n()}else n=t();var r=!li((Te||s).memoizedState,n);if(r&&(s.memoizedState=n,Ke=!0),s=s.queue,bg(sS.bind(null,i,s,e),[e]),e=s.getSnapshot!==t||r||Ze!==null&&(Ze.memoizedState.tag&1)!==0,go(e?9:8,{destroy:void 0},iS.bind(null,i,s,n,t),null),e){if(i.flags|=2048,Ae===null)throw Error(Q(349));a||(Rs&127)!==0||nS(i,t,n)}return n}function nS(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Xt.updateQueue,t===null?(t=Oh(),Xt.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function iS(e,t,n,i){t.value=n,t.getSnapshot=i,aS(t)&&rS(e)}function sS(e,t,n){return n(function(){aS(t)&&rS(e)})}function aS(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!li(e,n)}catch{return!0}}function rS(e){var t=gr(e,2);t!==null&&Yn(t,e,2)}function hm(e){var t=zn();if(typeof e=="function"){var n=e;if(e=n(),ur){ia(!0);try{n()}finally{ia(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Cs,lastRenderedState:e},t}function oS(e,t,n,i){return e.baseState=n,Mg(e,Te,typeof i=="function"?i:Cs)}function AA(e,t,n,i,s){if(zh(e))throw Error(Q(485));if(e=t.action,e!==null){var a={payload:s,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){a.listeners.push(r)}};It.T!==null?n(!0):a.isTransition=!1,i(a),n=t.pending,n===null?(a.next=t.pending=a,lS(t,a)):(a.next=n.next,t.pending=n.next=a)}}function lS(e,t){var n=t.action,i=t.payload,s=e.state;if(t.isTransition){var a=It.T,r={};r.types=a!==null?a.types:null,It.T=r;try{var o=n(s,i),l=It.S;l!==null&&l(r,o),Jv(e,t,o)}catch(c){fm(e,t,c)}finally{a!==null&&r.types!==null&&(a.types=r.types),It.T=a}}else try{a=n(s,i),Jv(e,t,a)}catch(c){fm(e,t,c)}}function Jv(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){Kv(e,t,i)},function(i){return fm(e,t,i)}):Kv(e,t,n)}function Kv(e,t,n){t.status="fulfilled",t.value=n,cS(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,lS(e,n)))}function fm(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,cS(t),t=t.next;while(t!==i)}e.action=null}function cS(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function uS(e,t){return t}function Qv(e,t){if($t){var n=Ae.formState;if(n!==null){t:{var i=Xt;if($t){if(De){e:{for(var s=De,a=Mi;s.nodeType!==8;){if(!a){s=null;break e}if(s=bi(s.nextSibling),s===null){s=null;break e}}a=s.data,s=a==="F!"||a==="F"?s:null}if(s){De=bi(s.nextSibling),i=s.data==="F!";break t}}xa(i)}i=!1}i&&(t=n[0])}}return n=zn(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:uS,lastRenderedState:t},n.queue=i,n=AS.bind(null,Xt,i),i.dispatch=n,i=hm(!1),a=wg.bind(null,Xt,!1,i.queue),i=zn(),s={state:t,dispatch:null,action:e,pending:null},i.queue=s,n=AA.bind(null,Xt,s,a,n),s.dispatch=n,i.memoizedState=e,[t,n,!1]}function jv(e){var t=Xe();return hS(t,Te,e)}function hS(e,t,n){if(t=Mg(e,t,uS)[0],e=Fu(Cs)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=hc(t)}catch(r){throw r===Ro?Ih:r}else i=t;t=Xe();var s=t.queue,a=s.dispatch;return n!==t.memoizedState&&(Xt.flags|=2048,go(9,{destroy:void 0},wA.bind(null,s,n),null)),[i,a,e]}function wA(e,t){e.action=t}function $v(e){var t=Xe(),n=Te;if(n!==null)return hS(t,n,e);Xe(),t=t.memoizedState,n=Xe();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function go(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=Xt.updateQueue,t===null&&(t=Oh(),Xt.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function fS(){return Xe().memoizedState}function Hu(e,t,n,i){var s=zn();Xt.flags|=e,s.memoizedState=go(1|t,{destroy:void 0},n,i===void 0?null:i)}function Bh(e,t,n,i){var s=Xe();i=i===void 0?null:i;var a=s.memoizedState.inst;Te!==null&&i!==null&&gg(i,Te.memoizedState.deps)?s.memoizedState=go(t,a,n,i):(Xt.flags|=e,s.memoizedState=go(1|t,a,n,i))}function ty(e,t){Hu(8390656,8,e,t)}function bg(e,t){Bh(2048,8,e,t)}function RA(e){Xt.flags|=4;var t=Xt.updateQueue;if(t===null)t=Oh(),Xt.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function dS(e){var t=Xe().memoizedState;return RA({ref:t,nextImpl:e}),function(){if((pe&2)!==0)throw Error(Q(440));return t.impl.apply(void 0,arguments)}}function pS(e,t){return Bh(4,2,e,t)}function mS(e,t){return Bh(4,4,e,t)}function gS(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function _S(e,t,n){n=n!=null?n.concat([e]):null,Bh(4,4,gS.bind(null,t,e),n)}function Tg(){}function vS(e,t){var n=Xe();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&gg(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function yS(e,t){var n=Xe();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&gg(t,i[1]))return i[0];if(i=e(),ur){ia(!0);try{e()}finally{ia(!1)}}return n.memoizedState=[i,t],i}function Eg(e,t,n){return n===void 0||(Rs&1073741824)!==0&&(ae&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=hM(),Xt.lanes|=e,ba|=e,n)}function xS(e,t,n,i){return li(n,t)?n:Sa.current!==null?(e=Eg(e,n,i),li(e,t)||(Ke=!0),e):(Rs&106)===0||(Rs&1073741824)!==0&&(ae&261930)===0?(Ke=!0,e.memoizedState=n):(e=hM(),Xt.lanes|=e,ba|=e,t)}function SS(e,t,n,i,s){var a=me.p;me.p=a!==0&&8>a?a:8;var r=It.T,o={};o.types=r!==null?r.types:null,It.T=o,wg(e,!1,t,n);try{var l=s(),c=It.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var h=bA(l,i);Pl(e,t,h,oi(e))}else Pl(e,t,i,oi(e))}catch(p){Pl(e,t,{then:function(){},status:"rejected",reason:p},oi())}finally{me.p=a,r!==null&&o.types!==null&&(r.types=o.types),It.T=r}}function CA(){}function dm(e,t,n,i){if(e.tag!==5)throw Error(Q(476));var s=MS(e).queue;SS(e,s,t,tr,n===null?CA:function(){return bS(e),n(i)})}function MS(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:tr,baseState:tr,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Cs,lastRenderedState:tr},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Cs,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function bS(e){var t=MS(e);t.next===null&&(t=e.alternate.memoizedState),Pl(e,t.next.queue,{},oi())}function Ag(){return yn(bo)}function TS(){return Xe().memoizedState}function ES(){return Xe().memoizedState}function NA(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=oi();e=ha(n);var i=fa(t,e,n);i!==null&&(Yn(i,t,n),Ul(i,t,n)),t={cache:ug()},e.payload=t;return}t=t.return}}function DA(e,t,n){var i=oi();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},zh(e)?wS(t,n):(n=og(e,t,n,i),n!==null&&(Yn(n,e,i),RS(n,t,i)))}function AS(e,t,n){var i=oi();Pl(e,t,n,i)}function Pl(e,t,n,i){var s={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(zh(e))wS(t,s);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var r=t.lastRenderedState,o=a(r,n);if(s.hasEagerState=!0,s.eagerState=o,li(o,r))return Lh(e,t,s,0),Ae===null&&Dh(),!1}catch{}if(n=og(e,t,s,i),n!==null)return Yn(n,e,i),RS(n,t,i),!0}return!1}function wg(e,t,n,i){if(i={lane:2,revertLane:zg(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},zh(e)){if(t)throw Error(Q(479))}else t=og(e,n,i,2),t!==null&&Yn(t,e,2)}function zh(e){var t=e.alternate;return e===Xt||t!==null&&t===Xt}function wS(e,t){oo=uh=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function RS(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,fx(e,n)}}var fh={readContext:yn,use:Ph,useCallback:Ve,useContext:Ve,useEffect:Ve,useImperativeHandle:Ve,useLayoutEffect:Ve,useInsertionEffect:Ve,useMemo:Ve,useReducer:Ve,useRef:Ve,useState:Ve,useDebugValue:Ve,useDeferredValue:Ve,useTransition:Ve,useSyncExternalStore:Ve,useId:Ve,useHostTransitionStatus:Ve,useFormState:Ve,useActionState:Ve,useOptimistic:Ve,useMemoCache:Ve,useCacheRefresh:Ve,useEffectEvent:Ve},CS={readContext:yn,use:Ph,useCallback:function(e,t){return zn().memoizedState=[e,t===void 0?null:t],e},useContext:yn,useEffect:ty,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Hu(4194308,4,gS.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Hu(4194308,4,e,t)},useInsertionEffect:function(e,t){Hu(4,2,e,t)},useMemo:function(e,t){var n=zn();t=t===void 0?null:t;var i=e();if(ur){ia(!0);try{e()}finally{ia(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=zn();if(n!==void 0){var s=n(t);if(ur){ia(!0);try{n(t)}finally{ia(!1)}}}else s=t;return i.memoizedState=i.baseState=s,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:s},i.queue=e,e=e.dispatch=DA.bind(null,Xt,e),[i.memoizedState,e]},useRef:function(e){var t=zn();return e={current:e},t.memoizedState=e},useState:function(e){e=hm(e);var t=e.queue,n=AS.bind(null,Xt,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Tg,useDeferredValue:function(e,t){var n=zn();return Eg(n,e,t)},useTransition:function(){var e=hm(!1);return e=SS.bind(null,Xt,e.queue,!0,!1),zn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=Xt,s=zn();if($t){if(n===void 0)throw Error(Q(407));n=n()}else{if(n=t(),Ae===null)throw Error(Q(349));(ae&127)!==0||nS(i,t,n)}s.memoizedState=n;var a={value:n,getSnapshot:t};return s.queue=a,ty(sS.bind(null,i,a,e),[e]),i.flags|=2048,go(9,{destroy:void 0},iS.bind(null,i,a,n,t),null),n},useId:function(){var e=zn(),t=Ae.identifierPrefix;if($t){var n=es,i=ts;n=(i&~(1<<32-ri(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=hh++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=TA++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Ag,useFormState:Qv,useActionState:Qv,useOptimistic:function(e){var t=zn();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=wg.bind(null,Xt,!0,n),n.dispatch=t,[e,t]},useMemoCache:Sg,useCacheRefresh:function(){return zn().memoizedState=NA.bind(null,Xt)},useEffectEvent:function(e){var t=zn(),n={impl:e};return t.memoizedState=n,function(){if((pe&2)!==0)throw Error(Q(440));return n.impl.apply(void 0,arguments)}}},NS={readContext:yn,use:Ph,useCallback:vS,useContext:yn,useEffect:bg,useImperativeHandle:_S,useInsertionEffect:pS,useLayoutEffect:mS,useMemo:yS,useReducer:Fu,useRef:fS,useState:function(){return Fu(Cs)},useDebugValue:Tg,useDeferredValue:function(e,t){var n=Xe();return xS(n,Te.memoizedState,e,t)},useTransition:function(){var e=Fu(Cs)[0],t=Xe().memoizedState;return[typeof e=="boolean"?e:hc(e),t]},useSyncExternalStore:eS,useId:TS,useHostTransitionStatus:Ag,useFormState:jv,useActionState:jv,useOptimistic:function(e,t){var n=Xe();return oS(n,Te,e,t)},useMemoCache:Sg,useCacheRefresh:ES,useEffectEvent:dS},LA={readContext:yn,use:Ph,useCallback:vS,useContext:yn,useEffect:bg,useImperativeHandle:_S,useInsertionEffect:pS,useLayoutEffect:mS,useMemo:yS,useReducer:bp,useRef:fS,useState:function(){return bp(Cs)},useDebugValue:Tg,useDeferredValue:function(e,t){var n=Xe();return Te===null?Eg(n,e,t):xS(n,Te.memoizedState,e,t)},useTransition:function(){var e=bp(Cs)[0],t=Xe().memoizedState;return[typeof e=="boolean"?e:hc(e),t]},useSyncExternalStore:eS,useId:TS,useHostTransitionStatus:Ag,useFormState:$v,useActionState:$v,useOptimistic:function(e,t){var n=Xe();return Te!==null?oS(n,Te,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Sg,useCacheRefresh:ES,useEffectEvent:dS};function Tp(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:we({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var pm={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=oi(),s=ha(i);s.payload=t,n!=null&&(s.callback=n),t=fa(e,s,i),t!==null&&(Yn(t,e,i),Ul(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=oi(),s=ha(i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=fa(e,s,i),t!==null&&(Yn(t,e,i),Ul(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=oi(),i=ha(n);i.tag=2,t!=null&&(i.callback=t),t=fa(e,i,n),t!==null&&(Yn(t,e,n),Ul(t,e,n))}};function ey(e,t,n,i,s,a,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,a,r):t.prototype&&t.prototype.isPureReactComponent?!Wl(n,i)||!Wl(s,a):!0}function ny(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&pm.enqueueReplaceState(t,t.state,null)}function hr(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=we({},n));for(var s in e)n[s]===void 0&&(n[s]=e[s])}return n}function DS(e){nh(e)}function LS(e){console.error(e)}function US(e){nh(e)}function dh(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function iy(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function mm(e,t,n){return n=ha(n),n.tag=3,n.payload={element:null},n.callback=function(){dh(e,t)},n}function IS(e){return e=ha(e),e.tag=3,e}function OS(e,t,n,i){var s=n.type.getDerivedStateFromError;if(typeof s=="function"){var a=i.value;e.payload=function(){return s(a)},e.callback=function(){iy(t,n,i)}}var r=n.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){iy(t,n,i),typeof s!="function"&&(ma===null?ma=new Set([this]):ma.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function UA(e,t,n,i,s){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&rr(t,n,s,!0),n=bn.current,n!==null){switch(n.tag){case 31:case 13:case 19:return Cn===null?Sh():n.alternate===null&&ke===0&&(ke=3),n.flags&=-257,n.flags|=65536,n.lanes=s,i===oh?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),Dp(e,i,s)),!1;case 22:return n.flags|=65536,i===oh?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),Dp(e,i,s)),!1}throw Error(Q(435,n.tag))}return Dp(e,i,s),Sh(),!1}if($t)return t=bn.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=s,i!==im&&(e=Error(Q(422),{cause:i}),Yl(Si(e,n)))):(i!==im&&(t=Error(Q(423),{cause:i}),Yl(Si(t,n))),e=e.current.alternate,e.flags|=65536,s&=-s,e.lanes|=s,i=Si(i,n),s=mm(e.stateNode,i,s),Mp(e,s),ke!==4&&(ke=2)),!1;var a=Error(Q(520),{cause:i});if(a=Si(a,n),Hl===null?Hl=[a]:Hl.push(a),ke!==4&&(ke=2),t===null)return!0;i=Si(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=s&-s,n.lanes|=e,e=mm(n.stateNode,i,e),Mp(n,e),!1;case 1:if(t=n.type,a=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||a!==null&&typeof a.componentDidCatch=="function"&&(ma===null||!ma.has(a))))return n.flags|=65536,s&=-s,n.lanes|=s,s=IS(s),OS(s,e,n,i),Mp(n,s),!1;break;case 22:if(n.memoizedState!==null)return n.flags|=65536,!1}n=n.return}while(n!==null);return!1}var Rg=Error(Q(461)),Ke=!1;function en(e,t,n,i){t.child=e===null?Jx(t,null,n,i):cr(t,e.child,n,i)}function sy(e,t,n,i,s){n=n.render;var a=t.ref;if("ref"in i){var r={};for(var o in i)o!=="ref"&&(r[o]=i[o])}else r=i;return or(t),i=_g(e,t,n,r,a,s),o=vg(),e!==null&&!Ke?(yg(e,t,s),Ns(e,t,s)):($t&&o&&Uh(t),t.flags|=1,en(e,t,i,s),t.child)}function ay(e,t,n,i,s){if(e===null){var a=n.type;return typeof a=="function"&&!lg(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,PS(e,t,a,i,s)):(e=Pu(n.type,null,i,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Ng(e,s)){var r=a.memoizedProps;if(n=n.compare,n=n!==null?n:Wl,n(r,i)&&e.ref===t.ref)return Ns(e,t,s)}return t.flags|=1,e=Ts(a,i),e.ref=t.ref,e.return=t,t.child=e}function PS(e,t,n,i,s){if(e!==null){var a=e.memoizedProps;if(Wl(a,i)&&e.ref===t.ref)if(Ke=!1,t.pendingProps=i=a,Ng(e,s))(e.flags&131072)!==0&&(Ke=!0);else return t.lanes=e.lanes,Ns(e,t,s)}return gm(e,t,n,i,s)}function BS(e,t,n,i){var s=i.children,a=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(a=a!==null?a.baseLanes|n:n,e!==null){for(i=t.child=e.child,s=0;i!==null;)s=s|i.lanes|i.childLanes,i=i.sibling;i=s&~a}else i=0,t.child=null;return ry(e,t,a,n,i)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&zu(t,a!==null?a.cachePool:null),a!==null?Zv(t,a):cm(),jx(t);else return i=t.lanes=536870912,ry(e,t,a!==null?a.baseLanes|n:n,n,i)}else a!==null?(zu(t,a.cachePool),Zv(t,a),pa(),t.memoizedState=null):(e!==null&&zu(t,null),cm(),pa());return en(e,t,s,n),t.child}function Bl(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function ry(e,t,n,i,s){var a=hg();return a=a===null?null:{parent:Je._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&zu(t,null),cm(),jx(t),e!==null&&rr(e,t,i,!0),t.childLanes=s,null}function Gu(e,t){return t=Fh({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function oy(e,t,n){return cr(t,e.child,null,n),e=Gu(t,t.pendingProps),e.flags|=2,ei(t),t.memoizedState=null,e}function IA(e,t,n){var i=t.pendingProps,s=(t.flags&128)!==0;if(t.flags&=-129,e===null){if($t){if(i.mode==="hidden")return e=Gu(t,i),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},Bl(null,e);if(um(t),(e=De)?(e=BM(e,Mi),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ya!==null?{id:ts,overflow:es}:null,retryLane:536870912,hydrationErrors:null},n=Vx(e),n.return=t,t.child=n,fn=t,De=null)):e=null,e===null)throw xa(t);return t.lanes=536870912,null}return Gu(t,i)}var a=e.memoizedState;if(a!==null){var r=a.dehydrated;if(um(t),s)if(t.flags&256)t.flags&=-257,t=oy(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(Q(558));else if(Ke||rr(e,t,n,!1),s=(n&e.childLanes)!==0,Ke||s){if(Sa.current===null){if(i=Ae,i!==null&&(r=dx(i,n),r!==0&&r!==a.retryLane))throw a.retryLane=r,gr(e,r),Yn(i,e,r),Rg;Sh()}t=oy(e,t,n)}else e=a.treeContext,De=bi(r.nextSibling),fn=t,$t=!0,ua=null,Mi=!1,e!==null&&Xx(t,e),t=Gu(t,i),t.flags|=134221824;return t}return e=Ts(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Gr(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(Q(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function gm(e,t,n,i,s){return or(t),n=_g(e,t,n,i,void 0,s),i=vg(),e!==null&&!Ke?(yg(e,t,s),Ns(e,t,s)):($t&&i&&Uh(t),t.flags|=1,en(e,t,n,s),t.child)}function ly(e,t,n,i,s,a){return or(t),t.updateQueue=null,n=tS(t,i,n,s),$x(e),i=vg(),e!==null&&!Ke?(yg(e,t,a),Ns(e,t,a)):($t&&i&&Uh(t),t.flags|=1,en(e,t,n,a),t.child)}function cy(e,t,n,i,s){if(or(t),t.stateNode===null){var a=jr,r=n.contextType;typeof r=="object"&&r!==null&&(a=yn(r)),a=new n(i,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=pm,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=i,a.state=t.memoizedState,a.refs={},dg(t),r=n.contextType,a.context=typeof r=="object"&&r!==null?yn(r):jr,a.state=t.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(Tp(t,n,r,i),a.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(r=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),r!==a.state&&pm.enqueueReplaceState(a,a.state,null),Ol(t,i,a,s),Il(),a.state=t.memoizedState),typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){a=t.stateNode;var o=t.memoizedProps,l=hr(n,o);a.props=l;var c=a.context,h=n.contextType;r=jr,typeof h=="object"&&h!==null&&(r=yn(h));var p=n.getDerivedStateFromProps;h=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o||c!==r)&&ny(t,a,i,r),ea=!1;var u=t.memoizedState;a.state=u,Ol(t,i,a,s),Il(),c=t.memoizedState,o||u!==c||ea?(typeof p=="function"&&(Tp(t,n,p,i),c=t.memoizedState),(l=ea||ey(t,n,l,i,u,c,r))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=c),a.props=i,a.state=c,a.context=r,i=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{a=t.stateNode,om(e,t),r=t.memoizedProps,h=hr(n,r),a.props=h,p=t.pendingProps,u=a.context,c=n.contextType,l=jr,typeof c=="object"&&c!==null&&(l=yn(c)),o=n.getDerivedStateFromProps,(c=typeof o=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(r!==p||u!==l)&&ny(t,a,i,l),ea=!1,u=t.memoizedState,a.state=u,Ol(t,i,a,s),Il();var d=t.memoizedState;r!==p||u!==d||ea||e!==null&&e.dependencies!==null&&rh(e.dependencies)?(typeof o=="function"&&(Tp(t,n,o,i),d=t.memoizedState),(h=ea||ey(t,n,h,i,u,d,l)||e!==null&&e.dependencies!==null&&rh(e.dependencies))?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,d,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,d,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=d),a.props=i,a.state=d,a.context=l,i=h):(typeof a.componentDidUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=1024),i=!1)}return a=i,Gr(e,t),i=(t.flags&128)!==0,a||i?(a=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:a.render(),t.flags|=1,e!==null&&i?(t.child=cr(t,e.child,null,s),t.child=cr(t,null,n,s)):en(e,t,n,s),t.memoizedState=a.state,e=t.child):e=Ns(e,t,s),e}function uy(e,t,n,i){return ar(),t.flags|=256,en(e,t,n,i),t.child}var _m={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function vm(e){return{baseLanes:e,cachePool:qx()}}function ym(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=ii),e}function zS(e,t,n){var i=t.pendingProps,s=!1,a=(t.flags&128)!==0,r;if((r=a)||(r=e!==null&&e.memoizedState===null?!1:(Sn.current&2)!==0),r&&(s=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if($t){if(s?da(t):pa(),(e=De)?(e=BM(e,Mi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ya!==null?{id:ts,overflow:es}:null,retryLane:536870912,hydrationErrors:null},n=Vx(e),n.return=t,t.child=n,fn=t,De=null)):e=null,e===null)throw xa(t);return Vg(e)?t.lanes=32:t.lanes=536870912,null}return a=i.children,i=i.fallback,s?(pa(),s=t.mode,a=Fh({mode:"hidden",children:a},s),i=er(i,s,n,null),a.return=t,i.return=t,a.sibling=i,t.child=a,i=t.child,i.memoizedState=vm(n),i.childLanes=ym(e,r,n),t.memoizedState=_m,Bl(null,i)):(da(t),Cg(t,a))}var o=e.memoizedState;if(o!==null){var l=o.dehydrated;if(l!==null)return OA(e,t,a,r,i,l,o,n)}return s?(pa(),s=i.fallback,a=t.mode,o=e.child,l=o.sibling,i=Ts(o,{mode:"hidden",children:i.children}),i.subtreeFlags=o.subtreeFlags&1206910976,l!==null?s=Ts(l,s):(s=er(s,a,n,null),s.flags|=2),s.return=t,i.return=t,i.sibling=s,t.child=i,Bl(null,i),i=t.child,s=e.child.memoizedState,s===null?s=vm(n):(a=s.cachePool,a!==null?(o=Je._currentValue,a=a.parent!==o?{parent:o,pool:o}:a):a=qx(),s={baseLanes:s.baseLanes|n,cachePool:a}),i.memoizedState=s,i.childLanes=ym(e,r,n),t.memoizedState=_m,Bl(e.child,i)):(da(t),n=e.child,e=n.sibling,n=Ts(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function Cg(e,t){return t=Fh({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Fh(e,t){return e=qn(22,e,null,t),e.lanes=0,e}function Mu(e,t,n){return cr(t,e.child,null,n),e=Cg(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function OA(e,t,n,i,s,a,r,o){if(n)return t.flags&256?(da(t),t.flags&=-257,Mu(e,t,o)):t.memoizedState!==null?(pa(),t.child=e.child,t.flags|=128,null):(pa(),a=s.fallback,r=t.mode,s=Fh({mode:"visible",children:s.children},r),a=er(a,r,o,null),a.flags|=2,s.return=t,a.return=t,s.sibling=a,t.child=s,cr(t,e.child,null,o),s=t.child,s.memoizedState=vm(o),s.childLanes=ym(e,i,o),t.memoizedState=_m,Bl(null,s));if(da(t),Vg(a)){if(i=a.nextSibling&&a.nextSibling.dataset,i)var l=i.dgst;return i=l,i!==""&&(s=Error(Q(419)),s.stack="",s.digest=i,Yl({value:s,source:null,stack:null})),Mu(e,t,o)}if(Ke||rr(e,t,o,!1),i=(o&e.childLanes)!==0,Ke||i){if(Sa.current!==null)return Mu(e,t,o);if(i=Ae,i!==null&&(s=dx(i,o),s!==0&&s!==r.retryLane))throw r.retryLane=s,gr(e,s),Yn(i,e,s),Rg;return Xm(a)||Sh(),Mu(e,t,o)}return Xm(a)?(t.flags|=192,t.child=e.child,null):(e=r.treeContext,De=bi(a.nextSibling),fn=t,$t=!0,ua=null,Mi=!1,e!==null&&Xx(t,e),t=Cg(t,s.children),t.flags|=134221824,t)}function hy(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),Bu(e.return,t,n)}function fy(e){for(var t=null;e!==null;){var n=e.alternate;n!==null&&ch(n)===null&&(t=e),e=e.sibling}return t}function bu(e,t,n,i,s,a){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:s,treeForkCount:a}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=n,r.tailMode=s,r.treeForkCount=a)}function Ep(e){var t=e.child;for(e.child=null;t!==null;){var n=t.sibling;t.sibling=e.child,e.child=t,t=n}}function xm(e,t,n){var i=t.pendingProps,s=i.revealOrder,a=i.tail;i=i.children;var r=Sn.current;if(t.flags&128)return Jl(t,r),null;var o=(r&2)!==0;if(o?(r=r&1|2,t.flags|=128):r&=1,Jl(t,r),s==="backwards"&&e!==null?(Ep(e),en(e,t,i,n),Ep(e)):en(e,t,i,n),i=$t?ql:0,!o&&e!==null&&(e.flags&128)!==0)t:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&hy(e,n,t);else if(e.tag===19)hy(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(s){case"backwards":n=fy(t.child),n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null,Ep(t)),bu(t,!0,s,null,a,i);break;case"unstable_legacy-backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&ch(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}bu(t,!0,n,null,a,i);break;case"together":bu(t,!1,null,null,void 0,i);break;case"independent":t.memoizedState=null;break;default:n=fy(t.child),n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),bu(t,!1,s,n,a,i)}return t.child}function dy(e,t,n){var i=t.pendingProps;return aa(t,t.type,i.value),en(e,t,i.children,n),t.child}function Ns(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ba|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(rr(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(Q(153));if(t.child!==null){for(e=t.child,n=Ts(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ts(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ng(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&rh(e)))}function PA(e,t,n){switch(t.tag){case 3:ju(t,t.stateNode.containerInfo),aa(t,Je,e.memoizedState.cache),ar();break;case 27:case 5:Yp(t);break;case 4:ju(t,t.stateNode.containerInfo);break;case 10:aa(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,um(t),null;break;case 13:var i=t.memoizedState;if(i!==null){if(i.dehydrated!==null)return da(t),t.flags|=128,null;i=rr(e,t,n,!1);var s=t.child.childLanes;return i||(n&s)!==0?zS(e,t,n):(da(t),e=Ns(e,t,n),e!==null?e.sibling:null)}da(t);break;case 19:if(t.flags&128)return xm(e,t,n);if(s=(e.flags&128)!==0,i=(n&t.childLanes)!==0,i||(rr(e,t,n,!1),i=(n&t.childLanes)!==0),s){if(i)return xm(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Jl(t,Sn.current),i)break;return null;case 22:return t.lanes=0,BS(e,t,n,t.pendingProps);case 24:aa(t,Je,e.memoizedState.cache)}return Ns(e,t,n)}function FS(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ke=!0;else{if(!Ng(e,n)&&(t.flags&128)===0)return Ke=!1,PA(e,t,n);Ke=(e.flags&131072)!==0}else Ke=!1,$t&&(t.flags&1048576)!==0&&kx(t,ql,t.index);switch(t.lanes=0,t.tag){case 16:t:{var i=t.pendingProps;if(e=Ka(t.elementType),t.type=e,typeof e=="function")lg(e)?(i=hr(e,i),t.tag=1,t=cy(null,t,e,i,n)):(t.tag=0,t=gm(null,t,e,i,n));else{if(e!=null){var s=e.$$typeof;if(s===Jm){t.tag=11,t=sy(null,t,e,i,n);break t}else if(s===Km){t.tag=14,t=ay(null,t,e,i,n);break t}else if(s===ji){t.tag=10,t.type=e,t=dy(null,t,n);break t}}throw t=Wp(e)||e,Error(Q(306,t,""))}}return t;case 0:return gm(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,s=hr(i,t.pendingProps),cy(e,t,i,s,n);case 3:t:{if(ju(t,t.stateNode.containerInfo),e===null)throw Error(Q(387));i=t.pendingProps;var a=t.memoizedState;s=a.element,om(e,t),Ol(t,i,null,n);var r=t.memoizedState;if(i=r.cache,aa(t,Je,i),i!==a.cache&&am(t,[Je],n,!0),Il(),i=r.element,a.isDehydrated)if(a={element:i,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){t=uy(e,t,i,n);break t}else if(i!==s){s=Si(Error(Q(424)),t),Yl(s),t=uy(e,t,i,n);break t}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,De=bi(e.firstChild),fn=t,$t=!0,ua=null,Mi=!0,n=Jx(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|134221824,n=n.sibling;else{if(ar(),i===s){t=Ns(e,t,n);break t}en(e,t,i,n)}t=t.child}return t;case 26:return Gr(e,t),e===null?(n=Hy(t.type,null,t.pendingProps,null))?t.memoizedState=n:$t||(t.stateNode=RM(t.type,t.pendingProps,ca.current,t)):t.memoizedState=Hy(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Yp(t),e===null&&$t&&(i=t.stateNode=zM(t.type,t.pendingProps,ca.current),fn=t,Mi=!0,s=De,Ea(t.type)?(Wm=s,De=bi(i.firstChild)):De=s),en(e,t,t.pendingProps.children,n),Gr(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&$t&&((s=i=De)&&(i=Rw(i,t.type,t.pendingProps,Mi),i!==null?(t.stateNode=i,fn=t,De=bi(i.firstChild),Mi=!1,s=!0):s=!1),s||xa(t)),Yp(t),s=t.type,a=t.pendingProps,r=e!==null?e.memoizedProps:null,i=a.children,Gm(s,a)?i=null:r!==null&&Gm(s,r)&&(t.flags|=32),t.memoizedState!==null&&(s=_g(e,t,EA,null,null,n),bo._currentValue=s),Gr(e,t),en(e,t,i,n),t.child;case 6:return e===null&&$t&&((e=n=De)&&(n=Cw(n,t.pendingProps,Mi),n!==null?(t.stateNode=n,fn=t,De=null,e=!0):e=!1),e||xa(t)),null;case 13:return zS(e,t,n);case 4:return ju(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=cr(t,null,i,n):en(e,t,i,n),t.child;case 11:return sy(e,t,t.type,t.pendingProps,n);case 7:return i=t.pendingProps,Gr(e,t),en(e,t,i,n),t.child;case 8:return en(e,t,t.pendingProps.children,n),t.child;case 12:return en(e,t,t.pendingProps.children,n),t.child;case 10:return dy(e,t,n);case 9:return s=t.type._context,i=t.pendingProps.children,or(t),s=yn(s),i=i(s),t.flags|=1,en(e,t,i,n),t.child;case 14:return ay(e,t,t.type,t.pendingProps,n);case 15:return PS(e,t,t.type,t.pendingProps,n);case 19:return xm(e,t,n);case 31:return IA(e,t,n);case 22:return BS(e,t,n,t.pendingProps);case 24:return or(t),i=yn(Je),e===null?(s=hg(),s===null&&(s=Ae,a=ug(),s.pooledCache=a,a.refCount++,a!==null&&(s.pooledCacheLanes|=n),s=a),t.memoizedState={parent:i,cache:s},dg(t),aa(t,Je,s)):((e.lanes&n)!==0&&(om(e,t),Ol(t,null,null,n),Il()),s=e.memoizedState,a=t.memoizedState,s.parent!==i?(s={parent:i,cache:i},t.memoizedState=s,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=s),aa(t,Je,i)):(i=a.cache,aa(t,Je,i),i!==s.cache&&am(t,[Je],n,!0))),en(e,t,t.pendingProps.children,n),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),i=t.pendingProps,i.name!=null&&i.name!=="auto"?t.flags|=e===null?18882560:18874368:$t&&Uh(t),e!==null&&e.memoizedProps.name!==i.name?t.flags|=4194816:Gr(e,t),en(e,t,i.children,n),t.child;case 29:throw t.pendingProps}throw Error(Q(156,t.tag))}function Ss(e){e.flags|=4}function Ap(e,t,n,i,s){var a;if((a=(e.mode&32)!==0)&&(a=n===null?ky(t,i):ky(t,i)&&(i.src!==n.src||i.srcSet!==n.srcSet)),a){if(e.flags|=16777216,(s&335544128)===s)if(e.stateNode.complete)e.flags|=8192;else if(pM())e.flags|=8192;else throw ir=oh,fg}else e.flags&=-16777217}function py(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!VM(t))if(pM())e.flags|=8192;else throw ir=oh,fg}function Tu(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?ux():536870912,e.lanes|=t,_o|=t)}function xl(e,t){if(!$t)switch(e.tailMode){case"visible":break;case"collapsed":for(var n=e.tail,i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null;break;default:for(t=e.tail,n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null}}function Ne(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags&1206910976,i|=s.flags&1206910976,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags,i|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function BA(e,t,n){var i=t.pendingProps;switch(cg(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ne(t),null;case 1:return Ne(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),Es(Je),fo(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Fr(t)?Ss(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Sp())),Ne(t),null;case 26:var s=t.type,a=t.memoizedState;return e===null?(Ss(t),a!==null?(Ne(t),py(t,a)):(Ne(t),Ap(t,s,null,i,n))):a?a!==e.memoizedState?(Ss(t),Ne(t),py(t,a)):(Ne(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&Ss(t),Ne(t),Ap(t,s,e,i,n)),null;case 27:if($u(t),n=ca.current,s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Ss(t);else{if(!i){if(t.stateNode===null)throw Error(Q(166));return Ne(t),t.subtreeFlags&=-33554433,null}e=ns.current,Fr(t)?Gv(t,e):(e=zM(s,i,n),t.stateNode=e,Ss(t))}return Ne(t),t.subtreeFlags&=-33554433,null;case 5:if($u(t),s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Ss(t);else{if(!i){if(t.stateNode===null)throw Error(Q(166));return Ne(t),t.subtreeFlags&=-33554433,null}if(a=ns.current,Fr(t))Gv(t,a);else{var r=$l(ca.current);switch(a){case 1:a=r.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:a=r.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":a=r.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":a=r.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":a=r.createElement("div"),a.innerHTML="<script><\/script>",a=a.removeChild(a.firstChild);break;case"select":a=typeof i.is=="string"?r.createElement("select",{is:i.is}):r.createElement("select"),i.multiple?a.multiple=!0:i.size&&(a.size=i.size);break;default:a=typeof i.is=="string"?r.createElement(s,{is:i.is}):r.createElement(s)}}a[vn]=t,a[Jn]=i;t:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)a.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break t;for(;r.sibling===null;){if(r.return===null||r.return===t)break t;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=a;t:switch(Mn(a,s,i),s){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break t;case"img":i=!0;break t;default:i=!1}i&&Ss(t)}}return Ne(t),t.subtreeFlags&=-33554433,Ap(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&Ss(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(Q(166));if(e=ca.current,Fr(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,s=fn,s!==null)switch(s.tag){case 27:case 5:i=s.memoizedProps}e[vn]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||AM(e.nodeValue,n)),e||xa(t,!0)}else e=$l(e).createTextNode(i),e[vn]=t,t.stateNode=e}return Ne(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=Fr(t),n!==null){if(e===null){if(!i)throw Error(Q(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(Q(557));e[vn]=t}else ar(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ne(t),e=!1}else n=Sp(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(ei(t),t):(ei(t),null);if((t.flags&128)!==0)throw Error(Q(558))}return Ne(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(s=Fr(t),i!==null&&i.dehydrated!==null){if(e===null){if(!s)throw Error(Q(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(Q(317));s[vn]=t}else ar(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ne(t),s=!1}else s=Sp(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),s=!0;if(!s)return t.flags&256?(ei(t),t):(ei(t),null)}return ei(t),(t.flags&128)!==0?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,s=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(s=i.alternate.memoizedState.cachePool.pool),a=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(a=i.memoizedState.cachePool.pool),a!==s&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Tu(t,t.updateQueue),Ne(t),null);case 4:return fo(),e===null&&Fg(t.stateNode.containerInfo),t.flags|=67108864,Ne(t),null;case 10:return Es(t.type),Ne(t),null;case 19:if(mg(t),i=t.memoizedState,i===null)return Ne(t),null;if(s=(t.flags&128)!==0,a=i.rendering,a===null)if(s)xl(i,!1);else{if(ke!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(a=ch(e),a!==null){for(t.flags|=128,xl(i,!1),e=a.updateQueue,t.updateQueue=e,Tu(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Gx(n,e),n=n.sibling;return Jl(t,Sn.current&1|2),$t&&Ms(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&si()>yh&&(t.flags|=128,s=!0,xl(i,!1),t.lanes=4194304)}else{if(!s)if(e=ch(a),e!==null){if(t.flags|=128,s=!0,e=e.updateQueue,t.updateQueue=e,Tu(t,e),xl(i,!0),i.tail===null&&i.tailMode!=="collapsed"&&i.tailMode!=="visible"&&!a.alternate&&!$t)return Ne(t),null}else 2*si()-i.renderingStartTime>yh&&n!==536870912&&(t.flags|=128,s=!0,xl(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(e=i.last,e!==null?e.sibling=a:t.child=a,i.last=a)}if(i.tail!==null){e=i.tail;t:{for(n=e;n!==null;){if(n.alternate!==null){n=!1;break t}n=n.sibling}n=!0}return i.rendering=e,i.tail=e.sibling,i.renderingStartTime=si(),e.sibling=null,a=Sn.current,a=s?a&1|2:a&1,i.tailMode==="visible"||i.tailMode==="collapsed"||!n||$t?Jl(t,a):(n=a,Le(bn,t),Le(Sn,n),Cn===null&&(Cn=t)),$t&&Ms(t,i.treeForkCount),e}return Ne(t),null;case 22:case 23:return ei(t),pg(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(Ne(t),t.subtreeFlags&6&&(t.flags|=8192)):Ne(t),n=t.updateQueue,n!==null&&Tu(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&xn(nr),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Es(Je),Ne(t),null;case 25:return null;case 30:return t.flags|=33554432,Ne(t),null}throw Error(Q(156,t.tag))}function zA(e,t){switch(cg(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Es(Je),fo(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return $u(t),null;case 31:if(t.memoizedState!==null){if(ei(t),t.alternate===null)throw Error(Q(340));ar()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(ei(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(Q(340));ar()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return mg(t),e=t.flags,e&65536?(t.flags=e&-65537|128,e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return fo(),null;case 10:return Es(t.type),null;case 22:case 23:return ei(t),pg(),e!==null&&xn(nr),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Es(Je),null;case 25:return null;default:return null}}function HS(e,t){switch(cg(t),t.tag){case 3:Es(Je),fo();break;case 26:case 27:case 5:$u(t);break;case 4:fo();break;case 31:t.memoizedState!==null&&ei(t);break;case 13:ei(t);break;case 19:mg(t);break;case 10:Es(t.type);break;case 22:case 23:ei(t),pg(),e!==null&&xn(nr);break;case 24:Es(Je)}}function fc(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var s=i.next;n=s;do{if((n.tag&e)===e){i=void 0;var a=n.create,r=n.inst;i=a(),r.destroy=i}n=n.next}while(n!==s)}}catch(o){be(t,t.return,o)}}function Ma(e,t,n){try{var i=t.updateQueue,s=i!==null?i.lastEffect:null;if(s!==null){var a=s.next;i=a;do{if((i.tag&e)===e){var r=i.inst,o=r.destroy;if(o!==void 0){r.destroy=void 0,s=t;var l=n,c=o;try{c()}catch(h){be(s,l,h)}}}i=i.next}while(i!==a)}}catch(h){be(t,t.return,h)}}function GS(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Qx(t,n)}catch(i){be(e,e.return,i)}}}function VS(e,t,n){n.props=hr(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){be(e,t,i)}}function Ki(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:var s=e.stateNode,a=ws(e.memoizedProps,s);(s.ref===null||s.ref.name!==a)&&(s.ref=LM(a)),i=s.ref;break;case 7:if(e.stateNode===null){var r=new ci(e);Zn(e.child,!1,Aw,r,void 0,void 0),e.stateNode=r}i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(o){be(e,t,o)}}function _n(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(s){be(e,t,s)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(s){be(e,t,s)}else n.current=null}function ph(e,t){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&t!==null)for(var n=0;n<t.length;n++)PM(e.stateNode,t[n])}function my(e){for(var t=e.return;t!==null&&(Lg(t)&&PM(e.stateNode,t.stateNode),!Dg(t));)t=t.return}function zl(e){for(var t=e.return;t!==null&&(Lg(t)&&ww(e.stateNode,t.stateNode),!Dg(t));)t=t.return}function Dg(e){return e.tag===5||e.tag===3||e.tag===27}function Lg(e){return e&&e.tag===7&&e.stateNode!==null}function Sm(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{t:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break t;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(s){be(e,e.return,s)}}function wp(e,t,n){try{var i=e.stateNode;lw(i,e.type,n,t),i[Jn]=t}catch(s){be(e,e.return,s)}}function kS(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ea(e.type)||e.tag===4}function Rp(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||kS(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ea(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Mm(e,t,n,i){var s=e.tag;if(s===5||s===6)s=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(s,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(s),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=$i)),ph(e,i),he=!0;else if(s!==4&&(s===27&&(ph(e,i),i=null,Ea(e.type)&&(n=e.stateNode,t=null)),e=e.child,e!==null))for(Mm(e,t,n,i),e=e.sibling;e!==null;)Mm(e,t,n,i),e=e.sibling}function mh(e,t,n,i){var s=e.tag;if(s===5||s===6)s=e.stateNode,t?n.insertBefore(s,t):n.appendChild(s),ph(e,i),he=!0;else if(s!==4&&(s===27&&(ph(e,i),i=null,Ea(e.type)&&(n=e.stateNode)),e=e.child,e!==null))for(mh(e,t,n,i),e=e.sibling;e!==null;)mh(e,t,n,i),e=e.sibling}function XS(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,s=t.attributes;s.length;)t.removeAttributeNode(s[0]);Mn(t,i,n),t[vn]=e,t[Jn]=n}catch(a){be(e,e.return,a)}}var gh=!1,ni=null;function gy(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(gh=!0)}var Qi=null;function _y(){var e=Qi;return Qi=null,e}var Wn=0;function Co(e,t,n,i,s){return Wn=0,WS(e.child,t,n,i,s)}function WS(e,t,n,i,s){for(var a=!1;e!==null;){if(e.tag===5){var r=e.stateNode;if(i!==null){var o=Vm(r);i.push(o),o.view&&(a=!0)}else a||Vm(r).view&&(a=!0);gh=!0,CM(r,Wn===0?t:t+"_"+Wn,n),Wn++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&s||WS(e.child,t,n,i,s)&&(a=!0));e=e.sibling}return a}function ss(e,t){for(;e!==null;)e.tag===5?NM(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&t||ss(e.child,t)),e=e.sibling}function Vu(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(Vu(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var t=e.memoizedProps;if(t.name==null||t.name==="auto")throw Error(Q(544));var n=t.name;t=Us(t.default,t.share),t!=="none"&&(Co(e,n,t,null,!1)||ss(e.child,!1))}e=e.sibling}}function bm(e,t){if(e.tag===30){var n=e.stateNode,i=e.memoizedProps,s=ws(i,n),a=Us(i.default,n.paired?i.share:i.enter);a!=="none"?Co(e,s,a,null,!1)?(Vu(e),n.paired||t||vo(e,i.onEnter)):ss(e.child,!1):Vu(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)bm(e,t),e=e.sibling;else Vu(e)}function Tm(e){if(ni!==null&&ni.size!==0){var t=ni;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var n=e.memoizedProps,i=n.name;if(i!=null&&i!=="auto"){var s=t.get(i);if(s!==void 0){var a=Us(n.default,n.share);if(a!=="none"&&(Co(e,i,a,null,!1)?(a=e.stateNode,s.paired=a,a.paired=s,vo(e,n.onShare)):ss(e.child,!1)),t.delete(i),t.size===0)break}}}Tm(e)}e=e.sibling}}}function Em(e){if(e.tag===30){var t=e.memoizedProps,n=ws(t,e.stateNode),i=ni!==null?ni.get(n):void 0,s=Us(t.default,i!==void 0?t.share:t.exit);s!=="none"&&(Co(e,n,s,null,!1)?i!==void 0?(s=e.stateNode,i.paired=s,s.paired=i,ni.delete(n),vo(e,t.onShare)):vo(e,t.onExit):ss(e.child,!1)),ni!==null&&Tm(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Em(e),e=e.sibling;else ni!==null&&Tm(e)}function qS(e){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,n=ws(t,e.stateNode);t=Us(t.default,t.update),e.flags&=-5,t!=="none"&&Co(e,n,t,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&qS(e);e=e.sibling}}function Am(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var t=e.stateNode;t.paired!==null&&(t.paired=null,ss(e.child,!1))}Am(e)}e=e.sibling}}function ku(e){if(e.tag===30)e.stateNode.paired=null,ss(e.child,!1),Am(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)ku(e),e=e.sibling;else Am(e)}function YS(e){for(e=e.child;e!==null;)e.tag===30?ss(e.child,!1):(e.subtreeFlags&33554432)!==0&&YS(e),e=e.sibling}function Ug(e,t,n,i,s,a,r){for(var o=!1;t!==null;){if(t.tag===5){var l=t.stateNode;if(a!==null&&Wn<a.length){var c=a[Wn],h=Vm(l);(c.view||h.view)&&(o=!0);var p;if(p=(e.flags&4)===0)if(h.clip)p=!0;else{p=c.rect;var u=h.rect;p=p.y!==u.y||p.x!==u.x||p.height!==u.height||p.width!==u.width}p&&(e.flags|=4),h.abs?h=!c.abs:(c=c.rect,h=h.rect,h=c.height!==h.height||c.width!==h.width),h&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&CM(l,Wn===0?n:n+"_"+Wn,s),o&&(e.flags&4)!==0||(Qi===null&&(Qi=[]),Qi.push(l,Wn===0?i:i+"_"+Wn,t.memoizedProps)),Wn++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&r?e.flags|=t.flags&32:Ug(e,t.child,n,i,s,a,r)&&(o=!0));t=t.sibling}return o}function ZS(e,t){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,i=e.stateNode,s=ws(n,i),a=Us(n.default,n.update);if(t){i=i.clones;var r=i===null?null:i.map(pw)}else r=e.memoizedState,e.memoizedState=null;i=e;var o=e.child;Wn=0,s=Ug(i,o,s,s,a,r,!1),(e.flags&4)!==0&&s&&(t||vo(e,n.onUpdate))}else(e.subtreeFlags&33554432)!==0&&ZS(e,t);e=e.sibling}}var cn=!1,_e=!1,Yi=!1,Cp=!1,vy=typeof WeakSet=="function"?WeakSet:Set,un=null,Zi=!1,Rl=!1,_h=!1,wm=!1;function FA(e,t,n){if(e=e.containerInfo,Fm=To,e=Ux(e),ag(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else t:{i=(i=e.ownerDocument)&&i.defaultView||window;var s=i.getSelection&&i.getSelection();if(s&&s.rangeCount!==0){i=s.anchorNode;var a=s.anchorOffset,r=s.focusNode;s=s.focusOffset;try{i.nodeType,r.nodeType}catch{i=null;break t}var o=0,l=-1,c=-1,h=0,p=0,u=e,d=null;e:for(;;){for(var _;u!==i||a!==0&&u.nodeType!==3||(l=o+a),u!==r||s!==0&&u.nodeType!==3||(c=o+s),u.nodeType===3&&(o+=u.nodeValue.length),(_=u.firstChild)!==null;)d=u,u=_;for(;;){if(u===e)break e;if(d===i&&++h===a&&(l=o),d===r&&++p===s&&(c=o),(_=u.nextSibling)!==null)break;u=d,d=u.parentNode}u=_}i=l===-1||c===-1?null:{start:l,end:c}}else i=null}i=i||{start:0,end:0}}else i=null;for(Hm={focusedElem:e,selectionRange:i},To=!1,n=(n&335544064)===n,un=t,t=n?9270:1024;un!==null;){if(e=un,n&&(i=e.deletions,i!==null))for(a=0;a<i.length;a++)n&&Em(i[a]);if(e.alternate===null&&(e.flags&2)!==0)n&&gy(e),Eu(n);else{if(e.tag===22){if(i=e.alternate,e.memoizedState!==null){i!==null&&i.memoizedState===null&&n&&Em(i),Eu(n);continue}else if(i!==null&&i.memoizedState!==null){n&&gy(e),Eu(n);continue}}i=e.child,(e.subtreeFlags&t)!==0&&i!==null?(i.return=e,un=i):(n&&qS(e),Eu(n))}}ni=null}function Eu(e){for(;un!==null;){var t=un,n=e,i=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 15:break;case 1:if((s&1024)!==0&&i!==null){n=void 0,s=i.memoizedProps,i=i.memoizedState;var a=t.stateNode;try{var r=hr(t.type,s);n=a.getSnapshotBeforeUpdate(r,i),a.__reactInternalSnapshotBeforeUpdate=n}catch(o){be(t,t.return,o)}}break;case 3:if((s&1024)!==0){if(i=t.stateNode.containerInfo,n=i.nodeType,n===9)km(i);else if(n===1)switch(i.nodeName){case"HEAD":case"HTML":case"BODY":km(i);break;default:i.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:n&&i!==null&&(n=ws(i.memoizedProps,i.stateNode),s=t.memoizedProps,s=Us(s.default,s.update),s!=="none"&&Co(i,n,s,i.memoizedState=[],!0));break;default:if((s&1024)!==0)throw Error(Q(163))}if(i=t.sibling,i!==null){i.return=t.return,un=i;break}un=t.return}}function JS(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:Ji(e,n),i&4&&fc(5,n);break;case 1:if(Ji(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(r){be(n,n.return,r)}else{var s=hr(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(s,t,e.__reactInternalSnapshotBeforeUpdate)}catch(r){be(n,n.return,r)}}i&64&&GS(n),i&512&&Ki(n,n.return);break;case 3:if(Ji(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Qx(e,t)}catch(r){be(n,n.return,r)}}break;case 27:t===null&&i&4&&XS(n);case 26:case 5:Ji(e,n),t===null&&i&4&&Sm(n),i&512&&Ki(n,n.return);break;case 12:Ji(e,n);break;case 31:Ji(e,n),i&4&&$S(e,n);break;case 13:Ji(e,n),i&4&&tM(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=QA.bind(null,n),Nw(e,n))));break;case 22:if(i=n.memoizedState!==null||cn,!i){var a=t!==null&&t.memoizedState!==null||_e;t=cn,s=_e,cn=i,(_e=a)&&!s?(i=2,(n.subtreeFlags&8772)!==0&&(i|=1),Ni(e,n,i)):Ji(e,n),cn=t,_e=s}break;case 30:Ji(e,n),i&512&&Ki(n,n.return);break;case 7:i&512&&Ki(n,n.return);default:Ji(e,n)}}function Rm(e,t){for(e=e.child;e!==null;)KS(e,t),e=e.sibling}function KS(e,t){switch(e.tag){case 5:case 26:try{var n=e.stateNode;if(t){var i=n.style;typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"}else{var s=e.stateNode,a=e.memoizedProps.style,r=a!=null&&a.hasOwnProperty("display")?a.display:null;s.style.display=r==null||typeof r=="boolean"?"":(""+r).trim()}}catch(l){be(e,e.return,l)}Cm(e,t);break;case 6:try{e.stateNode.nodeValue=t?"":e.memoizedProps,he=!0}catch(l){be(e,e.return,l)}break;case 18:try{var o=e.stateNode;t?Iy(o,!0):Iy(e.stateNode,!1)}catch(l){be(e,e.return,l)}break;case 22:case 23:e.memoizedState===null&&Rm(e,t);break;default:Rm(e,t)}}function Cm(e,t){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){t:{var n=e,i=t;switch(n.tag){case 4:KS(n,i);break t;case 22:n.memoizedState===null&&Cm(n,i);break t;default:Cm(n,i)}}e=e.sibling}}function QS(e){var t=e.alternate;t!==null&&(e.alternate=null,QS(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&wh(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Pe=null,kn=!1;function Ci(e,t,n){for(n=n.child;n!==null;)jS(e,t,n),n=n.sibling}function jS(e,t,n){if(ai&&typeof ai.onCommitFiberUnmount=="function")try{ai.onCommitFiberUnmount(ac,n)}catch{}switch(n.tag){case 26:_e||_n(n,t),Ci(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!_e&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:_e||_n(n,t),zl(n);var i=Pe,s=kn;Ea(n.type)&&(Pe=n.stateNode,kn=!1),Ci(e,t,n),FM(n.stateNode,n.type,n.memoizedProps),Pe=i,kn=s;break;case 5:_e||_n(n,t),zl(n);case 6:if(n.tag===6&&zl(n),i=Pe,s=kn,Pe=null,Ci(e,t,n),Pe=i,kn=s,Pe!==null)if(kn)try{(Pe.nodeType===9?Pe.body:Pe.nodeName==="HTML"?Pe.ownerDocument.body:Pe).removeChild(n.stateNode),he=!0}catch(a){be(n,t,a)}else try{Pe.removeChild(n.stateNode),he=!0}catch(a){be(n,t,a)}break;case 18:Pe!==null&&(kn?(e=Pe,Uy(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Eo(e)):Uy(Pe,n.stateNode));break;case 4:i=Pe,s=kn,Pe=n.stateNode.containerInfo,kn=!0,Ci(e,t,n),Pe=i,kn=s;break;case 0:case 11:case 14:case 15:Ma(2,n,t),_e||Ma(4,n,t),Ci(e,t,n);break;case 1:_e||(_n(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&VS(n,t,i)),Ci(e,t,n);break;case 21:Ci(e,t,n);break;case 22:_e=(i=_e)||n.memoizedState!==null,Ci(e,t,n),_e=i;break;case 30:_n(n,t),Ci(e,t,n);break;case 7:_e||_n(n,t),Ci(e,t,n);break;default:Ci(e,t,n)}}function $S(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Eo(e)}catch(n){be(t,t.return,n)}}}function tM(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Eo(e)}catch(n){be(t,t.return,n)}}function HA(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new vy),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new vy),t;default:throw Error(Q(435,e.tag))}}function Au(e,t){var n=HA(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var s=jA.bind(null,e,i);i.then(s,s)}})}function Pn(e,t,n){var i=t.deletions;if(i!==null)for(var s=0;s<i.length;s++){var a=i[s],r=e,o=t,l=o;t:for(;l!==null;){switch(l.tag){case 27:if(Ea(l.type)){Pe=l.stateNode,kn=!1;break t}break;case 5:Pe=l.stateNode,kn=!1;break t;case 3:case 4:Pe=l.stateNode.containerInfo,kn=!0;break t}l=l.return}if(Pe===null)throw Error(Q(160));jS(r,o,a),Pe=null,kn=!1,r=a.alternate,r!==null&&(r.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)eM(t,e,n),t=t.sibling}var Di=null;function eM(e,t,n){var i=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(s&4&&(i=e.updateQueue,i=i!==null?i.events:null,i!==null))for(var a=0;a<i.length;a++){var r=i[a];r.ref.impl=r.nextImpl}Pn(t,e,n),Bn(e),s&4&&(Ma(3,e,e.return),fc(3,e),Ma(5,e,e.return));break;case 1:Pn(t,e,n),Bn(e),s&512&&(_e||i===null||_n(i,i.return)),s&64&&cn&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?t:n.concat(t))));break;case 26:if(a=Di,Pn(t,e,n),Bn(e),s&512&&(_e||i===null||_n(i,i.return)),s&4)if(s=i!==null?i.memoizedState:null,n=e.memoizedState,i===null)if(n===null)if(e.stateNode===null)if(cn)e.stateNode=RM(e.type,e.memoizedProps,t.containerInfo,e);else{t:{t=e.type,n=e.memoizedProps,s=a.ownerDocument||a;e:switch(t){case"title":i=s.getElementsByTagName("title")[0],(!i||i[lc]||i[vn]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=s.createElement(t),s.head.insertBefore(i,s.querySelector("head > title"))),Mn(i,t,n),i[vn]=e,hn(i),t=i;break t;case"link":if(a=Vy("link","href",s).get(t+(n.href||""))){for(r=0;r<a.length;r++)if(i=a[r],i.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&i.getAttribute("rel")===(n.rel==null?null:n.rel)&&i.getAttribute("title")===(n.title==null?null:n.title)&&i.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){a.splice(r,1);break e}}i=s.createElement(t),Mn(i,t,n),s.head.appendChild(i);break;case"meta":if(a=Vy("meta","content",s).get(t+(n.content||""))){for(r=0;r<a.length;r++)if(i=a[r],i.getAttribute("content")===(n.content==null?null:""+n.content)&&i.getAttribute("name")===(n.name==null?null:n.name)&&i.getAttribute("property")===(n.property==null?null:n.property)&&i.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&i.getAttribute("charset")===(n.charSet==null?null:n.charSet)){a.splice(r,1);break e}}i=s.createElement(t),Mn(i,t,n),s.head.appendChild(i);break;default:throw Error(Q(468,t))}i[vn]=e,hn(i),t=i}e.stateNode=t}else cn||qm(a,e.type,e.stateNode);else e.stateNode=Gy(a,n,e.memoizedProps);else s!==n?(s===null?(t=i.stateNode,t===null||_e||t.parentNode.removeChild(t)):s.count--,n===null?cn||qm(a,e.type,e.stateNode):Gy(a,n,e.memoizedProps)):n===null&&e.stateNode!==null&&wp(e,e.memoizedProps,i.memoizedProps);break;case 27:Pn(t,e,n),Bn(e),s&512&&(_e||i===null||_n(i,i.return)),i!==null&&s&4&&wp(e,e.memoizedProps,i.memoizedProps);break;case 5:if(a=Yi,Yi=!1,Pn(t,e,n),Yi=a,Bn(e),s&512&&(_e||i===null||_n(i,i.return)),e.flags&32){t=e.stateNode;try{mo(t,""),he=!0}catch(h){be(e,e.return,h)}}s&4&&e.stateNode!=null&&(t=e.memoizedProps,wp(e,t,i!==null?i.memoizedProps:t)),s&1024&&(Cp=!0);break;case 6:if(Pn(t,e,n),Bn(e),s&4){if(e.stateNode===null)throw Error(Q(162));t=e.memoizedProps,n=e.stateNode;try{n.nodeValue=t,he=!0}catch(h){be(e,e.return,h)}}break;case 3:if(he=!1,Yu=null,a=Di,Di=tc(t.containerInfo),Pn(t,e,n),Di=a,Bn(e),s&4&&i!==null&&i.memoizedState.isDehydrated)try{Eo(t.containerInfo)}catch(h){be(e,e.return,h)}Cp&&(Cp=!1,nM(e)),he=!1;break;case 4:s=Yi,Yi=cn,i=Tv(),a=Di,Di=tc(e.stateNode.containerInfo),Pn(t,e,n),Bn(e),Di=a,he&&Rl&&(_h=!0),he=i,Yi=s;break;case 12:Pn(t,e,n),Bn(e);break;case 31:Pn(t,e,n),Bn(e),s&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Au(e,t)));break;case 13:Pn(t,e,n),Bn(e),e.child.flags&8192&&e.memoizedState!==null!=(i!==null&&i.memoizedState!==null)&&(Hh=si()),s&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Au(e,t)));break;case 22:a=e.memoizedState!==null,r=i!==null&&i.memoizedState!==null;var o=cn,l=_e,c=Yi;cn=o||a,Yi=c||a,_e=l||r,Pn(t,e,n),_e=l,Yi=c,cn=o,Bn(e),s&8192&&(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,!a||i===null||r||cn||_e||(t=r||_e,n=cn,i=_e,cn=a||cn,_e=t,$s(e,2),cn=n,_e=i),!a&&Yi||Rm(e,a)),s&4&&(t=e.updateQueue,t!==null&&(n=t.retryQueue,n!==null&&(t.retryQueue=null,Au(e,n))));break;case 19:Pn(t,e,n),Bn(e),s&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Au(e,t)));break;case 30:s&512&&(_e||i===null||_n(i,i.return)),s=Tv(),a=Rl,r=(n&335544064)===n,o=e.memoizedProps,Rl=r&&Us(o.default,o.update)!=="none",Pn(t,e,n),Bn(e),r&&i!==null&&he&&(e.flags|=4),Rl=a,he=s;break;case 21:break;case 7:s&512&&(_e||i===null||_n(i,i.return)),i&&i.stateNode!==null&&(i.stateNode._fragmentFiber=e);default:Pn(t,e,n),Bn(e)}}function Bn(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(kS(i)){n=i;break}i=i.return}i=null;for(var s=e.return;s!==null;){if(Lg(s)){var a=s.stateNode;i===null?i=[a]:i.push(a)}if(Dg(s))break;s=s.return}var r=i;if(n==null)throw Error(Q(160));switch(n.tag){case 27:var o=n.stateNode,l=Rp(e);mh(e,l,o,r);break;case 5:var c=n.stateNode;n.flags&32&&(mo(c,""),n.flags&=-33);var h=Rp(e);mh(e,h,c,r);break;case 3:case 4:var p=n.stateNode.containerInfo,u=Rp(e);Mm(e,u,p,r);break;default:throw Error(Q(161))}}catch(d){be(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function nM(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;nM(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,To=!0,t.reset(),To=!1),e=e.sibling}}function Hr(e,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)iM(t,e),t=t.sibling;else ZS(t,!1)}function iM(e,t){var n=e.alternate;if(n===null)bm(e,!1);else switch(e.tag){case 3:if(wm=Zi=!1,_y(),Hr(t,e),!Zi&&!_h){if(e=Qi,e!==null)for(var i=0;i<e.length;i+=3){n=e[i];var s=e[i+1];NM(n,e[i+2]),n=n.ownerDocument.documentElement,n!==null&&n.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+s+")"})}e=t.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),wm=!0}Qi=null;break;case 5:Hr(t,e);break;case 4:i=Zi,Zi=!1,Hr(t,e),Zi&&(_h=!0),Zi=i;break;case 22:e.memoizedState===null&&(n.memoizedState!==null?bm(e,!1):Hr(t,e));break;case 30:i=Zi,s=_y(),Zi=!1,Hr(t,e),Zi&&(e.flags|=4);var a=e.memoizedProps,r=e.stateNode;t=ws(a,r),r=ws(n.memoizedProps,r);var o=Us(a.default,a.update);o==="none"?t=!1:(a=n.memoizedState,n.memoizedState=null,n=e.child,Wn=0,t=Ug(e,n,t,r,o,a,!0),Wn!==(a===null?0:a.length)&&(e.flags|=32)),(e.flags&4)!==0&&t?(vo(e,e.memoizedProps.onUpdate),Qi=s):s!==null&&(s.push.apply(s,Qi),Qi=s),Zi=(e.flags&32)!==0?!0:i;break;default:Hr(t,e)}}function Ji(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)JS(e,t.alternate,t),t=t.sibling}function $s(e,t){for(e=e.child;e!==null;){var n=e,i=t;switch(n.tag){case 0:case 11:case 14:case 15:Ma(4,n,n.return),$s(n,i);break;case 1:_n(n,n.return);var s=n.stateNode;typeof s.componentWillUnmount=="function"&&VS(n,n.return,s),$s(n,i);break;case 27:(i&2)!==0&&FM(n.stateNode,n.type,n.memoizedProps);case 5:_n(n,n.return),n.tag!==5&&n.tag!==27||zl(n),$s(n,i);break;case 6:zl(n);break;case 26:_n(n,n.return),s=n.stateNode,n.memoizedState!==null||s===null||_e||s.parentNode.removeChild(s),$s(n,i);break;case 22:n.memoizedState===null&&$s(n,i);break;case 30:_n(n,n.return),$s(n,i);break;case 7:_n(n,n.return);default:$s(n,i)}e=e.sibling}}function Ni(e,t,n){for(n=(t.subtreeFlags&8772)!==0?n:n&-2,t=t.child;t!==null;){var i=t.alternate,s=e,a=t,r=a.flags,o=(n&1)!==0;switch(a.tag){case 0:case 11:case 15:Ni(s,a,n),fc(4,a);break;case 1:if(Ni(s,a,n),i=a,s=i.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(h){be(i,i.return,h)}if(i=a,s=i.updateQueue,s!==null){var l=i.stateNode;try{var c=s.shared.hiddenCallbacks;if(c!==null)for(s.shared.hiddenCallbacks=null,s=0;s<c.length;s++)Kx(c[s],l)}catch(h){be(i,i.return,h)}}o&&r&64&&GS(a),Ki(a,a.return);break;case 27:(n&2)!==0&&XS(a);case 5:a.tag!==5&&a.tag!==27||my(a),Ni(s,a,n),o&&i===null&&r&4&&Sm(a),Ki(a,a.return);break;case 6:my(a);break;case 26:l=a.stateNode,a.memoizedState!==null||l===null||cn||qm(tc(l.ownerDocument),a.type,l),Ni(s,a,n),o&&i===null&&r&4&&Sm(a),Ki(a,a.return);break;case 12:Ni(s,a,n);break;case 31:Ni(s,a,n),o&&r&4&&$S(s,a);break;case 13:Ni(s,a,n),o&&r&4&&tM(s,a);break;case 22:a.memoizedState===null&&Ni(s,a,n),Ki(a,a.return);break;case 30:Ni(s,a,n),Ki(a,a.return);break;case 7:Ki(a,a.return);default:Ni(s,a,n)}t=t.sibling}}function Ig(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&uc(n))}function Og(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&uc(e))}function gi(e,t,n,i){var s=(n&335544064)===n;if(t.subtreeFlags&(s?10262:10256))for(t=t.child;t!==null;)sM(e,t,n,i),t=t.sibling;else s&&YS(t)}function sM(e,t,n,i){var s=(n&335544064)===n;s&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&ku(t);var a=t.flags;switch(t.tag){case 0:case 11:case 15:gi(e,t,n,i),a&2048&&fc(9,t);break;case 1:gi(e,t,n,i);break;case 3:gi(e,t,n,i),s&&wm&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),a&2048&&(a=null,t.alternate!==null&&(a=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==a&&(t.refCount++,a!=null&&uc(a)));break;case 12:if(a&2048){gi(e,t,n,i),a=t.stateNode;try{var r=t.memoizedProps,o=r.id,l=r.onPostCommit;typeof l=="function"&&l(o,t.alternate===null?"mount":"update",a.passiveEffectDuration,-0)}catch(c){be(t,t.return,c)}}else gi(e,t,n,i);break;case 31:gi(e,t,n,i);break;case 13:gi(e,t,n,i);break;case 23:break;case 22:r=t.stateNode,o=t.alternate,t.memoizedState!==null?(s&&o!==null&&o.memoizedState===null&&ku(o),r._visibility&2?gi(e,t,n,i):Fl(e,t)):(s&&o!==null&&o.memoizedState!==null&&ku(t),r._visibility&2?gi(e,t,n,i):(r._visibility|=2,Vr(e,t,n,i,(t.subtreeFlags&10256)!==0||!1))),a&2048&&Ig(o,t);break;case 24:gi(e,t,n,i),a&2048&&Og(t.alternate,t);break;case 30:s&&(a=t.alternate,a!==null&&(ss(a.child,!0),ss(t.child,!0))),gi(e,t,n,i);break;default:gi(e,t,n,i)}}function Vr(e,t,n,i,s){for(s=s&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var a=e,r=t,o=n,l=i,c=r.flags;switch(r.tag){case 0:case 11:case 15:Vr(a,r,o,l,s),fc(8,r);break;case 23:break;case 22:var h=r.stateNode;r.memoizedState!==null?h._visibility&2?Vr(a,r,o,l,s):Fl(a,r):(h._visibility|=2,Vr(a,r,o,l,s)),s&&c&2048&&Ig(r.alternate,r);break;case 24:Vr(a,r,o,l,s),s&&c&2048&&Og(r.alternate,r);break;default:Vr(a,r,o,l,s)}t=t.sibling}}function Fl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,s=i.flags;switch(i.tag){case 22:Fl(n,i),s&2048&&Ig(i.alternate,i);break;case 24:Fl(n,i),s&2048&&Og(i.alternate,i);break;default:Fl(n,i)}t=t.sibling}}var Qa=8192;function Za(e,t,n){if(e.subtreeFlags&Qa)for(e=e.child;e!==null;)aM(e,t,n),e=e.sibling}function aM(e,t,n){switch(e.tag){case 26:Za(e,t,n),e.flags&Qa&&(e.memoizedState!==null?Xw(n,Di,e.memoizedState,e.memoizedProps):(e=e.stateNode,(t&335544128)===t&&Xy(n,e)));break;case 5:Za(e,t,n),e.flags&Qa&&(e=e.stateNode,(t&335544128)===t&&Xy(n,e));break;case 3:case 4:var i=Di;Di=tc(e.stateNode.containerInfo),Za(e,t,n),Di=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=Qa,Qa=16777216,Za(e,t,n),Qa=i):Za(e,t,n));break;case 30:if((e.flags&Qa)!==0&&(i=e.memoizedProps.name,i!=null&&i!=="auto")){var s=e.stateNode;s.paired=null,ni===null&&(ni=new Map),ni.set(i,s)}Za(e,t,n);break;default:Za(e,t,n)}}function rM(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Sl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];un=i,lM(i,e)}rM(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)oM(e),e=e.sibling}function oM(e){switch(e.tag){case 0:case 11:case 15:Sl(e),e.flags&2048&&Ma(9,e,e.return);break;case 3:Sl(e);break;case 12:Sl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Xu(e)):Sl(e);break;default:Sl(e)}}function Xu(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];un=i,lM(i,e)}rM(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Ma(8,t,t.return),Xu(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Xu(t));break;default:Xu(t)}e=e.sibling}}function lM(e,t){for(;un!==null;){var n=un;switch(n.tag){case 0:case 11:case 15:Ma(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:uc(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,un=i;else t:for(n=e;un!==null;){i=un;var s=i.sibling,a=i.return;if(QS(i),i===n){un=null;break t}if(s!==null){s.return=a,un=s;break t}un=a}}}var GA={getCacheForType:function(e){var t=yn(Je),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return yn(Je).controller.signal}},VA=typeof WeakMap=="function"?WeakMap:Map,pe=0,Ae=null,ee=null,ae=0,Se=0,$n=null,ra=!1,No=!1,Pg=!1,Ds=0,ke=0,ba=0,sr=0,vh=0,ii=0,_o=0,Hl=null,Xn=null,Nm=!1,Hh=0,cM=0,yh=1/0,xh=null,ma=null,Ge=0,Ui=null,fr=null,is=0,Dm=0,Lm=null,uM=null,co=null,uo=null,ho=null,Gl=0,Wu=null;function oi(){return(pe&2)!==0&&ae!==0?ae&-ae:It.T!==null?zg():px()}function hM(){if(ii===0)if((ae&536870912)===0||$t){var e=du;du<<=1,(du&3932160)===0&&(du=262144),ii=e}else ii=536870912;return e=bn.current,e!==null&&(e.flags|=32),ii}function vo(e,t){if(t!=null){var n=e.stateNode,i=n.ref;i===null&&(i=n.ref=LM(ws(e.memoizedProps,n))),uo===null&&(uo=[]),uo.push(t.bind(null,i))}}function Yn(e,t,n){(e===Ae&&(Se===2||Se===9)||e.cancelPendingCommit!==null)&&(yo(e,0),oa(e,ae,ii,!1)),oc(e,n),((pe&2)===0||e!==Ae)&&(e===Ae&&((pe&2)===0&&(sr|=n),ke===4&&oa(e,ae,ii,!1)),rs(e))}function fM(e,t,n){if((pe&6)!==0)throw Error(Q(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||rc(e,t),s=i?WA(e,t):Np(e,t,!0),a=i;do{if(s===0){No&&!i&&oa(e,t,0,!1);break}else{if(n=e.current.alternate,a&&!kA(n)){s=Np(e,t,!1),a=!1;continue}if(s===2){if(a=t,e.errorRecoveryDisabledLanes&a)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;t:{var o=e;s=Hl;var l=o.current.memoizedState.isDehydrated;if(l&&(yo(o,r).flags|=256),r=Np(o,r,!1),r!==2&&r!==6){if(Pg&&!l){o.errorRecoveryDisabledLanes|=a,sr|=a,s=4;break t}a=Xn,Xn=s,a!==null&&(Xn===null?Xn=a:Xn.push.apply(Xn,a))}s=r}if(a=!1,s!==2)continue}}if(s===1){yo(e,0),oa(e,t,0,!0);break}t:{switch(i=e,a=s,a){case 0:case 1:throw Error(Q(345));case 4:if((t&4194048)!==t&&(t&62914560)!==t)break;case 6:oa(i,t,ii,!ra);break t;case 2:Xn=null;break;case 3:case 5:break;default:throw Error(Q(329))}if((t&62914560)===t&&(s=Hh+300-si(),10<s)){if(oa(i,t,ii,!ra),Ah(i,0,!0)!==0)break t;is=t,i.timeoutHandle=Hg(yy.bind(null,i,n,Xn,xh,Nm,t,ii,sr,_o,ra,a,"Throttled",-0,0),s);break t}yy(i,n,Xn,xh,Nm,t,ii,sr,_o,ra,a,null,-0,0)}}break}while(!0);rs(e)}function yy(e,t,n,i,s,a,r,o,l,c,h,p,u,d){e.timeoutHandle=-1;var _=t.subtreeFlags,S=(a&335544064)===a;if(p=null,(S||_&8192||(_&16785408)===16785408)&&(p={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:$i},ni=null,aM(t,a,p),S&&(_=p,S=e.containerInfo,S=(S.nodeType===9?S:S.ownerDocument).__reactViewTransition,S!=null&&(_.count++,_.waitingForViewTransition=!0,_=ec.bind(_),S.finished.then(_,_))),_=(a&62914560)===a?Hh-si():(a&4194048)===a?cM-si():0,_=Ww(p,_),_!==null)){is=a,e.cancelPendingCommit=_(Sy.bind(null,e,t,a,n,i,s,r,o,l,c,h,p,null,u,d)),oa(e,a,r,!c);return}Sy(e,t,a,n,i,s,r,o,l,c,h,p)}function kA(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var s=n[i],a=s.getSnapshot;s=s.value;try{if(!li(a(),s))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function oa(e,t,n,i){t=cx(e,t),t&=~vh,t&=~sr,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var s=t;0<s;){var a=31-ri(s),r=1<<a;i[a]=-1,s&=~r}n!==0&&hx(e,n,t)}function Gh(){return(pe&6)===0?(dc(0,!1),!1):!0}function Bg(){if(ee!==null){if(Se===0)var e=ee.return;else e=ee,bs=_r=null,xg(e),ro=null,Zl=0,e=ee;for(;e!==null;)HS(e.alternate,e),e=e.return;ee=null}}function yo(e,t){var n=e.timeoutHandle;return n!==-1&&(e.timeoutHandle=-1,hw(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),is=0,Bg(),Ae=e,ee=n=Ts(e.current,null),ae=t,Se=0,$n=null,ra=!1,No=rc(e,t),Pg=!1,_o=ii=vh=sr=ba=ke=0,Xn=Hl=null,Nm=!1,Ds=cx(e,t),Dh(),n}function dM(e,t){Xt=null,It.H=fh,t===Ro||t===Ih?(t=qv(),Se=3):t===fg?(t=qv(),Se=4):Se=t===Rg?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,$n=t,ee===null&&(ke=1,dh(e,Si(t,e.current)))}function pM(){var e=bn.current;return e===null?!0:(ae&4194048)===ae?Cn===null:(ae&62914560)===ae||(ae&536870912)!==0?e===Cn:!1}function mM(){var e=It.H;return It.H=fh,e===null?fh:e}function gM(){var e=It.A;return It.A=GA,e}function Sh(){ke=4,ra||(ae&4194048)!==ae&&bn.current!==null||(No=!0),(ba&134217727)===0&&(sr&134217727)===0||Ae===null||oa(Ae,ae,ii,!1)}function Np(e,t,n){var i=pe;pe|=2;var s=mM(),a=gM();(Ae!==e||ae!==t)&&(xh=null,yo(e,t)),t=!1;var r=ke;t:do try{if(Se!==0&&ee!==null){var o=ee,l=$n;switch(Se){case 8:Bg(),r=6;break t;case 3:case 2:case 9:case 6:bn.current===null&&(t=!0);var c=Se;if(Se=0,$n=null,eo(e,o,l,c),n&&No){r=0;break t}break;default:c=Se,Se=0,$n=null,eo(e,o,l,c)}}XA(),r=ke;break}catch(h){dM(e,h)}while(!0);return t&&e.shellSuspendCounter++,bs=_r=null,pe=i,It.H=s,It.A=a,ee===null&&(Ae=null,ae=0,Dh()),r}function XA(){for(;ee!==null;)_M(ee)}function WA(e,t){var n=pe;pe|=2;var i=mM(),s=gM();Ae!==e||ae!==t?(xh=null,yh=si()+500,yo(e,t)):No=rc(e,t);t:do try{if(Se!==0&&ee!==null){t=ee;var a=$n;e:switch(Se){case 1:Se=0,$n=null,eo(e,t,a,1);break;case 2:case 9:if(Wv(a)){Se=0,$n=null,xy(t);break}t=function(){Se!==2&&Se!==9||Ae!==e||(Se=7),rs(e)},a.then(t,t);break t;case 3:Se=7;break t;case 4:Se=5;break t;case 7:Wv(a)?(Se=0,$n=null,xy(t)):(Se=0,$n=null,eo(e,t,a,7));break;case 5:var r=null;switch(ee.tag){case 26:r=ee.memoizedState;case 5:case 27:var o=ee;if(r?VM(r):o.stateNode.complete){Se=0,$n=null;var l=o.sibling;if(l!==null)ee=l;else{var c=o.return;c!==null?(ee=c,Vh(c)):ee=null}break e}}Se=0,$n=null,eo(e,t,a,5);break;case 6:Se=0,$n=null,eo(e,t,a,6);break;case 8:Bg(),ke=6;break t;default:throw Error(Q(462))}}qA();break}catch(h){dM(e,h)}while(!0);return bs=_r=null,It.H=i,It.A=s,pe=n,ee!==null?0:(Ae=null,ae=0,Dh(),ke)}function qA(){for(;ee!==null&&!cE();)_M(ee)}function _M(e){var t=FS(e.alternate,e,Ds);e.memoizedProps=e.pendingProps,t===null?Vh(e):ee=t}function xy(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=ly(n,t,t.pendingProps,t.type,void 0,ae);break;case 11:t=ly(n,t,t.pendingProps,t.type.render,t.ref,ae);break;case 5:xg(t);var i=t;i===fn&&($t?(ah(i),i.tag===5&&i.stateNode!=null&&(De=i.stateNode)):(ah(i),$t=!0));default:HS(n,t),t=ee=Gx(t,Ds),t=FS(n,t,Ds)}e.memoizedProps=e.pendingProps,t===null?Vh(e):ee=t}function eo(e,t,n,i){bs=_r=null,xg(t),ro=null,Zl=0;var s=t.return;try{if(UA(e,s,t,n,ae)){ke=1,dh(e,Si(n,e.current)),ee=null;return}}catch(a){if(s!==null)throw ee=s,a;ke=1,dh(e,Si(n,e.current)),ee=null;return}t.flags&32768?($t||i===1?e=!0:No||(ae&536870912)!==0?e=!1:(ra=e=!0,(i===2||i===9||i===3||i===6)&&(i=bn.current,i!==null&&i.tag===13&&(i.flags|=16384))),vM(t,e)):Vh(t)}function Vh(e){var t=e;do{if((t.flags&32768)!==0){vM(t,ra);return}e=t.return;var n=BA(t.alternate,t,Ds);if(n!==null){ee=n;return}if(t=t.sibling,t!==null){ee=t;return}ee=t=e}while(t!==null);ke===0&&(ke=5)}function vM(e,t){do{var n=zA(e.alternate,e);if(n!==null){n.flags&=32767,ee=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){ee=e;return}ee=e=n}while(e!==null);ke=6,ee=null}function Sy(e,t,n,i,s,a,r,o,l,c,h,p){e.cancelPendingCommit=null;do kh();while(Ge!==0);if((pe&6)!==0)throw Error(Q(327));if(t!==null){if(t===e.current)throw Error(Q(177));e===Ae&&(ee=Ae=null,ae=0),fr=t,Ui=e,is=n,Lm=s,uM=i,YA(e,t,n,r,o,l,p)}}function YA(e,t,n,i,s,a,r){var o=t.lanes|t.childLanes;if(Dm=o,o|=rg,yE(e,n,o,i,s,a),uo=null,(n&335544064)===n?(ho=SA(e),i=10262):(ho=null,i=10256),(t.subtreeFlags&i)!==0||(t.flags&i)!==0?(e.callbackNode=null,e.callbackPriority=0,$A(th,function(){return Pm(),null})):(e.callbackNode=null,e.callbackPriority=0),gh=!1,i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=It.T,It.T=null,s=me.p,me.p=2,a=pe,pe|=4;try{FA(e,t,n)}finally{pe=a,me.p=s,It.T=i}}Ge=1,gh?co=_w(r,e.containerInfo,ho,Um,Im,JA,Om,Pm,ZA,null,null):(Um(),Im(),Om())}function ZA(e){if(Ge!==0){var t=Ui.onRecoverableError;t(e,{componentStack:null})}}function JA(){Ge===3&&(Ge=0,iM(fr,Ui),Ge=4)}function Um(){if(Ge===1){Ge=0;var e=Ui,t=fr,n=is,i=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||i){i=It.T,It.T=null;var s=me.p;me.p=2;var a=pe;pe|=4;try{Rl=_h=!1,eM(t,e,n),n=Hm;var r=Ux(e.containerInfo),o=n.focusedElem,l=n.selectionRange;if(r!==o&&o&&o.ownerDocument&&Lx(o.ownerDocument.documentElement,o)){if(l!==null&&ag(o)){var c=l.start,h=l.end;if(h===void 0&&(h=c),"selectionStart"in o)o.selectionStart=c,o.selectionEnd=Math.min(h,o.value.length);else{var p=o.ownerDocument||document,u=p&&p.defaultView||window;if(u.getSelection){var d=u.getSelection(),_=o.textContent.length,S=Math.min(l.start,_),g=l.end===void 0?S:Math.min(l.end,_);!d.extend&&S>g&&(r=g,g=S,S=r);var f=Bv(o,S),m=Bv(o,g);if(f&&m&&(d.rangeCount!==1||d.anchorNode!==f.node||d.anchorOffset!==f.offset||d.focusNode!==m.node||d.focusOffset!==m.offset)){var y=p.createRange();y.setStart(f.node,f.offset),d.removeAllRanges(),S>g?(d.addRange(y),d.extend(m.node,m.offset)):(y.setEnd(m.node,m.offset),d.addRange(y))}}}}for(p=[],d=o;d=d.parentNode;)d.nodeType===1&&p.push({element:d,left:d.scrollLeft,top:d.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<p.length;o++){var x=p[o];x.element.scrollLeft=x.left,x.element.scrollTop=x.top}}To=!!Fm,Hm=Fm=null}finally{pe=a,me.p=s,It.T=i}}e.current=t,Ge=2}}function Im(){if(Ge===2){Ge=0;var e=Ui,t=fr,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=It.T,It.T=null;var i=me.p;me.p=2;var s=pe;pe|=4;try{JS(e,t.alternate,t)}finally{pe=s,me.p=i,It.T=n}}Ge=3}}function Om(){if(Ge===4||Ge===3){Ge=0;var e=co;co=null,uE();var t=Ui,n=fr,i=is,s=uM,a=(i&335544064)===i?10262:10256;if((n.subtreeFlags&a)!==0||(n.flags&a)!==0?Ge=5:(Ge=0,fr=Ui=null,yM(t,t.pendingLanes)),a=t.pendingLanes,a===0&&(ma=null),$m(i),n=n.stateNode,ai&&typeof ai.onCommitFiberRoot=="function")try{ai.onCommitFiberRoot(ac,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=It.T,a=me.p,me.p=2,It.T=null;try{for(var r=t.onRecoverableError,o=0;o<s.length;o++){var l=s[o];r(l.value,{componentStack:l.stack})}}finally{It.T=n,me.p=a}}if(s=uo,r=ho,ho=null,s!==null&&(uo=null,r===null&&(r=[]),e!==null))for(l=0;l<s.length;l++)n=(0,s[l])(r),n!==void 0&&e.finished.finally(n);(is&3)!==0&&kh(),rs(t),a=t.pendingLanes,(i&261930)!==0&&(a&42)!==0?t===Wu?Gl++:(Gl=0,Wu=t):(Gl=0,Wu=null),dc(0,!1)}}function yM(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,uc(t)))}function kh(){return co!==null&&(co.skipTransition(),co=null),Um(),Im(),Om(),Pm()}function Pm(){if(Ge!==5)return!1;var e=Ui,t=Dm;Dm=0;var n=$m(is),i=It.T,s=me.p;try{me.p=32>n?32:n,It.T=null,n=Lm,Lm=null;var a=Ui,r=is;if(Ge=0,fr=Ui=null,is=0,(pe&6)!==0)throw Error(Q(331));var o=pe;if(pe|=4,oM(a.current),sM(a,a.current,r,n),pe=o,dc(0,!1),ai&&typeof ai.onPostCommitFiberRoot=="function")try{ai.onPostCommitFiberRoot(ac,a)}catch{}return!0}finally{me.p=s,It.T=i,yM(e,t)}}function My(e,t,n){t=Si(n,t),t=mm(e.stateNode,t,2),e=fa(e,t,2),e!==null&&(oc(e,2),rs(e))}function be(e,t,n){if(e.tag===3)My(e,e,n);else for(;t!==null;){if(t.tag===3){My(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ma===null||!ma.has(i))){e=Si(n,e),n=IS(2),i=fa(t,n,2),i!==null&&(OS(n,i,t,e),oc(i,2),rs(i));break}}t=t.return}}function Dp(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new VA;var s=new Set;i.set(t,s)}else s=i.get(t),s===void 0&&(s=new Set,i.set(t,s));s.has(n)||(Pg=!0,s.add(n),e=KA.bind(null,e,t,n),t.then(e,e))}function KA(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Ae===e&&(ae&n)===n&&((ke===4||ke===3&&(ae&62914560)===ae&&300>si()-Hh)&&(pe&2)===0?yo(e,0):vh|=n,_o===ae&&(_o=0)),rs(e)}function xM(e,t){t===0&&(t=ux()),e=gr(e,t),e!==null&&(oc(e,t),rs(e))}function QA(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),xM(e,n)}function jA(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(Q(314))}i!==null&&i.delete(t),xM(e,n)}function $A(e,t){return Qm(e,t)}var xo=null,kr=null,Bm=!1,Mh=!1,Lp=!1,la=0;function rs(e){e!==kr&&e.next===null&&(kr===null?xo=kr=e:kr=kr.next=e),Mh=!0,Bm||(Bm=!0,ew())}function dc(e,t){if(!Lp&&Mh){Lp=!0;do for(var n=!1,i=xo;i!==null;){if(!t)if(e!==0){var s=i.pendingLanes;if(s===0)var a=0;else{var r=i.suspendedLanes,o=i.pingedLanes;a=(1<<31-ri(42|e)+1)-1,a&=s&~(r&~o),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,by(i,a))}else a=ae,a=Ah(i,i===Ae?a:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(a&3)===0||rc(i,a)||(n=!0,by(i,a));i=i.next}while(n);Lp=!1}}function tw(){SM()}function SM(){Mh=Bm=!1;var e=0;la!==0&&uw()&&(e=la);for(var t=si(),n=null,i=xo;i!==null;){var s=i.next,a=MM(i,t);a===0?(i.next=null,n===null?xo=s:n.next=s,s===null&&(kr=n)):(n=i,(e!==0||(a&3)!==0)&&(Mh=!0)),i=s}Ge!==0&&Ge!==5||dc(e,!1),la!==0&&(la=0)}function MM(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,s=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var r=31-ri(a),o=1<<r,l=s[r];l===-1?((o&n)===0||(o&i)!==0)&&(s[r]=vE(o,t)):l<=t&&(e.expiredLanes|=o),a&=~o}if(t=Ae,n=ae,n=Ah(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(Se===2||Se===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&up(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||rc(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&up(i),$m(n)){case 2:case 8:n=ox;break;case 32:n=th;break;case 268435456:n=lx;break;default:n=th}return i=bM.bind(null,e),n=Qm(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&up(i),e.callbackPriority=2,e.callbackNode=null,2}function bM(e,t){if(Ge!==0&&Ge!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(kh()&&e.callbackNode!==n)return null;var i=ae;return i=Ah(e,e===Ae?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(fM(e,i,t),MM(e,si()),e.callbackNode!=null&&e.callbackNode===n?bM.bind(null,e):null)}function by(e,t){if(kh())return null;fM(e,t,!0)}function ew(){fw(function(){(pe&6)!==0?Qm(rx,tw):SM()})}function zg(){if(la===0){var e=lr;e===0&&(e=fu,fu<<=1,(fu&261888)===0&&(fu=256)),la=e}return la}function Ty(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Uu(e)}function nw(e,t,n,i,s){if(t==="submit"&&n&&n.stateNode===s){var a=Ty((s[Jn]||null).action),r=i.submitter;r&&(t=(t=r[Jn]||null)?Ty(t.formAction):r.getAttribute("formAction"),t!==null&&(a=t,r=null));var o=new Rh("action","action",null,i,s);e.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(la!==0){var l=new FormData(s,r);dm(n,{pending:!0,data:l,method:s.method,action:a},null,l)}}else typeof a=="function"&&(o.preventDefault(),l=new FormData(s,r),dm(n,{pending:!0,data:l,method:s.method,action:a},a,l))},currentTarget:s}]})}}for(wu=0;wu<nm.length;wu++)Ru=nm[wu],Ey=Ru.toLowerCase(),Ay=Ru[0].toUpperCase()+Ru.slice(1),Ii(Ey,"on"+Ay);var Ru,Ey,Ay,wu;Ii(Ox,"onAnimationEnd");Ii(Px,"onAnimationIteration");Ii(Bx,"onAnimationStart");Ii("dblclick","onDoubleClick");Ii("focusin","onFocus");Ii("focusout","onBlur");Ii(dA,"onTransitionRun");Ii(pA,"onTransitionStart");Ii(mA,"onTransitionCancel");Ii(zx,"onTransitionEnd");po("onMouseEnter",["mouseout","mouseover"]);po("onMouseLeave",["mouseout","mouseover"]);po("onPointerEnter",["pointerout","pointerover"]);po("onPointerLeave",["pointerout","pointerover"]);pr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));pr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));pr("onBeforeInput",["compositionend","keypress","textInput","paste"]);pr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));pr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));pr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ql="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),iw=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ql));function TM(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],s=i.event;i=i.listeners;t:{var a=void 0;if(t)for(var r=i.length-1;0<=r;r--){var o=i[r],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==a&&s.isPropagationStopped())break t;a=o,s.currentTarget=c;try{a(s)}catch(h){nh(h)}s.currentTarget=null,a=l}else for(r=0;r<i.length;r++){if(o=i[r],l=o.instance,c=o.currentTarget,o=o.listener,l!==a&&s.isPropagationStopped())break t;a=o,s.currentTarget=c;try{a(s)}catch(h){nh(h)}s.currentTarget=null,a=l}}}}function te(e,t){var n=t[xv];n===void 0&&(n=t[xv]=new Set);var i=e+"__bubble";n.has(i)||(EM(t,e,2,!1),n.add(i))}function Up(e,t,n){var i=0;t&&(i|=4),EM(n,e,i,t)}var Cu="_reactListening"+Math.random().toString(36).slice(2);function Fg(e){if(!e[Cu]){e[Cu]=!0,gx.forEach(function(n){n!=="selectionchange"&&(iw.has(n)||Up(n,!1,e),Up(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Cu]||(t[Cu]=!0,Up("selectionchange",!1,t))}}function EM(e,t,n,i){switch(JM(t)){case 2:var s=Jw;break;case 8:s=Kw;break;default:s=qg}n=s.bind(null,t,n,e),s=void 0,!jp||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),i?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function Ip(e,t,n,i,s){var a=i;if((t&1)===0&&(t&2)===0&&i!==null)t:for(;;){if(i===null)return;var r=i.tag;if(r===3||r===4){var o=i.stateNode.containerInfo;if(o===s)break;if(r===4)for(r=i.return;r!==null;){var l=r.tag;if((l===3||l===4)&&r.stateNode.containerInfo===s)return;r=r.return}for(;o!==null;){if(r=ja(o),r===null)return;if(l=r.tag,l===5||l===6||l===26||l===27){i=a=r;continue t}o=o.parentNode}}i=i.return}Tx(function(){var c=a,h=eg(n),p=[];t:{var u=Fx.get(e);if(u!==void 0){var d=Rh,_=e;switch(e){case"keypress":if(Ou(n)===0)break t;case"keydown":case"keyup":d=kE;break;case"focusin":_="focus",d=gp;break;case"focusout":_="blur",d=gp;break;case"beforeblur":case"afterblur":d=gp;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":d=Rv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":d=DE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":d=ZE;break;case Ox:case Px:case Bx:d=IE;break;case zx:d=KE;break;case"scroll":case"scrollend":d=CE;break;case"wheel":d=jE;break;case"copy":case"cut":case"paste":d=PE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":d=Nv;break;case"submit":d=qE;break;case"toggle":case"beforetoggle":d=tA}var S=(t&4)!==0,g=!S&&(e==="scroll"||e==="scrollend"),f=S?u!==null?u+"Capture":null:u;S=[];for(var m=c,y;m!==null;){var x=m;if(y=x.stateNode,x=x.tag,x!==5&&x!==26&&x!==27||y===null||f===null||(x=kl(m,f),x!=null&&S.push(jl(m,x,y))),g)break;m=m.return}0<S.length&&(u=new d(u,_,null,n,h),p.push({event:u,listeners:S}))}}if((t&7)===0){t:{if(d=e==="mouseover"||e==="pointerover",u=e==="mouseout"||e==="pointerout",d&&n!==Qp&&(_=n.relatedTarget||n.fromElement)&&(ja(_)||_[Ao]))break t;(u||d)&&(_=h.window===h?h:(d=h.ownerDocument)?d.defaultView||d.parentWindow:window,u?(d=n.relatedTarget||n.toElement,u=c,d=d?ja(d):null,d!==null&&(g=sc(d),S=d.tag,d!==g||S!==5&&S!==27&&S!==6)&&(d=null)):(u=null,d=c),u!==d&&(S=Rv,x="onMouseLeave",f="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(S=Nv,x="onPointerLeave",f="onPointerEnter",m="pointer"),g=u==null?_:Al(u),y=d==null?_:Al(d),_=new S(x,m+"leave",u,n,h),_.target=g,_.relatedTarget=y,x=null,ja(h)===c&&(S=new S(f,m+"enter",d,n,h),S.target=y,S.relatedTarget=g,x=S),g=x,S=u&&d?Fp(u,d,sw):null,u!==null&&wy(p,_,u,S,!1),d!==null&&g!==null&&wy(p,g,d,S,!0)))}t:{if(u=c?Al(c):window,d=u.nodeName&&u.nodeName.toLowerCase(),d==="select"||d==="input"&&u.type==="file")var E=Iv;else if(Uv(u))if(Nx)E=uA;else{E=lA;var A=oA}else d=u.nodeName,!d||d.toLowerCase()!=="input"||u.type!=="checkbox"&&u.type!=="radio"?c&&tg(c.elementType)&&(E=Iv):E=cA;if(E&&(E=E(e,c))){Cx(p,E,n,h);break t}A&&A(e,u,c)}switch(A=c?Al(c):window,e){case"focusin":(Uv(A)||A.contentEditable==="true")&&(Jr=A,tm=c,Dl=null);break;case"focusout":Dl=tm=Jr=null;break;case"mousedown":em=!0;break;case"contextmenu":case"mouseup":case"dragend":em=!1,zv(p,n,h);break;case"selectionchange":if(fA)break;case"keydown":case"keyup":zv(p,n,h)}var v;if(sg)t:{switch(e){case"compositionstart":var T="onCompositionStart";break t;case"compositionend":T="onCompositionEnd";break t;case"compositionupdate":T="onCompositionUpdate";break t}T=void 0}else Zr?wx(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(Ax&&n.locale!=="ko"&&(Zr||T!=="onCompositionStart"?T==="onCompositionEnd"&&Zr&&(v=Ex()):(sa=h,ng="value"in sa?sa.value:sa.textContent,Zr=!0)),A=bh(c,T),0<A.length&&(T=new Cv(T,e,null,n,h),p.push({event:T,listeners:A}),v?T.data=v:(v=Rx(n),v!==null&&(T.data=v)))),(v=nA?iA(e,n):sA(e,n))&&(T=bh(c,"onBeforeInput"),0<T.length&&(A=new Cv("onBeforeInput","beforeinput",null,n,h),p.push({event:A,listeners:T}),A.data=v)),nw(p,e,c,n,h)}TM(p,t)})}function jl(e,t,n){return{instance:e,listener:t,currentTarget:n}}function bh(e,t){for(var n=t+"Capture",i=[];e!==null;){var s=e,a=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||a===null||(s=kl(e,n),s!=null&&i.unshift(jl(e,s,a)),s=kl(e,t),s!=null&&i.push(jl(e,s,a))),e.tag===3)return i;e=e.return}return[]}function sw(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function wy(e,t,n,i,s){for(var a=t._reactName,r=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||c===null||(l=c,s?(c=kl(n,a),c!=null&&r.unshift(jl(n,c,l))):s||(c=kl(n,a),c!=null&&r.push(jl(n,c,l)))),n=n.return}r.length!==0&&e.push({event:t,listeners:r})}var aw=/\r\n?/g,rw=/\u0000|\uFFFD/g;function Ry(e){return(typeof e=="string"?e:""+e).replace(aw,`
`).replace(rw,"")}function AM(e,t){return t=Ry(t),Ry(e)===t}function Me(e,t,n,i,s,a){switch(n){case"children":if(typeof i=="string")t==="body"||t==="textarea"&&i===""||mo(e,i);else if(typeof i=="number"||typeof i=="bigint")t!=="body"&&mo(e,""+i);else return;break;case"className":mu(e,"class",i);break;case"tabIndex":mu(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":mu(e,n,i);break;case"style":bx(e,i,a);return;case"data":if(t!=="object"){mu(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Uu(i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof a=="function"&&(n==="formAction"?(t!=="input"&&Me(e,t,"name",s.name,s,null),Me(e,t,"formEncType",s.formEncType,s,null),Me(e,t,"formMethod",s.formMethod,s,null),Me(e,t,"formTarget",s.formTarget,s,null)):(Me(e,t,"encType",s.encType,s,null),Me(e,t,"method",s.method,s,null),Me(e,t,"target",s.target,s,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Uu(i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=$i);return;case"onScroll":i!=null&&te("scroll",e);return;case"onScrollEnd":i!=null&&te("scrollend",e);return;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(Q(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(Q(60));a?.__html!==n&&(e.innerHTML=n)}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=Uu(i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":te("beforetoggle",e),te("toggle",e),Lu(e,"popover",i);break;case"xlinkActuate":xs(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":xs(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":xs(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":xs(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":xs(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":xs(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":xs(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":xs(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":xs(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Lu(e,"is",i);break;case"innerText":case"textContent":return;default:if(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")n=wE.get(n)||n,Lu(e,n,i);else return}he=!0}function zm(e,t,n,i,s,a){switch(n){case"style":bx(e,i,a);return;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(Q(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(Q(60));a?.__html!==n&&(e.innerHTML=n)}}break;case"children":if(typeof i=="string")mo(e,i);else if(typeof i=="number"||typeof i=="bigint")mo(e,""+i);else return;break;case"onScroll":i!=null&&te("scroll",e);return;case"onScrollEnd":i!=null&&te("scrollend",e);return;case"onClick":i!=null&&(e.onclick=$i);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!_x.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(s=n.endsWith("Capture"),a=n.slice(2,s?n.length-7:void 0),t=e[Jn]||null,t=t!=null?t[n]:null,typeof t=="function"&&e.removeEventListener(a,t,s),typeof i=="function")){typeof t!="function"&&t!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(a,i,s);break t}he=!0,n in e?e[n]=i:i===!0?e.setAttribute(n,""):Lu(e,n,i)}return}he=!0}function Mn(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":te("error",e),te("load",e);var i=!1,s=!1,a;for(a in n)if(n.hasOwnProperty(a)){var r=n[a];if(r!=null)switch(a){case"src":i=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(Q(137,t));default:Me(e,t,a,r,n,null)}}s&&Me(e,t,"srcSet",n.srcSet,n,null),i&&Me(e,t,"src",n.src,n,null);return;case"input":te("invalid",e);var o=a=r=s=null,l=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var h=n[i];if(h!=null)switch(i){case"name":s=h;break;case"type":r=h;break;case"checked":l=h;break;case"defaultChecked":c=h;break;case"value":a=h;break;case"defaultValue":o=h;break;case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(Q(137,t));break;default:Me(e,t,i,h,n,null)}}xx(e,a,o,l,c,r,s,!1);return;case"select":te("invalid",e),i=r=a=null;for(s in n)if(n.hasOwnProperty(s)&&(o=n[s],o!=null))switch(s){case"value":a=o;break;case"defaultValue":r=o;break;case"multiple":i=o;default:Me(e,t,s,o,n,null)}t=a,n=r,e.multiple=!!i,t!=null?io(e,!!i,t,!1):n!=null&&io(e,!!i,n,!0);return;case"textarea":te("invalid",e),a=s=i=null;for(r in n)if(n.hasOwnProperty(r)&&(o=n[r],o!=null))switch(r){case"value":i=o;break;case"defaultValue":s=o;break;case"children":a=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(Q(91));break;default:Me(e,t,r,o,n,null)}Mx(e,i,s,a);return;case"option":for(l in n)n.hasOwnProperty(l)&&(i=n[l],i!=null)&&(l==="selected"?e.selected=i&&typeof i!="function"&&typeof i!="symbol":Me(e,t,l,i,n,null));return;case"dialog":te("beforetoggle",e),te("toggle",e),te("cancel",e),te("close",e);break;case"iframe":case"object":te("load",e);break;case"video":case"audio":for(i=0;i<Ql.length;i++)te(Ql[i],e);break;case"image":te("error",e),te("load",e);break;case"details":te("toggle",e);break;case"embed":case"source":case"link":te("error",e),te("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(Q(137,t));default:Me(e,t,c,i,n,null)}return;default:if(tg(t)){for(h in n)n.hasOwnProperty(h)&&(i=n[h],i!==void 0&&zm(e,t,h,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&Me(e,t,o,i,n,null))}var ow={};function lw(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,a=null,r=null,o=null,l=null,c=null,h=null;for(d in n){var p=n[d];if(n.hasOwnProperty(d)&&p!=null)switch(d){case"checked":break;case"value":break;case"defaultValue":l=p;default:i.hasOwnProperty(d)||Me(e,t,d,null,i,p)}}for(var u in i){var d=i[u];if(p=n[u],i.hasOwnProperty(u)&&(d!=null||p!=null))switch(u){case"type":d!==p&&(he=!0),a=d;break;case"name":d!==p&&(he=!0),s=d;break;case"checked":d!==p&&(he=!0),c=d;break;case"defaultChecked":d!==p&&(he=!0),h=d;break;case"value":d!==p&&(he=!0),r=d;break;case"defaultValue":d!==p&&(he=!0),o=d;break;case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(Q(137,t));break;default:d!==p&&Me(e,t,u,d,i,p)}}Kp(e,r,o,l,c,h,a,s);return;case"select":d=r=o=u=null;for(a in n)if(l=n[a],n.hasOwnProperty(a)&&l!=null)switch(a){case"value":break;case"multiple":d=l;default:i.hasOwnProperty(a)||Me(e,t,a,null,i,l)}for(s in i)if(a=i[s],l=n[s],i.hasOwnProperty(s)&&(a!=null||l!=null))switch(s){case"value":a!==l&&(he=!0),u=a;break;case"defaultValue":a!==l&&(he=!0),o=a;break;case"multiple":a!==l&&(he=!0),r=a;default:a!==l&&Me(e,t,s,a,i,l)}t=o,n=r,i=d,u!=null?io(e,!!n,u,!1):!!i!=!!n&&(t!=null?io(e,!!n,t,!0):io(e,!!n,n?[]:"",!1));return;case"textarea":d=u=null;for(o in n)if(s=n[o],n.hasOwnProperty(o)&&s!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:Me(e,t,o,null,i,s)}for(r in i)if(s=i[r],a=n[r],i.hasOwnProperty(r)&&(s!=null||a!=null))switch(r){case"value":s!==a&&(he=!0),u=s;break;case"defaultValue":s!==a&&(he=!0),d=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(Q(91));break;default:s!==a&&Me(e,t,r,s,i,a)}Sx(e,u,d);return;case"option":for(var _ in n)u=n[_],n.hasOwnProperty(_)&&u!=null&&!i.hasOwnProperty(_)&&(_==="selected"?e.selected=!1:Me(e,t,_,null,i,u));for(l in i)u=i[l],d=n[l],i.hasOwnProperty(l)&&u!==d&&(u!=null||d!=null)&&(l==="selected"?(u!==d&&(he=!0),e.selected=u&&typeof u!="function"&&typeof u!="symbol"):Me(e,t,l,u,i,d));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var S in n)u=n[S],n.hasOwnProperty(S)&&u!=null&&!i.hasOwnProperty(S)&&Me(e,t,S,null,i,u);for(c in i)if(u=i[c],d=n[c],i.hasOwnProperty(c)&&u!==d&&(u!=null||d!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(u!=null)throw Error(Q(137,t));break;default:Me(e,t,c,u,i,d)}return;default:if(tg(t)){for(var g in n)u=n[g],n.hasOwnProperty(g)&&u!==void 0&&!i.hasOwnProperty(g)&&zm(e,t,g,void 0,i,u);for(h in i)u=i[h],d=n[h],!i.hasOwnProperty(h)||u===d||u===void 0&&d===void 0||zm(e,t,h,u,i,d);return}}for(var f in n)u=n[f],n.hasOwnProperty(f)&&u!=null&&!i.hasOwnProperty(f)&&Me(e,t,f,null,i,u);for(p in i)u=i[p],d=n[p],!i.hasOwnProperty(p)||u===d||u==null&&d==null||Me(e,t,p,u,i,d)}function Cy(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function cw(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var s=n[i],a=s.transferSize,r=s.initiatorType,o=s.duration;if(a&&o&&Cy(r)){for(r=0,o=s.responseEnd,i+=1;i<n.length;i++){var l=n[i],c=l.startTime;if(c>o)break;var h=l.transferSize,p=l.initiatorType;h&&Cy(p)&&(l=l.responseEnd,r+=h*(l<o?1:(o-c)/(l-c)))}if(--i,t+=8*(a+r)/(s.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Fm=null,Hm=null;function $l(e){return e.nodeType===9?e:e.ownerDocument}function Ny(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function wM(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function RM(e,t,n,i){return n=$l(n).createElement(e),n[vn]=i,n[Jn]=t,Mn(n,e,t),hn(n),n}function Gm(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Op=null;function uw(){var e=window.event;return e&&e.type==="popstate"?e===Op?!1:(Op=e,!0):(Op=null,!1)}var Hg=typeof setTimeout=="function"?setTimeout:void 0,hw=typeof clearTimeout=="function"?clearTimeout:void 0,Dy=typeof Promise=="function"?Promise:void 0,Ly=typeof requestAnimationFrame=="function"?requestAnimationFrame:Hg,fw=typeof queueMicrotask=="function"?queueMicrotask:typeof Dy<"u"?function(e){return Dy.resolve(null).then(e).catch(dw)}:Hg;function dw(e){setTimeout(function(){throw e})}function Ea(e){return e==="head"}function Uy(e,t){var n=t,i=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(s),Eo(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")Bp(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Bp(n);for(var a=n.firstChild;a;){var r=a.nextSibling,o=a.nodeName;a[lc]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&a.rel.toLowerCase()==="stylesheet"||n.removeChild(a),a=r}}else n==="body"&&Bp(e.ownerDocument.body);n=s}while(n);Eo(t)}function Iy(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function CM(e,t,n){if(t=CSS.escape(t)!==t?"r-"+btoa(t).replace(/=/g,""):t,e.style.viewTransitionName=t,n!=null&&(e.style.viewTransitionClass=n),n=getComputedStyle(e),n.display==="inline"){if(t=e.getClientRects(),t.length===1)var i=1;else for(var s=i=0;s<t.length;s++){var a=t[s];0<a.width&&0<a.height&&i++}i===1&&(e=e.style,e.display=t.length===1?"inline-block":"block",e.marginTop="-"+n.paddingTop,e.marginBottom="-"+n.paddingBottom)}}function NM(e,t){e=e.style,t=t.style;var n=t!=null?t.hasOwnProperty("viewTransitionName")?t.viewTransitionName:t.hasOwnProperty("view-transition-name")?t["view-transition-name"]:null:null;e.viewTransitionName=n==null||typeof n=="boolean"?"":(""+n).trim(),n=t!=null?t.hasOwnProperty("viewTransitionClass")?t.viewTransitionClass:t.hasOwnProperty("view-transition-class")?t["view-transition-class"]:null:null,e.viewTransitionClass=n==null||typeof n=="boolean"?"":(""+n).trim(),e.display==="inline-block"&&(t==null?e.display=e.margin="":(n=t.display,e.display=n==null||typeof n=="boolean"?"":n,n=t.margin,n!=null?e.margin=n:(n=t.hasOwnProperty("marginTop")?t.marginTop:t["margin-top"],e.marginTop=n==null||typeof n=="boolean"?"":n,t=t.hasOwnProperty("marginBottom")?t.marginBottom:t["margin-bottom"],e.marginBottom=t==null||typeof t=="boolean"?"":t)))}function DM(e,t,n){return n=n.ownerDocument.defaultView,{rect:e,abs:t.position==="absolute"||t.position==="fixed",clip:t.clipPath!=="none"||t.overflow!=="visible"||t.filter!=="none"||t.mask!=="none"||t.mask!=="none"||t.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=n.innerHeight&&e.left<=n.innerWidth}}function Vm(e){var t=e.getBoundingClientRect(),n=getComputedStyle(e);return DM(t,n,e)}function pw(e){var t=e.getBoundingClientRect();t=new DOMRect(t.x+2e4,t.y+2e4,t.width,t.height);var n=getComputedStyle(e);return DM(t,n,e)}function mw(e){return e.documentElement.clientHeight}function gw(e){this.addEventListener("load",e),this.addEventListener("error",e)}function _w(e,t,n,i,s,a,r,o,l){var c=t.nodeType===9?t:t.ownerDocument;try{var h=c.startViewTransition({update:function(){var u=c.defaultView,d=u.navigation&&u.navigation.transition,_=c.fonts.status;i();var S=[];if(_==="loaded"&&(mw(c),c.fonts.status==="loading"&&S.push(c.fonts.ready)),_=S.length,e!==null)for(var g=e.suspenseyImages,f=0,m=0;m<g.length;m++){var y=g[m];if(!y.complete){var x=y.getBoundingClientRect();if(0<x.bottom&&0<x.right&&x.top<u.innerHeight&&x.left<u.innerWidth){if(f+=kM(y),f>Zu){S.length=_;break}y=new Promise(gw.bind(y)),S.push(y)}}}if(0<S.length)return u=Promise.race([Promise.all(S),new Promise(function(E){return setTimeout(E,500)})]).then(s,s),(d?Promise.allSettled([d.finished,u]):u).then(a,a);if(s(),d)return d.finished.then(a,a);a()},types:n});c.__reactViewTransition=h;var p=[];return h.ready.then(function(){for(var u=c.documentElement.getAnimations({subtree:!0}),d=0;d<u.length;d++){var _=u[d],S=_.effect,g=S.pseudoElement;if(g!=null&&g.startsWith("::view-transition")){p.push(_),_=S.getKeyframes();for(var f=g=void 0,m=!0,y=0;y<_.length;y++){var x=_[y],E=x.width;if(g===void 0)g=E;else if(g!==E){m=!1;break}if(E=x.height,f===void 0)f=E;else if(f!==E){m=!1;break}delete x.width,delete x.height,x.transform==="none"&&delete x.transform}m&&g!==void 0&&f!==void 0&&(S.setKeyframes(_),m=getComputedStyle(S.target,S.pseudoElement),m.width!==g||m.height!==f)&&(m=_[0],m.width=g,m.height=f,m=_[_.length-1],m.width=g,m.height=f,S.setKeyframes(_))}}r()},function(u){c.__reactViewTransition===h&&(c.__reactViewTransition=null);try{typeof u=="object"&&u!==null&&u.name==="InvalidStateError"&&(u.message==="View transition was skipped because document visibility state is hidden."||u.message==="Skipping view transition because document visibility state has become hidden."||u.message==="Skipping view transition because viewport size changed."||u.message==="Transition was aborted because of invalid state")&&(u=null),u!==null&&l(u)}finally{i(),s(),r()}}),h.finished.finally(function(){for(var u=0;u<p.length;u++)p[u].cancel();c.__reactViewTransition===h&&(c.__reactViewTransition=null),o()}),h}catch{return i(),s(),r(),null}}function $a(e,t){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+t+")"}$a.prototype.animate=function(e,t){return t=typeof t=="number"?{duration:t}:we({},t),t.pseudoElement=this._selector,this._scope.animate(e,t)};$a.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,n=e.getAnimations({subtree:!0}),i=[],s=0;s<n.length;s++){var a=n[s].effect;a!==null&&a.target===e&&a.pseudoElement===t&&i.push(n[s])}return i};$a.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function LM(e){return{name:e,group:new $a("group",e),imagePair:new $a("image-pair",e),old:new $a("old",e),new:new $a("new",e)}}function ci(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}ci.prototype.addEventListener=function(e,t,n){var i=null,s=null;if(!(n!=null&&typeof n!="boolean"&&(i=n.signal||null,i!==null&&i.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var a=this._eventListeners;if(UM(a,e,t,n)===-1){var r=this,o=t;n!=null&&typeof n!="boolean"&&n.once===!0&&(o=function(l){r.removeEventListener(e,t,n),typeof t=="function"?t.call(this,l):t.handleEvent(l)}),i!==null&&(s=r.removeEventListener.bind(r,e,t,n),i.addEventListener("abort",s,{once:!0}),s=i.removeEventListener.bind(i,"abort",s)),i=So(n),a.push({type:e,listener:t,optionsOrUseCapture:n,attachedListener:o,cleanup:s}),Zn(this._fragmentFiber.child,!1,vw,e,o,i)}this._eventListeners=a}};function vw(e,t,n,i){return nn(e).addEventListener(t,n,i),!1}ci.prototype.removeEventListener=function(e,t,n){var i=this._eventListeners;if(i!==null&&(t=UM(i,e,t,n),t!==-1)){var s=i[t];n=s.attachedListener;var a=s.cleanup;s=So(s.optionsOrUseCapture),Zn(this._fragmentFiber.child,!1,yw,e,n,s),i.splice(t,1),a!==null&&a()}};function yw(e,t,n,i){return nn(e).removeEventListener(t,n,i),!1}function So(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function Oy(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function UM(e,t,n,i){if(e.length===0)return-1;i=Oy(i);for(var s=0;s<e.length;s++){var a=e[s];if(a.type===t&&a.listener===n&&Oy(a.optionsOrUseCapture)===i)return s}return-1}ci.prototype.dispatchEvent=function(e){var t=dr(this._fragmentFiber);if(t===null)return!0;t=nn(t);var n=this._eventListeners;if(n!==null&&0<n.length||!e.bubbles){var i=t.nodeType===9?t.createComment(""):document.createTextNode("");if(n)for(var s=0;s<n.length;s++){var a=n[s];i.addEventListener(a.type,a.attachedListener,So(a.optionsOrUseCapture))}if(t.appendChild(i),e=i.dispatchEvent(e),n)for(s=0;s<n.length;s++)a=n[s],i.removeEventListener(a.type,a.attachedListener,So(a.optionsOrUseCapture));return t.removeChild(i),e}return t.dispatchEvent(e)};ci.prototype.focus=function(e){Zn(this._fragmentFiber.child,!0,IM,e,void 0,void 0)};function IM(e,t){return e.tag===6?!1:(e=nn(e),Dw(e,t))}ci.prototype.focusLast=function(e){var t=[];Zn(this._fragmentFiber.child,!0,Gg,t,void 0,void 0);for(var n=t.length-1;0<=n&&!IM(t[n],e);n--);};function Gg(e,t){return t.push(e),!1}ci.prototype.blur=function(){var e=dr(this._fragmentFiber);e!==null&&(e=nn(e),e=$l(e).activeElement,e!==null&&Zn(this._fragmentFiber.child,!1,xw,e,void 0,void 0))};function xw(e,t){return e.tag===6?!1:(e=nn(e),e===t||e.contains(t)?(t.blur(),!0):!1)}ci.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),Zn(this._fragmentFiber.child,!1,Sw,e,void 0,void 0)};function Sw(e,t){return e.tag===6||(e=nn(e),t.observe(e)),!1}ci.prototype.unobserveUsing=function(e){var t=this._observers;if(t!==null&&t.has(e)){t.delete(e),Zn(this._fragmentFiber.child,!1,Mw,e,void 0,void 0);for(var n=t=0;n<Li.length;n++){var i=Li[n];i.fragmentInstance===this&&i.observer===e?e.unobserve(i.instance):Li[t++]=i}Li.length=t}};function Mw(e,t){return e.tag===6||(e=nn(e),t.unobserve(e)),!1}var Li=[],Pp=!1;function bw(e,t,n){Li.push({fragmentInstance:e,observer:t,instance:n}),Pp||(Pp=!0,Lw(function(){Pp=!1;var i=Li;Li=[];for(var s=0;s<i.length;s++){var a=i[s];a.observer.unobserve(a.instance)}}))}ci.prototype.getClientRects=function(){var e=[];return Zn(this._fragmentFiber.child,!1,Tw,e,void 0,void 0),e};function Tw(e,t){if(e.tag===6){e=e.stateNode;var n=e.ownerDocument.createRange();n.selectNodeContents(e),t.push.apply(t,n.getClientRects())}else e=nn(e),t.push.apply(t,e.getClientRects());return!1}ci.prototype.getRootNode=function(e){var t=dr(this._fragmentFiber);return t===null?this:nn(t).getRootNode(e)};ci.prototype.compareDocumentPosition=function(e){var t=dr(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];Zn(this._fragmentFiber.child,!1,Gg,n,void 0,void 0);var i=nn(t);if(n.length===0){if(n=i,pv(this._fragmentFiber)){t:{for(t=this._fragmentFiber.return;t!==null;){if(t.tag===4){t=t.stateNode.containerInfo;break t}if(t.tag===3||t.tag===5||t.tag===27)break;t=t.return}t=null}t!=null&&(n=t)}t=this._fragmentFiber;var s=i=n.compareDocumentPosition(e);return n===e?s=Node.DOCUMENT_POSITION_CONTAINS:i&Node.DOCUMENT_POSITION_CONTAINED_BY&&(n=nx(t)[1],n===null?s=Node.DOCUMENT_POSITION_PRECEDING:(e=nn(n).compareDocumentPosition(e),s=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),s|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=nn(n[0]),s=nn(n[n.length-1]);var a=pv(this._fragmentFiber)?t.parentElement:i;if(a==null)return Node.DOCUMENT_POSITION_DISCONNECTED;i=a.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,a=a.compareDocumentPosition(s)&Node.DOCUMENT_POSITION_CONTAINED_BY;var r=t.compareDocumentPosition(e),o=s.compareDocumentPosition(e),l=r&Node.DOCUMENT_POSITION_CONTAINED_BY||o&Node.DOCUMENT_POSITION_CONTAINED_BY;return o=i&&a&&r&Node.DOCUMENT_POSITION_FOLLOWING&&o&Node.DOCUMENT_POSITION_PRECEDING,t=i&&t===e||a&&s===e||l||o?Node.DOCUMENT_POSITION_CONTAINED_BY:!i&&t===e||!a&&s===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:r,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||Ew(t,this._fragmentFiber,n[0],n[n.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function Ew(e,t,n,i,s){var a=ja(s);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!a)t:{for(;a!==null;){if(a.tag===7&&(a===t||a.alternate===t)){n=!0;break t}a=a.return}n=!1}return n}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(a===null)return a=s.ownerDocument,s===a||s===a.documentElement||s===a.body;t:{for(a=t,t=dr(t);a!==null;){if(!(a.tag!==5&&a.tag!==3&&a.tag!==27||a!==t&&a.alternate!==t)){a=!0;break t}a=a.return}a=!1}return a}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!a)&&!(t=a===n)&&(t=Fp(n,a,mv),t===null?t=!1:(Zn(t,!0,eE,a,n),a=Xr,Xr=null,t=a!==null)),t):e&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!a)&&!(t=a===i)&&(t=Fp(i,a,mv),t===null?t=!1:(Zn(t,!0,nE,a,i),a=Xr,zp=Xr=null,t=a!==null)),t):!1}function Py(e,t){var n=e.ownerDocument.createRange();n.selectNodeContents(e),e=n.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}ci.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(Q(566));var t=[];Zn(this._fragmentFiber.child,!1,Gg,t,void 0,void 0);var n=e!==!1;if(t.length===0){var i=nx(this._fragmentFiber);if(i=n?i[1]||i[0]||dr(this._fragmentFiber):i[0]||i[1],i===null)return;if(i.tag===6){e=nn(i),Py(e,n);return}if(i=nn(i),i.nodeType!==9){if(i.nodeType===11){n="host"in i?i.host:null,n!==null&&n.scrollIntoView(e);return}i.scrollIntoView(e)}}for(i=n?t.length-1:0;i!==(n?-1:t.length);){var s=t[i];s.tag===6?(s=nn(s),Py(s,n)):nn(s).scrollIntoView(e),i+=n?-1:1}};function Aw(e,t){return e=nn(e),OM(e,t),!1}function OM(e,t){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(t)}function PM(e,t){var n=t._eventListeners;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i];e.addEventListener(s.type,s.attachedListener,So(s.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(a){for(var r=0,o=0;o<Li.length;o++){var l=Li[o];(l.fragmentInstance!==t||l.observer!==a||l.instance!==e)&&(Li[r++]=l)}Li.length=r,a.observe(e)}),OM(e,t))}function ww(e,t){var n=t._eventListeners;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i];e.removeEventListener(s.type,s.attachedListener,So(s.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(a){typeof a.rootMargin=="string"?bw(t,a,e):a.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(t))}function km(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":km(n),wh(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function Rw(e,t,n,i){for(;e.nodeType===1;){var s=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[lc])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(a=e.getAttribute("rel"),a==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(a!==s.rel||e.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||e.getAttribute("title")!==(s.title==null?null:s.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(a=e.getAttribute("src"),(a!==(s.src==null?null:s.src)||e.getAttribute("type")!==(s.type==null?null:s.type)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&a&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var a=s.name==null?null:""+s.name;if(s.type==="hidden"&&e.getAttribute("name")===a)return e}else return e;if(e=bi(e.nextSibling),e===null)break}return null}function Cw(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=bi(e.nextSibling),e===null))return null;return e}function BM(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=bi(e.nextSibling),e===null))return null;return e}function Xm(e){return e.data==="$?"||e.data==="$~"}function Vg(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Nw(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function bi(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Wm=null;function By(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return bi(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function zy(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function Dw(e,t){function n(){i=!0}if(e.ownerDocument.activeElement===e)return!0;var i=!1;try{e.ownerDocument.addEventListener("focus",n,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener("focus",n,!0)}return i}function Lw(e){Ly(function(){Ly(function(t){return e(t)})})}function zM(e,t,n){switch(t=$l(n),e){case"html":if(e=t.documentElement,!e)throw Error(Q(452));return e;case"head":if(e=t.head,!e)throw Error(Q(453));return e;case"body":if(e=t.body,!e)throw Error(Q(454));return e;default:throw Error(Q(451))}}function FM(e,t,n){for(var i in n){var s=n[i];n.hasOwnProperty(i)&&s!=null&&Me(e,t,i,null,ow,s)}n.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===$i&&(e.onclick=null),wh(e)}function Bp(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);wh(e)}var Ti=new Map,Fy=new Set;function tc(e){if(typeof e.getRootNode=="function"){var t=e.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return e.nodeType===9?e:e.ownerDocument}var Is=me.d;me.d={f:Uw,r:Iw,D:Ow,C:Pw,L:Bw,m:zw,X:Hw,S:Fw,M:Gw};function Uw(){var e=Is.f(),t=Gh();return e||t}function Iw(e){var t=wo(e);t!==null&&t.tag===5&&t.type==="form"?bS(t):Is.r(e)}var Do=typeof document>"u"?null:document;function HM(e,t,n){var i=Do;if(i&&typeof t=="string"&&t){var s=xi(t);s='link[rel="'+e+'"][href="'+s+'"]',typeof n=="string"&&(s+='[crossorigin="'+n+'"]'),Fy.has(s)||(Fy.add(s),e={rel:e,crossOrigin:n,href:t},i.querySelector(s)===null&&(t=i.createElement("link"),Mn(t,"link",e),hn(t),i.head.appendChild(t)))}}function Ow(e){Is.D(e),HM("dns-prefetch",e,null)}function Pw(e,t){Is.C(e,t),HM("preconnect",e,t)}function Bw(e,t,n){Is.L(e,t,n);var i=Do;if(i&&e&&t){var s='link[rel="preload"][as="'+xi(t)+'"]';t==="image"&&n&&n.imageSrcSet?(s+='[imagesrcset="'+xi(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(s+='[imagesizes="'+xi(n.imageSizes)+'"]')):s+='[href="'+xi(e)+'"]';var a=s;switch(t){case"style":a=Mo(e);break;case"script":a=Lo(e)}if(!(Ti.has(a)||(e=we({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Ti.set(a,e),i.querySelector(s)!==null||t==="style"&&i.querySelector(pc(a))||t==="script"&&i.querySelector(mc(a))))){var r=i.createElement("link");Mn(r,"link",e),t==="style"&&(r[eh]=!0,r.onload=r.onerror=function(){mx(r)}),hn(r),i.head.appendChild(r)}}}function zw(e,t){Is.m(e,t);var n=Do;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",s='link[rel="modulepreload"][as="'+xi(i)+'"][href="'+xi(e)+'"]',a=s;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":a=Lo(e)}if(!Ti.has(a)&&(e=we({rel:"modulepreload",href:e},t),Ti.set(a,e),n.querySelector(s)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(mc(a)))return}i=n.createElement("link"),Mn(i,"link",e),hn(i),n.head.appendChild(i)}}}function Fw(e,t,n){Is.S(e,t,n);var i=Do;if(i&&e){var s=no(i).hoistableStyles,a=Mo(e);t=t||"default";var r=s.get(a);if(!r){var o={loading:0,preload:null};if(r=i.querySelector(pc(a)))o.loading=5;else{e=we({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Ti.get(a))&&kg(e,n);var l=r=i.createElement("link");hn(l),Mn(l,"link",e),l._p=new Promise(function(c,h){l.onload=c,l.onerror=h}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,qu(r,t,i)}r={type:"stylesheet",instance:r,count:1,state:o},s.set(a,r)}}}function Hw(e,t){Is.X(e,t);var n=Do;if(n&&e){var i=no(n).hoistableScripts,s=Lo(e),a=i.get(s);a||(a=n.querySelector(mc(s)),a||(e=we({src:e,async:!0},t),(t=Ti.get(s))&&Xg(e,t),a=n.createElement("script"),hn(a),Mn(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(s,a))}}function Gw(e,t){Is.M(e,t);var n=Do;if(n&&e){var i=no(n).hoistableScripts,s=Lo(e),a=i.get(s);a||(a=n.querySelector(mc(s)),a||(e=we({src:e,async:!0,type:"module"},t),(t=Ti.get(s))&&Xg(e,t),a=n.createElement("script"),hn(a),Mn(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(s,a))}}function Hy(e,t,n,i){var s=(s=ca.current)?tc(s):null;if(!s)throw Error(Q(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(n=Mo(n.href),t=no(s).hoistableStyles,i=t.get(n),i||(i={type:"style",instance:null,count:0,state:null},t.set(n,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Mo(n.href);var a=no(s).hoistableStyles,r=a.get(e);if(r||(s=s.ownerDocument||s,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},a.set(e,r),(a=s.querySelector(pc(e)))?a._p||(r.instance=a,r.state.loading=5):(a=Ti.get(e),a||(a={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Ti.set(e,a)),Vw(s,e,a,r.state))),t&&i===null)throw Error(Q(528,""));return r}if(t&&i!==null)throw Error(Q(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(n=Lo(n),t=no(s).hoistableScripts,i=t.get(n),i||(i={type:"script",instance:null,count:0,state:null},t.set(n,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(Q(444,e))}}function Mo(e){return'href="'+xi(e)+'"'}function pc(e){return'link[rel="stylesheet"]['+e+"]"}function GM(e){return we({},e,{"data-precedence":e.precedence,precedence:null})}function Vw(e,t,n,i){if(t=e.querySelector('link[rel="preload"][as="style"]['+t+"]")){if(t[eh]!==!0){i.loading=1;return}}else t=e.createElement("link"),t[eh]=!0,t.onload=t.onerror=mx.bind(null,t),Mn(t,"link",n),hn(t),e.head.appendChild(t);i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2})}function Lo(e){return'[src="'+xi(e)+'"]'}function mc(e){return"script[async]"+e}function Gy(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+xi(n.href)+'"]');if(i)return t.instance=i,hn(i),i;var s=we({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),hn(i),Mn(i,"style",s),qu(i,n.precedence,e),t.instance=i;case"stylesheet":s=Mo(n.href);var a=e.querySelector(pc(s));if(a)return t.state.loading|=4,t.instance=a,hn(a),a;i=GM(n),(s=Ti.get(s))&&kg(i,s),a=(e.ownerDocument||e).createElement("link"),hn(a);var r=a;return r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),Mn(a,"link",i),t.state.loading|=4,qu(a,n.precedence,e),t.instance=a;case"script":return a=Lo(n.src),(s=e.querySelector(mc(a)))?(t.instance=s,hn(s),s):(i=n,(s=Ti.get(a))&&(i=we({},n),Xg(i,s)),e=e.ownerDocument||e,s=e.createElement("script"),hn(s),Mn(s,"link",i),e.head.appendChild(s),t.instance=s);case"void":return null;default:throw Error(Q(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,qu(i,n.precedence,e));return t.instance}function qu(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=i.length?i[i.length-1]:null,a=s,r=0;r<i.length;r++){var o=i[r];if(o.dataset.precedence===t)a=o;else if(a!==s)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function kg(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Xg(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Yu=null;function Vy(e,t,n){if(Yu===null){var i=new Map,s=Yu=new Map;s.set(n,i)}else s=Yu,i=s.get(n),i||(i=new Map,s.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),s=0;s<n.length;s++){var a=n[s];if(!(a[lc]||a[vn]||e==="link"&&a.getAttribute("rel")==="stylesheet")&&a.namespaceURI!=="http://www.w3.org/2000/svg"){var r=a.getAttribute(t)||"";r=e+r;var o=i.get(r);o?o.push(a):i.set(r,[a])}}return i}function qm(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function kw(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function ky(e,t){return e==="img"&&t.src!=null&&t.src!==""&&t.onLoad==null&&t.loading!=="lazy"}function VM(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function kM(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function Xy(e,t){typeof t.decode=="function"&&(e.imgCount++,t.complete||(e.imgBytes+=kM(t),e.suspenseyImages.push(t)),e=qw.bind(e),t.decode().then(e,e))}function Xw(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var s=Mo(i.href),a=t.querySelector(pc(s));if(a){t=a._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=ec.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,hn(a);return}a=t.ownerDocument||t,i=GM(i),(s=Ti.get(s))&&kg(i,s),a=a.createElement("link"),hn(a);var r=a;r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),Mn(a,"link",i),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=ec.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Zu=0;function Ww(e,t){return e.stylesheets&&e.count===0&&Ju(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&Ju(e,e.stylesheets),e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}},6e4+t);0<e.imgBytes&&Zu===0&&(Zu=62500*cw());var s=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Ju(e,e.stylesheets),e.unsuspend)){var a=e.unsuspend;e.unsuspend=null,a()}},(e.imgBytes>Zu?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(s)}}:null}function XM(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)Ju(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}}function ec(){this.count--,XM(this)}function qw(){this.imgCount--,XM(this)}var Th=null;function Ju(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Th=new Map,t.forEach(Yw,e),Th=null,ec.call(e))}function Yw(e,t){if(!(t.state.loading&4)){var n=Th.get(e);if(n)var i=n.get(null);else{n=new Map,Th.set(e,n);for(var s=e.querySelectorAll("link[data-precedence],style[data-precedence]"),a=0;a<s.length;a++){var r=s[a];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(n.set(r.dataset.precedence,r),i=r)}i&&n.set(null,i)}s=t.instance,r=s.getAttribute("data-precedence"),a=n.get(r)||i,a===i&&n.set(null,s),n.set(r,s),this.count++,i=ec.bind(this),s.addEventListener("load",i),s.addEventListener("error",i),a?a.parentNode.insertBefore(s,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(s,e.firstChild)),t.state.loading|=4}}var bo={$$typeof:ji,Provider:null,Consumer:null,_currentValue:tr,_currentValue2:tr,_threadCount:0};function Zw(e,t,n,i,s,a,r,o,l){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=hp(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=hp(0),this.hiddenUpdates=hp(null),this.identifierPrefix=i,this.onUncaughtError=s,this.onCaughtError=a,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.transitionTypes=null,this.incompleteTransitions=new Map}function WM(e,t,n,i,s,a,r,o,l,c,h,p){return e=new Zw(e,t,n,r,l,c,h,p,o),t=1,a===!0&&(t|=24),a=qn(3,null,null,t),e.current=a,a.stateNode=e,t=ug(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:i,isDehydrated:n,cache:t},dg(a),e}function qM(e){return e?(e=jr,e):jr}function YM(e,t,n,i,s,a){s=qM(s),i.context===null?i.context=s:i.pendingContext=s,i=ha(t),i.payload={element:n},a=a===void 0?null:a,a!==null&&(i.callback=a),n=fa(e,i,t),n!==null&&(Yn(n,e,t),Ul(n,e,t))}function Wy(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Wg(e,t){Wy(e,t),(e=e.alternate)&&Wy(e,t)}function ZM(e){if(e.tag===13||e.tag===31){var t=gr(e,67108864);t!==null&&Yn(t,e,67108864),Wg(e,67108864)}}function qy(e){if(e.tag===13||e.tag===31){var t=oi();t=jm(t);var n=gr(e,t);n!==null&&Yn(n,e,t),Wg(e,t)}}var To=!0;function Jw(e,t,n,i){var s=It.T;It.T=null;var a=me.p;try{me.p=2,qg(e,t,n,i)}finally{me.p=a,It.T=s}}function Kw(e,t,n,i){var s=It.T;It.T=null;var a=me.p;try{me.p=8,qg(e,t,n,i)}finally{me.p=a,It.T=s}}function qg(e,t,n,i){if(To){var s=Ym(i);if(s===null)Ip(e,t,i,Eh,n),Yy(e,i);else if(jw(s,e,t,n,i))i.stopPropagation();else if(Yy(e,i),t&4&&-1<Qw.indexOf(e)){for(;s!==null;){var a=wo(s);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var r=Ja(a.pendingLanes);if(r!==0){var o=a;for(o.pendingLanes|=2,o.entangledLanes|=2;r;){var l=1<<31-ri(r);o.entanglements[1]|=l,r&=~l}rs(a),(pe&6)===0&&(yh=si()+500,dc(0,!1))}}break;case 31:case 13:o=gr(a,2),o!==null&&Yn(o,a,2),Gh(),Wg(a,2)}if(a=Ym(i),a===null&&Ip(e,t,i,Eh,n),a===s)break;s=a}s!==null&&i.stopPropagation()}else Ip(e,t,i,null,n)}}function Ym(e){return e=eg(e),Yg(e)}var Eh=null;function Yg(e){if(Eh=null,e=ja(e),e!==null){var t=sc(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=$y(t),e!==null)return e;e=null}else if(n===31){if(e=tx(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Eh=e,null}function JM(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(hE()){case rx:return 2;case ox:return 8;case th:case fE:return 32;case lx:return 268435456;default:return 32}default:return 32}}var Zm=!1,ga=null,_a=null,va=null,nc=new Map,ic=new Map,na=[],Qw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Yy(e,t){switch(e){case"focusin":case"focusout":ga=null;break;case"dragenter":case"dragleave":_a=null;break;case"mouseover":case"mouseout":va=null;break;case"pointerover":case"pointerout":nc.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ic.delete(t.pointerId)}}function Ml(e,t,n,i,s,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:a,targetContainers:[s]},t!==null&&(t=wo(t),t!==null&&ZM(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function jw(e,t,n,i,s){switch(t){case"focusin":return ga=Ml(ga,e,t,n,i,s),!0;case"dragenter":return _a=Ml(_a,e,t,n,i,s),!0;case"mouseover":return va=Ml(va,e,t,n,i,s),!0;case"pointerover":var a=s.pointerId;return nc.set(a,Ml(nc.get(a)||null,e,t,n,i,s)),!0;case"gotpointercapture":return a=s.pointerId,ic.set(a,Ml(ic.get(a)||null,e,t,n,i,s)),!0}return!1}function KM(e){var t=ja(e.target);if(t!==null){var n=sc(t);if(n!==null){if(t=n.tag,t===13){if(t=$y(n),t!==null){e.blockedOn=t,yv(e.priority,function(){qy(n)});return}}else if(t===31){if(t=tx(n),t!==null){e.blockedOn=t,yv(e.priority,function(){qy(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ku(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ym(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);Qp=i,n.target.dispatchEvent(i),Qp=null}else return t=wo(n),t!==null&&ZM(t),e.blockedOn=n,!1;t.shift()}return!0}function Zy(e,t,n){Ku(e)&&n.delete(t)}function $w(){Zm=!1,ga!==null&&Ku(ga)&&(ga=null),_a!==null&&Ku(_a)&&(_a=null),va!==null&&Ku(va)&&(va=null),nc.forEach(Zy),ic.forEach(Zy)}function Nu(e,t){e.blockedOn===t&&(e.blockedOn=null,Zm||(Zm=!0,sn.unstable_scheduleCallback(sn.unstable_NormalPriority,$w)))}var Du=null;function Jy(e){Du!==e&&(Du=e,sn.unstable_scheduleCallback(sn.unstable_NormalPriority,function(){Du===e&&(Du=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],s=e[t+2];if(typeof i!="function"){if(Yg(i||n)===null)continue;break}var a=wo(n);a!==null&&(e.splice(t,3),t-=3,dm(a,{pending:!0,data:s,method:n.method,action:i},i,s))}}))}function Eo(e){function t(l){return Nu(l,e)}ga!==null&&Nu(ga,e),_a!==null&&Nu(_a,e),va!==null&&Nu(va,e),nc.forEach(t),ic.forEach(t);for(var n=0;n<na.length;n++){var i=na[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<na.length&&(n=na[0],n.blockedOn===null);)KM(n),n.blockedOn===null&&na.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var s=n[i],a=n[i+1],r=s[Jn]||null;if(typeof a=="function")r||Jy(n);else if(r){var o=null;if(a&&a.hasAttribute("formAction")){if(s=a,r=a[Jn]||null)o=r.formAction;else if(Yg(s)!==null)continue}else o=r.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),Jy(n)}}}function QM(){function e(a){a.canIntercept&&a.info==="react-transition"&&a.intercept({handler:function(){return new Promise(function(r){return s=r})},focusReset:"manual",scroll:"manual"})}function t(){s!==null&&(s(),s=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var a=navigation.currentEntry;a&&a.url!=null&&navigation.navigate(a.url,{state:a.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,s=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),s!==null&&(s(),s=null)}}}function Zg(e){this._internalRoot=e}Xh.prototype.render=Zg.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(Q(409));var n=t.current,i=oi();YM(n,i,e,t,null,null)};Xh.prototype.unmount=Zg.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;YM(e.current,2,null,e,null,null),Gh(),t[Ao]=null}};function Xh(e){this._internalRoot=e}Xh.prototype.unstable_scheduleHydration=function(e){if(e){var t=px();e={blockedOn:null,target:e,priority:t};for(var n=0;n<na.length&&t!==0&&t<na[n].priority;n++);na.splice(n,0,e),n===0&&KM(e)}};var Ky=Qy.version;if(Ky!=="19.3.0")throw Error(Q(527,Ky,"19.3.0"));me.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(Q(188)):(e=Object.keys(e).join(","),Error(Q(268,e)));return e=tE(t),e=e!==null?ex(e):null,e=e===null?null:e.stateNode,e};var tR={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:It,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(bl=__REACT_DEVTOOLS_GLOBAL_HOOK__,!bl.isDisabled&&bl.supportsFiber))try{ac=bl.inject(tR),ai=bl}catch{}var bl;Wh.createRoot=function(e,t){if(!jy(e))throw Error(Q(299));var n=!1,i="",s=DS,a=LS,r=US;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(s=t.onUncaughtError),t.onCaughtError!==void 0&&(a=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=WM(e,1,!1,null,null,n,i,null,s,a,r,QM),e[Ao]=t.current,Fg(e),new Zg(t)};Wh.hydrateRoot=function(e,t,n){if(!jy(e))throw Error(Q(299));var i=!1,s="",a=DS,r=LS,o=US,l=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(a=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.formState!==void 0&&(l=n.formState)),t=WM(e,1,!0,t,n??null,i,s,l,a,r,o,QM),t.context=qM(null),n=t.current,i=oi(),i=jm(i),s=ha(i),s.callback=null,fa(n,s,i),n=i,t.current.lanes=n,oc(t,n),rs(t),e[Ao]=t.current,Fg(e),new Xh(t)};Wh.version="19.3.0"});var eb=Wi((lL,tb)=>{"use strict";function $M(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE($M)}catch(e){console.error(e)}}$M(),tb.exports=jM()});var oT=Wi(Gd=>{"use strict";var FD=Symbol.for("react.transitional.element"),HD=Symbol.for("react.fragment");function rT(e,t,n){var i=null;if(n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),"key"in t){n={};for(var s in t)s!=="key"&&(n[s]=t[s])}else n=t;return t=n.ref,{$$typeof:FD,type:e,key:i,ref:t!==void 0?t:null,props:n}}Gd.Fragment=HD;Gd.jsx=rT;Gd.jsxs=rT});var Ur=Wi((KO,lT)=>{"use strict";lT.exports=oT()});var vT=vs(eb(),1);var We=vs(gl(),1);var yr={hr:88,ventOn:!1,ventRr:16},qh=null,eR=0,Uo=0,vr=0,Jg=null,Kg=!1;function nR(){let e=window.AudioContext||window.webkitAudioContext;return e?(qh||(qh=new e),qh):null}function iR(e){if(Jg)return Jg;let t=Math.floor(e.sampleRate*.28),n=e.createBuffer(1,t,e.sampleRate),i=n.getChannelData(0),s=0;for(let a=0;a<t;a++){s=s*.94+(Math.random()*2-1)*.08;let r=Math.sin(a/t*Math.PI);i[a]=s*r*6}return Jg=n,n}function sR(e,t){let n=e.createOscillator(),i=e.createGain();n.type="sine",n.frequency.value=880,i.gain.setValueAtTime(1e-4,t),i.gain.exponentialRampToValueAtTime(.09,t+.008),i.gain.exponentialRampToValueAtTime(1e-4,t+.07),n.connect(i),i.connect(e.destination),n.start(t),n.stop(t+.08)}function aR(e,t){let n=e.createBufferSource();n.buffer=iR(e);let i=e.createBiquadFilter();i.type="bandpass",i.frequency.value=420,i.Q.value=.7;let s=e.createGain();s.gain.setValueAtTime(.22,t),n.connect(i),i.connect(s),s.connect(e.destination),n.start(t),n.stop(t+.28)}function nb(){let e=qh;if(!e||!Kg)return;let t=e.currentTime,n=60/Math.min(180,Math.max(35,yr.hr));for(Uo<t-.05&&(Uo=t+.02);Uo<t+.3;)sR(e,Uo),Uo+=n;if(yr.ventOn){let i=60/Math.min(40,Math.max(6,yr.ventRr));for(vr<t-.05&&(vr=t+.05);vr<t+.3;)aR(e,vr),vr+=i}else vr=t+.2;eR=window.setTimeout(nb,60)}function Io(){let e=nR();e&&(e.resume(),!Kg&&(Kg=!0,Uo=e.currentTime+.05,vr=e.currentTime+.12,nb()))}var gs=vs(gl(),1);var Rb=0,w0=1,Cb=2;var Gc=1,Nb=2,sl=3,Ha=0,Vn=1,pi=2,Ar=0,al=1,R0=2,C0=3,N0=4,Db=5;var wr=100,Lb=101,Ub=102,Ib=103,Ob=104,Pb=200,Bb=201,zb=202,Fb=203,D0=204,L0=205,Hb=206,Gb=207,Vb=208,kb=209,Xb=210,Wb=211,qb=212,Yb=213,Zb=214,gf=0,_f=1,vf=2,Jo=3,yf=4,xf=5,Sf=6,Mf=7,U0=0,Jb=1,Kb=2,ds=0,I0=1,O0=2,P0=3,B0=4,z0=5,F0=6,H0=7;var G0=300,Rr=301,rl=302,Yf=303,Zf=304,bf=1e3,ls=1001,Tf=1002,pn=1003,Qb=1004;var Vc=1005;var je=1006,Jf=1007;var Xs=1008;var Qn=1009,V0=1010,k0=1011,ol=1012,Kf=1013,Hi=1014,Gi=1015,Vi=1016,Qf=1017,jf=1018,Cr=1020,X0=35902,W0=35899,q0=1021,Y0=1022,ki=1023,Gs=1026,Ws=1027,Z0=1028,$f=1029,Ga=1030,td=1031;var ed=1033,kc=33776,Xc=33777,Wc=33778,qc=33779,nd=35840,id=35841,sd=35842,ad=35843,rd=36196,od=37492,ld=37496,cd=37488,ud=37489,Yc=37490,hd=37491,fd=37808,dd=37809,pd=37810,md=37811,gd=37812,_d=37813,vd=37814,yd=37815,xd=37816,Sd=37817,Md=37818,bd=37819,Td=37820,Ed=37821,Ad=36492,wd=36494,Rd=36495,Cd=36283,Nd=36284,Zc=36285,Dd=36286;var Sc=2300,Ef=2301,pf=2302,y0=2303,x0=2400,S0=2401,M0=2402;var jb=3200;var Ld=0,$b=1,qs="",Tn="srgb",Mc="srgb-linear",bc="linear",ve="srgb";var mf=7680;var t1=519,e1=512,n1=513,i1=514,J0=515,s1=516,a1=517,K0=518,Q0=519,r1=35044;var j0="300 es",Ai=2e3,Ko=2001;function rR(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function oR(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Tc(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function o1(){let e=Tc("canvas");return e.style.display="block",e}var ib={},Qo=null;function $0(...e){let t="THREE."+e.shift();Qo?Qo("log",t,...e):console.log(t,...e)}function l1(e){let t=e[0];if(typeof t=="string"&&t.startsWith("TSL:")){let n=e[1];n&&n.isStackTrace?e[0]+=" "+n.getLocation():e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function Ut(...e){e=l1(e);let t="THREE."+e.shift();if(Qo)Qo("warn",t,...e);else{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function Ot(...e){e=l1(e);let t="THREE."+e.shift();if(Qo)Qo("error",t,...e);else{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function xc(...e){let t=e.join(" ");t in ib||(ib[t]=!0,Ut(...e))}function c1(e,t,n){return new Promise(function(i,s){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:s();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:i()}}setTimeout(a,n)})}var u1={[gf]:gf,[vf]:Sf,[yf]:yf,[Jo]:xf,[_f]:_f,[Sf]:vf,[Mf]:Mf,[xf]:Jo},us=class{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let a=s.indexOf(n);a!==-1&&s.splice(a,1)}}dispatchEvent(t){let n=this._listeners;if(n===void 0)return;let i=n[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let a=0,r=s.length;a<r;a++)s[a].call(this,t);t.target=null}}},Nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Qg=Math.PI/180,Af=180/Math.PI;function Jc(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Nn[e&255]+Nn[e>>8&255]+Nn[e>>16&255]+Nn[e>>24&255]+"-"+Nn[t&255]+Nn[t>>8&255]+"-"+Nn[t>>16&15|64]+Nn[t>>24&255]+"-"+Nn[n&63|128]+Nn[n>>8&255]+"-"+Nn[n>>16&255]+Nn[n>>24&255]+Nn[i&255]+Nn[i>>8&255]+Nn[i>>16&255]+Nn[i>>24&255]).toLowerCase()}function oe(e,t,n){return Math.max(t,Math.min(n,e))}function lR(e,t){return(e%t+t)%t}function jg(e,t,n){return(1-n)*e+n*t}function h1(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function t_(e){switch(e.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function cR(e,t){if(t.constructor===Float32Array)return e;let n=t_(t);if(n===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(e/n,-1)}function uR(e,t){if(t.constructor===Float32Array)return e;let n=t_(t);if(n===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(e*n)}var ne=class{static{this.prototype.isVector2=!0}constructor(t=0,n=0){this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let n=this.x,i=this.y,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=oe(this.x,t.x,n.x),this.y=oe(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=oe(this.x,t,n),this.y=oe(this.y,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(oe(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(oe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){let i=Math.cos(n),s=Math.sin(n),a=this.x-t.x,r=this.y-t.y;return this.x=a*i-r*s+t.x,this.y=a*s+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},hs=class{constructor(t=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=s}static slerpFlat(t,n,i,s,a,r,o){let l=i[s+0],c=i[s+1],h=i[s+2],p=i[s+3],u=a[r+0],d=a[r+1],_=a[r+2],S=a[r+3];if(p!==S||l!==u||c!==d||h!==_){let g=l*u+c*d+h*_+p*S;g<0&&(u=-u,d=-d,_=-_,S=-S,g=-g);let f=1-o;if(g<.9995){let m=Math.acos(g),y=Math.sin(m);f=Math.sin(f*m)/y,o=Math.sin(o*m)/y,l=l*f+u*o,c=c*f+d*o,h=h*f+_*o,p=p*f+S*o}else{l=l*f+u*o,c=c*f+d*o,h=h*f+_*o,p=p*f+S*o;let m=1/Math.sqrt(l*l+c*c+h*h+p*p);l*=m,c*=m,h*=m,p*=m}}t[n]=l,t[n+1]=c,t[n+2]=h,t[n+3]=p}static multiplyQuaternionsFlat(t,n,i,s,a,r){let o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],p=a[r],u=a[r+1],d=a[r+2],_=a[r+3];return t[n]=o*_+h*p+l*d-c*u,t[n+1]=l*_+h*u+c*p-o*d,t[n+2]=c*_+h*d+o*u-l*p,t[n+3]=h*_-o*p-l*u-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,s){return this._x=t,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){let i=t._x,s=t._y,a=t._z,r=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),p=o(a/2),u=l(i/2),d=l(s/2),_=l(a/2);switch(r){case"XYZ":this._x=u*h*p+c*d*_,this._y=c*d*p-u*h*_,this._z=c*h*_+u*d*p,this._w=c*h*p-u*d*_;break;case"YXZ":this._x=u*h*p+c*d*_,this._y=c*d*p-u*h*_,this._z=c*h*_-u*d*p,this._w=c*h*p+u*d*_;break;case"ZXY":this._x=u*h*p-c*d*_,this._y=c*d*p+u*h*_,this._z=c*h*_+u*d*p,this._w=c*h*p-u*d*_;break;case"ZYX":this._x=u*h*p-c*d*_,this._y=c*d*p+u*h*_,this._z=c*h*_-u*d*p,this._w=c*h*p+u*d*_;break;case"YZX":this._x=u*h*p+c*d*_,this._y=c*d*p+u*h*_,this._z=c*h*_-u*d*p,this._w=c*h*p-u*d*_;break;case"XZY":this._x=u*h*p-c*d*_,this._y=c*d*p-u*h*_,this._z=c*h*_+u*d*p,this._w=c*h*p+u*d*_;break;default:Ut("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){let i=n/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let n=t.elements,i=n[0],s=n[4],a=n[8],r=n[1],o=n[5],l=n[9],c=n[2],h=n[6],p=n[10],u=i+o+p;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(a-c)*d,this._z=(r-s)*d}else if(i>o&&i>p){let d=2*Math.sqrt(1+i-o-p);this._w=(h-l)/d,this._x=.25*d,this._y=(s+r)/d,this._z=(a+c)/d}else if(o>p){let d=2*Math.sqrt(1+o-i-p);this._w=(a-c)/d,this._x=(s+r)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+p-i-o);this._w=(r-s)/d,this._x=(a+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(oe(this.dot(t),-1,1)))}rotateTowards(t,n){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,n/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){let i=t._x,s=t._y,a=t._z,r=t._w,o=n._x,l=n._y,c=n._z,h=n._w;return this._x=i*h+r*o+s*c-a*l,this._y=s*h+r*l+a*o-i*c,this._z=a*h+r*c+i*l-s*o,this._w=r*h-i*o-s*l-a*c,this._onChangeCallback(),this}slerp(t,n){let i=t._x,s=t._y,a=t._z,r=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,a=-a,r=-r,o=-o);let l=1-n;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,n=Math.sin(n*c)/h,this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+a*n,this._w=this._w*l+r*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+a*n,this._w=this._w*l+r*n,this.normalize();return this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){let t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),a*Math.sin(n),a*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},H=class{static{this.prototype.isVector3=!0}constructor(t=0,n=0,i=0){this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(sb.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(sb.setFromAxisAngle(t,n))}applyMatrix3(t){let n=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*n+a[3]*i+a[6]*s,this.y=a[1]*n+a[4]*i+a[7]*s,this.z=a[2]*n+a[5]*i+a[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,a=t.elements,r=1/(a[3]*n+a[7]*i+a[11]*s+a[15]);return this.x=(a[0]*n+a[4]*i+a[8]*s+a[12])*r,this.y=(a[1]*n+a[5]*i+a[9]*s+a[13])*r,this.z=(a[2]*n+a[6]*i+a[10]*s+a[14])*r,this}applyQuaternion(t){let n=this.x,i=this.y,s=this.z,a=t.x,r=t.y,o=t.z,l=t.w,c=2*(r*s-o*i),h=2*(o*n-a*s),p=2*(a*i-r*n);return this.x=n+l*c+r*p-o*h,this.y=i+l*h+o*c-a*p,this.z=s+l*p+a*h-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let n=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*n+a[4]*i+a[8]*s,this.y=a[1]*n+a[5]*i+a[9]*s,this.z=a[2]*n+a[6]*i+a[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=oe(this.x,t.x,n.x),this.y=oe(this.y,t.y,n.y),this.z=oe(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=oe(this.x,t,n),this.y=oe(this.y,t,n),this.z=oe(this.z,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(oe(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){let i=t.x,s=t.y,a=t.z,r=n.x,o=n.y,l=n.z;return this.x=s*l-a*o,this.y=a*r-i*l,this.z=i*o-s*r,this}projectOnVector(t){let n=t.lengthSq();if(n===0)return this.set(0,0,0);let i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return $g.copy(this).projectOnVector(t),this.sub($g)}reflect(t){return this.sub($g.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(oe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return n*n+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){let s=Math.sin(n)*t;return this.x=s*Math.sin(i),this.y=Math.cos(n)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){let n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},$g=new H,sb=new hs,Ft=class{static{this.prototype.isMatrix3=!0}constructor(t,n,i,s,a,r,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,s,a,r,o,l,c)}set(t,n,i,s,a,r,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=n,h[4]=a,h[5]=l,h[6]=i,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,a=this.elements,r=i[0],o=i[3],l=i[6],c=i[1],h=i[4],p=i[7],u=i[2],d=i[5],_=i[8],S=s[0],g=s[3],f=s[6],m=s[1],y=s[4],x=s[7],E=s[2],A=s[5],v=s[8];return a[0]=r*S+o*m+l*E,a[3]=r*g+o*y+l*A,a[6]=r*f+o*x+l*v,a[1]=c*S+h*m+p*E,a[4]=c*g+h*y+p*A,a[7]=c*f+h*x+p*v,a[2]=u*S+d*m+_*E,a[5]=u*g+d*y+_*A,a[8]=u*f+d*x+_*v,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return n*r*h-n*o*c-i*a*h+i*o*l+s*a*c-s*r*l}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8],p=h*r-o*c,u=o*l-h*a,d=c*a-r*l,_=n*p+i*u+s*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let S=1/_;return t[0]=p*S,t[1]=(s*c-h*i)*S,t[2]=(o*i-s*r)*S,t[3]=u*S,t[4]=(h*n-s*l)*S,t[5]=(s*a-o*n)*S,t[6]=d*S,t[7]=(i*l-c*n)*S,t[8]=(r*n-i*a)*S,this}transpose(){let t,n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,s,a,r,o){let l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*r+c*o)+r+t,-s*c,s*l,-s*(-c*r+l*o)+o+n,0,0,1),this}scale(t,n){return xc("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(t0.makeScale(t,n)),this}rotate(t){return xc("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(t0.makeRotation(-t)),this}translate(t,n){return xc("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(t0.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},t0=new Ft,ab=new Ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),rb=new Ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function hR(){let e={enabled:!0,workingColorSpace:Mc,spaces:{},convert:function(s,a,r){return this.enabled===!1||a===r||!a||!r||(this.spaces[a].transfer===ve&&(s.r=Hs(s.r),s.g=Hs(s.g),s.b=Hs(s.b)),this.spaces[a].primaries!==this.spaces[r].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===ve&&(s.r=Zo(s.r),s.g=Zo(s.g),s.b=Zo(s.b))),s},workingToColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},colorSpaceToWorking:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===qs?bc:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,r){return s.copy(this.spaces[r].fromXYZ).multiply(this.spaces[a].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return e.define({[Mc]:{primaries:t,whitePoint:i,transfer:bc,toXYZ:ab,fromXYZ:rb,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Tn},outputColorSpaceConfig:{drawingBufferColorSpace:Tn}},[Tn]:{primaries:t,whitePoint:i,transfer:ve,toXYZ:ab,fromXYZ:rb,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Tn}}}),e}var re=hR();function Hs(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function Zo(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var Oo,wf=class{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Oo===void 0&&(Oo=Tc("canvas")),Oo.width=t.width,Oo.height=t.height;let s=Oo.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Oo}return i.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let n=Tc("canvas");n.width=t.width,n.height=t.height;let i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),a=s.data;for(let r=0;r<a.length;r++)a[r]=Hs(a[r]/255)*255;return i.putImageData(s,0,0),n}else if(t.data){let n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Hs(n[i]/255)*255):n[i]=Hs(n[i]);return{data:n,width:t.width,height:t.height}}else return Ut("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},fR=0,jo=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:fR++}),this.uuid=Jc(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?t.set(n.displayWidth,n.displayHeight,0):n!==null?t.set(n.width||0,n.height||0,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let r=0,o=s.length;r<o;r++)s[r].isDataTexture?a.push(e0(s[r].image)):a.push(e0(s[r]))}else a=e0(s);i.url=a}return n||(t.images[this.uuid]=i),i}};function e0(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?wf.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(Ut("Texture: Unable to serialize Texture."),{})}var dR=0,n0=new H,Gn=class e extends us{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,i=ls,s=ls,a=je,r=Xs,o=ki,l=Qn,c=e.DEFAULT_ANISOTROPY,h=qs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dR++}),this.uuid=Jc(),this.name="",this.source=new jo(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ne(0,0),this.repeat=new ne(1,1),this.center=new ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ft,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(n0).x}get height(){return this.source.getSize(n0).y}get depth(){return this.source.getSize(n0).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let n in t){let i=t[n];if(i===void 0){Ut(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){Ut(`Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==G0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case bf:t.x=t.x-Math.floor(t.x);break;case ls:t.x=t.x<0?0:1;break;case Tf:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case bf:t.y=t.y-Math.floor(t.y);break;case ls:t.y=t.y<0?0:1;break;case Tf:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Gn.DEFAULT_IMAGE=null;Gn.DEFAULT_MAPPING=G0;Gn.DEFAULT_ANISOTROPY=1;var Be=class{static{this.prototype.isVector4=!0}constructor(t=0,n=0,i=0,s=1){this.x=t,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,s){return this.x=t,this.y=n,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,a=this.w,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*s+r[12]*a,this.y=r[1]*n+r[5]*i+r[9]*s+r[13]*a,this.z=r[2]*n+r[6]*i+r[10]*s+r[14]*a,this.w=r[3]*n+r[7]*i+r[11]*s+r[15]*a,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,s,a,l=t.elements,c=l[0],h=l[4],p=l[8],u=l[1],d=l[5],_=l[9],S=l[2],g=l[6],f=l[10];if(Math.abs(h-u)<.01&&Math.abs(p-S)<.01&&Math.abs(_-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(p+S)<.1&&Math.abs(_+g)<.1&&Math.abs(c+d+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let y=(c+1)/2,x=(d+1)/2,E=(f+1)/2,A=(h+u)/4,v=(p+S)/4,T=(_+g)/4;return y>x&&y>E?y<.01?(i=0,s=.707106781,a=.707106781):(i=Math.sqrt(y),s=A/i,a=v/i):x>E?x<.01?(i=.707106781,s=0,a=.707106781):(s=Math.sqrt(x),i=A/s,a=T/s):E<.01?(i=.707106781,s=.707106781,a=0):(a=Math.sqrt(E),i=v/a,s=T/a),this.set(i,s,a,n),this}let m=Math.sqrt((g-_)*(g-_)+(p-S)*(p-S)+(u-h)*(u-h));return Math.abs(m)<.001&&(m=1),this.x=(g-_)/m,this.y=(p-S)/m,this.z=(u-h)/m,this.w=Math.acos((c+d+f-1)/2),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=oe(this.x,t.x,n.x),this.y=oe(this.y,t.y,n.y),this.z=oe(this.z,t.z,n.z),this.w=oe(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=oe(this.x,t,n),this.y=oe(this.y,t,n),this.z=oe(this.z,t,n),this.w=oe(this.w,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(oe(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Rf=class extends us{constructor(t=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:je,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=i.depth,this.scissor=new Be(0,0,t,n),this.scissorTest=!1,this.viewport=new Be(0,0,t,n),this.textures=[];let s=i.count;for(let a=0;a<s;a++)this.textures[a]=new Gn({width:t,height:n,depth:i.depth}),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let n={minFilter:je,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(n.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=t,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;let s=Object.assign({},t.textures[n].image);this.textures[n].source=new jo(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let n=t.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},fi=class extends Rf{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}},Ec=class extends Gn{constructor(t=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=pn,this.minFilter=pn,this.wrapR=ls,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Cf=class extends Gn{constructor(t=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=pn,this.minFilter=pn,this.wrapR=ls,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Ie=class e{static{this.prototype.isMatrix4=!0}constructor(t,n,i,s,a,r,o,l,c,h,p,u,d,_,S,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,s,a,r,o,l,c,h,p,u,d,_,S,g)}set(t,n,i,s,a,r,o,l,c,h,p,u,d,_,S,g){let f=this.elements;return f[0]=t,f[4]=n,f[8]=i,f[12]=s,f[1]=a,f[5]=r,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=p,f[14]=u,f[3]=d,f[7]=_,f[11]=S,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){let n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){let n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return this.determinantAffine()===0?(t.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let n=this.elements,i=t.elements,s=1/Po.setFromMatrixColumn(t,0).length(),a=1/Po.setFromMatrixColumn(t,1).length(),r=1/Po.setFromMatrixColumn(t,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*a,n[5]=i[5]*a,n[6]=i[6]*a,n[7]=0,n[8]=i[8]*r,n[9]=i[9]*r,n[10]=i[10]*r,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){let n=this.elements,i=t.x,s=t.y,a=t.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(a),p=Math.sin(a);if(t.order==="XYZ"){let u=r*h,d=r*p,_=o*h,S=o*p;n[0]=l*h,n[4]=-l*p,n[8]=c,n[1]=d+_*c,n[5]=u-S*c,n[9]=-o*l,n[2]=S-u*c,n[6]=_+d*c,n[10]=r*l}else if(t.order==="YXZ"){let u=l*h,d=l*p,_=c*h,S=c*p;n[0]=u+S*o,n[4]=_*o-d,n[8]=r*c,n[1]=r*p,n[5]=r*h,n[9]=-o,n[2]=d*o-_,n[6]=S+u*o,n[10]=r*l}else if(t.order==="ZXY"){let u=l*h,d=l*p,_=c*h,S=c*p;n[0]=u-S*o,n[4]=-r*p,n[8]=_+d*o,n[1]=d+_*o,n[5]=r*h,n[9]=S-u*o,n[2]=-r*c,n[6]=o,n[10]=r*l}else if(t.order==="ZYX"){let u=r*h,d=r*p,_=o*h,S=o*p;n[0]=l*h,n[4]=_*c-d,n[8]=u*c+S,n[1]=l*p,n[5]=S*c+u,n[9]=d*c-_,n[2]=-c,n[6]=o*l,n[10]=r*l}else if(t.order==="YZX"){let u=r*l,d=r*c,_=o*l,S=o*c;n[0]=l*h,n[4]=S-u*p,n[8]=_*p+d,n[1]=p,n[5]=r*h,n[9]=-o*h,n[2]=-c*h,n[6]=d*p+_,n[10]=u-S*p}else if(t.order==="XZY"){let u=r*l,d=r*c,_=o*l,S=o*c;n[0]=l*h,n[4]=-p,n[8]=c*h,n[1]=u*p+S,n[5]=r*h,n[9]=d*p-_,n[2]=_*p-d,n[6]=o*h,n[10]=S*p+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(pR,t,mR)}lookAt(t,n,i){let s=this.elements;return ui.subVectors(t,n),ui.lengthSq()===0&&(ui.z=1),ui.normalize(),Aa.crossVectors(i,ui),Aa.lengthSq()===0&&(Math.abs(i.z)===1?ui.x+=1e-4:ui.z+=1e-4,ui.normalize(),Aa.crossVectors(i,ui)),Aa.normalize(),Yh.crossVectors(ui,Aa),s[0]=Aa.x,s[4]=Yh.x,s[8]=ui.x,s[1]=Aa.y,s[5]=Yh.y,s[9]=ui.y,s[2]=Aa.z,s[6]=Yh.z,s[10]=ui.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,a=this.elements,r=i[0],o=i[4],l=i[8],c=i[12],h=i[1],p=i[5],u=i[9],d=i[13],_=i[2],S=i[6],g=i[10],f=i[14],m=i[3],y=i[7],x=i[11],E=i[15],A=s[0],v=s[4],T=s[8],I=s[12],R=s[1],N=s[5],O=s[9],G=s[13],L=s[2],k=s[6],X=s[10],F=s[14],et=s[3],W=s[7],$=s[11],tt=s[15];return a[0]=r*A+o*R+l*L+c*et,a[4]=r*v+o*N+l*k+c*W,a[8]=r*T+o*O+l*X+c*$,a[12]=r*I+o*G+l*F+c*tt,a[1]=h*A+p*R+u*L+d*et,a[5]=h*v+p*N+u*k+d*W,a[9]=h*T+p*O+u*X+d*$,a[13]=h*I+p*G+u*F+d*tt,a[2]=_*A+S*R+g*L+f*et,a[6]=_*v+S*N+g*k+f*W,a[10]=_*T+S*O+g*X+f*$,a[14]=_*I+S*G+g*F+f*tt,a[3]=m*A+y*R+x*L+E*et,a[7]=m*v+y*N+x*k+E*W,a[11]=m*T+y*O+x*X+E*$,a[15]=m*I+y*G+x*F+E*tt,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[4],s=t[8],a=t[12],r=t[1],o=t[5],l=t[9],c=t[13],h=t[2],p=t[6],u=t[10],d=t[14],_=t[3],S=t[7],g=t[11],f=t[15],m=l*d-c*u,y=o*d-c*p,x=o*u-l*p,E=r*d-c*h,A=r*u-l*h,v=r*p-o*h;return n*(S*m-g*y+f*x)-i*(_*m-g*E+f*A)+s*(_*y-S*E+f*v)-a*(_*x-S*A+g*v)}determinantAffine(){let t=this.elements,n=t[0],i=t[4],s=t[8],a=t[1],r=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return n*(r*h-o*c)-i*(a*h-o*l)+s*(a*c-r*l)}transpose(){let t=this.elements,n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=n,s[14]=i),this}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8],p=t[9],u=t[10],d=t[11],_=t[12],S=t[13],g=t[14],f=t[15],m=n*o-i*r,y=n*l-s*r,x=n*c-a*r,E=i*l-s*o,A=i*c-a*o,v=s*c-a*l,T=h*S-p*_,I=h*g-u*_,R=h*f-d*_,N=p*g-u*S,O=p*f-d*S,G=u*f-d*g,L=m*G-y*O+x*N+E*R-A*I+v*T;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/L;return t[0]=(o*G-l*O+c*N)*k,t[1]=(s*O-i*G-a*N)*k,t[2]=(S*v-g*A+f*E)*k,t[3]=(u*A-p*v-d*E)*k,t[4]=(l*R-r*G-c*I)*k,t[5]=(n*G-s*R+a*I)*k,t[6]=(g*x-_*v-f*y)*k,t[7]=(h*v-u*x+d*y)*k,t[8]=(r*O-o*R+c*T)*k,t[9]=(i*R-n*O-a*T)*k,t[10]=(_*A-S*x+f*m)*k,t[11]=(p*x-h*A-d*m)*k,t[12]=(o*I-r*N-l*T)*k,t[13]=(n*N-i*I+s*T)*k,t[14]=(S*y-_*E-g*m)*k,t[15]=(h*E-p*y+u*m)*k,this}scale(t){let n=this.elements,i=t.x,s=t.y,a=t.z;return n[0]*=i,n[4]*=s,n[8]*=a,n[1]*=i,n[5]*=s,n[9]*=a,n[2]*=i,n[6]*=s,n[10]*=a,n[3]*=i,n[7]*=s,n[11]*=a,this}getMaxScaleOnAxis(){let t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){let n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){let i=Math.cos(n),s=Math.sin(n),a=1-i,r=t.x,o=t.y,l=t.z,c=a*r,h=a*o;return this.set(c*r+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*r,0,c*l-s*o,h*l+s*r,a*l*l+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,s,a,r){return this.set(1,i,a,0,t,1,r,0,n,s,1,0,0,0,0,1),this}compose(t,n,i){let s=this.elements,a=n._x,r=n._y,o=n._z,l=n._w,c=a+a,h=r+r,p=o+o,u=a*c,d=a*h,_=a*p,S=r*h,g=r*p,f=o*p,m=l*c,y=l*h,x=l*p,E=i.x,A=i.y,v=i.z;return s[0]=(1-(S+f))*E,s[1]=(d+x)*E,s[2]=(_-y)*E,s[3]=0,s[4]=(d-x)*A,s[5]=(1-(u+f))*A,s[6]=(g+m)*A,s[7]=0,s[8]=(_+y)*v,s[9]=(g-m)*v,s[10]=(1-(u+S))*v,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,n,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let a=this.determinantAffine();if(a===0)return i.set(1,1,1),n.identity(),this;let r=Po.set(s[0],s[1],s[2]).length(),o=Po.set(s[4],s[5],s[6]).length(),l=Po.set(s[8],s[9],s[10]).length();a<0&&(r=-r),Oi.copy(this);let c=1/r,h=1/o,p=1/l;return Oi.elements[0]*=c,Oi.elements[1]*=c,Oi.elements[2]*=c,Oi.elements[4]*=h,Oi.elements[5]*=h,Oi.elements[6]*=h,Oi.elements[8]*=p,Oi.elements[9]*=p,Oi.elements[10]*=p,n.setFromRotationMatrix(Oi),i.x=r,i.y=o,i.z=l,this}makePerspective(t,n,i,s,a,r,o=Ai,l=!1){let c=this.elements,h=2*a/(n-t),p=2*a/(i-s),u=(n+t)/(n-t),d=(i+s)/(i-s),_,S;if(l)_=a/(r-a),S=r*a/(r-a);else if(o===Ai)_=-(r+a)/(r-a),S=-2*r*a/(r-a);else if(o===Ko)_=-r/(r-a),S=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=p,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,n,i,s,a,r,o=Ai,l=!1){let c=this.elements,h=2/(n-t),p=2/(i-s),u=-(n+t)/(n-t),d=-(i+s)/(i-s),_,S;if(l)_=1/(r-a),S=r/(r-a);else if(o===Ai)_=-2/(r-a),S=-(r+a)/(r-a);else if(o===Ko)_=-1/(r-a),S=-a/(r-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=p,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=_,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}},Po=new H,Oi=new Ie,pR=new H(0,0,0),mR=new H(1,1,1),Aa=new H,Yh=new H,ui=new H,ob=new Ie,lb=new hs,Vs=class e{constructor(t=0,n=0,i=0,s=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,s=this._order){return this._x=t,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){let s=t.elements,a=s[0],r=s[4],o=s[8],l=s[1],c=s[5],h=s[9],p=s[2],u=s[6],d=s[10];switch(n){case"XYZ":this._y=Math.asin(oe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-oe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,a),this._z=0);break;case"ZXY":this._x=Math.asin(oe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-p,d),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-oe(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(oe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-p,a)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-oe(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Ut("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return ob.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ob,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return lb.setFromEuler(this),this.setFromQuaternion(lb,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Vs.DEFAULT_ORDER="XYZ";var $o=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},gR=0,cb=new H,Bo=new hs,Os=new Ie,Zh=new H,gc=new H,_R=new H,vR=new hs,ub=new H(1,0,0),hb=new H(0,1,0),fb=new H(0,0,1),db={type:"added"},yR={type:"removed"},zo={type:"childadded",child:null},i0={type:"childremoved",child:null},Ln=class e extends us{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gR++}),this.uuid=Jc(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new H,n=new Vs,i=new hs,s=new H(1,1,1);function a(){i.setFromEuler(n,!1)}function r(){n.setFromQuaternion(i,void 0,!1)}n._onChange(a),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ie},normalMatrix:{value:new Ft}}),this.matrix=new Ie,this.matrixWorld=new Ie,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $o,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Bo.setFromAxisAngle(t,n),this.quaternion.multiply(Bo),this}rotateOnWorldAxis(t,n){return Bo.setFromAxisAngle(t,n),this.quaternion.premultiply(Bo),this}rotateX(t){return this.rotateOnAxis(ub,t)}rotateY(t){return this.rotateOnAxis(hb,t)}rotateZ(t){return this.rotateOnAxis(fb,t)}translateOnAxis(t,n){return cb.copy(t).applyQuaternion(this.quaternion),this.position.add(cb.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(ub,t)}translateY(t){return this.translateOnAxis(hb,t)}translateZ(t){return this.translateOnAxis(fb,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Os.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?Zh.copy(t):Zh.set(t,n,i);let s=this.parent;this.updateWorldMatrix(!0,!1),gc.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Os.lookAt(gc,Zh,this.up):Os.lookAt(Zh,gc,this.up),this.quaternion.setFromRotationMatrix(Os),s&&(Os.extractRotation(s.matrixWorld),Bo.setFromRotationMatrix(Os),this.quaternion.premultiply(Bo.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(Ot("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(db),zo.child=t,this.dispatchEvent(zo),zo.child=null):Ot("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(yR),i0.child=t,this.dispatchEvent(i0),i0.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Os.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Os.multiply(t.parent.matrixWorld)),t.applyMatrix4(Os),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(db),zo.child=t,this.dispatchEvent(zo),zo.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,s=this.children.length;i<s;i++){let r=this.children[i].getObjectByProperty(t,n);if(r!==void 0)return r}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);let s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gc,t,_R),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gc,vR,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(t)}traverseAncestors(t){let n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let n=t.x,i=t.y,s=t.z,a=this.matrix.elements;a[12]+=n-a[0]*n-a[4]*i-a[8]*s,a[13]+=i-a[1]*n-a[5]*i-a[9]*s,a[14]+=s-a[2]*n-a[6]*i-a[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){let a=this.children;for(let r=0,o=a.length;r<o;r++)a[r].updateWorldMatrix(!1,!0,i)}}toJSON(t){let n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let p=l[c];a(t.shapes,p)}else a(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(t.materials,this.material[l]));s.material=o}else s.material=a(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(a(t.animations,l))}}if(n){let o=r(t.geometries),l=r(t.materials),c=r(t.textures),h=r(t.images),p=r(t.shapes),u=r(t.skeletons),d=r(t.animations),_=r(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),p.length>0&&(i.shapes=p),u.length>0&&(i.skeletons=u),d.length>0&&(i.animations=d),_.length>0&&(i.nodes=_)}return i.object=s,i;function r(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ln.DEFAULT_UP=new H(0,1,0);Ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Tr=class extends Ln{constructor(){super(),this.isGroup=!0,this.type="Group"}},xR={type:"move"},tl=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let n=this._hand;if(n)for(let i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let s=null,a=null,r=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(let S of t.hand.values()){let g=n.getJointPose(S,i),f=this._getHandJoint(c,S);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.quaternion,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}let h=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],u=h.position.distanceTo(p.position),d=.02,_=.005;c.inputState.pinching&&u>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(a=n.getPose(t.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=n.getPose(t.targetRaySpace,i),s===null&&a!==null&&(s=a),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(xR)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){let i=new Tr;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}},f1={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wa={h:0,s:0,l:0},Jh={h:0,s:0,l:0};function s0(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var Zt=class{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=Tn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,re.colorSpaceToWorking(this,n),this}setRGB(t,n,i,s=re.workingColorSpace){return this.r=t,this.g=n,this.b=i,re.colorSpaceToWorking(this,s),this}setHSL(t,n,i,s=re.workingColorSpace){if(t=lR(t,1),n=oe(n,0,1),i=oe(i,0,1),n===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+n):i+n-i*n,r=2*i-a;this.r=s0(r,a,t+1/3),this.g=s0(r,a,t),this.b=s0(r,a,t-1/3)}return re.colorSpaceToWorking(this,s),this}setStyle(t,n=Tn){function i(a){a!==void 0&&parseFloat(a)<1&&Ut("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let a,r=s[1],o=s[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,n);if(a=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseFloat(a[1]))/100,Math.min(100,parseFloat(a[2]))/100,Math.min(100,parseFloat(a[3]))/100,n);break;case"hsl":case"hsla":if(a=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,n);break;default:Ut("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let a=s[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,n);if(r===6)return this.setHex(parseInt(a,16),n);Ut("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=Tn){let i=f1[t.toLowerCase()];return i!==void 0?this.setHex(i,n):Ut("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Hs(t.r),this.g=Hs(t.g),this.b=Hs(t.b),this}copyLinearToSRGB(t){return this.r=Zo(t.r),this.g=Zo(t.g),this.b=Zo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Tn){return re.workingToColorSpace(Dn.copy(this),t),Math.round(oe(Dn.r*255,0,255))*65536+Math.round(oe(Dn.g*255,0,255))*256+Math.round(oe(Dn.b*255,0,255))}getHexString(t=Tn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=re.workingColorSpace){re.workingToColorSpace(Dn.copy(this),n);let i=Dn.r,s=Dn.g,a=Dn.b,r=Math.max(i,s,a),o=Math.min(i,s,a),l,c,h=(o+r)/2;if(o===r)l=0,c=0;else{let p=r-o;switch(c=h<=.5?p/(r+o):p/(2-r-o),r){case i:l=(s-a)/p+(s<a?6:0);break;case s:l=(a-i)/p+2;break;case a:l=(i-s)/p+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,n=re.workingColorSpace){return re.workingToColorSpace(Dn.copy(this),n),t.r=Dn.r,t.g=Dn.g,t.b=Dn.b,t}getStyle(t=Tn){re.workingToColorSpace(Dn.copy(this),t);let n=Dn.r,i=Dn.g,s=Dn.b;return t!==Tn?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,n,i){return this.getHSL(wa),this.setHSL(wa.h+t,wa.s+n,wa.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(wa),t.getHSL(Jh);let i=jg(wa.h,Jh.h,n),s=jg(wa.s,Jh.s,n),a=jg(wa.l,Jh.l,n);return this.setHSL(i,s,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let n=this.r,i=this.g,s=this.b,a=t.elements;return this.r=a[0]*n+a[3]*i+a[6]*s,this.g=a[1]*n+a[4]*i+a[7]*s,this.b=a[2]*n+a[5]*i+a[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Dn=new Zt;Zt.NAMES=f1;var Ac=class e{constructor(t,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new Zt(t),this.near=n,this.far=i}clone(){return new e(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},wc=class extends Ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vs,this.environmentIntensity=1,this.environmentRotation=new Vs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}},Pi=new H,Ps=new H,a0=new H,Bs=new H,Fo=new H,Ho=new H,pb=new H,r0=new H,o0=new H,l0=new H,c0=new Be,u0=new Be,h0=new Be,Da=class e{constructor(t=new H,n=new H,i=new H){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,s){s.subVectors(i,n),Pi.subVectors(t,n),s.cross(Pi);let a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(t,n,i,s,a){Pi.subVectors(s,n),Ps.subVectors(i,n),a0.subVectors(t,n);let r=Pi.dot(Pi),o=Pi.dot(Ps),l=Pi.dot(a0),c=Ps.dot(Ps),h=Ps.dot(a0),p=r*c-o*o;if(p===0)return a.set(0,0,0),null;let u=1/p,d=(c*l-o*h)*u,_=(r*h-o*l)*u;return a.set(1-d-_,_,d)}static containsPoint(t,n,i,s){return this.getBarycoord(t,n,i,s,Bs)===null?!1:Bs.x>=0&&Bs.y>=0&&Bs.x+Bs.y<=1}static getInterpolation(t,n,i,s,a,r,o,l){return this.getBarycoord(t,n,i,s,Bs)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,Bs.x),l.addScaledVector(r,Bs.y),l.addScaledVector(o,Bs.z),l)}static getInterpolatedAttribute(t,n,i,s,a,r){return c0.setScalar(0),u0.setScalar(0),h0.setScalar(0),c0.fromBufferAttribute(t,n),u0.fromBufferAttribute(t,i),h0.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(c0,a.x),r.addScaledVector(u0,a.y),r.addScaledVector(h0,a.z),r}static isFrontFacing(t,n,i,s){return Pi.subVectors(i,n),Ps.subVectors(t,n),Pi.cross(Ps).dot(s)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,s){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,n,i,s){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Pi.subVectors(this.c,this.b),Ps.subVectors(this.a,this.b),Pi.cross(Ps).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,s,a){return e.getInterpolation(t,this.a,this.b,this.c,n,i,s,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){let i=this.a,s=this.b,a=this.c,r,o;Fo.subVectors(s,i),Ho.subVectors(a,i),r0.subVectors(t,i);let l=Fo.dot(r0),c=Ho.dot(r0);if(l<=0&&c<=0)return n.copy(i);o0.subVectors(t,s);let h=Fo.dot(o0),p=Ho.dot(o0);if(h>=0&&p<=h)return n.copy(s);let u=l*p-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return r=l/(l-h),n.copy(i).addScaledVector(Fo,r);l0.subVectors(t,a);let d=Fo.dot(l0),_=Ho.dot(l0);if(_>=0&&d<=_)return n.copy(a);let S=d*c-l*_;if(S<=0&&c>=0&&_<=0)return o=c/(c-_),n.copy(i).addScaledVector(Ho,o);let g=h*_-d*p;if(g<=0&&p-h>=0&&d-_>=0)return pb.subVectors(a,s),o=(p-h)/(p-h+(d-_)),n.copy(s).addScaledVector(pb,o);let f=1/(g+S+u);return r=S*f,o=u*f,n.copy(i).addScaledVector(Fo,r).addScaledVector(Ho,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},La=class{constructor(t=new H(1/0,1/0,1/0),n=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(Bi.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(Bi.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){let i=Bi.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let a=i.getAttribute("position");if(n===!0&&a!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let r=0,o=a.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,Bi):Bi.fromBufferAttribute(a,r),Bi.applyMatrix4(t.matrixWorld),this.expandByPoint(Bi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Kh.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Kh.copy(i.boundingBox)),Kh.applyMatrix4(t.matrixWorld),this.union(Kh)}let s=t.children;for(let a=0,r=s.length;a<r;a++)this.expandByObject(s[a],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Bi),Bi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(_c),Qh.subVectors(this.max,_c),Go.subVectors(t.a,_c),Vo.subVectors(t.b,_c),ko.subVectors(t.c,_c),Ra.subVectors(Vo,Go),Ca.subVectors(ko,Vo),xr.subVectors(Go,ko);let n=[0,-Ra.z,Ra.y,0,-Ca.z,Ca.y,0,-xr.z,xr.y,Ra.z,0,-Ra.x,Ca.z,0,-Ca.x,xr.z,0,-xr.x,-Ra.y,Ra.x,0,-Ca.y,Ca.x,0,-xr.y,xr.x,0];return!f0(n,Go,Vo,ko,Qh)||(n=[1,0,0,0,1,0,0,0,1],!f0(n,Go,Vo,ko,Qh))?!1:(jh.crossVectors(Ra,Ca),n=[jh.x,jh.y,jh.z],f0(n,Go,Vo,ko,Qh))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Bi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Bi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(zs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),zs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),zs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),zs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),zs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),zs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),zs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),zs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(zs),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},zs=[new H,new H,new H,new H,new H,new H,new H,new H],Bi=new H,Kh=new La,Go=new H,Vo=new H,ko=new H,Ra=new H,Ca=new H,xr=new H,_c=new H,Qh=new H,jh=new H,Sr=new H;function f0(e,t,n,i,s){for(let a=0,r=e.length-3;a<=r;a+=3){Sr.fromArray(e,a);let o=s.x*Math.abs(Sr.x)+s.y*Math.abs(Sr.y)+s.z*Math.abs(Sr.z),l=t.dot(Sr),c=n.dot(Sr),h=i.dot(Sr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Qe=new H,$h=new ne,SR=0,cs=class extends us{constructor(t,n,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:SR++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=r1,this.updateRanges=[],this.gpuType=Gi,this.version=0,this._normalizationScale=t!==void 0?t_(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[t+s]=n.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)$h.fromBufferAttribute(this,n),$h.applyMatrix3(t),this.setXY(n,$h.x,$h.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Qe.fromBufferAttribute(this,n),Qe.applyMatrix3(t),this.setXYZ(n,Qe.x,Qe.y,Qe.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)Qe.fromBufferAttribute(this,n),Qe.applyMatrix4(t),this.setXYZ(n,Qe.x,Qe.y,Qe.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)Qe.fromBufferAttribute(this,n),Qe.applyNormalMatrix(t),this.setXYZ(n,Qe.x,Qe.y,Qe.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)Qe.fromBufferAttribute(this,n),Qe.transformDirection(t),this.setXYZ(n,Qe.x,Qe.y,Qe.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,n,i){return this.normalized&&(i=this._normalize(i)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=this._denormalize(n)),n}setX(t,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=this._denormalize(n)),n}setY(t,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=this._denormalize(n)),n}setZ(t,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=this._denormalize(n)),n}setW(t,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,s){return t*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i),s=this._normalize(s)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,n,i,s,a){return t*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i),s=this._normalize(s),a=this._normalize(a)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let n=this._normalizationScale;return n!==void 0?Math.max(t/n,-1):cR(t,this.array)}_normalize(t){let n=this._normalizationScale;return n!==void 0?Math.round(t*n):uR(t,this.array)}};var Rc=class extends cs{constructor(t,n,i){super(new Uint16Array(t),n,i)}};var Cc=class extends cs{constructor(t,n,i){super(new Uint32Array(t),n,i)}};var wi=class extends cs{constructor(t,n,i){super(new Float32Array(t),n,i)}},MR=new La,vc=new H,d0=new H,el=class{constructor(t=new H,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){let i=this.center;n!==void 0?i.copy(n):MR.setFromPoints(t).getCenter(i);let s=0;for(let a=0,r=t.length;a<r;a++)s=Math.max(s,i.distanceToSquared(t[a]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){let i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;vc.subVectors(t,this.center);let n=vc.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(vc,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(d0.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(vc.copy(t.center).add(d0)),this.expandByPoint(vc.copy(t.center).sub(d0))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},bR=0,Ei=new Ie,p0=new Ln,Xo=new H,hi=new La,yc=new La,dn=new H,Ua=class e extends us{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bR++}),this.uuid=Jc(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(rR(t)?Cc:Rc)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let a=new Ft().getNormalMatrix(t);i.applyNormalMatrix(a),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Ei.makeRotationFromQuaternion(t),this.applyMatrix4(Ei),this}rotateX(t){return Ei.makeRotationX(t),this.applyMatrix4(Ei),this}rotateY(t){return Ei.makeRotationY(t),this.applyMatrix4(Ei),this}rotateZ(t){return Ei.makeRotationZ(t),this.applyMatrix4(Ei),this}translate(t,n,i){return Ei.makeTranslation(t,n,i),this.applyMatrix4(Ei),this}scale(t,n,i){return Ei.makeScale(t,n,i),this.applyMatrix4(Ei),this}lookAt(t){return p0.lookAt(t),p0.updateMatrix(),this.applyMatrix4(p0.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xo).negate(),this.translate(Xo.x,Xo.y,Xo.z),this}setFromPoints(t){let n=this.getAttribute("position");if(n===void 0){let i=[];for(let s=0,a=t.length;s<a;s++){let r=t[s];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new wi(i,3))}else{let i=Math.min(t.length,n.count);for(let s=0;s<i;s++){let a=t[s];n.setXYZ(s,a.x,a.y,a.z||0)}t.length>n.count&&Ut("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new La);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ot("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,s=n.length;i<s;i++){let a=n[i];hi.setFromBufferAttribute(a),this.morphTargetsRelative?(dn.addVectors(this.boundingBox.min,hi.min),this.boundingBox.expandByPoint(dn),dn.addVectors(this.boundingBox.max,hi.max),this.boundingBox.expandByPoint(dn)):(this.boundingBox.expandByPoint(hi.min),this.boundingBox.expandByPoint(hi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ot('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new el);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ot("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(t){let i=this.boundingSphere.center;if(hi.setFromBufferAttribute(t),n)for(let a=0,r=n.length;a<r;a++){let o=n[a];yc.setFromBufferAttribute(o),this.morphTargetsRelative?(dn.addVectors(hi.min,yc.min),hi.expandByPoint(dn),dn.addVectors(hi.max,yc.max),hi.expandByPoint(dn)):(hi.expandByPoint(yc.min),hi.expandByPoint(yc.max))}hi.getCenter(i);let s=0;for(let a=0,r=t.count;a<r;a++)dn.fromBufferAttribute(t,a),s=Math.max(s,i.distanceToSquared(dn));if(n)for(let a=0,r=n.length;a<r;a++){let o=n[a],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)dn.fromBufferAttribute(o,c),l&&(Xo.fromBufferAttribute(t,c),dn.add(Xo)),s=Math.max(s,i.distanceToSquared(dn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ot('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Ot("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=n.position,s=n.normal,a=n.uv,r=this.getAttribute("tangent");(r===void 0||r.count!==i.count)&&(r=new cs(new Float32Array(4*i.count),4),this.setAttribute("tangent",r));let o=[],l=[],c=new Uint8Array(i.count);for(let I=0;I<i.count;I++)o[I]=new H,l[I]=new H;let h=new H,p=new H,u=new H,d=new ne,_=new ne,S=new ne,g=new H,f=new H;function m(I,R,N){c[I]=c[R]=c[N]=1,h.fromBufferAttribute(i,I),p.fromBufferAttribute(i,R),u.fromBufferAttribute(i,N),d.fromBufferAttribute(a,I),_.fromBufferAttribute(a,R),S.fromBufferAttribute(a,N),p.sub(h),u.sub(h),_.sub(d),S.sub(d);let O=1/(_.x*S.y-S.x*_.y);isFinite(O)&&(g.copy(p).multiplyScalar(S.y).addScaledVector(u,-_.y).multiplyScalar(O),f.copy(u).multiplyScalar(_.x).addScaledVector(p,-S.x).multiplyScalar(O),o[I].add(g),o[R].add(g),o[N].add(g),l[I].add(f),l[R].add(f),l[N].add(f))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let I=0,R=y.length;I<R;++I){let N=y[I],O=N.start,G=N.count;for(let L=O,k=O+G;L<k;L+=3)m(t.getX(L+0),t.getX(L+1),t.getX(L+2))}let x=new H,E=new H,A=new H,v=new H;function T(I){A.fromBufferAttribute(s,I),v.copy(A);let R=o[I];x.copy(R),x.sub(A.multiplyScalar(A.dot(R))).normalize(),E.crossVectors(v,R);let O=E.dot(l[I])<0?-1:1;r.setXYZW(I,x.x,x.y,x.z,O)}for(let I=0,R=i.count;I<R;++I)c[I]&&T(I);this._transformed=!0}computeVertexNormals(){let t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new cs(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,d=i.count;u<d;u++)i.setXYZ(u,0,0,0);let s=new H,a=new H,r=new H,o=new H,l=new H,c=new H,h=new H,p=new H;if(t)for(let u=0,d=t.count;u<d;u+=3){let _=t.getX(u+0),S=t.getX(u+1),g=t.getX(u+2);s.fromBufferAttribute(n,_),a.fromBufferAttribute(n,S),r.fromBufferAttribute(n,g),h.subVectors(r,a),p.subVectors(s,a),h.cross(p),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,g),o.add(h),l.add(h),c.add(h),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,d=n.count;u<d;u+=3)s.fromBufferAttribute(n,u+0),a.fromBufferAttribute(n,u+1),r.fromBufferAttribute(n,u+2),h.subVectors(r,a),p.subVectors(s,a),h.cross(p),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)dn.fromBufferAttribute(t,n),dn.normalize(),t.setXYZ(n,dn.x,dn.y,dn.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,p=o.normalized,u=new c.constructor(l.length*h),d=0,_=0;for(let S=0,g=l.length;S<g;S++){o.isInterleavedBufferAttribute?d=l[S]*o.data.stride+o.offset:d=l[S]*h;for(let f=0;f<h;f++)u[_++]=c[d++]}return new cs(u,h,p)}if(this.index===null)return Ut("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new e,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,i);n.setAttribute(o,c)}let a=this.morphAttributes;for(let o in a){let l=[],c=a[o];for(let h=0,p=c.length;h<p;h++){let u=c[h],d=t(u,i);l.push(d)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let o=0,l=r.length;o<l;o++){let c=r[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},a=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let p=0,u=c.length;p<u;p++){let d=c[p];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,a=!0)}a&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(n))}let a=t.morphAttributes;for(let c in a){let h=[],p=a[c];for(let u=0,d=p.length;u<d;u++)h.push(p[u].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let r=t.groups;for(let c=0,h=r.length;c<h;c++){let p=r[c];this.addGroup(p.start,p.count,p.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var m0=new H,TR=new H,ER=new Ft,zi=class{constructor(t=new H(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,s){return this.normal.set(t,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){let s=m0.subVectors(i,n).cross(TR.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n,i=!0){let s=t.delta(m0),a=this.normal.dot(s);if(a===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/a;return i===!0&&(r<0||r>1)?null:n.copy(t.start).addScaledVector(s,r)}intersectsLine(t){let n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){let i=n||ER.getNormalMatrix(t),s=this.coplanarPoint(m0).applyMatrix4(t),a=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},AR=0,Ia=class extends us{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:AR++}),this.uuid=Jc(),this.name="",this.type="Material",this.blending=al,this.side=Ha,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=D0,this.blendDst=L0,this.blendEquation=wr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Zt(0,0,0),this.blendAlpha=0,this.depthFunc=Jo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=t1,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=mf,this.stencilZFail=mf,this.stencilZPass=mf,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let n in t){let i=t[n];if(i===void 0){Ut(`Material: parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){Ut(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(a=>a.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(a){let r=[];for(let o in a){let l=a[o];delete l.metadata,r.push(l)}return r}if(n){let a=s(t.textures),r=s(t.images);a.length>0&&(i.textures=a),r.length>0&&(i.images=r)}return i}fromJSON(t,n){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Zt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new zi().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=n[t.map]||null),t.matcap!==void 0&&(this.matcap=n[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=n[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=n[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=n[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ne().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=n[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=n[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=n[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=n[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=n[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=n[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=n[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=n[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=n[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=n[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=n[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ne().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=n[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=n[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=n[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=n[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=n[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=n[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let n=t.clippingPlanes,i=null;if(n!==null){let s=n.length;i=new Array(s);for(let a=0;a!==s;++a)i[a]=n[a].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Fs=new H,g0=new H,tf=new H,ef=new H,Nc=class{constructor(t=new H,n=new H(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Fs)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let n=Fs.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Fs.copy(this.origin).addScaledVector(this.direction,n),Fs.distanceToSquared(t))}distanceSqToSegment(t,n,i,s){g0.copy(t).add(n).multiplyScalar(.5),tf.copy(n).sub(t).normalize(),ef.copy(this.origin).sub(g0);let a=t.distanceTo(n)*.5,r=-this.direction.dot(tf),o=ef.dot(this.direction),l=-ef.dot(tf),c=ef.lengthSq(),h=Math.abs(1-r*r),p,u,d,_;if(h>0)if(p=r*l-o,u=r*o-l,_=a*h,p>=0)if(u>=-_)if(u<=_){let S=1/h;p*=S,u*=S,d=p*(p+r*u+2*o)+u*(r*p+u+2*l)+c}else u=a,p=Math.max(0,-(r*u+o)),d=-p*p+u*(u+2*l)+c;else u=-a,p=Math.max(0,-(r*u+o)),d=-p*p+u*(u+2*l)+c;else u<=-_?(p=Math.max(0,-(-r*a+o)),u=p>0?-a:Math.min(Math.max(-a,-l),a),d=-p*p+u*(u+2*l)+c):u<=_?(p=0,u=Math.min(Math.max(-a,-l),a),d=u*(u+2*l)+c):(p=Math.max(0,-(r*a+o)),u=p>0?a:Math.min(Math.max(-a,-l),a),d=-p*p+u*(u+2*l)+c);else u=r>0?-a:a,p=Math.max(0,-(r*u+o)),d=-p*p+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(g0).addScaledVector(tf,u),d}intersectSphere(t,n){if(t.radius<0)return null;Fs.subVectors(t.center,this.origin);let i=Fs.dot(this.direction),s=Fs.dot(Fs)-i*i,a=t.radius*t.radius;if(s>a)return null;let r=Math.sqrt(a-s),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){let i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){let n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,s,a,r,o,l,c=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(a=(t.min.y-u.y)*h,r=(t.max.y-u.y)*h):(a=(t.max.y-u.y)*h,r=(t.min.y-u.y)*h),i>r||a>s||((a>i||isNaN(i))&&(i=a),(r<s||isNaN(s))&&(s=r),p>=0?(o=(t.min.z-u.z)*p,l=(t.max.z-u.z)*p):(o=(t.max.z-u.z)*p,l=(t.min.z-u.z)*p),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(t){return this.intersectBox(t,Fs)!==null}intersectTriangle(t,n,i,s,a){let r=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,p=t.x-r.x,u=t.y-r.y,d=t.z-r.z,_=n.x-r.x,S=n.y-r.y,g=n.z-r.z,f=i.x-r.x,m=i.y-r.y,y=i.z-r.z,x=Math.abs(l),E=Math.abs(c),A=Math.abs(h),v,T,I,R,N,O,G,L,k,X,F,et;if(x>=E&&x>=A?(I=l,O=p,k=_,et=f,l>=0?(v=c,T=h,R=u,N=d,G=S,L=g,X=m,F=y):(v=h,T=c,R=d,N=u,G=g,L=S,X=y,F=m)):E>=A?(I=c,O=u,k=S,et=m,c>=0?(v=h,T=l,R=d,N=p,G=g,L=_,X=y,F=f):(v=l,T=h,R=p,N=d,G=_,L=g,X=f,F=y)):(I=h,O=d,k=g,et=y,h>=0?(v=l,T=c,R=p,N=u,G=_,L=S,X=f,F=m):(v=c,T=l,R=u,N=p,G=S,L=_,X=m,F=f)),I===0)return null;let W=v/I,$=T/I,tt=1/I,St=R-W*O,Pt=N-$*O,Z=G-W*k,pt=L-$*k,yt=X-W*et,At=F-$*et,mt=yt*pt-At*Z,zt=St*At-Pt*yt,ze=Z*Pt-pt*St;if(s){if(mt<0||zt<0||ze<0)return null}else if((mt<0||zt<0||ze<0)&&(mt>0||zt>0||ze>0))return null;let Nt=mt+zt+ze;if(Nt===0)return null;let fe=tt*(mt*O+zt*k+ze*et);return(Nt>0?fe<0:fe>0)?null:this.at(fe/Nt,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Fi=class extends Ia{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vs,this.combine=U0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},mb=new Ie,Mr=new Nc,nf=new el,gb=new H,sf=new H,af=new H,rf=new H,_0=new H,of=new H,_b=new H,lf=new H,$e=class extends Ln{constructor(t=new Ua,n=new Fi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){let o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(t,n){let i=this.geometry,s=i.attributes.position,a=i.morphAttributes.position,r=i.morphTargetsRelative;n.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(a&&o){of.set(0,0,0);for(let l=0,c=a.length;l<c;l++){let h=o[l],p=a[l];h!==0&&(_0.fromBufferAttribute(p,t),r?of.addScaledVector(_0,h):of.addScaledVector(_0.sub(n),h))}n.add(of)}return n}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,n){let i=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),nf.copy(i.boundingSphere),nf.applyMatrix4(a),Mr.copy(t.ray).recast(t.near),!(nf.containsPoint(Mr.origin)===!1&&(Mr.intersectSphere(nf,gb)===null||Mr.origin.distanceToSquared(gb)>(t.far-t.near)**2))&&(mb.copy(a).invert(),Mr.copy(t.ray).applyMatrix4(mb),!(i.boundingBox!==null&&Mr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,Mr)))}_computeIntersections(t,n,i){let s,a=this.geometry,r=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,h=a.attributes.uv1,p=a.attributes.normal,u=a.groups,d=a.drawRange;if(o!==null)if(Array.isArray(r))for(let _=0,S=u.length;_<S;_++){let g=u[_],f=r[g.materialIndex],m=Math.max(g.start,d.start),y=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let x=m,E=y;x<E;x+=3){let A=o.getX(x),v=o.getX(x+1),T=o.getX(x+2);s=cf(this,f,t,i,c,h,p,A,v,T),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,n.push(s))}}else{let _=Math.max(0,d.start),S=Math.min(o.count,d.start+d.count);for(let g=_,f=S;g<f;g+=3){let m=o.getX(g),y=o.getX(g+1),x=o.getX(g+2);s=cf(this,r,t,i,c,h,p,m,y,x),s&&(s.faceIndex=Math.floor(g/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let _=0,S=u.length;_<S;_++){let g=u[_],f=r[g.materialIndex],m=Math.max(g.start,d.start),y=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let x=m,E=y;x<E;x+=3){let A=x,v=x+1,T=x+2;s=cf(this,f,t,i,c,h,p,A,v,T),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,n.push(s))}}else{let _=Math.max(0,d.start),S=Math.min(l.count,d.start+d.count);for(let g=_,f=S;g<f;g+=3){let m=g,y=g+1,x=g+2;s=cf(this,r,t,i,c,h,p,m,y,x),s&&(s.faceIndex=Math.floor(g/3),n.push(s))}}}};function wR(e,t,n,i,s,a,r,o){let l;if(t.side===Vn?l=i.intersectTriangle(r,a,s,!0,o):l=i.intersectTriangle(s,a,r,t.side===Ha,o),l===null)return null;lf.copy(o),lf.applyMatrix4(e.matrixWorld);let c=n.ray.origin.distanceTo(lf);return c<n.near||c>n.far?null:{distance:c,point:lf.clone(),object:e}}function cf(e,t,n,i,s,a,r,o,l,c){e.getVertexPosition(o,sf),e.getVertexPosition(l,af),e.getVertexPosition(c,rf);let h=wR(e,t,n,i,sf,af,rf,_b);if(h){let p=new H;Da.getBarycoord(_b,sf,af,rf,p),s&&(h.uv=Da.getInterpolatedAttribute(s,o,l,c,p,new ne)),a&&(h.uv1=Da.getInterpolatedAttribute(a,o,l,c,p,new ne)),r&&(h.normal=Da.getInterpolatedAttribute(r,o,l,c,p,new H),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new H,materialIndex:0};Da.getNormal(sf,af,rf,u.normal),h.face=u,h.barycoord=p}return h}var Nf=class extends Gn{constructor(t=null,n=1,i=1,s,a,r,o,l,c=pn,h=pn,p,u){super(null,r,o,l,c,h,s,a,p,u),this.isDataTexture=!0,this.image={data:t,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var br=new el,RR=new ne(.5,.5),uf=new H,Oa=class{constructor(t=new zi,n=new zi,i=new zi,s=new zi,a=new zi,r=new zi){this.planes=[t,n,i,s,a,r]}set(t,n,i,s,a,r){let o=this.planes;return o[0].copy(t),o[1].copy(n),o[2].copy(i),o[3].copy(s),o[4].copy(a),o[5].copy(r),this}copy(t){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=Ai,i=!1){let s=this.planes,a=t.elements,r=a[0],o=a[1],l=a[2],c=a[3],h=a[4],p=a[5],u=a[6],d=a[7],_=a[8],S=a[9],g=a[10],f=a[11],m=a[12],y=a[13],x=a[14],E=a[15];if(s[0].setComponents(c-r,d-h,f-_,E-m).normalize(),s[1].setComponents(c+r,d+h,f+_,E+m).normalize(),s[2].setComponents(c+o,d+p,f+S,E+y).normalize(),s[3].setComponents(c-o,d-p,f-S,E-y).normalize(),i)s[4].setComponents(l,u,g,x).normalize(),s[5].setComponents(c-l,d-u,f-g,E-x).normalize();else if(s[4].setComponents(c-l,d-u,f-g,E-x).normalize(),n===Ai)s[5].setComponents(c+l,d+u,f+g,E+x).normalize();else if(n===Ko)s[5].setComponents(l,u,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),br.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),br.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(br)}intersectsSprite(t){br.center.set(0,0,0);let n=RR.distanceTo(t.center);return br.radius=.7071067811865476+n,br.applyMatrix4(t.matrixWorld),this.intersectsSphere(br)}intersectsSphere(t){let n=this.planes,i=t.center,s=-t.radius;for(let a=0;a<6;a++)if(n[a].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let n=this.planes;for(let i=0;i<6;i++){let s=n[i];if(uf.x=s.normal.x>0?t.max.x:t.min.x,uf.y=s.normal.y>0?t.max.y:t.min.y,uf.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(uf)<0)return!1}return!0}containsPoint(t){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},vb=new Ie,Df=class e{constructor(){this.coordinateSystem=Ai,this._frustums=[],this._count=0}setFromArrayCamera(t){let n=t.cameras,i=this._frustums;for(let s=0;s<n.length;s++){let a=n[s];vb.multiplyMatrices(a.projectionMatrix,a.matrixWorldInverse),i[s]===void 0&&(i[s]=new Oa),i[s].setFromProjectionMatrix(vb,a.coordinateSystem,a.reversedDepth)}return this._count=n.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsObject(t))return!0;return!1}intersectsSprite(t){let n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsSphere(t))return!0;return!1}intersectsBox(t){let n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsBox(t))return!0;return!1}containsPoint(t){let n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let n=this._frustums,i=t._frustums;for(let s=0;s<t._count;s++)n[s]===void 0&&(n[s]=new Oa),n[s].copy(i[s]);return this._count=t._count,this}clone(){return new e().copy(this)}};var Dc=class extends Gn{constructor(t=[],n=Rr,i,s,a,r,o,l,c,h){super(t,n,i,s,a,r,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},nl=class extends Gn{constructor(t,n,i,s,a,r,o,l,c){super(t,n,i,s,a,r,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ks=class extends Gn{constructor(t,n,i=Hi,s,a,r,o=pn,l=pn,c,h=Gs,p=1){if(h!==Gs&&h!==Ws)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:n,depth:p};super(u,s,a,r,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new jo(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let n=super.toJSON(t);return n.compareFunction=this.compareFunction,n}},Lc=class extends ks{constructor(t,n=Hi,i=Rr,s,a,r=pn,o=pn,l,c=Gs){let h={width:t,height:t,depth:1},p=[h,h,h,h,h,h];super(t,t,n,i,s,a,r,o,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Uc=class extends Gn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Pa=class e extends Ua{constructor(t=1,n=1,i=1,s=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:s,heightSegments:a,depthSegments:r};let o=this;s=Math.floor(s),a=Math.floor(a),r=Math.floor(r);let l=[],c=[],h=[],p=[],u=0,d=0;_("z","y","x",-1,-1,i,n,t,r,a,0),_("z","y","x",1,-1,i,n,-t,r,a,1),_("x","z","y",1,1,t,i,n,s,r,2),_("x","z","y",1,-1,t,i,-n,s,r,3),_("x","y","z",1,-1,t,n,i,s,a,4),_("x","y","z",-1,-1,t,n,-i,s,a,5),this.setIndex(l),this.setAttribute("position",new wi(c,3)),this.setAttribute("normal",new wi(h,3)),this.setAttribute("uv",new wi(p,2));function _(S,g,f,m,y,x,E,A,v,T,I){let R=x/v,N=E/T,O=x/2,G=E/2,L=A/2,k=v+1,X=T+1,F=0,et=0,W=new H;for(let $=0;$<X;$++){let tt=$*N-G;for(let St=0;St<k;St++){let Pt=St*R-O;W[S]=Pt*m,W[g]=tt*y,W[f]=L,c.push(W.x,W.y,W.z),W[S]=0,W[g]=0,W[f]=A>0?1:-1,h.push(W.x,W.y,W.z),p.push(St/v),p.push(1-$/T),F+=1}}for(let $=0;$<T;$++)for(let tt=0;tt<v;tt++){let St=u+tt+k*$,Pt=u+tt+k*($+1),Z=u+(tt+1)+k*($+1),pt=u+(tt+1)+k*$;l.push(St,Pt,pt),l.push(Pt,Z,pt),et+=6}o.addGroup(d,et,I),d+=et,u+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Kn=class e extends Ua{constructor(t=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:s};let a=t/2,r=n/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,p=t/o,u=n/l,d=[],_=[],S=[],g=[];for(let f=0;f<h;f++){let m=f*u-r;for(let y=0;y<c;y++){let x=y*p-a;_.push(x,-m,0),S.push(0,0,1),g.push(y/o),g.push(1-f/l)}}for(let f=0;f<l;f++)for(let m=0;m<o;m++){let y=m+c*f,x=m+c*(f+1),E=m+1+c*(f+1),A=m+1+c*f;d.push(y,x,A),d.push(x,E,A)}this.setIndex(d),this.setAttribute("position",new wi(_,3)),this.setAttribute("normal",new wi(S,3)),this.setAttribute("uv",new wi(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}};function Nr(e){let t={};for(let n in e){t[n]={};for(let i in e[n]){let s=e[n][i];if(yb(s))s.isRenderTargetTexture?(Ut("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=s.clone();else if(Array.isArray(s))if(yb(s[0])){let a=[];for(let r=0,o=s.length;r<o;r++)a[r]=s[r].clone();t[n][i]=a}else t[n][i]=s.slice();else t[n][i]=s}}return t}function Un(e){let t={};for(let n=0;n<e.length;n++){let i=Nr(e[n]);for(let s in i)t[s]=i[s]}return t}function yb(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function CR(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function e_(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:re.workingColorSpace}var d1={clone:Nr,merge:Un},NR=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,DR=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,fs=class extends Ia{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=NR,this.fragmentShader=DR,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Nr(t.uniforms),this.uniformsGroups=CR(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(let s in this.uniforms){let r=this.uniforms[s].value;r&&r.isTexture?n.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?n.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?n.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?n.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?n.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?n.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?n.uniforms[s]={type:"m4",value:r.toArray()}:n.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(t,n){if(super.fromJSON(t,n),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=n[s.value]||null;break;case"c":this.uniforms[i].value=new Zt().setHex(s.value);break;case"v2":this.uniforms[i].value=new ne().fromArray(s.value);break;case"v3":this.uniforms[i].value=new H().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Be().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Ft().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Ie().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Lf=class extends fs{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Er=class extends Ia{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Zt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ld,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vs,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Uf=class extends Ia{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},If=class extends Ia{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Wo(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function hf(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var Ba=class{constructor(t,n,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let n=this.parameterPositions,i=this._cachedIndex,s=n[i],a=n[i-1];t:{e:{let r;n:{i:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<a)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(a=s,s=n[++i],t<s)break e}r=n.length;break n}if(!(t>=a)){let o=n[1];t<o&&(i=2,a=o);for(let l=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=a,a=n[--i-1],t>=a)break e}r=i,i=0;break n}break t}for(;i<r;){let o=i+r>>>1;t<n[o]?r=o:i=o+1}if(s=n[i],a=n[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,s)}return this.interpolate_(i,a,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let n=this.resultBuffer,i=this.sampleValues,s=this.valueSize,a=t*s;for(let r=0;r!==s;++r)n[r]=i[a+r];return n}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Of=class extends Ba{constructor(t,n,i,s){super(t,n,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:x0,endingEnd:x0}}intervalChanged_(t,n,i){let s=this.parameterPositions,a=t-2,r=t+1,o=s[a],l=s[r];if(o===void 0)switch(this.getSettings_().endingStart){case S0:a=t,o=2*n-i;break;case M0:a=s.length-2,o=n+s[a]-s[a+1];break;default:a=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case S0:r=t,l=2*i-n;break;case M0:r=1,l=i+s[1]-s[0];break;default:r=t-1,l=n}let c=(i-n)*.5,h=this.valueSize;this._weightPrev=c/(n-o),this._weightNext=c/(l-i),this._offsetPrev=a*h,this._offsetNext=r*h}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,p=this._offsetNext,u=this._weightPrev,d=this._weightNext,_=(i-n)/(s-n),S=_*_,g=S*_,f=-u*g+2*u*S-u*_,m=(1+u)*g+(-1.5-2*u)*S+(-.5+u)*_+1,y=(-1-d)*g+(1.5+d)*S+.5*_,x=d*g-d*S;for(let E=0;E!==o;++E)a[E]=f*r[h+E]+m*r[c+E]+y*r[l+E]+x*r[p+E];return a}},Pf=class extends Ba{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(i-n)/(s-n),p=1-h;for(let u=0;u!==o;++u)a[u]=r[c+u]*p+r[l+u]*h;return a}},Bf=class extends Ba{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},zf=class extends Ba{interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,p=this.outTangents;if(!h||!p){let _=(i-n)/(s-n),S=1-_;for(let g=0;g!==o;++g)a[g]=r[c+g]*S+r[l+g]*_;return a}let u=o*2,d=t-1;for(let _=0;_!==o;++_){let S=r[c+_],g=r[l+_],f=d*u+_*2,m=p[f],y=p[f+1],x=t*u+_*2,E=h[x],A=h[x+1],v=UR(i,n,m,E,s);a[_]=p1(v,S,y,A,g)}return a}};function p1(e,t,n,i,s){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*i+e*e*e*s}function LR(e,t,n,i,s){let a=1-e;return 3*a*a*(n-t)+6*a*e*(i-n)+3*e*e*(s-i)}function UR(e,t,n,i,s){let a=(e-t)/(s-t);for(let r=0;r<8;r++){let o=p1(a,t,n,i,s)-e;if(Math.abs(o)<1e-10)break;let l=LR(a,t,n,i,s);if(Math.abs(l)<1e-10)break;a=Math.max(0,Math.min(1,a-o/l))}return a}var di=class{constructor(t,n,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Wo(n,this.TimeBufferType),this.values=Wo(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let n=t.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(t);else{i={name:t.name,times:Wo(t.times,Array),values:Wo(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),hf(t.settings)&&(i.settings={inTangents:Wo(t.settings.inTangents,Array),outTangents:Wo(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Bf(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Pf(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Of(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let n=new zf(this.times,this.values,this.getValueSize(),t);return this.settings&&(n.inTangents=this.settings.inTangents,n.outTangents=this.settings.outTangents),n}setInterpolation(t){let n;switch(t){case Sc:n=this.InterpolantFactoryMethodDiscrete;break;case Ef:n=this.InterpolantFactoryMethodLinear;break;case pf:n=this.InterpolantFactoryMethodSmooth;break;case y0:n=this.InterpolantFactoryMethodBezier;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ut("KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Sc;case this.InterpolantFactoryMethodLinear:return Ef;case this.InterpolantFactoryMethodSmooth:return pf;case this.InterpolantFactoryMethodBezier:return y0}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]+=t;hf(this.settings)&&(xb(this.settings.inTangents,t),xb(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]*=t;hf(this.settings)&&(Sb(this.settings.inTangents,t),Sb(this.settings.outTangents,t))}return this}trim(t,n){let i=this.times,s=i.length,a=0,r=s-1;for(;a!==s&&i[a]<t;)++a;for(;r!==-1&&i[r]>n;)--r;if(++r,a!==0||r!==s){a>=r&&(r=Math.max(r,1),a=r-1);let o=this.getValueSize();this.times=i.slice(a,r),this.values=this.values.slice(a*o,r*o)}return this}validate(){let t=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(Ot("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,a=i.length;a===0&&(Ot("KeyframeTrack: Track is empty.",this),t=!1);let r=null;for(let o=0;o!==a;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Ot("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(r!==null&&r>l){Ot("KeyframeTrack: Out of order keys.",this,o,l,r),t=!1;break}r=l}if(s!==void 0&&oR(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Ot("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===pf,a=t.length-1,r=1;for(let o=1;o<a;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let p=o*i,u=p-i,d=p+i;for(let _=0;_!==i;++_){let S=n[p+_];if(S!==n[u+_]||S!==n[d+_]){l=!0;break}}}if(l){if(o!==r){t[r]=t[o];let p=o*i,u=r*i;for(let d=0;d!==i;++d)n[u+d]=n[p+d]}++r}}if(a>0){t[r]=t[a];for(let o=a*i,l=r*i,c=0;c!==i;++c)n[l+c]=n[o+c];++r}return r!==t.length?(this.times=t.slice(0,r),this.values=n.slice(0,r*i)):(this.times=t,this.values=n),this}clone(){let t=this.times.slice(),n=this.values.slice(),i=this.constructor,s=new i(this.name,t,n);return s.createInterpolant=this.createInterpolant,hf(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function xb(e,t){for(let n=0,i=e.length;n!==i;n+=2)e[n]+=t}function Sb(e,t){for(let n=0,i=e.length;n!==i;n+=2)e[n]*=t}di.prototype.ValueTypeName="";di.prototype.TimeBufferType=Float32Array;di.prototype.ValueBufferType=Float32Array;di.prototype.DefaultInterpolation=Ef;var za=class extends di{constructor(t,n,i){super(t,n,i)}};za.prototype.ValueTypeName="bool";za.prototype.ValueBufferType=Array;za.prototype.DefaultInterpolation=Sc;za.prototype.InterpolantFactoryMethodLinear=void 0;za.prototype.InterpolantFactoryMethodSmooth=void 0;var Ff=class extends di{constructor(t,n,i,s){super(t,n,i,s)}};Ff.prototype.ValueTypeName="color";var Hf=class extends di{constructor(t,n,i,s){super(t,n,i,s)}};Hf.prototype.ValueTypeName="number";var Gf=class extends Ba{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=(i-n)/(s-n),c=t*o;for(let h=c+o;c!==h;c+=4)hs.slerpFlat(a,0,r,c-o,r,c,l);return a}},Ic=class extends di{constructor(t,n,i,s){super(t,n,i,s)}InterpolantFactoryMethodLinear(t){return new Gf(this.times,this.values,this.getValueSize(),t)}};Ic.prototype.ValueTypeName="quaternion";Ic.prototype.InterpolantFactoryMethodSmooth=void 0;var Fa=class extends di{constructor(t,n,i){super(t,n,i)}};Fa.prototype.ValueTypeName="string";Fa.prototype.ValueBufferType=Array;Fa.prototype.DefaultInterpolation=Sc;Fa.prototype.InterpolantFactoryMethodLinear=void 0;Fa.prototype.InterpolantFactoryMethodSmooth=void 0;var Vf=class extends di{constructor(t,n,i,s){super(t,n,i,s)}};Vf.prototype.ValueTypeName="vector";var kf=class{constructor(t,n,i){let s=this,a=!1,r=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,a===!1&&s.onStart!==void 0&&s.onStart(h,r,o),a=!0},this.itemEnd=function(h){r++,s.onProgress!==void 0&&s.onProgress(h,r,o),r===o&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,p){return c.push(h,p),this},this.removeHandler=function(h){let p=c.indexOf(h);return p!==-1&&c.splice(p,2),this},this.getHandler=function(h){for(let p=0,u=c.length;p<u;p+=2){let d=c[p],_=c[p+1];if(d.global&&(d.lastIndex=0),d.test(h))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},m1=new kf,Xf=class{constructor(t){this.manager=t!==void 0?t:m1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,n){let i=this;return new Promise(function(s,a){i.load(t,s,n,a)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};Xf.DEFAULT_MATERIAL_NAME="__DEFAULT";var Oc=class extends Ln{static registerNode(t){this.prototype._lightNode=t}constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Zt(t),this.intensity=n}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}},Pc=class extends Oc{constructor(t,n,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ln.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Zt(n)}copy(t,n){return super.copy(t,n),this.groundColor.copy(t.groundColor),this}toJSON(t){let n=super.toJSON(t);return n.object.groundColor=this.groundColor.getHex(),n}},v0=new Ie,Mb=new H,bb=new H,Wf=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ne(512,512),this.mapType=Qn,this.map=null,this.mapPass=null,this.matrix=new Ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Oa,this._frameExtents=new ne(1,1),this._viewportCount=1,this._viewports=[new Be(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let n=this.camera;Mb.setFromMatrixPosition(t.matrixWorld),n.position.copy(Mb),bb.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(bb),n.updateMatrixWorld(),this._updateMatrix(n,this.matrix,this._frustum)}_updateMatrix(t,n,i,s){v0.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(v0,t.coordinateSystem,t.reversedDepth);let a=this._frameExtents,r=s?s.z/a.x:1,o=s?s.w/a.y:1,l=s?s.x/a.x:0,c=s?s.y/a.y:0;t.coordinateSystem===Ko||t.reversedDepth?n.set(.5*r,0,0,.5*r+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):n.set(.5*r,0,0,.5*r+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),n.multiply(v0)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},ff=new H,df=new hs,os=new H,Bc=class extends Ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ie,this.projectionMatrix=new Ie,this.projectionMatrixInverse=new Ie,this.coordinateSystem=Ai,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ff,df,os),os.x===1&&os.y===1&&os.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ff,df,os.set(1,1,1)).invert()}updateWorldMatrix(t,n,i=!1){super.updateWorldMatrix(t,n,i),this.matrixWorld.decompose(ff,df,os),os.x===1&&os.y===1&&os.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ff,df,os.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Na=new H,Tb=new ne,Eb=new ne,Hn=class extends Bc{constructor(t=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let n=.5*this.getFilmHeight()/t;this.fov=Af*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Qg*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Af*2*Math.atan(Math.tan(Qg*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){Na.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Na.x,Na.y).multiplyScalar(-t/Na.z),Na.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Na.x,Na.y).multiplyScalar(-t/Na.z)}getViewSize(t,n){return this.getViewBounds(t,Tb,Eb),n.subVectors(Eb,Tb)}setViewOffset(t,n,i,s,a,r){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,n=t*Math.tan(Qg*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,a=-.5*s,r=this.view;if(this.view!==null&&this.view.enabled){let l=r.fullWidth,c=r.fullHeight;a+=r.offsetX*s/l,n-=r.offsetY*i/c,s*=r.width/l,i*=r.height/c}let o=this.filmOffset;o!==0&&(a+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,n,n-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}};var zc=class extends Bc{constructor(t=-1,n=1,i=1,s=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=s,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,s,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,a=i-t,r=i+t,o=s+n,l=s-n;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,r=a+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}},b0=class extends Wf{constructor(){super(new zc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Fc=class extends Oc{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ln.DEFAULT_UP),this.updateMatrix(),this.target=new Ln,this.shadow=new b0}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let n=super.toJSON(t);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}};var qo=-90,Yo=1,il=class extends Ln{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Hn(qo,Yo,t,n);s.layers=this.layers,this.add(s);let a=new Hn(qo,Yo,t,n);a.layers=this.layers,this.add(a);let r=new Hn(qo,Yo,t,n);r.layers=this.layers,this.add(r);let o=new Hn(qo,Yo,t,n);o.layers=this.layers,this.add(o);let l=new Hn(qo,Yo,t,n);l.layers=this.layers,this.add(l);let c=new Hn(qo,Yo,t,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,n=this.children.concat(),[i,s,a,r,o,l]=n;for(let c of n)this.remove(c);if(t===Ai)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ko)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of n)this.add(c),c.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[a,r,o,l,c,h]=this.children,p=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let S=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,a),t.setRenderTarget(i,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,r),t.setRenderTarget(i,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,o),t.setRenderTarget(i,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,l),t.setRenderTarget(i,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,c),i.texture.mipmapsAutoUpdate=S,t.setRenderTarget(i,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,h),t.setRenderTarget(p,u,d),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}},qf=class extends Hn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var n_="\\[\\]\\.:\\/",IR=new RegExp("["+n_+"]","g"),i_="[^"+n_+"]",OR="[^"+n_.replace("\\.","")+"]",PR=/((?:WC+[\/:])*)/.source.replace("WC",i_),BR=/(WCOD+)?/.source.replace("WCOD",OR),zR=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",i_),FR=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",i_),HR=new RegExp("^"+PR+BR+zR+FR+"$"),GR=["material","materials","bones","map"],T0=class{constructor(t,n,i){let s=i||Ue.parseTrackName(n);this._targetGroup=t,this._bindings=t.subscribe_(n,s)}getValue(t,n){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,n)}setValue(t,n){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,a=i.length;s!==a;++s)i[s].setValue(t,n)}bind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].bind()}unbind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].unbind()}},Ue=class e{constructor(t,n,i){this.path=n,this.parsedPath=i||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,i){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,i):new e(t,n,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(IR,"")}static parseTrackName(t){let n=HR.exec(t);if(n===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let a=i.nodeName.substring(s+1);GR.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(n);if(i!==void 0)return i}if(t.children){let i=function(a){for(let r=0;r<a.length;r++){let o=a[r];if(o.name===n||o.uuid===n)return o;let l=i(o.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)t[n++]=i[s]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++]}_setValue_array_setNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node,n=this.parsedPath,i=n.objectName,s=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ut("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=n.objectIndex;switch(i){case"materials":if(!t.material){Ot("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Ot("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Ot("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Ot("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Ot("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Ot("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){Ot("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let r=t[s];if(r===void 0){let c=n.nodeName;Ot("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(a!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Ot("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Ot("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=a}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ue.Composite=T0;Ue.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ue.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ue.prototype.GetterByBindingType=[Ue.prototype._getValue_direct,Ue.prototype._getValue_array,Ue.prototype._getValue_arrayElement,Ue.prototype._getValue_toArray];Ue.prototype.SetterByBindingTypeAndVersioning=[[Ue.prototype._setValue_direct,Ue.prototype._setValue_direct_setNeedsUpdate,Ue.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ue.prototype._setValue_array,Ue.prototype._setValue_array_setNeedsUpdate,Ue.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ue.prototype._setValue_arrayElement,Ue.prototype._setValue_arrayElement_setNeedsUpdate,Ue.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ue.prototype._setValue_fromArray,Ue.prototype._setValue_fromArray_setNeedsUpdate,Ue.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var uL=new Float32Array(1);var Ab=new Ie,Hc=class{constructor(t,n,i=0,s=1/0){this.ray=new Nc(t,n),this.near=i,this.far=s,this.camera=null,this.layers=new $o,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,n){this.ray.set(t,n)}setFromCamera(t,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,n.projectionMatrix.elements[14]).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):Ot("Raycaster: Unsupported camera type: "+n.type)}setFromXRController(t){return Ab.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ab),this}intersectObject(t,n=!0,i=[]){return E0(t,this,i,n),i.sort(wb),i}intersectObjects(t,n=!0,i=[]){for(let s=0,a=t.length;s<a;s++)E0(t[s],this,i,n);return i.sort(wb),i}};function wb(e,t){return e.distance-t.distance}function E0(e,t,n,i){let s=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(s=!1),s===!0&&i===!0){let a=e.children;for(let r=0,o=a.length;r<o;r++)E0(a[r],t,n,!0)}}var A0=class{static{this.prototype.isMatrix2=!0}constructor(t,n,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,n,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,n=0){for(let i=0;i<4;i++)this.elements[i]=t[i+n];return this}set(t,n,i,s){let a=this.elements;return a[0]=t,a[2]=n,a[1]=i,a[3]=s,this}};function s_(e,t,n,i){let s=VR(i);switch(n){case q0:return e*t;case Z0:return e*t/s.components*s.byteLength;case $f:return e*t/s.components*s.byteLength;case Ga:return e*t*2/s.components*s.byteLength;case td:return e*t*2/s.components*s.byteLength;case Y0:return e*t*3/s.components*s.byteLength;case ki:return e*t*4/s.components*s.byteLength;case ed:return e*t*4/s.components*s.byteLength;case kc:case Xc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Wc:case qc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case id:case ad:return Math.max(e,16)*Math.max(t,8)/4;case nd:case sd:return Math.max(e,8)*Math.max(t,8)/2;case rd:case od:case cd:case ud:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ld:case Yc:case hd:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case fd:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case dd:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case pd:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case md:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case gd:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case _d:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case vd:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case yd:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case xd:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Sd:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Md:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case bd:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Td:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Ed:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Ad:case wd:case Rd:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Cd:case Nd:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Zc:case Dd:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function VR(e){switch(e){case Qn:case V0:return{byteLength:1,components:1};case ol:case k0:case Vi:return{byteLength:2,components:1};case Qf:case jf:return{byteLength:2,components:4};case Hi:case Kf:case Gi:return{byteLength:4,components:1};case X0:case W0:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Ut("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function B1(){let e=null,t=!1,n=null,i=null;function s(a,r){i=e.requestAnimationFrame(s),n(a,r)}return{start:function(){t!==!0&&n!==null&&e!==null&&(i=e.requestAnimationFrame(s),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(a){n=a},setContext:function(a){e=a}}}function XR(e){let t=new WeakMap;function n(o,l){let c=o.array,h=o.usage,p=c.byteLength,u=e.createBuffer();e.bindBuffer(l,u),e.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=e.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=e.HALF_FLOAT:d=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=e.SHORT;else if(c instanceof Uint32Array)d=e.UNSIGNED_INT;else if(c instanceof Int32Array)d=e.INT;else if(c instanceof Int8Array)d=e.BYTE;else if(c instanceof Uint8Array)d=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,l,c){let h=l.array,p=l.updateRanges;if(e.bindBuffer(c,o),p.length===0)e.bufferSubData(c,0,h);else{p.sort((d,_)=>d.start-_.start);let u=0;for(let d=1;d<p.length;d++){let _=p[u],S=p[d];S.start<=_.start+_.count+1?_.count=Math.max(_.count,S.start+S.count-_.start):(++u,p[u]=S)}p.length=u+1;for(let d=0,_=p.length;d<_;d++){let S=p[d];e.bufferSubData(c,S.start*h.BYTES_PER_ELEMENT,h,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:a,update:r}}var WR=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qR=`#ifdef USE_ALPHAHASH
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
#endif`,YR=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ZR=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,JR=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,KR=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,QR=`#ifdef USE_AOMAP
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
#endif`,jR=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$R=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,tC=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,eC=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nC=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,iC=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,sC=`#ifdef USE_IRIDESCENCE
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
#endif`,aC=`#ifdef USE_BUMPMAP
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
#endif`,rC=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,oC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cC=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,uC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,hC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,fC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,dC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,pC=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,mC=`vec3 transformedNormal = objectNormal;
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
#endif`,gC=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_C=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vC=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yC=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xC="gl_FragColor = linearToOutputTexel( gl_FragColor );",SC=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,MC=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,bC=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,TC=`#ifdef USE_ENVMAP
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
#endif`,EC=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,AC=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,wC=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,RC=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,CC=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,NC=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,DC=`#ifdef USE_GRADIENTMAP
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
}`,LC=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,UC=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,IC=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,OC=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,PC=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,BC=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zC=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,FC=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,HC=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,GC=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,VC=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
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
		return 0.5 / max( gv + gl, EPSILON );
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
		float roughness = max( material.clearcoatRoughness, 0.045 );
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
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
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
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,kC=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,XC=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,WC=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qC=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,YC=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ZC=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,JC=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,KC=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,QC=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jC=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$C=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,t3=`#if defined( USE_POINTS_UV )
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
#endif`,e3=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,n3=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,i3=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,s3=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,a3=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,r3=`#ifdef USE_MORPHTARGETS
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
#endif`,o3=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,l3=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,c3=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,u3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,h3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,f3=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,d3=`#ifdef USE_NORMALMAP
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
#endif`,p3=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,m3=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,g3=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_3=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,v3=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,y3=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,x3=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,S3=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,M3=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,b3=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,T3=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,E3=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,A3=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,w3=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,R3=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,C3=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,N3=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,D3=`#ifdef USE_SKINNING
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
#endif`,L3=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,U3=`#ifdef USE_SKINNING
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
#endif`,I3=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,O3=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,P3=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,B3=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,z3=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,F3=`#ifdef USE_TRANSMISSION
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
#endif`,H3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,G3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,V3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
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
#endif`,k3=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,X3=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,W3=`uniform sampler2D t2D;
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
}`,q3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Y3=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Z3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,J3=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,K3=`#include <common>
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
}`,Q3=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,j3=`#define DISTANCE
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
}`,$3=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,t2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,e2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,n2=`uniform float scale;
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
}`,i2=`uniform vec3 diffuse;
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
}`,s2=`#include <common>
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
}`,a2=`uniform vec3 diffuse;
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
}`,r2=`#define LAMBERT
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
}`,o2=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,l2=`#define MATCAP
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
}`,c2=`#define MATCAP
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
}`,u2=`#define NORMAL
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
}`,h2=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,f2=`#define PHONG
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
}`,d2=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,p2=`#define STANDARD
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
}`,m2=`#define STANDARD
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
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,g2=`#define TOON
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
}`,_2=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,v2=`uniform float size;
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
}`,y2=`uniform vec3 diffuse;
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
}`,x2=`#include <common>
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
}`,S2=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,M2=`uniform float rotation;
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
}`,b2=`uniform vec3 diffuse;
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
}`,Jt={alphahash_fragment:WR,alphahash_pars_fragment:qR,alphamap_fragment:YR,alphamap_pars_fragment:ZR,alphatest_fragment:JR,alphatest_pars_fragment:KR,aomap_fragment:QR,aomap_pars_fragment:jR,batching_pars_vertex:$R,batching_vertex:tC,begin_vertex:eC,beginnormal_vertex:nC,bsdfs:iC,iridescence_fragment:sC,bumpmap_pars_fragment:aC,clipping_planes_fragment:rC,clipping_planes_pars_fragment:oC,clipping_planes_pars_vertex:lC,clipping_planes_vertex:cC,color_fragment:uC,color_pars_fragment:hC,color_pars_vertex:fC,color_vertex:dC,common:pC,defaultnormal_vertex:mC,displacementmap_pars_vertex:gC,displacementmap_vertex:_C,emissivemap_fragment:vC,emissivemap_pars_fragment:yC,colorspace_fragment:xC,colorspace_pars_fragment:SC,envmap_fragment:MC,envmap_common_pars_fragment:bC,envmap_pars_fragment:TC,envmap_pars_vertex:EC,envmap_physical_pars_fragment:PC,envmap_vertex:AC,fog_vertex:wC,fog_pars_vertex:RC,fog_fragment:CC,fog_pars_fragment:NC,gradientmap_pars_fragment:DC,lightmap_pars_fragment:LC,lights_lambert_fragment:UC,lights_lambert_pars_fragment:IC,lights_pars_begin:OC,lights_toon_fragment:BC,lights_toon_pars_fragment:zC,lights_phong_fragment:FC,lights_phong_pars_fragment:HC,lights_physical_fragment:GC,lights_physical_pars_fragment:VC,lights_fragment_begin:kC,lights_fragment_maps:XC,lights_fragment_end:WC,lightprobes_pars_fragment:qC,logdepthbuf_fragment:YC,logdepthbuf_pars_fragment:ZC,logdepthbuf_pars_vertex:JC,logdepthbuf_vertex:KC,map_fragment:QC,map_pars_fragment:jC,map_particle_fragment:$C,map_particle_pars_fragment:t3,metalnessmap_fragment:e3,metalnessmap_pars_fragment:n3,morphinstance_vertex:i3,morphcolor_vertex:s3,morphnormal_vertex:a3,morphtarget_pars_vertex:r3,morphtarget_vertex:o3,normal_fragment_begin:l3,normal_fragment_maps:c3,normal_pars_fragment:u3,normal_pars_vertex:h3,normal_vertex:f3,normalmap_pars_fragment:d3,clearcoat_normal_fragment_begin:p3,clearcoat_normal_fragment_maps:m3,clearcoat_pars_fragment:g3,iridescence_pars_fragment:_3,opaque_fragment:v3,packing:y3,premultiplied_alpha_fragment:x3,project_vertex:S3,dithering_fragment:M3,dithering_pars_fragment:b3,roughnessmap_fragment:T3,roughnessmap_pars_fragment:E3,shadowmap_pars_fragment:A3,shadowmap_pars_vertex:w3,shadowmap_vertex:R3,shadowmask_pars_fragment:C3,skinbase_vertex:N3,skinning_pars_vertex:D3,skinning_vertex:L3,skinnormal_vertex:U3,specularmap_fragment:I3,specularmap_pars_fragment:O3,tonemapping_fragment:P3,tonemapping_pars_fragment:B3,transmission_fragment:z3,transmission_pars_fragment:F3,uv_pars_fragment:H3,uv_pars_vertex:G3,uv_vertex:V3,worldpos_vertex:k3,background_vert:X3,background_frag:W3,backgroundCube_vert:q3,backgroundCube_frag:Y3,cube_vert:Z3,cube_frag:J3,depth_vert:K3,depth_frag:Q3,distance_vert:j3,distance_frag:$3,equirect_vert:t2,equirect_frag:e2,linedashed_vert:n2,linedashed_frag:i2,meshbasic_vert:s2,meshbasic_frag:a2,meshlambert_vert:r2,meshlambert_frag:o2,meshmatcap_vert:l2,meshmatcap_frag:c2,meshnormal_vert:u2,meshnormal_frag:h2,meshphong_vert:f2,meshphong_frag:d2,meshphysical_vert:p2,meshphysical_frag:m2,meshtoon_vert:g2,meshtoon_frag:_2,points_vert:v2,points_frag:y2,shadow_vert:x2,shadow_frag:S2,sprite_vert:M2,sprite_frag:b2},_t={common:{diffuse:{value:new Zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ft}},envmap:{envMap:{value:null},envMapRotation:{value:new Ft},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ft},normalScale:{value:new ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0},uvTransform:{value:new Ft}},sprite:{diffuse:{value:new Zt(16777215)},opacity:{value:1},center:{value:new ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}}},ms={basic:{uniforms:Un([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.fog]),vertexShader:Jt.meshbasic_vert,fragmentShader:Jt.meshbasic_frag},lambert:{uniforms:Un([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Zt(0)},envMapIntensity:{value:1}}]),vertexShader:Jt.meshlambert_vert,fragmentShader:Jt.meshlambert_frag},phong:{uniforms:Un([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Zt(0)},specular:{value:new Zt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphong_vert,fragmentShader:Jt.meshphong_frag},standard:{uniforms:Un([_t.common,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.roughnessmap,_t.metalnessmap,_t.fog,_t.lights,{emissive:{value:new Zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag},toon:{uniforms:Un([_t.common,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.gradientmap,_t.fog,_t.lights,{emissive:{value:new Zt(0)}}]),vertexShader:Jt.meshtoon_vert,fragmentShader:Jt.meshtoon_frag},matcap:{uniforms:Un([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,{matcap:{value:null}}]),vertexShader:Jt.meshmatcap_vert,fragmentShader:Jt.meshmatcap_frag},points:{uniforms:Un([_t.points,_t.fog]),vertexShader:Jt.points_vert,fragmentShader:Jt.points_frag},dashed:{uniforms:Un([_t.common,_t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Jt.linedashed_vert,fragmentShader:Jt.linedashed_frag},depth:{uniforms:Un([_t.common,_t.displacementmap]),vertexShader:Jt.depth_vert,fragmentShader:Jt.depth_frag},normal:{uniforms:Un([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,{opacity:{value:1}}]),vertexShader:Jt.meshnormal_vert,fragmentShader:Jt.meshnormal_frag},sprite:{uniforms:Un([_t.sprite,_t.fog]),vertexShader:Jt.sprite_vert,fragmentShader:Jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Jt.background_vert,fragmentShader:Jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ft}},vertexShader:Jt.backgroundCube_vert,fragmentShader:Jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Jt.cube_vert,fragmentShader:Jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Jt.equirect_vert,fragmentShader:Jt.equirect_frag},distance:{uniforms:Un([_t.common,_t.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Jt.distance_vert,fragmentShader:Jt.distance_frag},shadow:{uniforms:Un([_t.lights,_t.fog,{color:{value:new Zt(0)},opacity:{value:1}}]),vertexShader:Jt.shadow_vert,fragmentShader:Jt.shadow_frag}};ms.physical={uniforms:Un([ms.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ft},clearcoatNormalScale:{value:new ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ft},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ft},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ft},sheen:{value:0},sheenColor:{value:new Zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ft},transmissionSamplerSize:{value:new ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ft},attenuationDistance:{value:0},attenuationColor:{value:new Zt(0)},specularColor:{value:new Zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ft},anisotropyVector:{value:new ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ft}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag};var Ud={r:0,b:0,g:0},T2=new Ie,z1=new Ft;z1.set(-1,0,0,0,1,0,0,0,1);function E2(e,t,n,i,s,a){let r=new Zt(0),o=s===!0?0:1,l,c,h=null,p=0,u=null;function d(m){let y=m.isScene===!0?m.background:null;if(y&&y.isTexture){let x=m.backgroundBlurriness>0;y=t.get(y,x)}return y}function _(m){let y=!1,x=d(m);x===null?g(r,o):x&&x.isColor&&(g(x,1),y=!0);let E=e.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function S(m,y){let x=d(y);x&&x.isCubeTexture?(c===void 0&&(c=new $e(new Pa(1,1,1),new fs({name:"BackgroundCubeMaterial",uniforms:Nr(ms.backgroundCube.uniforms),vertexShader:ms.backgroundCube.vertexShader,fragmentShader:ms.backgroundCube.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,A,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(T2.makeRotationFromEuler(y.backgroundRotation)).transpose(),x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(z1),c.material.toneMapped=re.getTransfer(x.colorSpace)!==ve,(h!==x||p!==x.version||u!==e.toneMapping)&&(c.material.needsUpdate=!0,h=x,p=x.version,u=e.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new $e(new Kn(2,2),new fs({name:"BackgroundMaterial",uniforms:Nr(ms.background.uniforms),vertexShader:ms.background.vertexShader,fragmentShader:ms.background.fragmentShader,side:Ha,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=re.getTransfer(x.colorSpace)!==ve,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||p!==x.version||u!==e.toneMapping)&&(l.material.needsUpdate=!0,h=x,p=x.version,u=e.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function g(m,y){m.getRGB(Ud,e_(e)),n.buffers.color.setClear(Ud.r,Ud.g,Ud.b,y,a)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return r},setClearColor:function(m,y=1){r.set(m),o=y,g(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(m){o=m,g(r,o)},render:_,addToRenderList:S,dispose:f}}function A2(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},s=u(null),a=s,r=!1;function o(N,O,G,L,k){let X=!1,F=p(N,L,G,O);a!==F&&(a=F,c(a.object)),X=d(N,L,G,k),X&&_(N,L,G,k),k!==null&&t.update(k,e.ELEMENT_ARRAY_BUFFER),(X||r)&&(r=!1,x(N,O,G,L),k!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function l(){return e.createVertexArray()}function c(N){return e.bindVertexArray(N)}function h(N){return e.deleteVertexArray(N)}function p(N,O,G,L){let k=L.wireframe===!0,X=i[O.id];X===void 0&&(X={},i[O.id]=X);let F=N.isInstancedMesh===!0?N.id:0,et=X[F];et===void 0&&(et={},X[F]=et);let W=et[G.id];W===void 0&&(W={},et[G.id]=W);let $=W[k];return $===void 0&&($=u(l()),W[k]=$),$}function u(N){let O=[],G=[],L=[];for(let k=0;k<n;k++)O[k]=0,G[k]=0,L[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:G,attributeDivisors:L,object:N,attributes:{},index:null}}function d(N,O,G,L){let k=a.attributes,X=O.attributes,F=0,et=G.getAttributes();for(let W in et)if(et[W].location>=0){let tt=k[W],St=X[W];if(St===void 0&&(W==="instanceMatrix"&&N.instanceMatrix&&(St=N.instanceMatrix),W==="instanceColor"&&N.instanceColor&&(St=N.instanceColor)),tt===void 0||tt.attribute!==St||St&&tt.data!==St.data)return!0;F++}return a.attributesNum!==F||a.index!==L}function _(N,O,G,L){let k={},X=O.attributes,F=0,et=G.getAttributes();for(let W in et)if(et[W].location>=0){let tt=X[W];tt===void 0&&(W==="instanceMatrix"&&N.instanceMatrix&&(tt=N.instanceMatrix),W==="instanceColor"&&N.instanceColor&&(tt=N.instanceColor));let St={};St.attribute=tt,tt&&tt.data&&(St.data=tt.data),k[W]=St,F++}a.attributes=k,a.attributesNum=F,a.index=L}function S(){let N=a.newAttributes;for(let O=0,G=N.length;O<G;O++)N[O]=0}function g(N){f(N,0)}function f(N,O){let G=a.newAttributes,L=a.enabledAttributes,k=a.attributeDivisors;G[N]=1,L[N]===0&&(e.enableVertexAttribArray(N),L[N]=1),k[N]!==O&&(e.vertexAttribDivisor(N,O),k[N]=O)}function m(){let N=a.newAttributes,O=a.enabledAttributes;for(let G=0,L=O.length;G<L;G++)O[G]!==N[G]&&(e.disableVertexAttribArray(G),O[G]=0)}function y(N,O,G,L,k,X,F){F===!0?e.vertexAttribIPointer(N,O,G,k,X):e.vertexAttribPointer(N,O,G,L,k,X)}function x(N,O,G,L){S();let k=L.attributes,X=G.getAttributes(),F=O.defaultAttributeValues;for(let et in X){let W=X[et];if(W.location>=0){let $=k[et];if($===void 0&&(et==="instanceMatrix"&&N.instanceMatrix&&($=N.instanceMatrix),et==="instanceColor"&&N.instanceColor&&($=N.instanceColor)),$!==void 0){let tt=$.normalized,St=$.itemSize,Pt=t.get($);if(Pt===void 0)continue;let Z=Pt.buffer,pt=Pt.type,yt=Pt.bytesPerElement,At=pt===e.INT||pt===e.UNSIGNED_INT||$.gpuType===Kf;if($.isInterleavedBufferAttribute){let mt=$.data,zt=mt.isInterleavedBuffer===!0?mt.stride:mt.itemSize,ze=$.offset;if(mt.isInstancedInterleavedBuffer||mt.isInstancedBufferAttribute){for(let Nt=0;Nt<W.locationSize;Nt++)f(W.location+Nt,mt.meshPerAttribute);N.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let Nt=0;Nt<W.locationSize;Nt++)g(W.location+Nt);e.bindBuffer(e.ARRAY_BUFFER,Z);for(let Nt=0;Nt<W.locationSize;Nt++)y(W.location+Nt,St/W.locationSize,pt,tt,zt*yt,(ze+St/W.locationSize*Nt)*yt,At)}else{if($.isInstancedBufferAttribute){for(let mt=0;mt<W.locationSize;mt++)f(W.location+mt,$.meshPerAttribute);N.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let mt=0;mt<W.locationSize;mt++)g(W.location+mt);e.bindBuffer(e.ARRAY_BUFFER,Z);for(let mt=0;mt<W.locationSize;mt++)y(W.location+mt,St/W.locationSize,pt,tt,St*yt,St/W.locationSize*mt*yt,At)}}else if(F!==void 0){let tt=F[et];if(tt!==void 0)switch(tt.length){case 2:e.vertexAttrib2fv(W.location,tt);break;case 3:e.vertexAttrib3fv(W.location,tt);break;case 4:e.vertexAttrib4fv(W.location,tt);break;default:e.vertexAttrib1fv(W.location,tt)}}}}m()}function E(){I();for(let N in i){let O=i[N];for(let G in O){let L=O[G];for(let k in L){let X=L[k];for(let F in X)h(X[F].object),delete X[F];delete L[k]}}delete i[N]}}function A(N){if(i[N.id]===void 0)return;let O=i[N.id];for(let G in O){let L=O[G];for(let k in L){let X=L[k];for(let F in X)h(X[F].object),delete X[F];delete L[k]}}delete i[N.id]}function v(N){for(let O in i){let G=i[O];for(let L in G){let k=G[L];if(k[N.id]===void 0)continue;let X=k[N.id];for(let F in X)h(X[F].object),delete X[F];delete k[N.id]}}}function T(N){for(let O in i){let G=i[O],L=N.isInstancedMesh===!0?N.id:0,k=G[L];if(k!==void 0){for(let X in k){let F=k[X];for(let et in F)h(F[et].object),delete F[et];delete k[X]}delete G[L],Object.keys(G).length===0&&delete i[O]}}}function I(){R(),r=!0,a!==s&&(a=s,c(a.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:I,resetDefaultState:R,dispose:E,releaseStatesOfGeometry:A,releaseStatesOfObject:T,releaseStatesOfProgram:v,initAttributes:S,enableAttribute:g,disableUnusedAttributes:m}}function w2(e,t,n){let i;function s(l){i=l}function a(l,c){e.drawArrays(i,l,c),n.update(c,i,1)}function r(l,c,h){h!==0&&(e.drawArraysInstanced(i,l,c,h),n.update(c,i,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let d=0;d<h;d++)u+=c[d];n.update(u,i,1)}this.setMode=s,this.render=a,this.renderInstances=r,this.renderMultiDraw=o}function R2(e,t,n,i){let s;function a(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let v=t.get("EXT_texture_filter_anisotropic");s=e.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(v){return!(v!==ki&&i.convert(v)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(v){let T=v===Vi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(v!==Qn&&v!==Gi&&!T&&i.convert(v)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function l(v){if(v==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp",h=l(c);h!==c&&(Ut("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let p=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=n.logarithmicDepthBuffer===!0&&p===!1;n.reversedDepthBuffer===!0&&p===!1&&Ut("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),n.logarithmicDepthBuffer===!0&&p===!0&&Ut("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),_=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),f=e.getParameter(e.MAX_VERTEX_ATTRIBS),m=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),x=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),E=e.getParameter(e.MAX_SAMPLES),A=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:p,maxTextures:d,maxVertexTextures:_,maxTextureSize:S,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:m,maxVaryings:y,maxFragmentUniforms:x,maxSamples:E,samples:A}}function C2(e){let t=this,n=null,i=0,s=!1,a=!1,r=new zi,o=new Ft,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,u){let d=p.length!==0||u||i!==0||s;return s=u,i=p.length,d},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(p,u){n=h(p,u,0)},this.setState=function(p,u,d){let _=p.clippingPlanes,S=p.clipIntersection,g=p.clipShadows,f=e.get(p);if(!s||_===null||_.length===0||a&&!g)a?h(null):c();else{let m=a?0:i,y=m*4,x=f.clippingState||null;l.value=x,x=h(_,u,y,d);for(let E=0;E!==y;++E)x[E]=n[E];f.clippingState=x,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=m}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(p,u,d,_){let S=p!==null?p.length:0,g=null;if(S!==0){if(g=l.value,_!==!0||g===null){let f=d+S*4,m=u.matrixWorldInverse;o.getNormalMatrix(m),(g===null||g.length<f)&&(g=new Float32Array(f));for(let y=0,x=d;y!==S;++y,x+=4)r.copy(p[y]).applyMatrix4(m,o),r.normal.toArray(g,x),g[x+3]=r.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=S,t.numIntersection=0,g}}var jc=class extends fi{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Dc(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Pa(5,5,5),a=new fs({name:"CubemapFromEquirect",uniforms:Nr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Vn,blending:Ar});a.uniforms.tEquirect.value=n;let r=new $e(s,a),o=n.minFilter;return n.minFilter===Xs&&(n.minFilter=je),new il(1,10,this).update(t,r),n.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,n=!0,i=!0,s=!0){let a=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(n,i,s);t.setRenderTarget(a)}},g1=256,N2=3,D2=20,F1=256,H1=16,L2=3,U2=new H,I2=new Zt,Od=class e{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new il(1,10,null),this._boxMesh=new $e(new Pa(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,n=0,i=.1,s=100,a={}){let{size:r=256,position:o=U2}=a,l=this._renderer;this._setSize(r);let c=this._allocateTarget(),h=this._getSourceTarget(!0);n>0&&(h.texture.mipmapsAutoUpdate=!1);let p=l.autoClear,u=l.autoClearColor,d=l.autoClearDepth,_=l.autoClearStencil,S=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,S===null&&(t.background=l.getClearColor(I2));let g=new il(i,s,h);return g.position.copy(o),g.update(l,t),l.autoClear=p,l.autoClearColor=u,l.autoClearDepth=d,l.autoClearStencil=_,t.background=S,n>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,n)),this._applyPMREM(c),c}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=y1(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=v1(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,n){return n>0?1-Math.sqrt(1-t/n):0}_setSize(t){this._cubeSize=Math.max(g1,h1(t))}_fromTexture(t,n){t.mapping===Rr||t.mapping===rl?this._setSize(t.image.length===0?g1:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let i=n||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(i),i}_allocateTarget(){let t=this._cubeSize,n=_1(t,!1,!1),i=Math.log2(t)-N2;for(let s=0;s<=i;s++)n.texture.mipmaps.push({width:t>>s,height:t>>s});return n.texture.name="PMREM",n.texture.isPMREMTexture=!0,n}_getSourceTarget(t=!1){let n=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==n||t&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=_1(n,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,n,i){let s=this._boxMesh,a=this._cubeCamera;s.material=i,a.renderTarget=t,a.activeMipmapLevel=n;let r=t.width>>n;t.viewport.set(0,0,r,r),a.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let n;t.mapping===Rr||t.mapping===rl?(this._cubemapMaterial===null&&(this._cubemapMaterial=y1()),n=this._cubemapMaterial,n.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=v1()),n=this._equirectMaterial),n.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,n)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=O2(),this._integrationMaterial=P2());let n=this._cubeSize,i=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let a=this._integrationMaterial.uniforms;a.envMap.value=this._sourceTarget.texture,a.sourceLod.value=Math.log2(n/H1);for(let r=0;r<=i;r++){let o=e.lodToRoughness(r,i);if(r>i-L2)a.roughness.value=o,this._renderCube(t,r,this._integrationMaterial);else{let l=o>0?Math.log2(n)+.5*Math.log2(6/(F1*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(t,r,this._ggxMaterial)}}}_blur(t,n){this._blurMaterial===null&&(this._blurMaterial=B2());let i=this._blurMaterial,s=i.uniforms,a=this._sourceTarget;s.sigma.value=Math.min(n,Math.PI)/Math.SQRT2,s.envMap.value=a.texture,this._renderCube(t,0,i),s.envMap.value=t.texture,this._renderCube(a,0,i)}};function _1(e,t,n){return new jc(e,{minFilter:Xs,generateMipmaps:t,type:Vi,colorSpace:Mc,depthBuffer:n})}function $c(e,t,n){return new fs({name:e,uniforms:t,vertexShader:Jt.cube_vert,fragmentShader:n,side:Vn,blending:Ar,depthTest:!1,depthWrite:!1})}function O2(){return $c("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${F1}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function P2(){return $c("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:H1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function B2(){return $c("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${D2}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function v1(){return $c("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function y1(){return $c("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function z2(e){let t=new WeakMap,n=new WeakMap,i=null;function s(u,d=!1){return u==null?null:d?r(u):a(u)}function a(u){if(u&&u.isTexture){let d=u.mapping;if(d===Yf||d===Zf)if(t.has(u)){let _=t.get(u).texture;return o(_,u.mapping)}else{let _=u.image;if(_&&_.height>0){let S=new jc(_.height);return S.fromEquirectangularTexture(e,u),t.set(u,S),u.addEventListener("dispose",c),o(S.texture,u.mapping)}else return null}}return u}function r(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let d=u.mapping,_=d===Yf||d===Zf,S=d===Rr||d===rl;if(_||S){let g=n.get(u),f=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==f)return i===null&&(i=new Od(e)),g=_?i.fromEquirectangular(u,g):i.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,n.set(u,g),g.texture;if(g!==void 0)return g.texture;{let m=u.image;return _&&m&&m.height>0||S&&m&&l(m)?(i===null&&(i=new Od(e)),g=_?i.fromEquirectangular(u):i.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,n.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function o(u,d){return d===Yf?u.mapping=Rr:d===Zf&&(u.mapping=rl),u}function l(u){let d=0,_=6;for(let S=0;S<_;S++)u[S]!==void 0&&d++;return d===_}function c(u){let d=u.target;d.removeEventListener("dispose",c);let _=t.get(d);_!==void 0&&(t.delete(d),_.dispose())}function h(u){let d=u.target;d.removeEventListener("dispose",h);let _=n.get(d);_!==void 0&&(n.delete(d),_.dispose())}function p(){t=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:p}}function F2(e){let t={};function n(i){if(t[i]!==void 0)return t[i];let s=e.getExtension(i);return t[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let s=n(i);return s===null&&xc("WebGLRenderer: "+i+" extension not supported."),s}}}function H2(e,t,n,i){let s={},a=new WeakMap,r=new FinalizationRegistry(_=>delete s[_]);function o(_){l(_.target)}function l(_){_.index!==null&&t.remove(_.index);for(let g in _.attributes)t.remove(_.attributes[g]);_.removeEventListener("dispose",o),delete s[_.id],r.unregister(_);let S=a.get(_);S&&(t.remove(S),a.delete(_)),i.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,n.memory.geometries--}function c(_,S){return s[S.id]!==void 0||(S.addEventListener("dispose",o),s[S.id]=new WeakRef(S),r.register(S,S.id,S),n.memory.geometries++),S}function h(_){let S=_.attributes;for(let g in S)t.update(S[g],e.ARRAY_BUFFER)}function p(_){let S=_.index,g=_.attributes.position,f=0;if(g===void 0)return;let m=S!==null?S.array.length:g.array.length/3-1,y=g.count>=65535?Cc:Rc,x=new y(Math.ceil(m/3)*6,1),E=x.array;if(S!==null){let v=S.array;f=S.version;for(let T=0,I=0;T<m;T+=3){let R=v[T+0],N=v[T+1],O=v[T+2];E[I++]=R,E[I++]=N,E[I++]=N,E[I++]=O,E[I++]=O,E[I++]=R}}else{f=g.version;for(let v=0,T=0;v<m;v+=3){let I=v+0,R=v+1,N=v+2;E[T++]=I,E[T++]=R,E[T++]=R,E[T++]=N,E[T++]=N,E[T++]=I}}x.version=f;let A=a.get(_);A&&t.remove(A),a.set(_,x)}function u(_){let S=a.get(_);if(S){let g=_.index;g!==null&&S.version<g.version&&p(_)}else p(_);return a.get(_)}function d(){for(let _ in s){let S=s[_].deref();S!==void 0&&l(S)}}return{get:c,update:h,getWireframeAttribute:u,dispose:d}}function G2(e,t,n){let i;function s(p){i=p}let a,r;function o(p){a=p.type,r=p.bytesPerElement}function l(p,u){e.drawElements(i,u,a,p*r),n.update(u,i,1)}function c(p,u,d){d!==0&&(e.drawElementsInstanced(i,u,a,p*r,d),n.update(u,i,d))}function h(p,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,a,p,0,d);let S=0;for(let g=0;g<d;g++)S+=u[g];n.update(S,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function V2(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,r,o){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=o*(a/3);break;case e.LINES:n.lines+=o*(a/2);break;case e.LINE_STRIP:n.lines+=o*(a-1);break;case e.LINE_LOOP:n.lines+=o*a;break;case e.POINTS:n.points+=o*a;break;default:Ot("WebGLInfo: Unknown draw mode:",r);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:s,update:i}}function k2(e,t,n){let i=new WeakMap,s=new Be;function a(r,o,l){let c=r.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=h!==void 0?h.length:0,u=i.get(o);if(u===void 0||u.count!==p){let I=function(){v.dispose(),i.delete(o),o.removeEventListener("dispose",I)};u!==void 0&&u.texture.dispose();let d=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,S=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],m=o.morphAttributes.color||[],y=0;d===!0&&(y=1),_===!0&&(y=2),S===!0&&(y=3);let x=o.attributes.position.count*y,E=1;x>t.maxTextureSize&&(E=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let A=new Float32Array(x*E*4*p),v=new Ec(A,x,E,p);v.type=Gi,v.needsUpdate=!0;let T=y*4;for(let R=0;R<p;R++){let N=g[R],O=f[R],G=m[R],L=x*E*4*R;for(let k=0;k<N.count;k++){let X=k*T;d===!0&&(s.fromBufferAttribute(N,k),A[L+X+0]=s.x,A[L+X+1]=s.y,A[L+X+2]=s.z,A[L+X+3]=0),_===!0&&(s.fromBufferAttribute(O,k),A[L+X+4]=s.x,A[L+X+5]=s.y,A[L+X+6]=s.z,A[L+X+7]=0),S===!0&&(s.fromBufferAttribute(G,k),A[L+X+8]=s.x,A[L+X+9]=s.y,A[L+X+10]=s.z,A[L+X+11]=G.itemSize===4?s.w:1)}}u={count:p,texture:v,size:new ne(x,E)},i.set(o,u),o.addEventListener("dispose",I)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",r.morphTexture,n);else{let d=0;for(let S=0;S<c.length;S++)d+=c[S];let _=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(e,"morphTargetBaseInfluence",_),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",u.texture,n),l.getUniforms().setValue(e,"morphTargetsTextureSize",u.size)}return{update:a}}function X2(e,t,n,i,s){let a=new WeakMap;function r(c){let h=s.render.frame,p=c.geometry,u=t.get(c,p);if(a.get(u)!==h&&(t.update(u),a.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),a.get(c)!==h&&(n.update(c.instanceMatrix,e.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,e.ARRAY_BUFFER),a.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;a.get(d)!==h&&(d.update(),a.set(d,h))}return u}function o(){a=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),n.remove(h.instanceMatrix),h.instanceColor!==null&&n.remove(h.instanceColor)}return{update:r,dispose:o}}var W2={[I0]:"LINEAR_TONE_MAPPING",[O0]:"REINHARD_TONE_MAPPING",[P0]:"CINEON_TONE_MAPPING",[B0]:"ACES_FILMIC_TONE_MAPPING",[F0]:"AGX_TONE_MAPPING",[H0]:"NEUTRAL_TONE_MAPPING",[z0]:"CUSTOM_TONE_MAPPING"};function q2(e,t,n,i,s,a){let r=new fi(t,n,{type:e,depthBuffer:s,stencilBuffer:a,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new Ua;h.setAttribute("position",new wi([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new wi([0,2,0,0,2,0],2));let p=new Lf({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new $e(h,p),d=new zc(-1,1,1,-1,0,1),_=null,S=null,g=!1,f,m=null,y=[],x=!1;this.setSize=function(E,A){r.setSize(E,A),o!==null&&o.setSize(E,A),l!==null&&l.setSize(E,A);for(let v=0;v<y.length;v++){let T=y[v];T.setSize&&T.setSize(E,A)}},this.setEffects=function(E){y=E,x=y.length>0&&y[0].isRenderPass===!0;let A=r.width,v=r.height;y.length>0&&o===null&&(o=new fi(A,v,{type:Vi,depthBuffer:!1,stencilBuffer:!1}),l=new fi(A,v,{type:Vi,depthBuffer:!1,stencilBuffer:!1}));let T=s===!0&&y.some(I=>I.needsDepthTexture===!0);T!==(r.depthTexture!==null)&&(T===!0&&c===null&&(c=new ks(A,v),a===!0&&(c.format=Ws,c.type=Cr)),r.dispose(),r.depthTexture=T?c:null,r.resolveDepthBuffer=T,r.storeMultisampledDepthBuffer=T);for(let I=0;I<y.length;I++){let R=y[I];R.setSize&&R.setSize(A,v),T&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(c)}},this.begin=function(E,A){if(g||E.toneMapping===ds&&y.length===0)return!1;if(m=A,A!==null){let v=A.width,T=A.height;(r.width!==v||r.height!==T)&&this.setSize(v,T)}return x===!1&&E.setRenderTarget(r),f=E.toneMapping,E.toneMapping=ds,!0},this.hasRenderPass=function(){return x},this.end=function(E,A){E.toneMapping=f,g=!0;let v=r,T=o;for(let I=0;I<y.length;I++){let R=y[I];R.enabled!==!1&&(R.render(E,T,v,A),R.needsSwap!==!1&&(v=T,T=T===o?l:o))}if(_!==E.outputColorSpace||S!==E.toneMapping){_=E.outputColorSpace,S=E.toneMapping,p.defines={},re.getTransfer(_)===ve&&(p.defines.SRGB_TRANSFER="");let I=W2[S];I&&(p.defines[I]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=v.texture,E.setRenderTarget(m),E.render(u,d),m=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){r.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),p.dispose()}}var G1=new Gn,V1=new ks(1,1),k1=new Lc(1),X1=new Ec,W1=new Cf,q1=new Dc,x1=[],S1=[],M1=new Float32Array(16),b1=new Float32Array(9),T1=new Float32Array(4);function cl(e,t,n){let i=e[0];if(i<=0||i>0)return e;let s=t*n,a=x1[s];if(a===void 0&&(a=new Float32Array(s),x1[s]=a),t!==0){i.toArray(a,0);for(let r=1,o=0;r!==t;++r)o+=n,e[r].toArray(a,o)}return a}function an(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function rn(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function Bd(e,t){let n=S1[t];n===void 0&&(n=new Int32Array(t),S1[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function Y2(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Z2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(an(n,t))return;e.uniform2fv(this.addr,t),rn(n,t)}}function J2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(an(n,t))return;e.uniform3fv(this.addr,t),rn(n,t)}}function K2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(an(n,t))return;e.uniform4fv(this.addr,t),rn(n,t)}}function Q2(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(an(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),rn(n,t)}else{if(an(n,i))return;T1.set(i),e.uniformMatrix2fv(this.addr,!1,T1),rn(n,i)}}function j2(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(an(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),rn(n,t)}else{if(an(n,i))return;b1.set(i),e.uniformMatrix3fv(this.addr,!1,b1),rn(n,i)}}function $2(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(an(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),rn(n,t)}else{if(an(n,i))return;M1.set(i),e.uniformMatrix4fv(this.addr,!1,M1),rn(n,i)}}function tN(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function eN(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(an(n,t))return;e.uniform2iv(this.addr,t),rn(n,t)}}function nN(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(an(n,t))return;e.uniform3iv(this.addr,t),rn(n,t)}}function iN(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(an(n,t))return;e.uniform4iv(this.addr,t),rn(n,t)}}function sN(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function aN(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(an(n,t))return;e.uniform2uiv(this.addr,t),rn(n,t)}}function rN(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(an(n,t))return;e.uniform3uiv(this.addr,t),rn(n,t)}}function oN(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(an(n,t))return;e.uniform4uiv(this.addr,t),rn(n,t)}}function zd(e){return e.version===0&&(e.compareFunction=Q0,e.needsUpdate=!0),e}function lN(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s);let a;this.type===e.SAMPLER_2D_SHADOW?a=zd(V1):a=G1,n.setTexture2D(t||a,s)}function cN(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(t||W1,s)}function uN(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s);let a;this.type===e.SAMPLER_CUBE_SHADOW?a=zd(k1):a=q1,n.setTextureCube(t||a,s)}function hN(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(t||X1,s)}function fN(e){switch(e){case 5126:return Y2;case 35664:return Z2;case 35665:return J2;case 35666:return K2;case 35674:return Q2;case 35675:return j2;case 35676:return $2;case 5124:case 35670:return tN;case 35667:case 35671:return eN;case 35668:case 35672:return nN;case 35669:case 35673:return iN;case 5125:return sN;case 36294:return aN;case 36295:return rN;case 36296:return oN;case 35678:case 36198:case 36298:case 36306:case 35682:return lN;case 35679:case 36299:case 36307:return cN;case 35680:case 36300:case 36308:case 36293:return uN;case 36289:case 36303:case 36311:case 36292:return hN}}function dN(e,t){e.uniform1fv(this.addr,t)}function pN(e,t){let n=cl(t,this.size,2);e.uniform2fv(this.addr,n)}function mN(e,t){let n=cl(t,this.size,3);e.uniform3fv(this.addr,n)}function gN(e,t){let n=cl(t,this.size,4);e.uniform4fv(this.addr,n)}function _N(e,t){let n=cl(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function vN(e,t){let n=cl(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function yN(e,t){let n=cl(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function xN(e,t){e.uniform1iv(this.addr,t)}function SN(e,t){e.uniform2iv(this.addr,t)}function MN(e,t){e.uniform3iv(this.addr,t)}function bN(e,t){e.uniform4iv(this.addr,t)}function TN(e,t){e.uniform1uiv(this.addr,t)}function EN(e,t){e.uniform2uiv(this.addr,t)}function AN(e,t){e.uniform3uiv(this.addr,t)}function wN(e,t){e.uniform4uiv(this.addr,t)}function RN(e,t,n){let i=this.cache,s=t.length,a=Bd(n,s);an(i,a)||(e.uniform1iv(this.addr,a),rn(i,a));let r;this.type===e.SAMPLER_2D_SHADOW?r=zd(V1):r=G1;for(let o=0;o!==s;++o)n.setTexture2D(t[o]||r,a[o])}function CN(e,t,n){let i=this.cache,s=t.length,a=Bd(n,s);an(i,a)||(e.uniform1iv(this.addr,a),rn(i,a));for(let r=0;r!==s;++r)n.setTexture3D(t[r]||W1,a[r])}function NN(e,t,n){let i=this.cache,s=t.length,a=Bd(n,s);an(i,a)||(e.uniform1iv(this.addr,a),rn(i,a));let r;this.type===e.SAMPLER_CUBE_SHADOW?r=zd(k1):r=q1;for(let o=0;o!==s;++o)n.setTextureCube(t[o]||r,a[o])}function DN(e,t,n){let i=this.cache,s=t.length,a=Bd(n,s);an(i,a)||(e.uniform1iv(this.addr,a),rn(i,a));for(let r=0;r!==s;++r)n.setTexture2DArray(t[r]||X1,a[r])}function LN(e){switch(e){case 5126:return dN;case 35664:return pN;case 35665:return mN;case 35666:return gN;case 35674:return _N;case 35675:return vN;case 35676:return yN;case 5124:case 35670:return xN;case 35667:case 35671:return SN;case 35668:case 35672:return MN;case 35669:case 35673:return bN;case 5125:return TN;case 36294:return EN;case 36295:return AN;case 36296:return wN;case 35678:case 36198:case 36298:case 36306:case 35682:return RN;case 35679:case 36299:case 36307:return CN;case 35680:case 36300:case 36308:case 36293:return NN;case 36289:case 36303:case 36311:case 36292:return DN}}var o_=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=fN(n.type)}},l_=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=LN(n.type)}},c_=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){let s=this.seq;for(let a=0,r=s.length;a!==r;++a){let o=s[a];o.setValue(t,n[o.id],i)}}},a_=/(\w+)(\])?(\[|\.)?/g;function E1(e,t){e.seq.push(t),e.map[t.id]=t}function UN(e,t,n){let i=e.name,s=i.length;for(a_.lastIndex=0;;){let a=a_.exec(i),r=a_.lastIndex,o=a[1],l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===s){E1(n,c===void 0?new o_(o,e,t):new l_(o,e,t));break}else{let p=n.map[o];p===void 0&&(p=new c_(o),E1(n,p)),n=p}}}var ll=class{constructor(t,n){this.seq=[],this.map={};let i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let o=t.getActiveUniform(n,r),l=t.getUniformLocation(n,o.name);UN(o,l,this)}let s=[],a=[];for(let r of this.seq)r.type===t.SAMPLER_2D_SHADOW||r.type===t.SAMPLER_CUBE_SHADOW||r.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(r):a.push(r);s.length>0&&(this.seq=s.concat(a))}setValue(t,n,i,s){let a=this.map[n];a!==void 0&&a.setValue(t,i,s)}setOptional(t,n,i){let s=n[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,n,i,s){for(let a=0,r=n.length;a!==r;++a){let o=n[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,n){let i=[];for(let s=0,a=t.length;s!==a;++s){let r=t[s];r.id in n&&i.push(r)}return i}};function A1(e,t,n){let i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}var IN=37297,ON=0;function PN(e,t){let n=e.split(`
`),i=[],s=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let r=s;r<a;r++){let o=r+1;i.push(`${o===t?">":" "} ${o}: ${n[r]}`)}return i.join(`
`)}var w1=new Ft;function BN(e){re._getMatrix(w1,re.workingColorSpace,e);let t=`mat3( ${w1.elements.map(n=>n.toFixed(4))} )`;switch(re.getTransfer(e)){case bc:return[t,"LinearTransferOETF"];case ve:return[t,"sRGBTransferOETF"];default:return Ut("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function R1(e,t,n){let i=e.getShaderParameter(t,e.COMPILE_STATUS),a=(e.getShaderInfoLog(t)||"").trim();if(i&&a==="")return"";let r=/ERROR: 0:(\d+)/.exec(a);if(r){let o=parseInt(r[1]);return n.toUpperCase()+`

`+a+`

`+PN(e.getShaderSource(t),o)}else return a}function zN(e,t){let n=BN(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var FN={[I0]:"Linear",[O0]:"Reinhard",[P0]:"Cineon",[B0]:"ACESFilmic",[F0]:"AgX",[H0]:"Neutral",[z0]:"Custom"};function HN(e,t){let n=FN[t];return n===void 0?(Ut("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var Id=new H;function GN(){re.getLuminanceCoefficients(Id);let e=Id.x.toFixed(4),t=Id.y.toFixed(4),n=Id.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function VN(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qc).join(`
`)}function kN(e){let t=[];for(let n in e){let i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function XN(e,t){let n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let a=e.getActiveAttrib(t,s),r=a.name,o=1;a.type===e.FLOAT_MAT2&&(o=2),a.type===e.FLOAT_MAT3&&(o=3),a.type===e.FLOAT_MAT4&&(o=4),n[r]={type:a.type,location:e.getAttribLocation(t,r),locationSize:o}}return n}function Qc(e){return e!==""}function C1(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function N1(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var WN=/^[ \t]*#include +<([\w\d./]+)>/gm;function u_(e){return e.replace(WN,qN)}function qN(e,t){let n=Jt[t];if(n===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return u_(n)}var YN=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function D1(e){return e.replace(YN,ZN)}function ZN(e,t,n,i){let s="";for(let a=parseInt(t);a<parseInt(n);a++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function L1(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var JN={[Gc]:"SHADOWMAP_TYPE_PCF",[sl]:"SHADOWMAP_TYPE_VSM"};function KN(e){return JN[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var QN={[rl]:"ENVMAP_MODE_REFRACTION"};function jN(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":QN[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}var $N={[U0]:"ENVMAP_BLENDING_MULTIPLY",[Jb]:"ENVMAP_BLENDING_MIX",[Kb]:"ENVMAP_BLENDING_ADD"};function tD(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":$N[e.combine]||"ENVMAP_BLENDING_NONE"}function eD(e,t,n,i){let s=e.getContext(),a=n.defines,r=n.vertexShader,o=n.fragmentShader,l=KN(n),c=n.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=jN(n),p=tD(n),u=VN(n),d=kN(a),_=s.createProgram(),S,g,f=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,d].filter(Qc).join(`
`),S.length>0&&(S+=`
`),g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,d].filter(Qc).join(`
`),g.length>0&&(g+=`
`)):(S=[L1(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,d,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+n.diffuseRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qc).join(`
`),g=[L1(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,d,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+p:"",n.envMapPMREM?"#define ENVMAP_MAX_LOD "+n.envMapMaxLod+".0":"",n.envMapPMREM?"#define ENVMAP_SIZE "+n.envMapSize+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",n.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ds?"#define TONE_MAPPING":"",n.toneMapping!==ds?Jt.tonemapping_pars_fragment:"",n.toneMapping!==ds?HN("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Jt.colorspace_pars_fragment,zN("linearToOutputTexel",n.outputColorSpace),GN(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Qc).join(`
`)),r=u_(r),r=C1(r,n),r=N1(r,n),o=u_(o),o=C1(o,n),o=N1(o,n),r=D1(r),o=D1(o),n.isRawShaderMaterial!==!0&&(f=`#version 300 es
`,S=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,g=["#define varying in",n.glslVersion===j0?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===j0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let m=f+S+r,y=f+g+o,x=A1(s,s.VERTEX_SHADER,m),E=A1(s,s.FRAGMENT_SHADER,y);s.attachShader(_,x),s.attachShader(_,E),n.index0AttributeName!==void 0?s.bindAttribLocation(_,0,n.index0AttributeName):n.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function A(R){if(e.debug.checkShaderErrors){let N=s.getProgramInfoLog(_)||"",O=s.getShaderInfoLog(x)||"",G=s.getShaderInfoLog(E)||"",L=N.trim(),k=O.trim(),X=G.trim(),F=!0,et=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(F=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(s,_,x,E);else{let W=R1(s,x,"vertex"),$=R1(s,E,"fragment");Ot("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+L+`
`+W+`
`+$)}else L!==""?Ut("WebGLProgram: Program Info Log:",L):(k===""||X==="")&&(et=!1);et&&(R.diagnostics={runnable:F,programLog:L,vertexShader:{log:k,prefix:S},fragmentShader:{log:X,prefix:g}})}s.deleteShader(x),s.deleteShader(E),v=new ll(s,_),T=XN(s,_)}let v;this.getUniforms=function(){return v===void 0&&A(this),v};let T;this.getAttributes=function(){return T===void 0&&A(this),T};let I=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(_,IN)),I},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=ON++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=x,this.fragmentShader=E,this}var nD=0,h_=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,n,i){let s=this._getShaderCacheForMaterial(t);return s.has(n)===!1&&(s.add(n),n.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let n=this.materialCache.get(t);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let n=this.materialCache,i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){let n=this.shaderCache,i=n.get(t);return i===void 0&&(i=new f_(t),n.set(t,i)),i}},f_=class{constructor(t){this.id=nD++,this.code=t,this.usedTimes=0}};function iD(e){return e===Ga||e===Yc||e===Zc}function sD(e,t,n,i,s,a){let r=new $o,o=new h_,l=new Set,c=[],h=new Map,p=i.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(v){return l.add(v),v===0?"uv":`uv${v}`}function _(v,T,I,R,N,O){let G=R.fog,L=N.geometry,k=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?R.environment:null,X=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,F=t.get(v.envMap||k,X),et=u[v.type],W=i.precision;v.precision!==null&&(W=i.getMaxPrecision(v.precision),W!==v.precision&&Ut("WebGLProgram.getParameters:",v.precision,"not supported, using",W,"instead."));let $=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,tt=$!==void 0?$.length:0,St=0;L.morphAttributes.position!==void 0&&(St=1),L.morphAttributes.normal!==void 0&&(St=2),L.morphAttributes.color!==void 0&&(St=3);let Pt,Z,pt,yt;if(et){let gt=ms[et];Pt=gt.vertexShader,Z=gt.fragmentShader}else{Pt=v.vertexShader,Z=v.fragmentShader;let gt=o.getVertexShaderStage(v),xe=o.getFragmentShaderStage(v);o.update(v,gt,xe),pt=gt.id,yt=xe.id}let At=e.getRenderTarget(),mt=e.state.buffers.depth.getReversed(),zt=N.isInstancedMesh===!0,ze=N.isBatchedMesh===!0,Nt=!!v.map,fe=!!v.matcap,ge=!!F,Kt=ge&&F.isPMREMTexture===!0,qe=!!v.aoMap,Fe=!!v.lightMap,mn=!!v.bumpMap&&v.wireframe===!1,dt=!!v.normalMap,Wt=!!v.displacementMap,Ht=!!v.emissiveMap,le=!!v.metalnessMap,ye=!!v.roughnessMap,Rt=v.anisotropy>0,D=v.clearcoat>0,Qt=v.diffuseRoughness>0,Bt=v.dispersion>0,jt=v.retroreflectivity>0,st=v.iridescence>0,tn=v.sheen>0,Lt=v.transmission>0,Gt=Rt&&!!v.anisotropyMap,w=D&&!!v.clearcoatMap,M=D&&!!v.clearcoatNormalMap,B=D&&!!v.clearcoatRoughnessMap,nt=Qt&&!!v.diffuseRoughnessMap,j=st&&!!v.iridescenceMap,rt=st&&!!v.iridescenceThicknessMap,ht=tn&&!!v.sheenColorMap,Y=tn&&!!v.sheenRoughnessMap,J=!!v.specularMap,lt=!!v.specularColorMap,C=!!v.specularIntensityMap,K=Lt&&!!v.transmissionMap,q=Lt&&!!v.thicknessMap,ct=!!v.gradientMap,at=!!v.alphaMap,ot=v.alphaTest>0,Et=!!v.alphaHash,Yt=!!v.extensions,it=ds;v.toneMapped&&(At===null||At.isXRRenderTarget===!0)&&(it=e.toneMapping);let Ct=Kt?F.isCompressedCubeTexture?F.image[0].mipmaps:F.mipmaps:null,qt={shaderID:et,shaderType:v.type,shaderName:v.name,vertexShader:Pt,fragmentShader:Z,defines:v.defines,customVertexShaderID:pt,customFragmentShaderID:yt,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:W,batching:ze,batchingColor:ze&&N._colorsTexture!==null,instancing:zt,instancingColor:zt&&N.instanceColor!==null,instancingMorph:zt&&N.morphTexture!==null,outputColorSpace:At===null?e.outputColorSpace:At.isXRRenderTarget===!0?At.texture.colorSpace:re.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Nt,matcap:fe,envMap:ge,envMapMode:ge&&F.mapping,envMapPMREM:Kt,envMapMaxLod:Kt?Ct.length-1:null,envMapSize:Kt?Ct[0].width:null,aoMap:qe,lightMap:Fe,bumpMap:mn,normalMap:dt,displacementMap:Wt,emissiveMap:Ht,normalMapObjectSpace:dt&&v.normalMapType===$b,normalMapTangentSpace:dt&&v.normalMapType===Ld,packedNormalMap:dt&&v.normalMapType===Ld&&iD(v.normalMap.format),metalnessMap:le,roughnessMap:ye,anisotropy:Rt,anisotropyMap:Gt,clearcoat:D,clearcoatMap:w,clearcoatNormalMap:M,clearcoatRoughnessMap:B,diffuseRoughness:Qt,diffuseRoughnessMap:nt,dispersion:Bt,retroreflection:jt,iridescence:st,iridescenceMap:j,iridescenceThicknessMap:rt,sheen:tn,sheenColorMap:ht,sheenRoughnessMap:Y,specularMap:J,specularColorMap:lt,specularIntensityMap:C,transmission:Lt,transmissionMap:K,thicknessMap:q,gradientMap:ct,opaque:v.transparent===!1&&v.blending===al&&v.alphaToCoverage===!1,alphaMap:at,alphaTest:ot,alphaHash:Et,combine:v.combine,mapUv:Nt&&d(v.map.channel),aoMapUv:qe&&d(v.aoMap.channel),lightMapUv:Fe&&d(v.lightMap.channel),bumpMapUv:mn&&d(v.bumpMap.channel),normalMapUv:dt&&d(v.normalMap.channel),displacementMapUv:Wt&&d(v.displacementMap.channel),emissiveMapUv:Ht&&d(v.emissiveMap.channel),metalnessMapUv:le&&d(v.metalnessMap.channel),roughnessMapUv:ye&&d(v.roughnessMap.channel),anisotropyMapUv:Gt&&d(v.anisotropyMap.channel),clearcoatMapUv:w&&d(v.clearcoatMap.channel),clearcoatNormalMapUv:M&&d(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:B&&d(v.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:nt&&d(v.diffuseRoughnessMap.channel),iridescenceMapUv:j&&d(v.iridescenceMap.channel),iridescenceThicknessMapUv:rt&&d(v.iridescenceThicknessMap.channel),sheenColorMapUv:ht&&d(v.sheenColorMap.channel),sheenRoughnessMapUv:Y&&d(v.sheenRoughnessMap.channel),specularMapUv:J&&d(v.specularMap.channel),specularColorMapUv:lt&&d(v.specularColorMap.channel),specularIntensityMapUv:C&&d(v.specularIntensityMap.channel),transmissionMapUv:K&&d(v.transmissionMap.channel),thicknessMapUv:q&&d(v.thicknessMap.channel),alphaMapUv:at&&d(v.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(dt||Rt),vertexNormals:!!L.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!L.attributes.uv&&(Nt||at),fog:!!G,useFog:v.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||L.attributes.normal===void 0&&dt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:mt,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:tt,morphTextureStride:St,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:O.filter(gt=>gt.texture!==null).length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:e.shadowMap.enabled&&I.length>0,shadowMapType:e.shadowMap.type,toneMapping:it,decodeVideoTexture:Nt&&v.map.isVideoTexture===!0&&re.getTransfer(v.map.colorSpace)===ve,decodeVideoTextureEmissive:Ht&&v.emissiveMap.isVideoTexture===!0&&re.getTransfer(v.emissiveMap.colorSpace)===ve,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===pi,flipSided:v.side===Vn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Yt&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Yt&&v.extensions.multiDraw===!0||ze)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return qt.vertexUv1s=l.has(1),qt.vertexUv2s=l.has(2),qt.vertexUv3s=l.has(3),l.clear(),qt}function S(v){let T=[];if(v.shaderID?T.push(v.shaderID):(T.push(v.customVertexShaderID),T.push(v.customFragmentShaderID)),v.defines!==void 0)for(let I in v.defines)T.push(I),T.push(v.defines[I]);return v.isRawShaderMaterial===!1&&(g(T,v),f(T,v),T.push(e.outputColorSpace)),T.push(v.customProgramCacheKey),T.join()}function g(v,T){v.push(T.precision),v.push(T.outputColorSpace),v.push(T.envMapMode),v.push(T.envMapPMREM),v.push(T.envMapMaxLod),v.push(T.envMapSize),v.push(T.mapUv),v.push(T.alphaMapUv),v.push(T.lightMapUv),v.push(T.aoMapUv),v.push(T.bumpMapUv),v.push(T.normalMapUv),v.push(T.displacementMapUv),v.push(T.emissiveMapUv),v.push(T.metalnessMapUv),v.push(T.roughnessMapUv),v.push(T.anisotropyMapUv),v.push(T.clearcoatMapUv),v.push(T.clearcoatNormalMapUv),v.push(T.clearcoatRoughnessMapUv),v.push(T.diffuseRoughnessMapUv),v.push(T.iridescenceMapUv),v.push(T.iridescenceThicknessMapUv),v.push(T.sheenColorMapUv),v.push(T.sheenRoughnessMapUv),v.push(T.specularMapUv),v.push(T.specularColorMapUv),v.push(T.specularIntensityMapUv),v.push(T.transmissionMapUv),v.push(T.thicknessMapUv),v.push(T.combine),v.push(T.fogExp2),v.push(T.sizeAttenuation),v.push(T.morphTargetsCount),v.push(T.numSunLights),v.push(T.numDirLights),v.push(T.numPointLights),v.push(T.numSpotLights),v.push(T.numSpotLightMaps),v.push(T.numHemiLights),v.push(T.numRectAreaLights),v.push(T.numSunLightShadows),v.push(T.numDirLightShadows),v.push(T.numPointLightShadows),v.push(T.numSpotLightShadows),v.push(T.numSpotLightShadowsWithMaps),v.push(T.numLightProbes),v.push(T.numLightProbeGrids),v.push(T.shadowMapType),v.push(T.toneMapping),v.push(T.numClippingPlanes),v.push(T.numClipIntersection),v.push(T.depthPacking)}function f(v,T){r.disableAll(),T.instancing&&r.enable(0),T.instancingColor&&r.enable(1),T.instancingMorph&&r.enable(2),T.matcap&&r.enable(3),T.envMap&&r.enable(4),T.normalMapObjectSpace&&r.enable(5),T.normalMapTangentSpace&&r.enable(6),T.clearcoat&&r.enable(7),T.iridescence&&r.enable(8),T.alphaTest&&r.enable(9),T.vertexColors&&r.enable(10),T.vertexAlphas&&r.enable(11),T.vertexUv1s&&r.enable(12),T.vertexUv2s&&r.enable(13),T.vertexUv3s&&r.enable(14),T.vertexTangents&&r.enable(15),T.anisotropy&&r.enable(16),T.alphaHash&&r.enable(17),T.batching&&r.enable(18),T.dispersion&&r.enable(19),T.retroreflection&&r.enable(24),T.diffuseRoughness&&r.enable(25),T.batchingColor&&r.enable(20),T.gradientMap&&r.enable(21),T.packedNormalMap&&r.enable(22),T.vertexNormals&&r.enable(23),v.push(r.mask),r.disableAll(),T.fog&&r.enable(0),T.useFog&&r.enable(1),T.flatShading&&r.enable(2),T.logarithmicDepthBuffer&&r.enable(3),T.reversedDepthBuffer&&r.enable(4),T.skinning&&r.enable(5),T.morphTargets&&r.enable(6),T.morphNormals&&r.enable(7),T.morphColors&&r.enable(8),T.premultipliedAlpha&&r.enable(9),T.shadowMapEnabled&&r.enable(10),T.doubleSided&&r.enable(11),T.flipSided&&r.enable(12),T.useDepthPacking&&r.enable(13),T.dithering&&r.enable(14),T.transmission&&r.enable(15),T.sheen&&r.enable(16),T.opaque&&r.enable(17),T.pointsUvs&&r.enable(18),T.decodeVideoTexture&&r.enable(19),T.decodeVideoTextureEmissive&&r.enable(20),T.alphaToCoverage&&r.enable(21),T.numLightProbeGrids>0&&r.enable(22),T.hasPositionAttribute&&r.enable(23),v.push(r.mask)}function m(v){let T=u[v.type],I;if(T){let R=ms[T];I=d1.clone(R.uniforms)}else I=v.uniforms;return I}function y(v,T){let I=h.get(T);return I!==void 0?++I.usedTimes:(I=new eD(e,T,v,s),c.push(I),h.set(T,I)),I}function x(v){if(--v.usedTimes===0){let T=c.indexOf(v);c[T]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function E(v){o.remove(v)}function A(){o.dispose()}return{getParameters:_,getProgramCacheKey:S,getUniforms:m,acquireProgram:y,releaseProgram:x,releaseShaderCache:E,programs:c,dispose:A}}function aD(){let e=new WeakMap;function t(r){return e.has(r)}function n(r){let o=e.get(r);return o===void 0&&(o={},e.set(r,o)),o}function i(r){e.delete(r)}function s(r,o,l){e.get(r)[o]=l}function a(){e=new WeakMap}return{has:t,get:n,remove:i,update:s,dispose:a}}function rD(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function U1(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function I1(){let e=[],t=0,n=[],i=[],s=[];function a(){t=0,n.length=0,i.length=0,s.length=0}function r(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function o(u,d,_,S,g,f){let m=e[t];return m===void 0?(m={id:u.id,object:u,geometry:d,material:_,materialVariant:r(u),groupOrder:S,renderOrder:u.renderOrder,z:g,group:f},e[t]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=_,m.materialVariant=r(u),m.groupOrder=S,m.renderOrder=u.renderOrder,m.z=g,m.group=f),t++,m}function l(u,d,_,S,g,f,m){m.reversedDepth===!0&&(g=-g);let y=o(u,d,_,S,g,f);_.transmission>0?i.push(y):_.transparent===!0?s.push(y):n.push(y)}function c(u,d,_,S,g,f){let m=o(u,d,_,S,g,f);_.transmission>0?i.unshift(m):_.transparent===!0?s.unshift(m):n.unshift(m)}function h(u,d){n.length>1&&n.sort(u||rD),i.length>1&&i.sort(d||U1),s.length>1&&s.sort(d||U1)}function p(){for(let u=t,d=e.length;u<d;u++){let _=e[u];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:n,transmissive:i,transparent:s,init:a,push:l,unshift:c,finish:p,sort:h}}function oD(){let e=new WeakMap;function t(i,s){let a=e.get(i),r;return a===void 0?(r=new I1,e.set(i,[r])):s>=a.length?(r=new I1,a.push(r)):r=a[s],r}function n(){e=new WeakMap}return{get:t,dispose:n}}function lD(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"SunLight":case"DirectionalLight":n={direction:new H,color:new Zt};break;case"SpotLight":n={position:new H,direction:new H,color:new Zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new H,color:new Zt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new H,skyColor:new Zt,groundColor:new Zt};break;case"RectAreaLight":n={color:new Zt,position:new H,halfWidth:new H,halfHeight:new H};break}return e[t.id]=n,n}}}function cD(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}var uD=0;function hD(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function fD(e){let t=new lD,n=cD(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new H);let s=new H,a=new Ie,r=new Ie;function o(c){let h=0,p=0,u=0;for(let O=0;O<9;O++)i.probe[O].set(0,0,0);let d=0,_=0,S=0,g=0,f=0,m=0,y=0,x=0,E=0,A=0,v=0,T=0,I=0,R=0;c.sort(hD);for(let O=0,G=c.length;O<G;O++){let L=c[O],k=L.color,X=L.intensity,F=L.distance,et=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Ga?et=L.shadow.map.texture:et=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=k.r*X,p+=k.g*X,u+=k.b*X;else if(L.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(L.sh.coefficients[W],X);R++}else if(L.isSunLight){let W=t.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let $=L.shadow,tt=n.get(L);tt.shadowIntensity=$.intensity,tt.shadowBias=$.bias,tt.shadowNormalBias=$.normalBias,tt.shadowRadius=$.radius,tt.shadowMapSize.copy($.mapSize).multiply($.getFrameExtents()),i.sunShadow[_]=tt,i.sunShadowMap[_]=et;let St=$.getViewportCount();for(let Pt=0;Pt<St;Pt++)i.sunShadowMatrix[S+Pt]=$.getMatrix(Pt),i.sunShadowCascade[S+Pt]=$._cascadeData[Pt];S+=St,_++}i.sun[d]=W,d++}else if(L.isDirectionalLight){let W=t.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let $=L.shadow,tt=n.get(L);tt.shadowIntensity=$.intensity,tt.shadowBias=$.bias,tt.shadowNormalBias=$.normalBias,tt.shadowRadius=$.radius,tt.shadowMapSize=$.mapSize,i.directionalShadow[g]=tt,i.directionalShadowMap[g]=et,i.directionalShadowMatrix[g]=L.shadow.matrix,E++}i.directional[g]=W,g++}else if(L.isSpotLight){let W=t.get(L);W.position.setFromMatrixPosition(L.matrixWorld),W.color.copy(k).multiplyScalar(X),W.distance=F,W.coneCos=Math.cos(L.angle),W.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),W.decay=L.decay,i.spot[m]=W;let $=L.shadow;if(L.map&&(i.spotLightMap[T]=L.map,T++,$.updateMatrices(L),L.castShadow&&I++),i.spotLightMatrix[m]=$.matrix,L.castShadow){let tt=n.get(L);tt.shadowIntensity=$.intensity,tt.shadowBias=$.bias,tt.shadowNormalBias=$.normalBias,tt.shadowRadius=$.radius,tt.shadowMapSize=$.mapSize,i.spotShadow[m]=tt,i.spotShadowMap[m]=et,v++}m++}else if(L.isRectAreaLight){let W=t.get(L);W.color.copy(k).multiplyScalar(X),W.halfWidth.set(L.width*.5,0,0),W.halfHeight.set(0,L.height*.5,0),i.rectArea[y]=W,y++}else if(L.isPointLight){let W=t.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),W.distance=L.distance,W.decay=L.decay,L.castShadow){let $=L.shadow,tt=n.get(L);tt.shadowIntensity=$.intensity,tt.shadowBias=$.bias,tt.shadowNormalBias=$.normalBias,tt.shadowRadius=$.radius,tt.shadowMapSize=$.mapSize,tt.shadowCameraNear=$.camera.near,tt.shadowCameraFar=$.camera.far,i.pointShadow[f]=tt,i.pointShadowMap[f]=et,i.pointShadowMatrix[f]=L.shadow.matrix,A++}i.point[f]=W,f++}else if(L.isHemisphereLight){let W=t.get(L);W.skyColor.copy(L.color).multiplyScalar(X),W.groundColor.copy(L.groundColor).multiplyScalar(X),i.hemi[x]=W,x++}}y>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_t.LTC_FLOAT_1,i.rectAreaLTC2=_t.LTC_FLOAT_2):(i.rectAreaLTC1=_t.LTC_HALF_1,i.rectAreaLTC2=_t.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=p,i.ambient[2]=u;let N=i.hash;(N.sunLength!==d||N.directionalLength!==g||N.pointLength!==f||N.spotLength!==m||N.rectAreaLength!==y||N.hemiLength!==x||N.numSunShadows!==_||N.numDirectionalShadows!==E||N.numPointShadows!==A||N.numSpotShadows!==v||N.numSpotMaps!==T||N.numLightProbes!==R)&&(i.sun.length=d,i.directional.length=g,i.spot.length=m,i.rectArea.length=y,i.point.length=f,i.hemi.length=x,i.sunShadow.length=_,i.sunShadowMap.length=_,i.sunShadowMatrix.length=S,i.sunShadowCascade.length=S,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.directionalShadowMatrix.length=E,i.pointShadow.length=A,i.pointShadowMap.length=A,i.pointShadowMatrix.length=A,i.spotShadow.length=v,i.spotShadowMap.length=v,i.spotLightMatrix.length=v+T-I,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=I,i.numLightProbes=R,N.sunLength=d,N.directionalLength=g,N.pointLength=f,N.spotLength=m,N.rectAreaLength=y,N.hemiLength=x,N.numSunShadows=_,N.numDirectionalShadows=E,N.numPointShadows=A,N.numSpotShadows=v,N.numSpotMaps=T,N.numLightProbes=R,i.version=uD++)}function l(c,h){let p=0,u=0,d=0,_=0,S=0,g=0,f=h.matrixWorldInverse;for(let m=0,y=c.length;m<y;m++){let x=c[m];if(x.isSunLight){let E=i.sun[p];E.direction.setFromMatrixPosition(x.matrixWorld),E.direction.transformDirection(f),p++}else if(x.isDirectionalLight){let E=i.directional[u];E.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(f),u++}else if(x.isSpotLight){let E=i.spot[_];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(f),E.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(f),_++}else if(x.isRectAreaLight){let E=i.rectArea[S];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(f),r.identity(),a.copy(x.matrixWorld),a.premultiply(f),r.extractRotation(a),E.halfWidth.set(x.width*.5,0,0),E.halfHeight.set(0,x.height*.5,0),E.halfWidth.applyMatrix4(r),E.halfHeight.applyMatrix4(r),S++}else if(x.isPointLight){let E=i.point[d];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(f),d++}else if(x.isHemisphereLight){let E=i.hemi[g];E.direction.setFromMatrixPosition(x.matrixWorld),E.direction.transformDirection(f),g++}}}return{setup:o,setupView:l,state:i}}function O1(e){let t=new fD(e),n=[],i=[],s=[];function a(p){h.camera=p,n.length=0,i.length=0,s.length=0}function r(p){p.isLightProbeGrid?s.push(p):n.push(p)}function o(p){i.push(p)}function l(){t.setup(n),s.sort((p,u)=>p.priority-u.priority||p.id-u.id)}function c(p){t.setupView(n,p)}let h={lightsArray:n,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:h,setupLights:l,setupLightsView:c,pushLight:r,pushShadow:o}}function dD(e){let t=new WeakMap;function n(s,a=0){let r=t.get(s),o;return r===void 0?(o=new O1(e),t.set(s,[o])):a>=r.length?(o=new O1(e),r.push(o)):o=r[a],o}function i(){t=new WeakMap}return{get:n,dispose:i}}var pD=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mD=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,gD=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],_D=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],P1=new Ie,Kc=new H,r_=new H;function vD(e,t,n){let i=new Oa,s=new ne,a=new ne,r=new Be,o=new Uf,l=new If,c={},h=n.maxTextureSize,p={[Ha]:Vn,[Vn]:Ha,[pi]:pi},u=new fs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ne},radius:{value:4}},vertexShader:pD,fragmentShader:mD}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let _=new Ua;_.setAttribute("position",new cs(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let S=new $e(_,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gc;let f=this.type;this.render=function(A,v,T){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;this.type===Nb&&(Ut("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Gc);let I=e.getRenderTarget(),R=e.getActiveCubeFace(),N=e.getActiveMipmapLevel(),O=e.state;O.setBlending(Ar),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let G=f!==this.type;G&&v.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(k=>k.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,k=A.length;L<k;L++){let X=A[L],F=X.shadow;if(F===void 0){Ut("WebGLShadowMap:",X,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;s.copy(F.mapSize);let et=F.getFrameExtents();s.multiply(et),a.copy(F.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(a.x=Math.floor(h/et.x),s.x=a.x*et.x,F.mapSize.x=a.x),s.y>h&&(a.y=Math.floor(h/et.y),s.y=a.y*et.y,F.mapSize.y=a.y));let W=e.state.buffers.depth.getReversed();if(F.camera._reversedDepth=W,F.map===null||G===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===sl){if(X.isPointLight){Ut("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new fi(s.x,s.y,{format:Ga,type:Vi,minFilter:je,magFilter:je,generateMipmaps:!1}),F.map.texture.name=X.name+".shadowMap",F.map.depthTexture=new ks(s.x,s.y,Gi),F.map.depthTexture.name=X.name+".shadowMapDepth",F.map.depthTexture.format=Gs,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=pn,F.map.depthTexture.magFilter=pn}else X.isPointLight?(F.map=new jc(s.x),F.map.depthTexture=new Lc(s.x,Hi)):(F.map=new fi(s.x,s.y),F.map.depthTexture=new ks(s.x,s.y,Hi)),F.map.depthTexture.name=X.name+".shadowMap",F.map.depthTexture.format=Gs,this.type===Gc?(F.map.depthTexture.compareFunction=W?K0:J0,F.map.depthTexture.minFilter=je,F.map.depthTexture.magFilter=je):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=pn,F.map.depthTexture.magFilter=pn);F.camera.updateProjectionMatrix()}F.map.isWebGLCubeRenderTarget!==!0&&(F.map.width!==s.x||F.map.height!==s.y)&&F.map.setSize(s.x,s.y);let $=F.map.isWebGLCubeRenderTarget?6:F.getViewportCount();X.isPointLight!==!0&&F.updateMatrices(X,T);let tt=(F.camera.layers.mask&4294967294)!==0?F.camera.layers:T.layers;for(let St=0;St<$;St++){let Pt=F.getCamera(St);if(X.isPointLight){let Z=F.camera,pt=F.matrix,yt=X.distance||Z.far;yt!==Z.far&&(Z.far=yt,Z.updateProjectionMatrix()),Kc.setFromMatrixPosition(X.matrixWorld),Z.position.copy(Kc),r_.copy(Z.position),r_.add(gD[St]),Z.up.copy(_D[St]),Z.lookAt(r_),Z.updateMatrixWorld(),pt.makeTranslation(-Kc.x,-Kc.y,-Kc.z),P1.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),F._frustum.setFromProjectionMatrix(P1,Z.coordinateSystem,Z.reversedDepth)}if(F.map.isWebGLCubeRenderTarget)e.setRenderTarget(F.map,St),e.clear();else{St===0&&(e.setRenderTarget(F.map),e.clear());let Z=F.getViewport(St);r.set(a.x*Z.x,a.y*Z.y,a.x*Z.z,a.y*Z.w),O.viewport(r)}i=F.getFrustum(St),x(v,T,Pt,X,tt,this.type)}F.isPointLightShadow!==!0&&this.type===sl&&m(F,T),F.needsUpdate=!1}f=this.type,g.needsUpdate=!1,e.setRenderTarget(I,R,N)};function m(A,v){let T=t.update(S);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null?A.mapPass=new fi(s.x,s.y,{format:Ga,type:Vi}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),u.uniforms.shadow_pass.value=A.map.depthTexture,u.uniforms.resolution.value.set(A.map.width,A.map.height),u.uniforms.radius.value=A.radius,e.setRenderTarget(A.mapPass),e.clear(),e.renderBufferDirect(v,null,T,u,S,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value.set(A.map.width,A.map.height),d.uniforms.radius.value=A.radius,e.setRenderTarget(A.map),e.clear(),e.renderBufferDirect(v,null,T,d,S,null)}function y(A,v,T,I){let R=null,N=T.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(N!==void 0)R=N;else if(R=T.isPointLight===!0?l:o,e.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0||v.alphaToCoverage===!0){let O=R.uuid,G=v.uuid,L=c[O];L===void 0&&(L={},c[O]=L);let k=L[G];k===void 0&&(k=R.clone(),L[G]=k,v.addEventListener("dispose",E)),R=k}if(R.visible=v.visible,R.wireframe=v.wireframe,I===sl?R.side=v.shadowSide!==null?v.shadowSide:v.side:R.side=v.shadowSide!==null?v.shadowSide:p[v.side],R.alphaMap=v.alphaMap,R.alphaTest=v.alphaToCoverage===!0?.5:v.alphaTest,R.map=v.map,R.clipShadows=v.clipShadows,R.clippingPlanes=v.clippingPlanes,R.clipIntersection=v.clipIntersection,R.displacementMap=v.displacementMap,R.displacementScale=v.displacementScale,R.displacementBias=v.displacementBias,R.wireframeLinewidth=v.wireframeLinewidth,R.linewidth=v.linewidth,T.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let O=e.properties.get(R);O.light=T}return R}function x(A,v,T,I,R,N){if(A.visible===!1)return;if(A.layers.test(R)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&N===sl)&&(!A.frustumCulled||A.intersectsFrustum(i))){A.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,A.matrixWorld);let L=t.update(A),k=A.material;if(Array.isArray(k)){let X=L.groups;for(let F=0,et=X.length;F<et;F++){let W=X[F],$=k[W.materialIndex];if($&&$.visible){let tt=y(A,$,I,N);A.onBeforeShadow(e,A,v,T,L,tt,W),e.renderBufferDirect(T,null,L,tt,A,W),A.onAfterShadow(e,A,v,T,L,tt,W)}}}else if(k.visible){let X=y(A,k,I,N);A.onBeforeShadow(e,A,v,T,L,X,null),e.renderBufferDirect(T,null,L,X,A,null),A.onAfterShadow(e,A,v,T,L,X,null)}}let G=A.children;for(let L=0,k=G.length;L<k;L++)x(G[L],v,T,I,R,N)}function E(A){A.target.removeEventListener("dispose",E);for(let T in c){let I=c[T],R=A.target.uuid;R in I&&(I[R].dispose(),delete I[R])}}}function yD(e,t){function n(){let C=!1,K=new Be,q=null,ct=new Be(0,0,0,0);return{setMask:function(at){q!==at&&!C&&(e.colorMask(at,at,at,at),q=at)},setLocked:function(at){C=at},setClear:function(at,ot,Et,Yt,it){it===!0&&(at*=Yt,ot*=Yt,Et*=Yt),K.set(at,ot,Et,Yt),ct.equals(K)===!1&&(e.clearColor(at,ot,Et,Yt),ct.copy(K))},reset:function(){C=!1,q=null,ct.set(-1,0,0,0)}}}function i(){let C=!1,K=!1,q=null,ct=null,at=null;return{setReversed:function(ot){if(K!==ot){let Et=t.get("EXT_clip_control");ot?Et.clipControlEXT(Et.LOWER_LEFT_EXT,Et.ZERO_TO_ONE_EXT):Et.clipControlEXT(Et.LOWER_LEFT_EXT,Et.NEGATIVE_ONE_TO_ONE_EXT),K=ot;let Yt=at;at=null,this.setClear(Yt)}},getReversed:function(){return K},setTest:function(ot){ot?mt(e.DEPTH_TEST):zt(e.DEPTH_TEST)},setMask:function(ot){q!==ot&&!C&&(e.depthMask(ot),q=ot)},setFunc:function(ot){if(K&&(ot=u1[ot]),ct!==ot){switch(ot){case gf:e.depthFunc(e.NEVER);break;case _f:e.depthFunc(e.ALWAYS);break;case vf:e.depthFunc(e.LESS);break;case Jo:e.depthFunc(e.LEQUAL);break;case yf:e.depthFunc(e.EQUAL);break;case xf:e.depthFunc(e.GEQUAL);break;case Sf:e.depthFunc(e.GREATER);break;case Mf:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}ct=ot}},setLocked:function(ot){C=ot},setClear:function(ot){at!==ot&&(at=ot,K&&(ot=1-ot),e.clearDepth(ot))},reset:function(){C=!1,q=null,ct=null,at=null,K=!1}}}function s(){let C=!1,K=null,q=null,ct=null,at=null,ot=null,Et=null,Yt=null,it=null;return{setTest:function(Ct){C||(Ct?mt(e.STENCIL_TEST):zt(e.STENCIL_TEST))},setMask:function(Ct){K!==Ct&&!C&&(e.stencilMask(Ct),K=Ct)},setFunc:function(Ct,qt,gt){(q!==Ct||ct!==qt||at!==gt)&&(e.stencilFunc(Ct,qt,gt),q=Ct,ct=qt,at=gt)},setOp:function(Ct,qt,gt){(ot!==Ct||Et!==qt||Yt!==gt)&&(e.stencilOp(Ct,qt,gt),ot=Ct,Et=qt,Yt=gt)},setLocked:function(Ct){C=Ct},setClear:function(Ct){it!==Ct&&(e.clearStencil(Ct),it=Ct)},reset:function(){C=!1,K=null,q=null,ct=null,at=null,ot=null,Et=null,Yt=null,it=null}}}let a=new n,r=new i,o=new s,l={},c=new WeakMap,h={},p={},u={},d=new WeakMap,_=[],S=null,g=!1,f=null,m=null,y=null,x=null,E=null,A=null,v=null,T=new Zt(0,0,0),I=0,R=!1,N=null,O=null,G=null,L=null,k=null,X=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),F=!1,et=0,W=e.getParameter(e.VERSION);W.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec(W)[1]),F=et>=1):W.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),F=et>=2);let $=null,tt={},St=e.getParameter(e.SCISSOR_BOX),Pt=e.getParameter(e.VIEWPORT),Z=new Be().fromArray(St),pt=new Be().fromArray(Pt);function yt(C,K,q,ct){let at=new Uint8Array(4),ot=e.createTexture();e.bindTexture(C,ot),e.texParameteri(C,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(C,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Et=0;Et<q;Et++)C===e.TEXTURE_3D||C===e.TEXTURE_2D_ARRAY?e.texImage3D(K,0,e.RGBA,1,1,ct,0,e.RGBA,e.UNSIGNED_BYTE,at):e.texImage2D(K+Et,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,at);return ot}let At={};At[e.TEXTURE_2D]=yt(e.TEXTURE_2D,e.TEXTURE_2D,1),At[e.TEXTURE_CUBE_MAP]=yt(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),At[e.TEXTURE_2D_ARRAY]=yt(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),At[e.TEXTURE_3D]=yt(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),mt(e.DEPTH_TEST),r.setFunc(Jo),mn(!1),dt(w0),mt(e.CULL_FACE),qe(Ar);function mt(C){h[C]!==!0&&(e.enable(C),h[C]=!0)}function zt(C){h[C]!==!1&&(e.disable(C),h[C]=!1)}function ze(C,K){return u[C]!==K?(e.bindFramebuffer(C,K),u[C]=K,C===e.DRAW_FRAMEBUFFER&&(u[e.FRAMEBUFFER]=K),C===e.FRAMEBUFFER&&(u[e.DRAW_FRAMEBUFFER]=K),!0):!1}function Nt(C,K){let q=_,ct=!1;if(C){q=d.get(K),q===void 0&&(q=[],d.set(K,q));let at=C.textures;if(q.length!==at.length||q[0]!==e.COLOR_ATTACHMENT0){for(let ot=0,Et=at.length;ot<Et;ot++)q[ot]=e.COLOR_ATTACHMENT0+ot;q.length=at.length,ct=!0}}else q[0]!==e.BACK&&(q[0]=e.BACK,ct=!0);ct&&e.drawBuffers(q)}function fe(C){return S!==C?(e.useProgram(C),S=C,!0):!1}let ge={[wr]:e.FUNC_ADD,[Lb]:e.FUNC_SUBTRACT,[Ub]:e.FUNC_REVERSE_SUBTRACT};ge[Ib]=e.MIN,ge[Ob]=e.MAX;let Kt={[Pb]:e.ZERO,[Bb]:e.ONE,[zb]:e.SRC_COLOR,[D0]:e.SRC_ALPHA,[Xb]:e.SRC_ALPHA_SATURATE,[Vb]:e.DST_COLOR,[Hb]:e.DST_ALPHA,[Fb]:e.ONE_MINUS_SRC_COLOR,[L0]:e.ONE_MINUS_SRC_ALPHA,[kb]:e.ONE_MINUS_DST_COLOR,[Gb]:e.ONE_MINUS_DST_ALPHA,[Wb]:e.CONSTANT_COLOR,[qb]:e.ONE_MINUS_CONSTANT_COLOR,[Yb]:e.CONSTANT_ALPHA,[Zb]:e.ONE_MINUS_CONSTANT_ALPHA};function qe(C,K,q,ct,at,ot,Et,Yt,it,Ct){if(C===Ar){g===!0&&(zt(e.BLEND),g=!1);return}if(g===!1&&(mt(e.BLEND),g=!0),C!==Db){if(C!==f||Ct!==R){if((m!==wr||E!==wr)&&(e.blendEquation(e.FUNC_ADD),m=wr,E=wr),Ct)switch(C){case al:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case R0:e.blendFunc(e.ONE,e.ONE);break;case C0:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case N0:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:Ot("WebGLState: Invalid blending: ",C);break}else switch(C){case al:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case R0:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case C0:Ot("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case N0:Ot("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ot("WebGLState: Invalid blending: ",C);break}y=null,x=null,A=null,v=null,T.set(0,0,0),I=0,f=C,R=Ct}return}at=at||K,ot=ot||q,Et=Et||ct,(K!==m||at!==E)&&(e.blendEquationSeparate(ge[K],ge[at]),m=K,E=at),(q!==y||ct!==x||ot!==A||Et!==v)&&(e.blendFuncSeparate(Kt[q],Kt[ct],Kt[ot],Kt[Et]),y=q,x=ct,A=ot,v=Et),(Yt.equals(T)===!1||it!==I)&&(e.blendColor(Yt.r,Yt.g,Yt.b,it),T.copy(Yt),I=it),f=C,R=!1}function Fe(C,K){C.side===pi?zt(e.CULL_FACE):mt(e.CULL_FACE);let q=C.side===Vn;K&&(q=!q),mn(q),C.blending===al&&C.transparent===!1?qe(Ar):qe(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),r.setFunc(C.depthFunc),r.setTest(C.depthTest),r.setMask(C.depthWrite),a.setMask(C.colorWrite);let ct=C.stencilWrite;o.setTest(ct),ct&&(o.setMask(C.stencilWriteMask),o.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),o.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),Ht(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?mt(e.SAMPLE_ALPHA_TO_COVERAGE):zt(e.SAMPLE_ALPHA_TO_COVERAGE)}function mn(C){N!==C&&(C?e.frontFace(e.CW):e.frontFace(e.CCW),N=C)}function dt(C){C!==Rb?(mt(e.CULL_FACE),C!==O&&(C===w0?e.cullFace(e.BACK):C===Cb?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):zt(e.CULL_FACE),O=C}function Wt(C){C!==G&&(F&&e.lineWidth(C),G=C)}function Ht(C,K,q){C?(mt(e.POLYGON_OFFSET_FILL),(L!==K||k!==q)&&(L=K,k=q,r.getReversed()&&(K=-K,q=-q),e.polygonOffset(K,q))):zt(e.POLYGON_OFFSET_FILL)}function le(C){C?mt(e.SCISSOR_TEST):zt(e.SCISSOR_TEST)}function ye(C){C===void 0&&(C=e.TEXTURE0+X-1),$!==C&&(e.activeTexture(C),$=C)}function Rt(C,K,q){q===void 0&&($===null?q=e.TEXTURE0+X-1:q=$);let ct=tt[q];ct===void 0&&(ct={type:void 0,texture:void 0},tt[q]=ct),(ct.type!==C||ct.texture!==K)&&($!==q&&(e.activeTexture(q),$=q),e.bindTexture(C,K||At[C]),ct.type=C,ct.texture=K)}function D(){let C=tt[$];C!==void 0&&C.type!==void 0&&(e.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function Qt(){try{e.compressedTexImage2D(...arguments)}catch(C){Ot("WebGLState:",C)}}function Bt(){try{e.compressedTexImage3D(...arguments)}catch(C){Ot("WebGLState:",C)}}function jt(){try{e.texSubImage2D(...arguments)}catch(C){Ot("WebGLState:",C)}}function st(){try{e.texSubImage3D(...arguments)}catch(C){Ot("WebGLState:",C)}}function tn(){try{e.compressedTexSubImage2D(...arguments)}catch(C){Ot("WebGLState:",C)}}function Lt(){try{e.compressedTexSubImage3D(...arguments)}catch(C){Ot("WebGLState:",C)}}function Gt(){try{e.texStorage2D(...arguments)}catch(C){Ot("WebGLState:",C)}}function w(){try{e.texStorage3D(...arguments)}catch(C){Ot("WebGLState:",C)}}function M(){try{e.texImage2D(...arguments)}catch(C){Ot("WebGLState:",C)}}function B(){try{e.texImage3D(...arguments)}catch(C){Ot("WebGLState:",C)}}function nt(C){return p[C]!==void 0?p[C]:e.getParameter(C)}function j(C,K){p[C]!==K&&(e.pixelStorei(C,K),p[C]=K)}function rt(C){Z.equals(C)===!1&&(e.scissor(C.x,C.y,C.z,C.w),Z.copy(C))}function ht(C){pt.equals(C)===!1&&(e.viewport(C.x,C.y,C.z,C.w),pt.copy(C))}function Y(C,K){let q=c.get(K);q===void 0&&(q=new WeakMap,c.set(K,q));let ct=q.get(C);ct===void 0&&(ct=e.getUniformBlockIndex(K,C.name),e.uniformBlockBinding(K,ct,ct),q.set(C,ct))}function J(C,K,q){let at=c.get(K).get(C);l[at]!==q&&(e.bindBufferBase(e.UNIFORM_BUFFER,at,q),l[at]=q)}function lt(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),r.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),h={},p={},$=null,tt={},u={},l={},d=new WeakMap,_=[],S=null,g=!1,f=null,m=null,y=null,x=null,E=null,A=null,v=null,T=new Zt(0,0,0),I=0,R=!1,N=null,O=null,G=null,L=null,k=null,Z.set(0,0,e.canvas.width,e.canvas.height),pt.set(0,0,e.canvas.width,e.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:mt,disable:zt,bindFramebuffer:ze,drawBuffers:Nt,useProgram:fe,setBlending:qe,setMaterial:Fe,setFlipSided:mn,setCullFace:dt,setLineWidth:Wt,setPolygonOffset:Ht,setScissorTest:le,activeTexture:ye,bindTexture:Rt,unbindTexture:D,compressedTexImage2D:Qt,compressedTexImage3D:Bt,texImage2D:M,texImage3D:B,pixelStorei:j,getParameter:nt,updateUBOMapping:Y,uniformBlockBinding:J,texStorage2D:Gt,texStorage3D:w,texSubImage2D:jt,texSubImage3D:st,compressedTexSubImage2D:tn,compressedTexSubImage3D:Lt,scissor:rt,viewport:ht,reset:lt}}function xD(e,t,n,i,s,a,r){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ne,h=new WeakMap,p=new Set,u,d=new WeakMap,_=new Set,S=new FinalizationRegistry(w=>_.delete(w)),g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(w,M){return g?new OffscreenCanvas(w,M):Tc("canvas")}function m(w,M,B){let nt=1,j=Gt(w);if((j.width>B||j.height>B)&&(nt=B/Math.max(j.width,j.height)),nt<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let rt=Math.floor(nt*j.width),ht=Math.floor(nt*j.height);u===void 0&&(u=f(rt,ht));let Y=M?f(rt,ht):u;return Y.width=rt,Y.height=ht,Y.getContext("2d").drawImage(w,0,0,rt,ht),Ut("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+rt+"x"+ht+")."),Y}else return"data"in w&&Ut("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),w;return w}function y(w){return w.generateMipmaps}function x(w){e.generateMipmap(w)}function E(w){return w.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?e.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function A(w,M,B,nt,j,rt=!1){if(w!==null){if(e[w]!==void 0)return e[w];Ut("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let ht;nt&&(ht=t.get("EXT_texture_norm16"),ht||Ut("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=M;if(M===e.RED&&(B===e.FLOAT&&(Y=e.R32F),B===e.HALF_FLOAT&&(Y=e.R16F),B===e.UNSIGNED_BYTE&&(Y=e.R8),B===e.UNSIGNED_SHORT&&ht&&(Y=ht.R16_EXT),B===e.SHORT&&ht&&(Y=ht.R16_SNORM_EXT)),M===e.RED_INTEGER&&(B===e.UNSIGNED_BYTE&&(Y=e.R8UI),B===e.UNSIGNED_SHORT&&(Y=e.R16UI),B===e.UNSIGNED_INT&&(Y=e.R32UI),B===e.BYTE&&(Y=e.R8I),B===e.SHORT&&(Y=e.R16I),B===e.INT&&(Y=e.R32I)),M===e.RG&&(B===e.FLOAT&&(Y=e.RG32F),B===e.HALF_FLOAT&&(Y=e.RG16F),B===e.UNSIGNED_BYTE&&(Y=e.RG8),B===e.UNSIGNED_SHORT&&ht&&(Y=ht.RG16_EXT),B===e.SHORT&&ht&&(Y=ht.RG16_SNORM_EXT)),M===e.RG_INTEGER&&(B===e.UNSIGNED_BYTE&&(Y=e.RG8UI),B===e.UNSIGNED_SHORT&&(Y=e.RG16UI),B===e.UNSIGNED_INT&&(Y=e.RG32UI),B===e.BYTE&&(Y=e.RG8I),B===e.SHORT&&(Y=e.RG16I),B===e.INT&&(Y=e.RG32I)),M===e.RGB_INTEGER&&(B===e.UNSIGNED_BYTE&&(Y=e.RGB8UI),B===e.UNSIGNED_SHORT&&(Y=e.RGB16UI),B===e.UNSIGNED_INT&&(Y=e.RGB32UI),B===e.BYTE&&(Y=e.RGB8I),B===e.SHORT&&(Y=e.RGB16I),B===e.INT&&(Y=e.RGB32I)),M===e.RGBA_INTEGER&&(B===e.UNSIGNED_BYTE&&(Y=e.RGBA8UI),B===e.UNSIGNED_SHORT&&(Y=e.RGBA16UI),B===e.UNSIGNED_INT&&(Y=e.RGBA32UI),B===e.BYTE&&(Y=e.RGBA8I),B===e.SHORT&&(Y=e.RGBA16I),B===e.INT&&(Y=e.RGBA32I)),M===e.RGB&&(B===e.UNSIGNED_SHORT&&ht&&(Y=ht.RGB16_EXT),B===e.SHORT&&ht&&(Y=ht.RGB16_SNORM_EXT),B===e.UNSIGNED_INT_5_9_9_9_REV&&(Y=e.RGB9_E5),B===e.UNSIGNED_INT_10F_11F_11F_REV&&(Y=e.R11F_G11F_B10F)),M===e.RGBA){let J=rt?bc:re.getTransfer(j);B===e.FLOAT&&(Y=e.RGBA32F),B===e.HALF_FLOAT&&(Y=e.RGBA16F),B===e.UNSIGNED_BYTE&&(Y=J===ve?e.SRGB8_ALPHA8:e.RGBA8),B===e.UNSIGNED_SHORT&&ht&&(Y=ht.RGBA16_EXT),B===e.SHORT&&ht&&(Y=ht.RGBA16_SNORM_EXT),B===e.UNSIGNED_SHORT_4_4_4_4&&(Y=e.RGBA4),B===e.UNSIGNED_SHORT_5_5_5_1&&(Y=e.RGB5_A1)}return(Y===e.R16F||Y===e.R32F||Y===e.RG16F||Y===e.RG32F||Y===e.RGBA16F||Y===e.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function v(w,M){let B;return w?M===null||M===Hi||M===Cr?B=e.DEPTH24_STENCIL8:M===Gi?B=e.DEPTH32F_STENCIL8:M===ol&&(B=e.DEPTH24_STENCIL8,Ut("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Hi||M===Cr?B=e.DEPTH_COMPONENT24:M===Gi?B=e.DEPTH_COMPONENT32F:M===ol&&(B=e.DEPTH_COMPONENT16),B}function T(w,M){return y(w)===!0||w.isFramebufferTexture&&w.minFilter!==pn&&w.minFilter!==je?Math.log2(Math.max(M.width,M.height))+1:w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?M.mipmaps.length:1}function I(w){let M=new WeakRef(w);i.get(w).__ref=M,_.add(M),S.register(w,M,M)}function R(w){let M=i.get(w).__ref;M!==void 0&&(_.delete(M),S.unregister(M))}function N(w){G(w.target)}function O(w){L(w.target)}function G(w){w.removeEventListener("dispose",N),R(w),X(w),w.isVideoTexture&&h.delete(w),w.isHTMLTexture&&p.delete(w)}function L(w){w.removeEventListener("dispose",O),R(w),et(w)}function k(){for(let w of _){let M=w.deref();M!==void 0&&(M.isRenderTarget===!0?L(M):G(M))}_.clear(),p.clear()}function X(w){let M=i.get(w);if(M.__webglInit===void 0)return;let B=w.source,nt=d.get(B);if(nt){let j=nt[M.__cacheKey];j.usedTimes--,j.usedTimes===0&&F(w),Object.keys(nt).length===0&&d.delete(B)}i.remove(w)}function F(w){let M=i.get(w);e.deleteTexture(M.__webglTexture);let B=w.source,nt=d.get(B);delete nt[M.__cacheKey],r.memory.textures--}function et(w){let M=i.get(w);M.__depthDisposeCallback&&M.__depthDisposeCallback();let B=w.depthTexture;if(B&&B.renderTarget===w&&G(B),w.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(M.__webglFramebuffer[j]))for(let rt=0;rt<M.__webglFramebuffer[j].length;rt++)e.deleteFramebuffer(M.__webglFramebuffer[j][rt]);else e.deleteFramebuffer(M.__webglFramebuffer[j]);M.__webglDepthbuffer&&e.deleteRenderbuffer(M.__webglDepthbuffer[j])}else{if(Array.isArray(M.__webglFramebuffer))for(let j=0;j<M.__webglFramebuffer.length;j++)e.deleteFramebuffer(M.__webglFramebuffer[j]);else e.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&e.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&e.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let j=0;j<M.__webglColorRenderbuffer.length;j++)M.__webglColorRenderbuffer[j]&&e.deleteRenderbuffer(M.__webglColorRenderbuffer[j]);M.__webglDepthRenderbuffer&&e.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let nt=w.textures;for(let j=0,rt=nt.length;j<rt;j++){let ht=i.get(nt[j]);ht.__webglTexture&&(e.deleteTexture(ht.__webglTexture),r.memory.textures--),i.remove(nt[j])}i.remove(w)}let W=0;function $(){W=0}function tt(){return W}function St(w){W=w}function Pt(){let w=W;return w>=s.maxTextures&&Ut("WebGLTextures: Trying to use "+(w+1)+" texture units while this GPU supports only "+s.maxTextures),W+=1,w}function Z(w){let M=[];return M.push(w.wrapS),M.push(w.wrapT),M.push(w.wrapR||0),M.push(w.magFilter),M.push(w.minFilter),M.push(w.anisotropy),M.push(w.internalFormat),M.push(w.format),M.push(w.type),M.push(w.generateMipmaps),M.push(w.mipmapsAutoUpdate),M.push(w.premultiplyAlpha),M.push(w.flipY),M.push(w.unpackAlignment),M.push(w.colorSpace),M.join()}function pt(w,M){let B=i.get(w);if(w.isVideoTexture&&tn(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&B.__version!==w.version){let nt=w.image;if(nt===null)Ut("WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)Ut("WebGLRenderer: Texture marked for update but image is incomplete");else{Fe(B,w,M);return}}else w.isExternalTexture&&(B.__webglTexture=w.sourceTexture?w.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,B.__webglTexture,e.TEXTURE0+M)}function yt(w,M){let B=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&B.__version!==w.version){Fe(B,w,M);return}else w.isExternalTexture&&(B.__webglTexture=w.sourceTexture?w.sourceTexture:null);n.bindTexture(e.TEXTURE_2D_ARRAY,B.__webglTexture,e.TEXTURE0+M)}function At(w,M){let B=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&B.__version!==w.version){Fe(B,w,M);return}n.bindTexture(e.TEXTURE_3D,B.__webglTexture,e.TEXTURE0+M)}function mt(w,M){let B=i.get(w);if(w.version>0&&B.__version!==w.version){mn(B,w,M);return}n.bindTexture(e.TEXTURE_CUBE_MAP,B.__webglTexture,e.TEXTURE0+M)}let zt={[bf]:e.REPEAT,[ls]:e.CLAMP_TO_EDGE,[Tf]:e.MIRRORED_REPEAT},ze={[pn]:e.NEAREST,[Qb]:e.NEAREST_MIPMAP_NEAREST,[Vc]:e.NEAREST_MIPMAP_LINEAR,[je]:e.LINEAR,[Jf]:e.LINEAR_MIPMAP_NEAREST,[Xs]:e.LINEAR_MIPMAP_LINEAR},Nt={[e1]:e.NEVER,[Q0]:e.ALWAYS,[n1]:e.LESS,[J0]:e.LEQUAL,[i1]:e.EQUAL,[K0]:e.GEQUAL,[s1]:e.GREATER,[a1]:e.NOTEQUAL};function fe(w,M){if(M.type===Gi&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===je||M.magFilter===Jf||M.magFilter===Vc||M.magFilter===Xs||M.minFilter===je||M.minFilter===Jf||M.minFilter===Vc||M.minFilter===Xs)&&Ut("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(w,e.TEXTURE_WRAP_S,zt[M.wrapS]),e.texParameteri(w,e.TEXTURE_WRAP_T,zt[M.wrapT]),(w===e.TEXTURE_3D||w===e.TEXTURE_2D_ARRAY)&&e.texParameteri(w,e.TEXTURE_WRAP_R,zt[M.wrapR]),e.texParameteri(w,e.TEXTURE_MAG_FILTER,ze[M.magFilter]),e.texParameteri(w,e.TEXTURE_MIN_FILTER,ze[M.minFilter]),M.compareFunction&&(e.texParameteri(w,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(w,e.TEXTURE_COMPARE_FUNC,Nt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===pn||M.minFilter!==Vc&&M.minFilter!==Xs||M.type===Gi&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){let B=t.get("EXT_texture_filter_anisotropic");e.texParameterf(w,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function ge(w,M){let B=!1;w.__webglInit===void 0&&(w.__webglInit=!0,M.addEventListener("dispose",N),I(M));let nt=M.source,j=d.get(nt);j===void 0&&(j={},d.set(nt,j));let rt=Z(M);if(rt!==w.__cacheKey){j[rt]===void 0&&(j[rt]={texture:e.createTexture(),usedTimes:0},r.memory.textures++,B=!0),j[rt].usedTimes++;let ht=j[w.__cacheKey];ht!==void 0&&(j[w.__cacheKey].usedTimes--,ht.usedTimes===0&&F(M)),w.__cacheKey=rt,w.__webglTexture=j[rt].texture}return B}function Kt(w,M,B){return Math.floor(Math.floor(w/B)/M)}function qe(w,M,B,nt){let rt=w.updateRanges;if(rt.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,M.width,M.height,B,nt,M.data);else{rt.sort((C,K)=>C.start-K.start);let ht=0;for(let C=1;C<rt.length;C++){let K=rt[ht],q=rt[C],ct=K.start+K.count,at=Kt(q.start,M.width,4),ot=Kt(K.start,M.width,4);q.start<=ct+1&&at===ot&&Kt(q.start+q.count-1,M.width,4)===at?K.count=Math.max(K.count,q.start+q.count-K.start):(++ht,rt[ht]=q)}rt.length=ht+1;let Y=n.getParameter(e.UNPACK_ROW_LENGTH),J=n.getParameter(e.UNPACK_SKIP_PIXELS),lt=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,M.width);for(let C=0,K=rt.length;C<K;C++){let q=rt[C],ct=Math.floor(q.start/4),at=Math.ceil(q.count/4),ot=ct%M.width,Et=Math.floor(ct/M.width),Yt=at,it=1;n.pixelStorei(e.UNPACK_SKIP_PIXELS,ot),n.pixelStorei(e.UNPACK_SKIP_ROWS,Et),n.texSubImage2D(e.TEXTURE_2D,0,ot,Et,Yt,it,B,nt,M.data)}w.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,Y),n.pixelStorei(e.UNPACK_SKIP_PIXELS,J),n.pixelStorei(e.UNPACK_SKIP_ROWS,lt)}}function Fe(w,M,B){let nt=e.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(nt=e.TEXTURE_2D_ARRAY),M.isData3DTexture&&(nt=e.TEXTURE_3D);let j=ge(w,M),rt=M.source;n.bindTexture(nt,w.__webglTexture,e.TEXTURE0+B);let ht=i.get(rt);if(rt.version!==ht.__version||j===!0){if(n.activeTexture(e.TEXTURE0+B),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){let it=re.getPrimaries(re.workingColorSpace),Ct=M.colorSpace===qs?null:re.getPrimaries(M.colorSpace),qt=M.colorSpace===qs||it===Ct?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt)}n.pixelStorei(e.UNPACK_ALIGNMENT,M.unpackAlignment);let J=m(M.image,!1,s.maxTextureSize);J=Lt(M,J);let lt=a.convert(M.format,M.colorSpace),C=a.convert(M.type),K=A(M.internalFormat,lt,C,M.normalized,M.colorSpace,M.isVideoTexture);fe(nt,M);let q,ct=M.mipmaps,at=M.isVideoTexture!==!0,ot=ht.__version===void 0||j===!0,Et=rt.dataReady,Yt=T(M,J);if(M.isDepthTexture)K=v(M.format===Ws,M.type),ot&&(at?n.texStorage2D(e.TEXTURE_2D,1,K,J.width,J.height):n.texImage2D(e.TEXTURE_2D,0,K,J.width,J.height,0,lt,C,null));else if(M.isDataTexture)if(ct.length>0){at&&ot&&n.texStorage2D(e.TEXTURE_2D,Yt,K,ct[0].width,ct[0].height);for(let it=0,Ct=ct.length;it<Ct;it++)q=ct[it],at?Et&&n.texSubImage2D(e.TEXTURE_2D,it,0,0,q.width,q.height,lt,C,q.data):n.texImage2D(e.TEXTURE_2D,it,K,q.width,q.height,0,lt,C,q.data);M.generateMipmaps=!1}else at?(ot&&n.texStorage2D(e.TEXTURE_2D,Yt,K,J.width,J.height),Et&&qe(M,J,lt,C)):n.texImage2D(e.TEXTURE_2D,0,K,J.width,J.height,0,lt,C,J.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){at&&ot&&n.texStorage3D(e.TEXTURE_2D_ARRAY,Yt,K,ct[0].width,ct[0].height,J.depth);for(let it=0,Ct=ct.length;it<Ct;it++)if(q=ct[it],M.format!==ki)if(lt!==null)if(at){if(Et)if(M.layerUpdates.size>0){let qt=s_(q.width,q.height,M.format,M.type);for(let gt of M.layerUpdates){let xe=q.data.subarray(gt*qt/q.data.BYTES_PER_ELEMENT,(gt+1)*qt/q.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,it,0,0,gt,q.width,q.height,1,lt,xe)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,it,0,0,0,q.width,q.height,J.depth,lt,q.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,it,K,q.width,q.height,J.depth,0,q.data,0,0);else Ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else at?Et&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,it,0,0,0,q.width,q.height,J.depth,lt,C,q.data):n.texImage3D(e.TEXTURE_2D_ARRAY,it,K,q.width,q.height,J.depth,0,lt,C,q.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{at&&ot&&n.texStorage2D(e.TEXTURE_2D,Yt,K,ct[0].width,ct[0].height);for(let it=0,Ct=ct.length;it<Ct;it++)q=ct[it],M.format!==ki?lt!==null?at?Et&&n.compressedTexSubImage2D(e.TEXTURE_2D,it,0,0,q.width,q.height,lt,q.data):n.compressedTexImage2D(e.TEXTURE_2D,it,K,q.width,q.height,0,q.data):Ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):at?Et&&n.texSubImage2D(e.TEXTURE_2D,it,0,0,q.width,q.height,lt,C,q.data):n.texImage2D(e.TEXTURE_2D,it,K,q.width,q.height,0,lt,C,q.data)}else if(M.isDataArrayTexture)if(at){if(ot&&n.texStorage3D(e.TEXTURE_2D_ARRAY,Yt,K,J.width,J.height,J.depth),Et)if(M.layerUpdates.size>0){let it=s_(J.width,J.height,M.format,M.type);for(let Ct of M.layerUpdates){let qt=J.data.subarray(Ct*it/J.data.BYTES_PER_ELEMENT,(Ct+1)*it/J.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,Ct,J.width,J.height,1,lt,C,qt)}M.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,lt,C,J.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,K,J.width,J.height,J.depth,0,lt,C,J.data);else if(M.isData3DTexture)at?(ot&&n.texStorage3D(e.TEXTURE_3D,Yt,K,J.width,J.height,J.depth),Et&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,lt,C,J.data)):n.texImage3D(e.TEXTURE_3D,0,K,J.width,J.height,J.depth,0,lt,C,J.data);else if(M.isFramebufferTexture){if(ot)if(at)n.texStorage2D(e.TEXTURE_2D,Yt,K,J.width,J.height);else{let it=J.width,Ct=J.height;for(let qt=0;qt<Yt;qt++)n.texImage2D(e.TEXTURE_2D,qt,K,it,Ct,0,lt,C,null),it>>=1,Ct>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in e){let it=e.canvas;if(it.hasAttribute("layoutsubtree")||it.setAttribute("layoutsubtree","true"),J.parentNode!==it){it.appendChild(J),p.add(M),it.onpaint=Ct=>{let qt=Ct.changedElements;for(let gt of p)qt.includes(gt.image)&&(gt.needsUpdate=!0)},it.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,J);else{let qt=e.RGBA,gt=e.RGBA,xe=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,qt,gt,xe,J)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(ct.length>0){if(at&&ot){let it=Gt(ct[0]);n.texStorage2D(e.TEXTURE_2D,Yt,K,it.width,it.height)}for(let it=0,Ct=ct.length;it<Ct;it++)q=ct[it],at?Et&&n.texSubImage2D(e.TEXTURE_2D,it,0,0,lt,C,q):n.texImage2D(e.TEXTURE_2D,it,K,lt,C,q);M.generateMipmaps=!1}else if(at){if(ot){let it=Gt(J);n.texStorage2D(e.TEXTURE_2D,Yt,K,it.width,it.height)}Et&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,lt,C,J)}else n.texImage2D(e.TEXTURE_2D,0,K,lt,C,J);y(M)&&M.mipmapsAutoUpdate===!0&&x(nt),ht.__version=rt.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function mn(w,M,B){if(M.image.length!==6)return;let nt=ge(w,M),j=M.source;n.bindTexture(e.TEXTURE_CUBE_MAP,w.__webglTexture,e.TEXTURE0+B);let rt=i.get(j);if(j.version!==rt.__version||nt===!0){n.activeTexture(e.TEXTURE0+B);let ht=re.getPrimaries(re.workingColorSpace),Y=M.colorSpace===qs?null:re.getPrimaries(M.colorSpace),J=M.colorSpace===qs||ht===Y?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);let lt=M.isCompressedTexture||M.image[0].isCompressedTexture,C=M.image[0]&&M.image[0].isDataTexture,K=[];for(let gt=0;gt<6;gt++)!lt&&!C?K[gt]=m(M.image[gt],!0,s.maxCubemapSize):K[gt]=C?M.image[gt].image:M.image[gt],K[gt]=Lt(M,K[gt]);let q=K[0],ct=a.convert(M.format,M.colorSpace),at=a.convert(M.type),ot=A(M.internalFormat,ct,at,M.normalized,M.colorSpace),Et=M.isVideoTexture!==!0,Yt=rt.__version===void 0||nt===!0,it=j.dataReady,Ct=T(M,q);fe(e.TEXTURE_CUBE_MAP,M);let qt;if(M.isDepthTexture){if(ot=v(M.format===Ws,M.type),Yt)if(Et)n.texStorage2D(e.TEXTURE_CUBE_MAP,1,ot,q.width,q.height);else for(let gt=0;gt<6;gt++)n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,ot,q.width,q.height,0,ct,at,null)}else if(lt){Et&&Yt&&n.texStorage2D(e.TEXTURE_CUBE_MAP,Ct,ot,q.width,q.height);for(let gt=0;gt<6;gt++){qt=K[gt].mipmaps;for(let xe=0;xe<qt.length;xe++){let on=qt[xe];M.format!==ki?ct!==null?Et?it&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+gt,xe,0,0,on.width,on.height,ct,on.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+gt,xe,ot,on.width,on.height,0,on.data):Ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Et?it&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+gt,xe,0,0,on.width,on.height,ct,at,on.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+gt,xe,ot,on.width,on.height,0,ct,at,on.data)}}}else{if(qt=M.mipmaps,Et&&Yt){qt.length>0&&Ct++;let gt=Gt(K[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,Ct,ot,gt.width,gt.height)}for(let gt=0;gt<6;gt++)if(C){Et?it&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,K[gt].width,K[gt].height,ct,at,K[gt].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,ot,K[gt].width,K[gt].height,0,ct,at,K[gt].data);for(let xe=0;xe<qt.length;xe++){let Ys=qt[xe].image[gt].image;Et?it&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+gt,xe+1,0,0,Ys.width,Ys.height,ct,at,Ys.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+gt,xe+1,ot,Ys.width,Ys.height,0,ct,at,Ys.data)}}else{Et?it&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,ct,at,K[gt]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,ot,ct,at,K[gt]);for(let xe=0;xe<qt.length;xe++){let on=qt[xe];Et?it&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+gt,xe+1,0,0,ct,at,on.image[gt]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+gt,xe+1,ot,ct,at,on.image[gt])}}}y(M)&&M.mipmapsAutoUpdate===!0&&x(e.TEXTURE_CUBE_MAP),rt.__version=j.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function dt(w,M,B,nt,j,rt){let ht=a.convert(B.format,B.colorSpace),Y=a.convert(B.type),J=A(B.internalFormat,ht,Y,B.normalized,B.colorSpace),lt=i.get(M),C=i.get(B);if(C.__renderTarget=M,!lt.__hasExternalTextures){let K=Math.max(1,M.width>>rt),q=Math.max(1,M.height>>rt);j===e.TEXTURE_3D||j===e.TEXTURE_2D_ARRAY?n.texImage3D(j,rt,J,K,q,M.depth,0,ht,Y,null):n.texImage2D(j,rt,J,K,q,0,ht,Y,null)}n.bindFramebuffer(e.FRAMEBUFFER,w),st(M)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,nt,j,C.__webglTexture,0,jt(M)):(j===e.TEXTURE_2D||j>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,nt,j,C.__webglTexture,rt),n.bindFramebuffer(e.FRAMEBUFFER,null)}function Wt(w,M,B){if(e.bindRenderbuffer(e.RENDERBUFFER,w),M.depthBuffer){let nt=M.depthTexture,j=nt&&nt.isDepthTexture?nt.type:null,rt=v(M.stencilBuffer,j),ht=M.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;st(M)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,jt(M),rt,M.width,M.height):B?e.renderbufferStorageMultisample(e.RENDERBUFFER,jt(M),rt,M.width,M.height):e.renderbufferStorage(e.RENDERBUFFER,rt,M.width,M.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,ht,e.RENDERBUFFER,w)}else{let nt=M.textures;for(let j=0;j<nt.length;j++){let rt=nt[j],ht=a.convert(rt.format,rt.colorSpace),Y=a.convert(rt.type),J=A(rt.internalFormat,ht,Y,rt.normalized,rt.colorSpace);st(M)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,jt(M),J,M.width,M.height):B?e.renderbufferStorageMultisample(e.RENDERBUFFER,jt(M),J,M.width,M.height):e.renderbufferStorage(e.RENDERBUFFER,J,M.width,M.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Ht(w,M,B){let nt=M.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,w),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let j=i.get(M.depthTexture);j.__renderTarget=M;let rt=nt?M.depthTexture.image[0]:M.depthTexture.image;(!j.__webglTexture||rt.width!==M.width||rt.height!==M.height)&&(rt.width=M.width,rt.height=M.height,M.depthTexture.needsUpdate=!0),nt?mt(M.depthTexture,0):pt(M.depthTexture,0);let ht=j.__webglTexture,Y=jt(M),J=nt?e.TEXTURE_CUBE_MAP_POSITIVE_X+B:e.TEXTURE_2D,lt=M.depthTexture.format===Ws?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(M.depthTexture.format===Gs)st(M)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,lt,J,ht,0,Y):e.framebufferTexture2D(e.FRAMEBUFFER,lt,J,ht,0);else if(M.depthTexture.format===Ws)st(M)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,lt,J,ht,0,Y):e.framebufferTexture2D(e.FRAMEBUFFER,lt,J,ht,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function le(w){let M=i.get(w),B=w.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==w.depthTexture){let nt=w.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),nt){let j=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,nt.removeEventListener("dispose",j)};nt.addEventListener("dispose",j),M.__depthDisposeCallback=j}M.__boundDepthTexture=nt}if(w.depthTexture&&!M.__autoAllocateDepthBuffer)if(B)for(let nt=0;nt<6;nt++)Ht(M.__webglFramebuffer[nt],w,nt);else w.texture.mipmaps.length>0?Ht(M.__webglFramebuffer[0],w,0):Ht(M.__webglFramebuffer,w,0);else if(B){M.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)if(n.bindFramebuffer(e.FRAMEBUFFER,M.__webglFramebuffer[nt]),M.__webglDepthbuffer[nt]===void 0)M.__webglDepthbuffer[nt]=e.createRenderbuffer(),Wt(M.__webglDepthbuffer[nt],w,!1);else{let j=w.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,rt=M.__webglDepthbuffer[nt];e.bindRenderbuffer(e.RENDERBUFFER,rt),e.framebufferRenderbuffer(e.FRAMEBUFFER,j,e.RENDERBUFFER,rt)}}else if(w.texture.mipmaps.length>0?n.bindFramebuffer(e.FRAMEBUFFER,M.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=e.createRenderbuffer(),Wt(M.__webglDepthbuffer,w,!1);else{let j=w.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,rt=M.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,rt),e.framebufferRenderbuffer(e.FRAMEBUFFER,j,e.RENDERBUFFER,rt)}n.bindFramebuffer(e.FRAMEBUFFER,null)}function ye(w,M,B){let nt=i.get(w);M!==void 0&&dt(nt.__webglFramebuffer,w,w.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),B!==void 0&&le(w)}function Rt(w){let M=w.texture,B=i.get(w),nt=i.get(M);w.addEventListener("dispose",O),I(w);let j=w.textures,rt=w.isWebGLCubeRenderTarget===!0,ht=j.length>1;if(ht||(nt.__webglTexture===void 0&&(nt.__webglTexture=e.createTexture()),nt.__version=M.version,r.memory.textures++),rt){B.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(M.mipmaps.length>0){B.__webglFramebuffer[Y]=[];for(let J=0;J<M.mipmaps.length;J++)B.__webglFramebuffer[Y][J]=e.createFramebuffer()}else B.__webglFramebuffer[Y]=e.createFramebuffer()}else{if(M.mipmaps.length>0){B.__webglFramebuffer=[];for(let Y=0;Y<M.mipmaps.length;Y++)B.__webglFramebuffer[Y]=e.createFramebuffer()}else B.__webglFramebuffer=e.createFramebuffer();if(ht)for(let Y=0,J=j.length;Y<J;Y++){let lt=i.get(j[Y]);lt.__webglTexture===void 0&&(lt.__webglTexture=e.createTexture(),r.memory.textures++)}if(w.samples>0&&st(w)===!1){B.__webglMultisampledFramebuffer=e.createFramebuffer(),B.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let Y=0;Y<j.length;Y++){let J=j[Y];B.__webglColorRenderbuffer[Y]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,B.__webglColorRenderbuffer[Y]);let lt=a.convert(J.format,J.colorSpace),C=a.convert(J.type),K=A(J.internalFormat,lt,C,J.normalized,J.colorSpace,w.isXRRenderTarget===!0),q=jt(w);e.renderbufferStorageMultisample(e.RENDERBUFFER,q,K,w.width,w.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Y,e.RENDERBUFFER,B.__webglColorRenderbuffer[Y])}e.bindRenderbuffer(e.RENDERBUFFER,null),w.depthBuffer&&(B.__webglDepthRenderbuffer=e.createRenderbuffer(),Wt(B.__webglDepthRenderbuffer,w,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(rt){n.bindTexture(e.TEXTURE_CUBE_MAP,nt.__webglTexture),fe(e.TEXTURE_CUBE_MAP,M);for(let Y=0;Y<6;Y++)if(M.mipmaps.length>0)for(let J=0;J<M.mipmaps.length;J++)dt(B.__webglFramebuffer[Y][J],w,M,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+Y,J);else dt(B.__webglFramebuffer[Y],w,M,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);y(M)?x(e.TEXTURE_CUBE_MAP):M.mipmaps.length>0&&e.texParameteri(e.TEXTURE_CUBE_MAP,e.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),n.unbindTexture()}else if(ht){for(let Y=0,J=j.length;Y<J;Y++){let lt=j[Y],C=i.get(lt),K=e.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(K=w.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(K,C.__webglTexture),fe(K,lt),dt(B.__webglFramebuffer,w,lt,e.COLOR_ATTACHMENT0+Y,K,0),y(lt)&&x(K)}n.unbindTexture()}else{let Y=e.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Y=w.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(Y,nt.__webglTexture),fe(Y,M),M.mipmaps.length>0)for(let J=0;J<M.mipmaps.length;J++)dt(B.__webglFramebuffer[J],w,M,e.COLOR_ATTACHMENT0,Y,J);else dt(B.__webglFramebuffer,w,M,e.COLOR_ATTACHMENT0,Y,0);y(M)?x(Y):M.mipmaps.length>0&&e.texParameteri(Y,e.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),n.unbindTexture()}w.depthBuffer&&le(w)}function D(w){let M=w.textures;for(let B=0,nt=M.length;B<nt;B++){let j=M[B];if(y(j)&&j.mipmapsAutoUpdate===!0){let rt=E(w),ht=i.get(j).__webglTexture;n.bindTexture(rt,ht),x(rt),n.unbindTexture()}}}let Qt=[];function Bt(w){if(w.samples>0){if(st(w)===!1){let M=w.textures,B=w.width,nt=w.height,j=e.COLOR_BUFFER_BIT,rt=w.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ht=i.get(w),Y=M.length>1;if(Y)for(let lt=0;lt<M.length;lt++)n.bindFramebuffer(e.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+lt,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,ht.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+lt,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,ht.__webglMultisampledFramebuffer),w.texture.mipmaps.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,ht.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,ht.__webglFramebuffer);for(let lt=0;lt<M.length;lt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(j|=e.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(j|=e.STENCIL_BUFFER_BIT)),Y){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,ht.__webglColorRenderbuffer[lt]);let C=i.get(M[lt]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,C,0)}e.blitFramebuffer(0,0,B,nt,0,0,B,nt,j,e.NEAREST),l===!0&&(Qt.length=0,Qt.push(e.COLOR_ATTACHMENT0+lt),w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&Qt.push(rt),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Qt))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),Y)for(let lt=0;lt<M.length;lt++){n.bindFramebuffer(e.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+lt,e.RENDERBUFFER,ht.__webglColorRenderbuffer[lt]);let C=i.get(M[lt]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,ht.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+lt,e.TEXTURE_2D,C,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,ht.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&l){let M=w.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[M])}}}function jt(w){return Math.min(s.maxSamples,w.samples)}function st(w){let M=i.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function tn(w){let M=r.render.frame;h.get(w)!==M&&(h.set(w,M),w.update())}function Lt(w,M){let B=w.colorSpace,nt=w.format,j=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||B!==Mc&&B!==qs&&(re.getTransfer(B)===ve?(nt!==ki||j!==Qn)&&Ut("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ot("WebGLTextures: Unsupported texture color space:",B)),M}function Gt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=Pt,this.resetTextureUnits=$,this.getTextureUnits=tt,this.setTextureUnits=St,this.setTexture2D=pt,this.setTexture2DArray=yt,this.setTexture3D=At,this.setTextureCube=mt,this.rebindTextures=ye,this.setupRenderTarget=Rt,this.updateRenderTargetMipmap=D,this.updateMultisampleRenderTarget=Bt,this.setupDepthRenderbuffer=le,this.setupFrameBufferTexture=dt,this.useMultisampledRTT=st,this.dispose=k}function SD(e,t){function n(i,s=qs){let a,r=re.getTransfer(s);if(i===Qn)return e.UNSIGNED_BYTE;if(i===Qf)return e.UNSIGNED_SHORT_4_4_4_4;if(i===jf)return e.UNSIGNED_SHORT_5_5_5_1;if(i===X0)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===W0)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===V0)return e.BYTE;if(i===k0)return e.SHORT;if(i===ol)return e.UNSIGNED_SHORT;if(i===Kf)return e.INT;if(i===Hi)return e.UNSIGNED_INT;if(i===Gi)return e.FLOAT;if(i===Vi)return e.HALF_FLOAT;if(i===q0)return e.ALPHA;if(i===Y0)return e.RGB;if(i===ki)return e.RGBA;if(i===Gs)return e.DEPTH_COMPONENT;if(i===Ws)return e.DEPTH_STENCIL;if(i===Z0)return e.RED;if(i===$f)return e.RED_INTEGER;if(i===Ga)return e.RG;if(i===td)return e.RG_INTEGER;if(i===ed)return e.RGBA_INTEGER;if(i===kc||i===Xc||i===Wc||i===qc)if(r===ve)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===kc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Xc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Wc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===qc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===kc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Xc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Wc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===qc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===nd||i===id||i===sd||i===ad)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===nd)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===id)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===sd)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ad)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===rd||i===od||i===ld||i===cd||i===ud||i===Yc||i===hd)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(i===rd||i===od)return r===ve?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===ld)return r===ve?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(i===cd)return a.COMPRESSED_R11_EAC;if(i===ud)return a.COMPRESSED_SIGNED_R11_EAC;if(i===Yc)return a.COMPRESSED_RG11_EAC;if(i===hd)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===fd||i===dd||i===pd||i===md||i===gd||i===_d||i===vd||i===yd||i===xd||i===Sd||i===Md||i===bd||i===Td||i===Ed)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(i===fd)return r===ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===dd)return r===ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===pd)return r===ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===md)return r===ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===gd)return r===ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===_d)return r===ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===vd)return r===ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===yd)return r===ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===xd)return r===ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Sd)return r===ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Md)return r===ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===bd)return r===ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Td)return r===ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ed)return r===ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ad||i===wd||i===Rd)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(i===Ad)return r===ve?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===wd)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Rd)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Cd||i===Nd||i===Zc||i===Dd)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(i===Cd)return a.COMPRESSED_RED_RGTC1_EXT;if(i===Nd)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Zc)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Dd)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Cr?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}var MD=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bD=`
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

}`,d_=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){let i=new Uc(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let n=t.cameras[0].viewport,i=new fs({vertexShader:MD,fragmentShader:bD,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new $e(new Kn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},p_=class extends us{constructor(t,n){super();let i=this,s=null,a=1,r=null,o="local-floor",l=1,c=null,h=null,p=null,u=null,d=null,_=null,S=typeof XRWebGLBinding<"u",g=new d_,f={},m=n.getContextAttributes(),y=null,x=null,E=[],A=[],v=new ne,T=null,I=null,R=new Hn;R.viewport=new Be;let N=new Hn;N.viewport=new Be;let O=[R,N],G=new qf,L=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let pt=E[Z];return pt===void 0&&(pt=new tl,E[Z]=pt),pt.getTargetRaySpace()},this.getControllerGrip=function(Z){let pt=E[Z];return pt===void 0&&(pt=new tl,E[Z]=pt),pt.getGripSpace()},this.getHand=function(Z){let pt=E[Z];return pt===void 0&&(pt=new tl,E[Z]=pt),pt.getHandSpace()};function X(Z){let pt=A.indexOf(Z.inputSource);if(pt===-1)return;let yt=E[pt];yt!==void 0&&(yt.update(Z.inputSource,Z.frame,c||r),yt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function F(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",F),s.removeEventListener("inputsourceschange",et);for(let Z=0;Z<E.length;Z++){let pt=A[Z];pt!==null&&(A[Z]=null,E[Z].disconnect(pt))}L=null,k=null,g.reset();for(let Z in f)delete f[Z];if(t.setRenderTarget(y),d=null,u=null,p=null,s=null,x=null,Pt.stop(),i.isPresenting=!1,t.setPixelRatio(T),t.setSize(v.width,v.height,!1),I!==null){let Z=I.camera;Z.fov=I.fov,Z.zoom=I.zoom,Z.updateProjectionMatrix(),I=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){a=Z,i.isPresenting===!0&&Ut("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,i.isPresenting===!0&&Ut("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return p===null&&S&&(p=new XRWebGLBinding(s,n)),p},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(y=t.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",F),s.addEventListener("inputsourceschange",et),m.xrCompatible!==!0&&await n.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(v),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let yt=null,At=null,mt=null;m.depth&&(mt=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,yt=m.stencil?Ws:Gs,At=m.stencil?Cr:Hi);let zt={colorFormat:n.RGBA8,depthFormat:mt,scaleFactor:a};p=this.getBinding(),u=p.createProjectionLayer(zt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),x=new fi(u.textureWidth,u.textureHeight,{format:ki,type:Qn,depthTexture:new ks(u.textureWidth,u.textureHeight,At,void 0,void 0,void 0,void 0,void 0,void 0,yt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let yt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:a};d=new XRWebGLLayer(s,n,yt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new fi(d.framebufferWidth,d.framebufferHeight,{format:ki,type:Qn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(o),Pt.setContext(s),Pt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function et(Z){for(let pt=0;pt<Z.removed.length;pt++){let yt=Z.removed[pt],At=A.indexOf(yt);At>=0&&(A[At]=null,E[At].disconnect(yt))}for(let pt=0;pt<Z.added.length;pt++){let yt=Z.added[pt],At=A.indexOf(yt);if(At===-1){for(let zt=0;zt<E.length;zt++)if(zt>=A.length){A.push(yt),At=zt;break}else if(A[zt]===null){A[zt]=yt,At=zt;break}if(At===-1)break}let mt=E[At];mt&&mt.connect(yt)}}function W(Z,pt){pt===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(pt.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let pt=Z.near,yt=Z.far;g.texture!==null&&(g.depthNear>0&&(pt=g.depthNear),g.depthFar>0&&(yt=g.depthFar)),G.near=N.near=R.near=pt,G.far=N.far=R.far=yt,(L!==G.near||k!==G.far)&&(s.updateRenderState({depthNear:G.near,depthFar:G.far}),L=G.near,k=G.far),G.layers.mask=Z.layers.mask|6,R.layers.mask=G.layers.mask&-5,N.layers.mask=G.layers.mask&-3;let At=Z.parent,mt=G.cameras;W(G,At);for(let zt=0;zt<mt.length;zt++)W(mt[zt],At);G.projectionMatrix.copy(R.projectionMatrix),G.projectionMatrixInverse.copy(R.projectionMatrixInverse),I===null&&Z.isPerspectiveCamera&&(I={camera:Z,fov:Z.fov,zoom:Z.zoom}),$(Z,G,At)};function $(Z,pt,yt){yt===null?Z.matrix.copy(pt.matrixWorld):(Z.matrix.copy(yt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(pt.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(pt.projectionMatrix),Z.projectionMatrixInverse.copy(pt.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Af*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(Z){l=Z,u!==null&&(u.fixedFoveation=Z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Z)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(G)},this.getCameraTexture=function(Z){return f[Z]};let tt=null;function St(Z,pt){if(h=pt.getViewerPose(c||r),_=pt,h!==null){let yt=h.views;d!==null&&(t.setRenderTargetFramebuffer(x,d.framebuffer),t.setRenderTarget(x));let At=!1;yt.length!==G.cameras.length&&(G.cameras.length=0,At=!0);for(let Nt=0;Nt<yt.length;Nt++){let fe=yt[Nt],ge=null;if(d!==null)ge=d.getViewport(fe);else{let qe=p.getViewSubImage(u,fe);ge=qe.viewport,Nt===0&&(t.setRenderTargetTextures(x,qe.colorTexture,qe.depthStencilTexture),t.setRenderTarget(x))}let Kt=O[Nt];Kt===void 0&&(Kt=new Hn,Kt.layers.enable(Nt),Kt.viewport=new Be,O[Nt]=Kt),Kt.matrix.fromArray(fe.transform.matrix),Kt.matrix.decompose(Kt.position,Kt.quaternion,Kt.scale),Kt.projectionMatrix.fromArray(fe.projectionMatrix),Kt.projectionMatrixInverse.copy(Kt.projectionMatrix).invert(),Kt.viewport.set(ge.x,ge.y,ge.width,ge.height),Nt===0&&(G.matrix.copy(Kt.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),At===!0&&G.cameras.push(Kt)}let mt=s.enabledFeatures;if(mt&&mt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&S){p=i.getBinding();let Nt=p.getDepthInformation(yt[0]);Nt&&Nt.isValid&&Nt.texture&&g.init(Nt,s.renderState)}if(mt&&mt.includes("camera-access")&&S){t.state.unbindTexture(),p=i.getBinding();for(let Nt=0;Nt<yt.length;Nt++){let fe=yt[Nt].camera;if(fe){let ge=f[fe];ge||(ge=new Uc,f[fe]=ge);let Kt=p.getCameraImage(fe);ge.sourceTexture=Kt}}}}for(let yt=0;yt<E.length;yt++){let At=A[yt],mt=E[yt];At!==null&&mt!==void 0&&mt.update(At,pt,c||r)}tt&&tt(Z,pt),pt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:pt}),_=null}let Pt=new B1;Pt.setAnimationLoop(St),this.setAnimationLoop=function(Z){tt=Z},this.dispose=function(){}}},TD=new Ie,Y1=new Ft;Y1.set(-1,0,0,0,1,0,0,0,1);function ED(e,t){function n(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function i(g,f){f.color.getRGB(g.fogColor.value,e_(e)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function s(g,f,m,y,x){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?a(g,f):f.isMeshLambertMaterial?(a(g,f),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(a(g,f),p(g,f)):f.isMeshPhongMaterial?(a(g,f),h(g,f),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(a(g,f),u(g,f),f.isMeshPhysicalMaterial&&d(g,f,x)):f.isMeshMatcapMaterial?(a(g,f),_(g,f)):f.isMeshDepthMaterial?a(g,f):f.isMeshDistanceMaterial?(a(g,f),S(g,f)):f.isMeshNormalMaterial?a(g,f):f.isLineBasicMaterial?(r(g,f),f.isLineDashedMaterial&&o(g,f)):f.isPointsMaterial?l(g,f,m,y):f.isSpriteMaterial?c(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function a(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,n(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,n(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===Vn&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,n(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===Vn&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,n(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,n(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);let m=t.get(f),y=m.envMap,x=m.envMapRotation;y&&(g.envMap.value=y,g.envMapRotation.value.setFromMatrix4(TD.makeRotationFromEuler(x)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Y1),g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap&&(g.lightMap.value=f.lightMap,g.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,g.lightMapTransform)),f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,g.aoMapTransform))}function r(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,n(f.map,g.mapTransform))}function o(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function l(g,f,m,y){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*m,g.scale.value=y*.5,f.map&&(g.map.value=f.map,n(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function c(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,n(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function h(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function p(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function u(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,g.roughnessMapTransform)),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function d(g,f,m){g.ior.value=f.ior,f.diffuseRoughness>0&&(g.diffuseRoughness.value=f.diffuseRoughness,f.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=f.diffuseRoughnessMap,n(f.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Vn&&g.clearcoatNormalScale.value.negate())),f.dispersion>0&&(g.dispersion.value=f.dispersion),f.retroreflectivity>0&&(g.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=f.iridescenceThicknessMaximum,f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=m.texture,g.transmissionSamplerSize.value.set(m.width,m.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(g.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(g.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,f){f.matcap&&(g.matcap.value=f.matcap)}function S(g,f){let m=t.get(f).light;g.referencePosition.value.setFromMatrixPosition(m.matrixWorld),g.nearDistance.value=m.shadow.camera.near,g.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function AD(e,t,n,i){let s={},a={};function r(m,y){let x=y.program;i.uniformBlockBinding(m,x,s[m.id])}function o(m,y){let x=s[m.id];x===void 0&&(_(m),x=l(m),s[m.id]=x,m.addEventListener("dispose",g));let E=y.program;i.updateUBOMapping(m,E);let A=t.render.frame;a[m.id]!==A&&(c(m),a[m.id]=A)}function l(m){let y=e.createBuffer(),x=m.__size,E=m.usage;return e.bindBuffer(e.UNIFORM_BUFFER,y),e.bufferData(e.UNIFORM_BUFFER,x,E),e.bindBuffer(e.UNIFORM_BUFFER,null),y}function c(m){let y=s[m.id],x=m.uniforms,E=m.__cache;e.bindBuffer(e.UNIFORM_BUFFER,y);for(let A=0,v=x.length;A<v;A++){let T=x[A];if(Array.isArray(T))for(let I=0,R=T.length;I<R;I++)h(T[I],A,I,E);else h(T,A,0,E)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function h(m,y,x,E){if(u(m,y,x,E)===!0){let A=m.__offset,v=m.value;if(Array.isArray(v)){let T=0;for(let I=0;I<v.length;I++){let R=v[I],N=S(R,!0);p(R,m.__data,T),T+=N.storage/Float32Array.BYTES_PER_ELEMENT}}else p(v,m.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,A,m.__data)}}function p(m,y,x){typeof m=="number"||typeof m=="boolean"?y[x]=m:m.isMatrix3?(y[x]=m.elements[0],y[x+1]=m.elements[1],y[x+2]=m.elements[2],y[x+3]=0,y[x+4]=m.elements[3],y[x+5]=m.elements[4],y[x+6]=m.elements[5],y[x+7]=0,y[x+8]=m.elements[6],y[x+9]=m.elements[7],y[x+10]=m.elements[8],y[x+11]=0):ArrayBuffer.isView(m)?y.set(m.subarray(0,y.length-x),x):m.toArray(y,x)}function u(m,y,x,E){let A=m.value,v=y+"_"+x;if(Array.isArray(A)){E[v]===void 0&&(E[v]=[]);let T=E[v],I=!1;for(let R=0;R<A.length;R++)d(A[R],T,R)===!0&&(I=!0);return I}return d(A,E,v)}function d(m,y,x){if(y[x]===void 0)return typeof m=="number"||typeof m=="boolean"?y[x]=m:ArrayBuffer.isView(m)?y[x]=m.slice():y[x]=m.clone(),!0;{let E=y[x];if(typeof m=="number"||typeof m=="boolean"){if(E!==m)return y[x]=m,!0}else{if(ArrayBuffer.isView(m))return!0;if(E.equals(m)===!1)return E.copy(m),!0}}return!1}function _(m){let y=m.uniforms,x=0,E=16;for(let v=0,T=y.length;v<T;v++){let I=Array.isArray(y[v])?y[v]:[y[v]];for(let R=0,N=I.length;R<N;R++){let O=I[R],G=Array.isArray(O.value)?O.value:[O.value],L=Array.isArray(y[v])||Array.isArray(O.value),k=x;for(let F=0,et=G.length;F<et;F++){let W=G[F],$=S(W,L),tt=x%E,St=tt%$.boundary,Pt=tt+St;x+=St,Pt!==0&&E-Pt<$.storage&&(x+=E-Pt),F===0&&(k=x),x+=$.storage}let X=O.type==="int"?Int32Array:O.type==="uint"?Uint32Array:Float32Array;O.__data=new X((x-k)/Float32Array.BYTES_PER_ELEMENT),O.__offset=k}}let A=x%E;return A>0&&(x+=E-A),m.__size=x,m.__cache={},this}function S(m,y){let x={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(x.boundary=4,x.storage=4):m.isVector2?(x.boundary=8,x.storage=8):m.isVector3||m.isColor?(x.boundary=16,x.storage=12):m.isVector4?(x.boundary=16,x.storage=16):m.isMatrix3?(x.boundary=16,x.storage=48):m.isMatrix4?(x.boundary=16,x.storage=64):m.isTexture?Ut("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(m)?(x.boundary=16,x.storage=m.byteLength):Ut("WebGLRenderer: Unsupported uniform value type.",m),y===!0&&(x.boundary=16,x.storage=Math.ceil(x.storage/16)*16),x}function g(m){let y=m.target;y.removeEventListener("dispose",g),e.deleteBuffer(s[y.id]),delete s[y.id],delete a[y.id]}function f(){for(let m in s)e.deleteBuffer(s[m]);s={},a={}}return{bind:r,update:o,dispose:f}}var wD=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ps=null;function RD(){return ps===null&&(ps=new Nf(wD,16,16,Ga,Vi),ps.name="DFG_LUT",ps.minFilter=je,ps.magFilter=je,ps.wrapS=ls,ps.wrapT=ls,ps.generateMipmaps=!1,ps.needsUpdate=!0),ps}var Pd=class{constructor(t={}){let{canvas:n=o1(),context:i=null,depth:s=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:u=!1,outputBufferType:d=Qn}=t;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=r;let S=d,g=new Set([ed,td,$f]),f=new Set([Qn,Hi,ol,Cr,Qf,jf]),m=new Uint32Array(4),y=new Int32Array(4),x={textures:[],min:[],max:[],resolution:[]},E=null,A=null,v=[],T=[],I=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ds,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,N=!1,O=null,G=null,L=null,k=null;this._outputColorSpace=Tn;let X=0,F=0,et=null,W=-1,$=null,tt=new Be,St=new Be,Pt=null,Z=new Zt(0),pt=0,yt=n.width,At=n.height,mt=1,zt=null,ze=null,Nt=new Be(0,0,yt,At),fe=new Be(0,0,yt,At),ge=!1,Kt=new Oa,qe=new Df,Fe=!1,mn=!1,dt=new Ie,Wt=new H,Ht=new Be,le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ye=!1;function Rt(){return et===null?mt:1}let D=i;function Qt(b,U){return n.getContext(b,U)}let Bt,jt,st,tn,Lt,Gt,w,M,B,nt,j,rt,ht,Y,J,lt,C,K,q,ct,at,ot,Et;try{let b={alpha:!0,depth:s,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${"187"}`),n.addEventListener("webglcontextlost",Ct,!1),n.addEventListener("webglcontextrestored",qt,!1),n.addEventListener("webglcontextcreationerror",gt,!1),D===null){let U="webgl2";if(D=Qt(U,b),D===null)throw Qt(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Yt()}catch(b){throw n.removeEventListener("webglcontextlost",Ct,!1),n.removeEventListener("webglcontextrestored",qt,!1),n.removeEventListener("webglcontextcreationerror",gt,!1),Ot("WebGLRenderer: "+b.message),b}function Yt(){Bt=new F2(D),Bt.init(),at=new SD(D,Bt),jt=new R2(D,Bt,t,at),st=new yD(D,Bt),jt.reversedDepthBuffer&&u&&st.buffers.depth.setReversed(!0),G=D.createFramebuffer(),L=D.createFramebuffer(),k=D.createFramebuffer(),tn=new V2(D),Lt=new aD,Gt=new xD(D,Bt,st,Lt,jt,at,tn),w=new z2(R),M=new XR(D),ot=new A2(D,M),B=new H2(D,M,tn,ot),nt=new X2(D,B,M,ot,tn),K=new k2(D,jt,Gt),J=new C2(Lt),j=new sD(R,w,Bt,jt,ot,J),rt=new ED(R,Lt),ht=new oD,Y=new dD(Bt),C=new E2(R,w,st,nt,_,l),lt=new vD(R,nt,jt),Et=new AD(D,tn,jt,st),q=new w2(D,Bt,tn),ct=new G2(D,Bt,tn),tn.programs=j.programs,R.capabilities=jt,R.extensions=Bt,R.properties=Lt,R.renderLists=ht,R.shadowMap=lt,R.state=st,R.info=tn}S!==Qn&&(I=new q2(S,n.width,n.height,o,s,a));let it=new p_(R,D);this.xr=it,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let b=Bt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=Bt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return mt},this.setPixelRatio=function(b){b!==void 0&&(mt=b,this.setSize(yt,At,!1))},this.getSize=function(b){return b.set(yt,At)},this.setSize=function(b,U,V=!0){if(it.isPresenting){Ut("WebGLRenderer: Can't change size while VR device is presenting.");return}yt=b,At=U,n.width=Math.floor(b*mt),n.height=Math.floor(U*mt),V===!0&&(n.style.width=b+"px",n.style.height=U+"px"),I!==null&&I.setSize(n.width,n.height),this.setViewport(0,0,b,U)},this.getDrawingBufferSize=function(b){return b.set(yt*mt,At*mt).floor()},this.setDrawingBufferSize=function(b,U,V){yt=b,At=U,mt=V,n.width=Math.floor(b*V),n.height=Math.floor(U*V),this.setViewport(0,0,b,U)},this.setEffects=function(b){if(S===Qn){Ot("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let U=0;U<b.length;U++)if(b[U].isOutputPass===!0){Ut("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(tt)},this.getViewport=function(b){return b.copy(Nt)},this.setViewport=function(b,U,V,P){b.isVector4?Nt.set(b.x,b.y,b.z,b.w):Nt.set(b,U,V,P),st.viewport(tt.copy(Nt).multiplyScalar(Rt()).round())},this.getScissor=function(b){return b.copy(fe)},this.setScissor=function(b,U,V,P){b.isVector4?fe.set(b.x,b.y,b.z,b.w):fe.set(b,U,V,P),st.scissor(St.copy(fe).multiplyScalar(Rt()).round())},this.getScissorTest=function(){return ge},this.setScissorTest=function(b){st.setScissorTest(ge=b)},this.setOpaqueSort=function(b){zt=b},this.setTransparentSort=function(b){ze=b},this.getClearColor=function(b){return b.copy(C.getClearColor())},this.setClearColor=function(){C.setClearColor(...arguments)},this.getClearAlpha=function(){return C.getClearAlpha()},this.setClearAlpha=function(){C.setClearAlpha(...arguments)},this.clear=function(b=!0,U=!0,V=!0){let P=0;if(b){let z=!1;if(et!==null){let ft=et.texture.format;z=g.has(ft)}if(z){let ft=et.texture.type,xt=f.has(ft),ut=C.getClearColor(),vt=C.getClearAlpha(),Tt=ut.r,kt=ut.g,ie=ut.b;xt?(m[0]=Tt,m[1]=kt,m[2]=ie,m[3]=vt,D.clearBufferuiv(D.COLOR,0,m)):(y[0]=Tt,y[1]=kt,y[2]=ie,y[3]=vt,D.clearBufferiv(D.COLOR,0,y))}else P|=D.COLOR_BUFFER_BIT}U&&(P|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),V&&(P|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P!==0&&D.clear(P)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),O=b},this.dispose=function(){n.removeEventListener("webglcontextlost",Ct,!1),n.removeEventListener("webglcontextrestored",qt,!1),n.removeEventListener("webglcontextcreationerror",gt,!1),C.dispose(),ht.dispose(),Y.dispose(),Gt.dispose(),Lt.dispose(),w.dispose(),nt.dispose(),B.dispose(),ot.dispose(),Et.dispose(),j.dispose(),it.dispose(),it.removeEventListener("sessionstart",T_),it.removeEventListener("sessionend",E_),Xa.stop()};function Ct(b){b.preventDefault(),$0("WebGLRenderer: Context Lost."),N=!0}function qt(){$0("WebGLRenderer: Context Restored."),N=!1;let b=tn.autoReset,U=lt.enabled,V=lt.autoUpdate,P=lt.needsUpdate,z=lt.type;Yt(),tn.autoReset=b,lt.enabled=U,lt.autoUpdate=V,lt.needsUpdate=P,lt.type=z}function gt(b){Ot("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function xe(b){let U=b.target;U.removeEventListener("dispose",xe),on(U)}function on(b){Ys(b),Lt.remove(b)}function Ys(b){let U=Lt.get(b).programs;U!==void 0&&(U.forEach(function(V){j.releaseProgram(V)}),b.isShaderMaterial&&j.releaseShaderCache(b))}this.renderBufferDirect=function(b,U,V,P,z,ft){U===null&&(U=le);let xt=z.isMesh&&z.matrixWorld.determinantAffine()<0,ut=MT(b,U,V,P,z);st.setMaterial(P,xt);let vt=V.index,Tt=1;if(P.wireframe===!0){if(vt=B.getWireframeAttribute(V),vt===void 0)return;Tt=2}let kt=V.drawRange,ie=V.attributes.position,Mt=kt.start*Tt,se=(kt.start+kt.count)*Tt;ft!==null&&(Mt=Math.max(Mt,ft.start*Tt),se=Math.min(se,(ft.start+ft.count)*Tt)),vt!==null?(Mt=Math.max(Mt,0),se=Math.min(se,vt.count)):ie!=null&&(Mt=Math.max(Mt,0),se=Math.min(se,ie.count));let Ye=se-Mt;if(Ye<0||Ye===1/0)return;ot.setup(z,P,ut,V,vt);let Re,Ee=q;if(vt!==null&&(Re=M.get(vt),Ee=ct,Ee.setIndex(Re)),z.isMesh)P.wireframe===!0?(st.setLineWidth(P.wireframeLinewidth*Rt()),Ee.setMode(D.LINES)):Ee.setMode(D.TRIANGLES);else if(z.isLine){let En=P.linewidth;En===void 0&&(En=1),st.setLineWidth(En*Rt()),z.isLineSegments?Ee.setMode(D.LINES):z.isLineLoop?Ee.setMode(D.LINE_LOOP):Ee.setMode(D.LINE_STRIP)}else z.isPoints?Ee.setMode(D.POINTS):z.isSprite&&Ee.setMode(D.TRIANGLES);if(z.isBatchedMesh)if(Bt.get("WEBGL_multi_draw"))Ee.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let En=z._multiDrawStarts,bt=z._multiDrawCounts,In=z._multiDrawCount,de=vt?M.get(vt).bytesPerElement:1,Wa=Lt.get(P).currentProgram.getUniforms();for(let An=0;An<In;An++)Wa.setValue(D,"_gl_DrawID",An),Ee.render(En[An]/de,bt[An])}else if(z.isInstancedMesh)Ee.renderInstances(Mt,Ye,z.count);else if(V.isInstancedBufferGeometry){let En=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,bt=Math.min(V.instanceCount,En);Ee.renderInstances(Mt,Ye,bt)}else Ee.render(Mt,Ye)};function b_(b,U,V,P){O!==null&&b.isNodeMaterial&&O.setObject(P,b),Fe===!0&&J.setState(b,V,!1),b.transparent===!0&&b.side===pi&&b.forceSinglePass===!1?(b.side=Vn,b.needsUpdate=!0,fl(b,U,P),b.side=Ha,b.needsUpdate=!0,fl(b,U,P),b.side=pi):fl(b,U,P)}this.compile=function(b,U,V=null){V===null&&(V=b),O!==null&&O.renderStart(b,U,V),A=Y.get(V),A.init(U),T.push(A),V.traverseVisible(function(z){z.isLight&&z.layers.test(U.layers)&&(A.pushLight(z),z.castShadow&&A.pushShadow(z))}),b!==V&&b.traverseVisible(function(z){z.isLight&&z.layers.test(U.layers)&&(A.pushLight(z),z.castShadow&&A.pushShadow(z))}),A.setupLights(),O!==null&&O.updateLights(A.state.lightsArray),mn=this.localClippingEnabled,Fe=J.init(this.clippingPlanes,mn),Fe===!0&&J.setGlobalState(this.clippingPlanes,U),O!==null&&lt.render(A.state.shadowsArray,V,U);let P=new Set;return b.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let ft=z.material;if(ft)if(Array.isArray(ft))for(let xt=0;xt<ft.length;xt++){let ut=ft[xt];b_(ut,V,U,z),P.add(ut)}else b_(ft,V,U,z),P.add(ft)}),A=T.pop(),O!==null&&O.renderEnd(),P},this.compileAsync=function(b,U,V=null){let P=this.compile(b,U,V);return new Promise(z=>{function ft(){if(P.forEach(function(xt){let vt=Lt.get(xt).currentProgram;(vt===void 0||vt.isReady())&&P.delete(xt)}),P.size===0){z(b);return}setTimeout(ft,10)}Bt.get("KHR_parallel_shader_compile")!==null?ft():setTimeout(ft,10)})};let Xd=null;function xT(b){Xd&&Xd(b)}function T_(){Xa.stop()}function E_(){Xa.start()}let Xa=new B1;Xa.setAnimationLoop(xT),typeof self<"u"&&Xa.setContext(self),this.setAnimationLoop=function(b){Xd=b,it.setAnimationLoop(b),b===null?Xa.stop():Xa.start()},it.addEventListener("sessionstart",T_),it.addEventListener("sessionend",E_),this.render=function(b,U){if(U!==void 0&&U.isCamera!==!0){Ot("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;O!==null&&O.renderStart(b,U);let V=it.enabled===!0&&it.isPresenting===!0,P=I!==null&&(et===null||V)&&I.begin(R,et);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),it.enabled===!0&&it.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(it.cameraAutoUpdate===!0&&it.updateCamera(U),U=it.getCamera()),b.isScene===!0&&b.onBeforeRender(R,b,U,et),A=Y.get(b,T.length),A.init(U),A.state.textureUnits=Gt.getTextureUnits(),T.push(A),dt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),U.isArrayCamera?qe.setFromArrayCamera(U):Kt.setFromProjectionMatrix(dt,Ai,U.reversedDepth),mn=this.localClippingEnabled,Fe=J.init(this.clippingPlanes,mn),E=ht.get(b,v.length),E.init(),v.push(E),this.info.render.frame++,it.enabled===!0&&it.isPresenting===!0){let xt=R.xr.getDepthSensingMesh();xt!==null&&Wd(xt,U,-1/0,R.sortObjects)}Wd(b,U,0,R.sortObjects),E.finish(),O!==null&&O.updateLights(A.state.lightsArray),R.sortObjects===!0&&E.sort(zt,ze),ye=it.enabled===!1||it.isPresenting===!1||it.hasDepthSensing()===!1,ye&&C.addToRenderList(E,b),this.info.autoReset===!0&&this.info.reset(),Fe===!0&&J.beginShadows();let z=A.state.shadowsArray;if(lt.render(z,b,U),Fe===!0&&J.endShadows(),(P&&I.hasRenderPass())===!1){let xt=E.opaque,ut=E.transmissive;if(A.setupLights(),U.isArrayCamera){let vt=U.cameras;if(ut.length>0)for(let Tt=0,kt=vt.length;Tt<kt;Tt++){let ie=vt[Tt];w_(xt,ut,b,ie)}ye&&C.render(b);for(let Tt=0,kt=vt.length;Tt<kt;Tt++){let ie=vt[Tt];A_(E,b,ie,ie.viewport)}}else ut.length>0&&w_(xt,ut,b,U),ye&&C.render(b),A_(E,b,U)}et!==null&&F===0&&(Gt.updateMultisampleRenderTarget(et),Gt.updateRenderTargetMipmap(et)),P&&I.end(R),b.isScene===!0&&b.onAfterRender(R,b,U),ot.resetDefaultState(),W=-1,$=null,T.pop(),T.length>0?(A=T[T.length-1],Gt.setTextureUnits(A.state.textureUnits),Fe===!0&&J.setGlobalState(R.clippingPlanes,A.state.camera)):A=null,v.pop(),v.length>0?E=v[v.length-1]:E=null,O!==null&&O.renderEnd()};function Wd(b,U,V,P){if(b.visible===!1)return;if(b.layers.test(U.layers)){if(b.isGroup)V=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(U);else if(b.isLight)A.pushLight(b),b.castShadow&&A.pushShadow(b);else if(b.isSprite){let xt=U.isArrayCamera?qe:Kt;if(!b.frustumCulled||b.intersectsFrustum(xt)){P&&Ht.setFromMatrixPosition(b.matrixWorld).applyMatrix4(dt);let ut=nt.update(b),vt=b.material;vt.visible&&E.push(b,ut,vt,V,Ht.z,null,U)}}else if(b.isMesh||b.isLine||b.isPoints){let xt=U.isArrayCamera?qe:Kt;if(!b.frustumCulled||b.intersectsFrustum(xt)){let ut=nt.update(b),vt=b.material;if(P&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ht.copy(b.boundingSphere.center)):(ut.boundingSphere===null&&ut.computeBoundingSphere(),Ht.copy(ut.boundingSphere.center)),Ht.applyMatrix4(b.matrixWorld).applyMatrix4(dt)),Array.isArray(vt)){let Tt=ut.groups;for(let kt=0,ie=Tt.length;kt<ie;kt++){let Mt=Tt[kt],se=vt[Mt.materialIndex];se&&se.visible&&E.push(b,ut,se,V,Ht.z,Mt,U)}}else vt.visible&&E.push(b,ut,vt,V,Ht.z,null,U)}}}let ft=b.children;for(let xt=0,ut=ft.length;xt<ut;xt++)Wd(ft[xt],U,V,P)}function A_(b,U,V,P){let{opaque:z,transmissive:ft,transparent:xt}=b;A.setupLightsView(V),Fe===!0&&J.setGlobalState(R.clippingPlanes,V),P&&st.viewport(tt.copy(P)),z.length>0&&su(z,U,V),ft.length>0&&su(ft,U,V),xt.length>0&&su(xt,U,V),st.buffers.depth.setTest(!0),st.buffers.depth.setMask(!0),st.buffers.color.setMask(!0),st.setPolygonOffset(!1)}function w_(b,U,V,P){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[P.id]===void 0){let Mt=Bt.has("EXT_color_buffer_half_float")||Bt.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[P.id]=new fi(1,1,{generateMipmaps:!0,type:Mt?Vi:Qn,minFilter:Xs,samples:Math.max(4,jt.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:re.workingColorSpace})}let ft=A.state.transmissionRenderTarget[P.id],xt=P.viewport||tt;ft.setSize(xt.z*R.transmissionResolutionScale,xt.w*R.transmissionResolutionScale);let ut=R.getRenderTarget(),vt=R.getActiveCubeFace(),Tt=R.getActiveMipmapLevel();R.setRenderTarget(ft),R.getClearColor(Z),pt=R.getClearAlpha(),pt<1&&R.setClearColor(16777215,.5),R.clear(),ye&&C.render(V);let kt=R.toneMapping;R.toneMapping=ds;let ie=P.viewport;if(P.viewport!==void 0&&(P.viewport=void 0),A.setupLightsView(P),Fe===!0&&J.setGlobalState(R.clippingPlanes,P),su(b,V,P),Gt.updateMultisampleRenderTarget(ft),Gt.updateRenderTargetMipmap(ft),Bt.has("WEBGL_multisampled_render_to_texture")===!1){let Mt=!1;for(let se=0,Ye=U.length;se<Ye;se++){let Re=U[se],{object:Ee,geometry:En,material:bt,group:In}=Re;if(bt.side===pi&&Ee.layers.test(P.layers)){let de=bt.side;bt.side=Vn,bt.needsUpdate=!0,R_(Ee,V,P,En,bt,In),bt.side=de,bt.needsUpdate=!0,Mt=!0}}Mt===!0&&(Gt.updateMultisampleRenderTarget(ft),Gt.updateRenderTargetMipmap(ft))}R.setRenderTarget(ut,vt,Tt),R.setClearColor(Z,pt),ie!==void 0&&(P.viewport=ie),R.toneMapping=kt}function su(b,U,V){let P=U.isScene===!0?U.overrideMaterial:null;for(let z=0,ft=b.length;z<ft;z++){let xt=b[z],{object:ut,geometry:vt,group:Tt}=xt,kt=xt.material;kt.allowOverride===!0&&P!==null&&(kt=P),ut.layers.test(V.layers)&&R_(ut,U,V,vt,kt,Tt)}}function R_(b,U,V,P,z,ft){O!==null&&z.isNodeMaterial&&O.setObject(b,z),b.onBeforeRender(R,U,V,P,z,ft),b.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),z.onBeforeRender(R,U,V,P,b,ft),z.transparent===!0&&z.side===pi&&z.forceSinglePass===!1?(z.side=Vn,z.needsUpdate=!0,R.renderBufferDirect(V,U,P,z,b,ft),z.side=Ha,z.needsUpdate=!0,R.renderBufferDirect(V,U,P,z,b,ft),z.side=pi):R.renderBufferDirect(V,U,P,z,b,ft),b.onAfterRender(R,U,V,P,z,ft)}function C_(b){let U=0;for(let V of b)V.texture!==null&&U++;return U}function fl(b,U,V){U.isScene!==!0&&(U=le);let P=Lt.get(b),z=A.state.lights,ft=A.state.shadowsArray,xt=z.state.version,ut=j.getParameters(b,z.state,ft,U,V,A.state.lightProbeGridArray),vt=j.getProgramCacheKey(ut),Tt=P.programs;P.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?U.environment:null,P.fog=U.fog;let kt=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;P.envMap=w.get(b.envMap||P.environment,kt),P.envMapRotation=P.environment!==null&&b.envMap===null?U.environmentRotation:b.envMapRotation,Tt===void 0&&(b.addEventListener("dispose",xe),Tt=new Map,P.programs=Tt,P.programVariants=new Map);let ie=Tt.get(vt);if(ie!==void 0){if(P.currentProgram===ie&&P.lightsStateVersion===xt)return D_(b,ut),ie}else ut.uniforms=j.getUniforms(b),O!==null&&b.isNodeMaterial&&O.build(b,V,ut),b.onBeforeCompile(ut,R),ie=j.acquireProgram(ut,vt),Tt.set(vt,ie),P.uniforms=ut.uniforms;let Mt=P.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Mt.clippingPlanes=J.uniform),D_(b,ut),P.needsLights=TT(b),P.lightsStateVersion=xt,P.needsLights&&(Mt.ambientLightColor.value=z.state.ambient,Mt.lightProbe.value=z.state.probe,Mt.sunLights.value=z.state.sun,Mt.sunLightShadows.value=z.state.sunShadow,Mt.directionalLights.value=z.state.directional,Mt.directionalLightShadows.value=z.state.directionalShadow,Mt.spotLights.value=z.state.spot,Mt.spotLightShadows.value=z.state.spotShadow,Mt.rectAreaLights.value=z.state.rectArea,Mt.ltc_1.value=z.state.rectAreaLTC1,Mt.ltc_2.value=z.state.rectAreaLTC2,Mt.pointLights.value=z.state.point,Mt.pointLightShadows.value=z.state.pointShadow,Mt.hemisphereLights.value=z.state.hemi,Mt.sunShadowMatrix.value=z.state.sunShadowMatrix,Mt.sunShadowCascade.value=z.state.sunShadowCascade,Mt.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Mt.spotLightMatrix.value=z.state.spotLightMatrix,Mt.spotLightMap.value=z.state.spotLightMap,Mt.pointShadowMatrix.value=z.state.pointShadowMatrix),P.numLightProbeGrids=C_(A.state.lightProbeGridArray),P.currentProgram=ie,P.uniformsList=null,ie}function ST(b,U,V,P,z){let ft=Lt.get(b),xt=ft.currentProgram.id+","+P+","+z,ut=ft.programVariants.get(xt);return ut===void 0?(ut=fl(b,U,V),ft.programVariants.set(xt,ut)):(ft.currentProgram=ut,ft.uniformsList=null,ft.outputColorSpace=P,ft.toneMapping=z),ut}function N_(b){if(b.uniformsList===null){let U=b.currentProgram.getUniforms();b.uniformsList=ll.seqWithValue(U.seq,b.uniforms)}return b.uniformsList}function D_(b,U){let V=Lt.get(b);V.outputColorSpace=U.outputColorSpace,V.batching=U.batching,V.batchingColor=U.batchingColor,V.instancing=U.instancing,V.instancingColor=U.instancingColor,V.instancingMorph=U.instancingMorph,V.skinning=U.skinning,V.morphTargets=U.morphTargets,V.morphNormals=U.morphNormals,V.morphColors=U.morphColors,V.morphTargetsCount=U.morphTargetsCount,V.numClippingPlanes=U.numClippingPlanes,V.numIntersection=U.numClipIntersection,V.vertexAlphas=U.vertexAlphas,V.vertexTangents=U.vertexTangents,V.toneMapping=U.toneMapping}function MT(b,U,V,P,z){U.isScene!==!0&&(U=le),Gt.resetTextureUnits();let ft=U.fog,xt=P.isMeshStandardMaterial||P.isMeshLambertMaterial||P.isMeshPhongMaterial?U.environment:null,ut=et===null?R.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:re.workingColorSpace,vt=P.isMeshStandardMaterial||P.isMeshLambertMaterial&&!P.envMap||P.isMeshPhongMaterial&&!P.envMap,Tt=w.get(P.envMap||xt,vt),kt=P.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,ie=!!V.attributes.tangent&&(!!P.normalMap||P.anisotropy>0),Mt=!!V.morphAttributes.position,se=!!V.morphAttributes.normal,Ye=!!V.morphAttributes.color,Re=ds;P.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(Re=R.toneMapping);let Ee=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,En=Ee!==void 0?Ee.length:0,bt=Lt.get(P),In=A.state.lights;if(Fe===!0&&(mn===!0||b!==$)){let He=b===$&&P.id===W;J.setState(P,b,He)}let de=!1,Wa=!1;P.version===bt.__version?bt.needsLights&&bt.lightsStateVersion!==In.state.version||z.isBatchedMesh&&bt.batching===!1||!z.isBatchedMesh&&bt.batching===!0||z.isBatchedMesh&&bt.batchingColor===!0&&z._colorsTexture===null||z.isBatchedMesh&&bt.batchingColor===!1&&z._colorsTexture!==null||z.isInstancedMesh&&bt.instancing===!1||!z.isInstancedMesh&&bt.instancing===!0||z.isSkinnedMesh&&bt.skinning===!1||!z.isSkinnedMesh&&bt.skinning===!0||z.isInstancedMesh&&bt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&bt.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&bt.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&bt.instancingMorph===!1&&z.morphTexture!==null||bt.envMap!==Tt||P.fog===!0&&bt.fog!==ft||bt.numClippingPlanes!==void 0&&(bt.numClippingPlanes!==J.numPlanes||bt.numIntersection!==J.numIntersection)||bt.vertexAlphas!==kt||bt.vertexTangents!==ie||bt.morphTargets!==Mt||bt.morphNormals!==se||bt.morphColors!==Ye||bt.morphTargetsCount!==En||bt.numLightProbeGrids!==C_(A.state.lightProbeGridArray)?de=!0:(bt.outputColorSpace!==ut||bt.toneMapping!==Re)&&(Wa=!0):(de=!0,bt.__version=P.version);let An=bt.currentProgram;(de===!0||Wa===!0)&&(An=Wa===!0?ST(P,U,z,ut,Re):fl(P,U,z),O&&P.isNodeMaterial&&O.onUpdateProgram(P,An,bt));let au=!1,Zs=!1,qa=!1,ce=An.getUniforms(),gn=bt.uniforms;if(st.useProgram(An.program)&&(au=!0,Zs=!0,qa=!0),P.id!==W&&(W=P.id,Zs=!0),au||$!==b){st.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),ce.setValue(D,"projectionMatrix",b.projectionMatrix),ce.setValue(D,"viewMatrix",b.matrixWorldInverse);let ln=ce.map.cameraPosition;ln!==void 0&&ln.setValue(D,Wt.setFromMatrixPosition(b.matrixWorld)),jt.logarithmicDepthBuffer&&ce.setValue(D,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(P.isMeshPhongMaterial||P.isMeshToonMaterial||P.isMeshLambertMaterial||P.isMeshBasicMaterial||P.isMeshStandardMaterial||P.isShaderMaterial)&&ce.setValue(D,"isOrthographic",b.isOrthographicCamera===!0),$!==b&&($=b,Zs=!0,qa=!0)}if(bt.needsLights&&(In.state.sunShadowMap.length>0&&ce.setValue(D,"sunShadowMap",In.state.sunShadowMap,Gt),In.state.directionalShadowMap.length>0&&ce.setValue(D,"directionalShadowMap",In.state.directionalShadowMap,Gt),In.state.spotShadowMap.length>0&&ce.setValue(D,"spotShadowMap",In.state.spotShadowMap,Gt),In.state.pointShadowMap.length>0&&ce.setValue(D,"pointShadowMap",In.state.pointShadowMap,Gt)),z.isSkinnedMesh){ce.setOptional(D,z,"bindMatrix"),ce.setOptional(D,z,"bindMatrixInverse");let He=z.skeleton;He&&(He.boneTexture===null&&He.computeBoneTexture(),ce.setValue(D,"boneTexture",He.boneTexture,Gt))}z.isBatchedMesh&&(ce.setOptional(D,z,"batchingTexture"),ce.setValue(D,"batchingTexture",z._matricesTexture,Gt),ce.setOptional(D,z,"batchingIdTexture"),ce.setValue(D,"batchingIdTexture",z._indirectTexture,Gt),ce.setOptional(D,z,"batchingColorTexture"),z._colorsTexture!==null&&ce.setValue(D,"batchingColorTexture",z._colorsTexture,Gt));let Ri=V.morphAttributes;if((Ri.position!==void 0||Ri.normal!==void 0||Ri.color!==void 0)&&K.update(z,V,An),(Zs||bt.receiveShadow!==z.receiveShadow)&&(bt.receiveShadow=z.receiveShadow,ce.setValue(D,"receiveShadow",z.receiveShadow)),(P.isMeshStandardMaterial||P.isMeshLambertMaterial||P.isMeshPhongMaterial)&&P.envMap===null&&U.environment!==null&&(gn.envMapIntensity.value=U.environmentIntensity),gn.dfgLUT!==void 0&&(gn.dfgLUT.value=RD()),Zs){if(ce.setValue(D,"toneMappingExposure",R.toneMappingExposure),bt.needsLights&&bT(gn,qa),ft&&P.fog===!0&&rt.refreshFogUniforms(gn,ft),rt.refreshMaterialUniforms(gn,P,mt,At,A.state.transmissionRenderTarget[b.id]),bt.needsLights&&bt.numLightProbeGrids>0){let He=x,ln=0;for(let _s of A.state.lightProbeGridArray)_s.texture!==null&&(He.textures[ln]=_s.texture,He.min[ln]=_s.boundingBox.min,He.max[ln]=_s.boundingBox.max,He.resolution[ln]=_s.resolution,ln++);for(let _s in He)He[_s].length=ln;gn.probesSH.value=He.textures,gn.probesMin.value=He.min,gn.probesMax.value=He.max,gn.probesResolution.value=He.resolution}ll.upload(D,N_(bt),gn,Gt)}if(P.isShaderMaterial&&P.uniformsNeedUpdate===!0&&(ll.upload(D,N_(bt),gn,Gt),P.uniformsNeedUpdate=!1),P.isSpriteMaterial&&ce.setValue(D,"center",z.center),ce.setValue(D,"modelViewMatrix",z.modelViewMatrix),ce.setValue(D,"normalMatrix",z.normalMatrix),ce.setValue(D,"modelMatrix",z.matrixWorld),P.uniformsGroups!==void 0){let He=P.uniformsGroups;for(let ln=0,_s=He.length;ln<_s;ln++){let U_=He[ln];Et.update(U_,An),Et.bind(U_,An)}}return An}function bT(b,U){b.ambientLightColor.needsUpdate=U,b.lightProbe.needsUpdate=U,b.sunLights.needsUpdate=U,b.sunLightShadows.needsUpdate=U,b.directionalLights.needsUpdate=U,b.directionalLightShadows.needsUpdate=U,b.pointLights.needsUpdate=U,b.pointLightShadows.needsUpdate=U,b.spotLights.needsUpdate=U,b.spotLightShadows.needsUpdate=U,b.rectAreaLights.needsUpdate=U,b.hemisphereLights.needsUpdate=U}function TT(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return et},this.setRenderTargetTextures=function(b,U,V){let P=Lt.get(b);P.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,P.__autoAllocateDepthBuffer===!1&&(P.__useRenderToTexture=!1),Lt.get(b.texture).__webglTexture=U,Lt.get(b.depthTexture).__webglTexture=P.__autoAllocateDepthBuffer?void 0:V,P.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,U){let V=Lt.get(b);V.__webglFramebuffer=U,V.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(b,U=0,V=0){et=b,X=U,F=V;let P=null,z=!1,ft=!1;if(b){let ut=Lt.get(b);if(ut.__useDefaultFramebuffer!==void 0){st.bindFramebuffer(D.FRAMEBUFFER,ut.__webglFramebuffer),tt.copy(b.viewport),St.copy(b.scissor),Pt=b.scissorTest,st.viewport(tt),st.scissor(St),st.setScissorTest(Pt),W=-1;return}else if(ut.__webglFramebuffer===void 0)Gt.setupRenderTarget(b);else if(ut.__hasExternalTextures)Gt.rebindTextures(b,Lt.get(b.texture).__webglTexture,Lt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let kt=b.depthTexture;if(ut.__boundDepthTexture!==kt){if(kt!==null&&Lt.has(kt)&&(b.width!==kt.image.width||b.height!==kt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Gt.setupDepthRenderbuffer(b)}}let vt=b.texture;(vt.isData3DTexture||vt.isDataArrayTexture||vt.isCompressedArrayTexture)&&(ft=!0);let Tt=Lt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Tt[U])?P=Tt[U][V]:P=Tt[U],z=!0):b.samples>0&&Gt.useMultisampledRTT(b)===!1?P=Lt.get(b).__webglMultisampledFramebuffer:Array.isArray(Tt)?P=Tt[V]:P=Tt,tt.copy(b.viewport),St.copy(b.scissor),Pt=b.scissorTest}else tt.copy(Nt).multiplyScalar(mt).floor(),St.copy(fe).multiplyScalar(mt).floor(),Pt=ge;if(V!==0&&(P=G),st.bindFramebuffer(D.FRAMEBUFFER,P)&&st.drawBuffers(b,P),st.viewport(tt),st.scissor(St),st.setScissorTest(Pt),z){let ut=Lt.get(b.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+U,ut.__webglTexture,V)}else if(ft){let ut=U;for(let vt=0;vt<b.textures.length;vt++){let Tt=Lt.get(b.textures[vt]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+vt,Tt.__webglTexture,V,ut)}}else if(b!==null&&V!==0){let ut=Lt.get(b.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ut.__webglTexture,V)}W=-1};function L_(b){let U=Lt.get(b);return(U.__readFormat!==b.format||U.__readType!==b.type)&&(U.__readFormat=b.format,U.__readType=b.type,U.__formatReadable=jt.textureFormatReadable(b.format),U.__typeReadable=jt.textureTypeReadable(b.type)),U}this.readRenderTargetPixels=function(b,U,V,P,z,ft,xt,ut=0){if(!(b&&b.isWebGLRenderTarget)){Ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let vt=Lt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&xt!==void 0&&(vt=vt[xt],Array.isArray(vt)&&(vt=vt[0])),vt){st.bindFramebuffer(D.FRAMEBUFFER,vt);try{let Tt=b.textures[ut],kt=Tt.format,ie=Tt.type;b.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ut);let Mt=L_(Tt);if(Mt.__formatReadable===!1){Ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Mt.__typeReadable===!1){Ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=b.width-P&&V>=0&&V<=b.height-z&&D.readPixels(U,V,P,z,at.convert(kt),at.convert(ie),ft)}finally{let Tt=et!==null?Lt.get(et).__webglFramebuffer:null;st.bindFramebuffer(D.FRAMEBUFFER,Tt)}}},this.readRenderTargetPixelsAsync=async function(b,U,V,P,z,ft,xt,ut=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let vt=Lt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&xt!==void 0&&(vt=vt[xt],Array.isArray(vt)&&(vt=vt[0])),vt)if(U>=0&&U<=b.width-P&&V>=0&&V<=b.height-z){st.bindFramebuffer(D.FRAMEBUFFER,vt);let Tt=b.textures[ut],kt=Tt.format,ie=Tt.type;b.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ut);let Mt=L_(Tt);if(Mt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Mt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let se=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,se),D.bufferData(D.PIXEL_PACK_BUFFER,ft.byteLength,D.STREAM_READ),D.readPixels(U,V,P,z,at.convert(kt),at.convert(ie),0),D.bindBuffer(D.PIXEL_PACK_BUFFER,null);let Ye=et!==null?Lt.get(et).__webglFramebuffer:null;st.bindFramebuffer(D.FRAMEBUFFER,Ye);let Re=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await c1(D,Re,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,se),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ft),D.bindBuffer(D.PIXEL_PACK_BUFFER,null),D.deleteBuffer(se),D.deleteSync(Re),ft}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,U=null,V=0){let P=Math.pow(2,-V),z=Math.floor(b.image.width*P),ft=Math.floor(b.image.height*P),xt=U!==null?U.x:0,ut=U!==null?U.y:0;Gt.setTexture2D(b,0),D.copyTexSubImage2D(D.TEXTURE_2D,V,0,0,xt,ut,z,ft),st.unbindTexture()},this.copyTextureToTexture=function(b,U,V=null,P=null,z=0,ft=0){let xt,ut,vt,Tt,kt,ie,Mt,se,Ye,Re=b.isCompressedTexture?b.mipmaps[ft]:b.image;if(V!==null)xt=V.max.x-V.min.x,ut=V.max.y-V.min.y,vt=V.isBox3?V.max.z-V.min.z:1,Tt=V.min.x,kt=V.min.y,ie=V.isBox3?V.min.z:0;else{let ce=Math.pow(2,-z);xt=Math.floor(Re.width*ce),ut=Math.floor(Re.height*ce),b.isDataArrayTexture?vt=Re.depth:b.isData3DTexture?vt=Math.floor(Re.depth*ce):vt=1,Tt=0,kt=0,ie=0}P!==null?(Mt=P.x,se=P.y,Ye=P.z):(Mt=0,se=0,Ye=0);let Ee=at.convert(U.format),En=at.convert(U.type),bt;U.isData3DTexture?(Gt.setTexture3D(U,0),bt=D.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Gt.setTexture2DArray(U,0),bt=D.TEXTURE_2D_ARRAY):(Gt.setTexture2D(U,0),bt=D.TEXTURE_2D),st.activeTexture(D.TEXTURE0),st.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,U.flipY),st.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),st.pixelStorei(D.UNPACK_ALIGNMENT,U.unpackAlignment);let In=st.getParameter(D.UNPACK_ROW_LENGTH),de=st.getParameter(D.UNPACK_IMAGE_HEIGHT),Wa=st.getParameter(D.UNPACK_SKIP_PIXELS),An=st.getParameter(D.UNPACK_SKIP_ROWS),au=st.getParameter(D.UNPACK_SKIP_IMAGES);st.pixelStorei(D.UNPACK_ROW_LENGTH,Re.width),st.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Re.height),st.pixelStorei(D.UNPACK_SKIP_PIXELS,Tt),st.pixelStorei(D.UNPACK_SKIP_ROWS,kt),st.pixelStorei(D.UNPACK_SKIP_IMAGES,ie);let Zs=b.isDataArrayTexture||b.isData3DTexture,qa=U.isDataArrayTexture||U.isData3DTexture;if(b.isDepthTexture){let ce=Lt.get(b),gn=Lt.get(U),Ri=Lt.get(ce.__renderTarget),He=Lt.get(gn.__renderTarget);st.bindFramebuffer(D.READ_FRAMEBUFFER,Ri.__webglFramebuffer),st.bindFramebuffer(D.DRAW_FRAMEBUFFER,He.__webglFramebuffer);for(let ln=0;ln<vt;ln++)Zs&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Lt.get(b).__webglTexture,z,ie+ln),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Lt.get(U).__webglTexture,ft,Ye+ln)),D.blitFramebuffer(Tt,kt,Tt+xt,kt+ut,Mt,se,Mt+xt,se+ut,D.DEPTH_BUFFER_BIT,D.NEAREST);st.bindFramebuffer(D.READ_FRAMEBUFFER,null),st.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(z!==0||b.isRenderTargetTexture||Lt.has(b)){let ce=Lt.get(b),gn=Lt.get(U);st.bindFramebuffer(D.READ_FRAMEBUFFER,L),st.bindFramebuffer(D.DRAW_FRAMEBUFFER,k);for(let Ri=0;Ri<vt;Ri++)Zs?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ce.__webglTexture,z,ie+Ri):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ce.__webglTexture,z),qa?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,gn.__webglTexture,ft,Ye+Ri):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,gn.__webglTexture,ft),z!==0?D.blitFramebuffer(Tt,kt,Tt+xt,kt+ut,Mt,se,Mt+xt,se+ut,D.COLOR_BUFFER_BIT,D.NEAREST):qa?D.copyTexSubImage3D(bt,ft,Mt,se,Ye+Ri,Tt,kt,xt,ut):D.copyTexSubImage2D(bt,ft,Mt,se,Tt,kt,xt,ut);st.bindFramebuffer(D.READ_FRAMEBUFFER,null),st.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else qa?b.isDataTexture||b.isData3DTexture?D.texSubImage3D(bt,ft,Mt,se,Ye,xt,ut,vt,Ee,En,Re.data):U.isCompressedArrayTexture?D.compressedTexSubImage3D(bt,ft,Mt,se,Ye,xt,ut,vt,Ee,Re.data):D.texSubImage3D(bt,ft,Mt,se,Ye,xt,ut,vt,Ee,En,Re):b.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,ft,Mt,se,xt,ut,Ee,En,Re.data):b.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,ft,Mt,se,Re.width,Re.height,Ee,Re.data):D.texSubImage2D(D.TEXTURE_2D,ft,Mt,se,xt,ut,Ee,En,Re);st.pixelStorei(D.UNPACK_ROW_LENGTH,In),st.pixelStorei(D.UNPACK_IMAGE_HEIGHT,de),st.pixelStorei(D.UNPACK_SKIP_PIXELS,Wa),st.pixelStorei(D.UNPACK_SKIP_ROWS,An),st.pixelStorei(D.UNPACK_SKIP_IMAGES,au),ft===0&&U.generateMipmaps===!0&&U.mipmapsAutoUpdate===!0&&D.generateMipmap(bt),st.unbindTexture()},this.initRenderTarget=function(b){Lt.get(b).__webglFramebuffer===void 0&&Gt.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Gt.setTextureCube(b,0):b.isData3DTexture?Gt.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Gt.setTexture2DArray(b,0):Gt.setTexture2D(b,0),st.unbindTexture()},this.resetState=function(){X=0,F=0,et=null,st.reset(),ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let n=this.getContext();n.drawingBufferColorSpace=re._getDrawingBufferColorSpace(t),n.unpackColorSpace=re._getUnpackColorSpace()}};function Xi(e){let t="/";if(typeof window<"u"){let n=document.querySelector("script[src*='assets/app.js']"),i=n instanceof HTMLScriptElement?n.src:"";if(i)t=new URL("..",i).pathname;else{let s=window.location.pathname;t=s.endsWith("/")?s:s.replace(/\/[^/]*$/,"/")}}return t.endsWith("/")||(t+="/"),t+e.replace(/^\//,"")}function jn(e,t,n){return Math.max(t,Math.min(n,e))}function m_(e,t){return Math.round(t+(e-t)/3)}function g_(e,t){return Xi(e==="woman"?t==="imv"?"universe/bed/woman-imv.jpg":t==="niv"?"universe/bed/woman-niv.jpg":t==="mask"||t==="cannula"?"universe/bed/woman-mask.jpg":"universe/bed/woman-room.jpg":t==="imv"?"universe/bed/imv.jpg":t==="niv"?"universe/bed/niv.jpg":t==="mask"?"universe/bed/mask.jpg":t==="cannula"?"universe/bed/cannula.jpg":"universe/bed/room.jpg")}function ND(e){return{mode:"VC-AC",tv:480,rr:16,peep:5,ps:10,fio2:40,ie:"1:2",ipap:12,epap:5,backup:14,ti:1,mask:"Full face",...e}}function ul(e){return{...e,fluidMl:e.fluidMl??0,vent:ND(e.vent),pending:"",pressor:"",insulin:!1,calcium:!1,dialysis:!1,prone:!1,protective:!1,headUp:!1,ct:!1,kReplaced:!1,settled:!1,called:!1,announced:!1,worseSaid:!1,ignored:0,heard:"",line:"",good:[],bad:[]}}function Z1(){return[ul({id:"ravi",bed:1,name:"Ravi Kumar",age:54,sex:"man",dx:"Severe ARDS",story:"Pneumonia for three days. He was intubated an hour ago. Saturation is 84 percent on a high inspired oxygen. The plateau pressure is climbing.",exam:"Tube in place. Coarse crackles. Cold hands. He is not ready to come off the ventilator.",support:"imv",hr:118,sbp:108,dbp:64,spo2:84,rr:28,gcs:6,glucose:142,k:4.1,kKnown:!1,lactate:2.4,callAt:8,vent:{mode:"VC-AC",tv:560,rr:28,peep:8,fio2:90}}),ul({id:"sunita",bed:2,name:"Sunita Devi",age:61,sex:"woman",dx:"Septic shock",story:"Fever and a cough for two days. The family could not wake her this morning. Lactate is 5.2. She has had no fluid yet.",exam:"Hot, then now cool. Crackles at the right base. Capillary refill is slow.",support:"room",hr:124,sbp:78,dbp:46,spo2:93,rr:26,gcs:13,glucose:168,k:4.4,kKnown:!1,lactate:5.2,callAt:28}),ul({id:"imran",bed:3,name:"Imran Khan",age:29,sex:"man",dx:"Diabetic ketoacidosis",story:"Type 1 diabetes. Insulin was missed through a vomiting illness. Breathing is deep. Glucose is 486. The potassium has not been looked at.",exam:"Dry mouth. Mild abdominal tenderness. No focal chest finding. The rate of breathing is the acid.",support:"room",hr:116,sbp:104,dbp:64,spo2:98,rr:30,gcs:14,glucose:486,k:2.9,kKnown:!1,lactate:2.2,callAt:48}),ul({id:"anil",bed:4,name:"Anil Sharma",age:47,sex:"man",dx:"Intracerebral hemorrhage",story:"Sudden headache, then he stopped answering. The right pupil is larger. The systolic pressure is 188. There is no scan yet.",exam:"GCS 6. Right pupil larger. Neck is not straight. He is on a face mask.",support:"mask",hr:58,sbp:188,dbp:104,spo2:96,rr:14,gcs:6,glucose:128,k:4,kKnown:!1,lactate:1.4,callAt:68}),ul({id:"meena",bed:5,name:"Meena Iyer",age:66,sex:"woman",dx:"Cardiogenic shock",story:"Anterior infarction this morning. She is cold, wet, and quiet. Saturation is 88 percent. A litre of fluid has not been given, and should not be.",exam:"Crackles to the mid zones. A gallop. Cool hands. The mask is on. NIV is not applied yet.",support:"mask",hr:114,sbp:78,dbp:50,spo2:88,rr:28,gcs:14,glucose:136,k:4.2,kKnown:!1,lactate:4,callAt:88}),ul({id:"gopal",bed:6,name:"Gopal Das",age:71,sex:"man",dx:"Hyperkalemia, anuric",story:"No urine for twelve hours. The monitor shows a wide QRS and peaked T waves. Potassium is 7.1. Dialysis is not running.",exam:"Slow rate. No fluid overload to listen for. He is on nasal oxygen.",support:"cannula",hr:52,sbp:136,dbp:78,spo2:96,rr:16,gcs:15,glucose:118,k:7.1,kKnown:!0,lactate:2.4,callAt:108})]}function tu(e){let t=m_(e.sbp,e.dbp);return e.id==="ravi"?`Bed ${e.bed}. ${e.name}. Saturation ${e.spo2} percent. The ventilator needs a decision.`:e.id==="sunita"?`Bed ${e.bed}. ${e.name}. Mean pressure ${t}. She is in shock.`:e.id==="imran"?`Bed ${e.bed}. ${e.name}. Glucose ${e.glucose}. Do not start insulin until you know the potassium.`:e.id==="anil"?`Bed ${e.bed}. ${e.name}. Consciousness has fallen. The right pupil is larger.`:e.id==="meena"?`Bed ${e.bed}. ${e.name}. Mean pressure ${t}. The lungs are wet. Do not give fluid.`:`Bed ${e.bed}. ${e.name}. Potassium ${e.k}. The QRS is wide.`}function ue(e,t){e.includes(t)||e.push(t)}function DD(e,t,n){e.heard=t,e.line=n}function J1(e){return e.id==="ravi"?[{id:"vt6",label:"Tidal volume 6 mL/kg, plateau under 30"},{id:"peep",label:"Raise PEEP, keep the volume low"},{id:"prone",label:"Prone the patient"},{id:"vt10",label:"Raise tidal volume above 10 mL/kg"},{id:"extubate",label:"Extubate now"}]:e.id==="sunita"?[{id:"o2",label:"Oxygen by mask"},{id:"fluid",label:"Balanced crystalloid 500 mL"},{id:"norepi",label:"Noradrenaline 0.05 mcg/kg/min"},{id:"adr",label:"Adrenaline 0.05 mcg/kg/min"},{id:"flood",label:"Give another 2 litres without looking"}]:e.id==="imran"?[{id:"fluid",label:"Balanced crystalloid 500 mL"},{id:"checkk",label:"Check the potassium"},{id:"kcl",label:"Replace potassium"},{id:"insulin",label:"Insulin infusion 0.1 units/kg/h"},{id:"bicarb",label:"Sodium bicarbonate bolus"}]:e.id==="anil"?[{id:"head",label:"Head up, neck straight"},{id:"ct",label:"Non-contrast CT of the head"},{id:"hts",label:"Hypertonic saline"},{id:"nic",label:"Nicardipine, lower the pressure smoothly"},{id:"flat",label:"Lay the head flat"}]:e.id==="meena"?[{id:"niv",label:"Set NIV and apply it"},{id:"norepi",label:"Noradrenaline 0.05 mcg/kg/min"},{id:"dobutamine",label:"Dobutamine 2.5 mcg/kg/min"},{id:"fluid",label:"Crystalloid 500 mL"},{id:"gtn",label:"GTN infusion"}]:[{id:"calcium",label:"Calcium gluconate, intravenous"},{id:"insulin",label:"Insulin with dextrose"},{id:"dialysis",label:"Start dialysis"},{id:"wait",label:"A resin, and recheck in six hours"},{id:"saline",label:"Potassium-free fluid only"}]}function LD(e){e.id==="ravi"&&(e.settled=e.protective&&e.prone),e.id==="sunita"&&(e.settled=e.fluidMl>=250&&(e.pressor==="norepi"||e.pressor==="adr")),e.id==="imran"&&(e.settled=e.kReplaced&&e.insulin&&e.k>=3.3),e.id==="anil"&&(e.settled=e.headUp&&e.ct&&(e.good.includes("Hypertonic saline")||e.good.includes("Pressure lowered smoothly"))),e.id==="meena"&&(e.settled=e.support==="niv"&&(e.pressor==="norepi"||e.pressor==="dobutamine"&&m_(e.sbp,e.dbp)>=65)),e.id==="gopal"&&(e.settled=e.calcium&&e.insulin&&e.dialysis),e.settled&&(e.called=!1)}function K1(e,t){let n={...e,good:[...e.good],bad:[...e.bad],vent:{...e.vent}},i="Noted.";return n.id==="ravi"?t==="vt6"?(n.protective=!0,n.vent.tv=420,n.vent.rr=22,n.vent.peep=Math.max(8,n.vent.peep),n.vent.fio2=Math.max(50,n.vent.fio2-10),n.rr=22,n.spo2=jn(n.spo2+4,70,100),ue(n.good,"Lung-protective tidal volume"),i="Six millilitres per kilogram. The plateau stays under 30. That is the volume for this lung."):t==="peep"?(n.vent.peep=14,n.vent.fio2=Math.max(50,n.vent.fio2-10),n.spo2=jn(n.spo2+3,70,100),ue(n.good,"PEEP raised with a safe volume"),i="End-expiratory pressure is up. Keep the tidal volume low while you do it."):t==="prone"?(n.prone=!0,n.vent.fio2=Math.max(45,n.vent.fio2-10),n.spo2=jn(n.spo2+6,70,100),ue(n.good,"Prone for severe ARDS"),i="He is prone. Early, prolonged proning is the move when the oxygen is this low."):t==="vt10"?(n.vent.tv=740,n.vent.rr=16,n.rr=16,n.spo2=jn(n.spo2-4,70,100),n.protective=!1,ue(n.bad,"Tidal volume above 10 mL/kg"),i="That volume harms this lung. Come back to 6 millilitres per kilogram predicted weight."):t==="extubate"&&(n.spo2=jn(n.spo2-6,70,100),n.protective=!1,ue(n.bad,"Extubation during severe hypoxemia"),i="He is not ready to come off the ventilator. Leave the tube in, and keep the volume at 6 millilitres per kilogram."):n.id==="sunita"?t==="o2"?(n.support="mask",n.spo2=jn(n.spo2+3,70,100),ue(n.good,"Oxygen on"),i="The mask is on. Saturation is rising. The pressure is still the emergency."):t==="fluid"?(n.fluidMl+=500,n.fluidMl<=1e3?(n.sbp+=8,n.dbp+=4,n.lactate=Math.max(1.2,n.lactate-.4),ue(n.good,"First fluid into an empty circulation"),i="A bolus met an empty circulation. Look again before the next bag. If the mean pressure stays under 65, start noradrenaline."):(n.spo2=jn(n.spo2-3,70,100),ue(n.bad,"Fluid continued after the first response"),i="Further fluid, after the first response, is how edema starts. The oxygen is not better.")):t==="norepi"||t==="adr"?(n.pressor=t,n.line=t==="norepi"?"Noradrenaline 0.05 mcg/kg/min":"Adrenaline 0.05 mcg/kg/min",n.sbp+=t==="adr"?18:14,n.dbp+=t==="adr"?12:10,t==="adr"&&(n.hr+=12),n.fluidMl<250?(ue(n.bad,"Vasopressor before any fluid"),i="The pressure rose, and the tank is still empty. Give a crystalloid, then keep the infusion."):(ue(n.good,t==="norepi"?"Noradrenaline for a low mean pressure":"Adrenaline for a low mean pressure"),i=t==="norepi"?"Noradrenaline raised the mean pressure. Check the lactate and the urine, not only the number.":"Adrenaline raised the pressure and the rate. It is reasonable when the mean pressure is low.")):t==="flood"&&(n.fluidMl+=2e3,n.spo2=jn(n.spo2-6,70,100),ue(n.bad,"Two litres without a new look"),i="Unchecked fluid. The lungs are wetter and the oxygen fell. Reassess, then a vasopressor if the mean pressure is still under 65."):n.id==="imran"?t==="fluid"?(n.fluidMl+=500,n.sbp+=6,ue(n.good,"Fluid first in ketoacidosis"),i="Fluid first. That is the resuscitation. The potassium still decides the insulin."):t==="checkk"?(n.kKnown=!0,i=`Potassium is ${n.k}. Under 3.3. Replace potassium and hold the insulin.`):t==="kcl"?n.kKnown?(n.k=3.6,n.kReplaced=!0,ue(n.good,"Potassium replaced before insulin"),i="Potassium is now 3.6. Insulin can run. Do not stop it just because the glucose falls."):i="Look at the potassium first, so you know what you are treating.":t==="insulin"?!n.kKnown||n.k<3.3?(n.hr=42,n.k=Math.max(2.2,n.k-.6),ue(n.bad,"Insulin with potassium under 3.3"),i="Insulin with potassium at this level can stop the heart. Hold it. Replace potassium."):(n.insulin=!0,n.line="Insulin 0.1 units/kg/h",n.glucose=Math.max(180,n.glucose-80),ue(n.good,"Insulin after a safe potassium"),i="Insulin is running. Add dextrose as the glucose nears 200, and keep the insulin on until the gap closes."):t==="bicarb"&&(ue(n.bad,"Bicarbonate that was not needed"),i="Bicarbonate is not routine at this pH. Fluid, potassium, and insulin are the treatment."):n.id==="anil"?t==="head"?(n.headUp=!0,ue(n.good,"Head up"),i="Head up, neck straight. That is the position. It does not replace the scan."):t==="ct"?(n.ct=!0,ue(n.good,"Non-contrast CT"),i="Non-contrast CT. Acute blood in the right basal ganglia. MRI is not required."):t==="hts"?(n.line="3% saline",n.gcs=Math.min(10,n.gcs+1),ue(n.good,"Hypertonic saline"),i="Hypertonic saline for a falling consciousness. It is for herniation, not a standing drip."):t==="nic"?(n.sbp=158,n.dbp=88,n.line="Nicardipine",ue(n.good,"Pressure lowered smoothly"),i="The systolic pressure is coming down toward 160, smoothly. Not a nitrate, and not a collapse."):t==="flat"&&(n.headUp=!1,n.gcs=Math.max(3,n.gcs-1),ue(n.bad,"Head laid flat"),i="Flat raises the intracranial pressure. Sit the head up."):n.id==="meena"?t==="niv"?(n.support="niv",n.vent.mode="NIV",n.vent.ipap=12,n.vent.epap=6,n.vent.fio2=60,n.vent.backup=16,n.vent.mask="Full face",n.spo2=jn(n.spo2+4,70,100),n.rr=Math.max(18,n.rr-4),ue(n.good,"NIV applied"),i="NIV is on. The mask was not on her face until you applied it. Fluid is still the wrong drug."):t==="norepi"?(n.pressor="norepi",n.line="Noradrenaline 0.05 mcg/kg/min",n.sbp+=14,n.dbp+=8,ue(n.good,"Noradrenaline while the pressure was low"),i="Noradrenaline is holding the pressure. Dobutamine can wait until the mean pressure is safer, if the output is still low."):t==="dobutamine"?(n.pressor="dobutamine",n.line="Dobutamine 2.5 mcg/kg/min",m_(n.sbp,n.dbp)<65?(n.sbp-=6,n.hr+=12,ue(n.bad,"Dobutamine while profoundly hypotensive"),i="Dobutamine dropped the pressure. Noradrenaline first, while the mean pressure is under 65."):(n.hr+=8,n.lactate=Math.max(1.2,n.lactate-.4),ue(n.good,"Dobutamine once the pressure allowed it"),i="An inotrope is reasonable now that the pressure is not critically low. Do not add fluid.")):t==="fluid"?(n.fluidMl+=500,n.spo2=jn(n.spo2-5,70,100),ue(n.bad,"Fluid into a wet circulation"),i="The lungs were already wet. The bolus made the oxygen worse. Stop the fluid."):t==="gtn"&&(n.sbp<110?(n.sbp-=16,n.dbp-=10,ue(n.bad,"Nitrate while hypotensive"),i="The pressure was already low. GTN took what was left. A nitrate is for a high pressure, not for this."):i="The pressure is not a hypertensive emergency. Leave the nitrate."):n.id==="gopal"&&(t==="calcium"?(n.calcium=!0,n.line="Calcium gluconate",n.hr=Math.min(70,n.hr+8),ue(n.good,"Calcium for a wide QRS"),i="Calcium does not lower the potassium. It protects the heart while you shift it and remove it."):t==="insulin"?(n.insulin=!0,n.k=Math.max(4.8,n.k-1.1),n.line="Insulin with dextrose",ue(n.good,"Insulin with dextrose"),i="Insulin shifts potassium inside the cell. The dextrose is why the glucose does not crash. This is not a cure. He still needs dialysis."):t==="dialysis"?n.calcium?(n.dialysis=!0,n.k=Math.max(4.6,n.k-1.4),ue(n.good,"Dialysis for anuric hyperkalemia"),i="The circuit is running. Dialysis removes the potassium. Calcium and insulin were the bridge."):(ue(n.bad,"Dialysis before calcium"),i="Dialysis will remove the potassium. Give calcium first. The QRS is wide now."):t==="wait"?(n.hr=Math.max(36,n.hr-8),ue(n.bad,"A resin while the ECG was changing"),i="A resin in six hours is too slow. The ECG is already changing. Calcium now."):t==="saline"&&(ue(n.bad,"Fluid as the treatment of hyperkalemia"),i="Fluid does not protect the heart and it does not remove this potassium. Calcium, then insulin with dextrose, then dialysis.")),LD(n),n.settled&&(i+=" This bed can settle. The others are still yours."),DD(n,i,n.line),{patient:n,speech:i}}function Q1(e,t){let n={...e,good:e.good,bad:e.bad,vent:e.vent},i="";return!n.settled&&!n.called&&t>=n.callAt&&(n.called=!0,i=tu(n)),n.called&&!n.settled&&(n.ignored+=1,n.ignored>20&&n.ignored%20===0&&((n.id==="ravi"||n.id==="meena"||n.id==="sunita")&&(n.spo2=jn(n.spo2-1,70,100)),(n.id==="sunita"||n.id==="meena")&&(n.sbp=jn(n.sbp-1,60,230),n.dbp=jn(n.dbp-1,30,140)),n.id==="anil"&&(n.gcs=Math.max(3,n.gcs)),n.id==="gopal"&&(n.hr=jn(n.hr-1,34,180)),n.worseSaid||(n.worseSaid=!0,i=i||`Bed ${n.bed}. ${n.name} is worse while waiting.`))),{patient:n,speech:i}}var j1=new Map;function $1(e){let t=j1.get(e);return t||(t=new Image,t.src=e,j1.set(e,t)),t}function Va(e){return e.support==="niv"||e.support==="imv"}function Hd(e){let t=e.vent,n=e.support==="imv",i=n?t.rr||16:t.backup||12,s=n?t.peep:t.epap,a=n?s+(t.mode==="PC-AC"||t.mode==="PS"?t.ps||10:Math.max(8,Math.round((t.tv||400)/35))):t.ipap,r=Math.round(n?(t.tv||400)/1e3/(60/Math.max(8,i)*.33)*60:Math.max(10,(t.ipap-t.epap)*3));return{mode:n?t.mode:"NIV",imv:n,rr:i,peep:s,pip:Math.round(a),flow:r,tv:n?t.tv:Math.round(Math.max(250,(t.ipap-t.epap)*45)),fio2:t.fio2,ipap:t.ipap,epap:t.epap,mask:t.mask}}function Lr(e){return Va(e)?Math.max(6,Hd(e).rr):Math.max(6,e.rr||16)}function Dr(e,t,n,i,s){let a=[],r=Math.max(4,t)/60;for(let o=0;o<n;o++){let l=(n-1-o)/n*i,c=(e/1e3-l)*r%1;c<0&&(c+=1),a.push(s(c))}return a}function UD(e,t){let n=0;return e>.08&&e<.16?n=Math.sin((e-.08)/.08*Math.PI)*.18:e>=.18&&e<.22?n=-((e-.18)/.04)*.25:e>=.22&&e<.26?n=-.25+(e-.22)/.04*1.45:e>=.26&&e<.3?n=1.2-(e-.26)/.04*1.55:e>=.3&&e<.36?n=-.35+(e-.3)/.06*.35:e>=.42&&e<.58&&(n=Math.sin((e-.42)/.16*Math.PI)*(t?.72:.32)),n}function ID(e,t){let n=(e+.12)%1;return(Math.exp(-(((n-.16)/.045)**2))+.5*Math.exp(-(((n-.3)/.09)**2)))*Math.max(.25,Math.min(1,(t-70)/30))}function OD(e){return e<.18?Math.sin(e/.18*Math.PI):Math.exp(-(e-.18)*3.1)}function PD(e){return e<.4?.5-.5*Math.cos(e/.4*Math.PI):.5+.5*Math.cos((e-.4)/.6*Math.PI)}function BD(e,t,n,i){let s=.33;t.imv&&n==="1:1"&&(s=.5),t.imv&&n==="1:3"&&(s=.25),t.imv||(s=Math.min(.55,Math.max(.2,(i||1)/(60/Math.max(6,t.rr)))));let a=e<s,r=a?e/Math.max(.05,s):(e-s)/Math.max(.05,1-s),o=r<.16?r/.16:1,l=a?o:Math.exp(-r*6),c=t.imv&&(t.mode==="VC-AC"||t.mode==="SIMV"),h=a?c?.8:Math.max(0,.85-r*.7):r<.48?-.65*Math.exp(-r*3.4):0,p=a?r:r<.62?Math.max(0,1-r/.62):0;return{pres:l,flow:h,vol:p}}function tT(e,t){let n=Math.max(35,t.hr||80),i=Lr(t),s=t.k>=6.5&&(t.kKnown||t.id==="gopal");return[{arr:Dr(e,n,120,3.4,a=>UD(a,s)),color:"#8fd0a8",mid:.74},{arr:Dr(e,n,120,3.4,OD),color:"#e7a3a3",mid:.72},{arr:Dr(e,n,120,3.4,a=>ID(a,t.spo2)),color:"#7fd4e6",mid:.7},{arr:Dr(e,i,120,150/i,PD),color:"#f0d98a",mid:.72}]}function eT(e,t){let n=Hd(t),i=120/Math.max(6,n.rr),s=a=>BD(a,n,t.vent.ie,t.vent.ti);return[{arr:Dr(e,n.rr,100,i,a=>.18+.82*s(a).pres),color:"#e2b48a",mid:.86,amp:.46},{arr:Dr(e,n.rr,100,i,a=>s(a).flow),color:"#9ad7ff",mid:.52,amp:.28},{arr:Dr(e,n.rr,100,i,a=>s(a).vol),color:"#c9f0c0",mid:.86,amp:.42}]}function Fd(e,t,n,i,s,a,r){if(e.fillStyle=r,e.fillRect(t,n,i,s),i<8||s<8)return;let o=s/a.length;a.forEach((l,c)=>{let h=l.amp??.5,p=l.mid??.72,u=n+c*o;e.save(),e.beginPath(),e.rect(t,u+.5,i,Math.max(1,o-1)),e.clip(),e.beginPath(),e.strokeStyle=l.color,e.lineWidth=1.15;let d=l.arr,_=d.length;for(let S=0;S<_;S++){let g=_<2?t:t+S/(_-1)*i,f=u+o*p-d[S]*o*h;f<u+1&&(f=u+1),f>u+o-2&&(f=u+o-2),S===0?e.moveTo(g,f):e.lineTo(g,f)}e.stroke(),e.fillStyle=r,e.fillRect(t+i-4,u,4,o),e.restore()})}function nT(e,t,n){let i=e.getContext("2d");if(!i)return;if(i.setTransform(1,0,0,1,0,0),!Va(n)){i.fillStyle="#071018",i.fillRect(0,0,e.width,e.height);return}let s=eT(t,n);Fd(i,0,0,e.width,e.height,s,"#071018");let a=e.height/3,r=Math.max(10,Math.min(18,a*.34));i.font=`700 ${r}px Figtree, Arial, sans-serif`,i.textBaseline="top",i.textAlign="left",["P","F","V"].forEach((o,l)=>{i.fillStyle=s[l].color,i.fillText(o,4,l*a+2)})}function iT(e,t,n){let i=e.getContext("2d");if(!i)return;let s=e.width,a=e.height;i.setTransform(1,0,0,1,0,0);let r=$1(g_(n.sex,n.support));if(i.fillStyle="#101418",i.fillRect(0,0,s,a),!(r.complete&&r.naturalWidth))return;if(i.drawImage(r,0,0,s,a),!(typeof window<"u"&&window.matchMedia?.("(prefers-reduced-motion: reduce)").matches)){let l=t/1e3*(Lr(n)/60)%1,h=-.012*(l<.42?Math.sin(l/.42*Math.PI):0)*a;i.save(),i.beginPath(),i.ellipse(.5*s,.64*a,.07*s,.032*a,0,0,Math.PI*2),i.clip(),i.drawImage(r,0,h,s,a),i.restore()}if(Fd(i,.078*s,.156*a,.16*s,.19*a,tT(t,n),"#04110c"),Va(n)){let l=eT(t,n),c=.817*s,h=.356*a,p=.084*s,u=.1*a;Fd(i,c,h,p,u,l,"#071018");let d=u/3;i.font=`700 ${Math.max(8,d*.42)}px Figtree, Arial, sans-serif`,i.textBaseline="top",i.textAlign="left",["P","F","V"].forEach((_,S)=>{i.fillStyle=l[S].color,i.fillText(_,c+2,h+S*d+1)})}}function zD(e,t){let i=(e+t*2100)%14e3;if(i<5200||i>=8600&&i<10800)return{x:0,y:0};if(i<8600){let a=(i-5200)/3400;return{x:0,y:Math.sin(a*Math.PI)*.004}}let s=(i-10800)/3200;return{x:Math.sin(s*Math.PI)*.006,y:0}}function __(e,t,n,i,s,a){let o=n/Math.max(1,i),l=t.naturalWidth/t.naturalHeight,c,h;l>o?(h=t.naturalHeight/1.62,c=h*o):(c=t.naturalWidth/1.62,h=c/o);let p=(t.naturalWidth-c)*.5,u=(t.naturalHeight-h)*.3;e.drawImage(t,p,u,c,h,s,a,n,i)}function sT(e,t,n){let i=e.getContext("2d");if(!i)return;let s=e.width,a=e.height;i.setTransform(1,0,0,1,0,0);let r=$1(g_(n.sex,n.support));if(i.fillStyle="#12202c",i.fillRect(0,0,s,a),r.complete&&r.naturalWidth&&(__(i,r,s,a,0,0),!(typeof window<"u"&&window.matchMedia?.("(prefers-reduced-motion: reduce)").matches))){let h=t/1e3*(Lr(n)/60)%1,p=h<.42?Math.sin(h/.42*Math.PI):0,u=zD(t,n.bed);(u.x!==0||u.y!==0)&&(i.save(),i.beginPath(),i.ellipse(.5*s,.46*a,.07*s,.055*a,0,0,Math.PI*2),i.clip(),__(i,r,s,a,u.x*s,u.y*a),i.restore()),i.save(),i.beginPath(),i.ellipse(.5*s,.68*a,.075*s,.03*a,0,0,Math.PI*2),i.clip(),__(i,r,s,a,0,-.012*p*a),i.restore()}let o=Math.max(16,a*.1);i.fillStyle="rgba(5,10,18,0.55)",i.fillRect(0,a-o,s,o),i.fillStyle=n.called&&!n.settled?"#e7a3a3":"#d7e7f2",i.font=`600 ${Math.max(11,Math.round(a*.075))}px Figtree, sans-serif`,i.textBaseline="middle",i.textAlign="left",i.fillText(`${n.bed}  ${n.name}`,8,a-o/2);let l=Math.sin(t/280)>0;i.fillStyle=l?"#ff5d5d":"#6e3030",i.beginPath(),i.arc(s-Math.max(46,s*.12),a-o/2,Math.max(3,a*.018),0,Math.PI*2),i.fill(),i.fillStyle="#f3efe6",i.textAlign="right",i.fillText("LIVE",s-8,a-o/2)}function aT(e,t,n){let i=e.getContext("2d");if(!i)return;let s=e.width,a=e.height;i.setTransform(1,0,0,1,0,0),i.fillStyle="#0c1c28",i.fillRect(0,0,s,a);let r=.5+.5*Math.sin(t/220);i.lineWidth=Math.max(4,s*.012),i.strokeStyle=n.settled?"#8fd0a8":n.called?`rgba(231,163,163,${.4+r*.6})`:"rgba(127,212,230,0.28)",i.strokeRect(i.lineWidth/2,i.lineWidth/2,s-i.lineWidth,a-i.lineWidth);let o=Math.round(s*.04);i.fillStyle="#e2b48a",i.font=`700 ${Math.max(16,Math.round(a*.1))}px Figtree, sans-serif`,i.textBaseline="alphabetic",i.textAlign="left",i.fillText(`BED ${n.bed}`,o,Math.round(a*.12)),i.fillStyle="#f3efe6",i.font=`700 ${Math.max(18,Math.round(a*.115))}px Figtree, sans-serif`,i.fillText(n.name,o,Math.round(a*.24)),i.fillStyle=n.settled?"#8fd0a8":n.called?"#e7a3a3":"#7fd4e6",i.font=`600 ${Math.max(12,Math.round(a*.055))}px Figtree, sans-serif`;let l=n.settled?"Settled":n.called?"Call":n.dx;i.fillText(l,o,Math.round(a*.32));let c=Math.round(s*.28),h=Math.round(s*.03),p=Math.round(a*.38),u=s-c-h-Math.round(s*.02),d=a-p-Math.round(a*.06);Fd(i,h,p,u,d,tT(t,n),"#04110c");let _=[["Pulse",String(Math.round(n.hr)),"#8fd0a8"],["BP",`${Math.round(n.sbp)}/${Math.round(n.dbp)}`,"#e7a3a3"],["SpO2",String(Math.round(n.spo2)),"#7fd4e6"],["RR",String(Math.round(Lr(n))),"#f0d98a"]],S=d/4;_.forEach((g,f)=>{let m=p+f*S;i.fillStyle=g[2],i.font=`600 ${Math.max(10,Math.round(S*.28))}px Figtree, sans-serif`,i.fillText(g[0],h+u+8,m+S*.38),i.font=`700 ${Math.max(13,Math.round(S*.46))}px Figtree, sans-serif`,i.fillText(g[1],h+u+8,m+S*.82)})}var fT=vs(Ur(),1),ka=3.35,hl=3.35*(1500/845),v_=80,y_=-8,S_=46,GD=78,VD=[{bed:1,x:.14,y:.226,w:.108,h:.272},{bed:2,x:.266,y:.226,w:.104,h:.272},{bed:3,x:.388,y:.226,w:.104,h:.272},{bed:4,x:.51,y:.226,w:.102,h:.272},{bed:5,x:.642,y:.226,w:.09,h:.272},{bed:6,x:.752,y:.226,w:.112,h:.272}],kD=[{x:.214,y:.578,rx:.03,ry:.034,phase:.4},{x:.48,y:.552,rx:.026,ry:.03,phase:3.2},{x:.806,y:.574,rx:.028,ry:.032,phase:6.1}],XD=[-44,0,44,136,180,224].map(e=>e*Math.PI/180),cT=7;function eu(e,t,n){return Math.max(t,Math.min(n,e))}function x_(e){let t=XD[(e-1)%6];return{x:Math.sin(t)*cT,z:-Math.cos(t)*cT,yaw:t}}function nu(e){let t=new nl(e);return t.colorSpace=Tn,t.minFilter=je,t.magFilter=je,t}function uT(e){let t=Math.tan(S_*Math.PI/360),n=ka/2/(t*.992),i=n*t*Math.max(.35,e),s=hl/2-i*.94,a=Math.max(0,Math.atan(Math.max(0,s)/Math.max(.4,n)));return{dist:n,limit:a}}function WD(e){let t=document.createElement("canvas");t.width=e.naturalWidth,t.height=e.naturalHeight;let n=t.getContext("2d");if(!n)return t;n.drawImage(e,0,0);let i=n.getImageData(0,0,t.width,t.height),s=i.data,a=t.width,r=t.height;for(let o=0;o<r;o++){let l=1+.16*Math.min(1,Math.max(0,(o/r-.46)/.14));for(let c=0;c<a;c++){let h=(o*a+c)*4;for(let p=0;p<3;p++){let u=s[h+p]/255;s[h+p]=Math.round(Math.min(1,Math.pow(u,.76)*1.06*l)*255)}}}return n.putImageData(i,0,0),t}function qD(e,t){let i=(e+t*1700)%16e3;if(i<6e3)return{nod:0,slide:0};if(i<9200){let a=(i-6e3)/3200;return{nod:Math.sin(a*Math.PI)*.05,slide:0}}if(i<12400)return{nod:0,slide:0};let s=(i-12400)/3600;return{nod:0,slide:Math.sin(s*Math.PI)*.035}}function YD(e,t,n,i){let s=e.getContext("2d");if(!s)return;let a=e.width,r=e.height;s.clearRect(0,0,a,r);let o=qD(i,n.phase);if(o.nod===0&&o.slide===0)return;s.save(),s.translate(a*.5,r*.9),s.rotate(o.nod),s.translate(-a*.5,-r*.9);let l=a/(n.rx*2),c=r/(n.ry*2);s.drawImage(t,a*.5-n.x*l+o.slide*a,r*.46-n.y*c,l,c),s.restore(),s.globalCompositeOperation="destination-in",s.save(),s.translate(a*.5,r*.4),s.scale(.9,1.12);let h=s.createRadialGradient(0,0,a*.1,0,0,a*.4);h.addColorStop(0,"rgba(0,0,0,1)"),h.addColorStop(.68,"rgba(0,0,0,1)"),h.addColorStop(1,"rgba(0,0,0,0)"),s.fillStyle=h,s.fillRect(-a,-r,a*3,r*3),s.restore(),s.globalCompositeOperation="source-over"}function hT({patients:e,place:t,lookBed:n,walkBed:i,onCommandBed:s,onWardBed:a}){let r=(0,gs.useRef)(null),o=(0,gs.useRef)(e),l=(0,gs.useRef)(t),c=(0,gs.useRef)(n),h=(0,gs.useRef)(i),p=(0,gs.useRef)(s),u=(0,gs.useRef)(a);return o.current=e,l.current=t,c.current=n,h.current=i,p.current=s,u.current=a,(0,gs.useEffect)(()=>{let d=r.current;if(!d)return;let _=d,S=new Pd({antialias:!0,alpha:!1});S.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),S.outputColorSpace=Tn,S.toneMapping=0,S.setClearColor(1054752,1),_.appendChild(S.domElement);let g=new wc;g.background=new Zt(1714230),g.fog=new Ac(791064,22,70);let f=new Hn(S_,1,.08,90);g.add(f),g.add(new Pc(14148842,1711652,.9));let m=new Fc(16774373,.55);m.position.set(2,8,3),g.add(m);let y=new $e(new Kn(28,28),new Er({color:1448480,roughness:.94,metalness:.04}));y.rotation.x=-Math.PI/2,g.add(y);let x=new $e(new Kn(22,22),new Er({color:1053722,roughness:1,side:pi}));x.rotation.x=Math.PI/2,x.position.y=3.25,g.add(x);for(let dt=-1;dt<=1;dt++){let Wt=new $e(new Pa(8,.04,.16),new Er({color:15986662,emissive:13160660,emissiveIntensity:.25,roughness:.5}));Wt.position.set(0,3.18,dt*2.2),g.add(Wt)}let E=ka/2,A=new $e(new Kn(hl,ka),new Fi({color:1845300}));A.position.set(v_,ka/2,y_),A.material.fog=!1,g.add(A);let v=null,T=new Image;T.onload=()=>{v=WD(T);let dt=new nl(v);dt.colorSpace=Tn,dt.minFilter=je,dt.magFilter=je,A.material.map=dt,A.material.color.setHex(16777215),A.material.needsUpdate=!0},T.src=Xi("universe/command.jpg");let I=VD.map(dt=>{let Wt=[{part:"vitals",y0:0,h0:.46,cw:640,ch:300},{part:"camera",y0:.48,h0:.52,cw:640,ch:340}].map(Ht=>{let le=document.createElement("canvas");le.width=Ht.cw,le.height=Ht.ch;let ye=nu(le),Rt=dt.h*Ht.h0,D=dt.y+dt.h*Ht.y0,Qt=new $e(new Kn(dt.w*hl,Rt*ka),new Fi({map:ye}));Qt.material.fog=!1;let Bt=dt.x+dt.w/2,jt=D+Rt/2;return Qt.position.set((Bt-.5)*hl,(.5-jt)*ka,.04),Qt.userData.bed=dt.bed,Qt.userData.kind="screen",A.add(Qt),{part:Ht.part,canvas:le,texture:ye}});return{bed:dt.bed,panels:Wt}}),R=kD.map(dt=>{let Wt=document.createElement("canvas");Wt.width=420,Wt.height=520;let Ht=nu(Wt),le=new $e(new Kn(dt.rx*2*hl,dt.ry*2*ka),new Fi({map:Ht,transparent:!0,depthWrite:!1}));return le.material.fog=!1,le.position.set((dt.x-.5)*hl,(.5-dt.y)*ka,.03),A.add(le),{staff:dt,canvas:Wt,texture:Ht}}),N=[];for(let dt=1;dt<=6;dt++){let Wt=x_(dt),Ht=document.createElement("canvas");Ht.width=768,Ht.height=432;let le=nu(Ht),ye=new $e(new Kn(4.4,2.48),new Fi({map:le,side:pi}));ye.position.set(Wt.x,1.5,Wt.z),ye.lookAt(0,1.5,0),ye.rotateY(Math.PI),ye.userData.bed=dt,ye.userData.kind="bed",g.add(ye);let Rt=document.createElement("canvas");Rt.width=320,Rt.height=200;let D=nu(Rt),Qt=new $e(new Kn(.7,.44),new Fi({map:D}));Qt.position.set(Wt.x*.86,2.55,Wt.z*.86),Qt.lookAt(0,2.55,0),Qt.rotateY(Math.PI),g.add(Qt);let Bt=document.createElement("canvas");Bt.width=768,Bt.height=220;let jt=nu(Bt),st=new $e(new Kn(3.2,.64),new Fi({map:jt,transparent:!0,depthWrite:!1}));st.position.set(Wt.x*.93,2.78,Wt.z*.93),st.lookAt(0,2.78,0),st.rotateY(Math.PI),st.userData.bed=dt,st.userData.kind="bed",g.add(st),N.push({bed:dt,photo:Ht,photoTex:le,vent:Rt,ventTex:D,ventMesh:Qt,label:Bt,labelTex:jt})}let O=new Hc,G=new ne,L=0,k=0,X=0,F=!1,et=0,W=0,$=0,tt=!1,St=l.current,Pt=c.current,Z=h.current,pt=new H,yt=new H,At=new H,mt=new H,zt=window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;function ze(){let dt=_.clientWidth||1,Wt=_.clientHeight||1;S.setSize(dt,Wt,!1),f.aspect=dt/Math.max(1,Wt),f.updateProjectionMatrix()}ze();let Nt=new ResizeObserver(ze);Nt.observe(_);function fe(dt,Wt){let Ht=_.getBoundingClientRect();G.x=(dt-Ht.left)/Ht.width*2-1,G.y=-((Wt-Ht.top)/Ht.height)*2+1}function ge(dt){F=!0,$=0,et=dt.clientX,W=dt.clientY}function Kt(dt){if(!F)return;let Wt=dt.clientX-et,Ht=dt.clientY-W;if(et=dt.clientX,W=dt.clientY,$+=Math.abs(Wt)+Math.abs(Ht),!($<6)){if(l.current==="command"){let le=uT(f.aspect);X=eu(X-Wt*.0045,-le.limit,le.limit),k=eu(k+Ht*.0022,-.04,.03);return}l.current==="ward"&&!h.current&&(L-=Wt*.006,k=eu(k+Ht*.004,-.55,.5))}}function qe(dt){let Wt=$>10;if(F=!1,Wt)return;fe(dt.clientX,dt.clientY),O.setFromCamera(G,f);let le=O.intersectObjects(g.children,!0).find(D=>D.object?.userData?.bed),ye=le?.object?.userData?.bed,Rt=le?.object?.userData?.kind;ye&&(l.current==="command"&&Rt==="screen"?p.current(ye):l.current==="ward"&&Rt==="bed"&&u.current(ye))}S.domElement.addEventListener("pointerdown",ge),S.domElement.addEventListener("pointermove",Kt),S.domElement.addEventListener("pointerup",qe),S.domElement.addEventListener("pointercancel",()=>{F=!1});let Fe=0,mn=dt=>{if((St!==l.current||Pt!==c.current||Z!==h.current)&&(k=0,l.current==="ward"&&!h.current&&(L=x_(c.current||2).yaw),l.current==="command"&&(X=0),St=l.current,Pt=c.current,Z=h.current),l.current==="command"){let Rt=uT(f.aspect),D=eu(X,-Rt.limit,Rt.limit),Qt=eu(k,-.04,.03);At.set(v_,E,y_+Rt.dist),mt.set(v_+Math.sin(D)*Rt.dist,E+Math.sin(Qt)*Rt.dist,y_)}else if(h.current){let Rt=x_(h.current),D=F?0:Math.sin(dt/1600)*.012;At.set(Rt.x*.46,1.62,Rt.z*.46),mt.set(Rt.x,1.48+D,Rt.z)}else{let Rt=F?0:Math.sin(dt/1500)*.015,D=F?0:Math.sin(dt/1900)*.01,Qt=L+Rt,Bt=k+D,jt=Math.cos(Bt);At.set(0,1.62,0),mt.set(Math.sin(Qt)*jt,1.62+Math.sin(Bt),-Math.cos(Qt)*jt)}let Wt=!tt||zt?1:.08;tt=!0;let Ht=l.current==="command"?S_:GD;f.fov!==Ht&&(f.fov=Ht,f.updateProjectionMatrix()),pt.lerp(At,Wt),yt.lerp(mt,Wt),f.position.copy(pt),f.lookAt(yt),!zt&&!F&&l.current!=="command"&&f.rotateZ(Math.sin(dt/2100)*.006);let le=o.current,ye=l.current==="command"||pt.x>40;ye&&v&&R.forEach(Rt=>{YD(Rt.canvas,v,Rt.staff,dt),Rt.texture.needsUpdate=!0}),ye&&I.forEach(Rt=>{let D=le.find(Qt=>Qt.bed===Rt.bed);D&&Rt.panels.forEach(Qt=>{Qt.part==="camera"?sT(Qt.canvas,dt,D):aT(Qt.canvas,dt,D),Qt.texture.needsUpdate=!0})}),N.forEach(Rt=>{let D=le.find(jt=>jt.bed===Rt.bed);if(!D)return;iT(Rt.photo,dt,D),Rt.photoTex.needsUpdate=!0;let Qt=Va(D);Rt.ventMesh.visible=Qt,Qt&&(nT(Rt.vent,dt,D),Rt.ventTex.needsUpdate=!0);let Bt=Rt.label.getContext("2d");if(Bt){let jt=Rt.label.width,st=Rt.label.height;Bt.clearRect(0,0,jt,st),Bt.fillStyle="rgba(7,9,12,0.9)",Bt.fillRect(0,0,jt,st),Bt.fillStyle="#e2b48a",Bt.font="700 64px Figtree, sans-serif",Bt.textAlign="center",Bt.textBaseline="middle",Bt.fillText(`BED ${D.bed}`,jt/2,st*.32),Bt.fillStyle=D.settled?"#8fd0a8":D.called?"#e7a3a3":"#f3efe6",Bt.font="700 72px Figtree, sans-serif",Bt.fillText(D.name,jt/2,st*.7)}Rt.labelTex.needsUpdate=!0}),S.render(g,f),Fe=requestAnimationFrame(mn)};return Fe=requestAnimationFrame(mn),()=>{cancelAnimationFrame(Fe),Nt.disconnect(),S.domElement.removeEventListener("pointerdown",ge),S.domElement.removeEventListener("pointermove",Kt),S.domElement.removeEventListener("pointerup",qe),S.dispose(),S.domElement.remove()}},[]),(0,fT.jsx)("div",{className:"u-world",ref:r})}var ZD=["How are you?","Since when?","Chest pain?","Medicines?","Allergies?","Examine","Consent"];function dT(){return ZD}function Vd(e){return e.support!=="imv"&&e.gcs>=9}function Dt(e,t){return t.some(n=>e.includes(n))}function JD(e){return e.id==="ravi"?"Ravi's wife":e.id==="anil"?"Anil's son":e.name}function pT(e,t){let n=t.toLowerCase().replace(/[^a-z0-9\s]/g," "),i=e.sex==="woman"&&Vd(e)?"woman":"man",s=Vd(e)?e.name:JD(e);return e.id==="ravi"?Dt(n,["how are","how do","feeling","pain"])?{who:s,voice:i,text:"He has not opened his eyes since the tube went in. I am frightened."}:Dt(n,["since","when","how long","start","began"])?{who:s,voice:i,text:"The cough and fever started three days ago. They intubated him about an hour ago."}:Dt(n,["breath","oxygen","ventilat","tube"])?{who:s,voice:i,text:"He cannot talk. The machine is breathing for him. His oxygen was very low."}:Dt(n,["chest","pain"])?{who:s,voice:i,text:"He was too sick to tell me about chest pain. I don't know."}:Dt(n,["medic","drug","insulin","tablet"])?{who:s,voice:i,text:"I don't have his medicine list. He was not on a blood thinner that I know of."}:Dt(n,["allerg"])?{who:s,voice:i,text:"No allergy that I know."}:Dt(n,["examin","listen","chest"])?{who:s,voice:i,text:"The team said the tube is in place and his hands are cold. I cannot add to that."}:Dt(n,["consent","agree","prone","turn","treat"])?{who:s,voice:i,text:"If you need to turn him or change the ventilator to help him breathe, tell me first. I will agree."}:{who:s,voice:i,text:"I only know he has been ill for three days and he is on the machine now. Please don't tell me something that is not true."}:e.id==="sunita"?Dt(n,["how are","how do","feeling"])?{who:s,voice:i,text:"I feel terrible. I am scared, and I am very weak."}:Dt(n,["since","when","how long","start","began","fever"])?{who:s,voice:i,text:"Fever and a cough for two days. This morning I could not stay awake."}:Dt(n,["breath","oxygen","air"])?{who:s,voice:i,text:"I am short of breath. I feel hot, and then cold."}:Dt(n,["chest","pain"])?{who:s,voice:i,text:"No real chest pain. It is the breath and the weakness."}:Dt(n,["medic","drug","fluid","drip"])?{who:s,voice:i,text:"I have not had any medicine for this yet. No fluid either."}:Dt(n,["allerg"])?{who:s,voice:i,text:"No drug allergy."}:Dt(n,["urine","water","pass"])?{who:s,voice:i,text:"I have not noticed my urine. I have been too faint."}:Dt(n,["family","wake"])?{who:s,voice:i,text:"My family said they could not wake me this morning."}:Dt(n,["examin","listen"])?{who:s,voice:i,text:"My hands feel cold now. I can hear a rattle when I breathe."}:Dt(n,["consent","agree","treat"])?{who:s,voice:i,text:"If you need fluid or a drip for the blood pressure, yes. Tell me what it is."}:{who:s,voice:i,text:"I don't know that. I know the fever, the cough, and that I feel faint."}:e.id==="imran"?Dt(n,["how are","how do","feeling"])?{who:s,voice:i,text:"I feel sick. My mouth is dry, and I keep breathing hard."}:Dt(n,["since","when","how long","start","began","vomit"])?{who:s,voice:i,text:"I started vomiting yesterday. I missed my insulin."}:Dt(n,["breath","air","oxygen"])?{who:s,voice:i,text:"The breathing is deep. My chest is not tight."}:Dt(n,["chest","pain"])?{who:s,voice:i,text:"No chest pain."}:Dt(n,["medic","drug","insulin"])?{who:s,voice:i,text:"I take insulin. I missed the doses because I was vomiting."}:Dt(n,["allerg"])?{who:s,voice:i,text:"No allergies."}:Dt(n,["sugar","glucose","diabet"])?{who:s,voice:i,text:"I have type 1 diabetes. I have not checked the sugar today."}:Dt(n,["urine","water","pass"])?{who:s,voice:i,text:"I was passing a lot of urine before the vomiting."}:Dt(n,["examin","listen","stomach","abdom"])?{who:s,voice:i,text:"My mouth is dry. My stomach is a little sore. No chest pain."}:Dt(n,["consent","agree","treat","drip"])?{who:s,voice:i,text:"Yes, treat me. Tell me before you start the drip."}:{who:s,voice:i,text:"I have type 1 diabetes. I missed insulin because I was vomiting. I don't know the blood numbers."}:e.id==="anil"?Dt(n,["how are","how do","feeling","awake","answer"])?{who:s,voice:i,text:"He is not answering. Don't ask him. Ask me."}:Dt(n,["since","when","how long","start","began","sudden"])?{who:s,voice:i,text:"It was sudden. A terrible headache, then he stopped talking."}:Dt(n,["head","pain","chest"])?{who:s,voice:i,text:"The worst headache, then nothing. I don't know about chest pain."}:Dt(n,["breath","mask","oxygen"])?{who:s,voice:i,text:"He is breathing. He has a face mask on. He is not awake."}:Dt(n,["medic","drug","thinner","clot","blood"])?{who:s,voice:i,text:"No blood thinner that I know. Do not give one before a scan."}:Dt(n,["allerg"])?{who:s,voice:i,text:"I don't know of an allergy."}:Dt(n,["examin","pupil","eye","listen"])?{who:s,voice:i,text:"One pupil looks bigger. He does not wake to his name."}:Dt(n,["consent","agree","treat","scan","pressure"])?{who:s,voice:i,text:"Scan his head. Do not give a clot-buster. If you need to lower the pressure, say so."}:{who:s,voice:i,text:"He had a sudden headache and then he went quiet. That is all I know. Don't invent the rest."}:e.id==="meena"?Dt(n,["how are","how do","feeling"])?{who:s,voice:i,text:"I can't breathe. I am cold."}:Dt(n,["since","when","how long","start","began","morning"])?{who:s,voice:i,text:"This morning. The chest went tight, and then this."}:Dt(n,["chest","pain","heart"])?{who:s,voice:i,text:"Yes. Across the chest. Since morning."}:Dt(n,["breath","oxygen","wet","mask","niv"])?{who:s,voice:i,text:"I am wet. I cannot lie flat. Do not drown me with fluid."}:Dt(n,["medic","drug","fluid","water"])?{who:s,voice:i,text:"Nothing new this morning. Please do not give me a bag of fluid."}:Dt(n,["allerg"])?{who:s,voice:i,text:"No allergy."}:Dt(n,["examin","listen"])?{who:s,voice:i,text:"My hands are cold. I can hear myself bubbling."}:Dt(n,["consent","agree","treat"])?{who:s,voice:i,text:"Do not pour fluid into me. If you need a mask that pushes air, explain it. I will try."}:{who:s,voice:i,text:"Chest tightness since morning. I cannot breathe. I don't know more than that."}:Dt(n,["how are","how do","feeling"])?{who:s,voice:i,text:"I feel heavy. A bit muddled. Not in pain."}:Dt(n,["since","when","how long","start","urine","water","pass"])?{who:s,voice:i,text:"No urine since last night. About twelve hours. The bag is empty."}:Dt(n,["chest","pain"])?{who:s,voice:i,text:"No chest pain."}:Dt(n,["breath","oxygen"])?{who:s,voice:i,text:"Breathing is all right. The nose prongs are on."}:Dt(n,["medic","drug","potassium"])?{who:s,voice:i,text:"I forget the names. I have not had the potassium medicine today."}:Dt(n,["allerg"])?{who:s,voice:i,text:"I don't remember an allergy."}:Dt(n,["examin","listen","swell"])?{who:s,voice:i,text:"I am slow. I am not swollen, as far as I can tell."}:Dt(n,["consent","agree","treat","dialysis","calcium"])?{who:s,voice:i,text:"If you need the calcium, or the machine for the kidneys, my son should hear it too. I think I agree."}:{who:s,voice:i,text:"I am seventy-one. No urine. I feel slow. I don't remember the rest."}}var wt=vs(Ur(),1),M_=!0,kd="";function mT(){if(!window.speechSynthesis)return null;let e=speechSynthesis.getVoices()||[],t=/female|samantha|karen|moira|victoria|allison|zira|susan|heera|sonia|libby|veena|siri|fiona|tessa|serena|nicky|catherine/i,n=[/rishi/i,/daniel/i,/google uk english male/i,/david/i,/alex/i,/\bmale\b/i],i=a=>`${a.name} ${a.voiceURI}`,s=e.filter(a=>/^en/i.test(a.lang||"")&&!t.test(i(a)));for(let a of n){let r=s.find(o=>a.test(i(o)));if(r)return r}return s[0]||null}function KD(e,t){if(!M_||!e||!window.speechSynthesis)return;let n=new SpeechSynthesisUtterance(e);n.rate=t==="woman"?.94:.9;let i=speechSynthesis.getVoices()||[],s=/female|samantha|karen|moira|victoria|allison|zira|susan|heera|sonia|libby|veena|fiona|tessa|serena/i,a=t==="woman"?i.find(r=>s.test(`${r.name} ${r.voiceURI}`)&&/^en/i.test(r.lang||"")):mT();a?(n.voice=a,n.lang=a.lang||"en-GB"):n.lang="en-GB";try{speechSynthesis.cancel(),speechSynthesis.resume(),speechSynthesis.speak(n)}catch{}}function QD(){let e=window;return e.SpeechRecognition||e.webkitSpeechRecognition||null}function jD({patient:e}){let[t,n]=(0,We.useState)(""),[i,s]=(0,We.useState)(""),[a,r]=(0,We.useState)(!1),[o,l]=(0,We.useState)(""),[c,h]=(0,We.useState)(""),p=Vd(e);function u(_){let S=_.replace(/\s+/g," ").trim();if(!S)return;let g=pT(e,S);n(S),s(`${g.who}: ${g.text}`),h(""),KD(g.text,g.voice)}function d(){let _=QD();if(!_){h("This browser has no speech recognition. Type the question.");return}let S=new _;S.lang="en-IN",S.interimResults=!1,S.continuous=!1,r(!0),h("Listening."),S.onresult=g=>{let f=g.results?.[0]?.[0]?.transcript||"";r(!1),u(f)},S.onerror=()=>{r(!1),h("The microphone did not open. Type the question.")},S.onend=()=>r(!1);try{S.start()}catch{r(!1),h("The microphone did not open. Type the question.")}}return(0,wt.jsxs)("div",{className:"u-talk",children:[(0,wt.jsx)("p",{className:"u-dx",children:p?"Talk to the patient":"The patient cannot speak. Talk to the family."}),(0,wt.jsxs)("div",{className:"u-talk-row",children:[(0,wt.jsx)("button",{type:"button",onClick:d,disabled:a,children:a?"Listening":"Speak"}),(0,wt.jsx)("input",{value:o,placeholder:"Or type the question",onChange:_=>l(_.target.value),onKeyDown:_=>{_.key==="Enter"&&(u(o),l(""))}})]}),(0,wt.jsx)("div",{className:"u-talk-prompts",children:dT().map(_=>(0,wt.jsx)("button",{type:"button",onClick:()=>u(_),children:_},_))}),c?(0,wt.jsx)("p",{className:"u-exam",children:c}):null,t?(0,wt.jsxs)("p",{className:"u-said",children:["You: ",t]}):null,i?(0,wt.jsx)("p",{className:"u-reply",children:i}):null]})}function iu(e){if(!M_||!e||!window.speechSynthesis)return;let t=e.replace(/\s+/g," ").trim();if(!t||t===kd)return;kd=t;let n=new SpeechSynthesisUtterance(t);n.rate=.96;let i=()=>{let s=mT();s?(n.voice=s,n.lang=s.lang||"en-GB"):n.lang="en-GB";try{speechSynthesis.resume(),speechSynthesis.speak(n)}catch{}};speechSynthesis.speaking||speechSynthesis.pending?(speechSynthesis.cancel(),window.setTimeout(i,80)):i()}function $D({patient:e}){if(!Va(e))return null;let t=Hd(e);return e.support==="imv"?(0,wt.jsxs)("p",{className:"u-exam",children:["Ventilator ",t.mode,". Paw ",t.peep,"/",t.pip,". VT ",t.tv," mL. RR ",t.rr,". FiO2 ",t.fio2,"%."]}):(0,wt.jsxs)("p",{className:"u-exam",children:["NIV ",t.mask,". IPAP ",t.ipap,". EPAP ",t.epap,". RR ",t.rr,". FiO2 ",t.fio2,"%."]})}function gT(){let[e,t]=(0,We.useState)(!1),[n,i]=(0,We.useState)(!1),[s,a]=(0,We.useState)(!0),[r,o]=(0,We.useState)(()=>Z1()),[l,c]=(0,We.useState)("command"),[h,p]=(0,We.useState)(null),[u,d]=(0,We.useState)(null),[_,S]=(0,We.useState)(0),g=(0,We.useRef)(r),f=(0,We.useRef)(0);g.current=r,(0,We.useEffect)(()=>{M_=s,!s&&window.speechSynthesis&&speechSynthesis.cancel()},[s]),(0,We.useEffect)(()=>{let N=r.find(O=>O.id===u)||null;yr.hr=N?.hr??80,yr.ventOn=s&&!!N&&Va(N),yr.ventRr=N?Lr(N):16},[r,u,s]),(0,We.useEffect)(()=>{if(!e)return;let N=window.setInterval(()=>{f.current+=1;let O=f.current;S(O);let G="",L=g.current.map(k=>{let X=Q1(k,O);return X.speech&&!X.patient.announced?(X.patient.announced=!0,G||(G=X.speech)):X.speech&&X.speech!==tu(X.patient)&&!G&&(G=X.speech),X.patient});g.current=L,o(L),G&&iu(G)},1e3);return()=>window.clearInterval(N)},[e]);let m=r.find(N=>N.id===u)||null,y=r.filter(N=>N.called&&!N.settled&&N.id!==u),x=r.filter(N=>N.settled).length,E=l==="ward"?m?.bed??null:null;function A(){Io(),window.speechSynthesis&&speechSynthesis.getVoices(),i(!0),kd="",iu("Six patients are in the unit. The command wall is in front of you. Tap a screen to enter the ICU."),window.setTimeout(()=>t(!0),900)}function v(){Io(),a(N=>!N)}function T(N){Io(),c("ward"),p(N),d(null),g.current.find(G=>G.bed===N)&&iu("You are standing in the middle of the ICU. Three patients are in the beds in front of you. Turn your head to see three more behind you. Each bed has a name. Tap a bed and you walk to that bedside.")}function I(N){Io();let O=g.current.find(G=>G.id===N);O&&(c("ward"),p(O.bed),d(N),iu(O.called&&!O.settled?tu(O):`${O.name}. ${O.dx}.`))}function R(N){if(!m)return;Io();let O=K1(m,N),G=r.map(L=>L.id===m.id?O.patient:L);g.current=G,o(G),kd="",iu(O.speech)}return(0,wt.jsxs)("div",{className:"u-root u-icu",children:[(0,wt.jsx)(hT,{patients:r,place:l,lookBed:h,walkBed:E,onCommandBed:T,onWardBed:N=>{let O=g.current.find(G=>G.bed===N);O&&I(O.id)}}),e?(0,wt.jsxs)("header",{className:"u-bar u-hud",children:[(0,wt.jsx)("button",{type:"button",onClick:()=>{c("command"),d(null)},children:"Command"}),(0,wt.jsx)("button",{type:"button",onClick:()=>{c("ward"),d(null)},children:"Middle"}),(0,wt.jsx)("h1",{children:l==="command"?"Command":m?`Bed ${m.bed}`:"ICU"}),(0,wt.jsxs)("span",{children:[Math.floor(_/60),":",String(_%60).padStart(2,"0")," \xB7 ",x,"/6"]}),(0,wt.jsx)("button",{type:"button",onClick:v,"aria-pressed":s,children:s?"Sound":"Sound off"})]}):null,e&&l==="ward"&&!m?(0,wt.jsx)("p",{className:"u-look",children:"Turn your head. Bed 1 to bed 6, with names above each patient."}):null,e&&l==="command"?(0,wt.jsx)("p",{className:"u-look",children:"Turn your head along the wall. Tap a live monitor to enter the unit."}):null,m&&l==="ward"?(0,wt.jsxs)("div",{className:"u-bedsheet",children:[y[0]?(0,wt.jsxs)("div",{className:"u-call",children:[(0,wt.jsx)("p",{children:tu(y[0])}),(0,wt.jsxs)("button",{type:"button",onClick:()=>I(y[0].id),children:["Go to bed ",y[0].bed]})]}):null,(0,wt.jsxs)("div",{className:"u-vitals",children:[(0,wt.jsxs)("span",{children:["Pulse ",(0,wt.jsx)("b",{children:Math.round(m.hr)})]}),(0,wt.jsxs)("span",{children:["BP"," ",(0,wt.jsxs)("b",{children:[Math.round(m.sbp),"/",Math.round(m.dbp)]})]}),(0,wt.jsxs)("span",{children:["SpO2 ",(0,wt.jsx)("b",{children:Math.round(m.spo2)})]}),(0,wt.jsxs)("span",{children:["RR ",(0,wt.jsx)("b",{children:Math.round(Lr(m))})]})]}),(0,wt.jsxs)("p",{className:"u-dx",children:["Bed ",m.bed," \xB7 ",m.name,". ",m.age,"-year-old ",m.sex,". ",m.dx,".",m.settled?" Settled.":""]}),(0,wt.jsx)(jD,{patient:m},m.id),(0,wt.jsx)("p",{children:m.story}),(0,wt.jsx)("p",{className:"u-exam",children:m.exam}),(0,wt.jsx)($D,{patient:m}),m.id==="imran"&&m.kKnown?(0,wt.jsxs)("p",{className:"u-exam",children:["Potassium ",m.k,". Glucose ",m.glucose,"."]}):null,m.id==="gopal"?(0,wt.jsxs)("p",{className:"u-exam",children:["Potassium ",m.k,". ",m.dialysis?"Dialysis is running.":"No urine."]}):null,m.heard?(0,wt.jsx)("p",{className:"u-heard",children:m.heard}):null,(0,wt.jsx)("div",{className:"u-acts",children:J1(m).map(N=>(0,wt.jsx)("button",{type:"button",onClick:()=>R(N.id),children:N.label},N.id))})]}):null,x===6&&e?(0,wt.jsx)("div",{className:"u-done u-done-float",children:(0,wt.jsx)("h2",{children:"The unit is settled."})}):null,e?null:(0,wt.jsxs)("div",{className:n?"u-gates open":"u-gates",children:[(0,wt.jsx)("p",{children:"Critical Care Universe"}),(0,wt.jsx)("h1",{children:"Six patients. One doctor."}),(0,wt.jsxs)("button",{type:"button",className:"u-frame",onClick:A,"aria-label":"Open the doors",children:[(0,wt.jsx)("span",{className:"u-leaf l"}),(0,wt.jsx)("span",{className:"u-leaf r"})]}),(0,wt.jsx)("button",{type:"button",onClick:A,children:"Enter the unit"})]})]})}var yT=vs(Ur(),1),_T=document.getElementById("app");_T&&(0,vT.createRoot)(_T).render((0,yT.jsx)(gT,{}));
/*! Bundled license information:

scheduler/cjs/scheduler.production.js:
  (**
   * @license React
   * scheduler.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react.production.js:
  (**
   * @license React
   * react.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.js:
  (**
   * @license React
   * react-dom.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom-client.production.js:
  (**
   * @license React
   * react-dom-client.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.production.js:
  (**
   * @license React
   * react-jsx-runtime.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
