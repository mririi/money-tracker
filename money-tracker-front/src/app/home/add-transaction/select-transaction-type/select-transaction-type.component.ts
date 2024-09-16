import {Component, forwardRef, Input} from '@angular/core';
import {TransactionTypeEnum} from "../../../core/enums/transactionTypeEnum";
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'app-select-transaction-type',
  templateUrl: './select-transaction-type.component.html',
  styleUrls: ['./select-transaction-type.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectTransactionTypeComponent),
      multi: true
    }
  ]
})
export class SelectTransactionTypeComponent implements ControlValueAccessor {
  @Input() withLabel: boolean = true;
  type: TransactionTypeEnum = TransactionTypeEnum.EXPENSE;
  transactionTypes: TransactionTypeEnum[] = Object.keys(TransactionTypeEnum) as TransactionTypeEnum[];
  _onChange: (fn: any) => void = () => {};

  registerOnChange(fn: any): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  writeValue(obj: any): void {
    this.type = obj;
  }

  onChange(event: any) {
    this._onChange(event.target.value);
  }
}
