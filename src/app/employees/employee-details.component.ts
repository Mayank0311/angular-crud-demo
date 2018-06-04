import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from './employee.service';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  private id: number;
  employee: Employee;
  constructor(private activatedRouter: ActivatedRoute,
    private service: EmployeeService,
    private router: Router) { }

  ngOnInit() {
    this.activatedRouter.paramMap.subscribe(params => {
      this.id = +params.get('id');
      this.employee = this.service.getEmployee(this.id);
    });
  }

  viewNext() {
    if (this.id < 3) {
      this.id++;
    } else {
      this.id = 1;
    }
    this.router.navigate(['employees', this.id]);
  }
}