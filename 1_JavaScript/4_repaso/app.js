// // Repaso

// // Declaración de variables y asignación

// var nombre = 'Hiromi';
// var nombre2 = "Hiromi";

// console.log(nombre);

// // Reasignar el valor de una variable

// nombre = 'Carlos';

// // TIPOS DE DATO PRIMITIVOS

// // String - Comillas
// // Number - No llevan comillas
// // Bolean - true o false (sin comillas)
// // undefined - para variables que no tienen asignado un valor o es desconocido

// // Provienen de un objeto
// // null - 
// // array
// // object

// // typeof nos permite conocer el tipo de dato de una variable
// var edad = null;

// console.log(typeof edad);

// // array
// var edades = [1, 2, 4, 6];
// console.log(typeof edades);

// // Operadores aritméticos nos dan como resultado un valor numérico
// // suma
// // restas
// // multiplicaciones 
// // divisiones
// // potencias
// // raíz cuadrada

// var a = 10;
// var b = 20;
// var c = a + b;
// console.log(c);
// console.log(30/15);
// console.log(3+4/2);

// // Operadores de comparación o condicionales nos dan como resultado un true o un false
// // > < >= <= == === != !==
// console.log(30>15);
// console.log(100 < 90);
// console.log(100 >= 90);
// console.log(100 == 1);
// console.log(100 != 1);
// // == Comparaciones NO estrictas, no importa si el tipo de dato es distinto
// console.log(100 == 100);
// console.log(100 == '100');

// // Comparaciones estrictas
// console.log(100 === 100);
// console.log(100 === '100');

// // Operadores lógicos nos dan como repuesta un true o un false
// // Los operadores lógicos evalúan más de un caso

// // AND - Todos los casos tienen que cumplirse para recibir un true
// console.log(10 > 5 && 100 === 100);
// console.log(10 < 5 && 100 === 100);
// console.log(10 > 2 && 'hola' === 'hola' && 100 >= 100);
// console.log(10 > 2 && 'hola' === 'holaA' && 100 >= 100);

// // OR - Al menos un caso tiene que cumplirse para recibir un true
// console.log(10 > 100 || 1 === 0 || 'a' === 'a');
// console.log(10 == 10 || 'hola' === 'hola');

// // Valores thruhy - falsy
// console.log(0 == false);
// console.log(1 == true);
// console.log(true + true);
// console.log(false + false);
// console.log(5 * false);
// console.log(5 * true);


// CONDICIONES funcionan con valores booleanos
// if
// if + else
// if + else if + else
// switch

// if(Aquí ponemos la condición a evaluar) {
//      Aquí ponemos lo que queremos que suceda si la condición se cumple
// }
var edad = 1;

// Usamos sólo if si no tenemos una segunda acción a cumplirse
// if(edad > 20) {
//     console.log('sí puedes ingresar');
// }

// if('a' == 'a') {
//     console.log(':D');
//     console.log(':)');
// }

// if('hola' != 2) {
//     console.log('son diferentes!!');
// }

// // if - else los utilizamos para tener al menos dos opciones (para true y para false)

// var nombre = ':S';

// if(nombre === 'Luis') {
//     console.log('Bienvenido, Luis :D');
// } else {
//     console.log('Bienvenido extrañe');
// }

// var costoBoleto = 1;
// if(costoBoleto === 100) {
//     console.log('tu boleto es válido');
// } else {
//     console.log('tu boleto es inválido');
// }

// // if - else if - else -> tengo más de una opción con válida

// if(costoBoleto > 600) {
//     console.log('tu boleto es zona roja');
// } else if (costoBoleto > 400) {
//     console.log('tu boleto es zona azul');
// } else if( costoBoleto > 200) {
//     console.log('tu boleto es zona verde');
// } else {
//     console.log('tu boleto es de la zona general');
// }

// // ejemplo prompt nombre

