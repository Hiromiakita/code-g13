// let y const 
const producto = {
  //   llave: valor => numerico, boolean, string, otro arry, otro objeto, || &&  
   nombre: "Xiaomi Redmi Note 10S 128GB 6GB RAM (Deep Sea Blue)",
   precio: 5919,
   ram: "6gb",
   capacidad: "128gb",
   imagen: ["imagen.jpg", "imagen2.jpg", "imgen3.png"]
//  index      0                 1           2
}

// formas de acceder a un objeto
// console.log(producto.capacidad)

// para acceder a un array dentro de un objeto
// console.log(producto.imagen[2])

// cambiar un valor dentro del elemento
producto.ram = "8gb"

// para agregar un nuevo valor
producto.camara = "40px"

// console.log(producto.camara)

// let y const 
// const producto = {
//   //   llave: valor => numerico, boolean, string, otro arry, otro objeto, || &&  
//    nombre: "Xiaomi Redmi Note 10S 128GB 6GB RAM (Deep Sea Blue)",
//    precio: 5919,
//    ram: "6gb",
//    capacidad: "128gb",
//    imagen: ["imagen.jpg", "imagen2.jpg", "imgen3.png"]
// //  index      0                 1           2
// }

// se siguen respetando los metodos para los arryas
// producto.imagen.push("pepito.pdf")
// console.log(producto.imagen)

const diasDenvio = {
  dias: 15,
  transportista: "Propio"
}

// let y const 
// const producto = {
// ...diasDenvio,
// //   llave: valor => numerico, boolean, string, otro arry, otro objeto, || &&  
//  nombre: "Xiaomi Redmi Note 10S 128GB 6GB RAM (Deep Sea Blue)",
//  precio: 5919,
//  ram: "6gb",
//  capacidad: "128gb",
//  imagen: ["imagen.jpg", "imagen2.jpg", "imgen3.png"]
// //  index      0                 1           2
// }

// DESTRUCTURACION
// const { nombre, precio, ram, capacidad } = producto
// console.log(producto)

// let y const 
// const producto = {
//   //   llave: valor => numerico, boolean, string, otro arry, otro objeto, || &&  
//    nombre: "Xiaomi Redmi Note 10S 128GB 6GB RAM (Deep Sea Blue)",
//    precio: 5919,
//    ram: "6gb",
//    capacidad: "128gb",
//    imagen: ["imagen.jpg", "imagen2.jpg", "imgen3.png"]
// //  index      0                 1           2
// }

// Metodos mas usados
// Object.values(producto)
// Object.keys(producto)

// const xaomin = [
//   producto,
//   { 
//     nombre: "Xiaomi Redmi Note 10S 128GB 6GB RAM (Deep Sea Blue)",
//     nombre: "pepito",
//      precio: 5919,
//      ram: "6gb",
//      capacidad: "128gb",
//      imagen: ["imagen.jpg", "imagen2.jpg", "imgen3.png"]
//   },
//   {
//     nombre: "Xiaomi 2 128GB 6GB RAM (Deep Sea Blue)",
//      precio: 5919,
//      ram: "6gb",
//      capacidad: "128gb",
//      imagen: ["imagen.jpg", "imagen2.jpg", "imgen3.png"]
//   }
// ]

// console.log(xaomin)

// let y const
// diccionario // objeto
// web, code, marketing, ui/ux, becas, sesiones infomativas, diseño
const curso = "informativas"

const diccionario = {
  disenio: "Diseño",
  web: "Curso de sesión para web",
  uiux: "UI / UX",
  informativas: "Sesiónes de becas informativas shalalalalalal"
}

// console.log(diccionario.informativas)

// NOTACION DE CORCHETES
// se anota el nombre de la llave
// console.log(diccionario[curso])


// EJEMPLO EXTRA //


const ovejitas = [
  { name: 'Noa', color: 'azul' },
  { name: 'Euge', color: 'rojo' },
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo'}
]

const perros = [
  { name: 'Bango', color: 'rojo' },
  { name: 'Cliffort', color: 'rojo' },
]
      

// cuando queramos iterar un array que contenga objetos hay que usar
// Object.values
// la flecha es un return implicto cuando es en la misma linea

function contarOvejas(ovejas) {
  // aquí tu magia
  const filter = Object.values(ovejas).filter(({ name, color }) => {
      if (color === 'rojo'){
        
        if (name.includes("a") || name.includes("n")){
           return { name, color }
        }
      }
  })
  return filter
}


// contarOvejas(ovejitas)



// let y const 
const productoCopia = {
  //   llave: valor => numerico, boolean, string, otro arry, otro objeto, || &&  
   nombre: "Xiaomi Redmi Note 10S 128GB 6GB RAM (Deep Sea Blue)",
   precio: 5919,
   ram: "6gb",
   capacidad: "128gb",
   imagen: {
     ima1: "imagen.jpg",
     ima2: "imagen2.png",
     ima3: "imagen3.jpeg"
   }
}

// console.log(productoCopia.imagen.ima1);

const mascotas = [
  { nombre: "Bimbo", especie: "Hamster", comidasFavoritas: ["Semillas", "Nueces"] },
  { nombre: "Don Pepe", especie: "Perico", comidasFavoritas: ["Semillas"] },
  { nombre: "Mila", especie: "Perro", comidasFavoritas: ["Pericos", "croquetas"] }
];

// console.log(mascotas);
// console.log(mascotas[0].comidasFavoritas[1]);
let nombresMascotas = [];

for(let i = 0; i < mascotas.length; i++) {
  nombresMascotas.push(mascotas[i].nombre);
}

console.log(nombresMascotas);

// map ** Se verá a profundidad más adelante

// map nos regresa (retorna) un nuevo arreglo
// callbacks** Tema de más adelante

let nombresMascotas2 = mascotas.map(elemento => elemento.nombre);

console.log(nombresMascotas2);

// Por leer 
// ¿Qué es un callback?
// Métodos en arreglos:
// forEach
// map
// filter
// reduce

