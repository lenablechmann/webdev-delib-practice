/* Write the code, one line for each action:
    Create an empty object user.
    Add the property name with the value John.
    Add the property surname with the value Smith.
    Change the value of the name to Pete.
    Remove the property name from the object.
*/
let user = {};
user.name = "John";
user.surname = "Smith";
console.log("Added properties to empty obj " + user.name + " " + user.surname);

user.name = "Pete";
console.log("Changed name to " + user.name);

delete user.name;
for (let key in user) {
    console.log("Logging key values of obj " + key + " "+ user[key]);
}

// Write the function isEmpty(obj) 
// which returns true if the object has no properties, false otherwise.

function isEmpty(obj){
    // looping through all property pairs
    for (let property in obj){
        if(property in obj){
            return false;
        }
    }
    return true;
}
console.log(isEmpty(user)); // returns true

delete user.surname;
console.log(isEmpty(user)); // returns false

/* Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.
If salaries is empty, then the result must be 0.*/
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }

let sum = 0;
for (let property in salaries) {
    // only sums if properties exist
    if (!(property in salaries)) {
        break;
    }
    else {
        sum += parseInt(salaries[property]);
    }
}
console.log("The sum is " + sum); // 390 indeed

// write a function that multiplies all number values of a obj by 2 and modifies the obj
function multiplyNumeric(obj) {
    for (let prop in obj){
      if(typeof(obj[prop]) === "number"){
        obj[prop] *= 2;
        console.log(obj[prop]);
      }
      else {
          continue;
      }
    }
  }

multiplyNumeric(salaries);