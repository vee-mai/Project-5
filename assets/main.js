// Function to render your items
const renderItems = (data) => {
	// The `ul` where the items will be inserted
	const dataList = document.getElementById('data-list')

	// Loop through each item in the data array
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
	data.forEach((item) => {
		let KdramaCard = '' // Set an empty class variable

		// Conditional if this is `false` (“not true”)
		// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
		if (!item.alsoWasWriter) {
			KdramaCard = 'faded' // Update the variable
		}

		// Make a “template literal” as we have before, inserting your data (and maybe the class)
		// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
		let listItem =
			`
			<li class="kdrama-card" id="${KdramaCard}">
					<h2>${item.Title}</h2>
					<img class="poster" src="${item.Poster}">
					<p>Released in <time>${item.Year}</time></p>
					<p><em>${item.VeesRating}</em></p>
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

// filtering option 01

// Let Javascript know about my buttons and elements 
let kdramalBlocks = document.querySelector('#data-list')
let happyFilter= document.querySelector('#happy-filter')
let sadFilter= document.querySelector('#sad-filter')
let spontaneousFilter= document.querySelector('#spontaneous-filter')

// Add onclick for my buttons
happyFilter.onclick = () => {
	kdramalBlocks.classList.add('show-mustWatch', 'show-romCom', 'show-heartFelt', 'show-light')
    kdramalBlocks.classList.remove('show-all', 'show-supernatural','show-emotional', 'show-historical')
}

sadFilter.onclick = () => {
    kdramalBlocks.classList.add('show-mustWatch', )
    kdramalBlocks.classList.remove('show-all', 'show-emotional', 'show-heartFelt' )
}

spontaneousFilter.onclick = () => {
    kdramalBlocks.classList.add('show-all')
}

// search filter 
// https://medium.com/@cgustin/tutorial-simple-search-filter-with-vanilla-javascript-fdd15b7640bf
// https://medium.com/@AlexanderObregon/how-to-build-a-dynamic-search-feature-with-javascript-filters-464b97038be1

// reference 01
// document.getElementById('mySearch').addEventListener('input', function (event) {
//     const searchTerm = event.target.value.toLowerCase();
//     const listItems = document.querySelectorAll('data-list li');

//     listItems.forEach(function (item) {
//         const itemText = item.textContent.toLowerCase();

//         if (itemText.includes(searchTerm)) {
//             item.style.display = 'list-item';
//         } else {
//             item.style.display = 'none';
//         }
//     });
// });

// reference 02
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