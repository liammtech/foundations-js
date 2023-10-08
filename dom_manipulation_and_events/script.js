// Select index.html <body>
const body = document.querySelector('body');

// Create red paragraph
const redParagraph = document.createElement('p');
redParagraph.style.cssText = 'color: red';
redParagraph.textContent = "Hey I'm red!";

body.appendChild(redParagraph);

// Create blue <h3>
const blueThirdHeading = document.createElement('h3');
blueThirdHeading.style.cssText = 'color: blue';
blueThirdHeading.textContent = "I'm a blue h3!";

body.appendChild(blueThirdHeading);

// Create dive with pink background & black border & child elements 
// Add everything before adding to body

const blackPinkDiv = document.createElement('div');
blackPinkDiv.style.backgroundColor = "pink";
blackPinkDiv.style.border = "2px solid black";

const childHeading = document.createElement("h1");
childHeading.textContent = "I'm in a div";

const childParagraph = document.createElement("p");
childParagraph.textContent = "ME TOO!";

blackPinkDiv.appendChild(childHeading);
blackPinkDiv.appendChild(childParagraph);
body.appendChild(blackPinkDiv);