/* Factory functions set up a new object without the use of
    the "new" keyword.  */

const appleFactory = (color, weight) => {
    const adApple = () => {console.log("An apple a day, keeps the doctor away.")};
    // shortened version of {color: color, weight: weight, adApple: adApple}
    return {color, weight, adApple};
};

const myFavApple = appleFactory("red", 160);

console.log(myFavApple.color); // prints "red"
myFavApple.adApple(); // prints: An apple a day, keeps the doctor away