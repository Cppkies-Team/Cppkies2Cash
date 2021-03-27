import { ReturnableEventEmitter } from "./lib/eventemitter"
import { injectCodes } from "./helpers"

type Hooks = ReturnableEventEmitter<{
	trail: [number, number]
	coinImageResolve: [HTMLImageElement, HTMLImageElement]
	coin: [Coin, void]
	stream: [number, number]
	coinLogic: [Coin, void]
}>

declare global {
	interface Window {
		__C2C_INTERNAL__: { hooks: Hooks }
	}
}

const hooks: Hooks = new ReturnableEventEmitter()
export const on = hooks.on.bind(hooks)

export function createHooks(hooks: Hooks): Hooks {
	// @ts-expect-error Typescript doesn't like assigning to global classes
	Coin = injectCodes(Coin, [
		["trail=1", 'trail=__C2C_INTERNAL__.hooks.emit("trail", 1)', "replace"],
		[
			"pic['coin3.png']",
			"__C2C_INTERNAL__.hooks.emit(\"coinImageResolve\", pic['coin3.png'])",
			"replace",
		],
		[null, ';\n__C2C_INTERNAL__.hooks.constEmit("coin", this)', "after"],
		[
			"if (this.y>windowH+200) Coins.splice(Coins.indexOf(this),1)",
			'__C2C_INTERNAL__.hooks.constEmit("coinLogic", this);\n',
			"before",
		],
	])
	// @ts-expect-error Typescript doesn't like assigning to global functions
	loop = injectCodes(loop, [
		[
			"stream+=(streamT-stream)*0.005;",
			'streamT = __C2C_INTERNAL__.hooks.emit("stream", streamT);\n',
			"before",
		],
	])
	window.__C2C_INTERNAL__ = { hooks }
	return hooks
}

export default hooks
