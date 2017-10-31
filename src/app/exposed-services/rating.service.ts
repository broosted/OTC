import {Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rating } from '../rating/rating.modle';

@Injectable()
export class RatingService {



    generate(item: number): Observable<Rating[]>{
        
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
           
            return Observable.of(values);
        }

          //subscribe whenever we do an edit

}