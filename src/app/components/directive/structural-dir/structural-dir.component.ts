import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-structural-dir',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './structural-dir.component.html',
  styleUrl: './structural-dir.component.css'
})
export class StructuralDirComponent {

  isDiv1Visiable: boolean = true;
  isDiv2Visiable: boolean = true;

  num1: string='';
  num2: string='';

  isActive: boolean = false;
  selectedState: string = '';

  cityArray: string [] = ['Pune', 'Mumbai', 'Nagpur', 'Thane'];

  studentList: any[] = [
    {studentId:11 ,name:'AAA', city:'Pune', isActive: false},
    {studentId:22 ,name:'BBB', city:'Mumbai', isActive: false},
    {studentId:33 ,name:'CCC', city:'Jalgao', isActive: true},
    {studentId:44 ,name:'DDD', city:'Mumbai', isActive: false},
    {studentId:55 ,name:'EEE', city:'Nagpur', isActive: false},
    {studentId:66 ,name:'FFF', city:'Thane', isActive: true}
  ]

  showDiv1()
  {
    this.isDiv1Visiable = true;
  }

  hideDiv1()
  {
    this.isDiv1Visiable = false;
  }

  toggleDiv2()
  {
    this.isDiv2Visiable = !this.isDiv2Visiable;
  }
}
