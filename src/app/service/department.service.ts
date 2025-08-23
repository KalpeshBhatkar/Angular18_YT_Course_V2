import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  apiURL: string = "https://jsonplaceholder.typicode.com/";
  constructor(private http: HttpClient) { }

  getAllDept(){
    return this.http.get(this.apiURL + "posts");
  }

  saveNewDept(obj: any){
    return this.http.post(`${this.apiURL}posts`,obj);
  }

  addTwoNo(num1:number, num2:number){
    return num1+num2;

  }
}
