import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  public user = {
    first:"Smithy",
    last:"Murphy",
    roles:["admin","editor"]
  }

  getUsername():string{
    return `${this.user.first} ${this.user.last}`
  }

  getUsername_p():Promise<string | void>{
    return 
  }

  getUsername_o():Observable<string>{
    return
  }

  getUserDetails():string{
    return
  }

  getUserDetails_p():Promise<any>{
    return
  }
}
