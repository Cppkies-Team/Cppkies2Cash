# Setup

There are 2 ways of using Cppkies2Cash, installing with NPM or manually importing.

## Using NPM - JS or TS

Using Cppkies2Cash via NPM is the recommended way of using Cppkies2Cash, since you can split your code into files, use typescript, and have IDE autocompletion.

To use Cppkies2Cash using NPM, you must install it first:

```sh
npm i cppkies2cash
# Or if you are using yarn...
yarn add cppkies2cash
```

Then you can use a bundler, like Webpack or Rollup, to bundle them.

```js
import { on } from "cppkies2cash"
on("trail", val => val * 2)
```

## Manually importing - JS

Importing Cppkies2Cash through `Game.LoadMod` is not recommended since you can't split your code into multiple files, use typescript, or have IDE autocompletion. This is recommended only if the mod is really small.

To import it, you need to start your mod with

```ts
{
	const js = document.createElement("script")
	js.src = "https://unpkg.com/cppkies2cash"
	document.head.appendChild(js)
}
```

For example:

```ts
{
	const js = document.createElement("script")
	js.src = "https://unpkg.com/cppkies2cash"
	document.head.appendChild(js)
}
if (!window.CPPKIES2CASH_ONLOAD) CPPKIES2CASH_ONLOAD = []
CPPKIES2CASH_ONLOAD.push(() => {
	Cppkies2Cash.on("trail", val => val * 2)
})
```
