import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constant } from '../constant/Constant';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  //apiURL: string = "https://jsonplaceholder.typicode.com/";
  constructor(private http: HttpClient) { }

  getAllDept(){
    return this.http.get(Constant.API_URL + Constant.DEPARTMENT_METHODS.ADD_NEW_DEPT);
  }

  saveNewDept(obj: any){
    return this.http.post(`${Constant.API_URL}${Constant.DEPARTMENT_METHODS.ADD_NEW_DEPT}`,obj);
  }

  addTwoNo(num1:number, num2:number){
    return num1+num2;

  }
}
