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
// parrafos es una colección de nodos -> NodeList
// al ser una NodeList tenemos acceso a la propiedad length
// parrafos NO es un array
// al NO ser un array no podemos usar todos los métodos de los arrays

