import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './home/header/header.component';
import { LoginComponent } from './home/login/login.component';
import { RegisterComponent } from './home/register/register.component';
import { FooterComponent } from './home/footer/footer.component';
import { ListCourseComponent } from './couse/list-course/list-course.component';
import { RegisterCourseComponent } from './couse/register-course/register-course.component';
import { UpdateCourseComponent } from './couse/update-course/update-course.component';
import { RegisterStudentComponent } from './admin/register-student/register-student.component';
import { ListStudentComponent } from './admin/list-student/list-student.component';
import { UpdateStudentComponent } from './admin/update-student/update-student.component';
import { RegisterTeacherComponent } from './admin/register-teacher/register-teacher.component';
import { ListTeacherComponent } from './admin/list-teacher/list-teacher.component';
import { UpdateTeacherComponent } from './admin/update-teacher/update-teacher.component';
import { RegisterClassComponent } from './admin/register-class/register-class.component';
import { UpdateClassComponent } from './admin/update-class/update-class.component';
import { ListClassComponent } from './admin/list-class/list-class.component';

import { ClassService } from "./services/class.service";
import { CourseService } from "./services/course.service";
import { StudentService } from "./services/student.service";
import { TeacherService } from "./services/teacher.service";
import { TokenInterceptorService } from "./services/token-interceptor.service";

import { AuthGuard } from "./guard/auth.guard";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    ListCourseComponent,
    RegisterCourseComponent,
    UpdateCourseComponent,
    RegisterStudentComponent,
    ListStudentComponent,
    UpdateStudentComponent,
    RegisterTeacherComponent,
    ListTeacherComponent,
    UpdateTeacherComponent,
    RegisterClassComponent,
    UpdateClassComponent,
    ListClassComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [ClassService,CourseService,StudentService,TeacherService,TokenInterceptorService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
