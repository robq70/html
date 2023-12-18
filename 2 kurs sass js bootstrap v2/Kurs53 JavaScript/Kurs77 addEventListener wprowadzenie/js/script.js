const btn1 = document.querySelector('#btn1')
const btn2 = document.querySelector('.btn2')

function cbtn1() {
	console.log('Kliknięto przycisk nr 1')
}

function addnum() {
	console.log(2 + 2)
}
btn1.addEventListener('click', cbtn1)
// Jeśli podalibyśmyw addEventListener click1() zamiast click1 to funkcja wywołałaby się sama nie trzeba byłoby klikać

btn2.addEventListener('click', addnum)

// wywołanie obu funkcji zobaczymy w devtoolsach

// SKŁADNIA
ZMIENNA.addEventListener('click', FUNKCJA)