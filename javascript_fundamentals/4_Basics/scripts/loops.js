// coding along https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code

function nameFruits() {
  let array = ["apples", "oranges", "melons", "mangos"];
  let exampleText = "My favorite fruits are ";
  for (let counter = 0; counter < array.length; counter++) {
    // finish the string with a .
    if (counter === array.length - 1) {
      exampleText += "and " + array[counter] + ".";
      break;
    }
    // Add fav fruits one by one to the string
    exampleText += array[counter] + ", ";
  }
  document.getElementById("js-loop-creation").innerHTML = exampleText;
}

function searchNames() {
  // Array that will be searched for the info:
  let contacts = [
    "Turner:23423489",
    "Guy:34429823",
    "Nobody:24394729",
    "Existence:98305923",
  ];
  userInput = prompt("Which contact are you looking for?").toLowerCase();
  console.log(userInput);
  for (let counter = 0; counter < contacts.length; counter++) {
    // Splitting contacts into two parts [0] and [1] on :
    let splitter = contacts[counter].split(":");
    // comparing user input to the first part of the split up array element
    if (splitter[0].toLowerCase().localeCompare(userInput) === 0) {
        document.getElementById("js-loop-creation").innerHTML = `${splitter[0]}'s number is ${splitter[1]}`;

    // Finish function once contact has been found
    return;
    }
  }
  // print if nothing was found
  document.getElementById("js-loop-creation").innerHTML = "No such contact exists";
}
