import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ComplaintdetailsComponent } from 'src/app/manager/complaintdetails/complaintdetails.component';
import { Ticket } from 'src/app/models/Ticket';
import { AuthService } from 'src/app/services/auth.service';
import { TicketService } from 'src/app/services/ticket.service';
import { UpdatestatusComponent } from '../updatestatus/updatestatus.component';

@Component({
  selector: 'app-opentickets',
  templateUrl: './opentickets.component.html',
  styleUrls: ['./opentickets.component.css']
})
export class OpenticketsComponent {
  tickets:Ticket[]
  constructor(
    private tktservice:TicketService,
    private authservice:AuthService,
    private dialog:MatDialog
  ){}
  ngOnInit(){
    this.authservice.getCurrentUser().subscribe(x=>{
      this.tktservice.getEngineerOpenTickets(x.userid).subscribe(x=>{
        this.tickets=x;
      })
    });
    
  }
  complaintdetails(tkt:Ticket){
    this.dialog.open(ComplaintdetailsComponent,{width:'40%',data:tkt.ticketId});
  }
  updatestatus(tkt:Ticket){
    this.dialog.open(UpdatestatusComponent,{width:'20%',data:tkt});
  }
}
