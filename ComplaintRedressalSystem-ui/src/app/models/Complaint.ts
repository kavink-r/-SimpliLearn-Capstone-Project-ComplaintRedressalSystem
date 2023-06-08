import { Customer } from "./Customer";
import { Ticket } from "./Ticket";
import { pin } from "./pin";

export class complaint{
    complaintId:number;
    name:string;
    address:string;
    pin:pin;
    contactNo:number;
    customer:Customer;
    subject:string;
    details:string;
    feedback:string;
    ticket:Ticket[];
    createdAt:Date;
    lastUpdated:Date;
}