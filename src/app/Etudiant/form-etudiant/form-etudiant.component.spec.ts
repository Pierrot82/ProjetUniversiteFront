import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEtudiantComponent } from './form-etudiant.component';

describe('FormEtudiantComponent', () => {
  let component: FormEtudiantComponent;
  let fixture: ComponentFixture<FormEtudiantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormEtudiantComponent]
    });
    fixture = TestBed.createComponent(FormEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
