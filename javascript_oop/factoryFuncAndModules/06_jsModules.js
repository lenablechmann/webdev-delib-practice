// an example of a module (revealing module pattern in this case too)
// since it reveals certain members to the scope above

// notice the multiple parantheses
const firstModule = (() => {
    // everything inside this function is private by default, unless it's returned
    const reverseString = (string) => {
        return string.split("").reverse().join("");
    };
    const capitalizeString = (string) => string.toUpperCase();
    const buildIntoSentence = (string) => {
        return console.log(`Hello, ${string}!`);
    };

    // need to return all the private functions as an object
    // as always it's an abbreviation of 
    // reverseString: reverseString, capitalizeString: capitalizeString ... etc
    return {reverseString, capitalizeString, buildIntoSentence};
}) ();

// you can access the module functions like so: 
console.log(firstModule.reverseString("taco"));
console.log(firstModule.capitalizeString("taco"));
firstModule.buildIntoSentence("taco");
