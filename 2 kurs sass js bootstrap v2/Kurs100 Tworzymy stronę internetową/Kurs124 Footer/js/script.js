document.addEventListener('DOMContentLoaded', function () {
	const nav = document.querySelector('.navbar')

	const allNavItems = document.querySelectorAll('.nav-link')
	const navList = document.querySelector('.navbar-collapse')

	function addShadow() {
		if (window.scrollY >= 300) {
			nav.classList.add('shadow-bg')
		} else {
			nav.classList.remove('shadow-bg')
		}
	}

	// dla każdego (forEach) elementu znajdującego się w (allNavItems) nadajemy sobie na każdy pojedynczy link item => item.addEventListener nasłuchiwanie na ('click', kty wywołuje funkcję strzałkową ()  => navList.classList.remove('show'))) usuwającą nam klasę show.
	allNavItems.forEach(item => item.addEventListener('click', () => navList.classList.remove('show')))
	window.addEventListener('scroll', addShadow)
})
