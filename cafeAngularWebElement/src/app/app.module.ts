import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
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
  bootstrap: [AppComponent]
})
export class AppModule { }
