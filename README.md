# Color Gradient

A package for generate colors between two colors

## Installation

```sh
npm install color-gradient --save
```

## Usage

```js
var generate = require("color-gradient");

// generate(start_color, end_color, midpoint, options)
var colors = generate("#fff", "#000", 6, { has_heads: true, output: "rgb" });
```

## Return

```js
["rgb(255,255,255)", "rgb(219,219,219)", ..."rgb(0,0,0)"];
```

## Options

| Option    | Type    | Defalut | Description                           |
| --------- | ------- | ------- | ------------------------------------- |
| output    | String  | 'rgb'   | 'rgb' or 'hex' change output type     |
| has_heads | Boolean | true    | Include input data with start and end |

## Test

```sh
npm test
```

## Todos

- [ ] RGB input support
