
function killpopup() {
    document.getElementById('popup').style.display = 'none';
}


function statusCheck() {
				hidden = !hidden;
				if(hidden) {
					document.getElementById('b1').style.visibility = 'hidden';
					document.getElementById('b2').style.visibility = 'hidden';
				} else {
					document.getElementById('b1').style.visibility = 'visible';
					document.getElementById('b2').style.visibility = 'visible';
				}
			}