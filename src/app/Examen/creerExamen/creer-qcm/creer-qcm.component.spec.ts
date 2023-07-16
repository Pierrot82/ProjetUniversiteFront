import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerQcmComponent } from './creer-qcm.component';

describe('CreerQcmComponent', () => {
  let component: CreerQcmComponent;
  let fixture: ComponentFixture<CreerQcmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreerQcmComponent]
    });
    fixture = TestBed.createComponent(CreerQcmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
