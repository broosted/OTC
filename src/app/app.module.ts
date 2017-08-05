import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RatingComponent } from './rating/rating.component';

import { StarRatingModule } from 'angular-star-rating';
import { RouterModule, Routes } from '@angular/router';
import { MediListComponent } from './medi-list/medi-list.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { MediDetailComponent } from './medi-detail/medi-detail.component';




const appRoutes: Routes = [
  
  
  { path: 'medi-detail', component: MediDetailComponent },
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
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    StarRatingModule.forRoot(),
     RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
