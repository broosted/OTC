import { Component, OnInit ,Input, Output, EventEmitter} from '@angular/core';
import {Rating} from './rating.modle';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {


 
  @Input() index: number; //this will be the index of the value
  @Input() readOnly: boolean;
  rating: Rating[];
  @Output() ratingValue = new EventEmitter();
                                       
  constructor() {    

  }

  ngOnInit() {

    //this.rating = this.cleanup(this.rating);
    this.rating = this.generate(this.index);
    
  }

  
  generate(item: number): Rating[]{
    
    let values: Rating[] = [
      {id: 1, class_str: 'ion-ios-star-outline'},
      {id: 2, class_str: 'ion-ios-star-outline'},
      {id: 3, class_str: 'ion-ios-star-outline'},
      {id: 4, class_str:'ion-ios-star-outline'},
      {id: 5, class_str:'ion-ios-star-outline'}
    ];

        for(let i= --item ; i >= 0;i--){
          values[i].class_str = 'ion-ios-star';
        }
       
    return values;
      
      }

      cleanup(rating: Rating[]): Rating[]{
       
        return rating = [
          {id: 1, class_str: 'ion-ios-star-outline'},
          {id: 2, class_str: 'ion-ios-star-outline'},
          {id: 3, class_str: 'ion-ios-star-outline'},
          {id: 4, class_str:'ion-ios-star-outline'},
          {id: 5, class_str:'ion-ios-star-outline'}
        ];

      }

      indexClick($event,item: number){
        if(this.readOnly === false){
          this.ratingValue.emit(item);
        let values: Rating[] = [
          {id: 1, class_str: 'ion-ios-star-outline'},
          {id: 2, class_str: 'ion-ios-star-outline'},
          {id: 3, class_str: 'ion-ios-star-outline'},
          {id: 4, class_str:'ion-ios-star-outline'},
          {id: 5, class_str:'ion-ios-star-outline'}
        ];
    
            for(let i= --item ; i >= 0;i--){
              values[i].class_str = 'ion-ios-star';
            }
           
        this.rating = values;

          }
         

      }
    
  



}
