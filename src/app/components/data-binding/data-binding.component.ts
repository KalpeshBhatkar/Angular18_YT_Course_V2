import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  //4 Types of DataType
  //string, number, boolean, date

  courseName: string = "Angular 17";
  stateName: string = "Maharashtra";

  //inputType = "checkbox";
  inputType = "radio";

  myClassName: string = "bg-primary";

  rollNo: number = 123;

  isIndian: boolean = true;

  currentDate: Date = new Date();

  firstName = signal("Kalpesh Bhatkar");

  constructor(){
    //this.courseName = "Angular 19";
    //this.inputType = '1234';
  }

  changeCourseName(){
    this.courseName = "React Js";
    this.firstName.set("Bhatkar Kalpesh");
  }

  showAlert(message: string){
    alert(message);
  }
}
