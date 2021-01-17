// coding along https://javascript.info/prototype-inheritance
// not for best practices (apparently you don't go around and use __proto__),
// but more for understanding

// Task 1
// Here’s the code that creates a pair of objects, then modifies them.
// Which values are shown in the process?

let animal = {
  jumps: null
};
let rabbit = {
  __proto__: animal,
  jumps: true
};

console.log( rabbit.jumps ); // should be "true" as it's first in the chain

delete rabbit.jumps;

console.log( rabbit.jumps ); //  should be null, as the rabbit jumps got deleted

delete animal.jumps;

console.log( rabbit.jumps ); // should be undefined