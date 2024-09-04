import {Component, OnDestroy} from '@angular/core';
import {DialogService, DynamicDialogRef} from "primeng/dynamicdialog";
import {Footer, MessageService} from "primeng/api";
import {AddTransactionComponent} from "../add-transaction/add-transaction.component";

@Component({
  selector: 'app-custom-dialog',
  templateUrl: './custom-dialog.component.html',
  styleUrls: ['./custom-dialog.component.scss']
})
export class CustomDialogComponent implements OnDestroy {

  constructor(public dialogService: DialogService, public messageService: MessageService) {}

  ref: DynamicDialogRef | undefined;

  show() {
    this.ref = this.dialogService.open(AddTransactionComponent, {
      header: 'Add Transaction',
      width: '45vw',
      contentStyle: { overflow: 'none' },
      breakpoints: {
        '960px': '75vw',
        '640px': '90vw'
      },
      templates: {
        footer: Footer
      }
    });

    this.ref.onClose.subscribe((data: any) => {
      let summary_and_detail;
      if (data) {
        const buttonType = data?.buttonType;
        summary_and_detail = buttonType ? { summary: 'Transaction canceled!', detail: `Pressed '${buttonType}' button` } : { summary: 'Transaction done!', detail: data?.name };
      } else {
        summary_and_detail = { summary: 'Transaction canceled!', detail: 'Pressed Close button' };
      }
      this.messageService.add({ severity: 'info', ...summary_and_detail, life: 3000 });
    });

    this.ref.onMaximize.subscribe((value) => {
      this.messageService.add({ severity: 'info', summary: 'Maximized', detail: `maximized: ${value.maximized}` });
    });
  }

  ngOnDestroy() {
    if (this.ref) {
      this.ref.close();
    }
  }
}
