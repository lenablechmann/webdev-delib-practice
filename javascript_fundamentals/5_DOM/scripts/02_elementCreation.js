console.log("test");
// how you use a query selector
const container = document.querySelector("#container");
// creating a new thang, but this won't put it into the DOM
const para = document.createElement("p");

// editing the element style
para.style.backgroundColor = "yellow";
// giving it an id
para.setAttribute("id", "notUnique");
// giving it a class
para.classList.add("fancyPants");
// adding text
para.textContent = "Testing Dom Manipulation is weird.";

// to append it after an element
container.appendChild(para);