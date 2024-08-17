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


  function initMap() {
	const coordinates = { lat: 59.93872991775969, lng: 30.323048740133434 };
	const map = new google.maps.Map(document.querySelector(".map__google"), {
	  zoom: 14.5,
	  center: coordinates,
	  navigationControlOptions: {
		style: google.maps.NavigationControlStyle.SMALL
	  },
	  scrollWheel: false,
	  mapTypeId: google.maps.MapTypeId.ROADMAP,
	});
  
	const image = {
	  url: "img/map/map-pin.png",
	  scaledSize: new google.maps.Size(100, 100), // scaled size
	  origin: new google.maps.Point(0, 0), // origin
	  anchor: new google.maps.Point(0, 0) // anchor
	};
  
	const marker = new google.maps.Marker({
	  position: coordinates,
	  map: map,
	  icon: {
		url: "img/map/map-pin.svg",
		scaledSize: screen.width < 768 ?
		  new google.maps.Size(57, 53) :
		  new google.maps.Size(113, 106),
	  }
	});
  }