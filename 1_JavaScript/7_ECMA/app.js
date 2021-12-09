// Declaración de variables

// var -> No es recomendado porque consume mucha memoria de nuestro programa
// let -> Se utiliza para crear variables locales y podemos reasignar su valor.
// const -> Se utiliza para crear variables locales y constantes, es decir, no podemos reasignar su valor.

// Scope - Alcance
// Las llaves nos indican que es un scope o un alcance determinado
// Hoisting -> Para leer

{   
    let hola = ':D';
    // console.log(hola);
    // enviarMensaje();
    // enviarMensaje();
}

// enviarMensaje();

{
    // console.log(hola);
    enviarMensaje();
    function enviarMensaje () {
        // console.log('soy un mensaje');
    }


    const usuario = 'Sergio';
    // console.log(usuario);
}

// Concatenar variables

let nombre = 'Carlos';

let frase1 = 'Me llamo ' + nombre;
// console.log(frase1);

let frase2 = `Me llamo ${nombre}`;
// console.log(frase2);

// Funciones flecha
// Diferencias entre usar una función convencional y una función flecha - LEER
// Características:
// () => {}
// Son funciones anónimas: Se almacenan en una variable
// No usamos la palabra function
// Se utiliza flecha =>
// Se pueden omitir en algunas ocasiones los paréntesis y/o las llaves
// ** Se pueden omitir los paréntesis cuando sólo tengamos UN argumento o parámetro
// ** Se pueden omitir las llaves y el return cuando la función lo único que hace es retornar un valor

function sumar (n1, n2) {
    return n1 + n2;
}

function recorrerArray (array) {
    for(let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

// console.log(sumar(10, 20));

// let resultado = sumar(10, 20);

// console.log(resultado);

recorrerArray([1, 2, 3]);

// Estructura función flecha

// let nombreFunción = (parámetros) => {
//      cuerpo de la función
//      return valor;
// }

let sumar2 = (n1, n2) => {
    return n1 + n2
};

let sumar3 = (n1, n2) => n1 + n2;


console.log(sumar2(5, 2));

let recorrerArray2 = array => {
    let arrayNuevo = [];
    for(let i = 0; i < array.length; i++) {
        console.log(array[i]);
        arrayNuevo.push(i*2)
    }
    return arrayNuevo;
}

recorrerArray2([1, 2, 3]);