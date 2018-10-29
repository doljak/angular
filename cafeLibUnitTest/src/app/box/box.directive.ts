import { Directive, Input, ElementRef, OnInit } from '@angular/core';
import { baseDirectiveCreate } from '@angular/core/src/render3/instructions';

export const DEFAULT_BD_COLOR = "red"
export const DEFAULT_BG_COLOR = "green"

@Directive({
  selector: '[box]'
})
export class BoxDirective implements OnInit {

  public defaultBgColor:string = DEFAULT_BG_COLOR
  public defaultBorderColor:string = DEFAULT_BD_COLOR

  @Input("bg-color")bgColor:string
  @Input("bd-color")bdColor:string

  constructor(private el:ElementRef) { }

  ngOnInit(){
    this.el.nativeElement.style.backgroundColor = this.bgColor || this.defaultBgColor
    this.el.nativeElement.style.border = `2px solid ${this.bdColor || this.defaultBorderColor}`
  }

}
