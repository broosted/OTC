import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MatGridListModule} from '@angular/material';
import {MatCardModule} from '@angular/material';


import { AppComponent } from './app.component';
import { RatingComponent } from './rating/rating.component';

import { StarRatingModule } from 'angular-star-rating';
import { RouterModule, Routes } from '@angular/router';
import { MediListComponent } from './medi-list/medi-list.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { MediDetailComponent } from './medi-detail/medi-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { UserReviewComponent } from './user-review/user-review.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerService} from './exposed-services/customers.service';
import { MedicineService } from './exposed-services/medicines.service';






const appRoutes: Routes = [
  
  
  { path: 'medi-detail', component: MediDetailComponent },
  { path: 'user-review', component: UserReviewComponent},
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
    UserReviewComponent
  ],
  imports: [
    BrowserModule,
    StarRatingModule.forRoot(),
     RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatCardModule
  ],
  providers: [ CustomerService, MedicineService],
  bootstrap: [AppComponent]
})
export class AppModule { }
