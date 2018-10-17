import { Hero } from './heroes.class'
import { HEROES } from '../../mock-heroes'

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessagesService } from '../messages/messages.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(
    private messageService:MessagesService
  )
  {}

  getHeroes():Observable< Hero[] >
  {
    //TODO: sending message _after_ fetching service
    this.messageService.add("Hero Service: fetched heroes")
    return of ( HEROES )
  }
}
