let counter = 0;

function count () {
    counter++;
    // update inner html and set it to counter value

    document.querySelector('h1').innerHTML = counter;
    if (counter % 10 === 0) {
        alert(`The counter is now ${counter}.`)
    }
}
// for when you want to put js before the start of html
// calling the function when dom content is loaded
document.addEventListener('DOMContentLoaded', function(){
    // instead of the html <button onclick="count()">Count</button>
    // find me the button on the page, set value of the onclick property to count
    // only when the button is clicked, the function is run
    document.querySelector('button').onclick = count;
});