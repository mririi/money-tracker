import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home.component";
import {MoneyTrackOverviewComponent} from "./money-track-overview/money-track-overview.component";

const routes: Routes = [
  {
    path: 'money-track',
    component: MoneyTrackOverviewComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
