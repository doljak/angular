import { HomeComponent } from "./home/home.component";
import { DirectiveComponent } from "./directive/directive.component";
import { TestPipeComponent } from "./test-pipe/test-pipe.component";
import { UserProfileWithDependencyMock } from "./user/profile/user-profile-with-dependency/user-profile-with-dependency.component";
import { UserProfileWithDepencySpie } from "./user/profile/user-profile-with-depency-component/user-profile-with-depency-component.spie";
import { Routes } from "@angular/router";

export const exRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'exercise-01', component: DirectiveComponent},
    { path: 'exercise-02', component: TestPipeComponent },
    { path: 'exercise-03', component: UserProfileWithDependencyMock },
    { path: 'exercise-04', component: UserProfileWithDepencySpie }
  ]