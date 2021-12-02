var verduras = ["Lechuga", "Jitomate", "Calabaza"]
// index            0           1           2

// para acceder al valor de un arreglo tenemos
// que escribir la variable y dentro de un 
// corchete el numero de index que tiene el elemento

// console.log(verduras[0])

// puedo asiganar una posicion a un elemento dentro del array 

// verduras[3] = "Perjil"
// length devuelve en numero total de elementos
// verduras[verduras.length] = "Perejil"

// inserta elementos al final de la lista
// verduras.push("Perejil")

// elimina el ultimo elemento
// verduras.pop()

// unshift acomoda los elementos al principio del arrego
// verduras.unshift("Perejil", "Limon")

// console.log(verduras, "antes del shift")

// shift elimina el primer elemento
// verduras.shift()

// Split convierte un string a un array
// var frutas = "Manzana, Melon, Uvas"
// var frutasArr = frutas.split(",")

// slice crea otro nuevo arrego y elimina parte de la cadena
// var nuevaListaVerduras = verduras.slice(1, 3)
// console.log(nuevaListaVerduras)

// verduras.splice(2,2,"Perijil", "Limon")
// (index inicial, numero de elementos a borrar, nueva lista a insertar)

// console.log(verduras, "antes")
// verduras.sort()
// console.log(verduras, "despues")
// sort acomoda los elementos de forma alfabetica, y para acomodar de forma numerica necesitos hacer uso de la funcion que esta dentro de sort 
// var numeros = [2,8,23,50,10]
// numeros.sort(function(a,b){return a - b })
// console.log(numeros)

// reverse vultea el array
// verduras.reverse()

// concat concatena o une dos array y crea un nuevo array
// var frutas = ["fresa", "mango"]
// var listaDeCompras = frutas.concat(verduras)
// console.log(listaDeCompras)

// verifica si un elemento esta dentro del arreglo
// console.log(verduras.includes("Lechuga"))

// como vaciar un arreglo
// verduras.length = 0
// verduras = []

console.log(verduras )











