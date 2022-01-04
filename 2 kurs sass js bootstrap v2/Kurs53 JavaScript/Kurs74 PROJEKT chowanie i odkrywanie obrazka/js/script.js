const arrowIcon = document.querySelector('.fas')
const btn = document.querySelector('.arrow')
const img = document.querySelector('.item1')

//funkcja bez IF
// function showImage() {
// 	img.classList.toggle('show')
// }

// btn.addEventListener('click', showImage)

// Funkcja z IF
function showImage() {
	img.classList.toggle('show')
	if (img.classList.contains('show')) {
		console.log('OK')
		arrowIcon.style.transform = 'rotate(180deg)'
		arrowIcon.style.fontSize = '75px'
	} else {
		console.log('NIE OK')
		arrowIcon.style.transform = 'rotate(0)'
		arrowIcon.style.fontSize = '36px'
	}
}
btn.addEventListener('click', showImage)
