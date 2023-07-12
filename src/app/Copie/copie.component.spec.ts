import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopieComponent } from './copie.component';

describe('CopieComponent', () => {
  let component: CopieComponent;
  let fixture: ComponentFixture<CopieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CopieComponent]
    });
    fixture = TestBed.createComponent(CopieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
