import {TransactionTypeEnum} from "../../enums/transactionType.enum";

export interface TransactionPatchDto {
    category?: string;
    amount?: number;
    date?: string;
    type?: TransactionTypeEnum;
    comment?: string;
    profileId?: number
}
