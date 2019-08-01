import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { RouterDoctorComponent } from "./router-doctor.component";
import { Router, ActivatedRoute } from "@angular/router";
import { Observable, Subject } from "rxjs";
import { empty } from "rxjs";

class FakeRouter {
  navigate(params) {}
}

class FakeActivatedRoute {
  // params: Observable<any> = empty();

  private subject = new Subject();

  push(value) {
    this.subject.next(value);
  }

  get params() {
    return this.subject.asObservable();
  }
}

describe("RouterDoctorComponent", () => {
  let component: RouterDoctorComponent;
  let fixture: ComponentFixture<RouterDoctorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RouterDoctorComponent],
      providers: [
        { provide: Router, useClass: FakeRouter },
        { provide: ActivatedRoute, useClass: FakeActivatedRoute }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should redirect to doctor when is saved", () => {
    const router = TestBed.get(Router);
    const spy = spyOn(router, "navigate");
    component.saveDoctor("1234");
    expect(spy).toHaveBeenCalledWith(["doctor", "1234"]);
  });

  it("should put id = new", () => {
    component = fixture.componentInstance;
    const activatedRouter: FakeActivatedRoute = TestBed.get(ActivatedRoute);
    activatedRouter.push({ id: "new" });
    expect(component.id).toBe("new");
  });
});
