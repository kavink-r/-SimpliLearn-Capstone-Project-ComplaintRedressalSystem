import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminallticketsComponent } from './adminalltickets.component';

describe('AdminallticketsComponent', () => {
  let component: AdminallticketsComponent;
  let fixture: ComponentFixture<AdminallticketsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminallticketsComponent]
    });
    fixture = TestBed.createComponent(AdminallticketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
