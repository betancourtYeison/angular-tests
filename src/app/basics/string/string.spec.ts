import { message } from "./string";

// describe("String test");
// it("should return a string");
// it("should containt a string");

describe("String", () => {
  it("should return a string", () => {
    const resp = message("Yeison");
    expect(typeof resp).toBe("string");
  });

  it("should return a greeting with name", () => {
    const name = "Yeison";
    const resp = message(name);
    expect(resp).toContain(name);
  });
});
