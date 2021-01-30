let x = document.querySelector("body");
let divDescription = document.querySelector(".description");

// create h1 element
let h1 = document.createElement('h1');
h1.innerText = "Title"

// create div element with info class
let div = document.createElement('div');
div.classList.add("info");

// add
x.prepend(h1);
document.body.insertBefore(div, divDescription);

let ulElement = document.querySelector("ul");
for(let i = ulElement.childElementCount; i < 5; i++){
    let liElement = document.createElement('li');
    ulElement.appendChild(liElement);
}

