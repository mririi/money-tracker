import {AfterViewInit, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {TransactionGetDto} from "../../core/dtos/transaction/transactionGetDto";
import {TransactionApiService} from "../../core/apis/transaction.api.service";
import {ProfileApiService} from "../../core/apis/profile.api.service";
import {TransactionService} from "../../core/services/transaction.service";
import {ProfileService} from "../../core/services/profile.service";
import {ProfileGetDto} from "../../core/dtos/profil/profileGetDto";
import {ProfileTokenPostDto} from "../../core/dtos/profil/profileTokenPostDto";

@Component({
  selector: 'app-money-track-overview',
  templateUrl: './money-track-overview.component.html',
  styleUrls: ['./money-track-overview.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MoneyTrackOverviewComponent implements OnInit, AfterViewInit {
  balance: string = '0';
  transactions: TransactionGetDto[] = [];
  profileId: number = -1;

  constructor(private readonly transactionApiService: TransactionApiService,
              public transactionService: TransactionService,
              private readonly profileApiService: ProfileApiService,
              private readonly profileService: ProfileService) {
  }

  ngOnInit(): void {
    this.loadProfile();
    this.transactionService.transactions.subscribe(transactions => {
      this.transactions = transactions;
    });
  }

  ngAfterViewInit(): void {
    this.profileService.reloaded.subscribe(() => {
      this.loadProfile();
    });
  }

  loadProfile() {
    const profileTokenPostDto: ProfileTokenPostDto = {
      token: localStorage.getItem('access_token') || '',
    }
    this.profileApiService.getProfileByToken(profileTokenPostDto).subscribe({
      next: (profile: ProfileGetDto) => {
        this.profileService.setProfile(profile);
        this.profileId = profile.id;
        this.loadTransactions();
      },
      error: error => console.error("error" + error.message)
    });
  }

  loadTransactions() {
    this.transactionApiService.getTransactions(this.profileId).subscribe({
      next: transactions => {
        this.transactionService.setTransactions(transactions);
      },
      error: error => console.error("error" + error.message)
    });
  }
}
