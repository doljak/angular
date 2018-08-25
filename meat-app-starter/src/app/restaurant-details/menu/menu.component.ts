import { Component, OnInit  } from '@angular/core';
import { RestaurantService } from '../../restaurants/restaurant/restaurants.service'
import { ActivatedRoute } from '@angular/router'

import { MenuItem } from '../menu-item/menu-item.module'
import { Observable } from '../../../../node_modules/rxjs/Observable';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menu:Observable< MenuItem[] >

  constructor(
    private restarantService:RestaurantService,
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
   this.menu =  this.restarantService.getMenuRestaurantById(this.route.parent.snapshot.params['id'])
  }
  
  addItemMenu(item:MenuItem)
  {
    console.log(item)
  }

}
