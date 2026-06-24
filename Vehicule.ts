// Interface Véhicule
interface Véhicule {
  make: string;
  model: string;
  year: number;
  start(): void;
}

// Classe Voiture implémentant l'interface Véhicule
class Voiture implements Véhicule {
  make: string;
  model: string;
  year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  start(): void {
    console.log("Car engine started");
  }
}

// Création d'une instance et appel de la méthode start
const maVoiture = new Voiture("Porsche", "Cayenne", 2026);
maVoiture.start();
