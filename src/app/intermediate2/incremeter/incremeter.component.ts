import {
  Component,
  Input,
  Output,
  ViewChild,
  OnInit,
  EventEmitter,
  ElementRef
} from "@angular/core";

@Component({
  selector: "app-incremeter",
  templateUrl: "./incremeter.component.html",
  styles: []
})
export class IncremeterComponent implements OnInit {
  @ViewChild("txtProgress") txtProgress: ElementRef;

  @Input() legend: string = "Leyenda";
  @Input() progress: number = 50;

  @Output() updateValue: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onChanges(newValue: number) {
    if (newValue >= 100) {
      this.progress = 100;
    } else if (newValue <= 0) {
      this.progress = 0;
    } else {
      this.progress = newValue;
    }

    this.txtProgress.nativeElement.value = this.progress;

    this.updateValue.emit(this.progress);
  }

  changeValue(valor: number) {
    if (this.progress >= 100 && valor > 0) {
      this.progress = 100;
      return;
    }

    if (this.progress <= 0 && valor < 0) {
      this.progress = 0;
      return;
    }

    this.progress = this.progress + valor;

    this.updateValue.emit(this.progress);
  }
}
