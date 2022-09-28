const Element1 = document.getElementById('conteneur');
console.log(Element1);

const newElt = document.getElementById("conteneur");
let elt = document.getElementById("conteneur");

elt.appendChild(newElt);

const newElt2 = document.createElement("div");
elt.appendChild(newElt2);