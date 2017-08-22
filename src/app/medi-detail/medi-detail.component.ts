import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Customers } from './customer.interface';
import { FormBuilder,FormGroup, FormControl} from '@angular/forms'; 


@Component({
  selector: 'app-medi-detail',
  templateUrl: './medi-detail.component.html',
  styleUrls: ['./medi-detail.component.css']
})
export class MediDetailComponent implements OnInit {

  list: Customers;
  readOnly = false;
  item;
  myReviewForm : FormGroup;

  constructor(private http: HttpClient, fb: FormBuilder) {
   this.myReviewForm = new FormGroup({

    customer_name: new FormControl(''),
    customer_rating: new FormControl(''),
    customer_review: new FormControl('')

   });
  }

  ngOnInit(): void {
    this.http.get<Customers>('api/customers').subscribe(data => {
      
      this.list = data;
    });
  
    this.readOnly = true;
   
  }

  getRating(item: number): void{
    this.item = item;
    console.log(this.item);
  }

}
