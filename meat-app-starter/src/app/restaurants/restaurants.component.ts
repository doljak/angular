import { Component, OnInit } from '@angular/core';

import { Restaurant } from './restaurant/resaurant.model'
import { RestaurantService } from './restaurant/restaurants.service'

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  restaurants:Restaurant[]

  constructor(
    private restaurantsService:RestaurantService,
  ){}

  ngOnInit() 
  {

    return this.restaurantsService.restaurants()
      .subscribe( res => this.restaurants = res)
  }
  
  
}
