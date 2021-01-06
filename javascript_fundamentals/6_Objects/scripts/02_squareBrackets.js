// an example to show off multiword keywords
let testObject = {firstName: "Allie",
                  height: 160,
                  weight: 140,
                  hobbies: ["skydiving", "rock climbing", "swimming"],
                  "favorite tv shows": ["the wire", "shield", "true detective"],
};
console.log("Current state of testObject: " + testObject.firstName);

// add new property
testObject["likes cats"] = true;
console.log("testObject after adding 'likes cats': " + testObject.firstName + " " + testObject["likes cats"]);

// you could also access it after setting a variable
// so that keys could be dynamic and entered through users
let key = "likes cats";
console.log(testObject[key]);

// but it won't work with a dot:
console.log(testObject.key); // undefined

// example with user input
let userKey = prompt("What do you wish to know about testObject? ", "firstName");
// for some reason wont work with formatted string
alert(testObject[userKey]);

