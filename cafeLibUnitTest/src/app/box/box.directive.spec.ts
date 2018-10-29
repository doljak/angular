import { BoxDirective, DEFAULT_BD_COLOR, DEFAULT_BG_COLOR } from './box.directive';
import { Component } from '@angular/core'
import { TestBed, inject, async, ComponentFixture } from '@angular/core/testing'
import { DebugElement } from '@angular/core'
import { By } from '@angular/platform-browser'
import { debug } from 'util'

@Component({
  template:`
  <p id="box0" >Hi my name is Andy</p>

  <p id="box1" box >Hi my name is Andy</p>

  <p id="box2" box bd-color="brown" bg-color="lightblue">Hi my name is Andy</p>

  <p id="box3" box bd-color="brown" >Hi my name is Andy</p>

  <p id="box4" box bg-color="lightblue">Hi my name is Andy</p>
  `
})
class BoxTestComponent{}

describe('Box attribute test component', ()=>{

  let fixture:ComponentFixture<BoxTestComponent>
  let debugElements:DebugElement[]

  beforeEach(()=>{
    TestBed.configureTestingModule({
      declarations:[BoxDirective, BoxTestComponent]
    })

    //Create Component
    fixture = TestBed.createComponent(BoxTestComponent);

    //Trigger initial binding
    fixture.detectChanges();

    //Select all elements using binding
    debugElements = fixture.debugElement.queryAll( By.directive(BoxDirective) )

  })

  it('should have 4 elements using box',()=>{
    expect(debugElements.length).toBe(4)
  })

  it('box1 should have default background and border',()=>{
    const box = fixture.debugElement.query( By.css('#box1'))

    const borderColor = box.nativeElement.style.borderColor
    const bgColor = box.nativeElement.style.backgroundColor

    expect(borderColor).toBe(DEFAULT_BD_COLOR)
    expect(bgColor).toBe(DEFAULT_BG_COLOR)
  })

  it('box2 should have border color brown and background lightblue', ()=>{
    const box = fixture.debugElement.query( By.css("#box2"))

    const borderColor = box.nativeElement.style.borderColor
    const backgroundColor = box.nativeElement.style.backgroundColor

    expect(borderColor).toBe('brown')
    expect(backgroundColor).toBe('lightblue')

  })

  it('box3 should have border color brown and background color default', ()=>{
    const box = fixture.debugElement.query( By.css('#box3'))

    const borderColor = box.nativeElement.style.borderColor
    const backgroundColor = box.nativeElement.style.backgroundColor

    expect(borderColor).toBe('brown')
    expect(backgroundColor).toBe(DEFAULT_BG_COLOR)
  })

  it('box4 should have border color default and background lightblue',()=>{
    const box = fixture.debugElement.query(By.css('#box4'))

    const borderColor = box.nativeElement.style.borderColor
    const backgroundColor = box.nativeElement.style.backgroundColor
    
    expect(borderColor).toBe(DEFAULT_BD_COLOR)
    expect(backgroundColor).toBe('lightblue')
  })
  
})