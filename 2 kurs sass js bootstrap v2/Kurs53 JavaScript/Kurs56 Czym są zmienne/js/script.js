// Zmienne VAR, LET, CONST

// zmienna stała przypisujemy do niej coś co później nie będziemy zmieniać. Nie może być pusta musi być coś zadeklarowane
const color = 'niebieski'

// Jeśli będziemy w przyszłości coś zmieniać to używamy let. Może być pusty a wartość możemy zadeklarować później
let age = 25

age = 33

const userName = 'Klaudia'
// console.log(age)

// Zapis z cudzysłowem ''
console.log('Cześć, mam na imię ' + userName + ' mam ' + age + ' lat i mój ulubiony kolor to ' + color)
//Prawidłowy zapis z gravisami ``
console.log(`Cześć, mam na imię ${userName} ,mam ${age} lat i mój ulubiony kolor to ${color}`)

const myName = 'Robert'
const myStatus = 'praktyki'
const myPlace = 'Zawiercie'
let howLong = 2

console.log(
	`Cześć mam na imię ${myName}, mieszkam w miejscowości ${myPlace} i jestem na praktykach od ${howLong} miesięcy.`
)
