// Herencia

//Los nombres de las clases deben ir la primera letra en mayúsculas
class Pokemon {
    #name = "";
    #type = "";
    #evolutions = [];

    constructor(name, type, evolutions) {
        this.#name = name;
        this.#type = type;
        this.#evolutions = evolutions;
    }

    set name (name) {
        this.#name = name;
        if (name == "") {
            this.#name = "Pikachu";
        } else {
            this.#name = name;
        }
    }

    set type (type) {
        this.#type = type;
    }

    set evolutions (evolutions) {
        this.#evolutions = evolutions;
    }


    get name () {
        return this.#name;
    }

    get type () {
        return this.#type;
    }

    get evolutions () {
        return this.#evolutions;
    }


    attack() {
        return ` ${this.#name}, está atacando`;
    }

}

const Charmander = new Pokemon("Charmander", "Fire", ["Charmaleon", "Charizar"]);

const Squirtle = new Pokemon("Squirtle", "Water", ["Watortle", "Blastoise"]);


class TypeFire extends Pokemon {
    constructor (name, evolutions) {
    }

    message () {
        return `Hola, soy ${this.name} y soy tipo fuego`;
    }
}

const charmander = new TypeFire ("Charmander", ["Charmaleon", "Charizar"]);

console.log (charmander.message);

charmander.name = "Gato";
console.log (charmander.message());



//console.log ([] == false);