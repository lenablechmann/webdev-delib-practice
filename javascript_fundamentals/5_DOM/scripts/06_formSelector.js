// when I submit the form I want stuff to happen
// get the form first, tell it what fu should be run
document.querySelector("form").onsubmit = function (){
    // how do we get access to what the user typed in? the value of the input
    const name = document.querySelector('#name').value;
    alert(`Heya, ${name}`);
};