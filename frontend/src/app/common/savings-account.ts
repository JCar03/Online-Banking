import { SavingsTransaction } from "./savings-transaction";

export class SavingsAccount {
    id: number;
    accountNumber: number;
    accountBalance: number;
    savingsTransactionList: Array<SavingsTransaction>;
}
