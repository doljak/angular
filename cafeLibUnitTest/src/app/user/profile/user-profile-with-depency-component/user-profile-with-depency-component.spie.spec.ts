import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileWithDepencySpie } from './user-profile-with-depency-component.spie';

describe('UserProfileWithDepencySpie', () => {
  let component: UserProfileWithDepencySpie;
  let fixture: ComponentFixture<UserProfileWithDepencySpie>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserProfileWithDepencySpie ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileWithDepencySpie);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
