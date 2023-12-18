const arrowIcon = document.querySelector('.fas')
const btn = document.querySelector('.arrow')
const img = document.querySelector('.item1')

function showImage() {
	img.classList.toggle('show') // dodajemy klasę show do obrazka czyli zwiększamy jego wysokość
	if (img.classList.contains('show')) {
		// console.log('OK')
		arrowIcon.style.transform = 'rotate(180deg)'
		// sprawdzamy czy nasz obrazek otrzymał klasę show a jeśli tak to obracamy strzałkę o 180deg
	} else {
		// console.log('NIE OK')
		arrowIcon.style.transform = 'rotate(0)'
		// jeśli nasz obrazek nie ma nadanej klasy show to obrót strzałki wynosi 0deg
	}
}
btn.addEventListener('click', showImage)
