import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCoursComponent } from './update-cours.component';

describe('UpdateCoursComponent', () => {
  let component: UpdateCoursComponent;
  let fixture: ComponentFixture<UpdateCoursComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateCoursComponent]
    });
    fixture = TestBed.createComponent(UpdateCoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
