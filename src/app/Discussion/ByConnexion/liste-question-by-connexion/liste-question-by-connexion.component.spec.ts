import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeQuestionByConnexionComponent } from './liste-question-by-connexion.component';

describe('ListeQuestionByConnexionComponent', () => {
  let component: ListeQuestionByConnexionComponent;
  let fixture: ComponentFixture<ListeQuestionByConnexionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeQuestionByConnexionComponent]
    });
    fixture = TestBed.createComponent(ListeQuestionByConnexionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
