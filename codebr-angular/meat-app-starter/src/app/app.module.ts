import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component'
import { ROUTES } from './app.routes';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component';
import { RestaurantService } from './restaurants/restaurant/restaurant.service';
import { DetailsRestaurantComponent } from './details-restaurant/details-restaurant.component';
import { MenuComponent } from './details-restaurant/menu/menu.component';
import { MenuTemComponent } from './details-restaurant/menu-item/menu-item.component';
import { ShoppingCartComponent } from './details-restaurant/shopping-cart/shopping-cart.component';
import { ReviewsComponent } from './details-restaurant/reviews/reviews.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    RestaurantsComponent,
    RestaurantComponent,
    DetailsRestaurantComponent,
    MenuComponent,
    MenuTemComponent,
    ShoppingCartComponent,
    ReviewsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [RestaurantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
