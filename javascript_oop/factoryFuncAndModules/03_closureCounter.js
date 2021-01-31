// functions retain their scope and values even when they are passed around
const counterFactory = () => {
    let count = 0;
    // returning a function as well
    return () => {
        console.log(count);
        count++;
    }
}
// using that factory to create an obj
let counter = counterFactory();
// calling the return value which is a funtion btw
/*
counter(); // 0
counter(); // 1
counter(); // 2
*/

/* ----- An example of private functions ----- */

// factory function that gets passed a string as a parameter
const factoryFunc = (word) => {
    // private function that can only be seen inside this factory function
    // wont work if you put the word.toUpperCase() in {}
    const capitalizePrivately = () => word.toUpperCase();
    
    const printWord = () => {
        //printWord can access the cap function
        console.log(`<3<3<3 ${capitalizePrivately()} <3<3<3`)
    }
    return { printWord };
};

const dork = factoryFunc('dork');

dork.printWord(); // will print <3<3<3 dork <3<3<3
dork.capitalizePrivately(); // Error, since global scope has no access to the func
printWord(); // error, cause it's a method

