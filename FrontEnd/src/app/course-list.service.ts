import { Injectable } from '@angular/core';

@Injectable()
export class CourseListService {

  id:number;
  name:string = "";
  
  constructor() { }

  public courseList: object[] = 
  [
    {'id' : '1', 'name' : 'Matrices & Vectors'},
    {'id' : '2', 'name' : 'Physiology'},
    {'id' : '3', 'name' : 'Physics'},
    {'id' : '4', 'name' : 'Calculus'},
    {'id' : '5', 'name' : 'Statistics'}
  ]
    
    AddCourse(){
    this.courseList.push({
          "id" : this.id,
          "name" : this.name
        });
      }
}
