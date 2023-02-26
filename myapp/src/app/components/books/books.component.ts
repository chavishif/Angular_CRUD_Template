import { Component } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  books = <any>[]

  constructor(private bookuser: BooksService)
  {

    bookuser.getAllData().subscribe(res => (this.books = res))

  }

  getBooks=()=>{
    this.bookuser.getAllData().subscribe(res => (this.books = res))
  }
  // one way for refresh - without the subscribe there is no update list of books
  delBook =(id: number) =>{
    this.bookuser.delBook(id).subscribe(() => {
      this.bookuser.getAllData().subscribe(res => {
        this.books = res;
      });
    });
  }
// another way for refresh
  addBook =(title:string, author:string) =>{
    this.bookuser.addBook({title, author}).subscribe(res => this.getBooks() )
  }
  updBook =(id:number ,title:string, author:string) =>{
    this.bookuser.updBook({id,title, author}).subscribe(res => this.getBooks() )
  }
  
}
