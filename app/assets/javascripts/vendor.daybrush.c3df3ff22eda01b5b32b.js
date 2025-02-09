/*! For license information please see vendor.daybrush.c3df3ff22eda01b5b32b.js.LICENSE.txt */
"use strict";(self.webpackChunkGwaphics=self.webpackChunkGwaphics||[]).push([[435],{3646:(t,n,i)=>{i.d(n,{A:()=>v});var s=i(7728),e=function(){return e=Object.assign||function(t){for(var n,i=1,s=arguments.length;i<s;i++)for(var e in n=arguments[i])Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e]);return t},e.apply(this,arguments)};function r(t,n,i,s){var e=f(t),r=f(n),a=f(s);return c(p(s[0],g(e,a)),p(s[0],g(r,a)),i[0])}function a(t){return t.touches?u(t.touches):[l(t)]}function c(t,n,i){var s=t.clientX,e=t.clientY;return{clientX:s,clientY:e,deltaX:s-n.clientX,deltaY:e-n.clientY,distX:s-i.clientX,distY:e-i.clientY}}function o(t){return Math.sqrt(Math.pow(t[0].clientX-t[1].clientX,2)+Math.pow(t[0].clientY-t[1].clientY,2))}function h(t,n,i){return t.map((function(t,s){return c(t,n[s],i[s])}))}function u(t){for(var n=Math.min(t.length,2),i=[],s=0;s<n;++s)i.push(l(t[s]));return i}function l(t){return{clientX:t.clientX,clientY:t.clientY}}function f(t){return 1===t.length?t[0]:{clientX:(t[0].clientX+t[1].clientX)/2,clientY:(t[0].clientY+t[1].clientY)/2}}function p(t,n){return{clientX:t.clientX+n.clientX,clientY:t.clientY+n.clientY}}function g(t,n){return{clientX:t.clientX-n.clientX,clientY:t.clientY-n.clientY}}const v=function(){function t(t,n){var i=this;void 0===n&&(n={}),this.options={},this.flag=!1,this.pinchFlag=!1,this.datas={},this.isDrag=!1,this.isPinch=!1,this.isMouse=!1,this.isTouch=!1,this.prevClients=[],this.startClients=[],this.movement=0,this.startPinchClients=[],this.startDistance=0,this.customDist=[0,0],this.targets=[],this.prevTime=0,this.isDouble=!1,this.onDragStart=function(t){if(i.flag||!1!==t.cancelable){var n=i.options,r=n.container,o=n.pinchOutside,h=n.dragstart,u=n.preventRightClick,l=n.preventDefault,f=i.isTouch;if(!i.flag&&f&&o&&setTimeout((function(){(0,s.W2)(r,"touchstart",i.onDragStart)})),i.flag&&f&&o&&(0,s.Nn)(r,"touchstart",i.onDragStart),function(t){return t.touches&&t.touches.length>=2}(t)){if(!i.flag&&t.touches.length!==t.changedTouches.length)return;i.pinchFlag||i.onPinchStart(t)}if(!i.flag){var p=i.startClients[0]?i.startClients:a(t);i.customDist=[0,0],i.flag=!0,i.isDrag=!1,i.startClients=p,i.prevClients=p,i.datas={},i.movement=0;var g=c(p[0],i.prevClients[0],i.startClients[0]);(u&&(3===t.which||2===t.button)||!1===(h&&h(e({type:"dragstart",datas:i.datas,inputEvent:t},g))))&&(i.startClients=[],i.prevClients=[],i.flag=!1),i.isDouble=(0,s.tB)()-i.prevTime<200,i.flag&&l&&t.preventDefault()}}},this.onDrag=function(t,n){if(i.flag){var s=a(t);i.pinchFlag&&i.onPinch(t,s);var r=i.move([0,0],t,s);if(r&&(r.deltaX||r.deltaY)){var c=i.options.drag;c&&c(e({},r,{isScroll:!!n,inputEvent:t}))}}},this.onDragEnd=function(t){if(i.flag){var n=i.options,a=n.dragend,o=n.pinchOutside,h=n.container;i.isTouch&&o&&(0,s.Nn)(h,"touchstart",i.onDragStart),i.pinchFlag&&i.onPinchEnd(t),i.flag=!1;var u=i.prevClients,l=i.startClients,f=i.pinchFlag?r(u,u,l,i.startPinchClients):c(u[0],u[0],l[0]),p=(0,s.tB)(),g=!i.isDrag&&i.isDouble;i.prevTime=i.isDrag||g?0:p,i.startClients=[],i.prevClients=[],a&&a(e({type:"dragend",datas:i.datas,isDouble:g,isDrag:i.isDrag,inputEvent:t},f))}};var o=[].concat(t);this.options=e({container:o.length>1?window:o[0],preventRightClick:!0,preventDefault:!0,pinchThreshold:0,events:["touch","mouse"]},n);var h=this.options,u=h.container,l=h.events;if(this.isTouch=l.indexOf("touch")>-1,this.isMouse=l.indexOf("mouse")>-1,this.customDist=[0,0],this.targets=o,this.isMouse&&(o.forEach((function(t){(0,s.W2)(t,"mousedown",i.onDragStart)})),(0,s.W2)(u,"mousemove",this.onDrag),(0,s.W2)(u,"mouseup",this.onDragEnd),(0,s.W2)(u,"contextmenu",this.onDragEnd)),this.isTouch){var f={passive:!1};o.forEach((function(t){(0,s.W2)(t,"touchstart",i.onDragStart,f)})),(0,s.W2)(u,"touchmove",this.onDrag,f),(0,s.W2)(u,"touchend",this.onDragEnd,f),(0,s.W2)(u,"touchcancel",this.onDragEnd,f)}}var n=t.prototype;return n.isDragging=function(){return this.isDrag},n.isFlag=function(){return this.flag},n.isPinchFlag=function(){return this.pinchFlag},n.isPinching=function(){return this.isPinch},n.scrollBy=function(t,n,i,s){void 0===s&&(s=!0),this.flag&&(this.startClients.forEach((function(i){i.clientX-=t,i.clientY-=n})),this.prevClients.forEach((function(i){i.clientX-=t,i.clientY-=n})),s&&this.onDrag(i,!0))},n.move=function(t,n,i){var s=t[0],a=t[1];void 0===i&&(i=this.prevClients);var o=this.customDist,h=this.prevClients,u=this.startClients,l=this.pinchFlag?r(i,h,u,this.startPinchClients):c(i[0],h[0],u[0]);o[0]+=s,o[1]+=a,l.deltaX+=s,l.deltaY+=a;var f=l.deltaX,p=l.deltaY;return l.distX+=o[0],l.distY+=o[1],this.movement+=Math.sqrt(f*f+p*p),this.prevClients=i,this.isDrag=!0,e({type:"drag",datas:this.datas},l,{movement:this.movement,isDrag:this.isDrag,isPinch:this.isPinch,isScroll:!1,inputEvent:n})},n.onPinchStart=function(t){var n,i,s=this.options,r=s.pinchstart,a=s.pinchThreshold;if(!(this.isDrag&&this.movement>a)){var l=u(t.changedTouches);if(this.pinchFlag=!0,(n=this.startClients).push.apply(n,l),(i=this.prevClients).push.apply(i,l),this.startDistance=o(this.prevClients),this.startPinchClients=this.prevClients.slice(),r){var p=this.prevClients,g=f(p),v=c(g,g,g);r(e({type:"pinchstart",datas:this.datas,touches:h(p,p,p)},v,{inputEvent:t}))}}},n.onPinch=function(t,n){if(this.flag&&this.pinchFlag&&!(n.length<2)){this.isPinch=!0;var i=this.options.pinch;if(i){var s=this.prevClients,r=this.startClients,a=c(f(n),f(s),f(r)),u=o(n);i(e({type:"pinch",datas:this.datas,movement:this.movement,touches:h(n,s,r),scale:u/this.startDistance,distance:u},a,{inputEvent:t}))}}},n.onPinchEnd=function(t){if(this.flag&&this.pinchFlag){var n=this.isPinch;this.isPinch=!1,this.pinchFlag=!1;var i=this.options.pinchend;if(i){var s=this.prevClients,r=this.startClients,a=c(f(s),f(s),f(r));i(e({type:"pinchend",datas:this.datas,isPinch:n,touches:h(s,s,r)},a,{inputEvent:t})),this.isPinch=!1,this.pinchFlag=!1}}},n.unset=function(){var t=this,n=this.targets,i=this.options.container;this.isMouse&&(n.forEach((function(n){(0,s.Nn)(n,"mousedown",t.onDragStart)})),(0,s.Nn)(i,"mousemove",this.onDrag),(0,s.Nn)(i,"mouseup",this.onDragEnd),(0,s.Nn)(i,"contextmenu",this.onDragEnd)),this.isTouch&&(n.forEach((function(n){(0,s.Nn)(n,"touchstart",t.onDragStart)})),(0,s.Nn)(i,"touchstart",this.onDragStart),(0,s.Nn)(i,"touchmove",this.onDrag),(0,s.Nn)(i,"touchend",this.onDragEnd),(0,s.Nn)(i,"touchcancel",this.onDragEnd))},t}()},7728:(t,n,i)=>{i.d(n,{Gv:()=>u,I6:()=>E,Kg:()=>f,Nn:()=>w,Om:()=>o,SL:()=>C,Tn:()=>p,W2:()=>P,b0:()=>h,cM:()=>v,cy:()=>l,ft:()=>d,hg:()=>m,iQ:()=>Y,nB:()=>X,tB:()=>D,vy:()=>y});var s="function",e="object",r="string",a="undefined",c=(typeof document!==a&&document,['"',"'",'\\"',"\\'"]);function o(t,n,i,s){return(t*s+n*i)/(i+s)}function h(t){return typeof t===a}function u(t){return t&&typeof t===e}function l(t){return Array.isArray(t)}function f(t){return typeof t===r}function p(t){return typeof t===s}function g(t,n,i,s){for(var e=i;e<s;++e){var r=n[e].trim();if(r===t)return e;var a=e;if("("===r?a=g(")",n,e+1,s):c.indexOf(r)>-1&&(a=g(r,n,e+1,s)),-1===a)break;e=a}return-1}function v(t){return function(t,n){for(var i=new RegExp("(\\s*"+(n||",")+"\\s*|\\(|\\)|\"|'|\\\\\"|\\\\'|\\s+)","g"),s=t.split(i).filter(Boolean),e=s.length,r=[],a=[],o=0;o<e;++o){var h=s[o].trim(),u=o;if("("===h)u=g(")",s,o+1,e);else{if(")"===h)throw new Error("invalid format");if(c.indexOf(h)>-1)u=g(h,s,o+1,e);else if(h===n){a.length&&(r.push(a.join("")),a=[]);continue}}-1===u&&(u=e-1),a.push(s.slice(o,u+1).join("")),o=u}return a.length&&r.push(a.join("")),r}(t,",")}function d(t){var n=/([^(]*)\(([\s\S]*)\)([\s\S]*)/g.exec(t);return!n||n.length<4?{}:{prefix:n[1],value:n[2],suffix:n[3]}}function m(t){var n=/^([^\d|e|\-|\+]*)((?:\d|\.|-|e-|e\+)+)(\S*)$/g.exec(t);if(!n)return{prefix:"",unit:"",value:NaN};var i=n[1],s=n[2];return{prefix:i,unit:n[3],value:parseFloat(s)}}function D(){return Date.now?Date.now():(new Date).getTime()}function C(t,n,i){void 0===i&&(i=-1);for(var s=t.length,e=0;e<s;++e)if(n(t[e],e,t))return e;return i}function E(t,n,i){var s=C(t,n);return s>-1?t[s]:i}function X(t,n){return t.classList?t.classList.contains(n):!!t.className.match(new RegExp("(\\s|^)"+n+"(\\s|$)"))}function Y(t,n){t.classList?t.classList.add(n):t.className+=" "+n}function y(t,n){if(t.classList)t.classList.remove(n);else{var i=new RegExp("(\\s|^)"+n+"(\\s|$)");t.className=t.className.replace(i," ")}}function P(t,n,i,s){t.addEventListener(n,i,s)}function w(t,n,i){t.removeEventListener(n,i)}}}]);
//# sourceMappingURL=vendor.daybrush.c3df3ff22eda01b5b32b.js.map