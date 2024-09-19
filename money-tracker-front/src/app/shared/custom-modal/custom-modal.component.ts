import {Component, ContentChild, EventEmitter, Input, Output, TemplateRef} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-custom-modal',
  templateUrl: './custom-modal.component.html',
  styleUrls: ['./custom-modal.component.scss']
})
export class CustomModalComponent {
  @Output() submit: EventEmitter<void> = new EventEmitter<void>();
  @Input() title: string = '';
  @Input() button: string = 'Save';
  @ContentChild('customButtons', {static: true}) customButtons: TemplateRef<any> = {} as TemplateRef<any>;

  constructor(public readonly modalService: NgbActiveModal) {
  }

  close(result: any): void {
    this.modalService.close(result);
  }

  onDismiss(): void {
    this.modalService.dismiss();
  }

  onSubmit(): void {
    this.submit.emit();
  }
}
