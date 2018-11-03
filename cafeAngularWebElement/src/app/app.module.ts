import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements'
import { VowelPickerComponent } from './vowel-picker/vowel-picker.component';

@NgModule({
  declarations: [
    AppComponent,
    VowelPickerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  //bootstrap: [AppComponent]
  entryComponents:[VowelPickerComponent]
})
export class AppModule { 

  constructor(private injector:Injector){

    const vowelPicker = createCustomElement(VowelPickerComponent, {injector})

    customElements.define("app-vowel-picker", vowelPicker)
  }
}
