import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePostulantComponent } from './update-postulant.component';

describe('UpdatePostulantComponent', () => {
  let component: UpdatePostulantComponent;
  let fixture: ComponentFixture<UpdatePostulantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatePostulantComponent]
    });
    fixture = TestBed.createComponent(UpdatePostulantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
