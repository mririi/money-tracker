import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomCardContainerComponent } from './custom-card-container.component';

describe('CustomCardContainerComponent', () => {
  let component: CustomCardContainerComponent;
  let fixture: ComponentFixture<CustomCardContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomCardContainerComponent]
    });
    fixture = TestBed.createComponent(CustomCardContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
