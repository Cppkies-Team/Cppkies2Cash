!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).Cppkies2Cash={})}(this,(function(e){"use strict";
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
function t(e,t){for(var n=0,o=t.length,r=e.length;n<o;n++,r++)e[r]=t[n];return e}function n(e,t){var n=null===t[0],o=new RegExp("");null!==t[0]&&((o="string"==typeof t[0]?new RegExp(t[0].replace(/([.*+?^=!:${}()|\[\]\/\\])/g,"\\$1"),"g"):t[0]).test(e)||console.warn("Nothing to inject."));switch(t[2]){case"before":e=n?e.replace(/(\)[^{]*{)/,"$1"+t[1]):e.replace(o,""+t[1]+t[0]);break;case"replace":e=n?t[1]:e.replace(o,t[1]);break;case"after":e=n?e.replace(/(}?)$/,t[1]+"$1"):e.replace(o,""+t[0]+t[1]);break;default:throw new Error('where Parameter must be "before", "replace" or "after"')}return e}function o(e,o,r){void 0===r&&(r={});for(var i=e.toString(),s=0,a=o;s<a.length;s++){i=n(i,a[s])}var c=Function.apply(void 0,t(t([],Object.keys(r)),["return ("+i+")"])).apply(void 0,Object.values(r));return c.prototype=e.prototype,c}var r=new(function(){function e(){this._events={}}return e.prototype.on=function(e,t){this._events[e]?this._events[e].push(t):this._events[e]=[t]},e.prototype.once=function(e,t){var n=this;this.on(e,(function(o){return n.off(e,t),t(o)}))},e.prototype.off=function(e,t){this._events[e].splice(this._events[e].indexOf(t),1)},e.prototype.emit=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var o=t[0];this._events[e]||(this._events[e]=[]);for(var r=0,i=this._events[e];r<i.length;r++){var s=i[r];o=s(o)}return o},e.prototype.constEmit=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];this._events[e]||(this._events[e]=[]);for(var o=0,r=this._events[e];o<r.length;o++){var i=r[o];i(t[0])}},e}()),i=r.on.bind(r);!function(e){Coin=o(Coin,[["trail=1",'trail=__C2C_INTERNAL__.hooks.emit("trail", 1)',"replace"],["pic['coin3.png']","__C2C_INTERNAL__.hooks.emit(\"coinImageResolve\", pic['coin3.png'])","replace"],[null,';\n__C2C_INTERNAL__.hooks.constEmit("coin", this)',"after"],["if (this.y>windowH+200) Coins.splice(Coins.indexOf(this),1)",'__C2C_INTERNAL__.hooks.constEmit("coinLogic", this);\n',"before"]]),loop=o(loop,[["stream+=(streamT-stream)*0.005;",'streamT = __C2C_INTERNAL__.hooks.emit("stream", streamT);\n',"before"]]),window.__C2C_INTERNAL__={hooks:e}}(r),e.hooks=r,e.on=i,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=index.js.map
