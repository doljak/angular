import { Component } from '@angular/core';
import { AlternatingCasePipe } from './alternate-casing/alternating-case.pipe'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public pages = ["exercise-01", "exercise-02", "exercise-03", "exercise-04"]
}
