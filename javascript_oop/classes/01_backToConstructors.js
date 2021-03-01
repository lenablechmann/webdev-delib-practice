/*  Before Classes in ES6 there already were function
    constructors in ES5. Functions that create objects.
    Following this video for recap: https://youtu.be/wQ1MuExYzko
    Function constructors and classes are kinda the same
*/

function Pet (nickname, type) {
    // setting up public properties of the object:
    this.nickname = nickname;
    this.type = type;
    this.likesToBath = false;

    // giving it public methods:
    this.petDescription = function () {
        return `My pet, ${this.nickname}, is a ${this.type}.`;
    };
    this.setNickname = function (newNickname) {
        // reponsible for reassigning the first name:
        this.nickname = newNickname;
    };
    this.setType = function (newType) {
        // reponsible for reassigning the pet type:
        this.type = newType;
    }
    // if you want to make a property private, you can hide it behind a let or const declaration
    // it won't be accessible unless you open it up in a method
    const privateInfo = 'Likes belly scratches.';
    this.getPrivateInfo = function () {
        return privateInfo;
    }
};

// creating an example

let pet1 = new Pet('Dory', 'rabbit');
console.log(pet1);
pet1.setNickname('Rory');
console.log('Changed their nickname');
console.log(pet1);
console.log(pet1.getPrivateInfo);
