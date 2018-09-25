import { Restaurant } from './restaurant.model'
import { MEAT_API } from '../../app.api'

import { Injectable } from '@angular/core'
import { Http } from '@angular/http'

import { Observable } from 'rxjs/observable'
import 'rxjs/add/operator/map'


@Injectable()
export class RestaurantService{
    
    constructor(private http:Http){}

    restaurants(): Observable<Restaurant[]>{
        return this.http.get(`${ MEAT_API }/restaurants`)
            .map(restaurants => restaurants.json())
    }  
}