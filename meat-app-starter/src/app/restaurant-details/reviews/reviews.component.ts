import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../../restaurants/restaurant/restaurants.service'
import { ActivatedRoute } from '@angular/router'
import { Observable } from '../../../../node_modules/rxjs/Observable';

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})

export class ReviewsComponent implements OnInit {

  reviews: Observable < any >

  constructor(
    private restaurantReviews:RestaurantService,
    private router:ActivatedRoute
  ) { }

  ngOnInit() 
  {
    this.reviews = this.restaurantReviews.getRestaurantReviewsById(this.router.parent.snapshot.params['id'])
  }

}
