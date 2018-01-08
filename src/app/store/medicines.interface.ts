import {Customer} from './customers.interface';

export interface Medicine {
    _id: string;
    medi_id :string;
    medi_img_url: string;
    medi_description: string;
    medi_avg_score: string;
    customers: Customer[];

}