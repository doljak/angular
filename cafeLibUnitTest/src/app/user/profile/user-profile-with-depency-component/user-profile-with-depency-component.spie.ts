import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserService } from '../../user.service'
import { startWith, catchError } from 'rxjs/operators'



@Component({
  selector: 'app-user-profile-with-depency-component',
  templateUrl: './user-profile-with-depency-component.spie.html',
  styleUrls: ['./user-profile-with-depency-component.spie.css']
})
export class UserProfileWithDepencySpie implements OnInit {

  user:any
  friendsOnline:Observable<UserProfileWithDepencySpie>
  errMsg:string

  constructor(private userService:UserService) { }

  ngOnInit() {

    this.user = this.userService.getUserDetails()

    this.errMsg = ''
    
    this.friendsOnline = this.userService.getUsername_o().pipe(
      startWith(['... no friends online']),
      catchError((err:any)=>{
        setTimeout(()=> this.errMsg = err.message || err.toString())
        return of(['...no friends online'])
      })

    )

  }


}
