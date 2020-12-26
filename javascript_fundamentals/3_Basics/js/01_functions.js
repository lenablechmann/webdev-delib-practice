// Accessing the DOM elements via query selectors as shown on MDN
const user_input = document.getElementById("user_input");
const paragraph = document.querySelector("p");

// saving user input into variable.
user_input.onchange = function () {
    const usr_text = user_input.value;
    paragraph.textContent = `Here is your input: ${usr_text}`;
}
