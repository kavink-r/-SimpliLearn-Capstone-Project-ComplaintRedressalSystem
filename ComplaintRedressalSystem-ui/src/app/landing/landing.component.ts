import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { user } from '../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  usr:any= {
    authentication:false,
    username:"guest",
    roles:[]
  };
  constructor(private auth:AuthService,
    private router:Router){}
  ngOnInit(){
    this.usr = this.auth.currentUser;
  if(this.usr.roles.includes("MANAGER")){
    this.router.navigateByUrl('manager');
  }else if(this.usr.roles.includes("CUSTOMER")){
    this.router.navigateByUrl('customer');
  }else if(this.usr.roles.includes("ENGINEER")){
    this.router.navigateByUrl('engineer');
  }else if(this.usr.roles.includes("ADMIN")){
    this.router.navigateByUrl('adminpanel');
  }

  }
}
