import { Component,Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { complaint } from 'src/app/models/Complaint';
import { Ticket } from 'src/app/models/Ticket';
import { ComplaintService } from 'src/app/services/complaint.service';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {
  feedback:string="";
  constructor(
    @Inject(MAT_DIALOG_DATA) private data:complaint,
    private ref:MatDialogRef<FeedbackComponent>,
    private compservice:ComplaintService){}

  closedialog(){
    this.ref.close();
  }
  givefeedback(){
    this.data.feedback=this.feedback;
    this.compservice.postFeedback(this.data).subscribe(x=>{
      if(x.status==1){
        alert("Feedback successfully posted!!");
      }
    });
    this.closedialog();
  }
}
