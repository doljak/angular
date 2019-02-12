import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../services/api.service';
import { ToastrService } from 'ngx-toastr';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.css']
})
export class AllBooksComponent implements OnInit {

  public user_type:any
  public bookList:any = []

  constructor(
    private _apiService:ApiService,
    private toastr:ToastrService,
    private router:Router
  ) { }

  ngOnInit() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    let token = localStorage.getItem('token');
    let user_type = localStorage.getItem('user_type');
    if(!token){
      this.router.navigate(['/login']);
    }
    this._apiService.getBooks().subscribe(
      data=>{
        this.bookList = data['books']
      },
      error =>{
        this.toastr.error(error.error.msg, "Error");
        this.router.navigate(['/login'])
      }
    )
  }

  deleteBook(id:string){
    if(this.user_type === 'admin'){
      this._apiService.deleteBook(id).subscribe(
        data => {
          console.log(`Book id=${id} was deleted`);
          this.router.navigated = false;
          this.router.navigate(['/books']);
        },
        error => {
          this.toastr.error(error.error.msg, "Error");
        }
      )
    } else {
      this.toastr.error('You aren\'t admin', 'Error');
    }
  }

  logout(id:string){
    localStorage.removeItem('token');
    localStorage.removeItem('user_type');
    this.router.navigate(['/login'])

  }



}
