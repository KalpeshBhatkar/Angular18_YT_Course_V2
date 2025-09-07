import { AsyncPipe, DatePipe, JsonPipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { interval,  Observable, map } from 'rxjs';
import { NaPipe } from '../../pipes/na.pipe';
import { DepartmentService } from '../../service/department.service';

@Component({
  selector: 'app-pipe',
  imports: [UpperCasePipe,LowerCasePipe,TitleCasePipe,DatePipe,JsonPipe,AsyncPipe,NaPipe],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {

  firstName1: string = "Angular";
  firstName2: string = "this is a demo session";

  currentDate: Date = new Date();

  currentTime: Observable<Date> = new Observable<Date>;

  student: any = {
    name:'Kalpesh',
    city:'Mumbai',
    empId:34,
    state:''
  }

  currentRoleusingSubject: string = '';
  currentRoleusingBehaviorSubject: string = '';

  constructor(private deptService: DepartmentService){
      this.currentTime = interval(1000).pipe(map(() => new Date()));

      this.deptService.Subject_onRoleChange$.subscribe((role:string) => {
        debugger;
        this.currentRoleusingSubject = role;
      });

      this.deptService.BehaviorSubject_onRoleChange$.subscribe((role:string) => {
        debugger;
        this.currentRoleusingBehaviorSubject = role;
      });
  }
}
