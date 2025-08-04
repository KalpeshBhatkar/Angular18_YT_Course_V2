import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import { AddEmployeeComponent } from './add-employee/add-employee.component';
//import { EmployeeListComponent } from './employee-list/employee-list.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DataBindingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular18_YT_Tutorial_V2';
}
