import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from 'app/restaurants/restaurant/restaurant.service';
import { Observable } from 'rxjs/Observable';
import { MenuItem } from '../menu-item/menu-item.model';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  items:Observable<MenuItem[]>;

  
  constructor(
    private activeRoute:ActivatedRoute,
    private restaurantService:RestaurantService
  ) { }

  ngOnInit() {
    this.items = this.restaurantService.get(this.activeRoute.parent.snapshot.params['id'], 'menu')
  }

  addEventEmit(item:MenuItem){
    console.log(item)
  }

}
