import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintdetailsComponent } from './complaintdetails.component';

describe('ComplaintdetailsComponent', () => {
  let component: ComplaintdetailsComponent;
  let fixture: ComponentFixture<ComplaintdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComplaintdetailsComponent]
    });
    fixture = TestBed.createComponent(ComplaintdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
