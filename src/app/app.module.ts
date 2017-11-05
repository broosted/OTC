import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';
import { RatingComponent } from './rating/rating.component';

import { RouterModule, Routes } from '@angular/router';
import { MediListComponent } from './medi-list/medi-list.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { MediDetailComponent } from './medi-detail/medi-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerService} from './exposed-services/customers.service';
import { MedicineService } from './exposed-services/medicines.service';


import { ModalModule } from 'ngx-bootstrap/modal';
import { MediDetailDetailsComponent } from './medi-detail-details/medi-detail-details.component';
import { MediDetailReviewsComponent } from './medi-detail-reviews/medi-detail-reviews.component';



const appRoutes: Routes = [
  
  
  //{ path: 'medi-detail', component: MediDetailComponent },
  { path: 'medi-detail/:id', component: MediDetailComponent ,
  children: [
    { path: '', redirectTo: 'reviews', pathMatch: 'full' },
    { path: 'detail', component: MediDetailDetailsComponent },
    { path: 'reviews', component: MediDetailReviewsComponent }
  ]
},
  {
    path: '', component: MediListComponent
  },
  { path: '**', component: PagenotfoundComponent  }
];



@NgModule({
  declarations: [
    AppComponent,
    RatingComponent,
    MediListComponent,
    MediDetailComponent,
    PagenotfoundComponent,
    MediDetailReviewsComponent,
    MediDetailDetailsComponent

  ],
  imports: [
    BrowserModule,
     RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
 
    ModalModule.forRoot()
  ],
  providers: [ CustomerService, MedicineService],
  bootstrap: [AppComponent]
})
export class AppModule { }
