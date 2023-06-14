import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ComplaintdetailsComponent } from 'src/app/manager/complaintdetails/complaintdetails.component';
import { Ticket } from 'src/app/models/Ticket';
import { TicketService } from 'src/app/services/ticket.service';
import { AssignmanagerComponent } from '../assignmanager/assignmanager.component';
import { AssignengineerComponent } from 'src/app/assignengineer/assignengineer.component';

@Component({
  selector: 'app-adminalltickets',
  templateUrl: './adminalltickets.component.html',
  styleUrls: ['./adminalltickets.component.css']
})
export class AdminallticketsComponent {
  tickets:Ticket[];
  constructor(
    private tktService:TicketService,
    private dialog:MatDialog
    ){
   
  }
  ngOnInit(){
    this.tktService.getAllTickets().subscribe(x=>{this.tickets=x;});
    
  }
  complaintdetails(tkt:Ticket){
    this.dialog.open(ComplaintdetailsComponent,{width:'40%',data:tkt.ticketId});
  }
  assignmanager(tkt:Ticket){
    this.dialog.open(AssignmanagerComponent,{width:'40%',data:tkt});
  }
  assignengineer(tkt:Ticket){
    this.dialog.open(AssignengineerComponent,{width:'40%',data:tkt});
  }
}
