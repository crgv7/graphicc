(self.webpackChunkGwaphics=self.webpackChunkGwaphics||[]).push([[201],{228:(e,n,t)=>{"use strict";var r=function(){},o=t(6925),a={},i=t(9376);function u(e,n,t,u,c){for(var f in e)if(i(e,f)){var s;try{if("function"!=typeof e[f]){var p=Error((u||"React class")+": "+t+" type `"+f+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[f]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw p.name="Invariant Violation",p}s=e[f](n,f,u,t,null,o)}catch(e){s=e}if(!s||s instanceof Error||r((u||"React class")+": type specification of "+t+" `"+f+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof s+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),s instanceof Error&&!(s.message in a)){a[s.message]=!0;var l=c?c():"";r("Failed "+t+" type: "+s.message+(null!=l?l:""))}}}r=function(e){var n="Warning: "+e;"undefined"!=typeof console&&console.error(n);try{throw new Error(n)}catch(e){}},u.resetWarningCache=function(){a={}},e.exports=u},4574:(e,n,t)=>{"use strict";var r,o=t(4363),a=t(5228),i=t(6925),u=t(9376),c=t(228);function f(){return null}r=function(e){var n="Warning: "+e;"undefined"!=typeof console&&console.error(n);try{throw new Error(n)}catch(e){}},e.exports=function(e,n){var t="function"==typeof Symbol&&Symbol.iterator,s="<<anonymous>>",p={array:d("array"),bigint:d("bigint"),bool:d("boolean"),func:d("function"),number:d("number"),object:d("object"),string:d("string"),symbol:d("symbol"),any:y(f),arrayOf:function(e){return y((function(n,t,r,o,a){if("function"!=typeof e)return new l("Property `"+a+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var u=n[t];if(!Array.isArray(u))return new l("Invalid "+o+" `"+a+"` of type `"+b(u)+"` supplied to `"+r+"`, expected an array.");for(var c=0;c<u.length;c++){var f=e(u,c,r,o,a+"["+c+"]",i);if(f instanceof Error)return f}return null}))},element:y((function(n,t,r,o,a){var i=n[t];return e(i)?null:new l("Invalid "+o+" `"+a+"` of type `"+b(i)+"` supplied to `"+r+"`, expected a single ReactElement.")})),elementType:y((function(e,n,t,r,a){var i=e[n];return o.isValidElementType(i)?null:new l("Invalid "+r+" `"+a+"` of type `"+b(i)+"` supplied to `"+t+"`, expected a single ReactElement type.")})),instanceOf:function(e){return y((function(n,t,r,o,a){if(!(n[t]instanceof e)){var i=e.name||s;return new l("Invalid "+o+" `"+a+"` of type `"+((u=n[t]).constructor&&u.constructor.name?u.constructor.name:s)+"` supplied to `"+r+"`, expected instance of `"+i+"`.")}var u;return null}))},node:y((function(e,n,t,r,o){return h(e[n])?null:new l("Invalid "+r+" `"+o+"` supplied to `"+t+"`, expected a ReactNode.")})),objectOf:function(e){return y((function(n,t,r,o,a){if("function"!=typeof e)return new l("Property `"+a+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var c=n[t],f=b(c);if("object"!==f)return new l("Invalid "+o+" `"+a+"` of type `"+f+"` supplied to `"+r+"`, expected an object.");for(var s in c)if(u(c,s)){var p=e(c,s,r,o,a+"."+s,i);if(p instanceof Error)return p}return null}))},oneOf:function(e){return Array.isArray(e)?y((function(n,t,r,o,a){for(var i=n[t],u=0;u<e.length;u++)if(c=i,f=e[u],c===f?0!==c||1/c==1/f:c!=c&&f!=f)return null;var c,f,s=JSON.stringify(e,(function(e,n){return"symbol"===m(n)?String(n):n}));return new l("Invalid "+o+" `"+a+"` of value `"+String(i)+"` supplied to `"+r+"`, expected one of "+s+".")})):(r(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),f)},oneOfType:function(e){if(!Array.isArray(e))return r("Invalid argument supplied to oneOfType, expected an instance of array."),f;for(var n=0;n<e.length;n++){var t=e[n];if("function"!=typeof t)return r("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+g(t)+" at index "+n+"."),f}return y((function(n,t,r,o,a){for(var c=[],f=0;f<e.length;f++){var s=(0,e[f])(n,t,r,o,a,i);if(null==s)return null;s.data&&u(s.data,"expectedType")&&c.push(s.data.expectedType)}return new l("Invalid "+o+" `"+a+"` supplied to `"+r+"`"+(c.length>0?", expected one of type ["+c.join(", ")+"]":"")+".")}))},shape:function(e){return y((function(n,t,r,o,a){var u=n[t],c=b(u);if("object"!==c)return new l("Invalid "+o+" `"+a+"` of type `"+c+"` supplied to `"+r+"`, expected `object`.");for(var f in e){var s=e[f];if("function"!=typeof s)return v(r,o,a,f,m(s));var p=s(u,f,r,o,a+"."+f,i);if(p)return p}return null}))},exact:function(e){return y((function(n,t,r,o,c){var f=n[t],s=b(f);if("object"!==s)return new l("Invalid "+o+" `"+c+"` of type `"+s+"` supplied to `"+r+"`, expected `object`.");var p=a({},n[t],e);for(var y in p){var d=e[y];if(u(e,y)&&"function"!=typeof d)return v(r,o,c,y,m(d));if(!d)return new l("Invalid "+o+" `"+c+"` key `"+y+"` supplied to `"+r+"`.\nBad object: "+JSON.stringify(n[t],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var h=d(f,y,r,o,c+"."+y,i);if(h)return h}return null}))}};function l(e,n){this.message=e,this.data=n&&"object"==typeof n?n:{},this.stack=""}function y(e){var t={},o=0;function a(a,u,c,f,p,y,d){if(f=f||s,y=y||c,d!==i){if(n){var v=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw v.name="Invariant Violation",v}if("undefined"!=typeof console){var h=f+":"+c;!t[h]&&o<3&&(r("You are manually calling a React.PropTypes validation function for the `"+y+"` prop on `"+f+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),t[h]=!0,o++)}}return null==u[c]?a?null===u[c]?new l("The "+p+" `"+y+"` is marked as required in `"+f+"`, but its value is `null`."):new l("The "+p+" `"+y+"` is marked as required in `"+f+"`, but its value is `undefined`."):null:e(u,c,f,p,y)}var u=a.bind(null,!1);return u.isRequired=a.bind(null,!0),u}function d(e){return y((function(n,t,r,o,a,i){var u=n[t];return b(u)!==e?new l("Invalid "+o+" `"+a+"` of type `"+m(u)+"` supplied to `"+r+"`, expected `"+e+"`.",{expectedType:e}):null}))}function v(e,n,t,r,o){return new l((e||"React class")+": "+n+" type `"+t+"."+r+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+o+"`.")}function h(n){switch(typeof n){case"number":case"string":case"undefined":return!0;case"boolean":return!n;case"object":if(Array.isArray(n))return n.every(h);if(null===n||e(n))return!0;var r=function(e){var n=e&&(t&&e[t]||e["@@iterator"]);if("function"==typeof n)return n}(n);if(!r)return!1;var o,a=r.call(n);if(r!==n.entries){for(;!(o=a.next()).done;)if(!h(o.value))return!1}else for(;!(o=a.next()).done;){var i=o.value;if(i&&!h(i[1]))return!1}return!0;default:return!1}}function b(e){var n=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,n){return"symbol"===e||!!n&&("Symbol"===n["@@toStringTag"]||"function"==typeof Symbol&&n instanceof Symbol)}(n,e)?"symbol":n}function m(e){if(null==e)return""+e;var n=b(e);if("object"===n){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return n}function g(e){var n=m(e);switch(n){case"array":case"object":return"an "+n;case"boolean":case"date":case"regexp":return"a "+n;default:return n}}return l.prototype=Error.prototype,p.checkPropTypes=c,p.resetWarningCache=c.resetWarningCache,p.PropTypes=p,p}},5556:(e,n,t)=>{var r=t(4363);e.exports=t(4574)(r.isElement,!0)},6925:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},9376:e=>{e.exports=Function.call.bind(Object.prototype.hasOwnProperty)}}]);
//# sourceMappingURL=vendor.prop-types.88c709153957c4699af3.js.map