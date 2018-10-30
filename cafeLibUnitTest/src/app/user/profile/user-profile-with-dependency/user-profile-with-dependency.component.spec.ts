import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileWithDependencyMock } from './user-profile-with-dependency.component';
import { UserService } from '../../user.service';
import {CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';
import { By } from '@angular/platform-browser';

describe('UserProfileWithDependencyMock', () => {


  const user = {
    first:"Mock",
    last:"User",
    roles:["admin", "subscriber"]
  }

  const MockService = {  
    getUserDetails(): any{
      return user
    }
  };

  let component: UserProfileWithDependencyMock;
  let fixture: ComponentFixture<UserProfileWithDependencyMock>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserProfileWithDependencyMock ],
      providers:[{
        provide: UserService, useValue: MockService
      }],
      schemas:[CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileWithDependencyMock);
    component = fixture.componentInstance;
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should create user after init', ()=>{

    expect(component.user).toBeUndefined()

    component.ngOnInit()

    expect(component.user.first).toContain('Mock')
    expect(component.user.last).toContain('User')

  })

  it('should display the first and last name', ()=>{
    let p = fixture.debugElement.query( By.css('#username'))

    let innerText = p.nativeElement.innerText
    expect(innerText).toBe("")

    fixture.detectChanges()

    innerText = p.nativeElement.innerText
    expect(innerText).toContain(component.user.first)
    expect(innerText).toContain(component.user.last) 

  })
  
});
