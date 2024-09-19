import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoadingComponent} from "./loading/loading.component";
import { CustomModalComponent } from './custom-modal/custom-modal.component';
import { ModeToggleComponent } from './mode-toggle/mode-toggle.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    LoadingComponent,
    CustomModalComponent,
    ModeToggleComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    LoadingComponent,
    CustomModalComponent,
    ModeToggleComponent
  ]
})
export class SharedModule {
}
