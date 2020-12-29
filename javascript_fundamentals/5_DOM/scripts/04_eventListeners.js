// coding along https://www.theodinproject.com/courses/foundations/lessons/dom-manipulation

// second button type has an id, which we can use:
const btn = document.querySelector("#btn");
// use onclick method and an arrow function for shortness
btn.onclick = () => alert("Hello, world.");

// third type with an event listener
const btn3 = document.querySelector("#btn3");
btn3.addEventListener('click', alertFunction);

function alertFunction(){
    alert("Why, hello there!");
}

const btnCallback = document.querySelector('#btn-callback');
btnCallback.addEventListener('click', function(e){
    console.log(e.target); // displays properties of the click event, is a callback function
    e.target.style.background = "red"; // turns the button red on click
}
);