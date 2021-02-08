// objects syntax recap as I'm trying to figure out how to plan
// tic tac toe in oop
// relying on this for recap: https://www.youtube.com/watch?v=PFmuCDHHpwk&t=13s

// using object literal syntax, key value pairs
const circle = {
    radius: 1, // just a variable, a regular property

    location: {
        x: 1,
        y: 1,
    }, // an object inside the object, a regular property

    draw: function () {
        console.log("draw a circle.");
    } // a function, since it's a member of an object ==> method
};

// accessing its properties with the dot notation
// circle.draw();

// same but with factories. Onject literals aren't great if you need to duplicate objects
// with multiple methods assigned to them

function createCircle (circleRadius) {
    // can simply return this object
    return {
        circleRadius, // takes the parameter radius, can just leave radius as standalone
        // due to key == value

        draw: function () {
            console.log("draw a fresh circle.");
        } // a function, since it's a member of an object ==> method
    };
};

const freshCircle = createCircle(1);
// freshCircle.draw();

// object constructors are using this keyword to set properties of the object
function CircleConstructor (radius) {
    this.radiusConstr = radius;
    this.drawConstr = function () {
        console.log ("Drawing from the constructor");
    };
};

const anotherCircle = new CircleConstructor(2);
anotherCircle.drawConstr();