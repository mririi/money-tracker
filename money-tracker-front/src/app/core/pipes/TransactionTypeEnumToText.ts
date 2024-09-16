import {TransactionTypeEnum} from "../enums/transactionTypeEnum";
import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'transactionTypeEnumToText'
})
export class TransactionTypeEnumToTextPipe implements PipeTransform {
  transform(value: TransactionTypeEnum): string {
    switch (value) {
      case TransactionTypeEnum.EXPENSE:
        return 'Expense';
      case TransactionTypeEnum.INCOME:
        return 'Income';
      case TransactionTypeEnum.SAVINGS:
        return 'Savings';
      default:
        return ''
    }
  }
}
