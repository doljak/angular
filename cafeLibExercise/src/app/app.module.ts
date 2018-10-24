import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyCalcModule } from 'my-first-project';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MyCalcModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
