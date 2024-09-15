import {Component, Input} from '@angular/core';
import {TransactionGetDto} from "../../../core/dtos/transaction/transactionGetDto";
import {TransactionTypeEnum} from "../../../core/enums/transactionTypeEnum";
import {TransactionApiService} from "../../../core/apis/transaction.api.service";

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.scss']
})
export class CustomTableComponent {
  @Input() transactions: TransactionGetDto[] = [];

  constructor(private readonly transactionApiService: TransactionApiService) {
  }

  getTypeColorClass(type: TransactionTypeEnum) {
    return 'type-' + type.toLowerCase();
  }

  onDeleteTransaction(transactionId: number) {
    this.transactionApiService.deleteTransaction(transactionId).subscribe({
      next: () => {
        this.transactions = this.transactions.filter(t => t.id !== transactionId);
      }
    });
  }
}
