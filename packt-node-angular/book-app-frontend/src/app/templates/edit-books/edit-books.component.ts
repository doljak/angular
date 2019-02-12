import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../services/api.service';
import { ToastrService } from 'ngx-toastr';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-books',
  templateUrl: './edit-books.component.html',
  styleUrls: ['./edit-books.component.css']
})
export class EditBooksComponent implements OnInit {

  public id:any
  public model:any = {}

  constructor(
    private _apiService:ApiService,
    private toastr:ToastrService,
    private router:Router,
    private activeRoute:ActivatedRoute
  ) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      this.id = params['id']
    });
    this._apiService.bookDetail(this.id).subscribe(
      data=>{
        this.model = data['model']['0'];
      },
      error => {
        if(error.status === 401){
          this.toastr.error("Token expired", "Error");
          this.router.navigate(['/login']);
        }
      }
    )
  }

  updateBook(){
    this._apiService.editBook(this.id, this.model).subscribe(
      data => {
        this.toastr.success("Book updated");
        this.router.navigate(['/books'])
      },
      error => {
        console.log(error.error.error.path)
        if(error.error.error.code){
          this.toastr.error('Book already exists', 'Error');
        }else if(error.error.error.path === 'price'){
          this.toastr.error('Price should be a number', 'Error');
        }else if(error.error.error.path === 'isbn'){
          this.toastr.error('ISBN should be a number', 'Error');
        }else{
          this.toastr.error('Auth failed', 'Error');
          this.router.navigate(['login'])
        }

      }
    )
  }

}
