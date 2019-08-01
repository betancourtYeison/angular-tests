import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { DoctorComponent } from "./intermediate/spy/doctor.component";

import { DoctorService } from "./intermediate2/doctor/doctor.service";
import { HospitalComponent } from "./intermediate2/hospital/hospital.component";
import { IncremeterComponent } from "./intermediate2/incremeter/incremeter.component";

import { RouterModule } from "@angular/router";
import { ROUTES } from "./advanced/routes/app.routes";
import { NavbarComponent } from './advanced/navbar/navbar.component';
import { RouterDoctorComponent } from './advanced/router-doctor/router-doctor.component';

@NgModule({
  declarations: [
    AppComponent,
    DoctorComponent,
    HospitalComponent,
    IncremeterComponent,
    NavbarComponent,
    RouterDoctorComponent
  ],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(ROUTES)],
  providers: [DoctorService],
  bootstrap: [AppComponent]
})
export class AppModule {}
