import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home.component";
import {MoneyTrackOverviewComponent} from "./money-track-overview/money-track-overview.component";
import {AddTransactionComponent} from "./add-transaction/add-transaction.component";

const routes: Routes = [
  {
    path: 'money-track',
    component: MoneyTrackOverviewComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'add-transaction',
    component: AddTransactionComponent,
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
