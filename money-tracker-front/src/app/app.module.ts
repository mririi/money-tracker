import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HomeModule} from "./home/home.module";
import {HttpClientModule} from "@angular/common/http";
import {AuthModule} from "./auth/auth.module";
import {ProfileApiService} from "./core/apis/profile.api.service";
import {TransactionApiService} from "./core/apis/transaction.api.service";
import {TransactionService} from "./core/services/transaction.service";
import {ProfileService} from "./core/services/profile.service";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
    AuthModule,
    NgbModule
  ],
  providers: [
    ProfileApiService,
    TransactionApiService,
    TransactionService,
    ProfileService,
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
