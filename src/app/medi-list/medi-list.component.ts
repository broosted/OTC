import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';


import { Medicines } from './medi-item.model';
import { MedicineService } from '../exposed-services/medicines.service';

@Component({
  selector: 'app-medi-list',
  templateUrl: './medi-list.component.html',
  styleUrls: ['./medi-list.component.css']
})
export class MediListComponent implements OnInit {

  list$: Observable<Medicines[]>;
  constructor(private service: MedicineService) { }

  ngOnInit() {
 
this.list$ = this.service.list();
}

filterData(searchText: string) {
  
  this.list$ = this.service.filter(searchText);
 // this.service.filter(searchText).subscribe(element => console.log(element));
}

}
