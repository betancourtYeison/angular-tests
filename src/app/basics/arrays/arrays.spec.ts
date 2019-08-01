import { getRobots } from "./arrays";

xdescribe("Arrays", () => {
  it("should return array with 3 robots", () => {
    const resp = getRobots();
    expect(resp.length).toBeGreaterThanOrEqual(3);
  });

  it("should return MegaMan and Ultron in array", () => {
    const resp = getRobots();
    expect(resp).toContain("MegaMan");
    expect(resp).toContain("Ultron");
  });
});
