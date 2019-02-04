import { Injectable } from '@angular/core';
import { Http } from '@angular/http'

import { urlLocal } from '../../app.const';
import { Restaurant } from './restaurant.model';
import { Observable } from 'rxjs/Observable';
import { ErrorHandler } from '../../app.error-handler'
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

  get(type, id = "",extraId=""):Observable<Restaurant[] | any>{
    id = ( id!=="" ) ? `/${ id }` : id;
    extraId = ( extraId!=="") ? `/${ extraId }` : extraId; 
    return this.http.get(`${ urlLocal }/restaurants${id}${extraId}`) 
      .map( resp => resp.json())
      .catch(ErrorHandler.handleError)
  }


}
