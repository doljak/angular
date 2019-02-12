import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ApiService} from '../../services/api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  public user_type:any
  public books: any = []
  
  constructor(
    private _apiService:ApiService,
    private router:Router,
    private toastr:ToastrService
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = function() {
      return false;
    }
   }

  ngOnInit() {
    this.user_type = localStorage.getItem('user_type');
    let token = localStorage.getItem('token');

    if(!token){
      this.router.navigate(['/login']);
    }
    this._apiService.getBooks().subscribe(
      data => {
        this.books = data;
      },error => {
        this.toastr.error(error.error.msg, "Error");
        this.router.navigate(['/login']);
      }
    )
  }

  deleteBook(id:any){
    if(this.user_type === 'admin'){
      this._apiService.deleteBook(id).subscribe(
        data => {
          this.toastr.success('Book deleted');
          this.router.navigated = false;
          this.router.navigate(['/books'])
        },
        error => {
          this.toastr.error(error.error.msg, "Error");
          this.router.navigate(['/login'])
        }
      )
    }else{
      this.toastr.error('You are not an Admin', 'Error')
    }

  }

  logout(id:any){
    localStorage.removeItem('token');
    localStorage.removeItem('user_type');
    this.router.navigate(['/login']);
  }
}
