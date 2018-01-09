import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA} from '@angular/core';
import { MediDetailReviewsComponent } from './medi-detail-reviews.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerService } from '../exposed-services/customers.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ActivatedRouteStub, RouterLinkStubDirective, RouterStub} from '../routers/router-stubs';
import { Observable } from 'rxjs/Observable';

class CustomerServiceStub {

  custbelongtoMed() {

    return Observable.from([[{
     
      customer_id: '',
      customer_name: '',
      customer_rating: 1,
      customer_review: '',
      _id: '100'
    }]]);

  }

}
describe('MediDetailReviewsComponent', () => {
  let component: MediDetailReviewsComponent;
  let fixture: ComponentFixture<MediDetailReviewsComponent>;
  let activatedRoute: ActivatedRouteStub;

  beforeEach(() => {

    activatedRoute = new ActivatedRouteStub();
    activatedRoute.testParent = new ActivatedRouteStub();
    activatedRoute.testParent.testParamMap = {id: '200'}
    activatedRoute.testParamMap = { id: '100' } 

  })

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediDetailReviewsComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [ReactiveFormsModule, FormsModule],
      providers: [
        {provide: CustomerService, useClass: CustomerServiceStub},
        {provide: ActivatedRoute, useValue: activatedRoute},
        {provide: Router, useClass: RouterStub}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediDetailReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it(' MediDetailReviewsComponent should be created', () => {
    expect(component.list).toEqual([{
     
      customer_id: '',
      customer_name: '',
      customer_rating: 1,
      customer_review: '',
      _id: '100'
    }])
  });

  //test indexValue
  //test addreview
  //test editdisplay
  //test editreview
  //test deletereview
  //test reset form

});
