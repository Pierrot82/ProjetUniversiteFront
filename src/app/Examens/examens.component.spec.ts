import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamensComponent } from './examens.component';

describe('ExamensComponent', () => {
  let component: ExamensComponent;
  let fixture: ComponentFixture<ExamensComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExamensComponent]
    });
    fixture = TestBed.createComponent(ExamensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
