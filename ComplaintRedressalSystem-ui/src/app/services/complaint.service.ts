import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { complaint } from '../models/Complaint';
import { Observable } from 'rxjs';
import { status } from '../models/status';
import { pin } from '../models/pin';
import { Manager } from '../models/Manager';

@Injectable({
  providedIn: 'root'
})
export class ComplaintService {
  baseUrl:string = 'http://localhost:8080/api/complaint/'
  constructor(private http:HttpClient) { }
  raiseComplaint(cmp:complaint):Observable<any>{
    return this.http.post<any>(this.baseUrl+'raise',cmp,{withCredentials:true});
  }
  getAllComplaints():Observable<complaint[]>{
    return this.http.get<complaint[]>(this.baseUrl+'all',{withCredentials:true});
  }
  getCustomerComplaints(custId:number):Observable<complaint[]>{
    let params:HttpParams = new HttpParams().set("cid",custId);
    return this.http.get<complaint[]>(this.baseUrl+'cuscomplaints',{params:params,withCredentials:true});
  }
  ticketReRaise(cmp:complaint):Observable<any>{
    return this.http.post<any>(this.baseUrl+'ticketreraise',cmp,{withCredentials:true});
  }
  postFeedback(cmp:complaint):Observable<status>{
    return this.http.post<status>(this.baseUrl+'addfeedback',cmp,{withCredentials:true});
  }
  getAllPin():Observable<pin[]>{
    return this.http.get<pin[]>(this.baseUrl+"allpin",{withCredentials:true});
  }
  addPin(p:pin):Observable<status>{
    return this.http.post<status>(this.baseUrl+"addpin",p,{withCredentials:true});
  }
  getManagerForPin(pin:number):Observable<Manager>{
    let params = new HttpParams().set("pin",pin);
    return this.http.get<Manager>(this.baseUrl+'managerforpin',{params:params,withCredentials:true})
  }
}
