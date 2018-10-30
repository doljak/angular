import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileWithDependencyComponent } from './user-profile-with-dependency.component';
import { AlternatingCasePipe } from 'src/app/alternate-casing/alternating-case.pipe';

describe('UserProfileWithDependencyComponent', () => {
  let component: UserProfileWithDependencyComponent;
  let fixture: ComponentFixture<UserProfileWithDependencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserProfileWithDependencyComponent, AlternatingCasePipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileWithDependencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
