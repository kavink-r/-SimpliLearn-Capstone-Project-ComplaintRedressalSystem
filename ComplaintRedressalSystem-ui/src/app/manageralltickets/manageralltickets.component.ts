import { Component } from '@angular/core';
import { Ticket } from '../models/Ticket';
import { TicketService } from '../services/ticket.service';

@Component({
  selector: 'app-manageralltickets',
  templateUrl: './manageralltickets.component.html',
  styleUrls: ['./manageralltickets.component.css']
})
export class ManagerallticketsComponent {
  tickets:Ticket[];
  constructor(private tktService:TicketService){
   
  }
  ngOnInit(){
    this.tktService.getAllTickets().subscribe(x=>{this.tickets=x;console.log(this.tickets);});
    
  }
}
