import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private baseURL = `http://localhost:9000/books`

  constructor(private http: HttpClient) { }

getAllData(): Observable<any[]> {
    return this.http.get<any[]>(this.baseURL)
 }

 delBook(id: number): Observable<number> {
  return this.http.delete<number>(this.baseURL + "/" + id);
}
addBook(book:any): Observable<any> {
  return this.http.post<any>(this.baseURL , book);
}
updBook(book:any): Observable<any> {
  console.log(book)
  return this.http.put<any>(this.baseURL+ "/" + book.id, {"title":book.title,"author":book.author});
}

}
