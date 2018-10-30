import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestPipeComponent } from './test-pipe.component';
import { AlternatingCasePipe } from '../alternate-casing/alternating-case.pipe';
import {CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';

describe('TestPipeComponent', () => {
  let component: TestPipeComponent;
  let fixture: ComponentFixture<TestPipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestPipeComponent,AlternatingCasePipe ],
      schemas:[CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
