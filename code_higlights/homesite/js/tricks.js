//toggles the display of certain sections of the website
function switch_div(divid) {
	//so we don't have to go searching all the time for this
	var handler = document.getElementById(divid);

	if(handler.style.display =='none') {
		handler.style.display = 'block';
	} else {
		handler.style.display = 'none';
	}
	
}
