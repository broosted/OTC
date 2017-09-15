import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { FormBuilder,FormGroup, FormControl} from '@angular/forms'; 
import { CustomerService } from '../exposed-services/customers.service';
import { Observable} from 'rxjs';
import { Customer } from '../medi-list/medi-customer.model';



@Component({
  selector: 'app-medi-detail',
  templateUrl: './medi-detail.component.html',
  styleUrls: ['./medi-detail.component.css']
})
export class MediDetailComponent implements OnInit {

  list$: Observable<Customer[]>;
  readOnly = false;
  item: number;
  myReviewForm : FormGroup;


  constructor(private http: HttpClient,private fb: FormBuilder, private service: CustomerService) {
   this.myReviewForm = fb.group({

    customer_name: '',
    customer_rating: '',
    customer_review: ''

   });

  }

  ngOnInit() {
    
  
    this.readOnly = true;
    this.list$ = this.service.list();


      }
    
    
      indexValue(event){
        this.item = event;
      }
  

      addReview(form: any){
        form.customer_rating = this.item;
        this.list$  =  this.service.create(form);  
      }



}
