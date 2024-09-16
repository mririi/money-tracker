import {NgModule} from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from "./home.component";
import {NavbarComponent} from './navbar/navbar.component';
import {MoneyTrackOverviewComponent} from './money-track-overview/money-track-overview.component';
import {CustomCardComponent} from './money-track-overview/custom-card/custom-card.component';
import {FormsModule} from '@angular/forms';
import {AddTransactionComponent} from './add-transaction/add-transaction.component';
import {CustomTableComponent} from './money-track-overview/custom-table/custom-table.component';
import {SharedModule} from "../shared/shared.module";
import {NgbDropdown, NgbDropdownItem, NgbDropdownMenu, NgbDropdownToggle, NgbTooltip} from "@ng-bootstrap/ng-bootstrap";
import { SelectTransactionTypeComponent } from './add-transaction/select-transaction-type/select-transaction-type.component';
import {TransactionTypeEnumToTextPipe} from "../core/pipes/TransactionTypeEnumToText";

@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    MoneyTrackOverviewComponent,
    CustomCardComponent,
    AddTransactionComponent,
    CustomTableComponent,
    SelectTransactionTypeComponent,
    TransactionTypeEnumToTextPipe
  ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        FormsModule,
        SharedModule,
        NgbTooltip,
        NgbDropdown,
        NgbDropdownToggle,
        NgbDropdownMenu,
        NgbDropdownItem,
    ],
  providers: [
    DatePipe,
    TransactionTypeEnumToTextPipe
  ]
})
export class HomeModule {
}
