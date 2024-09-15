import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoadingComponent} from "./loading/loading.component";
import { CustomModalComponent } from './custom-modal/custom-modal.component';


@NgModule({
  declarations: [
    LoadingComponent,
    CustomModalComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoadingComponent
  ]
})
export class SharedModule {
}
