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
console.log(producto.capacidad)

// para acceder a un array dentro de un objeto
console.log(producto.imagen[2])

// cambiar un valor dentro del elemento
producto.ram = "8gb"

// para agregar un nuevo valor
producto.camara = "40px"

console.log(producto.camara)

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

// se siguen respetando los metodos para los arryas
producto.imagen.push("pepito.pdf")
console.log(producto.imagen)

const diasDenvio = {
  dias: 15,
  transportista: "Propio"
}

// let y const 
const producto = {
...diasDenvio,
//   llave: valor => numerico, boolean, string, otro arry, otro objeto, || &&  
 nombre: "Xiaomi Redmi Note 10S 128GB 6GB RAM (Deep Sea Blue)",
 precio: 5919,
 ram: "6gb",
 capacidad: "128gb",
 imagen: ["imagen.jpg", "imagen2.jpg", "imgen3.png"]
//  index      0                 1           2
}

// DESTRUCTURACION
const { nombre, precio, ram, capacidad } = producto
console.log(producto)

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

// Metodos mas usados
Object.values(producto)
Object.keys(producto)

const xaomin = [
  producto,
  { 
    nombre: "Xiaomi Redmi Note 10S 128GB 6GB RAM (Deep Sea Blue)",
    nombre: "pepito",
     precio: 5919,
     ram: "6gb",
     capacidad: "128gb",
     imagen: ["imagen.jpg", "imagen2.jpg", "imgen3.png"]
  },
  {
    nombre: "Xiaomi 2 128GB 6GB RAM (Deep Sea Blue)",
     precio: 5919,
     ram: "6gb",
     capacidad: "128gb",
     imagen: ["imagen.jpg", "imagen2.jpg", "imgen3.png"]
  }
]

console.log(xaomin)

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

console.log(diccionario.informativas)

// NOTACION DE CORCHETES
// se anota el nombre de la llave
console.log(diccionario[curso])
