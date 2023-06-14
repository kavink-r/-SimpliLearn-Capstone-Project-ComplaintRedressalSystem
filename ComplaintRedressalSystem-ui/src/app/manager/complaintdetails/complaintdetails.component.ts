import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { complaint } from 'src/app/models/Complaint';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-complaintdetails',
  templateUrl: './complaintdetails.component.html',
  styleUrls: ['./complaintdetails.component.css']
})
export class ComplaintdetailsComponent {
  complaint:complaint;
constructor(
  @Inject(MAT_DIALOG_DATA) private data:any,
  private ref:MatDialogRef<ComplaintdetailsComponent>,
  private ticketservice:TicketService
  ){console.log('passed data',data)}
ngOnInit(){
  this.ticketservice.getComplaintdataByTicketid(this.data).subscribe(x=>this.complaint=x);
}
closedialog(){
  this.ref.close();
}
}
