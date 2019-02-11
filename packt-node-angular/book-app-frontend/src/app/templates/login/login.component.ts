import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../services/api.service';
import { ToastrService } from 'ngx-toastr';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  model:any = {}

  constructor(
    private _apiService:ApiService,
    private toastr:ToastrService,
    private router:Router
  ) { }

  ngOnInit() {
  }

  signup(){
    this._apiService.login(this.model).subscribe(
      data => {
        if(data['msg'] === "Auth user success"){}
          this.toastr.success(data['message'], 'Success');
          localStorage.setItem('user_type', data['user_type'])
          localStorage.setItem('token', data['token'])
          this.router.navigate(['/books']);
        },
      error => {
        this.toastr.error(error.error.message, 'Error');
      }
    )
  }

}
