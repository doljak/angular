import { Component, OnInit } from '@angular/core';
import { RestaurantService } from './restaurant/restaurant.service';
import { Restaurant } from './restaurant/restaurant.model';


@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html'
})
export class RestaurantsComponent implements OnInit {

  restaurants:Restaurant[] 
  constructor(private restaurantService:RestaurantService) { }

  ngOnInit() {
    this.restaurantService.get('restaurants')
      .subscribe( restaurant => this.restaurants = restaurant)
  }

}
