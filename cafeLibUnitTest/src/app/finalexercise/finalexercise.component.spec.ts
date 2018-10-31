import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalexerciseComponent } from './finalexercise.component';

describe('FinalexerciseComponent', () => {
  let component: FinalexerciseComponent;
  let fixture: ComponentFixture<FinalexerciseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalexerciseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalexerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
