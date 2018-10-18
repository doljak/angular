import { Injectable }               from '@angular/core';
import { HttpClient, HttpHeaders }  from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { Hero } from './heroes.class';
import { MessagesService }  from '../messages/messages.service';

import { catchError, map, tap }  from 'rxjs/operators'

@Injectable({ providedIn: 'root' })
export class HeroService {

  private heroesUrl = 'api/heroes' //URL to Web API

  constructor(
    private messageService: MessagesService,
    private http: HttpClient,
  ) 
  {}

  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return this.http.get<Hero[]>(this.heroesUrl)
            .pipe(
              tap(heroes => this.log('fetched heroes')),
              catchError(this.handleError('getErrors', []))
            )
  }

  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    // this.messageService.add(`HeroService: fetched hero id=${id}`);
    // return of(HEROES.find(hero => hero.id === id));
    const url = `${this.heroesUrl}/${id}`
    return this.http.get<Hero>(url)
      .pipe(
        tap(_=>this.log(`fetched hero = ${id}`)),
        catchError(this.handleError<Hero>(`get hero = ${id}`))
      )
  }

  /** Log a HeroService message with the MessageService */
  private log(message:string): void {
    this.messageService.add(`Hero service: ${message}`)
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */

  private handleError<T>(operation = 'operation', result?: T){
    return (error: any) :Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.log(error) // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${ error.message }`)

      // Let the app keep running by returning an empty result.
      return of(result as T)
    }
  }
}