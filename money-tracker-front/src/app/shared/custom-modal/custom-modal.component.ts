import {Component, EventEmitter, Output} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-custom-modal',
  templateUrl: './custom-modal.component.html',
  styleUrls: ['./custom-modal.component.scss']
})
export class CustomModalComponent {
  @Output() onSubmitChange: EventEmitter<void> = new EventEmitter<void>();

  constructor(private readonly modalService: NgbModal) {
  }

  close() {
    this.modalService.dismissAll();
  }

  onSubmit() {
    this.onSubmitChange.emit();
  }
}
