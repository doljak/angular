import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserProfileComponent } from './user/profile/user-profile/user-profile/user-profile.component';
import { BoxDirective } from './box/box.directive';

import { Routes, RouterModule } from '@angular/router';
import { AlternatingCasePipe } from './alternate-casing/alternating-case.pipe';
import { UserProfileWithDependencyComponent } from './user/profile/user-profile-with-dependency/user-profile-with-dependency.component';
import { UserProfileWithDepencyComponentComponent } from './user/profile/user-profile-with-depency-component/user-profile-with-depency-component.component'


const routes: Routes = [
  // { path: '', component: HomeComponent },
  // { path: 'path2', component: Name2Component },
  // { path: 'path3', component: Name3Component },
  // { path: 'path4', component: Name4Component },
  // { path: '**', component: PageNotFoundComponent },

  //{ path: 'path/:routeParam', component: MyComponent },
  //{ path: 'staticPath', component: ... },
  //{ path: '**', component: ... },
  //{ path: 'oldPath', redirectTo: '/staticPath' },
  //{ path: ..., component: ..., data: { message: 'Custom' }
];

export class FeatureRoutingModule {}


@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    BoxDirective,
    AlternatingCasePipe,
    UserProfileWithDependencyComponent,
    UserProfileWithDepencyComponentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
