let indice = 0;

function cambiarFondo () {
    let colores = ["red", "blue", "yellow"];
    document.getElementById("body").style.backgroundColor = colores[indice];
    indice++;
}


function crecerImagen () {
    let altura = document.getElementById("imagen").height;
    altura += altura + 50;
    document.getElementById("imagen").height = altura;
}

function saludar () {
    let nombre = prompt("Escribe tu nombre");
    document.getElementById("titulo").innerText = "Hola " + nombre;
}