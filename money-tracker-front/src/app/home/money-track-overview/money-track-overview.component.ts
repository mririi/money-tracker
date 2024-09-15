import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {TransactionGetDto} from "../../core/dtos/transaction/transactionGetDto";
import {TransactionApiService} from "../../core/apis/transaction.api.service";
import {ProfileApiService} from "../../core/apis/profile.api.service";
import {TransactionService} from "../../core/services/transaction.service";
import {ProfileService} from "../../core/services/profile.service";
import {ProfileGetDto} from "../../core/dtos/profil/profileGetDto";
import {ProfileTokenPostDto} from "../../core/dtos/profil/profileTokenPostDto";
import {ActivatedRoute, Router} from "@angular/router";
import {NgbModal, NgbModalConfig} from "@ng-bootstrap/ng-bootstrap";
import {TransactionTypeEnum} from "../../core/enums/transactionTypeEnum";

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
  showMenu: boolean = false;
  filterType: any;
  filteredData: TransactionGetDto[] = [];
  dateStartPeriod: string = '';
  dateEndPeriod: string = ''
  isShowPeriod: boolean = false;

  constructor(private readonly transactionApiService: TransactionApiService,
              private readonly router: Router,
              private readonly route: ActivatedRoute,
              public transactionService: TransactionService,
              private readonly profileApiService: ProfileApiService,
              config: NgbModalConfig,
              private modalService: NgbModal,
              private readonly profileService: ProfileService) {
    config.backdrop = 'static';
    config.keyboard = false;
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
      this.filteredData = transactions;
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

  onOpenAddTransaction(content: any) {
    this.modalService.open(content);
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

  onToggleMenu() {
    this.showMenu = !this.showMenu;
  }

  onLogout() {
    localStorage.removeItem('access_token');
    this.router.navigate(['login']).then();
  }

  onFilterTransactions(content: any) {
    this.modalService.open(content);
  }

  onFilterSubmit() {
    if (this.filterType === 'dateAsc') {
      this.filteredData = this.transactions.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    } else if (this.filterType === 'dateDesc') {
      this.filteredData = this.transactions.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    } else if (this.filterType === 'amountAsc') {
      this.filteredData = this.transactions.sort((a, b) => a.amount - b.amount);
    } else if (this.filterType === 'amountDesc') {
      this.filteredData = this.transactions.sort((a, b) => b.amount - a.amount);
    } else if (this.filterType === 'category') {
      this.filteredData = this.transactions.sort((a, b) => a.category.localeCompare(b.category));
    } else {
      this.filteredData = this.transactions.filter(transaction => {
        switch (this.filterType) {
          case 'income':
            return transaction.type === TransactionTypeEnum.INCOME;
          case 'expense':
            return transaction.type === TransactionTypeEnum.EXPENSE;
          case 'savings':
            return transaction.type === TransactionTypeEnum.SAVINGS;
          case 'currentMonth':
            return new Date(transaction.date).getMonth() === new Date().getMonth();
          case 'lastMonth':
            return new Date(transaction.date).getMonth() === new Date().getMonth() - 1;
          case 'period':
            return new Date(transaction.date) >= new Date(this.dateStartPeriod) && new Date(transaction.date) <= new Date(this.dateEndPeriod);
          default:
            return true;

        }
      });
    }
    this.onCloseModal();
  }

  onCloseModal() {
    this.modalService.dismissAll();
  }

  onChangeType(event: any) {
    if (event.target.value === 'period') {
      this.isShowPeriod = true;
    }
  }
}
