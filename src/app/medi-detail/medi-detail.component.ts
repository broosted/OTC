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
  editItem: Customer;


  constructor(private fb: FormBuilder, private service: CustomerService) {
   this.myReviewForm = fb.group({
    customer_name: '',
    customer_rating: '',
    customer_review: ''

   });

  }

  ngOnInit() {
    
  
    this.readOnly = true;
    this.list$ = this.service.list();

    this.editItem = new Customer('',0,'');

      }
    
    
      indexValue(event){
        this.item = event;
      }
  

      addReview(form: any){
        form.customer_rating = this.item;
        this.list$  =  this.service.create(form);
        console.log(this.list$);
        this.list$.subscribe();
      }

      editReview(form: any){
        form.customer_rating = this.editItem;
        this.list$  =  this.service.update(form);
        this.list$.subscribe();

      }

      editDisplay(item: Customer){
        this.myReviewForm.setValue({
          customer_name: item.customer_name,
          customer_rating: item.customer_rating,
          customer_review: item.customer_review
        });
        
        this.editItem = item;
        
      }

      removeReview(id: string)
      {
        this.list$ = this.service.delete(id);
        this.list$.subscribe();
      }

      resetForm(){
        this.myReviewForm.reset();
      }
    

}
