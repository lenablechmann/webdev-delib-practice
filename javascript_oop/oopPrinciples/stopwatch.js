// oop practice with a stopwatch
// needs to have a start, a stop and a reset methos
// a property named duration. If you start again after starting
// it should throw an error

function createStopwatch () {
    // setting all the private values
    let timer = 0;
    let difference = 0;
    let startingTime = 0;
    let running = false;

    this.start = function start () {
        // only changes starting time, if it's not running yet
        if (!running) {
            startingTime = Date.now();
            running = true;
            console.log("started");
        }
        else {
            throw new Error("Stopwatch is already running. Stop it first.")
        }
    };

    this.stop = function stop () {
        if (running){
            // get difference from start to now
            difference = Date.now() - startingTime;
            timer += difference;
            running = false;
            console.log("stopped");
        }
        else {
            throw new Error("Stopwatch is already stopped. Start it first.")
        }
    };

    this.reset = function reset () {
        running = false;
        timer = 0;
        difference = 0;
        startingTime = 0;
    }

    return {start,
            stop,
            reset,
            duration: timer
        };
};

const stopwatch = createStopwatch();

// testing methods
 stopwatch.start();
 stopwatch.stop();
// stopwatch.reset();
console.log(stopwatch.duration);