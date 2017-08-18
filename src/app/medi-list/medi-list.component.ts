import { Component, OnInit } from '@angular/core';



import { Medicines } from './medi-item.model';

@Component({
  selector: 'app-medi-list',
  templateUrl: './medi-list.component.html',
  styleUrls: ['./medi-list.component.css']
})
export class MediListComponent implements OnInit {

  results: Medicines[];
  constructor() { }

  ngOnInit(): void {
    /*
    this.http.get('rating.json').subscribe(data => 
      this.results = data.json());

      for(let i =0;i<this.results.length;i++){
        console.log(this.results[i]);
      }
*/
}


}
