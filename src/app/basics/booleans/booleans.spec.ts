import { userLogged } from "./booleans";

describe("Booleans", () => {
  it("should return true", () => {
    const resp = userLogged();
    expect(resp).toBeTruthy();
  });
});
