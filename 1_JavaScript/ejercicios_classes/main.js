// 1.- Haz una clase llamada Persona que siga las siguientes condiciones:
//             Sus atributos son: nombre, edad, RFC, sexo, peso y altura.
//             calcularIMC()
//             esMayorDeEdad()
//             El constructor pide nombre, edad,sexo,peso y altura
//             Generar el RFC a partir de el nombre, edad y sexo


class Persona {
   constructor(nombre, edad, sexo, peso, altura) {
     this.nombre = nombre;
     this.edad = edad;
     this.sexo = sexo;
     this.peso = peso;
     this.altura = altura
   }

   calcularIMC(){
      let imc = (this.peso / (this.altura * this.altura )).toFixed(2)
      return imc
   }

   esMayorDeEdad(){
    //  revisar el operador ternario
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator 

      return this.edad >= 18 
        ?  `${this.nombre} Es mayor de Edad`
        : `${this.nombre} Es menor  de Edad`
   }

   obtenerRFC(){
        let splitName = (this.nombre).split(" ")
        let apellidoPaterno = splitName[1].slice(0, 3).toUpperCase()
        let apellidoMaterno = splitName[2].slice(0, 1).toUpperCase()
        let fechaNacimiento = this.edad.split("/")[2]

        return apellidoPaterno + apellidoMaterno + fechaNacimiento 
   }

}

let manuel = new Persona("Manuel Chavez Rosario", "12/12/84", "H", 70, 1.70)
// console.log(manuel.calcularIMC())
// console.log(manuel.esMayorDeEdad())
// console.log(manuel.obtenerRFC())


// 2.- Crear una clase Cuenta que tenga los siguientes atributos y metodos:
//             -Titular y cantidad
//             -ingresar(cantidad) 
//             -retirar(cantidad)
//             Hacer las validaciones previas
//             Como regla de negocio no debe de tener más de $900 y menos de $10


class Cuenta {
  constructor(titular, cantidad) {
    this.titular = titular
    this.cantidad = cantidad
  }

  
}

