import { Component } from '@angular/core';
import { Ticket } from '../models/Ticket';
import { TicketService } from '../services/ticket.service';
import { MatDialog } from '@angular/material/dialog';
import { ComplaintdetailsComponent } from '../manager/complaintdetails/complaintdetails.component';

@Component({
  selector: 'app-manageralltickets',
  templateUrl: './manageralltickets.component.html',
  styleUrls: ['./manageralltickets.component.css']
})
export class ManagerallticketsComponent {
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
}
