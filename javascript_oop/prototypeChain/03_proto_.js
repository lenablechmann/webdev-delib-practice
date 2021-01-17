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


/* TASK 2 
    Use __proto__ to assign prototypes in a way that 
    any property lookup will follow the path:
    pockets → bed → table → head. 
    For instance, pockets.pen should be 3 (found in table), 
    and bed.glasses should be 1 (found in head).
    
    Answer the question: 
    is it faster to get glasses as pockets.glasses or head.glasses? 
    head.
    My Answer: head.glasses should be faster, since the property is immediately found in the
    object and you don't have to travel up the prototype chain
*/

let head = {
    glasses: 1
  };
  
  let table = {
    pen: 3,
    __proto__: head
  };
  
  let bed = {
    sheet: 1,
    pillow: 2,
    __proto__: table
  };
  
  let pockets = {
    money: 2000,
    __proto__: bed
  };

  console.log(pockets.pen); // 3
  console.log(bed.glasses); // 1