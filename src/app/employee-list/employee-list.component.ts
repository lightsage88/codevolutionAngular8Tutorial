import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
   this._employeeService.getEmployees()
   .subscribe(data => this.employees = data)
  }

  public employees: {}[] = [];

}
