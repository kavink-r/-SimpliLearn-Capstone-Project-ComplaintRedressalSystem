import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllcomplaintComponent } from './allcomplaint.component';

describe('AllcomplaintComponent', () => {
  let component: AllcomplaintComponent;
  let fixture: ComponentFixture<AllcomplaintComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllcomplaintComponent]
    });
    fixture = TestBed.createComponent(AllcomplaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
