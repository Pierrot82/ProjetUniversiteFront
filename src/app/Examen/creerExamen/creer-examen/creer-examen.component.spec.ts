import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerExamenComponent } from './creer-examen.component';

describe('CreerExamenComponent', () => {
  let component: CreerExamenComponent;
  let fixture: ComponentFixture<CreerExamenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreerExamenComponent]
    });
    fixture = TestBed.createComponent(CreerExamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
