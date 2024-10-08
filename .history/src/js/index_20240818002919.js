document.addEventListener('DOMContentLoaded', () => {
	const exampleLabelBefore = document.querySelector('.example__toggle-label--before');
	const exampleLabelAfter = document.querySelector('.example__toggle-label--after');
	const exampleAnimationContainer = document.querySelector('.example__animation');
  
  
	exampleLabelBefore.addEventListener('click', () => {
	  if (!exampleAnimationContainer.classList.contains('example__animation--action-before')) {
		exampleAnimationContainer.classList.add('example__animation--action-before');
		exampleAnimationContainer.classList.remove('example__animation--action-after');
	  }
	})
  
	exampleLabelAfter.addEventListener('click', () => {
	  if (!exampleAnimationContainer.classList.contains('example__animation--action-after')) {
		exampleAnimationContainer.classList.add('example__animation--action-after');
		exampleAnimationContainer.classList.remove('example__animation--action-before');
	  }
	})
  });


  document.addEventListener('DOMContentLoaded', () => {
	document.querySelector('.header').classList.remove('header--nojs');
  
	const routeLinks = document.querySelectorAll('.header__nav-link');
  
	Array.from(routeLinks).forEach(link => {
	  const linkUrl = new URL(link.href);
	  if (linkUrl.pathname === document.location.pathname) {
		link.classList.add('header__nav-link--active');
	  }
	})
  
	const menuBurger = document.querySelector('.header__toggle');
	menuBurger.addEventListener('click', burgerClickHandler);
  });
  
  function burgerClickHandler(e) {
	this.classList.toggle('header__toggle--active');
	document.querySelector('.header__nav').classList.toggle('header__nav--active');
  }


  import initMap from "./modules/map";