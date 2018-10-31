import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-finalexercise',
  templateUrl: './finalexercise.component.html',
  styleUrls: ['./finalexercise.component.css']
})
export class FinalexerciseComponent implements OnInit {

  public test = "hello"
  constructor() { }

  ngOnInit() {
    this.myMethod("world")
  }

  myMethod(newValue):void
  {
    this.test = newValue
  }

}
