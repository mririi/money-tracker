import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-custom-modal',
  templateUrl: './custom-modal.component.html',
  styleUrls: ['./custom-modal.component.scss']
})
export class CustomModalComponent {
  @Output() submit: EventEmitter<void> = new EventEmitter<void>();
  @Input() title: string = '';
  @Input() button: string = 'Save';

  constructor(private readonly modalService: NgbModal) {
  }

  close() {
    this.modalService.dismissAll();
  }

  onSubmit() {
    this.submit.emit();
  }
}
