import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostListOneComponent } from './post-list-one.component';

describe('PostListOneComponent', () => {
  let component: PostListOneComponent;
  let fixture: ComponentFixture<PostListOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostListOneComponent]
    });
    fixture = TestBed.createComponent(PostListOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
