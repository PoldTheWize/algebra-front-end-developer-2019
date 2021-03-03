var character = {
  name: 'Eleven',
  show: 'Stranger Things',
  portrayedBy: 'Millie Bobby Brown'
}

const quotes = [
	'I\'m going to my friends. I\'m going home.', 
	'Pure fuel! PURE FUEL! WOO!', 
	'See? Zoomer.', 
	'Bitchin.'
];

var proto1 = Object.getPrototypeOf(character);
var proto2 = Object.getPrototypeOf(proto1);

function getQuote(){
	var index = Math.floor(
		Math.random() * quotes.length
	);
	return quotes[index];
}
proto1.getQuote = getQuote; //stavljanje funkcije getQuote u character objekt

console.log(getQuote()); //funkcija getQuote
console.log(proto1.getQuote(), "1"); //funkcija getQuote unutar objekta character
console.log(proto2, "2");// null
