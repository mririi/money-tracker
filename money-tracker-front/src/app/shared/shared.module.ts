import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoadingComponent} from "./loading/loading.component";
import {CustomModalComponent} from './custom-modal/custom-modal.component';
import {ModeToggleComponent} from './mode-toggle/mode-toggle.component';
import {FormsModule} from "@angular/forms";
import {ControlErrorComponent} from "./control-error/control-error.component";
import {PaginationComponent} from './pagination/pagination.component';
import {
  NgbPagination,
  NgbPaginationFirst,
  NgbPaginationLast,
  NgbPaginationNext,
  NgbPaginationPrevious
} from "@ng-bootstrap/ng-bootstrap";


@NgModule({
  declarations: [
    LoadingComponent,
    CustomModalComponent,
    ModeToggleComponent,
    ControlErrorComponent,
    PaginationComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbPagination,
    NgbPaginationFirst,
    NgbPaginationLast,
    NgbPaginationNext,
    NgbPaginationPrevious
  ],
  exports: [
    LoadingComponent,
    CustomModalComponent,
    ModeToggleComponent,
    ControlErrorComponent,
    PaginationComponent
  ]
})
export class SharedModule {
}
