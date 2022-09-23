import { Organism } from './Organism';

class Animal extends Organism {
  fight() {}
  mate() {}
}

const newAnimal = new Animal();

export { Animal };
