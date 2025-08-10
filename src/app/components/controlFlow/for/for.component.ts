import { Component } from '@angular/core';

@Component({
  selector: 'app-for',
  imports: [],
  templateUrl: './for.component.html',
  styleUrl: './for.component.css'
})
export class ForComponent {

  cityArray: string [] = ['Pune', 'Mumbai', 'Nagpur', 'Thane'];
  
  studentList: any[] = [
    {studentId:11 ,name:'AAA', city:'Pune', isActive: false},
    {studentId:22 ,name:'BBB', city:'Mumbai', isActive: false},
    {studentId:33 ,name:'CCC', city:'Jalgao', isActive: true},
    {studentId:44 ,name:'DDD', city:'Mumbai', isActive: false},
    {studentId:55 ,name:'EEE', city:'Nagpur', isActive: false},
    {studentId:66 ,name:'FFF', city:'Thane', isActive: true}
  ]
}
