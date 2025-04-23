// Create a function to map Vibes values to titles
// Coding assistant from Jonathan
// Declaring a function named mapVibe then convert it to readable format
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
		
		let iconUrl = './assets/netflix.png'
        
		// Conditional if this is `false` (“not true”)
		// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
		if (!item.KdramaCard) {
			KdramaCard = 'kdramaCard' // Update the variable
		}
		
		//Changes the iconUrl based on which streaming platform the drama is available on
		if (item.Where==='hulu'){
			iconUrl='./assets/hulu.png'
		} else if (item.Where === 'viki') {
			iconUrl = './assets/viki.png'
		}

		// Make a “template literal” as we have before, inserting your data (and maybe the class)
		// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
		let listItem =
			`
			<li class="vibes${item.Vibes}" id="${KdramaCard}">
				<div class="mapVibe">
					<p class="mapVibe">${mapVibe(item.Vibes)}</p>
				</div>
				<div class="movieCard">
					<img class="poster" src="${item.Poster}">
					<h4> ${item.Title}</h4>
					<div class="watchWhere"
						<p>Available on ${item.Where}</p>
						<a href="${item.url}" target="_blank">
							<img class="streamIcon" src="${iconUrl}">
						</a>
					</div>
				</div>
			</li>
			`

		dataList.insertAdjacentHTML('beforeend', listItem) // Add it to the `ul`!

		// Don’t feel limited to `ul > li` for these—you can insert any DOM, anywhere!
	})
}

	//define new function named scrollToTop
	function scrollToTop(event) {
		event.preventDefault();

		//find the .top-wrapper section
		const topSection = document.querySelector('.top-wrapper');
		topSection.scrollIntoView({ behavior: 'smooth' });
	}

// Gets (local) JSON file…
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
fetch('assets/data.json')

	// convert response to JSON
	.then(response => response.json())
	.then(data => {
		renderItems(data);

		// Get existing buttons from the DOM
		const prevBtn = document.getElementById('prevBtn');
		const nextBtn = document.getElementById('nextBtn');
		const dataList = document.getElementById('data-list');

		// Add next button -- when user clicked, scrolls the list to the right by the width of the visible container
		nextBtn.addEventListener('click', () => {
			const cardWidth = dataList.clientWidth;
			dataList.scrollBy({ left: cardWidth, behavior: 'smooth' });
		});

		prevBtn.addEventListener('click', () => {
			const cardWidth = dataList.clientWidth;
			dataList.scrollBy({ left: -cardWidth, behavior: 'smooth' });
		});
	});


// Filtering 
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

// This is triggered when a filter is clicked ... scroll buttons only show up after the user chooses a vibe
// Selects the entire wrapper that contains both scroll buttons (inside .nav-buttons)
function showNavButtons() {
	const navWrapper = document.querySelector('.nav-buttons');

	// Makes the nav bar visible by changing display from none to flex
	if (navWrapper) {
		navWrapper.style.display = 'flex';
	}
}

// Changing bg color for result cards
function updateBackground(vibe) {
    const container = document.querySelector('.data-container');
    const bgClasses = [
        'bg-feelgood', 'bg-uglycry', 'bg-thriller', 'bg-romantic',
        'bg-mysterious', 'bg-nostalgic', 'bg-cheesy', 'bg-spontaneous'
    ];
    
    // Remove all previous bg classes
    container.classList.remove(...bgClasses);

    // Add the current vibe class (converts "feelGood" → "feelgood" to match with my CSS class names (which are lowercase))
    container.classList.add(`bg-${vibe.toLowerCase()}`);
}

// hiding the .card-footer untill a filter button is clicked
// document.querySelector('.card-footer').style.display = 'flex';
function showCardFooter() {
	const footer = document.querySelector('.card-footer');
	if (footer) {
		footer.style.display = 'flex';
	}
}

// hide and show after
function showDataContainer() {
	const container = document.querySelector('.data-container');
	if (container) {
		container.style.display = 'flex';
	}
}

