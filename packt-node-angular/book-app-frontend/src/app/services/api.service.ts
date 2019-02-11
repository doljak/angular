import { Injectable } from '@angular/core';

import { HttpEvent, HttpHandler, HttpInterceptor, HttpResponse, HttpRequest, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})

const API_URL = 'http://127.0.0.1:3001/'
export class ApiService {

  constructor(private httpClient:HttpClient) {}

  login(model:any){
    return this.httpClient.post(`${ API_URL }/user/login`, model);
  }

  signup(model:any){
    return this.httpClient.post(`${ API_URL }/user/signup`, model);
  }

  addNewBook(model:any){
    return this.httpClient.post(`${ API_URL }/books/add-book`, model);
  }

  editBook(id:string, model:any){
    return this.httpClient.patch(`${ API_URL }/books/update-book/${id}`,model);
  }

  deleteBook(id:string){
    return this.httpClient.delete(`${ API_URL }/books/delete-book/${id}`)
  }

  bookDetail(id:string){
    return this.httpClient.get(`${ API_URL }/books/book-details/${id}`)
  }
}
