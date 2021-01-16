// prototypes can be used to give methods to constructors
// without adding extra junk for them to carry in every object created

// basic constructor
let Player = function (life, endurance, strength) {
    this.life = life;
    this.endurance = endurance;
    this.strength = strength;
}

// adding a function to the prototype of the constructor
Player.prototype.sumStats = function (){
     console.log(this.life + this.endurance + this.strength);
}

// creating a new player obj and accessing the brand new method
const player1 = new Player(100, 130, 45);

// We can now access the method even though it wasn't in the constructor
player1.sumStats();
