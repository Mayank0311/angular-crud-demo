import { Employee } from '../models/employee.model';
import { Injectable } from '@angular/core';


@Injectable()
export class EmployeeService {
    private employees: Employee[] = [
        {
            id: 1,
            name: 'Mark',
            gender: 'Male',
            contactPreference: 'Email',
            email: 'mark@pragimtech.com',
            dateOfBirth: new Date('10/25/1988'),
            department: '3',
            isActive: true,
            photoPath: 'assets/images/mark.png'
        },
        {
            id: 2,
            name: 'Mary',
            gender: 'Female',
            contactPreference: 'Phone',
            phone: 234567192,
            dateOfBirth: new Date('11/20/1979'),
            department: '2',
            isActive: true,
            photoPath: 'assets/images/mary.png'
        },
        {
            id: 3,
            name: 'John',
            gender: 'Male',
            contactPreference: 'Phone',
            phone: 199282120,
            dateOfBirth: new Date('3/25/1976'),
            department: '3',
            isActive: false,
            photoPath: 'assets/images/john.png'
        }
    ];

    getEmployees(): Employee[] {
        return this.employees;
    }

    getEmployee(id: number): Employee {
        const result = this.employees.find(emp => emp.id === id);
        return result;
    }

    save(newEmployee) {
        this.employees.push(newEmployee);
    }
}
