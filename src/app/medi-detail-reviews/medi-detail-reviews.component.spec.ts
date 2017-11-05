import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediDetailReviewsComponent } from './medi-detail-reviews.component';

describe('MediDetailReviewsComponent', () => {
  let component: MediDetailReviewsComponent;
  let fixture: ComponentFixture<MediDetailReviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediDetailReviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediDetailReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
