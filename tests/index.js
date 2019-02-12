const generate_colors = require('../src/index');

test('add generate color between white and black', () => {
    expect(JSON.stringify(generate_colors('#fff', '#000'))).toBe(JSON.stringify([
        "rgb(255,255,255)",
        "rgb(128,128,128)",
        "rgb(0,0,0)"
    ]))
});


test('output type hex', () => {
    const options = {
        output: "hex"
    };

    expect(JSON.stringify(generate_colors('#fff', '#000', 1, options)))
        .toBe(JSON.stringify([
            "#ffffff", 
            "#808080", 
            "#000000"
        ]));
})

test('Return just new colors', () => {
    const options = {
        has_heads: false
    };

    expect(JSON.stringify(generate_colors('#fff', '#000', 1, options)))
        .toBe(JSON.stringify([ 
            "rgb(128,128,128)"
        ]));
})