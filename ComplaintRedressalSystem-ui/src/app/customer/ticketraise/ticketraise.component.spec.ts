import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketraiseComponent } from './ticketraise.component';

describe('TicketraiseComponent', () => {
  let component: TicketraiseComponent;
  let fixture: ComponentFixture<TicketraiseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TicketraiseComponent]
    });
    fixture = TestBed.createComponent(TicketraiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
