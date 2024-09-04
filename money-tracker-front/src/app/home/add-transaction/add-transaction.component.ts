import {Component} from '@angular/core';
import {TransactionApiService} from "../../core/apis/transaction.api.service";
import {DynamicDialogRef} from "primeng/dynamicdialog";
import {TransactionService} from "../../core/services/transaction.service";
import {TransactionGetDto} from "../../core/dtos/transaction/TransactionGetDto";
import {TransactionPostDto} from "../../core/dtos/transaction/TransactionPostDto";

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.scss']
})
export class AddTransactionComponent {
  transaction: any = {};
  transactionTypes: any[] | undefined = [
    {name: 'EXPENSE'},
    {name: 'INCOME'}
  ];

  constructor(private readonly transactionApiService: TransactionApiService,
              private transactionService: TransactionService,
              private readonly ref: DynamicDialogRef ) {}

  onSave() {
    const postTransaction: TransactionPostDto = {
      amount: this.transaction.amount,
      name: this.transaction.name,
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
    this.ref.close();
  }
}
