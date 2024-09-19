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
import {ModeToggleService} from "./core/services/mode-toggle.service";
import {MODE_STORAGE_SERVICE, ModeLocalStorageService} from "./core/services/mode-storage.service";
import {DOCUMENT} from "@angular/common";

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
    ModeToggleService,
    ModeLocalStorageService,
    { provide: MODE_STORAGE_SERVICE, useClass: ModeLocalStorageService },
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
