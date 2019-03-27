import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {environment} from '../../environments/environment';
import {Course} from '../course';
import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class TCourseService {
  private baseUrl = '';

  constructor(
      private http: HttpClient
  ) {
    this.baseUrl = environment.apiUrl;
  }


  getCourses(user_name: string, identity: string): Observable<Course[]> {
    const tempUrl = this.baseUrl + identity + '_courses/' + user_name;
    return this.http.get<Course[]>(tempUrl);
  }

  addCourse(course: Course, user_name: string): Observable<boolean> {
    const tempUrl = this.baseUrl + 'add_course_teacher/' + user_name;
    return this.http.post<boolean>(tempUrl, course, httpOptions);
  }

  searchCourse(): Observable<Course[]> {
    const tempUrl = this.baseUrl + 'search_course';
    return this.http.get<Course[]>(tempUrl);
  }

  getStudents(course_id: string): Observable<any[]> {
    const tempUrl = this.baseUrl + 'course_students/' + course_id;
    return this.http.get<any[]>(tempUrl);
  }

  deleteCourse(user_name: string, course_to_delete: Course): Observable<boolean> {
    const tempUrl = this.baseUrl
      + 'delete_course_teacher/' + user_name + '/' + course_to_delete.course_id + '/' + course_to_delete.course_name;
    return this.http.delete<boolean>(tempUrl);
  }
}
