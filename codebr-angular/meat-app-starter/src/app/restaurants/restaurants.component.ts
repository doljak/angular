import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RestaurantService } from './restaurant/restaurant.service';
import { Restaurant } from './restaurant/restaurant.model';


@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html'
})
export class RestaurantsComponent implements OnInit {

  restaurants:Restaurant[] 
  constructor(
      private activeRoute:ActivatedRoute,
      private restaurantService:RestaurantService
      ) { }

  ngOnInit() {
    this.restaurantService.get(this.activeRoute.snapshot.params['id'])
      .subscribe( restaurant => this.restaurants = restaurant)
  }

}
