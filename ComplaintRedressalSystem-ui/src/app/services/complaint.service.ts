import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { complaint } from '../models/Complaint';
import { Observable } from 'rxjs';
import { status } from '../models/status';

@Injectable({
  providedIn: 'root'
})
export class ComplaintService {
  baseUrl:string = 'http://localhost:8080/api/complaint/'
  constructor(private http:HttpClient) { }
  raiseComplaint(cmp:complaint):Observable<any>{
    return this.http.post<any>(this.baseUrl+'raise',cmp);
  }
  getAllComplaints():Observable<complaint[]>{
    return this.http.get<complaint[]>(this.baseUrl+'all');
  }
  getCustomerComplaints(custId:number):Observable<complaint[]>{
    let params:HttpParams = new HttpParams().set("cid",custId);
    return this.http.get<complaint[]>(this.baseUrl+'cuscomplaints',{params:params});
  }
  ticketReRaise(cmp:complaint):Observable<any>{
    return this.http.post<any>(this.baseUrl+'ticketreraise',cmp);
  }
  postFeedback(cmp:complaint):Observable<status>{
    return this.http.post<status>(this.baseUrl+'addfeedback',cmp);
  }
}
