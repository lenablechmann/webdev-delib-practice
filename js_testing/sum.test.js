// define the file it's gonna test. ./ if in the same folder
const sum = require('./sum');

test('adds 1+2, expects 3 as output', () => {
    expect(sum(1,2)).toEqual(3);
});

// run in the console: npm init -y
// to get the starting json, where you change the script value to "jest --coverage"
// then run npm test in the console