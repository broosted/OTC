import {Customer} from './medi-customer.model';

export class Medicines{

    medi_id :string;
    medi_img_url: string;
    medi_description: string;
    medi_avg_score: string;
    customers: Customer[];

    constructor( id: string, img_url: string, desc: string,avg_score: string, customer: Customer[]){
        this.medi_id = id;
        this.medi_img_url = img_url;
        this.medi_description = desc;
        this.medi_avg_score = avg_score;
        this.customers = customer;
    }

}