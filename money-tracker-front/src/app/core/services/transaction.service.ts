import {Directive} from "@angular/core";
import {BehaviorSubject, Subject} from "rxjs";
import {TransactionGetDto} from "../dtos/transaction/transactionGetDto";

@Directive()
export class TransactionService {
  _transactions: BehaviorSubject<TransactionGetDto[]> = new BehaviorSubject<TransactionGetDto[]>([]);
  transactions = this._transactions.asObservable();

  addTransaction(transaction: TransactionGetDto) {
    const currentValue: TransactionGetDto[] = this._transactions.value;
    this._transactions.next([...currentValue, transaction]);
  }

  setTransactions(transactions: TransactionGetDto[]) {
    this._transactions.next(transactions);
  }
}
