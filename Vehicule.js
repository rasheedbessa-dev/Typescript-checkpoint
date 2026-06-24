"use strict";
// Classe Voiture implémentant l'interface Véhicule
class Voiture {
    make;
    model;
    year;
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    start() {
        console.log("Car engine started");
    }
}
// Création d'une instance et appel de la méthode start
const maVoiture = new Voiture("Porsche", "Cayenne", 2026);
maVoiture.start();
