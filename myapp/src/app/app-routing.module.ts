import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AnimalComponent } from './components/animal/animal.component';
import { BooksComponent } from './components/books/books.component';
import { StudentsComponent } from './components/students/students.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'animal', component: AnimalComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'books', component: BooksComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
