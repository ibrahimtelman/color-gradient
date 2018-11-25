# Color Gradient

A package for generate colors between two colors

## Installation

```sh
npm install color-gradient --save
```

## Usage

```js
var generate = require("color-gradient");

var colors = generate("#fff", "#000", 6);
```

## Return

```js
[
  "rgb(255,255,255)", 
  "rgb(219,219,219)", 
  ... 
  "rgb(0,0,0)"
]
```

## Test

```sh
npm test
```

## Todos

- [ ] RGB input support
- [ ] Optional RGB and HEX output support
