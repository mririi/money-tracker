import {TransactionTypeEnum} from "../../enums/transactionType.enum";

export interface TransactionGetDto {
  id: number;
  category: string;
  amount: number;
  date: string;
  comment: string;
  type: TransactionTypeEnum;
}
