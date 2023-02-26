import { Component } from '@angular/core';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})



export class AnimalComponent {
  animals = [{aname: "dog", age:12},{aname: "fish", age:4},{aname: "horse", age:12}]
  animal=()=>{
    console.log("animal")
  }
  deleteAnimal(index: number) {
    this.animals.splice(index, 1);
    localStorage.setItem('animals', JSON.stringify(this.animals));

  }
  ngOnInit() {
    const storedAnimals = localStorage.getItem('animals');
    this.animals = storedAnimals ? JSON.parse(storedAnimals) : [];
  }
}
