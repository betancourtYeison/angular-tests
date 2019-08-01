import { DoctorComponent } from "./doctor.component";
import { TestBed, ComponentFixture } from "@angular/core/testing";
import { DoctorService } from "./doctor.service";
import { HttpClientModule } from "@angular/common/http";

describe("DoctorComponent 2", () => {
  let component: DoctorComponent;
  let fixture: ComponentFixture<DoctorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoctorComponent],
      providers: [DoctorService],
      imports: [HttpClientModule]
    });
    fixture = TestBed.createComponent(DoctorComponent);
    component = fixture.componentInstance;
  });

  it("should create component", () => {
    expect(component).toBeTruthy();
  });

  it("should return doctor name", () => {
    const name = "Yeison";
    const res = component.greetingDoctor(name);
    expect(res).toContain(name);
  });
});
