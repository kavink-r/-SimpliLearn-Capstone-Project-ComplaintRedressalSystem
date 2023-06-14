import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { pin } from 'src/app/models/pin';
import { ComplaintService } from 'src/app/services/complaint.service';

@Component({
  selector: 'app-addpin',
  templateUrl: './addpin.component.html',
  styleUrls: ['./addpin.component.css']
})
export class AddpinComponent {
  pin:pin={
    pin:0
  };
  constructor(
    private ref:MatDialogRef<AddpinComponent>,
    private compservice:ComplaintService
  ){}
    closedialog(){
      this.ref.close();
    }
  addpin(){
    this.compservice.addPin(this.pin).subscribe(x=>{
      if(x.status==1){
        alert("Pincode added successfully");
        this.ref.close();
      }
    })
  }
}
