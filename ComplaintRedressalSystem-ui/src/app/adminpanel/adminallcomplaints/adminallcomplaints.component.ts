import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ViewticketComponent } from 'src/app/customer/viewticket/viewticket.component';
import { complaint } from 'src/app/models/Complaint';
import { Ticket } from 'src/app/models/Ticket';
import { ComplaintService } from 'src/app/services/complaint.service';

@Component({
  selector: 'app-adminallcomplaints',
  templateUrl: './adminallcomplaints.component.html',
  styleUrls: ['./adminallcomplaints.component.css']
})
export class AdminallcomplaintsComponent {
  complaints:complaint[];
  constructor(
    private compservice:ComplaintService,
    private dialog:MatDialog
    ){}
  ngOnInit(){
    this.compservice.getAllComplaints().subscribe(x=>this.complaints=x);
   };
  
  
  viewticket(tkt:Ticket){
    this.dialog.open(ViewticketComponent,{width:'30%',data:tkt})
  }
}
