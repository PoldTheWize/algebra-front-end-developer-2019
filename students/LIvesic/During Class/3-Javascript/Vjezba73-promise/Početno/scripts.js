//1
fetch('https://api.chucknorris.io/jokes/random')
    .then((result) => {
        if(result.ok){
            return result.json();
        }else{
            throw new Error(result.status);
        }
    })
    .then((json) => {
        console.log(json);
        alert(json.value);
    })
    .catch((error) => console.error(error));
//2
/*
var request = new XMLHttpRequest();

request.open("GET", "https://api.chucknorris.io/jokes/random", true);

request.onload = function(){
    const response = JSON.parse(request.response);
    alert(response.value);
}

request.send();
*/