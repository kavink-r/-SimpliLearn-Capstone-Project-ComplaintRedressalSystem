import { Component } from '@angular/core';
import { request } from '../models/loginRequestDto';
import { AuthService } from '../services/auth.service';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginreq:request = new request();
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  constructor(
    private authservice:AuthService,
    private snackbar:MatSnackBar,
    private router: Router
    
    ){}

  signin(){
    this.authservice.login(this.loginreq).subscribe(res=>{
      const rolesString = res.roles.replace(/[\[\]"]+/g, ''); 
      const rolesArray = rolesString.split(',').map((role: string) => role.trim());
      this.authservice.currentUser.authentication=true;
      this.authservice.currentUser.username=res.authentication;
      this.authservice.currentUser.roles=rolesArray;
      this.snackbar.open("Authentication Successful!", "Dismiss",{duration:3000,horizontalPosition:this.horizontalPosition,
      verticalPosition: this.verticalPosition,})
      this.loginreq = new request();
      this.router.navigate(['/']);    
    },
    (err)=>{
      this.snackbar.open("Authentication Failure!", "Dismiss",{duration:3000,horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,})
      this.loginreq = new request();
    }
    );
    
  }

}
