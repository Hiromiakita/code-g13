class Humano {
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    cumplirAños() {
        this.edad += 1;
    }
}

let ana = new Humano('Ana', 15);
// console.log(ana);
ana.cumplirAños();
ana.cumplirAños();
ana.cumplirAños();
// console.log(ana);


// Herencia -> Evitar duplicar código
// Heredar atributos y métodos de una super clase
// Los métodos y los atributos heredados se puedes sobreescribir


// Heredando de la clase Humano
// Utilizamos la palabra reservada extends en conjunto con el nombre de la clase de la cual estoy heredando
class Profesor extends Humano {
    
    // En el constructor definimos las propiedades que pediremos al usuario, incluso cuando sean propiedades heredadas
    constructor(nombre, edad, materia, cantidadAlumnos) {
        // Método super() se conecta con el constructor de Humano, es decir, la clase de la que estamos heredando, siempre debe existir el método super()aunque sea vacío
        super(nombre, edad);
        this.materia = materia;
        this.cantidadAlumnos = cantidadAlumnos;
    }
}

let prof1 = new Profesor ('Julieta', 19, 'matemáticas', 15);

// console.log(prof1);

prof1.cumplirAños();
prof1.cumplirAños();
prof1.cumplirAños();

// console.log(prof1);

class Animal {
    // constructor vacío cuando no pediré información al usuario para incializar mi objeto
    constructor() {
        this.cerebro = true;
        // Podemos definir propiedades con un valor específico
        this.patas = 0;
    }

    modificarPatas (numPatas) {
        this.patas = numPatas;
    }
}

let tortuga = new Animal();
// console.log(tortuga);

tortuga.modificarPatas(4);
// console.log(tortuga);

class Humanito extends Animal {
    constructor() {
        super();

        // Podemos modificar el valor de una propiedad herrdada que ya estaba definina
        this.patas = 2;
    }
}

let luis = new Humanito();
// console.log(luis);

class Mascota extends Animal {
    constructor() {
        super()
        this.patas = 4;
        // Se pueden añadir atributos extra a los heredados
        this.pulgas = 0;
    }
    // Se pueden añadir métodos extra a los heredados
    aniadirPulgas (cantPulgas) {
        this.pulgas += cantPulgas;
    }
}

let perro = new Mascota();
// console.log(perro);
perro.aniadirPulgas(100);
// console.log(perro);



class Figura {
    constructor(nombre, numLados) {
        this.nombre = nombre;
        this.numLados = numLados;
    }

    calcularArea() {
        return 'calculando área';
    }
    calcularPerimetro() {
        return 'calculando perímetro';
    }
}

let circulo = new Figura ('círculo', 0);
circulo.calcularArea();

class Circulo extends Figura {
    constructor(nombre, numLados, radio) {
        super(nombre, numLados);
        this.radio = radio;
        this.pi = Math.PI;
    }

    calcularArea() {
        return this.pi * (this.radio**2);
    }

    calcularPerimetro() {
        return this.radio*2*this.pi;
    }
}

let c1 = new Circulo('circulo1', 0, 5);
console.log(c1);

console.log(c1.calcularArea());

class Triangulo extends Figura {
    constructor(nombre, numLados, base, altura) {
        super(nombre, numLados);
        this.base = base;
        this.altura = altura;
    }

    calcularArea() {
        return (this.base * this.altura) / 2;
    }
}

let t1 = new Triangulo ('triángulo 1', 3, 10, 5);

console.log(t1);

console.log(t1.calcularArea());
console.log(t1.calcularPerimetro());

