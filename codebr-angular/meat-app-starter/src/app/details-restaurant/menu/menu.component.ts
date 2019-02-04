import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from 'app/restaurants/restaurant/restaurant.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  items:Observable<any>;
  
  constructor(
    private activeRoute:ActivatedRoute,
    private restaurantService:RestaurantService
  ) { }

  ngOnInit() {
    this.restaurantService.get('menu', this.activeRoute.snapshot.params['id'])
      .subscribe(items => this.items = items)
  }

}
