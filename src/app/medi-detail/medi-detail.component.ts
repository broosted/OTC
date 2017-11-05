import { MedicineService } from './../exposed-services/medicines.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { HttpClient } from '@angular/common/http';


import { Observable} from 'rxjs';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-medi-detail',
  templateUrl: './medi-detail.component.html',
  styleUrls: ['./medi-detail.component.css']
})
export class MediDetailComponent implements OnInit {

  medicine$: Observable<any>;


  constructor(private route: ActivatedRoute,
    private router: Router, private medService: MedicineService) {

   

  }

  ngOnInit() {
    
    this.medicine$ = this.route.paramMap.switchMap(
      (params: ParamMap) =>  {
        return this.medService.findById(params.get('id'))}
    );

      }
    

}
