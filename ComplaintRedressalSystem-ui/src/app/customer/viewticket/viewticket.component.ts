import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Ticket } from 'src/app/models/Ticket';

@Component({
  selector: 'app-viewticket',
  templateUrl: './viewticket.component.html',
  styleUrls: ['./viewticket.component.css']
})
export class ViewticketComponent {
constructor(
  @Inject(MAT_DIALOG_DATA) public ticket: Ticket,
  private ref:MatDialogRef<ViewticketComponent>
){}
closedialog(){
  this.ref.close();
}
}
