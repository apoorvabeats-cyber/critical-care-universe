var vT=Object.create;var D_=Object.defineProperty;var yT=Object.getOwnPropertyDescriptor;var xT=Object.getOwnPropertyNames;var ST=Object.getPrototypeOf,MT=Object.prototype.hasOwnProperty;var ki=(e,t)=>()=>{try{return t||e((t={exports:{}}).exports,t),t.exports}catch(n){throw t=0,n}};var bT=(e,t,n,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of xT(t))!MT.call(e,s)&&s!==n&&D_(e,s,{get:()=>t[s],enumerable:!(i=yT(t,s))||i.enumerable});return e};var vs=(e,t,n)=>(n=e!=null?vT(ST(e)):{},bT(t||!e||!e.__esModule?D_(n,"default",{value:e,enumerable:!0}):n,e));var G_=ki(Oe=>{"use strict";function Jd(e,t){var n=e.length;e.push(t);t:for(;0<n;){var i=n-1>>>1,s=e[i];if(0<ou(s,t))e[i]=t,e[n]=s,n=i;else break t}}function Xi(e){return e.length===0?null:e[0]}function cu(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;t:for(var i=0,s=e.length,a=s>>>1;i<a;){var r=2*(i+1)-1,o=e[r],l=r+1,c=e[l];if(0>ou(o,n))l<s&&0>ou(c,o)?(e[i]=c,e[l]=n,i=l):(e[i]=o,e[r]=n,i=r);else if(l<s&&0>ou(c,n))e[i]=c,e[l]=n,i=l;else break t}}return t}function ou(e,t){var n=e.sortIndex-t.sortIndex;return n!==0?n:e.id-t.id}Oe.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(L_=performance,Oe.unstable_now=function(){return L_.now()}):(qd=Date,U_=qd.now(),Oe.unstable_now=function(){return qd.now()-U_});var L_,qd,U_,ys=[],Qs=[],TT=1,di=null,bn=3,Kd=!1,dl=!1,pl=!1,Qd=!1,P_=typeof setTimeout=="function"?setTimeout:null,B_=typeof clearTimeout=="function"?clearTimeout:null,O_=typeof setImmediate<"u"?setImmediate:null;function lu(e){for(var t=Xi(Qs);t!==null;){if(t.callback===null)cu(Qs);else if(t.startTime<=e)cu(Qs),t.sortIndex=t.expirationTime,Jd(ys,t);else break;t=Xi(Qs)}}function jd(e){if(pl=!1,lu(e),!dl)if(Xi(ys)!==null)dl=!0,Lr||(Lr=!0,Dr());else{var t=Xi(Qs);t!==null&&$d(jd,t.startTime-e)}}var Lr=!1,ml=-1,z_=5,F_=-1;function H_(){return Qd?!0:!(Oe.unstable_now()-F_<z_)}function Yd(){if(Qd=!1,Lr){var e=Oe.unstable_now();F_=e;var t=!0;try{t:{dl=!1,pl&&(pl=!1,B_(ml),ml=-1),Kd=!0;var n=bn;try{e:{for(lu(e),di=Xi(ys);di!==null&&!(di.expirationTime>e&&H_());){var i=di.callback;if(typeof i=="function"){di.callback=null,bn=di.priorityLevel;var s=i(di.expirationTime<=e);if(e=Oe.unstable_now(),typeof s=="function"){di.callback=s,lu(e),t=!0;break e}di===Xi(ys)&&cu(ys),lu(e)}else cu(ys);di=Xi(ys)}if(di!==null)t=!0;else{var a=Xi(Qs);a!==null&&$d(jd,a.startTime-e),t=!1}}break t}finally{di=null,bn=n,Kd=!1}t=void 0}}finally{t?Dr():Lr=!1}}}var Dr;typeof O_=="function"?Dr=function(){O_(Yd)}:typeof MessageChannel<"u"?(Zd=new MessageChannel,I_=Zd.port2,Zd.port1.onmessage=Yd,Dr=function(){I_.postMessage(null)}):Dr=function(){P_(Yd,0)};var Zd,I_;function $d(e,t){ml=P_(function(){e(Oe.unstable_now())},t)}Oe.unstable_IdlePriority=5;Oe.unstable_ImmediatePriority=1;Oe.unstable_LowPriority=4;Oe.unstable_NormalPriority=3;Oe.unstable_Profiling=null;Oe.unstable_UserBlockingPriority=2;Oe.unstable_cancelCallback=function(e){e.callback=null};Oe.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z_=0<e?Math.floor(1e3/e):5};Oe.unstable_getCurrentPriorityLevel=function(){return bn};Oe.unstable_next=function(e){switch(bn){case 1:case 2:case 3:var t=3;break;default:t=bn}var n=bn;bn=t;try{return e()}finally{bn=n}};Oe.unstable_requestPaint=function(){Qd=!0};Oe.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=bn;bn=e;try{return t()}finally{bn=n}};Oe.unstable_scheduleCallback=function(e,t,n){var i=Oe.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?i+n:i):n=i,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=n+s,e={id:TT++,callback:t,priorityLevel:e,startTime:n,expirationTime:s,sortIndex:-1},n>i?(e.sortIndex=n,Jd(Qs,e),Xi(ys)===null&&e===Xi(Qs)&&(pl?(B_(ml),ml=-1):pl=!0,$d(jd,n-i))):(e.sortIndex=s,Jd(ys,e),dl||Kd||(dl=!0,Lr||(Lr=!0,Dr()))),e};Oe.unstable_shouldYield=H_;Oe.unstable_wrapCallback=function(e){var t=bn;return function(){var n=bn;bn=t;try{return e.apply(this,arguments)}finally{bn=n}}}});var k_=ki((kD,V_)=>{"use strict";V_.exports=G_()});var nv=ki(zt=>{"use strict";var np=Symbol.for("react.transitional.element"),ET=Symbol.for("react.portal"),AT=Symbol.for("react.fragment"),wT=Symbol.for("react.strict_mode"),RT=Symbol.for("react.profiler"),CT=Symbol.for("react.consumer"),NT=Symbol.for("react.context"),DT=Symbol.for("react.forward_ref"),LT=Symbol.for("react.suspense"),UT=Symbol.for("react.memo"),Z_=Symbol.for("react.lazy"),OT=Symbol.for("react.activity"),IT=Symbol.for("react.view_transition"),X_=Symbol.iterator;function PT(e){return e===null||typeof e!="object"?null:(e=X_&&e[X_]||e["@@iterator"],typeof e=="function"?e:null)}var J_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},K_=Object.assign,Q_={};function Or(e,t,n){this.props=e,this.context=t,this.refs=Q_,this.updater=n||J_}Or.prototype.isReactComponent={};Or.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Or.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function j_(){}j_.prototype=Or.prototype;function ip(e,t,n){this.props=e,this.context=t,this.refs=Q_,this.updater=n||J_}var sp=ip.prototype=new j_;sp.constructor=ip;K_(sp,Or.prototype);sp.isPureReactComponent=!0;var W_=Array.isArray;function ep(){}var we={H:null,A:null,T:null,S:null},$_=Object.prototype.hasOwnProperty;function ap(e,t,n){var i=n.ref;return{$$typeof:np,type:e,key:t,ref:i!==void 0?i:null,props:n}}function BT(e,t){return ap(e.type,t,e.props)}function rp(e){return typeof e=="object"&&e!==null&&e.$$typeof===np}function zT(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var q_=/\/+/g;function tp(e,t){return typeof e=="object"&&e!==null&&e.key!=null?zT(""+e.key):t.toString(36)}function FT(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(ep,ep):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function Ur(e,t,n,i,s){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var r=!1;if(e===null)r=!0;else switch(a){case"bigint":case"string":case"number":r=!0;break;case"object":switch(e.$$typeof){case np:case ET:r=!0;break;case Z_:return r=e._init,Ur(r(e._payload),t,n,i,s)}}if(r)return s=s(e),r=i===""?"."+tp(e,0):i,W_(s)?(n="",r!=null&&(n=r.replace(q_,"$&/")+"/"),Ur(s,t,n,"",function(c){return c})):s!=null&&(rp(s)&&(s=BT(s,n+(s.key==null||e&&e.key===s.key?"":(""+s.key).replace(q_,"$&/")+"/")+r)),t.push(s)),1;r=0;var o=i===""?".":i+":";if(W_(e))for(var l=0;l<e.length;l++)i=e[l],a=o+tp(i,l),r+=Ur(i,t,n,a,s);else if(l=PT(e),typeof l=="function")for(e=l.call(e),l=0;!(i=e.next()).done;)i=i.value,a=o+tp(i,l++),r+=Ur(i,t,n,a,s);else if(a==="object"){if(typeof e.then=="function")return Ur(FT(e),t,n,i,s);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return r}function uu(e,t,n){if(e==null)return e;var i=[],s=0;return Ur(e,i,"","",function(a){return t.call(n,a,s++)}),i}function HT(e){if(e._status===-1){var t=e._result,n=t();n.then(function(i){(e._status===0||e._status===-1)&&(e._status=1,e._result=i,n.status===void 0&&(n.status="fulfilled",n.value=i))},function(i){(e._status===0||e._status===-1)&&(e._status=2,e._result=i,n.status===void 0&&(n.status="rejected",n.reason=i))}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var Y_=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function tv(e){var t=we.T,n={};n.types=t!==null?t.types:null,we.T=n;try{var i=e(),s=we.S;s!==null&&s(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(ep,Y_)}catch(a){Y_(a)}finally{t!==null&&n.types!==null&&(t.types=n.types),we.T=t}}function ev(e){var t=we.T;if(t!==null){var n=t.types;n===null?t.types=[e]:n.indexOf(e)===-1&&n.push(e)}else tv(ev.bind(null,e))}var GT={map:uu,forEach:function(e,t,n){uu(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return uu(e,function(){t++}),t},toArray:function(e){return uu(e,function(t){return t})||[]},only:function(e){if(!rp(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};zt.Activity=OT;zt.Children=GT;zt.Component=Or;zt.Fragment=AT;zt.Profiler=RT;zt.PureComponent=ip;zt.StrictMode=wT;zt.Suspense=LT;zt.ViewTransition=IT;zt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=we;zt.__COMPILER_RUNTIME={__proto__:null,c:function(e){return we.H.useMemoCache(e)}};zt.addTransitionType=ev;zt.cache=function(e){return function(){return e.apply(null,arguments)}};zt.cacheSignal=function(){return null};zt.cloneElement=function(e,t,n){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var i=K_({},e.props),s=e.key;if(t!=null)for(a in t.key!==void 0&&(s=""+t.key),t)!$_.call(t,a)||a==="key"||a==="__self"||a==="__source"||a==="ref"&&t.ref===void 0||(i[a]=t[a]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var r=Array(a),o=0;o<a;o++)r[o]=arguments[o+2];i.children=r}return ap(e.type,s,i)};zt.createContext=function(e){return e={$$typeof:NT,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:CT,_context:e},e};zt.createElement=function(e,t,n){var i,s={},a=null;if(t!=null)for(i in t.key!==void 0&&(a=""+t.key),t)$_.call(t,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(s[i]=t[i]);var r=arguments.length-2;if(r===1)s.children=n;else if(1<r){for(var o=Array(r),l=0;l<r;l++)o[l]=arguments[l+2];s.children=o}if(e&&e.defaultProps)for(i in r=e.defaultProps,r)s[i]===void 0&&(s[i]=r[i]);return ap(e,a,s)};zt.createRef=function(){return{current:null}};zt.forwardRef=function(e){return{$$typeof:DT,render:e}};zt.isValidElement=rp;zt.lazy=function(e){return{$$typeof:Z_,_payload:{_status:-1,_result:e},_init:HT}};zt.memo=function(e,t){return{$$typeof:UT,type:e,compare:t===void 0?null:t}};zt.startTransition=tv;zt.unstable_useCacheRefresh=function(){return we.H.useCacheRefresh()};zt.use=function(e){return we.H.use(e)};zt.useActionState=function(e,t,n){return we.H.useActionState(e,t,n)};zt.useCallback=function(e,t){return we.H.useCallback(e,t)};zt.useContext=function(e){return we.H.useContext(e)};zt.useDebugValue=function(){};zt.useDeferredValue=function(e,t){return we.H.useDeferredValue(e,t)};zt.useEffect=function(e,t){return we.H.useEffect(e,t)};zt.useEffectEvent=function(e){return we.H.useEffectEvent(e)};zt.useId=function(){return we.H.useId()};zt.useImperativeHandle=function(e,t,n){return we.H.useImperativeHandle(e,t,n)};zt.useInsertionEffect=function(e,t){return we.H.useInsertionEffect(e,t)};zt.useLayoutEffect=function(e,t){return we.H.useLayoutEffect(e,t)};zt.useMemo=function(e,t){return we.H.useMemo(e,t)};zt.useOptimistic=function(e,t){return we.H.useOptimistic(e,t)};zt.useReducer=function(e,t,n){return we.H.useReducer(e,t,n)};zt.useRef=function(e){return we.H.useRef(e)};zt.useState=function(e){return we.H.useState(e)};zt.useSyncExternalStore=function(e,t,n){return we.H.useSyncExternalStore(e,t,n)};zt.useTransition=function(){return we.H.useTransition()};zt.version="19.3.0"});var gl=ki((WD,iv)=>{"use strict";iv.exports=nv()});var rv=ki(Tn=>{"use strict";var VT=gl();function av(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function js(){}var On={d:{f:js,r:function(){throw Error(av(522))},D:js,C:js,L:js,m:js,X:js,S:js,M:js},p:0,findDOMNode:null},kT=Symbol.for("react.portal"),XT=Symbol.for("react.recoverable"),sv=Symbol.for("react.optimistic_key");function WT(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:kT,key:i==null?null:i===sv?sv:""+i,children:e,containerInfo:t,implementation:n}}var _l=VT.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function hu(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}Tn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=On;Tn.browser=function(e){return{$$typeof:XT,_reason:e}};Tn.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(av(299));return WT(e,t,null,n)};Tn.flushSync=function(e){var t=_l.T,n=On.p;try{if(_l.T=null,On.p=2,e)return e()}finally{_l.T=t,On.p=n,On.d.f()}};Tn.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,On.d.C(e,t))};Tn.prefetchDNS=function(e){typeof e=="string"&&On.d.D(e)};Tn.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var n=t.as,i=hu(n,t.crossOrigin),s=typeof t.integrity=="string"?t.integrity:void 0,a=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;n==="style"?On.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:i,integrity:s,fetchPriority:a}):n==="script"&&On.d.X(e,{crossOrigin:i,integrity:s,fetchPriority:a,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};Tn.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var n=hu(t.as,t.crossOrigin);On.d.M(e,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0})}}else t==null&&On.d.M(e)};Tn.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var n=t.as,i=hu(n,t.crossOrigin);On.d.L(e,n,{crossOrigin:i,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};Tn.preloadModule=function(e,t){if(typeof e=="string")if(t){var n=hu(t.as,t.crossOrigin);On.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0})}else On.d.m(e)};Tn.requestFormReset=function(e){On.d.r(e)};Tn.unstable_batchedUpdates=function(e,t){return e(t)};Tn.useFormState=function(e,t,n){return _l.H.useFormState(e,t,n)};Tn.useFormStatus=function(){return _l.H.useHostTransitionStatus()};Tn.version="19.3.0"});var cv=ki((YD,lv)=>{"use strict";function ov(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ov)}catch(e){console.error(e)}}ov(),lv.exports=rv()});var JM=ki(qh=>{"use strict";var $e=k_(),Zy=gl(),qT=cv();function Q(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Jy(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function sc(e){for(var t=e,n=t;n&&!n.alternate;)t=n,(t.flags&4098)!==0&&(e=t.return),n=t.return;for(;t.return;)t=t.return;return t.tag===3?e:null}function Ky(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Qy(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function uv(e){if(sc(e)!==e)throw Error(Q(188))}function YT(e){var t=e.alternate;if(!t){if(t=sc(e),t===null)throw Error(Q(188));return t!==e?null:e}for(var n=e,i=t;;){var s=n.return;if(s===null)break;var a=s.alternate;if(a===null){if(i=s.return,i!==null){n=i;continue}break}if(s.child===a.child){for(a=s.child;a;){if(a===n)return uv(s),e;if(a===i)return uv(s),t;a=a.sibling}throw Error(Q(188))}if(n.return!==i.return)n=s,i=a;else{for(var r=!1,o=s.child;o;){if(o===n){r=!0,n=s,i=a;break}if(o===i){r=!0,i=s,n=a;break}o=o.sibling}if(!r){for(o=a.child;o;){if(o===n){r=!0,n=a,i=s;break}if(o===i){r=!0,i=a,n=s;break}o=o.sibling}if(!r)throw Error(Q(189))}}if(n.alternate!==i)throw Error(Q(190))}if(n.tag!==3)throw Error(Q(188));return n.stateNode.current===n?e:t}function jy(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=jy(e),t!==null)return t;e=e.sibling}return null}function qn(e,t,n,i,s,a){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&n(e,i,s,a)||(e.tag!==22||e.memoizedState===null)&&(t||e.tag!==5&&e.tag!==27)&&qn(e.child,t,n,i,s,a))return!0;e=e.sibling}return!1}function fr(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function hv(e){var t=!1;for(e=e.return;e!==null&&(e.tag===4&&(t=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return t}function $y(e){var t=[null,null],n=fr(e);return n===null||tx(t,e,n.child,{foundSelf:!1}),t}function tx(e,t,n,i){for(;n!==null;){if(n===t)i.foundSelf=!0;else if(n.tag===5||n.tag===27||n.tag===6){if(i.foundSelf)return e[1]=n,!0;e[0]=n}else if((n.tag!==22||n.memoizedState===null)&&tx(e,t,n.child,i))return!0;n=n.sibling}return!1}function je(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(Q(559))}}var Gr=null,zp=null;function ZT(e,t,n){return e===n?!0:e===t?(Gr=e,!0):!1}function JT(e,t,n){return e===n?(zp=e,!1):e===t?(zp!==null&&(Gr=e),!0):!1}function fv(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function Fp(e,t,n){for(var i=0,s=e;s;s=n(s))i++;s=0;for(var a=t;a;a=n(a))s++;for(;0<i-s;)e=n(e),i--;for(;0<s-i;)t=n(t),s--;for(;i--;){if(e===t||t!==null&&e===t.alternate)return e;e=n(e),t=n(t)}return null}var Te=Object.assign,KT=Symbol.for("react.element"),fu=Symbol.for("react.transitional.element"),Tl=Symbol.for("react.portal"),Vr=Symbol.for("react.fragment"),ex=Symbol.for("react.strict_mode"),Hp=Symbol.for("react.profiler"),nx=Symbol.for("react.consumer"),Ki=Symbol.for("react.context"),Jm=Symbol.for("react.forward_ref"),Gp=Symbol.for("react.suspense"),Vp=Symbol.for("react.suspense_list"),Km=Symbol.for("react.memo"),na=Symbol.for("react.lazy"),kp=Symbol.for("react.activity"),QT=Symbol.for("react.legacy_hidden"),jT=Symbol.for("react.memo_cache_sentinel"),Xp=Symbol.for("react.view_transition"),$T=Symbol.for("react.recoverable"),dv=Symbol.iterator;function vl(e){return e===null||typeof e!="object"?null:(e=dv&&e[dv]||e["@@iterator"],typeof e=="function"?e:null)}var tE=Symbol.for("react.client.reference");function Wp(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===tE?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Vr:return"Fragment";case Hp:return"Profiler";case ex:return"StrictMode";case Gp:return"Suspense";case Vp:return"SuspenseList";case kp:return"Activity";case Xp:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case Tl:return"Portal";case Ki:return e.displayName||"Context";case nx:return(e._context.displayName||"Context")+".Consumer";case Jm:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Km:return t=e.displayName||null,t!==null?t:Wp(e.type)||"Memo";case na:t=e._payload,e=e._init;try{return Wp(e(t))}catch{}}return null}var El=Array.isArray,Ut=Zy.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,he=qT.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$a={pending:!1,data:null,method:null,action:null},qp=[],kr=-1;function is(e){return{current:e}}function _n(e){0>kr||(e.current=qp[kr],qp[kr]=null,kr--)}function Ne(e,t){kr++,qp[kr]=e.current,e.current=t}var ts=is(null),Vl=is(null),ha=is(null),ju=is(null);function $u(e,t){switch(Ne(ha,t),Ne(Vl,e),Ne(ts,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?wy(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=wy(t),e=TM(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}_n(ts),Ne(ts,e)}function co(){_n(ts),_n(Vl),_n(ha)}function Yp(e){var t=e.memoizedState;t!==null&&(xo._currentValue=t.memoizedState,Ne(ju,e)),t=ts.current;var n=TM(t,e.type);t!==n&&(Ne(Vl,e),Ne(ts,n))}function th(e){Vl.current===e&&(_n(ts),_n(Vl)),ju.current===e&&(_n(ju),xo._currentValue=$a)}var op,pv;function ta(e){if(op===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);op=t&&t[1]||"",pv=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+op+e+pv}var lp=!1;function cp(e,t){if(!e||lp)return"";lp=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var p=function(){throw Error()};if(Object.defineProperty(p.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(p,[])}catch(v){var u=v}Reflect.construct(e,[],p)}else{try{p.call()}catch(v){u=v}p=!1;try{var d=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),p=!0,new e}finally{p&&(d!==void 0?Object.defineProperty(e.prototype,"props",d):delete e.prototype.props)}}}else{try{throw Error()}catch(v){u=v}(p=e())&&typeof p.catch=="function"&&p.catch(function(){})}}catch(v){if(v&&u&&typeof v.stack=="string")return[v.stack,u.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var a=i.DetermineComponentFrameRoot(),r=a[0],o=a[1];if(r&&o){var l=r.split(`
`),c=o.split(`
`);for(s=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;s<c.length&&!c[s].includes("DetermineComponentFrameRoot");)s++;if(i===l.length||s===c.length)for(i=l.length-1,s=c.length-1;1<=i&&0<=s&&l[i]!==c[s];)s--;for(;1<=i&&0<=s;i--,s--)if(l[i]!==c[s]){if(i!==1||s!==1)do if(i--,s--,0>s||l[i]!==c[s]){var f=`
`+l[i].replace(" at new "," at ");return e.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",e.displayName)),f}while(1<=i&&0<=s);break}}}finally{lp=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?ta(n):""}function eE(e,t){switch(e.tag){case 26:case 27:case 5:return ta(e.type);case 16:return ta("Lazy");case 13:return e.child!==t&&t!==null?ta("Suspense Fallback"):ta("Suspense");case 19:return ta("SuspenseList");case 0:case 15:return cp(e.type,!1);case 11:return cp(e.type.render,!1);case 1:return cp(e.type,!0);case 31:return ta("Activity");case 30:return ta("ViewTransition");default:return""}}function mv(e){try{var t="",n=null;do t+=eE(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var Zp=Object.prototype.hasOwnProperty,Qm=$e.unstable_scheduleCallback,up=$e.unstable_cancelCallback,nE=$e.unstable_shouldYield,iE=$e.unstable_requestPaint,ii=$e.unstable_now,sE=$e.unstable_getCurrentPriorityLevel,ix=$e.unstable_ImmediatePriority,sx=$e.unstable_UserBlockingPriority,eh=$e.unstable_NormalPriority,aE=$e.unstable_LowPriority,ax=$e.unstable_IdlePriority,rE=$e.log,oE=$e.unstable_setDisableYieldValue,ac=null,si=null;function aa(e){if(typeof rE=="function"&&oE(e),si&&typeof si.setStrictMode=="function")try{si.setStrictMode(ac,e)}catch{}}var ai=Math.clz32?Math.clz32:uE,lE=Math.log,cE=Math.LN2;function uE(e){return e>>>=0,e===0?32:31-(lE(e)/cE|0)|0}var du=256,pu=262144,mu=4194304;function Za(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function wh(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var s=0,a=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var o=i&134217727;return o!==0?(i=o&~a,i!==0?s=Za(i):(r&=o,r!==0?s=Za(r):n||(n=o&~e,n!==0&&(s=Za(n))))):(o=i&~a,o!==0?s=Za(o):r!==0?s=Za(r):n||(n=i&~e,n!==0&&(s=Za(n)))),s===0?0:t!==0&&t!==s&&(t&a)===0&&(a=s&-s,n=t&-t,a>=n||a===32&&(n&4194048)!==0)?t:s}function rc(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function rx(e,t){(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var i=31-ai(n),s=1<<i;t|=e[i],n&=~s}return t}function hE(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ox(){var e=mu;return mu<<=1,(mu&62914560)===0&&(mu=4194304),e}function hp(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function oc(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function fE(e,t,n,i,s,a){var r=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var o=e.entanglements,l=e.expirationTimes,c=e.hiddenUpdates;for(n=r&~n;0<n;){var f=31-ai(n),p=1<<f;o[f]=0,l[f]=-1;var u=c[f];if(u!==null)for(c[f]=null,f=0;f<u.length;f++){var d=u[f];d!==null&&(d.lane&=-536870913)}n&=~p}i!==0&&lx(e,i,0),a!==0&&s===0&&e.tag!==0&&(e.suspendedLanes|=a&~(r&~t))}function lx(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-ai(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function cx(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-ai(n),s=1<<i;s&t|e[i]&t&&(e[i]|=t),n&=~s}}function ux(e,t){var n=t&-t;return n=(n&42)!==0?1:jm(n),(n&(e.suspendedLanes|t))!==0?0:n}function jm(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function $m(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function hx(){var e=he.p;return e!==0?e:(e=window.event,e===void 0?32:qM(e.type))}function gv(e,t){var n=he.p;try{return he.p=e,t()}finally{he.p=n}}var Ls=Math.random().toString(36).slice(2),mn="__reactFiber$"+Ls,Yn="__reactProps$"+Ls,bo="__reactContainer$"+Ls,_v="__reactEvents$"+Ls,dE="__reactListeners$"+Ls,pE="__reactHandles$"+Ls,vv="__reactResources$"+Ls,lc="__reactMarker$"+Ls,nh="__reactLoad$"+Ls;function Rh(e){delete e[mn],delete e[Yn],delete e[dE],delete e[pE]}function Qa(e){var t;if(t=e[mn])return t;for(var n=e.parentNode;n;){if(t=n[bo]||n[mn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Iy(e);e!==null;){if(n=e[mn])return n;e=Iy(e)}return t}e=n,n=e.parentNode}return null}function To(e){if(e=e[mn]||e[bo]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Al(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(Q(33))}function $r(e){var t=e[vv];return t||(t=e[vv]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function on(e){e[lc]=!0}function fx(e){e[nh]=void 0}var dx=new Set,px={};function dr(e,t){uo(e,t),uo(e+"Capture",t)}function uo(e,t){for(px[e]=t,e=0;e<t.length;e++)dx.add(t[e])}var mE=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),yv={},xv={};function gE(e){return Zp.call(xv,e)?!0:Zp.call(yv,e)?!1:mE.test(e)?xv[e]=!0:(yv[e]=!0,!1)}var oe=!1;function Sv(){var e=oe;return oe=!1,e}function Uu(e,t,n){if(gE(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,n)}}function gu(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,n)}}function xs(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,i)}}function $n(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function mx(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function _E(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var s=i.get,a=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(r){n=""+r,a.call(this,r)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(r){n=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Jp(e){if(!e._valueTracker){var t=mx(e)?"checked":"value";e._valueTracker=_E(e,t,""+e[t])}}function gx(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=mx(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}var vE=/[\n"\\]/g;function vi(e){return e.replace(vE,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Kp(e,t,n,i,s,a,r,o){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+$n(t)):e.value!==""+$n(t)&&(e.value=""+$n(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?r==="number"&&e.value==t?fp(e,$n(e.value)):fp(e,$n(t)):n!=null?fp(e,$n(n)):i!=null&&e.removeAttribute("value"),s==null&&a!=null&&(e.defaultChecked=!!a),s!=null&&(e.checked=s&&typeof s!="function"&&typeof s!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+$n(o):e.removeAttribute("name")}function _x(e,t,n,i,s,a,r,o){if(a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"&&(e.type=a),t!=null||n!=null){if(!(a!=="submit"&&a!=="reset"||t!=null)){Jp(e);return}n=n!=null?""+$n(n):"",t=t!=null?""+$n(t):n,o||t===e.value||(e.value=t),e.defaultValue=t}i=i??s,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=o?e.checked:!!i,e.defaultChecked=!!i,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r),Jp(e)}function fp(e,t){e.defaultValue!==""+t&&(e.defaultValue=""+t)}function to(e,t,n,i){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&i&&(e[n].defaultSelected=!0)}else{for(n=""+$n(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,i&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function vx(e,t,n){if(t!=null&&(t=""+$n(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+$n(n):""}function yx(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(Q(92));if(El(i)){if(1<i.length)throw Error(Q(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=$n(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),Jp(e)}function ho(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var yE=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Mv(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||yE.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function xx(e,t,n){if(t!=null&&typeof t!="object")throw Error(Q(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="",oe=!0);for(var s in t)i=t[s],t.hasOwnProperty(s)&&n[s]!==i&&(Mv(e,s,i),oe=!0)}else for(var a in t)t.hasOwnProperty(a)&&Mv(e,a,t[a])}function tg(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xE=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),SE=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ou(e){return SE.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Qi(){}var Qp=null;function eg(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Xr=null,eo=null;function bv(e){var t=To(e);if(t&&(e=t.stateNode)){var n=e[Yn]||null;t:switch(e=t.stateNode,t.type){case"input":if(Kp(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+vi(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var s=i[Yn]||null;if(!s)throw Error(Q(90));Kp(i,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&gx(i)}break t;case"textarea":vx(e,n.value,n.defaultValue);break t;case"select":t=n.value,t!=null&&to(e,!!n.multiple,t,!1)}}}var dp=!1;function Sx(e,t,n){if(dp)return e(t,n);dp=!0;try{var i=e(t);return i}finally{if(dp=!1,(Xr!==null||eo!==null)&&(Vh(),Xr&&(t=Xr,e=eo,eo=Xr=null,bv(t),e)))for(t=0;t<e.length;t++)bv(e[t])}}function kl(e,t){var n=e.stateNode;if(n===null)return null;var i=n[Yn]||null;if(i===null)return null;n=i[t];t:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break t;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(Q(231,t,typeof n));return n}var As=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),jp=!1;if(As)try{Ir={},Object.defineProperty(Ir,"passive",{get:function(){jp=!0}}),window.addEventListener("test",Ir,Ir),window.removeEventListener("test",Ir,Ir)}catch{jp=!1}var Ir,ra=null,ng=null,Iu=null;function Mx(){if(Iu)return Iu;var e,t=ng,n=t.length,i,s="value"in ra?ra.value:ra.textContent,a=s.length;for(e=0;e<n&&t[e]===s[e];e++);var r=n-e;for(i=1;i<=r&&t[n-i]===s[a-i];i++);return Iu=s.slice(e,1<i?1-i:void 0)}function Pu(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function _u(){return!0}function Tv(){return!1}function zn(e){function t(n,i,s,a,r){this._reactName=n,this._targetInst=s,this.type=i,this.nativeEvent=a,this.target=r,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(a):a[o]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?_u:Tv,this.isPropagationStopped=Tv,this}return Te(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=_u)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=_u)},persist:function(){},isPersistent:_u}),t}var Aa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ch=zn(Aa),cc=Te({},Aa,{view:0,detail:0}),ME=zn(cc),pp,mp,yl,Nh=Te({},cc,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ig,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==yl&&(yl&&e.type==="mousemove"?(pp=e.screenX-yl.screenX,mp=e.screenY-yl.screenY):mp=pp=0,yl=e),pp)},movementY:function(e){return"movementY"in e?e.movementY:mp}}),Ev=zn(Nh),bE=Te({},Nh,{dataTransfer:0}),TE=zn(bE),EE=Te({},cc,{relatedTarget:0}),gp=zn(EE),AE=Te({},Aa,{animationName:0,elapsedTime:0,pseudoElement:0}),wE=zn(AE),RE=Te({},Aa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),CE=zn(RE),NE=Te({},Aa,{data:0}),Av=zn(NE),DE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},LE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},UE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function OE(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=UE[e])?!!t[e]:!1}function ig(){return OE}var IE=Te({},cc,{key:function(e){if(e.key){var t=DE[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Pu(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?LE[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ig,charCode:function(e){return e.type==="keypress"?Pu(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Pu(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),PE=zn(IE),BE=Te({},Nh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wv=zn(BE),zE=Te({},Aa,{submitter:0}),FE=zn(zE),HE=Te({},cc,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ig}),GE=zn(HE),VE=Te({},Aa,{propertyName:0,elapsedTime:0,pseudoElement:0}),kE=zn(VE),XE=Te({},Nh,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),WE=zn(XE),qE=Te({},Aa,{newState:0,oldState:0,source:0}),YE=zn(qE),ZE=[9,13,27,32],sg=As&&"CompositionEvent"in window,Cl=null;As&&"documentMode"in document&&(Cl=document.documentMode);var JE=As&&"TextEvent"in window&&!Cl,bx=As&&(!sg||Cl&&8<Cl&&11>=Cl),Rv=" ",Cv=!1;function Tx(e,t){switch(e){case"keyup":return ZE.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ex(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Wr=!1;function KE(e,t){switch(e){case"compositionend":return Ex(t);case"keypress":return t.which!==32?null:(Cv=!0,Rv);case"textInput":return e=t.data,e===Rv&&Cv?null:e;default:return null}}function QE(e,t){if(Wr)return e==="compositionend"||!sg&&Tx(e,t)?(e=Mx(),Iu=ng=ra=null,Wr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return bx&&t.locale!=="ko"?null:t.data;default:return null}}var jE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Nv(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!jE[e.type]:t==="textarea"}function Ax(e,t,n,i){Xr?eo?eo.push(i):eo=[i]:Xr=i,t=Th(t,"onChange"),0<t.length&&(n=new Ch("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var Nl=null,Xl=null;function $E(e){SM(e,0)}function Dh(e){var t=Al(e);if(gx(t))return e}function Dv(e,t){if(e==="change")return t}var wx=!1;As&&(As?(yu="oninput"in document,yu||(_p=document.createElement("div"),_p.setAttribute("oninput","return;"),yu=typeof _p.oninput=="function"),vu=yu):vu=!1,wx=vu&&(!document.documentMode||9<document.documentMode));var vu,yu,_p;function Lv(){Nl&&(Nl.detachEvent("onpropertychange",Rx),Xl=Nl=null)}function Rx(e){if(e.propertyName==="value"&&Dh(Xl)){var t=[];Ax(t,Xl,e,eg(e)),Sx($E,t)}}function tA(e,t,n){e==="focusin"?(Lv(),Nl=t,Xl=n,Nl.attachEvent("onpropertychange",Rx)):e==="focusout"&&Lv()}function eA(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Dh(Xl)}function nA(e,t){if(e==="click")return Dh(t)}function iA(e,t){if(e==="input"||e==="change")return Dh(t)}function sA(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var oi=typeof Object.is=="function"?Object.is:sA;function Wl(e,t){if(oi(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var s=n[i];if(!Zp.call(t,s)||!oi(e[s],t[s]))return!1}return!0}function $p(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Uv(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ov(e,t){var n=Uv(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=Uv(n)}}function Cx(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Cx(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Nx(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=$p(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=$p(e.document)}return t}function ag(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var aA=As&&"documentMode"in document&&11>=document.documentMode,qr=null,tm=null,Dl=null,em=!1;function Iv(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;em||qr==null||qr!==$p(i)||(i=qr,"selectionStart"in i&&ag(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Dl&&Wl(Dl,i)||(Dl=i,i=Th(tm,"onSelect"),0<i.length&&(t=new Ch("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=qr)))}function qa(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Yr={animationend:qa("Animation","AnimationEnd"),animationiteration:qa("Animation","AnimationIteration"),animationstart:qa("Animation","AnimationStart"),transitionrun:qa("Transition","TransitionRun"),transitionstart:qa("Transition","TransitionStart"),transitioncancel:qa("Transition","TransitionCancel"),transitionend:qa("Transition","TransitionEnd")},vp={},Dx={};As&&(Dx=document.createElement("div").style,"AnimationEvent"in window||(delete Yr.animationend.animation,delete Yr.animationiteration.animation,delete Yr.animationstart.animation),"TransitionEvent"in window||delete Yr.transitionend.transition);function pr(e){if(vp[e])return vp[e];if(!Yr[e])return e;var t=Yr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Dx)return vp[e]=t[n];return e}var Lx=pr("animationend"),Ux=pr("animationiteration"),Ox=pr("animationstart"),rA=pr("transitionrun"),oA=pr("transitionstart"),lA=pr("transitioncancel"),Ix=pr("transitionend"),Px=new Map,nm="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");nm.push("scrollEnd");function Ui(e,t){Px.set(e,t),dr(t,[e])}var cA=0;function ws(e,t){if(e.name!=null&&e.name!=="auto")return e.name;if(t.autoName!==null)return t.autoName;e=Li.identifierPrefix;var n=cA++;return e="_"+e+"t_"+n.toString(32)+"_",t.autoName=e}function Pv(e){if(e==null||typeof e=="string")return e;var t=null,n=lo;if(n!==null)for(var i=0;i<n.length;i++){var s=e[n[i]];if(s!=null){if(s==="none")return"none";t=t==null?s:t+(" "+s)}}return t??e.default}function Us(e,t){return e=Pv(e),t=Pv(t),t==null?e==="auto"?null:e:t==="auto"?null:t}var ih=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},mi=[],Zr=0,rg=0;function Lh(){for(var e=Zr,t=rg=Zr=0;t<e;){var n=mi[t];mi[t++]=null;var i=mi[t];mi[t++]=null;var s=mi[t];mi[t++]=null;var a=mi[t];if(mi[t++]=null,i!==null&&s!==null){var r=i.pending;r===null?s.next=s:(s.next=r.next,r.next=s),i.pending=s}a!==0&&Bx(n,s,a)}}function Uh(e,t,n,i){mi[Zr++]=e,mi[Zr++]=t,mi[Zr++]=n,mi[Zr++]=i,rg|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function og(e,t,n,i){return Uh(e,t,n,i),sh(e)}function mr(e,t){return Uh(e,null,null,t),sh(e)}function Bx(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var s=!1,a=e.return;a!==null;)a.childLanes|=n,i=a.alternate,i!==null&&(i.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(s=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,s&&t!==null&&(s=31-ai(n),e=a.hiddenUpdates,i=e[s],i===null?e[s]=[t]:i.push(t),t.lane=n|536870912),a):null}function sh(e){if(50<Gl)throw Gl=0,qu=null,Error(Q(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Jr={};function uA(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xn(e,t,n,i){return new uA(e,t,n,i)}function lg(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ts(e,t){var n=e.alternate;return n===null?(n=Xn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&1206910976,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function zx(e,t){e.flags&=1206910978;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Bu(e,t,n,i,s,a){var r=0;if(i=e,typeof i=="function")lg(i)&&(r=1);else if(typeof i=="string")r=Pw(e,n,ts.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(i){case kp:return e=Xn(31,n,t,s),e.elementType=kp,e.lanes=a,e;case Vr:return tr(n.children,s,a,t);case ex:r=8,s|=24;break;case Hp:return e=Xn(12,n,t,s|2),e.elementType=Hp,e.lanes=a,e;case Gp:return e=Xn(13,n,t,s),e.elementType=Gp,e.lanes=a,e;case Vp:return e=Xn(19,n,t,s),e.elementType=Vp,e.lanes=a,e;case QT:case Xp:return e=s|32,e=Xn(30,n,t,e),e.elementType=Xp,e.lanes=a,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case Ki:r=10;break t;case nx:r=9;break t;case Jm:r=11;break t;case Km:r=14;break t;case na:r=16,i=null;break t}r=29,n=Error(Q(130,e===null?"null":typeof e,"")),i=null}return t=Xn(r,n,t,s),t.elementType=e,t.type=i,t.lanes=a,t}function tr(e,t,n,i){return e=Xn(7,e,i,t),e.lanes=n,e}function yp(e,t,n){return e=Xn(6,e,null,t),e.lanes=n,e}function Fx(e){var t=Xn(18,null,null,0);return t.stateNode=e,t}function xp(e,t,n){return t=Xn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Bv=new WeakMap;function yi(e,t){if(typeof e=="object"&&e!==null){var n=Bv.get(e);return n!==void 0?n:(t={value:e,source:t,stack:mv(t)},Bv.set(e,t),t)}return{value:e,source:t,stack:mv(t)}}var Kr=[],Qr=0,ah=null,ql=0,gi=[],_i=0,Sa=null,ji=1,$i="";function Ms(e,t){Kr[Qr++]=ql,Kr[Qr++]=ah,ah=e,ql=t}function Hx(e,t,n){gi[_i++]=ji,gi[_i++]=$i,gi[_i++]=Sa,Sa=e;var i=ji;e=$i;var s=32-ai(i)-1;i&=~(1<<s),n+=1;var a=32-ai(t)+s;if(30<a){var r=s-s%5;a=(i&(1<<r)-1).toString(32),i>>=r,s-=r,ji=1<<32-ai(t)+s|n<<s|i,$i=a+e}else ji=1<<a|n<<s|i,$i=e}function Oh(e){e.return!==null&&(Ms(e,1),Hx(e,1,0))}function cg(e){for(;e===ah;)ah=Kr[--Qr],Kr[Qr]=null,ql=Kr[--Qr],Kr[Qr]=null;for(;e===Sa;)Sa=gi[--_i],gi[_i]=null,$i=gi[--_i],gi[_i]=null,ji=gi[--_i],gi[_i]=null}function Gx(e,t){gi[_i++]=ji,gi[_i++]=$i,gi[_i++]=Sa,ji=t.id,$i=t.overflow,Sa=e}var ln=null,Ce=null,Jt=!1,fa=null,xi=!1,im=Error(Q(519));function Ma(e){var t=Error(Q(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Yl(yi(t,e)),im}function zv(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[mn]=e,t[Yn]=i,n){case"dialog":Kt("cancel",t),Kt("close",t);break;case"iframe":case"object":case"embed":Kt("load",t);break;case"video":case"audio":for(n=0;n<Ql.length;n++)Kt(Ql[n],t);break;case"source":Kt("error",t);break;case"img":case"image":case"link":Kt("error",t),Kt("load",t);break;case"details":Kt("toggle",t);break;case"input":Kt("invalid",t),_x(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":Kt("invalid",t);break;case"textarea":Kt("invalid",t),yx(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||bM(t.textContent,n)?(i.popover!=null&&(Kt("beforetoggle",t),Kt("toggle",t)),i.onScroll!=null&&Kt("scroll",t),i.onScrollEnd!=null&&Kt("scrollend",t),i.onClick!=null&&(t.onclick=Qi),t=!0):t=!1,t||Ma(e,!0)}function rh(e){for(ln=e.return;ln;)switch(ln.tag){case 5:case 31:case 13:xi=!1;return;case 27:case 3:xi=!0;return;default:ln=ln.return}}function Pr(e){if(e!==ln)return!1;if(!Jt)return rh(e),Jt=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Gm(e.type,e.memoizedProps)),n=!n),n&&Ce&&Ma(e),rh(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(Q(317));Ce=Oy(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(Q(317));Ce=Oy(e)}else t===27?(t=Ce,wa(e.type)?(e=Wm,Wm=null,Ce=e):Ce=t):Ce=ln?Si(e.stateNode.nextSibling):null;return!0}function sr(){Ce=ln=null,Jt=!1}function Sp(){var e=fa;return e!==null&&(Vn===null?Vn=e:Vn.push.apply(Vn,e),fa=null),e}function Yl(e){fa===null?fa=[e]:fa.push(e)}var sm=is(null),gr=null,bs=null;function oa(e,t,n){Ne(sm,t._currentValue),t._currentValue=n}function Es(e){e._currentValue=sm.current,_n(sm)}function zu(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function am(e,t,n,i){var s=e.child;for(s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){var r=s.child;a=a.firstContext;t:for(;a!==null;){var o=a;a=s;for(var l=0;l<t.length;l++)if(o.context===t[l]){a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),zu(a.return,n,e),i||(r=null);break t}a=o.next}}else if(s.tag===18){if(r=s.return,r===null)throw Error(Q(341));r.lanes|=n,a=r.alternate,a!==null&&(a.lanes|=n),zu(r,n,e),r=null}else s.tag===13&&s.memoizedState!==null&&s.memoizedState.dehydrated===null?(s.lanes|=n,r=s.alternate,r!==null&&(r.lanes|=n),zu(s.return,n,e),r=s.child,r=r!==null?r.sibling:null):r=s.child;if(r!==null)r.return=s;else for(r=s;r!==null;){if(r===e){r=null;break}if(s=r.sibling,s!==null){s.return=r.return,r=s;break}r=r.return}s=r}}function ar(e,t,n,i){e=null;for(var s=t,a=!1;s!==null;){if(!a){if((s.flags&524288)!==0)a=!0;else if((s.flags&262144)!==0)break}if(s.tag===10){var r=s.alternate;if(r===null)throw Error(Q(387));if(r=r.memoizedProps,r!==null){var o=s.type;oi(s.pendingProps.value,r.value)||(e!==null?e.push(o):e=[o])}}else if(s===ju.current){if(r=s.alternate,r===null)throw Error(Q(387));r.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(e!==null?e.push(xo):e=[xo])}s=s.return}return e!==null&&am(t,e,n,i),t.flags|=262144,e!==null}function oh(e){for(e=e.firstContext;e!==null;){if(!oi(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function rr(e){gr=e,bs=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function gn(e){return Vx(gr,e)}function xu(e,t){return gr===null&&rr(e),Vx(e,t)}function Vx(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},bs===null){if(e===null)throw Error(Q(308));bs=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else bs=bs.next=t;return n}var hA=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},fA=$e.unstable_scheduleCallback,dA=$e.unstable_NormalPriority,Ze={$$typeof:Ki,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ug(){return{controller:new hA,data:new Map,refCount:0}}function uc(e){e.refCount--,e.refCount===0&&fA(dA,function(){e.controller.abort()})}function Fv(e,t){if((e.pendingLanes&4194048)!==0){var n=e.transitionTypes;for(n===null&&(n=e.transitionTypes=[]),e=0;e<t.length;e++){var i=t[e];n.indexOf(i)===-1&&n.push(i)}}}var wl=null;function pA(e){var t=e.transitionTypes;return e.transitionTypes=null,t}var Ll=null,rm=0,or=0,no=null;function mA(e,t){if(Ll===null){var n=Ll=[];rm=0,or=zg(),no={status:"pending",value:void 0,then:function(i){n.push(i)}}}return rm++,t.then(Hv,Hv),t}function Hv(){if(--rm===0&&(wl=null,Ll!==null)){no!==null&&(no.status="fulfilled");var e=Ll;Ll=null,or=0,no=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function gA(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(s){n.push(s)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var s=0;s<n.length;s++)(0,n[s])(t)},function(s){for(i.status="rejected",i.reason=s,s=0;s<n.length;s++)(0,n[s])(void 0)}),i}var Gv=Ut.S;Ut.S=function(e,t){if(rM=ii(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&mA(e,t),wl!==null)for(var n=_o;n!==null;)Fv(n,wl),n=n.next;if(n=e.types,n!==null){for(var i=_o;i!==null;)Fv(i,n),i=i.next;if(or!==0){i=wl,i===null&&(i=wl=[]);for(var s=0;s<n.length;s++){var a=n[s];i.indexOf(a)===-1&&i.push(a)}}}Gv!==null&&Gv(e,t)};var er=is(null);function hg(){var e=er.current;return e!==null?e:be.pooledCache}function Fu(e,t){t===null?Ne(er,er.current):Ne(er,t.pool)}function kx(){var e=hg();return e===null?null:{parent:Ze._currentValue,pool:e}}var Eo=Error(Q(460)),fg=Error(Q(474)),Ih=Error(Q(542)),lh={then:function(){}};function Vv(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Xx(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Qi,Qi),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Xv(e),e===void 0&&!("reason"in t)?Error(Q(600)):e;default:if(typeof t.status=="string")t.then(Qi,Qi);else{if(e=be,e!==null&&100<e.shellSuspendCounter)throw Error(Q(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var s=t;s.status="fulfilled",s.value=i}},function(i){if(t.status==="pending"){var s=t;s.status="rejected",s.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Xv(e),e}throw nr=t,Eo}}function Ja(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(nr=n,Eo):n}}var nr=null;function kv(){if(nr===null)throw Error(Q(459));var e=nr;return nr=null,e}function Xv(e){if(e===Eo||e===Ih)throw Error(Q(483))}var io=null,Zl=0;function Su(e){var t=Zl;return Zl+=1,io===null&&(io=[]),Xx(io,e,t)}function $s(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Mu(e,t){throw t.$$typeof===KT?Error(Q(525)):(e=Object.prototype.toString.call(t),Error(Q(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Wx(e){function t(h,m){if(e){var y=h.deletions;y===null?(h.deletions=[m],h.flags|=16):y.push(m)}}function n(h,m){if(!e)return null;for(;m!==null;)t(h,m),m=m.sibling;return null}function i(h){for(var m=new Map;h!==null;)h.key===null?m.set(h.index,h):m.set(h.key,h),h=h.sibling;return m}function s(h,m){return h=Ts(h,m),h.index=0,h.sibling=null,h}function a(h,m,y){return h.index=y,e?(y=h.alternate,y!==null?(y=y.index,y<m?(h.flags|=2,m):y):(h.flags|=134217730,m)):(h.flags|=1048576,m)}function r(h){return e&&h.alternate===null&&(h.flags|=134217730),h}function o(h,m,y,x){return m===null||m.tag!==6?(m=yp(y,h.mode,x),m.return=h,m):(m=s(m,y),m.return=h,m)}function l(h,m,y,x){var E=y.type;return E===Vr?(h=f(h,m,y.props.children,x,y.key),$s(h,y),h):m!==null&&(m.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===na&&Ja(E)===m.type)?(m=s(m,y.props),$s(m,y),m.return=h,m):(m=Bu(y.type,y.key,y.props,null,h.mode,x),$s(m,y),m.return=h,m)}function c(h,m,y,x){return m===null||m.tag!==4||m.stateNode.containerInfo!==y.containerInfo||m.stateNode.implementation!==y.implementation?(m=xp(y,h.mode,x),m.return=h,m):(m=s(m,y.children||[]),m.return=h,m)}function f(h,m,y,x,E){return m===null||m.tag!==7?(m=tr(y,h.mode,x,E),m.return=h,m):(m=s(m,y),m.return=h,m)}function p(h,m,y){if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return m=yp(""+m,h.mode,y),m.return=h,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case fu:return y=Bu(m.type,m.key,m.props,null,h.mode,y),$s(y,m),y.return=h,y;case Tl:return m=xp(m,h.mode,y),m.return=h,m;case na:return m=Ja(m),p(h,m,y)}if(El(m)||vl(m))return m=tr(m,h.mode,y,null),m.return=h,m;if(typeof m.then=="function")return p(h,Su(m),y);if(m.$$typeof===Ki)return p(h,xu(h,m),y);Mu(h,m)}return null}function u(h,m,y,x){var E=m!==null?m.key:null;if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return E!==null?null:o(h,m,""+y,x);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case fu:return y.key===E?l(h,m,y,x):null;case Tl:return y.key===E?c(h,m,y,x):null;case na:return y=Ja(y),u(h,m,y,x)}if(El(y)||vl(y))return E!==null?null:f(h,m,y,x,null);if(typeof y.then=="function")return u(h,m,Su(y),x);if(y.$$typeof===Ki)return u(h,m,xu(h,y),x);Mu(h,y)}return null}function d(h,m,y,x,E){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return h=h.get(y)||null,o(m,h,""+x,E);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case fu:return h=h.get(x.key===null?y:x.key)||null,l(m,h,x,E);case Tl:return h=h.get(x.key===null?y:x.key)||null,c(m,h,x,E);case na:return x=Ja(x),d(h,m,y,x,E)}if(El(x)||vl(x))return h=h.get(y)||null,f(m,h,x,E,null);if(typeof x.then=="function")return d(h,m,y,Su(x),E);if(x.$$typeof===Ki)return d(h,m,y,xu(m,x),E);Mu(m,x)}return null}function v(h,m,y,x){for(var E=null,w=null,_=m,T=m=0,O=null;_!==null&&T<y.length;T++){_.index>T?(O=_,_=null):O=_.sibling;var R=u(h,_,y[T],x);if(R===null){_===null&&(_=O);break}e&&_&&R.alternate===null&&t(h,_),m=a(R,m,T),w===null?E=R:w.sibling=R,w=R,_=O}if(T===y.length)return n(h,_),Jt&&Ms(h,T),E;if(_===null){for(;T<y.length;T++)_=p(h,y[T],x),_!==null&&(m=a(_,m,T),w===null?E=_:w.sibling=_,w=_);return Jt&&Ms(h,T),E}for(_=i(_);T<y.length;T++)O=d(_,h,T,y[T],x),O!==null&&(e&&(R=O.alternate,R!==null&&_.delete(R.key===null?T:R.key)),m=a(O,m,T),w===null?E=O:w.sibling=O,w=O);return e&&_.forEach(function(D){return t(h,D)}),Jt&&Ms(h,T),E}function M(h,m,y,x){if(y==null)throw Error(Q(151));for(var E=null,w=null,_=m,T=m=0,O=null,R=y.next();_!==null&&!R.done;T++,R=y.next()){_.index>T?(O=_,_=null):O=_.sibling;var D=u(h,_,R.value,x);if(D===null){_===null&&(_=O);break}e&&_&&D.alternate===null&&t(h,_),m=a(D,m,T),w===null?E=D:w.sibling=D,w=D,_=O}if(R.done)return n(h,_),Jt&&Ms(h,T),E;if(_===null){for(;!R.done;T++,R=y.next())R=p(h,R.value,x),R!==null&&(m=a(R,m,T),w===null?E=R:w.sibling=R,w=R);return Jt&&Ms(h,T),E}for(_=i(_);!R.done;T++,R=y.next())R=d(_,h,T,R.value,x),R!==null&&(e&&(O=R.alternate,O!==null&&_.delete(O.key===null?T:O.key)),m=a(R,m,T),w===null?E=R:w.sibling=R,w=R);return e&&_.forEach(function(I){return t(h,I)}),Jt&&Ms(h,T),E}function g(h,m,y,x){if(typeof y=="object"&&y!==null&&y.type===Vr&&y.key===null&&y.props.ref===void 0&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case fu:t:{for(var E=y.key;m!==null;){if(m.key===E){if(E=y.type,E===Vr){if(m.tag===7){n(h,m.sibling),x=s(m,y.props.children),$s(x,y),x.return=h,h=x;break t}}else if(m.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===na&&Ja(E)===m.type){n(h,m.sibling),x=s(m,y.props),$s(x,y),x.return=h,h=x;break t}n(h,m);break}else t(h,m);m=m.sibling}y.type===Vr?(x=tr(y.props.children,h.mode,x,y.key),$s(x,y),x.return=h,h=x):(x=Bu(y.type,y.key,y.props,null,h.mode,x),$s(x,y),x.return=h,h=x)}return r(h);case Tl:t:{for(E=y.key;m!==null;){if(m.key===E)if(m.tag===4&&m.stateNode.containerInfo===y.containerInfo&&m.stateNode.implementation===y.implementation){n(h,m.sibling),x=s(m,y.children||[]),x.return=h,h=x;break t}else{n(h,m);break}else t(h,m);m=m.sibling}x=xp(y,h.mode,x),x.return=h,h=x}return r(h);case na:return y=Ja(y),g(h,m,y,x)}if(El(y))return v(h,m,y,x);if(vl(y)){if(E=vl(y),typeof E!="function")throw Error(Q(150));return y=E.call(y),M(h,m,y,x)}if(typeof y.then=="function")return g(h,m,Su(y),x);if(y.$$typeof===Ki)return g(h,m,xu(h,y),x);Mu(h,y)}return typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint"?(y=""+y,m!==null&&m.tag===6?(n(h,m.sibling),x=s(m,y),x.return=h,h=x):(n(h,m),x=yp(y,h.mode,x),x.return=h,h=x),r(h)):n(h,m)}return function(h,m,y,x){try{Zl=0;var E=g(h,m,y,x);return io=null,E}catch(_){if(_===Eo||_===Ih)throw _;var w=Xn(29,_,null,h.mode);return w.lanes=x,w.return=h,w}}}var lr=Wx(!0),qx=Wx(!1),ia=!1;function dg(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function om(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function da(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function pa(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(ue&2)!==0){var s=i.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),i.pending=t,t=sh(e),Bx(e,null,n),t}return Uh(e,i,t,n),sh(e)}function Ul(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,cx(e,n)}}function Mp(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var s=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var r={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?s=a=r:a=a.next=r,n=n.next}while(n!==null);a===null?s=a=t:a=a.next=t}else s=a=t;n={baseState:i.baseState,firstBaseUpdate:s,lastBaseUpdate:a,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var lm=!1;function Ol(){if(lm){var e=no;if(e!==null)throw e}}function Il(e,t,n,i){lm=!1;var s=e.updateQueue;ia=!1;var a=s.firstBaseUpdate,r=s.lastBaseUpdate,o=s.shared.pending;if(o!==null){s.shared.pending=null;var l=o,c=l.next;l.next=null,r===null?a=c:r.next=c,r=l;var f=e.alternate;f!==null&&(f=f.updateQueue,o=f.lastBaseUpdate,o!==r&&(o===null?f.firstBaseUpdate=c:o.next=c,f.lastBaseUpdate=l))}if(a!==null){var p=s.baseState;r=0,f=c=l=null,o=a;do{var u=o.lane&-536870913,d=u!==o.lane;if(d?(ee&u)===u:(i&u)===u){u!==0&&u===or&&(lm=!0),f!==null&&(f=f.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var v=e,M=o;u=t;var g=n;switch(M.tag){case 1:if(v=M.payload,typeof v=="function"){p=v.call(g,p,u);break t}p=v;break t;case 3:v.flags=v.flags&-65537|128;case 0:if(v=M.payload,u=typeof v=="function"?v.call(g,p,u):v,u==null)break t;p=Te({},p,u);break t;case 2:ia=!0}}u=o.callback,u!==null&&(e.flags|=64,d&&(e.flags|=8192),d=s.callbacks,d===null?s.callbacks=[u]:d.push(u))}else d={lane:u,tag:o.tag,payload:o.payload,callback:o.callback,next:null},f===null?(c=f=d,l=p):f=f.next=d,r|=u;if(o=o.next,o===null){if(o=s.shared.pending,o===null)break;d=o,o=d.next,d.next=null,s.lastBaseUpdate=d,s.shared.pending=null}}while(!0);f===null&&(l=p),s.baseState=l,s.firstBaseUpdate=c,s.lastBaseUpdate=f,a===null&&(s.shared.lanes=0),Ea|=r,e.lanes=r,e.memoizedState=p}}function Yx(e,t){if(typeof e!="function")throw Error(Q(191,e));e.call(t)}function Zx(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Yx(n[e],t)}var ba=is(null),ch=is(0);function Wv(e,t){e=Ds,Ne(ch,e),Ne(ba,t),Ds=e|t.baseLanes}function cm(){Ne(ch,Ds),Ne(ba,ba.current)}function pg(){Ds=ch.current,_n(ba),_n(ch)}var xn=is(null),En=null;function ma(e){var t=e.alternate;Ne(vn,vn.current&1),Ne(xn,e),En===null&&(t===null||ba.current!==null||t.memoizedState!==null)&&(En=e)}function um(e){Ne(vn,vn.current),Ne(xn,e),En===null&&(En=e)}function Jx(e){e.tag===22?(Ne(vn,vn.current),Ne(xn,e),En===null&&(En=e)):ga()}function ga(){Ne(vn,vn.current),Ne(xn,xn.current)}function ti(e){_n(xn),En===e&&(En=null),_n(vn)}var vn=is(0);function Jl(e,t){Ne(xn,xn.current),Ne(vn,t)}function mg(e){_n(vn),_n(xn),En===e&&(En=null)}function uh(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Xm(n)||Vg(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!=="independent"){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Rs=0,Vt=null,xe=null,Ye=null,hh=!1,so=!1,cr=!1,fh=0,Kl=0,ao=null,_A=0;function He(){throw Error(Q(321))}function gg(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!oi(e[n],t[n]))return!1;return!0}function _g(e,t,n,i,s,a){return Rs=a,Vt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ut.H=e===null||e.memoizedState===null?AS:wS,cr=!1,a=n(i,s),cr=!1,so&&(a=Qx(t,n,i,s)),Kx(e),a}function Kx(e){Ut.H=dh;var t=xe!==null&&xe.next!==null;if(Rs=0,Ye=xe=Vt=null,hh=!1,Kl=0,ao=null,t)throw Error(Q(300));e===null||Je||(e=e.dependencies,e!==null&&oh(e)&&(Je=!0))}function Qx(e,t,n,i){Vt=e;var s=0;do{if(so&&(ao=null),Kl=0,so=!1,25<=s)throw Error(Q(301));if(s+=1,Ye=xe=null,e.updateQueue!=null){var a=e.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}Ut.H=EA,a=t(n,i)}while(so);return a}function vA(){var e=Ut.H,t=e.useState()[0];return t=typeof t.then=="function"?hc(t):t,e=e.useState()[0],(xe!==null?xe.memoizedState:null)!==e&&(Vt.flags|=1024),t}function vg(){var e=fh!==0;return fh=0,e}function yg(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function xg(e){if(hh){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}hh=!1}Rs=0,Ye=xe=Vt=null,so=!1,Kl=fh=0,ao=null}function Bn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ye===null?Vt.memoizedState=Ye=e:Ye=Ye.next=e,Ye}function ke(){if(xe===null){var e=Vt.alternate;e=e!==null?e.memoizedState:null}else e=xe.next;var t=Ye===null?Vt.memoizedState:Ye.next;if(t!==null)Ye=t,xe=e;else{if(e===null)throw Vt.alternate===null?Error(Q(467)):Error(Q(310));xe=e,e={memoizedState:xe.memoizedState,baseState:xe.baseState,baseQueue:xe.baseQueue,queue:xe.queue,next:null},Ye===null?Vt.memoizedState=Ye=e:Ye=Ye.next=e}return Ye}function Ph(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function hc(e){var t=Kl;return Kl+=1,ao===null&&(ao=[]),e=Xx(ao,e,t),t=Vt,(Ye===null?t.memoizedState:Ye.next)===null&&(t=t.alternate,Ut.H=t===null||t.memoizedState===null?AS:wS),e}function Bh(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return hc(e);if(e.$$typeof===$T)return;if(e.$$typeof===Ki)return gn(e)}throw Error(Q(438,String(e)))}function Sg(e){var t=null,n=Vt.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=Vt.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(s){return s.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Ph(),Vt.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=jT;return t.index++,n}function Cs(e,t){return typeof t=="function"?t(e):t}function Hu(e){var t=ke();return Mg(t,xe,e)}function Mg(e,t,n){var i=e.queue;if(i===null)throw Error(Q(311));i.lastRenderedReducer=n;var s=e.baseQueue,a=i.pending;if(a!==null){if(s!==null){var r=s.next;s.next=a.next,a.next=r}t.baseQueue=s=a,i.pending=null}if(a=e.baseState,s===null)e.memoizedState=a;else{t=s.next;var o=r=null,l=null,c=t,f=!1;do{var p=c.lane&-536870913;if(p!==c.lane?(ee&p)===p:(Rs&p)===p){var u=c.revertLane;if(u===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),p===or&&(f=!0);else if((Rs&u)===u){c=c.next,u===or&&(f=!0);continue}else p={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=p,r=a):l=l.next=p,Vt.lanes|=u,Ea|=u;p=c.action,cr&&n(a,p),a=c.hasEagerState?c.eagerState:n(a,p)}else u={lane:p,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=u,r=a):l=l.next=u,Vt.lanes|=p,Ea|=p;c=c.next}while(c!==null&&c!==t);if(l===null?r=a:l.next=o,!oi(a,e.memoizedState)&&(Je=!0,f&&(n=no,n!==null)))throw n;e.memoizedState=a,e.baseState=r,e.baseQueue=l,i.lastRenderedState=a}return s===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function bp(e){var t=ke(),n=t.queue;if(n===null)throw Error(Q(311));n.lastRenderedReducer=e;var i=n.dispatch,s=n.pending,a=t.memoizedState;if(s!==null){n.pending=null;var r=s=s.next;do a=e(a,r.action),r=r.next;while(r!==s);oi(a,t.memoizedState)||(Je=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,i]}function jx(e,t,n){var i=Vt,s=ke(),a=Jt;if(a){if(n===void 0)throw Error(Q(407));n=n()}else n=t();var r=!oi((xe||s).memoizedState,n);if(r&&(s.memoizedState=n,Je=!0),s=s.queue,bg(eS.bind(null,i,s,e),[e]),e=s.getSnapshot!==t||r||Ye!==null&&(Ye.memoizedState.tag&1)!==0,fo(e?9:8,{destroy:void 0},tS.bind(null,i,s,n,t),null),e){if(i.flags|=2048,be===null)throw Error(Q(349));a||(Rs&127)!==0||$x(i,t,n)}return n}function $x(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Vt.updateQueue,t===null?(t=Ph(),Vt.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function tS(e,t,n,i){t.value=n,t.getSnapshot=i,nS(t)&&iS(e)}function eS(e,t,n){return n(function(){nS(t)&&iS(e)})}function nS(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!oi(e,n)}catch{return!0}}function iS(e){var t=mr(e,2);t!==null&&Wn(t,e,2)}function hm(e){var t=Bn();if(typeof e=="function"){var n=e;if(e=n(),cr){aa(!0);try{n()}finally{aa(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Cs,lastRenderedState:e},t}function sS(e,t,n,i){return e.baseState=n,Mg(e,xe,typeof i=="function"?i:Cs)}function yA(e,t,n,i,s){if(Fh(e))throw Error(Q(485));if(e=t.action,e!==null){var a={payload:s,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){a.listeners.push(r)}};Ut.T!==null?n(!0):a.isTransition=!1,i(a),n=t.pending,n===null?(a.next=t.pending=a,aS(t,a)):(a.next=n.next,t.pending=n.next=a)}}function aS(e,t){var n=t.action,i=t.payload,s=e.state;if(t.isTransition){var a=Ut.T,r={};r.types=a!==null?a.types:null,Ut.T=r;try{var o=n(s,i),l=Ut.S;l!==null&&l(r,o),qv(e,t,o)}catch(c){fm(e,t,c)}finally{a!==null&&r.types!==null&&(a.types=r.types),Ut.T=a}}else try{a=n(s,i),qv(e,t,a)}catch(c){fm(e,t,c)}}function qv(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){Yv(e,t,i)},function(i){return fm(e,t,i)}):Yv(e,t,n)}function Yv(e,t,n){t.status="fulfilled",t.value=n,rS(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,aS(e,n)))}function fm(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,rS(t),t=t.next;while(t!==i)}e.action=null}function rS(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function oS(e,t){return t}function Zv(e,t){if(Jt){var n=be.formState;if(n!==null){t:{var i=Vt;if(Jt){if(Ce){e:{for(var s=Ce,a=xi;s.nodeType!==8;){if(!a){s=null;break e}if(s=Si(s.nextSibling),s===null){s=null;break e}}a=s.data,s=a==="F!"||a==="F"?s:null}if(s){Ce=Si(s.nextSibling),i=s.data==="F!";break t}}Ma(i)}i=!1}i&&(t=n[0])}}return n=Bn(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:oS,lastRenderedState:t},n.queue=i,n=bS.bind(null,Vt,i),i.dispatch=n,i=hm(!1),a=wg.bind(null,Vt,!1,i.queue),i=Bn(),s={state:t,dispatch:null,action:e,pending:null},i.queue=s,n=yA.bind(null,Vt,s,a,n),s.dispatch=n,i.memoizedState=e,[t,n,!1]}function Jv(e){var t=ke();return lS(t,xe,e)}function lS(e,t,n){if(t=Mg(e,t,oS)[0],e=Hu(Cs)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=hc(t)}catch(r){throw r===Eo?Ih:r}else i=t;t=ke();var s=t.queue,a=s.dispatch;return n!==t.memoizedState&&(Vt.flags|=2048,fo(9,{destroy:void 0},xA.bind(null,s,n),null)),[i,a,e]}function xA(e,t){e.action=t}function Kv(e){var t=ke(),n=xe;if(n!==null)return lS(t,n,e);ke(),t=t.memoizedState,n=ke();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function fo(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=Vt.updateQueue,t===null&&(t=Ph(),Vt.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function cS(){return ke().memoizedState}function Gu(e,t,n,i){var s=Bn();Vt.flags|=e,s.memoizedState=fo(1|t,{destroy:void 0},n,i===void 0?null:i)}function zh(e,t,n,i){var s=ke();i=i===void 0?null:i;var a=s.memoizedState.inst;xe!==null&&i!==null&&gg(i,xe.memoizedState.deps)?s.memoizedState=fo(t,a,n,i):(Vt.flags|=e,s.memoizedState=fo(1|t,a,n,i))}function Qv(e,t){Gu(8390656,8,e,t)}function bg(e,t){zh(2048,8,e,t)}function SA(e){Vt.flags|=4;var t=Vt.updateQueue;if(t===null)t=Ph(),Vt.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function uS(e){var t=ke().memoizedState;return SA({ref:t,nextImpl:e}),function(){if((ue&2)!==0)throw Error(Q(440));return t.impl.apply(void 0,arguments)}}function hS(e,t){return zh(4,2,e,t)}function fS(e,t){return zh(4,4,e,t)}function dS(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function pS(e,t,n){n=n!=null?n.concat([e]):null,zh(4,4,dS.bind(null,t,e),n)}function Tg(){}function mS(e,t){var n=ke();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&gg(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function gS(e,t){var n=ke();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&gg(t,i[1]))return i[0];if(i=e(),cr){aa(!0);try{e()}finally{aa(!1)}}return n.memoizedState=[i,t],i}function Eg(e,t,n){return n===void 0||(Rs&1073741824)!==0&&(ee&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=lM(),Vt.lanes|=e,Ea|=e,n)}function _S(e,t,n,i){return oi(n,t)?n:ba.current!==null?(e=Eg(e,n,i),oi(e,t)||(Je=!0),e):(Rs&106)===0||(Rs&1073741824)!==0&&(ee&261930)===0?(Je=!0,e.memoizedState=n):(e=lM(),Vt.lanes|=e,Ea|=e,t)}function vS(e,t,n,i,s){var a=he.p;he.p=a!==0&&8>a?a:8;var r=Ut.T,o={};o.types=r!==null?r.types:null,Ut.T=o,wg(e,!1,t,n);try{var l=s(),c=Ut.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var f=gA(l,i);Pl(e,t,f,ri(e))}else Pl(e,t,i,ri(e))}catch(p){Pl(e,t,{then:function(){},status:"rejected",reason:p},ri())}finally{he.p=a,r!==null&&o.types!==null&&(r.types=o.types),Ut.T=r}}function MA(){}function dm(e,t,n,i){if(e.tag!==5)throw Error(Q(476));var s=yS(e).queue;vS(e,s,t,$a,n===null?MA:function(){return xS(e),n(i)})}function yS(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:$a,baseState:$a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Cs,lastRenderedState:$a},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Cs,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function xS(e){var t=yS(e);t.next===null&&(t=e.alternate.memoizedState),Pl(e,t.next.queue,{},ri())}function Ag(){return gn(xo)}function SS(){return ke().memoizedState}function MS(){return ke().memoizedState}function bA(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=ri();e=da(n);var i=pa(t,e,n);i!==null&&(Wn(i,t,n),Ul(i,t,n)),t={cache:ug()},e.payload=t;return}t=t.return}}function TA(e,t,n){var i=ri();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Fh(e)?TS(t,n):(n=og(e,t,n,i),n!==null&&(Wn(n,e,i),ES(n,t,i)))}function bS(e,t,n){var i=ri();Pl(e,t,n,i)}function Pl(e,t,n,i){var s={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Fh(e))TS(t,s);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var r=t.lastRenderedState,o=a(r,n);if(s.hasEagerState=!0,s.eagerState=o,oi(o,r))return Uh(e,t,s,0),be===null&&Lh(),!1}catch{}if(n=og(e,t,s,i),n!==null)return Wn(n,e,i),ES(n,t,i),!0}return!1}function wg(e,t,n,i){if(i={lane:2,revertLane:zg(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Fh(e)){if(t)throw Error(Q(479))}else t=og(e,n,i,2),t!==null&&Wn(t,e,2)}function Fh(e){var t=e.alternate;return e===Vt||t!==null&&t===Vt}function TS(e,t){so=hh=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ES(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,cx(e,n)}}var dh={readContext:gn,use:Bh,useCallback:He,useContext:He,useEffect:He,useImperativeHandle:He,useLayoutEffect:He,useInsertionEffect:He,useMemo:He,useReducer:He,useRef:He,useState:He,useDebugValue:He,useDeferredValue:He,useTransition:He,useSyncExternalStore:He,useId:He,useHostTransitionStatus:He,useFormState:He,useActionState:He,useOptimistic:He,useMemoCache:He,useCacheRefresh:He,useEffectEvent:He},AS={readContext:gn,use:Bh,useCallback:function(e,t){return Bn().memoizedState=[e,t===void 0?null:t],e},useContext:gn,useEffect:Qv,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Gu(4194308,4,dS.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Gu(4194308,4,e,t)},useInsertionEffect:function(e,t){Gu(4,2,e,t)},useMemo:function(e,t){var n=Bn();t=t===void 0?null:t;var i=e();if(cr){aa(!0);try{e()}finally{aa(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=Bn();if(n!==void 0){var s=n(t);if(cr){aa(!0);try{n(t)}finally{aa(!1)}}}else s=t;return i.memoizedState=i.baseState=s,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:s},i.queue=e,e=e.dispatch=TA.bind(null,Vt,e),[i.memoizedState,e]},useRef:function(e){var t=Bn();return e={current:e},t.memoizedState=e},useState:function(e){e=hm(e);var t=e.queue,n=bS.bind(null,Vt,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Tg,useDeferredValue:function(e,t){var n=Bn();return Eg(n,e,t)},useTransition:function(){var e=hm(!1);return e=vS.bind(null,Vt,e.queue,!0,!1),Bn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=Vt,s=Bn();if(Jt){if(n===void 0)throw Error(Q(407));n=n()}else{if(n=t(),be===null)throw Error(Q(349));(ee&127)!==0||$x(i,t,n)}s.memoizedState=n;var a={value:n,getSnapshot:t};return s.queue=a,Qv(eS.bind(null,i,a,e),[e]),i.flags|=2048,fo(9,{destroy:void 0},tS.bind(null,i,a,n,t),null),n},useId:function(){var e=Bn(),t=be.identifierPrefix;if(Jt){var n=$i,i=ji;n=(i&~(1<<32-ai(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=fh++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=_A++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Ag,useFormState:Zv,useActionState:Zv,useOptimistic:function(e){var t=Bn();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=wg.bind(null,Vt,!0,n),n.dispatch=t,[e,t]},useMemoCache:Sg,useCacheRefresh:function(){return Bn().memoizedState=bA.bind(null,Vt)},useEffectEvent:function(e){var t=Bn(),n={impl:e};return t.memoizedState=n,function(){if((ue&2)!==0)throw Error(Q(440));return n.impl.apply(void 0,arguments)}}},wS={readContext:gn,use:Bh,useCallback:mS,useContext:gn,useEffect:bg,useImperativeHandle:pS,useInsertionEffect:hS,useLayoutEffect:fS,useMemo:gS,useReducer:Hu,useRef:cS,useState:function(){return Hu(Cs)},useDebugValue:Tg,useDeferredValue:function(e,t){var n=ke();return _S(n,xe.memoizedState,e,t)},useTransition:function(){var e=Hu(Cs)[0],t=ke().memoizedState;return[typeof e=="boolean"?e:hc(e),t]},useSyncExternalStore:jx,useId:SS,useHostTransitionStatus:Ag,useFormState:Jv,useActionState:Jv,useOptimistic:function(e,t){var n=ke();return sS(n,xe,e,t)},useMemoCache:Sg,useCacheRefresh:MS,useEffectEvent:uS},EA={readContext:gn,use:Bh,useCallback:mS,useContext:gn,useEffect:bg,useImperativeHandle:pS,useInsertionEffect:hS,useLayoutEffect:fS,useMemo:gS,useReducer:bp,useRef:cS,useState:function(){return bp(Cs)},useDebugValue:Tg,useDeferredValue:function(e,t){var n=ke();return xe===null?Eg(n,e,t):_S(n,xe.memoizedState,e,t)},useTransition:function(){var e=bp(Cs)[0],t=ke().memoizedState;return[typeof e=="boolean"?e:hc(e),t]},useSyncExternalStore:jx,useId:SS,useHostTransitionStatus:Ag,useFormState:Kv,useActionState:Kv,useOptimistic:function(e,t){var n=ke();return xe!==null?sS(n,xe,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Sg,useCacheRefresh:MS,useEffectEvent:uS};function Tp(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:Te({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var pm={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=ri(),s=da(i);s.payload=t,n!=null&&(s.callback=n),t=pa(e,s,i),t!==null&&(Wn(t,e,i),Ul(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=ri(),s=da(i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=pa(e,s,i),t!==null&&(Wn(t,e,i),Ul(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ri(),i=da(n);i.tag=2,t!=null&&(i.callback=t),t=pa(e,i,n),t!==null&&(Wn(t,e,n),Ul(t,e,n))}};function jv(e,t,n,i,s,a,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,a,r):t.prototype&&t.prototype.isPureReactComponent?!Wl(n,i)||!Wl(s,a):!0}function $v(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&pm.enqueueReplaceState(t,t.state,null)}function ur(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=Te({},n));for(var s in e)n[s]===void 0&&(n[s]=e[s])}return n}function RS(e){ih(e)}function CS(e){console.error(e)}function NS(e){ih(e)}function ph(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function ty(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function mm(e,t,n){return n=da(n),n.tag=3,n.payload={element:null},n.callback=function(){ph(e,t)},n}function DS(e){return e=da(e),e.tag=3,e}function LS(e,t,n,i){var s=n.type.getDerivedStateFromError;if(typeof s=="function"){var a=i.value;e.payload=function(){return s(a)},e.callback=function(){ty(t,n,i)}}var r=n.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){ty(t,n,i),typeof s!="function"&&(_a===null?_a=new Set([this]):_a.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function AA(e,t,n,i,s){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&ar(t,n,s,!0),n=xn.current,n!==null){switch(n.tag){case 31:case 13:case 19:return En===null?Mh():n.alternate===null&&Ge===0&&(Ge=3),n.flags&=-257,n.flags|=65536,n.lanes=s,i===lh?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),Dp(e,i,s)),!1;case 22:return n.flags|=65536,i===lh?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),Dp(e,i,s)),!1}throw Error(Q(435,n.tag))}return Dp(e,i,s),Mh(),!1}if(Jt)return t=xn.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=s,i!==im&&(e=Error(Q(422),{cause:i}),Yl(yi(e,n)))):(i!==im&&(t=Error(Q(423),{cause:i}),Yl(yi(t,n))),e=e.current.alternate,e.flags|=65536,s&=-s,e.lanes|=s,i=yi(i,n),s=mm(e.stateNode,i,s),Mp(e,s),Ge!==4&&(Ge=2)),!1;var a=Error(Q(520),{cause:i});if(a=yi(a,n),Hl===null?Hl=[a]:Hl.push(a),Ge!==4&&(Ge=2),t===null)return!0;i=yi(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=s&-s,n.lanes|=e,e=mm(n.stateNode,i,e),Mp(n,e),!1;case 1:if(t=n.type,a=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||a!==null&&typeof a.componentDidCatch=="function"&&(_a===null||!_a.has(a))))return n.flags|=65536,s&=-s,n.lanes|=s,s=DS(s),LS(s,e,n,i),Mp(n,s),!1;break;case 22:if(n.memoizedState!==null)return n.flags|=65536,!1}n=n.return}while(n!==null);return!1}var Rg=Error(Q(461)),Je=!1;function Qe(e,t,n,i){t.child=e===null?qx(t,null,n,i):lr(t,e.child,n,i)}function ey(e,t,n,i,s){n=n.render;var a=t.ref;if("ref"in i){var r={};for(var o in i)o!=="ref"&&(r[o]=i[o])}else r=i;return rr(t),i=_g(e,t,n,r,a,s),o=vg(),e!==null&&!Je?(yg(e,t,s),Ns(e,t,s)):(Jt&&o&&Oh(t),t.flags|=1,Qe(e,t,i,s),t.child)}function ny(e,t,n,i,s){if(e===null){var a=n.type;return typeof a=="function"&&!lg(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,US(e,t,a,i,s)):(e=Bu(n.type,null,i,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Ng(e,s)){var r=a.memoizedProps;if(n=n.compare,n=n!==null?n:Wl,n(r,i)&&e.ref===t.ref)return Ns(e,t,s)}return t.flags|=1,e=Ts(a,i),e.ref=t.ref,e.return=t,t.child=e}function US(e,t,n,i,s){if(e!==null){var a=e.memoizedProps;if(Wl(a,i)&&e.ref===t.ref)if(Je=!1,t.pendingProps=i=a,Ng(e,s))(e.flags&131072)!==0&&(Je=!0);else return t.lanes=e.lanes,Ns(e,t,s)}return gm(e,t,n,i,s)}function OS(e,t,n,i){var s=i.children,a=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(a=a!==null?a.baseLanes|n:n,e!==null){for(i=t.child=e.child,s=0;i!==null;)s=s|i.lanes|i.childLanes,i=i.sibling;i=s&~a}else i=0,t.child=null;return iy(e,t,a,n,i)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Fu(t,a!==null?a.cachePool:null),a!==null?Wv(t,a):cm(),Jx(t);else return i=t.lanes=536870912,iy(e,t,a!==null?a.baseLanes|n:n,n,i)}else a!==null?(Fu(t,a.cachePool),Wv(t,a),ga(),t.memoizedState=null):(e!==null&&Fu(t,null),cm(),ga());return Qe(e,t,s,n),t.child}function Bl(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function iy(e,t,n,i,s){var a=hg();return a=a===null?null:{parent:Ze._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Fu(t,null),cm(),Jx(t),e!==null&&ar(e,t,i,!0),t.childLanes=s,null}function Vu(e,t){return t=Hh({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function sy(e,t,n){return lr(t,e.child,null,n),e=Vu(t,t.pendingProps),e.flags|=2,ti(t),t.memoizedState=null,e}function wA(e,t,n){var i=t.pendingProps,s=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Jt){if(i.mode==="hidden")return e=Vu(t,i),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},Bl(null,e);if(um(t),(e=Ce)?(e=OM(e,xi),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Sa!==null?{id:ji,overflow:$i}:null,retryLane:536870912,hydrationErrors:null},n=Fx(e),n.return=t,t.child=n,ln=t,Ce=null)):e=null,e===null)throw Ma(t);return t.lanes=536870912,null}return Vu(t,i)}var a=e.memoizedState;if(a!==null){var r=a.dehydrated;if(um(t),s)if(t.flags&256)t.flags&=-257,t=sy(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(Q(558));else if(Je||ar(e,t,n,!1),s=(n&e.childLanes)!==0,Je||s){if(ba.current===null){if(i=be,i!==null&&(r=ux(i,n),r!==0&&r!==a.retryLane))throw a.retryLane=r,mr(e,r),Wn(i,e,r),Rg;Mh()}t=sy(e,t,n)}else e=a.treeContext,Ce=Si(r.nextSibling),ln=t,Jt=!0,fa=null,xi=!1,e!==null&&Gx(t,e),t=Vu(t,i),t.flags|=134221824;return t}return e=Ts(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function zr(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(Q(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function gm(e,t,n,i,s){return rr(t),n=_g(e,t,n,i,void 0,s),i=vg(),e!==null&&!Je?(yg(e,t,s),Ns(e,t,s)):(Jt&&i&&Oh(t),t.flags|=1,Qe(e,t,n,s),t.child)}function ay(e,t,n,i,s,a){return rr(t),t.updateQueue=null,n=Qx(t,i,n,s),Kx(e),i=vg(),e!==null&&!Je?(yg(e,t,a),Ns(e,t,a)):(Jt&&i&&Oh(t),t.flags|=1,Qe(e,t,n,a),t.child)}function ry(e,t,n,i,s){if(rr(t),t.stateNode===null){var a=Jr,r=n.contextType;typeof r=="object"&&r!==null&&(a=gn(r)),a=new n(i,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=pm,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=i,a.state=t.memoizedState,a.refs={},dg(t),r=n.contextType,a.context=typeof r=="object"&&r!==null?gn(r):Jr,a.state=t.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(Tp(t,n,r,i),a.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(r=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),r!==a.state&&pm.enqueueReplaceState(a,a.state,null),Il(t,i,a,s),Ol(),a.state=t.memoizedState),typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){a=t.stateNode;var o=t.memoizedProps,l=ur(n,o);a.props=l;var c=a.context,f=n.contextType;r=Jr,typeof f=="object"&&f!==null&&(r=gn(f));var p=n.getDerivedStateFromProps;f=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o||c!==r)&&$v(t,a,i,r),ia=!1;var u=t.memoizedState;a.state=u,Il(t,i,a,s),Ol(),c=t.memoizedState,o||u!==c||ia?(typeof p=="function"&&(Tp(t,n,p,i),c=t.memoizedState),(l=ia||jv(t,n,l,i,u,c,r))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=c),a.props=i,a.state=c,a.context=r,i=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{a=t.stateNode,om(e,t),r=t.memoizedProps,f=ur(n,r),a.props=f,p=t.pendingProps,u=a.context,c=n.contextType,l=Jr,typeof c=="object"&&c!==null&&(l=gn(c)),o=n.getDerivedStateFromProps,(c=typeof o=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(r!==p||u!==l)&&$v(t,a,i,l),ia=!1,u=t.memoizedState,a.state=u,Il(t,i,a,s),Ol();var d=t.memoizedState;r!==p||u!==d||ia||e!==null&&e.dependencies!==null&&oh(e.dependencies)?(typeof o=="function"&&(Tp(t,n,o,i),d=t.memoizedState),(f=ia||jv(t,n,f,i,u,d,l)||e!==null&&e.dependencies!==null&&oh(e.dependencies))?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,d,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,d,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=d),a.props=i,a.state=d,a.context=l,i=f):(typeof a.componentDidUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=1024),i=!1)}return a=i,zr(e,t),i=(t.flags&128)!==0,a||i?(a=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:a.render(),t.flags|=1,e!==null&&i?(t.child=lr(t,e.child,null,s),t.child=lr(t,null,n,s)):Qe(e,t,n,s),t.memoizedState=a.state,e=t.child):e=Ns(e,t,s),e}function oy(e,t,n,i){return sr(),t.flags|=256,Qe(e,t,n,i),t.child}var _m={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function vm(e){return{baseLanes:e,cachePool:kx()}}function ym(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=ni),e}function IS(e,t,n){var i=t.pendingProps,s=!1,a=(t.flags&128)!==0,r;if((r=a)||(r=e!==null&&e.memoizedState===null?!1:(vn.current&2)!==0),r&&(s=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if(Jt){if(s?ma(t):ga(),(e=Ce)?(e=OM(e,xi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Sa!==null?{id:ji,overflow:$i}:null,retryLane:536870912,hydrationErrors:null},n=Fx(e),n.return=t,t.child=n,ln=t,Ce=null)):e=null,e===null)throw Ma(t);return Vg(e)?t.lanes=32:t.lanes=536870912,null}return a=i.children,i=i.fallback,s?(ga(),s=t.mode,a=Hh({mode:"hidden",children:a},s),i=tr(i,s,n,null),a.return=t,i.return=t,a.sibling=i,t.child=a,i=t.child,i.memoizedState=vm(n),i.childLanes=ym(e,r,n),t.memoizedState=_m,Bl(null,i)):(ma(t),Cg(t,a))}var o=e.memoizedState;if(o!==null){var l=o.dehydrated;if(l!==null)return RA(e,t,a,r,i,l,o,n)}return s?(ga(),s=i.fallback,a=t.mode,o=e.child,l=o.sibling,i=Ts(o,{mode:"hidden",children:i.children}),i.subtreeFlags=o.subtreeFlags&1206910976,l!==null?s=Ts(l,s):(s=tr(s,a,n,null),s.flags|=2),s.return=t,i.return=t,i.sibling=s,t.child=i,Bl(null,i),i=t.child,s=e.child.memoizedState,s===null?s=vm(n):(a=s.cachePool,a!==null?(o=Ze._currentValue,a=a.parent!==o?{parent:o,pool:o}:a):a=kx(),s={baseLanes:s.baseLanes|n,cachePool:a}),i.memoizedState=s,i.childLanes=ym(e,r,n),t.memoizedState=_m,Bl(e.child,i)):(ma(t),n=e.child,e=n.sibling,n=Ts(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function Cg(e,t){return t=Hh({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Hh(e,t){return e=Xn(22,e,null,t),e.lanes=0,e}function bu(e,t,n){return lr(t,e.child,null,n),e=Cg(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function RA(e,t,n,i,s,a,r,o){if(n)return t.flags&256?(ma(t),t.flags&=-257,bu(e,t,o)):t.memoizedState!==null?(ga(),t.child=e.child,t.flags|=128,null):(ga(),a=s.fallback,r=t.mode,s=Hh({mode:"visible",children:s.children},r),a=tr(a,r,o,null),a.flags|=2,s.return=t,a.return=t,s.sibling=a,t.child=s,lr(t,e.child,null,o),s=t.child,s.memoizedState=vm(o),s.childLanes=ym(e,i,o),t.memoizedState=_m,Bl(null,s));if(ma(t),Vg(a)){if(i=a.nextSibling&&a.nextSibling.dataset,i)var l=i.dgst;return i=l,i!==""&&(s=Error(Q(419)),s.stack="",s.digest=i,Yl({value:s,source:null,stack:null})),bu(e,t,o)}if(Je||ar(e,t,o,!1),i=(o&e.childLanes)!==0,Je||i){if(ba.current!==null)return bu(e,t,o);if(i=be,i!==null&&(s=ux(i,o),s!==0&&s!==r.retryLane))throw r.retryLane=s,mr(e,s),Wn(i,e,s),Rg;return Xm(a)||Mh(),bu(e,t,o)}return Xm(a)?(t.flags|=192,t.child=e.child,null):(e=r.treeContext,Ce=Si(a.nextSibling),ln=t,Jt=!0,fa=null,xi=!1,e!==null&&Gx(t,e),t=Cg(t,s.children),t.flags|=134221824,t)}function ly(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),zu(e.return,t,n)}function cy(e){for(var t=null;e!==null;){var n=e.alternate;n!==null&&uh(n)===null&&(t=e),e=e.sibling}return t}function Tu(e,t,n,i,s,a){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:s,treeForkCount:a}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=n,r.tailMode=s,r.treeForkCount=a)}function Ep(e){var t=e.child;for(e.child=null;t!==null;){var n=t.sibling;t.sibling=e.child,e.child=t,t=n}}function xm(e,t,n){var i=t.pendingProps,s=i.revealOrder,a=i.tail;i=i.children;var r=vn.current;if(t.flags&128)return Jl(t,r),null;var o=(r&2)!==0;if(o?(r=r&1|2,t.flags|=128):r&=1,Jl(t,r),s==="backwards"&&e!==null?(Ep(e),Qe(e,t,i,n),Ep(e)):Qe(e,t,i,n),i=Jt?ql:0,!o&&e!==null&&(e.flags&128)!==0)t:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ly(e,n,t);else if(e.tag===19)ly(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(s){case"backwards":n=cy(t.child),n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null,Ep(t)),Tu(t,!0,s,null,a,i);break;case"unstable_legacy-backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&uh(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}Tu(t,!0,n,null,a,i);break;case"together":Tu(t,!1,null,null,void 0,i);break;case"independent":t.memoizedState=null;break;default:n=cy(t.child),n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),Tu(t,!1,s,n,a,i)}return t.child}function uy(e,t,n){var i=t.pendingProps;return oa(t,t.type,i.value),Qe(e,t,i.children,n),t.child}function Ns(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ea|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(ar(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(Q(153));if(t.child!==null){for(e=t.child,n=Ts(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ts(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ng(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&oh(e)))}function CA(e,t,n){switch(t.tag){case 3:$u(t,t.stateNode.containerInfo),oa(t,Ze,e.memoizedState.cache),sr();break;case 27:case 5:Yp(t);break;case 4:$u(t,t.stateNode.containerInfo);break;case 10:oa(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,um(t),null;break;case 13:var i=t.memoizedState;if(i!==null){if(i.dehydrated!==null)return ma(t),t.flags|=128,null;i=ar(e,t,n,!1);var s=t.child.childLanes;return i||(n&s)!==0?IS(e,t,n):(ma(t),e=Ns(e,t,n),e!==null?e.sibling:null)}ma(t);break;case 19:if(t.flags&128)return xm(e,t,n);if(s=(e.flags&128)!==0,i=(n&t.childLanes)!==0,i||(ar(e,t,n,!1),i=(n&t.childLanes)!==0),s){if(i)return xm(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Jl(t,vn.current),i)break;return null;case 22:return t.lanes=0,OS(e,t,n,t.pendingProps);case 24:oa(t,Ze,e.memoizedState.cache)}return Ns(e,t,n)}function PS(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Je=!0;else{if(!Ng(e,n)&&(t.flags&128)===0)return Je=!1,CA(e,t,n);Je=(e.flags&131072)!==0}else Je=!1,Jt&&(t.flags&1048576)!==0&&Hx(t,ql,t.index);switch(t.lanes=0,t.tag){case 16:t:{var i=t.pendingProps;if(e=Ja(t.elementType),t.type=e,typeof e=="function")lg(e)?(i=ur(e,i),t.tag=1,t=ry(null,t,e,i,n)):(t.tag=0,t=gm(null,t,e,i,n));else{if(e!=null){var s=e.$$typeof;if(s===Jm){t.tag=11,t=ey(null,t,e,i,n);break t}else if(s===Km){t.tag=14,t=ny(null,t,e,i,n);break t}else if(s===Ki){t.tag=10,t.type=e,t=uy(null,t,n);break t}}throw t=Wp(e)||e,Error(Q(306,t,""))}}return t;case 0:return gm(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,s=ur(i,t.pendingProps),ry(e,t,i,s,n);case 3:t:{if($u(t,t.stateNode.containerInfo),e===null)throw Error(Q(387));i=t.pendingProps;var a=t.memoizedState;s=a.element,om(e,t),Il(t,i,null,n);var r=t.memoizedState;if(i=r.cache,oa(t,Ze,i),i!==a.cache&&am(t,[Ze],n,!0),Ol(),i=r.element,a.isDehydrated)if(a={element:i,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){t=oy(e,t,i,n);break t}else if(i!==s){s=yi(Error(Q(424)),t),Yl(s),t=oy(e,t,i,n);break t}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Ce=Si(e.firstChild),ln=t,Jt=!0,fa=null,xi=!0,n=qx(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|134221824,n=n.sibling;else{if(sr(),i===s){t=Ns(e,t,n);break t}Qe(e,t,i,n)}t=t.child}return t;case 26:return zr(e,t),e===null?(n=By(t.type,null,t.pendingProps,null))?t.memoizedState=n:Jt||(t.stateNode=EM(t.type,t.pendingProps,ha.current,t)):t.memoizedState=By(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Yp(t),e===null&&Jt&&(i=t.stateNode=IM(t.type,t.pendingProps,ha.current),ln=t,xi=!0,s=Ce,wa(t.type)?(Wm=s,Ce=Si(i.firstChild)):Ce=s),Qe(e,t,t.pendingProps.children,n),zr(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Jt&&((s=i=Ce)&&(i=Sw(i,t.type,t.pendingProps,xi),i!==null?(t.stateNode=i,ln=t,Ce=Si(i.firstChild),xi=!1,s=!0):s=!1),s||Ma(t)),Yp(t),s=t.type,a=t.pendingProps,r=e!==null?e.memoizedProps:null,i=a.children,Gm(s,a)?i=null:r!==null&&Gm(s,r)&&(t.flags|=32),t.memoizedState!==null&&(s=_g(e,t,vA,null,null,n),xo._currentValue=s),zr(e,t),Qe(e,t,i,n),t.child;case 6:return e===null&&Jt&&((e=n=Ce)&&(n=Mw(n,t.pendingProps,xi),n!==null?(t.stateNode=n,ln=t,Ce=null,e=!0):e=!1),e||Ma(t)),null;case 13:return IS(e,t,n);case 4:return $u(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=lr(t,null,i,n):Qe(e,t,i,n),t.child;case 11:return ey(e,t,t.type,t.pendingProps,n);case 7:return i=t.pendingProps,zr(e,t),Qe(e,t,i,n),t.child;case 8:return Qe(e,t,t.pendingProps.children,n),t.child;case 12:return Qe(e,t,t.pendingProps.children,n),t.child;case 10:return uy(e,t,n);case 9:return s=t.type._context,i=t.pendingProps.children,rr(t),s=gn(s),i=i(s),t.flags|=1,Qe(e,t,i,n),t.child;case 14:return ny(e,t,t.type,t.pendingProps,n);case 15:return US(e,t,t.type,t.pendingProps,n);case 19:return xm(e,t,n);case 31:return wA(e,t,n);case 22:return OS(e,t,n,t.pendingProps);case 24:return rr(t),i=gn(Ze),e===null?(s=hg(),s===null&&(s=be,a=ug(),s.pooledCache=a,a.refCount++,a!==null&&(s.pooledCacheLanes|=n),s=a),t.memoizedState={parent:i,cache:s},dg(t),oa(t,Ze,s)):((e.lanes&n)!==0&&(om(e,t),Il(t,null,null,n),Ol()),s=e.memoizedState,a=t.memoizedState,s.parent!==i?(s={parent:i,cache:i},t.memoizedState=s,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=s),oa(t,Ze,i)):(i=a.cache,oa(t,Ze,i),i!==s.cache&&am(t,[Ze],n,!0))),Qe(e,t,t.pendingProps.children,n),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),i=t.pendingProps,i.name!=null&&i.name!=="auto"?t.flags|=e===null?18882560:18874368:Jt&&Oh(t),e!==null&&e.memoizedProps.name!==i.name?t.flags|=4194816:zr(e,t),Qe(e,t,i.children,n),t.child;case 29:throw t.pendingProps}throw Error(Q(156,t.tag))}function Ss(e){e.flags|=4}function Ap(e,t,n,i,s){var a;if((a=(e.mode&32)!==0)&&(a=n===null?Hy(t,i):Hy(t,i)&&(i.src!==n.src||i.srcSet!==n.srcSet)),a){if(e.flags|=16777216,(s&335544128)===s)if(e.stateNode.complete)e.flags|=8192;else if(hM())e.flags|=8192;else throw nr=lh,fg}else e.flags&=-16777217}function hy(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!FM(t))if(hM())e.flags|=8192;else throw nr=lh,fg}function Eu(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?ox():536870912,e.lanes|=t,po|=t)}function xl(e,t){if(!Jt)switch(e.tailMode){case"visible":break;case"collapsed":for(var n=e.tail,i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null;break;default:for(t=e.tail,n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null}}function Re(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags&1206910976,i|=s.flags&1206910976,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags,i|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function NA(e,t,n){var i=t.pendingProps;switch(cg(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Re(t),null;case 1:return Re(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),Es(Ze),co(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Pr(t)?Ss(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Sp())),Re(t),null;case 26:var s=t.type,a=t.memoizedState;return e===null?(Ss(t),a!==null?(Re(t),hy(t,a)):(Re(t),Ap(t,s,null,i,n))):a?a!==e.memoizedState?(Ss(t),Re(t),hy(t,a)):(Re(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&Ss(t),Re(t),Ap(t,s,e,i,n)),null;case 27:if(th(t),n=ha.current,s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Ss(t);else{if(!i){if(t.stateNode===null)throw Error(Q(166));return Re(t),t.subtreeFlags&=-33554433,null}e=ts.current,Pr(t)?zv(t,e):(e=IM(s,i,n),t.stateNode=e,Ss(t))}return Re(t),t.subtreeFlags&=-33554433,null;case 5:if(th(t),s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Ss(t);else{if(!i){if(t.stateNode===null)throw Error(Q(166));return Re(t),t.subtreeFlags&=-33554433,null}if(a=ts.current,Pr(t))zv(t,a);else{var r=$l(ha.current);switch(a){case 1:a=r.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:a=r.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":a=r.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":a=r.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":a=r.createElement("div"),a.innerHTML="<script><\/script>",a=a.removeChild(a.firstChild);break;case"select":a=typeof i.is=="string"?r.createElement("select",{is:i.is}):r.createElement("select"),i.multiple?a.multiple=!0:i.size&&(a.size=i.size);break;default:a=typeof i.is=="string"?r.createElement(s,{is:i.is}):r.createElement(s)}}a[mn]=t,a[Yn]=i;t:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)a.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break t;for(;r.sibling===null;){if(r.return===null||r.return===t)break t;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=a;t:switch(yn(a,s,i),s){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break t;case"img":i=!0;break t;default:i=!1}i&&Ss(t)}}return Re(t),t.subtreeFlags&=-33554433,Ap(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&Ss(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(Q(166));if(e=ha.current,Pr(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,s=ln,s!==null)switch(s.tag){case 27:case 5:i=s.memoizedProps}e[mn]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||bM(e.nodeValue,n)),e||Ma(t,!0)}else e=$l(e).createTextNode(i),e[mn]=t,t.stateNode=e}return Re(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=Pr(t),n!==null){if(e===null){if(!i)throw Error(Q(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(Q(557));e[mn]=t}else sr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Re(t),e=!1}else n=Sp(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(ti(t),t):(ti(t),null);if((t.flags&128)!==0)throw Error(Q(558))}return Re(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(s=Pr(t),i!==null&&i.dehydrated!==null){if(e===null){if(!s)throw Error(Q(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(Q(317));s[mn]=t}else sr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Re(t),s=!1}else s=Sp(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),s=!0;if(!s)return t.flags&256?(ti(t),t):(ti(t),null)}return ti(t),(t.flags&128)!==0?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,s=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(s=i.alternate.memoizedState.cachePool.pool),a=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(a=i.memoizedState.cachePool.pool),a!==s&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Eu(t,t.updateQueue),Re(t),null);case 4:return co(),e===null&&Fg(t.stateNode.containerInfo),t.flags|=67108864,Re(t),null;case 10:return Es(t.type),Re(t),null;case 19:if(mg(t),i=t.memoizedState,i===null)return Re(t),null;if(s=(t.flags&128)!==0,a=i.rendering,a===null)if(s)xl(i,!1);else{if(Ge!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(a=uh(e),a!==null){for(t.flags|=128,xl(i,!1),e=a.updateQueue,t.updateQueue=e,Eu(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)zx(n,e),n=n.sibling;return Jl(t,vn.current&1|2),Jt&&Ms(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&ii()>xh&&(t.flags|=128,s=!0,xl(i,!1),t.lanes=4194304)}else{if(!s)if(e=uh(a),e!==null){if(t.flags|=128,s=!0,e=e.updateQueue,t.updateQueue=e,Eu(t,e),xl(i,!0),i.tail===null&&i.tailMode!=="collapsed"&&i.tailMode!=="visible"&&!a.alternate&&!Jt)return Re(t),null}else 2*ii()-i.renderingStartTime>xh&&n!==536870912&&(t.flags|=128,s=!0,xl(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(e=i.last,e!==null?e.sibling=a:t.child=a,i.last=a)}if(i.tail!==null){e=i.tail;t:{for(n=e;n!==null;){if(n.alternate!==null){n=!1;break t}n=n.sibling}n=!0}return i.rendering=e,i.tail=e.sibling,i.renderingStartTime=ii(),e.sibling=null,a=vn.current,a=s?a&1|2:a&1,i.tailMode==="visible"||i.tailMode==="collapsed"||!n||Jt?Jl(t,a):(n=a,Ne(xn,t),Ne(vn,n),En===null&&(En=t)),Jt&&Ms(t,i.treeForkCount),e}return Re(t),null;case 22:case 23:return ti(t),pg(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(Re(t),t.subtreeFlags&6&&(t.flags|=8192)):Re(t),n=t.updateQueue,n!==null&&Eu(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&_n(er),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Es(Ze),Re(t),null;case 25:return null;case 30:return t.flags|=33554432,Re(t),null}throw Error(Q(156,t.tag))}function DA(e,t){switch(cg(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Es(Ze),co(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return th(t),null;case 31:if(t.memoizedState!==null){if(ti(t),t.alternate===null)throw Error(Q(340));sr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(ti(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(Q(340));sr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return mg(t),e=t.flags,e&65536?(t.flags=e&-65537|128,e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return co(),null;case 10:return Es(t.type),null;case 22:case 23:return ti(t),pg(),e!==null&&_n(er),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Es(Ze),null;case 25:return null;default:return null}}function BS(e,t){switch(cg(t),t.tag){case 3:Es(Ze),co();break;case 26:case 27:case 5:th(t);break;case 4:co();break;case 31:t.memoizedState!==null&&ti(t);break;case 13:ti(t);break;case 19:mg(t);break;case 10:Es(t.type);break;case 22:case 23:ti(t),pg(),e!==null&&_n(er);break;case 24:Es(Ze)}}function fc(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var s=i.next;n=s;do{if((n.tag&e)===e){i=void 0;var a=n.create,r=n.inst;i=a(),r.destroy=i}n=n.next}while(n!==s)}}catch(o){ve(t,t.return,o)}}function Ta(e,t,n){try{var i=t.updateQueue,s=i!==null?i.lastEffect:null;if(s!==null){var a=s.next;i=a;do{if((i.tag&e)===e){var r=i.inst,o=r.destroy;if(o!==void 0){r.destroy=void 0,s=t;var l=n,c=o;try{c()}catch(f){ve(s,l,f)}}}i=i.next}while(i!==a)}}catch(f){ve(t,t.return,f)}}function zS(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Zx(t,n)}catch(i){ve(e,e.return,i)}}}function FS(e,t,n){n.props=ur(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){ve(e,t,i)}}function Zi(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:var s=e.stateNode,a=ws(e.memoizedProps,s);(s.ref===null||s.ref.name!==a)&&(s.ref=CM(a)),i=s.ref;break;case 7:if(e.stateNode===null){var r=new li(e);qn(e.child,!1,yw,r,void 0,void 0),e.stateNode=r}i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(o){ve(e,t,o)}}function pn(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(s){ve(e,t,s)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(s){ve(e,t,s)}else n.current=null}function mh(e,t){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&t!==null)for(var n=0;n<t.length;n++)UM(e.stateNode,t[n])}function fy(e){for(var t=e.return;t!==null&&(Lg(t)&&UM(e.stateNode,t.stateNode),!Dg(t));)t=t.return}function zl(e){for(var t=e.return;t!==null&&(Lg(t)&&xw(e.stateNode,t.stateNode),!Dg(t));)t=t.return}function Dg(e){return e.tag===5||e.tag===3||e.tag===27}function Lg(e){return e&&e.tag===7&&e.stateNode!==null}function Sm(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{t:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break t;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(s){ve(e,e.return,s)}}function wp(e,t,n){try{var i=e.stateNode;ew(i,e.type,n,t),i[Yn]=t}catch(s){ve(e,e.return,s)}}function HS(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&wa(e.type)||e.tag===4}function Rp(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||HS(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&wa(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Mm(e,t,n,i){var s=e.tag;if(s===5||s===6)s=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(s,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(s),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Qi)),mh(e,i),oe=!0;else if(s!==4&&(s===27&&(mh(e,i),i=null,wa(e.type)&&(n=e.stateNode,t=null)),e=e.child,e!==null))for(Mm(e,t,n,i),e=e.sibling;e!==null;)Mm(e,t,n,i),e=e.sibling}function gh(e,t,n,i){var s=e.tag;if(s===5||s===6)s=e.stateNode,t?n.insertBefore(s,t):n.appendChild(s),mh(e,i),oe=!0;else if(s!==4&&(s===27&&(mh(e,i),i=null,wa(e.type)&&(n=e.stateNode)),e=e.child,e!==null))for(gh(e,t,n,i),e=e.sibling;e!==null;)gh(e,t,n,i),e=e.sibling}function GS(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,s=t.attributes;s.length;)t.removeAttributeNode(s[0]);yn(t,i,n),t[mn]=e,t[Yn]=n}catch(a){ve(e,e.return,a)}}var _h=!1,ei=null;function dy(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(_h=!0)}var Ji=null;function py(){var e=Ji;return Ji=null,e}var kn=0;function Ao(e,t,n,i,s){return kn=0,VS(e.child,t,n,i,s)}function VS(e,t,n,i,s){for(var a=!1;e!==null;){if(e.tag===5){var r=e.stateNode;if(i!==null){var o=Vm(r);i.push(o),o.view&&(a=!0)}else a||Vm(r).view&&(a=!0);_h=!0,AM(r,kn===0?t:t+"_"+kn,n),kn++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&s||VS(e.child,t,n,i,s)&&(a=!0));e=e.sibling}return a}function ns(e,t){for(;e!==null;)e.tag===5?wM(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&t||ns(e.child,t)),e=e.sibling}function ku(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(ku(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var t=e.memoizedProps;if(t.name==null||t.name==="auto")throw Error(Q(544));var n=t.name;t=Us(t.default,t.share),t!=="none"&&(Ao(e,n,t,null,!1)||ns(e.child,!1))}e=e.sibling}}function bm(e,t){if(e.tag===30){var n=e.stateNode,i=e.memoizedProps,s=ws(i,n),a=Us(i.default,n.paired?i.share:i.enter);a!=="none"?Ao(e,s,a,null,!1)?(ku(e),n.paired||t||mo(e,i.onEnter)):ns(e.child,!1):ku(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)bm(e,t),e=e.sibling;else ku(e)}function Tm(e){if(ei!==null&&ei.size!==0){var t=ei;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var n=e.memoizedProps,i=n.name;if(i!=null&&i!=="auto"){var s=t.get(i);if(s!==void 0){var a=Us(n.default,n.share);if(a!=="none"&&(Ao(e,i,a,null,!1)?(a=e.stateNode,s.paired=a,a.paired=s,mo(e,n.onShare)):ns(e.child,!1)),t.delete(i),t.size===0)break}}}Tm(e)}e=e.sibling}}}function Em(e){if(e.tag===30){var t=e.memoizedProps,n=ws(t,e.stateNode),i=ei!==null?ei.get(n):void 0,s=Us(t.default,i!==void 0?t.share:t.exit);s!=="none"&&(Ao(e,n,s,null,!1)?i!==void 0?(s=e.stateNode,i.paired=s,s.paired=i,ei.delete(n),mo(e,t.onShare)):mo(e,t.onExit):ns(e.child,!1)),ei!==null&&Tm(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Em(e),e=e.sibling;else ei!==null&&Tm(e)}function kS(e){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,n=ws(t,e.stateNode);t=Us(t.default,t.update),e.flags&=-5,t!=="none"&&Ao(e,n,t,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&kS(e);e=e.sibling}}function Am(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var t=e.stateNode;t.paired!==null&&(t.paired=null,ns(e.child,!1))}Am(e)}e=e.sibling}}function Xu(e){if(e.tag===30)e.stateNode.paired=null,ns(e.child,!1),Am(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Xu(e),e=e.sibling;else Am(e)}function XS(e){for(e=e.child;e!==null;)e.tag===30?ns(e.child,!1):(e.subtreeFlags&33554432)!==0&&XS(e),e=e.sibling}function Ug(e,t,n,i,s,a,r){for(var o=!1;t!==null;){if(t.tag===5){var l=t.stateNode;if(a!==null&&kn<a.length){var c=a[kn],f=Vm(l);(c.view||f.view)&&(o=!0);var p;if(p=(e.flags&4)===0)if(f.clip)p=!0;else{p=c.rect;var u=f.rect;p=p.y!==u.y||p.x!==u.x||p.height!==u.height||p.width!==u.width}p&&(e.flags|=4),f.abs?f=!c.abs:(c=c.rect,f=f.rect,f=c.height!==f.height||c.width!==f.width),f&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&AM(l,kn===0?n:n+"_"+kn,s),o&&(e.flags&4)!==0||(Ji===null&&(Ji=[]),Ji.push(l,kn===0?i:i+"_"+kn,t.memoizedProps)),kn++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&r?e.flags|=t.flags&32:Ug(e,t.child,n,i,s,a,r)&&(o=!0));t=t.sibling}return o}function WS(e,t){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,i=e.stateNode,s=ws(n,i),a=Us(n.default,n.update);if(t){i=i.clones;var r=i===null?null:i.map(ow)}else r=e.memoizedState,e.memoizedState=null;i=e;var o=e.child;kn=0,s=Ug(i,o,s,s,a,r,!1),(e.flags&4)!==0&&s&&(t||mo(e,n.onUpdate))}else(e.subtreeFlags&33554432)!==0&&WS(e,t);e=e.sibling}}var an=!1,de=!1,Wi=!1,Cp=!1,my=typeof WeakSet=="function"?WeakSet:Set,rn=null,qi=!1,Rl=!1,vh=!1,wm=!1;function LA(e,t,n){if(e=e.containerInfo,Fm=So,e=Nx(e),ag(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else t:{i=(i=e.ownerDocument)&&i.defaultView||window;var s=i.getSelection&&i.getSelection();if(s&&s.rangeCount!==0){i=s.anchorNode;var a=s.anchorOffset,r=s.focusNode;s=s.focusOffset;try{i.nodeType,r.nodeType}catch{i=null;break t}var o=0,l=-1,c=-1,f=0,p=0,u=e,d=null;e:for(;;){for(var v;u!==i||a!==0&&u.nodeType!==3||(l=o+a),u!==r||s!==0&&u.nodeType!==3||(c=o+s),u.nodeType===3&&(o+=u.nodeValue.length),(v=u.firstChild)!==null;)d=u,u=v;for(;;){if(u===e)break e;if(d===i&&++f===a&&(l=o),d===r&&++p===s&&(c=o),(v=u.nextSibling)!==null)break;u=d,d=u.parentNode}u=v}i=l===-1||c===-1?null:{start:l,end:c}}else i=null}i=i||{start:0,end:0}}else i=null;for(Hm={focusedElem:e,selectionRange:i},So=!1,n=(n&335544064)===n,rn=t,t=n?9270:1024;rn!==null;){if(e=rn,n&&(i=e.deletions,i!==null))for(a=0;a<i.length;a++)n&&Em(i[a]);if(e.alternate===null&&(e.flags&2)!==0)n&&dy(e),Au(n);else{if(e.tag===22){if(i=e.alternate,e.memoizedState!==null){i!==null&&i.memoizedState===null&&n&&Em(i),Au(n);continue}else if(i!==null&&i.memoizedState!==null){n&&dy(e),Au(n);continue}}i=e.child,(e.subtreeFlags&t)!==0&&i!==null?(i.return=e,rn=i):(n&&kS(e),Au(n))}}ei=null}function Au(e){for(;rn!==null;){var t=rn,n=e,i=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 15:break;case 1:if((s&1024)!==0&&i!==null){n=void 0,s=i.memoizedProps,i=i.memoizedState;var a=t.stateNode;try{var r=ur(t.type,s);n=a.getSnapshotBeforeUpdate(r,i),a.__reactInternalSnapshotBeforeUpdate=n}catch(o){ve(t,t.return,o)}}break;case 3:if((s&1024)!==0){if(i=t.stateNode.containerInfo,n=i.nodeType,n===9)km(i);else if(n===1)switch(i.nodeName){case"HEAD":case"HTML":case"BODY":km(i);break;default:i.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:n&&i!==null&&(n=ws(i.memoizedProps,i.stateNode),s=t.memoizedProps,s=Us(s.default,s.update),s!=="none"&&Ao(i,n,s,i.memoizedState=[],!0));break;default:if((s&1024)!==0)throw Error(Q(163))}if(i=t.sibling,i!==null){i.return=t.return,rn=i;break}rn=t.return}}function qS(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:Yi(e,n),i&4&&fc(5,n);break;case 1:if(Yi(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(r){ve(n,n.return,r)}else{var s=ur(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(s,t,e.__reactInternalSnapshotBeforeUpdate)}catch(r){ve(n,n.return,r)}}i&64&&zS(n),i&512&&Zi(n,n.return);break;case 3:if(Yi(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Zx(e,t)}catch(r){ve(n,n.return,r)}}break;case 27:t===null&&i&4&&GS(n);case 26:case 5:Yi(e,n),t===null&&i&4&&Sm(n),i&512&&Zi(n,n.return);break;case 12:Yi(e,n);break;case 31:Yi(e,n),i&4&&KS(e,n);break;case 13:Yi(e,n),i&4&&QS(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=XA.bind(null,n),bw(e,n))));break;case 22:if(i=n.memoizedState!==null||an,!i){var a=t!==null&&t.memoizedState!==null||de;t=an,s=de,an=i,(de=a)&&!s?(i=2,(n.subtreeFlags&8772)!==0&&(i|=1),Ci(e,n,i)):Yi(e,n),an=t,de=s}break;case 30:Yi(e,n),i&512&&Zi(n,n.return);break;case 7:i&512&&Zi(n,n.return);default:Yi(e,n)}}function Rm(e,t){for(e=e.child;e!==null;)YS(e,t),e=e.sibling}function YS(e,t){switch(e.tag){case 5:case 26:try{var n=e.stateNode;if(t){var i=n.style;typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"}else{var s=e.stateNode,a=e.memoizedProps.style,r=a!=null&&a.hasOwnProperty("display")?a.display:null;s.style.display=r==null||typeof r=="boolean"?"":(""+r).trim()}}catch(l){ve(e,e.return,l)}Cm(e,t);break;case 6:try{e.stateNode.nodeValue=t?"":e.memoizedProps,oe=!0}catch(l){ve(e,e.return,l)}break;case 18:try{var o=e.stateNode;t?Dy(o,!0):Dy(e.stateNode,!1)}catch(l){ve(e,e.return,l)}break;case 22:case 23:e.memoizedState===null&&Rm(e,t);break;default:Rm(e,t)}}function Cm(e,t){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){t:{var n=e,i=t;switch(n.tag){case 4:YS(n,i);break t;case 22:n.memoizedState===null&&Cm(n,i);break t;default:Cm(n,i)}}e=e.sibling}}function ZS(e){var t=e.alternate;t!==null&&(e.alternate=null,ZS(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Rh(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ie=null,Gn=!1;function Ri(e,t,n){for(n=n.child;n!==null;)JS(e,t,n),n=n.sibling}function JS(e,t,n){if(si&&typeof si.onCommitFiberUnmount=="function")try{si.onCommitFiberUnmount(ac,n)}catch{}switch(n.tag){case 26:de||pn(n,t),Ri(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!de&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:de||pn(n,t),zl(n);var i=Ie,s=Gn;wa(n.type)&&(Ie=n.stateNode,Gn=!1),Ri(e,t,n),PM(n.stateNode,n.type,n.memoizedProps),Ie=i,Gn=s;break;case 5:de||pn(n,t),zl(n);case 6:if(n.tag===6&&zl(n),i=Ie,s=Gn,Ie=null,Ri(e,t,n),Ie=i,Gn=s,Ie!==null)if(Gn)try{(Ie.nodeType===9?Ie.body:Ie.nodeName==="HTML"?Ie.ownerDocument.body:Ie).removeChild(n.stateNode),oe=!0}catch(a){ve(n,t,a)}else try{Ie.removeChild(n.stateNode),oe=!0}catch(a){ve(n,t,a)}break;case 18:Ie!==null&&(Gn?(e=Ie,Ny(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Mo(e)):Ny(Ie,n.stateNode));break;case 4:i=Ie,s=Gn,Ie=n.stateNode.containerInfo,Gn=!0,Ri(e,t,n),Ie=i,Gn=s;break;case 0:case 11:case 14:case 15:Ta(2,n,t),de||Ta(4,n,t),Ri(e,t,n);break;case 1:de||(pn(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&FS(n,t,i)),Ri(e,t,n);break;case 21:Ri(e,t,n);break;case 22:de=(i=de)||n.memoizedState!==null,Ri(e,t,n),de=i;break;case 30:pn(n,t),Ri(e,t,n);break;case 7:de||pn(n,t),Ri(e,t,n);break;default:Ri(e,t,n)}}function KS(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Mo(e)}catch(n){ve(t,t.return,n)}}}function QS(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Mo(e)}catch(n){ve(t,t.return,n)}}function UA(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new my),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new my),t;default:throw Error(Q(435,e.tag))}}function wu(e,t){var n=UA(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var s=WA.bind(null,e,i);i.then(s,s)}})}function In(e,t,n){var i=t.deletions;if(i!==null)for(var s=0;s<i.length;s++){var a=i[s],r=e,o=t,l=o;t:for(;l!==null;){switch(l.tag){case 27:if(wa(l.type)){Ie=l.stateNode,Gn=!1;break t}break;case 5:Ie=l.stateNode,Gn=!1;break t;case 3:case 4:Ie=l.stateNode.containerInfo,Gn=!0;break t}l=l.return}if(Ie===null)throw Error(Q(160));JS(r,o,a),Ie=null,Gn=!1,r=a.alternate,r!==null&&(r.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)jS(t,e,n),t=t.sibling}var Ni=null;function jS(e,t,n){var i=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(s&4&&(i=e.updateQueue,i=i!==null?i.events:null,i!==null))for(var a=0;a<i.length;a++){var r=i[a];r.ref.impl=r.nextImpl}In(t,e,n),Pn(e),s&4&&(Ta(3,e,e.return),fc(3,e),Ta(5,e,e.return));break;case 1:In(t,e,n),Pn(e),s&512&&(de||i===null||pn(i,i.return)),s&64&&an&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?t:n.concat(t))));break;case 26:if(a=Ni,In(t,e,n),Pn(e),s&512&&(de||i===null||pn(i,i.return)),s&4)if(s=i!==null?i.memoizedState:null,n=e.memoizedState,i===null)if(n===null)if(e.stateNode===null)if(an)e.stateNode=EM(e.type,e.memoizedProps,t.containerInfo,e);else{t:{t=e.type,n=e.memoizedProps,s=a.ownerDocument||a;e:switch(t){case"title":i=s.getElementsByTagName("title")[0],(!i||i[lc]||i[mn]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=s.createElement(t),s.head.insertBefore(i,s.querySelector("head > title"))),yn(i,t,n),i[mn]=e,on(i),t=i;break t;case"link":if(a=Fy("link","href",s).get(t+(n.href||""))){for(r=0;r<a.length;r++)if(i=a[r],i.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&i.getAttribute("rel")===(n.rel==null?null:n.rel)&&i.getAttribute("title")===(n.title==null?null:n.title)&&i.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){a.splice(r,1);break e}}i=s.createElement(t),yn(i,t,n),s.head.appendChild(i);break;case"meta":if(a=Fy("meta","content",s).get(t+(n.content||""))){for(r=0;r<a.length;r++)if(i=a[r],i.getAttribute("content")===(n.content==null?null:""+n.content)&&i.getAttribute("name")===(n.name==null?null:n.name)&&i.getAttribute("property")===(n.property==null?null:n.property)&&i.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&i.getAttribute("charset")===(n.charSet==null?null:n.charSet)){a.splice(r,1);break e}}i=s.createElement(t),yn(i,t,n),s.head.appendChild(i);break;default:throw Error(Q(468,t))}i[mn]=e,on(i),t=i}e.stateNode=t}else an||qm(a,e.type,e.stateNode);else e.stateNode=zy(a,n,e.memoizedProps);else s!==n?(s===null?(t=i.stateNode,t===null||de||t.parentNode.removeChild(t)):s.count--,n===null?an||qm(a,e.type,e.stateNode):zy(a,n,e.memoizedProps)):n===null&&e.stateNode!==null&&wp(e,e.memoizedProps,i.memoizedProps);break;case 27:In(t,e,n),Pn(e),s&512&&(de||i===null||pn(i,i.return)),i!==null&&s&4&&wp(e,e.memoizedProps,i.memoizedProps);break;case 5:if(a=Wi,Wi=!1,In(t,e,n),Wi=a,Pn(e),s&512&&(de||i===null||pn(i,i.return)),e.flags&32){t=e.stateNode;try{ho(t,""),oe=!0}catch(f){ve(e,e.return,f)}}s&4&&e.stateNode!=null&&(t=e.memoizedProps,wp(e,t,i!==null?i.memoizedProps:t)),s&1024&&(Cp=!0);break;case 6:if(In(t,e,n),Pn(e),s&4){if(e.stateNode===null)throw Error(Q(162));t=e.memoizedProps,n=e.stateNode;try{n.nodeValue=t,oe=!0}catch(f){ve(e,e.return,f)}}break;case 3:if(oe=!1,Zu=null,a=Ni,Ni=tc(t.containerInfo),In(t,e,n),Ni=a,Pn(e),s&4&&i!==null&&i.memoizedState.isDehydrated)try{Mo(t.containerInfo)}catch(f){ve(e,e.return,f)}Cp&&(Cp=!1,$S(e)),oe=!1;break;case 4:s=Wi,Wi=an,i=Sv(),a=Ni,Ni=tc(e.stateNode.containerInfo),In(t,e,n),Pn(e),Ni=a,oe&&Rl&&(vh=!0),oe=i,Wi=s;break;case 12:In(t,e,n),Pn(e);break;case 31:In(t,e,n),Pn(e),s&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,wu(e,t)));break;case 13:In(t,e,n),Pn(e),e.child.flags&8192&&e.memoizedState!==null!=(i!==null&&i.memoizedState!==null)&&(Gh=ii()),s&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,wu(e,t)));break;case 22:a=e.memoizedState!==null,r=i!==null&&i.memoizedState!==null;var o=an,l=de,c=Wi;an=o||a,Wi=c||a,de=l||r,In(t,e,n),de=l,Wi=c,an=o,Pn(e),s&8192&&(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,!a||i===null||r||an||de||(t=r||de,n=an,i=de,an=a||an,de=t,ea(e,2),an=n,de=i),!a&&Wi||Rm(e,a)),s&4&&(t=e.updateQueue,t!==null&&(n=t.retryQueue,n!==null&&(t.retryQueue=null,wu(e,n))));break;case 19:In(t,e,n),Pn(e),s&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,wu(e,t)));break;case 30:s&512&&(de||i===null||pn(i,i.return)),s=Sv(),a=Rl,r=(n&335544064)===n,o=e.memoizedProps,Rl=r&&Us(o.default,o.update)!=="none",In(t,e,n),Pn(e),r&&i!==null&&oe&&(e.flags|=4),Rl=a,oe=s;break;case 21:break;case 7:s&512&&(de||i===null||pn(i,i.return)),i&&i.stateNode!==null&&(i.stateNode._fragmentFiber=e);default:In(t,e,n),Pn(e)}}function Pn(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(HS(i)){n=i;break}i=i.return}i=null;for(var s=e.return;s!==null;){if(Lg(s)){var a=s.stateNode;i===null?i=[a]:i.push(a)}if(Dg(s))break;s=s.return}var r=i;if(n==null)throw Error(Q(160));switch(n.tag){case 27:var o=n.stateNode,l=Rp(e);gh(e,l,o,r);break;case 5:var c=n.stateNode;n.flags&32&&(ho(c,""),n.flags&=-33);var f=Rp(e);gh(e,f,c,r);break;case 3:case 4:var p=n.stateNode.containerInfo,u=Rp(e);Mm(e,u,p,r);break;default:throw Error(Q(161))}}catch(d){ve(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function $S(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;$S(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,So=!0,t.reset(),So=!1),e=e.sibling}}function Br(e,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)tM(t,e),t=t.sibling;else WS(t,!1)}function tM(e,t){var n=e.alternate;if(n===null)bm(e,!1);else switch(e.tag){case 3:if(wm=qi=!1,py(),Br(t,e),!qi&&!vh){if(e=Ji,e!==null)for(var i=0;i<e.length;i+=3){n=e[i];var s=e[i+1];wM(n,e[i+2]),n=n.ownerDocument.documentElement,n!==null&&n.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+s+")"})}e=t.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),wm=!0}Ji=null;break;case 5:Br(t,e);break;case 4:i=qi,qi=!1,Br(t,e),qi&&(vh=!0),qi=i;break;case 22:e.memoizedState===null&&(n.memoizedState!==null?bm(e,!1):Br(t,e));break;case 30:i=qi,s=py(),qi=!1,Br(t,e),qi&&(e.flags|=4);var a=e.memoizedProps,r=e.stateNode;t=ws(a,r),r=ws(n.memoizedProps,r);var o=Us(a.default,a.update);o==="none"?t=!1:(a=n.memoizedState,n.memoizedState=null,n=e.child,kn=0,t=Ug(e,n,t,r,o,a,!0),kn!==(a===null?0:a.length)&&(e.flags|=32)),(e.flags&4)!==0&&t?(mo(e,e.memoizedProps.onUpdate),Ji=s):s!==null&&(s.push.apply(s,Ji),Ji=s),qi=(e.flags&32)!==0?!0:i;break;default:Br(t,e)}}function Yi(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)qS(e,t.alternate,t),t=t.sibling}function ea(e,t){for(e=e.child;e!==null;){var n=e,i=t;switch(n.tag){case 0:case 11:case 14:case 15:Ta(4,n,n.return),ea(n,i);break;case 1:pn(n,n.return);var s=n.stateNode;typeof s.componentWillUnmount=="function"&&FS(n,n.return,s),ea(n,i);break;case 27:(i&2)!==0&&PM(n.stateNode,n.type,n.memoizedProps);case 5:pn(n,n.return),n.tag!==5&&n.tag!==27||zl(n),ea(n,i);break;case 6:zl(n);break;case 26:pn(n,n.return),s=n.stateNode,n.memoizedState!==null||s===null||de||s.parentNode.removeChild(s),ea(n,i);break;case 22:n.memoizedState===null&&ea(n,i);break;case 30:pn(n,n.return),ea(n,i);break;case 7:pn(n,n.return);default:ea(n,i)}e=e.sibling}}function Ci(e,t,n){for(n=(t.subtreeFlags&8772)!==0?n:n&-2,t=t.child;t!==null;){var i=t.alternate,s=e,a=t,r=a.flags,o=(n&1)!==0;switch(a.tag){case 0:case 11:case 15:Ci(s,a,n),fc(4,a);break;case 1:if(Ci(s,a,n),i=a,s=i.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(f){ve(i,i.return,f)}if(i=a,s=i.updateQueue,s!==null){var l=i.stateNode;try{var c=s.shared.hiddenCallbacks;if(c!==null)for(s.shared.hiddenCallbacks=null,s=0;s<c.length;s++)Yx(c[s],l)}catch(f){ve(i,i.return,f)}}o&&r&64&&zS(a),Zi(a,a.return);break;case 27:(n&2)!==0&&GS(a);case 5:a.tag!==5&&a.tag!==27||fy(a),Ci(s,a,n),o&&i===null&&r&4&&Sm(a),Zi(a,a.return);break;case 6:fy(a);break;case 26:l=a.stateNode,a.memoizedState!==null||l===null||an||qm(tc(l.ownerDocument),a.type,l),Ci(s,a,n),o&&i===null&&r&4&&Sm(a),Zi(a,a.return);break;case 12:Ci(s,a,n);break;case 31:Ci(s,a,n),o&&r&4&&KS(s,a);break;case 13:Ci(s,a,n),o&&r&4&&QS(s,a);break;case 22:a.memoizedState===null&&Ci(s,a,n),Zi(a,a.return);break;case 30:Ci(s,a,n),Zi(a,a.return);break;case 7:Zi(a,a.return);default:Ci(s,a,n)}t=t.sibling}}function Og(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&uc(n))}function Ig(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&uc(e))}function pi(e,t,n,i){var s=(n&335544064)===n;if(t.subtreeFlags&(s?10262:10256))for(t=t.child;t!==null;)eM(e,t,n,i),t=t.sibling;else s&&XS(t)}function eM(e,t,n,i){var s=(n&335544064)===n;s&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&Xu(t);var a=t.flags;switch(t.tag){case 0:case 11:case 15:pi(e,t,n,i),a&2048&&fc(9,t);break;case 1:pi(e,t,n,i);break;case 3:pi(e,t,n,i),s&&wm&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),a&2048&&(a=null,t.alternate!==null&&(a=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==a&&(t.refCount++,a!=null&&uc(a)));break;case 12:if(a&2048){pi(e,t,n,i),a=t.stateNode;try{var r=t.memoizedProps,o=r.id,l=r.onPostCommit;typeof l=="function"&&l(o,t.alternate===null?"mount":"update",a.passiveEffectDuration,-0)}catch(c){ve(t,t.return,c)}}else pi(e,t,n,i);break;case 31:pi(e,t,n,i);break;case 13:pi(e,t,n,i);break;case 23:break;case 22:r=t.stateNode,o=t.alternate,t.memoizedState!==null?(s&&o!==null&&o.memoizedState===null&&Xu(o),r._visibility&2?pi(e,t,n,i):Fl(e,t)):(s&&o!==null&&o.memoizedState!==null&&Xu(t),r._visibility&2?pi(e,t,n,i):(r._visibility|=2,Fr(e,t,n,i,(t.subtreeFlags&10256)!==0||!1))),a&2048&&Og(o,t);break;case 24:pi(e,t,n,i),a&2048&&Ig(t.alternate,t);break;case 30:s&&(a=t.alternate,a!==null&&(ns(a.child,!0),ns(t.child,!0))),pi(e,t,n,i);break;default:pi(e,t,n,i)}}function Fr(e,t,n,i,s){for(s=s&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var a=e,r=t,o=n,l=i,c=r.flags;switch(r.tag){case 0:case 11:case 15:Fr(a,r,o,l,s),fc(8,r);break;case 23:break;case 22:var f=r.stateNode;r.memoizedState!==null?f._visibility&2?Fr(a,r,o,l,s):Fl(a,r):(f._visibility|=2,Fr(a,r,o,l,s)),s&&c&2048&&Og(r.alternate,r);break;case 24:Fr(a,r,o,l,s),s&&c&2048&&Ig(r.alternate,r);break;default:Fr(a,r,o,l,s)}t=t.sibling}}function Fl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,s=i.flags;switch(i.tag){case 22:Fl(n,i),s&2048&&Og(i.alternate,i);break;case 24:Fl(n,i),s&2048&&Ig(i.alternate,i);break;default:Fl(n,i)}t=t.sibling}}var Ka=8192;function Ya(e,t,n){if(e.subtreeFlags&Ka)for(e=e.child;e!==null;)nM(e,t,n),e=e.sibling}function nM(e,t,n){switch(e.tag){case 26:Ya(e,t,n),e.flags&Ka&&(e.memoizedState!==null?Bw(n,Ni,e.memoizedState,e.memoizedProps):(e=e.stateNode,(t&335544128)===t&&Gy(n,e)));break;case 5:Ya(e,t,n),e.flags&Ka&&(e=e.stateNode,(t&335544128)===t&&Gy(n,e));break;case 3:case 4:var i=Ni;Ni=tc(e.stateNode.containerInfo),Ya(e,t,n),Ni=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=Ka,Ka=16777216,Ya(e,t,n),Ka=i):Ya(e,t,n));break;case 30:if((e.flags&Ka)!==0&&(i=e.memoizedProps.name,i!=null&&i!=="auto")){var s=e.stateNode;s.paired=null,ei===null&&(ei=new Map),ei.set(i,s)}Ya(e,t,n);break;default:Ya(e,t,n)}}function iM(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Sl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];rn=i,aM(i,e)}iM(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)sM(e),e=e.sibling}function sM(e){switch(e.tag){case 0:case 11:case 15:Sl(e),e.flags&2048&&Ta(9,e,e.return);break;case 3:Sl(e);break;case 12:Sl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Wu(e)):Sl(e);break;default:Sl(e)}}function Wu(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];rn=i,aM(i,e)}iM(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Ta(8,t,t.return),Wu(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Wu(t));break;default:Wu(t)}e=e.sibling}}function aM(e,t){for(;rn!==null;){var n=rn;switch(n.tag){case 0:case 11:case 15:Ta(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:uc(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,rn=i;else t:for(n=e;rn!==null;){i=rn;var s=i.sibling,a=i.return;if(ZS(i),i===n){rn=null;break t}if(s!==null){s.return=a,rn=s;break t}rn=a}}}var OA={getCacheForType:function(e){var t=gn(Ze),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return gn(Ze).controller.signal}},IA=typeof WeakMap=="function"?WeakMap:Map,ue=0,be=null,Qt=null,ee=0,ge=0,jn=null,la=!1,wo=!1,Pg=!1,Ds=0,Ge=0,Ea=0,ir=0,yh=0,ni=0,po=0,Hl=null,Vn=null,Nm=!1,Gh=0,rM=0,xh=1/0,Sh=null,_a=null,Fe=0,Li=null,hr=null,es=0,Dm=0,Lm=null,oM=null,ro=null,oo=null,lo=null,Gl=0,qu=null;function ri(){return(ue&2)!==0&&ee!==0?ee&-ee:Ut.T!==null?zg():hx()}function lM(){if(ni===0)if((ee&536870912)===0||Jt){var e=pu;pu<<=1,(pu&3932160)===0&&(pu=262144),ni=e}else ni=536870912;return e=xn.current,e!==null&&(e.flags|=32),ni}function mo(e,t){if(t!=null){var n=e.stateNode,i=n.ref;i===null&&(i=n.ref=CM(ws(e.memoizedProps,n))),oo===null&&(oo=[]),oo.push(t.bind(null,i))}}function Wn(e,t,n){(e===be&&(ge===2||ge===9)||e.cancelPendingCommit!==null)&&(go(e,0),ca(e,ee,ni,!1)),oc(e,n),((ue&2)===0||e!==be)&&(e===be&&((ue&2)===0&&(ir|=n),Ge===4&&ca(e,ee,ni,!1)),ss(e))}function cM(e,t,n){if((ue&6)!==0)throw Error(Q(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||rc(e,t),s=i?zA(e,t):Np(e,t,!0),a=i;do{if(s===0){wo&&!i&&ca(e,t,0,!1);break}else{if(n=e.current.alternate,a&&!PA(n)){s=Np(e,t,!1),a=!1;continue}if(s===2){if(a=t,e.errorRecoveryDisabledLanes&a)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;t:{var o=e;s=Hl;var l=o.current.memoizedState.isDehydrated;if(l&&(go(o,r).flags|=256),r=Np(o,r,!1),r!==2&&r!==6){if(Pg&&!l){o.errorRecoveryDisabledLanes|=a,ir|=a,s=4;break t}a=Vn,Vn=s,a!==null&&(Vn===null?Vn=a:Vn.push.apply(Vn,a))}s=r}if(a=!1,s!==2)continue}}if(s===1){go(e,0),ca(e,t,0,!0);break}t:{switch(i=e,a=s,a){case 0:case 1:throw Error(Q(345));case 4:if((t&4194048)!==t&&(t&62914560)!==t)break;case 6:ca(i,t,ni,!la);break t;case 2:Vn=null;break;case 3:case 5:break;default:throw Error(Q(329))}if((t&62914560)===t&&(s=Gh+300-ii(),10<s)){if(ca(i,t,ni,!la),wh(i,0,!0)!==0)break t;es=t,i.timeoutHandle=Hg(gy.bind(null,i,n,Vn,Sh,Nm,t,ni,ir,po,la,a,"Throttled",-0,0),s);break t}gy(i,n,Vn,Sh,Nm,t,ni,ir,po,la,a,null,-0,0)}}break}while(!0);ss(e)}function gy(e,t,n,i,s,a,r,o,l,c,f,p,u,d){e.timeoutHandle=-1;var v=t.subtreeFlags,M=(a&335544064)===a;if(p=null,(M||v&8192||(v&16785408)===16785408)&&(p={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Qi},ei=null,nM(t,a,p),M&&(v=p,M=e.containerInfo,M=(M.nodeType===9?M:M.ownerDocument).__reactViewTransition,M!=null&&(v.count++,v.waitingForViewTransition=!0,v=ec.bind(v),M.finished.then(v,v))),v=(a&62914560)===a?Gh-ii():(a&4194048)===a?rM-ii():0,v=zw(p,v),v!==null)){es=a,e.cancelPendingCommit=v(vy.bind(null,e,t,a,n,i,s,r,o,l,c,f,p,null,u,d)),ca(e,a,r,!c);return}vy(e,t,a,n,i,s,r,o,l,c,f,p)}function PA(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var s=n[i],a=s.getSnapshot;s=s.value;try{if(!oi(a(),s))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ca(e,t,n,i){t=rx(e,t),t&=~yh,t&=~ir,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var s=t;0<s;){var a=31-ai(s),r=1<<a;i[a]=-1,s&=~r}n!==0&&lx(e,n,t)}function Vh(){return(ue&6)===0?(dc(0,!1),!1):!0}function Bg(){if(Qt!==null){if(ge===0)var e=Qt.return;else e=Qt,bs=gr=null,xg(e),io=null,Zl=0,e=Qt;for(;e!==null;)BS(e.alternate,e),e=e.return;Qt=null}}function go(e,t){var n=e.timeoutHandle;return n!==-1&&(e.timeoutHandle=-1,sw(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),es=0,Bg(),be=e,Qt=n=Ts(e.current,null),ee=t,ge=0,jn=null,la=!1,wo=rc(e,t),Pg=!1,po=ni=yh=ir=Ea=Ge=0,Vn=Hl=null,Nm=!1,Ds=rx(e,t),Lh(),n}function uM(e,t){Vt=null,Ut.H=dh,t===Eo||t===Ih?(t=kv(),ge=3):t===fg?(t=kv(),ge=4):ge=t===Rg?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,jn=t,Qt===null&&(Ge=1,ph(e,yi(t,e.current)))}function hM(){var e=xn.current;return e===null?!0:(ee&4194048)===ee?En===null:(ee&62914560)===ee||(ee&536870912)!==0?e===En:!1}function fM(){var e=Ut.H;return Ut.H=dh,e===null?dh:e}function dM(){var e=Ut.A;return Ut.A=OA,e}function Mh(){Ge=4,la||(ee&4194048)!==ee&&xn.current!==null||(wo=!0),(Ea&134217727)===0&&(ir&134217727)===0||be===null||ca(be,ee,ni,!1)}function Np(e,t,n){var i=ue;ue|=2;var s=fM(),a=dM();(be!==e||ee!==t)&&(Sh=null,go(e,t)),t=!1;var r=Ge;t:do try{if(ge!==0&&Qt!==null){var o=Qt,l=jn;switch(ge){case 8:Bg(),r=6;break t;case 3:case 2:case 9:case 6:xn.current===null&&(t=!0);var c=ge;if(ge=0,jn=null,jr(e,o,l,c),n&&wo){r=0;break t}break;default:c=ge,ge=0,jn=null,jr(e,o,l,c)}}BA(),r=Ge;break}catch(f){uM(e,f)}while(!0);return t&&e.shellSuspendCounter++,bs=gr=null,ue=i,Ut.H=s,Ut.A=a,Qt===null&&(be=null,ee=0,Lh()),r}function BA(){for(;Qt!==null;)pM(Qt)}function zA(e,t){var n=ue;ue|=2;var i=fM(),s=dM();be!==e||ee!==t?(Sh=null,xh=ii()+500,go(e,t)):wo=rc(e,t);t:do try{if(ge!==0&&Qt!==null){t=Qt;var a=jn;e:switch(ge){case 1:ge=0,jn=null,jr(e,t,a,1);break;case 2:case 9:if(Vv(a)){ge=0,jn=null,_y(t);break}t=function(){ge!==2&&ge!==9||be!==e||(ge=7),ss(e)},a.then(t,t);break t;case 3:ge=7;break t;case 4:ge=5;break t;case 7:Vv(a)?(ge=0,jn=null,_y(t)):(ge=0,jn=null,jr(e,t,a,7));break;case 5:var r=null;switch(Qt.tag){case 26:r=Qt.memoizedState;case 5:case 27:var o=Qt;if(r?FM(r):o.stateNode.complete){ge=0,jn=null;var l=o.sibling;if(l!==null)Qt=l;else{var c=o.return;c!==null?(Qt=c,kh(c)):Qt=null}break e}}ge=0,jn=null,jr(e,t,a,5);break;case 6:ge=0,jn=null,jr(e,t,a,6);break;case 8:Bg(),Ge=6;break t;default:throw Error(Q(462))}}FA();break}catch(f){uM(e,f)}while(!0);return bs=gr=null,Ut.H=i,Ut.A=s,ue=n,Qt!==null?0:(be=null,ee=0,Lh(),Ge)}function FA(){for(;Qt!==null&&!nE();)pM(Qt)}function pM(e){var t=PS(e.alternate,e,Ds);e.memoizedProps=e.pendingProps,t===null?kh(e):Qt=t}function _y(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=ay(n,t,t.pendingProps,t.type,void 0,ee);break;case 11:t=ay(n,t,t.pendingProps,t.type.render,t.ref,ee);break;case 5:xg(t);var i=t;i===ln&&(Jt?(rh(i),i.tag===5&&i.stateNode!=null&&(Ce=i.stateNode)):(rh(i),Jt=!0));default:BS(n,t),t=Qt=zx(t,Ds),t=PS(n,t,Ds)}e.memoizedProps=e.pendingProps,t===null?kh(e):Qt=t}function jr(e,t,n,i){bs=gr=null,xg(t),io=null,Zl=0;var s=t.return;try{if(AA(e,s,t,n,ee)){Ge=1,ph(e,yi(n,e.current)),Qt=null;return}}catch(a){if(s!==null)throw Qt=s,a;Ge=1,ph(e,yi(n,e.current)),Qt=null;return}t.flags&32768?(Jt||i===1?e=!0:wo||(ee&536870912)!==0?e=!1:(la=e=!0,(i===2||i===9||i===3||i===6)&&(i=xn.current,i!==null&&i.tag===13&&(i.flags|=16384))),mM(t,e)):kh(t)}function kh(e){var t=e;do{if((t.flags&32768)!==0){mM(t,la);return}e=t.return;var n=NA(t.alternate,t,Ds);if(n!==null){Qt=n;return}if(t=t.sibling,t!==null){Qt=t;return}Qt=t=e}while(t!==null);Ge===0&&(Ge=5)}function mM(e,t){do{var n=DA(e.alternate,e);if(n!==null){n.flags&=32767,Qt=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Qt=e;return}Qt=e=n}while(e!==null);Ge=6,Qt=null}function vy(e,t,n,i,s,a,r,o,l,c,f,p){e.cancelPendingCommit=null;do Xh();while(Fe!==0);if((ue&6)!==0)throw Error(Q(327));if(t!==null){if(t===e.current)throw Error(Q(177));e===be&&(Qt=be=null,ee=0),hr=t,Li=e,es=n,Lm=s,oM=i,HA(e,t,n,r,o,l,p)}}function HA(e,t,n,i,s,a,r){var o=t.lanes|t.childLanes;if(Dm=o,o|=rg,fE(e,n,o,i,s,a),oo=null,(n&335544064)===n?(lo=pA(e),i=10262):(lo=null,i=10256),(t.subtreeFlags&i)!==0||(t.flags&i)!==0?(e.callbackNode=null,e.callbackPriority=0,qA(eh,function(){return Pm(),null})):(e.callbackNode=null,e.callbackPriority=0),_h=!1,i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=Ut.T,Ut.T=null,s=he.p,he.p=2,a=ue,ue|=4;try{LA(e,t,n)}finally{ue=a,he.p=s,Ut.T=i}}Fe=1,_h?ro=uw(r,e.containerInfo,lo,Um,Om,VA,Im,Pm,GA,null,null):(Um(),Om(),Im())}function GA(e){if(Fe!==0){var t=Li.onRecoverableError;t(e,{componentStack:null})}}function VA(){Fe===3&&(Fe=0,tM(hr,Li),Fe=4)}function Um(){if(Fe===1){Fe=0;var e=Li,t=hr,n=es,i=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||i){i=Ut.T,Ut.T=null;var s=he.p;he.p=2;var a=ue;ue|=4;try{Rl=vh=!1,jS(t,e,n),n=Hm;var r=Nx(e.containerInfo),o=n.focusedElem,l=n.selectionRange;if(r!==o&&o&&o.ownerDocument&&Cx(o.ownerDocument.documentElement,o)){if(l!==null&&ag(o)){var c=l.start,f=l.end;if(f===void 0&&(f=c),"selectionStart"in o)o.selectionStart=c,o.selectionEnd=Math.min(f,o.value.length);else{var p=o.ownerDocument||document,u=p&&p.defaultView||window;if(u.getSelection){var d=u.getSelection(),v=o.textContent.length,M=Math.min(l.start,v),g=l.end===void 0?M:Math.min(l.end,v);!d.extend&&M>g&&(r=g,g=M,M=r);var h=Ov(o,M),m=Ov(o,g);if(h&&m&&(d.rangeCount!==1||d.anchorNode!==h.node||d.anchorOffset!==h.offset||d.focusNode!==m.node||d.focusOffset!==m.offset)){var y=p.createRange();y.setStart(h.node,h.offset),d.removeAllRanges(),M>g?(d.addRange(y),d.extend(m.node,m.offset)):(y.setEnd(m.node,m.offset),d.addRange(y))}}}}for(p=[],d=o;d=d.parentNode;)d.nodeType===1&&p.push({element:d,left:d.scrollLeft,top:d.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<p.length;o++){var x=p[o];x.element.scrollLeft=x.left,x.element.scrollTop=x.top}}So=!!Fm,Hm=Fm=null}finally{ue=a,he.p=s,Ut.T=i}}e.current=t,Fe=2}}function Om(){if(Fe===2){Fe=0;var e=Li,t=hr,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=Ut.T,Ut.T=null;var i=he.p;he.p=2;var s=ue;ue|=4;try{qS(e,t.alternate,t)}finally{ue=s,he.p=i,Ut.T=n}}Fe=3}}function Im(){if(Fe===4||Fe===3){Fe=0;var e=ro;ro=null,iE();var t=Li,n=hr,i=es,s=oM,a=(i&335544064)===i?10262:10256;if((n.subtreeFlags&a)!==0||(n.flags&a)!==0?Fe=5:(Fe=0,hr=Li=null,gM(t,t.pendingLanes)),a=t.pendingLanes,a===0&&(_a=null),$m(i),n=n.stateNode,si&&typeof si.onCommitFiberRoot=="function")try{si.onCommitFiberRoot(ac,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=Ut.T,a=he.p,he.p=2,Ut.T=null;try{for(var r=t.onRecoverableError,o=0;o<s.length;o++){var l=s[o];r(l.value,{componentStack:l.stack})}}finally{Ut.T=n,he.p=a}}if(s=oo,r=lo,lo=null,s!==null&&(oo=null,r===null&&(r=[]),e!==null))for(l=0;l<s.length;l++)n=(0,s[l])(r),n!==void 0&&e.finished.finally(n);(es&3)!==0&&Xh(),ss(t),a=t.pendingLanes,(i&261930)!==0&&(a&42)!==0?t===qu?Gl++:(Gl=0,qu=t):(Gl=0,qu=null),dc(0,!1)}}function gM(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,uc(t)))}function Xh(){return ro!==null&&(ro.skipTransition(),ro=null),Um(),Om(),Im(),Pm()}function Pm(){if(Fe!==5)return!1;var e=Li,t=Dm;Dm=0;var n=$m(es),i=Ut.T,s=he.p;try{he.p=32>n?32:n,Ut.T=null,n=Lm,Lm=null;var a=Li,r=es;if(Fe=0,hr=Li=null,es=0,(ue&6)!==0)throw Error(Q(331));var o=ue;if(ue|=4,sM(a.current),eM(a,a.current,r,n),ue=o,dc(0,!1),si&&typeof si.onPostCommitFiberRoot=="function")try{si.onPostCommitFiberRoot(ac,a)}catch{}return!0}finally{he.p=s,Ut.T=i,gM(e,t)}}function yy(e,t,n){t=yi(n,t),t=mm(e.stateNode,t,2),e=pa(e,t,2),e!==null&&(oc(e,2),ss(e))}function ve(e,t,n){if(e.tag===3)yy(e,e,n);else for(;t!==null;){if(t.tag===3){yy(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(_a===null||!_a.has(i))){e=yi(n,e),n=DS(2),i=pa(t,n,2),i!==null&&(LS(n,i,t,e),oc(i,2),ss(i));break}}t=t.return}}function Dp(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new IA;var s=new Set;i.set(t,s)}else s=i.get(t),s===void 0&&(s=new Set,i.set(t,s));s.has(n)||(Pg=!0,s.add(n),e=kA.bind(null,e,t,n),t.then(e,e))}function kA(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,be===e&&(ee&n)===n&&((Ge===4||Ge===3&&(ee&62914560)===ee&&300>ii()-Gh)&&(ue&2)===0?go(e,0):yh|=n,po===ee&&(po=0)),ss(e)}function _M(e,t){t===0&&(t=ox()),e=mr(e,t),e!==null&&(oc(e,t),ss(e))}function XA(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),_M(e,n)}function WA(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(Q(314))}i!==null&&i.delete(t),_M(e,n)}function qA(e,t){return Qm(e,t)}var _o=null,Hr=null,Bm=!1,bh=!1,Lp=!1,ua=0;function ss(e){e!==Hr&&e.next===null&&(Hr===null?_o=Hr=e:Hr=Hr.next=e),bh=!0,Bm||(Bm=!0,ZA())}function dc(e,t){if(!Lp&&bh){Lp=!0;do for(var n=!1,i=_o;i!==null;){if(!t)if(e!==0){var s=i.pendingLanes;if(s===0)var a=0;else{var r=i.suspendedLanes,o=i.pingedLanes;a=(1<<31-ai(42|e)+1)-1,a&=s&~(r&~o),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,xy(i,a))}else a=ee,a=wh(i,i===be?a:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(a&3)===0||rc(i,a)||(n=!0,xy(i,a));i=i.next}while(n);Lp=!1}}function YA(){vM()}function vM(){bh=Bm=!1;var e=0;ua!==0&&iw()&&(e=ua);for(var t=ii(),n=null,i=_o;i!==null;){var s=i.next,a=yM(i,t);a===0?(i.next=null,n===null?_o=s:n.next=s,s===null&&(Hr=n)):(n=i,(e!==0||(a&3)!==0)&&(bh=!0)),i=s}Fe!==0&&Fe!==5||dc(e,!1),ua!==0&&(ua=0)}function yM(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,s=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var r=31-ai(a),o=1<<r,l=s[r];l===-1?((o&n)===0||(o&i)!==0)&&(s[r]=hE(o,t)):l<=t&&(e.expiredLanes|=o),a&=~o}if(t=be,n=ee,n=wh(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(ge===2||ge===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&up(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||rc(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&up(i),$m(n)){case 2:case 8:n=sx;break;case 32:n=eh;break;case 268435456:n=ax;break;default:n=eh}return i=xM.bind(null,e),n=Qm(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&up(i),e.callbackPriority=2,e.callbackNode=null,2}function xM(e,t){if(Fe!==0&&Fe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Xh()&&e.callbackNode!==n)return null;var i=ee;return i=wh(e,e===be?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(cM(e,i,t),yM(e,ii()),e.callbackNode!=null&&e.callbackNode===n?xM.bind(null,e):null)}function xy(e,t){if(Xh())return null;cM(e,t,!0)}function ZA(){aw(function(){(ue&6)!==0?Qm(ix,YA):vM()})}function zg(){if(ua===0){var e=or;e===0&&(e=du,du<<=1,(du&261888)===0&&(du=256)),ua=e}return ua}function Sy(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ou(e)}function JA(e,t,n,i,s){if(t==="submit"&&n&&n.stateNode===s){var a=Sy((s[Yn]||null).action),r=i.submitter;r&&(t=(t=r[Yn]||null)?Sy(t.formAction):r.getAttribute("formAction"),t!==null&&(a=t,r=null));var o=new Ch("action","action",null,i,s);e.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(ua!==0){var l=new FormData(s,r);dm(n,{pending:!0,data:l,method:s.method,action:a},null,l)}}else typeof a=="function"&&(o.preventDefault(),l=new FormData(s,r),dm(n,{pending:!0,data:l,method:s.method,action:a},a,l))},currentTarget:s}]})}}for(Ru=0;Ru<nm.length;Ru++)Cu=nm[Ru],My=Cu.toLowerCase(),by=Cu[0].toUpperCase()+Cu.slice(1),Ui(My,"on"+by);var Cu,My,by,Ru;Ui(Lx,"onAnimationEnd");Ui(Ux,"onAnimationIteration");Ui(Ox,"onAnimationStart");Ui("dblclick","onDoubleClick");Ui("focusin","onFocus");Ui("focusout","onBlur");Ui(rA,"onTransitionRun");Ui(oA,"onTransitionStart");Ui(lA,"onTransitionCancel");Ui(Ix,"onTransitionEnd");uo("onMouseEnter",["mouseout","mouseover"]);uo("onMouseLeave",["mouseout","mouseover"]);uo("onPointerEnter",["pointerout","pointerover"]);uo("onPointerLeave",["pointerout","pointerover"]);dr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));dr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));dr("onBeforeInput",["compositionend","keypress","textInput","paste"]);dr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));dr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));dr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ql="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),KA=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ql));function SM(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],s=i.event;i=i.listeners;t:{var a=void 0;if(t)for(var r=i.length-1;0<=r;r--){var o=i[r],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==a&&s.isPropagationStopped())break t;a=o,s.currentTarget=c;try{a(s)}catch(f){ih(f)}s.currentTarget=null,a=l}else for(r=0;r<i.length;r++){if(o=i[r],l=o.instance,c=o.currentTarget,o=o.listener,l!==a&&s.isPropagationStopped())break t;a=o,s.currentTarget=c;try{a(s)}catch(f){ih(f)}s.currentTarget=null,a=l}}}}function Kt(e,t){var n=t[_v];n===void 0&&(n=t[_v]=new Set);var i=e+"__bubble";n.has(i)||(MM(t,e,2,!1),n.add(i))}function Up(e,t,n){var i=0;t&&(i|=4),MM(n,e,i,t)}var Nu="_reactListening"+Math.random().toString(36).slice(2);function Fg(e){if(!e[Nu]){e[Nu]=!0,dx.forEach(function(n){n!=="selectionchange"&&(KA.has(n)||Up(n,!1,e),Up(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Nu]||(t[Nu]=!0,Up("selectionchange",!1,t))}}function MM(e,t,n,i){switch(qM(t)){case 2:var s=Vw;break;case 8:s=kw;break;default:s=qg}n=s.bind(null,t,n,e),s=void 0,!jp||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),i?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function Op(e,t,n,i,s){var a=i;if((t&1)===0&&(t&2)===0&&i!==null)t:for(;;){if(i===null)return;var r=i.tag;if(r===3||r===4){var o=i.stateNode.containerInfo;if(o===s)break;if(r===4)for(r=i.return;r!==null;){var l=r.tag;if((l===3||l===4)&&r.stateNode.containerInfo===s)return;r=r.return}for(;o!==null;){if(r=Qa(o),r===null)return;if(l=r.tag,l===5||l===6||l===26||l===27){i=a=r;continue t}o=o.parentNode}}i=i.return}Sx(function(){var c=a,f=eg(n),p=[];t:{var u=Px.get(e);if(u!==void 0){var d=Ch,v=e;switch(e){case"keypress":if(Pu(n)===0)break t;case"keydown":case"keyup":d=PE;break;case"focusin":v="focus",d=gp;break;case"focusout":v="blur",d=gp;break;case"beforeblur":case"afterblur":d=gp;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":d=Ev;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":d=TE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":d=GE;break;case Lx:case Ux:case Ox:d=wE;break;case Ix:d=kE;break;case"scroll":case"scrollend":d=ME;break;case"wheel":d=WE;break;case"copy":case"cut":case"paste":d=CE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":d=wv;break;case"submit":d=FE;break;case"toggle":case"beforetoggle":d=YE}var M=(t&4)!==0,g=!M&&(e==="scroll"||e==="scrollend"),h=M?u!==null?u+"Capture":null:u;M=[];for(var m=c,y;m!==null;){var x=m;if(y=x.stateNode,x=x.tag,x!==5&&x!==26&&x!==27||y===null||h===null||(x=kl(m,h),x!=null&&M.push(jl(m,x,y))),g)break;m=m.return}0<M.length&&(u=new d(u,v,null,n,f),p.push({event:u,listeners:M}))}}if((t&7)===0){t:{if(d=e==="mouseover"||e==="pointerover",u=e==="mouseout"||e==="pointerout",d&&n!==Qp&&(v=n.relatedTarget||n.fromElement)&&(Qa(v)||v[bo]))break t;(u||d)&&(v=f.window===f?f:(d=f.ownerDocument)?d.defaultView||d.parentWindow:window,u?(d=n.relatedTarget||n.toElement,u=c,d=d?Qa(d):null,d!==null&&(g=sc(d),M=d.tag,d!==g||M!==5&&M!==27&&M!==6)&&(d=null)):(u=null,d=c),u!==d&&(M=Ev,x="onMouseLeave",h="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(M=wv,x="onPointerLeave",h="onPointerEnter",m="pointer"),g=u==null?v:Al(u),y=d==null?v:Al(d),v=new M(x,m+"leave",u,n,f),v.target=g,v.relatedTarget=y,x=null,Qa(f)===c&&(M=new M(h,m+"enter",d,n,f),M.target=y,M.relatedTarget=g,x=M),g=x,M=u&&d?Fp(u,d,QA):null,u!==null&&Ty(p,v,u,M,!1),d!==null&&g!==null&&Ty(p,g,d,M,!0)))}t:{if(u=c?Al(c):window,d=u.nodeName&&u.nodeName.toLowerCase(),d==="select"||d==="input"&&u.type==="file")var E=Dv;else if(Nv(u))if(wx)E=iA;else{E=eA;var w=tA}else d=u.nodeName,!d||d.toLowerCase()!=="input"||u.type!=="checkbox"&&u.type!=="radio"?c&&tg(c.elementType)&&(E=Dv):E=nA;if(E&&(E=E(e,c))){Ax(p,E,n,f);break t}w&&w(e,u,c)}switch(w=c?Al(c):window,e){case"focusin":(Nv(w)||w.contentEditable==="true")&&(qr=w,tm=c,Dl=null);break;case"focusout":Dl=tm=qr=null;break;case"mousedown":em=!0;break;case"contextmenu":case"mouseup":case"dragend":em=!1,Iv(p,n,f);break;case"selectionchange":if(aA)break;case"keydown":case"keyup":Iv(p,n,f)}var _;if(sg)t:{switch(e){case"compositionstart":var T="onCompositionStart";break t;case"compositionend":T="onCompositionEnd";break t;case"compositionupdate":T="onCompositionUpdate";break t}T=void 0}else Wr?Tx(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(bx&&n.locale!=="ko"&&(Wr||T!=="onCompositionStart"?T==="onCompositionEnd"&&Wr&&(_=Mx()):(ra=f,ng="value"in ra?ra.value:ra.textContent,Wr=!0)),w=Th(c,T),0<w.length&&(T=new Av(T,e,null,n,f),p.push({event:T,listeners:w}),_?T.data=_:(_=Ex(n),_!==null&&(T.data=_)))),(_=JE?KE(e,n):QE(e,n))&&(T=Th(c,"onBeforeInput"),0<T.length&&(w=new Av("onBeforeInput","beforeinput",null,n,f),p.push({event:w,listeners:T}),w.data=_)),JA(p,e,c,n,f)}SM(p,t)})}function jl(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Th(e,t){for(var n=t+"Capture",i=[];e!==null;){var s=e,a=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||a===null||(s=kl(e,n),s!=null&&i.unshift(jl(e,s,a)),s=kl(e,t),s!=null&&i.push(jl(e,s,a))),e.tag===3)return i;e=e.return}return[]}function QA(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Ty(e,t,n,i,s){for(var a=t._reactName,r=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||c===null||(l=c,s?(c=kl(n,a),c!=null&&r.unshift(jl(n,c,l))):s||(c=kl(n,a),c!=null&&r.push(jl(n,c,l)))),n=n.return}r.length!==0&&e.push({event:t,listeners:r})}var jA=/\r\n?/g,$A=/\u0000|\uFFFD/g;function Ey(e){return(typeof e=="string"?e:""+e).replace(jA,`
`).replace($A,"")}function bM(e,t){return t=Ey(t),Ey(e)===t}function _e(e,t,n,i,s,a){switch(n){case"children":if(typeof i=="string")t==="body"||t==="textarea"&&i===""||ho(e,i);else if(typeof i=="number"||typeof i=="bigint")t!=="body"&&ho(e,""+i);else return;break;case"className":gu(e,"class",i);break;case"tabIndex":gu(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":gu(e,n,i);break;case"style":xx(e,i,a);return;case"data":if(t!=="object"){gu(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Ou(i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof a=="function"&&(n==="formAction"?(t!=="input"&&_e(e,t,"name",s.name,s,null),_e(e,t,"formEncType",s.formEncType,s,null),_e(e,t,"formMethod",s.formMethod,s,null),_e(e,t,"formTarget",s.formTarget,s,null)):(_e(e,t,"encType",s.encType,s,null),_e(e,t,"method",s.method,s,null),_e(e,t,"target",s.target,s,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Ou(i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=Qi);return;case"onScroll":i!=null&&Kt("scroll",e);return;case"onScrollEnd":i!=null&&Kt("scrollend",e);return;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(Q(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(Q(60));a?.__html!==n&&(e.innerHTML=n)}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=Ou(i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":Kt("beforetoggle",e),Kt("toggle",e),Uu(e,"popover",i);break;case"xlinkActuate":xs(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":xs(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":xs(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":xs(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":xs(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":xs(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":xs(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":xs(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":xs(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Uu(e,"is",i);break;case"innerText":case"textContent":return;default:if(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")n=xE.get(n)||n,Uu(e,n,i);else return}oe=!0}function zm(e,t,n,i,s,a){switch(n){case"style":xx(e,i,a);return;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(Q(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(Q(60));a?.__html!==n&&(e.innerHTML=n)}}break;case"children":if(typeof i=="string")ho(e,i);else if(typeof i=="number"||typeof i=="bigint")ho(e,""+i);else return;break;case"onScroll":i!=null&&Kt("scroll",e);return;case"onScrollEnd":i!=null&&Kt("scrollend",e);return;case"onClick":i!=null&&(e.onclick=Qi);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!px.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(s=n.endsWith("Capture"),a=n.slice(2,s?n.length-7:void 0),t=e[Yn]||null,t=t!=null?t[n]:null,typeof t=="function"&&e.removeEventListener(a,t,s),typeof i=="function")){typeof t!="function"&&t!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(a,i,s);break t}oe=!0,n in e?e[n]=i:i===!0?e.setAttribute(n,""):Uu(e,n,i)}return}oe=!0}function yn(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Kt("error",e),Kt("load",e);var i=!1,s=!1,a;for(a in n)if(n.hasOwnProperty(a)){var r=n[a];if(r!=null)switch(a){case"src":i=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(Q(137,t));default:_e(e,t,a,r,n,null)}}s&&_e(e,t,"srcSet",n.srcSet,n,null),i&&_e(e,t,"src",n.src,n,null);return;case"input":Kt("invalid",e);var o=a=r=s=null,l=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var f=n[i];if(f!=null)switch(i){case"name":s=f;break;case"type":r=f;break;case"checked":l=f;break;case"defaultChecked":c=f;break;case"value":a=f;break;case"defaultValue":o=f;break;case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error(Q(137,t));break;default:_e(e,t,i,f,n,null)}}_x(e,a,o,l,c,r,s,!1);return;case"select":Kt("invalid",e),i=r=a=null;for(s in n)if(n.hasOwnProperty(s)&&(o=n[s],o!=null))switch(s){case"value":a=o;break;case"defaultValue":r=o;break;case"multiple":i=o;default:_e(e,t,s,o,n,null)}t=a,n=r,e.multiple=!!i,t!=null?to(e,!!i,t,!1):n!=null&&to(e,!!i,n,!0);return;case"textarea":Kt("invalid",e),a=s=i=null;for(r in n)if(n.hasOwnProperty(r)&&(o=n[r],o!=null))switch(r){case"value":i=o;break;case"defaultValue":s=o;break;case"children":a=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(Q(91));break;default:_e(e,t,r,o,n,null)}yx(e,i,s,a);return;case"option":for(l in n)n.hasOwnProperty(l)&&(i=n[l],i!=null)&&(l==="selected"?e.selected=i&&typeof i!="function"&&typeof i!="symbol":_e(e,t,l,i,n,null));return;case"dialog":Kt("beforetoggle",e),Kt("toggle",e),Kt("cancel",e),Kt("close",e);break;case"iframe":case"object":Kt("load",e);break;case"video":case"audio":for(i=0;i<Ql.length;i++)Kt(Ql[i],e);break;case"image":Kt("error",e),Kt("load",e);break;case"details":Kt("toggle",e);break;case"embed":case"source":case"link":Kt("error",e),Kt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(Q(137,t));default:_e(e,t,c,i,n,null)}return;default:if(tg(t)){for(f in n)n.hasOwnProperty(f)&&(i=n[f],i!==void 0&&zm(e,t,f,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&_e(e,t,o,i,n,null))}var tw={};function ew(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,a=null,r=null,o=null,l=null,c=null,f=null;for(d in n){var p=n[d];if(n.hasOwnProperty(d)&&p!=null)switch(d){case"checked":break;case"value":break;case"defaultValue":l=p;default:i.hasOwnProperty(d)||_e(e,t,d,null,i,p)}}for(var u in i){var d=i[u];if(p=n[u],i.hasOwnProperty(u)&&(d!=null||p!=null))switch(u){case"type":d!==p&&(oe=!0),a=d;break;case"name":d!==p&&(oe=!0),s=d;break;case"checked":d!==p&&(oe=!0),c=d;break;case"defaultChecked":d!==p&&(oe=!0),f=d;break;case"value":d!==p&&(oe=!0),r=d;break;case"defaultValue":d!==p&&(oe=!0),o=d;break;case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(Q(137,t));break;default:d!==p&&_e(e,t,u,d,i,p)}}Kp(e,r,o,l,c,f,a,s);return;case"select":d=r=o=u=null;for(a in n)if(l=n[a],n.hasOwnProperty(a)&&l!=null)switch(a){case"value":break;case"multiple":d=l;default:i.hasOwnProperty(a)||_e(e,t,a,null,i,l)}for(s in i)if(a=i[s],l=n[s],i.hasOwnProperty(s)&&(a!=null||l!=null))switch(s){case"value":a!==l&&(oe=!0),u=a;break;case"defaultValue":a!==l&&(oe=!0),o=a;break;case"multiple":a!==l&&(oe=!0),r=a;default:a!==l&&_e(e,t,s,a,i,l)}t=o,n=r,i=d,u!=null?to(e,!!n,u,!1):!!i!=!!n&&(t!=null?to(e,!!n,t,!0):to(e,!!n,n?[]:"",!1));return;case"textarea":d=u=null;for(o in n)if(s=n[o],n.hasOwnProperty(o)&&s!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:_e(e,t,o,null,i,s)}for(r in i)if(s=i[r],a=n[r],i.hasOwnProperty(r)&&(s!=null||a!=null))switch(r){case"value":s!==a&&(oe=!0),u=s;break;case"defaultValue":s!==a&&(oe=!0),d=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(Q(91));break;default:s!==a&&_e(e,t,r,s,i,a)}vx(e,u,d);return;case"option":for(var v in n)u=n[v],n.hasOwnProperty(v)&&u!=null&&!i.hasOwnProperty(v)&&(v==="selected"?e.selected=!1:_e(e,t,v,null,i,u));for(l in i)u=i[l],d=n[l],i.hasOwnProperty(l)&&u!==d&&(u!=null||d!=null)&&(l==="selected"?(u!==d&&(oe=!0),e.selected=u&&typeof u!="function"&&typeof u!="symbol"):_e(e,t,l,u,i,d));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var M in n)u=n[M],n.hasOwnProperty(M)&&u!=null&&!i.hasOwnProperty(M)&&_e(e,t,M,null,i,u);for(c in i)if(u=i[c],d=n[c],i.hasOwnProperty(c)&&u!==d&&(u!=null||d!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(u!=null)throw Error(Q(137,t));break;default:_e(e,t,c,u,i,d)}return;default:if(tg(t)){for(var g in n)u=n[g],n.hasOwnProperty(g)&&u!==void 0&&!i.hasOwnProperty(g)&&zm(e,t,g,void 0,i,u);for(f in i)u=i[f],d=n[f],!i.hasOwnProperty(f)||u===d||u===void 0&&d===void 0||zm(e,t,f,u,i,d);return}}for(var h in n)u=n[h],n.hasOwnProperty(h)&&u!=null&&!i.hasOwnProperty(h)&&_e(e,t,h,null,i,u);for(p in i)u=i[p],d=n[p],!i.hasOwnProperty(p)||u===d||u==null&&d==null||_e(e,t,p,u,i,d)}function Ay(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function nw(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var s=n[i],a=s.transferSize,r=s.initiatorType,o=s.duration;if(a&&o&&Ay(r)){for(r=0,o=s.responseEnd,i+=1;i<n.length;i++){var l=n[i],c=l.startTime;if(c>o)break;var f=l.transferSize,p=l.initiatorType;f&&Ay(p)&&(l=l.responseEnd,r+=f*(l<o?1:(o-c)/(l-c)))}if(--i,t+=8*(a+r)/(s.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Fm=null,Hm=null;function $l(e){return e.nodeType===9?e:e.ownerDocument}function wy(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function TM(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function EM(e,t,n,i){return n=$l(n).createElement(e),n[mn]=i,n[Yn]=t,yn(n,e,t),on(n),n}function Gm(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ip=null;function iw(){var e=window.event;return e&&e.type==="popstate"?e===Ip?!1:(Ip=e,!0):(Ip=null,!1)}var Hg=typeof setTimeout=="function"?setTimeout:void 0,sw=typeof clearTimeout=="function"?clearTimeout:void 0,Ry=typeof Promise=="function"?Promise:void 0,Cy=typeof requestAnimationFrame=="function"?requestAnimationFrame:Hg,aw=typeof queueMicrotask=="function"?queueMicrotask:typeof Ry<"u"?function(e){return Ry.resolve(null).then(e).catch(rw)}:Hg;function rw(e){setTimeout(function(){throw e})}function wa(e){return e==="head"}function Ny(e,t){var n=t,i=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(s),Mo(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")Bp(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Bp(n);for(var a=n.firstChild;a;){var r=a.nextSibling,o=a.nodeName;a[lc]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&a.rel.toLowerCase()==="stylesheet"||n.removeChild(a),a=r}}else n==="body"&&Bp(e.ownerDocument.body);n=s}while(n);Mo(t)}function Dy(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function AM(e,t,n){if(t=CSS.escape(t)!==t?"r-"+btoa(t).replace(/=/g,""):t,e.style.viewTransitionName=t,n!=null&&(e.style.viewTransitionClass=n),n=getComputedStyle(e),n.display==="inline"){if(t=e.getClientRects(),t.length===1)var i=1;else for(var s=i=0;s<t.length;s++){var a=t[s];0<a.width&&0<a.height&&i++}i===1&&(e=e.style,e.display=t.length===1?"inline-block":"block",e.marginTop="-"+n.paddingTop,e.marginBottom="-"+n.paddingBottom)}}function wM(e,t){e=e.style,t=t.style;var n=t!=null?t.hasOwnProperty("viewTransitionName")?t.viewTransitionName:t.hasOwnProperty("view-transition-name")?t["view-transition-name"]:null:null;e.viewTransitionName=n==null||typeof n=="boolean"?"":(""+n).trim(),n=t!=null?t.hasOwnProperty("viewTransitionClass")?t.viewTransitionClass:t.hasOwnProperty("view-transition-class")?t["view-transition-class"]:null:null,e.viewTransitionClass=n==null||typeof n=="boolean"?"":(""+n).trim(),e.display==="inline-block"&&(t==null?e.display=e.margin="":(n=t.display,e.display=n==null||typeof n=="boolean"?"":n,n=t.margin,n!=null?e.margin=n:(n=t.hasOwnProperty("marginTop")?t.marginTop:t["margin-top"],e.marginTop=n==null||typeof n=="boolean"?"":n,t=t.hasOwnProperty("marginBottom")?t.marginBottom:t["margin-bottom"],e.marginBottom=t==null||typeof t=="boolean"?"":t)))}function RM(e,t,n){return n=n.ownerDocument.defaultView,{rect:e,abs:t.position==="absolute"||t.position==="fixed",clip:t.clipPath!=="none"||t.overflow!=="visible"||t.filter!=="none"||t.mask!=="none"||t.mask!=="none"||t.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=n.innerHeight&&e.left<=n.innerWidth}}function Vm(e){var t=e.getBoundingClientRect(),n=getComputedStyle(e);return RM(t,n,e)}function ow(e){var t=e.getBoundingClientRect();t=new DOMRect(t.x+2e4,t.y+2e4,t.width,t.height);var n=getComputedStyle(e);return RM(t,n,e)}function lw(e){return e.documentElement.clientHeight}function cw(e){this.addEventListener("load",e),this.addEventListener("error",e)}function uw(e,t,n,i,s,a,r,o,l){var c=t.nodeType===9?t:t.ownerDocument;try{var f=c.startViewTransition({update:function(){var u=c.defaultView,d=u.navigation&&u.navigation.transition,v=c.fonts.status;i();var M=[];if(v==="loaded"&&(lw(c),c.fonts.status==="loading"&&M.push(c.fonts.ready)),v=M.length,e!==null)for(var g=e.suspenseyImages,h=0,m=0;m<g.length;m++){var y=g[m];if(!y.complete){var x=y.getBoundingClientRect();if(0<x.bottom&&0<x.right&&x.top<u.innerHeight&&x.left<u.innerWidth){if(h+=HM(y),h>Ju){M.length=v;break}y=new Promise(cw.bind(y)),M.push(y)}}}if(0<M.length)return u=Promise.race([Promise.all(M),new Promise(function(E){return setTimeout(E,500)})]).then(s,s),(d?Promise.allSettled([d.finished,u]):u).then(a,a);if(s(),d)return d.finished.then(a,a);a()},types:n});c.__reactViewTransition=f;var p=[];return f.ready.then(function(){for(var u=c.documentElement.getAnimations({subtree:!0}),d=0;d<u.length;d++){var v=u[d],M=v.effect,g=M.pseudoElement;if(g!=null&&g.startsWith("::view-transition")){p.push(v),v=M.getKeyframes();for(var h=g=void 0,m=!0,y=0;y<v.length;y++){var x=v[y],E=x.width;if(g===void 0)g=E;else if(g!==E){m=!1;break}if(E=x.height,h===void 0)h=E;else if(h!==E){m=!1;break}delete x.width,delete x.height,x.transform==="none"&&delete x.transform}m&&g!==void 0&&h!==void 0&&(M.setKeyframes(v),m=getComputedStyle(M.target,M.pseudoElement),m.width!==g||m.height!==h)&&(m=v[0],m.width=g,m.height=h,m=v[v.length-1],m.width=g,m.height=h,M.setKeyframes(v))}}r()},function(u){c.__reactViewTransition===f&&(c.__reactViewTransition=null);try{typeof u=="object"&&u!==null&&u.name==="InvalidStateError"&&(u.message==="View transition was skipped because document visibility state is hidden."||u.message==="Skipping view transition because document visibility state has become hidden."||u.message==="Skipping view transition because viewport size changed."||u.message==="Transition was aborted because of invalid state")&&(u=null),u!==null&&l(u)}finally{i(),s(),r()}}),f.finished.finally(function(){for(var u=0;u<p.length;u++)p[u].cancel();c.__reactViewTransition===f&&(c.__reactViewTransition=null),o()}),f}catch{return i(),s(),r(),null}}function ja(e,t){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+t+")"}ja.prototype.animate=function(e,t){return t=typeof t=="number"?{duration:t}:Te({},t),t.pseudoElement=this._selector,this._scope.animate(e,t)};ja.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,n=e.getAnimations({subtree:!0}),i=[],s=0;s<n.length;s++){var a=n[s].effect;a!==null&&a.target===e&&a.pseudoElement===t&&i.push(n[s])}return i};ja.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function CM(e){return{name:e,group:new ja("group",e),imagePair:new ja("image-pair",e),old:new ja("old",e),new:new ja("new",e)}}function li(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}li.prototype.addEventListener=function(e,t,n){var i=null,s=null;if(!(n!=null&&typeof n!="boolean"&&(i=n.signal||null,i!==null&&i.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var a=this._eventListeners;if(NM(a,e,t,n)===-1){var r=this,o=t;n!=null&&typeof n!="boolean"&&n.once===!0&&(o=function(l){r.removeEventListener(e,t,n),typeof t=="function"?t.call(this,l):t.handleEvent(l)}),i!==null&&(s=r.removeEventListener.bind(r,e,t,n),i.addEventListener("abort",s,{once:!0}),s=i.removeEventListener.bind(i,"abort",s)),i=vo(n),a.push({type:e,listener:t,optionsOrUseCapture:n,attachedListener:o,cleanup:s}),qn(this._fragmentFiber.child,!1,hw,e,o,i)}this._eventListeners=a}};function hw(e,t,n,i){return je(e).addEventListener(t,n,i),!1}li.prototype.removeEventListener=function(e,t,n){var i=this._eventListeners;if(i!==null&&(t=NM(i,e,t,n),t!==-1)){var s=i[t];n=s.attachedListener;var a=s.cleanup;s=vo(s.optionsOrUseCapture),qn(this._fragmentFiber.child,!1,fw,e,n,s),i.splice(t,1),a!==null&&a()}};function fw(e,t,n,i){return je(e).removeEventListener(t,n,i),!1}function vo(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function Ly(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function NM(e,t,n,i){if(e.length===0)return-1;i=Ly(i);for(var s=0;s<e.length;s++){var a=e[s];if(a.type===t&&a.listener===n&&Ly(a.optionsOrUseCapture)===i)return s}return-1}li.prototype.dispatchEvent=function(e){var t=fr(this._fragmentFiber);if(t===null)return!0;t=je(t);var n=this._eventListeners;if(n!==null&&0<n.length||!e.bubbles){var i=t.nodeType===9?t.createComment(""):document.createTextNode("");if(n)for(var s=0;s<n.length;s++){var a=n[s];i.addEventListener(a.type,a.attachedListener,vo(a.optionsOrUseCapture))}if(t.appendChild(i),e=i.dispatchEvent(e),n)for(s=0;s<n.length;s++)a=n[s],i.removeEventListener(a.type,a.attachedListener,vo(a.optionsOrUseCapture));return t.removeChild(i),e}return t.dispatchEvent(e)};li.prototype.focus=function(e){qn(this._fragmentFiber.child,!0,DM,e,void 0,void 0)};function DM(e,t){return e.tag===6?!1:(e=je(e),Tw(e,t))}li.prototype.focusLast=function(e){var t=[];qn(this._fragmentFiber.child,!0,Gg,t,void 0,void 0);for(var n=t.length-1;0<=n&&!DM(t[n],e);n--);};function Gg(e,t){return t.push(e),!1}li.prototype.blur=function(){var e=fr(this._fragmentFiber);e!==null&&(e=je(e),e=$l(e).activeElement,e!==null&&qn(this._fragmentFiber.child,!1,dw,e,void 0,void 0))};function dw(e,t){return e.tag===6?!1:(e=je(e),e===t||e.contains(t)?(t.blur(),!0):!1)}li.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),qn(this._fragmentFiber.child,!1,pw,e,void 0,void 0)};function pw(e,t){return e.tag===6||(e=je(e),t.observe(e)),!1}li.prototype.unobserveUsing=function(e){var t=this._observers;if(t!==null&&t.has(e)){t.delete(e),qn(this._fragmentFiber.child,!1,mw,e,void 0,void 0);for(var n=t=0;n<Di.length;n++){var i=Di[n];i.fragmentInstance===this&&i.observer===e?e.unobserve(i.instance):Di[t++]=i}Di.length=t}};function mw(e,t){return e.tag===6||(e=je(e),t.unobserve(e)),!1}var Di=[],Pp=!1;function gw(e,t,n){Di.push({fragmentInstance:e,observer:t,instance:n}),Pp||(Pp=!0,Ew(function(){Pp=!1;var i=Di;Di=[];for(var s=0;s<i.length;s++){var a=i[s];a.observer.unobserve(a.instance)}}))}li.prototype.getClientRects=function(){var e=[];return qn(this._fragmentFiber.child,!1,_w,e,void 0,void 0),e};function _w(e,t){if(e.tag===6){e=e.stateNode;var n=e.ownerDocument.createRange();n.selectNodeContents(e),t.push.apply(t,n.getClientRects())}else e=je(e),t.push.apply(t,e.getClientRects());return!1}li.prototype.getRootNode=function(e){var t=fr(this._fragmentFiber);return t===null?this:je(t).getRootNode(e)};li.prototype.compareDocumentPosition=function(e){var t=fr(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];qn(this._fragmentFiber.child,!1,Gg,n,void 0,void 0);var i=je(t);if(n.length===0){if(n=i,hv(this._fragmentFiber)){t:{for(t=this._fragmentFiber.return;t!==null;){if(t.tag===4){t=t.stateNode.containerInfo;break t}if(t.tag===3||t.tag===5||t.tag===27)break;t=t.return}t=null}t!=null&&(n=t)}t=this._fragmentFiber;var s=i=n.compareDocumentPosition(e);return n===e?s=Node.DOCUMENT_POSITION_CONTAINS:i&Node.DOCUMENT_POSITION_CONTAINED_BY&&(n=$y(t)[1],n===null?s=Node.DOCUMENT_POSITION_PRECEDING:(e=je(n).compareDocumentPosition(e),s=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),s|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=je(n[0]),s=je(n[n.length-1]);var a=hv(this._fragmentFiber)?t.parentElement:i;if(a==null)return Node.DOCUMENT_POSITION_DISCONNECTED;i=a.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,a=a.compareDocumentPosition(s)&Node.DOCUMENT_POSITION_CONTAINED_BY;var r=t.compareDocumentPosition(e),o=s.compareDocumentPosition(e),l=r&Node.DOCUMENT_POSITION_CONTAINED_BY||o&Node.DOCUMENT_POSITION_CONTAINED_BY;return o=i&&a&&r&Node.DOCUMENT_POSITION_FOLLOWING&&o&Node.DOCUMENT_POSITION_PRECEDING,t=i&&t===e||a&&s===e||l||o?Node.DOCUMENT_POSITION_CONTAINED_BY:!i&&t===e||!a&&s===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:r,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||vw(t,this._fragmentFiber,n[0],n[n.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function vw(e,t,n,i,s){var a=Qa(s);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!a)t:{for(;a!==null;){if(a.tag===7&&(a===t||a.alternate===t)){n=!0;break t}a=a.return}n=!1}return n}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(a===null)return a=s.ownerDocument,s===a||s===a.documentElement||s===a.body;t:{for(a=t,t=fr(t);a!==null;){if(!(a.tag!==5&&a.tag!==3&&a.tag!==27||a!==t&&a.alternate!==t)){a=!0;break t}a=a.return}a=!1}return a}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!a)&&!(t=a===n)&&(t=Fp(n,a,fv),t===null?t=!1:(qn(t,!0,ZT,a,n),a=Gr,Gr=null,t=a!==null)),t):e&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!a)&&!(t=a===i)&&(t=Fp(i,a,fv),t===null?t=!1:(qn(t,!0,JT,a,i),a=Gr,zp=Gr=null,t=a!==null)),t):!1}function Uy(e,t){var n=e.ownerDocument.createRange();n.selectNodeContents(e),e=n.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}li.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(Q(566));var t=[];qn(this._fragmentFiber.child,!1,Gg,t,void 0,void 0);var n=e!==!1;if(t.length===0){var i=$y(this._fragmentFiber);if(i=n?i[1]||i[0]||fr(this._fragmentFiber):i[0]||i[1],i===null)return;if(i.tag===6){e=je(i),Uy(e,n);return}if(i=je(i),i.nodeType!==9){if(i.nodeType===11){n="host"in i?i.host:null,n!==null&&n.scrollIntoView(e);return}i.scrollIntoView(e)}}for(i=n?t.length-1:0;i!==(n?-1:t.length);){var s=t[i];s.tag===6?(s=je(s),Uy(s,n)):je(s).scrollIntoView(e),i+=n?-1:1}};function yw(e,t){return e=je(e),LM(e,t),!1}function LM(e,t){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(t)}function UM(e,t){var n=t._eventListeners;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i];e.addEventListener(s.type,s.attachedListener,vo(s.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(a){for(var r=0,o=0;o<Di.length;o++){var l=Di[o];(l.fragmentInstance!==t||l.observer!==a||l.instance!==e)&&(Di[r++]=l)}Di.length=r,a.observe(e)}),LM(e,t))}function xw(e,t){var n=t._eventListeners;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i];e.removeEventListener(s.type,s.attachedListener,vo(s.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(a){typeof a.rootMargin=="string"?gw(t,a,e):a.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(t))}function km(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":km(n),Rh(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function Sw(e,t,n,i){for(;e.nodeType===1;){var s=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[lc])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(a=e.getAttribute("rel"),a==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(a!==s.rel||e.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||e.getAttribute("title")!==(s.title==null?null:s.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(a=e.getAttribute("src"),(a!==(s.src==null?null:s.src)||e.getAttribute("type")!==(s.type==null?null:s.type)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&a&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var a=s.name==null?null:""+s.name;if(s.type==="hidden"&&e.getAttribute("name")===a)return e}else return e;if(e=Si(e.nextSibling),e===null)break}return null}function Mw(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Si(e.nextSibling),e===null))return null;return e}function OM(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Si(e.nextSibling),e===null))return null;return e}function Xm(e){return e.data==="$?"||e.data==="$~"}function Vg(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function bw(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function Si(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Wm=null;function Oy(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Si(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function Iy(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function Tw(e,t){function n(){i=!0}if(e.ownerDocument.activeElement===e)return!0;var i=!1;try{e.ownerDocument.addEventListener("focus",n,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener("focus",n,!0)}return i}function Ew(e){Cy(function(){Cy(function(t){return e(t)})})}function IM(e,t,n){switch(t=$l(n),e){case"html":if(e=t.documentElement,!e)throw Error(Q(452));return e;case"head":if(e=t.head,!e)throw Error(Q(453));return e;case"body":if(e=t.body,!e)throw Error(Q(454));return e;default:throw Error(Q(451))}}function PM(e,t,n){for(var i in n){var s=n[i];n.hasOwnProperty(i)&&s!=null&&_e(e,t,i,null,tw,s)}n.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===Qi&&(e.onclick=null),Rh(e)}function Bp(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Rh(e)}var Mi=new Map,Py=new Set;function tc(e){if(typeof e.getRootNode=="function"){var t=e.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return e.nodeType===9?e:e.ownerDocument}var Os=he.d;he.d={f:Aw,r:ww,D:Rw,C:Cw,L:Nw,m:Dw,X:Uw,S:Lw,M:Ow};function Aw(){var e=Os.f(),t=Vh();return e||t}function ww(e){var t=To(e);t!==null&&t.tag===5&&t.type==="form"?xS(t):Os.r(e)}var Ro=typeof document>"u"?null:document;function BM(e,t,n){var i=Ro;if(i&&typeof t=="string"&&t){var s=vi(t);s='link[rel="'+e+'"][href="'+s+'"]',typeof n=="string"&&(s+='[crossorigin="'+n+'"]'),Py.has(s)||(Py.add(s),e={rel:e,crossOrigin:n,href:t},i.querySelector(s)===null&&(t=i.createElement("link"),yn(t,"link",e),on(t),i.head.appendChild(t)))}}function Rw(e){Os.D(e),BM("dns-prefetch",e,null)}function Cw(e,t){Os.C(e,t),BM("preconnect",e,t)}function Nw(e,t,n){Os.L(e,t,n);var i=Ro;if(i&&e&&t){var s='link[rel="preload"][as="'+vi(t)+'"]';t==="image"&&n&&n.imageSrcSet?(s+='[imagesrcset="'+vi(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(s+='[imagesizes="'+vi(n.imageSizes)+'"]')):s+='[href="'+vi(e)+'"]';var a=s;switch(t){case"style":a=yo(e);break;case"script":a=Co(e)}if(!(Mi.has(a)||(e=Te({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Mi.set(a,e),i.querySelector(s)!==null||t==="style"&&i.querySelector(pc(a))||t==="script"&&i.querySelector(mc(a))))){var r=i.createElement("link");yn(r,"link",e),t==="style"&&(r[nh]=!0,r.onload=r.onerror=function(){fx(r)}),on(r),i.head.appendChild(r)}}}function Dw(e,t){Os.m(e,t);var n=Ro;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",s='link[rel="modulepreload"][as="'+vi(i)+'"][href="'+vi(e)+'"]',a=s;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":a=Co(e)}if(!Mi.has(a)&&(e=Te({rel:"modulepreload",href:e},t),Mi.set(a,e),n.querySelector(s)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(mc(a)))return}i=n.createElement("link"),yn(i,"link",e),on(i),n.head.appendChild(i)}}}function Lw(e,t,n){Os.S(e,t,n);var i=Ro;if(i&&e){var s=$r(i).hoistableStyles,a=yo(e);t=t||"default";var r=s.get(a);if(!r){var o={loading:0,preload:null};if(r=i.querySelector(pc(a)))o.loading=5;else{e=Te({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Mi.get(a))&&kg(e,n);var l=r=i.createElement("link");on(l),yn(l,"link",e),l._p=new Promise(function(c,f){l.onload=c,l.onerror=f}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,Yu(r,t,i)}r={type:"stylesheet",instance:r,count:1,state:o},s.set(a,r)}}}function Uw(e,t){Os.X(e,t);var n=Ro;if(n&&e){var i=$r(n).hoistableScripts,s=Co(e),a=i.get(s);a||(a=n.querySelector(mc(s)),a||(e=Te({src:e,async:!0},t),(t=Mi.get(s))&&Xg(e,t),a=n.createElement("script"),on(a),yn(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(s,a))}}function Ow(e,t){Os.M(e,t);var n=Ro;if(n&&e){var i=$r(n).hoistableScripts,s=Co(e),a=i.get(s);a||(a=n.querySelector(mc(s)),a||(e=Te({src:e,async:!0,type:"module"},t),(t=Mi.get(s))&&Xg(e,t),a=n.createElement("script"),on(a),yn(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(s,a))}}function By(e,t,n,i){var s=(s=ha.current)?tc(s):null;if(!s)throw Error(Q(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(n=yo(n.href),t=$r(s).hoistableStyles,i=t.get(n),i||(i={type:"style",instance:null,count:0,state:null},t.set(n,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=yo(n.href);var a=$r(s).hoistableStyles,r=a.get(e);if(r||(s=s.ownerDocument||s,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},a.set(e,r),(a=s.querySelector(pc(e)))?a._p||(r.instance=a,r.state.loading=5):(a=Mi.get(e),a||(a={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Mi.set(e,a)),Iw(s,e,a,r.state))),t&&i===null)throw Error(Q(528,""));return r}if(t&&i!==null)throw Error(Q(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(n=Co(n),t=$r(s).hoistableScripts,i=t.get(n),i||(i={type:"script",instance:null,count:0,state:null},t.set(n,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(Q(444,e))}}function yo(e){return'href="'+vi(e)+'"'}function pc(e){return'link[rel="stylesheet"]['+e+"]"}function zM(e){return Te({},e,{"data-precedence":e.precedence,precedence:null})}function Iw(e,t,n,i){if(t=e.querySelector('link[rel="preload"][as="style"]['+t+"]")){if(t[nh]!==!0){i.loading=1;return}}else t=e.createElement("link"),t[nh]=!0,t.onload=t.onerror=fx.bind(null,t),yn(t,"link",n),on(t),e.head.appendChild(t);i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2})}function Co(e){return'[src="'+vi(e)+'"]'}function mc(e){return"script[async]"+e}function zy(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+vi(n.href)+'"]');if(i)return t.instance=i,on(i),i;var s=Te({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),on(i),yn(i,"style",s),Yu(i,n.precedence,e),t.instance=i;case"stylesheet":s=yo(n.href);var a=e.querySelector(pc(s));if(a)return t.state.loading|=4,t.instance=a,on(a),a;i=zM(n),(s=Mi.get(s))&&kg(i,s),a=(e.ownerDocument||e).createElement("link"),on(a);var r=a;return r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),yn(a,"link",i),t.state.loading|=4,Yu(a,n.precedence,e),t.instance=a;case"script":return a=Co(n.src),(s=e.querySelector(mc(a)))?(t.instance=s,on(s),s):(i=n,(s=Mi.get(a))&&(i=Te({},n),Xg(i,s)),e=e.ownerDocument||e,s=e.createElement("script"),on(s),yn(s,"link",i),e.head.appendChild(s),t.instance=s);case"void":return null;default:throw Error(Q(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,Yu(i,n.precedence,e));return t.instance}function Yu(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=i.length?i[i.length-1]:null,a=s,r=0;r<i.length;r++){var o=i[r];if(o.dataset.precedence===t)a=o;else if(a!==s)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function kg(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Xg(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Zu=null;function Fy(e,t,n){if(Zu===null){var i=new Map,s=Zu=new Map;s.set(n,i)}else s=Zu,i=s.get(n),i||(i=new Map,s.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),s=0;s<n.length;s++){var a=n[s];if(!(a[lc]||a[mn]||e==="link"&&a.getAttribute("rel")==="stylesheet")&&a.namespaceURI!=="http://www.w3.org/2000/svg"){var r=a.getAttribute(t)||"";r=e+r;var o=i.get(r);o?o.push(a):i.set(r,[a])}}return i}function qm(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Pw(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Hy(e,t){return e==="img"&&t.src!=null&&t.src!==""&&t.onLoad==null&&t.loading!=="lazy"}function FM(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function HM(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function Gy(e,t){typeof t.decode=="function"&&(e.imgCount++,t.complete||(e.imgBytes+=HM(t),e.suspenseyImages.push(t)),e=Fw.bind(e),t.decode().then(e,e))}function Bw(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var s=yo(i.href),a=t.querySelector(pc(s));if(a){t=a._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=ec.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,on(a);return}a=t.ownerDocument||t,i=zM(i),(s=Mi.get(s))&&kg(i,s),a=a.createElement("link"),on(a);var r=a;r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),yn(a,"link",i),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=ec.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Ju=0;function zw(e,t){return e.stylesheets&&e.count===0&&Ku(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&Ku(e,e.stylesheets),e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}},6e4+t);0<e.imgBytes&&Ju===0&&(Ju=62500*nw());var s=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Ku(e,e.stylesheets),e.unsuspend)){var a=e.unsuspend;e.unsuspend=null,a()}},(e.imgBytes>Ju?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(s)}}:null}function GM(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)Ku(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}}function ec(){this.count--,GM(this)}function Fw(){this.imgCount--,GM(this)}var Eh=null;function Ku(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Eh=new Map,t.forEach(Hw,e),Eh=null,ec.call(e))}function Hw(e,t){if(!(t.state.loading&4)){var n=Eh.get(e);if(n)var i=n.get(null);else{n=new Map,Eh.set(e,n);for(var s=e.querySelectorAll("link[data-precedence],style[data-precedence]"),a=0;a<s.length;a++){var r=s[a];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(n.set(r.dataset.precedence,r),i=r)}i&&n.set(null,i)}s=t.instance,r=s.getAttribute("data-precedence"),a=n.get(r)||i,a===i&&n.set(null,s),n.set(r,s),this.count++,i=ec.bind(this),s.addEventListener("load",i),s.addEventListener("error",i),a?a.parentNode.insertBefore(s,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(s,e.firstChild)),t.state.loading|=4}}var xo={$$typeof:Ki,Provider:null,Consumer:null,_currentValue:$a,_currentValue2:$a,_threadCount:0};function Gw(e,t,n,i,s,a,r,o,l){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=hp(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=hp(0),this.hiddenUpdates=hp(null),this.identifierPrefix=i,this.onUncaughtError=s,this.onCaughtError=a,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.transitionTypes=null,this.incompleteTransitions=new Map}function VM(e,t,n,i,s,a,r,o,l,c,f,p){return e=new Gw(e,t,n,r,l,c,f,p,o),t=1,a===!0&&(t|=24),a=Xn(3,null,null,t),e.current=a,a.stateNode=e,t=ug(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:i,isDehydrated:n,cache:t},dg(a),e}function kM(e){return e?(e=Jr,e):Jr}function XM(e,t,n,i,s,a){s=kM(s),i.context===null?i.context=s:i.pendingContext=s,i=da(t),i.payload={element:n},a=a===void 0?null:a,a!==null&&(i.callback=a),n=pa(e,i,t),n!==null&&(Wn(n,e,t),Ul(n,e,t))}function Vy(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Wg(e,t){Vy(e,t),(e=e.alternate)&&Vy(e,t)}function WM(e){if(e.tag===13||e.tag===31){var t=mr(e,67108864);t!==null&&Wn(t,e,67108864),Wg(e,67108864)}}function ky(e){if(e.tag===13||e.tag===31){var t=ri();t=jm(t);var n=mr(e,t);n!==null&&Wn(n,e,t),Wg(e,t)}}var So=!0;function Vw(e,t,n,i){var s=Ut.T;Ut.T=null;var a=he.p;try{he.p=2,qg(e,t,n,i)}finally{he.p=a,Ut.T=s}}function kw(e,t,n,i){var s=Ut.T;Ut.T=null;var a=he.p;try{he.p=8,qg(e,t,n,i)}finally{he.p=a,Ut.T=s}}function qg(e,t,n,i){if(So){var s=Ym(i);if(s===null)Op(e,t,i,Ah,n),Xy(e,i);else if(Ww(s,e,t,n,i))i.stopPropagation();else if(Xy(e,i),t&4&&-1<Xw.indexOf(e)){for(;s!==null;){var a=To(s);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var r=Za(a.pendingLanes);if(r!==0){var o=a;for(o.pendingLanes|=2,o.entangledLanes|=2;r;){var l=1<<31-ai(r);o.entanglements[1]|=l,r&=~l}ss(a),(ue&6)===0&&(xh=ii()+500,dc(0,!1))}}break;case 31:case 13:o=mr(a,2),o!==null&&Wn(o,a,2),Vh(),Wg(a,2)}if(a=Ym(i),a===null&&Op(e,t,i,Ah,n),a===s)break;s=a}s!==null&&i.stopPropagation()}else Op(e,t,i,null,n)}}function Ym(e){return e=eg(e),Yg(e)}var Ah=null;function Yg(e){if(Ah=null,e=Qa(e),e!==null){var t=sc(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=Ky(t),e!==null)return e;e=null}else if(n===31){if(e=Qy(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Ah=e,null}function qM(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(sE()){case ix:return 2;case sx:return 8;case eh:case aE:return 32;case ax:return 268435456;default:return 32}default:return 32}}var Zm=!1,va=null,ya=null,xa=null,nc=new Map,ic=new Map,sa=[],Xw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Xy(e,t){switch(e){case"focusin":case"focusout":va=null;break;case"dragenter":case"dragleave":ya=null;break;case"mouseover":case"mouseout":xa=null;break;case"pointerover":case"pointerout":nc.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ic.delete(t.pointerId)}}function Ml(e,t,n,i,s,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:a,targetContainers:[s]},t!==null&&(t=To(t),t!==null&&WM(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function Ww(e,t,n,i,s){switch(t){case"focusin":return va=Ml(va,e,t,n,i,s),!0;case"dragenter":return ya=Ml(ya,e,t,n,i,s),!0;case"mouseover":return xa=Ml(xa,e,t,n,i,s),!0;case"pointerover":var a=s.pointerId;return nc.set(a,Ml(nc.get(a)||null,e,t,n,i,s)),!0;case"gotpointercapture":return a=s.pointerId,ic.set(a,Ml(ic.get(a)||null,e,t,n,i,s)),!0}return!1}function YM(e){var t=Qa(e.target);if(t!==null){var n=sc(t);if(n!==null){if(t=n.tag,t===13){if(t=Ky(n),t!==null){e.blockedOn=t,gv(e.priority,function(){ky(n)});return}}else if(t===31){if(t=Qy(n),t!==null){e.blockedOn=t,gv(e.priority,function(){ky(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Qu(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ym(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);Qp=i,n.target.dispatchEvent(i),Qp=null}else return t=To(n),t!==null&&WM(t),e.blockedOn=n,!1;t.shift()}return!0}function Wy(e,t,n){Qu(e)&&n.delete(t)}function qw(){Zm=!1,va!==null&&Qu(va)&&(va=null),ya!==null&&Qu(ya)&&(ya=null),xa!==null&&Qu(xa)&&(xa=null),nc.forEach(Wy),ic.forEach(Wy)}function Du(e,t){e.blockedOn===t&&(e.blockedOn=null,Zm||(Zm=!0,$e.unstable_scheduleCallback($e.unstable_NormalPriority,qw)))}var Lu=null;function qy(e){Lu!==e&&(Lu=e,$e.unstable_scheduleCallback($e.unstable_NormalPriority,function(){Lu===e&&(Lu=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],s=e[t+2];if(typeof i!="function"){if(Yg(i||n)===null)continue;break}var a=To(n);a!==null&&(e.splice(t,3),t-=3,dm(a,{pending:!0,data:s,method:n.method,action:i},i,s))}}))}function Mo(e){function t(l){return Du(l,e)}va!==null&&Du(va,e),ya!==null&&Du(ya,e),xa!==null&&Du(xa,e),nc.forEach(t),ic.forEach(t);for(var n=0;n<sa.length;n++){var i=sa[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<sa.length&&(n=sa[0],n.blockedOn===null);)YM(n),n.blockedOn===null&&sa.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var s=n[i],a=n[i+1],r=s[Yn]||null;if(typeof a=="function")r||qy(n);else if(r){var o=null;if(a&&a.hasAttribute("formAction")){if(s=a,r=a[Yn]||null)o=r.formAction;else if(Yg(s)!==null)continue}else o=r.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),qy(n)}}}function ZM(){function e(a){a.canIntercept&&a.info==="react-transition"&&a.intercept({handler:function(){return new Promise(function(r){return s=r})},focusReset:"manual",scroll:"manual"})}function t(){s!==null&&(s(),s=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var a=navigation.currentEntry;a&&a.url!=null&&navigation.navigate(a.url,{state:a.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,s=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),s!==null&&(s(),s=null)}}}function Zg(e){this._internalRoot=e}Wh.prototype.render=Zg.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(Q(409));var n=t.current,i=ri();XM(n,i,e,t,null,null)};Wh.prototype.unmount=Zg.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;XM(e.current,2,null,e,null,null),Vh(),t[bo]=null}};function Wh(e){this._internalRoot=e}Wh.prototype.unstable_scheduleHydration=function(e){if(e){var t=hx();e={blockedOn:null,target:e,priority:t};for(var n=0;n<sa.length&&t!==0&&t<sa[n].priority;n++);sa.splice(n,0,e),n===0&&YM(e)}};var Yy=Zy.version;if(Yy!=="19.3.0")throw Error(Q(527,Yy,"19.3.0"));he.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(Q(188)):(e=Object.keys(e).join(","),Error(Q(268,e)));return e=YT(t),e=e!==null?jy(e):null,e=e===null?null:e.stateNode,e};var Yw={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:Ut,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(bl=__REACT_DEVTOOLS_GLOBAL_HOOK__,!bl.isDisabled&&bl.supportsFiber))try{ac=bl.inject(Yw),si=bl}catch{}var bl;qh.createRoot=function(e,t){if(!Jy(e))throw Error(Q(299));var n=!1,i="",s=RS,a=CS,r=NS;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(s=t.onUncaughtError),t.onCaughtError!==void 0&&(a=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=VM(e,1,!1,null,null,n,i,null,s,a,r,ZM),e[bo]=t.current,Fg(e),new Zg(t)};qh.hydrateRoot=function(e,t,n){if(!Jy(e))throw Error(Q(299));var i=!1,s="",a=RS,r=CS,o=NS,l=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(a=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.formState!==void 0&&(l=n.formState)),t=VM(e,1,!0,t,n??null,i,s,l,a,r,o,ZM),t.context=kM(null),n=t.current,i=ri(),i=jm(i),s=da(i),s.callback=null,pa(n,s,i),n=i,t.current.lanes=n,oc(t,n),ss(t),e[bo]=t.current,Fg(e),new Wh(t)};qh.version="19.3.0"});var jM=ki((JD,QM)=>{"use strict";function KM(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(KM)}catch(e){console.error(e)}}KM(),QM.exports=JM()});var nT=ki(Vd=>{"use strict";var UD=Symbol.for("react.transitional.element"),OD=Symbol.for("react.fragment");function eT(e,t,n){var i=null;if(n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),"key"in t){n={};for(var s in t)s!=="key"&&(n[s]=t[s])}else n=t;return t=n.ref,{$$typeof:UD,type:e,key:i,ref:t!==void 0?t:null,props:n}}Vd.Fragment=OD;Vd.jsx=eT;Vd.jsxs=eT});var Cr=ki((OI,iT)=>{"use strict";iT.exports=nT()});var hT=vs(jM(),1);var Ln=vs(gl(),1);var vr={hr:88,ventOn:!1,ventRr:16},Yh=null,Zw=0,No=0,_r=0,Jg=null,Kg=!1;function Jw(){let e=window.AudioContext||window.webkitAudioContext;return e?(Yh||(Yh=new e),Yh):null}function Kw(e){if(Jg)return Jg;let t=Math.floor(e.sampleRate*.28),n=e.createBuffer(1,t,e.sampleRate),i=n.getChannelData(0),s=0;for(let a=0;a<t;a++){s=s*.94+(Math.random()*2-1)*.08;let r=Math.sin(a/t*Math.PI);i[a]=s*r*6}return Jg=n,n}function Qw(e,t){let n=e.createOscillator(),i=e.createGain();n.type="sine",n.frequency.value=880,i.gain.setValueAtTime(1e-4,t),i.gain.exponentialRampToValueAtTime(.09,t+.008),i.gain.exponentialRampToValueAtTime(1e-4,t+.07),n.connect(i),i.connect(e.destination),n.start(t),n.stop(t+.08)}function jw(e,t){let n=e.createBufferSource();n.buffer=Kw(e);let i=e.createBiquadFilter();i.type="bandpass",i.frequency.value=420,i.Q.value=.7;let s=e.createGain();s.gain.setValueAtTime(.22,t),n.connect(i),i.connect(s),s.connect(e.destination),n.start(t),n.stop(t+.28)}function $M(){let e=Yh;if(!e||!Kg)return;let t=e.currentTime,n=60/Math.min(180,Math.max(35,vr.hr));for(No<t-.05&&(No=t+.02);No<t+.3;)Qw(e,No),No+=n;if(vr.ventOn){let i=60/Math.min(40,Math.max(6,vr.ventRr));for(_r<t-.05&&(_r=t+.05);_r<t+.3;)jw(e,_r),_r+=i}else _r=t+.2;Zw=window.setTimeout($M,60)}function Do(){let e=Jw();e&&(e.resume(),!Kg&&(Kg=!0,No=e.currentTime+.05,_r=e.currentTime+.12,$M()))}var gs=vs(gl(),1);var Ab=0,w0=1,wb=2;var Vc=1,Rb=2,il=3,Ga=0,Hn=1,Ai=2,br=0,sl=1,R0=2,C0=3,N0=4,Cb=5;var Tr=100,Nb=101,Db=102,Lb=103,Ub=104,Ob=200,Ib=201,Pb=202,Bb=203,D0=204,L0=205,zb=206,Fb=207,Hb=208,Gb=209,Vb=210,kb=211,Xb=212,Wb=213,qb=214,vf=0,yf=1,xf=2,Yo=3,Sf=4,Mf=5,bf=6,Tf=7,U0=0,Yb=1,Zb=2,ds=0,O0=1,I0=2,P0=3,B0=4,z0=5,F0=6,H0=7;var G0=300,Er=301,al=302,Jf=303,Kf=304,Ef=1e3,rs=1001,Af=1002,un=1003,Jb=1004;var kc=1005;var hn=1006,Qf=1007;var qs=1008;var Jn=1009,V0=1010,k0=1011,rl=1012,jf=1013,zi=1014,Fi=1015,Hi=1016,$f=1017,td=1018,Ar=1020,X0=35902,W0=35899,q0=1021,Y0=1022,Gi=1023,Gs=1026,Ys=1027,Z0=1028,ed=1029,Va=1030,nd=1031;var id=1033,Xc=33776,Wc=33777,qc=33778,Yc=33779,sd=35840,ad=35841,rd=35842,od=35843,ld=36196,cd=37492,ud=37496,hd=37488,fd=37489,Zc=37490,dd=37491,pd=37808,md=37809,gd=37810,_d=37811,vd=37812,yd=37813,xd=37814,Sd=37815,Md=37816,bd=37817,Td=37818,Ed=37819,Ad=37820,wd=37821,Rd=36492,Cd=36494,Nd=36495,Dd=36283,Ld=36284,Jc=36285,Ud=36286;var Sc=2300,wf=2301,mf=2302,y0=2303,x0=2400,S0=2401,M0=2402;var Kb=3200;var Od=0,Qb=1,Zs="",Rn="srgb",Mc="srgb-linear",bc="linear",pe="srgb";var gf=7680;var jb=519,$b=512,t1=513,e1=514,J0=515,n1=516,i1=517,K0=518,Q0=519,s1=35044;var j0="300 es",Ti=2e3,Zo=2001;function $w(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function tR(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Jo(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function a1(){let e=Jo("canvas");return e.style.display="block",e}var tb={},Ko=null;function $0(...e){let t="THREE."+e.shift();Ko?Ko("log",t,...e):console.log(t,...e)}function r1(e){let t=e[0];if(typeof t=="string"&&t.startsWith("TSL:")){let n=e[1];n&&n.isStackTrace?e[0]+=" "+n.getLocation():e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function Lt(...e){e=r1(e);let t="THREE."+e.shift();if(Ko)Ko("warn",t,...e);else{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function Ot(...e){e=r1(e);let t="THREE."+e.shift();if(Ko)Ko("error",t,...e);else{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function xc(...e){let t=e.join(" ");t in tb||(tb[t]=!0,Lt(...e))}function o1(e,t,n){return new Promise(function(i,s){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:s();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:i()}}setTimeout(a,n)})}var l1={[vf]:vf,[xf]:bf,[Sf]:Sf,[Yo]:Mf,[yf]:yf,[bf]:xf,[Tf]:Tf,[Mf]:Yo},cs=class{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let a=s.indexOf(n);a!==-1&&s.splice(a,1)}}dispatchEvent(t){let n=this._listeners;if(n===void 0)return;let i=n[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let a=0,r=s.length;a<r;a++)s[a].call(this,t);t.target=null}}},An=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Qg=Math.PI/180,Rf=180/Math.PI;function Kc(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(An[e&255]+An[e>>8&255]+An[e>>16&255]+An[e>>24&255]+"-"+An[t&255]+An[t>>8&255]+"-"+An[t>>16&15|64]+An[t>>24&255]+"-"+An[n&63|128]+An[n>>8&255]+"-"+An[n>>16&255]+An[n>>24&255]+An[i&255]+An[i>>8&255]+An[i>>16&255]+An[i>>24&255]).toLowerCase()}function se(e,t,n){return Math.max(t,Math.min(n,e))}function eR(e,t){return(e%t+t)%t}function jg(e,t,n){return(1-n)*e+n*t}function c1(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function t_(e){switch(e.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function nR(e,t){if(t.constructor===Float32Array)return e;let n=t_(t);if(n===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(e/n,-1)}function iR(e,t){if(t.constructor===Float32Array)return e;let n=t_(t);if(n===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(e*n)}var jt=class{static{this.prototype.isVector2=!0}constructor(t=0,n=0){this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let n=this.x,i=this.y,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=se(this.x,t.x,n.x),this.y=se(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=se(this.x,t,n),this.y=se(this.y,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(se(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(se(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){let i=Math.cos(n),s=Math.sin(n),a=this.x-t.x,r=this.y-t.y;return this.x=a*i-r*s+t.x,this.y=a*s+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},us=class{constructor(t=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=s}static slerpFlat(t,n,i,s,a,r,o){let l=i[s+0],c=i[s+1],f=i[s+2],p=i[s+3],u=a[r+0],d=a[r+1],v=a[r+2],M=a[r+3];if(p!==M||l!==u||c!==d||f!==v){let g=l*u+c*d+f*v+p*M;g<0&&(u=-u,d=-d,v=-v,M=-M,g=-g);let h=1-o;if(g<.9995){let m=Math.acos(g),y=Math.sin(m);h=Math.sin(h*m)/y,o=Math.sin(o*m)/y,l=l*h+u*o,c=c*h+d*o,f=f*h+v*o,p=p*h+M*o}else{l=l*h+u*o,c=c*h+d*o,f=f*h+v*o,p=p*h+M*o;let m=1/Math.sqrt(l*l+c*c+f*f+p*p);l*=m,c*=m,f*=m,p*=m}}t[n]=l,t[n+1]=c,t[n+2]=f,t[n+3]=p}static multiplyQuaternionsFlat(t,n,i,s,a,r){let o=i[s],l=i[s+1],c=i[s+2],f=i[s+3],p=a[r],u=a[r+1],d=a[r+2],v=a[r+3];return t[n]=o*v+f*p+l*d-c*u,t[n+1]=l*v+f*u+c*p-o*d,t[n+2]=c*v+f*d+o*u-l*p,t[n+3]=f*v-o*p-l*u-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,s){return this._x=t,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){let i=t._x,s=t._y,a=t._z,r=t._order,o=Math.cos,l=Math.sin,c=o(i/2),f=o(s/2),p=o(a/2),u=l(i/2),d=l(s/2),v=l(a/2);switch(r){case"XYZ":this._x=u*f*p+c*d*v,this._y=c*d*p-u*f*v,this._z=c*f*v+u*d*p,this._w=c*f*p-u*d*v;break;case"YXZ":this._x=u*f*p+c*d*v,this._y=c*d*p-u*f*v,this._z=c*f*v-u*d*p,this._w=c*f*p+u*d*v;break;case"ZXY":this._x=u*f*p-c*d*v,this._y=c*d*p+u*f*v,this._z=c*f*v+u*d*p,this._w=c*f*p-u*d*v;break;case"ZYX":this._x=u*f*p-c*d*v,this._y=c*d*p+u*f*v,this._z=c*f*v-u*d*p,this._w=c*f*p+u*d*v;break;case"YZX":this._x=u*f*p+c*d*v,this._y=c*d*p+u*f*v,this._z=c*f*v-u*d*p,this._w=c*f*p-u*d*v;break;case"XZY":this._x=u*f*p-c*d*v,this._y=c*d*p-u*f*v,this._z=c*f*v+u*d*p,this._w=c*f*p+u*d*v;break;default:Lt("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){let i=n/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let n=t.elements,i=n[0],s=n[4],a=n[8],r=n[1],o=n[5],l=n[9],c=n[2],f=n[6],p=n[10],u=i+o+p;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(f-l)*d,this._y=(a-c)*d,this._z=(r-s)*d}else if(i>o&&i>p){let d=2*Math.sqrt(1+i-o-p);this._w=(f-l)/d,this._x=.25*d,this._y=(s+r)/d,this._z=(a+c)/d}else if(o>p){let d=2*Math.sqrt(1+o-i-p);this._w=(a-c)/d,this._x=(s+r)/d,this._y=.25*d,this._z=(l+f)/d}else{let d=2*Math.sqrt(1+p-i-o);this._w=(r-s)/d,this._x=(a+c)/d,this._y=(l+f)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(se(this.dot(t),-1,1)))}rotateTowards(t,n){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,n/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){let i=t._x,s=t._y,a=t._z,r=t._w,o=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+r*o+s*c-a*l,this._y=s*f+r*l+a*o-i*c,this._z=a*f+r*c+i*l-s*o,this._w=r*f-i*o-s*l-a*c,this._onChangeCallback(),this}slerp(t,n){let i=t._x,s=t._y,a=t._z,r=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,a=-a,r=-r,o=-o);let l=1-n;if(o<.9995){let c=Math.acos(o),f=Math.sin(c);l=Math.sin(l*c)/f,n=Math.sin(n*c)/f,this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+a*n,this._w=this._w*l+r*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+a*n,this._w=this._w*l+r*n,this.normalize();return this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){let t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),a*Math.sin(n),a*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},V=class{static{this.prototype.isVector3=!0}constructor(t=0,n=0,i=0){this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(eb.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(eb.setFromAxisAngle(t,n))}applyMatrix3(t){let n=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*n+a[3]*i+a[6]*s,this.y=a[1]*n+a[4]*i+a[7]*s,this.z=a[2]*n+a[5]*i+a[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,a=t.elements,r=1/(a[3]*n+a[7]*i+a[11]*s+a[15]);return this.x=(a[0]*n+a[4]*i+a[8]*s+a[12])*r,this.y=(a[1]*n+a[5]*i+a[9]*s+a[13])*r,this.z=(a[2]*n+a[6]*i+a[10]*s+a[14])*r,this}applyQuaternion(t){let n=this.x,i=this.y,s=this.z,a=t.x,r=t.y,o=t.z,l=t.w,c=2*(r*s-o*i),f=2*(o*n-a*s),p=2*(a*i-r*n);return this.x=n+l*c+r*p-o*f,this.y=i+l*f+o*c-a*p,this.z=s+l*p+a*f-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let n=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*n+a[4]*i+a[8]*s,this.y=a[1]*n+a[5]*i+a[9]*s,this.z=a[2]*n+a[6]*i+a[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=se(this.x,t.x,n.x),this.y=se(this.y,t.y,n.y),this.z=se(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=se(this.x,t,n),this.y=se(this.y,t,n),this.z=se(this.z,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(se(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){let i=t.x,s=t.y,a=t.z,r=n.x,o=n.y,l=n.z;return this.x=s*l-a*o,this.y=a*r-i*l,this.z=i*o-s*r,this}projectOnVector(t){let n=t.lengthSq();if(n===0)return this.set(0,0,0);let i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return $g.copy(this).projectOnVector(t),this.sub($g)}reflect(t){return this.sub($g.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(se(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return n*n+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){let s=Math.sin(n)*t;return this.x=s*Math.sin(i),this.y=Math.cos(n)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){let n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},$g=new V,eb=new us,Pt=class{static{this.prototype.isMatrix3=!0}constructor(t,n,i,s,a,r,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,s,a,r,o,l,c)}set(t,n,i,s,a,r,o,l,c){let f=this.elements;return f[0]=t,f[1]=s,f[2]=o,f[3]=n,f[4]=a,f[5]=l,f[6]=i,f[7]=r,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,a=this.elements,r=i[0],o=i[3],l=i[6],c=i[1],f=i[4],p=i[7],u=i[2],d=i[5],v=i[8],M=s[0],g=s[3],h=s[6],m=s[1],y=s[4],x=s[7],E=s[2],w=s[5],_=s[8];return a[0]=r*M+o*m+l*E,a[3]=r*g+o*y+l*w,a[6]=r*h+o*x+l*_,a[1]=c*M+f*m+p*E,a[4]=c*g+f*y+p*w,a[7]=c*h+f*x+p*_,a[2]=u*M+d*m+v*E,a[5]=u*g+d*y+v*w,a[8]=u*h+d*x+v*_,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],f=t[8];return n*r*f-n*o*c-i*a*f+i*o*l+s*a*c-s*r*l}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],f=t[8],p=f*r-o*c,u=o*l-f*a,d=c*a-r*l,v=n*p+i*u+s*d;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/v;return t[0]=p*M,t[1]=(s*c-f*i)*M,t[2]=(o*i-s*r)*M,t[3]=u*M,t[4]=(f*n-s*l)*M,t[5]=(s*a-o*n)*M,t[6]=d*M,t[7]=(i*l-c*n)*M,t[8]=(r*n-i*a)*M,this}transpose(){let t,n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,s,a,r,o){let l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*r+c*o)+r+t,-s*c,s*l,-s*(-c*r+l*o)+o+n,0,0,1),this}scale(t,n){return xc("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(t0.makeScale(t,n)),this}rotate(t){return xc("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(t0.makeRotation(-t)),this}translate(t,n){return xc("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(t0.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},t0=new Pt,nb=new Pt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ib=new Pt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function sR(){let e={enabled:!0,workingColorSpace:Mc,spaces:{},convert:function(s,a,r){return this.enabled===!1||a===r||!a||!r||(this.spaces[a].transfer===pe&&(s.r=Hs(s.r),s.g=Hs(s.g),s.b=Hs(s.b)),this.spaces[a].primaries!==this.spaces[r].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===pe&&(s.r=qo(s.r),s.g=qo(s.g),s.b=qo(s.b))),s},workingToColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},colorSpaceToWorking:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Zs?bc:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,r){return s.copy(this.spaces[r].fromXYZ).multiply(this.spaces[a].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return e.define({[Mc]:{primaries:t,whitePoint:i,transfer:bc,toXYZ:nb,fromXYZ:ib,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Rn},outputColorSpaceConfig:{drawingBufferColorSpace:Rn}},[Rn]:{primaries:t,whitePoint:i,transfer:pe,toXYZ:nb,fromXYZ:ib,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Rn}}}),e}var ne=sR();function Hs(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function qo(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var Lo,Cf=class{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Lo===void 0&&(Lo=Jo("canvas")),Lo.width=t.width,Lo.height=t.height;let s=Lo.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Lo}return i.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let n=Jo("canvas");n.width=t.width,n.height=t.height;let i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),a=s.data;for(let r=0;r<a.length;r++)a[r]=Hs(a[r]/255)*255;return i.putImageData(s,0,0),n}else if(t.data){let n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Hs(n[i]/255)*255):n[i]=Hs(n[i]);return{data:n,width:t.width,height:t.height}}else return Lt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},aR=0,Qo=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:aR++}),this.uuid=Kc(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?t.set(n.displayWidth,n.displayHeight,0):n!==null?t.set(n.width||0,n.height||0,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let r=0,o=s.length;r<o;r++)s[r].isDataTexture?a.push(e0(s[r].image)):a.push(e0(s[r]))}else a=e0(s);i.url=a}return n||(t.images[this.uuid]=i),i}};function e0(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?Cf.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(Lt("Texture: Unable to serialize Texture."),{})}var rR=0,n0=new V,Cn=class e extends cs{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,i=rs,s=rs,a=hn,r=qs,o=Gi,l=Jn,c=e.DEFAULT_ANISOTROPY,f=Zs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rR++}),this.uuid=Kc(),this.name="",this.source=new Qo(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new jt(0,0),this.repeat=new jt(1,1),this.center=new jt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Pt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(n0).x}get height(){return this.source.getSize(n0).y}get depth(){return this.source.getSize(n0).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let n in t){let i=t[n];if(i===void 0){Lt(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){Lt(`Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==G0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ef:t.x=t.x-Math.floor(t.x);break;case rs:t.x=t.x<0?0:1;break;case Af:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ef:t.y=t.y-Math.floor(t.y);break;case rs:t.y=t.y<0?0:1;break;case Af:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Cn.DEFAULT_IMAGE=null;Cn.DEFAULT_MAPPING=G0;Cn.DEFAULT_ANISOTROPY=1;var Pe=class{static{this.prototype.isVector4=!0}constructor(t=0,n=0,i=0,s=1){this.x=t,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,s){return this.x=t,this.y=n,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,a=this.w,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*s+r[12]*a,this.y=r[1]*n+r[5]*i+r[9]*s+r[13]*a,this.z=r[2]*n+r[6]*i+r[10]*s+r[14]*a,this.w=r[3]*n+r[7]*i+r[11]*s+r[15]*a,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,s,a,l=t.elements,c=l[0],f=l[4],p=l[8],u=l[1],d=l[5],v=l[9],M=l[2],g=l[6],h=l[10];if(Math.abs(f-u)<.01&&Math.abs(p-M)<.01&&Math.abs(v-g)<.01){if(Math.abs(f+u)<.1&&Math.abs(p+M)<.1&&Math.abs(v+g)<.1&&Math.abs(c+d+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let y=(c+1)/2,x=(d+1)/2,E=(h+1)/2,w=(f+u)/4,_=(p+M)/4,T=(v+g)/4;return y>x&&y>E?y<.01?(i=0,s=.707106781,a=.707106781):(i=Math.sqrt(y),s=w/i,a=_/i):x>E?x<.01?(i=.707106781,s=0,a=.707106781):(s=Math.sqrt(x),i=w/s,a=T/s):E<.01?(i=.707106781,s=.707106781,a=0):(a=Math.sqrt(E),i=_/a,s=T/a),this.set(i,s,a,n),this}let m=Math.sqrt((g-v)*(g-v)+(p-M)*(p-M)+(u-f)*(u-f));return Math.abs(m)<.001&&(m=1),this.x=(g-v)/m,this.y=(p-M)/m,this.z=(u-f)/m,this.w=Math.acos((c+d+h-1)/2),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=se(this.x,t.x,n.x),this.y=se(this.y,t.y,n.y),this.z=se(this.z,t.z,n.z),this.w=se(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=se(this.x,t,n),this.y=se(this.y,t,n),this.z=se(this.z,t,n),this.w=se(this.w,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(se(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Nf=class extends cs{constructor(t=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=i.depth,this.scissor=new Pe(0,0,t,n),this.scissorTest=!1,this.viewport=new Pe(0,0,t,n),this.textures=[];let s=i.count;for(let a=0;a<s;a++)this.textures[a]=new Cn({width:t,height:n,depth:i.depth}),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let n={minFilter:hn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(n.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=t,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;let s=Object.assign({},t.textures[n].image);this.textures[n].source=new Qo(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let n=t.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},hi=class extends Nf{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}},Tc=class extends Cn{constructor(t=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=un,this.minFilter=un,this.wrapR=rs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Df=class extends Cn{constructor(t=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=un,this.minFilter=un,this.wrapR=rs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Le=class e{static{this.prototype.isMatrix4=!0}constructor(t,n,i,s,a,r,o,l,c,f,p,u,d,v,M,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,s,a,r,o,l,c,f,p,u,d,v,M,g)}set(t,n,i,s,a,r,o,l,c,f,p,u,d,v,M,g){let h=this.elements;return h[0]=t,h[4]=n,h[8]=i,h[12]=s,h[1]=a,h[5]=r,h[9]=o,h[13]=l,h[2]=c,h[6]=f,h[10]=p,h[14]=u,h[3]=d,h[7]=v,h[11]=M,h[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){let n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){let n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return this.determinantAffine()===0?(t.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let n=this.elements,i=t.elements,s=1/Uo.setFromMatrixColumn(t,0).length(),a=1/Uo.setFromMatrixColumn(t,1).length(),r=1/Uo.setFromMatrixColumn(t,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*a,n[5]=i[5]*a,n[6]=i[6]*a,n[7]=0,n[8]=i[8]*r,n[9]=i[9]*r,n[10]=i[10]*r,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){let n=this.elements,i=t.x,s=t.y,a=t.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),f=Math.cos(a),p=Math.sin(a);if(t.order==="XYZ"){let u=r*f,d=r*p,v=o*f,M=o*p;n[0]=l*f,n[4]=-l*p,n[8]=c,n[1]=d+v*c,n[5]=u-M*c,n[9]=-o*l,n[2]=M-u*c,n[6]=v+d*c,n[10]=r*l}else if(t.order==="YXZ"){let u=l*f,d=l*p,v=c*f,M=c*p;n[0]=u+M*o,n[4]=v*o-d,n[8]=r*c,n[1]=r*p,n[5]=r*f,n[9]=-o,n[2]=d*o-v,n[6]=M+u*o,n[10]=r*l}else if(t.order==="ZXY"){let u=l*f,d=l*p,v=c*f,M=c*p;n[0]=u-M*o,n[4]=-r*p,n[8]=v+d*o,n[1]=d+v*o,n[5]=r*f,n[9]=M-u*o,n[2]=-r*c,n[6]=o,n[10]=r*l}else if(t.order==="ZYX"){let u=r*f,d=r*p,v=o*f,M=o*p;n[0]=l*f,n[4]=v*c-d,n[8]=u*c+M,n[1]=l*p,n[5]=M*c+u,n[9]=d*c-v,n[2]=-c,n[6]=o*l,n[10]=r*l}else if(t.order==="YZX"){let u=r*l,d=r*c,v=o*l,M=o*c;n[0]=l*f,n[4]=M-u*p,n[8]=v*p+d,n[1]=p,n[5]=r*f,n[9]=-o*f,n[2]=-c*f,n[6]=d*p+v,n[10]=u-M*p}else if(t.order==="XZY"){let u=r*l,d=r*c,v=o*l,M=o*c;n[0]=l*f,n[4]=-p,n[8]=c*f,n[1]=u*p+M,n[5]=r*f,n[9]=d*p-v,n[2]=v*p-d,n[6]=o*f,n[10]=M*p+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(oR,t,lR)}lookAt(t,n,i){let s=this.elements;return ci.subVectors(t,n),ci.lengthSq()===0&&(ci.z=1),ci.normalize(),Ra.crossVectors(i,ci),Ra.lengthSq()===0&&(Math.abs(i.z)===1?ci.x+=1e-4:ci.z+=1e-4,ci.normalize(),Ra.crossVectors(i,ci)),Ra.normalize(),Zh.crossVectors(ci,Ra),s[0]=Ra.x,s[4]=Zh.x,s[8]=ci.x,s[1]=Ra.y,s[5]=Zh.y,s[9]=ci.y,s[2]=Ra.z,s[6]=Zh.z,s[10]=ci.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,a=this.elements,r=i[0],o=i[4],l=i[8],c=i[12],f=i[1],p=i[5],u=i[9],d=i[13],v=i[2],M=i[6],g=i[10],h=i[14],m=i[3],y=i[7],x=i[11],E=i[15],w=s[0],_=s[4],T=s[8],O=s[12],R=s[1],D=s[5],I=s[9],G=s[13],N=s[2],k=s[6],X=s[10],F=s[14],nt=s[3],W=s[7],$=s[11],et=s[15];return a[0]=r*w+o*R+l*N+c*nt,a[4]=r*_+o*D+l*k+c*W,a[8]=r*T+o*I+l*X+c*$,a[12]=r*O+o*G+l*F+c*et,a[1]=f*w+p*R+u*N+d*nt,a[5]=f*_+p*D+u*k+d*W,a[9]=f*T+p*I+u*X+d*$,a[13]=f*O+p*G+u*F+d*et,a[2]=v*w+M*R+g*N+h*nt,a[6]=v*_+M*D+g*k+h*W,a[10]=v*T+M*I+g*X+h*$,a[14]=v*O+M*G+g*F+h*et,a[3]=m*w+y*R+x*N+E*nt,a[7]=m*_+y*D+x*k+E*W,a[11]=m*T+y*I+x*X+E*$,a[15]=m*O+y*G+x*F+E*et,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[4],s=t[8],a=t[12],r=t[1],o=t[5],l=t[9],c=t[13],f=t[2],p=t[6],u=t[10],d=t[14],v=t[3],M=t[7],g=t[11],h=t[15],m=l*d-c*u,y=o*d-c*p,x=o*u-l*p,E=r*d-c*f,w=r*u-l*f,_=r*p-o*f;return n*(M*m-g*y+h*x)-i*(v*m-g*E+h*w)+s*(v*y-M*E+h*_)-a*(v*x-M*w+g*_)}determinantAffine(){let t=this.elements,n=t[0],i=t[4],s=t[8],a=t[1],r=t[5],o=t[9],l=t[2],c=t[6],f=t[10];return n*(r*f-o*c)-i*(a*f-o*l)+s*(a*c-r*l)}transpose(){let t=this.elements,n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=n,s[14]=i),this}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],f=t[8],p=t[9],u=t[10],d=t[11],v=t[12],M=t[13],g=t[14],h=t[15],m=n*o-i*r,y=n*l-s*r,x=n*c-a*r,E=i*l-s*o,w=i*c-a*o,_=s*c-a*l,T=f*M-p*v,O=f*g-u*v,R=f*h-d*v,D=p*g-u*M,I=p*h-d*M,G=u*h-d*g,N=m*G-y*I+x*D+E*R-w*O+_*T;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/N;return t[0]=(o*G-l*I+c*D)*k,t[1]=(s*I-i*G-a*D)*k,t[2]=(M*_-g*w+h*E)*k,t[3]=(u*w-p*_-d*E)*k,t[4]=(l*R-r*G-c*O)*k,t[5]=(n*G-s*R+a*O)*k,t[6]=(g*x-v*_-h*y)*k,t[7]=(f*_-u*x+d*y)*k,t[8]=(r*I-o*R+c*T)*k,t[9]=(i*R-n*I-a*T)*k,t[10]=(v*w-M*x+h*m)*k,t[11]=(p*x-f*w-d*m)*k,t[12]=(o*O-r*D-l*T)*k,t[13]=(n*D-i*O+s*T)*k,t[14]=(M*y-v*E-g*m)*k,t[15]=(f*E-p*y+u*m)*k,this}scale(t){let n=this.elements,i=t.x,s=t.y,a=t.z;return n[0]*=i,n[4]*=s,n[8]*=a,n[1]*=i,n[5]*=s,n[9]*=a,n[2]*=i,n[6]*=s,n[10]*=a,n[3]*=i,n[7]*=s,n[11]*=a,this}getMaxScaleOnAxis(){let t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){let n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){let i=Math.cos(n),s=Math.sin(n),a=1-i,r=t.x,o=t.y,l=t.z,c=a*r,f=a*o;return this.set(c*r+i,c*o-s*l,c*l+s*o,0,c*o+s*l,f*o+i,f*l-s*r,0,c*l-s*o,f*l+s*r,a*l*l+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,s,a,r){return this.set(1,i,a,0,t,1,r,0,n,s,1,0,0,0,0,1),this}compose(t,n,i){let s=this.elements,a=n._x,r=n._y,o=n._z,l=n._w,c=a+a,f=r+r,p=o+o,u=a*c,d=a*f,v=a*p,M=r*f,g=r*p,h=o*p,m=l*c,y=l*f,x=l*p,E=i.x,w=i.y,_=i.z;return s[0]=(1-(M+h))*E,s[1]=(d+x)*E,s[2]=(v-y)*E,s[3]=0,s[4]=(d-x)*w,s[5]=(1-(u+h))*w,s[6]=(g+m)*w,s[7]=0,s[8]=(v+y)*_,s[9]=(g-m)*_,s[10]=(1-(u+M))*_,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,n,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let a=this.determinantAffine();if(a===0)return i.set(1,1,1),n.identity(),this;let r=Uo.set(s[0],s[1],s[2]).length(),o=Uo.set(s[4],s[5],s[6]).length(),l=Uo.set(s[8],s[9],s[10]).length();a<0&&(r=-r),Oi.copy(this);let c=1/r,f=1/o,p=1/l;return Oi.elements[0]*=c,Oi.elements[1]*=c,Oi.elements[2]*=c,Oi.elements[4]*=f,Oi.elements[5]*=f,Oi.elements[6]*=f,Oi.elements[8]*=p,Oi.elements[9]*=p,Oi.elements[10]*=p,n.setFromRotationMatrix(Oi),i.x=r,i.y=o,i.z=l,this}makePerspective(t,n,i,s,a,r,o=Ti,l=!1){let c=this.elements,f=2*a/(n-t),p=2*a/(i-s),u=(n+t)/(n-t),d=(i+s)/(i-s),v,M;if(l)v=a/(r-a),M=r*a/(r-a);else if(o===Ti)v=-(r+a)/(r-a),M=-2*r*a/(r-a);else if(o===Zo)v=-r/(r-a),M=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=p,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,n,i,s,a,r,o=Ti,l=!1){let c=this.elements,f=2/(n-t),p=2/(i-s),u=-(n+t)/(n-t),d=-(i+s)/(i-s),v,M;if(l)v=1/(r-a),M=r/(r-a);else if(o===Ti)v=-2/(r-a),M=-(r+a)/(r-a);else if(o===Zo)v=-1/(r-a),M=-a/(r-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=p,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=v,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}},Uo=new V,Oi=new Le,oR=new V(0,0,0),lR=new V(1,1,1),Ra=new V,Zh=new V,ci=new V,sb=new Le,ab=new us,Vs=class e{constructor(t=0,n=0,i=0,s=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,s=this._order){return this._x=t,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){let s=t.elements,a=s[0],r=s[4],o=s[8],l=s[1],c=s[5],f=s[9],p=s[2],u=s[6],d=s[10];switch(n){case"XYZ":this._y=Math.asin(se(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,d),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-se(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,a),this._z=0);break;case"ZXY":this._x=Math.asin(se(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-p,d),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-se(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(se(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-p,a)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-se(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-f,d),this._y=0);break;default:Lt("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return sb.makeRotationFromQuaternion(t),this.setFromRotationMatrix(sb,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return ab.setFromEuler(this),this.setFromQuaternion(ab,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Vs.DEFAULT_ORDER="XYZ";var jo=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},cR=0,rb=new V,Oo=new us,Is=new Le,Jh=new V,gc=new V,uR=new V,hR=new us,ob=new V(1,0,0),lb=new V(0,1,0),cb=new V(0,0,1),ub={type:"added"},fR={type:"removed"},Io={type:"childadded",child:null},i0={type:"childremoved",child:null},Nn=class e extends cs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cR++}),this.uuid=Kc(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new V,n=new Vs,i=new us,s=new V(1,1,1);function a(){i.setFromEuler(n,!1)}function r(){n.setFromQuaternion(i,void 0,!1)}n._onChange(a),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Le},normalMatrix:{value:new Pt}}),this.matrix=new Le,this.matrixWorld=new Le,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Oo.setFromAxisAngle(t,n),this.quaternion.multiply(Oo),this}rotateOnWorldAxis(t,n){return Oo.setFromAxisAngle(t,n),this.quaternion.premultiply(Oo),this}rotateX(t){return this.rotateOnAxis(ob,t)}rotateY(t){return this.rotateOnAxis(lb,t)}rotateZ(t){return this.rotateOnAxis(cb,t)}translateOnAxis(t,n){return rb.copy(t).applyQuaternion(this.quaternion),this.position.add(rb.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(ob,t)}translateY(t){return this.translateOnAxis(lb,t)}translateZ(t){return this.translateOnAxis(cb,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Is.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?Jh.copy(t):Jh.set(t,n,i);let s=this.parent;this.updateWorldMatrix(!0,!1),gc.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Is.lookAt(gc,Jh,this.up):Is.lookAt(Jh,gc,this.up),this.quaternion.setFromRotationMatrix(Is),s&&(Is.extractRotation(s.matrixWorld),Oo.setFromRotationMatrix(Is),this.quaternion.premultiply(Oo.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(Ot("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ub),Io.child=t,this.dispatchEvent(Io),Io.child=null):Ot("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(fR),i0.child=t,this.dispatchEvent(i0),i0.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Is.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Is.multiply(t.parent.matrixWorld)),t.applyMatrix4(Is),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ub),Io.child=t,this.dispatchEvent(Io),Io.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,s=this.children.length;i<s;i++){let r=this.children[i].getObjectByProperty(t,n);if(r!==void 0)return r}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);let s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gc,t,uR),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gc,hR,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(t)}traverseAncestors(t){let n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let n=t.x,i=t.y,s=t.z,a=this.matrix.elements;a[12]+=n-a[0]*n-a[4]*i-a[8]*s,a[13]+=i-a[1]*n-a[5]*i-a[9]*s,a[14]+=s-a[2]*n-a[6]*i-a[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){let a=this.children;for(let r=0,o=a.length;r<o;r++)a[r].updateWorldMatrix(!1,!0,i)}}toJSON(t){let n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){let p=l[c];a(t.shapes,p)}else a(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(t.materials,this.material[l]));s.material=o}else s.material=a(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(a(t.animations,l))}}if(n){let o=r(t.geometries),l=r(t.materials),c=r(t.textures),f=r(t.images),p=r(t.shapes),u=r(t.skeletons),d=r(t.animations),v=r(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),p.length>0&&(i.shapes=p),u.length>0&&(i.skeletons=u),d.length>0&&(i.animations=d),v.length>0&&(i.nodes=v)}return i.object=s,i;function r(o){let l=[];for(let c in o){let f=o[c];delete f.metadata,l.push(f)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Nn.DEFAULT_UP=new V(0,1,0);Nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var os=class extends Nn{constructor(){super(),this.isGroup=!0,this.type="Group"}},dR={type:"move"},$o=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new os,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new os,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new os,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let n=this._hand;if(n)for(let i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let s=null,a=null,r=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(let M of t.hand.values()){let g=n.getJointPose(M,i),h=this._getHandJoint(c,M);g!==null&&(h.matrix.fromArray(g.transform.matrix),h.matrix.decompose(h.position,h.quaternion,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=g.radius),h.visible=g!==null}let f=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],u=f.position.distanceTo(p.position),d=.02,v=.005;c.inputState.pinching&&u>d+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=d-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(a=n.getPose(t.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=n.getPose(t.targetRaySpace,i),s===null&&a!==null&&(s=a),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(dR)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){let i=new os;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}},u1={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ca={h:0,s:0,l:0},Kh={h:0,s:0,l:0};function s0(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var qt=class{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=Rn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ne.colorSpaceToWorking(this,n),this}setRGB(t,n,i,s=ne.workingColorSpace){return this.r=t,this.g=n,this.b=i,ne.colorSpaceToWorking(this,s),this}setHSL(t,n,i,s=ne.workingColorSpace){if(t=eR(t,1),n=se(n,0,1),i=se(i,0,1),n===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+n):i+n-i*n,r=2*i-a;this.r=s0(r,a,t+1/3),this.g=s0(r,a,t),this.b=s0(r,a,t-1/3)}return ne.colorSpaceToWorking(this,s),this}setStyle(t,n=Rn){function i(a){a!==void 0&&parseFloat(a)<1&&Lt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let a,r=s[1],o=s[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,n);if(a=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseFloat(a[1]))/100,Math.min(100,parseFloat(a[2]))/100,Math.min(100,parseFloat(a[3]))/100,n);break;case"hsl":case"hsla":if(a=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,n);break;default:Lt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let a=s[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,n);if(r===6)return this.setHex(parseInt(a,16),n);Lt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=Rn){let i=u1[t.toLowerCase()];return i!==void 0?this.setHex(i,n):Lt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Hs(t.r),this.g=Hs(t.g),this.b=Hs(t.b),this}copyLinearToSRGB(t){return this.r=qo(t.r),this.g=qo(t.g),this.b=qo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Rn){return ne.workingToColorSpace(wn.copy(this),t),Math.round(se(wn.r*255,0,255))*65536+Math.round(se(wn.g*255,0,255))*256+Math.round(se(wn.b*255,0,255))}getHexString(t=Rn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=ne.workingColorSpace){ne.workingToColorSpace(wn.copy(this),n);let i=wn.r,s=wn.g,a=wn.b,r=Math.max(i,s,a),o=Math.min(i,s,a),l,c,f=(o+r)/2;if(o===r)l=0,c=0;else{let p=r-o;switch(c=f<=.5?p/(r+o):p/(2-r-o),r){case i:l=(s-a)/p+(s<a?6:0);break;case s:l=(a-i)/p+2;break;case a:l=(i-s)/p+4;break}l/=6}return t.h=l,t.s=c,t.l=f,t}getRGB(t,n=ne.workingColorSpace){return ne.workingToColorSpace(wn.copy(this),n),t.r=wn.r,t.g=wn.g,t.b=wn.b,t}getStyle(t=Rn){ne.workingToColorSpace(wn.copy(this),t);let n=wn.r,i=wn.g,s=wn.b;return t!==Rn?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,n,i){return this.getHSL(Ca),this.setHSL(Ca.h+t,Ca.s+n,Ca.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(Ca),t.getHSL(Kh);let i=jg(Ca.h,Kh.h,n),s=jg(Ca.s,Kh.s,n),a=jg(Ca.l,Kh.l,n);return this.setHSL(i,s,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let n=this.r,i=this.g,s=this.b,a=t.elements;return this.r=a[0]*n+a[3]*i+a[6]*s,this.g=a[1]*n+a[4]*i+a[7]*s,this.b=a[2]*n+a[5]*i+a[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},wn=new qt;qt.NAMES=u1;var Ec=class e{constructor(t,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new qt(t),this.near=n,this.far=i}clone(){return new e(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ac=class extends Nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vs,this.environmentIntensity=1,this.environmentRotation=new Vs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}},Ii=new V,Ps=new V,a0=new V,Bs=new V,Po=new V,Bo=new V,hb=new V,r0=new V,o0=new V,l0=new V,c0=new Pe,u0=new Pe,h0=new Pe,Ua=class e{constructor(t=new V,n=new V,i=new V){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,s){s.subVectors(i,n),Ii.subVectors(t,n),s.cross(Ii);let a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(t,n,i,s,a){Ii.subVectors(s,n),Ps.subVectors(i,n),a0.subVectors(t,n);let r=Ii.dot(Ii),o=Ii.dot(Ps),l=Ii.dot(a0),c=Ps.dot(Ps),f=Ps.dot(a0),p=r*c-o*o;if(p===0)return a.set(0,0,0),null;let u=1/p,d=(c*l-o*f)*u,v=(r*f-o*l)*u;return a.set(1-d-v,v,d)}static containsPoint(t,n,i,s){return this.getBarycoord(t,n,i,s,Bs)===null?!1:Bs.x>=0&&Bs.y>=0&&Bs.x+Bs.y<=1}static getInterpolation(t,n,i,s,a,r,o,l){return this.getBarycoord(t,n,i,s,Bs)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,Bs.x),l.addScaledVector(r,Bs.y),l.addScaledVector(o,Bs.z),l)}static getInterpolatedAttribute(t,n,i,s,a,r){return c0.setScalar(0),u0.setScalar(0),h0.setScalar(0),c0.fromBufferAttribute(t,n),u0.fromBufferAttribute(t,i),h0.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(c0,a.x),r.addScaledVector(u0,a.y),r.addScaledVector(h0,a.z),r}static isFrontFacing(t,n,i,s){return Ii.subVectors(i,n),Ps.subVectors(t,n),Ii.cross(Ps).dot(s)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,s){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,n,i,s){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ii.subVectors(this.c,this.b),Ps.subVectors(this.a,this.b),Ii.cross(Ps).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,s,a){return e.getInterpolation(t,this.a,this.b,this.c,n,i,s,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){let i=this.a,s=this.b,a=this.c,r,o;Po.subVectors(s,i),Bo.subVectors(a,i),r0.subVectors(t,i);let l=Po.dot(r0),c=Bo.dot(r0);if(l<=0&&c<=0)return n.copy(i);o0.subVectors(t,s);let f=Po.dot(o0),p=Bo.dot(o0);if(f>=0&&p<=f)return n.copy(s);let u=l*p-f*c;if(u<=0&&l>=0&&f<=0&&l-f>0)return r=l/(l-f),n.copy(i).addScaledVector(Po,r);l0.subVectors(t,a);let d=Po.dot(l0),v=Bo.dot(l0);if(v>=0&&d<=v)return n.copy(a);let M=d*c-l*v;if(M<=0&&c>=0&&v<=0)return o=c/(c-v),n.copy(i).addScaledVector(Bo,o);let g=f*v-d*p;if(g<=0&&p-f>=0&&d-v>=0)return hb.subVectors(a,s),o=(p-f)/(p-f+(d-v)),n.copy(s).addScaledVector(hb,o);let h=1/(g+M+u);return r=M*h,o=u*h,n.copy(i).addScaledVector(Po,r).addScaledVector(Bo,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Oa=class{constructor(t=new V(1/0,1/0,1/0),n=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(Pi.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(Pi.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){let i=Pi.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let a=i.getAttribute("position");if(n===!0&&a!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let r=0,o=a.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,Pi):Pi.fromBufferAttribute(a,r),Pi.applyMatrix4(t.matrixWorld),this.expandByPoint(Pi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Qh.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Qh.copy(i.boundingBox)),Qh.applyMatrix4(t.matrixWorld),this.union(Qh)}let s=t.children;for(let a=0,r=s.length;a<r;a++)this.expandByObject(s[a],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Pi),Pi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(_c),jh.subVectors(this.max,_c),zo.subVectors(t.a,_c),Fo.subVectors(t.b,_c),Ho.subVectors(t.c,_c),Na.subVectors(Fo,zo),Da.subVectors(Ho,Fo),yr.subVectors(zo,Ho);let n=[0,-Na.z,Na.y,0,-Da.z,Da.y,0,-yr.z,yr.y,Na.z,0,-Na.x,Da.z,0,-Da.x,yr.z,0,-yr.x,-Na.y,Na.x,0,-Da.y,Da.x,0,-yr.y,yr.x,0];return!f0(n,zo,Fo,Ho,jh)||(n=[1,0,0,0,1,0,0,0,1],!f0(n,zo,Fo,Ho,jh))?!1:($h.crossVectors(Na,Da),n=[$h.x,$h.y,$h.z],f0(n,zo,Fo,Ho,jh))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Pi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Pi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(zs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),zs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),zs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),zs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),zs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),zs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),zs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),zs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(zs),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},zs=[new V,new V,new V,new V,new V,new V,new V,new V],Pi=new V,Qh=new Oa,zo=new V,Fo=new V,Ho=new V,Na=new V,Da=new V,yr=new V,_c=new V,jh=new V,$h=new V,xr=new V;function f0(e,t,n,i,s){for(let a=0,r=e.length-3;a<=r;a+=3){xr.fromArray(e,a);let o=s.x*Math.abs(xr.x)+s.y*Math.abs(xr.y)+s.z*Math.abs(xr.z),l=t.dot(xr),c=n.dot(xr),f=i.dot(xr);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>o)return!1}return!0}var Ke=new V,tf=new jt,pR=0,ls=class extends cs{constructor(t,n,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:pR++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=s1,this.updateRanges=[],this.gpuType=Fi,this.version=0,this._normalizationScale=t!==void 0?t_(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[t+s]=n.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)tf.fromBufferAttribute(this,n),tf.applyMatrix3(t),this.setXY(n,tf.x,tf.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ke.fromBufferAttribute(this,n),Ke.applyMatrix3(t),this.setXYZ(n,Ke.x,Ke.y,Ke.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)Ke.fromBufferAttribute(this,n),Ke.applyMatrix4(t),this.setXYZ(n,Ke.x,Ke.y,Ke.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)Ke.fromBufferAttribute(this,n),Ke.applyNormalMatrix(t),this.setXYZ(n,Ke.x,Ke.y,Ke.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)Ke.fromBufferAttribute(this,n),Ke.transformDirection(t),this.setXYZ(n,Ke.x,Ke.y,Ke.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,n,i){return this.normalized&&(i=this._normalize(i)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=this._denormalize(n)),n}setX(t,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=this._denormalize(n)),n}setY(t,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=this._denormalize(n)),n}setZ(t,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=this._denormalize(n)),n}setW(t,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,s){return t*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i),s=this._normalize(s)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,n,i,s,a){return t*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i),s=this._normalize(s),a=this._normalize(a)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let n=this._normalizationScale;return n!==void 0?Math.max(t/n,-1):nR(t,this.array)}_normalize(t){let n=this._normalizationScale;return n!==void 0?Math.round(t*n):iR(t,this.array)}};var wc=class extends ls{constructor(t,n,i){super(new Uint16Array(t),n,i)}};var Rc=class extends ls{constructor(t,n,i){super(new Uint32Array(t),n,i)}};var Ei=class extends ls{constructor(t,n,i){super(new Float32Array(t),n,i)}},mR=new Oa,vc=new V,d0=new V,tl=class{constructor(t=new V,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){let i=this.center;n!==void 0?i.copy(n):mR.setFromPoints(t).getCenter(i);let s=0;for(let a=0,r=t.length;a<r;a++)s=Math.max(s,i.distanceToSquared(t[a]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){let i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;vc.subVectors(t,this.center);let n=vc.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(vc,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(d0.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(vc.copy(t.center).add(d0)),this.expandByPoint(vc.copy(t.center).sub(d0))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},gR=0,bi=new Le,p0=new Nn,Go=new V,ui=new Oa,yc=new Oa,cn=new V,Ia=class e extends cs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gR++}),this.uuid=Kc(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new($w(t)?Rc:wc)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let a=new Pt().getNormalMatrix(t);i.applyNormalMatrix(a),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return bi.makeRotationFromQuaternion(t),this.applyMatrix4(bi),this}rotateX(t){return bi.makeRotationX(t),this.applyMatrix4(bi),this}rotateY(t){return bi.makeRotationY(t),this.applyMatrix4(bi),this}rotateZ(t){return bi.makeRotationZ(t),this.applyMatrix4(bi),this}translate(t,n,i){return bi.makeTranslation(t,n,i),this.applyMatrix4(bi),this}scale(t,n,i){return bi.makeScale(t,n,i),this.applyMatrix4(bi),this}lookAt(t){return p0.lookAt(t),p0.updateMatrix(),this.applyMatrix4(p0.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Go).negate(),this.translate(Go.x,Go.y,Go.z),this}setFromPoints(t){let n=this.getAttribute("position");if(n===void 0){let i=[];for(let s=0,a=t.length;s<a;s++){let r=t[s];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Ei(i,3))}else{let i=Math.min(t.length,n.count);for(let s=0;s<i;s++){let a=t[s];n.setXYZ(s,a.x,a.y,a.z||0)}t.length>n.count&&Lt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Oa);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ot("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,s=n.length;i<s;i++){let a=n[i];ui.setFromBufferAttribute(a),this.morphTargetsRelative?(cn.addVectors(this.boundingBox.min,ui.min),this.boundingBox.expandByPoint(cn),cn.addVectors(this.boundingBox.max,ui.max),this.boundingBox.expandByPoint(cn)):(this.boundingBox.expandByPoint(ui.min),this.boundingBox.expandByPoint(ui.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ot('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new tl);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ot("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(t){let i=this.boundingSphere.center;if(ui.setFromBufferAttribute(t),n)for(let a=0,r=n.length;a<r;a++){let o=n[a];yc.setFromBufferAttribute(o),this.morphTargetsRelative?(cn.addVectors(ui.min,yc.min),ui.expandByPoint(cn),cn.addVectors(ui.max,yc.max),ui.expandByPoint(cn)):(ui.expandByPoint(yc.min),ui.expandByPoint(yc.max))}ui.getCenter(i);let s=0;for(let a=0,r=t.count;a<r;a++)cn.fromBufferAttribute(t,a),s=Math.max(s,i.distanceToSquared(cn));if(n)for(let a=0,r=n.length;a<r;a++){let o=n[a],l=this.morphTargetsRelative;for(let c=0,f=o.count;c<f;c++)cn.fromBufferAttribute(o,c),l&&(Go.fromBufferAttribute(t,c),cn.add(Go)),s=Math.max(s,i.distanceToSquared(cn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ot('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Ot("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=n.position,s=n.normal,a=n.uv,r=this.getAttribute("tangent");(r===void 0||r.count!==i.count)&&(r=new ls(new Float32Array(4*i.count),4),this.setAttribute("tangent",r));let o=[],l=[],c=new Uint8Array(i.count);for(let O=0;O<i.count;O++)o[O]=new V,l[O]=new V;let f=new V,p=new V,u=new V,d=new jt,v=new jt,M=new jt,g=new V,h=new V;function m(O,R,D){c[O]=c[R]=c[D]=1,f.fromBufferAttribute(i,O),p.fromBufferAttribute(i,R),u.fromBufferAttribute(i,D),d.fromBufferAttribute(a,O),v.fromBufferAttribute(a,R),M.fromBufferAttribute(a,D),p.sub(f),u.sub(f),v.sub(d),M.sub(d);let I=1/(v.x*M.y-M.x*v.y);isFinite(I)&&(g.copy(p).multiplyScalar(M.y).addScaledVector(u,-v.y).multiplyScalar(I),h.copy(u).multiplyScalar(v.x).addScaledVector(p,-M.x).multiplyScalar(I),o[O].add(g),o[R].add(g),o[D].add(g),l[O].add(h),l[R].add(h),l[D].add(h))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let O=0,R=y.length;O<R;++O){let D=y[O],I=D.start,G=D.count;for(let N=I,k=I+G;N<k;N+=3)m(t.getX(N+0),t.getX(N+1),t.getX(N+2))}let x=new V,E=new V,w=new V,_=new V;function T(O){w.fromBufferAttribute(s,O),_.copy(w);let R=o[O];x.copy(R),x.sub(w.multiplyScalar(w.dot(R))).normalize(),E.crossVectors(_,R);let I=E.dot(l[O])<0?-1:1;r.setXYZW(O,x.x,x.y,x.z,I)}for(let O=0,R=i.count;O<R;++O)c[O]&&T(O);this._transformed=!0}computeVertexNormals(){let t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new ls(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,d=i.count;u<d;u++)i.setXYZ(u,0,0,0);let s=new V,a=new V,r=new V,o=new V,l=new V,c=new V,f=new V,p=new V;if(t)for(let u=0,d=t.count;u<d;u+=3){let v=t.getX(u+0),M=t.getX(u+1),g=t.getX(u+2);s.fromBufferAttribute(n,v),a.fromBufferAttribute(n,M),r.fromBufferAttribute(n,g),f.subVectors(r,a),p.subVectors(s,a),f.cross(p),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,g),o.add(f),l.add(f),c.add(f),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,d=n.count;u<d;u+=3)s.fromBufferAttribute(n,u+0),a.fromBufferAttribute(n,u+1),r.fromBufferAttribute(n,u+2),f.subVectors(r,a),p.subVectors(s,a),f.cross(p),i.setXYZ(u+0,f.x,f.y,f.z),i.setXYZ(u+1,f.x,f.y,f.z),i.setXYZ(u+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)cn.fromBufferAttribute(t,n),cn.normalize(),t.setXYZ(n,cn.x,cn.y,cn.z)}toNonIndexed(){function t(o,l){let c=o.array,f=o.itemSize,p=o.normalized,u=new c.constructor(l.length*f),d=0,v=0;for(let M=0,g=l.length;M<g;M++){o.isInterleavedBufferAttribute?d=l[M]*o.data.stride+o.offset:d=l[M]*f;for(let h=0;h<f;h++)u[v++]=c[d++]}return new ls(u,f,p)}if(this.index===null)return Lt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new e,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,i);n.setAttribute(o,c)}let a=this.morphAttributes;for(let o in a){let l=[],c=a[o];for(let f=0,p=c.length;f<p;f++){let u=c[f],d=t(u,i);l.push(d)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let o=0,l=r.length;o<l;o++){let c=r[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},a=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],f=[];for(let p=0,u=c.length;p<u;p++){let d=c[p];f.push(d.toJSON(t.data))}f.length>0&&(s[l]=f,a=!0)}a&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let f=s[c];this.setAttribute(c,f.clone(n))}let a=t.morphAttributes;for(let c in a){let f=[],p=a[c];for(let u=0,d=p.length;u<d;u++)f.push(p[u].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=t.morphTargetsRelative;let r=t.groups;for(let c=0,f=r.length;c<f;c++){let p=r[c];this.addGroup(p.start,p.count,p.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var m0=new V,_R=new V,vR=new Pt,Bi=class{constructor(t=new V(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,s){return this.normal.set(t,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){let s=m0.subVectors(i,n).cross(_R.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n,i=!0){let s=t.delta(m0),a=this.normal.dot(s);if(a===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/a;return i===!0&&(r<0||r>1)?null:n.copy(t.start).addScaledVector(s,r)}intersectsLine(t){let n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){let i=n||vR.getNormalMatrix(t),s=this.coplanarPoint(m0).applyMatrix4(t),a=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},yR=0,Pa=class extends cs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yR++}),this.uuid=Kc(),this.name="",this.type="Material",this.blending=sl,this.side=Ga,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=D0,this.blendDst=L0,this.blendEquation=Tr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qt(0,0,0),this.blendAlpha=0,this.depthFunc=Yo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jb,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gf,this.stencilZFail=gf,this.stencilZPass=gf,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let n in t){let i=t[n];if(i===void 0){Lt(`Material: parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){Lt(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(a=>a.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(a){let r=[];for(let o in a){let l=a[o];delete l.metadata,r.push(l)}return r}if(n){let a=s(t.textures),r=s(t.images);a.length>0&&(i.textures=a),r.length>0&&(i.images=r)}return i}fromJSON(t,n){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new qt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new Bi().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=n[t.map]||null),t.matcap!==void 0&&(this.matcap=n[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=n[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=n[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=n[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new jt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=n[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=n[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=n[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=n[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=n[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=n[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=n[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=n[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=n[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=n[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=n[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new jt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=n[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=n[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=n[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=n[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=n[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=n[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let n=t.clippingPlanes,i=null;if(n!==null){let s=n.length;i=new Array(s);for(let a=0;a!==s;++a)i[a]=n[a].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Fs=new V,g0=new V,ef=new V,nf=new V,Cc=class{constructor(t=new V,n=new V(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Fs)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let n=Fs.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Fs.copy(this.origin).addScaledVector(this.direction,n),Fs.distanceToSquared(t))}distanceSqToSegment(t,n,i,s){g0.copy(t).add(n).multiplyScalar(.5),ef.copy(n).sub(t).normalize(),nf.copy(this.origin).sub(g0);let a=t.distanceTo(n)*.5,r=-this.direction.dot(ef),o=nf.dot(this.direction),l=-nf.dot(ef),c=nf.lengthSq(),f=Math.abs(1-r*r),p,u,d,v;if(f>0)if(p=r*l-o,u=r*o-l,v=a*f,p>=0)if(u>=-v)if(u<=v){let M=1/f;p*=M,u*=M,d=p*(p+r*u+2*o)+u*(r*p+u+2*l)+c}else u=a,p=Math.max(0,-(r*u+o)),d=-p*p+u*(u+2*l)+c;else u=-a,p=Math.max(0,-(r*u+o)),d=-p*p+u*(u+2*l)+c;else u<=-v?(p=Math.max(0,-(-r*a+o)),u=p>0?-a:Math.min(Math.max(-a,-l),a),d=-p*p+u*(u+2*l)+c):u<=v?(p=0,u=Math.min(Math.max(-a,-l),a),d=u*(u+2*l)+c):(p=Math.max(0,-(r*a+o)),u=p>0?a:Math.min(Math.max(-a,-l),a),d=-p*p+u*(u+2*l)+c);else u=r>0?-a:a,p=Math.max(0,-(r*u+o)),d=-p*p+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(g0).addScaledVector(ef,u),d}intersectSphere(t,n){if(t.radius<0)return null;Fs.subVectors(t.center,this.origin);let i=Fs.dot(this.direction),s=Fs.dot(Fs)-i*i,a=t.radius*t.radius;if(s>a)return null;let r=Math.sqrt(a-s),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){let i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){let n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,s,a,r,o,l,c=1/this.direction.x,f=1/this.direction.y,p=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),f>=0?(a=(t.min.y-u.y)*f,r=(t.max.y-u.y)*f):(a=(t.max.y-u.y)*f,r=(t.min.y-u.y)*f),i>r||a>s||((a>i||isNaN(i))&&(i=a),(r<s||isNaN(s))&&(s=r),p>=0?(o=(t.min.z-u.z)*p,l=(t.max.z-u.z)*p):(o=(t.max.z-u.z)*p,l=(t.min.z-u.z)*p),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(t){return this.intersectBox(t,Fs)!==null}intersectTriangle(t,n,i,s,a){let r=this.origin,o=this.direction,l=o.x,c=o.y,f=o.z,p=t.x-r.x,u=t.y-r.y,d=t.z-r.z,v=n.x-r.x,M=n.y-r.y,g=n.z-r.z,h=i.x-r.x,m=i.y-r.y,y=i.z-r.z,x=Math.abs(l),E=Math.abs(c),w=Math.abs(f),_,T,O,R,D,I,G,N,k,X,F,nt;if(x>=E&&x>=w?(O=l,I=p,k=v,nt=h,l>=0?(_=c,T=f,R=u,D=d,G=M,N=g,X=m,F=y):(_=f,T=c,R=d,D=u,G=g,N=M,X=y,F=m)):E>=w?(O=c,I=u,k=M,nt=m,c>=0?(_=f,T=l,R=d,D=p,G=g,N=v,X=y,F=h):(_=l,T=f,R=p,D=d,G=v,N=g,X=h,F=y)):(O=f,I=d,k=g,nt=y,f>=0?(_=l,T=c,R=p,D=u,G=v,N=M,X=h,F=m):(_=c,T=l,R=u,D=p,G=M,N=v,X=m,F=h)),O===0)return null;let W=_/O,$=T/O,et=1/O,pt=R-W*I,It=D-$*I,Z=G-W*k,at=N-$*k,yt=X-W*nt,wt=F-$*nt,mt=yt*at-wt*Z,Bt=pt*wt-It*yt,Ue=Z*It-at*pt;if(s){if(mt<0||Bt<0||Ue<0)return null}else if((mt<0||Bt<0||Ue<0)&&(mt>0||Bt>0||Ue>0))return null;let Dt=mt+Bt+Ue;if(Dt===0)return null;let le=et*(mt*I+Bt*k+Ue*nt);return(Dt>0?le<0:le>0)?null:this.at(le/Dt,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ks=class extends Pa{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vs,this.combine=U0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},fb=new Le,Sr=new Cc,sf=new tl,db=new V,af=new V,rf=new V,of=new V,_0=new V,lf=new V,pb=new V,cf=new V,Xe=class extends Nn{constructor(t=new Ia,n=new ks){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){let o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(t,n){let i=this.geometry,s=i.attributes.position,a=i.morphAttributes.position,r=i.morphTargetsRelative;n.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(a&&o){lf.set(0,0,0);for(let l=0,c=a.length;l<c;l++){let f=o[l],p=a[l];f!==0&&(_0.fromBufferAttribute(p,t),r?lf.addScaledVector(_0,f):lf.addScaledVector(_0.sub(n),f))}n.add(lf)}return n}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,n){let i=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),sf.copy(i.boundingSphere),sf.applyMatrix4(a),Sr.copy(t.ray).recast(t.near),!(sf.containsPoint(Sr.origin)===!1&&(Sr.intersectSphere(sf,db)===null||Sr.origin.distanceToSquared(db)>(t.far-t.near)**2))&&(fb.copy(a).invert(),Sr.copy(t.ray).applyMatrix4(fb),!(i.boundingBox!==null&&Sr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,Sr)))}_computeIntersections(t,n,i){let s,a=this.geometry,r=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,f=a.attributes.uv1,p=a.attributes.normal,u=a.groups,d=a.drawRange;if(o!==null)if(Array.isArray(r))for(let v=0,M=u.length;v<M;v++){let g=u[v],h=r[g.materialIndex],m=Math.max(g.start,d.start),y=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let x=m,E=y;x<E;x+=3){let w=o.getX(x),_=o.getX(x+1),T=o.getX(x+2);s=uf(this,h,t,i,c,f,p,w,_,T),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,n.push(s))}}else{let v=Math.max(0,d.start),M=Math.min(o.count,d.start+d.count);for(let g=v,h=M;g<h;g+=3){let m=o.getX(g),y=o.getX(g+1),x=o.getX(g+2);s=uf(this,r,t,i,c,f,p,m,y,x),s&&(s.faceIndex=Math.floor(g/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let v=0,M=u.length;v<M;v++){let g=u[v],h=r[g.materialIndex],m=Math.max(g.start,d.start),y=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let x=m,E=y;x<E;x+=3){let w=x,_=x+1,T=x+2;s=uf(this,h,t,i,c,f,p,w,_,T),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,n.push(s))}}else{let v=Math.max(0,d.start),M=Math.min(l.count,d.start+d.count);for(let g=v,h=M;g<h;g+=3){let m=g,y=g+1,x=g+2;s=uf(this,r,t,i,c,f,p,m,y,x),s&&(s.faceIndex=Math.floor(g/3),n.push(s))}}}};function xR(e,t,n,i,s,a,r,o){let l;if(t.side===Hn?l=i.intersectTriangle(r,a,s,!0,o):l=i.intersectTriangle(s,a,r,t.side===Ga,o),l===null)return null;cf.copy(o),cf.applyMatrix4(e.matrixWorld);let c=n.ray.origin.distanceTo(cf);return c<n.near||c>n.far?null:{distance:c,point:cf.clone(),object:e}}function uf(e,t,n,i,s,a,r,o,l,c){e.getVertexPosition(o,af),e.getVertexPosition(l,rf),e.getVertexPosition(c,of);let f=xR(e,t,n,i,af,rf,of,pb);if(f){let p=new V;Ua.getBarycoord(pb,af,rf,of,p),s&&(f.uv=Ua.getInterpolatedAttribute(s,o,l,c,p,new jt)),a&&(f.uv1=Ua.getInterpolatedAttribute(a,o,l,c,p,new jt)),r&&(f.normal=Ua.getInterpolatedAttribute(r,o,l,c,p,new V),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new V,materialIndex:0};Ua.getNormal(af,rf,of,u.normal),f.face=u,f.barycoord=p}return f}var Lf=class extends Cn{constructor(t=null,n=1,i=1,s,a,r,o,l,c=un,f=un,p,u){super(null,r,o,l,c,f,s,a,p,u),this.isDataTexture=!0,this.image={data:t,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Mr=new tl,SR=new jt(.5,.5),hf=new V,Ba=class{constructor(t=new Bi,n=new Bi,i=new Bi,s=new Bi,a=new Bi,r=new Bi){this.planes=[t,n,i,s,a,r]}set(t,n,i,s,a,r){let o=this.planes;return o[0].copy(t),o[1].copy(n),o[2].copy(i),o[3].copy(s),o[4].copy(a),o[5].copy(r),this}copy(t){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=Ti,i=!1){let s=this.planes,a=t.elements,r=a[0],o=a[1],l=a[2],c=a[3],f=a[4],p=a[5],u=a[6],d=a[7],v=a[8],M=a[9],g=a[10],h=a[11],m=a[12],y=a[13],x=a[14],E=a[15];if(s[0].setComponents(c-r,d-f,h-v,E-m).normalize(),s[1].setComponents(c+r,d+f,h+v,E+m).normalize(),s[2].setComponents(c+o,d+p,h+M,E+y).normalize(),s[3].setComponents(c-o,d-p,h-M,E-y).normalize(),i)s[4].setComponents(l,u,g,x).normalize(),s[5].setComponents(c-l,d-u,h-g,E-x).normalize();else if(s[4].setComponents(c-l,d-u,h-g,E-x).normalize(),n===Ti)s[5].setComponents(c+l,d+u,h+g,E+x).normalize();else if(n===Zo)s[5].setComponents(l,u,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Mr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Mr.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Mr)}intersectsSprite(t){Mr.center.set(0,0,0);let n=SR.distanceTo(t.center);return Mr.radius=.7071067811865476+n,Mr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Mr)}intersectsSphere(t){let n=this.planes,i=t.center,s=-t.radius;for(let a=0;a<6;a++)if(n[a].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let n=this.planes;for(let i=0;i<6;i++){let s=n[i];if(hf.x=s.normal.x>0?t.max.x:t.min.x,hf.y=s.normal.y>0?t.max.y:t.min.y,hf.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(hf)<0)return!1}return!0}containsPoint(t){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},mb=new Le,Uf=class e{constructor(){this.coordinateSystem=Ti,this._frustums=[],this._count=0}setFromArrayCamera(t){let n=t.cameras,i=this._frustums;for(let s=0;s<n.length;s++){let a=n[s];mb.multiplyMatrices(a.projectionMatrix,a.matrixWorldInverse),i[s]===void 0&&(i[s]=new Ba),i[s].setFromProjectionMatrix(mb,a.coordinateSystem,a.reversedDepth)}return this._count=n.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsObject(t))return!0;return!1}intersectsSprite(t){let n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsSphere(t))return!0;return!1}intersectsBox(t){let n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsBox(t))return!0;return!1}containsPoint(t){let n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let n=this._frustums,i=t._frustums;for(let s=0;s<t._count;s++)n[s]===void 0&&(n[s]=new Ba),n[s].copy(i[s]);return this._count=t._count,this}clone(){return new e().copy(this)}};var Nc=class extends Cn{constructor(t=[],n=Er,i,s,a,r,o,l,c,f){super(t,n,i,s,a,r,o,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Dc=class extends Cn{constructor(t,n,i,s,a,r,o,l,c){super(t,n,i,s,a,r,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Xs=class extends Cn{constructor(t,n,i=zi,s,a,r,o=un,l=un,c,f=Gs,p=1){if(f!==Gs&&f!==Ys)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:n,depth:p};super(u,s,a,r,o,l,f,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Qo(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let n=super.toJSON(t);return n.compareFunction=this.compareFunction,n}},Lc=class extends Xs{constructor(t,n=zi,i=Er,s,a,r=un,o=un,l,c=Gs){let f={width:t,height:t,depth:1},p=[f,f,f,f,f,f];super(t,t,n,i,s,a,r,o,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Uc=class extends Cn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Ws=class e extends Ia{constructor(t=1,n=1,i=1,s=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:s,heightSegments:a,depthSegments:r};let o=this;s=Math.floor(s),a=Math.floor(a),r=Math.floor(r);let l=[],c=[],f=[],p=[],u=0,d=0;v("z","y","x",-1,-1,i,n,t,r,a,0),v("z","y","x",1,-1,i,n,-t,r,a,1),v("x","z","y",1,1,t,i,n,s,r,2),v("x","z","y",1,-1,t,i,-n,s,r,3),v("x","y","z",1,-1,t,n,i,s,a,4),v("x","y","z",-1,-1,t,n,-i,s,a,5),this.setIndex(l),this.setAttribute("position",new Ei(c,3)),this.setAttribute("normal",new Ei(f,3)),this.setAttribute("uv",new Ei(p,2));function v(M,g,h,m,y,x,E,w,_,T,O){let R=x/_,D=E/T,I=x/2,G=E/2,N=w/2,k=_+1,X=T+1,F=0,nt=0,W=new V;for(let $=0;$<X;$++){let et=$*D-G;for(let pt=0;pt<k;pt++){let It=pt*R-I;W[M]=It*m,W[g]=et*y,W[h]=N,c.push(W.x,W.y,W.z),W[M]=0,W[g]=0,W[h]=w>0?1:-1,f.push(W.x,W.y,W.z),p.push(pt/_),p.push(1-$/T),F+=1}}for(let $=0;$<T;$++)for(let et=0;et<_;et++){let pt=u+et+k*$,It=u+et+k*($+1),Z=u+(et+1)+k*($+1),at=u+(et+1)+k*$;l.push(pt,It,at),l.push(It,Z,at),nt+=6}o.addGroup(d,nt,O),d+=nt,u+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Zn=class e extends Ia{constructor(t=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:s};let a=t/2,r=n/2,o=Math.floor(i),l=Math.floor(s),c=o+1,f=l+1,p=t/o,u=n/l,d=[],v=[],M=[],g=[];for(let h=0;h<f;h++){let m=h*u-r;for(let y=0;y<c;y++){let x=y*p-a;v.push(x,-m,0),M.push(0,0,1),g.push(y/o),g.push(1-h/l)}}for(let h=0;h<l;h++)for(let m=0;m<o;m++){let y=m+c*h,x=m+c*(h+1),E=m+1+c*(h+1),w=m+1+c*h;d.push(y,x,w),d.push(x,E,w)}this.setIndex(d),this.setAttribute("position",new Ei(v,3)),this.setAttribute("normal",new Ei(M,3)),this.setAttribute("uv",new Ei(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}};function wr(e){let t={};for(let n in e){t[n]={};for(let i in e[n]){let s=e[n][i];if(gb(s))s.isRenderTargetTexture?(Lt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=s.clone();else if(Array.isArray(s))if(gb(s[0])){let a=[];for(let r=0,o=s.length;r<o;r++)a[r]=s[r].clone();t[n][i]=a}else t[n][i]=s.slice();else t[n][i]=s}}return t}function Dn(e){let t={};for(let n=0;n<e.length;n++){let i=wr(e[n]);for(let s in i)t[s]=i[s]}return t}function gb(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function MR(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function e_(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ne.workingColorSpace}var h1={clone:wr,merge:Dn},bR=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,TR=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,hs=class extends Pa{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bR,this.fragmentShader=TR,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=wr(t.uniforms),this.uniformsGroups=MR(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(let s in this.uniforms){let r=this.uniforms[s].value;r&&r.isTexture?n.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?n.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?n.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?n.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?n.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?n.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?n.uniforms[s]={type:"m4",value:r.toArray()}:n.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(t,n){if(super.fromJSON(t,n),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=n[s.value]||null;break;case"c":this.uniforms[i].value=new qt().setHex(s.value);break;case"v2":this.uniforms[i].value=new jt().fromArray(s.value);break;case"v3":this.uniforms[i].value=new V().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Pe().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Pt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Le().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Of=class extends hs{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},fs=class extends Pa{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Od,this.normalScale=new jt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vs,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var If=class extends Pa{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Kb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Pf=class extends Pa{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Vo(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function ff(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var za=class{constructor(t,n,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let n=this.parameterPositions,i=this._cachedIndex,s=n[i],a=n[i-1];t:{e:{let r;n:{i:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<a)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(a=s,s=n[++i],t<s)break e}r=n.length;break n}if(!(t>=a)){let o=n[1];t<o&&(i=2,a=o);for(let l=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=a,a=n[--i-1],t>=a)break e}r=i,i=0;break n}break t}for(;i<r;){let o=i+r>>>1;t<n[o]?r=o:i=o+1}if(s=n[i],a=n[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,s)}return this.interpolate_(i,a,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let n=this.resultBuffer,i=this.sampleValues,s=this.valueSize,a=t*s;for(let r=0;r!==s;++r)n[r]=i[a+r];return n}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Bf=class extends za{constructor(t,n,i,s){super(t,n,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:x0,endingEnd:x0}}intervalChanged_(t,n,i){let s=this.parameterPositions,a=t-2,r=t+1,o=s[a],l=s[r];if(o===void 0)switch(this.getSettings_().endingStart){case S0:a=t,o=2*n-i;break;case M0:a=s.length-2,o=n+s[a]-s[a+1];break;default:a=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case S0:r=t,l=2*i-n;break;case M0:r=1,l=i+s[1]-s[0];break;default:r=t-1,l=n}let c=(i-n)*.5,f=this.valueSize;this._weightPrev=c/(n-o),this._weightNext=c/(l-i),this._offsetPrev=a*f,this._offsetNext=r*f}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,f=this._offsetPrev,p=this._offsetNext,u=this._weightPrev,d=this._weightNext,v=(i-n)/(s-n),M=v*v,g=M*v,h=-u*g+2*u*M-u*v,m=(1+u)*g+(-1.5-2*u)*M+(-.5+u)*v+1,y=(-1-d)*g+(1.5+d)*M+.5*v,x=d*g-d*M;for(let E=0;E!==o;++E)a[E]=h*r[f+E]+m*r[c+E]+y*r[l+E]+x*r[p+E];return a}},zf=class extends za{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,f=(i-n)/(s-n),p=1-f;for(let u=0;u!==o;++u)a[u]=r[c+u]*p+r[l+u]*f;return a}},Ff=class extends za{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Hf=class extends za{interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,f=this.inTangents,p=this.outTangents;if(!f||!p){let v=(i-n)/(s-n),M=1-v;for(let g=0;g!==o;++g)a[g]=r[c+g]*M+r[l+g]*v;return a}let u=o*2,d=t-1;for(let v=0;v!==o;++v){let M=r[c+v],g=r[l+v],h=d*u+v*2,m=p[h],y=p[h+1],x=t*u+v*2,E=f[x],w=f[x+1],_=AR(i,n,m,E,s);a[v]=f1(_,M,y,w,g)}return a}};function f1(e,t,n,i,s){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*i+e*e*e*s}function ER(e,t,n,i,s){let a=1-e;return 3*a*a*(n-t)+6*a*e*(i-n)+3*e*e*(s-i)}function AR(e,t,n,i,s){let a=(e-t)/(s-t);for(let r=0;r<8;r++){let o=f1(a,t,n,i,s)-e;if(Math.abs(o)<1e-10)break;let l=ER(a,t,n,i,s);if(Math.abs(l)<1e-10)break;a=Math.max(0,Math.min(1,a-o/l))}return a}var fi=class{constructor(t,n,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Vo(n,this.TimeBufferType),this.values=Vo(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let n=t.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(t);else{i={name:t.name,times:Vo(t.times,Array),values:Vo(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),ff(t.settings)&&(i.settings={inTangents:Vo(t.settings.inTangents,Array),outTangents:Vo(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Ff(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new zf(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Bf(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let n=new Hf(this.times,this.values,this.getValueSize(),t);return this.settings&&(n.inTangents=this.settings.inTangents,n.outTangents=this.settings.outTangents),n}setInterpolation(t){let n;switch(t){case Sc:n=this.InterpolantFactoryMethodDiscrete;break;case wf:n=this.InterpolantFactoryMethodLinear;break;case mf:n=this.InterpolantFactoryMethodSmooth;break;case y0:n=this.InterpolantFactoryMethodBezier;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Lt("KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Sc;case this.InterpolantFactoryMethodLinear:return wf;case this.InterpolantFactoryMethodSmooth:return mf;case this.InterpolantFactoryMethodBezier:return y0}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]+=t;ff(this.settings)&&(_b(this.settings.inTangents,t),_b(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]*=t;ff(this.settings)&&(vb(this.settings.inTangents,t),vb(this.settings.outTangents,t))}return this}trim(t,n){let i=this.times,s=i.length,a=0,r=s-1;for(;a!==s&&i[a]<t;)++a;for(;r!==-1&&i[r]>n;)--r;if(++r,a!==0||r!==s){a>=r&&(r=Math.max(r,1),a=r-1);let o=this.getValueSize();this.times=i.slice(a,r),this.values=this.values.slice(a*o,r*o)}return this}validate(){let t=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(Ot("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,a=i.length;a===0&&(Ot("KeyframeTrack: Track is empty.",this),t=!1);let r=null;for(let o=0;o!==a;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Ot("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(r!==null&&r>l){Ot("KeyframeTrack: Out of order keys.",this,o,l,r),t=!1;break}r=l}if(s!==void 0&&tR(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Ot("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===mf,a=t.length-1,r=1;for(let o=1;o<a;++o){let l=!1,c=t[o],f=t[o+1];if(c!==f&&(o!==1||c!==t[0]))if(s)l=!0;else{let p=o*i,u=p-i,d=p+i;for(let v=0;v!==i;++v){let M=n[p+v];if(M!==n[u+v]||M!==n[d+v]){l=!0;break}}}if(l){if(o!==r){t[r]=t[o];let p=o*i,u=r*i;for(let d=0;d!==i;++d)n[u+d]=n[p+d]}++r}}if(a>0){t[r]=t[a];for(let o=a*i,l=r*i,c=0;c!==i;++c)n[l+c]=n[o+c];++r}return r!==t.length?(this.times=t.slice(0,r),this.values=n.slice(0,r*i)):(this.times=t,this.values=n),this}clone(){let t=this.times.slice(),n=this.values.slice(),i=this.constructor,s=new i(this.name,t,n);return s.createInterpolant=this.createInterpolant,ff(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function _b(e,t){for(let n=0,i=e.length;n!==i;n+=2)e[n]+=t}function vb(e,t){for(let n=0,i=e.length;n!==i;n+=2)e[n]*=t}fi.prototype.ValueTypeName="";fi.prototype.TimeBufferType=Float32Array;fi.prototype.ValueBufferType=Float32Array;fi.prototype.DefaultInterpolation=wf;var Fa=class extends fi{constructor(t,n,i){super(t,n,i)}};Fa.prototype.ValueTypeName="bool";Fa.prototype.ValueBufferType=Array;Fa.prototype.DefaultInterpolation=Sc;Fa.prototype.InterpolantFactoryMethodLinear=void 0;Fa.prototype.InterpolantFactoryMethodSmooth=void 0;var Gf=class extends fi{constructor(t,n,i,s){super(t,n,i,s)}};Gf.prototype.ValueTypeName="color";var Vf=class extends fi{constructor(t,n,i,s){super(t,n,i,s)}};Vf.prototype.ValueTypeName="number";var kf=class extends za{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=(i-n)/(s-n),c=t*o;for(let f=c+o;c!==f;c+=4)us.slerpFlat(a,0,r,c-o,r,c,l);return a}},Oc=class extends fi{constructor(t,n,i,s){super(t,n,i,s)}InterpolantFactoryMethodLinear(t){return new kf(this.times,this.values,this.getValueSize(),t)}};Oc.prototype.ValueTypeName="quaternion";Oc.prototype.InterpolantFactoryMethodSmooth=void 0;var Ha=class extends fi{constructor(t,n,i){super(t,n,i)}};Ha.prototype.ValueTypeName="string";Ha.prototype.ValueBufferType=Array;Ha.prototype.DefaultInterpolation=Sc;Ha.prototype.InterpolantFactoryMethodLinear=void 0;Ha.prototype.InterpolantFactoryMethodSmooth=void 0;var Xf=class extends fi{constructor(t,n,i,s){super(t,n,i,s)}};Xf.prototype.ValueTypeName="vector";var _f={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(yb(e)||(this.files[e]=t))},get:function(e){if(this.enabled!==!1&&!yb(e))return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};function yb(e){try{let t=e.slice(e.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var Wf=class{constructor(t,n,i){let s=this,a=!1,r=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=i,this._abortController=null,this.itemStart=function(f){o++,a===!1&&s.onStart!==void 0&&s.onStart(f,r,o),a=!0},this.itemEnd=function(f){r++,s.onProgress!==void 0&&s.onProgress(f,r,o),r===o&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(f){s.onError!==void 0&&s.onError(f)},this.resolveURL=function(f){return f=f.normalize("NFC"),l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,p){return c.push(f,p),this},this.removeHandler=function(f){let p=c.indexOf(f);return p!==-1&&c.splice(p,2),this},this.getHandler=function(f){for(let p=0,u=c.length;p<u;p+=2){let d=c[p],v=c[p+1];if(d.global&&(d.lastIndex=0),d.test(f))return v}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},d1=new Wf,el=class{constructor(t){this.manager=t!==void 0?t:d1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,n){let i=this;return new Promise(function(s,a){i.load(t,s,n,a)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};el.DEFAULT_MATERIAL_NAME="__DEFAULT";var ko=new WeakMap,qf=class extends el{constructor(t){super(t)}load(t,n,i,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let a=this,r=_f.get(`image:${t}`);if(r!==void 0){if(r.complete===!0)a.manager.itemStart(t),setTimeout(function(){n&&n(r),a.manager.itemEnd(t)},0);else{let p=ko.get(r);p===void 0&&(p=[],ko.set(r,p)),p.push({onLoad:n,onError:s})}return r}let o=Jo("img");function l(){f(),n&&n(this);let p=ko.get(this)||[];for(let u=0;u<p.length;u++){let d=p[u];d.onLoad&&d.onLoad(this)}ko.delete(this),a.manager.itemEnd(t)}function c(p){f(),s&&s(p),_f.remove(`image:${t}`);let u=ko.get(this)||[];for(let d=0;d<u.length;d++){let v=u[d];v.onError&&v.onError(p)}ko.delete(this),a.manager.itemError(t),a.manager.itemEnd(t)}function f(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),_f.add(`image:${t}`,o),a.manager.itemStart(t),o.fetchPriority=this.priority,o.src=t,o}};var Ic=class extends el{constructor(t){super(t)}load(t,n,i,s){let a=new Cn,r=new qf(this.manager);return r.setPriority(this.priority),r.setCache(this.cache),r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(t,function(o){a.image=o,a.needsUpdate=!0,n!==void 0&&n(a)},i,s),a}},Pc=class extends Nn{static registerNode(t){this.prototype._lightNode=t}constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new qt(t),this.intensity=n}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}},Bc=class extends Pc{constructor(t,n,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Nn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new qt(n)}copy(t,n){return super.copy(t,n),this.groundColor.copy(t.groundColor),this}toJSON(t){let n=super.toJSON(t);return n.object.groundColor=this.groundColor.getHex(),n}},v0=new Le,xb=new V,Sb=new V,Yf=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new jt(512,512),this.mapType=Jn,this.map=null,this.mapPass=null,this.matrix=new Le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ba,this._frameExtents=new jt(1,1),this._viewportCount=1,this._viewports=[new Pe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let n=this.camera;xb.setFromMatrixPosition(t.matrixWorld),n.position.copy(xb),Sb.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(Sb),n.updateMatrixWorld(),this._updateMatrix(n,this.matrix,this._frustum)}_updateMatrix(t,n,i,s){v0.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(v0,t.coordinateSystem,t.reversedDepth);let a=this._frameExtents,r=s?s.z/a.x:1,o=s?s.w/a.y:1,l=s?s.x/a.x:0,c=s?s.y/a.y:0;t.coordinateSystem===Zo||t.reversedDepth?n.set(.5*r,0,0,.5*r+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):n.set(.5*r,0,0,.5*r+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),n.multiply(v0)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},df=new V,pf=new us,as=new V,zc=class extends Nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Le,this.projectionMatrix=new Le,this.projectionMatrixInverse=new Le,this.coordinateSystem=Ti,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(df,pf,as),as.x===1&&as.y===1&&as.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(df,pf,as.set(1,1,1)).invert()}updateWorldMatrix(t,n,i=!1){super.updateWorldMatrix(t,n,i),this.matrixWorld.decompose(df,pf,as),as.x===1&&as.y===1&&as.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(df,pf,as.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},La=new V,Mb=new jt,bb=new jt,Fn=class extends zc{constructor(t=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let n=.5*this.getFilmHeight()/t;this.fov=Rf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Qg*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Rf*2*Math.atan(Math.tan(Qg*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){La.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(La.x,La.y).multiplyScalar(-t/La.z),La.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(La.x,La.y).multiplyScalar(-t/La.z)}getViewSize(t,n){return this.getViewBounds(t,Mb,bb),n.subVectors(bb,Mb)}setViewOffset(t,n,i,s,a,r){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,n=t*Math.tan(Qg*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,a=-.5*s,r=this.view;if(this.view!==null&&this.view.enabled){let l=r.fullWidth,c=r.fullHeight;a+=r.offsetX*s/l,n-=r.offsetY*i/c,s*=r.width/l,i*=r.height/c}let o=this.filmOffset;o!==0&&(a+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,n,n-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}};var Fc=class extends zc{constructor(t=-1,n=1,i=1,s=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=s,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,s,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,a=i-t,r=i+t,o=s+n,l=s-n;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,r=a+c*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}},b0=class extends Yf{constructor(){super(new Fc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Hc=class extends Pc{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Nn.DEFAULT_UP),this.updateMatrix(),this.target=new Nn,this.shadow=new b0}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let n=super.toJSON(t);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}};var Xo=-90,Wo=1,nl=class extends Nn{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Fn(Xo,Wo,t,n);s.layers=this.layers,this.add(s);let a=new Fn(Xo,Wo,t,n);a.layers=this.layers,this.add(a);let r=new Fn(Xo,Wo,t,n);r.layers=this.layers,this.add(r);let o=new Fn(Xo,Wo,t,n);o.layers=this.layers,this.add(o);let l=new Fn(Xo,Wo,t,n);l.layers=this.layers,this.add(l);let c=new Fn(Xo,Wo,t,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,n=this.children.concat(),[i,s,a,r,o,l]=n;for(let c of n)this.remove(c);if(t===Ti)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Zo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of n)this.add(c),c.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[a,r,o,l,c,f]=this.children,p=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;let M=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,a),t.setRenderTarget(i,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,r),t.setRenderTarget(i,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,o),t.setRenderTarget(i,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,l),t.setRenderTarget(i,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,c),i.texture.mipmapsAutoUpdate=M,t.setRenderTarget(i,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,f),t.setRenderTarget(p,u,d),t.xr.enabled=v,i.texture.needsPMREMUpdate=!0}},Zf=class extends Fn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var n_="\\[\\]\\.:\\/",wR=new RegExp("["+n_+"]","g"),i_="[^"+n_+"]",RR="[^"+n_.replace("\\.","")+"]",CR=/((?:WC+[\/:])*)/.source.replace("WC",i_),NR=/(WCOD+)?/.source.replace("WCOD",RR),DR=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",i_),LR=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",i_),UR=new RegExp("^"+CR+NR+DR+LR+"$"),OR=["material","materials","bones","map"],T0=class{constructor(t,n,i){let s=i||De.parseTrackName(n);this._targetGroup=t,this._bindings=t.subscribe_(n,s)}getValue(t,n){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,n)}setValue(t,n){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,a=i.length;s!==a;++s)i[s].setValue(t,n)}bind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].bind()}unbind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].unbind()}},De=class e{constructor(t,n,i){this.path=n,this.parsedPath=i||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,i){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,i):new e(t,n,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(wR,"")}static parseTrackName(t){let n=UR.exec(t);if(n===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let a=i.nodeName.substring(s+1);OR.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(n);if(i!==void 0)return i}if(t.children){let i=function(a){for(let r=0;r<a.length;r++){let o=a[r];if(o.name===n||o.uuid===n)return o;let l=i(o.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)t[n++]=i[s]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++]}_setValue_array_setNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node,n=this.parsedPath,i=n.objectName,s=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Lt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=n.objectIndex;switch(i){case"materials":if(!t.material){Ot("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Ot("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Ot("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let f=0;f<t.length;f++)if(t[f].name===c){c=f;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Ot("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Ot("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Ot("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){Ot("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let r=t[s];if(r===void 0){let c=n.nodeName;Ot("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(a!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Ot("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Ot("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=a}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};De.Composite=T0;De.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};De.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};De.prototype.GetterByBindingType=[De.prototype._getValue_direct,De.prototype._getValue_array,De.prototype._getValue_arrayElement,De.prototype._getValue_toArray];De.prototype.SetterByBindingTypeAndVersioning=[[De.prototype._setValue_direct,De.prototype._setValue_direct_setNeedsUpdate,De.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[De.prototype._setValue_array,De.prototype._setValue_array_setNeedsUpdate,De.prototype._setValue_array_setMatrixWorldNeedsUpdate],[De.prototype._setValue_arrayElement,De.prototype._setValue_arrayElement_setNeedsUpdate,De.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[De.prototype._setValue_fromArray,De.prototype._setValue_fromArray_setNeedsUpdate,De.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var QD=new Float32Array(1);var Tb=new Le,Gc=class{constructor(t,n,i=0,s=1/0){this.ray=new Cc(t,n),this.near=i,this.far=s,this.camera=null,this.layers=new jo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,n){this.ray.set(t,n)}setFromCamera(t,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,n.projectionMatrix.elements[14]).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):Ot("Raycaster: Unsupported camera type: "+n.type)}setFromXRController(t){return Tb.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Tb),this}intersectObject(t,n=!0,i=[]){return E0(t,this,i,n),i.sort(Eb),i}intersectObjects(t,n=!0,i=[]){for(let s=0,a=t.length;s<a;s++)E0(t[s],this,i,n);return i.sort(Eb),i}};function Eb(e,t){return e.distance-t.distance}function E0(e,t,n,i){let s=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(s=!1),s===!0&&i===!0){let a=e.children;for(let r=0,o=a.length;r<o;r++)E0(a[r],t,n,!0)}}var A0=class{static{this.prototype.isMatrix2=!0}constructor(t,n,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,n,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,n=0){for(let i=0;i<4;i++)this.elements[i]=t[i+n];return this}set(t,n,i,s){let a=this.elements;return a[0]=t,a[2]=n,a[1]=i,a[3]=s,this}};function s_(e,t,n,i){let s=IR(i);switch(n){case q0:return e*t;case Z0:return e*t/s.components*s.byteLength;case ed:return e*t/s.components*s.byteLength;case Va:return e*t*2/s.components*s.byteLength;case nd:return e*t*2/s.components*s.byteLength;case Y0:return e*t*3/s.components*s.byteLength;case Gi:return e*t*4/s.components*s.byteLength;case id:return e*t*4/s.components*s.byteLength;case Xc:case Wc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case qc:case Yc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ad:case od:return Math.max(e,16)*Math.max(t,8)/4;case sd:case rd:return Math.max(e,8)*Math.max(t,8)/2;case ld:case cd:case hd:case fd:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ud:case Zc:case dd:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case pd:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case md:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case gd:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case _d:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case vd:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case yd:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case xd:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Sd:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Md:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case bd:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Td:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Ed:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Ad:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case wd:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Rd:case Cd:case Nd:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Dd:case Ld:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Jc:case Ud:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function IR(e){switch(e){case Jn:case V0:return{byteLength:1,components:1};case rl:case k0:case Hi:return{byteLength:2,components:1};case $f:case td:return{byteLength:2,components:4};case zi:case jf:case Fi:return{byteLength:4,components:1};case X0:case W0:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Lt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function I1(){let e=null,t=!1,n=null,i=null;function s(a,r){i=e.requestAnimationFrame(s),n(a,r)}return{start:function(){t!==!0&&n!==null&&e!==null&&(i=e.requestAnimationFrame(s),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(a){n=a},setContext:function(a){e=a}}}function BR(e){let t=new WeakMap;function n(o,l){let c=o.array,f=o.usage,p=c.byteLength,u=e.createBuffer();e.bindBuffer(l,u),e.bufferData(l,c,f),o.onUploadCallback();let d;if(c instanceof Float32Array)d=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=e.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=e.HALF_FLOAT:d=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=e.SHORT;else if(c instanceof Uint32Array)d=e.UNSIGNED_INT;else if(c instanceof Int32Array)d=e.INT;else if(c instanceof Int8Array)d=e.BYTE;else if(c instanceof Uint8Array)d=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,l,c){let f=l.array,p=l.updateRanges;if(e.bindBuffer(c,o),p.length===0)e.bufferSubData(c,0,f);else{p.sort((d,v)=>d.start-v.start);let u=0;for(let d=1;d<p.length;d++){let v=p[u],M=p[d];M.start<=v.start+v.count+1?v.count=Math.max(v.count,M.start+M.count-v.start):(++u,p[u]=M)}p.length=u+1;for(let d=0,v=p.length;d<v;d++){let M=p[d];e.bufferSubData(c,M.start*f.BYTES_PER_ELEMENT,f,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let f=t.get(o);(!f||f.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:a,update:r}}var zR=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,FR=`#ifdef USE_ALPHAHASH
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
#endif`,HR=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,GR=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,VR=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,kR=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,XR=`#ifdef USE_AOMAP
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
#endif`,WR=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qR=`#ifdef USE_BATCHING
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
#endif`,YR=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ZR=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,JR=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,KR=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,QR=`#ifdef USE_IRIDESCENCE
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
#endif`,jR=`#ifdef USE_BUMPMAP
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
#endif`,$R=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,tC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,eC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nC=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,iC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,sC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,aC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,rC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,oC=`#define PI 3.141592653589793
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
} // validated`,lC=`vec3 transformedNormal = objectNormal;
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
#endif`,cC=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,uC=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hC=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fC=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,dC="gl_FragColor = linearToOutputTexel( gl_FragColor );",pC=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,mC=`#ifdef USE_ENVMAP
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
#endif`,gC=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,_C=`#ifdef USE_ENVMAP
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
#endif`,vC=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yC=`#ifdef USE_ENVMAP
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
#endif`,xC=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,SC=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,MC=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bC=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,TC=`#ifdef USE_GRADIENTMAP
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
}`,EC=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,AC=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wC=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,RC=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,CC=`#ifdef USE_ENVMAP
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
#endif`,NC=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,DC=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,LC=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,UC=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,OC=`PhysicalMaterial material;
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
#endif`,IC=`uniform sampler2D dfgLUT;
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
}`,PC=`
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
#endif`,BC=`#if defined( RE_IndirectDiffuse )
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
#endif`,zC=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,FC=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,HC=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,GC=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,VC=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kC=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,XC=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,WC=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qC=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,YC=`#if defined( USE_POINTS_UV )
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
#endif`,ZC=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,JC=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,KC=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,QC=`#if defined( USE_MORPHCOLORS )
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
#endif`,jC=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$C=`#ifdef USE_MORPHTARGETS
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
#endif`,t3=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,e3=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,n3=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,i3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,s3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,a3=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,r3=`#ifdef USE_NORMALMAP
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
#endif`,o3=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,l3=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,c3=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,u3=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,h3=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,f3=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,d3=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,p3=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,m3=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,g3=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_3=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,v3=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,y3=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,x3=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,S3=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,M3=`float getShadowMask() {
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
}`,b3=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,T3=`#ifdef USE_SKINNING
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
#endif`,E3=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,A3=`#ifdef USE_SKINNING
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
#endif`,w3=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,R3=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,C3=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,N3=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,D3=`#ifdef USE_TRANSMISSION
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
#endif`,L3=`#ifdef USE_TRANSMISSION
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
#endif`,U3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,O3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,I3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,P3=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,B3=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,z3=`uniform sampler2D t2D;
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
}`,F3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,H3=`uniform float backgroundBlurriness;
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
}`,G3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,V3=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,k3=`#include <common>
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
}`,X3=`#if DEPTH_PACKING == 3200
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
}`,W3=`#define DISTANCE
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
}`,q3=`#define DISTANCE
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
}`,Y3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Z3=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,J3=`uniform float scale;
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
}`,K3=`uniform vec3 diffuse;
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
}`,Q3=`#include <common>
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
}`,j3=`uniform vec3 diffuse;
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
}`,$3=`#define LAMBERT
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
}`,t2=`#define LAMBERT
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
}`,e2=`#define MATCAP
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
}`,n2=`#define MATCAP
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
}`,i2=`#define NORMAL
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
}`,s2=`#define NORMAL
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
}`,a2=`#define PHONG
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
}`,r2=`#define PHONG
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
}`,o2=`#define STANDARD
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
}`,l2=`#define STANDARD
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
}`,c2=`#define TOON
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
}`,u2=`#define TOON
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
}`,h2=`uniform float size;
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
}`,f2=`uniform vec3 diffuse;
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
}`,d2=`#include <common>
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
}`,p2=`uniform vec3 color;
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
}`,m2=`uniform float rotation;
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
}`,g2=`uniform vec3 diffuse;
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
}`,Yt={alphahash_fragment:zR,alphahash_pars_fragment:FR,alphamap_fragment:HR,alphamap_pars_fragment:GR,alphatest_fragment:VR,alphatest_pars_fragment:kR,aomap_fragment:XR,aomap_pars_fragment:WR,batching_pars_vertex:qR,batching_vertex:YR,begin_vertex:ZR,beginnormal_vertex:JR,bsdfs:KR,iridescence_fragment:QR,bumpmap_pars_fragment:jR,clipping_planes_fragment:$R,clipping_planes_pars_fragment:tC,clipping_planes_pars_vertex:eC,clipping_planes_vertex:nC,color_fragment:iC,color_pars_fragment:sC,color_pars_vertex:aC,color_vertex:rC,common:oC,defaultnormal_vertex:lC,displacementmap_pars_vertex:cC,displacementmap_vertex:uC,emissivemap_fragment:hC,emissivemap_pars_fragment:fC,colorspace_fragment:dC,colorspace_pars_fragment:pC,envmap_fragment:mC,envmap_common_pars_fragment:gC,envmap_pars_fragment:_C,envmap_pars_vertex:vC,envmap_physical_pars_fragment:CC,envmap_vertex:yC,fog_vertex:xC,fog_pars_vertex:SC,fog_fragment:MC,fog_pars_fragment:bC,gradientmap_pars_fragment:TC,lightmap_pars_fragment:EC,lights_lambert_fragment:AC,lights_lambert_pars_fragment:wC,lights_pars_begin:RC,lights_toon_fragment:NC,lights_toon_pars_fragment:DC,lights_phong_fragment:LC,lights_phong_pars_fragment:UC,lights_physical_fragment:OC,lights_physical_pars_fragment:IC,lights_fragment_begin:PC,lights_fragment_maps:BC,lights_fragment_end:zC,lightprobes_pars_fragment:FC,logdepthbuf_fragment:HC,logdepthbuf_pars_fragment:GC,logdepthbuf_pars_vertex:VC,logdepthbuf_vertex:kC,map_fragment:XC,map_pars_fragment:WC,map_particle_fragment:qC,map_particle_pars_fragment:YC,metalnessmap_fragment:ZC,metalnessmap_pars_fragment:JC,morphinstance_vertex:KC,morphcolor_vertex:QC,morphnormal_vertex:jC,morphtarget_pars_vertex:$C,morphtarget_vertex:t3,normal_fragment_begin:e3,normal_fragment_maps:n3,normal_pars_fragment:i3,normal_pars_vertex:s3,normal_vertex:a3,normalmap_pars_fragment:r3,clearcoat_normal_fragment_begin:o3,clearcoat_normal_fragment_maps:l3,clearcoat_pars_fragment:c3,iridescence_pars_fragment:u3,opaque_fragment:h3,packing:f3,premultiplied_alpha_fragment:d3,project_vertex:p3,dithering_fragment:m3,dithering_pars_fragment:g3,roughnessmap_fragment:_3,roughnessmap_pars_fragment:v3,shadowmap_pars_fragment:y3,shadowmap_pars_vertex:x3,shadowmap_vertex:S3,shadowmask_pars_fragment:M3,skinbase_vertex:b3,skinning_pars_vertex:T3,skinning_vertex:E3,skinnormal_vertex:A3,specularmap_fragment:w3,specularmap_pars_fragment:R3,tonemapping_fragment:C3,tonemapping_pars_fragment:N3,transmission_fragment:D3,transmission_pars_fragment:L3,uv_pars_fragment:U3,uv_pars_vertex:O3,uv_vertex:I3,worldpos_vertex:P3,background_vert:B3,background_frag:z3,backgroundCube_vert:F3,backgroundCube_frag:H3,cube_vert:G3,cube_frag:V3,depth_vert:k3,depth_frag:X3,distance_vert:W3,distance_frag:q3,equirect_vert:Y3,equirect_frag:Z3,linedashed_vert:J3,linedashed_frag:K3,meshbasic_vert:Q3,meshbasic_frag:j3,meshlambert_vert:$3,meshlambert_frag:t2,meshmatcap_vert:e2,meshmatcap_frag:n2,meshnormal_vert:i2,meshnormal_frag:s2,meshphong_vert:a2,meshphong_frag:r2,meshphysical_vert:o2,meshphysical_frag:l2,meshtoon_vert:c2,meshtoon_frag:u2,points_vert:h2,points_frag:f2,shadow_vert:d2,shadow_frag:p2,sprite_vert:m2,sprite_frag:g2},_t={common:{diffuse:{value:new qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Pt},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Pt}},envmap:{envMap:{value:null},envMapRotation:{value:new Pt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Pt},normalScale:{value:new jt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0},uvTransform:{value:new Pt}},sprite:{diffuse:{value:new qt(16777215)},opacity:{value:1},center:{value:new jt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Pt},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0}}},ms={basic:{uniforms:Dn([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.fog]),vertexShader:Yt.meshbasic_vert,fragmentShader:Yt.meshbasic_frag},lambert:{uniforms:Dn([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new qt(0)},envMapIntensity:{value:1}}]),vertexShader:Yt.meshlambert_vert,fragmentShader:Yt.meshlambert_frag},phong:{uniforms:Dn([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new qt(0)},specular:{value:new qt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphong_vert,fragmentShader:Yt.meshphong_frag},standard:{uniforms:Dn([_t.common,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.roughnessmap,_t.metalnessmap,_t.fog,_t.lights,{emissive:{value:new qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag},toon:{uniforms:Dn([_t.common,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.gradientmap,_t.fog,_t.lights,{emissive:{value:new qt(0)}}]),vertexShader:Yt.meshtoon_vert,fragmentShader:Yt.meshtoon_frag},matcap:{uniforms:Dn([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,{matcap:{value:null}}]),vertexShader:Yt.meshmatcap_vert,fragmentShader:Yt.meshmatcap_frag},points:{uniforms:Dn([_t.points,_t.fog]),vertexShader:Yt.points_vert,fragmentShader:Yt.points_frag},dashed:{uniforms:Dn([_t.common,_t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Yt.linedashed_vert,fragmentShader:Yt.linedashed_frag},depth:{uniforms:Dn([_t.common,_t.displacementmap]),vertexShader:Yt.depth_vert,fragmentShader:Yt.depth_frag},normal:{uniforms:Dn([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,{opacity:{value:1}}]),vertexShader:Yt.meshnormal_vert,fragmentShader:Yt.meshnormal_frag},sprite:{uniforms:Dn([_t.sprite,_t.fog]),vertexShader:Yt.sprite_vert,fragmentShader:Yt.sprite_frag},background:{uniforms:{uvTransform:{value:new Pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Yt.background_vert,fragmentShader:Yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Pt}},vertexShader:Yt.backgroundCube_vert,fragmentShader:Yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Yt.cube_vert,fragmentShader:Yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Yt.equirect_vert,fragmentShader:Yt.equirect_frag},distance:{uniforms:Dn([_t.common,_t.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Yt.distance_vert,fragmentShader:Yt.distance_frag},shadow:{uniforms:Dn([_t.lights,_t.fog,{color:{value:new qt(0)},opacity:{value:1}}]),vertexShader:Yt.shadow_vert,fragmentShader:Yt.shadow_frag}};ms.physical={uniforms:Dn([ms.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Pt},clearcoatNormalScale:{value:new jt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Pt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Pt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Pt},sheen:{value:0},sheenColor:{value:new qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Pt},transmissionSamplerSize:{value:new jt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Pt},attenuationDistance:{value:0},attenuationColor:{value:new qt(0)},specularColor:{value:new qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Pt},anisotropyVector:{value:new jt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Pt}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag};var Id={r:0,b:0,g:0},_2=new Le,P1=new Pt;P1.set(-1,0,0,0,1,0,0,0,1);function v2(e,t,n,i,s,a){let r=new qt(0),o=s===!0?0:1,l,c,f=null,p=0,u=null;function d(m){let y=m.isScene===!0?m.background:null;if(y&&y.isTexture){let x=m.backgroundBlurriness>0;y=t.get(y,x)}return y}function v(m){let y=!1,x=d(m);x===null?g(r,o):x&&x.isColor&&(g(x,1),y=!0);let E=e.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function M(m,y){let x=d(y);x&&x.isCubeTexture?(c===void 0&&(c=new Xe(new Ws(1,1,1),new hs({name:"BackgroundCubeMaterial",uniforms:wr(ms.backgroundCube.uniforms),vertexShader:ms.backgroundCube.vertexShader,fragmentShader:ms.backgroundCube.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,w,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(_2.makeRotationFromEuler(y.backgroundRotation)).transpose(),x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(P1),c.material.toneMapped=ne.getTransfer(x.colorSpace)!==pe,(f!==x||p!==x.version||u!==e.toneMapping)&&(c.material.needsUpdate=!0,f=x,p=x.version,u=e.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Xe(new Zn(2,2),new hs({name:"BackgroundMaterial",uniforms:wr(ms.background.uniforms),vertexShader:ms.background.vertexShader,fragmentShader:ms.background.fragmentShader,side:Ga,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=ne.getTransfer(x.colorSpace)!==pe,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(f!==x||p!==x.version||u!==e.toneMapping)&&(l.material.needsUpdate=!0,f=x,p=x.version,u=e.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function g(m,y){m.getRGB(Id,e_(e)),n.buffers.color.setClear(Id.r,Id.g,Id.b,y,a)}function h(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return r},setClearColor:function(m,y=1){r.set(m),o=y,g(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(m){o=m,g(r,o)},render:v,addToRenderList:M,dispose:h}}function y2(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},s=u(null),a=s,r=!1;function o(D,I,G,N,k){let X=!1,F=p(D,N,G,I);a!==F&&(a=F,c(a.object)),X=d(D,N,G,k),X&&v(D,N,G,k),k!==null&&t.update(k,e.ELEMENT_ARRAY_BUFFER),(X||r)&&(r=!1,x(D,I,G,N),k!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function l(){return e.createVertexArray()}function c(D){return e.bindVertexArray(D)}function f(D){return e.deleteVertexArray(D)}function p(D,I,G,N){let k=N.wireframe===!0,X=i[I.id];X===void 0&&(X={},i[I.id]=X);let F=D.isInstancedMesh===!0?D.id:0,nt=X[F];nt===void 0&&(nt={},X[F]=nt);let W=nt[G.id];W===void 0&&(W={},nt[G.id]=W);let $=W[k];return $===void 0&&($=u(l()),W[k]=$),$}function u(D){let I=[],G=[],N=[];for(let k=0;k<n;k++)I[k]=0,G[k]=0,N[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:G,attributeDivisors:N,object:D,attributes:{},index:null}}function d(D,I,G,N){let k=a.attributes,X=I.attributes,F=0,nt=G.getAttributes();for(let W in nt)if(nt[W].location>=0){let et=k[W],pt=X[W];if(pt===void 0&&(W==="instanceMatrix"&&D.instanceMatrix&&(pt=D.instanceMatrix),W==="instanceColor"&&D.instanceColor&&(pt=D.instanceColor)),et===void 0||et.attribute!==pt||pt&&et.data!==pt.data)return!0;F++}return a.attributesNum!==F||a.index!==N}function v(D,I,G,N){let k={},X=I.attributes,F=0,nt=G.getAttributes();for(let W in nt)if(nt[W].location>=0){let et=X[W];et===void 0&&(W==="instanceMatrix"&&D.instanceMatrix&&(et=D.instanceMatrix),W==="instanceColor"&&D.instanceColor&&(et=D.instanceColor));let pt={};pt.attribute=et,et&&et.data&&(pt.data=et.data),k[W]=pt,F++}a.attributes=k,a.attributesNum=F,a.index=N}function M(){let D=a.newAttributes;for(let I=0,G=D.length;I<G;I++)D[I]=0}function g(D){h(D,0)}function h(D,I){let G=a.newAttributes,N=a.enabledAttributes,k=a.attributeDivisors;G[D]=1,N[D]===0&&(e.enableVertexAttribArray(D),N[D]=1),k[D]!==I&&(e.vertexAttribDivisor(D,I),k[D]=I)}function m(){let D=a.newAttributes,I=a.enabledAttributes;for(let G=0,N=I.length;G<N;G++)I[G]!==D[G]&&(e.disableVertexAttribArray(G),I[G]=0)}function y(D,I,G,N,k,X,F){F===!0?e.vertexAttribIPointer(D,I,G,k,X):e.vertexAttribPointer(D,I,G,N,k,X)}function x(D,I,G,N){M();let k=N.attributes,X=G.getAttributes(),F=I.defaultAttributeValues;for(let nt in X){let W=X[nt];if(W.location>=0){let $=k[nt];if($===void 0&&(nt==="instanceMatrix"&&D.instanceMatrix&&($=D.instanceMatrix),nt==="instanceColor"&&D.instanceColor&&($=D.instanceColor)),$!==void 0){let et=$.normalized,pt=$.itemSize,It=t.get($);if(It===void 0)continue;let Z=It.buffer,at=It.type,yt=It.bytesPerElement,wt=at===e.INT||at===e.UNSIGNED_INT||$.gpuType===jf;if($.isInterleavedBufferAttribute){let mt=$.data,Bt=mt.isInterleavedBuffer===!0?mt.stride:mt.itemSize,Ue=$.offset;if(mt.isInstancedInterleavedBuffer||mt.isInstancedBufferAttribute){for(let Dt=0;Dt<W.locationSize;Dt++)h(W.location+Dt,mt.meshPerAttribute);D.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let Dt=0;Dt<W.locationSize;Dt++)g(W.location+Dt);e.bindBuffer(e.ARRAY_BUFFER,Z);for(let Dt=0;Dt<W.locationSize;Dt++)y(W.location+Dt,pt/W.locationSize,at,et,Bt*yt,(Ue+pt/W.locationSize*Dt)*yt,wt)}else{if($.isInstancedBufferAttribute){for(let mt=0;mt<W.locationSize;mt++)h(W.location+mt,$.meshPerAttribute);D.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let mt=0;mt<W.locationSize;mt++)g(W.location+mt);e.bindBuffer(e.ARRAY_BUFFER,Z);for(let mt=0;mt<W.locationSize;mt++)y(W.location+mt,pt/W.locationSize,at,et,pt*yt,pt/W.locationSize*mt*yt,wt)}}else if(F!==void 0){let et=F[nt];if(et!==void 0)switch(et.length){case 2:e.vertexAttrib2fv(W.location,et);break;case 3:e.vertexAttrib3fv(W.location,et);break;case 4:e.vertexAttrib4fv(W.location,et);break;default:e.vertexAttrib1fv(W.location,et)}}}}m()}function E(){O();for(let D in i){let I=i[D];for(let G in I){let N=I[G];for(let k in N){let X=N[k];for(let F in X)f(X[F].object),delete X[F];delete N[k]}}delete i[D]}}function w(D){if(i[D.id]===void 0)return;let I=i[D.id];for(let G in I){let N=I[G];for(let k in N){let X=N[k];for(let F in X)f(X[F].object),delete X[F];delete N[k]}}delete i[D.id]}function _(D){for(let I in i){let G=i[I];for(let N in G){let k=G[N];if(k[D.id]===void 0)continue;let X=k[D.id];for(let F in X)f(X[F].object),delete X[F];delete k[D.id]}}}function T(D){for(let I in i){let G=i[I],N=D.isInstancedMesh===!0?D.id:0,k=G[N];if(k!==void 0){for(let X in k){let F=k[X];for(let nt in F)f(F[nt].object),delete F[nt];delete k[X]}delete G[N],Object.keys(G).length===0&&delete i[I]}}}function O(){R(),r=!0,a!==s&&(a=s,c(a.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:O,resetDefaultState:R,dispose:E,releaseStatesOfGeometry:w,releaseStatesOfObject:T,releaseStatesOfProgram:_,initAttributes:M,enableAttribute:g,disableUnusedAttributes:m}}function x2(e,t,n){let i;function s(l){i=l}function a(l,c){e.drawArrays(i,l,c),n.update(c,i,1)}function r(l,c,f){f!==0&&(e.drawArraysInstanced(i,l,c,f),n.update(c,i,f))}function o(l,c,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,f);let u=0;for(let d=0;d<f;d++)u+=c[d];n.update(u,i,1)}this.setMode=s,this.render=a,this.renderInstances=r,this.renderMultiDraw=o}function S2(e,t,n,i){let s;function a(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let _=t.get("EXT_texture_filter_anisotropic");s=e.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(_){return!(_!==Gi&&i.convert(_)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){let T=_===Hi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(_!==Jn&&_!==Fi&&!T&&i.convert(_)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp",f=l(c);f!==c&&(Lt("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);let p=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=n.logarithmicDepthBuffer===!0&&p===!1;n.reversedDepthBuffer===!0&&p===!1&&Lt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),n.logarithmicDepthBuffer===!0&&p===!0&&Lt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),v=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),h=e.getParameter(e.MAX_VERTEX_ATTRIBS),m=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),x=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),E=e.getParameter(e.MAX_SAMPLES),w=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:p,maxTextures:d,maxVertexTextures:v,maxTextureSize:M,maxCubemapSize:g,maxAttributes:h,maxVertexUniforms:m,maxVaryings:y,maxFragmentUniforms:x,maxSamples:E,samples:w}}function M2(e){let t=this,n=null,i=0,s=!1,a=!1,r=new Bi,o=new Pt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,u){let d=p.length!==0||u||i!==0||s;return s=u,i=p.length,d},this.beginShadows=function(){a=!0,f(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(p,u){n=f(p,u,0)},this.setState=function(p,u,d){let v=p.clippingPlanes,M=p.clipIntersection,g=p.clipShadows,h=e.get(p);if(!s||v===null||v.length===0||a&&!g)a?f(null):c();else{let m=a?0:i,y=m*4,x=h.clippingState||null;l.value=x,x=f(v,u,y,d);for(let E=0;E!==y;++E)x[E]=n[E];h.clippingState=x,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=m}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function f(p,u,d,v){let M=p!==null?p.length:0,g=null;if(M!==0){if(g=l.value,v!==!0||g===null){let h=d+M*4,m=u.matrixWorldInverse;o.getNormalMatrix(m),(g===null||g.length<h)&&(g=new Float32Array(h));for(let y=0,x=d;y!==M;++y,x+=4)r.copy(p[y]).applyMatrix4(m,o),r.normal.toArray(g,x),g[x+3]=r.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,g}}var $c=class extends hi{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Nc(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ws(5,5,5),a=new hs({name:"CubemapFromEquirect",uniforms:wr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Hn,blending:br});a.uniforms.tEquirect.value=n;let r=new Xe(s,a),o=n.minFilter;return n.minFilter===qs&&(n.minFilter=hn),new nl(1,10,this).update(t,r),n.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,n=!0,i=!0,s=!0){let a=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(n,i,s);t.setRenderTarget(a)}},p1=256,b2=3,T2=20,B1=256,z1=16,E2=3,A2=new V,w2=new qt,Bd=class e{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new nl(1,10,null),this._boxMesh=new Xe(new Ws(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,n=0,i=.1,s=100,a={}){let{size:r=256,position:o=A2}=a,l=this._renderer;this._setSize(r);let c=this._allocateTarget(),f=this._getSourceTarget(!0);n>0&&(f.texture.mipmapsAutoUpdate=!1);let p=l.autoClear,u=l.autoClearColor,d=l.autoClearDepth,v=l.autoClearStencil,M=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,M===null&&(t.background=l.getClearColor(w2));let g=new nl(i,s,f);return g.position.copy(o),g.update(l,t),l.autoClear=p,l.autoClearColor=u,l.autoClearDepth=d,l.autoClearStencil=v,t.background=M,n>0&&(f.texture.mipmapsAutoUpdate=!0,this._blur(c,n)),this._applyPMREM(c),c}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_1(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=g1(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,n){return n>0?1-Math.sqrt(1-t/n):0}_setSize(t){this._cubeSize=Math.max(p1,c1(t))}_fromTexture(t,n){t.mapping===Er||t.mapping===al?this._setSize(t.image.length===0?p1:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let i=n||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(i),i}_allocateTarget(){let t=this._cubeSize,n=m1(t,!1,!1),i=Math.log2(t)-b2;for(let s=0;s<=i;s++)n.texture.mipmaps.push({width:t>>s,height:t>>s});return n.texture.name="PMREM",n.texture.isPMREMTexture=!0,n}_getSourceTarget(t=!1){let n=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==n||t&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=m1(n,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,n,i){let s=this._boxMesh,a=this._cubeCamera;s.material=i,a.renderTarget=t,a.activeMipmapLevel=n;let r=t.width>>n;t.viewport.set(0,0,r,r),a.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let n;t.mapping===Er||t.mapping===al?(this._cubemapMaterial===null&&(this._cubemapMaterial=_1()),n=this._cubemapMaterial,n.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=g1()),n=this._equirectMaterial),n.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,n)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=R2(),this._integrationMaterial=C2());let n=this._cubeSize,i=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let a=this._integrationMaterial.uniforms;a.envMap.value=this._sourceTarget.texture,a.sourceLod.value=Math.log2(n/z1);for(let r=0;r<=i;r++){let o=e.lodToRoughness(r,i);if(r>i-E2)a.roughness.value=o,this._renderCube(t,r,this._integrationMaterial);else{let l=o>0?Math.log2(n)+.5*Math.log2(6/(B1*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(t,r,this._ggxMaterial)}}}_blur(t,n){this._blurMaterial===null&&(this._blurMaterial=N2());let i=this._blurMaterial,s=i.uniforms,a=this._sourceTarget;s.sigma.value=Math.min(n,Math.PI)/Math.SQRT2,s.envMap.value=a.texture,this._renderCube(t,0,i),s.envMap.value=t.texture,this._renderCube(a,0,i)}};function m1(e,t,n){return new $c(e,{minFilter:qs,generateMipmaps:t,type:Hi,colorSpace:Mc,depthBuffer:n})}function tu(e,t,n){return new hs({name:e,uniforms:t,vertexShader:Yt.cube_vert,fragmentShader:n,side:Hn,blending:br,depthTest:!1,depthWrite:!1})}function R2(){return tu("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${B1}u

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
	`)}function C2(){return tu("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:z1}},`

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
	`)}function N2(){return tu("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${T2}
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
	`)}function g1(){return tu("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function _1(){return tu("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function D2(e){let t=new WeakMap,n=new WeakMap,i=null;function s(u,d=!1){return u==null?null:d?r(u):a(u)}function a(u){if(u&&u.isTexture){let d=u.mapping;if(d===Jf||d===Kf)if(t.has(u)){let v=t.get(u).texture;return o(v,u.mapping)}else{let v=u.image;if(v&&v.height>0){let M=new $c(v.height);return M.fromEquirectangularTexture(e,u),t.set(u,M),u.addEventListener("dispose",c),o(M.texture,u.mapping)}else return null}}return u}function r(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let d=u.mapping,v=d===Jf||d===Kf,M=d===Er||d===al;if(v||M){let g=n.get(u),h=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==h)return i===null&&(i=new Bd(e)),g=v?i.fromEquirectangular(u,g):i.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,n.set(u,g),g.texture;if(g!==void 0)return g.texture;{let m=u.image;return v&&m&&m.height>0||M&&m&&l(m)?(i===null&&(i=new Bd(e)),g=v?i.fromEquirectangular(u):i.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,n.set(u,g),u.addEventListener("dispose",f),g.texture):null}}}return u}function o(u,d){return d===Jf?u.mapping=Er:d===Kf&&(u.mapping=al),u}function l(u){let d=0,v=6;for(let M=0;M<v;M++)u[M]!==void 0&&d++;return d===v}function c(u){let d=u.target;d.removeEventListener("dispose",c);let v=t.get(d);v!==void 0&&(t.delete(d),v.dispose())}function f(u){let d=u.target;d.removeEventListener("dispose",f);let v=n.get(d);v!==void 0&&(n.delete(d),v.dispose())}function p(){t=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:p}}function L2(e){let t={};function n(i){if(t[i]!==void 0)return t[i];let s=e.getExtension(i);return t[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let s=n(i);return s===null&&xc("WebGLRenderer: "+i+" extension not supported."),s}}}function U2(e,t,n,i){let s={},a=new WeakMap,r=new FinalizationRegistry(v=>delete s[v]);function o(v){l(v.target)}function l(v){v.index!==null&&t.remove(v.index);for(let g in v.attributes)t.remove(v.attributes[g]);v.removeEventListener("dispose",o),delete s[v.id],r.unregister(v);let M=a.get(v);M&&(t.remove(M),a.delete(v)),i.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,n.memory.geometries--}function c(v,M){return s[M.id]!==void 0||(M.addEventListener("dispose",o),s[M.id]=new WeakRef(M),r.register(M,M.id,M),n.memory.geometries++),M}function f(v){let M=v.attributes;for(let g in M)t.update(M[g],e.ARRAY_BUFFER)}function p(v){let M=v.index,g=v.attributes.position,h=0;if(g===void 0)return;let m=M!==null?M.array.length:g.array.length/3-1,y=g.count>=65535?Rc:wc,x=new y(Math.ceil(m/3)*6,1),E=x.array;if(M!==null){let _=M.array;h=M.version;for(let T=0,O=0;T<m;T+=3){let R=_[T+0],D=_[T+1],I=_[T+2];E[O++]=R,E[O++]=D,E[O++]=D,E[O++]=I,E[O++]=I,E[O++]=R}}else{h=g.version;for(let _=0,T=0;_<m;_+=3){let O=_+0,R=_+1,D=_+2;E[T++]=O,E[T++]=R,E[T++]=R,E[T++]=D,E[T++]=D,E[T++]=O}}x.version=h;let w=a.get(v);w&&t.remove(w),a.set(v,x)}function u(v){let M=a.get(v);if(M){let g=v.index;g!==null&&M.version<g.version&&p(v)}else p(v);return a.get(v)}function d(){for(let v in s){let M=s[v].deref();M!==void 0&&l(M)}}return{get:c,update:f,getWireframeAttribute:u,dispose:d}}function O2(e,t,n){let i;function s(p){i=p}let a,r;function o(p){a=p.type,r=p.bytesPerElement}function l(p,u){e.drawElements(i,u,a,p*r),n.update(u,i,1)}function c(p,u,d){d!==0&&(e.drawElementsInstanced(i,u,a,p*r,d),n.update(u,i,d))}function f(p,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,a,p,0,d);let M=0;for(let g=0;g<d;g++)M+=u[g];n.update(M,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f}function I2(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,r,o){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=o*(a/3);break;case e.LINES:n.lines+=o*(a/2);break;case e.LINE_STRIP:n.lines+=o*(a-1);break;case e.LINE_LOOP:n.lines+=o*a;break;case e.POINTS:n.points+=o*a;break;default:Ot("WebGLInfo: Unknown draw mode:",r);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:s,update:i}}function P2(e,t,n){let i=new WeakMap,s=new Pe;function a(r,o,l){let c=r.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=f!==void 0?f.length:0,u=i.get(o);if(u===void 0||u.count!==p){let O=function(){_.dispose(),i.delete(o),o.removeEventListener("dispose",O)};u!==void 0&&u.texture.dispose();let d=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],h=o.morphAttributes.normal||[],m=o.morphAttributes.color||[],y=0;d===!0&&(y=1),v===!0&&(y=2),M===!0&&(y=3);let x=o.attributes.position.count*y,E=1;x>t.maxTextureSize&&(E=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let w=new Float32Array(x*E*4*p),_=new Tc(w,x,E,p);_.type=Fi,_.needsUpdate=!0;let T=y*4;for(let R=0;R<p;R++){let D=g[R],I=h[R],G=m[R],N=x*E*4*R;for(let k=0;k<D.count;k++){let X=k*T;d===!0&&(s.fromBufferAttribute(D,k),w[N+X+0]=s.x,w[N+X+1]=s.y,w[N+X+2]=s.z,w[N+X+3]=0),v===!0&&(s.fromBufferAttribute(I,k),w[N+X+4]=s.x,w[N+X+5]=s.y,w[N+X+6]=s.z,w[N+X+7]=0),M===!0&&(s.fromBufferAttribute(G,k),w[N+X+8]=s.x,w[N+X+9]=s.y,w[N+X+10]=s.z,w[N+X+11]=G.itemSize===4?s.w:1)}}u={count:p,texture:_,size:new jt(x,E)},i.set(o,u),o.addEventListener("dispose",O)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",r.morphTexture,n);else{let d=0;for(let M=0;M<c.length;M++)d+=c[M];let v=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(e,"morphTargetBaseInfluence",v),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",u.texture,n),l.getUniforms().setValue(e,"morphTargetsTextureSize",u.size)}return{update:a}}function B2(e,t,n,i,s){let a=new WeakMap;function r(c){let f=s.render.frame,p=c.geometry,u=t.get(c,p);if(a.get(u)!==f&&(t.update(u),a.set(u,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),a.get(c)!==f&&(n.update(c.instanceMatrix,e.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,e.ARRAY_BUFFER),a.set(c,f))),c.isSkinnedMesh){let d=c.skeleton;a.get(d)!==f&&(d.update(),a.set(d,f))}return u}function o(){a=new WeakMap}function l(c){let f=c.target;f.removeEventListener("dispose",l),i.releaseStatesOfObject(f),n.remove(f.instanceMatrix),f.instanceColor!==null&&n.remove(f.instanceColor)}return{update:r,dispose:o}}var z2={[O0]:"LINEAR_TONE_MAPPING",[I0]:"REINHARD_TONE_MAPPING",[P0]:"CINEON_TONE_MAPPING",[B0]:"ACES_FILMIC_TONE_MAPPING",[F0]:"AGX_TONE_MAPPING",[H0]:"NEUTRAL_TONE_MAPPING",[z0]:"CUSTOM_TONE_MAPPING"};function F2(e,t,n,i,s,a){let r=new hi(t,n,{type:e,depthBuffer:s,stencilBuffer:a,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,f=new Ia;f.setAttribute("position",new Ei([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new Ei([0,2,0,0,2,0],2));let p=new Of({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new Xe(f,p),d=new Fc(-1,1,1,-1,0,1),v=null,M=null,g=!1,h,m=null,y=[],x=!1;this.setSize=function(E,w){r.setSize(E,w),o!==null&&o.setSize(E,w),l!==null&&l.setSize(E,w);for(let _=0;_<y.length;_++){let T=y[_];T.setSize&&T.setSize(E,w)}},this.setEffects=function(E){y=E,x=y.length>0&&y[0].isRenderPass===!0;let w=r.width,_=r.height;y.length>0&&o===null&&(o=new hi(w,_,{type:Hi,depthBuffer:!1,stencilBuffer:!1}),l=new hi(w,_,{type:Hi,depthBuffer:!1,stencilBuffer:!1}));let T=s===!0&&y.some(O=>O.needsDepthTexture===!0);T!==(r.depthTexture!==null)&&(T===!0&&c===null&&(c=new Xs(w,_),a===!0&&(c.format=Ys,c.type=Ar)),r.dispose(),r.depthTexture=T?c:null,r.resolveDepthBuffer=T,r.storeMultisampledDepthBuffer=T);for(let O=0;O<y.length;O++){let R=y[O];R.setSize&&R.setSize(w,_),T&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(c)}},this.begin=function(E,w){if(g||E.toneMapping===ds&&y.length===0)return!1;if(m=w,w!==null){let _=w.width,T=w.height;(r.width!==_||r.height!==T)&&this.setSize(_,T)}return x===!1&&E.setRenderTarget(r),h=E.toneMapping,E.toneMapping=ds,!0},this.hasRenderPass=function(){return x},this.end=function(E,w){E.toneMapping=h,g=!0;let _=r,T=o;for(let O=0;O<y.length;O++){let R=y[O];R.enabled!==!1&&(R.render(E,T,_,w),R.needsSwap!==!1&&(_=T,T=T===o?l:o))}if(v!==E.outputColorSpace||M!==E.toneMapping){v=E.outputColorSpace,M=E.toneMapping,p.defines={},ne.getTransfer(v)===pe&&(p.defines.SRGB_TRANSFER="");let O=z2[M];O&&(p.defines[O]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=_.texture,E.setRenderTarget(m),E.render(u,d),m=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){r.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),f.dispose(),p.dispose()}}var F1=new Cn,H1=new Xs(1,1),G1=new Lc(1),V1=new Tc,k1=new Df,X1=new Nc,v1=[],y1=[],x1=new Float32Array(16),S1=new Float32Array(9),M1=new Float32Array(4);function ll(e,t,n){let i=e[0];if(i<=0||i>0)return e;let s=t*n,a=v1[s];if(a===void 0&&(a=new Float32Array(s),v1[s]=a),t!==0){i.toArray(a,0);for(let r=1,o=0;r!==t;++r)o+=n,e[r].toArray(a,o)}return a}function tn(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function en(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function Fd(e,t){let n=y1[t];n===void 0&&(n=new Int32Array(t),y1[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function H2(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function G2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(tn(n,t))return;e.uniform2fv(this.addr,t),en(n,t)}}function V2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(tn(n,t))return;e.uniform3fv(this.addr,t),en(n,t)}}function k2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(tn(n,t))return;e.uniform4fv(this.addr,t),en(n,t)}}function X2(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(tn(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),en(n,t)}else{if(tn(n,i))return;M1.set(i),e.uniformMatrix2fv(this.addr,!1,M1),en(n,i)}}function W2(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(tn(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),en(n,t)}else{if(tn(n,i))return;S1.set(i),e.uniformMatrix3fv(this.addr,!1,S1),en(n,i)}}function q2(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(tn(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),en(n,t)}else{if(tn(n,i))return;x1.set(i),e.uniformMatrix4fv(this.addr,!1,x1),en(n,i)}}function Y2(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Z2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(tn(n,t))return;e.uniform2iv(this.addr,t),en(n,t)}}function J2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(tn(n,t))return;e.uniform3iv(this.addr,t),en(n,t)}}function K2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(tn(n,t))return;e.uniform4iv(this.addr,t),en(n,t)}}function Q2(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function j2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(tn(n,t))return;e.uniform2uiv(this.addr,t),en(n,t)}}function $2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(tn(n,t))return;e.uniform3uiv(this.addr,t),en(n,t)}}function tN(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(tn(n,t))return;e.uniform4uiv(this.addr,t),en(n,t)}}function Hd(e){return e.version===0&&(e.compareFunction=Q0,e.needsUpdate=!0),e}function eN(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s);let a;this.type===e.SAMPLER_2D_SHADOW?a=Hd(H1):a=F1,n.setTexture2D(t||a,s)}function nN(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(t||k1,s)}function iN(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s);let a;this.type===e.SAMPLER_CUBE_SHADOW?a=Hd(G1):a=X1,n.setTextureCube(t||a,s)}function sN(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(t||V1,s)}function aN(e){switch(e){case 5126:return H2;case 35664:return G2;case 35665:return V2;case 35666:return k2;case 35674:return X2;case 35675:return W2;case 35676:return q2;case 5124:case 35670:return Y2;case 35667:case 35671:return Z2;case 35668:case 35672:return J2;case 35669:case 35673:return K2;case 5125:return Q2;case 36294:return j2;case 36295:return $2;case 36296:return tN;case 35678:case 36198:case 36298:case 36306:case 35682:return eN;case 35679:case 36299:case 36307:return nN;case 35680:case 36300:case 36308:case 36293:return iN;case 36289:case 36303:case 36311:case 36292:return sN}}function rN(e,t){e.uniform1fv(this.addr,t)}function oN(e,t){let n=ll(t,this.size,2);e.uniform2fv(this.addr,n)}function lN(e,t){let n=ll(t,this.size,3);e.uniform3fv(this.addr,n)}function cN(e,t){let n=ll(t,this.size,4);e.uniform4fv(this.addr,n)}function uN(e,t){let n=ll(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function hN(e,t){let n=ll(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function fN(e,t){let n=ll(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function dN(e,t){e.uniform1iv(this.addr,t)}function pN(e,t){e.uniform2iv(this.addr,t)}function mN(e,t){e.uniform3iv(this.addr,t)}function gN(e,t){e.uniform4iv(this.addr,t)}function _N(e,t){e.uniform1uiv(this.addr,t)}function vN(e,t){e.uniform2uiv(this.addr,t)}function yN(e,t){e.uniform3uiv(this.addr,t)}function xN(e,t){e.uniform4uiv(this.addr,t)}function SN(e,t,n){let i=this.cache,s=t.length,a=Fd(n,s);tn(i,a)||(e.uniform1iv(this.addr,a),en(i,a));let r;this.type===e.SAMPLER_2D_SHADOW?r=Hd(H1):r=F1;for(let o=0;o!==s;++o)n.setTexture2D(t[o]||r,a[o])}function MN(e,t,n){let i=this.cache,s=t.length,a=Fd(n,s);tn(i,a)||(e.uniform1iv(this.addr,a),en(i,a));for(let r=0;r!==s;++r)n.setTexture3D(t[r]||k1,a[r])}function bN(e,t,n){let i=this.cache,s=t.length,a=Fd(n,s);tn(i,a)||(e.uniform1iv(this.addr,a),en(i,a));let r;this.type===e.SAMPLER_CUBE_SHADOW?r=Hd(G1):r=X1;for(let o=0;o!==s;++o)n.setTextureCube(t[o]||r,a[o])}function TN(e,t,n){let i=this.cache,s=t.length,a=Fd(n,s);tn(i,a)||(e.uniform1iv(this.addr,a),en(i,a));for(let r=0;r!==s;++r)n.setTexture2DArray(t[r]||V1,a[r])}function EN(e){switch(e){case 5126:return rN;case 35664:return oN;case 35665:return lN;case 35666:return cN;case 35674:return uN;case 35675:return hN;case 35676:return fN;case 5124:case 35670:return dN;case 35667:case 35671:return pN;case 35668:case 35672:return mN;case 35669:case 35673:return gN;case 5125:return _N;case 36294:return vN;case 36295:return yN;case 36296:return xN;case 35678:case 36198:case 36298:case 36306:case 35682:return SN;case 35679:case 36299:case 36307:return MN;case 35680:case 36300:case 36308:case 36293:return bN;case 36289:case 36303:case 36311:case 36292:return TN}}var o_=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=aN(n.type)}},l_=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=EN(n.type)}},c_=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){let s=this.seq;for(let a=0,r=s.length;a!==r;++a){let o=s[a];o.setValue(t,n[o.id],i)}}},a_=/(\w+)(\])?(\[|\.)?/g;function b1(e,t){e.seq.push(t),e.map[t.id]=t}function AN(e,t,n){let i=e.name,s=i.length;for(a_.lastIndex=0;;){let a=a_.exec(i),r=a_.lastIndex,o=a[1],l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===s){b1(n,c===void 0?new o_(o,e,t):new l_(o,e,t));break}else{let p=n.map[o];p===void 0&&(p=new c_(o),b1(n,p)),n=p}}}var ol=class{constructor(t,n){this.seq=[],this.map={};let i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let o=t.getActiveUniform(n,r),l=t.getUniformLocation(n,o.name);AN(o,l,this)}let s=[],a=[];for(let r of this.seq)r.type===t.SAMPLER_2D_SHADOW||r.type===t.SAMPLER_CUBE_SHADOW||r.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(r):a.push(r);s.length>0&&(this.seq=s.concat(a))}setValue(t,n,i,s){let a=this.map[n];a!==void 0&&a.setValue(t,i,s)}setOptional(t,n,i){let s=n[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,n,i,s){for(let a=0,r=n.length;a!==r;++a){let o=n[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,n){let i=[];for(let s=0,a=t.length;s!==a;++s){let r=t[s];r.id in n&&i.push(r)}return i}};function T1(e,t,n){let i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}var wN=37297,RN=0;function CN(e,t){let n=e.split(`
`),i=[],s=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let r=s;r<a;r++){let o=r+1;i.push(`${o===t?">":" "} ${o}: ${n[r]}`)}return i.join(`
`)}var E1=new Pt;function NN(e){ne._getMatrix(E1,ne.workingColorSpace,e);let t=`mat3( ${E1.elements.map(n=>n.toFixed(4))} )`;switch(ne.getTransfer(e)){case bc:return[t,"LinearTransferOETF"];case pe:return[t,"sRGBTransferOETF"];default:return Lt("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function A1(e,t,n){let i=e.getShaderParameter(t,e.COMPILE_STATUS),a=(e.getShaderInfoLog(t)||"").trim();if(i&&a==="")return"";let r=/ERROR: 0:(\d+)/.exec(a);if(r){let o=parseInt(r[1]);return n.toUpperCase()+`

`+a+`

`+CN(e.getShaderSource(t),o)}else return a}function DN(e,t){let n=NN(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var LN={[O0]:"Linear",[I0]:"Reinhard",[P0]:"Cineon",[B0]:"ACESFilmic",[F0]:"AgX",[H0]:"Neutral",[z0]:"Custom"};function UN(e,t){let n=LN[t];return n===void 0?(Lt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var Pd=new V;function ON(){ne.getLuminanceCoefficients(Pd);let e=Pd.x.toFixed(4),t=Pd.y.toFixed(4),n=Pd.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function IN(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(jc).join(`
`)}function PN(e){let t=[];for(let n in e){let i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function BN(e,t){let n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let a=e.getActiveAttrib(t,s),r=a.name,o=1;a.type===e.FLOAT_MAT2&&(o=2),a.type===e.FLOAT_MAT3&&(o=3),a.type===e.FLOAT_MAT4&&(o=4),n[r]={type:a.type,location:e.getAttribLocation(t,r),locationSize:o}}return n}function jc(e){return e!==""}function w1(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function R1(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var zN=/^[ \t]*#include +<([\w\d./]+)>/gm;function u_(e){return e.replace(zN,FN)}function FN(e,t){let n=Yt[t];if(n===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return u_(n)}var HN=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function C1(e){return e.replace(HN,GN)}function GN(e,t,n,i){let s="";for(let a=parseInt(t);a<parseInt(n);a++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function N1(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`),t}var VN={[Vc]:"SHADOWMAP_TYPE_PCF",[il]:"SHADOWMAP_TYPE_VSM"};function kN(e){return VN[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var XN={[al]:"ENVMAP_MODE_REFRACTION"};function WN(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":XN[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}var qN={[U0]:"ENVMAP_BLENDING_MULTIPLY",[Yb]:"ENVMAP_BLENDING_MIX",[Zb]:"ENVMAP_BLENDING_ADD"};function YN(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":qN[e.combine]||"ENVMAP_BLENDING_NONE"}function ZN(e,t,n,i){let s=e.getContext(),a=n.defines,r=n.vertexShader,o=n.fragmentShader,l=kN(n),c=n.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",f=WN(n),p=YN(n),u=IN(n),d=PN(a),v=s.createProgram(),M,g,h=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(M=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,d].filter(jc).join(`
`),M.length>0&&(M+=`
`),g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,d].filter(jc).join(`
`),g.length>0&&(g+=`
`)):(M=[N1(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,d,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+n.diffuseRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(jc).join(`
`),g=[N1(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,d,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+p:"",n.envMapPMREM?"#define ENVMAP_MAX_LOD "+n.envMapMaxLod+".0":"",n.envMapPMREM?"#define ENVMAP_SIZE "+n.envMapSize+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",n.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ds?"#define TONE_MAPPING":"",n.toneMapping!==ds?Yt.tonemapping_pars_fragment:"",n.toneMapping!==ds?UN("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Yt.colorspace_pars_fragment,DN("linearToOutputTexel",n.outputColorSpace),ON(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(jc).join(`
`)),r=u_(r),r=w1(r,n),r=R1(r,n),o=u_(o),o=w1(o,n),o=R1(o,n),r=C1(r),o=C1(o),n.isRawShaderMaterial!==!0&&(h=`#version 300 es
`,M=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,g=["#define varying in",n.glslVersion===j0?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===j0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let m=h+M+r,y=h+g+o,x=T1(s,s.VERTEX_SHADER,m),E=T1(s,s.FRAGMENT_SHADER,y);s.attachShader(v,x),s.attachShader(v,E),n.index0AttributeName!==void 0?s.bindAttribLocation(v,0,n.index0AttributeName):n.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function w(R){if(e.debug.checkShaderErrors){let D=s.getProgramInfoLog(v)||"",I=s.getShaderInfoLog(x)||"",G=s.getShaderInfoLog(E)||"",N=D.trim(),k=I.trim(),X=G.trim(),F=!0,nt=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(F=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(s,v,x,E);else{let W=A1(s,x,"vertex"),$=A1(s,E,"fragment");Ot("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+N+`
`+W+`
`+$)}else N!==""?Lt("WebGLProgram: Program Info Log:",N):(k===""||X==="")&&(nt=!1);nt&&(R.diagnostics={runnable:F,programLog:N,vertexShader:{log:k,prefix:M},fragmentShader:{log:X,prefix:g}})}s.deleteShader(x),s.deleteShader(E),_=new ol(s,v),T=BN(s,v)}let _;this.getUniforms=function(){return _===void 0&&w(this),_};let T;this.getAttributes=function(){return T===void 0&&w(this),T};let O=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=s.getProgramParameter(v,wN)),O},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=RN++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=x,this.fragmentShader=E,this}var JN=0,h_=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,n,i){let s=this._getShaderCacheForMaterial(t);return s.has(n)===!1&&(s.add(n),n.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let n=this.materialCache.get(t);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let n=this.materialCache,i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){let n=this.shaderCache,i=n.get(t);return i===void 0&&(i=new f_(t),n.set(t,i)),i}},f_=class{constructor(t){this.id=JN++,this.code=t,this.usedTimes=0}};function KN(e){return e===Va||e===Zc||e===Jc}function QN(e,t,n,i,s,a){let r=new jo,o=new h_,l=new Set,c=[],f=new Map,p=i.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(_){return l.add(_),_===0?"uv":`uv${_}`}function v(_,T,O,R,D,I){let G=R.fog,N=D.geometry,k=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?R.environment:null,X=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,F=t.get(_.envMap||k,X),nt=u[_.type],W=i.precision;_.precision!==null&&(W=i.getMaxPrecision(_.precision),W!==_.precision&&Lt("WebGLProgram.getParameters:",_.precision,"not supported, using",W,"instead."));let $=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,et=$!==void 0?$.length:0,pt=0;N.morphAttributes.position!==void 0&&(pt=1),N.morphAttributes.normal!==void 0&&(pt=2),N.morphAttributes.color!==void 0&&(pt=3);let It,Z,at,yt;if(nt){let gt=ms[nt];It=gt.vertexShader,Z=gt.fragmentShader}else{It=_.vertexShader,Z=_.fragmentShader;let gt=o.getVertexShaderStage(_),me=o.getFragmentShaderStage(_);o.update(_,gt,me),at=gt.id,yt=me.id}let wt=e.getRenderTarget(),mt=e.state.buffers.depth.getReversed(),Bt=D.isInstancedMesh===!0,Ue=D.isBatchedMesh===!0,Dt=!!_.map,le=!!_.matcap,fe=!!F,Zt=fe&&F.isPMREMTexture===!0,We=!!_.aoMap,Be=!!_.lightMap,fn=!!_.bumpMap&&_.wireframe===!1,Ee=!!_.normalMap,Qn=!!_.displacementMap,Ve=!!_.emissiveMap,St=!!_.metalnessMap,Et=!!_.roughnessMap,Gt=_.anisotropy>0,L=_.clearcoat>0,ye=_.diffuseRoughness>0,kt=_.dispersion>0,ie=_.retroreflectivity>0,lt=_.iridescence>0,Se=_.sheen>0,Rt=_.transmission>0,Ct=Gt&&!!_.anisotropyMap,A=L&&!!_.clearcoatMap,S=L&&!!_.clearcoatNormalMap,P=L&&!!_.clearcoatRoughnessMap,tt=ye&&!!_.diffuseRoughnessMap,j=lt&&!!_.iridescenceMap,rt=lt&&!!_.iridescenceThicknessMap,ft=Se&&!!_.sheenColorMap,Y=Se&&!!_.sheenRoughnessMap,J=!!_.specularMap,ct=!!_.specularColorMap,C=!!_.specularIntensityMap,K=Rt&&!!_.transmissionMap,q=Rt&&!!_.thicknessMap,ut=!!_.gradientMap,st=!!_.alphaMap,ot=_.alphaTest>0,At=!!_.alphaHash,Wt=!!_.extensions,it=ds;_.toneMapped&&(wt===null||wt.isXRRenderTarget===!0)&&(it=e.toneMapping);let Nt=Zt?F.isCompressedCubeTexture?F.image[0].mipmaps:F.mipmaps:null,Xt={shaderID:nt,shaderType:_.type,shaderName:_.name,vertexShader:It,fragmentShader:Z,defines:_.defines,customVertexShaderID:at,customFragmentShaderID:yt,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:W,batching:Ue,batchingColor:Ue&&D._colorsTexture!==null,instancing:Bt,instancingColor:Bt&&D.instanceColor!==null,instancingMorph:Bt&&D.morphTexture!==null,outputColorSpace:wt===null?e.outputColorSpace:wt.isXRRenderTarget===!0?wt.texture.colorSpace:ne.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Dt,matcap:le,envMap:fe,envMapMode:fe&&F.mapping,envMapPMREM:Zt,envMapMaxLod:Zt?Nt.length-1:null,envMapSize:Zt?Nt[0].width:null,aoMap:We,lightMap:Be,bumpMap:fn,normalMap:Ee,displacementMap:Qn,emissiveMap:Ve,normalMapObjectSpace:Ee&&_.normalMapType===Qb,normalMapTangentSpace:Ee&&_.normalMapType===Od,packedNormalMap:Ee&&_.normalMapType===Od&&KN(_.normalMap.format),metalnessMap:St,roughnessMap:Et,anisotropy:Gt,anisotropyMap:Ct,clearcoat:L,clearcoatMap:A,clearcoatNormalMap:S,clearcoatRoughnessMap:P,diffuseRoughness:ye,diffuseRoughnessMap:tt,dispersion:kt,retroreflection:ie,iridescence:lt,iridescenceMap:j,iridescenceThicknessMap:rt,sheen:Se,sheenColorMap:ft,sheenRoughnessMap:Y,specularMap:J,specularColorMap:ct,specularIntensityMap:C,transmission:Rt,transmissionMap:K,thicknessMap:q,gradientMap:ut,opaque:_.transparent===!1&&_.blending===sl&&_.alphaToCoverage===!1,alphaMap:st,alphaTest:ot,alphaHash:At,combine:_.combine,mapUv:Dt&&d(_.map.channel),aoMapUv:We&&d(_.aoMap.channel),lightMapUv:Be&&d(_.lightMap.channel),bumpMapUv:fn&&d(_.bumpMap.channel),normalMapUv:Ee&&d(_.normalMap.channel),displacementMapUv:Qn&&d(_.displacementMap.channel),emissiveMapUv:Ve&&d(_.emissiveMap.channel),metalnessMapUv:St&&d(_.metalnessMap.channel),roughnessMapUv:Et&&d(_.roughnessMap.channel),anisotropyMapUv:Ct&&d(_.anisotropyMap.channel),clearcoatMapUv:A&&d(_.clearcoatMap.channel),clearcoatNormalMapUv:S&&d(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:P&&d(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:tt&&d(_.diffuseRoughnessMap.channel),iridescenceMapUv:j&&d(_.iridescenceMap.channel),iridescenceThicknessMapUv:rt&&d(_.iridescenceThicknessMap.channel),sheenColorMapUv:ft&&d(_.sheenColorMap.channel),sheenRoughnessMapUv:Y&&d(_.sheenRoughnessMap.channel),specularMapUv:J&&d(_.specularMap.channel),specularColorMapUv:ct&&d(_.specularColorMap.channel),specularIntensityMapUv:C&&d(_.specularIntensityMap.channel),transmissionMapUv:K&&d(_.transmissionMap.channel),thicknessMapUv:q&&d(_.thicknessMap.channel),alphaMapUv:st&&d(_.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(Ee||Gt),vertexNormals:!!N.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!N.attributes.uv&&(Dt||st),fog:!!G,useFog:_.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||N.attributes.normal===void 0&&Ee===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:mt,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:et,morphTextureStride:pt,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:I.filter(gt=>gt.texture!==null).length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:e.shadowMap.enabled&&O.length>0,shadowMapType:e.shadowMap.type,toneMapping:it,decodeVideoTexture:Dt&&_.map.isVideoTexture===!0&&ne.getTransfer(_.map.colorSpace)===pe,decodeVideoTextureEmissive:Ve&&_.emissiveMap.isVideoTexture===!0&&ne.getTransfer(_.emissiveMap.colorSpace)===pe,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Ai,flipSided:_.side===Hn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Wt&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Wt&&_.extensions.multiDraw===!0||Ue)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Xt.vertexUv1s=l.has(1),Xt.vertexUv2s=l.has(2),Xt.vertexUv3s=l.has(3),l.clear(),Xt}function M(_){let T=[];if(_.shaderID?T.push(_.shaderID):(T.push(_.customVertexShaderID),T.push(_.customFragmentShaderID)),_.defines!==void 0)for(let O in _.defines)T.push(O),T.push(_.defines[O]);return _.isRawShaderMaterial===!1&&(g(T,_),h(T,_),T.push(e.outputColorSpace)),T.push(_.customProgramCacheKey),T.join()}function g(_,T){_.push(T.precision),_.push(T.outputColorSpace),_.push(T.envMapMode),_.push(T.envMapPMREM),_.push(T.envMapMaxLod),_.push(T.envMapSize),_.push(T.mapUv),_.push(T.alphaMapUv),_.push(T.lightMapUv),_.push(T.aoMapUv),_.push(T.bumpMapUv),_.push(T.normalMapUv),_.push(T.displacementMapUv),_.push(T.emissiveMapUv),_.push(T.metalnessMapUv),_.push(T.roughnessMapUv),_.push(T.anisotropyMapUv),_.push(T.clearcoatMapUv),_.push(T.clearcoatNormalMapUv),_.push(T.clearcoatRoughnessMapUv),_.push(T.diffuseRoughnessMapUv),_.push(T.iridescenceMapUv),_.push(T.iridescenceThicknessMapUv),_.push(T.sheenColorMapUv),_.push(T.sheenRoughnessMapUv),_.push(T.specularMapUv),_.push(T.specularColorMapUv),_.push(T.specularIntensityMapUv),_.push(T.transmissionMapUv),_.push(T.thicknessMapUv),_.push(T.combine),_.push(T.fogExp2),_.push(T.sizeAttenuation),_.push(T.morphTargetsCount),_.push(T.numSunLights),_.push(T.numDirLights),_.push(T.numPointLights),_.push(T.numSpotLights),_.push(T.numSpotLightMaps),_.push(T.numHemiLights),_.push(T.numRectAreaLights),_.push(T.numSunLightShadows),_.push(T.numDirLightShadows),_.push(T.numPointLightShadows),_.push(T.numSpotLightShadows),_.push(T.numSpotLightShadowsWithMaps),_.push(T.numLightProbes),_.push(T.numLightProbeGrids),_.push(T.shadowMapType),_.push(T.toneMapping),_.push(T.numClippingPlanes),_.push(T.numClipIntersection),_.push(T.depthPacking)}function h(_,T){r.disableAll(),T.instancing&&r.enable(0),T.instancingColor&&r.enable(1),T.instancingMorph&&r.enable(2),T.matcap&&r.enable(3),T.envMap&&r.enable(4),T.normalMapObjectSpace&&r.enable(5),T.normalMapTangentSpace&&r.enable(6),T.clearcoat&&r.enable(7),T.iridescence&&r.enable(8),T.alphaTest&&r.enable(9),T.vertexColors&&r.enable(10),T.vertexAlphas&&r.enable(11),T.vertexUv1s&&r.enable(12),T.vertexUv2s&&r.enable(13),T.vertexUv3s&&r.enable(14),T.vertexTangents&&r.enable(15),T.anisotropy&&r.enable(16),T.alphaHash&&r.enable(17),T.batching&&r.enable(18),T.dispersion&&r.enable(19),T.retroreflection&&r.enable(24),T.diffuseRoughness&&r.enable(25),T.batchingColor&&r.enable(20),T.gradientMap&&r.enable(21),T.packedNormalMap&&r.enable(22),T.vertexNormals&&r.enable(23),_.push(r.mask),r.disableAll(),T.fog&&r.enable(0),T.useFog&&r.enable(1),T.flatShading&&r.enable(2),T.logarithmicDepthBuffer&&r.enable(3),T.reversedDepthBuffer&&r.enable(4),T.skinning&&r.enable(5),T.morphTargets&&r.enable(6),T.morphNormals&&r.enable(7),T.morphColors&&r.enable(8),T.premultipliedAlpha&&r.enable(9),T.shadowMapEnabled&&r.enable(10),T.doubleSided&&r.enable(11),T.flipSided&&r.enable(12),T.useDepthPacking&&r.enable(13),T.dithering&&r.enable(14),T.transmission&&r.enable(15),T.sheen&&r.enable(16),T.opaque&&r.enable(17),T.pointsUvs&&r.enable(18),T.decodeVideoTexture&&r.enable(19),T.decodeVideoTextureEmissive&&r.enable(20),T.alphaToCoverage&&r.enable(21),T.numLightProbeGrids>0&&r.enable(22),T.hasPositionAttribute&&r.enable(23),_.push(r.mask)}function m(_){let T=u[_.type],O;if(T){let R=ms[T];O=h1.clone(R.uniforms)}else O=_.uniforms;return O}function y(_,T){let O=f.get(T);return O!==void 0?++O.usedTimes:(O=new ZN(e,T,_,s),c.push(O),f.set(T,O)),O}function x(_){if(--_.usedTimes===0){let T=c.indexOf(_);c[T]=c[c.length-1],c.pop(),f.delete(_.cacheKey),_.destroy()}}function E(_){o.remove(_)}function w(){o.dispose()}return{getParameters:v,getProgramCacheKey:M,getUniforms:m,acquireProgram:y,releaseProgram:x,releaseShaderCache:E,programs:c,dispose:w}}function jN(){let e=new WeakMap;function t(r){return e.has(r)}function n(r){let o=e.get(r);return o===void 0&&(o={},e.set(r,o)),o}function i(r){e.delete(r)}function s(r,o,l){e.get(r)[o]=l}function a(){e=new WeakMap}return{has:t,get:n,remove:i,update:s,dispose:a}}function $N(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function D1(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function L1(){let e=[],t=0,n=[],i=[],s=[];function a(){t=0,n.length=0,i.length=0,s.length=0}function r(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function o(u,d,v,M,g,h){let m=e[t];return m===void 0?(m={id:u.id,object:u,geometry:d,material:v,materialVariant:r(u),groupOrder:M,renderOrder:u.renderOrder,z:g,group:h},e[t]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=v,m.materialVariant=r(u),m.groupOrder=M,m.renderOrder=u.renderOrder,m.z=g,m.group=h),t++,m}function l(u,d,v,M,g,h,m){m.reversedDepth===!0&&(g=-g);let y=o(u,d,v,M,g,h);v.transmission>0?i.push(y):v.transparent===!0?s.push(y):n.push(y)}function c(u,d,v,M,g,h){let m=o(u,d,v,M,g,h);v.transmission>0?i.unshift(m):v.transparent===!0?s.unshift(m):n.unshift(m)}function f(u,d){n.length>1&&n.sort(u||$N),i.length>1&&i.sort(d||D1),s.length>1&&s.sort(d||D1)}function p(){for(let u=t,d=e.length;u<d;u++){let v=e[u];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:n,transmissive:i,transparent:s,init:a,push:l,unshift:c,finish:p,sort:f}}function tD(){let e=new WeakMap;function t(i,s){let a=e.get(i),r;return a===void 0?(r=new L1,e.set(i,[r])):s>=a.length?(r=new L1,a.push(r)):r=a[s],r}function n(){e=new WeakMap}return{get:t,dispose:n}}function eD(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"SunLight":case"DirectionalLight":n={direction:new V,color:new qt};break;case"SpotLight":n={position:new V,direction:new V,color:new qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new V,color:new qt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new V,skyColor:new qt,groundColor:new qt};break;case"RectAreaLight":n={color:new qt,position:new V,halfWidth:new V,halfHeight:new V};break}return e[t.id]=n,n}}}function nD(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}var iD=0;function sD(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function aD(e){let t=new eD,n=nD(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new V);let s=new V,a=new Le,r=new Le;function o(c){let f=0,p=0,u=0;for(let I=0;I<9;I++)i.probe[I].set(0,0,0);let d=0,v=0,M=0,g=0,h=0,m=0,y=0,x=0,E=0,w=0,_=0,T=0,O=0,R=0;c.sort(sD);for(let I=0,G=c.length;I<G;I++){let N=c[I],k=N.color,X=N.intensity,F=N.distance,nt=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===Va?nt=N.shadow.map.texture:nt=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)f+=k.r*X,p+=k.g*X,u+=k.b*X;else if(N.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(N.sh.coefficients[W],X);R++}else if(N.isSunLight){let W=t.get(N);if(W.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let $=N.shadow,et=n.get(N);et.shadowIntensity=$.intensity,et.shadowBias=$.bias,et.shadowNormalBias=$.normalBias,et.shadowRadius=$.radius,et.shadowMapSize.copy($.mapSize).multiply($.getFrameExtents()),i.sunShadow[v]=et,i.sunShadowMap[v]=nt;let pt=$.getViewportCount();for(let It=0;It<pt;It++)i.sunShadowMatrix[M+It]=$.getMatrix(It),i.sunShadowCascade[M+It]=$._cascadeData[It];M+=pt,v++}i.sun[d]=W,d++}else if(N.isDirectionalLight){let W=t.get(N);if(W.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let $=N.shadow,et=n.get(N);et.shadowIntensity=$.intensity,et.shadowBias=$.bias,et.shadowNormalBias=$.normalBias,et.shadowRadius=$.radius,et.shadowMapSize=$.mapSize,i.directionalShadow[g]=et,i.directionalShadowMap[g]=nt,i.directionalShadowMatrix[g]=N.shadow.matrix,E++}i.directional[g]=W,g++}else if(N.isSpotLight){let W=t.get(N);W.position.setFromMatrixPosition(N.matrixWorld),W.color.copy(k).multiplyScalar(X),W.distance=F,W.coneCos=Math.cos(N.angle),W.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),W.decay=N.decay,i.spot[m]=W;let $=N.shadow;if(N.map&&(i.spotLightMap[T]=N.map,T++,$.updateMatrices(N),N.castShadow&&O++),i.spotLightMatrix[m]=$.matrix,N.castShadow){let et=n.get(N);et.shadowIntensity=$.intensity,et.shadowBias=$.bias,et.shadowNormalBias=$.normalBias,et.shadowRadius=$.radius,et.shadowMapSize=$.mapSize,i.spotShadow[m]=et,i.spotShadowMap[m]=nt,_++}m++}else if(N.isRectAreaLight){let W=t.get(N);W.color.copy(k).multiplyScalar(X),W.halfWidth.set(N.width*.5,0,0),W.halfHeight.set(0,N.height*.5,0),i.rectArea[y]=W,y++}else if(N.isPointLight){let W=t.get(N);if(W.color.copy(N.color).multiplyScalar(N.intensity),W.distance=N.distance,W.decay=N.decay,N.castShadow){let $=N.shadow,et=n.get(N);et.shadowIntensity=$.intensity,et.shadowBias=$.bias,et.shadowNormalBias=$.normalBias,et.shadowRadius=$.radius,et.shadowMapSize=$.mapSize,et.shadowCameraNear=$.camera.near,et.shadowCameraFar=$.camera.far,i.pointShadow[h]=et,i.pointShadowMap[h]=nt,i.pointShadowMatrix[h]=N.shadow.matrix,w++}i.point[h]=W,h++}else if(N.isHemisphereLight){let W=t.get(N);W.skyColor.copy(N.color).multiplyScalar(X),W.groundColor.copy(N.groundColor).multiplyScalar(X),i.hemi[x]=W,x++}}y>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_t.LTC_FLOAT_1,i.rectAreaLTC2=_t.LTC_FLOAT_2):(i.rectAreaLTC1=_t.LTC_HALF_1,i.rectAreaLTC2=_t.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=p,i.ambient[2]=u;let D=i.hash;(D.sunLength!==d||D.directionalLength!==g||D.pointLength!==h||D.spotLength!==m||D.rectAreaLength!==y||D.hemiLength!==x||D.numSunShadows!==v||D.numDirectionalShadows!==E||D.numPointShadows!==w||D.numSpotShadows!==_||D.numSpotMaps!==T||D.numLightProbes!==R)&&(i.sun.length=d,i.directional.length=g,i.spot.length=m,i.rectArea.length=y,i.point.length=h,i.hemi.length=x,i.sunShadow.length=v,i.sunShadowMap.length=v,i.sunShadowMatrix.length=M,i.sunShadowCascade.length=M,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.directionalShadowMatrix.length=E,i.pointShadow.length=w,i.pointShadowMap.length=w,i.pointShadowMatrix.length=w,i.spotShadow.length=_,i.spotShadowMap.length=_,i.spotLightMatrix.length=_+T-O,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=O,i.numLightProbes=R,D.sunLength=d,D.directionalLength=g,D.pointLength=h,D.spotLength=m,D.rectAreaLength=y,D.hemiLength=x,D.numSunShadows=v,D.numDirectionalShadows=E,D.numPointShadows=w,D.numSpotShadows=_,D.numSpotMaps=T,D.numLightProbes=R,i.version=iD++)}function l(c,f){let p=0,u=0,d=0,v=0,M=0,g=0,h=f.matrixWorldInverse;for(let m=0,y=c.length;m<y;m++){let x=c[m];if(x.isSunLight){let E=i.sun[p];E.direction.setFromMatrixPosition(x.matrixWorld),E.direction.transformDirection(h),p++}else if(x.isDirectionalLight){let E=i.directional[u];E.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(h),u++}else if(x.isSpotLight){let E=i.spot[v];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(h),E.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(h),v++}else if(x.isRectAreaLight){let E=i.rectArea[M];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(h),r.identity(),a.copy(x.matrixWorld),a.premultiply(h),r.extractRotation(a),E.halfWidth.set(x.width*.5,0,0),E.halfHeight.set(0,x.height*.5,0),E.halfWidth.applyMatrix4(r),E.halfHeight.applyMatrix4(r),M++}else if(x.isPointLight){let E=i.point[d];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(h),d++}else if(x.isHemisphereLight){let E=i.hemi[g];E.direction.setFromMatrixPosition(x.matrixWorld),E.direction.transformDirection(h),g++}}}return{setup:o,setupView:l,state:i}}function U1(e){let t=new aD(e),n=[],i=[],s=[];function a(p){f.camera=p,n.length=0,i.length=0,s.length=0}function r(p){p.isLightProbeGrid?s.push(p):n.push(p)}function o(p){i.push(p)}function l(){t.setup(n),s.sort((p,u)=>p.priority-u.priority||p.id-u.id)}function c(p){t.setupView(n,p)}let f={lightsArray:n,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:f,setupLights:l,setupLightsView:c,pushLight:r,pushShadow:o}}function rD(e){let t=new WeakMap;function n(s,a=0){let r=t.get(s),o;return r===void 0?(o=new U1(e),t.set(s,[o])):a>=r.length?(o=new U1(e),r.push(o)):o=r[a],o}function i(){t=new WeakMap}return{get:n,dispose:i}}var oD=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lD=`uniform sampler2D shadow_pass;
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
}`,cD=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],uD=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],O1=new Le,Qc=new V,r_=new V;function hD(e,t,n){let i=new Ba,s=new jt,a=new jt,r=new Pe,o=new If,l=new Pf,c={},f=n.maxTextureSize,p={[Ga]:Hn,[Hn]:Ga,[Ai]:Ai},u=new hs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new jt},radius:{value:4}},vertexShader:oD,fragmentShader:lD}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let v=new Ia;v.setAttribute("position",new ls(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new Xe(v,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vc;let h=this.type;this.render=function(w,_,T){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;this.type===Rb&&(Lt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Vc);let O=e.getRenderTarget(),R=e.getActiveCubeFace(),D=e.getActiveMipmapLevel(),I=e.state;I.setBlending(br),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);let G=h!==this.type;G&&_.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(k=>k.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,k=w.length;N<k;N++){let X=w[N],F=X.shadow;if(F===void 0){Lt("WebGLShadowMap:",X,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;s.copy(F.mapSize);let nt=F.getFrameExtents();s.multiply(nt),a.copy(F.mapSize),(s.x>f||s.y>f)&&(s.x>f&&(a.x=Math.floor(f/nt.x),s.x=a.x*nt.x,F.mapSize.x=a.x),s.y>f&&(a.y=Math.floor(f/nt.y),s.y=a.y*nt.y,F.mapSize.y=a.y));let W=e.state.buffers.depth.getReversed();if(F.camera._reversedDepth=W,F.map===null||G===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===il){if(X.isPointLight){Lt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new hi(s.x,s.y,{format:Va,type:Hi,minFilter:hn,magFilter:hn,generateMipmaps:!1}),F.map.texture.name=X.name+".shadowMap",F.map.depthTexture=new Xs(s.x,s.y,Fi),F.map.depthTexture.name=X.name+".shadowMapDepth",F.map.depthTexture.format=Gs,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=un,F.map.depthTexture.magFilter=un}else X.isPointLight?(F.map=new $c(s.x),F.map.depthTexture=new Lc(s.x,zi)):(F.map=new hi(s.x,s.y),F.map.depthTexture=new Xs(s.x,s.y,zi)),F.map.depthTexture.name=X.name+".shadowMap",F.map.depthTexture.format=Gs,this.type===Vc?(F.map.depthTexture.compareFunction=W?K0:J0,F.map.depthTexture.minFilter=hn,F.map.depthTexture.magFilter=hn):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=un,F.map.depthTexture.magFilter=un);F.camera.updateProjectionMatrix()}F.map.isWebGLCubeRenderTarget!==!0&&(F.map.width!==s.x||F.map.height!==s.y)&&F.map.setSize(s.x,s.y);let $=F.map.isWebGLCubeRenderTarget?6:F.getViewportCount();X.isPointLight!==!0&&F.updateMatrices(X,T);let et=(F.camera.layers.mask&4294967294)!==0?F.camera.layers:T.layers;for(let pt=0;pt<$;pt++){let It=F.getCamera(pt);if(X.isPointLight){let Z=F.camera,at=F.matrix,yt=X.distance||Z.far;yt!==Z.far&&(Z.far=yt,Z.updateProjectionMatrix()),Qc.setFromMatrixPosition(X.matrixWorld),Z.position.copy(Qc),r_.copy(Z.position),r_.add(cD[pt]),Z.up.copy(uD[pt]),Z.lookAt(r_),Z.updateMatrixWorld(),at.makeTranslation(-Qc.x,-Qc.y,-Qc.z),O1.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),F._frustum.setFromProjectionMatrix(O1,Z.coordinateSystem,Z.reversedDepth)}if(F.map.isWebGLCubeRenderTarget)e.setRenderTarget(F.map,pt),e.clear();else{pt===0&&(e.setRenderTarget(F.map),e.clear());let Z=F.getViewport(pt);r.set(a.x*Z.x,a.y*Z.y,a.x*Z.z,a.y*Z.w),I.viewport(r)}i=F.getFrustum(pt),x(_,T,It,X,et,this.type)}F.isPointLightShadow!==!0&&this.type===il&&m(F,T),F.needsUpdate=!1}h=this.type,g.needsUpdate=!1,e.setRenderTarget(O,R,D)};function m(w,_){let T=t.update(M);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null?w.mapPass=new hi(s.x,s.y,{format:Va,type:Hi}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value.set(w.map.width,w.map.height),u.uniforms.radius.value=w.radius,e.setRenderTarget(w.mapPass),e.clear(),e.renderBufferDirect(_,null,T,u,M,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,e.setRenderTarget(w.map),e.clear(),e.renderBufferDirect(_,null,T,d,M,null)}function y(w,_,T,O){let R=null,D=T.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(D!==void 0)R=D;else if(R=T.isPointLight===!0?l:o,e.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let I=R.uuid,G=_.uuid,N=c[I];N===void 0&&(N={},c[I]=N);let k=N[G];k===void 0&&(k=R.clone(),N[G]=k,_.addEventListener("dispose",E)),R=k}if(R.visible=_.visible,R.wireframe=_.wireframe,O===il?R.side=_.shadowSide!==null?_.shadowSide:_.side:R.side=_.shadowSide!==null?_.shadowSide:p[_.side],R.alphaMap=_.alphaMap,R.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,R.map=_.map,R.clipShadows=_.clipShadows,R.clippingPlanes=_.clippingPlanes,R.clipIntersection=_.clipIntersection,R.displacementMap=_.displacementMap,R.displacementScale=_.displacementScale,R.displacementBias=_.displacementBias,R.wireframeLinewidth=_.wireframeLinewidth,R.linewidth=_.linewidth,T.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let I=e.properties.get(R);I.light=T}return R}function x(w,_,T,O,R,D){if(w.visible===!1)return;if(w.layers.test(R)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&D===il)&&(!w.frustumCulled||w.intersectsFrustum(i))){w.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,w.matrixWorld);let N=t.update(w),k=w.material;if(Array.isArray(k)){let X=N.groups;for(let F=0,nt=X.length;F<nt;F++){let W=X[F],$=k[W.materialIndex];if($&&$.visible){let et=y(w,$,O,D);w.onBeforeShadow(e,w,_,T,N,et,W),e.renderBufferDirect(T,null,N,et,w,W),w.onAfterShadow(e,w,_,T,N,et,W)}}}else if(k.visible){let X=y(w,k,O,D);w.onBeforeShadow(e,w,_,T,N,X,null),e.renderBufferDirect(T,null,N,X,w,null),w.onAfterShadow(e,w,_,T,N,X,null)}}let G=w.children;for(let N=0,k=G.length;N<k;N++)x(G[N],_,T,O,R,D)}function E(w){w.target.removeEventListener("dispose",E);for(let T in c){let O=c[T],R=w.target.uuid;R in O&&(O[R].dispose(),delete O[R])}}}function fD(e,t){function n(){let C=!1,K=new Pe,q=null,ut=new Pe(0,0,0,0);return{setMask:function(st){q!==st&&!C&&(e.colorMask(st,st,st,st),q=st)},setLocked:function(st){C=st},setClear:function(st,ot,At,Wt,it){it===!0&&(st*=Wt,ot*=Wt,At*=Wt),K.set(st,ot,At,Wt),ut.equals(K)===!1&&(e.clearColor(st,ot,At,Wt),ut.copy(K))},reset:function(){C=!1,q=null,ut.set(-1,0,0,0)}}}function i(){let C=!1,K=!1,q=null,ut=null,st=null;return{setReversed:function(ot){if(K!==ot){let At=t.get("EXT_clip_control");ot?At.clipControlEXT(At.LOWER_LEFT_EXT,At.ZERO_TO_ONE_EXT):At.clipControlEXT(At.LOWER_LEFT_EXT,At.NEGATIVE_ONE_TO_ONE_EXT),K=ot;let Wt=st;st=null,this.setClear(Wt)}},getReversed:function(){return K},setTest:function(ot){ot?mt(e.DEPTH_TEST):Bt(e.DEPTH_TEST)},setMask:function(ot){q!==ot&&!C&&(e.depthMask(ot),q=ot)},setFunc:function(ot){if(K&&(ot=l1[ot]),ut!==ot){switch(ot){case vf:e.depthFunc(e.NEVER);break;case yf:e.depthFunc(e.ALWAYS);break;case xf:e.depthFunc(e.LESS);break;case Yo:e.depthFunc(e.LEQUAL);break;case Sf:e.depthFunc(e.EQUAL);break;case Mf:e.depthFunc(e.GEQUAL);break;case bf:e.depthFunc(e.GREATER);break;case Tf:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}ut=ot}},setLocked:function(ot){C=ot},setClear:function(ot){st!==ot&&(st=ot,K&&(ot=1-ot),e.clearDepth(ot))},reset:function(){C=!1,q=null,ut=null,st=null,K=!1}}}function s(){let C=!1,K=null,q=null,ut=null,st=null,ot=null,At=null,Wt=null,it=null;return{setTest:function(Nt){C||(Nt?mt(e.STENCIL_TEST):Bt(e.STENCIL_TEST))},setMask:function(Nt){K!==Nt&&!C&&(e.stencilMask(Nt),K=Nt)},setFunc:function(Nt,Xt,gt){(q!==Nt||ut!==Xt||st!==gt)&&(e.stencilFunc(Nt,Xt,gt),q=Nt,ut=Xt,st=gt)},setOp:function(Nt,Xt,gt){(ot!==Nt||At!==Xt||Wt!==gt)&&(e.stencilOp(Nt,Xt,gt),ot=Nt,At=Xt,Wt=gt)},setLocked:function(Nt){C=Nt},setClear:function(Nt){it!==Nt&&(e.clearStencil(Nt),it=Nt)},reset:function(){C=!1,K=null,q=null,ut=null,st=null,ot=null,At=null,Wt=null,it=null}}}let a=new n,r=new i,o=new s,l={},c=new WeakMap,f={},p={},u={},d=new WeakMap,v=[],M=null,g=!1,h=null,m=null,y=null,x=null,E=null,w=null,_=null,T=new qt(0,0,0),O=0,R=!1,D=null,I=null,G=null,N=null,k=null,X=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),F=!1,nt=0,W=e.getParameter(e.VERSION);W.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(W)[1]),F=nt>=1):W.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),F=nt>=2);let $=null,et={},pt=e.getParameter(e.SCISSOR_BOX),It=e.getParameter(e.VIEWPORT),Z=new Pe().fromArray(pt),at=new Pe().fromArray(It);function yt(C,K,q,ut){let st=new Uint8Array(4),ot=e.createTexture();e.bindTexture(C,ot),e.texParameteri(C,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(C,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let At=0;At<q;At++)C===e.TEXTURE_3D||C===e.TEXTURE_2D_ARRAY?e.texImage3D(K,0,e.RGBA,1,1,ut,0,e.RGBA,e.UNSIGNED_BYTE,st):e.texImage2D(K+At,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,st);return ot}let wt={};wt[e.TEXTURE_2D]=yt(e.TEXTURE_2D,e.TEXTURE_2D,1),wt[e.TEXTURE_CUBE_MAP]=yt(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),wt[e.TEXTURE_2D_ARRAY]=yt(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),wt[e.TEXTURE_3D]=yt(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),mt(e.DEPTH_TEST),r.setFunc(Yo),fn(!1),Ee(w0),mt(e.CULL_FACE),We(br);function mt(C){f[C]!==!0&&(e.enable(C),f[C]=!0)}function Bt(C){f[C]!==!1&&(e.disable(C),f[C]=!1)}function Ue(C,K){return u[C]!==K?(e.bindFramebuffer(C,K),u[C]=K,C===e.DRAW_FRAMEBUFFER&&(u[e.FRAMEBUFFER]=K),C===e.FRAMEBUFFER&&(u[e.DRAW_FRAMEBUFFER]=K),!0):!1}function Dt(C,K){let q=v,ut=!1;if(C){q=d.get(K),q===void 0&&(q=[],d.set(K,q));let st=C.textures;if(q.length!==st.length||q[0]!==e.COLOR_ATTACHMENT0){for(let ot=0,At=st.length;ot<At;ot++)q[ot]=e.COLOR_ATTACHMENT0+ot;q.length=st.length,ut=!0}}else q[0]!==e.BACK&&(q[0]=e.BACK,ut=!0);ut&&e.drawBuffers(q)}function le(C){return M!==C?(e.useProgram(C),M=C,!0):!1}let fe={[Tr]:e.FUNC_ADD,[Nb]:e.FUNC_SUBTRACT,[Db]:e.FUNC_REVERSE_SUBTRACT};fe[Lb]=e.MIN,fe[Ub]=e.MAX;let Zt={[Ob]:e.ZERO,[Ib]:e.ONE,[Pb]:e.SRC_COLOR,[D0]:e.SRC_ALPHA,[Vb]:e.SRC_ALPHA_SATURATE,[Hb]:e.DST_COLOR,[zb]:e.DST_ALPHA,[Bb]:e.ONE_MINUS_SRC_COLOR,[L0]:e.ONE_MINUS_SRC_ALPHA,[Gb]:e.ONE_MINUS_DST_COLOR,[Fb]:e.ONE_MINUS_DST_ALPHA,[kb]:e.CONSTANT_COLOR,[Xb]:e.ONE_MINUS_CONSTANT_COLOR,[Wb]:e.CONSTANT_ALPHA,[qb]:e.ONE_MINUS_CONSTANT_ALPHA};function We(C,K,q,ut,st,ot,At,Wt,it,Nt){if(C===br){g===!0&&(Bt(e.BLEND),g=!1);return}if(g===!1&&(mt(e.BLEND),g=!0),C!==Cb){if(C!==h||Nt!==R){if((m!==Tr||E!==Tr)&&(e.blendEquation(e.FUNC_ADD),m=Tr,E=Tr),Nt)switch(C){case sl:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case R0:e.blendFunc(e.ONE,e.ONE);break;case C0:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case N0:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:Ot("WebGLState: Invalid blending: ",C);break}else switch(C){case sl:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case R0:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case C0:Ot("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case N0:Ot("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ot("WebGLState: Invalid blending: ",C);break}y=null,x=null,w=null,_=null,T.set(0,0,0),O=0,h=C,R=Nt}return}st=st||K,ot=ot||q,At=At||ut,(K!==m||st!==E)&&(e.blendEquationSeparate(fe[K],fe[st]),m=K,E=st),(q!==y||ut!==x||ot!==w||At!==_)&&(e.blendFuncSeparate(Zt[q],Zt[ut],Zt[ot],Zt[At]),y=q,x=ut,w=ot,_=At),(Wt.equals(T)===!1||it!==O)&&(e.blendColor(Wt.r,Wt.g,Wt.b,it),T.copy(Wt),O=it),h=C,R=!1}function Be(C,K){C.side===Ai?Bt(e.CULL_FACE):mt(e.CULL_FACE);let q=C.side===Hn;K&&(q=!q),fn(q),C.blending===sl&&C.transparent===!1?We(br):We(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),r.setFunc(C.depthFunc),r.setTest(C.depthTest),r.setMask(C.depthWrite),a.setMask(C.colorWrite);let ut=C.stencilWrite;o.setTest(ut),ut&&(o.setMask(C.stencilWriteMask),o.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),o.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),Ve(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?mt(e.SAMPLE_ALPHA_TO_COVERAGE):Bt(e.SAMPLE_ALPHA_TO_COVERAGE)}function fn(C){D!==C&&(C?e.frontFace(e.CW):e.frontFace(e.CCW),D=C)}function Ee(C){C!==Ab?(mt(e.CULL_FACE),C!==I&&(C===w0?e.cullFace(e.BACK):C===wb?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):Bt(e.CULL_FACE),I=C}function Qn(C){C!==G&&(F&&e.lineWidth(C),G=C)}function Ve(C,K,q){C?(mt(e.POLYGON_OFFSET_FILL),(N!==K||k!==q)&&(N=K,k=q,r.getReversed()&&(K=-K,q=-q),e.polygonOffset(K,q))):Bt(e.POLYGON_OFFSET_FILL)}function St(C){C?mt(e.SCISSOR_TEST):Bt(e.SCISSOR_TEST)}function Et(C){C===void 0&&(C=e.TEXTURE0+X-1),$!==C&&(e.activeTexture(C),$=C)}function Gt(C,K,q){q===void 0&&($===null?q=e.TEXTURE0+X-1:q=$);let ut=et[q];ut===void 0&&(ut={type:void 0,texture:void 0},et[q]=ut),(ut.type!==C||ut.texture!==K)&&($!==q&&(e.activeTexture(q),$=q),e.bindTexture(C,K||wt[C]),ut.type=C,ut.texture=K)}function L(){let C=et[$];C!==void 0&&C.type!==void 0&&(e.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function ye(){try{e.compressedTexImage2D(...arguments)}catch(C){Ot("WebGLState:",C)}}function kt(){try{e.compressedTexImage3D(...arguments)}catch(C){Ot("WebGLState:",C)}}function ie(){try{e.texSubImage2D(...arguments)}catch(C){Ot("WebGLState:",C)}}function lt(){try{e.texSubImage3D(...arguments)}catch(C){Ot("WebGLState:",C)}}function Se(){try{e.compressedTexSubImage2D(...arguments)}catch(C){Ot("WebGLState:",C)}}function Rt(){try{e.compressedTexSubImage3D(...arguments)}catch(C){Ot("WebGLState:",C)}}function Ct(){try{e.texStorage2D(...arguments)}catch(C){Ot("WebGLState:",C)}}function A(){try{e.texStorage3D(...arguments)}catch(C){Ot("WebGLState:",C)}}function S(){try{e.texImage2D(...arguments)}catch(C){Ot("WebGLState:",C)}}function P(){try{e.texImage3D(...arguments)}catch(C){Ot("WebGLState:",C)}}function tt(C){return p[C]!==void 0?p[C]:e.getParameter(C)}function j(C,K){p[C]!==K&&(e.pixelStorei(C,K),p[C]=K)}function rt(C){Z.equals(C)===!1&&(e.scissor(C.x,C.y,C.z,C.w),Z.copy(C))}function ft(C){at.equals(C)===!1&&(e.viewport(C.x,C.y,C.z,C.w),at.copy(C))}function Y(C,K){let q=c.get(K);q===void 0&&(q=new WeakMap,c.set(K,q));let ut=q.get(C);ut===void 0&&(ut=e.getUniformBlockIndex(K,C.name),e.uniformBlockBinding(K,ut,ut),q.set(C,ut))}function J(C,K,q){let st=c.get(K).get(C);l[st]!==q&&(e.bindBufferBase(e.UNIFORM_BUFFER,st,q),l[st]=q)}function ct(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),r.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),f={},p={},$=null,et={},u={},l={},d=new WeakMap,v=[],M=null,g=!1,h=null,m=null,y=null,x=null,E=null,w=null,_=null,T=new qt(0,0,0),O=0,R=!1,D=null,I=null,G=null,N=null,k=null,Z.set(0,0,e.canvas.width,e.canvas.height),at.set(0,0,e.canvas.width,e.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:mt,disable:Bt,bindFramebuffer:Ue,drawBuffers:Dt,useProgram:le,setBlending:We,setMaterial:Be,setFlipSided:fn,setCullFace:Ee,setLineWidth:Qn,setPolygonOffset:Ve,setScissorTest:St,activeTexture:Et,bindTexture:Gt,unbindTexture:L,compressedTexImage2D:ye,compressedTexImage3D:kt,texImage2D:S,texImage3D:P,pixelStorei:j,getParameter:tt,updateUBOMapping:Y,uniformBlockBinding:J,texStorage2D:Ct,texStorage3D:A,texSubImage2D:ie,texSubImage3D:lt,compressedTexSubImage2D:Se,compressedTexSubImage3D:Rt,scissor:rt,viewport:ft,reset:ct}}function dD(e,t,n,i,s,a,r){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new jt,f=new WeakMap,p=new Set,u,d=new WeakMap,v=new Set,M=new FinalizationRegistry(A=>v.delete(A)),g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function h(A,S){return g?new OffscreenCanvas(A,S):Jo("canvas")}function m(A,S,P){let tt=1,j=Ct(A);if((j.width>P||j.height>P)&&(tt=P/Math.max(j.width,j.height)),tt<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let rt=Math.floor(tt*j.width),ft=Math.floor(tt*j.height);u===void 0&&(u=h(rt,ft));let Y=S?h(rt,ft):u;return Y.width=rt,Y.height=ft,Y.getContext("2d").drawImage(A,0,0,rt,ft),Lt("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+rt+"x"+ft+")."),Y}else return"data"in A&&Lt("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),A;return A}function y(A){return A.generateMipmaps}function x(A){e.generateMipmap(A)}function E(A){return A.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?e.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function w(A,S,P,tt,j,rt=!1){if(A!==null){if(e[A]!==void 0)return e[A];Lt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ft;tt&&(ft=t.get("EXT_texture_norm16"),ft||Lt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=S;if(S===e.RED&&(P===e.FLOAT&&(Y=e.R32F),P===e.HALF_FLOAT&&(Y=e.R16F),P===e.UNSIGNED_BYTE&&(Y=e.R8),P===e.UNSIGNED_SHORT&&ft&&(Y=ft.R16_EXT),P===e.SHORT&&ft&&(Y=ft.R16_SNORM_EXT)),S===e.RED_INTEGER&&(P===e.UNSIGNED_BYTE&&(Y=e.R8UI),P===e.UNSIGNED_SHORT&&(Y=e.R16UI),P===e.UNSIGNED_INT&&(Y=e.R32UI),P===e.BYTE&&(Y=e.R8I),P===e.SHORT&&(Y=e.R16I),P===e.INT&&(Y=e.R32I)),S===e.RG&&(P===e.FLOAT&&(Y=e.RG32F),P===e.HALF_FLOAT&&(Y=e.RG16F),P===e.UNSIGNED_BYTE&&(Y=e.RG8),P===e.UNSIGNED_SHORT&&ft&&(Y=ft.RG16_EXT),P===e.SHORT&&ft&&(Y=ft.RG16_SNORM_EXT)),S===e.RG_INTEGER&&(P===e.UNSIGNED_BYTE&&(Y=e.RG8UI),P===e.UNSIGNED_SHORT&&(Y=e.RG16UI),P===e.UNSIGNED_INT&&(Y=e.RG32UI),P===e.BYTE&&(Y=e.RG8I),P===e.SHORT&&(Y=e.RG16I),P===e.INT&&(Y=e.RG32I)),S===e.RGB_INTEGER&&(P===e.UNSIGNED_BYTE&&(Y=e.RGB8UI),P===e.UNSIGNED_SHORT&&(Y=e.RGB16UI),P===e.UNSIGNED_INT&&(Y=e.RGB32UI),P===e.BYTE&&(Y=e.RGB8I),P===e.SHORT&&(Y=e.RGB16I),P===e.INT&&(Y=e.RGB32I)),S===e.RGBA_INTEGER&&(P===e.UNSIGNED_BYTE&&(Y=e.RGBA8UI),P===e.UNSIGNED_SHORT&&(Y=e.RGBA16UI),P===e.UNSIGNED_INT&&(Y=e.RGBA32UI),P===e.BYTE&&(Y=e.RGBA8I),P===e.SHORT&&(Y=e.RGBA16I),P===e.INT&&(Y=e.RGBA32I)),S===e.RGB&&(P===e.UNSIGNED_SHORT&&ft&&(Y=ft.RGB16_EXT),P===e.SHORT&&ft&&(Y=ft.RGB16_SNORM_EXT),P===e.UNSIGNED_INT_5_9_9_9_REV&&(Y=e.RGB9_E5),P===e.UNSIGNED_INT_10F_11F_11F_REV&&(Y=e.R11F_G11F_B10F)),S===e.RGBA){let J=rt?bc:ne.getTransfer(j);P===e.FLOAT&&(Y=e.RGBA32F),P===e.HALF_FLOAT&&(Y=e.RGBA16F),P===e.UNSIGNED_BYTE&&(Y=J===pe?e.SRGB8_ALPHA8:e.RGBA8),P===e.UNSIGNED_SHORT&&ft&&(Y=ft.RGBA16_EXT),P===e.SHORT&&ft&&(Y=ft.RGBA16_SNORM_EXT),P===e.UNSIGNED_SHORT_4_4_4_4&&(Y=e.RGBA4),P===e.UNSIGNED_SHORT_5_5_5_1&&(Y=e.RGB5_A1)}return(Y===e.R16F||Y===e.R32F||Y===e.RG16F||Y===e.RG32F||Y===e.RGBA16F||Y===e.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function _(A,S){let P;return A?S===null||S===zi||S===Ar?P=e.DEPTH24_STENCIL8:S===Fi?P=e.DEPTH32F_STENCIL8:S===rl&&(P=e.DEPTH24_STENCIL8,Lt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===zi||S===Ar?P=e.DEPTH_COMPONENT24:S===Fi?P=e.DEPTH_COMPONENT32F:S===rl&&(P=e.DEPTH_COMPONENT16),P}function T(A,S){return y(A)===!0||A.isFramebufferTexture&&A.minFilter!==un&&A.minFilter!==hn?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function O(A){let S=new WeakRef(A);i.get(A).__ref=S,v.add(S),M.register(A,S,S)}function R(A){let S=i.get(A).__ref;S!==void 0&&(v.delete(S),M.unregister(S))}function D(A){G(A.target)}function I(A){N(A.target)}function G(A){A.removeEventListener("dispose",D),R(A),X(A),A.isVideoTexture&&f.delete(A),A.isHTMLTexture&&p.delete(A)}function N(A){A.removeEventListener("dispose",I),R(A),nt(A)}function k(){for(let A of v){let S=A.deref();S!==void 0&&(S.isRenderTarget===!0?N(S):G(S))}v.clear(),p.clear()}function X(A){let S=i.get(A);if(S.__webglInit===void 0)return;let P=A.source,tt=d.get(P);if(tt){let j=tt[S.__cacheKey];j.usedTimes--,j.usedTimes===0&&F(A),Object.keys(tt).length===0&&d.delete(P)}i.remove(A)}function F(A){let S=i.get(A);e.deleteTexture(S.__webglTexture);let P=A.source,tt=d.get(P);delete tt[S.__cacheKey],r.memory.textures--}function nt(A){let S=i.get(A);S.__depthDisposeCallback&&S.__depthDisposeCallback();let P=A.depthTexture;if(P&&P.renderTarget===A&&G(P),A.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(S.__webglFramebuffer[j]))for(let rt=0;rt<S.__webglFramebuffer[j].length;rt++)e.deleteFramebuffer(S.__webglFramebuffer[j][rt]);else e.deleteFramebuffer(S.__webglFramebuffer[j]);S.__webglDepthbuffer&&e.deleteRenderbuffer(S.__webglDepthbuffer[j])}else{if(Array.isArray(S.__webglFramebuffer))for(let j=0;j<S.__webglFramebuffer.length;j++)e.deleteFramebuffer(S.__webglFramebuffer[j]);else e.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&e.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&e.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let j=0;j<S.__webglColorRenderbuffer.length;j++)S.__webglColorRenderbuffer[j]&&e.deleteRenderbuffer(S.__webglColorRenderbuffer[j]);S.__webglDepthRenderbuffer&&e.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let tt=A.textures;for(let j=0,rt=tt.length;j<rt;j++){let ft=i.get(tt[j]);ft.__webglTexture&&(e.deleteTexture(ft.__webglTexture),r.memory.textures--),i.remove(tt[j])}i.remove(A)}let W=0;function $(){W=0}function et(){return W}function pt(A){W=A}function It(){let A=W;return A>=s.maxTextures&&Lt("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),W+=1,A}function Z(A){let S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.mipmapsAutoUpdate),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function at(A,S){let P=i.get(A);if(A.isVideoTexture&&Se(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&P.__version!==A.version){let tt=A.image;if(tt===null)Lt("WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)Lt("WebGLRenderer: Texture marked for update but image is incomplete");else{Be(P,A,S);return}}else A.isExternalTexture&&(P.__webglTexture=A.sourceTexture?A.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,P.__webglTexture,e.TEXTURE0+S)}function yt(A,S){let P=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&P.__version!==A.version){Be(P,A,S);return}else A.isExternalTexture&&(P.__webglTexture=A.sourceTexture?A.sourceTexture:null);n.bindTexture(e.TEXTURE_2D_ARRAY,P.__webglTexture,e.TEXTURE0+S)}function wt(A,S){let P=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&P.__version!==A.version){Be(P,A,S);return}n.bindTexture(e.TEXTURE_3D,P.__webglTexture,e.TEXTURE0+S)}function mt(A,S){let P=i.get(A);if(A.version>0&&P.__version!==A.version){fn(P,A,S);return}n.bindTexture(e.TEXTURE_CUBE_MAP,P.__webglTexture,e.TEXTURE0+S)}let Bt={[Ef]:e.REPEAT,[rs]:e.CLAMP_TO_EDGE,[Af]:e.MIRRORED_REPEAT},Ue={[un]:e.NEAREST,[Jb]:e.NEAREST_MIPMAP_NEAREST,[kc]:e.NEAREST_MIPMAP_LINEAR,[hn]:e.LINEAR,[Qf]:e.LINEAR_MIPMAP_NEAREST,[qs]:e.LINEAR_MIPMAP_LINEAR},Dt={[$b]:e.NEVER,[Q0]:e.ALWAYS,[t1]:e.LESS,[J0]:e.LEQUAL,[e1]:e.EQUAL,[K0]:e.GEQUAL,[n1]:e.GREATER,[i1]:e.NOTEQUAL};function le(A,S){if(S.type===Fi&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===hn||S.magFilter===Qf||S.magFilter===kc||S.magFilter===qs||S.minFilter===hn||S.minFilter===Qf||S.minFilter===kc||S.minFilter===qs)&&Lt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(A,e.TEXTURE_WRAP_S,Bt[S.wrapS]),e.texParameteri(A,e.TEXTURE_WRAP_T,Bt[S.wrapT]),(A===e.TEXTURE_3D||A===e.TEXTURE_2D_ARRAY)&&e.texParameteri(A,e.TEXTURE_WRAP_R,Bt[S.wrapR]),e.texParameteri(A,e.TEXTURE_MAG_FILTER,Ue[S.magFilter]),e.texParameteri(A,e.TEXTURE_MIN_FILTER,Ue[S.minFilter]),S.compareFunction&&(e.texParameteri(A,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(A,e.TEXTURE_COMPARE_FUNC,Dt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===un||S.minFilter!==kc&&S.minFilter!==qs||S.type===Fi&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){let P=t.get("EXT_texture_filter_anisotropic");e.texParameterf(A,P.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function fe(A,S){let P=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",D),O(S));let tt=S.source,j=d.get(tt);j===void 0&&(j={},d.set(tt,j));let rt=Z(S);if(rt!==A.__cacheKey){j[rt]===void 0&&(j[rt]={texture:e.createTexture(),usedTimes:0},r.memory.textures++,P=!0),j[rt].usedTimes++;let ft=j[A.__cacheKey];ft!==void 0&&(j[A.__cacheKey].usedTimes--,ft.usedTimes===0&&F(S)),A.__cacheKey=rt,A.__webglTexture=j[rt].texture}return P}function Zt(A,S,P){return Math.floor(Math.floor(A/P)/S)}function We(A,S,P,tt){let rt=A.updateRanges;if(rt.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,S.width,S.height,P,tt,S.data);else{rt.sort((C,K)=>C.start-K.start);let ft=0;for(let C=1;C<rt.length;C++){let K=rt[ft],q=rt[C],ut=K.start+K.count,st=Zt(q.start,S.width,4),ot=Zt(K.start,S.width,4);q.start<=ut+1&&st===ot&&Zt(q.start+q.count-1,S.width,4)===st?K.count=Math.max(K.count,q.start+q.count-K.start):(++ft,rt[ft]=q)}rt.length=ft+1;let Y=n.getParameter(e.UNPACK_ROW_LENGTH),J=n.getParameter(e.UNPACK_SKIP_PIXELS),ct=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,S.width);for(let C=0,K=rt.length;C<K;C++){let q=rt[C],ut=Math.floor(q.start/4),st=Math.ceil(q.count/4),ot=ut%S.width,At=Math.floor(ut/S.width),Wt=st,it=1;n.pixelStorei(e.UNPACK_SKIP_PIXELS,ot),n.pixelStorei(e.UNPACK_SKIP_ROWS,At),n.texSubImage2D(e.TEXTURE_2D,0,ot,At,Wt,it,P,tt,S.data)}A.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,Y),n.pixelStorei(e.UNPACK_SKIP_PIXELS,J),n.pixelStorei(e.UNPACK_SKIP_ROWS,ct)}}function Be(A,S,P){let tt=e.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(tt=e.TEXTURE_2D_ARRAY),S.isData3DTexture&&(tt=e.TEXTURE_3D);let j=fe(A,S),rt=S.source;n.bindTexture(tt,A.__webglTexture,e.TEXTURE0+P);let ft=i.get(rt);if(rt.version!==ft.__version||j===!0){if(n.activeTexture(e.TEXTURE0+P),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){let it=ne.getPrimaries(ne.workingColorSpace),Nt=S.colorSpace===Zs?null:ne.getPrimaries(S.colorSpace),Xt=S.colorSpace===Zs||it===Nt?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt)}n.pixelStorei(e.UNPACK_ALIGNMENT,S.unpackAlignment);let J=m(S.image,!1,s.maxTextureSize);J=Rt(S,J);let ct=a.convert(S.format,S.colorSpace),C=a.convert(S.type),K=w(S.internalFormat,ct,C,S.normalized,S.colorSpace,S.isVideoTexture);le(tt,S);let q,ut=S.mipmaps,st=S.isVideoTexture!==!0,ot=ft.__version===void 0||j===!0,At=rt.dataReady,Wt=T(S,J);if(S.isDepthTexture)K=_(S.format===Ys,S.type),ot&&(st?n.texStorage2D(e.TEXTURE_2D,1,K,J.width,J.height):n.texImage2D(e.TEXTURE_2D,0,K,J.width,J.height,0,ct,C,null));else if(S.isDataTexture)if(ut.length>0){st&&ot&&n.texStorage2D(e.TEXTURE_2D,Wt,K,ut[0].width,ut[0].height);for(let it=0,Nt=ut.length;it<Nt;it++)q=ut[it],st?At&&n.texSubImage2D(e.TEXTURE_2D,it,0,0,q.width,q.height,ct,C,q.data):n.texImage2D(e.TEXTURE_2D,it,K,q.width,q.height,0,ct,C,q.data);S.generateMipmaps=!1}else st?(ot&&n.texStorage2D(e.TEXTURE_2D,Wt,K,J.width,J.height),At&&We(S,J,ct,C)):n.texImage2D(e.TEXTURE_2D,0,K,J.width,J.height,0,ct,C,J.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){st&&ot&&n.texStorage3D(e.TEXTURE_2D_ARRAY,Wt,K,ut[0].width,ut[0].height,J.depth);for(let it=0,Nt=ut.length;it<Nt;it++)if(q=ut[it],S.format!==Gi)if(ct!==null)if(st){if(At)if(S.layerUpdates.size>0){let Xt=s_(q.width,q.height,S.format,S.type);for(let gt of S.layerUpdates){let me=q.data.subarray(gt*Xt/q.data.BYTES_PER_ELEMENT,(gt+1)*Xt/q.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,it,0,0,gt,q.width,q.height,1,ct,me)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,it,0,0,0,q.width,q.height,J.depth,ct,q.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,it,K,q.width,q.height,J.depth,0,q.data,0,0);else Lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else st?At&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,it,0,0,0,q.width,q.height,J.depth,ct,C,q.data):n.texImage3D(e.TEXTURE_2D_ARRAY,it,K,q.width,q.height,J.depth,0,ct,C,q.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{st&&ot&&n.texStorage2D(e.TEXTURE_2D,Wt,K,ut[0].width,ut[0].height);for(let it=0,Nt=ut.length;it<Nt;it++)q=ut[it],S.format!==Gi?ct!==null?st?At&&n.compressedTexSubImage2D(e.TEXTURE_2D,it,0,0,q.width,q.height,ct,q.data):n.compressedTexImage2D(e.TEXTURE_2D,it,K,q.width,q.height,0,q.data):Lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?At&&n.texSubImage2D(e.TEXTURE_2D,it,0,0,q.width,q.height,ct,C,q.data):n.texImage2D(e.TEXTURE_2D,it,K,q.width,q.height,0,ct,C,q.data)}else if(S.isDataArrayTexture)if(st){if(ot&&n.texStorage3D(e.TEXTURE_2D_ARRAY,Wt,K,J.width,J.height,J.depth),At)if(S.layerUpdates.size>0){let it=s_(J.width,J.height,S.format,S.type);for(let Nt of S.layerUpdates){let Xt=J.data.subarray(Nt*it/J.data.BYTES_PER_ELEMENT,(Nt+1)*it/J.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,Nt,J.width,J.height,1,ct,C,Xt)}S.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,ct,C,J.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,K,J.width,J.height,J.depth,0,ct,C,J.data);else if(S.isData3DTexture)st?(ot&&n.texStorage3D(e.TEXTURE_3D,Wt,K,J.width,J.height,J.depth),At&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,ct,C,J.data)):n.texImage3D(e.TEXTURE_3D,0,K,J.width,J.height,J.depth,0,ct,C,J.data);else if(S.isFramebufferTexture){if(ot)if(st)n.texStorage2D(e.TEXTURE_2D,Wt,K,J.width,J.height);else{let it=J.width,Nt=J.height;for(let Xt=0;Xt<Wt;Xt++)n.texImage2D(e.TEXTURE_2D,Xt,K,it,Nt,0,ct,C,null),it>>=1,Nt>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in e){let it=e.canvas;if(it.hasAttribute("layoutsubtree")||it.setAttribute("layoutsubtree","true"),J.parentNode!==it){it.appendChild(J),p.add(S),it.onpaint=Nt=>{let Xt=Nt.changedElements;for(let gt of p)Xt.includes(gt.image)&&(gt.needsUpdate=!0)},it.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,J);else{let Xt=e.RGBA,gt=e.RGBA,me=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,Xt,gt,me,J)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(ut.length>0){if(st&&ot){let it=Ct(ut[0]);n.texStorage2D(e.TEXTURE_2D,Wt,K,it.width,it.height)}for(let it=0,Nt=ut.length;it<Nt;it++)q=ut[it],st?At&&n.texSubImage2D(e.TEXTURE_2D,it,0,0,ct,C,q):n.texImage2D(e.TEXTURE_2D,it,K,ct,C,q);S.generateMipmaps=!1}else if(st){if(ot){let it=Ct(J);n.texStorage2D(e.TEXTURE_2D,Wt,K,it.width,it.height)}At&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,ct,C,J)}else n.texImage2D(e.TEXTURE_2D,0,K,ct,C,J);y(S)&&S.mipmapsAutoUpdate===!0&&x(tt),ft.__version=rt.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function fn(A,S,P){if(S.image.length!==6)return;let tt=fe(A,S),j=S.source;n.bindTexture(e.TEXTURE_CUBE_MAP,A.__webglTexture,e.TEXTURE0+P);let rt=i.get(j);if(j.version!==rt.__version||tt===!0){n.activeTexture(e.TEXTURE0+P);let ft=ne.getPrimaries(ne.workingColorSpace),Y=S.colorSpace===Zs?null:ne.getPrimaries(S.colorSpace),J=S.colorSpace===Zs||ft===Y?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);let ct=S.isCompressedTexture||S.image[0].isCompressedTexture,C=S.image[0]&&S.image[0].isDataTexture,K=[];for(let gt=0;gt<6;gt++)!ct&&!C?K[gt]=m(S.image[gt],!0,s.maxCubemapSize):K[gt]=C?S.image[gt].image:S.image[gt],K[gt]=Rt(S,K[gt]);let q=K[0],ut=a.convert(S.format,S.colorSpace),st=a.convert(S.type),ot=w(S.internalFormat,ut,st,S.normalized,S.colorSpace),At=S.isVideoTexture!==!0,Wt=rt.__version===void 0||tt===!0,it=j.dataReady,Nt=T(S,q);le(e.TEXTURE_CUBE_MAP,S);let Xt;if(S.isDepthTexture){if(ot=_(S.format===Ys,S.type),Wt)if(At)n.texStorage2D(e.TEXTURE_CUBE_MAP,1,ot,q.width,q.height);else for(let gt=0;gt<6;gt++)n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,ot,q.width,q.height,0,ut,st,null)}else if(ct){At&&Wt&&n.texStorage2D(e.TEXTURE_CUBE_MAP,Nt,ot,q.width,q.height);for(let gt=0;gt<6;gt++){Xt=K[gt].mipmaps;for(let me=0;me<Xt.length;me++){let nn=Xt[me];S.format!==Gi?ut!==null?At?it&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+gt,me,0,0,nn.width,nn.height,ut,nn.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+gt,me,ot,nn.width,nn.height,0,nn.data):Lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):At?it&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+gt,me,0,0,nn.width,nn.height,ut,st,nn.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+gt,me,ot,nn.width,nn.height,0,ut,st,nn.data)}}}else{if(Xt=S.mipmaps,At&&Wt){Xt.length>0&&Nt++;let gt=Ct(K[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,Nt,ot,gt.width,gt.height)}for(let gt=0;gt<6;gt++)if(C){At?it&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,K[gt].width,K[gt].height,ut,st,K[gt].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,ot,K[gt].width,K[gt].height,0,ut,st,K[gt].data);for(let me=0;me<Xt.length;me++){let Js=Xt[me].image[gt].image;At?it&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+gt,me+1,0,0,Js.width,Js.height,ut,st,Js.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+gt,me+1,ot,Js.width,Js.height,0,ut,st,Js.data)}}else{At?it&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,ut,st,K[gt]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,ot,ut,st,K[gt]);for(let me=0;me<Xt.length;me++){let nn=Xt[me];At?it&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+gt,me+1,0,0,ut,st,nn.image[gt]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+gt,me+1,ot,ut,st,nn.image[gt])}}}y(S)&&S.mipmapsAutoUpdate===!0&&x(e.TEXTURE_CUBE_MAP),rt.__version=j.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function Ee(A,S,P,tt,j,rt){let ft=a.convert(P.format,P.colorSpace),Y=a.convert(P.type),J=w(P.internalFormat,ft,Y,P.normalized,P.colorSpace),ct=i.get(S),C=i.get(P);if(C.__renderTarget=S,!ct.__hasExternalTextures){let K=Math.max(1,S.width>>rt),q=Math.max(1,S.height>>rt);j===e.TEXTURE_3D||j===e.TEXTURE_2D_ARRAY?n.texImage3D(j,rt,J,K,q,S.depth,0,ft,Y,null):n.texImage2D(j,rt,J,K,q,0,ft,Y,null)}n.bindFramebuffer(e.FRAMEBUFFER,A),lt(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,tt,j,C.__webglTexture,0,ie(S)):(j===e.TEXTURE_2D||j>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,tt,j,C.__webglTexture,rt),n.bindFramebuffer(e.FRAMEBUFFER,null)}function Qn(A,S,P){if(e.bindRenderbuffer(e.RENDERBUFFER,A),S.depthBuffer){let tt=S.depthTexture,j=tt&&tt.isDepthTexture?tt.type:null,rt=_(S.stencilBuffer,j),ft=S.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;lt(S)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ie(S),rt,S.width,S.height):P?e.renderbufferStorageMultisample(e.RENDERBUFFER,ie(S),rt,S.width,S.height):e.renderbufferStorage(e.RENDERBUFFER,rt,S.width,S.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,ft,e.RENDERBUFFER,A)}else{let tt=S.textures;for(let j=0;j<tt.length;j++){let rt=tt[j],ft=a.convert(rt.format,rt.colorSpace),Y=a.convert(rt.type),J=w(rt.internalFormat,ft,Y,rt.normalized,rt.colorSpace);lt(S)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ie(S),J,S.width,S.height):P?e.renderbufferStorageMultisample(e.RENDERBUFFER,ie(S),J,S.width,S.height):e.renderbufferStorage(e.RENDERBUFFER,J,S.width,S.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Ve(A,S,P){let tt=S.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let j=i.get(S.depthTexture);j.__renderTarget=S;let rt=tt?S.depthTexture.image[0]:S.depthTexture.image;(!j.__webglTexture||rt.width!==S.width||rt.height!==S.height)&&(rt.width=S.width,rt.height=S.height,S.depthTexture.needsUpdate=!0),tt?mt(S.depthTexture,0):at(S.depthTexture,0);let ft=j.__webglTexture,Y=ie(S),J=tt?e.TEXTURE_CUBE_MAP_POSITIVE_X+P:e.TEXTURE_2D,ct=S.depthTexture.format===Ys?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(S.depthTexture.format===Gs)lt(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,ct,J,ft,0,Y):e.framebufferTexture2D(e.FRAMEBUFFER,ct,J,ft,0);else if(S.depthTexture.format===Ys)lt(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,ct,J,ft,0,Y):e.framebufferTexture2D(e.FRAMEBUFFER,ct,J,ft,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function St(A){let S=i.get(A),P=A.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==A.depthTexture){let tt=A.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),tt){let j=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,tt.removeEventListener("dispose",j)};tt.addEventListener("dispose",j),S.__depthDisposeCallback=j}S.__boundDepthTexture=tt}if(A.depthTexture&&!S.__autoAllocateDepthBuffer)if(P)for(let tt=0;tt<6;tt++)Ve(S.__webglFramebuffer[tt],A,tt);else A.texture.mipmaps.length>0?Ve(S.__webglFramebuffer[0],A,0):Ve(S.__webglFramebuffer,A,0);else if(P){S.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)if(n.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer[tt]),S.__webglDepthbuffer[tt]===void 0)S.__webglDepthbuffer[tt]=e.createRenderbuffer(),Qn(S.__webglDepthbuffer[tt],A,!1);else{let j=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,rt=S.__webglDepthbuffer[tt];e.bindRenderbuffer(e.RENDERBUFFER,rt),e.framebufferRenderbuffer(e.FRAMEBUFFER,j,e.RENDERBUFFER,rt)}}else if(A.texture.mipmaps.length>0?n.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=e.createRenderbuffer(),Qn(S.__webglDepthbuffer,A,!1);else{let j=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,rt=S.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,rt),e.framebufferRenderbuffer(e.FRAMEBUFFER,j,e.RENDERBUFFER,rt)}n.bindFramebuffer(e.FRAMEBUFFER,null)}function Et(A,S,P){let tt=i.get(A);S!==void 0&&Ee(tt.__webglFramebuffer,A,A.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),P!==void 0&&St(A)}function Gt(A){let S=A.texture,P=i.get(A),tt=i.get(S);A.addEventListener("dispose",I),O(A);let j=A.textures,rt=A.isWebGLCubeRenderTarget===!0,ft=j.length>1;if(ft||(tt.__webglTexture===void 0&&(tt.__webglTexture=e.createTexture()),tt.__version=S.version,r.memory.textures++),rt){P.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(S.mipmaps.length>0){P.__webglFramebuffer[Y]=[];for(let J=0;J<S.mipmaps.length;J++)P.__webglFramebuffer[Y][J]=e.createFramebuffer()}else P.__webglFramebuffer[Y]=e.createFramebuffer()}else{if(S.mipmaps.length>0){P.__webglFramebuffer=[];for(let Y=0;Y<S.mipmaps.length;Y++)P.__webglFramebuffer[Y]=e.createFramebuffer()}else P.__webglFramebuffer=e.createFramebuffer();if(ft)for(let Y=0,J=j.length;Y<J;Y++){let ct=i.get(j[Y]);ct.__webglTexture===void 0&&(ct.__webglTexture=e.createTexture(),r.memory.textures++)}if(A.samples>0&&lt(A)===!1){P.__webglMultisampledFramebuffer=e.createFramebuffer(),P.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,P.__webglMultisampledFramebuffer);for(let Y=0;Y<j.length;Y++){let J=j[Y];P.__webglColorRenderbuffer[Y]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,P.__webglColorRenderbuffer[Y]);let ct=a.convert(J.format,J.colorSpace),C=a.convert(J.type),K=w(J.internalFormat,ct,C,J.normalized,J.colorSpace,A.isXRRenderTarget===!0),q=ie(A);e.renderbufferStorageMultisample(e.RENDERBUFFER,q,K,A.width,A.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Y,e.RENDERBUFFER,P.__webglColorRenderbuffer[Y])}e.bindRenderbuffer(e.RENDERBUFFER,null),A.depthBuffer&&(P.__webglDepthRenderbuffer=e.createRenderbuffer(),Qn(P.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(rt){n.bindTexture(e.TEXTURE_CUBE_MAP,tt.__webglTexture),le(e.TEXTURE_CUBE_MAP,S);for(let Y=0;Y<6;Y++)if(S.mipmaps.length>0)for(let J=0;J<S.mipmaps.length;J++)Ee(P.__webglFramebuffer[Y][J],A,S,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+Y,J);else Ee(P.__webglFramebuffer[Y],A,S,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);y(S)?x(e.TEXTURE_CUBE_MAP):S.mipmaps.length>0&&e.texParameteri(e.TEXTURE_CUBE_MAP,e.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),n.unbindTexture()}else if(ft){for(let Y=0,J=j.length;Y<J;Y++){let ct=j[Y],C=i.get(ct),K=e.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(K=A.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(K,C.__webglTexture),le(K,ct),Ee(P.__webglFramebuffer,A,ct,e.COLOR_ATTACHMENT0+Y,K,0),y(ct)&&x(K)}n.unbindTexture()}else{let Y=e.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Y=A.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(Y,tt.__webglTexture),le(Y,S),S.mipmaps.length>0)for(let J=0;J<S.mipmaps.length;J++)Ee(P.__webglFramebuffer[J],A,S,e.COLOR_ATTACHMENT0,Y,J);else Ee(P.__webglFramebuffer,A,S,e.COLOR_ATTACHMENT0,Y,0);y(S)?x(Y):S.mipmaps.length>0&&e.texParameteri(Y,e.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),n.unbindTexture()}A.depthBuffer&&St(A)}function L(A){let S=A.textures;for(let P=0,tt=S.length;P<tt;P++){let j=S[P];if(y(j)&&j.mipmapsAutoUpdate===!0){let rt=E(A),ft=i.get(j).__webglTexture;n.bindTexture(rt,ft),x(rt),n.unbindTexture()}}}let ye=[];function kt(A){if(A.samples>0){if(lt(A)===!1){let S=A.textures,P=A.width,tt=A.height,j=e.COLOR_BUFFER_BIT,rt=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ft=i.get(A),Y=S.length>1;if(Y)for(let ct=0;ct<S.length;ct++)n.bindFramebuffer(e.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ct,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,ft.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ct,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,ft.__webglMultisampledFramebuffer),A.texture.mipmaps.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,ft.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,ft.__webglFramebuffer);for(let ct=0;ct<S.length;ct++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(j|=e.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(j|=e.STENCIL_BUFFER_BIT)),Y){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,ft.__webglColorRenderbuffer[ct]);let C=i.get(S[ct]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,C,0)}e.blitFramebuffer(0,0,P,tt,0,0,P,tt,j,e.NEAREST),l===!0&&(ye.length=0,ye.push(e.COLOR_ATTACHMENT0+ct),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&ye.push(rt),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,ye))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),Y)for(let ct=0;ct<S.length;ct++){n.bindFramebuffer(e.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ct,e.RENDERBUFFER,ft.__webglColorRenderbuffer[ct]);let C=i.get(S[ct]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,ft.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ct,e.TEXTURE_2D,C,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,ft.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){let S=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[S])}}}function ie(A){return Math.min(s.maxSamples,A.samples)}function lt(A){let S=i.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Se(A){let S=r.render.frame;f.get(A)!==S&&(f.set(A,S),A.update())}function Rt(A,S){let P=A.colorSpace,tt=A.format,j=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||P!==Mc&&P!==Zs&&(ne.getTransfer(P)===pe?(tt!==Gi||j!==Jn)&&Lt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ot("WebGLTextures: Unsupported texture color space:",P)),S}function Ct(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=It,this.resetTextureUnits=$,this.getTextureUnits=et,this.setTextureUnits=pt,this.setTexture2D=at,this.setTexture2DArray=yt,this.setTexture3D=wt,this.setTextureCube=mt,this.rebindTextures=Et,this.setupRenderTarget=Gt,this.updateRenderTargetMipmap=L,this.updateMultisampleRenderTarget=kt,this.setupDepthRenderbuffer=St,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=lt,this.dispose=k}function pD(e,t){function n(i,s=Zs){let a,r=ne.getTransfer(s);if(i===Jn)return e.UNSIGNED_BYTE;if(i===$f)return e.UNSIGNED_SHORT_4_4_4_4;if(i===td)return e.UNSIGNED_SHORT_5_5_5_1;if(i===X0)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===W0)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===V0)return e.BYTE;if(i===k0)return e.SHORT;if(i===rl)return e.UNSIGNED_SHORT;if(i===jf)return e.INT;if(i===zi)return e.UNSIGNED_INT;if(i===Fi)return e.FLOAT;if(i===Hi)return e.HALF_FLOAT;if(i===q0)return e.ALPHA;if(i===Y0)return e.RGB;if(i===Gi)return e.RGBA;if(i===Gs)return e.DEPTH_COMPONENT;if(i===Ys)return e.DEPTH_STENCIL;if(i===Z0)return e.RED;if(i===ed)return e.RED_INTEGER;if(i===Va)return e.RG;if(i===nd)return e.RG_INTEGER;if(i===id)return e.RGBA_INTEGER;if(i===Xc||i===Wc||i===qc||i===Yc)if(r===pe)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===Xc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Wc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===qc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Yc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===Xc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Wc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===qc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Yc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===sd||i===ad||i===rd||i===od)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===sd)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ad)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===rd)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===od)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ld||i===cd||i===ud||i===hd||i===fd||i===Zc||i===dd)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(i===ld||i===cd)return r===pe?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===ud)return r===pe?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(i===hd)return a.COMPRESSED_R11_EAC;if(i===fd)return a.COMPRESSED_SIGNED_R11_EAC;if(i===Zc)return a.COMPRESSED_RG11_EAC;if(i===dd)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===pd||i===md||i===gd||i===_d||i===vd||i===yd||i===xd||i===Sd||i===Md||i===bd||i===Td||i===Ed||i===Ad||i===wd)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(i===pd)return r===pe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===md)return r===pe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===gd)return r===pe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===_d)return r===pe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===vd)return r===pe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===yd)return r===pe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===xd)return r===pe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Sd)return r===pe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Md)return r===pe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===bd)return r===pe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Td)return r===pe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ed)return r===pe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ad)return r===pe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===wd)return r===pe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Rd||i===Cd||i===Nd)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(i===Rd)return r===pe?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Cd)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Nd)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Dd||i===Ld||i===Jc||i===Ud)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(i===Dd)return a.COMPRESSED_RED_RGTC1_EXT;if(i===Ld)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Jc)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ud)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ar?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}var mD=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gD=`
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

}`,d_=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){let i=new Uc(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let n=t.cameras[0].viewport,i=new hs({vertexShader:mD,fragmentShader:gD,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Xe(new Zn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},p_=class extends cs{constructor(t,n){super();let i=this,s=null,a=1,r=null,o="local-floor",l=1,c=null,f=null,p=null,u=null,d=null,v=null,M=typeof XRWebGLBinding<"u",g=new d_,h={},m=n.getContextAttributes(),y=null,x=null,E=[],w=[],_=new jt,T=null,O=null,R=new Fn;R.viewport=new Pe;let D=new Fn;D.viewport=new Pe;let I=[R,D],G=new Zf,N=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let at=E[Z];return at===void 0&&(at=new $o,E[Z]=at),at.getTargetRaySpace()},this.getControllerGrip=function(Z){let at=E[Z];return at===void 0&&(at=new $o,E[Z]=at),at.getGripSpace()},this.getHand=function(Z){let at=E[Z];return at===void 0&&(at=new $o,E[Z]=at),at.getHandSpace()};function X(Z){let at=w.indexOf(Z.inputSource);if(at===-1)return;let yt=E[at];yt!==void 0&&(yt.update(Z.inputSource,Z.frame,c||r),yt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function F(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",F),s.removeEventListener("inputsourceschange",nt);for(let Z=0;Z<E.length;Z++){let at=w[Z];at!==null&&(w[Z]=null,E[Z].disconnect(at))}N=null,k=null,g.reset();for(let Z in h)delete h[Z];if(t.setRenderTarget(y),d=null,u=null,p=null,s=null,x=null,It.stop(),i.isPresenting=!1,t.setPixelRatio(T),t.setSize(_.width,_.height,!1),O!==null){let Z=O.camera;Z.fov=O.fov,Z.zoom=O.zoom,Z.updateProjectionMatrix(),O=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){a=Z,i.isPresenting===!0&&Lt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,i.isPresenting===!0&&Lt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return p===null&&M&&(p=new XRWebGLBinding(s,n)),p},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(y=t.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",F),s.addEventListener("inputsourceschange",nt),m.xrCompatible!==!0&&await n.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(_),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let yt=null,wt=null,mt=null;m.depth&&(mt=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,yt=m.stencil?Ys:Gs,wt=m.stencil?Ar:zi);let Bt={colorFormat:n.RGBA8,depthFormat:mt,scaleFactor:a};p=this.getBinding(),u=p.createProjectionLayer(Bt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),x=new hi(u.textureWidth,u.textureHeight,{format:Gi,type:Jn,depthTexture:new Xs(u.textureWidth,u.textureHeight,wt,void 0,void 0,void 0,void 0,void 0,void 0,yt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let yt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:a};d=new XRWebGLLayer(s,n,yt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new hi(d.framebufferWidth,d.framebufferHeight,{format:Gi,type:Jn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(o),It.setContext(s),It.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function nt(Z){for(let at=0;at<Z.removed.length;at++){let yt=Z.removed[at],wt=w.indexOf(yt);wt>=0&&(w[wt]=null,E[wt].disconnect(yt))}for(let at=0;at<Z.added.length;at++){let yt=Z.added[at],wt=w.indexOf(yt);if(wt===-1){for(let Bt=0;Bt<E.length;Bt++)if(Bt>=w.length){w.push(yt),wt=Bt;break}else if(w[Bt]===null){w[Bt]=yt,wt=Bt;break}if(wt===-1)break}let mt=E[wt];mt&&mt.connect(yt)}}function W(Z,at){at===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(at.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let at=Z.near,yt=Z.far;g.texture!==null&&(g.depthNear>0&&(at=g.depthNear),g.depthFar>0&&(yt=g.depthFar)),G.near=D.near=R.near=at,G.far=D.far=R.far=yt,(N!==G.near||k!==G.far)&&(s.updateRenderState({depthNear:G.near,depthFar:G.far}),N=G.near,k=G.far),G.layers.mask=Z.layers.mask|6,R.layers.mask=G.layers.mask&-5,D.layers.mask=G.layers.mask&-3;let wt=Z.parent,mt=G.cameras;W(G,wt);for(let Bt=0;Bt<mt.length;Bt++)W(mt[Bt],wt);G.projectionMatrix.copy(R.projectionMatrix),G.projectionMatrixInverse.copy(R.projectionMatrixInverse),O===null&&Z.isPerspectiveCamera&&(O={camera:Z,fov:Z.fov,zoom:Z.zoom}),$(Z,G,wt)};function $(Z,at,yt){yt===null?Z.matrix.copy(at.matrixWorld):(Z.matrix.copy(yt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(at.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(at.projectionMatrix),Z.projectionMatrixInverse.copy(at.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Rf*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(Z){l=Z,u!==null&&(u.fixedFoveation=Z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Z)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(G)},this.getCameraTexture=function(Z){return h[Z]};let et=null;function pt(Z,at){if(f=at.getViewerPose(c||r),v=at,f!==null){let yt=f.views;d!==null&&(t.setRenderTargetFramebuffer(x,d.framebuffer),t.setRenderTarget(x));let wt=!1;yt.length!==G.cameras.length&&(G.cameras.length=0,wt=!0);for(let Dt=0;Dt<yt.length;Dt++){let le=yt[Dt],fe=null;if(d!==null)fe=d.getViewport(le);else{let We=p.getViewSubImage(u,le);fe=We.viewport,Dt===0&&(t.setRenderTargetTextures(x,We.colorTexture,We.depthStencilTexture),t.setRenderTarget(x))}let Zt=I[Dt];Zt===void 0&&(Zt=new Fn,Zt.layers.enable(Dt),Zt.viewport=new Pe,I[Dt]=Zt),Zt.matrix.fromArray(le.transform.matrix),Zt.matrix.decompose(Zt.position,Zt.quaternion,Zt.scale),Zt.projectionMatrix.fromArray(le.projectionMatrix),Zt.projectionMatrixInverse.copy(Zt.projectionMatrix).invert(),Zt.viewport.set(fe.x,fe.y,fe.width,fe.height),Dt===0&&(G.matrix.copy(Zt.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),wt===!0&&G.cameras.push(Zt)}let mt=s.enabledFeatures;if(mt&&mt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){p=i.getBinding();let Dt=p.getDepthInformation(yt[0]);Dt&&Dt.isValid&&Dt.texture&&g.init(Dt,s.renderState)}if(mt&&mt.includes("camera-access")&&M){t.state.unbindTexture(),p=i.getBinding();for(let Dt=0;Dt<yt.length;Dt++){let le=yt[Dt].camera;if(le){let fe=h[le];fe||(fe=new Uc,h[le]=fe);let Zt=p.getCameraImage(le);fe.sourceTexture=Zt}}}}for(let yt=0;yt<E.length;yt++){let wt=w[yt],mt=E[yt];wt!==null&&mt!==void 0&&mt.update(wt,at,c||r)}et&&et(Z,at),at.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:at}),v=null}let It=new I1;It.setAnimationLoop(pt),this.setAnimationLoop=function(Z){et=Z},this.dispose=function(){}}},_D=new Le,W1=new Pt;W1.set(-1,0,0,0,1,0,0,0,1);function vD(e,t){function n(g,h){g.matrixAutoUpdate===!0&&g.updateMatrix(),h.value.copy(g.matrix)}function i(g,h){h.color.getRGB(g.fogColor.value,e_(e)),h.isFog?(g.fogNear.value=h.near,g.fogFar.value=h.far):h.isFogExp2&&(g.fogDensity.value=h.density)}function s(g,h,m,y,x){h.isNodeMaterial?h.uniformsNeedUpdate=!1:h.isMeshBasicMaterial?a(g,h):h.isMeshLambertMaterial?(a(g,h),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)):h.isMeshToonMaterial?(a(g,h),p(g,h)):h.isMeshPhongMaterial?(a(g,h),f(g,h),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)):h.isMeshStandardMaterial?(a(g,h),u(g,h),h.isMeshPhysicalMaterial&&d(g,h,x)):h.isMeshMatcapMaterial?(a(g,h),v(g,h)):h.isMeshDepthMaterial?a(g,h):h.isMeshDistanceMaterial?(a(g,h),M(g,h)):h.isMeshNormalMaterial?a(g,h):h.isLineBasicMaterial?(r(g,h),h.isLineDashedMaterial&&o(g,h)):h.isPointsMaterial?l(g,h,m,y):h.isSpriteMaterial?c(g,h):h.isShadowMaterial?(g.color.value.copy(h.color),g.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function a(g,h){g.opacity.value=h.opacity,h.color&&g.diffuse.value.copy(h.color),h.emissive&&g.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(g.map.value=h.map,n(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.bumpMap&&(g.bumpMap.value=h.bumpMap,n(h.bumpMap,g.bumpMapTransform),g.bumpScale.value=h.bumpScale,h.side===Hn&&(g.bumpScale.value*=-1)),h.normalMap&&(g.normalMap.value=h.normalMap,n(h.normalMap,g.normalMapTransform),g.normalScale.value.copy(h.normalScale),h.side===Hn&&g.normalScale.value.negate()),h.displacementMap&&(g.displacementMap.value=h.displacementMap,n(h.displacementMap,g.displacementMapTransform),g.displacementScale.value=h.displacementScale,g.displacementBias.value=h.displacementBias),h.emissiveMap&&(g.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,g.emissiveMapTransform)),h.specularMap&&(g.specularMap.value=h.specularMap,n(h.specularMap,g.specularMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest);let m=t.get(h),y=m.envMap,x=m.envMapRotation;y&&(g.envMap.value=y,g.envMapRotation.value.setFromMatrix4(_D.makeRotationFromEuler(x)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(W1),g.reflectivity.value=h.reflectivity,g.ior.value=h.ior,g.refractionRatio.value=h.refractionRatio),h.lightMap&&(g.lightMap.value=h.lightMap,g.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,g.lightMapTransform)),h.aoMap&&(g.aoMap.value=h.aoMap,g.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,g.aoMapTransform))}function r(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,h.map&&(g.map.value=h.map,n(h.map,g.mapTransform))}function o(g,h){g.dashSize.value=h.dashSize,g.totalSize.value=h.dashSize+h.gapSize,g.scale.value=h.scale}function l(g,h,m,y){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.size.value=h.size*m,g.scale.value=y*.5,h.map&&(g.map.value=h.map,n(h.map,g.uvTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function c(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.rotation.value=h.rotation,h.map&&(g.map.value=h.map,n(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function f(g,h){g.specular.value.copy(h.specular),g.shininess.value=Math.max(h.shininess,1e-4)}function p(g,h){h.gradientMap&&(g.gradientMap.value=h.gradientMap)}function u(g,h){g.metalness.value=h.metalness,h.metalnessMap&&(g.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,g.metalnessMapTransform)),g.roughness.value=h.roughness,h.roughnessMap&&(g.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,g.roughnessMapTransform)),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)}function d(g,h,m){g.ior.value=h.ior,h.diffuseRoughness>0&&(g.diffuseRoughness.value=h.diffuseRoughness,h.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=h.diffuseRoughnessMap,n(h.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),h.sheen>0&&(g.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),g.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(g.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,g.sheenColorMapTransform)),h.sheenRoughnessMap&&(g.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,g.sheenRoughnessMapTransform))),h.clearcoat>0&&(g.clearcoat.value=h.clearcoat,g.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(g.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,g.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(g.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Hn&&g.clearcoatNormalScale.value.negate())),h.dispersion>0&&(g.dispersion.value=h.dispersion),h.retroreflectivity>0&&(g.retroreflectivity.value=h.retroreflectivity),h.iridescence>0&&(g.iridescence.value=h.iridescence,g.iridescenceIOR.value=h.iridescenceIOR,g.iridescenceThicknessMinimum.value=h.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=h.iridescenceThicknessMaximum,h.iridescenceMap&&(g.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,g.iridescenceMapTransform)),h.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),h.transmission>0&&(g.transmission.value=h.transmission,g.transmissionSamplerMap.value=m.texture,g.transmissionSamplerSize.value.set(m.width,m.height),h.transmissionMap&&(g.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,g.transmissionMapTransform)),g.thickness.value=h.thickness,h.thicknessMap&&(g.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=h.attenuationDistance,g.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(g.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(g.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=h.specularIntensity,g.specularColor.value.copy(h.specularColor),h.specularColorMap&&(g.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,g.specularColorMapTransform)),h.specularIntensityMap&&(g.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,h){h.matcap&&(g.matcap.value=h.matcap)}function M(g,h){let m=t.get(h).light;g.referencePosition.value.setFromMatrixPosition(m.matrixWorld),g.nearDistance.value=m.shadow.camera.near,g.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function yD(e,t,n,i){let s={},a={};function r(m,y){let x=y.program;i.uniformBlockBinding(m,x,s[m.id])}function o(m,y){let x=s[m.id];x===void 0&&(v(m),x=l(m),s[m.id]=x,m.addEventListener("dispose",g));let E=y.program;i.updateUBOMapping(m,E);let w=t.render.frame;a[m.id]!==w&&(c(m),a[m.id]=w)}function l(m){let y=e.createBuffer(),x=m.__size,E=m.usage;return e.bindBuffer(e.UNIFORM_BUFFER,y),e.bufferData(e.UNIFORM_BUFFER,x,E),e.bindBuffer(e.UNIFORM_BUFFER,null),y}function c(m){let y=s[m.id],x=m.uniforms,E=m.__cache;e.bindBuffer(e.UNIFORM_BUFFER,y);for(let w=0,_=x.length;w<_;w++){let T=x[w];if(Array.isArray(T))for(let O=0,R=T.length;O<R;O++)f(T[O],w,O,E);else f(T,w,0,E)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function f(m,y,x,E){if(u(m,y,x,E)===!0){let w=m.__offset,_=m.value;if(Array.isArray(_)){let T=0;for(let O=0;O<_.length;O++){let R=_[O],D=M(R,!0);p(R,m.__data,T),T+=D.storage/Float32Array.BYTES_PER_ELEMENT}}else p(_,m.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,w,m.__data)}}function p(m,y,x){typeof m=="number"||typeof m=="boolean"?y[x]=m:m.isMatrix3?(y[x]=m.elements[0],y[x+1]=m.elements[1],y[x+2]=m.elements[2],y[x+3]=0,y[x+4]=m.elements[3],y[x+5]=m.elements[4],y[x+6]=m.elements[5],y[x+7]=0,y[x+8]=m.elements[6],y[x+9]=m.elements[7],y[x+10]=m.elements[8],y[x+11]=0):ArrayBuffer.isView(m)?y.set(m.subarray(0,y.length-x),x):m.toArray(y,x)}function u(m,y,x,E){let w=m.value,_=y+"_"+x;if(Array.isArray(w)){E[_]===void 0&&(E[_]=[]);let T=E[_],O=!1;for(let R=0;R<w.length;R++)d(w[R],T,R)===!0&&(O=!0);return O}return d(w,E,_)}function d(m,y,x){if(y[x]===void 0)return typeof m=="number"||typeof m=="boolean"?y[x]=m:ArrayBuffer.isView(m)?y[x]=m.slice():y[x]=m.clone(),!0;{let E=y[x];if(typeof m=="number"||typeof m=="boolean"){if(E!==m)return y[x]=m,!0}else{if(ArrayBuffer.isView(m))return!0;if(E.equals(m)===!1)return E.copy(m),!0}}return!1}function v(m){let y=m.uniforms,x=0,E=16;for(let _=0,T=y.length;_<T;_++){let O=Array.isArray(y[_])?y[_]:[y[_]];for(let R=0,D=O.length;R<D;R++){let I=O[R],G=Array.isArray(I.value)?I.value:[I.value],N=Array.isArray(y[_])||Array.isArray(I.value),k=x;for(let F=0,nt=G.length;F<nt;F++){let W=G[F],$=M(W,N),et=x%E,pt=et%$.boundary,It=et+pt;x+=pt,It!==0&&E-It<$.storage&&(x+=E-It),F===0&&(k=x),x+=$.storage}let X=I.type==="int"?Int32Array:I.type==="uint"?Uint32Array:Float32Array;I.__data=new X((x-k)/Float32Array.BYTES_PER_ELEMENT),I.__offset=k}}let w=x%E;return w>0&&(x+=E-w),m.__size=x,m.__cache={},this}function M(m,y){let x={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(x.boundary=4,x.storage=4):m.isVector2?(x.boundary=8,x.storage=8):m.isVector3||m.isColor?(x.boundary=16,x.storage=12):m.isVector4?(x.boundary=16,x.storage=16):m.isMatrix3?(x.boundary=16,x.storage=48):m.isMatrix4?(x.boundary=16,x.storage=64):m.isTexture?Lt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(m)?(x.boundary=16,x.storage=m.byteLength):Lt("WebGLRenderer: Unsupported uniform value type.",m),y===!0&&(x.boundary=16,x.storage=Math.ceil(x.storage/16)*16),x}function g(m){let y=m.target;y.removeEventListener("dispose",g),e.deleteBuffer(s[y.id]),delete s[y.id],delete a[y.id]}function h(){for(let m in s)e.deleteBuffer(s[m]);s={},a={}}return{bind:r,update:o,dispose:h}}var xD=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ps=null;function SD(){return ps===null&&(ps=new Lf(xD,16,16,Va,Hi),ps.name="DFG_LUT",ps.minFilter=hn,ps.magFilter=hn,ps.wrapS=rs,ps.wrapT=rs,ps.generateMipmaps=!1,ps.needsUpdate=!0),ps}var zd=class{constructor(t={}){let{canvas:n=a1(),context:i=null,depth:s=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:u=!1,outputBufferType:d=Jn}=t;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=r;let M=d,g=new Set([id,nd,ed]),h=new Set([Jn,zi,rl,Ar,$f,td]),m=new Uint32Array(4),y=new Int32Array(4),x={textures:[],min:[],max:[],resolution:[]},E=null,w=null,_=[],T=[],O=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ds,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,D=!1,I=null,G=null,N=null,k=null;this._outputColorSpace=Rn;let X=0,F=0,nt=null,W=-1,$=null,et=new Pe,pt=new Pe,It=null,Z=new qt(0),at=0,yt=n.width,wt=n.height,mt=1,Bt=null,Ue=null,Dt=new Pe(0,0,yt,wt),le=new Pe(0,0,yt,wt),fe=!1,Zt=new Ba,We=new Uf,Be=!1,fn=!1,Ee=new Le,Qn=new V,Ve=new Pe,St={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Et=!1;function Gt(){return nt===null?mt:1}let L=i;function ye(b,U){return n.getContext(b,U)}let kt,ie,lt,Se,Rt,Ct,A,S,P,tt,j,rt,ft,Y,J,ct,C,K,q,ut,st,ot,At;try{let b={alpha:!0,depth:s,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${"187"}`),n.addEventListener("webglcontextlost",Nt,!1),n.addEventListener("webglcontextrestored",Xt,!1),n.addEventListener("webglcontextcreationerror",gt,!1),L===null){let U="webgl2";if(L=ye(U,b),L===null)throw ye(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Wt()}catch(b){throw n.removeEventListener("webglcontextlost",Nt,!1),n.removeEventListener("webglcontextrestored",Xt,!1),n.removeEventListener("webglcontextcreationerror",gt,!1),Ot("WebGLRenderer: "+b.message),b}function Wt(){kt=new L2(L),kt.init(),st=new pD(L,kt),ie=new S2(L,kt,t,st),lt=new fD(L,kt),ie.reversedDepthBuffer&&u&&lt.buffers.depth.setReversed(!0),G=L.createFramebuffer(),N=L.createFramebuffer(),k=L.createFramebuffer(),Se=new I2(L),Rt=new jN,Ct=new dD(L,kt,lt,Rt,ie,st,Se),A=new D2(R),S=new BR(L),ot=new y2(L,S),P=new U2(L,S,Se,ot),tt=new B2(L,P,S,ot,Se),K=new P2(L,ie,Ct),J=new M2(Rt),j=new QN(R,A,kt,ie,ot,J),rt=new vD(R,Rt),ft=new tD,Y=new rD(kt),C=new v2(R,A,lt,tt,v,l),ct=new hD(R,tt,ie),At=new yD(L,Se,ie,lt),q=new x2(L,kt,Se),ut=new O2(L,kt,Se),Se.programs=j.programs,R.capabilities=ie,R.extensions=kt,R.properties=Rt,R.renderLists=ft,R.shadowMap=ct,R.state=lt,R.info=Se}M!==Jn&&(O=new F2(M,n.width,n.height,o,s,a));let it=new p_(R,L);this.xr=it,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let b=kt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=kt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return mt},this.setPixelRatio=function(b){b!==void 0&&(mt=b,this.setSize(yt,wt,!1))},this.getSize=function(b){return b.set(yt,wt)},this.setSize=function(b,U,H=!0){if(it.isPresenting){Lt("WebGLRenderer: Can't change size while VR device is presenting.");return}yt=b,wt=U,n.width=Math.floor(b*mt),n.height=Math.floor(U*mt),H===!0&&(n.style.width=b+"px",n.style.height=U+"px"),O!==null&&O.setSize(n.width,n.height),this.setViewport(0,0,b,U)},this.getDrawingBufferSize=function(b){return b.set(yt*mt,wt*mt).floor()},this.setDrawingBufferSize=function(b,U,H){yt=b,wt=U,mt=H,n.width=Math.floor(b*H),n.height=Math.floor(U*H),this.setViewport(0,0,b,U)},this.setEffects=function(b){if(M===Jn){Ot("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let U=0;U<b.length;U++)if(b[U].isOutputPass===!0){Lt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}O.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(et)},this.getViewport=function(b){return b.copy(Dt)},this.setViewport=function(b,U,H,B){b.isVector4?Dt.set(b.x,b.y,b.z,b.w):Dt.set(b,U,H,B),lt.viewport(et.copy(Dt).multiplyScalar(Gt()).round())},this.getScissor=function(b){return b.copy(le)},this.setScissor=function(b,U,H,B){b.isVector4?le.set(b.x,b.y,b.z,b.w):le.set(b,U,H,B),lt.scissor(pt.copy(le).multiplyScalar(Gt()).round())},this.getScissorTest=function(){return fe},this.setScissorTest=function(b){lt.setScissorTest(fe=b)},this.setOpaqueSort=function(b){Bt=b},this.setTransparentSort=function(b){Ue=b},this.getClearColor=function(b){return b.copy(C.getClearColor())},this.setClearColor=function(){C.setClearColor(...arguments)},this.getClearAlpha=function(){return C.getClearAlpha()},this.setClearAlpha=function(){C.setClearAlpha(...arguments)},this.clear=function(b=!0,U=!0,H=!0){let B=0;if(b){let z=!1;if(nt!==null){let dt=nt.texture.format;z=g.has(dt)}if(z){let dt=nt.texture.type,xt=h.has(dt),ht=C.getClearColor(),vt=C.getClearAlpha(),Tt=ht.r,Ht=ht.g,$t=ht.b;xt?(m[0]=Tt,m[1]=Ht,m[2]=$t,m[3]=vt,L.clearBufferuiv(L.COLOR,0,m)):(y[0]=Tt,y[1]=Ht,y[2]=$t,y[3]=vt,L.clearBufferiv(L.COLOR,0,y))}else B|=L.COLOR_BUFFER_BIT}U&&(B|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),H&&(B|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&L.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),I=b},this.dispose=function(){n.removeEventListener("webglcontextlost",Nt,!1),n.removeEventListener("webglcontextrestored",Xt,!1),n.removeEventListener("webglcontextcreationerror",gt,!1),C.dispose(),ft.dispose(),Y.dispose(),Ct.dispose(),Rt.dispose(),A.dispose(),tt.dispose(),P.dispose(),ot.dispose(),At.dispose(),j.dispose(),it.dispose(),it.removeEventListener("sessionstart",S_),it.removeEventListener("sessionend",M_),ka.stop()};function Nt(b){b.preventDefault(),$0("WebGLRenderer: Context Lost."),D=!0}function Xt(){$0("WebGLRenderer: Context Restored."),D=!1;let b=Se.autoReset,U=ct.enabled,H=ct.autoUpdate,B=ct.needsUpdate,z=ct.type;Wt(),Se.autoReset=b,ct.enabled=U,ct.autoUpdate=H,ct.needsUpdate=B,ct.type=z}function gt(b){Ot("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function me(b){let U=b.target;U.removeEventListener("dispose",me),nn(U)}function nn(b){Js(b),Rt.remove(b)}function Js(b){let U=Rt.get(b).programs;U!==void 0&&(U.forEach(function(H){j.releaseProgram(H)}),b.isShaderMaterial&&j.releaseShaderCache(b))}this.renderBufferDirect=function(b,U,H,B,z,dt){U===null&&(U=St);let xt=z.isMesh&&z.matrixWorld.determinantAffine()<0,ht=mT(b,U,H,B,z);lt.setMaterial(B,xt);let vt=H.index,Tt=1;if(B.wireframe===!0){if(vt=P.getWireframeAttribute(H),vt===void 0)return;Tt=2}let Ht=H.drawRange,$t=H.attributes.position,Mt=Ht.start*Tt,te=(Ht.start+Ht.count)*Tt;dt!==null&&(Mt=Math.max(Mt,dt.start*Tt),te=Math.min(te,(dt.start+dt.count)*Tt)),vt!==null?(Mt=Math.max(Mt,0),te=Math.min(te,vt.count)):$t!=null&&(Mt=Math.max(Mt,0),te=Math.min(te,$t.count));let qe=te-Mt;if(qe<0||qe===1/0)return;ot.setup(z,B,ht,H,vt);let Ae,Me=q;if(vt!==null&&(Ae=S.get(vt),Me=ut,Me.setIndex(Ae)),z.isMesh)B.wireframe===!0?(lt.setLineWidth(B.wireframeLinewidth*Gt()),Me.setMode(L.LINES)):Me.setMode(L.TRIANGLES);else if(z.isLine){let Sn=B.linewidth;Sn===void 0&&(Sn=1),lt.setLineWidth(Sn*Gt()),z.isLineSegments?Me.setMode(L.LINES):z.isLineLoop?Me.setMode(L.LINE_LOOP):Me.setMode(L.LINE_STRIP)}else z.isPoints?Me.setMode(L.POINTS):z.isSprite&&Me.setMode(L.TRIANGLES);if(z.isBatchedMesh)if(kt.get("WEBGL_multi_draw"))Me.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let Sn=z._multiDrawStarts,bt=z._multiDrawCounts,Un=z._multiDrawCount,ce=vt?S.get(vt).bytesPerElement:1,Xa=Rt.get(B).currentProgram.getUniforms();for(let Mn=0;Mn<Un;Mn++)Xa.setValue(L,"_gl_DrawID",Mn),Me.render(Sn[Mn]/ce,bt[Mn])}else if(z.isInstancedMesh)Me.renderInstances(Mt,qe,z.count);else if(H.isInstancedBufferGeometry){let Sn=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,bt=Math.min(H.instanceCount,Sn);Me.renderInstances(Mt,qe,bt)}else Me.render(Mt,qe)};function x_(b,U,H,B){I!==null&&b.isNodeMaterial&&I.setObject(B,b),Be===!0&&J.setState(b,H,!1),b.transparent===!0&&b.side===Ai&&b.forceSinglePass===!1?(b.side=Hn,b.needsUpdate=!0,fl(b,U,B),b.side=Ga,b.needsUpdate=!0,fl(b,U,B),b.side=Ai):fl(b,U,B)}this.compile=function(b,U,H=null){H===null&&(H=b),I!==null&&I.renderStart(b,U,H),w=Y.get(H),w.init(U),T.push(w),H.traverseVisible(function(z){z.isLight&&z.layers.test(U.layers)&&(w.pushLight(z),z.castShadow&&w.pushShadow(z))}),b!==H&&b.traverseVisible(function(z){z.isLight&&z.layers.test(U.layers)&&(w.pushLight(z),z.castShadow&&w.pushShadow(z))}),w.setupLights(),I!==null&&I.updateLights(w.state.lightsArray),fn=this.localClippingEnabled,Be=J.init(this.clippingPlanes,fn),Be===!0&&J.setGlobalState(this.clippingPlanes,U),I!==null&&ct.render(w.state.shadowsArray,H,U);let B=new Set;return b.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let dt=z.material;if(dt)if(Array.isArray(dt))for(let xt=0;xt<dt.length;xt++){let ht=dt[xt];x_(ht,H,U,z),B.add(ht)}else x_(dt,H,U,z),B.add(dt)}),w=T.pop(),I!==null&&I.renderEnd(),B},this.compileAsync=function(b,U,H=null){let B=this.compile(b,U,H);return new Promise(z=>{function dt(){if(B.forEach(function(xt){let vt=Rt.get(xt).currentProgram;(vt===void 0||vt.isReady())&&B.delete(xt)}),B.size===0){z(b);return}setTimeout(dt,10)}kt.get("KHR_parallel_shader_compile")!==null?dt():setTimeout(dt,10)})};let Xd=null;function dT(b){Xd&&Xd(b)}function S_(){ka.stop()}function M_(){ka.start()}let ka=new I1;ka.setAnimationLoop(dT),typeof self<"u"&&ka.setContext(self),this.setAnimationLoop=function(b){Xd=b,it.setAnimationLoop(b),b===null?ka.stop():ka.start()},it.addEventListener("sessionstart",S_),it.addEventListener("sessionend",M_),this.render=function(b,U){if(U!==void 0&&U.isCamera!==!0){Ot("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;I!==null&&I.renderStart(b,U);let H=it.enabled===!0&&it.isPresenting===!0,B=O!==null&&(nt===null||H)&&O.begin(R,nt);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),it.enabled===!0&&it.isPresenting===!0&&(O===null||O.isCompositing()===!1)&&(it.cameraAutoUpdate===!0&&it.updateCamera(U),U=it.getCamera()),b.isScene===!0&&b.onBeforeRender(R,b,U,nt),w=Y.get(b,T.length),w.init(U),w.state.textureUnits=Ct.getTextureUnits(),T.push(w),Ee.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),U.isArrayCamera?We.setFromArrayCamera(U):Zt.setFromProjectionMatrix(Ee,Ti,U.reversedDepth),fn=this.localClippingEnabled,Be=J.init(this.clippingPlanes,fn),E=ft.get(b,_.length),E.init(),_.push(E),this.info.render.frame++,it.enabled===!0&&it.isPresenting===!0){let xt=R.xr.getDepthSensingMesh();xt!==null&&Wd(xt,U,-1/0,R.sortObjects)}Wd(b,U,0,R.sortObjects),E.finish(),I!==null&&I.updateLights(w.state.lightsArray),R.sortObjects===!0&&E.sort(Bt,Ue),Et=it.enabled===!1||it.isPresenting===!1||it.hasDepthSensing()===!1,Et&&C.addToRenderList(E,b),this.info.autoReset===!0&&this.info.reset(),Be===!0&&J.beginShadows();let z=w.state.shadowsArray;if(ct.render(z,b,U),Be===!0&&J.endShadows(),(B&&O.hasRenderPass())===!1){let xt=E.opaque,ht=E.transmissive;if(w.setupLights(),U.isArrayCamera){let vt=U.cameras;if(ht.length>0)for(let Tt=0,Ht=vt.length;Tt<Ht;Tt++){let $t=vt[Tt];T_(xt,ht,b,$t)}Et&&C.render(b);for(let Tt=0,Ht=vt.length;Tt<Ht;Tt++){let $t=vt[Tt];b_(E,b,$t,$t.viewport)}}else ht.length>0&&T_(xt,ht,b,U),Et&&C.render(b),b_(E,b,U)}nt!==null&&F===0&&(Ct.updateMultisampleRenderTarget(nt),Ct.updateRenderTargetMipmap(nt)),B&&O.end(R),b.isScene===!0&&b.onAfterRender(R,b,U),ot.resetDefaultState(),W=-1,$=null,T.pop(),T.length>0?(w=T[T.length-1],Ct.setTextureUnits(w.state.textureUnits),Be===!0&&J.setGlobalState(R.clippingPlanes,w.state.camera)):w=null,_.pop(),_.length>0?E=_[_.length-1]:E=null,I!==null&&I.renderEnd()};function Wd(b,U,H,B){if(b.visible===!1)return;if(b.layers.test(U.layers)){if(b.isGroup)H=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(U);else if(b.isLight)w.pushLight(b),b.castShadow&&w.pushShadow(b);else if(b.isSprite){let xt=U.isArrayCamera?We:Zt;if(!b.frustumCulled||b.intersectsFrustum(xt)){B&&Ve.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Ee);let ht=tt.update(b),vt=b.material;vt.visible&&E.push(b,ht,vt,H,Ve.z,null,U)}}else if(b.isMesh||b.isLine||b.isPoints){let xt=U.isArrayCamera?We:Zt;if(!b.frustumCulled||b.intersectsFrustum(xt)){let ht=tt.update(b),vt=b.material;if(B&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ve.copy(b.boundingSphere.center)):(ht.boundingSphere===null&&ht.computeBoundingSphere(),Ve.copy(ht.boundingSphere.center)),Ve.applyMatrix4(b.matrixWorld).applyMatrix4(Ee)),Array.isArray(vt)){let Tt=ht.groups;for(let Ht=0,$t=Tt.length;Ht<$t;Ht++){let Mt=Tt[Ht],te=vt[Mt.materialIndex];te&&te.visible&&E.push(b,ht,te,H,Ve.z,Mt,U)}}else vt.visible&&E.push(b,ht,vt,H,Ve.z,null,U)}}}let dt=b.children;for(let xt=0,ht=dt.length;xt<ht;xt++)Wd(dt[xt],U,H,B)}function b_(b,U,H,B){let{opaque:z,transmissive:dt,transparent:xt}=b;w.setupLightsView(H),Be===!0&&J.setGlobalState(R.clippingPlanes,H),B&&lt.viewport(et.copy(B)),z.length>0&&au(z,U,H),dt.length>0&&au(dt,U,H),xt.length>0&&au(xt,U,H),lt.buffers.depth.setTest(!0),lt.buffers.depth.setMask(!0),lt.buffers.color.setMask(!0),lt.setPolygonOffset(!1)}function T_(b,U,H,B){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[B.id]===void 0){let Mt=kt.has("EXT_color_buffer_half_float")||kt.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[B.id]=new hi(1,1,{generateMipmaps:!0,type:Mt?Hi:Jn,minFilter:qs,samples:Math.max(4,ie.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ne.workingColorSpace})}let dt=w.state.transmissionRenderTarget[B.id],xt=B.viewport||et;dt.setSize(xt.z*R.transmissionResolutionScale,xt.w*R.transmissionResolutionScale);let ht=R.getRenderTarget(),vt=R.getActiveCubeFace(),Tt=R.getActiveMipmapLevel();R.setRenderTarget(dt),R.getClearColor(Z),at=R.getClearAlpha(),at<1&&R.setClearColor(16777215,.5),R.clear(),Et&&C.render(H);let Ht=R.toneMapping;R.toneMapping=ds;let $t=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),w.setupLightsView(B),Be===!0&&J.setGlobalState(R.clippingPlanes,B),au(b,H,B),Ct.updateMultisampleRenderTarget(dt),Ct.updateRenderTargetMipmap(dt),kt.has("WEBGL_multisampled_render_to_texture")===!1){let Mt=!1;for(let te=0,qe=U.length;te<qe;te++){let Ae=U[te],{object:Me,geometry:Sn,material:bt,group:Un}=Ae;if(bt.side===Ai&&Me.layers.test(B.layers)){let ce=bt.side;bt.side=Hn,bt.needsUpdate=!0,E_(Me,H,B,Sn,bt,Un),bt.side=ce,bt.needsUpdate=!0,Mt=!0}}Mt===!0&&(Ct.updateMultisampleRenderTarget(dt),Ct.updateRenderTargetMipmap(dt))}R.setRenderTarget(ht,vt,Tt),R.setClearColor(Z,at),$t!==void 0&&(B.viewport=$t),R.toneMapping=Ht}function au(b,U,H){let B=U.isScene===!0?U.overrideMaterial:null;for(let z=0,dt=b.length;z<dt;z++){let xt=b[z],{object:ht,geometry:vt,group:Tt}=xt,Ht=xt.material;Ht.allowOverride===!0&&B!==null&&(Ht=B),ht.layers.test(H.layers)&&E_(ht,U,H,vt,Ht,Tt)}}function E_(b,U,H,B,z,dt){I!==null&&z.isNodeMaterial&&I.setObject(b,z),b.onBeforeRender(R,U,H,B,z,dt),b.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),z.onBeforeRender(R,U,H,B,b,dt),z.transparent===!0&&z.side===Ai&&z.forceSinglePass===!1?(z.side=Hn,z.needsUpdate=!0,R.renderBufferDirect(H,U,B,z,b,dt),z.side=Ga,z.needsUpdate=!0,R.renderBufferDirect(H,U,B,z,b,dt),z.side=Ai):R.renderBufferDirect(H,U,B,z,b,dt),b.onAfterRender(R,U,H,B,z,dt)}function A_(b){let U=0;for(let H of b)H.texture!==null&&U++;return U}function fl(b,U,H){U.isScene!==!0&&(U=St);let B=Rt.get(b),z=w.state.lights,dt=w.state.shadowsArray,xt=z.state.version,ht=j.getParameters(b,z.state,dt,U,H,w.state.lightProbeGridArray),vt=j.getProgramCacheKey(ht),Tt=B.programs;B.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?U.environment:null,B.fog=U.fog;let Ht=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;B.envMap=A.get(b.envMap||B.environment,Ht),B.envMapRotation=B.environment!==null&&b.envMap===null?U.environmentRotation:b.envMapRotation,Tt===void 0&&(b.addEventListener("dispose",me),Tt=new Map,B.programs=Tt,B.programVariants=new Map);let $t=Tt.get(vt);if($t!==void 0){if(B.currentProgram===$t&&B.lightsStateVersion===xt)return R_(b,ht),$t}else ht.uniforms=j.getUniforms(b),I!==null&&b.isNodeMaterial&&I.build(b,H,ht),b.onBeforeCompile(ht,R),$t=j.acquireProgram(ht,vt),Tt.set(vt,$t),B.uniforms=ht.uniforms;let Mt=B.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Mt.clippingPlanes=J.uniform),R_(b,ht),B.needsLights=_T(b),B.lightsStateVersion=xt,B.needsLights&&(Mt.ambientLightColor.value=z.state.ambient,Mt.lightProbe.value=z.state.probe,Mt.sunLights.value=z.state.sun,Mt.sunLightShadows.value=z.state.sunShadow,Mt.directionalLights.value=z.state.directional,Mt.directionalLightShadows.value=z.state.directionalShadow,Mt.spotLights.value=z.state.spot,Mt.spotLightShadows.value=z.state.spotShadow,Mt.rectAreaLights.value=z.state.rectArea,Mt.ltc_1.value=z.state.rectAreaLTC1,Mt.ltc_2.value=z.state.rectAreaLTC2,Mt.pointLights.value=z.state.point,Mt.pointLightShadows.value=z.state.pointShadow,Mt.hemisphereLights.value=z.state.hemi,Mt.sunShadowMatrix.value=z.state.sunShadowMatrix,Mt.sunShadowCascade.value=z.state.sunShadowCascade,Mt.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Mt.spotLightMatrix.value=z.state.spotLightMatrix,Mt.spotLightMap.value=z.state.spotLightMap,Mt.pointShadowMatrix.value=z.state.pointShadowMatrix),B.numLightProbeGrids=A_(w.state.lightProbeGridArray),B.currentProgram=$t,B.uniformsList=null,$t}function pT(b,U,H,B,z){let dt=Rt.get(b),xt=dt.currentProgram.id+","+B+","+z,ht=dt.programVariants.get(xt);return ht===void 0?(ht=fl(b,U,H),dt.programVariants.set(xt,ht)):(dt.currentProgram=ht,dt.uniformsList=null,dt.outputColorSpace=B,dt.toneMapping=z),ht}function w_(b){if(b.uniformsList===null){let U=b.currentProgram.getUniforms();b.uniformsList=ol.seqWithValue(U.seq,b.uniforms)}return b.uniformsList}function R_(b,U){let H=Rt.get(b);H.outputColorSpace=U.outputColorSpace,H.batching=U.batching,H.batchingColor=U.batchingColor,H.instancing=U.instancing,H.instancingColor=U.instancingColor,H.instancingMorph=U.instancingMorph,H.skinning=U.skinning,H.morphTargets=U.morphTargets,H.morphNormals=U.morphNormals,H.morphColors=U.morphColors,H.morphTargetsCount=U.morphTargetsCount,H.numClippingPlanes=U.numClippingPlanes,H.numIntersection=U.numClipIntersection,H.vertexAlphas=U.vertexAlphas,H.vertexTangents=U.vertexTangents,H.toneMapping=U.toneMapping}function mT(b,U,H,B,z){U.isScene!==!0&&(U=St),Ct.resetTextureUnits();let dt=U.fog,xt=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?U.environment:null,ht=nt===null?R.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:ne.workingColorSpace,vt=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,Tt=A.get(B.envMap||xt,vt),Ht=B.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,$t=!!H.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Mt=!!H.morphAttributes.position,te=!!H.morphAttributes.normal,qe=!!H.morphAttributes.color,Ae=ds;B.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(Ae=R.toneMapping);let Me=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Sn=Me!==void 0?Me.length:0,bt=Rt.get(B),Un=w.state.lights;if(Be===!0&&(fn===!0||b!==$)){let ze=b===$&&B.id===W;J.setState(B,b,ze)}let ce=!1,Xa=!1;B.version===bt.__version?bt.needsLights&&bt.lightsStateVersion!==Un.state.version||z.isBatchedMesh&&bt.batching===!1||!z.isBatchedMesh&&bt.batching===!0||z.isBatchedMesh&&bt.batchingColor===!0&&z._colorsTexture===null||z.isBatchedMesh&&bt.batchingColor===!1&&z._colorsTexture!==null||z.isInstancedMesh&&bt.instancing===!1||!z.isInstancedMesh&&bt.instancing===!0||z.isSkinnedMesh&&bt.skinning===!1||!z.isSkinnedMesh&&bt.skinning===!0||z.isInstancedMesh&&bt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&bt.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&bt.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&bt.instancingMorph===!1&&z.morphTexture!==null||bt.envMap!==Tt||B.fog===!0&&bt.fog!==dt||bt.numClippingPlanes!==void 0&&(bt.numClippingPlanes!==J.numPlanes||bt.numIntersection!==J.numIntersection)||bt.vertexAlphas!==Ht||bt.vertexTangents!==$t||bt.morphTargets!==Mt||bt.morphNormals!==te||bt.morphColors!==qe||bt.morphTargetsCount!==Sn||bt.numLightProbeGrids!==A_(w.state.lightProbeGridArray)?ce=!0:(bt.outputColorSpace!==ht||bt.toneMapping!==Ae)&&(Xa=!0):(ce=!0,bt.__version=B.version);let Mn=bt.currentProgram;(ce===!0||Xa===!0)&&(Mn=Xa===!0?pT(B,U,z,ht,Ae):fl(B,U,z),I&&B.isNodeMaterial&&I.onUpdateProgram(B,Mn,bt));let ru=!1,Ks=!1,Wa=!1,ae=Mn.getUniforms(),dn=bt.uniforms;if(lt.useProgram(Mn.program)&&(ru=!0,Ks=!0,Wa=!0),B.id!==W&&(W=B.id,Ks=!0),ru||$!==b){lt.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),ae.setValue(L,"projectionMatrix",b.projectionMatrix),ae.setValue(L,"viewMatrix",b.matrixWorldInverse);let sn=ae.map.cameraPosition;sn!==void 0&&sn.setValue(L,Qn.setFromMatrixPosition(b.matrixWorld)),ie.logarithmicDepthBuffer&&ae.setValue(L,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&ae.setValue(L,"isOrthographic",b.isOrthographicCamera===!0),$!==b&&($=b,Ks=!0,Wa=!0)}if(bt.needsLights&&(Un.state.sunShadowMap.length>0&&ae.setValue(L,"sunShadowMap",Un.state.sunShadowMap,Ct),Un.state.directionalShadowMap.length>0&&ae.setValue(L,"directionalShadowMap",Un.state.directionalShadowMap,Ct),Un.state.spotShadowMap.length>0&&ae.setValue(L,"spotShadowMap",Un.state.spotShadowMap,Ct),Un.state.pointShadowMap.length>0&&ae.setValue(L,"pointShadowMap",Un.state.pointShadowMap,Ct)),z.isSkinnedMesh){ae.setOptional(L,z,"bindMatrix"),ae.setOptional(L,z,"bindMatrixInverse");let ze=z.skeleton;ze&&(ze.boneTexture===null&&ze.computeBoneTexture(),ae.setValue(L,"boneTexture",ze.boneTexture,Ct))}z.isBatchedMesh&&(ae.setOptional(L,z,"batchingTexture"),ae.setValue(L,"batchingTexture",z._matricesTexture,Ct),ae.setOptional(L,z,"batchingIdTexture"),ae.setValue(L,"batchingIdTexture",z._indirectTexture,Ct),ae.setOptional(L,z,"batchingColorTexture"),z._colorsTexture!==null&&ae.setValue(L,"batchingColorTexture",z._colorsTexture,Ct));let wi=H.morphAttributes;if((wi.position!==void 0||wi.normal!==void 0||wi.color!==void 0)&&K.update(z,H,Mn),(Ks||bt.receiveShadow!==z.receiveShadow)&&(bt.receiveShadow=z.receiveShadow,ae.setValue(L,"receiveShadow",z.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&U.environment!==null&&(dn.envMapIntensity.value=U.environmentIntensity),dn.dfgLUT!==void 0&&(dn.dfgLUT.value=SD()),Ks){if(ae.setValue(L,"toneMappingExposure",R.toneMappingExposure),bt.needsLights&&gT(dn,Wa),dt&&B.fog===!0&&rt.refreshFogUniforms(dn,dt),rt.refreshMaterialUniforms(dn,B,mt,wt,w.state.transmissionRenderTarget[b.id]),bt.needsLights&&bt.numLightProbeGrids>0){let ze=x,sn=0;for(let _s of w.state.lightProbeGridArray)_s.texture!==null&&(ze.textures[sn]=_s.texture,ze.min[sn]=_s.boundingBox.min,ze.max[sn]=_s.boundingBox.max,ze.resolution[sn]=_s.resolution,sn++);for(let _s in ze)ze[_s].length=sn;dn.probesSH.value=ze.textures,dn.probesMin.value=ze.min,dn.probesMax.value=ze.max,dn.probesResolution.value=ze.resolution}ol.upload(L,w_(bt),dn,Ct)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(ol.upload(L,w_(bt),dn,Ct),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&ae.setValue(L,"center",z.center),ae.setValue(L,"modelViewMatrix",z.modelViewMatrix),ae.setValue(L,"normalMatrix",z.normalMatrix),ae.setValue(L,"modelMatrix",z.matrixWorld),B.uniformsGroups!==void 0){let ze=B.uniformsGroups;for(let sn=0,_s=ze.length;sn<_s;sn++){let N_=ze[sn];At.update(N_,Mn),At.bind(N_,Mn)}}return Mn}function gT(b,U){b.ambientLightColor.needsUpdate=U,b.lightProbe.needsUpdate=U,b.sunLights.needsUpdate=U,b.sunLightShadows.needsUpdate=U,b.directionalLights.needsUpdate=U,b.directionalLightShadows.needsUpdate=U,b.pointLights.needsUpdate=U,b.pointLightShadows.needsUpdate=U,b.spotLights.needsUpdate=U,b.spotLightShadows.needsUpdate=U,b.rectAreaLights.needsUpdate=U,b.hemisphereLights.needsUpdate=U}function _T(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return nt},this.setRenderTargetTextures=function(b,U,H){let B=Rt.get(b);B.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),Rt.get(b.texture).__webglTexture=U,Rt.get(b.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:H,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,U){let H=Rt.get(b);H.__webglFramebuffer=U,H.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(b,U=0,H=0){nt=b,X=U,F=H;let B=null,z=!1,dt=!1;if(b){let ht=Rt.get(b);if(ht.__useDefaultFramebuffer!==void 0){lt.bindFramebuffer(L.FRAMEBUFFER,ht.__webglFramebuffer),et.copy(b.viewport),pt.copy(b.scissor),It=b.scissorTest,lt.viewport(et),lt.scissor(pt),lt.setScissorTest(It),W=-1;return}else if(ht.__webglFramebuffer===void 0)Ct.setupRenderTarget(b);else if(ht.__hasExternalTextures)Ct.rebindTextures(b,Rt.get(b.texture).__webglTexture,Rt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let Ht=b.depthTexture;if(ht.__boundDepthTexture!==Ht){if(Ht!==null&&Rt.has(Ht)&&(b.width!==Ht.image.width||b.height!==Ht.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ct.setupDepthRenderbuffer(b)}}let vt=b.texture;(vt.isData3DTexture||vt.isDataArrayTexture||vt.isCompressedArrayTexture)&&(dt=!0);let Tt=Rt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Tt[U])?B=Tt[U][H]:B=Tt[U],z=!0):b.samples>0&&Ct.useMultisampledRTT(b)===!1?B=Rt.get(b).__webglMultisampledFramebuffer:Array.isArray(Tt)?B=Tt[H]:B=Tt,et.copy(b.viewport),pt.copy(b.scissor),It=b.scissorTest}else et.copy(Dt).multiplyScalar(mt).floor(),pt.copy(le).multiplyScalar(mt).floor(),It=fe;if(H!==0&&(B=G),lt.bindFramebuffer(L.FRAMEBUFFER,B)&&lt.drawBuffers(b,B),lt.viewport(et),lt.scissor(pt),lt.setScissorTest(It),z){let ht=Rt.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+U,ht.__webglTexture,H)}else if(dt){let ht=U;for(let vt=0;vt<b.textures.length;vt++){let Tt=Rt.get(b.textures[vt]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+vt,Tt.__webglTexture,H,ht)}}else if(b!==null&&H!==0){let ht=Rt.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ht.__webglTexture,H)}W=-1};function C_(b){let U=Rt.get(b);return(U.__readFormat!==b.format||U.__readType!==b.type)&&(U.__readFormat=b.format,U.__readType=b.type,U.__formatReadable=ie.textureFormatReadable(b.format),U.__typeReadable=ie.textureTypeReadable(b.type)),U}this.readRenderTargetPixels=function(b,U,H,B,z,dt,xt,ht=0){if(!(b&&b.isWebGLRenderTarget)){Ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let vt=Rt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&xt!==void 0&&(vt=vt[xt],Array.isArray(vt)&&(vt=vt[0])),vt){lt.bindFramebuffer(L.FRAMEBUFFER,vt);try{let Tt=b.textures[ht],Ht=Tt.format,$t=Tt.type;b.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ht);let Mt=C_(Tt);if(Mt.__formatReadable===!1){Ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Mt.__typeReadable===!1){Ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=b.width-B&&H>=0&&H<=b.height-z&&L.readPixels(U,H,B,z,st.convert(Ht),st.convert($t),dt)}finally{let Tt=nt!==null?Rt.get(nt).__webglFramebuffer:null;lt.bindFramebuffer(L.FRAMEBUFFER,Tt)}}},this.readRenderTargetPixelsAsync=async function(b,U,H,B,z,dt,xt,ht=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let vt=Rt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&xt!==void 0&&(vt=vt[xt],Array.isArray(vt)&&(vt=vt[0])),vt)if(U>=0&&U<=b.width-B&&H>=0&&H<=b.height-z){lt.bindFramebuffer(L.FRAMEBUFFER,vt);let Tt=b.textures[ht],Ht=Tt.format,$t=Tt.type;b.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ht);let Mt=C_(Tt);if(Mt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Mt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let te=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,te),L.bufferData(L.PIXEL_PACK_BUFFER,dt.byteLength,L.STREAM_READ),L.readPixels(U,H,B,z,st.convert(Ht),st.convert($t),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);let qe=nt!==null?Rt.get(nt).__webglFramebuffer:null;lt.bindFramebuffer(L.FRAMEBUFFER,qe);let Ae=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await o1(L,Ae,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,te),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,dt),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(te),L.deleteSync(Ae),dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,U=null,H=0){let B=Math.pow(2,-H),z=Math.floor(b.image.width*B),dt=Math.floor(b.image.height*B),xt=U!==null?U.x:0,ht=U!==null?U.y:0;Ct.setTexture2D(b,0),L.copyTexSubImage2D(L.TEXTURE_2D,H,0,0,xt,ht,z,dt),lt.unbindTexture()},this.copyTextureToTexture=function(b,U,H=null,B=null,z=0,dt=0){let xt,ht,vt,Tt,Ht,$t,Mt,te,qe,Ae=b.isCompressedTexture?b.mipmaps[dt]:b.image;if(H!==null)xt=H.max.x-H.min.x,ht=H.max.y-H.min.y,vt=H.isBox3?H.max.z-H.min.z:1,Tt=H.min.x,Ht=H.min.y,$t=H.isBox3?H.min.z:0;else{let ae=Math.pow(2,-z);xt=Math.floor(Ae.width*ae),ht=Math.floor(Ae.height*ae),b.isDataArrayTexture?vt=Ae.depth:b.isData3DTexture?vt=Math.floor(Ae.depth*ae):vt=1,Tt=0,Ht=0,$t=0}B!==null?(Mt=B.x,te=B.y,qe=B.z):(Mt=0,te=0,qe=0);let Me=st.convert(U.format),Sn=st.convert(U.type),bt;U.isData3DTexture?(Ct.setTexture3D(U,0),bt=L.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Ct.setTexture2DArray(U,0),bt=L.TEXTURE_2D_ARRAY):(Ct.setTexture2D(U,0),bt=L.TEXTURE_2D),lt.activeTexture(L.TEXTURE0),lt.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,U.flipY),lt.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),lt.pixelStorei(L.UNPACK_ALIGNMENT,U.unpackAlignment);let Un=lt.getParameter(L.UNPACK_ROW_LENGTH),ce=lt.getParameter(L.UNPACK_IMAGE_HEIGHT),Xa=lt.getParameter(L.UNPACK_SKIP_PIXELS),Mn=lt.getParameter(L.UNPACK_SKIP_ROWS),ru=lt.getParameter(L.UNPACK_SKIP_IMAGES);lt.pixelStorei(L.UNPACK_ROW_LENGTH,Ae.width),lt.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ae.height),lt.pixelStorei(L.UNPACK_SKIP_PIXELS,Tt),lt.pixelStorei(L.UNPACK_SKIP_ROWS,Ht),lt.pixelStorei(L.UNPACK_SKIP_IMAGES,$t);let Ks=b.isDataArrayTexture||b.isData3DTexture,Wa=U.isDataArrayTexture||U.isData3DTexture;if(b.isDepthTexture){let ae=Rt.get(b),dn=Rt.get(U),wi=Rt.get(ae.__renderTarget),ze=Rt.get(dn.__renderTarget);lt.bindFramebuffer(L.READ_FRAMEBUFFER,wi.__webglFramebuffer),lt.bindFramebuffer(L.DRAW_FRAMEBUFFER,ze.__webglFramebuffer);for(let sn=0;sn<vt;sn++)Ks&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Rt.get(b).__webglTexture,z,$t+sn),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Rt.get(U).__webglTexture,dt,qe+sn)),L.blitFramebuffer(Tt,Ht,Tt+xt,Ht+ht,Mt,te,Mt+xt,te+ht,L.DEPTH_BUFFER_BIT,L.NEAREST);lt.bindFramebuffer(L.READ_FRAMEBUFFER,null),lt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(z!==0||b.isRenderTargetTexture||Rt.has(b)){let ae=Rt.get(b),dn=Rt.get(U);lt.bindFramebuffer(L.READ_FRAMEBUFFER,N),lt.bindFramebuffer(L.DRAW_FRAMEBUFFER,k);for(let wi=0;wi<vt;wi++)Ks?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ae.__webglTexture,z,$t+wi):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ae.__webglTexture,z),Wa?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,dn.__webglTexture,dt,qe+wi):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,dn.__webglTexture,dt),z!==0?L.blitFramebuffer(Tt,Ht,Tt+xt,Ht+ht,Mt,te,Mt+xt,te+ht,L.COLOR_BUFFER_BIT,L.NEAREST):Wa?L.copyTexSubImage3D(bt,dt,Mt,te,qe+wi,Tt,Ht,xt,ht):L.copyTexSubImage2D(bt,dt,Mt,te,Tt,Ht,xt,ht);lt.bindFramebuffer(L.READ_FRAMEBUFFER,null),lt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Wa?b.isDataTexture||b.isData3DTexture?L.texSubImage3D(bt,dt,Mt,te,qe,xt,ht,vt,Me,Sn,Ae.data):U.isCompressedArrayTexture?L.compressedTexSubImage3D(bt,dt,Mt,te,qe,xt,ht,vt,Me,Ae.data):L.texSubImage3D(bt,dt,Mt,te,qe,xt,ht,vt,Me,Sn,Ae):b.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,dt,Mt,te,xt,ht,Me,Sn,Ae.data):b.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,dt,Mt,te,Ae.width,Ae.height,Me,Ae.data):L.texSubImage2D(L.TEXTURE_2D,dt,Mt,te,xt,ht,Me,Sn,Ae);lt.pixelStorei(L.UNPACK_ROW_LENGTH,Un),lt.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ce),lt.pixelStorei(L.UNPACK_SKIP_PIXELS,Xa),lt.pixelStorei(L.UNPACK_SKIP_ROWS,Mn),lt.pixelStorei(L.UNPACK_SKIP_IMAGES,ru),dt===0&&U.generateMipmaps===!0&&U.mipmapsAutoUpdate===!0&&L.generateMipmap(bt),lt.unbindTexture()},this.initRenderTarget=function(b){Rt.get(b).__webglFramebuffer===void 0&&Ct.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Ct.setTextureCube(b,0):b.isData3DTexture?Ct.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Ct.setTexture2DArray(b,0):Ct.setTexture2D(b,0),lt.unbindTexture()},this.resetState=function(){X=0,F=0,nt=null,lt.reset(),ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let n=this.getContext();n.drawingBufferColorSpace=ne._getDrawingBufferColorSpace(t),n.unpackColorSpace=ne._getUnpackColorSpace()}};function Vi(e){let t="/";if(typeof window<"u"){let n=document.querySelector("script[src*='assets/app.js']"),i=n instanceof HTMLScriptElement?n.src:"";if(i)t=new URL("..",i).pathname;else{let s=window.location.pathname;t=s.endsWith("/")?s:s.replace(/\/[^/]*$/,"/")}}return t.endsWith("/")||(t+="/"),t+e.replace(/^\//,"")}function Kn(e,t,n){return Math.max(t,Math.min(n,e))}function m_(e,t){return Math.round(t+(e-t)/3)}function g_(e,t){return Vi(e==="woman"?t==="imv"?"universe/bed/woman-imv.jpg":t==="niv"?"universe/bed/woman-niv.jpg":t==="mask"||t==="cannula"?"universe/bed/woman-mask.jpg":"universe/bed/woman-room.jpg":t==="imv"?"universe/bed/imv.jpg":t==="niv"?"universe/bed/niv.jpg":t==="mask"?"universe/bed/mask.jpg":t==="cannula"?"universe/bed/cannula.jpg":"universe/bed/room.jpg")}function bD(e){return{mode:"VC-AC",tv:480,rr:16,peep:5,ps:10,fio2:40,ie:"1:2",ipap:12,epap:5,backup:14,ti:1,mask:"Full face",...e}}function cl(e){return{...e,fluidMl:e.fluidMl??0,vent:bD(e.vent),pending:"",pressor:"",insulin:!1,calcium:!1,dialysis:!1,prone:!1,protective:!1,headUp:!1,ct:!1,kReplaced:!1,settled:!1,called:!1,announced:!1,worseSaid:!1,ignored:0,heard:"",line:"",good:[],bad:[]}}function q1(){return[cl({id:"ravi",bed:1,name:"Ravi Kumar",age:54,sex:"man",dx:"Severe ARDS",story:"Pneumonia for three days. He was intubated an hour ago. Saturation is 84 percent on a high inspired oxygen. The plateau pressure is climbing.",exam:"Tube in place. Coarse crackles. Cold hands. He is not ready to come off the ventilator.",support:"imv",hr:118,sbp:108,dbp:64,spo2:84,rr:28,gcs:6,glucose:142,k:4.1,kKnown:!1,lactate:2.4,callAt:8,vent:{mode:"VC-AC",tv:560,rr:28,peep:8,fio2:90}}),cl({id:"sunita",bed:2,name:"Sunita Devi",age:61,sex:"woman",dx:"Septic shock",story:"Fever and a cough for two days. The family could not wake her this morning. Lactate is 5.2. She has had no fluid yet.",exam:"Hot, then now cool. Crackles at the right base. Capillary refill is slow.",support:"room",hr:124,sbp:78,dbp:46,spo2:93,rr:26,gcs:13,glucose:168,k:4.4,kKnown:!1,lactate:5.2,callAt:28}),cl({id:"imran",bed:3,name:"Imran Khan",age:29,sex:"man",dx:"Diabetic ketoacidosis",story:"Type 1 diabetes. Insulin was missed through a vomiting illness. Breathing is deep. Glucose is 486. The potassium has not been looked at.",exam:"Dry mouth. Mild abdominal tenderness. No focal chest finding. The rate of breathing is the acid.",support:"room",hr:116,sbp:104,dbp:64,spo2:98,rr:30,gcs:14,glucose:486,k:2.9,kKnown:!1,lactate:2.2,callAt:48}),cl({id:"anil",bed:4,name:"Anil Sharma",age:47,sex:"man",dx:"Intracerebral hemorrhage",story:"Sudden headache, then he stopped answering. The right pupil is larger. The systolic pressure is 188. There is no scan yet.",exam:"GCS 6. Right pupil larger. Neck is not straight. He is on a face mask.",support:"mask",hr:58,sbp:188,dbp:104,spo2:96,rr:14,gcs:6,glucose:128,k:4,kKnown:!1,lactate:1.4,callAt:68}),cl({id:"meena",bed:5,name:"Meena Iyer",age:66,sex:"woman",dx:"Cardiogenic shock",story:"Anterior infarction this morning. She is cold, wet, and quiet. Saturation is 88 percent. A litre of fluid has not been given, and should not be.",exam:"Crackles to the mid zones. A gallop. Cool hands. The mask is on. NIV is not applied yet.",support:"mask",hr:114,sbp:78,dbp:50,spo2:88,rr:28,gcs:14,glucose:136,k:4.2,kKnown:!1,lactate:4,callAt:88}),cl({id:"gopal",bed:6,name:"Gopal Das",age:71,sex:"man",dx:"Hyperkalemia, anuric",story:"No urine for twelve hours. The monitor shows a wide QRS and peaked T waves. Potassium is 7.1. Dialysis is not running.",exam:"Slow rate. No fluid overload to listen for. He is on nasal oxygen.",support:"cannula",hr:52,sbp:136,dbp:78,spo2:96,rr:16,gcs:15,glucose:118,k:7.1,kKnown:!0,lactate:2.4,callAt:108})]}function eu(e){let t=m_(e.sbp,e.dbp);return e.id==="ravi"?`Bed ${e.bed}. ${e.name}. Saturation ${e.spo2} percent. The ventilator needs a decision.`:e.id==="sunita"?`Bed ${e.bed}. ${e.name}. Mean pressure ${t}. She is in shock.`:e.id==="imran"?`Bed ${e.bed}. ${e.name}. Glucose ${e.glucose}. Do not start insulin until you know the potassium.`:e.id==="anil"?`Bed ${e.bed}. ${e.name}. Consciousness has fallen. The right pupil is larger.`:e.id==="meena"?`Bed ${e.bed}. ${e.name}. Mean pressure ${t}. The lungs are wet. Do not give fluid.`:`Bed ${e.bed}. ${e.name}. Potassium ${e.k}. The QRS is wide.`}function re(e,t){e.includes(t)||e.push(t)}function TD(e,t,n){e.heard=t,e.line=n}function Y1(e){return e.id==="ravi"?[{id:"vt6",label:"Tidal volume 6 mL/kg, plateau under 30"},{id:"peep",label:"Raise PEEP, keep the volume low"},{id:"prone",label:"Prone the patient"},{id:"vt10",label:"Raise tidal volume above 10 mL/kg"},{id:"extubate",label:"Extubate now"}]:e.id==="sunita"?[{id:"o2",label:"Oxygen by mask"},{id:"fluid",label:"Balanced crystalloid 500 mL"},{id:"norepi",label:"Noradrenaline 0.05 mcg/kg/min"},{id:"adr",label:"Adrenaline 0.05 mcg/kg/min"},{id:"flood",label:"Give another 2 litres without looking"}]:e.id==="imran"?[{id:"fluid",label:"Balanced crystalloid 500 mL"},{id:"checkk",label:"Check the potassium"},{id:"kcl",label:"Replace potassium"},{id:"insulin",label:"Insulin infusion 0.1 units/kg/h"},{id:"bicarb",label:"Sodium bicarbonate bolus"}]:e.id==="anil"?[{id:"head",label:"Head up, neck straight"},{id:"ct",label:"Non-contrast CT of the head"},{id:"hts",label:"Hypertonic saline"},{id:"nic",label:"Nicardipine, lower the pressure smoothly"},{id:"flat",label:"Lay the head flat"}]:e.id==="meena"?[{id:"niv",label:"Set NIV and apply it"},{id:"norepi",label:"Noradrenaline 0.05 mcg/kg/min"},{id:"dobutamine",label:"Dobutamine 2.5 mcg/kg/min"},{id:"fluid",label:"Crystalloid 500 mL"},{id:"gtn",label:"GTN infusion"}]:[{id:"calcium",label:"Calcium gluconate, intravenous"},{id:"insulin",label:"Insulin with dextrose"},{id:"dialysis",label:"Start dialysis"},{id:"wait",label:"A resin, and recheck in six hours"},{id:"saline",label:"Potassium-free fluid only"}]}function ED(e){e.id==="ravi"&&(e.settled=e.protective&&e.prone),e.id==="sunita"&&(e.settled=e.fluidMl>=250&&(e.pressor==="norepi"||e.pressor==="adr")),e.id==="imran"&&(e.settled=e.kReplaced&&e.insulin&&e.k>=3.3),e.id==="anil"&&(e.settled=e.headUp&&e.ct&&(e.good.includes("Hypertonic saline")||e.good.includes("Pressure lowered smoothly"))),e.id==="meena"&&(e.settled=e.support==="niv"&&(e.pressor==="norepi"||e.pressor==="dobutamine"&&m_(e.sbp,e.dbp)>=65)),e.id==="gopal"&&(e.settled=e.calcium&&e.insulin&&e.dialysis),e.settled&&(e.called=!1)}function Z1(e,t){let n={...e,good:[...e.good],bad:[...e.bad],vent:{...e.vent}},i="Noted.";return n.id==="ravi"?t==="vt6"?(n.protective=!0,n.vent.tv=420,n.vent.rr=22,n.vent.peep=Math.max(8,n.vent.peep),n.vent.fio2=Math.max(50,n.vent.fio2-10),n.rr=22,n.spo2=Kn(n.spo2+4,70,100),re(n.good,"Lung-protective tidal volume"),i="Six millilitres per kilogram. The plateau stays under 30. That is the volume for this lung."):t==="peep"?(n.vent.peep=14,n.vent.fio2=Math.max(50,n.vent.fio2-10),n.spo2=Kn(n.spo2+3,70,100),re(n.good,"PEEP raised with a safe volume"),i="End-expiratory pressure is up. Keep the tidal volume low while you do it."):t==="prone"?(n.prone=!0,n.vent.fio2=Math.max(45,n.vent.fio2-10),n.spo2=Kn(n.spo2+6,70,100),re(n.good,"Prone for severe ARDS"),i="He is prone. Early, prolonged proning is the move when the oxygen is this low."):t==="vt10"?(n.vent.tv=740,n.vent.rr=16,n.rr=16,n.spo2=Kn(n.spo2-4,70,100),n.protective=!1,re(n.bad,"Tidal volume above 10 mL/kg"),i="That volume harms this lung. Come back to 6 millilitres per kilogram predicted weight."):t==="extubate"&&(n.spo2=Kn(n.spo2-6,70,100),n.protective=!1,re(n.bad,"Extubation during severe hypoxemia"),i="He is not ready to come off the ventilator. Leave the tube in, and keep the volume at 6 millilitres per kilogram."):n.id==="sunita"?t==="o2"?(n.support="mask",n.spo2=Kn(n.spo2+3,70,100),re(n.good,"Oxygen on"),i="The mask is on. Saturation is rising. The pressure is still the emergency."):t==="fluid"?(n.fluidMl+=500,n.fluidMl<=1e3?(n.sbp+=8,n.dbp+=4,n.lactate=Math.max(1.2,n.lactate-.4),re(n.good,"First fluid into an empty circulation"),i="A bolus met an empty circulation. Look again before the next bag. If the mean pressure stays under 65, start noradrenaline."):(n.spo2=Kn(n.spo2-3,70,100),re(n.bad,"Fluid continued after the first response"),i="Further fluid, after the first response, is how edema starts. The oxygen is not better.")):t==="norepi"||t==="adr"?(n.pressor=t,n.line=t==="norepi"?"Noradrenaline 0.05 mcg/kg/min":"Adrenaline 0.05 mcg/kg/min",n.sbp+=t==="adr"?18:14,n.dbp+=t==="adr"?12:10,t==="adr"&&(n.hr+=12),n.fluidMl<250?(re(n.bad,"Vasopressor before any fluid"),i="The pressure rose, and the tank is still empty. Give a crystalloid, then keep the infusion."):(re(n.good,t==="norepi"?"Noradrenaline for a low mean pressure":"Adrenaline for a low mean pressure"),i=t==="norepi"?"Noradrenaline raised the mean pressure. Check the lactate and the urine, not only the number.":"Adrenaline raised the pressure and the rate. It is reasonable when the mean pressure is low.")):t==="flood"&&(n.fluidMl+=2e3,n.spo2=Kn(n.spo2-6,70,100),re(n.bad,"Two litres without a new look"),i="Unchecked fluid. The lungs are wetter and the oxygen fell. Reassess, then a vasopressor if the mean pressure is still under 65."):n.id==="imran"?t==="fluid"?(n.fluidMl+=500,n.sbp+=6,re(n.good,"Fluid first in ketoacidosis"),i="Fluid first. That is the resuscitation. The potassium still decides the insulin."):t==="checkk"?(n.kKnown=!0,i=`Potassium is ${n.k}. Under 3.3. Replace potassium and hold the insulin.`):t==="kcl"?n.kKnown?(n.k=3.6,n.kReplaced=!0,re(n.good,"Potassium replaced before insulin"),i="Potassium is now 3.6. Insulin can run. Do not stop it just because the glucose falls."):i="Look at the potassium first, so you know what you are treating.":t==="insulin"?!n.kKnown||n.k<3.3?(n.hr=42,n.k=Math.max(2.2,n.k-.6),re(n.bad,"Insulin with potassium under 3.3"),i="Insulin with potassium at this level can stop the heart. Hold it. Replace potassium."):(n.insulin=!0,n.line="Insulin 0.1 units/kg/h",n.glucose=Math.max(180,n.glucose-80),re(n.good,"Insulin after a safe potassium"),i="Insulin is running. Add dextrose as the glucose nears 200, and keep the insulin on until the gap closes."):t==="bicarb"&&(re(n.bad,"Bicarbonate that was not needed"),i="Bicarbonate is not routine at this pH. Fluid, potassium, and insulin are the treatment."):n.id==="anil"?t==="head"?(n.headUp=!0,re(n.good,"Head up"),i="Head up, neck straight. That is the position. It does not replace the scan."):t==="ct"?(n.ct=!0,re(n.good,"Non-contrast CT"),i="Non-contrast CT. Acute blood in the right basal ganglia. MRI is not required."):t==="hts"?(n.line="3% saline",n.gcs=Math.min(10,n.gcs+1),re(n.good,"Hypertonic saline"),i="Hypertonic saline for a falling consciousness. It is for herniation, not a standing drip."):t==="nic"?(n.sbp=158,n.dbp=88,n.line="Nicardipine",re(n.good,"Pressure lowered smoothly"),i="The systolic pressure is coming down toward 160, smoothly. Not a nitrate, and not a collapse."):t==="flat"&&(n.headUp=!1,n.gcs=Math.max(3,n.gcs-1),re(n.bad,"Head laid flat"),i="Flat raises the intracranial pressure. Sit the head up."):n.id==="meena"?t==="niv"?(n.support="niv",n.vent.mode="NIV",n.vent.ipap=12,n.vent.epap=6,n.vent.fio2=60,n.vent.backup=16,n.vent.mask="Full face",n.spo2=Kn(n.spo2+4,70,100),n.rr=Math.max(18,n.rr-4),re(n.good,"NIV applied"),i="NIV is on. The mask was not on her face until you applied it. Fluid is still the wrong drug."):t==="norepi"?(n.pressor="norepi",n.line="Noradrenaline 0.05 mcg/kg/min",n.sbp+=14,n.dbp+=8,re(n.good,"Noradrenaline while the pressure was low"),i="Noradrenaline is holding the pressure. Dobutamine can wait until the mean pressure is safer, if the output is still low."):t==="dobutamine"?(n.pressor="dobutamine",n.line="Dobutamine 2.5 mcg/kg/min",m_(n.sbp,n.dbp)<65?(n.sbp-=6,n.hr+=12,re(n.bad,"Dobutamine while profoundly hypotensive"),i="Dobutamine dropped the pressure. Noradrenaline first, while the mean pressure is under 65."):(n.hr+=8,n.lactate=Math.max(1.2,n.lactate-.4),re(n.good,"Dobutamine once the pressure allowed it"),i="An inotrope is reasonable now that the pressure is not critically low. Do not add fluid.")):t==="fluid"?(n.fluidMl+=500,n.spo2=Kn(n.spo2-5,70,100),re(n.bad,"Fluid into a wet circulation"),i="The lungs were already wet. The bolus made the oxygen worse. Stop the fluid."):t==="gtn"&&(n.sbp<110?(n.sbp-=16,n.dbp-=10,re(n.bad,"Nitrate while hypotensive"),i="The pressure was already low. GTN took what was left. A nitrate is for a high pressure, not for this."):i="The pressure is not a hypertensive emergency. Leave the nitrate."):n.id==="gopal"&&(t==="calcium"?(n.calcium=!0,n.line="Calcium gluconate",n.hr=Math.min(70,n.hr+8),re(n.good,"Calcium for a wide QRS"),i="Calcium does not lower the potassium. It protects the heart while you shift it and remove it."):t==="insulin"?(n.insulin=!0,n.k=Math.max(4.8,n.k-1.1),n.line="Insulin with dextrose",re(n.good,"Insulin with dextrose"),i="Insulin shifts potassium inside the cell. The dextrose is why the glucose does not crash. This is not a cure. He still needs dialysis."):t==="dialysis"?n.calcium?(n.dialysis=!0,n.k=Math.max(4.6,n.k-1.4),re(n.good,"Dialysis for anuric hyperkalemia"),i="The circuit is running. Dialysis removes the potassium. Calcium and insulin were the bridge."):(re(n.bad,"Dialysis before calcium"),i="Dialysis will remove the potassium. Give calcium first. The QRS is wide now."):t==="wait"?(n.hr=Math.max(36,n.hr-8),re(n.bad,"A resin while the ECG was changing"),i="A resin in six hours is too slow. The ECG is already changing. Calcium now."):t==="saline"&&(re(n.bad,"Fluid as the treatment of hyperkalemia"),i="Fluid does not protect the heart and it does not remove this potassium. Calcium, then insulin with dextrose, then dialysis.")),ED(n),n.settled&&(i+=" This bed can settle. The others are still yours."),TD(n,i,n.line),{patient:n,speech:i}}function J1(e,t){let n={...e,good:e.good,bad:e.bad,vent:e.vent},i="";return!n.settled&&!n.called&&t>=n.callAt&&(n.called=!0,i=eu(n)),n.called&&!n.settled&&(n.ignored+=1,n.ignored>20&&n.ignored%20===0&&((n.id==="ravi"||n.id==="meena"||n.id==="sunita")&&(n.spo2=Kn(n.spo2-1,70,100)),(n.id==="sunita"||n.id==="meena")&&(n.sbp=Kn(n.sbp-1,60,230),n.dbp=Kn(n.dbp-1,30,140)),n.id==="anil"&&(n.gcs=Math.max(3,n.gcs)),n.id==="gopal"&&(n.hr=Kn(n.hr-1,34,180)),n.worseSaid||(n.worseSaid=!0,i=i||`Bed ${n.bed}. ${n.name} is worse while waiting.`))),{patient:n,speech:i}}var K1=new Map;function Q1(e){let t=K1.get(e);return t||(t=new Image,t.src=e,K1.set(e,t)),t}function nu(e){return e.support==="niv"||e.support==="imv"}function Gd(e){let t=e.vent,n=e.support==="imv",i=n?t.rr||16:t.backup||12,s=n?t.peep:t.epap,a=n?s+(t.mode==="PC-AC"||t.mode==="PS"?t.ps||10:Math.max(8,Math.round((t.tv||400)/35))):t.ipap,r=Math.round(n?(t.tv||400)/1e3/(60/Math.max(8,i)*.33)*60:Math.max(10,(t.ipap-t.epap)*3));return{mode:n?t.mode:"NIV",imv:n,rr:i,peep:s,pip:Math.round(a),flow:r,tv:n?t.tv:Math.round(Math.max(250,(t.ipap-t.epap)*45)),fio2:t.fio2,ipap:t.ipap,epap:t.epap,mask:t.mask}}function ul(e){return nu(e)?Math.max(6,Gd(e).rr):Math.max(6,e.rr||16)}function Rr(e,t,n,i,s){let a=[],r=Math.max(4,t)/60;for(let o=0;o<n;o++){let l=(n-1-o)/n*i,c=(e/1e3-l)*r%1;c<0&&(c+=1),a.push(s(c))}return a}function AD(e,t){let n=0;return e>.08&&e<.16?n=Math.sin((e-.08)/.08*Math.PI)*.18:e>=.18&&e<.22?n=-((e-.18)/.04)*.25:e>=.22&&e<.26?n=-.25+(e-.22)/.04*1.45:e>=.26&&e<.3?n=1.2-(e-.26)/.04*1.55:e>=.3&&e<.36?n=-.35+(e-.3)/.06*.35:e>=.42&&e<.58&&(n=Math.sin((e-.42)/.16*Math.PI)*(t?.72:.32)),n}function wD(e,t){let n=(e+.12)%1;return(Math.exp(-(((n-.16)/.045)**2))+.5*Math.exp(-(((n-.3)/.09)**2)))*Math.max(.25,Math.min(1,(t-70)/30))}function RD(e){return e<.18?Math.sin(e/.18*Math.PI):Math.exp(-(e-.18)*3.1)}function CD(e){return e<.4?.5-.5*Math.cos(e/.4*Math.PI):.5+.5*Math.cos((e-.4)/.6*Math.PI)}function ND(e,t,n,i){let s=.33;t.imv&&n==="1:1"&&(s=.5),t.imv&&n==="1:3"&&(s=.25),t.imv||(s=Math.min(.55,Math.max(.2,(i||1)/(60/Math.max(6,t.rr)))));let a=e<s,r=a?e/Math.max(.05,s):(e-s)/Math.max(.05,1-s),o=r<.16?r/.16:1,l=a?o:Math.exp(-r*6),c=t.imv&&(t.mode==="VC-AC"||t.mode==="SIMV"),f=a?c?.8:Math.max(0,.85-r*.7):r<.48?-.65*Math.exp(-r*3.4):0,p=a?r:r<.62?Math.max(0,1-r/.62):0;return{pres:l,flow:f,vol:p}}function j1(e,t){let n=Math.max(35,t.hr||80),i=ul(t),s=t.k>=6.5&&(t.kKnown||t.id==="gopal");return[{arr:Rr(e,n,120,3.4,a=>AD(a,s)),color:"#8fd0a8",mid:.74},{arr:Rr(e,n,120,3.4,RD),color:"#e7a3a3",mid:.72},{arr:Rr(e,n,120,3.4,a=>wD(a,t.spo2)),color:"#7fd4e6",mid:.7},{arr:Rr(e,i,120,150/i,CD),color:"#f0d98a",mid:.72}]}function DD(e,t){let n=Gd(t),i=120/Math.max(6,n.rr),s=a=>ND(a,n,t.vent.ie,t.vent.ti);return[{arr:Rr(e,n.rr,100,i,a=>.18+.82*s(a).pres),color:"#e2b48a",mid:.86,amp:.46},{arr:Rr(e,n.rr,100,i,a=>s(a).flow),color:"#9ad7ff",mid:.52,amp:.28},{arr:Rr(e,n.rr,100,i,a=>s(a).vol),color:"#c9f0c0",mid:.86,amp:.42}]}function __(e,t,n,i,s,a,r){if(e.fillStyle=r,e.fillRect(t,n,i,s),i<8||s<8)return;let o=s/a.length;a.forEach((l,c)=>{let f=l.amp??.5,p=l.mid??.72,u=n+c*o;e.save(),e.beginPath(),e.rect(t,u+.5,i,Math.max(1,o-1)),e.clip(),e.beginPath(),e.strokeStyle=l.color,e.lineWidth=1.15;let d=l.arr,v=d.length;for(let M=0;M<v;M++){let g=v<2?t:t+M/(v-1)*i,h=u+o*p-d[M]*o*f;h<u+1&&(h=u+1),h>u+o-2&&(h=u+o-2),M===0?e.moveTo(g,h):e.lineTo(g,h)}e.stroke(),e.fillStyle=r,e.fillRect(t+i-4,u,4,o),e.restore()})}function $1(e,t,n){let i=e.getContext("2d");if(!i)return;let s=e.width,a=e.height;i.setTransform(1,0,0,1,0,0);let r=Q1(g_(n.sex,n.support));if(i.fillStyle="#101418",i.fillRect(0,0,s,a),!(r.complete&&r.naturalWidth))return;if(i.drawImage(r,0,0,s,a),!(typeof window<"u"&&window.matchMedia?.("(prefers-reduced-motion: reduce)").matches)){let l=t/1e3*(ul(n)/60)%1,f=-.015*(l<.42?Math.sin(l/.42*Math.PI):0)*a;i.save(),i.beginPath(),i.ellipse(.48*s,.59*a,.15*s,.06*a,0,0,Math.PI*2),i.clip(),i.drawImage(r,0,f,s,a),i.restore()}if(__(i,.078*s,.156*a,.16*s,.19*a,j1(t,n),"#04110c"),nu(n)){let l=DD(t,n),c=.817*s,f=.356*a,p=.084*s,u=.1*a;__(i,c,f,p,u,l,"#071018");let d=u/3;i.font=`700 ${Math.max(8,d*.42)}px Figtree, Arial, sans-serif`,i.textBaseline="top",i.textAlign="left",["P","F","V"].forEach((v,M)=>{i.fillStyle=l[M].color,i.fillText(v,c+2,f+M*d+1)})}}function LD(e,t,n,i,s,a){let r=t.naturalWidth/t.naturalHeight,o=s/a,l=0,c=0,f=t.naturalWidth,p=t.naturalHeight;r>o?(f=t.naturalHeight*o,l=(t.naturalWidth-f)/2):(p=t.naturalWidth/o,c=(t.naturalHeight-p)/2),e.drawImage(t,l,c,f,p,n,i,s,a)}function tT(e,t,n){let i=e.getContext("2d");if(!i)return;let s=e.width,a=e.height;i.setTransform(1,0,0,1,0,0),i.fillStyle="#061016",i.fillRect(0,0,s,a);let r=Math.round(s*.38),o=Q1(g_(n.sex,n.support));o.complete&&o.naturalWidth?LD(i,o,0,0,r,a):(i.fillStyle="#10161c",i.fillRect(0,0,r,a));let l=.5+.5*Math.sin(t/220);i.lineWidth=Math.max(4,s*.012),i.strokeStyle=n.settled?"#8fd0a8":n.called?`rgba(231,163,163,${.4+l*.6})`:"rgba(127,212,230,0.28)",i.strokeRect(i.lineWidth/2,i.lineWidth/2,s-i.lineWidth,a-i.lineWidth);let c=r+Math.round(s*.02),f=s-c-Math.round(s*.02);i.fillStyle="#f3efe6",i.font=`600 ${Math.max(14,Math.round(a*.07))}px Figtree, sans-serif`,i.textBaseline="alphabetic",i.fillText(`${n.bed}  ${n.name}`,c,Math.round(a*.1)),i.fillStyle=n.settled?"#8fd0a8":n.called?"#e7a3a3":"#e2b48a",i.font=`600 ${Math.max(11,Math.round(a*.048))}px Figtree, sans-serif`;let p=n.settled?"Settled":n.called?"Call":n.dx;i.fillText(p,c,Math.round(a*.175));let u=Math.round(f*.34),d=c,v=Math.round(a*.23),M=f-u,g=a-v-Math.round(a*.06);__(i,d,v,M,g,j1(t,n),"#04110c");let h=[["Pulse",String(Math.round(n.hr)),"#8fd0a8"],["BP",`${Math.round(n.sbp)}/${Math.round(n.dbp)}`,"#e7a3a3"],["SpO2",String(Math.round(n.spo2)),"#7fd4e6"],["RR",String(Math.round(ul(n))),"#f0d98a"]],m=g/4;h.forEach((y,x)=>{let E=v+x*m;i.fillStyle=y[2],i.font=`600 ${Math.max(10,Math.round(m*.28))}px Figtree, sans-serif`,i.fillText(y[0],d+M+8,E+m*.38),i.font=`700 ${Math.max(13,Math.round(m*.46))}px Figtree, sans-serif`,i.fillText(y[1],d+M+8,E+m*.82)})}var oT=vs(Cr(),1),iu=3.05,hl=3.05*(1500/1060),sT=14.6,ID=[{bed:1,x:.032,y:.06,w:.278,h:.19},{bed:2,x:.032,y:.262,w:.278,h:.174},{bed:3,x:.032,y:.45,w:.278,h:.176},{bed:4,x:.63,y:.118,w:.26,h:.174},{bed:5,x:.63,y:.3,w:.26,h:.156},{bed:6,x:.63,y:.468,w:.26,h:.162}];function v_(e,t,n){return Math.max(t,Math.min(n,e))}function PD(e,t){let n=e;for(;n-t>Math.PI;)n-=Math.PI*2;for(;t-n>Math.PI;)n+=Math.PI*2;return n}function aT(e){let t=e<=3,i=(t?e-2:5-e)*1.38,s=t?-3.2:3.2;return{x:i,z:s,rot:Math.atan2(-i,-s)}}function BD(e){return e>=4?Math.PI:0}function zD(e){let t=aT(e),n=Math.hypot(t.x,t.z)||1,i=1.15,s=t.x-t.x/n*i,a=t.z-t.z/n*i,r=Math.atan2(-(t.x-s),-(t.z-a));return{x:s,z:a,body:r}}function y_(e){let t=new Dc(e);return t.colorSpace=Rn,t.minFilter=hn,t.magFilter=hn,t}function Nr(e,t,n,i,s,a,r){let o=new Xe(new Ws(e,t,n),new fs({color:i,roughness:.86,metalness:.02}));return o.position.set(s,a,r),o}function rT({patients:e,place:t,lookBed:n,walkBed:i,onCommandBed:s,onWardBed:a}){let r=(0,gs.useRef)(null),o=(0,gs.useRef)(e),l=(0,gs.useRef)(t),c=(0,gs.useRef)(n),f=(0,gs.useRef)(i),p=(0,gs.useRef)(s),u=(0,gs.useRef)(a);return o.current=e,l.current=t,c.current=n,f.current=i,p.current=s,u.current=a,(0,gs.useEffect)(()=>{let d=r.current;if(!d)return;let v=d,M=new zd({antialias:!0,alpha:!1});M.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),M.setClearColor(461068,1),v.appendChild(M.domElement);let g=new Ac;g.background=new qt(461068),g.fog=new Ec(1053722,18,48);let h=new Fn(50,1,.08,80);g.add(new Bc(15922418,2765112,1.15));let m=new Hc(16774890,.55);m.position.set(.5,6,.2),g.add(m);let y=new Xe(new Zn(52,18),new fs({color:1711910,roughness:.94,metalness:.04}));y.rotation.x=-Math.PI/2,y.position.set(14,0,0),g.add(y);let x=new Xe(new Zn(9.2,8.4),new fs({color:3423044,roughness:.88,metalness:.02}));x.rotation.x=-Math.PI/2,x.position.set(0,.012,0),g.add(x);let E=new Xe(new Zn(.08,6.2),new fs({color:9077880,roughness:1}));E.rotation.x=-Math.PI/2,E.position.set(0,.02,0),g.add(E);let w=new Xe(new Zn(9.2,8.4),new fs({color:1843754,roughness:1,side:Ai}));w.rotation.x=Math.PI/2,w.position.set(0,3.05,0),g.add(w),g.add(Nr(.12,3.05,8.4,2238512,-4.6,1.52,0)),g.add(Nr(9.2,3.05,.12,2238512,0,1.52,-4.2)),g.add(Nr(9.2,3.05,.12,2238512,0,1.52,4.2)),g.add(Nr(.12,3.05,2.2,2765112,4.6,1.52,-3.1)),g.add(Nr(.12,3.05,2.2,2765112,4.6,1.52,3.1));for(let St=-1;St<=1;St++){let Et=new Xe(new Ws(6.4,.035,.12),new fs({color:15986662,emissive:15986662,emissiveIntensity:.55,roughness:.4}));Et.position.set(0,2.98,St*1.15),g.add(Et)}let _=new Xe(new Zn(hl,iu),new ks({color:1053720}));_.position.set(sT,iu/2+.02,0),_.rotation.y=-Math.PI/2,g.add(_);let O=new Ic().load(Vi("universe/command.jpg"));O.colorSpace=Rn,_.material.map=O,_.material.needsUpdate=!0;let R=ID.map(St=>{let Et=document.createElement("canvas");Et.width=720,Et.height=Math.max(280,Math.round(720*(St.h/St.w)));let Gt=y_(Et),L=new Xe(new Zn(St.w*hl,St.h*iu),new ks({map:Gt})),ye=St.x+St.w/2,kt=St.y+St.h/2;return L.position.set((ye-.5)*hl,(.5-kt)*iu,.03),L.userData.bed=St.bed,L.userData.kind="screen",_.add(L),{bed:St.bed,canvas:Et,texture:Gt,mesh:L}}),D=[];for(let St=1;St<=6;St++){let Et=aT(St),Gt=new os;Gt.position.set(Et.x,0,Et.z),Gt.rotation.y=Et.rot,g.add(Gt),Gt.add(Nr(1.36,.1,.55,2896700,0,.08,.2)),Gt.add(Nr(1.46,1.02,.04,1316894,0,1.28,-.06));let L=document.createElement("canvas");L.width=768,L.height=432;let ye=y_(L),kt=new Xe(new Zn(1.28,.72),new ks({map:ye}));kt.position.set(0,1.28,-.02),kt.userData.bed=St,kt.userData.kind="bed",Gt.add(kt);let ie=document.createElement("canvas");ie.width=512,ie.height=80;let lt=y_(ie),Se=new Xe(new Zn(1.2,.18),new ks({map:lt,transparent:!0}));Se.position.set(0,1.78,-.02),Se.userData.label=ie,Se.userData.bed=St,Se.userData.kind="bed",Gt.add(Se),D.push({bed:St,photo:L,photoTex:ye,hit:kt})}let I=new os;g.add(I),g.add(h),h.rotation.order="YXZ";let G=new Gc,N=new jt,k=0,X=-.08,F=0,nt=!1,W=0,$=0,et=0,pt={x:16,z:0,body:-Math.PI/2},It=window.matchMedia?.("(prefers-reduced-motion: reduce)").matches,Z=!1,at={x:0,y:0,w:1,h:1,letter:!1},yt="";function wt(){let St=Math.tan(h.fov*Math.PI/360),Et=St*Math.max(.42,h.aspect),Gt=iu/2/(St*.98),L=hl/2/(Et*.96);return Math.max(1.7,Math.min(L,Gt))}function mt(){let Et=Math.tan(h.fov*Math.PI/360)*Math.max(.42,h.aspect),Gt=wt()*Et;return Math.max(0,hl/2-Gt*.92)}function Bt(){if(l.current==="command"){let Et=mt();return{x:sT-wt(),z:v_(F,-Et,Et),body:-Math.PI/2}}if(f.current){let Et=zD(f.current);return{x:Et.x,z:Et.z,body:Et.body}}let St=c.current||2;return{x:0,z:0,body:BD(St)}}function Ue(){let St=v.clientWidth||1,Et=v.clientHeight||1,Gt=`${St}x${Et}`;if(Gt===yt)return;yt=Gt,M.setSize(St,Et,!1),M.setScissorTest(!1),M.setViewport(0,0,St,Et),at.x=0,at.y=0,at.w=St,at.h=Et,at.letter=!1,h.aspect=St/Math.max(1,Et);let L=78*Math.PI/180,ye=2*Math.atan(Math.tan(L/2)/Math.max(.42,h.aspect))*180/Math.PI;h.fov=Math.min(120,Math.max(46,ye)),h.updateProjectionMatrix()}Ue();let Dt=new ResizeObserver(()=>Ue());Dt.observe(v);function le(St,Et){let Gt=v.getBoundingClientRect(),L=(St-Gt.left)/Math.max(1,Gt.width)*(v.clientWidth||1),ye=(Et-Gt.top)/Math.max(1,Gt.height)*(v.clientHeight||1);N.x=(L-at.x)/at.w*2-1,N.y=-((ye-at.y)/at.h)*2+1}function fe(St){nt=!0,et=0,W=St.clientX,$=St.clientY,M.domElement.setPointerCapture?.(St.pointerId)}function Zt(St){if(!nt)return;let Et=St.clientX-W,Gt=St.clientY-$;if(W=St.clientX,$=St.clientY,et+=Math.abs(Et)+Math.abs(Gt),!(et<6)){if(l.current!=="ward"){F-=Et*.006;let L=mt();F=v_(F,-L,L);return}k-=Et*.008,X=v_(X+Gt*.004,-.85,.45)}}function We(St){let Et=et>10;if(nt=!1,Et||(le(St.clientX,St.clientY),N.x<-1.2||N.x>1.2||N.y<-1.2||N.y>1.2))return;G.setFromCamera(N,h);let L=G.intersectObjects(g.children,!0).find(ie=>ie.object?.userData?.bed),ye=L?.object?.userData?.bed,kt=L?.object?.userData?.kind;ye&&(l.current==="command"&&kt==="screen"?p.current(ye):l.current==="ward"&&kt==="bed"&&u.current(ye))}M.domElement.addEventListener("pointerdown",fe),M.domElement.addEventListener("pointermove",Zt),M.domElement.addEventListener("pointerup",We),M.domElement.addEventListener("pointercancel",()=>{nt=!1});let Be=0,fn=l.current,Ee=f.current,Qn=c.current,Ve=St=>{Ue(),(fn!==l.current||Ee!==f.current||Qn!==c.current)&&(fn=l.current,Ee=f.current,Qn=c.current,k=0,X=f.current?-.4:h.aspect<.85?-.5:-.08),!Z&&h.aspect<.95&&(F=(.17-.5)*hl);let Et=Bt();Z||(pt.x=Et.x,pt.z=Et.z,pt.body=Et.body,Z=!0);let Gt=Et.x-pt.x,L=Et.z-pt.z,ye=Math.hypot(Gt,L),kt=l.current==="ward",ie=It||kt&&!f.current?1:ye>1.2?.2:.16,lt=Et.body;!kt&&ye>.45&&(lt=Math.atan2(-Gt,-L)),pt.x+=(Et.x-pt.x)*ie,pt.z+=(Et.z-pt.z)*ie;let Se=PD(lt,pt.body);pt.body+=(Se-pt.body)*(kt&&!f.current?1:ie),I.position.set(pt.x,0,pt.z),I.rotation.y=pt.body,h.position.set(pt.x,1.62,pt.z),h.rotation.order="YXZ",h.rotation.y=pt.body+(kt?k:0),h.rotation.x=kt?X:0,h.rotation.z=0;let Rt=o.current;(l.current==="command"||Math.abs(pt.x)>8)&&R.forEach(Ct=>{let A=Rt.find(S=>S.bed===Ct.bed);A&&(tT(Ct.canvas,St,A),Ct.texture.needsUpdate=!0)}),D.forEach(Ct=>{let A=Rt.find(tt=>tt.bed===Ct.bed);if(!A)return;$1(Ct.photo,St,A),Ct.photoTex.needsUpdate=!0;let S=Ct.hit.parent.children.find(tt=>tt.userData?.label),P=S?.userData?.label;if(P){let tt=P.getContext("2d");tt&&(tt.clearRect(0,0,P.width,P.height),tt.fillStyle="rgba(7,9,12,0.78)",tt.fillRect(0,8,P.width,64),tt.fillStyle=A.settled?"#8fd0a8":A.called?"#e7a3a3":"#f3efe6",tt.font="600 36px Figtree, sans-serif",tt.textBaseline="middle",tt.fillText(`${A.bed}  ${A.name}`,16,40)),S.material.map&&(S.material.map.needsUpdate=!0)}}),M.render(g,h),Be=requestAnimationFrame(Ve)};return Be=requestAnimationFrame(Ve),()=>{cancelAnimationFrame(Be),Dt.disconnect(),M.domElement.removeEventListener("pointerdown",fe),M.domElement.removeEventListener("pointermove",Zt),M.domElement.removeEventListener("pointerup",We),M.dispose(),M.domElement.remove()}},[]),(0,oT.jsx)("div",{className:"u-world",ref:r})}var Ft=vs(Cr(),1),lT=!0,kd="";function FD(){if(!window.speechSynthesis)return null;let e=speechSynthesis.getVoices()||[],t=/female|samantha|karen|moira|victoria|allison|zira|susan|heera|sonia|libby|veena|siri|fiona|tessa|serena|nicky|catherine/i,n=[/rishi/i,/daniel/i,/google uk english male/i,/david/i,/alex/i,/\bmale\b/i],i=a=>`${a.name} ${a.voiceURI}`,s=e.filter(a=>/^en/i.test(a.lang||"")&&!t.test(i(a)));for(let a of n){let r=s.find(o=>a.test(i(o)));if(r)return r}return s[0]||null}function su(e){if(!lT||!e||!window.speechSynthesis)return;let t=e.replace(/\s+/g," ").trim();if(!t||t===kd)return;kd=t;let n=new SpeechSynthesisUtterance(t);n.rate=.96;let i=()=>{let s=FD();s?(n.voice=s,n.lang=s.lang||"en-GB"):n.lang="en-GB";try{speechSynthesis.resume(),speechSynthesis.speak(n)}catch{}};speechSynthesis.speaking||speechSynthesis.pending?(speechSynthesis.cancel(),window.setTimeout(i,80)):i()}function HD({patient:e}){if(!nu(e))return null;let t=Gd(e);return e.support==="imv"?(0,Ft.jsxs)("p",{className:"u-exam",children:["Ventilator ",t.mode,". Paw ",t.peep,"/",t.pip,". VT ",t.tv," mL. RR ",t.rr,". FiO2 ",t.fio2,"%."]}):(0,Ft.jsxs)("p",{className:"u-exam",children:["NIV ",t.mask,". IPAP ",t.ipap,". EPAP ",t.epap,". RR ",t.rr,". FiO2 ",t.fio2,"%."]})}function cT(){let[e,t]=(0,Ln.useState)(!1),[n,i]=(0,Ln.useState)(!1),[s,a]=(0,Ln.useState)(!0),[r,o]=(0,Ln.useState)(()=>q1()),[l,c]=(0,Ln.useState)("command"),[f,p]=(0,Ln.useState)(null),[u,d]=(0,Ln.useState)(null),[v,M]=(0,Ln.useState)(0),g=(0,Ln.useRef)(r),h=(0,Ln.useRef)(0);g.current=r,(0,Ln.useEffect)(()=>{lT=s,!s&&window.speechSynthesis&&speechSynthesis.cancel()},[s]),(0,Ln.useEffect)(()=>{let D=r.find(I=>I.id===u)||null;vr.hr=D?.hr??80,vr.ventOn=s&&!!D&&nu(D),vr.ventRr=D?ul(D):16},[r,u,s]),(0,Ln.useEffect)(()=>{if(!e)return;let D=window.setInterval(()=>{h.current+=1;let I=h.current;M(I);let G="",N=g.current.map(k=>{let X=J1(k,I);return X.speech&&!X.patient.announced?(X.patient.announced=!0,G||(G=X.speech)):X.speech&&X.speech!==eu(X.patient)&&!G&&(G=X.speech),X.patient});g.current=N,o(N),G&&su(G)},1e3);return()=>window.clearInterval(D)},[e]);let m=r.find(D=>D.id===u)||null,y=r.filter(D=>D.called&&!D.settled&&D.id!==u),x=r.filter(D=>D.settled).length,E=l==="ward"?m?.bed??null:null;function w(){Do(),window.speechSynthesis&&speechSynthesis.getVoices(),i(!0),kd="",su("Six patients are in the unit. The command wall is in front of you. Tap a screen to enter the ward."),window.setTimeout(()=>t(!0),900)}function _(){Do(),a(D=>!D)}function T(D){Do(),c("ward"),p(D),d(null),g.current.find(G=>G.bed===D)&&su("You are standing in the middle of the unit. Three beds are in front of you. Turn your head to see three behind you. Tap a bed and you walk to it.")}function O(D){Do();let I=g.current.find(G=>G.id===D);I&&(c("ward"),p(I.bed),d(D),su(I.called&&!I.settled?eu(I):`${I.name}. ${I.dx}.`))}function R(D){if(!m)return;Do();let I=Z1(m,D),G=r.map(N=>N.id===m.id?I.patient:N);g.current=G,o(G),kd="",su(I.speech)}return(0,Ft.jsxs)("div",{className:"u-root u-icu",children:[(0,Ft.jsx)(rT,{patients:r,place:l,lookBed:f,walkBed:E,onCommandBed:T,onWardBed:D=>{let I=g.current.find(G=>G.bed===D);I&&O(I.id)}}),e?(0,Ft.jsxs)("header",{className:"u-bar u-hud",children:[(0,Ft.jsx)("button",{type:"button",onClick:()=>{c("command"),d(null)},children:"Command"}),(0,Ft.jsx)("button",{type:"button",onClick:()=>{c("ward"),d(null)},children:"Middle"}),(0,Ft.jsx)("h1",{children:l==="command"?"Command":m?`Bed ${m.bed}`:"Ward"}),(0,Ft.jsxs)("span",{children:[Math.floor(v/60),":",String(v%60).padStart(2,"0")," \xB7 ",x,"/6"]}),(0,Ft.jsx)("button",{type:"button",onClick:_,"aria-pressed":s,children:s?"Sound":"Sound off"})]}):null,e&&l==="ward"&&!m?(0,Ft.jsx)("p",{className:"u-look",children:"Standing still. Drag to turn your head. Three beds ahead, three behind. Tap a bed to walk to it."}):null,e&&l==="command"?(0,Ft.jsx)("p",{className:"u-look",children:"Drag across the wall. Tap a monitor to walk into the unit."}):null,m&&l==="ward"?(0,Ft.jsxs)("div",{className:"u-bedsheet",children:[y[0]?(0,Ft.jsxs)("div",{className:"u-call",children:[(0,Ft.jsx)("p",{children:eu(y[0])}),(0,Ft.jsxs)("button",{type:"button",onClick:()=>O(y[0].id),children:["Go to bed ",y[0].bed]})]}):null,(0,Ft.jsxs)("div",{className:"u-vitals",children:[(0,Ft.jsxs)("span",{children:["Pulse ",(0,Ft.jsx)("b",{children:Math.round(m.hr)})]}),(0,Ft.jsxs)("span",{children:["BP"," ",(0,Ft.jsxs)("b",{children:[Math.round(m.sbp),"/",Math.round(m.dbp)]})]}),(0,Ft.jsxs)("span",{children:["SpO2 ",(0,Ft.jsx)("b",{children:Math.round(m.spo2)})]}),(0,Ft.jsxs)("span",{children:["RR ",(0,Ft.jsx)("b",{children:Math.round(ul(m))})]})]}),(0,Ft.jsxs)("p",{className:"u-dx",children:[m.age,"-year-old ",m.sex,". ",m.dx,".",m.settled?" Settled.":""]}),(0,Ft.jsx)("p",{children:m.story}),(0,Ft.jsx)("p",{className:"u-exam",children:m.exam}),(0,Ft.jsx)(HD,{patient:m}),m.id==="imran"&&m.kKnown?(0,Ft.jsxs)("p",{className:"u-exam",children:["Potassium ",m.k,". Glucose ",m.glucose,"."]}):null,m.id==="gopal"?(0,Ft.jsxs)("p",{className:"u-exam",children:["Potassium ",m.k,". ",m.dialysis?"Dialysis is running.":"No urine."]}):null,m.heard?(0,Ft.jsx)("p",{className:"u-heard",children:m.heard}):null,(0,Ft.jsx)("div",{className:"u-acts",children:Y1(m).map(D=>(0,Ft.jsx)("button",{type:"button",onClick:()=>R(D.id),children:D.label},D.id))})]}):null,x===6&&e?(0,Ft.jsx)("div",{className:"u-done u-done-float",children:(0,Ft.jsx)("h2",{children:"The unit is settled."})}):null,e?null:(0,Ft.jsxs)("div",{className:n?"u-gates open":"u-gates",children:[(0,Ft.jsx)("p",{children:"Critical Care Universe"}),(0,Ft.jsx)("h1",{children:"Six patients. One doctor."}),(0,Ft.jsxs)("button",{type:"button",className:"u-frame",onClick:w,"aria-label":"Open the doors",children:[(0,Ft.jsx)("span",{className:"u-leaf l"}),(0,Ft.jsx)("span",{className:"u-leaf r"})]}),(0,Ft.jsx)("button",{type:"button",onClick:w,children:"Enter the unit"})]})]})}var fT=vs(Cr(),1),uT=document.getElementById("app");uT&&(0,hT.createRoot)(uT).render((0,fT.jsx)(cT,{}));
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
