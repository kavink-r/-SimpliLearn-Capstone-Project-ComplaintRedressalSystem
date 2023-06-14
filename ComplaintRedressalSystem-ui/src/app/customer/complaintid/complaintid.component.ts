import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-complaintid',
  templateUrl: './complaintid.component.html',
  styleUrls: ['./complaintid.component.css']
})
export class ComplaintidComponent {
constructor( 
  @Inject(MAT_DIALOG_DATA) public data: any,
  private ref:MatDialogRef<ComplaintidComponent>
  ){}

  closedialog(){
    this.ref.close();
  }
}
