window.addEventListener('scroll', () => {

	var navHeight = window.innerHeight - 70; 
	
	if(window.scrollY > navHeight) {
		document.getElementById("nav").classList.add('fixed');
	} else {
		document.getElementById('nav').classList.remove('fixed');
	}
});