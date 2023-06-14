import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdduserComponent } from '../adduser/adduser.component';
import { user } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.css']
})
export class AllusersComponent {
  usrs:user[];
  constructor(private dialog:MatDialog, private usrService:UserService){

  }
  ngOnInit(){
    this.usrService.getAllUsers().subscribe(x=>this.usrs=x);
  }
  adduser(){
    this.dialog.open(AdduserComponent,{width:'80%',height:'75%'})
  }
}
