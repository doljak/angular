import { Injectable } from '@angular/core';
import { Http } from '@angular/http'

import { urlLocal } from '../../app.const';
import { Restaurant } from './restaurant.model';
import { Observable } from 'rxjs/Observable';
//import { ErrorHandler } from '../../app.error-handler'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'


@Injectable()
export class RestaurantService {
  
  request:object = {
    restaurants: '/restaurants',
    menu:'/menu',
    reviews:'/reviews',
    orders:'/orders'
  }

  constructor(private http:Http) { }

  get(type):Observable<Restaurant[]>{
    return this.http.get(`${ urlLocal }${ this.request[type] }`) 
      .map( resp => resp.json())
      //.catch(ErrorHandler.handleError)
  }


}
