import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatButtonsComponent } from './float-buttons.component';

describe('FloatButtonsComponent', () => {
  let component: FloatButtonsComponent;
  let fixture: ComponentFixture<FloatButtonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FloatButtonsComponent]
    });
    fixture = TestBed.createComponent(FloatButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
