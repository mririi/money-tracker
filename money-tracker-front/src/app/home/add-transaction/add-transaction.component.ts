import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TransactionApiService} from "../../core/apis/transaction.api.service";
import {TransactionService} from "../../core/services/transaction.service";
import {TransactionGetDto} from "../../core/dtos/transaction/transactionGetDto";
import {TransactionPostDto} from "../../core/dtos/transaction/transactionPostDto";
import {TransactionTypeEnum} from "../../core/enums/transactionType.enum";

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.scss']
})
export class AddTransactionComponent {
  @Input() profileId: number = -1;
  @Output() updateProfile: EventEmitter<void> = new EventEmitter<void>();
  transaction: TransactionGetDto = {
    id: 0,
    amount: 0,
    category: '',
    date: '',
    comment: '',
    type: TransactionTypeEnum.EXPENSE
  };

  constructor(private readonly transactionApiService: TransactionApiService) {
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
      profileId: this.profileId
    }
    this.transactionApiService.addTransaction(postTransaction).subscribe({
      next: () => {
        this.updateProfile.emit();
      },
      error: () => {
      },
    });
  }
}
