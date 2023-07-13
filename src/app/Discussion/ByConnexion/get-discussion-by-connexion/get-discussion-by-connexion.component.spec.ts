import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetDiscussionByConnexionComponent } from './get-discussion-by-connexion.component';

describe('GetDiscussionByConnexionComponent', () => {
  let component: GetDiscussionByConnexionComponent;
  let fixture: ComponentFixture<GetDiscussionByConnexionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetDiscussionByConnexionComponent]
    });
    fixture = TestBed.createComponent(GetDiscussionByConnexionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
