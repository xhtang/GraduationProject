import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Course} from '../course';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class SCourseService {

  private baseUrl = '';
  tempUrl: string;

  constructor(
    private http: HttpClient
  ) {
    this.baseUrl = environment.apiUrl;
  }

  getCourses(user_name: string, identity: string): Observable<Course[]> {
    this.tempUrl = this.baseUrl + identity + '_courses/' + user_name;
    return this.http.get<Course[]>(this.tempUrl);
  }

  searchCourse(): Observable<Course[]> {
    this.tempUrl = this.baseUrl + 'search_course';
    return this.http.get<Course[]>(this.tempUrl);
  }

  stuAddCourse(user_name: string, course: Course, select_code: string): Observable<boolean> {
    this.tempUrl = this.baseUrl + 'add_course_student/' + user_name + '/' + select_code;
    return this.http.post<boolean>(this.tempUrl, course , httpOptions);
  }
}
