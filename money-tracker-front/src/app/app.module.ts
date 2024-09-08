import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HomeModule} from "./home/home.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {ProfileApiService} from "./core/apis/profile.api.service";
import {TransactionApiService} from "./core/apis/transaction.api.service";
import {TransactionService} from "./core/services/transaction.service";
import {ProfileService} from "./core/services/profile.service";
import {AuthModule} from "./auth/auth.module";
import {AuthService} from "./core/services/auth.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AuthModule,
    HomeModule,
    HttpClientModule,
  ],
  providers: [
    ProfileApiService,
    TransactionApiService,
    TransactionService,
    ProfileService,
    AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
