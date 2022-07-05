//Instantiation.

class Player {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  introduce() {
    console.log(`Hi I am ${this.name}, I am ${this.type}`);
  }
}

class Wizard extends Player {
  constructor(name, type) {
    super(name, type);
  }
  play() {
    console.log(`he he! I am a ${this.type}`);
  }
}

const wizard1 = new Wizard("Kim", "Destroyer");
// const wizard2 = new Wizard("CJ", "Converter");

const player = new Player("Batman", "Savior");

wizard1.introduce();
wizard1.play();

player.introduce();
