import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import {HomeComponent} from "./home.component";
import { NavbarComponent } from './navbar/navbar.component';
import {MenubarModule} from "primeng/menubar";
import { MoneyTrackOverviewComponent } from './money-track-overview/money-track-overview.component';
import { CustomCardComponent } from './money-track-overview/custom-card/custom-card.component';
import { CardModule } from 'primeng/card';
import {TableModule} from "primeng/table";
import {TagModule} from 'primeng/tag';
import {Button} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {FormsModule} from '@angular/forms';
import { CustomDialogComponent } from './custom-dialog/custom-dialog.component';
import {ToastModule} from "primeng/toast";
import {DialogService, DynamicDialogModule} from "primeng/dynamicdialog";
import {MessageService} from "primeng/api";
import { AddTransactionComponent } from './add-transaction/add-transaction.component';
import {DropdownModule} from "primeng/dropdown";

@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    MoneyTrackOverviewComponent,
    CustomCardComponent,
    CustomDialogComponent,
    AddTransactionComponent
  ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        MenubarModule,
        CardModule,
        TableModule,
        TagModule,
        Button,
        DialogModule,
        InputTextModule,
        FormsModule,
        ToastModule,
        DynamicDialogModule,
        DropdownModule,
    ],
  providers: [
    DialogService,
    MessageService
  ]
})
export class HomeModule { }
