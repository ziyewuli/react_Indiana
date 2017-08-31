/* Zepto v1.1.6 - zepto event ajax form ie - zeptojs.com/license */
var Zepto=function(){function L(t){return null==t?String(t):j[S.call(t)]||"object"}function Z(t){return"function"==L(t)}function _(t){return null!=t&&t==t.window}function $(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function D(t){return"object"==L(t)}function M(t){return D(t)&&!_(t)&&Object.getPrototypeOf(t)==Object.prototype}function R(t){return"number"==typeof t.length}function k(t){return s.call(t,function(t){return null!=t})}function z(t){return t.length>0?n.fn.concat.apply([],t):t}function F(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function q(t){return t in f?f[t]:f[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function H(t,e){return"number"!=typeof e||c[F(t)]?e:e+"px"}function I(t){var e,n;return u[t]||(e=a.createElement(t),a.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),u[t]=n),u[t]}function V(t){return"children"in t?o.call(t.children):n.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function B(n,i,r){for(e in i)r&&(M(i[e])||A(i[e]))?(M(i[e])&&!M(n[e])&&(n[e]={}),A(i[e])&&!A(n[e])&&(n[e]=[]),B(n[e],i[e],r)):i[e]!==t&&(n[e]=i[e])}function U(t,e){return null==e?n(t):n(t).filter(e)}function J(t,e,n,i){return Z(e)?e.call(t,n,i):e}function X(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function W(e,n){var i=e.className||"",r=i&&i.baseVal!==t;return n===t?r?i.baseVal:i:void(r?i.baseVal=n:e.className=n)}function Y(t){try{return t?"true"==t||("false"==t?!1:"null"==t?null:+t+""==t?+t:/^[\[\{]/.test(t)?n.parseJSON(t):t):t}catch(e){return t}}function G(t,e){e(t);for(var n=0,i=t.childNodes.length;i>n;n++)G(t.childNodes[n],e)}var t,e,n,i,C,N,r=[],o=r.slice,s=r.filter,a=window.document,u={},f={},c={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},l=/^\s*<(\w+|!)[^>]*>/,h=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,p=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,d=/^(?:body|html)$/i,m=/([A-Z])/g,g=["val","css","html","text","data","width","height","offset"],v=["after","prepend","before","append"],y=a.createElement("table"),x=a.createElement("tr"),b={tr:a.createElement("tbody"),tbody:y,thead:y,tfoot:y,td:x,th:x,"*":a.createElement("div")},w=/complete|loaded|interactive/,E=/^[\w-]*$/,j={},S=j.toString,T={},O=a.createElement("div"),P={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},A=Array.isArray||function(t){return t instanceof Array};return T.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var i,r=t.parentNode,o=!r;return o&&(r=O).appendChild(t),i=~T.qsa(r,e).indexOf(t),o&&O.removeChild(t),i},C=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},N=function(t){return s.call(t,function(e,n){return t.indexOf(e)==n})},T.fragment=function(e,i,r){var s,u,f;return h.test(e)&&(s=n(a.createElement(RegExp.$1))),s||(e.replace&&(e=e.replace(p,"<$1></$2>")),i===t&&(i=l.test(e)&&RegExp.$1),i in b||(i="*"),f=b[i],f.innerHTML=""+e,s=n.each(o.call(f.childNodes),function(){f.removeChild(this)})),M(r)&&(u=n(s),n.each(r,function(t,e){g.indexOf(t)>-1?u[t](e):u.attr(t,e)})),s},T.Z=function(t,e){return t=t||[],t.__proto__=n.fn,t.selector=e||"",t},T.isZ=function(t){return t instanceof T.Z},T.init=function(e,i){var r;if(!e)return T.Z();if("string"==typeof e)if(e=e.trim(),"<"==e[0]&&l.test(e))r=T.fragment(e,RegExp.$1,i),e=null;else{if(i!==t)return n(i).find(e);r=T.qsa(a,e)}else{if(Z(e))return n(a).ready(e);if(T.isZ(e))return e;if(A(e))r=k(e);else if(D(e))r=[e],e=null;else if(l.test(e))r=T.fragment(e.trim(),RegExp.$1,i),e=null;else{if(i!==t)return n(i).find(e);r=T.qsa(a,e)}}return T.Z(r,e)},n=function(t,e){return T.init(t,e)},n.extend=function(t){var e,n=o.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){B(t,n,e)}),t},T.qsa=function(t,e){var n,i="#"==e[0],r=!i&&"."==e[0],s=i||r?e.slice(1):e,a=E.test(s);return $(t)&&a&&i?(n=t.getElementById(s))?[n]:[]:1!==t.nodeType&&9!==t.nodeType?[]:o.call(a&&!i?r?t.getElementsByClassName(s):t.getElementsByTagName(e):t.querySelectorAll(e))},n.contains=a.documentElement.contains?function(t,e){return t!==e&&t.contains(e)}:function(t,e){for(;e&&(e=e.parentNode);)if(e===t)return!0;return!1},n.type=L,n.isFunction=Z,n.isWindow=_,n.isArray=A,n.isPlainObject=M,n.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},n.inArray=function(t,e,n){return r.indexOf.call(e,t,n)},n.camelCase=C,n.trim=function(t){return null==t?"":String.prototype.trim.call(t)},n.uuid=0,n.support={},n.expr={},n.map=function(t,e){var n,r,o,i=[];if(R(t))for(r=0;r<t.length;r++)n=e(t[r],r),null!=n&&i.push(n);else for(o in t)n=e(t[o],o),null!=n&&i.push(n);return z(i)},n.each=function(t,e){var n,i;if(R(t)){for(n=0;n<t.length;n++)if(e.call(t[n],n,t[n])===!1)return t}else for(i in t)if(e.call(t[i],i,t[i])===!1)return t;return t},n.grep=function(t,e){return s.call(t,e)},window.JSON&&(n.parseJSON=JSON.parse),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){j["[object "+e+"]"]=e.toLowerCase()}),n.fn={forEach:r.forEach,reduce:r.reduce,push:r.push,sort:r.sort,indexOf:r.indexOf,concat:r.concat,map:function(t){return n(n.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return n(o.apply(this,arguments))},ready:function(t){return w.test(a.readyState)&&a.body?t(n):a.addEventListener("DOMContentLoaded",function(){t(n)},!1),this},get:function(e){return e===t?o.call(this):this[e>=0?e:e+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return r.every.call(this,function(e,n){return t.call(e,n,e)!==!1}),this},filter:function(t){return Z(t)?this.not(this.not(t)):n(s.call(this,function(e){return T.matches(e,t)}))},add:function(t,e){return n(N(this.concat(n(t,e))))},is:function(t){return this.length>0&&T.matches(this[0],t)},not:function(e){var i=[];if(Z(e)&&e.call!==t)this.each(function(t){e.call(this,t)||i.push(this)});else{var r="string"==typeof e?this.filter(e):R(e)&&Z(e.item)?o.call(e):n(e);this.forEach(function(t){r.indexOf(t)<0&&i.push(t)})}return n(i)},has:function(t){return this.filter(function(){return D(t)?n.contains(this,t):n(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!D(t)?t:n(t)},last:function(){var t=this[this.length-1];return t&&!D(t)?t:n(t)},find:function(t){var e,i=this;return e=t?"object"==typeof t?n(t).filter(function(){var t=this;return r.some.call(i,function(e){return n.contains(e,t)})}):1==this.length?n(T.qsa(this[0],t)):this.map(function(){return T.qsa(this,t)}):n()},closest:function(t,e){var i=this[0],r=!1;for("object"==typeof t&&(r=n(t));i&&!(r?r.indexOf(i)>=0:T.matches(i,t));)i=i!==e&&!$(i)&&i.parentNode;return n(i)},parents:function(t){for(var e=[],i=this;i.length>0;)i=n.map(i,function(t){return(t=t.parentNode)&&!$(t)&&e.indexOf(t)<0?(e.push(t),t):void 0});return U(e,t)},parent:function(t){return U(N(this.pluck("parentNode")),t)},children:function(t){return U(this.map(function(){return V(this)}),t)},contents:function(){return this.map(function(){return o.call(this.childNodes)})},siblings:function(t){return U(this.map(function(t,e){return s.call(V(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return n.map(this,function(e){return e[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=I(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var e=Z(t);if(this[0]&&!e)var i=n(t).get(0),r=i.parentNode||this.length>1;return this.each(function(o){n(this).wrapAll(e?t.call(this,o):r?i.cloneNode(!0):i)})},wrapAll:function(t){if(this[0]){n(this[0]).before(t=n(t));for(var e;(e=t.children()).length;)t=e.first();n(t).append(this)}return this},wrapInner:function(t){var e=Z(t);return this.each(function(i){var r=n(this),o=r.contents(),s=e?t.call(this,i):t;o.length?o.wrapAll(s):r.append(s)})},unwrap:function(){return this.parent().each(function(){n(this).replaceWith(n(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(e){return this.each(function(){var i=n(this);(e===t?"none"==i.css("display"):e)?i.show():i.hide()})},prev:function(t){return n(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return n(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return 0 in arguments?this.each(function(e){var i=this.innerHTML;n(this).empty().append(J(this,t,e,i))}):0 in this?this[0].innerHTML:null},text:function(t){return 0 in arguments?this.each(function(e){var n=J(this,t,e,this.textContent);this.textContent=null==n?"":""+n}):0 in this?this[0].textContent:null},attr:function(n,i){var r;return"string"!=typeof n||1 in arguments?this.each(function(t){if(1===this.nodeType)if(D(n))for(e in n)X(this,e,n[e]);else X(this,n,J(this,i,t,this.getAttribute(n)))}):this.length&&1===this[0].nodeType?!(r=this[0].getAttribute(n))&&n in this[0]?this[0][n]:r:t},removeAttr:function(t){return this.each(function(){1===this.nodeType&&t.split(" ").forEach(function(t){X(this,t)},this)})},prop:function(t,e){return t=P[t]||t,1 in arguments?this.each(function(n){this[t]=J(this,e,n,this[t])}):this[0]&&this[0][t]},data:function(e,n){var i="data-"+e.replace(m,"-$1").toLowerCase(),r=1 in arguments?this.attr(i,n):this.attr(i);return null!==r?Y(r):t},val:function(t){return 0 in arguments?this.each(function(e){this.value=J(this,t,e,this.value)}):this[0]&&(this[0].multiple?n(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(t){if(t)return this.each(function(e){var i=n(this),r=J(this,t,e,i.offset()),o=i.offsetParent().offset(),s={top:r.top-o.top,left:r.left-o.left};"static"==i.css("position")&&(s.position="relative"),i.css(s)});if(!this.length)return null;var e=this[0].getBoundingClientRect();return{left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:Math.round(e.width),height:Math.round(e.height)}},css:function(t,i){if(arguments.length<2){var r,o=this[0];if(!o)return;if(r=getComputedStyle(o,""),"string"==typeof t)return o.style[C(t)]||r.getPropertyValue(t);if(A(t)){var s={};return n.each(t,function(t,e){s[e]=o.style[C(e)]||r.getPropertyValue(e)}),s}}var a="";if("string"==L(t))i||0===i?a=F(t)+":"+H(t,i):this.each(function(){this.style.removeProperty(F(t))});else for(e in t)t[e]||0===t[e]?a+=F(e)+":"+H(e,t[e])+";":this.each(function(){this.style.removeProperty(F(e))});return this.each(function(){this.style.cssText+=";"+a})},index:function(t){return t?this.indexOf(n(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return t?r.some.call(this,function(t){return this.test(W(t))},q(t)):!1},addClass:function(t){return t?this.each(function(e){if("className"in this){i=[];var r=W(this),o=J(this,t,e,r);o.split(/\s+/g).forEach(function(t){n(this).hasClass(t)||i.push(t)},this),i.length&&W(this,r+(r?" ":"")+i.join(" "))}}):this},removeClass:function(e){return this.each(function(n){if("className"in this){if(e===t)return W(this,"");i=W(this),J(this,e,n,i).split(/\s+/g).forEach(function(t){i=i.replace(q(t)," ")}),W(this,i.trim())}})},toggleClass:function(e,i){return e?this.each(function(r){var o=n(this),s=J(this,e,r,W(this));s.split(/\s+/g).forEach(function(e){(i===t?!o.hasClass(e):i)?o.addClass(e):o.removeClass(e)})}):this},scrollTop:function(e){if(this.length){var n="scrollTop"in this[0];return e===t?n?this[0].scrollTop:this[0].pageYOffset:this.each(n?function(){this.scrollTop=e}:function(){this.scrollTo(this.scrollX,e)})}},scrollLeft:function(e){if(this.length){var n="scrollLeft"in this[0];return e===t?n?this[0].scrollLeft:this[0].pageXOffset:this.each(n?function(){this.scrollLeft=e}:function(){this.scrollTo(e,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),i=this.offset(),r=d.test(e[0].nodeName)?{top:0,left:0}:e.offset();return i.top-=parseFloat(n(t).css("margin-top"))||0,i.left-=parseFloat(n(t).css("margin-left"))||0,r.top+=parseFloat(n(e[0]).css("border-top-width"))||0,r.left+=parseFloat(n(e[0]).css("border-left-width"))||0,{top:i.top-r.top,left:i.left-r.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||a.body;t&&!d.test(t.nodeName)&&"static"==n(t).css("position");)t=t.offsetParent;return t})}},n.fn.detach=n.fn.remove,["width","height"].forEach(function(e){var i=e.replace(/./,function(t){return t[0].toUpperCase()});n.fn[e]=function(r){var o,s=this[0];return r===t?_(s)?s["inner"+i]:$(s)?s.documentElement["scroll"+i]:(o=this.offset())&&o[e]:this.each(function(t){s=n(this),s.css(e,J(this,r,t,s[e]()))})}}),v.forEach(function(t,e){var i=e%2;n.fn[t]=function(){var t,o,r=n.map(arguments,function(e){return t=L(e),"object"==t||"array"==t||null==e?e:T.fragment(e)}),s=this.length>1;return r.length<1?this:this.each(function(t,u){o=i?u:u.parentNode,u=0==e?u.nextSibling:1==e?u.firstChild:2==e?u:null;var f=n.contains(a.documentElement,o);r.forEach(function(t){if(s)t=t.cloneNode(!0);else if(!o)return n(t).remove();o.insertBefore(t,u),f&&G(t,function(t){null==t.nodeName||"SCRIPT"!==t.nodeName.toUpperCase()||t.type&&"text/javascript"!==t.type||t.src||window.eval.call(window,t.innerHTML)})})})},n.fn[i?t+"To":"insert"+(e?"Before":"After")]=function(e){return n(e)[t](this),this}}),T.Z.prototype=n.fn,T.uniq=N,T.deserializeValue=Y,n.zepto=T,n}();window.Zepto=Zepto,void 0===window.$&&(window.$=Zepto),function(t){function l(t){return t._zid||(t._zid=e++)}function h(t,e,n,i){if(e=p(e),e.ns)var r=d(e.ns);return(s[l(t)]||[]).filter(function(t){return!(!t||e.e&&t.e!=e.e||e.ns&&!r.test(t.ns)||n&&l(t.fn)!==l(n)||i&&t.sel!=i)})}function p(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function d(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function m(t,e){return t.del&&!u&&t.e in f||!!e}function g(t){return c[t]||u&&f[t]||t}function v(e,i,r,o,a,u,f){var h=l(e),d=s[h]||(s[h]=[]);i.split(/\s/).forEach(function(i){if("ready"==i)return t(document).ready(r);var s=p(i);s.fn=r,s.sel=a,s.e in c&&(r=function(e){var n=e.relatedTarget;return!n||n!==this&&!t.contains(this,n)?s.fn.apply(this,arguments):void 0}),s.del=u;var l=u||r;s.proxy=function(t){if(t=j(t),!t.isImmediatePropagationStopped()){t.data=o;var i=l.apply(e,t._args==n?[t]:[t].concat(t._args));return i===!1&&(t.preventDefault(),t.stopPropagation()),i}},s.i=d.length,d.push(s),"addEventListener"in e&&e.addEventListener(g(s.e),s.proxy,m(s,f))})}function y(t,e,n,i,r){var o=l(t);(e||"").split(/\s/).forEach(function(e){h(t,e,n,i).forEach(function(e){delete s[o][e.i],"removeEventListener"in t&&t.removeEventListener(g(e.e),e.proxy,m(e,r))})})}function j(e,i){return(i||!e.isDefaultPrevented)&&(i||(i=e),t.each(E,function(t,n){var r=i[t];e[t]=function(){return this[n]=x,r&&r.apply(i,arguments)},e[n]=b}),(i.defaultPrevented!==n?i.defaultPrevented:"returnValue"in i?i.returnValue===!1:i.getPreventDefault&&i.getPreventDefault())&&(e.isDefaultPrevented=x)),e}function S(t){var e,i={originalEvent:t};for(e in t)w.test(e)||t[e]===n||(i[e]=t[e]);return j(i,t)}var n,e=1,i=Array.prototype.slice,r=t.isFunction,o=function(t){return"string"==typeof t},s={},a={},u="onfocusin"in window,f={focus:"focusin",blur:"focusout"},c={mouseenter:"mouseover",mouseleave:"mouseout"};a.click=a.mousedown=a.mouseup=a.mousemove="MouseEvents",t.event={add:v,remove:y},t.proxy=function(e,n){var s=2 in arguments&&i.call(arguments,2);if(r(e)){var a=function(){return e.apply(n,s?s.concat(i.call(arguments)):arguments)};return a._zid=l(e),a}if(o(n))return s?(s.unshift(e[n],e),t.proxy.apply(null,s)):t.proxy(e[n],e);throw new TypeError("expected function")},t.fn.bind=function(t,e,n){return this.on(t,e,n)},t.fn.unbind=function(t,e){return this.off(t,e)},t.fn.one=function(t,e,n,i){return this.on(t,e,n,i,1)};var x=function(){return!0},b=function(){return!1},w=/^([A-Z]|returnValue$|layer[XY]$)/,E={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};t.fn.delegate=function(t,e,n){return this.on(e,t,n)},t.fn.undelegate=function(t,e,n){return this.off(e,t,n)},t.fn.live=function(e,n){return t(document.body).delegate(this.selector,e,n),this},t.fn.die=function(e,n){return t(document.body).undelegate(this.selector,e,n),this},t.fn.on=function(e,s,a,u,f){var c,l,h=this;return e&&!o(e)?(t.each(e,function(t,e){h.on(t,s,a,e,f)}),h):(o(s)||r(u)||u===!1||(u=a,a=s,s=n),(r(a)||a===!1)&&(u=a,a=n),u===!1&&(u=b),h.each(function(n,r){f&&(c=function(t){return y(r,t.type,u),u.apply(this,arguments)}),s&&(l=function(e){var n,o=t(e.target).closest(s,r).get(0);return o&&o!==r?(n=t.extend(S(e),{currentTarget:o,liveFired:r}),(c||u).apply(o,[n].concat(i.call(arguments,1)))):void 0}),v(r,e,u,a,s,l||c)}))},t.fn.off=function(e,i,s){var a=this;return e&&!o(e)?(t.each(e,function(t,e){a.off(t,i,e)}),a):(o(i)||r(s)||s===!1||(s=i,i=n),s===!1&&(s=b),a.each(function(){y(this,e,s,i)}))},t.fn.trigger=function(e,n){return e=o(e)||t.isPlainObject(e)?t.Event(e):j(e),e._args=n,this.each(function(){e.type in f&&"function"==typeof this[e.type]?this[e.type]():"dispatchEvent"in this?this.dispatchEvent(e):t(this).triggerHandler(e,n)})},t.fn.triggerHandler=function(e,n){var i,r;return this.each(function(s,a){i=S(o(e)?t.Event(e):e),i._args=n,i.target=a,t.each(h(a,e.type||e),function(t,e){return r=e.proxy(i),i.isImmediatePropagationStopped()?!1:void 0})}),r},"focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e){t.fn[e]=function(t){return 0 in arguments?this.bind(e,t):this.trigger(e)}}),t.Event=function(t,e){o(t)||(e=t,t=e.type);var n=document.createEvent(a[t]||"Events"),i=!0;if(e)for(var r in e)"bubbles"==r?i=!!e[r]:n[r]=e[r];return n.initEvent(t,i,!0),j(n)}}(Zepto),function(t){function h(e,n,i){var r=t.Event(n);return t(e).trigger(r,i),!r.isDefaultPrevented()}function p(t,e,i,r){return t.global?h(e||n,i,r):void 0}function d(e){e.global&&0===t.active++&&p(e,null,"ajaxStart")}function m(e){e.global&&!--t.active&&p(e,null,"ajaxStop")}function g(t,e){var n=e.context;return e.beforeSend.call(n,t,e)===!1||p(e,n,"ajaxBeforeSend",[t,e])===!1?!1:void p(e,n,"ajaxSend",[t,e])}function v(t,e,n,i){var r=n.context,o="success";n.success.call(r,t,o,e),i&&i.resolveWith(r,[t,o,e]),p(n,r,"ajaxSuccess",[e,n,t]),x(o,e,n)}function y(t,e,n,i,r){var o=i.context;i.error.call(o,n,e,t),r&&r.rejectWith(o,[n,e,t]),p(i,o,"ajaxError",[n,i,t||e]),x(e,n,i)}function x(t,e,n){var i=n.context;n.complete.call(i,e,t),p(n,i,"ajaxComplete",[e,n]),m(n)}function b(){}function w(t){return t&&(t=t.split(";",2)[0]),t&&(t==f?"html":t==u?"json":s.test(t)?"script":a.test(t)&&"xml")||"text"}function E(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function j(e){e.processData&&e.data&&"string"!=t.type(e.data)&&(e.data=t.param(e.data,e.traditional)),!e.data||e.type&&"GET"!=e.type.toUpperCase()||(e.url=E(e.url,e.data),e.data=void 0)}function S(e,n,i,r){return t.isFunction(n)&&(r=i,i=n,n=void 0),t.isFunction(i)||(r=i,i=void 0),{url:e,data:n,success:i,dataType:r}}function C(e,n,i,r){var o,s=t.isArray(n),a=t.isPlainObject(n);t.each(n,function(n,u){o=t.type(u),r&&(n=i?r:r+"["+(a||"object"==o||"array"==o?n:"")+"]"),!r&&s?e.add(u.name,u.value):"array"==o||!i&&"object"==o?C(e,u,i,n):e.add(n,u)})}var i,r,e=0,n=window.document,o=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,s=/^(?:text|application)\/javascript/i,a=/^(?:text|application)\/xml/i,u="application/json",f="text/html",c=/^\s*$/,l=n.createElement("a");l.href=window.location.href,t.active=0,t.ajaxJSONP=function(i,r){if(!("type"in i))return t.ajax(i);var f,h,o=i.jsonpCallback,s=(t.isFunction(o)?o():o)||"jsonp"+ ++e,a=n.createElement("script"),u=window[s],c=function(e){t(a).triggerHandler("error",e||"abort")},l={abort:c};return r&&r.promise(l),t(a).on("load error",function(e,n){clearTimeout(h),t(a).off().remove(),"error"!=e.type&&f?v(f[0],l,i,r):y(null,n||"error",l,i,r),window[s]=u,f&&t.isFunction(u)&&u(f[0]),u=f=void 0}),g(l,i)===!1?(c("abort"),l):(window[s]=function(){f=arguments},a.src=i.url.replace(/\?(.+)=\?/,"?$1="+s),n.head.appendChild(a),i.timeout>0&&(h=setTimeout(function(){c("timeout")},i.timeout)),l)},t.ajaxSettings={type:"GET",beforeSend:b,success:b,error:b,complete:b,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:u,xml:"application/xml, text/xml",html:f,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},t.ajax=function(e){var a,o=t.extend({},e||{}),s=t.Deferred&&t.Deferred();for(i in t.ajaxSettings)void 0===o[i]&&(o[i]=t.ajaxSettings[i]);d(o),o.crossDomain||(a=n.createElement("a"),a.href=o.url,a.href=a.href,o.crossDomain=l.protocol+"//"+l.host!=a.protocol+"//"+a.host),o.url||(o.url=window.location.toString()),j(o);var u=o.dataType,f=/\?.+=\?/.test(o.url);if(f&&(u="jsonp"),o.cache!==!1&&(e&&e.cache===!0||"script"!=u&&"jsonp"!=u)||(o.url=E(o.url,"_="+Date.now())),"jsonp"==u)return f||(o.url=E(o.url,o.jsonp?o.jsonp+"=?":o.jsonp===!1?"":"callback=?")),t.ajaxJSONP(o,s);var C,h=o.accepts[u],p={},m=function(t,e){p[t.toLowerCase()]=[t,e]},x=/^([\w-]+:)\/\//.test(o.url)?RegExp.$1:window.location.protocol,S=o.xhr(),T=S.setRequestHeader;if(s&&s.promise(S),o.crossDomain||m("X-Requested-With","XMLHttpRequest"),m("Accept",h||"*/*"),(h=o.mimeType||h)&&(h.indexOf(",")>-1&&(h=h.split(",",2)[0]),S.overrideMimeType&&S.overrideMimeType(h)),(o.contentType||o.contentType!==!1&&o.data&&"GET"!=o.type.toUpperCase())&&m("Content-Type",o.contentType||"application/x-www-form-urlencoded"),o.headers)for(r in o.headers)m(r,o.headers[r]);if(S.setRequestHeader=m,S.onreadystatechange=function(){if(4==S.readyState){S.onreadystatechange=b,clearTimeout(C);var e,n=!1;if(S.status>=200&&S.status<300||304==S.status||0==S.status&&"file:"==x){u=u||w(o.mimeType||S.getResponseHeader("content-type")),e=S.responseText;try{"script"==u?(1,eval)(e):"xml"==u?e=S.responseXML:"json"==u&&(e=c.test(e)?null:t.parseJSON(e))}catch(i){n=i}n?y(n,"parsererror",S,o,s):v(e,S,o,s)}else y(S.statusText||null,S.status?"error":"abort",S,o,s)}},g(S,o)===!1)return S.abort(),y(null,"abort",S,o,s),S;if(o.xhrFields)for(r in o.xhrFields)S[r]=o.xhrFields[r];var N="async"in o?o.async:!0;S.open(o.type,o.url,N,o.username,o.password);for(r in p)T.apply(S,p[r]);return o.timeout>0&&(C=setTimeout(function(){S.onreadystatechange=b,S.abort(),y(null,"timeout",S,o,s)},o.timeout)),S.send(o.data?o.data:null),S},t.get=function(){return t.ajax(S.apply(null,arguments))},t.post=function(){var e=S.apply(null,arguments);return e.type="POST",t.ajax(e)},t.getJSON=function(){var e=S.apply(null,arguments);return e.dataType="json",t.ajax(e)},t.fn.load=function(e,n,i){if(!this.length)return this;var a,r=this,s=e.split(/\s/),u=S(e,n,i),f=u.success;return s.length>1&&(u.url=s[0],a=s[1]),u.success=function(e){r.html(a?t("<div>").html(e.replace(o,"")).find(a):e),f&&f.apply(r,arguments)},t.ajax(u),this};var T=encodeURIComponent;t.param=function(e,n){var i=[];return i.add=function(e,n){t.isFunction(n)&&(n=n()),null==n&&(n=""),this.push(T(e)+"="+T(n))},C(i,e,n),i.join("&").replace(/%20/g,"+")}}(Zepto),function(t){t.fn.serializeArray=function(){var e,n,i=[],r=function(t){return t.forEach?t.forEach(r):void i.push({name:e,value:t})};return this[0]&&t.each(this[0].elements,function(i,o){n=o.type,e=o.name,e&&"fieldset"!=o.nodeName.toLowerCase()&&!o.disabled&&"submit"!=n&&"reset"!=n&&"button"!=n&&"file"!=n&&("radio"!=n&&"checkbox"!=n||o.checked)&&r(t(o).val())}),i},t.fn.serialize=function(){var t=[];return this.serializeArray().forEach(function(e){t.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value))}),t.join("&")},t.fn.submit=function(e){if(0 in arguments)this.bind("submit",e);else if(this.length){var n=t.Event("submit");this.eq(0).trigger(n),n.isDefaultPrevented()||this.get(0).submit()}return this}}(Zepto),function(t){"__proto__"in{}||t.extend(t.zepto,{Z:function(e,n){return e=e||[],t.extend(e,t.fn),e.selector=n||"",e.__Z=!0,e},isZ:function(e){return"array"===t.type(e)&&"__Z"in e}});try{getComputedStyle(void 0)}catch(e){var n=getComputedStyle;window.getComputedStyle=function(t){try{return n(t)}catch(e){return null}}}}(Zepto);jQuery = Zepto;(function($){$.fn.lazyload=function(settings){var $this=$(this),_winScrollTop=0,_winHeight=$(window).height();settings=$.extend({threshold:0,placeholder:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC'},settings||{});lazyLoadPic();$(window).on('scroll',function(){_winScrollTop=$(window).scrollTop();lazyLoadPic()});function lazyLoadPic(){$this.each(function(){var $self=$(this);if($self.is('img')){if($self.attr('data-src')){var _offsetTop=$self.offset().top;if((_offsetTop-settings.threshold)<=(_winHeight+_winScrollTop)){$self.attr('src',$self.attr('data-src'));$self.removeAttr('data-src')}}}else{if($self.attr('data-src')){if($self.css('background-image')=='none'){$self.css('background-image','url('+settings.placeholder+')')}var _offsetTop=$self.offset().top;if((_offsetTop-settings.threshold)<=(_winHeight+_winScrollTop)){$self.css('background-image','url('+$self.attr('data-src')+')');$self.removeAttr('data-src')}}}})}}})(Zepto);(function($){var rotateLeft=function(lValue,iShiftBits){return(lValue<<iShiftBits)|(lValue>>>(32-iShiftBits))};var addUnsigned=function(lX,lY){var lX4,lY4,lX8,lY8,lResult;lX8=(lX&0x80000000);lY8=(lY&0x80000000);lX4=(lX&0x40000000);lY4=(lY&0x40000000);lResult=(lX&0x3FFFFFFF)+(lY&0x3FFFFFFF);if(lX4&lY4)return(lResult^0x80000000^lX8^lY8);if(lX4|lY4){if(lResult&0x40000000)return(lResult^0xC0000000^lX8^lY8);else return(lResult^0x40000000^lX8^lY8)}else{return(lResult^lX8^lY8)}};var F=function(x,y,z){return(x&y)|((~x)&z)};var G=function(x,y,z){return(x&z)|(y&(~z))};var H=function(x,y,z){return(x^y^z)};var I=function(x,y,z){return(y^(x|(~z)))};var FF=function(a,b,c,d,x,s,ac){a=addUnsigned(a,addUnsigned(addUnsigned(F(b,c,d),x),ac));return addUnsigned(rotateLeft(a,s),b)};var GG=function(a,b,c,d,x,s,ac){a=addUnsigned(a,addUnsigned(addUnsigned(G(b,c,d),x),ac));return addUnsigned(rotateLeft(a,s),b)};var HH=function(a,b,c,d,x,s,ac){a=addUnsigned(a,addUnsigned(addUnsigned(H(b,c,d),x),ac));return addUnsigned(rotateLeft(a,s),b)};var II=function(a,b,c,d,x,s,ac){a=addUnsigned(a,addUnsigned(addUnsigned(I(b,c,d),x),ac));return addUnsigned(rotateLeft(a,s),b)};var convertToWordArray=function(string){var lWordCount;var lMessageLength=string.length;var lNumberOfWordsTempOne=lMessageLength+8;var lNumberOfWordsTempTwo=(lNumberOfWordsTempOne-(lNumberOfWordsTempOne%64))/64;var lNumberOfWords=(lNumberOfWordsTempTwo+1)*16;var lWordArray=Array(lNumberOfWords-1);var lBytePosition=0;var lByteCount=0;while(lByteCount<lMessageLength){lWordCount=(lByteCount-(lByteCount%4))/4;lBytePosition=(lByteCount%4)*8;lWordArray[lWordCount]=(lWordArray[lWordCount]|(string.charCodeAt(lByteCount)<<lBytePosition));lByteCount++}lWordCount=(lByteCount-(lByteCount%4))/4;lBytePosition=(lByteCount%4)*8;lWordArray[lWordCount]=lWordArray[lWordCount]|(0x80<<lBytePosition);lWordArray[lNumberOfWords-2]=lMessageLength<<3;lWordArray[lNumberOfWords-1]=lMessageLength>>>29;return lWordArray};var wordToHex=function(lValue){var WordToHexValue="",WordToHexValueTemp="",lByte,lCount;for(lCount=0;lCount<=3;lCount++){lByte=(lValue>>>(lCount*8))&255;WordToHexValueTemp="0"+lByte.toString(16);WordToHexValue=WordToHexValue+WordToHexValueTemp.substr(WordToHexValueTemp.length-2,2)}return WordToHexValue};var uTF8Encode=function(string){string=string.replace(/\x0d\x0a/g,"\x0a");var output="";for(var n=0;n<string.length;n++){var c=string.charCodeAt(n);if(c<128){output+=String.fromCharCode(c)}else if((c>127)&&(c<2048)){output+=String.fromCharCode((c>>6)|192);output+=String.fromCharCode((c&63)|128)}else{output+=String.fromCharCode((c>>12)|224);output+=String.fromCharCode(((c>>6)&63)|128);output+=String.fromCharCode((c&63)|128)}}return output};$.extend($,{md5:function(string){var x=Array();var k,AA,BB,CC,DD,a,b,c,d;var S11=7,S12=12,S13=17,S14=22;var S21=5,S22=9,S23=14,S24=20;var S31=4,S32=11,S33=16,S34=23;var S41=6,S42=10,S43=15,S44=21;string=uTF8Encode(string);x=convertToWordArray(string);a=0x67452301;b=0xEFCDAB89;c=0x98BADCFE;d=0x10325476;for(k=0;k<x.length;k+=16){AA=a;BB=b;CC=c;DD=d;a=FF(a,b,c,d,x[k+0],S11,0xD76AA478);d=FF(d,a,b,c,x[k+1],S12,0xE8C7B756);c=FF(c,d,a,b,x[k+2],S13,0x242070DB);b=FF(b,c,d,a,x[k+3],S14,0xC1BDCEEE);a=FF(a,b,c,d,x[k+4],S11,0xF57C0FAF);d=FF(d,a,b,c,x[k+5],S12,0x4787C62A);c=FF(c,d,a,b,x[k+6],S13,0xA8304613);b=FF(b,c,d,a,x[k+7],S14,0xFD469501);a=FF(a,b,c,d,x[k+8],S11,0x698098D8);d=FF(d,a,b,c,x[k+9],S12,0x8B44F7AF);c=FF(c,d,a,b,x[k+10],S13,0xFFFF5BB1);b=FF(b,c,d,a,x[k+11],S14,0x895CD7BE);a=FF(a,b,c,d,x[k+12],S11,0x6B901122);d=FF(d,a,b,c,x[k+13],S12,0xFD987193);c=FF(c,d,a,b,x[k+14],S13,0xA679438E);b=FF(b,c,d,a,x[k+15],S14,0x49B40821);a=GG(a,b,c,d,x[k+1],S21,0xF61E2562);d=GG(d,a,b,c,x[k+6],S22,0xC040B340);c=GG(c,d,a,b,x[k+11],S23,0x265E5A51);b=GG(b,c,d,a,x[k+0],S24,0xE9B6C7AA);a=GG(a,b,c,d,x[k+5],S21,0xD62F105D);d=GG(d,a,b,c,x[k+10],S22,0x2441453);c=GG(c,d,a,b,x[k+15],S23,0xD8A1E681);b=GG(b,c,d,a,x[k+4],S24,0xE7D3FBC8);a=GG(a,b,c,d,x[k+9],S21,0x21E1CDE6);d=GG(d,a,b,c,x[k+14],S22,0xC33707D6);c=GG(c,d,a,b,x[k+3],S23,0xF4D50D87);b=GG(b,c,d,a,x[k+8],S24,0x455A14ED);a=GG(a,b,c,d,x[k+13],S21,0xA9E3E905);d=GG(d,a,b,c,x[k+2],S22,0xFCEFA3F8);c=GG(c,d,a,b,x[k+7],S23,0x676F02D9);b=GG(b,c,d,a,x[k+12],S24,0x8D2A4C8A);a=HH(a,b,c,d,x[k+5],S31,0xFFFA3942);d=HH(d,a,b,c,x[k+8],S32,0x8771F681);c=HH(c,d,a,b,x[k+11],S33,0x6D9D6122);b=HH(b,c,d,a,x[k+14],S34,0xFDE5380C);a=HH(a,b,c,d,x[k+1],S31,0xA4BEEA44);d=HH(d,a,b,c,x[k+4],S32,0x4BDECFA9);c=HH(c,d,a,b,x[k+7],S33,0xF6BB4B60);b=HH(b,c,d,a,x[k+10],S34,0xBEBFBC70);a=HH(a,b,c,d,x[k+13],S31,0x289B7EC6);d=HH(d,a,b,c,x[k+0],S32,0xEAA127FA);c=HH(c,d,a,b,x[k+3],S33,0xD4EF3085);b=HH(b,c,d,a,x[k+6],S34,0x4881D05);a=HH(a,b,c,d,x[k+9],S31,0xD9D4D039);d=HH(d,a,b,c,x[k+12],S32,0xE6DB99E5);c=HH(c,d,a,b,x[k+15],S33,0x1FA27CF8);b=HH(b,c,d,a,x[k+2],S34,0xC4AC5665);a=II(a,b,c,d,x[k+0],S41,0xF4292244);d=II(d,a,b,c,x[k+7],S42,0x432AFF97);c=II(c,d,a,b,x[k+14],S43,0xAB9423A7);b=II(b,c,d,a,x[k+5],S44,0xFC93A039);a=II(a,b,c,d,x[k+12],S41,0x655B59C3);d=II(d,a,b,c,x[k+3],S42,0x8F0CCC92);c=II(c,d,a,b,x[k+10],S43,0xFFEFF47D);b=II(b,c,d,a,x[k+1],S44,0x85845DD1);a=II(a,b,c,d,x[k+8],S41,0x6FA87E4F);d=II(d,a,b,c,x[k+15],S42,0xFE2CE6E0);c=II(c,d,a,b,x[k+6],S43,0xA3014314);b=II(b,c,d,a,x[k+13],S44,0x4E0811A1);a=II(a,b,c,d,x[k+4],S41,0xF7537E82);d=II(d,a,b,c,x[k+11],S42,0xBD3AF235);c=II(c,d,a,b,x[k+2],S43,0x2AD7D2BB);b=II(b,c,d,a,x[k+9],S44,0xEB86D391);a=addUnsigned(a,AA);b=addUnsigned(b,BB);c=addUnsigned(c,CC);d=addUnsigned(d,DD)}var tempValue=wordToHex(a)+wordToHex(b)+wordToHex(c)+wordToHex(d);return tempValue.toLowerCase()}})})(Zepto);jQuery.base64=(function($){var _PADCHAR="=",_ALPHA="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",_VERSION="1.1";function _getbyte64(s,i){var idx=_ALPHA.indexOf(s.charAt(i));if(idx===-1){throw"Cannot decode base64"}return idx}function _decode_chars(y,x){while(y.length>0){var ch=y[0];if(ch<128){y.shift();x.push(String.fromCharCode(ch))}else{if((ch&128)==192){if(y.length<2){break}ch=y.shift();var ch1=y.shift();x.push(String.fromCharCode(((ch&31)<<6)+(ch1&63)))}else{if(y.length<3){break}ch=y.shift();var ch1=y.shift();var ch2=y.shift();x.push(String.fromCharCode(((ch&15)<<12)+((ch1&63)<<6)+(ch2&63)))}}}}function _decode(s){var pads=0,i,b10,imax=s.length,x=[],y=[];s=String(s);if(imax===0){return s}if(imax%4!==0){throw"Cannot decode base64"}if(s.charAt(imax-1)===_PADCHAR){pads=1;if(s.charAt(imax-2)===_PADCHAR){pads=2}imax-=4}for(i=0;i<imax;i+=4){var ch1=_getbyte64(s,i);var ch2=_getbyte64(s,i+1);var ch3=_getbyte64(s,i+2);var ch4=_getbyte64(s,i+3);b10=(_getbyte64(s,i)<<18)|(_getbyte64(s,i+1)<<12)|(_getbyte64(s,i+2)<<6)|_getbyte64(s,i+3);y.push(b10>>16);y.push((b10>>8)&255);y.push(b10&255);_decode_chars(y,x)}switch(pads){case 1:b10=(_getbyte64(s,i)<<18)|(_getbyte64(s,i+1)<<12)|(_getbyte64(s,i+2)<<6);y.push(b10>>16);y.push((b10>>8)&255);break;case 2:b10=(_getbyte64(s,i)<<18)|(_getbyte64(s,i+1)<<12);y.push(b10>>16);break}_decode_chars(y,x);if(y.length>0){throw"Cannot decode base64"}return x.join("")}function _get_chars(ch,y){if(ch<128){y.push(ch)}else{if(ch<2048){y.push(192+((ch>>6)&31));y.push(128+(ch&63))}else{y.push(224+((ch>>12)&15));y.push(128+((ch>>6)&63));y.push(128+(ch&63))}}}function _encode(s){if(arguments.length!==1){throw"SyntaxError: exactly one argument required"}s=String(s);if(s.length===0){return s}var i,b10,y=[],x=[],len=s.length;i=0;while(i<len){_get_chars(s.charCodeAt(i),y);while(y.length>=3){var ch1=y.shift();var ch2=y.shift();var ch3=y.shift();b10=(ch1<<16)|(ch2<<8)|ch3;x.push(_ALPHA.charAt(b10>>18));x.push(_ALPHA.charAt((b10>>12)&63));x.push(_ALPHA.charAt((b10>>6)&63));x.push(_ALPHA.charAt(b10&63))}i++}switch(y.length){case 1:var ch=y.shift();b10=ch<<16;x.push(_ALPHA.charAt(b10>>18)+_ALPHA.charAt((b10>>12)&63)+_PADCHAR+_PADCHAR);break;case 2:var ch1=y.shift();var ch2=y.shift();b10=(ch1<<16)|(ch2<<8);x.push(_ALPHA.charAt(b10>>18)+_ALPHA.charAt((b10>>12)&63)+_ALPHA.charAt((b10>>6)&63)+_PADCHAR);break}return x.join("")}return{decode:_decode,encode:_encode,VERSION:_VERSION}}(jQuery));
;(function($, undefined){
  var prefix = '', eventPrefix,
    vendors = { Webkit: 'webkit', Moz: '', O: 'o' },
    testEl = document.createElement('div'),
    supportedTransforms = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,
    transform,
    transitionProperty, transitionDuration, transitionTiming, transitionDelay,
    animationName, animationDuration, animationTiming, animationDelay,
    cssReset = {}

  function dasherize(str) { return str.replace(/([a-z])([A-Z])/, '$1-$2').toLowerCase() }
  function normalizeEvent(name) { return eventPrefix ? eventPrefix + name : name.toLowerCase() }

  $.each(vendors, function(vendor, event){
    if (testEl.style[vendor + 'TransitionProperty'] !== undefined) {
      prefix = '-' + vendor.toLowerCase() + '-'
      eventPrefix = event
      return false
    }
  })

  transform = prefix + 'transform'
  cssReset[transitionProperty = prefix + 'transition-property'] =
  cssReset[transitionDuration = prefix + 'transition-duration'] =
  cssReset[transitionDelay    = prefix + 'transition-delay'] =
  cssReset[transitionTiming   = prefix + 'transition-timing-function'] =
  cssReset[animationName      = prefix + 'animation-name'] =
  cssReset[animationDuration  = prefix + 'animation-duration'] =
  cssReset[animationDelay     = prefix + 'animation-delay'] =
  cssReset[animationTiming    = prefix + 'animation-timing-function'] = ''

  $.fx = {
    off: (eventPrefix === undefined && testEl.style.transitionProperty === undefined),
    speeds: { _default: 400, fast: 200, slow: 600 },
    cssPrefix: prefix,
    transitionEnd: normalizeEvent('TransitionEnd'),
    animationEnd: normalizeEvent('AnimationEnd')
  }


    $.fn.find.innerWidth  =$.fn.innerWidth =$.fn.find.outerWidth  = $.fn.outerWidth =function(){
    
    return $(this).width();
    }

     
    $.fn.find.innerHeight  =$.fn.innerHeight = $.fn.find.outerHeight  =$.fn.outerHeight =function(){
    
    return $(this).height();
    }


    

    

  $.fn.animate = function(properties, duration, ease, callback, delay){
    if ($.isFunction(duration))
      callback = duration, ease = undefined, duration = undefined
    if ($.isFunction(ease))
      callback = ease, ease = undefined
    if ($.isPlainObject(duration))
      ease = duration.easing, callback = duration.complete, delay = duration.delay, duration = duration.duration
    if (duration) duration = (typeof duration == 'number' ? duration :
                    ($.fx.speeds[duration] || $.fx.speeds._default)) / 1000
    if (delay) delay = parseFloat(delay) / 1000
    return this.anim(properties, duration, ease, callback, delay)
  }

  $.fn.anim = function(properties, duration, ease, callback, delay){
    var key, cssValues = {}, cssProperties, transforms = '',
        that = this, wrappedCallback, endEvent = $.fx.transitionEnd,
        fired = false

    if (duration === undefined) duration = $.fx.speeds._default / 1000
    if (delay === undefined) delay = 0
    if ($.fx.off) duration = 0

    if (typeof properties == 'string') {
      // keyframe animation
      cssValues[animationName] = properties
      cssValues[animationDuration] = duration + 's'
      cssValues[animationDelay] = delay + 's'
      cssValues[animationTiming] = (ease || 'linear')
      endEvent = $.fx.animationEnd
    } else {
      cssProperties = []
      // CSS transitions
      for (key in properties)
        if (supportedTransforms.test(key)) transforms += key + '(' + properties[key] + ') '
        else cssValues[key] = properties[key], cssProperties.push(dasherize(key))

      if (transforms) cssValues[transform] = transforms, cssProperties.push(transform)
      if (duration > 0 && typeof properties === 'object') {
        cssValues[transitionProperty] = cssProperties.join(', ')
        cssValues[transitionDuration] = duration + 's'
        cssValues[transitionDelay] = delay + 's'
        cssValues[transitionTiming] = (ease || 'linear')
      }
    }

    wrappedCallback = function(event){
      if (typeof event !== 'undefined') {
        if (event.target !== event.currentTarget) return // makes sure the event didn't bubble from "below"
        $(event.target).unbind(endEvent, wrappedCallback)
      } else
        $(this).unbind(endEvent, wrappedCallback) // triggered by setTimeout

      fired = true
      $(this).css(cssReset)
      callback && callback.call(this)
    }
    if (duration > 0){
      this.bind(endEvent, wrappedCallback)
      // transitionEnd is not always firing on older Android phones
      // so make sure it gets fired
      setTimeout(function(){
        if (fired) return
        wrappedCallback.call(that)
      }, ((duration + delay) * 1000) + 25)
    }

    // trigger page reflow so new elements can animate
    this.size() && this.get(0).clientLeft

    this.css(cssValues)

    if (duration <= 0) setTimeout(function() {
      that.each(function(){ wrappedCallback.call(this) })
    }, 0)

    return this
  }

  testEl = null
})(Zepto);

;(function($){
  var slice = Array.prototype.slice

  function Deferred(func) {

    //å…ƒç»„ï¼šæè¿°çŠ¶æ€ã€çŠ¶æ€åˆ‡æ¢æ–¹æ³•åã€å¯¹åº”çŠ¶æ€æ‰§è¡Œæ–¹æ³•åã€å›žè°ƒåˆ—è¡¨çš„å…³ç³»
      //tupleå¼•è‡ªC++/pythonï¼Œå’Œlistçš„åŒºåˆ«æ˜¯ï¼Œå®ƒä¸å¯æ”¹å˜ ï¼Œç”¨æ¥å­˜å‚¨å¸¸é‡é›†
    var tuples = [
          // action, add listener, listener list, final state
          [ "resolve", "done", $.Callbacks({once:1, memory:1}), "resolved" ],
          [ "reject", "fail", $.Callbacks({once:1, memory:1}), "rejected" ],
          [ "notify", "progress", $.Callbacks({memory:1}) ]
        ],
        state = "pending", //Promiseåˆå§‹çŠ¶æ€

        //promiseå¯¹è±¡ï¼Œpromiseå’Œdeferredçš„åŒºåˆ«æ˜¯:
        /*promiseåªåŒ…å«æ‰§è¡Œé˜¶æ®µçš„æ–¹æ³•always(),then(),done(),fail(),progress()åŠè¾…åŠ©æ–¹æ³•state()ã€promise()ç­‰ã€‚
          deferredåˆ™åœ¨ç»§æ‰¿promiseçš„åŸºç¡€ä¸Šï¼Œå¢žåŠ åˆ‡æ¢çŠ¶æ€çš„æ–¹æ³•ï¼Œresolve()/resolveWith(),reject()/rejectWith(),notify()/notifyWith()*/
        //æ‰€ä»¥ç§°promiseæ˜¯deferredçš„åªè¯»å‰¯æœ¬
        promise = {
            /**
             * è¿”å›žçŠ¶æ€
             * @returns {string}
             */
          state: function() {
            return state
          },
            /**
             * æˆåŠŸ/å¤±è´¥çŠ¶æ€çš„ å›žè°ƒè°ƒç”¨
             * @returns {*}
             */
          always: function() {
            deferred.done(arguments).fail(arguments)
            return this
          },
            /**
             *
             * @returns promiseå¯¹è±¡
             */
          then: function(/* fnDone [, fnFailed [, fnProgress]] */) {
            var fns = arguments

            //æ³¨æ„ï¼Œè¿™æ— è®ºå¦‚ä½•éƒ½ä¼šè¿”å›žä¸€ä¸ªæ–°çš„Deferredåªè¯»å‰¯æœ¬ï¼Œ
            //æ‰€ä»¥æ­£å¸¸ä¸ºä¸€ä¸ªdeferredæ·»åŠ æˆåŠŸï¼Œå¤±è´¥ï¼Œåƒä¸‡ä¸è¦ç”¨thenï¼Œç”¨doneï¼Œfail
            return Deferred(function(defer){
              $.each(tuples, function(i, tuple){
                //i==0: done   i==1: fail  i==2 progress
                var fn = $.isFunction(fns[i]) && fns[i]

                //æ‰§è¡Œæ–°deferred done/fail/progress
                deferred[tuple[1]](function(){
                    //ç›´æŽ¥æ‰§è¡Œæ–°æ·»åŠ çš„å›žè°ƒ fnDone fnFailed fnProgress
                  var returned = fn && fn.apply(this, arguments)

                    //è¿”å›žç»“æžœæ˜¯promiseå¯¹è±¡
                  if (returned && $.isFunction(returned.promise)) {
                     //è½¬å‘fnDone fnFailed fnProgressè¿”å›žçš„promiseå¯¹è±¡
                     //æ³¨æ„ï¼Œè¿™é‡Œæ˜¯ä¸¤ä¸ªpromiseå¯¹è±¡çš„æ•°æ®äº¤æµ
                      //æ–°deferrredå¯¹è±¡åˆ‡æ¢ä¸ºå¯¹åº”çš„æˆåŠŸ/å¤±è´¥/é€šçŸ¥çŠ¶æ€ï¼Œä¼ é€’çš„å‚æ•°ä¸º returned.promise() ç»™äºˆçš„å‚æ•°å€¼
                    returned.promise()
                      .done(defer.resolve)
                      .fail(defer.reject)
                      .progress(defer.notify)
                  } else {
                    var context = this === promise ? defer.promise() : this,
                        values = fn ? [returned] : arguments
                    defer[tuple[0] + "With"](context, values)//æ–°deferrredå¯¹è±¡åˆ‡æ¢ä¸ºå¯¹åº”çš„æˆåŠŸ/å¤±è´¥/é€šçŸ¥çŠ¶æ€
                  }
                })
              })
              fns = null
            }).promise()
          },

            /**
             * è¿”å›žobjçš„promiseå¯¹è±¡
             * @param obj
             * @returns {*}
             */
          promise: function(obj) {
            return obj != null ? $.extend( obj, promise ) : promise
          }
        },

        //å†…éƒ¨å°è£…deferredå¯¹è±¡
        deferred = {}

    //ç»™deferredæ·»åŠ åˆ‡æ¢çŠ¶æ€æ–¹æ³•
    $.each(tuples, function(i, tuple){
      var list = tuple[2],//$.Callback
          stateString = tuple[3]//   çŠ¶æ€ å¦‚ resolved

        //æ‰©å±•promiseçš„doneã€failã€progressä¸ºCallbackçš„addæ–¹æ³•ï¼Œä½¿å…¶æˆä¸ºå›žè°ƒåˆ—è¡¨
        //ç®€å•å†™æ³•ï¼š  promise['done'] = jQuery.Callbacks( "once memory" ).add
        //         promise['fail'] = jQuery.Callbacks( "once memory" ).add  promise['progress'] = jQuery.Callbacks( "memory" ).add
      promise[tuple[1]] = list.add

        //åˆ‡æ¢çš„çŠ¶æ€æ˜¯resolveæˆåŠŸ/rejectå¤±è´¥
        //æ·»åŠ é¦–ç»„æ–¹æ³•åšé¢„å¤„ç†ï¼Œä¿®æ”¹stateçš„å€¼ï¼Œä½¿æˆåŠŸæˆ–å¤±è´¥äº’æ–¥ï¼Œé”å®šprogresså›žè°ƒåˆ—è¡¨ï¼Œ
      if (stateString) {
        list.add(function(){
          state = stateString

            //i^1  ^å¼‚æˆ–è¿ç®—ç¬¦  0^1=1 1^1=0ï¼ŒæˆåŠŸæˆ–å¤±è´¥å›žè°ƒäº’æ–¥ï¼Œè°ƒç”¨ä¸€æ–¹ï¼Œç¦ç”¨å¦ä¸€æ–¹
        }, tuples[i^1][2].disable, tuples[2][2].lock)
      }

        //æ·»åŠ åˆ‡æ¢çŠ¶æ€æ–¹æ³• resolve()/resolveWith(),reject()/rejectWith(),notify()/notifyWith()
      deferred[tuple[0]] = function(){
        deferred[tuple[0] + "With"](this === deferred ? promise : this, arguments)
        return this
      }
      deferred[tuple[0] + "With"] = list.fireWith
    })

    //deferredç»§æ‰¿promiseçš„æ‰§è¡Œæ–¹æ³•
    promise.promise(deferred)

    //ä¼ é€’äº†å‚æ•°funcï¼Œæ‰§è¡Œ
    if (func) func.call(deferred, deferred)

    //è¿”å›ždeferredå¯¹è±¡
    return deferred
  }

    /**
     *
     * ä¸»è¦ç”¨äºŽå¤šå¼‚æ­¥é˜Ÿåˆ—å¤„ç†ã€‚
       å¤šå¼‚æ­¥é˜Ÿåˆ—éƒ½æˆåŠŸï¼Œæ‰§è¡ŒæˆåŠŸæ–¹æ³•ï¼Œä¸€ä¸ªå¤±è´¥ï¼Œæ‰§è¡Œå¤±è´¥æ–¹æ³•
       ä¹Ÿå¯ä»¥ä¼ éžå¼‚æ­¥é˜Ÿåˆ—å¯¹è±¡

     * @param sub
     * @returns {*}
     */
  $.when = function(sub) {
    var resolveValues = slice.call(arguments), //é˜Ÿåˆ—æ•°ç»„ ï¼Œæœªä¼ å‚æ•°æ˜¯[]
        len = resolveValues.length,//é˜Ÿåˆ—ä¸ªæ•°
        i = 0,
        remain = len !== 1 || (sub && $.isFunction(sub.promise)) ? len : 0, //å­defè®¡æ•°
        deferred = remain === 1 ? sub : Deferred(),//ä¸»def,å¦‚æžœæ˜¯1ä¸ªfnï¼Œç›´æŽ¥ä»¥å®ƒä¸ºä¸»defï¼Œå¦åˆ™å»ºç«‹æ–°çš„Def
        progressValues, progressContexts, resolveContexts,
        updateFn = function(i, ctx, val){
          return function(value){
            ctx[i] = this    //this
            val[i] = arguments.length > 1 ? slice.call(arguments) : value   // val è°ƒç”¨æˆåŠŸå‡½æ•°åˆ—è¡¨çš„å‚æ•°
            if (val === progressValues) {
              deferred.notifyWith(ctx, val)  // å¦‚æžœæ˜¯é€šçŸ¥ï¼Œè°ƒç”¨ä¸»å‡½æ•°çš„é€šçŸ¥ï¼Œé€šçŸ¥å¯ä»¥è°ƒç”¨å¤šæ¬¡
            } else if (!(--remain)) {          //å¦‚æžœæ˜¯æˆåŠŸï¼Œåˆ™éœ€ç­‰æˆåŠŸè®¡æ•°ä¸º0ï¼Œå³æ‰€æœ‰å­deféƒ½æˆåŠŸæ‰§è¡Œäº†ï¼Œremainå˜ä¸º0ï¼Œ
              deferred.resolveWith(ctx, val)      //è°ƒç”¨ä¸»å‡½æ•°çš„æˆåŠŸ
            }
          }
        }

      //é•¿åº¦å¤§äºŽ1ï¼Œ
    if (len > 1) {
      progressValues = new Array(len) //
      progressContexts = new Array(len)
      resolveContexts = new Array(len)

      //éåŽ†æ¯ä¸ªå¯¹è±¡
      for ( ; i < len; ++i ) {
         //å¦‚æžœæ˜¯defï¼Œ
        if (resolveValues[i] && $.isFunction(resolveValues[i].promise)) {
          resolveValues[i].promise()
            .done(updateFn(i, resolveContexts, resolveValues)) //æ¯ä¸€ä¸ªæˆåŠŸ
            .fail(deferred.reject)//ç›´æŽ¥æŒ‚å…¥ä¸»defçš„å¤±è´¥é€šçŸ¥å‡½æ•°,å½“æŸä¸ªå­defå¤±è´¥æ—¶ï¼Œè°ƒç”¨ä¸»defçš„åˆ‡æ¢å¤±è´¥çŠ¶æ€æ–¹æ³•ï¼Œæ‰§è¡Œä¸»defçš„å¤±è´¥å‡½æ•°åˆ—è¡¨
            .progress(updateFn(i, progressContexts, progressValues))
        } else {
          --remain   //éždefï¼Œç›´æŽ¥æ ‡è®°æˆåŠŸï¼Œå‡1
        }
      }
    }

    //éƒ½ä¸ºéždefï¼Œæ¯”å¦‚æ— å‚æ•°ï¼Œæˆ–è€…æ‰€æœ‰å­é˜Ÿåˆ—å…¨ä¸ºéždefï¼Œç›´æŽ¥é€šçŸ¥æˆåŠŸï¼Œè¿›å…¥æˆåŠŸå‡½æ•°åˆ—è¡¨
    if (!remain) deferred.resolveWith(resolveContexts, resolveValues)
    return deferred.promise()
  }

  $.Deferred = Deferred
})(Zepto);

;(function($){
  // Create a collection of callbacks to be fired in a sequence, with configurable behaviour
  // Option flags:
  //   - once: Callbacks fired at most one time.
  //   - memory: Remember the most recent context and arguments
  //   - stopOnFalse: Cease iterating over callback list
  //   - unique: Permit adding at most one instance of the same callback
  $.Callbacks = function(options) {
    options = $.extend({}, options)

    var memory, // Last fire value (for non-forgettable lists)
        fired,  // Flag to know if list was already fired
        firing, // Flag to know if list is currently firing
        firingStart, // First callback to fire (used internally by add and fireWith)
        firingLength, // End of the loop when firing
        firingIndex, // Index of currently firing callback (modified by remove if needed)
        list = [], // Actual callback list
        stack = !options.once && [], // Stack of fire calls for repeatable lists
        fire = function(data) {
          memory = options.memory && data
          fired = true
          firingIndex = firingStart || 0
          firingStart = 0
          firingLength = list.length
          firing = true
          for ( ; list && firingIndex < firingLength ; ++firingIndex ) {
            if (list[firingIndex].apply(data[0], data[1]) === false && options.stopOnFalse) {
              memory = false
              break
            }
          }
          firing = false
          if (list) {
            if (stack) stack.length && fire(stack.shift())
            else if (memory) list.length = 0
            else Callbacks.disable()
          }
        },

        Callbacks = {
          add: function() {
            if (list) {
              var start = list.length,
                  add = function(args) {
                    $.each(args, function(_, arg){
                      if (typeof arg === "function") {
                        if (!options.unique || !Callbacks.has(arg)) list.push(arg)
                      }
                      else if (arg && arg.length && typeof arg !== 'string') add(arg)
                    })
                  }
              add(arguments)
              if (firing) firingLength = list.length
              else if (memory) {
                firingStart = start
                fire(memory)
              }
            }
            return this
          },
          remove: function() {
            if (list) {
              $.each(arguments, function(_, arg){
                var index
                while ((index = $.inArray(arg, list, index)) > -1) {
                  list.splice(index, 1)
                  // Handle firing indexes
                  if (firing) {
                    if (index <= firingLength) --firingLength
                    if (index <= firingIndex) --firingIndex
                  }
                }
              })
            }
            return this
          },
          has: function(fn) {
            return !!(list && (fn ? $.inArray(fn, list) > -1 : list.length))
          },
          empty: function() {
            firingLength = list.length = 0
            return this
          },
          disable: function() {
            list = stack = memory = undefined
            return this
          },
          disabled: function() {
            return !list
          },
          lock: function() {
            stack = undefined;
            if (!memory) Callbacks.disable()
            return this
          },
          locked: function() {
            return !stack
          },
          fireWith: function(context, args) {
            if (list && (!fired || stack)) {
              args = args || []
              args = [context, args.slice ? args.slice() : args]
              if (firing) stack.push(args)
              else fire(args)
            }
            return this
          },
          fire: function() {
            return Callbacks.fireWith(this, arguments)
          },
          fired: function() {
            return !!fired
          }
        }

    return Callbacks
  }
})(Zepto);

function shijian( dd , chushi ){
          
          /*æ—¶é—´è§£æž*/

         if(  typeof chushi === 'undefined' ) chushi = 1;

         dds = dd;

         dd = Math.floor( dd / chushi)

         if( dd < 1 )return Array( '00' , '00' , '00' , '00');
         x =  Math.floor( dd / 3600); 
         wo = ( dd % 3600);
         m = Math.floor( wo /60);
         s = ( dd % 60 );

         ss = ( dds % 100 );

         if( x < 10 ) x = '0' + x;
         if( m < 10 ) m = '0' + m;
         if( s < 10 ) s = '0' + s;
         if( ss < 10 ) ss = '0' + ss;
         return  Array( x , m , s ,ss);

}


function shijian2( dd , chushi ){

        NowTime = new Date();
        var nMS = dd  - NowTime.getTime();
        var nH = Math.floor(nMS / (1000 * 60 * 60)) % 24;
        var nM = Math.floor(nMS / (1000 * 60)) % 60;
        var nS = Math.floor(nMS / 1000) % 60;
        var nMSD = Math.floor(nMS/10 ) % 100;
        var temH= nH>9?nH:'0'+nH;
        var temM= nM>9?nM:'0'+nM;
        var temS= nS>9?nS:'0'+nS;
        var temnMSD= nMSD>9?nMSD:'0'+nMSD;
        return  Array( temH , temM , temS ,temnMSD);



}



function jieshou(result ){

         /*è§£å¯†é€šä¿¡æ•°æ®*/
         
         if(! result.start ){

           layer.msg( LANG.sjnoall ,{ offset :'auto' ,time : 3000});
         
           return false;

         }

         var sign = $.md5( result.data + result.time );

         if(result.sign  != sign){
       
           layer.msg( LANG.sjpohuai ,{ offset :'auto' ,time : 3000});
           return false;
         }

         if(result.start  == '-1'){

           layer.msg( result.msg,{ offset :'auto' ,time : 3000});
           return false;
         }

         result.data =  jQuery.parseJSON( $.base64.decode( result.data ));

         return result;
}



function duqudange ( $cpid , $cpqs , woqushi ){

         $.post( HTTP + "json.php?romd="+(Date.parse(new Date())/1000)+Math.round(Math.random()*100000000),{y:'jiexiao',d:'edit','cpid': $cpid ,'cpqs' : $cpqs },function(rs ){
         
            woqushi( rs );
         
         } );
}


function mycodes( cpid  , cpqs , uid ,huidiaosw){
       
         $.post( HTTP + "json.php?romd="+(Date.parse(new Date())/1000)+Math.round(Math.random()*100000000),{ 'y' :'xymtongji','d':'soso', 'cpid' :cpid ,'cpqs' : cpqs ,'uid' : uid },function(result){

                 DATA =  jieshou( result );
 
                 if( DATA ){
          
                    huidiaosw ( DATA );

                 }
 
         });

}




function user(USER){
          if( USER ){


            if(USER.uid > 0){ 
                
                UID = USER.uid;

                if( $(".m-detail-userCodes-blank").length  > 0){
                
                  mycodes( CPID  , CPQS , UID, huidiaosw );
                
                
                }


            }


          }

}

function gouwuchdu(D){
         /*é€šç”¨è´­ç‰©è½¦è¯»å–*/
         
        if( $(".hidenotice").length > 0 ){
            $(".w-miniCart").show();

            if( D.ornum > 0){

                $(".hidenotice span").html(D.ornum );
                $(".hidenotice span").show();


            }else $(".hidenotice span").hide();

        }
}

function logdenglu(){


    window.location.href= HTTP+'user.php';


}


function allfel(){
    $('.fenleiquan').toggle();
}



function lijiduo( cpid ,num ,lx){
          
          if( !num ) num = NUM;
          if( !lx ) lx = 0;

          window.location.href= HTTP+"ding.php?ac=liji&cpid=" + cpid + '&num=' + num + "&lx="+ lx;
          

}

function gouwulist( xiangouwuche ){

          $.post( HTTP + "json.php?romd="+(Date.parse(new Date())/1000)+Math.round(Math.random()*100000000),{y:'gouwuche',d:'soso'},function(result){

                DATA =  jieshou(result);

                if( DATA ){
                    TIME = DATA.time;
                    var D = DATA.data;
                    if( D ){
                        xiangouwuche(D);
                        user(D.user);
                    }
                }
          }, "json");

}


function addgouwu( huidiaode, cpid  , num , mode , lx){


         gouwuche( huidiaode , cpid  , num , mode , lx );
}


function goumaijilu( CPID , CPQS , PAGE , DNUM ,lx , huidiao ){

       $.post( HTTP + "json.php?romd="+(Date.parse(new Date())/1000)+Math.round(Math.random()*100000000),{y:'goodsjilu',d:'soso','lx':lx,'cpid':CPID,'cpqs':CPQS,'pg':PAGE,'NUM':DNUM},function(result){

                DATA =  jieshou(result);

                if( DATA ){
                    TIME = DATA.time;
                    var D = DATA.data;
                    if( DATA.code == 1 ){
                        huidiao(D.shuju);
                        user(D.user);
                    }else huidiao(null);
                }
          }, "json");
}





function cplist( CPID , PAGE , PX , huidiao ){


          $.post( HTTP + "json.php?romd="+(Date.parse(new Date())/1000)+Math.round(Math.random()*100000000),{y:'cplist',d:'soso','cpid':CPID,'pg':PAGE,'px':PX},function(result){

                DATA =  jieshou(result);

                if( DATA ){
                    TIME = DATA.time;
                    var D = DATA.data;
                    if( DATA.code == 1 ){
                        huidiao(D);
                        user(D.user);
                    }else huidiao(null);
                }
          }, "json");


}


function huouser( PAGE , LX , NUM , huidiao ){


          $.post( HTTP + "json.php?romd="+(Date.parse(new Date())/1000)+Math.round(Math.random()*100000000),{y:'userin',d:'soso','pg':PAGE,'num':NUM,'lx':LX},function(result){

                DATA =  jieshou(result);

                if( DATA ){
                    TIME = DATA.time;
                    var D = DATA.data;

                    if( DATA.code == 1 ){

                        huidiao(D);
                        user(D.user);

                    }else huidiao(null);
                }
          }, "json");


}



function tuigui( PAGE , LX , NUM , huidiao ){


          $.post( HTTP + "json.php?romd="+(Date.parse(new Date())/1000)+Math.round(Math.random()*100000000),{y:'tuigui',d:'soso','pg':PAGE,'num':NUM,'lx':LX},function(result){

                DATA =  jieshou(result);

                if( DATA ){
                    TIME = DATA.time;
                    var D = DATA.data;

                    if( DATA.code == 1 ){

                        huidiao(D);
                        user(D.user);

                    }else huidiao(null);
                }
          }, "json");


}


function userjilu( USERID ,  PAGE , DNUM , lx , huidiao ){

    $.post( HTTP + "json.php?romd="+(Date.parse(new Date())/1000)+Math.round(Math.random()*100000000),{y:'userjilu',d:'soso','uid':USERID,'NUM':DNUM,'pg':PAGE,'lx':lx},function(result){

                DATA =  jieshou(result);

                if( DATA ){
                    TIME = DATA.time;
                    var D = DATA.data;
                    if( DATA.code == 1 ){
                        huidiao(D);
                        user(D.user);
                    }else if( DATA.code == -99 ){

                        window.location.href= HTTP+'user.php';

                    }else huidiao(null);

                    
                }
          }, "json");


}


function gouwuche( huidiaode, cpid  , num , mode , lx ){

         /* è´­ç‰©è½¦ 
            cpid  äº§å“id
            num   æ•°é‡
            lx     0 äº‘å¤Ÿ  1 ç›´é’©
            mode  add ä¸€ç›´åŠ num
            mode  edit ç­‰äºŽnum
            mode  del  åˆ é™¤ äº§å“id
            mode  del  cpid ç­‰äºŽ0 åˆ é™¤æ‰€æœ‰äº§å“ 
           
         */
         if( cpid < 1){
         
             layer.msg( LANG.nocpid ,{ offset :'auto',closeBtn:1, icon: 2 ,time : 3000});

             return false;

         }else if(!num ||  num < 1 ){

             num = NUM;
         }

         if( !mode) mode = 'add';

         if( !lx) lx = 0;

         $.post( HTTP + "json.php?romd="+(Date.parse(new Date())/1000)+Math.round(Math.random()*100000000),{ 'y' :'gouwuche', 'd' :mode , 'l' : lx, 'cpid' : cpid ,'num' : num },function(result){

          DATA =  jieshou(result);

          if( DATA ){

              TIME = DATA.time;

              if(DATA.code == -1 ){

                layer.msg( DATA.msg ,{ offset :'auto' ,time : 3000});

              }else{

                 var D = DATA.data;

                  if( D ){ 


                        huidiaode( cpid , lx);

                        gouwuchdu(D);

                        user(D.user);

                   }
             }
          }

         });
}
