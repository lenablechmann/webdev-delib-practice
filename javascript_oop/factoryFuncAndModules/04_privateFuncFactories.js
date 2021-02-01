// Using factory functions to organize code, only exposing functions
// we want, otherwise everything inside the factory stays in the factory

// experimental code for a "game"

const Player = (playerName, level, strength, luck) => {
    let health = level * 5;
    const getName = () => playerName;
    const getLvl = () => level;
    const getStrength = () => strength;
    const getLuck = () => luck;
    const die = () => {
        console.log("press F.");
    };

    const damage = (dmg) => {
        health -= dmg;
        if (health <= 0){
            die();
        }
    };

    const attack = enemy => {
        if (level >= enemy.getLvl()) {
            damage(1);
            console.log(`${playerName} level ${level}, ${luck} luck, ${strength} strength has damaged ${enemy.getName()}.`);
        }
        else {
            damage(1);
            console.log(`${enemy.getName()} level ${enemy.getLvl()}, ${enemy.getLuck()} has damaged ${playerName}.`);
        }
    };
    // if I don't return any function, enemy.getLuck or similar will be undefined
    return {attack, damage, getLvl, getName, getLuck, getStrength};
};

const steve = Player("stevie", 10, 99, 25);
const jeff = Player("jeoff", 8, 16, 99);

// console.log("first move: ");
// steve.attack(jeff);
// console.log("second move: ");
// jeff.attack(steve);
// console.dir(jeff);

// some inheritance practice with factory functions
const Fashion = (playerName) => {
    // creating a player obj with the factory function at the beginning, and pulling out the getName func
    const {getName} = Player("reb", 11, 34 ,99);
    const determineFashion = () => console.log("something very fashionable");
    return {determineFashion, getName};
}

const becca = Fashion("rebecca");
console.log(becca.getName()); // reb
becca.determineFashion(); // something very fashionable

