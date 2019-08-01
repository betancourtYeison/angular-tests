import { FormRegister } from "./forms";
import { FormBuilder } from "@angular/forms";

describe("Forms", () => {
  let component: FormRegister;

  beforeEach(() => (component = new FormRegister(new FormBuilder())));

  it("should create a form with 2 fields: email and password", () => {
    expect(component.form.contains("email")).toBeTruthy();
    expect(component.form.contains("password")).toBeTruthy();
  });

  it("should be required email", () => {
    const control = component.form.get("email");
    control.setValue("");
    expect(control.valid).toBeFalsy();
  });

  it("should be a valid email", () => {
    const control = component.form.get("email");
    control.setValue("yeisonbe10@hotmail.com");
    expect(control.valid).toBeTruthy();
  });
});
