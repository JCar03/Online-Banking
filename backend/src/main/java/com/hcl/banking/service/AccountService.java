package com.hcl.banking.service;

import com.hcl.banking.entity.PrimaryAccount;
import com.hcl.banking.entity.SavingsAccount;

import java.security.Principal;


public interface AccountService {

    PrimaryAccount createPrimaryAccount();

    SavingsAccount createSavingsAccount();

    void deposit(String accountType, double amount, Principal principal);

    void withdraw(String accountType, double amount, Principal principal);

}