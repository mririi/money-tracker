import {TransactionTypeEnum} from "../../enums/transactionType.enum";

export interface TransactionPostDto {
    category: string;
    amount: number;
    date: string;
    type: TransactionTypeEnum;
    comment: string;
    profileId: number
}
