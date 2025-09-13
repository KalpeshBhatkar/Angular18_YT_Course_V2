import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constant } from '../constant/Constant';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { MasterService } from './master/master.service';
import { IUser } from '../model/interface/IUser';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  Subject_onRoleChange$: Subject<string>  = new Subject<string>;
  
  BehaviorSubject_onRoleChange$: BehaviorSubject<string>  = new BehaviorSubject<string>('');


  //apiURL: string = "https://jsonplaceholder.typicode.com/";
  constructor(private master: MasterService) { }

  getAllDept():Observable<IUser>{
    return this.master.get<IUser>(Constant.API_URL + Constant.DEPARTMENT_METHODS.ADD_NEW_DEPT);
  }

  saveNewDept(obj: any){
    return this.master.post(`${Constant.API_URL}${Constant.DEPARTMENT_METHODS.ADD_NEW_DEPT}`,obj);
  }

  addTwoNo(num1:number, num2:number){
    return num1+num2;
    
  }
}
