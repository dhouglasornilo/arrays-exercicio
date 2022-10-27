// Exercício 2
// Com os arrays criados, agora vamos observar os arrays. Faça o que se pede abaixo, utilizando `console.log()`:

const arrayNumber = [10,18,6,50,35,1]
const arrayString = ["Ully","Thor","Bob","Petúnia","Alfredo","Zoe"]
const arraySortido = ["Dhouglas",26,true,"Jaci",21,false]

// Imprima a quantidade de itens de cada array (utilize um console.log() para cada impressão);

// Utiliza-se .length ao final de cada array para saber a quantidade de elementos existentes no array
console.log(arrayNumber.length)
console.log(arrayString.length)
console.log(arraySortido.length)

// Imprima o primeiro item do primeiro array, o segundo item do segundo array, e o terceiro item do terceiro array;

// Utiliza-se [Numero do elemento] para saber qual é o elemento correspondente aquela posição.
console.log(arrayNumber[0])
console.log(arrayString[1])
console.log(arraySortido[2])

// Verifique se um item está incluído no primeiro array e depois no terceiro array e imprima o resultado destas verificações
// no console.log(). A primeira impressão deve retornar um booleano true e a segunda deve retornar um booleano false. 

// Utiliza-se .includes(elemento) para verificar em booleano (true or false) se aquele elemento existe naquele array. 
console.log(arrayNumber.includes(18))
console.log(arraySortido.includes("Jaciane"))