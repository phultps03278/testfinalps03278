function resizeme() {	
	
	if (document.body.clientHeight<700) {
			document.getElementById('main').style.height='700';
	}
	else {
		document.getElementById('main').style.height='100%';	
	}
	
		if (document.body.clientWidth<800) {
		document.getElementById('main').style.width='800';
		}
	else {
		document.getElementById('main').style.width='100%';
	}

}

window.onresize =function() {resizeme();};
window.onload =function() {	resizeme();};