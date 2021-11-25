var value = []

if(value){
  console.log("Es verdadero")
}

if(Boolean(value) === true){
  console.log("Es verdadero")
} else {
  console.log("Falso")
}

// Es decir, JavaScript comprueba si el valor es verdadero cuando se convierte a booleano. Este tipo de verificación es tan común que se introdujeron los siguientes

// Le llamamos Truthy a un valor que al convertirlo a boolean es verdadero 

// Le llamamos Falsy a un valor que al convertirlo a boolean es fal