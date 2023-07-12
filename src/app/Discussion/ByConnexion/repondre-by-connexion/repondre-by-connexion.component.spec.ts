import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepondreByConnexionComponent } from './repondre-by-connexion.component';

describe('RepondreByConnexionComponent', () => {
  let component: RepondreByConnexionComponent;
  let fixture: ComponentFixture<RepondreByConnexionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RepondreByConnexionComponent]
    });
    fixture = TestBed.createComponent(RepondreByConnexionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
