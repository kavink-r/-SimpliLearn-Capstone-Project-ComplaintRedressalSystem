import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmanagerComponent } from './assignmanager.component';

describe('AssignmanagerComponent', () => {
  let component: AssignmanagerComponent;
  let fixture: ComponentFixture<AssignmanagerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssignmanagerComponent]
    });
    fixture = TestBed.createComponent(AssignmanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
