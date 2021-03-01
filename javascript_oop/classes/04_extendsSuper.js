/*  Learning to use the "extends" and "super" keywords
    They allow you to use multiple classes together
*/

class Pet {
    static value () {
        return 'happiness';
    }
    static purpose () {
        return `The purpose of pets is ${this.value()}`;
    }

    constructor(nickname, type) {
        this.nickname = nickname;
        this.type = type;
        this.likesToBath = false;
    };
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

// a similar class as a pet, but will like water
// will inherit from the Pet class
class AquaPet extends Pet {
    constructor(nickname, type, waterType) {
        // super calls the method from the class it inherits/extends from
        // so it will call the constructor from the Pet class
        super(nickname, type);
        this.likesToBath = true;
        this.waterType = waterType;
    };
    setWaterType(waterType){
        this.waterType = waterType;
    }
}

let pet2 = new AquaPet('Steve', 'fish', 'salty');
console.log(pet2);