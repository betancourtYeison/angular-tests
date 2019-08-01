import { ROUTES } from "./app.routes";
import { DoctorComponent } from "../../intermediate2/doctor/doctor.component";

describe("Routes", () => {
  it("should exists router /doctor/:id", () => {
    expect(ROUTES).toContain({
      path: "doctor/:id",
      component: DoctorComponent
    });
  });
});
