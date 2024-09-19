import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TransactionGetDto} from "../../../core/dtos/transaction/transactionGetDto";
import {TransactionTypeEnum} from "../../../core/enums/transactionType.enum";
import {TransactionApiService} from "../../../core/apis/transaction.api.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {UpdateTransactionModalComponent} from "../../update-transaction-modal/update-transaction-modal.component";
import {ProfileService} from 'src/app/core/services/profile.service';
import {TransactionService} from "../../../core/services/transaction.service";

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.scss']
})
export class CustomTableComponent implements OnInit {
  @Input() profileId: number = -1;
  transactions: TransactionGetDto[] = [];
  pageSize: number = 8;
  currentPage: number = 1;

  constructor(private readonly transactionApiService: TransactionApiService,
              private readonly profileService: ProfileService,
              private readonly transactionService: TransactionService,
              private readonly modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.transactionService.filteredTransactions.subscribe((transactions: TransactionGetDto[]) => this.transactions = transactions)
  }

  getTypeColorClass(type: TransactionTypeEnum) {
    return 'type-' + type.toLowerCase();
  }

  onDeleteTransactionConfirmed(transactionId: number) {

  }

  onClickEdit(transaction: TransactionGetDto) {
    const popup = this.modalService.open(UpdateTransactionModalComponent);
    const modalRef = popup.componentInstance as UpdateTransactionModalComponent;
    modalRef.transaction = {...transaction};
    popup.result.then(() => {
      this.profileService.reload();
    });
  }

  onClose() {
    this.modalService.dismissAll();
  }
}
