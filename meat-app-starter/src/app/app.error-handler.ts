import { Response } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/throw'

class ErrorHandler
{
    static handleError( error:Response | any)
    {
        let errorMessage:string
        if(error instanceof Response)
        {
            errorMessage = `${ error.status } ao acessar ${ error.url } - ${ error.statusText }`
        }
        else
        {
            errorMessage = error.toString()
        }
        console.log(errorMessage)
        return Observable.throw(errorMessage)
    }
}

export { ErrorHandler }