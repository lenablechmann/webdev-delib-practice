// in Js you could access properties that don't even exist:
const myObj = {
    plant: "peace lily",
    height: 89,
    age: 2,
}
console.log(myObj.hobbies); //returns undefined
console.log(myObj.interests === undefined); // returns true

// you could even check it with "in" (syntax: "property" in objectName)
// don't forget the quotes
console.log("age" in myObj); // returns true
console.log("color" in myObj); //returns false