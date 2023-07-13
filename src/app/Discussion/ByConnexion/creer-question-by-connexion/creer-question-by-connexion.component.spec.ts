import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerQuestionByConnexionComponent } from './creer-question-by-connexion.component';

describe('CreerQuestionByConnexionComponent', () => {
  let component: CreerQuestionByConnexionComponent;
  let fixture: ComponentFixture<CreerQuestionByConnexionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreerQuestionByConnexionComponent]
    });
    fixture = TestBed.createComponent(CreerQuestionByConnexionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
