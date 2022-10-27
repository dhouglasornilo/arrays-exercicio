// Exercício 3

// Agora, vamos manipular os arrays, adicionando ou removendo informações.
// Para isso, crie **três** novos arrays, chamados `nomeDoArrayOriginalCopia`,
// e faça o que se pede abaixo nas cópias dos arrays originais;
const arrayNumber = [10,18,6,50,35,1]
const arrayString = ["Ully","Thor","Bob","Petúnia","Alfredo","Zoe"]
const arraySortido = ["Dhouglas",26,true,"Jaci",21,false]

//Utiliza-se const nome da copia do array = array original.slice() para fazer uma cópia de um array
const arrayNumberCopia = arrayNumber.slice()
const arrayStringCopia = arrayString.slice()
const arraySortidoCopia = arraySortido.slice()

// Adicione um item `number` ao início do primeiro array. Utilize `console.log()` para exibir o original e a cópia.
// Utiliza-se nome do array .unshift(elemento) para adicionar um elemento ao início de um array.
arrayNumberCopia.unshift(2)

console.log(arrayNumber)
console.log(arrayNumberCopia)

// Remova o último item do segundo array. Utilize `console.log()` para exibir o original e a cópia;
// Utiliza-se nome do array .pop() para remover o último elemento do array.
arrayStringCopia.pop()

console.log(arrayString)
console.log(arrayStringCopia)

// Remova o segundo item do terceiro array. Utilize `console.log()` para exibir o original e a cópia
// Utiliza-se nome do array.splice() para remover um elemento específico a partir de cada posição do elemento.
// Exemplo: array.splice(0, 1) remove o primeiro item do array. No ex abaixo eu quero remover o segundo item do ultimo array então:
arraySortidoCopia.splice(1, 1)

console.log(arraySortido)
console.log(arraySortidoCopia)