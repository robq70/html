// NAV MENU
// pobieramy dwie zmienne które mają być przeszukiwane na stronie nav i burger-btn
const nav = document.querySelector('.nav')
const navBtn = document.querySelector('.burger-btn')
// pobieramy kolejną zmienną i wybieramy querySelectorAll żeby pobierał wszystkie i aby po kliknięciu na pozycję w menu całość znikała
const allNavItems = document.querySelectorAll('.nav__item')
// zmienna pobierająca dane żeby zmienić kolor burgera na czarny na białych tłach
const navBtnBars = document.querySelector('.burger-btn__bars')
// zmienna do section
const allSections = document.querySelectorAll('.section')
// zmienna do aktualnego roku w footer
const footerYear = document.querySelector('.footer__year')

// tworzymy funkcję któa nam przełączy lub wyłączy menu nav
const handleNav = () => {
	nav.classList.toggle('nav--active')

	// usuwa klasę navBtnBars kolr czarny na biały kiedy klikniemy burger czarny na białej stronie
	navBtnBars.classList.remove('black-bars-color')

	// powoduje że kiedy po kliknięciu na czarny burger zmiania on kolor na biały to przy ponownym kliknięciu i wyjściu na białą stronę automatycznie ponownie staje się czarny
	if (!nav.classList.contains('nav--active')) {
		handleObserver()
	}

	// nasłuchuje wszytskie linki przechowywane w item i w momencie kliknięcia na któryś z nich wywołujemy to samo co wyżej tylko nie jako toggle tylko chcemy usunąć menu
	allNavItems.forEach(item => {
		item.addEventListener('click', () => {
			nav.classList.remove('nav--active')
		})
	})
	handleNavItemsAnimation()
}

// funkcja wywołująca animację menu tak aby wchodziły z opóźnieniem .Funkcję wywołujemy w funkcji wyżej po tym jak po click menu zostaje wywołane
const handleNavItemsAnimation = () => {
	let delayTime = 0
	allNavItems.forEach(item => {
		item.classList.toggle('nav-items-animation')
		// dla każdego naszego linku dodamy sobie styl animationDelay (w JS nie możemy zapisać animation-delay tylko stosujemy notację wielbłądzią) którego czas będzie się równał 0s
		item.style.animationDelay = '.' + delayTime + 's'
		// i do każdego elementu dodajemy opóźnienie 1s więcej
		delayTime++
	})
}

// funkcja zawsze aktualny rok na stronie
const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

// funkcja która obserwuje na jakiej sekcji jesteśmy żeby nadpisać kolor burgera
const handleObserver = () => {
	const currentSection = window.scrollY

	allSections.forEach(section => {
		if (section.classList.contains('white-section') && section.offsetTop <= currentSection + 60) {
			navBtnBars.classList.add('black-bars-color')
		} else if (!section.classList.contains('white-section') && section.offsetTop <= currentSection + 60) {
			navBtnBars.classList.remove('black-bars-color')
		}
	})
}
// wywołujemy funkcję roku w stopce
handleCurrentYear()

// dodajemy nasłuchiwanie na click aby wywołać funkcję handleNav
navBtn.addEventListener('click', handleNav)

// wywołujemy funkcję nadpisującą kolor burgera
window.addEventListener('scroll', handleObserver)
