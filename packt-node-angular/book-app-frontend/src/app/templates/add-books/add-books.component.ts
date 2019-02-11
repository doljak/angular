import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../services/api.service';
import { ToastrService } from 'ngx-toastr';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.css']
})
export class AddBooksComponent implements OnInit {

  model:any = {}

  constructor(
    private _apiService:ApiService,
    private toastr:ToastrService,
    private router:Router
  ) { }

  ngOnInit() {
  }

  addNew(){
    this._apiService.addNewBook(this.model).subscribe(
      data => {
        this.toastr.success(data['message'], 'Success');
        this.router.navigate(['/books']);
      },
      error => {
        if(error.error.error.code){
          this.toastr.error('A book with this name already exist!', 'Error');
        }else if(error.error.error.errors.price.path === 'price'){
          this.toastr.error('The price should be a number', 'Error')
        }else if(error.error.error.errors.isbn.path === 'isbn'){
          this.toastr.error('The ISBN should be a number', 'Error')
        }else{
          this.toastr.error(error.error.msg,'Error')
        }
      }
    )
  }

}
