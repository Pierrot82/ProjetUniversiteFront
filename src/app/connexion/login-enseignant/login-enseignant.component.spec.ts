import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginEnseignantComponent } from './login-enseignant.component';

describe('LoginEnseignantComponent', () => {
  let component: LoginEnseignantComponent;
  let fixture: ComponentFixture<LoginEnseignantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginEnseignantComponent]
    });
    fixture = TestBed.createComponent(LoginEnseignantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
