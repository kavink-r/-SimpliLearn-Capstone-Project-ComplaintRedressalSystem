import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { request } from '../models/loginRequestDto';
import { Observable } from 'rxjs';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { user } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl:string = "http://localhost:8080/" 
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  currentUser:{
    authentication:boolean,
    username:string,
    roles:string[]
  } = {
    authentication:false,
    username:"guest",
    roles:[]
  }

  constructor(private http:HttpClient,
    private snackbar:MatSnackBar,) { }

  login(req:request):Observable<any>{
    const body = new FormData();
    body.append('username', req.username);
    body.append('password', req.password);
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    return this.http.post(this.baseUrl+"auth",body,{headers,withCredentials: true});
  }

  logout():Observable<any>{
    this.currentUser = {
      authentication:false,
    username:"guest",
    roles:[]
    }
    this.snackbar.open("Logged Out!", "Dismiss",{duration:3000,horizontalPosition:this.horizontalPosition,
      verticalPosition: this.verticalPosition,})
    return this.http.get(this.baseUrl+"logout");
  }

  hasRole(role: string): boolean {
    return this.currentUser.roles.includes(role);
  }

  hasAnyRole(roles: string[]): boolean {
    return this.currentUser.roles.some(r => roles.includes(r));
  }
  isLoggedIn():boolean{
    return this.currentUser.authentication;
  }
  getCurrentUser():Observable<user>{
    return this.http.get<user>("http://localhost:8080/api/ticket/"+'getcurrentuser',{withCredentials:true});
  }
}
