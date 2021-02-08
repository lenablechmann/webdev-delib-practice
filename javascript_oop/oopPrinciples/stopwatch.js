// oop practice with a stopwatch
// needs to have a start, a stop and a reset

function createStopwatch () {
    // setting all the private values
    let timer = 0;
    let difference = 0;
    let startingTime = 0;

    this.start = function start () {
        startingTime = Date.now()
    };

    this.stop = function stop () {
        console.log("off to a good stop");
    };

    this.reset = function reset () {
        console.log("reset ");
    }

    return {start, stop, reset, duration};
};

const stopwatch = createStopwatch();

// testing methods
stopwatch.start();
stopwatch.stop();
stopwatch.reset();
console.log(stopwatch.duration);