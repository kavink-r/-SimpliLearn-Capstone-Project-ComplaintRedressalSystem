import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { complaint } from 'src/app/models/Complaint';
import { Customer } from 'src/app/models/Customer';
import { pin } from 'src/app/models/pin';
import { AuthService } from 'src/app/services/auth.service';
import { ComplaintService } from 'src/app/services/complaint.service';
import { ComplaintidComponent } from '../complaintid/complaintid.component';

@Component({
  selector: 'app-createcomplaint',
  templateUrl: './createcomplaint.component.html',
  styleUrls: ['./createcomplaint.component.css']
})
export class CreatecomplaintComponent {
  complaint:complaint = new complaint();
  subjects:string[]= ["Cannot make a call but receive a call" , "Can make calls, but cannot receive calls","Cannot make or receive calls"];
  pins:pin[];
  cus:Customer;
  constructor(
    private ref:MatDialogRef<CreatecomplaintComponent>,
    private compservice:ComplaintService,
    private authservice:AuthService,
    private dialog:MatDialog
    ){}
  ngOnInit(){
    this.compservice.getAllPin().subscribe(x=>this.pins=x);
    this.authservice.getCurrentUser().subscribe(x=>{this.cus=new Customer(x)});
    this.complaint.pin=new pin(0);
  }
  closedialog(){
    this.ref.close();
  }

  createcomplaint(){
    if(this.cus){
      this.complaint.customer=this.cus;
      this.compservice.raiseComplaint(this.complaint).subscribe(x=>{
        if(x.status==1){
          this.dialog.open(ComplaintidComponent,{data:x});
        }
      });
      this.ref.close();
    }
  }
}
