import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CookieService } from 'ngx-cookie-service';
import { LandingComponent } from './landing/landing.component';
import { CustomerComponent } from './customer/customer.component';
import { ManagerComponent } from './manager/manager.component';
import { EngineerComponent } from './engineer/engineer.component';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { ManagerallticketsComponent } from './manageralltickets/manageralltickets.component';
import { ManageropenticketsComponent } from './manageropentickets/manageropentickets.component';
import { AllusersComponent } from './adminpanel/allusers/allusers.component';
import { AdduserComponent } from './adminpanel/adduser/adduser.component';
import {MatDialogModule}from '@angular/material/dialog';
import {MatRadioModule} from '@angular/material/radio';
import { CreatecomplaintComponent } from './customer/createcomplaint/createcomplaint.component';
import { AllcomplaintComponent } from './customer/allcomplaint/allcomplaint.component';
import { ViewticketComponent } from './customer/viewticket/viewticket.component';
import { ComplaintidComponent } from './customer/complaintid/complaintid.component';
import { ComplaintdetailsComponent } from './manager/complaintdetails/complaintdetails.component';
import { AdminallcomplaintsComponent } from './adminpanel/adminallcomplaints/adminallcomplaints.component';
import { AdminallticketsComponent } from './adminpanel/adminalltickets/adminalltickets.component';
import { AssignmanagerComponent } from './adminpanel/assignmanager/assignmanager.component';
import { AssignengineerComponent } from './assignengineer/assignengineer.component';
import { PincodedetailsComponent } from './adminpanel/pincodedetails/pincodedetails.component';
import { AddpinComponent } from './adminpanel/addpin/addpin.component';
import { AllticketsComponent } from './engineer/alltickets/alltickets.component';
import { OpenticketsComponent } from './engineer/opentickets/opentickets.component';
import { UpdatestatusComponent } from './engineer/updatestatus/updatestatus.component';
import { FeedbackComponent } from './customer/feedback/feedback.component';
import { TicketraiseComponent } from './customer/ticketraise/ticketraise.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    LandingComponent,
    CustomerComponent,
    ManagerComponent,
    EngineerComponent,
    AdminpanelComponent,
    ManagerallticketsComponent,
    ManageropenticketsComponent,
    AllusersComponent,
    AdduserComponent,
    CreatecomplaintComponent,
    AllcomplaintComponent,
    ViewticketComponent,
    ComplaintidComponent,
    ComplaintdetailsComponent,
    AdminallcomplaintsComponent,
    AdminallticketsComponent,
    AssignmanagerComponent,
    AssignengineerComponent,
    PincodedetailsComponent,
    AddpinComponent,
    AllticketsComponent,
    OpenticketsComponent,
    UpdatestatusComponent,
    FeedbackComponent,
    TicketraiseComponent
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatRadioModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
