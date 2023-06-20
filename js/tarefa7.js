console.log("oi")
i = 0
nomes = ['sivir',   'silvio santos',
'shivana', 'samuel',
'samara',  'ramom',
'mathews', 'marta',
'marlon',  'mario',
'marilia', 'maria',
'maria',   'marcelo',
'lucas',   'judas',
'joão',    'jonas',
'cirilo']

let posicao = 5 // Defina a posição do elemento a ser removido
let nomeRemovido = nomes.splice(posicao, 1)

console.log(nomeRemovido)
console.log(nomes)
