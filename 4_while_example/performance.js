function conWhile(){
  var acumulador = 0

  while (acumulador < 3) {
    acumulador++
    console.log(acumulador)
    console.log("No es Mayor a 10")
  }

  return ("Termino la función de while")
}

function conDoWhile(){
  var acumulador = 0  
  do{
    acumulador++
  } while (acumulador > 10)

  return ("Termino la función Do while")
}

var test0 = performance.now()
console.log(test0)
conWhile()
var test1 = performance.now()
console.log("La llamada a hacerAlgo tardó " + (t1 - t0) + " milisegundos.");


