import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TransactionGetDto} from "../../../core/dtos/transaction/transactionGetDto";
import {TransactionTypeEnum} from "../../../core/enums/transactionTypeEnum";
import {TransactionApiService} from "../../../core/apis/transaction.api.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {TransactionPatchDto} from "../../../core/dtos/transaction/transactionPatchDto";

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.scss']
})
export class CustomTableComponent {
  @Input() profileId: number = -1;
  @Input() transactions: TransactionGetDto[] = [];
  @Output() reloadTransactions: EventEmitter<void> = new EventEmitter<void>();
  transactionUpdate: TransactionPatchDto = {} as TransactionPatchDto;

  constructor(private readonly transactionApiService: TransactionApiService, private readonly modalService: NgbModal) {
  }

  getTypeColorClass(type: TransactionTypeEnum) {
    return 'type-' + type.toLowerCase();
  }
  onDeleteTransaction(content: any) {
    this.modalService.open(content)
  }

  onDeleteTransactionConfirmed(transactionId: number) {
    this.transactionApiService.deleteTransaction(transactionId).subscribe({
      next: () => {
        this.reloadTransactions.emit();
        this.onClose();
      }
    });
  }

  onUpdateTransaction(id: number) {
    this.transactionApiService.updateTransaction(id, this.transactionUpdate).subscribe({
      next: () => {
        this.reloadTransactions.emit();
        this.onClose();
      }
    });
  }

  onClickEdit(updateContent: any, transaction: TransactionGetDto) {
    this.modalService.open(updateContent);
    this.transactionUpdate = {...transaction} as TransactionPatchDto;
  }

  onClose() {
    this.modalService.dismissAll();
  }
}
