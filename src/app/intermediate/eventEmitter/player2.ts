import { EventEmitter } from "@angular/core";

export class Player2 {
  hp: number;
  hpChange = new EventEmitter<number>();

  constructor() {
    this.hp = 100;
  }

  hit(hit: number) {
    if (hit >= this.hp) {
      this.hp = 0;
    } else {
      this.hp = this.hp - hit;
    }
    this.hpChange.emit(this.hp);
  }
}
