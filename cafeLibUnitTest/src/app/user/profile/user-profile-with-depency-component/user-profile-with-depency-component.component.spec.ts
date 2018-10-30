import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileWithDepencyComponentComponent } from './user-profile-with-depency-component.component';

describe('UserProfileWithDepencyComponentComponent', () => {
  let component: UserProfileWithDepencyComponentComponent;
  let fixture: ComponentFixture<UserProfileWithDepencyComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserProfileWithDepencyComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileWithDepencyComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
