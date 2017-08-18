export class Customer{
    customer_id: number;
    customer_name: string;
    customer_rating: number;
    customer_review: string;


    constructor(id: number, name: string, rating: number, review: string){
        this.customer_id = id;
        this.customer_name = name;
        this.customer_rating = rating;
        this.customer_review = review;
    }
}