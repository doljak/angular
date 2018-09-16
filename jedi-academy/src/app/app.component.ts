import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  students=[
    { name: 'Luke', isJedi: true, temple: 'Coruscant' },
    { name: 'Han Solo', isJedi: false },
    { name: 'Leia', isJedi: false }
  ]
}
