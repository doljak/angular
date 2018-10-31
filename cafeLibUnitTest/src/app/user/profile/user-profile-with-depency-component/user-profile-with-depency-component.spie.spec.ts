import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs'
import { UserProfileWithDepencySpie } from './user-profile-with-depency-component.spie';
import {CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, DebugElement} from '@angular/core';
import { UserService } from '../../user.service';
import { By } from '@angular/platform-browser';

describe('UserProfileWithDepencySpie', () => {

  let component: UserProfileWithDepencySpie;
  let fixture: ComponentFixture<UserProfileWithDepencySpie>;
  let debugElements:DebugElement[];

  let spy_getUserDetails
  let spy_getOnlineFriends

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserProfileWithDepencySpie],
      schemas:[CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => { 

    //Set dummy data
    let dummyUserDetails = {
      first:"Je",
      last:"Doljak",
      roles:["user"],
      friends:[
        "alice", "bert"
      ]
    }

    //Fake spy object that spies on UserService.getOnLineFriends_o() and getUserDetails()
    const userService = jasmine.createSpyObj('UserService', ['getOnlineFriends_o', 'getUserDetails'])

    spy_getOnlineFriends = userService.getOnlineFriends_o.and.returnValue( of(dummyUserDetails.friends) )
    spy_getUserDetails = userService.getUserDetails.and.returnValue( dummyUserDetails )

    TestBed.configureTestingModule({
      declarations: [ UserProfileWithDepencySpie],
      providers:[
        {provider:UserService, useValue:userService}
      ],
    })

    fixture = TestBed.createComponent(UserProfileWithDepencySpie);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should show 2 friends online when initializing',()=>{

  //   fixture.detectChanges()

  //   debugElements = fixture.debugElement.queryAll( By.css('.online') )

  //   expect(debugElements.length).toBe(2)

  //   expect(debugElements[0].nativeElement.innerText).toContain('alice')
  //   expect(debugElements[1].nativeElement.innerText).toContain('bert')

  //   expect(spy_getOnlineFriends.calls.any()).toBe(true, 'getOnlineFriends_o was called')
  //   expect(spy_getUserDetails.calls.any()).toBe(true, 'getUserDetails was called')
  // })
});
