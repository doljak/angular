import { Component } from '@angular/core';

import { Student } from './student/student.model'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'jedi-academy';

  students:Array<Student> = [
    {name:"Luke", isJedi: true, temple:"Coruscant"},
    {name:"Hans Solo", isJedi: false},
    {name:"Leia", isJedi: true}
  ]
}
