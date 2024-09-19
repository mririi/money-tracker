import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTransactionModalComponent } from './update-transaction-modal.component';

describe('UpdateTransactionModalComponent', () => {
  let component: UpdateTransactionModalComponent;
  let fixture: ComponentFixture<UpdateTransactionModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateTransactionModalComponent]
    });
    fixture = TestBed.createComponent(UpdateTransactionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
