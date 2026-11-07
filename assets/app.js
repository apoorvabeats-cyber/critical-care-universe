var oT=Object.create;var b_=Object.defineProperty;var lT=Object.getOwnPropertyDescriptor;var cT=Object.getOwnPropertyNames;var uT=Object.getPrototypeOf,hT=Object.prototype.hasOwnProperty;var Gi=(e,t)=>()=>{try{return t||e((t={exports:{}}).exports,t),t.exports}catch(n){throw t=0,n}};var fT=(e,t,n,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of cT(t))!hT.call(e,s)&&s!==n&&b_(e,s,{get:()=>t[s],enumerable:!(i=lT(t,s))||i.enumerable});return e};var ms=(e,t,n)=>(n=e!=null?oT(uT(e)):{},fT(t||!e||!e.__esModule?b_(n,"default",{value:e,enumerable:!0}):n,e));var U_=Gi(Ae=>{"use strict";function qd(e,t){var n=e.length;e.push(t);t:for(;0<n;){var i=n-1>>>1,s=e[i];if(0<tu(s,t))e[i]=t,e[n]=s,n=i;else break t}}function Vi(e){return e.length===0?null:e[0]}function nu(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;t:for(var i=0,s=e.length,a=s>>>1;i<a;){var r=2*(i+1)-1,o=e[r],l=r+1,c=e[l];if(0>tu(o,n))l<s&&0>tu(c,o)?(e[i]=c,e[l]=n,i=l):(e[i]=o,e[r]=n,i=r);else if(l<s&&0>tu(c,n))e[i]=c,e[l]=n,i=l;else break t}}return t}function tu(e,t){var n=e.sortIndex-t.sortIndex;return n!==0?n:e.id-t.id}Ae.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(T_=performance,Ae.unstable_now=function(){return T_.now()}):(kd=Date,E_=kd.now(),Ae.unstable_now=function(){return kd.now()-E_});var T_,kd,E_,gs=[],qs=[],dT=1,fi=null,_n=3,Yd=!1,ul=!1,hl=!1,Zd=!1,R_=typeof setTimeout=="function"?setTimeout:null,C_=typeof clearTimeout=="function"?clearTimeout:null,A_=typeof setImmediate<"u"?setImmediate:null;function eu(e){for(var t=Vi(qs);t!==null;){if(t.callback===null)nu(qs);else if(t.startTime<=e)nu(qs),t.sortIndex=t.expirationTime,qd(gs,t);else break;t=Vi(qs)}}function Jd(e){if(hl=!1,eu(e),!ul)if(Vi(gs)!==null)ul=!0,Rr||(Rr=!0,wr());else{var t=Vi(qs);t!==null&&Kd(Jd,t.startTime-e)}}var Rr=!1,fl=-1,N_=5,D_=-1;function L_(){return Zd?!0:!(Ae.unstable_now()-D_<N_)}function Xd(){if(Zd=!1,Rr){var e=Ae.unstable_now();D_=e;var t=!0;try{t:{ul=!1,hl&&(hl=!1,C_(fl),fl=-1),Yd=!0;var n=_n;try{e:{for(eu(e),fi=Vi(gs);fi!==null&&!(fi.expirationTime>e&&L_());){var i=fi.callback;if(typeof i=="function"){fi.callback=null,_n=fi.priorityLevel;var s=i(fi.expirationTime<=e);if(e=Ae.unstable_now(),typeof s=="function"){fi.callback=s,eu(e),t=!0;break e}fi===Vi(gs)&&nu(gs),eu(e)}else nu(gs);fi=Vi(gs)}if(fi!==null)t=!0;else{var a=Vi(qs);a!==null&&Kd(Jd,a.startTime-e),t=!1}}break t}finally{fi=null,_n=n,Yd=!1}t=void 0}}finally{t?wr():Rr=!1}}}var wr;typeof A_=="function"?wr=function(){A_(Xd)}:typeof MessageChannel<"u"?(Wd=new MessageChannel,w_=Wd.port2,Wd.port1.onmessage=Xd,wr=function(){w_.postMessage(null)}):wr=function(){R_(Xd,0)};var Wd,w_;function Kd(e,t){fl=R_(function(){e(Ae.unstable_now())},t)}Ae.unstable_IdlePriority=5;Ae.unstable_ImmediatePriority=1;Ae.unstable_LowPriority=4;Ae.unstable_NormalPriority=3;Ae.unstable_Profiling=null;Ae.unstable_UserBlockingPriority=2;Ae.unstable_cancelCallback=function(e){e.callback=null};Ae.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N_=0<e?Math.floor(1e3/e):5};Ae.unstable_getCurrentPriorityLevel=function(){return _n};Ae.unstable_next=function(e){switch(_n){case 1:case 2:case 3:var t=3;break;default:t=_n}var n=_n;_n=t;try{return e()}finally{_n=n}};Ae.unstable_requestPaint=function(){Zd=!0};Ae.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=_n;_n=e;try{return t()}finally{_n=n}};Ae.unstable_scheduleCallback=function(e,t,n){var i=Ae.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?i+n:i):n=i,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=n+s,e={id:dT++,callback:t,priorityLevel:e,startTime:n,expirationTime:s,sortIndex:-1},n>i?(e.sortIndex=n,qd(qs,e),Vi(gs)===null&&e===Vi(qs)&&(hl?(C_(fl),fl=-1):hl=!0,Kd(Jd,n-i))):(e.sortIndex=s,qd(gs,e),ul||Yd||(ul=!0,Rr||(Rr=!0,wr()))),e};Ae.unstable_shouldYield=L_;Ae.unstable_wrapCallback=function(e){var t=_n;return function(){var n=_n;_n=t;try{return e.apply(this,arguments)}finally{_n=n}}}});var I_=Gi((LD,O_)=>{"use strict";O_.exports=U_()});var Z_=Gi(It=>{"use strict";var $d=Symbol.for("react.transitional.element"),pT=Symbol.for("react.portal"),mT=Symbol.for("react.fragment"),gT=Symbol.for("react.strict_mode"),_T=Symbol.for("react.profiler"),vT=Symbol.for("react.consumer"),yT=Symbol.for("react.context"),xT=Symbol.for("react.forward_ref"),ST=Symbol.for("react.suspense"),MT=Symbol.for("react.memo"),H_=Symbol.for("react.lazy"),bT=Symbol.for("react.activity"),TT=Symbol.for("react.view_transition"),P_=Symbol.iterator;function ET(e){return e===null||typeof e!="object"?null:(e=P_&&e[P_]||e["@@iterator"],typeof e=="function"?e:null)}var G_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},V_=Object.assign,k_={};function Nr(e,t,n){this.props=e,this.context=t,this.refs=k_,this.updater=n||G_}Nr.prototype.isReactComponent={};Nr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Nr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function X_(){}X_.prototype=Nr.prototype;function tp(e,t,n){this.props=e,this.context=t,this.refs=k_,this.updater=n||G_}var ep=tp.prototype=new X_;ep.constructor=tp;V_(ep,Nr.prototype);ep.isPureReactComponent=!0;var B_=Array.isArray;function jd(){}var ye={H:null,A:null,T:null,S:null},W_=Object.prototype.hasOwnProperty;function np(e,t,n){var i=n.ref;return{$$typeof:$d,type:e,key:t,ref:i!==void 0?i:null,props:n}}function AT(e,t){return np(e.type,t,e.props)}function ip(e){return typeof e=="object"&&e!==null&&e.$$typeof===$d}function wT(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var z_=/\/+/g;function Qd(e,t){return typeof e=="object"&&e!==null&&e.key!=null?wT(""+e.key):t.toString(36)}function RT(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(jd,jd):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function Cr(e,t,n,i,s){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var r=!1;if(e===null)r=!0;else switch(a){case"bigint":case"string":case"number":r=!0;break;case"object":switch(e.$$typeof){case $d:case pT:r=!0;break;case H_:return r=e._init,Cr(r(e._payload),t,n,i,s)}}if(r)return s=s(e),r=i===""?"."+Qd(e,0):i,B_(s)?(n="",r!=null&&(n=r.replace(z_,"$&/")+"/"),Cr(s,t,n,"",function(c){return c})):s!=null&&(ip(s)&&(s=AT(s,n+(s.key==null||e&&e.key===s.key?"":(""+s.key).replace(z_,"$&/")+"/")+r)),t.push(s)),1;r=0;var o=i===""?".":i+":";if(B_(e))for(var l=0;l<e.length;l++)i=e[l],a=o+Qd(i,l),r+=Cr(i,t,n,a,s);else if(l=ET(e),typeof l=="function")for(e=l.call(e),l=0;!(i=e.next()).done;)i=i.value,a=o+Qd(i,l++),r+=Cr(i,t,n,a,s);else if(a==="object"){if(typeof e.then=="function")return Cr(RT(e),t,n,i,s);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return r}function iu(e,t,n){if(e==null)return e;var i=[],s=0;return Cr(e,i,"","",function(a){return t.call(n,a,s++)}),i}function CT(e){if(e._status===-1){var t=e._result,n=t();n.then(function(i){(e._status===0||e._status===-1)&&(e._status=1,e._result=i,n.status===void 0&&(n.status="fulfilled",n.value=i))},function(i){(e._status===0||e._status===-1)&&(e._status=2,e._result=i,n.status===void 0&&(n.status="rejected",n.reason=i))}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var F_=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function q_(e){var t=ye.T,n={};n.types=t!==null?t.types:null,ye.T=n;try{var i=e(),s=ye.S;s!==null&&s(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(jd,F_)}catch(a){F_(a)}finally{t!==null&&n.types!==null&&(t.types=n.types),ye.T=t}}function Y_(e){var t=ye.T;if(t!==null){var n=t.types;n===null?t.types=[e]:n.indexOf(e)===-1&&n.push(e)}else q_(Y_.bind(null,e))}var NT={map:iu,forEach:function(e,t,n){iu(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return iu(e,function(){t++}),t},toArray:function(e){return iu(e,function(t){return t})||[]},only:function(e){if(!ip(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};It.Activity=bT;It.Children=NT;It.Component=Nr;It.Fragment=mT;It.Profiler=_T;It.PureComponent=tp;It.StrictMode=gT;It.Suspense=ST;It.ViewTransition=TT;It.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ye;It.__COMPILER_RUNTIME={__proto__:null,c:function(e){return ye.H.useMemoCache(e)}};It.addTransitionType=Y_;It.cache=function(e){return function(){return e.apply(null,arguments)}};It.cacheSignal=function(){return null};It.cloneElement=function(e,t,n){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var i=V_({},e.props),s=e.key;if(t!=null)for(a in t.key!==void 0&&(s=""+t.key),t)!W_.call(t,a)||a==="key"||a==="__self"||a==="__source"||a==="ref"&&t.ref===void 0||(i[a]=t[a]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var r=Array(a),o=0;o<a;o++)r[o]=arguments[o+2];i.children=r}return np(e.type,s,i)};It.createContext=function(e){return e={$$typeof:yT,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:vT,_context:e},e};It.createElement=function(e,t,n){var i,s={},a=null;if(t!=null)for(i in t.key!==void 0&&(a=""+t.key),t)W_.call(t,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(s[i]=t[i]);var r=arguments.length-2;if(r===1)s.children=n;else if(1<r){for(var o=Array(r),l=0;l<r;l++)o[l]=arguments[l+2];s.children=o}if(e&&e.defaultProps)for(i in r=e.defaultProps,r)s[i]===void 0&&(s[i]=r[i]);return np(e,a,s)};It.createRef=function(){return{current:null}};It.forwardRef=function(e){return{$$typeof:xT,render:e}};It.isValidElement=ip;It.lazy=function(e){return{$$typeof:H_,_payload:{_status:-1,_result:e},_init:CT}};It.memo=function(e,t){return{$$typeof:MT,type:e,compare:t===void 0?null:t}};It.startTransition=q_;It.unstable_useCacheRefresh=function(){return ye.H.useCacheRefresh()};It.use=function(e){return ye.H.use(e)};It.useActionState=function(e,t,n){return ye.H.useActionState(e,t,n)};It.useCallback=function(e,t){return ye.H.useCallback(e,t)};It.useContext=function(e){return ye.H.useContext(e)};It.useDebugValue=function(){};It.useDeferredValue=function(e,t){return ye.H.useDeferredValue(e,t)};It.useEffect=function(e,t){return ye.H.useEffect(e,t)};It.useEffectEvent=function(e){return ye.H.useEffectEvent(e)};It.useId=function(){return ye.H.useId()};It.useImperativeHandle=function(e,t,n){return ye.H.useImperativeHandle(e,t,n)};It.useInsertionEffect=function(e,t){return ye.H.useInsertionEffect(e,t)};It.useLayoutEffect=function(e,t){return ye.H.useLayoutEffect(e,t)};It.useMemo=function(e,t){return ye.H.useMemo(e,t)};It.useOptimistic=function(e,t){return ye.H.useOptimistic(e,t)};It.useReducer=function(e,t,n){return ye.H.useReducer(e,t,n)};It.useRef=function(e){return ye.H.useRef(e)};It.useState=function(e){return ye.H.useState(e)};It.useSyncExternalStore=function(e,t,n){return ye.H.useSyncExternalStore(e,t,n)};It.useTransition=function(){return ye.H.useTransition()};It.version="19.3.0"});var dl=Gi((OD,J_)=>{"use strict";J_.exports=Z_()});var j_=Gi(vn=>{"use strict";var DT=dl();function Q_(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Ys(){}var An={d:{f:Ys,r:function(){throw Error(Q_(522))},D:Ys,C:Ys,L:Ys,m:Ys,X:Ys,S:Ys,M:Ys},p:0,findDOMNode:null},LT=Symbol.for("react.portal"),UT=Symbol.for("react.recoverable"),K_=Symbol.for("react.optimistic_key");function OT(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:LT,key:i==null?null:i===K_?K_:""+i,children:e,containerInfo:t,implementation:n}}var pl=DT.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function su(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}vn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=An;vn.browser=function(e){return{$$typeof:UT,_reason:e}};vn.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(Q_(299));return OT(e,t,null,n)};vn.flushSync=function(e){var t=pl.T,n=An.p;try{if(pl.T=null,An.p=2,e)return e()}finally{pl.T=t,An.p=n,An.d.f()}};vn.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,An.d.C(e,t))};vn.prefetchDNS=function(e){typeof e=="string"&&An.d.D(e)};vn.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var n=t.as,i=su(n,t.crossOrigin),s=typeof t.integrity=="string"?t.integrity:void 0,a=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;n==="style"?An.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:i,integrity:s,fetchPriority:a}):n==="script"&&An.d.X(e,{crossOrigin:i,integrity:s,fetchPriority:a,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};vn.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var n=su(t.as,t.crossOrigin);An.d.M(e,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0})}}else t==null&&An.d.M(e)};vn.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var n=t.as,i=su(n,t.crossOrigin);An.d.L(e,n,{crossOrigin:i,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};vn.preloadModule=function(e,t){if(typeof e=="string")if(t){var n=su(t.as,t.crossOrigin);An.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0})}else An.d.m(e)};vn.requestFormReset=function(e){An.d.r(e)};vn.unstable_batchedUpdates=function(e,t){return e(t)};vn.useFormState=function(e,t,n){return pl.H.useFormState(e,t,n)};vn.useFormStatus=function(){return pl.H.useHostTransitionStatus()};vn.version="19.3.0"});var ev=Gi((PD,tv)=>{"use strict";function $_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE($_)}catch(e){console.error(e)}}$_(),tv.exports=j_()});var GM=Gi(Fh=>{"use strict";var qe=I_(),Hy=dl(),IT=ev();function j(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Gy(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ec(e){for(var t=e,n=t;n&&!n.alternate;)t=n,(t.flags&4098)!==0&&(e=t.return),n=t.return;for(;t.return;)t=t.return;return t.tag===3?e:null}function Vy(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ky(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function nv(e){if(ec(e)!==e)throw Error(j(188))}function PT(e){var t=e.alternate;if(!t){if(t=ec(e),t===null)throw Error(j(188));return t!==e?null:e}for(var n=e,i=t;;){var s=n.return;if(s===null)break;var a=s.alternate;if(a===null){if(i=s.return,i!==null){n=i;continue}break}if(s.child===a.child){for(a=s.child;a;){if(a===n)return nv(s),e;if(a===i)return nv(s),t;a=a.sibling}throw Error(j(188))}if(n.return!==i.return)n=s,i=a;else{for(var r=!1,o=s.child;o;){if(o===n){r=!0,n=s,i=a;break}if(o===i){r=!0,i=s,n=a;break}o=o.sibling}if(!r){for(o=a.child;o;){if(o===n){r=!0,n=a,i=s;break}if(o===i){r=!0,i=a,n=s;break}o=o.sibling}if(!r)throw Error(j(189))}}if(n.alternate!==i)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?e:t}function Xy(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=Xy(e),t!==null)return t;e=e.sibling}return null}function Gn(e,t,n,i,s,a){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&n(e,i,s,a)||(e.tag!==22||e.memoizedState===null)&&(t||e.tag!==5&&e.tag!==27)&&Gn(e.child,t,n,i,s,a))return!0;e=e.sibling}return!1}function rr(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function iv(e){var t=!1;for(e=e.return;e!==null&&(e.tag===4&&(t=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return t}function Wy(e){var t=[null,null],n=rr(e);return n===null||qy(t,e,n.child,{foundSelf:!1}),t}function qy(e,t,n,i){for(;n!==null;){if(n===t)i.foundSelf=!0;else if(n.tag===5||n.tag===27||n.tag===6){if(i.foundSelf)return e[1]=n,!0;e[0]=n}else if((n.tag!==22||n.memoizedState===null)&&qy(e,t,n.child,i))return!0;n=n.sibling}return!1}function We(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(j(559))}}var Br=null,Ip=null;function BT(e,t,n){return e===n?!0:e===t?(Br=e,!0):!1}function zT(e,t,n){return e===n?(Ip=e,!1):e===t?(Ip!==null&&(Br=e),!0):!1}function sv(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function Pp(e,t,n){for(var i=0,s=e;s;s=n(s))i++;s=0;for(var a=t;a;a=n(a))s++;for(;0<i-s;)e=n(e),i--;for(;0<s-i;)t=n(t),s--;for(;i--;){if(e===t||t!==null&&e===t.alternate)return e;e=n(e),t=n(t)}return null}var _e=Object.assign,FT=Symbol.for("react.element"),au=Symbol.for("react.transitional.element"),Sl=Symbol.for("react.portal"),zr=Symbol.for("react.fragment"),Yy=Symbol.for("react.strict_mode"),Bp=Symbol.for("react.profiler"),Zy=Symbol.for("react.consumer"),Zi=Symbol.for("react.context"),qm=Symbol.for("react.forward_ref"),zp=Symbol.for("react.suspense"),Fp=Symbol.for("react.suspense_list"),Ym=Symbol.for("react.memo"),Qs=Symbol.for("react.lazy"),Hp=Symbol.for("react.activity"),HT=Symbol.for("react.legacy_hidden"),GT=Symbol.for("react.memo_cache_sentinel"),Gp=Symbol.for("react.view_transition"),VT=Symbol.for("react.recoverable"),av=Symbol.iterator;function ml(e){return e===null||typeof e!="object"?null:(e=av&&e[av]||e["@@iterator"],typeof e=="function"?e:null)}var kT=Symbol.for("react.client.reference");function Vp(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===kT?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case zr:return"Fragment";case Bp:return"Profiler";case Yy:return"StrictMode";case zp:return"Suspense";case Fp:return"SuspenseList";case Hp:return"Activity";case Gp:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case Sl:return"Portal";case Zi:return e.displayName||"Context";case Zy:return(e._context.displayName||"Context")+".Consumer";case qm:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ym:return t=e.displayName||null,t!==null?t:Vp(e.type)||"Memo";case Qs:t=e._payload,e=e._init;try{return Vp(e(t))}catch{}}return null}var Ml=Array.isArray,Dt=Hy.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ae=IT.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Ya={pending:!1,data:null,method:null,action:null},kp=[],Fr=-1;function es(e){return{current:e}}function hn(e){0>Fr||(e.current=kp[Fr],kp[Fr]=null,Fr--)}function Me(e,t){Fr++,kp[Fr]=e.current,e.current=t}var ji=es(null),Fl=es(null),ra=es(null),Wu=es(null);function qu(e,t){switch(Me(ra,t),Me(Fl,e),Me(ji,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?yy(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=yy(t),e=gM(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}hn(ji),Me(ji,e)}function ao(){hn(ji),hn(Fl),hn(ra)}function Xp(e){var t=e.memoizedState;t!==null&&(go._currentValue=t.memoizedState,Me(Wu,e)),t=ji.current;var n=gM(t,e.type);t!==n&&(Me(Fl,e),Me(ji,n))}function Yu(e){Fl.current===e&&(hn(ji),hn(Fl)),Wu.current===e&&(hn(Wu),go._currentValue=Ya)}var sp,rv;function Js(e){if(sp===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);sp=t&&t[1]||"",rv=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+sp+e+rv}var ap=!1;function rp(e,t){if(!e||ap)return"";ap=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var p=function(){throw Error()};if(Object.defineProperty(p.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(p,[])}catch(v){var u=v}Reflect.construct(e,[],p)}else{try{p.call()}catch(v){u=v}p=!1;try{var d=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),p=!0,new e}finally{p&&(d!==void 0?Object.defineProperty(e.prototype,"props",d):delete e.prototype.props)}}}else{try{throw Error()}catch(v){u=v}(p=e())&&typeof p.catch=="function"&&p.catch(function(){})}}catch(v){if(v&&u&&typeof v.stack=="string")return[v.stack,u.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var a=i.DetermineComponentFrameRoot(),r=a[0],o=a[1];if(r&&o){var l=r.split(`
`),c=o.split(`
`);for(s=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;s<c.length&&!c[s].includes("DetermineComponentFrameRoot");)s++;if(i===l.length||s===c.length)for(i=l.length-1,s=c.length-1;1<=i&&0<=s&&l[i]!==c[s];)s--;for(;1<=i&&0<=s;i--,s--)if(l[i]!==c[s]){if(i!==1||s!==1)do if(i--,s--,0>s||l[i]!==c[s]){var f=`
`+l[i].replace(" at new "," at ");return e.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",e.displayName)),f}while(1<=i&&0<=s);break}}}finally{ap=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Js(n):""}function XT(e,t){switch(e.tag){case 26:case 27:case 5:return Js(e.type);case 16:return Js("Lazy");case 13:return e.child!==t&&t!==null?Js("Suspense Fallback"):Js("Suspense");case 19:return Js("SuspenseList");case 0:case 15:return rp(e.type,!1);case 11:return rp(e.type.render,!1);case 1:return rp(e.type,!0);case 31:return Js("Activity");case 30:return Js("ViewTransition");default:return""}}function ov(e){try{var t="",n=null;do t+=XT(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var Wp=Object.prototype.hasOwnProperty,Zm=qe.unstable_scheduleCallback,op=qe.unstable_cancelCallback,WT=qe.unstable_shouldYield,qT=qe.unstable_requestPaint,Kn=qe.unstable_now,YT=qe.unstable_getCurrentPriorityLevel,Jy=qe.unstable_ImmediatePriority,Ky=qe.unstable_UserBlockingPriority,Zu=qe.unstable_NormalPriority,ZT=qe.unstable_LowPriority,Qy=qe.unstable_IdlePriority,JT=qe.log,KT=qe.unstable_setDisableYieldValue,nc=null,Qn=null;function ta(e){if(typeof JT=="function"&&KT(e),Qn&&typeof Qn.setStrictMode=="function")try{Qn.setStrictMode(nc,e)}catch{}}var jn=Math.clz32?Math.clz32:$T,QT=Math.log,jT=Math.LN2;function $T(e){return e>>>=0,e===0?32:31-(QT(e)/jT|0)|0}var ru=256,ou=262144,lu=4194304;function Va(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function xh(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var s=0,a=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var o=i&134217727;return o!==0?(i=o&~a,i!==0?s=Va(i):(r&=o,r!==0?s=Va(r):n||(n=o&~e,n!==0&&(s=Va(n))))):(o=i&~a,o!==0?s=Va(o):r!==0?s=Va(r):n||(n=i&~e,n!==0&&(s=Va(n)))),s===0?0:t!==0&&t!==s&&(t&a)===0&&(a=s&-s,n=t&-t,a>=n||a===32&&(n&4194048)!==0)?t:s}function ic(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function jy(e,t){(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var i=31-jn(n),s=1<<i;t|=e[i],n&=~s}return t}function tE(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $y(){var e=lu;return lu<<=1,(lu&62914560)===0&&(lu=4194304),e}function lp(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function sc(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function eE(e,t,n,i,s,a){var r=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var o=e.entanglements,l=e.expirationTimes,c=e.hiddenUpdates;for(n=r&~n;0<n;){var f=31-jn(n),p=1<<f;o[f]=0,l[f]=-1;var u=c[f];if(u!==null)for(c[f]=null,f=0;f<u.length;f++){var d=u[f];d!==null&&(d.lane&=-536870913)}n&=~p}i!==0&&tx(e,i,0),a!==0&&s===0&&e.tag!==0&&(e.suspendedLanes|=a&~(r&~t))}function tx(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-jn(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function ex(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-jn(n),s=1<<i;s&t|e[i]&t&&(e[i]|=t),n&=~s}}function nx(e,t){var n=t&-t;return n=(n&42)!==0?1:Jm(n),(n&(e.suspendedLanes|t))!==0?0:n}function Jm(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Km(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function ix(){var e=ae.p;return e!==0?e:(e=window.event,e===void 0?32:zM(e.type))}function lv(e,t){var n=ae.p;try{return ae.p=e,t()}finally{ae.p=n}}var Cs=Math.random().toString(36).slice(2),cn="__reactFiber$"+Cs,Vn="__reactProps$"+Cs,yo="__reactContainer$"+Cs,cv="__reactEvents$"+Cs,nE="__reactListeners$"+Cs,iE="__reactHandles$"+Cs,uv="__reactResources$"+Cs,ac="__reactMarker$"+Cs,Ju="__reactLoad$"+Cs;function Sh(e){delete e[cn],delete e[Vn],delete e[nE],delete e[iE]}function Wa(e){var t;if(t=e[cn])return t;for(var n=e.parentNode;n;){if(t=n[yo]||n[cn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=wy(e);e!==null;){if(n=e[cn])return n;e=wy(e)}return t}e=n,n=e.parentNode}return null}function xo(e){if(e=e[cn]||e[yo]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function bl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(j(33))}function Jr(e){var t=e[uv];return t||(t=e[uv]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function tn(e){e[ac]=!0}function sx(e){e[Ju]=void 0}var ax=new Set,rx={};function or(e,t){ro(e,t),ro(e+"Capture",t)}function ro(e,t){for(rx[e]=t,e=0;e<t.length;e++)ax.add(t[e])}var sE=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),hv={},fv={};function aE(e){return Wp.call(fv,e)?!0:Wp.call(hv,e)?!1:sE.test(e)?fv[e]=!0:(hv[e]=!0,!1)}var ne=!1;function dv(){var e=ne;return ne=!1,e}function Au(e,t,n){if(aE(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,n)}}function cu(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,n)}}function _s(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,i)}}function qn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ox(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function rE(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var s=i.get,a=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(r){n=""+r,a.call(this,r)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(r){n=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function qp(e){if(!e._valueTracker){var t=ox(e)?"checked":"value";e._valueTracker=rE(e,t,""+e[t])}}function lx(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=ox(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}var oE=/[\n"\\]/g;function _i(e){return e.replace(oE,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Yp(e,t,n,i,s,a,r,o){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+qn(t)):e.value!==""+qn(t)&&(e.value=""+qn(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?r==="number"&&e.value==t?cp(e,qn(e.value)):cp(e,qn(t)):n!=null?cp(e,qn(n)):i!=null&&e.removeAttribute("value"),s==null&&a!=null&&(e.defaultChecked=!!a),s!=null&&(e.checked=s&&typeof s!="function"&&typeof s!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+qn(o):e.removeAttribute("name")}function cx(e,t,n,i,s,a,r,o){if(a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"&&(e.type=a),t!=null||n!=null){if(!(a!=="submit"&&a!=="reset"||t!=null)){qp(e);return}n=n!=null?""+qn(n):"",t=t!=null?""+qn(t):n,o||t===e.value||(e.value=t),e.defaultValue=t}i=i??s,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=o?e.checked:!!i,e.defaultChecked=!!i,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r),qp(e)}function cp(e,t){e.defaultValue!==""+t&&(e.defaultValue=""+t)}function Kr(e,t,n,i){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&i&&(e[n].defaultSelected=!0)}else{for(n=""+qn(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,i&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function ux(e,t,n){if(t!=null&&(t=""+qn(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+qn(n):""}function hx(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(j(92));if(Ml(i)){if(1<i.length)throw Error(j(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=qn(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),qp(e)}function oo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var lE=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function pv(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||lE.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function fx(e,t,n){if(t!=null&&typeof t!="object")throw Error(j(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="",ne=!0);for(var s in t)i=t[s],t.hasOwnProperty(s)&&n[s]!==i&&(pv(e,s,i),ne=!0)}else for(var a in t)t.hasOwnProperty(a)&&pv(e,a,t[a])}function Qm(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var cE=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),uE=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function wu(e){return uE.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ji(){}var Zp=null;function jm(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Hr=null,Qr=null;function mv(e){var t=xo(e);if(t&&(e=t.stateNode)){var n=e[Vn]||null;t:switch(e=t.stateNode,t.type){case"input":if(Yp(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+_i(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var s=i[Vn]||null;if(!s)throw Error(j(90));Yp(i,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&lx(i)}break t;case"textarea":ux(e,n.value,n.defaultValue);break t;case"select":t=n.value,t!=null&&Kr(e,!!n.multiple,t,!1)}}}var up=!1;function dx(e,t,n){if(up)return e(t,n);up=!0;try{var i=e(t);return i}finally{if(up=!1,(Hr!==null||Qr!==null)&&(Ih(),Hr&&(t=Hr,e=Qr,Qr=Hr=null,mv(t),e)))for(t=0;t<e.length;t++)mv(e[t])}}function Hl(e,t){var n=e.stateNode;if(n===null)return null;var i=n[Vn]||null;if(i===null)return null;n=i[t];t:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break t;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(j(231,t,typeof n));return n}var bs=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Jp=!1;if(bs)try{Dr={},Object.defineProperty(Dr,"passive",{get:function(){Jp=!0}}),window.addEventListener("test",Dr,Dr),window.removeEventListener("test",Dr,Dr)}catch{Jp=!1}var Dr,ea=null,$m=null,Ru=null;function px(){if(Ru)return Ru;var e,t=$m,n=t.length,i,s="value"in ea?ea.value:ea.textContent,a=s.length;for(e=0;e<n&&t[e]===s[e];e++);var r=n-e;for(i=1;i<=r&&t[n-i]===s[a-i];i++);return Ru=s.slice(e,1<i?1-i:void 0)}function Cu(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function uu(){return!0}function gv(){return!1}function Nn(e){function t(n,i,s,a,r){this._reactName=n,this._targetInst=s,this.type=i,this.nativeEvent=a,this.target=r,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(a):a[o]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?uu:gv,this.isPropagationStopped=gv,this}return _e(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=uu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=uu)},persist:function(){},isPersistent:uu}),t}var Sa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Mh=Nn(Sa),rc=_e({},Sa,{view:0,detail:0}),hE=Nn(rc),hp,fp,gl,bh=_e({},rc,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tg,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==gl&&(gl&&e.type==="mousemove"?(hp=e.screenX-gl.screenX,fp=e.screenY-gl.screenY):fp=hp=0,gl=e),hp)},movementY:function(e){return"movementY"in e?e.movementY:fp}}),_v=Nn(bh),fE=_e({},bh,{dataTransfer:0}),dE=Nn(fE),pE=_e({},rc,{relatedTarget:0}),dp=Nn(pE),mE=_e({},Sa,{animationName:0,elapsedTime:0,pseudoElement:0}),gE=Nn(mE),_E=_e({},Sa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),vE=Nn(_E),yE=_e({},Sa,{data:0}),vv=Nn(yE),xE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},SE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ME={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bE(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ME[e])?!!t[e]:!1}function tg(){return bE}var TE=_e({},rc,{key:function(e){if(e.key){var t=xE[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Cu(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?SE[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tg,charCode:function(e){return e.type==="keypress"?Cu(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Cu(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),EE=Nn(TE),AE=_e({},bh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),yv=Nn(AE),wE=_e({},Sa,{submitter:0}),RE=Nn(wE),CE=_e({},rc,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tg}),NE=Nn(CE),DE=_e({},Sa,{propertyName:0,elapsedTime:0,pseudoElement:0}),LE=Nn(DE),UE=_e({},bh,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),OE=Nn(UE),IE=_e({},Sa,{newState:0,oldState:0,source:0}),PE=Nn(IE),BE=[9,13,27,32],eg=bs&&"CompositionEvent"in window,Al=null;bs&&"documentMode"in document&&(Al=document.documentMode);var zE=bs&&"TextEvent"in window&&!Al,mx=bs&&(!eg||Al&&8<Al&&11>=Al),xv=" ",Sv=!1;function gx(e,t){switch(e){case"keyup":return BE.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _x(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Gr=!1;function FE(e,t){switch(e){case"compositionend":return _x(t);case"keypress":return t.which!==32?null:(Sv=!0,xv);case"textInput":return e=t.data,e===xv&&Sv?null:e;default:return null}}function HE(e,t){if(Gr)return e==="compositionend"||!eg&&gx(e,t)?(e=px(),Ru=$m=ea=null,Gr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return mx&&t.locale!=="ko"?null:t.data;default:return null}}var GE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mv(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!GE[e.type]:t==="textarea"}function vx(e,t,n,i){Hr?Qr?Qr.push(i):Qr=[i]:Hr=i,t=_h(t,"onChange"),0<t.length&&(n=new Mh("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var wl=null,Gl=null;function VE(e){dM(e,0)}function Th(e){var t=bl(e);if(lx(t))return e}function bv(e,t){if(e==="change")return t}var yx=!1;bs&&(bs?(fu="oninput"in document,fu||(pp=document.createElement("div"),pp.setAttribute("oninput","return;"),fu=typeof pp.oninput=="function"),hu=fu):hu=!1,yx=hu&&(!document.documentMode||9<document.documentMode));var hu,fu,pp;function Tv(){wl&&(wl.detachEvent("onpropertychange",xx),Gl=wl=null)}function xx(e){if(e.propertyName==="value"&&Th(Gl)){var t=[];vx(t,Gl,e,jm(e)),dx(VE,t)}}function kE(e,t,n){e==="focusin"?(Tv(),wl=t,Gl=n,wl.attachEvent("onpropertychange",xx)):e==="focusout"&&Tv()}function XE(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Th(Gl)}function WE(e,t){if(e==="click")return Th(t)}function qE(e,t){if(e==="input"||e==="change")return Th(t)}function YE(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ti=typeof Object.is=="function"?Object.is:YE;function Vl(e,t){if(ti(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var s=n[i];if(!Wp.call(t,s)||!ti(e[s],t[s]))return!1}return!0}function Kp(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ev(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Av(e,t){var n=Ev(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=Ev(n)}}function Sx(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Sx(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Mx(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Kp(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Kp(e.document)}return t}function ng(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var ZE=bs&&"documentMode"in document&&11>=document.documentMode,Vr=null,Qp=null,Rl=null,jp=!1;function wv(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;jp||Vr==null||Vr!==Kp(i)||(i=Vr,"selectionStart"in i&&ng(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Rl&&Vl(Rl,i)||(Rl=i,i=_h(Qp,"onSelect"),0<i.length&&(t=new Mh("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=Vr)))}function Ha(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var kr={animationend:Ha("Animation","AnimationEnd"),animationiteration:Ha("Animation","AnimationIteration"),animationstart:Ha("Animation","AnimationStart"),transitionrun:Ha("Transition","TransitionRun"),transitionstart:Ha("Transition","TransitionStart"),transitioncancel:Ha("Transition","TransitionCancel"),transitionend:Ha("Transition","TransitionEnd")},mp={},bx={};bs&&(bx=document.createElement("div").style,"AnimationEvent"in window||(delete kr.animationend.animation,delete kr.animationiteration.animation,delete kr.animationstart.animation),"TransitionEvent"in window||delete kr.transitionend.transition);function lr(e){if(mp[e])return mp[e];if(!kr[e])return e;var t=kr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in bx)return mp[e]=t[n];return e}var Tx=lr("animationend"),Ex=lr("animationiteration"),Ax=lr("animationstart"),JE=lr("transitionrun"),KE=lr("transitionstart"),QE=lr("transitioncancel"),wx=lr("transitionend"),Rx=new Map,$p="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");$p.push("scrollEnd");function Di(e,t){Rx.set(e,t),or(t,[e])}var jE=0;function Ts(e,t){if(e.name!=null&&e.name!=="auto")return e.name;if(t.autoName!==null)return t.autoName;e=Ni.identifierPrefix;var n=jE++;return e="_"+e+"t_"+n.toString(32)+"_",t.autoName=e}function Rv(e){if(e==null||typeof e=="string")return e;var t=null,n=so;if(n!==null)for(var i=0;i<n.length;i++){var s=e[n[i]];if(s!=null){if(s==="none")return"none";t=t==null?s:t+(" "+s)}}return t??e.default}function Ns(e,t){return e=Rv(e),t=Rv(t),t==null?e==="auto"?null:e:t==="auto"?null:t}var Ku=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},pi=[],Xr=0,ig=0;function Eh(){for(var e=Xr,t=ig=Xr=0;t<e;){var n=pi[t];pi[t++]=null;var i=pi[t];pi[t++]=null;var s=pi[t];pi[t++]=null;var a=pi[t];if(pi[t++]=null,i!==null&&s!==null){var r=i.pending;r===null?s.next=s:(s.next=r.next,r.next=s),i.pending=s}a!==0&&Cx(n,s,a)}}function Ah(e,t,n,i){pi[Xr++]=e,pi[Xr++]=t,pi[Xr++]=n,pi[Xr++]=i,ig|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function sg(e,t,n,i){return Ah(e,t,n,i),Qu(e)}function cr(e,t){return Ah(e,null,null,t),Qu(e)}function Cx(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var s=!1,a=e.return;a!==null;)a.childLanes|=n,i=a.alternate,i!==null&&(i.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(s=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,s&&t!==null&&(s=31-jn(n),e=a.hiddenUpdates,i=e[s],i===null?e[s]=[t]:i.push(t),t.lane=n|536870912),a):null}function Qu(e){if(50<zl)throw zl=0,Fu=null,Error(j(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Wr={};function $E(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Fn(e,t,n,i){return new $E(e,t,n,i)}function ag(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ss(e,t){var n=e.alternate;return n===null?(n=Fn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&1206910976,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Nx(e,t){e.flags&=1206910978;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Nu(e,t,n,i,s,a){var r=0;if(i=e,typeof i=="function")ag(i)&&(r=1);else if(typeof i=="string")r=Ew(e,n,ji.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(i){case Hp:return e=Fn(31,n,t,s),e.elementType=Hp,e.lanes=a,e;case zr:return Za(n.children,s,a,t);case Yy:r=8,s|=24;break;case Bp:return e=Fn(12,n,t,s|2),e.elementType=Bp,e.lanes=a,e;case zp:return e=Fn(13,n,t,s),e.elementType=zp,e.lanes=a,e;case Fp:return e=Fn(19,n,t,s),e.elementType=Fp,e.lanes=a,e;case HT:case Gp:return e=s|32,e=Fn(30,n,t,e),e.elementType=Gp,e.lanes=a,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case Zi:r=10;break t;case Zy:r=9;break t;case qm:r=11;break t;case Ym:r=14;break t;case Qs:r=16,i=null;break t}r=29,n=Error(j(130,e===null?"null":typeof e,"")),i=null}return t=Fn(r,n,t,s),t.elementType=e,t.type=i,t.lanes=a,t}function Za(e,t,n,i){return e=Fn(7,e,i,t),e.lanes=n,e}function gp(e,t,n){return e=Fn(6,e,null,t),e.lanes=n,e}function Dx(e){var t=Fn(18,null,null,0);return t.stateNode=e,t}function _p(e,t,n){return t=Fn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Cv=new WeakMap;function vi(e,t){if(typeof e=="object"&&e!==null){var n=Cv.get(e);return n!==void 0?n:(t={value:e,source:t,stack:ov(t)},Cv.set(e,t),t)}return{value:e,source:t,stack:ov(t)}}var qr=[],Yr=0,ju=null,kl=0,mi=[],gi=0,ga=null,Ki=1,Qi="";function ys(e,t){qr[Yr++]=kl,qr[Yr++]=ju,ju=e,kl=t}function Lx(e,t,n){mi[gi++]=Ki,mi[gi++]=Qi,mi[gi++]=ga,ga=e;var i=Ki;e=Qi;var s=32-jn(i)-1;i&=~(1<<s),n+=1;var a=32-jn(t)+s;if(30<a){var r=s-s%5;a=(i&(1<<r)-1).toString(32),i>>=r,s-=r,Ki=1<<32-jn(t)+s|n<<s|i,Qi=a+e}else Ki=1<<a|n<<s|i,Qi=e}function wh(e){e.return!==null&&(ys(e,1),Lx(e,1,0))}function rg(e){for(;e===ju;)ju=qr[--Yr],qr[Yr]=null,kl=qr[--Yr],qr[Yr]=null;for(;e===ga;)ga=mi[--gi],mi[gi]=null,Qi=mi[--gi],mi[gi]=null,Ki=mi[--gi],mi[gi]=null}function Ux(e,t){mi[gi++]=Ki,mi[gi++]=Qi,mi[gi++]=ga,Ki=t.id,Qi=t.overflow,ga=e}var en=null,Se=null,kt=!1,oa=null,yi=!1,tm=Error(j(519));function _a(e){var t=Error(j(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Xl(vi(t,e)),tm}function Nv(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[cn]=e,t[Vn]=i,n){case"dialog":Xt("cancel",t),Xt("close",t);break;case"iframe":case"object":case"embed":Xt("load",t);break;case"video":case"audio":for(n=0;n<Zl.length;n++)Xt(Zl[n],t);break;case"source":Xt("error",t);break;case"img":case"image":case"link":Xt("error",t),Xt("load",t);break;case"details":Xt("toggle",t);break;case"input":Xt("invalid",t),cx(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":Xt("invalid",t);break;case"textarea":Xt("invalid",t),hx(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||mM(t.textContent,n)?(i.popover!=null&&(Xt("beforetoggle",t),Xt("toggle",t)),i.onScroll!=null&&Xt("scroll",t),i.onScrollEnd!=null&&Xt("scrollend",t),i.onClick!=null&&(t.onclick=Ji),t=!0):t=!1,t||_a(e,!0)}function $u(e){for(en=e.return;en;)switch(en.tag){case 5:case 31:case 13:yi=!1;return;case 27:case 3:yi=!0;return;default:en=en.return}}function Lr(e){if(e!==en)return!1;if(!kt)return $u(e),kt=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||zm(e.type,e.memoizedProps)),n=!n),n&&Se&&_a(e),$u(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(317));Se=Ay(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(317));Se=Ay(e)}else t===27?(t=Se,Ma(e.type)?(e=Vm,Vm=null,Se=e):Se=t):Se=en?xi(e.stateNode.nextSibling):null;return!0}function ja(){Se=en=null,kt=!1}function vp(){var e=oa;return e!==null&&(Bn===null?Bn=e:Bn.push.apply(Bn,e),oa=null),e}function Xl(e){oa===null?oa=[e]:oa.push(e)}var em=es(null),ur=null,xs=null;function na(e,t,n){Me(em,t._currentValue),t._currentValue=n}function Ms(e){e._currentValue=em.current,hn(em)}function Du(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function nm(e,t,n,i){var s=e.child;for(s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){var r=s.child;a=a.firstContext;t:for(;a!==null;){var o=a;a=s;for(var l=0;l<t.length;l++)if(o.context===t[l]){a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),Du(a.return,n,e),i||(r=null);break t}a=o.next}}else if(s.tag===18){if(r=s.return,r===null)throw Error(j(341));r.lanes|=n,a=r.alternate,a!==null&&(a.lanes|=n),Du(r,n,e),r=null}else s.tag===13&&s.memoizedState!==null&&s.memoizedState.dehydrated===null?(s.lanes|=n,r=s.alternate,r!==null&&(r.lanes|=n),Du(s.return,n,e),r=s.child,r=r!==null?r.sibling:null):r=s.child;if(r!==null)r.return=s;else for(r=s;r!==null;){if(r===e){r=null;break}if(s=r.sibling,s!==null){s.return=r.return,r=s;break}r=r.return}s=r}}function $a(e,t,n,i){e=null;for(var s=t,a=!1;s!==null;){if(!a){if((s.flags&524288)!==0)a=!0;else if((s.flags&262144)!==0)break}if(s.tag===10){var r=s.alternate;if(r===null)throw Error(j(387));if(r=r.memoizedProps,r!==null){var o=s.type;ti(s.pendingProps.value,r.value)||(e!==null?e.push(o):e=[o])}}else if(s===Wu.current){if(r=s.alternate,r===null)throw Error(j(387));r.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(e!==null?e.push(go):e=[go])}s=s.return}return e!==null&&nm(t,e,n,i),t.flags|=262144,e!==null}function th(e){for(e=e.firstContext;e!==null;){if(!ti(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function tr(e){ur=e,xs=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function un(e){return Ox(ur,e)}function du(e,t){return ur===null&&tr(e),Ox(e,t)}function Ox(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},xs===null){if(e===null)throw Error(j(308));xs=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else xs=xs.next=t;return n}var tA=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},eA=qe.unstable_scheduleCallback,nA=qe.unstable_NormalPriority,Fe={$$typeof:Zi,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function og(){return{controller:new tA,data:new Map,refCount:0}}function oc(e){e.refCount--,e.refCount===0&&eA(nA,function(){e.controller.abort()})}function Dv(e,t){if((e.pendingLanes&4194048)!==0){var n=e.transitionTypes;for(n===null&&(n=e.transitionTypes=[]),e=0;e<t.length;e++){var i=t[e];n.indexOf(i)===-1&&n.push(i)}}}var Tl=null;function iA(e){var t=e.transitionTypes;return e.transitionTypes=null,t}var Cl=null,im=0,er=0,jr=null;function sA(e,t){if(Cl===null){var n=Cl=[];im=0,er=Ig(),jr={status:"pending",value:void 0,then:function(i){n.push(i)}}}return im++,t.then(Lv,Lv),t}function Lv(){if(--im===0&&(Tl=null,Cl!==null)){jr!==null&&(jr.status="fulfilled");var e=Cl;Cl=null,er=0,jr=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function aA(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(s){n.push(s)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var s=0;s<n.length;s++)(0,n[s])(t)},function(s){for(i.status="rejected",i.reason=s,s=0;s<n.length;s++)(0,n[s])(void 0)}),i}var Uv=Dt.S;Dt.S=function(e,t){if(jS=Kn(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&sA(e,t),Tl!==null)for(var n=fo;n!==null;)Dv(n,Tl),n=n.next;if(n=e.types,n!==null){for(var i=fo;i!==null;)Dv(i,n),i=i.next;if(er!==0){i=Tl,i===null&&(i=Tl=[]);for(var s=0;s<n.length;s++){var a=n[s];i.indexOf(a)===-1&&i.push(a)}}}Uv!==null&&Uv(e,t)};var Ja=es(null);function lg(){var e=Ja.current;return e!==null?e:ge.pooledCache}function Lu(e,t){t===null?Me(Ja,Ja.current):Me(Ja,t.pool)}function Ix(){var e=lg();return e===null?null:{parent:Fe._currentValue,pool:e}}var So=Error(j(460)),cg=Error(j(474)),Rh=Error(j(542)),eh={then:function(){}};function Ov(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Px(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Ji,Ji),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Pv(e),e===void 0&&!("reason"in t)?Error(j(600)):e;default:if(typeof t.status=="string")t.then(Ji,Ji);else{if(e=ge,e!==null&&100<e.shellSuspendCounter)throw Error(j(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var s=t;s.status="fulfilled",s.value=i}},function(i){if(t.status==="pending"){var s=t;s.status="rejected",s.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Pv(e),e}throw Ka=t,So}}function ka(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Ka=n,So):n}}var Ka=null;function Iv(){if(Ka===null)throw Error(j(459));var e=Ka;return Ka=null,e}function Pv(e){if(e===So||e===Rh)throw Error(j(483))}var $r=null,Wl=0;function pu(e){var t=Wl;return Wl+=1,$r===null&&($r=[]),Px($r,e,t)}function Zs(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function mu(e,t){throw t.$$typeof===FT?Error(j(525)):(e=Object.prototype.toString.call(t),Error(j(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Bx(e){function t(h,m){if(e){var x=h.deletions;x===null?(h.deletions=[m],h.flags|=16):x.push(m)}}function n(h,m){if(!e)return null;for(;m!==null;)t(h,m),m=m.sibling;return null}function i(h){for(var m=new Map;h!==null;)h.key===null?m.set(h.index,h):m.set(h.key,h),h=h.sibling;return m}function s(h,m){return h=Ss(h,m),h.index=0,h.sibling=null,h}function a(h,m,x){return h.index=x,e?(x=h.alternate,x!==null?(x=x.index,x<m?(h.flags|=2,m):x):(h.flags|=134217730,m)):(h.flags|=1048576,m)}function r(h){return e&&h.alternate===null&&(h.flags|=134217730),h}function o(h,m,x,y){return m===null||m.tag!==6?(m=gp(x,h.mode,y),m.return=h,m):(m=s(m,x),m.return=h,m)}function l(h,m,x,y){var E=x.type;return E===zr?(h=f(h,m,x.props.children,y,x.key),Zs(h,x),h):m!==null&&(m.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Qs&&ka(E)===m.type)?(m=s(m,x.props),Zs(m,x),m.return=h,m):(m=Nu(x.type,x.key,x.props,null,h.mode,y),Zs(m,x),m.return=h,m)}function c(h,m,x,y){return m===null||m.tag!==4||m.stateNode.containerInfo!==x.containerInfo||m.stateNode.implementation!==x.implementation?(m=_p(x,h.mode,y),m.return=h,m):(m=s(m,x.children||[]),m.return=h,m)}function f(h,m,x,y,E){return m===null||m.tag!==7?(m=Za(x,h.mode,y,E),m.return=h,m):(m=s(m,x),m.return=h,m)}function p(h,m,x){if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return m=gp(""+m,h.mode,x),m.return=h,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case au:return x=Nu(m.type,m.key,m.props,null,h.mode,x),Zs(x,m),x.return=h,x;case Sl:return m=_p(m,h.mode,x),m.return=h,m;case Qs:return m=ka(m),p(h,m,x)}if(Ml(m)||ml(m))return m=Za(m,h.mode,x,null),m.return=h,m;if(typeof m.then=="function")return p(h,pu(m),x);if(m.$$typeof===Zi)return p(h,du(h,m),x);mu(h,m)}return null}function u(h,m,x,y){var E=m!==null?m.key:null;if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return E!==null?null:o(h,m,""+x,y);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case au:return x.key===E?l(h,m,x,y):null;case Sl:return x.key===E?c(h,m,x,y):null;case Qs:return x=ka(x),u(h,m,x,y)}if(Ml(x)||ml(x))return E!==null?null:f(h,m,x,y,null);if(typeof x.then=="function")return u(h,m,pu(x),y);if(x.$$typeof===Zi)return u(h,m,du(h,x),y);mu(h,x)}return null}function d(h,m,x,y,E){if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return h=h.get(x)||null,o(m,h,""+y,E);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case au:return h=h.get(y.key===null?x:y.key)||null,l(m,h,y,E);case Sl:return h=h.get(y.key===null?x:y.key)||null,c(m,h,y,E);case Qs:return y=ka(y),d(h,m,x,y,E)}if(Ml(y)||ml(y))return h=h.get(x)||null,f(m,h,y,E,null);if(typeof y.then=="function")return d(h,m,x,pu(y),E);if(y.$$typeof===Zi)return d(h,m,x,du(m,y),E);mu(m,y)}return null}function v(h,m,x,y){for(var E=null,A=null,_=m,T=m=0,L=null;_!==null&&T<x.length;T++){_.index>T?(L=_,_=null):L=_.sibling;var R=u(h,_,x[T],y);if(R===null){_===null&&(_=L);break}e&&_&&R.alternate===null&&t(h,_),m=a(R,m,T),A===null?E=R:A.sibling=R,A=R,_=L}if(T===x.length)return n(h,_),kt&&ys(h,T),E;if(_===null){for(;T<x.length;T++)_=p(h,x[T],y),_!==null&&(m=a(_,m,T),A===null?E=_:A.sibling=_,A=_);return kt&&ys(h,T),E}for(_=i(_);T<x.length;T++)L=d(_,h,T,x[T],y),L!==null&&(e&&(R=L.alternate,R!==null&&_.delete(R.key===null?T:R.key)),m=a(L,m,T),A===null?E=L:A.sibling=L,A=L);return e&&_.forEach(function(U){return t(h,U)}),kt&&ys(h,T),E}function b(h,m,x,y){if(x==null)throw Error(j(151));for(var E=null,A=null,_=m,T=m=0,L=null,R=x.next();_!==null&&!R.done;T++,R=x.next()){_.index>T?(L=_,_=null):L=_.sibling;var U=u(h,_,R.value,y);if(U===null){_===null&&(_=L);break}e&&_&&U.alternate===null&&t(h,_),m=a(U,m,T),A===null?E=U:A.sibling=U,A=U,_=L}if(R.done)return n(h,_),kt&&ys(h,T),E;if(_===null){for(;!R.done;T++,R=x.next())R=p(h,R.value,y),R!==null&&(m=a(R,m,T),A===null?E=R:A.sibling=R,A=R);return kt&&ys(h,T),E}for(_=i(_);!R.done;T++,R=x.next())R=d(_,h,T,R.value,y),R!==null&&(e&&(L=R.alternate,L!==null&&_.delete(L.key===null?T:L.key)),m=a(R,m,T),A===null?E=R:A.sibling=R,A=R);return e&&_.forEach(function(H){return t(h,H)}),kt&&ys(h,T),E}function g(h,m,x,y){if(typeof x=="object"&&x!==null&&x.type===zr&&x.key===null&&x.props.ref===void 0&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case au:t:{for(var E=x.key;m!==null;){if(m.key===E){if(E=x.type,E===zr){if(m.tag===7){n(h,m.sibling),y=s(m,x.props.children),Zs(y,x),y.return=h,h=y;break t}}else if(m.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Qs&&ka(E)===m.type){n(h,m.sibling),y=s(m,x.props),Zs(y,x),y.return=h,h=y;break t}n(h,m);break}else t(h,m);m=m.sibling}x.type===zr?(y=Za(x.props.children,h.mode,y,x.key),Zs(y,x),y.return=h,h=y):(y=Nu(x.type,x.key,x.props,null,h.mode,y),Zs(y,x),y.return=h,h=y)}return r(h);case Sl:t:{for(E=x.key;m!==null;){if(m.key===E)if(m.tag===4&&m.stateNode.containerInfo===x.containerInfo&&m.stateNode.implementation===x.implementation){n(h,m.sibling),y=s(m,x.children||[]),y.return=h,h=y;break t}else{n(h,m);break}else t(h,m);m=m.sibling}y=_p(x,h.mode,y),y.return=h,h=y}return r(h);case Qs:return x=ka(x),g(h,m,x,y)}if(Ml(x))return v(h,m,x,y);if(ml(x)){if(E=ml(x),typeof E!="function")throw Error(j(150));return x=E.call(x),b(h,m,x,y)}if(typeof x.then=="function")return g(h,m,pu(x),y);if(x.$$typeof===Zi)return g(h,m,du(h,x),y);mu(h,x)}return typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint"?(x=""+x,m!==null&&m.tag===6?(n(h,m.sibling),y=s(m,x),y.return=h,h=y):(n(h,m),y=gp(x,h.mode,y),y.return=h,h=y),r(h)):n(h,m)}return function(h,m,x,y){try{Wl=0;var E=g(h,m,x,y);return $r=null,E}catch(_){if(_===So||_===Rh)throw _;var A=Fn(29,_,null,h.mode);return A.lanes=y,A.return=h,A}}}var nr=Bx(!0),zx=Bx(!1),js=!1;function ug(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function sm(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function la(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ca(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(se&2)!==0){var s=i.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),i.pending=t,t=Qu(e),Cx(e,null,n),t}return Ah(e,i,t,n),Qu(e)}function Nl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,ex(e,n)}}function yp(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var s=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var r={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?s=a=r:a=a.next=r,n=n.next}while(n!==null);a===null?s=a=t:a=a.next=t}else s=a=t;n={baseState:i.baseState,firstBaseUpdate:s,lastBaseUpdate:a,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var am=!1;function Dl(){if(am){var e=jr;if(e!==null)throw e}}function Ll(e,t,n,i){am=!1;var s=e.updateQueue;js=!1;var a=s.firstBaseUpdate,r=s.lastBaseUpdate,o=s.shared.pending;if(o!==null){s.shared.pending=null;var l=o,c=l.next;l.next=null,r===null?a=c:r.next=c,r=l;var f=e.alternate;f!==null&&(f=f.updateQueue,o=f.lastBaseUpdate,o!==r&&(o===null?f.firstBaseUpdate=c:o.next=c,f.lastBaseUpdate=l))}if(a!==null){var p=s.baseState;r=0,f=c=l=null,o=a;do{var u=o.lane&-536870913,d=u!==o.lane;if(d?(Jt&u)===u:(i&u)===u){u!==0&&u===er&&(am=!0),f!==null&&(f=f.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var v=e,b=o;u=t;var g=n;switch(b.tag){case 1:if(v=b.payload,typeof v=="function"){p=v.call(g,p,u);break t}p=v;break t;case 3:v.flags=v.flags&-65537|128;case 0:if(v=b.payload,u=typeof v=="function"?v.call(g,p,u):v,u==null)break t;p=_e({},p,u);break t;case 2:js=!0}}u=o.callback,u!==null&&(e.flags|=64,d&&(e.flags|=8192),d=s.callbacks,d===null?s.callbacks=[u]:d.push(u))}else d={lane:u,tag:o.tag,payload:o.payload,callback:o.callback,next:null},f===null?(c=f=d,l=p):f=f.next=d,r|=u;if(o=o.next,o===null){if(o=s.shared.pending,o===null)break;d=o,o=d.next,d.next=null,s.lastBaseUpdate=d,s.shared.pending=null}}while(!0);f===null&&(l=p),s.baseState=l,s.firstBaseUpdate=c,s.lastBaseUpdate=f,a===null&&(s.shared.lanes=0),xa|=r,e.lanes=r,e.memoizedState=p}}function Fx(e,t){if(typeof e!="function")throw Error(j(191,e));e.call(t)}function Hx(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Fx(n[e],t)}var va=es(null),nh=es(0);function Bv(e,t){e=Rs,Me(nh,e),Me(va,t),Rs=e|t.baseLanes}function rm(){Me(nh,Rs),Me(va,va.current)}function hg(){Rs=nh.current,hn(va),hn(nh)}var pn=es(null),yn=null;function ua(e){var t=e.alternate;Me(fn,fn.current&1),Me(pn,e),yn===null&&(t===null||va.current!==null||t.memoizedState!==null)&&(yn=e)}function om(e){Me(fn,fn.current),Me(pn,e),yn===null&&(yn=e)}function Gx(e){e.tag===22?(Me(fn,fn.current),Me(pn,e),yn===null&&(yn=e)):ha()}function ha(){Me(fn,fn.current),Me(pn,pn.current)}function Yn(e){hn(pn),yn===e&&(yn=null),hn(fn)}var fn=es(0);function ql(e,t){Me(pn,pn.current),Me(fn,t)}function fg(e){hn(fn),hn(pn),yn===e&&(yn=null)}function ih(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Gm(n)||Fg(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!=="independent"){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Es=0,Ft=null,de=null,ze=null,sh=!1,to=!1,ir=!1,ah=0,Yl=0,eo=null,rA=0;function Ue(){throw Error(j(321))}function dg(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ti(e[n],t[n]))return!1;return!0}function pg(e,t,n,i,s,a){return Es=a,Ft=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Dt.H=e===null||e.memoizedState===null?vS:yS,ir=!1,a=n(i,s),ir=!1,to&&(a=kx(t,n,i,s)),Vx(e),a}function Vx(e){Dt.H=rh;var t=de!==null&&de.next!==null;if(Es=0,ze=de=Ft=null,sh=!1,Yl=0,eo=null,t)throw Error(j(300));e===null||He||(e=e.dependencies,e!==null&&th(e)&&(He=!0))}function kx(e,t,n,i){Ft=e;var s=0;do{if(to&&(eo=null),Yl=0,to=!1,25<=s)throw Error(j(301));if(s+=1,ze=de=null,e.updateQueue!=null){var a=e.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}Dt.H=pA,a=t(n,i)}while(to);return a}function oA(){var e=Dt.H,t=e.useState()[0];return t=typeof t.then=="function"?lc(t):t,e=e.useState()[0],(de!==null?de.memoizedState:null)!==e&&(Ft.flags|=1024),t}function mg(){var e=ah!==0;return ah=0,e}function gg(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function _g(e){if(sh){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}sh=!1}Es=0,ze=de=Ft=null,to=!1,Yl=ah=0,eo=null}function Cn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ze===null?Ft.memoizedState=ze=e:ze=ze.next=e,ze}function Ie(){if(de===null){var e=Ft.alternate;e=e!==null?e.memoizedState:null}else e=de.next;var t=ze===null?Ft.memoizedState:ze.next;if(t!==null)ze=t,de=e;else{if(e===null)throw Ft.alternate===null?Error(j(467)):Error(j(310));de=e,e={memoizedState:de.memoizedState,baseState:de.baseState,baseQueue:de.baseQueue,queue:de.queue,next:null},ze===null?Ft.memoizedState=ze=e:ze=ze.next=e}return ze}function Ch(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function lc(e){var t=Yl;return Yl+=1,eo===null&&(eo=[]),e=Px(eo,e,t),t=Ft,(ze===null?t.memoizedState:ze.next)===null&&(t=t.alternate,Dt.H=t===null||t.memoizedState===null?vS:yS),e}function Nh(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return lc(e);if(e.$$typeof===VT)return;if(e.$$typeof===Zi)return un(e)}throw Error(j(438,String(e)))}function vg(e){var t=null,n=Ft.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=Ft.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(s){return s.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Ch(),Ft.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=GT;return t.index++,n}function As(e,t){return typeof t=="function"?t(e):t}function Uu(e){var t=Ie();return yg(t,de,e)}function yg(e,t,n){var i=e.queue;if(i===null)throw Error(j(311));i.lastRenderedReducer=n;var s=e.baseQueue,a=i.pending;if(a!==null){if(s!==null){var r=s.next;s.next=a.next,a.next=r}t.baseQueue=s=a,i.pending=null}if(a=e.baseState,s===null)e.memoizedState=a;else{t=s.next;var o=r=null,l=null,c=t,f=!1;do{var p=c.lane&-536870913;if(p!==c.lane?(Jt&p)===p:(Es&p)===p){var u=c.revertLane;if(u===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),p===er&&(f=!0);else if((Es&u)===u){c=c.next,u===er&&(f=!0);continue}else p={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=p,r=a):l=l.next=p,Ft.lanes|=u,xa|=u;p=c.action,ir&&n(a,p),a=c.hasEagerState?c.eagerState:n(a,p)}else u={lane:p,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=u,r=a):l=l.next=u,Ft.lanes|=p,xa|=p;c=c.next}while(c!==null&&c!==t);if(l===null?r=a:l.next=o,!ti(a,e.memoizedState)&&(He=!0,f&&(n=jr,n!==null)))throw n;e.memoizedState=a,e.baseState=r,e.baseQueue=l,i.lastRenderedState=a}return s===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function xp(e){var t=Ie(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var i=n.dispatch,s=n.pending,a=t.memoizedState;if(s!==null){n.pending=null;var r=s=s.next;do a=e(a,r.action),r=r.next;while(r!==s);ti(a,t.memoizedState)||(He=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,i]}function Xx(e,t,n){var i=Ft,s=Ie(),a=kt;if(a){if(n===void 0)throw Error(j(407));n=n()}else n=t();var r=!ti((de||s).memoizedState,n);if(r&&(s.memoizedState=n,He=!0),s=s.queue,xg(Yx.bind(null,i,s,e),[e]),e=s.getSnapshot!==t||r||ze!==null&&(ze.memoizedState.tag&1)!==0,lo(e?9:8,{destroy:void 0},qx.bind(null,i,s,n,t),null),e){if(i.flags|=2048,ge===null)throw Error(j(349));a||(Es&127)!==0||Wx(i,t,n)}return n}function Wx(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ft.updateQueue,t===null?(t=Ch(),Ft.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function qx(e,t,n,i){t.value=n,t.getSnapshot=i,Zx(t)&&Jx(e)}function Yx(e,t,n){return n(function(){Zx(t)&&Jx(e)})}function Zx(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ti(e,n)}catch{return!0}}function Jx(e){var t=cr(e,2);t!==null&&Hn(t,e,2)}function lm(e){var t=Cn();if(typeof e=="function"){var n=e;if(e=n(),ir){ta(!0);try{n()}finally{ta(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:As,lastRenderedState:e},t}function Kx(e,t,n,i){return e.baseState=n,yg(e,de,typeof i=="function"?i:As)}function lA(e,t,n,i,s){if(Lh(e))throw Error(j(485));if(e=t.action,e!==null){var a={payload:s,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){a.listeners.push(r)}};Dt.T!==null?n(!0):a.isTransition=!1,i(a),n=t.pending,n===null?(a.next=t.pending=a,Qx(t,a)):(a.next=n.next,t.pending=n.next=a)}}function Qx(e,t){var n=t.action,i=t.payload,s=e.state;if(t.isTransition){var a=Dt.T,r={};r.types=a!==null?a.types:null,Dt.T=r;try{var o=n(s,i),l=Dt.S;l!==null&&l(r,o),zv(e,t,o)}catch(c){cm(e,t,c)}finally{a!==null&&r.types!==null&&(a.types=r.types),Dt.T=a}}else try{a=n(s,i),zv(e,t,a)}catch(c){cm(e,t,c)}}function zv(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){Fv(e,t,i)},function(i){return cm(e,t,i)}):Fv(e,t,n)}function Fv(e,t,n){t.status="fulfilled",t.value=n,jx(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Qx(e,n)))}function cm(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,jx(t),t=t.next;while(t!==i)}e.action=null}function jx(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function $x(e,t){return t}function Hv(e,t){if(kt){var n=ge.formState;if(n!==null){t:{var i=Ft;if(kt){if(Se){e:{for(var s=Se,a=yi;s.nodeType!==8;){if(!a){s=null;break e}if(s=xi(s.nextSibling),s===null){s=null;break e}}a=s.data,s=a==="F!"||a==="F"?s:null}if(s){Se=xi(s.nextSibling),i=s.data==="F!";break t}}_a(i)}i=!1}i&&(t=n[0])}}return n=Cn(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:$x,lastRenderedState:t},n.queue=i,n=mS.bind(null,Ft,i),i.dispatch=n,i=lm(!1),a=Tg.bind(null,Ft,!1,i.queue),i=Cn(),s={state:t,dispatch:null,action:e,pending:null},i.queue=s,n=lA.bind(null,Ft,s,a,n),s.dispatch=n,i.memoizedState=e,[t,n,!1]}function Gv(e){var t=Ie();return tS(t,de,e)}function tS(e,t,n){if(t=yg(e,t,$x)[0],e=Uu(As)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=lc(t)}catch(r){throw r===So?Rh:r}else i=t;t=Ie();var s=t.queue,a=s.dispatch;return n!==t.memoizedState&&(Ft.flags|=2048,lo(9,{destroy:void 0},cA.bind(null,s,n),null)),[i,a,e]}function cA(e,t){e.action=t}function Vv(e){var t=Ie(),n=de;if(n!==null)return tS(t,n,e);Ie(),t=t.memoizedState,n=Ie();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function lo(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=Ft.updateQueue,t===null&&(t=Ch(),Ft.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function eS(){return Ie().memoizedState}function Ou(e,t,n,i){var s=Cn();Ft.flags|=e,s.memoizedState=lo(1|t,{destroy:void 0},n,i===void 0?null:i)}function Dh(e,t,n,i){var s=Ie();i=i===void 0?null:i;var a=s.memoizedState.inst;de!==null&&i!==null&&dg(i,de.memoizedState.deps)?s.memoizedState=lo(t,a,n,i):(Ft.flags|=e,s.memoizedState=lo(1|t,a,n,i))}function kv(e,t){Ou(8390656,8,e,t)}function xg(e,t){Dh(2048,8,e,t)}function uA(e){Ft.flags|=4;var t=Ft.updateQueue;if(t===null)t=Ch(),Ft.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function nS(e){var t=Ie().memoizedState;return uA({ref:t,nextImpl:e}),function(){if((se&2)!==0)throw Error(j(440));return t.impl.apply(void 0,arguments)}}function iS(e,t){return Dh(4,2,e,t)}function sS(e,t){return Dh(4,4,e,t)}function aS(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function rS(e,t,n){n=n!=null?n.concat([e]):null,Dh(4,4,aS.bind(null,t,e),n)}function Sg(){}function oS(e,t){var n=Ie();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&dg(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function lS(e,t){var n=Ie();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&dg(t,i[1]))return i[0];if(i=e(),ir){ta(!0);try{e()}finally{ta(!1)}}return n.memoizedState=[i,t],i}function Mg(e,t,n){return n===void 0||(Es&1073741824)!==0&&(Jt&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=tM(),Ft.lanes|=e,xa|=e,n)}function cS(e,t,n,i){return ti(n,t)?n:va.current!==null?(e=Mg(e,n,i),ti(e,t)||(He=!0),e):(Es&106)===0||(Es&1073741824)!==0&&(Jt&261930)===0?(He=!0,e.memoizedState=n):(e=tM(),Ft.lanes|=e,xa|=e,t)}function uS(e,t,n,i,s){var a=ae.p;ae.p=a!==0&&8>a?a:8;var r=Dt.T,o={};o.types=r!==null?r.types:null,Dt.T=o,Tg(e,!1,t,n);try{var l=s(),c=Dt.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var f=aA(l,i);Ul(e,t,f,$n(e))}else Ul(e,t,i,$n(e))}catch(p){Ul(e,t,{then:function(){},status:"rejected",reason:p},$n())}finally{ae.p=a,r!==null&&o.types!==null&&(r.types=o.types),Dt.T=r}}function hA(){}function um(e,t,n,i){if(e.tag!==5)throw Error(j(476));var s=hS(e).queue;uS(e,s,t,Ya,n===null?hA:function(){return fS(e),n(i)})}function hS(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Ya,baseState:Ya,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:As,lastRenderedState:Ya},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:As,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function fS(e){var t=hS(e);t.next===null&&(t=e.alternate.memoizedState),Ul(e,t.next.queue,{},$n())}function bg(){return un(go)}function dS(){return Ie().memoizedState}function pS(){return Ie().memoizedState}function fA(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=$n();e=la(n);var i=ca(t,e,n);i!==null&&(Hn(i,t,n),Nl(i,t,n)),t={cache:og()},e.payload=t;return}t=t.return}}function dA(e,t,n){var i=$n();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Lh(e)?gS(t,n):(n=sg(e,t,n,i),n!==null&&(Hn(n,e,i),_S(n,t,i)))}function mS(e,t,n){var i=$n();Ul(e,t,n,i)}function Ul(e,t,n,i){var s={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Lh(e))gS(t,s);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var r=t.lastRenderedState,o=a(r,n);if(s.hasEagerState=!0,s.eagerState=o,ti(o,r))return Ah(e,t,s,0),ge===null&&Eh(),!1}catch{}if(n=sg(e,t,s,i),n!==null)return Hn(n,e,i),_S(n,t,i),!0}return!1}function Tg(e,t,n,i){if(i={lane:2,revertLane:Ig(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Lh(e)){if(t)throw Error(j(479))}else t=sg(e,n,i,2),t!==null&&Hn(t,e,2)}function Lh(e){var t=e.alternate;return e===Ft||t!==null&&t===Ft}function gS(e,t){to=sh=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function _S(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,ex(e,n)}}var rh={readContext:un,use:Nh,useCallback:Ue,useContext:Ue,useEffect:Ue,useImperativeHandle:Ue,useLayoutEffect:Ue,useInsertionEffect:Ue,useMemo:Ue,useReducer:Ue,useRef:Ue,useState:Ue,useDebugValue:Ue,useDeferredValue:Ue,useTransition:Ue,useSyncExternalStore:Ue,useId:Ue,useHostTransitionStatus:Ue,useFormState:Ue,useActionState:Ue,useOptimistic:Ue,useMemoCache:Ue,useCacheRefresh:Ue,useEffectEvent:Ue},vS={readContext:un,use:Nh,useCallback:function(e,t){return Cn().memoizedState=[e,t===void 0?null:t],e},useContext:un,useEffect:kv,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Ou(4194308,4,aS.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ou(4194308,4,e,t)},useInsertionEffect:function(e,t){Ou(4,2,e,t)},useMemo:function(e,t){var n=Cn();t=t===void 0?null:t;var i=e();if(ir){ta(!0);try{e()}finally{ta(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=Cn();if(n!==void 0){var s=n(t);if(ir){ta(!0);try{n(t)}finally{ta(!1)}}}else s=t;return i.memoizedState=i.baseState=s,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:s},i.queue=e,e=e.dispatch=dA.bind(null,Ft,e),[i.memoizedState,e]},useRef:function(e){var t=Cn();return e={current:e},t.memoizedState=e},useState:function(e){e=lm(e);var t=e.queue,n=mS.bind(null,Ft,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Sg,useDeferredValue:function(e,t){var n=Cn();return Mg(n,e,t)},useTransition:function(){var e=lm(!1);return e=uS.bind(null,Ft,e.queue,!0,!1),Cn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=Ft,s=Cn();if(kt){if(n===void 0)throw Error(j(407));n=n()}else{if(n=t(),ge===null)throw Error(j(349));(Jt&127)!==0||Wx(i,t,n)}s.memoizedState=n;var a={value:n,getSnapshot:t};return s.queue=a,kv(Yx.bind(null,i,a,e),[e]),i.flags|=2048,lo(9,{destroy:void 0},qx.bind(null,i,a,n,t),null),n},useId:function(){var e=Cn(),t=ge.identifierPrefix;if(kt){var n=Qi,i=Ki;n=(i&~(1<<32-jn(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=ah++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=rA++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:bg,useFormState:Hv,useActionState:Hv,useOptimistic:function(e){var t=Cn();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Tg.bind(null,Ft,!0,n),n.dispatch=t,[e,t]},useMemoCache:vg,useCacheRefresh:function(){return Cn().memoizedState=fA.bind(null,Ft)},useEffectEvent:function(e){var t=Cn(),n={impl:e};return t.memoizedState=n,function(){if((se&2)!==0)throw Error(j(440));return n.impl.apply(void 0,arguments)}}},yS={readContext:un,use:Nh,useCallback:oS,useContext:un,useEffect:xg,useImperativeHandle:rS,useInsertionEffect:iS,useLayoutEffect:sS,useMemo:lS,useReducer:Uu,useRef:eS,useState:function(){return Uu(As)},useDebugValue:Sg,useDeferredValue:function(e,t){var n=Ie();return cS(n,de.memoizedState,e,t)},useTransition:function(){var e=Uu(As)[0],t=Ie().memoizedState;return[typeof e=="boolean"?e:lc(e),t]},useSyncExternalStore:Xx,useId:dS,useHostTransitionStatus:bg,useFormState:Gv,useActionState:Gv,useOptimistic:function(e,t){var n=Ie();return Kx(n,de,e,t)},useMemoCache:vg,useCacheRefresh:pS,useEffectEvent:nS},pA={readContext:un,use:Nh,useCallback:oS,useContext:un,useEffect:xg,useImperativeHandle:rS,useInsertionEffect:iS,useLayoutEffect:sS,useMemo:lS,useReducer:xp,useRef:eS,useState:function(){return xp(As)},useDebugValue:Sg,useDeferredValue:function(e,t){var n=Ie();return de===null?Mg(n,e,t):cS(n,de.memoizedState,e,t)},useTransition:function(){var e=xp(As)[0],t=Ie().memoizedState;return[typeof e=="boolean"?e:lc(e),t]},useSyncExternalStore:Xx,useId:dS,useHostTransitionStatus:bg,useFormState:Vv,useActionState:Vv,useOptimistic:function(e,t){var n=Ie();return de!==null?Kx(n,de,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:vg,useCacheRefresh:pS,useEffectEvent:nS};function Sp(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:_e({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var hm={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=$n(),s=la(i);s.payload=t,n!=null&&(s.callback=n),t=ca(e,s,i),t!==null&&(Hn(t,e,i),Nl(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=$n(),s=la(i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=ca(e,s,i),t!==null&&(Hn(t,e,i),Nl(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=$n(),i=la(n);i.tag=2,t!=null&&(i.callback=t),t=ca(e,i,n),t!==null&&(Hn(t,e,n),Nl(t,e,n))}};function Xv(e,t,n,i,s,a,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,a,r):t.prototype&&t.prototype.isPureReactComponent?!Vl(n,i)||!Vl(s,a):!0}function Wv(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&hm.enqueueReplaceState(t,t.state,null)}function sr(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=_e({},n));for(var s in e)n[s]===void 0&&(n[s]=e[s])}return n}function xS(e){Ku(e)}function SS(e){console.error(e)}function MS(e){Ku(e)}function oh(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function qv(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function fm(e,t,n){return n=la(n),n.tag=3,n.payload={element:null},n.callback=function(){oh(e,t)},n}function bS(e){return e=la(e),e.tag=3,e}function TS(e,t,n,i){var s=n.type.getDerivedStateFromError;if(typeof s=="function"){var a=i.value;e.payload=function(){return s(a)},e.callback=function(){qv(t,n,i)}}var r=n.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){qv(t,n,i),typeof s!="function"&&(fa===null?fa=new Set([this]):fa.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function mA(e,t,n,i,s){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&$a(t,n,s,!0),n=pn.current,n!==null){switch(n.tag){case 31:case 13:case 19:return yn===null?mh():n.alternate===null&&Oe===0&&(Oe=3),n.flags&=-257,n.flags|=65536,n.lanes=s,i===eh?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),Rp(e,i,s)),!1;case 22:return n.flags|=65536,i===eh?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),Rp(e,i,s)),!1}throw Error(j(435,n.tag))}return Rp(e,i,s),mh(),!1}if(kt)return t=pn.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=s,i!==tm&&(e=Error(j(422),{cause:i}),Xl(vi(e,n)))):(i!==tm&&(t=Error(j(423),{cause:i}),Xl(vi(t,n))),e=e.current.alternate,e.flags|=65536,s&=-s,e.lanes|=s,i=vi(i,n),s=fm(e.stateNode,i,s),yp(e,s),Oe!==4&&(Oe=2)),!1;var a=Error(j(520),{cause:i});if(a=vi(a,n),Bl===null?Bl=[a]:Bl.push(a),Oe!==4&&(Oe=2),t===null)return!0;i=vi(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=s&-s,n.lanes|=e,e=fm(n.stateNode,i,e),yp(n,e),!1;case 1:if(t=n.type,a=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||a!==null&&typeof a.componentDidCatch=="function"&&(fa===null||!fa.has(a))))return n.flags|=65536,s&=-s,n.lanes|=s,s=bS(s),TS(s,e,n,i),yp(n,s),!1;break;case 22:if(n.memoizedState!==null)return n.flags|=65536,!1}n=n.return}while(n!==null);return!1}var Eg=Error(j(461)),He=!1;function Xe(e,t,n,i){t.child=e===null?zx(t,null,n,i):nr(t,e.child,n,i)}function Yv(e,t,n,i,s){n=n.render;var a=t.ref;if("ref"in i){var r={};for(var o in i)o!=="ref"&&(r[o]=i[o])}else r=i;return tr(t),i=pg(e,t,n,r,a,s),o=mg(),e!==null&&!He?(gg(e,t,s),ws(e,t,s)):(kt&&o&&wh(t),t.flags|=1,Xe(e,t,i,s),t.child)}function Zv(e,t,n,i,s){if(e===null){var a=n.type;return typeof a=="function"&&!ag(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,ES(e,t,a,i,s)):(e=Nu(n.type,null,i,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!wg(e,s)){var r=a.memoizedProps;if(n=n.compare,n=n!==null?n:Vl,n(r,i)&&e.ref===t.ref)return ws(e,t,s)}return t.flags|=1,e=Ss(a,i),e.ref=t.ref,e.return=t,t.child=e}function ES(e,t,n,i,s){if(e!==null){var a=e.memoizedProps;if(Vl(a,i)&&e.ref===t.ref)if(He=!1,t.pendingProps=i=a,wg(e,s))(e.flags&131072)!==0&&(He=!0);else return t.lanes=e.lanes,ws(e,t,s)}return dm(e,t,n,i,s)}function AS(e,t,n,i){var s=i.children,a=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(a=a!==null?a.baseLanes|n:n,e!==null){for(i=t.child=e.child,s=0;i!==null;)s=s|i.lanes|i.childLanes,i=i.sibling;i=s&~a}else i=0,t.child=null;return Jv(e,t,a,n,i)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Lu(t,a!==null?a.cachePool:null),a!==null?Bv(t,a):rm(),Gx(t);else return i=t.lanes=536870912,Jv(e,t,a!==null?a.baseLanes|n:n,n,i)}else a!==null?(Lu(t,a.cachePool),Bv(t,a),ha(),t.memoizedState=null):(e!==null&&Lu(t,null),rm(),ha());return Xe(e,t,s,n),t.child}function Ol(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Jv(e,t,n,i,s){var a=lg();return a=a===null?null:{parent:Fe._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Lu(t,null),rm(),Gx(t),e!==null&&$a(e,t,i,!0),t.childLanes=s,null}function Iu(e,t){return t=Uh({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Kv(e,t,n){return nr(t,e.child,null,n),e=Iu(t,t.pendingProps),e.flags|=2,Yn(t),t.memoizedState=null,e}function gA(e,t,n){var i=t.pendingProps,s=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(kt){if(i.mode==="hidden")return e=Iu(t,i),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},Ol(null,e);if(om(t),(e=Se)?(e=AM(e,yi),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ga!==null?{id:Ki,overflow:Qi}:null,retryLane:536870912,hydrationErrors:null},n=Dx(e),n.return=t,t.child=n,en=t,Se=null)):e=null,e===null)throw _a(t);return t.lanes=536870912,null}return Iu(t,i)}var a=e.memoizedState;if(a!==null){var r=a.dehydrated;if(om(t),s)if(t.flags&256)t.flags&=-257,t=Kv(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(j(558));else if(He||$a(e,t,n,!1),s=(n&e.childLanes)!==0,He||s){if(va.current===null){if(i=ge,i!==null&&(r=nx(i,n),r!==0&&r!==a.retryLane))throw a.retryLane=r,cr(e,r),Hn(i,e,r),Eg;mh()}t=Kv(e,t,n)}else e=a.treeContext,Se=xi(r.nextSibling),en=t,kt=!0,oa=null,yi=!1,e!==null&&Ux(t,e),t=Iu(t,i),t.flags|=134221824;return t}return e=Ss(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Or(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(j(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function dm(e,t,n,i,s){return tr(t),n=pg(e,t,n,i,void 0,s),i=mg(),e!==null&&!He?(gg(e,t,s),ws(e,t,s)):(kt&&i&&wh(t),t.flags|=1,Xe(e,t,n,s),t.child)}function Qv(e,t,n,i,s,a){return tr(t),t.updateQueue=null,n=kx(t,i,n,s),Vx(e),i=mg(),e!==null&&!He?(gg(e,t,a),ws(e,t,a)):(kt&&i&&wh(t),t.flags|=1,Xe(e,t,n,a),t.child)}function jv(e,t,n,i,s){if(tr(t),t.stateNode===null){var a=Wr,r=n.contextType;typeof r=="object"&&r!==null&&(a=un(r)),a=new n(i,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=hm,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=i,a.state=t.memoizedState,a.refs={},ug(t),r=n.contextType,a.context=typeof r=="object"&&r!==null?un(r):Wr,a.state=t.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(Sp(t,n,r,i),a.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(r=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),r!==a.state&&hm.enqueueReplaceState(a,a.state,null),Ll(t,i,a,s),Dl(),a.state=t.memoizedState),typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){a=t.stateNode;var o=t.memoizedProps,l=sr(n,o);a.props=l;var c=a.context,f=n.contextType;r=Wr,typeof f=="object"&&f!==null&&(r=un(f));var p=n.getDerivedStateFromProps;f=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o||c!==r)&&Wv(t,a,i,r),js=!1;var u=t.memoizedState;a.state=u,Ll(t,i,a,s),Dl(),c=t.memoizedState,o||u!==c||js?(typeof p=="function"&&(Sp(t,n,p,i),c=t.memoizedState),(l=js||Xv(t,n,l,i,u,c,r))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=c),a.props=i,a.state=c,a.context=r,i=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{a=t.stateNode,sm(e,t),r=t.memoizedProps,f=sr(n,r),a.props=f,p=t.pendingProps,u=a.context,c=n.contextType,l=Wr,typeof c=="object"&&c!==null&&(l=un(c)),o=n.getDerivedStateFromProps,(c=typeof o=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(r!==p||u!==l)&&Wv(t,a,i,l),js=!1,u=t.memoizedState,a.state=u,Ll(t,i,a,s),Dl();var d=t.memoizedState;r!==p||u!==d||js||e!==null&&e.dependencies!==null&&th(e.dependencies)?(typeof o=="function"&&(Sp(t,n,o,i),d=t.memoizedState),(f=js||Xv(t,n,f,i,u,d,l)||e!==null&&e.dependencies!==null&&th(e.dependencies))?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,d,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,d,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=d),a.props=i,a.state=d,a.context=l,i=f):(typeof a.componentDidUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=1024),i=!1)}return a=i,Or(e,t),i=(t.flags&128)!==0,a||i?(a=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:a.render(),t.flags|=1,e!==null&&i?(t.child=nr(t,e.child,null,s),t.child=nr(t,null,n,s)):Xe(e,t,n,s),t.memoizedState=a.state,e=t.child):e=ws(e,t,s),e}function $v(e,t,n,i){return ja(),t.flags|=256,Xe(e,t,n,i),t.child}var pm={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function mm(e){return{baseLanes:e,cachePool:Ix()}}function gm(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Jn),e}function wS(e,t,n){var i=t.pendingProps,s=!1,a=(t.flags&128)!==0,r;if((r=a)||(r=e!==null&&e.memoizedState===null?!1:(fn.current&2)!==0),r&&(s=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if(kt){if(s?ua(t):ha(),(e=Se)?(e=AM(e,yi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ga!==null?{id:Ki,overflow:Qi}:null,retryLane:536870912,hydrationErrors:null},n=Dx(e),n.return=t,t.child=n,en=t,Se=null)):e=null,e===null)throw _a(t);return Fg(e)?t.lanes=32:t.lanes=536870912,null}return a=i.children,i=i.fallback,s?(ha(),s=t.mode,a=Uh({mode:"hidden",children:a},s),i=Za(i,s,n,null),a.return=t,i.return=t,a.sibling=i,t.child=a,i=t.child,i.memoizedState=mm(n),i.childLanes=gm(e,r,n),t.memoizedState=pm,Ol(null,i)):(ua(t),Ag(t,a))}var o=e.memoizedState;if(o!==null){var l=o.dehydrated;if(l!==null)return _A(e,t,a,r,i,l,o,n)}return s?(ha(),s=i.fallback,a=t.mode,o=e.child,l=o.sibling,i=Ss(o,{mode:"hidden",children:i.children}),i.subtreeFlags=o.subtreeFlags&1206910976,l!==null?s=Ss(l,s):(s=Za(s,a,n,null),s.flags|=2),s.return=t,i.return=t,i.sibling=s,t.child=i,Ol(null,i),i=t.child,s=e.child.memoizedState,s===null?s=mm(n):(a=s.cachePool,a!==null?(o=Fe._currentValue,a=a.parent!==o?{parent:o,pool:o}:a):a=Ix(),s={baseLanes:s.baseLanes|n,cachePool:a}),i.memoizedState=s,i.childLanes=gm(e,r,n),t.memoizedState=pm,Ol(e.child,i)):(ua(t),n=e.child,e=n.sibling,n=Ss(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function Ag(e,t){return t=Uh({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Uh(e,t){return e=Fn(22,e,null,t),e.lanes=0,e}function gu(e,t,n){return nr(t,e.child,null,n),e=Ag(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function _A(e,t,n,i,s,a,r,o){if(n)return t.flags&256?(ua(t),t.flags&=-257,gu(e,t,o)):t.memoizedState!==null?(ha(),t.child=e.child,t.flags|=128,null):(ha(),a=s.fallback,r=t.mode,s=Uh({mode:"visible",children:s.children},r),a=Za(a,r,o,null),a.flags|=2,s.return=t,a.return=t,s.sibling=a,t.child=s,nr(t,e.child,null,o),s=t.child,s.memoizedState=mm(o),s.childLanes=gm(e,i,o),t.memoizedState=pm,Ol(null,s));if(ua(t),Fg(a)){if(i=a.nextSibling&&a.nextSibling.dataset,i)var l=i.dgst;return i=l,i!==""&&(s=Error(j(419)),s.stack="",s.digest=i,Xl({value:s,source:null,stack:null})),gu(e,t,o)}if(He||$a(e,t,o,!1),i=(o&e.childLanes)!==0,He||i){if(va.current!==null)return gu(e,t,o);if(i=ge,i!==null&&(s=nx(i,o),s!==0&&s!==r.retryLane))throw r.retryLane=s,cr(e,s),Hn(i,e,s),Eg;return Gm(a)||mh(),gu(e,t,o)}return Gm(a)?(t.flags|=192,t.child=e.child,null):(e=r.treeContext,Se=xi(a.nextSibling),en=t,kt=!0,oa=null,yi=!1,e!==null&&Ux(t,e),t=Ag(t,s.children),t.flags|=134221824,t)}function ty(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),Du(e.return,t,n)}function ey(e){for(var t=null;e!==null;){var n=e.alternate;n!==null&&ih(n)===null&&(t=e),e=e.sibling}return t}function _u(e,t,n,i,s,a){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:s,treeForkCount:a}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=n,r.tailMode=s,r.treeForkCount=a)}function Mp(e){var t=e.child;for(e.child=null;t!==null;){var n=t.sibling;t.sibling=e.child,e.child=t,t=n}}function _m(e,t,n){var i=t.pendingProps,s=i.revealOrder,a=i.tail;i=i.children;var r=fn.current;if(t.flags&128)return ql(t,r),null;var o=(r&2)!==0;if(o?(r=r&1|2,t.flags|=128):r&=1,ql(t,r),s==="backwards"&&e!==null?(Mp(e),Xe(e,t,i,n),Mp(e)):Xe(e,t,i,n),i=kt?kl:0,!o&&e!==null&&(e.flags&128)!==0)t:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ty(e,n,t);else if(e.tag===19)ty(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(s){case"backwards":n=ey(t.child),n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null,Mp(t)),_u(t,!0,s,null,a,i);break;case"unstable_legacy-backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&ih(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}_u(t,!0,n,null,a,i);break;case"together":_u(t,!1,null,null,void 0,i);break;case"independent":t.memoizedState=null;break;default:n=ey(t.child),n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),_u(t,!1,s,n,a,i)}return t.child}function ny(e,t,n){var i=t.pendingProps;return na(t,t.type,i.value),Xe(e,t,i.children,n),t.child}function ws(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),xa|=t.lanes,(n&t.childLanes)===0)if(e!==null){if($a(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(j(153));if(t.child!==null){for(e=t.child,n=Ss(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ss(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function wg(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&th(e)))}function vA(e,t,n){switch(t.tag){case 3:qu(t,t.stateNode.containerInfo),na(t,Fe,e.memoizedState.cache),ja();break;case 27:case 5:Xp(t);break;case 4:qu(t,t.stateNode.containerInfo);break;case 10:na(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,om(t),null;break;case 13:var i=t.memoizedState;if(i!==null){if(i.dehydrated!==null)return ua(t),t.flags|=128,null;i=$a(e,t,n,!1);var s=t.child.childLanes;return i||(n&s)!==0?wS(e,t,n):(ua(t),e=ws(e,t,n),e!==null?e.sibling:null)}ua(t);break;case 19:if(t.flags&128)return _m(e,t,n);if(s=(e.flags&128)!==0,i=(n&t.childLanes)!==0,i||($a(e,t,n,!1),i=(n&t.childLanes)!==0),s){if(i)return _m(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),ql(t,fn.current),i)break;return null;case 22:return t.lanes=0,AS(e,t,n,t.pendingProps);case 24:na(t,Fe,e.memoizedState.cache)}return ws(e,t,n)}function RS(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)He=!0;else{if(!wg(e,n)&&(t.flags&128)===0)return He=!1,vA(e,t,n);He=(e.flags&131072)!==0}else He=!1,kt&&(t.flags&1048576)!==0&&Lx(t,kl,t.index);switch(t.lanes=0,t.tag){case 16:t:{var i=t.pendingProps;if(e=ka(t.elementType),t.type=e,typeof e=="function")ag(e)?(i=sr(e,i),t.tag=1,t=jv(null,t,e,i,n)):(t.tag=0,t=dm(null,t,e,i,n));else{if(e!=null){var s=e.$$typeof;if(s===qm){t.tag=11,t=Yv(null,t,e,i,n);break t}else if(s===Ym){t.tag=14,t=Zv(null,t,e,i,n);break t}else if(s===Zi){t.tag=10,t.type=e,t=ny(null,t,n);break t}}throw t=Vp(e)||e,Error(j(306,t,""))}}return t;case 0:return dm(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,s=sr(i,t.pendingProps),jv(e,t,i,s,n);case 3:t:{if(qu(t,t.stateNode.containerInfo),e===null)throw Error(j(387));i=t.pendingProps;var a=t.memoizedState;s=a.element,sm(e,t),Ll(t,i,null,n);var r=t.memoizedState;if(i=r.cache,na(t,Fe,i),i!==a.cache&&nm(t,[Fe],n,!0),Dl(),i=r.element,a.isDehydrated)if(a={element:i,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){t=$v(e,t,i,n);break t}else if(i!==s){s=vi(Error(j(424)),t),Xl(s),t=$v(e,t,i,n);break t}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Se=xi(e.firstChild),en=t,kt=!0,oa=null,yi=!0,n=zx(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|134221824,n=n.sibling;else{if(ja(),i===s){t=ws(e,t,n);break t}Xe(e,t,i,n)}t=t.child}return t;case 26:return Or(e,t),e===null?(n=Cy(t.type,null,t.pendingProps,null))?t.memoizedState=n:kt||(t.stateNode=_M(t.type,t.pendingProps,ra.current,t)):t.memoizedState=Cy(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Xp(t),e===null&&kt&&(i=t.stateNode=wM(t.type,t.pendingProps,ra.current),en=t,yi=!0,s=Se,Ma(t.type)?(Vm=s,Se=xi(i.firstChild)):Se=s),Xe(e,t,t.pendingProps.children,n),Or(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&kt&&((s=i=Se)&&(i=uw(i,t.type,t.pendingProps,yi),i!==null?(t.stateNode=i,en=t,Se=xi(i.firstChild),yi=!1,s=!0):s=!1),s||_a(t)),Xp(t),s=t.type,a=t.pendingProps,r=e!==null?e.memoizedProps:null,i=a.children,zm(s,a)?i=null:r!==null&&zm(s,r)&&(t.flags|=32),t.memoizedState!==null&&(s=pg(e,t,oA,null,null,n),go._currentValue=s),Or(e,t),Xe(e,t,i,n),t.child;case 6:return e===null&&kt&&((e=n=Se)&&(n=hw(n,t.pendingProps,yi),n!==null?(t.stateNode=n,en=t,Se=null,e=!0):e=!1),e||_a(t)),null;case 13:return wS(e,t,n);case 4:return qu(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=nr(t,null,i,n):Xe(e,t,i,n),t.child;case 11:return Yv(e,t,t.type,t.pendingProps,n);case 7:return i=t.pendingProps,Or(e,t),Xe(e,t,i,n),t.child;case 8:return Xe(e,t,t.pendingProps.children,n),t.child;case 12:return Xe(e,t,t.pendingProps.children,n),t.child;case 10:return ny(e,t,n);case 9:return s=t.type._context,i=t.pendingProps.children,tr(t),s=un(s),i=i(s),t.flags|=1,Xe(e,t,i,n),t.child;case 14:return Zv(e,t,t.type,t.pendingProps,n);case 15:return ES(e,t,t.type,t.pendingProps,n);case 19:return _m(e,t,n);case 31:return gA(e,t,n);case 22:return AS(e,t,n,t.pendingProps);case 24:return tr(t),i=un(Fe),e===null?(s=lg(),s===null&&(s=ge,a=og(),s.pooledCache=a,a.refCount++,a!==null&&(s.pooledCacheLanes|=n),s=a),t.memoizedState={parent:i,cache:s},ug(t),na(t,Fe,s)):((e.lanes&n)!==0&&(sm(e,t),Ll(t,null,null,n),Dl()),s=e.memoizedState,a=t.memoizedState,s.parent!==i?(s={parent:i,cache:i},t.memoizedState=s,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=s),na(t,Fe,i)):(i=a.cache,na(t,Fe,i),i!==s.cache&&nm(t,[Fe],n,!0))),Xe(e,t,t.pendingProps.children,n),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),i=t.pendingProps,i.name!=null&&i.name!=="auto"?t.flags|=e===null?18882560:18874368:kt&&wh(t),e!==null&&e.memoizedProps.name!==i.name?t.flags|=4194816:Or(e,t),Xe(e,t,i.children,n),t.child;case 29:throw t.pendingProps}throw Error(j(156,t.tag))}function vs(e){e.flags|=4}function bp(e,t,n,i,s){var a;if((a=(e.mode&32)!==0)&&(a=n===null?Ly(t,i):Ly(t,i)&&(i.src!==n.src||i.srcSet!==n.srcSet)),a){if(e.flags|=16777216,(s&335544128)===s)if(e.stateNode.complete)e.flags|=8192;else if(iM())e.flags|=8192;else throw Ka=eh,cg}else e.flags&=-16777217}function iy(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!DM(t))if(iM())e.flags|=8192;else throw Ka=eh,cg}function vu(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?$y():536870912,e.lanes|=t,co|=t)}function _l(e,t){if(!kt)switch(e.tailMode){case"visible":break;case"collapsed":for(var n=e.tail,i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null;break;default:for(t=e.tail,n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null}}function xe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags&1206910976,i|=s.flags&1206910976,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags,i|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function yA(e,t,n){var i=t.pendingProps;switch(rg(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xe(t),null;case 1:return xe(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),Ms(Fe),ao(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Lr(t)?vs(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,vp())),xe(t),null;case 26:var s=t.type,a=t.memoizedState;return e===null?(vs(t),a!==null?(xe(t),iy(t,a)):(xe(t),bp(t,s,null,i,n))):a?a!==e.memoizedState?(vs(t),xe(t),iy(t,a)):(xe(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&vs(t),xe(t),bp(t,s,e,i,n)),null;case 27:if(Yu(t),n=ra.current,s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&vs(t);else{if(!i){if(t.stateNode===null)throw Error(j(166));return xe(t),t.subtreeFlags&=-33554433,null}e=ji.current,Lr(t)?Nv(t,e):(e=wM(s,i,n),t.stateNode=e,vs(t))}return xe(t),t.subtreeFlags&=-33554433,null;case 5:if(Yu(t),s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&vs(t);else{if(!i){if(t.stateNode===null)throw Error(j(166));return xe(t),t.subtreeFlags&=-33554433,null}if(a=ji.current,Lr(t))Nv(t,a);else{var r=Kl(ra.current);switch(a){case 1:a=r.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:a=r.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":a=r.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":a=r.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":a=r.createElement("div"),a.innerHTML="<script><\/script>",a=a.removeChild(a.firstChild);break;case"select":a=typeof i.is=="string"?r.createElement("select",{is:i.is}):r.createElement("select"),i.multiple?a.multiple=!0:i.size&&(a.size=i.size);break;default:a=typeof i.is=="string"?r.createElement(s,{is:i.is}):r.createElement(s)}}a[cn]=t,a[Vn]=i;t:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)a.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break t;for(;r.sibling===null;){if(r.return===null||r.return===t)break t;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=a;t:switch(dn(a,s,i),s){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break t;case"img":i=!0;break t;default:i=!1}i&&vs(t)}}return xe(t),t.subtreeFlags&=-33554433,bp(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&vs(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(j(166));if(e=ra.current,Lr(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,s=en,s!==null)switch(s.tag){case 27:case 5:i=s.memoizedProps}e[cn]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||mM(e.nodeValue,n)),e||_a(t,!0)}else e=Kl(e).createTextNode(i),e[cn]=t,t.stateNode=e}return xe(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=Lr(t),n!==null){if(e===null){if(!i)throw Error(j(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(557));e[cn]=t}else ja(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;xe(t),e=!1}else n=vp(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Yn(t),t):(Yn(t),null);if((t.flags&128)!==0)throw Error(j(558))}return xe(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(s=Lr(t),i!==null&&i.dehydrated!==null){if(e===null){if(!s)throw Error(j(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(j(317));s[cn]=t}else ja(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;xe(t),s=!1}else s=vp(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),s=!0;if(!s)return t.flags&256?(Yn(t),t):(Yn(t),null)}return Yn(t),(t.flags&128)!==0?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,s=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(s=i.alternate.memoizedState.cachePool.pool),a=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(a=i.memoizedState.cachePool.pool),a!==s&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),vu(t,t.updateQueue),xe(t),null);case 4:return ao(),e===null&&Pg(t.stateNode.containerInfo),t.flags|=67108864,xe(t),null;case 10:return Ms(t.type),xe(t),null;case 19:if(fg(t),i=t.memoizedState,i===null)return xe(t),null;if(s=(t.flags&128)!==0,a=i.rendering,a===null)if(s)_l(i,!1);else{if(Oe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(a=ih(e),a!==null){for(t.flags|=128,_l(i,!1),e=a.updateQueue,t.updateQueue=e,vu(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Nx(n,e),n=n.sibling;return ql(t,fn.current&1|2),kt&&ys(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&Kn()>dh&&(t.flags|=128,s=!0,_l(i,!1),t.lanes=4194304)}else{if(!s)if(e=ih(a),e!==null){if(t.flags|=128,s=!0,e=e.updateQueue,t.updateQueue=e,vu(t,e),_l(i,!0),i.tail===null&&i.tailMode!=="collapsed"&&i.tailMode!=="visible"&&!a.alternate&&!kt)return xe(t),null}else 2*Kn()-i.renderingStartTime>dh&&n!==536870912&&(t.flags|=128,s=!0,_l(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(e=i.last,e!==null?e.sibling=a:t.child=a,i.last=a)}if(i.tail!==null){e=i.tail;t:{for(n=e;n!==null;){if(n.alternate!==null){n=!1;break t}n=n.sibling}n=!0}return i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Kn(),e.sibling=null,a=fn.current,a=s?a&1|2:a&1,i.tailMode==="visible"||i.tailMode==="collapsed"||!n||kt?ql(t,a):(n=a,Me(pn,t),Me(fn,n),yn===null&&(yn=t)),kt&&ys(t,i.treeForkCount),e}return xe(t),null;case 22:case 23:return Yn(t),hg(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(xe(t),t.subtreeFlags&6&&(t.flags|=8192)):xe(t),n=t.updateQueue,n!==null&&vu(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&hn(Ja),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Ms(Fe),xe(t),null;case 25:return null;case 30:return t.flags|=33554432,xe(t),null}throw Error(j(156,t.tag))}function xA(e,t){switch(rg(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ms(Fe),ao(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Yu(t),null;case 31:if(t.memoizedState!==null){if(Yn(t),t.alternate===null)throw Error(j(340));ja()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Yn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(j(340));ja()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return fg(t),e=t.flags,e&65536?(t.flags=e&-65537|128,e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return ao(),null;case 10:return Ms(t.type),null;case 22:case 23:return Yn(t),hg(),e!==null&&hn(Ja),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Ms(Fe),null;case 25:return null;default:return null}}function CS(e,t){switch(rg(t),t.tag){case 3:Ms(Fe),ao();break;case 26:case 27:case 5:Yu(t);break;case 4:ao();break;case 31:t.memoizedState!==null&&Yn(t);break;case 13:Yn(t);break;case 19:fg(t);break;case 10:Ms(t.type);break;case 22:case 23:Yn(t),hg(),e!==null&&hn(Ja);break;case 24:Ms(Fe)}}function cc(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var s=i.next;n=s;do{if((n.tag&e)===e){i=void 0;var a=n.create,r=n.inst;i=a(),r.destroy=i}n=n.next}while(n!==s)}}catch(o){fe(t,t.return,o)}}function ya(e,t,n){try{var i=t.updateQueue,s=i!==null?i.lastEffect:null;if(s!==null){var a=s.next;i=a;do{if((i.tag&e)===e){var r=i.inst,o=r.destroy;if(o!==void 0){r.destroy=void 0,s=t;var l=n,c=o;try{c()}catch(f){fe(s,l,f)}}}i=i.next}while(i!==a)}}catch(f){fe(t,t.return,f)}}function NS(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Hx(t,n)}catch(i){fe(e,e.return,i)}}}function DS(e,t,n){n.props=sr(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){fe(e,t,i)}}function qi(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:var s=e.stateNode,a=Ts(e.memoizedProps,s);(s.ref===null||s.ref.name!==a)&&(s.ref=SM(a)),i=s.ref;break;case 7:if(e.stateNode===null){var r=new ei(e);Gn(e.child,!1,lw,r,void 0,void 0),e.stateNode=r}i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(o){fe(e,t,o)}}function ln(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(s){fe(e,t,s)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(s){fe(e,t,s)}else n.current=null}function lh(e,t){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&t!==null)for(var n=0;n<t.length;n++)EM(e.stateNode,t[n])}function sy(e){for(var t=e.return;t!==null&&(Cg(t)&&EM(e.stateNode,t.stateNode),!Rg(t));)t=t.return}function Il(e){for(var t=e.return;t!==null&&(Cg(t)&&cw(e.stateNode,t.stateNode),!Rg(t));)t=t.return}function Rg(e){return e.tag===5||e.tag===3||e.tag===27}function Cg(e){return e&&e.tag===7&&e.stateNode!==null}function vm(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{t:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break t;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(s){fe(e,e.return,s)}}function Tp(e,t,n){try{var i=e.stateNode;XA(i,e.type,n,t),i[Vn]=t}catch(s){fe(e,e.return,s)}}function LS(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ma(e.type)||e.tag===4}function Ep(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||LS(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ma(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ym(e,t,n,i){var s=e.tag;if(s===5||s===6)s=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(s,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(s),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ji)),lh(e,i),ne=!0;else if(s!==4&&(s===27&&(lh(e,i),i=null,Ma(e.type)&&(n=e.stateNode,t=null)),e=e.child,e!==null))for(ym(e,t,n,i),e=e.sibling;e!==null;)ym(e,t,n,i),e=e.sibling}function ch(e,t,n,i){var s=e.tag;if(s===5||s===6)s=e.stateNode,t?n.insertBefore(s,t):n.appendChild(s),lh(e,i),ne=!0;else if(s!==4&&(s===27&&(lh(e,i),i=null,Ma(e.type)&&(n=e.stateNode)),e=e.child,e!==null))for(ch(e,t,n,i),e=e.sibling;e!==null;)ch(e,t,n,i),e=e.sibling}function US(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,s=t.attributes;s.length;)t.removeAttributeNode(s[0]);dn(t,i,n),t[cn]=e,t[Vn]=n}catch(a){fe(e,e.return,a)}}var uh=!1,Zn=null;function ay(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(uh=!0)}var Yi=null;function ry(){var e=Yi;return Yi=null,e}var zn=0;function Mo(e,t,n,i,s){return zn=0,OS(e.child,t,n,i,s)}function OS(e,t,n,i,s){for(var a=!1;e!==null;){if(e.tag===5){var r=e.stateNode;if(i!==null){var o=Fm(r);i.push(o),o.view&&(a=!0)}else a||Fm(r).view&&(a=!0);uh=!0,vM(r,zn===0?t:t+"_"+zn,n),zn++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&s||OS(e.child,t,n,i,s)&&(a=!0));e=e.sibling}return a}function ts(e,t){for(;e!==null;)e.tag===5?yM(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&t||ts(e.child,t)),e=e.sibling}function Pu(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(Pu(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var t=e.memoizedProps;if(t.name==null||t.name==="auto")throw Error(j(544));var n=t.name;t=Ns(t.default,t.share),t!=="none"&&(Mo(e,n,t,null,!1)||ts(e.child,!1))}e=e.sibling}}function xm(e,t){if(e.tag===30){var n=e.stateNode,i=e.memoizedProps,s=Ts(i,n),a=Ns(i.default,n.paired?i.share:i.enter);a!=="none"?Mo(e,s,a,null,!1)?(Pu(e),n.paired||t||uo(e,i.onEnter)):ts(e.child,!1):Pu(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)xm(e,t),e=e.sibling;else Pu(e)}function Sm(e){if(Zn!==null&&Zn.size!==0){var t=Zn;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var n=e.memoizedProps,i=n.name;if(i!=null&&i!=="auto"){var s=t.get(i);if(s!==void 0){var a=Ns(n.default,n.share);if(a!=="none"&&(Mo(e,i,a,null,!1)?(a=e.stateNode,s.paired=a,a.paired=s,uo(e,n.onShare)):ts(e.child,!1)),t.delete(i),t.size===0)break}}}Sm(e)}e=e.sibling}}}function Mm(e){if(e.tag===30){var t=e.memoizedProps,n=Ts(t,e.stateNode),i=Zn!==null?Zn.get(n):void 0,s=Ns(t.default,i!==void 0?t.share:t.exit);s!=="none"&&(Mo(e,n,s,null,!1)?i!==void 0?(s=e.stateNode,i.paired=s,s.paired=i,Zn.delete(n),uo(e,t.onShare)):uo(e,t.onExit):ts(e.child,!1)),Zn!==null&&Sm(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Mm(e),e=e.sibling;else Zn!==null&&Sm(e)}function IS(e){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,n=Ts(t,e.stateNode);t=Ns(t.default,t.update),e.flags&=-5,t!=="none"&&Mo(e,n,t,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&IS(e);e=e.sibling}}function bm(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var t=e.stateNode;t.paired!==null&&(t.paired=null,ts(e.child,!1))}bm(e)}e=e.sibling}}function Bu(e){if(e.tag===30)e.stateNode.paired=null,ts(e.child,!1),bm(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Bu(e),e=e.sibling;else bm(e)}function PS(e){for(e=e.child;e!==null;)e.tag===30?ts(e.child,!1):(e.subtreeFlags&33554432)!==0&&PS(e),e=e.sibling}function Ng(e,t,n,i,s,a,r){for(var o=!1;t!==null;){if(t.tag===5){var l=t.stateNode;if(a!==null&&zn<a.length){var c=a[zn],f=Fm(l);(c.view||f.view)&&(o=!0);var p;if(p=(e.flags&4)===0)if(f.clip)p=!0;else{p=c.rect;var u=f.rect;p=p.y!==u.y||p.x!==u.x||p.height!==u.height||p.width!==u.width}p&&(e.flags|=4),f.abs?f=!c.abs:(c=c.rect,f=f.rect,f=c.height!==f.height||c.width!==f.width),f&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&vM(l,zn===0?n:n+"_"+zn,s),o&&(e.flags&4)!==0||(Yi===null&&(Yi=[]),Yi.push(l,zn===0?i:i+"_"+zn,t.memoizedProps)),zn++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&r?e.flags|=t.flags&32:Ng(e,t.child,n,i,s,a,r)&&(o=!0));t=t.sibling}return o}function BS(e,t){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,i=e.stateNode,s=Ts(n,i),a=Ns(n.default,n.update);if(t){i=i.clones;var r=i===null?null:i.map(KA)}else r=e.memoizedState,e.memoizedState=null;i=e;var o=e.child;zn=0,s=Ng(i,o,s,s,a,r,!1),(e.flags&4)!==0&&s&&(t||uo(e,n.onUpdate))}else(e.subtreeFlags&33554432)!==0&&BS(e,t);e=e.sibling}}var je=!1,re=!1,ki=!1,Ap=!1,oy=typeof WeakSet=="function"?WeakSet:Set,$e=null,Xi=!1,El=!1,hh=!1,Tm=!1;function SA(e,t,n){if(e=e.containerInfo,Pm=_o,e=Mx(e),ng(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else t:{i=(i=e.ownerDocument)&&i.defaultView||window;var s=i.getSelection&&i.getSelection();if(s&&s.rangeCount!==0){i=s.anchorNode;var a=s.anchorOffset,r=s.focusNode;s=s.focusOffset;try{i.nodeType,r.nodeType}catch{i=null;break t}var o=0,l=-1,c=-1,f=0,p=0,u=e,d=null;e:for(;;){for(var v;u!==i||a!==0&&u.nodeType!==3||(l=o+a),u!==r||s!==0&&u.nodeType!==3||(c=o+s),u.nodeType===3&&(o+=u.nodeValue.length),(v=u.firstChild)!==null;)d=u,u=v;for(;;){if(u===e)break e;if(d===i&&++f===a&&(l=o),d===r&&++p===s&&(c=o),(v=u.nextSibling)!==null)break;u=d,d=u.parentNode}u=v}i=l===-1||c===-1?null:{start:l,end:c}}else i=null}i=i||{start:0,end:0}}else i=null;for(Bm={focusedElem:e,selectionRange:i},_o=!1,n=(n&335544064)===n,$e=t,t=n?9270:1024;$e!==null;){if(e=$e,n&&(i=e.deletions,i!==null))for(a=0;a<i.length;a++)n&&Mm(i[a]);if(e.alternate===null&&(e.flags&2)!==0)n&&ay(e),yu(n);else{if(e.tag===22){if(i=e.alternate,e.memoizedState!==null){i!==null&&i.memoizedState===null&&n&&Mm(i),yu(n);continue}else if(i!==null&&i.memoizedState!==null){n&&ay(e),yu(n);continue}}i=e.child,(e.subtreeFlags&t)!==0&&i!==null?(i.return=e,$e=i):(n&&IS(e),yu(n))}}Zn=null}function yu(e){for(;$e!==null;){var t=$e,n=e,i=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 15:break;case 1:if((s&1024)!==0&&i!==null){n=void 0,s=i.memoizedProps,i=i.memoizedState;var a=t.stateNode;try{var r=sr(t.type,s);n=a.getSnapshotBeforeUpdate(r,i),a.__reactInternalSnapshotBeforeUpdate=n}catch(o){fe(t,t.return,o)}}break;case 3:if((s&1024)!==0){if(i=t.stateNode.containerInfo,n=i.nodeType,n===9)Hm(i);else if(n===1)switch(i.nodeName){case"HEAD":case"HTML":case"BODY":Hm(i);break;default:i.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:n&&i!==null&&(n=Ts(i.memoizedProps,i.stateNode),s=t.memoizedProps,s=Ns(s.default,s.update),s!=="none"&&Mo(i,n,s,i.memoizedState=[],!0));break;default:if((s&1024)!==0)throw Error(j(163))}if(i=t.sibling,i!==null){i.return=t.return,$e=i;break}$e=t.return}}function zS(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:Wi(e,n),i&4&&cc(5,n);break;case 1:if(Wi(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(r){fe(n,n.return,r)}else{var s=sr(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(s,t,e.__reactInternalSnapshotBeforeUpdate)}catch(r){fe(n,n.return,r)}}i&64&&NS(n),i&512&&qi(n,n.return);break;case 3:if(Wi(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Hx(e,t)}catch(r){fe(n,n.return,r)}}break;case 27:t===null&&i&4&&US(n);case 26:case 5:Wi(e,n),t===null&&i&4&&vm(n),i&512&&qi(n,n.return);break;case 12:Wi(e,n);break;case 31:Wi(e,n),i&4&&VS(e,n);break;case 13:Wi(e,n),i&4&&kS(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=UA.bind(null,n),fw(e,n))));break;case 22:if(i=n.memoizedState!==null||je,!i){var a=t!==null&&t.memoizedState!==null||re;t=je,s=re,je=i,(re=a)&&!s?(i=2,(n.subtreeFlags&8772)!==0&&(i|=1),wi(e,n,i)):Wi(e,n),je=t,re=s}break;case 30:Wi(e,n),i&512&&qi(n,n.return);break;case 7:i&512&&qi(n,n.return);default:Wi(e,n)}}function Em(e,t){for(e=e.child;e!==null;)FS(e,t),e=e.sibling}function FS(e,t){switch(e.tag){case 5:case 26:try{var n=e.stateNode;if(t){var i=n.style;typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"}else{var s=e.stateNode,a=e.memoizedProps.style,r=a!=null&&a.hasOwnProperty("display")?a.display:null;s.style.display=r==null||typeof r=="boolean"?"":(""+r).trim()}}catch(l){fe(e,e.return,l)}Am(e,t);break;case 6:try{e.stateNode.nodeValue=t?"":e.memoizedProps,ne=!0}catch(l){fe(e,e.return,l)}break;case 18:try{var o=e.stateNode;t?by(o,!0):by(e.stateNode,!1)}catch(l){fe(e,e.return,l)}break;case 22:case 23:e.memoizedState===null&&Em(e,t);break;default:Em(e,t)}}function Am(e,t){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){t:{var n=e,i=t;switch(n.tag){case 4:FS(n,i);break t;case 22:n.memoizedState===null&&Am(n,i);break t;default:Am(n,i)}}e=e.sibling}}function HS(e){var t=e.alternate;t!==null&&(e.alternate=null,HS(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Sh(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var we=null,Pn=!1;function Ai(e,t,n){for(n=n.child;n!==null;)GS(e,t,n),n=n.sibling}function GS(e,t,n){if(Qn&&typeof Qn.onCommitFiberUnmount=="function")try{Qn.onCommitFiberUnmount(nc,n)}catch{}switch(n.tag){case 26:re||ln(n,t),Ai(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!re&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:re||ln(n,t),Il(n);var i=we,s=Pn;Ma(n.type)&&(we=n.stateNode,Pn=!1),Ai(e,t,n),RM(n.stateNode,n.type,n.memoizedProps),we=i,Pn=s;break;case 5:re||ln(n,t),Il(n);case 6:if(n.tag===6&&Il(n),i=we,s=Pn,we=null,Ai(e,t,n),we=i,Pn=s,we!==null)if(Pn)try{(we.nodeType===9?we.body:we.nodeName==="HTML"?we.ownerDocument.body:we).removeChild(n.stateNode),ne=!0}catch(a){fe(n,t,a)}else try{we.removeChild(n.stateNode),ne=!0}catch(a){fe(n,t,a)}break;case 18:we!==null&&(Pn?(e=we,My(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),vo(e)):My(we,n.stateNode));break;case 4:i=we,s=Pn,we=n.stateNode.containerInfo,Pn=!0,Ai(e,t,n),we=i,Pn=s;break;case 0:case 11:case 14:case 15:ya(2,n,t),re||ya(4,n,t),Ai(e,t,n);break;case 1:re||(ln(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&DS(n,t,i)),Ai(e,t,n);break;case 21:Ai(e,t,n);break;case 22:re=(i=re)||n.memoizedState!==null,Ai(e,t,n),re=i;break;case 30:ln(n,t),Ai(e,t,n);break;case 7:re||ln(n,t),Ai(e,t,n);break;default:Ai(e,t,n)}}function VS(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{vo(e)}catch(n){fe(t,t.return,n)}}}function kS(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{vo(e)}catch(n){fe(t,t.return,n)}}function MA(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new oy),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new oy),t;default:throw Error(j(435,e.tag))}}function xu(e,t){var n=MA(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var s=OA.bind(null,e,i);i.then(s,s)}})}function wn(e,t,n){var i=t.deletions;if(i!==null)for(var s=0;s<i.length;s++){var a=i[s],r=e,o=t,l=o;t:for(;l!==null;){switch(l.tag){case 27:if(Ma(l.type)){we=l.stateNode,Pn=!1;break t}break;case 5:we=l.stateNode,Pn=!1;break t;case 3:case 4:we=l.stateNode.containerInfo,Pn=!0;break t}l=l.return}if(we===null)throw Error(j(160));GS(r,o,a),we=null,Pn=!1,r=a.alternate,r!==null&&(r.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)XS(t,e,n),t=t.sibling}var Ri=null;function XS(e,t,n){var i=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(s&4&&(i=e.updateQueue,i=i!==null?i.events:null,i!==null))for(var a=0;a<i.length;a++){var r=i[a];r.ref.impl=r.nextImpl}wn(t,e,n),Rn(e),s&4&&(ya(3,e,e.return),cc(3,e),ya(5,e,e.return));break;case 1:wn(t,e,n),Rn(e),s&512&&(re||i===null||ln(i,i.return)),s&64&&je&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?t:n.concat(t))));break;case 26:if(a=Ri,wn(t,e,n),Rn(e),s&512&&(re||i===null||ln(i,i.return)),s&4)if(s=i!==null?i.memoizedState:null,n=e.memoizedState,i===null)if(n===null)if(e.stateNode===null)if(je)e.stateNode=_M(e.type,e.memoizedProps,t.containerInfo,e);else{t:{t=e.type,n=e.memoizedProps,s=a.ownerDocument||a;e:switch(t){case"title":i=s.getElementsByTagName("title")[0],(!i||i[ac]||i[cn]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=s.createElement(t),s.head.insertBefore(i,s.querySelector("head > title"))),dn(i,t,n),i[cn]=e,tn(i),t=i;break t;case"link":if(a=Dy("link","href",s).get(t+(n.href||""))){for(r=0;r<a.length;r++)if(i=a[r],i.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&i.getAttribute("rel")===(n.rel==null?null:n.rel)&&i.getAttribute("title")===(n.title==null?null:n.title)&&i.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){a.splice(r,1);break e}}i=s.createElement(t),dn(i,t,n),s.head.appendChild(i);break;case"meta":if(a=Dy("meta","content",s).get(t+(n.content||""))){for(r=0;r<a.length;r++)if(i=a[r],i.getAttribute("content")===(n.content==null?null:""+n.content)&&i.getAttribute("name")===(n.name==null?null:n.name)&&i.getAttribute("property")===(n.property==null?null:n.property)&&i.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&i.getAttribute("charset")===(n.charSet==null?null:n.charSet)){a.splice(r,1);break e}}i=s.createElement(t),dn(i,t,n),s.head.appendChild(i);break;default:throw Error(j(468,t))}i[cn]=e,tn(i),t=i}e.stateNode=t}else je||km(a,e.type,e.stateNode);else e.stateNode=Ny(a,n,e.memoizedProps);else s!==n?(s===null?(t=i.stateNode,t===null||re||t.parentNode.removeChild(t)):s.count--,n===null?je||km(a,e.type,e.stateNode):Ny(a,n,e.memoizedProps)):n===null&&e.stateNode!==null&&Tp(e,e.memoizedProps,i.memoizedProps);break;case 27:wn(t,e,n),Rn(e),s&512&&(re||i===null||ln(i,i.return)),i!==null&&s&4&&Tp(e,e.memoizedProps,i.memoizedProps);break;case 5:if(a=ki,ki=!1,wn(t,e,n),ki=a,Rn(e),s&512&&(re||i===null||ln(i,i.return)),e.flags&32){t=e.stateNode;try{oo(t,""),ne=!0}catch(f){fe(e,e.return,f)}}s&4&&e.stateNode!=null&&(t=e.memoizedProps,Tp(e,t,i!==null?i.memoizedProps:t)),s&1024&&(Ap=!0);break;case 6:if(wn(t,e,n),Rn(e),s&4){if(e.stateNode===null)throw Error(j(162));t=e.memoizedProps,n=e.stateNode;try{n.nodeValue=t,ne=!0}catch(f){fe(e,e.return,f)}}break;case 3:if(ne=!1,Gu=null,a=Ri,Ri=Ql(t.containerInfo),wn(t,e,n),Ri=a,Rn(e),s&4&&i!==null&&i.memoizedState.isDehydrated)try{vo(t.containerInfo)}catch(f){fe(e,e.return,f)}Ap&&(Ap=!1,WS(e)),ne=!1;break;case 4:s=ki,ki=je,i=dv(),a=Ri,Ri=Ql(e.stateNode.containerInfo),wn(t,e,n),Rn(e),Ri=a,ne&&El&&(hh=!0),ne=i,ki=s;break;case 12:wn(t,e,n),Rn(e);break;case 31:wn(t,e,n),Rn(e),s&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,xu(e,t)));break;case 13:wn(t,e,n),Rn(e),e.child.flags&8192&&e.memoizedState!==null!=(i!==null&&i.memoizedState!==null)&&(Oh=Kn()),s&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,xu(e,t)));break;case 22:a=e.memoizedState!==null,r=i!==null&&i.memoizedState!==null;var o=je,l=re,c=ki;je=o||a,ki=c||a,re=l||r,wn(t,e,n),re=l,ki=c,je=o,Rn(e),s&8192&&(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,!a||i===null||r||je||re||(t=r||re,n=je,i=re,je=a||je,re=t,Ks(e,2),je=n,re=i),!a&&ki||Em(e,a)),s&4&&(t=e.updateQueue,t!==null&&(n=t.retryQueue,n!==null&&(t.retryQueue=null,xu(e,n))));break;case 19:wn(t,e,n),Rn(e),s&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,xu(e,t)));break;case 30:s&512&&(re||i===null||ln(i,i.return)),s=dv(),a=El,r=(n&335544064)===n,o=e.memoizedProps,El=r&&Ns(o.default,o.update)!=="none",wn(t,e,n),Rn(e),r&&i!==null&&ne&&(e.flags|=4),El=a,ne=s;break;case 21:break;case 7:s&512&&(re||i===null||ln(i,i.return)),i&&i.stateNode!==null&&(i.stateNode._fragmentFiber=e);default:wn(t,e,n),Rn(e)}}function Rn(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(LS(i)){n=i;break}i=i.return}i=null;for(var s=e.return;s!==null;){if(Cg(s)){var a=s.stateNode;i===null?i=[a]:i.push(a)}if(Rg(s))break;s=s.return}var r=i;if(n==null)throw Error(j(160));switch(n.tag){case 27:var o=n.stateNode,l=Ep(e);ch(e,l,o,r);break;case 5:var c=n.stateNode;n.flags&32&&(oo(c,""),n.flags&=-33);var f=Ep(e);ch(e,f,c,r);break;case 3:case 4:var p=n.stateNode.containerInfo,u=Ep(e);ym(e,u,p,r);break;default:throw Error(j(161))}}catch(d){fe(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function WS(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;WS(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,_o=!0,t.reset(),_o=!1),e=e.sibling}}function Ur(e,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)qS(t,e),t=t.sibling;else BS(t,!1)}function qS(e,t){var n=e.alternate;if(n===null)xm(e,!1);else switch(e.tag){case 3:if(Tm=Xi=!1,ry(),Ur(t,e),!Xi&&!hh){if(e=Yi,e!==null)for(var i=0;i<e.length;i+=3){n=e[i];var s=e[i+1];yM(n,e[i+2]),n=n.ownerDocument.documentElement,n!==null&&n.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+s+")"})}e=t.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Tm=!0}Yi=null;break;case 5:Ur(t,e);break;case 4:i=Xi,Xi=!1,Ur(t,e),Xi&&(hh=!0),Xi=i;break;case 22:e.memoizedState===null&&(n.memoizedState!==null?xm(e,!1):Ur(t,e));break;case 30:i=Xi,s=ry(),Xi=!1,Ur(t,e),Xi&&(e.flags|=4);var a=e.memoizedProps,r=e.stateNode;t=Ts(a,r),r=Ts(n.memoizedProps,r);var o=Ns(a.default,a.update);o==="none"?t=!1:(a=n.memoizedState,n.memoizedState=null,n=e.child,zn=0,t=Ng(e,n,t,r,o,a,!0),zn!==(a===null?0:a.length)&&(e.flags|=32)),(e.flags&4)!==0&&t?(uo(e,e.memoizedProps.onUpdate),Yi=s):s!==null&&(s.push.apply(s,Yi),Yi=s),Xi=(e.flags&32)!==0?!0:i;break;default:Ur(t,e)}}function Wi(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)zS(e,t.alternate,t),t=t.sibling}function Ks(e,t){for(e=e.child;e!==null;){var n=e,i=t;switch(n.tag){case 0:case 11:case 14:case 15:ya(4,n,n.return),Ks(n,i);break;case 1:ln(n,n.return);var s=n.stateNode;typeof s.componentWillUnmount=="function"&&DS(n,n.return,s),Ks(n,i);break;case 27:(i&2)!==0&&RM(n.stateNode,n.type,n.memoizedProps);case 5:ln(n,n.return),n.tag!==5&&n.tag!==27||Il(n),Ks(n,i);break;case 6:Il(n);break;case 26:ln(n,n.return),s=n.stateNode,n.memoizedState!==null||s===null||re||s.parentNode.removeChild(s),Ks(n,i);break;case 22:n.memoizedState===null&&Ks(n,i);break;case 30:ln(n,n.return),Ks(n,i);break;case 7:ln(n,n.return);default:Ks(n,i)}e=e.sibling}}function wi(e,t,n){for(n=(t.subtreeFlags&8772)!==0?n:n&-2,t=t.child;t!==null;){var i=t.alternate,s=e,a=t,r=a.flags,o=(n&1)!==0;switch(a.tag){case 0:case 11:case 15:wi(s,a,n),cc(4,a);break;case 1:if(wi(s,a,n),i=a,s=i.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(f){fe(i,i.return,f)}if(i=a,s=i.updateQueue,s!==null){var l=i.stateNode;try{var c=s.shared.hiddenCallbacks;if(c!==null)for(s.shared.hiddenCallbacks=null,s=0;s<c.length;s++)Fx(c[s],l)}catch(f){fe(i,i.return,f)}}o&&r&64&&NS(a),qi(a,a.return);break;case 27:(n&2)!==0&&US(a);case 5:a.tag!==5&&a.tag!==27||sy(a),wi(s,a,n),o&&i===null&&r&4&&vm(a),qi(a,a.return);break;case 6:sy(a);break;case 26:l=a.stateNode,a.memoizedState!==null||l===null||je||km(Ql(l.ownerDocument),a.type,l),wi(s,a,n),o&&i===null&&r&4&&vm(a),qi(a,a.return);break;case 12:wi(s,a,n);break;case 31:wi(s,a,n),o&&r&4&&VS(s,a);break;case 13:wi(s,a,n),o&&r&4&&kS(s,a);break;case 22:a.memoizedState===null&&wi(s,a,n),qi(a,a.return);break;case 30:wi(s,a,n),qi(a,a.return);break;case 7:qi(a,a.return);default:wi(s,a,n)}t=t.sibling}}function Dg(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&oc(n))}function Lg(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&oc(e))}function di(e,t,n,i){var s=(n&335544064)===n;if(t.subtreeFlags&(s?10262:10256))for(t=t.child;t!==null;)YS(e,t,n,i),t=t.sibling;else s&&PS(t)}function YS(e,t,n,i){var s=(n&335544064)===n;s&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&Bu(t);var a=t.flags;switch(t.tag){case 0:case 11:case 15:di(e,t,n,i),a&2048&&cc(9,t);break;case 1:di(e,t,n,i);break;case 3:di(e,t,n,i),s&&Tm&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),a&2048&&(a=null,t.alternate!==null&&(a=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==a&&(t.refCount++,a!=null&&oc(a)));break;case 12:if(a&2048){di(e,t,n,i),a=t.stateNode;try{var r=t.memoizedProps,o=r.id,l=r.onPostCommit;typeof l=="function"&&l(o,t.alternate===null?"mount":"update",a.passiveEffectDuration,-0)}catch(c){fe(t,t.return,c)}}else di(e,t,n,i);break;case 31:di(e,t,n,i);break;case 13:di(e,t,n,i);break;case 23:break;case 22:r=t.stateNode,o=t.alternate,t.memoizedState!==null?(s&&o!==null&&o.memoizedState===null&&Bu(o),r._visibility&2?di(e,t,n,i):Pl(e,t)):(s&&o!==null&&o.memoizedState!==null&&Bu(t),r._visibility&2?di(e,t,n,i):(r._visibility|=2,Ir(e,t,n,i,(t.subtreeFlags&10256)!==0||!1))),a&2048&&Dg(o,t);break;case 24:di(e,t,n,i),a&2048&&Lg(t.alternate,t);break;case 30:s&&(a=t.alternate,a!==null&&(ts(a.child,!0),ts(t.child,!0))),di(e,t,n,i);break;default:di(e,t,n,i)}}function Ir(e,t,n,i,s){for(s=s&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var a=e,r=t,o=n,l=i,c=r.flags;switch(r.tag){case 0:case 11:case 15:Ir(a,r,o,l,s),cc(8,r);break;case 23:break;case 22:var f=r.stateNode;r.memoizedState!==null?f._visibility&2?Ir(a,r,o,l,s):Pl(a,r):(f._visibility|=2,Ir(a,r,o,l,s)),s&&c&2048&&Dg(r.alternate,r);break;case 24:Ir(a,r,o,l,s),s&&c&2048&&Lg(r.alternate,r);break;default:Ir(a,r,o,l,s)}t=t.sibling}}function Pl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,s=i.flags;switch(i.tag){case 22:Pl(n,i),s&2048&&Dg(i.alternate,i);break;case 24:Pl(n,i),s&2048&&Lg(i.alternate,i);break;default:Pl(n,i)}t=t.sibling}}var Xa=8192;function Ga(e,t,n){if(e.subtreeFlags&Xa)for(e=e.child;e!==null;)ZS(e,t,n),e=e.sibling}function ZS(e,t,n){switch(e.tag){case 26:Ga(e,t,n),e.flags&Xa&&(e.memoizedState!==null?Aw(n,Ri,e.memoizedState,e.memoizedProps):(e=e.stateNode,(t&335544128)===t&&Uy(n,e)));break;case 5:Ga(e,t,n),e.flags&Xa&&(e=e.stateNode,(t&335544128)===t&&Uy(n,e));break;case 3:case 4:var i=Ri;Ri=Ql(e.stateNode.containerInfo),Ga(e,t,n),Ri=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=Xa,Xa=16777216,Ga(e,t,n),Xa=i):Ga(e,t,n));break;case 30:if((e.flags&Xa)!==0&&(i=e.memoizedProps.name,i!=null&&i!=="auto")){var s=e.stateNode;s.paired=null,Zn===null&&(Zn=new Map),Zn.set(i,s)}Ga(e,t,n);break;default:Ga(e,t,n)}}function JS(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function vl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];$e=i,QS(i,e)}JS(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)KS(e),e=e.sibling}function KS(e){switch(e.tag){case 0:case 11:case 15:vl(e),e.flags&2048&&ya(9,e,e.return);break;case 3:vl(e);break;case 12:vl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,zu(e)):vl(e);break;default:vl(e)}}function zu(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];$e=i,QS(i,e)}JS(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ya(8,t,t.return),zu(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,zu(t));break;default:zu(t)}e=e.sibling}}function QS(e,t){for(;$e!==null;){var n=$e;switch(n.tag){case 0:case 11:case 15:ya(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:oc(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,$e=i;else t:for(n=e;$e!==null;){i=$e;var s=i.sibling,a=i.return;if(HS(i),i===n){$e=null;break t}if(s!==null){s.return=a,$e=s;break t}$e=a}}}var bA={getCacheForType:function(e){var t=un(Fe),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return un(Fe).controller.signal}},TA=typeof WeakMap=="function"?WeakMap:Map,se=0,ge=null,Wt=null,Jt=0,ue=0,Wn=null,ia=!1,bo=!1,Ug=!1,Rs=0,Oe=0,xa=0,Qa=0,fh=0,Jn=0,co=0,Bl=null,Bn=null,wm=!1,Oh=0,jS=0,dh=1/0,ph=null,fa=null,Ne=0,Ni=null,ar=null,$i=0,Rm=0,Cm=null,$S=null,no=null,io=null,so=null,zl=0,Fu=null;function $n(){return(se&2)!==0&&Jt!==0?Jt&-Jt:Dt.T!==null?Ig():ix()}function tM(){if(Jn===0)if((Jt&536870912)===0||kt){var e=ou;ou<<=1,(ou&3932160)===0&&(ou=262144),Jn=e}else Jn=536870912;return e=pn.current,e!==null&&(e.flags|=32),Jn}function uo(e,t){if(t!=null){var n=e.stateNode,i=n.ref;i===null&&(i=n.ref=SM(Ts(e.memoizedProps,n))),io===null&&(io=[]),io.push(t.bind(null,i))}}function Hn(e,t,n){(e===ge&&(ue===2||ue===9)||e.cancelPendingCommit!==null)&&(ho(e,0),sa(e,Jt,Jn,!1)),sc(e,n),((se&2)===0||e!==ge)&&(e===ge&&((se&2)===0&&(Qa|=n),Oe===4&&sa(e,Jt,Jn,!1)),ns(e))}function eM(e,t,n){if((se&6)!==0)throw Error(j(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||ic(e,t),s=i?wA(e,t):wp(e,t,!0),a=i;do{if(s===0){bo&&!i&&sa(e,t,0,!1);break}else{if(n=e.current.alternate,a&&!EA(n)){s=wp(e,t,!1),a=!1;continue}if(s===2){if(a=t,e.errorRecoveryDisabledLanes&a)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;t:{var o=e;s=Bl;var l=o.current.memoizedState.isDehydrated;if(l&&(ho(o,r).flags|=256),r=wp(o,r,!1),r!==2&&r!==6){if(Ug&&!l){o.errorRecoveryDisabledLanes|=a,Qa|=a,s=4;break t}a=Bn,Bn=s,a!==null&&(Bn===null?Bn=a:Bn.push.apply(Bn,a))}s=r}if(a=!1,s!==2)continue}}if(s===1){ho(e,0),sa(e,t,0,!0);break}t:{switch(i=e,a=s,a){case 0:case 1:throw Error(j(345));case 4:if((t&4194048)!==t&&(t&62914560)!==t)break;case 6:sa(i,t,Jn,!ia);break t;case 2:Bn=null;break;case 3:case 5:break;default:throw Error(j(329))}if((t&62914560)===t&&(s=Oh+300-Kn(),10<s)){if(sa(i,t,Jn,!ia),xh(i,0,!0)!==0)break t;$i=t,i.timeoutHandle=Bg(ly.bind(null,i,n,Bn,ph,wm,t,Jn,Qa,co,ia,a,"Throttled",-0,0),s);break t}ly(i,n,Bn,ph,wm,t,Jn,Qa,co,ia,a,null,-0,0)}}break}while(!0);ns(e)}function ly(e,t,n,i,s,a,r,o,l,c,f,p,u,d){e.timeoutHandle=-1;var v=t.subtreeFlags,b=(a&335544064)===a;if(p=null,(b||v&8192||(v&16785408)===16785408)&&(p={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ji},Zn=null,ZS(t,a,p),b&&(v=p,b=e.containerInfo,b=(b.nodeType===9?b:b.ownerDocument).__reactViewTransition,b!=null&&(v.count++,v.waitingForViewTransition=!0,v=jl.bind(v),b.finished.then(v,v))),v=(a&62914560)===a?Oh-Kn():(a&4194048)===a?jS-Kn():0,v=ww(p,v),v!==null)){$i=a,e.cancelPendingCommit=v(uy.bind(null,e,t,a,n,i,s,r,o,l,c,f,p,null,u,d)),sa(e,a,r,!c);return}uy(e,t,a,n,i,s,r,o,l,c,f,p)}function EA(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var s=n[i],a=s.getSnapshot;s=s.value;try{if(!ti(a(),s))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function sa(e,t,n,i){t=jy(e,t),t&=~fh,t&=~Qa,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var s=t;0<s;){var a=31-jn(s),r=1<<a;i[a]=-1,s&=~r}n!==0&&tx(e,n,t)}function Ih(){return(se&6)===0?(uc(0,!1),!1):!0}function Og(){if(Wt!==null){if(ue===0)var e=Wt.return;else e=Wt,xs=ur=null,_g(e),$r=null,Wl=0,e=Wt;for(;e!==null;)CS(e.alternate,e),e=e.return;Wt=null}}function ho(e,t){var n=e.timeoutHandle;return n!==-1&&(e.timeoutHandle=-1,YA(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),$i=0,Og(),ge=e,Wt=n=Ss(e.current,null),Jt=t,ue=0,Wn=null,ia=!1,bo=ic(e,t),Ug=!1,co=Jn=fh=Qa=xa=Oe=0,Bn=Bl=null,wm=!1,Rs=jy(e,t),Eh(),n}function nM(e,t){Ft=null,Dt.H=rh,t===So||t===Rh?(t=Iv(),ue=3):t===cg?(t=Iv(),ue=4):ue=t===Eg?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Wn=t,Wt===null&&(Oe=1,oh(e,vi(t,e.current)))}function iM(){var e=pn.current;return e===null?!0:(Jt&4194048)===Jt?yn===null:(Jt&62914560)===Jt||(Jt&536870912)!==0?e===yn:!1}function sM(){var e=Dt.H;return Dt.H=rh,e===null?rh:e}function aM(){var e=Dt.A;return Dt.A=bA,e}function mh(){Oe=4,ia||(Jt&4194048)!==Jt&&pn.current!==null||(bo=!0),(xa&134217727)===0&&(Qa&134217727)===0||ge===null||sa(ge,Jt,Jn,!1)}function wp(e,t,n){var i=se;se|=2;var s=sM(),a=aM();(ge!==e||Jt!==t)&&(ph=null,ho(e,t)),t=!1;var r=Oe;t:do try{if(ue!==0&&Wt!==null){var o=Wt,l=Wn;switch(ue){case 8:Og(),r=6;break t;case 3:case 2:case 9:case 6:pn.current===null&&(t=!0);var c=ue;if(ue=0,Wn=null,Zr(e,o,l,c),n&&bo){r=0;break t}break;default:c=ue,ue=0,Wn=null,Zr(e,o,l,c)}}AA(),r=Oe;break}catch(f){nM(e,f)}while(!0);return t&&e.shellSuspendCounter++,xs=ur=null,se=i,Dt.H=s,Dt.A=a,Wt===null&&(ge=null,Jt=0,Eh()),r}function AA(){for(;Wt!==null;)rM(Wt)}function wA(e,t){var n=se;se|=2;var i=sM(),s=aM();ge!==e||Jt!==t?(ph=null,dh=Kn()+500,ho(e,t)):bo=ic(e,t);t:do try{if(ue!==0&&Wt!==null){t=Wt;var a=Wn;e:switch(ue){case 1:ue=0,Wn=null,Zr(e,t,a,1);break;case 2:case 9:if(Ov(a)){ue=0,Wn=null,cy(t);break}t=function(){ue!==2&&ue!==9||ge!==e||(ue=7),ns(e)},a.then(t,t);break t;case 3:ue=7;break t;case 4:ue=5;break t;case 7:Ov(a)?(ue=0,Wn=null,cy(t)):(ue=0,Wn=null,Zr(e,t,a,7));break;case 5:var r=null;switch(Wt.tag){case 26:r=Wt.memoizedState;case 5:case 27:var o=Wt;if(r?DM(r):o.stateNode.complete){ue=0,Wn=null;var l=o.sibling;if(l!==null)Wt=l;else{var c=o.return;c!==null?(Wt=c,Ph(c)):Wt=null}break e}}ue=0,Wn=null,Zr(e,t,a,5);break;case 6:ue=0,Wn=null,Zr(e,t,a,6);break;case 8:Og(),Oe=6;break t;default:throw Error(j(462))}}RA();break}catch(f){nM(e,f)}while(!0);return xs=ur=null,Dt.H=i,Dt.A=s,se=n,Wt!==null?0:(ge=null,Jt=0,Eh(),Oe)}function RA(){for(;Wt!==null&&!WT();)rM(Wt)}function rM(e){var t=RS(e.alternate,e,Rs);e.memoizedProps=e.pendingProps,t===null?Ph(e):Wt=t}function cy(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Qv(n,t,t.pendingProps,t.type,void 0,Jt);break;case 11:t=Qv(n,t,t.pendingProps,t.type.render,t.ref,Jt);break;case 5:_g(t);var i=t;i===en&&(kt?($u(i),i.tag===5&&i.stateNode!=null&&(Se=i.stateNode)):($u(i),kt=!0));default:CS(n,t),t=Wt=Nx(t,Rs),t=RS(n,t,Rs)}e.memoizedProps=e.pendingProps,t===null?Ph(e):Wt=t}function Zr(e,t,n,i){xs=ur=null,_g(t),$r=null,Wl=0;var s=t.return;try{if(mA(e,s,t,n,Jt)){Oe=1,oh(e,vi(n,e.current)),Wt=null;return}}catch(a){if(s!==null)throw Wt=s,a;Oe=1,oh(e,vi(n,e.current)),Wt=null;return}t.flags&32768?(kt||i===1?e=!0:bo||(Jt&536870912)!==0?e=!1:(ia=e=!0,(i===2||i===9||i===3||i===6)&&(i=pn.current,i!==null&&i.tag===13&&(i.flags|=16384))),oM(t,e)):Ph(t)}function Ph(e){var t=e;do{if((t.flags&32768)!==0){oM(t,ia);return}e=t.return;var n=yA(t.alternate,t,Rs);if(n!==null){Wt=n;return}if(t=t.sibling,t!==null){Wt=t;return}Wt=t=e}while(t!==null);Oe===0&&(Oe=5)}function oM(e,t){do{var n=xA(e.alternate,e);if(n!==null){n.flags&=32767,Wt=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Wt=e;return}Wt=e=n}while(e!==null);Oe=6,Wt=null}function uy(e,t,n,i,s,a,r,o,l,c,f,p){e.cancelPendingCommit=null;do Bh();while(Ne!==0);if((se&6)!==0)throw Error(j(327));if(t!==null){if(t===e.current)throw Error(j(177));e===ge&&(Wt=ge=null,Jt=0),ar=t,Ni=e,$i=n,Cm=s,$S=i,CA(e,t,n,r,o,l,p)}}function CA(e,t,n,i,s,a,r){var o=t.lanes|t.childLanes;if(Rm=o,o|=ig,eE(e,n,o,i,s,a),io=null,(n&335544064)===n?(so=iA(e),i=10262):(so=null,i=10256),(t.subtreeFlags&i)!==0||(t.flags&i)!==0?(e.callbackNode=null,e.callbackPriority=0,IA(Zu,function(){return Um(),null})):(e.callbackNode=null,e.callbackPriority=0),uh=!1,i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=Dt.T,Dt.T=null,s=ae.p,ae.p=2,a=se,se|=4;try{SA(e,t,n)}finally{se=a,ae.p=s,Dt.T=i}}Ne=1,uh?no=$A(r,e.containerInfo,so,Nm,Dm,DA,Lm,Um,NA,null,null):(Nm(),Dm(),Lm())}function NA(e){if(Ne!==0){var t=Ni.onRecoverableError;t(e,{componentStack:null})}}function DA(){Ne===3&&(Ne=0,qS(ar,Ni),Ne=4)}function Nm(){if(Ne===1){Ne=0;var e=Ni,t=ar,n=$i,i=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||i){i=Dt.T,Dt.T=null;var s=ae.p;ae.p=2;var a=se;se|=4;try{El=hh=!1,XS(t,e,n),n=Bm;var r=Mx(e.containerInfo),o=n.focusedElem,l=n.selectionRange;if(r!==o&&o&&o.ownerDocument&&Sx(o.ownerDocument.documentElement,o)){if(l!==null&&ng(o)){var c=l.start,f=l.end;if(f===void 0&&(f=c),"selectionStart"in o)o.selectionStart=c,o.selectionEnd=Math.min(f,o.value.length);else{var p=o.ownerDocument||document,u=p&&p.defaultView||window;if(u.getSelection){var d=u.getSelection(),v=o.textContent.length,b=Math.min(l.start,v),g=l.end===void 0?b:Math.min(l.end,v);!d.extend&&b>g&&(r=g,g=b,b=r);var h=Av(o,b),m=Av(o,g);if(h&&m&&(d.rangeCount!==1||d.anchorNode!==h.node||d.anchorOffset!==h.offset||d.focusNode!==m.node||d.focusOffset!==m.offset)){var x=p.createRange();x.setStart(h.node,h.offset),d.removeAllRanges(),b>g?(d.addRange(x),d.extend(m.node,m.offset)):(x.setEnd(m.node,m.offset),d.addRange(x))}}}}for(p=[],d=o;d=d.parentNode;)d.nodeType===1&&p.push({element:d,left:d.scrollLeft,top:d.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<p.length;o++){var y=p[o];y.element.scrollLeft=y.left,y.element.scrollTop=y.top}}_o=!!Pm,Bm=Pm=null}finally{se=a,ae.p=s,Dt.T=i}}e.current=t,Ne=2}}function Dm(){if(Ne===2){Ne=0;var e=Ni,t=ar,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=Dt.T,Dt.T=null;var i=ae.p;ae.p=2;var s=se;se|=4;try{zS(e,t.alternate,t)}finally{se=s,ae.p=i,Dt.T=n}}Ne=3}}function Lm(){if(Ne===4||Ne===3){Ne=0;var e=no;no=null,qT();var t=Ni,n=ar,i=$i,s=$S,a=(i&335544064)===i?10262:10256;if((n.subtreeFlags&a)!==0||(n.flags&a)!==0?Ne=5:(Ne=0,ar=Ni=null,lM(t,t.pendingLanes)),a=t.pendingLanes,a===0&&(fa=null),Km(i),n=n.stateNode,Qn&&typeof Qn.onCommitFiberRoot=="function")try{Qn.onCommitFiberRoot(nc,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=Dt.T,a=ae.p,ae.p=2,Dt.T=null;try{for(var r=t.onRecoverableError,o=0;o<s.length;o++){var l=s[o];r(l.value,{componentStack:l.stack})}}finally{Dt.T=n,ae.p=a}}if(s=io,r=so,so=null,s!==null&&(io=null,r===null&&(r=[]),e!==null))for(l=0;l<s.length;l++)n=(0,s[l])(r),n!==void 0&&e.finished.finally(n);($i&3)!==0&&Bh(),ns(t),a=t.pendingLanes,(i&261930)!==0&&(a&42)!==0?t===Fu?zl++:(zl=0,Fu=t):(zl=0,Fu=null),uc(0,!1)}}function lM(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,oc(t)))}function Bh(){return no!==null&&(no.skipTransition(),no=null),Nm(),Dm(),Lm(),Um()}function Um(){if(Ne!==5)return!1;var e=Ni,t=Rm;Rm=0;var n=Km($i),i=Dt.T,s=ae.p;try{ae.p=32>n?32:n,Dt.T=null,n=Cm,Cm=null;var a=Ni,r=$i;if(Ne=0,ar=Ni=null,$i=0,(se&6)!==0)throw Error(j(331));var o=se;if(se|=4,KS(a.current),YS(a,a.current,r,n),se=o,uc(0,!1),Qn&&typeof Qn.onPostCommitFiberRoot=="function")try{Qn.onPostCommitFiberRoot(nc,a)}catch{}return!0}finally{ae.p=s,Dt.T=i,lM(e,t)}}function hy(e,t,n){t=vi(n,t),t=fm(e.stateNode,t,2),e=ca(e,t,2),e!==null&&(sc(e,2),ns(e))}function fe(e,t,n){if(e.tag===3)hy(e,e,n);else for(;t!==null;){if(t.tag===3){hy(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(fa===null||!fa.has(i))){e=vi(n,e),n=bS(2),i=ca(t,n,2),i!==null&&(TS(n,i,t,e),sc(i,2),ns(i));break}}t=t.return}}function Rp(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new TA;var s=new Set;i.set(t,s)}else s=i.get(t),s===void 0&&(s=new Set,i.set(t,s));s.has(n)||(Ug=!0,s.add(n),e=LA.bind(null,e,t,n),t.then(e,e))}function LA(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,ge===e&&(Jt&n)===n&&((Oe===4||Oe===3&&(Jt&62914560)===Jt&&300>Kn()-Oh)&&(se&2)===0?ho(e,0):fh|=n,co===Jt&&(co=0)),ns(e)}function cM(e,t){t===0&&(t=$y()),e=cr(e,t),e!==null&&(sc(e,t),ns(e))}function UA(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),cM(e,n)}function OA(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(j(314))}i!==null&&i.delete(t),cM(e,n)}function IA(e,t){return Zm(e,t)}var fo=null,Pr=null,Om=!1,gh=!1,Cp=!1,aa=0;function ns(e){e!==Pr&&e.next===null&&(Pr===null?fo=Pr=e:Pr=Pr.next=e),gh=!0,Om||(Om=!0,BA())}function uc(e,t){if(!Cp&&gh){Cp=!0;do for(var n=!1,i=fo;i!==null;){if(!t)if(e!==0){var s=i.pendingLanes;if(s===0)var a=0;else{var r=i.suspendedLanes,o=i.pingedLanes;a=(1<<31-jn(42|e)+1)-1,a&=s&~(r&~o),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,fy(i,a))}else a=Jt,a=xh(i,i===ge?a:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(a&3)===0||ic(i,a)||(n=!0,fy(i,a));i=i.next}while(n);Cp=!1}}function PA(){uM()}function uM(){gh=Om=!1;var e=0;aa!==0&&qA()&&(e=aa);for(var t=Kn(),n=null,i=fo;i!==null;){var s=i.next,a=hM(i,t);a===0?(i.next=null,n===null?fo=s:n.next=s,s===null&&(Pr=n)):(n=i,(e!==0||(a&3)!==0)&&(gh=!0)),i=s}Ne!==0&&Ne!==5||uc(e,!1),aa!==0&&(aa=0)}function hM(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,s=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var r=31-jn(a),o=1<<r,l=s[r];l===-1?((o&n)===0||(o&i)!==0)&&(s[r]=tE(o,t)):l<=t&&(e.expiredLanes|=o),a&=~o}if(t=ge,n=Jt,n=xh(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(ue===2||ue===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&op(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||ic(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&op(i),Km(n)){case 2:case 8:n=Ky;break;case 32:n=Zu;break;case 268435456:n=Qy;break;default:n=Zu}return i=fM.bind(null,e),n=Zm(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&op(i),e.callbackPriority=2,e.callbackNode=null,2}function fM(e,t){if(Ne!==0&&Ne!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Bh()&&e.callbackNode!==n)return null;var i=Jt;return i=xh(e,e===ge?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(eM(e,i,t),hM(e,Kn()),e.callbackNode!=null&&e.callbackNode===n?fM.bind(null,e):null)}function fy(e,t){if(Bh())return null;eM(e,t,!0)}function BA(){ZA(function(){(se&6)!==0?Zm(Jy,PA):uM()})}function Ig(){if(aa===0){var e=er;e===0&&(e=ru,ru<<=1,(ru&261888)===0&&(ru=256)),aa=e}return aa}function dy(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:wu(e)}function zA(e,t,n,i,s){if(t==="submit"&&n&&n.stateNode===s){var a=dy((s[Vn]||null).action),r=i.submitter;r&&(t=(t=r[Vn]||null)?dy(t.formAction):r.getAttribute("formAction"),t!==null&&(a=t,r=null));var o=new Mh("action","action",null,i,s);e.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(aa!==0){var l=new FormData(s,r);um(n,{pending:!0,data:l,method:s.method,action:a},null,l)}}else typeof a=="function"&&(o.preventDefault(),l=new FormData(s,r),um(n,{pending:!0,data:l,method:s.method,action:a},a,l))},currentTarget:s}]})}}for(Su=0;Su<$p.length;Su++)Mu=$p[Su],py=Mu.toLowerCase(),my=Mu[0].toUpperCase()+Mu.slice(1),Di(py,"on"+my);var Mu,py,my,Su;Di(Tx,"onAnimationEnd");Di(Ex,"onAnimationIteration");Di(Ax,"onAnimationStart");Di("dblclick","onDoubleClick");Di("focusin","onFocus");Di("focusout","onBlur");Di(JE,"onTransitionRun");Di(KE,"onTransitionStart");Di(QE,"onTransitionCancel");Di(wx,"onTransitionEnd");ro("onMouseEnter",["mouseout","mouseover"]);ro("onMouseLeave",["mouseout","mouseover"]);ro("onPointerEnter",["pointerout","pointerover"]);ro("onPointerLeave",["pointerout","pointerover"]);or("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));or("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));or("onBeforeInput",["compositionend","keypress","textInput","paste"]);or("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));or("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));or("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Zl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),FA=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Zl));function dM(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],s=i.event;i=i.listeners;t:{var a=void 0;if(t)for(var r=i.length-1;0<=r;r--){var o=i[r],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==a&&s.isPropagationStopped())break t;a=o,s.currentTarget=c;try{a(s)}catch(f){Ku(f)}s.currentTarget=null,a=l}else for(r=0;r<i.length;r++){if(o=i[r],l=o.instance,c=o.currentTarget,o=o.listener,l!==a&&s.isPropagationStopped())break t;a=o,s.currentTarget=c;try{a(s)}catch(f){Ku(f)}s.currentTarget=null,a=l}}}}function Xt(e,t){var n=t[cv];n===void 0&&(n=t[cv]=new Set);var i=e+"__bubble";n.has(i)||(pM(t,e,2,!1),n.add(i))}function Np(e,t,n){var i=0;t&&(i|=4),pM(n,e,i,t)}var bu="_reactListening"+Math.random().toString(36).slice(2);function Pg(e){if(!e[bu]){e[bu]=!0,ax.forEach(function(n){n!=="selectionchange"&&(FA.has(n)||Np(n,!1,e),Np(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[bu]||(t[bu]=!0,Np("selectionchange",!1,t))}}function pM(e,t,n,i){switch(zM(t)){case 2:var s=Dw;break;case 8:s=Lw;break;default:s=kg}n=s.bind(null,t,n,e),s=void 0,!Jp||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),i?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function Dp(e,t,n,i,s){var a=i;if((t&1)===0&&(t&2)===0&&i!==null)t:for(;;){if(i===null)return;var r=i.tag;if(r===3||r===4){var o=i.stateNode.containerInfo;if(o===s)break;if(r===4)for(r=i.return;r!==null;){var l=r.tag;if((l===3||l===4)&&r.stateNode.containerInfo===s)return;r=r.return}for(;o!==null;){if(r=Wa(o),r===null)return;if(l=r.tag,l===5||l===6||l===26||l===27){i=a=r;continue t}o=o.parentNode}}i=i.return}dx(function(){var c=a,f=jm(n),p=[];t:{var u=Rx.get(e);if(u!==void 0){var d=Mh,v=e;switch(e){case"keypress":if(Cu(n)===0)break t;case"keydown":case"keyup":d=EE;break;case"focusin":v="focus",d=dp;break;case"focusout":v="blur",d=dp;break;case"beforeblur":case"afterblur":d=dp;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":d=_v;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":d=dE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":d=NE;break;case Tx:case Ex:case Ax:d=gE;break;case wx:d=LE;break;case"scroll":case"scrollend":d=hE;break;case"wheel":d=OE;break;case"copy":case"cut":case"paste":d=vE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":d=yv;break;case"submit":d=RE;break;case"toggle":case"beforetoggle":d=PE}var b=(t&4)!==0,g=!b&&(e==="scroll"||e==="scrollend"),h=b?u!==null?u+"Capture":null:u;b=[];for(var m=c,x;m!==null;){var y=m;if(x=y.stateNode,y=y.tag,y!==5&&y!==26&&y!==27||x===null||h===null||(y=Hl(m,h),y!=null&&b.push(Jl(m,y,x))),g)break;m=m.return}0<b.length&&(u=new d(u,v,null,n,f),p.push({event:u,listeners:b}))}}if((t&7)===0){t:{if(d=e==="mouseover"||e==="pointerover",u=e==="mouseout"||e==="pointerout",d&&n!==Zp&&(v=n.relatedTarget||n.fromElement)&&(Wa(v)||v[yo]))break t;(u||d)&&(v=f.window===f?f:(d=f.ownerDocument)?d.defaultView||d.parentWindow:window,u?(d=n.relatedTarget||n.toElement,u=c,d=d?Wa(d):null,d!==null&&(g=ec(d),b=d.tag,d!==g||b!==5&&b!==27&&b!==6)&&(d=null)):(u=null,d=c),u!==d&&(b=_v,y="onMouseLeave",h="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(b=yv,y="onPointerLeave",h="onPointerEnter",m="pointer"),g=u==null?v:bl(u),x=d==null?v:bl(d),v=new b(y,m+"leave",u,n,f),v.target=g,v.relatedTarget=x,y=null,Wa(f)===c&&(b=new b(h,m+"enter",d,n,f),b.target=x,b.relatedTarget=g,y=b),g=y,b=u&&d?Pp(u,d,HA):null,u!==null&&gy(p,v,u,b,!1),d!==null&&g!==null&&gy(p,g,d,b,!0)))}t:{if(u=c?bl(c):window,d=u.nodeName&&u.nodeName.toLowerCase(),d==="select"||d==="input"&&u.type==="file")var E=bv;else if(Mv(u))if(yx)E=qE;else{E=XE;var A=kE}else d=u.nodeName,!d||d.toLowerCase()!=="input"||u.type!=="checkbox"&&u.type!=="radio"?c&&Qm(c.elementType)&&(E=bv):E=WE;if(E&&(E=E(e,c))){vx(p,E,n,f);break t}A&&A(e,u,c)}switch(A=c?bl(c):window,e){case"focusin":(Mv(A)||A.contentEditable==="true")&&(Vr=A,Qp=c,Rl=null);break;case"focusout":Rl=Qp=Vr=null;break;case"mousedown":jp=!0;break;case"contextmenu":case"mouseup":case"dragend":jp=!1,wv(p,n,f);break;case"selectionchange":if(ZE)break;case"keydown":case"keyup":wv(p,n,f)}var _;if(eg)t:{switch(e){case"compositionstart":var T="onCompositionStart";break t;case"compositionend":T="onCompositionEnd";break t;case"compositionupdate":T="onCompositionUpdate";break t}T=void 0}else Gr?gx(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(mx&&n.locale!=="ko"&&(Gr||T!=="onCompositionStart"?T==="onCompositionEnd"&&Gr&&(_=px()):(ea=f,$m="value"in ea?ea.value:ea.textContent,Gr=!0)),A=_h(c,T),0<A.length&&(T=new vv(T,e,null,n,f),p.push({event:T,listeners:A}),_?T.data=_:(_=_x(n),_!==null&&(T.data=_)))),(_=zE?FE(e,n):HE(e,n))&&(T=_h(c,"onBeforeInput"),0<T.length&&(A=new vv("onBeforeInput","beforeinput",null,n,f),p.push({event:A,listeners:T}),A.data=_)),zA(p,e,c,n,f)}dM(p,t)})}function Jl(e,t,n){return{instance:e,listener:t,currentTarget:n}}function _h(e,t){for(var n=t+"Capture",i=[];e!==null;){var s=e,a=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||a===null||(s=Hl(e,n),s!=null&&i.unshift(Jl(e,s,a)),s=Hl(e,t),s!=null&&i.push(Jl(e,s,a))),e.tag===3)return i;e=e.return}return[]}function HA(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function gy(e,t,n,i,s){for(var a=t._reactName,r=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||c===null||(l=c,s?(c=Hl(n,a),c!=null&&r.unshift(Jl(n,c,l))):s||(c=Hl(n,a),c!=null&&r.push(Jl(n,c,l)))),n=n.return}r.length!==0&&e.push({event:t,listeners:r})}var GA=/\r\n?/g,VA=/\u0000|\uFFFD/g;function _y(e){return(typeof e=="string"?e:""+e).replace(GA,`
`).replace(VA,"")}function mM(e,t){return t=_y(t),_y(e)===t}function he(e,t,n,i,s,a){switch(n){case"children":if(typeof i=="string")t==="body"||t==="textarea"&&i===""||oo(e,i);else if(typeof i=="number"||typeof i=="bigint")t!=="body"&&oo(e,""+i);else return;break;case"className":cu(e,"class",i);break;case"tabIndex":cu(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":cu(e,n,i);break;case"style":fx(e,i,a);return;case"data":if(t!=="object"){cu(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=wu(i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof a=="function"&&(n==="formAction"?(t!=="input"&&he(e,t,"name",s.name,s,null),he(e,t,"formEncType",s.formEncType,s,null),he(e,t,"formMethod",s.formMethod,s,null),he(e,t,"formTarget",s.formTarget,s,null)):(he(e,t,"encType",s.encType,s,null),he(e,t,"method",s.method,s,null),he(e,t,"target",s.target,s,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=wu(i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=Ji);return;case"onScroll":i!=null&&Xt("scroll",e);return;case"onScrollEnd":i!=null&&Xt("scrollend",e);return;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(j(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(j(60));a?.__html!==n&&(e.innerHTML=n)}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=wu(i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":Xt("beforetoggle",e),Xt("toggle",e),Au(e,"popover",i);break;case"xlinkActuate":_s(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":_s(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":_s(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":_s(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":_s(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":_s(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":_s(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":_s(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":_s(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Au(e,"is",i);break;case"innerText":case"textContent":return;default:if(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")n=cE.get(n)||n,Au(e,n,i);else return}ne=!0}function Im(e,t,n,i,s,a){switch(n){case"style":fx(e,i,a);return;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(j(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(j(60));a?.__html!==n&&(e.innerHTML=n)}}break;case"children":if(typeof i=="string")oo(e,i);else if(typeof i=="number"||typeof i=="bigint")oo(e,""+i);else return;break;case"onScroll":i!=null&&Xt("scroll",e);return;case"onScrollEnd":i!=null&&Xt("scrollend",e);return;case"onClick":i!=null&&(e.onclick=Ji);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!rx.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(s=n.endsWith("Capture"),a=n.slice(2,s?n.length-7:void 0),t=e[Vn]||null,t=t!=null?t[n]:null,typeof t=="function"&&e.removeEventListener(a,t,s),typeof i=="function")){typeof t!="function"&&t!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(a,i,s);break t}ne=!0,n in e?e[n]=i:i===!0?e.setAttribute(n,""):Au(e,n,i)}return}ne=!0}function dn(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Xt("error",e),Xt("load",e);var i=!1,s=!1,a;for(a in n)if(n.hasOwnProperty(a)){var r=n[a];if(r!=null)switch(a){case"src":i=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(j(137,t));default:he(e,t,a,r,n,null)}}s&&he(e,t,"srcSet",n.srcSet,n,null),i&&he(e,t,"src",n.src,n,null);return;case"input":Xt("invalid",e);var o=a=r=s=null,l=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var f=n[i];if(f!=null)switch(i){case"name":s=f;break;case"type":r=f;break;case"checked":l=f;break;case"defaultChecked":c=f;break;case"value":a=f;break;case"defaultValue":o=f;break;case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error(j(137,t));break;default:he(e,t,i,f,n,null)}}cx(e,a,o,l,c,r,s,!1);return;case"select":Xt("invalid",e),i=r=a=null;for(s in n)if(n.hasOwnProperty(s)&&(o=n[s],o!=null))switch(s){case"value":a=o;break;case"defaultValue":r=o;break;case"multiple":i=o;default:he(e,t,s,o,n,null)}t=a,n=r,e.multiple=!!i,t!=null?Kr(e,!!i,t,!1):n!=null&&Kr(e,!!i,n,!0);return;case"textarea":Xt("invalid",e),a=s=i=null;for(r in n)if(n.hasOwnProperty(r)&&(o=n[r],o!=null))switch(r){case"value":i=o;break;case"defaultValue":s=o;break;case"children":a=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(j(91));break;default:he(e,t,r,o,n,null)}hx(e,i,s,a);return;case"option":for(l in n)n.hasOwnProperty(l)&&(i=n[l],i!=null)&&(l==="selected"?e.selected=i&&typeof i!="function"&&typeof i!="symbol":he(e,t,l,i,n,null));return;case"dialog":Xt("beforetoggle",e),Xt("toggle",e),Xt("cancel",e),Xt("close",e);break;case"iframe":case"object":Xt("load",e);break;case"video":case"audio":for(i=0;i<Zl.length;i++)Xt(Zl[i],e);break;case"image":Xt("error",e),Xt("load",e);break;case"details":Xt("toggle",e);break;case"embed":case"source":case"link":Xt("error",e),Xt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(j(137,t));default:he(e,t,c,i,n,null)}return;default:if(Qm(t)){for(f in n)n.hasOwnProperty(f)&&(i=n[f],i!==void 0&&Im(e,t,f,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&he(e,t,o,i,n,null))}var kA={};function XA(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,a=null,r=null,o=null,l=null,c=null,f=null;for(d in n){var p=n[d];if(n.hasOwnProperty(d)&&p!=null)switch(d){case"checked":break;case"value":break;case"defaultValue":l=p;default:i.hasOwnProperty(d)||he(e,t,d,null,i,p)}}for(var u in i){var d=i[u];if(p=n[u],i.hasOwnProperty(u)&&(d!=null||p!=null))switch(u){case"type":d!==p&&(ne=!0),a=d;break;case"name":d!==p&&(ne=!0),s=d;break;case"checked":d!==p&&(ne=!0),c=d;break;case"defaultChecked":d!==p&&(ne=!0),f=d;break;case"value":d!==p&&(ne=!0),r=d;break;case"defaultValue":d!==p&&(ne=!0),o=d;break;case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(j(137,t));break;default:d!==p&&he(e,t,u,d,i,p)}}Yp(e,r,o,l,c,f,a,s);return;case"select":d=r=o=u=null;for(a in n)if(l=n[a],n.hasOwnProperty(a)&&l!=null)switch(a){case"value":break;case"multiple":d=l;default:i.hasOwnProperty(a)||he(e,t,a,null,i,l)}for(s in i)if(a=i[s],l=n[s],i.hasOwnProperty(s)&&(a!=null||l!=null))switch(s){case"value":a!==l&&(ne=!0),u=a;break;case"defaultValue":a!==l&&(ne=!0),o=a;break;case"multiple":a!==l&&(ne=!0),r=a;default:a!==l&&he(e,t,s,a,i,l)}t=o,n=r,i=d,u!=null?Kr(e,!!n,u,!1):!!i!=!!n&&(t!=null?Kr(e,!!n,t,!0):Kr(e,!!n,n?[]:"",!1));return;case"textarea":d=u=null;for(o in n)if(s=n[o],n.hasOwnProperty(o)&&s!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:he(e,t,o,null,i,s)}for(r in i)if(s=i[r],a=n[r],i.hasOwnProperty(r)&&(s!=null||a!=null))switch(r){case"value":s!==a&&(ne=!0),u=s;break;case"defaultValue":s!==a&&(ne=!0),d=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(j(91));break;default:s!==a&&he(e,t,r,s,i,a)}ux(e,u,d);return;case"option":for(var v in n)u=n[v],n.hasOwnProperty(v)&&u!=null&&!i.hasOwnProperty(v)&&(v==="selected"?e.selected=!1:he(e,t,v,null,i,u));for(l in i)u=i[l],d=n[l],i.hasOwnProperty(l)&&u!==d&&(u!=null||d!=null)&&(l==="selected"?(u!==d&&(ne=!0),e.selected=u&&typeof u!="function"&&typeof u!="symbol"):he(e,t,l,u,i,d));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var b in n)u=n[b],n.hasOwnProperty(b)&&u!=null&&!i.hasOwnProperty(b)&&he(e,t,b,null,i,u);for(c in i)if(u=i[c],d=n[c],i.hasOwnProperty(c)&&u!==d&&(u!=null||d!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(u!=null)throw Error(j(137,t));break;default:he(e,t,c,u,i,d)}return;default:if(Qm(t)){for(var g in n)u=n[g],n.hasOwnProperty(g)&&u!==void 0&&!i.hasOwnProperty(g)&&Im(e,t,g,void 0,i,u);for(f in i)u=i[f],d=n[f],!i.hasOwnProperty(f)||u===d||u===void 0&&d===void 0||Im(e,t,f,u,i,d);return}}for(var h in n)u=n[h],n.hasOwnProperty(h)&&u!=null&&!i.hasOwnProperty(h)&&he(e,t,h,null,i,u);for(p in i)u=i[p],d=n[p],!i.hasOwnProperty(p)||u===d||u==null&&d==null||he(e,t,p,u,i,d)}function vy(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function WA(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var s=n[i],a=s.transferSize,r=s.initiatorType,o=s.duration;if(a&&o&&vy(r)){for(r=0,o=s.responseEnd,i+=1;i<n.length;i++){var l=n[i],c=l.startTime;if(c>o)break;var f=l.transferSize,p=l.initiatorType;f&&vy(p)&&(l=l.responseEnd,r+=f*(l<o?1:(o-c)/(l-c)))}if(--i,t+=8*(a+r)/(s.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Pm=null,Bm=null;function Kl(e){return e.nodeType===9?e:e.ownerDocument}function yy(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function gM(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function _M(e,t,n,i){return n=Kl(n).createElement(e),n[cn]=i,n[Vn]=t,dn(n,e,t),tn(n),n}function zm(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Lp=null;function qA(){var e=window.event;return e&&e.type==="popstate"?e===Lp?!1:(Lp=e,!0):(Lp=null,!1)}var Bg=typeof setTimeout=="function"?setTimeout:void 0,YA=typeof clearTimeout=="function"?clearTimeout:void 0,xy=typeof Promise=="function"?Promise:void 0,Sy=typeof requestAnimationFrame=="function"?requestAnimationFrame:Bg,ZA=typeof queueMicrotask=="function"?queueMicrotask:typeof xy<"u"?function(e){return xy.resolve(null).then(e).catch(JA)}:Bg;function JA(e){setTimeout(function(){throw e})}function Ma(e){return e==="head"}function My(e,t){var n=t,i=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(s),vo(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")Op(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Op(n);for(var a=n.firstChild;a;){var r=a.nextSibling,o=a.nodeName;a[ac]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&a.rel.toLowerCase()==="stylesheet"||n.removeChild(a),a=r}}else n==="body"&&Op(e.ownerDocument.body);n=s}while(n);vo(t)}function by(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function vM(e,t,n){if(t=CSS.escape(t)!==t?"r-"+btoa(t).replace(/=/g,""):t,e.style.viewTransitionName=t,n!=null&&(e.style.viewTransitionClass=n),n=getComputedStyle(e),n.display==="inline"){if(t=e.getClientRects(),t.length===1)var i=1;else for(var s=i=0;s<t.length;s++){var a=t[s];0<a.width&&0<a.height&&i++}i===1&&(e=e.style,e.display=t.length===1?"inline-block":"block",e.marginTop="-"+n.paddingTop,e.marginBottom="-"+n.paddingBottom)}}function yM(e,t){e=e.style,t=t.style;var n=t!=null?t.hasOwnProperty("viewTransitionName")?t.viewTransitionName:t.hasOwnProperty("view-transition-name")?t["view-transition-name"]:null:null;e.viewTransitionName=n==null||typeof n=="boolean"?"":(""+n).trim(),n=t!=null?t.hasOwnProperty("viewTransitionClass")?t.viewTransitionClass:t.hasOwnProperty("view-transition-class")?t["view-transition-class"]:null:null,e.viewTransitionClass=n==null||typeof n=="boolean"?"":(""+n).trim(),e.display==="inline-block"&&(t==null?e.display=e.margin="":(n=t.display,e.display=n==null||typeof n=="boolean"?"":n,n=t.margin,n!=null?e.margin=n:(n=t.hasOwnProperty("marginTop")?t.marginTop:t["margin-top"],e.marginTop=n==null||typeof n=="boolean"?"":n,t=t.hasOwnProperty("marginBottom")?t.marginBottom:t["margin-bottom"],e.marginBottom=t==null||typeof t=="boolean"?"":t)))}function xM(e,t,n){return n=n.ownerDocument.defaultView,{rect:e,abs:t.position==="absolute"||t.position==="fixed",clip:t.clipPath!=="none"||t.overflow!=="visible"||t.filter!=="none"||t.mask!=="none"||t.mask!=="none"||t.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=n.innerHeight&&e.left<=n.innerWidth}}function Fm(e){var t=e.getBoundingClientRect(),n=getComputedStyle(e);return xM(t,n,e)}function KA(e){var t=e.getBoundingClientRect();t=new DOMRect(t.x+2e4,t.y+2e4,t.width,t.height);var n=getComputedStyle(e);return xM(t,n,e)}function QA(e){return e.documentElement.clientHeight}function jA(e){this.addEventListener("load",e),this.addEventListener("error",e)}function $A(e,t,n,i,s,a,r,o,l){var c=t.nodeType===9?t:t.ownerDocument;try{var f=c.startViewTransition({update:function(){var u=c.defaultView,d=u.navigation&&u.navigation.transition,v=c.fonts.status;i();var b=[];if(v==="loaded"&&(QA(c),c.fonts.status==="loading"&&b.push(c.fonts.ready)),v=b.length,e!==null)for(var g=e.suspenseyImages,h=0,m=0;m<g.length;m++){var x=g[m];if(!x.complete){var y=x.getBoundingClientRect();if(0<y.bottom&&0<y.right&&y.top<u.innerHeight&&y.left<u.innerWidth){if(h+=LM(x),h>Vu){b.length=v;break}x=new Promise(jA.bind(x)),b.push(x)}}}if(0<b.length)return u=Promise.race([Promise.all(b),new Promise(function(E){return setTimeout(E,500)})]).then(s,s),(d?Promise.allSettled([d.finished,u]):u).then(a,a);if(s(),d)return d.finished.then(a,a);a()},types:n});c.__reactViewTransition=f;var p=[];return f.ready.then(function(){for(var u=c.documentElement.getAnimations({subtree:!0}),d=0;d<u.length;d++){var v=u[d],b=v.effect,g=b.pseudoElement;if(g!=null&&g.startsWith("::view-transition")){p.push(v),v=b.getKeyframes();for(var h=g=void 0,m=!0,x=0;x<v.length;x++){var y=v[x],E=y.width;if(g===void 0)g=E;else if(g!==E){m=!1;break}if(E=y.height,h===void 0)h=E;else if(h!==E){m=!1;break}delete y.width,delete y.height,y.transform==="none"&&delete y.transform}m&&g!==void 0&&h!==void 0&&(b.setKeyframes(v),m=getComputedStyle(b.target,b.pseudoElement),m.width!==g||m.height!==h)&&(m=v[0],m.width=g,m.height=h,m=v[v.length-1],m.width=g,m.height=h,b.setKeyframes(v))}}r()},function(u){c.__reactViewTransition===f&&(c.__reactViewTransition=null);try{typeof u=="object"&&u!==null&&u.name==="InvalidStateError"&&(u.message==="View transition was skipped because document visibility state is hidden."||u.message==="Skipping view transition because document visibility state has become hidden."||u.message==="Skipping view transition because viewport size changed."||u.message==="Transition was aborted because of invalid state")&&(u=null),u!==null&&l(u)}finally{i(),s(),r()}}),f.finished.finally(function(){for(var u=0;u<p.length;u++)p[u].cancel();c.__reactViewTransition===f&&(c.__reactViewTransition=null),o()}),f}catch{return i(),s(),r(),null}}function qa(e,t){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+t+")"}qa.prototype.animate=function(e,t){return t=typeof t=="number"?{duration:t}:_e({},t),t.pseudoElement=this._selector,this._scope.animate(e,t)};qa.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,n=e.getAnimations({subtree:!0}),i=[],s=0;s<n.length;s++){var a=n[s].effect;a!==null&&a.target===e&&a.pseudoElement===t&&i.push(n[s])}return i};qa.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function SM(e){return{name:e,group:new qa("group",e),imagePair:new qa("image-pair",e),old:new qa("old",e),new:new qa("new",e)}}function ei(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}ei.prototype.addEventListener=function(e,t,n){var i=null,s=null;if(!(n!=null&&typeof n!="boolean"&&(i=n.signal||null,i!==null&&i.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var a=this._eventListeners;if(MM(a,e,t,n)===-1){var r=this,o=t;n!=null&&typeof n!="boolean"&&n.once===!0&&(o=function(l){r.removeEventListener(e,t,n),typeof t=="function"?t.call(this,l):t.handleEvent(l)}),i!==null&&(s=r.removeEventListener.bind(r,e,t,n),i.addEventListener("abort",s,{once:!0}),s=i.removeEventListener.bind(i,"abort",s)),i=po(n),a.push({type:e,listener:t,optionsOrUseCapture:n,attachedListener:o,cleanup:s}),Gn(this._fragmentFiber.child,!1,tw,e,o,i)}this._eventListeners=a}};function tw(e,t,n,i){return We(e).addEventListener(t,n,i),!1}ei.prototype.removeEventListener=function(e,t,n){var i=this._eventListeners;if(i!==null&&(t=MM(i,e,t,n),t!==-1)){var s=i[t];n=s.attachedListener;var a=s.cleanup;s=po(s.optionsOrUseCapture),Gn(this._fragmentFiber.child,!1,ew,e,n,s),i.splice(t,1),a!==null&&a()}};function ew(e,t,n,i){return We(e).removeEventListener(t,n,i),!1}function po(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function Ty(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function MM(e,t,n,i){if(e.length===0)return-1;i=Ty(i);for(var s=0;s<e.length;s++){var a=e[s];if(a.type===t&&a.listener===n&&Ty(a.optionsOrUseCapture)===i)return s}return-1}ei.prototype.dispatchEvent=function(e){var t=rr(this._fragmentFiber);if(t===null)return!0;t=We(t);var n=this._eventListeners;if(n!==null&&0<n.length||!e.bubbles){var i=t.nodeType===9?t.createComment(""):document.createTextNode("");if(n)for(var s=0;s<n.length;s++){var a=n[s];i.addEventListener(a.type,a.attachedListener,po(a.optionsOrUseCapture))}if(t.appendChild(i),e=i.dispatchEvent(e),n)for(s=0;s<n.length;s++)a=n[s],i.removeEventListener(a.type,a.attachedListener,po(a.optionsOrUseCapture));return t.removeChild(i),e}return t.dispatchEvent(e)};ei.prototype.focus=function(e){Gn(this._fragmentFiber.child,!0,bM,e,void 0,void 0)};function bM(e,t){return e.tag===6?!1:(e=We(e),dw(e,t))}ei.prototype.focusLast=function(e){var t=[];Gn(this._fragmentFiber.child,!0,zg,t,void 0,void 0);for(var n=t.length-1;0<=n&&!bM(t[n],e);n--);};function zg(e,t){return t.push(e),!1}ei.prototype.blur=function(){var e=rr(this._fragmentFiber);e!==null&&(e=We(e),e=Kl(e).activeElement,e!==null&&Gn(this._fragmentFiber.child,!1,nw,e,void 0,void 0))};function nw(e,t){return e.tag===6?!1:(e=We(e),e===t||e.contains(t)?(t.blur(),!0):!1)}ei.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),Gn(this._fragmentFiber.child,!1,iw,e,void 0,void 0)};function iw(e,t){return e.tag===6||(e=We(e),t.observe(e)),!1}ei.prototype.unobserveUsing=function(e){var t=this._observers;if(t!==null&&t.has(e)){t.delete(e),Gn(this._fragmentFiber.child,!1,sw,e,void 0,void 0);for(var n=t=0;n<Ci.length;n++){var i=Ci[n];i.fragmentInstance===this&&i.observer===e?e.unobserve(i.instance):Ci[t++]=i}Ci.length=t}};function sw(e,t){return e.tag===6||(e=We(e),t.unobserve(e)),!1}var Ci=[],Up=!1;function aw(e,t,n){Ci.push({fragmentInstance:e,observer:t,instance:n}),Up||(Up=!0,pw(function(){Up=!1;var i=Ci;Ci=[];for(var s=0;s<i.length;s++){var a=i[s];a.observer.unobserve(a.instance)}}))}ei.prototype.getClientRects=function(){var e=[];return Gn(this._fragmentFiber.child,!1,rw,e,void 0,void 0),e};function rw(e,t){if(e.tag===6){e=e.stateNode;var n=e.ownerDocument.createRange();n.selectNodeContents(e),t.push.apply(t,n.getClientRects())}else e=We(e),t.push.apply(t,e.getClientRects());return!1}ei.prototype.getRootNode=function(e){var t=rr(this._fragmentFiber);return t===null?this:We(t).getRootNode(e)};ei.prototype.compareDocumentPosition=function(e){var t=rr(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];Gn(this._fragmentFiber.child,!1,zg,n,void 0,void 0);var i=We(t);if(n.length===0){if(n=i,iv(this._fragmentFiber)){t:{for(t=this._fragmentFiber.return;t!==null;){if(t.tag===4){t=t.stateNode.containerInfo;break t}if(t.tag===3||t.tag===5||t.tag===27)break;t=t.return}t=null}t!=null&&(n=t)}t=this._fragmentFiber;var s=i=n.compareDocumentPosition(e);return n===e?s=Node.DOCUMENT_POSITION_CONTAINS:i&Node.DOCUMENT_POSITION_CONTAINED_BY&&(n=Wy(t)[1],n===null?s=Node.DOCUMENT_POSITION_PRECEDING:(e=We(n).compareDocumentPosition(e),s=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),s|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=We(n[0]),s=We(n[n.length-1]);var a=iv(this._fragmentFiber)?t.parentElement:i;if(a==null)return Node.DOCUMENT_POSITION_DISCONNECTED;i=a.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,a=a.compareDocumentPosition(s)&Node.DOCUMENT_POSITION_CONTAINED_BY;var r=t.compareDocumentPosition(e),o=s.compareDocumentPosition(e),l=r&Node.DOCUMENT_POSITION_CONTAINED_BY||o&Node.DOCUMENT_POSITION_CONTAINED_BY;return o=i&&a&&r&Node.DOCUMENT_POSITION_FOLLOWING&&o&Node.DOCUMENT_POSITION_PRECEDING,t=i&&t===e||a&&s===e||l||o?Node.DOCUMENT_POSITION_CONTAINED_BY:!i&&t===e||!a&&s===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:r,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||ow(t,this._fragmentFiber,n[0],n[n.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function ow(e,t,n,i,s){var a=Wa(s);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!a)t:{for(;a!==null;){if(a.tag===7&&(a===t||a.alternate===t)){n=!0;break t}a=a.return}n=!1}return n}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(a===null)return a=s.ownerDocument,s===a||s===a.documentElement||s===a.body;t:{for(a=t,t=rr(t);a!==null;){if(!(a.tag!==5&&a.tag!==3&&a.tag!==27||a!==t&&a.alternate!==t)){a=!0;break t}a=a.return}a=!1}return a}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!a)&&!(t=a===n)&&(t=Pp(n,a,sv),t===null?t=!1:(Gn(t,!0,BT,a,n),a=Br,Br=null,t=a!==null)),t):e&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!a)&&!(t=a===i)&&(t=Pp(i,a,sv),t===null?t=!1:(Gn(t,!0,zT,a,i),a=Br,Ip=Br=null,t=a!==null)),t):!1}function Ey(e,t){var n=e.ownerDocument.createRange();n.selectNodeContents(e),e=n.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}ei.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(j(566));var t=[];Gn(this._fragmentFiber.child,!1,zg,t,void 0,void 0);var n=e!==!1;if(t.length===0){var i=Wy(this._fragmentFiber);if(i=n?i[1]||i[0]||rr(this._fragmentFiber):i[0]||i[1],i===null)return;if(i.tag===6){e=We(i),Ey(e,n);return}if(i=We(i),i.nodeType!==9){if(i.nodeType===11){n="host"in i?i.host:null,n!==null&&n.scrollIntoView(e);return}i.scrollIntoView(e)}}for(i=n?t.length-1:0;i!==(n?-1:t.length);){var s=t[i];s.tag===6?(s=We(s),Ey(s,n)):We(s).scrollIntoView(e),i+=n?-1:1}};function lw(e,t){return e=We(e),TM(e,t),!1}function TM(e,t){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(t)}function EM(e,t){var n=t._eventListeners;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i];e.addEventListener(s.type,s.attachedListener,po(s.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(a){for(var r=0,o=0;o<Ci.length;o++){var l=Ci[o];(l.fragmentInstance!==t||l.observer!==a||l.instance!==e)&&(Ci[r++]=l)}Ci.length=r,a.observe(e)}),TM(e,t))}function cw(e,t){var n=t._eventListeners;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i];e.removeEventListener(s.type,s.attachedListener,po(s.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(a){typeof a.rootMargin=="string"?aw(t,a,e):a.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(t))}function Hm(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Hm(n),Sh(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function uw(e,t,n,i){for(;e.nodeType===1;){var s=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[ac])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(a=e.getAttribute("rel"),a==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(a!==s.rel||e.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||e.getAttribute("title")!==(s.title==null?null:s.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(a=e.getAttribute("src"),(a!==(s.src==null?null:s.src)||e.getAttribute("type")!==(s.type==null?null:s.type)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&a&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var a=s.name==null?null:""+s.name;if(s.type==="hidden"&&e.getAttribute("name")===a)return e}else return e;if(e=xi(e.nextSibling),e===null)break}return null}function hw(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=xi(e.nextSibling),e===null))return null;return e}function AM(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=xi(e.nextSibling),e===null))return null;return e}function Gm(e){return e.data==="$?"||e.data==="$~"}function Fg(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function fw(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function xi(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Vm=null;function Ay(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return xi(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function wy(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function dw(e,t){function n(){i=!0}if(e.ownerDocument.activeElement===e)return!0;var i=!1;try{e.ownerDocument.addEventListener("focus",n,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener("focus",n,!0)}return i}function pw(e){Sy(function(){Sy(function(t){return e(t)})})}function wM(e,t,n){switch(t=Kl(n),e){case"html":if(e=t.documentElement,!e)throw Error(j(452));return e;case"head":if(e=t.head,!e)throw Error(j(453));return e;case"body":if(e=t.body,!e)throw Error(j(454));return e;default:throw Error(j(451))}}function RM(e,t,n){for(var i in n){var s=n[i];n.hasOwnProperty(i)&&s!=null&&he(e,t,i,null,kA,s)}n.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===Ji&&(e.onclick=null),Sh(e)}function Op(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Sh(e)}var Si=new Map,Ry=new Set;function Ql(e){if(typeof e.getRootNode=="function"){var t=e.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return e.nodeType===9?e:e.ownerDocument}var Ds=ae.d;ae.d={f:mw,r:gw,D:_w,C:vw,L:yw,m:xw,X:Mw,S:Sw,M:bw};function mw(){var e=Ds.f(),t=Ih();return e||t}function gw(e){var t=xo(e);t!==null&&t.tag===5&&t.type==="form"?fS(t):Ds.r(e)}var To=typeof document>"u"?null:document;function CM(e,t,n){var i=To;if(i&&typeof t=="string"&&t){var s=_i(t);s='link[rel="'+e+'"][href="'+s+'"]',typeof n=="string"&&(s+='[crossorigin="'+n+'"]'),Ry.has(s)||(Ry.add(s),e={rel:e,crossOrigin:n,href:t},i.querySelector(s)===null&&(t=i.createElement("link"),dn(t,"link",e),tn(t),i.head.appendChild(t)))}}function _w(e){Ds.D(e),CM("dns-prefetch",e,null)}function vw(e,t){Ds.C(e,t),CM("preconnect",e,t)}function yw(e,t,n){Ds.L(e,t,n);var i=To;if(i&&e&&t){var s='link[rel="preload"][as="'+_i(t)+'"]';t==="image"&&n&&n.imageSrcSet?(s+='[imagesrcset="'+_i(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(s+='[imagesizes="'+_i(n.imageSizes)+'"]')):s+='[href="'+_i(e)+'"]';var a=s;switch(t){case"style":a=mo(e);break;case"script":a=Eo(e)}if(!(Si.has(a)||(e=_e({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Si.set(a,e),i.querySelector(s)!==null||t==="style"&&i.querySelector(hc(a))||t==="script"&&i.querySelector(fc(a))))){var r=i.createElement("link");dn(r,"link",e),t==="style"&&(r[Ju]=!0,r.onload=r.onerror=function(){sx(r)}),tn(r),i.head.appendChild(r)}}}function xw(e,t){Ds.m(e,t);var n=To;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",s='link[rel="modulepreload"][as="'+_i(i)+'"][href="'+_i(e)+'"]',a=s;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":a=Eo(e)}if(!Si.has(a)&&(e=_e({rel:"modulepreload",href:e},t),Si.set(a,e),n.querySelector(s)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(fc(a)))return}i=n.createElement("link"),dn(i,"link",e),tn(i),n.head.appendChild(i)}}}function Sw(e,t,n){Ds.S(e,t,n);var i=To;if(i&&e){var s=Jr(i).hoistableStyles,a=mo(e);t=t||"default";var r=s.get(a);if(!r){var o={loading:0,preload:null};if(r=i.querySelector(hc(a)))o.loading=5;else{e=_e({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Si.get(a))&&Hg(e,n);var l=r=i.createElement("link");tn(l),dn(l,"link",e),l._p=new Promise(function(c,f){l.onload=c,l.onerror=f}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,Hu(r,t,i)}r={type:"stylesheet",instance:r,count:1,state:o},s.set(a,r)}}}function Mw(e,t){Ds.X(e,t);var n=To;if(n&&e){var i=Jr(n).hoistableScripts,s=Eo(e),a=i.get(s);a||(a=n.querySelector(fc(s)),a||(e=_e({src:e,async:!0},t),(t=Si.get(s))&&Gg(e,t),a=n.createElement("script"),tn(a),dn(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(s,a))}}function bw(e,t){Ds.M(e,t);var n=To;if(n&&e){var i=Jr(n).hoistableScripts,s=Eo(e),a=i.get(s);a||(a=n.querySelector(fc(s)),a||(e=_e({src:e,async:!0,type:"module"},t),(t=Si.get(s))&&Gg(e,t),a=n.createElement("script"),tn(a),dn(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(s,a))}}function Cy(e,t,n,i){var s=(s=ra.current)?Ql(s):null;if(!s)throw Error(j(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(n=mo(n.href),t=Jr(s).hoistableStyles,i=t.get(n),i||(i={type:"style",instance:null,count:0,state:null},t.set(n,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=mo(n.href);var a=Jr(s).hoistableStyles,r=a.get(e);if(r||(s=s.ownerDocument||s,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},a.set(e,r),(a=s.querySelector(hc(e)))?a._p||(r.instance=a,r.state.loading=5):(a=Si.get(e),a||(a={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Si.set(e,a)),Tw(s,e,a,r.state))),t&&i===null)throw Error(j(528,""));return r}if(t&&i!==null)throw Error(j(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(n=Eo(n),t=Jr(s).hoistableScripts,i=t.get(n),i||(i={type:"script",instance:null,count:0,state:null},t.set(n,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(j(444,e))}}function mo(e){return'href="'+_i(e)+'"'}function hc(e){return'link[rel="stylesheet"]['+e+"]"}function NM(e){return _e({},e,{"data-precedence":e.precedence,precedence:null})}function Tw(e,t,n,i){if(t=e.querySelector('link[rel="preload"][as="style"]['+t+"]")){if(t[Ju]!==!0){i.loading=1;return}}else t=e.createElement("link"),t[Ju]=!0,t.onload=t.onerror=sx.bind(null,t),dn(t,"link",n),tn(t),e.head.appendChild(t);i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2})}function Eo(e){return'[src="'+_i(e)+'"]'}function fc(e){return"script[async]"+e}function Ny(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+_i(n.href)+'"]');if(i)return t.instance=i,tn(i),i;var s=_e({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),tn(i),dn(i,"style",s),Hu(i,n.precedence,e),t.instance=i;case"stylesheet":s=mo(n.href);var a=e.querySelector(hc(s));if(a)return t.state.loading|=4,t.instance=a,tn(a),a;i=NM(n),(s=Si.get(s))&&Hg(i,s),a=(e.ownerDocument||e).createElement("link"),tn(a);var r=a;return r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),dn(a,"link",i),t.state.loading|=4,Hu(a,n.precedence,e),t.instance=a;case"script":return a=Eo(n.src),(s=e.querySelector(fc(a)))?(t.instance=s,tn(s),s):(i=n,(s=Si.get(a))&&(i=_e({},n),Gg(i,s)),e=e.ownerDocument||e,s=e.createElement("script"),tn(s),dn(s,"link",i),e.head.appendChild(s),t.instance=s);case"void":return null;default:throw Error(j(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,Hu(i,n.precedence,e));return t.instance}function Hu(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=i.length?i[i.length-1]:null,a=s,r=0;r<i.length;r++){var o=i[r];if(o.dataset.precedence===t)a=o;else if(a!==s)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Hg(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Gg(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Gu=null;function Dy(e,t,n){if(Gu===null){var i=new Map,s=Gu=new Map;s.set(n,i)}else s=Gu,i=s.get(n),i||(i=new Map,s.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),s=0;s<n.length;s++){var a=n[s];if(!(a[ac]||a[cn]||e==="link"&&a.getAttribute("rel")==="stylesheet")&&a.namespaceURI!=="http://www.w3.org/2000/svg"){var r=a.getAttribute(t)||"";r=e+r;var o=i.get(r);o?o.push(a):i.set(r,[a])}}return i}function km(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Ew(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Ly(e,t){return e==="img"&&t.src!=null&&t.src!==""&&t.onLoad==null&&t.loading!=="lazy"}function DM(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function LM(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function Uy(e,t){typeof t.decode=="function"&&(e.imgCount++,t.complete||(e.imgBytes+=LM(t),e.suspenseyImages.push(t)),e=Rw.bind(e),t.decode().then(e,e))}function Aw(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var s=mo(i.href),a=t.querySelector(hc(s));if(a){t=a._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=jl.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,tn(a);return}a=t.ownerDocument||t,i=NM(i),(s=Si.get(s))&&Hg(i,s),a=a.createElement("link"),tn(a);var r=a;r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),dn(a,"link",i),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=jl.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Vu=0;function ww(e,t){return e.stylesheets&&e.count===0&&ku(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&ku(e,e.stylesheets),e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}},6e4+t);0<e.imgBytes&&Vu===0&&(Vu=62500*WA());var s=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ku(e,e.stylesheets),e.unsuspend)){var a=e.unsuspend;e.unsuspend=null,a()}},(e.imgBytes>Vu?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(s)}}:null}function UM(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)ku(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}}function jl(){this.count--,UM(this)}function Rw(){this.imgCount--,UM(this)}var vh=null;function ku(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,vh=new Map,t.forEach(Cw,e),vh=null,jl.call(e))}function Cw(e,t){if(!(t.state.loading&4)){var n=vh.get(e);if(n)var i=n.get(null);else{n=new Map,vh.set(e,n);for(var s=e.querySelectorAll("link[data-precedence],style[data-precedence]"),a=0;a<s.length;a++){var r=s[a];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(n.set(r.dataset.precedence,r),i=r)}i&&n.set(null,i)}s=t.instance,r=s.getAttribute("data-precedence"),a=n.get(r)||i,a===i&&n.set(null,s),n.set(r,s),this.count++,i=jl.bind(this),s.addEventListener("load",i),s.addEventListener("error",i),a?a.parentNode.insertBefore(s,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(s,e.firstChild)),t.state.loading|=4}}var go={$$typeof:Zi,Provider:null,Consumer:null,_currentValue:Ya,_currentValue2:Ya,_threadCount:0};function Nw(e,t,n,i,s,a,r,o,l){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=lp(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=lp(0),this.hiddenUpdates=lp(null),this.identifierPrefix=i,this.onUncaughtError=s,this.onCaughtError=a,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.transitionTypes=null,this.incompleteTransitions=new Map}function OM(e,t,n,i,s,a,r,o,l,c,f,p){return e=new Nw(e,t,n,r,l,c,f,p,o),t=1,a===!0&&(t|=24),a=Fn(3,null,null,t),e.current=a,a.stateNode=e,t=og(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:i,isDehydrated:n,cache:t},ug(a),e}function IM(e){return e?(e=Wr,e):Wr}function PM(e,t,n,i,s,a){s=IM(s),i.context===null?i.context=s:i.pendingContext=s,i=la(t),i.payload={element:n},a=a===void 0?null:a,a!==null&&(i.callback=a),n=ca(e,i,t),n!==null&&(Hn(n,e,t),Nl(n,e,t))}function Oy(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Vg(e,t){Oy(e,t),(e=e.alternate)&&Oy(e,t)}function BM(e){if(e.tag===13||e.tag===31){var t=cr(e,67108864);t!==null&&Hn(t,e,67108864),Vg(e,67108864)}}function Iy(e){if(e.tag===13||e.tag===31){var t=$n();t=Jm(t);var n=cr(e,t);n!==null&&Hn(n,e,t),Vg(e,t)}}var _o=!0;function Dw(e,t,n,i){var s=Dt.T;Dt.T=null;var a=ae.p;try{ae.p=2,kg(e,t,n,i)}finally{ae.p=a,Dt.T=s}}function Lw(e,t,n,i){var s=Dt.T;Dt.T=null;var a=ae.p;try{ae.p=8,kg(e,t,n,i)}finally{ae.p=a,Dt.T=s}}function kg(e,t,n,i){if(_o){var s=Xm(i);if(s===null)Dp(e,t,i,yh,n),Py(e,i);else if(Ow(s,e,t,n,i))i.stopPropagation();else if(Py(e,i),t&4&&-1<Uw.indexOf(e)){for(;s!==null;){var a=xo(s);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var r=Va(a.pendingLanes);if(r!==0){var o=a;for(o.pendingLanes|=2,o.entangledLanes|=2;r;){var l=1<<31-jn(r);o.entanglements[1]|=l,r&=~l}ns(a),(se&6)===0&&(dh=Kn()+500,uc(0,!1))}}break;case 31:case 13:o=cr(a,2),o!==null&&Hn(o,a,2),Ih(),Vg(a,2)}if(a=Xm(i),a===null&&Dp(e,t,i,yh,n),a===s)break;s=a}s!==null&&i.stopPropagation()}else Dp(e,t,i,null,n)}}function Xm(e){return e=jm(e),Xg(e)}var yh=null;function Xg(e){if(yh=null,e=Wa(e),e!==null){var t=ec(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=Vy(t),e!==null)return e;e=null}else if(n===31){if(e=ky(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return yh=e,null}function zM(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(YT()){case Jy:return 2;case Ky:return 8;case Zu:case ZT:return 32;case Qy:return 268435456;default:return 32}default:return 32}}var Wm=!1,da=null,pa=null,ma=null,$l=new Map,tc=new Map,$s=[],Uw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Py(e,t){switch(e){case"focusin":case"focusout":da=null;break;case"dragenter":case"dragleave":pa=null;break;case"mouseover":case"mouseout":ma=null;break;case"pointerover":case"pointerout":$l.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":tc.delete(t.pointerId)}}function yl(e,t,n,i,s,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:a,targetContainers:[s]},t!==null&&(t=xo(t),t!==null&&BM(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function Ow(e,t,n,i,s){switch(t){case"focusin":return da=yl(da,e,t,n,i,s),!0;case"dragenter":return pa=yl(pa,e,t,n,i,s),!0;case"mouseover":return ma=yl(ma,e,t,n,i,s),!0;case"pointerover":var a=s.pointerId;return $l.set(a,yl($l.get(a)||null,e,t,n,i,s)),!0;case"gotpointercapture":return a=s.pointerId,tc.set(a,yl(tc.get(a)||null,e,t,n,i,s)),!0}return!1}function FM(e){var t=Wa(e.target);if(t!==null){var n=ec(t);if(n!==null){if(t=n.tag,t===13){if(t=Vy(n),t!==null){e.blockedOn=t,lv(e.priority,function(){Iy(n)});return}}else if(t===31){if(t=ky(n),t!==null){e.blockedOn=t,lv(e.priority,function(){Iy(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Xu(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Xm(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);Zp=i,n.target.dispatchEvent(i),Zp=null}else return t=xo(n),t!==null&&BM(t),e.blockedOn=n,!1;t.shift()}return!0}function By(e,t,n){Xu(e)&&n.delete(t)}function Iw(){Wm=!1,da!==null&&Xu(da)&&(da=null),pa!==null&&Xu(pa)&&(pa=null),ma!==null&&Xu(ma)&&(ma=null),$l.forEach(By),tc.forEach(By)}function Tu(e,t){e.blockedOn===t&&(e.blockedOn=null,Wm||(Wm=!0,qe.unstable_scheduleCallback(qe.unstable_NormalPriority,Iw)))}var Eu=null;function zy(e){Eu!==e&&(Eu=e,qe.unstable_scheduleCallback(qe.unstable_NormalPriority,function(){Eu===e&&(Eu=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],s=e[t+2];if(typeof i!="function"){if(Xg(i||n)===null)continue;break}var a=xo(n);a!==null&&(e.splice(t,3),t-=3,um(a,{pending:!0,data:s,method:n.method,action:i},i,s))}}))}function vo(e){function t(l){return Tu(l,e)}da!==null&&Tu(da,e),pa!==null&&Tu(pa,e),ma!==null&&Tu(ma,e),$l.forEach(t),tc.forEach(t);for(var n=0;n<$s.length;n++){var i=$s[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<$s.length&&(n=$s[0],n.blockedOn===null);)FM(n),n.blockedOn===null&&$s.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var s=n[i],a=n[i+1],r=s[Vn]||null;if(typeof a=="function")r||zy(n);else if(r){var o=null;if(a&&a.hasAttribute("formAction")){if(s=a,r=a[Vn]||null)o=r.formAction;else if(Xg(s)!==null)continue}else o=r.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),zy(n)}}}function HM(){function e(a){a.canIntercept&&a.info==="react-transition"&&a.intercept({handler:function(){return new Promise(function(r){return s=r})},focusReset:"manual",scroll:"manual"})}function t(){s!==null&&(s(),s=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var a=navigation.currentEntry;a&&a.url!=null&&navigation.navigate(a.url,{state:a.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,s=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),s!==null&&(s(),s=null)}}}function Wg(e){this._internalRoot=e}zh.prototype.render=Wg.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(j(409));var n=t.current,i=$n();PM(n,i,e,t,null,null)};zh.prototype.unmount=Wg.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;PM(e.current,2,null,e,null,null),Ih(),t[yo]=null}};function zh(e){this._internalRoot=e}zh.prototype.unstable_scheduleHydration=function(e){if(e){var t=ix();e={blockedOn:null,target:e,priority:t};for(var n=0;n<$s.length&&t!==0&&t<$s[n].priority;n++);$s.splice(n,0,e),n===0&&FM(e)}};var Fy=Hy.version;if(Fy!=="19.3.0")throw Error(j(527,Fy,"19.3.0"));ae.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(j(188)):(e=Object.keys(e).join(","),Error(j(268,e)));return e=PT(t),e=e!==null?Xy(e):null,e=e===null?null:e.stateNode,e};var Pw={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:Dt,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(xl=__REACT_DEVTOOLS_GLOBAL_HOOK__,!xl.isDisabled&&xl.supportsFiber))try{nc=xl.inject(Pw),Qn=xl}catch{}var xl;Fh.createRoot=function(e,t){if(!Gy(e))throw Error(j(299));var n=!1,i="",s=xS,a=SS,r=MS;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(s=t.onUncaughtError),t.onCaughtError!==void 0&&(a=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=OM(e,1,!1,null,null,n,i,null,s,a,r,HM),e[yo]=t.current,Pg(e),new Wg(t)};Fh.hydrateRoot=function(e,t,n){if(!Gy(e))throw Error(j(299));var i=!1,s="",a=xS,r=SS,o=MS,l=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(a=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.formState!==void 0&&(l=n.formState)),t=OM(e,1,!0,t,n??null,i,s,l,a,r,o,HM),t.context=IM(null),n=t.current,i=$n(),i=Jm(i),s=la(i),s.callback=null,ca(n,s,i),n=i,t.current.lanes=n,sc(t,n),ns(t),e[yo]=t.current,Pg(e),new zh(t)};Fh.version="19.3.0"});var XM=Gi((zD,kM)=>{"use strict";function VM(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(VM)}catch(e){console.error(e)}}VM(),kM.exports=GM()});var Y1=Gi(Bd=>{"use strict";var bD=Symbol.for("react.transitional.element"),TD=Symbol.for("react.fragment");function q1(e,t,n){var i=null;if(n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),"key"in t){n={};for(var s in t)s!=="key"&&(n[s]=t[s])}else n=t;return t=n.ref,{$$typeof:bD,type:e,key:i,ref:t!==void 0?t:null,props:n}}Bd.Fragment=TD;Bd.jsx=q1;Bd.jsxs=q1});var Ar=Gi((AI,Z1)=>{"use strict";Z1.exports=Y1()});var tT=ms(XM(),1);var On=ms(dl(),1);var fr={hr:88,ventOn:!1,ventRr:16},Hh=null,Bw=0,Ao=0,hr=0,qg=null,Yg=!1;function zw(){let e=window.AudioContext||window.webkitAudioContext;return e?(Hh||(Hh=new e),Hh):null}function Fw(e){if(qg)return qg;let t=Math.floor(e.sampleRate*.28),n=e.createBuffer(1,t,e.sampleRate),i=n.getChannelData(0),s=0;for(let a=0;a<t;a++){s=s*.94+(Math.random()*2-1)*.08;let r=Math.sin(a/t*Math.PI);i[a]=s*r*6}return qg=n,n}function Hw(e,t){let n=e.createOscillator(),i=e.createGain();n.type="sine",n.frequency.value=880,i.gain.setValueAtTime(1e-4,t),i.gain.exponentialRampToValueAtTime(.09,t+.008),i.gain.exponentialRampToValueAtTime(1e-4,t+.07),n.connect(i),i.connect(e.destination),n.start(t),n.stop(t+.08)}function Gw(e,t){let n=e.createBufferSource();n.buffer=Fw(e);let i=e.createBiquadFilter();i.type="bandpass",i.frequency.value=420,i.Q.value=.7;let s=e.createGain();s.gain.setValueAtTime(.22,t),n.connect(i),i.connect(s),s.connect(e.destination),n.start(t),n.stop(t+.28)}function WM(){let e=Hh;if(!e||!Yg)return;let t=e.currentTime,n=60/Math.min(180,Math.max(35,fr.hr));for(Ao<t-.05&&(Ao=t+.02);Ao<t+.3;)Hw(e,Ao),Ao+=n;if(fr.ventOn){let i=60/Math.min(40,Math.max(6,fr.ventRr));for(hr<t-.05&&(hr=t+.05);hr<t+.3;)Gw(e,hr),hr+=i}else hr=t+.2;Bw=window.setTimeout(WM,60)}function dc(){let e=zw();e&&(e.resume(),!Yg&&(Yg=!0,Ao=e.currentTime+.05,hr=e.currentTime+.12,WM()))}var ll=ms(dl(),1);var gb=0,M0=1,_b=2;var Bc=1,vb=2,$o=3,Ia=0,Un=1,us=2,xr=0,tl=1,b0=2,T0=3,E0=4,yb=5;var Sr=100,xb=101,Sb=102,Mb=103,bb=104,Tb=200,Eb=201,Ab=202,wb=203,A0=204,w0=205,Rb=206,Cb=207,Nb=208,Db=209,Lb=210,Ub=211,Ob=212,Ib=213,Pb=214,hf=0,ff=1,df=2,Vo=3,pf=4,mf=5,gf=6,_f=7,R0=0,Bb=1,zb=2,hs=0,C0=1,N0=2,D0=3,L0=4,U0=5,O0=6,I0=7;var P0=300,Mr=301,el=302,kf=303,Xf=304,vf=1e3,ss=1001,yf=1002,sn=1003,Fb=1004;var zc=1005;var an=1006,Wf=1007;var Gs=1008;var oi=1009,B0=1010,z0=1011,nl=1012,qf=1013,Pi=1014,Bi=1015,zi=1016,Yf=1017,Zf=1018,br=1020,F0=35902,H0=35899,G0=1021,V0=1022,Fi=1023,zs=1026,Vs=1027,k0=1028,Jf=1029,Pa=1030,Kf=1031;var Qf=1033,Fc=33776,Hc=33777,Gc=33778,Vc=33779,jf=35840,$f=35841,td=35842,ed=35843,nd=36196,id=37492,sd=37496,ad=37488,rd=37489,kc=37490,od=37491,ld=37808,cd=37809,ud=37810,hd=37811,fd=37812,dd=37813,pd=37814,md=37815,gd=37816,_d=37817,vd=37818,yd=37819,xd=37820,Sd=37821,Md=36492,bd=36494,Td=36495,Ed=36283,Ad=36284,Xc=36285,wd=36286;var yc=2300,xf=2301,lf=2302,m0=2303,g0=2400,_0=2401,v0=2402;var Hb=3200;var Rd=0,Gb=1,ks="",Mn="srgb",xc="srgb-linear",Sc="linear",oe="srgb";var cf=7680;var Vb=519,kb=512,Xb=513,Wb=514,X0=515,qb=516,Yb=517,W0=518,q0=519,Zb=35044;var Y0="300 es",bi=2e3,Mc=2001;function Vw(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function kw(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function ko(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function Jb(){let e=ko("canvas");return e.style.display="block",e}var qM={},Xo=null;function Z0(...e){let t="THREE."+e.shift();Xo?Xo("log",t,...e):console.log(t,...e)}function Kb(e){let t=e[0];if(typeof t=="string"&&t.startsWith("TSL:")){let n=e[1];n&&n.isStackTrace?e[0]+=" "+n.getLocation():e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function Nt(...e){e=Kb(e);let t="THREE."+e.shift();if(Xo)Xo("warn",t,...e);else{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function Lt(...e){e=Kb(e);let t="THREE."+e.shift();if(Xo)Xo("error",t,...e);else{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function vc(...e){let t=e.join(" ");t in qM||(qM[t]=!0,Nt(...e))}function Qb(e,t,n){return new Promise(function(i,s){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:s();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:i()}}setTimeout(a,n)})}var jb={[hf]:hf,[df]:gf,[pf]:pf,[Vo]:mf,[ff]:ff,[gf]:df,[_f]:_f,[mf]:Vo},rs=class{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let a=s.indexOf(n);a!==-1&&s.splice(a,1)}}dispatchEvent(t){let n=this._listeners;if(n===void 0)return;let i=n[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let a=0,r=s.length;a<r;a++)s[a].call(this,t);t.target=null}}},xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Zg=Math.PI/180,Sf=180/Math.PI;function Wc(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(xn[e&255]+xn[e>>8&255]+xn[e>>16&255]+xn[e>>24&255]+"-"+xn[t&255]+xn[t>>8&255]+"-"+xn[t>>16&15|64]+xn[t>>24&255]+"-"+xn[n&63|128]+xn[n>>8&255]+"-"+xn[n>>16&255]+xn[n>>24&255]+xn[i&255]+xn[i>>8&255]+xn[i>>16&255]+xn[i>>24&255]).toLowerCase()}function jt(e,t,n){return Math.max(t,Math.min(n,e))}function Xw(e,t){return(e%t+t)%t}function Jg(e,t,n){return(1-n)*e+n*t}function $b(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function J0(e){switch(e.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Ww(e,t){if(t.constructor===Float32Array)return e;let n=J0(t);if(n===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(e/n,-1)}function qw(e,t){if(t.constructor===Float32Array)return e;let n=J0(t);if(n===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(e*n)}var $t=class{static{this.prototype.isVector2=!0}constructor(t=0,n=0){this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let n=this.x,i=this.y,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=jt(this.x,t.x,n.x),this.y=jt(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=jt(this.x,t,n),this.y=jt(this.y,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(jt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(jt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){let i=Math.cos(n),s=Math.sin(n),a=this.x-t.x,r=this.y-t.y;return this.x=a*i-r*s+t.x,this.y=a*s+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},os=class{constructor(t=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=s}static slerpFlat(t,n,i,s,a,r,o){let l=i[s+0],c=i[s+1],f=i[s+2],p=i[s+3],u=a[r+0],d=a[r+1],v=a[r+2],b=a[r+3];if(p!==b||l!==u||c!==d||f!==v){let g=l*u+c*d+f*v+p*b;g<0&&(u=-u,d=-d,v=-v,b=-b,g=-g);let h=1-o;if(g<.9995){let m=Math.acos(g),x=Math.sin(m);h=Math.sin(h*m)/x,o=Math.sin(o*m)/x,l=l*h+u*o,c=c*h+d*o,f=f*h+v*o,p=p*h+b*o}else{l=l*h+u*o,c=c*h+d*o,f=f*h+v*o,p=p*h+b*o;let m=1/Math.sqrt(l*l+c*c+f*f+p*p);l*=m,c*=m,f*=m,p*=m}}t[n]=l,t[n+1]=c,t[n+2]=f,t[n+3]=p}static multiplyQuaternionsFlat(t,n,i,s,a,r){let o=i[s],l=i[s+1],c=i[s+2],f=i[s+3],p=a[r],u=a[r+1],d=a[r+2],v=a[r+3];return t[n]=o*v+f*p+l*d-c*u,t[n+1]=l*v+f*u+c*p-o*d,t[n+2]=c*v+f*d+o*u-l*p,t[n+3]=f*v-o*p-l*u-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,s){return this._x=t,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){let i=t._x,s=t._y,a=t._z,r=t._order,o=Math.cos,l=Math.sin,c=o(i/2),f=o(s/2),p=o(a/2),u=l(i/2),d=l(s/2),v=l(a/2);switch(r){case"XYZ":this._x=u*f*p+c*d*v,this._y=c*d*p-u*f*v,this._z=c*f*v+u*d*p,this._w=c*f*p-u*d*v;break;case"YXZ":this._x=u*f*p+c*d*v,this._y=c*d*p-u*f*v,this._z=c*f*v-u*d*p,this._w=c*f*p+u*d*v;break;case"ZXY":this._x=u*f*p-c*d*v,this._y=c*d*p+u*f*v,this._z=c*f*v+u*d*p,this._w=c*f*p-u*d*v;break;case"ZYX":this._x=u*f*p-c*d*v,this._y=c*d*p+u*f*v,this._z=c*f*v-u*d*p,this._w=c*f*p+u*d*v;break;case"YZX":this._x=u*f*p+c*d*v,this._y=c*d*p+u*f*v,this._z=c*f*v-u*d*p,this._w=c*f*p-u*d*v;break;case"XZY":this._x=u*f*p-c*d*v,this._y=c*d*p-u*f*v,this._z=c*f*v+u*d*p,this._w=c*f*p+u*d*v;break;default:Nt("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){let i=n/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let n=t.elements,i=n[0],s=n[4],a=n[8],r=n[1],o=n[5],l=n[9],c=n[2],f=n[6],p=n[10],u=i+o+p;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(f-l)*d,this._y=(a-c)*d,this._z=(r-s)*d}else if(i>o&&i>p){let d=2*Math.sqrt(1+i-o-p);this._w=(f-l)/d,this._x=.25*d,this._y=(s+r)/d,this._z=(a+c)/d}else if(o>p){let d=2*Math.sqrt(1+o-i-p);this._w=(a-c)/d,this._x=(s+r)/d,this._y=.25*d,this._z=(l+f)/d}else{let d=2*Math.sqrt(1+p-i-o);this._w=(r-s)/d,this._x=(a+c)/d,this._y=(l+f)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(jt(this.dot(t),-1,1)))}rotateTowards(t,n){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,n/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){let i=t._x,s=t._y,a=t._z,r=t._w,o=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+r*o+s*c-a*l,this._y=s*f+r*l+a*o-i*c,this._z=a*f+r*c+i*l-s*o,this._w=r*f-i*o-s*l-a*c,this._onChangeCallback(),this}slerp(t,n){let i=t._x,s=t._y,a=t._z,r=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,a=-a,r=-r,o=-o);let l=1-n;if(o<.9995){let c=Math.acos(o),f=Math.sin(c);l=Math.sin(l*c)/f,n=Math.sin(n*c)/f,this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+a*n,this._w=this._w*l+r*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+a*n,this._w=this._w*l+r*n,this.normalize();return this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){let t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),a*Math.sin(n),a*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},V=class{static{this.prototype.isVector3=!0}constructor(t=0,n=0,i=0){this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(YM.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(YM.setFromAxisAngle(t,n))}applyMatrix3(t){let n=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*n+a[3]*i+a[6]*s,this.y=a[1]*n+a[4]*i+a[7]*s,this.z=a[2]*n+a[5]*i+a[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,a=t.elements,r=1/(a[3]*n+a[7]*i+a[11]*s+a[15]);return this.x=(a[0]*n+a[4]*i+a[8]*s+a[12])*r,this.y=(a[1]*n+a[5]*i+a[9]*s+a[13])*r,this.z=(a[2]*n+a[6]*i+a[10]*s+a[14])*r,this}applyQuaternion(t){let n=this.x,i=this.y,s=this.z,a=t.x,r=t.y,o=t.z,l=t.w,c=2*(r*s-o*i),f=2*(o*n-a*s),p=2*(a*i-r*n);return this.x=n+l*c+r*p-o*f,this.y=i+l*f+o*c-a*p,this.z=s+l*p+a*f-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let n=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*n+a[4]*i+a[8]*s,this.y=a[1]*n+a[5]*i+a[9]*s,this.z=a[2]*n+a[6]*i+a[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=jt(this.x,t.x,n.x),this.y=jt(this.y,t.y,n.y),this.z=jt(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=jt(this.x,t,n),this.y=jt(this.y,t,n),this.z=jt(this.z,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(jt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){let i=t.x,s=t.y,a=t.z,r=n.x,o=n.y,l=n.z;return this.x=s*l-a*o,this.y=a*r-i*l,this.z=i*o-s*r,this}projectOnVector(t){let n=t.lengthSq();if(n===0)return this.set(0,0,0);let i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Kg.copy(this).projectOnVector(t),this.sub(Kg)}reflect(t){return this.sub(Kg.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(jt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return n*n+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){let s=Math.sin(n)*t;return this.x=s*Math.sin(i),this.y=Math.cos(n)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){let n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Kg=new V,YM=new os,Ut=class{static{this.prototype.isMatrix3=!0}constructor(t,n,i,s,a,r,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,s,a,r,o,l,c)}set(t,n,i,s,a,r,o,l,c){let f=this.elements;return f[0]=t,f[1]=s,f[2]=o,f[3]=n,f[4]=a,f[5]=l,f[6]=i,f[7]=r,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,a=this.elements,r=i[0],o=i[3],l=i[6],c=i[1],f=i[4],p=i[7],u=i[2],d=i[5],v=i[8],b=s[0],g=s[3],h=s[6],m=s[1],x=s[4],y=s[7],E=s[2],A=s[5],_=s[8];return a[0]=r*b+o*m+l*E,a[3]=r*g+o*x+l*A,a[6]=r*h+o*y+l*_,a[1]=c*b+f*m+p*E,a[4]=c*g+f*x+p*A,a[7]=c*h+f*y+p*_,a[2]=u*b+d*m+v*E,a[5]=u*g+d*x+v*A,a[8]=u*h+d*y+v*_,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],f=t[8];return n*r*f-n*o*c-i*a*f+i*o*l+s*a*c-s*r*l}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],f=t[8],p=f*r-o*c,u=o*l-f*a,d=c*a-r*l,v=n*p+i*u+s*d;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/v;return t[0]=p*b,t[1]=(s*c-f*i)*b,t[2]=(o*i-s*r)*b,t[3]=u*b,t[4]=(f*n-s*l)*b,t[5]=(s*a-o*n)*b,t[6]=d*b,t[7]=(i*l-c*n)*b,t[8]=(r*n-i*a)*b,this}transpose(){let t,n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,s,a,r,o){let l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*r+c*o)+r+t,-s*c,s*l,-s*(-c*r+l*o)+o+n,0,0,1),this}scale(t,n){return vc("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Qg.makeScale(t,n)),this}rotate(t){return vc("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Qg.makeRotation(-t)),this}translate(t,n){return vc("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Qg.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Qg=new Ut,ZM=new Ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),JM=new Ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Yw(){let e={enabled:!0,workingColorSpace:xc,spaces:{},convert:function(s,a,r){return this.enabled===!1||a===r||!a||!r||(this.spaces[a].transfer===oe&&(s.r=Bs(s.r),s.g=Bs(s.g),s.b=Bs(s.b)),this.spaces[a].primaries!==this.spaces[r].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===oe&&(s.r=Go(s.r),s.g=Go(s.g),s.b=Go(s.b))),s},workingToColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},colorSpaceToWorking:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ks?Sc:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,r){return s.copy(this.spaces[r].fromXYZ).multiply(this.spaces[a].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return e.define({[xc]:{primaries:t,whitePoint:i,transfer:Sc,toXYZ:ZM,fromXYZ:JM,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Mn},outputColorSpaceConfig:{drawingBufferColorSpace:Mn}},[Mn]:{primaries:t,whitePoint:i,transfer:oe,toXYZ:ZM,fromXYZ:JM,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Mn}}}),e}var Kt=Yw();function Bs(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function Go(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var wo,Mf=class{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{wo===void 0&&(wo=ko("canvas")),wo.width=t.width,wo.height=t.height;let s=wo.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=wo}return i.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let n=ko("canvas");n.width=t.width,n.height=t.height;let i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),a=s.data;for(let r=0;r<a.length;r++)a[r]=Bs(a[r]/255)*255;return i.putImageData(s,0,0),n}else if(t.data){let n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Bs(n[i]/255)*255):n[i]=Bs(n[i]);return{data:n,width:t.width,height:t.height}}else return Nt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Zw=0,Wo=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Zw++}),this.uuid=Wc(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?t.set(n.displayWidth,n.displayHeight,0):n!==null?t.set(n.width||0,n.height||0,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let r=0,o=s.length;r<o;r++)s[r].isDataTexture?a.push(jg(s[r].image)):a.push(jg(s[r]))}else a=jg(s);i.url=a}return n||(t.images[this.uuid]=i),i}};function jg(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?Mf.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(Nt("Texture: Unable to serialize Texture."),{})}var Jw=0,$g=new V,bn=class e extends rs{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,i=ss,s=ss,a=an,r=Gs,o=Fi,l=oi,c=e.DEFAULT_ANISOTROPY,f=ks){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jw++}),this.uuid=Wc(),this.name="",this.source=new Wo(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new $t(0,0),this.repeat=new $t(1,1),this.center=new $t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ut,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize($g).x}get height(){return this.source.getSize($g).y}get depth(){return this.source.getSize($g).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let n in t){let i=t[n];if(i===void 0){Nt(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){Nt(`Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==P0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case vf:t.x=t.x-Math.floor(t.x);break;case ss:t.x=t.x<0?0:1;break;case yf:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case vf:t.y=t.y-Math.floor(t.y);break;case ss:t.y=t.y<0?0:1;break;case yf:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};bn.DEFAULT_IMAGE=null;bn.DEFAULT_MAPPING=P0;bn.DEFAULT_ANISOTROPY=1;var Le=class{static{this.prototype.isVector4=!0}constructor(t=0,n=0,i=0,s=1){this.x=t,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,s){return this.x=t,this.y=n,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,a=this.w,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*s+r[12]*a,this.y=r[1]*n+r[5]*i+r[9]*s+r[13]*a,this.z=r[2]*n+r[6]*i+r[10]*s+r[14]*a,this.w=r[3]*n+r[7]*i+r[11]*s+r[15]*a,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,s,a,l=t.elements,c=l[0],f=l[4],p=l[8],u=l[1],d=l[5],v=l[9],b=l[2],g=l[6],h=l[10];if(Math.abs(f-u)<.01&&Math.abs(p-b)<.01&&Math.abs(v-g)<.01){if(Math.abs(f+u)<.1&&Math.abs(p+b)<.1&&Math.abs(v+g)<.1&&Math.abs(c+d+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let x=(c+1)/2,y=(d+1)/2,E=(h+1)/2,A=(f+u)/4,_=(p+b)/4,T=(v+g)/4;return x>y&&x>E?x<.01?(i=0,s=.707106781,a=.707106781):(i=Math.sqrt(x),s=A/i,a=_/i):y>E?y<.01?(i=.707106781,s=0,a=.707106781):(s=Math.sqrt(y),i=A/s,a=T/s):E<.01?(i=.707106781,s=.707106781,a=0):(a=Math.sqrt(E),i=_/a,s=T/a),this.set(i,s,a,n),this}let m=Math.sqrt((g-v)*(g-v)+(p-b)*(p-b)+(u-f)*(u-f));return Math.abs(m)<.001&&(m=1),this.x=(g-v)/m,this.y=(p-b)/m,this.z=(u-f)/m,this.w=Math.acos((c+d+h-1)/2),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=jt(this.x,t.x,n.x),this.y=jt(this.y,t.y,n.y),this.z=jt(this.z,t.z,n.z),this.w=jt(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=jt(this.x,t,n),this.y=jt(this.y,t,n),this.z=jt(this.z,t,n),this.w=jt(this.w,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(jt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},bf=class extends rs{constructor(t=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=i.depth,this.scissor=new Le(0,0,t,n),this.scissorTest=!1,this.viewport=new Le(0,0,t,n),this.textures=[];let s=i.count;for(let a=0;a<s;a++)this.textures[a]=new bn({width:t,height:n,depth:i.depth}),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let n={minFilter:an,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(n.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=t,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;let s=Object.assign({},t.textures[n].image);this.textures[n].source=new Wo(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let n=t.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},si=class extends bf{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}},bc=class extends bn{constructor(t=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=ss,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Tf=class extends bn{constructor(t=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=ss,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var De=class e{static{this.prototype.isMatrix4=!0}constructor(t,n,i,s,a,r,o,l,c,f,p,u,d,v,b,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,s,a,r,o,l,c,f,p,u,d,v,b,g)}set(t,n,i,s,a,r,o,l,c,f,p,u,d,v,b,g){let h=this.elements;return h[0]=t,h[4]=n,h[8]=i,h[12]=s,h[1]=a,h[5]=r,h[9]=o,h[13]=l,h[2]=c,h[6]=f,h[10]=p,h[14]=u,h[3]=d,h[7]=v,h[11]=b,h[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){let n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){let n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return this.determinantAffine()===0?(t.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let n=this.elements,i=t.elements,s=1/Ro.setFromMatrixColumn(t,0).length(),a=1/Ro.setFromMatrixColumn(t,1).length(),r=1/Ro.setFromMatrixColumn(t,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*a,n[5]=i[5]*a,n[6]=i[6]*a,n[7]=0,n[8]=i[8]*r,n[9]=i[9]*r,n[10]=i[10]*r,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){let n=this.elements,i=t.x,s=t.y,a=t.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),f=Math.cos(a),p=Math.sin(a);if(t.order==="XYZ"){let u=r*f,d=r*p,v=o*f,b=o*p;n[0]=l*f,n[4]=-l*p,n[8]=c,n[1]=d+v*c,n[5]=u-b*c,n[9]=-o*l,n[2]=b-u*c,n[6]=v+d*c,n[10]=r*l}else if(t.order==="YXZ"){let u=l*f,d=l*p,v=c*f,b=c*p;n[0]=u+b*o,n[4]=v*o-d,n[8]=r*c,n[1]=r*p,n[5]=r*f,n[9]=-o,n[2]=d*o-v,n[6]=b+u*o,n[10]=r*l}else if(t.order==="ZXY"){let u=l*f,d=l*p,v=c*f,b=c*p;n[0]=u-b*o,n[4]=-r*p,n[8]=v+d*o,n[1]=d+v*o,n[5]=r*f,n[9]=b-u*o,n[2]=-r*c,n[6]=o,n[10]=r*l}else if(t.order==="ZYX"){let u=r*f,d=r*p,v=o*f,b=o*p;n[0]=l*f,n[4]=v*c-d,n[8]=u*c+b,n[1]=l*p,n[5]=b*c+u,n[9]=d*c-v,n[2]=-c,n[6]=o*l,n[10]=r*l}else if(t.order==="YZX"){let u=r*l,d=r*c,v=o*l,b=o*c;n[0]=l*f,n[4]=b-u*p,n[8]=v*p+d,n[1]=p,n[5]=r*f,n[9]=-o*f,n[2]=-c*f,n[6]=d*p+v,n[10]=u-b*p}else if(t.order==="XZY"){let u=r*l,d=r*c,v=o*l,b=o*c;n[0]=l*f,n[4]=-p,n[8]=c*f,n[1]=u*p+b,n[5]=r*f,n[9]=d*p-v,n[2]=v*p-d,n[6]=o*f,n[10]=b*p+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Kw,t,Qw)}lookAt(t,n,i){let s=this.elements;return ni.subVectors(t,n),ni.lengthSq()===0&&(ni.z=1),ni.normalize(),ba.crossVectors(i,ni),ba.lengthSq()===0&&(Math.abs(i.z)===1?ni.x+=1e-4:ni.z+=1e-4,ni.normalize(),ba.crossVectors(i,ni)),ba.normalize(),Gh.crossVectors(ni,ba),s[0]=ba.x,s[4]=Gh.x,s[8]=ni.x,s[1]=ba.y,s[5]=Gh.y,s[9]=ni.y,s[2]=ba.z,s[6]=Gh.z,s[10]=ni.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,a=this.elements,r=i[0],o=i[4],l=i[8],c=i[12],f=i[1],p=i[5],u=i[9],d=i[13],v=i[2],b=i[6],g=i[10],h=i[14],m=i[3],x=i[7],y=i[11],E=i[15],A=s[0],_=s[4],T=s[8],L=s[12],R=s[1],U=s[5],H=s[9],W=s[13],D=s[2],k=s[6],Y=s[10],I=s[14],tt=s[3],F=s[7],J=s[11],et=s[15];return a[0]=r*A+o*R+l*D+c*tt,a[4]=r*_+o*U+l*k+c*F,a[8]=r*T+o*H+l*Y+c*J,a[12]=r*L+o*W+l*I+c*et,a[1]=f*A+p*R+u*D+d*tt,a[5]=f*_+p*U+u*k+d*F,a[9]=f*T+p*H+u*Y+d*J,a[13]=f*L+p*W+u*I+d*et,a[2]=v*A+b*R+g*D+h*tt,a[6]=v*_+b*U+g*k+h*F,a[10]=v*T+b*H+g*Y+h*J,a[14]=v*L+b*W+g*I+h*et,a[3]=m*A+x*R+y*D+E*tt,a[7]=m*_+x*U+y*k+E*F,a[11]=m*T+x*H+y*Y+E*J,a[15]=m*L+x*W+y*I+E*et,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[4],s=t[8],a=t[12],r=t[1],o=t[5],l=t[9],c=t[13],f=t[2],p=t[6],u=t[10],d=t[14],v=t[3],b=t[7],g=t[11],h=t[15],m=l*d-c*u,x=o*d-c*p,y=o*u-l*p,E=r*d-c*f,A=r*u-l*f,_=r*p-o*f;return n*(b*m-g*x+h*y)-i*(v*m-g*E+h*A)+s*(v*x-b*E+h*_)-a*(v*y-b*A+g*_)}determinantAffine(){let t=this.elements,n=t[0],i=t[4],s=t[8],a=t[1],r=t[5],o=t[9],l=t[2],c=t[6],f=t[10];return n*(r*f-o*c)-i*(a*f-o*l)+s*(a*c-r*l)}transpose(){let t=this.elements,n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=n,s[14]=i),this}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],f=t[8],p=t[9],u=t[10],d=t[11],v=t[12],b=t[13],g=t[14],h=t[15],m=n*o-i*r,x=n*l-s*r,y=n*c-a*r,E=i*l-s*o,A=i*c-a*o,_=s*c-a*l,T=f*b-p*v,L=f*g-u*v,R=f*h-d*v,U=p*g-u*b,H=p*h-d*b,W=u*h-d*g,D=m*W-x*H+y*U+E*R-A*L+_*T;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/D;return t[0]=(o*W-l*H+c*U)*k,t[1]=(s*H-i*W-a*U)*k,t[2]=(b*_-g*A+h*E)*k,t[3]=(u*A-p*_-d*E)*k,t[4]=(l*R-r*W-c*L)*k,t[5]=(n*W-s*R+a*L)*k,t[6]=(g*y-v*_-h*x)*k,t[7]=(f*_-u*y+d*x)*k,t[8]=(r*H-o*R+c*T)*k,t[9]=(i*R-n*H-a*T)*k,t[10]=(v*A-b*y+h*m)*k,t[11]=(p*y-f*A-d*m)*k,t[12]=(o*L-r*U-l*T)*k,t[13]=(n*U-i*L+s*T)*k,t[14]=(b*x-v*E-g*m)*k,t[15]=(f*E-p*x+u*m)*k,this}scale(t){let n=this.elements,i=t.x,s=t.y,a=t.z;return n[0]*=i,n[4]*=s,n[8]*=a,n[1]*=i,n[5]*=s,n[9]*=a,n[2]*=i,n[6]*=s,n[10]*=a,n[3]*=i,n[7]*=s,n[11]*=a,this}getMaxScaleOnAxis(){let t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){let n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){let i=Math.cos(n),s=Math.sin(n),a=1-i,r=t.x,o=t.y,l=t.z,c=a*r,f=a*o;return this.set(c*r+i,c*o-s*l,c*l+s*o,0,c*o+s*l,f*o+i,f*l-s*r,0,c*l-s*o,f*l+s*r,a*l*l+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,s,a,r){return this.set(1,i,a,0,t,1,r,0,n,s,1,0,0,0,0,1),this}compose(t,n,i){let s=this.elements,a=n._x,r=n._y,o=n._z,l=n._w,c=a+a,f=r+r,p=o+o,u=a*c,d=a*f,v=a*p,b=r*f,g=r*p,h=o*p,m=l*c,x=l*f,y=l*p,E=i.x,A=i.y,_=i.z;return s[0]=(1-(b+h))*E,s[1]=(d+y)*E,s[2]=(v-x)*E,s[3]=0,s[4]=(d-y)*A,s[5]=(1-(u+h))*A,s[6]=(g+m)*A,s[7]=0,s[8]=(v+x)*_,s[9]=(g-m)*_,s[10]=(1-(u+b))*_,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,n,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let a=this.determinantAffine();if(a===0)return i.set(1,1,1),n.identity(),this;let r=Ro.set(s[0],s[1],s[2]).length(),o=Ro.set(s[4],s[5],s[6]).length(),l=Ro.set(s[8],s[9],s[10]).length();a<0&&(r=-r),Li.copy(this);let c=1/r,f=1/o,p=1/l;return Li.elements[0]*=c,Li.elements[1]*=c,Li.elements[2]*=c,Li.elements[4]*=f,Li.elements[5]*=f,Li.elements[6]*=f,Li.elements[8]*=p,Li.elements[9]*=p,Li.elements[10]*=p,n.setFromRotationMatrix(Li),i.x=r,i.y=o,i.z=l,this}makePerspective(t,n,i,s,a,r,o=bi,l=!1){let c=this.elements,f=2*a/(n-t),p=2*a/(i-s),u=(n+t)/(n-t),d=(i+s)/(i-s),v,b;if(l)v=a/(r-a),b=r*a/(r-a);else if(o===bi)v=-(r+a)/(r-a),b=-2*r*a/(r-a);else if(o===Mc)v=-r/(r-a),b=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=p,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,n,i,s,a,r,o=bi,l=!1){let c=this.elements,f=2/(n-t),p=2/(i-s),u=-(n+t)/(n-t),d=-(i+s)/(i-s),v,b;if(l)v=1/(r-a),b=r/(r-a);else if(o===bi)v=-2/(r-a),b=-(r+a)/(r-a);else if(o===Mc)v=-1/(r-a),b=-a/(r-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=p,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=v,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}},Ro=new V,Li=new De,Kw=new V(0,0,0),Qw=new V(1,1,1),ba=new V,Gh=new V,ni=new V,KM=new De,QM=new os,Fs=class e{constructor(t=0,n=0,i=0,s=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,s=this._order){return this._x=t,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){let s=t.elements,a=s[0],r=s[4],o=s[8],l=s[1],c=s[5],f=s[9],p=s[2],u=s[6],d=s[10];switch(n){case"XYZ":this._y=Math.asin(jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,d),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-jt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,a),this._z=0);break;case"ZXY":this._x=Math.asin(jt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-p,d),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-jt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-p,a)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-jt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-f,d),this._y=0);break;default:Nt("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return KM.makeRotationFromQuaternion(t),this.setFromRotationMatrix(KM,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return QM.setFromEuler(this),this.setFromQuaternion(QM,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Fs.DEFAULT_ORDER="XYZ";var qo=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},jw=0,jM=new V,Co=new os,Ls=new De,Vh=new V,pc=new V,$w=new V,tR=new os,$M=new V(1,0,0),tb=new V(0,1,0),eb=new V(0,0,1),nb={type:"added"},eR={type:"removed"},No={type:"childadded",child:null},t0={type:"childremoved",child:null},ai=class e extends rs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jw++}),this.uuid=Wc(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new V,n=new Fs,i=new os,s=new V(1,1,1);function a(){i.setFromEuler(n,!1)}function r(){n.setFromQuaternion(i,void 0,!1)}n._onChange(a),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new De},normalMatrix:{value:new Ut}}),this.matrix=new De,this.matrixWorld=new De,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Co.setFromAxisAngle(t,n),this.quaternion.multiply(Co),this}rotateOnWorldAxis(t,n){return Co.setFromAxisAngle(t,n),this.quaternion.premultiply(Co),this}rotateX(t){return this.rotateOnAxis($M,t)}rotateY(t){return this.rotateOnAxis(tb,t)}rotateZ(t){return this.rotateOnAxis(eb,t)}translateOnAxis(t,n){return jM.copy(t).applyQuaternion(this.quaternion),this.position.add(jM.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis($M,t)}translateY(t){return this.translateOnAxis(tb,t)}translateZ(t){return this.translateOnAxis(eb,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ls.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?Vh.copy(t):Vh.set(t,n,i);let s=this.parent;this.updateWorldMatrix(!0,!1),pc.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ls.lookAt(pc,Vh,this.up):Ls.lookAt(Vh,pc,this.up),this.quaternion.setFromRotationMatrix(Ls),s&&(Ls.extractRotation(s.matrixWorld),Co.setFromRotationMatrix(Ls),this.quaternion.premultiply(Co.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(Lt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(nb),No.child=t,this.dispatchEvent(No),No.child=null):Lt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(eR),t0.child=t,this.dispatchEvent(t0),t0.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ls.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ls.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ls),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(nb),No.child=t,this.dispatchEvent(No),No.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,s=this.children.length;i<s;i++){let r=this.children[i].getObjectByProperty(t,n);if(r!==void 0)return r}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);let s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pc,t,$w),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pc,tR,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(t)}traverseAncestors(t){let n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let n=t.x,i=t.y,s=t.z,a=this.matrix.elements;a[12]+=n-a[0]*n-a[4]*i-a[8]*s,a[13]+=i-a[1]*n-a[5]*i-a[9]*s,a[14]+=s-a[2]*n-a[6]*i-a[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){let a=this.children;for(let r=0,o=a.length;r<o;r++)a[r].updateWorldMatrix(!1,!0,i)}}toJSON(t){let n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){let p=l[c];a(t.shapes,p)}else a(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(t.materials,this.material[l]));s.material=o}else s.material=a(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(a(t.animations,l))}}if(n){let o=r(t.geometries),l=r(t.materials),c=r(t.textures),f=r(t.images),p=r(t.shapes),u=r(t.skeletons),d=r(t.animations),v=r(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),p.length>0&&(i.shapes=p),u.length>0&&(i.skeletons=u),d.length>0&&(i.animations=d),v.length>0&&(i.nodes=v)}return i.object=s,i;function r(o){let l=[];for(let c in o){let f=o[c];delete f.metadata,l.push(f)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};ai.DEFAULT_UP=new V(0,1,0);ai.DEFAULT_MATRIX_AUTO_UPDATE=!0;ai.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var _r=class extends ai{constructor(){super(),this.isGroup=!0,this.type="Group"}},nR={type:"move"},Yo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _r,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _r,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _r,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let n=this._hand;if(n)for(let i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let s=null,a=null,r=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(let b of t.hand.values()){let g=n.getJointPose(b,i),h=this._getHandJoint(c,b);g!==null&&(h.matrix.fromArray(g.transform.matrix),h.matrix.decompose(h.position,h.quaternion,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=g.radius),h.visible=g!==null}let f=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],u=f.position.distanceTo(p.position),d=.02,v=.005;c.inputState.pinching&&u>d+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=d-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(a=n.getPose(t.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=n.getPose(t.targetRaySpace,i),s===null&&a!==null&&(s=a),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(nR)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){let i=new _r;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}},t1={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ta={h:0,s:0,l:0},kh={h:0,s:0,l:0};function e0(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var Qt=class{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=Mn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Kt.colorSpaceToWorking(this,n),this}setRGB(t,n,i,s=Kt.workingColorSpace){return this.r=t,this.g=n,this.b=i,Kt.colorSpaceToWorking(this,s),this}setHSL(t,n,i,s=Kt.workingColorSpace){if(t=Xw(t,1),n=jt(n,0,1),i=jt(i,0,1),n===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+n):i+n-i*n,r=2*i-a;this.r=e0(r,a,t+1/3),this.g=e0(r,a,t),this.b=e0(r,a,t-1/3)}return Kt.colorSpaceToWorking(this,s),this}setStyle(t,n=Mn){function i(a){a!==void 0&&parseFloat(a)<1&&Nt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let a,r=s[1],o=s[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,n);if(a=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseFloat(a[1]))/100,Math.min(100,parseFloat(a[2]))/100,Math.min(100,parseFloat(a[3]))/100,n);break;case"hsl":case"hsla":if(a=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,n);break;default:Nt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let a=s[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,n);if(r===6)return this.setHex(parseInt(a,16),n);Nt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=Mn){let i=t1[t.toLowerCase()];return i!==void 0?this.setHex(i,n):Nt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Bs(t.r),this.g=Bs(t.g),this.b=Bs(t.b),this}copyLinearToSRGB(t){return this.r=Go(t.r),this.g=Go(t.g),this.b=Go(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Mn){return Kt.workingToColorSpace(Sn.copy(this),t),Math.round(jt(Sn.r*255,0,255))*65536+Math.round(jt(Sn.g*255,0,255))*256+Math.round(jt(Sn.b*255,0,255))}getHexString(t=Mn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Kt.workingColorSpace){Kt.workingToColorSpace(Sn.copy(this),n);let i=Sn.r,s=Sn.g,a=Sn.b,r=Math.max(i,s,a),o=Math.min(i,s,a),l,c,f=(o+r)/2;if(o===r)l=0,c=0;else{let p=r-o;switch(c=f<=.5?p/(r+o):p/(2-r-o),r){case i:l=(s-a)/p+(s<a?6:0);break;case s:l=(a-i)/p+2;break;case a:l=(i-s)/p+4;break}l/=6}return t.h=l,t.s=c,t.l=f,t}getRGB(t,n=Kt.workingColorSpace){return Kt.workingToColorSpace(Sn.copy(this),n),t.r=Sn.r,t.g=Sn.g,t.b=Sn.b,t}getStyle(t=Mn){Kt.workingToColorSpace(Sn.copy(this),t);let n=Sn.r,i=Sn.g,s=Sn.b;return t!==Mn?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,n,i){return this.getHSL(Ta),this.setHSL(Ta.h+t,Ta.s+n,Ta.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(Ta),t.getHSL(kh);let i=Jg(Ta.h,kh.h,n),s=Jg(Ta.s,kh.s,n),a=Jg(Ta.l,kh.l,n);return this.setHSL(i,s,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let n=this.r,i=this.g,s=this.b,a=t.elements;return this.r=a[0]*n+a[3]*i+a[6]*s,this.g=a[1]*n+a[4]*i+a[7]*s,this.b=a[2]*n+a[5]*i+a[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Sn=new Qt;Qt.NAMES=t1;var Tc=class extends ai{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fs,this.environmentIntensity=1,this.environmentRotation=new Fs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}},Ui=new V,Us=new V,n0=new V,Os=new V,Do=new V,Lo=new V,ib=new V,i0=new V,s0=new V,a0=new V,r0=new Le,o0=new Le,l0=new Le,Ra=class e{constructor(t=new V,n=new V,i=new V){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,s){s.subVectors(i,n),Ui.subVectors(t,n),s.cross(Ui);let a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(t,n,i,s,a){Ui.subVectors(s,n),Us.subVectors(i,n),n0.subVectors(t,n);let r=Ui.dot(Ui),o=Ui.dot(Us),l=Ui.dot(n0),c=Us.dot(Us),f=Us.dot(n0),p=r*c-o*o;if(p===0)return a.set(0,0,0),null;let u=1/p,d=(c*l-o*f)*u,v=(r*f-o*l)*u;return a.set(1-d-v,v,d)}static containsPoint(t,n,i,s){return this.getBarycoord(t,n,i,s,Os)===null?!1:Os.x>=0&&Os.y>=0&&Os.x+Os.y<=1}static getInterpolation(t,n,i,s,a,r,o,l){return this.getBarycoord(t,n,i,s,Os)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,Os.x),l.addScaledVector(r,Os.y),l.addScaledVector(o,Os.z),l)}static getInterpolatedAttribute(t,n,i,s,a,r){return r0.setScalar(0),o0.setScalar(0),l0.setScalar(0),r0.fromBufferAttribute(t,n),o0.fromBufferAttribute(t,i),l0.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(r0,a.x),r.addScaledVector(o0,a.y),r.addScaledVector(l0,a.z),r}static isFrontFacing(t,n,i,s){return Ui.subVectors(i,n),Us.subVectors(t,n),Ui.cross(Us).dot(s)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,s){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,n,i,s){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ui.subVectors(this.c,this.b),Us.subVectors(this.a,this.b),Ui.cross(Us).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,s,a){return e.getInterpolation(t,this.a,this.b,this.c,n,i,s,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){let i=this.a,s=this.b,a=this.c,r,o;Do.subVectors(s,i),Lo.subVectors(a,i),i0.subVectors(t,i);let l=Do.dot(i0),c=Lo.dot(i0);if(l<=0&&c<=0)return n.copy(i);s0.subVectors(t,s);let f=Do.dot(s0),p=Lo.dot(s0);if(f>=0&&p<=f)return n.copy(s);let u=l*p-f*c;if(u<=0&&l>=0&&f<=0&&l-f>0)return r=l/(l-f),n.copy(i).addScaledVector(Do,r);a0.subVectors(t,a);let d=Do.dot(a0),v=Lo.dot(a0);if(v>=0&&d<=v)return n.copy(a);let b=d*c-l*v;if(b<=0&&c>=0&&v<=0)return o=c/(c-v),n.copy(i).addScaledVector(Lo,o);let g=f*v-d*p;if(g<=0&&p-f>=0&&d-v>=0)return ib.subVectors(a,s),o=(p-f)/(p-f+(d-v)),n.copy(s).addScaledVector(ib,o);let h=1/(g+b+u);return r=b*h,o=u*h,n.copy(i).addScaledVector(Do,r).addScaledVector(Lo,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Ca=class{constructor(t=new V(1/0,1/0,1/0),n=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(Oi.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(Oi.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){let i=Oi.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let a=i.getAttribute("position");if(n===!0&&a!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let r=0,o=a.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,Oi):Oi.fromBufferAttribute(a,r),Oi.applyMatrix4(t.matrixWorld),this.expandByPoint(Oi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Xh.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Xh.copy(i.boundingBox)),Xh.applyMatrix4(t.matrixWorld),this.union(Xh)}let s=t.children;for(let a=0,r=s.length;a<r;a++)this.expandByObject(s[a],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Oi),Oi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(mc),Wh.subVectors(this.max,mc),Uo.subVectors(t.a,mc),Oo.subVectors(t.b,mc),Io.subVectors(t.c,mc),Ea.subVectors(Oo,Uo),Aa.subVectors(Io,Oo),dr.subVectors(Uo,Io);let n=[0,-Ea.z,Ea.y,0,-Aa.z,Aa.y,0,-dr.z,dr.y,Ea.z,0,-Ea.x,Aa.z,0,-Aa.x,dr.z,0,-dr.x,-Ea.y,Ea.x,0,-Aa.y,Aa.x,0,-dr.y,dr.x,0];return!c0(n,Uo,Oo,Io,Wh)||(n=[1,0,0,0,1,0,0,0,1],!c0(n,Uo,Oo,Io,Wh))?!1:(qh.crossVectors(Ea,Aa),n=[qh.x,qh.y,qh.z],c0(n,Uo,Oo,Io,Wh))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Oi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Oi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Is[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Is[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Is[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Is[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Is[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Is[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Is[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Is[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Is),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Is=[new V,new V,new V,new V,new V,new V,new V,new V],Oi=new V,Xh=new Ca,Uo=new V,Oo=new V,Io=new V,Ea=new V,Aa=new V,dr=new V,mc=new V,Wh=new V,qh=new V,pr=new V;function c0(e,t,n,i,s){for(let a=0,r=e.length-3;a<=r;a+=3){pr.fromArray(e,a);let o=s.x*Math.abs(pr.x)+s.y*Math.abs(pr.y)+s.z*Math.abs(pr.z),l=t.dot(pr),c=n.dot(pr),f=i.dot(pr);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>o)return!1}return!0}var Ge=new V,Yh=new $t,iR=0,as=class extends rs{constructor(t,n,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:iR++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=Zb,this.updateRanges=[],this.gpuType=Bi,this.version=0,this._normalizationScale=t!==void 0?J0(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[t+s]=n.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Yh.fromBufferAttribute(this,n),Yh.applyMatrix3(t),this.setXY(n,Yh.x,Yh.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ge.fromBufferAttribute(this,n),Ge.applyMatrix3(t),this.setXYZ(n,Ge.x,Ge.y,Ge.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)Ge.fromBufferAttribute(this,n),Ge.applyMatrix4(t),this.setXYZ(n,Ge.x,Ge.y,Ge.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)Ge.fromBufferAttribute(this,n),Ge.applyNormalMatrix(t),this.setXYZ(n,Ge.x,Ge.y,Ge.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)Ge.fromBufferAttribute(this,n),Ge.transformDirection(t),this.setXYZ(n,Ge.x,Ge.y,Ge.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,n,i){return this.normalized&&(i=this._normalize(i)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=this._denormalize(n)),n}setX(t,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=this._denormalize(n)),n}setY(t,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=this._denormalize(n)),n}setZ(t,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=this._denormalize(n)),n}setW(t,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,s){return t*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i),s=this._normalize(s)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,n,i,s,a){return t*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i),s=this._normalize(s),a=this._normalize(a)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let n=this._normalizationScale;return n!==void 0?Math.max(t/n,-1):Ww(t,this.array)}_normalize(t){let n=this._normalizationScale;return n!==void 0?Math.round(t*n):qw(t,this.array)}};var Ec=class extends as{constructor(t,n,i){super(new Uint16Array(t),n,i)}};var Ac=class extends as{constructor(t,n,i){super(new Uint32Array(t),n,i)}};var Ti=class extends as{constructor(t,n,i){super(new Float32Array(t),n,i)}},sR=new Ca,gc=new V,u0=new V,Zo=class{constructor(t=new V,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){let i=this.center;n!==void 0?i.copy(n):sR.setFromPoints(t).getCenter(i);let s=0;for(let a=0,r=t.length;a<r;a++)s=Math.max(s,i.distanceToSquared(t[a]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){let i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;gc.subVectors(t,this.center);let n=gc.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(gc,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(u0.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(gc.copy(t.center).add(u0)),this.expandByPoint(gc.copy(t.center).sub(u0))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},aR=0,Mi=new De,h0=new ai,Po=new V,ii=new Ca,_c=new Ca,nn=new V,Na=class e extends rs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:aR++}),this.uuid=Wc(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Vw(t)?Ac:Ec)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let a=new Ut().getNormalMatrix(t);i.applyNormalMatrix(a),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Mi.makeRotationFromQuaternion(t),this.applyMatrix4(Mi),this}rotateX(t){return Mi.makeRotationX(t),this.applyMatrix4(Mi),this}rotateY(t){return Mi.makeRotationY(t),this.applyMatrix4(Mi),this}rotateZ(t){return Mi.makeRotationZ(t),this.applyMatrix4(Mi),this}translate(t,n,i){return Mi.makeTranslation(t,n,i),this.applyMatrix4(Mi),this}scale(t,n,i){return Mi.makeScale(t,n,i),this.applyMatrix4(Mi),this}lookAt(t){return h0.lookAt(t),h0.updateMatrix(),this.applyMatrix4(h0.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Po).negate(),this.translate(Po.x,Po.y,Po.z),this}setFromPoints(t){let n=this.getAttribute("position");if(n===void 0){let i=[];for(let s=0,a=t.length;s<a;s++){let r=t[s];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Ti(i,3))}else{let i=Math.min(t.length,n.count);for(let s=0;s<i;s++){let a=t[s];n.setXYZ(s,a.x,a.y,a.z||0)}t.length>n.count&&Nt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ca);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Lt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,s=n.length;i<s;i++){let a=n[i];ii.setFromBufferAttribute(a),this.morphTargetsRelative?(nn.addVectors(this.boundingBox.min,ii.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,ii.max),this.boundingBox.expandByPoint(nn)):(this.boundingBox.expandByPoint(ii.min),this.boundingBox.expandByPoint(ii.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Lt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zo);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Lt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(t){let i=this.boundingSphere.center;if(ii.setFromBufferAttribute(t),n)for(let a=0,r=n.length;a<r;a++){let o=n[a];_c.setFromBufferAttribute(o),this.morphTargetsRelative?(nn.addVectors(ii.min,_c.min),ii.expandByPoint(nn),nn.addVectors(ii.max,_c.max),ii.expandByPoint(nn)):(ii.expandByPoint(_c.min),ii.expandByPoint(_c.max))}ii.getCenter(i);let s=0;for(let a=0,r=t.count;a<r;a++)nn.fromBufferAttribute(t,a),s=Math.max(s,i.distanceToSquared(nn));if(n)for(let a=0,r=n.length;a<r;a++){let o=n[a],l=this.morphTargetsRelative;for(let c=0,f=o.count;c<f;c++)nn.fromBufferAttribute(o,c),l&&(Po.fromBufferAttribute(t,c),nn.add(Po)),s=Math.max(s,i.distanceToSquared(nn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Lt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Lt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=n.position,s=n.normal,a=n.uv,r=this.getAttribute("tangent");(r===void 0||r.count!==i.count)&&(r=new as(new Float32Array(4*i.count),4),this.setAttribute("tangent",r));let o=[],l=[],c=new Uint8Array(i.count);for(let L=0;L<i.count;L++)o[L]=new V,l[L]=new V;let f=new V,p=new V,u=new V,d=new $t,v=new $t,b=new $t,g=new V,h=new V;function m(L,R,U){c[L]=c[R]=c[U]=1,f.fromBufferAttribute(i,L),p.fromBufferAttribute(i,R),u.fromBufferAttribute(i,U),d.fromBufferAttribute(a,L),v.fromBufferAttribute(a,R),b.fromBufferAttribute(a,U),p.sub(f),u.sub(f),v.sub(d),b.sub(d);let H=1/(v.x*b.y-b.x*v.y);isFinite(H)&&(g.copy(p).multiplyScalar(b.y).addScaledVector(u,-v.y).multiplyScalar(H),h.copy(u).multiplyScalar(v.x).addScaledVector(p,-b.x).multiplyScalar(H),o[L].add(g),o[R].add(g),o[U].add(g),l[L].add(h),l[R].add(h),l[U].add(h))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let L=0,R=x.length;L<R;++L){let U=x[L],H=U.start,W=U.count;for(let D=H,k=H+W;D<k;D+=3)m(t.getX(D+0),t.getX(D+1),t.getX(D+2))}let y=new V,E=new V,A=new V,_=new V;function T(L){A.fromBufferAttribute(s,L),_.copy(A);let R=o[L];y.copy(R),y.sub(A.multiplyScalar(A.dot(R))).normalize(),E.crossVectors(_,R);let H=E.dot(l[L])<0?-1:1;r.setXYZW(L,y.x,y.y,y.z,H)}for(let L=0,R=i.count;L<R;++L)c[L]&&T(L);this._transformed=!0}computeVertexNormals(){let t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new as(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,d=i.count;u<d;u++)i.setXYZ(u,0,0,0);let s=new V,a=new V,r=new V,o=new V,l=new V,c=new V,f=new V,p=new V;if(t)for(let u=0,d=t.count;u<d;u+=3){let v=t.getX(u+0),b=t.getX(u+1),g=t.getX(u+2);s.fromBufferAttribute(n,v),a.fromBufferAttribute(n,b),r.fromBufferAttribute(n,g),f.subVectors(r,a),p.subVectors(s,a),f.cross(p),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,g),o.add(f),l.add(f),c.add(f),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(b,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,d=n.count;u<d;u+=3)s.fromBufferAttribute(n,u+0),a.fromBufferAttribute(n,u+1),r.fromBufferAttribute(n,u+2),f.subVectors(r,a),p.subVectors(s,a),f.cross(p),i.setXYZ(u+0,f.x,f.y,f.z),i.setXYZ(u+1,f.x,f.y,f.z),i.setXYZ(u+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)nn.fromBufferAttribute(t,n),nn.normalize(),t.setXYZ(n,nn.x,nn.y,nn.z)}toNonIndexed(){function t(o,l){let c=o.array,f=o.itemSize,p=o.normalized,u=new c.constructor(l.length*f),d=0,v=0;for(let b=0,g=l.length;b<g;b++){o.isInterleavedBufferAttribute?d=l[b]*o.data.stride+o.offset:d=l[b]*f;for(let h=0;h<f;h++)u[v++]=c[d++]}return new as(u,f,p)}if(this.index===null)return Nt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new e,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,i);n.setAttribute(o,c)}let a=this.morphAttributes;for(let o in a){let l=[],c=a[o];for(let f=0,p=c.length;f<p;f++){let u=c[f],d=t(u,i);l.push(d)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let o=0,l=r.length;o<l;o++){let c=r[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},a=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],f=[];for(let p=0,u=c.length;p<u;p++){let d=c[p];f.push(d.toJSON(t.data))}f.length>0&&(s[l]=f,a=!0)}a&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let f=s[c];this.setAttribute(c,f.clone(n))}let a=t.morphAttributes;for(let c in a){let f=[],p=a[c];for(let u=0,d=p.length;u<d;u++)f.push(p[u].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=t.morphTargetsRelative;let r=t.groups;for(let c=0,f=r.length;c<f;c++){let p=r[c];this.addGroup(p.start,p.count,p.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var f0=new V,rR=new V,oR=new Ut,Ii=class{constructor(t=new V(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,s){return this.normal.set(t,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){let s=f0.subVectors(i,n).cross(rR.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n,i=!0){let s=t.delta(f0),a=this.normal.dot(s);if(a===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/a;return i===!0&&(r<0||r>1)?null:n.copy(t.start).addScaledVector(s,r)}intersectsLine(t){let n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){let i=n||oR.getNormalMatrix(t),s=this.coplanarPoint(f0).applyMatrix4(t),a=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},lR=0,Da=class extends rs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:lR++}),this.uuid=Wc(),this.name="",this.type="Material",this.blending=tl,this.side=Ia,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=A0,this.blendDst=w0,this.blendEquation=Sr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qt(0,0,0),this.blendAlpha=0,this.depthFunc=Vo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vb,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cf,this.stencilZFail=cf,this.stencilZPass=cf,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let n in t){let i=t[n];if(i===void 0){Nt(`Material: parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){Nt(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(a=>a.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(a){let r=[];for(let o in a){let l=a[o];delete l.metadata,r.push(l)}return r}if(n){let a=s(t.textures),r=s(t.images);a.length>0&&(i.textures=a),r.length>0&&(i.images=r)}return i}fromJSON(t,n){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Qt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new Ii().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=n[t.map]||null),t.matcap!==void 0&&(this.matcap=n[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=n[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=n[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=n[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new $t().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=n[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=n[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=n[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=n[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=n[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=n[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=n[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=n[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=n[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=n[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=n[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new $t().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=n[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=n[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=n[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=n[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=n[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=n[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let n=t.clippingPlanes,i=null;if(n!==null){let s=n.length;i=new Array(s);for(let a=0;a!==s;++a)i[a]=n[a].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Ps=new V,d0=new V,Zh=new V,Jh=new V,wc=class{constructor(t=new V,n=new V(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ps)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let n=Ps.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Ps.copy(this.origin).addScaledVector(this.direction,n),Ps.distanceToSquared(t))}distanceSqToSegment(t,n,i,s){d0.copy(t).add(n).multiplyScalar(.5),Zh.copy(n).sub(t).normalize(),Jh.copy(this.origin).sub(d0);let a=t.distanceTo(n)*.5,r=-this.direction.dot(Zh),o=Jh.dot(this.direction),l=-Jh.dot(Zh),c=Jh.lengthSq(),f=Math.abs(1-r*r),p,u,d,v;if(f>0)if(p=r*l-o,u=r*o-l,v=a*f,p>=0)if(u>=-v)if(u<=v){let b=1/f;p*=b,u*=b,d=p*(p+r*u+2*o)+u*(r*p+u+2*l)+c}else u=a,p=Math.max(0,-(r*u+o)),d=-p*p+u*(u+2*l)+c;else u=-a,p=Math.max(0,-(r*u+o)),d=-p*p+u*(u+2*l)+c;else u<=-v?(p=Math.max(0,-(-r*a+o)),u=p>0?-a:Math.min(Math.max(-a,-l),a),d=-p*p+u*(u+2*l)+c):u<=v?(p=0,u=Math.min(Math.max(-a,-l),a),d=u*(u+2*l)+c):(p=Math.max(0,-(r*a+o)),u=p>0?a:Math.min(Math.max(-a,-l),a),d=-p*p+u*(u+2*l)+c);else u=r>0?-a:a,p=Math.max(0,-(r*u+o)),d=-p*p+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(d0).addScaledVector(Zh,u),d}intersectSphere(t,n){if(t.radius<0)return null;Ps.subVectors(t.center,this.origin);let i=Ps.dot(this.direction),s=Ps.dot(Ps)-i*i,a=t.radius*t.radius;if(s>a)return null;let r=Math.sqrt(a-s),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){let i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){let n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,s,a,r,o,l,c=1/this.direction.x,f=1/this.direction.y,p=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),f>=0?(a=(t.min.y-u.y)*f,r=(t.max.y-u.y)*f):(a=(t.max.y-u.y)*f,r=(t.min.y-u.y)*f),i>r||a>s||((a>i||isNaN(i))&&(i=a),(r<s||isNaN(s))&&(s=r),p>=0?(o=(t.min.z-u.z)*p,l=(t.max.z-u.z)*p):(o=(t.max.z-u.z)*p,l=(t.min.z-u.z)*p),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(t){return this.intersectBox(t,Ps)!==null}intersectTriangle(t,n,i,s,a){let r=this.origin,o=this.direction,l=o.x,c=o.y,f=o.z,p=t.x-r.x,u=t.y-r.y,d=t.z-r.z,v=n.x-r.x,b=n.y-r.y,g=n.z-r.z,h=i.x-r.x,m=i.y-r.y,x=i.z-r.z,y=Math.abs(l),E=Math.abs(c),A=Math.abs(f),_,T,L,R,U,H,W,D,k,Y,I,tt;if(y>=E&&y>=A?(L=l,H=p,k=v,tt=h,l>=0?(_=c,T=f,R=u,U=d,W=b,D=g,Y=m,I=x):(_=f,T=c,R=d,U=u,W=g,D=b,Y=x,I=m)):E>=A?(L=c,H=u,k=b,tt=m,c>=0?(_=f,T=l,R=d,U=p,W=g,D=v,Y=x,I=h):(_=l,T=f,R=p,U=d,W=v,D=g,Y=h,I=x)):(L=f,H=d,k=g,tt=x,f>=0?(_=l,T=c,R=p,U=u,W=v,D=b,Y=h,I=m):(_=c,T=l,R=u,U=p,W=b,D=v,Y=m,I=h)),L===0)return null;let F=_/L,J=T/L,et=1/L,bt=R-F*H,Pt=U-J*H,K=W-F*k,gt=D-J*k,xt=Y-F*tt,wt=I-J*tt,_t=xt*gt-wt*K,zt=bt*wt-Pt*xt,Pe=K*Pt-gt*bt;if(s){if(_t<0||zt<0||Pe<0)return null}else if((_t<0||zt<0||Pe<0)&&(_t>0||zt>0||Pe>0))return null;let Ct=_t+zt+Pe;if(Ct===0)return null;let le=et*(_t*H+zt*k+Pe*tt);return(Ct>0?le<0:le>0)?null:this.at(le/Ct,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},vr=class extends Da{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fs,this.combine=R0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},sb=new De,mr=new wc,Kh=new Zo,ab=new V,Qh=new V,jh=new V,$h=new V,p0=new V,tf=new V,rb=new V,ef=new V,Ln=class extends ai{constructor(t=new Na,n=new vr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){let o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(t,n){let i=this.geometry,s=i.attributes.position,a=i.morphAttributes.position,r=i.morphTargetsRelative;n.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(a&&o){tf.set(0,0,0);for(let l=0,c=a.length;l<c;l++){let f=o[l],p=a[l];f!==0&&(p0.fromBufferAttribute(p,t),r?tf.addScaledVector(p0,f):tf.addScaledVector(p0.sub(n),f))}n.add(tf)}return n}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,n){let i=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Kh.copy(i.boundingSphere),Kh.applyMatrix4(a),mr.copy(t.ray).recast(t.near),!(Kh.containsPoint(mr.origin)===!1&&(mr.intersectSphere(Kh,ab)===null||mr.origin.distanceToSquared(ab)>(t.far-t.near)**2))&&(sb.copy(a).invert(),mr.copy(t.ray).applyMatrix4(sb),!(i.boundingBox!==null&&mr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,mr)))}_computeIntersections(t,n,i){let s,a=this.geometry,r=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,f=a.attributes.uv1,p=a.attributes.normal,u=a.groups,d=a.drawRange;if(o!==null)if(Array.isArray(r))for(let v=0,b=u.length;v<b;v++){let g=u[v],h=r[g.materialIndex],m=Math.max(g.start,d.start),x=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let y=m,E=x;y<E;y+=3){let A=o.getX(y),_=o.getX(y+1),T=o.getX(y+2);s=nf(this,h,t,i,c,f,p,A,_,T),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,n.push(s))}}else{let v=Math.max(0,d.start),b=Math.min(o.count,d.start+d.count);for(let g=v,h=b;g<h;g+=3){let m=o.getX(g),x=o.getX(g+1),y=o.getX(g+2);s=nf(this,r,t,i,c,f,p,m,x,y),s&&(s.faceIndex=Math.floor(g/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let v=0,b=u.length;v<b;v++){let g=u[v],h=r[g.materialIndex],m=Math.max(g.start,d.start),x=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let y=m,E=x;y<E;y+=3){let A=y,_=y+1,T=y+2;s=nf(this,h,t,i,c,f,p,A,_,T),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,n.push(s))}}else{let v=Math.max(0,d.start),b=Math.min(l.count,d.start+d.count);for(let g=v,h=b;g<h;g+=3){let m=g,x=g+1,y=g+2;s=nf(this,r,t,i,c,f,p,m,x,y),s&&(s.faceIndex=Math.floor(g/3),n.push(s))}}}};function cR(e,t,n,i,s,a,r,o){let l;if(t.side===Un?l=i.intersectTriangle(r,a,s,!0,o):l=i.intersectTriangle(s,a,r,t.side===Ia,o),l===null)return null;ef.copy(o),ef.applyMatrix4(e.matrixWorld);let c=n.ray.origin.distanceTo(ef);return c<n.near||c>n.far?null:{distance:c,point:ef.clone(),object:e}}function nf(e,t,n,i,s,a,r,o,l,c){e.getVertexPosition(o,Qh),e.getVertexPosition(l,jh),e.getVertexPosition(c,$h);let f=cR(e,t,n,i,Qh,jh,$h,rb);if(f){let p=new V;Ra.getBarycoord(rb,Qh,jh,$h,p),s&&(f.uv=Ra.getInterpolatedAttribute(s,o,l,c,p,new $t)),a&&(f.uv1=Ra.getInterpolatedAttribute(a,o,l,c,p,new $t)),r&&(f.normal=Ra.getInterpolatedAttribute(r,o,l,c,p,new V),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new V,materialIndex:0};Ra.getNormal(Qh,jh,$h,u.normal),f.face=u,f.barycoord=p}return f}var Ef=class extends bn{constructor(t=null,n=1,i=1,s,a,r,o,l,c=sn,f=sn,p,u){super(null,r,o,l,c,f,s,a,p,u),this.isDataTexture=!0,this.image={data:t,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var gr=new Zo,uR=new $t(.5,.5),sf=new V,yr=class{constructor(t=new Ii,n=new Ii,i=new Ii,s=new Ii,a=new Ii,r=new Ii){this.planes=[t,n,i,s,a,r]}set(t,n,i,s,a,r){let o=this.planes;return o[0].copy(t),o[1].copy(n),o[2].copy(i),o[3].copy(s),o[4].copy(a),o[5].copy(r),this}copy(t){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=bi,i=!1){let s=this.planes,a=t.elements,r=a[0],o=a[1],l=a[2],c=a[3],f=a[4],p=a[5],u=a[6],d=a[7],v=a[8],b=a[9],g=a[10],h=a[11],m=a[12],x=a[13],y=a[14],E=a[15];if(s[0].setComponents(c-r,d-f,h-v,E-m).normalize(),s[1].setComponents(c+r,d+f,h+v,E+m).normalize(),s[2].setComponents(c+o,d+p,h+b,E+x).normalize(),s[3].setComponents(c-o,d-p,h-b,E-x).normalize(),i)s[4].setComponents(l,u,g,y).normalize(),s[5].setComponents(c-l,d-u,h-g,E-y).normalize();else if(s[4].setComponents(c-l,d-u,h-g,E-y).normalize(),n===bi)s[5].setComponents(c+l,d+u,h+g,E+y).normalize();else if(n===Mc)s[5].setComponents(l,u,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),gr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),gr.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(gr)}intersectsSprite(t){gr.center.set(0,0,0);let n=uR.distanceTo(t.center);return gr.radius=.7071067811865476+n,gr.applyMatrix4(t.matrixWorld),this.intersectsSphere(gr)}intersectsSphere(t){let n=this.planes,i=t.center,s=-t.radius;for(let a=0;a<6;a++)if(n[a].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let n=this.planes;for(let i=0;i<6;i++){let s=n[i];if(sf.x=s.normal.x>0?t.max.x:t.min.x,sf.y=s.normal.y>0?t.max.y:t.min.y,sf.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(sf)<0)return!1}return!0}containsPoint(t){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},ob=new De,Af=class e{constructor(){this.coordinateSystem=bi,this._frustums=[],this._count=0}setFromArrayCamera(t){let n=t.cameras,i=this._frustums;for(let s=0;s<n.length;s++){let a=n[s];ob.multiplyMatrices(a.projectionMatrix,a.matrixWorldInverse),i[s]===void 0&&(i[s]=new yr),i[s].setFromProjectionMatrix(ob,a.coordinateSystem,a.reversedDepth)}return this._count=n.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsObject(t))return!0;return!1}intersectsSprite(t){let n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsSphere(t))return!0;return!1}intersectsBox(t){let n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsBox(t))return!0;return!1}containsPoint(t){let n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let n=this._frustums,i=t._frustums;for(let s=0;s<t._count;s++)n[s]===void 0&&(n[s]=new yr),n[s].copy(i[s]);return this._count=t._count,this}clone(){return new e().copy(this)}};var Rc=class extends bn{constructor(t=[],n=Mr,i,s,a,r,o,l,c,f){super(t,n,i,s,a,r,o,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Cc=class extends bn{constructor(t,n,i,s,a,r,o,l,c){super(t,n,i,s,a,r,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Hs=class extends bn{constructor(t,n,i=Pi,s,a,r,o=sn,l=sn,c,f=zs,p=1){if(f!==zs&&f!==Vs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:n,depth:p};super(u,s,a,r,o,l,f,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Wo(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let n=super.toJSON(t);return n.compareFunction=this.compareFunction,n}},Nc=class extends Hs{constructor(t,n=Pi,i=Mr,s,a,r=sn,o=sn,l,c=zs){let f={width:t,height:t,depth:1},p=[f,f,f,f,f,f];super(t,t,n,i,s,a,r,o,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Dc=class extends bn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Jo=class e extends Na{constructor(t=1,n=1,i=1,s=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:s,heightSegments:a,depthSegments:r};let o=this;s=Math.floor(s),a=Math.floor(a),r=Math.floor(r);let l=[],c=[],f=[],p=[],u=0,d=0;v("z","y","x",-1,-1,i,n,t,r,a,0),v("z","y","x",1,-1,i,n,-t,r,a,1),v("x","z","y",1,1,t,i,n,s,r,2),v("x","z","y",1,-1,t,i,-n,s,r,3),v("x","y","z",1,-1,t,n,i,s,a,4),v("x","y","z",-1,-1,t,n,-i,s,a,5),this.setIndex(l),this.setAttribute("position",new Ti(c,3)),this.setAttribute("normal",new Ti(f,3)),this.setAttribute("uv",new Ti(p,2));function v(b,g,h,m,x,y,E,A,_,T,L){let R=y/_,U=E/T,H=y/2,W=E/2,D=A/2,k=_+1,Y=T+1,I=0,tt=0,F=new V;for(let J=0;J<Y;J++){let et=J*U-W;for(let bt=0;bt<k;bt++){let Pt=bt*R-H;F[b]=Pt*m,F[g]=et*x,F[h]=D,c.push(F.x,F.y,F.z),F[b]=0,F[g]=0,F[h]=A>0?1:-1,f.push(F.x,F.y,F.z),p.push(bt/_),p.push(1-J/T),I+=1}}for(let J=0;J<T;J++)for(let et=0;et<_;et++){let bt=u+et+k*J,Pt=u+et+k*(J+1),K=u+(et+1)+k*(J+1),gt=u+(et+1)+k*J;l.push(bt,Pt,gt),l.push(Pt,K,gt),tt+=6}o.addGroup(d,tt,L),d+=tt,u+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var ls=class e extends Na{constructor(t=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:s};let a=t/2,r=n/2,o=Math.floor(i),l=Math.floor(s),c=o+1,f=l+1,p=t/o,u=n/l,d=[],v=[],b=[],g=[];for(let h=0;h<f;h++){let m=h*u-r;for(let x=0;x<c;x++){let y=x*p-a;v.push(y,-m,0),b.push(0,0,1),g.push(x/o),g.push(1-h/l)}}for(let h=0;h<l;h++)for(let m=0;m<o;m++){let x=m+c*h,y=m+c*(h+1),E=m+1+c*(h+1),A=m+1+c*h;d.push(x,y,A),d.push(y,E,A)}this.setIndex(d),this.setAttribute("position",new Ti(v,3)),this.setAttribute("normal",new Ti(b,3)),this.setAttribute("uv",new Ti(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}};function Tr(e){let t={};for(let n in e){t[n]={};for(let i in e[n]){let s=e[n][i];if(lb(s))s.isRenderTargetTexture?(Nt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=s.clone();else if(Array.isArray(s))if(lb(s[0])){let a=[];for(let r=0,o=s.length;r<o;r++)a[r]=s[r].clone();t[n][i]=a}else t[n][i]=s.slice();else t[n][i]=s}}return t}function Tn(e){let t={};for(let n=0;n<e.length;n++){let i=Tr(e[n]);for(let s in i)t[s]=i[s]}return t}function lb(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function hR(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function K0(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Kt.workingColorSpace}var e1={clone:Tr,merge:Tn},fR=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dR=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,cs=class extends Da{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fR,this.fragmentShader=dR,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Tr(t.uniforms),this.uniformsGroups=hR(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(let s in this.uniforms){let r=this.uniforms[s].value;r&&r.isTexture?n.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?n.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?n.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?n.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?n.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?n.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?n.uniforms[s]={type:"m4",value:r.toArray()}:n.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(t,n){if(super.fromJSON(t,n),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=n[s.value]||null;break;case"c":this.uniforms[i].value=new Qt().setHex(s.value);break;case"v2":this.uniforms[i].value=new $t().fromArray(s.value);break;case"v3":this.uniforms[i].value=new V().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Le().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Ut().fromArray(s.value);break;case"m4":this.uniforms[i].value=new De().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},wf=class extends cs{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ko=class extends Da{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rd,this.normalScale=new $t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fs,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Rf=class extends Da{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Hb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Cf=class extends Da{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Bo(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function af(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var La=class{constructor(t,n,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let n=this.parameterPositions,i=this._cachedIndex,s=n[i],a=n[i-1];t:{e:{let r;n:{i:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<a)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(a=s,s=n[++i],t<s)break e}r=n.length;break n}if(!(t>=a)){let o=n[1];t<o&&(i=2,a=o);for(let l=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=a,a=n[--i-1],t>=a)break e}r=i,i=0;break n}break t}for(;i<r;){let o=i+r>>>1;t<n[o]?r=o:i=o+1}if(s=n[i],a=n[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,s)}return this.interpolate_(i,a,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let n=this.resultBuffer,i=this.sampleValues,s=this.valueSize,a=t*s;for(let r=0;r!==s;++r)n[r]=i[a+r];return n}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Nf=class extends La{constructor(t,n,i,s){super(t,n,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:g0,endingEnd:g0}}intervalChanged_(t,n,i){let s=this.parameterPositions,a=t-2,r=t+1,o=s[a],l=s[r];if(o===void 0)switch(this.getSettings_().endingStart){case _0:a=t,o=2*n-i;break;case v0:a=s.length-2,o=n+s[a]-s[a+1];break;default:a=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case _0:r=t,l=2*i-n;break;case v0:r=1,l=i+s[1]-s[0];break;default:r=t-1,l=n}let c=(i-n)*.5,f=this.valueSize;this._weightPrev=c/(n-o),this._weightNext=c/(l-i),this._offsetPrev=a*f,this._offsetNext=r*f}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,f=this._offsetPrev,p=this._offsetNext,u=this._weightPrev,d=this._weightNext,v=(i-n)/(s-n),b=v*v,g=b*v,h=-u*g+2*u*b-u*v,m=(1+u)*g+(-1.5-2*u)*b+(-.5+u)*v+1,x=(-1-d)*g+(1.5+d)*b+.5*v,y=d*g-d*b;for(let E=0;E!==o;++E)a[E]=h*r[f+E]+m*r[c+E]+x*r[l+E]+y*r[p+E];return a}},Df=class extends La{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,f=(i-n)/(s-n),p=1-f;for(let u=0;u!==o;++u)a[u]=r[c+u]*p+r[l+u]*f;return a}},Lf=class extends La{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Uf=class extends La{interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,f=this.inTangents,p=this.outTangents;if(!f||!p){let v=(i-n)/(s-n),b=1-v;for(let g=0;g!==o;++g)a[g]=r[c+g]*b+r[l+g]*v;return a}let u=o*2,d=t-1;for(let v=0;v!==o;++v){let b=r[c+v],g=r[l+v],h=d*u+v*2,m=p[h],x=p[h+1],y=t*u+v*2,E=f[y],A=f[y+1],_=mR(i,n,m,E,s);a[v]=n1(_,b,x,A,g)}return a}};function n1(e,t,n,i,s){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*i+e*e*e*s}function pR(e,t,n,i,s){let a=1-e;return 3*a*a*(n-t)+6*a*e*(i-n)+3*e*e*(s-i)}function mR(e,t,n,i,s){let a=(e-t)/(s-t);for(let r=0;r<8;r++){let o=n1(a,t,n,i,s)-e;if(Math.abs(o)<1e-10)break;let l=pR(a,t,n,i,s);if(Math.abs(l)<1e-10)break;a=Math.max(0,Math.min(1,a-o/l))}return a}var ri=class{constructor(t,n,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Bo(n,this.TimeBufferType),this.values=Bo(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let n=t.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(t);else{i={name:t.name,times:Bo(t.times,Array),values:Bo(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),af(t.settings)&&(i.settings={inTangents:Bo(t.settings.inTangents,Array),outTangents:Bo(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Lf(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Df(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Nf(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let n=new Uf(this.times,this.values,this.getValueSize(),t);return this.settings&&(n.inTangents=this.settings.inTangents,n.outTangents=this.settings.outTangents),n}setInterpolation(t){let n;switch(t){case yc:n=this.InterpolantFactoryMethodDiscrete;break;case xf:n=this.InterpolantFactoryMethodLinear;break;case lf:n=this.InterpolantFactoryMethodSmooth;break;case m0:n=this.InterpolantFactoryMethodBezier;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Nt("KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return yc;case this.InterpolantFactoryMethodLinear:return xf;case this.InterpolantFactoryMethodSmooth:return lf;case this.InterpolantFactoryMethodBezier:return m0}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]+=t;af(this.settings)&&(cb(this.settings.inTangents,t),cb(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]*=t;af(this.settings)&&(ub(this.settings.inTangents,t),ub(this.settings.outTangents,t))}return this}trim(t,n){let i=this.times,s=i.length,a=0,r=s-1;for(;a!==s&&i[a]<t;)++a;for(;r!==-1&&i[r]>n;)--r;if(++r,a!==0||r!==s){a>=r&&(r=Math.max(r,1),a=r-1);let o=this.getValueSize();this.times=i.slice(a,r),this.values=this.values.slice(a*o,r*o)}return this}validate(){let t=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(Lt("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,a=i.length;a===0&&(Lt("KeyframeTrack: Track is empty.",this),t=!1);let r=null;for(let o=0;o!==a;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Lt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(r!==null&&r>l){Lt("KeyframeTrack: Out of order keys.",this,o,l,r),t=!1;break}r=l}if(s!==void 0&&kw(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Lt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===lf,a=t.length-1,r=1;for(let o=1;o<a;++o){let l=!1,c=t[o],f=t[o+1];if(c!==f&&(o!==1||c!==t[0]))if(s)l=!0;else{let p=o*i,u=p-i,d=p+i;for(let v=0;v!==i;++v){let b=n[p+v];if(b!==n[u+v]||b!==n[d+v]){l=!0;break}}}if(l){if(o!==r){t[r]=t[o];let p=o*i,u=r*i;for(let d=0;d!==i;++d)n[u+d]=n[p+d]}++r}}if(a>0){t[r]=t[a];for(let o=a*i,l=r*i,c=0;c!==i;++c)n[l+c]=n[o+c];++r}return r!==t.length?(this.times=t.slice(0,r),this.values=n.slice(0,r*i)):(this.times=t,this.values=n),this}clone(){let t=this.times.slice(),n=this.values.slice(),i=this.constructor,s=new i(this.name,t,n);return s.createInterpolant=this.createInterpolant,af(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function cb(e,t){for(let n=0,i=e.length;n!==i;n+=2)e[n]+=t}function ub(e,t){for(let n=0,i=e.length;n!==i;n+=2)e[n]*=t}ri.prototype.ValueTypeName="";ri.prototype.TimeBufferType=Float32Array;ri.prototype.ValueBufferType=Float32Array;ri.prototype.DefaultInterpolation=xf;var Ua=class extends ri{constructor(t,n,i){super(t,n,i)}};Ua.prototype.ValueTypeName="bool";Ua.prototype.ValueBufferType=Array;Ua.prototype.DefaultInterpolation=yc;Ua.prototype.InterpolantFactoryMethodLinear=void 0;Ua.prototype.InterpolantFactoryMethodSmooth=void 0;var Of=class extends ri{constructor(t,n,i,s){super(t,n,i,s)}};Of.prototype.ValueTypeName="color";var If=class extends ri{constructor(t,n,i,s){super(t,n,i,s)}};If.prototype.ValueTypeName="number";var Pf=class extends La{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=(i-n)/(s-n),c=t*o;for(let f=c+o;c!==f;c+=4)os.slerpFlat(a,0,r,c-o,r,c,l);return a}},Lc=class extends ri{constructor(t,n,i,s){super(t,n,i,s)}InterpolantFactoryMethodLinear(t){return new Pf(this.times,this.values,this.getValueSize(),t)}};Lc.prototype.ValueTypeName="quaternion";Lc.prototype.InterpolantFactoryMethodSmooth=void 0;var Oa=class extends ri{constructor(t,n,i){super(t,n,i)}};Oa.prototype.ValueTypeName="string";Oa.prototype.ValueBufferType=Array;Oa.prototype.DefaultInterpolation=yc;Oa.prototype.InterpolantFactoryMethodLinear=void 0;Oa.prototype.InterpolantFactoryMethodSmooth=void 0;var Bf=class extends ri{constructor(t,n,i,s){super(t,n,i,s)}};Bf.prototype.ValueTypeName="vector";var uf={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(hb(e)||(this.files[e]=t))},get:function(e){if(this.enabled!==!1&&!hb(e))return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};function hb(e){try{let t=e.slice(e.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var zf=class{constructor(t,n,i){let s=this,a=!1,r=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=i,this._abortController=null,this.itemStart=function(f){o++,a===!1&&s.onStart!==void 0&&s.onStart(f,r,o),a=!0},this.itemEnd=function(f){r++,s.onProgress!==void 0&&s.onProgress(f,r,o),r===o&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(f){s.onError!==void 0&&s.onError(f)},this.resolveURL=function(f){return f=f.normalize("NFC"),l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,p){return c.push(f,p),this},this.removeHandler=function(f){let p=c.indexOf(f);return p!==-1&&c.splice(p,2),this},this.getHandler=function(f){for(let p=0,u=c.length;p<u;p+=2){let d=c[p],v=c[p+1];if(d.global&&(d.lastIndex=0),d.test(f))return v}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},i1=new zf,Qo=class{constructor(t){this.manager=t!==void 0?t:i1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,n){let i=this;return new Promise(function(s,a){i.load(t,s,n,a)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};Qo.DEFAULT_MATERIAL_NAME="__DEFAULT";var zo=new WeakMap,Ff=class extends Qo{constructor(t){super(t)}load(t,n,i,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let a=this,r=uf.get(`image:${t}`);if(r!==void 0){if(r.complete===!0)a.manager.itemStart(t),setTimeout(function(){n&&n(r),a.manager.itemEnd(t)},0);else{let p=zo.get(r);p===void 0&&(p=[],zo.set(r,p)),p.push({onLoad:n,onError:s})}return r}let o=ko("img");function l(){f(),n&&n(this);let p=zo.get(this)||[];for(let u=0;u<p.length;u++){let d=p[u];d.onLoad&&d.onLoad(this)}zo.delete(this),a.manager.itemEnd(t)}function c(p){f(),s&&s(p),uf.remove(`image:${t}`);let u=zo.get(this)||[];for(let d=0;d<u.length;d++){let v=u[d];v.onError&&v.onError(p)}zo.delete(this),a.manager.itemError(t),a.manager.itemEnd(t)}function f(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),uf.add(`image:${t}`,o),a.manager.itemStart(t),o.fetchPriority=this.priority,o.src=t,o}};var Uc=class extends Qo{constructor(t){super(t)}load(t,n,i,s){let a=new bn,r=new Ff(this.manager);return r.setPriority(this.priority),r.setCache(this.cache),r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(t,function(o){a.image=o,a.needsUpdate=!0,n!==void 0&&n(a)},i,s),a}},Hf=class extends ai{static registerNode(t){this.prototype._lightNode=t}constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Qt(t),this.intensity=n}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}};var rf=new V,of=new os,is=new V,Oc=class extends ai{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new De,this.projectionMatrix=new De,this.projectionMatrixInverse=new De,this.coordinateSystem=bi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(rf,of,is),is.x===1&&is.y===1&&is.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(rf,of,is.set(1,1,1)).invert()}updateWorldMatrix(t,n,i=!1){super.updateWorldMatrix(t,n,i),this.matrixWorld.decompose(rf,of,is),is.x===1&&is.y===1&&is.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(rf,of,is.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},wa=new V,fb=new $t,db=new $t,Dn=class extends Oc{constructor(t=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let n=.5*this.getFilmHeight()/t;this.fov=Sf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Zg*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Sf*2*Math.atan(Math.tan(Zg*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){wa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(wa.x,wa.y).multiplyScalar(-t/wa.z),wa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(wa.x,wa.y).multiplyScalar(-t/wa.z)}getViewSize(t,n){return this.getViewBounds(t,fb,db),n.subVectors(db,fb)}setViewOffset(t,n,i,s,a,r){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,n=t*Math.tan(Zg*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,a=-.5*s,r=this.view;if(this.view!==null&&this.view.enabled){let l=r.fullWidth,c=r.fullHeight;a+=r.offsetX*s/l,n-=r.offsetY*i/c,s*=r.width/l,i*=r.height/c}let o=this.filmOffset;o!==0&&(a+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,n,n-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}};var Gf=class extends Oc{constructor(t=-1,n=1,i=1,s=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=s,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,s,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,a=i-t,r=i+t,o=s+n,l=s-n;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,r=a+c*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}};var Ic=class extends Hf{constructor(t,n){super(t,n),this.isAmbientLight=!0,this.type="AmbientLight"}};var Fo=-90,Ho=1,jo=class extends ai{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Dn(Fo,Ho,t,n);s.layers=this.layers,this.add(s);let a=new Dn(Fo,Ho,t,n);a.layers=this.layers,this.add(a);let r=new Dn(Fo,Ho,t,n);r.layers=this.layers,this.add(r);let o=new Dn(Fo,Ho,t,n);o.layers=this.layers,this.add(o);let l=new Dn(Fo,Ho,t,n);l.layers=this.layers,this.add(l);let c=new Dn(Fo,Ho,t,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,n=this.children.concat(),[i,s,a,r,o,l]=n;for(let c of n)this.remove(c);if(t===bi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Mc)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of n)this.add(c),c.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[a,r,o,l,c,f]=this.children,p=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;let b=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,a),t.setRenderTarget(i,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,r),t.setRenderTarget(i,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,o),t.setRenderTarget(i,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,l),t.setRenderTarget(i,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,c),i.texture.mipmapsAutoUpdate=b,t.setRenderTarget(i,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,f),t.setRenderTarget(p,u,d),t.xr.enabled=v,i.texture.needsPMREMUpdate=!0}},Vf=class extends Dn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var Q0="\\[\\]\\.:\\/",gR=new RegExp("["+Q0+"]","g"),j0="[^"+Q0+"]",_R="[^"+Q0.replace("\\.","")+"]",vR=/((?:WC+[\/:])*)/.source.replace("WC",j0),yR=/(WCOD+)?/.source.replace("WCOD",_R),xR=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",j0),SR=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",j0),MR=new RegExp("^"+vR+yR+xR+SR+"$"),bR=["material","materials","bones","map"],y0=class{constructor(t,n,i){let s=i||be.parseTrackName(n);this._targetGroup=t,this._bindings=t.subscribe_(n,s)}getValue(t,n){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,n)}setValue(t,n){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,a=i.length;s!==a;++s)i[s].setValue(t,n)}bind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].bind()}unbind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].unbind()}},be=class e{constructor(t,n,i){this.path=n,this.parsedPath=i||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,i){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,i):new e(t,n,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(gR,"")}static parseTrackName(t){let n=MR.exec(t);if(n===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let a=i.nodeName.substring(s+1);bR.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(n);if(i!==void 0)return i}if(t.children){let i=function(a){for(let r=0;r<a.length;r++){let o=a[r];if(o.name===n||o.uuid===n)return o;let l=i(o.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)t[n++]=i[s]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++]}_setValue_array_setNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node,n=this.parsedPath,i=n.objectName,s=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Nt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=n.objectIndex;switch(i){case"materials":if(!t.material){Lt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Lt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Lt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let f=0;f<t.length;f++)if(t[f].name===c){c=f;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Lt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Lt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Lt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){Lt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let r=t[s];if(r===void 0){let c=n.nodeName;Lt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(a!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Lt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Lt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=a}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};be.Composite=y0;be.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};be.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};be.prototype.GetterByBindingType=[be.prototype._getValue_direct,be.prototype._getValue_array,be.prototype._getValue_arrayElement,be.prototype._getValue_toArray];be.prototype.SetterByBindingTypeAndVersioning=[[be.prototype._setValue_direct,be.prototype._setValue_direct_setNeedsUpdate,be.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[be.prototype._setValue_array,be.prototype._setValue_array_setNeedsUpdate,be.prototype._setValue_array_setMatrixWorldNeedsUpdate],[be.prototype._setValue_arrayElement,be.prototype._setValue_arrayElement_setNeedsUpdate,be.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[be.prototype._setValue_fromArray,be.prototype._setValue_fromArray_setNeedsUpdate,be.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var HD=new Float32Array(1);var pb=new De,Pc=class{constructor(t,n,i=0,s=1/0){this.ray=new wc(t,n),this.near=i,this.far=s,this.camera=null,this.layers=new qo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,n){this.ray.set(t,n)}setFromCamera(t,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,n.projectionMatrix.elements[14]).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):Lt("Raycaster: Unsupported camera type: "+n.type)}setFromXRController(t){return pb.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(pb),this}intersectObject(t,n=!0,i=[]){return x0(t,this,i,n),i.sort(mb),i}intersectObjects(t,n=!0,i=[]){for(let s=0,a=t.length;s<a;s++)x0(t[s],this,i,n);return i.sort(mb),i}};function mb(e,t){return e.distance-t.distance}function x0(e,t,n,i){let s=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(s=!1),s===!0&&i===!0){let a=e.children;for(let r=0,o=a.length;r<o;r++)x0(a[r],t,n,!0)}}var S0=class{static{this.prototype.isMatrix2=!0}constructor(t,n,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,n,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,n=0){for(let i=0;i<4;i++)this.elements[i]=t[i+n];return this}set(t,n,i,s){let a=this.elements;return a[0]=t,a[2]=n,a[1]=i,a[3]=s,this}};function $0(e,t,n,i){let s=TR(i);switch(n){case G0:return e*t;case k0:return e*t/s.components*s.byteLength;case Jf:return e*t/s.components*s.byteLength;case Pa:return e*t*2/s.components*s.byteLength;case Kf:return e*t*2/s.components*s.byteLength;case V0:return e*t*3/s.components*s.byteLength;case Fi:return e*t*4/s.components*s.byteLength;case Qf:return e*t*4/s.components*s.byteLength;case Fc:case Hc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Gc:case Vc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case $f:case ed:return Math.max(e,16)*Math.max(t,8)/4;case jf:case td:return Math.max(e,8)*Math.max(t,8)/2;case nd:case id:case ad:case rd:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case sd:case kc:case od:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ld:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case cd:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case ud:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case hd:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case fd:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case dd:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case pd:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case md:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case gd:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case _d:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case vd:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case yd:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case xd:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Sd:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Md:case bd:case Td:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Ed:case Ad:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Xc:case wd:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function TR(e){switch(e){case oi:case B0:return{byteLength:1,components:1};case nl:case z0:case zi:return{byteLength:2,components:1};case Yf:case Zf:return{byteLength:2,components:4};case Pi:case qf:case Bi:return{byteLength:4,components:1};case F0:case H0:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Nt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function E1(){let e=null,t=!1,n=null,i=null;function s(a,r){i=e.requestAnimationFrame(s),n(a,r)}return{start:function(){t!==!0&&n!==null&&e!==null&&(i=e.requestAnimationFrame(s),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(a){n=a},setContext:function(a){e=a}}}function AR(e){let t=new WeakMap;function n(o,l){let c=o.array,f=o.usage,p=c.byteLength,u=e.createBuffer();e.bindBuffer(l,u),e.bufferData(l,c,f),o.onUploadCallback();let d;if(c instanceof Float32Array)d=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=e.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=e.HALF_FLOAT:d=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=e.SHORT;else if(c instanceof Uint32Array)d=e.UNSIGNED_INT;else if(c instanceof Int32Array)d=e.INT;else if(c instanceof Int8Array)d=e.BYTE;else if(c instanceof Uint8Array)d=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,l,c){let f=l.array,p=l.updateRanges;if(e.bindBuffer(c,o),p.length===0)e.bufferSubData(c,0,f);else{p.sort((d,v)=>d.start-v.start);let u=0;for(let d=1;d<p.length;d++){let v=p[u],b=p[d];b.start<=v.start+v.count+1?v.count=Math.max(v.count,b.start+b.count-v.start):(++u,p[u]=b)}p.length=u+1;for(let d=0,v=p.length;d<v;d++){let b=p[d];e.bufferSubData(c,b.start*f.BYTES_PER_ELEMENT,f,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let f=t.get(o);(!f||f.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:a,update:r}}var wR=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,RR=`#ifdef USE_ALPHAHASH
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
#endif`,CR=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,NR=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,DR=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,LR=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,UR=`#ifdef USE_AOMAP
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
#endif`,OR=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,IR=`#ifdef USE_BATCHING
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
#endif`,PR=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,BR=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zR=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,FR=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,HR=`#ifdef USE_IRIDESCENCE
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
#endif`,GR=`#ifdef USE_BUMPMAP
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
#endif`,VR=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,kR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,XR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,WR=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,YR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ZR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,JR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,KR=`#define PI 3.141592653589793
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
} // validated`,QR=`vec3 transformedNormal = objectNormal;
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
#endif`,jR=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$R=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tC=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,eC=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,nC="gl_FragColor = linearToOutputTexel( gl_FragColor );",iC=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sC=`#ifdef USE_ENVMAP
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
#endif`,aC=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,rC=`#ifdef USE_ENVMAP
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
#endif`,oC=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,lC=`#ifdef USE_ENVMAP
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
#endif`,cC=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,uC=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hC=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fC=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dC=`#ifdef USE_GRADIENTMAP
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
}`,pC=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mC=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gC=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_C=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,vC=`#ifdef USE_ENVMAP
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
#endif`,yC=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xC=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,SC=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,MC=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bC=`PhysicalMaterial material;
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
#endif`,TC=`uniform sampler2D dfgLUT;
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
}`,EC=`
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
#endif`,AC=`#if defined( RE_IndirectDiffuse )
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
#endif`,wC=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,RC=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,CC=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,NC=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,DC=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,LC=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,UC=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,OC=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,IC=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,PC=`#if defined( USE_POINTS_UV )
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
#endif`,BC=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zC=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,FC=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,HC=`#if defined( USE_MORPHCOLORS )
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
#endif`,GC=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,VC=`#ifdef USE_MORPHTARGETS
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
#endif`,kC=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,XC=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,WC=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,qC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,YC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ZC=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,JC=`#ifdef USE_NORMALMAP
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
#endif`,KC=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,QC=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jC=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$C=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,t3=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,e3=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,n3=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,i3=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,s3=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,a3=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,r3=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,o3=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,l3=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,c3=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,u3=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,h3=`float getShadowMask() {
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
}`,f3=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,d3=`#ifdef USE_SKINNING
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
#endif`,p3=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,m3=`#ifdef USE_SKINNING
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
#endif`,g3=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_3=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,v3=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,y3=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,x3=`#ifdef USE_TRANSMISSION
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
#endif`,S3=`#ifdef USE_TRANSMISSION
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
#endif`,M3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,b3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,T3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,E3=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,A3=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,w3=`uniform sampler2D t2D;
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
}`,R3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,C3=`uniform float backgroundBlurriness;
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
}`,N3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,D3=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,L3=`#include <common>
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
}`,U3=`#if DEPTH_PACKING == 3200
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
}`,O3=`#define DISTANCE
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
}`,I3=`#define DISTANCE
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
}`,P3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,B3=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,z3=`uniform float scale;
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
}`,F3=`uniform vec3 diffuse;
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
}`,H3=`#include <common>
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
}`,G3=`uniform vec3 diffuse;
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
}`,V3=`#define LAMBERT
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
}`,k3=`#define LAMBERT
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
}`,X3=`#define MATCAP
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
}`,W3=`#define MATCAP
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
}`,q3=`#define NORMAL
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
}`,Y3=`#define NORMAL
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
}`,Z3=`#define PHONG
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
}`,J3=`#define PHONG
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
}`,K3=`#define STANDARD
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
}`,Q3=`#define STANDARD
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
}`,j3=`#define TOON
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
}`,$3=`#define TOON
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
}`,t2=`uniform float size;
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
}`,e2=`uniform vec3 diffuse;
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
}`,n2=`#include <common>
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
}`,i2=`uniform vec3 color;
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
}`,s2=`uniform float rotation;
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
}`,a2=`uniform vec3 diffuse;
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
}`,Vt={alphahash_fragment:wR,alphahash_pars_fragment:RR,alphamap_fragment:CR,alphamap_pars_fragment:NR,alphatest_fragment:DR,alphatest_pars_fragment:LR,aomap_fragment:UR,aomap_pars_fragment:OR,batching_pars_vertex:IR,batching_vertex:PR,begin_vertex:BR,beginnormal_vertex:zR,bsdfs:FR,iridescence_fragment:HR,bumpmap_pars_fragment:GR,clipping_planes_fragment:VR,clipping_planes_pars_fragment:kR,clipping_planes_pars_vertex:XR,clipping_planes_vertex:WR,color_fragment:qR,color_pars_fragment:YR,color_pars_vertex:ZR,color_vertex:JR,common:KR,defaultnormal_vertex:QR,displacementmap_pars_vertex:jR,displacementmap_vertex:$R,emissivemap_fragment:tC,emissivemap_pars_fragment:eC,colorspace_fragment:nC,colorspace_pars_fragment:iC,envmap_fragment:sC,envmap_common_pars_fragment:aC,envmap_pars_fragment:rC,envmap_pars_vertex:oC,envmap_physical_pars_fragment:vC,envmap_vertex:lC,fog_vertex:cC,fog_pars_vertex:uC,fog_fragment:hC,fog_pars_fragment:fC,gradientmap_pars_fragment:dC,lightmap_pars_fragment:pC,lights_lambert_fragment:mC,lights_lambert_pars_fragment:gC,lights_pars_begin:_C,lights_toon_fragment:yC,lights_toon_pars_fragment:xC,lights_phong_fragment:SC,lights_phong_pars_fragment:MC,lights_physical_fragment:bC,lights_physical_pars_fragment:TC,lights_fragment_begin:EC,lights_fragment_maps:AC,lights_fragment_end:wC,lightprobes_pars_fragment:RC,logdepthbuf_fragment:CC,logdepthbuf_pars_fragment:NC,logdepthbuf_pars_vertex:DC,logdepthbuf_vertex:LC,map_fragment:UC,map_pars_fragment:OC,map_particle_fragment:IC,map_particle_pars_fragment:PC,metalnessmap_fragment:BC,metalnessmap_pars_fragment:zC,morphinstance_vertex:FC,morphcolor_vertex:HC,morphnormal_vertex:GC,morphtarget_pars_vertex:VC,morphtarget_vertex:kC,normal_fragment_begin:XC,normal_fragment_maps:WC,normal_pars_fragment:qC,normal_pars_vertex:YC,normal_vertex:ZC,normalmap_pars_fragment:JC,clearcoat_normal_fragment_begin:KC,clearcoat_normal_fragment_maps:QC,clearcoat_pars_fragment:jC,iridescence_pars_fragment:$C,opaque_fragment:t3,packing:e3,premultiplied_alpha_fragment:n3,project_vertex:i3,dithering_fragment:s3,dithering_pars_fragment:a3,roughnessmap_fragment:r3,roughnessmap_pars_fragment:o3,shadowmap_pars_fragment:l3,shadowmap_pars_vertex:c3,shadowmap_vertex:u3,shadowmask_pars_fragment:h3,skinbase_vertex:f3,skinning_pars_vertex:d3,skinning_vertex:p3,skinnormal_vertex:m3,specularmap_fragment:g3,specularmap_pars_fragment:_3,tonemapping_fragment:v3,tonemapping_pars_fragment:y3,transmission_fragment:x3,transmission_pars_fragment:S3,uv_pars_fragment:M3,uv_pars_vertex:b3,uv_vertex:T3,worldpos_vertex:E3,background_vert:A3,background_frag:w3,backgroundCube_vert:R3,backgroundCube_frag:C3,cube_vert:N3,cube_frag:D3,depth_vert:L3,depth_frag:U3,distance_vert:O3,distance_frag:I3,equirect_vert:P3,equirect_frag:B3,linedashed_vert:z3,linedashed_frag:F3,meshbasic_vert:H3,meshbasic_frag:G3,meshlambert_vert:V3,meshlambert_frag:k3,meshmatcap_vert:X3,meshmatcap_frag:W3,meshnormal_vert:q3,meshnormal_frag:Y3,meshphong_vert:Z3,meshphong_frag:J3,meshphysical_vert:K3,meshphysical_frag:Q3,meshtoon_vert:j3,meshtoon_frag:$3,points_vert:t2,points_frag:e2,shadow_vert:n2,shadow_frag:i2,sprite_vert:s2,sprite_frag:a2},mt={common:{diffuse:{value:new Qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ut}},envmap:{envMap:{value:null},envMapRotation:{value:new Ut},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ut},normalScale:{value:new $t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0},uvTransform:{value:new Ut}},sprite:{diffuse:{value:new Qt(16777215)},opacity:{value:1},center:{value:new $t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}}},ds={basic:{uniforms:Tn([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:Tn([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new Qt(0)},envMapIntensity:{value:1}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:Tn([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new Qt(0)},specular:{value:new Qt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:Tn([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new Qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:Tn([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new Qt(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:Tn([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:Tn([mt.points,mt.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:Tn([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:Tn([mt.common,mt.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:Tn([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:Tn([mt.sprite,mt.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ut}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distance:{uniforms:Tn([mt.common,mt.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distance_vert,fragmentShader:Vt.distance_frag},shadow:{uniforms:Tn([mt.lights,mt.fog,{color:{value:new Qt(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};ds.physical={uniforms:Tn([ds.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ut},clearcoatNormalScale:{value:new $t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ut},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ut},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ut},sheen:{value:0},sheenColor:{value:new Qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ut},transmissionSamplerSize:{value:new $t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ut},attenuationDistance:{value:0},attenuationColor:{value:new Qt(0)},specularColor:{value:new Qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ut},anisotropyVector:{value:new $t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ut}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};var Cd={r:0,b:0,g:0},r2=new De,A1=new Ut;A1.set(-1,0,0,0,1,0,0,0,1);function o2(e,t,n,i,s,a){let r=new Qt(0),o=s===!0?0:1,l,c,f=null,p=0,u=null;function d(m){let x=m.isScene===!0?m.background:null;if(x&&x.isTexture){let y=m.backgroundBlurriness>0;x=t.get(x,y)}return x}function v(m){let x=!1,y=d(m);y===null?g(r,o):y&&y.isColor&&(g(y,1),x=!0);let E=e.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function b(m,x){let y=d(x);y&&y.isCubeTexture?(c===void 0&&(c=new Ln(new Jo(1,1,1),new cs({name:"BackgroundCubeMaterial",uniforms:Tr(ds.backgroundCube.uniforms),vertexShader:ds.backgroundCube.vertexShader,fragmentShader:ds.backgroundCube.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,A,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(r2.makeRotationFromEuler(x.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(A1),c.material.toneMapped=Kt.getTransfer(y.colorSpace)!==oe,(f!==y||p!==y.version||u!==e.toneMapping)&&(c.material.needsUpdate=!0,f=y,p=y.version,u=e.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Ln(new ls(2,2),new cs({name:"BackgroundMaterial",uniforms:Tr(ds.background.uniforms),vertexShader:ds.background.vertexShader,fragmentShader:ds.background.fragmentShader,side:Ia,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=Kt.getTransfer(y.colorSpace)!==oe,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||p!==y.version||u!==e.toneMapping)&&(l.material.needsUpdate=!0,f=y,p=y.version,u=e.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function g(m,x){m.getRGB(Cd,K0(e)),n.buffers.color.setClear(Cd.r,Cd.g,Cd.b,x,a)}function h(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return r},setClearColor:function(m,x=1){r.set(m),o=x,g(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(m){o=m,g(r,o)},render:v,addToRenderList:b,dispose:h}}function l2(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},s=u(null),a=s,r=!1;function o(U,H,W,D,k){let Y=!1,I=p(U,D,W,H);a!==I&&(a=I,c(a.object)),Y=d(U,D,W,k),Y&&v(U,D,W,k),k!==null&&t.update(k,e.ELEMENT_ARRAY_BUFFER),(Y||r)&&(r=!1,y(U,H,W,D),k!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function l(){return e.createVertexArray()}function c(U){return e.bindVertexArray(U)}function f(U){return e.deleteVertexArray(U)}function p(U,H,W,D){let k=D.wireframe===!0,Y=i[H.id];Y===void 0&&(Y={},i[H.id]=Y);let I=U.isInstancedMesh===!0?U.id:0,tt=Y[I];tt===void 0&&(tt={},Y[I]=tt);let F=tt[W.id];F===void 0&&(F={},tt[W.id]=F);let J=F[k];return J===void 0&&(J=u(l()),F[k]=J),J}function u(U){let H=[],W=[],D=[];for(let k=0;k<n;k++)H[k]=0,W[k]=0,D[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:W,attributeDivisors:D,object:U,attributes:{},index:null}}function d(U,H,W,D){let k=a.attributes,Y=H.attributes,I=0,tt=W.getAttributes();for(let F in tt)if(tt[F].location>=0){let et=k[F],bt=Y[F];if(bt===void 0&&(F==="instanceMatrix"&&U.instanceMatrix&&(bt=U.instanceMatrix),F==="instanceColor"&&U.instanceColor&&(bt=U.instanceColor)),et===void 0||et.attribute!==bt||bt&&et.data!==bt.data)return!0;I++}return a.attributesNum!==I||a.index!==D}function v(U,H,W,D){let k={},Y=H.attributes,I=0,tt=W.getAttributes();for(let F in tt)if(tt[F].location>=0){let et=Y[F];et===void 0&&(F==="instanceMatrix"&&U.instanceMatrix&&(et=U.instanceMatrix),F==="instanceColor"&&U.instanceColor&&(et=U.instanceColor));let bt={};bt.attribute=et,et&&et.data&&(bt.data=et.data),k[F]=bt,I++}a.attributes=k,a.attributesNum=I,a.index=D}function b(){let U=a.newAttributes;for(let H=0,W=U.length;H<W;H++)U[H]=0}function g(U){h(U,0)}function h(U,H){let W=a.newAttributes,D=a.enabledAttributes,k=a.attributeDivisors;W[U]=1,D[U]===0&&(e.enableVertexAttribArray(U),D[U]=1),k[U]!==H&&(e.vertexAttribDivisor(U,H),k[U]=H)}function m(){let U=a.newAttributes,H=a.enabledAttributes;for(let W=0,D=H.length;W<D;W++)H[W]!==U[W]&&(e.disableVertexAttribArray(W),H[W]=0)}function x(U,H,W,D,k,Y,I){I===!0?e.vertexAttribIPointer(U,H,W,k,Y):e.vertexAttribPointer(U,H,W,D,k,Y)}function y(U,H,W,D){b();let k=D.attributes,Y=W.getAttributes(),I=H.defaultAttributeValues;for(let tt in Y){let F=Y[tt];if(F.location>=0){let J=k[tt];if(J===void 0&&(tt==="instanceMatrix"&&U.instanceMatrix&&(J=U.instanceMatrix),tt==="instanceColor"&&U.instanceColor&&(J=U.instanceColor)),J!==void 0){let et=J.normalized,bt=J.itemSize,Pt=t.get(J);if(Pt===void 0)continue;let K=Pt.buffer,gt=Pt.type,xt=Pt.bytesPerElement,wt=gt===e.INT||gt===e.UNSIGNED_INT||J.gpuType===qf;if(J.isInterleavedBufferAttribute){let _t=J.data,zt=_t.isInterleavedBuffer===!0?_t.stride:_t.itemSize,Pe=J.offset;if(_t.isInstancedInterleavedBuffer||_t.isInstancedBufferAttribute){for(let Ct=0;Ct<F.locationSize;Ct++)h(F.location+Ct,_t.meshPerAttribute);U.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let Ct=0;Ct<F.locationSize;Ct++)g(F.location+Ct);e.bindBuffer(e.ARRAY_BUFFER,K);for(let Ct=0;Ct<F.locationSize;Ct++)x(F.location+Ct,bt/F.locationSize,gt,et,zt*xt,(Pe+bt/F.locationSize*Ct)*xt,wt)}else{if(J.isInstancedBufferAttribute){for(let _t=0;_t<F.locationSize;_t++)h(F.location+_t,J.meshPerAttribute);U.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let _t=0;_t<F.locationSize;_t++)g(F.location+_t);e.bindBuffer(e.ARRAY_BUFFER,K);for(let _t=0;_t<F.locationSize;_t++)x(F.location+_t,bt/F.locationSize,gt,et,bt*xt,bt/F.locationSize*_t*xt,wt)}}else if(I!==void 0){let et=I[tt];if(et!==void 0)switch(et.length){case 2:e.vertexAttrib2fv(F.location,et);break;case 3:e.vertexAttrib3fv(F.location,et);break;case 4:e.vertexAttrib4fv(F.location,et);break;default:e.vertexAttrib1fv(F.location,et)}}}}m()}function E(){L();for(let U in i){let H=i[U];for(let W in H){let D=H[W];for(let k in D){let Y=D[k];for(let I in Y)f(Y[I].object),delete Y[I];delete D[k]}}delete i[U]}}function A(U){if(i[U.id]===void 0)return;let H=i[U.id];for(let W in H){let D=H[W];for(let k in D){let Y=D[k];for(let I in Y)f(Y[I].object),delete Y[I];delete D[k]}}delete i[U.id]}function _(U){for(let H in i){let W=i[H];for(let D in W){let k=W[D];if(k[U.id]===void 0)continue;let Y=k[U.id];for(let I in Y)f(Y[I].object),delete Y[I];delete k[U.id]}}}function T(U){for(let H in i){let W=i[H],D=U.isInstancedMesh===!0?U.id:0,k=W[D];if(k!==void 0){for(let Y in k){let I=k[Y];for(let tt in I)f(I[tt].object),delete I[tt];delete k[Y]}delete W[D],Object.keys(W).length===0&&delete i[H]}}}function L(){R(),r=!0,a!==s&&(a=s,c(a.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:L,resetDefaultState:R,dispose:E,releaseStatesOfGeometry:A,releaseStatesOfObject:T,releaseStatesOfProgram:_,initAttributes:b,enableAttribute:g,disableUnusedAttributes:m}}function c2(e,t,n){let i;function s(l){i=l}function a(l,c){e.drawArrays(i,l,c),n.update(c,i,1)}function r(l,c,f){f!==0&&(e.drawArraysInstanced(i,l,c,f),n.update(c,i,f))}function o(l,c,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,f);let u=0;for(let d=0;d<f;d++)u+=c[d];n.update(u,i,1)}this.setMode=s,this.render=a,this.renderInstances=r,this.renderMultiDraw=o}function u2(e,t,n,i){let s;function a(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let _=t.get("EXT_texture_filter_anisotropic");s=e.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(_){return!(_!==Fi&&i.convert(_)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){let T=_===zi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(_!==oi&&_!==Bi&&!T&&i.convert(_)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp",f=l(c);f!==c&&(Nt("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);let p=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=n.logarithmicDepthBuffer===!0&&p===!1;n.reversedDepthBuffer===!0&&p===!1&&Nt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),n.logarithmicDepthBuffer===!0&&p===!0&&Nt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),v=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),h=e.getParameter(e.MAX_VERTEX_ATTRIBS),m=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),x=e.getParameter(e.MAX_VARYING_VECTORS),y=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),E=e.getParameter(e.MAX_SAMPLES),A=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:p,maxTextures:d,maxVertexTextures:v,maxTextureSize:b,maxCubemapSize:g,maxAttributes:h,maxVertexUniforms:m,maxVaryings:x,maxFragmentUniforms:y,maxSamples:E,samples:A}}function h2(e){let t=this,n=null,i=0,s=!1,a=!1,r=new Ii,o=new Ut,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,u){let d=p.length!==0||u||i!==0||s;return s=u,i=p.length,d},this.beginShadows=function(){a=!0,f(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(p,u){n=f(p,u,0)},this.setState=function(p,u,d){let v=p.clippingPlanes,b=p.clipIntersection,g=p.clipShadows,h=e.get(p);if(!s||v===null||v.length===0||a&&!g)a?f(null):c();else{let m=a?0:i,x=m*4,y=h.clippingState||null;l.value=y,y=f(v,u,x,d);for(let E=0;E!==x;++E)y[E]=n[E];h.clippingState=y,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=m}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function f(p,u,d,v){let b=p!==null?p.length:0,g=null;if(b!==0){if(g=l.value,v!==!0||g===null){let h=d+b*4,m=u.matrixWorldInverse;o.getNormalMatrix(m),(g===null||g.length<h)&&(g=new Float32Array(h));for(let x=0,y=d;x!==b;++x,y+=4)r.copy(p[x]).applyMatrix4(m,o),r.normal.toArray(g,y),g[y+3]=r.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,g}}var Zc=class extends si{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Rc(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Jo(5,5,5),a=new cs({name:"CubemapFromEquirect",uniforms:Tr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Un,blending:xr});a.uniforms.tEquirect.value=n;let r=new Ln(s,a),o=n.minFilter;return n.minFilter===Gs&&(n.minFilter=an),new jo(1,10,this).update(t,r),n.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,n=!0,i=!0,s=!0){let a=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(n,i,s);t.setRenderTarget(a)}},s1=256,f2=3,d2=20,w1=256,R1=16,p2=3,m2=new V,g2=new Qt,Dd=class e{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new jo(1,10,null),this._boxMesh=new Ln(new Jo(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,n=0,i=.1,s=100,a={}){let{size:r=256,position:o=m2}=a,l=this._renderer;this._setSize(r);let c=this._allocateTarget(),f=this._getSourceTarget(!0);n>0&&(f.texture.mipmapsAutoUpdate=!1);let p=l.autoClear,u=l.autoClearColor,d=l.autoClearDepth,v=l.autoClearStencil,b=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,b===null&&(t.background=l.getClearColor(g2));let g=new jo(i,s,f);return g.position.copy(o),g.update(l,t),l.autoClear=p,l.autoClearColor=u,l.autoClearDepth=d,l.autoClearStencil=v,t.background=b,n>0&&(f.texture.mipmapsAutoUpdate=!0,this._blur(c,n)),this._applyPMREM(c),c}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=o1(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=r1(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,n){return n>0?1-Math.sqrt(1-t/n):0}_setSize(t){this._cubeSize=Math.max(s1,$b(t))}_fromTexture(t,n){t.mapping===Mr||t.mapping===el?this._setSize(t.image.length===0?s1:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let i=n||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(i),i}_allocateTarget(){let t=this._cubeSize,n=a1(t,!1,!1),i=Math.log2(t)-f2;for(let s=0;s<=i;s++)n.texture.mipmaps.push({width:t>>s,height:t>>s});return n.texture.name="PMREM",n.texture.isPMREMTexture=!0,n}_getSourceTarget(t=!1){let n=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==n||t&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=a1(n,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,n,i){let s=this._boxMesh,a=this._cubeCamera;s.material=i,a.renderTarget=t,a.activeMipmapLevel=n;let r=t.width>>n;t.viewport.set(0,0,r,r),a.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let n;t.mapping===Mr||t.mapping===el?(this._cubemapMaterial===null&&(this._cubemapMaterial=o1()),n=this._cubemapMaterial,n.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=r1()),n=this._equirectMaterial),n.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,n)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=_2(),this._integrationMaterial=v2());let n=this._cubeSize,i=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let a=this._integrationMaterial.uniforms;a.envMap.value=this._sourceTarget.texture,a.sourceLod.value=Math.log2(n/R1);for(let r=0;r<=i;r++){let o=e.lodToRoughness(r,i);if(r>i-p2)a.roughness.value=o,this._renderCube(t,r,this._integrationMaterial);else{let l=o>0?Math.log2(n)+.5*Math.log2(6/(w1*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(t,r,this._ggxMaterial)}}}_blur(t,n){this._blurMaterial===null&&(this._blurMaterial=y2());let i=this._blurMaterial,s=i.uniforms,a=this._sourceTarget;s.sigma.value=Math.min(n,Math.PI)/Math.SQRT2,s.envMap.value=a.texture,this._renderCube(t,0,i),s.envMap.value=t.texture,this._renderCube(a,0,i)}};function a1(e,t,n){return new Zc(e,{minFilter:Gs,generateMipmaps:t,type:zi,colorSpace:xc,depthBuffer:n})}function Jc(e,t,n){return new cs({name:e,uniforms:t,vertexShader:Vt.cube_vert,fragmentShader:n,side:Un,blending:xr,depthTest:!1,depthWrite:!1})}function _2(){return Jc("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${w1}u

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
	`)}function v2(){return Jc("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:R1}},`

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
	`)}function y2(){return Jc("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${d2}
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
	`)}function r1(){return Jc("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function o1(){return Jc("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function x2(e){let t=new WeakMap,n=new WeakMap,i=null;function s(u,d=!1){return u==null?null:d?r(u):a(u)}function a(u){if(u&&u.isTexture){let d=u.mapping;if(d===kf||d===Xf)if(t.has(u)){let v=t.get(u).texture;return o(v,u.mapping)}else{let v=u.image;if(v&&v.height>0){let b=new Zc(v.height);return b.fromEquirectangularTexture(e,u),t.set(u,b),u.addEventListener("dispose",c),o(b.texture,u.mapping)}else return null}}return u}function r(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let d=u.mapping,v=d===kf||d===Xf,b=d===Mr||d===el;if(v||b){let g=n.get(u),h=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==h)return i===null&&(i=new Dd(e)),g=v?i.fromEquirectangular(u,g):i.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,n.set(u,g),g.texture;if(g!==void 0)return g.texture;{let m=u.image;return v&&m&&m.height>0||b&&m&&l(m)?(i===null&&(i=new Dd(e)),g=v?i.fromEquirectangular(u):i.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,n.set(u,g),u.addEventListener("dispose",f),g.texture):null}}}return u}function o(u,d){return d===kf?u.mapping=Mr:d===Xf&&(u.mapping=el),u}function l(u){let d=0,v=6;for(let b=0;b<v;b++)u[b]!==void 0&&d++;return d===v}function c(u){let d=u.target;d.removeEventListener("dispose",c);let v=t.get(d);v!==void 0&&(t.delete(d),v.dispose())}function f(u){let d=u.target;d.removeEventListener("dispose",f);let v=n.get(d);v!==void 0&&(n.delete(d),v.dispose())}function p(){t=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:p}}function S2(e){let t={};function n(i){if(t[i]!==void 0)return t[i];let s=e.getExtension(i);return t[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let s=n(i);return s===null&&vc("WebGLRenderer: "+i+" extension not supported."),s}}}function M2(e,t,n,i){let s={},a=new WeakMap,r=new FinalizationRegistry(v=>delete s[v]);function o(v){l(v.target)}function l(v){v.index!==null&&t.remove(v.index);for(let g in v.attributes)t.remove(v.attributes[g]);v.removeEventListener("dispose",o),delete s[v.id],r.unregister(v);let b=a.get(v);b&&(t.remove(b),a.delete(v)),i.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,n.memory.geometries--}function c(v,b){return s[b.id]!==void 0||(b.addEventListener("dispose",o),s[b.id]=new WeakRef(b),r.register(b,b.id,b),n.memory.geometries++),b}function f(v){let b=v.attributes;for(let g in b)t.update(b[g],e.ARRAY_BUFFER)}function p(v){let b=v.index,g=v.attributes.position,h=0;if(g===void 0)return;let m=b!==null?b.array.length:g.array.length/3-1,x=g.count>=65535?Ac:Ec,y=new x(Math.ceil(m/3)*6,1),E=y.array;if(b!==null){let _=b.array;h=b.version;for(let T=0,L=0;T<m;T+=3){let R=_[T+0],U=_[T+1],H=_[T+2];E[L++]=R,E[L++]=U,E[L++]=U,E[L++]=H,E[L++]=H,E[L++]=R}}else{h=g.version;for(let _=0,T=0;_<m;_+=3){let L=_+0,R=_+1,U=_+2;E[T++]=L,E[T++]=R,E[T++]=R,E[T++]=U,E[T++]=U,E[T++]=L}}y.version=h;let A=a.get(v);A&&t.remove(A),a.set(v,y)}function u(v){let b=a.get(v);if(b){let g=v.index;g!==null&&b.version<g.version&&p(v)}else p(v);return a.get(v)}function d(){for(let v in s){let b=s[v].deref();b!==void 0&&l(b)}}return{get:c,update:f,getWireframeAttribute:u,dispose:d}}function b2(e,t,n){let i;function s(p){i=p}let a,r;function o(p){a=p.type,r=p.bytesPerElement}function l(p,u){e.drawElements(i,u,a,p*r),n.update(u,i,1)}function c(p,u,d){d!==0&&(e.drawElementsInstanced(i,u,a,p*r,d),n.update(u,i,d))}function f(p,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,a,p,0,d);let b=0;for(let g=0;g<d;g++)b+=u[g];n.update(b,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f}function T2(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,r,o){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=o*(a/3);break;case e.LINES:n.lines+=o*(a/2);break;case e.LINE_STRIP:n.lines+=o*(a-1);break;case e.LINE_LOOP:n.lines+=o*a;break;case e.POINTS:n.points+=o*a;break;default:Lt("WebGLInfo: Unknown draw mode:",r);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:s,update:i}}function E2(e,t,n){let i=new WeakMap,s=new Le;function a(r,o,l){let c=r.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=f!==void 0?f.length:0,u=i.get(o);if(u===void 0||u.count!==p){let L=function(){_.dispose(),i.delete(o),o.removeEventListener("dispose",L)};u!==void 0&&u.texture.dispose();let d=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,b=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],h=o.morphAttributes.normal||[],m=o.morphAttributes.color||[],x=0;d===!0&&(x=1),v===!0&&(x=2),b===!0&&(x=3);let y=o.attributes.position.count*x,E=1;y>t.maxTextureSize&&(E=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let A=new Float32Array(y*E*4*p),_=new bc(A,y,E,p);_.type=Bi,_.needsUpdate=!0;let T=x*4;for(let R=0;R<p;R++){let U=g[R],H=h[R],W=m[R],D=y*E*4*R;for(let k=0;k<U.count;k++){let Y=k*T;d===!0&&(s.fromBufferAttribute(U,k),A[D+Y+0]=s.x,A[D+Y+1]=s.y,A[D+Y+2]=s.z,A[D+Y+3]=0),v===!0&&(s.fromBufferAttribute(H,k),A[D+Y+4]=s.x,A[D+Y+5]=s.y,A[D+Y+6]=s.z,A[D+Y+7]=0),b===!0&&(s.fromBufferAttribute(W,k),A[D+Y+8]=s.x,A[D+Y+9]=s.y,A[D+Y+10]=s.z,A[D+Y+11]=W.itemSize===4?s.w:1)}}u={count:p,texture:_,size:new $t(y,E)},i.set(o,u),o.addEventListener("dispose",L)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",r.morphTexture,n);else{let d=0;for(let b=0;b<c.length;b++)d+=c[b];let v=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(e,"morphTargetBaseInfluence",v),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",u.texture,n),l.getUniforms().setValue(e,"morphTargetsTextureSize",u.size)}return{update:a}}function A2(e,t,n,i,s){let a=new WeakMap;function r(c){let f=s.render.frame,p=c.geometry,u=t.get(c,p);if(a.get(u)!==f&&(t.update(u),a.set(u,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),a.get(c)!==f&&(n.update(c.instanceMatrix,e.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,e.ARRAY_BUFFER),a.set(c,f))),c.isSkinnedMesh){let d=c.skeleton;a.get(d)!==f&&(d.update(),a.set(d,f))}return u}function o(){a=new WeakMap}function l(c){let f=c.target;f.removeEventListener("dispose",l),i.releaseStatesOfObject(f),n.remove(f.instanceMatrix),f.instanceColor!==null&&n.remove(f.instanceColor)}return{update:r,dispose:o}}var w2={[C0]:"LINEAR_TONE_MAPPING",[N0]:"REINHARD_TONE_MAPPING",[D0]:"CINEON_TONE_MAPPING",[L0]:"ACES_FILMIC_TONE_MAPPING",[O0]:"AGX_TONE_MAPPING",[I0]:"NEUTRAL_TONE_MAPPING",[U0]:"CUSTOM_TONE_MAPPING"};function R2(e,t,n,i,s,a){let r=new si(t,n,{type:e,depthBuffer:s,stencilBuffer:a,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,f=new Na;f.setAttribute("position",new Ti([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new Ti([0,2,0,0,2,0],2));let p=new wf({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new Ln(f,p),d=new Gf(-1,1,1,-1,0,1),v=null,b=null,g=!1,h,m=null,x=[],y=!1;this.setSize=function(E,A){r.setSize(E,A),o!==null&&o.setSize(E,A),l!==null&&l.setSize(E,A);for(let _=0;_<x.length;_++){let T=x[_];T.setSize&&T.setSize(E,A)}},this.setEffects=function(E){x=E,y=x.length>0&&x[0].isRenderPass===!0;let A=r.width,_=r.height;x.length>0&&o===null&&(o=new si(A,_,{type:zi,depthBuffer:!1,stencilBuffer:!1}),l=new si(A,_,{type:zi,depthBuffer:!1,stencilBuffer:!1}));let T=s===!0&&x.some(L=>L.needsDepthTexture===!0);T!==(r.depthTexture!==null)&&(T===!0&&c===null&&(c=new Hs(A,_),a===!0&&(c.format=Vs,c.type=br)),r.dispose(),r.depthTexture=T?c:null,r.resolveDepthBuffer=T,r.storeMultisampledDepthBuffer=T);for(let L=0;L<x.length;L++){let R=x[L];R.setSize&&R.setSize(A,_),T&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(c)}},this.begin=function(E,A){if(g||E.toneMapping===hs&&x.length===0)return!1;if(m=A,A!==null){let _=A.width,T=A.height;(r.width!==_||r.height!==T)&&this.setSize(_,T)}return y===!1&&E.setRenderTarget(r),h=E.toneMapping,E.toneMapping=hs,!0},this.hasRenderPass=function(){return y},this.end=function(E,A){E.toneMapping=h,g=!0;let _=r,T=o;for(let L=0;L<x.length;L++){let R=x[L];R.enabled!==!1&&(R.render(E,T,_,A),R.needsSwap!==!1&&(_=T,T=T===o?l:o))}if(v!==E.outputColorSpace||b!==E.toneMapping){v=E.outputColorSpace,b=E.toneMapping,p.defines={},Kt.getTransfer(v)===oe&&(p.defines.SRGB_TRANSFER="");let L=w2[b];L&&(p.defines[L]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=_.texture,E.setRenderTarget(m),E.render(u,d),m=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){r.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),f.dispose(),p.dispose()}}var C1=new bn,N1=new Hs(1,1),D1=new Nc(1),L1=new bc,U1=new Tf,O1=new Rc,l1=[],c1=[],u1=new Float32Array(16),h1=new Float32Array(9),f1=new Float32Array(4);function sl(e,t,n){let i=e[0];if(i<=0||i>0)return e;let s=t*n,a=l1[s];if(a===void 0&&(a=new Float32Array(s),l1[s]=a),t!==0){i.toArray(a,0);for(let r=1,o=0;r!==t;++r)o+=n,e[r].toArray(a,o)}return a}function Ye(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function Ze(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function Ud(e,t){let n=c1[t];n===void 0&&(n=new Int32Array(t),c1[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function C2(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function N2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ye(n,t))return;e.uniform2fv(this.addr,t),Ze(n,t)}}function D2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Ye(n,t))return;e.uniform3fv(this.addr,t),Ze(n,t)}}function L2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ye(n,t))return;e.uniform4fv(this.addr,t),Ze(n,t)}}function U2(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(Ye(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Ze(n,t)}else{if(Ye(n,i))return;f1.set(i),e.uniformMatrix2fv(this.addr,!1,f1),Ze(n,i)}}function O2(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(Ye(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Ze(n,t)}else{if(Ye(n,i))return;h1.set(i),e.uniformMatrix3fv(this.addr,!1,h1),Ze(n,i)}}function I2(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(Ye(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Ze(n,t)}else{if(Ye(n,i))return;u1.set(i),e.uniformMatrix4fv(this.addr,!1,u1),Ze(n,i)}}function P2(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function B2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ye(n,t))return;e.uniform2iv(this.addr,t),Ze(n,t)}}function z2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ye(n,t))return;e.uniform3iv(this.addr,t),Ze(n,t)}}function F2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ye(n,t))return;e.uniform4iv(this.addr,t),Ze(n,t)}}function H2(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function G2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ye(n,t))return;e.uniform2uiv(this.addr,t),Ze(n,t)}}function V2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ye(n,t))return;e.uniform3uiv(this.addr,t),Ze(n,t)}}function k2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ye(n,t))return;e.uniform4uiv(this.addr,t),Ze(n,t)}}function Od(e){return e.version===0&&(e.compareFunction=q0,e.needsUpdate=!0),e}function X2(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s);let a;this.type===e.SAMPLER_2D_SHADOW?a=Od(N1):a=C1,n.setTexture2D(t||a,s)}function W2(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(t||U1,s)}function q2(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s);let a;this.type===e.SAMPLER_CUBE_SHADOW?a=Od(D1):a=O1,n.setTextureCube(t||a,s)}function Y2(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(t||L1,s)}function Z2(e){switch(e){case 5126:return C2;case 35664:return N2;case 35665:return D2;case 35666:return L2;case 35674:return U2;case 35675:return O2;case 35676:return I2;case 5124:case 35670:return P2;case 35667:case 35671:return B2;case 35668:case 35672:return z2;case 35669:case 35673:return F2;case 5125:return H2;case 36294:return G2;case 36295:return V2;case 36296:return k2;case 35678:case 36198:case 36298:case 36306:case 35682:return X2;case 35679:case 36299:case 36307:return W2;case 35680:case 36300:case 36308:case 36293:return q2;case 36289:case 36303:case 36311:case 36292:return Y2}}function J2(e,t){e.uniform1fv(this.addr,t)}function K2(e,t){let n=sl(t,this.size,2);e.uniform2fv(this.addr,n)}function Q2(e,t){let n=sl(t,this.size,3);e.uniform3fv(this.addr,n)}function j2(e,t){let n=sl(t,this.size,4);e.uniform4fv(this.addr,n)}function $2(e,t){let n=sl(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function tN(e,t){let n=sl(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function eN(e,t){let n=sl(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function nN(e,t){e.uniform1iv(this.addr,t)}function iN(e,t){e.uniform2iv(this.addr,t)}function sN(e,t){e.uniform3iv(this.addr,t)}function aN(e,t){e.uniform4iv(this.addr,t)}function rN(e,t){e.uniform1uiv(this.addr,t)}function oN(e,t){e.uniform2uiv(this.addr,t)}function lN(e,t){e.uniform3uiv(this.addr,t)}function cN(e,t){e.uniform4uiv(this.addr,t)}function uN(e,t,n){let i=this.cache,s=t.length,a=Ud(n,s);Ye(i,a)||(e.uniform1iv(this.addr,a),Ze(i,a));let r;this.type===e.SAMPLER_2D_SHADOW?r=Od(N1):r=C1;for(let o=0;o!==s;++o)n.setTexture2D(t[o]||r,a[o])}function hN(e,t,n){let i=this.cache,s=t.length,a=Ud(n,s);Ye(i,a)||(e.uniform1iv(this.addr,a),Ze(i,a));for(let r=0;r!==s;++r)n.setTexture3D(t[r]||U1,a[r])}function fN(e,t,n){let i=this.cache,s=t.length,a=Ud(n,s);Ye(i,a)||(e.uniform1iv(this.addr,a),Ze(i,a));let r;this.type===e.SAMPLER_CUBE_SHADOW?r=Od(D1):r=O1;for(let o=0;o!==s;++o)n.setTextureCube(t[o]||r,a[o])}function dN(e,t,n){let i=this.cache,s=t.length,a=Ud(n,s);Ye(i,a)||(e.uniform1iv(this.addr,a),Ze(i,a));for(let r=0;r!==s;++r)n.setTexture2DArray(t[r]||L1,a[r])}function pN(e){switch(e){case 5126:return J2;case 35664:return K2;case 35665:return Q2;case 35666:return j2;case 35674:return $2;case 35675:return tN;case 35676:return eN;case 5124:case 35670:return nN;case 35667:case 35671:return iN;case 35668:case 35672:return sN;case 35669:case 35673:return aN;case 5125:return rN;case 36294:return oN;case 36295:return lN;case 36296:return cN;case 35678:case 36198:case 36298:case 36306:case 35682:return uN;case 35679:case 36299:case 36307:return hN;case 35680:case 36300:case 36308:case 36293:return fN;case 36289:case 36303:case 36311:case 36292:return dN}}var n_=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=Z2(n.type)}},i_=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=pN(n.type)}},s_=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){let s=this.seq;for(let a=0,r=s.length;a!==r;++a){let o=s[a];o.setValue(t,n[o.id],i)}}},t_=/(\w+)(\])?(\[|\.)?/g;function d1(e,t){e.seq.push(t),e.map[t.id]=t}function mN(e,t,n){let i=e.name,s=i.length;for(t_.lastIndex=0;;){let a=t_.exec(i),r=t_.lastIndex,o=a[1],l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===s){d1(n,c===void 0?new n_(o,e,t):new i_(o,e,t));break}else{let p=n.map[o];p===void 0&&(p=new s_(o),d1(n,p)),n=p}}}var il=class{constructor(t,n){this.seq=[],this.map={};let i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let o=t.getActiveUniform(n,r),l=t.getUniformLocation(n,o.name);mN(o,l,this)}let s=[],a=[];for(let r of this.seq)r.type===t.SAMPLER_2D_SHADOW||r.type===t.SAMPLER_CUBE_SHADOW||r.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(r):a.push(r);s.length>0&&(this.seq=s.concat(a))}setValue(t,n,i,s){let a=this.map[n];a!==void 0&&a.setValue(t,i,s)}setOptional(t,n,i){let s=n[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,n,i,s){for(let a=0,r=n.length;a!==r;++a){let o=n[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,n){let i=[];for(let s=0,a=t.length;s!==a;++s){let r=t[s];r.id in n&&i.push(r)}return i}};function p1(e,t,n){let i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}var gN=37297,_N=0;function vN(e,t){let n=e.split(`
`),i=[],s=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let r=s;r<a;r++){let o=r+1;i.push(`${o===t?">":" "} ${o}: ${n[r]}`)}return i.join(`
`)}var m1=new Ut;function yN(e){Kt._getMatrix(m1,Kt.workingColorSpace,e);let t=`mat3( ${m1.elements.map(n=>n.toFixed(4))} )`;switch(Kt.getTransfer(e)){case Sc:return[t,"LinearTransferOETF"];case oe:return[t,"sRGBTransferOETF"];default:return Nt("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function g1(e,t,n){let i=e.getShaderParameter(t,e.COMPILE_STATUS),a=(e.getShaderInfoLog(t)||"").trim();if(i&&a==="")return"";let r=/ERROR: 0:(\d+)/.exec(a);if(r){let o=parseInt(r[1]);return n.toUpperCase()+`

`+a+`

`+vN(e.getShaderSource(t),o)}else return a}function xN(e,t){let n=yN(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var SN={[C0]:"Linear",[N0]:"Reinhard",[D0]:"Cineon",[L0]:"ACESFilmic",[O0]:"AgX",[I0]:"Neutral",[U0]:"Custom"};function MN(e,t){let n=SN[t];return n===void 0?(Nt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var Nd=new V;function bN(){Kt.getLuminanceCoefficients(Nd);let e=Nd.x.toFixed(4),t=Nd.y.toFixed(4),n=Nd.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function TN(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Yc).join(`
`)}function EN(e){let t=[];for(let n in e){let i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function AN(e,t){let n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let a=e.getActiveAttrib(t,s),r=a.name,o=1;a.type===e.FLOAT_MAT2&&(o=2),a.type===e.FLOAT_MAT3&&(o=3),a.type===e.FLOAT_MAT4&&(o=4),n[r]={type:a.type,location:e.getAttribLocation(t,r),locationSize:o}}return n}function Yc(e){return e!==""}function _1(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function v1(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var wN=/^[ \t]*#include +<([\w\d./]+)>/gm;function a_(e){return e.replace(wN,RN)}function RN(e,t){let n=Vt[t];if(n===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return a_(n)}var CN=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function y1(e){return e.replace(CN,NN)}function NN(e,t,n,i){let s="";for(let a=parseInt(t);a<parseInt(n);a++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function x1(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`),t}var DN={[Bc]:"SHADOWMAP_TYPE_PCF",[$o]:"SHADOWMAP_TYPE_VSM"};function LN(e){return DN[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var UN={[el]:"ENVMAP_MODE_REFRACTION"};function ON(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":UN[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}var IN={[R0]:"ENVMAP_BLENDING_MULTIPLY",[Bb]:"ENVMAP_BLENDING_MIX",[zb]:"ENVMAP_BLENDING_ADD"};function PN(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":IN[e.combine]||"ENVMAP_BLENDING_NONE"}function BN(e,t,n,i){let s=e.getContext(),a=n.defines,r=n.vertexShader,o=n.fragmentShader,l=LN(n),c=n.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",f=ON(n),p=PN(n),u=TN(n),d=EN(a),v=s.createProgram(),b,g,h=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(b=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,d].filter(Yc).join(`
`),b.length>0&&(b+=`
`),g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,d].filter(Yc).join(`
`),g.length>0&&(g+=`
`)):(b=[x1(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,d,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+n.diffuseRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yc).join(`
`),g=[x1(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,d,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+p:"",n.envMapPMREM?"#define ENVMAP_MAX_LOD "+n.envMapMaxLod+".0":"",n.envMapPMREM?"#define ENVMAP_SIZE "+n.envMapSize+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",n.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==hs?"#define TONE_MAPPING":"",n.toneMapping!==hs?Vt.tonemapping_pars_fragment:"",n.toneMapping!==hs?MN("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,xN("linearToOutputTexel",n.outputColorSpace),bN(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Yc).join(`
`)),r=a_(r),r=_1(r,n),r=v1(r,n),o=a_(o),o=_1(o,n),o=v1(o,n),r=y1(r),o=y1(o),n.isRawShaderMaterial!==!0&&(h=`#version 300 es
`,b=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,g=["#define varying in",n.glslVersion===Y0?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Y0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let m=h+b+r,x=h+g+o,y=p1(s,s.VERTEX_SHADER,m),E=p1(s,s.FRAGMENT_SHADER,x);s.attachShader(v,y),s.attachShader(v,E),n.index0AttributeName!==void 0?s.bindAttribLocation(v,0,n.index0AttributeName):n.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function A(R){if(e.debug.checkShaderErrors){let U=s.getProgramInfoLog(v)||"",H=s.getShaderInfoLog(y)||"",W=s.getShaderInfoLog(E)||"",D=U.trim(),k=H.trim(),Y=W.trim(),I=!0,tt=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(I=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(s,v,y,E);else{let F=g1(s,y,"vertex"),J=g1(s,E,"fragment");Lt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+D+`
`+F+`
`+J)}else D!==""?Nt("WebGLProgram: Program Info Log:",D):(k===""||Y==="")&&(tt=!1);tt&&(R.diagnostics={runnable:I,programLog:D,vertexShader:{log:k,prefix:b},fragmentShader:{log:Y,prefix:g}})}s.deleteShader(y),s.deleteShader(E),_=new il(s,v),T=AN(s,v)}let _;this.getUniforms=function(){return _===void 0&&A(this),_};let T;this.getAttributes=function(){return T===void 0&&A(this),T};let L=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=s.getProgramParameter(v,gN)),L},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=_N++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=y,this.fragmentShader=E,this}var zN=0,r_=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,n,i){let s=this._getShaderCacheForMaterial(t);return s.has(n)===!1&&(s.add(n),n.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let n=this.materialCache.get(t);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let n=this.materialCache,i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){let n=this.shaderCache,i=n.get(t);return i===void 0&&(i=new o_(t),n.set(t,i)),i}},o_=class{constructor(t){this.id=zN++,this.code=t,this.usedTimes=0}};function FN(e){return e===Pa||e===kc||e===Xc}function HN(e,t,n,i,s,a){let r=new qo,o=new r_,l=new Set,c=[],f=new Map,p=i.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(_){return l.add(_),_===0?"uv":`uv${_}`}function v(_,T,L,R,U,H){let W=R.fog,D=U.geometry,k=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?R.environment:null,Y=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,I=t.get(_.envMap||k,Y),tt=u[_.type],F=i.precision;_.precision!==null&&(F=i.getMaxPrecision(_.precision),F!==_.precision&&Nt("WebGLProgram.getParameters:",_.precision,"not supported, using",F,"instead."));let J=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,et=J!==void 0?J.length:0,bt=0;D.morphAttributes.position!==void 0&&(bt=1),D.morphAttributes.normal!==void 0&&(bt=2),D.morphAttributes.color!==void 0&&(bt=3);let Pt,K,gt,xt;if(tt){let pt=ds[tt];Pt=pt.vertexShader,K=pt.fragmentShader}else{Pt=_.vertexShader,K=_.fragmentShader;let pt=o.getVertexShaderStage(_),ce=o.getFragmentShaderStage(_);o.update(_,pt,ce),gt=pt.id,xt=ce.id}let wt=e.getRenderTarget(),_t=e.state.buffers.depth.getReversed(),zt=U.isInstancedMesh===!0,Pe=U.isBatchedMesh===!0,Ct=!!_.map,le=!!_.matcap,pe=!!I,qt=pe&&I.isPMREMTexture===!0,rn=!!_.aoMap,Ve=!!_.lightMap,In=!!_.bumpMap&&_.wireframe===!1,Re=!!_.normalMap,Hi=!!_.displacementMap,Je=!!_.emissiveMap,li=!!_.metalnessMap,ci=!!_.roughnessMap,ui=_.anisotropy>0,O=_.clearcoat>0,hi=_.diffuseRoughness>0,Te=_.dispersion>0,Ee=_.retroreflectivity>0,dt=_.iridescence>0,ke=_.sheen>0,Rt=_.transmission>0,Ot=ui&&!!_.anisotropyMap,w=O&&!!_.clearcoatMap,S=O&&!!_.clearcoatNormalMap,B=O&&!!_.clearcoatRoughnessMap,it=hi&&!!_.diffuseRoughnessMap,$=dt&&!!_.iridescenceMap,rt=dt&&!!_.iridescenceThicknessMap,ht=ke&&!!_.sheenColorMap,q=ke&&!!_.sheenRoughnessMap,Z=!!_.specularMap,lt=!!_.specularColorMap,C=!!_.specularIntensityMap,Q=Rt&&!!_.transmissionMap,X=Rt&&!!_.thicknessMap,ct=!!_.gradientMap,at=!!_.alphaMap,ot=_.alphaTest>0,Et=!!_.alphaHash,Gt=!!_.extensions,st=hs;_.toneMapped&&(wt===null||wt.isXRRenderTarget===!0)&&(st=e.toneMapping);let At=qt?I.isCompressedCubeTexture?I.image[0].mipmaps:I.mipmaps:null,Ht={shaderID:tt,shaderType:_.type,shaderName:_.name,vertexShader:Pt,fragmentShader:K,defines:_.defines,customVertexShaderID:gt,customFragmentShaderID:xt,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:F,batching:Pe,batchingColor:Pe&&U._colorsTexture!==null,instancing:zt,instancingColor:zt&&U.instanceColor!==null,instancingMorph:zt&&U.morphTexture!==null,outputColorSpace:wt===null?e.outputColorSpace:wt.isXRRenderTarget===!0?wt.texture.colorSpace:Kt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Ct,matcap:le,envMap:pe,envMapMode:pe&&I.mapping,envMapPMREM:qt,envMapMaxLod:qt?At.length-1:null,envMapSize:qt?At[0].width:null,aoMap:rn,lightMap:Ve,bumpMap:In,normalMap:Re,displacementMap:Hi,emissiveMap:Je,normalMapObjectSpace:Re&&_.normalMapType===Gb,normalMapTangentSpace:Re&&_.normalMapType===Rd,packedNormalMap:Re&&_.normalMapType===Rd&&FN(_.normalMap.format),metalnessMap:li,roughnessMap:ci,anisotropy:ui,anisotropyMap:Ot,clearcoat:O,clearcoatMap:w,clearcoatNormalMap:S,clearcoatRoughnessMap:B,diffuseRoughness:hi,diffuseRoughnessMap:it,dispersion:Te,retroreflection:Ee,iridescence:dt,iridescenceMap:$,iridescenceThicknessMap:rt,sheen:ke,sheenColorMap:ht,sheenRoughnessMap:q,specularMap:Z,specularColorMap:lt,specularIntensityMap:C,transmission:Rt,transmissionMap:Q,thicknessMap:X,gradientMap:ct,opaque:_.transparent===!1&&_.blending===tl&&_.alphaToCoverage===!1,alphaMap:at,alphaTest:ot,alphaHash:Et,combine:_.combine,mapUv:Ct&&d(_.map.channel),aoMapUv:rn&&d(_.aoMap.channel),lightMapUv:Ve&&d(_.lightMap.channel),bumpMapUv:In&&d(_.bumpMap.channel),normalMapUv:Re&&d(_.normalMap.channel),displacementMapUv:Hi&&d(_.displacementMap.channel),emissiveMapUv:Je&&d(_.emissiveMap.channel),metalnessMapUv:li&&d(_.metalnessMap.channel),roughnessMapUv:ci&&d(_.roughnessMap.channel),anisotropyMapUv:Ot&&d(_.anisotropyMap.channel),clearcoatMapUv:w&&d(_.clearcoatMap.channel),clearcoatNormalMapUv:S&&d(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:B&&d(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:it&&d(_.diffuseRoughnessMap.channel),iridescenceMapUv:$&&d(_.iridescenceMap.channel),iridescenceThicknessMapUv:rt&&d(_.iridescenceThicknessMap.channel),sheenColorMapUv:ht&&d(_.sheenColorMap.channel),sheenRoughnessMapUv:q&&d(_.sheenRoughnessMap.channel),specularMapUv:Z&&d(_.specularMap.channel),specularColorMapUv:lt&&d(_.specularColorMap.channel),specularIntensityMapUv:C&&d(_.specularIntensityMap.channel),transmissionMapUv:Q&&d(_.transmissionMap.channel),thicknessMapUv:X&&d(_.thicknessMap.channel),alphaMapUv:at&&d(_.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(Re||ui),vertexNormals:!!D.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!D.attributes.uv&&(Ct||at),fog:!!W,useFog:_.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||D.attributes.normal===void 0&&Re===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:_t,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:D.attributes.position!==void 0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:et,morphTextureStride:bt,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:H.filter(pt=>pt.texture!==null).length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:e.shadowMap.enabled&&L.length>0,shadowMapType:e.shadowMap.type,toneMapping:st,decodeVideoTexture:Ct&&_.map.isVideoTexture===!0&&Kt.getTransfer(_.map.colorSpace)===oe,decodeVideoTextureEmissive:Je&&_.emissiveMap.isVideoTexture===!0&&Kt.getTransfer(_.emissiveMap.colorSpace)===oe,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===us,flipSided:_.side===Un,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Gt&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Gt&&_.extensions.multiDraw===!0||Pe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ht.vertexUv1s=l.has(1),Ht.vertexUv2s=l.has(2),Ht.vertexUv3s=l.has(3),l.clear(),Ht}function b(_){let T=[];if(_.shaderID?T.push(_.shaderID):(T.push(_.customVertexShaderID),T.push(_.customFragmentShaderID)),_.defines!==void 0)for(let L in _.defines)T.push(L),T.push(_.defines[L]);return _.isRawShaderMaterial===!1&&(g(T,_),h(T,_),T.push(e.outputColorSpace)),T.push(_.customProgramCacheKey),T.join()}function g(_,T){_.push(T.precision),_.push(T.outputColorSpace),_.push(T.envMapMode),_.push(T.envMapPMREM),_.push(T.envMapMaxLod),_.push(T.envMapSize),_.push(T.mapUv),_.push(T.alphaMapUv),_.push(T.lightMapUv),_.push(T.aoMapUv),_.push(T.bumpMapUv),_.push(T.normalMapUv),_.push(T.displacementMapUv),_.push(T.emissiveMapUv),_.push(T.metalnessMapUv),_.push(T.roughnessMapUv),_.push(T.anisotropyMapUv),_.push(T.clearcoatMapUv),_.push(T.clearcoatNormalMapUv),_.push(T.clearcoatRoughnessMapUv),_.push(T.diffuseRoughnessMapUv),_.push(T.iridescenceMapUv),_.push(T.iridescenceThicknessMapUv),_.push(T.sheenColorMapUv),_.push(T.sheenRoughnessMapUv),_.push(T.specularMapUv),_.push(T.specularColorMapUv),_.push(T.specularIntensityMapUv),_.push(T.transmissionMapUv),_.push(T.thicknessMapUv),_.push(T.combine),_.push(T.fogExp2),_.push(T.sizeAttenuation),_.push(T.morphTargetsCount),_.push(T.numSunLights),_.push(T.numDirLights),_.push(T.numPointLights),_.push(T.numSpotLights),_.push(T.numSpotLightMaps),_.push(T.numHemiLights),_.push(T.numRectAreaLights),_.push(T.numSunLightShadows),_.push(T.numDirLightShadows),_.push(T.numPointLightShadows),_.push(T.numSpotLightShadows),_.push(T.numSpotLightShadowsWithMaps),_.push(T.numLightProbes),_.push(T.numLightProbeGrids),_.push(T.shadowMapType),_.push(T.toneMapping),_.push(T.numClippingPlanes),_.push(T.numClipIntersection),_.push(T.depthPacking)}function h(_,T){r.disableAll(),T.instancing&&r.enable(0),T.instancingColor&&r.enable(1),T.instancingMorph&&r.enable(2),T.matcap&&r.enable(3),T.envMap&&r.enable(4),T.normalMapObjectSpace&&r.enable(5),T.normalMapTangentSpace&&r.enable(6),T.clearcoat&&r.enable(7),T.iridescence&&r.enable(8),T.alphaTest&&r.enable(9),T.vertexColors&&r.enable(10),T.vertexAlphas&&r.enable(11),T.vertexUv1s&&r.enable(12),T.vertexUv2s&&r.enable(13),T.vertexUv3s&&r.enable(14),T.vertexTangents&&r.enable(15),T.anisotropy&&r.enable(16),T.alphaHash&&r.enable(17),T.batching&&r.enable(18),T.dispersion&&r.enable(19),T.retroreflection&&r.enable(24),T.diffuseRoughness&&r.enable(25),T.batchingColor&&r.enable(20),T.gradientMap&&r.enable(21),T.packedNormalMap&&r.enable(22),T.vertexNormals&&r.enable(23),_.push(r.mask),r.disableAll(),T.fog&&r.enable(0),T.useFog&&r.enable(1),T.flatShading&&r.enable(2),T.logarithmicDepthBuffer&&r.enable(3),T.reversedDepthBuffer&&r.enable(4),T.skinning&&r.enable(5),T.morphTargets&&r.enable(6),T.morphNormals&&r.enable(7),T.morphColors&&r.enable(8),T.premultipliedAlpha&&r.enable(9),T.shadowMapEnabled&&r.enable(10),T.doubleSided&&r.enable(11),T.flipSided&&r.enable(12),T.useDepthPacking&&r.enable(13),T.dithering&&r.enable(14),T.transmission&&r.enable(15),T.sheen&&r.enable(16),T.opaque&&r.enable(17),T.pointsUvs&&r.enable(18),T.decodeVideoTexture&&r.enable(19),T.decodeVideoTextureEmissive&&r.enable(20),T.alphaToCoverage&&r.enable(21),T.numLightProbeGrids>0&&r.enable(22),T.hasPositionAttribute&&r.enable(23),_.push(r.mask)}function m(_){let T=u[_.type],L;if(T){let R=ds[T];L=e1.clone(R.uniforms)}else L=_.uniforms;return L}function x(_,T){let L=f.get(T);return L!==void 0?++L.usedTimes:(L=new BN(e,T,_,s),c.push(L),f.set(T,L)),L}function y(_){if(--_.usedTimes===0){let T=c.indexOf(_);c[T]=c[c.length-1],c.pop(),f.delete(_.cacheKey),_.destroy()}}function E(_){o.remove(_)}function A(){o.dispose()}return{getParameters:v,getProgramCacheKey:b,getUniforms:m,acquireProgram:x,releaseProgram:y,releaseShaderCache:E,programs:c,dispose:A}}function GN(){let e=new WeakMap;function t(r){return e.has(r)}function n(r){let o=e.get(r);return o===void 0&&(o={},e.set(r,o)),o}function i(r){e.delete(r)}function s(r,o,l){e.get(r)[o]=l}function a(){e=new WeakMap}return{has:t,get:n,remove:i,update:s,dispose:a}}function VN(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function S1(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function M1(){let e=[],t=0,n=[],i=[],s=[];function a(){t=0,n.length=0,i.length=0,s.length=0}function r(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function o(u,d,v,b,g,h){let m=e[t];return m===void 0?(m={id:u.id,object:u,geometry:d,material:v,materialVariant:r(u),groupOrder:b,renderOrder:u.renderOrder,z:g,group:h},e[t]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=v,m.materialVariant=r(u),m.groupOrder=b,m.renderOrder=u.renderOrder,m.z=g,m.group=h),t++,m}function l(u,d,v,b,g,h,m){m.reversedDepth===!0&&(g=-g);let x=o(u,d,v,b,g,h);v.transmission>0?i.push(x):v.transparent===!0?s.push(x):n.push(x)}function c(u,d,v,b,g,h){let m=o(u,d,v,b,g,h);v.transmission>0?i.unshift(m):v.transparent===!0?s.unshift(m):n.unshift(m)}function f(u,d){n.length>1&&n.sort(u||VN),i.length>1&&i.sort(d||S1),s.length>1&&s.sort(d||S1)}function p(){for(let u=t,d=e.length;u<d;u++){let v=e[u];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:n,transmissive:i,transparent:s,init:a,push:l,unshift:c,finish:p,sort:f}}function kN(){let e=new WeakMap;function t(i,s){let a=e.get(i),r;return a===void 0?(r=new M1,e.set(i,[r])):s>=a.length?(r=new M1,a.push(r)):r=a[s],r}function n(){e=new WeakMap}return{get:t,dispose:n}}function XN(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"SunLight":case"DirectionalLight":n={direction:new V,color:new Qt};break;case"SpotLight":n={position:new V,direction:new V,color:new Qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new V,color:new Qt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new V,skyColor:new Qt,groundColor:new Qt};break;case"RectAreaLight":n={color:new Qt,position:new V,halfWidth:new V,halfHeight:new V};break}return e[t.id]=n,n}}}function WN(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}var qN=0;function YN(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function ZN(e){let t=new XN,n=WN(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new V);let s=new V,a=new De,r=new De;function o(c){let f=0,p=0,u=0;for(let H=0;H<9;H++)i.probe[H].set(0,0,0);let d=0,v=0,b=0,g=0,h=0,m=0,x=0,y=0,E=0,A=0,_=0,T=0,L=0,R=0;c.sort(YN);for(let H=0,W=c.length;H<W;H++){let D=c[H],k=D.color,Y=D.intensity,I=D.distance,tt=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Pa?tt=D.shadow.map.texture:tt=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)f+=k.r*Y,p+=k.g*Y,u+=k.b*Y;else if(D.isLightProbe){for(let F=0;F<9;F++)i.probe[F].addScaledVector(D.sh.coefficients[F],Y);R++}else if(D.isSunLight){let F=t.get(D);if(F.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let J=D.shadow,et=n.get(D);et.shadowIntensity=J.intensity,et.shadowBias=J.bias,et.shadowNormalBias=J.normalBias,et.shadowRadius=J.radius,et.shadowMapSize.copy(J.mapSize).multiply(J.getFrameExtents()),i.sunShadow[v]=et,i.sunShadowMap[v]=tt;let bt=J.getViewportCount();for(let Pt=0;Pt<bt;Pt++)i.sunShadowMatrix[b+Pt]=J.getMatrix(Pt),i.sunShadowCascade[b+Pt]=J._cascadeData[Pt];b+=bt,v++}i.sun[d]=F,d++}else if(D.isDirectionalLight){let F=t.get(D);if(F.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let J=D.shadow,et=n.get(D);et.shadowIntensity=J.intensity,et.shadowBias=J.bias,et.shadowNormalBias=J.normalBias,et.shadowRadius=J.radius,et.shadowMapSize=J.mapSize,i.directionalShadow[g]=et,i.directionalShadowMap[g]=tt,i.directionalShadowMatrix[g]=D.shadow.matrix,E++}i.directional[g]=F,g++}else if(D.isSpotLight){let F=t.get(D);F.position.setFromMatrixPosition(D.matrixWorld),F.color.copy(k).multiplyScalar(Y),F.distance=I,F.coneCos=Math.cos(D.angle),F.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),F.decay=D.decay,i.spot[m]=F;let J=D.shadow;if(D.map&&(i.spotLightMap[T]=D.map,T++,J.updateMatrices(D),D.castShadow&&L++),i.spotLightMatrix[m]=J.matrix,D.castShadow){let et=n.get(D);et.shadowIntensity=J.intensity,et.shadowBias=J.bias,et.shadowNormalBias=J.normalBias,et.shadowRadius=J.radius,et.shadowMapSize=J.mapSize,i.spotShadow[m]=et,i.spotShadowMap[m]=tt,_++}m++}else if(D.isRectAreaLight){let F=t.get(D);F.color.copy(k).multiplyScalar(Y),F.halfWidth.set(D.width*.5,0,0),F.halfHeight.set(0,D.height*.5,0),i.rectArea[x]=F,x++}else if(D.isPointLight){let F=t.get(D);if(F.color.copy(D.color).multiplyScalar(D.intensity),F.distance=D.distance,F.decay=D.decay,D.castShadow){let J=D.shadow,et=n.get(D);et.shadowIntensity=J.intensity,et.shadowBias=J.bias,et.shadowNormalBias=J.normalBias,et.shadowRadius=J.radius,et.shadowMapSize=J.mapSize,et.shadowCameraNear=J.camera.near,et.shadowCameraFar=J.camera.far,i.pointShadow[h]=et,i.pointShadowMap[h]=tt,i.pointShadowMatrix[h]=D.shadow.matrix,A++}i.point[h]=F,h++}else if(D.isHemisphereLight){let F=t.get(D);F.skyColor.copy(D.color).multiplyScalar(Y),F.groundColor.copy(D.groundColor).multiplyScalar(Y),i.hemi[y]=F,y++}}x>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=mt.LTC_FLOAT_1,i.rectAreaLTC2=mt.LTC_FLOAT_2):(i.rectAreaLTC1=mt.LTC_HALF_1,i.rectAreaLTC2=mt.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=p,i.ambient[2]=u;let U=i.hash;(U.sunLength!==d||U.directionalLength!==g||U.pointLength!==h||U.spotLength!==m||U.rectAreaLength!==x||U.hemiLength!==y||U.numSunShadows!==v||U.numDirectionalShadows!==E||U.numPointShadows!==A||U.numSpotShadows!==_||U.numSpotMaps!==T||U.numLightProbes!==R)&&(i.sun.length=d,i.directional.length=g,i.spot.length=m,i.rectArea.length=x,i.point.length=h,i.hemi.length=y,i.sunShadow.length=v,i.sunShadowMap.length=v,i.sunShadowMatrix.length=b,i.sunShadowCascade.length=b,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.directionalShadowMatrix.length=E,i.pointShadow.length=A,i.pointShadowMap.length=A,i.pointShadowMatrix.length=A,i.spotShadow.length=_,i.spotShadowMap.length=_,i.spotLightMatrix.length=_+T-L,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=R,U.sunLength=d,U.directionalLength=g,U.pointLength=h,U.spotLength=m,U.rectAreaLength=x,U.hemiLength=y,U.numSunShadows=v,U.numDirectionalShadows=E,U.numPointShadows=A,U.numSpotShadows=_,U.numSpotMaps=T,U.numLightProbes=R,i.version=qN++)}function l(c,f){let p=0,u=0,d=0,v=0,b=0,g=0,h=f.matrixWorldInverse;for(let m=0,x=c.length;m<x;m++){let y=c[m];if(y.isSunLight){let E=i.sun[p];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(h),p++}else if(y.isDirectionalLight){let E=i.directional[u];E.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(h),u++}else if(y.isSpotLight){let E=i.spot[v];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(h),E.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(h),v++}else if(y.isRectAreaLight){let E=i.rectArea[b];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(h),r.identity(),a.copy(y.matrixWorld),a.premultiply(h),r.extractRotation(a),E.halfWidth.set(y.width*.5,0,0),E.halfHeight.set(0,y.height*.5,0),E.halfWidth.applyMatrix4(r),E.halfHeight.applyMatrix4(r),b++}else if(y.isPointLight){let E=i.point[d];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(h),d++}else if(y.isHemisphereLight){let E=i.hemi[g];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(h),g++}}}return{setup:o,setupView:l,state:i}}function b1(e){let t=new ZN(e),n=[],i=[],s=[];function a(p){f.camera=p,n.length=0,i.length=0,s.length=0}function r(p){p.isLightProbeGrid?s.push(p):n.push(p)}function o(p){i.push(p)}function l(){t.setup(n),s.sort((p,u)=>p.priority-u.priority||p.id-u.id)}function c(p){t.setupView(n,p)}let f={lightsArray:n,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:f,setupLights:l,setupLightsView:c,pushLight:r,pushShadow:o}}function JN(e){let t=new WeakMap;function n(s,a=0){let r=t.get(s),o;return r===void 0?(o=new b1(e),t.set(s,[o])):a>=r.length?(o=new b1(e),r.push(o)):o=r[a],o}function i(){t=new WeakMap}return{get:n,dispose:i}}var KN=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,QN=`uniform sampler2D shadow_pass;
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
}`,jN=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],$N=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],T1=new De,qc=new V,e_=new V;function tD(e,t,n){let i=new yr,s=new $t,a=new $t,r=new Le,o=new Rf,l=new Cf,c={},f=n.maxTextureSize,p={[Ia]:Un,[Un]:Ia,[us]:us},u=new cs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $t},radius:{value:4}},vertexShader:KN,fragmentShader:QN}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let v=new Na;v.setAttribute("position",new as(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new Ln(v,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bc;let h=this.type;this.render=function(A,_,T){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;this.type===vb&&(Nt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Bc);let L=e.getRenderTarget(),R=e.getActiveCubeFace(),U=e.getActiveMipmapLevel(),H=e.state;H.setBlending(xr),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let W=h!==this.type;W&&_.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(k=>k.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,k=A.length;D<k;D++){let Y=A[D],I=Y.shadow;if(I===void 0){Nt("WebGLShadowMap:",Y,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;s.copy(I.mapSize);let tt=I.getFrameExtents();s.multiply(tt),a.copy(I.mapSize),(s.x>f||s.y>f)&&(s.x>f&&(a.x=Math.floor(f/tt.x),s.x=a.x*tt.x,I.mapSize.x=a.x),s.y>f&&(a.y=Math.floor(f/tt.y),s.y=a.y*tt.y,I.mapSize.y=a.y));let F=e.state.buffers.depth.getReversed();if(I.camera._reversedDepth=F,I.map===null||W===!0){if(I.map!==null&&(I.map.depthTexture!==null&&(I.map.depthTexture.dispose(),I.map.depthTexture=null),I.map.dispose()),this.type===$o){if(Y.isPointLight){Nt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}I.map=new si(s.x,s.y,{format:Pa,type:zi,minFilter:an,magFilter:an,generateMipmaps:!1}),I.map.texture.name=Y.name+".shadowMap",I.map.depthTexture=new Hs(s.x,s.y,Bi),I.map.depthTexture.name=Y.name+".shadowMapDepth",I.map.depthTexture.format=zs,I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=sn,I.map.depthTexture.magFilter=sn}else Y.isPointLight?(I.map=new Zc(s.x),I.map.depthTexture=new Nc(s.x,Pi)):(I.map=new si(s.x,s.y),I.map.depthTexture=new Hs(s.x,s.y,Pi)),I.map.depthTexture.name=Y.name+".shadowMap",I.map.depthTexture.format=zs,this.type===Bc?(I.map.depthTexture.compareFunction=F?W0:X0,I.map.depthTexture.minFilter=an,I.map.depthTexture.magFilter=an):(I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=sn,I.map.depthTexture.magFilter=sn);I.camera.updateProjectionMatrix()}I.map.isWebGLCubeRenderTarget!==!0&&(I.map.width!==s.x||I.map.height!==s.y)&&I.map.setSize(s.x,s.y);let J=I.map.isWebGLCubeRenderTarget?6:I.getViewportCount();Y.isPointLight!==!0&&I.updateMatrices(Y,T);let et=(I.camera.layers.mask&4294967294)!==0?I.camera.layers:T.layers;for(let bt=0;bt<J;bt++){let Pt=I.getCamera(bt);if(Y.isPointLight){let K=I.camera,gt=I.matrix,xt=Y.distance||K.far;xt!==K.far&&(K.far=xt,K.updateProjectionMatrix()),qc.setFromMatrixPosition(Y.matrixWorld),K.position.copy(qc),e_.copy(K.position),e_.add(jN[bt]),K.up.copy($N[bt]),K.lookAt(e_),K.updateMatrixWorld(),gt.makeTranslation(-qc.x,-qc.y,-qc.z),T1.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),I._frustum.setFromProjectionMatrix(T1,K.coordinateSystem,K.reversedDepth)}if(I.map.isWebGLCubeRenderTarget)e.setRenderTarget(I.map,bt),e.clear();else{bt===0&&(e.setRenderTarget(I.map),e.clear());let K=I.getViewport(bt);r.set(a.x*K.x,a.y*K.y,a.x*K.z,a.y*K.w),H.viewport(r)}i=I.getFrustum(bt),y(_,T,Pt,Y,et,this.type)}I.isPointLightShadow!==!0&&this.type===$o&&m(I,T),I.needsUpdate=!1}h=this.type,g.needsUpdate=!1,e.setRenderTarget(L,R,U)};function m(A,_){let T=t.update(b);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null?A.mapPass=new si(s.x,s.y,{format:Pa,type:zi}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),u.uniforms.shadow_pass.value=A.map.depthTexture,u.uniforms.resolution.value.set(A.map.width,A.map.height),u.uniforms.radius.value=A.radius,e.setRenderTarget(A.mapPass),e.clear(),e.renderBufferDirect(_,null,T,u,b,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value.set(A.map.width,A.map.height),d.uniforms.radius.value=A.radius,e.setRenderTarget(A.map),e.clear(),e.renderBufferDirect(_,null,T,d,b,null)}function x(A,_,T,L){let R=null,U=T.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(U!==void 0)R=U;else if(R=T.isPointLight===!0?l:o,e.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let H=R.uuid,W=_.uuid,D=c[H];D===void 0&&(D={},c[H]=D);let k=D[W];k===void 0&&(k=R.clone(),D[W]=k,_.addEventListener("dispose",E)),R=k}if(R.visible=_.visible,R.wireframe=_.wireframe,L===$o?R.side=_.shadowSide!==null?_.shadowSide:_.side:R.side=_.shadowSide!==null?_.shadowSide:p[_.side],R.alphaMap=_.alphaMap,R.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,R.map=_.map,R.clipShadows=_.clipShadows,R.clippingPlanes=_.clippingPlanes,R.clipIntersection=_.clipIntersection,R.displacementMap=_.displacementMap,R.displacementScale=_.displacementScale,R.displacementBias=_.displacementBias,R.wireframeLinewidth=_.wireframeLinewidth,R.linewidth=_.linewidth,T.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let H=e.properties.get(R);H.light=T}return R}function y(A,_,T,L,R,U){if(A.visible===!1)return;if(A.layers.test(R)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&U===$o)&&(!A.frustumCulled||A.intersectsFrustum(i))){A.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,A.matrixWorld);let D=t.update(A),k=A.material;if(Array.isArray(k)){let Y=D.groups;for(let I=0,tt=Y.length;I<tt;I++){let F=Y[I],J=k[F.materialIndex];if(J&&J.visible){let et=x(A,J,L,U);A.onBeforeShadow(e,A,_,T,D,et,F),e.renderBufferDirect(T,null,D,et,A,F),A.onAfterShadow(e,A,_,T,D,et,F)}}}else if(k.visible){let Y=x(A,k,L,U);A.onBeforeShadow(e,A,_,T,D,Y,null),e.renderBufferDirect(T,null,D,Y,A,null),A.onAfterShadow(e,A,_,T,D,Y,null)}}let W=A.children;for(let D=0,k=W.length;D<k;D++)y(W[D],_,T,L,R,U)}function E(A){A.target.removeEventListener("dispose",E);for(let T in c){let L=c[T],R=A.target.uuid;R in L&&(L[R].dispose(),delete L[R])}}}function eD(e,t){function n(){let C=!1,Q=new Le,X=null,ct=new Le(0,0,0,0);return{setMask:function(at){X!==at&&!C&&(e.colorMask(at,at,at,at),X=at)},setLocked:function(at){C=at},setClear:function(at,ot,Et,Gt,st){st===!0&&(at*=Gt,ot*=Gt,Et*=Gt),Q.set(at,ot,Et,Gt),ct.equals(Q)===!1&&(e.clearColor(at,ot,Et,Gt),ct.copy(Q))},reset:function(){C=!1,X=null,ct.set(-1,0,0,0)}}}function i(){let C=!1,Q=!1,X=null,ct=null,at=null;return{setReversed:function(ot){if(Q!==ot){let Et=t.get("EXT_clip_control");ot?Et.clipControlEXT(Et.LOWER_LEFT_EXT,Et.ZERO_TO_ONE_EXT):Et.clipControlEXT(Et.LOWER_LEFT_EXT,Et.NEGATIVE_ONE_TO_ONE_EXT),Q=ot;let Gt=at;at=null,this.setClear(Gt)}},getReversed:function(){return Q},setTest:function(ot){ot?_t(e.DEPTH_TEST):zt(e.DEPTH_TEST)},setMask:function(ot){X!==ot&&!C&&(e.depthMask(ot),X=ot)},setFunc:function(ot){if(Q&&(ot=jb[ot]),ct!==ot){switch(ot){case hf:e.depthFunc(e.NEVER);break;case ff:e.depthFunc(e.ALWAYS);break;case df:e.depthFunc(e.LESS);break;case Vo:e.depthFunc(e.LEQUAL);break;case pf:e.depthFunc(e.EQUAL);break;case mf:e.depthFunc(e.GEQUAL);break;case gf:e.depthFunc(e.GREATER);break;case _f:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}ct=ot}},setLocked:function(ot){C=ot},setClear:function(ot){at!==ot&&(at=ot,Q&&(ot=1-ot),e.clearDepth(ot))},reset:function(){C=!1,X=null,ct=null,at=null,Q=!1}}}function s(){let C=!1,Q=null,X=null,ct=null,at=null,ot=null,Et=null,Gt=null,st=null;return{setTest:function(At){C||(At?_t(e.STENCIL_TEST):zt(e.STENCIL_TEST))},setMask:function(At){Q!==At&&!C&&(e.stencilMask(At),Q=At)},setFunc:function(At,Ht,pt){(X!==At||ct!==Ht||at!==pt)&&(e.stencilFunc(At,Ht,pt),X=At,ct=Ht,at=pt)},setOp:function(At,Ht,pt){(ot!==At||Et!==Ht||Gt!==pt)&&(e.stencilOp(At,Ht,pt),ot=At,Et=Ht,Gt=pt)},setLocked:function(At){C=At},setClear:function(At){st!==At&&(e.clearStencil(At),st=At)},reset:function(){C=!1,Q=null,X=null,ct=null,at=null,ot=null,Et=null,Gt=null,st=null}}}let a=new n,r=new i,o=new s,l={},c=new WeakMap,f={},p={},u={},d=new WeakMap,v=[],b=null,g=!1,h=null,m=null,x=null,y=null,E=null,A=null,_=null,T=new Qt(0,0,0),L=0,R=!1,U=null,H=null,W=null,D=null,k=null,Y=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),I=!1,tt=0,F=e.getParameter(e.VERSION);F.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(F)[1]),I=tt>=1):F.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),I=tt>=2);let J=null,et={},bt=e.getParameter(e.SCISSOR_BOX),Pt=e.getParameter(e.VIEWPORT),K=new Le().fromArray(bt),gt=new Le().fromArray(Pt);function xt(C,Q,X,ct){let at=new Uint8Array(4),ot=e.createTexture();e.bindTexture(C,ot),e.texParameteri(C,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(C,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Et=0;Et<X;Et++)C===e.TEXTURE_3D||C===e.TEXTURE_2D_ARRAY?e.texImage3D(Q,0,e.RGBA,1,1,ct,0,e.RGBA,e.UNSIGNED_BYTE,at):e.texImage2D(Q+Et,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,at);return ot}let wt={};wt[e.TEXTURE_2D]=xt(e.TEXTURE_2D,e.TEXTURE_2D,1),wt[e.TEXTURE_CUBE_MAP]=xt(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),wt[e.TEXTURE_2D_ARRAY]=xt(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),wt[e.TEXTURE_3D]=xt(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),_t(e.DEPTH_TEST),r.setFunc(Vo),In(!1),Re(M0),_t(e.CULL_FACE),rn(xr);function _t(C){f[C]!==!0&&(e.enable(C),f[C]=!0)}function zt(C){f[C]!==!1&&(e.disable(C),f[C]=!1)}function Pe(C,Q){return u[C]!==Q?(e.bindFramebuffer(C,Q),u[C]=Q,C===e.DRAW_FRAMEBUFFER&&(u[e.FRAMEBUFFER]=Q),C===e.FRAMEBUFFER&&(u[e.DRAW_FRAMEBUFFER]=Q),!0):!1}function Ct(C,Q){let X=v,ct=!1;if(C){X=d.get(Q),X===void 0&&(X=[],d.set(Q,X));let at=C.textures;if(X.length!==at.length||X[0]!==e.COLOR_ATTACHMENT0){for(let ot=0,Et=at.length;ot<Et;ot++)X[ot]=e.COLOR_ATTACHMENT0+ot;X.length=at.length,ct=!0}}else X[0]!==e.BACK&&(X[0]=e.BACK,ct=!0);ct&&e.drawBuffers(X)}function le(C){return b!==C?(e.useProgram(C),b=C,!0):!1}let pe={[Sr]:e.FUNC_ADD,[xb]:e.FUNC_SUBTRACT,[Sb]:e.FUNC_REVERSE_SUBTRACT};pe[Mb]=e.MIN,pe[bb]=e.MAX;let qt={[Tb]:e.ZERO,[Eb]:e.ONE,[Ab]:e.SRC_COLOR,[A0]:e.SRC_ALPHA,[Lb]:e.SRC_ALPHA_SATURATE,[Nb]:e.DST_COLOR,[Rb]:e.DST_ALPHA,[wb]:e.ONE_MINUS_SRC_COLOR,[w0]:e.ONE_MINUS_SRC_ALPHA,[Db]:e.ONE_MINUS_DST_COLOR,[Cb]:e.ONE_MINUS_DST_ALPHA,[Ub]:e.CONSTANT_COLOR,[Ob]:e.ONE_MINUS_CONSTANT_COLOR,[Ib]:e.CONSTANT_ALPHA,[Pb]:e.ONE_MINUS_CONSTANT_ALPHA};function rn(C,Q,X,ct,at,ot,Et,Gt,st,At){if(C===xr){g===!0&&(zt(e.BLEND),g=!1);return}if(g===!1&&(_t(e.BLEND),g=!0),C!==yb){if(C!==h||At!==R){if((m!==Sr||E!==Sr)&&(e.blendEquation(e.FUNC_ADD),m=Sr,E=Sr),At)switch(C){case tl:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case b0:e.blendFunc(e.ONE,e.ONE);break;case T0:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case E0:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:Lt("WebGLState: Invalid blending: ",C);break}else switch(C){case tl:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case b0:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case T0:Lt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case E0:Lt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Lt("WebGLState: Invalid blending: ",C);break}x=null,y=null,A=null,_=null,T.set(0,0,0),L=0,h=C,R=At}return}at=at||Q,ot=ot||X,Et=Et||ct,(Q!==m||at!==E)&&(e.blendEquationSeparate(pe[Q],pe[at]),m=Q,E=at),(X!==x||ct!==y||ot!==A||Et!==_)&&(e.blendFuncSeparate(qt[X],qt[ct],qt[ot],qt[Et]),x=X,y=ct,A=ot,_=Et),(Gt.equals(T)===!1||st!==L)&&(e.blendColor(Gt.r,Gt.g,Gt.b,st),T.copy(Gt),L=st),h=C,R=!1}function Ve(C,Q){C.side===us?zt(e.CULL_FACE):_t(e.CULL_FACE);let X=C.side===Un;Q&&(X=!X),In(X),C.blending===tl&&C.transparent===!1?rn(xr):rn(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),r.setFunc(C.depthFunc),r.setTest(C.depthTest),r.setMask(C.depthWrite),a.setMask(C.colorWrite);let ct=C.stencilWrite;o.setTest(ct),ct&&(o.setMask(C.stencilWriteMask),o.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),o.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),Je(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?_t(e.SAMPLE_ALPHA_TO_COVERAGE):zt(e.SAMPLE_ALPHA_TO_COVERAGE)}function In(C){U!==C&&(C?e.frontFace(e.CW):e.frontFace(e.CCW),U=C)}function Re(C){C!==gb?(_t(e.CULL_FACE),C!==H&&(C===M0?e.cullFace(e.BACK):C===_b?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):zt(e.CULL_FACE),H=C}function Hi(C){C!==W&&(I&&e.lineWidth(C),W=C)}function Je(C,Q,X){C?(_t(e.POLYGON_OFFSET_FILL),(D!==Q||k!==X)&&(D=Q,k=X,r.getReversed()&&(Q=-Q,X=-X),e.polygonOffset(Q,X))):zt(e.POLYGON_OFFSET_FILL)}function li(C){C?_t(e.SCISSOR_TEST):zt(e.SCISSOR_TEST)}function ci(C){C===void 0&&(C=e.TEXTURE0+Y-1),J!==C&&(e.activeTexture(C),J=C)}function ui(C,Q,X){X===void 0&&(J===null?X=e.TEXTURE0+Y-1:X=J);let ct=et[X];ct===void 0&&(ct={type:void 0,texture:void 0},et[X]=ct),(ct.type!==C||ct.texture!==Q)&&(J!==X&&(e.activeTexture(X),J=X),e.bindTexture(C,Q||wt[C]),ct.type=C,ct.texture=Q)}function O(){let C=et[J];C!==void 0&&C.type!==void 0&&(e.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function hi(){try{e.compressedTexImage2D(...arguments)}catch(C){Lt("WebGLState:",C)}}function Te(){try{e.compressedTexImage3D(...arguments)}catch(C){Lt("WebGLState:",C)}}function Ee(){try{e.texSubImage2D(...arguments)}catch(C){Lt("WebGLState:",C)}}function dt(){try{e.texSubImage3D(...arguments)}catch(C){Lt("WebGLState:",C)}}function ke(){try{e.compressedTexSubImage2D(...arguments)}catch(C){Lt("WebGLState:",C)}}function Rt(){try{e.compressedTexSubImage3D(...arguments)}catch(C){Lt("WebGLState:",C)}}function Ot(){try{e.texStorage2D(...arguments)}catch(C){Lt("WebGLState:",C)}}function w(){try{e.texStorage3D(...arguments)}catch(C){Lt("WebGLState:",C)}}function S(){try{e.texImage2D(...arguments)}catch(C){Lt("WebGLState:",C)}}function B(){try{e.texImage3D(...arguments)}catch(C){Lt("WebGLState:",C)}}function it(C){return p[C]!==void 0?p[C]:e.getParameter(C)}function $(C,Q){p[C]!==Q&&(e.pixelStorei(C,Q),p[C]=Q)}function rt(C){K.equals(C)===!1&&(e.scissor(C.x,C.y,C.z,C.w),K.copy(C))}function ht(C){gt.equals(C)===!1&&(e.viewport(C.x,C.y,C.z,C.w),gt.copy(C))}function q(C,Q){let X=c.get(Q);X===void 0&&(X=new WeakMap,c.set(Q,X));let ct=X.get(C);ct===void 0&&(ct=e.getUniformBlockIndex(Q,C.name),e.uniformBlockBinding(Q,ct,ct),X.set(C,ct))}function Z(C,Q,X){let at=c.get(Q).get(C);l[at]!==X&&(e.bindBufferBase(e.UNIFORM_BUFFER,at,X),l[at]=X)}function lt(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),r.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),f={},p={},J=null,et={},u={},l={},d=new WeakMap,v=[],b=null,g=!1,h=null,m=null,x=null,y=null,E=null,A=null,_=null,T=new Qt(0,0,0),L=0,R=!1,U=null,H=null,W=null,D=null,k=null,K.set(0,0,e.canvas.width,e.canvas.height),gt.set(0,0,e.canvas.width,e.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:_t,disable:zt,bindFramebuffer:Pe,drawBuffers:Ct,useProgram:le,setBlending:rn,setMaterial:Ve,setFlipSided:In,setCullFace:Re,setLineWidth:Hi,setPolygonOffset:Je,setScissorTest:li,activeTexture:ci,bindTexture:ui,unbindTexture:O,compressedTexImage2D:hi,compressedTexImage3D:Te,texImage2D:S,texImage3D:B,pixelStorei:$,getParameter:it,updateUBOMapping:q,uniformBlockBinding:Z,texStorage2D:Ot,texStorage3D:w,texSubImage2D:Ee,texSubImage3D:dt,compressedTexSubImage2D:ke,compressedTexSubImage3D:Rt,scissor:rt,viewport:ht,reset:lt}}function nD(e,t,n,i,s,a,r){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new $t,f=new WeakMap,p=new Set,u,d=new WeakMap,v=new Set,b=new FinalizationRegistry(w=>v.delete(w)),g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function h(w,S){return g?new OffscreenCanvas(w,S):ko("canvas")}function m(w,S,B){let it=1,$=Ot(w);if(($.width>B||$.height>B)&&(it=B/Math.max($.width,$.height)),it<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let rt=Math.floor(it*$.width),ht=Math.floor(it*$.height);u===void 0&&(u=h(rt,ht));let q=S?h(rt,ht):u;return q.width=rt,q.height=ht,q.getContext("2d").drawImage(w,0,0,rt,ht),Nt("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+rt+"x"+ht+")."),q}else return"data"in w&&Nt("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),w;return w}function x(w){return w.generateMipmaps}function y(w){e.generateMipmap(w)}function E(w){return w.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?e.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function A(w,S,B,it,$,rt=!1){if(w!==null){if(e[w]!==void 0)return e[w];Nt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let ht;it&&(ht=t.get("EXT_texture_norm16"),ht||Nt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let q=S;if(S===e.RED&&(B===e.FLOAT&&(q=e.R32F),B===e.HALF_FLOAT&&(q=e.R16F),B===e.UNSIGNED_BYTE&&(q=e.R8),B===e.UNSIGNED_SHORT&&ht&&(q=ht.R16_EXT),B===e.SHORT&&ht&&(q=ht.R16_SNORM_EXT)),S===e.RED_INTEGER&&(B===e.UNSIGNED_BYTE&&(q=e.R8UI),B===e.UNSIGNED_SHORT&&(q=e.R16UI),B===e.UNSIGNED_INT&&(q=e.R32UI),B===e.BYTE&&(q=e.R8I),B===e.SHORT&&(q=e.R16I),B===e.INT&&(q=e.R32I)),S===e.RG&&(B===e.FLOAT&&(q=e.RG32F),B===e.HALF_FLOAT&&(q=e.RG16F),B===e.UNSIGNED_BYTE&&(q=e.RG8),B===e.UNSIGNED_SHORT&&ht&&(q=ht.RG16_EXT),B===e.SHORT&&ht&&(q=ht.RG16_SNORM_EXT)),S===e.RG_INTEGER&&(B===e.UNSIGNED_BYTE&&(q=e.RG8UI),B===e.UNSIGNED_SHORT&&(q=e.RG16UI),B===e.UNSIGNED_INT&&(q=e.RG32UI),B===e.BYTE&&(q=e.RG8I),B===e.SHORT&&(q=e.RG16I),B===e.INT&&(q=e.RG32I)),S===e.RGB_INTEGER&&(B===e.UNSIGNED_BYTE&&(q=e.RGB8UI),B===e.UNSIGNED_SHORT&&(q=e.RGB16UI),B===e.UNSIGNED_INT&&(q=e.RGB32UI),B===e.BYTE&&(q=e.RGB8I),B===e.SHORT&&(q=e.RGB16I),B===e.INT&&(q=e.RGB32I)),S===e.RGBA_INTEGER&&(B===e.UNSIGNED_BYTE&&(q=e.RGBA8UI),B===e.UNSIGNED_SHORT&&(q=e.RGBA16UI),B===e.UNSIGNED_INT&&(q=e.RGBA32UI),B===e.BYTE&&(q=e.RGBA8I),B===e.SHORT&&(q=e.RGBA16I),B===e.INT&&(q=e.RGBA32I)),S===e.RGB&&(B===e.UNSIGNED_SHORT&&ht&&(q=ht.RGB16_EXT),B===e.SHORT&&ht&&(q=ht.RGB16_SNORM_EXT),B===e.UNSIGNED_INT_5_9_9_9_REV&&(q=e.RGB9_E5),B===e.UNSIGNED_INT_10F_11F_11F_REV&&(q=e.R11F_G11F_B10F)),S===e.RGBA){let Z=rt?Sc:Kt.getTransfer($);B===e.FLOAT&&(q=e.RGBA32F),B===e.HALF_FLOAT&&(q=e.RGBA16F),B===e.UNSIGNED_BYTE&&(q=Z===oe?e.SRGB8_ALPHA8:e.RGBA8),B===e.UNSIGNED_SHORT&&ht&&(q=ht.RGBA16_EXT),B===e.SHORT&&ht&&(q=ht.RGBA16_SNORM_EXT),B===e.UNSIGNED_SHORT_4_4_4_4&&(q=e.RGBA4),B===e.UNSIGNED_SHORT_5_5_5_1&&(q=e.RGB5_A1)}return(q===e.R16F||q===e.R32F||q===e.RG16F||q===e.RG32F||q===e.RGBA16F||q===e.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function _(w,S){let B;return w?S===null||S===Pi||S===br?B=e.DEPTH24_STENCIL8:S===Bi?B=e.DEPTH32F_STENCIL8:S===nl&&(B=e.DEPTH24_STENCIL8,Nt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Pi||S===br?B=e.DEPTH_COMPONENT24:S===Bi?B=e.DEPTH_COMPONENT32F:S===nl&&(B=e.DEPTH_COMPONENT16),B}function T(w,S){return x(w)===!0||w.isFramebufferTexture&&w.minFilter!==sn&&w.minFilter!==an?Math.log2(Math.max(S.width,S.height))+1:w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?S.mipmaps.length:1}function L(w){let S=new WeakRef(w);i.get(w).__ref=S,v.add(S),b.register(w,S,S)}function R(w){let S=i.get(w).__ref;S!==void 0&&(v.delete(S),b.unregister(S))}function U(w){W(w.target)}function H(w){D(w.target)}function W(w){w.removeEventListener("dispose",U),R(w),Y(w),w.isVideoTexture&&f.delete(w),w.isHTMLTexture&&p.delete(w)}function D(w){w.removeEventListener("dispose",H),R(w),tt(w)}function k(){for(let w of v){let S=w.deref();S!==void 0&&(S.isRenderTarget===!0?D(S):W(S))}v.clear(),p.clear()}function Y(w){let S=i.get(w);if(S.__webglInit===void 0)return;let B=w.source,it=d.get(B);if(it){let $=it[S.__cacheKey];$.usedTimes--,$.usedTimes===0&&I(w),Object.keys(it).length===0&&d.delete(B)}i.remove(w)}function I(w){let S=i.get(w);e.deleteTexture(S.__webglTexture);let B=w.source,it=d.get(B);delete it[S.__cacheKey],r.memory.textures--}function tt(w){let S=i.get(w);S.__depthDisposeCallback&&S.__depthDisposeCallback();let B=w.depthTexture;if(B&&B.renderTarget===w&&W(B),w.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(S.__webglFramebuffer[$]))for(let rt=0;rt<S.__webglFramebuffer[$].length;rt++)e.deleteFramebuffer(S.__webglFramebuffer[$][rt]);else e.deleteFramebuffer(S.__webglFramebuffer[$]);S.__webglDepthbuffer&&e.deleteRenderbuffer(S.__webglDepthbuffer[$])}else{if(Array.isArray(S.__webglFramebuffer))for(let $=0;$<S.__webglFramebuffer.length;$++)e.deleteFramebuffer(S.__webglFramebuffer[$]);else e.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&e.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&e.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let $=0;$<S.__webglColorRenderbuffer.length;$++)S.__webglColorRenderbuffer[$]&&e.deleteRenderbuffer(S.__webglColorRenderbuffer[$]);S.__webglDepthRenderbuffer&&e.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let it=w.textures;for(let $=0,rt=it.length;$<rt;$++){let ht=i.get(it[$]);ht.__webglTexture&&(e.deleteTexture(ht.__webglTexture),r.memory.textures--),i.remove(it[$])}i.remove(w)}let F=0;function J(){F=0}function et(){return F}function bt(w){F=w}function Pt(){let w=F;return w>=s.maxTextures&&Nt("WebGLTextures: Trying to use "+(w+1)+" texture units while this GPU supports only "+s.maxTextures),F+=1,w}function K(w){let S=[];return S.push(w.wrapS),S.push(w.wrapT),S.push(w.wrapR||0),S.push(w.magFilter),S.push(w.minFilter),S.push(w.anisotropy),S.push(w.internalFormat),S.push(w.format),S.push(w.type),S.push(w.generateMipmaps),S.push(w.mipmapsAutoUpdate),S.push(w.premultiplyAlpha),S.push(w.flipY),S.push(w.unpackAlignment),S.push(w.colorSpace),S.join()}function gt(w,S){let B=i.get(w);if(w.isVideoTexture&&ke(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&B.__version!==w.version){let it=w.image;if(it===null)Nt("WebGLRenderer: Texture marked for update but no image data found.");else if(it.complete===!1)Nt("WebGLRenderer: Texture marked for update but image is incomplete");else{Ve(B,w,S);return}}else w.isExternalTexture&&(B.__webglTexture=w.sourceTexture?w.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,B.__webglTexture,e.TEXTURE0+S)}function xt(w,S){let B=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&B.__version!==w.version){Ve(B,w,S);return}else w.isExternalTexture&&(B.__webglTexture=w.sourceTexture?w.sourceTexture:null);n.bindTexture(e.TEXTURE_2D_ARRAY,B.__webglTexture,e.TEXTURE0+S)}function wt(w,S){let B=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&B.__version!==w.version){Ve(B,w,S);return}n.bindTexture(e.TEXTURE_3D,B.__webglTexture,e.TEXTURE0+S)}function _t(w,S){let B=i.get(w);if(w.version>0&&B.__version!==w.version){In(B,w,S);return}n.bindTexture(e.TEXTURE_CUBE_MAP,B.__webglTexture,e.TEXTURE0+S)}let zt={[vf]:e.REPEAT,[ss]:e.CLAMP_TO_EDGE,[yf]:e.MIRRORED_REPEAT},Pe={[sn]:e.NEAREST,[Fb]:e.NEAREST_MIPMAP_NEAREST,[zc]:e.NEAREST_MIPMAP_LINEAR,[an]:e.LINEAR,[Wf]:e.LINEAR_MIPMAP_NEAREST,[Gs]:e.LINEAR_MIPMAP_LINEAR},Ct={[kb]:e.NEVER,[q0]:e.ALWAYS,[Xb]:e.LESS,[X0]:e.LEQUAL,[Wb]:e.EQUAL,[W0]:e.GEQUAL,[qb]:e.GREATER,[Yb]:e.NOTEQUAL};function le(w,S){if(S.type===Bi&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===an||S.magFilter===Wf||S.magFilter===zc||S.magFilter===Gs||S.minFilter===an||S.minFilter===Wf||S.minFilter===zc||S.minFilter===Gs)&&Nt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(w,e.TEXTURE_WRAP_S,zt[S.wrapS]),e.texParameteri(w,e.TEXTURE_WRAP_T,zt[S.wrapT]),(w===e.TEXTURE_3D||w===e.TEXTURE_2D_ARRAY)&&e.texParameteri(w,e.TEXTURE_WRAP_R,zt[S.wrapR]),e.texParameteri(w,e.TEXTURE_MAG_FILTER,Pe[S.magFilter]),e.texParameteri(w,e.TEXTURE_MIN_FILTER,Pe[S.minFilter]),S.compareFunction&&(e.texParameteri(w,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(w,e.TEXTURE_COMPARE_FUNC,Ct[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===sn||S.minFilter!==zc&&S.minFilter!==Gs||S.type===Bi&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){let B=t.get("EXT_texture_filter_anisotropic");e.texParameterf(w,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function pe(w,S){let B=!1;w.__webglInit===void 0&&(w.__webglInit=!0,S.addEventListener("dispose",U),L(S));let it=S.source,$=d.get(it);$===void 0&&($={},d.set(it,$));let rt=K(S);if(rt!==w.__cacheKey){$[rt]===void 0&&($[rt]={texture:e.createTexture(),usedTimes:0},r.memory.textures++,B=!0),$[rt].usedTimes++;let ht=$[w.__cacheKey];ht!==void 0&&($[w.__cacheKey].usedTimes--,ht.usedTimes===0&&I(S)),w.__cacheKey=rt,w.__webglTexture=$[rt].texture}return B}function qt(w,S,B){return Math.floor(Math.floor(w/B)/S)}function rn(w,S,B,it){let rt=w.updateRanges;if(rt.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,S.width,S.height,B,it,S.data);else{rt.sort((C,Q)=>C.start-Q.start);let ht=0;for(let C=1;C<rt.length;C++){let Q=rt[ht],X=rt[C],ct=Q.start+Q.count,at=qt(X.start,S.width,4),ot=qt(Q.start,S.width,4);X.start<=ct+1&&at===ot&&qt(X.start+X.count-1,S.width,4)===at?Q.count=Math.max(Q.count,X.start+X.count-Q.start):(++ht,rt[ht]=X)}rt.length=ht+1;let q=n.getParameter(e.UNPACK_ROW_LENGTH),Z=n.getParameter(e.UNPACK_SKIP_PIXELS),lt=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,S.width);for(let C=0,Q=rt.length;C<Q;C++){let X=rt[C],ct=Math.floor(X.start/4),at=Math.ceil(X.count/4),ot=ct%S.width,Et=Math.floor(ct/S.width),Gt=at,st=1;n.pixelStorei(e.UNPACK_SKIP_PIXELS,ot),n.pixelStorei(e.UNPACK_SKIP_ROWS,Et),n.texSubImage2D(e.TEXTURE_2D,0,ot,Et,Gt,st,B,it,S.data)}w.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,q),n.pixelStorei(e.UNPACK_SKIP_PIXELS,Z),n.pixelStorei(e.UNPACK_SKIP_ROWS,lt)}}function Ve(w,S,B){let it=e.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(it=e.TEXTURE_2D_ARRAY),S.isData3DTexture&&(it=e.TEXTURE_3D);let $=pe(w,S),rt=S.source;n.bindTexture(it,w.__webglTexture,e.TEXTURE0+B);let ht=i.get(rt);if(rt.version!==ht.__version||$===!0){if(n.activeTexture(e.TEXTURE0+B),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){let st=Kt.getPrimaries(Kt.workingColorSpace),At=S.colorSpace===ks?null:Kt.getPrimaries(S.colorSpace),Ht=S.colorSpace===ks||st===At?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ht)}n.pixelStorei(e.UNPACK_ALIGNMENT,S.unpackAlignment);let Z=m(S.image,!1,s.maxTextureSize);Z=Rt(S,Z);let lt=a.convert(S.format,S.colorSpace),C=a.convert(S.type),Q=A(S.internalFormat,lt,C,S.normalized,S.colorSpace,S.isVideoTexture);le(it,S);let X,ct=S.mipmaps,at=S.isVideoTexture!==!0,ot=ht.__version===void 0||$===!0,Et=rt.dataReady,Gt=T(S,Z);if(S.isDepthTexture)Q=_(S.format===Vs,S.type),ot&&(at?n.texStorage2D(e.TEXTURE_2D,1,Q,Z.width,Z.height):n.texImage2D(e.TEXTURE_2D,0,Q,Z.width,Z.height,0,lt,C,null));else if(S.isDataTexture)if(ct.length>0){at&&ot&&n.texStorage2D(e.TEXTURE_2D,Gt,Q,ct[0].width,ct[0].height);for(let st=0,At=ct.length;st<At;st++)X=ct[st],at?Et&&n.texSubImage2D(e.TEXTURE_2D,st,0,0,X.width,X.height,lt,C,X.data):n.texImage2D(e.TEXTURE_2D,st,Q,X.width,X.height,0,lt,C,X.data);S.generateMipmaps=!1}else at?(ot&&n.texStorage2D(e.TEXTURE_2D,Gt,Q,Z.width,Z.height),Et&&rn(S,Z,lt,C)):n.texImage2D(e.TEXTURE_2D,0,Q,Z.width,Z.height,0,lt,C,Z.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){at&&ot&&n.texStorage3D(e.TEXTURE_2D_ARRAY,Gt,Q,ct[0].width,ct[0].height,Z.depth);for(let st=0,At=ct.length;st<At;st++)if(X=ct[st],S.format!==Fi)if(lt!==null)if(at){if(Et)if(S.layerUpdates.size>0){let Ht=$0(X.width,X.height,S.format,S.type);for(let pt of S.layerUpdates){let ce=X.data.subarray(pt*Ht/X.data.BYTES_PER_ELEMENT,(pt+1)*Ht/X.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,st,0,0,pt,X.width,X.height,1,lt,ce)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,st,0,0,0,X.width,X.height,Z.depth,lt,X.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,st,Q,X.width,X.height,Z.depth,0,X.data,0,0);else Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else at?Et&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,st,0,0,0,X.width,X.height,Z.depth,lt,C,X.data):n.texImage3D(e.TEXTURE_2D_ARRAY,st,Q,X.width,X.height,Z.depth,0,lt,C,X.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{at&&ot&&n.texStorage2D(e.TEXTURE_2D,Gt,Q,ct[0].width,ct[0].height);for(let st=0,At=ct.length;st<At;st++)X=ct[st],S.format!==Fi?lt!==null?at?Et&&n.compressedTexSubImage2D(e.TEXTURE_2D,st,0,0,X.width,X.height,lt,X.data):n.compressedTexImage2D(e.TEXTURE_2D,st,Q,X.width,X.height,0,X.data):Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):at?Et&&n.texSubImage2D(e.TEXTURE_2D,st,0,0,X.width,X.height,lt,C,X.data):n.texImage2D(e.TEXTURE_2D,st,Q,X.width,X.height,0,lt,C,X.data)}else if(S.isDataArrayTexture)if(at){if(ot&&n.texStorage3D(e.TEXTURE_2D_ARRAY,Gt,Q,Z.width,Z.height,Z.depth),Et)if(S.layerUpdates.size>0){let st=$0(Z.width,Z.height,S.format,S.type);for(let At of S.layerUpdates){let Ht=Z.data.subarray(At*st/Z.data.BYTES_PER_ELEMENT,(At+1)*st/Z.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,At,Z.width,Z.height,1,lt,C,Ht)}S.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,lt,C,Z.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,Q,Z.width,Z.height,Z.depth,0,lt,C,Z.data);else if(S.isData3DTexture)at?(ot&&n.texStorage3D(e.TEXTURE_3D,Gt,Q,Z.width,Z.height,Z.depth),Et&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,lt,C,Z.data)):n.texImage3D(e.TEXTURE_3D,0,Q,Z.width,Z.height,Z.depth,0,lt,C,Z.data);else if(S.isFramebufferTexture){if(ot)if(at)n.texStorage2D(e.TEXTURE_2D,Gt,Q,Z.width,Z.height);else{let st=Z.width,At=Z.height;for(let Ht=0;Ht<Gt;Ht++)n.texImage2D(e.TEXTURE_2D,Ht,Q,st,At,0,lt,C,null),st>>=1,At>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in e){let st=e.canvas;if(st.hasAttribute("layoutsubtree")||st.setAttribute("layoutsubtree","true"),Z.parentNode!==st){st.appendChild(Z),p.add(S),st.onpaint=At=>{let Ht=At.changedElements;for(let pt of p)Ht.includes(pt.image)&&(pt.needsUpdate=!0)},st.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,Z);else{let Ht=e.RGBA,pt=e.RGBA,ce=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,Ht,pt,ce,Z)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(ct.length>0){if(at&&ot){let st=Ot(ct[0]);n.texStorage2D(e.TEXTURE_2D,Gt,Q,st.width,st.height)}for(let st=0,At=ct.length;st<At;st++)X=ct[st],at?Et&&n.texSubImage2D(e.TEXTURE_2D,st,0,0,lt,C,X):n.texImage2D(e.TEXTURE_2D,st,Q,lt,C,X);S.generateMipmaps=!1}else if(at){if(ot){let st=Ot(Z);n.texStorage2D(e.TEXTURE_2D,Gt,Q,st.width,st.height)}Et&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,lt,C,Z)}else n.texImage2D(e.TEXTURE_2D,0,Q,lt,C,Z);x(S)&&S.mipmapsAutoUpdate===!0&&y(it),ht.__version=rt.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function In(w,S,B){if(S.image.length!==6)return;let it=pe(w,S),$=S.source;n.bindTexture(e.TEXTURE_CUBE_MAP,w.__webglTexture,e.TEXTURE0+B);let rt=i.get($);if($.version!==rt.__version||it===!0){n.activeTexture(e.TEXTURE0+B);let ht=Kt.getPrimaries(Kt.workingColorSpace),q=S.colorSpace===ks?null:Kt.getPrimaries(S.colorSpace),Z=S.colorSpace===ks||ht===q?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Z);let lt=S.isCompressedTexture||S.image[0].isCompressedTexture,C=S.image[0]&&S.image[0].isDataTexture,Q=[];for(let pt=0;pt<6;pt++)!lt&&!C?Q[pt]=m(S.image[pt],!0,s.maxCubemapSize):Q[pt]=C?S.image[pt].image:S.image[pt],Q[pt]=Rt(S,Q[pt]);let X=Q[0],ct=a.convert(S.format,S.colorSpace),at=a.convert(S.type),ot=A(S.internalFormat,ct,at,S.normalized,S.colorSpace),Et=S.isVideoTexture!==!0,Gt=rt.__version===void 0||it===!0,st=$.dataReady,At=T(S,X);le(e.TEXTURE_CUBE_MAP,S);let Ht;if(S.isDepthTexture){if(ot=_(S.format===Vs,S.type),Gt)if(Et)n.texStorage2D(e.TEXTURE_CUBE_MAP,1,ot,X.width,X.height);else for(let pt=0;pt<6;pt++)n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,ot,X.width,X.height,0,ct,at,null)}else if(lt){Et&&Gt&&n.texStorage2D(e.TEXTURE_CUBE_MAP,At,ot,X.width,X.height);for(let pt=0;pt<6;pt++){Ht=Q[pt].mipmaps;for(let ce=0;ce<Ht.length;ce++){let Ke=Ht[ce];S.format!==Fi?ct!==null?Et?st&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+pt,ce,0,0,Ke.width,Ke.height,ct,Ke.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+pt,ce,ot,Ke.width,Ke.height,0,Ke.data):Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Et?st&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+pt,ce,0,0,Ke.width,Ke.height,ct,at,Ke.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+pt,ce,ot,Ke.width,Ke.height,0,ct,at,Ke.data)}}}else{if(Ht=S.mipmaps,Et&&Gt){Ht.length>0&&At++;let pt=Ot(Q[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,At,ot,pt.width,pt.height)}for(let pt=0;pt<6;pt++)if(C){Et?st&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,Q[pt].width,Q[pt].height,ct,at,Q[pt].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,ot,Q[pt].width,Q[pt].height,0,ct,at,Q[pt].data);for(let ce=0;ce<Ht.length;ce++){let Xs=Ht[ce].image[pt].image;Et?st&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+pt,ce+1,0,0,Xs.width,Xs.height,ct,at,Xs.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+pt,ce+1,ot,Xs.width,Xs.height,0,ct,at,Xs.data)}}else{Et?st&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,ct,at,Q[pt]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,ot,ct,at,Q[pt]);for(let ce=0;ce<Ht.length;ce++){let Ke=Ht[ce];Et?st&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+pt,ce+1,0,0,ct,at,Ke.image[pt]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+pt,ce+1,ot,ct,at,Ke.image[pt])}}}x(S)&&S.mipmapsAutoUpdate===!0&&y(e.TEXTURE_CUBE_MAP),rt.__version=$.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function Re(w,S,B,it,$,rt){let ht=a.convert(B.format,B.colorSpace),q=a.convert(B.type),Z=A(B.internalFormat,ht,q,B.normalized,B.colorSpace),lt=i.get(S),C=i.get(B);if(C.__renderTarget=S,!lt.__hasExternalTextures){let Q=Math.max(1,S.width>>rt),X=Math.max(1,S.height>>rt);$===e.TEXTURE_3D||$===e.TEXTURE_2D_ARRAY?n.texImage3D($,rt,Z,Q,X,S.depth,0,ht,q,null):n.texImage2D($,rt,Z,Q,X,0,ht,q,null)}n.bindFramebuffer(e.FRAMEBUFFER,w),dt(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,it,$,C.__webglTexture,0,Ee(S)):($===e.TEXTURE_2D||$>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,it,$,C.__webglTexture,rt),n.bindFramebuffer(e.FRAMEBUFFER,null)}function Hi(w,S,B){if(e.bindRenderbuffer(e.RENDERBUFFER,w),S.depthBuffer){let it=S.depthTexture,$=it&&it.isDepthTexture?it.type:null,rt=_(S.stencilBuffer,$),ht=S.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;dt(S)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ee(S),rt,S.width,S.height):B?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ee(S),rt,S.width,S.height):e.renderbufferStorage(e.RENDERBUFFER,rt,S.width,S.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,ht,e.RENDERBUFFER,w)}else{let it=S.textures;for(let $=0;$<it.length;$++){let rt=it[$],ht=a.convert(rt.format,rt.colorSpace),q=a.convert(rt.type),Z=A(rt.internalFormat,ht,q,rt.normalized,rt.colorSpace);dt(S)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ee(S),Z,S.width,S.height):B?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ee(S),Z,S.width,S.height):e.renderbufferStorage(e.RENDERBUFFER,Z,S.width,S.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Je(w,S,B){let it=S.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,w),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let $=i.get(S.depthTexture);$.__renderTarget=S;let rt=it?S.depthTexture.image[0]:S.depthTexture.image;(!$.__webglTexture||rt.width!==S.width||rt.height!==S.height)&&(rt.width=S.width,rt.height=S.height,S.depthTexture.needsUpdate=!0),it?_t(S.depthTexture,0):gt(S.depthTexture,0);let ht=$.__webglTexture,q=Ee(S),Z=it?e.TEXTURE_CUBE_MAP_POSITIVE_X+B:e.TEXTURE_2D,lt=S.depthTexture.format===Vs?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(S.depthTexture.format===zs)dt(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,lt,Z,ht,0,q):e.framebufferTexture2D(e.FRAMEBUFFER,lt,Z,ht,0);else if(S.depthTexture.format===Vs)dt(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,lt,Z,ht,0,q):e.framebufferTexture2D(e.FRAMEBUFFER,lt,Z,ht,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function li(w){let S=i.get(w),B=w.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==w.depthTexture){let it=w.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),it){let $=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,it.removeEventListener("dispose",$)};it.addEventListener("dispose",$),S.__depthDisposeCallback=$}S.__boundDepthTexture=it}if(w.depthTexture&&!S.__autoAllocateDepthBuffer)if(B)for(let it=0;it<6;it++)Je(S.__webglFramebuffer[it],w,it);else w.texture.mipmaps.length>0?Je(S.__webglFramebuffer[0],w,0):Je(S.__webglFramebuffer,w,0);else if(B){S.__webglDepthbuffer=[];for(let it=0;it<6;it++)if(n.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer[it]),S.__webglDepthbuffer[it]===void 0)S.__webglDepthbuffer[it]=e.createRenderbuffer(),Hi(S.__webglDepthbuffer[it],w,!1);else{let $=w.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,rt=S.__webglDepthbuffer[it];e.bindRenderbuffer(e.RENDERBUFFER,rt),e.framebufferRenderbuffer(e.FRAMEBUFFER,$,e.RENDERBUFFER,rt)}}else if(w.texture.mipmaps.length>0?n.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=e.createRenderbuffer(),Hi(S.__webglDepthbuffer,w,!1);else{let $=w.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,rt=S.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,rt),e.framebufferRenderbuffer(e.FRAMEBUFFER,$,e.RENDERBUFFER,rt)}n.bindFramebuffer(e.FRAMEBUFFER,null)}function ci(w,S,B){let it=i.get(w);S!==void 0&&Re(it.__webglFramebuffer,w,w.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),B!==void 0&&li(w)}function ui(w){let S=w.texture,B=i.get(w),it=i.get(S);w.addEventListener("dispose",H),L(w);let $=w.textures,rt=w.isWebGLCubeRenderTarget===!0,ht=$.length>1;if(ht||(it.__webglTexture===void 0&&(it.__webglTexture=e.createTexture()),it.__version=S.version,r.memory.textures++),rt){B.__webglFramebuffer=[];for(let q=0;q<6;q++)if(S.mipmaps.length>0){B.__webglFramebuffer[q]=[];for(let Z=0;Z<S.mipmaps.length;Z++)B.__webglFramebuffer[q][Z]=e.createFramebuffer()}else B.__webglFramebuffer[q]=e.createFramebuffer()}else{if(S.mipmaps.length>0){B.__webglFramebuffer=[];for(let q=0;q<S.mipmaps.length;q++)B.__webglFramebuffer[q]=e.createFramebuffer()}else B.__webglFramebuffer=e.createFramebuffer();if(ht)for(let q=0,Z=$.length;q<Z;q++){let lt=i.get($[q]);lt.__webglTexture===void 0&&(lt.__webglTexture=e.createTexture(),r.memory.textures++)}if(w.samples>0&&dt(w)===!1){B.__webglMultisampledFramebuffer=e.createFramebuffer(),B.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let q=0;q<$.length;q++){let Z=$[q];B.__webglColorRenderbuffer[q]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,B.__webglColorRenderbuffer[q]);let lt=a.convert(Z.format,Z.colorSpace),C=a.convert(Z.type),Q=A(Z.internalFormat,lt,C,Z.normalized,Z.colorSpace,w.isXRRenderTarget===!0),X=Ee(w);e.renderbufferStorageMultisample(e.RENDERBUFFER,X,Q,w.width,w.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+q,e.RENDERBUFFER,B.__webglColorRenderbuffer[q])}e.bindRenderbuffer(e.RENDERBUFFER,null),w.depthBuffer&&(B.__webglDepthRenderbuffer=e.createRenderbuffer(),Hi(B.__webglDepthRenderbuffer,w,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(rt){n.bindTexture(e.TEXTURE_CUBE_MAP,it.__webglTexture),le(e.TEXTURE_CUBE_MAP,S);for(let q=0;q<6;q++)if(S.mipmaps.length>0)for(let Z=0;Z<S.mipmaps.length;Z++)Re(B.__webglFramebuffer[q][Z],w,S,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+q,Z);else Re(B.__webglFramebuffer[q],w,S,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+q,0);x(S)?y(e.TEXTURE_CUBE_MAP):S.mipmaps.length>0&&e.texParameteri(e.TEXTURE_CUBE_MAP,e.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),n.unbindTexture()}else if(ht){for(let q=0,Z=$.length;q<Z;q++){let lt=$[q],C=i.get(lt),Q=e.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Q=w.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(Q,C.__webglTexture),le(Q,lt),Re(B.__webglFramebuffer,w,lt,e.COLOR_ATTACHMENT0+q,Q,0),x(lt)&&y(Q)}n.unbindTexture()}else{let q=e.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(q=w.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(q,it.__webglTexture),le(q,S),S.mipmaps.length>0)for(let Z=0;Z<S.mipmaps.length;Z++)Re(B.__webglFramebuffer[Z],w,S,e.COLOR_ATTACHMENT0,q,Z);else Re(B.__webglFramebuffer,w,S,e.COLOR_ATTACHMENT0,q,0);x(S)?y(q):S.mipmaps.length>0&&e.texParameteri(q,e.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),n.unbindTexture()}w.depthBuffer&&li(w)}function O(w){let S=w.textures;for(let B=0,it=S.length;B<it;B++){let $=S[B];if(x($)&&$.mipmapsAutoUpdate===!0){let rt=E(w),ht=i.get($).__webglTexture;n.bindTexture(rt,ht),y(rt),n.unbindTexture()}}}let hi=[];function Te(w){if(w.samples>0){if(dt(w)===!1){let S=w.textures,B=w.width,it=w.height,$=e.COLOR_BUFFER_BIT,rt=w.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ht=i.get(w),q=S.length>1;if(q)for(let lt=0;lt<S.length;lt++)n.bindFramebuffer(e.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+lt,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,ht.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+lt,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,ht.__webglMultisampledFramebuffer),w.texture.mipmaps.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,ht.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,ht.__webglFramebuffer);for(let lt=0;lt<S.length;lt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&($|=e.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&($|=e.STENCIL_BUFFER_BIT)),q){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,ht.__webglColorRenderbuffer[lt]);let C=i.get(S[lt]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,C,0)}e.blitFramebuffer(0,0,B,it,0,0,B,it,$,e.NEAREST),l===!0&&(hi.length=0,hi.push(e.COLOR_ATTACHMENT0+lt),w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&hi.push(rt),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,hi))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),q)for(let lt=0;lt<S.length;lt++){n.bindFramebuffer(e.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+lt,e.RENDERBUFFER,ht.__webglColorRenderbuffer[lt]);let C=i.get(S[lt]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,ht.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+lt,e.TEXTURE_2D,C,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,ht.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&l){let S=w.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[S])}}}function Ee(w){return Math.min(s.maxSamples,w.samples)}function dt(w){let S=i.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ke(w){let S=r.render.frame;f.get(w)!==S&&(f.set(w,S),w.update())}function Rt(w,S){let B=w.colorSpace,it=w.format,$=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||B!==xc&&B!==ks&&(Kt.getTransfer(B)===oe?(it!==Fi||$!==oi)&&Nt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Lt("WebGLTextures: Unsupported texture color space:",B)),S}function Ot(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=Pt,this.resetTextureUnits=J,this.getTextureUnits=et,this.setTextureUnits=bt,this.setTexture2D=gt,this.setTexture2DArray=xt,this.setTexture3D=wt,this.setTextureCube=_t,this.rebindTextures=ci,this.setupRenderTarget=ui,this.updateRenderTargetMipmap=O,this.updateMultisampleRenderTarget=Te,this.setupDepthRenderbuffer=li,this.setupFrameBufferTexture=Re,this.useMultisampledRTT=dt,this.dispose=k}function iD(e,t){function n(i,s=ks){let a,r=Kt.getTransfer(s);if(i===oi)return e.UNSIGNED_BYTE;if(i===Yf)return e.UNSIGNED_SHORT_4_4_4_4;if(i===Zf)return e.UNSIGNED_SHORT_5_5_5_1;if(i===F0)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===H0)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===B0)return e.BYTE;if(i===z0)return e.SHORT;if(i===nl)return e.UNSIGNED_SHORT;if(i===qf)return e.INT;if(i===Pi)return e.UNSIGNED_INT;if(i===Bi)return e.FLOAT;if(i===zi)return e.HALF_FLOAT;if(i===G0)return e.ALPHA;if(i===V0)return e.RGB;if(i===Fi)return e.RGBA;if(i===zs)return e.DEPTH_COMPONENT;if(i===Vs)return e.DEPTH_STENCIL;if(i===k0)return e.RED;if(i===Jf)return e.RED_INTEGER;if(i===Pa)return e.RG;if(i===Kf)return e.RG_INTEGER;if(i===Qf)return e.RGBA_INTEGER;if(i===Fc||i===Hc||i===Gc||i===Vc)if(r===oe)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===Fc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Hc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Gc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Vc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===Fc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Hc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Gc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Vc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===jf||i===$f||i===td||i===ed)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===jf)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===$f)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===td)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ed)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===nd||i===id||i===sd||i===ad||i===rd||i===kc||i===od)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(i===nd||i===id)return r===oe?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===sd)return r===oe?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(i===ad)return a.COMPRESSED_R11_EAC;if(i===rd)return a.COMPRESSED_SIGNED_R11_EAC;if(i===kc)return a.COMPRESSED_RG11_EAC;if(i===od)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===ld||i===cd||i===ud||i===hd||i===fd||i===dd||i===pd||i===md||i===gd||i===_d||i===vd||i===yd||i===xd||i===Sd)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(i===ld)return r===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===cd)return r===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ud)return r===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===hd)return r===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===fd)return r===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===dd)return r===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===pd)return r===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===md)return r===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===gd)return r===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===_d)return r===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===vd)return r===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===yd)return r===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===xd)return r===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Sd)return r===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Md||i===bd||i===Td)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(i===Md)return r===oe?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===bd)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Td)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ed||i===Ad||i===Xc||i===wd)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(i===Ed)return a.COMPRESSED_RED_RGTC1_EXT;if(i===Ad)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Xc)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===wd)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===br?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}var sD=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,aD=`
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

}`,l_=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){let i=new Dc(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let n=t.cameras[0].viewport,i=new cs({vertexShader:sD,fragmentShader:aD,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ln(new ls(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},c_=class extends rs{constructor(t,n){super();let i=this,s=null,a=1,r=null,o="local-floor",l=1,c=null,f=null,p=null,u=null,d=null,v=null,b=typeof XRWebGLBinding<"u",g=new l_,h={},m=n.getContextAttributes(),x=null,y=null,E=[],A=[],_=new $t,T=null,L=null,R=new Dn;R.viewport=new Le;let U=new Dn;U.viewport=new Le;let H=[R,U],W=new Vf,D=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let gt=E[K];return gt===void 0&&(gt=new Yo,E[K]=gt),gt.getTargetRaySpace()},this.getControllerGrip=function(K){let gt=E[K];return gt===void 0&&(gt=new Yo,E[K]=gt),gt.getGripSpace()},this.getHand=function(K){let gt=E[K];return gt===void 0&&(gt=new Yo,E[K]=gt),gt.getHandSpace()};function Y(K){let gt=A.indexOf(K.inputSource);if(gt===-1)return;let xt=E[gt];xt!==void 0&&(xt.update(K.inputSource,K.frame,c||r),xt.dispatchEvent({type:K.type,data:K.inputSource}))}function I(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",I),s.removeEventListener("inputsourceschange",tt);for(let K=0;K<E.length;K++){let gt=A[K];gt!==null&&(A[K]=null,E[K].disconnect(gt))}D=null,k=null,g.reset();for(let K in h)delete h[K];if(t.setRenderTarget(x),d=null,u=null,p=null,s=null,y=null,Pt.stop(),i.isPresenting=!1,t.setPixelRatio(T),t.setSize(_.width,_.height,!1),L!==null){let K=L.camera;K.fov=L.fov,K.zoom=L.zoom,K.updateProjectionMatrix(),L=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){a=K,i.isPresenting===!0&&Nt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,i.isPresenting===!0&&Nt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return p===null&&b&&(p=new XRWebGLBinding(s,n)),p},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(x=t.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",I),s.addEventListener("inputsourceschange",tt),m.xrCompatible!==!0&&await n.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(_),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let xt=null,wt=null,_t=null;m.depth&&(_t=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,xt=m.stencil?Vs:zs,wt=m.stencil?br:Pi);let zt={colorFormat:n.RGBA8,depthFormat:_t,scaleFactor:a};p=this.getBinding(),u=p.createProjectionLayer(zt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),y=new si(u.textureWidth,u.textureHeight,{format:Fi,type:oi,depthTexture:new Hs(u.textureWidth,u.textureHeight,wt,void 0,void 0,void 0,void 0,void 0,void 0,xt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let xt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:a};d=new XRWebGLLayer(s,n,xt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new si(d.framebufferWidth,d.framebufferHeight,{format:Fi,type:oi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(o),Pt.setContext(s),Pt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function tt(K){for(let gt=0;gt<K.removed.length;gt++){let xt=K.removed[gt],wt=A.indexOf(xt);wt>=0&&(A[wt]=null,E[wt].disconnect(xt))}for(let gt=0;gt<K.added.length;gt++){let xt=K.added[gt],wt=A.indexOf(xt);if(wt===-1){for(let zt=0;zt<E.length;zt++)if(zt>=A.length){A.push(xt),wt=zt;break}else if(A[zt]===null){A[zt]=xt,wt=zt;break}if(wt===-1)break}let _t=E[wt];_t&&_t.connect(xt)}}function F(K,gt){gt===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(gt.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let gt=K.near,xt=K.far;g.texture!==null&&(g.depthNear>0&&(gt=g.depthNear),g.depthFar>0&&(xt=g.depthFar)),W.near=U.near=R.near=gt,W.far=U.far=R.far=xt,(D!==W.near||k!==W.far)&&(s.updateRenderState({depthNear:W.near,depthFar:W.far}),D=W.near,k=W.far),W.layers.mask=K.layers.mask|6,R.layers.mask=W.layers.mask&-5,U.layers.mask=W.layers.mask&-3;let wt=K.parent,_t=W.cameras;F(W,wt);for(let zt=0;zt<_t.length;zt++)F(_t[zt],wt);W.projectionMatrix.copy(R.projectionMatrix),W.projectionMatrixInverse.copy(R.projectionMatrixInverse),L===null&&K.isPerspectiveCamera&&(L={camera:K,fov:K.fov,zoom:K.zoom}),J(K,W,wt)};function J(K,gt,xt){xt===null?K.matrix.copy(gt.matrixWorld):(K.matrix.copy(xt.matrixWorld),K.matrix.invert(),K.matrix.multiply(gt.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(gt.projectionMatrix),K.projectionMatrixInverse.copy(gt.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Sf*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return W},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(K){l=K,u!==null&&(u.fixedFoveation=K),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=K)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(W)},this.getCameraTexture=function(K){return h[K]};let et=null;function bt(K,gt){if(f=gt.getViewerPose(c||r),v=gt,f!==null){let xt=f.views;d!==null&&(t.setRenderTargetFramebuffer(y,d.framebuffer),t.setRenderTarget(y));let wt=!1;xt.length!==W.cameras.length&&(W.cameras.length=0,wt=!0);for(let Ct=0;Ct<xt.length;Ct++){let le=xt[Ct],pe=null;if(d!==null)pe=d.getViewport(le);else{let rn=p.getViewSubImage(u,le);pe=rn.viewport,Ct===0&&(t.setRenderTargetTextures(y,rn.colorTexture,rn.depthStencilTexture),t.setRenderTarget(y))}let qt=H[Ct];qt===void 0&&(qt=new Dn,qt.layers.enable(Ct),qt.viewport=new Le,H[Ct]=qt),qt.matrix.fromArray(le.transform.matrix),qt.matrix.decompose(qt.position,qt.quaternion,qt.scale),qt.projectionMatrix.fromArray(le.projectionMatrix),qt.projectionMatrixInverse.copy(qt.projectionMatrix).invert(),qt.viewport.set(pe.x,pe.y,pe.width,pe.height),Ct===0&&(W.matrix.copy(qt.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale)),wt===!0&&W.cameras.push(qt)}let _t=s.enabledFeatures;if(_t&&_t.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&b){p=i.getBinding();let Ct=p.getDepthInformation(xt[0]);Ct&&Ct.isValid&&Ct.texture&&g.init(Ct,s.renderState)}if(_t&&_t.includes("camera-access")&&b){t.state.unbindTexture(),p=i.getBinding();for(let Ct=0;Ct<xt.length;Ct++){let le=xt[Ct].camera;if(le){let pe=h[le];pe||(pe=new Dc,h[le]=pe);let qt=p.getCameraImage(le);pe.sourceTexture=qt}}}}for(let xt=0;xt<E.length;xt++){let wt=A[xt],_t=E[xt];wt!==null&&_t!==void 0&&_t.update(wt,gt,c||r)}et&&et(K,gt),gt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:gt}),v=null}let Pt=new E1;Pt.setAnimationLoop(bt),this.setAnimationLoop=function(K){et=K},this.dispose=function(){}}},rD=new De,I1=new Ut;I1.set(-1,0,0,0,1,0,0,0,1);function oD(e,t){function n(g,h){g.matrixAutoUpdate===!0&&g.updateMatrix(),h.value.copy(g.matrix)}function i(g,h){h.color.getRGB(g.fogColor.value,K0(e)),h.isFog?(g.fogNear.value=h.near,g.fogFar.value=h.far):h.isFogExp2&&(g.fogDensity.value=h.density)}function s(g,h,m,x,y){h.isNodeMaterial?h.uniformsNeedUpdate=!1:h.isMeshBasicMaterial?a(g,h):h.isMeshLambertMaterial?(a(g,h),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)):h.isMeshToonMaterial?(a(g,h),p(g,h)):h.isMeshPhongMaterial?(a(g,h),f(g,h),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)):h.isMeshStandardMaterial?(a(g,h),u(g,h),h.isMeshPhysicalMaterial&&d(g,h,y)):h.isMeshMatcapMaterial?(a(g,h),v(g,h)):h.isMeshDepthMaterial?a(g,h):h.isMeshDistanceMaterial?(a(g,h),b(g,h)):h.isMeshNormalMaterial?a(g,h):h.isLineBasicMaterial?(r(g,h),h.isLineDashedMaterial&&o(g,h)):h.isPointsMaterial?l(g,h,m,x):h.isSpriteMaterial?c(g,h):h.isShadowMaterial?(g.color.value.copy(h.color),g.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function a(g,h){g.opacity.value=h.opacity,h.color&&g.diffuse.value.copy(h.color),h.emissive&&g.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(g.map.value=h.map,n(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.bumpMap&&(g.bumpMap.value=h.bumpMap,n(h.bumpMap,g.bumpMapTransform),g.bumpScale.value=h.bumpScale,h.side===Un&&(g.bumpScale.value*=-1)),h.normalMap&&(g.normalMap.value=h.normalMap,n(h.normalMap,g.normalMapTransform),g.normalScale.value.copy(h.normalScale),h.side===Un&&g.normalScale.value.negate()),h.displacementMap&&(g.displacementMap.value=h.displacementMap,n(h.displacementMap,g.displacementMapTransform),g.displacementScale.value=h.displacementScale,g.displacementBias.value=h.displacementBias),h.emissiveMap&&(g.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,g.emissiveMapTransform)),h.specularMap&&(g.specularMap.value=h.specularMap,n(h.specularMap,g.specularMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest);let m=t.get(h),x=m.envMap,y=m.envMapRotation;x&&(g.envMap.value=x,g.envMapRotation.value.setFromMatrix4(rD.makeRotationFromEuler(y)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(I1),g.reflectivity.value=h.reflectivity,g.ior.value=h.ior,g.refractionRatio.value=h.refractionRatio),h.lightMap&&(g.lightMap.value=h.lightMap,g.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,g.lightMapTransform)),h.aoMap&&(g.aoMap.value=h.aoMap,g.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,g.aoMapTransform))}function r(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,h.map&&(g.map.value=h.map,n(h.map,g.mapTransform))}function o(g,h){g.dashSize.value=h.dashSize,g.totalSize.value=h.dashSize+h.gapSize,g.scale.value=h.scale}function l(g,h,m,x){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.size.value=h.size*m,g.scale.value=x*.5,h.map&&(g.map.value=h.map,n(h.map,g.uvTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function c(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.rotation.value=h.rotation,h.map&&(g.map.value=h.map,n(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function f(g,h){g.specular.value.copy(h.specular),g.shininess.value=Math.max(h.shininess,1e-4)}function p(g,h){h.gradientMap&&(g.gradientMap.value=h.gradientMap)}function u(g,h){g.metalness.value=h.metalness,h.metalnessMap&&(g.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,g.metalnessMapTransform)),g.roughness.value=h.roughness,h.roughnessMap&&(g.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,g.roughnessMapTransform)),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)}function d(g,h,m){g.ior.value=h.ior,h.diffuseRoughness>0&&(g.diffuseRoughness.value=h.diffuseRoughness,h.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=h.diffuseRoughnessMap,n(h.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),h.sheen>0&&(g.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),g.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(g.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,g.sheenColorMapTransform)),h.sheenRoughnessMap&&(g.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,g.sheenRoughnessMapTransform))),h.clearcoat>0&&(g.clearcoat.value=h.clearcoat,g.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(g.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,g.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(g.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Un&&g.clearcoatNormalScale.value.negate())),h.dispersion>0&&(g.dispersion.value=h.dispersion),h.retroreflectivity>0&&(g.retroreflectivity.value=h.retroreflectivity),h.iridescence>0&&(g.iridescence.value=h.iridescence,g.iridescenceIOR.value=h.iridescenceIOR,g.iridescenceThicknessMinimum.value=h.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=h.iridescenceThicknessMaximum,h.iridescenceMap&&(g.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,g.iridescenceMapTransform)),h.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),h.transmission>0&&(g.transmission.value=h.transmission,g.transmissionSamplerMap.value=m.texture,g.transmissionSamplerSize.value.set(m.width,m.height),h.transmissionMap&&(g.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,g.transmissionMapTransform)),g.thickness.value=h.thickness,h.thicknessMap&&(g.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=h.attenuationDistance,g.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(g.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(g.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=h.specularIntensity,g.specularColor.value.copy(h.specularColor),h.specularColorMap&&(g.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,g.specularColorMapTransform)),h.specularIntensityMap&&(g.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,h){h.matcap&&(g.matcap.value=h.matcap)}function b(g,h){let m=t.get(h).light;g.referencePosition.value.setFromMatrixPosition(m.matrixWorld),g.nearDistance.value=m.shadow.camera.near,g.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function lD(e,t,n,i){let s={},a={};function r(m,x){let y=x.program;i.uniformBlockBinding(m,y,s[m.id])}function o(m,x){let y=s[m.id];y===void 0&&(v(m),y=l(m),s[m.id]=y,m.addEventListener("dispose",g));let E=x.program;i.updateUBOMapping(m,E);let A=t.render.frame;a[m.id]!==A&&(c(m),a[m.id]=A)}function l(m){let x=e.createBuffer(),y=m.__size,E=m.usage;return e.bindBuffer(e.UNIFORM_BUFFER,x),e.bufferData(e.UNIFORM_BUFFER,y,E),e.bindBuffer(e.UNIFORM_BUFFER,null),x}function c(m){let x=s[m.id],y=m.uniforms,E=m.__cache;e.bindBuffer(e.UNIFORM_BUFFER,x);for(let A=0,_=y.length;A<_;A++){let T=y[A];if(Array.isArray(T))for(let L=0,R=T.length;L<R;L++)f(T[L],A,L,E);else f(T,A,0,E)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function f(m,x,y,E){if(u(m,x,y,E)===!0){let A=m.__offset,_=m.value;if(Array.isArray(_)){let T=0;for(let L=0;L<_.length;L++){let R=_[L],U=b(R,!0);p(R,m.__data,T),T+=U.storage/Float32Array.BYTES_PER_ELEMENT}}else p(_,m.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,A,m.__data)}}function p(m,x,y){typeof m=="number"||typeof m=="boolean"?x[y]=m:m.isMatrix3?(x[y]=m.elements[0],x[y+1]=m.elements[1],x[y+2]=m.elements[2],x[y+3]=0,x[y+4]=m.elements[3],x[y+5]=m.elements[4],x[y+6]=m.elements[5],x[y+7]=0,x[y+8]=m.elements[6],x[y+9]=m.elements[7],x[y+10]=m.elements[8],x[y+11]=0):ArrayBuffer.isView(m)?x.set(m.subarray(0,x.length-y),y):m.toArray(x,y)}function u(m,x,y,E){let A=m.value,_=x+"_"+y;if(Array.isArray(A)){E[_]===void 0&&(E[_]=[]);let T=E[_],L=!1;for(let R=0;R<A.length;R++)d(A[R],T,R)===!0&&(L=!0);return L}return d(A,E,_)}function d(m,x,y){if(x[y]===void 0)return typeof m=="number"||typeof m=="boolean"?x[y]=m:ArrayBuffer.isView(m)?x[y]=m.slice():x[y]=m.clone(),!0;{let E=x[y];if(typeof m=="number"||typeof m=="boolean"){if(E!==m)return x[y]=m,!0}else{if(ArrayBuffer.isView(m))return!0;if(E.equals(m)===!1)return E.copy(m),!0}}return!1}function v(m){let x=m.uniforms,y=0,E=16;for(let _=0,T=x.length;_<T;_++){let L=Array.isArray(x[_])?x[_]:[x[_]];for(let R=0,U=L.length;R<U;R++){let H=L[R],W=Array.isArray(H.value)?H.value:[H.value],D=Array.isArray(x[_])||Array.isArray(H.value),k=y;for(let I=0,tt=W.length;I<tt;I++){let F=W[I],J=b(F,D),et=y%E,bt=et%J.boundary,Pt=et+bt;y+=bt,Pt!==0&&E-Pt<J.storage&&(y+=E-Pt),I===0&&(k=y),y+=J.storage}let Y=H.type==="int"?Int32Array:H.type==="uint"?Uint32Array:Float32Array;H.__data=new Y((y-k)/Float32Array.BYTES_PER_ELEMENT),H.__offset=k}}let A=y%E;return A>0&&(y+=E-A),m.__size=y,m.__cache={},this}function b(m,x){let y={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(y.boundary=4,y.storage=4):m.isVector2?(y.boundary=8,y.storage=8):m.isVector3||m.isColor?(y.boundary=16,y.storage=12):m.isVector4?(y.boundary=16,y.storage=16):m.isMatrix3?(y.boundary=16,y.storage=48):m.isMatrix4?(y.boundary=16,y.storage=64):m.isTexture?Nt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(m)?(y.boundary=16,y.storage=m.byteLength):Nt("WebGLRenderer: Unsupported uniform value type.",m),x===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function g(m){let x=m.target;x.removeEventListener("dispose",g),e.deleteBuffer(s[x.id]),delete s[x.id],delete a[x.id]}function h(){for(let m in s)e.deleteBuffer(s[m]);s={},a={}}return{bind:r,update:o,dispose:h}}var cD=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),fs=null;function uD(){return fs===null&&(fs=new Ef(cD,16,16,Pa,zi),fs.name="DFG_LUT",fs.minFilter=an,fs.magFilter=an,fs.wrapS=ss,fs.wrapT=ss,fs.generateMipmaps=!1,fs.needsUpdate=!0),fs}var Ld=class{constructor(t={}){let{canvas:n=Jb(),context:i=null,depth:s=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:u=!1,outputBufferType:d=oi}=t;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=r;let b=d,g=new Set([Qf,Kf,Jf]),h=new Set([oi,Pi,nl,br,Yf,Zf]),m=new Uint32Array(4),x=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},E=null,A=null,_=[],T=[],L=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=hs,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,U=!1,H=null,W=null,D=null,k=null;this._outputColorSpace=Mn;let Y=0,I=0,tt=null,F=-1,J=null,et=new Le,bt=new Le,Pt=null,K=new Qt(0),gt=0,xt=n.width,wt=n.height,_t=1,zt=null,Pe=null,Ct=new Le(0,0,xt,wt),le=new Le(0,0,xt,wt),pe=!1,qt=new yr,rn=new Af,Ve=!1,In=!1,Re=new De,Hi=new V,Je=new Le,li={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ci=!1;function ui(){return tt===null?_t:1}let O=i;function hi(M,N){return n.getContext(M,N)}let Te,Ee,dt,ke,Rt,Ot,w,S,B,it,$,rt,ht,q,Z,lt,C,Q,X,ct,at,ot,Et;try{let M={alpha:!0,depth:s,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${"187"}`),n.addEventListener("webglcontextlost",At,!1),n.addEventListener("webglcontextrestored",Ht,!1),n.addEventListener("webglcontextcreationerror",pt,!1),O===null){let N="webgl2";if(O=hi(N,M),O===null)throw hi(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Gt()}catch(M){throw n.removeEventListener("webglcontextlost",At,!1),n.removeEventListener("webglcontextrestored",Ht,!1),n.removeEventListener("webglcontextcreationerror",pt,!1),Lt("WebGLRenderer: "+M.message),M}function Gt(){Te=new S2(O),Te.init(),at=new iD(O,Te),Ee=new u2(O,Te,t,at),dt=new eD(O,Te),Ee.reversedDepthBuffer&&u&&dt.buffers.depth.setReversed(!0),W=O.createFramebuffer(),D=O.createFramebuffer(),k=O.createFramebuffer(),ke=new T2(O),Rt=new GN,Ot=new nD(O,Te,dt,Rt,Ee,at,ke),w=new x2(R),S=new AR(O),ot=new l2(O,S),B=new M2(O,S,ke,ot),it=new A2(O,B,S,ot,ke),Q=new E2(O,Ee,Ot),Z=new h2(Rt),$=new HN(R,w,Te,Ee,ot,Z),rt=new oD(R,Rt),ht=new kN,q=new JN(Te),C=new o2(R,w,dt,it,v,l),lt=new tD(R,it,Ee),Et=new lD(O,ke,Ee,dt),X=new c2(O,Te,ke),ct=new b2(O,Te,ke),ke.programs=$.programs,R.capabilities=Ee,R.extensions=Te,R.properties=Rt,R.renderLists=ht,R.shadowMap=lt,R.state=dt,R.info=ke}b!==oi&&(L=new R2(b,n.width,n.height,o,s,a));let st=new c_(R,O);this.xr=st,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let M=Te.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=Te.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return _t},this.setPixelRatio=function(M){M!==void 0&&(_t=M,this.setSize(xt,wt,!1))},this.getSize=function(M){return M.set(xt,wt)},this.setSize=function(M,N,G=!0){if(st.isPresenting){Nt("WebGLRenderer: Can't change size while VR device is presenting.");return}xt=M,wt=N,n.width=Math.floor(M*_t),n.height=Math.floor(N*_t),G===!0&&(n.style.width=M+"px",n.style.height=N+"px"),L!==null&&L.setSize(n.width,n.height),this.setViewport(0,0,M,N)},this.getDrawingBufferSize=function(M){return M.set(xt*_t,wt*_t).floor()},this.setDrawingBufferSize=function(M,N,G){xt=M,wt=N,_t=G,n.width=Math.floor(M*G),n.height=Math.floor(N*G),this.setViewport(0,0,M,N)},this.setEffects=function(M){if(b===oi){Lt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let N=0;N<M.length;N++)if(M[N].isOutputPass===!0){Nt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(et)},this.getViewport=function(M){return M.copy(Ct)},this.setViewport=function(M,N,G,P){M.isVector4?Ct.set(M.x,M.y,M.z,M.w):Ct.set(M,N,G,P),dt.viewport(et.copy(Ct).multiplyScalar(ui()).round())},this.getScissor=function(M){return M.copy(le)},this.setScissor=function(M,N,G,P){M.isVector4?le.set(M.x,M.y,M.z,M.w):le.set(M,N,G,P),dt.scissor(bt.copy(le).multiplyScalar(ui()).round())},this.getScissorTest=function(){return pe},this.setScissorTest=function(M){dt.setScissorTest(pe=M)},this.setOpaqueSort=function(M){zt=M},this.setTransparentSort=function(M){Pe=M},this.getClearColor=function(M){return M.copy(C.getClearColor())},this.setClearColor=function(){C.setClearColor(...arguments)},this.getClearAlpha=function(){return C.getClearAlpha()},this.setClearAlpha=function(){C.setClearAlpha(...arguments)},this.clear=function(M=!0,N=!0,G=!0){let P=0;if(M){let z=!1;if(tt!==null){let ft=tt.texture.format;z=g.has(ft)}if(z){let ft=tt.texture.type,yt=h.has(ft),ut=C.getClearColor(),vt=C.getClearAlpha(),Tt=ut.r,Bt=ut.g,Yt=ut.b;yt?(m[0]=Tt,m[1]=Bt,m[2]=Yt,m[3]=vt,O.clearBufferuiv(O.COLOR,0,m)):(x[0]=Tt,x[1]=Bt,x[2]=Yt,x[3]=vt,O.clearBufferiv(O.COLOR,0,x))}else P|=O.COLOR_BUFFER_BIT}N&&(P|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),G&&(P|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P!==0&&O.clear(P)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),H=M},this.dispose=function(){n.removeEventListener("webglcontextlost",At,!1),n.removeEventListener("webglcontextrestored",Ht,!1),n.removeEventListener("webglcontextcreationerror",pt,!1),C.dispose(),ht.dispose(),q.dispose(),Ot.dispose(),Rt.dispose(),w.dispose(),it.dispose(),B.dispose(),ot.dispose(),Et.dispose(),$.dispose(),st.dispose(),st.removeEventListener("sessionstart",d_),st.removeEventListener("sessionend",p_),Ba.stop()};function At(M){M.preventDefault(),Z0("WebGLRenderer: Context Lost."),U=!0}function Ht(){Z0("WebGLRenderer: Context Restored."),U=!1;let M=ke.autoReset,N=lt.enabled,G=lt.autoUpdate,P=lt.needsUpdate,z=lt.type;Gt(),ke.autoReset=M,lt.enabled=N,lt.autoUpdate=G,lt.needsUpdate=P,lt.type=z}function pt(M){Lt("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function ce(M){let N=M.target;N.removeEventListener("dispose",ce),Ke(N)}function Ke(M){Xs(M),Rt.remove(M)}function Xs(M){let N=Rt.get(M).programs;N!==void 0&&(N.forEach(function(G){$.releaseProgram(G)}),M.isShaderMaterial&&$.releaseShaderCache(M))}this.renderBufferDirect=function(M,N,G,P,z,ft){N===null&&(N=li);let yt=z.isMesh&&z.matrixWorld.determinantAffine()<0,ut=sT(M,N,G,P,z);dt.setMaterial(P,yt);let vt=G.index,Tt=1;if(P.wireframe===!0){if(vt=B.getWireframeAttribute(G),vt===void 0)return;Tt=2}let Bt=G.drawRange,Yt=G.attributes.position,St=Bt.start*Tt,Zt=(Bt.start+Bt.count)*Tt;ft!==null&&(St=Math.max(St,ft.start*Tt),Zt=Math.min(Zt,(ft.start+ft.count)*Tt)),vt!==null?(St=Math.max(St,0),Zt=Math.min(Zt,vt.count)):Yt!=null&&(St=Math.max(St,0),Zt=Math.min(Zt,Yt.count));let Be=Zt-St;if(Be<0||Be===1/0)return;ot.setup(z,P,ut,G,vt);let ve,me=X;if(vt!==null&&(ve=S.get(vt),me=ct,me.setIndex(ve)),z.isMesh)P.wireframe===!0?(dt.setLineWidth(P.wireframeLinewidth*ui()),me.setMode(O.LINES)):me.setMode(O.TRIANGLES);else if(z.isLine){let mn=P.linewidth;mn===void 0&&(mn=1),dt.setLineWidth(mn*ui()),z.isLineSegments?me.setMode(O.LINES):z.isLineLoop?me.setMode(O.LINE_LOOP):me.setMode(O.LINE_STRIP)}else z.isPoints?me.setMode(O.POINTS):z.isSprite&&me.setMode(O.TRIANGLES);if(z.isBatchedMesh)if(Te.get("WEBGL_multi_draw"))me.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let mn=z._multiDrawStarts,Mt=z._multiDrawCounts,En=z._multiDrawCount,ie=vt?S.get(vt).bytesPerElement:1,za=Rt.get(P).currentProgram.getUniforms();for(let gn=0;gn<En;gn++)za.setValue(O,"_gl_DrawID",gn),me.render(mn[gn]/ie,Mt[gn])}else if(z.isInstancedMesh)me.renderInstances(St,Be,z.count);else if(G.isInstancedBufferGeometry){let mn=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Mt=Math.min(G.instanceCount,mn);me.renderInstances(St,Be,Mt)}else me.render(St,Be)};function f_(M,N,G,P){H!==null&&M.isNodeMaterial&&H.setObject(P,M),Ve===!0&&Z.setState(M,G,!1),M.transparent===!0&&M.side===us&&M.forceSinglePass===!1?(M.side=Un,M.needsUpdate=!0,cl(M,N,P),M.side=Ia,M.needsUpdate=!0,cl(M,N,P),M.side=us):cl(M,N,P)}this.compile=function(M,N,G=null){G===null&&(G=M),H!==null&&H.renderStart(M,N,G),A=q.get(G),A.init(N),T.push(A),G.traverseVisible(function(z){z.isLight&&z.layers.test(N.layers)&&(A.pushLight(z),z.castShadow&&A.pushShadow(z))}),M!==G&&M.traverseVisible(function(z){z.isLight&&z.layers.test(N.layers)&&(A.pushLight(z),z.castShadow&&A.pushShadow(z))}),A.setupLights(),H!==null&&H.updateLights(A.state.lightsArray),In=this.localClippingEnabled,Ve=Z.init(this.clippingPlanes,In),Ve===!0&&Z.setGlobalState(this.clippingPlanes,N),H!==null&&lt.render(A.state.shadowsArray,G,N);let P=new Set;return M.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let ft=z.material;if(ft)if(Array.isArray(ft))for(let yt=0;yt<ft.length;yt++){let ut=ft[yt];f_(ut,G,N,z),P.add(ut)}else f_(ft,G,N,z),P.add(ft)}),A=T.pop(),H!==null&&H.renderEnd(),P},this.compileAsync=function(M,N,G=null){let P=this.compile(M,N,G);return new Promise(z=>{function ft(){if(P.forEach(function(yt){let vt=Rt.get(yt).currentProgram;(vt===void 0||vt.isReady())&&P.delete(yt)}),P.size===0){z(M);return}setTimeout(ft,10)}Te.get("KHR_parallel_shader_compile")!==null?ft():setTimeout(ft,10)})};let Gd=null;function nT(M){Gd&&Gd(M)}function d_(){Ba.stop()}function p_(){Ba.start()}let Ba=new E1;Ba.setAnimationLoop(nT),typeof self<"u"&&Ba.setContext(self),this.setAnimationLoop=function(M){Gd=M,st.setAnimationLoop(M),M===null?Ba.stop():Ba.start()},st.addEventListener("sessionstart",d_),st.addEventListener("sessionend",p_),this.render=function(M,N){if(N!==void 0&&N.isCamera!==!0){Lt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;H!==null&&H.renderStart(M,N);let G=st.enabled===!0&&st.isPresenting===!0,P=L!==null&&(tt===null||G)&&L.begin(R,tt);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(st.cameraAutoUpdate===!0&&st.updateCamera(N),N=st.getCamera()),M.isScene===!0&&M.onBeforeRender(R,M,N,tt),A=q.get(M,T.length),A.init(N),A.state.textureUnits=Ot.getTextureUnits(),T.push(A),Re.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),N.isArrayCamera?rn.setFromArrayCamera(N):qt.setFromProjectionMatrix(Re,bi,N.reversedDepth),In=this.localClippingEnabled,Ve=Z.init(this.clippingPlanes,In),E=ht.get(M,_.length),E.init(),_.push(E),this.info.render.frame++,st.enabled===!0&&st.isPresenting===!0){let yt=R.xr.getDepthSensingMesh();yt!==null&&Vd(yt,N,-1/0,R.sortObjects)}Vd(M,N,0,R.sortObjects),E.finish(),H!==null&&H.updateLights(A.state.lightsArray),R.sortObjects===!0&&E.sort(zt,Pe),ci=st.enabled===!1||st.isPresenting===!1||st.hasDepthSensing()===!1,ci&&C.addToRenderList(E,M),this.info.autoReset===!0&&this.info.reset(),Ve===!0&&Z.beginShadows();let z=A.state.shadowsArray;if(lt.render(z,M,N),Ve===!0&&Z.endShadows(),(P&&L.hasRenderPass())===!1){let yt=E.opaque,ut=E.transmissive;if(A.setupLights(),N.isArrayCamera){let vt=N.cameras;if(ut.length>0)for(let Tt=0,Bt=vt.length;Tt<Bt;Tt++){let Yt=vt[Tt];g_(yt,ut,M,Yt)}ci&&C.render(M);for(let Tt=0,Bt=vt.length;Tt<Bt;Tt++){let Yt=vt[Tt];m_(E,M,Yt,Yt.viewport)}}else ut.length>0&&g_(yt,ut,M,N),ci&&C.render(M),m_(E,M,N)}tt!==null&&I===0&&(Ot.updateMultisampleRenderTarget(tt),Ot.updateRenderTargetMipmap(tt)),P&&L.end(R),M.isScene===!0&&M.onAfterRender(R,M,N),ot.resetDefaultState(),F=-1,J=null,T.pop(),T.length>0?(A=T[T.length-1],Ot.setTextureUnits(A.state.textureUnits),Ve===!0&&Z.setGlobalState(R.clippingPlanes,A.state.camera)):A=null,_.pop(),_.length>0?E=_[_.length-1]:E=null,H!==null&&H.renderEnd()};function Vd(M,N,G,P){if(M.visible===!1)return;if(M.layers.test(N.layers)){if(M.isGroup)G=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(N);else if(M.isLight)A.pushLight(M),M.castShadow&&A.pushShadow(M);else if(M.isSprite){let yt=N.isArrayCamera?rn:qt;if(!M.frustumCulled||M.intersectsFrustum(yt)){P&&Je.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Re);let ut=it.update(M),vt=M.material;vt.visible&&E.push(M,ut,vt,G,Je.z,null,N)}}else if(M.isMesh||M.isLine||M.isPoints){let yt=N.isArrayCamera?rn:qt;if(!M.frustumCulled||M.intersectsFrustum(yt)){let ut=it.update(M),vt=M.material;if(P&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Je.copy(M.boundingSphere.center)):(ut.boundingSphere===null&&ut.computeBoundingSphere(),Je.copy(ut.boundingSphere.center)),Je.applyMatrix4(M.matrixWorld).applyMatrix4(Re)),Array.isArray(vt)){let Tt=ut.groups;for(let Bt=0,Yt=Tt.length;Bt<Yt;Bt++){let St=Tt[Bt],Zt=vt[St.materialIndex];Zt&&Zt.visible&&E.push(M,ut,Zt,G,Je.z,St,N)}}else vt.visible&&E.push(M,ut,vt,G,Je.z,null,N)}}}let ft=M.children;for(let yt=0,ut=ft.length;yt<ut;yt++)Vd(ft[yt],N,G,P)}function m_(M,N,G,P){let{opaque:z,transmissive:ft,transparent:yt}=M;A.setupLightsView(G),Ve===!0&&Z.setGlobalState(R.clippingPlanes,G),P&&dt.viewport(et.copy(P)),z.length>0&&jc(z,N,G),ft.length>0&&jc(ft,N,G),yt.length>0&&jc(yt,N,G),dt.buffers.depth.setTest(!0),dt.buffers.depth.setMask(!0),dt.buffers.color.setMask(!0),dt.setPolygonOffset(!1)}function g_(M,N,G,P){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[P.id]===void 0){let St=Te.has("EXT_color_buffer_half_float")||Te.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[P.id]=new si(1,1,{generateMipmaps:!0,type:St?zi:oi,minFilter:Gs,samples:Math.max(4,Ee.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Kt.workingColorSpace})}let ft=A.state.transmissionRenderTarget[P.id],yt=P.viewport||et;ft.setSize(yt.z*R.transmissionResolutionScale,yt.w*R.transmissionResolutionScale);let ut=R.getRenderTarget(),vt=R.getActiveCubeFace(),Tt=R.getActiveMipmapLevel();R.setRenderTarget(ft),R.getClearColor(K),gt=R.getClearAlpha(),gt<1&&R.setClearColor(16777215,.5),R.clear(),ci&&C.render(G);let Bt=R.toneMapping;R.toneMapping=hs;let Yt=P.viewport;if(P.viewport!==void 0&&(P.viewport=void 0),A.setupLightsView(P),Ve===!0&&Z.setGlobalState(R.clippingPlanes,P),jc(M,G,P),Ot.updateMultisampleRenderTarget(ft),Ot.updateRenderTargetMipmap(ft),Te.has("WEBGL_multisampled_render_to_texture")===!1){let St=!1;for(let Zt=0,Be=N.length;Zt<Be;Zt++){let ve=N[Zt],{object:me,geometry:mn,material:Mt,group:En}=ve;if(Mt.side===us&&me.layers.test(P.layers)){let ie=Mt.side;Mt.side=Un,Mt.needsUpdate=!0,__(me,G,P,mn,Mt,En),Mt.side=ie,Mt.needsUpdate=!0,St=!0}}St===!0&&(Ot.updateMultisampleRenderTarget(ft),Ot.updateRenderTargetMipmap(ft))}R.setRenderTarget(ut,vt,Tt),R.setClearColor(K,gt),Yt!==void 0&&(P.viewport=Yt),R.toneMapping=Bt}function jc(M,N,G){let P=N.isScene===!0?N.overrideMaterial:null;for(let z=0,ft=M.length;z<ft;z++){let yt=M[z],{object:ut,geometry:vt,group:Tt}=yt,Bt=yt.material;Bt.allowOverride===!0&&P!==null&&(Bt=P),ut.layers.test(G.layers)&&__(ut,N,G,vt,Bt,Tt)}}function __(M,N,G,P,z,ft){H!==null&&z.isNodeMaterial&&H.setObject(M,z),M.onBeforeRender(R,N,G,P,z,ft),M.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),z.onBeforeRender(R,N,G,P,M,ft),z.transparent===!0&&z.side===us&&z.forceSinglePass===!1?(z.side=Un,z.needsUpdate=!0,R.renderBufferDirect(G,N,P,z,M,ft),z.side=Ia,z.needsUpdate=!0,R.renderBufferDirect(G,N,P,z,M,ft),z.side=us):R.renderBufferDirect(G,N,P,z,M,ft),M.onAfterRender(R,N,G,P,z,ft)}function v_(M){let N=0;for(let G of M)G.texture!==null&&N++;return N}function cl(M,N,G){N.isScene!==!0&&(N=li);let P=Rt.get(M),z=A.state.lights,ft=A.state.shadowsArray,yt=z.state.version,ut=$.getParameters(M,z.state,ft,N,G,A.state.lightProbeGridArray),vt=$.getProgramCacheKey(ut),Tt=P.programs;P.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?N.environment:null,P.fog=N.fog;let Bt=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;P.envMap=w.get(M.envMap||P.environment,Bt),P.envMapRotation=P.environment!==null&&M.envMap===null?N.environmentRotation:M.envMapRotation,Tt===void 0&&(M.addEventListener("dispose",ce),Tt=new Map,P.programs=Tt,P.programVariants=new Map);let Yt=Tt.get(vt);if(Yt!==void 0){if(P.currentProgram===Yt&&P.lightsStateVersion===yt)return x_(M,ut),Yt}else ut.uniforms=$.getUniforms(M),H!==null&&M.isNodeMaterial&&H.build(M,G,ut),M.onBeforeCompile(ut,R),Yt=$.acquireProgram(ut,vt),Tt.set(vt,Yt),P.uniforms=ut.uniforms;let St=P.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(St.clippingPlanes=Z.uniform),x_(M,ut),P.needsLights=rT(M),P.lightsStateVersion=yt,P.needsLights&&(St.ambientLightColor.value=z.state.ambient,St.lightProbe.value=z.state.probe,St.sunLights.value=z.state.sun,St.sunLightShadows.value=z.state.sunShadow,St.directionalLights.value=z.state.directional,St.directionalLightShadows.value=z.state.directionalShadow,St.spotLights.value=z.state.spot,St.spotLightShadows.value=z.state.spotShadow,St.rectAreaLights.value=z.state.rectArea,St.ltc_1.value=z.state.rectAreaLTC1,St.ltc_2.value=z.state.rectAreaLTC2,St.pointLights.value=z.state.point,St.pointLightShadows.value=z.state.pointShadow,St.hemisphereLights.value=z.state.hemi,St.sunShadowMatrix.value=z.state.sunShadowMatrix,St.sunShadowCascade.value=z.state.sunShadowCascade,St.directionalShadowMatrix.value=z.state.directionalShadowMatrix,St.spotLightMatrix.value=z.state.spotLightMatrix,St.spotLightMap.value=z.state.spotLightMap,St.pointShadowMatrix.value=z.state.pointShadowMatrix),P.numLightProbeGrids=v_(A.state.lightProbeGridArray),P.currentProgram=Yt,P.uniformsList=null,Yt}function iT(M,N,G,P,z){let ft=Rt.get(M),yt=ft.currentProgram.id+","+P+","+z,ut=ft.programVariants.get(yt);return ut===void 0?(ut=cl(M,N,G),ft.programVariants.set(yt,ut)):(ft.currentProgram=ut,ft.uniformsList=null,ft.outputColorSpace=P,ft.toneMapping=z),ut}function y_(M){if(M.uniformsList===null){let N=M.currentProgram.getUniforms();M.uniformsList=il.seqWithValue(N.seq,M.uniforms)}return M.uniformsList}function x_(M,N){let G=Rt.get(M);G.outputColorSpace=N.outputColorSpace,G.batching=N.batching,G.batchingColor=N.batchingColor,G.instancing=N.instancing,G.instancingColor=N.instancingColor,G.instancingMorph=N.instancingMorph,G.skinning=N.skinning,G.morphTargets=N.morphTargets,G.morphNormals=N.morphNormals,G.morphColors=N.morphColors,G.morphTargetsCount=N.morphTargetsCount,G.numClippingPlanes=N.numClippingPlanes,G.numIntersection=N.numClipIntersection,G.vertexAlphas=N.vertexAlphas,G.vertexTangents=N.vertexTangents,G.toneMapping=N.toneMapping}function sT(M,N,G,P,z){N.isScene!==!0&&(N=li),Ot.resetTextureUnits();let ft=N.fog,yt=P.isMeshStandardMaterial||P.isMeshLambertMaterial||P.isMeshPhongMaterial?N.environment:null,ut=tt===null?R.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:Kt.workingColorSpace,vt=P.isMeshStandardMaterial||P.isMeshLambertMaterial&&!P.envMap||P.isMeshPhongMaterial&&!P.envMap,Tt=w.get(P.envMap||yt,vt),Bt=P.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Yt=!!G.attributes.tangent&&(!!P.normalMap||P.anisotropy>0),St=!!G.morphAttributes.position,Zt=!!G.morphAttributes.normal,Be=!!G.morphAttributes.color,ve=hs;P.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(ve=R.toneMapping);let me=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,mn=me!==void 0?me.length:0,Mt=Rt.get(P),En=A.state.lights;if(Ve===!0&&(In===!0||M!==J)){let Ce=M===J&&P.id===F;Z.setState(P,M,Ce)}let ie=!1,za=!1;P.version===Mt.__version?Mt.needsLights&&Mt.lightsStateVersion!==En.state.version||z.isBatchedMesh&&Mt.batching===!1||!z.isBatchedMesh&&Mt.batching===!0||z.isBatchedMesh&&Mt.batchingColor===!0&&z._colorsTexture===null||z.isBatchedMesh&&Mt.batchingColor===!1&&z._colorsTexture!==null||z.isInstancedMesh&&Mt.instancing===!1||!z.isInstancedMesh&&Mt.instancing===!0||z.isSkinnedMesh&&Mt.skinning===!1||!z.isSkinnedMesh&&Mt.skinning===!0||z.isInstancedMesh&&Mt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Mt.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Mt.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Mt.instancingMorph===!1&&z.morphTexture!==null||Mt.envMap!==Tt||P.fog===!0&&Mt.fog!==ft||Mt.numClippingPlanes!==void 0&&(Mt.numClippingPlanes!==Z.numPlanes||Mt.numIntersection!==Z.numIntersection)||Mt.vertexAlphas!==Bt||Mt.vertexTangents!==Yt||Mt.morphTargets!==St||Mt.morphNormals!==Zt||Mt.morphColors!==Be||Mt.morphTargetsCount!==mn||Mt.numLightProbeGrids!==v_(A.state.lightProbeGridArray)?ie=!0:(Mt.outputColorSpace!==ut||Mt.toneMapping!==ve)&&(za=!0):(ie=!0,Mt.__version=P.version);let gn=Mt.currentProgram;(ie===!0||za===!0)&&(gn=za===!0?iT(P,N,z,ut,ve):cl(P,N,z),H&&P.isNodeMaterial&&H.onUpdateProgram(P,gn,Mt));let $c=!1,Ws=!1,Fa=!1,te=gn.getUniforms(),on=Mt.uniforms;if(dt.useProgram(gn.program)&&($c=!0,Ws=!0,Fa=!0),P.id!==F&&(F=P.id,Ws=!0),$c||J!==M){dt.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),te.setValue(O,"projectionMatrix",M.projectionMatrix),te.setValue(O,"viewMatrix",M.matrixWorldInverse);let Qe=te.map.cameraPosition;Qe!==void 0&&Qe.setValue(O,Hi.setFromMatrixPosition(M.matrixWorld)),Ee.logarithmicDepthBuffer&&te.setValue(O,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(P.isMeshPhongMaterial||P.isMeshToonMaterial||P.isMeshLambertMaterial||P.isMeshBasicMaterial||P.isMeshStandardMaterial||P.isShaderMaterial)&&te.setValue(O,"isOrthographic",M.isOrthographicCamera===!0),J!==M&&(J=M,Ws=!0,Fa=!0)}if(Mt.needsLights&&(En.state.sunShadowMap.length>0&&te.setValue(O,"sunShadowMap",En.state.sunShadowMap,Ot),En.state.directionalShadowMap.length>0&&te.setValue(O,"directionalShadowMap",En.state.directionalShadowMap,Ot),En.state.spotShadowMap.length>0&&te.setValue(O,"spotShadowMap",En.state.spotShadowMap,Ot),En.state.pointShadowMap.length>0&&te.setValue(O,"pointShadowMap",En.state.pointShadowMap,Ot)),z.isSkinnedMesh){te.setOptional(O,z,"bindMatrix"),te.setOptional(O,z,"bindMatrixInverse");let Ce=z.skeleton;Ce&&(Ce.boneTexture===null&&Ce.computeBoneTexture(),te.setValue(O,"boneTexture",Ce.boneTexture,Ot))}z.isBatchedMesh&&(te.setOptional(O,z,"batchingTexture"),te.setValue(O,"batchingTexture",z._matricesTexture,Ot),te.setOptional(O,z,"batchingIdTexture"),te.setValue(O,"batchingIdTexture",z._indirectTexture,Ot),te.setOptional(O,z,"batchingColorTexture"),z._colorsTexture!==null&&te.setValue(O,"batchingColorTexture",z._colorsTexture,Ot));let Ei=G.morphAttributes;if((Ei.position!==void 0||Ei.normal!==void 0||Ei.color!==void 0)&&Q.update(z,G,gn),(Ws||Mt.receiveShadow!==z.receiveShadow)&&(Mt.receiveShadow=z.receiveShadow,te.setValue(O,"receiveShadow",z.receiveShadow)),(P.isMeshStandardMaterial||P.isMeshLambertMaterial||P.isMeshPhongMaterial)&&P.envMap===null&&N.environment!==null&&(on.envMapIntensity.value=N.environmentIntensity),on.dfgLUT!==void 0&&(on.dfgLUT.value=uD()),Ws){if(te.setValue(O,"toneMappingExposure",R.toneMappingExposure),Mt.needsLights&&aT(on,Fa),ft&&P.fog===!0&&rt.refreshFogUniforms(on,ft),rt.refreshMaterialUniforms(on,P,_t,wt,A.state.transmissionRenderTarget[M.id]),Mt.needsLights&&Mt.numLightProbeGrids>0){let Ce=y,Qe=0;for(let ps of A.state.lightProbeGridArray)ps.texture!==null&&(Ce.textures[Qe]=ps.texture,Ce.min[Qe]=ps.boundingBox.min,Ce.max[Qe]=ps.boundingBox.max,Ce.resolution[Qe]=ps.resolution,Qe++);for(let ps in Ce)Ce[ps].length=Qe;on.probesSH.value=Ce.textures,on.probesMin.value=Ce.min,on.probesMax.value=Ce.max,on.probesResolution.value=Ce.resolution}il.upload(O,y_(Mt),on,Ot)}if(P.isShaderMaterial&&P.uniformsNeedUpdate===!0&&(il.upload(O,y_(Mt),on,Ot),P.uniformsNeedUpdate=!1),P.isSpriteMaterial&&te.setValue(O,"center",z.center),te.setValue(O,"modelViewMatrix",z.modelViewMatrix),te.setValue(O,"normalMatrix",z.normalMatrix),te.setValue(O,"modelMatrix",z.matrixWorld),P.uniformsGroups!==void 0){let Ce=P.uniformsGroups;for(let Qe=0,ps=Ce.length;Qe<ps;Qe++){let M_=Ce[Qe];Et.update(M_,gn),Et.bind(M_,gn)}}return gn}function aT(M,N){M.ambientLightColor.needsUpdate=N,M.lightProbe.needsUpdate=N,M.sunLights.needsUpdate=N,M.sunLightShadows.needsUpdate=N,M.directionalLights.needsUpdate=N,M.directionalLightShadows.needsUpdate=N,M.pointLights.needsUpdate=N,M.pointLightShadows.needsUpdate=N,M.spotLights.needsUpdate=N,M.spotLightShadows.needsUpdate=N,M.rectAreaLights.needsUpdate=N,M.hemisphereLights.needsUpdate=N}function rT(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return tt},this.setRenderTargetTextures=function(M,N,G){let P=Rt.get(M);P.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,P.__autoAllocateDepthBuffer===!1&&(P.__useRenderToTexture=!1),Rt.get(M.texture).__webglTexture=N,Rt.get(M.depthTexture).__webglTexture=P.__autoAllocateDepthBuffer?void 0:G,P.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,N){let G=Rt.get(M);G.__webglFramebuffer=N,G.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(M,N=0,G=0){tt=M,Y=N,I=G;let P=null,z=!1,ft=!1;if(M){let ut=Rt.get(M);if(ut.__useDefaultFramebuffer!==void 0){dt.bindFramebuffer(O.FRAMEBUFFER,ut.__webglFramebuffer),et.copy(M.viewport),bt.copy(M.scissor),Pt=M.scissorTest,dt.viewport(et),dt.scissor(bt),dt.setScissorTest(Pt),F=-1;return}else if(ut.__webglFramebuffer===void 0)Ot.setupRenderTarget(M);else if(ut.__hasExternalTextures)Ot.rebindTextures(M,Rt.get(M.texture).__webglTexture,Rt.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let Bt=M.depthTexture;if(ut.__boundDepthTexture!==Bt){if(Bt!==null&&Rt.has(Bt)&&(M.width!==Bt.image.width||M.height!==Bt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ot.setupDepthRenderbuffer(M)}}let vt=M.texture;(vt.isData3DTexture||vt.isDataArrayTexture||vt.isCompressedArrayTexture)&&(ft=!0);let Tt=Rt.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Tt[N])?P=Tt[N][G]:P=Tt[N],z=!0):M.samples>0&&Ot.useMultisampledRTT(M)===!1?P=Rt.get(M).__webglMultisampledFramebuffer:Array.isArray(Tt)?P=Tt[G]:P=Tt,et.copy(M.viewport),bt.copy(M.scissor),Pt=M.scissorTest}else et.copy(Ct).multiplyScalar(_t).floor(),bt.copy(le).multiplyScalar(_t).floor(),Pt=pe;if(G!==0&&(P=W),dt.bindFramebuffer(O.FRAMEBUFFER,P)&&dt.drawBuffers(M,P),dt.viewport(et),dt.scissor(bt),dt.setScissorTest(Pt),z){let ut=Rt.get(M.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+N,ut.__webglTexture,G)}else if(ft){let ut=N;for(let vt=0;vt<M.textures.length;vt++){let Tt=Rt.get(M.textures[vt]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+vt,Tt.__webglTexture,G,ut)}}else if(M!==null&&G!==0){let ut=Rt.get(M.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,ut.__webglTexture,G)}F=-1};function S_(M){let N=Rt.get(M);return(N.__readFormat!==M.format||N.__readType!==M.type)&&(N.__readFormat=M.format,N.__readType=M.type,N.__formatReadable=Ee.textureFormatReadable(M.format),N.__typeReadable=Ee.textureTypeReadable(M.type)),N}this.readRenderTargetPixels=function(M,N,G,P,z,ft,yt,ut=0){if(!(M&&M.isWebGLRenderTarget)){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let vt=Rt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&yt!==void 0&&(vt=vt[yt],Array.isArray(vt)&&(vt=vt[0])),vt){dt.bindFramebuffer(O.FRAMEBUFFER,vt);try{let Tt=M.textures[ut],Bt=Tt.format,Yt=Tt.type;M.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+ut);let St=S_(Tt);if(St.__formatReadable===!1){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(St.__typeReadable===!1){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=M.width-P&&G>=0&&G<=M.height-z&&O.readPixels(N,G,P,z,at.convert(Bt),at.convert(Yt),ft)}finally{let Tt=tt!==null?Rt.get(tt).__webglFramebuffer:null;dt.bindFramebuffer(O.FRAMEBUFFER,Tt)}}},this.readRenderTargetPixelsAsync=async function(M,N,G,P,z,ft,yt,ut=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let vt=Rt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&yt!==void 0&&(vt=vt[yt],Array.isArray(vt)&&(vt=vt[0])),vt)if(N>=0&&N<=M.width-P&&G>=0&&G<=M.height-z){dt.bindFramebuffer(O.FRAMEBUFFER,vt);let Tt=M.textures[ut],Bt=Tt.format,Yt=Tt.type;M.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+ut);let St=S_(Tt);if(St.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(St.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Zt=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Zt),O.bufferData(O.PIXEL_PACK_BUFFER,ft.byteLength,O.STREAM_READ),O.readPixels(N,G,P,z,at.convert(Bt),at.convert(Yt),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let Be=tt!==null?Rt.get(tt).__webglFramebuffer:null;dt.bindFramebuffer(O.FRAMEBUFFER,Be);let ve=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Qb(O,ve,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Zt),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,ft),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(Zt),O.deleteSync(ve),ft}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,N=null,G=0){let P=Math.pow(2,-G),z=Math.floor(M.image.width*P),ft=Math.floor(M.image.height*P),yt=N!==null?N.x:0,ut=N!==null?N.y:0;Ot.setTexture2D(M,0),O.copyTexSubImage2D(O.TEXTURE_2D,G,0,0,yt,ut,z,ft),dt.unbindTexture()},this.copyTextureToTexture=function(M,N,G=null,P=null,z=0,ft=0){let yt,ut,vt,Tt,Bt,Yt,St,Zt,Be,ve=M.isCompressedTexture?M.mipmaps[ft]:M.image;if(G!==null)yt=G.max.x-G.min.x,ut=G.max.y-G.min.y,vt=G.isBox3?G.max.z-G.min.z:1,Tt=G.min.x,Bt=G.min.y,Yt=G.isBox3?G.min.z:0;else{let te=Math.pow(2,-z);yt=Math.floor(ve.width*te),ut=Math.floor(ve.height*te),M.isDataArrayTexture?vt=ve.depth:M.isData3DTexture?vt=Math.floor(ve.depth*te):vt=1,Tt=0,Bt=0,Yt=0}P!==null?(St=P.x,Zt=P.y,Be=P.z):(St=0,Zt=0,Be=0);let me=at.convert(N.format),mn=at.convert(N.type),Mt;N.isData3DTexture?(Ot.setTexture3D(N,0),Mt=O.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(Ot.setTexture2DArray(N,0),Mt=O.TEXTURE_2D_ARRAY):(Ot.setTexture2D(N,0),Mt=O.TEXTURE_2D),dt.activeTexture(O.TEXTURE0),dt.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,N.flipY),dt.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),dt.pixelStorei(O.UNPACK_ALIGNMENT,N.unpackAlignment);let En=dt.getParameter(O.UNPACK_ROW_LENGTH),ie=dt.getParameter(O.UNPACK_IMAGE_HEIGHT),za=dt.getParameter(O.UNPACK_SKIP_PIXELS),gn=dt.getParameter(O.UNPACK_SKIP_ROWS),$c=dt.getParameter(O.UNPACK_SKIP_IMAGES);dt.pixelStorei(O.UNPACK_ROW_LENGTH,ve.width),dt.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ve.height),dt.pixelStorei(O.UNPACK_SKIP_PIXELS,Tt),dt.pixelStorei(O.UNPACK_SKIP_ROWS,Bt),dt.pixelStorei(O.UNPACK_SKIP_IMAGES,Yt);let Ws=M.isDataArrayTexture||M.isData3DTexture,Fa=N.isDataArrayTexture||N.isData3DTexture;if(M.isDepthTexture){let te=Rt.get(M),on=Rt.get(N),Ei=Rt.get(te.__renderTarget),Ce=Rt.get(on.__renderTarget);dt.bindFramebuffer(O.READ_FRAMEBUFFER,Ei.__webglFramebuffer),dt.bindFramebuffer(O.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let Qe=0;Qe<vt;Qe++)Ws&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Rt.get(M).__webglTexture,z,Yt+Qe),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Rt.get(N).__webglTexture,ft,Be+Qe)),O.blitFramebuffer(Tt,Bt,Tt+yt,Bt+ut,St,Zt,St+yt,Zt+ut,O.DEPTH_BUFFER_BIT,O.NEAREST);dt.bindFramebuffer(O.READ_FRAMEBUFFER,null),dt.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(z!==0||M.isRenderTargetTexture||Rt.has(M)){let te=Rt.get(M),on=Rt.get(N);dt.bindFramebuffer(O.READ_FRAMEBUFFER,D),dt.bindFramebuffer(O.DRAW_FRAMEBUFFER,k);for(let Ei=0;Ei<vt;Ei++)Ws?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,te.__webglTexture,z,Yt+Ei):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,te.__webglTexture,z),Fa?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,on.__webglTexture,ft,Be+Ei):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,on.__webglTexture,ft),z!==0?O.blitFramebuffer(Tt,Bt,Tt+yt,Bt+ut,St,Zt,St+yt,Zt+ut,O.COLOR_BUFFER_BIT,O.NEAREST):Fa?O.copyTexSubImage3D(Mt,ft,St,Zt,Be+Ei,Tt,Bt,yt,ut):O.copyTexSubImage2D(Mt,ft,St,Zt,Tt,Bt,yt,ut);dt.bindFramebuffer(O.READ_FRAMEBUFFER,null),dt.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else Fa?M.isDataTexture||M.isData3DTexture?O.texSubImage3D(Mt,ft,St,Zt,Be,yt,ut,vt,me,mn,ve.data):N.isCompressedArrayTexture?O.compressedTexSubImage3D(Mt,ft,St,Zt,Be,yt,ut,vt,me,ve.data):O.texSubImage3D(Mt,ft,St,Zt,Be,yt,ut,vt,me,mn,ve):M.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,ft,St,Zt,yt,ut,me,mn,ve.data):M.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,ft,St,Zt,ve.width,ve.height,me,ve.data):O.texSubImage2D(O.TEXTURE_2D,ft,St,Zt,yt,ut,me,mn,ve);dt.pixelStorei(O.UNPACK_ROW_LENGTH,En),dt.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ie),dt.pixelStorei(O.UNPACK_SKIP_PIXELS,za),dt.pixelStorei(O.UNPACK_SKIP_ROWS,gn),dt.pixelStorei(O.UNPACK_SKIP_IMAGES,$c),ft===0&&N.generateMipmaps===!0&&N.mipmapsAutoUpdate===!0&&O.generateMipmap(Mt),dt.unbindTexture()},this.initRenderTarget=function(M){Rt.get(M).__webglFramebuffer===void 0&&Ot.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?Ot.setTextureCube(M,0):M.isData3DTexture?Ot.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Ot.setTexture2DArray(M,0):Ot.setTexture2D(M,0),dt.unbindTexture()},this.resetState=function(){Y=0,I=0,tt=null,dt.reset(),ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let n=this.getContext();n.drawingBufferColorSpace=Kt._getDrawingBufferColorSpace(t),n.unpackColorSpace=Kt._getUnpackColorSpace()}};function Xn(e){let t="/";if(typeof window<"u"){let n=document.querySelector("script[src*='assets/app.js']"),i=n instanceof HTMLScriptElement?n.src:"";if(i)t=new URL("..",i).pathname;else{let s=window.location.pathname;t=s.endsWith("/")?s:s.replace(/\/[^/]*$/,"/")}}return t.endsWith("/")||(t+="/"),t+e.replace(/^\//,"")}function kn(e,t,n){return Math.max(t,Math.min(n,e))}function u_(e,t){return Math.round(t+(e-t)/3)}function Id(e,t){return Xn(e==="woman"?t==="imv"?"universe/bed/woman-imv.jpg":t==="niv"?"universe/bed/woman-niv.jpg":t==="mask"||t==="cannula"?"universe/bed/woman-mask.jpg":"universe/bed/woman-room.jpg":t==="imv"?"universe/bed/imv.jpg":t==="niv"?"universe/bed/niv.jpg":t==="mask"?"universe/bed/mask.jpg":t==="cannula"?"universe/bed/cannula.jpg":"universe/bed/room.jpg")}function fD(e){return{mode:"VC-AC",tv:480,rr:16,peep:5,ps:10,fio2:40,ie:"1:2",ipap:12,epap:5,backup:14,ti:1,mask:"Full face",...e}}function al(e){return{...e,fluidMl:e.fluidMl??0,vent:fD(e.vent),pending:"",pressor:"",insulin:!1,calcium:!1,dialysis:!1,prone:!1,protective:!1,headUp:!1,ct:!1,kReplaced:!1,settled:!1,called:!1,announced:!1,worseSaid:!1,ignored:0,heard:"",line:"",good:[],bad:[]}}function P1(){return[al({id:"ravi",bed:1,name:"Ravi Kumar",age:54,sex:"man",dx:"Severe ARDS",story:"Pneumonia for three days. He was intubated an hour ago. Saturation is 84 percent on a high inspired oxygen. The plateau pressure is climbing.",exam:"Tube in place. Coarse crackles. Cold hands. He is not ready to come off the ventilator.",support:"imv",hr:118,sbp:108,dbp:64,spo2:84,rr:28,gcs:6,glucose:142,k:4.1,kKnown:!1,lactate:2.4,callAt:8,vent:{mode:"VC-AC",tv:560,rr:28,peep:8,fio2:90}}),al({id:"sunita",bed:2,name:"Sunita Devi",age:61,sex:"woman",dx:"Septic shock",story:"Fever and a cough for two days. The family could not wake her this morning. Lactate is 5.2. She has had no fluid yet.",exam:"Hot, then now cool. Crackles at the right base. Capillary refill is slow.",support:"room",hr:124,sbp:78,dbp:46,spo2:93,rr:26,gcs:13,glucose:168,k:4.4,kKnown:!1,lactate:5.2,callAt:28}),al({id:"imran",bed:3,name:"Imran Khan",age:29,sex:"man",dx:"Diabetic ketoacidosis",story:"Type 1 diabetes. Insulin was missed through a vomiting illness. Breathing is deep. Glucose is 486. The potassium has not been looked at.",exam:"Dry mouth. Mild abdominal tenderness. No focal chest finding. The rate of breathing is the acid.",support:"room",hr:116,sbp:104,dbp:64,spo2:98,rr:30,gcs:14,glucose:486,k:2.9,kKnown:!1,lactate:2.2,callAt:48}),al({id:"anil",bed:4,name:"Anil Sharma",age:47,sex:"man",dx:"Intracerebral hemorrhage",story:"Sudden headache, then he stopped answering. The right pupil is larger. The systolic pressure is 188. There is no scan yet.",exam:"GCS 6. Right pupil larger. Neck is not straight. He is on a face mask.",support:"mask",hr:58,sbp:188,dbp:104,spo2:96,rr:14,gcs:6,glucose:128,k:4,kKnown:!1,lactate:1.4,callAt:68}),al({id:"meena",bed:5,name:"Meena Iyer",age:66,sex:"woman",dx:"Cardiogenic shock",story:"Anterior infarction this morning. She is cold, wet, and quiet. Saturation is 88 percent. A litre of fluid has not been given, and should not be.",exam:"Crackles to the mid zones. A gallop. Cool hands. The mask is on. NIV is not applied yet.",support:"mask",hr:114,sbp:78,dbp:50,spo2:88,rr:28,gcs:14,glucose:136,k:4.2,kKnown:!1,lactate:4,callAt:88}),al({id:"gopal",bed:6,name:"Gopal Das",age:71,sex:"man",dx:"Hyperkalemia, anuric",story:"No urine for twelve hours. The monitor shows a wide QRS and peaked T waves. Potassium is 7.1. Dialysis is not running.",exam:"Slow rate. No fluid overload to listen for. He is on nasal oxygen.",support:"cannula",hr:52,sbp:136,dbp:78,spo2:96,rr:16,gcs:15,glucose:118,k:7.1,kKnown:!0,lactate:2.4,callAt:108})]}function Kc(e){let t=u_(e.sbp,e.dbp);return e.id==="ravi"?`Bed ${e.bed}. ${e.name}. Saturation ${e.spo2} percent. The ventilator needs a decision.`:e.id==="sunita"?`Bed ${e.bed}. ${e.name}. Mean pressure ${t}. She is in shock.`:e.id==="imran"?`Bed ${e.bed}. ${e.name}. Glucose ${e.glucose}. Do not start insulin until you know the potassium.`:e.id==="anil"?`Bed ${e.bed}. ${e.name}. Consciousness has fallen. The right pupil is larger.`:e.id==="meena"?`Bed ${e.bed}. ${e.name}. Mean pressure ${t}. The lungs are wet. Do not give fluid.`:`Bed ${e.bed}. ${e.name}. Potassium ${e.k}. The QRS is wide.`}function ee(e,t){e.includes(t)||e.push(t)}function dD(e,t,n){e.heard=t,e.line=n}function B1(e){return e.id==="ravi"?[{id:"vt6",label:"Tidal volume 6 mL/kg, plateau under 30"},{id:"peep",label:"Raise PEEP, keep the volume low"},{id:"prone",label:"Prone the patient"},{id:"vt10",label:"Raise tidal volume above 10 mL/kg"},{id:"extubate",label:"Extubate now"}]:e.id==="sunita"?[{id:"o2",label:"Oxygen by mask"},{id:"fluid",label:"Balanced crystalloid 500 mL"},{id:"norepi",label:"Noradrenaline 0.05 mcg/kg/min"},{id:"adr",label:"Adrenaline 0.05 mcg/kg/min"},{id:"flood",label:"Give another 2 litres without looking"}]:e.id==="imran"?[{id:"fluid",label:"Balanced crystalloid 500 mL"},{id:"checkk",label:"Check the potassium"},{id:"kcl",label:"Replace potassium"},{id:"insulin",label:"Insulin infusion 0.1 units/kg/h"},{id:"bicarb",label:"Sodium bicarbonate bolus"}]:e.id==="anil"?[{id:"head",label:"Head up, neck straight"},{id:"ct",label:"Non-contrast CT of the head"},{id:"hts",label:"Hypertonic saline"},{id:"nic",label:"Nicardipine, lower the pressure smoothly"},{id:"flat",label:"Lay the head flat"}]:e.id==="meena"?[{id:"niv",label:"Set NIV and apply it"},{id:"norepi",label:"Noradrenaline 0.05 mcg/kg/min"},{id:"dobutamine",label:"Dobutamine 2.5 mcg/kg/min"},{id:"fluid",label:"Crystalloid 500 mL"},{id:"gtn",label:"GTN infusion"}]:[{id:"calcium",label:"Calcium gluconate, intravenous"},{id:"insulin",label:"Insulin with dextrose"},{id:"dialysis",label:"Start dialysis"},{id:"wait",label:"A resin, and recheck in six hours"},{id:"saline",label:"Potassium-free fluid only"}]}function pD(e){e.id==="ravi"&&(e.settled=e.protective&&e.prone),e.id==="sunita"&&(e.settled=e.fluidMl>=250&&(e.pressor==="norepi"||e.pressor==="adr")),e.id==="imran"&&(e.settled=e.kReplaced&&e.insulin&&e.k>=3.3),e.id==="anil"&&(e.settled=e.headUp&&e.ct&&(e.good.includes("Hypertonic saline")||e.good.includes("Pressure lowered smoothly"))),e.id==="meena"&&(e.settled=e.support==="niv"&&(e.pressor==="norepi"||e.pressor==="dobutamine"&&u_(e.sbp,e.dbp)>=65)),e.id==="gopal"&&(e.settled=e.calcium&&e.insulin&&e.dialysis),e.settled&&(e.called=!1)}function z1(e,t){let n={...e,good:[...e.good],bad:[...e.bad],vent:{...e.vent}},i="Noted.";return n.id==="ravi"?t==="vt6"?(n.protective=!0,n.vent.tv=420,n.vent.rr=22,n.vent.peep=Math.max(8,n.vent.peep),n.vent.fio2=Math.max(50,n.vent.fio2-10),n.rr=22,n.spo2=kn(n.spo2+4,70,100),ee(n.good,"Lung-protective tidal volume"),i="Six millilitres per kilogram. The plateau stays under 30. That is the volume for this lung."):t==="peep"?(n.vent.peep=14,n.vent.fio2=Math.max(50,n.vent.fio2-10),n.spo2=kn(n.spo2+3,70,100),ee(n.good,"PEEP raised with a safe volume"),i="End-expiratory pressure is up. Keep the tidal volume low while you do it."):t==="prone"?(n.prone=!0,n.vent.fio2=Math.max(45,n.vent.fio2-10),n.spo2=kn(n.spo2+6,70,100),ee(n.good,"Prone for severe ARDS"),i="He is prone. Early, prolonged proning is the move when the oxygen is this low."):t==="vt10"?(n.vent.tv=740,n.vent.rr=16,n.rr=16,n.spo2=kn(n.spo2-4,70,100),n.protective=!1,ee(n.bad,"Tidal volume above 10 mL/kg"),i="That volume harms this lung. Come back to 6 millilitres per kilogram predicted weight."):t==="extubate"&&(n.spo2=kn(n.spo2-6,70,100),n.protective=!1,ee(n.bad,"Extubation during severe hypoxemia"),i="He is not ready to come off the ventilator. Leave the tube in, and keep the volume at 6 millilitres per kilogram."):n.id==="sunita"?t==="o2"?(n.support="mask",n.spo2=kn(n.spo2+3,70,100),ee(n.good,"Oxygen on"),i="The mask is on. Saturation is rising. The pressure is still the emergency."):t==="fluid"?(n.fluidMl+=500,n.fluidMl<=1e3?(n.sbp+=8,n.dbp+=4,n.lactate=Math.max(1.2,n.lactate-.4),ee(n.good,"First fluid into an empty circulation"),i="A bolus met an empty circulation. Look again before the next bag. If the mean pressure stays under 65, start noradrenaline."):(n.spo2=kn(n.spo2-3,70,100),ee(n.bad,"Fluid continued after the first response"),i="Further fluid, after the first response, is how edema starts. The oxygen is not better.")):t==="norepi"||t==="adr"?(n.pressor=t,n.line=t==="norepi"?"Noradrenaline 0.05 mcg/kg/min":"Adrenaline 0.05 mcg/kg/min",n.sbp+=t==="adr"?18:14,n.dbp+=t==="adr"?12:10,t==="adr"&&(n.hr+=12),n.fluidMl<250?(ee(n.bad,"Vasopressor before any fluid"),i="The pressure rose, and the tank is still empty. Give a crystalloid, then keep the infusion."):(ee(n.good,t==="norepi"?"Noradrenaline for a low mean pressure":"Adrenaline for a low mean pressure"),i=t==="norepi"?"Noradrenaline raised the mean pressure. Check the lactate and the urine, not only the number.":"Adrenaline raised the pressure and the rate. It is reasonable when the mean pressure is low.")):t==="flood"&&(n.fluidMl+=2e3,n.spo2=kn(n.spo2-6,70,100),ee(n.bad,"Two litres without a new look"),i="Unchecked fluid. The lungs are wetter and the oxygen fell. Reassess, then a vasopressor if the mean pressure is still under 65."):n.id==="imran"?t==="fluid"?(n.fluidMl+=500,n.sbp+=6,ee(n.good,"Fluid first in ketoacidosis"),i="Fluid first. That is the resuscitation. The potassium still decides the insulin."):t==="checkk"?(n.kKnown=!0,i=`Potassium is ${n.k}. Under 3.3. Replace potassium and hold the insulin.`):t==="kcl"?n.kKnown?(n.k=3.6,n.kReplaced=!0,ee(n.good,"Potassium replaced before insulin"),i="Potassium is now 3.6. Insulin can run. Do not stop it just because the glucose falls."):i="Look at the potassium first, so you know what you are treating.":t==="insulin"?!n.kKnown||n.k<3.3?(n.hr=42,n.k=Math.max(2.2,n.k-.6),ee(n.bad,"Insulin with potassium under 3.3"),i="Insulin with potassium at this level can stop the heart. Hold it. Replace potassium."):(n.insulin=!0,n.line="Insulin 0.1 units/kg/h",n.glucose=Math.max(180,n.glucose-80),ee(n.good,"Insulin after a safe potassium"),i="Insulin is running. Add dextrose as the glucose nears 200, and keep the insulin on until the gap closes."):t==="bicarb"&&(ee(n.bad,"Bicarbonate that was not needed"),i="Bicarbonate is not routine at this pH. Fluid, potassium, and insulin are the treatment."):n.id==="anil"?t==="head"?(n.headUp=!0,ee(n.good,"Head up"),i="Head up, neck straight. That is the position. It does not replace the scan."):t==="ct"?(n.ct=!0,ee(n.good,"Non-contrast CT"),i="Non-contrast CT. Acute blood in the right basal ganglia. MRI is not required."):t==="hts"?(n.line="3% saline",n.gcs=Math.min(10,n.gcs+1),ee(n.good,"Hypertonic saline"),i="Hypertonic saline for a falling consciousness. It is for herniation, not a standing drip."):t==="nic"?(n.sbp=158,n.dbp=88,n.line="Nicardipine",ee(n.good,"Pressure lowered smoothly"),i="The systolic pressure is coming down toward 160, smoothly. Not a nitrate, and not a collapse."):t==="flat"&&(n.headUp=!1,n.gcs=Math.max(3,n.gcs-1),ee(n.bad,"Head laid flat"),i="Flat raises the intracranial pressure. Sit the head up."):n.id==="meena"?t==="niv"?(n.support="niv",n.vent.mode="NIV",n.vent.ipap=12,n.vent.epap=6,n.vent.fio2=60,n.vent.backup=16,n.vent.mask="Full face",n.spo2=kn(n.spo2+4,70,100),n.rr=Math.max(18,n.rr-4),ee(n.good,"NIV applied"),i="NIV is on. The mask was not on her face until you applied it. Fluid is still the wrong drug."):t==="norepi"?(n.pressor="norepi",n.line="Noradrenaline 0.05 mcg/kg/min",n.sbp+=14,n.dbp+=8,ee(n.good,"Noradrenaline while the pressure was low"),i="Noradrenaline is holding the pressure. Dobutamine can wait until the mean pressure is safer, if the output is still low."):t==="dobutamine"?(n.pressor="dobutamine",n.line="Dobutamine 2.5 mcg/kg/min",u_(n.sbp,n.dbp)<65?(n.sbp-=6,n.hr+=12,ee(n.bad,"Dobutamine while profoundly hypotensive"),i="Dobutamine dropped the pressure. Noradrenaline first, while the mean pressure is under 65."):(n.hr+=8,n.lactate=Math.max(1.2,n.lactate-.4),ee(n.good,"Dobutamine once the pressure allowed it"),i="An inotrope is reasonable now that the pressure is not critically low. Do not add fluid.")):t==="fluid"?(n.fluidMl+=500,n.spo2=kn(n.spo2-5,70,100),ee(n.bad,"Fluid into a wet circulation"),i="The lungs were already wet. The bolus made the oxygen worse. Stop the fluid."):t==="gtn"&&(n.sbp<110?(n.sbp-=16,n.dbp-=10,ee(n.bad,"Nitrate while hypotensive"),i="The pressure was already low. GTN took what was left. A nitrate is for a high pressure, not for this."):i="The pressure is not a hypertensive emergency. Leave the nitrate."):n.id==="gopal"&&(t==="calcium"?(n.calcium=!0,n.line="Calcium gluconate",n.hr=Math.min(70,n.hr+8),ee(n.good,"Calcium for a wide QRS"),i="Calcium does not lower the potassium. It protects the heart while you shift it and remove it."):t==="insulin"?(n.insulin=!0,n.k=Math.max(4.8,n.k-1.1),n.line="Insulin with dextrose",ee(n.good,"Insulin with dextrose"),i="Insulin shifts potassium inside the cell. The dextrose is why the glucose does not crash. This is not a cure. He still needs dialysis."):t==="dialysis"?n.calcium?(n.dialysis=!0,n.k=Math.max(4.6,n.k-1.4),ee(n.good,"Dialysis for anuric hyperkalemia"),i="The circuit is running. Dialysis removes the potassium. Calcium and insulin were the bridge."):(ee(n.bad,"Dialysis before calcium"),i="Dialysis will remove the potassium. Give calcium first. The QRS is wide now."):t==="wait"?(n.hr=Math.max(36,n.hr-8),ee(n.bad,"A resin while the ECG was changing"),i="A resin in six hours is too slow. The ECG is already changing. Calcium now."):t==="saline"&&(ee(n.bad,"Fluid as the treatment of hyperkalemia"),i="Fluid does not protect the heart and it does not remove this potassium. Calcium, then insulin with dextrose, then dialysis.")),pD(n),n.settled&&(i+=" This bed can settle. The others are still yours."),dD(n,i,n.line),{patient:n,speech:i}}function F1(e,t){let n={...e,good:e.good,bad:e.bad,vent:e.vent},i="";return!n.settled&&!n.called&&t>=n.callAt&&(n.called=!0,i=Kc(n)),n.called&&!n.settled&&(n.ignored+=1,n.ignored>20&&n.ignored%20===0&&((n.id==="ravi"||n.id==="meena"||n.id==="sunita")&&(n.spo2=kn(n.spo2-1,70,100)),(n.id==="sunita"||n.id==="meena")&&(n.sbp=kn(n.sbp-1,60,230),n.dbp=kn(n.dbp-1,30,140)),n.id==="anil"&&(n.gcs=Math.max(3,n.gcs)),n.id==="gopal"&&(n.hr=kn(n.hr-1,34,180)),n.worseSaid||(n.worseSaid=!0,i=i||`Bed ${n.bed}. ${n.name} is worse while waiting.`))),{patient:n,speech:i}}var H1=new Map;function mD(e){let t=H1.get(e);return t||(t=new Image,t.src=e,H1.set(e,t)),t}function Qc(e){return e.support==="niv"||e.support==="imv"}function Pd(e){let t=e.vent,n=e.support==="imv",i=n?t.rr||16:t.backup||12,s=n?t.peep:t.epap,a=n?s+(t.mode==="PC-AC"||t.mode==="PS"?t.ps||10:Math.max(8,Math.round((t.tv||400)/35))):t.ipap,r=Math.round(n?(t.tv||400)/1e3/(60/Math.max(8,i)*.33)*60:Math.max(10,(t.ipap-t.epap)*3));return{mode:n?t.mode:"NIV",imv:n,rr:i,peep:s,pip:Math.round(a),flow:r,tv:n?t.tv:Math.round(Math.max(250,(t.ipap-t.epap)*45)),fio2:t.fio2,ipap:t.ipap,epap:t.epap,mask:t.mask}}function rl(e){return Qc(e)?Math.max(6,Pd(e).rr):Math.max(6,e.rr||16)}function Er(e,t,n,i,s){let a=[],r=Math.max(4,t)/60;for(let o=0;o<n;o++){let l=(n-1-o)/n*i,c=(e/1e3-l)*r%1;c<0&&(c+=1),a.push(s(c))}return a}function gD(e,t){let n=0;return e>.08&&e<.16?n=Math.sin((e-.08)/.08*Math.PI)*.18:e>=.18&&e<.22?n=-((e-.18)/.04)*.25:e>=.22&&e<.26?n=-.25+(e-.22)/.04*1.45:e>=.26&&e<.3?n=1.2-(e-.26)/.04*1.55:e>=.3&&e<.36?n=-.35+(e-.3)/.06*.35:e>=.42&&e<.58&&(n=Math.sin((e-.42)/.16*Math.PI)*(t?.72:.32)),n}function _D(e,t){let n=(e+.12)%1;return(Math.exp(-(((n-.16)/.045)**2))+.5*Math.exp(-(((n-.3)/.09)**2)))*Math.max(.25,Math.min(1,(t-70)/30))}function vD(e){return e<.18?Math.sin(e/.18*Math.PI):Math.exp(-(e-.18)*3.1)}function yD(e){return e<.4?.5-.5*Math.cos(e/.4*Math.PI):.5+.5*Math.cos((e-.4)/.6*Math.PI)}function xD(e,t,n,i){let s=.33;t.imv&&n==="1:1"&&(s=.5),t.imv&&n==="1:3"&&(s=.25),t.imv||(s=Math.min(.55,Math.max(.2,(i||1)/(60/Math.max(6,t.rr)))));let a=e<s,r=a?e/Math.max(.05,s):(e-s)/Math.max(.05,1-s),o=r<.16?r/.16:1,l=a?o:Math.exp(-r*6),c=t.imv&&(t.mode==="VC-AC"||t.mode==="SIMV"),f=a?c?.8:Math.max(0,.85-r*.7):r<.48?-.65*Math.exp(-r*3.4):0,p=a?r:r<.62?Math.max(0,1-r/.62):0;return{pres:l,flow:f,vol:p}}function G1(e,t){let n=Math.max(35,t.hr||80),i=rl(t),s=t.k>=6.5&&(t.kKnown||t.id==="gopal");return[{arr:Er(e,n,120,3.4,a=>gD(a,s)),color:"#8fd0a8",mid:.74},{arr:Er(e,n,120,3.4,vD),color:"#e7a3a3",mid:.72},{arr:Er(e,n,120,3.4,a=>_D(a,t.spo2)),color:"#7fd4e6",mid:.7},{arr:Er(e,i,120,150/i,yD),color:"#f0d98a",mid:.72}]}function SD(e,t){let n=Pd(t),i=120/Math.max(6,n.rr),s=a=>xD(a,n,t.vent.ie,t.vent.ti);return[{arr:Er(e,n.rr,100,i,a=>.18+.82*s(a).pres),color:"#e2b48a",mid:.86,amp:.46},{arr:Er(e,n.rr,100,i,a=>s(a).flow),color:"#9ad7ff",mid:.52,amp:.28},{arr:Er(e,n.rr,100,i,a=>s(a).vol),color:"#c9f0c0",mid:.86,amp:.42}]}function h_(e,t,n,i,s,a,r){if(e.fillStyle=r,e.fillRect(t,n,i,s),i<8||s<8)return;let o=s/a.length;a.forEach((l,c)=>{let f=l.amp??.5,p=l.mid??.72,u=n+c*o;e.save(),e.beginPath(),e.rect(t,u+.5,i,Math.max(1,o-1)),e.clip(),e.beginPath(),e.strokeStyle=l.color,e.lineWidth=1.15;let d=l.arr,v=d.length;for(let b=0;b<v;b++){let g=v<2?t:t+b/(v-1)*i,h=u+o*p-d[b]*o*f;h<u+1&&(h=u+1),h>u+o-2&&(h=u+o-2),b===0?e.moveTo(g,h):e.lineTo(g,h)}e.stroke(),e.fillStyle=r,e.fillRect(t+i-4,u,4,o),e.restore()})}function V1(e){let t=e.clientWidth||e.parentElement?.clientWidth||0,n=e.clientHeight||e.parentElement?.clientHeight||0;if(t<8||n<8)return null;let i=Math.min(2,window.devicePixelRatio||1);(e.width!==Math.floor(t*i)||e.height!==Math.floor(n*i))&&(e.width=Math.floor(t*i),e.height=Math.floor(n*i));let s=e.getContext("2d");return s?(s.setTransform(i,0,0,i,0,0),{ctx:s,w:t,h:n}):null}function k1(e,t,n){let i=V1(e);i&&h_(i.ctx,0,0,i.w,i.h,G1(t,n),"#04110c")}function X1(e,t,n){let i=V1(e);if(!i)return;if(!Qc(n)){i.ctx.fillStyle="#071018",i.ctx.fillRect(0,0,i.w,i.h);return}let s=SD(t,n);h_(i.ctx,0,0,i.w,i.h,s,"#071018");let a=i.h/3,r=Math.max(6,Math.min(11,a*.42));i.ctx.font=`700 ${r}px Figtree, Arial, sans-serif`,i.ctx.textBaseline="top",["P","F","V"].forEach((o,l)=>{i.ctx.fillStyle=s[l].color,i.ctx.fillText(o,2,l*a+1)})}function MD(e,t,n,i,s,a){let r=t.naturalWidth/t.naturalHeight,o=s/a,l=0,c=0,f=t.naturalWidth,p=t.naturalHeight;r>o?(f=t.naturalHeight*o,l=(t.naturalWidth-f)/2):(p=t.naturalWidth/o,c=(t.naturalHeight-p)/2),e.drawImage(t,l,c,f,p,n,i,s,a)}function W1(e,t,n){let i=e.getContext("2d");if(!i)return;let s=e.width,a=e.height;i.setTransform(1,0,0,1,0,0),i.fillStyle="#061016",i.fillRect(0,0,s,a);let r=Math.round(s*.38),o=mD(Id(n.sex,n.support));o.complete&&o.naturalWidth?MD(i,o,0,0,r,a):(i.fillStyle="#10161c",i.fillRect(0,0,r,a));let l=.5+.5*Math.sin(t/220);i.lineWidth=Math.max(4,s*.012),i.strokeStyle=n.settled?"#8fd0a8":n.called?`rgba(231,163,163,${.4+l*.6})`:"rgba(127,212,230,0.28)",i.strokeRect(i.lineWidth/2,i.lineWidth/2,s-i.lineWidth,a-i.lineWidth);let c=r+Math.round(s*.02),f=s-c-Math.round(s*.02);i.fillStyle="#f3efe6",i.font=`600 ${Math.max(14,Math.round(a*.07))}px Figtree, sans-serif`,i.textBaseline="alphabetic",i.fillText(`${n.bed}  ${n.name}`,c,Math.round(a*.1)),i.fillStyle=n.settled?"#8fd0a8":n.called?"#e7a3a3":"#e2b48a",i.font=`600 ${Math.max(11,Math.round(a*.048))}px Figtree, sans-serif`;let p=n.settled?"Settled":n.called?"Call":n.dx;i.fillText(p,c,Math.round(a*.175));let u=Math.round(f*.34),d=c,v=Math.round(a*.23),b=f-u,g=a-v-Math.round(a*.06);h_(i,d,v,b,g,G1(t,n),"#04110c");let h=[["Pulse",String(Math.round(n.hr)),"#8fd0a8"],["BP",`${Math.round(n.sbp)}/${Math.round(n.dbp)}`,"#e7a3a3"],["SpO2",String(Math.round(n.spo2)),"#7fd4e6"],["RR",String(Math.round(rl(n))),"#f0d98a"]],m=g/4;h.forEach((x,y)=>{let E=v+y*m;i.fillStyle=x[2],i.font=`600 ${Math.max(10,Math.round(m*.28))}px Figtree, sans-serif`,i.fillText(x[0],d+b+8,E+m*.38),i.font=`700 ${Math.max(13,Math.round(m*.46))}px Figtree, sans-serif`,i.fillText(x[1],d+b+8,E+m*.82)})}var K1=ms(Ar(),1),zd=10,ol=10*(1060/1500),ED=[{bed:1,x:.032,y:.06,w:.278,h:.19},{bed:2,x:.032,y:.262,w:.278,h:.174},{bed:3,x:.032,y:.45,w:.278,h:.176},{bed:4,x:.63,y:.118,w:.26,h:.174},{bed:5,x:.63,y:.3,w:.26,h:.156},{bed:6,x:.63,y:.468,w:.26,h:.162}];function J1({patients:e,onOpen:t}){let n=(0,ll.useRef)(null),i=(0,ll.useRef)(e),s=(0,ll.useRef)(t);return i.current=e,s.current=t,(0,ll.useEffect)(()=>{let a=n.current;if(!a)return;let r=a,o=new Ld({antialias:!0,alpha:!1});o.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),o.setClearColor(329483,1),r.appendChild(o.domElement);let l=new Tc,c=new Dn(38,1,.1,80),p=new Uc().load(Xn("universe/command.jpg"));p.colorSpace=Mn;let u=new Ln(new ls(zd,ol),new vr({map:p}));l.add(u);let d=new Ko({color:1185308,roughness:.94,metalness:.02}),v=new Ln(new ls(22,16),d);v.rotation.x=-Math.PI/2,v.position.set(0,-ol/2,2.4),l.add(v);let b=new Ln(new ls(22,16),new Ko({color:724499,roughness:1}));b.rotation.x=Math.PI/2,b.position.set(0,ol/2,2.4),l.add(b),l.add(new Ic(12964060,.55));let g=ED.map(I=>{let tt=document.createElement("canvas");tt.width=760,tt.height=Math.max(300,Math.round(760*(I.h/I.w)));let F=new Cc(tt);F.colorSpace=Mn,F.minFilter=an,F.magFilter=an;let J=new Ln(new ls(I.w*zd,I.h*ol),new vr({map:F})),et=I.x+I.w/2,bt=I.y+I.h/2;return J.position.set((et-.5)*zd,(.5-bt)*ol,.012),J.userData.bed=I.bed,l.add(J),{bed:I.bed,canvas:tt,texture:F,mesh:J}}),h=new Pc,m=new $t,x=g.map(I=>I.mesh),y=0,E=0,A=0,_=0,T=8,L=0,R=window.matchMedia?.("(prefers-reduced-motion: reduce)").matches??!1;function U(){let I=Math.max(1,r.clientWidth),tt=Math.max(1,r.clientHeight);o.setSize(I,tt,!1),c.aspect=I/tt;let F=c.fov*Math.PI/180,J=ol/2/Math.tan(F/2),et=zd/2/(Math.tan(F/2)*c.aspect);T=Math.max(J,et)*1.015,c.updateProjectionMatrix()}U();let H=new ResizeObserver(U);H.observe(r);function W(I,tt){let F=r.getBoundingClientRect();m.x=(I-F.left)/F.width*2-1,m.y=-((tt-F.top)/F.height)*2+1}function D(I){if(!R){let tt=r.getBoundingClientRect();A=((I.clientX-tt.left)/tt.width-.5)*.06,_=((I.clientY-tt.top)/tt.height-.5)*.03}W(I.clientX,I.clientY),h.setFromCamera(m,c),o.domElement.style.cursor=h.intersectObjects(x,!1).length?"pointer":"default"}function k(I){W(I.clientX,I.clientY),h.setFromCamera(m,c);let F=h.intersectObjects(x,!1)[0]?.object?.userData?.bed;if(!F)return;let J=i.current.find(et=>et.bed===F);J&&s.current(J.id)}o.domElement.addEventListener("pointermove",D),o.domElement.addEventListener("click",k);let Y=I=>{if(!R){let F=Math.sin(I/1e3*.17)*.012;y+=(A+F-y)*.06,E+=(_-E)*.06}c.position.set(Math.sin(y)*.22,Math.sin(E)*.12,T),c.lookAt(Math.sin(y)*.08,Math.sin(E)*.04,0);let tt=i.current;g.forEach(F=>{let J=tt.find(et=>et.bed===F.bed);J&&(W1(F.canvas,I,J),F.texture.needsUpdate=!0)}),o.render(l,c),L=requestAnimationFrame(Y)};return L=requestAnimationFrame(Y),()=>{cancelAnimationFrame(L),H.disconnect(),o.domElement.removeEventListener("pointermove",D),o.domElement.removeEventListener("click",k),g.forEach(I=>{I.texture.dispose(),I.mesh.geometry.dispose(),I.mesh.material.dispose()}),p.dispose(),u.geometry.dispose(),u.material.dispose(),v.geometry.dispose(),d.dispose(),b.geometry.dispose(),b.material.dispose(),o.dispose(),o.domElement.remove()}},[]),(0,K1.jsx)("div",{className:"u-room",ref:n,role:"application","aria-label":"Command center. Choose a bed screen."})}var nt=ms(Ar(),1),Q1=!0,Hd="";function AD(){if(!window.speechSynthesis)return null;let e=speechSynthesis.getVoices()||[],t=/female|samantha|karen|moira|victoria|allison|zira|susan|heera|sonia|libby|veena|siri|fiona|tessa|serena|nicky|catherine/i,n=[/rishi/i,/daniel/i,/google uk english male/i,/david/i,/alex/i,/\bmale\b/i],i=a=>`${a.name} ${a.voiceURI}`,s=e.filter(a=>/^en/i.test(a.lang||"")&&!t.test(i(a)));for(let a of n){let r=s.find(o=>a.test(i(o)));if(r)return r}return s[0]||null}function Fd(e){if(!Q1||!e||!window.speechSynthesis)return;let t=e.replace(/\s+/g," ").trim();if(!t||t===Hd)return;Hd=t;let n=new SpeechSynthesisUtterance(t);n.rate=.96;let i=()=>{let s=AD();s?(n.voice=s,n.lang=s.lang||"en-GB"):n.lang="en-GB";try{speechSynthesis.resume(),speechSynthesis.speak(n)}catch{}};speechSynthesis.speaking||speechSynthesis.pending?(speechSynthesis.cancel(),window.setTimeout(i,80)):i()}function wD(e){return e.support==="niv"?{left:"81.56%",top:"36.11%",width:"7.5%",height:"10.83%"}:{left:"81.72%",top:"35.56%",width:"8.44%",height:"10%"}}function RD({patient:e}){let t=Pd(e);return e.support==="imv"?(0,nt.jsxs)("div",{className:"u-ventread",children:[(0,nt.jsxs)("div",{children:[(0,nt.jsx)("span",{children:"Mode"}),(0,nt.jsx)("b",{children:t.mode})]}),(0,nt.jsxs)("div",{children:[(0,nt.jsx)("span",{children:"Paw"}),(0,nt.jsxs)("b",{children:[t.peep,"/",t.pip]})]}),(0,nt.jsxs)("div",{children:[(0,nt.jsx)("span",{children:"VT"}),(0,nt.jsxs)("b",{children:[t.tv," mL"]})]}),(0,nt.jsxs)("div",{children:[(0,nt.jsx)("span",{children:"RR"}),(0,nt.jsx)("b",{children:t.rr})]}),(0,nt.jsxs)("div",{children:[(0,nt.jsx)("span",{children:"FiO2"}),(0,nt.jsxs)("b",{children:[t.fio2,"%"]})]})]}):(0,nt.jsxs)("div",{className:"u-ventread",children:[(0,nt.jsxs)("div",{children:[(0,nt.jsx)("span",{children:"NIV"}),(0,nt.jsx)("b",{children:t.mask})]}),(0,nt.jsxs)("div",{children:[(0,nt.jsx)("span",{children:"IPAP"}),(0,nt.jsx)("b",{children:t.ipap})]}),(0,nt.jsxs)("div",{children:[(0,nt.jsx)("span",{children:"EPAP"}),(0,nt.jsx)("b",{children:t.epap})]}),(0,nt.jsxs)("div",{children:[(0,nt.jsx)("span",{children:"RR"}),(0,nt.jsx)("b",{children:t.rr})]}),(0,nt.jsxs)("div",{children:[(0,nt.jsx)("span",{children:"FiO2"}),(0,nt.jsxs)("b",{children:[t.fio2,"%"]})]})]})}function CD({patient:e}){let t=Id(e.sex,e.support),n=Qc(e),i=Math.round(rl(e));return(0,nt.jsxs)("div",{className:"u-scene",children:[(0,nt.jsx)("img",{className:"u-still",alt:"",src:t}),(0,nt.jsx)("div",{className:"u-breath","data-rr":i,children:(0,nt.jsx)("img",{alt:"",src:t})}),e.line?(0,nt.jsxs)("div",{className:"u-pump",children:[(0,nt.jsx)("img",{alt:"",src:Xn("universe/bed/iv-pump.png")}),(0,nt.jsx)("b",{children:e.line})]}):null,(0,nt.jsxs)("div",{className:"u-glass","data-bed":e.bed,children:[(0,nt.jsx)("canvas",{"data-mon":e.bed}),(0,nt.jsxs)("div",{className:"u-nums",children:[(0,nt.jsx)("b",{className:"u-hr",children:Math.round(e.hr)}),(0,nt.jsxs)("b",{className:"u-bp",children:[Math.round(e.sbp),"/",Math.round(e.dbp)]}),(0,nt.jsx)("b",{className:"u-sat",children:Math.round(e.spo2)}),(0,nt.jsx)("b",{className:"u-rr",children:i})]})]}),n?(0,nt.jsx)("div",{className:"u-vent",style:wD(e),children:(0,nt.jsx)("canvas",{"data-vent":e.bed})}):null,n?(0,nt.jsx)(RD,{patient:e}):null]})}function j1(){let[e,t]=(0,On.useState)(!1),[n,i]=(0,On.useState)(!0),[s,a]=(0,On.useState)(()=>P1()),[r,o]=(0,On.useState)(null),[l,c]=(0,On.useState)(0),f=(0,On.useRef)(s),p=(0,On.useRef)(r),u=(0,On.useRef)(0);f.current=s,p.current=r,(0,On.useEffect)(()=>{Q1=n,!n&&window.speechSynthesis&&speechSynthesis.cancel()},[n]),(0,On.useEffect)(()=>{let y=s.find(E=>E.id===r)||null;fr.hr=y?.hr??80,fr.ventOn=n&&!!y&&Qc(y),fr.ventRr=y?rl(y):16},[s,r,n]),(0,On.useEffect)(()=>{let y=0,E=A=>{document.querySelectorAll(".u-breath").forEach(T=>{let L=T.querySelector("img");if(!L)return;if(window.matchMedia?.("(prefers-reduced-motion: reduce)").matches){L.style.transform="none";return}let U=Number(T.getAttribute("data-rr")||16),H=A/1e3*(U/60)%1,W=H<.42?Math.sin(H/.42*Math.PI):0;L.style.transform=`translateY(${(-1.5*W).toFixed(2)}%)`});let _=f.current;document.querySelectorAll("canvas[data-mon]").forEach(T=>{let L=Number(T.getAttribute("data-mon")),R=_.find(U=>U.bed===L);R&&k1(T,A,R)}),document.querySelectorAll("canvas[data-vent]").forEach(T=>{let L=Number(T.getAttribute("data-vent")),R=_.find(U=>U.bed===L);R&&X1(T,A,R)}),y=requestAnimationFrame(E)};return y=requestAnimationFrame(E),()=>cancelAnimationFrame(y)},[]),(0,On.useEffect)(()=>{if(!e)return;let y=window.setInterval(()=>{u.current+=1;let E=u.current;c(E);let A="",_=f.current.map(T=>{let L=F1(T,E);return L.speech&&!L.patient.announced?(L.patient.announced=!0,A||(A=L.speech)):L.speech&&L.speech!==Kc(L.patient)&&!A&&(A=L.speech),L.patient});f.current=_,a(_),A&&Fd(A)},1e3);return()=>window.clearInterval(y)},[e]);let d=s.find(y=>y.id===r)||null,v=s.filter(y=>y.called&&!y.settled&&y.id!==r),b=s.filter(y=>y.settled).length;function g(){dc(),window.speechSynthesis&&speechSynthesis.getVoices(),t(!0),Hd="",Fd("Six patients are in the unit. You will be called when one of them changes.")}function h(){dc(),i(y=>!y)}function m(y){dc();let E=f.current.find(A=>A.id===y);o(y),E&&Fd(E.called&&!E.settled?Kc(E):`${E.name}. ${E.dx}.`)}function x(y){if(!d)return;dc();let E=z1(d,y),A=s.map(_=>_.id===d.id?E.patient:_);f.current=A,a(A),Hd="",Fd(E.speech)}return(0,nt.jsx)("div",{className:"u-root",children:e?d?(0,nt.jsxs)("section",{className:"u-case",children:[(0,nt.jsxs)("header",{className:"u-bar",children:[(0,nt.jsx)("button",{type:"button",onClick:()=>o(null),children:"All six"}),(0,nt.jsxs)("h1",{children:["Bed ",d.bed,". ",d.name]}),(0,nt.jsx)("button",{type:"button",onClick:h,"aria-pressed":n,children:n?"Sound":"Sound off"})]}),(0,nt.jsx)(CD,{patient:d}),v[0]?(0,nt.jsxs)("div",{className:"u-call",children:[(0,nt.jsx)("p",{children:Kc(v[0])}),(0,nt.jsxs)("button",{type:"button",onClick:()=>m(v[0].id),children:["Go to bed ",v[0].bed]})]}):null,(0,nt.jsxs)("div",{className:"u-sheet",children:[(0,nt.jsxs)("div",{className:"u-vitals",children:[(0,nt.jsxs)("span",{children:["Pulse ",(0,nt.jsx)("b",{children:Math.round(d.hr)})]}),(0,nt.jsxs)("span",{children:["BP"," ",(0,nt.jsxs)("b",{children:[Math.round(d.sbp),"/",Math.round(d.dbp)]})]}),(0,nt.jsxs)("span",{children:["SpO2 ",(0,nt.jsx)("b",{children:Math.round(d.spo2)})]}),(0,nt.jsxs)("span",{children:["RR ",(0,nt.jsx)("b",{children:Math.round(rl(d))})]})]}),(0,nt.jsxs)("p",{className:"u-dx",children:[d.age,"-year-old ",d.sex,". ",d.dx,".",d.settled?" Settled.":""]}),(0,nt.jsx)("p",{children:d.story}),(0,nt.jsx)("p",{className:"u-exam",children:d.exam}),d.id==="imran"&&d.kKnown?(0,nt.jsxs)("p",{className:"u-exam",children:["Potassium ",d.k,". Glucose ",d.glucose,"."]}):null,d.id==="gopal"?(0,nt.jsxs)("p",{className:"u-exam",children:["Potassium ",d.k,". ",d.dialysis?"Dialysis is running.":"No urine."]}):null,d.heard?(0,nt.jsx)("p",{className:"u-heard",children:d.heard}):null,(0,nt.jsx)("div",{className:"u-acts",children:B1(d).map(y=>(0,nt.jsx)("button",{type:"button",onClick:()=>x(y.id),children:y.label},y.id))})]})]}):(0,nt.jsxs)("section",{className:"u-cmd",children:[(0,nt.jsxs)("header",{className:"u-bar",children:[(0,nt.jsx)("h1",{children:"Command"}),(0,nt.jsxs)("span",{children:[Math.floor(l/60),":",String(l%60).padStart(2,"0")," \xB7 ",b,"/6 settled"]}),(0,nt.jsx)("button",{type:"button",onClick:h,"aria-pressed":n,children:n?"Sound":"Sound off"})]}),(0,nt.jsx)(J1,{patients:s,onOpen:m}),b===6?(0,nt.jsxs)("div",{className:"u-done",children:[(0,nt.jsx)("h2",{children:"The unit is settled."}),(0,nt.jsx)("ul",{children:s.map(y=>(0,nt.jsxs)("li",{children:[(0,nt.jsxs)("b",{children:["Bed ",y.bed,". ",y.name,"."]})," ",y.good[y.good.length-1]||y.dx]},y.id))})]}):null]}):(0,nt.jsxs)("section",{className:"u-door",children:[(0,nt.jsx)("img",{src:Xn("universe/command.jpg"),alt:""}),(0,nt.jsxs)("div",{className:"u-door-card",children:[(0,nt.jsx)("p",{children:"Critical Care Universe"}),(0,nt.jsx)("h1",{children:"Six patients. One doctor."}),(0,nt.jsx)("p",{className:"u-lead",children:"The unit is live. A call can come while you are already with someone."}),(0,nt.jsx)("button",{type:"button",onClick:g,children:"Enter the unit"})]})]})})}var eT=ms(Ar(),1),$1=document.getElementById("app");$1&&(0,tT.createRoot)($1).render((0,eT.jsx)(j1,{}));
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
