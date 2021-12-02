// Hacer una función que convierta pesos a dólares

function PesosAdolar(pesos,dolarhoy){
  var multiplicacion = pesos / dolarhoy
  return `${pesos} pesos mexicanos son ${multiplicacion} dolares`
}

// PesosAdolar(30, 20)

// Añadir una condición para que sólo se acepten Strings

function isString(string){
  if (typeof string === 'string'){
    return 'Es una cadena de texto'
  } else {
    return 'No es una cadena de texto'
  }
}

isString("pepito perez")


// Hacer una función que halle el máximo entre dos números
function elMayor2Numeros(numero1, numero2){
  var mayor = Math.max(Number(numero1), Number(numero2))
  return mayor
}

// elMayor2Numeros(10, 100)

// Hacer una función que halle el máximo entre tres números
function elMayor3Numeros(numero1, numero2, numero3, numero4){
  var arr = [numero1, numero2, numero3, numero4]
  var mayor = Math.max(...arr)
  
  return mayor
  
}

elMayor3Numeros(750,1220,30,17550)

// Hacer una función que calcule el IVA de una cantidad (16%)
function IvaTotal(precio, tasa){
  var iva = tasa / 100
  var precioIva = iva * precio
  var precioConIva = precioIva + precio
  
  return precioConIva
}

IvaTotal(750, 16)

// Hacer una función para ingresar cualquier letra del alfabeto y verifique si es vocal o consonante
function isVowel(letter){
  var vowel = ["a", "e", "i", "o", "u"]
  var espacial = [".", ";", "."]
  
  //recuerden que toLowerCase() nos ayuda a cambiar una letra a minusculas
  
  if (vowel.includes(letter.toLowerCase())){
    return `tu letra ${letter} es una vocal`
    
  } else if(typeof letter === 'number'){
    return `tu letra ${letter} es un numero`
    
  } else if(espacial.includes(letter)){
    return `tu letra ${letter} es un caracter especial`
    
  } else if(letter / letter !== 1){
    return `tu letra ${letter} es un numero decimal`
  }
}

// isVowel(0.23)

//  podemos usar % modulo
function isFloat(number){
  if (Number.isInteger(number)){
    return "Tu numero es entero"
  } else {
    return "Tu numero es decimal"
  }
}

// isFloat(-70.30)


// Hacer una función que verifique si un número es positivo o negativo
function isPositivo(number){
     if (number < 0){
       return 'Es un numero negativo'
     } else {
       return 'Es un numero postivo'
     }
}

isPositivo(-70.400)

// Hacer una función que cuente el número de letras de una frase, no contar los espacios

function contadorLetras(string){
  var splitArray = string.split("")
    
  console.log(splitArray)
   //  almacen
  var almacen = []
  
  for (var i = 0; i < splitArray.length; i++){
      if (splitArray[i] !== " " ){
        almacen.push(splitArray[i])
      }
  }
   return almacen.length   
}


contadorLetras("Hola mundo soy carlos")

