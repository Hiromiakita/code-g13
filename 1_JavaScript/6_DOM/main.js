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
    // document.getElementById("body").style.backgroundColor = "green";
    // document.getElementById("body").style.color = "white";
    // document.getElementById("body").style.fontFamily = "Arial"
    // document.getElementById("body").style.padding = "30px"

    // Forma 2
    let body = document.getElementById("body");
    body.style.backgroundColor = "green";
    body.style.color = "white";
    body.style.fontFamily = "Arial";
    body.style.padding = "30px";

}

// Modificar atributos
function cambiarImagen() {
    document.getElementById("imagen").src = "https://earthsky.org/upl/2020/06/ocean-apr27-2020-Cidy-Chai-North-Pacific-sq.jpeg"
}

function cambiarSitioWeb() {
    document.getElementById("enlace").href = "https://www.yahoo.com";
}

// Cambiar texto de un elemento HTML

function modificarEncabezado () {
    document.getElementById("encabezado").innerText = "DOM";
}

