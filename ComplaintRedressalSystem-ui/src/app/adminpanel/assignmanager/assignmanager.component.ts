import { Component ,Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { complaint } from 'src/app/models/Complaint';
import { Manager } from 'src/app/models/Manager';
import { Ticket } from 'src/app/models/Ticket';
import { user } from 'src/app/models/user';
import { ComplaintService } from 'src/app/services/complaint.service';
import { TicketService } from 'src/app/services/ticket.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-assignmanager',
  templateUrl: './assignmanager.component.html',
  styleUrls: ['./assignmanager.component.css']
})
export class AssignmanagerComponent {
managers:Manager[];
comp:complaint;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data:Ticket,
    private ref:MatDialogRef<AssignmanagerComponent>,
    private userservice:UserService,
    private tktservice:TicketService
  ){}
ngOnInit(){
  console.log(this.data);
  this.userservice.getAllManagers().subscribe(x=>this.managers=x);
  this.tktservice.getComplaintdataByTicketid(this.data.ticketId).subscribe(x=>this.comp=x);
}
  closedialog(){
    this.ref.close();
  }

  assignmanager(managerId:any){
    let mgr:Manager = {
      userid:Number(managerId),
      firstName:"",
      lastName:"",
      username:"",
      password:"",
      email:"",
      roles:"",
      accountStatus:true,
      contactNo:0,
      pin:{
        pin:0
      }
    }
    this.data.manager=mgr;
    this.tktservice.assignmanager(this.data).subscribe(x=>{
      if(x.status==1){
        alert("Manager Assigned");
        this.ref.close();
       }
  });
  }
}
