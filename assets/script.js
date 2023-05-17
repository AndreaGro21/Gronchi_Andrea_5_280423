const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const imgContainer = document.querySelector('.banner-img')
const tagLineContainer = document.querySelector('.banner-tagline')
const arrowLeft = document.querySelector(".arrow_left")
const arrowRight = document.querySelector(".arrow_right")
let currentSlideIndex = 0;

renderSlide() 
arrowRight.addEventListener("click", function () {  
	if (currentSlideIndex === slides.length - 1) {  
		currentSlideIndex = 0
	} else {
		currentSlideIndex += 1
	}
	renderSlide()
	activeDot()
});
arrowLeft.addEventListener("click", function () {   
	if (currentSlideIndex === 0) {
		currentSlideIndex = slides.length - 1
	} else {
		currentSlideIndex -= 1
	}
	renderSlide()
	activeDot()
});
function renderSlide() {
	imgContainer.src = `./assets/images/slideshow/${slides[currentSlideIndex].image}`;
	tagLineContainer.innerHTML = slides[currentSlideIndex].tagLine;
}
function imgSlider(slides) {
	for (let i = 0; i < slides.length; i++) {
		const imgNumber = slides[i];
		const sectionContainer = document.querySelector("#banner");
		const newImg = document.createElement("img");
		newImg.src = imgNumber.image;
		const titleImg = document.createElement("p");
		titleImg.innerHTML = imgNumber.tagLine;
		sectionContainer.appendChild(newImg);
		sectionContainer.appendChild(titleImg);
	}
}

function dotSlider() {
	for (let i = 0; i < slides.length; i++) {
		const dotsElement = document.querySelector(".dots");
		const dotChild = document.createElement("div");
		dotChild.classList.add("dot");
		dotsElement.appendChild(dotChild)
	}
}
dotSlider()

const firstDot = document.querySelector('.dot');
firstDot.classList.add('dot_selected');



function activeDot() {
	const dots = document.querySelectorAll('.dot');
	dots.forEach((dot, index) => {           		
		if (index === currentSlideIndex) {      
			dot.classList.add('dot_selected');
		} else {
			dot.classList.remove('dot_selected');
		}
	});
}




