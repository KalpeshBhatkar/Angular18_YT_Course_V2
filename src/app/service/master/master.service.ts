import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http: HttpClient) { }

  get<T>(url: string) :Observable<T>{
    return this.http.get<T>(url)
  }

  getWithParam<T>(url: string, params: any) :Observable<T>{
    const httpParams = new HttpParams({fromObject:params});
    const httpOptions = {params: httpParams}
    return this.http.get<T>(url, httpOptions)
  }

  post<T>(url: string, body: any) :Observable<T>{
    return this.http.post<T>(url, body)
  }

  put<T>(url: string, body: any) :Observable<T>{
    return this.http.put<T>(url, body)
  }

  delete<T>(url: string) :Observable<T>{
    return this.http.delete<T>(url)
  }
}
