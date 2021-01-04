// unfortunately its gonna reset once we close the page, which we can solve with local storage
// check counter value in local storage, go to local storage, search for string
if(!localStorage.getItem('counter')) {
    // setting value of counter to 0
    localStorage.setItem('counter', 0);
}

function count () {
    let counter = localStorage.getItem('counter');
    counter++;
    document.querySelector('h1').innerHTML = counter;
    localStorage.setItem('counter', counter);
}
document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('button').onclick = count;

    // adding an interval: run the count function every 1000 ms (so every second)
    setInterval(count, 1000);
});