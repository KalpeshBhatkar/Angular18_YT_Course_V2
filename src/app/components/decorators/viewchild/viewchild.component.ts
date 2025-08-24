import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { AlertComponent } from '../../../resuableComponent/alert/alert.component';

@Component({
  selector: 'app-viewchild',
  imports: [AlertComponent],
  templateUrl: './viewchild.component.html',
  styleUrl: './viewchild.component.css'
})
export class ViewchildComponent implements AfterViewInit {

  @ViewChild('txt') textBox?: ElementRef;

  @ViewChild(AlertComponent) alertComp?: AlertComponent;

  ngAfterViewInit(): void {
    debugger;
    const txtvalue = this.textBox?.nativeElement.value;
    console.log(txtvalue);
    const alertMode = this.alertComp?.alertMode;
    console.log(alertMode);
  }

}
