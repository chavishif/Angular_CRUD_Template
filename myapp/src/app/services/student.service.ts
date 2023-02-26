import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  // private keyword is used to define a class member (property or method) as private.
  //  Private members can only be accessed within the class in which they are defined.
  private baseURL = `http://localhost:3000/students`
  // The constructor is a special method 
  // called when an object of the class is created, in this case it takes one argument = http
  constructor(private http: HttpClient) { }

  getAllData(): Observable<any[]> {
    return this.http.get<any[]>(this.baseURL)
 }

 getsingle(id : number): Observable<any> {
  return this.http.get<any>(this.baseURL + "/" + id)
}
}
