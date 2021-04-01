# Hooks

Cppkies2Cash adds most of the custom APIs through hooks.

Cppkies2Cash creates the hooks by injecting code into functions.

## Parameters and example

Parameters:

1. `name` - `string` Name of the hook, use one of the names above as valid names
2. `func` - `(src: T) => T` The function to execute when the hook triggers, must pass the type of value as given, gives value can be seen in parentheses

For example:

```ts
Cppkies2Cash.on("trail", mult => mult * 2)
```

## Hooks List

### Generic Hooks

- `trail` - Calculates the amount of trail to draw behind a coin (`number`)
- `stream` - Calculates the amount of coin streams to have (`number`)
- `coinImageResolve` - Resolves which coin image to use (`HTMLImageElement`)
- `coin` - Called when a coin is created (`Coin`\*)
- `logic` - Called when a coin is calculating new positions (`Coin`\*)
- `exchangeRate` - The amount of coins to get per cookie, called when the button is pressed (`number`)
\* The function doesn't have to return anything
The hooks can be accessed via `Cppkies2Cash.on` or `Cppkies2Cash.hooks.on`

