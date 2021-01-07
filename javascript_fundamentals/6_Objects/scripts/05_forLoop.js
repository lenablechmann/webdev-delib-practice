const myObj = {
    name: "Lily",
    age: 2,
    type: "peace lily",
    height: 50,
    survivability: "low",
}
// kinda similar to python loops but this type only works for objects in js
for (let key in myObj){
    console.log(key + " " + myObj[key]); //logs key then space then value
}
