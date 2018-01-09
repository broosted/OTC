import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, ParamMap, RouterState } from '@angular/router';

import { HttpClient } from '@angular/common/http';

import { FormBuilder,FormGroup, FormControl} from '@angular/forms'; 
import { CustomerService } from '../exposed-services/customers.service';

import { Observable} from 'rxjs';
import { Customer } from '../store/customers.interface';



@Component({
  selector: 'app-medi-detail-reviews',
  templateUrl: './medi-detail-reviews.component.html',
  styleUrls: ['./medi-detail-reviews.component.css']
})
export class MediDetailReviewsComponent implements OnInit {


  list: Customer[];
  id: string;
  readOnly = false;
  item: number;
  myReviewForm : FormGroup;
  editItem: Customer;
  cust: Customer;

  constructor(private fb: FormBuilder, 
    private service: CustomerService, 
    private route: ActivatedRoute,
    private router: Router) { 

    this.myReviewForm = fb.group({
      customer_name: '',
      customer_rating: '',
      customer_review: ''
  
     });

  }

  ngOnInit() {
    
     this.route.parent.paramMap.subscribe((p:any) => {
    this.id = p.get('id');  
  });

    this.readOnly = true;

    this.editItem = {
      customer_id: '',
      customer_name: '',
      customer_rating: 0,
      customer_review: '',
      _id: ''
  };

  this.getReviews();
    
  }

    
  indexValue(event: any){
    this.item = event;
  }


  getReviews(): void {
    this.service.custbelongtoMed(this.id)
    .subscribe(customers => this.list = customers);
  }

  addReview(form: any){

    form.customer_rating = this.item;

    this.service.create(form, this.id)
    .subscribe(customer => {
     
     return this.list.push(customer)
    });

  }

  editDisplay(item: Customer){

    this.myReviewForm.setValue({
      customer_name: item.customer_name,
      customer_rating: item.customer_rating,
      customer_review: item.customer_review
    });
    
    this.editItem = item;


    this.service.findById(this.editItem._id).subscribe((customer: Customer) => this.cust = customer);
    
  }

  editReview(form: any){

    this.cust.customer_rating = this.item;
    this.cust.customer_name = form.customer_name;
    this.cust.customer_review = form.customer_review;

    this.service.update(this.cust, this.editItem._id)
    .subscribe(customer => this.list = this.list.map(el => {
        if(el._id === customer._id){
          return customer;
        }else {
          return el;
        }
      })
    );
   

  }

  removeReview(id: string){
    this.list = this.list.filter(h => h._id !== id);
    this.service.delete(id).subscribe();
  }

  resetForm(){
    this.myReviewForm.reset();
  }


}
