import { Player } from "./class";

describe("Class", () => {
  let player = new Player();

  beforeAll(() => {
    console.log("beforeAll");
  });

  beforeEach(() => {
    console.log("beforeEach");
    player = new Player();
  });

  afterAll(() => {
    console.log("afterAll");
  });

  afterEach(() => {
    console.log("afterEach");
  });

  it("should return 80 hp if hit is 20", () => {
    const resp = player.hit(20);
    expect(resp).toBe(80);
  });

  it("should return 50 hp if hit is 50", () => {
    const resp = player.hit(50);
    expect(resp).toBe(50);
  });

  it("should return 0 hp if hit is greater than 100", () => {
    const resp = player.hit(150);
    expect(resp).toBe(0);
  });
});
