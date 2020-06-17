const Item = require("../../models/item");
const ecoAlternative = require("../../data");
const householdItem = require("../../models/item");

const BASE_URL = "/alternatives";

/*-------CONSTANTS--------*/

/*-------APP'S STATE (VARIABLES)--------*/

let alternatives;
let items; //swap list

/*-------CACHED ELEMENT REFERENCES--------*/

let alternativesList = document.getElementById("alternatives-list"); //section
let searchButton = document.getElementById("searchBtn");
let searchInput = document.querySelector("#search-swaps input"); //1st input inside of form id="search-swaps"

/*-------EVENT LISTENERS--------*/

searchButton.addEventListener("submit", searchSwaps);

alternativesList.addEventListener("click", AddAlternative);

/*-------FUNCTIONS--------*/

init();

function init() {
  alternatives = [];
  render();
}

function render() {
  //loop over alternatives array
  let html = alternatives.reduce(function (html, alternative) {
    return (
      html +
      `
		<div class="each-alternative">
			<h2 class="householdItem">${householdItem.alternatives.swap}</h2> //Am I targeting this correctly?
			
			<div class="swap-description">
				<p class="householdItem">${householdItem.alternatives.description}</p>
				<button dataID="${alternative._id}" class="addToList">Add to List</button>
			</div>

		</div>
		`
    );
  }, "");

  alternativesList.innerHTML = html;
}
//IDK if I should identify the alternative by its id - seeding database lesson says not to
//Another way: wrap button in a form with some hidden data and submit that form
//Attach an unique identifier to each of these buttons and when i click this button, set up event handler on this list
//and use event delegation so whenever I click on a button in the list, I can find that movies'  id

async function searchSwaps(evt) {
  evt.preventDefault();
  console.log(searchInput.value); //STEP 1 - Does inputted value appear in console?
  // const query = searchInput.value; //STEP 2
  // if (query) {                  
  //   //if we have a query, run this function
  //   const data = await fetch(`/alternatives/search?q=${query}`) //pass query to fetch
  //     .then(function (res) {
  //       res.json;
  //     }); //return json
  //   console.log(data);
  //   alternatives = data.Search;
  //   render(); /
  }
}

//---------------------------------------ADD ALTERNATIVE TO USER"S SWAPLIST
// async function AddAlternative(evt) {
//   if (evt.target.tagName === "BUTTON") {
//     const swapID = evt.target.getAttribute("dataID");
//     const alternative = alternatives.find(function (alt) {
//       alt.ObjectId === ObjectId; //not sure if this is correct
//     });
//     try {
//       let mySwaps = fetch("/items", {
//         method: "POST",
//         body: {
//           alternative: ecoAlternative.swap,
//           description: ecoAlternative.description,
//         },
//       }).then(function (res) {
//         res.json();
//       });
//       mySwaps.push(item);
//       render();
//     } catch (err) {
//       console.log(err);
//     }
//   }
// }
