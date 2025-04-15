// Helper function to map Vibes values to titles
// Coding assistant from Coding Tutor 
// Declaring a function named mapVibe
function mapVibe(vibe) {
    switch(vibe) {
        case "feelGood":
            return "Feel Good";
        case "uglyCry":
            return "Ugly Cry";
        case "thriller":
            return "Thriller";
		case "romantic":
			return "Romantic";
		case "mysterious":
			return "Mysterious";
		case "nostalgic":
			return "Nostalgic";
		case "cheesy":
			return "Cheesy";
        case "spontaneous":
            return "Spontaneous";
        default:
            return vibe;
    }
}

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
				<div class="card-footer">
					<p class="vibes-title">${mapVibe(item.Vibes)}</p>
					<a href="#" class="back-to-top" onclick="scrollToTop(event)">&#8593;</a>
				</div>
					<img class="poster" src="${item.Poster}">
					<h2>${item.Title}</h2>
					<p>${item.Where}</p>
					<img class="streamIcon" src="${iconUrl}">
			</li>
			`

		dataList.insertAdjacentHTML('beforeend', listItem) // Add it to the `ul`!

		// Don’t feel limited to `ul > li` for these—you can insert any DOM, anywhere!
	})
}

	function scrollToTop(event) {
		event.preventDefault();
		window.scrollTo({ top:0, behaviour:'smooth'});
	}

	function createNavButtons() {
		const dataContainer = document.querySelector('.data-container')
	}

	// Creating Previous Button
	const prevBtn = document.CreateElement('button');
	prevBtn.id = 'prevBtn'
	preBtn.textContent = 'Previous Movie';
	preBtn.style.display='none'; //initially hidden

	// Creating Next Button
	const prevBtn = document.CreateElement('button');
	prevBtn.id = 'prevBtn'
	preBtn.textContent = 'Next Movie';
	preBtn.style.display='none'; //initially hidden

	// Append buttons to the container
	dataContainer.appendChild(prevBtn);
	dataContainer.appendChild(nextBtn);

	// Return the buttons for further use (e.g., event listeners)
	return {prevBtn, nextBtn};
}

// Fetch gets your (local) JSON file…
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
fetch('assets/data.json')
	.then(response => response.json())
	.then(data => {
		// And passes the data to the function, above!
		renderItems(data)
		//create nav buttons 
		const { prevBtn, nextBtn } = createNavButtons();

		// Define dataList
		const dataList = document.getElementById('data-list');

		// Add event listeners for nav buttons
		nextBtn.addEventListener('click',() => {
			const cardWidth = dataList.clientWidth;
			dataList.scrollBy ({ left:cardWidth, behaviour:'smooth'});
		});

		prevBtn.addEventListener('click', () => {
			const cardWidth = dataList.clientWidth;
			dataList.scrollBy({ left: -cardwidth, behavior:'smooth'});
		});
	});

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

function showNavButtons(){
	const nextBtn = document.getElementById('nextBtn');
	const prevBtn = document.getElementbyId('prevBtn');
	nextBtn.style.display ='block';
	prevBtn.style.display ='block';
}

// Add onclick for my buttons
feelgoodFilter.onclick = () => {
	kdramalBlocks.classList.add('show-feelGood')
    kdramalBlocks.classList.remove('show-uglyCry', 'show-thriller','show-romantic')
	kdramalBlocks.scrollIntoView({behavior: 'smooth'})
	showNavButtons();
};

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

// Creating horizontal scroll by one card at a time
document.addEventListener('DOMContentLoaded', function(){
	const nextBtn = document.getElementById ('nextBtn');
	const prevBtn = document.getElementById ('prevBtn');
	const dataList = document.getElementById('data-list');

	// Initially, disable the back button if already at the start
    prevBtn.disabled = dataList.scrollLeft <= 0;
    
	// When "next" is clicked
	// If at the end, disable Next button
	// If scrolling, enable Prev button
    nextBtn.addEventListener('click', function(){
        const cardWidth = dataList.clientWidth;
        dataList.scrollBy({ left: cardWidth, behavior: 'smooth' });
        
		//After the scroll (wait 600ms)
        setTimeout(() => {
            // Disable next button if we've reached the end
            if (Math.ceil(dataList.scrollLeft + cardWidth) >= dataList.scrollWidth) {
                nextBtn.disabled = true;
            }
            // Enable the previous button once we've scrolled
            if(dataList.scrollLeft > 0) {
                prevBtn.disabled = false;
            }
        }, 600);
    });
    
	// When previous is clicked
	// Scroll to the left by the width of the visible area
	// cardwidith is cardWidth is the size when scrolling by each time user click Next or Prev
    prevBtn.addEventListener('click', function(){
        const cardWidth = dataList.clientWidth;
        dataList.scrollBy({ left: -cardWidth, behavior: 'smooth' });
        
		// After scroll (again wait 600ms)
		// If at the beginning, disable the Prev button
		// If there’s still space to scroll right, enable Next

        setTimeout(() => {
            // Disable previous button if we're at the start
            if (dataList.scrollLeft <= 0) {
                prevBtn.disabled = true;
            }
            // Enable the next button once we scroll back
            if(Math.ceil(dataList.scrollLeft + cardWidth) < dataList.scrollWidth) {
                nextBtn.disabled = false;
            }
        }, 600);
    });
});