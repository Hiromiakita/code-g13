// Objetos literales: Objetos creados a mano
// Objetos pueden tener atributos y métodos
// this -> es un apuntador. this apunta al objeto actual

let usuario1 = {
    nombre: 'Alan',
    apellido: 'López',
    edad: 25,
    nacionalidad: 'MX',
    saludar: function () {
        console.log('saludandooo!!');
    },
    mostrarNombre: function () {
        console.log(`soy ${this.nombre}`)
    },
    mostrarEdad: function () {
        console.log(`tengo ${this.edad} años`);
    },
    mostrarNacionalidad: () => {
        console.log('soy mexicano');
        // En una función flecha this apunta al contexto general
        console.log(`nacionalidad: ${this.nacionalidad}`);
    }
}

console.log(usuario1);
console.log(usuario1.nacionalidad);

usuario1.saludar();

usuario1.mostrarNombre();

usuario1.mostrarEdad();

usuario1.mostrarNacionalidad();

let usuario2 = {
    nombre: 'Ana',
    apellido: 'García',
    edad: 30,
    nacionalidad: 'USA',
    saludar: function () {
        console.log('saludandooo!!');
    },
    mostrarNombre: function () {
        console.log(`soy ${this.nombre}`)
    },
    mostrarEdad: function () {
        console.log(`tengo ${this.edad} años`);
    },
    mostrarNacionalidad: () => {
        console.log('soy mexicano');
        // En una función flecha this apunta al contexto general
        console.log(`nacionalidad: ${this.nacionalidad}`);
    }
}

console.log(usuario2);
usuario2.mostrarNombre();
usuario2.mostrarEdad();

let usuario3 = {
    nombre: 'Julia',
    apellido: 'Medina',
    edad: 30,
    nacionalidad: 'USA',
    saludar: function () {
        console.log('saludandooo!!');
    },
    mostrarNombre: function () {
        console.log(`soy ${this.nombre}`)
    },
    mostrarEdad: function () {
        console.log(`tengo ${this.edad} años`);
    },
    mostrarNacionalidad: () => {
        console.log('soy mexicano');
        // En una función flecha this apunta al contexto general
        console.log(`nacionalidad: ${this.nacionalidad}`);
    }
}