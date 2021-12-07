function saludarUsuario () {
    console.log('bienvenido usuario!');
}

function mostrarNumeros () {
    for(let i = 0; i <= 10; i++) {
        console.log(i);
    }
}

function elevarAlCuadrado(num) {
    console.log(num**2);
}

function cambiarTamanio () {
    console.log('Creciendo...');
}

// Modificar estilos
// Acceder a elementos a través de un id
function cambiarFondo () {
    // console.log(document.getElementById("body"));

    // Forma 1
    document.getElementById("body").style.backgroundColor = "green";
    document.getElementById("body").style.color = "white";
    document.getElementById("body").style.fontFamily = "Arial"
    document.getElementById("body").style.padding = "30px"

    // Forma 2
    
}