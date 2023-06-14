import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PincodedetailsComponent } from './pincodedetails.component';

describe('PincodedetailsComponent', () => {
  let component: PincodedetailsComponent;
  let fixture: ComponentFixture<PincodedetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PincodedetailsComponent]
    });
    fixture = TestBed.createComponent(PincodedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
