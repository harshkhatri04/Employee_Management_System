import { Injectable } from '@angular/core';
import{Employee} from '../models/employee.model'
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
 

  employees: Employee[] = [
    {
    id: 1,
    firstName: "Akash",
    lastName: "Gupta",
    gender: "male",
    email: "Akash@this.employees.com",
    department: "HrHelpDesk",
    dob:null,
    },
    {
      id: 2,
      firstName: "Karan",
      lastName: "Singh",
      gender: "male",
      email: "Karan@this.employees.com",
      department: "Payroll",
      dob:null,
      }
  ]
  constructor() { }

  onGetEpmloyee(id: Number){
    return this.employees.find(x=>x.id === id);
  }

  onGet(){
    return this.employees;
    
  }
  onAdd(employee: Employee) {
    this.employees.push(employee);
  }
  onUpdate(employee: Employee) {
    let oldEmployee = this.employees.find(x=>x.id === employee.id);
    oldEmployee.firstName = employee.firstName;
    oldEmployee.lastName = employee.lastName;
    oldEmployee.department = employee.department;
    oldEmployee.dob = employee.dob;
    oldEmployee.email = employee.email;
    oldEmployee.gender = employee.gender;
  }

  onDelete(id: number){
    let employee = this.employees.find(x=>x.id === id);
    let index = this.employees.indexOf(employee,0);
    this.employees.splice(index,1);
  }
}


