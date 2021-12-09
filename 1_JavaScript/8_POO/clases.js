// CLASES -> Plantillas para crear objetos con mismos atributos y métodos
// Hacemos uso de la palabra reservada class
// Se hace uso de un constructor
// El nombre de una clase suele iniciar con Mayúscula
// Una clase se crea con llaves seguidas del nombre de la clase
// Los métodos dentro de una clase no necesitan la palabra function
// Para crear instancias (objetos) hacemos uso de la palabra reservada "new"

class Usuario {
    // El constructor nos ayuda a inicializar los valores de los objetos creados a partir de la clase
    constructor(nom, ape, edad, tel) {
        this.nombre = nom;
        this.apellido = ape;
        this.edad = edad;
        this.nacionalidad = 'MX';
        this.genero = 'neutro';
        this.tel = tel;
    }
    mostrarNombre () {
        console.log(this.nombre);
    }
    mostrarApellido () {
        console.log(this.apellido);
    }
    duplicarEdad () {
        console.log(this.edad * 2);
    }

}

let usuario1 = new Usuario('Luis', 'García', 10, 202948);
console.log(usuario1);
usuario1.mostrarNombre();
usuario1.mostrarApellido();
usuario1.duplicarEdad();


let usuario2 = new Usuario('Jorge', 'Aguilar', 20, 234546);

console.log(usuario2);
usuario2.mostrarNombre();