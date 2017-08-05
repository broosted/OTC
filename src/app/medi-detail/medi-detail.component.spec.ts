import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediDetailComponent } from './medi-detail.component';

describe('MediDetailComponent', () => {
  let component: MediDetailComponent;
  let fixture: ComponentFixture<MediDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
