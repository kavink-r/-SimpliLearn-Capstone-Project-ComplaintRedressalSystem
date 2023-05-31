import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  currentUser:{
    authentication:boolean,
    username:string,
    roles:string[]
  }= {
    authentication:false,
    username:"guest",
    roles:[]
  };
constructor(
  private authservice:AuthService,
  private router:Router){

}
ngOnInit(){
  if(this.authservice.currentUser.username!='guest'){
    this.currentUser = this.authservice.currentUser;
    
  }
}
logout(){
this.authservice.logout();
this.currentUser = this.authservice.currentUser;
this.router.navigateByUrl("/");
}
}
