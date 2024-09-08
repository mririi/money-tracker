import {TransactionTypeEnum} from "../../enums/transactionTypeEnum";

export interface TransactionGetDto {
  id: number;
  category: string;
  amount: number;
  date: string;
  type: TransactionTypeEnum;
}
