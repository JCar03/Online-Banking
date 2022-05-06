import { PrimaryAccount } from "./primary-account";

export class PrimaryTransaction {
    id: number;
    date: Date;
    description: string;
    type: string;
    status: string;
    amount: number;
    availableBalance: number;
    primaryAccount: PrimaryAccount;
}
