import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cafeAngularWebElement';

  letterSelected(letter)
  {
    console.log(`The user selected a letter ${letter}`)
  }
}
