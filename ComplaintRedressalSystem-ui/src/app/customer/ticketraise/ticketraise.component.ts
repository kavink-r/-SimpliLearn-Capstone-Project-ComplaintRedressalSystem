import { Component,Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-ticketraise',
  templateUrl: './ticketraise.component.html',
  styleUrls: ['./ticketraise.component.css']
})
export class TicketraiseComponent {
constructor(@Inject(MAT_DIALOG_DATA) public data:any){}
}
