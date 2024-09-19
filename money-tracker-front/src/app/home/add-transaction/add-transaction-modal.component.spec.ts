import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTransactionModalComponent } from './add-transaction-modal.component';

describe('AddTransactionComponent', () => {
  let component: AddTransactionModalComponent;
  let fixture: ComponentFixture<AddTransactionModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddTransactionModalComponent]
    });
    fixture = TestBed.createComponent(AddTransactionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
