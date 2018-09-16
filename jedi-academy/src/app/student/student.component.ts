import { Component, OnInit, Input } from '@angular/core';

import { Student } from './student.model';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  @Input()
  student: Student;

  constructor() {}

  ngOnInit() {}

  showName(e) {
    e.preventDefault()
    console.log(this.student.name)
  }

}
