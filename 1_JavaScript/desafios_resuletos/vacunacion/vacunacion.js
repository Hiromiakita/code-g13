alert("Hola Bievenido al tu portal de Vacunacion")

var nombre = prompt("¿Cúal es tu nombre")

var edad = prompt("¿Cúal es tu edad")

var localidad = prompt(
  `¿Cúal es tu localidad de residencia?   
    1 Fronterizo 
    2 Resto de Mexico
  `
 )

var sexo = prompt(
  `
    ¿Cúal es tu sexo?
    1. Masculino
    2. Femenino    
  `
)

// cambio en la prueba

if (sexo == 2) {
  var embarazo = prompt("¿Estas embarazada?")
}


if (embarazo === "si") {
  var gestacion = prompt("¿En que mes estas?")
}

console.log(
 `
    Nombre: ${nombre}
    Edad: ${edad}
    Sexo: ${sexo}
    Localidad: ${localidad}
    Embarazo: ${embarazo}
    Gestacion: ${gestacion}
  `
)

if ( edad >= 18 && localidad == true) {
  console.log("Si te puedes vacunar, por ser mayor de 18 y vivir en un municipio fronterizo");
  } else if (embarazo = true && gestacion >= 9) { 
    console.log("Si te puedes vacunar, por estar embarazada y contar con más de 9 semanas de gestación");
  } else if (edad >= 30) { 
    console.log("Si te puedes vacunar, por cumplir más de 30 años en este año");
  } else {
    console.log("Lo sentimos, aún no te puedes vacunar, espera próximos avisos");
  }
  