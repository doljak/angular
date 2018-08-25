import { Restaurant } from '../restaurant/resaurant.model'
import { MenuItem } from '../../restaurant-details/menu-item/menu-item.module'

import { Injectable} from '@angular/core' 
import { Http } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

import { ErrorHandler } from '../../app.error-handler'
import { MEAT_API } from '../../api.app'

@Injectable()
class RestaurantService{

    constructor(private http:Http){

    }

    restaurants():Observable< Restaurant[] > 
    {
        return this.http.get(`${ MEAT_API }/restaurants`)
            .map( res => res.json() )
            .catch(ErrorHandler.handleError)
    }

    getRestaurantById(id:string):Observable < Restaurant >
    {
        return this.http.get(`${ MEAT_API }/restaurants/${ id }`)
            .map( res => res.json() )
            .catch( ErrorHandler.handleError )
    }

    getRestaurantReviewsById(id:string):Observable < any >
    {
        return this.http.get(`${ MEAT_API }/restaurants/${ id }/reviews/`)
            .map( res => res.json())
            .catch( ErrorHandler.handleError )
    }

    getMenuRestaurantById(id:string):Observable < MenuItem[] >{
        return this.http.get(`${ MEAT_API }/restaurants/${ id }/menu/`)
            .map( resp => resp.json() )
            .catch( ErrorHandler.handleError )
    }
    
}

export { RestaurantService }