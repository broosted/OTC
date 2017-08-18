import {Customer} from './medi-customer.model';

export class Medicines{

    medi_id :number;
    medi_img_url: string;
    medi_description: string;
    customers: Customer[];

    constructor( id: number, img_url: string, desc: string, customer: Customer[]){
        this.medi_id = id;
        this.medi_img_url = img_url;
        this.medi_description = desc;
        this.customers = customer;
    }

}