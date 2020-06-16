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
alternativesList.addEventListener('click', AddAlternative);

/*-------FUNCTIONS--------*/ 
init();

function init() {
	alternatives = [];
	render();
}

function render() { 
	//loop over alternatives array
	let html = alternatives.reduce(function (html, alternative) {
		return html + `
		<div class="each-alternative">
			<h2 class="householdItem">${householdItem.alternatives.swap}</h2>
			
			<div class="swap-description">
				<p class="householdItem">${householdItem.alternatives.description}</p>
				<button dataID="${alternative._id}" class="addToList">Add to List</button>
			</div>

		</div>
		`;
	}, '');

	alternativesList.innerHTML = html;
}
//IDK if I should identify the alternative by its id - seeding database lesson says not to
//Another way: wrap button in a form with some hiden data and submit that form
//Attach an unique identifier to each of these buttons and when i click this button, set up event handler on this list
//and use event delegation so whenever I click on a button in the list, I can find that moviesid

async function searchSwaps(evt) {
	evt.preventDefault(); 
	//Why attach it to form and not button? Works if user clicks enter or button
	console.log(searchInput.value);
	const query = searchInput.value;
	if (query) { //if we have a query, run this function
		const data = await fetch(`/alternatives/search?q=${query}`)//pass query to fetch
		.then(res => res.json) //return json
		console.log(data);
		alternatives = data.Search;
		render();
	}
}

function AddAlternative(evt) {
	//if I click a button, add an id to it, 
	if(evt.target.tagName === 'BUTTON') {
		//figure out which movie user clicked on
		const swapID = evt.target.getAttribute('dataID'); 
		 const alternative = alternatives.find( function (alt) {
			 //look through alternatives list and find where 
		 })
	}

}
