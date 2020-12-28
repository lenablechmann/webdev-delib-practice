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

function putEvenNumbers(){
  // coding along https://javascript.info/while-for
  // Use the for loop to output even numbers from 2 to 10.
  let text = "Even numbers from 2 to 10 are: ";

  for (let i = 2; i <= 10; i++) {
    if (i % 2 === 0){
      text += i + " ";
    }
  }
  document.getElementById("js-loop-creation").innerHTML = text; 
}

function promptUser(){
  // coding along https://javascript.info/while-for
  // Write a loop which prompts for a number greater than 100.
  // If the visitor enters another number – ask them to input again.
  let userNum;
    do {
      userNum = parseInt(prompt("Enter any number greater than 100."));
  } while (userNum < 100);

  document.getElementById("js-loop-creation").innerHTML = `Well done.`; 
}

function getEvenNumbers(){
  // coding along https://javascript.info/while-for
  // Write the code which outputs prime numbers in the interval from 2 to n
  const NUMBER = 150;
  let text = `Prime numbers between 2 and ${NUMBER} are: `;

  // Using labels to jump out of the inner loop
  next: for (let num = 2; num <= NUMBER; num++){
    for ( let counter = 2; counter < num; counter++)
    {
      if (num % counter === 0 && num !== counter){
        continue next;
      }
    }
    text += num + " ";
  }

  document.getElementById("js-loop-creation").innerHTML = text; 
}