import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterTransactionsModalComponent } from './filter-transactions-modal.component';

describe('FilterTransactionsComponent', () => {
  let component: FilterTransactionsModalComponent;
  let fixture: ComponentFixture<FilterTransactionsModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterTransactionsModalComponent]
    });
    fixture = TestBed.createComponent(FilterTransactionsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
