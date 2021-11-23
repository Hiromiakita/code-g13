// Script = Instrucciones = Programa
// Este es un comentario en JavaScript

// Mi primer línea de código en Js

// console.log nos permite enviar mensajes a la consola

// Salidas a la consola ("Texto");
// console.log("Hola mundo!!");
// console.log(":D");
// console.log("Hoy es un día muy importante");

// Salidas a la consola (Números);
// console.log(10);
// console.log(-10);
// console.log(10/5);
// console.log(10 + 30);

// Salidas a la consola (Booleanos: verdadero o falso);
// console.log(true);
// console.log(false);
// console.log(5>2);
// console.log(5>20);

// Salidas al documento o al explorador
// document.write("Hooola");
// document.write(":D");
// document.write("Jjeje");

// Salidas como alertas
// alert("Soy una alerta");
// alert("Soy otra alerta");
// alert("Soy otra alerta, jejeje");


// entrada a través de un prompt
// prompt("Escribe tu nombre");

// Palabra reservada: es una palabra propia del lenguaje.
// JavaScript ejecuta el código conforme lo encuentra es decir de izq->der arr->aba


// VARIABLES

// Declarar variables
// Variable: Puede contener información: texto, número, un objeto...

// var es una palabra reservada que nos permite crear variables
// Declarar o crear una variable
var nombre;

// Almacenar infomación o asignar un valor a una variable con el símbolo =
nombre = "Diana López";

// Puedo enviar a la consola directamente un mensaje o enviar lo que hay almacenado en una variable
console.log(nombre);

// Crear y almacenar información en una varible
var mascota = "Firulaaais";

console.log(mascota);

var nombreUsuario = "Hiromi";
var nombreUsuarioPrincipal = "Diego";
var edad = 12;
var pais = "MX";

console.log(edad);
console.log(pais);

// Reasignación de variables: Cambiamos el valor que se tenía con anterioridad
nombre = "Juan Pérez";

console.log(nombre);

edad = 100;
console.log(edad);

// TIPOS DE DATO

// Strings: Cadenas de caracteres o de texto (encerrrdas siempre entre comillas)
var texto1 = "a";
var texto2 = "hola";
var texto3 = "soy una cadena de caracteres";
var texto4 = 'yo también soy un string';

console.log(texto4);

// Concatenación de valores: unir más de un texto (u otro valor) en uno
// Símbolo + nos permite unir textos
var texto5 = texto2 + ', ' + texto3;

texto4 = ':D';
console.log(texto5);

// NUMBER: Cualquier valor numérico inclyendo negativos, positivos y decimales
var edadUsuario = 10;
var costo = 1000;
var temperatura = -10;
var promedio = 8.3;

console.log(promedio);

// BOOLEAN: true(verdadero) o false(falso) no llevan comillas
//  true y false son palabras reservadas
var esMayor = true;
var esNegativo = false;
var esIgual = true;
var esAmigable = false;

console.log(esIgual);

// Conocer el tipo de dato de una variable con typeof
console.log(nombre);
console.log(typeof nombre);

console.log(edad);
console.log(typeof edad);

console.log(esMayor);
console.log(typeof esMayor);

// puedo enviar a la consola más de uno, separado con coma
console.log(typeof esMayor, typeof nombre, typeof edad);
console.log(nombre, esIgual, esAmigable, nombreUsuario, texto5);

// UNDEFINED: variables indefinidas, no se las ha asignado un valor
let numeroTelefonico;
console.log(numeroTelefonico);
console.log(typeof numeroTelefonico);

// NULL
let ganador = null;
console.log(ganador);
console.log(typeof ganador);
