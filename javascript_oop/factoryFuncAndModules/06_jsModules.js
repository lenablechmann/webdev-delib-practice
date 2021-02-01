// an example of a module

// notice the multiple parantheses
const firstModule = (() => {
    const reverseString = (string) => {
        return string.split("").reverse().join("");
    };
    const capitalizeString = (string) => string.toUpperCase();
    const buildIntoSentence = (string) => {
        return console.log(`Hello, ${string}!`);
    };

    // need to return all the private functions
    return {reverseString, capitalizeString, buildIntoSentence};
}) ();

// you can access the module functions like so: 
console.log(firstModule.reverseString("taco"));
console.log(firstModule.capitalizeString("taco"));
firstModule.buildIntoSentence("taco");
