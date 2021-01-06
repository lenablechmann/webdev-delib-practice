// practicing basic object creation and calling
// objects can have everything: strings, numbers, arrays and even functions(methods)
const person = {firstName: "Lena",
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
person.personInfo();