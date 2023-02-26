import { Component } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {
  ar:any[] = []
  student = {}
  // stuser is a instance of StudentService class
  constructor(private stuser: StudentService)
  { 
    // this methods is occured when this class is created like useEffect without needed to call it
    stuser.getAllData().subscribe(res => (this.ar =res))
    stuser.getsingle(1).subscribe(res => (this.student =res))
  }

  getsingle =(id:number) =>{
    this.stuser.getsingle(id).subscribe(res => (this.student = res))

  }
  
}
