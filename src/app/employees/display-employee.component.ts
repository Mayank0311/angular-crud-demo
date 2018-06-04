import { Component, OnInit, Input, OnChanges, SimpleChanges, EventEmitter, Output } from '@angular/core';
import { Employee } from '../models/employee.model';
import { JsonPipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit {
  private selectedEmpId: number;
  @Input() employee: Employee;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.selectedEmpId = +this.activatedRoute.snapshot.paramMap.get('id');
  }

  displayNameAndGender(): string {
    return this.employee.name + ' ' + this.employee.gender;
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   for (const propName of Object.keys(changes)) {
  //     const change = changes[propName];

  //     const from = change.previousValue;
  //     const to = change.currentValue;

  //     console.log('Property ' + JSON.stringify(from) + ' changed to ' + JSON.stringify(to));
  //   }
  // }
}
