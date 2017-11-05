import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediDetailDetailsComponent } from './medi-detail-details.component';

describe('MediDetailDetailsComponent', () => {
  let component: MediDetailDetailsComponent;
  let fixture: ComponentFixture<MediDetailDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediDetailDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediDetailDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