// Add onclick for my buttons to remove or show certain classes
feelgoodFilter.onclick = () => {
	kdramalBlocks.classList.add('show-feelGood',)
    kdramalBlocks.classList.remove('show-uglyCry', 'show-thriller','show-romantic', 'show-mysterious','show-nostalgic', 'show-cheesy', 'show-spontaneous')
	kdramalBlocks.scrollIntoView({behavior: 'smooth'})
	updateBackground('feelgood');
	showNavButtons();
	showDataContainer(); 
	showCardFooter(); // shows footer *only after* a filter is clicked

	document.querySelector('.card-footer').style.display = 'flex'; // show card-footer
};

uglycryFilter.onclick = () => {
    kdramalBlocks.classList.add('show-uglyCry', )
    kdramalBlocks.classList.remove('show-feelGood', 'show-thriller', 'show-romantic','show-mysterious','show-nostalgic','show-cheesy', 'show-spontaneous')
	kdramalBlocks.scrollIntoView({behavior: 'smooth'})
	updateBackground('uglycry');
	showNavButtons();
	showDataContainer();
	showCardFooter();  
}

thrillerFilter.onclick = () => {
    kdramalBlocks.classList.add('show-thriller')
    kdramalBlocks.classList.remove('show-feelGood', 'show-uglyCry', 'show-romantic','show-mysterious','show-nostalgic','show-cheesy', 'show-spontaneous')
	kdramalBlocks.scrollIntoView({behavior: 'smooth'})
	updateBackground('thriller');
	showNavButtons();
	showDataContainer(); 
	showCardFooter(); 
}

romanticFilter.onclick = () => {
    kdramalBlocks.classList.add('show-romantic')
    kdramalBlocks.classList.remove('show-feelGood', 'show-uglyCry', 'show-thriller','show-mysterious','show-nostalgic','show-cheesy', 'show-spontaneous' )
	kdramalBlocks.scrollIntoView({behavior: 'smooth'})
	showNavButtons();
	updateBackground('romantic');
	showDataContainer(); 
	showCardFooter(); 
}

mysteriousFilter.onclick = () => {
    kdramalBlocks.classList.add('show-mysterious')
    kdramalBlocks.classList.remove('show-feelGood', 'show-uglyCry', 'show-thriller','show-romantic','show-nostalgic','show-cheesy', 'show-spontaneous')
	kdramalBlocks.scrollIntoView({behavior: 'smooth'})
	showNavButtons();
	updateBackground('mysterious');
	showDataContainer(); 
	showCardFooter(); 
}

nostalgicFilter.onclick = () => {
    kdramalBlocks.classList.add('show-nostalgic')
    kdramalBlocks.classList.remove('show-feelGood', 'show-uglyCry', 'show-thriller','show-romantic','show-mysterious','show-cheesy', 'show-spontaneous' )
	kdramalBlocks.scrollIntoView({behavior: 'smooth'})
	showNavButtons();
	updateBackground('nostalgic');
	showDataContainer(); 
	showCardFooter(); 
}

cheesyFilter.onclick = () => {
    kdramalBlocks.classList.add('show-cheesy')
    kdramalBlocks.classList.remove('show-feelGood', 'show-uglyCry', 'show-thriller','show-mysterious', 'show-romantic','show-nostalgic','show-spontaneous' )
	kdramalBlocks.scrollIntoView({behavior: 'smooth'})
	showNavButtons();
	updateBackground('cheesy');
	showDataContainer(); 
	showCardFooter(); 
}

spontaneousFilter.onclick = () => {
    kdramalBlocks.classList.add('show-spontaneous')
    kdramalBlocks.classList.remove('show-feelGood', 'show-uglyCry', 'show-thriller','show-mysterious','show-nostalgic', 'show-romantic','show-cheesy')
	kdramalBlocks.scrollIntoView({behavior: 'smooth'})
	showNavButtons();
	updateBackground('spontaneous');
	showDataContainer(); 
	showCardFooter(); 
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