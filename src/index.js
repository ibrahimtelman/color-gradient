'use strict';

function generate(start_color, end_color, midpoint=2) {
    const start = hexToRGB(start_color);
    const end = hexToRGB(end_color);

    let result = [];

    const average = end.map((val, i) => ((val - start[i]) / midpoint));

    for (let i = 0; i <= midpoint; i++) {
        let temp = start.map((val, k) => (val + (average[k] * i)));
        result.push("rgb("+temp.join(',')+")");
    }

    return result;
}

function hexToRGB(hex) {
    return (hex = hex.replace('#', '')).match(new RegExp('(.{'+hex.length/3+'})', 'g')).map(function(l) { return parseInt(hex.length%2 ? l+l : l, 16) })
}

module.exports = generate;
