function parse_input() {
  // saving user inputs into variables.
  const user_text = document.getElementById("user_text").value;
  const paragraph = document.querySelector("p");
  // Uppercasing the zeroth letter and adding the string from then on.
  // Using negative numbers to slice from the end.
  paragraph.textContent = `Your text is: ${user_text.charAt(0).toUpperCase() + user_text.slice(1)}.
  Also the last letter is ${user_text.slice(-1)}`;
}
