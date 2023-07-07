import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeEtudiantComponent } from './liste-etudiant.component';

describe('ListeEtudiantComponent', () => {
  let component: ListeEtudiantComponent;
  let fixture: ComponentFixture<ListeEtudiantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeEtudiantComponent]
    });
    fixture = TestBed.createComponent(ListeEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
