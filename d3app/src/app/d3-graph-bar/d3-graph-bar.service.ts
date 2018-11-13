import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import { Observable } from 'rxjs';

const API:string = 'http://localhost:3051' 

@Injectable({
  providedIn: 'root'
})
export class D3GraphBarService {

  constructor(private http:Http) { }

  getSales():Observable<any>{
    return this.http.get(`${ API }/sales`)
  }
}
