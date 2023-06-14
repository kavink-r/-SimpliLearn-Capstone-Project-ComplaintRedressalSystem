import { pin } from "./pin";
import { user } from "./user";

export class Customer extends user {
    address:string;
    pin:pin;
    contactNo:number;
    constructor(usr:user){
        super(usr);
    }
}