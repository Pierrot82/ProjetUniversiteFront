import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamenComponent } from './examen.component';

describe('ExamensComponent', () => {
  let component: ExamenComponent;
  let fixture: ComponentFixture<ExamenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExamenComponent],
    });
    fixture = TestBed.createComponent(ExamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
