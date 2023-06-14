import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { TicketService } from '../services/ticket.service';
import { Ticket } from '../models/Ticket';
import { user } from '../models/user';
import { Manager } from '../models/Manager';
import { MatDialog } from '@angular/material/dialog';
import { ComplaintdetailsComponent } from '../manager/complaintdetails/complaintdetails.component';
import { AssignengineerComponent } from '../assignengineer/assignengineer.component';

@Component({
  selector: 'app-manageropentickets',
  templateUrl: './manageropentickets.component.html',
  styleUrls: ['./manageropentickets.component.css']
})
export class ManageropenticketsComponent {
  usr:user;
  tickets:Ticket[];
  constructor(private authservice:AuthService,
              private tktservice:TicketService,
              private dialog:MatDialog){

  }
  ngOnInit(){
    this.authservice.getCurrentUser().subscribe(d=>{
      this.usr=d;
      this.tktservice.getManagerOpenTickets(this.usr.userid).subscribe(x=>this.tickets=x);
    });
    
  }
  complaintdetails(tkt:Ticket){
    this.dialog.open(ComplaintdetailsComponent,{width:'40%',data:tkt.ticketId});
  }
  assignengineer(tkt:Ticket){
    this.dialog.open(AssignengineerComponent,{width:'40%',data:tkt});
  }
}
