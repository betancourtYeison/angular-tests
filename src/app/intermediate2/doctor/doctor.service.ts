import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class DoctorService {
  constructor(public http: HttpClient) {}

  getDoctors() {
    return this.http.get("...").pipe(map(resp => resp["doctors"]));
  }
}
