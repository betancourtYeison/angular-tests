import { DoctorComponent } from "./doctor.component";
import { DoctorService } from "./doctor.service";
import { from, empty, throwError } from "rxjs";

describe("DoctorComponent", () => {
  let component: DoctorComponent;
  const service = new DoctorService(null);

  beforeEach(() => (component = new DoctorComponent(service)));

  it("Init: should load doctors", () => {
    const doctors = ["doctor1", "doctor2", "doctor3"];
    spyOn(service, "getDoctors").and.callFake(() => from([doctors]));
    component.ngOnInit();
    expect(component.doctors.length).toBeGreaterThan(0);
  });

  it("addDoctor: should call server to add doctor", () => {
    const spy = spyOn(service, "addDoctor").and.callFake(() => empty());
    component.addDoctor();
    expect(spy).toHaveBeenCalled();
  });

  it("addDoctor: should call server and add doctor to array", () => {
    const doctor = { id: 1, name: "Doctor Yeison Betancourt" };
    spyOn(service, "addDoctor").and.returnValue(from([doctor]));
    component.addDoctor();
    // expect(component.doctors.length).toBe(1);
    expect(component.doctors.indexOf(doctor)).toBeGreaterThanOrEqual(0);
  });

  it("addDoctor: messageError should have the same value than response service", () => {
    const myError = "Error adding doctor";
    spyOn(service, "addDoctor").and.returnValue(throwError(myError));
    component.addDoctor();
    expect(component.messageError).toEqual(myError);
  });

  it("addDoctor: should call server to remove doctor and", () => {
    spyOn(window, "confirm").and.returnValue(true);
    const spy = spyOn(service, "deleteDoctor").and.callFake(() => empty());
    component.deleteDoctor("1");
    expect(spy).toHaveBeenCalledWith("1");
  });

  it("addDoctor: should not call server to remove doctor", () => {
    spyOn(window, "confirm").and.returnValue(false);
    const spy = spyOn(service, "deleteDoctor").and.callFake(() => empty());
    component.deleteDoctor("1");
    expect(spy).not.toHaveBeenCalledWith("1");
  });
});
