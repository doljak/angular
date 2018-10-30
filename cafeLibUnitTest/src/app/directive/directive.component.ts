import { Component, OnInit } from '@angular/core';
import { BoxDirective } from '../box/box.directive'

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
