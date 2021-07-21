
const title = document.getElementById("my-title");
title.innerHTML = "Hé cambiado el título!";

const paragraph = document.getElementById("my-paragraph");
paragraph.style = "color: blue";


const newParagraph = document.createElement("p");
newParagraph.innerHTML = "Este es un nuevo parrafo agregado dinámicamente";


const body = document.getElementById("body");
body.appendChild(newParagraph);
