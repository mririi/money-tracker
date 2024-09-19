import { Component } from '@angular/core';
import {TransactionTypeEnum} from "../../core/enums/transactionType.enum";
import {AbstractCustomModalDirective} from "../../shared/custom-modal/abstract-custom-modal.directive";
import {TransactionGetDto} from "../../core/dtos/transaction/transactionGetDto";

@Component({
  selector: 'app-filter-transactions-modal',
  templateUrl: './filter-transactions-modal.component.html',
  styleUrls: ['./filter-transactions-modal.component.scss']
})
export class FilterTransactionsModalComponent extends AbstractCustomModalDirective{
  dateStartPeriod: string = '';
  dateEndPeriod: string = ''
  isShowPeriod: boolean = false;
  filterType: string = 'all';
  transactions: TransactionGetDto[] = [] as TransactionGetDto[];

  constructor() {
    super();
  }
  onChangeType(event: any) {
    this.isShowPeriod = event.target.value === 'period';
  }

  onFilterSubmit() {
    let filteredData = [];
    if (this.filterType === 'dateAsc') {
      filteredData = this.transactions.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    } else if (this.filterType === 'dateDesc') {
      filteredData = this.transactions.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    } else if (this.filterType === 'amountAsc') {
      filteredData = this.transactions.sort((a, b) => a.amount - b.amount);
    } else if (this.filterType === 'amountDesc') {
      filteredData = this.transactions.sort((a, b) => b.amount - a.amount);
    } else if (this.filterType === 'category') {
      filteredData = this.transactions.sort((a, b) => a.category.localeCompare(b.category));
    } else {
      filteredData = this.transactions.filter(transaction => {
        switch (this.filterType) {
          case 'income':
            return transaction.type === TransactionTypeEnum.INCOME;
          case 'expense':
            return transaction.type === TransactionTypeEnum.EXPENSE;
          case 'savings':
            return transaction.type === TransactionTypeEnum.SAVINGS;
          case 'currentMonth':
            return new Date(transaction.date).getMonth() === new Date().getMonth();
          case 'lastMonth':
            return new Date(transaction.date).getMonth() === new Date().getMonth() - 1;
          case 'period':
            return new Date(transaction.date) >= new Date(this.dateStartPeriod) && new Date(transaction.date) <= new Date(this.dateEndPeriod);
          default:
            return true;
        }
      });
    }
    this.onResult(filteredData);
  }
}
