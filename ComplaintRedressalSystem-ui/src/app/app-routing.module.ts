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
import { AllusersComponent } from './adminpanel/allusers/allusers.component';
import { CreatecomplaintComponent } from './customer/createcomplaint/createcomplaint.component';
import { AllcomplaintComponent } from './customer/allcomplaint/allcomplaint.component';
import { AdminallcomplaintsComponent } from './adminpanel/adminallcomplaints/adminallcomplaints.component';
import { AdminallticketsComponent } from './adminpanel/adminalltickets/adminalltickets.component';
import { PincodedetailsComponent } from './adminpanel/pincodedetails/pincodedetails.component';
import { AllticketsComponent } from './engineer/alltickets/alltickets.component';
import { OpenticketsComponent } from './engineer/opentickets/opentickets.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'',component:LandingComponent,canActivate:[loginGuard],children:[
    {path:'manager',component:ManagerComponent,children:[
    {path:'managerall', component:ManagerallticketsComponent},
    {path:'manageropen', component:ManageropenticketsComponent}
  ]},
  {path:'customer',component:CustomerComponent,children:[
     {path:'allcomplaints',component:AllcomplaintComponent},
     {path:'**',redirectTo:'allcomplaints',pathMatch:'full'}
  ]},
  {path:'engineer',component:EngineerComponent,children:[
    {path:'alltickets',component:AllticketsComponent},
    {path:'opentickets',component:OpenticketsComponent}
  ]},
  {path:'adminpanel', component:AdminpanelComponent,children:[
    {path:'viewall', component:AllusersComponent},
    {path:'allcomplaints',component:AdminallcomplaintsComponent},
    {path:'alltickets',component:AdminallticketsComponent},
    {path:'pincodedetails',component:PincodedetailsComponent}
  ]}
  ]},
  {path:'**',redirectTo:'',pathMatch:'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
