import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalexerciseComponent } from './finalexercise.component';
import{ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ExpectedConditions } from 'protractor';

describe('FinalexerciseComponent', () => {
  let component: FinalexerciseComponent;
  let fixture: ComponentFixture<FinalexerciseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalexerciseComponent ],
      schemas:[CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
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

  //tiggers data binding and asserts that 'test' is 'hello' initially 
  it('should test initially as hello',()=>{
    const p= fixture.debugElement.query( By.css('#final-test') )
    const initialText = p.nativeElement.innerText

    expect(initialText).toContain(component.test)

  })

  //invokes mymethod
  it('should change value of test to world',()=>{
    component.ngOnInit()

    fixture.detectChanges()

    const p = fixture.debugElement.query( By.css( "#final-test" ) )
    const innerText = p.nativeElement.innerText

    expect(innerText).toContain('world')
  })
  
});
