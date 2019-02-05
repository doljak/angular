import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { MenuItem } from './menu-item.model';

@Component({
  selector: 'mt-menu-item',
  templateUrl: './menu-item.component.html'
})
export class MenuTemComponent implements OnInit {

  @Input() item:MenuItem
  @Output() add = new EventEmitter()

  constructor() { }

  ngOnInit() {
    
  }

  emmit(){
    this.add.emit(this.item)
  }
}
