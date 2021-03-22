import { ReturnableEventEmitter } from "./lib/eventemitter"
import { injectCode } from "./helpers"

type Hooks = ReturnableEventEmitter<{
	trail: [number, number]
}>

declare global {
	interface Window {
		__C2C_INTERNAL__: { hooks: Hooks }
	}
}

const hooks: Hooks = new ReturnableEventEmitter()

export function createHooks(hooks: Hooks): Hooks {
	// @ts-expect-error Typescript doesn't like assigning to global classes
	Coin = injectCode(
		Coin,
		"trail=1",
		'trail=__C2C_INTERNAL__.hooks.emit("trail", 1)',
		"replace"
	)
	window.__C2C_INTERNAL__ = { hooks }
	return hooks
}

export default hooks
