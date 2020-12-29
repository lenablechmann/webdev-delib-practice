/*
Add the following elements to the container using ONLY javascript 
do not add any HTML or CSS code.

- a <p> with red text that says “Hey I’m red!”
- an <h3> with blue text that says “I’m a blue h3!”
- a <div> with a black border and pink background color with the following elements inside of it:
   - another <h1> that says “I’m in a div”
   - a <p> that says “ME TOO!”
   - Hint for this one: after creating the div with createElement, 
   append the <h1> and <p> to it before adding it to the container.
*/

const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';
container.appendChild(content);

const redText = document.createElement("p");
redText.classList.add("paragraph");
redText.textContent = "I am red!";
redText.setAttribute("style", "color: red");
container.appendChild(redText);

const blueH3 = document.createElement("h3");
blueH3.classList.add("heading3");
blueH3.textContent = "I am a blue h3!";
blueH3.setAttribute("style", "color: blue; background-color: beige");
container.appendChild(blueH3);

const megaDiv = document.createElement("div");
megaDiv.classList.add("motherOfDivs");
megaDiv.setAttribute("style", "border-style: dashed; border-width: 3px; border-color: black; background-color: pink")

const h1 = document.createElement("h1");
h1.classList.add("heading");
h1.textContent = "Ooh, i'm in a div!";
megaDiv.appendChild(h1);

const innerPara = document.createElement("p");
innerPara.classList.add("para");
innerPara.textContent = "Yeah, me too.";
megaDiv.appendChild(innerPara);

container.appendChild(megaDiv);