// we can disable "submit" with the property disable
document.querySelector("#submit").disabled = true;
// listen to user pressing keys, then enable submit
document.querySelector("#task").onkeyup = () => {
  // making sure somethin is typed in
  if (document.querySelector("#task").value.length > 0) {
    document.querySelector("#submit").disabled = false;
  } else {
    document.querySelector("#submit").disabled = true;
  }
};
// run when the form is submitted
document.querySelector("form").onsubmit = () => {
  // user typed in
  const task = document.querySelector("#task").value;
  console.log(task);
  // we want to add a new element inside of HTML
  const li = document.createElement("li");
  // adding text to it, what user typed in
  li.textContent = task;

  // append the new element to the unordered list tag
  document.querySelector("#tasks").append(li);

  // how to clear the input field #task tho
  document.querySelector("#task").value = "";
  document.querySelector("#submit").disabled = true;

  // to stop form from submitting, do everything client side:
  return false;
};
