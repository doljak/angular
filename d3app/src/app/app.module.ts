import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { D3GraphBarComponent } from './d3-graph-bar/d3-graph-bar.component';
import { D3GraphBarService } from './d3-graph-bar/d3-graph-bar.service';
import { Http, ConnectionBackend, HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    D3GraphBarComponent,
  ],
  imports: [
    HttpModule,
    BrowserModule
  ],
  providers: [
    D3GraphBarService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
