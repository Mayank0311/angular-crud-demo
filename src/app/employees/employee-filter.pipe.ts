import { PipeTransform, Pipe } from '@angular/core';
import { Employee } from '../models/employee.model';

@Pipe({
    name: 'employeeFilter',
    pure: false
})
export class EmployeeFilterPipe implements PipeTransform {
    counter = 0;
    transform(employees: Employee[], searchTerm: string): Employee[] {
        this.counter++;
        console.log('Employee filter counter executed', this.counter);
        if (!employees || !searchTerm) { return employees; }
        return employees.filter(emp => emp.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
    }
}
