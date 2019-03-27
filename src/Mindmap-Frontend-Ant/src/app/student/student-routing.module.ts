import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SMainComponent } from './s-main/s-main.component';
import { SCoursesComponent } from './s-courses/s-courses.component';
import { SCourseComponent } from './s-course/s-course.component';
import {AuthStudentGuard} from './auth-student.guard';

const studentRoutes: Routes = [
  {
    path: 's',
    component: SMainComponent,
    canActivate: [AuthStudentGuard],
    canActivateChild: [AuthStudentGuard],
    children: [
      {path: '', redirectTo: 'courses', pathMatch: 'full'},
      {path: 'courses', component: SCoursesComponent},
      {path: 'course/:id', component: SCourseComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(studentRoutes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
