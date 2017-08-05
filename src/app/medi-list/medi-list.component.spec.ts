import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediListComponent } from './medi-list.component';

describe('MediListComponent', () => {
  let component: MediListComponent;
  let fixture: ComponentFixture<MediListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
