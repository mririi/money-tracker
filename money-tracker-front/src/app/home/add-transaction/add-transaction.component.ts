import {Component} from '@angular/core';
import {TransactionApiService} from "../../core/apis/transaction.api.service";
import {TransactionService} from "../../core/services/transaction.service";
import {TransactionGetDto} from "../../core/dtos/transaction/transactionGetDto";
import {TransactionPostDto} from "../../core/dtos/transaction/transactionPostDto";
import {TransactionTypeEnum} from "../../core/enums/transactionTypeEnum";

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.scss']
})
export class AddTransactionComponent {
  transaction: TransactionGetDto = {
    id: 0,
    amount: 0,
    category: '',
    date: '',
    comment: '',
    type: TransactionTypeEnum.EXPENSE
  };
  transactionTypes: { name: TransactionTypeEnum }[] = [
    {name: TransactionTypeEnum.EXPENSE},
    {name: TransactionTypeEnum.INCOME},
    {name: TransactionTypeEnum.SAVINGS}
  ];
  categories: any[] = [];
  isLoading: boolean = false;

  constructor(private readonly transactionApiService: TransactionApiService,
              private transactionService: TransactionService) {
  }

  onSave() {
    if (!this.transaction) {
      return;
    }
    const postTransaction: TransactionPostDto = {
      amount: this.transaction.amount,
      date: this.transaction.date,
      category: this.transaction.category,
      type: this.transaction.type,
      comment: this.transaction.comment,
      profileId: 1
    }
    this.isLoading = true;
    this.transactionApiService.addTransaction(postTransaction).subscribe({
      next: (transaction: TransactionGetDto) => {
        this.transactionService.addTransaction(transaction);
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
      },
    });
  }
}
