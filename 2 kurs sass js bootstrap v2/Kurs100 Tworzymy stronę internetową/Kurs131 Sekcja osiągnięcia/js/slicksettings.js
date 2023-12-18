// Żeby nie mieszać js z jquery robimy osobny plik i w miejsce klasy .multiple-items wpisujemy naszą stworzoną w html .team-carousel
// Jeśli chcemy coś w slicku pozmieniać na stronie jest zakładka settings gdzie jest wyjaśnione jakie parametry da się zmienić i w jaki sposób to zrobić.

$('.team-carousel').slick({
	// dodajemy arrows z false aby usunąć domyślne strzałki next previous
	arrows: false,
	// autoplay aby się automatycznie przewijało
	autoplay: true,
	mobileFirst: true,
	//to komentuje kasujemy jest niepotrzebne infinite: true,
	// na mobilnych urządzeniach możemy widzieć tylko jedną kartę ze względu na rozdzielczość ekranu więc dajemy 1 slajd i nie możemy dać przewijania więcej kart niż 1.
	slidesToShow: 1,
	slidesToScroll: 1,
	// poprzez responsive definiujemy zachowanie się slajdów przy innych rozdzielczościach
	responsive: [
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
			},
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
			},
		},
	],
})
