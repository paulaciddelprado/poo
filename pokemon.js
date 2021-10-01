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

// Através de set y get se definen los atributos, es la manera en cómo se pueden controlar - Atributo: Encapsulamiento

    set name (name) {
        this.#name = name;
        if (name == "") {
            this.#name = "No existe";
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

    evolve(evolution = 0) {
        //Valida que la opción exista
        const EVOLVE = this.#evolutions[evolution] || '';
        let message = "No puedo evolucionar";


        if (EVOLVE) {
            message = `${this.#name} está evolucionando a ${EVOLVE}`; this.#name = EVOLVE;
        }
        return message;

    }
}

const Charmander = new Pokemon("Charmander", "Fire", ["Charmaleon", "Charizar"]);

const Squirtle = new Pokemon("Squirtle", "Water", ["Watortle", "Blastoise"]);

console.log ((`${Charmander.name} es de tipo ${Charmander.type}`));
console.log (Charmander.attack());
console.log (Charmander.evolve(0));
console.log ((`${Charmander.name} es de tipo ${Charmander.type}`));

console.log ("--------------------------------------------------");

console.log ((`${Squirtle.name} es de tipo ${Squirtle.type}`));
console.log (Squirtle.attack());
console.log (Squirtle.evolve(0));
console.log ((`${Squirtle.name} es de tipo ${Squirtle.type}`));




//console.log ([] == false);