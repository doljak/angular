import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileWithDependencyComponent } from './user-profile-with-dependency.component';
import { UserService } from '../../user.service';
import {CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';

describe('UserProfileWithDependencyComponent', () => {


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

  let component: UserProfileWithDependencyComponent;
  let fixture: ComponentFixture<UserProfileWithDependencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserProfileWithDependencyComponent ],
      providers:[{
        provide: UserService, useValue: MockService
      }],
      schemas:[CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileWithDependencyComponent);
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
  
});
