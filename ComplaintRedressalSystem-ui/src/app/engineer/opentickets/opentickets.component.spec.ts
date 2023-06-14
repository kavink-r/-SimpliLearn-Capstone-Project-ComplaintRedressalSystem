import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenticketsComponent } from './opentickets.component';

describe('OpenticketsComponent', () => {
  let component: OpenticketsComponent;
  let fixture: ComponentFixture<OpenticketsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OpenticketsComponent]
    });
    fixture = TestBed.createComponent(OpenticketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
