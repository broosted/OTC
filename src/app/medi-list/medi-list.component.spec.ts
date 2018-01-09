import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA} from '@angular/core';
import { MediListComponent } from './medi-list.component';
import { MedicineService } from '../exposed-services/medicines.service';
import { Observable } from 'rxjs/Observable';
import { By } from '@angular/platform-browser';
import { RouterLinkStubDirective } from '../routers/router-stubs';

class MedicineServiceStub {

  getAvgRating(){


    return Observable.from([[{
      _id: '200',
      medi_id :'',
      medi_img_url: '',
      medi_description: '',
      medi_avg_score: '',
      customers: ''
    }]]);
  }

  filter() {

    return Observable.from([[{
      _id: '100',
      medi_id :'',
      medi_img_url: '',
      medi_description: '',
      medi_avg_score: '',
      customers: ''
    }]]);
  }
}

describe('MediListComponent', () => {
  let component: MediListComponent;
  let fixture: ComponentFixture<MediListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediListComponent , RouterLinkStubDirective ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [{ provide: MedicineService, useClass: MedicineServiceStub }] 
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('MediListComponent should be created', () => {
    expect(component).toBeTruthy();
  });


  it('Search button is working', () => {

    let button = fixture.debugElement.query(By.css('button'));
    button.triggerEventHandler('click', null);

    expect(component.list).toEqual([{
      _id: '100',
      medi_id :'',
      medi_img_url: '',
      medi_description: '',
      medi_avg_score: '',
      customers: ''
    }]);
  });


  it('Should check router links are valid', () => {

    // find DebugElements with an attached RouterLinkStubDirective
   let linkDes = fixture.debugElement.queryAll(By.directive(RouterLinkStubDirective));

    // get the attached link directive instances using the DebugElement injectors
 let links = linkDes.map((de:any) => de.injector.get(RouterLinkStubDirective) as RouterLinkStubDirective);

   expect(links.length).toBe(1, 'should have 1 links');
 expect(links[0].linkParams).toBe('/medi-detail/200', '1st link should go to Medi-Detail');

 });

 it('Get Average Rating is working properly', () => {
  

  expect(component.list).toEqual([{
    _id: '200',
    medi_id :'',
    medi_img_url: '',
    medi_description: '',
    medi_avg_score: '',
    customers: ''
  }]);

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
