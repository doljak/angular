import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { D3GraphBarComponent } from './d3-graph-bar.component';

describe('D3GraphBarComponent', () => {
  let component: D3GraphBarComponent;
  let fixture: ComponentFixture<D3GraphBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D3GraphBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D3GraphBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
