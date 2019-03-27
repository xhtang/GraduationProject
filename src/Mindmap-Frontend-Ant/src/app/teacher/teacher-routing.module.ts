import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TCoursesComponent } from './t-courses/t-courses.component';
import { TCourseComponent } from './t-course/t-course.component';
import { TMainComponent } from './t-main/t-main.component';
import { AuthTeacherGuard } from './auth-teacher.guard';

const teacherRoutes: Routes = [
  {
    path: 't',
    component: TMainComponent,
    canActivate: [AuthTeacherGuard],
    canActivateChild: [AuthTeacherGuard],
    children: [
      {path: '', redirectTo: 'courses', pathMatch: 'full'},
      {path: 'courses', component: TCoursesComponent},
      {path: 'course/:id', component: TCourseComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(teacherRoutes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
