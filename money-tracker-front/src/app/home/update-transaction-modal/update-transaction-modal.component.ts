import {Component} from '@angular/core';
import {TransactionGetDto} from "../../core/dtos/transaction/transactionGetDto";
import {TransactionApiService} from "../../core/apis/transaction.api.service";
import {TransactionPatchDto} from "../../core/dtos/transaction/transactionPatchDto";
import {AbstractCustomModalDirective} from "../../shared/custom-modal/abstract-custom-modal.directive";
import {ProfileService} from "../../core/services/profile.service";

@Component({
  selector: 'app-update-transaction-modal',
  templateUrl: './update-transaction-modal.component.html',
  styleUrls: ['./update-transaction-modal.component.scss']
})
export class UpdateTransactionModalComponent extends AbstractCustomModalDirective {
  transaction: TransactionGetDto = {} as TransactionGetDto;

  constructor(private readonly transactionApiService: TransactionApiService,
              private readonly profileService: ProfileService) {
    super();
  }

  onSubmit(): void {
    this.transactionApiService.updateTransaction(this.transaction.id, this.transaction as TransactionPatchDto).subscribe({
      next: () => {
        this.onResult();
      },
      error: error => console.error(error)
    });
  }

  onDelete() {
    this.transactionApiService.deleteTransaction(this.transaction.id).subscribe({
      next: () => {
        this.profileService.reload()
        this.onResult();
      }
    });
  }
}
