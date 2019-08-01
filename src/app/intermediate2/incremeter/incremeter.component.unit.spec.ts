import { TestBed, ComponentFixture } from "@angular/core/testing";
import { IncremeterComponent } from "./incremeter.component";
import { FormsModule } from "@angular/forms";
import { By } from "@angular/platform-browser";

describe("IncremeterComponent Unit", () => {
  let component: IncremeterComponent;

  beforeEach(() => (component = new IncremeterComponent()));
  it("should return 55 if increment progress by 5", () => {
    component.progress = 50;
    component.changeValue(5);
    expect(component.progress).toBe(55);
  });
});
