import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { DepartmentService } from '../../service/department.service';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, RouterLink, FormsModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

  selectedRole = '';
  router = inject(Router);

  loggedUserData: any;

  constructor(private deptService: DepartmentService){
    const loggedData = localStorage.getItem("loginUser");
    if(loggedData != null)
    {
      this.loggedUserData = JSON.parse(loggedData);
      console.log(this.loggedUserData)
    }
  }

  LogOff() {
    localStorage.removeItem('loginUser');
    this.router.navigateByUrl('login');
  }

  onRoleChange(role: string){
    console.log(role);
    debugger;
    this.deptService.Subject_onRoleChange$.next(role);
    this.deptService.BehaviorSubject_onRoleChange$.next(role);
  }
}
