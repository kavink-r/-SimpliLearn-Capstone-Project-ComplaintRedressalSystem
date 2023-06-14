import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminallcomplaintsComponent } from './adminallcomplaints.component';

describe('AdminallcomplaintsComponent', () => {
  let component: AdminallcomplaintsComponent;
  let fixture: ComponentFixture<AdminallcomplaintsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminallcomplaintsComponent]
    });
    fixture = TestBed.createComponent(AdminallcomplaintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
