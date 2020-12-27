function logArray() {
    // Arrays in JS are actually objects that hold lists of items kinda
    let exampleArray = ["first", "second", "third"];
    console.log(exampleArray);

    // You can also create Arrays using the keyword new, but the first method is preferred
    let newArray = new Array("another", "list", "of", "strings");
    console.log(newArray);

    // to access an array element use [position]
    console.log(newArray[0]);
    console.log(newArray[2]);
    console.log(newArray[4]); // out of bounds -> undefined

    // printing the array to the html para, puts "another,list,of,strings"
    document.getElementById("js-array-creation").innerHTML = newArray;
}