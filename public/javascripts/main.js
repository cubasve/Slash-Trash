const { init } = require("../../models/item");

const BASE_URL = '/alternatives/search'

/*-------CONSTANTS--------*/ 


/*-------APP'S STATE (VARIABLES)--------*/ 
let alternatives;

/*-------CACHED ELEMENT REFERENCES--------*/ 
let alternativesList = document.getElementById('alternatives-list');
let searchButton = document.getElementById('searchBtn');
let searchInput = document.querySelector('#search-swaps input'); //1st input inside of form id="search-swaps"

/*-------EVENT LISTENERS--------*/ 
searchButton.addEventListener('submit', searchSwaps);

/*-------FUNCTIONS--------*/ 
init();

function init() {
	alternatives = [];
	render();
}

function render() { 

}

function searchSwaps(evt) {
	evt.preventDefault(); 
	//Why attach it to form and not button? Works if user clicks enter or button
	console.log(searchInput.value);

}
