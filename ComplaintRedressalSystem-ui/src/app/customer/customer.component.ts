import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreatecomplaintComponent } from './createcomplaint/createcomplaint.component';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {

  constructor(
    private dialog:MatDialog,
  ){}
  createcomplaint(){
    this.dialog.open(CreatecomplaintComponent,{width:'70%'});
  }
}
