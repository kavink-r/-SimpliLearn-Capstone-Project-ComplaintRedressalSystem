import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing/landing.component';
import { loginGuard } from './gaurds/login.guard';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'',component:LandingComponent,canActivate:[loginGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
