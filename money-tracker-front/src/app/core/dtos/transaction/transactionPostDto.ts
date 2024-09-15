import {TransactionTypeEnum} from "../../enums/transactionTypeEnum";

export interface TransactionPostDto {
    category: string;
    amount: number;
    date: string;
    type: TransactionTypeEnum;
    comment: string;
    profileId: number
}
