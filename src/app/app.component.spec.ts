import { TestBed, async } from "@angular/core/testing";
import { AppComponent } from "./app.component";
// import { NavbarComponent } from "./advanced/navbar/navbar.component";
import { RouterTestingModule } from "@angular/router/testing";
import { By } from "@angular/platform-browser";
import { RouterOutlet } from "@angular/router";
import { NO_ERRORS_SCHEMA } from "@angular/core";

describe("AppComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [RouterTestingModule.withRoutes([])],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-tests'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual("angular-tests");
  });

  it("should have a router-outlet", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const debugElement = fixture.debugElement.query(By.directive(RouterOutlet));
    expect(debugElement).not.toBeNull();
  });
});
