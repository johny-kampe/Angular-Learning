import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostListTwoComponent } from './post-list-two.component';

describe('PostListTwoComponent', () => {
  let component: PostListTwoComponent;
  let fixture: ComponentFixture<PostListTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostListTwoComponent]
    });
    fixture = TestBed.createComponent(PostListTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
