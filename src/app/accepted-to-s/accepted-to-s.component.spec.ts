import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptedToSComponent } from './accepted-to-s.component';

describe('AcceptedToSComponent', () => {
  let component: AcceptedToSComponent;
  let fixture: ComponentFixture<AcceptedToSComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcceptedToSComponent]
    });
    fixture = TestBed.createComponent(AcceptedToSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
