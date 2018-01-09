import { MedicineService } from './../exposed-services/medicines.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Medicine} from '../store/medicines.interface';
import { HttpClient } from '@angular/common/http';


import { Observable} from 'rxjs';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-medi-detail',
  templateUrl: './medi-detail.component.html',
  styleUrls: ['./medi-detail.component.css']
})
export class MediDetailComponent implements OnInit {

  medicine: Medicine;


  constructor(private route: ActivatedRoute,
    private router: Router, private medService: MedicineService) {
  }

  ngOnInit() {
    
    this.medicine = {
      _id: '',
      medi_id : '',
      medi_img_url: '',
      medi_description: '',
      medi_avg_score: '',
      customers: []
    }

      this.route.paramMap.subscribe(p =>  {  
        return this.medService.findById(p.get('id'))
        .subscribe((val:Medicine) => {  
          
          return this.medicine = val
        });
        })
      }


    
}
