import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListClassComponent } from './admin/list-class/list-class.component';
import { ListStudentComponent } from './admin/list-student/list-student.component';
import { ListTeacherComponent } from './admin/list-teacher/list-teacher.component';
import { RegisterClassComponent } from './admin/register-class/register-class.component';
import { RegisterStudentComponent } from './admin/register-student/register-student.component';
import { RegisterTeacherComponent } from './admin/register-teacher/register-teacher.component';
import { UpdateClassComponent } from './admin/update-class/update-class.component';
import { UpdateStudentComponent } from './admin/update-student/update-student.component';
import { UpdateTeacherComponent } from './admin/update-teacher/update-teacher.component';
import { ListCourseComponent } from './couse/list-course/list-course.component';
import { RegisterCourseComponent } from './couse/register-course/register-course.component';
import { UpdateCourseComponent } from './couse/update-course/update-course.component';
import { LoginComponent } from './home/login/login.component';
import { RegisterComponent } from './home/register/register.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'listCourse',
    component: ListCourseComponent
  },
  {
    path: 'registerCourse',
    component: RegisterCourseComponent
  },
  {
    path: 'updateCourse',
    component: UpdateCourseComponent
  },
  {
    path: 'loginComponent',
    component: LoginComponent
  },
  {
    path: 'signUp',
    component: RegisterComponent
  },
  {
    path: 'listTeacher',
    component: ListTeacherComponent
  },
  {
    path: 'registerTeacher',
    component: RegisterTeacherComponent
  },
  {
    path: 'updateTeacher',
    component: UpdateTeacherComponent
  },
  {
    path: 'listStudent',
    component: ListStudentComponent
  },
  {
    path: 'registerStudent',
    component: RegisterStudentComponent
  },
  {
    path: 'updateStudent',
    component: UpdateStudentComponent
  },
  {
    path: 'listClass',
    component: ListClassComponent
  },
  {
    path: 'registerClass',
    component: RegisterClassComponent
  },
  {
    path: 'updateClass',
    component: UpdateClassComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
