import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectTransactionTypeComponent } from './select-transaction-type.component';

describe('SelectTransactionTypeComponent', () => {
  let component: SelectTransactionTypeComponent;
  let fixture: ComponentFixture<SelectTransactionTypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectTransactionTypeComponent]
    });
    fixture = TestBed.createComponent(SelectTransactionTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
