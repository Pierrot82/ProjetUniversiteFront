import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCoursComponent } from './form-cours.component';

describe('FormCoursComponent', () => {
  let component: FormCoursComponent;
  let fixture: ComponentFixture<FormCoursComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormCoursComponent]
    });
    fixture = TestBed.createComponent(FormCoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
