import { Injectable } from '@angular/core';
// import { HttpClient } from 'selenium-webdriver/http';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

constructor(private http: HttpClient) { }
  
  _url: string = `/assets/data/employees.json`;

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this._url);
  }
}
