import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { ImageManipulateComponent } from './images/image-manipulate/image-manipulate.component';
import { ImageListComponent } from './images/image-list/image-list.component';

const routes: Routes = [
  { path: 'signup', component: SignupComponent},
  { path: 'login', component: LoginComponent},
  { path: 'imageUpload', component: ImageManipulateComponent},
  { path: 'myImages', component: ImageListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule{}
