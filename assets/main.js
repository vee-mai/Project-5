// Function to render your items
const renderItems = (data) => {
	// The `ul` where the items will be inserted
	const dataList = document.getElementById('data-list')
    console.log("dataList", dataList)

	// Loop through each item in the data array
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
	data.forEach((item) => {
		let KdramaCard = '' // Set an empty class variable
        console.log("item", item)

		// Conditional if this is `false` (“not true”)
		// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
		if (!item.alsoWasWriter) {
			KdramaCard = 'faded' // Update the variable
		}

		// Make a “template literal” as we have before, inserting your data (and maybe the class)
		// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
		let listItem =
			`
			<li class="vibes${item.Vibes}" id="${KdramaCard}">
					<h2>${item.Title}</h2>
					<img class="poster" src="${item.Poster}">
					<p>watch on ${item.Where}</p>
				</li>
			`

		dataList.insertAdjacentHTML('beforeend', listItem) // Add it to the `ul`!

		// Don’t feel limited to `ul > li` for these—you can insert any DOM, anywhere!
	})
}

// Fetch gets your (local) JSON file…
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
fetch('assets/data.json')
	.then(response => response.json())
	.then(data => {
		// And passes the data to the function, above!
		renderItems(data)
	})

// // filtering 

// Let Javascript know about my buttons and elements 
let kdramalBlocks = document.querySelector('#data-list')
let happyFilter= document.querySelector('#happy-filter')
let blueFilter= document.querySelector('#blue-filter')
let thrillerFilter= document.querySelector('#thriller-filter')
let neutralFilter= document.querySelector('#neutral-filter')

// Add onclick for my buttons
happyFilter.onclick = () => {
	kdramalBlocks.classList.add('show-happy')
    kdramalBlocks.classList.remove('show-blue', 'show-thriller','show-neutral')
}

blueFilter.onclick = () => {
    kdramalBlocks.classList.add('show-blue', )
    kdramalBlocks.classList.remove('show-happy', 'show-thriller', 'show-neutral' )
}

thrillerFilter.onclick = () => {
    console.log("thriller")
    kdramalBlocks.classList.add('show-thriller')
    kdramalBlocks.classList.remove('show-happy', 'show-blue', 'show-neutral' )
}

neutralFilter.onclick = () => {
    kdramalBlocks.classList.add('show-neutral')
    kdramalBlocks.classList.remove('show-happy', 'show-blue', 'show-thriller' )
}

// search filter 
// https://medium.com/@cgustin/tutorial-simple-search-filter-with-vanilla-javascript-fdd15b7640bf

document.getElementById('mySearch').addEventListener('input', filterByName);

function filterByName(event) {
    const searchTerm = event.target.value.trim().toLowerCase();
    const listItems = document.querySelectorAll("#data-list li");
  
    listItems.forEach(function(item) {
      item.style.display = 'revert';
  
      if (!item.innerText.toLowerCase().includes(searchTerm)) {
        item.style.display = 'none';
      }
    })
}

// // filter by vibes
// document.addEventListener("DOMContentLoaded", function () {
//     if (typeof data === "undefined") {
//         console.error("Data is not loaded. Check if data.js is properly linked.");
//         return;
//     }

//     // connects data from data.json
//     displayKdrama(data);

//     // filter option by vibes. Show the vibes that was clicked.
//     document.getElementById("happy-filter").addEventListener("click", function () {
//         filterByVibes("happy");
//     });

//     document.getElementById("sad-filter").addEventListener("click", function () {
//         filterByVibes("sad");
//     });

//     document.getElementById("spontaneous-filter").addEventListener("click", function () {
//         filterByVibes("spontaneous");
//     });
// });

// // SECTION: filter function by vibes
// function filterByVibes(Vibes) {
//     // Goes through each kdrama list checks if they match the vibes
//     const filteredData = data.filter(person => person.Vibes === Vibes);

//     // Will display the kdrama that is for certain vibes
//     displayKdrama(filteredData);
// }

