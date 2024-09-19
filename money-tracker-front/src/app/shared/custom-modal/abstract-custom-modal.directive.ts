import {Directive, ViewChild} from '@angular/core';
import {CustomModalComponent} from "./custom-modal.component";

@Directive()
export abstract class AbstractCustomModalDirective {
  @ViewChild(CustomModalComponent, {static: true}) protected modal: CustomModalComponent = {} as CustomModalComponent;

  protected constructor() {
  }

  onResult(result?: any) {
    this.modal.close(result);
  }

  dismiss() {
    this.modal.onDismiss();
  }
}
