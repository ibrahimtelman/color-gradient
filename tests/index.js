const generate_colors = require('../src/index');

test('add generate color between white and black', () => {
    expect(JSON.stringify(generate_colors('#fff', '#000'))).toBe(JSON.stringify([
        "rgb(255,255,255)",
        "rgb(127.5,127.5,127.5)",
        "rgb(0,0,0)"
    ]))
});
