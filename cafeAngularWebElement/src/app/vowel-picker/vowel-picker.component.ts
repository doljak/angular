import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-vowel-picker',
  template: `
    <h1>Pick a vowel</h1>

    <div *ngFor="let letter of letters" class="vowelPickerCard" (click)="selected(letter)" >
      <p [ngStyle]="{'color':letterColor}" > {{ letter }}</p>
    </div>
  `,
  styles: [`
    .vowelPickerCard{
      width: 100px;
      height: 100px;
      background-color: slategray;
      color: white;
      text-align: center;
      display: inline-block;
      margin-right: 20px;
  }

  .vowelPickerCard p{
      font-size: 2em;
  }`]
})
export class VowelPickerComponent implements OnInit {

  public letters = VOWELS

  constructor() { }

  @Input() letterColor:string
  @Output() letterSelected:EventEmitter<string> = new EventEmitter<string>()

  ngOnInit() 
  {
    if(this.letterColor)
    {
      console.log(`custom letter color detected: ${ this.letterColor }`)
    }
  }

  selected(letter)
  {
    console.log(`Letter Selected: ${letter}`)
    this.letterSelected.emit(letter)
  }

} 
const VOWELS = ['A', 'E', 'I', 'O', 'U']
