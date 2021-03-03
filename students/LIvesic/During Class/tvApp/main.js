const formElement = document.querySelector('.js-search-form');
const inputElement = formElement.querySelector('[name="query"]');
const listElement = document.querySelector('.js-search-reults');

function showResult(item){
    const showName = item.show.name;
    const element = document.createElement('li');
    //const link = document.createElement('a');

    element.innerHTML = showName;

    listElement.appendChild(element);
    //element.appendChild(link);
}

function clearSearch(){
    listElement.innerHTML = '';
}

formElement.addEventListener('submit', function(event){
    event.preventDefault();

    const value = inputElement.value;

    clearSearch();

    fetch(`http://api.tvmaze.com/search/shows?q=${value}`)
        .then((response) => response.json())
            .then((json) => {
                console.log(json);
                for (i = 0; i < json.length; i++) {
                    showResult(json[i]);
                }
            })

        .catch((error) => console.error(error));
})
