export class Player {
  hp: number;

  constructor() {
    this.hp = 100;
  }

  hit(hit: number) {
    if (hit >= this.hp) {
      this.hp = 0;
    } else {
      this.hp = this.hp - hit;
    }
    return this.hp;
  }
}
