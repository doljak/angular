import { Injectable }               from '@angular/core';
import { HttpClient, HttpHeaders }  from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { Hero } from './heroes.class';
import { MessagesService }  from '../messages/messages.service';

import { catchError, map, tap }  from 'rxjs/operators'

const httpOptions = {
  headers: new HttpHeaders({'Content-type':'application/cache'})
}

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

  /** PUT: update the hero on the server */
  updateHero(hero:Hero):Observable<any>{
    return this.http.put(this.heroesUrl, hero, httpOptions)
      .pipe(
        tap(_ => this.log(`update hero: ${hero.id}`)),
        catchError(this.handleError<any>('updateHero'))
      )
  }

  /** POST: add a new hero to the server */
  addHero(hero:Hero):Observable<Hero>{
    return this.http.post<Hero>(this.heroesUrl, hero, httpOptions)
      .pipe(
        tap((hero:Hero)=> this.log(`added hero with id=${hero.id}`)),
        catchError(this.handleError<Hero>('addHero'))
      )
  }

  /** Log a HeroService message with the MessageService */
  private log(message:string): void {
    this.messageService.add(`Hero service: ${message}`)
  }

  /** DELETE: delete the hero from the server */
  deleteHero(hero: Hero | number):Observable< Hero >{
    const id = (typeof hero === 'number') ? hero : hero.id
    const url = `${this.heroesUrl}/${id}`

    return this.http.delete<Hero>(url, httpOptions)
      .pipe(
        tap(_ => this.log(`deleteHero ${id}`)),
        catchError(this.handleError<Hero>('deleteHero'))
      )
  }

  /* GET heroes whose name contains search term */
  searchHeroes(term:string): Observable<Hero[]>{
    if(!term.trim()){
      return of ([])
    }
    return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`)
      .pipe(
        tap(_=>this.log(`search item ${term}`)),
        catchError(this.handleError<Hero[]>('searchHeroes', []))
      )
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