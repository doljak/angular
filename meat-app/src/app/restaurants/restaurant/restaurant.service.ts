import { Restaurant } from './restaurant.model'
import { MEAT_API } from '../../app.api'

import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import { ErrorHandler } from '../../app.error-handler'

import { Observable } from 'rxjs/observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'


@Injectable()
export class RestaurantService{
    
    constructor(private http:Http){}

    restaurants(): Observable<Restaurant[]>{
        return this.http.get(`${ MEAT_API }/restaurants`)
            .map(restaurants => restaurants.json())
            .catch(error => ErrorHandler.handleError(error))
    } 
    
    restaurantById(id:string): Observable< Restaurant >{
        return this.http.get(`${MEAT_API}/restaurants/${id}`)
            .map(restaurant => restaurant.json())
            .catch(error => ErrorHandler.handleError(error))
    }
}