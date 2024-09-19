import { Component } from '@angular/core';
import {AbstractCustomModalDirective} from "../../shared/custom-modal/abstract-custom-modal.directive";
import {ProfileApiService} from "../../core/apis/profile.api.service";

@Component({
  selector: 'app-update-balance-modal',
  templateUrl: './update-balance-modal.component.html',
  styleUrls: ['./update-balance-modal.component.scss']
})
export class UpdateBalanceModalComponent extends AbstractCustomModalDirective {
  profileId: number = -1;
  balance: number = -1;

  constructor(protected readonly profileApiService: ProfileApiService) {
    super();
  }

  onSubmit() {
    this.profileApiService.updateBalance(this.profileId, +this.balance).subscribe({
      next: () => {
        this.onResult()
      },
      error: error => console.error("error" + error.message)
    });
  }
}
