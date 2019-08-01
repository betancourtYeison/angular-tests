import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { NavbarComponent } from "./navbar.component";

import { By } from "@angular/platform-browser";
import { RouterTestingModule } from "@angular/router/testing";
import { RouterLinkWithHref } from "@angular/router";

describe("NavbarComponent", () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      imports: [RouterTestingModule.withRoutes([])]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should have a link to doctors", () => {
    const debugElement = fixture.debugElement.queryAll(
      By.directive(RouterLinkWithHref)
    );
    const doctorRouter = debugElement.filter(
      element => element.attributes.routerLink === "/doctors"
    );
    expect(doctorRouter.length).toBe(1);
  });
});
