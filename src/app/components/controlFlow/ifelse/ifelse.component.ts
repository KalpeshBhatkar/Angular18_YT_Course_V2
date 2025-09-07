import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DepartmentService } from '../../../service/department.service';

@Component({
  selector: 'app-ifelse',
  imports: [FormsModule],
  templateUrl: './ifelse.component.html',
  styleUrl: './ifelse.component.css'
})
export class IfelseComponent {

  div1Visible: boolean = true;

  isWarningDivVisible: boolean = true;

  num1: string = '';
  num2: string = '';

  selectedStatus: string = '';

  hideDiv1(){
    this.div1Visible = false;
  }
  showDiv1(){
    this.div1Visible = true;
  }

  toggleDiv2(){
    this.isWarningDivVisible = !this.isWarningDivVisible;
  }

  currentRoleusingSubject: string = '';
  currentRoleusingBehaviorSubject: string = '';

  constructor(private deptService: DepartmentService){

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
