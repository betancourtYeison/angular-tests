import { Player2 } from "./player2";

describe("Player2", () => {
  let player: Player2;

  beforeEach(() => (player = new Player2()));

  it("should emit event when player take damage", () => {
    let newHp = 0;
    player.hpChange.subscribe(hp => (newHp = hp));
    player.hit(1000);
    expect(newHp).toBe(0);
  });

  it("should emit event when player take damage and stay alive", () => {
    let newHp = 0;
    player.hpChange.subscribe(hp => (newHp = hp));
    player.hit(50);
    expect(newHp).toBe(50);
  });
});
