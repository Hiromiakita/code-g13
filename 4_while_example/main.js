var numerosDeLaSuerte = []
var userinput

// acumuador
var acumulador = 0
console.log(acumulador)
console.log(numerosDeLaSuerte, "antes de")

// while (numerosDeLaSuerte.length < 10){
//   userinput = prompt("¿Cuales son tus numeros de la suerte?")
//   numerosDeLaSuerte.push(userinput)
//   console.log(`Contador => ${counter++}`)
// }

// console.log(`Estos son los numeros que elejiste ${numerosDeLaSuerte}`)


// do while sintaxis
do {
  // esto que esta aqui
  userinput = prompt("¿Cuales son tus numeros de la suerte?")
  numerosDeLaSuerte.push(userinput)
  console.log(numerosDeLaSuerte, "dentro de")
  // console.log(`Contador => ${counter++}`)
  acumulador++
  
} while ( acumulador < 10)

console.log(numerosDeLaSuerte, "al final de")



// -----FOR ------
// for await of loops (Funciones asyncronas)
// for await (var valor of [arreglo]){
//   // ....
// }

// for (var x of ["a", "b", "c"]){
//   console.log(x)
//   if (x === "b") break
// }

var frutas = ["uva", "manzana", "pera"]

// for (var i = 0; i < 3; i++){
//   console.log(frutas[i])
// }

// for (var i = 0; i < frutas.length; i++){
//   console.log(frutas[i])
// }

for (var i of frutas){
  console.log(i)
  if(i === 'uva'){
    console.log(i, "Aqui esta") 
    break
  }
}

// SWITCH
switch ("Melon") {
  case "Manzana":
    console.log("El precio de la manzana es de 50 pesos")
    break;
  case "Mandarina":
    console.log("El precio de la mandariana es de 20 pesos")
    break;
  case "Mango":
    console.log("El precio del mango es de 30 pesos el kilo")
    break;
  default:
    console.log("No tengo de eso joven")
}

switch ("Sabado"){
  case "Lunes":
  case "Martes":
  case "Miercoles":
  case "jueves":
  case "Viernes":
    
  console.log("Es dia laboral")
  break;
    
  case "Sabado":
  case "Domingo":
  console.log("Descanso laboral")
  break
    
  default:
    console.log("Ese dia no existe")
}





