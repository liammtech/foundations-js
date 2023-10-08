// Select index.html <body>
const body = document.querySelector('body');

// Create red paragraph
const redParagraph = document.createElement('p');
redParagraph.style.cssText = 'color: red';
redParagraph.textContent = "Hey I'm red!";

body.appendChild(redParagraph);