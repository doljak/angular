import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MenuItem } from './menu-item.module';

@Component({
  selector: 'mt-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})


export class MenuItemComponent implements OnInit {

  @Input() menuItem:MenuItem
  @Output() add:EventEmitter< MenuItem > = new EventEmitter()

  constructor() { }

  ngOnInit() 
  {

  }

  emitEvent()
  {
    this.add.emit(this.menuItem)
  }

  

}
