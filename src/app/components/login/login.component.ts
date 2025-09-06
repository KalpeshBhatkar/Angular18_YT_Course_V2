import { HttpClient } from '@angular/common/http';
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
    username: '',
    password: ''
  }

  router = inject(Router);
  http = inject(HttpClient);

  onLogin() {
    // if (this.userObj.userName == "admin" && this.userObj.password == "1234") {
    //   alert('Login Success');
    //   localStorage.setItem('loginUser', this.userObj.userName);
    //   this.router.navigateByUrl('add-emp');
    // } else {
    //   alert('Wrong Credentials');
    // }
    // https://projectapi.gerasim.in/api/YoutubeVideos/login
    this.http.get("https://json-placeholder.mock.beeceptor.com/users").subscribe((res: any) => {
      console.log(res);
      res = res.filter((user: any) => user.username == this.userObj.username && user.zip == this.userObj.password);
      //console.log(res);
      if(res.length)
      {
        alert('Login Success');
        localStorage.setItem('loginUser', JSON.stringify(res[0]));
        this.router.navigateByUrl('add-emp');
      } else {
        alert('Wrong Credentials');
      }
    });
  }

}
