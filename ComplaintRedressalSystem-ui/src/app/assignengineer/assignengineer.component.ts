import { Component,Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Ticket } from '../models/Ticket';
import { complaint } from '../models/Complaint';
import { Engineer } from '../models/Engineer';
import { TicketService } from '../services/ticket.service';

@Component({
  selector: 'app-assignengineer',
  templateUrl: './assignengineer.component.html',
  styleUrls: ['./assignengineer.component.css']
})
export class AssignengineerComponent {
  comp:complaint;
  engineers:Engineer[];

constructor(
  @Inject(MAT_DIALOG_DATA) public data:Ticket,
  private ref:MatDialogRef<AssignengineerComponent>,
  private ticketservice:TicketService
){}
ngOnInit(){
  this.ticketservice.getComplaintdataByTicketid(this.data.ticketId).subscribe(x=>{
    this.comp=x;
    this.ticketservice.getEngineerForPin(this.comp.pin.pin).subscribe(x=>{
      this.engineers=x;
    });
  });
}
closedialog(){
  this.ref.close();
}
assignEngineer(eid:string){
  let eng:Engineer={
    userid:Number(eid),
    firstName:"",
      lastName:"",
      username:"",
      password:"",
      email:"",
      roles:"",
      accountStatus:true,
      contactNo:0,
      locations:[],
  }
  this.data.engineer=eng;
  this.ticketservice.assignEngineer(this.data).subscribe(x=>{
    if(x.status==1){
      alert("Engineer Assigned");
      this.closedialog();
    }
  });
}
}
