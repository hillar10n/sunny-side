let hamburger = document.querySelector('#hamburger');
let menu = document.querySelector('.menu-items');

hamburger.addEventListener('click', () => {
	menu.classList.toggle('show');
});
