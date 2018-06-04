import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { EmployeeService } from './employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  employees: Employee[];
  filteredEmployees: Employee[];
  private _searchTerm: string;

  get searchTerm(): string {
    return this._searchTerm;
  }

  set searchTerm(value: string) {
    this._searchTerm = value;
    this.filteredEmployees = this.filterEmployees(value);
  }

  employeeToDisplay: Employee;
  private arrayIndex = 0;

  constructor(private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit() {
    this.employees = this.employeeService.getEmployees();
    this.filteredEmployees = this.employees;
    this.employeeToDisplay = this.employees[this.arrayIndex];
  }

  nextEmployee() {
    if (this.arrayIndex <= 1) {
      this.arrayIndex++;
    } else {
      this.arrayIndex = 0;
    }
    this.employeeToDisplay = this.employees[this.arrayIndex];
  }

  onClick(employeeId: number) {
    this.router.navigate(['employees', employeeId]);
  }

  onMouseMove() {

  }

  changeName() {
    this.employees[0].name = 'Jordan';
    this.filteredEmployees = this.filterEmployees(this.searchTerm);
    // const newEmployee: Employee[] = Object.assign([], this.employees);
    // newEmployee[0].name = 'Jordan';
    // this.employees = newEmployee;
  }

  filterEmployees(searchString: string) {
    return this.employees.filter(emp =>
      emp.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1);
  }
}
