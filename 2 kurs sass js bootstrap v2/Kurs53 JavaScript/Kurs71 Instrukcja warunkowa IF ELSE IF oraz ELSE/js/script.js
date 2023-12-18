const passLength = 8
// WYMOGI
// Bardzo dobre hasło ma > 10 znaków
// Dobre hasło ma 5-10 znaków
// Słabe hasło ma < 10 znaków
if (passLength > 10) {
	console.log('Masz bardzo dobre hasło')
} else if (passLength >= 5 && passLength <= 10) {
	console.log('Masz dobre hasło')
} else {
	console.log('Masz słabe hasło ...')
}

/* Można tak:
if (HASLO_POPRAWNE) {
	console.log('Poprawne hasło, zostałeś zalogowany');
}
if (HASLO_ZLE) {
    console.log('Błędne hasło');
}
*/
/* Ale tak krócej
if (HASLO_POPRAWNE) {
	console.log('Poprawne hasło, zostałeś zalogowany')
} else {
	console.log('Błędne hasło')
}
*/
