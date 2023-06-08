import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerallticketsComponent } from './manageralltickets.component';

describe('ManagerallticketsComponent', () => {
  let component: ManagerallticketsComponent;
  let fixture: ComponentFixture<ManagerallticketsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagerallticketsComponent]
    });
    fixture = TestBed.createComponent(ManagerallticketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
