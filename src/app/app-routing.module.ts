import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import{EmployeesComponent} from './pages/employees/employees/employees.component';
import{EditComponent} from './pages/employees/employees/edit/edit.component';

const routes: Routes = [
  {
    path: "",
    component: EmployeesComponent
  },
  {
    path: "employee/add/:id",
    component: EditComponent
  },
  {
    path: "employee/edit/:id",
    component: EditComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
