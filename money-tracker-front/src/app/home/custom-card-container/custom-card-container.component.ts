import {Component, OnInit} from '@angular/core';
import {ProfileService} from "../../core/services/profile.service";
import {TransactionApiService} from "../../core/apis/transaction.api.service";
import {UpdateBalanceModalComponent} from "../update-balance-modal/update-balance-modal.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-custom-card-container',
  templateUrl: './custom-card-container.component.html',
  styleUrls: ['./custom-card-container.component.scss']
})
export class CustomCardContainerComponent implements OnInit {
  profileId: number = -1;
  balance: string = '0';
  revenuTotal: string = '0';
  expenseTotal: string = '0';
  savingsTotal: string = '0';

  constructor(private readonly profileService: ProfileService,
              private readonly modalService: NgbModal,
              private readonly transactionApiService: TransactionApiService) {
  }

  private loadInfo() {
    this.transactionApiService.getRevenuTotal(this.profileId).subscribe({
      next: revenuTotal => {
        this.revenuTotal = revenuTotal + '';
      },
      error: error => console.error("error" + error.message)
    });
    this.transactionApiService.getExpenseTotal(this.profileId).subscribe({
      next: expenseTotal => {
        this.expenseTotal = expenseTotal + '';
      },
      error: error => console.error("error" + error.message)
    });
    this.transactionApiService.getSavingsTotal(this.profileId).subscribe({
      next: savingsTotal => {
        this.savingsTotal = savingsTotal + '';
      },
      error: error => console.error("error" + error.message)
    });
  }

  ngOnInit(): void {
    this.profileService.profile.subscribe(profile => {
      this.profileId = profile.id;
      this.balance = profile.balance + '';
      this.loadInfo();
    });
  }

  onUpdateBalance() {
    const popup = this.modalService.open(UpdateBalanceModalComponent);
    const modalRef = popup.componentInstance as UpdateBalanceModalComponent;
    modalRef.profileId = this.profileId;
    modalRef.balance = +this.balance;
    popup.result.then(() => {
      this.profileService.reload();
    });
  }
}
