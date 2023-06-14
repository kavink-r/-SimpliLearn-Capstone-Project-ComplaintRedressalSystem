import { pin } from "./pin";
import { user } from "./user";

export class Engineer extends user{
    locations:pin[];
    contactNo:number;
    constructor(usr:user){
        super(usr);
    }
}