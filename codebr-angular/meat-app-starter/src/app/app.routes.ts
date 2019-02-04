import { Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { RestaurantsComponent } from "./restaurants/restaurants.component";
import { DetailsRestaurantComponent } from "./details-restaurant/details-restaurant.component";
import { MenuComponent } from "./details-restaurant/menu/menu.component";
import { ReviewsComponent } from "./details-restaurant/reviews/reviews.component";

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
    component:DetailsRestaurantComponent,
    children:[
      {
        path:'',
        component:MenuComponent,
        pathMatch:'full'
      },
      {
        path:'menu',
        component:MenuComponent
      },
      {
        path:'reviews',
        component:ReviewsComponent
      }
    ]
  }
]