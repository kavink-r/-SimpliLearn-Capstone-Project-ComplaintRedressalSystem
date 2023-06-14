import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { complaint } from 'src/app/models/Complaint';
import { Customer } from 'src/app/models/Customer';
import { Ticket } from 'src/app/models/Ticket';
import { AuthService } from 'src/app/services/auth.service';
import { ComplaintService } from 'src/app/services/complaint.service';
import { ViewticketComponent } from '../viewticket/viewticket.component';
import { FeedbackComponent } from '../feedback/feedback.component';
import { TicketraiseComponent } from '../ticketraise/ticketraise.component';

@Component({
  selector: 'app-allcomplaint',
  templateUrl: './allcomplaint.component.html',
  styleUrls: ['./allcomplaint.component.css']
})
export class AllcomplaintComponent {
  complaints: complaint[];
  constructor(
    private compservice: ComplaintService,
    private authservice: AuthService,
    private dialog: MatDialog
  ) { }
  ngOnInit() {
    if (this.authservice.currentUser.roles.includes('CUSTOMER')) {
      this.authservice.getCurrentUser().subscribe(x => {
        this.compservice.getCustomerComplaints(x.userid).subscribe(x => { this.complaints = x; console.log(x) });
      });
    } else {
      alert("Bad Request!")
    }
  }
  viewticket(tkt: Ticket) {
    this.dialog.open(ViewticketComponent, { width: '30%', data: tkt })
  }
  givefeedback(c: complaint) {
    this.dialog.open(FeedbackComponent, { data: c });
  }

  checkTicketClosed(c: complaint): boolean {


    let a = c.ticket.filter(x => {

      if (x.status == "CLOSED" || x.status == "ESCALATED") {

        return true;
      } else {

        return false;
      }
    });

    if (a.length > 0) {

      return true;
    } else {

      return false;
    }
  }
  raiseticket(c: complaint) {
    this.compservice.ticketReRaise(c).subscribe(x => {
      if (x.status == 1) {
        this.dialog.open(TicketraiseComponent, { data: x });
      } else {
        alert("Server error!")
      }
    });
  }
}
