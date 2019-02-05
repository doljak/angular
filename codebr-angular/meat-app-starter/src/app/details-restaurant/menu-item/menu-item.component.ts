import { Component, OnInit, Input } from '@angular/core';
import { RestaurantService } from 'app/restaurants/restaurant/restaurant.service';
import { ActivatedRoute } from '@angular/router';
import { MenuItem } from './menu-item.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'mt-menu-item',
  templateUrl: './menu-item.component.html'
})
export class MenuTemComponent implements OnInit {

  items:Observable<MenuItem[]>

  constructor(
    private activeRoute:ActivatedRoute,
    private restaurantService:RestaurantService
  ) { }

  ngOnInit() {
    this.items = this.restaurantService.get(this.activeRoute.parent.snapshot.params['id'], 'menu')
  }

}
