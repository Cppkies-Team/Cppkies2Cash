// Dumb dts-bundle-generator
// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="./typings.d.ts" />

import hooks, { createHooks } from "./hooks"

createHooks(hooks)

export { default as hooks, on } from "./hooks"
