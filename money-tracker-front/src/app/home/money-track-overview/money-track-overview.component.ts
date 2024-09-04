import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {TransactionGetDto} from "../../core/dtos/transaction/TransactionGetDto";
import {TransactionPostDto} from '../../core/dtos/transaction/TransactionPostDto';
import {TransactionApiService} from "../../core/apis/transaction.api.service";
import {ProfilApiService} from "../../core/apis/profil.api.service";
import {TransactionService} from "../../core/services/transaction.service";

@Component({
  selector: 'app-money-track-overview',
  templateUrl: './money-track-overview.component.html',
  styleUrls: ['./money-track-overview.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MoneyTrackOverviewComponent implements OnInit {
  balance: string = '0 DT';
  revenuTotal: string = '0 DT';
  expenseTotal: string = '0 DT';
  transactions: TransactionGetDto[] = [];

  constructor(private readonly transactionApiService: TransactionApiService,
              public transactionService: TransactionService,
              private readonly profilApiService:ProfilApiService) {
  }

  ngOnInit(): void {
    this.transactionApiService.getTransactions().subscribe({
      next: transactions => {
        this.transactionService._transactions.next(transactions);
      },
      error: error => console.error("error" + error.message)
    });
    this.transactionService.transactions.subscribe(transactions => {
      this.transactions = transactions;
    });
    this.profilApiService.getProfil().subscribe(profil => {
      if(!!profil) {
        this.balance = profil.balance + ' DT';
        this.revenuTotal = profil.totalIncome + ' DT';
        this.expenseTotal = profil.totalExpense + ' DT';
      }
    });
  }
  getSeverity(type: string) {
    switch (type) {
      case 'INCOME':
        return 'success';
      case 'EXPENSE':
        return 'danger';
      default:
        return;
    }
  }
}
