// Object.create() makes a new object
// while using the existing object (in the ()) as the prototype of the new object

const cube = {
    equalSides: true,
    material: "plastic",
    printCubeProps: function () {
        console.log(`This cube is made out of ${this.material} and its colors are ${this.colors}`);
    }
};

// using cube as the prototype
const rubiksCube = Object.create(cube);

//overwriting old properties
rubiksCube.material = "wood";

// adding a new prop
rubiksCube.colors = "mixed";

// has access to the method from cube
rubiksCube.printCubeProps();

// we can also check if some object is a prototype of the other object
// will print true, cause we made rubiks cube out of cube as a prototype
console.log("Is rubiks cube actually a cube? " + cube.isPrototypeOf(rubiksCube));

