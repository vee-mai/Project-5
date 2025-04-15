// Function to render your items
const renderItems = (data) => {
	// The `ul` where the items will be inserted
	const dataList = document.getElementById('data-list')
    console.log("dataList", dataList)

	// Loop through each item in the data array
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
	data.forEach((item) => {
		let KdramaCard = '' // Set an empty class variable
		
		let iconUrl = '/assets/netflix.png'
        
		// Conditional if this is `false` (“not true”)
		// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
		if (!item.KdramaCard) {
			KdramaCard = 'kdramaCard' // Update the variable
		}
		
		if (item.Where==='hulu'){
			iconUrl='/assets/hulu.png'
		} else if (item.Where === 'viki') {
			iconUrl = 'assets/viki.png'
		}

		// Make a “template literal” as we have before, inserting your data (and maybe the class)
		// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
		let listItem =
			`
			<li class="vibes${item.Vibes}" id="${KdramaCard}">
					<h2>${item.Title}</h2>
					<img class="poster" src="${item.Poster}">
					<p>watch on ${item.Where}</p>
					<img class="" src="${iconUrl}">
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
let feelgoodFilter= document.querySelector('#feelGood-filter')
let uglycryFilter= document.querySelector('#uglyCry-filter')
let thrillerFilter= document.querySelector('#thriller-filter')
let romanticFilter= document.querySelector('#romantic-filter')
let mysteriousFilter=document.querySelector('#mysterious-filter')
let nostalgicFilter=document.querySelector('#nostalgic-filter')
let cheesyFilter=document.querySelector('#cheesy-filter')
let spontaneousFilter=document.querySelector('#spontaneous-filter')

// Add onclick for my buttons
feelgoodFilter.onclick = () => {
	kdramalBlocks.classList.add('show-feelGood')
    kdramalBlocks.classList.remove('show-uglyCry', 'show-thriller','show-romantic')
	kdramalBlocks.scrollIntoView({behavior: 'smooth'})
}

uglycryFilter.onclick = () => {
    kdramalBlocks.classList.add('show-blue', )
    kdramalBlocks.classList.remove('show-feelGood', 'show-thriller', 'show-romantic' )
	kdramalBlocks.scrollIntoView({behavior: 'smooth'})
}

thrillerFilter.onclick = () => {
    console.log("thriller")
    kdramalBlocks.classList.add('show-thriller')
    kdramalBlocks.classList.remove('show-feelGood', 'show-uglyCry', 'show-romantic' )
	kdramalBlocks.scrollIntoView({behavior: 'smooth'})
}

romanticFilter.onclick = () => {
    kdramalBlocks.classList.add('show-romantic')
    kdramalBlocks.classList.remove('show-feelGood', 'show-uglyCry', 'show-thriller' )
	kdramalBlocks.scrollIntoView({behavior: 'smooth'})
}

mysteriousFilter.onclick = () => {
    kdramalBlocks.classList.add('show-mysterious')
    kdramalBlocks.classList.remove('show-feelGood', 'show-uglyCry', 'show-thriller' )
	kdramalBlocks.scrollIntoView({behavior: 'smooth'})
}

nostalgicFilter.onclick = () => {
    kdramalBlocks.classList.add('show-nostalgic')
    kdramalBlocks.classList.remove('show-feelGood', 'show-uglyCry', 'show-thriller' )
	kdramalBlocks.scrollIntoView({behavior: 'smooth'})
}

cheesyFilter.onclick = () => {
    kdramalBlocks.classList.add('show-cheesy')
    kdramalBlocks.classList.remove('show-feelGood', 'show-uglyCry', 'show-thriller' )
	kdramalBlocks.scrollIntoView({behavior: 'smooth'})
}

spontaneousFilter.onclick = () => {
    kdramalBlocks.classList.add('show-spontaneous')
    kdramalBlocks.classList.remove('show-feelGood', 'show-uglyCry', 'show-thriller' )
	kdramalBlocks.scrollIntoView({behavior: 'smooth'})
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

