function navigateToServices() {
            const confirmation = window.alert("NOTE: Page is still under development.");

        }


// navigation controls
function showNav() {
	let show = document.getElementById("show")
	document.getElementById("ul").style.right = "0 "

}
function hideNav(){
	let hide = document.getElementById("hide")
	document.getElementById("ul").style.right = "-200px"
}

// Changing views in about section

var tablinks = document.getElementsByClassName("tablinks");
	var tabcontents = document.getElementsByClassName("tab-contents");
	
	function opentab(tabname){
		for(tablink of tablinks){
			tablink.classList.remove("active-link");
			
		}
		for(tabcontent of tabcontents){
			tabcontent.classList.remove("active-tab");
		}
		event.currentTarget.classList.add("active-link");
		document.getElementById(tabname).classList.add("active-tab")
	}


// Function to show the current slide
	function showAboutSlide(index) {
		const aboutSlides = document.querySelectorAll(".about-slider img");
		for (let i = 0; i < aboutSlides.length; i++) {
			aboutSlides[i].style.display = "none";
		}

		aboutSlides[index].style.display = "block";
	}

	let aboutSlideIndex = 0;
	let aboutAutoSlideInterval;

	// Function to go to the next slide in the About section
	function nextAboutSlide() {
		aboutSlideIndex = (aboutSlideIndex + 1) % 4; // Number of slides in the about-slider
		showAboutSlide(aboutSlideIndex);
	}

	// Start auto slide for the About section
	function startAboutAutoSlide() {
		aboutAutoSlideInterval = setInterval(nextAboutSlide, 4000); // Change slide every 5 seconds
	}

	// Start auto slide on page load
startAboutAutoSlide();
	
// -----------------------toggle button--------------
value = 1;

function darkMode() {
    var imgElement = document.getElementById("dark");

    if (value === 0) {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        imgElement.src = "images/dark_toggle.png"; // Change the image source
        imgElement.width = 30; // Set the width to 30px
        value = 1;
    } else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        imgElement.src = "images/white_toggle.png"; // Change the image source back to the original
        imgElement.width = 30; // Set the width to 30px
        value = 0;
    }
}



