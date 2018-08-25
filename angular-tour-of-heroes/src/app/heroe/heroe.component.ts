import { Component, OnInit } from '@angular/core';
import { Heroe } from '../heroe'

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe:Heroe = {
    id:1,
    name:"Windstorm"
  } 

  constructor() { }

  ngOnInit() {
  }

}
