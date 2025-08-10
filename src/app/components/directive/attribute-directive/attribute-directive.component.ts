import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-attribute-directive',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './attribute-directive.component.html',
  styleUrl: './attribute-directive.component.css'
})
export class AttributeDirectiveComponent {

  div1BgColor: string = 'bg-primary'; //bg-danger,bg-primary

  isDiv2Active: boolean = false;

  num1: string = '';
  num2: string = '';

  isActive: boolean = false;

  customStyle: any = {
    'color':'white',
    'background-color':'red',
    'width':'200px',
    'height':'200px',
  'border-radius':'25%'
  }

  studentList: any[] = [
    {studentId:11 ,name:'AAA', totalMarks:25, gender:'male', city:'Pune', isActive: false},
    {studentId:22 ,name:'BBB', totalMarks:35, gender:'female', city:'Mumbai', isActive: false},
    {studentId:33 ,name:'CCC', totalMarks:45, gender:'male', city:'Jalgao', isActive: true},
    {studentId:44 ,name:'DDD', totalMarks:98, gender:'male', city:'Mumbai', isActive: false},
    {studentId:55 ,name:'EEE', totalMarks:75, gender:'female', city:'Nagpur', isActive: false},
    {studentId:66 ,name:'FFF', totalMarks:55, gender:'male', city:'Thane', isActive: true}
  ]

  addRedClass(){
    this.div1BgColor = 'bg-danger';
  }

  addBlueClass(){
    this.div1BgColor = 'bg-primary';
  }

  toggleDiv2Class(){
    this.isDiv2Active = !this.isDiv2Active;
  }
}