// // Tomamos el valor ingresado en el promt
// // var nombreIngresado = prompt('Ingresa tu nombre');
// // // Quitamos los espacios vacíos
// // var nombreSinEspacios = nombreIngresado.trim();

// // // evaluamos si nombreIngresado tiene al menos
// // if(nombreSinEspacios && nombreSinEspacios != ' ' && nombreSinEspacios.length > 6) {
// //     console.log('usuario válido');
// // } else {
// //     console.log('nombre inválido');
// // }

// // tomar valor y convertirlo 
// // toUpperCase();
// // toLowerCase();

// var opcion = prompt("Ingresa 'a' para un retiro o 'b' para salir");
// opcion = opcion.toLowerCase();


// if(opcion === 'a') {
//     console.log('HACER RETIRO');
// } else if (opcion === 'b') {
//     console.log('SALIENDOOOOO :C');
// } else {
//     console.log('opción inválida');
// }

// ARREGLOS son una lista de elementos no necesariamente del mismo tipo
// Lista entre corchetes, separando cada elemento con una coma

// var nombreA = 'Alan';
// var nombreB = 'Victoria';
// var nombreC = 'Walter';

// // Crear arreglos
// var nombres = ['Alan', 'Victoria', 'Walter'];
// var edades = [19, 19, 29, 9, 0];
// var cosas = [':D', 10, true, ['a', 'e', 'i'], ['x', 'y', 'z']];
// var paises = [];

// // Acceder a una posición del arreglo

// console.log(nombreA);
// // mostramos arreglo completo
// console.log(nombres);
// // mostramos una posición del arreglo
// console.log(nombres[0]);

// console.log(cosas);
// console.log(cosas[3]);
// console.log(cosas[3][2]);
// console.log(cosas[4][1]);

// // Métodos
// console.log(paises);
// paises.push('MX');
// console.log(paises);
// paises.push('USA');
// console.log(paises);
// paises[0] = 'IND';
// console.log(paises);


// CICLOS

// for
// while
// do while

// map - forEach - filter POR VER
// iteración -> vuelta
// for (valor inicial del contador con una variable; valor tope del contador; incremento del contador) {

// }

// for(var i = 0; i < 10; i++ ) {
//     console.log('hola' + i);
// }

// for(var i = 50; i < 100; i++) {
//     console.log(i);
// }

// modulo num%num nos da como resultdo el residuo de la división de esos dos números

// console.log(10%3);
// console.log(10%2);
// console.log(7%2);
// console.log(99%2);


// for(var i = 0; i <= 100; i++) {
//     if(i%2 === 0) {
//         console.log(i + ' num par');
//     } else {
//         console.log(i + ' num impar');
//     }
// }

// console.log(resultado);

// tabla del 2

// 2 x 1 = 2
// 2 x 2 = 4
// 2 x 3 = 6
// 2 x 4 = 8
// 2 x 5 = 10
// 2 x 6 = 12
// 2 x 7 = 14
// 2 x 8 = 16
// 2 x 9 = 18
// 2 x 10 = 20

for(var i = 0; i <= 10; i++) {
    var base = 3;
    console.log(base + ' x ' + i + ' = ' + base*i);
}

var dias = ['lunes', 'martes', 'miercoles', 'jueves','viernes', 'sábado', 'domingo'];
// console.log(dias[0]);
// console.log(dias[1]);
// console.log(dias[2]);

for(var i = 0; i < dias.length; i++) {
    console.log(dias[i])
}


// Crea un programa que solicite al usuario letras o palabras, si es así guardar el resultado. Para terminar de capturar el usuario no debe escribir valor alguno. Al terminar de capturar, mostrar en pantalla la concatenación de todas las palabras capturadas.
// Crea un programa que solicite al usuario un día de la semana (ej: lunes, jueves, domingo, etc). El programa mostrará un mensaje personalizado para cada día de la semana por medio de un alert. Y seguirá pidiendo al usuario introducir otro día. En caso de que el día introducido sea domingo mostrar al usuario el mensaje “Ve a descansar” y terminar la captura de información.