import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassOrderComponent } from './pass-order.component';

describe('PassOrderComponent', () => {
  let component: PassOrderComponent;
  let fixture: ComponentFixture<PassOrderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PassOrderComponent]
    });
    fixture = TestBed.createComponent(PassOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
