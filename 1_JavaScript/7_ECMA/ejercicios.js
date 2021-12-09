// Crear una función que reciba un string y me regrese la primera letra del string

function obtenerPrimerCaracter (palabra) {
    return palabra[0];
}

console.log(obtenerPrimerCaracter('hola'))

let obtenerPrimerCaracter2 = palabra => palabra[0];

console.log(obtenerPrimerCaracter2('Alan'));

// Crear una función que reciba un número y me regrese el número al cuadrado

function elevarCuadrado (num) {
    return num**2;
}

console.log(elevarCuadrado(4));

let elevarCuadrado2 = num => num**2;

console.log(elevarCuadrado2(10));

// Crear una función que reciba dos strings y me regrese el string que tenga más caracteres

function calcularLongitud (palabra1, palabra2) {
    // operador ternario
    let palabraMasLarga = palabra2;
    if(palabra1.length > palabra2.length) {
        palabraMasLarga = palabra1;
    }
    return palabraMasLarga;
}

console.log(calcularLongitud('holaaaaa', 'adios'));

let calcularLongitud2 = (pal1, pal2) => {
    // operador ternario
    let palabraMasLarga = pal2;
    if(pal1.length > pal2.length) {
        palabraMasLarga = pal1;
    }
    return palabraMasLarga;
}

console.log(calcularLongitud2('aaaa', 'bb'));

// Crear una función que reciba un objeto con datos de una persona y me regrese su nombre

function entregarNombre (obj) {
    return obj.nombre;
}

let usuario = {
    nombre: 'Luis',
    apellido: 'Pérez'
}

console.log(entregarNombre(usuario));

let entregarNombre2 = obj => obj.nombre;


console.log(entregarNombre2(usuario));

// LEER qué otras diferencias existen entre usar funciones flecha y funciones convencionales