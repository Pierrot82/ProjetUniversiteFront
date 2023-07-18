import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherCVComponent } from './afficher-cv.component';

describe('AfficherCVComponent', () => {
  let component: AfficherCVComponent;
  let fixture: ComponentFixture<AfficherCVComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AfficherCVComponent]
    });
    fixture = TestBed.createComponent(AfficherCVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
