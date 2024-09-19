import {Directive} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {TransactionGetDto} from "../dtos/transaction/transactionGetDto";

@Directive()
export class TransactionService {
  _transactions: BehaviorSubject<TransactionGetDto[]> = new BehaviorSubject<TransactionGetDto[]>([]);
  transactions = this._transactions.asObservable();
  _filteredTransactions: BehaviorSubject<TransactionGetDto[]> = new BehaviorSubject<TransactionGetDto[]>([]);
  filteredTransactions = this._filteredTransactions.asObservable();

  setTransactions(transactions: TransactionGetDto[]) {
    this._transactions.next(transactions);
    this._filteredTransactions.next(transactions);
  }

  setFilteredTransactions(transactions: TransactionGetDto[]) {
    this._filteredTransactions.next(transactions);
  }
}
