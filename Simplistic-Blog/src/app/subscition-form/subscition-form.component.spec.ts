import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscitionFormComponent } from './subscition-form.component';

describe('SubscitionFormComponent', () => {
  let component: SubscitionFormComponent;
  let fixture: ComponentFixture<SubscitionFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubscitionFormComponent]
    });
    fixture = TestBed.createComponent(SubscitionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
