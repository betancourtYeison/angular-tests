import { increment } from "./numbers";

describe("Numbers", () => {
  it("should return 100 if number is greater than 100", () => {
    const resp = increment(105);
    expect(resp).toBe(100);
  });

  it("should return number + 1 if number is lower than 100", () => {
    const resp = increment(50);
    expect(resp).toBe(51);
  });
});
