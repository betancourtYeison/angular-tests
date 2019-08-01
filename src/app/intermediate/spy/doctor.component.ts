import { Component, OnInit } from "@angular/core";
import { DoctorService } from "./doctor.service";

@Component({
  selector: "app-doctor",
  template: `
    <p>
      doctor works!
    </p>
  `,
  styles: []
})
export class DoctorComponent implements OnInit {
  public doctors: any[] = [];
  public messageError: string;

  constructor(public _doctorService: DoctorService) {}

  ngOnInit() {
    this._doctorService
      .getDoctors()
      .subscribe(doctors => (this.doctors = doctors));
  }

  addDoctor() {
    const doctor = { name: "Doctor Yeison Betancourt" };

    this._doctorService
      .addDoctor(doctor)
      .subscribe(
        doctorDB => this.doctors.push(doctorDB),
        err => (this.messageError = err)
      );
  }

  deleteDoctor(id: string) {
    const remove = confirm("Are you sure you want to delete this doctor");

    if (remove) {
      this._doctorService.deleteDoctor(id);
    }
  }
}
