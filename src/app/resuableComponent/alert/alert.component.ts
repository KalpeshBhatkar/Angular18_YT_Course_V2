import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-alert',
  imports: [CommonModule],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css'
})
export class AlertComponent implements OnChanges {

  @Input() message: string = '';
  @Input() alertType: string = '';

  alertMode: string = 'Demo Demo';

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges");
  }
}
