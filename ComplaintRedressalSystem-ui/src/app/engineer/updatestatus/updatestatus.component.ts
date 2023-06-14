import { Component,Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Ticket } from 'src/app/models/Ticket';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-updatestatus',
  templateUrl: './updatestatus.component.html',
  styleUrls: ['./updatestatus.component.css']
})
export class UpdatestatusComponent {
  tempstatus:string="";
  constructor(
    @Inject(MAT_DIALOG_DATA)private  data:Ticket,
    private ref:MatDialogRef<UpdatestatusComponent>,
    private tktservice:TicketService){}

    updatestatus(){
      this.data.status=this.tempstatus;
      this.tktservice.updateStatus(this.data).subscribe(x=>{
        if(x.status==1){
          alert("Status updated!!");
        }
      });
      this.closedialog();
    }
    
    closedialog(){
      this.ref.close();
    }
}
