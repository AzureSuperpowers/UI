import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../../services/api/api.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees: Employee[];
  constructor(
    private apiService: EmployeeService
  ) {
  }

  ngOnInit() {
    this.apiService.getAll().subscribe(r => {
      this.employees = r;
    })
  }

}
