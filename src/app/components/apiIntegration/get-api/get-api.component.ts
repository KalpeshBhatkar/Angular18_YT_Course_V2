import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AlertComponent } from '../../../resuableComponent/alert/alert.component';

@Component({
  selector: 'app-get-api',
  standalone: true,
  imports: [AlertComponent],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css'
})
export class GetApiComponent {

  userList: any[] = [];
  CustomerList: any[] = [];

  constructor(private http: HttpClient)
  {
    this.getAllUser();
  }

  getAllUser()
  {
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((result:any)=>{
      this.userList = result;
    });
  }

  getAllCustomer(){
    debugger;
    this.http.get("https://projectapi.gerasim.in/api/PropertyBookingController/GetAllCustomer").subscribe((res:any)=>{
      this.CustomerList = res.data;
    }, error=>{
      console.log(error);
    })
  }
}
