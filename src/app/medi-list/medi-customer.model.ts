import {Rating} from '../rating/rating.modle';
import { OnInit } from '@angular/core';

export class Customer{
    customer_id: string;
    customer_name: string;
    customer_rating: number;
    customer_review: string;

    constructor( name: string, rating: number, review: string){
       
        this.customer_name = name;
        this.customer_rating = rating;
        this.customer_review = review;

    }

    
}