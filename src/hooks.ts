import { ReturnableEventEmitter } from "./lib/eventemitter"
import { injectCodes } from "./helpers"

type Hooks = ReturnableEventEmitter<{
	trail: [number, number]
	coinImageResolve: [HTMLImageElement, HTMLImageElement]
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
	])
	window.__C2C_INTERNAL__ = { hooks }
	return hooks
}

export default hooks
