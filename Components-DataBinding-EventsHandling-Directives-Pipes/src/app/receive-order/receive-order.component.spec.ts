import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiveOrderComponent } from './receive-order.component';

describe('ReceiveOrderComponent', () => {
  let component: ReceiveOrderComponent;
  let fixture: ComponentFixture<ReceiveOrderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReceiveOrderComponent]
    });
    fixture = TestBed.createComponent(ReceiveOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
