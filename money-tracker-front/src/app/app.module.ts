import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HomeModule} from "./home/home.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {ProfilApiService} from "./core/apis/profil.api.service";
import {TransactionApiService} from "./core/apis/transaction.api.service";
import {TransactionService} from "./core/services/transaction.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HomeModule,
    HttpClientModule,
  ],
  providers: [
    ProfilApiService,
    TransactionApiService,
    TransactionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
