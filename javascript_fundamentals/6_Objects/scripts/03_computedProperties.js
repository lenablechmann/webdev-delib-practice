// properties can be entered dynamically as well:
// user string is set to a var
let fruit = prompt("Enter some fruit: ", "apple");

let basket ={
    // using user string to set key in a newly created object
    [fruit]: 13, 
}
// accessing the newly created property
console.log(basket[fruit]);

// we could create completely dynamic objects with functions

function createFancyObject (name, age, hobby) {
    // creates an object with keys mentioned as parameters
    return {
        // could also just write name instead of name:name and just generally mix n match
        name: name,
        age: age,
        hobby: hobby,
    };
}
// creating the object "user"
let user = createFancyObject("Alva", 23, "gaming");
console.log(user.hobby);

function createSomething (fruit, weight) {
    // mix n matching
    return {
        fruit,
        color: "blue",
        weight,
    };
}

let something = createSomething("orange", 103);
console.log(something.weight);