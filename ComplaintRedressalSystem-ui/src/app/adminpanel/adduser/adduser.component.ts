import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Customer } from 'src/app/models/Customer';
import { Engineer } from 'src/app/models/Engineer';
import { Manager } from 'src/app/models/Manager';
import { pin } from 'src/app/models/pin';
import { user } from 'src/app/models/user';
import { ComplaintService } from 'src/app/services/complaint.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent {
  usertype:string;
  usertypes:string[] = ["CUSTOMER","MANAGER","ENGINEER"];
  pins:pin[];
  usr:user={userid:0,firstName:"",lastName:"",username:"",password:"", roles:"", email:"", accountStatus:true };
  engr:Engineer = new Engineer(this.usr);
  mngr:Manager = new Manager(this.usr);
  cus:Customer =new Customer (this.usr);
  temppin:number;
  pass:string="";
  repass:string=""
  constructor(
      private ref:MatDialogRef<AdduserComponent>,
      private compservice:ComplaintService,
      private usrservice:UserService,
      private router:Router
      ){

  }
  ngOnInit(){
    this.compservice.getAllPin().subscribe(x=>this.pins=x);
    this.engr.locations=[];
  }
  closeDialog(){
    this.ref.close();
  }
  addpintoengineer(p:number){
    this.engr.locations.push(new pin(p));
    this.temppin=0;
  }
  adduser(type:string){
    if(type=="CUSTOMER"){
      let c:Customer = new Customer(this.usr);
      c.address=this.cus.address;
      c.pin=this.cus.pin;
      c.contactNo=this.cus.contactNo;
      if(this.pass==this.repass){
        c.password=this.pass;
        c.roles="CUSTOMER";
        this.usrservice.addCustomer(c).subscribe(x=>{
          if(x.status==1){
            alert("Customer added Successfully!");
            this.closeDialog();
            this.router.navigateByUrl("adminpanel/viewall")
          }
        });
      }else{
        alert("Password does not match!");
        this.pass="";
        this.repass="";
      }
      this.reset();
    }else if(type=="MANAGER"){
     let m:Manager = new Manager(this.usr);
     m.pin=this.mngr.pin;
     m.contactNo=this.mngr.contactNo;
     if(this.pass==this.repass){
      m.password=this.pass;
      m.roles="MANAGER";
      this.usrservice.addManager(m).subscribe(x=>{
        if(x.status==1){
          alert("Manager added Successfully!!");
          this.closeDialog();
          this.router.navigateByUrl("adminpanel/viewall")
        }
      });
     }else{
      alert("Password does not match!")
      this.pass="";
      this.repass="";
     }
     this.reset();
    }else if(type=="ENGINEER"){
      let  e:Engineer = new Engineer(this.usr);
      e.locations=this.engr.locations;
      e.contactNo=this.engr.contactNo;
      if(this.pass==this.repass){
        e.password=this.pass;
        e.roles="ENGINEER";
        this.usrservice.addEngineer(e).subscribe(x=>{
          
          if(x.status==1){
            alert("Engineer added Successfully!!");
            this.closeDialog();
            this.router.navigateByUrl("adminpanel/viewall")
          }
        });
      }else{
        alert("Password does not match!");
        this.pass='';
        this.repass='';
      }
      this.reset();
    }
  }

  reset(){
    this.usr={userid:0,firstName:"",lastName:"",username:"",password:"", roles:"", email:"", accountStatus:true };
    this.engr=new Engineer(this.usr);
    this.engr.locations=[];
    this.mngr= new Manager(this.usr);
    this.cus=new Customer (this.usr);
    this.pass="";
    this.repass="";
    this.temppin=0;
  }
}
