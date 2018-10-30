import { HomeComponent } from "./home/home.component";
import { DirectiveComponent } from "./directive/directive.component";
import { TestPipeComponent } from "./test-pipe/test-pipe.component";
import { UserProfileWithDependencyComponent } from "./user/profile/user-profile-with-dependency/user-profile-with-dependency.component";
import { UserProfileWithDepencyComponentComponent } from "./user/profile/user-profile-with-depency-component/user-profile-with-depency-component.component";
import { Routes } from "@angular/router";

export const exRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'exercise-01', component: DirectiveComponent},
    { path: 'exercise-02', component: TestPipeComponent },
    { path: 'exercise-03', component: UserProfileWithDependencyComponent },
    { path: 'exercise-04', component: UserProfileWithDepencyComponentComponent }
  ]