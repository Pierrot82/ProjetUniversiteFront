import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerQuestionComponent } from './creer-question.component';

describe('CreerQuestionComponent', () => {
  let component: CreerQuestionComponent;
  let fixture: ComponentFixture<CreerQuestionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreerQuestionComponent]
    });
    fixture = TestBed.createComponent(CreerQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
