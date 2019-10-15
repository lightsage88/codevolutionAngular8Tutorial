import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service'

@Component({
  selector: 'employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  constructor(private _employeeService: EmployeeService) { }

  employees = [];
  ngOnInit() {
    this._employeeService.getEmployees()
    .subscribe(response => {
      this.employees = response
    })
  }

}
