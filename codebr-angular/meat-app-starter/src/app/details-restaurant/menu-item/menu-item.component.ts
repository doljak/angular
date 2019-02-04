import { Component, OnInit, Input } from '@angular/core';
import { RestaurantService } from 'app/restaurants/restaurant/restaurant.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-menu-item',
  templateUrl: './menu-item.component.html'
})
export class MenuTemComponent implements OnInit {

  items:any

  constructor(
    private activeRoute:ActivatedRoute,
    private restaurantService:RestaurantService
  ) { }

  ngOnInit() {
    this.restaurantService.get('restaurants', this.activeRoute.parent.snapshot.params['id'], 'menu')
      .subscribe(items => this.items = items)
  }

}
