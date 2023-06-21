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
let nota

for (let i = 0; i < nomes.length; i++) {
    notas.push(Math.random() * 10) + 1.0
}

notas = notas.map(nota => nota + 1.0)
notaMaior7 = notas.filter(nota => nota > 7)
// console.log("Notas maiores que 7: ", notaMaior7)

for (let i = 0; i < nomes.length; i++) {
    // nnomes= nomes[i]
    // nnotas= notas[i]
    // console.log("aluno: " + nomes[i], "- nota: " + notas[i].toFixed(1))
}
nomes.forEach(function (nome, index) {
    nota = notas[index]
    let situacao = notas[index] >= 7.0 ? "Aprovado" : "Reprovado"
    // console.log(nome + "- Nota: " + nota.toFixed(1) + " - " + situacao)
})

//    16
// indice=nomes.indexof("lucas")
// console.log(indice)


//      17
// indice=notas.findIndex(nota=> nota>9.0)
// console.log(indice)

//     18
// let estaNaLista = nomes.includes("lucas")
// console.log(estaNaLista);


//    19
let soma = notas.reduce((acumulador, nota) => acumulador + nota, 0)
media = soma / notas.length
// console.log(media)

//    20
todasMaioresOuIguais = notas.every(nota => nota >= media)
console.log(todasMaioresOuIguais)




