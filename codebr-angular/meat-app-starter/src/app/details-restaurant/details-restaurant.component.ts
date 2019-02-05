import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Restaurant } from 'app/restaurants/restaurant/restaurant.model';
import { RestaurantService } from 'app/restaurants/restaurant/restaurant.service';

@Component({
  selector: 'mt-details-restaurant',
  templateUrl: './details-restaurant.component.html'
})
export class DetailsRestaurantComponent implements OnInit {

  restaurant:Restaurant

  constructor(
    private activeRoute:ActivatedRoute,
    private restaurantService:RestaurantService
    ) { }

  ngOnInit() {
    this.restaurantService.get(this.activeRoute.snapshot.params['id'] )
      .subscribe(restaurant => this.restaurant = restaurant)
  }

}
