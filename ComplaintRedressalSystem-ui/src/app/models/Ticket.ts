import { complaint } from "./Complaint";
import { Engineer } from "./Engineer";
import { Manager } from "./Manager";

export class Ticket{
    ticketId:number;
    status:string;
    complaint:complaint;
    manager:Manager;
    engineer:Engineer;
    comment:string;
    createdAt:Date;
    updatedAt:Date;
}