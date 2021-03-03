function showResult(items) {
    const source = document.querySelector('#pokemon-list').innerHTML;
    const template = Handlebars.compile(source);
    const context = { items: items };
    const html = template(context);

    const app = document.querySelector('#app');
    app.innerHTML = html;
}

function addStripes(){
	$('table tr').removeClass('striped')
	$('table tr:even').addClass('striped');
}

function addHeaderStyles(){
	$('table th').css('color','darkBlue')
}

function filterPokemon(){
	const hiddenElements = $("table td a:contains('p')").filter(function() {
		return this.innerText.indexOf('p') == 0;
	})

	hiddenElements.closest('tr').remove();
	
	addStripes();
	showMessage(`Number of hiddden pokemon: ${hiddenElements.length}`);
}

function showMessage(message){
	$('<div></div>').insertAfter($('#app')).text(message);
}

fetch('https://pokeapi.co/api/v2/pokemon-color/yellow')
    .then((response) => response.json())
    .then((json) => {
        const pokemonSpecies = json.pokemon_species.slice(0, 20);

        showResult(pokemonSpecies);
		addStripes();
		addHeaderStyles();
		setTimeout(filterPokemon, 2000);
    })
    .catch((error) => console.error(error));