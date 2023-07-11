import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetDiscussionComponent } from './get-discussion.component';

describe('GetDiscussionComponent', () => {
  let component: GetDiscussionComponent;
  let fixture: ComponentFixture<GetDiscussionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetDiscussionComponent]
    });
    fixture = TestBed.createComponent(GetDiscussionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
