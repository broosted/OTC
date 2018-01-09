
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MedicineService } from './../exposed-services/medicines.service';
import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MediDetailComponent } from './medi-detail.component';
import { Router, ActivatedRoute } from '@angular/router';

import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import 'rxjs/add/observable/from';
import { MessageService } from '../exposed-services/message.service';
import { Medicine} from '../store/medicines.interface';
import { ActivatedRouteStub, RouterLinkStubDirective} from '../routers/router-stubs';
import { Observable } from 'rxjs/Observable';




class MedicineServiceStub {
 
  findById(): Observable<any> {
   return Observable.from([{
    _id: '100',
    medi_id : '',
    medi_img_url: '',
    medi_description: '',
    medi_avg_score: '',
    customers: [{}]
  }]);
  }
}
describe('MediDetailComponent', () => {
  let component: MediDetailComponent;
  let fixture: ComponentFixture<MediDetailComponent>;
  let activatedRoute: ActivatedRouteStub;

  let medicine = {
    _id: '100',
    medi_id : '',
    medi_img_url: '',
    medi_description: '',
    medi_avg_score: '',
    customers: [{}]
  }
 

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]),
        HttpClientModule
    ],
      declarations: [ MediDetailComponent , RouterLinkStubDirective],
     
    providers: [
      {provide: MedicineService, useClass: MedicineServiceStub },
      MessageService,
      { provide: ActivatedRoute, useClass: ActivatedRouteStub}
    ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
 
    fixture = TestBed.createComponent(MediDetailComponent);
    component = fixture.componentInstance;
    activatedRoute = new ActivatedRouteStub();
  });

  beforeEach(() => {
    activatedRoute.testParamMap = { id: '100' } 
    fixture.detectChanges();
});


  it('Check Route working', fakeAsync(() => {
    
    let mediService = TestBed.get(MedicineService);
    mediService.findById().subscribe((val: Medicine) => {
      expect(val).toEqual(medicine)
    });

    expect(component.medicine).toEqual(medicine);


  }));


  it('Should check router links are valid', () => {

     // find DebugElements with an attached RouterLinkStubDirective
    let linkDes = fixture.debugElement.queryAll(By.directive(RouterLinkStubDirective));

     // get the attached link directive instances using the DebugElement injectors
  let links = linkDes.map((de:any) => de.injector.get(RouterLinkStubDirective) as RouterLinkStubDirective);

    expect(links.length).toBe(2, 'should have 2 links');
  expect(links[0].linkParams).toBe('detail', '1st link should go to Detail');
  expect(links[1].linkParams).toBe('reviews', '2nd link should go to Reviews');

  })


  // it('can click Heroes link in template', () => {
  //     // find DebugElements with an attached RouterLinkStubDirective
  //     let linkDes = fixture.debugElement.queryAll(By.directive(RouterLinkStubDirective));

  //     // get the attached link directive instances using the DebugElement injectors
  //  let links = linkDes.map((de:any) => de.injector.get(RouterLinkStubDirective) as RouterLinkStubDirective);

   
  //   const heroesLinkDe = linkDes[1];
  //   const heroesLink = links[1];
  
  //   expect(heroesLink.navigatedTo).toBeNull('link should not have navigated yet');
  
  //   heroesLinkDe.triggerEventHandler('click', null);
  //   fixture.detectChanges();
  
  //   expect(heroesLink.navigatedTo).toBe('reviews');
  // });

});
