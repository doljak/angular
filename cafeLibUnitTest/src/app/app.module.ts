import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserProfileComponent } from './user/profile/user-profile/user-profile/user-profile.component';
import { BoxDirective } from './box/box.directive';

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    BoxDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
