import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  public result:number

  constructor()
  {}

  ngOnInit()
  {}

  add(v1, v2){
    this.result = parseFloat(v1) + parseFloat(v2)
  }

  subtract(v1, v2){
    this.result = parseFloat(v1) - parseFloat(v2)
  }
}
