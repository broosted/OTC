import '../styles/bootstrapflatly.css';
import { MessageService } from './exposed-services/message.service';
import { AboutComponent } from './about/about.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgReduxModule } from '@angular-redux/store';


import { AppComponent } from './app.component';
import { RatingComponent } from './rating/rating.component';

import { RouterModule, Routes } from '@angular/router';
import {
  RouterTestingModule
} from '@angular/router/testing';
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

import {Customer} from './store/customers.interface';
import {Medicine} from './store/medicines.interface';
import {Actions} from './actions/action';
import { MessageComponent } from './messages/message.component';



 const appRoutes: Routes = [
  
  
  //{ path: 'medi-detail', component: MediDetailComponent },
  
  {  path: 'about', component: AboutComponent}
  ,
  { 
    path: 'medi-detail/:id', component: MediDetailComponent ,
  children: [
    { path: '', redirectTo: 'reviews', pathMatch: 'full' },
    { path: 'detail', component: MediDetailDetailsComponent },
    { path: 'reviews', component: MediDetailReviewsComponent }
  ],
  
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
    MediDetailDetailsComponent,
    AboutComponent,
    MessageComponent

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
    ModalModule.forRoot(),
    NgReduxModule,
    RouterTestingModule

  ],
  providers: [ CustomerService, MedicineService, Actions, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
