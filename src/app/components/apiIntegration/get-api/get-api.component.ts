import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AlertComponent } from '../../../resuableComponent/alert/alert.component';
import { Customer } from '../../../model/class/Customer';
import { IUser } from '../../../model/interface/IUser';

@Component({
  selector: 'app-get-api',
  standalone: true,
  imports: [AlertComponent],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css'
})
export class GetApiComponent {

  userList: Customer[] = [];
  userList2: IUser[] = [];
  CustomerList: any[] = [];

  alertMessage:string = 'Welcome to GET API Page';

  constructor(private http: HttpClient)
  {
    this.getAllUser();
  }

  getAllUser()
  {
    this.http.get("https://json-placeholder.mock.beeceptor.com/users").subscribe((result:any)=>{
      this.userList = result;
    });
    
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((result:any)=>{
      this.userList2 = result;
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

  changeAlerMessage(){
    this.alertMessage = 'sdkjfhk';
  }
}
