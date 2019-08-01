import { TestBed, ComponentFixture } from "@angular/core/testing";
import { IncremeterComponent } from "./incremeter.component";
import { FormsModule } from "@angular/forms";
import { By } from "@angular/platform-browser";

describe("IncremeterComponent", () => {
  let component: IncremeterComponent;
  let fixture: ComponentFixture<IncremeterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IncremeterComponent],
      imports: [FormsModule]
    });

    fixture = TestBed.createComponent(IncremeterComponent);
    component = fixture.componentInstance;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should show legend", () => {
    const newLegend = "Legend tests";
    component.legend = newLegend;
    fixture.detectChanges();
    const elem: HTMLElement = fixture.debugElement.query(By.css("h3"))
      .nativeElement;
    expect(elem.innerHTML).toContain(newLegend);
  });

  it("should show value progress in input", () => {
    component.changeValue(5);
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const input: HTMLElement = fixture.debugElement.query(By.css("input"))
        .nativeElement;
      expect(input["value"]).toBe("55");
    });
  });

  it("should increment/decrement 5 after click button", () => {
    const buttons = fixture.debugElement.queryAll(By.css(".btn-primary"));
    buttons[0].triggerEventHandler("click", null);
    expect(component.progress).toBe(45);
    buttons[1].triggerEventHandler("click", null);
    expect(component.progress).toBe(50);
  });

  it("should show 45 in progress", () => {
    const buttons = fixture.debugElement.queryAll(By.css(".btn-primary"));
    buttons[0].triggerEventHandler("click", null);
    fixture.detectChanges();
    const elem: HTMLElement = fixture.debugElement.query(By.css("h3"))
      .nativeElement;
    expect(elem.innerHTML).toContain("45");
  });
});
