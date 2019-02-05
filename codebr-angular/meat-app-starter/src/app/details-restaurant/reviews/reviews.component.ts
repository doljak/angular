import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { RestaurantService } from 'app/restaurants/restaurant/restaurant.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {

  reviews:Observable<any>

  constructor(
    private restaurantService:RestaurantService,
    private activeRoute:ActivatedRoute
    ) { }

  ngOnInit() {
    this.reviews = this.restaurantService.get(this.activeRoute.parent.snapshot.params['id'], 'reviews')
  }

}
