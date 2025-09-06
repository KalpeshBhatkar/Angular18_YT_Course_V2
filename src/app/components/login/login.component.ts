import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  userObj: any = {
    userName: '',
    password: ''
  }

  router = inject(Router);

  onLogin() {
    if (this.userObj.userName == "admin" && this.userObj.password == "1234") {
      alert('Login Success');
      localStorage.setItem('loginUser', this.userObj.userName);
      this.router.navigateByUrl('add-emp');
    } else {
      alert('Wrong Credentials');
    }
  }

}
