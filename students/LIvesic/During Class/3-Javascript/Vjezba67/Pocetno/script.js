
let list = document.querySelector("ul");
list.style.listStyleType = "decimal";

let divInfo = document.querySelector(".info");
//divInfo.style.visibility = "hidden";
divInfo.classList.add("hide");

let comStyles = window.getComputedStyle(document.body);
let marginLeft = comStyles.getPropertyValue("margin-left");
console.log(marginLeft);


setInterval(animate, 10);
let marginValue = parseInt(marginLeft);
let reverse = false;
let limit = 30;

function animate(){
    
    if(reverse){
        marginValue++;
    }else{
        marginValue--;
    }

    if(marginValue >= limit){
        reverse = false;    
    }else if(marginValue <= 0){
        reverse = true;
    }
    
    document.body.style.margin = marginValue + "px";
}
