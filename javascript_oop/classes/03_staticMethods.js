// Adding static class methods,
// which will belong to the entire class and not just that specific instance

class Pet {
    static value () {
        return 'happiness';
    }
    static purpose () {
        // "this" points to the class
        return `The purpose of pets is ${this.value()}`;
    }

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
console.log(Pet.value()); // happiness
console.log(Pet.purpose()); // happiness