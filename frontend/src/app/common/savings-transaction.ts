import { SavingsAccount } from "./savings-account";

export class SavingsTransaction {
    id: number;
    date: Date;
    description: string;
    type: string;
    status: string;
    amount: number;
    availableBalance: number;
    savingsAccount: SavingsAccount;
}
