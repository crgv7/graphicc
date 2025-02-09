"use strict";(self.webpackChunkGwaphics=self.webpackChunkGwaphics||[]).push([[70],{4837:(e,t,r)=>{!function(){var e=r(5228),n=r(228),o="function"==typeof Symbol&&Symbol.for,a=o?Symbol.for("react.element"):60103,u=o?Symbol.for("react.portal"):60106,i=o?Symbol.for("react.fragment"):60107,c=o?Symbol.for("react.strict_mode"):60108,s=o?Symbol.for("react.profiler"):60114,l=o?Symbol.for("react.provider"):60109,f=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.concurrent_mode"):60111,d=o?Symbol.for("react.forward_ref"):60112,y=o?Symbol.for("react.suspense"):60113,m=o?Symbol.for("react.suspense_list"):60120,v=o?Symbol.for("react.memo"):60115,h=o?Symbol.for("react.lazy"):60116,b=o?Symbol.for("react.block"):60121,g=o?Symbol.for("react.fundamental"):60117,_=o?Symbol.for("react.responder"):60118,w=o?Symbol.for("react.scope"):60119,C="function"==typeof Symbol&&Symbol.iterator;function k(e){if(null===e||"object"!=typeof e)return null;var t=C&&e[C]||e["@@iterator"];return"function"==typeof t?t:null}var R={current:null},S={current:null},P=/^(.*)[\\\/]/;function j(e){if(null==e)return null;if("number"==typeof e.tag&&D("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."),"function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case i:return"Fragment";case u:return"Portal";case s:return"Profiler";case c:return"StrictMode";case y:return"Suspense";case m:return"SuspenseList"}if("object"==typeof e)switch(e.$$typeof){case f:return"Context.Consumer";case l:return"Context.Provider";case d:return n=e,a="ForwardRef",p=(o=e.render).displayName||o.name||"",n.displayName||(""!==p?a+"("+p+")":a);case v:return j(e.type);case b:return j(e.render);case h:var t=1===(r=e)._status?r._result:null;if(t)return j(t)}var r,n,o,a,p;return null}var x={},$=null;function O(e){$=e}x.getCurrentStack=null,x.getStackAddendum=function(){var e="";if($){var t=j($.type),r=$._owner;e+=function(e,t,r){var n="";if(t){var o=t.fileName,a=o.replace(P,"");if(/^index\./.test(a)){var u=o.match(P);if(u){var i=u[1];i&&(a=i.replace(P,"")+"/"+a)}}n=" (at "+a+":"+t.lineNumber+")"}else r&&(n=" (created by "+r+")");return"\n    in "+(e||"Unknown")+n}(t,$._source,r&&j(r.type))}var n=x.getCurrentStack;return n&&(e+=n()||""),e};var E={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:S,IsSomeRendererActing:{current:!1},assign:e};function A(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];T("warn",e,r)}function D(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];T("error",e,r)}function T(e,t,r){if(!(r.length>0&&"string"==typeof r[r.length-1]&&0===r[r.length-1].indexOf("\n    in"))){var n=E.ReactDebugCurrentFrame.getStackAddendum();""!==n&&(t+="%s",r=r.concat([n]))}var o=r.map((function(e){return""+e}));o.unshift("Warning: "+t),Function.prototype.apply.call(console[e],console,o);try{var a=0,u="Warning: "+t.replace(/%s/g,(function(){return r[a++]}));throw new Error(u)}catch(e){}}e(E,{ReactDebugCurrentFrame:x,ReactComponentTreeHook:{}});var I={};function F(e,t){var r=e.constructor,n=r&&(r.displayName||r.name)||"ReactClass",o=n+"."+t;I[o]||(D("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",t,n),I[o]=!0)}var N={isMounted:function(e){return!1},enqueueForceUpdate:function(e,t,r){F(e,"forceUpdate")},enqueueReplaceState:function(e,t,r,n){F(e,"replaceState")},enqueueSetState:function(e,t,r,n){F(e,"setState")}},U={};function z(e,t,r){this.props=e,this.context=t,this.refs=U,this.updater=r||N}Object.freeze(U),z.prototype.isReactComponent={},z.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},z.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};var V={isMounted:["isMounted","Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],replaceState:["replaceState","Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]},M=function(e,t){Object.defineProperty(z.prototype,e,{get:function(){A("%s(...) is deprecated in plain JavaScript React classes. %s",t[0],t[1])}})};for(var q in V)V.hasOwnProperty(q)&&M(q,V[q]);function W(){}function L(e,t,r){this.props=e,this.context=t,this.refs=U,this.updater=r||N}W.prototype=z.prototype;var H=L.prototype=new W;H.constructor=L,e(H,z.prototype),H.isPureReactComponent=!0;var Y,B,J,G=Object.prototype.hasOwnProperty,X={key:!0,ref:!0,__self:!0,__source:!0};function K(e){if(G.call(e,"ref")){var t=Object.getOwnPropertyDescriptor(e,"ref").get;if(t&&t.isReactWarning)return!1}return void 0!==e.ref}function Q(e){if(G.call(e,"key")){var t=Object.getOwnPropertyDescriptor(e,"key").get;if(t&&t.isReactWarning)return!1}return void 0!==e.key}J={};var Z=function(e,t,r,n,o,u,i){var c={$$typeof:a,type:e,key:t,ref:r,props:i,_owner:u,_store:{}};return Object.defineProperty(c._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(c,"_self",{configurable:!1,enumerable:!1,writable:!1,value:n}),Object.defineProperty(c,"_source",{configurable:!1,enumerable:!1,writable:!1,value:o}),Object.freeze&&(Object.freeze(c.props),Object.freeze(c)),c};function ee(e,t,r){var n,o={},a=null,u=null,i=null,c=null;if(null!=t)for(n in K(t)&&(u=t.ref,function(e){if("string"==typeof e.ref&&S.current&&e.__self&&S.current.stateNode!==e.__self){var t=j(S.current.type);J[t]||(D('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://fb.me/react-strict-mode-string-ref',j(S.current.type),e.ref),J[t]=!0)}}(t)),Q(t)&&(a=""+t.key),i=void 0===t.__self?null:t.__self,c=void 0===t.__source?null:t.__source,t)G.call(t,n)&&!X.hasOwnProperty(n)&&(o[n]=t[n]);var s=arguments.length-2;if(1===s)o.children=r;else if(s>1){for(var l=Array(s),f=0;f<s;f++)l[f]=arguments[f+2];Object.freeze&&Object.freeze(l),o.children=l}if(e&&e.defaultProps){var p=e.defaultProps;for(n in p)void 0===o[n]&&(o[n]=p[n])}if(a||u){var d="function"==typeof e?e.displayName||e.name||"Unknown":e;a&&function(e,t){var r=function(){Y||(Y=!0,D("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://fb.me/react-special-props)",t))};r.isReactWarning=!0,Object.defineProperty(e,"key",{get:r,configurable:!0})}(o,d),u&&function(e,t){var r=function(){B||(B=!0,D("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://fb.me/react-special-props)",t))};r.isReactWarning=!0,Object.defineProperty(e,"ref",{get:r,configurable:!0})}(o,d)}return Z(e,a,u,i,c,S.current,o)}function te(t,r,n){if(null==t)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var o,a,u=e({},t.props),i=t.key,c=t.ref,s=t._self,l=t._source,f=t._owner;if(null!=r)for(o in K(r)&&(c=r.ref,f=S.current),Q(r)&&(i=""+r.key),t.type&&t.type.defaultProps&&(a=t.type.defaultProps),r)G.call(r,o)&&!X.hasOwnProperty(o)&&(void 0===r[o]&&void 0!==a?u[o]=a[o]:u[o]=r[o]);var p=arguments.length-2;if(1===p)u.children=n;else if(p>1){for(var d=Array(p),y=0;y<p;y++)d[y]=arguments[y+2];u.children=d}return Z(t.type,i,c,s,l,f,u)}function re(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var ne=!1,oe=/\/+/g;function ae(e){return(""+e).replace(oe,"$&/")}var ue,ie=[];function ce(e,t,r,n){if(ie.length){var o=ie.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function se(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,ie.length<10&&ie.push(e)}function le(e,t,r,n){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var i,c=!1;if(null===e)c=!0;else switch(o){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case a:case u:c=!0}}if(c)return r(n,e,""===t?"."+pe(e,0):t),1;var s=0,l=""===t?".":t+":";if(Array.isArray(e))for(var f=0;f<e.length;f++)s+=le(i=e[f],l+pe(i,f),r,n);else{var p=k(e);if("function"==typeof p){p===e.entries&&(ne||A("Using Maps as children is deprecated and will be removed in a future major release. Consider converting children to an array of keyed ReactElements instead."),ne=!0);for(var d,y=p.call(e),m=0;!(d=y.next()).done;)s+=le(i=d.value,l+pe(i,m++),r,n)}else if("object"===o){var v;v=" If you meant to render a collection of children, use an array instead."+x.getStackAddendum();var h=""+e;throw Error("Objects are not valid as a React child (found: "+("[object Object]"===h?"object with keys {"+Object.keys(e).join(", ")+"}":h)+")."+v)}}return s}function fe(e,t,r){return null==e?0:le(e,"",t,r)}function pe(e,t){return"object"==typeof e&&null!==e&&null!=e.key?(r=e.key,n={"=":"=0",":":"=2"},"$"+(""+r).replace(/[=:]/g,(function(e){return n[e]}))):t.toString(36);var r,n}function de(e,t,r){var n=e.func,o=e.context;n.call(o,t,e.count++)}function ye(e,t,r){var n,o,a=e.result,u=e.keyPrefix,i=e.func,c=e.context,s=i.call(c,t,e.count++);Array.isArray(s)?me(s,a,r,(function(e){return e})):null!=s&&(re(s)&&(n=s,o=u+(!s.key||t&&t.key===s.key?"":ae(s.key)+"/")+r,s=Z(n.type,o,n.ref,n._self,n._source,n._owner,n.props)),a.push(s))}function me(e,t,r,n,o){var a="";null!=r&&(a=ae(r)+"/");var u=ce(t,a,n,o);fe(e,ye,u),se(u)}function ve(e){return"string"==typeof e||"function"==typeof e||e===i||e===p||e===s||e===c||e===y||e===m||"object"==typeof e&&null!==e&&(e.$$typeof===h||e.$$typeof===v||e.$$typeof===l||e.$$typeof===f||e.$$typeof===d||e.$$typeof===g||e.$$typeof===_||e.$$typeof===w||e.$$typeof===b)}function he(){var e=R.current;if(null===e)throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://fb.me/react-invalid-hook-call for tips about how to debug and fix this problem.");return e}function be(){if(S.current){var e=j(S.current.type);if(e)return"\n\nCheck the render method of `"+e+"`."}return""}ue=!1;var ge={};function _e(e,t){if(e._store&&!e._store.validated&&null==e.key){e._store.validated=!0;var r=function(e){var t=be();if(!t){var r="string"==typeof e?e:e.displayName||e.name;r&&(t="\n\nCheck the top-level render call using <"+r+">.")}return t}(t);if(!ge[r]){ge[r]=!0;var n="";e&&e._owner&&e._owner!==S.current&&(n=" It was passed a child from "+j(e._owner.type)+"."),O(e),D('Each child in a list should have a unique "key" prop.%s%s See https://fb.me/react-warning-keys for more information.',r,n),O(null)}}}function we(e,t){if("object"==typeof e)if(Array.isArray(e))for(var r=0;r<e.length;r++){var n=e[r];re(n)&&_e(n,t)}else if(re(e))e._store&&(e._store.validated=!0);else if(e){var o=k(e);if("function"==typeof o&&o!==e.entries)for(var a,u=o.call(e);!(a=u.next()).done;)re(a.value)&&_e(a.value,t)}}function Ce(e){var t=e.type;if(null!=t&&"string"!=typeof t){var r,o=j(t);if("function"==typeof t)r=t.propTypes;else{if("object"!=typeof t||t.$$typeof!==d&&t.$$typeof!==v)return;r=t.propTypes}r?(O(e),n(r,e.props,"prop",o,x.getStackAddendum),O(null)):void 0===t.PropTypes||ue||(ue=!0,D("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",o||"Unknown")),"function"!=typeof t.getDefaultProps||t.getDefaultProps.isReactClassApproved||D("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function ke(e,t,r){var n,o,u=ve(e);if(!u){var c,s="";(void 0===e||"object"==typeof e&&null!==e&&0===Object.keys(e).length)&&(s+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."),s+=(null!=(n=t)&&void 0!==(o=n.__source)?"\n\nCheck your code at "+o.fileName.replace(/^.*[\\\/]/,"")+":"+o.lineNumber+".":"")||be(),null===e?c="null":Array.isArray(e)?c="array":void 0!==e&&e.$$typeof===a?(c="<"+(j(e.type)||"Unknown")+" />",s=" Did you accidentally export a JSX literal instead of a component?"):c=typeof e,D("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",c,s)}var l=ee.apply(this,arguments);if(null==l)return l;if(u)for(var f=2;f<arguments.length;f++)we(arguments[f],e);return e===i?function(e){O(e);for(var t=Object.keys(e.props),r=0;r<t.length;r++){var n=t[r];if("children"!==n&&"key"!==n){D("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",n);break}}null!==e.ref&&D("Invalid attribute `ref` supplied to `React.Fragment`."),O(null)}(l):Ce(l),l}var Re=!1;try{var Se=Object.freeze({}),Pe=new Map([[Se,null]]),je=new Set([Se]);Pe.set(0,0),je.add(0)}catch(e){}var xe=ke,$e={map:function(e,t,r){if(null==e)return e;var n=[];return me(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;var n=ce(null,null,t,r);fe(e,de,n),se(n)},count:function(e){return fe(e,(function(){return null}),null)},toArray:function(e){var t=[];return me(e,t,null,(function(e){return e})),t},only:function(e){if(!re(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};t.Children=$e,t.Component=z,t.Fragment=i,t.Profiler=s,t.PureComponent=L,t.StrictMode=c,t.Suspense=y,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=E,t.cloneElement=function(e,t,r){for(var n=te.apply(this,arguments),o=2;o<arguments.length;o++)we(arguments[o],n.type);return Ce(n),n},t.createContext=function(e,t){void 0===t?t=null:null!==t&&"function"!=typeof t&&D("createContext: Expected the optional second argument to be a function. Instead received: %s",t);var r={$$typeof:f,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null};r.Provider={$$typeof:l,_context:r};var n=!1,o=!1,a={$$typeof:f,_context:r,_calculateChangedBits:r._calculateChangedBits};return Object.defineProperties(a,{Provider:{get:function(){return o||(o=!0,D("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")),r.Provider},set:function(e){r.Provider=e}},_currentValue:{get:function(){return r._currentValue},set:function(e){r._currentValue=e}},_currentValue2:{get:function(){return r._currentValue2},set:function(e){r._currentValue2=e}},_threadCount:{get:function(){return r._threadCount},set:function(e){r._threadCount=e}},Consumer:{get:function(){return n||(n=!0,D("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")),r.Consumer}}}),r.Consumer=a,r._currentRenderer=null,r._currentRenderer2=null,r},t.createElement=xe,t.createFactory=function(e){var t=ke.bind(null,e);return t.type=e,Re||(Re=!0,A("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")),Object.defineProperty(t,"type",{enumerable:!1,get:function(){return A("Factory.type is deprecated. Access the class directly before passing it to createFactory."),Object.defineProperty(this,"type",{value:e}),e}}),t},t.createRef=function(){var e={current:null};return Object.seal(e),e},t.forwardRef=function(e){return null!=e&&e.$$typeof===v?D("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."):"function"!=typeof e?D("forwardRef requires a render function but was given %s.",null===e?"null":typeof e):0!==e.length&&2!==e.length&&D("forwardRef render functions accept exactly two parameters: props and ref. %s",1===e.length?"Did you forget to use the ref parameter?":"Any additional parameter will be undefined."),null!=e&&(null==e.defaultProps&&null==e.propTypes||D("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?")),{$$typeof:d,render:e}},t.isValidElement=re,t.lazy=function(e){var t,r,n={$$typeof:h,_ctor:e,_status:-1,_result:null};return Object.defineProperties(n,{defaultProps:{configurable:!0,get:function(){return t},set:function(e){D("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."),t=e,Object.defineProperty(n,"defaultProps",{enumerable:!0})}},propTypes:{configurable:!0,get:function(){return r},set:function(e){D("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."),r=e,Object.defineProperty(n,"propTypes",{enumerable:!0})}}}),n},t.memo=function(e,t){return ve(e)||D("memo: The first argument must be a component. Instead received: %s",null===e?"null":typeof e),{$$typeof:v,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return he().useCallback(e,t)},t.useContext=function(e,t){var r=he();if(void 0!==t&&D("useContext() second argument is reserved for future use in React. Passing it is not supported. You passed: %s.%s",t,"number"==typeof t&&Array.isArray(arguments[2])?"\n\nDid you call array.map(useContext)? Calling Hooks inside a loop is not supported. Learn more at https://fb.me/rules-of-hooks":""),void 0!==e._context){var n=e._context;n.Consumer===e?D("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?"):n.Provider===e&&D("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?")}return r.useContext(e,t)},t.useDebugValue=function(e,t){return he().useDebugValue(e,t)},t.useEffect=function(e,t){return he().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return he().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return he().useLayoutEffect(e,t)},t.useMemo=function(e,t){return he().useMemo(e,t)},t.useReducer=function(e,t,r){return he().useReducer(e,t,r)},t.useRef=function(e){return he().useRef(e)},t.useState=function(e){return he().useState(e)},t.version="16.14.0"}()},6540:(e,t,r)=>{e.exports=r(4837)}}]);
//# sourceMappingURL=vendor.react.a37865174fb091068839.js.map