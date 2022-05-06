import { Appointment } from "./appointment";
import { PrimaryAccount } from "./primary-account";
import { Recipient } from "./recipient";
import { SavingsAccount } from "./savings-account";

export class User {
    userId: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    enabled: Boolean;
    primaryAccount: PrimaryAccount;
    savingsAccount: SavingsAccount;
    appointmentList: Array<Appointment>;
    recipientList: Array<Recipient>;
}
