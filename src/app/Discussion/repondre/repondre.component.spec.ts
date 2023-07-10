import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepondreComponent } from './repondre.component';

describe('RepondreComponent', () => {
  let component: RepondreComponent;
  let fixture: ComponentFixture<RepondreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RepondreComponent]
    });
    fixture = TestBed.createComponent(RepondreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
