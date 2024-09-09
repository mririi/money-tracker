import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {TransactionGetDto} from "../../core/dtos/transaction/transactionGetDto";
import {TransactionApiService} from "../../core/apis/transaction.api.service";
import {ProfileApiService} from "../../core/apis/profile.api.service";
import {TransactionService} from "../../core/services/transaction.service";
import {ProfileService} from "../../core/services/profile.service";
import {ProfileGetDto} from "../../core/dtos/profil/profileGetDto";
import {ProfileTokenPostDto} from "../../core/dtos/profil/profileTokenPostDto";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-money-track-overview',
  templateUrl: './money-track-overview.component.html',
  styleUrls: ['./money-track-overview.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MoneyTrackOverviewComponent implements OnInit {
  balance: string = '0';
  revenuTotal: string = '0';
  expenseTotal: string = '0';
  transactions: TransactionGetDto[] = [];
  profileId: number = -1;
  savingsTotal: string = '0';

  constructor(private readonly transactionApiService: TransactionApiService,
              private readonly router: Router,
              private readonly route: ActivatedRoute,
              public transactionService: TransactionService,
              private readonly profileApiService: ProfileApiService,
              private readonly profileService:ProfileService) {
  }

  ngOnInit(): void {
    const profileTokenPostDto: ProfileTokenPostDto = {
      token: localStorage.getItem('access_token') || '',
    }
    this.profileApiService.getProfileByToken(profileTokenPostDto).subscribe({
      next: (profile: ProfileGetDto) => {
        this.profileService._profile.next(profile);
        this.profileId = profile.id;
        this.balance = profile.balance + '';
        this.loadTransactions();
        this.loadInfo();
      },
      error: error => console.error("error" + error.message)
    });
    this.transactionService.transactions.subscribe(transactions => {
      this.transactions = transactions;
    });
  }

  loadTransactions() {
    this.transactionApiService.getTransactions(this.profileId).subscribe({
      next: transactions => {
        this.transactionService._transactions.next(transactions);
      },
      error: error => console.error("error" + error.message)
    });
  }
  // getSeverity(type: TransactionTypeEnum) {
  //   switch (type) {
  //     case TransactionTypeEnum.INCOME:
  //       return 'success';
  //     case TransactionTypeEnum.EXPENSE:
  //       return 'danger';
  //     case TransactionTypeEnum.SAVINGS:
  //       return 'warning';
  //     default:
  //       return;
  //   }
  // }

  onOpenAddTransaction() {
    this.router.navigate(['add-transaction'], {relativeTo: this.route});
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
}
