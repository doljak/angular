import { Response } from '@angular/http'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw'

export class ErrorHandler{
  static handleError(error:Response | any){
    const errorMessage : string = (error instanceof Response)?
      `Erro ${ error.status } ao tentar acesssar a url ${ error.url} - ${ error.statusText}`
      : error.toString()
      console.log(errorMessage)
      return Observable.throw(errorMessage)
  } 
}