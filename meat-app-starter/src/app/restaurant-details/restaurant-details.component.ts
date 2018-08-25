import { Component, OnInit } from '@angular/core';

import { RestaurantService } from '../restaurants/restaurant/restaurants.service'
import { Restaurant } from '../restaurants/restaurant/resaurant.model'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'mt-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.css']
})
export class RestaurantDetailsComponent implements OnInit {


  restaurant:Restaurant

  constructor(
              private restService:RestaurantService,
              private route:ActivatedRoute
              ) { }

  ngOnInit() {
    this.restService.getRestaurantById(this.route.snapshot.params['id'])
      .subscribe( res => this.restaurant = res)
  }

}
