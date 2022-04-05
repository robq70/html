// Pobieramy klasę nav-mobile do naszej zmiennej
const navMobile = document.querySelector('.nav-mobile')
const navBtn = document.querySelector('.hamburger')
// zmienna do aktualnego roku w footer
const footerYear = document.querySelector('.footer__year')

const handleNav = () => {
	navBtn.classList.toggle('is-active')
	navMobile.classList.toggle('nav-mobile--active')
}

// funkcja wykrywająca klika na nasz hamburger
navBtn.addEventListener('click', handleNav)

// funkcja zawsze aktualny rok na stronie
const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}
handleCurrentYear()
