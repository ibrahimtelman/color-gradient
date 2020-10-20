[![npm](https://img.shields.io/npm/v/color-gradient)](https://www.npmjs.com/package/color-gradient)
[![npm bundle size](https://img.shields.io/bundlephobia/min/color-gradient?label=code-size)](https://github.com/ibrahimtelman/color-gradient) 
[![npm](https://img.shields.io/npm/dt/color-gradient)](https://github.com/ibrahimtelman/color-gradient) 
[![GitHub](https://img.shields.io/github/license/ibrahimtelman/color-gradient)](https://github.com/ibrahimtelman/color-gradient) 

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
var colors = generate("#ffffff", "#000000", 6, { has_heads: true, output: "rgb" });
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
