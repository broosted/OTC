import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';


import { Medicine } from '../store/medicines.interface';
import { MedicineService } from '../exposed-services/medicines.service';

@Component({
  selector: 'app-medi-list',
  templateUrl: './medi-list.component.html',
  styleUrls: ['./medi-list.component.css']
})
export class MediListComponent implements OnInit {

  list: Medicine[];
  constructor(private service: MedicineService) { }

  ngOnInit() {
  
  this.service.getAvgRating()
  .subscribe((value:any) => 
  {
    this.list = value
  });
}

filterData(searchText: string) {

  this.service.filter(searchText)
  .subscribe((value:any) => this.list = value);
 
}

}
