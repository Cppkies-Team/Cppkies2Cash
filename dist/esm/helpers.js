/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function e(e,r){for(var t=0,n=r.length,o=e.length;t<n;t++,o++)e[o]=r[t];return e}function r(e){return e instanceof Function?e():e}function t(e){return e.replace(/([.*+?^=!:${}()|\[\]\/\\])/g,"\\$1")}function n(e,r){var n=null===r[0],o=new RegExp("");null!==r[0]&&((o="string"==typeof r[0]?new RegExp(t(r[0]),"g"):r[0]).test(e)||console.warn("Nothing to inject."));switch(r[2]){case"before":e=n?e.replace(/(\)[^{]*{)/,"$1"+r[1]):e.replace(o,""+r[1]+r[0]);break;case"replace":e=n?r[1]:e.replace(o,r[1]);break;case"after":e=n?e.replace(/(}?)$/,r[1]+"$1"):e.replace(o,""+r[0]+r[1]);break;default:throw new Error('where Parameter must be "before", "replace" or "after"')}return e}function o(r,t,o,a,c){void 0===c&&(c={});var p=Function.apply(void 0,e(e([],Object.keys(c)),["return ("+n(r.toString(),[t,o,a])+")"])).apply(void 0,Object.values(c));return p.prototype=r.prototype,p}function a(r,t,o){void 0===o&&(o={});for(var a=r.toString(),c=0,p=t;c<p.length;c++){a=n(a,p[c])}var l=Function.apply(void 0,e(e([],Object.keys(o)),["return ("+a+")"])).apply(void 0,Object.values(o));return l.prototype=r.prototype,l}export{t as escapeRegExp,r as getValue,o as injectCode,a as injectCodes};
