// NAV MENU
// pobieramy dwie zmienne które mają być przeszukiwane na stronie nav i burger-btn
const nav = document.querySelector('.nav')
const navBtn = document.querySelector('.burger-btn')
// pobieramy kolejną zmienną i wybieramy querySelectorAll żeby pobierał wszystkie i aby po kliknięciu na pozycję w menu całość znikała
const allNavItems = document.querySelectorAll('.nav__item')

// tworzymy funkcję któa nam przełączy lub wyłączy menu nav
const handleNav = () => {
	nav.classList.toggle('nav--active')

	// nasłuchuje wszytskie linki przechowywane w item i w momencie kliknięcia na któryś z nich wywołujemy to samo co wyżej tylko nie jako toggle tylko chcemy usunąć menu
	allNavItems.forEach(item => {
		item.addEventListener('click', () => {
			nav.classList.remove('nav--active')
		})
	})
}
// dodajemy nasłuchiwanie na click aby wywołać funkcję handleNav
navBtn.addEventListener('click', handleNav)
