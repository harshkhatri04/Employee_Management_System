import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
id: number;
header:string;
employee: Employee ={
  id: 0,
     firstName: "",
     lastName: "",
     gender: "",
     email: "",
     department: "",
     dob: null

}
  constructor(private router: Router, private route: ActivatedRoute, private employeeService: EmployeeService) { }

  ngOnInit(): void {
   this.id =  +this.route.snapshot.paramMap.get('id');
   this.header = this.id ===0? 'Add Employee': 'Edit Employee';
   
   if(this.id != 0){
     this.employee = this.employeeService.onGetEpmloyee(this.id);
   }
  }
  onSubmit(form: NgForm){
    let employee: Employee ={
     id: form.value.id,
     firstName: form.value.firstName,
     lastName: form.value.lastName,
     gender: form.value.gender,
     email: form.value.email,
     department: form.value.department,
     dob: form.value.dob
    }
if(this.id === 0){
  this.employeeService.onAdd(employee);
}else{
  this.employeeService.onUpdate(employee);
}
   

    this.router.navigateByUrl('');
  }

}
