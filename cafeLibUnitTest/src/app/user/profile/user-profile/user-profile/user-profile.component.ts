import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  public sayHi:boolean = false
  public username:string

  constructor() { }

  get hiMessage(){
    return `Hey ${this.username}! What's up!`
  }

  ngOnInit() {
    this.username = 'Ari Perkins'
  }

  sayHiTapped():void{
    this.sayHi = !this.sayHi
  }


}
