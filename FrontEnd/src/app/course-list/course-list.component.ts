import { Component, OnInit } from '@angular/core';
import { CourseListService } from '../course-list.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  constructor(private data : CourseListService) { }

  ngOnInit() {
  }

}
