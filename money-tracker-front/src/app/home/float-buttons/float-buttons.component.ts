import {Component, Input, OnInit} from '@angular/core';
import {AddTransactionModalComponent} from "../add-transaction/add-transaction-modal.component";
import {FilterTransactionsModalComponent} from "../filter-transactions-modal/filter-transactions-modal.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {TransactionGetDto} from "../../core/dtos/transaction/transactionGetDto";
import {ProfileService} from "../../core/services/profile.service";
import {TransactionService} from "../../core/services/transaction.service";

@Component({
  selector: 'app-float-buttons',
  templateUrl: './float-buttons.component.html',
  styleUrls: ['./float-buttons.component.scss']
})
export class FloatButtonsComponent implements OnInit {
  profileId: number = -1;
  transactions: TransactionGetDto[] = [] as TransactionGetDto[];
  showMenu: boolean = false;

  constructor(private readonly modalService: NgbModal,
              private readonly transactionService: TransactionService,
              private readonly profileService: ProfileService) {
  }

  ngOnInit(): void {
    this.transactionService.transactions.subscribe(transactions => this.transactions = transactions);
    this.profileService.profile.subscribe(profile => this.profileId = profile.id)
  }

  onOpenAddTransaction() {
    const popup = this.modalService.open(AddTransactionModalComponent);
    const modalRef = popup.componentInstance as AddTransactionModalComponent;
    modalRef.profileId = this.profileId;
    popup.result.then(() => {
      this.profileService.reload();
    });
  }

  onToggleMenu() {
    this.showMenu = !this.showMenu;
  }

  onFilterTransactions() {
    const popup = this.modalService.open(FilterTransactionsModalComponent);
    const modalRef = popup.componentInstance as FilterTransactionsModalComponent;
    modalRef.transactions = [...this.transactions];
    popup.result.then((result) => {
      this.transactionService.setFilteredTransactions(result);
    });
  }
}
