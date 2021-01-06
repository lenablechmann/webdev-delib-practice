// practicing basic object creation and calling
// objects can have everything: strings, numbers, arrays and even functions(methods)
// they are keyed collections of data
const person = {firstName: "Lena", // property (key:value pair)
                lastName: "Blechmann",
                age: "32",
                favColors: ["blue", "navy", "blue jay", "maroon", "firebrick"],
                // functions in objects are called methods.
                personInfo: function sayPersonInfo() {
                    // this refers to the context the method is going to be used in 
                    // so whatever object will be to be to the left of object
                    console.log(this.firstName + " " + this.lastName + " " + "is " + this.age + " years old.");
                    console.log(`Her favorite colors are: ${this.favColors[0]}, ${this.favColors[1]} and ${this.favColors[2]}.` )
                }
};

// calling the object + method
//person.personInfo();

// following https://javascript.info/object
// objects can be created via two syntaxes
let something = new Object(); // object constructor
let anotherThing = {}; // object literal

// adding key value pairs:
anotherThing = {user: "John",
                age: "30",
                adminStatus: true, 
                "likes birds": false, //multiword keywords gotta be in quotes
                };
                
// removing properties
delete anotherThing.age;

// accessing multiword property via square brackets [], no dot after object
console.log(anotherThing["likes birds"]);