'use strict';

function generate(start_color, end_color, midpoint=1, options={}) {
    const defaultOptions = {
        output: "rgb",
        has_heads: true,
    };

    options = Object.assign({}, defaultOptions, options);

	midpoint = midpoint < 0 ? 0 : midpoint;
	midpoint++;
    const start = hexToRGB(start_color);
    const end = hexToRGB(end_color);

    let result = [];

    const average = end.map((val, i) => ((val - start[i]) / midpoint));

    for (let i = 0; i <= midpoint; i++) {
        let temp = start.map((val, k) => Math.round(val + (average[k] * i)));
        result.push(generateOutput(temp, options.output));
    }

    //Remove input data
    if(!options.has_heads) {
        result.shift();
        result.pop();
    }

    return result;
}

function hexToRGB(hex) {
    return (hex = hex.replace('#', '')).match(new RegExp('(.{'+hex.length/3+'})', 'g')).map(function(l) { return parseInt(hex.length%2 ? l+l : l, 16) })
}

function RGBToHex(rgb) {
    return '#' + rgb.map(x => {
        const hex = x.toString(16)
        return hex.length === 1 ? '0' + hex : hex
      }).join('')
}


function generateOutput(RGBArray, output) {
    if(output == "rgb") {
        return "rgb("+RGBArray.join(',')+")";
    }
    else {
        return RGBToHex(RGBArray);
    }
}

module.exports = generate;
