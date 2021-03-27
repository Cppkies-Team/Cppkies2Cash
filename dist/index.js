(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Cppkies2Cash = {}));
}(this, (function (exports) { 'use strict';

	/**
	 * A small implementation of node's EventEmitter with return value support
	 */
	class ReturnableEventEmitter {
	    constructor() {
	        this._events = {};
	    }
	    /**
	     * Registers an event listener which is called each time the event is emitted
	     * @param name Name of the hook
	     * @param func The event listener function
	     */
	    on(name, func) {
	        if (!this._events[name]) {
	            this._events[name] = [func];
	        }
	        else
	            this._events[name].push(func);
	    }
	    /**
	     * Registers an event listener which is called for the first time the event is emitted
	     * @param name Name of the hook
	     * @param func The event listener function
	     */
	    once(name, func) {
	        this.on(name, arg => {
	            this.off(name, func);
	            return func(arg);
	        });
	    }
	    /**
	     * Removes an event listener which was registered before
	     * @param name Name of the hook
	     * @param func The event listener function
	     */
	    off(name, func) {
	        this._events[name].splice(this._events[name].indexOf(func), 1);
	    }
	    // Sorry for the minor type mess, I blame typescript
	    /**
	     * Emits the event, triggering all registered event listeners under the event name and modifying the given value
	     * @param name The name of the event
	     * @param startingValue The starting value for the listeners
	     */
	    emit(name, ...startingValue) {
	        let retVal = startingValue[0];
	        if (!this._events[name])
	            this._events[name] = [];
	        for (const func of this._events[name])
	            retVal = func(retVal);
	        return retVal;
	    }
	    /**
	     * Emits the event, triggering all registered event listeners under the event name and *not* modifying the given value
	     * @param name The name of the event
	     * @param startingValue The starting value for the listeners
	     */
	    constEmit(name, ...startingValue) {
	        if (!this._events[name])
	            this._events[name] = [];
	        for (const func of this._events[name])
	            func(startingValue[0]);
	    }
	}

	/**
	 * A helper function which converts a common value to a value
	 * @param value The common value to convert
	 * @helper
	 */
	/**
	 * A helper function which escapes special regex characters.
	 * @param str The string to escape
	 * @helper
	 */
	function escapeRegExp(str) {
	    // eslint-disable-next-line no-useless-escape
	    return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
	}
	/**
	 * A helper helper function, which does a single inject to code
	 * @param source The code to perform the inject on
	 * @param config The configuration of the inject
	 * @helper
	 * @helperhelper
	 */
	function doSingleInject(source, config) {
	    const sliceMode = config[0] === null;
	    // Do this to mute typescript silly wrong errors
	    let regex = new RegExp("");
	    if (config[0] !== null) {
	        if (typeof config[0] === "string")
	            regex = new RegExp(escapeRegExp(config[0]), "g");
	        else
	            regex = config[0];
	        if (!regex.test(source))
	            console.warn("Nothing to inject.");
	    }
	    const findStart = /(\)[^{]*{)/;
	    const findEnd = /(}?)$/;
	    switch (config[2]) {
	        case "before":
	            if (sliceMode)
	                source = source.replace(findStart, `$1${config[1]}`);
	            else
	                source = source.replace(regex, `${config[1]}${config[0]}`);
	            break;
	        case "replace":
	            if (sliceMode)
	                source = config[1];
	            else
	                source = source.replace(regex, config[1]);
	            break;
	        case "after":
	            if (sliceMode)
	                source = source.replace(findEnd, `${config[1]}$1`);
	            else
	                source = source.replace(regex, `${config[0]}${config[1]}`);
	            break;
	        default:
	            throw new Error('where Parameter must be "before", "replace" or "after"');
	    }
	    return source;
	}
	/**
	 * A helper function which replaces(or appends) code in a function, returning the new function, and it's eval free!
	 * @param func The source function
	 * @param injections The injections to apply, the parameters of an injection, in order: `source`, `target`, `where`
	 * @param context The optional context to use
	 * @helper
	 */
	function injectCodes(func, injections, context = {}) {
	    let newStr = func.toString();
	    for (const injection of injections)
	        newStr = doSingleInject(newStr, injection);
	    const newFunc = Function(...Object.keys(context), `return (${newStr})`)(...Object.values(context));
	    newFunc.prototype = func.prototype;
	    return newFunc;
	}

	const hooks = new ReturnableEventEmitter();
	const on = hooks.on.bind(hooks);
	function createHooks(hooks) {
	    // @ts-expect-error Typescript doesn't like assigning to global classes
	    Coin = injectCodes(Coin, [
	        ["trail=1", 'trail=__C2C_INTERNAL__.hooks.emit("trail", 1)', "replace"],
	        [
	            "pic['coin3.png']",
	            "__C2C_INTERNAL__.hooks.emit(\"coinImageResolve\", pic['coin3.png'])",
	            "replace",
	        ],
	    ]);
	    window.__C2C_INTERNAL__ = { hooks };
	    return hooks;
	}

	// Dumb dts-bundle-generator
	createHooks(hooks);

	exports.hooks = hooks;
	exports.on = on;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=index.js.map
