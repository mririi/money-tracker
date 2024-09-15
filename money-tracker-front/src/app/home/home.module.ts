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
import {NgbTooltip} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    MoneyTrackOverviewComponent,
    CustomCardComponent,
    AddTransactionComponent,
    CustomTableComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    SharedModule,
    NgbTooltip,
  ],
  providers: [
    DatePipe
  ]
})
export class HomeModule {
}
