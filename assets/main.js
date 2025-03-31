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
				<li id="${KdramaCard}">
					<h2>${item.Title}</h2>
					<img class="poster" src="${item.Poster}">
					<p>Released in <time>${item.Year}</time></p>
					<p><em>${item.VeesRating}</em></p>
                    <p><em>${item.Vibes}</em></p>
					<p>${item.OverallRating} / 5</p>
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