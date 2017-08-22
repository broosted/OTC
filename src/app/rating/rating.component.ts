import { Component, OnInit ,Input, Output, EventEmitter} from '@angular/core';
import {Rating} from './rating.modle';


@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {



  values : Rating[];
  startypes :string[];
  @Input() index: number; //this will be the index of the value
  @Input() readOnly: boolean;
  @Output() selectedIndex = new EventEmitter<number>();


                                       
  constructor() { 
    this.startypes = [
      'ion-ios-star', //star full
      'ion-ios-star-half', //star half
      'ion-ios-star-outline' //star empty
    ];
    
    let b = [
      { id: 1, class_str: 'ion-ios-star-outline'},
      {id: 2,class_str: 'ion-ios-star-outline'},
      {id: 3, class_str: 'ion-ios-star-outline'},
      {id:4,class_str:'ion-ios-star-outline'},
      {id:5,class_str:'ion-ios-star-outline'}
    ];

    this.values = b;
    

  }

  ngOnInit() {
    if(this.readOnly === true) {
      this.indexClick(event,this.index);
    }
  }


  indexClick(event, item: number): void{

     
    
      for(let i =0;i<this.values.length;i++){
      this.values[i].class_str = 'ion-ios-star-outline';
    }
    
    
    if(this.readOnly === false) {this.index = item;}
    

    for(let i= this.index-1 ; i >= 0;i--){
      this.values[i].class_str = 'ion-ios-star';

    }

    this.selectedIndex.emit(item);
 
  
  }


  



}
