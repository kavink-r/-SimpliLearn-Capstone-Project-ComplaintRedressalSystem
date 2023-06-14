import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticket } from '../models/Ticket';
import { complaint } from '../models/Complaint';
import { status } from '../models/status';
import { Engineer } from '../models/Engineer';
import { user } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  baseUrl: string = 'http://localhost:8080/api/ticket/'
  constructor(private http: HttpClient) { }

  getAllTickets(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(this.baseUrl + 'all', { withCredentials: true });
  }
  getTicketById(ticketId: number): Observable<Ticket> {
    let param: HttpParams = new HttpParams().set("ticketId", ticketId);
    return this.http.get<Ticket>(this.baseUrl + 'ticketdata', { params: param });
  }
  getComplaintdataByTicketid(ticketId: number): Observable<complaint> {
    let param: HttpParams = new HttpParams().set("ticketId", ticketId);
    return this.http.get<complaint>(this.baseUrl + 'complaintdata', { params: param, withCredentials: true });
  }
  updateStatus(tkt: Ticket): Observable<status> {
    return this.http.patch<status>(this.baseUrl + 'updatestatus', tkt,{withCredentials:true});
  }
  updateComment(tkt: Ticket): Observable<status> {
    return this.http.patch<status>(this.baseUrl + 'updatecomment', tkt);
  }
  assignEngineer(tkt: Ticket): Observable<status> {
    return this.http.patch<status>(this.baseUrl + 'assignEngineer', tkt,{withCredentials:true});
  }
  getAllEngineerTickets(engineerID: number): Observable<Ticket[]> {
    let param: HttpParams = new HttpParams().set("engineerid", engineerID);
    return this.http.get<Ticket[]>(this.baseUrl + 'engineeralltickets', { params: param ,withCredentials:true});
  }
  getEngineerOpenTickets(engId: number): Observable<Ticket[]> {
    let param: HttpParams = new HttpParams().set("engineerid", engId);
    return this.http.get<Ticket[]>(this.baseUrl + 'engineeropentickets', { params: param ,withCredentials:true});
  }
  getManagerOpenTickets(mgrId: number): Observable<Ticket[]> {
    let param: HttpParams = new HttpParams().set("managerid", mgrId);
    return this.http.get<Ticket[]>(this.baseUrl + 'manageropentickets', { params: param, withCredentials: true });
  }
  getAllManagerTickets(mgrId: number): Observable<Ticket[]> {
    let param: HttpParams = new HttpParams().set("managerid", mgrId);
    return this.http.get<Ticket[]>(this.baseUrl + 'manageralltickets', { params: param });
  }
  getEngineerForPin(pincode: number): Observable<Engineer[]> {
    let param: HttpParams = new HttpParams().set("pin", pincode);
    return this.http.get<Engineer[]>(this.baseUrl + 'engineerforpin', { params: param,withCredentials:true });
  }
  assignmanager(t: Ticket): Observable<status> {
    return this.http.patch<status>(this.baseUrl + 'assignmanager', t, { withCredentials: true });
  }
}
