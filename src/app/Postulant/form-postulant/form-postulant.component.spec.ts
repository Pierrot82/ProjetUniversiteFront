import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPostulantComponent } from './form-postulant.component';

describe('FormPostulantComponent', () => {
  let component: FormPostulantComponent;
  let fixture: ComponentFixture<FormPostulantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormPostulantComponent]
    });
    fixture = TestBed.createComponent(FormPostulantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
