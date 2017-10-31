import { Component, OnInit ,Input, Output, 
  EventEmitter, OnChanges, SimpleChange, SimpleChanges} from '@angular/core';
import {Rating} from './rating.modle';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { RatingService} from '../exposed-services/rating.service';


@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css'],
  providers: [RatingService] //local provider,

})
export class RatingComponent implements OnInit, OnChanges {


 
  @Input() index: number; //this will be the index of the value
  @Input() readOnly: boolean;
  rating: Rating[];
  @Output() ratingValue = new EventEmitter();
                                       
  constructor() {    

  }

  ngOnInit() {

    //initial load of the ratings
    this.rating = this.generate(this.index);
    
    
    
  }

  //important to monitor @input index whenever the value changes the representation changes
  ngOnChanges(changes: SimpleChanges){
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
