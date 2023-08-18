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
