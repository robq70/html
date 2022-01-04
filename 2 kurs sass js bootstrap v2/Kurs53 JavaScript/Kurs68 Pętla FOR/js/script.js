const fruits = ['apple', 'banana', 'orange', 'lemon']

// for (let i = 0; i < 4; i++) {
// jeżeli elementy w tablicy będzie przybywać to nie możemy się odwołać do pierwotnej wartości tylko odwołać do właściwości tablicy lenght która przechowuje informację o aktualnej wielkości tablicy
for (let i = 0; i < fruits.length; i++) {
	console.log(fruits[i])
}

console.log(fruits.length)
