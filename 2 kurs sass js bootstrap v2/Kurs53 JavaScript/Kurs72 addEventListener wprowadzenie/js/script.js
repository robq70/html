const btn1 = document.querySelector('#btn1')
const btn2 = document.querySelector('.btn2')

function cbtn1() {
	console.log('Kliknięto przycisk nr 1')
}

function addnum(x, y) {
	console.log(2 + 2)
}

// Wywołanie funkcji przyciskami
// zmienna do której pobraliśmy jakiś element.metoda('działanie wywołujace', nazwa funkcji)
btn1.addEventListener('click', cbtn1)
btn2.addEventListener('click', addnum)
