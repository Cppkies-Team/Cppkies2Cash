# Examples

(Note: You can combine these mods in any combination!)

## Double gravity

This mod alters the gravity of coins so half the coin go upsidedown.

```js
{
let id = 0
Cppkies2Cash.on("coin", coin => coin.id = id++)
Cppkies2Cash.on("coinLogic", coin => coin.yd += coin.id % 2 === 0 ? -4 : 0)
}
```

## Cash2Cookies

This mod will make you, instead of redeeming coins, redeeming cookies! The exchange rate is also flipped to match up.

```js
{
	const image = new Image()
	image.src = "https://orteil.dashnet.org/cookieclicker/img/smallCookies.png"
	Cppkies2Cash.on("coinImageResolve", () => image)
	Cppkies2Cash.on("exchangeRate", val => 1 / val)
}
```

## Supergreed

As you gain more and more cash, you get more and more greedy, you start fainting, things start doubling...

```js
Cppkies2Cash.on("trail", val => val * Math.log2(stream))
```

## More streams

This mod, you guessed it, adds more streams!

```js
Cppkies2Cash.on("stream", val => val + Math.floor(Math.log10(cash/1000000) * 2))
```
