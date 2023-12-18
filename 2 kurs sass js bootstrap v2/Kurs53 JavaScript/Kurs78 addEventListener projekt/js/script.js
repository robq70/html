const btn1 = document.querySelector('#btn1')
const btn2 = document.querySelector('.btn2')
const square = document.querySelector('.color')
const removeColor = document.querySelector('.remove-color')

function redColor() {
	// square.classList.add('red')
	// square.classList.remove('blue')
	square.classList.toggle('red')
}
function blueColor() {
	// square.classList.add('blue')
	// square.classList.remove('red')
	square.classList.toggle('blue')
}

btn1.addEventListener('click', redColor)
btn2.addEventListener('click', blueColor)

// gdybyśmy zostawili tylko add to po każdym kliknięciu dodawalibyśmy tylko nową klasę  a ponieważ red jest najniżej to później nie byłoby żadnej zmiany ponieważ w css ona jest ostatnia i nadpisuje wszystko dlatego musimy użyć dodatkowo remove aby usunąć starą wartość - patrz devtools. Toggle jest przełącznikiem gold/red lub gold/blue i jeśli nie usuniemy koloru red klikając drugi raz na przycisk to blue nam się nie pokaże

function deleteColor() {
	square.classList.remove('red', 'blue')
}

removeColor.addEventListener('click', deleteColor)
