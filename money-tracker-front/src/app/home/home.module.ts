import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from "./home.component";
import {NavbarComponent} from './navbar/navbar.component';
import {MoneyTrackOverviewComponent} from './money-track-overview/money-track-overview.component';
import {CustomCardComponent} from './money-track-overview/custom-card/custom-card.component';
import {FormsModule} from '@angular/forms';
import {CustomDialogComponent} from './custom-dialog/custom-dialog.component';
import {AddTransactionComponent} from './add-transaction/add-transaction.component';
import { CustomTableComponent } from './money-track-overview/custom-table/custom-table.component';

@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    MoneyTrackOverviewComponent,
    CustomCardComponent,
    CustomDialogComponent,
    AddTransactionComponent,
    CustomTableComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
  ],
  providers: [
  ]
})
export class HomeModule {
}
