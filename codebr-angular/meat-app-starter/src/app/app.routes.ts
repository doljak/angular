import { Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { RestaurantsComponent } from "./restaurants/restaurants.component";
import { DetailsRestaurantComponent } from "./details-restaurant/details-restaurant.component";

export const ROUTES: Routes = [
  {
    path:"",
    component:HomeComponent,
    pathMatch:"full"
  },
  { 
    path:"about",
    component:AboutComponent
  },
  {
    path:'restaurants',
    component:RestaurantsComponent
  },
  {
    path:'restaurants/:id',
    component:DetailsRestaurantComponent
  }
]