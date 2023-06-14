import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { user } from '../models/user';
import { Observable } from 'rxjs';
import { status } from '../models/status';
import { Manager } from '../models/Manager';
import { Engineer } from '../models/Engineer';
import { Customer } from '../models/Customer';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl:string='http://localhost:8080/api/user/'
  constructor(private http:HttpClient) { }

  getAllUsers():Observable<user[]>{
    return this.http.get<user[]>(this.baseUrl +'all', {withCredentials:true});
  }

  adduser(usr:user):Observable<status>{
    return this.http.post<status>(this.baseUrl+'adduser',usr);
  }
  deleteuser(usrid:number):Observable<status>{
    let params:HttpParams = new HttpParams().set("userid",usrid)
    return this.http.delete<status>(this.baseUrl+'deleteuser', {params:params});
  }
  addManager(mgr:Manager):Observable<status>{
    return this.http.post<status>(this.baseUrl+'addmanager',mgr,{withCredentials:true});
  }
  addEngineer(egr:Engineer):Observable<status>{
    console.log("Service Method called !!");
    return this.http.post<status>(this.baseUrl+'addengineer',egr,{withCredentials:true});
  }
  addCustomer(cus:Customer){
    return this.http.post<status>(this.baseUrl+'addcustomer',cus,{withCredentials:true});
  }
  getAllManagers():Observable<Manager[]>{
    return this.http.get<Manager[]>(this.baseUrl+'allmanagers',{withCredentials:true});
  }
  getAllEngineers():Observable<Engineer[]>{
    return this.http.get<Engineer[]>(this.baseUrl+'allengineers',{withCredentials:true});
  }
  getAllCustomers():Observable<Customer[]>{
    return this.http.get<Customer[]>(this.baseUrl+'allcustomers');
  }
}
