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
  transaction: any = {};
  transactionTypes: { name: TransactionTypeEnum }[] = [
    {name: TransactionTypeEnum.EXPENSE},
    {name: TransactionTypeEnum.INCOME},
    {name: TransactionTypeEnum.SAVINGS}
  ];

  constructor(private readonly transactionApiService: TransactionApiService,
              private transactionService: TransactionService) {}

  onSave() {
    const postTransaction: TransactionPostDto = {
      amount: this.transaction.amount,
      date: this.transaction.date,
      category: this.transaction.category,
      type: this.transaction.type.name
    }
    this.transactionApiService.addTransaction(postTransaction).subscribe({
      next: (transaction: TransactionGetDto) => {
        this.transactionService.addTransaction(transaction);
      },
      error: (error) => {
        console.log(error)
        this.onClose();
      },
      complete: () => this.onClose()
    });
  }

  onClose() {
    // this.ref.close();
  }
}
