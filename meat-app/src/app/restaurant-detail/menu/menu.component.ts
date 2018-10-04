import { Component, OnInit, Input } from '@angular/core';

import { RestaurantService } from '../../restaurants/restaurant/restaurant.service'
import { ActivatedRoute } from '@angular/router'
import { MenuItem } from '../menu-item/menu-item.model'
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  itens:Observable< MenuItem[] >

  constructor(
    private restaurantService:RestaurantService,
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    this.itens = this.restaurantService.menuOfRestaurantById(this.route.parent.snapshot.params['id'])
  }

  addItem(item:MenuItem)
  {
    console.log(item)
  }

}
