// Obtener elementos por su id

let titulo = document.getElementById("titulo");
// console.log(titulo.innerText);

// titulo.innerText = 'hola';

// innerText nos muestra el texto del nodo o de la etiqueta

// Obtener elementos por su etiqueta

let parrafos = document.getElementsByTagName("p");
console.log(parrafos);

console.log(parrafos[0].innerText);
parrafos[0].style.backgroundColor = 'red';

for(let i = 0; i < parrafos.length; i++) {
    parrafos[i].style.backgroundColor = 'red';
}

parrafos[2].innerText = 'lo que sea';

// parrafos es una colección de nodos -> NodeList
// al ser una NodeList tenemos acceso a la propiedad length
// parrafos NO es un array
// al NO ser un array no podemos usar todos los métodos de los arrays


// Obtener elementos por el nombre de clases

let botonesCards = document.getElementsByClassName("button-card");
console.log(botonesCards);

for(let i = 0; i < botonesCards.length; i++) {
    botonesCards[i].style.backgroundColor = 'blue';
}

// function deshabilitar () {
//     let botonesCards = document.getElementsByClassName("button-card");
//     for(let i = 0; i < botonesCards.length; i++) {
//         botonesCards[i].disabled = true;
//         botonesCards[i].style.backgroundColor = "gray";
//     }
// }

function habilitar (botonHabilitado) {
    let botonesCards = document.getElementsByClassName("button-card");
    for(let i = 0; i < botonesCards.length; i++) {
        botonesCards[i].disabled = botonHabilitado;
        if(botonHabilitado) {
            botonesCards[i].style.backgroundColor = "gray";
        } else {
            botonesCards[i].style.backgroundColor = "blue";
            botonesCards[i].style.color = "white";
        }
    }
}


function cambiarEstilos() {
    // Añadir una clase que ya contiene los estilos
    document.getElementById("s2").classList.add("subtitulo");

    // Añadir manualmente los estilos
    // document.getElementById("s2").style.backgroundColor = "hotpink";
    // document.getElementById("s2").style.color = "indigo";

}

function ocultarElemento () {
    document.getElementById("s3").style.display = "none";
}

