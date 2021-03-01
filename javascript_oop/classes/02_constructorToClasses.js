// translating the Pet constructor into an ES6 class

class Pet {
    // you MUST create a constructor here, gets invoked immediatelyupon "new"
    constructor(nickname, type) {
        // setting up public properties of the object:
        this.nickname = nickname;
        this.type = type;
        this.likesToBath = false;
    };
    // rewriting methods in a shorter, class based way,
    // can drop function declaration and "this"
    petDescription () {
        return `My pet, ${this.nickname}, is a ${this.type}.`;
    };
    setNickname (newNickname) {
        this.nickname = newNickname;
    };
    setType (newType) {
        this.type = newType;
    }
}

// still using the new keyword to instantiate the class
let pet1 = new Pet('Dory', 'rabbit');
console.log(pet1);
pet1.setNickname('Rory');
console.log('Changed their nickname');
console.log(pet1)