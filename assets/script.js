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
/**
 * 1 - Définir le slide/tagline à afficher lorsqu'on arrive sur le site : index 0 du tableau slides
 * 1.a - On a besoin à chaque instant de connaître l'index du slide qui est affiché. Pour pouvoir faire +1 ou -1 et aller chercher le bon nouveau slide
 * 2 - Lorsqu'on clisque sur > , on récupère l'index du slide en cours, et on fait +1. Ensuite, on affiche le slide/tagline qui correspond.
 * 2.a - Si on est arrivé au bout du tableau, on ne peut pas faire +1, il faut retourner à 0, puis afficher le slide/tagline qui correspond
 */
const imgContainer = document.querySelector('.banner-img')
const tagLineContainer = document.querySelector('.banner-tagline')
const arrowLeft = document.querySelector(".arrow_left")
const arrowRight = document.querySelector(".arrow_right")
let currentSlideIndex = 0;

renderSlide() //perche quassu?
arrowRight.addEventListener("click", function () {  //qui dichiaro che al click currentidex = alla unghezza dell'arrey -1 
	if (currentSlideIndex === slides.length - 1) {  //vorrei capire meglio
		currentSlideIndex = 0
	} else {
		currentSlideIndex += 1
	}
	renderSlide()
	activeDot()
});
arrowLeft.addEventListener("click", function () {    //devo perforza ripetere la funzione?
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

//per ogni classe dot when click add class to dot.

function activeDot() {
	const dots = document.querySelectorAll('.dot');
	dots.forEach((dot, index) => {           //perche seleziona dots?			
		if (index === currentSlideIndex) {      //cosa è l'idedex?
			dot.classList.add('dot_selected');
		} else {
			dot.classList.remove('dot_selected');
		}
	});
}

/* function activeDot (){
	document.querySelectorAll('.dot').forEach((dot) =>{
		if (currentSlideIndex === 0){
			firstDot.classList.add('dot_selected')
		}
	})
	activeDot()
	}

	activeDot() */


//l'idea è per ogni elemento attivo nell'index crea la classe dot_selected e attaccarcela
//posso con l'iterpolazione aggiunger _selected alla classe gia presente?no cambia il nome della classe
//quindi devo aggiungere una classe in piu ad ogni dot che mostro
//inziamo creando il dot per il primo ogetto
/* const dotsElement = document.querySelector(".dots");
const dotChild = document.createElement("div");
dotChild.classList.add("dot_selected");
dotsElement.appendChild(dotChild); */
/* 
	slides.forEach((slides) =>{
let currentDot = document.getElementsByClassName("dot");
currentDot.classList.add("dot_selected");
if (dotChild){
	dotChild.classList.add("dot_selected");

}

})

 */



