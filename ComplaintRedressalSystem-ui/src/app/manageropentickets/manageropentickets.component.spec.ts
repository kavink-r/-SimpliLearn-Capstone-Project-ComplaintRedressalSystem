import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageropenticketsComponent } from './manageropentickets.component';

describe('ManageropenticketsComponent', () => {
  let component: ManageropenticketsComponent;
  let fixture: ComponentFixture<ManageropenticketsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageropenticketsComponent]
    });
    fixture = TestBed.createComponent(ManageropenticketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
