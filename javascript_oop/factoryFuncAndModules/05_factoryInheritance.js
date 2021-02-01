// the different types of handling inheritance in javascript
// source: https://medium.com/javascript-scene/3-different-kinds-of-prototypal-inheritance-es6-edition-32d777fa16c9

/* --- DELEGATION INHERITANCE --- */
// this sort of inheritance doesn't preserve states as it changes all members of the prototype
// object with a function inside
const greetingsObject = {
    hello () {
        return `Greetings, my name is ${this.name}`;
    }
};

// factory function, the comma operator lets it evaluate multiple expressions 
// giving the objects created with this factory the same prototype as the greetingsObj
// Object.assign(target, source)  copies property values into target and returns it
const greeterFunction = (name) => Object.assign(Object.create(greetingsObject), {
    name
});

const bella = greeterFunction("Bella");
// console.log(bella.hello()); // Greetings, my name is Bella.

/* --- CONCATENATIVE INHERITANCE --- */
// copies the properties from one obj onto another, doesn't keep a reference between the two
// great for storing states
const george = Object.assign({}, greetingsObject, {name: 'George'});
console.log(george.hello()); // Greetings, my name is George
