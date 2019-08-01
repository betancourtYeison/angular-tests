import { Routes } from "@angular/router";
import { HospitalComponent } from "src/app/intermediate2/hospital/hospital.component";
import { DoctorComponent } from "src/app/intermediate2/doctor/doctor.component";
import { IncremeterComponent } from "src/app/intermediate2/incremeter/incremeter.component";

export const ROUTES: Routes = [
  { path: "hospital", component: HospitalComponent },
  { path: "doctor/:id", component: DoctorComponent },
  { path: "**", component: IncremeterComponent }
];
