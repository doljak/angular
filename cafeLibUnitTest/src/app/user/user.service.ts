import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { reject } from 'q';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
    public user = {
      first:"Smith",
      last:"Murphy",
      roles:["admin","editor"],
      friends:[
        "alice", "bert", "candice", "devon", "earl", "francine"
      ]
    }

  constructor() { }


  getUsername():string{
    return `${this.user.first} ${this.user.last}`
  }

  getUsername_p():Promise<string | void>{
    return new Promise<string>( (resolve, reject)=>
                {
                  setTimeout(()=>{
                    resolve(`${this.user.first} ${this.user.last}`)
                  }, 2000 )
                }).catch(err=>{
                  reject(`${err}`)
                })
              }

  getUsername_o():Observable<string>{
    return Observable.create( observer => {
      observer.next(`${this.user.first} ${this.user.last}`)
      observer.complete()
    })
  }

  getUserDetails():any{
    return this.user
  }

  getUserDetails_p():Promise<any>{
    return
  }
}
