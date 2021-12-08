function evaluar () {
    let n1 = parseInt(document.getElementById("num1").value);
    console.log(n1);

    let n2 = parseInt(document.getElementById("num2").value);
    console.log(n2);

    let resultado = parseInt(document.getElementById("res").value);
    console.log(resultado);

    if((n1 + n2) === resultado) {
        alert("correcto");
        // Resultado correcto en un etiqueta p
        document.getElementById("res").style.border = "2px green solid";

    } else {
        alert("incorrecto");
        // Vaciar casilla de resultado y poner el borde rojo
        document.getElementById("res").style.border = "2px red solid";
        document.getElementById("res").value = '';
    }
}