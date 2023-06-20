nomes = ['sivir', 'silvio santos',
    'shivana', 'samuel',
    'samara', 'mathews',
    'marta', 'marlon',
    'mario', 'marilia',
    'maria', 'maria',
    'marcelo', 'lucas',
    'judas', 'joão',
    'jonas', 'cirilo']
let notas = []

for (i = 0; i < nomes.length; i++) {
    notas.push(Math.floor(Math.random() * 10) + 1)
}
notas = notas.map(nota=> nota +1)
notaMaior7= notas.filter(nota => nota > 7)
console.log("Notas maiores que 7: ", notaMaior7)
