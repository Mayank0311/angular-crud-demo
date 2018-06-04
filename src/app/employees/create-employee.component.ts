import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../models/department.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker/bs-datepicker.config';
import { Employee } from '../models/employee.model';
import { EmployeeService } from './employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  @ViewChild('employeeForm') createEmployeeForm: NgForm;
  previewPhoto = false;
  datePickerConfig: Partial<BsDatepickerConfig>;
  employee: Employee = {
    id: null,
    name: null,
    dateOfBirth: null,
    department: 'select',
    email: '',
    contactPreference: null,
    gender: null,
    isActive: null,
    phone: null,
    photoPath: null,
    password: null,
    confirmPassword: null
  };

  departments: Department[] = [
    { id: '1', value: 'Help Desk' },
    { id: '2', value: 'HR' },
    { id: '3', value: 'IT' },
    { id: '4', value: 'Payroll' },
    { id: '5', value: 'Admin' },
  ];
  // MyContructor
  constructor(private employeeServie: EmployeeService,
  private router: Router) {
    this.datePickerConfig = Object.assign({}, {
      containerClass: 'theme-dark-blue',
      minDate: new Date(1950, 0, 1),
      maxDate: new Date(2018, 11, 31),
      showWeekNumbers: false,
      dateInputFormat: 'DD/MM/YYYY'
    });
  }

  ngOnInit() {
  }

  saveEmployee(): void {
    const newEmployee = Object.assign({}, this.employee);
    this.employeeServie.save(newEmployee);
    this.createEmployeeForm.reset();
    this.router.navigate(['list']);
  }

  onPreviewPhoto() {
    this.previewPhoto = !this.previewPhoto;
  }

}
