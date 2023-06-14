import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ComplaintdetailsComponent } from 'src/app/manager/complaintdetails/complaintdetails.component';
import { Engineer } from 'src/app/models/Engineer';
import { Ticket } from 'src/app/models/Ticket';
import { AuthService } from 'src/app/services/auth.service';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-alltickets',
  templateUrl: './alltickets.component.html',
  styleUrls: ['./alltickets.component.css']
})
export class AllticketsComponent {
tickets:Ticket[]
constructor(
  private tktservice:TicketService,
  private authservice:AuthService,
  private dialog:MatDialog
){}
ngOnInit(){
  this.authservice.getCurrentUser().subscribe(x=>{
    this.tktservice.getAllEngineerTickets(x.userid).subscribe(x=>{
      this.tickets=x;
    })
  });
  
}
complaintdetails(tkt:Ticket){
  this.dialog.open(ComplaintdetailsComponent,{width:'40%',data:tkt.ticketId});
}
}
