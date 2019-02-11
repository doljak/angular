import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../services/api.service';
import { ToastrService } from 'ngx-toastr';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.less']
})
export class SignupComponent implements OnInit {

  model:any = {}

  constructor(
    private _apiService:ApiService,
    private toastr:ToastrService,
    private router:Router
  ) { }

  ngOnInit() {
  }

  signup(){
    this._apiService.signup(this.model).subscribe(
      data => {
        console.log(`data: ${data}`);
        this.toastr.success(data['message'], 'Success');
        this.router.navigate(['/login']);
      },
      error => {
        this.toastr.error(error.error.message, 'Error');
      }
    )
  }

}
