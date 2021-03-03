const items = [{name: 'Domagoj'}, {name: 'Leopold'}, {name: 'Alex'}];

function showResult(items){
    const source = document.querySelector('#pokemonList').innerHTML;
    const template = Handlebars.compile(source);
    const context = {items: items};
    const html = template(context);
    
    const app = document.querySelector('#app');
    app.innerHTML = html;
}

fetch('https://pokeapi.co/api/v2/pokemon-color/yellow')
    .then((response) => response.json())
        .then((json) => {
            const pokemonSpecies = json.pokemon_species.slice(0, 20);
            showResult(pokemonSpecies);
        })

    .catch((error) => console.error(error))








/*
const items = [{name: 'Domagoj'}, {name: 'Leopold'}, {name: 'Alex'}];
const source = document.querySelector('#pokemonList').innerHTML;
const template = Handlebars.compile(source);
const context = {items: items};
const html = template(context);

const app = document.querySelector('#app');
app.innerHTML = html;
*/