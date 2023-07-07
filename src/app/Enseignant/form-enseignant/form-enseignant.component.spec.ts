import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEnseignantComponent } from './form-enseignant.component';

describe('FormEnseignantComponent', () => {
  let component: FormEnseignantComponent;
  let fixture: ComponentFixture<FormEnseignantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormEnseignantComponent]
    });
    fixture = TestBed.createComponent(FormEnseignantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
