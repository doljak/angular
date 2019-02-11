import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpResponse, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

export class HeaderInterceptor implements HttpInterceptor{
  intercept(req:HttpRequest<any>, next:HttpHandler):Observable<HttpEvent<any>>{
    let token = localStorage.getItem('token');
    req = req.clone({headers:req.headers.set('Authorization', `JWT+${token}`)});
    return next.handle(req);

  }
}