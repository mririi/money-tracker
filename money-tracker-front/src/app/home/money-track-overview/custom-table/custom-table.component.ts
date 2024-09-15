import {Component, Input} from '@angular/core';
import {TransactionGetDto} from "../../../core/dtos/transaction/transactionGetDto";
import {TransactionTypeEnum} from "../../../core/enums/transactionTypeEnum";

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.scss']
})
export class CustomTableComponent {
  @Input() transactions: TransactionGetDto[] = [];

  getTypeColorClass(type: TransactionTypeEnum) {
    return 'type-' + type.toLowerCase();
  }
}
