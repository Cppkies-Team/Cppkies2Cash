/* eslint-disable no-var */
declare function l(what: string): Element

declare function Beautify(what: number, floats: number): string

type PseudoNull = 0

type PseudoBoolean = 0 | 1

declare class Loader {
	constructor()
	/**
	 * The amount of loading assets
	 */
	loadingN: number

	assets: undefined[] & Record<string, HTMLImageElement>

	/**
	 * The prefix to all assets
	 */
	domain: string
	/**
	 * A callback to when all assets is loaded
	 */
	loaded: PseudoNull | (() => void)
	/**
	 * A pseudoboolean, is true when all assets are loaded for the first time
	 */
	doneLoading: PseudoBoolean
	/**
	 * Loads assets
	 * @param assets The iterable of strings to get asset names from
	 */
	Load: (assets: string[]) => void
	/**
	 * An internal callback function
	 */
	onLoad: (e: Event) => void
	/**
	 * Returns the progress of loading all assets
	 */
	getProgress: () => number
}

declare var ready: PseudoBoolean

declare function init(): void

declare var cashDiv: HTMLElement

declare var canvas: HTMLCanvasElement

declare var ctx: CanvasRenderingContext2D

declare var T: number

declare function sortMap(a: Coin, b: Coin): -1 | 0 | 1

declare var redeeming: PseudoBoolean

declare var on: PseudoBoolean

declare function redeem(): void

declare var cash: number

declare var Coins: Coin[]

declare class Coin {
	constructor()
	x: number
	y: number
	z: number
	r: number
	xd: number
	yd: number
	zd: number
	rd: number
	draw: (this: this) => void
	logic: (this: this) => void
}

declare var stream: number

declare var streamT: number

declare function loop(): void

declare function launch(): void

declare var toLoad: string[]

declare var loader: Loader

declare var pic: Loader["assets"]

/* eslint-enable no-var */
