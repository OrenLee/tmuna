import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import { ImageComponent } from './image/image.component';

const routes: Routes = [
  { path: 'signup', component: SignupComponent},
  { path: 'imageUpload', component: ImageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule{}
