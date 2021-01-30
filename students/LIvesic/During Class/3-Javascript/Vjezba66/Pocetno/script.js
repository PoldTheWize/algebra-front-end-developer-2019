let h1 = document.querySelector(".karlovac");
let span = document.querySelector("span");
let divInfo = document.querySelector(".info");
let ul = document.querySelector("ul");

h1.innerText = "Karlovac";

span.textContent = "5 rijeka";

divInfo.innerHTML = "5 rijeka je piva"

let arr = ["mrežica", "korana", "dobra", "kupa", "piva"]

for(i = 0; i <= ul.childElementCount; i++){
    let li = document.querySelectorAll("li")[i];
    li.textContent = arr[i];
}

