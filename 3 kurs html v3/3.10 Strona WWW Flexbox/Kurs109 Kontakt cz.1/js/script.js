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

// dodajemy nasłuchiwanie na click aby wywołać funkcję handleNav
navBtn.addEventListener('click', handleNav)
