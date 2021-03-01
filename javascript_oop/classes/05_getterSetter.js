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
    set fullName (string) {
        // setting its properties in one go
        const info = string.split(' the ');
        this.nickname = info[0];
        this.type = info[1];
    }
}

// still using the new keyword to instantiate the class
let pet1 = new Pet('Dory', 'rabbit');
// using the set method
pet1.fullName = "Lory the birb.";
console.log(pet1);
// console.log(Pet.value()); // happiness

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
    // method behaves like a property thanks to "get"
    get biography() {
        const bio = `${this.nickname} is a ${this.type} which lives in ${this.waterType} waters.`;
        return bio;
    }
}

let pet2 = new AquaPet('Steve', 'fish', 'salty');

// don't need no () after .biography, using the get method
console.log(pet2.biography)// Steve is a fish which lives in salty waters 
