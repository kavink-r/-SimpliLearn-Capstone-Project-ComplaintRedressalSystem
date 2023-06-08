import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing/landing.component';
import { loginGuard } from './gaurds/login.guard';
import { ManagerallticketsComponent } from './manageralltickets/manageralltickets.component';
import { ManageropenticketsComponent } from './manageropentickets/manageropentickets.component';
import { ManagerComponent } from './manager/manager.component';
import { CustomerComponent } from './customer/customer.component';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { EngineerComponent } from './engineer/engineer.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'',component:LandingComponent,canActivate:[loginGuard],children:[
    {path:'manager',component:ManagerComponent,children:[
    {path:'managerall', component:ManagerallticketsComponent},
    {path:'manageropen', component:ManageropenticketsComponent}
  ]},
  {path:'customer',component:CustomerComponent},
  {path:'engineer',component:EngineerComponent},
  {path:'adminpanel', component:AdminpanelComponent}
  ]},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
