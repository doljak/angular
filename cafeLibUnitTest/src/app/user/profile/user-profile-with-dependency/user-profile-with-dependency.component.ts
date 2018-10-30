import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-user-profile-with-dependency',
  templateUrl: './user-profile-with-dependency.component.html',
  styleUrls: ['./user-profile-with-dependency.component.css']
})
export class UserProfileWithDependencyComponent implements OnInit {

  public user:any;
  public friendsOnLine:Observable<string[]>;
  public errMsg:string;

  constructor(private userService:UserService) { }

  ngOnInit() {
    this.user = this.userService.getUserDetails()
  }

}
