import { pin } from "./pin";
import { user } from "./user";

export class Manager extends user{
    pin:pin;
    contactNo:number;
    constructor(usr:user){
        super(usr);
    }
}