import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LibCalcModule } from 'lib-calc';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LibCalcModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
