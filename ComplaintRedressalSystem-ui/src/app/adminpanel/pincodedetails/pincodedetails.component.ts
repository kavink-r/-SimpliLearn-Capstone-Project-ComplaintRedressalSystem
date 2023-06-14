import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Engineer } from 'src/app/models/Engineer';
import { Manager } from 'src/app/models/Manager';
import { pin } from 'src/app/models/pin';
import { ComplaintService } from 'src/app/services/complaint.service';
import { TicketService } from 'src/app/services/ticket.service';
import { UserService } from 'src/app/services/user.service';
import { AddpinComponent } from '../addpin/addpin.component';


@Component({
  selector: 'app-pincodedetails',
  templateUrl: './pincodedetails.component.html',
  styleUrls: ['./pincodedetails.component.css']
})
export class PincodedetailsComponent {
pins:pin[];
engineers:Engineer[];
managers:Manager[];

constructor(
  private userservice:UserService,
  private ticketservice:TicketService,
  private compservice:ComplaintService,
  private dialog:MatDialog
){}

ngOnInit(){
  this.userservice.getAllEngineers().subscribe(x=>this.engineers=x);
  this.userservice.getAllManagers().subscribe(x=>this.managers=x);
  this.compservice.getAllPin().subscribe(x=>this.pins=x);
}
addpin(){
  this.dialog.open(AddpinComponent,{width:'40%',height:'40%'})
}
}
