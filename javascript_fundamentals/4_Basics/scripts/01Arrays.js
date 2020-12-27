// following https://www.w3schools.com/js/js_arrays.asp

function logArray() {
    // Arrays in JS are actually objects that hold lists of items kinda
    let exampleArray = ["first", "second", "third"];
    console.log(exampleArray);

    // You can also create Arrays using the keyword new, but the first method is preferred
    let newArray = new Array("another", "list", "of", "strings");
    console.log(newArray);

    // to access an array element use [position]
    console.log(newArray[0]);
    console.log(newArray[2]);
    console.log(newArray[4]); // out of bounds -> undefined

    // printing the array to the html para, puts "another,list,of,strings"
    document.getElementById("js-array-creation").innerHTML = newArray;
}

function objectifyArray() {
    // That's a simple array
    let personArray = ["John", "Doe", 46];

    // But this here is an object
    let personObject = {firstName:"Joe", lastName:"Doe", age: 42};
    // prints John
    console.log(personObject.firstName);

    // Generally, if you want to access elements via number-positions, you use arrays. 
    // If with .strings, use classic objects. The basic function is the same
    personObject.firstName = personArray[0];
    console.log(personObject.firstName); // Changed name
}

function actionArray() {
    let trees = ["oak", "maple", "pine", "birch"];
    
    // length property returns number of elements
    console.log("The length of the trees array is " + trees.length);
    // to access the last element of the array:
    console.log("The last element of the array is " + trees[trees.length - 1]);

    // You can join all elements of the array with join( "separator") into a string
    console.log(trees.join(" "));
    console.log(trees); // still an array
    // Or use toString
    console.log(trees.toString());

    // Adding new elements to the array either with push or array.length:
    trees[trees.length] = "sakura";
    console.log(trees);
    trees.push("apple");
    console.log(trees);

    // this same way you can pop the last element off the array:
    console.log(trees.pop()); // logs apple

    // For the first element you gotta use shift though to remove em
    console.log(trees.shift()); // removes oak
    // add a new element to the first spot with unshift
    console.log(trees.unshift("chestnut")); // returns new array len
}

function spliceAndCatArray() {
    let veggies = ["potato", "celeriac", "broccoli", "cabbage", "carrot"];

    // with splice(startPosition, deleteSoMany, elements) you can add new elements into an array
    veggies.splice(2,0, "cucumber", "spinach", "yam");
    console.log(veggies);

    // then delete elements too
    veggies.splice(4, 2);
    console.log(veggies);
    
    let fruits = ["kiwi", "apple", "orange"];
    let berries = ["strawberry", "tomato"];
    // concat them arrays into a brand new array
    let food = veggies.concat(fruits, berries);
    console.log(food);

    // if you want to copy one array element into a new array, use slice(start, finish)
    let oneFood = food.slice(5,6);
    console.log(oneFood);
}