// both will display the "display" div properties collection in the console
const container = document.querySelector("#container");
console.dir(container.firstElementChild); 

const controls = document.querySelector(".controls");
console.dir(controls.previousElementSibling);