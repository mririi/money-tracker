import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBalanceModalComponent } from './update-balance-modal.component';

describe('UpdateBalanceComponent', () => {
  let component: UpdateBalanceModalComponent;
  let fixture: ComponentFixture<UpdateBalanceModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateBalanceModalComponent]
    });
    fixture = TestBed.createComponent(UpdateBalanceModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
