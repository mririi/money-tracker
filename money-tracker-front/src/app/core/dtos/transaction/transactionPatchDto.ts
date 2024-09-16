import {TransactionTypeEnum} from "../../enums/transactionTypeEnum";

export interface TransactionPatchDto {
    category?: string;
    amount?: number;
    date?: string;
    type?: TransactionTypeEnum;
    comment?: string;
    profileId?: number
}
